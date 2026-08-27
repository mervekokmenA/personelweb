import { Delaunay } from "d3-delaunay";
// polygon-clipping'in .d.ts'i named export'lar bildiriyor ama gerçek ESM
// derlemesi sadece bir default export veriyor — değer için default import,
// tipler için ayrı bir type-only import kullanılıyor (derleme zamanı, gerçek
// modülün named export'a sahip olmaması sorun değil).
import pc from "polygon-clipping";
import type { MultiPolygon } from "polygon-clipping";
import {
  type Polygon,
  type Point,
  toClipperPolygon,
  firstClipperPolygon,
  polygonArea,
  polygonCentroid,
  boundingBox,
  pointInPolygon,
  mulberry32,
} from "./geometry";

export interface Piece {
  id: number;
  /** Kapalı halka, ilk nokta tekrar edilmez. */
  path: Polygon;
  centroid: Point;
  isThemed: boolean;
  themeId?: string;
}

export interface ThemedPlacement {
  shapeId: string;
  /** Mutlak koordinatlara dönüştürülmüş poligon (bkz. geometry.transformPolygon). */
  polygon: Polygon;
}

export interface TessellateInput {
  boundary: Polygon;
  themedPlacements: ThemedPlacement[];
  targetPieceCount: number;
  seed: number;
}

export interface TessellateResult {
  pieces: Piece[];
  /** Doğrulama için: tüm parçaların toplam alanı ile sınır alanı ne kadar örtüşüyor (1'e ne kadar yakınsa o kadar iyi). */
  coverageRatio: number;
}

function totalArea(mp: MultiPolygon): number {
  return mp.reduce((sum, poly) => sum + polygonArea(poly[0] as Point[]), 0);
}

function pointInRegion(p: Point, mp: MultiPolygon): boolean {
  for (const poly of mp) {
    const [outer, ...holes] = poly as Point[][];
    if (!pointInPolygon(p, outer)) continue;
    if (holes.some((h) => pointInPolygon(p, h))) continue;
    return true;
  }
  return false;
}

/** Bir kenar boyunca (t=0..1) çıkıntı çarpanı — düz uçlar, iki hafif "boyun" çentiği, ortada yuvarlak kafa. */
function tabProfile(t: number, headCenter: number): number {
  const start = headCenter - 0.28;
  const end = headCenter + 0.28;
  if (t < start || t > end) return 0;
  const head = Math.pow(Math.sin((Math.PI * (t - start)) / (end - start)), 1.4);
  const pinchL = Math.exp(-Math.pow((t - (headCenter - 0.2)) / 0.045, 2)) * 0.28;
  const pinchR = Math.exp(-Math.pow((t - (headCenter + 0.2)) / 0.045, 2)) * 0.28;
  return head - pinchL - pinchR;
}

/** A'dan B'ye dişli/yuvalı kenar noktaları üretir (A dahil, B dahil). */
function tabbedEdgePoints(a: Point, b: Point, rand: () => number, segments = 16): Point[] {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return [a, b];
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const side = rand() < 0.5 ? 1 : -1;
  const amplitude = len * (0.16 + rand() * 0.07);
  const headCenter = 0.5 + (rand() - 0.5) * 0.06;

  const pts: Point[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const off = tabProfile(t, headCenter) * amplitude * side;
    pts.push([a[0] + ux * len * t + nx * off, a[1] + uy * len * t + ny * off]);
  }
  return pts;
}

function edgeKey(p: Point): string {
  return `${p[0].toFixed(3)},${p[1].toFixed(3)}`;
}

/**
 * Voronoi tabanlı düzensiz yapboz üretir:
 * 1) Zemin bölgesi = sınır - (temalı şekillerin birleşimi) — boolean çıkarma
 *    ile delik/temalı-parça arasında sıfır boşluk garanti edilir.
 * 2) Zemin bölgesine Poisson-disk tohumlar + Delaunay/Voronoi ile 100% kapsamalı,
 *    boşluksuz düzensiz hücreler üretilir (Voronoi bölünme özelliği gereği garantili).
 * 3) Komşu hücreler arasındaki her paylaşılan kenar, rastgele ama iki tarafta da
 *    AYNI eğri kullanılarak (tek sefer üretilip her iki hücrede de kullanılarak)
 *    klasik yapboz "dişli/yuva" çıkıntısına dönüştürülür.
 * 4) Her hücre son olarak zemin bölgesine kırpılır (dış sınır/delik kenarlarını
 *    doğru şekilde keser, iç dişli kenarlarına dokunmaz).
 */
