import {
  LayoutDashboard,
  CalendarDays,
  Lightbulb,
  GraduationCap,
  Sparkles,
  Moon,
  HeartPulse,
  ListChecks,
  Settings,
  SlidersHorizontal,
  Puzzle,
  Calculator,
  Library,
  Languages,
  Target,
} from "lucide-react";

export const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa", icon: LayoutDashboard, accent: "var(--accent-blue)" },
  { href: "/gunluk", label: "Günlük Program", icon: CalendarDays, accent: "var(--accent-mint)" },
  { href: "/icerik", label: "İçerik Fikirleri", icon: Lightbulb, accent: "var(--accent-yellow)" },
  { href: "/egitimler", label: "Eğitimler", icon: GraduationCap, accent: "var(--accent-blue)" },
  { href: "/rutinim", label: "Rutin & Hedefler", icon: Target, accent: "var(--accent-yellow)" },
  { href: "/aliskanliklar", label: "Alışkanlıklar", icon: ListChecks, accent: "var(--accent-lilac)" },
  { href: "/saglik", label: "Sağlık", icon: HeartPulse, accent: "var(--accent-pink)" },
  { href: "/astroloji", label: "Astroloji", icon: Sparkles, accent: "var(--accent-lilac)" },
  { href: "/ay-takvimi", label: "Ay Takvimi", icon: Moon, accent: "var(--accent-lilac)" },
  { href: "/yapboz", label: "Yapboz", icon: Puzzle, accent: "var(--accent-yellow)" },
  { href: "/dil", label: "Yabancı Dil", icon: Languages, accent: "var(--accent-blue)" },
  { href: "/kendi-egitimlerim", label: "Kendi Eğitimlerim", icon: Library, accent: "var(--accent-lilac)" },
  { href: "/maliyet", label: "Maliyet Hesaplama", icon: Calculator, accent: "var(--accent-mint)" },
  { href: "/parametreler", label: "Parametreler", icon: SlidersHorizontal, accent: "var(--accent-mint)" },
  { href: "/ayarlar", label: "Ayarlar", icon: Settings, accent: "var(--accent-pink)" },
];

export type NavItem = (typeof NAV_ITEMS)[number];

/** Kayıtlı sıraya göre menüyü dizer; bilinmeyenleri atlar, listede olmayan yeni öğeleri varsayılan sırasıyla sona ekler. */
export function applyNavOrder(order: string[] | null | undefined): NavItem[] {
  if (!order || order.length === 0) return NAV_ITEMS;
  const byHref = new Map(NAV_ITEMS.map((i) => [i.href, i]));
  const out: NavItem[] = [];
  for (const h of order) {
    const it = byHref.get(h);
    if (it) { out.push(it); byHref.delete(h); }
  }
  for (const it of NAV_ITEMS) if (byHref.has(it.href)) out.push(it);
  return out;
}
