"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getModule } from "@/lib/learning";
import { CARD_ID_RE } from "@/lib/learning/review";
import { NEW_STATE, schedule, type Grade } from "@/lib/lang/srs";

function validCard(cardId: string): boolean {
  if (!CARD_ID_RE.test(cardId)) return false;
  return !!getModule(cardId.slice(2).split("/")[0]);
}

/** Tekrar kartına not verir (0 Tekrar, 1 Zor, 2 İyi, 3 Kolay) ve sonraki vadeyi kaydeder. */
export async function gradeStudyCard(cardId: string, gradeInput: number): Promise<{ ok: boolean }> {
  if (!validCard(cardId) || ![0, 1, 2, 3].includes(gradeInput)) return { ok: false };
  const now = new Date();
  const existing = await prisma.studyCardState.findUnique({ where: { cardId } });
  const prev = existing ? { ease: existing.ease, intervalDays: existing.intervalDays, reps: existing.reps, lapses: existing.lapses } : NEW_STATE;
  const next = schedule(prev, gradeInput as Grade, now);
  await prisma.studyCardState.upsert({
    where: { cardId },
    create: { cardId, ...next.state, dueAt: next.dueAt, lastReviewAt: now },
    update: { ...next.state, dueAt: next.dueAt, lastReviewAt: now },
  });
  return { ok: true };
}

/** Kartı bir daha gösterme (askıya al). */
export async function suspendStudyCard(cardId: string): Promise<{ ok: boolean }> {
  if (!validCard(cardId)) return { ok: false };
  await prisma.studyCardState.upsert({
    where: { cardId },
    create: { cardId, dueAt: new Date(), suspended: true },
    update: { suspended: true },
  });
  return { ok: true };
}

export async function saveStudyNewPerDay(formData: FormData) {
  const n = Number(formData.get("newPerDay"));
  if (!Number.isInteger(n) || n < 1 || n > 100) return;
  await prisma.learningEdit.upsert({
    where: { key: "studyset:newPerDay" },
    update: { data: { newPerDay: n } },
    create: { key: "studyset:newPerDay", data: { newPerDay: n } },
  });
  revalidatePath("/kendi-egitimlerim/tekrar");
}

/** Askıya alınan tüm tekrar kartlarını geri açar. */
export async function restoreSuspendedStudyCards() {
  await prisma.studyCardState.updateMany({ where: { suspended: true }, data: { suspended: false } });
  revalidatePath("/kendi-egitimlerim/tekrar");
}
