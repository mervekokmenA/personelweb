import type { LearningModule, Lesson, QuizQuestion, Resource } from "../types";

export interface ExtraLessonSpec {
  id: string;
  title: string;
  summary: string;
  minutes?: number;
  body: string;
  verification: string;
  tasks?: string[];
  resources?: Resource[];
}

export interface ExtraUnitSpec {
  id: string;
  title: string;
  description: string;
  lessons: ExtraLessonSpec[];
  quiz: QuizQuestion[];
}

export interface ExtraModuleSpec {
  id: string;
  title: string;
  tagline: string;
  description: string;
  source: NonNullable<LearningModule["source"]>;
  units: ExtraUnitSpec[];
  notIncluded: string;
  resources?: Resource[];
  /** Gerçek kitap yoksa (internetten bulunan konu modülü) */
  library?: Resource[];
}

/** Bir kitap/kaynak için "ek iç modül" üretir: tek program hattı, üniteler, ders gövdeleri, testler. */
export function extraModule(spec: ExtraModuleSpec): LearningModule {
  return {
    id: spec.id,
    title: spec.title,
    tagline: spec.tagline,
    description: spec.description,
    icon: "book",
    group: "ek",
    source: spec.source,
    tracks: [
      {
        id: "main",
        title: "Ek Anlatım",
        units: spec.units.map((u) => ({
          id: u.id,
          title: u.title,
          description: u.description,
          quiz: u.quiz,
          lessons: u.lessons.map<Lesson>((l) => ({
            id: l.id,
            title: l.title,
            summary: l.summary,
            minutes: l.minutes ?? 20,
            body: l.body,
            verification: l.verification,
            tasks: l.tasks,
            resources: l.resources,
          })),
        })),
      },
    ],
    competencies: [],
    projects: [],
    library: spec.library ?? [],
    resources: spec.resources ?? [],
    notIncluded: spec.notIncluded,
  };
}
