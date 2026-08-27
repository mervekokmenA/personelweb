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
  /** Hangi şekillerden seçilecek — verilmezse tüm "animal" kategorisi kullanılır. */
  shapeIds?: string[];
  /** Hedef boyut (mm) — her denemede ~±%20 varyasyonla kullanılır. */
  sizeMm: number;
  seed: number;
}

export interface AutoPackResult {
  shapeId: string;
  transform: Transform2D;
  polygon: Polygon;
}

function attemptPass(
  pool: { id: string; build: () => Polygon }[],
  boundary: Polygon,
  boundaryClipper: ReturnType<typeof toClipperPolygon>,
  bbox: { minX: number; minY: number; maxX: number; maxY: number },
  placed: Polygon[],
  results: AutoPackResult[],
  rand: () => number,
  minSizeMm: number,
  maxSizeMm: number
) {
  const attempts = 700;
  const failLimit = 160;
  let consecutiveFails = 0;

  for (let i = 0; i < attempts && consecutiveFails < failLimit; i++) {
    const def = pool[Math.floor(rand() * pool.length)];
    const base = def.build(); // ~100 birim genişliğinde kutuya normalize
    const sizeMm = minSizeMm + rand() * (maxSizeMm - minSizeMm);
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

    // Sınırla yeterli örtüşme var mı (en az %55'i sınırın içinde kalsın)?
    const clipped = pc.intersection(toClipperPolygon(candidate), boundaryClipper);
    const insideArea = clipped.reduce((sum, poly) => sum + polygonArea(poly[0] as Point[]), 0);
    if (insideArea / candidateArea < 0.55) {
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
}

/**
 * Sınır alanına, birbirleriyle ÇAKIŞMAYAN (tam/bozulmamış siluet olarak
 * kalan) rastgele şekiller (varsayılan: hayvan siluetleri, veya `shapeIds`
 * ile sadece belirli bir şekil/grup) serpiştirir — "reddet-örnekle"
 * (rejection sampling) yaklaşımı.
 *
 * Boşlukları elden geldiğince doldurmak için ÇOK GEÇİŞLİ çalışır: istenen
 * boyutta doyuma ulaşınca (art arda çok sayıda reddedilince), boyutu
 * küçültüp kalan küçük boşluklara da yerleştirmeyi dener — bu, tek geçişli
 * bir denemeden çok daha yüksek kapsama sağlar. Yine de kalan çok küçük/
 * düzensiz boşluklar mevcut tessellate() akışında standart dişli/yuvalı
 * parçalarla dolduruluyor (bkz. tessellate.ts) — hiçbir zaman boşluk kalmaz.
 */
export function autoPackShapes(opts: AutoPackOptions): AutoPackResult[] {
  const pool =
    opts.shapeIds && opts.shapeIds.length > 0
      ? SHAPE_LIBRARY.filter((s) => opts.shapeIds!.includes(s.id))
      : SHAPE_LIBRARY.filter((s) => s.category === "animal");
  if (pool.length === 0) return [];

  const rand = mulberry32(opts.seed);
  const bbox = boundingBox(opts.boundary);
  const boundaryClipper = toClipperPolygon(opts.boundary);

  const placed: Polygon[] = [...opts.existingPolygons];
  const results: AutoPackResult[] = [];

  let currentMin = opts.sizeMm * 0.8;
  let currentMax = opts.sizeMm * 1.2;
  const floorSize = Math.max(7, opts.sizeMm * 0.2);
  let passCount = 0;

  while (currentMin >= floorSize && passCount < 6) {
    attemptPass(pool, opts.boundary, boundaryClipper, bbox, placed, results, rand, currentMin, currentMax);
    currentMin *= 0.6;
    currentMax *= 0.6;
    passCount++;
  }

  return results;
}
