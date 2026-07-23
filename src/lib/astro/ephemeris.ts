import * as Astronomy from "astronomy-engine";
import { toSidereal, julianDay } from "./ayanamsa";

export const PLANET_KEYS = [
  "Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto",
] as const;
export type PlanetKey = (typeof PLANET_KEYS)[number] | "Rahu" | "Ketu" | "Ascendant";

export const PLANET_LABELS_TR: Record<PlanetKey, string> = {
  Sun: "Güneş",
  Moon: "Ay",
  Mercury: "Merkür",
  Venus: "Venüs",
  Mars: "Mars",
  Jupiter: "Jüpiter",
  Saturn: "Satürn",
  Uranus: "Uranüs",
  Neptune: "Neptün",
  Pluto: "Plüton",
  Rahu: "Rahu (Ay Kuzey Düğümü)",
  Ketu: "Ketu (Ay Güney Düğümü)",
  Ascendant: "Yükselen",
};

export interface BodyPosition {
  key: PlanetKey;
  tropicalLongitude: number;
  siderealLongitude: number;
  retrograde: boolean;
}

/** Meeus, Astronomical Algorithms — Ay'ın ortalama yükselen düğümü (Rahu) */
function meanLunarNodeTropical(date: Date): number {
  const jd = julianDay(date);
  const T = (jd - 2451545.0) / 36525;
  let omega =
    125.0445479 -
    1934.1362891 * T +
    0.0020754 * T * T +
    (T * T * T) / 467441 -
    (T * T * T * T) / 60616000;
  omega = ((omega % 360) + 360) % 360;
  return omega;
}

function eclipticLongitudeOfDate(body: Astronomy.Body, date: Date): number {
  const vec = Astronomy.GeoVector(body, date, true);
  const ecl = Astronomy.Ecliptic(vec);
  return ((ecl.elon % 360) + 360) % 360;
}

function isRetrograde(body: Astronomy.Body, date: Date): boolean {
  const before = new Date(date.getTime() - 24 * 3600 * 1000);
  const lonNow = eclipticLongitudeOfDate(body, date);
  const lonBefore = eclipticLongitudeOfDate(body, before);
  let delta = lonNow - lonBefore;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return delta < 0;
}

export function ascendantTropical(date: Date, latitude: number, longitude: number): number {
  const time = Astronomy.MakeTime(date);
  const observer = new Astronomy.Observer(latitude, longitude, 0);
  const sphere = new Astronomy.Spherical(0, 90, 1); // ufuk çizgisi, doğu noktası
  // Kırılma (refraction) düzeltmesi istenmiyor — kütüphane "falsy" değeri
  // düzeltmesiz mod olarak kabul ediyor, ancak tip tanımı yalnızca `string`
  // beklediği için burada açıkça cast ediyoruz.
  const noRefraction = null as unknown as string;
  const vecHor = Astronomy.VectorFromHorizon(sphere, time, noRefraction);
  const rotHorEqd = Astronomy.Rotation_HOR_EQD(time, observer);
  const vecEqd = Astronomy.RotateVector(rotHorEqd, vecHor);
  const rotEqdEqj = Astronomy.Rotation_EQD_EQJ(time);
  const vecEqj = Astronomy.RotateVector(rotEqdEqj, vecEqd);
  vecEqj.t = time;
  const ecl = Astronomy.Ecliptic(vecEqj);
  return ((ecl.elon % 360) + 360) % 360;
}

export interface ChartInput {
  date: Date;
  latitude?: number;
  longitude?: number;
}

/**
 * Verilen an için gezegen + Rahu/Ketu + (opsiyonel, lat/lon verilirse) Yükselen
 * sidereal (Lahiri) konumlarını döndürür.
 */
export function computeChart(input: ChartInput): BodyPosition[] {
  const { date, latitude, longitude } = input;
  const positions: BodyPosition[] = [];

  for (const key of PLANET_KEYS) {
    const tropical = eclipticLongitudeOfDate(key as Astronomy.Body, date);
    positions.push({
      key,
      tropicalLongitude: tropical,
      siderealLongitude: toSidereal(tropical, date),
      retrograde: key === "Sun" || key === "Moon" ? false : isRetrograde(key as Astronomy.Body, date),
    });
  }

  const rahuTropical = meanLunarNodeTropical(date);
  positions.push({
    key: "Rahu",
    tropicalLongitude: rahuTropical,
    siderealLongitude: toSidereal(rahuTropical, date),
    retrograde: true, // düğümler ortalama hareket olarak her zaman geri gider
  });
  const ketuTropical = (rahuTropical + 180) % 360;
  positions.push({
    key: "Ketu",
    tropicalLongitude: ketuTropical,
    siderealLongitude: toSidereal(ketuTropical, date),
    retrograde: true,
  });

  if (latitude !== undefined && longitude !== undefined) {
    const ascTropical = ascendantTropical(date, latitude, longitude);
    positions.push({
      key: "Ascendant",
      tropicalLongitude: ascTropical,
      siderealLongitude: toSidereal(ascTropical, date),
      retrograde: false,
    });
  }

  return positions;
}
