import type { QuizQuestion } from "../types";

export interface ModuleContent {
  /** lessonId → ders metni ve doğrulama notu */
  bodies: Record<string, { body: string; verification?: string }>;
  /** unitId → konu denemesi */
  quizzes: Record<string, QuizQuestion[]>;
  /** Eklenmeyen konular ve nedenleri (Markdown) */
  notIncluded: string;
}
