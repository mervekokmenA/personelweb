"use client";

import { useEffect, useRef, useState } from "react";
import { Upload, RotateCcw } from "lucide-react";
import type { PuzzleProjectState } from "@/lib/puzzle/types";
import { boundaryBoundingBox, boundaryToSvgPath } from "@/lib/puzzle/boundary";

const DISPLAY_TARGET_WIDTH = 640;

function loadImageFile(file: File): Promise<{ dataUrl: string; naturalWidth: number; naturalHeight: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const img = new Image();
      img.onload = () => resolve({ dataUrl, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight });
      img.onerror = () => reject(new Error("Görsel okunamadı."));
      img.src = dataUrl;
    };
    reader.onerror = () => reject(new Error("Dosya okunamadı."));
    reader.readAsDataURL(file);
  });
}

export function ImageEditor({
  state,
  onChange,
  onBack,
  onNext,
}: {
  state: PuzzleProjectState;
  onChange: (updater: (s: PuzzleProjectState) => PuzzleProjectState) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [baseScale, setBaseScale] = useState(1);
  const dragRef = useRef<{ startX: number; startY: number; startTx: number; startTy: number } | null>(null);

  const displayScale = DISPLAY_TARGET_WIDTH / state.paper.widthMm;
  const displayHeight = state.paper.heightMm * displayScale;

  const boundaryBox = boundaryBoundingBox(state.boundary);

  async function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Lütfen bir görsel dosyası seç.");
      return;
    }
    try {
      const loaded = await loadImageFile(file);
      const fit = Math.max(boundaryBox.width / loaded.naturalWidth, boundaryBox.height / loaded.naturalHeight);
      setBaseScale(fit);
      onChange((s) => ({
        ...s,
        image: loaded,
        imageTransform: {
          tx: boundaryBox.x + boundaryBox.width / 2,
          ty: boundaryBox.y + boundaryBox.height / 2,
          scale: fit,
          rotationDeg: 0,
        },
      }));
      setError(null);
    } catch {
      setError("Görsel yüklenemedi, tekrar dener misin?");
    }
  }

  useEffect(() => {
    function onPaste(e: ClipboardEvent) {
      const item = Array.from(e.clipboardData?.items ?? []).find((it) => it.type.startsWith("image/"));
      const file = item?.getAsFile();
      if (!file) return;
      const dt = new DataTransfer();
      dt.items.add(file);
      handleFiles(dt.files);
    }
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boundaryBox.x, boundaryBox.y, boundaryBox.width, boundaryBox.height]);

  function onPointerDown(e: React.PointerEvent) {
    if (!state.image) return;
    (e.target as Element).setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, startTx: state.imageTransform.tx, startTy: state.imageTransform.ty };
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragRef.current) return;
    const dxMm = (e.clientX - dragRef.current.startX) / displayScale;
    const dyMm = (e.clientY - dragRef.current.startY) / displayScale;
    onChange((s) => ({
      ...s,
      imageTransform: { ...s.imageTransform, tx: dragRef.current!.startTx + dxMm, ty: dragRef.current!.startTy + dyMm },
    }));
  }
  function onPointerUp() {
    dragRef.current = null;
  }

  const zoomFactor = state.image ? state.imageTransform.scale / baseScale : 1;

  function setZoomFactor(zf: number) {
    onChange((s) => ({ ...s, imageTransform: { ...s.imageTransform, scale: baseScale * zf } }));
  }

  function resetTransform() {
    if (!state.image) return;
    const fit = Math.max(boundaryBox.width / state.image.naturalWidth, boundaryBox.height / state.image.naturalHeight);
    setBaseScale(fit);
    onChange((s) => ({
      ...s,
      imageTransform: {
        tx: boundaryBox.x + boundaryBox.width / 2,
        ty: boundaryBox.y + boundaryBox.height / 2,
        scale: fit,
        rotationDeg: 0,
      },
    }));
  }

  const clipId = "yapboz-crop-clip";

  return (
    <section className="card flex flex-col gap-4 p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">2. Görsel Yükle &amp; Düzenle</h2>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-1.5 rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium"
        >
          <Upload size={15} /> Görsel Yükle
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <span className="text-xs text-muted">veya bu alana bir görsel yapıştır (Ctrl/Cmd+V)</span>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}

      <div
        className="mx-auto overflow-hidden rounded-lg border border-card-border bg-[repeating-conic-gradient(#eee_0%_25%,#fff_0%_50%)] bg-[length:16px_16px]"
        style={{ width: DISPLAY_TARGET_WIDTH, height: displayHeight }}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${state.paper.widthMm} ${state.paper.heightMm}`}
          width={DISPLAY_TARGET_WIDTH}
          height={displayHeight}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className={state.image ? "cursor-grab active:cursor-grabbing" : ""}
        >
          <defs>
            <clipPath id={clipId}>
              <path d={boundaryToSvgPath(state.boundary)} />
            </clipPath>
          </defs>

          <rect x={0} y={0} width={state.paper.widthMm} height={state.paper.heightMm} fill="var(--card)" />

          <g clipPath={`url(#${clipId})`}>
            {state.image && (
              <g
                transform={`translate(${state.imageTransform.tx} ${state.imageTransform.ty}) rotate(${state.imageTransform.rotationDeg}) scale(${state.imageTransform.scale})`}
              >
                <image
                  href={state.image.dataUrl}
                  x={-state.image.naturalWidth / 2}
                  y={-state.image.naturalHeight / 2}
                  width={state.image.naturalWidth}
                  height={state.image.naturalHeight}
                />
              </g>
            )}
          </g>

          <path
            d={boundaryToSvgPath(state.boundary)}
            fill="none"
            stroke="var(--accent-pink)"
            strokeWidth={0.8}
            strokeDasharray="3 2"
          />
        </svg>
      </div>

      {state.image && (
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-xs text-muted">
            Yakınlaştır
            <input
              type="range"
              min={0.3}
              max={5}
              step={0.01}
              value={zoomFactor}
              onChange={(e) => setZoomFactor(Number(e.target.value))}
              className="w-32"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-muted">
            Döndür
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={state.imageTransform.rotationDeg}
              onChange={(e) =>
                onChange((s) => ({ ...s, imageTransform: { ...s.imageTransform, rotationDeg: Number(e.target.value) } }))
              }
              className="w-32"
            />
          </label>
          <button onClick={resetTransform} className="flex items-center gap-1 text-xs text-muted hover:text-foreground">
            <RotateCcw size={13} /> Sıfırla
          </button>
        </div>
      )}

      <p className="text-xs text-muted">
        Kırmızı kesikli çizgi, kabaca yapboz alanını gösterir (tam sınırı bir sonraki adımda
        belirleyeceksin). Görseli sürükleyerek kaydırabilir, yakınlaştırma/döndürme
        kaydırıcılarıyla ayarlayabilirsin.
      </p>

      <div className="flex justify-between">
        <button onClick={onBack} className="rounded-lg border border-card-border px-4 py-2 text-sm">
          ← Geri
        </button>
        <button
          onClick={onNext}
          disabled={!state.image}
          className="rounded-lg bg-accent-yellow px-4 py-2 text-sm font-medium disabled:opacity-50"
        >
          Devam Et →
        </button>
      </div>
    </section>
  );
}
