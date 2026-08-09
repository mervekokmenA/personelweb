import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { prisma, hasDatabaseUrl } from "@/lib/prisma";
import { getAppSettings } from "@/lib/settings";
import { computeReadingDebt } from "@/lib/reading";
import { toDateInputValue } from "@/lib/date";
import { logReadingPages, deleteReadingLog } from "@/app/actions";
import { DeleteButton } from "@/components/ui/delete-button";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";

export const dynamic = "force-dynamic";

function fmt(d: Date): string {
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function KitapOkumaPage() {
  if (!hasDatabaseUrl) {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Kitap Okuma</h1>
        <DbSetupNotice />
      </div>
    );
  }

  const settings = await getAppSettings();
  const [summary, history] = await Promise.all([
    computeReadingDebt(settings.dailyReadingPageTarget),
    prisma.readingLog.findMany({ orderBy: { date: "desc" } }),
  ]);

  const hasDebt = summary.debtPages > 0;
  const totalPages = history.reduce((sum, h) => sum + h.pages, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link href="/" className="rounded-lg p-2 hover:bg-card">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-2xl font-semibold">Kitap Okuma</h1>
      </div>

      <section className="card p-5">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <BookOpen size={16} /> Okuma Borcu
        </h2>
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-accent-yellow/40 p-3">
            <p className="text-xs text-muted">Borç</p>
            <p className={`text-lg font-semibold ${hasDebt ? "text-red-500" : ""}`}>
              {summary.debtPages} sayfa
            </p>
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Günlük Hedef</p>
            <p className="text-lg font-semibold">{summary.target} sayfa</p>
          </div>
          <div className="rounded-xl bg-background p-3 border border-card-border">
            <p className="text-xs text-muted">Toplam Okunan</p>
            <p className="text-lg font-semibold">{totalPages} sayfa</p>
          </div>
        </div>
        {!hasDebt && (
          <p className="mb-4 text-sm text-muted">Borcun yok, harika gidiyorsun 🎉</p>
        )}

        <form action={logReadingPages} className="flex flex-wrap items-end gap-2 border-t border-card-border pt-4">
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
      </section>

      <section className="card p-5">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Tüm Geçmiş
        </h2>
        <div className="flex flex-col divide-y divide-card-border text-sm">
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
    </div>
  );
}
