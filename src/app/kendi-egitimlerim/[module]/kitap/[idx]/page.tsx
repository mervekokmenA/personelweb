import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, List } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getModule } from "@/lib/learning";
import { bookAccessAllowed, getChapter, listChapters } from "@/lib/learning/books";

export const dynamic = "force-dynamic";

export default async function KitapBolumPage({ params }: { params: Promise<{ module: string; idx: string }> }) {
  const { module: moduleId, idx: idxRaw } = await params;
  const m = getModule(moduleId);
  const idx = Number(idxRaw);
  if (!m || !Number.isInteger(idx) || idx < 0) notFound();
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  if (!bookAccessAllowed()) notFound();

  const [ch, all] = await Promise.all([getChapter(m.id, idx), listChapters(m.id)]);
  if (!ch) notFound();
  const pos = all.findIndex((c) => c.idx === idx);
  const prev = pos > 0 ? all[pos - 1] : null;
  const next = pos >= 0 && pos < all.length - 1 ? all[pos + 1] : null;
  const base = `/kendi-egitimlerim/${m.id}/kitap`;
  const blocks = ch.content.split(/\n{2,}/);

  const nav = (
    <nav className="flex flex-wrap items-center justify-between gap-2">
      {prev ? <Link href={`${base}/${prev.idx}`} className="ag-btn ag-btn-outline"><ArrowLeft size={14} /> Önceki</Link> : <span />}
      <Link href={base} className="ag-btn ag-btn-soft"><List size={14} /> İçindekiler</Link>
      {next ? <Link href={`${base}/${next.idx}`} className="ag-btn ag-btn-dark">Sonraki <ArrowRight size={14} /></Link> : <span />}
    </nav>
  );

  return (
    <div className="agro flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Link href={`/kendi-egitimlerim/${m.id}`} className="ag-btn ag-btn-outline"><ArrowLeft size={14} /> {m.title}</Link>
        <span className="text-xs ag-muted">{ch.book && `${ch.book} · `}bölüm {pos + 1}/{all.length}</span>
      </div>
      <h1 className="ag-title !text-2xl sm:!text-3xl">{ch.title}</h1>
      {nav}
      <article className="ag-panel mx-auto flex w-full max-w-3xl flex-col gap-4 text-[0.97rem] leading-relaxed">
        {blocks.map((b, i) =>
          b.startsWith("## ") ? <h2 key={i} className="mt-2 text-lg font-semibold">{b.slice(3)}</h2> : <p key={i}>{b}</p>,
        )}
      </article>
      {nav}
    </div>
  );
}
