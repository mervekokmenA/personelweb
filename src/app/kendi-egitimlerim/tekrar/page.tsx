import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getProgressMap } from "@/lib/learning/progress";
import { buildStudyQueue } from "@/lib/learning/review";
import { getModule } from "@/lib/learning";
import { StudyReview } from "@/components/learning/study-review";
import { saveStudyNewPerDay, restoreSuspendedStudyCards } from "./actions";

export const dynamic = "force-dynamic";

export default async function TekrarPage({ searchParams }: { searchParams: Promise<{ modul?: string }> }) {
  const { modul } = await searchParams;
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const filter = modul && getModule(modul) ? modul : undefined;
  const [modules, progress] = await Promise.all([getAllResolvedModules(), getProgressMap()]);
  const q = await buildStudyQueue(modules, progress, filter);
  const back = filter ? `/kendi-egitimlerim/${filter}` : "/kendi-egitimlerim";

  return (
    <div className="agro flex flex-col gap-6">
      <Link href={back} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> {filter ? getModule(filter)!.title : "Kendi Eğitimlerim"}</Link>
      <header className="flex flex-col gap-2">
        <span className="ag-tag w-fit"><span className="ag-dot" /> Aralıklı tekrar</span>
        <h1 className="ag-title">Tekrar kartları</h1>
        <p className="max-w-2xl text-sm ag-muted">
          Tamamladığın derslerin &quot;Kendini sına&quot; soruları ve başladığın programların test soruları kart olur; hatırladıkça aralık uzar, unuttukça kısalır.
          Bugün: <strong>{q.dueCount}</strong> vadesi gelen + <strong>{q.newCount}</strong> yeni kart · toplam {q.total} kart uygun.
        </p>
      </header>
      <StudyReview key={q.items.map((i) => i.card.id).join(",")} items={q.items} backHref={back} />
      <section className="ag-panel flex flex-wrap items-center gap-4 text-sm">
        <form action={saveStudyNewPerDay} className="flex items-center gap-2">
          <label htmlFor="npd" className="ag-muted">Günlük yeni kart:</label>
          <input id="npd" name="newPerDay" type="number" min={1} max={100} defaultValue={q.newPerDay} className="ag-input w-20 !py-1" />
          <button className="ag-btn ag-btn-outline !py-1">Kaydet</button>
          <span className="text-xs ag-muted">(bugün {q.newToday} yeni kart açıldı)</span>
        </form>
        <form action={restoreSuspendedStudyCards}>
          <button className="text-xs underline ag-muted">Gizlediğim kartları geri getir</button>
        </form>
      </section>
    </div>
  );
}
