import { SectionCard } from './SectionCard';
import { giftGuide } from '../data/weddingData';
import { RedPacket } from './decorations/RedPacket';
import { Lantern } from './decorations/Lantern';
import { CloudMotif } from './decorations/CloudMotif';

/**
 * Gift Guide / Angbao — Rich Red theme with red packet illustration.
 */
export function GiftGuide() {
  return (
    <div className="relative py-16 sm:py-24 red-section overflow-hidden">
      {/* Deep red band */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6B0A18] via-[#C8102E] to-[#8B0000]" />
      <div className="absolute inset-0 opacity-15 cloud-pattern pointer-events-none" />

      <Lantern className="absolute top-8 left-4 opacity-60 hidden sm:block" size={36} delay={0.2} />
      <Lantern className="absolute top-8 right-4 opacity-60 hidden sm:block" size={36} delay={0.7} />
      <CloudMotif className="absolute bottom-10 left-10 w-24 text-gold/25 hidden md:block" />

      <div className="relative z-10">
        <div className="text-center px-4 mb-8">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold/80 mb-2">
            With Gratitude
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-gold">
            {giftGuide.title}
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <SectionCard variant="parchment">
          {/* Red packet illustration */}
          <div className="flex justify-center mb-6">
            <RedPacket className="w-16 h-22 drop-shadow-md" />
          </div>

          <div className="rounded-lg bg-gradient-to-br from-imperial-red/10 to-gold/10 border border-gold/35 px-5 py-5 mb-8">
            <p className="text-sm sm:text-[15px] text-ink leading-relaxed text-center">
              {giftGuide.angbaoNote}
            </p>
          </div>

          <ul className="space-y-3">
            {giftGuide.reminders.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
