import type { LearningModule } from "./types";
import { lesson, web, book, own } from "./helpers";

const sacredTexts = web("Sacred-Texts Arşivi — Ezoterizm", "https://sacred-texts.com/eso/index.htm", "Kamu malı klasikler (Mead, Waite, Mathers, Agrippa bölümleri vb.).");
const esotericArchives = web("Esoteric Archives (Joseph H. Peterson)", "https://www.esotericarchives.com", "Grimuarlar, Agrippa, Dee/Enochian metinleri; akademik titizlikte dijital edisyonlar.");
const copenhaver = book("Hermetica", "Brian P. Copenhaver", "Corpus Hermeticum'un akademik İngilizce çevirisi ve notları (Cambridge UP).");
const yates = book("Giordano Bruno and the Hermetic Tradition", "Frances A. Yates", "Rönesans Hermetizmi'nin tarihsel çerçevesi.");
const hanegraaff = book("Western Esotericism: A Guide for the Perplexed", "Wouter J. Hanegraaff", "Alanın akademik haritası; eleştirel okuma için başlangıç.");
const faivre = book("Access to Western Esotericism", "Antoine Faivre", "Ezoterik düşüncenin dört temel özelliği.");
const davies = book("Grimoires: A History of Magic Books", "Owen Davies", "Grimuar geleneğinin tarihi.");
const hutton = book("The Triumph of the Moon", "Ronald Hutton", "Modern Pagan cadılığın (Wicca) tarihi; kaynak eleştirisi için örnek.");
const agrippa = book("Three Books of Occult Philosophy", "Heinrich Cornelius Agrippa", "Rönesans magisinin temel derlemesi; ücretsiz çevrimiçi kopyaları var (Esoteric Archives, Sacred-Texts).", "https://www.esotericarchives.com/agrippa/agrippa3.htm", true);
const regardieGD = book("The Golden Dawn", "Israel Regardie", "Altın Şafak sisteminin tam müfredatı (derecelendirilmiş çalışma programı).");
const regardiePillar = book("The Middle Pillar", "Israel Regardie", "Kabalistik ışık/enerji meditasyonu; psikolojik çerçeve.");
const fortuneQ = book("The Mystical Qabalah", "Dion Fortune", "Hayat Ağacı için en çok okunan modern giriş.");
const fortunePsy = book("Psychic Self-Defense", "Dion Fortune", "Koruma ve psikolojik denge üzerine klasik.");
const kaplan = book("Sefer Yetzirah: The Book of Creation", "Aryeh Kaplan", "Yaratılış Kitabı; yorumlu çeviri.");
const scholem = book("Major Trends in Jewish Mysticism", "Gershom Scholem", "Kabala'nın tarihsel/akademik temel kitabı.");
const jungAlchemy = book("Psychology and Alchemy (Toplu Eserler Cilt 12)", "C. G. Jung", "Simyanın psikolojik okuması.");
const eliade = book("The Sacred and the Profane", "Mircea Eliade", "Kutsal ve sembolik düşüncenin dinler tarihi bakışı.");
const waiteTarot = book("The Pictorial Key to the Tarot", "A. E. Waite", "Rider–Waite sisteminin kaynak metni.");
const pollack = book("Seventy-Eight Degrees of Wisdom", "Rachel Pollack", "Tarot'un derinlikli modern yorumu.");
const iamblichus = book("On the Mysteries (De Mysteriis)", "Iamblichus", "Teurji (kutsal ritüel) felsefesi; Clarke–Dillon–Hershbell çevirisi.");
const wilson = book("The Occult: A History", "Colin Wilson", "Geniş tarihsel tur (popüler dil).");
const crowley = book("Magick in Theory and Practice (Book 4, Bölüm III)", "Aleister Crowley", "Thelema'nın ritüel kuramı; eleştirel/tarihsel bağlamda oku.");

