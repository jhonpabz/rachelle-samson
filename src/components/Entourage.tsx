import { motion } from 'framer-motion';
import { SectionCard } from './SectionCard';
import { entourage } from '../data/weddingData';
import { Lantern } from './decorations/Lantern';
import { CloudMotif } from './decorations/CloudMotif';

/**
 * Entourage — Alternating red & gold themed cards on a soft cream band
 * with red section header accents.
 */
export function Entourage() {
  return (
    <div className="relative py-16 sm:py-24 paper-texture overflow-hidden">
      {/* Subtle side decorations */}
      <Lantern
        className="absolute top-6 left-2 opacity-50 hidden lg:block"
        size={32}
        delay={0.4}
      />
      <Lantern
        className="absolute top-6 right-2 opacity-50 hidden lg:block"
        size={32}
        delay={1}
      />
      <CloudMotif className="absolute top-1/3 left-0 w-20 text-imperial-red/10 hidden md:block" />
      <CloudMotif className="absolute bottom-1/4 right-0 w-16 text-imperial-red/10 hidden md:block" />

      <div className="text-center px-4 mb-12">
        <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
          With Love
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
          The Entourage
        </h2>
        <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mt-3 text-gold font-display text-2xl select-none" aria-hidden="true">
          囍
        </p>
      </div>

      <div className="space-y-10">
        {entourage.map((group, groupIndex) => {
          // Alternate red / parchment cards for visual rhythm
          const variant = groupIndex % 2 === 0 ? 'red' : 'parchment';

          return (
            <SectionCard key={group.id} variant={variant}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              >
                <header className="text-center mb-6">
                  <h3
                    className={`font-display text-xl sm:text-2xl ${
                      variant === 'red' ? 'text-gold' : 'text-imperial-red'
                    }`}
                  >
                    {group.title}
                  </h3>
                  {group.subtitle && (
                    <p
                      className={`mt-1 text-sm tracking-wide ${
                        variant === 'red' ? 'text-gold/80' : 'text-gold/90'
                      }`}
                    >
                      {group.subtitle}
                    </p>
                  )}
                  <div
                    className={`mt-3 mx-auto h-px w-12 bg-gradient-to-r from-transparent to-transparent ${
                      variant === 'red' ? 'via-gold/70' : 'via-gold/60'
                    }`}
                  />
                </header>

                <ul className="space-y-2.5 text-center">
                  {group.members.map((member) => (
                    <li
                      key={member}
                      className={`text-[15px] sm:text-base leading-relaxed ${
                        variant === 'red' ? 'text-gold/90' : 'text-ink'
                      }`}
                    >
                      {member}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </SectionCard>
          );
        })}
      </div>
    </div>
  );
}
