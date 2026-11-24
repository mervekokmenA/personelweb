import { prisma } from "@/lib/prisma";
import type { LearningModule } from "./types";
import { moduleLessons, progressKey } from "./index";
import type { ProgressInfo } from "./progress";

const TR_OFFSET = 3 * 3600 * 1000; // Türkiye saati (UTC+3)
const DAY = 86400000;

/** Türkiye gününün sıra numarası (yerel gece yarısına göre). */
export function trDayIndex(t: number): number {
  return Math.floor((t + TR_OFFSET) / DAY);
}

/** Haftanın (Pazartesi başlangıçlı) sıra numarası. */
function trWeekIndex(t: number): number {
  // 1970-01-01 Perşembe; +3 gün kaydırınca Pazartesi başlangıçlı hafta numarası
  return Math.floor((trDayIndex(t) + 3) / 7);
}

export const DEFAULT_WEEKLY_GOAL = 5;

export interface LearningStats {
  streak: number;
  doneToday: boolean;
  weekDone: number;
  weeklyGoal: number;
  /** Son 8 hafta (en eskiden bugüne) tamamlanan parça sayıları */
  weeks: { label: string; count: number }[];
  /** Son 28 günde çalışılan, bitmemiş modüller ve tahmini bitiş (gün) */
  pace: { id: string; title: string; remaining: number; perWeek: number; daysLeft: number }[];
  bookmarks: { moduleId: string; lessonId: string }[];
}

export async function getWeeklyGoal(): Promise<number> {
  const row = await prisma.learningEdit.findUnique({ where: { key: "settings:weeklyGoal" } });
  const g = Number((row?.data as { goal?: number } | undefined)?.goal);
  return Number.isInteger(g) && g >= 1 && g <= 100 ? g : DEFAULT_WEEKLY_GOAL;
}

export async function getLearningStats(modules: LearningModule[], progress: Map<string, ProgressInfo>, now = Date.now()): Promise<LearningStats> {
  const [rows, weeklyGoal, bm] = await Promise.all([
    prisma.learningProgress.findMany({ where: { done: true, doneAt: { not: null }, NOT: { key: { startsWith: "project:" } } }, select: { key: true, doneAt: true } }),
    getWeeklyGoal(),
    prisma.learningEdit.findMany({ where: { key: { startsWith: "bookmark:" } }, orderBy: { createdAt: "desc" } }),
  ]);
  const times = rows.map((r) => ({ key: r.key, t: r.doneAt!.getTime() }));

  // Seri: bugün (ya da bugün yoksa dün) başlayarak art arda gün sayısı
  const days = new Set(times.map((x) => trDayIndex(x.t)));
  const today = trDayIndex(now);
  const doneToday = days.has(today);
  let streak = 0;
  for (let d = doneToday ? today : today - 1; days.has(d); d--) streak++;

  // Haftalık sayımlar
  const thisWeek = trWeekIndex(now);
  const weeks = Array.from({ length: 8 }, (_, i) => {
    const w = thisWeek - 7 + i;
    const start = new Date((w * 7 - 3) * DAY); // Pazartesi (takvim günü UTC olarak temsil edilir)
    const label = `${String(start.getUTCDate()).padStart(2, "0")}.${String(start.getUTCMonth() + 1).padStart(2, "0")}`;
    return { label, count: times.filter((x) => trWeekIndex(x.t) === w).length };
  });
  const weekDone = weeks[7].count;

  // Tempo: son 28 gün
  const since = now - 28 * DAY;
  const pace: LearningStats["pace"] = [];
  for (const m of modules) {
    if (m.group === "dil") continue;
    const lessons = moduleLessons(m);
    const remaining = lessons.filter((x) => !progress.get(progressKey(m.id, x.lesson.id))?.done).length;
    if (remaining === 0) continue;
    const recent = times.filter((x) => x.t >= since && x.key.startsWith(`${m.id}/`)).length;
    if (recent === 0) continue;
    const perDay = recent / 28;
    pace.push({ id: m.id, title: m.title, remaining, perWeek: Math.round(perDay * 7 * 10) / 10, daysLeft: Math.ceil(remaining / perDay) });
  }
  pace.sort((a, b) => a.daysLeft - b.daysLeft);

  const bookmarks = bm.map((r) => {
    const [moduleId, lessonId] = r.key.slice("bookmark:".length).split("/");
    return { moduleId, lessonId };
  });
  return { streak, doneToday, weekDone, weeklyGoal, weeks, pace: pace.slice(0, 6), bookmarks };
}

export function formatDaysLeft(days: number): string {
  if (days <= 10) return `~${days} gün`;
  if (days <= 60) return `~${Math.round(days / 7)} hafta`;
  return `~${Math.round(days / 30)} ay`;
}
