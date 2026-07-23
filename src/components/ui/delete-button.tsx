"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";

export function DeleteButton({
  action,
  hidden,
  label = "Sil",
}: {
  action: (formData: FormData) => Promise<void>;
  hidden: Record<string, string>;
  label?: string;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <form action={(fd) => startTransition(() => action(fd))}>
      {Object.entries(hidden).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <button
        type="submit"
        disabled={isPending}
        aria-label={label}
        className="rounded-md p-1.5 text-muted hover:bg-red-100 hover:text-red-600 disabled:opacity-40"
      >
        <Trash2 size={15} />
      </button>
    </form>
  );
}
