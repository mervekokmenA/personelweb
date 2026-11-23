import type { LearningModule } from "./types";
import { lesson, web, book, video } from "./helpers";

const makeConcrete = web("Make: Concrete Candleholder", "https://makezine.com/article/craft/make-projects-concrete-candleholder/", "Kalıp, döküm ve bitirme için adım adım proje.");
const instrConcrete = web("Instructables — DIY Concrete Tea Light Candle Holder", "https://www.instructables.com/DIY-Concrete-Tea-Light-Candle-Holder/");
const instrCement = web("Instructables — How to Make Cement Candle Holders", "https://www.instructables.com/How-to-Make-Cement-Candle-Holders");
const waxGuide = web("CandleScience — Mum Mumu Rehberi", "https://www.candlescience.com/learning/wax-guide/", "Mum türleri, erime noktası ve koku yükü; tedarikçi verisi.");
const soyTrouble = web("CandleScience — Soya Mumu Sorun Giderme", "https://candlescience.com/wax/soy-wax-trouble-shooting-guide/", "Frosting, ıslak noktalar, çökme, tünelleme.");
const containerTips = web("Candle Shack — Kaplı Mum İpuçları", "https://candle-shack.com/pages/container-candle-tips-and-tricks");
const burnTest = web("Craftybase — Basit Mum Yanma Testi", "https://craftybase.com/blog/how-to-conduct-a-simple-candle-burn-test", "Yanma testi protokolü (ASTM yönteminin özeti değildir; standardı ayrıca doğrula).");
const astm = web("ANSI — Mumlar için Güvenlik Standartları (ASTM F2417, F2058…)", "https://webstore.ansi.org/industry/safety-standards/consumer-products/candles", "Standartlar ücretli; hangi standardın neyi kapsadığını öğrenmek için.");
const maliyetPage = { title: "Bu sitede: Maliyet Hesaplama sayfası", url: "/maliyet", kind: "araç" as const, note: "Parafin/stearin/boya kalemlerini girip birim maliyet ve satış fiyatını hesapla.", free: true };

const leatherMichaels = video("Michaels — Deri Defter Kapağı (başlangıç sınıfı, ~1 saat)", "https://www.michaels.com/class/vod/leather-journal-cover-1081916843", "Şablon, damga, boyama ve saddle stitch.");
const leatherDodson = web("Dodson Designs — Leather Journal Tutorial", "https://dodson-designs.com/?p=1424", "Boş defteri ölçüp kapak çıkarma, iplik uzunluğu hesabı.");
const leatherInstr = web("Instructables — Hand Stitched Leather Notebook Cover", "https://www.instructables.com/Hand-Stitched-Leather-Notebook-Cover");
const leatherStitch = web("Instructables — Leather Stitching: How-To Three Ways", "https://www.instructables.com/Leather-Stitching-How-To-Three-Ways/", "Saddle stitch ve diğer dikiş yöntemleri.");
const leatherField = web("Instructables — Field Notes Leather Cover", "https://instructables.com/Field-Notes-Leather-Cover", "Boyama, kenar bitirme, kalem tutacağı.");
const weAllSew = web("We All Sew — How to Make a Leather Notebook Cover", "https://weallsew.com/how-to-make-a-leather-notebook-cover/");
const tandyBlog = web("Tandy Leather Blog — Trifold Leather Journal Cover", "https://tandyleather.com/blogs/tandy-blog/gift-idea-trifold-leather-journal-cover-with-theoldpinkhouse");
const tandy = web("Tandy Leather", "https://tandyleather.com", "Deri, alet ve eğitim içerikleri.");
const leatherBook = book("The Leatherworking Handbook", "Valerie Michael", "Temel teknikler ve bitirme için kapsamlı rehber.");

