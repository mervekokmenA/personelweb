"use server";

import { prisma } from "@/lib/prisma";
import { dayKey } from "@/lib/date";
import { revalidatePath } from "next/cache";

function revalidateDay() {
  revalidatePath("/gunluk");
}

// ---------- Zaman Bloğu (Günlük Saat Planı) ----------

export async function addTimeBlock(formData: FormData) {
  const date = String(formData.get("date"));
  const startTime = String(formData.get("startTime") ?? "");
  const endTime = String(formData.get("endTime") ?? "");
  const activity = String(formData.get("activity") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim() || null;
  if (!activity || !startTime) return;

  const count = await prisma.timeBlock.count({ where: { date: dayKey(date) } });
  await prisma.timeBlock.create({
    data: { date: dayKey(date), startTime, endTime, activity, category, order: count },
  });
  revalidateDay();
}

export async function toggleTimeBlock(formData: FormData) {
  const id = String(formData.get("id"));
  const current = await prisma.timeBlock.findUnique({ where: { id } });
  if (!current) return;
  await prisma.timeBlock.update({ where: { id }, data: { done: !current.done } });
  revalidateDay();
}

export async function deleteTimeBlock(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.timeBlock.delete({ where: { id } });
  revalidateDay();
}

// ---------- Günlük Rutinler (checklist, RoutineTemplate'ten üretilir) ----------

export async function toggleRoutineCompletion(formData: FormData) {
  const templateId = String(formData.get("templateId"));
  const date = String(formData.get("date"));
  const dKey = dayKey(date);
  const existing = await prisma.routineCompletion.findUnique({
    where: { templateId_date: { templateId, date: dKey } },
  });
  await prisma.routineCompletion.upsert({
    where: { templateId_date: { templateId, date: dKey } },
    update: { done: !(existing?.done ?? false) },
    create: { templateId, date: dKey, done: true },
  });
  revalidateDay();
}

// ---------- Yapılacaklar Listesi ----------

export async function addTodo(formData: FormData) {
  const date = String(formData.get("date"));
  const text = String(formData.get("text") ?? "").trim();
  if (!text) return;
  const count = await prisma.todoItem.count({ where: { date: dayKey(date) } });
  await prisma.todoItem.create({ data: { date: dayKey(date), text, order: count } });
  revalidateDay();
}

export async function toggleTodo(formData: FormData) {
  const id = String(formData.get("id"));
  const current = await prisma.todoItem.findUnique({ where: { id } });
  if (!current) return;
  await prisma.todoItem.update({ where: { id }, data: { done: !current.done } });
  revalidateDay();
}

export async function deleteTodo(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.todoItem.delete({ where: { id } });
  revalidateDay();
}

// ---------- Düşünce / Not Günlüğü ----------

export async function addJournalNote(formData: FormData) {
  const date = String(formData.get("date"));
  const text = String(formData.get("text") ?? "").trim();
  if (!text) return;
  await prisma.journalNote.create({ data: { date: dayKey(date), text } });
  revalidateDay();
}

export async function deleteJournalNote(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.journalNote.delete({ where: { id } });
  revalidateDay();
}

// ---------- Parametre ekranı: Odak Alanları (Hobi/Yazı/Yabancı Dil/Gelişim) ----------

export async function addFocusArea(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const itemsRaw = String(formData.get("items") ?? "");
  const color = String(formData.get("color") ?? "#a78bfa");
  if (!name) return;
  const items = itemsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  const count = await prisma.focusArea.count();
  await prisma.focusArea.create({ data: { name, items, color, order: count } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function updateFocusArea(formData: FormData) {
  const id = String(formData.get("id"));
  const name = String(formData.get("name") ?? "").trim();
  const itemsRaw = String(formData.get("items") ?? "");
  const color = String(formData.get("color") ?? "#a78bfa");
  const items = itemsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  await prisma.focusArea.update({ where: { id }, data: { name, items, color } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function deleteFocusArea(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.focusArea.delete({ where: { id } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

// Odak alanı öğesine (örn. "Kil") günlük tıkla-üstünü-çiz işaretlemesi
export async function toggleFocusAreaItem(formData: FormData) {
  const focusAreaId = String(formData.get("focusAreaId"));
  const itemText = String(formData.get("itemText"));
  const date = String(formData.get("date"));
  const dKey = dayKey(date);
  const existing = await prisma.focusAreaItemCompletion.findUnique({
    where: { focusAreaId_itemText_date: { focusAreaId, itemText, date: dKey } },
  });
  await prisma.focusAreaItemCompletion.upsert({
    where: { focusAreaId_itemText_date: { focusAreaId, itemText, date: dKey } },
    update: { done: !(existing?.done ?? false) },
    create: { focusAreaId, itemText, date: dKey, done: true },
  });
  revalidateDay();
}

// ---------- Parametre ekranı: Rutin Şablonları ----------

export async function addRoutineTemplate(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim() || null;
  if (!title) return;
  const count = await prisma.routineTemplate.count();
  await prisma.routineTemplate.create({ data: { title, description, order: count } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function updateRoutineTemplate(formData: FormData) {
  const id = String(formData.get("id"));
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim() || null;
  await prisma.routineTemplate.update({ where: { id }, data: { title, description } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function toggleRoutineActive(formData: FormData) {
  const id = String(formData.get("id"));
  const current = await prisma.routineTemplate.findUnique({ where: { id } });
  if (!current) return;
  await prisma.routineTemplate.update({ where: { id }, data: { active: !current.active } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function toggleRoutineTrackCompletion(formData: FormData) {
  const id = String(formData.get("id"));
  const current = await prisma.routineTemplate.findUnique({ where: { id } });
  if (!current) return;
  await prisma.routineTemplate.update({
    where: { id },
    data: { trackCompletion: !current.trackCompletion },
  });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function deleteRoutineTemplate(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.routineTemplate.delete({ where: { id } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

// ---------- Genel Görevler (hedef saat/sayfaya ulaşana ya da manuel olarak
// tamamlanana kadar günlük programda görünen görevler) ----------

export async function addGeneralTask(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const unit = String(formData.get("unit") ?? "HOURS") === "PAGES" ? "PAGES" : "HOURS";
  const targetAmount = parseFloat(String(formData.get("targetAmount") ?? "").replace(",", "."));
  if (!title || !Number.isFinite(targetAmount) || targetAmount <= 0) return;
  const count = await prisma.generalTask.count();
  await prisma.generalTask.create({ data: { title, unit, targetAmount, order: count } });
  revalidatePath("/parametreler");
  revalidatePath("/gunluk");
}

export async function logGeneralTaskAmount(formData: FormData) {
  const taskId = String(formData.get("taskId"));
  const date = String(formData.get("date"));
  const amount = parseFloat(String(formData.get("amount") ?? "").replace(",", "."));
  if (!date || !Number.isFinite(amount) || amount < 0) return;
  const dKey = dayKey(date);

  await prisma.generalTaskLog.upsert({
    where: { taskId_date: { taskId, date: dKey } },
    update: { amount },
    create: { taskId, date: dKey, amount },
  });

  const task = await prisma.generalTask.findUnique({ where: { id: taskId } });
  if (task && !task.completed) {
    const logs = await prisma.generalTaskLog.aggregate({
      where: { taskId },
      _sum: { amount: true },
    });
    const total = logs._sum.amount ?? 0;
    if (total >= task.targetAmount) {
      await prisma.generalTask.update({
        where: { id: taskId },
        data: { completed: true, completedAt: new Date() },
      });
    }
  }
  revalidatePath("/parametreler");
  revalidateDay();
}

export async function completeGeneralTask(formData: FormData) {
  const taskId = String(formData.get("taskId"));
  await prisma.generalTask.update({
    where: { id: taskId },
    data: { completed: true, completedAt: new Date() },
  });
  revalidatePath("/parametreler");
  revalidateDay();
}

export async function deleteGeneralTask(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.generalTask.delete({ where: { id } });
  revalidatePath("/parametreler");
  revalidateDay();
}
