import { useState } from 'react';
import { motion } from 'framer-motion';
import type { BannerImage as BannerImageType } from '../types';
import { CornerLattice } from './decorations/CornerLattice';

interface BannerImageProps {
  banner: BannerImageType;
  /** Optional overlay gradient intensity */
  darkOverlay?: boolean;
}

/**
 * Full-width prenup banner with gold lattice frame accents
 * and graceful Unsplash fallback on local image error.
 */
export function BannerImage({ banner, darkOverlay = true }: BannerImageProps) {
  const [src, setSrc] = useState(banner.src);

  return (
    <motion.section
      className="relative w-full h-[48vh] min-h-[260px] max-h-[520px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={src}
        alt={banner.alt}
        onError={() => {
          if (src !== banner.fallbackSrc) {
            setSrc(banner.fallbackSrc);
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {darkOverlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
          aria-hidden="true"
        />
      )}

      {/* Gold frame lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

      {/* Corner lattice ornaments */}
      <CornerLattice
        position="tl"
        color="#FFD700"
        size={32}
        className="opacity-75 m-2"
      />
      <CornerLattice
        position="tr"
        color="#FFD700"
        size={32}
        className="opacity-75 m-2"
      />
      <CornerLattice
        position="bl"
        color="#FFD700"
        size={32}
        className="opacity-75 m-2"
      />
      <CornerLattice
        position="br"
        color="#FFD700"
        size={32}
        className="opacity-75 m-2"
      />
    </motion.section>
  );
}
