"use client";

import { useState } from "react";

export interface WeightTrendPoint {
  date: Date;
  weightKg: number;
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
}

export function WeightTrendChart({
  points,
  targetWeightKg,
}: {
  points: WeightTrendPoint[];
  targetWeightKg: number | null;
}) {
  const [hover, setHover] = useState<number | null>(null);

  if (points.length < 2) {
    return (
      <p className="text-sm text-muted">
        Trend grafiği için en az 2 kilo kaydı gerekiyor.
      </p>
    );
  }

  const width = 600;
  const height = 180;
  const padX = 12;
  const padTop = 16;
  const padBottom = 24;

  const weights = points.map((p) => p.weightKg);
  const allValues = targetWeightKg ? [...weights, targetWeightKg] : weights;
  const minW = Math.min(...allValues);
  const maxW = Math.max(...allValues);
  const range = maxW - minW || 1;
  const yPad = range * 0.15;
  const yMin = minW - yPad;
  const yMax = maxW + yPad;

  const plotW = width - padX * 2;
  const plotH = height - padTop - padBottom;

  const x = (i: number) => padX + (i / (points.length - 1)) * plotW;
  const y = (w: number) => padTop + (1 - (w - yMin) / (yMax - yMin)) * plotH;

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(p.weightKg)}`).join(" ");
  const targetY = targetWeightKg !== null ? y(targetWeightKg) : null;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" preserveAspectRatio="none">
        {targetY !== null && (
          <>
            <line
              x1={padX}
              x2={width - padX}
              y1={targetY}
              y2={targetY}
              stroke="var(--accent-pink)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
            <text x={width - padX} y={targetY - 5} textAnchor="end" fontSize={10} fill="var(--accent-pink)">
              Hedef {targetWeightKg} kg
            </text>
          </>
        )}

        <path d={linePath} fill="none" stroke="var(--accent-mint)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

        {points.map((p, i) => (
          <g key={i}>
            <circle cx={x(i)} cy={y(p.weightKg)} r={hover === i ? 5 : 3} fill="var(--accent-mint)" />
            {/* Büyütülmüş görünmez hedef alanı — dokunma/mouse için daha kolay hedef */}
            <circle
              cx={x(i)}
              cy={y(p.weightKg)}
              r={10}
              fill="transparent"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover((h) => (h === i ? null : h))}
              onTouchStart={() => setHover(i)}
            />
          </g>
        ))}

        {(() => {
          const step = points.length > 8 ? Math.ceil(points.length / 6) : 1;
          return points.map((p, i) =>
            i % step === 0 || i === points.length - 1 ? (
              <text key={i} x={x(i)} y={height - 6} textAnchor="middle" fontSize={9} fill="var(--muted)">
                {fmtDate(p.date)}
              </text>
            ) : null
          );
        })()}
      </svg>

      {hover !== null && (
        <div
          className="pointer-events-none absolute rounded-lg border border-card-border bg-background px-2 py-1 text-xs shadow-sm"
          style={{
            left: `${(x(hover) / width) * 100}%`,
            top: `${(y(points[hover].weightKg) / height) * 100}%`,
            transform: "translate(-50%, -130%)",
          }}
        >
          <strong>{points[hover].weightKg} kg</strong>
          <span className="ml-1 text-muted">{fmtDate(points[hover].date)}</span>
        </div>
      )}
    </div>
  );
}
