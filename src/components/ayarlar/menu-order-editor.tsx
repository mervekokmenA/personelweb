"use client";

import { useState, useTransition } from "react";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, ArrowUp, ArrowDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav-items";
import { saveNavOrder, resetNavOrder } from "@/app/ayarlar/menu-actions";

const BY_HREF = new Map(NAV_ITEMS.map((i) => [i.href, i]));

function Row({ href, index, last, onMove, disabled }: { href: string; index: number; last: boolean; onMove: (from: number, to: number) => void; disabled: boolean }) {
  const item = BY_HREF.get(href)!;
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: href });
  const Icon = item.icon;
  return (
    <li
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition, zIndex: isDragging ? 10 : undefined }}
      className={`flex items-center gap-3 rounded-lg border border-card-border bg-card px-2 py-1.5 text-sm ${isDragging ? "shadow-lg opacity-90" : ""}`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        disabled={disabled}
        aria-label={`${item.label} öğesini sürükleyerek taşı`}
        className="cursor-grab touch-none rounded-md p-1.5 text-muted hover:text-foreground active:cursor-grabbing"
      >
        <GripVertical size={16} />
      </button>
      <Icon size={16} className="text-muted" />
      <span className="flex-1">{item.label}</span>
      <button type="button" disabled={disabled || index === 0} onClick={() => onMove(index, index - 1)} aria-label={`${item.label} yukarı taşı`} className="rounded-md border border-card-border p-1.5 text-muted hover:text-foreground disabled:opacity-30">
        <ArrowUp size={14} />
      </button>
      <button type="button" disabled={disabled || last} onClick={() => onMove(index, index + 1)} aria-label={`${item.label} aşağı taşı`} className="rounded-md border border-card-border p-1.5 text-muted hover:text-foreground disabled:opacity-30">
        <ArrowDown size={14} />
      </button>
    </li>
  );
}

/** Menü sırasını sürükle-bırak (dokunmatik ve klavye destekli) ya da oklarla değiştirir; her değişiklik kaydedilir. */
export function MenuOrderEditor({ initial, enabled }: { initial: string[]; enabled: boolean }) {
  const [order, setOrder] = useState(initial);
  const [pending, startTransition] = useTransition();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  function commit(next: string[]) {
    setOrder(next);
    startTransition(() => saveNavOrder(next));
  }
  function move(from: number, to: number) {
    commit(arrayMove(order, from, to));
  }
  function onDragEnd(e: DragEndEvent) {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const from = order.indexOf(String(active.id));
    const to = order.indexOf(String(over.id));
    if (from >= 0 && to >= 0) move(from, to);
  }

  return (
    <div className="flex flex-col gap-3">
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={order} strategy={verticalListSortingStrategy}>
          <ol className="flex flex-col gap-1.5" aria-label="Menü sırası">
            {order.map((href, i) => (
              <Row key={href} href={href} index={i} last={i === order.length - 1} onMove={move} disabled={!enabled} />
            ))}
          </ol>
        </SortableContext>
      </DndContext>
      <div className="flex items-center gap-3 text-xs text-muted">
        <button
          type="button"
          disabled={!enabled}
          onClick={() => startTransition(async () => { await resetNavOrder(); setOrder(NAV_ITEMS.map((i) => i.href)); })}
          className="underline disabled:opacity-40"
        >
          Varsayılan sıraya dön
        </button>
        <span aria-live="polite">{pending ? "Kaydediliyor…" : ""}</span>
      </div>
    </div>
  );
}
