import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { addHabit } from "./actions";
import { HabitCard } from "@/components/aliskanliklar/habit-card";
import { getHabitPeriods, dateKey } from "@/lib/habit-grid";

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

  const habitCards = await Promise.all(
    habits.map(async (h) => {
      const periods = getHabitPeriods(h);
      const completions = periods.length
        ? await prisma.habitCompletion.findMany({
            where: { habitId: h.id, date: { in: periods.map((p) => p.start) } },
          })
        : [];
      const map = new Map(completions.map((c) => [dateKey(c.date), c.done]));
      return { habit: h, periods, map };
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
              placeholder="örn. Su içme, Lazer Epilasyon..."
              required
              className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Tekrar sıklığı
            <select
              name="frequency"
              className="rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
            >
              <option value="DAILY">Günlük</option>
              <option value="WEEKLY">Haftalık (7 günde 1)</option>
              <option value="MONTHLY">Aylık</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Süre (kaç tekrar, süresizse boş bırak)
            <input
              type="number"
              name="totalPeriods"
              min={1}
              placeholder="örn. 4"
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
        <p className="mt-2 text-xs text-muted">
          Her kutu bir tekrarı temsil eder: &quot;Haftalık&quot; seçersen her kutu 7 günlük bir
          dönemi (örn. lazer epilasyon), &quot;Günlük&quot; seçersen her kutu tek bir günü temsil
          eder. Süre olarak 4 girip Haftalık seçersen tam 4 haftalık bir program oluşur.
        </p>
      </section>

      <div className="flex flex-col gap-4">
        {habitCards.map(({ habit, periods, map }) => (
          <HabitCard
            key={habit.id}
            id={habit.id}
            title={habit.title}
            frequency={habit.frequency}
            indefinite={habit.indefinite}
            totalPeriods={habit.totalPeriods}
            active={habit.active}
            periods={periods}
            completions={map}
          />
        ))}
        {habitCards.length === 0 && (
          <p className="card p-5 text-sm text-muted">Henüz alışkanlık eklenmedi.</p>
        )}
      </div>
    </div>
  );
}
