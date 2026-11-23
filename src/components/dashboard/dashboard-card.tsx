import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export function DashboardCard({
  href,
  icon: Icon,
  title,
  children,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="ag-stat group min-h-[9rem] transition-colors hover:bg-white">
      <div className="flex items-start justify-between">
        <span className="ag-stat-icon">
          <Icon size={18} />
        </span>
        <span className="ag-icon-btn opacity-70 group-hover:opacity-100">
          <ArrowUpRight size={14} />
        </span>
      </div>
      <h3 className="text-base font-medium">{title}</h3>
      <div className="text-sm ag-muted">{children}</div>
    </Link>
  );
}
