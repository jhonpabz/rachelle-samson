import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { CornerLattice } from './decorations/CornerLattice';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Slightly larger padding for form-style cards */
  large?: boolean;
  /**
   * Visual theme:
   * - parchment: cream background, red/gold text (default)
   * - red: deep imperial red background, gold text
   */
  variant?: 'parchment' | 'red';
}

/**
 * Reusable thematic card with Chinese corner lattice ornaments.
 */
export function SectionCard({
  children,
  className = '',
  id,
  large = false,
  variant = 'parchment',
}: SectionCardProps) {
  const isRed = variant === 'red';

  return (
    <motion.section
      id={id}
      className={`relative mx-auto max-w-2xl px-4 sm:px-6 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`
          relative overflow-hidden rounded-xl
          border-2
          ${
            isRed
              ? 'bg-gradient-to-br from-[#C8102E] via-[#A00D24] to-[#8B0000] border-gold shadow-[0_0_0_1px_rgba(255,215,0,0.4),0_16px_48px_-8px_rgba(0,0,0,0.35),inset_0_0_50px_rgba(255,215,0,0.06)]'
              : 'bg-[#FFFDF7] border-gold shadow-[0_0_0_1px_rgba(255,215,0,0.35),0_12px_40px_-8px_rgba(200,16,46,0.12),inset_0_0_40px_rgba(255,215,0,0.04)]'
          }
          ${large ? 'p-7 sm:p-10' : 'p-6 sm:p-8'}
        `}
      >
        {/* Chinese corner lattice ornaments */}
        <CornerLattice
          position="tl"
          color={isRed ? '#FFD700' : '#D4AF37'}
          size={36}
          className="opacity-80"
        />
        <CornerLattice
          position="tr"
          color={isRed ? '#FFD700' : '#D4AF37'}
          size={36}
          className="opacity-80"
        />
        <CornerLattice
          position="bl"
          color={isRed ? '#FFD700' : '#D4AF37'}
          size={36}
          className="opacity-80"
        />
        <CornerLattice
          position="br"
          color={isRed ? '#FFD700' : '#D4AF37'}
          size={36}
          className="opacity-80"
        />

        {/* Subtle inner border */}
        <div
          className={`pointer-events-none absolute inset-3 rounded-lg border ${
            isRed ? 'border-gold/30' : 'border-gold/25'
          }`}
        />

        {/* Faint 囍 watermark for red cards */}
        {isRed && (
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07] select-none"
            aria-hidden="true"
          >
            <span className="font-display text-[140px] text-gold leading-none">囍</span>
          </div>
        )}

        <div className="relative z-10">{children}</div>
      </div>
    </motion.section>
  );
}
