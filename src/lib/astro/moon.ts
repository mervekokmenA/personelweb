import * as Astronomy from "astronomy-engine";
import { computeChart } from "./ephemeris";
import { longitudeToSign } from "./zodiac";

/** 8 evrenin Türkçe adları (0 = Yeni Ay, saat yönünde büyüyen → küçülen) */
export const MOON_PHASE_NAMES = [
  "Yeni Ay",
  "Büyüyen Hilal",
  "İlk Dördün",
  "Büyüyen Şişkin Ay",
  "Dolunay",
  "Küçülen Şişkin Ay",
  "Son Dördün",
  "Küçülen Hilal",
] as const;

/** Çeyrek olaylarının adları (astronomy-engine: 0 yeni, 1 ilk dördün, 2 dolunay, 3 son dördün) */
export const MOON_QUARTER_NAMES = ["Yeni Ay", "İlk Dördün", "Dolunay", "Son Dördün"] as const;

export interface MoonInfo {
  /** Güneş–Ay boylam farkı, 0–360° (0 = yeni, 180 = dolunay) */
  angle: number;
  /** Aydınlık oran 0–1 */
  fraction: number;
  phaseIndex: number;
  phaseName: string;
}

export function moonAt(date: Date): MoonInfo {
  const angle = Astronomy.MoonPhase(date);
  const fraction = Astronomy.Illumination(Astronomy.Body.Moon, date).phase_fraction;
  // Ana evreler (Yeni Ay, dördünler, Dolunay) Ay'ın yaklaşık ±1 günlük (≈±11°) payıyla adlandırılır;
  // arada kalanlar hilal / şişkin Ay'dır.
  const W = 11.25;
  const phaseIndex = Math.floor(((angle + W) % 360) / 90) * 2 + (((angle + W) % 90) < 2 * W ? 0 : 1);
  return { angle, fraction, phaseIndex, phaseName: MOON_PHASE_NAMES[phaseIndex] };
}

/** Günün (UTC gece yarısı anahtarı) Türkiye saatiyle öğlen anı */
export function noonTR(dayKeyDate: Date): Date {
  return new Date(dayKeyDate.getTime() + 9 * 3600 * 1000);
}

const trFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Istanbul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** Anın Türkiye takvim günü, "YYYY-MM-DD" */
export function trDateKey(d: Date): string {
  return trFormatter.format(d);
}

const trTimeFormatter = new Intl.DateTimeFormat("tr-TR", {
  timeZone: "Europe/Istanbul",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatTrTime(d: Date): string {
  return trTimeFormatter.format(d);
}

export interface MoonEvent {
  quarter: 0 | 1 | 2 | 3;
  name: string;
  time: Date;
  /** Türkiye saatine göre gün anahtarı */
  dayKey: string;
}

/** [start, end) aralığındaki Yeni Ay / İlk Dördün / Dolunay / Son Dördün olayları */
export function moonEventsBetween(start: Date, end: Date): MoonEvent[] {
  const out: MoonEvent[] = [];
  let q = Astronomy.SearchMoonQuarter(start);
  while (q.time.date < end) {
    const quarter = q.quarter as 0 | 1 | 2 | 3;
    out.push({
      quarter,
      name: MOON_QUARTER_NAMES[quarter],
      time: q.time.date,
      dayKey: trDateKey(q.time.date),
    });
    q = Astronomy.NextMoonQuarter(q);
  }
  return out;
}

export interface MoonDetail extends MoonInfo {
  ageDays: number;
  /** Batı (tropikal) zodyakta Ay'ın burcu ve derecesi */
  sign: string;
  degreeFormatted: string;
  nextNewMoon: Date | null;
  nextFullMoon: Date | null;
}

export function moonDetail(date: Date): MoonDetail {
  const info = moonAt(date);
  const lastNew = Astronomy.SearchMoonPhase(0, date, -35);
  const ageDays = lastNew ? (date.getTime() - lastNew.date.getTime()) / 86400000 : 0;
  const moon = computeChart({ date }).find((p) => p.key === "Moon");
  const pos = longitudeToSign(moon?.tropicalLongitude ?? 0);
  return {
    ...info,
    ageDays,
    sign: pos.sign,
    degreeFormatted: pos.degreeFormatted,
    nextNewMoon: Astronomy.SearchMoonPhase(0, date, 40)?.date ?? null,
    nextFullMoon: Astronomy.SearchMoonPhase(180, date, 40)?.date ?? null,
  };
}
