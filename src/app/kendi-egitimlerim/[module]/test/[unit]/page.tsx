import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { QuizRunner } from "@/components/learning/quiz-runner";
import { getResolvedModule } from "@/lib/learning/resolve";
import { hashText } from "@/lib/learning/review";

export const dynamic = "force-dynamic";

export default async function QuizPage({ params }: { params: Promise<{ module: string; unit: string }> }) {
  const { module: moduleId, unit: unitId } = await params;
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const m = await getResolvedModule(moduleId);
  if (!m) notFound();
  const unit = m.tracks.flatMap((t) => t.units).find((u) => u.id === unitId);
  if (!unit) notFound();
  const questions = unit.quiz ?? [];
  const base = `/kendi-egitimlerim/${m.id}`;

  return (
    <div className="agro flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2">
        <Link href={base} className="ag-btn ag-btn-outline"><ArrowLeft size={14} /> {m.title}</Link>
        <Link href={`${base}/test/${unit.id}/duzenle`} className="ag-btn ag-btn-soft ml-auto"><Pencil size={14} /> Soruları düzenle</Link>
      </div>
      <header className="flex flex-col gap-2">
        <span className="ag-tag w-fit"><span className="ag-dot" /> Konu denemesi</span>
        <h1 className="ag-title">{unit.title.replace(/^\d+\.\s*/, "")}</h1>
        <p className="text-sm ag-muted">{questions.length} soru · geçme sınırı %70 · yanıtlar kontrol edildikten sonra doğru cevap ve açıklamalar görünür.</p>
      </header>
      {questions.length === 0 ? (
        <p className="ag-panel text-sm ag-muted">Bu program için henüz soru yok. &quot;Soruları düzenle&quot; ile ekleyebilirsin.</p>
      ) : (
        <QuizRunner unitKey={`${m.id}/${unit.id}`} questions={questions} meta={questions.map((q) => ({ unitKey: `${m.id}/${unit.id}`, h: hashText(q.q) }))} />
      )}
    </div>
  );
}
