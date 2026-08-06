import type { BodyPosition, PlanetKey } from "./ephemeris";
import { PLANET_KEYS } from "./ephemeris";
import { ZODIAC_SIGNS_TR } from "./zodiac";

/**
 * Natal harita SADECE bir ortam değişkeninden (.env / Vercel env vars)
 * okunur — repoya asla commit edilmez (.env.example içinde sadece örnek
 * placeholder değerler bulunur). Arayüzde ham doğum bilgisi (tarih/saat/yer)
 * hiçbir zaman gösterilmez, sadece burç/ev sonuçları render edilir.
 *
 * Değer, doğrulanmış bir kaynaktan (ör. astro-seek.com) alınan burç/derece/ev
 * bilgisini JSON olarak tutar — kendi ephemeris hesaplamamıza değil,
 * doğrulanmış referans veriye dayanır (Yükselen/ev hesaplaması hassas bir
 * gözlemci-geometrisi problemi olduğu için üçüncü parti bir doğrulama
 * kaynağıyla karşılaştırmak daha güvenilir).
 */
interface NatalChartBodyEntry {
  sign: string; // "Koç", "Boğa", ...
  deg: number;
  min: number;
  house?: number;
  retro?: boolean;
}

interface NatalChartJson {
  ascendant: NatalChartBodyEntry;
  bodies: Partial<Record<PlanetKey, NatalChartBodyEntry>>;
}

function entryToLongitude(entry: NatalChartBodyEntry): number {
  const signIndex = ZODIAC_SIGNS_TR.indexOf(entry.sign as (typeof ZODIAC_SIGNS_TR)[number]);
  if (signIndex === -1) {
    throw new Error(`NATAL_CHART_JSON: bilinmeyen burç adı "${entry.sign}"`);
  }
  return signIndex * 30 + entry.deg + entry.min / 60;
}

let cachedNatalChart: BodyPosition[] | null | undefined;

export function getNatalChart(): BodyPosition[] | null {
  if (cachedNatalChart !== undefined) return cachedNatalChart;

  const raw = process.env.NATAL_CHART_JSON;
  if (!raw) {
    cachedNatalChart = null;
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as NatalChartJson;
    const ascLon = entryToLongitude(parsed.ascendant);
    const positions: BodyPosition[] = [];

    for (const key of [
      ...PLANET_KEYS,
      "Rahu",
      "Ketu",
      "Lilith",
      "Chiron",
      "MC",
      "Vertex",
    ] as PlanetKey[]) {
      const entry = parsed.bodies[key];
      if (!entry) continue;
      const lon = entryToLongitude(entry);
      positions.push({
        key,
        tropicalLongitude: NaN,
        siderealLongitude: lon,
        retrograde: !!entry.retro,
        house: entry.house,
      });
    }

    positions.push({
      key: "Ascendant",
      tropicalLongitude: NaN,
      siderealLongitude: ascLon,
      retrograde: false,
      house: 1,
    });

    // Alçalan (Descendant), Yükselen'in tam karşıtıdır — ayrıca bir kaynak
    // veri gerekmez, her zaman 7. evin başlangıcıdır.
    positions.push({
      key: "Descendant",
      tropicalLongitude: NaN,
      siderealLongitude: (ascLon + 180) % 360,
      retrograde: false,
      house: 7,
    });

    cachedNatalChart = positions;
  } catch (err) {
    console.error("NATAL_CHART_JSON parse edilemedi:", err);
    cachedNatalChart = null;
  }

  return cachedNatalChart;
}

/** Natal Yükselen'in burç indeksi (0-11) — transit evlerini hesaplamak için. */
export function getNatalAscendantSignIndex(): number | null {
  const chart = getNatalChart();
  const asc = chart?.find((p) => p.key === "Ascendant");
  if (!asc) return null;
  return Math.floor(asc.siderealLongitude / 30);
}
