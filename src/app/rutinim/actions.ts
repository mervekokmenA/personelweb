"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { todayKey } from "@/lib/date";

const KINDS = ["routine", "goal", "dream"] as const;
type Kind = (typeof KINDS)[number];
const kindOf = (v: unknown): Kind | null => (KINDS.includes(v as Kind) ? (v as Kind) : null);

function refresh() {
  revalidatePath("/rutinim");
  revalidatePath("/");
}

function parsePriority(raw: FormDataEntryValue | null): number | null {
  const n = parseInt(String(raw ?? ""), 10);
  return Number.isInteger(n) && n >= 1 && n <= 99 ? n : null;
}

export async function addLifeItem(formData: FormData) {
  const kind = kindOf(formData.get("kind"));
  const text = String(formData.get("text") ?? "").trim();
  if (!kind || !text) return;
  const last = await prisma.lifeItem.findFirst({ where: { kind }, orderBy: { order: "desc" } });
  await prisma.lifeItem.create({
    data: { kind, text: text.slice(0, 1000), priority: kind === "routine" ? null : parsePriority(formData.get("priority")), order: (last?.order ?? 0) + 1 },
  });
  refresh();
}

export async function updateLifeItem(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const text = String(formData.get("text") ?? "").trim();
  if (!id || !text) return;
  const note = String(formData.get("note") ?? "").trim();
  await prisma.lifeItem.update({
    where: { id },
    data: { text: text.slice(0, 1000), note: note ? note.slice(0, 2000) : null, priority: parsePriority(formData.get("priority")) },
  });
  refresh();
}

export async function deleteLifeItem(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  await prisma.lifeItem.deleteMany({ where: { id } });
  refresh();
}

export async function toggleLifeDone(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const item = await prisma.lifeItem.findUnique({ where: { id } });
  if (!item) return;
  await prisma.lifeItem.update({ where: { id }, data: { done: !item.done } });
  refresh();
}

/** Satırı kendi listesinde bir basamak yukarı (-1) / aşağı (+1) taşır. */
export async function moveLifeItem(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const dir = Number(formData.get("dir"));
  if (dir !== -1 && dir !== 1) return;
  const item = await prisma.lifeItem.findUnique({ where: { id } });
  if (!item) return;
  const list = await prisma.lifeItem.findMany({ where: { kind: item.kind }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
  const i = list.findIndex((x) => x.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= list.length) return;
  [list[i], list[j]] = [list[j], list[i]];
  await prisma.$transaction(list.map((x, idx) => prisma.lifeItem.update({ where: { id: x.id }, data: { order: idx + 1 } })));
  refresh();
}

/** Maddeyi başka bir listeye taşır (sona eklenir). */
export async function switchLifeKind(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const kind = kindOf(formData.get("kind"));
  if (!id || !kind) return;
  const last = await prisma.lifeItem.findFirst({ where: { kind }, orderBy: { order: "desc" } });
  await prisma.lifeItem.update({ where: { id }, data: { kind, order: (last?.order ?? 0) + 1, priority: kind === "routine" ? null : undefined } });
  refresh();
}

/** Ana sayfadaki rutin kartından bugünün işaretini açıp kapatır. */
export async function toggleRoutineCheck(formData: FormData) {
  const itemId = String(formData.get("id") ?? "");
  if (!itemId) return;
  const date = todayKey();
  const existing = await prisma.lifeRoutineCheck.findUnique({ where: { itemId_date: { itemId, date } } });
  if (existing) await prisma.lifeRoutineCheck.delete({ where: { id: existing.id } });
  else await prisma.lifeRoutineCheck.create({ data: { itemId, date } });
  refresh();
}

/** Satırın sıra numarasını (aynı numara birden fazla maddede olabilir) günceller; boş = numarasız. */
export async function setLifePriority(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  await prisma.lifeItem.update({ where: { id }, data: { priority: parsePriority(formData.get("priority")) } });
  refresh();
}
