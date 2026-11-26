import Link from "next/link";
import { ListChecks, ArrowRight } from "lucide-react";

/** Ana sayfa: günlük rutin kartı (kitap okuma borcunun yanında). */
export function RoutineCard({ items }: { items: { id: string; text: string }[] }) {
  return (
    <section className="card flex h-full flex-col gap-3 p-5" aria-label="Rutinim">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
          <ListChecks size={16} /> Rutinim
        </h2>
        <Link href="/rutinim" className="flex items-center gap-1 text-xs font-medium text-muted hover:text-foreground">
          Düzenle <ArrowRight size={13} />
        </Link>
      </div>
      {items.length === 0 ? (
        <p className="text-sm text-muted">Henüz rutin maddesi yok. &quot;Düzenle&quot; ile ekleyebilirsin.</p>
      ) : (
        <ul className="flex flex-col gap-2.5">
          {items.map((i) => (
            <li key={i.id} className="flex gap-2 text-sm">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-lilac" />
              <span>{i.text}</span>
            </li>
          ))}
        </ul>
      )}
      <Link href="/rutinim" className="text-xs text-muted underline">Hedeflerim ve hayallerim</Link>
    </section>
  );
}
