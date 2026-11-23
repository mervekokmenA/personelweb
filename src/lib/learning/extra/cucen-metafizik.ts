import { extraModule } from "./builder";
import { qz } from "../helpers";

export const cucenModule = extraModule({
  id: "ek-cucen-metafizik",
  title: "Metafizik: Kavram ve Problemleriyle Varlık Felsefesi (A. Kadir Çüçen, ed., 2018)",
  tagline: "Akademik metafiziğin haritası: 'metafizik' kelimesini okültizmdeki kullanımından ayırmak için kılavuz",
  description:
    "Yüklediğin 'Metafizik: Kavram ve Problemleriyle Varlık Felsefesi' (Editör: A. Kadir Çüçen; Sentez Yayıncılık, Bursa, Aralık 2018; 567 sayfa) kitabının ek modülü. Kitap felsefe yapan akademisyenlerin yazdığı bir ders kitabıdır; modül, bölümlerini (metafizik kavramı, yöntem, metafizik karşıtlığı, Tanrı, töz, ruh, zihin, nedensellik, özgürlük/determinizm, zaman, kategoriler, varlık/hiçlik, kaos, bilgi) haritalar ve **felsefi metafizik** ile **okültizmde 'metafizik' etiketi** arasındaki farkı öğretir.",
  source: {
    file: "metafizik-kavram-ve-problemleriyle-varlik-felsefesi-prof-dr-a-kadir-cucen-pdf-indir-24896-booksfer.net.pdf",
    author: "A. Kadir Çüçen (editör) ve çok yazarlı (Sentez Yayıncılık, 2018)",
    language: "Türkçe",
    pages: 567,
    readNote: "Künye, editör sözü ve 'Giriş' bölümü (bölüm özetleri) okundu. Bölüm gövdeleri okunmadı; 'Giriş'in verdiği bölüm özetleri derse aktarıldı.",
  },
  units: [
    {
      id: "m1",
      title: "1. Akademik Metafiziğin Haritası",
      description: "Kitabın amacı, kapsamı ve bölümleri.",
      lessons: [
        {
          id: "cu-kitap",
          title: "Kitabın amacı ve kapsamı",
          summary: "Varlık felsefesinin kavram ve problemleri; çok yazarlı yapı; Heidegger uzmanı editör.",
          body: `## Künye
*Metafizik: Kavram ve Problemleriyle Varlık Felsefesi* — **Editör: A. Kadir Çüçen**, **Sentez Yayıncılık**, Bursa, **Aralık 2018** (ISBN 978-605-9922-82-1). Editör (b. 1961, Erzurum): Ankara Üniversitesi Felsefe Bölümü mezunu; **Heidegger'in varlık kuramı** üzerine doktora (ABD); **2003'te profesör**; Uludağ Üniversitesi (e-posta adresinden).

## Amaç
Editör sözüne göre kitabın amacı "varlık felsefesinin kavram, konu ve problemlerini **metafizik düşünme açısından** ele alıp açıklamak ve yorumlamak"tır. Kapsanan kavramlar (Giriş'e göre): **metafizik, Tanrı, töz, ruh, zihin, akıl, bilinç, nedensellik, yasa, olasılık, özgürlük, determinizm, edimsellik, imkân, mekân, zaman, kader, dünya, uzay, yayılım, tümel/tikel/tekil, kategoriler, evrensel, Varlık, varoluş, öz, hiçlik, kaos, görünüş, gerçeklik, doğruluk, bilgi.** Her konu **ayrı bir bölümde, alanında uzman bir akademisyen** tarafından yazılmıştır; editör bunun Türkçede bu kapsamda **ilk eser** olduğunu düşündüğünü söyler (bu **editörün değerlendirmesidir**).

## Neden bu kitap?
Okültizm ve "metafizik" etiketi: Türkiye'de "metafizik" çoğu kez **doğaüstü/okült** anlamda kullanılır; **felsefede metafizik** ise **varlığın en genel yapısı** (töz, nedensellik, zaman, özgürlük, bilgi) üzerine akıl yürütmedir. Bu kitap ikincisini öğretir ve **kavramları ayırt etmenin** temelini sağlar.

## Çalışma
Giriş'teki kavram listesinden 10 kavramı seç ve her biri için iki cümlelik kendi tanımını yaz; sonra ilgili bölümü okuyarak tanımını düzelt.`,
          verification: `Künye, editör sözü ve Giriş PDF'ten doğrudan okundu. Editörün "ilk eser" değerlendirmesi kendi görüşüdür. Okültizmde "metafizik" kelimesinin kullanımı genel dil gözlemidir (örn. Lirvian notları, Metafizik Maji kitabı).`,
        },
        {
          id: "cu-bolumler",
          title: "Bölüm haritası: metafiziğin tarihi ve eleştirisi",
          summary: "1–4. bölümler: kavram, yöntem, ihtiyaç ve metafizik karşıtlığı.",
          body: `## Giriş'in verdiği özetlerden

1. **Bölüm — Metafizik kavramı (Ayşe Gül Çıvgın):** Terimin **Aristoteles**'te tarihsel gelişimi; Aristoteles öncesi ve modern filozoflara başvuru; "metafizik hakkında tüketici bir açıklamanın mümkün olmadığı" ve her açıklama çabasının "yine metafizik bir faaliyet" olduğu savı.
2. **Bölüm — Metafizikte yöntem (Özgür Aktok):** "Metafiziğe ihtiyaç var mı?" sorusuyla bağlı; **Aristoteles'in duyusal dünya ile barışık metafiziği** ile **Platon'un duyular dünyasına karşı metafiziği**; modern dönemde **kıta rasyonalizmi** (Descartes: zihin–madde düalizmi; **Spinoza**: Euclid yöntemiyle *Ethica*; **Leibniz**: rasyonalist geleneğin son temsilcisi).
3. **Bölüm — Metafiziğe ihtiyaç var mı? (Aktok):** **Hume** ve **Kant**: Kant'ın "metafiziği uçurumdan kurtarıp ona yeni bir rota çizdiği" okuması.
4. **Bölüm — Metafizik karşıtlığı (Egemen S. Kuşcu):** **Russell, Wittgenstein, Viyana Çevresi, Carnap** üzerinden 20. yüzyıl çağdaş felsefenin metafizik karşıtı karakteri.
5. **Bölüm — Tanrı (Elif Nuyan)**, sonraki bölümler: töz, ruh, zihin–beden, nedensellik, özgürlük/determinizm, olasılık/imkân, zaman, kaos, bilgi vb. (Giriş'te sırayla özetlenir: On Üçüncü Bölüm zihin metafiziği; On Beşinci determinizm; On Altıncı–On Yedinci imkân; On Sekizinci kaos; Yirminci "var"ın felsefe tarihi; Yirmi İkinci bilginin olanağı…).

## Bağlantılar
- **Spinoza** (Lirvian notlarında da bir bölümdür); **Platon–Aristoteles** karşıtlığı (okült geleneğin Platoncu mirasıyla ilişkisi için Plotinos ek modülüne bak).
- **Metafizik karşıtlığı:** Viyana Çevresi'nin "anlamsız önerme" eleştirisi, okültizmdeki **doğrulanamaz iddiaları** eleştirmek için de yararlı bir çerçevedir.

## Çalışma
Kant'ın "metafiziğe sınır koyması" fikrini kendi cümlelerinle özetle ve okült bir iddiaya (ör. "eterik beden vardır") uygulayarak "hangi tür bilgi iddiası bu?" sorusunu cevapla.`,
          verification: `Giriş bölümündeki bölüm özetleri PDF'ten okundu ve özetlendi. Filozofların konumları (Aristoteles, Platon, Descartes, Spinoza, Leibniz, Hume, Kant, Russell, Wittgenstein, Carnap) felsefe tarihinin standart bilgisidir ve Giriş'teki anlatımla uyumludur; ayrı kaynakla ek doğrulama yapılmadı.`,
        },
      ],
      quiz: [
        qz("Kitabın editörü kimdir?", ["A. Kadir Çüçen", "Aleister Crowley", "David Frawley", "Michelle Heron"], 0),
        qz("Kitabın yayıncısı ve yılı nedir?", ["Sentez Yayıncılık, 2018", "Hermes, 2015", "Mavi Kalem, 2018", "Llewellyn, 2021"], 0),
        qz("Giriş'e göre Spinoza'nın metafizik yöntemi nedir?", ["Euclid geometrisini felsefeye uyarlamak", "Rüya yorumu", "Astroloji", "Deney"], 0),
        qz("Metafizik karşıtlığı hangi akımla doruğa ulaştı (Kuşcu'ya göre)?", ["Viyana Çevresi", "Rönesans Hermetizmi", "Altın Şafak", "Teosofi"], 0),
        qz("Felsefede 'metafizik' neyi inceler?", ["Varlığın en genel yapısını (töz, nedensellik, zaman, bilgi…)", "Hayaletleri", "Tarotu", "Burçları"], 0),
        qz("Kant'ın metafiziğe yaklaşımı için doğru ifade hangisidir?", ["Metafiziğe sınır koyup ona yeni bir rota çizmeye çalıştı", "Metafiziği tamamen savundu", "Hiç ilgilenmedi", "Simya yaptı"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Bölüm gövdeleri (23 bölüm):** 567 sayfalık çok yazarlı akademik kitabın yalnızca Giriş ve bölüm özetleri okundu; ayrıntılı argümanlar derse konmadı.
- **Tanrı, ruh, kader, zaman, kaos vb. bölümlerin içerikleri:** Giriş'teki bir cümlelik özetlerin ötesinde okunmadı.
- **Okültizm ile akademik metafiziğin karşılaştırmalı eleştirisi:** Bu derste çerçeve kuruldu; ayrıntılı karşılaştırma ayrıca yapılmalıdır.
- **Yazarların biyografileri:** Doğrulanmadı.`,
});
