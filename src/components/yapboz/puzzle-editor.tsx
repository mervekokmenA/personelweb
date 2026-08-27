"use client";

import { useEffect, useRef, useState } from "react";
import { PAPER_PRESETS } from "@/lib/puzzle/paper-sizes";
import { DEFAULT_TRANSFORM, type PuzzleProjectState } from "@/lib/puzzle/types";
import { PaperSetup } from "./paper-setup";
import { ImageEditor } from "./image-editor";
import { AreaDesigner } from "./area-designer";
import { PagePreview } from "./page-preview";

const STORAGE_KEY = "yapboz-draft-v1";

const STEPS = [
  { id: 1, label: "Kağıt" },
  { id: 2, label: "Görsel" },
  { id: 3, label: "Alan & Parçalar" },
  { id: 4, label: "Sayfalar" },
] as const;

function initialState(): PuzzleProjectState {
  const paper = PAPER_PRESETS[0];
  return {
    paper,
    image: null,
    imageTransform: { ...DEFAULT_TRANSFORM },
    boundary: {
      kind: "rect",
      rect: { x: paper.widthMm * 0.15, y: paper.heightMm * 0.15, width: paper.widthMm * 0.7, height: paper.heightMm * 0.7 },
      ellipse: { cx: paper.widthMm / 2, cy: paper.heightMm / 2, rx: paper.widthMm * 0.35, ry: paper.heightMm * 0.35 },
      path: [],
    },
    targetPieceCount: 60,
    themedPlacements: [],
    seed: 1,
    generated: null,
  };
}

function loadDraft(): PuzzleProjectState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PuzzleProjectState;
    // generated (tessellation sonucu) taslakta saklanmıyor — yeniden üretilmesi gerekir.
    return { ...parsed, generated: null };
  } catch {
    return null;
  }
}

export function PuzzleEditor() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<PuzzleProjectState>(initialState);
  const hydrated = useRef(false);

  useEffect(() => {
    // localStorage sadece istemcide var — sunucu render'ıyla eşleşme
    // (hydration) sorunu yaşamamak için taslak, mount SONRASI burada
    // uygulanıyor (varsayılan state ile ilk render'ın sunucuyla aynı
    // olması gerekiyor).
    const draft = loadDraft();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mount-sonrası tek seferlik localStorage hydration'ı, döngüsel render riski yok
    if (draft) setState(draft);
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    const timeout = setTimeout(() => {
      try {
        const { paper, image, imageTransform, boundary, targetPieceCount, themedPlacements, seed } = state;
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ paper, image, imageTransform, boundary, targetPieceCount, themedPlacements, seed })
        );
      } catch {
        // localStorage dolu/erişilemez olabilir — taslak kaydı en kötü ihtimalle atlanır.
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [state]);

  function resetAll() {
    if (!confirm("Yeni bir tasarıma başlamak istediğine emin misin? Mevcut taslak silinecek.")) return;
    setState(initialState());
    setStep(1);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // yoksayılabilir
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {STEPS.map((s) => (
            <button
              key={s.id}
              onClick={() => setStep(s.id)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                step === s.id ? "bg-accent-yellow" : "border border-card-border text-muted hover:bg-card"
              }`}
            >
              {s.id}. {s.label}
            </button>
          ))}
        </div>
        <button onClick={resetAll} className="text-xs text-muted underline hover:text-foreground">
          Yeni Tasarıma Başla
        </button>
      </div>

      {step === 1 && (
        <PaperSetup
          state={state}
          onChange={setState}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <ImageEditor
          state={state}
          onChange={setState}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <AreaDesigner
          state={state}
          onChange={setState}
          onBack={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      )}
      {step === 4 && <PagePreview state={state} onBack={() => setStep(3)} />}
    </div>
  );
}
