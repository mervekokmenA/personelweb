import { useId } from "react";

/** Karanlık yüzdeki sabit "yıldız" noktaları (cx, cy, r, opaklık) */
const STARS: [number, number, number, number][] = [
  [22, 30, 1.3, 0.9], [34, 18, 0.9, 0.7], [70, 22, 1.2, 0.85], [80, 40, 0.8, 0.6], [16, 52, 1.0, 0.7],
  [28, 70, 1.4, 0.9], [44, 84, 0.9, 0.7], [62, 76, 1.2, 0.8], [76, 66, 0.9, 0.65], [52, 36, 0.8, 0.55],
  [40, 54, 1.1, 0.75], [64, 52, 0.7, 0.5], [88, 56, 0.8, 0.6], [12, 38, 0.7, 0.55], [54, 12, 0.8, 0.6],
];

/** Aydınlık yüzdeki sulu boya lekeleri (cx, cy, rx, ry, opaklık) */
const BLOTCHES: [number, number, number, number, number][] = [
  [40, 34, 13, 9, 0.28], [62, 46, 10, 14, 0.22], [34, 62, 14, 10, 0.25], [66, 72, 9, 7, 0.3],
  [52, 22, 7, 5, 0.2], [24, 46, 6, 8, 0.2], [76, 28, 6, 6, 0.24], [48, 82, 8, 5, 0.22],
];

/**
 * Ay evresi simgesi. angle: Güneş–Ay boylam farkı (0 = Yeni Ay, 180 = Dolunay).
 * Kuzey yarımküre görünümü: büyüyen Ay'ın sağ tarafı, küçülen Ay'ın sol tarafı aydınlık.
 * Renkler: koyu mor-lacivert yıldızlı gece + gümüş gri, sulu boya benzeri Ay.
 */
export function MoonIcon({
  angle,
  size = 40,
  title,
}: {
  angle: number;
  size?: number;
  title?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const a360 = ((angle % 360) + 360) % 360;
  const waxing = a360 < 180;
  const a = waxing ? a360 : 360 - a360; // 0..180
  const r = 46;
  const cos = Math.cos((a * Math.PI) / 180);
  const rx = Math.abs(cos) * r;
  // Hilal (a<90): terminatör sağa; şişkin (a>90): sola doğru bombeli
  const sweep = a < 90 ? 0 : 1;
  const lit = `M 50 ${50 - r} A ${r} ${r} 0 0 1 50 ${50 + r} A ${rx.toFixed(2)} ${r} 0 0 ${sweep} 50 ${50 - r} Z`;
  const nearNew = a < 1.5;
  const flip = waxing ? undefined : "translate(100 0) scale(-1 1)";

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label={title ?? "Ay evresi"} className="shrink-0">
      {title && <title>{title}</title>}
      <defs>
        <radialGradient id={`n${uid}`} cx="35%" cy="30%" r="85%">
          <stop offset="0%" stopColor="#4a3b6e" />
          <stop offset="55%" stopColor="#2a2146" />
          <stop offset="100%" stopColor="#15112a" />
        </radialGradient>
        <radialGradient id={`s${uid}`} cx="40%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#e6e8e4" />
          <stop offset="60%" stopColor="#bfc4bf" />
          <stop offset="100%" stopColor="#8e958f" />
        </radialGradient>
        <clipPath id={`d${uid}`}>
          <circle cx="50" cy="50" r={r} />
        </clipPath>
        <clipPath id={`l${uid}`}>
          <path d={lit} transform={flip} />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r={r} fill={`url(#n${uid})`} />
      <g clipPath={`url(#d${uid})`}>
        {STARS.map(([x, y, s, o], i) => (
          <circle key={i} cx={x} cy={y} r={s} fill="#ffffff" opacity={o} />
        ))}
      </g>
      {!nearNew && (
        <g>
          <path d={lit} fill={`url(#s${uid})`} transform={flip} />
          <g clipPath={`url(#l${uid})`}>
            {BLOTCHES.map(([x, y, rxx, ryy, o], i) => (
              <ellipse key={i} cx={x} cy={y} rx={rxx} ry={ryy} fill="#6d746f" opacity={o} />
            ))}
          </g>
        </g>
      )}
      <circle cx="50" cy="50" r={r} fill="none" stroke="#b9b4d6" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}
