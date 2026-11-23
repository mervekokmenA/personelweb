"use client";

import { useTransition } from "react";

const STATUS_META: Record<string, { label: string; className: string }> = {
  NOT_STARTED: { label: "Yapılmadı", className: "ag-pill" },
  IN_PROGRESS: { label: "Yapılıyor", className: "ag-pill ag-pill-lime" },
  DONE: { label: "Yapıldı", className: "ag-pill ag-pill-green" },
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
    <form action={(fd) => startTransition(() => action(fd))}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        disabled={isPending}
        className={`${meta.className} cursor-pointer ${isPending ? "opacity-50" : ""}`}
        title="Durumu değiştirmek için tıkla"
      >
        <span className="ag-dot" />
        {meta.label}
      </button>
    </form>
  );
}
