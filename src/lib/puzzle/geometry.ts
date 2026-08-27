export type Point = [number, number];
/** Basit poligon: kapalı olmayan, sıralı nokta listesi (ilk nokta tekrar edilmez). */
export type Polygon = Point[];

export function polygonArea(poly: Polygon): number {
  let area = 0;
  for (let i = 0; i < poly.length; i++) {
    const [x1, y1] = poly[i];
    const [x2, y2] = poly[(i + 1) % poly.length];
    area += x1 * y2 - x2 * y1;
  }
  return Math.abs(area) / 2;
}

export function polygonCentroid(poly: Polygon): Point {
  let cx = 0;
  let cy = 0;
  let signedArea = 0;
  for (let i = 0; i < poly.length; i++) {
    const [x1, y1] = poly[i];
    const [x2, y2] = poly[(i + 1) % poly.length];
    const cross = x1 * y2 - x2 * y1;
    signedArea += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }
  signedArea *= 0.5;
  if (Math.abs(signedArea) < 1e-9) {
    // Dejenere (sıfır alanlı) poligon — ortalama noktayı döndür.
    const n = poly.length || 1;
    return [poly.reduce((s, p) => s + p[0], 0) / n, poly.reduce((s, p) => s + p[1], 0) / n];
  }
  return [cx / (6 * signedArea), cy / (6 * signedArea)];
}

export function boundingBox(poly: Polygon): { minX: number; minY: number; maxX: number; maxY: number } {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const [x, y] of poly) {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  return { minX, minY, maxX, maxY };
}

export function pointInPolygon([px, py]: Point, poly: Polygon): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    const intersects = yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}

/** Bir noktayı merkez etrafında döndürüp öteleyerek/ölçekleyerek dönüştürür. */
export function transformPoint(
  [x, y]: Point,
  { tx, ty, scale, rotationDeg }: { tx: number; ty: number; scale: number; rotationDeg: number }
): Point {
  const rad = (rotationDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const sx = x * scale;
  const sy = y * scale;
  return [tx + sx * cos - sy * sin, ty + sx * sin + sy * cos];
}

export function transformPolygon(poly: Polygon, t: { tx: number; ty: number; scale: number; rotationDeg: number }): Polygon {
  return poly.map((p) => transformPoint(p, t));
}

/** Dikdörtgeni yoğun bir çokgen olarak (köşe noktalarıyla) döndürür — boolean işlemleri için yeterli. */
export function rectPolygon(x: number, y: number, w: number, h: number): Polygon {
  return [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h],
  ];
}

/** Elips/daireyi çok kenarlı bir poligon olarak yaklaşıklar (boolean/Voronoi işlemleri poligon bekler). */
export function ellipsePolygon(cx: number, cy: number, rx: number, ry: number, segments = 96): Polygon {
  const pts: Polygon = [];
  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    pts.push([cx + rx * Math.cos(theta), cy + ry * Math.sin(theta)]);
  }
  return pts;
}

function distSq(a: Point, b: Point): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return dx * dx + dy * dy;
}

/**
 * Basit "bridson benzeri" Poisson-disk örnekleme: bir dikdörtgen içine rastgele
 * adaylar üretip minimum mesafe kuralına uyanları, poligon içinde kalanları tutar.
 * Tam Bridson algoritması kadar hızlı değil ama birkaç yüz nokta için yeterli ve
 * ekstra bağımlılık gerektirmiyor.
 */
export function poissonDiskInPolygon(poly: Polygon, targetCount: number, seedRandom: () => number): Point[] {
  const { minX, minY, maxX, maxY } = boundingBox(poly);
  const area = polygonArea(poly);
  if (area <= 0 || targetCount <= 0) return [];

  const minDist = Math.sqrt(area / targetCount) * 0.85;
  const cellSize = minDist / Math.SQRT2;
  const gridW = Math.max(1, Math.ceil((maxX - minX) / cellSize));
  const gridH = Math.max(1, Math.ceil((maxY - minY) / cellSize));
  const grid: (Point | undefined)[] = new Array(gridW * gridH);

  const gridIndex = (x: number, y: number) => {
    const gx = Math.min(gridW - 1, Math.max(0, Math.floor((x - minX) / cellSize)));
    const gy = Math.min(gridH - 1, Math.max(0, Math.floor((y - minY) / cellSize)));
    return { gx, gy };
  };

  const points: Point[] = [];

  function fits(p: Point): boolean {
    const { gx, gy } = gridIndex(p[0], p[1]);
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const nx = gx + dx;
        const ny = gy + dy;
        if (nx < 0 || ny < 0 || nx >= gridW || ny >= gridH) continue;
        const neighbor = grid[ny * gridW + nx];
        if (neighbor && distSq(neighbor, p) < minDist * minDist) return false;
      }
    }
    return true;
  }

  // Bounding box içinde rastgele adaylar dene; poligon içinde olup mesafe
  // kuralına uyanları kabul et. Sabit deneme sayısı — çok yoğun hedeflerde
  // eksik kalabilir ama görsel amaçlı bir yapboz için yeterli yoğunluk verir.
  const maxAttempts = Math.max(2000, targetCount * 60);
  for (let i = 0; i < maxAttempts && points.length < targetCount * 1.3; i++) {
    const candidate: Point = [minX + seedRandom() * (maxX - minX), minY + seedRandom() * (maxY - minY)];
    if (!pointInPolygon(candidate, poly)) continue;
    if (!fits(candidate)) continue;
    points.push(candidate);
    const { gx, gy } = gridIndex(candidate[0], candidate[1]);
    grid[gy * gridW + gx] = candidate;
  }

  return points;
}

// --- polygon-clipping adaptörleri -------------------------------------
// `polygon-clipping` kendi formatını kullanıyor: Ring = Point[], Polygon =
// Ring[] (ilk halka dış sınır, sonrakiler delik), MultiPolygon = Polygon[].
// Bizim `Polygon` tipimiz (delik içermeyen tek halka) ile karışmaması için
// bu adaptör isimlerini kullanıyoruz.
export type ClipperPolygon = Point[][]; // tek "Polygon": [dışHalka, delik1, delik2, ...]
export type ClipperMultiPolygon = ClipperPolygon[];

export function toClipperPolygon(poly: Polygon): ClipperPolygon {
  return [poly];
}

/** MultiPolygon sonucundaki en büyük alanlı halkayı (delikleri de dahil) döndürür — basit şekiller için yeterli. */
export function firstClipperPolygon(mp: ClipperMultiPolygon): ClipperPolygon | null {
  if (mp.length === 0) return null;
  let best = mp[0];
  let bestArea = polygonArea(mp[0][0]);
  for (const poly of mp) {
    const a = polygonArea(poly[0]);
    if (a > bestArea) {
      best = poly;
      bestArea = a;
    }
  }
  return best;
}

/** Deterministik, tohumlanabilir sözde-rastgele üretici (mulberry32). */
export function mulberry32(seed: number): () => number {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
