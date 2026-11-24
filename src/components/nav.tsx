"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { applyNavOrder } from "@/lib/nav-items";

export function Nav({ order }: { order?: string[] }) {
  const items = applyNavOrder(order);
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
        className={`${open ? "flex" : "hidden"} md:flex flex-col gap-1 border-r border-card-border bg-card p-4 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:overflow-y-auto md:overscroll-contain`}
      >
        <Link href="/" onClick={() => setOpen(false)} className="mb-6 hidden px-2 md:block">
          <span className="ag-tag mb-2 w-fit"><span className="ag-dot" /> Kişisel Panel</span>
          <h1 className="text-xl font-medium">Merve</h1>
        </Link>
        {items.map((item) => {
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
