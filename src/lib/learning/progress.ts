import { prisma } from "@/lib/prisma";
import type { LearningModule, Unit } from "./types";
import { progressKey } from "./index";

export interface ProgressInfo {
  done: boolean;
  note: string | null;
}

export async function getProgressMap(): Promise<Map<string, ProgressInfo>> {
  const rows = await prisma.learningProgress.findMany();
  return new Map(rows.map((r) => [r.key, { done: r.done, note: r.note }]));
}

export interface QuizBest {
  best: number;
  total: number;
  attempts: number;
  last: number;
}

export async function getQuizStats(): Promise<Map<string, QuizBest>> {
  const rows = await prisma.quizAttempt.findMany({ orderBy: { createdAt: "asc" } });
  const map = new Map<string, QuizBest>();
  for (const r of rows) {
    const pct = Math.round((r.score / r.total) * 100);
    const cur = map.get(r.unitKey);
    map.set(r.unitKey, {
      best: Math.max(cur?.best ?? 0, pct),
      total: r.total,
      attempts: (cur?.attempts ?? 0) + 1,
      last: pct,
    });
  }
  return map;
}

export function unitProgress(m: LearningModule, u: Unit, progress: Map<string, ProgressInfo>) {
  const done = u.lessons.filter((l) => progress.get(progressKey(m.id, l.id))?.done).length;
  return { done, total: u.lessons.length, pct: u.lessons.length ? Math.round((done / u.lessons.length) * 100) : 0 };
}

export function moduleProgress(m: LearningModule, progress: Map<string, ProgressInfo>) {
  let done = 0;
  let total = 0;
  let minutes = 0;
  let minutesDone = 0;
  for (const t of m.tracks)
    for (const u of t.units)
      for (const l of u.lessons) {
        total++;
        minutes += l.minutes;
        if (progress.get(progressKey(m.id, l.id))?.done) {
          done++;
          minutesDone += l.minutes;
        }
      }
  const projectsDone = m.projects.filter((p) => progress.get(`project:${m.id}/${p.id}`)?.done).length;
  return {
    done,
    total,
    pct: total ? Math.round((done / total) * 100) : 0,
    hours: Math.round(minutes / 60),
    hoursDone: Math.round(minutesDone / 60),
    projectsDone,
    projectsTotal: m.projects.length,
    projectHours: m.projects.reduce((s, p) => s + p.hours, 0),
  };
}
