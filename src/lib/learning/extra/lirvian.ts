import { extraModule } from "./builder";
import { qz } from "../helpers";

export const lirvianModule = extraModule({
  id: "ek-lirvian-notlari",
  title: "Lirvian Araştırma Notları: Okuma ve Doğrulama Kılavuzu",
  tagline: "Kendi notların için kaynak, kanıt ve iddia ayrımı: Pisagor'dan kuantum yorumlarına",
  description:
    "Yüklediğin 'Lirvian E. — Verilen Araştırmalar / Kendim İçin Kısa Notlar' (90 sayfa) dosyasının ek modülü. Notlar çok geniş bir alanı (Pisagor okulu, Emet, Fohat, elementler, kuantum–Hermetizm, enerji bedenleri, siddhiler, ses, astroloji, eterik beden, Spinoza, Platon/Plotinos, 'Lirvian Ekolü' programı) kapsar. Modül her bölümü 'klasik kaynağa dayanan', 'sonradan eklenmiş yorum' ve 'doğrulanamayan iddia' olarak ayırır.",
  source: {
    file: "Lirvian_E._Verilen_Araştırmalar_-_Kendim_İçin_Kısa_Notlar.pdf",
    author: "Lirvian E. (kişisel/okul notları)",
    language: "Türkçe",
    pages: 90,
    readNote: "İçerik başlıkları, Pisagor okulu bölümü, EMET bölümü, kuantum–Hermetizm kesişimi bölümü ve 'Lirvian Ekolü' program bölümü okundu. Diğer bölümlerin ayrıntıları taranmadı.",
  },
  units: [
    {
      id: "n1",
      title: "1. Notların Haritası ve Kaynak Durumu",
      description: "Hangi başlıklar var, hangileri klasik kaynağa dayanıyor?",
      lessons: [
        {
          id: "ln-harita",
          title: "İçerik haritası ve sınıflandırma",
          summary: "Pisagor, Emet, Fohat, elementler, kuantum, enerji alıcıları, yüksek duyular, ses, astroloji, eterik beden, Spinoza, Platon/Plotinos, program.",
          body: `## Başlıklar (PDF'ten)

| Bölüm | Kaynak durumu (bu modülün değerlendirmesi) |
|---|---|
| **Pisagor Okulu** (yapı, inisiyasyon kademeleri, yürüyüşler) | Kısmen klasik kaynağa dayanır (Iamblichus, Porphyrios, Diogenes Laertios); ayrıntılar **geç ve efsane karışık** |
| **EMET kavramı** | Yahudi/Kabalistik gelenek; harf yorumları **gelenek yorumudur** |
| **Fohat / "okült elektrik"** | **Teosofi kavramı** (Blavatsky); fizikteki elektrik değil |
| **Dört element (Ignis/Tejas…)** | Antik Yunan + Hint (Mahabhuta) karşılaştırması; tarihsel |
| **Kuantum mekaniği ve Hermetik yasalar** | **Yanlış yorumlar içerir** (aşağıda) |
| **Meridyenler, nadiler, marma, Wei Chi** | GÇT ve Hint geleneği modelleri; kanıtlanmış anatomi değil |
| **Siddhiler, "clair"lar, psikokinezi, astral projeksiyon, levitasyon, materyalizasyon, medyumluk** | **Doğrulanmamış iddialar**; bilimsel kanıt yok |
| **Ses (pentatonik, harmonik)** | Ses ve müzik tarihi gerçek; "büyüsel etki" iddiaları doğrulanmamış |
| **Astroloji (burçlar, evler, açılar, büyük üçlü)** | Astroloji modülüyle örtüşür |
| **Eter, eterik ikiz (Linga Sharira), ektoplazma, ölüm** | Teosofi/Spiritüalizm modelleri |
| **Ontoloji, kozmoloji, epistemoloji** | Felsefe başlıkları |
| **Spinoza** (Deus sive Natura, conatus, determinizm) | **Gerçek felsefe**; kitap üzerinden kontrol edilebilir |
| **Platon, Plotinos** | Gerçek felsefe (bkz. ek modül *Plotinos*) |
| **"Lirvian Ekolü": Vücut kodlaması ve stimülasyon noktaları** | **Okula özgü pratik anlatısı**; bağımsız kaynak yok |

## Nasıl kullanılır?
Her bölümü kendi çalışma notuna alırken yanına üç etiket koy: **[K] klasik kaynakla doğrulanabilir**, **[Y] sonradan eklenmiş yorum/gelenek**, **[?] doğrulanamayan iddia**.

## Çalışma
Başlıkların her birine yukarıdaki üç etiketten birini yaz ve etiketini verdiğin gerekçeyi bir cümleyle belirt.`,
          verification: `İçerik başlıkları ve bölüm girişleri PDF'ten okundu. Etiketleme, bu derslerin ve önceki modüllerin (Okültizm 1–11) kaynak bilgisine dayanan değerlendirmedir; her bölüm için ayrı kaynak doğrulaması yapılmadı.`,
        },
      ],
      quiz: [
        qz("Notlardaki 'Fohat' hangi geleneğe aittir?", ["Teosofi (Blavatsky)", "Antik Yunan matematiği", "Modern fizik", "Hint tıbbı"], 0),
        qz("[K] etiketi neyi gösterir?", ["Klasik kaynakla doğrulanabilir bilgiyi", "Doğrulanamayan iddiayı", "Kişisel görüşü", "Reklamı"], 0),
        qz("Spinoza bölümü için doğru ifade hangisidir?", ["Gerçek bir felsefe sistemidir; kaynağı kontrol edilebilir", "Okült bir gelenektir", "Tıbbi bir teoridir", "Astrolojik bir tablodur"], 0),
        qz("Siddhiler ve psikokinezi iddiaları için doğru değerlendirme nedir?", ["Doğrulanmamış iddialardır; bilimsel kanıt yoktur", "Laboratuvarda kanıtlanmıştır", "Tıpta kullanılan yöntemlerdir", "Yasal haklardır"], 0),
        qz("Notlardaki Spinoza bölümünde hangi ilke geçer?", ["Deus sive Natura (Tanrı veya Doğa)", "Dört mizaç", "Tetraktys", "Zümrüt Tablet"], 0),
      ],
    },
    {
      id: "n2",
      title: "2. Üç Bölümü Yakından Okumak",
      description: "Pisagor okulu, kuantum–Hermetizm kesişimi ve 'Lirvian Ekolü' programı.",
      lessons: [
        {
          id: "ln-pisagor",
          title: "Pisagor Okulu: ne kadarı güvenilir?",
          summary: "Notlardaki Akousmatikoi/Mathematikoi, Tetraktys ve yürüyüş bölümleri üzerine kaynak eleştirisi.",
          body: `## Notların anlattığı
- **Krotone**'da MÖ 6. yy. sonunda kurulan okul; kadın ve erkeğe açık, mülkiyeti ortak.
- **Akousmatikoi** (dinleyiciler) 3–5 yıl sessizlik, perde arkasından ders; **Mathematikoi** iç çember: Tetraktys, ses aralıkları (monokord), ruh göçü.
- **Tetraktys:** 1+2+3+4 = 10; kürelerin müziği; ruh göçü ve vejetaryenlik.
- **Sabah yalnızlık yürüyüşü** (Iamblichus'tan atıfla): güneş doğmadan kalkış, kimseyle konuşmadan doğaya çıkış.

## Kaynak eleştirisi
- Pisagor'un kendisi **yazılı eser bırakmamıştır**; bilgiler **Platon, Aristoteles** ve çok daha geç **Iamblichus (3.–4. yy.), Porphyrios, Diogenes Laertios** üzerinden gelir. Bu biyografiler **efsane içerir** (Okültizm modülü 1. ünite).
- **Akousmatikoi/mathematikoi** ayrımı Iamblichus'tan gelen bir geleneğe dayanır; **tarihçiler arasında tartışmalıdır** (Belirsiz).
- "**Biyoelektrik dengeleme**", "doğal **prana**" gibi ifadeler **antik kaynaklarda geçmez**; sonradan eklenmiş modern yorumlardır.
- "Kürelerin müziği" Platon/Aristoteles geleneğinde bir **felsefi fikirdir**, fiziksel ses değildir.

## Çalışma
Notlardaki Pisagor bölümünün her paragrafını [K]/[Y]/[?] ile etiketle ve Okültizm modülü 1. ünite derslerindeki "doğrulama" notlarıyla karşılaştır.`,
          verification: `Notların Pisagor bölümü PDF'ten okundu. Pisagor'un yazılı eser bırakmadığı ve kaynakların geç/efsaneli olduğu genel tarih bilgisidir (Okültizm modülü 1. ünite, Wikipedia/SEP kaynaklarına bakınız). "Biyoelektrik" ifadelerinin antik kaynaklarda bulunmaması ders yazarının değerlendirmesidir.`,
        },
        {
          id: "ln-kuantum",
          title: "Kuantum mekaniği ve Hermetik yasalar: yaygın yanlış okumalar",
          summary: "Notlardaki gözlemci etkisi, dolanıklık ve gecikmeli seçim yorumlarının fizik açısından düzeltilmesi.",
          body: `## Notların savları ve fizik açısından değerlendirme

| Notlardaki savlar | Fiziğin söylediği |
|---|---|
| "Çift yarık deneyi, maddenin zihinden bağımsız var olamayacağını **kanıtlamıştır**; bilinç odaklandığında madde katılaşır." | Çift yarık deneyinde "gözlemci" **ölçüm aygıtıdır**; bilinç şart değildir. Deney, maddenin zihne bağımlı olduğunu **kanıtlamaz**. Kuantum yorumları (Kopenhag, çoklu dünya vb.) **tartışmalıdır**, kanıtlanmış bir "bilinç yaratır" sonucu yoktur. |
| "Dolanık parçacıklar birbirini **ışık hızını aşarak** etkiler; bu, 'ayrılık illüzyondur' ilkesinin ispatıdır." | Dolanıklık **korelasyon** üretir; bilgi/mesaj **ışıktan hızlı gönderilemez** (no-signalling). 'Metafizik birliğin ispatı' değildir. |
| "Gecikmeli seçim/kuantum silgisi deneyleri **geçmişi değiştirir**; zaman bir yanılsamadır." | Bu deneylerde geçmişteki bir olayın **fiziksel olarak değiştirildiği** gösterilmemiştir; sonuçlar korelasyonların sonradan **sınıflandırılmasıyla** ilgilidir. |

## Neden önemli?
"Kuantum mistisizmi" söylemi, **gerçek fizik sonuçlarını** metafizik doktrinlerin "kanıtı" olarak sunar; bu **mantıksal bir sıçramadır**. Hermetik "zihin" kavramı ile kuantum "gözlem" kavramı **aynı şey değildir**.

## Çalışma
Notlardaki üç savı kendi cümlelerinle yeniden yaz: "Deney neyi gösterdi?" ve "Hangi yorum bu sonucu bilinçle ilişkilendiriyor, o yorum kanıtlandı mı?"`,
          verification: `Notların ilgili bölümü PDF'ten okundu. Fizik değerlendirmesi standart ders kitabı bilgisidir (ölçüm aygıtı ≠ bilinç; no-signalling teoremi; gecikmeli seçimde geriye nedensellik gösterilmemiştir). Bu derste ayrı bir URL kaynağı verilmedi; ayrıntı için Stanford Felsefe Ansiklopedisi'nin "Measurement in Quantum Theory" ve "Bell's Theorem" girdilerine bakılabilir.`,
        },
        {
          id: "ln-program",
          title: "'Lirvian Ekolü' programı: iddialar ve güvenli yaklaşım",
          summary: "Vücut kodlaması, stimülasyon noktaları, eter/astral beden ve 'genel belirtiler' bölümü: doğrulama ve güvenlik.",
          body: `## Notların anlattığı
Son bölüm, okulun **"Vücut Kodlaması ve Stimülasyon Noktaları"** programını tanıtır: okült anatomi içinde bilgi aktarımı; hedefler: vücut kodlama, "simülatif alıcı merkezlerin aktive edilmesi" ve fiziksel bedenin ötesindeki kodlama merkezlerinin yeniden düzenlenmesi. **Beden üç şekilde** ele alınır: fiziksel, **eter** ve **astral** beden (zihinsel beden ayrı tutulur); sıra: önce fiziksel, sonra eter, sonra astral beden "oluşturulur".

**Genel belirtiler** olarak şunlar sayılır: ani farkındalıklar, içgörüler, **izlenme hissi**, uykudan önce/sonra bedende **ısınma, karıncalanma veya titreşim**, zaman zaman **yoğun titreşimler**.

## Eleştirel ve güvenli okuma
- Bu bölüm **bağımsız bir kaynağa dayanmayan** bir okul programı anlatısıdır; "eter beden/astral beden oluşturma" doğrulanabilir bir olgu değildir.
- Sayılan "genel belirtiler" (**izlenme hissi, titreşim, karıncalanma, uykuda bozulma**) aynı zamanda **kaygı, uykusuzluk, panik, hipnagojik deneyimler** ve bazı tıbbi/psikiyatrik durumların belirtileri olabilir. **Bu belirtileri otomatik olarak "enerjetik ilerleme" saymak sakıncalıdır.**
- Belirtiler yoğunlaşır, korku, uyku bozukluğu, gerçeklik algısında değişim ya da kendine zarar düşüncesi varsa **ruh sağlığı uzmanına başvur**; programı **durdur**.
- Başka kişi/okul tarafından verilen **"anahtar"/kodlama vaatlerini** (ücret, bağımlılık, sır) Okültizm modülü 10. ünitedeki **kırmızı bayraklar** ölçütüyle değerlendir.

## Çalışma
Bu bölümde tanımlanan her "belirti" için **sıradan açıklama** listesi yaz (uyku düzeni, stres, kafein, anksiyete…) ve hangi koşulda uzmana gitmen gerektiğini belirle.`,
          verification: `Program bölümü PDF'ten okundu (sayılan belirtiler ve beden tanımı özetlendi). Eleştirel ve güvenlik notları ders yazarının değerlendirmesidir; programın kendisi bağımsız olarak doğrulanmadı ve değerlendirilmedi.`,
        },
      ],
      quiz: [
        qz("Çift yarık deneyindeki 'gözlemci' fizik açısından nedir?", ["Ölçüm aygıtı (bilinç şart değil)", "Daima bir insan zihni", "Bir tanrı", "Bir gezegen"], 0),
        qz("Dolanıklık için doğru ifade hangisidir?", ["Korelasyon üretir; ışıktan hızlı mesaj iletmez", "Işıktan hızlı iletişim sağlar", "Telepatiyi kanıtlar", "Zamanı durdurur"], 0),
        qz("Pisagor için kaynak durumu nedir?", ["Yazılı eser bırakmadı; bilgi Platon, Aristoteles ve çok daha geç biyograflar üzerinden gelir", "Çok sayıda özgün eseri korunmuştur", "Eserleri Mısır'da bulunmuştur", "Eserleri modern yazılmıştır"], 0),
        qz("'İzlenme hissi/titreşim' belirtileri için güvenli ilk yaklaşım nedir?", ["Sıradan nedenleri (uyku, stres, anksiyete) düşünmek ve gerekirse uzmana başvurmak", "Hemen 'enerjetik ilerleme' saymak", "Programı hızlandırmak", "Kimseye söylememek"], 0),
        qz("'Biyoelektrik dengeleme' ifadesi antik Pisagor kaynaklarında geçer mi?", ["Hayır; sonradan eklenmiş modern yorumdur", "Evet, Iamblichus'ta açıkça geçer", "Evet, Aristoteles'te geçer", "Evet, Platon'da geçer"], 0),
        qz("'Kuantum mistisizmi' eleştirisinin özü nedir?", ["Gerçek fizik sonuçlarını metafizik doktrinlerin kanıtı gibi sunmak mantıksal bir sıçramadır", "Fizik yanlıştır", "Metafizik yasaktır", "Matematik gereksizdir"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Notların ayrıntılı bölümleri (Fohat/okült elektrik, elementlerin tek tek tanımları, meridyen/nadi/marma/Wei Chi, siddhi ve 'clair'lar, ses, eterik beden, ontoloji/kozmoloji):** Büyük bölümü doğrulanamayan iddialar veya modeller; tek tek kaynak doğrulaması yapılmadı. Bölüm başlıkları ve sınıflama verildi.
- **Spinoza ve Platon/Plotinos bölümleri:** Gerçek felsefe içerir ama bu derste notlar kitapla karşılaştırılmadı.
- **'Lirvian Ekolü' programının kodlama/stimülasyon noktaları ayrıntıları:** Talimat/iddia niteliğinde; bağımsız doğrulama yok, uygulama önerilmez.
- **Notların yazarı ve okulun geçmişi:** PDF'te bağımsız doğrulanabilir bilgi yok.
- **Psikokinezi, levitasyon, materyalizasyon, medyumluk bölümleri:** Bilimsel kanıt yok; Okültizm modülünün 'Eklenmeyenler' notuyla tutarlı olarak içerik verilmedi.`,
});
