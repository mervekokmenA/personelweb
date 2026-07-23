"use client";

import { useTransition } from "react";

const STATUS_META: Record<string, { label: string; className: string }> = {
  NOT_STARTED: { label: "Yapılmadı", className: "bg-background text-muted border border-card-border" },
  IN_PROGRESS: { label: "Yapılıyor", className: "bg-accent-yellow text-foreground" },
  DONE: { label: "Yapıldı", className: "bg-accent-mint text-foreground" },
};

export function StatusBadge({
  id,
  status,
  action,
}: {
  id: string;
  status: string;
  action: (formData: FormData) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const meta = STATUS_META[status] ?? STATUS_META.NOT_STARTED;

  return (
    <form
      action={(fd) => startTransition(() => action(fd))}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        disabled={isPending}
        className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-opacity ${meta.className} ${isPending ? "opacity-50" : ""}`}
        title="Durumu değiştirmek için tıkla"
      >
        {meta.label}
      </button>
    </form>
  );
}
