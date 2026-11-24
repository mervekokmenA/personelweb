import { extraModule } from "./builder";
import { qz } from "../helpers";

export const goetiaModule = extraModule({
  id: "ek-goetia",
  title: "Goetia: Süleyman'ın Kitabı (Mathers–Crowley 1904)",
  tagline: "Lemegeton'un ilk kitabı: tarih, yapı ve Crowley'in psikolojik yorumu",
  description:
    "Yüklediğin 'Crowley — Goetia' PDF'inin tarihsel ve eleştirel okuma modülü. Bu modül çağırma (evokasyon) talimatı vermez; kitabın ne olduğunu, nasıl derlendiğini, içeriğinin yapısını ve Crowley'in giriş makalesindeki yorumunu öğretir.",
  source: {
    file: "Crowley_-_Goetia.PDF",
    author: "S. L. MacGregor Mathers (çev.), Aleister Crowley (ed.)",
    language: "İngilizce",
    pages: 98,
    readNote: "Önsöz, giriş makalesi, kısa tanıtım bölümü ve içindekiler yapısı okundu. 72 ruhun tek tek açıklamaları ve çağırma formülleri okunmadı/derse konmadı.",
  },
  units: [
    {
      id: "g1",
      title: "1. Kitap ve Tarihî Bağlam",
      description: "Lemegeton nedir, Goetia hangi kaynaklardan beslenir, 1904 baskısı nasıl ortaya çıktı?",
      lessons: [
        {
          id: "g-lemegeton",
          title: "Lemegeton ve Ars Goetia",
          summary: "Kitabın yeri: Süleyman'a atfedilen büyü kitapları geleneği ve beş bölümlü Lemegeton.",
          minutes: 20,
          body: `## Lemegeton ve Goetia

**Lemegeton** ("Süleyman'ın Küçük Anahtarı" adıyla da bilinir) 17. yüzyıl ortalarında derlendiği kabul edilen, Kral Süleyman'a atfedilen bir **grimuar** (büyü el kitabı) derlemesidir. "Küçük Anahtar" adı el yazmalarında geçmez; sonradan yaygınlaşmış bir addır.

Kitabın PDF'indeki "kısa tanıtım" bölümü, Lemegeton'un **5 kısımdan** oluştuğunu söyler (bazı el yazmaları dört kısım der):

| Kısım | Ad | Konusu (kitabın kendi anlatımıyla) |
|---|---|---|
| 1 | **Goetia** | "Kötü ruhlar" kitabı; Süleyman'ın ruhları bağlayıp kullanması |
| 2 | Theurgia-Goetia | Kısmen iyi, kısmen kötü "hava ruhları" |
| 3 | Ars Paulina | Gezegen saatlerini ve zodyak derecelerini yöneten ruhlar |
| 4–5 | Ars Almadel, Ars Notoria | Diğer bölümler |

Bu modül yalnızca ilk kısım olan **Goetia**'yı, yani PDF'in konusunu işler.

## Önemli ayrım
Kitabın kendisi Süleyman'a ait olduğunu **iddia eder**; tarih çalışmaları ise bunun bir gelenek atfı olduğunu, derlemenin çok daha geç olduğunu söyler. "Süleyman yazdı" demek bir iddia aktarımıdır, tarihsel olgu değildir.

## Lemegeton'un beş kısmı (klasik yapı)
| Kısım | Ad | Konu |
|---|---|---|
| 1 | **Ars Goetia** | 72 ruhun listesi, mühürleri ve nitelikleri |
| 2 | **Ars Theurgia-Goetia** | Yönlere bağlı ruhlar (31 ruh) |
| 3 | **Ars Paulina** | Gün ve gece saatlerine bağlı melekler |
| 4 | **Ars Almadel** | "Almadel" adlı mum tablasıyla ilişkilendirilen melek düzenleri |
| 5 | **Ars Notoria** | Bilgi ve hafıza için dualar (en eski kısım sayılır) |

> Sıra ve sayılar, sonraki baskılara ve el yazmasına göre değişir; Mathers/Crowley 1904 baskısı yalnızca **Ars Goetia**'yı içerir.

## Çalışma
Yukarıdaki 5 kısmı kendi cümlelerinle bir tabloya yaz; her kısım için "kaynağı ne kadar eski / hangi baskıda var?" sütunu ekle.`,
          verification: `**Kaynak:** [Wikipedia — The Lesser Key of Solomon](https://en.wikipedia.org/wiki/The_Lesser_Key_of_Solomon), [Esoteric Archives — Goetia](https://esotericarchives.com/solomon/goetia.htm). Kitabın kısa tanıtım bölümü PDF'ten okundu. Derleme tarihi (17. yy. ortası) kaynaklarda genel kabul olarak geçer; kesin tarih tartışmalıdır.`,
        },
        {
          id: "g-weyer",
          title: "Weyer'in kataloğu ve Goetia'nın kaynakları",
          summary: "Pseudomonarchia Daemonum ile ilişki, ruh sayısı ve farklar.",
          minutes: 20,
          body: `## Kaynak sorunu

Goetia'nın en belirgin kaynağı olarak **Johann Weyer**'in şeytan kataloğu *Pseudomonarchia Daemonum* (*De praestigiis daemonum* kitabına ek, 1577) (Belirsiz) gösterilir. Weyer katalogu, o dönemin büyü el yazmalarındaki isim listelerini derlemişti; amacı bunların **savunusu değil, eleştirisiydi**.

## Karşılaştırma (kaynaklarda geçen noktalar)

- Goetia **72** ruh sayar; Weyer'in kataloğunda 69 ruh (bazı kaynaklara göre metinde 72 sayısı geçmesine rağmen) listelenir (Belirsiz).
- **Vassago, Seere, Dantalion ve Andromalius** Goetia'ya sonradan eklenmiş kabul edilir.
- Weyer'deki **Pruflas** Goetia'da yer almaz.
- Sıralama farklıdır.

## Tarih belirsizliği
Weyer katalogunun ilk basım yılı (1577 mi, 1583 mü) (Belirsiz) ve Weyer'in kaç ruh saydığı (Belirsiz) kaynaklar arasında **tutarsızdır**; bu derste kesin bir sayı iddia edilmez.

## Çalışma
Dersteki Weyer–Goetia karşılaştırmasına (ruh sayısı, sıra, farklar) dayanarak iki katalog arasındaki farkı tabloya yaz.`,
          verification: `**Kaynak:** [Wikipedia — The Lesser Key of Solomon](https://en.wikipedia.org/wiki/The_Lesser_Key_of_Solomon), [Esoteric Archives — Weyer](https://www.faculty.umb.edu/gary_zabel/Courses/Phil%20281b/Philosophy%20of%20Magic/Arcana/Witchcraft%20and%20Grimoires/weyer.htm). Kaynaklar 69/72 sayısı ve basım yılı konusunda **birbiriyle uyuşmuyor**; bu yüzden bu ayrıntılar kesinlik iddiası olmadan verildi.`,
        },
        {
          id: "g-baski-1904",
          title: "1904 baskısı: Mathers çevirisi, Crowley editörlüğü",
          summary: "Kitabın önsözündeki 'ölü el' anlatısı, edebi oyun ve gerçek yayın bilgisi.",
          minutes: 20,
          body: `## Baskı

PDF'in kapağı: *The Book of the Goetia of Solomon the King* — "ölü bir elin" İngilizceye çevirdiği; **Aleister Crowley** tarafından "düzenlenen, doğrulanan, tanıtılan ve yorumlanan" bir kitap. Yayıncı: *Society for the Propagation of Religious Truth*, Boleskine (İskoçya), **1904**. Yaygın bilgiye göre çeviri **S. L. MacGregor Mathers**'a aittir; "ölü el" ifadesi bir edebi örtmecedir.

## Önsözün oyunu
*Prefatory Note*, çevirinin "Rosicrucian Düzeni'nin Gizli Şefi'nin emriyle" yapıldığını, çevirmenin "dört büyük prensin saldırısıyla" düştüğünü ve işin Crowley'e devredildiğini anlatır. Bu bir **yayın efsanesidir**; tarihî olgu olarak okunmamalıdır. Önsöz, Crowley'in A. E. Waite'e yönelttiği polemik dipnotlarıyla da doludur.

## İkinci ve üçüncü el kaynak notu
Elektronik sürüm *Celephaïs Press* tarafından (2003–2004) yeniden dizilmiştir; bu PDF bir **elektronik yeniden dizgi**dir, el yazması değildir. Yunanca ve İbranice kısımlarda dizgi hataları olabilir.

## Çalışma
Önsözdeki üç iddiayı seç: hangisi edebi kurgu, hangisi doğrulanabilir bilgi? Gerekçeni yaz.`,
          verification: `**Kaynak:** PDF'in kapak ve Prefatory Note bölümleri doğrudan okundu. Mathers'in çevirmen olduğu bilgisi [Wikipedia](https://en.wikipedia.org/wiki/The_Lesser_Key_of_Solomon) ve [Sacred Texts](https://sacred-texts.com/grim/lks/) kayıtlarıyla uyumludur. "Gizli Şef/ölü el" anlatısı edebi bir kurgudur; doğrulanabilir bir olgu değildir.`,
        },
      ],
      quiz: [
        qz("Lemegeton'daki Goetia kaçıncı kısımdır?", ["1.", "2.", "3.", "5."], 0),
        qz("'Lesser Key of Solomon' adı hakkında doğru ifade hangisidir?", ["El yazmalarında geçmeyen, sonradan yaygınlaşan bir addır", "Süleyman'ın kendi yazdığı addır", "Weyer'in koyduğu addır", "1904'te icat edilmiştir"], 0),
        qz("Goetia'nın en çok anılan kaynağı hangisidir?", ["Weyer'in Pseudomonarchia Daemonum kataloğu", "Corpus Hermeticum", "Zohar", "Zümrüt Tablet"], 0),
        qz("Kaynaklara göre hangisi Goetia'ya sonradan eklenmiş kabul edilir?", ["Vassago", "Pruflas", "Hiçbiri", "Hepsi Weyer'den"], 0),
        qz("1904 baskısının kapağında 'editör' olarak kim geçer?", ["Aleister Crowley", "A. E. Waite", "Johann Weyer", "Israel Regardie"], 0),
        qz("Önsözdeki 'Gizli Şef' anlatısı nasıl değerlendirilmelidir?", ["Edebi bir yayın efsanesi olarak", "Kesin tarihî olgu olarak", "Resmî belge olarak", "Mahkeme kaydı olarak"], 0),
      ],
    },
    {
      id: "g2",
      title: "2. İçerik Yapısı ve Crowley'in Yorumu",
      description: "Kitabın bölümleri, ruh hiyerarşisi ve Crowley'in 'beyin' yorumu.",
      lessons: [
        {
          id: "g-yapi",
          title: "Kitabın yapısı: ne nerede?",
          summary: "Önsöz, giriş makalesi, tanıtım, ruh hiyerarşisi, araçlar ve çağırma bölümleri — talimat vermeden bir harita.",
          minutes: 25,
          body: `## Haritası

PDF'in içindeki ana bölümler (kitabın kendi başlıklarıyla):

1. **Prefatory Note** — yayın efsanesi.
2. **Preliminary Invocation** — "Doğmamış Olan"a seslenen ön çağrı (Crowley dipnotlarla Thelema yorumları ekler).
3. **Introductory Essay (Crowley)** — psikolojik/materyalist yorum (sonraki ders).
4. **Brief Introductory Description** — Lemegeton'un 5 kısmının farklı el yazmalarındaki tanıtım metinleri, yan yana sütunlarda.
5. **Ruh sınıflaması** — ruhların rütbeye göre sıralanması (krallar, dükler, prensler, markiler vb.) ve "72 baş ruh".
6. **Araçlar bölümü** — *Magical Triangle of Solomon*, *Hexagram*, *Pentagram*, *Magic Ring*, *Secret Seal* başlıkları.
7. **Çağırma metinleri** — *First/Second Conjuration*, *Constraint*, *Invocation of the King*, *Conjuration of the Fire* ve *Licence to Depart* gibi başlıklar.
8. **Ruhların listesi** — her ruh için ad, rütbe, sunduğu iddia edilen "güç" ve mühür.

## Bu modülün sınırı
Çağırma metinlerinin ve araç çizimlerinin **nasıl uygulanacağı** burada öğretilmez; yalnızca ne olduklarını bilirsin. Bu tür metinlerin içeriği bir grimuar olarak tarihî-edebî açıdan incelenir.

## Çalışma
Dersteki 5 kısım listesine göre kendi PDF'inin bölümlerini işaretleyip bir içindekiler tablosu hazırla.`,
          verification: `**Kaynak:** PDF'in başlıkları ve satır yapısı doğrudan okundu (Conjuration/Invocation/Triangle/Hexagram/Pentagram/Magic Ring/Secret Seal başlıkları metinde geçer). Bölümlerin içeriği ve ruh listesi bu derse bilerek yazılmadı (bkz. "Eklenmeyenler").`,
        },
        {
          id: "g-crowley-yorum",
          title: "Crowley'in giriş makalesi: 'ruhlar beyindir' yorumu",
          summary: "Ritüelin duyusal uyaranlar yoluyla beyin değişikliği ürettiği savı; Crowley'in kendi çerçevesi ve sınırları.",
          minutes: 30,
          body: `## Savın özeti (Crowley'e göre)

Giriş makalesinde Crowley şunu savunur:

- Duyularımızla gelen her izlenim **beyindeki değişikliklere** bağlıdır; "ruh görme yanılsaması" da beyin değişikliğidir.
- Ceremonial magic'in öğeleri (daire, araçlar, ışık; sözler; tütsü; sakrament; dokunma; bunların zihinsel birleşimi) **olağandışı duyusal girdiler** üretir ve olağandışı bir beyin durumuna yol açar.
- Bu yüzden Goetia'nın **ruhları "insan beyninin parçalarıdır"**; mühürler bu bölgeleri görme yoluyla uyarmanın, Tanrı adları ise titreşim yoluyla denetlemenin yöntemleridir; tütsüler koku yoluyla yardım eder.
- "Ruh Cimieries mantık öğretir" ifadesi, onun deyişiyle, "mantık yetisine hizmet eden beyin bölgelerinin bu işlemle uyarılıp geliştirilebileceği" demektir.
- Süleyman'ın beş vaadi (bilgi, düşmanı yok etme, doğanın seslerini anlama, hazine, hastalık iyileştirme) de ya bilinçaltı bilgisini yüzeye çıkarmak ya da fizyolojik denetim olarak yeniden yorumlanır.

## Eleştirel not
Bu, **Crowley'in 1904'teki kişisel yorumudur**; modern sinirbilim tarafından doğrulanmış bir model değildir. Yazı, "deneysel" gibi görünse de ölçülebilir bir hipotez değildir; mühür–beyin bölgesi eşlemesi için bilimsel bir dayanak sunulmaz. Makale aynı zamanda **polemiktir**: A. E. Waite'in baskısını sert biçimde eleştirir.

## Neden okunur?
Crowley'in "ritüel = psikolojik teknoloji" fikri, 20. yüzyıl okültizmindeki psikolojik yorumların erken bir örneğidir. Bu bakışı öğrenmek, bir ritüelin hem "nesnel varlık" hem "zihinsel olay" olarak okunabileceğini gösterir.

## Çalışma
Makaleden iki iddia seç; birini "gözlemlenebilir bir sonuç doğurur mu?" diye eleştir, diğerini "metafor olarak ne anlatır?" diye yorumla.`,
          verification: `**Kaynak:** PDF'teki *Introductory Essay* doğrudan okundu; alıntılanan fikirler özetlenerek aktarıldı (Crowley'in beyin/duyusal uyaran savı, beş vaadin yeniden yorumu, Waite'e polemiği). Bilimsel doğrulama iddiası yoktur; yorum Crowley'e atfedilir.`,
        },
        {
          id: "g-etik",
          title: "Güvenli ve eleştirel okuma: sınırlar",
          summary: "Bir grimuarı okurken tarihsel mesafe, ruh sağlığı ve etik sınırlar.",
          minutes: 15,
          body: `## Nasıl okunmalı?

1. **Belge olarak**: Grimuar, geç Rönesans/erken modern dönemin inanç dünyasını gösteren bir kaynaktır.
2. **Yorum katmanı olarak**: Crowley'in girişi 1904'te yazılmış bir yorumdur; metnin kendisiyle karıştırılmamalıdır.
3. **Uygulama olarak değil**: Bu modül uygulama öğretmez. Kendi başına denemeler yapmayı düşünüyorsan **ruh sağlığı uzmanı** ve deneyimli bir öğretmen olmadan başlamak, özellikle uykusuzluk, kaygı, panik veya gerçeklik algısında değişim yaşıyorsan **önerilmez**.
4. **Sınırları önceden belirle**: Kimseye zarar verme niyeti içeren bölümleri (kitapta "düşmanı yok etme" vaadi gibi) kendi etik ilkelerinle değerlendir.

## Alıştırma
Okuma günlüğüne şu soruları yaz: Bu metin kimin için yazılmış? Hangi dünya görüşünü varsayıyor? Ben bunu hangi amaçla okuyorum?`,
          verification: `Bu bölüm okuma yöntemi ve güvenlik notudur; olgusal iddia içermez. Kaynak yaklaşımı için bkz. [Dion Fortune — Psychic Self-Defence](https://www.globalgreyebooks.com/online-ebooks/dion-fortune_psychic-self-defense_complete-text.html) (Okültizm modülü, 12. ünite).`,
        },
      ],
      quiz: [
        qz("Crowley'e göre 'Goetia'nın ruhları' nedir?", ["İnsan beyninin parçaları", "Gerçek şeytanlar", "Yıldızlar", "Süleyman'ın ordusu"], 0),
        qz("Crowley'e göre mühürlerin işlevi nedir?", ["Beyin bölgelerini görme yoluyla uyarmak/denetlemek", "Kâğıdı korumak", "Takvim tutmak", "Gezegenleri çizmek"], 0),
        qz("Crowley bu yorumu nasıl sunar?", ["Materyalist/psikolojik bir açıklama olarak", "Kilise öğretisi olarak", "Matematik kanıtı olarak", "Mitolojik bir hikâye olarak"], 0),
        qz("Bu yorum için doğru değerlendirme hangisidir?", ["1904'te yazılmış kişisel bir yorumdur; bilimsel olarak doğrulanmış değildir", "Modern sinirbilimce kanıtlanmıştır", "Resmî bir tıp makalesidir", "Tarihsel kayıttır"], 0),
        qz("Önsözdeki polemik kime yöneliktir?", ["A. E. Waite", "Eliphas Lévi", "Plotinus", "Weyer"], 0),
        qz("Bu modül hangi tür içeriği vermez?", ["Çağırma/ritüel uygulama talimatını", "Tarihî bağlamı", "Yapı haritasını", "Eleştirel okuma ipuçlarını"], 0),
        qz("Goetia'nın 'araçlar' bölümünde hangi başlık geçer?", ["Magical Triangle of Solomon", "Philosopher's Stone", "Emerald Tablet", "Tree of Life"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Çağırma (conjuration/invocation) metinleri ve ritüel adımları:** Bunların uygulama talimatı olarak verilmesi; tarihî/eleştirel okuma amacıyla uyuşmaz ve psikolojik güvenlik riski taşır. Yapıdaki başlıkları ve bağlamı verdim.
- **72 ruhun tek tek açıklamaları, güçleri ve mühürleri:** Her ruh için sunulan "güçler" kitabın iddiasıdır; bağımsız bir kaynakla doğrulanamaz. Katalog olarak okumak istersen PDF'in ilgili bölümünü kendin okuyabilirsin; "Düzenle" ile kendi notunu ekleyebilirsin.
- **Weyer kataloğunun 69/72 sayımı ve kesin basım yılı:** Kaynaklar arasında tutarsızlık var; kesin sayı yazılmadı.
- **Süleyman'a yazarlık atfının doğruluğu:** Bir gelenek iddiasıdır, doğrulanamaz.
- **Crowley'in beyin–mühür eşlemesi:** Kendi yorumudur; bilimsel doğrulama bulunmuyor.
- **Okunmayan kısımlar:** PDF'in ruh kataloğunun ayrıntıları ve ekleri (98 sayfa) bu modül için taranmadı.`,
});
