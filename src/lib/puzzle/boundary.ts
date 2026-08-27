import type { BoundaryState } from "./types";
import { ellipsePolygon, rectPolygon, type Polygon } from "./geometry";

export function boundaryBoundingBox(b: BoundaryState): { x: number; y: number; width: number; height: number } {
  if (b.kind === "ellipse") {
    return {
      x: b.ellipse.cx - b.ellipse.rx,
      y: b.ellipse.cy - b.ellipse.ry,
      width: b.ellipse.rx * 2,
      height: b.ellipse.ry * 2,
    };
  }
  if (b.kind === "path" && b.path.length > 0) {
    const xs = b.path.map((p) => p[0]);
    const ys = b.path.map((p) => p[1]);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    return { x: minX, y: minY, width: Math.max(...xs) - minX, height: Math.max(...ys) - minY };
  }
  return b.rect;
}

/** Sınırı, tessellate/render için düz bir poligona çevirir. */
export function boundaryToPolygon(b: BoundaryState): Polygon {
  if (b.kind === "ellipse") {
    return ellipsePolygon(b.ellipse.cx, b.ellipse.cy, b.ellipse.rx, b.ellipse.ry, 96);
  }
  if (b.kind === "path") {
    return b.path;
  }
  return rectPolygon(b.rect.x, b.rect.y, b.rect.width, b.rect.height);
}

export function boundaryToSvgPath(b: BoundaryState): string {
  const poly = boundaryToPolygon(b);
  if (poly.length === 0) return "";
  return poly.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ") + " Z";
}
