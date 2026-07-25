import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { dayKey, toDateInputValue, todayKey, daysBetween, formatTrLong } from "@/lib/date";
import { computeDayCompletionPercent } from "@/lib/day-completion";
import { DateSwitcher } from "@/components/gunluk/date-switcher";
import { TimeBlockSection } from "@/components/gunluk/time-block-section";
import { RoutineSection } from "@/components/gunluk/routine-section";
import { TodoSection } from "@/components/gunluk/todo-section";
import { JournalSection } from "@/components/gunluk/journal-section";
import { FocusAreaSummary } from "@/components/gunluk/focus-area-summary";
import { GeneralTaskSection, type GeneralTaskRow } from "@/components/gunluk/general-task-section";
import { DonutChart } from "@/components/dashboard/donut-chart";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";

export const dynamic = "force-dynamic";

export default async function GunlukPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) {
  const params = await searchParams;
  const date = params.date ?? toDateInputValue(todayKey());
  const dKey = dayKey(date);

  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Günlük Program</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const [
    timeBlocks,
    todos,
    notes,
    focusAreas,
    routineTemplates,
    completions,
    itemCompletions,
    generalTasks,
  ] = await Promise.all([
    prisma.timeBlock.findMany({ where: { date: dKey }, orderBy: { startTime: "asc" } }),
    prisma.todoItem.findMany({ where: { date: dKey }, orderBy: { order: "asc" } }),
    prisma.journalNote.findMany({ where: { date: dKey }, orderBy: { createdAt: "desc" } }),
    prisma.focusArea.findMany({ orderBy: { order: "asc" } }),
    prisma.routineTemplate.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.routineCompletion.findMany({ where: { date: dKey } }),
    prisma.focusAreaItemCompletion.findMany({ where: { date: dKey } }),
    prisma.generalTask.findMany({ where: { completed: false }, orderBy: { order: "asc" } }),
  ]);

  const completionMap = new Map(completions.map((c) => [c.templateId, c.done]));
  const dueRoutineTemplates = routineTemplates.filter((t) => {
    if (t.intervalDays <= 1) return true;
    const diff = daysBetween(t.startDate, dKey);
    return diff >= 0 && diff % t.intervalDays === 0;
  });
  const routines = dueRoutineTemplates.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    done: completionMap.get(t.id) ?? false,
    trackCompletion: t.trackCompletion,
    intervalDays: t.intervalDays,
  }));

  const itemCompletionMap = new Map(
    itemCompletions.map((c) => [`${c.focusAreaId}::${c.itemText}`, c.done])
  );

  // Checkbox'ı olmayan (trackCompletion=false), sadece bilgi amaçlı rutinler
  // asla "yapıldı" olamayacağı için tamamlanma yüzdesine dahil edilmiyor.
  const trackableRoutines = routines.filter((r) => r.trackCompletion);
  const dayCompletionPercent = computeDayCompletionPercent({
    totalRoutines: trackableRoutines.length,
    completedRoutines: trackableRoutines.filter((r) => r.done).length,
    hasFocusAreas: focusAreas.length > 0,
    anyFocusDone: itemCompletions.some((c) => c.done),
  });

  const generalTaskRows: GeneralTaskRow[] = await Promise.all(
    generalTasks.map(async (t) => {
      const [totalAgg, todayLog] = await Promise.all([
        prisma.generalTaskLog.aggregate({ where: { taskId: t.id }, _sum: { amount: true } }),
        prisma.generalTaskLog.findUnique({ where: { taskId_date: { taskId: t.id, date: dKey } } }),
      ]);
      const totalAmount = totalAgg._sum.amount ?? 0;
      return {
        id: t.id,
        title: t.title,
        unit: t.unit,
        targetAmount: t.targetAmount,
        totalAmount,
        todayAmount: todayLog?.amount ?? 0,
        percent: t.targetAmount > 0 ? (totalAmount / t.targetAmount) * 100 : 0,
      };
    })
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Günlük Program</h1>
        <DateSwitcher date={date} />
      </div>

      <section className="card flex flex-wrap items-center gap-4 p-5">
        <DonutChart percent={dayCompletionPercent} color="var(--accent-mint)" size={72} strokeWidth={8} />
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Günün Tamamlanma Durumu
          </h2>
          <p className="text-xs text-muted">{formatTrLong(dKey)}</p>
          <p className="mt-1 text-xs text-muted">
            {trackableRoutines.filter((r) => r.done).length}/{trackableRoutines.length} rutin
            {focusAreas.length > 0 &&
              ` · Çalışmalar-Hobiler: ${itemCompletions.some((c) => c.done) ? "yapıldı" : "yapılmadı"}`}
          </p>
        </div>
      </section>

      <FocusAreaSummary areas={focusAreas} date={date} completions={itemCompletionMap} />

      <GeneralTaskSection date={date} tasks={generalTaskRows} />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex min-w-0 flex-col gap-6">
          <JournalSection date={date} notes={notes} />
        </div>
        <div className="flex min-w-0 flex-col gap-6">
          <RoutineSection date={date} routines={routines} />
          <TodoSection date={date} todos={todos} />
        </div>
      </div>

      <TimeBlockSection date={date} blocks={timeBlocks} />
    </div>
  );
}
