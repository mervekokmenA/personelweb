import { extraModule } from "./builder";
import { qz } from "../helpers";

export const turkceAstrolojiModule = extraModule({
  id: "ek-turkce-astroloji-kitaplari",
  title: "Türkçe Astroloji Ders Kitapları: Öztürk (Temel Yapı) ve Kiraz (Saatler Astrolojisi)",
  tagline: "Doğum haritası hesabının astronomik temeli ve soru (horary) astrolojisinin yöntemi + ritüel eklentilerinin eleştirisi",
  description:
    "Yüklediğin iki Türkçe astroloji kitabının ek modülü: Aysel Öztürk, 'Temel Astrolojik Yapı: Astrolojide Temel Bilgiler ve Doğum Haritasının Hesaplanması' (Bilim Teknik, 2001) ve Metin Kiraz, 'Saatler Astrolojisi ile Kehanet Sanatı' (Epsilon, 2002). Modül her kitabın bölümlerini haritalar, astronomik/zamansal temelleri doğrular ve horary yöntemini klasik kaynaklarla (Lilly) ilişkilendirir.",
  source: {
    file: "temel-astroloji-aysel-ozturk-pdf-indir-12468-booksfer.net.pdf; saatler-astrolojisi.pdf",
    author: "Aysel Öztürk (Bilim Teknik 2001); Metin Kiraz (Epsilon 2002)",
    language: "Türkçe",
    pages: 396,
    readNote: "Her iki kitabın künyesi ve içindekiler tabloları okundu; Öztürk'ün zaman faktörleri ve Kiraz'ın 'Saatler Astrolojisi ve Kaynağı', 'Geçerlilik Testleri' başlıkları haritalandı. Bölüm gövdeleri ve örnek soru yorumları derse konmadı.",
  },
  units: [
    {
      id: "t1",
      title: "1. Öztürk: Temel Astrolojik Yapı ve Hesaplama",
      description: "Gökyüzü koordinatları, zaman sistemleri ve gezegenler.",
      lessons: [
        {
          id: "ta-ozturk-yapi",
          title: "Kitabın yapısı: astronomi, zaman, gezegenler",
          summary: "Meridyen, ufuk, ekliptik, zodyak, göksel boylam/enlem, zaman faktörleri ve gezegen tanımları.",
          body: `## Künye
*Temel Astrolojik Yapı — Astrolojide Temel Bilgiler ve Doğum Haritasının Hesaplanması*, **Aysel Öztürk**, **Bilim Teknik Yayınevi**, 1. baskı **Şubat 2001**.

## İçindekilerden harita
- **Dünya: Astrolojinin başlangıç noktası** — meridyen, ufuk, yer yuvarlağı ve göksel ekvatorlar.
- **Ekliptik ve zodyak** — göksel boylam ve enlem.
- **Zaman faktörleri** — zaman yapıları ve ritimleri; **tropikal yıl**, **takvim/sivil yıl**, **ay ve hafta**, **gün**, **yıldız zamanı**, **görünür Güneş zamanı**, **yerel ortalama Güneş zamanı**, **Greenwich Ortalama Zamanı**, **Evrensel Zaman**, **zaman eşitlemesi**, **standart/bölge zamanı**, **yaz saati**, **efemeris zamanı**.
- **Gezegenler** — özel işlevler; Güneş, Ay, Merkür, Venüs, Mars, Jüpiter, Satürn, Uranüs (diğerleri izleyen sayfalarda).
- (Kitabın alt başlığı ve sonraki bölümler doğum haritasının hesaplanmasına ayrılmıştır.)

## Neden değerli?
Doğum haritası hesabı **astronomi ve zaman ölçümü** bilgisi gerektirir. Kitabın erken bölümleri bu temeli (yıldız zamanı, yerel ortalama zaman, zaman eşitlemesi, GMT/UT) sistematik anlatır. Bu sitenin Astroloji sayfası aynı hesapları kütüphane (astronomy-engine) ile otomatik yapar; kitap **neden ve nasıl** olduğunu anlamak için iyi bir arka plandır.

## Çalışma
Kitabın zaman faktörleri başlıklarını kullanarak bir doğum saatini **yerel saatten UT'ye** çevir; sitenin Astroloji sayfasında girdiğin tarihle sonucu kıyasla.`,
          verification: `Künye ve içindekiler PDF'ten okundu (tablodaki sayfa numaraları taranmıştır). Zaman sistemlerinin tanımları (UT, yıldız zamanı, zaman eşitlemesi) standart astronomi bilgisidir. Kitabın hesap örnekleri bu derste çözülmedi.`,
        },
      ],
      quiz: [
        qz("Öztürk'ün kitabının yayınevi hangisidir?", ["Bilim Teknik Yayınevi", "Epsilon", "Destek", "Mavi Kalem"], 0),
        qz("Kitapta zaman faktörleri içinde hangisi geçer?", ["Yıldız zamanı ve zaman eşitlemesi", "Burç yorumları", "Tarot", "Rünler"], 0),
        qz("Greenwich Ortalama Zamanı'nın modern karşılığı olarak hangisi anılır?", ["Evrensel Zaman (UT)", "Yaz saati", "Efsane zaman", "Yerel zaman"], 0),
        qz("Doğum haritası hesabı için hangi bilgi şarttır?", ["Doğum tarihi, saati ve yeri", "Yalnızca burç", "Yalnızca isim", "Yalnızca yaş"], 0),
      ],
    },
    {
      id: "t2",
      title: "2. Kiraz: Saatler (Soru) Astrolojisi",
      description: "Horary yönteminin yapısı; klasik kaynak; ritüel eklentileri.",
      lessons: [
        {
          id: "ta-kiraz-yontem",
          title: "Soru astrolojisinin adımları ve geçerlilik testleri",
          summary: "Soru horoskopu, geçerlilik testleri (VOC, Via Combusta, combustion…), belirleyici seçimi.",
          body: `## Künye
*Saatler Astrolojisi ile Kehanet Sanatı* — **Metin Kiraz**, **Epsilon Yayıncılık**, 1. baskı **Ocak 2002**. Kitabın "Saatler Astrolojisi" terimi **soru (horary) astrolojisi**dir: bir sorunun sorulduğu ana ait harita çıkarılır ve yorumlanır.

## İçindekiler
- **Kısım I:** Saatler astrolojisi ve danışma; kaynağı; **teoriler** (eşzamanlılık, "asıralizm", "astralizm"); astrolog ve sezgi; sorunun gücü ve kapsamı.
- **Kısım II:** Seans öncesi şartlar; **astrolog formunun yaratılması**; **ritüel kişiliği, ritüel yeri (kutsal mabet), ritüel zamanı**.
- **Kısım III:** Astroloji seansı: majikal ortam, konsantrasyon, meditasyon, **soru horoskopunun hesabı**; **planet saatleri hesabı**.
- **Kısım IV:** Yorum modelleri — **geçerlilik testleri**: *Ay'ın seyir dışı kalması (Void of Course)*, **Yükselen noktanın burç kesitinde olması**, **Satürn ve astroloğun yetersizliği (7. evde Satürn)**, **combustion**, saat yöneticisiyle uyumsuzluk, **Via Combusta**, Ay'ın burcun sonuna düşmesi; sonra **belirleyicilerin seçimi** (birincil/ikincil).
- **Kısım V:** Tipik soru ve yorum örnekleri; **Kısım VI:** ekler.

## Klasik kaynakla ilişki
Geçerlilik testleri, **William Lilly**'nin *Christian Astrology* (1647) kitabındaki **"yargılamadan önceki değerlendirmeler" (considerations before judgment)** geleneğinden gelir: Ay'ın boşluğu, yükselenin çok erken/geç derecede olması, Satürn'ün 7. evde bulunması, Via Combusta (Terazi 15°–Akrep 15°) vb. Bu bölüm **gerçek bir tarihsel yöntem**dir.

## Kitabın özgün eklentileri
"Astrolog formu", "kutsal mabet", "majikal niyet", "ritüel veya dua" gibi bölümler **Lilly'nin yönteminde yoktur**; yazarın kendi eklediği **ritüel çerçevedir** (Kısım II–III).

## Eleştirel not
Horary astrolojinin **kestirim başarısı bağımsız olarak doğrulanmamıştır**; kitabın "kehanet" iddiaları kanıtlanmış değildir. "Eşzamanlılık" (Jung) ile açıklama bir **yorumdur**, bilimsel açıklama değil.

## Çalışma
Soru astrolojisi geçerlilik testlerini (VOC, Via Combusta vb.) Astroloji modülü Atölye 1–2'deki "VOC" ve "horary" derslerinin içeriğiyle eşleştir.`,
          verification: `Künye ve içindekiler PDF'ten okundu. Lilly'nin considerations geleneği Astroloji modülü atölye derslerinde yer alır (kaynak: William Lilly, *Christian Astrology*, 1647). Ritüel eklentilerinin Lilly'de bulunmadığı kitabın içindekilerinden ve Lilly'nin bilinen yönteminden çıkarılan bir değerlendirmedir; Lilly metniyle satır satır karşılaştırılmadı. Kestirim başarısına dair kanıt bulunmamaktadır.`,
        },
      ],
      quiz: [
        qz("'Saatler Astrolojisi' bu kitapta neyi ifade eder?", ["Soru (horary) astrolojisi", "Doğum astrolojisi", "Burç yorumu", "Takvim hesabı"], 0),
        qz("Via Combusta hangi aralıktır?", ["Terazi 15° – Akrep 15°", "Koç 0° – Boğa 0°", "Yay 15° – Oğlak 15°", "Kova 0° – Balık 0°"], 0),
        qz("Geçerlilik testlerinin klasik kaynağı kimdir?", ["William Lilly", "Aleister Crowley", "Dion Fortune", "Eliphas Lévi"], 0),
        qz("'Astrolog formu / kutsal mabet' bölümleri için doğru ifade nedir?", ["Yazarın eklediği ritüel çerçevedir; klasik horary'de yoktur", "Lilly'nin yöntemidir", "Bilimsel bir gerekliliktir", "Devlet standardıdır"], 0),
        qz("Horary astrolojinin kestirim başarısı için ne söylenebilir?", ["Bağımsız olarak doğrulanmamıştır", "Laboratuvarda kanıtlanmıştır", "Tıp onaylamıştır", "Matematik teoremidir"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Öztürk'ün gezegen/burç/ev yorum bölümleri ve doğum haritası hesap örnekleri:** Yorumlar geleneksel iddialardır; hesap örnekleri bu derste çözülmedi. Hesap için sitenin Astroloji sayfası kullanılabilir.
- **Kiraz'ın 'astrolog formu', ritüel, majikal niyet, meditasyon bölümleri:** Uygulama talimatı olarak verilmedi; doğrulanamaz.
- **Soru türleri, tipik soru yorumları ve örnek çözümler:** Yorum iddiaları; bağımsız doğrulama yok.
- **'Eşzamanlılık, asıralizm, astralizm' teorileri:** Yazarın kavramsal çerçevesi; bilimsel olarak doğrulanmadı.
- **İki kitabın sayfa numaralarının kesinliği:** Taranmış içindekilerde bozukluk var.`,
});
