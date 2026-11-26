import type { Resource } from "./types";

/**
 * BOEN Enstitü (boenstitu.com) "Ücretsiz Eğitimler" listesindeki dersler.
 * ÖNEMLİ: Dersler ücretsizdir; sertifika ise ücretlidir (sayfalarda dijital sertifika 750 TL,
 * basılı + dijital 999 TL olarak belirtilmiş; fiyat değişebilir). Bu yüzden bağlantılar
 * "ücretsiz ders" olarak verilir, "ücretsiz sertifika" diye sunulmaz.
 * Liste 3 sayfalık (79 ders) kataloğun taranmasıyla oluşturuldu.
 */
const BASE = "https://boenstitu.com/online-egitimler/";
const NOTE = "Ders ücretsiz; sertifika ücretli (BOEN'de belirtildiği üzere). Dersi bitirince bu sayfaya dön.";

const boen = (title: string, slug: string, extra?: string): Resource => ({
  title: `BOEN — ${title}`,
  url: BASE + slug,
  kind: "web",
  free: true,
  note: extra ? `${extra} ${NOTE}` : NOTE,
});

export const BOEN = {
  programlama: boen("Temel Programlama Eğitimi", "programlamanin-temelleri-temel-programlama-egitimi", "Algoritma ve temel programlama (≈6,5 saat)."),
  html: boen("HTML Eğitimi", "html-kodlari-egitimi"),
  css: boen("CSS Kodları Eğitimi", "css-kodlari-egitimi"),
  js: boen("JavaScript Eğitimi", "javascript-egitimi-online-javascript-dersleri"),
  bootstrap: boen("Bootstrap Eğitimi", "bootstrap-egitimi"),
  java: boen("Temel Seviye Java Eğitimi", "java-egitimi-temel-seviye", "Nesne yönelimli dile örnek (C# ile benzer kavramlar)."),
  cpp: boen("C++ Programlama Dili Eğitimi", "c-plus-plus-programlama-dili"),
  cv: boen("CV Hazırlama Eğitimi", "basarili-cv-olusturma-egitimi"),
  linkedin: boen("LinkedIn Yönetimi Eğitimi", "linkedin-yonetimi-egitimi"),
  toplanti: boen("Toplantı Yönetimi Eğitimi", "toplanti-yonetimi-egitimi"),
  takim: boen("Takım Bilinci Eğitimi", "takim-bilinci-egitimi"),
  sunum: boen("Etkili Sunum Hazırlama Teknikleri Eğitimi", "etkili-sunum-hazirlama-teknikleri-egitimi"),
  zaman: boen("Zaman Yönetimi Eğitimi", "zaman-yonetimi-egitimi"),
  iletisim: boen("Etkili İletişim Teknikleri Eğitimi", "etkili-iletisim-teknikleri-egitimi"),
  arge: boen("AR-GE Projeleri Eğitimi", "arge-projeleri-egitimi"),
  tasarimDusunme: boen("Tasarım Odaklı Düşünme Eğitimi", "tasarim-odakli-dusunme-sertifika-programi"),
  ga4: boen("Google Analytics 4 Eğitimi", "google-analytics-4-egitimi"),
  makineOgrenmesi: boen("R ile Makine Öğrenmesine Giriş Eğitimi", "r-ile-makine-ogrenmesine-giris-egitimi"),
  stres: boen("Stres Yönetimi Eğitimi", "stresle-basa-cikma-egitimi"),
  degisim: boen("Değişim Yönetimi Eğitimi", "degisim-yonetimi-egitimi"),
  uzaktan: boen("Uzaktan Çalışma ve Verimlilik Eğitimi", "uzaktan-calisma-verimlilik-egitimi"),
  stratejik: boen("Dijital Çağda Stratejik Düşünme Teknikleri Eğitimi", "dijital-cagda-stratejik-dusunme-teknikleri-egitimi"),
  girisimcilik: boen("Girişimcilik Eğitimi", "girisimcilik-egitimi"),
} as const;
