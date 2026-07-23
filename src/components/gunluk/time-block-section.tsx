import { addTimeBlock, deleteTimeBlock, toggleTimeBlock } from "@/app/gunluk/actions";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { DeleteButton } from "@/components/ui/delete-button";

interface TimeBlockRow {
  id: string;
  startTime: string;
  endTime: string;
  activity: string;
  category: string | null;
  done: boolean;
}

export function TimeBlockSection({ date, blocks }: { date: string; blocks: TimeBlockRow[] }) {
  return (
    <section className="card p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
        Günlük Saat Planı
      </h2>
      <div className="flex flex-col divide-y divide-card-border">
        {blocks.length === 0 && (
          <p className="py-3 text-sm text-muted">Bugün için henüz zaman bloğu eklenmedi.</p>
        )}
        {blocks.map((b) => (
          <div key={b.id} className="flex items-center gap-3 py-2.5">
            <AutoSubmitCheckbox
              action={toggleTimeBlock}
              hidden={{ id: b.id, date }}
              checked={b.done}
            />
            <span className="w-24 shrink-0 text-xs font-medium text-muted">
              {b.startTime}
              {b.endTime ? `–${b.endTime}` : ""}
            </span>
            <span className={`flex-1 text-sm ${b.done ? "text-muted line-through" : ""}`}>
              {b.activity}
              {b.category && <span className="ml-2 text-xs text-muted">({b.category})</span>}
            </span>
            <DeleteButton action={deleteTimeBlock} hidden={{ id: b.id, date }} />
          </div>
        ))}
      </div>

      <form action={addTimeBlock} className="mt-4 flex flex-wrap gap-2">
        <input type="hidden" name="date" value={date} />
        <input
          type="time"
          name="startTime"
          required
          className="w-24 rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
        />
        <input
          type="time"
          name="endTime"
          className="w-24 rounded-lg border border-card-border bg-background px-2 py-1.5 text-sm"
        />
        <input
          type="text"
          name="activity"
          placeholder="Etkinlik (örn. Kitap Okuma)"
          required
          className="min-w-[10rem] flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
        />
        <input
          type="text"
          name="category"
          placeholder="Kategori (opsiyonel)"
          className="w-36 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
        />
        <button className="rounded-lg bg-accent-mint px-4 py-1.5 text-sm font-medium">
          Ekle
        </button>
      </form>
    </section>
  );
}
