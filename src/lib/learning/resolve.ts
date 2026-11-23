import { prisma } from "@/lib/prisma";
import { MODULES, getModule } from "./index";
import type { LearningModule, Lesson, QuizQuestion, Resource } from "./types";

export interface LessonEditData {
  title?: string;
  summary?: string;
  body?: string;
  verification?: string;
  objectives?: string[];
  tasks?: string[];
  questions?: string[];
  resources?: Resource[];
  minutes?: number;
  hidden?: boolean;
}

export interface CustomLessonData extends LessonEditData {
  title: string;
  summary: string;
  unitId: string;
  order: number;
}

export interface ResolvedModule extends LearningModule {
  /** Kullanıcının düzenlediği ders kimlikleri (varsayılandan farklı). */
  editedLessonIds: string[];
  /** Gizlenmiş varsayılan dersler. */
  hiddenLessons: { id: string; title: string }[];
}

type EditRow = { key: string; data: unknown };

function applyEdits(base: LearningModule, rows: EditRow[]): ResolvedModule {
  const prefix = `${base.id}/`;
  const lessonEdits = new Map<string, LessonEditData>();
  const customs: { id: string; data: CustomLessonData }[] = [];
  const quizEdits = new Map<string, QuizQuestion[]>();
  let notIncluded = base.notIncluded;

  for (const r of rows) {
    if (r.key.startsWith(`lesson:${prefix}`)) lessonEdits.set(r.key.slice(`lesson:${prefix}`.length), r.data as LessonEditData);
    else if (r.key.startsWith(`custom:${prefix}`)) customs.push({ id: r.key.slice(`custom:${prefix}`.length), data: r.data as CustomLessonData });
    else if (r.key.startsWith(`quiz:${prefix}`)) quizEdits.set(r.key.slice(`quiz:${prefix}`.length), ((r.data as { questions?: QuizQuestion[] }).questions) ?? []);
    else if (r.key === `modnote:${base.id}`) notIncluded = (r.data as { notIncluded?: string }).notIncluded ?? notIncluded;
  }

  const hiddenLessons: { id: string; title: string }[] = [];
  const edited: string[] = [];

  const toLesson = (id: string, d: CustomLessonData): Lesson => ({
    id, title: d.title, summary: d.summary, minutes: d.minutes ?? 60, body: d.body, verification: d.verification,
    objectives: d.objectives, tasks: d.tasks, questions: d.questions, resources: d.resources, custom: true,
  });

  const tracks = base.tracks.map((t) => ({
    ...t,
    units: t.units.map((u) => {
      const lessons: Lesson[] = [];
      for (const l of u.lessons) {
        const e = lessonEdits.get(l.id);
        if (e?.hidden) {
          hiddenLessons.push({ id: l.id, title: l.title });
          continue;
        }
        if (e) edited.push(l.id);
        lessons.push(e ? ({ ...l, ...Object.fromEntries(Object.entries(e).filter(([k, v]) => k !== "hidden" && v !== undefined)) } as Lesson) : l);
      }
      const extra = customs
        .filter((c) => c.data.unitId === u.id)
        .sort((a, b) => a.data.order - b.data.order)
        .map((c) => toLesson(c.id, c.data));
      return { ...u, lessons: [...lessons, ...extra], quiz: quizEdits.has(u.id) ? quizEdits.get(u.id) : u.quiz };
    }),
  }));

  return { ...base, tracks, notIncluded, editedLessonIds: edited, hiddenLessons };
}

export async function getResolvedModule(id: string): Promise<ResolvedModule | null> {
  const base = getModule(id);
  if (!base) return null;
  const rows = await prisma.learningEdit.findMany({
    where: { OR: [{ key: { startsWith: `lesson:${id}/` } }, { key: { startsWith: `custom:${id}/` } }, { key: { startsWith: `quiz:${id}/` } }, { key: `modnote:${id}` }] },
  });
  return applyEdits(base, rows);
}

export async function getAllResolvedModules(): Promise<ResolvedModule[]> {
  const rows = await prisma.learningEdit.findMany();
  return MODULES.map((m) => applyEdits(m, rows));
}
