"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { recordQuizAttempt, recordMistakeReview } from "@/app/kendi-egitimlerim/actions";
import type { QuizQuestion } from "@/lib/learning/types";

export interface QuizMeta { unitKey: string; h: string; label?: string }

export function QuizRunner({ unitKey, questions: initialQuestions, meta: initialMeta, review }: { unitKey: string; questions: QuizQuestion[]; meta: QuizMeta[]; review?: boolean }) {
  // Kontrol sonrası sunucu sayfayı yeniler (çözülen yanlışlar listeden düşer); oturum boyunca ilk soru listesi sabit kalır.
  const [questions] = useState(initialQuestions);
  const [meta] = useState(initialMeta);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [checked, setChecked] = useState(false);
  const [pending, startTransition] = useTransition();

  const score = answers.reduce<number>((s, a, i) => s + (a === questions[i].answer ? 1 : 0), 0);
  const pct = Math.round((score / questions.length) * 100);
  const allAnswered = answers.every((a) => a !== null);

  function check() {
    setChecked(true);
    const results = questions.map((q, i) => ({ unitKey: meta[i].unitKey, h: meta[i].h, chosen: answers[i] ?? 0, ok: answers[i] === q.answer }));
    startTransition(() => (review ? recordMistakeReview(results) : recordQuizAttempt(unitKey, score, questions.length, results)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setAnswers(questions.map(() => null));
    setChecked(false);
  }

  return (
    <div className="flex flex-col gap-5">
      {checked && (
        <div className={`ag-panel flex flex-wrap items-center gap-4 ${pct >= 70 ? "border-[var(--ag-green-2)]" : ""}`}>
          <span className="text-3xl font-medium">%{pct}</span>
          <div className="text-sm">
            <p className="font-medium">{score}/{questions.length} doğru {pct >= 70 ? "— geçtin ✓" : "— geçme sınırı %70, ilgili parçaları tekrar okuyup yeniden dene"}</p>
            <p className="ag-muted">{review ? "Doğru bildiklerin \"çözüldü\" sayıldı; yanlışların listede kalır." : "Sonuç kaydedildi; yanlışların \"Yanlışlarım\" listesine eklendi, en iyi puanın program sayfasında görünür."}</p>
          </div>
          <button onClick={reset} className="ag-btn ag-btn-dark ml-auto"><RotateCcw size={14} /> Yeniden dene</button>
        </div>
      )}

      {questions.map((q, qi) => (
        <section key={qi} className="ag-panel flex flex-col gap-3">
          {meta[qi].label && <p className="text-xs ag-muted">{meta[qi].label}</p>}
          <p className="font-medium"><span className="ag-muted">{qi + 1}. </span>{q.q}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((o, oi) => {
              const selected = answers[qi] === oi;
              const isRight = oi === q.answer;
              const state = !checked ? (selected ? "ag-opt-sel" : "") : isRight ? "ag-opt-right" : selected ? "ag-opt-wrong" : "";
              return (
                <button
                  key={oi}
                  type="button"
                  disabled={checked}
                  onClick={() => setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))}
                  className={`ag-opt ${state}`}
                >
                  <span className="ag-opt-letter">{String.fromCharCode(65 + oi)}</span>
                  <span className="text-left">{o}</span>
                  {checked && isRight && <CheckCircle2 size={16} className="ml-auto shrink-0" />}
                  {checked && selected && !isRight && <XCircle size={16} className="ml-auto shrink-0" />}
                </button>
              );
            })}
          </div>
          {checked && q.explain && <p className="ag-quote-box text-sm">{q.explain}</p>}
        </section>
      ))}

      {!checked && (
        <div className="flex items-center gap-3">
          <button onClick={check} disabled={!allAnswered || pending} className="ag-btn ag-btn-dark">Cevapları kontrol et</button>
          {!allAnswered && <span className="text-xs ag-muted">{answers.filter((a) => a !== null).length}/{questions.length} soru yanıtlandı</span>}
        </div>
      )}
    </div>
  );
}
