import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Lock } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getModule } from "@/lib/learning";
import { bookAccessAllowed, listChapters } from "@/lib/learning/books";

export const dynamic = "force-dynamic";

export default async function KitapIndexPage({ params }: { params: Promise<{ module: string }> }) {
  const { module: moduleId } = await params;
  const m = getModule(moduleId);
  if (!m) notFound();
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const base = `/kendi-egitimlerim/${m.id}`;

  if (!bookAccessAllowed()) {
    return (
      <div className="agro flex flex-col gap-4">
        <Link href={base} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> {m.title}</Link>
        <div className="ag-panel flex items-start gap-3 text-sm">
          <Lock size={18} className="mt-0.5 shrink-0" />
          <p>Kitap metinleri yalnızca giriş korumalı sitede gösterilir. Vercel proje ayarlarında <code>SITE_PASSWORD</code> ortam değişkenini tanımla ve yeniden dağıt; sonra bu sayfa açılır.</p>
        </div>
      </div>
    );
  }

  const chapters = await listChapters(m.id);
  if (chapters.length === 0) notFound();
  const groups = new Map<string, typeof chapters>();
  for (const c of chapters) groups.set(c.book, [...(groups.get(c.book) ?? []), c]);

  return (
    <div className="agro flex flex-col gap-6">
      <Link href={base} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> {m.title}</Link>
      <header className="flex flex-col gap-2">
        <span className="ag-tag w-fit"><span className="ag-dot" /> Kitap metni</span>
        <h1 className="ag-title">{m.title}</h1>
        <p className="text-sm ag-muted">{chapters.length} bölüm · yaklaşık {Math.round(chapters.reduce((s, c) => s + c.chars, 0) / 1000)} bin karakter. Metin, yüklediğin dosyalardan otomatik çıkarılmıştır; sayfa numaraları ve başlıklar temizlenmiş, bölümler otomatik ayrılmıştır, bu yüzden bazı yerlerde biçim hataları olabilir.</p>
        <Link href={`${base}/kitap/${chapters[0].idx}`} className="ag-btn ag-btn-dark w-fit"><BookOpen size={14} /> Baştan oku</Link>
      </header>
      {[...groups.entries()].map(([book, list]) => (
        <section key={book} className="ag-panel flex flex-col gap-2">
          {book && <h2 className="font-medium">{book}</h2>}
          <ol className="flex flex-col gap-1 text-sm">
            {list.map((c) => (
              <li key={c.idx}>
                <Link href={`${base}/kitap/${c.idx}`} className="flex items-baseline justify-between gap-3 rounded-lg px-2 py-1.5 hover:bg-[var(--ag-card)]">
                  <span className="min-w-0 truncate">{c.title}</span>
                  <span className="shrink-0 text-xs ag-muted">~{Math.max(1, Math.round(c.chars / 1500))} dk</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
