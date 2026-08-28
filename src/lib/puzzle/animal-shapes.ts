import pc from "polygon-clipping";
import { firstClipperPolygon, toClipperPolygon, ellipsePolygon, type Point, type Polygon } from "./geometry";

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

// --- Genel bileşim yardımcıları -------------------------------------------
// Aşağıdaki ~50 yeni tür, hepsi aynı kanıtlanmış teknikle (bkz. buildBird):
// basit/dışbükey, kendiyle kesişmeyen parçaların (elips, üçgen, dikdörtgen)
// polygon-clipping birleşimi (union). Bu sayede tek parça elle-çizim
// denemelerinde yaşanan kendiyle-kesişme riski tamamen ortadan kalkıyor —
// her parça zaten basit olduğu için union sonucu da her zaman geçerli bir
// (basit) poligon üretir.

function union(parts: Polygon[]): Polygon {
  let acc: pc.MultiPolygon = pc.union(toClipperPolygon(parts[0]));
  for (let i = 1; i < parts.length; i++) acc = pc.union(acc, toClipperPolygon(parts[i]));
  const best = firstClipperPolygon(acc);
  return best ? (best[0] as Polygon) : parts[0];
}

function poly(...pts: Point[]): Polygon {
  return pts;
}

function tri(a: Point, b: Point, c: Point): Polygon {
  return [a, b, c];
}

function rect(cx: number, cy: number, w: number, h: number): Polygon {
  const hw = w / 2;
  const hh = h / 2;
  return [
    [cx - hw, cy - hh],
    [cx + hw, cy - hh],
    [cx + hw, cy + hh],
    [cx - hw, cy + hh],
  ];
}

function ellipse(cx: number, cy: number, rx: number, ry: number, segments = 32): Polygon {
  return ellipsePolygon(cx, cy, rx, ry, segments);
}

// --- Evcil Hayvanlar grubu: 17 yeni tür -------------------------------------

export const horse: Polygon = union([
  ellipse(-2, 4, 30, 12, 40),
  rect(28, -8, 12, 28),
  ellipse(40, -24, 9, 10, 28),
  tri([35, -33], [41, -33], [37, -46]),
  tri([41, -33], [47, -33], [45, -46]),
  rect(-18, 16, 6, 26),
  rect(-6, 16, 6, 26),
  rect(10, 16, 6, 26),
  rect(22, 16, 6, 26),
  tri([-28, 0], [-52, -12], [-30, 16]),
]);

export const pony: Polygon = union([
  ellipse(0, 6, 24, 13, 40),
  rect(20, -4, 11, 20),
  ellipse(30, -18, 10, 10, 28),
  tri([25, -27], [31, -27], [27, -38]),
  tri([31, -27], [37, -27], [35, -38]),
  rect(-14, 16, 7, 18),
  rect(-2, 16, 7, 18),
  rect(10, 16, 7, 18),
  rect(20, 16, 7, 18),
  tri([-22, 2], [-40, -8], [-24, 16]),
]);

export const goat: Polygon = union([
  ellipse(-2, 4, 22, 11, 36),
  rect(18, -6, 12, 20),
  ellipse(28, -14, 9, 9, 28),
  tri([24, -18], [28, -20], [21, -32]),
  tri([32, -18], [36, -20], [38, -32]),
  tri([28, -6], [32, -6], [30, 4]),
  rect(-16, 14, 6, 22),
  rect(-4, 14, 6, 22),
  rect(10, 14, 6, 22),
  rect(20, 14, 6, 22),
  tri([-24, -2], [-40, -10], [-26, 10]),
]);

export const sheep: Polygon = union([
  ellipse(-2, 2, 26, 15, 40),
  ellipse(6, -6, 10, 9, 20),
  ellipse(-10, -6, 10, 9, 20),
  ellipse(-2, -12, 10, 9, 20),
  ellipse(28, -8, 9, 8, 24),
  tri([22, -6], [16, 2], [20, -12]),
  tri([34, -6], [40, 2], [36, -12]),
  rect(-14, 14, 6, 20),
  rect(-2, 14, 6, 20),
  rect(10, 14, 6, 20),
  rect(20, 14, 6, 20),
  ellipse(-26, 0, 8, 8, 20),
]);

