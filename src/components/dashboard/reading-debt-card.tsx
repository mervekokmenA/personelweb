import { BookOpen } from "lucide-react";
import { logReadingPages, deleteReadingLog } from "@/app/actions";
import { toDateInputValue } from "@/lib/date";
import { DeleteButton } from "@/components/ui/delete-button";
import type { ReadingDebtSummary } from "@/lib/reading";

interface ReadingLogRow {
  id: string;
  date: Date;
  pages: number;
  bookTitle: string | null;
}

function fmt(d: Date): string {
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export function ReadingDebtCard({
  summary,
  history,
}: {
  summary: ReadingDebtSummary;
  history: ReadingLogRow[];
}) {
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

      <div className="mt-4 flex flex-col divide-y divide-card-border border-t border-card-border text-sm">
        {history.map((h) => (
          <div key={h.id} className="flex flex-wrap items-center justify-between gap-2 py-2">
            <span>{fmt(h.date)}</span>
            <span className="text-muted">
              {h.pages} sayfa{h.bookTitle ? ` — ${h.bookTitle}` : ""}
            </span>
            <DeleteButton action={deleteReadingLog} hidden={{ id: h.id }} />
          </div>
        ))}
        {history.length === 0 && <p className="py-3 text-muted">Henüz kayıt yok.</p>}
      </div>
    </section>
  );
}
