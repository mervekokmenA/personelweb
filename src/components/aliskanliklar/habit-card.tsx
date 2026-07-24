import { toggleHabitDay, deleteHabit, toggleHabitActive } from "@/app/aliskanliklar/actions";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { DeleteButton } from "@/components/ui/delete-button";
import { dateKey, type HabitFrequency, type HabitPeriod } from "@/lib/habit-grid";

const FREQUENCY_LABEL: Record<HabitFrequency, string> = {
  DAILY: "Günlük",
  WEEKLY: "Haftalık (7 günde 1)",
  MONTHLY: "Aylık",
};

const PERIOD_UNIT: Record<HabitFrequency, string> = {
  DAILY: "gün",
  WEEKLY: "hafta",
  MONTHLY: "ay",
};

interface HabitCardProps {
  id: string;
  title: string;
  frequency: HabitFrequency;
  indefinite: boolean;
  totalPeriods: number | null;
  active: boolean;
  periods: HabitPeriod[];
  completions: Map<string, boolean>;
}

export function HabitCard({
  id,
  title,
  frequency,
  indefinite,
  totalPeriods,
  active,
  periods,
  completions,
}: HabitCardProps) {
  const doneCount = periods.filter((p) => completions.get(dateKey(p.start))).length;

  return (
    <div className="card p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
            {FREQUENCY_LABEL[frequency]}
          </span>
          <span className="text-xs text-muted">
            {indefinite ? "Süresiz" : `${totalPeriods} ${PERIOD_UNIT[frequency]} programı`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">
            {doneCount}/{periods.length}
          </span>
          <form action={toggleHabitActive}>
            <input type="hidden" name="id" value={id} />
            <button className="rounded-lg border border-card-border px-2 py-1 text-xs text-muted">
              {active ? "Pasifleştir" : "Aktifleştir"}
            </button>
          </form>
          <DeleteButton action={deleteHabit} hidden={{ id }} />
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {periods.map((p) => {
          const key = dateKey(p.start);
          return (
            <div key={key} className="flex flex-col items-center gap-1" title={p.title}>
              <span className="text-[10px] text-muted">{p.label}</span>
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
