"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa", icon: LayoutDashboard, accent: "var(--accent-blue)" },
  { href: "/gunluk", label: "Günlük Program", icon: CalendarDays, accent: "var(--accent-mint)" },
  { href: "/icerik", label: "İçerik Fikirleri", icon: Lightbulb, accent: "var(--accent-yellow)" },
  { href: "/egitimler", label: "Eğitimler", icon: GraduationCap, accent: "var(--accent-blue)" },
  { href: "/aliskanliklar", label: "Alışkanlıklar", icon: ListChecks, accent: "var(--accent-lilac)" },
  { href: "/saglik", label: "Sağlık", icon: HeartPulse, accent: "var(--accent-pink)" },
  { href: "/astroloji", label: "Astroloji", icon: Sparkles, accent: "var(--accent-lilac)" },
  { href: "/ay-takvimi", label: "Ay Takvimi", icon: Moon, accent: "var(--accent-lilac)" },
  { href: "/yapboz", label: "Yapboz", icon: Puzzle, accent: "var(--accent-yellow)" },
  { href: "/kendi-egitimlerim", label: "Kendi Eğitimlerim", icon: Library, accent: "var(--accent-lilac)" },
  { href: "/maliyet", label: "Maliyet Hesaplama", icon: Calculator, accent: "var(--accent-mint)" },
  { href: "/parametreler", label: "Parametreler", icon: SlidersHorizontal, accent: "var(--accent-mint)" },
  { href: "/ayarlar", label: "Ayarlar", icon: Settings, accent: "var(--accent-pink)" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-card-border bg-background/90 px-4 py-3 backdrop-blur md:hidden">
        <Link href="/" onClick={() => setOpen(false)} className="text-lg font-semibold">
          Kişisel Panel
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 hover:bg-card"
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <nav
        className={`${open ? "flex" : "hidden"} md:flex flex-col gap-1 border-r border-card-border bg-card p-4 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0`}
      >
        <Link href="/" onClick={() => setOpen(false)} className="mb-6 hidden px-2 md:block">
          <span className="ag-tag mb-2 w-fit"><span className="ag-dot" /> Kişisel Panel</span>
          <h1 className="text-xl font-medium">Merve</h1>
        </Link>
        {NAV_ITEMS.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-full px-3.5 py-2.5 text-sm font-medium transition-colors ${
                active ? "bg-[#111812] text-white" : "hover:bg-background"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
