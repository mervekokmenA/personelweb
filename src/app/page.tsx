import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { todayKey, formatTrLong, addDays } from "@/lib/date";
import { getAppSettings } from "@/lib/settings";
import { computeCycleSummary, computeLaserSummary } from "@/lib/health";
import { computeReadingDebt } from "@/lib/reading";
import { getHabitPeriods, dateKey } from "@/lib/habit-grid";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { ReadingDebtCard } from "@/components/dashboard/reading-debt-card";
import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { DailyTrendChart } from "@/components/dashboard/daily-trend-chart";
import { HabitGoalChart, type HabitGoalDatum } from "@/components/dashboard/habit-goal-chart";
import {
  CalendarDays,
  Lightbulb,
  GraduationCap,
  Sparkles,
  HeartPulse,
  ListChecks,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Kişisel Panel</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const today = todayKey();

  // Tek satırlık AppSettings kaydı önce ve tek başına okunuyor — aynı anda
  // birden fazla upsert çağrısı yarış durumuna (unique constraint hatası) yol
  // açabiliyor, bu yüzden Promise.all içindeki diğer sorgulardan ayrı tutuldu.
  const settings = await getAppSettings();

  const [
    activeRoutines,
    todayCompletions,
    todayBlocksCount,
    statusCounts,
    ongoingTrainings,
    activeHabits,
    periods,
    laserSessions,
    readingDebt,
  ] = await Promise.all([
    prisma.routineTemplate.count({ where: { active: true } }),
    prisma.routineCompletion.count({ where: { date: today, done: true } }),
    prisma.timeBlock.count({ where: { date: today } }),
    prisma.contentIdea.groupBy({ by: ["status"], _count: true }),
    prisma.training.findMany({ where: { status: "ONGOING" }, take: 3, orderBy: { order: "asc" } }),
    prisma.habit.findMany({ where: { active: true } }),
    prisma.periodEntry.findMany({ orderBy: { startDate: "desc" }, take: 6 }),
    prisma.laserSession.findMany({ orderBy: { date: "desc" }, take: 1 }),
    computeReadingDebt(settings.dailyReadingPageTarget),
  ]);

  const readingHistory = await prisma.readingLog.findMany({
    orderBy: { date: "desc" },
    take: 30,
  });

  const countMap = Object.fromEntries(statusCounts.map((s) => [s.status, s._count]));
  const contentTotal = statusCounts.reduce((sum, s) => sum + s._count, 0);

  const cycle = computeCycleSummary(periods, settings.avgCycleLengthDays, settings.avgPeriodLengthDays);
  const laser = computeLaserSummary(laserSessions[0]?.date ?? null, settings.laserIntervalDays);

  const habitDoneToday = await prisma.habitCompletion.count({
    where: { habitId: { in: activeHabits.map((h) => h.id) }, date: today, done: true },
  });

  // Son 7 gündeki rutin tamamlanma yüzdesi (bugünkü aktif rutin sayısına göre)
  const last7Dates = Array.from({ length: 7 }, (_, i) => addDays(today, i - 6));
  const routineCompletionsLast7 = await prisma.routineCompletion.findMany({
    where: { date: { in: last7Dates }, done: true },
  });
  const completionCountByDate = new Map<string, number>();
  for (const c of routineCompletionsLast7) {
    const key = c.date.toISOString();
    completionCountByDate.set(key, (completionCountByDate.get(key) ?? 0) + 1);
  }
  const dailyTrend = last7Dates.map((date) => ({
    date,
    isToday: date.getTime() === today.getTime(),
    percent: activeRoutines > 0 ? ((completionCountByDate.get(date.toISOString()) ?? 0) / activeRoutines) * 100 : 0,
  }));

  // Her aktif alışkanlık için (süresizse "şu ana kadar", süreliyse hedefe göre) tamamlanma yüzdesi
  const habitGoals: HabitGoalDatum[] = await Promise.all(
    activeHabits.map(async (h) => {
      const periods = getHabitPeriods(h);
      const completions = periods.length
        ? await prisma.habitCompletion.findMany({
            where: { habitId: h.id, date: { in: periods.map((p) => p.start) }, done: true },
          })
        : [];
      const doneDates = new Set(completions.map((c) => dateKey(c.date)));
      const doneCount = periods.filter((p) => doneDates.has(dateKey(p.start))).length;
      return {
        id: h.id,
        title: h.title,
        frequency: h.frequency,
        customIntervalDays: h.customIntervalDays,
        indefinite: h.indefinite,
        percent: periods.length ? (doneCount / periods.length) * 100 : 0,
        doneCount,
        totalCount: periods.length,
      };
    })
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Merhaba 🌙</h1>
        <p className="text-sm text-muted">{formatTrLong(today)}</p>
      </div>

      <ReadingDebtCard summary={readingDebt} history={readingHistory} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard href="/gunluk" icon={CalendarDays} title="Günlük Program" accent="var(--accent-mint)">
          Bugün {todayCompletions}/{activeRoutines} rutin tamamlandı, {todayBlocksCount} zaman bloğu planlı.
        </DashboardCard>

        <DashboardCard href="/icerik" icon={Lightbulb} title="İçerik Fikirleri" accent="var(--accent-yellow)">
          {contentTotal} fikirden {countMap.DONE ?? 0} tanesi yapıldı, {countMap.IN_PROGRESS ?? 0} tanesi devam ediyor.
        </DashboardCard>

        <DashboardCard href="/egitimler" icon={GraduationCap} title="Eğitimler" accent="var(--accent-blue)">
          {ongoingTrainings.length > 0
            ? ongoingTrainings.map((t) => t.name).join(", ")
            : "Şu an devam eden eğitim yok."}
        </DashboardCard>

        <DashboardCard href="/aliskanliklar" icon={ListChecks} title="Alışkanlık Takibi" accent="var(--accent-lilac)">
          {activeHabits.length} aktif alışkanlık, bugün {habitDoneToday} tanesi işaretlendi.
        </DashboardCard>

        <DashboardCard href="/saglik" icon={HeartPulse} title="Sağlık" accent="var(--accent-pink)">
          {cycle.daysUntilNext !== null
            ? `Sonraki adete ${cycle.daysUntilNext} gün. `
            : "Henüz adet kaydı yok. "}
          {laser.daysUntilNext !== null && `Lazer için ${laser.daysUntilNext} gün.`}
        </DashboardCard>

        <DashboardCard href="/astroloji" icon={Sparkles} title="Astroloji" accent="var(--accent-lilac)">
          Bugünün transit haritasını ve natal karşılaştırmasını gör.
        </DashboardCard>
      </div>

      <DailyTrendChart days={dailyTrend} />

      <HabitGoalChart habits={habitGoals} />
    </div>
  );
}
