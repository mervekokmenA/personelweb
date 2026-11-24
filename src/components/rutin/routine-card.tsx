import Link from "next/link";
import { ListChecks, ArrowRight } from "lucide-react";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { toggleRoutineCheck } from "@/app/rutinim/actions";

/** Ana sayfa: günlük rutin kartı (kitap okuma borcunun yanında). */
export function RoutineCard({ items }: { items: { id: string; text: string; done: boolean }[] }) {
  const done = items.filter((i) => i.done).length;
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
        <>
          <ul className="flex flex-col gap-2.5">
            {items.map((i) => (
              <li key={i.id} className="text-sm">
                <AutoSubmitCheckbox
                  action={toggleRoutineCheck}
                  hidden={{ id: i.id }}
                  checked={i.done}
                  label={<span className={i.done ? "line-through opacity-60" : ""}>{i.text}</span>}
                />
              </li>
            ))}
          </ul>
          <p className="mt-auto text-xs text-muted">Bugün {done}/{items.length} tamamlandı.</p>
        </>
      )}
      <Link href="/rutinim" className="text-xs text-muted underline">Hedeflerim ve hayallerim</Link>
    </section>
  );
}
