export const ZODIAC_SIGNS_TR = [
  "Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak",
  "Terazi", "Akrep", "Yay", "Oğlak", "Kova", "Balık",
] as const;

export const NAKSHATRAS_TR = [
  "Aşvini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Svati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati",
] as const;

export interface SignPosition {
  signIndex: number; // 0-11
  sign: string;
  degreeInSign: number; // 0-30
  degreeFormatted: string; // "12° 34'"
}

export function longitudeToSign(longitude: number): SignPosition {
  const lon = ((longitude % 360) + 360) % 360;
  const signIndex = Math.floor(lon / 30);
  const degreeInSign = lon - signIndex * 30;
  const deg = Math.floor(degreeInSign);
  const min = Math.round((degreeInSign - deg) * 60);
  return {
    signIndex,
    sign: ZODIAC_SIGNS_TR[signIndex],
    degreeInSign,
    degreeFormatted: `${deg}° ${min.toString().padStart(2, "0")}'`,
  };
}

export interface NakshatraPosition {
  index: number; // 0-26
  name: string;
  pada: number; // 1-4
}

export function longitudeToNakshatra(longitude: number): NakshatraPosition {
  const lon = ((longitude % 360) + 360) % 360;
  const span = 360 / 27; // 13°20'
  const index = Math.floor(lon / span);
  const withinNakshatra = lon - index * span;
  const pada = Math.floor(withinNakshatra / (span / 4)) + 1;
  return { index, name: NAKSHATRAS_TR[index], pada };
}

export interface AspectDefinition {
  name: string;
  angle: number;
  orb: number;
}

// Vedik/batı karışık pratik açı seti — kişisel kullanım için
export const ASPECTS: AspectDefinition[] = [
  { name: "Kavuşum (0°)", angle: 0, orb: 6 },
  { name: "Yarı Kare (45°)", angle: 45, orb: 2 },
  { name: "Kare (90°)", angle: 90, orb: 6 },
  { name: "Quintile (72°)", angle: 72, orb: 2 },
  { name: "Üçgen (120°)", angle: 120, orb: 6 },
  { name: "Biquintile (144°)", angle: 144, orb: 2 },
  { name: "Karşıt (180°)", angle: 180, orb: 6 },
];

export function angleDiff(a: number, b: number): number {
  let diff = Math.abs(a - b) % 360;
  if (diff > 180) diff = 360 - diff;
  return diff;
}

export interface AspectHit {
  aspect: AspectDefinition;
  exactOrb: number;
}

export function findAspect(lon1: number, lon2: number): AspectHit | null {
  const diff = angleDiff(lon1, lon2);
  for (const aspect of ASPECTS) {
    const delta = Math.abs(diff - aspect.angle);
    if (delta <= aspect.orb) {
      return { aspect, exactOrb: delta };
    }
  }
  return null;
}

/** Whole-sign ev sistemi: Yükselen'in burcu = 1. ev, sonraki burç = 2. ev, vs. */
export function wholeSignHouse(bodySignIndex: number, ascendantSignIndex: number): number {
  return (((bodySignIndex - ascendantSignIndex) % 12) + 12) % 12 + 1;
}

export const HOUSE_MEANINGS_TR: Record<number, string> = {
  1: "benlik, görünüm, yeni başlangıçlar",
  2: "değerler, kaynaklar, öz güven",
  3: "iletişim, günlük çevre, öğrenme",
  4: "kökler, aile, iç dünya",
  5: "yaratıcılık, ifade, kalpten gelen işler",
  6: "rutin, sağlık, günlük disiplin",
  7: "ilişkiler, ortaklıklar, karşılaşmalar",
  8: "dönüşüm, derinlik, paylaşılan kaynaklar",
  9: "inanç, vizyon, öğreti, yolculuk",
  10: "kariyer, toplumsal rol, itibar",
  11: "topluluk, hedefler, gelecek vizyonu",
  12: "içe dönüş, bilinçdışı, kapanış/hazırlık",
};
