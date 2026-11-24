import { prisma } from "@/lib/prisma";
import { trDateKey } from "@/lib/astro/moon";
import { cardsOf, getCard, LANGS } from "./cards";
import type { Card, LangId } from "./types";

export const DEFAULT_NEW_PER_DAY = 10;
export const SESSION_LIMIT = 40;

export interface CardOverride {
  meaning?: string;
  sentence?: string;
  sentenceReading?: string;
  sentenceMeaning?: string;
  reading?: string;
  note?: string;
}

/** Türkiye saatine göre bugünün başlangıcı (UTC+3, yaz saati yok) */
export function trDayStart(now = new Date()): Date {
  const [y, m, d] = trDateKey(now).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d) - 3 * 3600 * 1000);
}

export async function getNewPerDay(lang: LangId): Promise<number> {
  const row = await prisma.learningEdit.findUnique({ where: { key: `langset:${lang}` } });
  const n = Number((row?.data as { newPerDay?: number } | null)?.newPerDay);
  return Number.isInteger(n) && n >= 1 && n <= 50 ? n : DEFAULT_NEW_PER_DAY;
}

/** Kartın kullanıcı düzenlemeleri (LearningEdit "card:<id>") uygulanmış hâli */
export function withOverride(card: Card, o?: CardOverride | null): Card {
  if (!o) return card;
  return {
    ...card,
    meaning: o.meaning || card.meaning,
    sentence: o.sentence || card.sentence,
    sentenceReading: o.sentenceReading ?? card.sentenceReading,
    sentenceMeaning: o.sentenceMeaning || card.sentenceMeaning,
    reading: o.reading ?? card.reading,
    note: o.note ?? card.note,
  };
}

export async function overridesFor(ids: string[]): Promise<Map<string, CardOverride>> {
  if (!ids.length) return new Map();
  const rows = await prisma.learningEdit.findMany({ where: { key: { in: ids.map((i) => `card:${i}`) } } });
  return new Map(rows.map((r) => [r.key.slice(5), r.data as CardOverride]));
}

export interface DeckStat {
  deck: string;
  total: number;
  seen: number; // en az bir kez gösterilmiş
  due: number; // vadesi gelmiş
  mature: number; // aralığı >= 21 gün (iyi öğrenilmiş)
}

export interface LangStat {
  lang: LangId;
  total: number;
  seen: number;
  due: number;
  mature: number;
  newLeftToday: number;
  decks: DeckStat[];
}

export async function getLangStat(lang: LangId, now = new Date()): Promise<LangStat> {
  const cards = cardsOf(lang);
  const deckOf = new Map(cards.map((c) => [c.id, c.deck]));
  const [states, introducedToday, newPerDay] = await Promise.all([
    prisma.langCardState.findMany({ where: { lang }, select: { cardId: true, dueAt: true, intervalDays: true, suspended: true } }),
    prisma.langCardState.count({ where: { lang, createdAt: { gte: trDayStart(now) } } }),
    getNewPerDay(lang),
  ]);
  const decks = new Map<string, DeckStat>();
  for (const c of cards) {
    const d = decks.get(c.deck) ?? { deck: c.deck, total: 0, seen: 0, due: 0, mature: 0 };
    d.total++;
    decks.set(c.deck, d);
  }
  for (const s of states) {
    const d = decks.get(deckOf.get(s.cardId) ?? "");
    if (!d) continue; // kodda artık olmayan kart
    d.seen++;
    if (!s.suspended && s.dueAt <= now) d.due++;
    if (s.intervalDays >= 21) d.mature++;
  }
  const list = [...decks.values()];
  const sum = (k: "total" | "seen" | "due" | "mature") => list.reduce((a, d) => a + d[k], 0);
  const unseen = sum("total") - sum("seen");
  return {
    lang,
    total: sum("total"),
    seen: sum("seen"),
    due: sum("due"),
    mature: sum("mature"),
    newLeftToday: Math.min(unseen, Math.max(0, newPerDay - introducedToday)),
    decks: list,
  };
}

export interface QueueItem {
  card: Card;
  isNew: boolean;
  state: { ease: number; intervalDays: number; reps: number; lapses: number };
}

/** Çalışma kuyruğu: önce vadesi gelenler (en eski vade önce), sonra günlük sınıra kadar yeni kartlar. */
export async function buildQueue(lang: LangId, deck: string | undefined, now = new Date()): Promise<{ items: QueueItem[]; dueCount: number; newCount: number }> {
  const cards = cardsOf(lang, deck);
  const ids = new Set(cards.map((c) => c.id));
  const [states, introducedToday, newPerDay] = await Promise.all([
    prisma.langCardState.findMany({ where: { lang } }),
    prisma.langCardState.count({ where: { lang, createdAt: { gte: trDayStart(now) } } }),
    getNewPerDay(lang),
  ]);
  const stateById = new Map(states.map((s) => [s.cardId, s]));

  const due = states
    .filter((s) => ids.has(s.cardId) && !s.suspended && s.dueAt <= now)
    .sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime())
    .slice(0, SESSION_LIMIT);
  const newAllowed = Math.max(0, newPerDay - introducedToday);
  const fresh = cards.filter((c) => !stateById.has(c.id)).slice(0, Math.min(newAllowed, Math.max(0, SESSION_LIMIT - due.length)));

  const picked = [...due.map((s) => getCard(s.cardId)!).filter(Boolean), ...fresh];
  const ov = await overridesFor(picked.map((c) => c.id));
  const items: QueueItem[] = [
    ...due.map((s) => ({
      card: withOverride(getCard(s.cardId)!, ov.get(s.cardId)),
      isNew: false,
      state: { ease: s.ease, intervalDays: s.intervalDays, reps: s.reps, lapses: s.lapses },
    })),
    ...fresh.map((c) => ({
      card: withOverride(c, ov.get(c.id)),
      isNew: true,
      state: { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 },
    })),
  ];
  return { items, dueCount: due.length, newCount: fresh.length };
}

/** Ana sayfa widget'ı için özet */
export async function getLangWidgetData(now = new Date()) {
  const stats = await Promise.all(LANGS.map((l) => getLangStat(l.id, now)));
  const today = await prisma.langReviewLog.count({ where: { at: { gte: trDayStart(now) } } });
  return { stats, reviewedToday: today };
}
