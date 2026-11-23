import { prisma } from "@/lib/prisma";
import { getAllResolvedModules } from "./resolve";
import { getProgressMap, moduleProgress } from "./progress";
import { moduleLessons, progressKey } from "./index";

export interface LearningWidgetData {
  modules: { id: string; title: string; pct: number; done: number; total: number; group: "ana" | "ek" }[];
  next: { moduleId: string; moduleTitle: string; lessonId: string; lessonTitle: string; unitTitle: string; minutes: number } | null;
  doneThisWeek: number;
  quizzesThisWeek: number;
  avgQuizPct: number | null;
  totalDone: number;
  totalLessons: number;
}

export async function getLearningWidgetData(): Promise<LearningWidgetData> {
  const weekAgo = new Date(Date.now() - 7 * 86400000);
  const [modules, progress, recentDone, recentQuizzes] = await Promise.all([
    getAllResolvedModules(),
    getProgressMap(),
    prisma.learningProgress.findMany({ where: { done: true, doneAt: { gte: weekAgo } }, select: { key: true, doneAt: true } }),
    prisma.quizAttempt.findMany({ where: { createdAt: { gte: weekAgo } } }),
  ]);

  const summaries = modules.map((m) => {
    const p = moduleProgress(m, progress);
    return { id: m.id, title: m.title, pct: p.pct, done: p.done, total: p.total, group: (m.group ?? "ana") as "ana" | "ek" };
  });

  // Sıradaki parça: ana modüllerde en son tamamlanan dersin modülünden devam; yoksa ilk modülün ilk parçası.
  const lastDone = [...recentDone].sort((a, b) => (b.doneAt?.getTime() ?? 0) - (a.doneAt?.getTime() ?? 0))[0];
  const lastDoneModuleId = lastDone?.key.split("/")[0];
  const ordered = [
    ...modules.filter((m) => m.id === lastDoneModuleId),
    ...modules.filter((m) => m.id !== lastDoneModuleId && (m.group ?? "ana") === "ana"),
    ...modules.filter((m) => m.id !== lastDoneModuleId && m.group === "ek"),
  ];
  let next: LearningWidgetData["next"] = null;
  for (const m of ordered) {
    const hit = moduleLessons(m).find((x) => !progress.get(progressKey(m.id, x.lesson.id))?.done);
    if (hit) {
      next = {
        moduleId: m.id,
        moduleTitle: m.title,
        lessonId: hit.lesson.id,
        lessonTitle: hit.lesson.title,
        unitTitle: hit.unit.title,
        minutes: hit.lesson.minutes,
      };
      break;
    }
  }

  const avg = recentQuizzes.length
    ? Math.round((recentQuizzes.reduce((s, q) => s + q.score / q.total, 0) / recentQuizzes.length) * 100)
    : null;

  return {
    modules: summaries,
    next,
    doneThisWeek: recentDone.filter((r) => !r.key.startsWith("project:")).length,
    quizzesThisWeek: recentQuizzes.length,
    avgQuizPct: avg,
    totalDone: summaries.reduce((s, m) => s + m.done, 0),
    totalLessons: summaries.reduce((s, m) => s + m.total, 0),
  };
}
