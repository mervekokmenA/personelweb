import { extraModule } from "./builder";
import { qz } from "../helpers";

export const elementlerKisaModule = extraModule({
  id: "ek-elementler-kadim-astroloji",
  title: "Elementler, Kadim Astroloji ve Ay Takvimleri: Kısa Dosyalar Kılavuzu",
  tagline: "Beş kısa dosyanın (Elementler, Elementler–Nitelikler, Elementler-2, Kadim Astroloji, Ay Takvimleri Webinarı) tek çatı altında okunması",
  description:
    "Yüklediğin beş kısa dosyanın ek modülü: 'Elementler (PDF)', 'Elementler – Nitelikler', 'Elementler-2', 'Kadim Astroloji Bilgileri' ve 'Ay Takvimleri ve Şifa Webinarı'. Modül dosyaların ortak temasını (dört element, nitelikler, zodyak, Ay kültü) tarihsel kaynaklarla karşılaştırır; sağlık/şifa/besin iddialarını doğrulanmamış olarak işaretler.",
  source: {
    file: "ElementLer_PDF.pdf; Elementler_-_Nitelikler.pdf; elementler-2.pdf; Kadim_Astroloji_Bilgileri.pdf; Ay_Takvimleri_Webinar_.pdf",
    author: "Belirtilmemiş / çeşitli (webinar: Kenan Yasin, deneyselastroloji.com)",
    language: "Türkçe",
    pages: 105,
    readNote: "Her dosyanın giriş sayfaları, başlık yapısı ve webinar slaytlarının konu listesi okundu. Dosyaların tam metni taranmadı.",
  },
  units: [
    {
      id: "k1",
      title: "1. Dört Element ve Nitelikler",
      description: "Elementler, nitelikler, Tetramorf ve elementallar: tarihsel çerçeve.",
      lessons: [
        {
          id: "el-tarih",
          title: "Dört element teorisinin tarihi",
          summary: "Thales–Anaksimenes–Herakleitos, Empedokles ve Aristoteles; modern 'madde hâlleri' benzetmesi.",
          body: `## Dosyaların ortak çekirdeği
- **"Elementler–Nitelikler"** dosyası, elementler teorisinin kökenini **Sokrates öncesi filozoflara** götürür: **Thales** (her şeyin kökeni Su), **Anaksimenes** (Hava), **Herakleitos** (Ateş). **Empedokles** (MÖ 5. yy.) evrenin **ateş, su, toprak, hava** olmak üzere dört kök maddeyle açıklandığını öne sürer; ardından **Aristoteles** elementleri **sıcak–soğuk, kuru–nemli** nitelikleriyle eşleştirir.
- Dosya, elementleri fiziksel dünyada **madde hâlleriyle** (plazma–Ateş, katı–Toprak, gaz–Hava, sıvı–Su) ilişkilendirir ve astrolojideki üç niteliği (**Öncü/Cardinal, Sabit/Fixed, Değişken/Mutable**) ekler; yorumlama için **Geleneksel (Helenistik)** ve **Modern (psikolojik)** iki paradigmayı karşılaştırır.
- **"Elementler (PDF)"** dosyası dört elementin Empedokles'ten Orta Çağ'a mizaç ve tıbbî öğretilerde kullanıldığını, ayrıca "yaşamsal enerji" için Prana, Qi, Chi, **Stupa** (Tibet) gibi adların aynı şey olduğunu iddia eder.

## Değerlendirme
- Antik Yunan kısmı (Thales, Anaksimenes, Herakleitos, Empedokles, Aristoteles) **felsefe tarihiyle uyumludur** (Okültizm modülü 2. ünite; SEP girdileri).
- "Prana = Qi = Chi" eşitliği **popüler bir basitleştirmedir**; bu kavramlar farklı geleneklerin farklı sistemleri içinde tanımlıdır ve **birebir aynı olduğu kanıtlanmış bir iddia değildir**.
- Madde hâlleri benzetmesi **modern bir yorumdur**; antik filozoflar bu eşleşmeyi yapmamıştır.
- "Stupa'nın küp–küre–spiral–yarımay" anlatısı Tibet stupasının **element sembolizmini** (kare/toprak, küre/su, koni/ateş, yarım ay/hava, damla/uzay) sadeleştiren bir anlatımdır; ayrıntı geleneksel kaynaklardan kontrol edilmelidir.

## Çalışma
Üç dosyadaki element tanımlarını yan yana bir tabloya yaz ve **hangi bilginin antik kaynaklı, hangisinin modern yorum olduğunu** işaretle.`,
          verification: `Üç dosyanın giriş bölümleri PDF'lerden okundu (Elementler–Nitelikler dosyasının metni karakter eksikliği nedeniyle bozuk taranmıştı; özetlendi). Antik filozof atıfları genel felsefe tarihi bilgisidir (Okültizm modülü 2. ünite). Prana/Qi eşitliği ve stupa anlatımı doğrulanmadı.`,
        },
        {
          id: "el-ezoterik",
          title: "Elementler-2: Tetramorf, elementaller ve okült kullanım",
          summary: "Dört element ve Hezekiel'in dört yaratığı, 'elementaller', her elementin okült nitelikleri ve Tarot'ta takımlar.",
          body: `## Dosyanın başlıkları
Mevlana (*Mesnevi* VI/222) epigrafıyla açılır. İçindekiler: **Tetramorf** (Kerubim; Hezekiel 10:9–10), **Dini sembollerde elementler**, **Prana ve Akaşa**, **Elementallar (elemental varlıklar)**, **Toprak / Su / Ateş / Hava** bölümleri, **Okült çalışmalarda elementler** ve **Tarot** (Arkana Major/Minor; Golden Dawn'da asaların ateşe karşılık gelmesi). Kaynakçada Doğu Büyüsü (İdries Shah) gibi kitaplar yer alır.

## Dikkat edilmesi gerekenler
- Dosya, **"gerçek bir ezoterik örgütte elementleri tanımak ilk inisiyasyondur"** ve "bazı sırları açıklayacağız" gibi söylem kullanır; bu bir **otorite/gizem söylemi**dir (Okültizm modülü 10. ünite, kırmızı bayraklar).
- **Tetramorf**: Hezekiel (Ezekiel) 1 ve 10'daki dört yüzlü yaratıklar ile Vahiy'deki dört canlı; bunların **element ve sabit burçlarla** (boğa–toprak, aslan–ateş, insan–hava, kartal–su) ilişkilendirilmesi **sonraki yorum gelenekleridir** (Hıristiyan sembolizmi/Altın Şafak); metnin kendisi bu eşleşmeyi yapmaz.
- **Elementaller** (sylph, undine, gnome, salamander) **Paracelsus** (16. yy.) tarafından sınıflanan ruh varlıklarıdır; bağımsız doğrulanmış varlıklar değil, **Rönesans doğa felsefesi kavramlarıdır**.
- **Tarot–element eşleşmesi** Altın Şafak kaynaklıdır (asa–ateş, kupa–su, kılıç–hava, tılsım–toprak; sistemler arası **farklılıklar vardır**).

## Çalışma
Dosyanın her bölümü için "tarihsel kaynak / sonradan yorum / doğrulanamayan" etiketini kullanarak üç sütunlu bir tablo yap.`,
          verification: `İçindekiler ve giriş PDF'ten okundu. Tetramorf'un yorum geleneği ve Paracelsus'un elementalleri genel okültizm tarihi bilgisidir; bu derste URL ile doğrulanmadı (bkz. Okültizm modülü 2. ve 6. üniteler). Tarot–element eşleşmesinin sistemler arası farklılığı genel bilgidir.`,
        },
      ],
      quiz: [
        qz("Empedokles dört kök maddeyi nasıl sıralar?", ["Ateş, su, toprak, hava", "Altın, gümüş, bakır, demir", "Güneş, Ay, Mars, Satürn", "Işık, ses, ısı, hareket"], 0),
        qz("Aristoteles elementleri neyle eşleştirir?", ["Sıcak–soğuk, kuru–nemli nitelikleriyle", "Gezegenlerle", "Renklerle", "Müzik notalarıyla"], 0),
        qz("Astrolojideki üç nitelik hangileridir?", ["Öncü, Sabit, Değişken", "Ateş, Su, Hava", "Gece, Gündüz, Alacakaranlık", "Aktif, Pasif, Nötr"], 0),
        qz("'Prana = Qi = Chi' eşitliği nasıl değerlendirilmelidir?", ["Popüler bir basitleştirme; farklı sistemlerin kavramlarıdır", "Kanıtlanmış eşitlik", "Fiziksel formül", "Yasal tanım"], 0),
        qz("Elementaller kavramını sınıflandıran Rönesans yazarı kimdir?", ["Paracelsus", "Platon", "Crowley", "Plotinos"], 0),
      ],
    },
    {
      id: "k2",
      title: "2. Kadim Astroloji ve Ay Takvimleri",
      description: "'Kadim Astroloji Bilgileri' ve Ay Takvimleri webinarının içeriği ve eleştirisi.",
      lessons: [
        {
          id: "el-kadim",
          title: "Kadim Astroloji Bilgileri: gözlemevleri, zodyak ve beden–evren tablosu",
          summary: "Eski rasathaneler, ortak zodyak anlatısı, Isaac Myer ve Richard Payne Knight alıntıları.",
          body: `## Dosyanın girişi ("Zodyak ve Burçları")
- Persler büyücülere "**Yıldız Sayan**" derdi; Mısırlıların göksel cisimlerin hareketlerini ve kuvvetlerini ölçtüğü; dünyada **ilkel rasathane kalıntıları** (Jaipur'daki dev güneş saati taşları, Pekin'deki Çin rasathanesi) bulunduğu anlatılır.
- "Paganlara göre yıldızlar canlı varlıklardı; İlk Yahudi Patrikleri de gök cisimlerinin insan işlerini etkilediğine inanırdı" denir; örnek: **Hakimler** kitabından "göklerle savaştılar, yörüngelerindeki yıldızlar bile Sisera'yla savaştı" (Hâkimler 5:20).
- "Kaldeliler, Fenikeliler, Mısırlılar, Persler, Hindular ve Çinliler **genel karakteri birbirine çok benzeyen bir zodyağa** sahipti" iddiası yapılır.
- Dosya **Isaac Myer** ve **Richard Payne Knight** (*The Symbolical Language of Ancient Art and Mythology*) alıntılarına ve **"insan bedeni ile dışsal evren arasındaki ilişkiyi gösteren bir tabloya"** yer verir (burç–beden bölgesi eşleşmesi).

## Eleştirel not
- **Jaipur'daki Jantar Mantar** gerçek bir gözlemevidir (18. yy., Sawai Jai Singh); bu bölüm doğrudur ve ziyaret edilebilir.
- "Her kültür aynı zodyağa sahipti" **abartılı bir genellemedir**: 12'li tropikal zodyak Babil kaynaklıdır ve Yunan/Helenistik dönemde kesinleşmiştir; Çin ve Hint sistemleri (Çin hayvan döngüsü, Hint nakshatraları) **farklı yapılardadır**.
- **Burç–beden bölgesi tablosu** (melothesia) antik astrolojide gerçek bir gelenektir ancak **tıbbi kanıt değildir**.
- **Yıldız Sayan = büyücü** ifadesi popüler anlatıdır; Pers büyücü/magos sınıfının astronomik rolü tartışmalıdır.

## Çalışma
Astroloji modülünün tarihsel derslerini (Babil, Helenistik) açıp bu dosyadaki üç iddiayı kontrol et.`,
          verification: `Dosyanın girişi PDF'ten okundu. Jantar Mantar'ın 18. yüzyılda yapıldığı genel bilgidir; zodyağın Babil kökeni ve Helenistik kesinleşmesi astroloji tarihi bilgisidir (Astroloji modülü 1. ünite). Hâkimler 5:20 atfı dosyada geçer. Burç–beden tablosunun tıbbi etkisi doğrulanmamıştır.`,
        },
        {
          id: "el-ay-webinar",
          title: "Ay Takvimleri ve Şifa Webinarı: konu listesi ve eleştirel okuma",
          summary: "Ay kültü, güneş kültü, sinodik ay ve tarım gözlemleri; 'Burçlar ve beden bölümleri', 'besinler' ve 'diyet' başlıkları.",
          body: `## Slayt başlıkları
Kültürler ve kozmogonileri · Neden rasat etmişler? · Ay ve Güneş kültü · Şifanın tanımı · Babil kozmolojisi ve kozmogonisi · **Ay'ın fazları** · **Burçlar ve beden bölümleri** · **Besinler ile ilişkisi – diyetler** · Ay ile bakım, **şifa takvimleri oluşturma ve takip**. Slaytlar **deneyselastroloji.com / Kenan Yasin** iletişim bilgilerini içerir.

## Slaytlardaki tarihsel anlatılar
- **İki tür yaratılış:** *creatio ex nihilo* ve "sirküler kreasyon"; yaratılışın kaotik olduğu, düzenlenmeye ihtiyaç duyduğu ve gözlemin bu düzenden doğduğu.
- **Ay kültü:** Asur kralı II. Sargon betimlemesi; **Ay Tanrısı Sin**; ay ışığı altında yemin ve ticaret; **Paleolitik "Ay günlüğü" kemik plakalar** (Abri Blanchard, Fransa; Ermitaj Müzesi); ay–bereket ilişkisi (Eliade 2005: 187 atfıyla).
- **Güneş kültü:** Mithras kabartması (Louvre, 2.–3. yy.). Slayt: **Güneş = canlılık, vitalite ve sirkadiyen ritim; Ay = bitkiler, habitat, su vb.**
- Zirai döngüler **Ay'ın sinodik dönüşleri** baz alınarak hesaplanmış; suların Ay ile ilişkisi (met–cezir).

## Eleştirel not
- **Paleolitik "Ay takvimi" yorumu** (kemik plakalardaki çentikler) **tartışmalı bir arkeolojik yorumdur** (Marshack'ın hipotezi); kesin değildir.
- **Met–cezir** Ay'ın çekim etkisiyle doğrudur; ancak **bitki büyümesi, doğum ve ruh hali** gibi alanlarda Ay evresi etkisi için **bilimsel kanıt zayıf veya tutarsızdır** (Astroloji modülü Atölye 1'de Ay günlüğüyle sınamayı öğrendin).
- **Burç–beden bölgesi, besin ve diyet önerileri** geleneksel (melothesia/astro-tıp) iddialardır; **tıbbi tavsiye değildir**.

## Bu sitedeki araç
**Ay Takvimi** sayfası (ana sayfa → Ay Takvimi) evreleri, Ay burcunu ve Ay yaşını hesaplar; "şifa takvimi" iddialarını **kendi günlüğünle test etmek** için veri sağlar.

## Çalışma
Webinar başlıklarından birini seç; "tarihsel anlatı / arkeolojik kanıt / modern iddia" üç sütunuyla değerlendir.`,
          verification: `Slayt başlıkları ve ilk slaytlar PDF'ten okundu. Sin, Sargon, Mithras ve Eliade atıfları slaytlarda geçer. Met–cezir ve Ay etkisi için bilimsel durum genel bilgidir (Astroloji modülü, Ay günlüğü dersi). Paleolitik Ay çentik yorumunun tartışmalı olduğu genel arkeoloji bilgisidir; bu derste URL ile doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("Jaipur'daki devasa güneş saati taşlarından oluşan gözlemevi hangi adla anılır?", ["Jantar Mantar", "Stonehenge", "Ulugh Beg", "Giza"], 0),
        qz("Ay Tanrısı Sin hangi kültürle ilişkilidir?", ["Mezopotamya (Asur/Babil)", "Mısır", "Aztek", "Viking"], 0),
        qz("Met–cezir olayı neyle açıklanır?", ["Ay'ın (ve Güneş'in) çekim etkisiyle", "Ay evresinin ruh haline etkisiyle", "Burçlarla", "Rüzgârla"], 0),
        qz("Burç–beden bölgesi ve besin önerileri için doğru değerlendirme nedir?", ["Geleneksel iddialardır; tıbbi tavsiye değildir", "Kanıtlanmış diyet planıdır", "Klinik rehberdir", "Yasal zorunluluktur"], 0),
        qz("Paleolitik 'Ay günlüğü' kemik plaka yorumu için doğru ifade nedir?", ["Tartışmalı arkeolojik yorumdur", "Kesin bilimsel gerçektir", "Hukuki belgedir", "Hiç yorum yapılmamıştır"], 0),
        qz("Bu sitede Ay evrelerini ve Ay burcunu nereden görebilirsin?", ["Ay Takvimi sayfasından", "Maliyet sayfasından", "Yapboz sayfasından", "Ayarlar sayfasından"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Elementlerin tıbbi/mizaç ve diyet eşleşmeleri ('medikal astroloji'):** Sağlık iddiası; kanıt yok. Yalnızca başlık düzeyinde belirtildi.
- **Elementaller (sylph, undine vb.) ve prana/akaşa bölümlerinin ayrıntıları:** Doğrulanamaz doktrin/inanç; açıklamalar verilmedi.
- **'Elementler-2' dosyasındaki okült çalışma yöntemleri:** Talimat verilmedi.
- **Webinardaki Ay temelli şifa takvimi ve beslenme önerileri:** Tıbbi tavsiye değildir; kanıt yok.
- **Dosyaların tam metni:** Elementler–Nitelikler dosyasının metni karakter kaybıyla bozuk taranmış; Kadim Astroloji dosyasının sonu okunmadı.
- **Dosya yazarları:** Çoğunda künye yok; Ay webinarı dışında yazar bilgisi doğrulanamadı.`,
});
