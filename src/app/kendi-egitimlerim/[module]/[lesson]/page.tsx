import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Pencil, ExternalLink, ShieldCheck } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { SaveToast } from "@/components/ui/save-toast";
import { Markdown } from "@/components/learning/markdown";
import { getResolvedModule } from "@/lib/learning/resolve";
import { getProgressMap } from "@/lib/learning/progress";
import { findLesson, progressKey } from "@/lib/learning";
import astrologyData from "@/data/learning/astrology-lessons.json";
import { toggleProgress, saveLessonNote, completeAndNext } from "../../actions";

export const dynamic = "force-dynamic";

interface AstroLesson { n: number; title: string; body: string; reading: string; practice: string; questions: string[] }

export default async function LessonPage({ params }: { params: Promise<{ module: string; lesson: string }> }) {
  const { module: moduleId, lesson: lessonId } = await params;
  if (!hasDatabaseUrl) {
    return <div className="agro"><DbSetupNotice /></div>;
  }
  const [m, progress] = await Promise.all([getResolvedModule(moduleId), getProgressMap()]);
  if (!m) notFound();
  const found = findLesson(m, lessonId);
  if (!found) notFound();
  const { lesson: l, unit, prev, next } = found;
  const key = progressKey(m.id, l.id);
  const info = progress.get(key);
  const astro = l.bodyRef && !l.body ? (astrologyData as unknown as AstroLesson[]).find((a) => a.n === l.bodyRef) : undefined;
  const base = `/kendi-egitimlerim/${m.id}`;

  return (
    <div className="agro flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Link href={base} className="ag-btn ag-btn-outline"><ArrowLeft size={14} /> {m.title}</Link>
        <Link href={`${base}/${l.id}/duzenle`} className="ag-btn ag-btn-soft ml-auto"><Pencil size={14} /> Düzenle</Link>
      </div>

      <header className="flex flex-col gap-3">
        <span className="ag-tag w-fit"><span className="ag-dot" /> {unit.title.replace(/^\d+\.\s*/, "")}</span>
        <h1 className="ag-title">{l.title}</h1>
        <p className="text-sm ag-muted">{l.summary} · ~{l.minutes} dk</p>
        <AutoSubmitCheckbox action={toggleProgress} hidden={{ key, moduleId: m.id }} checked={info?.done ?? false}
          label={info?.done ? "Tamamlandı (geri al)" : "Bu parçayı tamamladım"} />
      </header>

      {l.objectives && l.objectives.length > 0 && (
        <section className="ag-panel">
          <h2 className="mb-2 font-medium">Bu parçanın sonunda</h2>
          <ul className="ag-ul list-disc pl-5 text-sm">{l.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul>
        </section>
      )}

      <section className="ag-panel">
        {l.body ? (
          <Markdown source={l.body} />
        ) : astro ? (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="mb-2 text-lg font-medium">Ders anlatımı</h2>
              <div className="flex flex-col gap-3 text-[0.95rem] leading-relaxed">{astro.body.split("\n").map((p, i) => <p key={i}>{p}</p>)}</div>
            </div>
            <div className="ag-quote-box"><p className="mb-1 text-sm font-medium">Kaynak okuma</p><Markdown source={astro.reading} /></div>
            <div className="ag-quote-box"><p className="mb-1 text-sm font-medium">Harita / araştırma uygulaması</p><Markdown source={astro.practice} /></div>
            <div>
              <h2 className="mb-2 text-lg font-medium">Kontrol soruları</h2>
              <ol className="ag-ol list-decimal pl-5 text-sm">{astro.questions.map((q, i) => <li key={i}>{q}</li>)}</ol>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-sm">{l.summary || "Bu parçanın ders metni henüz yazılmadı."}</p>
            <p className="text-xs ag-muted">Ders metni taslak. Sağ üstteki &quot;Düzenle&quot; ile kendi metnini ekleyebilirsin.</p>
          </div>
        )}
      </section>

      {l.tasks && l.tasks.length > 0 && (
        <section className="ag-panel">
          <h2 className="mb-2 font-medium">Uygulama görevleri</h2>
          <ul className="ag-ul list-disc pl-5 text-sm">{l.tasks.map((o, i) => <li key={i}>{o}</li>)}</ul>
        </section>
      )}
      {l.questions && l.questions.length > 0 && (
        <section className="ag-panel">
          <h2 className="mb-2 font-medium">Kendini sına</h2>
          <ol className="ag-ol list-decimal pl-5 text-sm">{l.questions.map((o, i) => <li key={i}>{o}</li>)}</ol>
        </section>
      )}

      {l.resources && l.resources.length > 0 && (
        <section className="ag-panel">
          <h2 className="mb-2 font-medium">Kaynaklar</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {l.resources.map((r, i) => (
              <li key={i} className="flex flex-wrap items-center gap-x-2">
                <span className="ag-pill">{r.kind}</span>
                {r.url ? <a href={r.url} target={r.url.startsWith("/") ? undefined : "_blank"} rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:underline">{r.title}{!r.url.startsWith("/") && <ExternalLink size={12} />}</a> : <span className="font-medium">{r.title}</span>}
                {r.author && <span className="ag-muted">· {r.author}</span>}
                {r.note && <span className="ag-muted">— {r.note}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {l.verification && (
        <section className="ag-panel">
          <h2 className="mb-2 flex items-center gap-2 font-medium"><ShieldCheck size={16} /> Doğrulama ve kaynak notu</h2>
          <Markdown source={l.verification} />
        </section>
      )}

      <section className="ag-panel">
        <h2 className="mb-2 font-medium">Kendi notların</h2>
        <form action={saveLessonNote} className="flex flex-col gap-2">
          <input type="hidden" name="key" value={key} />
          <textarea name="note" defaultValue={info?.note ?? ""} rows={5} placeholder="Bu parçadan çıkardıkların, sorular, uygulama sonuçların…" className="ag-textarea" />
          <div className="flex items-center gap-2"><button className="ag-btn ag-btn-dark">Notu kaydet</button><SaveToast label="Not kaydedildi" /></div>
        </form>
      </section>

      <nav className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {prev ? <Link href={`${base}/${prev.id}`} className="ag-btn ag-btn-outline"><ArrowLeft size={14} /> {prev.title}</Link> : <span />}
          <div className="flex flex-wrap items-center gap-2">
            {next && <Link href={`${base}/${next.id}`} className="ag-btn ag-btn-outline">Sadece göz at: {next.title} <ArrowRight size={14} /></Link>}
            <form action={completeAndNext}>
              <input type="hidden" name="moduleId" value={m.id} />
              <input type="hidden" name="lessonId" value={l.id} />
              <input type="hidden" name="nextId" value={next?.id ?? ""} />
              <button className="ag-btn ag-btn-dark">
                {next ? (info?.done ? "Sonraki parçaya geç" : "Tamamla ve sonrakine geç") : info?.done ? "Modüle dön" : "Tamamla ve bitir"} <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
        <p className="text-xs ag-muted">
          &quot;Tamamla ve sonrakine geç&quot; bu parçayı otomatik tamamlandı işaretler. Önceki/&quot;Sadece göz at&quot; bağlantıları ve modül listesinden başka bir parçaya atlamak ise yalnızca ön izlemedir; parça işaretlenmez.
        </p>
      </nav>
    </div>
  );
}
