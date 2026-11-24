"use client";

import { useRef, useState, useTransition } from "react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Eye, EyeOff, GripVertical, LayoutDashboard, X } from "lucide-react";
import { HOME_SECTIONS } from "@/lib/home-sections";
import { resetHomeLayout, saveHomeLayout } from "@/app/ayarlar/home-actions";

const LABEL = new Map(HOME_SECTIONS.map((s) => [s.id, s.label]));

function Row({ id, hidden, onToggle }: { id: string; hidden: boolean; onToggle: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition, zIndex: isDragging ? 10 : undefined }}
      className={`flex items-center gap-3 rounded-lg border border-card-border bg-card px-2 py-2 text-sm ${isDragging ? "shadow-lg" : ""} ${hidden ? "opacity-50" : ""}`}>
      <button type="button" {...attributes} {...listeners} aria-label={`${LABEL.get(id)} bölümünü sürükleyerek taşı`} className="cursor-grab touch-none rounded-md p-1.5 text-muted hover:text-foreground active:cursor-grabbing">
        <GripVertical size={16} />
      </button>
      <span className="flex-1">{LABEL.get(id)}</span>
      <button type="button" onClick={onToggle} aria-pressed={!hidden} aria-label={hidden ? `${LABEL.get(id)} göster` : `${LABEL.get(id)} gizle`} className="rounded-md border border-card-border p-1.5 text-muted hover:text-foreground">
        {hidden ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </li>
  );
}

/** Ana sayfa bölümlerinin sırasını ve görünürlüğünü bir açılır pencerede düzenler; her değişiklik kaydedilir. */
export function HomeLayoutDialog({ initialOrder, initialHidden, enabled }: { initialOrder: string[]; initialHidden: string[]; enabled: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [order, setOrder] = useState(initialOrder);
  const [hidden, setHidden] = useState(initialHidden);
  const [pending, start] = useTransition();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  const commit = (o: string[], h: string[]) => { setOrder(o); setHidden(h); start(() => saveHomeLayout(o, h)); };
  const onDragEnd = (e: DragEndEvent) => {
    if (!e.over || e.active.id === e.over.id) return;
    const from = order.indexOf(String(e.active.id)), to = order.indexOf(String(e.over.id));
    if (from >= 0 && to >= 0) commit(arrayMove(order, from, to), hidden);
  };

  return (
    <>
      <button type="button" disabled={!enabled} onClick={() => ref.current?.showModal()} className="flex w-fit items-center gap-1.5 rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium disabled:opacity-50">
        <LayoutDashboard size={15} /> Ana sayfa düzenini düzenle
      </button>
      <dialog ref={ref} onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }} className="m-auto w-[min(32rem,92vw)] rounded-2xl border border-card-border bg-card p-0 text-foreground backdrop:bg-black/40">
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">Ana sayfa düzeni</h3>
              <p className="text-xs text-muted">Bölümleri sürükleyerek sırala, göz simgesiyle gizle/göster. &quot;Kitap okuma borcu&quot; ile &quot;Rutinim&quot; yan yana durur; ayrı yere koyarsan her biri tam genişlikte olur.</p>
            </div>
            <button type="button" onClick={() => ref.current?.close()} aria-label="Kapat" className="rounded-md p-1.5 text-muted hover:text-foreground"><X size={18} /></button>
          </div>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={order} strategy={verticalListSortingStrategy}>
              <ol className="flex flex-col gap-1.5" aria-label="Ana sayfa bölümleri">
                {order.map((id) => (
                  <Row key={id} id={id} hidden={hidden.includes(id)} onToggle={() => commit(order, hidden.includes(id) ? hidden.filter((x) => x !== id) : [...hidden, id])} />
                ))}
              </ol>
            </SortableContext>
          </DndContext>
          <div className="flex items-center justify-between text-xs text-muted">
            <button type="button" className="underline" onClick={() => start(async () => { await resetHomeLayout(); setOrder(HOME_SECTIONS.map((s) => s.id)); setHidden([]); })}>Varsayılana dön</button>
            <span aria-live="polite">{pending ? "Kaydediliyor…" : "Değişiklikler otomatik kaydedilir"}</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
