import { prisma } from "@/lib/prisma";
import { addDays, dayKey, toDateInputValue, todayKey } from "@/lib/date";

export interface ReadingDebtSummary {
  target: number;
  debtPages: number;
  missingDays: number;
}

export async function computeReadingDebt(target: number): Promise<ReadingDebtSummary> {
  const logs = await prisma.readingLog.findMany({ orderBy: { date: "asc" } });

  if (logs.length === 0) {
    return { target, debtPages: 0, missingDays: 0 };
  }

  const logMap = new Map(logs.map((l) => [toDateInputValue(l.date), l.pages]));
  const today = todayKey();
  let debtPages = 0;
  let missingDays = 0;

  for (let d = dayKey(logs[0].date); d < today; d = addDays(d, 1)) {
    const pages = logMap.get(toDateInputValue(d)) ?? 0;
    const deficit = Math.max(0, target - pages);
    debtPages += deficit;
    if (deficit > 0) missingDays++;
  }

  return { target, debtPages, missingDays };
}
