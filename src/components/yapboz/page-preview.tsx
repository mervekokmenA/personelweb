"use client";

import { useMemo, useState } from "react";
import { Printer, Download } from "lucide-react";
import type { PuzzleProjectState } from "@/lib/puzzle/types";
import { boundaryToPolygon } from "@/lib/puzzle/boundary";
import { layoutPages, type PuzzlePage } from "@/lib/puzzle/pages";
import { boundingBox } from "@/lib/puzzle/geometry";
import { PAGE_MARGIN_MM } from "@/lib/puzzle/paper-sizes";
import type { Piece } from "@/lib/puzzle/tessellate";

function pathD(pts: [number, number][]): string {
  if (pts.length === 0) return "";
  return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ") + " Z";
}

function ImageLayer({ state }: { state: PuzzleProjectState }) {
  if (!state.image) return null;
  return (
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
  );
}

function TilePageSvg({
  state,
  page,
  pieceById,
  pageNumber,
  totalPages,
}: {
  state: PuzzleProjectState;
  page: Extract<PuzzlePage, { kind: "tile" }>;
  pieceById: Map<number, Piece>;
  pageNumber: number;
  totalPages: number;
}) {
  const { x, y, width, height } = page.tileRect;
  const clipId = `tile-clip-${page.pageIndex}`;
  return (
    <svg viewBox={`${x} ${y} ${width} ${height}`} className="h-auto w-full bg-white">
      <defs>
        <clipPath id={clipId}>
          <path d={pathD(boundaryToPolygon(state.boundary))} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <ImageLayer state={state} />
      </g>
      {page.pieceIds.map((id) => {
        const piece = pieceById.get(id);
        if (!piece) return null;
        return <path key={id} d={pathD(piece.path)} fill="none" stroke="#000" strokeWidth={0.25} />;
      })}
      {/* Hizalama işaretleri (köşeler) */}
      {[
        [x, y],
        [x + width, y],
        [x, y + height],
        [x + width, y + height],
      ].map(([mx, my], i) => (
        <g key={i} stroke="#000" strokeWidth={0.2}>
          <line x1={mx - 3} y1={my} x2={mx + 3} y2={my} />
          <line x1={mx} y1={my - 3} x2={mx} y2={my + 3} />
        </g>
      ))}
      <text x={x + 2} y={y + height - 2} fontSize={3} fill="#000">
        Sayfa {pageNumber}/{totalPages}
      </text>
    </svg>
  );
}

function LeftoverPageSvg({
  state,
  page,
  pieceById,
  paperWidth,
  paperHeight,
  pageNumber,
  totalPages,
}: {
  state: PuzzleProjectState;
  page: Extract<PuzzlePage, { kind: "leftover" }>;
  pieceById: Map<number, Piece>;
  paperWidth: number;
  paperHeight: number;
  pageNumber: number;
  totalPages: number;
}) {
  return (
    <svg viewBox={`0 0 ${paperWidth} ${paperHeight}`} className="h-auto w-full bg-white">
      <g transform={`translate(${PAGE_MARGIN_MM} ${PAGE_MARGIN_MM})`}>
        {page.placements.map(({ pieceId, offsetX, offsetY }) => {
          const piece = pieceById.get(pieceId);
          if (!piece) return null;
          const clipId = `leftover-clip-${pieceId}`;
          return (
            <g key={pieceId} transform={`translate(${offsetX} ${offsetY})`}>
              <defs>
                <clipPath id={clipId}>
                  <path d={pathD(piece.path)} />
                </clipPath>
              </defs>
              <g clipPath={`url(#${clipId})`}>
                <ImageLayer state={state} />
              </g>
              <path d={pathD(piece.path)} fill="none" stroke="#000" strokeWidth={0.25} />
              <text x={boundingBox(piece.path).minX} y={boundingBox(piece.path).minY - 1} fontSize={3} fill="#000">
                #{piece.id + 1}
              </text>
            </g>
          );
        })}
      </g>
      <text x={2} y={paperHeight - 2} fontSize={3} fill="#000">
        Kalan Parçalar — Sayfa {pageNumber}/{totalPages}
      </text>
    </svg>
  );
}

function ResultPageSvg({ state, pieces }: { state: PuzzleProjectState; pieces: Piece[] }) {
  const boundary = boundaryToPolygon(state.boundary);
  const bbox = boundingBox(boundary);
  const printableW = state.paper.widthMm - PAGE_MARGIN_MM * 2;
  const printableH = state.paper.heightMm - PAGE_MARGIN_MM * 2;
  const designW = bbox.maxX - bbox.minX;
  const designH = bbox.maxY - bbox.minY;
  const scale = Math.min(printableW / designW, printableH / designH);

  return (
    <svg viewBox={`0 0 ${state.paper.widthMm} ${state.paper.heightMm}`} className="h-auto w-full bg-white">
      <g transform={`translate(${PAGE_MARGIN_MM} ${PAGE_MARGIN_MM}) scale(${scale}) translate(${-bbox.minX} ${-bbox.minY})`}>
        <defs>
          <clipPath id="result-clip">
            <path d={pathD(boundary)} />
          </clipPath>
        </defs>
        <g clipPath="url(#result-clip)">
          <ImageLayer state={state} />
        </g>
        {pieces.map((p) => (
          <g key={p.id}>
            <path d={pathD(p.path)} fill="none" stroke="#000" strokeWidth={0.3 / scale} />
            <text x={p.centroid[0]} y={p.centroid[1]} fontSize={3.2 / scale} textAnchor="middle" fill="#000">
              {p.id + 1}
            </text>
          </g>
        ))}
      </g>
      <text x={2} y={state.paper.heightMm - 2} fontSize={3} fill="#000">
        Sonuç / Montaj Sayfası — toplam {pieces.length} parça
      </text>
    </svg>
  );
}

