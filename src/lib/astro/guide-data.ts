/**
 * Astroloji hızlı rehberi: kullanıcının eklediği "anahtar kelimeler" özet görselinden aktarıldı.
 * Burç/gezegen/ev anahtar sözcükleri ve yönetim tablosu klasik (Batı) astroloji kaynaklarıyla uyumludur.
 * Stojanovic derece teorisi ve kritik dereceler görseldeki iddialardır, bağımsız olarak doğrulanamadı.
 */
const T = "︎"; // metin biçimi (emoji değil)

export interface SignInfo { key: string; name: string; glyph: string; keywords: string; element: "Ateş" | "Toprak" | "Hava" | "Su"; mode: "Öncü" | "Sabit" | "Değişken" }

export const SIGNS: SignInfo[] = [
  { key: "koc", name: "Koç", glyph: `♈${T}`, keywords: "cesaret, liderlik, enerjik, dürtüsel", element: "Ateş", mode: "Öncü" },
  { key: "boga", name: "Boğa", glyph: `♉${T}`, keywords: "duyusal, güvenlik, sabırlı, pratik", element: "Toprak", mode: "Sabit" },
  { key: "ikizler", name: "İkizler", glyph: `♊${T}`, keywords: "meraklı, uyum sağlayabilen, huzursuz", element: "Hava", mode: "Değişken" },
  { key: "yengec", name: "Yengeç", glyph: `♋${T}`, keywords: "besleyici, hassas, alıcı", element: "Su", mode: "Öncü" },
  { key: "aslan", name: "Aslan", glyph: `♌${T}`, keywords: "sıcak, dışavurumcu, yaratıcı, parlamak", element: "Ateş", mode: "Sabit" },
  { key: "basak", name: "Başak", glyph: `♍${T}`, keywords: "düzenli, kesin, analitik", element: "Toprak", mode: "Değişken" },
  { key: "terazi", name: "Terazi", glyph: `♎${T}`, keywords: "arabulucu, denge, sanat, güzellik", element: "Hava", mode: "Öncü" },
  { key: "akrep", name: "Akrep", glyph: `♏${T}`, keywords: "derinlik, yoğunluk, tutku", element: "Su", mode: "Sabit" },
  { key: "yay", name: "Yay", glyph: `♐${T}`, keywords: "seyahat, iyimser, açık sözlü", element: "Ateş", mode: "Değişken" },
  { key: "oglak", name: "Oğlak", glyph: `♑${T}`, keywords: "disiplinli, hırslı, temkinli", element: "Toprak", mode: "Öncü" },
  { key: "kova", name: "Kova", glyph: `♒${T}`, keywords: "insancıl, yenilikçi, bireysel", element: "Hava", mode: "Sabit" },
  { key: "balik", name: "Balık", glyph: `♓${T}`, keywords: "hayalperest, yaratıcı / hayal gücü yüksek, şefkatli", element: "Su", mode: "Değişken" },
];

export const SIGN_BY_NAME = Object.fromEntries(SIGNS.map((s) => [s.name, s]));

export interface PlanetInfo { key: string; name: string; glyph: string; keywords: string }

export const PLANETS: PlanetInfo[] = [
  { key: "Sun", name: "Güneş", glyph: `☉${T}`, keywords: "canlılık, ego, bilinç" },
  { key: "Moon", name: "Ay", glyph: `☽${T}`, keywords: "duygular, içgüdüler, besleme" },
  { key: "Mercury", name: "Merkür", glyph: `☿${T}`, keywords: "iletişim, zihin, mantık" },
  { key: "Venus", name: "Venüs", glyph: `♀${T}`, keywords: "ilişkiler, aşk, güzellik, sanat" },
  { key: "Mars", name: "Mars", glyph: `♂${T}`, keywords: "arzu, dürtü, eylem, saldırganlık" },
  { key: "Jupiter", name: "Jüpiter", glyph: `♃${T}`, keywords: "bolluk, şans, aşırılık, refah" },
  { key: "Saturn", name: "Satürn", glyph: `♄${T}`, keywords: "yapı, otorite, sınırlar, disiplin" },
  { key: "Uranus", name: "Uranüs", glyph: `♅${T}`, keywords: "özgürlük, özgürleşme, bilim" },
  { key: "Neptune", name: "Neptün", glyph: `♆${T}`, keywords: "rüyalar, sezgi, yanılsama, fantezi" },
  { key: "Pluto", name: "Plüton", glyph: `♇${T}`, keywords: "dönüşüm, ölüm, derinlik, güç" },
];

export const MODES = [
  { name: "Öncü (Cardinal)", signs: ["Koç", "Yengeç", "Terazi", "Oğlak"], note: "başlatma, eylem" },
  { name: "Sabit (Fixed)", signs: ["Boğa", "Aslan", "Akrep", "Kova"], note: "sürdürme, istikrar" },
  { name: "Değişken (Mutable)", signs: ["İkizler", "Başak", "Yay", "Balık"], note: "değişim, uyum sağlama" },
];

export const ELEMENTS = [
  { name: "Ateş", signs: ["Koç", "Aslan", "Yay"] },
  { name: "Toprak", signs: ["Boğa", "Başak", "Oğlak"] },
  { name: "Hava", signs: ["İkizler", "Terazi", "Kova"] },
  { name: "Su", signs: ["Yengeç", "Akrep", "Balık"] },
];

