"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { CheckCircle2, RotateCcw, EyeOff, ExternalLink } from "lucide-react";
import { gradeStudyCard, suspendStudyCard } from "@/app/kendi-egitimlerim/tekrar/actions";
import { previewLabel, type Grade } from "@/lib/lang/srs";
import type { StudyItem } from "@/lib/learning/review";

const GRADES: { g: Grade; label: string; key: string; cls: string }[] = [
  { g: 0, label: "Tekrar", key: "1", cls: "ag-btn-outline" },
  { g: 1, label: "Zor", key: "2", cls: "ag-btn-outline" },
  { g: 2, label: "İyi", key: "3", cls: "ag-btn-dark" },
  { g: 3, label: "Kolay", key: "4", cls: "ag-btn-soft" },
];

export function StudyReview({ items, backHref }: { items: StudyItem[]; backHref: string }) {
  const [queue, setQueue] = useState<StudyItem[]>(items);
  const [flipped, setFlipped] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(0);
  const [again, setAgain] = useState(0);
  const [pending, startTransition] = useTransition();
  const [startedAt] = useState(() => new Date());
  const cur = queue[0];

  const next = useCallback(() => { setFlipped(false); setPicked(null); }, []);

  const grade = useCallback(
    (g: Grade) => {
      if (!cur || pending) return;
      const item = cur;
      startTransition(async () => { await gradeStudyCard(item.card.id, g); });
      setQueue((q) => {
        const rest = q.slice(1);
        if (g === 0) {
          const at = Math.min(3, rest.length);
          return [...rest.slice(0, at), { ...item, isNew: false, state: { ...item.state, reps: 0 } }, ...rest.slice(at)];
        }
        return rest;
      });
      if (g === 0) setAgain((n) => n + 1); else setDone((n) => n + 1);
      next();
    },
    [cur, pending, next],
  );

  const suspend = useCallback(() => {
    if (!cur || pending) return;
    const id = cur.card.id;
    startTransition(async () => { await suspendStudyCard(id); });
    setQueue((q) => q.slice(1));
    next();
  }, [cur, pending, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); }
      else if (flipped && ["1", "2", "3", "4"].includes(e.key)) grade((Number(e.key) - 1) as Grade);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped, grade]);

  const labels = useMemo(() => (cur ? GRADES.map((x) => previewLabel(cur.state, x.g, startedAt)) : []), [cur, startedAt]);

  if (!cur) {
    return (
      <div className="ag-panel flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 size={40} className="text-[var(--ag-green-2)]" />
        <h2 className="text-xl font-medium">{items.length === 0 ? "Şimdilik çalışılacak kart yok" : "Oturum tamamlandı"}</h2>
        <p className="max-w-md text-sm ag-muted">
          {items.length === 0
            ? "Vadesi gelen kart yok ya da bugünkü yeni kart sınırına ulaştın. Kartlar, tamamladığın derslerin soruları ve başladığın programların test soruları için açılır."
            : `${done} kart tamamlandı${again ? `, ${again} kez "Tekrar" dedin (kısa süre sonra yeniden gelir)` : ""}.`}
        </p>
        <Link href={backHref} className="ag-btn ag-btn-dark">Geri dön</Link>
      </div>
    );
  }

  const c = cur.card;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs ag-muted">
        <span>
          Kalan: <strong>{queue.length}</strong> · Yapılan: <strong>{done}</strong>
          {cur.isNew ? <span className="ag-pill ag-pill-lime ml-2">Yeni</span> : <span className="ag-pill ml-2">Tekrar</span>}
          <span className="ag-pill ml-2">{c.kind === "q" ? "Test sorusu" : "Ders sorusu"}</span>
        </span>
        <Link href={backHref} className="ag-btn ag-btn-outline">Bitir</Link>
      </div>

      <div className="ag-panel flex min-h-[16rem] flex-col gap-4 p-6" role="group" aria-label="Kart">
        <p className="text-xs ag-muted">{c.crumb}</p>
        <p className="text-xl font-medium leading-snug">{c.front}</p>

        {flipped ? (
          <div className="flex flex-col gap-3 border-t border-[var(--ag-border)] pt-4">
            {c.kind === "q" && c.options ? (
              <>
                <ul className="flex flex-col gap-1.5" aria-label="Seçenekler">
                  {c.options.map((o, i) => (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => setPicked(i)}
                        className={`ag-opt w-full ${i === c.answer ? "ag-opt-right" : picked === i ? "ag-opt-wrong" : ""}`}
                      >
                        <span className="ag-opt-letter">{String.fromCharCode(65 + i)}</span>
                        <span className="text-left">{o}</span>
                      </button>
                    </li>
                  ))}
                </ul>
                {c.explain && <p className="ag-quote-box text-sm">{c.explain}</p>}
              </>
            ) : (
              <>
                <p className="text-sm ag-muted">Bu açık uçlu bir soru: cevabını kendi cümlelerinle ver, sonra dersi açıp kontrol et.</p>
                {c.note && <p className="ag-quote-box whitespace-pre-wrap text-sm"><strong>Notun:</strong> {c.note}</p>}
              </>
            )}
            <Link href={c.href} target="_blank" className="inline-flex w-fit items-center gap-1 text-xs underline ag-muted"><ExternalLink size={12} /> {c.kind === "q" ? "Konu testini aç" : "Dersi aç"}</Link>
          </div>
        ) : (
          <button className="ag-btn ag-btn-dark mt-auto w-fit" onClick={() => setFlipped(true)}>Cevabı göster <span className="ag-muted text-xs">(Boşluk)</span></button>
        )}
      </div>

      {flipped && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Ne kadar iyi hatırladın?">
          {GRADES.map((x, i) => (
            <button key={x.g} className={`ag-btn ${x.cls} flex-col !py-3`} onClick={() => grade(x.g)} disabled={pending}>
              <span>{x.label}</span>
              <span className="text-[11px] opacity-70">{labels[i]} · {x.key}</span>
            </button>
          ))}
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs ag-muted">
        <span className="flex items-center gap-1"><RotateCcw size={12} /> &quot;Tekrar&quot; dersen kart bu oturumda birkaç kart sonra yeniden gelir.</span>
        <button className="inline-flex items-center gap-1 underline" onClick={suspend} disabled={pending}><EyeOff size={12} /> Bu kartı bir daha gösterme</button>
      </div>
    </div>
  );
}
