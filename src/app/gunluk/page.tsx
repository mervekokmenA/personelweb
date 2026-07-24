import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { dayKey, toDateInputValue, todayKey } from "@/lib/date";
import { DateSwitcher } from "@/components/gunluk/date-switcher";
import { TimeBlockSection } from "@/components/gunluk/time-block-section";
import { RoutineSection } from "@/components/gunluk/routine-section";
import { TodoSection } from "@/components/gunluk/todo-section";
import { JournalSection } from "@/components/gunluk/journal-section";
import { FocusAreaSummary } from "@/components/gunluk/focus-area-summary";
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

  const [timeBlocks, todos, notes, focusAreas, routineTemplates, completions, itemCompletions] =
    await Promise.all([
      prisma.timeBlock.findMany({ where: { date: dKey }, orderBy: { startTime: "asc" } }),
      prisma.todoItem.findMany({ where: { date: dKey }, orderBy: { order: "asc" } }),
      prisma.journalNote.findMany({ where: { date: dKey }, orderBy: { createdAt: "desc" } }),
      prisma.focusArea.findMany({ orderBy: { order: "asc" } }),
      prisma.routineTemplate.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      prisma.routineCompletion.findMany({ where: { date: dKey } }),
      prisma.focusAreaItemCompletion.findMany({ where: { date: dKey } }),
    ]);

  const completionMap = new Map(completions.map((c) => [c.templateId, c.done]));
  const routines = routineTemplates.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    done: completionMap.get(t.id) ?? false,
    trackCompletion: t.trackCompletion,
  }));

  const itemCompletionMap = new Map(
    itemCompletions.map((c) => [`${c.focusAreaId}::${c.itemText}`, c.done])
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Günlük Program</h1>
        <DateSwitcher date={date} />
      </div>

      <FocusAreaSummary areas={focusAreas} date={date} completions={itemCompletionMap} />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-6">
          <TimeBlockSection date={date} blocks={timeBlocks} />
          <JournalSection date={date} notes={notes} />
        </div>
        <div className="flex flex-col gap-6">
          <RoutineSection date={date} routines={routines} />
          <TodoSection date={date} todos={todos} />
        </div>
      </div>
    </div>
  );
}
