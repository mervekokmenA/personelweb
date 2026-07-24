import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { addHabit } from "./actions";
import { HabitCard } from "@/components/aliskanliklar/habit-card";
import { getMonthDates, getWeekDates, dateKey } from "@/lib/habit-grid";

export const dynamic = "force-dynamic";

export default async function AliskanliklarPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Alışkanlık Takibi</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const habits = await prisma.habit.findMany({ orderBy: { order: "asc" } });
  const now = new Date();
  const monthDates = getMonthDates(now);
  const weekDates = getWeekDates(now);

  const monthName = now.toLocaleDateString("tr-TR", { month: "long", year: "numeric" });
  const weekLabel = `${weekDates[0].getUTCDate()} - ${weekDates[6].getUTCDate()} ${weekDates[6].toLocaleDateString("tr-TR", { month: "long" })}`;

  const habitCards = await Promise.all(
    habits.map(async (h) => {
      const dates = h.frequency === "WEEKLY" ? weekDates : monthDates;
      const completions = await prisma.habitCompletion.findMany({
        where: { habitId: h.id, date: { gte: dates[0], lte: dates[dates.length - 1] } },
      });
      const map = new Map(completions.map((c) => [dateKey(c.date), c.done]));
      return { habit: h, dates, map };
    })
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Alışkanlık Takibi</h1>

      <section className="card p-4">
        <form action={addHabit} className="flex flex-wrap items-end gap-2">
          <label className="flex flex-1 min-w-[10rem] flex-col gap-1 text-xs text-muted">
            Konu
            <input
              name="title"
              placeholder="örn. Su içme, Meditasyon..."
              required
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Dönem
            <select
              name="frequency"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            >
              <option value="MONTHLY">Aylık</option>
              <option value="WEEKLY">Haftalık</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Süre (hafta/ay, süresizse boş bırak)
            <input
              type="number"
              name="totalPeriods"
              min={1}
              className="w-28 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex items-center gap-1.5 text-xs text-muted">
            <input type="checkbox" name="indefinite" defaultChecked />
            Süresiz
          </label>
          <button className="rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
            Alışkanlık Ekle
          </button>
        </form>
      </section>

      <div className="flex flex-col gap-4">
        {habitCards.map(({ habit, dates, map }) => (
          <HabitCard
            key={habit.id}
            id={habit.id}
            title={habit.title}
            frequency={habit.frequency}
            indefinite={habit.indefinite}
            totalPeriods={habit.totalPeriods}
            active={habit.active}
            dates={dates}
            completions={map}
            periodLabel={habit.frequency === "WEEKLY" ? weekLabel : monthName}
          />
        ))}
        {habitCards.length === 0 && (
          <p className="card p-5 text-sm text-muted">Henüz alışkanlık eklenmedi.</p>
        )}
      </div>
    </div>
  );
}
