/**
 * Bir günün "genel tamamlanma" yüzdesini hesaplar: rutinler + Çalışmalar-Hobiler.
 * Çalışmalar-Hobiler tarafında tüm öğelerin ya da her satırdan birinin bitmesi
 * gerekmiyor — o gün herhangi bir öğe işaretlenmişse bu kategori tamamlanmış
 * sayılır (rutinlerin yanında tek bir ek "slot" gibi davranır).
 */
export function computeDayCompletionPercent({
  totalRoutines,
  completedRoutines,
  hasFocusAreas,
  anyFocusDone,
}: {
  totalRoutines: number;
  completedRoutines: number;
  hasFocusAreas: boolean;
  anyFocusDone: boolean;
}): number {
  const totalSlots = totalRoutines + (hasFocusAreas ? 1 : 0);
  if (totalSlots === 0) return 0;
  const doneSlots = completedRoutines + (hasFocusAreas && anyFocusDone ? 1 : 0);
  return (doneSlots / totalSlots) * 100;
}
