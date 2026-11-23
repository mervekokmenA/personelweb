import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getResolvedModule } from "@/lib/learning/resolve";
import { quizToText } from "@/lib/learning/formats";
import { saveQuizEdit, resetQuizEdit } from "../../../../actions";

export const dynamic = "force-dynamic";

export default async function QuizEditPage({ params }: { params: Promise<{ module: string; unit: string }> }) {
  const { module: moduleId, unit: unitId } = await params;
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const m = await getResolvedModule(moduleId);
  if (!m) notFound();
  const unit = m.tracks.flatMap((t) => t.units).find((u) => u.id === unitId);
  if (!unit) notFound();
  const back = `/kendi-egitimlerim/${m.id}/test/${unit.id}`;
  return (
    <div className="agro flex flex-col gap-6">
      <Link href={back} className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Teste dön</Link>
      <h1 className="ag-title">Test sorularını düzenle</h1>
      <p className="text-sm ag-muted">
        Biçim: her soru boş satırla ayrılır. <code className="ag-code">S:</code> soru, <code className="ag-code">A) … B) … C) … D) …</code> seçenekler,
        <code className="ag-code"> Cevap: B</code>, isteğe bağlı <code className="ag-code">Açıklama: …</code>. Biçime uymayan bloklar atlanır.
      </p>
      <form action={saveQuizEdit} className="ag-panel flex flex-col gap-3">
        <input type="hidden" name="moduleId" value={m.id} />
        <input type="hidden" name="unitId" value={unit.id} />
        <textarea name="quiz" defaultValue={quizToText(unit.quiz)} rows={28} className="ag-textarea font-mono" />
        <div className="flex gap-2"><button className="ag-btn ag-btn-dark">Kaydet</button><Link href={back} className="ag-btn ag-btn-outline">İptal</Link></div>
      </form>
      <form action={resetQuizEdit}><input type="hidden" name="moduleId" value={m.id} /><input type="hidden" name="unitId" value={unit.id} />
        <button className="ag-btn ag-btn-soft">Varsayılan sorulara dön</button></form>
    </div>
  );
}
