/**
 * Traditional Chinese red envelope (Hongbao / Angbao) illustration.
 */
export function RedPacket({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 110"
      fill="none"
      aria-hidden="true"
    >
      {/* Envelope body */}
      <rect
        x="8"
        y="18"
        width="64"
        height="84"
        rx="4"
        fill="#C8102E"
        stroke="#FFD700"
        strokeWidth="2"
      />
      {/* Top flap */}
      <path
        d="M8 22 L40 48 L72 22"
        fill="#A00D24"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Gold border accents */}
      <rect
        x="14"
        y="52"
        width="52"
        height="42"
        rx="2"
        stroke="#FFD700"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      {/* 囍 symbol */}
      <text
        x="40"
        y="82"
        textAnchor="middle"
        fontSize="28"
        fill="#FFD700"
        fontFamily="serif"
        fontWeight="700"
      >
        囍
      </text>
      {/* Top seal */}
      <circle cx="40" cy="12" r="8" fill="#8B0000" stroke="#FFD700" strokeWidth="1.5" />
      <text
        x="40"
        y="16"
        textAnchor="middle"
        fontSize="9"
        fill="#FFD700"
        fontFamily="serif"
      >
        福
      </text>
    </svg>
  );
}
