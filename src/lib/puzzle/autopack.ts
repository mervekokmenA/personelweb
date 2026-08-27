import pc from "polygon-clipping";
import {
  toClipperPolygon,
  polygonArea,
  boundingBox,
  transformPolygon,
  mulberry32,
  type Point,
  type Polygon,
} from "./geometry";
import { SHAPE_LIBRARY } from "./shapes";
import type { Transform2D } from "./types";

function bboxesOverlap(
  a: { minX: number; minY: number; maxX: number; maxY: number },
  b: { minX: number; minY: number; maxX: number; maxY: number }
): boolean {
  return !(a.maxX < b.minX || b.maxX < a.minX || a.maxY < b.minY || b.maxY < a.minY);
}

function polygonsOverlap(a: Polygon, b: Polygon): boolean {
  if (!bboxesOverlap(boundingBox(a), boundingBox(b))) return false;
  const result = pc.intersection(toClipperPolygon(a), toClipperPolygon(b));
  const area = result.reduce((sum, poly) => sum + polygonArea(poly[0] as Point[]), 0);
  return area > 1; // mm² eşiği — kayan nokta gürültüsü/değme noktalarını yok sayar
}

export interface AutoPackOptions {
  boundary: Polygon;
  /** Halihazırda yerleşmiş şekiller (mutlak koordinat) — bunlarla çakışılmaz. */
  existingPolygons: Polygon[];
  minSizeMm: number;
  maxSizeMm: number;
  seed: number;
  maxAttempts?: number;
}

export interface AutoPackResult {
  shapeId: string;
  transform: Transform2D;
  polygon: Polygon;
}

/**
 * Sınır alanına, birbirleriyle ÇAKIŞMAYAN (tam/bozulmamış siluet olarak
 * kalan) rastgele hayvan siluetleri serpiştirir — "reddet-örnekle" (rejection
 * sampling) yaklaşımı: rastgele tür/boyut/döndürme/konum dener, sınırla
 * yeterince örtüşmüyorsa veya mevcut bir yerleşimle çakışıyorsa reddeder.
 * Aralarında kalan boşluklar, mevcut tessellate() akışında zaten standart
 * dişli/yuvalı parçalarla dolduruluyor (bkz. tessellate.ts) — bu fonksiyon
 * sadece hayvanların KENDİSİNİ, bozulmadan yerleştirmekten sorumlu.
 */
export function autoPackAnimals(opts: AutoPackOptions): AutoPackResult[] {
  const animalDefs = SHAPE_LIBRARY.filter((s) => s.category === "animal");
  if (animalDefs.length === 0) return [];

  const rand = mulberry32(opts.seed);
  const bbox = boundingBox(opts.boundary);
  const boundaryClipper = toClipperPolygon(opts.boundary);

  const placed: Polygon[] = [...opts.existingPolygons];
  const results: AutoPackResult[] = [];

  const maxAttempts = opts.maxAttempts ?? 500;
  const failLimit = 80;
  let consecutiveFails = 0;

  for (let i = 0; i < maxAttempts && consecutiveFails < failLimit; i++) {
    const def = animalDefs[Math.floor(rand() * animalDefs.length)];
    const base = def.build(); // ~100 birim genişliğinde kutuya normalize
    const sizeMm = opts.minSizeMm + rand() * (opts.maxSizeMm - opts.minSizeMm);
    const scale = sizeMm / 100;
    const rotationDeg = rand() * 360;
    const tx = bbox.minX + rand() * (bbox.maxX - bbox.minX);
    const ty = bbox.minY + rand() * (bbox.maxY - bbox.minY);
    const transform: Transform2D = { tx, ty, scale, rotationDeg };
    const candidate = transformPolygon(base, transform);
    const candidateArea = polygonArea(candidate);
    if (candidateArea <= 0) {
      consecutiveFails++;
      continue;
    }

    // Sınırla yeterli örtüşme var mı (en az %60'ı sınırın içinde kalsın)?
    const clipped = pc.intersection(toClipperPolygon(candidate), boundaryClipper);
    const insideArea = clipped.reduce((sum, poly) => sum + polygonArea(poly[0] as Point[]), 0);
    if (insideArea / candidateArea < 0.6) {
      consecutiveFails++;
      continue;
    }

    if (placed.some((p) => polygonsOverlap(candidate, p))) {
      consecutiveFails++;
      continue;
    }

    placed.push(candidate);
    results.push({ shapeId: def.id, transform, polygon: candidate });
    consecutiveFails = 0;
  }

  return results;
}
