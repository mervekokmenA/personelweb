import { extraModule } from "./builder";
import { qz } from "../helpers";

export const planetaryMagickModule = extraModule({
  id: "ek-planetary-magick",
  title: "Planetary Magick (Denning & Phillips, Llewellyn)",
  tagline: "Yedi gezegen küresi, karşılık tabloları ve ritüel sisteminin haritası + Aurum Solis bağlamı",
  description:
    "Yüklediğin 'incensi-planetari-moderni' PDF'inin (Melita Denning & Osborne Phillips, Planetary Magick) ek modülü. Kitabın üç bölümünü, gezegen karşılıkları mantığını, zamanlama fikrini ve yazarların örgütü Aurum Solis'in tarihine dair doğrulanabilir/tartışmalı noktaları anlatır.",
  source: {
    file: "incensi-planetari-moderni.pdf",
    author: "Melita Denning & Osborne Phillips (Llewellyn)",
    language: "İngilizce",
    pages: 586,
    readNote: "Tanıtım yazıları, içindekiler ve bölüm girişleri okundu. Ritüel metinleri ve tabloların satırları derse konmadı.",
  },
  units: [
    {
      id: "p1",
      title: "1. Yazarlar, Örgüt ve Kitabın Yapısı",
      description: "Aurum Solis, Magical Philosophy serisi ve üç bölümlü yapı.",
      lessons: [
        {
          id: "pm-yazarlar",
          title: "Denning & Phillips ve Aurum Solis",
          summary: "Kitabın arka kapağındaki iddialar ile bağımsız kaynakların söyledikleri.",
          body: `## Kitap ve yazarlar
*Planetary Magick: Invoking and Directing the Powers of the Planets* (Llewellyn). Yazarlar **Melita Denning ve Osborne Phillips**, kitapta kendilerini "**Ogdoadic Tradition**"ın önde gelen temsilcileri ve **Aurum Solis** düzeninin başındaki isimler olarak tanıtır; ayrıca *The Magical Philosophy* serisinin (3 ciltlik revize edilmiş sürüm) yazarlarıdır. Kitapta "Magical Philosophy: Foundations of High Magick, The Sword and the Serpent, Mysteria Magica" listelenir.

## Bağımsız kaynaklar ne diyor?
- **Ordo Aurum Solis** ("Altının Güneşi Düzeni") kaynaklarda **1897'de İngiltere'de** George Stanton ve Charles Kingold tarafından kurulmuş **Hermetik/teurjik bir düzen** olarak tanımlanır.
- Düzen kendini Eski Mısır ve Yunan'daki "Ogdoadic (Sekizli) Gelenek"ten türemiş sayar; **eleştirmenler** bu geleneğin 1970'lerden önce bağımsız olarak izlenemediğini söyler (ikincil kaynaklar: Vikipedi tartışma sayfası, okült referans siteleri).
- Denning, düzenin ilk kadın Büyük Üstadı olarak anılır; 1987'de Llewellyn'in Carl Weschcke'si Büyük Üstat olmuştur (kaynaklarda farklı ayrıntılar var).

## Okuma tavsiyesi
Yazarların tanıtımındaki "bin yıllık geçmişi tarihsel olarak izlenebilir" ifadesi **kendi beyanıdır**; bağımsız tarih çalışmalarıyla desteklenmiş değildir.

## Çalışma
"Kitabın söylediği / bağımsız kaynakların söylediği / belirsiz kalan" olmak üzere üç sütunlu bir tablo hazırla.`,
          verification: `**Kaynak:** [Vikipedi — Ordo Aurum Solis](https://en.wikipedia.org/wiki/Ordo_Aurum_Solis), [Encyclopedia.com — Aurum Solis](https://encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/aurum-solis-order-sacred-word). Vikipedi makalesi bazı kısımlarda "kaynak gerekli" etiketi taşıyor; örgütün kendi tarih anlatımı için bağımsız akademik kaynakla kontrol et. Kitabın arka kapak ve ön sayfaları PDF'ten okundu.`,
        },
        {
          id: "pm-yapi",
          title: "Üç bölümlü yapı: ne nerede?",
          summary: "Esaslar, mekân ve araçlar, eylemde ritüeller: bölüm başlıklarının haritası.",
          body: `## Part One — Planetary Magick'in Esasları
- **Planetary Focal Points:** Gezegenler ve Qabalah, Dört Dünya, arketipler ve psişe, "Derin Zihnin güçleri".
- **Planetary Characters:** Kökler (antik miras, ortaçağ *Picatrix*), bugünkü (sosyal psikoloji) bakış ve "büyüsel süreç" (gezegen matrisinin kurulması).
- **Correspondences of Saturn / Jupiter / Mars / Sol / Venus / Mercury / Luna:** Her gezegen için Sephirah'ya bağlı "karakter tabloları" (Saturn–3. Sephirah… Luna–9. Sephirah, kitabın düzenine göre).
- **Times of Power:** gezegen zamanlaması, Ay evreleri ve mevsim akıntıları.

## Part Two — Çalışma Yeri ve Donanım
Çalışma yeri, lamen, giysi ve renk yükü, tütsü, "battery".

## Part Three — Eylemde ve Sonuçta Planet Magick
Işık mekânının hazırlanması, "güç derinlikleriyle" temas, "erdem iksiri" yaratımı; haftanın günleriyle uyum ritleri, gezegen küreleri boyunca yükseliş ve görüler, gezegensel Tarot kehaneti, "yürek arzusunun yedi katlı ritüeli", uzaktan "yardımsever gönderimler" ve "Olimpik Dream Evocation" ritüelleri.

## Bu modülün sınırı
Ritüel metinleri ve talimatları verilmez. Amaç, kitabı kendin okumadan önce **ne içerdiğini ve hangi gelenekten geldiğini** bilmendir.

## Çalışma
Bu ek modülde yer alan "zamanlama" fikrini Astroloji modülünün "gezegen saatleri" dersiyle karşılaştır.`,
          verification: `Başlıklar ve bölüm girişleri PDF içindekilerinden okundu. "Picatrix" atfı kitabın bölüm başlığında geçer. Ritüel içeriği ve tablo satırları ders metnine konmadı.`,
        },
      ],
      quiz: [
        qz("Kitabın yazarları kimdir?", ["Melita Denning ve Osborne Phillips", "Dion Fortune", "Israel Regardie", "Eliphas Lévi"], 0),
        qz("Kaynaklarda Ordo Aurum Solis hangi yıl kurulmuş gösterilir?", ["1897", "1497", "1947", "1987"], 0),
        qz("'Ogdoadic Tradition' hakkında doğru ifade hangisidir?", ["Düzenin kendi atfettiği bir gelenektir; bağımsız izlenebilirliği tartışmalıdır (Belirsiz)", "Tarihsel olarak kesinleşmiştir", "Antik Mısır tapınak kaydıdır", "Bir bilimsel disiplindir"], 0),
        qz("Kitabın Part One'ında hangi başlık vardır?", ["Times of Power", "Rite of the Heart's Desire", "Olympic Dream Evocation", "Magical Apparel"], 0),
        qz("Bu modül hangi içeriği vermez?", ["Ritüel metinleri ve talimatları", "Bölüm haritasını", "Yazar bağlamını", "Kaynak notlarını"], 0),
      ],
    },
    {
      id: "p2",
      title: "2. Gezegen Karşılıkları ve Zamanlama",
      description: "Kitabın karşılık tabloları mantığı ve diğer sistemlerle karşılaştırma.",
      lessons: [
        {
          id: "pm-karsilik",
          title: "Gezegen tabloları nasıl kurulmuş?",
          summary: "Her gezegen için bir Sephirah, bir 'karakter' ve çoklu karşılık sütunları.",
          body: `## Fikir

Kitap, her gezegeni bir **Sephirah'ya bağlayarak** ("Saturn — 3. Sephirah" gibi; kitabın içindekiler başlıklarında "Table of Attributions expressing the Character of the … Sephirah" geçer) ve çok sayıda karşılık (renk, metal, bitki, tütsü, hayvan, tanrı, melek, ruh vb.) sütunlayarak bir "gezegen matrisi" kurar. Kitabın savunduğu fikir: büyüyücü bu matrisi **hayal gücü ve duyularla** inşa ederek "Derin Zihni" uyarır.

## Kıyaslama için
| Sistem | Tutum |
|---|---|
| Crowley, 777 | Altın Şafak kökenli karşılıklar + Crowley'in eklemeleri (bkz. ek modül **777**) |
| Fortune, Mistik Kabala | Yöntem + Sephirah anlatımı (Okültizm 12. ünite) |
| Agrippa | Rönesans karşılıkları (Okültizm 3. ünite) |

Karşılıkların **kaynağı ve kapsamı** sistemden sisteme değişir; bu kitabın tabloları "yayımlanmamış malzeme" olarak sunulur — doğrulanabilir değildir.

## Çalışma
Bir gezegeni (ör. Venüs) seç; üç kaynakta (777, Fortune, Agrippa) hangi renk/bitki/metalin eşleştiğini tabloda karşılaştır.`,
          verification: `Başlık ve tablo mantığı PDF içindekilerinden. Diğer kaynakların karşılıkları bu ders metninde tek tek karşılaştırılmadı; çalışma olarak bırakıldı. "Yayımlanmamış malzeme" ifadesi kitabın tanıtım metnindedir.`,
        },
        {
          id: "pm-zaman",
          title: "'Times of Power': zamanlama fikri",
          summary: "Gezegensel zamanlama, Ay evreleri ve mevsim akıntıları.",
          body: `## Konu

Kitabın *Times of Power* bölümü şu alt başlıkları içerir: **Times and Seasons of Planetary Magick**, **Seasonal Tides and the Phases of the Moon**, **The Temporal Modes**. Yani çalışma için uygun zaman, **gezegen günü/saati, Ay evresi ve mevsim** ile ilişkilendirilir.

## Bağlantılar
- Bu sitedeki **Ay Takvimi**: evreleri ve ilk/son dördünleri gösterir.
- **Astroloji modülü, Atölye 1:** gezegen saatleri, Ay evre hesabı ve VOC dersleri.

## Eleştirel not
Gezegen saatlerinin Kaldean sırası ve haftanın günleri geleneksel bir **zamanlama sistemidir**; bu zamanların "daha etkili" olduğuna dair bağımsız kanıt yoktur. Sistemi bir **planlama disiplini** olarak kullanmak (haftalık ritim, günlük odak) pratik değer sağlayabilir; mistik iddia ise yazarın çerçevesidir.

## Çalışma
Bir haftalık "gezegen günü planı" yap (Pzt Ay, Sal Mars, Çar Merkür, Per Jüpiter, Cum Venüs, Cmt Satürn, Paz Güneş); her güne kendi odaklarını yaz.`,
          verification: `Alt başlıklar PDF içindekilerinden. Haftanın günleri–gezegen eşleşmesi geleneksel ve yaygın bilgidir (Astroloji modülü, gezegen saatleri dersi). "Daha etkili" iddiasına dair kanıt bulunmadığı belirtilmiştir.`,
        },
      ],
      quiz: [
        qz("Haftanın gününe karşılık gelen gezegen eşleşmesi hangisidir?", ["Perşembe—Jüpiter", "Salı—Venüs", "Cuma—Satürn", "Pazar—Ay"], 0),
        qz("Kitapta zamanlama bölümünün adı nedir?", ["Times of Power", "Hours of Silence", "Calendar of Gods", "Day of Wrath"], 0),
        qz("Bu kitabın tabloları için doğru değerlendirme hangisidir?", ["Bağımsız doğrulanamayan, yazarların sunduğu karşılıklardır", "Tarihsel olarak kesinleşmiş verilerdir", "Bilimsel ölçümlerdir", "Devlet kayıtlarıdır"], 0),
        qz("Zamanlama sistemini 'planlama disiplini' olarak kullanmanın avantajı nedir?", ["Haftalık ritim ve odak sağlar", "Gezegenleri değiştirir", "Hava durumunu belirler", "Yasal güvence verir"], 0),
        qz("Bu modül ritüel metinleri için neyi sağlar?", ["Bölüm haritası ve kaynak eleştirisini; talimatı değil", "Adım adım talimatı", "Satış fiyatlarını", "Tıbbi reçeteyi"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Ritüel metinleri (Hazırlık, Güç-Derinliklerle temas, Elixir, Ascent and Vision, Sending, Olympic Evocation vb.):** Uygulama talimatı olarak verilmedi.
- **Gezegen tablolarının satırları (renk, metal, bitki, tütsü, melek/ruh adları):** Çoğu "yayımlanmamış malzeme" olarak sunulur; bağımsız doğrulama bulunmuyor.
- **Aurum Solis'in 'bin yıllık' tarihsel geçmişi:** Bağımsız akademik kaynakla doğrulanamadı; yazarların beyanı olarak işaretlendi.
- **Tarot ve ayna büyüsü bölümleri:** Başlık düzeyinde belirtildi; içerik taranmadı.`,
});
