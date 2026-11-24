import { addDays, dayKey, toDateInputValue, todayKey, TR_MONTHS_SHORT } from "./date";

export type HabitFrequency = "DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM";

export interface HabitPeriod {
  /** Bu tekrarın başlangıç günü — HabitCompletion.date anahtarı olarak kullanılır */
  start: Date;
  /** Kutunun içindeki kısa etiket (örn. "20", "H3", "Tem") */
  label: string;
  /** Hover/başlık için tam açıklama (örn. "20 - 26 Temmuz") */
  title: string;
  /** Dönem henüz başlamadı (bugünden sonra) */
  future?: boolean;
  /** Bugün bu dönemin içinde */
  current?: boolean;
}

/** CUSTOM sıklık için kaç günde bir tekrar edileceği (geçersizse 1 güne düşer). */
function customDays(customIntervalDays: number | null | undefined): number {
  return customIntervalDays && customIntervalDays > 0 ? customIntervalDays : 1;
}

/** Belirtilen sıklığa göre `n` tekrar sonraki başlangıç tarihini döndürür. */
function addPeriod(
  start: Date,
  frequency: HabitFrequency,
  n: number,
  customIntervalDays?: number | null
): Date {
  if (frequency === "MONTHLY") {
    return new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + n, start.getUTCDate()));
  }
  const unitDays = frequency === "WEEKLY" ? 7 : frequency === "CUSTOM" ? customDays(customIntervalDays) : 1;
  return addDays(start, unitDays * n);
}

function periodRangeTitle(
  start: Date,
  frequency: HabitFrequency,
  customIntervalDays?: number | null
): string {
  if (frequency === "DAILY") {
    return `${start.getUTCDate()} ${TR_MONTHS_SHORT[start.getUTCMonth()]}`;
  }
  if (frequency === "MONTHLY") {
    return `${TR_MONTHS_SHORT[start.getUTCMonth()]} ${start.getUTCFullYear()}`;
  }
  const days = frequency === "CUSTOM" ? customDays(customIntervalDays) : 7;
  if (days <= 1) {
    return `${start.getUTCDate()} ${TR_MONTHS_SHORT[start.getUTCMonth()]}`;
  }
  const end = addDays(start, days - 1);
  const sameMonth = start.getUTCMonth() === end.getUTCMonth();
  const startPart = `${start.getUTCDate()} ${sameMonth ? "" : TR_MONTHS_SHORT[start.getUTCMonth()]}`.trim();
  const endPart = `${end.getUTCDate()} ${TR_MONTHS_SHORT[end.getUTCMonth()]}`;
  return `${startPart} - ${endPart}`;
}

function periodLabel(start: Date, frequency: HabitFrequency, index: number): string {
  if (frequency === "DAILY" || frequency === "CUSTOM") return String(start.getUTCDate());
  if (frequency === "MONTHLY") return TR_MONTHS_SHORT[start.getUTCMonth()];
  return `H${index + 1}`;
}

const WINDOW_SIZE: Record<HabitFrequency, number> = {
  DAILY: 30,
  WEEKLY: 8,
  MONTHLY: 6,
  CUSTOM: 10,
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
  customIntervalDays?: number | null;
}): HabitPeriod[] {
  const start = dayKey(habit.startDate);
  const build = (index: number): HabitPeriod => {
    const periodStart = addPeriod(start, habit.frequency, index, habit.customIntervalDays);
    return {
      start: periodStart,
      label: periodLabel(periodStart, habit.frequency, index),
      title: periodRangeTitle(periodStart, habit.frequency, habit.customIntervalDays),
    };
  };

  if (!habit.indefinite && habit.totalPeriods && habit.totalPeriods > 0) {
    return Array.from({ length: habit.totalPeriods }, (_, i) => build(i));
  }

  // Süresiz: bugüne kadar kaç tekrar geçmiş, onu bul.
  const today = todayKey();
  let current = 0;
  while (addPeriod(start, habit.frequency, current + 1, habit.customIntervalDays) <= today) current++;

  const windowSize = WINDOW_SIZE[habit.frequency];
  const from = Math.max(0, current - windowSize + 1);
  return Array.from({ length: current - from + 1 }, (_, i) => build(from + i));
}

