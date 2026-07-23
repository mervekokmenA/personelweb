export interface SeedIdea {
  title: string;
  category: string;
  format: string;
}

const FORMATS = ["Video", "Yazı", "Kısa Video", "Podcast"] as const;

function f(i: number): string {
  return FORMATS[i % FORMATS.length];
}

export const CONTENT_IDEA_SEED: SeedIdea[] = [
  // ---------------------------------------------------------------------
  // 1) SEMBOLİZM TEMELLERİ (20)
  // ---------------------------------------------------------------------
  ...[
    "Sembol nedir, işaretten farkı ne? Zihnin sembolle konuşma şekli",
    "Pentagram: korku filmlerindeki imajın arkasındaki gerçek geometri",
    "Yılan sembolü: Uroboros'tan tıbbi kadüseye 8 farklı anlam katmanı",
    "Üçgen, kare, daire: kutsal geometrinin 3 temel formu ne anlatır",
    "Ayna motifi: mitolojide ve rüyalarda neden hep bir eşik işaretidir",
    "Labirent sembolü: kaybolmak değil, merkeze varmanın haritası",
    "Renklerin gizli dili: kırmızı-beyaz-siyah üçlüsü hangi sistemde neyi temsil eder",
    "Sayı sembolizmine giriş: 3, 7 ve 9 neden bu kadar tekrar eder",
    "Ağaç motifi: Kabala'nın Sefirot'undan Yggdrasil'e aynı imgenin yolculuğu",
    "Anahtar sembolü: neyi açar, neden hep bir bekçisi vardır",
    "Göz motifi: 'her şeyi gören göz' farklı kültürlerde ne anlama gelir",
    "Spiral sembolü: büyüme mi döngü mü, ikisi birden nasıl olur",
    "Kapı ve eşik sembolizmi: geçiş ritüellerinin ortak imgesi",
    "Kartal ve yılan: yükseliş ile derinliğin simgesel çatışması",
    "Kırmızı ip motifi: kader bağlarının farklı mitolojilerdeki izleri",
    "Ateş sembolizmi: yıkım mı dönüşüm mü — bağlama göre değişen anlam",
    "Su sembolizmi: bilinçdışının en eski imgesi neden hep sudur",
    "Maske motifi: gizlemek mi ortaya çıkarmak mı, ritüellerdeki çift anlamı",
    "Ay evreleri sembolizmi: içsel döngülerin en eski takvimi",
    "Simya sembollerine giriş: kurşunu altına çevirmek gerçekte neyi anlatır",
  ].map((t, i) => ({ title: t, category: "Sembolizm Temelleri", format: f(i) })),

  // ---------------------------------------------------------------------
  // 2) OKÜLTİZM & EZOTERİK SİSTEMLER (20)
  // ---------------------------------------------------------------------
  ...[
    "Okültizm kelimesinin kökeni: 'gizli' olan gerçekte ne gizlenir",
    "Hermetik felsefe: 'Yukarıda ne varsa aşağıda da o vardır' ne anlama gelir",
    "Kabala'ya giriş: Hayat Ağacı'nın 10 basamağı ne anlatır",
    "Tarot'un 22 büyük arkanası: her biri bir hayat aşamasının aynası mı",
    "Astroloji ile numeroloji nasıl kesişir, ikisi de aynı dili mi konuşur",
    "Gnostik öğretilere giriş: 'gizli bilgi' fikri neden bu kadar çekici",
    "Batı ezoterizmi ile doğu mistisizmi: ortak kökler var mı",
    "Büyü kelimesinin gerçek tanımı: niyet ile eylem arasındaki köprü",
    "Simyanın 3 aşaması: nigredo, albedo, rubedo — içsel dönüşümün haritası",
    "Okült kütüphaneler: Corpus Hermeticum'dan bugüne hangi metinler hayatta",
    "Ritüel nedir, gündelik alışkanlıktan farkı ne",
    "Enerji çalışması kavramı: bilim ile mistisizmin en tartışmalı kesişimi",
    "Astral projeksiyon fikrinin tarihi ve farklı kültürlerdeki karşılıkları",
    "Chakra sistemi: 7 merkez fikrinin Hint felsefesindeki kökeni",
    "I-Ching'e giriş: 64 heksagram ile karar verme sistemi",
    "Runik alfabe: harfler aynı zamanda nasıl kehanet aracı oldu",
    "Okültizmde 'gölge' kavramı: Jung'un psikolojiyle buluştuğu nokta",
    "Ezoterik öğretilerde inisiyasyon fikri: neden hep bir eşik testi var",
    "Batı büyü gelenekleri: Altın Şafak'tan Thelema'ya kısa bir tarih",
    "Okült sembollerin pop kültüre sızışı: neden her yerde bir üçgen görüyoruz",
  ].map((t, i) => ({ title: t, category: "Okültizm & Ezoterik Sistemler", format: f(i) })),

  // ---------------------------------------------------------------------
  // 3) BİLİNÇ GELİŞİMİ (20)
  // ---------------------------------------------------------------------
  ...[
    "Bilinç seviyesi ne demek, ölçülebilir bir şey mi",
    "İmajinasyon çalışması: zihinde net görüntü kurmanın günlük pratiği",
    "Görselleştirme ile hayal kurmak arasındaki fark ne",
    "Farkındalık (awareness) ile dikkat arasındaki ince çizgi",
    "İçsel gözlemci: düşünceyi izlemek düşünceyle aynı şey midir",
    "Bilinç genişlemesi fikri: sınır nerede, genişleme nereye kadar gider",
    "Gölgeyle yüzleşme pratiği: bastırılanla karşılaşmanın 3 aşaması",
    "Nefes çalışmasının bilinç üzerindeki ölçülebilir etkisi",
    "Renk meditasyonu: her rengin zihinde açtığı farklı kapı",
    "Rüya günlüğü tutmanın bilinç gelişimine etkisi — 30 günlük deney",
    "Duyu çalışması: dokunma, tat ve koku bilinci nasıl genişletir",
    "İçsel sessizlik ile boşluk hissi arasındaki fark",
    "Ego ile benlik arasındaki ayrım: hangisi gözlemleniyor",
    "Bilinç düzeyleri modeli: uyku, rüya, uyanıklık ve 'dördüncü hal'",
    "Senkronisite kavramı: tesadüf müdür yoksa bilinç mi örüntü kurar",
    "İçsel sembol çalışması: kişisel imgelerle diyalog kurmak",
    "Meditasyonda direnç: zihin neden sessizlikten kaçar",
    "Bilinç ve zaman algısı: 'an'da kalmak nörolojik olarak ne demek",
    "Kolektif bilinçdışı fikri: Jung'un mirası bugün ne işe yarar",
    "Bilinç gelişiminde disiplinin rolü: neden 'bir kere' yetmiyor",
  ].map((t, i) => ({ title: t, category: "Bilinç Gelişimi", format: f(i) })),

  // ---------------------------------------------------------------------
  // 4) KOZMİK KURGU & BİLİM KURGU (20)
  // ---------------------------------------------------------------------
  ...[
    "Kozmik dehşet nedir: Lovecraft'ın 'insan önemsizliği' fikri",
    "Philip K. Dick'in eserlerinde gerçeklik-simülasyon sorgusu",
    "Alan Moore'un çizgi romanlarında okült sembolizm nasıl işler",
    "Jodorowsky'nin sinemasında tarot ve inisiyasyon imgeleri",
    "Grant Morrison ve 'büyü olarak sanat' fikri",
    "Bilim kurguda 'üst zeka' teması: kozmik bilinç mi teknoloji mi",
    "Kozmik kurguda insan-tanrı ilişkisi nasıl yeniden yazılıyor",
    "Simülasyon hipotezi: felsefe mi bilim kurgu mu",
    "Kozmik dehşette bilinmeyenin gücü: neden 'görünmeyen' daha ürkütücü",
    "Gnostik temalar modern bilim kurguda nasıl yeniden doğuyor",
    "Zaman döngüsü kurgularında karma ve kader fikri",
    "Uzaylı teması: öteki'yle karşılaşma miti hangi arketipi tekrarlıyor",
    "Kozmik kurguda 'eşik bekçisi' karakteri — mitolojik kökeni",
    "Distopya kurgularında bilinç kontrolü teması",
    "Multiverse fikri: paralel benlikler ile Vedik karma teorisi kesişir mi",
    "Kozmik kurguda ritüel sahneleri neden bu kadar sık kullanılır",
    "Yapay zeka anlatılarında 'ruh' sorusu nasıl işleniyor",
    "Kozmik kurgu yazarken gerçek ezoterik sistemleri araştırma süreci",
    "Kısa hikaye taslağı: gizli bir tarikatın modern şehirdeki izleri",
    "Kozmik kurguda müzik ve frekans teması — sesin yaratıcı gücü miti",
  ].map((t, i) => ({ title: t, category: "Kozmik Kurgu & Bilim Kurgu", format: f(i) })),

  // ---------------------------------------------------------------------
  // 5) VEDİK ASTROLOJİ (20)
  // ---------------------------------------------------------------------
  ...[
    "Sidereal ile tropikal zodyak farkı: neden burcun 'değişebilir'",
    "Ayanamsa nedir, Lahiri hesabı diğerlerinden nasıl ayrılır",
    "Nakshatra sistemi: 27 kısım neden burçlardan daha hassas",
    "Rahu-Ketu: Ay düğümlerinin karma haritasındaki rolü",
    "Vedik astrolojide ev sistemi: whole sign neden tercih edilir",
    "Quintile (72°) açısı: gerçek teknik ile pazarlama dilinin farkı",
    "Biquintile (144°) açısı: zahmetsiz yetenek kodu ne anlama gelir",
    "Merkür-Plüton açıları: derin bilgiyi ifade etme yeteneği",
    "Transit nedir, natal haritayla nasıl 'konuşur'",
    "Satürn transiti: neden hep 'ders' teması ile anılır",
    "Jüpiter transiti: büyüme mi şişme mi, aradaki farkı anlamak",
    "Yükselen burç hesaplama mantığı: doğum saati neden bu kadar kritik",
    "Vimshottari dasha sistemi: hayat dönemlerinin Vedik haritası",
    "Ay burcu ile güneş burcu arasındaki duygusal-kimlik ayrımı",
    "Gezegen retrosu: geri gitme illüzyonu haritada ne değiştirir",
    "Vedik astrolojide yoga (kombinasyon) kavramı — Raja Yoga örneği",
    "Günlük transit okuma pratiği: sabah ritüeli olarak gökyüzü takibi",
    "Nakshatra pada'ları: aynı yıldızın 4 farklı yüzü",
    "Kritik dereceler ve orb kavramı — açı ne zaman 'gerçekten' etkili",
    "Kendi haritanla diyalog: astrolojiyi kader değil ayna olarak okumak",
  ].map((t, i) => ({ title: t, category: "Vedik Astroloji", format: f(i) })),

  // ---------------------------------------------------------------------
  // 6) RİTÜEL & UYGULAMA NOTLARI (20)
  // ---------------------------------------------------------------------
  ...[
    "Sabah ritüeli kurma: 10 dakikalık imajinasyon pratiği adım adım",
    "Altın Oran nefes egzersizi: teknik ve hissedilen fark",
    "Ayna çalışması: kendinle göz göze gelmenin zorluğu ve faydası",
    "Yeni kozmik sembol çalışması: rastgele bir imgeyle içsel diyalog",
    "Renk meditasyonu günlüğü: her gün farklı bir renkle 7 gün deneyi",
    "Dokunma ve his çalışması: bedenle bilinç arasındaki köprü",
    "Tat-koku çalışması: unutulan duyularla hafıza tetikleme",
    "Gölge ve korkuyla yüzleşme seansı nasıl planlanır",
    "Rüya takibi için pratik not alma sistemi",
    "Ritüel alanı hazırlama: fiziksel mekânın psikolojik etkisi",
    "Niyet belirleme ritüeli: kelimelerin gücü üzerine pratik notlar",
    "Ay evresine göre ritüel zamanlama: dolunay ile yeniay farkı",
    "Günlük 'kutsal an' pratiği: sıradan bir eylemi ritüelleştirmek",
    "Sembolle uyanma: yatmadan önce bir imge seçip sabah not alma",
    "Zihin haritası (mind map) ile ritüel sonrası içgörüleri kayıt altına alma",
    "Grup ritüeli ile bireysel ritüel arasındaki enerji farkı",
    "Ritüel sonrası entegrasyon: yaşananı gündelik hayata taşımak",
    "Kişisel sembol sözlüğü oluşturma: kendi imge diline sahip olmak",
    "48 saatlik dijital sessizlik deneyi ve bilinç üzerindeki etkisi",
    "Ritüel notu şablonu: tarih, niyet, deneyim, içgörü dört başlığı",
  ].map((t, i) => ({ title: t, category: "Ritüel & Uygulama Notları", format: f(i) })),

  // ---------------------------------------------------------------------
  // 7) KİTAP / FİLM ANALİZİ (20)
  // ---------------------------------------------------------------------
  ...[
    "'Dune' serisinde kehanet ve kolektif bilinç teması analizi",
    "'Annihilation' filminde dönüşüm ve kimlik kaybı sembolizmi",
    "'The Holy Mountain' (Jodorowsky) sahne sahne sembol analizi",
    "'Watchmen'de Alan Moore'un zaman ve determinizm okült okuması",
    "'Arrival' filminde dil, zaman ve bilinç ilişkisi",
    "'Solaris'te ayna evren ve bilinçdışı yansıma teması",
    "'True Detective' 1. sezonda döngüsel zaman ve okült imgeler",
    "H.P. Lovecraft'ın 'Çağrı'sında bilinmeyenin psikolojik gücü",
    "Ursula K. Le Guin'de Taoist felsefe izleri",
    "'The Matrix'te Gnostik kurtuluş mitinin yeniden yazımı",
    "Borges'in 'Babil Kütüphanesi'nde sonsuzluk ve anlam arayışı",
    "'Twin Peaks'te sembolizm: kırmızı oda ne anlatıyor",
    "Carlos Castaneda kitaplarındaki algı kapıları tartışması",
    "'Midsommar'da ritüel ve topluluk psikolojisi analizi",
    "Alejandro Jodorowsky'nin tarot destesi ile sinemasının bağı",
    "'Interstellar'da zaman, sevgi ve boyut ötesi iletişim teması",
    "Philip K. Dick'in günlüklerinde (Exegesis) gerçeklik sorgusu",
    "'Sandman' (Neil Gaiman) serisinde arketip karakterler analizi",
    "'2001: A Space Odyssey'de evrim ve dönüşüm sembolizmi",
    "Umberto Eco'nun 'Foucault Sarkacı'nda komplo ve anlam arayışı",
  ].map((t, i) => ({ title: t, category: "Kitap & Film Analizi", format: f(i) })),

  // ---------------------------------------------------------------------
  // 8) RÜYA & RÜYA ÇALIŞMASI (20)
  // ---------------------------------------------------------------------
  ...[
    "Rüya günlüğü tutmaya nasıl başlanır: ilk hafta rehberi",
    "Tekrarlayan rüyalar: bilinçdışının ısrarla söylediği ne olabilir",
    "Yalancı uyanıklık (false awakening) deneyimi ve anlamı",
    "Berrak rüya (lucid dream) tekniklerine giriş",
    "Rüyada sembol okuma: aynı imge herkes için farklı mı anlatır",
    "Kabus rüyalarıyla çalışmak: kaçmak yerine yüzleşmek",
    "Uçma rüyaları: özgürlük mü kontrol arzusu mu",
    "Düşme rüyaları: kontrol kaybı temasının psikolojisi",
    "Rüyada tanıdık yüzler: gerçek kişi mi yoksa bir yön mü temsil ediyor",
    "Rüya ile meditasyon arası hipnagojik durum nedir",
    "Rüya çalışmasında renk sembolizmi: kırmızı bir rüya ne anlatır",
    "Rüyada zaman algısı neden gerçek zamandan farklı işler",
    "Öngörü rüyaları (precognitive dreams) tartışması: bilim ne diyor",
    "Rüyada su imgesi: duygusal durumun en sık görülen yansıması",
    "Rüya paylaşım pratiği: grup içinde rüya yorumlamanın faydası",
    "Uyku öncesi niyet belirleme rüya içeriğini değiştirir mi",
    "Karabasan (uyku felci) deneyimi: bilimsel ve mistik açıklamalar",
    "Rüyada ölüm imgesi: bitiş mi dönüşüm mü",
    "Rüya arketipleri: gölge, yaşlı bilge, animanın rüyalardaki izleri",
    "30 günlük rüya takibi deneyimimden çıkan örüntüler",
  ].map((t, i) => ({ title: t, category: "Rüya & Rüya Çalışması", format: f(i) })),

  // ---------------------------------------------------------------------
  // 9) KİŞİSEL HİKAYE & NİŞ (20)
  // ---------------------------------------------------------------------
  ...[
    "Neden okült sistemler ve bilinç bilim kurguyla iç içe — niş tanıtımı",
    "Yazılım geçmişimden okültizme: birbirine hiç benzemeyen iki dünya mı",
    "Bu içeriklere neden başladım: kişisel motivasyon hikayesi",
    "İlk ritüel deneyimim: beklentiyle gerçek arasındaki fark",
    "8 aylık eğitim sürecimde en çok neyi sorguladım",
    "Astrolojiyle tanışma hikayem: merakın ilk kıvılcımı",
    "Bilim kurgu sevgimin okültizme açtığı kapı",
    "İçerik üretmeye neden video değil de yazıyla başladım (ya da tersi)",
    "En çok yanlış anlaşılan okült kavram hakkında düşüncelerim",
    "Bu alanda 'otorite' olmanın bana göre anlamı",
    "İlk 30 günlük içerik üretim deneyimimden çıkardığım dersler",
    "Neden ders vermek değil hikaye anlatmakla başlıyorum",
    "Kendi sembol dilimi nasıl geliştirdim",
    "Bu yolculukta en çok neyden vazgeçmem gerekti",
    "Takipçilerimden gelen en ilginç soru ve cevabım",
    "Bir yıllık tutarlılık deneyi: neden her hafta içerik üretiyorum",
    "İçerik ile ritüel pratiğimi nasıl dengeliyorum",
    "Bu nişte kimseyle yarışmıyorum: neden kesişim noktası avantaj",
    "Gerilim/bilim kurgu yazarlığına ilk adımım",
    "Bu kanalın 3 yıllık hedefi ve bugünkü küçük adımlar",
  ].map((t, i) => ({ title: t, category: "Kişisel Hikaye & Niş", format: f(i) })),

  // ---------------------------------------------------------------------
  // 10) SORU-CEVAP & TOPLULUK (20)
  // ---------------------------------------------------------------------
  ...[
    "En çok sorulan soru: 'Astroloji bilim mi?' — dengeli bir cevap",
    "Takipçi sorusu: rüyamda tekrar eden bir sembol ne anlama gelir",
    "Soru-cevap: meditasyona başlarken en sık yapılan 3 hata",
    "'Okültizm ile din arasındaki fark ne?' sorusuna açık cevap",
    "Takipçi sorusu: quintile açısı olmayan biri yeteneksiz mi",
    "'Ritüel yapmak için özel eşyaya ihtiyaç var mı?' sorusu",
    "Soru-cevap: kozmik kurgu yazmak için ne kadar araştırma gerekir",
    "'Bilinç gelişimi ile terapi aynı şey mi?' netleştirme",
    "Takipçi sorusu: yükselen burcumu bilmiyorum, hâlâ okuyabilir miyim",
    "'Manipülatif hissettiriyor' eleştirisine şeffaf bir cevap",
    "Soru-cevap: her gün rüya görmüyorum, sorun mu var",
    "'Bu içerikler korku mu satıyor?' sorusuna dürüst yanıt",
    "Takipçi önerisi üzerine: hangi konuyu daha çok açmalıyım",
    "'Neden bazı gezegenler retro görünür?' basit bir açıklama",
    "Soru-cevap: ritüel sonrası hiçbir şey hissetmedim, normal mi",
    "'Sen bu konularda uzman mısın?' sorusuna net cevap",
    "Takipçi sorusu: aynı sembolü farklı kaynaklar farklı yorumluyor, hangisi doğru",
    "'İçerik takvimini nasıl planlıyorsun?' perde arkası",
    "Soru-cevap: bilim kurgu okumak bilinç gelişimine katkı sağlar mı",
    "Topluluk önerisi: sıradaki video/yazı konusunu birlikte seçelim",
  ].map((t, i) => ({ title: t, category: "Soru-Cevap & Topluluk", format: f(i) })),
];
