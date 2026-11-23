import type { QuizQuestion, Resource } from "./types";

// --- Kaynak listesi: her satır "Başlık | URL | not" ---------------------------------
export function resourcesToText(list: Resource[] = []): string {
  return list
    .map((r) => [r.title, r.url ?? "", [r.author, r.note].filter(Boolean).join(" — ")].join(" | ").replace(/( \| )+$/, ""))
    .join("\n");
}

export function textToResources(text: string): Resource[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, url, ...rest] = line.split("|").map((x) => x.trim());
      const safeUrl = url && (/^https?:\/\//.test(url) || url.startsWith("/")) ? url : undefined;
      return {
        title: title || "Kaynak",
        url: safeUrl,
        note: rest.join(" | ") || (url && !safeUrl ? url : undefined),
        kind: safeUrl ? ("web" as const) : ("kitap" as const),
      };
    });
}

export const linesToList = (t: string): string[] => t.split("\n").map((l) => l.trim()).filter(Boolean);
export const listToLines = (a: string[] = []): string => a.join("\n");

// --- Test soruları: düzenlenebilir metin biçimi ----------------------------------------
//   S: Soru metni
//   A) seçenek
//   B) seçenek
//   C) seçenek
//   D) seçenek
//   Cevap: B
//   Açıklama: neden doğru
// Sorular boş satırla ayrılır.
const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function quizToText(quiz: QuizQuestion[] = []): string {
  return quiz
    .map((q) =>
      [
        `S: ${q.q}`,
        ...q.options.map((o, i) => `${LETTERS[i]}) ${o}`),
        `Cevap: ${LETTERS[q.answer]}`,
        q.explain ? `Açıklama: ${q.explain}` : "",
      ]
        .filter(Boolean)
        .join("\n")
    )
    .join("\n\n");
}

export function textToQuiz(text: string): QuizQuestion[] {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const out: QuizQuestion[] = [];
  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trim());
    const qLine = lines.find((l) => /^S:/i.test(l));
    const options = lines
      .filter((l) => /^[A-F]\)/i.test(l))
      .map((l) => l.replace(/^[A-F]\)\s*/i, "").trim());
    const ansLine = lines.find((l) => /^Cevap:/i.test(l));
    const expLine = lines.find((l) => /^A[çc]ıklama:/i.test(l));
    if (!qLine || options.length < 2 || !ansLine) continue;
    const letter = ansLine.replace(/^Cevap:\s*/i, "").trim().toUpperCase().charAt(0);
    const answer = LETTERS.indexOf(letter);
    if (answer < 0 || answer >= options.length) continue;
    out.push({
      q: qLine.replace(/^S:\s*/i, ""),
      options,
      answer,
      explain: expLine ? expLine.replace(/^A[çc]ıklama:\s*/i, "") : undefined,
    });
  }
  return out;
}
