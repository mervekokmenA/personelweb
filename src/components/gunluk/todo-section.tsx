import { addTodo, deleteTodo, toggleTodo } from "@/app/gunluk/actions";
import { AutoSubmitCheckbox } from "@/components/ui/auto-submit-checkbox";
import { DeleteButton } from "@/components/ui/delete-button";

interface TodoRow {
  id: string;
  text: string;
  done: boolean;
}

export function TodoSection({ date, todos }: { date: string; todos: TodoRow[] }) {
  return (
    <section className="card p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
        Yapılacaklar Listesi
      </h2>
      <div className="flex flex-col gap-2">
        {todos.map((t) => (
          <div key={t.id} className="flex items-center gap-3">
            <AutoSubmitCheckbox action={toggleTodo} hidden={{ id: t.id, date }} checked={t.done} />
            <span className={`flex-1 text-sm ${t.done ? "text-muted line-through" : ""}`}>
              {t.text}
            </span>
            <DeleteButton action={deleteTodo} hidden={{ id: t.id, date }} />
          </div>
        ))}
      </div>
      <form action={addTodo} className="mt-3 flex gap-2">
        <input type="hidden" name="date" value={date} />
        <input
          type="text"
          name="text"
          placeholder="Yeni görev ekle..."
          required
          className="flex-1 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
        />
        <button className="rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium">
          Ekle
        </button>
      </form>
    </section>
  );
}
