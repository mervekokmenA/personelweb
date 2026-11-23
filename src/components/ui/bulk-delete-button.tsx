"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";

/** Onay isteyen toplu silme butonu — hidden alanlar server action'a form verisi olarak gider. */
export function BulkDeleteButton({
  action,
  hidden = {},
  label,
  confirmText,
  disabled = false,
  variant = "danger",
}: {
  action: (formData: FormData) => Promise<void>;
  hidden?: Record<string, string>;
  label: string;
  confirmText: string;
  disabled?: boolean;
  variant?: "danger" | "primary";
}) {
  const [pending, startTransition] = useTransition();
  return (
    <form
      action={(fd) => startTransition(() => action(fd))}
      onSubmit={(e) => {
        if (!window.confirm(confirmText)) e.preventDefault();
      }}
    >
      {Object.entries(hidden).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <button
        type="submit"
        disabled={disabled || pending}
        className={
          variant === "primary"
            ? "ag-btn ag-btn-dark"
            : "flex items-center gap-1.5 rounded-lg border border-red-300 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-40"
        }
      >
        {variant === "danger" && <Trash2 size={13} />} {label}
      </button>
    </form>
  );
}
