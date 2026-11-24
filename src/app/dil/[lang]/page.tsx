import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play, BookOpen } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getLang } from "@/lib/lang/cards";
import { getLangStat, getNewPerDay } from "@/lib/lang/db";
import { saveLangSettings } from "../actions";

export const dynamic = "force-dynamic";

export default async function LangHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langId } = await params;
  const lang = getLang(langId);
  if (!lang) notFound();
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const [stat, newPerDay] = await Promise.all([getLangStat(lang.id), getNewPerDay(lang.id)]);
  const byDeck = new Map(stat.decks.map((d) => [d.deck, d]));

  return (
    <div className="agro flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <Link href="/dil" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Yabancı Dil</Link>
        <span className="ag-tag w-fit"><span className="ag-dot" /> {lang.native}</span>
        <h1 className="ag-title">{lang.name}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <Link href={`/dil/${lang.id}/calis`} className="ag-btn ag-btn-dark">
            <Play size={14} /> Çalış ({stat.due} tekrar + {stat.newLeftToday} yeni)
          </Link>
          {lang.id !== "en" && (
            <Link href={`/kendi-egitimlerim/${lang.moduleId}`} className="ag-btn ag-btn-outline"><BookOpen size={14} /> Alfabe, okunuş ve gramer dersleri</Link>
          )}
          {lang.id === "en" && (
            <Link href={`/kendi-egitimlerim/${lang.moduleId}`} className="ag-btn ag-btn-outline"><BookOpen size={14} /> Çalışma yöntemi</Link>
          )}
        </div>
        <p className="max-w-3xl text-xs ag-muted">{lang.sourceNote}</p>
      </header>

      <section className="flex flex-col gap-3" aria-label="Desteler">
        <h2 className="text-lg font-medium">Desteler</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lang.decks.map((d) => {
            const s = byDeck.get(d.id) ?? { total: 0, seen: 0, due: 0, mature: 0, deck: d.id };
            const pct = s.total ? Math.round((s.seen / s.total) * 100) : 0;
            return (
              <div key={d.id} className={`ag-stat gap-2 ${d.id === "ifade" ? "ag-stat-dark" : ""}`}>
                <h3 className="text-base font-medium">{d.title}</h3>
                <p className="text-xs opacity-80">{d.description}</p>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="ag-pill">{s.total} kart</span>
                  {s.due > 0 && <span className="ag-pill ag-pill-lime">{s.due} tekrar</span>}
                  <span className="ag-pill">{s.mature} olgun</span>
                </div>
                <div className="ag-progress"><span style={{ width: `${pct}%` }} /></div>
                <div className="mt-auto flex gap-2 pt-1">
                  <Link href={`/dil/${lang.id}/calis?deste=${d.id}`} className="ag-btn ag-btn-soft">Çalış</Link>
                  <Link href={`/dil/${lang.id}/deste/${d.id}`} className="ag-btn ag-btn-outline">Kartlar</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="ag-panel flex flex-col gap-3">
        <h2 className="text-base font-medium">Günlük yeni kart sayısı</h2>
        <form action={saveLangSettings} className="flex flex-wrap items-center gap-3 text-sm">
          <input type="hidden" name="lang" value={lang.id} />
          <label htmlFor="newPerDay">Her gün</label>
          <input id="newPerDay" name="newPerDay" type="number" min={1} max={50} defaultValue={newPerDay} className="ag-input w-20" />
          <span>yeni kart</span>
          <button className="ag-btn ag-btn-outline">Kaydet</button>
        </form>
        <p className="text-xs ag-muted">100 Temel İfade destesi varsayılan hızda (10/gün) 10 günde biter. Çok yüksek tutarsan tekrar yükün hızla artar.</p>
      </section>
    </div>
  );
}
