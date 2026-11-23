import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getResolvedModule } from "@/lib/learning/resolve";
import { findLesson } from "@/lib/learning";
import { listToLines, resourcesToText } from "@/lib/learning/formats";
import astrologyData from "@/data/learning/astrology-lessons.json";
import { saveLessonEdit, resetLessonEdit, hideLesson, deleteCustomLesson } from "../../../actions";

export const dynamic = "force-dynamic";

interface AstroLesson { n: number; body: string; reading: string; practice: string; questions: string[] }

export default async function LessonEditPage({ params }: { params: Promise<{ module: string; lesson: string }> }) {
  const { module: moduleId, lesson: lessonId } = await params;
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const m = await getResolvedModule(moduleId);
  if (!m) notFound();
  const found = findLesson(m, lessonId);
  if (!found) notFound();
  const l = found.lesson;
  const edited = m.editedLessonIds.includes(l.id);
  const astro = l.bodyRef ? (astrologyData as unknown as AstroLesson[]).find((a) => a.n === l.bodyRef) : undefined;
  const bodyDefault = l.body ?? (astro ? `${astro.body}\n\n## Kaynak okuma\n${astro.reading}\n\n## Uygulama\n${astro.practice}` : "");
  const back = `/kendi-egitimlerim/${m.id}/${l.id}`;

  return (
    <div className="agro flex flex-col gap-6">
      <Link href={back} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Derse dön</Link>
      <h1 className="ag-title">Parçayı düzenle</h1>
      <p className="text-sm ag-muted">
        Ders metni basit Markdown destekler: <code className="ag-code">## Başlık</code>, <code className="ag-code">- liste</code>, <code className="ag-code">**kalın**</code>,
        tablo (<code className="ag-code">| a | b |</code>), <code className="ag-code">```kod```</code>, <code className="ag-code">[bağlantı](https://…)</code>.
        {edited && " Bu parça daha önce düzenlenmiş."}
      </p>

      <form action={saveLessonEdit} className="ag-panel flex flex-col gap-4">
        <input type="hidden" name="moduleId" value={m.id} />
        <input type="hidden" name="lessonId" value={l.id} />
        <input type="hidden" name="custom" value={l.custom ? "1" : "0"} />
        <label className="flex flex-col gap-1 text-xs ag-muted">Başlık<input name="title" defaultValue={l.title} required className="ag-input" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Kısa özet<textarea name="summary" defaultValue={l.summary} rows={2} className="ag-textarea" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Süre (dakika)<input name="minutes" type="number" min={5} defaultValue={l.minutes} className="ag-input w-32" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Ders metni (Markdown)<textarea name="body" defaultValue={bodyDefault} rows={22} className="ag-textarea font-mono" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Hedefler (her satır bir madde)<textarea name="objectives" defaultValue={listToLines(l.objectives)} rows={3} className="ag-textarea" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Uygulama görevleri (her satır bir madde)<textarea name="tasks" defaultValue={listToLines(l.tasks)} rows={4} className="ag-textarea" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Kendini sına soruları (her satır bir soru)<textarea name="questions" defaultValue={listToLines(l.questions)} rows={4} className="ag-textarea" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Kaynaklar (her satır: Başlık | URL | not)<textarea name="resources" defaultValue={resourcesToText(l.resources)} rows={5} className="ag-textarea" /></label>
        <label className="flex flex-col gap-1 text-xs ag-muted">Doğrulama ve kaynak notu (Markdown)<textarea name="verification" defaultValue={l.verification ?? ""} rows={4} className="ag-textarea" /></label>
        <div className="flex flex-wrap gap-2"><button className="ag-btn ag-btn-dark">Kaydet</button><Link href={back} className="ag-btn ag-btn-outline">İptal</Link></div>
      </form>

      <div className="flex flex-wrap gap-3">
        {!l.custom && edited && (
          <form action={resetLessonEdit}><input type="hidden" name="moduleId" value={m.id} /><input type="hidden" name="lessonId" value={l.id} />
            <button className="ag-btn ag-btn-soft">Varsayılan metne dön</button></form>
        )}
        {!l.custom && (
          <form action={hideLesson}><input type="hidden" name="moduleId" value={m.id} /><input type="hidden" name="lessonId" value={l.id} />
            <button className="ag-btn ag-btn-soft">Bu parçayı gizle</button></form>
        )}
        {l.custom && (
          <form action={deleteCustomLesson}><input type="hidden" name="moduleId" value={m.id} /><input type="hidden" name="lessonId" value={l.id} />
            <button className="ag-btn ag-btn-outline">Parçayı sil</button></form>
        )}
      </div>
    </div>
  );
}
