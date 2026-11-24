/**
 * Ay döngüsü ↔ adet döngüsü eşleştirmesi (geleneksel "Beyaz Ay / Kırmızı Ay" anlatısı).
 * Louise Lacey (Lunaception, 1974) ve Miranda Gray (Red Moon) tarafından yaygınlaştırılan çerçeve:
 *  - Beyaz Ay: adet Yeni Ay'a yakın, yumurtlama Dolunay'a yakın.
 *  - Kırmızı Ay: adet Dolunay'a yakın, yumurtlama Yeni Ay'a yakın.
 *  - Pembe Ay ve Mor Ay: iki ana düzen arasındaki geçiş evreleri (büyüyen / küçülen Ay'da başlayan adet).
 * Evre sınırları 45° (≈ 3,7 gün) aralıklarla belirlenmiştir.
 */
export type MoonCycleKind = "beyaz" | "pembe" | "kirmizi" | "mor";

export interface MoonCycleInfo {
  kind: MoonCycleKind;
  name: string;
  /** Adetin başladığı Ay evresi aralığı */
  when: string;
  /** Kısa tanım */
  summary: string;
  /** Geleneksel yorum */
  meaning: string;
  /** Rozet rengi (CSS) */
  color: string;
}

export const MOON_CYCLES: Record<MoonCycleKind, MoonCycleInfo> = {
  beyaz: {
    kind: "beyaz",
    name: "Beyaz Ay Döngüsü",
    when: "Adet Yeni Ay'a yakın başlar (Yeni Ay ± ~3-4 gün)",
    summary: "Adet Yeni Ay'da, yumurtlama Dolunay'a yakın.",
    meaning:
      "Geleneksel anlatıda en sık \"anaç / yaratıcı\" döngü olarak anılır: bedenin Ay ile aynı ritimde olduğu, Dolunay'da en verimli, Yeni Ay'da arınma ve içe dönüş zamanının geldiği döngü kabul edilir. Dolunay çevresi dışa dönük, üretken ve verimli; adet dönemi ise dinlenme ve yenilenme zamanı olarak yorumlanır.",
    color: "#e8e6f5",
  },
  pembe: {
    kind: "pembe",
    name: "Pembe Ay Döngüsü",
    when: "Adet büyüyen Ay'da başlar (Yeni Ay ile Dolunay arası)",
    summary: "Adet Ay büyürken başlar; Kırmızı Ay'a doğru bir geçiş evresi.",
    meaning:
      "Beyaz Ay'dan Kırmızı Ay'a (veya tersine) geçiş dönemi olarak anlatılır. Bedenin yeni bir ritim aradığı, enerjinin dışa açılmaya başladığı bir evre sayılır; adetle birlikte yenilenme büyüyen Ay'ın artan enerjisine denk gelir.",
    color: "#f4b6d4",
  },
  kirmizi: {
    kind: "kirmizi",
    name: "Kırmızı Ay Döngüsü",
    when: "Adet Dolunay'a yakın başlar (Dolunay ± ~3-4 gün)",
    summary: "Adet Dolunay'da, yumurtlama Yeni Ay'a yakın.",
    meaning:
      "Geleneksel anlatıda \"şifacı / öğretici\" döngü olarak anılır: adet kanamasının Dolunay'ın en güçlü ışığına denk gelmesi, içgörü, sezgi ve manevi çalışma için güçlü bir zaman olarak yorumlanır. Yeni Ay çevresi ise bedenin verimli olduğu dönem sayılır. Toplumlarda uzun süre, bu düzenin kadınların bilgelik ve rehberlik rolüyle ilişkilendirildiği anlatılır.",
    color: "#e0596b",
  },
  mor: {
    kind: "mor",
    name: "Mor Ay Döngüsü",
    when: "Adet küçülen Ay'da başlar (Dolunay ile Yeni Ay arası)",
    summary: "Adet Ay küçülürken başlar; Beyaz Ay'a doğru bir geçiş evresi.",
    meaning:
      "Dolunay sonrasında başlayan, Beyaz Ay düzenine yaklaşan geçiş evresi olarak anlatılır. Küçülen Ay'ın bırakma ve arınma enerjisiyle uyumlu; adetin dinlenme ve içe dönüş zamanı olarak daha belirgin yaşandığı bir evre sayılır.",
    color: "#b79cf0",
  },
};

/** Güneş–Ay açısından (0–360°, 0 = Yeni Ay) döngü türünü bulur. */
export function cycleKindFromAngle(angle: number): MoonCycleKind {
  const a = ((angle % 360) + 360) % 360;
  if (a >= 315 || a < 45) return "beyaz";
  if (a < 135) return "pembe";
  if (a < 225) return "kirmizi";
  return "mor";
}

/** Adet başlangıcı sayısına göre en sık görülen tür (eşitlikte en yeni kayıt kazanır). */
export function dominantKind(kinds: MoonCycleKind[]): MoonCycleKind | null {
  if (kinds.length === 0) return null;
  const counts = new Map<MoonCycleKind, number>();
  for (const k of kinds) counts.set(k, (counts.get(k) ?? 0) + 1);
  let best: MoonCycleKind = kinds[0];
  for (const [k, n] of counts) if (n > (counts.get(best) ?? 0)) best = k;
  return best;
}
