"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getCard, getLang } from "@/lib/lang/cards";
import { NEW_STATE, schedule, type Grade } from "@/lib/lang/srs";

/** Bir kartı not verir (0 Tekrar, 1 Zor, 2 İyi, 3 Kolay) ve bir sonraki vadeyi kaydeder. */
export async function gradeCard(cardId: string, gradeInput: number): Promise<{ ok: boolean }> {
  const card = getCard(cardId);
  const grade = gradeInput as Grade;
  if (!card || ![0, 1, 2, 3].includes(grade)) return { ok: false };

  const now = new Date();
  const existing = await prisma.langCardState.findUnique({ where: { cardId } });
  const prev = existing
    ? { ease: existing.ease, intervalDays: existing.intervalDays, reps: existing.reps, lapses: existing.lapses }
    : NEW_STATE;
  const next = schedule(prev, grade, now);

  await prisma.$transaction([
    prisma.langCardState.upsert({
      where: { cardId },
      create: { cardId, lang: card.lang, ...next.state, dueAt: next.dueAt, lastReviewAt: now },
      update: { ...next.state, dueAt: next.dueAt, lastReviewAt: now },
    }),
    prisma.langReviewLog.create({
      data: { cardId, lang: card.lang, grade, prevInterval: prev.intervalDays, newInterval: next.state.intervalDays },
    }),
  ]);
  return { ok: true };
}

export async function toggleSuspend(formData: FormData) {
  const cardId = String(formData.get("cardId") ?? "");
  const card = getCard(cardId);
  if (!card) return;
  const existing = await prisma.langCardState.findUnique({ where: { cardId } });
  if (existing) {
    await prisma.langCardState.update({ where: { cardId }, data: { suspended: !existing.suspended } });
  } else {
    // Hiç gösterilmemiş kartı "bildiğim" diye ertele: askıya alınmış satır oluştur
    await prisma.langCardState.create({ data: { cardId, lang: card.lang, dueAt: new Date(), suspended: true } });
  }
  revalidatePath(`/dil/${card.lang}`, "layout");
}

export async function saveCardEdit(formData: FormData) {
  const cardId = String(formData.get("cardId") ?? "");
  const card = getCard(cardId);
  if (!card) return;
  const f = (k: string) => String(formData.get(k) ?? "").trim();
  const data = {
    meaning: f("meaning") || undefined,
    reading: f("reading") || undefined,
    sentence: f("sentence") || undefined,
    sentenceReading: f("sentenceReading") || undefined,
    sentenceMeaning: f("sentenceMeaning") || undefined,
    note: f("note") || undefined,
  };
  await prisma.learningEdit.upsert({ where: { key: `card:${cardId}` }, update: { data }, create: { key: `card:${cardId}`, data } });
  revalidatePath(`/dil/${card.lang}`, "layout");
}

export async function resetCardEdit(formData: FormData) {
  const cardId = String(formData.get("cardId") ?? "");
  const card = getCard(cardId);
  if (!card) return;
  await prisma.learningEdit.deleteMany({ where: { key: `card:${cardId}` } });
  revalidatePath(`/dil/${card.lang}`, "layout");
}

export async function saveLangSettings(formData: FormData) {
  const lang = String(formData.get("lang") ?? "");
  if (!getLang(lang)) return;
  const n = Number(formData.get("newPerDay"));
  if (!Number.isInteger(n) || n < 1 || n > 50) return;
  await prisma.learningEdit.upsert({
    where: { key: `langset:${lang}` },
    update: { data: { newPerDay: n } },
    create: { key: `langset:${lang}`, data: { newPerDay: n } },
  });
  revalidatePath(`/dil/${lang}`, "layout");
}
