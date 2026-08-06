import { prisma } from "@/lib/prisma";
import { addDays, dayKey, toDateInputValue, todayKey } from "@/lib/date";

export interface ReadingDebtSummary {
  target: number;
  debtPages: number;
  missingDays: number;
}

/**
 * Borç, en eski günden başlayarak biriken bir bakiye gibi hesaplanır: her gün
 * o günün hedefi eklenir, okunan sayfa çıkarılır. Bir günde fazla okumak,
 * bakiyeyi negatife düşürüp (0'da kırpılır) daha önceki günlerden kalan borcu
 * otomatik kapatır — hangi günün borcu olduğunu seçmek gerekmez. Fazladan
 * okuma ileriye kredi olarak taşınmaz (her adımda 0'ın altına inmez).
 *
 * Hedef zaman içinde değişebildiğinden, her gün için o tarihte geçerli olan
 * hedef `targetChanges` listesinden (tarihe göre artan) bulunur; hedefi
 * değiştirmek sadece değişiklik tarihinden itibaren geçerli olur, geçmişi
 * etkilemez.
 */
export async function computeReadingDebt(currentTarget: number): Promise<ReadingDebtSummary> {
  const [logs, targetChanges] = await Promise.all([
    prisma.readingLog.findMany({ orderBy: { date: "asc" } }),
    prisma.readingTargetChange.findMany({ orderBy: { effectiveFrom: "asc" } }),
  ]);

  if (logs.length === 0) {
    return { target: currentTarget, debtPages: 0, missingDays: 0 };
  }

  const logMap = new Map(logs.map((l) => [toDateInputValue(l.date), l.pages]));
  const today = todayKey();
  const todayLogged = logMap.has(toDateInputValue(today));
  const endExclusive = todayLogged ? addDays(today, 1) : today;

  // Kayıtlı değişikliklerden önceki günler için (ör. geçmiş kaydı hiç
  // oluşmadıysa) en eski bilinen hedef varsayılan olur — güncel hedefi
  // geçmişe yansıtmamak için `currentTarget` burada kullanılmaz.
  function targetForDay(d: Date): number {
    if (targetChanges.length === 0) return currentTarget;
    let applicable = targetChanges[0].target;
    for (const tc of targetChanges) {
      if (tc.effectiveFrom <= d) applicable = tc.target;
      else break;
    }
    return applicable;
  }

  let runningDebt = 0;
  let missingDays = 0;

  for (let d = dayKey(logs[0].date); d < endExclusive; d = addDays(d, 1)) {
    const pages = logMap.get(toDateInputValue(d)) ?? 0;
    const dayTarget = targetForDay(d);
    runningDebt += dayTarget - pages;
    if (runningDebt < 0) runningDebt = 0;
    if (dayTarget > pages) missingDays++;
  }

  return { target: currentTarget, debtPages: runningDebt, missingDays };
}
