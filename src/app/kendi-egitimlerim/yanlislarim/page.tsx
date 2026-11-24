import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { getAllResolvedModules } from "@/lib/learning/resolve";
import { getOpenMistakes } from "@/lib/learning/review";

export const dynamic = "force-dynamic";

export default async function YanlislarimPage() {
  if (!hasDatabaseUrl) return <div className="agro"><DbSetupNotice /></div>;
  const mistakes = await getOpenMistakes(await getAllResolvedModules());
  const groups = new Map<string, typeof mistakes>();
  for (const m of mistakes) groups.set(m.moduleId, [...(groups.get(m.moduleId) ?? []), m]);

  return (
    <div className="agro flex flex-col gap-6">
      <Link href="/kendi-egitimlerim" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Kendi Eğitimlerim</Link>
      <header className="flex flex-col gap-2">
        <h1 className="ag-title">Yanlışlarım</h1>
        <p className="max-w-2xl text-sm ag-muted">
          Konu denemelerinde yanlış yaptığın sorular. Bir soruyu sonradan (denemede ya da burada) doğru yanıtlayınca &quot;çözüldü&quot; sayılır ve listeden çıkar.
        </p>
        {mistakes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <Link href="/kendi-egitimlerim/yanlislarim/coz" className="ag-btn ag-btn-dark"><Play size={14} /> Yanlışlarımı çöz ({Math.min(mistakes.length, 20)} soru)</Link>
          </div>
        )}
      </header>
      {mistakes.length === 0 && <p className="ag-panel text-sm ag-muted">Çözülmemiş yanlışın yok. Konu denemelerinde yanlış yaptığın sorular burada birikir.</p>}
      {[...groups.entries()].map(([moduleId, list]) => (
        <section key={moduleId} className="flex flex-col gap-2">
          <h2 className="flex flex-wrap items-center gap-3 text-base font-medium">
            {list[0].moduleTitle} <span className="text-xs font-normal ag-muted">({list.length})</span>
            <Link href={`/kendi-egitimlerim/yanlislarim/coz?modul=${moduleId}`} className="text-xs font-normal underline ag-muted">Bu modülün yanlışlarını çöz</Link>
          </h2>
          <ul className="flex flex-col gap-2">
            {list.map((m) => (
              <li key={m.unitKey + m.qHash} className="ag-panel flex flex-col gap-2">
                <p className="text-xs ag-muted">{m.unitTitle} · {m.wrongCount} kez yanlış · <Link href={`/kendi-egitimlerim/${m.moduleId}/test/${m.unitId}`} className="underline">teste git</Link></p>
                <p className="font-medium">{m.question.q}</p>
                <p className="text-sm"><span className="ag-muted">Senin cevabın:</span> <span className="text-red-600">{m.question.options[m.lastChosen] ?? "—"}</span></p>
                <p className="text-sm"><span className="ag-muted">Doğru cevap:</span> <span className="text-[var(--ag-green-2)]">{m.question.options[m.question.answer]}</span></p>
                {m.question.explain && <p className="ag-quote-box text-sm">{m.question.explain}</p>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
