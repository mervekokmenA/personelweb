// polygon-clipping'in .d.ts'i named export'lar bildiriyor ama gerçek ESM
// derlemesi sadece bir default export (union/intersection/xor/difference
// içeren tek nesne) veriyor — bu yüzden default import kullanılıyor.
import pc from "polygon-clipping";
import type { MultiPolygon } from "polygon-clipping";
import type { Polygon } from "./geometry";
import { toClipperPolygon, firstClipperPolygon } from "./geometry";
import * as animals from "./animal-shapes";

/**
 * Temalı parça siluet kütüphanesi. Her şekil [-50,50]x[-50,50] kutusuna
 * normalize edilmiş, orijin-merkezli bir poligon üretir (sonradan
 * transformPolygon ile konum/ölçek/döndürme uygulanır).
 *
 * `category: "geometric"` parametrik/geometrik şekiller; `category:
 * "animal"` elle koordinatlanmış gerçek hayvan silüetleri (bkz.
 * animal-shapes.ts) — "Hayvan Modu" otomatik doldurma sadece bunları
 * kullanır. Farklı özel bir şekil istenirse "Serbest Path" aracıyla elle de
 * çizilebilir (bkz. area-designer.tsx).
 */

function polarPoints(fn: (theta: number) => number, segments: number): Polygon {
  const pts: Polygon = [];
  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const r = fn(theta);
    pts.push([r * Math.cos(theta), r * Math.sin(theta)]);
  }
  return pts;
}

function star(points: number, outerR: number, innerR: number): Polygon {
  const pts: Polygon = [];
  const n = points * 2;
  for (let i = 0; i < n; i++) {
    const theta = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push([r * Math.cos(theta), r * Math.sin(theta)]);
  }
  return pts;
}

function regularPolygon(sides: number, r: number, rotationDeg = -90): Polygon {
  const pts: Polygon = [];
  const rot = (rotationDeg * Math.PI) / 180;
  for (let i = 0; i < sides; i++) {
    const theta = (i / sides) * Math.PI * 2 + rot;
    pts.push([r * Math.cos(theta), r * Math.sin(theta)]);
  }
  return pts;
}

function circlePoly(cx: number, cy: number, r: number, segments = 64): Polygon {
  const pts: Polygon = [];
  for (let i = 0; i < segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    pts.push([cx + r * Math.cos(theta), cy + r * Math.sin(theta)]);
  }
  return pts;
}

function heart(): Polygon {
  // Klasik parametrik kalp eğrisi (x=16sin³t, y=13cos t−5cos2t−2cos3t−cos4t),
  // [-45,45] kutusuna ortalanıp ölçeklenmiş. Matematiksel eğri y'yi yukarı
  // doğru artan kabul eder, SVG'de y aşağı arttığından işaret çevrilir.
  const segments = 64;
  const raw: Polygon = [];
  for (let i = 0; i < segments; i++) {
    const t = (i / segments) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    raw.push([x, y]);
  }
  const xs = raw.map((p) => p[0]);
  const ys = raw.map((p) => p[1]);
  const maxAbsX = Math.max(...xs.map(Math.abs));
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const midY = (maxY + minY) / 2;
  const scale = 45 / Math.max(maxAbsX, (maxY - minY) / 2);
  return raw.map(([x, y]) => [x * scale, -(y - midY) * scale]);
}

function crescentMoon(): Polygon {
  const outer = circlePoly(0, 0, 45, 72);
  const inner = circlePoly(18, -8, 38, 72);
  const result = pc.difference(toClipperPolygon(outer), toClipperPolygon(inner));
  const best = firstClipperPolygon(result);
  return best ? best[0] : outer;
}

function sunburst(): Polygon {
  return star(14, 48, 30);
}

function diamond(): Polygon {
  return [
    [0, -50],
    [32, 0],
    [0, 50],
    [-32, 0],
  ];
}

function leaf(): Polygon {
  // İki dairenin kesişimi (vesica) — organik yaprak/badem formu.
  const a = circlePoly(-22, 0, 42, 72);
  const b = circlePoly(22, 0, 42, 72);
  const result = pc.intersection(toClipperPolygon(a), toClipperPolygon(b));
  const best = firstClipperPolygon(result);
  return best ? best[0] : a;
}

function flower(petals: number): Polygon {
  return polarPoints((theta) => 46 * Math.abs(Math.cos(petals * theta * 0.5)) + 6, 180);
}

function arrow(): Polygon {
  return [
    [-50, -14],
    [10, -14],
    [10, -30],
    [50, 0],
    [10, 30],
    [10, 14],
    [-50, 14],
  ];
}

