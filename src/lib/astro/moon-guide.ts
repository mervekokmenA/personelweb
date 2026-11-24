/**
 * Ay evreleri rehberi: 8 evre. Anahtar kelimeler ve yorumlar kullanıcının eklediği iki görselden birleştirildi
 * (astrokronos.com "Ay Fazları" ve @witchthetrials "Ay'ın Evreleri"). Bunlar geleneksel / ezoterik yorumlardır;
 * bilimsel bir doğrulaması yoktur. Evrelerin geometrisi (hangi tarafın aydınlık olduğu vb.) gökbilimsel olarak hesaplanır.
 */
export interface PhaseGuide {
  /** MOON_PHASE_NAMES sırası (0 = Yeni Ay … 7 = Küçülen Hilal) */
  index: number;
  name: string;
  /** Diğer adlar */
  alias?: string;
  period: "büyüyen" | "küçülen" | "dönüm";
  /** Kısa anahtar sözcük */
  keyword: string;
  /** Evrenin görünümü */
  shape: string;
  /** Genel yorum (astrokronos) */
  meaning: string;
  /** Bu evrede uygun görülen çalışmalar (witchthetrials) */
  themes: string;
}

export const PHASE_GUIDE: PhaseGuide[] = [
  {
    index: 0, name: "Yeni Ay", period: "dönüm", keyword: "Yeni başlangıçlar",
    shape: "Ay görünmez; Güneş ile Ay aynı doğrultuda, yüzey tamamen karanlık.",
    meaning: "Temiz bir sayfa ama belirsizlik hakim. Önünüzdeki yeni döngü için planlar yapın ancak henüz harekete geçmeyin.",
    themes: "Niyet etme, tohum ekme (yeni bir şeye başlama), hayal etme; niyette bulunmak için uygun görülür.",
  },
  {
    index: 1, name: "Büyüyen Hilal", alias: "Hilal", period: "büyüyen", keyword: "Yeni niyetler",
    shape: "Yeni Ay ile İlk Dördün arasındaki evre; sağ tarafta ince bir ışık, \"ters C\" harfine benzer.",
    meaning: "Yenilik heyecanı ile yeni niyetler belirleniyor. Bugün karşınıza çıkan konulara dikkat edin.",
    themes: "Dinlenme, başarı ve içsel rahatlama çalışmaları için uygun görülür; kehanetle ilgilenenler için gelişim evresi sayılır.",
  },
  {
    index: 2, name: "İlk Dördün", period: "büyüyen", keyword: "Bir adım at",
    shape: "Ayın sağ yarısı aydınlık (yarım daire).",
    meaning: "Bugün yeniay zamanı yaptığınız planlar için harekete geçin. Ufak da olsa bir adım atın.",
    themes: "Güçlenme ve gelişme çalışmaları; manifestin (niyetin) ilk belirtilerinin görüldüğü evre olarak yorumlanır.",
  },
  {
    index: 3, name: "Büyüyen Şişkin Ay", alias: "Büyüyen Ay", period: "büyüyen", keyword: "Sesini duyur",
    shape: "İlk Dördün ile Dolunay arasındaki evre; ışığın büyük kısmı görünür, sol kenarda ince bir gölge kalır.",
    meaning: "Planlarınızı ve ilk adımlarınızı çevrenize duyurun. Size eşlik edecek yol arkadaşlarına ulaşın.",
    themes: "İşaretleri ve ayrıntıları fark etme, rüyalardan mesaj alma çalışmaları için uygun görülür.",
  },
  {
    index: 4, name: "Dolunay", period: "dönüm", keyword: "Yüzleş",
    shape: "Ayın tüm yüzü aydınlık; Ay, Güneş'in tam karşısında.",
    meaning: "Yeniay zamanı başlattığın planların sonuçları ile yüzleşme zamanı. Bu bir uyanış, ödül ya da sonuç olabilir.",
    themes: "Yüksek enerjinin bulunduğu evre sayılır; enerji toplama, meditasyon, kehanet ve çeşitli ritüel çalışmaları için uygun görülür.",
  },
  {
    index: 5, name: "Küçülen Şişkin Ay", alias: "Küçülen Ay", period: "küçülen", keyword: "Hesaplaşma",
    shape: "Dolunay ile Son Dördün arasındaki evre; sol taraf aydınlık, sağ kenarda ince bir gölge belirir.",
    meaning: "Dönün ve yeniaydan bu zamana kadar olan süreci değerlendirin. Geri bildirimleri alın veya kendi başınıza bir değerlendirme yapın.",
    themes: "Şükretme, içsel temizlik, kendini sevme çalışmaları ve arınma için uygun görülür.",
  },
  {
    index: 6, name: "Son Dördün", period: "küçülen", keyword: "Revizyon",
    shape: "Ayın sol yarısı aydınlık (yarım daire).",
    meaning: "Geri bildirimler sonrasında revizyonlarınızı yapın. Bu düzenlemeler yeniay planlarınızı daha iyi bir noktaya taşımak içindir.",
    themes: "Şifa niyetli çalışmalar, motivasyon ve olumlama için uygun görülür.",
  },
  {
    index: 7, name: "Küçülen Hilal", alias: "Balzamik Ay", period: "küçülen", keyword: "Kapanış ve arınma",
    shape: "Son Dördün ile Yeni Ay arasındaki evre; solda ince bir ışık, \"C\" harfine benzer.",
    meaning: "Bir döngünün sonu. Elinizdeki işleri bitirip önünüzdeki yeniay için güç toplayın; bedensel ve ruhsal olarak sadeleşin, dinlenin.",
    themes: "Güzellik ve bakım, hayata yenilik katma, duş gibi arınma ritüelleri ve dış görünüşle ilgili çekim çalışmaları için uygun görülür.",
  },
];

export const PERIOD_NOTE = {
  büyüyen: "Ay büyüyor (Yeni Ay'dan Dolunay'a doğru): ışık artar; büyümesini ve gelişmesini istediğin konular için uygun görülür.",
  küçülen: "Dolunay ve sonrası, Ay küçülüyor (bir sonraki Yeni Ay'a doğru): ışık azalır; bitmesini ve azalmasını istediğin konular için kullanılır.",
} as const;
