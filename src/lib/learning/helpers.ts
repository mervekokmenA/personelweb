import type { Lesson, QuizQuestion, Resource } from "./types";

type LessonOpts = Partial<Pick<Lesson, "objectives" | "tasks" | "questions" | "resources" | "bodyRef" | "minutes">>;

export function lesson(id: string, title: string, summary: string, opts: LessonOpts = {}): Lesson {
  return { id, title, summary, minutes: opts.minutes ?? 90, ...opts };
}

export const web = (title: string, url: string, note?: string, author?: string): Resource => ({
  title, url, note, author, kind: "web", free: true,
});
export const book = (title: string, author: string, note?: string, url?: string, free = false): Resource => ({
  title, author, note, url, kind: "kitap", free,
});
export const video = (title: string, url: string, note?: string, author?: string): Resource => ({
  title, url, note, author, kind: "video", free: true,
});
export const tool = (title: string, url: string, note?: string): Resource => ({
  title, url, note, kind: "araç", free: true,
});
export const own = (title: string, file: string, note?: string, author?: string): Resource => ({
  title, author, note: [file, note].filter(Boolean).join(" — "), kind: "kütüphane",
});

/** Soru metninden türetilen sabit (deterministik) bir düzenle doğru şıkkı farklı konumlara yerleştirir. */
export const qz = (q: string, options: string[], answer: number, explain?: string): QuizQuestion => {
  let h = 0;
  for (let i = 0; i < q.length; i++) h = (h * 31 + q.charCodeAt(i)) >>> 0;
  const target = h % options.length;
  const correct = options[answer];
  const others = options.filter((_, i) => i !== answer);
  const shuffled: string[] = [];
  let oi = 0;
  for (let i = 0; i < options.length; i++) shuffled.push(i === target ? correct : others[oi++]);
  return { q, options: shuffled, answer: target, explain };
};
