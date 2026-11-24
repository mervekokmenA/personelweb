import { toggleHabitDay, deleteHabit, toggleHabitActive, resetHabit } from "@/app/aliskanliklar/actions";
import { ConfirmForm } from "@/components/ui/confirm-form";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { DeleteButton } from "@/components/ui/delete-button";
import { dateKey, formatHabitFrequency, type HabitFrequency, type HabitPeriod, type HabitStreaks } from "@/lib/habit-grid";
import Link from "next/link";
import { Flame, History, RotateCcw } from "lucide-react";

const PERIOD_UNIT: Record<HabitFrequency, string> = {
  DAILY: "gün",
  WEEKLY: "hafta",
  MONTHLY: "ay",
  CUSTOM: "tekrar",
};

interface HabitCardProps {
  id: string;
  title: string;
  frequency: HabitFrequency;
  customIntervalDays: number | null;
  indefinite: boolean;
  totalPeriods: number | null;
  active: boolean;
  periods: HabitPeriod[];
  completions: Map<string, boolean>;
  streaks: HabitStreaks;
  hiddenBefore?: number;
}

export function HabitCard({
  id,
  title,
  frequency,
  customIntervalDays,
  indefinite,
  totalPeriods,
  active,
  periods,
  completions,
  streaks,
  hiddenBefore = 0,
}: HabitCardProps) {
  const past = periods.filter((p) => !p.future);
  const doneCount = past.filter((p) => completions.get(dateKey(p.start))).length;

  return (
    <div className="card p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
            {formatHabitFrequency(frequency, customIntervalDays)}
          </span>
          <span className="text-xs text-muted">
            {indefinite ? "Süresiz" : `${totalPeriods} ${PERIOD_UNIT[frequency]} programı`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {streaks.current > 0 && (
            <span
              className="flex items-center gap-1 rounded-full bg-accent-yellow/30 px-2 py-0.5 text-xs font-medium"
              title={`${streaks.current} ${PERIOD_UNIT[frequency]} üst üste — bu penceredeki en uzun seri: ${streaks.longest}`}
            >
              <Flame size={12} className="text-accent-yellow" /> {streaks.current}
            </span>
          )}
          <span className="text-xs text-muted">
            {doneCount}/{past.length}
          </span>
          <Link href={`/aliskanliklar/${id}`} className="flex items-center gap-1 rounded-lg border border-card-border px-2 py-1 text-xs text-muted hover:text-foreground">
            <History size={12} /> Tüm geçmiş
          </Link>
          <form action={toggleHabitActive}>
            <input type="hidden" name="id" value={id} />
            <button className="rounded-lg border border-card-border px-2 py-1 text-xs text-muted">
              {active ? "Pasifleştir" : "Aktifleştir"}
            </button>
          </form>
          <ConfirmForm
            action={resetHabit}
            hidden={{ id }}
            message={`"${title}" için tüm işaretlemeler silinecek ve tarihler bugünden yeniden başlayacak. Emin misin?`}
          >
            <button className="rounded-md p-1.5 text-muted hover:bg-black/5 hover:text-foreground" aria-label="Sıfırla" title="Sıfırla: işaretlemeleri sil, tarihleri bugünden başlat">
              <RotateCcw size={15} />
            </button>
          </ConfirmForm>
          <DeleteButton action={deleteHabit} hidden={{ id }} />
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-1.5">
        {hiddenBefore > 0 && (
          <Link href={`/aliskanliklar/${id}`} className="mb-0.5 self-end rounded-md border border-dashed border-card-border px-2 py-1 text-[11px] text-muted hover:text-foreground" title="Daha eski tekrarları gör">
            +{hiddenBefore} önceki
          </Link>
        )}
        {periods.map((p) => {
          const key = dateKey(p.start);
          return (
            <div key={key} className={`flex flex-col items-center gap-1 ${p.future ? "opacity-50" : ""}`} title={`${p.title}${p.future ? " (yaklaşan)" : p.current ? " (şu an)" : ""}`}>
              <span className={`text-[10px] ${p.current ? "font-semibold text-foreground underline" : "text-muted"}`}>{p.label}</span>
              <AutoSubmitCheckbox
                action={toggleHabitDay}
                hidden={{ habitId: id, date: key }}
                checked={!!completions.get(key)}
              />
            </div>
          );
        })}
        {periods.length === 0 && (
          <p className="text-sm text-muted">Henüz gösterilecek tekrar yok.</p>
        )}
      </div>
    </div>
  );
}
