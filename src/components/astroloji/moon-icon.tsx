/**
 * Ay evresi simgesi. angle: Güneş–Ay boylam farkı (0 = Yeni Ay, 180 = Dolunay).
 * Kuzey yarımküre görünümü: büyüyen Ay'ın sağ tarafı, küçülen Ay'ın sol tarafı aydınlık.
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

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={title ?? "Ay evresi"}
      className="shrink-0"
    >
      {title && <title>{title}</title>}
      <circle cx="50" cy="50" r={r} fill="#2f3347" stroke="#cbc7b8" strokeWidth="1.5" />
      {!nearNew && (
        <path d={lit} fill="#f6e7b4" transform={waxing ? undefined : "translate(100 0) scale(-1 1)"} />
      )}
    </svg>
  );
}