export const pig: Polygon = union([
  ellipse(-2, 4, 26, 15, 40),
  ellipse(26, -2, 11, 9, 28),
  rect(34, 0, 8, 8),
  tri([20, -10], [26, -12], [22, -20]),
  tri([30, -10], [36, -12], [34, -20]),
  rect(-16, 16, 7, 14),
  rect(-4, 16, 7, 14),
  rect(10, 16, 7, 14),
  rect(20, 16, 7, 14),
  ellipse(-28, -4, 6, 6, 16),
  ellipse(-33, -10, 4, 4, 12),
]);

export const cow: Polygon = union([
  ellipse(-4, 4, 32, 15, 40),
  rect(24, -4, 14, 22),
  ellipse(34, -12, 10, 10, 28),
  tri([28, -16], [32, -18], [24, -28]),
  tri([40, -16], [44, -18], [46, -28]),
  tri([22, -14], [16, -8], [22, -22]),
  tri([44, -14], [50, -8], [44, -22]),
  ellipse(-2, 18, 10, 6, 20),
  rect(-20, 16, 7, 22),
  rect(-6, 16, 7, 22),
  rect(10, 16, 7, 22),
  rect(22, 16, 7, 22),
  tri([-30, -2], [-50, 6], [-30, 12]),
  ellipse(-50, 8, 5, 5, 12),
]);

export const llama: Polygon = union([
  ellipse(-4, 14, 20, 12, 36),
  rect(14, -12, 11, 44),
  ellipse(16, -38, 8, 9, 24),
  tri([12, -46], [17, -46], [14, -58]),
  tri([18, -46], [23, -46], [22, -58]),
  rect(-16, 24, 6, 26),
  rect(-4, 24, 6, 26),
  rect(8, 24, 6, 26),
  rect(18, 24, 6, 26),
  tri([-22, 8], [-34, 20], [-20, 22]),
]);

export const donkey: Polygon = union([
  ellipse(-2, 4, 27, 12, 40),
  rect(24, -8, 11, 24),
  ellipse(34, -22, 9, 9, 28),
  tri([28, -30], [34, -32], [26, -46]),
  tri([36, -30], [42, -32], [46, -46]),
  rect(-16, 14, 6, 26),
  rect(-4, 14, 6, 26),
  rect(10, 14, 6, 26),
  rect(20, 14, 6, 26),
  tri([-26, -2], [-46, 4], [-26, 12]),
  ellipse(-46, 6, 5, 5, 12),
]);

export const chinchilla: Polygon = union([
  ellipse(-2, 6, 22, 20, 40),
  ellipse(18, -14, 12, 11, 28),
  ellipse(12, -28, 6, 8, 16),
  ellipse(24, -28, 6, 8, 16),
  rect(-12, 22, 6, 8),
  rect(0, 22, 6, 8),
  rect(10, 22, 6, 8),
  ellipse(-24, 4, 14, 12, 24),
]);

export const gerbil: Polygon = union([
  ellipse(2, 2, 18, 10, 32),
  ellipse(22, -4, 8, 7, 24),
  tri([18, -10], [22, -13], [17, -18]),
  tri([26, -10], [30, -13], [31, -18]),
  rect(-8, 10, 5, 8),
  rect(4, 10, 5, 8),
  rect(12, 10, 5, 8),
  rect(-38, 2, 26, 3),
]);

export const hamster: Polygon = union([
  ellipse(0, 4, 22, 17, 36),
  ellipse(16, -8, 10, 9, 24),
  tri([10, -14], [14, -18], [8, -20]),
  tri([20, -14], [24, -18], [26, -20]),
  rect(-10, 18, 6, 6),
  rect(2, 18, 6, 6),
  rect(12, 18, 6, 6),
]);

export const guineapig: Polygon = union([
  ellipse(0, 2, 26, 13, 36),
  ellipse(24, -4, 9, 8, 24),
  tri([19, -10], [22, -14], [16, -14]),
  tri([28, -10], [31, -14], [34, -13]),
  rect(-14, 12, 6, 8),
  rect(-2, 12, 6, 8),
  rect(10, 12, 6, 8),
  rect(20, 12, 6, 8),
]);

