"use client";

import { useRouter } from "next/navigation";
import { toDateInputValue, todayKey } from "@/lib/date";

export function TransitDatePicker({ date }: { date: string }) {
  const router = useRouter();
  const isToday = date === toDateInputValue(todayKey());

  return (
    <div className="flex items-center gap-2">
      <input
        type="date"
        defaultValue={date}
        onChange={(e) => e.target.value && router.push(`/astroloji?date=${e.target.value}`)}
        className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
      />
      {!isToday && (
        <button
          onClick={() => router.push("/astroloji")}
          className="rounded-full bg-accent-lilac px-3 py-1.5 text-xs font-medium"
        >
          Bugüne dön
        </button>
      )}
    </div>
  );
}
