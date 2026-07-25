"use client";

import { useTransition, type ReactNode } from "react";

export function AutoSubmitCheckbox({
  action,
  hidden,
  checked,
  className,
  label,
  labelClassName,
}: {
  action: (formData: FormData) => Promise<void>;
  hidden: Record<string, string>;
  checked: boolean;
  className?: string;
  /** Verilirse checkbox'ın yanında, aynı forma bağlı, tıklanınca da checkbox'ı
   * değiştiren bir metin/etiket render edilir (satırın herhangi bir yerine
   * tıklamak işaretlemeye yeter). */
  label?: ReactNode;
  labelClassName?: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(fd) => startTransition(() => action(fd))}
      className={`inline-flex items-start gap-3 ${isPending ? "opacity-50" : ""}`}
    >
      {Object.entries(hidden).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <button
        type="submit"
        disabled={isPending}
        aria-pressed={checked}
        className={`checkbox-btn flex h-5 w-5 shrink-0 items-center justify-center border transition-colors ${
          checked ? "border-transparent bg-foreground text-background" : "border-muted"
        } ${className ?? ""}`}
      >
        {checked ? "✓" : ""}
      </button>
      {label && (
        <button type="submit" disabled={isPending} className={`text-left ${labelClassName ?? ""}`}>
          {label}
        </button>
      )}
    </form>
  );
}
