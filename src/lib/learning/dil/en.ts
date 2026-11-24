import { dilModule } from "./builder";
import { qz, web } from "../helpers";

export const enModule = dilModule({
  id: "dil-en",
  title: "İngilizce: Kelimeler (B1–C2) ve 100 Temel İfade",
  tagline: "Oxford 3000/5000 düzeylerine göre, aralıklı tekrarla",
  description:
    "İngilizce için yalnızca kelime odaklı modül: B1, B2, C1 (Oxford 3000/5000 CEFR listesi) ve C2 (Oxford dışı ileri düzey) kelime desteleri ile 100 temel ifade. Kartlar /dil/en sayfasındadır.",
  source: {
    file: "İnternet kaynakları (kitap yüklemesi yok)",
    author: "Oxford Learner's Dictionaries (Oxford 3000/5000), OpenSubtitles frekansı",
    language: "İngilizce kaynaklardan Türkçe ders",
    readNote:
      "Oxford 3000 ve Oxford 5000 CEFR PDF listeleri indirilip her kelimenin düzeyi programla kontrol edildi; kullanım sıklığı OpenSubtitles (hermitdave/FrequencyWords) listesiyle doğrulandı. C2 için resmî liste yoktur, seviye tahminîdir.",
  },
  resources: [
    web("Oxford Learner's Dictionaries — Oxford 3000 and 5000", "https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000"),
    web("FrequencyWords (OpenSubtitles) — hermitdave", "https://github.com/hermitdave/FrequencyWords"),
  ],
  groups: [
    {
      id: "kelime",
      title: "Kelimeler",
      units: [
        {
          id: "en-kl",
          title: "Kelime çalışma yöntemi",
          description: "Seviyeler, kartın yapısı ve günlük rutin.",
          lessons: [
            {
              id: "en-kl-1",
              title: "Seviyeler, kartlar ve aralıklı tekrar",
              summary: "B1–C2 desteleri nasıl seçildi ve nasıl çalışılır?",
              minutes: 15,
              body: `## Desteler
| Deste | Kaynak / ölçüt |
|---|---|
| **100 Temel İfade** | Günlük hayatta işe yarayan kalıplar |
| **B1** | Oxford 3000 listesinin B1 düzeyi |
| **B2** | Oxford 3000 + Oxford 5000 listelerinin B2 düzeyi |
| **C1** | Oxford 5000 listesinin C1 düzeyi |
| **C2** | Oxford listelerinde olmayan, ileri düzey ama gerçek metin/konuşmada geçen kelimeler (**seviye tahminîdir**) |

## Kart yapısı
Her kartta **kelime**, **tür** (i. isim, f. fiil, s. sıfat, z. zarf, ed. edat/bağlaç), **Türkçe anlam** ve bir **örnek cümle** (Türkçe çevirisiyle) bulunur.

## Günlük rutin (≈15 dk)
1. **/dil/en** → **Çalış**.
2. Önce kelimenin anlamını kendi kafanda söyle; sonra göster.
3. Dürüstçe not ver: **Tekrar / Zor / İyi / Kolay**.
4. Örnek cümleyi sesli oku (🔊).

## İpuçları
- Sadece kelime ezberleme; **örnek cümleyi** de yüksek sesle söyle.
- Günde 10 yeni kart yeterlidir; tekrarlar zamanla birikir.
- Anlamı yanlış ya da eksikse kartı düzenleyebilirsin.`,
              verification:
                "Oxford 3000 ve Oxford 5000 'by CEFR level' PDF listeleri indirildi ve B1/B2/C1 kartlarının tümü ilgili düzeydeki listede bulundu (programla doğrulandı); C2 kartlarının hiçbiri Oxford listelerinde yoktur ve hepsi OpenSubtitles frekans listesinde bulunur. Türkçe anlamlar ve örnek cümleler yapay zekâ ile hazırlandı.",
            },
          ],
          quiz: [
            qz("C2 destesi neye göre hazırlandı?", ["Oxford dışı, ileri düzey ama kullanımı kanıtlı kelimeler (tahmini seviye)", "Resmî C2 listesi", "Rastgele seçim", "Sadece deyimler"], 0),
            qz("B1 kelimeleri hangi listeden alındı?", ["Oxford 3000 (B1)", "Oxford 5000 (C1)", "TOEFL listesi", "Wikipedia"], 0),
            qz("Her kartta hangi bilgi yer alır?", ["Kelime, tür, Türkçe anlam ve örnek cümle", "Sadece kelime", "Sadece anlam", "Ses kaydı"], 0),
            qz("Örnek cümleyi sesli okumak neden önerilir?", ["Kelimeyi bağlam içinde hatırlamaya yardımcı olur", "Süreyi uzatır", "Gerekli değildir", "Kartı siler"], 0),
            qz("100 Temel İfade destesini bitirmek için varsayılan hızda kaç gün gerekir?", ["10", "3", "50", "100"], 0),
          ],
        },
      ],
    },
  ],
  notIncluded: `## Bu modülde eklenmeyenler ve nedenleri

- **İngilizce gramer ve okunuş dersleri:** Yalnızca kelime istendiği için eklenmedi.
- **IPA/okunuş gösterimi:** Kartlarda okunuş yok; sesli okuma için 🔊 düğmesi kullanılır.
- **C2 için resmî bir kelime listesi:** Yoktur; C2 seçimi frekans verisi ve Oxford listeleri dışı kalma ölçütüyle yapıldı (seviye tahminîdir).
- **Kartların bir İngilizce öğretmeni tarafından doğrulanması:** Yapılmadı; Türkçe anlamlar ve cümleler yapay zekâ ile hazırlandı.`,
});
