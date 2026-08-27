import pc from "polygon-clipping";
import { firstClipperPolygon, toClipperPolygon, type Polygon } from "./geometry";

/**
 * Gerçek/tanınabilir hayvan silüetleri — "Hayvan Modu" için elle
 * koordinatlanmış, düz ikon tarzı (kulak/kuyruk/kanat gibi ayırt edici
 * detaylara sahip) siluetler. Her biri [-50,50]x[-50,50] civarına
 * normalize edilmiş, orijin-merkezli bir poligon döndürür.
 */

export const fish: Polygon = [
  [50, 0],
  [42, -12],
  [28, -19],
  [12, -20],
  [8, -30],
  [2, -32],
  [-4, -20],
  [-16, -17],
  [-30, -8],
  [-50, -18],
  [-34, 0],
  [-50, 18],
  [-30, 8],
  [-16, 17],
  [-4, 20],
  [2, 32],
  [8, 30],
  [12, 20],
  [28, 19],
  [42, 12],
];

// Uçan kırlangıç silueti — tek parça elle çizim yerine basit parçaların
// (gövde elipsi + iki geniş kanat üçgeni + gaga + çatal kuyruk) birleşimi
// (union) olarak kuruluyor; her parça kendi içinde basit/dışbükey olduğu
// için kendiyle kesişme riski yok (cloud/teardrop ile aynı teknik).
function buildBird(): Polygon {
  const body = ellipseLike(0, 0, 13, 24, 40);
  const rightWing: Polygon = [
    [6, -8],
    [48, -16],
    [10, 14],
  ];
  const leftWing: Polygon = [
    [-6, -8],
    [-48, -16],
    [-10, 14],
  ];
  const beak: Polygon = [
    [-7, -20],
    [7, -20],
    [0, -32],
  ];
  const rightTail: Polygon = [
    [1, 18],
    [15, 34],
    [3, 24],
  ];
  const leftTail: Polygon = [
    [-1, 18],
    [-15, 34],
    [-3, 24],
  ];

  let acc: pc.MultiPolygon = pc.union(toClipperPolygon(body));
  for (const part of [rightWing, leftWing, beak, rightTail, leftTail]) {
    acc = pc.union(acc, toClipperPolygon(part));
  }
  const best = firstClipperPolygon(acc);
  return best ? (best[0] as Polygon) : body;
}

function ellipseLike(cx: number, cy: number, rx: number, ry: number, segments: number): Polygon {
  const pts: Polygon = [];
  for (let i = 0; i < segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    pts.push([cx + rx * Math.cos(t), cy + ry * Math.sin(t)]);
  }
  return pts;
}

export const bird: Polygon = buildBird();

export const cat: Polygon = [
  [14, -48], // sağ kulak ucu
  [22, -34],
  [26, -20], // kafa sağ
  [30, 0], // omuz
  [26, 20], // kalça
  [14, 32],
  [-6, 32], // düz alt (oturan gövde)
  [-22, 18], // gövde sol / kalça
  [-38, 22], // kuyruk dışı
  [-50, 8], // kuyruk ucu
  [-40, -2], // kuyruk iç kıvrım
  [-26, 2], // gövde sol devam
  [-24, -18], // omuz sol
  [-20, -32], // kafa sol
  [-14, -34],
  [-22, -50], // sol kulak ucu
  [-6, -30], // kulaklar arası
  [0, -34], // alın
  [6, -30], // sağ kulak tabanı
];

export const rabbit: Polygon = [
  [34, -6], // burun
  [26, 4],
  [18, 14],
  [2, 24],
  [-14, 22],
  [-24, 10], // kuyruk dışı
  [-34, 16], // kuyruk ucu
  [-26, 4], // kuyruk içi
  [-14, -4],
  [-8, -16],
  [-16, -44], // sol kulak dışı
  [-10, -52], // sol kulak ucu
  [-2, -38], // kulaklar arası
  [4, -40],
  [10, -52], // sağ kulak ucu
  [18, -42], // sağ kulak dışı
  [22, -26],
  [28, -14],
];

export const butterfly: Polygon = [
  // Üst sağ kanat
  [4, -6],
  [14, -20],
  [30, -30],
  [42, -24],
  [44, -12],
  [34, -4],
  [18, -4],
  [6, 2],
  // Alt sağ kanat
  [16, 6],
  [30, 10],
  [38, 20],
  [34, 30],
  [22, 28],
  [10, 16],
  [3, 6],
  // Gövde alt ucu
  [2, 20],
  [-2, 20],
  // Alt sol kanat (ayna)
  [-3, 6],
  [-10, 16],
  [-22, 28],
  [-34, 30],
  [-38, 20],
  [-30, 10],
  [-16, 6],
  [-6, 2],
  // Üst sol kanat (ayna)
  [-18, -4],
  [-34, -4],
  [-44, -12],
  [-42, -24],
  [-30, -30],
  [-14, -20],
  [-4, -6],
];

export const turtle: Polygon = [
  [6, -34],
  [14, -30],
  [12, -24],
  [26, -22],
  [40, -10],
  [44, 6],
  [36, 18],
  [40, 26],
  [30, 26],
  [26, 20],
  [10, 24],
  [-10, 24],
  [-26, 20],
  [-30, 26],
  [-40, 26],
  [-36, 18],
  [-44, 6],
  [-40, -10],
  [-26, -22],
  [-12, -24],
  [-14, -30],
  [-6, -34],
  [0, -30],
];

export const dog: Polygon = [
  [36, -14], // burun ucu
  [30, -22],
  [18, -28], // alın
  [8, -40], // sarkık kulak dış kenarı
  [-2, -30], // kulak ucu
  [4, -20], // kulak tabanı / kafa üstü
  [-8, -18],
  [-20, -10], // sırt
  [-30, -6], // kuyruk tabanı
  [-44, -16], // kuyruk kıvrımı dışı
  [-48, -4], // kuyruk ucu
  [-36, 4], // kuyruk kıvrımı içi
  [-26, 14], // arka but
  [-22, 32], // arka bacak
  [-10, 32], // arka pati
  [-8, 16], // arka bacak iç
  [4, 20], // karın
  [10, 18], // ön bacak arka
  [10, 34], // ön pati
  [22, 34],
  [22, 16], // ön bacak ön
  [26, 4], // göğüs
  [32, -4], // çene
];
