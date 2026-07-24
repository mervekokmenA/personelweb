interface DonutChartProps {
  percent: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function DonutChart({ percent, color, size = 72, strokeWidth = 8, label }: DonutChartProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);
  const center = size / 2;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--card-border)"
          strokeWidth={strokeWidth}
        />
        {clamped > 0 && (
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        )}
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
        style={{ color: "var(--foreground)" }}
      >
        {label ?? `${Math.round(clamped)}%`}
      </div>
    </div>
  );
}
