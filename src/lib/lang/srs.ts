/**
 * Aralıklı tekrar zamanlayıcısı (SM-2'den uyarlanmış, Anki'ye benzer).
 * Saf fonksiyon: aynı girdi → aynı çıktı; veritabanına dokunmaz (kolay test edilir).
 *
 * Notlar: 0 = Tekrar (bilemedim), 1 = Zor, 2 = İyi, 3 = Kolay
 */
export type Grade = 0 | 1 | 2 | 3;

export interface SrsState {
  ease: number; // 1.3 – 3.0
  intervalDays: number; // gün
  reps: number; // art arda başarılı tekrar sayısı
  lapses: number; // unutma sayısı
}

export const NEW_STATE: SrsState = { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0 };

const MIN_EASE = 1.3;
const MAX_EASE = 3.0;
const AGAIN_MINUTES = 10;
const DAY_MS = 24 * 60 * 60 * 1000;

const clampEase = (e: number) => Math.min(MAX_EASE, Math.max(MIN_EASE, Math.round(e * 100) / 100));

export function schedule(prev: SrsState, grade: Grade, now: Date): { state: SrsState; dueAt: Date } {
  let { ease, intervalDays, reps } = prev;
  const { lapses } = prev;

  if (grade === 0) {
    // Unuttum: kart yeniden öğrenme aşamasına döner; 10 dakika sonra tekrar gelir.
    return {
      state: { ease: clampEase(ease - 0.2), intervalDays: 0, reps: 0, lapses: reps > 0 ? lapses + 1 : lapses },
      dueAt: new Date(now.getTime() + AGAIN_MINUTES * 60 * 1000),
    };
  }

  if (reps === 0) {
    // Yeni ya da yeniden öğrenilen kart: ilk başarılı adım
    intervalDays = grade === 1 ? 1 : grade === 2 ? 1 : 4;
    if (grade === 1) ease = clampEase(ease - 0.15);
    if (grade === 3) ease = clampEase(ease + 0.15);
    reps = 1;
  } else if (grade === 1) {
    intervalDays = Math.max(intervalDays + 1, Math.round(intervalDays * 1.2));
    ease = clampEase(ease - 0.15);
    reps += 1;
  } else if (grade === 2) {
    intervalDays = reps === 1 ? 3 : Math.max(intervalDays + 1, Math.round(intervalDays * ease));
    reps += 1;
  } else {
    intervalDays = Math.max(intervalDays + 2, Math.round(intervalDays * ease * 1.3));
    ease = clampEase(ease + 0.15);
    reps += 1;
  }

  return {
    state: { ease, intervalDays, reps, lapses },
    dueAt: new Date(now.getTime() + intervalDays * DAY_MS),
  };
}

/** Düğmelerin altında göstermek için: bu notu verirsen kart ne zaman gelir? */
export function previewLabel(prev: SrsState, grade: Grade, now: Date): string {
  const { dueAt } = schedule(prev, grade, now);
  const mins = Math.round((dueAt.getTime() - now.getTime()) / 60000);
  if (mins < 60) return `${mins} dk`;
  const days = Math.round(mins / 1440);
  if (days < 1) return `${Math.round(mins / 60)} sa`;
  if (days < 30) return `${days} gün`;
  if (days < 365) return `${Math.round(days / 30)} ay`;
  return `${(days / 365).toFixed(1)} yıl`;
}
