import { extraModule } from "./builder";
import { qz } from "../helpers";

export const platonModule = extraModule({
  id: "ek-platon-7-ogreti",
  title: "Platon: İnsanın Kendini Yenmesi En Büyük Zaferdir (7 Öğreti, Taner Şanlıoğlu)",
  tagline: "Popüler bir Platon derlemesinin yedi bölümü: hangi iddia hangi diyaloğa dayanıyor, hangisi sonradan eklenmiş?",
  description:
    "Yüklediğin 'Platon — İnsanın Kendini Yenmesi En Büyük Zaferdir' (Destek Yayınları, Felsefe: 40; yayıma hazırlayan Taner Şanlıoğlu) epub'ının ek modülü. Kitabın yedi 'öğretisini' haritalar ve Platon'un gerçek diyaloglarıyla (Savunma, Phaidros, Menon, Devlet, Timaios…) ilişkilendirerek, kitaptaki 'Akademi'nin girişinde Geometri bilmeyen giremez yazıyordu' gibi bilgileri kaynakla sınar.",
  source: {
    file: "Plato__nsan_n_Kendini_Yenmesi_En_B_y_k_Zaferdir_Platon.epub",
    author: "Platon (derleyen/yayıma hazırlayan: Taner Şanlıoğlu; Destek Yayınları)",
    language: "Türkçe",
    pages: 48,
    readNote: "Künye, önsöz, 'Platon kimdir?' ve yedi bölümün giriş paragrafları okundu. Bölümlerin tamamı ve bu popüler anlatımın Platon metinleriyle satır satır karşılaştırması yapılmadı.",
  },
  units: [
    {
      id: "p1",
      title: "1. Kitabın Yapısı ve Platon",
      description: "Künye, önsöz ve yedi başlık.",
      lessons: [
        {
          id: "pl-yedi",
          title: "Yedi öğreti: başlıklar ve gerçek kaynaklar",
          summary: "Her başlığın hangi Platon diyaloğuna (veya başka bir kaynağa) işaret ettiğine dair harita.",
          body: `## Künye
*Platon: İnsanın Kendini Yenmesi En Büyük Zaferdir — Platon'un Hayat Değiştiren 7 Öğretisi*, **Yayıma hazırlayan: Taner Şanlıoğlu**, **Destek Yayınları** (Felsefe: 40; Destek Yayınları: 1319). Bu bir **popüler derlemedir**, akademik çeviri değildir.

## "Platon kimdir?" bölümü
Platon'un MÖ 428–347'de Atina'da zengin bir ailede doğduğu ve Sokrates'in ölümünden sonra kendini felsefeye adadığı anlatılır; eserleri arasında *Phaidon, Gorgias, Lysis, Sokrates'in Savunması, Timaios ve Devlet* sayılır; kimi kaynaklarda asıl adının **Aristokles** olduğu ve geniş omuzlarından dolayı spor hocasının ona **Platon** lakabını taktığı söylenir.

## Yedi başlık ve olası karşılıkları
| Kitaptaki başlık | Olası gerçek kaynak/konu |
|---|---|
| 1. İnsanı değil, insandaki kötüyü terk et (Delphi kâhini–Sokrates anekdotu) | *Sokrates'in Savunması* (Delphi kehaneti anlatısı) |
| 2. Önce kendini sev, sonra başkalarını (Eros/aşk) | *Phaidros* (ve *Şölen*): aşk ve ruhun akıl–arzu dengesi |
| 3. Gerçeği bilmek istiyorsan, ötesine bak (ruh göçü, hatırlama) | *Menon, Phaidon, Phaidros, Devlet X* (Er mitosu): anamnesis ve metempsikoz |
| 4. Bildiğini bilme, bilmediğini bil (geometri, Akademi) | Sokratik cehalet bilinci; Akademi'de matematik |
| 5. Yönetilmek istemiyorsan yönetmeyi öğren | *Devlet*, *Devlet Adamı*: filozof-yönetici fikri |
| 6. Hayatı anlamak istiyorsan önce müziği anla (Sokrates öncesi filozoflar, Pisagor) | *Timaios*, *Devlet*; Pisagorcu armoni (bkz. Okültizm 1. ünite) |
| 7. Yaşamak istediğin dünyanın insanı ol (ideal devlet) | *Devlet* (insan ve toplum) |

> Tablo ders yazarının **eşlemesidir**; kitap diyalog adlarını sistematik olarak vermez.

## Çalışma
Dersteki her başlık özetini, Okültizm modülü Platon dersindeki **okuma metnindeki** (Devlet VII, Symposium, Timaios) anlatımla karşılaştır ve kitabın anlatımının aslına ne kadar sadık olduğunu (1–5 puan) değerlendir.`,
          verification: `Künye, önsöz ve "Platon kimdir?" bölümü epub'tan okundu; yedi bölüm başlığı doğrudan alındı. Başlık–diyalog eşlemesi Platon'un bilinen eserlerine dayalı ders yazarı değerlendirmesidir; satır satır doğrulama yapılmadı.`,
        },
      ],
      quiz: [
        qz("Kitabı yayıma hazırlayan kimdir?", ["Taner Şanlıoğlu", "Eliphas Lévi", "Cockren", "Powell"], 0),
        qz("Kitapta anlatılan Platon'un doğum–ölüm yılları nedir?", ["MÖ 428–347", "MÖ 570–495", "MÖ 384–322", "MS 204–270"], 0),
        qz("Delphi kâhini–Sokrates anekdotu hangi eserle ilişkilendirilir?", ["Sokrates'in Savunması", "Timaios", "Kratylos", "Sofist"], 0),
        qz("Kitap hangi türde bir eserdir?", ["Popüler bir derleme/yorum", "Akademik eleştirel baskı", "Tarihî el yazması", "Roman"], 0),
        qz("Kitapta Platon lakabı nasıl açıklanır?", ["Geniş omuzlarından dolayı spor hocasının taktığı lakap olarak", "Annesinin verdiği ad olarak", "Antik Mısır kökenli bir ad olarak", "Hiç açıklanmaz"], 0),
      ],
    },
    {
      id: "p2",
      title: "2. Popüler Anlatımı Kaynakla Sınamak",
      description: "Akademi kapısı yazısı, ruh göçü ve 'Hint kökeni' iddiaları.",
      lessons: [
        {
          id: "pl-sinama",
          title: "Üç iddia, üç denetim",
          summary: "'Geometri bilmeyen giremez', 'ruh göçü Hint felsefesinin yansımasıdır' ve 'aşk tanımı' pasajları.",
          body: `## 1) "Akademi'nin girişine 'Geometri bilmeyen giremez' yazdırdı"
Kitabın 4. bölümü bunu **olgu** olarak sunar. Kaynak denetimi: bu yazı geleneği **geç antik dönem** yorumcularında (**Philoponus ve Elias**, 6. yy.) anılır; Platon'un kendi eserlerinde **geçmez**; **Diogenes Laertios** Ksenokrates'in geometri/müzik/astronomi bilmediği için geri çevrildiği anekdotunu verir ama yazıyı vermez; 12. yy. yazar **Tzetzes** yazı biçimini aktarır. Yunanca ifadenin "geometriden anlamayan" yerine "geometriye yatkın olmayan" diye de çevrilebileceği ileri sürülmüştür. Sonuç: **güçlü bir gelenek, ama zayıf tarihsel dayanak**.

## 2) "Ruh göçü, Hint felsefesindeki reenkarnasyonun Yunan düşüncesindeki yansımasıdır"
Platon **ruhun ölümsüzlüğünü ve yeniden doğuşunu** (*Menon, Phaidon, Phaidros, Devlet X* — Er mitosu) anlatır; ancak **kaynağının Hint felsefesi olduğu** tarihsel olarak **kanıtlanmış değildir**; Yunan geleneğinde **Orfik ve Pisagorcu** akımlar daha doğrudan kaynak olarak ele alınır (Okültizm 1. ünite). Hint bağlantısı **spekülatif bir hipotezdir**.

## 3) "Aşk" alıntısı
Kitap, "Mantık dışı arzular en iyi olma düşüncesine baskın çıkarak… aşk adını alır" cümlesini verip Platon'un aşkı **böyle tanımlamadığını**, bunun bedensel hazların kölesi olanlar için söylendiğini belirtir. Bu, *Phaidros*'taki **Lysias/Sokrates'in ilk konuşması** bağlamına uygun bir **bağlamsal düzeltmedir**: ilk konuşma bir retorik **sınavdır**, Platon'un nihai görüşü değildir.

## Ders
Popüler felsefe kitaplarında **"X yazdırdı" / "X'e göre"** ifadeleri için: (1) eserin adı ve bölümü, (2) bağlam (kimin ağzından, hangi amaçla), (3) en eski kaynak.

## Phaidros (Phaedrus): kısa okuma metni
Diyalog üç konuşma içerir:
1. **Lysias'ın konuşması** (okunan metin): "Âşık olmayan kişiye teslim olmak, âşığa teslim olmaktan daha iyidir"; sevgi, yargıyı bozan bir hastalık gibi sunulur.
2. **Sokrates'in birinci konuşması:** Aynı tezi daha düzenli biçimde savunur; ancak sonra bunu **tanrıya karşı bir saygısızlık** sayıp geri çeker.
3. **Sokrates'in ikinci konuşması (palinodi, 244a–257b):** Aşk, "**ilahi delilik**" olabilir. Dört tür ilahi delilik sayılır: kehanet (Apollon), arınma/ayin (Dionysos), şiir (Musalar) ve **aşk** (Afrodit/Eros).
   - **Ruhun savaş arabası benzetmesi (246a–254e):** Ruh, iki atlı bir araba ve sürücüdür: bir at soylu ve itaatkâr, diğeri asi ve tutkulu; sürücü akıldır. Güzelliği görünce ruh "kanatlanır" ve idealar dünyasında gördüğü Güzel'i hatırlar (*anamnesis*).

Bu metin, ezoterik gelenekte **ruhun kanatlanması ve yükselişi** fikrinin kaynaklarından biridir.

## Çalışma
Aşağıdaki *Phaidros* özetini kitabın "aşk" bölümüyle karşılaştır: hangi noktalar örtüşüyor, hangileri kitapta eksik veya farklı?`,
          verification: `**Kaynak:** [Stanford Encyclopedia — Elias](https://plato.stanford.edu/entries/elias/) ve Heath, *A History of Greek Mathematics* alıntıları ([jordanbell2357 — Heath](https://jordanbell2357.github.io/quotes/heath-greek-mathematics.html)) üzerinden yapılan arama; Philoponus/Elias'ın aktardığı tarih ikincil özetlerden. Kitabın ilgili bölümleri epub'tan okundu. Platon'un ruh göçü anlatımı (*Phaidon, Menon, Devlet X*) ve *Phaidros* bağlamı genel felsefe tarihi bilgisidir; birincil metinle bu derste doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("'Geometri bilmeyen giremez' yazısı için doğru değerlendirme hangisidir?", ["Geç antik dönem kaynaklarında geçen, tarihsel dayanağı zayıf bir gelenektir", "Platon'un kendi yazdığı kesin kayıttır", "Akademi'nin yıkıntısında bulunmuş yazıttır", "Aristoteles'in metnidir"], 0),
        qz("Bu yazıyı aktaran 6. yüzyıl yorumcuları kimlerdir?", ["Philoponus ve Elias", "Plotinos ve Porphyrios", "Crowley ve Lévi", "Hipokrat ve Galen"], 0),
        qz("Platon'un ruh göçü anlatımının Hint kökenli olduğu iddiası için doğru ifade nedir?", ["Spekülatif bir hipotezdir; Orfik/Pisagorcu kaynaklar daha doğrudan sayılır", "Kanıtlanmış gerçektir", "Platon bunu hiç yazmamıştır", "Kitap yasaklıdır"], 0),
        qz("Kitaptaki 'aşk' alıntısı Platon'un nihai görüşü mü?", ["Hayır, Phaidros'taki ilk konuşma bağlamında bir tezdir", "Evet, nihai görüşüdür", "Timaios'tan alıntıdır", "Devlet'ten alıntıdır"], 0),
        qz("Philoponus ve Elias hangi yüzyılın yorumcularıdır?", ["6. yüzyıl", "MÖ 5. yüzyıl", "12. yüzyıl", "19. yüzyıl"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Yedi bölümün tam metni ve yorumları:** Popüler derleme; yalnızca giriş paragrafları ve başlıklar okundu.
- **Diyaloglardan alıntıların çeviri doğruluğu:** Kitaptaki alıntılar Platon'un eserleriyle satır satır karşılaştırılmadı.
- **Platon'un asıl adının Aristokles olduğu ve lakabının spor hocasından geldiği:** Antik biyografilerde geçen bir gelenektir (Diogenes Laertios); bu derste bağımsız doğrulanmadı.
- **Platon'un ideal devlet görüşlerinin ayrıntılı eleştirisi:** Kapsam dışı.
- **Kitabın sayfa sayısı:** Epub formatı olduğundan sayfa sayısı yaklaşık değerdir.`,
});
