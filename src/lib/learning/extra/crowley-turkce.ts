import { extraModule } from "./builder";
import { qz } from "../helpers";

export const crowleyModule = extraModule({
  id: "ek-crowley-turkce",
  title: "Crowley'nin Türkçe Kitapları: Ay Çocuk, Sihirli Günlük, Astrolojik Yazılar",
  tagline: "Üç farklı tür: roman, günlük pratiği derlemesi ve astroloji incelemesi — yazarı doğru okumak için kılavuz",
  description:
    "Yüklediğin üç Aleister Crowley kitabının ek modülü: 'Ay Çocuk' (roman, Altıkırkbeş 2004), 'Aleister Crowley ve Sihirli Günlük Uygulaması' (James Wasserman derlemesi, Sekmet Books 2003; Türkçe makine çevirisi) ve 'Tam Astrolojik Yazılar' (Symonds & Grant, Duckworth 1974; Liber 536 vb.; Türkçe makine çevirisi). Modül her kitabın türünü, yapısını ve kaynak değerini ayırır; talimat vermez.",
  source: {
    file: "aliester-crowley-ay-cocuk.pdf; aleister-crowley-ve-sihirli-gunluk-uygulamas.pdf; aleister-crowley-in-tum-astrolojik-yaz_lar.pdf",
    author: "Aleister Crowley (derleyenler: James Wasserman; John Symonds & Kenneth Grant)",
    language: "Türkçe (çeviri / makine çevirisi)",
    pages: 633,
    readNote: "Her üç kitabın künyesi, önsöz/girişleri ve içindekileri okundu; Ay Çocuk'un önsözünde yazar biyografisi, Sihirli Günlük'ün girişi ve Astrolojik Yazılar'ın editör girişi ile Liber 536 önsözü okundu. Romanın olay örgüsü ve ritüel/teknik metinler derse konmadı.",
  },
  units: [
    {
      id: "r1",
      title: "1. Ay Çocuk: Bir Roman ve Yazarın Biyografisi",
      description: "Edebi eser mi, öğreti mi? Önsözdeki biyografinin okunması.",
      lessons: [
        {
          id: "cr-ay-cocuk",
          title: "Ay Çocuk (Moonchild) nasıl okunur?",
          summary: "Türkçe baskının künyesi; önsözdeki biyografik anlatı ve ona dair eleştirel uyarılar.",
          body: `## Künye
***Ay Çocuk*** (*Moonchild*) — **Aleister Crowley**, Türkçesi **Özgür Umut Hoşafçı**, **Altıkırkbeş Yayın**, 1. baskı **Mayıs 2004**, Kadıköy. Eser bir **romandır**; öğreti kitabı değildir.

## Önsözün anlattığı biyografi (özet)
- Edward Alexander Crowley, **12 Ekim 1875**, Warwickshire; gençken adını "Aleister" yaptı.
- Aile **Darbyite / Plymouth Kardeşleri** türü köktendinci bir mezhebe bağlıydı; babasının 1887'de ölümünden sonra mezhep okuluna gönderildi ve orada kötü muamele gördüğü anlatılır; annesi ona "Canavar" demiş, o da **666 / "Beast"** lakabını benimsemiştir.
- Önsöz, Crowley'in sonradan kendini "Master Therion" ilân etmesini Teosofi'nin "Üstatlar" fikrinden etkilenmesiyle ilişkilendirir.
- Önsöz yazarı ayrıca Crowley'in kendini **Éliphas Lévi'nin reenkarnasyonu** saydığını söyler (Lévi 1875'te ölmüştür).

## Eleştirel not
- Bu önsöz **popüler bir biyografik özet ve yorumdur**; bazı ifadeler psikolojik tahmin içerir ("okul müdürü bilinçaltında Cemiyet başkanıydı" gibi) ve **kanıtlanmış olgu değildir**.
- Crowley'in "Lévi'nin reenkarnasyonu" iddiası **kendi beyanıdır**.
- Bir romanı yazarın "öğretisi" saymak yanıltıcıdır; kurgu, karakterlerin ve olayların yorumuna açık bir edebî tür olarak okunmalıdır.

## Çalışma
Önsözdeki cümleleri üç sütunda sınıfla: "olgu (kaynak aranabilir)", "Crowley'in beyanı", "önsöz yazarının yorumu".`,
          verification: `Künye ve önsöz Türkçe PDF'ten doğrudan okundu; ifadeler özetlendi. Doğum tarihi ve mezhep bilgisi önsözde geçer; bağımsız biyografilerle (örn. Symonds, Kaczynski) karşılaştırılması önerilir. Romanın yazılış/yayın yılı bu derste verilmedi (PDF'te okunmadı).`,
        },
      ],
      quiz: [
        qz("Ay Çocuk hangi türde bir eserdir?", ["Roman", "Öğreti kitabı", "Astroloji kılavuzu", "Tıp kitabı"], 0),
        qz("Türkçe baskıyı yayımlayan kuruluş hangisidir?", ["Altıkırkbeş Yayın", "Hermes", "Mitra", "Mavi Kalem"], 0),
        qz("Önsöz yazarının psikolojik yorumları nasıl değerlendirilmelidir?", ["Yorum/tahmin olarak; kanıtlanmış olgu sayılmaz", "Kesin kanıt olarak", "Yasal belge olarak", "Tıbbi rapor olarak"], 0),
        qz("'Lévi'nin reenkarnasyonu' iddiası kimden gelir?", ["Crowley'in kendi beyanı", "Mahkeme kararı", "Tarih kitabı", "Hukuk kaydı"], 0),
        qz("Ay Çocuk romanının Türkçe çevirmeni kimdir (künyeye göre)?", ["Özgür Umut Hoşafçı", "Anita Tatlıer", "Faruk Gültekin", "Murat Sağlam"], 0),
      ],
    },
    {
      id: "r2",
      title: "2. Sihirli Günlük Uygulaması",
      description: "Wasserman'ın derlemesi: kayıt tutmanın okült çalışmadaki yeri.",
      lessons: [
        {
          id: "cr-gunluk",
          title: "Büyülü günlük: derleme, kaynaklar ve neden önemli?",
          summary: "John St. John (1909), A Master of the Temple (1919), 28 Teorem, Liber E; Crowley'in 'kayıt' vurgusu.",
          body: `## Künye
*Aleister Crowley ve Pratik Büyülü Günlük* — **James Wasserman** (derleyen), **Sekmet Books** 2003 baskısı (ilk baskı 1993, New Falcon). PDF **Türkçe makine çevirisidir**. Kitap, Crowley'in iki "günlük modeli"ni içerir: ***John St. John*** (*The Equinox* I:1, Londra 1909) ve ***A Master of the Temple*** (*The Equinox* III:1, 1919), ayrıca **Magick'in 28 Teoremi** (*Magick in Theory and Practice*, Paris 1929), **Liber E vel Exercitiorum** (*The Equinox* I:1, 1909) ve diğer metinler (Wasserman'ın bibliyografik notlarına göre).

## Girişin ana fikri
Wasserman, Crowley'in **kendi kazanım sistemi içinde büyülü günlüğün önemi konusunda ısrar ettiğini** söyler; yıllardır birçok öğrencinin bu talimatı gözden kaçırdığını, kendisinin ise yaklaşık çeyrek asırdır günlüğünü Crowley'in önerdiği doğrultuda tuttuğunu yazar. Kitaptan alıntı: "**Kayıt, Harikulade Yolculuk'un cesur Deniz Kaptanlarının hem haritası hem de kaydıdır.**" (*A Master of the Temple*, s. 150).

## Bu sitedeki yöntemle bağ
Bu eğitim panelinin de önerdiği "günlük + eleştirel inceleme" yöntemi (Okültizm modülü 1. ünite) **modern kayıt disiplinidir**. Crowley'in vurgusu, pratiği **ölçülebilir ve geriye dönük incelenebilir** kılma amacına yarar; kayıt, kişinin kendi önyargılarını fark etmesinde de yardımcıdır.

## Dikkat
Kitap Crowley'in **Thelema sistemine** (ve Wasserman'ın O.T.O. bağlantısına) dayanır; bu çerçeveyi kabul etmek zorunda değilsin. Kayıt tutma fikri her geleneğe uyarlanabilir.

## Çalışma
Kendi günlüğün için tek sayfalık bir şablon yaz: tarih, ne yaptım, koşullar (uyku, ruh hali), sonuç, **alternatif açıklamalar**.`,
          verification: `Künye, yayın bilgileri ve girişin ilgili paragrafları PDF'ten okundu (makine çevirisi; özetlendi). Alıntılanan cümle girişte epigraf olarak yer alır. Wasserman'ın O.T.O. bağlantısı kitabın telif bilgisinden (O.T.O. hakları) anlaşılır; ayrıntı doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("Kitabı derleyen kimdir?", ["James Wasserman", "Kenneth Grant", "Israel Regardie", "Gerald Yorke"], 0),
        qz("Crowley'in 'günlük modeli' olarak anılan metinlerden biri hangisidir?", ["A Master of the Temple", "Liber Null", "Corpus Hermeticum", "Emerald Tablet"], 0),
        qz("Kitapta alıntılanan ilke nedir?", ["Kayıt hem harita hem kayıttır", "Rüyalar asla yazılmamalı", "Günlük gereksizdir", "Kayıt sadece geceleri tutulur"], 0),
        qz("Günlük tutmanın bilişsel faydası nedir?", ["Önyargıları fark etmek ve pratiği geriye dönük incelemek", "Zamanı yavaşlatmak", "Gelecekten haber almak", "Para kazanmak"], 0),
        qz("PDF için doğru uyarı nedir?", ["Makine çevirisidir; hatalar olabilir", "Resmî tercümandır", "Latince yazılmıştır", "Akademik tezdir"], 0),
      ],
    },
    {
      id: "r3",
      title: "3. Tam Astrolojik Yazılar (Liber 536 ve Ötesi)",
      description: "Crowley'in astrolojiye yaklaşımı ve kitabın yapısı.",
      lessons: [
        {
          id: "cr-astroloji",
          title: "Crowley astrolojiyi nasıl kullandı? İçindekiler ve ironi",
          summary: "Editör girişi (Symonds & Grant), Liber 536 'Astroloji Üzerine Bir İnceleme', 'Burçlar nasıl sahte' ve Neptün/Uranüs bölümleri.",
          body: `## Künye
***The Complete Astrological Writings*** — Aleister Crowley; **John Symonds & Kenneth Grant** editörlüğünde, **Duckworth, Londra, 1974**. Türkçe PDF makine çevirisidir. İçerik: *A Treatise on Astrology (Liber 536)*, *How Horoscopes Are False*, *Batrachophrenoboomachia* ve gezegen bölümleri.

## Editör girişinin ana noktaları
- Golden Dawn üyelerine "astrolojik güçlerin gizli nitelikleri" öğretilirdi: **gezegenler Sephiroth'a, burçlar Hayat Ağacı'nın yollarına** bağlanır; her iki sistemin Kabala ve Tarot ile ilişkisi kurulurdu.
- Crowley **1898'de** Altın Şafak'a girer girmez astroloji çalışmaya başladı (23 yaşında).
- Editörlere göre onun astrolojiye tutumu **temelde büyüsel**: "kendini adamış bir astrolog değil, astrolojiyi silahlarından biri olarak kullanan bir sihirbaz"; astrolojiyi **tahmin bilimi** olarak kullanmaz.

## Liber 536 — içindekiler
Gezegenlerin temel onurları · Gezegenlerin üçlü üçlüsü (triplicities) · **Astrolojinin genel prensipleri** · Astrolojinin anahtarı · Teknik unsurlar · **On iki ev** · Gezegenlerin görünümleri (açılar) · **Harita nasıl kurulur** · **Bir figürü yargılamanın genel ilkeleri** · Gezegen/burç/ev anlamları · İnsan ve evren · **Neptün** (burçlarda, diğer gezegenlerle, 12 evde) · **Uranüs** (burçlarda, 12 evde) · "Horoskoplar nasıl sahte" · *Batrachophrenoboomachia*.

## Önsözdeki ironi
Liber 536'nın önsözü "astrolojinin bir bilim değil, **bir aldatmaca, şarlatanlık ve sahtekârlık** olduğunun matematiksel olarak kesin olduğunu" söyleyerek açılır; editör dipnotu bunu **Crowley'in ironisinin tipik bir örneği** olarak niteler ("Bana inanmayın!" diyen öğretmen). Yani ilk cümleler **kelimesi kelimesine okunmamalıdır**.

## Okuma ilkeleri
1. Crowley astrolojiyi **Hayat Ağacı ve Tarot sistemine** bağlar (bkz. ek modül *777*).
2. Bölümler Neptün/Uranüs gibi **modern gezegenlere** odaklıdır (Crowley'in kendi yorumları).
3. Bu içerik **klasik astroloji** (Astroloji modülü) ile birlikte okunmalı; fark ve benzerlikler belirlenmelidir.

## Çalışma
Liber 536 içindekilerini Astroloji modülü 1–4. derslerin başlıklarıyla eşleştir; Crowley'in ek yaptığı (modern gezegen, Kabala bağı) kısımları işaretle.`,
          verification: `Editör girişi, içindekiler ve Liber 536 önsözü Türkçe PDF'ten doğrudan okundu (makine çevirisi; özetlendi). Dipnottaki ironi notu metinde geçer. Crowley'in astrolojiyi "silah" olarak kullandığı ifadesi editörlerin yorumudur.`,
        },
      ],
      quiz: [
        qz("Liber 536'nın önsözündeki 'astroloji sahtekârlıktır' ifadesi nasıl okunmalıdır?", ["Crowley'in ironisi olarak; kelimesi kelimesine değil", "Kesin bilimsel sonuç olarak", "Resmî rapor olarak", "Mahkeme kararı olarak"], 0),
        qz("Editörlere göre Crowley astrolojiyi nasıl kullandı?", ["Büyüsel bir araç olarak; tahmin bilimi olarak değil", "Yalnızca tahmin için", "Takvim için", "Tıbbi teşhis için"], 0),
        qz("Crowley hangi yıl Altın Şafak'a girdi (kitaba göre)?", ["1898", "1875", "1909", "1929"], 0),
        qz("Kitapta hangi modern gezegenlere ayrı bölümler ayrılmıştır?", ["Neptün ve Uranüs", "Mars ve Venüs", "Güneş ve Ay", "Merkür ve Satürn"], 0),
        qz("Golden Dawn geleneğinde gezegenler neyle ilişkilendirilirdi?", ["Hayat Ağacı'ndaki Sephiroth ile", "Tarot mühürleriyle", "Kristallerle", "Rünlerle"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Ay Çocuk'un olay örgüsü ve yorumu:** Roman okunmadı; yalnızca künye ve önsöz kullanıldı.
- **Önsözün psikolojik tahminleri ve kişisel yargıları:** Kanıtlanmış olgu olmadığı için aktarılmadı veya yorum olarak etiketlendi.
- **Sihirli Günlük'teki ritüel ve teknik metinler (Liber E egzersizleri vb.):** Uygulama talimatı olarak verilmedi.
- **Liber 536'nın ayrıntılı gezegen/ev yorumları:** Taranmadı; astrolojik yorumlar için bağımsız doğrulama yok.
- **Crowley'in bireysel iddiaları ve biyografik anekdotları:** Bağımsız biyografilerle doğrulanmadı.
- **Bu üç dosyanın PDF'lerinin tam metni:** İkisi makine çevirisi; hatalara açık.`,
});