/** Süresiz alışkanlıklarda, bugünün ötesinde kaç tekrar önceden gösterilsin. */
const UPCOMING: Record<HabitFrequency, number> = { DAILY: 3, WEEKLY: 2, MONTHLY: 2, CUSTOM: 3 };

export interface HabitView {
  periods: HabitPeriod[];
  /** Pencerenin dışında kalan (gösterilmeyen) eski tekrar sayısı */
  hiddenBefore: number;
  /** Başlangıçtan bugüne (bugün dahil) geçen toplam tekrar sayısı */
  elapsed: number;
}

/**
 * Ekranda gösterilecek tekrarlar: süreli programda hepsi; süresizde son pencere + önümüzdeki birkaç tekrar.
 * `all: true` ise süresizde de başlangıçtan itibaren tüm geçmiş (+ önümüzdeki tekrarlar) döner.
 * Gelecek tekrarlar `future`, bugünü kapsayan tekrar `current` olarak işaretlenir.
 */
export function getHabitView(
  habit: {
    frequency: HabitFrequency;
    indefinite: boolean;
    totalPeriods: number | null;
    startDate: Date;
    customIntervalDays?: number | null;
  },
  opts: { all?: boolean } = {}
): HabitView {
  const start = dayKey(habit.startDate);
  const today = todayKey();
  const next = (i: number) => addPeriod(start, habit.frequency, i, habit.customIntervalDays);
  const build = (index: number): HabitPeriod => {
    const periodStart = next(index);
    const nextStart = next(index + 1);
    return {
      start: periodStart,
      label: periodLabel(periodStart, habit.frequency, index),
      title: periodRangeTitle(periodStart, habit.frequency, habit.customIntervalDays),
      future: periodStart > today,
      current: periodStart <= today && nextStart > today,
    };
  };

  let current = 0;
  while (next(current + 1) <= today) current++;

  if (!habit.indefinite && habit.totalPeriods && habit.totalPeriods > 0) {
    const n = habit.totalPeriods;
    return { periods: Array.from({ length: n }, (_, i) => build(i)), hiddenBefore: 0, elapsed: Math.min(n, current + 1) };
  }
  const from = opts.all ? 0 : Math.max(0, current - WINDOW_SIZE[habit.frequency] + 1);
  const to = current + UPCOMING[habit.frequency];
  return { periods: Array.from({ length: to - from + 1 }, (_, i) => build(from + i)), hiddenBefore: from, elapsed: current + 1 };
}

export function dateKey(d: Date): string {
  return toDateInputValue(d);
}

export interface HabitStreaks {
  /** En son dönemden geriye giderek kırılmadan süren tamamlanma serisi. */
  current: number;
  /** Şu an ekranda gösterilen pencere içindeki en uzun tamamlanma serisi. */
  longest: number;
}

/**
 * Not: `periods` zaten `getHabitPeriods`'ın döndürdüğü sınırlı pencere
 * (örn. son 30 gün) olduğundan, "en uzun seri" alışkanlığın tüm geçmişini
 * değil sadece bu pencereyi kapsar.
 */
export function computeStreaks(allPeriods: HabitPeriod[], completions: Map<string, boolean>): HabitStreaks {
  // Henüz başlamamış tekrarlar seriyi bozmaz / sayılmaz
  const periods = allPeriods.filter((p) => !p.future);
  let longest = 0;
  let running = 0;
  for (const p of periods) {
    if (completions.get(dateKey(p.start))) {
      running++;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  }

  let current = 0;
  for (let i = periods.length - 1; i >= 0; i--) {
    if (completions.get(dateKey(periods[i].start))) current++;
    else break;
  }

  return { current, longest };
}

/** Sıklık için kullanıcıya gösterilecek kısa etiket (örn. "3 günde 1"). */
export function formatHabitFrequency(
  frequency: HabitFrequency,
  customIntervalDays?: number | null
): string {
  if (frequency === "CUSTOM") return `${customDays(customIntervalDays)} günde 1`;
  if (frequency === "DAILY") return "Günlük";
  if (frequency === "WEEKLY") return "Haftalık (7 günde 1)";
  return "Aylık";
}
