import { couple } from '../data/weddingData';
import { Lantern } from './decorations/Lantern';

export function Footer() {
  return (
    <footer className="relative py-14 text-center overflow-hidden red-section">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000] to-[#6B0A18]" />
      <div className="absolute inset-0 opacity-10 cloud-pattern pointer-events-none" />

      <Lantern className="absolute bottom-4 left-6 opacity-40 hidden sm:block" size={28} delay={0.5} />
      <Lantern className="absolute bottom-4 right-6 opacity-40 hidden sm:block" size={28} delay={1.1} />

      <div className="relative z-10">
        <p
          className="font-display text-4xl text-gold mb-4 select-none"
          style={{ textShadow: '0 0 20px rgba(255,215,0,0.3)' }}
          aria-hidden="true"
        >
          囍
        </p>
        <p className="font-display text-sm tracking-[0.25em] text-gold/90 uppercase mb-2">
          {couple.bride} & {couple.groom}
        </p>
        <p className="text-xs text-gold/55 tracking-wide">
          {couple.dateEnglish} · With love & gratitude
        </p>
        <div className="mt-6 mx-auto h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </footer>
  );
}