/** Yönetim (rulership), detriment, düşüş (fall), yücelim (exaltation) — yedi klasik gezegen */
export const DIGNITIES: { planet: string; glyph: string; rulership: string[]; detriment: string[]; fall: string[]; exaltation: string[] }[] = [
  { planet: "Güneş", glyph: `☉${T}`, rulership: ["Aslan"], detriment: ["Kova"], fall: ["Terazi"], exaltation: ["Koç"] },
  { planet: "Ay", glyph: `☽${T}`, rulership: ["Yengeç"], detriment: ["Oğlak"], fall: ["Akrep"], exaltation: ["Boğa"] },
  { planet: "Merkür", glyph: `☿${T}`, rulership: ["İkizler", "Başak"], detriment: ["Yay", "Balık"], fall: ["Balık"], exaltation: ["Başak"] },
  { planet: "Venüs", glyph: `♀${T}`, rulership: ["Boğa", "Terazi"], detriment: ["Akrep", "Koç"], fall: ["Başak"], exaltation: ["Balık"] },
  { planet: "Mars", glyph: `♂${T}`, rulership: ["Koç", "Akrep"], detriment: ["Terazi", "Boğa"], fall: ["Yengeç"], exaltation: ["Oğlak"] },
  { planet: "Jüpiter", glyph: `♃${T}`, rulership: ["Yay", "Balık"], detriment: ["İkizler", "Başak"], fall: ["Oğlak"], exaltation: ["Yengeç"] },
  { planet: "Satürn", glyph: `♄${T}`, rulership: ["Oğlak", "Kova"], detriment: ["Yengeç", "Aslan"], fall: ["Koç"], exaltation: ["Terazi"] },
];

export const HOUSES: { n: number; keywords: string }[] = [
  { n: 1, keywords: "Benlik, başlangıçlar, görünüş, beden, kimlik, karakter" },
  { n: 2, keywords: "Para, finans, değerler, sahip olunanlar, gelir" },
  { n: 3, keywords: "İlköğretim, kısa yolculuklar, komşular, iletişim, kardeşler, günlük işler" },
  { n: 4, keywords: "Ev, kökler, aile, özel hayat, mülk, ebeveynler" },
  { n: 5, keywords: "Çocuklar, yaratıcılık, seks, romantizm, oyun, kendini ifade etme" },
  { n: 6, keywords: "Yaralanmalar, sağlık, iş, iş arkadaşları, hizmet, günlük rutinler, kişisel gelişim, evcil hayvanlar" },
  { n: 7, keywords: "İlişkiler, evlilik, ortaklıklar, sözleşmeler" },
  { n: 8, keywords: "Ani kayıplar, miras, ölüm, ortak finanslar, yeniden doğuş / dönüşüm, başkalarının parası, sırlar, borç" },
  { n: 9, keywords: "Yüksek eğitim, yurtdışı seyahatleri, felsefe, hukuk ve din, yabancılıklar, yayıncılık, etik" },
  { n: 10, keywords: "Kariyer, itibar, uzun vadeli hedefler, toplumdaki imaj, üstler, statü" },
  { n: 11, keywords: "Arkadaşlar, network / ağlar, rüyalar, umutlar, ittifaklar, gruplar, insancıllık, teknoloji" },
  { n: 12, keywords: "Sonlanmalar, iyileşme, kayıp, hastalık, hapsedilme / kapanma, gizli düşmanlar, yalnızlık, bilinçaltı, gizli konular, kapanış, maneviyat" },
];

export const ANGLES = [
  { abbr: "ASC", name: "Yükselen" },
  { abbr: "DSC", name: "Alçalan" },
  { abbr: "MC", name: "Tepe Noktası" },
  { abbr: "IC", name: "Dip Noktası" },
];

export const ASPECTS = [
  { glyph: "☌", name: "Kavuşum (Conjunction)", angle: "0°", note: "enerjilerin birleşmesi, harmanlanması; birbirini güçlendirir" },
  { glyph: "☍", name: "Karşıt (Opposition)", angle: "180°", note: "karşıt kutuplar, çekişme / gerilim; denge ve bütünleştirme gerektirir" },
  { glyph: "△", name: "Üçgen (Trine)", angle: "120°", note: "doğal, akışta olan enerji" },
  { glyph: "□", name: "Kare (Square)", angle: "90°", note: "sürtüşme / gerilim" },
  { glyph: "✱", name: "Sekstil (Sextile)", angle: "60°", note: "uyumlu enerji" },
];

/** Stojanovic derece teorisi (görseldeki tablo): derece → burç. 0° = bulunduğu burcun gerçek ifadesi. */
export function stojanovicSign(degree: number): string | null {
  if (degree < 1 || degree > 29) return null;
  return SIGNS[(degree - 1) % 12].name;
}
export const STOJANOVIC_ROWS = SIGNS.map((s, i) => ({
  sign: s.name,
  glyph: s.glyph,
  degrees: [i + 1, i + 13, i + 25].filter((d) => d <= 29),
}));

export const CRITICAL_DEGREES = [
  { group: "Öncü burçlar", degrees: "0°, 13°, 26°" },
  { group: "Sabit burçlar", degrees: "8°, 9°, 21°, 22°" },
  { group: "Değişken burçlar", degrees: "4°, 17°" },
  { group: "Tüm burçlar", degrees: "0°, 29°" },
];
