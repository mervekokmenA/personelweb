import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { toDateInputValue } from "@/lib/date";

export const dynamic = "force-dynamic";

/**
 * Kişisel verilerin tam yedeğini JSON olarak indirir. Bu uygulamanın
 * Neon dışında ayrı bir yedekleme mekanizması yok — bu route, kullanıcının
 * kendi verisini istediği an dışa alabilmesi için var.
 */
export async function GET() {
  if (!hasDatabaseUrl) {
    return new Response(JSON.stringify({ error: "Veritabanı bağlı değil." }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  const [
    appSettings,
    focusAreas,
    focusAreaItemCompletions,
    routineTemplates,
    routineCompletions,
    timeBlocks,
    todoItems,
    journalNotes,
    contentIdeas,
    trainings,
    trainingNotes,
    weightEntries,
    periodEntries,
    laserSessions,
    habits,
    habitCompletions,
    readingLogs,
    readingTargetChanges,
    generalTasks,
    generalTaskLogs,
  ] = await Promise.all([
    prisma.appSettings.findMany(),
    prisma.focusArea.findMany(),
    prisma.focusAreaItemCompletion.findMany(),
    prisma.routineTemplate.findMany(),
    prisma.routineCompletion.findMany(),
    prisma.timeBlock.findMany(),
    prisma.todoItem.findMany(),
    prisma.journalNote.findMany(),
    prisma.contentIdea.findMany(),
    prisma.training.findMany(),
    prisma.trainingNote.findMany(),
    prisma.weightEntry.findMany(),
    prisma.periodEntry.findMany(),
    prisma.laserSession.findMany(),
    prisma.habit.findMany(),
    prisma.habitCompletion.findMany(),
    prisma.readingLog.findMany(),
    prisma.readingTargetChange.findMany(),
    prisma.generalTask.findMany(),
    prisma.generalTaskLog.findMany(),
  ]);

  const backup = {
    exportedAt: new Date().toISOString(),
    appSettings,
    focusAreas,
    focusAreaItemCompletions,
    routineTemplates,
    routineCompletions,
    timeBlocks,
    todoItems,
    journalNotes,
    contentIdeas,
    trainings,
    trainingNotes,
    weightEntries,
    periodEntries,
    laserSessions,
    habits,
    habitCompletions,
    readingLogs,
    readingTargetChanges,
    generalTasks,
    generalTaskLogs,
  };

  const filename = `kisisel-panel-yedek-${toDateInputValue(new Date())}.json`;

  return new Response(JSON.stringify(backup, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