function teardrop(): Polygon {
  const circle = circlePoly(0, 12, 32, 72);
  const tip: Polygon = [
    [0, -50],
    [16, -6],
    [-16, -6],
  ];
  const result = pc.union(toClipperPolygon(circle), toClipperPolygon(tip));
  const best = firstClipperPolygon(result);
  return best ? best[0] : circle;
}

function cloud(): Polygon {
  const base = [
    [-40, 10],
    [40, 10],
    [40, 22],
    [-40, 22],
  ] as Polygon;
  let acc: MultiPolygon = pc.union(toClipperPolygon(base));
  for (const [cx, cy, r] of [
    [-24, 0, 20],
    [0, -10, 24],
    [24, 2, 18],
  ] as [number, number, number][]) {
    acc = pc.union(acc, toClipperPolygon(circlePoly(cx, cy, r, 48)));
  }
  const best = firstClipperPolygon(acc);
  return best ? best[0] : base;
}

export interface PuzzleShapeDef {
  id: string;
  label: string;
  build: () => Polygon;
  category: "geometric" | "animal";
}

export const SHAPE_LIBRARY: PuzzleShapeDef[] = [
  { id: "star5", label: "Yıldız (5)", build: () => star(5, 48, 20), category: "geometric" },
  { id: "star6", label: "Yıldız (6)", build: () => star(6, 46, 24), category: "geometric" },
  { id: "hexagon", label: "Altıgen", build: () => regularPolygon(6, 46), category: "geometric" },
  { id: "pentagon", label: "Beşgen", build: () => regularPolygon(5, 46), category: "geometric" },
  { id: "heart", label: "Kalp", build: heart, category: "geometric" },
  { id: "crescent", label: "Hilal (Ay)", build: crescentMoon, category: "geometric" },
  { id: "sun", label: "Güneş", build: sunburst, category: "geometric" },
  { id: "diamond", label: "Baklava (Elmas)", build: diamond, category: "geometric" },
  { id: "leaf", label: "Yaprak", build: leaf, category: "geometric" },
  { id: "flower", label: "Çiçek", build: () => flower(5), category: "geometric" },
  { id: "arrow", label: "Ok", build: arrow, category: "geometric" },
  { id: "teardrop", label: "Damla", build: teardrop, category: "geometric" },
  { id: "cloud", label: "Bulut", build: cloud, category: "geometric" },
  { id: "circle", label: "Daire", build: () => circlePoly(0, 0, 46, 64), category: "geometric" },
  { id: "fish", label: "Balık", build: () => animals.fish, category: "animal" },
  { id: "bird", label: "Kuş", build: () => animals.bird, category: "animal" },
  { id: "cat", label: "Kedi", build: () => animals.cat, category: "animal" },
  { id: "rabbit", label: "Tavşan", build: () => animals.rabbit, category: "animal" },
  { id: "butterfly", label: "Kelebek", build: () => animals.butterfly, category: "animal" },
  { id: "turtle", label: "Kaplumbağa", build: () => animals.turtle, category: "animal" },
  { id: "dog", label: "Köpek", build: () => animals.dog, category: "animal" },
  // Evcil Hayvanlar (ek 17 tür)
  { id: "horse", label: "At", build: () => animals.horse, category: "animal" },
  { id: "pony", label: "Midilli", build: () => animals.pony, category: "animal" },
  { id: "goat", label: "Keçi", build: () => animals.goat, category: "animal" },
  { id: "sheep", label: "Koyun", build: () => animals.sheep, category: "animal" },
  { id: "pig", label: "Domuz", build: () => animals.pig, category: "animal" },
  { id: "cow", label: "İnek", build: () => animals.cow, category: "animal" },
  { id: "llama", label: "Lama", build: () => animals.llama, category: "animal" },
  { id: "donkey", label: "Eşek", build: () => animals.donkey, category: "animal" },
  { id: "chinchilla", label: "Şinşila", build: () => animals.chinchilla, category: "animal" },
  { id: "gerbil", label: "Gerbil", build: () => animals.gerbil, category: "animal" },
  { id: "hamster", label: "Hamster", build: () => animals.hamster, category: "animal" },
  { id: "guineapig", label: "Kobay", build: () => animals.guineapig, category: "animal" },
  { id: "mouse", label: "Fare", build: () => animals.mouse, category: "animal" },
  { id: "rat", label: "Sıçan", build: () => animals.rat, category: "animal" },
  { id: "ferret", label: "Gelincik", build: () => animals.ferret, category: "animal" },
  { id: "hedgehog", label: "Kirpi", build: () => animals.hedgehog, category: "animal" },
  { id: "alpaca", label: "Alpaka", build: () => animals.alpaca, category: "animal" },
  // Uçanlar (ek 18 tür)
  { id: "owl", label: "Baykuş", build: () => animals.owl, category: "animal" },
  { id: "eagle", label: "Kartal", build: () => animals.eagle, category: "animal" },
  { id: "parrot", label: "Papağan", build: () => animals.parrot, category: "animal" },
  { id: "sparrow", label: "Serçe", build: () => animals.sparrow, category: "animal" },
  { id: "duck", label: "Ördek", build: () => animals.duck, category: "animal" },
  { id: "swan", label: "Kuğu", build: () => animals.swan, category: "animal" },
  { id: "flamingo", label: "Flamingo", build: () => animals.flamingo, category: "animal" },
  { id: "dove", label: "Güvercin", build: () => animals.dove, category: "animal" },
  { id: "bat", label: "Yarasa", build: () => animals.bat, category: "animal" },
  { id: "hummingbird", label: "Sinekkuşu", build: () => animals.hummingbird, category: "animal" },
  { id: "peacock", label: "Tavus Kuşu", build: () => animals.peacock, category: "animal" },
  { id: "toucan", label: "Tukan", build: () => animals.toucan, category: "animal" },
  { id: "crow", label: "Karga", build: () => animals.crow, category: "animal" },
  { id: "bee", label: "Arı", build: () => animals.bee, category: "animal" },
  { id: "dragonfly", label: "Yusufçuk", build: () => animals.dragonfly, category: "animal" },
  { id: "ladybug", label: "Uğur Böceği", build: () => animals.ladybug, category: "animal" },
  { id: "moth", label: "Güve", build: () => animals.moth, category: "animal" },
  { id: "wasp", label: "Eşek Arısı", build: () => animals.wasp, category: "animal" },
  // Sucul Canlılar (ek 18 tür)
  { id: "dolphin", label: "Yunus", build: () => animals.dolphin, category: "animal" },
  { id: "whale", label: "Balina", build: () => animals.whale, category: "animal" },
  { id: "shark", label: "Köpekbalığı", build: () => animals.shark, category: "animal" },
  { id: "octopus", label: "Ahtapot", build: () => animals.octopus, category: "animal" },
  { id: "crab", label: "Yengeç", build: () => animals.crab, category: "animal" },
  { id: "seahorse", label: "Denizatı", build: () => animals.seahorse, category: "animal" },
  { id: "jellyfish", label: "Denizanası", build: () => animals.jellyfish, category: "animal" },
  { id: "squid", label: "Kalamar", build: () => animals.squid, category: "animal" },
  { id: "lobster", label: "Istakoz", build: () => animals.lobster, category: "animal" },
  { id: "shrimp", label: "Karides", build: () => animals.shrimp, category: "animal" },
  { id: "seal", label: "Fok", build: () => animals.seal, category: "animal" },
  { id: "otter", label: "Su Samuru", build: () => animals.otter, category: "animal" },
  { id: "frog", label: "Kurbağa", build: () => animals.frog, category: "animal" },
  { id: "penguin", label: "Penguen", build: () => animals.penguin, category: "animal" },
  { id: "stingray", label: "Vatoz", build: () => animals.stingray, category: "animal" },
  { id: "eel", label: "Yılanbalığı", build: () => animals.eel, category: "animal" },
  { id: "walrus", label: "Mors", build: () => animals.walrus, category: "animal" },
  { id: "snail", label: "Salyangoz", build: () => animals.snail, category: "animal" },
];

