export interface HomeSection { id: string; label: string; half?: boolean }

/** Ana sayfadaki düzenlenebilir bölümler (varsayılan sıra). `half`: yan yana iki bölüm yarım genişlikte yerleşir. */
export const HOME_SECTIONS: HomeSection[] = [
  { id: "reading", label: "Kitap okuma borcu", half: true },
  { id: "routine", label: "Rutinim", half: true },
  { id: "moon", label: "Bu haftanın Ay takvimi" },
  { id: "learning", label: "Kendi Eğitimlerim" },
  { id: "lang", label: "Yabancı Dil" },
  { id: "shortcuts", label: "Kısayol kartları" },
  { id: "trend", label: "Günlük tamamlanma grafiği" },
  { id: "habits", label: "Alışkanlık hedefleri" },
];

export interface HomeLayout { order: string[]; hidden: string[] }
export const HOME_LAYOUT_KEY = "settings:homeLayout";

/** Kayıtlı düzeni bilinen bölümlerle birleştirir: bilinmeyenler atılır, yeni bölümler sona eklenir. */
export function resolveHomeLayout(saved?: Partial<HomeLayout> | null): { order: string[]; hidden: Set<string> } {
  const known = new Set(HOME_SECTIONS.map((s) => s.id));
  const order = (saved?.order ?? []).filter((id) => known.has(id));
  for (const s of HOME_SECTIONS) if (!order.includes(s.id)) order.push(s.id);
  return { order, hidden: new Set((saved?.hidden ?? []).filter((id) => known.has(id))) };
}