export const occultModule: LearningModule = {
  id: "okultizm",
  title: "Okültizm ve Maji",
  tagline: "Antik temellerden Altın Şafak'a, Kabala'dan simyaya — kaynaklı ve eleştirel müfredat",
  description:
    "Batı ezoterizminin tarihini, felsefesini ve pratik disiplinini kitap kaynaklı öğrenmek için tasarlandı. Yükleme yaptığın Eliphas Lévi, Butler, Mathers, Cockren, Powell, Burger ve diğer kitapların her biri ilgili ünitede 'kütüphanem' olarak eşleştirildi; üzerine akademik ve klasik dış kaynaklar eklendi.",
  icon: "eye",
  disclaimer:
    "Bu müfredat okült/ezoterik gelenekleri tarihsel, felsefi ve pratik yönleriyle anlatır; sunulan sistemlerin bilimsel doğruluğu iddia edilmez. Pratik çalışmalar psikolojik yük oluşturabilir: sağlık, ruh sağlığı ve hukuki konularda uzman desteğinin yerini tutmaz. Simya/laboratuvar işlemlerinde yalnızca güvenli (bitkisel, ocak/alkol dışı tehlikesiz) yöntemlerle çalış.",
  competencies: [
    "Batı ezoterizminin ana akımlarını (Hermetizm, Gnostisizm, Yeni-Platonculuk, Kabala, Rönesans magisi, Altın Şafak, Teosofi, Thelema, modern Paganizm) kronolojik ve kavramsal olarak anlatabilirim.",
    "Hayat Ağacı'nı (10 Sephira, 22 yol) kaynaklarıyla birlikte okuyup gezegen/element/tarot karşılıklarını (correspondences) sistemler arasındaki farklarıyla açıklayabilirim.",
    "Bir günlük ritüel çalışmasını (arınma/banishing, odaklanma, çağırma, kapanış) tasarlayıp en az 1 yıl kesintisiz sürdürmüş olurum.",
    "Tarot'u (78 kart) sembolik/psikolojik bir araç olarak kullanır, yorumlarımı kaydederim.",
    "Simya metinlerini hem tarihsel (kimya öncülü) hem sembolik/psikolojik düzeyde okuyabilirim.",
    "Eterik beden, aura ve çakra gibi kavramların hangi gelenekten (Teosofi, Hindu, Çin vb.) geldiğini ayırt eder, birincil kaynağa dayanarak tartışırım.",
    "Grimuar/ritüel metinlerinde yer alan semboller, kutsal isimler ve zamanlama kurallarını bağlamıyla okur; Ay ve gezegen zamanlamasını astroloji modülüyle birleştiririm.",
    "Kaynakların güvenilirliğini değerlendirir (birincil/ikincil, akademik/popüler, çeviri sorunları); abartılı veya doğrulanamaz iddiaları ayırt ederim.",
    "Pratikte psikolojik riskleri (kaygı, dissosiyasyon, otorite bağımlılığı) tanır, kendime sınırlar koyar, gerektiğinde destek isterim.",
    "En az 3 uzun biçimli (3.000+ kelime) araştırma yazısı ve bir yıllık pratik günlüğü üretmiş olurum.",
  ],
  tracks: [
    {
      id: "main",
      title: "Ana Müfredat",
      units: [
        {
          id: "u1",
          title: "1. Antik Temeller: Pisagor, Platon, Hermetizm, Gnostisizm",
          description: "Batı ezoterizminin felsefi kökleri.",
          lessons: [
            lesson("pisagor", "Pisagor okulu ve sayı sembolizmi", "Krotone okulu, inisiyasyon dereceleri (akusmatikoi–mathematikoi), sayıların 'kozmik düzen' olarak anlaşılması, sessizlik ve disiplin pratikleri.", {
              tasks: ["Lirvian notlarındaki Pisagor bölümünü oku; birincil kaynak olarak Iamblichus/Porphyry'nin 'Pisagor'un Yaşamı' metinleriyle karşılaştır.", "Tetraktys ve ilk 10 sayının sembolik anlamlarını kendi şemanda göster."],
              resources: [own("Lirvian E. — Kendim İçin Kısa Notlar (Pisagor Okulu)", "Lirvian_E._Verilen_Araştırmalar.pdf"), iamblichus],
            }),
            lesson("platon", "Platon ve ruhun yükselişi", "İdealar kuramı, mağara alegorisi, Timaios'ta kozmos, nefs/ruh bölünmesi; 'insanın kendini yenmesi'. Okült düşüncede Platoncu mirasın izleri.", {
              tasks: ["Devlet VII (Mağara), Symposium (Diotima konuşması) ve Timaios'u oku; her biri için 1 sayfa özet."],
              resources: [own("Platon — İnsanın Kendini Yenmesi En Büyük Zaferdir", "Platon_Insanin_Kendini_Yenmesi.epub", "Taner Şanlıoğlu derlemesi", "Taner Şanlıoğlu"), web("Project Gutenberg (Platon eserleri)", "https://www.gutenberg.org", "Kamu malı İngilizce çeviriler.")],
            }),
            lesson("hermetizm", "Hermetizm: Corpus Hermeticum ve Zümrüt Tablet", "Hermes Trismegistos geleneği, Poimandres, 'yukarıda olan aşağıda olan gibidir'; Zümrüt Tablet'in simya ve astrolojideki yeri.", {
              tasks: ["Poimandres'i (CH I) oku, yaratılış ve ruhun yükselişi anlatısını özetle.", "Zümrüt Tablet'in 3 farklı çevirisini karşılaştır (Cockren kitabının girişindeki versiyon dahil)."],
              resources: [copenhaver, sacredTexts, own("Simya, Sanat ve Simyacılar (Zümrüt Tablet ile başlar)", "Archibald_Cockren_-_Simya_Sanatı_ve_Simyacılar.pdf")],
            }),
            lesson("gnostik", "Gnostisizm ve Yeni-Platonculuk", "Gnostik kozmoloji, Plotinos'un 'Bir'i, Iamblichus ve teurji. Ritüelin felsefi gerekçesi.", {
              resources: [iamblichus, hanegraaff],
            }),
          ],
        },
        {
          id: "u2",
          title: "2. Ortaçağ ve Rönesans Magisi",
          description: "Doğal magi, astral magi ve grimuar geleneği.",
          lessons: [
            lesson("ficino", "Ficino, Pico ve Rönesans'ın 'doğal magi'si", "Hermetica'nın Latinceye çevrilmesi (1463), talisman anlayışı, 'anima mundi', 'Oratio'daki insan onuru.", {
              resources: [yates, hanegraaff],
            }),
            lesson("agrippa", "Agrippa — Okült Felsefe Üç Kitap", "Üç dünya (elementer, göksel, entelektüel), sayılar ve 'karşılıklar (correspondences)' sisteminin kaynağı.", {
              tasks: ["Birinci kitaptan elementler, ikinci kitaptan sayılar ve gezegen karşılıklarını çıkarıp kendi tabloda topla (kaynağını sayfa/bölümle yaz)."],
              resources: [agrippa, esotericArchives],
            }),
            lesson("grimuar", "Grimuarlar: Süleyman'ın Anahtarı, Picatrix, Enochian", "Grimuar nedir, kimler yazdı, nasıl dolaştı? Metin eleştirisi ve güvenilirlik; John Dee'nin Enoch sistemi.", {
              tasks: ["Davies'in kitabından bir grimuarın tarihçesini çıkar; elindeki baskıların hangi el yazmasına dayandığını bul."],
              resources: [davies, esotericArchives],
            }),
          ],
        },
        {
          id: "u3",
          title: "3. Kabala ve Hayat Ağacı",
          description: "Yahudi mistisizmi ve Hermetik Kabala'nın farkı.",
          lessons: [
            lesson("kabala-tarih", "Yahudi Kabala'sı: Sefer Yetzirah, Zohar", "Tarihsel Kabala ile 'Hermetik Kabala' arasındaki farklar; Sefer Yetzirah'ın 10 sefirot ve 22 harfi.", {
              resources: [scholem, kaplan],
            }),
            lesson("kabala-unveiled", "Mathers — Kabbalah Unveiled", "Zohar'dan seçilen üç kitap (Gizli Gizem Kitabı, Büyük ve Küçük Kutsal Toplantı) ve Rosenroth/Mathers çevirisinin sorunları.", {
              tasks: ["Giriş bölümünü oku; Mathers'ın hangi kaynaklara dayandığını ve bugün hangi eleştirilere uğradığını not et."],
              resources: [own("The Kabbalah Unveiled", "kabbalah-unveiled.pdf", "S. L. MacGregor Mathers (386 sayfa)", "S. L. MacGregor Mathers")],
            }),
            lesson("hayat-agaci", "Hayat Ağacı: 10 Sephira ve 22 yol", "Sephiroth'un isimleri, gezegen/element atamaları, yolların Tarot ve İbrani harfleriyle eşleşmeleri (Altın Şafak düzeni) ve alternatif düzenler.", {
              tasks: ["Hayat Ağacı'nı elle çiz; her Sephira için isim, gezegen, renk ve 2 kaynak kaydı çıkar."],
              resources: [fortuneQ, regardiePillar],
            }),
          ],
        },
        {
          id: "u4",
          title: "4. Modern Okült Canlanma: Lévi'den Altın Şafak'a",
          description: "19. yüzyıl ve sonrası; bugünkü ritüel dilinin kaynağı.",
          lessons: [
            lesson("levi-doktrin", "Eliphas Lévi — Yüksek Büyü Öğretisi (Cilt 1)", "Lévi'nin Dogme'u: mutlak kabala, 'bilmek, istemek, cesaret etmek, susmak', astral ışık kavramı. Tarihsel bağlam (1854 Fransa).", {
              tasks: ["Her bölümün sonunda 'Lévi ne iddia ediyor / dayandığı kaynak ne / benim değerlendirmem' tablosu doldur."],
              resources: [own("Metafizik Maji Öğretisi ve Ritüeli — Cilt 1 (Öğreti)", "metafizik-maji-retisi-ve-riteli-cilt-1.pdf", "Mavi Kalem, çev. Faruk Gültekin, 2018", "Eliphas Lévi"), own("The Doctrine and Ritual of High Magic: A New Translation", "yuksek-buyu-oretisi-ve-ritueli-yeni-bir-ceviri-eliphas-levi.pdf", "Greer'in tanıtımıyla yeni İngilizce çeviri (480 sayfa)", "Eliphas Lévi")],
            }),
            lesson("levi-ritueli", "Lévi — Ritüel (Cilt 2)", "Ritüelin yapısı, kutsal alan, sembolik araçlar, eğitim ve ahlaki hazırlık. Ritüeli 'psikolojik teknoloji' olarak okuma.", {
              resources: [own("Metafizik Maji Öğretisi ve Ritüeli — Cilt 2 (Ritüel)", "metafizik-maji-retisi-ve-riteli-cilt-2.pdf", "Mavi Kalem, çev. Faruk Gültekin", "Eliphas Lévi")],
            }),
            lesson("teosofi", "Teosofi ve Blavatsky", "Gizli Doktrin, yedi ışın/yedili insan, eterik beden kavramının Batı'ya girişi.", {
              resources: [web("Theosophy World", "https://www.theosophy.world", "Teosofi metin arşivi.")],
            }),
            lesson("golden-dawn", "Hermetik Altın Şafak Düzeni", "Derece sistemi, elementler ve Hayat Ağacı müfredatı, Regardie'nin yayını; sistemin tarihsel anlatılarının eleştirisi.", {
              tasks: ["Neophyte–Adeptus Minor müfredatını bir tabloya dök; hangi çalışmaların Kabala/Tarot/astroloji/ritüel olduğunu ayır."],
              resources: [regardieGD, hutton],
            }),
            lesson("fortune-butler", "Dion Fortune ve W. E. Butler: Pratik Okültizm Okulu", "Eğitim disiplini, koruma, pathworking, 'Büyücü: Eğitimi ve Çalışması'. Sağlıklı pratik için sınırlar ve ahlak.", {
              resources: [own("The Magician: His Training and Work", "w-e-butler-the-magician-his-training-and-work.pdf", "170 sayfa", "W. E. Butler"), fortunePsy, own("Pratik Okültizm: Günlük Yaşamda Uygulamalı Gizli Bilimler", "pratik-okultizm-gunluk-yasamda...pdf", "Hermes Yayınları (çev. Anita Tatlıer)")],
            }),
            lesson("thelema", "Thelema ve Crowley'e eleştirel yaklaşım", "Crowley'in 'Magick' kuramı, Thelema'nın temel ilkeleri; kişilik kültü ve etik tartışmalar.", {
              resources: [crowley, wilson],
            }),
          ],
        },
        {
          id: "u5",
          title: "5. Pratik Temeller ve Günlük Disiplin",
          description: "Uzun vadeli, sürdürülebilir bir pratik çerçevesi. Ciddi gelişim burada olur.",
          lessons: [
            lesson("gunluk-disiplin", "Günlük pratik: sessizlik, nefes, odaklanma, günlük tutma", "20–30 dakikalık sabit rutin; sihirli günlük (magical diary) şablonu: tarih, Ay evresi, çalışma, deneyim, rüya, sonuç ve eleştiri.", {
              tasks: ["100 gün kesintisiz günlük tut; haftalık ve aylık kısa değerlendirme yaz."],
              resources: [own("Pratik Okültizm: Günlük Yaşamda Uygulamalı Gizli Bilimler", "pratik-okultizm-....pdf"), own("The Magician: His Training and Work (eğitim bölümleri)", "w-e-butler-the-magician....pdf")],
            }),
            lesson("arinma", "Arınma ve koruma çalışmaları (banishing)", "Küçük Pentagram Arınma Ritüeli (LBRP) ve alternatif yaklaşımlar; sembolik/psikolojik rolü; aşırıya kaçmama.", {
              tasks: ["Altın Şafak ya da Fortune kaynağından LBRP metnini oku; kendi cümlelerinle adımların amacını yaz; 30 gün uygula ve deneyimlerini kayda geç."],
              resources: [regardieGD, fortunePsy],
            }),
            lesson("orta-sutun", "Orta Sütun ve ışık meditasyonu", "Kabalistik enerji merkezleri üzerine meditasyon; nefes ve görselleştirme; riskleri ve temel kuralları.", {
              resources: [regardiePillar],
            }),
            lesson("tarot", "Tarot: 78 kart, sembol ve yorum", "Büyük/Küçük Arkana, Waite–Smith sembolizmi, Hayat Ağacı eşleşmeleri; kart çekiminde kendine yönelik öngörü iddialarına şüpheyle yaklaşma.", {
              tasks: ["78 kartın her biri için bir sayfa: sembol dökümü, element/gezegen karşılığı, kaynağı ve kişisel çağrışım.", "30 günlük tek kart günlüğü."],
              resources: [waiteTarot, pollack],
            }),
            lesson("ritual-yapisi", "Ritüel tasarımı: yapı, amaç ve değerlendirme", "Bir ritüelin bölümleri (arınma, açılış, ana çalışma, kapanış), niyet, sembol seçimi, zamanlama (Ay evresi, gezegen günü ve saati — astroloji modülü Atölye 1).", {
              tasks: ["Bir amaç için sade bir ritüel yaz: kaynağını, neden o semboller/zaman, nasıl değerlendirileceğini belirt."],
              resources: [own("Elemental Witchcraft (Element Büyücülüğü)", "element-buyuculuu-heron-michelle.pdf", "Ritüel yapısı örnekleri", "Michelle Heron")],
            }),
          ],
        },
        {
          id: "u6",
          title: "6. Elementler ve Element Çalışması",
          description: "Dört element sistemi: felsefe, simya, astroloji ve ritüelde kullanımı.",
          lessons: [
            lesson("elementler-tarih", "Dört element: Empedokles'ten ortaçağ mizaç kuramına", "Elementlerin felsefi kökeni, mizaçlar, burç eşleşmeleri; astroloji modülündeki element/nitelik derslerini birlikte oku.", {
              resources: [own("Elementler (PDF) ve Elementler–Nitelikler", "ElementLer_PDF.pdf / Elementler_-_Nitelikler.pdf"), own("Lirvian — Ateş, Su, Hava, Toprak notları", "Lirvian_E._Verilen_Araştırmalar.pdf")],
            }),
            lesson("element-pratik", "Elemental Witchcraft: element çalışma programı", "Her element için pratik çalışma modülleri; ritüel, meditasyon ve doğa gözlemi.", {
              tasks: ["Bir element başına 4 hafta (toplam 16 hafta) sistematik çalışma planı yap ve günlüğe işle."],
              resources: [own("Elemental Witchcraft", "element-buyuculuu-heron-michelle.pdf", "537 sayfa", "Michelle Heron"), hutton],
            }),
          ],
        },
        {
          id: "u7",
          title: "7. Simya",
          description: "Tarihsel kimya, sembolik süreç ve psikolojik yorum.",
          lessons: [
            lesson("simya-tarih", "Simyanın tarihi ve ana figürleri", "Mısır/Helenistik kökenler, İslam dünyası (Câbir b. Hayyân), Latin ortaçağ simyası, Paracelsus, Newton; 'nigredo–albedo–rubedo'.", {
              resources: [own("Simya, Sanat ve Simyacılar", "Archibald_Cockren_-_Simya_Sanatı_ve_Simyacılar.pdf", "Archibald Cockren; çev. Murat Salam", "Archibald Cockren"), own("Alchemy (Die entschleierte Alchemie — Alchemy Unveiled)", "alchemy.pdf", "Hanswille & Brumlich çevirisi (91 sayfa)")],
            }),
            lesson("simya-sembol", "Simya sembolizmi ve Jung", "Sembolik imgeler (kral/kraliçe, güneş/ay, yılan, tavus kuşu), psikolojik 'bireyleşme' yorumu ve sınırları.", {
              resources: [jungAlchemy, eliade],
            }),
            lesson("spagirik", "Spagirik ve bitkisel çalışma (güvenli uygulama)", "Bitki tentürleri ve eterik yağlar üzerinden tarihsel simya yöntemlerine giriş. Yalnızca güvenli, tek bileşenli bitkisel çalışmalar; sağlık iddiası yok.", {
              tasks: ["Bir bitkiyle (ör. lavanta) tentür hazırlığı ve ayrıntılı laboratuvar günlüğü; güvenlik ve etiketleme kurallarını yaz."],
            }),
          ],
        },
        {
          id: "u8",
          title: "8. Eterik Beden, Aura ve Enerji Anatomisi",
          description: "Teosofik ve doğu kökenli enerji modelleri; birincil kaynağa dayalı, eleştirel okuma.",
          lessons: [
            lesson("eterik", "Eterik beden (Linga Sharira)", "Teosofik 'eterik çift' kavramı; Powell'ın sentezi ve kaynakları; Hint kavramlarıyla farklar.", {
              resources: [own("Eterik Çift — İnsanın Sağlık Aurası", "eterik-e-arthur-e-powell-1.pdf", "Arthur E. Powell (125 sayfa)", "Arthur E. Powell")],
            }),
            lesson("aura", "Aura ve algı", "Aura renkleri ve yorumları, 'psişik duyuların' gelişimi iddiaları; algı psikolojisi ile karşılaştırma.", {
              resources: [own("How to Read the Aura", "how-to-read-the-aura.pdf", "W. E. Butler (96 sayfa)", "W. E. Butler"), own("Lirvian — Psişik algı ve yüksek duyular", "Lirvian_E._Verilen_Araştırmalar.pdf")],
            }),
            lesson("ezoterik-anatomi", "Ezoterik anatomi: bilinç olarak beden", "Çakralar, meridyenler, endokrin eşleşmeleri ve psikolojik kavramlarla ilişkisi. Burger'in modelini kaynaklarıyla birlikte ayrıştır.", {
              resources: [own("Ezoterik Anatomi: Bilinç Olarak Beden", "ezoterik-anatomi-bilinc-olarak-beden.pdf", "Bruce Burger (747 sayfa)", "Bruce Burger")],
            }),
          ],
        },
        {
          id: "u9",
          title: "9. Sembolizm ve Dövme Sembolleri",
          description: "Sembolün tarihsel/kültürel okuması; bedende sembol taşıma.",
          lessons: [
            lesson("sembol-teorisi", "Sembol, simge ve işaret", "Semiyotik temel; arketip, kültürel sembol, kişisel sembol ayrımı; sembolün bağlamı.", {
              resources: [eliade, jungAlchemy],
            }),
            lesson("dovme", "Dövme sembolleri: tarih, anlam ve sağaltım", "Anadolu kültüründe dövme (tez) ve 'Dövmeler ve Semboller' kaynakları; bir sembolü bedene işlemeden önce uzun gözlem ve araştırma ilkesi.", {
              tasks: ["Bir sembol seç; kökeni, farklı kültürlerdeki anlamı ve yanlış kullanım riskleri hakkında 2 sayfa araştırma yaz."],
              resources: [own("Dövmeler ve Semboller", "dovmeler-ve-semboller.pdf", "48 sayfa; sembol rehberi"), own("Anadolu Kültüründe Simge, Anlam ve Sağaltım Boyutlarıyla 'Dövme' (yüksek lisans tezi)", "Anadolu_Kulturunde_Simge_Anlam...Dovme_PDF.pdf", "Şermin Seval, Işık Üniversitesi (117 sayfa)", "Şermin Seval")],
            }),
          ],
        },
        {
          id: "u10",
          title: "10. Eleştirel Okuma, Tarih ve Etik",
          description: "5 yıllık deneyimi 'inanç'tan ayıran şey: kaynakları sorgulama becerisi.",
          lessons: [
            lesson("akademik", "Ezoterizm çalışmalarına akademik bakış", "Faivre'in kriterleri, Hanegraaff'ın 'reddedilmiş bilgi' kavramı; ezoterizm tarihinin akademik haritası.", {
              resources: [faivre, hanegraaff],
            }),
            lesson("kaynak-elestirisi", "Kaynak eleştirisi ve 'uydurulmuş gelenek'", "Wicca ve Altın Şafak örneklerinde köken anlatılarının sorgulanması; birincil/ikincil kaynak, çeviri sorunları.", {
              tasks: ["Sevdiğin bir okült kitaptaki 5 tarihsel iddiayı birincil kaynakla doğrula veya çürüt."],
              resources: [hutton, davies],
            }),
            lesson("etik-risk", "Etik, psikolojik güvenlik ve topluluklar", "Otorite bağımlılığı, manipülatif gruplar, kaygı/dissosiyasyon riskleri, sınır koyma ve destek alma.", {
              resources: [fortunePsy],
            }),
          ],
        },
        {
          id: "u12",
          title: "12. Dion Fortune: Batı Gizem Geleneği ve Psişik Savunma",
          description: "Dion Fortune'un iki klasiği (Mystical Qabalah, Psychic Self-Defence) yazarın kendi metninden; iddialar 'Fortune'a göre' diye atfedilir.",
          lessons: [
            lesson("fortune-hayat", "Dion Fortune: hayat, çevre ve eserler", "Violet Firth'ten Dion Fortune'a; Altın Şafak kökenli çevre, İç Işık Topluluğu ve başlıca kitapların kronolojisi.", {
              tasks: ["Fortune'un 5 kitabı için yayın yılı, konu ve hedef kitle tablosu çıkar."],
              resources: [web("Dion Fortune — Wikipedia", "https://en.wikipedia.org/wiki/Dion_Fortune"), web("Society of the Inner Light — Wikipedia", "https://en.wikipedia.org/wiki/Society_of_the_Inner_Light"), web("Global Grey — Psychic Self-Defence (tam metin, çevrimiçi)", "https://www.globalgreyebooks.com/online-ebooks/dion-fortune_psychic-self-defense_complete-text.html"), web("Global Grey — The Mystical Qabalah (tam metin, çevrimiçi)", "https://www.globalgreyebooks.com/online-ebooks/dion-fortune_mystical-qabalah_complete-text.html")],
            }),
            lesson("fortune-kabala", "The Mystical Qabalah: kitabın yapısı ve yöntemi", "Fortune'a göre Hayat Ağacı 'Batı gizem geleneğinin plan şeması'dır; kitabın bölümleri, Sephiroth'u anlatış biçimi ve 'öğretmen gözetimi' uyarısı.", {
              tasks: ["Kitabın 27 bölümünü (Foreword + 1–27) 3 gruba ayır: yöntem, Ağaç'ın yapısı, tek tek Sephiroth; her gruptan bir paragraf özetle."],
              resources: [fortuneQ],
            }),
            lesson("fortune-psisik", "Psychic Self-Defence: yapı, sınırlar ve eleştirel okuma", "1930 tarihli kitabın dört bölümlü yapısı; 'tanı tedaviden önce gelir' ilkesi; öznel rahatsızlık ile 'objektif saldırı' ayrımı ve modern ruh sağlığı açısından uyarılar.", {
              tasks: ["Kitaptaki 9. bölümü (objektif saldırı ile öznel rahatsızlık ayrımı) oku; kendi cümlelerinle özetle ve ruh sağlığı uzmanına başvurma kriterlerini yaz."],
              resources: [fortunePsy],
            }),
          ],
        },
        {
          id: "u11",
          title: "11. Beş Yıllık Pratik Yol Haritası",
          description: "Müfredatın tamamlanmış hâli: yıllara yayılmış çalışma planı.",
          lessons: [
            lesson("yil1", "Yıl 1 — Temel: okuma, disiplin ve günlük", "Üniteler 1, 3, 5. Günlük pratik, LBRP/Orta Sütun, tarot günlüğü, Hayat Ağacı tablosu. Hedef: 365 günlük pratik kaydı.", {}),
            lesson("yil2", "Yıl 2 — Sistemler: Rönesans, Altın Şafak, element çalışmaları", "Üniteler 2, 4, 6. Agrippa tablosu, Altın Şafak müfredatı, 16 haftalık element programı. Hedef: ilk uzun araştırma yazısı.", {}),
            lesson("yil3", "Yıl 3 — Zaman ve gezegenler: astroloji ile entegrasyon", "Astroloji modülü Atölye 1–2 ile birlikte; yıllık ritüel takvimi ve eleksiyon pratiği.", {}),
            lesson("yil4", "Yıl 4 — Simya ve enerji modelleri", "Üniteler 7, 8. Simya sembolizmi araştırması, eterik/aura/ezoterik anatomi kaynaklarının karşılaştırmalı değerlendirmesi.", {}),
            lesson("yil5", "Yıl 5 — Sentez, eleştiri ve aktarım", "Üniteler 9, 10. Kendi sentez makalen, kaynakçalı bir 'başlangıç rehberi' ve pratik günlüğünün 5 yıllık analizi.", {}),
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "magical-diary",
      title: "Bir Yıllık Pratik Günlüğü",
      level: "Orta",
      hours: 150,
      description: "Günlük pratiği tek bir yapıda kaydetme; yıl sonunda niceliksel ve niteliksel analiz.",
      features: ["Günlük şablon (tarih, Ay evresi, çalışma, deneyim, rüya, eleştiri)", "Aylık özet ve hedef gözden geçirme", "Yıl sonu analizi (kalıplar, aksaklıklar)"],
      skills: ["disiplin", "öz-gözlem", "kaynak notlandırma"],
      steps: ["Şablonu tasarla", "İlk 100 gün kesintisiz kayıt", "Her 28 günde analiz", "Yıl sonunda raporla"],
    },
    {
      id: "correspondence-table",
      title: "Kaynaklı Correspondence Tablosu",
      level: "Orta",
      hours: 40,
      description: "Gezegen, element, metal, renk, bitki, Sephira, Tarot ve harf eşleşmelerini birden fazla kaynaktan karşılaştırarak tek tabloda topla.",
      features: ["Her hücrede kaynak ve sayfa referansı", "Çelişkili eşleşmelerin ayrı sütunu", "Altın Şafak / Agrippa / Lévi karşılaştırması"],
      skills: ["kaynak eleştirisi", "sistematik düşünme"],
      steps: ["Kaynakları seç", "Tabloyu kur", "Çelişkileri belirle", "Kısa yorum yazısı"],
    },
    {
      id: "arastirma-yazisi",
      title: "Uzun Biçimli Araştırma Yazısı (3 adet)",
      level: "İleri",
      hours: 90,
      description: "Seçilen bir sistem, kişi veya sembolün tarihsel/kavramsal araştırması: Pisagor sayı sistemi, Zümrüt Tablet'in çeviri tarihi ve Altın Şafak'ın kökenleri gibi.",
      features: ["En az 3.000 kelime", "Birincil kaynaklardan alıntı ve kaynakça", "Karşıt görüşlerin değerlendirmesi"],
      skills: ["akademik okuma", "yazı", "kaynakça"],
      steps: ["Konu ve soru belirle", "Kaynak taraması", "Taslak ve geri bildirim", "Son yazı ve kaynakça"],
    },
    {
      id: "tarot-78",
      title: "78 Kartlık Tarot Çalışma Dosyası",
      level: "Orta",
      hours: 60,
      description: "Her kart için sembol dökümü, karşılık tablosu ve kişisel yorum içeren dosya.",
      features: ["Büyük ve Küçük Arkana", "Hayat Ağacı ve astroloji karşılıkları", "30 günlük tek kart günlüğü", "Okuma kayıtları ve değerlendirme"],
      skills: ["sembol okuma", "yorum disiplini"],
      steps: ["Büyük Arkana (22)", "Asalar ve Kupalar", "Kılıçlar ve Tılsımlar", "Saray kartları", "Gözden geçirme"],
    },
  ],
  library: [
    own("The Doctrine and Ritual of High Magic: A New Translation", "yuksek-buyu-oretisi-ve-ritueli-yeni-bir-ceviri-eliphas-levi.pdf", "Eliphas Lévi (480 sayfa)", "Eliphas Lévi"),
    own("Metafizik Maji Öğretisi ve Ritüeli — Cilt 1 ve Cilt 2", "metafizik-maji-retisi-ve-riteli-cilt-1/2.pdf", "Mavi Kalem, çev. Faruk Gültekin (248 + 292 sayfa)", "Eliphas Lévi"),
    own("The Kabbalah Unveiled", "kabbalah-unveiled.pdf", "S. L. MacGregor Mathers (386 sayfa)", "S. L. MacGregor Mathers"),
    own("The Magician: His Training and Work", "w-e-butler-the-magician-his-training-and-work.pdf", "W. E. Butler (170 sayfa)", "W. E. Butler"),
    own("How to Read the Aura", "how-to-read-the-aura.pdf", "W. E. Butler (96 sayfa)", "W. E. Butler"),
    own("Simya, Sanat ve Simyacılar", "Archibald_Cockren_-_Simya_Sanatı_ve_Simyacılar.pdf", "Archibald Cockren, çev. Murat Salam (127 sayfa)", "Archibald Cockren"),
    own("Alchemy (Die entschleierte Alchemie)", "alchemy.pdf", "91 sayfa", "Hanswille & Brumlich çevirisi"),
    own("Elemental Witchcraft (Element Büyücülüğü)", "element-buyuculuu-heron-michelle.pdf", "Michelle Heron (537 sayfa)", "Michelle Heron"),
    own("Eterik Çift — İnsanın Sağlık Aurası", "eterik-e-arthur-e-powell-1.pdf", "Arthur E. Powell (125 sayfa)", "Arthur E. Powell"),
    own("Ezoterik Anatomi: Bilinç Olarak Beden", "ezoterik-anatomi-bilinc-olarak-beden.pdf", "Bruce Burger (747 sayfa)", "Bruce Burger"),
    own("Pratik Okültizm: Günlük Yaşamda Uygulamalı Gizli Bilimler", "pratik-okultizm-gunluk-yasamda-uygulamali-gizli-bilimler.pdf", "Hermes Yayınları, çev. Anita Tatlıer (75 sayfa)"),
    own("Dövmeler ve Semboller", "dovmeler-ve-semboller.pdf", "48 sayfa"),
    own("Anadolu Kültüründe Simge, Anlam ve Sağaltım Boyutlarıyla 'Dövme'", "Anadolu_Kulturunde_Simge_Anlam_Ve_Sagaltim_Boyutlariyla_Dovme.pdf", "Şermin Seval — Işık Üniversitesi yüksek lisans tezi (117 sayfa)", "Şermin Seval"),
    own("Platon — İnsanın Kendini Yenmesi En Büyük Zaferdir", "Platon_Insanin_Kendini_Yenmesi.epub", "Taner Şanlıoğlu derlemesi (e-kitap)", "Taner Şanlıoğlu"),
    own("Plotinus — Enneadlar (seçki)", "plotinus-enneadlar.pdf", "Çev. Zeki Özcan, Asa Kitabevi (48 sayfa)", "Plotinos"),
    own("Metafizik: Kavram ve Problemleriyle Varlık Felsefesi", "metafizik-kavram-ve-problemleriyle-varlik-felsefesi.pdf", "Ed. A. Kadir Çüçen, Sentez Yayıncılık, 2018 (567 sayfa) — ontoloji/epistemoloji terimleri için referans", "A. Kadir Çüçen (ed.)"),
    own("777 Revised", "acrowley-777-revised.pdf", "Aleister Crowley; ilk basım 1909, 1955 ek notlu baskı (168 sayfa) — correspondence tabloları", "Aleister Crowley"),
    own("Goetia vel Clavicula Salomonis Regis", "Crowley_-_Goetia.PDF", "Mathers/Crowley baskısı (98 sayfa) — tarihsel/edebî inceleme için", "S. L. MacGregor Mathers; ed. Aleister Crowley"),
    own("Aleister Crowley ve Sihirli Günlük Uygulaması", "aleister-crowley-ve-sihirli-gunluk-uygulamasi.pdf", "James Wasserman (derleyen), çev. Mustafa Çiftçioğlu (226 sayfa)", "James Wasserman"),
    own("Ay Çocuk (Moonchild)", "aliester-crowley-ay-cocuk.pdf", "Roman; Altıkırkbeş Yayın, 2004 (186 sayfa) — kurgu, öğreti kaynağı değil", "Aleister Crowley"),
    own("Ars Vercanus: Advanced Magickal Techniques", "Ars_Vercanus__Advanced_Magickal_Technique.pdf", "Vasilios & Lynn Wennergren (435 sayfa) — modern pratik kılavuzu; içeriği doğrulanmadı", "Vasilios & Lynn Wennergren"),
    own("Basick Magick: Your Path to Self Knowledge and Power", "basick-magick.pdf", "Michael Crowley (130 sayfa) — modern pratik kılavuzu; içeriği doğrulanmadı", "Michael Crowley"),
    own("Planetary Magick (dosya adı: incensi-planetari-moderni)", "incensi-planetari-moderni.pdf", "661 sayfa — gezegen magisi için modern kılavuz; içeriği doğrulanmadı"),
    own("The Body Meridians — Meridian Flows and Acu-Point Charts", "the-body-meridians.pdf", "Natural-health-zone.com (61 sayfa) — Geleneksel Çin tıbbı modeli; klinik iddialar eklenmedi"),
    own("Polarity Therapy — Collected Works, Cilt 2", "randolph-stone-polarity-therapy-collected-works-vol-2.pdf", "Randolph Stone (232 sayfa) — alternatif tıp; sağlık iddiaları eklenmedi", "Randolph Stone"),
    own("Elementler (2)", "elementler-2.pdf", "36 sayfa; element kavramı ve tarihi"),
    own("Lirvian E. — Verilen Araştırmalar, Kendim İçin Kısa Notlar", "Lirvian_E._Verilen_Araştırmalar.pdf", "Pisagor Okulu, Gerçek İsim Doktrini, Fohat/okült elektrik, elementler, meridyenler, psişik algı, ses, eterik beden, ontoloji (90 sayfa)"),
  ],
  resources: [sacredTexts, esotericArchives, copenhaver, yates, hanegraaff, faivre, davies, agrippa, regardieGD, fortuneQ, scholem, jungAlchemy, wilson],
};
