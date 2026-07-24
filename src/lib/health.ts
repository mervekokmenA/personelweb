import type { PeriodEntry } from "@/generated/prisma/client";

export interface CycleSummary {
  lastPeriodStart: Date | null;
  projectedNextPeriod: Date | null;
  avgCycleLengthDays: number;
  avgPeriodLengthDays: number;
  daysUntilNext: number | null;
  cycleHistory: { id: string; startDate: Date; cycleLengthDays: number | null }[];
}

const MS_PER_DAY = 86400000;

/**
 * Geçmiş adet dönemlerinden ortalama döngü/süre uzunluğunu hesaplar; yeterli
 * veri yoksa parametrik ayarlardaki varsayılana düşer.
 */
export function computeCycleSummary(
  periods: PeriodEntry[],
  fallbackCycleLength: number,
  fallbackPeriodLength: number
): CycleSummary {
  const sorted = [...periods].sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  const cycleHistory = sorted.map((p, i) => {
    const prev = sorted[i + 1]; // bir önceki (daha eski) dönem
    const cycleLengthDays = prev
      ? Math.round((p.startDate.getTime() - prev.startDate.getTime()) / MS_PER_DAY)
      : null;
    return { id: p.id, startDate: p.startDate, cycleLengthDays };
  });

  const validCycleLengths = cycleHistory
    .map((c) => c.cycleLengthDays)
    .filter((v): v is number => v !== null && v > 0 && v < 90);

  const avgCycleLengthDays =
    validCycleLengths.length > 0
      ? Math.round(validCycleLengths.reduce((a, b) => a + b, 0) / validCycleLengths.length)
      : fallbackCycleLength;

  const periodLengths = periods
    .filter((p) => p.endDate)
    .map((p) => Math.round((p.endDate!.getTime() - p.startDate.getTime()) / MS_PER_DAY) + 1)
    .filter((v) => v > 0 && v < 30);

  const avgPeriodLengthDays =
    periodLengths.length > 0
      ? Math.round(periodLengths.reduce((a, b) => a + b, 0) / periodLengths.length)
      : fallbackPeriodLength;

  const lastPeriodStart = sorted[0]?.startDate ?? null;
  const projectedNextPeriod = lastPeriodStart
    ? new Date(lastPeriodStart.getTime() + avgCycleLengthDays * MS_PER_DAY)
    : null;
  const daysUntilNext = projectedNextPeriod
    ? Math.round((projectedNextPeriod.getTime() - Date.now()) / MS_PER_DAY)
    : null;

  return {
    lastPeriodStart,
    projectedNextPeriod,
    avgCycleLengthDays,
    avgPeriodLengthDays,
    daysUntilNext,
    cycleHistory,
  };
}

export interface LaserSummary {
  lastSessionDate: Date | null;
  nextSuggestedDate: Date | null;
  daysUntilNext: number | null;
}

export function computeLaserSummary(lastDate: Date | null, intervalDays: number): LaserSummary {
  if (!lastDate) {
    return { lastSessionDate: null, nextSuggestedDate: null, daysUntilNext: null };
  }
  const nextSuggestedDate = new Date(lastDate.getTime() + intervalDays * MS_PER_DAY);
  const daysUntilNext = Math.round((nextSuggestedDate.getTime() - Date.now()) / MS_PER_DAY);
  return { lastSessionDate: lastDate, nextSuggestedDate, daysUntilNext };
}
