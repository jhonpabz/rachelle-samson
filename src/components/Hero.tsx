import { motion } from 'framer-motion';
import { couple } from '../data/weddingData';
import { Lantern } from './decorations/Lantern';
import { CloudMotif } from './decorations/CloudMotif';

/**
 * Hero Banner — Deep Imperial Red theme.
 * Glowing gold 囍, elegant gold serif names, floating lanterns.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 red-section"
    >
      {/* Deep red gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000] via-[#C8102E] to-[#6B0A18]" />

      {/* Cloud pattern overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none cloud-pattern" />

      {/* Soft gold radial glow behind monogram */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 42%, rgba(255,215,0,0.12) 0%, transparent 55%)',
        }}
      />

      {/* Floating lanterns — top corners */}
      <Lantern
        className="absolute top-6 left-4 sm:left-10 md:left-16 opacity-90"
        size={52}
        delay={0}
      />
      <Lantern
        className="absolute top-8 right-4 sm:right-10 md:right-16 opacity-90"
        size={48}
        delay={0.6}
      />
      {/* Smaller distant lanterns */}
      <Lantern
        className="absolute top-28 left-[18%] opacity-40 hidden sm:block"
        size={28}
        delay={1.2}
      />
      <Lantern
        className="absolute top-32 right-[20%] opacity-35 hidden sm:block"
        size={24}
        delay={1.8}
      />

      {/* Decorative cloud motifs */}
      <CloudMotif className="absolute bottom-16 left-8 w-28 text-gold hidden md:block" opacity={0.2} />
      <CloudMotif className="absolute bottom-20 right-10 w-24 text-gold hidden md:block" opacity={0.18} />

      {/* Gold edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        {/* Monogram with glow */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/80" />
          <motion.span
            className="text-gold font-display text-6xl sm:text-7xl leading-none select-none"
            style={{
              textShadow:
                '0 0 30px rgba(255,215,0,0.45), 0 0 60px rgba(255,215,0,0.2), 0 4px 12px rgba(0,0,0,0.4)',
            }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            {couple.monogram}
          </motion.span>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/80" />
        </motion.div>

        <motion.p
          className="font-display text-xs sm:text-sm tracking-[0.35em] uppercase text-gold/80 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Together with their families
        </motion.p>

        {/* Names — gold serif on red */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-gold leading-[1.15] mb-2"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          {couple.bride}
        </motion.h1>

        <motion.p
          className="font-display text-xl sm:text-2xl text-gold/70 tracking-widest my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-gold leading-[1.15] mb-8"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          {couple.groom}
        </motion.h1>

        <motion.div
          className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />

        <motion.p
          className="font-display text-base sm:text-lg text-gold/90 tracking-wide mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {couple.dayOfWeek} · {couple.date}
        </motion.p>

        <motion.p
          className="text-sm text-gold/60 max-w-md mx-auto leading-relaxed italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {couple.tagline}
        </motion.p>
      </div>
    </section>
  );
}
