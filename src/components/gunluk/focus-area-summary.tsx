import Link from "next/link";
import { Settings2 } from "lucide-react";

interface FocusAreaRow {
  id: string;
  name: string;
  items: string[];
  color: string;
}

export function FocusAreaSummary({ areas }: { areas: FocusAreaRow[] }) {
  return (
    <section className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Çalışmalar - Hobiler
        </h2>
        <Link
          href="/gunluk/alanlar"
          className="flex items-center gap-1 text-xs text-muted hover:text-foreground"
        >
          <Settings2 size={13} /> Düzenle
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {areas.length === 0 && (
          <p className="text-sm text-muted">
            Henüz odak alanı yok.{" "}
            <Link href="/gunluk/alanlar" className="underline">
              Ekleyin
            </Link>
            .
          </p>
        )}
        {areas.map((a) => (
          <div key={a.id} className="rounded-lg px-3 py-2" style={{ background: a.color + "40" }}>
            <span className="text-xs font-semibold uppercase">{a.name}</span>
            <p className="text-sm">{a.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
