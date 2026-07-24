import Link from "next/link";
import { type LucideIcon } from "lucide-react";

export function DashboardCard({
  href,
  icon: Icon,
  title,
  accent,
  children,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="card flex flex-col gap-2 p-4 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ background: accent }}>
          <Icon size={15} />
        </span>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-muted">{children}</div>
    </Link>
  );
}
