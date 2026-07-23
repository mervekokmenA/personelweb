/**
 * Lahiri (Chitrapaksha) ayanamsa — tropikal (batı) boylamdan sidereal (Vedik)
 * boylama geçmek için kullanılan düzeltme açısı.
 *
 * Burada kullanılan, J2000.0 epoğundaki kabul edilmiş değere (23°51'11" ≈
 * 23.85306°) ve yıllık presesyon hızına (≈50.2388475"/yıl) dayanan doğrusal
 * yaklaşımdır. Profesyonel yazılımların (Swiss Ephemeris) kullandığı "true"
 * Lahiri hesabından saniye mertebesinde farklılık gösterebilir; kişisel
 * kullanım için yeterli hassasiyettedir.
 */

const J2000 = 2451545.0; // 1 Ocak 2000, 12:00 TT, Julian Day
const AYANAMSA_AT_J2000 = 23.85306; // derece
const ANNUAL_PRECESSION_ARCSEC = 50.2388475;

export function julianDay(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

export function lahiriAyanamsa(date: Date): number {
  const jd = julianDay(date);
  const julianYears = (jd - J2000) / 365.25;
  const ayanamsa = AYANAMSA_AT_J2000 + (julianYears * ANNUAL_PRECESSION_ARCSEC) / 3600;
  return ayanamsa;
}

export function toSidereal(tropicalLongitude: number, date: Date): number {
  const a = lahiriAyanamsa(date);
  let sidereal = tropicalLongitude - a;
  sidereal = ((sidereal % 360) + 360) % 360;
  return sidereal;
}
