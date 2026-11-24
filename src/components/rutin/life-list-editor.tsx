"use client";

import { useState, useTransition } from "react";
import { ArrowDown, ArrowUp, Check, Pencil, Plus, Trash2, X } from "lucide-react";
import { addLifeItem, deleteLifeItem, moveLifeItem, switchLifeKind, toggleLifeDone, updateLifeItem } from "@/app/rutinim/actions";
import type { LifeItemView, LifeKind } from "@/lib/life";

const OTHER: Record<LifeKind, { kind: LifeKind; label: string }[]> = {
  routine: [{ kind: "goal", label: "Hedeflere taşı" }, { kind: "dream", label: "Hayallere taşı" }],
  goal: [{ kind: "dream", label: "Hayallere taşı" }, { kind: "routine", label: "Rutine taşı" }],
  dream: [{ kind: "goal", label: "Hedeflere taşı" }, { kind: "routine", label: "Rutine taşı" }],
};

function Row({ item, first, last, canMove }: { item: LifeItemView; first: boolean; last: boolean; canMove: boolean }) {
  const [edit, setEdit] = useState(false);
  const [pending, start] = useTransition();
  const run = (fn: (fd: FormData) => Promise<void>, data: Record<string, string>) =>
    start(async () => {
      const fd = new FormData();
      for (const [k, v] of Object.entries(data)) fd.set(k, v);
      await fn(fd);
    });

  if (edit) {
    return (
      <li className="rounded-xl border border-card-border p-3">
        <form
          action={(fd) => start(async () => { await updateLifeItem(fd); setEdit(false); })}
          className="flex flex-col gap-2"
        >
          <input type="hidden" name="id" value={item.id} />
          <textarea name="text" defaultValue={item.text} required rows={3} className="ag-textarea" aria-label="Madde metni" />
          <input name="note" defaultValue={item.note ?? ""} placeholder="Not (isteğe bağlı)" className="ag-input" aria-label="Not" />
          {item.kind !== "routine" && (
            <label className="flex items-center gap-2 text-xs text-muted">
              Öncelik (1 = en yüksek):
              <input name="priority" type="number" min={1} max={99} defaultValue={item.priority ?? ""} className="ag-input w-20 !py-1" />
            </label>
          )}
          <div className="flex gap-2">
            <button className="ag-btn ag-btn-dark" disabled={pending}><Check size={14} /> Kaydet</button>
            <button type="button" className="ag-btn ag-btn-outline" onClick={() => setEdit(false)}><X size={14} /> Vazgeç</button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li className={`flex flex-col gap-1.5 rounded-xl border border-card-border p-3 ${pending ? "opacity-60" : ""}`}>
      <div className="flex items-start gap-3">
        {item.kind !== "routine" && (
          <button
            type="button"
            aria-pressed={item.done}
            aria-label={item.done ? "Gerçekleşti (geri al)" : "Gerçekleşti olarak işaretle"}
            onClick={() => run(toggleLifeDone, { id: item.id })}
            className={`checkbox-btn mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors ${item.done ? "border-transparent bg-foreground text-background" : "border-muted"}`}
          >
            {item.done ? "✓" : ""}
          </button>
        )}
        <div className="min-w-0 flex-1">
          <p className={`text-sm ${item.done ? "line-through opacity-60" : ""}`}>{item.text}</p>
          {item.note && <p className="mt-1 text-xs text-muted">{item.note}</p>}
        </div>
        {item.priority && <span className="ag-pill shrink-0">{item.priority}. öncelik</span>}
      </div>
      <div className="flex flex-wrap items-center gap-1 pl-8 text-xs">
        {canMove && <button type="button" aria-label="Yukarı taşı" disabled={first} onClick={() => run(moveLifeItem, { id: item.id, dir: "-1" })} className="rounded-md border border-card-border p-1 text-muted hover:text-foreground disabled:opacity-30"><ArrowUp size={13} /></button>}
        {canMove && <button type="button" aria-label="Aşağı taşı" disabled={last} onClick={() => run(moveLifeItem, { id: item.id, dir: "1" })} className="rounded-md border border-card-border p-1 text-muted hover:text-foreground disabled:opacity-30"><ArrowDown size={13} /></button>}
        <button type="button" onClick={() => setEdit(true)} className="inline-flex items-center gap-1 rounded-md border border-card-border px-2 py-1 text-muted hover:text-foreground"><Pencil size={12} /> Düzenle</button>
        {OTHER[item.kind].map((o) => (
          <button key={o.kind} type="button" onClick={() => run(switchLifeKind, { id: item.id, kind: o.kind })} className="rounded-md border border-card-border px-2 py-1 text-muted hover:text-foreground">{o.label}</button>
        ))}
        <button
          type="button"
          aria-label="Sil"
          onClick={() => { if (window.confirm("Bu madde silinsin mi?")) run(deleteLifeItem, { id: item.id }); }}
          className="ml-auto rounded-md p-1 text-muted hover:bg-red-100 hover:text-red-600"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </li>
  );
}

export function LifeListEditor({ kind, items, canMove = true }: { kind: LifeKind; items: LifeItemView[]; canMove?: boolean }) {
  const [pending, start] = useTransition();
  return (
    <div className="flex flex-col gap-3">
      {items.length === 0 ? (
        <p className="text-sm text-muted">Henüz madde yok. Aşağıdan ekle.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((it, i) => <Row key={it.id} item={it} first={i === 0} last={i === items.length - 1} canMove={canMove} />)}
        </ul>
      )}
      <form
        action={(fd) => start(async () => { await addLifeItem(fd); })}
        key={items.length}
        className="flex flex-wrap items-start gap-2"
      >
        <input type="hidden" name="kind" value={kind} />
        <textarea name="text" required rows={2} placeholder="Yeni madde…" aria-label="Yeni madde" className="ag-textarea min-w-[14rem] flex-1" />
        {kind !== "routine" && <input name="priority" type="number" min={1} max={99} placeholder="Öncelik" aria-label="Öncelik" className="ag-input w-24" />}
        <button className="ag-btn ag-btn-dark" disabled={pending}><Plus size={14} /> Ekle</button>
      </form>
    </div>
  );
}
