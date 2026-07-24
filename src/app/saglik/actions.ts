"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function toDate(value: string): Date {
  return new Date(value + "T00:00:00.000Z");
}

export async function addPeriod(formData: FormData) {
  const startDate = String(formData.get("startDate") ?? "");
  const endDateRaw = String(formData.get("endDate") ?? "");
  const notes = String(formData.get("notes") ?? "").trim() || null;
  if (!startDate) return;
  await prisma.periodEntry.create({
    data: {
      startDate: toDate(startDate),
      endDate: endDateRaw ? toDate(endDateRaw) : null,
      notes,
    },
  });
  revalidatePath("/saglik");
}

export async function deletePeriod(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.periodEntry.delete({ where: { id } });
  revalidatePath("/saglik");
}

export async function addLaserSession(formData: FormData) {
  const date = String(formData.get("date") ?? "");
  const area = String(formData.get("area") ?? "").trim() || null;
  const notes = String(formData.get("notes") ?? "").trim() || null;
  if (!date) return;
  await prisma.laserSession.create({ data: { date: toDate(date), area, notes } });
  revalidatePath("/saglik");
}

export async function deleteLaserSession(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.laserSession.delete({ where: { id } });
  revalidatePath("/saglik");
}

export async function updateHealthSettings(formData: FormData) {
  const avgCycleLengthDays = parseInt(String(formData.get("avgCycleLengthDays")), 10);
  const avgPeriodLengthDays = parseInt(String(formData.get("avgPeriodLengthDays")), 10);
  const laserIntervalDays = parseInt(String(formData.get("laserIntervalDays")), 10);

  await prisma.appSettings.upsert({
    where: { id: "singleton" },
    update: {
      ...(Number.isFinite(avgCycleLengthDays) ? { avgCycleLengthDays } : {}),
      ...(Number.isFinite(avgPeriodLengthDays) ? { avgPeriodLengthDays } : {}),
      ...(Number.isFinite(laserIntervalDays) ? { laserIntervalDays } : {}),
    },
    create: {
      id: "singleton",
      avgCycleLengthDays: Number.isFinite(avgCycleLengthDays) ? avgCycleLengthDays : 28,
      avgPeriodLengthDays: Number.isFinite(avgPeriodLengthDays) ? avgPeriodLengthDays : 5,
      laserIntervalDays: Number.isFinite(laserIntervalDays) ? laserIntervalDays : 42,
    },
  });
  revalidatePath("/saglik");
}
