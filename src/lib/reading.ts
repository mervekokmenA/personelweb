import { prisma } from "@/lib/prisma";
import { addDays, dayKey, toDateInputValue, todayKey } from "@/lib/date";

export interface ReadingDebtSummary {
  target: number;
  debtPages: number;
  missingDays: number;
}

/**
 * Borç, en eski günden başlayarak biriken bir bakiye gibi hesaplanır: her
 * günün kendi açığı (hedef - okunan sayfa, negatifse yok) bir kuyruğa
 * eklenir; bir günde fazla okumak, bu fazlalıkla kuyruktaki EN ESKİ açıklardan
 * başlayarak öder — hangi günün borcu olduğunu seçmek gerekmez. Fazladan
 * okuma ileriye kredi olarak taşınmaz (kuyrukta yer yoksa fazlalık atılır).
 *
 * `missingDays`, kuyrukta hâlâ ödenmemiş açığı olan gün sayısıdır — yani
 * `debtPages` ile her zaman tutarlıdır (ör. sonradan fazla okumayla kapanmış
 * eski bir gün artık "eksik gün" sayılmaz).
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

  // Ödenmemiş günlük açıkların FIFO kuyruğu — en eskisi başta.
  const outstanding: number[] = [];

  for (let d = dayKey(logs[0].date); d < endExclusive; d = addDays(d, 1)) {
    const pages = logMap.get(toDateInputValue(d)) ?? 0;
    const dayTarget = targetForDay(d);
    const diff = dayTarget - pages;

    if (diff > 0) {
      outstanding.push(diff);
      continue;
    }

    let surplus = -diff;
    while (surplus > 0 && outstanding.length > 0) {
      if (outstanding[0] <= surplus) {
        surplus -= outstanding[0];
        outstanding.shift();
      } else {
        outstanding[0] -= surplus;
        surplus = 0;
      }
    }
  }

  const debtPages = outstanding.reduce((sum, v) => sum + v, 0);
  return { target: currentTarget, debtPages, missingDays: outstanding.length };
}
