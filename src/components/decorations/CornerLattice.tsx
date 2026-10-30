interface CornerLatticeProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
  className?: string;
  color?: string;
  size?: number;
}

/**
 * Traditional Chinese corner lattice / bracket ornament.
 */
export function CornerLattice({
  position,
  className = '',
  color = 'currentColor',
  size = 40,
}: CornerLatticeProps) {
  const posMap = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 rotate-90',
    bl: 'bottom-0 left-0 -rotate-90',
    br: 'bottom-0 right-0 rotate-180',
  };

  return (
    <svg
      className={`pointer-events-none absolute ${posMap[position]} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ color }}
    >
      {/* Outer L */}
      <path
        d="M3 3 L3 22 M3 3 L22 3"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      {/* Inner L */}
      <path
        d="M8 8 L8 16 M8 8 L16 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Accent ticks */}
      <path
        d="M3 26 L10 26 M26 3 L26 10"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      {/* Dot */}
      <circle cx="8" cy="8" r="1.75" fill="currentColor" />
      {/* Small flourish */}
      <path
        d="M12 3 Q16 3 16 7"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