export const mouse: Polygon = union([
  ellipse(2, 2, 16, 10, 28),
  ellipse(18, -6, 7, 6, 20),
  ellipse(12, -14, 5, 5, 16),
  ellipse(22, -14, 5, 5, 16),
  rect(-6, 10, 4, 6),
  rect(4, 10, 4, 6),
  rect(12, 10, 4, 6),
  rect(-40, 1, 30, 2),
]);

export const rat: Polygon = union([
  ellipse(0, 2, 20, 11, 32),
  ellipse(20, -4, 8, 7, 24),
  tri([16, -10], [21, -14], [13, -12]),
  ellipse(14, -12, 4, 4, 14),
  ellipse(24, -13, 4, 4, 14),
  rect(-10, 12, 5, 7),
  rect(0, 12, 5, 7),
  rect(10, 12, 5, 7),
  rect(-46, 1, 34, 2),
]);

export const ferret: Polygon = union([
  ellipse(0, 4, 30, 9, 40),
  ellipse(30, -2, 8, 7, 24),
  tri([26, -8], [30, -11], [24, -11]),
  tri([32, -8], [36, -11], [38, -11]),
  rect(-20, 10, 6, 10),
  rect(-6, 10, 6, 10),
  rect(8, 10, 6, 10),
  rect(20, 10, 6, 10),
  tri([-30, 2], [-50, -4], [-30, 10]),
]);

function hedgehogSpikes(): Polygon[] {
  const spikes: Polygon[] = [];
  const n = 10;
  for (let i = 0; i <= n; i++) {
    const a = Math.PI * (0.08 + (i / n) * 0.84);
    const bx = 22 * Math.cos(a);
    const by = -4 - 16 * Math.sin(a);
    const tipx = 34 * Math.cos(a);
    const tipy = -4 - 26 * Math.sin(a);
    spikes.push(tri([bx - 3, by - 3], [bx + 3, by + 3], [tipx, tipy]));
  }
  return spikes;
}

export const hedgehog: Polygon = union([
  ellipse(0, 2, 24, 16, 40),
  tri([22, 6], [22, -4], [36, 2]),
  ...hedgehogSpikes(),
  rect(-12, 16, 6, 6),
  rect(0, 16, 6, 6),
  rect(10, 16, 6, 6),
]);

export const alpaca: Polygon = union([
  ellipse(-4, 14, 22, 14, 36),
  rect(12, -10, 12, 40),
  ellipse(14, -34, 9, 10, 24),
  tri([9, -42], [13, -44], [8, -54]),
  tri([15, -42], [19, -44], [20, -54]),
  rect(-18, 26, 7, 24),
  rect(-4, 26, 7, 24),
  rect(8, 26, 7, 24),
  rect(18, 26, 7, 24),
  tri([-22, 10], [-32, 20], [-20, 22]),
]);

// --- Uçanlar grubu: 18 yeni tür ---------------------------------------------

export const owl: Polygon = union([
  ellipse(0, 0, 20, 24, 40),
  tri([-8, -22], [-2, -22], [-5, -34]),
  tri([2, -22], [8, -22], [5, -34]),
  tri([-16, -6], [-30, 10], [-14, 16]),
  tri([16, -6], [30, 10], [14, 16]),
  tri([-6, 18], [6, 18], [0, 28]),
]);

export const eagle: Polygon = union([
  ellipse(0, 0, 12, 18, 32),
  tri([-8, -6], [-50, -18], [-10, 12]),
  tri([8, -6], [50, -18], [10, 12]),
  tri([-8, -20], [8, -20], [0, -32]),
  tri([-10, 16], [10, 16], [0, 34]),
]);

export const parrot: Polygon = union([
  ellipse(0, -4, 13, 18, 32),
  tri([-4, -18], [4, -18], [0, -30]),
  tri([-6, -4], [-30, 4], [-8, 14]),
  tri([-8, -6], [-6, -14], [2, -8]),
  tri([-6, 11], [6, 11], [-4, 48]),
  tri([-4, 11], [8, 11], [10, 46]),
]);

export const sparrow: Polygon = union([
  ellipse(0, 0, 11, 15, 28),
  tri([-6, -4], [-22, 2], [-8, 10]),
  tri([-4, -14], [4, -14], [0, -22]),
  tri([-6, 12], [6, 12], [0, 24]),
]);

