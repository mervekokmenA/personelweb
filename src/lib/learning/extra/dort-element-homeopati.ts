import { extraModule } from "./builder";
import { qz } from "../helpers";

export const dortElementModule = extraModule({
  id: "ek-dort-element-homeopati",
  title: "Dört Astrolojik Element ve Homeopatik Anayasalar",
  tagline: "Element–burç–tip eşleştirmelerinin tarihçesi ve bilimsel durumu (kısa bir tarama makalesi)",
  description:
    "Yüklediğin taranmış 'Dört Astrolojik Element ve Homeopatik Anayasalar' PDF'inin (22 sayfa, OCR ile okundu) ek modülü. Metin astrolojik elementleri, Hipokrat'ın dört mizacı ve homeopatik 'anayasa' tiplerini eşleştirir. Modül bu eşleştirmelerin tarihsel kökenini anlatır ve sağlık iddialarını doğrulanmamış olarak işaretler.",
  source: {
    file: "D_rt_Astroji_k_Element_Ve_Homeopatik_Anayasalar.pdf",
    author: "Belirtilmemiş (taranmış 22 sayfalık İtalyanca/İspanyolca kökenli bir çeviri metin)",
    language: "Türkçe (taranmış, OCR ile okundu; çeviri bozuklukları var)",
    pages: 22,
    readNote: "İlk sayfalar OCR ile okundu: elementlerin tanımı, mizaç teorisi (Hipokrat, Empedokles, Platon) ve homeopatik anayasalar girişi. Kalan sayfalar taranmadı.",
  },
  units: [
    {
      id: "d1",
      title: "1. Elementler, Mizaçlar ve 'Anayasalar'",
      description: "Metnin eşleştirme mantığı ve tarihsel dayanakları.",
      lessons: [
        {
          id: "de-eslestirme",
          title: "Metnin eşleştirme mantığı",
          summary: "Ateş–Toprak–Hava–Su ile burçlar ve homeopatik tipler; yazarın kişisel girişi.",
          body: `## Metin ne diyor? (OCR'ın okunabildiği kadarıyla)

- Yazar, homeopatiyi kişisel bir tedavi arayışı sırasında keşfettiğini, homeopati ve astroloji arasında **paralellikler** gördüğünü anlatır.
- **Dört element = dört madde hâli:** Ateş (iyonize enerji), Toprak (katı), Hava (gaz), Su (sıvı); on iki burç bu elementlerin "nüanslarını" ifade eder.
- **Ateş:** Koç, Aslan, Yay — coşku, yaratıcılık, mücadele. **Toprak:** Boğa, Başak, Oğlak — istikrar, direnç, kristalleşme. **Hava:** İkizler, Terazi, Kova — hareket, iletişim, özgürlük. **Su:** Yengeç, Akrep, Balık — akışkanlık, duyarlılık, yenilenme.
- **Hipokrat'ın dört mizacı:** kan, balgam, sarı safra, kara safra → dört karakter (sanguine, phlegmatic/lenfatik, bilious, nervous/melankolik) (metin başka adlarla da verir).
- **Homeopatik anayasalar:** Karbonik (Su), Sülfürik/Kükürt (Ateş), Muriatik (Hava), Fosforik (Toprak) eşleştirmesi yapılıyor (OCR'da kısmen okunabilir).

## Tarihsel çerçeve
- Dört element fikri **Empedokles**'e (MÖ ~492–432) ve Platon'a dayanır; metin Platon'dan bir pasajla bedeni oluşturan dört elementin dengesizliğinin hastalık yaptığını söyler.
- **Hipokrat'a atfedilen dört mizaç/humoral teori** Batı tıbbında yüzyıllarca etkili olmuş, modern tıbbın temelini oluşturan fizyoloji bulgularıyla **terk edilmiştir**.

## Eleştirel not
- "Element–burç" eşleşmesi astrolojinin geleneksel bir sınıflamasıdır (Astroloji modülü 2. ünite); **fiziksel/medikal bir tip bilgisi vermez**.
- Metindeki "kronik hastalıkların tam tedavisi" anlatısı **kişisel tanıklıktır**; kanıt değil.

## Çalışma
Metindeki eşleştirmeleri bir tabloya yaz; her eşleştirmenin hangi gelenekten (Antik Yunan, astroloji, homeopati) geldiğini işaretle.`,
          verification: `İlk sayfaların OCR metni okundu; OCR/çeviri bozuklukları nedeniyle bazı terimler tahmin edilmiştir (ör. "Sagre/Saguieo"). Empedokles/Platon/Hipokrat atıfları metinde geçer ve genel felsefe tarihiyle uyumludur; bu derste tek tek doğrulanmadı.`,
        },
        {
          id: "de-kanit",
          title: "Homeopati ve mizaç tipolojileri: bilimsel durum",
          summary: "NHMRC 2015 incelemesi ve humoral teorinin terk edilmesi.",
          body: `## Homeopati
- **Avustralya Ulusal Sağlık ve Tıbbi Araştırma Konseyi (NHMRC)** 2015 incelemesi: 225 kontrollü çalışmayı değerlendirerek **hiçbir sağlık durumunda homeopatinin plasebodan öte etkili olduğuna dair güvenilir kanıt bulunmadığı** sonucuna vardı; kronik, ciddi veya ciddileşebilecek durumlar için homeopatik tedavi **önerilmedi**.
- İnceleme, "güvenilir" eşiğinin (örn. en az 150 katılımcı) **keyfî olduğu** yönünde eleştirildi; homeopati sektörü yönteme itiraz etti. Yani inceleme **yöntem tartışmasına açıktır**, ama sonucu geniş biçimde kabul görmüştür.

## Mizaç (humoral) teorisi
Dört mizaç teorisi (kan, balgam, sarı ve kara safra) Hipokrat/Galen geleneğinden gelir ve **tarihsel bir tıp teorisidir**; modern tıp tarafından geçerli bir fizyoloji olarak kabul edilmez. *(Bu ayrıntı için aramada doğrudan kaynak bulunamadı; tarih ve tıp tarihi kaynaklarıyla ayrıca doğrulayın.)*

## Sonuç
Bu PDF'teki eşleştirmeler **tarihsel/astrolojik simgesel bir şemadır**; kişinin sağlığı veya tedavisi için rehber değildir. Sağlık sorunlarında hekim ve kanıta dayalı tedavi gerekir.

## Çalışma
NHMRC'nin 2015 inceleme sayfasını (Conversation özetinden ulaşılabilir) oku ve hakem eleştirisini kendi cümlelerinle özetle.`,
          verification: `**Kaynak:** [The Conversation — No evidence homeopathy is effective (NHMRC review)](https://theconversation.com/no-evidence-homeopathy-is-effective-nhmrc-review-25368), [The Conversation — Health experts find no evidence homeopathy works, again](https://theconversation.com/health-experts-find-no-evidence-homeopathy-works-again-38651). İncelemenin yöntem tartışması ikincil kaynaklardan. Humoral teorinin terk edilmesi genel tıp tarihi bilgisidir; bu aramada doğrulanmadı.`,
        },
      ],
      quiz: [
        qz("Metne göre Ateş elementine hangi burçlar bağlanır?", ["Koç, Aslan, Yay", "Boğa, Başak, Oğlak", "İkizler, Terazi, Kova", "Yengeç, Akrep, Balık"], 0),
        qz("Dört element fikri hangi filozofa dayandırılır?", ["Empedokles", "Descartes", "Kant", "Newton"], 0),
        qz("NHMRC 2015 incelemesinin ana sonucu nedir?", ["Hiçbir sağlık durumunda homeopatinin plasebodan öte etkili olduğuna güvenilir kanıt bulunmadı", "Homeopati tüm hastalıkları tedavi eder", "İnceleme yapılmadı", "Yalnızca astroloji incelendi"], 0),
        qz("Mizaç (humoral) teorisi için doğru değerlendirme hangisidir?", ["Tarihsel bir tıp teorisidir; modern fizyoloji olarak kabul edilmez", "Güncel tıbbın temelidir", "Kanıtlanmış genetiktir", "Yasal bir ölçüdür"], 0),
        qz("Metindeki 'tam tedavi' anlatısı nasıl değerlendirilmelidir?", ["Kişisel tanıklık; kanıt değil", "Klinik kanıt", "Hakemli makale", "Resmî rapor"], 0),
      ],
    },
  ],
  notIncluded: `## Bu ek modülde eklenmeyenler ve nedenleri

- **Homeopatik anayasa tiplerinin ayrıntılı tanımları (Karbonik, Sülfürik, Muriatik, Fosforik) ve tedavi önerileri:** Sağlık iddiası; kanıtı yok; OCR bozuk.
- **Metnin sayfa 3–22'si:** Taranmadı (OCR kalitesi düşük, çeviri bozuk).
- **Yazar bilgisi:** PDF'te okunabilir bir künye bulunmadı.
- **Astrolojik elementlerle sağlık/kişilik tipleri arasındaki ilişkiler:** Bağımsız doğrulama yok.
- **Hipokrat/Galen humoral teorisinin tarihsel ayrıntıları:** Arama sonucu doğrudan kaynak getirmedi; genel bilgi olarak kaldı.`,
});
