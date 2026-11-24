"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getModule, moduleLessons, progressKey } from "@/lib/learning";
import { getResolvedModule } from "@/lib/learning/resolve";

function revalidateAll() {
  revalidatePath("/");
  revalidatePath("/ayarlar");
  revalidatePath("/kendi-egitimlerim", "layout");
}

/** Tüm modüllerin (ya da tek modülün) ders/proje ilerlemesini sıfırlar. Notlar korunur; istenirse test sonuçları da silinir. */
export async function resetLearningProgress(formData: FormData) {
  const moduleId = String(formData.get("moduleId") ?? "");
  const withQuizzes = formData.get("quizzes") === "1";
  if (moduleId && !getModule(moduleId)) throw new Error("Bilinmeyen modül");
  const prefixes = moduleId ? [`${moduleId}/`, `project:${moduleId}/`] : [""];
  await prisma.learningProgress.updateMany({
    where: { done: true, OR: prefixes.map((p) => ({ key: { startsWith: p } })) },
    data: { done: false, doneAt: null },
  });
  if (withQuizzes) {
    await prisma.quizAttempt.deleteMany({ where: moduleId ? { unitKey: { startsWith: `${moduleId}/` } } : {} });
  }
  revalidateAll();
}

/** Bir modülün tüm parçalarını tamamlandı işaretler (zaten tamamlananların tarihi korunur). */
export async function completeLearningModule(formData: FormData) {
  const moduleId = String(formData.get("moduleId") ?? "");
  const m = await getResolvedModule(moduleId);
  if (!m) throw new Error("Bilinmeyen modül");
  const keys = moduleLessons(m).map((x) => progressKey(m.id, x.lesson.id));
  const existing = await prisma.learningProgress.findMany({ where: { key: { in: keys } } });
  const have = new Map(existing.map((r) => [r.key, r.done]));
  const now = new Date();
  await prisma.learningProgress.updateMany({
    where: { key: { in: keys.filter((k) => have.get(k) === false) } },
    data: { done: true, doneAt: now },
  });
  await prisma.learningProgress.createMany({
    data: keys.filter((k) => !have.has(k)).map((key) => ({ key, done: true, doneAt: now })),
    skipDuplicates: true,
  });
  revalidateAll();
}
