"use client";

import { Copy } from "lucide-react";
import { useTransition } from "react";

export function CopyProductButton({
  action,
  id,
  label,
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
  label?: string;
}) {
  const [pending, startTransition] = useTransition();
  return (
    <form action={(fd) => startTransition(() => action(fd))}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        disabled={pending}
        aria-label="Kopyala"
        title="Ürünü kalemleriyle birlikte kopyala"
        className={
          label
            ? "flex items-center gap-1.5 rounded-lg border border-card-border px-3 py-1.5 text-xs font-medium hover:bg-background disabled:opacity-40"
            : "rounded-md p-1.5 text-muted hover:bg-background hover:text-foreground disabled:opacity-40"
        }
      >
        <Copy size={15} /> {label}
      </button>
    </form>
  );
}
