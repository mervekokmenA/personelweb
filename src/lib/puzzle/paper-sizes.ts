export interface PaperSize {
  id: string;
  label: string;
  widthMm: number;
  heightMm: number;
}

export const PAPER_PRESETS: PaperSize[] = [
  { id: "a4", label: "A4", widthMm: 210, heightMm: 297 },
  { id: "a3", label: "A3", widthMm: 297, heightMm: 420 },
  { id: "letter", label: "Letter", widthMm: 215.9, heightMm: 279.4 },
];

export const CUSTOM_PAPER_ID = "custom";

/** Yazıcının kenarlara basamadığı güvenli pay — karo/sayfa bölmede kullanılır. */
export const PAGE_MARGIN_MM = 8;
