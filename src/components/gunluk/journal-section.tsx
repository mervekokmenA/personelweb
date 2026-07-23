import { addJournalNote, deleteJournalNote } from "@/app/gunluk/actions";
import { DeleteButton } from "@/components/ui/delete-button";

interface NoteRow {
  id: string;
  text: string;
}

export function JournalSection({ date, notes }: { date: string; notes: NoteRow[] }) {
  return (
    <section className="card p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
        Düşünce / Not Günlüğü
      </h2>
      <div className="flex flex-col gap-2">
        {notes.map((n) => (
          <div key={n.id} className="flex items-start justify-between gap-2 rounded-lg bg-background p-2.5">
            <p className="text-sm whitespace-pre-wrap">{n.text}</p>
            <DeleteButton action={deleteJournalNote} hidden={{ id: n.id, date }} />
          </div>
        ))}
      </div>
      <form action={addJournalNote} className="mt-3 flex gap-2">
        <input type="hidden" name="date" value={date} />
        <textarea
          name="text"
          placeholder="Bugünkü düşüncen, fikrin veya notun..."
          required
          rows={2}
          className="flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
        />
        <button className="self-end rounded-lg bg-accent-lilac px-4 py-1.5 text-sm font-medium">
          Kaydet
        </button>
      </form>
    </section>
  );
}
