export type LangId = "en" | "ru" | "he";
export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Card {
  /** Kararlı kimlik: dil + ön yüz metninin özeti (sıra değişse de değişmez) */
  id: string;
  lang: LangId;
  /** Deste kimliği: seviye (a1…c2) veya "ifade" (100 temel ifade) */
  deck: string;
  level?: Level;
  /** Ön yüz: yabancı dildeki kelime/ifade (Rusça'da vurgu işaretli, İbranice'de harekeli) */
  front: string;
  /** Okunuş (Türkçe okunuşa göre) */
  reading?: string;
  /** Sözcük türü: i. (isim), f. (fiil), s. (sıfat), z. (zarf), ed. (edat/bağlaç…), ifade */
  pos?: string;
  /** Türkçe anlamı */
  meaning: string;
  sentence: string;
  sentenceReading?: string;
  sentenceMeaning: string;
  note?: string;
}

export interface DeckInfo {
  id: string;
  title: string;
  description: string;
}

export interface LangInfo {
  id: LangId;
  name: string;
  native: string;
  /** Web Speech API dil kodu */
  speech: string;
  rtl?: boolean;
  /** Bu dilin kart destelerinin sırası */
  decks: DeckInfo[];
  /** İlgili öğrenme modülünün kimliği (alfabe/okunuş/gramer dersleri) */
  moduleId: string;
  sourceNote: string;
}
