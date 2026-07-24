import { DonutChart } from "./donut-chart";
import { formatHabitFrequency, type HabitFrequency } from "@/lib/habit-grid";

const ACCENTS = [
  "var(--accent-lilac)",
  "var(--accent-mint)",
  "var(--accent-pink)",
  "var(--accent-blue)",
  "var(--accent-yellow)",
];

export interface HabitGoalDatum {
  id: string;
  title: string;
  frequency: HabitFrequency;
  customIntervalDays: number | null;
  indefinite: boolean;
  percent: number;
  doneCount: number;
  totalCount: number;
}

export function HabitGoalChart({ habits }: { habits: HabitGoalDatum[] }) {
  return (
    <section className="card p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
        Alışkanlık Hedeflerim
      </h2>
      {habits.length === 0 ? (
        <p className="text-sm text-muted">Henüz aktif alışkanlık yok.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {habits.map((h, i) => (
            <div key={h.id} className="flex flex-col items-center gap-2 rounded-2xl bg-background p-3 text-center">
              <DonutChart percent={h.percent} color={ACCENTS[i % ACCENTS.length]} size={64} strokeWidth={7} />
              <p className="text-xs font-medium leading-tight">{h.title}</p>
              <p className="text-[10px] text-muted">
                {formatHabitFrequency(h.frequency, h.customIntervalDays)} ·{" "}
                {h.indefinite ? "süresiz, şu ana kadar" : "hedefe göre"}
              </p>
              <p className="text-[10px] text-muted">
                {h.doneCount}/{h.totalCount}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
