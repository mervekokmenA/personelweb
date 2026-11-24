import { extraModule } from "./builder";
import { qz } from "../helpers";

export const auraModule = extraModule({
  id: "ek-aura",
  title: "How to Read the Aura (W. E. Butler)",
  tagline: "Aura kavramı, eterik beden modeli ve Kilner ekranları: iddialar ve bilimsel değerlendirme",
  description:
    "Walter Ernest Butler'ın 1971 tarihli (2. baskı 1979) kısa kitabının ek modülü. Kitabın 5 bölümünü haritalar; 'aura' ve 'eterik beden' modelini yazarın doktrini olarak anlatır; Kilner ekranlarının tarihini ve bilimsel yorumunu ayrı bir derste verir. Sağlık/şifa iddiaları doğrulanmamıştır.",
  source: {
    file: "how-to-read-the-aura.pdf",
    author: "W. E. Butler (The Aquarian Press, 1971; 2. baskı 1979)",
    language: "İngilizce",
    pages: 96,
    readNote: "Künye, içindekiler, 1. bölümün girişi, Kilner ekranları ve psişik vampirizm bölümlerinin pasajları okundu. 3–5. bölümlerin tamamı derse konmadı.",
  },
  units: [
    {
      id: "a1",
      title: "1. Kitap ve Aura Modeli",
      description: "Tanım, yapı ve bölüm haritası.",
      lessons: [
        {
          id: "au-kitap",
          title: "Kitap, yazar ve bölüm haritası",
          summary: "W. E. Butler kimdir; beş bölüm ve ek kaynakça.",
          body: `## Künye
*How to Read the Aura* — **W. E. Butler**, The Aquarian Press (Wellingborough), **ilk basım 1971**, 2. baskı (gözden geçirilmiş, genişletilmiş) **1979**. Arka kapak: "kıdemli bir okültist, aura görüşünün gelişmesinin birkaç yolunu, eterik şifa tekniklerini, aura renklerini, eterik kaçağı, **psişik vampirizmi** ve eterik 'pilleri' yeniden doldurmayı anlatır." Aynı serinin diğer kitapları: *An Introduction to Telepathy*, *How to Develop Clairvoyance*, *How to Develop Psychometry*.

## Bölüm haritası
1. **What is the Aura?** (7) — tanım.
2. **The Structure of the Aura** (19) — yapı.
3. **The Circuit of Force** (33) — enerji dolaşımı.
4. **The Emotional-Mental Aura** (58) — duygusal-zihinsel aura.
5. **Developing Auric Sight** (75) — aura görüşü geliştirme.
Ek: Bibliyografya (91), İndeks (93).

## Yazar notu
Butler, Dion Fortune'un Fraternity'siyle bağlantılı bir öğretmendi (kendi kitabı *The Magician: His Training and Work* ek modülünde anılır). Bu kitap **popüler bir okült rehberdir**, bilimsel makale değildir.

## Çalışma
İçindekilerden her bölümün tek cümlelik amacını yaz; hangi bölümün "model", hangisinin "uygulama" olduğunu işaretle.`,
          verification: `Künye ve içindekiler PDF'ten okundu. Yazarın Dion Fortune bağlantısı Butler'ın *The Magician* kitabındaki önsözlerinden ve genel bilgiden gelir (Okültizm modülü 7. ünitedeki kaynaklar).`,
        },
        {
          id: "au-model",
          title: "Aura tanımı, eterik beden ve 'gümüş kordon'",
          summary: "Butler'ın sözlük tanımıyla başlaması; 'ışıldayan atmosfer', eterik ikiz ve eterik 'deri'.",
          body: `## 1. bölüm: tanım
Butler, her kitabında olduğu gibi önce **sözlük tanımını** verir: aura, insan ve hayvan bedenlerinden hatta şeylerden "yayıldığı söylenen, görünmez, ince bir öz veya akışkan"; "psişik elektro-hayati, elektro-zihinsel yayılım"; kişinin çevresindeki "atmosfer, karakter, kişilik". Sözlüğün **patolojik** anlamı (epilepsi/histeri öncü belirtisi) tanımın ikinci kısmıdır; Butler bunu "göz ardı edebiliriz" der ve okuyucuyu "histerik düşünceye" sürüklenmemesi için rahatlatır.

Aura, çoğunlukla **canlıların çevresinde ışıldayan bir atmosfer** olarak görülür. Butler, kilise vitraylarındaki ve erken Budist resimlerindeki **nimbus/hale** geleneğini bunun sanatsal bir karşılığı sayar.

## 2. bölüm: yapı
- **Eterik ikiz (etheric double):** Fiziksel bedenin kalıbı gibi görülen "iç fiziksel beden"; dış (et-kemik) beden "dış fiziksel beden" sayılır. İkisi "**gümüş kordon**" (silver cord; Vaiz 12:6'ya gönderme) ile bağlanır.
- **İç ve dış aura**; ikisinin de "**eterik deri**" gibi bir yüzeyi vardır ve bunlar bireyin sağlığında rol oynar.

## Nasıl okunmalı?
Bunlar **okült doktrin** terimleridir; eterik ikiz ve gümüş kordon bilimsel olarak gözlemlenmiş yapılar değildir. Butler'ın dayanağı **klerovyans (durugörü)** gözlemleri ve gelenektir.

## Çalışma
Bu modüldeki Powell (*Eterik Çift*) ek modülüyle terimleri eşleştir; farklı ad ve tanımları tabloya yaz.`,
          verification: `1. bölümün giriş sayfaları ve 2. bölümün ilgili paragrafları PDF'ten okundu (sözlük tanımı, nimbus, eterik ikiz, gümüş kordon, eterik deri). Bilimsel doğrulama iddiası yoktur; terimler doktrin olarak atfedildi.`,
        },
      ],
      quiz: [
        qz("Kitap hangi yıl ilk kez yayımlandı?", ["1971", "1911", "1935", "2000"], 0),
        qz("Butler tanıma neyle başlar?", ["Sözlük tanımıyla", "Laboratuvar deneyiyle", "Şiirle", "Haritayla"], 0),
        qz("Eterik ikiz ile fiziksel beden hangi kavramla bağlanır?", ["Gümüş kordon", "Kırmızı iplik", "Altın zincir", "Mavi köprü"], 0),
        qz("Kitabın 5. bölümü neyi anlatır?", ["Aura görüşünün geliştirilmesi", "Tarot kartları", "Simya", "Takvim"], 0),
        qz("Eterik ikiz kavramı için doğru değerlendirme hangisidir?", ["Okült doktrindir; bilimsel olarak gözlemlenmiş bir yapı değildir", "Anatomik bir organdır", "Tıbbi tanıdır", "Fiziksel bir kanıttır"], 0),
      ],
    },
    {
      id: "a2",
      title: "2. Enerji, Psişik Vampirizm ve Kilner Ekranları",
      description: "Butler'ın enerji modeli ve ekranların tarihi/bilimsel değerlendirmesi.",
      lessons: [
        {
          id: "au-enerji",
          title: "Enerji dolaşımı ve 'psişik vampirizm'",
          summary: "Butler'ın 'kuvvet devresi' kavramı; enerji kaybı ve 'vampir' benzetmesi: eleştirel bir okuma.",
          body: `## Butler'ın model unsurları
- **Circuit of Force (Kuvvet devresi):** Bedende dolaştığı varsayılan "hayatî enerji" ve bunun dışarıyla alışverişi (kitapta Tantrik uygulamalara ve "evrensel enerji" kavramına atıflar).
- **Psişik vampirizm:** Butler, bazı insanların "normal miktarda hayatî enerjiyi ancak çevrelerinden sürekli çekerek koruyabildiğini" ve çoğu durumda bunun **tamamen bilinçsiz** olduğunu, "vampirlerin" bunu duysa dehşete düşeceğini yazar. Birçok kişinin hayatında "yanında yorgun hissettiren insanlar" tanıdığını söyler.
- **Magnetik şifa:** Teosofi Cemiyeti'nin kurucularından Col. H. S. Olcott'un Hindistan'da çok manyetik şifa yaptığı ve kendini tükettiği anlatılır.

## Eleştirel not
"Yanında yorgun hissetme" deneyimi **psikolojik/sosyal faktörlerle** (stres, çatışma, duygusal emek, uyku) açıklanabilir; "enerji çalma" bir **model**dir. Bu, ilişkilerde sorun yaşayan birine "vampir" etiketi yapıştırmanın yanlış/zararlı olabileceği anlamına gelir. Sağlık sorunlarında hekime başvurun; "eterik şifa" tıbbi tedavi değildir.

## Çalışma
Kendi hayatında "yorulduğun" üç durumu yaz; her biri için önce sıradan açıklamayı (uyku, stres, konu) listele.`,
          verification: `Psişik vampirizm ve Olcott ile ilgili pasajlar PDF'ten okundu (ifadeler özetlenmiştir). Enerji alışverişi bilimsel olarak gösterilmemiştir; eleştirel not ders yazarındır.`,
        },
        {
          id: "au-kilner",
          title: "Kilner ekranları: tarih ve bilimsel değerlendirme",
          summary: "Dicyanin/pinacol ekranlarının hikâyesi, 1911 kitabı ve kaynaklardaki bilimsel eleştiri.",
          body: `## Butler ne diyor?
5. bölümde aura görüşünün geliştirilme yollarından biri olarak **Kilner ekranları** (Dr. Kilner'ın icadı) anılır: "dicyanin" ve "pinacol" gibi **kömür katranı türevi boyalar** içeren cam hücreler.

## Tarihsel kayıt (internet kaynaklarına göre)
- **Walter J. Kilner**, *The Human Atmosphere, or the Aura Made Visible by the Aid of Chemical Screens* (**1911**); revize baskı *The Human Aura* (**1920**).
- Ekranlar **dicyanin** boyasını (alkolde çözülmüş) kullanan cam hücrelerdir; kitap bir "koyu ve bir açık ekran"dan söz eder; dicyaninin **gözler üzerinde zararlı etkisi** olabileceği not edilir.
- Bir **ikincil özete** göre 1912 British Medical Journal incelemesi ve replikasyon girişimleri aurayı fiziksel bir olgu olarak desteklemedi; ekranlar buna rağmen 1970'lere kadar esoterik dergilerde satıldı. *(Bu ayrıntılar ikincil bir özetten; orijinal BMJ metni okunmadı.)*

## Sonuç
Kilner ekranlarının gösterdiği iddia edilen "aura", **bilimsel olarak doğrulanmış bir olgu değildir**; görsel/optik etkilerle (ardıl görüntü, kontrast, beklenti) açıklanması yaygın bir bilimsel yorumdur. Deney yapmayı düşünüyorsan: **boyalı ekranlar göze zararlı olabilir**, yapma.

## Çalışma
Dersteki Kilner yöntem özetine dayanarak kendi yöntem eleştirini yaz: kör deney var mı, kontrol grubu var mı, ekran/cam filtre nasıl kullanılmış?`,
          verification: `**Kaynak:** [Sacred Texts — The Human Atmosphere](https://sacred-texts.com/eso/tha/tha02.htm), [Wellcome Collection kaydı](https://wellcomecollection.org/works/t94es3zc/items?canvas=2). Butler'ın Kilner ekranı anlatımı PDF'ten okundu. BMJ 1912 incelemesi ve replikasyon ayrıntıları ikincil kaynaktan geldi; orijinal metinle doğrulanmadı. "Optik etki" yorumu ders yazarının genel bilimsel değerlendirmesidir.`,
        },
      ],
      quiz: [
        qz("Kilner ekranları hangi maddeyi içerir?", ["Dicyanin gibi kömür katranı boyaları", "Civa", "Altın tozu", "Mum"], 0),
        qz("Kilner'ın kitabının orijinal başlığı nedir?", ["The Human Atmosphere", "The Magician", "Psychic Self-Defence", "The Mystical Qabalah"], 0),
        qz("'Aura' için doğru bilimsel değerlendirme hangisidir?", ["Doğrulanmış bir olgu değildir", "Tıp tarafından teşhis aracı olarak kabul edilir", "Yasal bir ölçüdür", "Bir elementtir"], 0),
        qz("Boyalı ekranlar için güvenlik uyarısı nedir?", ["Gözler için zararlı olabilir", "Hiç zarar vermez", "Sadece gece zararlı", "Mum üretir"], 0),
        qz("'Psişik vampirizm' iddiasını değerlendirirken ilk adım ne olmalıdır?", ["Sıradan (psikolojik/sosyal) açıklamaları sıralamak", "Kişiyi suçlamak", "Eterik ritüel yapmak", "İlaç kullanmak"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Aura renk tabloları ve 'renklerin anlamları':** Bağımsız doğrulama yok; iddia olarak kaldı.
- **Eterik şifa teknikleri ve 'eterik pilleri yeniden doldurma' alıştırmaları:** Tıbbi tedavi iddiaları; talimat verilmedi.
- **Aura görüşü geliştirme alıştırmaları (5. bölümün uygulamaları):** Talimat verilmedi.
- **3. ve 4. bölümlerin ayrıntılı içeriği:** Taranmadı.
- **Kilner çalışmasının bilimsel reddi ayrıntıları (BMJ 1912):** Orijinal metin okunmadı; ikincil özetten sınırlı bilgi kullanıldı.`,
});