export const duck: Polygon = union([
  ellipse(-2, 6, 22, 13, 36),
  ellipse(20, -10, 9, 8, 24),
  tri([26, -12], [40, -10], [26, -6]),
  tri([-4, -2], [-20, 4], [-2, 12]),
  rect(-6, 20, 5, 6),
  rect(4, 20, 5, 6),
]);

export const swan: Polygon = union([
  ellipse(-4, 14, 24, 13, 36),
  rect(10, -14, 8, 40),
  ellipse(16, -34, 8, 7, 24),
  tri([21, -35], [32, -33], [21, -31]),
  tri([-8, 6], [-28, 14], [-6, 20]),
]);

export const flamingo: Polygon = union([
  ellipse(-4, -10, 15, 12, 32),
  rect(4, -30, 6, 24),
  rect(10, -46, 5, 20),
  ellipse(14, -50, 7, 6, 20),
  tri([18, -52], [30, -48], [18, -46]),
  tri([-10, 0], [-24, 6], [-8, 12]),
  rect(-2, 2, 4, 40),
]);

export const dove: Polygon = union([
  ellipse(0, 0, 15, 17, 32),
  tri([-6, -6], [-26, 0], [-8, 12]),
  tri([-4, -16], [4, -16], [0, -24]),
  tri([-8, 14], [8, 14], [0, 26]),
]);

export const bat: Polygon = union([
  ellipse(0, 0, 10, 13, 28),
  tri([-4, -20], [2, -20], [-1, -30]),
  tri([4, -20], [10, -20], [7, -30]),
  poly([-6, -2], [-50, -20], [-40, 10], [-8, 16]),
  poly([6, -2], [50, -20], [40, 10], [8, 16]),
]);

export const hummingbird: Polygon = union([
  ellipse(0, 0, 10, 14, 28),
  tri([8, -4], [40, -2], [8, 4]),
  tri([-4, -6], [-22, -16], [-8, 4]),
  tri([-6, 12], [6, 12], [-2, 26]),
]);

function peacockFan(): Polygon[] {
  const feathers: Polygon[] = [];
  const n = 10;
  for (let i = 0; i <= n; i++) {
    const a = Math.PI * (0.08 + (i / n) * 0.84);
    const tipx = 44 * Math.cos(a);
    const tipy = 12 + 40 * Math.sin(a);
    feathers.push(tri([-5, 8], [5, 8], [tipx, tipy]));
  }
  return feathers;
}

export const peacock: Polygon = union([
  ellipse(0, -6, 13, 16, 32),
  tri([-3, -22], [3, -22], [0, -32]),
  tri([-6, -12], [-20, -6], [-8, 2]),
  ...peacockFan(),
]);

export const toucan: Polygon = union([
  ellipse(-6, 6, 16, 18, 32),
  ellipse(14, -6, 8, 7, 24),
  tri([16, -11], [48, -8], [16, -1]),
  tri([-10, 0], [-26, 8], [-8, 16]),
]);

export const crow: Polygon = union([
  ellipse(0, 0, 14, 17, 32),
  tri([-6, -8], [-32, -18], [-10, 8]),
  tri([6, -8], [32, -18], [10, 8]),
  tri([-4, -16], [4, -16], [0, -28]),
  tri([-8, 14], [8, 14], [0, 26]),
]);

export const bee: Polygon = union([
  ellipse(-6, 0, 12, 10, 28),
  ellipse(12, 0, 9, 8, 24),
  tri([-2, -8], [-16, -22], [-6, -2]),
  tri([2, -8], [16, -22], [6, -2]),
  tri([-16, -8], [-20, -14], [-13, -12]),
  tri([16, -8], [20, -14], [13, -12]),
]);

export const dragonfly: Polygon = union([
  ellipse(0, 0, 6, 34, 24),
  ellipse(0, -30, 6, 6, 16),
  ellipse(-24, -14, 22, 5, 20),
  ellipse(24, -14, 22, 5, 20),
  ellipse(-22, 8, 20, 5, 20),
  ellipse(22, 8, 20, 5, 20),
]);

export const ladybug: Polygon = union([
  ellipse(0, 4, 26, 22, 40),
  ellipse(0, -20, 12, 10, 24),
  rect(-14, 8, 6, 6),
  rect(-4, 8, 6, 6),
  rect(6, 8, 6, 6),
]);

