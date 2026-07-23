import { computeChart, type BodyPosition } from "./ephemeris";

/**
 * Doğum bilgileri SADECE ortam değişkenlerinden (.env / Vercel env vars)
 * okunur — repoya asla commit edilmez (.env.example içinde sadece örnek
 * placeholder değerler bulunur). Arayüzde bu ham veriler hiçbir zaman
 * gösterilmez, sadece hesaplanmış gezegen/burç sonuçları render edilir.
 */
export interface NatalConfig {
  birthDate: string; // "YYYY-MM-DD"
  birthTime: string; // "HH:mm"
  utcOffsetHours: number; // örn. +3
  latitude: number;
  longitude: number;
}

export function getNatalConfig(): NatalConfig | null {
  const birthDate = process.env.NATAL_BIRTH_DATE;
  const birthTime = process.env.NATAL_BIRTH_TIME;
  const utcOffsetStr = process.env.NATAL_UTC_OFFSET;
  const latStr = process.env.NATAL_LATITUDE;
  const lonStr = process.env.NATAL_LONGITUDE;

  if (!birthDate || !birthTime || !utcOffsetStr || !latStr || !lonStr) {
    return null;
  }

  return {
    birthDate,
    birthTime,
    utcOffsetHours: parseFloat(utcOffsetStr),
    latitude: parseFloat(latStr),
    longitude: parseFloat(lonStr),
  };
}

export function natalConfigToUtcDate(config: NatalConfig): Date {
  const [y, m, d] = config.birthDate.split("-").map(Number);
  const [hh, mm] = config.birthTime.split(":").map(Number);
  // Yerel doğum saatini UTC'ye çevir: UTC = yerel - ofset
  const utcMs = Date.UTC(y, m - 1, d, hh, mm) - config.utcOffsetHours * 3600 * 1000;
  return new Date(utcMs);
}

let cachedNatalChart: BodyPosition[] | null | undefined;

export function getNatalChart(): BodyPosition[] | null {
  if (cachedNatalChart !== undefined) return cachedNatalChart;
  const config = getNatalConfig();
  if (!config) {
    cachedNatalChart = null;
    return null;
  }
  const date = natalConfigToUtcDate(config);
  cachedNatalChart = computeChart({ date, latitude: config.latitude, longitude: config.longitude });
  return cachedNatalChart;
}
