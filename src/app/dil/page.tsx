import Link from "next/link";
import { ArrowUpRight, Languages } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { LANGS } from "@/lib/lang/cards";
import { getLangStat } from "@/lib/lang/db";

export const dynamic = "force-dynamic";

export default async function DilPage() {
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const stats = await Promise.all(LANGS.map((l) => getLangStat(l.id)));

  return (
    <div className="agro flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <span className="ag-tag w-fit"><span className="ag-dot" /> Yabancı Dil</span>
        <h1 className="ag-title max-w-2xl">Aralıklı tekrarla kalıcı kelime öğrenme</h1>
        <p className="max-w-2xl text-sm ag-muted">
          Üç dil, her seviye için kart desteleri ve &quot;100 Temel İfade&quot;. Her kartta kelime, okunuş, anlam ve örnek cümle var. Kartları değerlendirdikçe
          sistem, unutmadan hemen önce yeniden gösterir. Rusça ve İbranice için alfabe, okunuş ve gramer dersleri de var.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {LANGS.map((l, i) => {
          const s = stats[i];
          const pct = s.total ? Math.round((s.seen / s.total) * 100) : 0;
          return (
            <Link key={l.id} href={`/dil/${l.id}`} className="ag-stat group min-h-[14rem] hover:bg-white">
              <div className="flex items-start justify-between">
                <span className="ag-stat-icon"><Languages size={18} /></span>
                <span className="ag-icon-btn opacity-70 group-hover:opacity-100"><ArrowUpRight size={14} /></span>
              </div>
              <h2 className="text-xl font-medium">{l.name} <span className="text-sm ag-muted" dir={l.rtl ? "rtl" : "ltr"}>{l.native}</span></h2>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="ag-pill ag-pill-lime">{s.due} tekrar</span>
                <span className="ag-pill">{s.newLeftToday} yeni (bugün)</span>
                <span className="ag-pill">{s.mature} olgun</span>
              </div>
              <div className="mt-auto flex flex-col gap-1.5">
                <div className="ag-progress"><span style={{ width: `${pct}%` }} /></div>
                <span className="text-xs ag-muted">{s.seen}/{s.total} kart görüldü · %{pct}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="ag-panel flex flex-col gap-2 text-sm">
        <h2 className="text-base font-medium">Nasıl çalışır?</h2>
        <ul className="list-disc pl-5 ag-muted">
          <li>Her gün <strong>yeni kart</strong> (varsayılan 10) ve <strong>vadesi gelen tekrarlar</strong> birlikte gösterilir.</li>
          <li>Karta bakıp cevabı hatırlamaya çalış, sonra göster ve dürüstçe not ver: <strong>Tekrar / Zor / İyi / Kolay</strong>.</li>
          <li>&quot;İyi&quot; dedikçe aralık uzar (1 gün → 3 gün → ~1 hafta → ~1 ay…); &quot;Tekrar&quot; dersen kart baştan başlar.</li>
          <li>Hızı artırmak için dil sayfasından günlük yeni kart sayısını değiştir.</li>
        </ul>
      </section>
    </div>
  );
}
