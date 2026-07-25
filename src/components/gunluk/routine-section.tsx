import Link from "next/link";
import { toggleRoutineCompletion } from "@/app/gunluk/actions";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { Settings2 } from "lucide-react";

interface RoutineRow {
  id: string;
  title: string;
  description: string | null;
  done: boolean;
  trackCompletion: boolean;
  intervalDays: number;
}

export function RoutineSection({ date, routines }: { date: string; routines: RoutineRow[] }) {
  return (
    <section className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
          Günlük Rutinler
        </h2>
        <Link
          href="/parametreler#rutinler"
          className="flex items-center gap-1 text-xs text-muted hover:text-foreground"
        >
          <Settings2 size={13} /> Düzenle
        </Link>
      </div>
      <div className="flex flex-col gap-2.5">
        {routines.length === 0 && (
          <p className="text-sm text-muted">
            Henüz rutin tanımlanmadı.{" "}
            <Link href="/parametreler#rutinler" className="underline">
              Parametre ekranından ekleyin
            </Link>
            .
          </p>
        )}
        {routines.map((r, i) => {
          const label = (
            <span className={`text-sm ${r.trackCompletion && r.done ? "text-muted line-through" : ""}`}>
              {i + 1}. {r.title}
              {r.intervalDays > 1 && (
                <span className="ml-1.5 rounded-full bg-background px-1.5 py-0.5 text-[10px] text-muted border border-card-border">
                  {r.intervalDays} günde 1
                </span>
              )}
              {r.description && (
                <span className="ml-1.5 text-xs text-muted">— {r.description}</span>
              )}
            </span>
          );
          return r.trackCompletion ? (
            <AutoSubmitCheckbox
              key={r.id}
              action={toggleRoutineCompletion}
              hidden={{ templateId: r.id, date }}
              checked={r.done}
              label={label}
            />
          ) : (
            <div key={r.id} className="flex items-start gap-3">
              <span className="w-5 shrink-0" />
              {label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
