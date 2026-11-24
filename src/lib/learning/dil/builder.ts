import type { LearningModule, Lesson, QuizQuestion, Resource } from "../types";

export interface DilLessonSpec {
  id: string;
  title: string;
  summary: string;
  minutes?: number;
  body: string;
  verification: string;
  tasks?: string[];
  resources?: Resource[];
}

export interface DilUnitSpec {
  id: string;
  title: string;
  description: string;
  lessons: DilLessonSpec[];
  quiz: QuizQuestion[];
}

/** Bir dil modülünün grubu (Alfabe, Okunuş, Gramer, Kelimeler): her grup bir "iz" (track) olur */
export interface DilGroupSpec {
  id: string;
  title: string;
  units: DilUnitSpec[];
}

export interface DilModuleSpec {
  id: string; // "dil-ru"
  title: string;
  tagline: string;
  description: string;
  source: NonNullable<LearningModule["source"]>;
  groups: DilGroupSpec[];
  notIncluded: string;
  resources?: Resource[];
}

export function dilModule(spec: DilModuleSpec): LearningModule {
  return {
    id: spec.id,
    title: spec.title,
    tagline: spec.tagline,
    description: spec.description,
    icon: "book",
    group: "dil",
    source: spec.source,
    tracks: spec.groups.map((g) => ({
      id: g.id,
      title: g.title,
      units: g.units.map((u) => ({
        id: u.id,
        title: u.title,
        description: u.description,
        quiz: u.quiz,
        lessons: u.lessons.map<Lesson>((l) => ({
          id: l.id,
          title: l.title,
          summary: l.summary,
          minutes: l.minutes ?? 25,
          body: l.body,
          verification: l.verification,
          tasks: l.tasks,
          resources: l.resources,
        })),
      })),
    })),
    competencies: [],
    projects: [],
    library: [],
    resources: spec.resources ?? [],
    notIncluded: spec.notIncluded,
  };
}
