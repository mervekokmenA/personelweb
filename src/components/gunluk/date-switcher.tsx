"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addDays, formatTrLong, toDateInputValue, todayKey } from "@/lib/date";

export function DateSwitcher({ date }: { date: string }) {
  const router = useRouter();
  const current = new Date(date + "T00:00:00.000Z");
  const isToday = date === toDateInputValue(todayKey());

  function go(target: Date) {
    router.push(`/gunluk?date=${toDateInputValue(target)}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1 card p-1">
        <button
          onClick={() => go(addDays(current, -1))}
          className="rounded-lg p-2 hover:bg-background"
          aria-label="Önceki gün"
        >
          <ChevronLeft size={18} />
        </button>
        <input
          type="date"
          value={date}
          onChange={(e) => e.target.value && go(new Date(e.target.value + "T00:00:00.000Z"))}
          className="bg-transparent px-2 py-1 text-sm outline-none"
        />
        <button
          onClick={() => go(addDays(current, 1))}
          className="rounded-lg p-2 hover:bg-background"
          aria-label="Sonraki gün"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      {!isToday && (
        <button
          onClick={() => go(todayKey())}
          className="rounded-full bg-accent-mint px-3 py-1.5 text-xs font-medium"
        >
          Bugüne dön
        </button>
      )}
      <p className="text-sm text-muted">{formatTrLong(current)}</p>
    </div>
  );
}
