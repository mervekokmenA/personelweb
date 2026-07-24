import { addDays, dayKey, toDateInputValue, todayKey, TR_MONTHS_SHORT } from "./date";

export type HabitFrequency = "DAILY" | "WEEKLY" | "MONTHLY";

export interface HabitPeriod {
  /** Bu tekrarın başlangıç günü — HabitCompletion.date anahtarı olarak kullanılır */
  start: Date;
  /** Kutunun içindeki kısa etiket (örn. "20", "H3", "Tem") */
  label: string;
  /** Hover/başlık için tam açıklama (örn. "20 - 26 Temmuz") */
  title: string;
}

/** Belirtilen sıklığa göre `n` tekrar sonraki başlangıç tarihini döndürür. */
function addPeriod(start: Date, frequency: HabitFrequency, n: number): Date {
  if (frequency === "MONTHLY") {
    return new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + n, start.getUTCDate()));
  }
  const unitDays = frequency === "WEEKLY" ? 7 : 1;
  return addDays(start, unitDays * n);
}

function periodRangeTitle(start: Date, frequency: HabitFrequency): string {
  if (frequency === "DAILY") {
    return `${start.getUTCDate()} ${TR_MONTHS_SHORT[start.getUTCMonth()]}`;
  }
  if (frequency === "MONTHLY") {
    return `${TR_MONTHS_SHORT[start.getUTCMonth()]} ${start.getUTCFullYear()}`;
  }
  const end = addDays(start, 6);
  const sameMonth = start.getUTCMonth() === end.getUTCMonth();
  const startPart = `${start.getUTCDate()} ${sameMonth ? "" : TR_MONTHS_SHORT[start.getUTCMonth()]}`.trim();
  const endPart = `${end.getUTCDate()} ${TR_MONTHS_SHORT[end.getUTCMonth()]}`;
  return `${startPart} - ${endPart}`;
}

function periodLabel(start: Date, frequency: HabitFrequency, index: number): string {
  if (frequency === "DAILY") return String(start.getUTCDate());
  if (frequency === "MONTHLY") return TR_MONTHS_SHORT[start.getUTCMonth()];
  return `H${index + 1}`;
}

const WINDOW_SIZE: Record<HabitFrequency, number> = {
  DAILY: 30,
  WEEKLY: 8,
  MONTHLY: 6,
};

/**
 * Bir alışkanlığın gösterilecek tekrar (dönem) listesini hesaplar.
 * - Süreli (indefinite=false): startDate'ten itibaren tam olarak totalPeriods
 *   kadar tekrar gösterilir (örn. "4 haftalık program" -> 4 kutu).
 * - Süresiz: başlangıçtan bugüne kadar geçen tekrarların son bir penceresi
 *   gösterilir (grid sonsuza kadar büyümesin diye).
 */
export function getHabitPeriods(habit: {
  frequency: HabitFrequency;
  indefinite: boolean;
  totalPeriods: number | null;
  startDate: Date;
}): HabitPeriod[] {
  const start = dayKey(habit.startDate);
  const build = (index: number): HabitPeriod => {
    const periodStart = addPeriod(start, habit.frequency, index);
    return {
      start: periodStart,
      label: periodLabel(periodStart, habit.frequency, index),
      title: periodRangeTitle(periodStart, habit.frequency),
    };
  };

  if (!habit.indefinite && habit.totalPeriods && habit.totalPeriods > 0) {
    return Array.from({ length: habit.totalPeriods }, (_, i) => build(i));
  }

  // Süresiz: bugüne kadar kaç tekrar geçmiş, onu bul.
  const today = todayKey();
  let current = 0;
  while (addPeriod(start, habit.frequency, current + 1) <= today) current++;

  const windowSize = WINDOW_SIZE[habit.frequency];
  const from = Math.max(0, current - windowSize + 1);
  return Array.from({ length: current - from + 1 }, (_, i) => build(from + i));
}

export function dateKey(d: Date): string {
  return toDateInputValue(d);
}
