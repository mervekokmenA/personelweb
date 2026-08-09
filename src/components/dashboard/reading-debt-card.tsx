import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { logReadingPages } from "@/app/actions";
import { toDateInputValue, TR_DAYS_SHORT } from "@/lib/date";
import { DonutChart } from "@/components/dashboard/donut-chart";
import type { ReadingDebtSummary } from "@/lib/reading";

const ACCENTS = [
  "var(--accent-mint)",
  "var(--accent-blue)",
  "var(--accent-lilac)",
  "var(--accent-pink)",
  "var(--accent-yellow)",
  "var(--accent-mint)",
  "var(--accent-blue)",
];

interface ReadingTrendDay {
  date: Date;
  isToday: boolean;
  percent: number;
}

export function ReadingDebtCard({
  summary,
  trend,
}: {
  summary: ReadingDebtSummary;
  trend: ReadingTrendDay[];
}) {
  const hasDebt = summary.debtPages > 0;
  return (
    <section className="card p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <BookOpen size={16} /> Kitap Okuma Borcu
        </h2>
        <Link
          href="/kitap-okuma"
          className="flex items-center gap-1 text-xs text-muted hover:text-foreground"
        >
          Tüm geçmiş <ArrowRight size={13} />
        </Link>
      </div>
      <div className="mb-4 flex items-baseline gap-2">
        <span className={`text-3xl font-semibold ${hasDebt ? "text-red-500" : ""}`}>
          {summary.debtPages}
        </span>
        <span className="text-sm text-muted">
          sayfa borç {summary.missingDays > 0 && `· ${summary.missingDays} gün eksik`}
        </span>
      </div>
      {!hasDebt && (
        <p className="mb-4 text-sm text-muted">Borcun yok, harika gidiyorsun 🎉</p>
      )}
      <form action={logReadingPages} className="mb-4 flex flex-wrap items-end gap-2">
        <label className="flex flex-col gap-1 text-xs text-muted">
          Tarih
          <input
            type="date"
            name="date"
            defaultValue={toDateInputValue(new Date())}
            className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-muted">
          Sayfa
          <input
            type="number"
            name="pages"
            min={0}
            required
            placeholder={String(summary.target)}
            className="w-24 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
        </label>
        <label className="flex flex-1 min-w-[8rem] flex-col gap-1 text-xs text-muted">
          Kitap (opsiyonel)
          <input
            name="bookTitle"
            className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
          />
        </label>
        <button className="rounded-lg bg-accent-yellow px-4 py-1.5 text-sm font-medium">
          Kaydet
        </button>
      </form>

      <div className="flex justify-between gap-0.5 overflow-x-auto border-t border-card-border pt-4 pb-1 lg:justify-center lg:gap-4">
        {trend.map((d, i) => (
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
