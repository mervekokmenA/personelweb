import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getProgressMap } from "@/lib/learning/progress";
import { moduleLessons, progressKey } from "@/lib/learning";
import { searchTerms, highlightParts } from "@/lib/learning/search";

export const dynamic = "force-dynamic";

export default async function NotlarPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const [modules, progress] = await Promise.all([getAllResolvedModules(), getProgressMap()]);
  const terms = searchTerms(q);
  const groups = modules
    .map((m) => ({
      m,
      notes: moduleLessons(m).flatMap(({ unit, lesson }) => {
        const note = progress.get(progressKey(m.id, lesson.id))?.note;
        if (!note?.trim()) return [];
        if (terms.length && !terms.every((t) => `${note} ${lesson.title}`.toLocaleLowerCase("tr").includes(t))) return [];
        return [{ lesson, unit, note }];
      }),
    }))
    .filter((g) => g.notes.length > 0);
  const total = groups.reduce((s, g) => s + g.notes.length, 0);

  return (
    <div className="agro flex flex-col gap-6">
      <Link href="/kendi-egitimlerim" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Kendi Eğitimlerim</Link>
      <h1 className="ag-title">Notlarım</h1>
      <form className="flex max-w-xl items-center gap-2">
        <Search size={15} className="ag-muted" aria-hidden />
        <input name="q" type="search" defaultValue={q} placeholder="Notlarda ara…" aria-label="Notlarda ara" className="ag-input flex-1" />
        <button className="ag-btn ag-btn-dark">Ara</button>
      </form>
      <p className="text-sm ag-muted">{total === 0 ? (q ? "Eşleşen not yok." : "Henüz not yazmadın. Her dersin altındaki \"Kendi notların\" alanına yazdıkların burada toplanır.") : `${total} not`}</p>
      {groups.map(({ m, notes }) => (
        <section key={m.id} className="flex flex-col gap-2">
          <h2 className="text-base font-medium"><Link href={`/kendi-egitimlerim/${m.id}`} className="hover:underline">{m.title}</Link> <span className="text-xs font-normal ag-muted">({notes.length})</span></h2>
          <ul className="flex flex-col gap-2">
            {notes.map(({ lesson, unit, note }) => (
              <li key={lesson.id} className="ag-panel">
                <Link href={`/kendi-egitimlerim/${m.id}/${lesson.id}`} className="font-medium hover:underline">{lesson.title}</Link>
                <span className="ml-2 text-xs ag-muted">{unit.title.replace(/^\d+\.\s*/, "")}</span>
                <p className="mt-1 whitespace-pre-wrap text-sm">{highlightParts(note, terms).map((p, i) => p.hit ? <mark key={i} className="rounded bg-yellow-200/70 px-0.5">{p.text}</mark> : <span key={i}>{p.text}</span>)}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
