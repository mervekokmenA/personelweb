"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { Volume2, RotateCcw, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { gradeCard } from "@/app/dil/actions";
import { previewLabel, type Grade, type SrsState } from "@/lib/lang/srs";
import type { Card } from "@/lib/lang/types";

export interface StudyItem {
  card: Card;
  isNew: boolean;
  state: SrsState;
}

const GRADES: { g: Grade; label: string; key: string; cls: string }[] = [
  { g: 0, label: "Tekrar", key: "1", cls: "ag-btn-outline" },
  { g: 1, label: "Zor", key: "2", cls: "ag-btn-outline" },
  { g: 2, label: "İyi", key: "3", cls: "ag-btn-dark" },
  { g: 3, label: "Kolay", key: "4", cls: "ag-btn-soft" },
];

function speak(text: string, lang: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  const u = new SpeechSynthesisUtterance(text.normalize("NFC").replace(/[̀́]/g, ""));
  u.lang = lang;
  u.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
  return true;
}

export function StudySession({
  items, speech, rtl, backHref, langName,
}: { items: StudyItem[]; speech: string; rtl?: boolean; backHref: string; langName: string }) {
  const [queue, setQueue] = useState<StudyItem[]>(items);
  const [flipped, setFlipped] = useState(false);
  const [reverse, setReverse] = useState(false); // true: Türkçe → yabancı dil
  const [done, setDone] = useState(0);
  const [again, setAgain] = useState(0);
  const [pending, startTransition] = useTransition();
  const [noVoice, setNoVoice] = useState(false);
  const [startedAt] = useState(() => new Date());

  const cur = queue[0];
  const total = items.length;

  const grade = useCallback(
    (g: Grade) => {
      if (!cur || pending) return;
      const item = cur;
      startTransition(async () => {
        await gradeCard(item.card.id, g);
      });
      setQueue((q) => {
        const rest = q.slice(1);
        if (g === 0) {
          // Bilinmeyen kart oturum içinde birkaç kart sonra yeniden gelir
          const at = Math.min(3, rest.length);
          return [...rest.slice(0, at), { ...item, isNew: false, state: { ...item.state, reps: 0 } }, ...rest.slice(at)];
        }
        return rest;
      });
      if (g === 0) setAgain((n) => n + 1);
      else setDone((n) => n + 1);
      setFlipped(false);
    },
    [cur, pending],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT" || (e.target as HTMLElement)?.tagName === "TEXTAREA") return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && ["1", "2", "3", "4"].includes(e.key)) {
        grade((Number(e.key) - 1) as Grade);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped, grade]);

  const labels = useMemo(
    () => (cur ? GRADES.map((x) => previewLabel(cur.state, x.g, startedAt)) : []),
    [cur, startedAt],
  );

  if (!cur) {
    return (
      <div className="ag-panel flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle2 size={40} className="text-[var(--ag-green-2)]" />
        <h2 className="text-xl font-medium">{total === 0 ? "Şimdilik çalışılacak kart yok" : "Oturum tamamlandı"}</h2>
        <p className="max-w-md text-sm ag-muted">
          {total === 0
            ? "Bugünkü yeni kart sınırına ulaştın ya da vadesi gelen kart yok. Yarın yeniden gel; ya da günlük yeni kart sayısını dil sayfasından artırabilirsin."
            : `${done} kart tamamlandı${again ? `, ${again} kez "Tekrar" dedin (bu kartlar kısa süre sonra yeniden gelecek)` : ""}. Düzenli tekrar, öğrenmenin asıl yöntemidir.`}
        </p>
        <Link href={backHref} className="ag-btn ag-btn-dark">{langName} sayfasına dön</Link>
      </div>
    );
  }

  const c = cur.card;
  const foreignFront = !reverse;
  const dirStyle = rtl ? ({ direction: "rtl" } as const) : undefined;

  const foreign = (text: string, big?: boolean) => (
    <span lang={speech.slice(0, 2)} dir={rtl ? "rtl" : "ltr"} className={big ? "text-4xl font-medium leading-snug sm:text-5xl" : "text-lg"} style={dirStyle}>
      {text}
    </span>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs ag-muted">
        <span>
          Kalan: <strong>{queue.length}</strong> · Yapılan: <strong>{done}</strong>
          {cur.isNew ? <span className="ag-pill ag-pill-lime ml-2">Yeni</span> : <span className="ag-pill ml-2">Tekrar</span>}
        </span>
        <div className="flex items-center gap-2">
          <button className="ag-btn ag-btn-outline" onClick={() => { setReverse((r) => !r); setFlipped(false); }} aria-pressed={reverse}>
            <ArrowLeftRight size={13} /> {reverse ? "Türkçe → " + langName : langName + " → Türkçe"}
          </button>
          <Link href={backHref} className="ag-btn ag-btn-outline">Bitir</Link>
        </div>
      </div>

      <div className="ag-panel flex min-h-[18rem] flex-col items-center justify-center gap-4 p-6 text-center" role="group" aria-label="Kart">
        {foreignFront ? (
          <div className="flex items-center gap-3">
            {foreign(c.front, true)}
            <button
              className="ag-icon-btn"
              aria-label="Seslendir"
              onClick={() => setNoVoice(!speak(c.front, speech))}
            >
              <Volume2 size={16} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-medium sm:text-4xl">{c.meaning}</span>
            {c.pos && <span className="text-xs ag-muted">{c.pos}</span>}
          </div>
        )}
        {noVoice && <p className="text-xs ag-muted">Bu tarayıcıda sesli okuma desteklenmiyor.</p>}

        {flipped ? (
          <div className="flex w-full max-w-xl flex-col items-center gap-3 border-t border-[var(--ag-border)] pt-4">
            {foreignFront ? (
              <>
                {c.reading && <p className="text-base ag-muted">okunuş: <strong className="text-[var(--ag-ink)]">{c.reading}</strong></p>}
                <p className="text-2xl font-medium">{c.meaning}</p>
                {c.pos && <p className="text-xs ag-muted">{c.pos}</p>}
              </>
            ) : (
              <div className="flex items-center gap-3">
                {foreign(c.front, true)}
                <button className="ag-icon-btn" aria-label="Seslendir" onClick={() => setNoVoice(!speak(c.front, speech))}><Volume2 size={16} /></button>
              </div>
            )}
            {!foreignFront && c.reading && <p className="text-base ag-muted">okunuş: <strong className="text-[var(--ag-ink)]">{c.reading}</strong></p>}
            <div className="mt-1 w-full rounded-2xl bg-black/[0.04] p-3 text-left">
              <div className="flex items-start justify-between gap-2">
                {foreign(c.sentence)}
                <button className="ag-icon-btn shrink-0" aria-label="Cümleyi seslendir" onClick={() => setNoVoice(!speak(c.sentence, speech))}><Volume2 size={14} /></button>
              </div>
              {c.sentenceReading && <p className="mt-1 text-sm ag-muted">{c.sentenceReading}</p>}
              <p className="mt-1 text-sm">{c.sentenceMeaning}</p>
            </div>
            {c.note && <p className="text-xs ag-muted">Not: {c.note}</p>}
            <Link href={`/dil/kart/${c.id}`} className="text-xs underline ag-muted">Kartı düzenle</Link>
          </div>
        ) : (
          <button className="ag-btn ag-btn-dark mt-2" onClick={() => setFlipped(true)}>Cevabı göster <span className="ag-muted text-xs">(Boşluk)</span></button>
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
      <p className="flex items-center gap-1 text-xs ag-muted"><RotateCcw size={12} /> &quot;Tekrar&quot; dersen kart bu oturumda birkaç kart sonra yeniden gelir; kalan notlar aralığı uzatır.</p>
    </div>
  );
}
