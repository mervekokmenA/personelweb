"use client";

import { useTransition } from "react";
import { RefreshCw } from "lucide-react";

export function RefreshButton({ action }: { action: () => Promise<void> }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => startTransition(() => action())}
      disabled={isPending}
      className="flex items-center gap-1.5 rounded-lg border border-card-border px-3 py-1 text-xs disabled:opacity-50"
    >
      <RefreshCw size={13} className={isPending ? "animate-spin" : ""} />
      Durumu Güncelle
    </button>
  );
}