export const moth: Polygon = union([
  ellipse(0, 0, 7, 24, 24),
  ellipse(-24, -14, 20, 16, 32),
  ellipse(24, -14, 20, 16, 32),
  ellipse(-18, 14, 14, 12, 28),
  ellipse(18, 14, 14, 12, 28),
  tri([-3, -22], [-14, -34], [-6, -18]),
  tri([3, -22], [14, -34], [6, -18]),
]);

export const wasp: Polygon = union([
  ellipse(-14, 0, 8, 7, 24),
  ellipse(4, 0, 4, 4, 16),
  ellipse(20, 0, 16, 9, 28),
  tri([-10, -6], [-22, -18], [-14, -2]),
  tri([-10, 6], [-22, 18], [-14, 2]),
  tri([-22, -4], [-30, -8], [-24, -1]),
  tri([-22, 4], [-30, 8], [-24, 1]),
]);

// --- Sucul Canlılar grubu: 18 yeni tür --------------------------------------

export const dolphin: Polygon = union([
  ellipse(-4, 0, 32, 12, 40),
  tri([22, -4], [30, -10], [40, 2]),
  tri([-6, -10], [-2, -26], [4, -10]),
  poly([-30, -4], [-48, -16], [-38, 0], [-48, 16], [-30, 4]),
  tri([2, 10], [10, 20], [-4, 14]),
]);

export const whale: Polygon = union([
  ellipse(-2, 0, 38, 18, 44),
  tri([-4, -14], [0, -26], [6, -14]),
  poly([-34, -6], [-52, -20], [-44, 0], [-52, 20], [-34, 6]),
  tri([6, 14], [16, 24], [-2, 20]),
]);

export const shark: Polygon = union([
  ellipse(-2, 2, 30, 11, 40),
  tri([24, -2], [42, 2], [22, 8]),
  tri([-4, -8], [0, -30], [8, -8]),
  poly([-26, -2], [-46, -18], [-38, 2], [-48, 12], [-28, 6]),
  tri([2, 10], [10, 18], [-4, 14]),
]);

function octopusTentacles(): Polygon[] {
  const tentacles: Polygon[] = [];
  const n = 7;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const bx = -24 + t * 48;
    const tipx = bx + (t - 0.5) * 50;
    tentacles.push(tri([bx - 5, 4], [bx + 5, 4], [tipx, 40 + Math.abs(t - 0.5) * 10]));
  }
  return tentacles;
}

export const octopus: Polygon = union([ellipse(0, -10, 26, 20, 40), ...octopusTentacles()]);

function crabLegs(): Polygon[] {
  const legs: Polygon[] = [];
  const xs = [-20, -10, 10, 20];
  for (const x of xs) legs.push(tri([x - 4, 10], [x + 4, 10], [x * 1.6, 26]));
  return legs;
}

export const crab: Polygon = union([
  ellipse(0, 0, 28, 15, 40),
  tri([-26, -6], [-44, -18], [-30, 4]),
  tri([-28, 2], [-46, 6], [-32, 10]),
  tri([26, -6], [44, -18], [30, 4]),
  tri([28, 2], [46, 6], [32, 10]),
  ...crabLegs(),
  ellipse(-10, -10, 3, 3, 12),
  ellipse(10, -10, 3, 3, 12),
]);

export const seahorse: Polygon = union([
  ellipse(4, 0, 12, 20, 28),
  ellipse(6, -22, 9, 8, 24),
  tri([12, -28], [26, -30], [12, -20]),
  ellipse(-2, 20, 8, 8, 20),
  ellipse(-8, 30, 6, 6, 16),
  ellipse(-10, 38, 4, 4, 12),
  tri([14, -4], [26, 2], [12, 10]),
]);

function jellyTentacles(): Polygon[] {
  const tentacles: Polygon[] = [];
  const n = 6;
  for (let i = 0; i <= n; i++) {
    const x = -25 + (i / n) * 50;
    tentacles.push(rect(x, 5, 4, 24));
  }
  return tentacles;
}

export const jellyfish: Polygon = union([
  poly([-30, 0], [-30, -8], [-20, -18], [0, -22], [20, -18], [30, -8], [30, 0]),
  ...jellyTentacles(),
]);

