import type { PaperSize } from "./paper-sizes";
import type { Point } from "./geometry";
import type { TessellateResult } from "./tessellate";

export type BoundaryShapeKind = "rect" | "ellipse" | "path";

export interface ImageState {
  dataUrl: string;
  naturalWidth: number;
  naturalHeight: number;
}

export interface Transform2D {
  tx: number;
  ty: number;
  scale: number;
  rotationDeg: number;
}

export interface ThemedPlacementState {
  id: string;
  shapeId: string;
  transform: Transform2D;
}

export interface BoundaryState {
  kind: BoundaryShapeKind;
  rect: { x: number; y: number; width: number; height: number };
  ellipse: { cx: number; cy: number; rx: number; ry: number };
  path: Point[];
}

export interface PuzzleProjectState {
  paper: PaperSize;
  image: ImageState | null;
  imageTransform: Transform2D;
  boundary: BoundaryState;
  targetPieceCount: number;
  themedPlacements: ThemedPlacementState[];
  seed: number;
  generated: TessellateResult | null;
}

export const DEFAULT_TRANSFORM: Transform2D = { tx: 0, ty: 0, scale: 1, rotationDeg: 0 };
