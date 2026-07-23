// Not: Kaynak sohbette bağlantılar sadece sağlayıcı adı olarak paylaşıldı,
// tam URL verilmedi — bu yüzden `url` alanları boş bırakıldı. Eğitimler
// sayfasından düzenleyerek gerçek bağlantıları ekleyebilirsin.

export interface SeedTraining {
  name: string;
  provider: string;
  url: string | null;
  type: "FREE" | "PAID";
  category: string;
  status: "PLANNED" | "ONGOING" | "COMPLETED" | "PAUSED";
  instructor?: string;
  paymentInfo?: string;
  description?: string;
}

export const TRAINING_SEED: SeedTraining[] = [
  {
    name: "Okültizm & Bilinç Gelişimi Eğitimi",
    provider: "Behruz Hüseyinzade",
    url: null,
    type: "PAID",
    category: "Okültizm / Bilinç Gelişimi",
    status: "ONGOING",
    instructor: "Behruz Hüseyinzade",
    paymentInfo:
      "Toplam program 14+7 ay (21 ay) sürüyor. İlk 14 ay: 2 ayda bir ödeme (~24.000 TL / 2 ay). 14. aydan sonra aylık ödemeye geçiş (muhtemelen yarı yarıya).",
    description:
      "Ayda 2 grup dersi + ritüel uygulamaları, bireysel pratik ve not tutma. Şu an 8. aydayız, program uzun sürecek.",
  },
  {
    name: "An Introduction to Consumer Neuroscience & Neuromarketing",
    provider: "Copenhagen Business School (Coursera)",
    url: null,
    type: "FREE",
    category: "Nöropazarlama ve İkna Psikolojisi",
    status: "PLANNED",
    description:
      "Tüketici alt bilincinin karar verme mekanizmaları, nörolojik ölçümler ve psikolojik ikna teknikleri. 'Audit/Denetçi' seçeneğiyle ücretsiz izlenebilir.",
  },
  {
    name: "Brand Management: Aligning Business, Brand and Behaviour",
    provider: "University of London (Coursera)",
    url: null,
    type: "FREE",
    category: "Marka Mimarisi ve İletişim Stratejisi",
    status: "PLANNED",
    description:
      "Markanın dille, davranışla ve stratejiyle nasıl inşa edildiği; müşteri zihninde konumlandırma. Ücretsiz izleme seçeneği mevcut.",
  },
  {
    name: "Dijital Pazarlamanın Temelleri",
    provider: "Google Digital Garage",
    url: null,
    type: "FREE",
    category: "Dijital Strateji ve Temel Pazarlama",
    status: "PLANNED",
    description: "26 modül, tamamen ücretsiz ve onaylı sertifikalı program.",
  },
  {
    name: "Content Marketing Certification Course",
    provider: "HubSpot Academy",
    url: null,
    type: "FREE",
    category: "İçerik Kurgusu ve Hikaye Anlatıcılığı",
    status: "PLANNED",
    description:
      "Hikaye anlatıcılığı, ikna edici içerik kurgulama, stratejik metin tasarımı. Tamamen ücretsiz sertifika programı.",
  },
  {
    name: "Brand Strategy & Brand Archetypes",
    provider: "Udemy",
    url: null,
    type: "PAID",
    category: "Marka Stratejisi ve Arketipsel İletişim",
    status: "PLANNED",
    description:
      "Carl Jung'un arketip modellerini markaların görsel diline ve iletişim stratejisine dönüştürme.",
  },
  {
    name: "Copywriting & Persuasive Writing Courses",
    provider: "Udemy",
    url: null,
    type: "PAID",
    category: "İkna Metin Yazarlığı ve İçerik Mimarisi",
    status: "PLANNED",
    description:
      "Metin diliyle psikolojik ikna sağlama, alt bilince hitap eden başlık ve içerik kurguları.",
  },
  {
    name: "Marka Yönetimi ve Stratejik İletişim Sertifika Programları",
    provider: "İstanbul Bilgi Üniversitesi (BİLGİ-SEM)",
    url: null,
    type: "PAID",
    category: "Türkiye Akademik Sertifika Programları",
    status: "PLANNED",
    description: "Marka algısı kurgulama, stratejik içerik yönetimi ve pazarlama iletişimi.",
  },
  {
    name: "Stratejik Marka Yönetimi ve Yaratıcı İletişim",
    provider: "Boğaziçi Üniversitesi (BÜYEM)",
    url: null,
    type: "PAID",
    category: "Türkiye Akademik Sertifika Programları",
    status: "PLANNED",
    description: "Marka mimarisi, stratejik karar alma ve ikna dili üzerine üst düzey eğitim.",
  },
];
