"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Lightbulb,
  GraduationCap,
  Sparkles,
  HeartPulse,
  ListChecks,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa", icon: LayoutDashboard, accent: "var(--accent-yellow)" },
  { href: "/gunluk", label: "Günlük Program", icon: CalendarDays, accent: "var(--accent-mint)" },
  { href: "/icerik", label: "İçerik Fikirleri", icon: Lightbulb, accent: "var(--accent-yellow)" },
  { href: "/egitimler", label: "Eğitimler", icon: GraduationCap, accent: "var(--accent-blue)" },
  { href: "/aliskanliklar", label: "Alışkanlıklar", icon: ListChecks, accent: "var(--accent-lilac)" },
  { href: "/saglik", label: "Sağlık", icon: HeartPulse, accent: "var(--accent-pink)" },
  { href: "/astroloji", label: "Astroloji", icon: Sparkles, accent: "var(--accent-lilac)" },
  { href: "/ayarlar", label: "Ayarlar", icon: Settings, accent: "var(--accent-pink)" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-card-border bg-background/90 px-4 py-3 backdrop-blur md:hidden">
        <span className="text-lg font-semibold">Kişisel Panel</span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 hover:bg-card"
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <nav
        className={`${open ? "flex" : "hidden"} md:flex flex-col gap-1 border-r border-card-border bg-card/60 p-4 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0`}
      >
        <div className="mb-6 hidden px-2 md:block">
          <p className="text-sm text-muted">Kişisel Panel</p>
          <h1 className="text-xl font-semibold">🌙 Merve</h1>
        </div>
        {NAV_ITEMS.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active ? "shadow-sm" : "hover:bg-card"
              }`}
              style={active ? { background: item.accent } : undefined}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
