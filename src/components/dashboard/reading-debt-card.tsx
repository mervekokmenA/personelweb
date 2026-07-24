import { BookOpen } from "lucide-react";
import { logReadingPages } from "@/app/actions";
import { toDateInputValue } from "@/lib/date";
import type { ReadingDebtSummary } from "@/lib/reading";

export function ReadingDebtCard({ summary }: { summary: ReadingDebtSummary }) {
  const hasDebt = summary.debtPages > 0;
  return (
    <section className="card p-5">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
        <BookOpen size={16} /> Kitap Okuma Borcu
      </h2>
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
      <form action={logReadingPages} className="flex flex-wrap items-end gap-2">
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
            defaultValue={summary.target}
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
    </section>
  );
}