export interface ShapeGroup {
  id: string;
  label: string;
  shapeIds: string[];
}

/** Hayvanları tarza/türe göre gruplar — "Doldur" işleminde tek tek seçmek yerine grup seçmek için. */
export const ANIMAL_GROUPS: ShapeGroup[] = [
  {
    id: "pets",
    label: "Evcil Hayvanlar",
    shapeIds: [
      "cat", "dog", "rabbit", "horse", "pony", "goat", "sheep", "pig", "cow",
      "llama", "donkey", "chinchilla", "gerbil", "hamster", "guineapig",
      "mouse", "rat", "ferret", "hedgehog", "alpaca",
    ],
  },
  {
    id: "flying",
    label: "Uçanlar",
    shapeIds: [
      "bird", "butterfly", "owl", "eagle", "parrot", "sparrow", "duck", "swan",
      "flamingo", "dove", "bat", "hummingbird", "peacock", "toucan", "crow",
      "bee", "dragonfly", "ladybug", "moth", "wasp",
    ],
  },
  {
    id: "aquatic",
    label: "Sucul Canlılar",
    shapeIds: [
      "fish", "turtle", "dolphin", "whale", "shark", "octopus", "crab",
      "seahorse", "jellyfish", "squid", "lobster", "shrimp", "seal", "otter",
      "frog", "penguin", "stingray", "eel", "walrus", "snail",
    ],
  },
];
