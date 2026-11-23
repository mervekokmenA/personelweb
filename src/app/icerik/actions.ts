"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const STATUS_CYCLE = ["NOT_STARTED", "IN_PROGRESS", "DONE"] as const;

export async function addContentIdea(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const category = String(formData.get("category") ?? "Genel").trim() || "Genel";
  const format = String(formData.get("format") ?? "").trim() || null;
  if (!title) return;
  await prisma.contentIdea.create({
    data: { title, category, format, source: "manual" },
  });
  revalidatePath("/icerik");
}

export async function cycleContentIdeaStatus(formData: FormData) {
  const id = String(formData.get("id"));
  const current = await prisma.contentIdea.findUnique({ where: { id } });
  if (!current) return;
  const idx = STATUS_CYCLE.indexOf(current.status);
  const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
  await prisma.contentIdea.update({ where: { id }, data: { status: next } });
  revalidatePath("/icerik");
}

export async function updateContentIdeaNotes(formData: FormData) {
  const id = String(formData.get("id"));
  const notes = String(formData.get("notes") ?? "");
  await prisma.contentIdea.update({ where: { id }, data: { notes } });
  revalidatePath("/icerik");
}

export async function deleteContentIdea(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.contentIdea.delete({ where: { id } });
  revalidatePath("/icerik");
}

function ideaFilter(formData: FormData) {
  const q = String(formData.get("q") ?? "").trim();
  const category = String(formData.get("category") ?? "");
  const status = String(formData.get("status") ?? "");
  return {
    ...(q ? { title: { contains: q, mode: "insensitive" as const } } : {}),
    ...(category ? { category } : {}),
    ...(status ? { status: status as "NOT_STARTED" | "IN_PROGRESS" | "DONE" } : {}),
  };
}

/** Seçilen fikirleri (ids = virgülle ayrılmış id listesi) siler. */
export async function deleteSelectedContentIdeas(formData: FormData) {
  const ids = String(formData.get("ids") ?? "").split(",").filter(Boolean);
  if (ids.length === 0) return;
  await prisma.contentIdea.deleteMany({ where: { id: { in: ids } } });
  revalidatePath("/icerik");
}

/** Mevcut filtreye (arama/kategori/durum) uyan tüm fikirleri siler; filtre boşsa hepsini siler. */
export async function deleteFilteredContentIdeas(formData: FormData) {
  await prisma.contentIdea.deleteMany({ where: ideaFilter(formData) });
  revalidatePath("/icerik");
}

export interface RandomIdea {
  id: string;
  title: string;
  category: string;
  format: string | null;
}

/** "Yapılmadı" durumundaki fikirlerden rastgele birini döndürür. */
export async function pickRandomIdea(): Promise<RandomIdea | null> {
  const count = await prisma.contentIdea.count({ where: { status: "NOT_STARTED" } });
  if (count === 0) return null;
  const skip = Math.floor(Math.random() * count);
  const idea = await prisma.contentIdea.findFirst({
    where: { status: "NOT_STARTED" },
    orderBy: { createdAt: "asc" },
    skip,
  });
  return idea;
}
