import Link from "next/link";
import { Flame, Target, Timer, Bookmark, AlertTriangle } from "lucide-react";
import { formatDaysLeft, type LearningStats } from "@/lib/learning/stats";
import { saveWeeklyGoal } from "@/app/kendi-egitimlerim/actions";

export interface WeakQuiz { moduleId: string; unitId: string; unitTitle: string; moduleTitle: string; best: number }
export interface BookmarkItem { moduleId: string; lessonId: string; lessonTitle: string; moduleTitle: string }

/** Çalışma temposu: seri, haftalık hedef, son 8 hafta, tahmini bitiş, yer imleri, zayıf testler */
export function TempoPanel({ stats, bookmarks, weak }: { stats: LearningStats; bookmarks: BookmarkItem[]; weak: WeakQuiz[] }) {
  const max = Math.max(1, stats.weeklyGoal, ...stats.weeks.map((w) => w.count));
  const goalPct = Math.min(100, Math.round((stats.weekDone / stats.weeklyGoal) * 100));
  return (
    <section className="flex flex-col gap-4" aria-label="Çalışma temposu">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="ag-panel flex flex-col gap-2">
          <h2 className="flex items-center gap-2 text-sm font-medium"><Flame size={15} /> Seri</h2>
          <p className="text-3xl font-semibold">{stats.streak} <span className="text-base font-normal ag-muted">gün</span></p>
          <p className="text-xs ag-muted">
            {stats.doneToday ? "Bugün en az bir parça tamamladın." : stats.streak > 0 ? "Seriyi sürdürmek için bugün bir parça tamamla." : "Bir parça tamamlayınca seri başlar."}
          </p>
        </div>

        <div className="ag-panel flex flex-col gap-2">
          <h2 className="flex items-center gap-2 text-sm font-medium"><Target size={15} /> Haftalık hedef</h2>
          <p className="text-sm"><strong className="text-xl">{stats.weekDone}</strong> / {stats.weeklyGoal} parça bu hafta</p>
          <div className="ag-progress"><span style={{ width: `${goalPct}%` }} /></div>
          <form action={saveWeeklyGoal} className="mt-1 flex items-center gap-2 text-xs ag-muted">
            <label htmlFor="goal">Hedef:</label>
            <input id="goal" name="goal" type="number" min={1} max={100} defaultValue={stats.weeklyGoal} className="ag-input w-16 !py-1" />
            <button className="ag-btn ag-btn-outline !px-3 !py-1 text-xs">Kaydet</button>
          </form>
        </div>

        <div className="ag-panel flex flex-col gap-2">
          <h2 className="text-sm font-medium">Son 8 hafta</h2>
          <div className="flex h-20 items-end gap-1.5" role="img" aria-label={`Son 8 hafta tamamlanan parça: ${stats.weeks.map((w) => w.count).join(", ")}`}>
            {stats.weeks.map((w, i) => (
              <div key={i} className="flex flex-1 flex-col items-center justify-end gap-1">
                <span className="text-[10px] ag-muted">{w.count || ""}</span>
                <div className="w-full rounded-t" style={{ height: `${Math.max(4, (w.count / max) * 56)}px`, background: i === 7 ? "var(--ag-ink)" : "var(--ag-border)" }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] ag-muted"><span>{stats.weeks[0].label}</span><span>bu hafta</span></div>
        </div>
      </div>

      {(stats.pace.length > 0 || bookmarks.length > 0 || weak.length > 0) && (
        <div className="grid gap-4 md:grid-cols-3">
          <div className="ag-panel flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-sm font-medium"><Timer size={15} /> Bu tempoda tahmini bitiş</h2>
            {stats.pace.length === 0 ? <p className="text-xs ag-muted">Son 4 haftada çalıştığın eğitim yok.</p> : (
              <ul className="flex flex-col gap-1.5 text-sm">
                {stats.pace.map((p) => (
                  <li key={p.id} className="flex items-baseline justify-between gap-2">
                    <Link href={`/kendi-egitimlerim/${p.id}`} className="min-w-0 truncate hover:underline">{p.title}</Link>
                    <span className="shrink-0 text-xs ag-muted">{formatDaysLeft(p.daysLeft)} · {p.remaining} kaldı · {p.perWeek}/hf</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-[11px] ag-muted">Son 28 günlük hızına göre; tahmindir.</p>
          </div>

          <div className="ag-panel flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-sm font-medium"><Bookmark size={15} /> Yer imlerim ({bookmarks.length})</h2>
            {bookmarks.length === 0 ? <p className="text-xs ag-muted">Bir dersteki yer imi düğmesiyle sonra dönmek istediğin parçaları kaydet.</p> : (
              <ul className="flex flex-col gap-1.5 text-sm">
                {bookmarks.slice(0, 8).map((b) => (
                  <li key={`${b.moduleId}/${b.lessonId}`} className="min-w-0">
                    <Link href={`/kendi-egitimlerim/${b.moduleId}/${b.lessonId}`} className="block truncate hover:underline">{b.lessonTitle}</Link>
                    <span className="text-[11px] ag-muted">{b.moduleTitle}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="ag-panel flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-sm font-medium"><AlertTriangle size={15} /> Tekrar etmen gereken testler</h2>
            {weak.length === 0 ? <p className="text-xs ag-muted">En iyi puanı %70 altında kalan test yok.</p> : (
              <ul className="flex flex-col gap-1.5 text-sm">
                {weak.slice(0, 8).map((w) => (
                  <li key={`${w.moduleId}/${w.unitId}`} className="flex items-baseline justify-between gap-2">
                    <Link href={`/kendi-egitimlerim/${w.moduleId}/test/${w.unitId}`} className="min-w-0 truncate hover:underline">{w.unitTitle}<span className="text-[11px] ag-muted"> · {w.moduleTitle}</span></Link>
                    <span className="shrink-0 text-xs ag-muted">en iyi %{w.best}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
