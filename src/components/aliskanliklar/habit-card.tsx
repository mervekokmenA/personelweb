import { toggleHabitDay, deleteHabit, toggleHabitActive } from "@/app/aliskanliklar/actions";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { DeleteButton } from "@/components/ui/delete-button";
import { dateKey, dayLabel } from "@/lib/habit-grid";

interface HabitCardProps {
  id: string;
  title: string;
  frequency: "WEEKLY" | "MONTHLY";
  indefinite: boolean;
  totalPeriods: number | null;
  active: boolean;
  dates: Date[];
  completions: Map<string, boolean>;
  periodLabel: string;
}

export function HabitCard({
  id,
  title,
  frequency,
  indefinite,
  totalPeriods,
  active,
  dates,
  completions,
  periodLabel,
}: HabitCardProps) {
  const doneCount = dates.filter((d) => completions.get(dateKey(d))).length;

  return (
    <div className="card p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted border border-card-border">
            {frequency === "WEEKLY" ? "Haftalık" : "Aylık"}
          </span>
          <span className="text-xs text-muted">
            {indefinite ? "Süresiz" : `${totalPeriods} ${frequency === "WEEKLY" ? "hafta" : "ay"} programı`}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted">
            {doneCount}/{dates.length} · {periodLabel}
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
        {dates.map((d) => {
          const key = dateKey(d);
          return (
            <div key={key} className="flex flex-col items-center gap-1">
              <span className="text-[10px] text-muted">{dayLabel(d)}</span>
              <AutoSubmitCheckbox
                action={toggleHabitDay}
                hidden={{ habitId: id, date: key }}
                checked={!!completions.get(key)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
