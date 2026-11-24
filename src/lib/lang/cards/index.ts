import type { Card, LangId, LangInfo } from "../types";
import { buildDeck, hash } from "./build";
import { EN_B1 } from "./en-b1";
import { EN_B2 } from "./en-b2";
import { EN_C1 } from "./en-c1";
import { EN_C2 } from "./en-c2";
import { EN_IFADE } from "./en-ifade";
import { RU_A1 } from "./ru-a1";
import { RU_A2 } from "./ru-a2";
import { RU_B1 } from "./ru-b1";
import { RU_B2 } from "./ru-b2";
import { RU_C1 } from "./ru-c1";
import { RU_C2 } from "./ru-c2";
import { RU_IFADE } from "./ru-ifade";
import { HE_A1 } from "./he-a1";
import { HE_A2 } from "./he-a2";
import { HE_B1 } from "./he-b1";
import { HE_B2 } from "./he-b2";
import { HE_C1 } from "./he-c1";
import { HE_C2 } from "./he-c2";
import { HE_IFADE } from "./he-ifade";

const IFADE = {
  id: "ifade",
  title: "100 Temel İfade",
  description: "Günlük hayatta en çok işe yarayan 100 ifade; her gün 10 yeni ifade ile 10 günde tamamlanır.",
};

export const LANGS: LangInfo[] = [
  {
    id: "en",
    name: "İngilizce",
    native: "English",
    speech: "en-US",
    moduleId: "dil-en",
    decks: [
      IFADE,
      { id: "b1", title: "B1 Kelimeleri", description: "Orta düzey; Oxford 3000 (B1) listesinden, konuşma dilinde sık geçenler." },
      { id: "b2", title: "B2 Kelimeleri", description: "Orta üstü; Oxford 3000/5000 (B2) listesinden." },
      { id: "c1", title: "C1 Kelimeleri", description: "İleri; Oxford 5000 (C1) listesinden." },
      { id: "c2", title: "C2 Kelimeleri", description: "Üst düzey; Oxford 5000 dışı, ileri düzey ve gerçekten kullanılan kelimeler (seviye tahminîdir)." },
    ],
    sourceNote:
      "Seviyeler Oxford 3000/5000 (CEFR) listesine, kullanım sıklığı OpenSubtitles frekans listesine dayanır. C2 için resmî bir liste olmadığından seviye tahminîdir.",
  },
  {
    id: "ru",
    name: "Rusça",
    native: "Русский",
    speech: "ru-RU",
    moduleId: "dil-ru",
    decks: [
      IFADE,
      { id: "a1", title: "A1 Kelimeleri", description: "Başlangıç: en sık kullanılan temel kelimeler." },
      { id: "a2", title: "A2 Kelimeleri", description: "Temel: günlük konuşma kelimeleri." },
      { id: "b1", title: "B1 Kelimeleri", description: "Orta düzey." },
      { id: "b2", title: "B2 Kelimeleri", description: "Orta üstü." },
      { id: "c1", title: "C1 Kelimeleri", description: "İleri." },
      { id: "c2", title: "C2 Kelimeleri", description: "Üst düzey (seviye tahminîdir)." },
    ],
    sourceNote:
      "Seçim, Rus Ulusal Derlemi (Lyashevskaya–Sharov) lemma frekans listesi ve OpenSubtitles konuşma frekansıyla yapıldı; CEFR seviyeleri frekans bandına göre tahminîdir (resmî bir seviye listesi değildir).",
  },
  {
    id: "he",
    name: "İbranice",
    native: "עברית",
    speech: "he-IL",
    rtl: true,
    moduleId: "dil-he",
    decks: [
      IFADE,
      { id: "a1", title: "A1 Kelimeleri", description: "Başlangıç: en sık kullanılan temel kelimeler." },
      { id: "a2", title: "A2 Kelimeleri", description: "Temel: günlük konuşma kelimeleri." },
      { id: "b1", title: "B1 Kelimeleri", description: "Orta düzey." },
      { id: "b2", title: "B2 Kelimeleri", description: "Orta üstü." },
      { id: "c1", title: "C1 Kelimeleri", description: "İleri." },
      { id: "c2", title: "C2 Kelimeleri", description: "Üst düzey (seviye tahminîdir)." },
    ],
    sourceNote:
      "Seçim, OpenSubtitles İbranice konuşma frekans listesine göre yapıldı; resmî bir CEFR listesi olmadığından seviyeler frekans bandına göre tahminîdir. Harekeler ve okunuşlar yapay zekâ ile hazırlandı.",
  },
];

const RAW: Card[] = [
  ...buildDeck("en", "ifade", undefined, EN_IFADE),
  ...buildDeck("en", "b1", "B1", EN_B1),
  ...buildDeck("en", "b2", "B2", EN_B2),
  ...buildDeck("en", "c1", "C1", EN_C1),
  ...buildDeck("en", "c2", "C2", EN_C2),
  ...buildDeck("ru", "ifade", undefined, RU_IFADE),
  ...buildDeck("ru", "a1", "A1", RU_A1),
  ...buildDeck("ru", "a2", "A2", RU_A2),
  ...buildDeck("ru", "b1", "B1", RU_B1),
  ...buildDeck("ru", "b2", "B2", RU_B2),
  ...buildDeck("ru", "c1", "C1", RU_C1),
  ...buildDeck("ru", "c2", "C2", RU_C2),
  ...buildDeck("he", "ifade", undefined, HE_IFADE),
  ...buildDeck("he", "a1", "A1", HE_A1),
  ...buildDeck("he", "a2", "A2", HE_A2),
  ...buildDeck("he", "b1", "B1", HE_B1),
  ...buildDeck("he", "b2", "B2", HE_B2),
  ...buildDeck("he", "c1", "C1", HE_C1),
  ...buildDeck("he", "c2", "C2", HE_C2),
];

// Aynı yazılan kelimeler (eş yazılılar, ör. İbranice שָׁם "orada" / שֵׁם "ad") için okunuştan türetilen sonek eklenir.
const seen = new Set<string>();
const ALL: Card[] = RAW.map((c) => {
  let id = c.id;
  if (seen.has(id)) id = `${id}-${hash(c.reading ?? c.meaning)}`;
  seen.add(id);
  return id === c.id ? c : { ...c, id };
});

const BY_ID = new Map(ALL.map((c) => [c.id, c]));

export const getLang = (id: string): LangInfo | undefined => LANGS.find((l) => l.id === id);
export const getCard = (id: string): Card | undefined => BY_ID.get(id);
export const cardsOf = (lang: LangId, deck?: string): Card[] => ALL.filter((c) => c.lang === lang && (!deck || c.deck === deck));
export const allCards = (): Card[] => ALL;