export function tessellate({ boundary, themedPlacements, targetPieceCount, seed }: TessellateInput): TessellateResult {
  const rand = mulberry32(seed);

  const boundaryClipper = toClipperPolygon(boundary);

  // Temalı şekiller sınırın dışına taşabilir (kullanıcı kenara yakın
  // yerleştirmiş olabilir) — bu yüzden önce her birini sınıra kırpıyoruz.
  // Sınırla hiç kesişmeyenler tamamen elenir (aksi halde "boşlukta asılı"
  // bir parça olarak görünürlerdi).
  const clippedThemed: { shapeId: string; polygon: Polygon }[] = [];
  for (const t of themedPlacements) {
    const clipped = pc.intersection(toClipperPolygon(t.polygon), boundaryClipper);
    const best = firstClipperPolygon(clipped);
    if (!best) continue;
    const area = polygonArea(best[0] as Point[]);
    if (area < 1e-6) continue;
    clippedThemed.push({ shapeId: t.shapeId, polygon: best[0] as Point[] });
  }

  const backgroundMP: MultiPolygon =
    clippedThemed.length > 0
      ? pc.difference(boundaryClipper, ...clippedThemed.map((t) => toClipperPolygon(t.polygon)))
      : pc.union(boundaryClipper);

  const themedPieces: Piece[] = clippedThemed.map((t, i) => ({
    id: i,
    path: t.polygon,
    centroid: polygonCentroid(t.polygon),
    isThemed: true,
    themeId: t.shapeId,
  }));

  const remainingCount = Math.max(1, targetPieceCount - clippedThemed.length);
  const bbox = boundingBox(boundary);

  // Poisson-disk örneklemeyi bbox üzerinde çalıştırıp zemin bölgesine ait
  // olmayan noktaları eliyoruz (poissonDiskInPolygon delikli bölge kabul
  // etmiyor, bu yüzden onun yerine burada özel bir döngü kullanıyoruz).
  const seeds = poissonSeedsInRegion(bbox, backgroundMP, remainingCount, rand);

  const backgroundPieces: Piece[] =
    seeds.length > 0 ? voronoiTessellate(seeds, backgroundMP, bbox, rand, clippedThemed.length) : [];

  const pieces = [...themedPieces, ...backgroundPieces];
  const totalPieceArea = pieces.reduce((sum, p) => sum + polygonArea(p.path), 0);
  const boundaryArea = polygonArea(boundary);

  return { pieces, coverageRatio: boundaryArea > 0 ? totalPieceArea / boundaryArea : 0 };
}

function poissonSeedsInRegion(
  bbox: { minX: number; minY: number; maxX: number; maxY: number },
  region: MultiPolygon,
  targetCount: number,
  rand: () => number
): Point[] {
  const regionArea = totalArea(region);
  if (regionArea <= 0 || targetCount <= 0) return [];
  const minDist = Math.sqrt(regionArea / targetCount) * 0.85;

  const points: Point[] = [];
  const maxAttempts = Math.max(3000, targetCount * 80);
  for (let i = 0; i < maxAttempts && points.length < targetCount * 1.3; i++) {
    const candidate: Point = [
      bbox.minX + rand() * (bbox.maxX - bbox.minX),
      bbox.minY + rand() * (bbox.maxY - bbox.minY),
    ];
    if (!pointInRegion(candidate, region)) continue;
    let ok = true;
    for (const p of points) {
      const dx = p[0] - candidate[0];
      const dy = p[1] - candidate[1];
      if (dx * dx + dy * dy < minDist * minDist) {
        ok = false;
        break;
      }
    }
    if (ok) points.push(candidate);
  }
  return points;
}

