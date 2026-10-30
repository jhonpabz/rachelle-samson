import { SectionCard } from './SectionCard';
import { welcomeMessage } from '../data/weddingData';
import { CloudMotif } from './decorations/CloudMotif';

/**
 * Welcome / Love Story — Parchment theme with red seal accent.
 */
export function WelcomeCard() {
  return (
    <div className="relative py-14 sm:py-20 paper-texture overflow-hidden">
      <CloudMotif className="absolute top-8 right-6 w-24 text-imperial-red/10 hidden sm:block" />
      <CloudMotif className="absolute bottom-10 left-4 w-20 text-gold/15 hidden sm:block" />

      <SectionCard variant="parchment">
        <header className="text-center mb-7">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
            Welcome
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
            {welcomeMessage.title}
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>

        <div className="space-y-5 text-ink-muted text-sm sm:text-[15px] leading-relaxed text-center max-w-lg mx-auto">
          {welcomeMessage.body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Traditional red seal (Yinjian-style) */}
        <div className="flex justify-center my-6">
          <div
            className="w-14 h-14 rounded-sm bg-imperial-red flex items-center justify-center shadow-md border border-gold/40 rotate-[-6deg]"
            aria-hidden="true"
          >
            <span className="font-display text-gold text-2xl leading-none">囍</span>
          </div>
        </div>

        <blockquote className="pt-2 border-t border-gold/25 text-center">
          <p className="font-display text-sm sm:text-base text-imperial-red/90 italic leading-relaxed whitespace-pre-line">
            {welcomeMessage.poem}
          </p>
        </blockquote>
      </SectionCard>
    </div>
  );
}
