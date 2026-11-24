import type { Card, LangId, Level } from "../types";

/**
 * Kart satırı: [ön yüz, okunuş, tür, Türkçe anlam, örnek cümle, cümle okunuşu, cümle anlamı, not?]
 * Okunuş alanları yoksa "" bırakılır.
 */
export type Row = [string, string, string, string, string, string, string] | [string, string, string, string, string, string, string, string];

/** Vurgu işaretleri (U+0301) ve İbranice harekeleri çıkarır: kimlik ve doğrulama için "düz" yazım */
export function plain(s: string): string {
  // Yalnızca vurgu işareti (U+0301) ve İbranice harekeleri atılır; "й" ve "ё" korunur
  return s.normalize("NFD").replace(/[\u0301\u0591-\u05c7]/g, "").normalize("NFC").trim().toLowerCase();
}

/** FNV-1a: kısa, kararlı özet */
export function hash(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36).padStart(6, "0").slice(0, 6);
}

export function cardId(lang: LangId, front: string): string {
  return `${lang}-${hash(plain(front))}`;
}

/** Rusça B1+ desteler: cümlelerde vurgu işareti gösterilmez (vurgu ön yüzdeki kelimede verilir) */
const stripStress = (s: string) => s.normalize("NFD").replace(/\u0301/g, "").normalize("NFC");

export function buildDeck(lang: LangId, deck: string, level: Level | undefined, rows: Row[]): Card[] {
  const noStress = lang === "ru" && !!level && !["A1", "A2"].includes(level);
  return rows.map((r) => ({
    id: cardId(lang, r[0]),
    lang,
    deck,
    level,
    front: r[0],
    reading: r[1] || undefined,
    pos: r[2] || undefined,
    meaning: r[3],
    sentence: noStress ? stripStress(r[4]) : r[4],
    sentenceReading: r[5] || undefined,
    sentenceMeaning: r[6],
    note: (r as string[])[7] || undefined,
  }));
}
