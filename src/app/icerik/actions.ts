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
