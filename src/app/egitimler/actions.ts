"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTraining(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return;
  const provider = String(formData.get("provider") ?? "").trim() || null;
  const url = String(formData.get("url") ?? "").trim() || null;
  const type = String(formData.get("type") ?? "FREE") as "FREE" | "PAID";
  const category = String(formData.get("category") ?? "").trim() || null;
  const status = String(formData.get("status") ?? "PLANNED") as
    | "PLANNED"
    | "ONGOING"
    | "COMPLETED"
    | "PAUSED";
  const description = String(formData.get("description") ?? "").trim() || null;

  const count = await prisma.training.count();
  await prisma.training.create({
    data: { name, provider, url, type, category, status, description, order: count },
  });
  revalidatePath("/egitimler");
}

export async function updateTraining(formData: FormData) {
  const id = String(formData.get("id"));
  const name = String(formData.get("name") ?? "").trim();
  const provider = String(formData.get("provider") ?? "").trim() || null;
  const url = String(formData.get("url") ?? "").trim() || null;
  const type = String(formData.get("type") ?? "FREE") as "FREE" | "PAID";
  const category = String(formData.get("category") ?? "").trim() || null;
  const status = String(formData.get("status") ?? "PLANNED") as
    | "PLANNED"
    | "ONGOING"
    | "COMPLETED"
    | "PAUSED";
  const description = String(formData.get("description") ?? "").trim() || null;
  const paymentInfo = String(formData.get("paymentInfo") ?? "").trim() || null;
  const instructor = String(formData.get("instructor") ?? "").trim() || null;

  await prisma.training.update({
    where: { id },
    data: { name, provider, url, type, category, status, description, paymentInfo, instructor },
  });
  revalidatePath("/egitimler");
  revalidatePath(`/egitimler/${id}`);
}

export async function deleteTraining(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.training.delete({ where: { id } });
  revalidatePath("/egitimler");
  redirect("/egitimler");
}

export async function addTrainingNote(formData: FormData) {
  const trainingId = String(formData.get("trainingId"));
  const title = String(formData.get("title") ?? "").trim() || null;
  const content = String(formData.get("content") ?? "").trim();
  const lessonDateRaw = String(formData.get("lessonDate") ?? "");
  if (!content) return;
  await prisma.trainingNote.create({
    data: {
      trainingId,
      title,
      content,
      lessonDate: lessonDateRaw ? new Date(lessonDateRaw) : null,
    },
  });
  revalidatePath(`/egitimler/${trainingId}`);
}

export async function deleteTrainingNote(formData: FormData) {
  const id = String(formData.get("id"));
  const trainingId = String(formData.get("trainingId"));
  await prisma.trainingNote.delete({ where: { id } });
  revalidatePath(`/egitimler/${trainingId}`);
}
