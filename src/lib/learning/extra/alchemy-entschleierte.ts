import { extraModule } from "./builder";
import { qz } from "../helpers";

export const alchemyHanswilleModule = extraModule({
  id: "ek-alchemy-sembolik",
  title: "Alchemy: Simyanın Sembolik Dili (Hanswille & Brumlich)",
  tagline: "Prima materia, üç ilke ve 'taş' anlatısı: yoğun bir simya metnini okumak için kılavuz",
  description:
    "Yüklediğin 'alchemy.pdf' (Gerhard Hanswille & Deborah Brumlich, 1991; Die entschleierte Alchemie'nin İngilizce çevirisinden Türkçe makine çevirisi) için ek modül. Metin simyanın sembolik dilini, Merkür/Kükürt/Tuz ilkelerini ve 'Taşın dereceleri' anlatısını içerir; bu modül yalnızca terimleri ve metnin iddia yapısını öğretir, laboratuvar uygulaması vermez.",
  source: {
    file: "alchemy.pdf",
    author: "Gerhard Hanswille & Deborah Brumlich (1991; Türkçe makine çevirisi)",
    language: "Türkçe (makine çevirisi, İngilizce kaynaktan)",
    pages: 90,
    readNote: "Künye, giriş bölümü ('Simyanın Sembolik Dili'), materia/üç ilke kısmı ve son bölüm (Taş'ın dereceleri) okundu. Metnin ortası taranmadı.",
  },
  units: [
    {
      id: "h1",
      title: "1. Simyanın Dili ve Temel Kavramlar",
      description: "Sembolik dil, Merkür türleri, prima materia ve üç ilke.",
      lessons: [
        {
          id: "ha-dil",
          title: "'Simyanın sembolik dili': giriş ve uyarılar",
          summary: "Dorn'dan alıntı, 'Merkür' kavramının çokluğu ve hermetik dilin anahtarı sorunu.",
          body: `## Künye (PDF'te yazanlar)
Kitabın **telif bilgisi**: Gerhard Hanswille ve Deborah Brumlich, **1991**; Almanca özgün ad ***Die entschleierte Alchemie***; İngilizce çeviri bir Kanada yayıncısı (Merker Publishing) tarafından yayımlanmış. PDF'in kendisi **makine çevirisi** olduğu için terimler ve cümleler bozulmuş olabilir.

## "Simyanın Sembolik Dili" girişinin anlattıkları
- Giriş, 1602 tarihli **Dorn** alıntısıyla açılır: "Daha önce İlahi Işık tarafından aydınlanmadıkça hiçbir ölümlünün bu Sanatı anlaması imkânsızdır."
- Eski **spagirik** ustaların terminolojisinin "karanlık bir labirent" olduğu, hermetik ilkeleri bilmeyenler için; **önce klasik ustaların yazılarını** ve elementler teorisini bilmek gerektiği söylenir.
- **Merkür'ün birçok anlamı:** *Mercurius universalis*, *Mercurius Philosophorum*, *Mercurius corporeus*, *Mercurius duplicatus*; "beyaz ve kırmızı", "uçucu ve sabit" cıva ayrımı. Yazarlar, **C. G. Jung**'un bile bu "Merkür sembollerinin" arasında yolunu bulamadığını, çünkü "hermetik sembolik dilin anahtarına sahip olmadığını" iddia eder.
- Yazarlara göre simyacılar birçok **Kükürt, Tuz, Altın (en az üç), Ateş (dört), Su (üç)** ve "Büyük İş için üç farklı materia" ayırt eder.

## Eleştirel not
"Anahtarı yalnız bizde var" tarzı söylem, **doğrulanması imkânsız bir otorite iddiasıdır**; simya tarihçileri aynı sembolizmi tarihsel bağlama (Paracelsus, Dorn vb.) göre okur. Jung'un yorumu ise simyayı **psikolojik semboller** olarak anlamaya çalışır (Okültizm modülü 7. ünite).

## Çalışma
Giriş bölümündeki "anahtar bizde" iddialarını işaretle; her iddia için "bağımsız doğrulanabilir mi?" diye sor.`,
          verification: `Giriş ve künye PDF'ten doğrudan okundu (makine çevirisi; ifadeler özetlendi). Dorn alıntısı ve Jung'a yönelik iddia kitabın beyanıdır; Jung'un simya yorumuyla ilgili ayrıntı bu derste doğrulanmadı.`,
        },
        {
          id: "ha-materia",
          title: "Prima materia, Materia secunda ve üç ilke (kitabın anlatımı)",
          summary: "Üç materia basamağı; Merkür–Kükürt–Tuz üçlüsü ve 'Merkezi Tuz'.",
          body: `## Kitabın kavramsal şeması

- **Materia prima universalis** (*ilk materia*): "Simyacıların Mercurius'u, Evrensel Ruh, Dünya" olarak anılır.
- **Materia remota / secunda** ("ikinci/uzak materia"): kitaba göre "küçük dünyevi kaos", **Basilius Valentinus**'tan alıntıyla *Antimonium* olarak da anılan "Satürn Minera"; metin bunu çok sayıda kapalı adla (cennetsel çiy, Ay'ın tükürüğü, kanatsız ejderha, yeşil aslan vb.) anar.
- **Materia proxima / tertia** ("yakın/üçüncü materia"): üç krallığın (mineral, bitki, hayvan) özel varlıkları.
- **Üç ilke:** **Merkür** (uçucu kısım), **Kükürt** (sabit kısım: Güneş–Ay, kırmızı–beyaz) ve **Tuz**; "Merkezi Tuz" **hermafrodit** olarak tarif edilir (uçucu ve sabit, erkek ve dişi) ve "üç ilkeyi kendinde barındıran Tuz" diye anılır.

## Terim hazinesi (okuma için)
*Decknamen* (örtülü adlar): bir maddenin onlarca ismi olabilir; bunlar **madde adı olmayabilir**, süreç evresini veya felsefî kavramı da anlatabilir.

## Eleştirel not
Paracelsus'a atfedilen **tria prima** (Merkür–Kükürt–Tuz) öğretisi tarihsel olarak gerçektir; ancak kitabın "Satürn Minera = antimon" gibi **özdeşleştirmeleri** diğer simya yazarlarıyla çelişebilir. Bu tür eşitlikler yazara özgü okumalar olarak ele alınmalıdır.

## Çalışma
Bu derste geçen on kapalı adı çıkar; her biri için "madde mi, evre mi, felsefî kavram mı?" diye sorgula (cevap bilmiyorsan "bilinmiyor" yaz).`,
          verification: `Materia/üç ilke bölümü PDF'ten okundu; ifadeler özetlendi. Paracelsus'un tria prima öğretisi genel bilgidir (bkz. Okültizm 7. ünite); kitabın özdeşleştirmeleri bağımsız doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("Metin 'Simyanın Sembolik Dili'ne hangi alıntıyla başlar?", ["Dorn (1602)", "Hermes Trismegistus", "Paracelsus (1537)", "Agrippa"], 0),
        qz("Üç ilke hangileridir?", ["Merkür, Kükürt, Tuz", "Ateş, Su, Hava", "Ruh, Beden, Zihin", "Güneş, Ay, Yıldız"], 0),
        qz("Merkür'ün farklı tanımları (universalis, philosophorum…) ne gösterir?", ["Aynı terimin farklı bağlamlarda farklı anlamlar taşıdığını", "Kitabın bozuk olduğunu", "Cıvanın zehirsiz olduğunu", "Kitabın kısa olduğunu"], 0),
        qz("'Anahtar bizde' tarzı iddialar nasıl değerlendirilmelidir?", ["Doğrulanması zor otorite iddiaları olarak", "Kesin bilgi olarak", "Yasal belge olarak", "Tıbbi reçete olarak"], 0),
        qz("Decknamen nedir?", ["Simyada örtülü (gizli) adlar", "Bir element", "Bir alet", "Bir kitap"], 0),
      ],
    },
    {
      id: "h2",
      title: "2. 'Taş'ın Dereceleri' Anlatısı ve Güvenli Okuma",
      description: "Metnin sonundaki üç derece anlatısı ve neden talimat verilmediği.",
      lessons: [
        {
          id: "ha-tas",
          title: "Taş'ın üç düzeni (kitabın anlatımına göre)",
          summary: "Birinci–ikinci–üçüncü düzen taş: renk, psişik ve fiziksel etkiler iddiaları.",
          body: `## Kitabın anlattığı üç düzen

Son bölümde kitap "**Taş**"ın düzenlerini sıralar:
- **Birinci düzen:** İlk beyazlatma ve kırmızılaştırma sonrası bile "çok uçucudur"; renklendirme gücü "1:10'dan fazla değildir"; Beden ve Ruh gevşek bağlıdır.
- **İkinci düzen (Lapis):** Kitap bunu "**ruhsal ve psişik** olarak renk veren" bir taş olarak anlatır; "psişik yansımalara etki" ve "şeytan çıkarma, psikolojik rahatsızlıkların giderilmesi" gibi iddialar içerir, "İsa ve Havarilerinin şifa mucizelerinin bu düzene ait olduğu" söylenir.
- **Üçüncü düzen:** "**Fiziksel olarak renk değiştirir**": metallerin dönüşümü, "gençleşme", "başkalaşıma" kadar bedenin dönüşümü iddiaları; "yalnızca tam gelişmiş Simyacılar ve Gül Haçlılar bu güce sahiptir" denir.

## Nasıl okunmalı?
Bunlar **simya geleneğinin mitolojik/dinî iddialarıdır**. **Metallerin altına dönüştürülebildiğine** dair bilimsel/tarihsel bir kanıt yoktur; "gençleşme" ve "şifa" iddiaları tıbben doğrulanmamıştır. Modern kimya ve nükleer fizik, **elementlerin dönüşümünü** (nükleer reaksiyonlarla) ancak simya anlatılarından bambaşka bir mekanizmayla tanımlar.

## Uyarı
Bu modül **hiçbir laboratuvar uygulaması önermez**; ağır metaller, asitler ve cıva buharı **ciddi biçimde tehlikelidir**.

## Çalışma
"Taş'ın üç düzeni"ni, Jung'un simyaya psikolojik yaklaşımıyla (bireyleşme aşamaları) bir tabloya koyup karşılaştır.`,
          verification: `Taş'ın dereceleri anlatısı PDF'ten okundu (özetlendi, makine çevirisi). Metallerin altına dönüşümüne dair kanıt bulunmadığı ve nükleer dönüşümün farklı olduğu genel bilimsel bilgidir; kaynak URL'si eklenmedi. İddialar yazarlara atfedilmiştir.`,
        },
      ],
      quiz: [
        qz("Kitaba göre Taş'ın 'üçüncü düzeni' hangi etkiyi iddia eder?", ["Fiziksel dönüşüm (metaller, gençleşme)", "Yalnızca renk değiştirme", "Hava durumunu değiştirme", "Para basma"], 0),
        qz("Bu iddialar için doğru değerlendirme hangisidir?", ["Simya geleneğinin mitolojik/dinî iddialarıdır; bilimsel kanıtı yoktur", "Kanıtlanmıştır", "Resmî belgedir", "Klinik çalışmadır"], 0),
        qz("Bu modül laboratuvar uygulamasını neden önermez?", ["Ağır metaller, asitler ve cıva buharı tehlikelidir", "Çok kolay olduğu için", "Yasak olmadığı için", "Pahalı olduğu için"], 0),
        qz("Jung'un simya yaklaşımı nedir?", ["Simyayı bireyleşme sürecinin sembolik anlatımı olarak okur", "Simyayı mutfak kimyası sayar", "Simyayı reddeder", "Takvim sayar"], 0),
        qz("Merkür–Kükürt–Tuz üçlüsü hangi geleneğin tria prima öğretisidir?", ["Paracelsus geleneği", "Hint Ayurveda", "Antik Mısır astronomisi", "Modern kimya"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Laboratuvar süreçleri ve tarifler (kalsinasyon, destilasyon, tentür hazırlama, 'iksir'):** Cıva, antimon ve asitler gibi tehlikeli maddeler içerir; talimat verilmedi.
- **'Taş'ın üç düzeni'nin fiziksel/tıbbi etkileri:** Doğrulama yok; yalnızca iddia olarak aktarıldı.
- **Metnin orta bölümü:** Makine çevirisi ve yoğun terimler nedeniyle taranmadı.
- **Jung'a ve diğer araştırmacılara yönelik yargılar:** Kitabın görüşü; doğrulanmadı.
- **Yazarlar hakkında biyografik bilgi:** PDF'te yok; bağımsız araştırma yapılmadı.`,
});
