import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getProgressMap } from "@/lib/learning/progress";
import { searchLessons, searchTerms, highlightParts } from "@/lib/learning/search";

export const dynamic = "force-dynamic";

export default async function AraPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().slice(0, 100);
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const [modules, progress] = await Promise.all([getAllResolvedModules(), getProgressMap()]);
  const notes = new Map([...progress].flatMap(([k, v]) => (v.note ? [[k, v.note] as [string, string]] : [])));
  const hits = query ? searchLessons(modules, notes, query) : [];
  const terms = searchTerms(query);

  return (
    <div className="agro flex flex-col gap-6">
      <Link href="/kendi-egitimlerim" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Kendi Eğitimlerim</Link>
      <h1 className="ag-title">Eğitimlerde ara</h1>
      <form className="flex max-w-xl items-center gap-2">
        <Search size={15} className="ag-muted" aria-hidden />
        <input name="q" type="search" defaultValue={query} autoFocus placeholder="ör. closure, Satürn, Çakra…" aria-label="Arama" className="ag-input flex-1" />
        <button className="ag-btn ag-btn-dark">Ara</button>
      </form>
      {query && terms.length === 0 && <p className="text-sm ag-muted">En az 2 harfli bir sözcük yaz.</p>}
      {terms.length > 0 && (
        <p className="text-sm ag-muted">{hits.length === 0 ? "Sonuç bulunamadı." : `${hits.length}${hits.length === 60 ? "+" : ""} parça bulundu (başlık, özet, ders metni, görevler ve notların taranır; tüm sözcükler geçmeli).`}</p>
      )}
      <ul className="flex flex-col gap-2">
        {hits.map((h) => (
          <li key={`${h.moduleId}/${h.lessonId}`}>
            <Link href={`/kendi-egitimlerim/${h.moduleId}/${h.lessonId}`} className="ag-panel block hover:bg-white">
              <p className="text-xs ag-muted">{h.moduleTitle} · {h.unitTitle} · <span className="ag-pill">{h.where}</span></p>
              <p className="font-medium">{highlightParts(h.lessonTitle, terms).map((p, i) => p.hit ? <mark key={i} className="rounded bg-yellow-200/70 px-0.5">{p.text}</mark> : <span key={i}>{p.text}</span>)}</p>
              <p className="mt-1 text-sm ag-muted">{highlightParts(h.snippet, terms).map((p, i) => p.hit ? <mark key={i} className="rounded bg-yellow-200/70 px-0.5">{p.text}</mark> : <span key={i}>{p.text}</span>)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
