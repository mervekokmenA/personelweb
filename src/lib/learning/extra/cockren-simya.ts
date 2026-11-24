import { extraModule } from "./builder";
import { qz } from "../helpers";

export const cockrenModule = extraModule({
  id: "ek-cockren-simya",
  title: "Simya Sanatı ve Simyacılar (Archibald Cockren)",
  tagline: "Simyanın tarihi anlatısı ve 'pratik' bölüm: efsane ile kayıt arasındaki farkı ayırmayı öğren",
  description:
    "Yüklediğin 'Archibald Cockren — Simya Sanatı ve Simyacılar' (Mitra Yayınları, 2008, çev. Murat Sağlam; özgün adı Alchemy Rediscovered and Restored) kitabının ek modülü. Kitabın iki kısmını (Teorik: tarih, Pratik: metaller ve 'beşinci element') haritalar; simyacılarla ilgili anlatıları tarihsel kayıtlarla karşılaştırır; tıbbi/pratik iddiaları doğrulamaz ve talimat vermez.",
  source: {
    file: "Archibald_Cockren_-_Simya_Sanat__ve_Simyac_lar.pdf",
    author: "Archibald Cockren (çev. Murat Sağlam, Mitra Yayınları 2008)",
    language: "Türkçe (çeviri)",
    pages: 125,
    readNote: "Künye, içindekiler, Önsöz'ün bir kısmı, Zümrüt Tablet metni ve 2. bölümün (İlk Avrupalı Simyacılar) girişi okundu. Diğer bölüm metinlerinin çoğu ve 'pratik' kısım derse konmadı.",
  },
  units: [
    {
      id: "c1",
      title: "1. Kitap ve Tarih Kısmı",
      description: "Künye, içindekiler ve simyacı anlatılarının eleştirel okuması.",
      lessons: [
        {
          id: "ck-kitap",
          title: "Kitap, yazar ve içindekiler",
          summary: "Mitra Yayınları 2008; Zümrüt Tablet ile açılış; iki kısım: Teorik (8 bölüm) ve Pratik (7 bölüm).",
          body: `## Künye
*Simya Sanatı ve Simyacılar* — **Archibald Cockren**, çeviri **Murat Sağlam**, **Mitra Yayınları**, "Ezoterik Klasikler 5", 1. baskı **Kasım 2008**. Özgün ad: ***Alchemy Rediscovered and Restored***. Kitap, **Zümrüt Tablet**'in bir Türkçe versiyonuyla açılır ("Aşağıdaki yukarıdaki gibidir ve yukarıdaki aşağıdaki gibidir…").

## İçindekiler
**1. Kısım — Teorik:** Simyanın Başlangıçları · İlk Avrupalı Simyacılar · Nicholas Flamel'in Hikâyesi · Basil Valentine · Paracelsus · On Altıncı ve On Yedinci Asırda Simya · İngiliz Simyacılar · St. Germain Kontu.
**2. Kısım — Pratik:** Metallerin Tohumu · Merkür Tini (Cıva Ruhu) · Beşinci Element (I) · Günlük Hayatta Beşinci Element · Metallerden İlaç Yapımı · Uygulama · Sonuç.

## Önsöz'ün yazar tanıtımı
Önsöz yazarı Cockren'in Londra'da hastanelerde **masaj, tedavi egzersizleri ve elektrik tedavi** alanlarında çalıştığını, 1908'den itibaren özel muayenehanesi olduğunu ve "yirmi yılı aşkın süredir **metalbilim, iyon kimyası ve bakteriyoloji** öğrencisi" olduğunu anlatır; kitaptaki iddiaların "hastalıklarla savaşmak için adanmış bir ömrün otoritesiyle" yapıldığını söyler. Bu, **bir başkasının övgüsüdür**; Cockren'in laboratuvar bulgularının hakemli doğrulaması yoktur.

## Çalışma
Önsöz'deki övgü cümlelerini "kanıtlanabilir / kanıtlanamaz" olarak ayır; hangi iddiaların bağımsız bir kaynakla kontrol edilebileceğini yaz.`,
          verification: `Künye, içindekiler ve Önsöz PDF'ten okundu. PDF'in Türkçe karakter kodlaması bozuk (okunabilir ama hatalı) olduğundan ifadeler özetlendi. Yazarın mesleki iddiaları bağımsız bir kaynakla doğrulanmadı.`,
        },
        {
          id: "ck-anlatilar",
          title: "Simyacı anlatıları: kayıt mı, efsane mi?",
          summary: "Artephius'un 'bin yıl' anlatısı, Flamel, Basil Valentine ve Paracelsus: ayırt etme alıştırması.",
          body: `## Kitaptaki örnek
2. bölümde Cockren, 12. yüzyıl simyacısı **Artephius**'u **"yaklaşık bin yıl yaşadığı rivayet edilen"** bir yazar olarak sunar ve onun "beşinci elementi kullanarak" uzun yaşadığını söylediği bir pasajı aktarır. Aynı bölümde Haçlı Seferleri döneminde simya merkezinin **İspanya'ya** kaydığı ve simyanın İspanya'ya **Araplar aracılığıyla** geldiği söylenir; ayrıca *Le Roman de la Rose* ve 13. yüzyıl kaynakları anılır.

## Tarihsel not (kısa)
- **Basil Valentine**: Kaynaklarda genellikle **takma ad** olarak değerlendirilir; 18. yüzyılda yazıların **Johann Thölde** (yaklaşık 1565–1624) tarafından yazıldığı ileri sürülmüştür; güncel araştırma daha temkinlidir: Thölde'nin yanında başkalarının da katkısı olabilir. Antimon üzerine *Triumphal Chariot of Antimony*'nin Leipzig baskısı 1604 veya 1624 olarak farklı kaynaklarda geçer (tarih tutarsızdır).
- **Nicolas Flamel** (genel bilgi): Paris'te yaşamış gerçek bir kâtip/kitapçıdır; "filozof taşını bulduğu" efsanesi ise ölümünden yüzyıllar sonra gelişmiştir. *(Bu derste bağımsız kaynakla doğrulanmadı.)*
- "Bin yıl yaşadı" gibi anlatılar **efsane/alegori** niteliğindedir; yaşam uzatma iddiaları tıbben doğrulanmamıştır.

## Yöntem
Her simyacı için sor: (1) **Gerçek bir kişi mi?** (2) **Eserler ona gerçekten ait mi?** (3) **Anlatı ne zaman yazıldı?** (4) **Kim yazdı, hangi amaçla?**

## Çalışma
Kitaptaki bölümlerden birini seç; yukarıdaki dört soruyu cevapla ve cevaplayamadıklarını "araştırılacak" listesine yaz.`,
          verification: `**Kaynak:** [Wikipedia — Basil Valentine](https://en.wikipedia.org/wiki/Basil_Valentine), [Encyclopedia.com — Valentine, Basil](https://encyclopedia.com/science/encyclopedias-almanacs-transcripts-and-maps/valentine-basil). Artephius pasajı ve İspanya anlatısı PDF'ten okundu (2. bölüm girişi). Flamel hakkındaki bilgi genel bilgidir; arama sonucu getirmedi, bu yüzden kesin iddia olarak sunulmadı.`,
        },
      ],
      quiz: [
        qz("Kitabın özgün adı nedir?", ["Alchemy Rediscovered and Restored", "The Emerald Tablet", "The Book of Abramelin", "Secret of Secrets"], 0),
        qz("Kitap hangi metinle açılır?", ["Zümrüt Tablet", "Zohar", "Kybalion", "Corpus Hermeticum"], 0),
        qz("'Basil Valentine' için kaynaklarda genel kanı nedir?", ["Büyük olasılıkla takma addır; Thölde ile ilişkilendirilir", "Kesin bir 15. yy. keşişidir", "Bir şehirdir", "Bir element adıdır"], 0),
        qz("'Bin yıl yaşadı' anlatısı için doğru değerlendirme hangisidir?", ["Efsane/alegori niteliğindedir; tıbben doğrulanmamıştır", "Kesin tarihsel olgudur", "Klinik kayıttır", "Resmi nüfus kaydıdır"], 0),
        qz("Kitabın 2. kısmının adı nedir?", ["Pratik", "Teorik", "Ek", "Sözlük"], 0),
        qz("Yazar tanıtımındaki övgü nasıl değerlendirilmelidir?", ["Başkasının övgüsü; bağımsız doğrulama gerektirir", "Kesin kanıt", "Yasal belge", "Hakem raporu"], 0),
      ],
    },
    {
      id: "c2",
      title: "2. Pratik Kısım: Ne Var, Neden Yok?",
      description: "Başlıklar ve eleştirel çerçeve.",
      lessons: [
        {
          id: "ck-pratik",
          title: "Pratik kısmın başlıkları ve sınırları",
          summary: "Metallerin tohumu, merkür tini, beşinci element, metallerden ilaç: iddialar ve neden talimat verilmez.",
          body: `## Başlıklar
- **Metallerin Tohumu**
- **Merkür Tini (Cıva Ruhu)**
- **Beşinci Element (I)** ve **Günlük Hayatta Beşinci Element**
- **Metallerden İlaç Yapımı**
- **Uygulama** ve **Sonuç**

## Neden talimat yok?
1. **Güvenlik:** Cıva ve diğer ağır metaller **zehirlidir**; evde metallerden "ilaç" hazırlamak ciddi sağlık riski taşır.
2. **Tıbbi iddia:** Kitaptaki "metallerden ilaç" fikri, geleneksel (iatrokimya / Paracelsus) bir yaklaşımın modern bir yorumu olarak sunulur; kanıtlanmış bir tedavi değildir.
3. **Doğrulama:** Yazar bu iddiaları kendi pratiğine dayandırır; bağımsız, hakemli bir doğrulama sunulmamıştır.

## Okuma biçimi
Simya modülü (Okültizm 7. ünite) simyanın tarihini **laboratuvar kimyası, felsefî-sembolik ve psikolojik (Jung) okuma** olarak üç katmanda ele alır. Bu kitabın pratik bölümü, **ilk katmanla** doğrudan ilgilidir ve bu yüzden en riskli ve en az doğrulanmış kısımdır.

## Jung'un simya okuması (kısa özet)
**C. G. Jung**, *Psychology and Alchemy* (1944) kitabında simya metinlerini **bilinçdışı süreçlerin sembolik anlatımı** olarak okur: *nigredo* (karartma), *albedo* (beyazlatma), *rubedo* (kızartma) aşamaları kişinin **bireyleşme (individuation)** yolculuğuna benzetilir; "taş" benliğin simgesidir. Jung bunu simyacıların niyetinin tarihsel bir kanıtı olarak değil, **kendi psikolojisi için bir yorum çerçevesi** olarak sunar; simyacıların çoğu hem maden hem de dinsel-felsefi dönüşümle ilgileniyordu.

## Çalışma
Aşağıdaki Jung özetiyle bu kitabın yaklaşımını karşılaştır: simya burada kimya mı, ruhsal süreç mi, yoksa ikisi birden mi?`,
          verification: `Başlıklar PDF içindekilerinden. Cıva ve ağır metallerin toksik olduğu genel bilgidir. "Metallerden ilaç" iddiasının bilimsel dayanağı bulunmadığı kanaati ders yazarının değerlendirmesidir; ayrı bir kaynak okunmamıştır.`,
        },
      ],
      quiz: [
        qz("Cıva ve ağır metallerle 'ilaç' hazırlamak neden risklidir?", ["Zehirlidirler", "Pahalıdırlar", "Yasaldır", "Hızlı kurur"], 0),
        qz("Okültizm modülü simyayı kaç katmanda ele alır?", ["Üç (laboratuvar, felsefî-sembolik, psikolojik)", "Bir", "İki", "Beş"], 0),
        qz("Kitabın 'pratik' kısmı için doğru değerlendirme hangisidir?", ["Bağımsız doğrulaması yoktur; talimat verilmez", "Klinik olarak kanıtlanmıştır", "Hakemli yayındır", "Resmî tıbbi kılavuzdur"], 0),
        qz("Jung simyayı nasıl okur?", ["İç dönüşümün sembolik süreci olarak", "Mutfak tarifi olarak", "Takvim olarak", "Tıp kitabı olarak"], 0),
        qz("Cockren kitabında Beşinci Element hangi kısımda yer alır?", ["Pratik kısım", "Teorik kısım", "Önsöz", "Dizin"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Pratik kısmın tarifleri (metallerin tohumu, merkür tini, beşinci element, metallerden ilaç):** Zehirli maddeler içerir; tıbbi iddia ve uygulama talimatı niteliğinde; doğrulanmadı.
- **Nicholas Flamel, Paracelsus, İngiliz simyacılar, St. Germain Kontu bölümlerinin ayrıntıları:** Okunmadı; yalnızca başlıkları verildi.
- **Cockren'in kişisel iddiaları ve başarı öyküleri:** Bağımsız kaynakla doğrulanamadı.
- **Flamel hakkındaki tarihsel bilgi:** Arama sonucu bulamadığım için kesin iddia olarak yazılmadı; genel bilgi olarak anıldı.
- **PDF'in tam metni:** Türkçe karakter kodlaması bozuk olduğundan bazı bölümler okunamadı.`,
});
