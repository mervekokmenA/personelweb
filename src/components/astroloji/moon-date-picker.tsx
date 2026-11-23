"use client";

import { useRouter } from "next/navigation";
import { toDateInputValue, todayKey } from "@/lib/date";

export function MoonDatePicker({ date }: { date: string }) {
  const router = useRouter();
  const isToday = date === toDateInputValue(todayKey());

  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        value={date}
        onChange={(e) => e.target.value && router.push(`/ay-takvimi?date=${e.target.value}`)}
        className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
        aria-label="Tarih seç"
      />
      {!isToday && (
        <button
          onClick={() => router.push("/ay-takvimi")}
          className="rounded-full bg-accent-lilac px-3 py-1.5 text-xs font-medium"
        >
          Bugüne dön
        </button>
      )}
    </div>
  );
}
