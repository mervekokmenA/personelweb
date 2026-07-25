"use server";

import { prisma } from "@/lib/prisma";
import { dayKey } from "@/lib/date";
import { revalidatePath } from "next/cache";

export async function logReadingPages(formData: FormData) {
  const date = String(formData.get("date") ?? "");
  const pages = parseInt(String(formData.get("pages") ?? ""), 10);
  const bookTitle = String(formData.get("bookTitle") ?? "").trim() || null;
  if (!date || !Number.isFinite(pages)) return;

  const dKey = dayKey(date);
  await prisma.readingLog.upsert({
    where: { date: dKey },
    update: { pages, ...(bookTitle ? { bookTitle } : {}) },
    create: { date: dKey, pages, bookTitle },
  });
  revalidatePath("/");
  revalidatePath("/kitap-okuma");
}

export async function deleteReadingLog(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.readingLog.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/kitap-okuma");
}
