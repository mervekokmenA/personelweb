import type { PlanetKey } from "./ephemeris";

export interface Archetype {
  /** Vedik/Sanskrit adı — batı kökenli modern noktalarda (Chiron, Lilith,
   * MC, Vertex, Desc) geleneksel bir Vedik karşılığı yoktur, bu yüzden "—". */
  vedicName: string;
  archetype: string;
  description: string;
}

export const ARCHETYPES_TR: Partial<Record<PlanetKey, Archetype>> = {
  Sun: {
    vedicName: "Surya",
    archetype: "Hükümdar",
    description:
      "Benliğin, iradenin ve görünür kimliğin hükümdarı — nerede parlamak ve liderlik etmek istediğini gösterir.",
  },
  Moon: {
    vedicName: "Chandra",
    archetype: "Anne / Zihin",
    description:
      "Duygusal iç dünyanın ve zihnin aynası — güvenlik, bakım ve alışkanlık ihtiyaçlarını taşır.",
  },
  Mercury: {
    vedicName: "Budha",
    archetype: "Haberci / Öğrenci",
    description:
      "Zihinsel çeviklik ve iletişim arketipi — nasıl öğrendiğini, konuştuğunu ve bilgiyi işlediğini anlatır.",
  },
  Venus: {
    vedicName: "Shukra",
    archetype: "Aşık / Sanatçı",
    description:
      "Estetik, zevk ve bağ kurma arketipi — neyi güzel bulduğunu ve ilişkilerde ne aradığını gösterir.",
  },
  Mars: {
    vedicName: "Mangala",
    archetype: "Savaşçı",
    description:
      "Eylem, arzu ve girişkenlik arketipi — nasıl savaştığını, harekete geçtiğini ve sınır çizdiğini gösterir.",
  },
  Jupiter: {
    vedicName: "Guru (Brihaspati)",
    archetype: "Bilge Öğretmen",
    description:
      "Genişleme, anlam ve öğreti arketipi — inanç sistemini, bereketini ve büyüme alanlarını taşır.",
  },
  Saturn: {
    vedicName: "Shani",
    archetype: "Münzevi / Yaşlı Bilge",
    description:
      "Disiplin, sınır ve karma-dersleri arketipi — zamanla emek isteyen, olgunlaşma gerektiren alanları gösterir.",
  },
  Rahu: {
    vedicName: "Rahu",
    archetype: "Gölge Arayıcı",
    description:
      "Doyumsuz arzu ve yeni yönelim arketipi — henüz deneyimlenmemiş, çekim yaratan ama içi boş hissedilebilen hedefleri işaret eder.",
  },
  Ketu: {
    vedicName: "Ketu",
    archetype: "Mistik / Vazgeçen",
    description:
      "Bırakma ve geçmiş yaşam ustalığı arketipi — fazla bilinen, doyum sağlamayan ama içgörü veren temaları taşır.",
  },
  Ascendant: {
    vedicName: "Lagna",
    archetype: "Persona / Maske",
    description:
      "Dünyaya sunduğun ilk yüz — bedenin, ilk izlenimin ve hayata yaklaşım tarzının arketipi.",
  },
  Chiron: {
    vedicName: "— (modern batı ekleme)",
    archetype: "Yaralı Şifacı",
    description:
      "İyileşmeyen ama işlevsel hale gelen yara arketipi — en derin kırılganlığın, sonunda başkalarına şifa verme gücüne dönüşür.",
  },
  Lilith: {
    vedicName: "— (modern batı ekleme)",
    archetype: "Evcilleşmemiş Dişil",
    description:
      "Bastırılmış, uzlaşmayan ve toplumsal onaya ihtiyaç duymayan içgüdü arketipi — reddedilmekten korkulan ama özgürleştiren gölge.",
  },
  MC: {
    vedicName: "—",
    archetype: "Kariyer / Kamusal Rol",
    description:
      "Dünyaya sunduğun toplumsal rol ve ulaşmak istediğin zirve — kariyer yönün ve dışarıdan nasıl tanındığın.",
  },
  Descendant: {
    vedicName: "—",
    archetype: "Öteki / Ortak",
    description:
      "İlişkilerde aradığın ve kendinde tamamlanmamış bulduğun nitelikler — partnerin ve yakın ortaklıkların aynası.",
  },
  Vertex: {
    vedicName: "—",
    archetype: "Kader Karşılaşması",
    description:
      "Genellikle dışarıdan, kader gibi hissedilen karşılaşma ve dönüm noktası arketipi — seçmediğin ama seni dönüştüren an.",
  },
};
