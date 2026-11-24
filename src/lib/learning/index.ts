import type { LearningModule, Lesson, Track, Unit } from "./types";
import type { ModuleContent } from "./content/types";
import { reactModule } from "./react";
import { occultModule } from "./occult";
import { astrologyModule } from "./astrology";
import { craftsModule } from "./crafts";
import { reactContent } from "./content/react";
import { occultContent } from "./content/occult";
import { astrologyContent } from "./content/astrology";
import { craftsContent } from "./content/crafts";
import { EXTRA_MODULES } from "./extra";
import { DIL_MODULES } from "./dil";

export * from "./types";

function withContent(m: LearningModule, c: ModuleContent): LearningModule {
  return {
    ...m,
    notIncluded: c.notIncluded || m.notIncluded,
    tracks: m.tracks.map((t) => ({
      ...t,
      units: t.units.map((u) => ({
        ...u,
        quiz: c.quizzes[u.id] ?? u.quiz,
        lessons: u.lessons.map((l) => ({ ...l, ...(c.bodies[l.id] ?? {}) })),
      })),
    })),
  };
}

export const MODULES: LearningModule[] = [
  withContent(reactModule, reactContent),
  withContent(occultModule, occultContent),
  withContent(astrologyModule, astrologyContent),
  withContent(craftsModule, craftsContent),
  ...EXTRA_MODULES,
  ...DIL_MODULES,
];

export function getModule(id: string): LearningModule | undefined {
  return MODULES.find((m) => m.id === id);
}

export function moduleLessons(m: LearningModule): { track: Track; unit: Unit; lesson: Lesson }[] {
  return m.tracks.flatMap((track) =>
    track.units.flatMap((unit) => unit.lessons.map((lesson) => ({ track, unit, lesson })))
  );
}

/** Aynı modül içinde ders kimliği benzersiz olmalı; ilerleme anahtarı modül/ders. */
export function progressKey(moduleId: string, lessonId: string): string {
  return `${moduleId}/${lessonId}`;
}

export function findLesson(m: LearningModule, lessonId: string) {
  const all = moduleLessons(m);
  const idx = all.findIndex((x) => x.lesson.id === lessonId);
  if (idx < 0) return null;
  return { ...all[idx], prev: all[idx - 1]?.lesson ?? null, next: all[idx + 1]?.lesson ?? null };
}
