import { motion } from 'framer-motion';

interface LanternProps {
  className?: string;
  size?: number;
  delay?: number;
  sway?: boolean;
}

/**
 * Animated red lantern with gold accents and subtle sway.
 */
export function Lantern({
  className = '',
  size = 48,
  delay = 0,
  sway = true,
}: LanternProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size * 1.5 }}
      animate={
        sway
          ? {
              rotate: [-4, 4, -4],
              y: [0, 3, 0],
            }
          : undefined
      }
      transition={{
        duration: 3.5 + delay * 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 96" fill="none" className="w-full h-full drop-shadow-md">
        {/* Hanging string */}
        <line x1="32" y1="0" x2="32" y2="8" stroke="#D4AF37" strokeWidth="1.5" />
        {/* Top knot */}
        <ellipse cx="32" cy="10" rx="7" ry="4.5" fill="#FFD700" />
        <rect x="29.5" y="12" width="5" height="7" rx="1" fill="#D4AF37" />
        {/* Lantern body */}
        <ellipse cx="32" cy="30" rx="22" ry="11" fill="#C8102E" />
        <rect x="10" y="30" width="44" height="38" fill="#C8102E" />
        <ellipse cx="32" cy="68" rx="22" ry="11" fill="#8B0000" />
        {/* Gold ribs */}
        <path d="M12 32 Q32 22 52 32" stroke="#FFD700" strokeWidth="1.3" fill="none" />
        <path d="M12 42 Q32 33 52 42" stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.75" />
        <path d="M12 52 Q32 43 52 52" stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.75" />
        <path d="M12 62 Q32 53 52 62" stroke="#FFD700" strokeWidth="1.3" fill="none" />
        {/* Center medallion */}
        <circle cx="32" cy="48" r="9" fill="#6B0000" stroke="#FFD700" strokeWidth="1.2" />
        <text
          x="32"
          y="52.5"
          textAnchor="middle"
          fontSize="11"
          fill="#FFD700"
          fontFamily="serif"
          fontWeight="600"
        >
          福
        </text>
        {/* Tassel */}
        <line x1="32" y1="79" x2="32" y2="86" stroke="#FFD700" strokeWidth="1.5" />
        <path d="M27 86 Q32 95 37 86" stroke="#FFD700" strokeWidth="1.4" fill="none" />
        <path d="M25 88 Q32 98 39 88" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <circle cx="32" cy="86" r="2.2" fill="#FFD700" />
      </svg>
    </motion.div>
  );
}