function squidTentacles(): Polygon[] {
  const tentacles: Polygon[] = [];
  const n = 8;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const bx = -18 + t * 36;
    const tipx = bx + (t - 0.5) * 30;
    tentacles.push(tri([bx - 3, 10], [bx + 3, 10], [tipx, 44]));
  }
  return tentacles;
}

export const squid: Polygon = union([
  ellipse(0, -10, 16, 26, 32),
  tri([-16, -20], [-26, -8], [-14, -2]),
  tri([16, -20], [26, -8], [14, -2]),
  ...squidTentacles(),
]);

export const lobster: Polygon = union([
  ellipse(-2, 0, 26, 11, 36),
  tri([-24, -10], [-42, -22], [-26, -2]),
  tri([-26, -4], [-44, -2], [-28, 4]),
  tri([-20, 8], [-32, 20], [-16, 12]),
  poly([20, -4], [40, -10], [44, 0], [40, 10], [20, 4]),
  rect(-6, 10, 4, 6),
  rect(4, 10, 4, 6),
  rect(12, 10, 4, 6),
]);

export const shrimp: Polygon = union([
  ellipse(4, -6, 22, 10, 32),
  ellipse(-14, 6, 14, 9, 24),
  tri([16, -14], [30, -20], [18, -6]),
  tri([26, -18], [40, -26], [28, -12]),
  poly([26, -2], [40, -8], [42, 2], [32, 8], [22, 4]),
]);

export const seal: Polygon = union([
  ellipse(0, 0, 30, 15, 40),
  ellipse(30, -4, 9, 8, 24),
  tri([-24, 6], [-40, 16], [-22, 14]),
  tri([-6, 14], [4, 22], [-14, 20]),
  tri([6, -6], [16, 2], [4, 8]),
]);

export const otter: Polygon = union([
  ellipse(-2, 2, 28, 11, 36),
  ellipse(26, -4, 8, 7, 24),
  rect(-8, 12, 5, 6),
  rect(2, 12, 5, 6),
  poly([-26, -4], [-46, -10], [-46, 6], [-26, 6]),
]);

export const frog: Polygon = union([
  ellipse(0, 4, 22, 16, 36),
  ellipse(-8, -12, 6, 6, 16),
  ellipse(8, -12, 6, 6, 16),
  poly([16, 8], [32, 4], [38, 16], [30, 24], [16, 18]),
  poly([-16, 8], [-32, 4], [-38, 16], [-30, 24], [-16, 18]),
  rect(-16, 18, 6, 6),
  rect(16, 18, 6, 6),
]);

export const penguin: Polygon = union([
  ellipse(0, 4, 16, 26, 36),
  tri([-14, -4], [-26, 10], [-12, 14]),
  tri([14, -4], [26, 10], [12, 14]),
  tri([-6, -22], [6, -22], [0, -32]),
  rect(-8, 30, 6, 6),
  rect(4, 30, 6, 6),
]);

export const stingray: Polygon = union([
  poly([0, -30], [30, 4], [10, 10], [0, 4], [-10, 10], [-30, 4]),
  poly([-3, 6], [3, 6], [10, 48]),
]);

export const eel: Polygon = union([
  ellipse(-38, 6, 12, 6, 20),
  ellipse(-20, -4, 12, 6, 20),
  ellipse(0, 4, 12, 6, 20),
  ellipse(20, -4, 12, 6, 20),
  ellipse(36, 2, 9, 5, 18),
  tri([44, 0], [50, 2], [44, 6]),
]);

export const walrus: Polygon = union([
  ellipse(-2, 4, 34, 20, 40),
  tri([-4, -6], [2, 14], [-10, 14]),
  tri([4, -6], [10, 14], [-2, 14]),
  tri([-26, 10], [-40, 20], [-22, 20]),
  tri([22, 10], [40, 20], [26, 20]),
]);

export const snail: Polygon = union([
  poly([-30, 10], [-10, -2], [16, 2], [22, 12], [10, 18], [-20, 18]),
  ellipse(6, -14, 18, 18, 40),
  tri([-28, 6], [-40, -4], [-34, 8]),
  tri([-24, 6], [-34, -6], [-30, 10]),
]);

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
