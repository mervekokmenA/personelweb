import { extraModule } from "./builder";
import { qz } from "../helpers";

export const arsVercanusModule = extraModule({
  id: "ek-ars-vercanus",
  title: "Ars Vercanus: İleri Magick Teknikleri (Wennergren)",
  tagline: "Modern bir pratik kılavuzun yapısı, paradigması ve eleştirel okuması",
  description:
    "Vasilios ve Lynn Wennergren'in 2014 tarihli kitabının ek modülü. Kitabın 'etherik gerçeklik' paradigmasını, teknik başlıklarını ve uygulama alanlarını haritalar; teknik talimatları vermez ve kitabın doğrulanamayan iddialarını yazara atfeder.",
  source: {
    file: "Ars_Vercanus__Advanced_Magickal_Technique.pdf",
    author: "Vasilios Wennergren & Lynn Wennergren",
    language: "İngilizce",
    pages: 412,
    readNote: "Künye, içindekiler ve bölüm başlıkları okundu. Teknik tariflerin metni (ritüel adımları) derse konmadı.",
  },
  units: [
    {
      id: "v1",
      title: "1. Kitap ve Paradigma",
      description: "Kitabın ne olduğu ve dayandığı 'etherik' model.",
      lessons: [
        {
          id: "v-kitap",
          title: "Kitap, yayıncı ve dört bölüm",
          summary: "Megalithica Books (2014); Paradigma, Çekirdek Teknikler, Uygulamalar, Grimoire.",
          body: `## Künye

*Ars Vercanus: Advanced Magickal Techniques* — Vasilios Wennergren & Lynn Wennergren, **2014**, *Megalithica Books* (Immanion Press, Stafford, İngiltere). Yazılı ve resimlenmiş: metin Vasilios, resimler Lynn'e ait.

## Dört bölüm
1. **The Magickal Paradigm** — magick'in tanımı, "etherik" gerçeklik modeli, enerji kanalları ve merkezler, mekanizmalar, yetenek ve beklentiler, etik.
2. **Core Magickal Techniques** — nefes/hareket/jest, algı sanatları, ön teknikler, "üç büyük teknik", kapanış.
3. **Magickal Practices** — kehanet, uzaktan görme, etherik varlıklar, şifa, etki, kutsama, aşk büyüsü, savunma, bağlama vb.
4. **Grimoire** — kitabın ikinci yarısı, bölüm ve teknik başlıkların toplandığı referans/sözlük niteliğinde bölüm.

## Okumadan önce
Bu bir **tarihî grimuar değil, modern bir uygulama el kitabıdır**; yazarlar kendi sistemlerini ve terimlerini (örneğin "pneuma technikon") sunar. Önceki kuşak okült kaynaklarla (Lévi, Fortune, Butler) karşılaştırılarak okunmalıdır.

## Çalışma
Kitabın içindekiler listesinden dört bölümün alt başlıklarını çıkar, her bölüm için tek cümlelik amaç yaz.`,
          verification: `Künye ve içindekiler PDF'ten doğrudan okundu. Yazarın niteliği ve kitabın akademik değeri bağımsız olarak doğrulanmadı (arka kapak övgüleri yayıncının tanıtım metnidir).`,
        },
        {
          id: "v-paradigma",
          title: "'Etherik gerçeklik' paradigması: iddialar ve eleştiri",
          summary: "Kitabın modelindeki ana iddialar: pneuma, merkezler, mekanizmalar; hangileri ölçülebilir?",
          body: `## Modelin ana başlıkları (kitabın içindekilerinden)

- **Etheric Aspect of Reality**: *pneuma / subtle energy*, *universal etheric field*, *etheric entities*, *etheric environments*.
- **Etheric Aspect of the Self**: enerji kanalları, etherik merkezler, "etherik form".
- **Gerçekliğin temel özellikleri** (kitabın başlıklarına göre): etherik gerçeklik fizik yasalarına tabi değildir; zaman ve mekân belirsizdir; her şey etherik düzeyde birbirine bağlıdır; maddî gerçeklik "etherik yakınsama" ile etkilenir; etherik gerçeklik bilinçten, duygudan ve enerjiden etkilenir.
- **Mekanizmalar**: *emanation* (yayılım), *saturation* (doyurma), *resonance/dissonance* (rezonans/uyumsuzluk), *pneuma technikon*'un davranışları.
- **Magickal aptitude / expectations / ethical use**: yetenek, beklenti, "beklenen sonuç alınmazsa" (güç yetersizliği, yanlış uygulama, gerçekçi olmayan hedef, dış müdahale) ve etik kullanım.

## Eleştirel not
Bu başlıkların hiçbiri **bağımsız, tekrarlanabilir deneylerle doğrulanmış** bilgi olarak kabul edilmez; hepsi yazarın *iddia ettiği* modeldir. "Fizik yasalarına tabi olmayan" bir alan tanımı, tanım gereği bilimsel olarak sınanamaz. Bu yüzden bu modülde "etherik beden/enerji" ifadeleri **model terimi** olarak kullanılır.

## Neden yine de okunur?
Modern pratik okültizmin dilini (enerji, merkez, kalkan, kanal) anlamak; Powell, Burger, Butler ve Lirvian notlarıyla karşılaştırmak için faydalıdır.

## Çalışma
Dersteki "beklenen sonuç alınmazsa" gerekçelerinden hangisinin çürütülebilir bir iddiayı **kurtarmak için** kullanılabileceğini (yanlışlanamazlık sorunu) tartış.`,
          verification: `Başlıklar PDF içindekilerinden alındı; açıklamalar yazara atfedilmiş özet/yorumdur. Bilimsel doğrulama yoktur; bu yüzden eleştirel not eklendi.`,
        },
      ],
      quiz: [
        qz("Kitap kaç ana bölümden oluşur?", ["4", "2", "7", "12"], 0),
        qz("Kitabın yayıncısı hangisidir?", ["Megalithica Books (Immanion Press)", "Penguin", "Weiser", "Oxford UP"], 0),
        qz("Kitaptaki 'etherik gerçeklik' modelini nasıl okumalıyız?", ["Yazarların iddia ettiği bir model olarak", "Kanıtlanmış fizik olarak", "Tıbbi bilgi olarak", "Tarihî belge olarak"], 0),
        qz("Kitabın mekanizmalarından biri hangisidir?", ["Resonance / Dissonance", "Alchemy / Fire", "Meridian / Needle", "Tarot / Pathworking"], 0),
        qz("'Beklenen sonuç alınmazsa' bölümü eleştiri açısından neyi sorun yaratır?", ["Yanlışlanamazlık: her başarısızlık için hazır açıklama sunar", "Dil bilgisi hatası", "Çok kısa olması", "Resim eksikliği"], 0),
      ],
    },
    {
      id: "v2",
      title: "2. Teknik ve Uygulama Haritası",
      description: "İkinci ve üçüncü bölümün başlıkları; güvenli okuma.",
      lessons: [
        {
          id: "v-teknikler",
          title: "Çekirdek teknikler: başlık haritası",
          summary: "Algı sanatları, ön teknikler, 'üç büyük teknik' ve kapanış — yalnızca adlar ve anlamları.",
          body: `## 2. bölümün başlıkları

- **Nefes, hareket, jest** — temel hazırlık.
- **Arts of Perception**: *Etheric Perception, Etheric Communication, Etheric Reading, Expanded Perception* ve bunların birlikte kullanımı.
- **Preliminary Techniques** (ön teknikler) ve bir **alternatif banishing** tekniği.
- **The Three Great Techniques**: **Energy Casting** (birincil, ani/impromptu, dokunsal, uzaktan ve ışınsal alt türleriyle), **Spirit Projection**, **Expansive Union**.
- **Closing Techniques** ve isteğe bağlı bir kapanış banishing'i (yakın çevre/belirli nesne).

## Bu modülün sınırı
Teknik adımları burada öğretilmez; yalnızca kitabın hangi teknikleri **hangi başlık altında** sunduğunu bilirsin. Uygulama düşüncen varsa kitabı, deneyimli bir öğretmenle ve **ruh sağlığına dikkat ederek** oku.

## Çalışma
Dersteki başlık haritasından her teknik için "ne için kullanılır (kitabın iddiası), başka hangi gelenekte benzeri var?" tablosu yap (ör. Butler/Powell, Lévi, Regardie).`,
          verification: `Başlıklar PDF içindekilerinden. Teknik adımlar bilerek derse konmadı.`,
        },
        {
          id: "v-uygulamalar",
          title: "Uygulama alanları: kehanetten savunmaya",
          summary: "3. bölümün konuları ve her birine yönelik dikkat notları.",
          body: `## 3. bölüm: konu listesi

Kehanet (geçmiş, şimdi, gelecek, uzaktan görme) · Etherik varlıklar (basit ruhlar, yetiştirilmiş varlıklar, kompleks ruhlar, bedensiz insanlar, tanrılar) · Etkileşim (evokasyon, invokasyon, sunular, psikopomp işi) · **Şifa** (tanı, zararlı enerji çıkarma, yenileme, enerji ekleme, dolaşım, uzaktan şifa, güvenlik) · Büyüsel etki · Kutsama · Aşk büyüsü · Seks magick · **Lanet** · Savunma (algılama, kalkan, saptırma, banishing, bağlama).

## Dikkat notları

- **Şifa:** Kitaptaki "şifa" bölümü tıbbî tedavi değildir; kanıtlanmış bir sağlık etkisi iddia edilemez. Sağlık sorunlarında hekime başvurmak esastır.
- **Lanet ve bağlama:** Başkasına zarar verme içeren bölümler **etik ve hukuki** açıdan sorunlu olabilir; bu modül bu bölümlerin içeriğini aktarmaz.
- **Aşk büyüsü / etki:** Başkasının iradesine müdahale gibi etik sorular taşır; ayrıca kitabın kendi "etik kullanım" bölümüyle birlikte okunmalıdır.
- **Kehanet:** Geçmiş/şimdi/gelecek ayrımı yazarın "zamanın doğası" tartışmasına dayanır; öngörü doğruluğu bağımsız doğrulanmamıştır.

## Çalışma
Dersteki etik bölümünü temel alarak kendi etik ilkelerini 5 maddede yaz.`,
          verification: `Konu listesi PDF içindekilerinden. Şifa ve kehanet iddiaları doğrulanmamıştır; derste açık uyarı eklendi.`,
        },
      ],
      quiz: [
        qz("'Three Great Techniques' arasında hangisi vardır?", ["Spirit Projection", "Pathworking", "Skrying Mirror", "Banishing Ritual of the Pentagram"], 0),
        qz("Kitaptaki 'şifa' bölümü için doğru değerlendirme hangisidir?", ["Tıbbî tedavi yerine geçmez; kanıtlı etki iddia edilemez", "Hekimin yerine geçer", "FDA onaylıdır", "Klinik çalışmaya dayanır"], 0),
        qz("Bu modül hangi içeriği vermez?", ["Teknik talimatları", "Başlık haritasını", "Eleştirel notları", "Yayın bilgisini"], 0),
        qz("'Energy Casting' alt türleri arasında hangisi geçer?", ["Distance Casting", "Sun Casting", "Metal Casting", "Plaster Casting"], 0),
        qz("Lanet/bağlama bölümlerine yaklaşım nasıl olmalı?", ["Etik ve hukuki sorun olarak; bu modül aktarmaz", "Hemen uygulamak", "Başkalarına öğretmek", "Sosyal medyada paylaşmak"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Teknik adımlar (Energy Casting, Spirit Projection, Expansive Union, banishing vb.):** Uygulama talimatı olarak verilmedi; psikolojik güvenlik ve doğrulama sorunu.
- **Şifa, lanet, aşk ve seks büyüsü teknikleri:** Sağlık iddiaları doğrulanamaz; başkasına zarar/müdahale içeren teknikler etik sorun taşır.
- **Etherik beden, merkezler, "pneuma technikon" iddialarının bilimsel doğruluğu:** Bağımsız doğrulama bulunmuyor; model terimi olarak anlatıldı.
- **Grimoire (4. bölüm) ayrıntıları:** Taranmadı; sadece varlığı belirtildi.
- **Yazarların kişisel geçmişi ve uzmanlıkları:** Bağımsız kaynakla doğrulanamadı.`,
});
