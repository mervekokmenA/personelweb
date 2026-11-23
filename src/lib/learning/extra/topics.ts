/** Ek modüllerin konulara göre gruplanması (modüller ayrı kalır; yalnızca listelenme ve bağlantılar konuya göre düzenlenir). */

export interface ExtraTopic {
  id: string;
  title: string;
  description: string;
  /** Bu konuyla ilişkili ana modülün kimliği (varsa) */
  mainModule?: string;
  moduleIds: string[];
}

export const EXTRA_TOPICS: ExtraTopic[] = [
  {
    id: "okultizm",
    title: "Okültizm ve Maji",
    description: "Ritüel büyücülük, Kabala, Tarot ve okült gelenek kitapları — kaynak okuma ve eleştirel bağlam odaklı.",
    mainModule: "okultizm",
    moduleIds: [
      "ek-goetia",
      "ek-777",
      "ek-ars-vercanus",
      "ek-basick-magick",
      "ek-planetary-magick",
      "ek-kabbalah-unveiled",
      "ek-pratik-okultizm",
      "ek-levi",
      "ek-crowley-turkce",
      "ek-butler-magician",
      "ek-ay-buyusu",
      "ek-tarot-tarihi",
    ],
  },
  {
    id: "astroloji",
    title: "Astroloji",
    description: "Ezoterik, Vedik, Helenistik ve Türkçe astroloji kaynakları.",
    mainModule: "astroloji",
    moduleIds: ["ek-ceyhan-ezoterik-astroloji", "ek-frawley-vedik", "ek-turkce-astroloji-kitaplari", "ek-helenistik-astroloji"],
  },
  {
    id: "hermetizm-simya",
    title: "Hermetizm, Simya ve Elementler",
    description: "Hermes geleneği, simya sembolizmi ve dört element anlatımları.",
    mainModule: "okultizm",
    moduleIds: [
      "ek-hermetica-zumrut-tablet",
      "ek-kybalion",
      "ek-cockren-simya",
      "ek-alchemy-sembolik",
      "ek-elemental-witchcraft",
      "ek-elementler-kadim-astroloji",
      "ek-dort-element-homeopati",
    ],
  },
  {
    id: "beden-enerji",
    title: "Beden, Enerji ve Aura",
    description: "Aura, eterik beden, çakra ve enerji merkezi anlatımları; doğrulanabilirlik uyarılarıyla.",
    mainModule: "okultizm",
    moduleIds: ["ek-aura", "ek-eterik-cift", "ek-beden-enerji", "ek-cakra-modeli-tarihi"],
  },
  {
    id: "elestirel",
    title: "Eleştirel Okuma ve Sınama",
    description: "Ritüel, şifa, lanet, tarif ve tıbbi iddiaların kuramsal/deneysel çerçevesi — talimatsız.",
    moduleIds: ["ek-teorik-deneysel"],
  },
  {
    id: "felsefe",
    title: "Felsefe ve Metafizik",
    description: "Plotinos, Platon ve metafizik üzerine kaynaklar.",
    moduleIds: ["ek-plotinos", "ek-platon-7-ogreti", "ek-cucen-metafizik"],
  },
  {
    id: "diger",
    title: "Diğer — konulara bölünemeyenler",
    description: "Tek bir konuya net sığmayan notlar ve semboller.",
    moduleIds: ["ek-lirvian-notlari", "ek-dovme-semboller"],
  },
];

export function topicOfModule(moduleId: string): ExtraTopic | undefined {
  return EXTRA_TOPICS.find((t) => t.moduleIds.includes(moduleId));
}

/** Bir ana modülle ilişkili ek modül kimlikleri (konu sırasıyla) */
export function extraIdsForMain(mainId: string): { topic: ExtraTopic; ids: string[] }[] {
  return EXTRA_TOPICS.filter((t) => t.mainModule === mainId).map((t) => ({ topic: t, ids: t.moduleIds }));
}
