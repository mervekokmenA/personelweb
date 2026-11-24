import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { QuizRunner } from "@/components/learning/quiz-runner";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getOpenMistakes } from "@/lib/learning/review";
import { getModule } from "@/lib/learning";

export const dynamic = "force-dynamic";

export default async function CozPage({ searchParams }: { searchParams: Promise<{ modul?: string }> }) {
  const { modul } = await searchParams;
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const filter = modul && getModule(modul) ? modul : undefined;
  const all = await getOpenMistakes(await getAllResolvedModules());
  const list = (filter ? all.filter((m) => m.moduleId === filter) : all).slice(0, 20);

  return (
    <div className="agro flex flex-col gap-6">
      <Link href="/kendi-egitimlerim/yanlislarim" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Yanlışlarım</Link>
      <header className="flex flex-col gap-2">
        <span className="ag-tag w-fit"><span className="ag-dot" /> Yanlış tekrarı</span>
        <h1 className="ag-title">Yanlışlarımı çöz</h1>
        <p className="text-sm ag-muted">{list.length} soru · doğru bildiklerin &quot;çözüldü&quot; sayılır; puan geçmişine eklenmez.</p>
      </header>
      {list.length === 0 ? (
        <p className="ag-panel text-sm ag-muted">Çözülecek yanlış kalmadı. 🎉</p>
      ) : (
        <QuizRunner
          review
          unitKey="yanlislar/tekrar"
          questions={list.map((m) => m.question)}
          meta={list.map((m) => ({ unitKey: m.unitKey, h: m.qHash, label: `${m.moduleTitle} · ${m.unitTitle}` }))}
        />
      )}
    </div>
  );
}
