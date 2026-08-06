import * as Astronomy from "astronomy-engine";
import { toSidereal, julianDay } from "./ayanamsa";
import { wholeSignHouse } from "./zodiac";

export const PLANET_KEYS = [
  "Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto",
] as const;
export type PlanetKey =
  | (typeof PLANET_KEYS)[number]
  | "Rahu"
  | "Ketu"
  | "Lilith"
  | "Chiron"
  | "Ascendant"
  | "MC"
  | "Descendant"
  | "Vertex";

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
  Lilith: "Lilith (Kara Ay)",
  Chiron: "Chiron (Yaralı Şifacı)",
  Ascendant: "Yükselen",
  MC: "MC (Tepe Noktası)",
  Descendant: "Alçalan (Desc)",
  Vertex: "Vertex (Batı Noktası)",
};

export interface BodyPosition {
  key: PlanetKey;
  tropicalLongitude: number;
  siderealLongitude: number;
  retrograde: boolean;
  /** Whole-sign ev numarası (1-12). Natal veride doğrudan verilir; transit
   * için natal Yükselen burcuna göre sonradan hesaplanır (bkz. zodiac.ts). */
  house?: number;
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

/**
 * Meeus, Astronomical Algorithms (2. baskı, eq. 45.7) — Ay'ın ortalama
 * perige (yörüngede Dünya'ya en yakın nokta) boylamı. Kara Ay Lilith,
 * bu noktanın 180° karşıtı olan ortalama apoge (en uzak nokta) olarak
 * tanımlanır — Rahu/Ketu'nun ortalama düğüm formülüyle aynı mantık.
 */
function meanLunarApogeeTropical(date: Date): number {
  const jd = julianDay(date);
  const T = (jd - 2451545.0) / 36525;
  let perigee =
    83.3532465 +
    4069.0137287 * T -
    0.01032 * T * T -
    0.00001249172 * T * T * T;
  perigee = ((perigee % 360) + 360) % 360;
  return (perigee + 180) % 360;
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
  /**
   * Natal Yükselen'in burç indeksi (0-11) verilirse, her gezegenin whole-sign
   * ev numarası da hesaplanıp `house` alanına yazılır. Kendi Yükselen
   * hesaplamamız yerine natal.ts'teki doğrulanmış referans veriden gelen
   * Yükselen kullanılır (bkz. natal.ts'teki açıklama).
   */
  ascendantSignIndex?: number;
}

/**
 * Verilen an için gezegen + Rahu/Ketu sidereal (Lahiri) konumlarını döndürür.
 */
export function computeChart(input: ChartInput): BodyPosition[] {
  const { date, ascendantSignIndex } = input;
  const positions: BodyPosition[] = [];

  const withHouse = (siderealLongitude: number) =>
    ascendantSignIndex !== undefined
      ? wholeSignHouse(Math.floor(siderealLongitude / 30), ascendantSignIndex)
      : undefined;

  for (const key of PLANET_KEYS) {
    const tropical = eclipticLongitudeOfDate(key as Astronomy.Body, date);
    const siderealLongitude = toSidereal(tropical, date);
    positions.push({
      key,
      tropicalLongitude: tropical,
      siderealLongitude,
      retrograde: key === "Sun" || key === "Moon" ? false : isRetrograde(key as Astronomy.Body, date),
      house: withHouse(siderealLongitude),
    });
  }

  const rahuTropical = meanLunarNodeTropical(date);
  const rahuSidereal = toSidereal(rahuTropical, date);
  positions.push({
    key: "Rahu",
    tropicalLongitude: rahuTropical,
    siderealLongitude: rahuSidereal,
    retrograde: true, // düğümler ortalama hareket olarak her zaman geri gider
    house: withHouse(rahuSidereal),
  });
  const ketuTropical = (rahuTropical + 180) % 360;
  const ketuSidereal = toSidereal(ketuTropical, date);
  positions.push({
    key: "Ketu",
    tropicalLongitude: ketuTropical,
    siderealLongitude: ketuSidereal,
    retrograde: true,
    house: withHouse(ketuSidereal),
  });

  const lilithTropical = meanLunarApogeeTropical(date);
  const lilithSidereal = toSidereal(lilithTropical, date);
  positions.push({
    key: "Lilith",
    tropicalLongitude: lilithTropical,
    siderealLongitude: lilithSidereal,
    retrograde: false, // ortalama apoge her zaman ileri (direkt) hareket eder
    house: withHouse(lilithSidereal),
  });

  return positions;
}
