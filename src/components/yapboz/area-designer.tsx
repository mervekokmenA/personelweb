"use client";

import { useRef, useState } from "react";
import { Trash2, PawPrint } from "lucide-react";
import type { PuzzleProjectState, ThemedPlacementState, BoundaryShapeKind } from "@/lib/puzzle/types";
import { boundaryToSvgPath, boundaryBoundingBox, boundaryToPolygon } from "@/lib/puzzle/boundary";
import { SHAPE_LIBRARY, ANIMAL_GROUPS } from "@/lib/puzzle/shapes";
import { transformPolygon, type Point } from "@/lib/puzzle/geometry";
import { tessellate } from "@/lib/puzzle/tessellate";
import { autoPackShapes } from "@/lib/puzzle/autopack";

const GEOMETRIC_SHAPES = SHAPE_LIBRARY.filter((s) => s.category === "geometric");
const DEFAULT_FILL_SIZE_MM = 55;

const DISPLAY_TARGET_WIDTH = 640;

function clientToMm(
  e: { clientX: number; clientY: number },
  svg: SVGSVGElement,
  paper: { widthMm: number; heightMm: number }
): Point {
  const rect = svg.getBoundingClientRect();
  return [((e.clientX - rect.left) / rect.width) * paper.widthMm, ((e.clientY - rect.top) / rect.height) * paper.heightMm];
}

function shapeIcon(shapeId: string): string {
  const def = SHAPE_LIBRARY.find((s) => s.id === shapeId);
  if (!def) return "";
  const poly = def.build();
  return poly.map((p, i) => `${i === 0 ? "M" : "L"}${(p[0] + 50).toFixed(1)},${(p[1] + 50).toFixed(1)}`).join(" ") + " Z";
}

