import { Target } from "lucide-react";
import { DonutChart } from "@/components/dashboard/donut-chart";
import { logGeneralTaskAmount, completeGeneralTask } from "@/app/gunluk/actions";

const UNIT_LABEL: Record<"HOURS" | "PAGES", string> = { HOURS: "saat", PAGES: "sayfa" };

export interface GeneralTaskRow {
  id: string;
  title: string;
  unit: "HOURS" | "PAGES";
  targetAmount: number;
  totalAmount: number;
  todayAmount: number;
  percent: number;
}

export function GeneralTaskSection({ date, tasks }: { date: string; tasks: GeneralTaskRow[] }) {
  if (tasks.length === 0) return null;

  return (
    <section className="card p-5">
      <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted">
        <Target size={16} /> Genel Görevler
      </h2>
      <div className="flex flex-col gap-4">
        {tasks.map((t) => (
          <div key={t.id} className="flex flex-wrap items-center gap-3 rounded-lg bg-background p-3">
            <DonutChart percent={t.percent} color="var(--accent-mint)" size={52} strokeWidth={6} />
            <div className="min-w-[10rem] flex-1">
              <p className="text-sm font-medium">{t.title}</p>
              <p className="text-xs text-muted">
                {t.totalAmount} / {t.targetAmount} {UNIT_LABEL[t.unit]}
              </p>
            </div>
            <form action={logGeneralTaskAmount} className="flex items-end gap-2">
              <input type="hidden" name="taskId" value={t.id} />
              <input type="hidden" name="date" value={date} />
              <label className="flex flex-col gap-1 text-xs text-muted">
                Bugün ({UNIT_LABEL[t.unit]})
                <input
                  type="number"
                  step={t.unit === "HOURS" ? 0.25 : 1}
                  min={0}
                  name="amount"
                  defaultValue={t.todayAmount || undefined}
                  className="w-24 rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm"
                />
              </label>
              <button className="rounded-lg bg-accent-mint px-3 py-1.5 text-xs font-medium">
                Kaydet
              </button>
            </form>
            <form action={completeGeneralTask}>
              <input type="hidden" name="taskId" value={t.id} />
              <button className="rounded-lg border border-card-border px-3 py-1.5 text-xs text-muted hover:text-foreground">
                Tamamla
              </button>
            </form>
          </div>
        ))}
      </div>
    </section>
  );
}
