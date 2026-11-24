import { prisma } from "@/lib/prisma";
import { getAllResolvedModules } from "./resolve";
import { getProgressMap, moduleProgress } from "./progress";
import { moduleLessons, progressKey } from "./index";
import { getLearningStats } from "./stats";

export interface LearningWidgetData {
  /** Yalnızca başlanmış (en az bir parçası tamamlanmış) eğitimler; en son çalışılan başta. */
  modules: { id: string; title: string; pct: number; done: number; total: number; group: "ana" | "ek" | "dil"; nextLessonId: string | null }[];
  /** Başlanmamış eğitim sayısı */
  notStarted: number;
  next: { moduleId: string; moduleTitle: string; lessonId: string; lessonTitle: string; unitTitle: string; minutes: number } | null;
  doneThisWeek: number;
  quizzesThisWeek: number;
  avgQuizPct: number | null;
  totalDone: number;
  totalLessons: number;
  streak: number;
  weekDone: number;
  weeklyGoal: number;
}

export async function getLearningWidgetData(): Promise<LearningWidgetData> {
  const weekAgo = new Date(Date.now() - 7 * 86400000);
  const [allModules, progress, allDone, recentQuizzes] = await Promise.all([
    getAllResolvedModules(),
    getProgressMap(),
    prisma.learningProgress.findMany({ where: { done: true }, select: { key: true, doneAt: true } }),
    prisma.quizAttempt.findMany({ where: { createdAt: { gte: weekAgo } } }),
  ]);

  const recentDone = allDone.filter((r) => r.doneAt && r.doneAt >= weekAgo);
  // Modül başına son tamamlama zamanı (sıralama ve "devam et" için)
  const lastAt = new Map<string, number>();
  for (const r of allDone) {
    const id = r.key.replace(/^project:/, "").split("/")[0];
    lastAt.set(id, Math.max(lastAt.get(id) ?? 0, r.doneAt?.getTime() ?? 0));
  }

  // "Sıradaki parça" yalnızca ana/ek modüllerden; yabancı dil kartları kendi widget'ında
  const modules = allModules.filter((m) => m.group !== "dil");
  const all = allModules.map((m) => {
    const p = moduleProgress(m, progress);
    const nextLesson = moduleLessons(m).find((x) => !progress.get(progressKey(m.id, x.lesson.id))?.done);
    return { id: m.id, title: m.title, pct: p.pct, done: p.done, total: p.total, group: (m.group ?? "ana") as "ana" | "ek" | "dil", nextLessonId: nextLesson?.lesson.id ?? null, started: p.done > 0 || p.projectsDone > 0 };
  });
  const summaries = all
    .filter((x) => x.started)
    .sort((a, b) => (lastAt.get(b.id) ?? 0) - (lastAt.get(a.id) ?? 0))
    .map(({ started: _s, ...rest }) => { void _s; return rest; });
  const notStarted = all.length - summaries.length;

  // Sıradaki parça: ana modüllerde en son tamamlanan dersin modülünden devam; yoksa ilk modülün ilk parçası.
  const lastDone = [...allDone].filter((r) => !r.key.startsWith("project:")).sort((a, b) => (b.doneAt?.getTime() ?? 0) - (a.doneAt?.getTime() ?? 0))[0];
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

  const stats = await getLearningStats(allModules, progress);

  return {
    streak: stats.streak,
    weekDone: stats.weekDone,
    weeklyGoal: stats.weeklyGoal,
    modules: summaries,
    notStarted,
    next,
    doneThisWeek: recentDone.filter((r) => !r.key.startsWith("project:")).length,
    quizzesThisWeek: recentQuizzes.length,
    avgQuizPct: avg,
    totalDone: summaries.reduce((s, m) => s + m.done, 0),
    totalLessons: summaries.reduce((s, m) => s + m.total, 0),
  };
}
