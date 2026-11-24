import { extraModule } from "./builder";
import { qz } from "../helpers";

export const eterikCiftModule = extraModule({
  id: "ek-eterik-cift",
  title: "Eterik Çift: İnsanın Sağlık Aurası (A. E. Powell)",
  tagline: "Teosofi'nin eterik beden derlemesi: yapı, kuvvet merkezleri ve kaynak sorunu",
  description:
    "Yüklediğin 'Eterik Çift' (Arthur E. Powell, The Etheric Double, ilk basım 1925) PDF'inin ek modülü. 25 bölümlük kitabın yapısını haritalar, derlemenin Besant ve Leadbeater'a dayandığını ve 'kanıt girişimi olmadığını' yayıncının önsözünden aktarır; kuvvet merkezlerini ve 'Kilner çalışması' bölümünü eleştirel bağlamda ele alır.",
  source: {
    file: "eterik-e-arthur-e-powell-1.pdf",
    author: "Arthur E. Powell (Teosofi Yayın Evi, 1925; Türkçe makine çevirisi)",
    language: "Türkçe (makine çevirisi, İngilizceden)",
    pages: 125,
    readNote: "Künye, yayıncı önsözü, önsöz ve içindekiler okundu. Bölüm metinleri derse konmadı.",
  },
  units: [
    {
      id: "e1",
      title: "1. Derleme ve Kaynak Sorunu",
      description: "Kitabın amacı, kaynakları ve yöntemi.",
      lessons: [
        {
          id: "ec-kitap",
          title: "Kitabın kimliği: derleme, kaynaklar ve dil sorunu",
          summary: "Powell'ın derlemesi, Teosofi kaynakları, yayıncının 'kanıt girişimi yok' notu ve makine çevirisi uyarısı.",
          body: `## Künye
*The Etheric Double: The Health Aura of Man*, **Arthur E. Powell**; ilk kez **1925**'te yazarın insanın iç yapısı üzerine bir dizisinin parçası olarak yayımlandı (önsöze göre). PDF'te Türkçe metin "**onlinedoctranslator.com**" ile çevrilmiş olduğundan, **çeviri hataları** olabilir; bu bölümde yalnızca okunabilen pasajlar kullanıldı.

## Yöntem (yayıncının önsözü)
- Seri, **çoğunlukla Annie Besant ve C. W. Leadbeater**'ın yazdıklarından başlayarak ilgili literatürün **yoğunlaştırılmış bir sentezidir**; yazar derlemede kullandığı kitapların listesini verir.
- Önsöz kendi yöntemini şöyle tanımlar: "**İfadelerden herhangi birini kanıtlamaya, hatta haklı çıkarmaya yönelik hiçbir girişim yoktur**." Kenar notları okuyucuya kaynaklara başvurma imkânı verir.
- **Blavatsky'nin eserleri kullanılmamıştır**; yazar *Gizli Doktrin*'deki araştırmayı "kendisi için üstlenilemeyecek kadar büyük bir görev" bulduğunu söyler.
- Powell'ın derlemesi, **1897–1921 arasında yayımlanan kırk ana eserin** özetidir (önsöze göre).
- Sonraki önsöz, kırk küsur yıl içinde "bilinçdışı zihnin işleyişinin daha iyi anlaşıldığını" ve medyumsal bilgilerde **olası hatalara dikkat edilmesi gerektiğini** belirtir.

## Sonuç
Bu kitap bir **araştırma raporu değil, bir Teosofi derlemesidir**; içindeki bilgi "gözlem" olarak sunulan, bağımsız doğrulanmamış iddialardan oluşur.

## Çalışma
Dersteki üç uyarıyı (kanıt girişimi yok, kaynak Besant/Leadbeater, hatalara dikkat) kendi cümlelerinle yaz; bu kitabı kaynak göstererek yazdığın bir makalede nasıl atıf yapacağını planla.`,
          verification: `Yayıncı önsözü ve önsöz Türkçe PDF'ten doğrudan okundu (makine çevirisi olduğu için ifadeler özetlenmiştir). Kitabın ilk basım yılı (1925) önsözde geçer. Teosofi derlemesi olduğu ve kanıt iddia etmediği, metnin kendi beyanıdır.`,
        },
        {
          id: "ec-harita",
          title: "25 bölümlük bölüm haritası",
          summary: "Genel açıklamadan ektoplazmaya: kuvvet merkezleri, prana, kundalini, doğum–ölüm ve ek konular.",
          body: `## İçindekiler (PDF'ten)

| Bölüm | Konu |
|---|---|
| Giriş, 1 | Genel Açıklama |
| 2 | **Prâna** veya Canlılık |
| 3 | **Kuvvet Merkezleri** |
| 4–10 | Dalak merkezi · Omurga tabanı · Göbek · Kalp · Boğaz · Kaşlar arası · Başın tepesi |
| 11–12 | Boşaltımlar · Sonuçların tablolanması |
| 13 | **Kundalini** |
| 14 | Atom ağı |
| 15–16 | Doğum · Ölüm |
| 17–20 | **Şifa** · Büyücülük · Mermiler ve kalkanlar · Medyumluk |
| 21 | **Dr. Walter J. Kilner'ın çalışması** |
| 22 | Eterik yetiler |
| 23–24 | Nesnelerin mıknatıslanması · Ektoplazma |
| 25 | Sonuç |

## Okuma ipucu
- Bölüm 3–10 **yedi merkez** modelini verir (dalak, omurga tabanı, göbek, kalp, boğaz, kaşlar arası, tepe). Bu liste **Teosofi'nin (Leadbeater) çakra tasarımına** aittir; Hint geleneğindeki çakra sistemleriyle birebir aynı değildir.
- Bölüm 21 aynı modelin "bilimsel" dayanağı olarak sunduğu **Kilner** çalışmasını anar (bkz. *How to Read the Aura* ek modülü: Kilner ekranlarının bilimsel değerlendirmesi).

## Çalışma
Tabloyu kullanarak 7 merkez için "Teosofi–Hint geleneği–modern beden farkındalığı" sütunlu bir karşılaştırma tablosu başlat; boş bıraktığın hücreleri kaynak arayarak doldur.`,
          verification: `İçindekiler PDF'ten okundu. Merkezlerin Leadbeater/Teosofi kökenli olduğu bilgisi genel Teosofi tarihine dayanır (bu derste tek tek doğrulanmadı); Hint tantra sistemleriyle farkı belirtilmek üzere eklendi.`,
        },
      ],
      quiz: [
        qz("Kitabın ilk basım yılı hangisidir (önsöze göre)?", ["1925", "1887", "1971", "2004"], 0),
        qz("Yayıncı önsözüne göre kitap neye dayanır?", ["Besant ve Leadbeater'ın yazıları ağırlıklı bir derleme", "Laboratuvar deneyleri", "Klinik çalışmalar", "Blavatsky'nin Gizli Doktrin'i"], 0),
        qz("Önsöz ifadelerin kanıtı için ne söyler?", ["Kanıtlama girişimi yoktur", "Hepsi kanıtlanmıştır", "Hakem onayı vardır", "Klinik veriler eklenmiştir"], 0),
        qz("Kuvvet merkezleri kaç tanedir?", ["7", "3", "12", "22"], 0),
        qz("PDF'in dil sorunu nedir?", ["Makine çevirisi olduğu için hatalar olabilir", "Latince yazılmıştır", "Şifrelidir", "Okunamaz"], 0),
        qz("Kitapta Kilner hangi bölümde anılır?", ["21", "1", "25", "3"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Bölümlerin gövde metinleri (prana, kuvvet merkezleri, kundalini, doğum/ölüm, şifa, büyücülük, mermiler ve kalkanlar, medyumluk, ektoplazma):** Bunlar bağımsız olarak doğrulanmamış Teosofi iddialarıdır; PDF makine çevirisi olduğundan metnin güvenilirliği de sınırlı. Başlık haritası verildi.
- **Sağlık ve şifa iddiaları:** Tıbbi tedavi değildir; hekime başvurmak esastır.
- **Merkezlerin 'işlevleri' ve 'renkleri':** Doğrulanmadı.
- **Kitabın İngilizce orijinaliyle karşılaştırma:** Bu derste yapılmadı; kritik kullanım için İngilizce orijinale bakılmalı.
- **Kundalini bölümü:** Hint geleneğiyle (ör. Tantra kaynakları) karşılaştırılmadan öğretilmedi.`,
});
