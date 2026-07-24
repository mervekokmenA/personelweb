import { DonutChart } from "./donut-chart";
import { TR_DAYS_SHORT } from "@/lib/date";

const ACCENTS = [
  "var(--accent-mint)",
  "var(--accent-blue)",
  "var(--accent-lilac)",
  "var(--accent-pink)",
  "var(--accent-yellow)",
  "var(--accent-mint)",
  "var(--accent-blue)",
];

interface DailyTrendChartProps {
  days: { date: Date; percent: number; isToday: boolean }[];
}

export function DailyTrendChart({ days }: DailyTrendChartProps) {
  const avg = days.length
    ? Math.round(days.reduce((sum, d) => sum + d.percent, 0) / days.length)
    : 0;

  return (
    <section className="card p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Günlük Planlar Nasıl Gidiyor?
        </h2>
        <span className="text-xs text-muted">
          Son 7 gün ortalaması: <strong className="text-foreground">%{avg}</strong>
        </span>
      </div>
      <div className="flex justify-between gap-0.5 overflow-x-auto pb-1 lg:justify-center lg:gap-4">
        {days.map((d, i) => (
          <div key={d.date.toISOString()} className="flex w-8 shrink-0 flex-col items-center gap-1 lg:w-auto lg:gap-2">
            <DonutChart
              percent={d.percent}
              color={ACCENTS[i % ACCENTS.length]}
              size={56}
              strokeWidth={6}
              className="h-8 w-8 lg:h-14 lg:w-14"
            />
            <span className={`text-[9px] lg:text-xs ${d.isToday ? "font-semibold text-foreground" : "text-muted"}`}>
              {TR_DAYS_SHORT[d.date.getUTCDay()]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
