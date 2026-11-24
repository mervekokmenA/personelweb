import Link from "next/link";
import { Languages, ArrowRight, Play } from "lucide-react";
import { LANGS } from "@/lib/lang/cards";
import type { LangStat } from "@/lib/lang/db";

/** Ana sayfa: Yabancı Dil kartları için günlük özet */
export function LangWidget({ stats, reviewedToday }: { stats: LangStat[]; reviewedToday: number }) {
  const totalDue = stats.reduce((s, x) => s + x.due, 0);
  const totalNew = stats.reduce((s, x) => s + x.newLeftToday, 0);
  return (
    <section className="card flex flex-col gap-3 p-4" aria-label="Yabancı dil kartları">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <Languages size={16} /> Yabancı Dil
        </h2>
        <Link href="/dil" className="flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground">
          Tümü <ArrowRight size={13} />
        </Link>
      </div>
      <p className="text-xs text-muted">
        Bugün <strong className="text-foreground">{reviewedToday}</strong> kart çalıştın · bekleyen <strong className="text-foreground">{totalDue}</strong> tekrar + <strong className="text-foreground">{totalNew}</strong> yeni
      </p>
      <ul className="grid gap-2 sm:grid-cols-3">
        {LANGS.map((l, i) => {
          const s = stats[i];
          const todo = s.due + s.newLeftToday;
          return (
            <li key={l.id}>
              <Link
                href={todo > 0 ? `/dil/${l.id}/calis` : `/dil/${l.id}`}
                className="flex items-center justify-between gap-2 rounded-lg border border-card-border px-3 py-2 text-sm hover:bg-black/[0.03]"
              >
                <span>
                  <span className="font-medium">{l.name}</span>
                  <span className="block text-xs text-muted">{s.due} tekrar · {s.newLeftToday} yeni</span>
                </span>
                {todo > 0 ? <Play size={14} aria-label="Çalış" /> : <span className="text-xs text-muted">✓</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
