import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { hasDatabaseUrl } from "@/lib/prisma";
import { DbSetupNotice } from "@/components/ui/db-setup-notice";
import { LifeListEditor } from "@/components/rutin/life-list-editor";
import { getLifeItems, LIFE_KINDS } from "@/lib/life";

export const dynamic = "force-dynamic";

export default async function RutinimPage() {
  if (!hasDatabaseUrl) return <div className="flex flex-col gap-6"><h1 className="text-2xl font-semibold">Rutinim</h1><DbSetupNotice /></div>;
  const all = await getLifeItems();

  return (
    <div className="agro flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <Link href="/" className="ag-btn ag-btn-outline w-fit"><ArrowLeft size={14} /> Ana sayfa</Link>
        <h1 className="ag-title">Rutinim, hedeflerim ve hayallerim</h1>
        <p className="text-sm ag-muted">Hedef ve hayal maddeleri <strong>sıra numarasına</strong> göre dizilir. Numarayı satırdaki kutudan değiştirebilirsin; aynı numarayı birden fazla maddeye verebilirsin (numarasızlar en sonda).</p>
      </header>

      {LIFE_KINDS.map(({ kind, title, hint }) => {
        let items = all.filter((i) => i.kind === kind);
        if (kind !== "routine") items = [...items].sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999) || a.order - b.order);
        return (
          <section key={kind} id={kind} className="ag-panel flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-medium">{title} <span className="text-xs font-normal ag-muted">({items.length})</span></h2>
              <p className="text-xs ag-muted">{hint}</p>
              {kind === "dream" && <p className="text-xs ag-muted">Başlangıç listesi 14.11.2026 tarihli defter notundan (2026–2028) aktarıldı; sıra numaraları defterde daire içine aldıkların.</p>}
            </div>
            <LifeListEditor kind={kind} items={items} canMove={kind === "routine"} />
          </section>
        );
      })}
    </div>
  );
}
