"use client";

import { PAPER_PRESETS, CUSTOM_PAPER_ID } from "@/lib/puzzle/paper-sizes";
import type { PuzzleProjectState } from "@/lib/puzzle/types";

export function PaperSetup({
  state,
  onChange,
  onNext,
}: {
  state: PuzzleProjectState;
  onChange: (updater: (s: PuzzleProjectState) => PuzzleProjectState) => void;
  onNext: () => void;
}) {
  const isCustom = !PAPER_PRESETS.some((p) => p.id === state.paper.id);

  return (
    <section className="card flex flex-col gap-4 p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">1. Kağıt Boyutu</h2>

      <div className="flex flex-wrap gap-2">
        {PAPER_PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => onChange((s) => ({ ...s, paper: p }))}
            className={`rounded-lg border px-4 py-2 text-sm font-medium ${
              state.paper.id === p.id ? "border-accent-yellow bg-accent-yellow/30" : "border-card-border hover:bg-card"
            }`}
          >
            {p.label}
            <span className="ml-1.5 text-xs text-muted">
              {p.widthMm}×{p.heightMm}mm
            </span>
          </button>
        ))}
        <button
          onClick={() =>
            onChange((s) => ({
              ...s,
              paper: { id: CUSTOM_PAPER_ID, label: "Özel", widthMm: s.paper.widthMm, heightMm: s.paper.heightMm },
            }))
          }
          className={`rounded-lg border px-4 py-2 text-sm font-medium ${
            isCustom ? "border-accent-yellow bg-accent-yellow/30" : "border-card-border hover:bg-card"
          }`}
        >
          Özel
        </button>
      </div>

      {isCustom && (
        <div className="flex flex-wrap items-end gap-3">
          <label className="flex flex-col gap-1 text-xs text-muted">
            Genişlik (mm)
            <input
              type="number"
              min={50}
              value={state.paper.widthMm}
              onChange={(e) =>
                onChange((s) => ({ ...s, paper: { ...s.paper, widthMm: Number(e.target.value) || s.paper.widthMm } }))
              }
              className="w-28 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-muted">
            Yükseklik (mm)
            <input
              type="number"
              min={50}
              value={state.paper.heightMm}
              onChange={(e) =>
                onChange((s) => ({ ...s, paper: { ...s.paper, heightMm: Number(e.target.value) || s.paper.heightMm } }))
              }
              className="w-28 rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm"
            />
          </label>
        </div>
      )}

      <p className="text-xs text-muted">
        Bu, tek bir bası sayfasının boyutu. Tasarımın alanı bu boyuttan büyükse, sonraki
        adımlarda otomatik olarak birden fazla sayfaya bölünür.
      </p>

      <button onClick={onNext} className="w-fit rounded-lg bg-accent-yellow px-4 py-2 text-sm font-medium">
        Devam Et →
      </button>
    </section>
  );
}