function downloadSvg(svgEl: SVGSVGElement, filename: string) {
  const clone = svgEl.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const blob = new Blob([clone.outerHTML], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function PagePreview({ state, onBack }: { state: PuzzleProjectState; onBack: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const layout = useMemo(() => {
    if (!state.generated) return null;
    return layoutPages(state.generated.pieces, boundaryToPolygon(state.boundary), state.paper);
  }, [state.generated, state.boundary, state.paper]);

  const pieceById = useMemo(() => {
    const map = new Map<number, Piece>();
    state.generated?.pieces.forEach((p) => map.set(p.id, p));
    return map;
  }, [state.generated]);

  if (!state.generated || !layout) {
    return (
      <section className="card flex flex-col gap-4 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">4. Sayfalar</h2>
        <p className="text-sm text-muted">Henüz üretilmiş bir yapboz yok — önceki adımda &quot;Yapboza Dönüştür&quot;e bas.</p>
        <button onClick={onBack} className="w-fit rounded-lg border border-card-border px-4 py-2 text-sm">
          ← Geri
        </button>
      </section>
    );
  }

  const activePage = activeIndex < layout.pages.length ? layout.pages[activeIndex] : null;
  const isResultPage = activeIndex === layout.pages.length;

  return (
    <section className="card flex flex-col gap-4 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">4. Sayfalar</h2>
        <span className="text-xs text-muted">
          {state.generated.pieces.length} parça · {layout.pages.filter((p) => p.kind === "tile").length} sayfa +{" "}
          {layout.pages.filter((p) => p.kind === "leftover").length} kalan-parça sayfası + 1 sonuç sayfası
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {layout.pages.map((p, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-lg border px-3 py-1.5 text-xs ${
              activeIndex === i ? "border-accent-yellow bg-accent-yellow/30" : "border-card-border hover:bg-card"
            }`}
          >
            {p.kind === "tile" ? `Sayfa ${p.pageIndex + 1}` : `Kalan ${p.pageIndex + 1}`}
          </button>
        ))}
        <button
          onClick={() => setActiveIndex(layout.pages.length)}
          className={`rounded-lg border px-3 py-1.5 text-xs ${
            isResultPage ? "border-accent-yellow bg-accent-yellow/30" : "border-card-border hover:bg-card"
          }`}
        >
          Sonuç Sayfası
        </button>
      </div>

      <div className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-card-border" id="yapboz-print-area">
        {isResultPage && <ResultPageSvg state={state} pieces={state.generated.pieces} />}
        {activePage?.kind === "tile" && (
          <TilePageSvg
            state={state}
            page={activePage}
            pieceById={pieceById}
            pageNumber={activePage.pageIndex + 1}
            totalPages={layout.pages.length}
          />
        )}
        {activePage?.kind === "leftover" && (
          <LeftoverPageSvg
            state={state}
            page={activePage}
            pieceById={pieceById}
            paperWidth={state.paper.widthMm}
            paperHeight={state.paper.heightMm}
            pageNumber={activePage.pageIndex + 1}
            totalPages={layout.pages.length}
          />
        )}
      </div>

      <div className="mx-auto flex flex-wrap gap-2">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 rounded-lg bg-accent-blue px-4 py-1.5 text-sm font-medium"
        >
          <Printer size={15} /> Yazdır (bu sayfa)
        </button>
        <button
          onClick={() => {
            const svg = document.querySelector("#yapboz-print-area svg") as SVGSVGElement | null;
            if (svg) downloadSvg(svg, `yapboz-sayfa-${activeIndex + 1}.svg`);
          }}
          className="flex items-center gap-1.5 rounded-lg border border-card-border px-4 py-1.5 text-sm"
        >
          <Download size={15} /> Kesim dosyası indir (SVG)
        </button>
      </div>

      <p className="text-center text-xs text-muted">
        Ev yazıcısı için: &quot;Yazdır&quot; ile tarayıcının yazdırma penceresini aç, ölçeği &quot;%100 / Gerçek
        boyut&quot; olarak ayarla. Kesim makinesi için: SVG dosyasını indirip kesim yazılımına aktar.
      </p>

      <button onClick={onBack} className="w-fit rounded-lg border border-card-border px-4 py-2 text-sm">
        ← Geri (Alan &amp; Parçalar)
      </button>
    </section>
  );
}
