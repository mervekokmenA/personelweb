"use server";

import { prisma } from "@/lib/prisma";
import { dayKey } from "@/lib/date";
import { revalidatePath } from "next/cache";

export async function addHabit(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return;
  const frequency = String(formData.get("frequency") ?? "MONTHLY") as "DAILY" | "WEEKLY" | "MONTHLY";
  const indefinite = formData.get("indefinite") === "on";
  const totalPeriodsRaw = String(formData.get("totalPeriods") ?? "").trim();
  const totalPeriods = !indefinite && totalPeriodsRaw ? parseInt(totalPeriodsRaw, 10) : null;

  const count = await prisma.habit.count();
  await prisma.habit.create({
    data: {
      title,
      frequency,
      indefinite,
      totalPeriods,
      order: count,
    },
  });
  revalidatePath("/aliskanliklar");
}

export async function toggleHabitDay(formData: FormData) {
  const habitId = String(formData.get("habitId"));
  const date = String(formData.get("date"));
  const dKey = dayKey(date);
  const existing = await prisma.habitCompletion.findUnique({
    where: { habitId_date: { habitId, date: dKey } },
  });
  await prisma.habitCompletion.upsert({
    where: { habitId_date: { habitId, date: dKey } },
    update: { done: !(existing?.done ?? false) },
    create: { habitId, date: dKey, done: true },
  });
  revalidatePath("/aliskanliklar");
}

export async function deleteHabit(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.habit.delete({ where: { id } });
  revalidatePath("/aliskanliklar");
}

export async function toggleHabitActive(formData: FormData) {
  const id = String(formData.get("id"));
  const current = await prisma.habit.findUnique({ where: { id } });
  if (!current) return;
  await prisma.habit.update({ where: { id }, data: { active: !current.active } });
  revalidatePath("/aliskanliklar");
}
