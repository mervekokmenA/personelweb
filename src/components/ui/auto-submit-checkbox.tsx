"use client";

import { useRef, useTransition } from "react";

export function AutoSubmitCheckbox({
  action,
  hidden,
  checked,
  className,
}: {
  action: (formData: FormData) => Promise<void>;
  hidden: Record<string, string>;
  checked: boolean;
  className?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      ref={formRef}
      action={(fd) => startTransition(() => action(fd))}
      className="inline-flex"
    >
      {Object.entries(hidden).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <button
        type="submit"
        disabled={isPending}
        aria-pressed={checked}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
          checked ? "border-transparent bg-foreground text-background" : "border-muted"
        } ${isPending ? "opacity-50" : ""} ${className ?? ""}`}
      >
        {checked ? "✓" : ""}
      </button>
    </form>
  );
}