export const craftsModule: LearningModule = {
  id: "zanaatlar",
  title: "Zanaatlar",
  tagline: "Beton mum yapımı ve deri defter kılıfı yapımı — atölyeden ürüne",
  description:
    "İki el sanatını 'hobiden satılabilir ürüne' taşıyan modül: malzeme bilgisi, güvenlik, üretim, kalite kontrol, sorun giderme ve maliyet/fiyatlama. Maliyet adımları bu sitedeki Maliyet Hesaplama sayfasıyla birlikte çalışır.",
  icon: "hammer",
  disclaimer:
    "Çimento tozu ve mum üretimi yangın, yanık ve cilt/solunum riskleri taşır; güvenlik adımlarını atlama. Mum ürünleri satılacaksa bulunduğun ülkenin ürün güvenliği/etiketleme mevzuatını (ve gerekirse standartlar için ASTM/EN referanslarını) ayrıca kontrol et; burada hukuki tavsiye verilmez.",
  competencies: [
    "Beton/mum üretiminde her partiyi kayıt altına alan (reçete, sıcaklık, kürleme, fitil, test sonucu) tekrarlanabilir bir süreç yürütürüm.",
    "Farklı kalıpları tasarlar/seçer, yüzey hatalarını (hava kabarcığı, çatlak, lekelenme) nedenleriyle birlikte çözerim.",
    "Mum türünü, fitil boyutunu ve koku yükünü yanma testiyle belirler, frosting/tünelleme/çökme gibi sorunları giderebilirim.",
    "Güvenlik (toz, yanık, yangın) ve etiketleme gerekliliklerini bilir, ürünlerime uygularım.",
    "Deri türünü (bitkisel tabaklı/krom), kalınlığı ve işleme uygunluğunu seçebilir; kalıp çıkarıp kesim ve dikişi temiz yapabilirim.",
    "Saddle stitch'i düzgün sıra, tutarlı adım ve doğru iplik boyuyla yapar, kenarları profesyonel bitiririm.",
    "Her ürün için gerçek birim maliyeti, fireyi ve işçilik süresini hesaplayıp fiyatlandırabilirim.",
    "Ürün serisi (en az 3 model) geliştirip fotoğraf, ambalaj ve satış kanalı hazırlayabilirim.",
    "Müşteri geri bildirimini ve iadeleri kalite sürecine dahil ederim.",
  ],
  tracks: [
    {
      id: "beton-mum",
      title: "Beton Mum Yapımı",
      description: "Beton kap (kalıp dökümü) + mum dökümü; dekoratif ve satılabilir kaplı mum üretimi.",
      units: [
        {
          id: "b1",
          title: "1. Güvenlik ve Malzeme Bilgisi",
          description: "Çimento ve mum için güvenli çalışma alanı; doğru malzeme seçimi.",
          lessons: [
            lesson("b-guvenlik", "Çalışma alanı, toz ve kişisel koruyucu ekipman", "Kuru çimento tozu solunum ve cilt için tehlikelidir: toz maskesi, eldiven, gözlük kullan; hava akımı sağla; atık suyu lavaboya dökme.", {
              tasks: ["Atölye güvenlik kontrol listeni yaz (havalandırma, yangın söndürücü, tezgah örtüsü, atık yönetimi).", "Kullanacağın çimento/beton ürününün güvenlik bilgi formunu (SDS) oku."],
              resources: [makeConcrete, instrCement],
            }),
            lesson("b-malzeme", "Çimento/beton türleri, katkılar, pigmentler", "İnce taneli çimento bazlı karışımlar dekoratif döküm için tercih edilir. Karışım oranı ürünün etiketine göre belirlenir; eğitim kaynakları 3:1–4:1 gibi farklı oranlar önerir, bu yüzden üretici talimatı belirleyicidir. Pigment ve katkı etkilerini küçük numune plakalarıyla dene.", {
              tasks: ["3 farklı su oranıyla test plakası dök; yüzey, mukavemet ve renk farkını kaydet."],
              resources: [instrConcrete, makeConcrete],
            }),
          ],
        },
        {
          id: "b2",
          title: "2. Kalıp ve Döküm",
          description: "Kalıp tasarımı, karışım, döküm ve kürleme.",
          lessons: [
            lesson("b-kalip", "Kalıp seçimi ve ayırıcı kullanımı", "Plastik kap, PVC boru, silikon kalıp, 3B baskı kalıp. Yapışmayı önlemek için ayırıcı (kalıp ayırıcı veya pişirme spreyi) kullan. İçte kalacak metal parçalar kürleme sırasında reaksiyona girebilir; metal kap yerine mumdan bağımsız bir iç kalıp kullan.", {
              tasks: ["2 kalıp tasarla (silindir, geometrik); ölçüler ve duvar kalınlığını çizim üzerinde belirle."],
              resources: [makeConcrete, instrCement],
            }),
            lesson("b-dokum", "Karışım, döküm ve hava kabarcığı giderme", "Suyu kademeli ekle (fazla su dayanıklılığı düşürür). Dökülen karışımı hafifçe titreştirerek (kalıbı vurma) hava kabarcıklarını çıkar. Karışımı kalıba doldurmadan önce iç ve dış kalıbın ölçülerini ve kalıp merkezlemesini kontrol et.", {
              tasks: ["Aynı kalıpla 3 döküm yap; her birinde farklı bir hata kaynağını (su oranı, titreştirme, ayırıcı) değiştirip sonucu not et."],
            }),
            lesson("b-kurleme", "Kürleme, kalıptan çıkarma ve kurutma", "Kalıptan çıkarma süresi ürüne göre değişir (kaynaklarda genelde ~1–2 gün); tam kürleme ve nem boşaltımı daha uzun sürer. Beton gözenekli olduğu için mum dökmeden önce tamamen kuru ve yüzeyi uygun şekilde kaplanmış olmalıdır.", {
              tasks: ["Her partiyi tarih ve ağırlıkla etiketle; kuruma sürecinde ağırlık kaybını (g) 3 gün ölçerek 'kuru' kriteri belirle."],
              resources: [makeConcrete],
            }),
          ],
        },
        {
          id: "b3",
          title: "3. Yüzey Bitirme ve Sızdırmazlık",
          description: "Zımpara, renk, koruma — mumla temas edecek yüzeyin hazırlanması.",
          lessons: [
            lesson("b-yuzey", "Zımpara, pigment ve yüzey kaplama", "Dış yüzeyi su bazlı mat vernik veya mum/sealer ile koru; iç yüzeyi mumla uyumlu, ısıya dayanıklı bir contalayıcıyla kapla. Kullandığın ürünün 'mumla temas' ve sıcaklık dayanımı bilgisini üreticiden doğrula.", {
              tasks: ["3 farklı iç yüzey kaplamasını deneyerek mumun yapışma ve sızdırmazlık performansını test et (kaplamasız, contalayıcı, çift kat)."],
              resources: [instrConcrete],
            }),
            lesson("b-taban", "Taban: çizilme ve kayma önleme", "Tabana keçe/mantar pul yapıştır; masayı çizmesin ve kap stabil dursun.", {}),
          ],
        },
        {
          id: "b4",
          title: "4. Mum Dökümü",
          description: "Mum, fitil, koku ve döküm teknikleri.",
          lessons: [
            lesson("b-wax", "Mum türleri: parafin, soya, stearin ve karışımlar", "Her mumun erime noktası ve maksimum koku yükü farklıdır (tedarikçi verisini kullan; örnek: sert parafin ~%3, soya karışımı ~%6 koku yükü gibi). Stearin sertlik/buruşma kontrolünde kullanılır.", {
              tasks: ["Kullandığın mumun tedarikçi teknik sayfasını bul; erime noktası, döküm sıcaklığı ve koku yükünü tabloya geçir."],
              resources: [waxGuide],
            }),
            lesson("b-fitil", "Fitil seçimi ve yanma testi", "Fitil, kap çapına ve mum türüne göre seçilir; doğruluğu sadece yanma testi gösterir (yanma süresi, alev boyu, kap sıcaklığı, mantarlaşma). Kap sıcaklığının çok yükselmesi çoğunlukla fitil veya koku yükü sorunudur.", {
              tasks: ["Aynı kap ve mumla 3 farklı fitil boyutunu yanma testine sok; sonuç tablosu hazırla."],
              resources: [burnTest, containerTips],
            }),
            lesson("b-dokum-mum", "Mum dökümü: ısıtma, renk, koku, döküm sıcaklığı", "Mumu çift cidarlı kapta ısıt, doğrudan alev kullanma. Kapı önceden ısıtmak mum–kap ayrılmasını (ıslak nokta) azaltır. Döküm sıcaklığı ve soğuma hızını kayda geç.", {
              tasks: ["Her döküm için: mum tipi, sıcaklık, kap sıcaklığı, koku yüzdesi, fitil — partiler kayıt tablosu."],
              resources: [soyTrouble, containerTips],
            }),
            lesson("b-kurleme-mum", "Mum kürlemesi ve etiketleme", "Mumun koku/yanma performansı dinlendirme süresiyle oturur (parafin için günler, soya için 1–2 hafta bir yaklaşımdır; doğrulamak için kendi testlerini kullan). Etiket: uyarılar, içerik, yanma süresi, parti numarası.", {
              resources: [astm],
            }),
          ],
        },
        {
          id: "b5",
          title: "5. Sorun Giderme",
          description: "En sık yaşanan hatalar ve nedenleri.",
          lessons: [
            lesson("b-sorun", "Frosting, ıslak noktalar, tünelleme, çökme, fitil sorunları", "Frosting bitkisel mumlarda estetik bir sorundur; düşük döküm sıcaklığı ve yavaş soğutma azaltır. Mum–kap ayrılması soğuk kap veya hızlı soğumadan olur. Tünelleme genelde ilk yakışta yetersiz erime havuzundan olur.", {
              tasks: ["Her sorun için 'belirti → olası neden → deneyeceğin değişiklik → sonuç' tablosu oluştur; 5 farklı döküm sorununu bilinçli olarak yeniden üretip çöz."],
              resources: [soyTrouble, containerTips],
            }),
            lesson("b-concrete-sorun", "Beton hataları: çatlak, toz, renk lekesi, kabarcık", "Çatlak çoğunlukla çok hızlı kuruma/fazla su; toz bırakma yetersiz yüzey kaplaması; leke eşit olmayan pigment veya nem. Üretim kaydından nedeni bul.", {}),
          ],
        },
        {
          id: "b6",
          title: "6. Ürünleştirme ve Satış",
          description: "Maliyet, fiyat, ambalaj ve yasal uyum.",
          lessons: [
            lesson("b-maliyet", "Birim maliyet ve fiyatlama", "Bu sitedeki Maliyet Hesaplama sayfasında parafin, stearin, boya, fitil, kap (beton), ambalaj kalemlerini ekle; kâr ve platform komisyonuna göre tahmini satış fiyatını çıkar.", {
              tasks: ["Her model için ayrı maliyet kaydı oluştur; fireyi ve işçilik süresini kalemlere ekle.", "Fiyatı üç farklı kâr oranında karşılaştır."],
              resources: [maliyetPage],
            }),
            lesson("b-yasal", "Etiket, güvenlik ve mevzuat", "Mum ürünlerinin etiketleme ve güvenlik gereklilikleri ülkeye göre değişir; ASTM F2417 (yangın güvenliği) ve F2058 (etiket) gibi standartlar yaygın referanstır. Türkiye'de satış için ilgili düzenlemeleri resmi kaynaklardan doğrula.", {
              resources: [astm],
            }),
            lesson("b-fotograf", "Fotoğraf, ambalaj ve marka", "Işık, arka plan, ölçü referansı; kırılgan beton ürünlerin güvenli paketlenmesi; ürün kartları ve kullanım uyarıları.", {}),
          ],
        },
      ],
    },
    {
      id: "deri-defter",
      title: "Deri Defter Kılıfı Yapımı",
      description: "Ölçüden kalıba, kesimden saddle stitch dikişe ve kenar bitirmeye kadar tam süreç.",
      units: [
        {
          id: "d1",
          title: "1. Deri Bilgisi, Alet ve Ekipman",
          description: "Doğru deri ve doğru alet temelidir.",
          lessons: [
            lesson("d-deri", "Deri türleri: bitkisel tabaklı, krom tabaklı, kalınlık", "Bitkisel tabaklı deri damga/boyama/şekillendirme için uygundur; kapak için pratikte 1,2–2,0 mm bandı sık kullanılır. Doku/damar, yüzey ve izin verilen fire.", {
              tasks: ["En az 3 farklı deri parçasıyla test: kesim, kenar, boyama, ıslatma, bükülme dayanımı kıyası.", "Deriyi hangi tedarikçiden aldığını, kalınlığını ve fiyatını kaydet."],
              resources: [tandy, leatherBook],
            }),
            lesson("d-alet", "Temel alet seti", "Kesim matı, döner/maket bıçağı, metal cetvel, delgi/iğne çiziği (pricking iron), 2 iğne, mumlu iplik, kenar parlatıcı (burnisher), zımpara, skiver (inceltme), çekiç/delgi. Başlangıçta küçük bir set yeterli.", {
              resources: [leatherMichaels, leatherDodson],
            }),
          ],
        },
        {
          id: "d2",
          title: "2. Ölçü ve Kalıp",
          description: "Defterin ölçüsünden tasarıma.",
          lessons: [
            lesson("d-olcu", "Defteri ölçmek, kalıp çıkarmak", "Defter kalınlığı, ciltteki taşma payı, kapak katlama payı; kalıbı karton/ince plastikte dene, deride değil.", {
              tasks: ["A5 ve Field Notes boyutu için kalıp çıkar; kâğıt prototip üzerinde kapanma ve esneklik payını kontrol et."],
              resources: [leatherDodson, leatherField],
            }),
            lesson("d-tasarim", "Kapak tasarımı: kalem tutacağı, kart cebi, elastik bağlantı", "Tasarım detayları kalıbı etkiler: ek parçalar, dikiş sırası, kat kalınlığı. Her eklenen parça kalınlığı artırır.", {
              resources: [leatherField, tandyBlog],
            }),
          ],
        },
        {
          id: "d3",
          title: "3. Kesim ve Hazırlık",
          description: "Temiz kesim ve doğru inceltme.",
          lessons: [
            lesson("d-kesim", "Kesim: düz çizgi, köşe yuvarlama, skiving", "Keskin bıçak ve tek hamlede kesim; köşeleri şablonla yuvarla; dikişten ve katlamalardan önce kenarları skiver ile inceltme.", {
              tasks: ["10 kez aynı parçayı kes; kenar dikliği ve boyut sapmasını ölç."],
              resources: [leatherMichaels, weAllSew],
            }),
            lesson("d-boya", "Boyama, damga ve yüzey koruma", "Deriyi hafifçe nemlendirip damgalama; boyadan önce deneme parçasında renk testi; koruyucu/balmumu bazlı bitirici.", {
              resources: [leatherMichaels],
            }),
          ],
        },
        {
          id: "d4",
          title: "4. Dikiş: Saddle Stitch",
          description: "İşin imzası: düzgün, dayanıklı el dikişi.",
          lessons: [
            lesson("d-delik", "Dikiş çizgisi ve delik açma", "Kenardan sabit mesafede çizgi; dikiş adımı sabit; delgiyi dik tut ve her sıradaki delikleri hizala.", {
              tasks: ["Hurda deri üzerinde 20 cm'lik sıra delik aç; adım aralıklarını cetvelle ölç."],
              resources: [leatherDodson, leatherStitch],
            }),
            lesson("d-saddle", "Saddle stitch tekniği", "İki iğneyle aynı delikten karşılıklı geçiş; iplik boyu dikiş uzunluğunun ≥3 katı (kalın deride ≥4 kat). Sıra ve gerginlik tutarlı olmalı; sonda geri dikiş ile sabitle.", {
              tasks: ["Aynı dikişi 5 kez tekrarla; her seferinde ön ve arka yüzeyin eşitliğini ve gerginliğini değerlendir."],
              resources: [leatherStitch, leatherInstr],
            }),
          ],
        },
        {
          id: "d5",
          title: "5. Kenar Bitirme ve Final",
          description: "Profesyonel ile amatörü ayıran kısım.",
          lessons: [
            lesson("d-kenar", "Kenar bitirme: zımpara, nem, parlatma", "Kenarları kademeli zımparala, hafifçe nemlendir ve burnisher ile parlat; istenirse kenar boyası uygula.", {
              tasks: ["3 yöntemi karşılaştır: sadece zımpara, nem+parlatma, kenar boyası; sonuçlara göre standardını seç."],
              resources: [leatherField, leatherMichaels],
            }),
            lesson("d-final", "Montaj, kalite kontrol ve bakım", "Defter yerleşimi, kapanış, dikiş kontrolü, yüzey temizliği; müşteriye bakım talimatı.", {
              resources: [tandyBlog],
            }),
          ],
        },
        {
          id: "d6",
          title: "6. Ürünleştirme",
          description: "Seri üretim, fiyat ve satış.",
          lessons: [
            lesson("d-maliyet", "Maliyet, fire ve fiyatlama", "Deri alanını (dm²), iplik, hırdavat ve işçilik süresini kalem kalem hesapla; fireyi ekle. Maliyet Hesaplama sayfasında ayrı bir ürün olarak kaydet.", {
              tasks: ["Her model için gerçek çalışma süresini kronometreyle ölç; saat ücretini maliyete ekle."],
              resources: [maliyetPage],
            }),
            lesson("d-seri", "Model serisi ve standart üretim", "En az 3 model (A5 sade, kalem tutacaklı, kart cepli). Her model için kalıp, malzeme listesi ve adım adım iş akışı kartı; müşteri kişiselleştirme (baş harf damgası).", {}),
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: "beton-ilk",
      title: "Beton Mum — İlk 6 Prototip",
      level: "Başlangıç",
      hours: 20,
      description: "Küçük bir seri ile malzeme ve kalıp öğrenme; her döküm kaydedilir.",
      features: ["2 kalıp × 3 renk", "Her parti için kayıt tablosu", "Mum–kap ayrılması testi"],
      skills: ["döküm", "kayıt tutma", "yüzey bitirme"],
      steps: ["Güvenlik hazırlığı", "Kalıpları hazırla", "6 döküm", "Mum dökümü ve yanma testi", "Sorun/çözüm özeti"],
      done: ["Çatlak/ayrılma olmadan 4 kullanılabilir ürün", "Her ürün için maliyet kaydı"],
    },
    {
      id: "beton-koleksiyon",
      title: "Beton Mum — 12 Parçalık Koleksiyon",
      level: "Orta",
      hours: 40,
      description: "3 model, 4 renk; fotoğraf, etiket, fiyatlı katalog.",
      features: ["Tutarlı yüzey kalitesi", "Yanma testli fitil seçimi", "Ambalaj ve etiket", "Maliyet/fiyat tablosu"],
      skills: ["ürünleştirme", "fotoğraf", "fiyatlama"],
      steps: ["Tasarım ve kalıplar", "Pilot üretim", "Yanma testi", "Fotoğraf ve ambalaj", "Satışa hazır katalog"],
    },
    {
      id: "deri-ilk",
      title: "Deri Defter Kılıfı — A5 Temel Model",
      level: "Başlangıç",
      hours: 12,
      description: "Kalıp, kesim, saddle stitch ve kenar bitirme ile ilk ürün.",
      features: ["Kâğıt prototip → deri", "Düzgün dikiş", "Parlatılmış kenar"],
      skills: ["kalıp", "kesim", "saddle stitch", "kenar bitirme"],
      steps: ["Ölçü ve kalıp", "Kesim ve skiving", "Delik açma", "Dikiş", "Kenar ve bitirme"],
      done: ["Dikiş adımları eşit", "Defter rahat çıkıp giriyor", "Kenarlarda tüylenme yok"],
    },
    {
      id: "deri-seri",
      title: "Deri Defter Kılıfı — 3 Modelli Seri",
      level: "Orta",
      hours: 35,
      description: "Kalem tutacaklı, kart cepli ve katlanabilir modeller; kişiselleştirme seçenekleriyle.",
      features: ["3 model iş akışı kartı", "Baş harf damgası", "Maliyet ve zaman kaydı", "Ambalaj"],
      skills: ["tasarım", "tekrarlanabilir üretim", "fiyatlama"],
      steps: ["Modellerin kalıpları", "Her model için 3 üretim", "Zaman/maliyet ölçümü", "Fotoğraf ve ambalaj", "Fiyat listesi"],
    },
  ],
  library: [],
  resources: [makeConcrete, instrConcrete, instrCement, waxGuide, soyTrouble, containerTips, burnTest, astm, leatherMichaels, leatherDodson, leatherInstr, leatherStitch, leatherField, weAllSew, tandyBlog, tandy, leatherBook, maliyetPage],
};
