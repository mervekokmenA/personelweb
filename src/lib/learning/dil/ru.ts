import { dilModule } from "./builder";
import { qz, web } from "../helpers";

const VERIF_GENEL =
  "Bu ders, Rusça alfabe/fonetik/gramer için genel kabul görmüş bilgilere dayanır; harf sayıları ve hâl/cinsiyet/görünüş sistemi internette doğrulandı (Wikibooks/Wikiversity Russian, Wikipedia 'Russian grammar' ve 'Vowel reduction in Russian'). Örnek cümleler ve okunuşlar yapay zekâ ile hazırlandı; anadili Rusça olan biri tarafından doğrulanmadı. Okunuşlar Türkçeye göre yaklaşık değerlerdir.";

export const rusModule = dilModule({
  id: "dil-ru",
  title: "Rusça: Alfabe, Okunuş ve Gramer",
  tagline: "Kiril alfabesinden hâl sistemine; kartlarla birlikte çalışılır",
  description:
    "Rusça için Kiril alfabesi, okunuş kuralları (vurgu, ünlü zayıflaması, sert/yumuşak ünsüzler) ve temel gramer (cinsiyet, hâller, fiil çekimi, görünüş). Kelime ve ifade çalışması için /dil/ru sayfasındaki kartlar (A1–C2 ve 100 Temel İfade) kullanılır.",
  source: {
    file: "İnternet kaynakları (kitap yüklemesi yok)",
    author: "Wikibooks, Wikiversity, Wikipedia (Russian grammar / Vowel reduction in Russian)",
    language: "İngilizce kaynaklardan Türkçe ders",
    readNote:
      "Alfabe, fonetik ve gramer ilkeleri internet kaynaklarıyla doğrulandı; ayrıntılı istisna listeleri verilmedi. Örnekler yapay zekâ ile hazırlandı ve anadili konuşanca doğrulanmadı.",
  },
  resources: [
    web("Wikibooks — Russian/Alphabet", "https://en.wikibooks.org/wiki/Russian/Alphabet"),
    web("Wikipedia — Russian grammar", "https://en.wikipedia.org/wiki/Russian_grammar"),
    web("Wikipedia — Vowel reduction in Russian", "https://en.wikipedia.org/wiki/Vowel_reduction_in_Russian"),
  ],
  groups: [
    {
      id: "alfabe",
      title: "Alfabe",
      units: [
        {
          id: "ru-al",
          title: "Kiril alfabesi (33 harf)",
          description: "33 harf: 10 ünlü, 21 ünsüz (й dâhil) ve 2 işaret (ь, ъ).",
          lessons: [
            {
              id: "ru-al-1",
              title: "Tanıdık harfler ve yanıltıcı harfler",
              summary: "Türkçeye benzeyen harfler; Latin harfine benzeyip başka ses veren 'yanıltıcılar'.",
              minutes: 30,
              body: `## Genel bilgi
Rus alfabesi **33 harften** oluşur: **10 ünlü**, **21 ünsüz** (й dâhil) ve **2 işaret** (ь ve ъ — kendilerine ait sesleri yoktur). Bazı kaynaklar й'yi "yarı ünlü" sayıp ünsüz sayısını 20 verir; toplam yine 33'tür.

## 1) Türkçedeki sesle aşağı yukarı aynı olanlar
| Harf | Okunuş | Örnek |
|---|---|---|
| А а | a | ма́ма (mama) |
| О о | o | дом (dom) |
| К к | k | кот (kot) |
| М м | m | мо́ре (morye) |
| Т т | t | то́ же (to je) |
| Э э | e | э́то (eta) |
| З з | z | зуб (zup) |
| И и | i | кино́ (kino) |
| Л л | l | лампа (lampa) |
| П п | p | парк (park) |
| Б б | b | банк (bank) |
| Д д | d | да (da) |
| Ф ф | f | фильм (film) |
| Г г | g | год (got) |

## 2) Latin harfine benzeyen ama FARKLI ses veren "yanıltıcılar"
| Harf | Gerçek sesi | Örnek |
|---|---|---|
| **В в** | v | вода́ (vada) |
| **Н н** | n | нет (nyet) |
| **Р р** | r (yuvarlanan) | рот (rot) |
| **С с** | s | сок (sok) |
| **У у** | u | ру́ка (ruka) |
| **Х х** | h (Türkçe "h"ye yakın, biraz sert) | хорошо́ (haraşo) |

## Alıştırma
Aşağıdaki kelimeleri harf harf oku, sonra anlamını tahmin et: **банк, парк, такси́, кафе́, метро́, кино́, ко́фе, му́зыка**. (Hepsi uluslararası kelimeler.)`,
              verification: VERIF_GENEL,
              tasks: ["Tabloları gözünle kapatıp 20 harfin sesini söylemeye çalış.", "Çevrendeki bir Rusça yazı (etiket, harita) bulup harf harf oku."],
            },
            {
              id: "ru-al-2",
              title: "Yeni harfler: ж ш щ ч ц ve ünlü çiftleri",
              summary: "Türkçede olmayan ya da farklı yazılan sesler; ya, yu, ye, yo.",
              minutes: 30,
              body: `## Ünsüz harfler
| Harf | Sesi | Örnek |
|---|---|---|
| Ж ж | j (Fransızca "jour") | жизнь (jizn) |
| Ш ш | ş | шко́ла (şkola) |
| Щ щ | uzun, yumuşak "şç" (yaklaşık: şş) | щи (şçi) |
| Ч ч | ç | чай (çay) |
| Ц ц | ts | цирк (tsirk) |
| Й й | y (kısa) | май (may) |

## Ünlüler: sert ve "yotlu" çiftler
Rusça'da 10 ünlü harf 5 çifte ayrılır. İkinci eş, önceki ünsüzü **yumuşatır** ya da kelime başında **y** sesiyle başlar:

| Sert | Yumuşak/yotlu | Örnek |
|---|---|---|
| а (a) | **я** (ya) | мама / моя́ (maya) |
| э (e) | **е** (ye) | э́то / е́сть (yest) |
| о (o) | **ё** (yo) | — / её (yiyo) |
| у (u) | **ю** (yu) | ту́ча / тюльпа́н (tyulpan) |
| ы (ı) | **и** (i) | мы (mı) / ми́р (mir) |

> **ё** her zaman vurguludur ve normal metinlerde çoğunlukla noktasız (е) yazılır; öğrenme kartlarında noktalı yazarız.

## Alıştırma
Oku: **чай, шко́ла, жена́, цирк, мой, юг, я́блоко, ёж**.`,
              verification: VERIF_GENEL,
              tasks: ["Sert/yumuşak 5 ünlü çiftini defterine yaz ve her biri için bir kelime bul."],
            },
            {
              id: "ru-al-3",
              title: "Ь, Ъ, Ы ve el yazısı",
              summary: "Yumuşaklık işareti, ayırma işareti, 'ı' sesi ve basılı/el yazısı farkı.",
              minutes: 25,
              body: `## Ь — yumuşaklık işareti (мя́гкий знак)
Kendi sesi yoktur; **önündeki ünsüzü yumuşatır** (dilin ortası damağa yaklaşır, "ye" gibi bir tını eklenir).
- **мат** (mat, "mat") ≠ **мать** (mat', "anne")
- **брат** / **брать** (brat / brat')

## Ъ — sertlik işareti (твёрдый знак)
Çok nadirdir; bir önek ile ünlü arasında **ayırma** yapar: **объяснить** (abyisnit), **подъезд** (padyest).

## Ы
Türkçedeki "ı" sesine çok yakındır: **мы** (mı), **ты** (tı), **ры́ба** (rıba). Kelime başında **hiç** bulunmaz.

## Basılı ve el yazısı
El yazısında bazı harfler farklı görünür; en çok karıştırılanlar: el yazısı **т** m'ye, **д** g'ye benzer, **и** u'ya, **л** ise ʌ'ya benzeyebilir. (Bu bilgi genel öğrenme deneyimidir; yazı stilleri kişiden kişiye değişir.)

## Alıştırma
Oku ve yaz: **день, мать, семья́, объект, вы, мы**.`,
              verification: VERIF_GENEL + " El yazısı notu genel gözleme dayanır (Belirsiz).",
              tasks: ["Her gün 5 kelimeyi el yazısıyla ve basılı olarak yaz."],
            },
          ],
          quiz: [
            qz("Rus alfabesi kaç harften oluşur?", ["33", "28", "26", "36"], 0),
            qz("Hangisi Latin harfine benzeyip FARKLI ses veren bir harftir?", ["Р (r)", "К (k)", "М (m)", "Т (t)"], 0),
            qz("«В» harfi hangi sesi verir?", ["v", "b", "ş", "n"], 0),
            qz("«Н» harfi hangi sesi verir?", ["n", "h", "m", "r"], 0),
            qz("«Ч» harfi hangi sesi verir?", ["ç", "ş", "ts", "j"], 0),
            qz("«ь» işareti ne yapar?", ["Önündeki ünsüzü yumuşatır", "Ünlüyü uzatır", "Okunmaz ve hiçbir etkisi yoktur", "Kelimeyi çoğul yapar"], 0),
            qz("«ы» sesi Türkçedeki hangi sesine en yakındır?", ["ı", "i", "ü", "e"], 0),
          ],
        },
      ],
    },
    {
      id: "okunus",
      title: "Okunuş",
      units: [
        {
          id: "ru-ok",
          title: "Vurgu, ünlü zayıflaması ve ünsüz kuralları",
          description: "Rusça yazıldığı gibi okunmaz: vurgu ve ünlü zayıflaması ses yapısını belirler.",
          lessons: [
            {
              id: "ru-ok-1",
              title: "Vurgu ve ünlü zayıflaması (akanye / ikanye)",
              summary: "Vurgusuz о → a'ya, vurgusuz е/я → i'ye yaklaşır.",
              minutes: 30,
              body: `## Rusça'da vurgu
- Vurgu **serbesttir** (her heceye düşebilir) ve **hareketlidir** (aynı kelimenin biçimlerinde yer değiştirebilir): **рука́ → ру́ки**.
- Normal metinlerde vurgu **yazılmaz**; öğrenme materyallerinde ve bu sitedeki kartlarda **vurgulu ünlünün üstünde ́ işareti** vardır: **вода́, хорошо́, молоко́**.
- **ё** her zaman vurguludur.

## Ünlü zayıflaması
Vurgusuz ünlüler kısalır ve sesleri değişir:
- **Akanye:** Vurgusuz **о** ve **а** büyük ölçüde "a"ya (zayıf bir ə sesine) yaklaşır. **молоко́** → "malako" (yazıldığı gibi "molako" değil), **хорошо́** → "haraşo".
- **Ikanye:** Vurgusuz **е** ve **я** "i"ye yaklaşır: **река́** → "rika", **язы́к** → "yizık".
- Vurgudan hemen önceki hece en belirgin zayıflamayı gösterir.

## Bu sitedeki okunuş yazımı
Kartlardaki okunuş, **gerçek sese yakın** yazılır (ör. "çilavyek" = человек). Okunuş Türkçe okuyucuya göredir ve yaklaşıktır; ses dosyası için kartlardaki 🔊 düğmesini kullan (tarayıcıdaki sesli okuma).

## Alıştırma
Kelimeleri sesli oku ve vurgulu hecede sesini uzat: **вода́, окно́, го́род, молоко́, хорошо́, спаси́бо**.`,
              verification: VERIF_GENEL + " Akanye/ikanye için Wikipedia 'Vowel reduction in Russian' ve 'Akanye' sayfalarına bakıldı; ayrıntılı fonetik semboller bu derse alınmadı.",
              tasks: ["Her yeni kelimeyi öğrenirken vurgusunu sesli söyleyerek tekrar et."],
            },
            {
              id: "ru-ok-2",
              title: "Sert ve yumuşak ünsüzler",
              summary: "Aynı harf, ünlüye göre sert ya da yumuşak okunur.",
              minutes: 25,
              body: `## Çiftler
Rusça'da birçok ünsüz **sert / yumuşak** çifttir: **т–ть, д–дь, н–нь, л–ль, с–сь, з–зь, р–рь, п–пь, б–бь, м–мь, в–вь, ф–фь, к–кь, г–гь, х–хь**.

## Yumuşaklık nasıl gösterilir?
Bir ünsüz şu harflerden biri gelirse **yumuşar**: **и, е, ё, ю, я, ь**.
- **ма́ма** (mama, sert м) / **мя́со** (myasa, yumuşak мь)
- **нос** / **ня́ня** (nyanya)

## Her zaman sert: ж, ш, ц
Sonlarına ne gelirse gelsin sert okunurlar: **жизнь** (jizn), **шесть**, **цирк**.

## Her zaman yumuşak: ч, щ, й
**чай, щи, мой**.

## Küçük bir yazım kuralı
**г, к, х, ж, ч, ш, щ** harflerinden sonra **ы** yazılmaz, yerine **и** yazılır: **кни́га → кни́ги** (кни́гы değil), **ру́чка → ру́чки**, **ша́пка → ша́пки**. Bu kural, çoğul ve çekim eklerini yazarken sık karşına çıkar.`,
              verification: VERIF_GENEL,
            },
            {
              id: "ru-ok-3",
              title: "Sesli/sessiz uyumu ve sonda tonsuzlaşma",
              summary: "хлеб → hlyep; что → şto; его → yivo.",
              minutes: 25,
              body: `## Sonda tonsuzlaşma
Kelime **sonunda** sesli ünsüzler tonsuz okunur:
- **хлеб** → "hlyep" (б → п)
- **друг** → "druk" (г → к)
- **глаз** → "glas" (з → с)
- **го́род** → "gorat" (д → т)

## Tonsuz ünsüzün öncesinde de tonsuzlaşma
- **вход** → "fhot"; **в магази́н** → "v magazin", **в парк** → "f park" (в → ф, sesli/sessiz uyumu)

## Sık gelen okunuş istisnaları
- **что** → "şto", **ничего́** → "niçivo", **конечно** → "kanyeşna"
- **-ого / -его** ekleri: **его́** → "yivo", **вашего** → "vaşiva" (г → v)
- **-ться / -тся** → "tsa": **учи́ться** → "uçitsa"
- **здравствуйте** → "zdrastvuyte" (первое в okunmaz)
- **сегодня** → "sivodnya" (г → v)

> Bunları ezberlemek yerine, kartlarda okunuşu dinleyip tekrar et; okuma kuralları zamanla oturur.`,
              verification: VERIF_GENEL,
              tasks: ["Kartlardaki okunuş alanıyla gerçek yazımı karşılaştır ve farkı fark et."],
            },
          ],
          quiz: [
            qz("Rusça'da vurgu için hangisi doğrudur?", ["Serbesttir ve normal metinde yazılmaz", "Her zaman son hecededir", "Her zaman ilk hecededir", "Hiç yoktur"], 0),
            qz("Vurgusuz «о» çoğunlukla hangi sese yaklaşır?", ["a (zayıf)", "u", "ü", "e"], 0),
            qz("«хлеб» kelimesi nasıl okunur?", ["hlyep", "hleb", "hlyeb", "hliep"], 0),
            qz("«ж, ш, ц» harfleri için doğru ifade hangisidir?", ["Her zaman sert okunur", "Her zaman yumuşak okunur", "Sadece sonda okunur", "Okunmaz"], 0),
            qz("«что» nasıl okunur?", ["şto", "çto", "sto", "hto"], 0),
            qz("«его́» nasıl okunur?", ["yivo", "yego", "iğo", "eqo"], 0),
            qz("«ё» harfi için doğru ifade hangisidir?", ["Her zaman vurguludur", "Hiç okunmaz", "Her zaman vurgusuzdur", "Sadece büyük harfle yazılır"], 0),
          ],
        },
      ],
    },
    {
      id: "gramer",
      title: "Gramer",
      units: [
        {
          id: "ru-gr",
          title: "Temel gramer",
          description: "Cinsiyet, hâller, fiil çekimi, geçmiş zaman, görünüş, var/yok ve sıfatlar.",
          lessons: [
            {
              id: "ru-gr-1",
              title: "İsimlerde cinsiyet ve çoğul",
              summary: "Eril, dişil, nötr; çoğul ekleri.",
              minutes: 25,
              body: `## Üç cinsiyet
Rusça isimler **eril, dişil, nötr**dür. Cinsiyet çoğunlukla **sondan** anlaşılır:

| Cinsiyet | Sondaki ses | Örnek |
|---|---|---|
| **Eril** | ünsüz, -й, -ь | стол (masa), музе́й (müze), день (gün) |
| **Dişil** | -а, -я, (-ь) | кни́га (kitap), семья́ (aile), мать (anne) |
| **Nötr** | -о, -е | окно́ (pencere), мо́ре (deniz) |

> **-ь** ile biten isimlerde cinsiyet ezberlenir: **день** (eril), **мать** (dişil), **дочь** (dişil).

## Çoğul (temel kural)
| Tekil | Çoğul | Örnek |
|---|---|---|
| ünsüz | **-ы / -и** | стол → столы́ |
| -а | **-ы / -и** | кни́га → кни́ги |
| -о | **-а** | окно́ → о́кна |
| -й, -ь, -я | **-и** | музе́й → музе́и |

**Düzensizler:** **челове́к → лю́ди**, **ребёнок → де́ти**, **друг → друзья́**, **брат → бра́тья**, **го́род → города́**.

## Alıştırma
Her cinsiyetten 5 isim bul, çoğulunu yaz ve kartlarla çalıştığın kelimelerle doğrula.`,
              verification: VERIF_GENEL,
            },
            {
              id: "ru-gr-2",
              title: "Altı hâl (падежи): harita",
              summary: "Hangi hâl hangi soruya cevap verir? Singular örneklerle.",
              minutes: 35,
              body: `## Altı hâl
Rusça'da isimler, sıfatlar ve zamirler **altı hâlde** çekilir. Hâl, kelimenin cümledeki **görevini** gösterir.

| Hâl | Soru | Ana kullanım | дом (m.) | кни́га (f.) |
|---|---|---|---|---|
| **Именительный** (yalın) | кто? что? | özne | дом | кни́га |
| **Родительный** (ilgi/genitif) | кого́? чего́? | sahiplik, -in, 'yok' sonrası | до́ма | кни́ги |
| **Дательный** (yönelme/datif) | кому́? чему́? | -e (alıcı) | до́му | кни́ге |
| **Винительный** (belirtme/akuzatif) | кого́? что? | nesne | дом | кни́гу |
| **Творительный** (araç/instrumental) | кем? чем? | ile, araç | до́мом | кни́гой |
| **Предложный** (bulunma/prepozisyonel) | о ком? о чём? | в/на/о ile | (в) до́ме | (в) кни́ге |

## Örnek cümleler
- **Э́то мой дом.** (Bu benim evim.) — yalın
- **Нет кни́ги.** (Kitap yok.) — genitif (нет'ten sonra)
- **Я даю́ кни́гу бра́ту.** (Kardeşime kitap veriyorum.) — datif
- **Я чита́ю кни́гу.** (Kitap okuyorum.) — akuzatif
- **Я пишу́ ру́чкой.** (Kalemle yazıyorum.) — instrumental
- **Я живу́ в до́ме.** (Evde yaşıyorum.) — prepozisyonel

## Not
Akuzatifte **canlı eril isimler** genitif biçimini alır: **Я ви́жу бра́та**. Bu ayrıntıyı sonraki derslerde çalış.

## Çalışma
Kartlardaki 10 ismi bu tabloya yerleştirmeye çalış. Hepsini bir günde ezberleme; önce **yalın, akuzatif, genitif** üçlüsüne odaklan.`,
              verification: VERIF_GENEL + " Çekim tablosu (дом, кни́га) elle kontrol edildi; ayrıntılı istisnalar (yer hâli, parçalı genitif) yazılmadı.",
              tasks: ["дом ve кни́га çekimini kâğıda görmeden yaz.", "Bir cümle seç ve her isim için hangi hâlde olduğunu belirt."],
            },
            {
              id: "ru-gr-3",
              title: "Şimdiki zaman: iki çekim",
              summary: "Fiil sonları ve 'быть'in şimdiki zamanda yokluğu.",
              minutes: 30,
              body: `## Zamirler
я (ben), ты (sen), он / она́ / оно́ (o), мы (biz), вы (siz / sen-saygı), они́ (onlar).

## 1. çekim (-е-)
| | чита́ть (okumak) |
|---|---|
| я | чита́ю |
| ты | чита́ешь |
| он/она́ | чита́ет |
| мы | чита́ем |
| вы | чита́ете |
| они́ | чита́ют |

## 2. çekim (-и-)
| | говори́ть (konuşmak) |
|---|---|
| я | говорю́ |
| ты | говори́шь |
| он/она́ | говори́т |
| мы | говори́м |
| вы | говори́те |
| они́ | говоря́т |

## Önemli: 'olmak' fiili yok
Şimdiki zamanda **«быть»** (olmak) kullanılmaz: **Я студе́нт.** (Ben öğrenciyim.) **Он до́ма.** (O evde.)

## ты / вы
- **ты**: samimi, tek kişi. **вы**: hem çoğul hem **saygılı tek kişi**. Tanımadığın kişiye **вы** de.

## Alıştırma
Kartlardaki 6 fiili (работать, жить, знать, хотеть, делать, понимать) çekimle ve sesli söyle. Hangisi 1., hangisi 2. çekim? (знать, работать, делать, понимать → 1.; говорить, любить, видеть → 2. ve хотеть düzensiz.)`,
              verification: VERIF_GENEL + " хотеть düzensiz bir fiildir: хочу́, хо́чешь, хо́чет, хоти́м, хоти́те, хотя́т.",
            },
            {
              id: "ru-gr-4",
              title: "Geçmiş zaman ve cinsiyet",
              summary: "-ть → -л, -ла, -ло, -ли.",
              minutes: 20,
              body: `## Kural
Mastar (-ть) atılır ve **-л** eklenir. Fiil, öznenin **cinsiyetine ve sayısına** göre uyum gösterir:

| | чита́ть | быть (olmak) |
|---|---|---|
| он (eril) | чита́**л** | **был** |
| она́ (dişil) | чита́**ла** | **была́** |
| оно́ (nötr) | чита́**ло** | **бы́ло** |
| мы / вы / они́ (çoğul) | чита́**ли** | **бы́ли** |

Kişi için ayrı bir çekim yoktur: **Я чита́л** (erkek konuşur) / **Я чита́ла** (kadın konuşur).

## Örnekler
- **Вчера́ я был дома.** (Dün evdeydim — erkek.)
- **Она́ была́ в кино́.** (O sinemadaydı.)
- **Мы бы́ли в Москве́.** (Moskova'daydık.)

## Alıştırma
Kartlardaki 5 fiili geçmiş zamanda üç cinsiyetle yaz. (Düzensizler: **идти́ → шёл, шла, шло, шли**; **мочь → мог, могла́**.)`,
              verification: VERIF_GENEL,
            },
            {
              id: "ru-gr-5",
              title: "Fiil görünüşü (вид): bitmiş ve bitmemiş",
              summary: "делать / сделать: süreç mi, sonuç mu?",
              minutes: 30,
              body: `## Fikir
Rusça fiillerin çoğu **iki biçimde** bulunur:
- **Несовершенный вид (bitmemiş görünüş):** süreç, tekrar, alışkanlık — **де́лать, чита́ть, писа́ть**
- **Совершенный вид (bitmiş görünüş):** bir kerelik, tamamlanmış sonuç — **сде́лать, прочита́ть, написа́ть**

| Bitmemiş | Bitmiş | Anlam |
|---|---|---|
| де́лать | сде́лать | yapmak |
| чита́ть | прочита́ть | okumak |
| писа́ть | написа́ть | yazmak |
| покупа́ть | купи́ть | satın almak |
| дава́ть | дать | vermek |
| говори́ть | сказа́ть | söylemek |

## Zamanla ilişkisi
- **Şimdiki zaman:** yalnızca **bitmemiş** görünüşte.
- **Gelecek:** bitmemiş → **бу́ду + mastar** (бу́ду чита́ть: okuyor olacağım); bitmiş → basit gelecek (прочита́ю: okuyup bitireceğim).
- **Geçmiş:** ikisinde de var; anlam farkı: **Я чита́л кни́гу** (okuyordum / okurdum) ↔ **Я прочита́л кни́гу** (kitabı bitirdim).

## Alıştırma
Her gün kullandığın 5 eylem için iki görünüşü yaz ve **hangi cümleyi hangisiyle söylerdin** kısa notlarla açıkla. Bu konu zordur; zamanla oturur.`,
              verification: VERIF_GENEL,
            },
            {
              id: "ru-gr-6",
              title: "Var / yok, sahiplik ve olumsuzlama",
              summary: "У меня́ есть ...; У меня́ нет ... (genitif)",
              minutes: 20,
              body: `## Sahiplik: «у + genitif + есть»
Türkçe "... var" Rusça'da **у меня́ есть** ("bende ... var") kalıbıyla söylenir:
- **У меня́ есть кни́га.** (Bir kitabım var.)
- **У неё есть брат.** (Onun bir erkek kardeşi var.)

Şimdiki zamanda **есть** çoğu zaman kullanılmaz: **У меня́ но́вая маши́на.**

## Yokluk: «нет + genitif»
- **У меня́ нет кни́ги.** (Kitabım yok.) — кни́га → кни́ги (genitif)
- **Нет вре́мени.** (Vakit yok.)
- **Здесь нет магази́на.** (Burada mağaza yok.)

## Olumsuzlama
- Fiilin önüne **не** gelir: **Я не зна́ю.** (Bilmiyorum.)
- **ни ... ни** ve **никогда́, никто́, ничего́** çifte olumsuzlama verir: **Я никогда́ не был там.** (Hiç orada bulunmadım.)

## «Мне нужно / надо / хочу́»
- **Мне ну́жно купи́ть биле́т.** (Bilet almam gerekiyor.)
- **Мне на́до идти́.** (Gitmem lazım.)

## Alıştırma
Kartlardaki 10 ismi «У меня́ есть ...» ve «У меня́ нет ...» cümlelerinde kullan.`,
              verification: VERIF_GENEL,
            },
            {
              id: "ru-gr-7",
              title: "Sıfatlar ve iyelik zamirleri",
              summary: "Cinsiyet ve sayıya uyum.",
              minutes: 20,
              body: `## Sıfatın uyumu
Sıfat, ismin **cinsiyeti ve sayısıyla** uyum gösterir (yalın hâlde):

| | Eril | Dişil | Nötr | Çoğul |
|---|---|---|---|---|
| yeni | но́вый дом | но́вая кни́га | но́вое окно́ | но́вые дома́ |
| iyi | хоро́ший друг | хоро́шая де́вушка | хоро́шее ме́сто | хоро́шие лю́ди |
| büyük | большо́й город | больша́я страна́ | большо́е окно́ | больши́е города́ |

## İyelik zamirleri
| | Eril | Dişil | Nötr | Çoğul |
|---|---|---|---|---|
| benim | мой | моя́ | моё | мои́ |
| senin | твой | твоя́ | твоё | твои́ |
| bizim | наш | на́ша | на́ше | на́ши |
| sizin | ваш | ва́ша | ва́ше | ва́ши |

**его́ / её / их** (onun / onların) hiç değişmez: **его́ дом, её кни́га, их го́род**.

## Alıştırma
Kartlardaki 10 isme uygun sıfat bulup yalın hâlde yaz.`,
              verification: VERIF_GENEL,
            },
          ],
          quiz: [
            qz("Rusça'da kaç hâl vardır?", ["6", "3", "5", "8"], 0),
            qz("«кни́га» (kitap) hangi cinsiyettedir?", ["Dişil", "Eril", "Nötr", "Cinsiyetsiz"], 0),
            qz("«У меня́ есть кни́га» ne anlama gelir?", ["Bir kitabım var", "Kitabı okudum", "Bana kitap ver", "Kitap benim değil"], 0),
            qz("Şimdiki zamanda «быть» fiili nasıl kullanılır?", ["Kullanılmaz (Я студе́нт)", "Her zaman kullanılır", "Yalnızca soruda kullanılır", "Çoğulda kullanılır"], 0),
            qz("«Она́ чита́ла» cümlesindeki -ла neyi gösterir?", ["Öznenin dişil olduğunu", "Çoğulu", "Gelecek zamanı", "Olumsuzluğu"], 0),
            qz("Gelecek zamanda «бу́ду чита́ть» hangi görünüşle kurulur?", ["Bitmemiş görünüş", "Bitmiş görünüş", "Her ikisi", "Hiçbiri"], 0),
            qz("«У меня́ нет кни́ги» cümlesinde «кни́ги» hangi hâldedir?", ["Genitif", "Akuzatif", "Datif", "Yalın"], 0),
            qz("«вы» zamiri hangi anlamda kullanılabilir?", ["Siz (çoğul) ve saygılı tek kişi", "Yalnızca birden fazla kişi", "Yalnızca arkadaşa hitap", "Yalnızca çocuğa hitap"], 0),
          ],
        },
      ],
    },
    {
      id: "kelime",
      title: "Kelimeler ve İfadeler",
      units: [
        {
          id: "ru-kl",
          title: "Kartlarla çalışma planı",
          description: "Aralıklı tekrar ve 100 Temel İfade ile günlük rutin.",
          lessons: [
            {
              id: "ru-kl-1",
              title: "Aralıklı tekrar ve 10 günde 100 ifade",
              summary: "Günlük 15 dakikalık rutin: 10 yeni kart + tekrarlar.",
              minutes: 15,
              body: `## Neden aralıklı tekrar?
Bir bilgiyi unutmadan hemen önce tekrar edersen kalıcı belleğe daha kolay yerleşir. Sistem bunu senin yerine hesaplar: bildiğin kartlar **günler, haftalar, aylar** sonra, bilmediklerin **birkaç dakika sonra** tekrar gelir.

## Günlük rutin (≈15 dk)
1. **/dil/ru** sayfasından **Çalış**'ı aç.
2. Her kartta önce **cevabı kendi kafanda söyle**, sonra göster.
3. Dürüstçe not ver: **Tekrar** (bilemedim), **Zor**, **İyi**, **Kolay**.
4. Sesli okuma düğmesiyle kelimeyi ve cümleyi **yüksek sesle** söyle.

## 100 Temel İfade
Önce **100 Temel İfade** destesini çalış (varsayılan: günde 10 yeni kart → **10 günde** tamamlanır). Ardından **A1 → A2 → B1...** sırasıyla ilerle.

## Kartlar nereden geldi?
- Kelimeler, **Rus Ulusal Derlemi** (Lyashevskaya–Sharov) lemma frekans listesi ve **OpenSubtitles** konuşma frekansıyla seçildi.
- Seviyeler (A1–C2) **frekans bandına göre tahminîdir**; resmî bir CEFR kelime listesi değildir.
- Örnek cümleler ve okunuşlar yapay zekâ ile hazırlandı; hata bulursan kartı düzenleyebilirsin.

## İpuçları
- Günde yeni kart sayısını rahat tutabileceğin kadar yap (10–15).
- Kartı bilmesen bile 5 saniyeden fazla düşünme; "Tekrar" de ve geç.
- Her gün 15 dakika, haftada bir 2 saatten iyidir.`,
              verification:
                "Çalışma yöntemi genel öğrenme bilimi bulgularına (aralıklı tekrar, geri çağırma) dayanır; bu derste ayrı bir çalışma okunmadı. Kaynak seçimi: Rus Ulusal Derlemi frekans listesi (Wiktionary arşivi) ve OpenSubtitles frekans listesi indirilip kontrol edildi.",
            },
          ],
          quiz: [
            qz("Bir karta 'Tekrar' dersen ne olur?", ["Kısa süre sonra yeniden gösterilir", "Bir ay sonra gelir", "Silinir", "Hiç değişmez"], 0),
            qz("Varsayılan hızla 100 Temel İfade kaç günde biter?", ["10", "5", "30", "100"], 0),
            qz("Kart seviyeleri (A1–C2) için doğru ifade hangisidir?", ["Frekans bandına göre tahminîdir", "Resmî CEFR listesidir", "Rastgeledir", "Sınav puanıdır"], 0),
            qz("Kartı cevaplamadan önce ne yapılmalı?", ["Cevabı kendi kafanda söylemeye çalışmak", "Hemen cevabı göstermek", "Kartı atlamak", "Not vermek"], 0),
            qz("Aralıklı tekrarın temel fikri nedir?", ["Unutmadan hemen önce tekrar etmek", "Her gün aynı kartı görmek", "Hepsini bir günde çalışmak", "Sadece yeni kart öğrenmek"], 0),
          ],
        },
      ],
    },
  ],
  notIncluded: `## Bu modülde eklenmeyenler ve nedenleri

- **Rusça'daki tüm hâl çekimleri, çoğul istisnaları ve fiil görünüş çiftlerinin tamamı:** Bu modül bir giriş çerçevesidir; her ayrıntı doğrulanmış bir kaynaktan satır satır kontrol edilmedi.
- **Hareket fiilleri (идти́/ходи́ть, е́хать/е́здить) ve önekleri:** Ayrı bir ders olarak henüz yok.
- **Rusça yazım kuralları (ы/и, ё noktaları) ve noktalama:** Kısaca değinildi; tam liste verilmedi.
- **Okunuşların ses kaydı:** Tarayıcının sesli okuma özelliği kullanılır; bazı tarayıcılarda Rusça ses bulunmayabilir.
- **Kartların anadili konuşan biri tarafından doğrulanması:** Yapılmadı; kartlar yapay zekâ ile hazırlandı ve frekans listeleriyle seçildi.
- **El yazısı (cursive) örnekleri:** Genel gözleme dayalı kısa bilgi verildi (Belirsiz).`,
});
