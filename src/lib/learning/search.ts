import type { LearningModule } from "./types";
import { moduleLessons } from "./index";
import astrologyData from "@/data/learning/astrology-lessons.json";

interface AstroLesson { n: number; title: string; body: string; reading: string; practice: string; questions: string[] }

export interface SearchHit {
  moduleId: string;
  moduleTitle: string;
  lessonId: string;
  lessonTitle: string;
  unitTitle: string;
  score: number;
  snippet: string;
  where: "başlık" | "özet" | "metin" | "not";
}

const norm = (s: string) => s.toLocaleLowerCase("tr").normalize("NFC");

export function searchTerms(q: string): string[] {
  return norm(q).split(/\s+/).filter((t) => t.length >= 2).slice(0, 6);
}

function plainText(md: string): string {
  return md.replace(/```[\s\S]*?```/g, (m) => m.replace(/`/g, "")).replace(/[#*_>`|]/g, " ").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\s+/g, " ").trim();
}

function snippetAround(text: string, terms: string[]): string {
  const low = norm(text);
  const idx = Math.min(...terms.map((t) => { const i = low.indexOf(t); return i < 0 ? Infinity : i; }));
  if (!Number.isFinite(idx)) return text.slice(0, 140);
  const start = Math.max(0, idx - 60);
  return (start > 0 ? "…" : "") + text.slice(start, start + 180) + (start + 180 < text.length ? "…" : "");
}

export function searchLessons(modules: LearningModule[], notes: Map<string, string>, q: string, limit = 60): SearchHit[] {
  const terms = searchTerms(q);
  if (terms.length === 0) return [];
  const hits: SearchHit[] = [];
  for (const m of modules) {
    for (const { unit, lesson: l } of moduleLessons(m)) {
      const astro = l.bodyRef && !l.body ? (astrologyData as unknown as AstroLesson[]).find((a) => a.n === l.bodyRef) : undefined;
      const body = plainText(l.body ?? (astro ? `${astro.body} ${astro.reading} ${astro.practice}` : ""));
      const extra = [...(l.objectives ?? []), ...(l.tasks ?? []), ...(l.questions ?? [])].join(" ");
      const note = notes.get(`${m.id}/${l.id}`) ?? "";
      const fields = { title: norm(l.title), summary: norm(l.summary ?? ""), body: norm(`${body} ${extra}`), note: norm(note) };
      const all = `${fields.title} ${fields.summary} ${fields.body} ${fields.note}`;
      if (!terms.every((t) => all.includes(t))) continue;
      const score =
        terms.reduce((s, t) => s + (fields.title.includes(t) ? 5 : 0) + (fields.summary.includes(t) ? 2 : 0) + (fields.note.includes(t) ? 2 : 0) + (fields.body.includes(t) ? 1 : 0), 0);
      const where: SearchHit["where"] = terms.some((t) => fields.title.includes(t)) ? "başlık" : terms.some((t) => fields.summary.includes(t)) ? "özet" : terms.some((t) => fields.body.includes(t)) ? "metin" : "not";
      const src = where === "başlık" || where === "özet" ? l.summary ?? "" : where === "not" ? note : `${body} ${extra}`;
      hits.push({
        moduleId: m.id, moduleTitle: m.title, lessonId: l.id, lessonTitle: l.title, unitTitle: unit.title.replace(/^\d+\.\s*/, ""),
        score, snippet: snippetAround(src, terms), where,
      });
    }
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** Metni arama terimlerine göre parçalara böler (vurgulama için). */
export function highlightParts(text: string, terms: string[]): { text: string; hit: boolean }[] {
  if (terms.length === 0) return [{ text, hit: false }];
  const low = norm(text);
  const marks = new Array<boolean>(text.length).fill(false);
  for (const t of terms) {
    let i = low.indexOf(t);
    while (i >= 0) {
      for (let k = i; k < i + t.length && k < marks.length; k++) marks[k] = true;
      i = low.indexOf(t, i + t.length);
    }
  }
  const parts: { text: string; hit: boolean }[] = [];
  for (let i = 0; i < text.length; i++) {
    const last = parts[parts.length - 1];
    if (last && last.hit === marks[i]) last.text += text[i];
    else parts.push({ text: text[i], hit: marks[i] });
  }
  return parts;
}
