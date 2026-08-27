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

export interface AutoPackResult {
  shapeId: string;
  transform: Transform2D;
  polygon: Polygon;
}

/** Bir geçişte (tek boyut aralığında) reddet-örnekle ile yerleştirmeyi dener; bu geçişte yerleşen toplam alanı döndürür. */
function attemptPass(
  pool: { id: string; build: () => Polygon }[],
  boundaryClipper: ReturnType<typeof toClipperPolygon>,
  bbox: { minX: number; minY: number; maxX: number; maxY: number },
  placed: Polygon[],
  results: AutoPackResult[],
  rand: () => number,
  minSizeMm: number,
  maxSizeMm: number,
  areaBudget: number
): number {
  const attempts = 700;
  const failLimit = 160;
  let consecutiveFails = 0;
  let placedArea = 0;

  for (let i = 0; i < attempts && consecutiveFails < failLimit && placedArea < areaBudget; i++) {
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

    // Sınırın TAMAMEN içinde olmalı — dış kenarlarda yarıda kesilen figür
    // istenmiyor, bu yüzden neredeyse tam kapsama zorunlu (küçük kayan
    // nokta payı dışında).
    const clipped = pc.intersection(toClipperPolygon(candidate), boundaryClipper);
    const insideArea = clipped.reduce((sum, poly) => sum + polygonArea(poly[0] as Point[]), 0);
    const outsideArea = candidateArea - insideArea;
    if (outsideArea > 0.4) {
      consecutiveFails++;
      continue;
    }

    if (placed.some((p) => polygonsOverlap(candidate, p))) {
      consecutiveFails++;
      continue;
    }

    placed.push(candidate);
    results.push({ shapeId: def.id, transform, polygon: candidate });
    placedArea += candidateArea;
    consecutiveFails = 0;
  }

  return placedArea;
}

export interface FillRecipeEntry {
  /** Bu girişte kullanılacak şekil id'leri (tek tür veya bir grubun tüm türleri). */
  shapeIds: string[];
  /** Bu girişin kaplamasını hedeflediğin toplam sınır alanı oranı (0-1). */
  targetFraction: number;
}

export interface AutoPackOptions {
  boundary: Polygon;
  /** Halihazırda yerleşmiş şekiller (mutlak koordinat) — bunlarla çakışılmaz. */
  existingPolygons: Polygon[];
  recipe: FillRecipeEntry[];
  /** Hedef boyut (mm) — her denemede ~±%20 varyasyonla kullanılır. */
  sizeMm: number;
  seed: number;
}

/**
 * Sınır alanına, birbirleriyle ÇAKIŞMAYAN ve sınırın TAMAMEN içinde kalan
 * (dış kenarlarda yarıda kesilmeyen) rastgele şekiller serpiştirir —
 * "reddet-örnekle" (rejection sampling) yaklaşımı. `recipe` listesindeki her
 * giriş kendi tür/grup havuzunu ve hedef alan oranını belirtir; girişler
 * sırayla işlenir, her biri o alan oranına ulaşana kadar (ya da yer kalmayana
 * kadar) yerleştirmeye çalışır — sonraki girişler önceki girişlerin
 * kapladığı alanı da "dolu" sayar.
 *
 * Boşlukları elden geldiğince doldurmak için her giriş ÇOK GEÇİŞLİ çalışır:
 * istenen boyutta doyuma ulaşınca (art arda çok reddedilince), boyutu
 * küçültüp kalan küçük boşluklara da yerleştirmeyi dener. Yine de kalan çok
 * küçük/düzensiz boşluklar mevcut tessellate() akışında standart dişli/
 * yuvalı parçalarla dolduruluyor (bkz. tessellate.ts) — hiçbir zaman boşluk
 * kalmaz.
 */
export function autoPackShapes(opts: AutoPackOptions): AutoPackResult[] {
  const rand = mulberry32(opts.seed);
  const bbox = boundingBox(opts.boundary);
  const boundaryClipper = toClipperPolygon(opts.boundary);
  const boundaryArea = polygonArea(opts.boundary);

  const placed: Polygon[] = [...opts.existingPolygons];
  const results: AutoPackResult[] = [];

  for (const entry of opts.recipe) {
    const pool = SHAPE_LIBRARY.filter((s) => entry.shapeIds.includes(s.id));
    if (pool.length === 0) continue;

    const targetArea = boundaryArea * Math.max(0, Math.min(1, entry.targetFraction));
    let placedAreaForEntry = 0;

    let currentMin = opts.sizeMm * 0.8;
    let currentMax = opts.sizeMm * 1.2;
    const floorSize = Math.max(7, opts.sizeMm * 0.2);
    let passCount = 0;

    while (currentMin >= floorSize && passCount < 6 && placedAreaForEntry < targetArea) {
      placedAreaForEntry += attemptPass(
        pool,
        boundaryClipper,
        bbox,
        placed,
        results,
        rand,
        currentMin,
        currentMax,
        targetArea - placedAreaForEntry
      );
      currentMin *= 0.6;
      currentMax *= 0.6;
      passCount++;
    }
  }

  return results;
}
