export type ResourceKind = "kitap" | "web" | "video" | "araç" | "kütüphane";

export interface Resource {
  title: string;
  author?: string;
  kind: ResourceKind;
  url?: string;
  note?: string;
  /** Ücretsiz/açık erişimli kaynak mı? */
  free?: boolean;
}

export interface Lesson {
  /** Modül içinde benzersiz kimlik (ilerleme kaydı anahtarı: `${moduleId}/${id}`). */
  id: string;
  title: string;
  summary: string;
  /** Tahmini çalışma süresi (dakika). */
  minutes: number;
  objectives?: string[];
  tasks?: string[];
  questions?: string[];
  resources?: Resource[];
  /** Astroloji modülü: src/data/learning/astrology-lessons.json içindeki ders numarası. */
  bodyRef?: number;
  /** Ders metni (basit Markdown). */
  body?: string;
  /** Bu dersteki bilgilerin hangi kaynaklarla doğrulandığı / neyin eklenmediği. */
  verification?: string;
  /** Kullanıcı tarafından eklenmiş ders mi? */
  custom?: boolean;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  /** Doğru seçeneğin indeksi. */
  answer: number;
  explain?: string;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  /** Konu denemesi (5-10 soru). */
  quiz?: QuizQuestion[];
}

export interface Track {
  id: string;
  title: string;
  description?: string;
  units: Unit[];
}

export interface Project {
  id: string;
  title: string;
  level: "Başlangıç" | "Orta" | "İleri";
  hours: number;
  description: string;
  features: string[];
  skills: string[];
  steps: string[];
  done?: string[];
}

export interface LearningModule {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: "code" | "eye" | "moon" | "hammer";
  tracks: Track[];
  /** "5 yıllık deneyimli" seviyede yapabilmen gerekenler. */
  competencies: string[];
  projects: Project[];
  /** Kullanıcının kendi yüklediği kaynaklar (dosya adıyla). */
  library: Resource[];
  resources: Resource[];
  disclaimer?: string;
  /** Doğrulanamadığı veya güvenilir kaynak bulunamadığı için müfredata eklenmeyen konular ve nedenleri (Markdown). */
  notIncluded?: string;
}
