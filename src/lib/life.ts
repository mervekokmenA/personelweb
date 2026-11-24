import { prisma } from "@/lib/prisma";

export type LifeKind = "routine" | "goal" | "dream";
export const LIFE_KINDS: { kind: LifeKind; title: string; hint: string }[] = [
  { kind: "routine", title: "Rutinim", hint: "Her gün yapmak istediklerin. Ana sayfadaki kartta günlük işaretlenir." },
  { kind: "goal", title: "Hedeflerim", hint: "Somut, takip etmek istediğin hedefler." },
  { kind: "dream", title: "Hayallerim", hint: "Gerçekleştirmek istediğin büyük hayaller." },
];

export interface LifeItemView {
  id: string;
  kind: LifeKind;
  text: string;
  priority: number | null;
  note: string | null;
  done: boolean;
  order: number;
}

export async function getLifeItems(): Promise<LifeItemView[]> {
  const rows = await prisma.lifeItem.findMany({ orderBy: [{ kind: "asc" }, { order: "asc" }, { createdAt: "asc" }] });
  return rows.map((r) => ({ id: r.id, kind: r.kind as LifeKind, text: r.text, priority: r.priority, note: r.note, done: r.done, order: r.order }));
}

/** Bugünün (UTC gün anahtarı) rutin işaretleri */
export async function getRoutineToday(today: Date) {
  const [items, checks] = await Promise.all([
    prisma.lifeItem.findMany({ where: { kind: "routine" }, orderBy: { order: "asc" } }),
    prisma.lifeRoutineCheck.findMany({ where: { date: today } }),
  ]);
  const checked = new Set(checks.map((c) => c.itemId));
  return items.map((i) => ({ id: i.id, text: i.text, done: checked.has(i.id) }));
}