export function AreaDesigner({
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
  const svgRef = useRef<SVGSVGElement>(null);
  const placementCounter = useRef(0);
  const packSeedCounter = useRef(1);
  const [armedShapeId, setArmedShapeId] = useState<string | null>(null);
  const [fillGroupId, setFillGroupId] = useState<string | null>(null);
  const [fillSizeMm, setFillSizeMm] = useState(DEFAULT_FILL_SIZE_MM);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [drawingPath, setDrawingPath] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [packing, setPacking] = useState(false);
  const dragRef = useRef<{
    kind: "rect-move" | "rect-handle" | "ellipse-move" | "ellipse-handle" | "themed-move";
    handle?: "nw" | "ne" | "sw" | "se";
    startMm: Point;
    startBoundary?: PuzzleProjectState["boundary"]["rect"] | PuzzleProjectState["boundary"]["ellipse"];
    placementId?: string;
    startTx?: number;
    startTy?: number;
  } | null>(null);

  const displayScale = DISPLAY_TARGET_WIDTH / state.paper.widthMm;
  const displayHeight = state.paper.heightMm * displayScale;

  function setBoundaryKind(kind: BoundaryShapeKind) {
    onChange((s) => {
      if (kind === "path") return { ...s, boundary: { ...s.boundary, kind, path: [] } };
      const box = boundaryBoundingBox(s.boundary);
      if (kind === "rect") {
        return { ...s, boundary: { ...s.boundary, kind, rect: box } };
      }
      return {
        ...s,
        boundary: {
          ...s.boundary,
          kind,
          ellipse: { cx: box.x + box.width / 2, cy: box.y + box.height / 2, rx: box.width / 2, ry: box.height / 2 },
        },
      };
    });
    setDrawingPath(false);
  }

  function onCanvasPointerDown(e: React.PointerEvent<SVGSVGElement>) {
    if (!svgRef.current) return;
    const mm = clientToMm(e, svgRef.current, state.paper);

    if (armedShapeId) {
      const id = `placement-${placementCounter.current++}`;
      const placement: ThemedPlacementState = {
        id,
        shapeId: armedShapeId,
        transform: { tx: mm[0], ty: mm[1], scale: 0.6, rotationDeg: 0 },
      };
      onChange((s) => ({ ...s, themedPlacements: [...s.themedPlacements, placement] }));
      setArmedShapeId(null);
      setSelectedId(id);
      return;
    }

    if (state.boundary.kind === "path" && drawingPath) {
      (e.target as Element).setPointerCapture(e.pointerId);
      onChange((s) => ({ ...s, boundary: { ...s.boundary, path: [mm] } }));
      dragRef.current = { kind: "rect-move", startMm: mm }; // reused as "drawing" flag holder
      return;
    }

    setSelectedId(null);
  }

  function onCanvasPointerMove(e: React.PointerEvent<SVGSVGElement>) {
    if (!svgRef.current) return;
    const mm = clientToMm(e, svgRef.current, state.paper);

    if (state.boundary.kind === "path" && drawingPath && dragRef.current) {
      onChange((s) => {
        const last = s.boundary.path[s.boundary.path.length - 1];
        if (last) {
          const dx = last[0] - mm[0];
          const dy = last[1] - mm[1];
          if (Math.sqrt(dx * dx + dy * dy) < 2.5) return s;
        }
        return { ...s, boundary: { ...s.boundary, path: [...s.boundary.path, mm] } };
      });
      return;
    }

    const drag = dragRef.current;
    if (!drag) return;

    if (drag.kind === "rect-move" && drag.startBoundary) {
      const start = drag.startBoundary as { x: number; y: number; width: number; height: number };
      const dx = mm[0] - drag.startMm[0];
      const dy = mm[1] - drag.startMm[1];
      onChange((s) => ({ ...s, boundary: { ...s.boundary, rect: { ...start, x: start.x + dx, y: start.y + dy } } }));
    } else if (drag.kind === "rect-handle" && drag.startBoundary) {
      const start = drag.startBoundary as { x: number; y: number; width: number; height: number };
      onChange((s) => ({ ...s, boundary: { ...s.boundary, rect: resizeRect(start, drag.handle!, mm) } }));
    } else if (drag.kind === "ellipse-move" && drag.startBoundary) {
      const start = drag.startBoundary as { cx: number; cy: number; rx: number; ry: number };
      const dx = mm[0] - drag.startMm[0];
      const dy = mm[1] - drag.startMm[1];
      onChange((s) => ({
        ...s,
        boundary: { ...s.boundary, ellipse: { ...start, cx: start.cx + dx, cy: start.cy + dy } },
      }));
    } else if (drag.kind === "ellipse-handle" && drag.startBoundary) {
      const start = drag.startBoundary as { cx: number; cy: number; rx: number; ry: number };
      onChange((s) => ({ ...s, boundary: { ...s.boundary, ellipse: resizeEllipse(start, drag.handle!, mm) } }));
    } else if (drag.kind === "themed-move" && drag.placementId) {
      const dx = mm[0] - drag.startMm[0];
      const dy = mm[1] - drag.startMm[1];
      onChange((s) => ({
        ...s,
        themedPlacements: s.themedPlacements.map((p) =>
          p.id === drag.placementId
            ? { ...p, transform: { ...p.transform, tx: drag.startTx! + dx, ty: drag.startTy! + dy } }
            : p
        ),
      }));
    }
  }

  function onCanvasPointerUp() {
    if (state.boundary.kind === "path" && drawingPath) {
      setDrawingPath(false);
    }
    dragRef.current = null;
  }

  function startRectDrag(kind: "rect-move" | "rect-handle", handle: "nw" | "ne" | "sw" | "se" | undefined, e: React.PointerEvent) {
    if (!svgRef.current) return;
    // Bir şekil yerleştirme modu aktifse (armedShapeId), sınırın gövdesi
    // tıklamayı yutmasın — olay üst canvas handler'ına düşüp şekli yerleştirsin.
    if (armedShapeId) return;
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    const mm = clientToMm(e, svgRef.current, state.paper);
    dragRef.current = { kind, handle, startMm: mm, startBoundary: state.boundary.rect };
  }

  function startEllipseDrag(
    kind: "ellipse-move" | "ellipse-handle",
    handle: "nw" | "ne" | "sw" | "se" | undefined,
    e: React.PointerEvent
  ) {
    if (!svgRef.current) return;
    if (armedShapeId) return;
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    const mm = clientToMm(e, svgRef.current, state.paper);
    dragRef.current = { kind, handle, startMm: mm, startBoundary: state.boundary.ellipse };
  }

  function startThemedDrag(placement: ThemedPlacementState, e: React.PointerEvent) {
    if (!svgRef.current) return;
    if (armedShapeId) return;
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    const mm = clientToMm(e, svgRef.current, state.paper);
    setSelectedId(placement.id);
    dragRef.current = {
      kind: "themed-move",
      startMm: mm,
      placementId: placement.id,
      startTx: placement.transform.tx,
      startTy: placement.transform.ty,
    };
  }

  function updatePlacement(id: string, patch: Partial<ThemedPlacementState["transform"]>) {
    onChange((s) => ({
      ...s,
      themedPlacements: s.themedPlacements.map((p) => (p.id === id ? { ...p, transform: { ...p.transform, ...patch } } : p)),
    }));
  }

  function removePlacement(id: string) {
    onChange((s) => ({ ...s, themedPlacements: s.themedPlacements.filter((p) => p.id !== id) }));
    if (selectedId === id) setSelectedId(null);
  }

  function absolutePlacementPolygons(placements: ThemedPlacementState[]) {
    return placements.map((p) => {
      const def = SHAPE_LIBRARY.find((d) => d.id === p.shapeId)!;
      return transformPolygon(def.build(), p.transform);
    });
  }

  // "Doldur" ne kullanacak: tek bir şekil seçiliyse (armedShapeId) sadece o;
  // bir grup seçiliyse o grubun türleri (karışık); ikisi de yoksa tüm hayvanlar.
  const fillShapeIds = armedShapeId
    ? [armedShapeId]
    : fillGroupId
      ? ANIMAL_GROUPS.find((g) => g.id === fillGroupId)?.shapeIds
      : undefined;
  const fillLabel = armedShapeId
    ? `${SHAPE_LIBRARY.find((s) => s.id === armedShapeId)?.label ?? ""} ile Doldur`
    : fillGroupId
      ? `${ANIMAL_GROUPS.find((g) => g.id === fillGroupId)?.label ?? ""} ile Doldur`
      : "Tüm Hayvanlarla Doldur";

  function runFill() {
    setError(null);
    setPacking(true);
    // Ağır boolean işlemleri bir sonraki tick'e erteleyip butonun "meşgul"
    // görünmesini sağlıyoruz (senkron çalışsa da arayüz donmuş hissettirmesin).
    setTimeout(() => {
      const boundary = boundaryToPolygon(state.boundary);
      if (boundary.length < 3) {
        setError("Önce bir yapboz alanı (sınır) belirlemelisin.");
        setPacking(false);
        return;
      }
      const packed = autoPackShapes({
        boundary,
        existingPolygons: absolutePlacementPolygons(state.themedPlacements),
        shapeIds: fillShapeIds,
        sizeMm: fillSizeMm,
        seed: packSeedCounter.current++,
      });
      const newPlacements: ThemedPlacementState[] = packed.map((p) => ({
        id: `placement-${placementCounter.current++}`,
        shapeId: p.shapeId,
        transform: p.transform,
      }));
      onChange((s) => ({ ...s, themedPlacements: [...s.themedPlacements, ...newPlacements] }));
      setPacking(false);
    }, 10);
  }

  function generate() {
    setError(null);
    const boundary = boundaryToPolygon(state.boundary);
    if (boundary.length < 3) {
      setError("Önce bir yapboz alanı (sınır) belirlemelisin.");
      return;
    }
    const themedPolygons = absolutePlacementPolygons(state.themedPlacements);
    const themedPlacements = state.themedPlacements.map((p, i) => ({ shapeId: p.shapeId, polygon: themedPolygons[i] }));
    try {
      const result = tessellate({
        boundary,
        themedPlacements,
        targetPieceCount: state.targetPieceCount,
        seed: state.seed,
      });
      onChange((s) => ({ ...s, generated: result }));
      onNext();
    } catch {
      setError("Yapboz üretilemedi — sınır şeklini kontrol edip tekrar dener misin?");
    }
  }

  const selected = state.themedPlacements.find((p) => p.id === selectedId) ?? null;

  return (
    <section className="card flex flex-col gap-4 p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">3. Alan &amp; Parça Ayarları</h2>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["rect", "Dikdörtgen"],
            ["ellipse", "Daire / Oval"],
            ["path", "Serbest Path"],
          ] as [BoundaryShapeKind, string][]
        ).map(([kind, label]) => (
          <button
            key={kind}
            onClick={() => setBoundaryKind(kind)}
            className={`rounded-lg border px-3 py-1.5 text-sm ${
              state.boundary.kind === kind ? "border-accent-lilac bg-accent-lilac/30" : "border-card-border hover:bg-card"
            }`}
          >
            {label}
          </button>
        ))}
        {state.boundary.kind === "path" && (
          <>
            <button
              onClick={() => setDrawingPath(true)}
              className="rounded-lg bg-accent-lilac px-3 py-1.5 text-sm font-medium"
            >
              {state.boundary.path.length > 0 ? "Yeniden Çiz" : "Çizmeye Başla"}
            </button>
            {state.boundary.path.length > 0 && (
              <span className="self-center text-xs text-muted">
                {drawingPath ? "Çiziyorsun — bırakınca kapanır" : `${state.boundary.path.length} nokta`}
              </span>
            )}
          </>
        )}
      </div>

      <div
        className="mx-auto overflow-hidden rounded-lg border border-card-border"
        style={{ width: DISPLAY_TARGET_WIDTH, height: displayHeight }}
      >
        <svg
          ref={svgRef}
          data-testid="yapboz-area-canvas"
          viewBox={`0 0 ${state.paper.widthMm} ${state.paper.heightMm}`}
          width={DISPLAY_TARGET_WIDTH}
          height={displayHeight}
          onPointerDown={onCanvasPointerDown}
          onPointerMove={onCanvasPointerMove}
          onPointerUp={onCanvasPointerUp}
          className={armedShapeId ? "cursor-crosshair" : ""}
        >
          <defs>
            <clipPath id="area-designer-clip">
              <path d={boundaryToSvgPath(state.boundary)} />
            </clipPath>
          </defs>

          <rect x={0} y={0} width={state.paper.widthMm} height={state.paper.heightMm} fill="var(--card)" />

          <g clipPath="url(#area-designer-clip)">
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

          {/* Sınır çizgisi + tutamaçlar */}
          {state.boundary.kind === "rect" && (
            <g>
              <rect
                {...state.boundary.rect}
                fill="transparent"
                stroke="var(--accent-lilac)"
                strokeWidth={0.8}
                onPointerDown={(e) => startRectDrag("rect-move", undefined, e)}
                className="cursor-move"
              />
              {handlePositions(state.boundary.rect).map(([hx, hy, h]) => (
                <circle
                  key={h}
                  cx={hx}
                  cy={hy}
                  r={3}
                  fill="var(--accent-lilac)"
                  stroke="white"
                  strokeWidth={0.6}
                  onPointerDown={(e) => startRectDrag("rect-handle", h, e)}
                  className="cursor-nwse-resize"
                />
              ))}
            </g>
          )}
          {state.boundary.kind === "ellipse" && (
            <g>
              <ellipse
                cx={state.boundary.ellipse.cx}
                cy={state.boundary.ellipse.cy}
                rx={state.boundary.ellipse.rx}
                ry={state.boundary.ellipse.ry}
                fill="transparent"
                stroke="var(--accent-lilac)"
                strokeWidth={0.8}
                onPointerDown={(e) => startEllipseDrag("ellipse-move", undefined, e)}
                className="cursor-move"
              />
              {handlePositions(boundaryBoundingBox(state.boundary)).map(([hx, hy, h]) => (
                <circle
                  key={h}
                  cx={hx}
                  cy={hy}
                  r={3}
                  fill="var(--accent-lilac)"
                  stroke="white"
                  strokeWidth={0.6}
                  onPointerDown={(e) => startEllipseDrag("ellipse-handle", h, e)}
                  className="cursor-nwse-resize"
                />
              ))}
            </g>
          )}
          {state.boundary.kind === "path" && state.boundary.path.length > 1 && (
            <path d={boundaryToSvgPath(state.boundary)} fill="transparent" stroke="var(--accent-lilac)" strokeWidth={0.8} />
          )}

          {/* Temalı parçalar */}
          {state.themedPlacements.map((p) => (
            <g
              key={p.id}
              transform={`translate(${p.transform.tx} ${p.transform.ty}) rotate(${p.transform.rotationDeg}) scale(${p.transform.scale})`}
              onPointerDown={(e) => startThemedDrag(p, e)}
              className="cursor-move"
            >
              <path
                d={shapeIcon(p.shapeId)}
                transform="translate(-50,-50)"
                fill="var(--foreground)"
                fillOpacity={selectedId === p.id ? 0.9 : 0.6}
                stroke={selectedId === p.id ? "var(--accent-pink)" : "none"}
                strokeWidth={selectedId === p.id ? 2 : 0}
              />
            </g>
          ))}
        </svg>
      </div>

      <label className="flex items-center gap-3 text-sm">
        Hedef parça sayısı
        <input
          type="range"
          min={12}
          max={500}
          step={1}
          data-testid="yapboz-piece-count"
          value={state.targetPieceCount}
          onChange={(e) => onChange((s) => ({ ...s, targetPieceCount: Number(e.target.value) }))}
          className="w-48"
        />
        <span className="text-xs text-muted">{state.targetPieceCount} parça</span>
      </label>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Geometrik Şekiller — bir şekle tıkla, sonra alan üzerinde yerleştirmek istediğin yere tıkla
          </h3>
          <div className="flex flex-wrap gap-2">
            {GEOMETRIC_SHAPES.map((shape) => (
              <button
                key={shape.id}
                data-testid={`yapboz-shape-${shape.id}`}
                onClick={() => {
                  setFillGroupId(null);
                  setArmedShapeId(shape.id === armedShapeId ? null : shape.id);
                }}
                title={shape.label}
                className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                  armedShapeId === shape.id ? "border-accent-pink bg-accent-pink/20" : "border-card-border hover:bg-card"
                }`}
              >
                <svg viewBox="0 0 100 100" className="h-7 w-7">
                  <path d={shapeIcon(shape.id)} fill="var(--foreground)" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Hayvanlar — bir hayvana veya bir grup başlığına tıkla
          </h3>
          <div className="flex flex-col gap-2">
            {ANIMAL_GROUPS.map((group) => (
              <div key={group.id} className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => {
                    setArmedShapeId(null);
                    setFillGroupId(group.id === fillGroupId ? null : group.id);
                  }}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    fillGroupId === group.id ? "border-accent-lilac bg-accent-lilac/30" : "border-card-border text-muted hover:bg-card"
                  }`}
                >
                  {group.label}
                </button>
                {group.shapeIds.map((shapeId) => (
                  <button
                    key={shapeId}
                    data-testid={`yapboz-shape-${shapeId}`}
                    onClick={() => {
                      setFillGroupId(null);
                      setArmedShapeId(shapeId === armedShapeId ? null : shapeId);
                    }}
                    title={SHAPE_LIBRARY.find((s) => s.id === shapeId)?.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                      armedShapeId === shapeId ? "border-accent-pink bg-accent-pink/20" : "border-card-border hover:bg-card"
                    }`}
                  >
                    <svg viewBox="0 0 100 100" className="h-7 w-7">
                      <path d={shapeIcon(shapeId)} fill="var(--foreground)" />
                    </svg>
                  </button>
                ))}
              </div>
            ))}
          </div>
          {armedShapeId && (
            <p className="mt-1 text-xs text-muted">Yerleştirmek için yukarıdaki alana tıkla.</p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 rounded-lg border border-card-border p-3">
          <label className="flex items-center gap-2 text-xs text-muted">
            Doldurma boyutu
            <input
              type="range"
              min={15}
              max={150}
              step={1}
              data-testid="yapboz-fill-size"
              value={fillSizeMm}
              onChange={(e) => setFillSizeMm(Number(e.target.value))}
              className="w-32"
            />
            <span>~{fillSizeMm}mm</span>
          </label>
          <button
            onClick={runFill}
            disabled={packing}
            data-testid="yapboz-pack-animals"
            className="flex items-center gap-1.5 rounded-lg bg-accent-lilac px-4 py-1.5 text-sm font-medium disabled:opacity-60"
          >
            <PawPrint size={15} /> {packing ? "Yerleştiriliyor…" : fillLabel}
          </button>
          <span className="text-xs text-muted">
            Standart yapboza ek olarak — alanı, birbirine değmeyen, bozulmamış siluetlerle (birden
            fazla geçişte, kalan küçük boşluklara da giderek küçülterek) doldurur; hâlâ sığmayan yerler
            normal yapboz parçalarıyla tamamlanır.
          </span>
        </div>
      </div>

      {selected && (
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-card-border p-3">
          <span className="text-sm font-medium">{SHAPE_LIBRARY.find((s) => s.id === selected.shapeId)?.label}</span>
          <label className="flex items-center gap-2 text-xs text-muted">
            Boyut
            <input
              type="range"
              min={0.15}
              max={2.5}
              step={0.01}
              value={selected.transform.scale}
              onChange={(e) => updatePlacement(selected.id, { scale: Number(e.target.value) })}
              className="w-28"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-muted">
            Döndür
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={selected.transform.rotationDeg}
              onChange={(e) => updatePlacement(selected.id, { rotationDeg: Number(e.target.value) })}
              className="w-28"
            />
          </label>
          <button
            onClick={() => removePlacement(selected.id)}
            className="flex items-center gap-1 rounded-lg border border-card-border px-2 py-1 text-xs text-red-500"
          >
            <Trash2 size={13} /> Kaldır
          </button>
        </div>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div className="flex justify-between">
        <button onClick={onBack} className="rounded-lg border border-card-border px-4 py-2 text-sm">
          ← Geri
        </button>
        <button
          onClick={generate}
          data-testid="yapboz-generate"
          className="rounded-lg bg-accent-yellow px-4 py-2 text-sm font-medium"
        >
          Yapboza Dönüştür →
        </button>
      </div>
    </section>
  );
}

function handlePositions(box: { x: number; y: number; width: number; height: number }): [number, number, "nw" | "ne" | "sw" | "se"][] {
  return [
    [box.x, box.y, "nw"],
    [box.x + box.width, box.y, "ne"],
    [box.x, box.y + box.height, "sw"],
    [box.x + box.width, box.y + box.height, "se"],
  ];
}

function resizeRect(
  start: { x: number; y: number; width: number; height: number },
  handle: "nw" | "ne" | "sw" | "se",
  mm: Point
): { x: number; y: number; width: number; height: number } {
  const right = start.x + start.width;
  const bottom = start.y + start.height;
  let x = start.x;
  let y = start.y;
  let x2 = right;
  let y2 = bottom;
  if (handle === "nw") {
    x = mm[0];
    y = mm[1];
  } else if (handle === "ne") {
    x2 = mm[0];
    y = mm[1];
  } else if (handle === "sw") {
    x = mm[0];
    y2 = mm[1];
  } else {
    x2 = mm[0];
    y2 = mm[1];
  }
  return { x: Math.min(x, x2), y: Math.min(y, y2), width: Math.abs(x2 - x), height: Math.abs(y2 - y) };
}

function resizeEllipse(
  start: { cx: number; cy: number; rx: number; ry: number },
  handle: "nw" | "ne" | "sw" | "se",
  mm: Point
): { cx: number; cy: number; rx: number; ry: number } {
  const box = { x: start.cx - start.rx, y: start.cy - start.ry, width: start.rx * 2, height: start.ry * 2 };
  const resized = resizeRect(box, handle, mm);
  return {
    cx: resized.x + resized.width / 2,
    cy: resized.y + resized.height / 2,
    rx: resized.width / 2,
    ry: resized.height / 2,
  };
}
