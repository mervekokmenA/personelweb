import type { Piece } from "./tessellate";
import { boundingBox, type Point } from "./geometry";
import { PAGE_MARGIN_MM, type PaperSize } from "./paper-sizes";

export interface TilePage {
  kind: "tile";
  pageIndex: number;
  /** Bu karonun tasarım koordinat sistemindeki dikdörtgeni (mm). */
  tileRect: { x: number; y: number; width: number; height: number };
  pieceIds: number[];
  col: number;
  row: number;
}

export interface LeftoverPage {
  kind: "leftover";
  pageIndex: number;
  /** Her parça için sayfa üzerindeki (yeni) konuma taşımak üzere ofset. */
  placements: { pieceId: number; offsetX: number; offsetY: number }[];
}

export type PuzzlePage = TilePage | LeftoverPage;

export interface PageLayoutResult {
  pages: PuzzlePage[];
  cols: number;
  rows: number;
  printableWidth: number;
  printableHeight: number;
}

const EPS = 0.01; // mm — kayan nokta toleransı

export function layoutPages(pieces: Piece[], boundary: Point[], paper: PaperSize): PageLayoutResult {
  const bbox = boundingBox(boundary);
  const printableWidth = paper.widthMm - PAGE_MARGIN_MM * 2;
  const printableHeight = paper.heightMm - PAGE_MARGIN_MM * 2;
  const designWidth = bbox.maxX - bbox.minX;
  const designHeight = bbox.maxY - bbox.minY;

  const cols = Math.max(1, Math.ceil(designWidth / printableWidth));
  const rows = Math.max(1, Math.ceil(designHeight / printableHeight));

  const tiles: TilePage[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      tiles.push({
        kind: "tile",
        pageIndex: 0, // aşağıda yeniden numaralandırılıyor
        col,
        row,
        pieceIds: [],
        tileRect: {
          x: bbox.minX + col * printableWidth,
          y: bbox.minY + row * printableHeight,
          width: printableWidth,
          height: printableHeight,
        },
      });
    }
  }

  const leftoverPieces: Piece[] = [];

  for (const piece of pieces) {
    const pb = boundingBox(piece.path);
    const tile = tiles.find(
      (t) =>
        pb.minX >= t.tileRect.x - EPS &&
        pb.maxX <= t.tileRect.x + t.tileRect.width + EPS &&
        pb.minY >= t.tileRect.y - EPS &&
        pb.maxY <= t.tileRect.y + t.tileRect.height + EPS
    );
    if (tile) {
      tile.pieceIds.push(piece.id);
    } else {
      leftoverPieces.push(piece);
    }
  }

  const leftoverPages = packLeftoverPieces(leftoverPieces, printableWidth, printableHeight);

  const allPages: PuzzlePage[] = [...tiles, ...leftoverPages];
  allPages.forEach((p, i) => (p.pageIndex = i));

  return { pages: allPages, cols, rows, printableWidth, printableHeight };
}

/** Basit "raf" (shelf) paketleme: parçaları yüksekliğe göre azalan sırala, satırlara diz. */
function packLeftoverPieces(pieces: Piece[], printableWidth: number, printableHeight: number): LeftoverPage[] {
  if (pieces.length === 0) return [];
  const gap = 4; // mm

  const sorted = [...pieces].sort((a, b) => {
    const ba = boundingBox(a.path);
    const bb = boundingBox(b.path);
    return bb.maxY - bb.minY - (ba.maxY - ba.minY);
  });

  const pages: LeftoverPage[] = [];
  let current: LeftoverPage = { kind: "leftover", pageIndex: 0, placements: [] };
  let cursorX = 0;
  let cursorY = 0;
  let rowHeight = 0;

  for (const piece of sorted) {
    const pb = boundingBox(piece.path);
    const w = pb.maxX - pb.minX;
    const h = pb.maxY - pb.minY;

    if (w > printableWidth || h > printableHeight) {
      // Tek başına sayfaya sığmayan (kağıttan büyük) parça — yine de en iyi
      // çabayla kendi sayfasına konur, kullanıcı bunu ayrı değerlendirir.
      if (current.placements.length > 0) {
        pages.push(current);
        current = { kind: "leftover", pageIndex: 0, placements: [] };
        cursorX = 0;
        cursorY = 0;
        rowHeight = 0;
      }
      current.placements.push({ pieceId: piece.id, offsetX: -pb.minX, offsetY: -pb.minY });
      pages.push(current);
      current = { kind: "leftover", pageIndex: 0, placements: [] };
      cursorX = 0;
      cursorY = 0;
      rowHeight = 0;
      continue;
    }

    if (cursorX + w > printableWidth) {
      cursorX = 0;
      cursorY += rowHeight + gap;
      rowHeight = 0;
    }
    if (cursorY + h > printableHeight) {
      pages.push(current);
      current = { kind: "leftover", pageIndex: 0, placements: [] };
      cursorX = 0;
      cursorY = 0;
      rowHeight = 0;
    }

    current.placements.push({ pieceId: piece.id, offsetX: cursorX - pb.minX, offsetY: cursorY - pb.minY });
    cursorX += w + gap;
    rowHeight = Math.max(rowHeight, h);
  }

  if (current.placements.length > 0) pages.push(current);
  return pages;
}
