import { prisma } from "@/lib/prisma";
import type { LearningModule, QuizQuestion } from "./types";
import { progressKey } from "./index";
import type { ProgressInfo } from "./progress";
import type { SrsState } from "@/lib/lang/srs";
import { NEW_STATE } from "@/lib/lang/srs";

const DAY = 86400000;
export const DEFAULT_STUDY_NEW_PER_DAY = 10;
export const STUDY_SESSION_LIMIT = 30;

/** Soru metninin kısa, kararlı özeti (soru düzenlenirse değişir). */
export function hashText(s: string): string {
  let h = 0x811c9dc5;
  const t = s.trim().replace(/\s+/g, " ");
  for (let i = 0; i < t.length; i++) {
    h ^= t.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36).padStart(6, "0");
}

export const CARD_ID_RE = /^[ql]:[A-Za-z0-9-]+\/[A-Za-z0-9-]+:[a-z0-9]{4,8}$/;

export interface StudyCard {
  id: string;
  kind: "q" | "l";
  moduleId: string;
  moduleTitle: string;
  crumb: string;
  front: string;
  /** Test sorusu: seçenekler ve doğru indeks; ders sorusu: yok */
  options?: string[];
  answer?: number;
  explain?: string;
  /** Ders sorusunda kendi notun (varsa) */
  note?: string;
  href: string;
}

const cleanUnit = (t: string) => t.replace(/^\d+\.\s*/, "");

export interface MistakeRow { unitKey: string; qHash: string; resolved: boolean }

/** Uygun kartlar: tamamlanan derslerin soruları + başlanan programların test soruları + çözülmemiş yanlışlar. */
export function buildStudyCards(modules: LearningModule[], progress: Map<string, ProgressInfo>, openMistakes: Set<string>): StudyCard[] {
  const cards: StudyCard[] = [];
  for (const m of modules) {
    for (const t of m.tracks) {
      for (const u of t.units) {
        const started = u.lessons.some((l) => progress.get(progressKey(m.id, l.id))?.done);
        for (const q of u.quiz ?? []) {
          const h = hashText(q.q);
          if (!started && !openMistakes.has(`${m.id}/${u.id}:${h}`)) continue;
          cards.push({
            id: `q:${m.id}/${u.id}:${h}`, kind: "q", moduleId: m.id, moduleTitle: m.title,
            crumb: `${m.title} · ${cleanUnit(u.title)}`, front: q.q, options: q.options, answer: q.answer, explain: q.explain,
            href: `/kendi-egitimlerim/${m.id}/test/${u.id}`,
          });
        }
        for (const l of u.lessons) {
          if (!progress.get(progressKey(m.id, l.id))?.done) continue;
          const note = progress.get(progressKey(m.id, l.id))?.note ?? undefined;
          for (const q of l.questions ?? []) {
            cards.push({
              id: `l:${m.id}/${l.id}:${hashText(q)}`, kind: "l", moduleId: m.id, moduleTitle: m.title,
              crumb: `${m.title} · ${l.title}`, front: q, note, href: `/kendi-egitimlerim/${m.id}/${l.id}`,
            });
          }
        }
      }
    }
  }
  return cards;
}

export function dayStartTR(now = new Date()): Date {
  const idx = Math.floor((now.getTime() + 3 * 3600000) / DAY);
  return new Date(idx * DAY - 3 * 3600000);
}

export async function getStudyNewPerDay(): Promise<number> {
  const row = await prisma.learningEdit.findUnique({ where: { key: "studyset:newPerDay" } });
  const n = Number((row?.data as { newPerDay?: number } | null)?.newPerDay);
  return Number.isInteger(n) && n >= 1 && n <= 100 ? n : DEFAULT_STUDY_NEW_PER_DAY;
}

export interface StudyItem {
  card: StudyCard;
  isNew: boolean;
  state: SrsState;
}

export interface StudyOverview {
  items: StudyItem[];
  dueCount: number;
  newCount: number;
  total: number;
  newPerDay: number;
  newToday: number;
}

export async function getOpenMistakeKeys(): Promise<Set<string>> {
  const rows = await prisma.quizMistake.findMany({ where: { resolved: false }, select: { unitKey: true, qHash: true } });
  return new Set(rows.map((r) => `${r.unitKey}:${r.qHash}`));
}

export async function buildStudyQueue(
  modules: LearningModule[],
  progress: Map<string, ProgressInfo>,
  moduleFilter?: string,
  now = new Date(),
): Promise<StudyOverview> {
  const [open, states, newPerDay] = await Promise.all([getOpenMistakeKeys(), prisma.studyCardState.findMany(), getStudyNewPerDay()]);
  let cards = buildStudyCards(modules, progress, open);
  if (moduleFilter) cards = cards.filter((c) => c.moduleId === moduleFilter);
  const byId = new Map(states.map((s) => [s.cardId, s]));
  const dayStart = dayStartTR(now);
  const newToday = states.filter((s) => s.createdAt >= dayStart).length;
  const allowance = Math.max(0, newPerDay - newToday);

  const due: StudyItem[] = [];
  const fresh: StudyItem[] = [];
  for (const c of cards) {
    const s = byId.get(c.id);
    if (!s) fresh.push({ card: c, isNew: true, state: NEW_STATE });
    else if (!s.suspended && s.dueAt <= now) due.push({ card: c, isNew: false, state: { ease: s.ease, intervalDays: s.intervalDays, reps: s.reps, lapses: s.lapses } });
  }
  due.sort((a, b) => a.state.intervalDays - b.state.intervalDays);
  const newItems = fresh.slice(0, allowance);
  const items = [...due, ...newItems].slice(0, STUDY_SESSION_LIMIT);
  return { items, dueCount: due.length, newCount: newItems.length, total: cards.length, newPerDay, newToday };
}

// ---- Yanlışlar ----

export interface MistakeView {
  unitKey: string;
  qHash: string;
  moduleId: string;
  moduleTitle: string;
  unitId: string;
  unitTitle: string;
  question: QuizQuestion;
  wrongCount: number;
  lastChosen: number;
  lastWrongAt: Date;
}

export async function getOpenMistakes(modules: LearningModule[]): Promise<MistakeView[]> {
  const rows = await prisma.quizMistake.findMany({ where: { resolved: false }, orderBy: { lastWrongAt: "desc" } });
  const byKey = new Map(rows.map((r) => [`${r.unitKey}:${r.qHash}`, r]));
  const out: MistakeView[] = [];
  for (const m of modules) {
    for (const u of m.tracks.flatMap((t) => t.units)) {
      for (const q of u.quiz ?? []) {
        const r = byKey.get(`${m.id}/${u.id}:${hashText(q.q)}`);
        if (r) out.push({ unitKey: r.unitKey, qHash: r.qHash, moduleId: m.id, moduleTitle: m.title, unitId: u.id, unitTitle: cleanUnit(u.title), question: q, wrongCount: r.wrongCount, lastChosen: r.lastChosen, lastWrongAt: r.lastWrongAt });
      }
    }
  }
  return out.sort((a, b) => b.lastWrongAt.getTime() - a.lastWrongAt.getTime());
}

export async function getReviewCounts(modules: LearningModule[], progress: Map<string, ProgressInfo>) {
  const [mistakes, q] = await Promise.all([getOpenMistakes(modules), buildStudyQueue(modules, progress)]);
  return { mistakes: mistakes.length, due: q.dueCount, fresh: q.newCount, total: q.total };
}