function voronoiTessellate(
  seeds: Point[],
  region: MultiPolygon,
  bbox: { minX: number; minY: number; maxX: number; maxY: number },
  rand: () => number,
  idOffset: number
): Piece[] {
  // Bbox kırpma penceresi, gerçek sınırdan çok daha geniş olmalı — aksi halde
  // kenar/köşedeki tohumların Voronoi hücreleri erken kesilip bölgeyle kesişim
  // öncesi zaten eksik kalabilir (gerçek bir boşluğa yol açar). Sınırın tam
  // boyutu kadar bolca pay bırakıyoruz; hesaplama maliyeti önemsiz ölçüde artar.
  const pad = Math.max(bbox.maxX - bbox.minX, bbox.maxY - bbox.minY) * 1.0 + 10;
  const delaunay = Delaunay.from(seeds);
  const voronoi = delaunay.voronoi([bbox.minX - pad, bbox.minY - pad, bbox.maxX + pad, bbox.maxY + pad]);

  const rawCells: Polygon[] = seeds.map((_, i) => {
    const poly = voronoi.cellPolygon(i);
    if (!poly) return [];
    // d3-delaunay ilk noktayı sonda tekrarlıyor — kaldır.
    const pts = poly.map(([x, y]) => [x, y] as Point);
    if (pts.length > 1) {
      const [fx, fy] = pts[0];
      const [lx, ly] = pts[pts.length - 1];
      if (Math.abs(fx - lx) < 1e-9 && Math.abs(fy - ly) < 1e-9) pts.pop();
    }
    return pts;
  });

  // Paylaşılan kenarları tespit et: her hücrenin her kenarını (yön bağımsız
  // anahtarla) bir haritada topla; ikinci kez görüldüğünde o kenar iki hücre
  // arasında paylaşılıyor demektir.
  const edgeTabCache = new Map<string, Point[]>(); // kanonik anahtar -> A(küçük)->B(büyük) yönünde dişli noktalar

  function canonicalKey(a: Point, b: Point): { key: string; forward: boolean } {
    const ka = edgeKey(a);
    const kb = edgeKey(b);
    return ka <= kb ? { key: `${ka}|${kb}`, forward: true } : { key: `${kb}|${ka}`, forward: false };
  }

  const tabbedCells: Polygon[] = rawCells.map((cell) => {
    if (cell.length < 3) return cell;
    const out: Point[] = [];
    for (let i = 0; i < cell.length; i++) {
      const a = cell[i];
      const b = cell[(i + 1) % cell.length];
      const { key, forward } = canonicalKey(a, b);
      let tabbed = edgeTabCache.get(key);
      if (!tabbed) {
        // Kanonik yön: küçük anahtardan büyüğe.
        const [lo, hi] = forward ? [a, b] : [b, a];
        tabbed = tabbedEdgePoints(lo, hi, rand);
        edgeTabCache.set(key, tabbed);
      }
      const seq = forward ? tabbed : [...tabbed].reverse();
      // İlk noktayı tekrar eklememek için son eklenenle karşılaştır.
      for (const p of seq) {
        if (out.length === 0 || edgeKey(out[out.length - 1]) !== edgeKey(p)) out.push(p);
      }
    }
    // Kapanışta son nokta ilk noktayla aynıysa kaldır.
    if (out.length > 1 && edgeKey(out[0]) === edgeKey(out[out.length - 1])) out.pop();
    return out;
  });

  const pieces: Piece[] = [];
  for (const cell of tabbedCells) {
    if (cell.length < 3) continue;
    const clipped = pc.intersection(toClipperPolygon(cell), region);
    for (const poly of clipped) {
      const outer = poly[0] as Point[];
      if (outer.length < 3) continue;
      const area = polygonArea(outer);
      if (area < 1e-6) continue;
      pieces.push({
        id: idOffset + pieces.length,
        path: outer,
        centroid: polygonCentroid(outer),
        isThemed: false,
      });
    }
  }

  return pieces;
}
