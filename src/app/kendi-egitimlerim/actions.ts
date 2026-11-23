"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getModule } from "@/lib/learning";
import { linesToList, textToQuiz, textToResources } from "@/lib/learning/formats";
import type { CustomLessonData, LessonEditData } from "@/lib/learning/resolve";

const BASE = "/kendi-egitimlerim";

function str(fd: FormData, key: string): string {
  return String(fd.get(key) ?? "");
}

function assertModule(id: string) {
  if (!getModule(id)) throw new Error("Bilinmeyen modül");
}

/** Ders veya proje tamamlandı/tamamlanmadı. key = "react/ts-basics" veya "project:react/kanban" */
export async function toggleProgress(formData: FormData) {
  const key = str(formData, "key");
  const moduleId = str(formData, "moduleId");
  if (!key) return;
  const current = await prisma.learningProgress.findUnique({ where: { key } });
  const done = !(current?.done ?? false);
  await prisma.learningProgress.upsert({
    where: { key },
    update: { done, doneAt: done ? new Date() : null },
    create: { key, done, doneAt: done ? new Date() : null },
  });
  revalidatePath(BASE);
  if (moduleId) revalidatePath(`${BASE}/${moduleId}`, "layout");
}

export async function saveLessonNote(formData: FormData) {
  const key = str(formData, "key");
  const note = str(formData, "note").trim() || null;
  if (!key) return;
  await prisma.learningProgress.upsert({ where: { key }, update: { note }, create: { key, note } });
  revalidatePath(BASE, "layout");
}

function lessonDataFromForm(fd: FormData): LessonEditData {
  const minutes = parseInt(str(fd, "minutes"), 10);
  return {
    title: str(fd, "title").trim() || undefined,
    summary: str(fd, "summary").trim() || undefined,
    body: str(fd, "body") || undefined,
    verification: str(fd, "verification").trim() || undefined,
    objectives: linesToList(str(fd, "objectives")),
    tasks: linesToList(str(fd, "tasks")),
    questions: linesToList(str(fd, "questions")),
    resources: textToResources(str(fd, "resources")),
    minutes: Number.isFinite(minutes) && minutes > 0 ? minutes : undefined,
  };
}

/** Varsayılan veya eklenmiş dersi düzenler. */
export async function saveLessonEdit(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const lessonId = str(formData, "lessonId");
  const custom = str(formData, "custom") === "1";
  assertModule(moduleId);
  const data = lessonDataFromForm(formData);

  if (custom) {
    const key = `custom:${moduleId}/${lessonId}`;
    const existing = await prisma.learningEdit.findUnique({ where: { key } });
    const prev = (existing?.data ?? {}) as unknown as CustomLessonData;
    const merged: CustomLessonData = {
      ...prev,
      ...data,
      title: data.title ?? prev.title ?? "Yeni parça",
      summary: data.summary ?? prev.summary ?? "",
      unitId: prev.unitId,
      order: prev.order ?? 0,
    };
    await prisma.learningEdit.update({ where: { key }, data: { data: merged as unknown as object } });
  } else {
    const key = `lesson:${moduleId}/${lessonId}`;
    await prisma.learningEdit.upsert({
      where: { key },
      update: { data: data as unknown as object },
      create: { key, data: data as unknown as object },
    });
  }
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}/${lessonId}`);
}

export async function resetLessonEdit(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const lessonId = str(formData, "lessonId");
  assertModule(moduleId);
  await prisma.learningEdit.deleteMany({ where: { key: `lesson:${moduleId}/${lessonId}` } });
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}/${lessonId}`);
}

/** Varsayılan dersi gizler (silmek yerine; geri getirilebilir). */
export async function hideLesson(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const lessonId = str(formData, "lessonId");
  assertModule(moduleId);
  const key = `lesson:${moduleId}/${lessonId}`;
  const existing = await prisma.learningEdit.findUnique({ where: { key } });
  const data = { ...((existing?.data ?? {}) as object), hidden: true };
  await prisma.learningEdit.upsert({ where: { key }, update: { data }, create: { key, data } });
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}`);
}

export async function restoreLesson(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const lessonId = str(formData, "lessonId");
  const key = `lesson:${moduleId}/${lessonId}`;
  const existing = await prisma.learningEdit.findUnique({ where: { key } });
  if (!existing) return;
  const { hidden: _hidden, ...rest } = (existing.data ?? {}) as Record<string, unknown>;
  void _hidden;
  if (Object.keys(rest).length === 0) await prisma.learningEdit.delete({ where: { key } });
  else await prisma.learningEdit.update({ where: { key }, data: { data: rest as object } });
  revalidatePath(BASE, "layout");
}

/** Bir programa (üniteye) yeni parça (ders) ekler. */
export async function addCustomLesson(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const unitId = str(formData, "unitId");
  const title = str(formData, "title").trim();
  assertModule(moduleId);
  if (!title) return;
  const count = await prisma.learningEdit.count({ where: { key: { startsWith: `custom:${moduleId}/` } } });
  const id = `kendi-${Date.now().toString(36)}-${count + 1}`;
  const data: CustomLessonData = { title, summary: "", unitId, order: count, body: "" };
  await prisma.learningEdit.create({ data: { key: `custom:${moduleId}/${id}`, data: data as unknown as object } });
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}/${id}/duzenle`);
}

export async function deleteCustomLesson(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const lessonId = str(formData, "lessonId");
  await prisma.learningEdit.deleteMany({ where: { key: `custom:${moduleId}/${lessonId}` } });
  await prisma.learningProgress.deleteMany({ where: { key: `${moduleId}/${lessonId}` } });
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}`);
}

export async function saveQuizEdit(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const unitId = str(formData, "unitId");
  assertModule(moduleId);
  const questions = textToQuiz(str(formData, "quiz"));
  await prisma.learningEdit.upsert({
    where: { key: `quiz:${moduleId}/${unitId}` },
    update: { data: { questions } as unknown as object },
    create: { key: `quiz:${moduleId}/${unitId}`, data: { questions } as unknown as object },
  });
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}/test/${unitId}`);
}

export async function resetQuizEdit(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  const unitId = str(formData, "unitId");
  await prisma.learningEdit.deleteMany({ where: { key: `quiz:${moduleId}/${unitId}` } });
  revalidatePath(BASE, "layout");
  redirect(`${BASE}/${moduleId}/test/${unitId}`);
}

export async function saveModuleNotes(formData: FormData) {
  const moduleId = str(formData, "moduleId");
  assertModule(moduleId);
  const notIncluded = str(formData, "notIncluded");
  await prisma.learningEdit.upsert({
    where: { key: `modnote:${moduleId}` },
    update: { data: { notIncluded } },
    create: { key: `modnote:${moduleId}`, data: { notIncluded } },
  });
  revalidatePath(`${BASE}/${moduleId}`);
}

/** Test sonucunu kaydeder (istemci puanı hesaplayıp gönderir; sunucu aralığı doğrular). */
export async function recordQuizAttempt(unitKey: string, score: number, total: number) {
  if (!/^[a-z0-9-]+\/[A-Za-z0-9-]+$/.test(unitKey)) return;
  if (!Number.isInteger(score) || !Number.isInteger(total) || total < 1 || total > 50 || score < 0 || score > total) return;
  await prisma.quizAttempt.create({ data: { unitKey, score, total } });
  revalidatePath(BASE, "layout");
}
