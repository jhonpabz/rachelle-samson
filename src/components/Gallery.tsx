import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPhotos } from '../data/weddingData';
import type { GalleryPhoto } from '../types';

/**
 * Prenup photo gallery — responsive grid with lightbox.
 * Local paths fall back to Unsplash on error.
 */
export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryPhotos.length
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKey);
    // Prevent body scroll while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <section id="gallery" className="relative py-14 sm:py-20 paper-texture overflow-hidden">
      {/* Faint 囍 watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[200px] text-imperial-red leading-none">囍</span>
      </div>

      {/* Section header */}
      <div className="relative text-center px-4 mb-10">
        <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
          Memories
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
          Prenup Gallery
        </h2>
        <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mt-4 text-sm text-ink-muted max-w-md mx-auto">
          Mga sandaling puno ng pag-ibig bago ang aming espesyal na araw
        </p>
      </div>

      {/* Responsive staggered grid */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {galleryPhotos.map((photo, index) => (
            <GalleryTile
              key={photo.id}
              photo={photo}
              index={index}
              onOpen={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photo={galleryPhotos[lightboxIndex]}
            index={lightboxIndex}
            total={galleryPhotos.length}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── Grid tile with fallback ───────────────────────────────── */

function GalleryTile({
  photo,
  index,
  onOpen,
}: {
  photo: GalleryPhoto;
  index: number;
  onOpen: () => void;
}) {
  const [src, setSrc] = useState(photo.src);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className={`group relative aspect-[4/5] overflow-hidden rounded-md border-2 border-gold/50 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 ${
        index % 3 === 1 ? 'md:translate-y-4' : ''
      }`}
      style={{
        boxShadow:
          '0 0 0 1px rgba(255,215,0,0.25), 0 6px 20px rgba(200,16,46,0.1)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      aria-label={`View photo: ${photo.alt}`}
    >
      <img
        src={src}
        alt={photo.alt}
        onError={() => {
          if (src !== photo.fallbackSrc) setSrc(photo.fallbackSrc);
        }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {photo.caption && (
        <p className="absolute bottom-0 left-0 right-0 p-3 text-left text-xs sm:text-sm text-white/95 font-display tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
          {photo.caption}
        </p>
      )}

      {/* Always-visible subtle gold corner brackets */}
      <div className="pointer-events-none absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-gold/60 group-hover:border-gold transition-colors" />
      <div className="pointer-events-none absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-gold/60 group-hover:border-gold transition-colors" />
      <div className="pointer-events-none absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-gold/60 group-hover:border-gold transition-colors" />
      <div className="pointer-events-none absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-gold/60 group-hover:border-gold transition-colors" />
    </motion.button>
  );
}

/* ─── Full-screen lightbox ──────────────────────────────────── */

function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  photo: GalleryPhoto;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [src, setSrc] = useState(photo.src);

  // Reset src when photo changes
  useEffect(() => {
    setSrc(photo.src);
  }, [photo.src]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 rounded-full text-white/80 hover:text-gold hover:bg-white/10 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 z-20 p-2 rounded-full text-white/70 hover:text-gold hover:bg-white/10 transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 z-20 p-2 rounded-full text-white/70 hover:text-gold hover:bg-white/10 transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>

      {/* Image */}
      <motion.div
        key={photo.id}
        className="relative max-w-[90vw] max-h-[82vh] flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={photo.alt}
          onError={() => {
            if (src !== photo.fallbackSrc) setSrc(photo.fallbackSrc);
          }}
          className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-gold/30"
        />

        {(photo.caption || true) && (
          <div className="mt-4 text-center">
            {photo.caption && (
              <p className="font-display text-gold/90 text-sm sm:text-base tracking-wide">
                {photo.caption}
              </p>
            )}
            <p className="mt-1 text-white/50 text-xs tracking-widest">
              {index + 1} / {total}
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
