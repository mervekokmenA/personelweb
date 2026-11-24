import { dilModule } from "./builder";
import { qz, web } from "../helpers";

const VERIF_GENEL =
  "Bu ders, İbranice alfabe/okunuş/gramer için genel kabul görmüş bilgilere dayanır; 22 harf, 5 son harf ve 7 binyan internet kaynaklarıyla doğrulandı (MyJewishLearning, Chabad harf tablosu, Wikipedia 'Hebrew alphabet', Universal Dependencies 'HebBinyan'). Harekeler (nikud), okunuşlar ve örnek cümleler yapay zekâ ile hazırlandı; anadili İbranice olan biri tarafından doğrulanmadı. Okunuşlar Türkçeye göre yaklaşık değerlerdir.";

export const heModule = dilModule({
  id: "dil-he",
  title: "İbranice: Alfabe, Okunuş ve Gramer",
  tagline: "Sağdan sola yazı, harekeler ve kök sistemi; kartlarla birlikte çalışılır",
  description:
    "Modern İbranice için alfabe (22 harf + 5 son harf), okunuş (nikud, vurgu, gırtlak sesleri) ve temel gramer (cinsiyet, tanımlık ha-, şimdiki zaman, kök sistemi ve yedi binyan, 'yeş/eyn'). Kelime ve ifade çalışması için /dil/he sayfasındaki kartlar (A1–C2 ve 100 Temel İfade) kullanılır.",
  source: {
    file: "İnternet kaynakları (kitap yüklemesi yok)",
    author: "MyJewishLearning, Chabad.org, Wikipedia, Universal Dependencies (HebBinyan)",
    language: "İngilizce kaynaklardan Türkçe ders",
    readNote:
      "Alfabe, binyan ve hareke sistemi internet kaynaklarıyla doğrulandı. Begadkefat (בגדכפ״ת) ayrıntıları aramada bulunamadı; Modern İbranice'deki durum genel bilgiyle verildi (Belirsiz). Örnekler yapay zekâ ile hazırlandı.",
  },
  resources: [
    web("MyJewishLearning — How To Read the Hebrew Alphabet", "https://www.myjewishlearning.com/article/how-to-read-the-hebrew-alphabet/"),
    web("Wikipedia — Hebrew alphabet", "https://en.wikipedia.org/wiki/Hebrew_alphabet"),
    web("Universal Dependencies — HebBinyan", "https://universaldependencies.org/he/feat/HebBinyan.html"),
  ],
  groups: [
    {
      id: "alfabe",
      title: "Alfabe",
      units: [
        {
          id: "he-al",
          title: "Alef-bet: 22 harf",
          description: "Sağdan sola yazılır; sessiz harfler (abjad); 5 harfin sondaki biçimi vardır.",
          lessons: [
            {
              id: "he-al-1",
              title: "Yön ve 22 harf",
              summary: "Yazı sağdan sola; harfler büyük/küçük ayrımı yapmaz.",
              minutes: 35,
              body: `## Genel bilgi
- İbranice **sağdan sola** yazılır ve okunur.
- Alfabede **22 harf** vardır; **büyük/küçük harf** ayrımı yoktur.
- Alfabe bir **abjad**'dır: harfler temelde **ünsüzleri** gösterir; ünlüler günlük yazıda çoğunlukla yazılmaz (aşağıda nikud ve "dolu yazım").
- **5 harfin kelime sonunda ayrı bir biçimi** vardır (ך ם ן ף ץ); sesleri değişmez.

## Harfler
| Harf | Adı | Sesi | Not |
|---|---|---|---|
| א | alef | sessiz / boğumlu (ʔ) | ünlü taşır |
| ב | bet | **b** (bּ) / **v** (ב) | dagesh ile b |
| ג | gimel | g | |
| ד | dalet | d | |
| ה | he | h | sonda çoğunlukla sessiz |
| ו | vav | v; ayrıca o / u | |
| ז | zayin | z | |
| ח | het | h (gırtlaktan, güçlü) | Türkçedeki "h"den daha sert |
| ט | tet | t | |
| י | yod | y; ayrıca i | |
| כ ך | kaf | **k** (כּ) / **h** (כ) | sonda ך |
| ל | lamed | l | |
| מ ם | mem | m | sonda ם |
| נ ן | nun | n | sonda ן |
| ס | sameh | s | |
| ע | ayin | sessiz / boğumlu (ʕ) | ünlü taşır |
| פ ף | pe | **p** (פּ) / **f** (פ) | sonda ף |
| צ ץ | tsadi | ts | sonda ץ |
| ק | kuf | k | |
| ר | resh | r (çoğu konuşurda gırtlaktan) | |
| ש | şin / sin | **ş** (שׁ) / **s** (שׂ) | nokta soldaysa s |
| ת | tav | t | |

## Alıştırma
Her harfi bir kelimeyle eşleştir: **בית** (bayit, ev), **שלום** (şalom), **תודה** (toda), **ספר** (sefer, kitap), **עיר** (ir, şehir).`,
              verification: VERIF_GENEL,
              tasks: ["22 harfi sağdan sola yaz ve her birinin adını söyle."],
            },
            {
              id: "he-al-2",
              title: "Benzer harfler ve son harfler",
              summary: "Karıştırılan harf çiftleri; sondaki biçimler.",
              minutes: 25,
              body: `## Birbirine benzeyen harfler
| Çift | Ayırt edici |
|---|---|
| **ב** (b/v) – **כ** (k/h) | ב'nin altı düz ve köşeli, כ'nin alt kısmı yuvarlak |
| **ד** (d) – **ר** (r) | ד'nin sağ üst köşesi çıkıntılı, ר yuvarlak |
| **ה** (h) – **ח** (het) – **ת** (t) | ה'nin sol bacağı ayrık; ח iki bacağı bitişik; ת'nin sol bacağında "ayak" var |
| **ו** (vav) – **ז** (z) – **ן** (son nun) | ו kısa düz çubuk; ז üstünde şapka var; ן aşağı uzar |
| **ג** (g) – **נ** (n) | ג'nin ayağı ileri; נ'nin ayağı geri/düz |
| **ט** (t) – **ס** (s) – **ם** (son mem) | ט içe kıvrık; ס yuvarlak kapalı; ם köşeli kapalı |
| **ע** (ayin) – **צ** (tsadi) | ע daha basit çatal; צ'nin sağ kolu uzar |

## Son harfler (sofit)
Kelime **sonunda** şu beşi başka biçimde yazılır: **ך** (kaf), **ם** (mem), **ן** (nun), **ף** (pe), **ץ** (tsadi). Sesi aynıdır.

## Alıştırma
Oku ve kelime sonlarına dikkat et: **שלום, גן, אף, עץ, מלך** (şalom, gan "bahçe", af "burun", ets "ağaç", melek "kral").`,
              verification: VERIF_GENEL + " Harf karşılaştırmaları genel öğrenme deneyimidir.",
            },
            {
              id: "he-al-3",
              title: "Dagesh, şin/sin ve ünlü harfler",
              summary: "ב כ פ'nin iki sesi; ו ve י'nin ünlü görevi.",
              minutes: 25,
              body: `## Dagesh (harfin içindeki nokta)
Üç harf noktalıyken **sert**, noktasızken **sürtünmeli** okunur:
- **בּ** = b, **ב** = v
- **כּ** = k, **כ** = h (ח'ye benzer)
- **פּ** = p, **פ** = f

(Eski İbranice'de ג ד ת harfleri de benzer değişim gösterirdi; **Modern İbranice'de bu ayrım yoktur**. — genel bilgi, Belirsiz.)

## Şin ve sin
**שׁ** (nokta sağda) = **ş**, **שׂ** (nokta solda) = **s**. Normal yazıda nokta yazılmaz; hangisinin okunacağı kelimeyi bilmekle öğrenilir.

## Ünlü harfler (dolu yazım)
Günlük yazıda ünlüler çoğunlukla **yazılmaz**, ancak **ו, י, ה, א** harfleri bazen ünlü yerine kullanılır ("matres lectionis"): **ו** → o/u, **י** → i/e, **ה** → sonda a/e. Bu, "dolu yazım"dır (כתיב מלא): **שלום** (şalom, ו = o), **ספר** (sefer), **בית** (bayit, י = i).

## Alıştırma
Aynı kelimeyi iki yazımla dene: **ספר** ve **סֵפֶר** (nikudlu). Hangi ünlüler harekeyle, hangileri harfle gösterilmiş?`,
              verification: VERIF_GENEL,
            },
          ],
          quiz: [
            qz("İbranice hangi yönde yazılır?", ["Sağdan sola", "Soldan sağa", "Yukarıdan aşağı", "Her iki yönde"], 0),
            qz("İbranice alfabede kaç harf vardır?", ["22", "26", "33", "28"], 0),
            qz("Kelime sonunda ayrı biçimi olan harflerden biri hangisidir?", ["מ (mem)", "ב (bet)", "ד (dalet)", "ר (resh)"], 0),
            qz("«בּ» (noktalı bet) hangi sesi verir?", ["b", "v", "p", "f"], 0),
            qz("«שׁ» (nokta sağda) hangi sesi verir?", ["ş", "s", "z", "ç"], 0),
            qz("«כ» (noktasız kaf) hangi sese yakındır?", ["h (sürtünmeli)", "k", "g", "s"], 0),
            qz("Abjad ne demektir?", ["Harflerin temelde ünsüzleri gösterdiği yazı sistemi", "Yalnızca ünlülerden oluşan alfabe", "Heceli yazı", "Resim yazısı"], 0),
          ],
        },
      ],
    },
    {
      id: "okunus",
      title: "Okunuş",
      units: [
        {
          id: "he-ok",
          title: "Nikud, vurgu ve gırtlak sesleri",
          description: "Ünlü işaretleri, vurgu ve Türkçe konuşanlar için ipuçları.",
          lessons: [
            {
              id: "he-ok-1",
              title: "Nikud: ünlü işaretleri",
              summary: "Modern İbranice'de 5 ünlü: a, e, i, o, u.",
              minutes: 25,
              body: `## Nikud
Harflerin altına/üstüne konan noktalar **ünlüleri** gösterir. Çocuk kitaplarında, öğrenme materyallerinde, şiirde ve sözlüklerde bulunur; **gazete ve günlük yazıda yazılmaz**.

| İşaret | Adı | Örnek | Sesi |
|---|---|---|---|
| ַ | patah | בַּ | a |
| ָ | kamats | בָּ | a (çoğunlukla) |
| ֵ | tsere | בֵּ | e |
| ֶ | segol | בֶּ | e |
| ִ | hirik | בִּ | i |
| ֹ | holam | בֹּ | o |
| ֻ | kubuts | בֻּ | u |
| וּ | şuruk | בוּ | u |
| ְ | şva | בְּ | kısa e ya da sessiz |

**Modern İbranice'de 5 ünlü** vardır (a, e, i, o, u); uzun/kısa ayrımı yoktur: patah ve kamats aynı "a"dır, tsere ve segol aynı "e"dir.

## Örnek
**סֵפֶר** = sefer (kitap); **שָׁלוֹם** = şalom; **תּוֹדָה** = toda.

## Bu sitedeki kartlarda
Kartların **ön yüzü harekelidir**; **örnek cümleler harekesizdir** (gerçek metin gibi). Latin okunuşu yalnızca 100 Temel İfade ile A1–A2 kartlarında cümlenin altında verilir; B1 ve üstü kartlarda cümle okunuşu yoktur, 🔊 düğmesiyle dinleyebilirsin.`,
              verification: VERIF_GENEL,
              tasks: ["5 ünlü harekeyi bir harfle (ב) yazıp seslendir."],
            },
            {
              id: "he-ok-2",
              title: "Vurgu ve kelime okuma",
              summary: "Çoğu kelimede vurgu son hecededir; harekesiz okuma.",
              minutes: 20,
              body: `## Vurgu
Modern İbranice'de vurgu **çoğunlukla son hecededir** (milra): **שלום** (şaLOM), **תודה** (toDA), **ילד** (yeLED).
**Bazı kelimelerde ilk hecededir** (milel): **בַּיִת** (BAyit), **סֵפֶר** (SEfer), **יֶלֶד** (YEled).

## Harekesiz kelimeyi okumak
Harekesiz yazıda ünlüler görünmez: **ספר** hem *sefer* (kitap) hem *sapar* (berber) hem *safar* (saymak) olabilir. Anlam **bağlamdan** ve **kelime bilgisinden** gelir; bu yüzden kartlardaki harekeli ön yüz ve okunuş önemlidir.

## Alıştırma
Kartlardaki 10 kelimenin vurgusunu söyleyerek tekrarla ve hangilerinin ilk hecede vurgulu olduğunu işaretle.`,
              verification: VERIF_GENEL + " Vurgu kuralları genel gramer bilgisidir; örnek kelimelerin vurgusu elle kontrol edildi.",
            },
            {
              id: "he-ok-3",
              title: "Gırtlak sesleri: ח, ע, ר, צ",
              summary: "Türkçeye göre yeni sesler.",
              minutes: 20,
              body: `## Zor sesler (Türkçe konuşanlar için)
- **ח (het):** Gırtlaktan, hafif sürtünmeli, güçlü bir "h" (Arapça ح'ye yakın). Türkçedeki "h"den daha sert: **חבר** (haver, arkadaş).
- **כ (noktasız):** ח gibi okunur: **כך**, **כל**.
- **ע (ayin):** Eski sesi boğazdan çıkan sürtünmeli bir ünlüydü; **modern konuşmada çoğu kişi א gibi** (ünlüden önce kısa bir kesilme) söyler: **עיר** (ir), **עין** (ayin).
- **ר (resh):** İsrailli çoğu konuşurda **gırtlaktan** (Fransızca "r"ye yakın); Türkçedeki yuvarlanan "r" de anlaşılır.
- **צ (tsadi):** **ts** sesi: **צהריים** (tsohorayim).
- **ג׳ (gimel + geresh):** **c** sesi (Türkçedeki "c"): **ג׳ינס** (cins). **צ׳** = **ç**: **צ׳יפס** (çips). Bunlar ödünç kelimelerde görülür.

## Okunuş yazımımız
Kartlardaki okunuş Türkçe okuyucuya göredir: **ş** = ש, **h** = ח/כ, **ts** = צ, **'** = ע/א'nın boğumlu sesi. Gerçek sesi dinlemek için kartlardaki **🔊** düğmesini kullan.

## Alıştırma
Şunları yüksek sesle söyle: **חבר, חיים, אחד, עיר, רחוב, צהריים, שלום, תודה**.`,
              verification: VERIF_GENEL + " Ayin/resh'in modern telaffuzu için genel dilbilim bilgisi (Belirsiz: bölgesel ve bireysel farklar var).",
            },
          ],
          quiz: [
            qz("Modern İbranice'de kaç ünlü vardır?", ["5", "3", "7", "10"], 0),
            qz("«סֵפֶר» sözcüğünde vurgu nerededir?", ["İlk hecede (SEfer)", "Son hecede", "Ortada", "Vurgu yoktur"], 0),
            qz("«ח» harfi nasıl bir sesi gösterir?", ["Gırtlaktan sert bir h", "ş", "ts", "Hiçbir ses"], 0),
            qz("«ג׳» (gimel + geresh) hangi sesi verir?", ["c", "g", "ç", "j"], 0),
            qz("Harekesiz yazıda ünlüler nasıl anlaşılır?", ["Bağlam ve kelime bilgisiyle", "Hiç anlaşılmaz", "Her zaman a olur", "Sadece son harften"], 0),
            qz("«צ» harfi hangi sesi verir?", ["ts", "ç", "s", "z"], 0),
          ],
        },
      ],
    },
    {
      id: "gramer",
      title: "Gramer",
      units: [
        {
          id: "he-gr",
          title: "Temel gramer",
          description: "Cinsiyet, belirlilik, şimdiki zaman, kök ve binyan sistemi, yeş/eyn.",
          lessons: [
            {
              id: "he-gr-1",
              title: "Cinsiyet ve çoğul",
              summary: "Eril/dişil ve -ים / -ות çoğulları.",
              minutes: 25,
              body: `## Cinsiyet
İsimler **eril** ya da **dişil**dir. Dişil isimler çoğunlukla **-ה** (-a) ya da **-ת** (-et) ile biter:

| Eril | Dişil |
|---|---|
| ילד (yeled) çocuk (erkek) | ילדה (yalda) kız çocuk |
| מורה (more) öğretmen (erkek) | מורה (mora) öğretmen (kadın) |
| תלמיד (talmid) öğrenci (erkek) | תלמידה (talmida) |

## Çoğul
- Eril isimler çoğunlukla **-ים (-im)**: **ילד → ילדים**, **ספר → ספרים**
- Dişil isimler çoğunlukla **-ות (-ot)**: **מכונית → מכוניות**, **שעה → שעות**
- **Düzensizler (sık):** **יום → ימים**, **עיר → ערים**, **שם → שמות**, **בית → בתים**, **אישה → נשים**, **איש → אנשים**.

## Not
Cinsiyet fiil, sıfat ve zamirlerin biçimini de belirler (aşağıdaki derslere bak).

## Alıştırma
Kartlardaki 10 ismin cinsiyetini ve çoğulunu yaz.`,
              verification: VERIF_GENEL,
            },
            {
              id: "he-gr-2",
              title: "Tanımlık ה, belirlilik ve sıfat uyumu",
              summary: "ha- ve 'büyük ev' / 'büyük EV' farkı.",
              minutes: 25,
              body: `## Tanımlık (ha-)
Tek bir tanımlık vardır: **ה** (ha-), kelimenin **başına yapışır**:
- **בית** (bayit, bir ev) → **הבית** (habayit, ev/o ev)
- **ספר** (sefer) → **הספר** (hasefer)

**Belirsiz tanımlık** yoktur: "bir ev" = sadece **בית**.

## Sıfat uyumu
Sıfat, isimden **sonra** gelir ve **cinsiyet, sayı ve belirlilik** bakımından uyum gösterir. Belirli isimde sıfatın da başında **ה** vardır:
| | Eril tekil | Dişil tekil | Eril çoğul |
|---|---|---|---|
| belirsiz | בית גדול | מכונית גדולה | בתים גדולים |
| belirli | **הבית הגדול** | **המכונית הגדולה** | **הבתים הגדולים** |

## Alıştırma
Şunları İbranice'ye çevir: "yeni kitap", "yeni kitaplar", "o yeni kitap", "güzel şehir". (ספר חדש, ספרים חדשים, הספר החדש, עיר יפה.)`,
              verification: VERIF_GENEL,
            },
            {
              id: "he-gr-3",
              title: "Şimdiki zaman (benoni) ve 'olmak' fiilinin yokluğu",
              summary: "4 biçim: eril/dişil × tekil/çoğul.",
              minutes: 25,
              body: `## Şimdiki zamanda fiil
İbranice'de şimdiki zaman fiilleri **dört biçimde** bulunur (özneye göre cinsiyet/sayı uyumu; **kişi için ayrı çekim yoktur**):

| | tekil | çoğul |
|---|---|---|
| **eril** | **אוכל** (ohel) | **אוכלים** (ohlim) |
| **dişil** | **אוכלת** (ohelet) | **אוכלות** (ohlot) |

**אני אוכל** (erkek konuşur) / **אני אוכלת** (kadın konuşur) = yemek yiyorum.
**אנחנו אוכלים** = yemek yiyoruz. **הן אוכלות** = (onlar, kadınlar) yemek yiyor.

## 'Olmak' fiili şimdiki zamanda yoktur
**אני מורה** (Ben öğretmenim.) **הבית גדול** (Ev büyük.)

## Mastar
Mastar **ל-** ile başlar: **לאכול** (yemek), **לדבר** (konuşmak), **ללכת** (gitmek).

## Alıştırma
Kartlardaki beş fiilin mastarını ve eril-dişil şimdiki zaman biçimlerini yaz. (Örn. לעבוד: עובד, עובדת, עובדים, עובדות.)`,
              verification: VERIF_GENEL,
            },
            {
              id: "he-gr-4",
              title: "Kök sistemi (שורש) ve kelime ailesi",
              summary: "Üç harfli kök + kalıp = kelime.",
              minutes: 30,
              body: `## Fikir
İbranice kelimelerin çoğu **3 (bazen 4) harfli bir kökten** türer. Kök **genel anlamı** taşır; **kalıp** (ünlü deseni ve ekler) kelimeyi isim, fiil, sıfat vb. yapar.

## Örnek kök: **כ-ת-ב** (k-t-v, yazmak)
| Kelime | Anlam |
|---|---|
| **לכתוב** (lihtov) | yazmak |
| **כותב** (kotev) | yazıyor (şimdiki zaman, eril) |
| **כתב** (katav) | yazdı |
| **מכתב** (mihtav) | mektup |
| **כתובת** (ktovet) | adres |
| **כתבה** (katava) | makale |
| **כתיבה** (ktiva) | yazma, yazarlık |

## Örnek kök: **ל-מ-ד** (öğrenmek/öğretmek)
**ללמוד** (lilmod, öğrenmek), **לימד** (limed, öğretti), **תלמיד** (talmid, öğrenci), **מלמד** (melamed, öğretmen), **לימוד** (limud, öğrenim).

## Yararı
Bir kökü bildiğinde yeni kelimenin **anlamını tahmin edebilirsin**. Kartlardaki yeni kelimeleri öğrenirken kökünü de not et.

## Alıştırma
**ש-מ-ר** (şmr: korumak) kökünden 4 kelime bul: **לשמור, שומר, שמירה, משמר**.`,
              verification: VERIF_GENEL + " Örnek kelime aileleri elle kontrol edildi; her türev kullanım sıklığı doğrulanmadı.",
            },
            {
              id: "he-gr-5",
              title: "Yedi binyan: fiil kalıpları",
              summary: "pa'al, nif'al, pi'el, pu'al, hif'il, huf'al, hitpa'el.",
              minutes: 35,
              body: `## Yedi kalıp
Fiil kökü **7 kalıpta** (binyan) çekilir. Kalıp, **anlam tonunu** (etken, edilgen, ettirgen, dönüşlü) belirler:

| Binyan | Genel anlam | **כ-ת-ב** örneği (geçmiş, o) |
|---|---|---|
| **פָּעַל** (pa'al) | temel, etken | **כָּתַב** yazdı |
| **נִפְעַל** (nif'al) | edilgen / dönüşlü | **נִכְתַּב** yazıldı |
| **פִּעֵל** (pi'el) | yoğun etken | **סִפֵּר** (kök: ס-פ-ר) anlattı |
| **פֻּעַל** (pu'al) | pi'el'in edilgeni | **סֻפַּר** anlatıldı |
| **הִפְעִיל** (hif'il) | ettirgen | **הִכְתִּיב** yazdırdı/dikte etti |
| **הֻפְעַל** (huf'al) | hif'il'in edilgeni | **הֻכְתַּב** dikte edildi |
| **הִתְפַּעֵל** (hitpa'el) | dönüşlü / karşılıklı | **הִתְכַּתֵּב** yazıştı |

## Tanıma ipuçları
- **נ-** ile başlıyorsa genelde nif'al; **ה-** ile hif'il/huf'al; **הת-** ile hitpa'el.
- Pi'el ve pu'al'da **orta kök harfi çiftleşir** (dagesh).

## Not
Kalıp ile anlam ilişkisi her zaman kusursuz değildir ve tablodaki örnekler **eşleşmenin tam hâlini** göstermek içindir; her kökün tüm kalıplarda kullanımı yoktur.

## Alıştırma
Kartlardaki 5 fiilin kalıbını tahmin et ve kullanım örneklerini dinle.`,
              verification: VERIF_GENEL + " Yedi binyan listesi internetten doğrulandı. Hufal için modern kullanımda 'Hofal' (הָפְעַל) biçimi de görülür.",
            },
            {
              id: "he-gr-6",
              title: "Var / yok (יש / אין), sahiplik ve edat birleşmesi",
              summary: "יש לי = bende var; אין לי = bende yok.",
              minutes: 25,
              body: `## Var / yok
- **יש** (yeş) = var → **יש לי ספר** (Bir kitabım var.)
- **אין** (eyn) = yok → **אין לי כסף** (Param yok.)

## Edat + zamir birleşmesi (ל- "e/a, için")
| | |
|---|---|
| **לי** (li) | bana |
| **לך** (leha) | sana (erkek) |
| **לך** (lah) | sana (kadın) |
| **לו** (lo) | ona (erkek) |
| **לה** (la) | ona (kadın) |
| **לנו** (lanu) | bize |
| **לכם** (lahem) | size |
| **להם** (lahem) | onlara |

## Sahiplik: **של** (şel)
**הספר שלי** (kitabım), **הבית שלך** (senin evin), **המכונית שלו** (onun arabası).

## Örnek cümleler
- **יש לי שאלה.** (Bir sorum var.)
- **אין לי זמן.** (Vaktim yok.)
- **זה הבית שלנו.** (Bu bizim evimiz.)

## Alıştırma
Kartlardaki 10 isimle «יש לי ...» ve «אין לי ...» cümleleri kur.`,
              verification: VERIF_GENEL + " 'ל-' birleşmeleri hızlı gözden geçirildi; tam çekim tablosu verilmedi.",
            },
            {
              id: "he-gr-7",
              title: "Geçmiş ve gelecek zaman (temel)",
              summary: "-תי / -נו ekleri ve א-, ת-, י-, נ- önekleri.",
              minutes: 30,
              body: `## Geçmiş (pa'al, örnek: כ-ת-ב)
| Kişi | Biçim | Okunuş |
|---|---|---|
| ben | **כתבתי** | katavti |
| sen (e.) | **כתבת** | katavta |
| sen (d.) | **כתבת** | katavt |
| o (e.) | **כתב** | katav |
| o (d.) | **כתבה** | katva |
| biz | **כתבנו** | katavnu |
| siz (e.) | **כתבתם** | ktavtem |
| onlar | **כתבו** | katvu |

## Gelecek
| Kişi | Biçim | Okunuş |
|---|---|---|
| ben | **אכתוב** | ehtov |
| sen (e.) | **תכתוב** | tihtov |
| o (e.) | **יכתוב** | yihtov |
| o (d.) | **תכתוב** | tihtov |
| biz | **נכתוב** | nihtov |
| onlar | **יכתבו** | yihtevu |

## Not
Bu tablolar **düzenli** bir kök içindir; **gırtlak sesli** ya da **zayıf harfli** köklerde çekim değişir. Ayrıntıyı sonraki öğrenme aşamasına bırak.

## Alıştırma
Kartlardaki 3 fiil için (לאכול, לעבוד, ללמוד) geçmiş ve şimdiki zaman biçimlerini yaz; düzenli köklerde tablodaki örüntüyü uygula, emin olmadığın biçimi bir sözlükten kontrol et.`,
              verification: VERIF_GENEL + " Çekim tabloları düzenli kök (כ-ת-ב) üzerinden elle kontrol edildi; düzensiz kökler için ayrı kaynak gerekir.",
            },
          ],
          quiz: [
            qz("İbranice'de tek tanımlık hangisidir?", ["ה (ha-)", "ל (le-)", "ב (be-)", "ש (şe-)"], 0),
            qz("«בית» sözcüğünün belirli biçimi hangisidir?", ["הבית", "בית", "לבית", "ביתה"], 0),
            qz("İbranice'de şimdiki zamanda 'olmak' fiili kullanılır mı?", ["Hayır, kullanılmaz", "Evet, her zaman", "Yalnızca soruda", "Yalnızca çoğulda"], 0),
            qz("Fiil köklerinin çoğu kaç harflidir?", ["3", "1", "5", "7"], 0),
            qz("Kaç binyan (fiil kalıbı) vardır?", ["7", "3", "5", "12"], 0),
            qz("«יש לי» ne demektir?", ["Bende var", "Bende yok", "Bana ver", "Benim"], 0),
            qz("Eril isimlerin sık görülen çoğul eki hangisidir?", ["-ים (-im)", "-ות (-ot)", "-ה (-a)", "-ת (-t)"], 0),
            qz("«מכתב» (mihtav) hangi kökten türer?", ["כ-ת-ב (yazmak)", "ל-מ-ד (öğrenmek)", "ש-מ-ר (korumak)", "ה-י-ה (olmak)"], 0),
          ],
        },
      ],
    },
    {
      id: "kelime",
      title: "Kelimeler ve İfadeler",
      units: [
        {
          id: "he-kl",
          title: "Kartlarla çalışma planı",
          description: "Aralıklı tekrar ve 100 Temel İfade ile günlük rutin.",
          lessons: [
            {
              id: "he-kl-1",
              title: "Aralıklı tekrar ve 10 günde 100 ifade",
              summary: "Günlük 15 dakikalık rutin: 10 yeni kart + tekrarlar.",
              minutes: 15,
              body: `## Günlük rutin (≈15 dk)
1. **/dil/he** sayfasından **Çalış**'ı aç.
2. Her kartta önce **cevabı kendi kafanda söyle**, sonra göster.
3. Dürüstçe not ver: **Tekrar / Zor / İyi / Kolay**.
4. 🔊 düğmesiyle kelimeyi ve cümleyi **yüksek sesle** dinle/söyle (tarayıcıda İbranice ses yüklü olmayabilir).

## 100 Temel İfade
Önce **100 Temel İfade** destesi (varsayılan: günde 10 yeni kart → **10 günde** biter). Ardından **A1 → A2 → B1...**

## Kartlardaki biçimler
- **Ön yüz harekelidir** (örn. **שָׁלוֹם**); **örnek cümleler harekesizdir**; cümle okunuşu yalnızca Temel İfadeler ile A1–A2'de vardır (B1 ve üstünde yok).
- Fiiller **mastar** (ל-) biçimindedir; şimdiki zaman biçimi notlarda belirtilir.
- Eril biçim esas alınır; dişil biçim anlam veya nottadır.

## Kartlar nereden geldi?
- Kelimeler **OpenSubtitles İbranice konuşma frekans listesinden** seçildi (kullanımı kanıtlı kelimeler). Seviyeler (A1–C2) **frekans bandına göre tahminîdir**; resmî CEFR listesi değildir.
- Harekeler, okunuşlar ve örnek cümleler **yapay zekâ ile hazırlandı** ve anadili konuşan biri tarafından **doğrulanmadı**; hata bulursan kartı düzenleyebilirsin.

## İpucu
Kartta takıldığında kökü hatırlamaya çalış (bkz. «Kök sistemi» dersi).`,
              verification:
                "Çalışma yöntemi genel öğrenme bilimi bulgularına dayanır. Kaynak seçimi: OpenSubtitles (hermitdave/FrequencyWords) İbranice frekans listesi indirilip her kelimenin listede bulunduğu programla kontrol edildi (iskelet eşleşmesi: ו/י yazım farkı ve harekeler göz ardı edilerek).",
            },
          ],
          quiz: [
            qz("Kartlarda İbranice ön yüz nasıl yazılır?", ["Harekeli (nikudlu)", "Harekesiz", "Latin harfleriyle", "Rakamlarla"], 0),
            qz("Örnek cümleler nasıl yazılır?", ["Harekesiz (gerçek metin gibi)", "Harekeli", "Yalnızca Türkçe", "Yalnızca okunuşla"], 0),
            qz("İbranice kartlarda fiiller hangi biçimdedir?", ["Mastar (ל-)", "Geçmiş zaman", "Gelecek zaman", "Emir"], 0),
            qz("Kart seviyeleri (A1–C2) için doğru ifade hangisidir?", ["Frekans bandına göre tahminîdir", "Resmî CEFR listesidir", "Rastgeledir", "Sınav puanıdır"], 0),
            qz("Hata bulursan ne yapabilirsin?", ["Kartı düzenleyebilirsin", "Hiçbir şey yapamazsın", "Kartı silemezsin ve düzenleyemezsin", "Siteyi kapatırsın"], 0),
          ],
        },
      ],
    },
  ],
  notIncluded: `## Bu modülde eklenmeyenler ve nedenleri

- **Düzensiz (zayıf, gırtlaklı) köklerin çekimi ve tüm binyan çekim tabloları:** Düzenli köklerle örneklendi; düzensiz köklerin ayrıntıları kaynaktan satır satır doğrulanmadı.
- **Yapı hâli (smihut) ve edat çekimlerinin tamamı:** Kısa değinildi; tam tablolar yok.
- **Kitabî/Tevrat İbranicesi:** Bu modül Modern İbranice içindir.
- **Begadkefat (בגדכפ"ת) ayrıntıları:** Aramada kaynak bulunamadı; Modern İbranice'de yalnızca ב/כ/פ ayrımının sesli olduğu genel bilgiyle yazıldı (Belirsiz).
- **Okunuşların ses kaydı:** Tarayıcının sesli okuma özelliği kullanılır; İbranice ses bazı cihazlarda bulunmayabilir.
- **Kartların anadili konuşan biri tarafından doğrulanması:** Yapılmadı; harekeler ve okunuşlar yapay zekâ ile hazırlandı.`,
});
