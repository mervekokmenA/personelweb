import type { LearningModule, Lesson, Unit } from "./types";
import { lesson, web, book, tool, own } from "./helpers";
import lessonsData from "@/data/learning/astrology-lessons.json";

interface AstroLesson {
  n: number;
  title: string;
  body: string;
}
const data = lessonsData as unknown as AstroLesson[];

function firstSentences(text: string, max = 190): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastDot = cut.lastIndexOf(".");
  return (lastDot > 80 ? cut.slice(0, lastDot + 1) : cut.trimEnd() + "…");
}

function dersler(from: number, to: number): Lesson[] {
  return data
    .filter((d) => d.n >= from && d.n <= to)
    .map((d) =>
      lesson(`d${d.n}`, `Ders ${d.n} — ${d.title}`, firstSentences(d.body), {
        bodyRef: d.n,
        minutes: 105,
      })
    );
}

const astro = (id: string, title: string, description: string, from: number, to: number): Unit => ({
  id,
  title,
  description,
  lessons: dersler(from, to),
});

const astrocom = tool("Astro.com — harita çizimi ve efemeris", "https://www.astro.com", "Ücretsiz natal harita, transit ve ilerletme; tropikal/sidereal seçimi.");
const swisseph = tool("Swiss Ephemeris", "https://www.astro.com/swisseph/", "Profesyonel yazılımların kullandığı efemeris kütüphanesi.");
const stellarium = tool("Stellarium Web", "https://stellarium-web.org", "Gerçek gökyüzü simülasyonu; burç ≠ takımyıldız farkını görmek için.");
const timeanddate = tool("timeanddate.com — Ay evreleri ve gün doğumu/batımı", "https://www.timeanddate.com/moon/phases/", "Gezegen saatleri için gün doğumu/batımı verisi.");
const tetrabiblos = web("Ptolemy — Tetrabiblos (Loeb çevirisi, kamu malı)", "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ptolemy/Tetrabiblos/home.html", "Antik astroloji metni; İngilizce.");
const brennan = book("Hellenistic Astrology: The Study of Fate and Fortune", "Chris Brennan", "Helenistik tekniklerin modern ve kapsamlı kaynağı.");
const forrest = book("The Inner Sky", "Steven Forrest", "Evrimsel/psikolojik natal yorumlamaya giriş.");
const hand = book("Horoscope Symbols", "Robert Hand", "Modern astrolojinin klasik referansı.");
const rudhyar = book("The Astrology of Personality", "Dane Rudhyar", "Hümanistik/transpersonal astrolojinin kurucu metni.");
const bailey = book("Esoteric Astrology (A Treatise on the Seven Rays, Cilt III)", "Alice A. Bailey", "Ezoterik astrolojinin Bailey çizgisi; Lucis Trust.");
const schulman = book("Karmic Astrology (4 cilt)", "Martin Schulman", "Düğümler ve karmık yorum dili.");
const george = book("Astrology and the Authentic Self", "Demetra George", "Natal yorumda bütünleşik yaklaşım.");
const greene = book("Saturn: A New Look at an Old Devil", "Liz Greene", "Psikolojik astrolojide Satürn.");
const lilly = book("Christian Astrology", "William Lilly", "Horary astrolojinin klasiği; 1647.");

export const astrologyModule: LearningModule = {
  id: "astroloji",
  title: "Ezoterik Astroloji",
  tagline: "Natal astrolojiden ezoterik/okült astrolojiye, ay döngüleri ve ritüel zamanlamasına",
  description:
    "Astroloji ve ezoterik astroloji; ay döngüleri, gezegen saatleri, ay konakları ve ritüel zamanı hesaplama dahil. Çekirdeği yüklediğin 49 dersten oluşan 'Kaynak Temelli Ders Kitabı'dır; üzerine uygulama atölyeleri, ileri teknikler ve kaynak kütüphanen eklenmiştir.",
  icon: "moon",
  disclaimer:
    "Astroloji, karma, yedi ışın, astral ışık ve ritüel zamanlama sembolik/ezoterik gelenek öğretileridir; bilimsel olarak doğrulanmış mekanizmalar olarak sunulmaz. Her konuda ekolü (klasik, modern psikolojik, karmık, Bailey, Hermetik) ayırt etmeyi öğren.",
  competencies: [
    "Bir natal haritayı (burç, gezegen, ev, açı, dignities, dispositor zinciri, majör göstergeler) baştan sona sentezleyerek okuyabilirim.",
    "Tropikal/sidereal, Placidus/Whole Sign gibi seçimlerin yorumu nasıl değiştirdiğini gerekçelendirebilirim.",
    "Klasik, modern psikolojik, karmık/evrimsel ve ezoterik (Bailey) ekolleri birbirinden ayırıp aynı göstergeyi her ekolde yorumlayabilirim.",
    "Transit, ikincil ilerletme, solar return ve sinastri tekniklerini kullanırım.",
    "Ay fazını, burcunu ve void-of-course durumunu efemerisle okur; 8 fazlı Ay döngüsüne göre plan yaparım.",
    "Gezegen saatlerini (Chaldean sırası) el ile hesaplar, bir ritüel için eleksiyon (zaman seçimi) kontrol listesi uygularım.",
    "Hermetik, Kabalistik ve gezegen–metal–bitki–renk karşılıkları (correspondences) sistemlerini kaynaklarıyla ilişkilendirebilirim.",
    "Horary (saatler) astrolojisinin temel mantığını ve sınırlarını açıklayabilirim.",
    "Kaynak okurken iddiayı 'teknik / tarihsel inanç / psikolojik model / ezoterik öğreti' diye sınıflandırır, aşırı yorumdan kaçınırım.",
    "En az 30 farklı haritayı kayıtlı şablonla yorumlayıp günlüğüme işlemiş olurum.",
  ],
  tracks: [
    {
      id: "main",
      title: "Ana Ders Kitabı (49 Ders)",
      description: "Yüklediğin 49 haftalık kaynak temelli ders kitabı; her ders anlatım + kaynak okuma + harita uygulaması + kontrol soruları içerir.",
      units: [
        astro("m1", "Modül 1 — Astrolojinin Temel Dili", "Makrokozmos–mikrokozmos, zodyak, gezegenler, üç ışık noktası.", 1, 4),
        astro("m2", "Modül 2 — Zodyak ve Burçların Anatomisi", "Element, nitelik, burçta gezegen, kutuplar.", 5, 7),
        astro("m3", "Modül 3 — Evler ve Harita Mimarisi", "Ev sistemleri, yöneticiler, dispositor zinciri, stellium.", 8, 11),
        astro("m4", "Modül 4 — Açılar ve Geleneksel Teknikler", "Açılar ve kalıplar, dignities, retrograd, Ay fazları.", 12, 16),
        astro("m5", "Modül 5 — Kişisel ve Sosyal Gezegenler", "Merkür'den Satürn'e.", 17, 21),
        astro("m6", "Modül 6 — Dış Gezegenler ve Modern Astroloji", "Uranüs, Neptün, Plüton.", 22, 24),
        astro("m7", "Modül 7 — İleri Göstergeler ve Karmık Astroloji", "Şiron, Ay Düğümleri, sabit yıldızlar, karma, Satürn–Ay.", 25, 29),
        astro("m8", "Modül 8 — Ezoterik Astrolojiye Giriş", "Ekzoterik/ezoterik harita, yedi ışın, ezoterik yöneticilikler, üç haç.", 30, 33),
        astro("m9", "Modül 9 — Okült Astroloji ve Zaman", "Ay'ın okült işlevi, ritüel zamanlama, gezegen saatleri, Ay konakları.", 34, 36),
        astro("m10", "Modül 10 — Hermetik, Kabalistik ve Correspondence Sistemleri", "Hermetik temel, Sephiroth, correspondence, eleksiyon.", 37, 40),
        astro("m11", "Modül 11 — Karmık/Evrimsel ve Bailey Derinleşmesi", "Dış gezegenlerin ezoterik yorumu, karmık hikâye, Schulman, Bailey.", 41, 48),
        astro("m12", "Modül 12 — Final Sentez", "Bir natal haritayı baştan sona okuma.", 49, 49),
      ],
    },
    {
      id: "atolye",
      title: "Uygulama Atölyeleri (Ay Döngüsü ve Ritüel Zamanı)",
      description: "Ders kitabına ek: hesaplama ve gözlem pratiği. Bunlar 5 yıllık deneyimi oluşturan sürekli uygulamalardır.",
      units: [
        {
          id: "w1",
          title: "Atölye 1 — Ay Döngüsü ve Ritüel Zamanı Hesaplama",
          description: "Efemeris okumadan gezegen saatlerine ve eleksiyona uzanan hesaplama pratiği.",
          lessons: [
            lesson("ay-gunlugu", "Ay günlüğü: 13 aylık gözlem", "Her gün Ay'ın evresini, burcunu, yükseliş/batış saatini ve kendi ruh halini kaydet. 13 sinodik ay (≈ 1 yıl) sonunda kalıpları çıkar.", {
              tasks: ["Tablo: tarih, evre, burç, void-of-course var mı, ruh hali/rüya notu.", "Her yeni ay ve dolunayda tek sayfa kısa değerlendirme yaz."],
              resources: [timeanddate, own("Ay Takvimleri ve Şifa Webinarı", "Ay_Takvimleri_Webinar_.pdf", "Faz–beden–besin ilişkisi ve takvim oluşturma"), own("Ay Büyüsü (Moon Magic)", "Ay_Buyusu...pdf", "Evreler, yeni ay/dolunay çalışmaları")],
            }),
            lesson("ay-faz-hesap", "Ay fazını ve burcunu efemerisle hesaplama", "Güneş–Ay açısal uzaklığı (elongasyon) ile 8 faz: yeni ay 0°, hilal ≈ 45°, ilk dördün 90°, şişkin ay ≈ 135°, dolunay 180°, … Efemeriste Ay'ın burcunu ve derecesini oku.", {
              tasks: ["Astro.com efemerisinden bu ayın Güneş ve Ay boylamlarını al; elongasyonu kendin hesaplayıp fazı belirle.", "Aynı hesabı bir tarih için elle yapıp Astro.com ile karşılaştır."],
              resources: [astrocom, swisseph],
            }),
            lesson("voc", "Void-of-course Ay ve zamanlama kuralları", "Ay'ın bulunduğu burçta son majör açısını yaptıktan sonra yeni burca geçene kadarki süre. Klasik gelenek bu aralıkta yeni iş başlatmamayı önerir; tartışmalıdır — kendi gözlemlerinle test et.", {
              tasks: ["Bir ay boyunca VOC aralıklarını işaretle ve bu saatlerde başlattığın şeylerin sonucunu günlüğüne yaz."],
              resources: [lilly],
            }),
            lesson("gezegen-saatleri", "Gezegen saatlerini hesaplama (Chaldean sırası)", "Gün doğumundan gün batımına gündüz 12, gün batımından ertesi gün doğumuna gece 12 'gezegen saati'; saat süresi = (batış − doğuş)/12 (gece için ters). Gün yöneticisi gün doğumunda başlar; sıra Chaldean düzeni: Satürn → Jüpiter → Mars → Güneş → Venüs → Merkür → Ay. Pazar=Güneş, Pazartesi=Ay, Salı=Mars, Çarşamba=Merkür, Perşembe=Jüpiter, Cuma=Venüs, Cumartesi=Satürn.", {
              tasks: ["Bulunduğun şehir için bugünün gün doğumu/batımını al ve 24 gezegen saatinin başlangıç–bitiş tablosunu elle çıkar.", "Venüs saati + Cuma kombinasyonunu bulup bir hafta içinde kaç kez oluştuğunu say."],
              resources: [timeanddate, own("Okült Astroloji ve Ritüel Zamanlama (Ders 35)", "49 haftalık ders kitabı", "Planetary hours ve Chaldean order")],
            }),
            lesson("konaklar", "28 Ay konağı (Lunar mansions)", "Ay'ın 28 günlük yolculuğunun Arap/Hint/Çin geleneklerindeki bölümleri; ritüel ve eleksiyon kullanımları, kaynak farklılıkları.", {
              tasks: ["Derstekileri kullanarak doğum Ay'ının bulunduğu konağı bul ve tablodaki ad/başlangıç bilgilerini kendi notuna yaz."],
              resources: [web("Esoteric Archives (Agrippa ve grimuar metinleri)", "https://www.esotericarchives.com", "Ay konakları için tarihsel metinler (İngilizce).")],
            }),
            lesson("eleksiyon", "Eleksiyon: ritüel/başlangıç için tarih seçme", "Kontrol listesi: Ay güçlü ve uygun fazda mı, VOC değil mi, yükselen ve yöneticisi iyi durumda mı, gezegen günü/saati amaca uygun mu, retrograd/tutulma var mı, Merkür–Mars–Satürn zorlayıcı açıları var mı?", {
              tasks: ["Önümüzdeki 30 gün için üç farklı amaç (öğrenme, para işi, şifa) seç; her biri için en uygun 3 tarih/saat adayını çıkarıp gerekçelerini yaz."],
              resources: [web("Astro.com — Gün ve saat bazlı astrolojik takvimler", "https://www.astro.com", "Efemeris ve transit tabloları.")],
            }),
            lesson("tutulma", "Tutulmalar ve Ay Düğümleri döngüsü", "Saros döngüsü (≈ 18 yıl 11 gün), düğüm eksenindeki tutulma aileleri, tutulmaların natal harita üzerindeki etkisi (gelenekte).", {
              resources: [astrocom],
            }),
          ],
        },
        {
          id: "w2",
          title: "Atölye 2 — İleri Teknikler ve Sürekli Harita Pratiği",
          description: "Natal sonrası zamanlama teknikleri ve düzenli çalışma alışkanlığı.",
          lessons: [
            lesson("transit", "Transitler", "Güncel gezegen konumlarının natal harita üzerindeki etkileşimi; dönüş döngüleri (Satürn dönüşü ≈ 29,5 yıl, Jüpiter ≈ 12 yıl).", {
              tasks: ["Son 5 yılının önemli olaylarını transitlerle eşleştirip 1 sayfalık retrospektif yaz; neyin uyup neyin uymadığını dürüstçe not et."],
              resources: [astrocom, hand],
            }),
            lesson("progressions", "İkincil ilerletmeler ve solar return", "'Bir gün = bir yıl' ilerletmesi, ilerletilmiş Ay ve evre; Güneş dönüşü haritası ve yıllık tema.", {
              resources: [astrocom, forrest],
            }),
            lesson("synastry", "Sinastri ve kompozit harita", "İki harita arasındaki açılar, ev yerleşimleri, kompozit orta noktalar; sınırlar ve etik.", {
              resources: [hand, george],
            }),
            lesson("horary", "Horary (Saatler) astrolojisi", "Sorunun sorulduğu anın haritası; imza (significator) seçimi, 'okunabilirlik' koşulları, klasik kurallar. Lilly'nin çizgisini ve modern uygulamayı karşılaştır.", {
              tasks: ["Sadece net, gerçek bir soru için 5 horary haritası kur ve sonuç netleşince doğruluğu kayda geçir."],
              resources: [lilly, own("Saatler Astrolojisi ile Kehanet Sanatı", "saatler-astrolojisi.pdf", "Metin Kiraz; Türkçe horary kaynağı")],
            }),
            lesson("hellenistic", "Helenistik teknikler: profection ve zodiacal releasing", "Yıllık profection ile 'yılın yöneticisi', ev/gezegen zamanlaması; modern astrolojide yeniden keşfi.", {
              resources: [brennan, tetrabiblos],
            }),
            lesson("vedic", "Vedik (Jyotish) astrolojiye giriş", "Sidereal zodyak, nakshatralar, dasha sistemleri; Batı astrolojisiyle ortak ve ayrışan noktalar.", {
              resources: [own("Kahinlerin Astrolojisi (Vedik/Hindu Astrolojisi Rehberi)", "kahinlerin-astrolojisi.pdf", "David Frawley")],
            }),
            lesson("harita-gunlugu", "30 harita pratiği (sürekli çalışma)", "Kendi, yakınlarının (izinle) ve biyografisi bilinen kişilerin haritalarını aynı şablonla yorumla; sonuçla biyografiyi karşılaştır.", {
              tasks: ["Her haritaya: Büyük Üçlü, dominant element/nitelik, stellium/kalıplar, ev yöneticileri, ana gerilim, ezoterik not."],
            }),
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "natal-sentez",
      title: "Kendi Natal Haritanın Kitabı",
      level: "Orta",
      hours: 40,
      description: "49 dersin her biri için kendi haritandan bir bölüm yazarak 'kişisel harita kitabı' oluştur.",
      features: ["Her ders için harita uygulaması çıktısı", "Klasik/modern/karmık/ezoterik yorum karşılaştırma tablosu", "Final sentezi (Ders 49)"],
      skills: ["sentez", "kaynak sınıflandırma", "yorum disiplini"],
      steps: ["Haritayı Astro.com'da üret (tropikal + Whole Sign ve Placidus)", "Ders notu şablonunu her derste doldur", "Çelişkileri ve belirsizlikleri ayrı bir sayfada topla", "Final: tek sayfalık sentez"],
      done: ["Her yorum için dayanak gösteriliyor", "Aşırı yorum riski olan çıkarımlar işaretlenmiş"],
    },
    {
      id: "ritual-calendar",
      title: "Yıllık Ritüel Takvimi (Ay + Gezegen Saati)",
      level: "Orta",
      hours: 25,
      description: "Bir yıllık yeni ay/dolunay, VOC ve gezegen günü/saati tablosunu kendin hesaplayıp takvim haline getir.",
      features: ["13 sinodik ay tablosu", "Mevsim kapıları ve tutulmalar", "Amaç → gün/saat eşleme tablosu"],
      skills: ["efemeris okuma", "gezegen saati hesabı", "eleksiyon"],
      steps: ["Efemerisden yıl verilerini topla", "Gezegen saati hesaplayıcısını (tablo/elektronik tablo) kur", "Her ay için amaç-zaman önerileri yaz", "Yıl sonunda gözlemleri değerlendir"],
    },
  ],
  library: [
    own("Ezoterik Astroloji", "ezoterik-astroloji_oguzhan_ceyhan.pdf", "Oğuzhan Ceyhan, Destek Yayınları — Türkçe ezoterik astroloji temeli", "Oğuzhan Ceyhan"),
    own("Kahinlerin Astrolojisi (Vedik / Hindu Astrolojisi Rehberi)", "kahinlerin-astrolojisi-vedik...pdf", "Astrolojinin Doğu–Batı karşılaştırması", "David Frawley"),
    own("Kadim Astroloji Bilgileri", "Kadim_Astroloji_Bilgileri.pdf", "Zodyak ve burçların kadim kültürlerdeki yeri (12 sayfa)"),
    own("Dört Astrolojik Element ve Homeopatik Anayasalar", "Dort_Astrolojik_Element_Ve_Homeopatik_Anayasalar.pdf", "Elementler ve mizaçlar (22 sayfa)"),
    own("Elementler ve Elementler–Nitelikler", "ElementLer_PDF.pdf / Elementler_-_Nitelikler.pdf", "Ateş/Toprak/Hava/Su ve Öncü/Sabit/Değişken"),
    own("Ay Takvimleri ve Şifa Webinarı", "Ay_Takvimleri_Webinar_.pdf", "Deneysel Astroloji / Kenan Yasin; faz, burç–beden eşleşmeleri"),
    own("Ay Büyüsü (Moon Magic)", "Ay_Buyusu_-_Ayin_Mistik_Enerjisinden_Yararlanmak_Icin_Tam_Rehberiniz.pdf", "Simon & Schuster e-kitabı, Türkçe çeviri; Ay evreleri ve ritüeller"),
    own("Saatler Astrolojisi ile Kehanet Sanatı", "saatler-astrolojisi.pdf", "Metin Kiraz; horary kaynağı (241 sayfa)", "Metin Kiraz"),
    own("Aleister Crowley'in Tüm Astrolojik Yazıları (Liber 536 vb.)", "aleister-crowley-in-tum-astrolojik-yazilar.pdf", "Ed. John Symonds & Kenneth Grant; Duckworth 1974; Türkçe (250 sayfa) — Crowley'in astroloji yorum dili", "Aleister Crowley"),
    own("Temel Astrolojik Yapı — Doğum Haritasının Hesaplanması", "temel-astroloji-aysel-ozturk.pdf", "Aysel Öztürk, Bilim Teknik Yayınevi, 2001 (164 sayfa) — el ile harita hesaplama", "Aysel Öztürk"),
    own("Gezegen Magisi (Planetary Magick; dosya adı: incensi-planetari-moderni)", "incensi-planetari-moderni.pdf", "661 sayfa — gezegen magisi; içeriği doğrulanmadı; gezegen saatleri için ayrıca bkz. Atölye 1"),
    own("EZOTERİK & OKÜLT ASTROLOJİ — 49 Haftalık Kaynak Temelli Ders Kitabı", "ezoterik_okult_astroloji_49_haftalik_KAYNAK_DERS_KITABI.md", "Bu modülün çekirdek müfredatı (sitede ders ders açılır)"),
    own("Lirvian E. — Verilen Araştırmalar, Kendim İçin Kısa Notlar", "Lirvian_E._Verilen_Araştırmalar.pdf", "Kişisel notlar: astroloji temelleri, elementler, ses/ritim vb. (90 sayfa)"),
  ],
  resources: [
    astrocom, swisseph, stellarium, timeanddate, tetrabiblos, brennan, forrest, hand, rudhyar, greene, schulman, george, bailey, lilly,
    web("Lucis Trust — Alice Bailey eserleri", "https://www.lucistrust.org", "Bailey kitaplarının yayıncısı; ezoterik astroloji kaynakları."),
  ],
};
