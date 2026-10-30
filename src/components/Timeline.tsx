import { motion } from 'framer-motion';
import { Clock, Church, PartyPopper } from 'lucide-react';
import { SectionCard } from './SectionCard';
import { timeline } from '../data/weddingData';
import type { TimelineItem } from '../types';
import { Lantern } from './decorations/Lantern';
import { CloudMotif } from './decorations/CloudMotif';

const iconMap = {
  assembly: Clock,
  ceremony: Church,
  reception: PartyPopper,
};

/**
 * Schedule of Events — Deep Red accent theme.
 */
export function Timeline() {
  return (
    <div className="relative py-16 sm:py-24 red-section overflow-hidden">
      {/* Red background band */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000] via-[#A00D24] to-[#8B0000]" />
      <div className="absolute inset-0 opacity-15 cloud-pattern pointer-events-none" />

      {/* Side lanterns */}
      <Lantern
        className="absolute top-10 left-3 sm:left-8 opacity-70 hidden sm:block"
        size={40}
        delay={0.3}
      />
      <Lantern
        className="absolute top-10 right-3 sm:right-8 opacity-70 hidden sm:block"
        size={40}
        delay={0.9}
      />

      <CloudMotif className="absolute bottom-8 left-1/4 w-20 text-gold/30 hidden md:block" />
      <CloudMotif className="absolute bottom-12 right-1/4 w-16 text-gold/25 hidden md:block" />

      <div className="relative z-10">
        {/* Section header on red */}
        <div className="text-center px-4 mb-10">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold/80 mb-2">
            The Day
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-gold">
            Schedule of Events
          </h2>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <SectionCard variant="parchment">
          <ol className="relative space-y-0">
            {/* Vertical gold timeline thread */}
            <div
              className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-gold via-gold/60 to-gold/25"
              aria-hidden="true"
            />

            {timeline.map((item, index) => (
              <TimelineRow key={item.id} item={item} index={index} />
            ))}
          </ol>
        </SectionCard>
      </div>
    </div>
  );
}

function TimelineRow({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const Icon = iconMap[item.icon];

  return (
    <motion.li
      className="relative flex gap-4 sm:gap-5 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Icon node — lantern-inspired circle */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-imperial-red text-gold flex items-center justify-center shadow-md shadow-imperial-red/40 border-2 border-gold">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </div>

      <div className="flex-1 pt-0.5">
        <p className="font-display text-gold text-sm tracking-wider mb-0.5">
          {item.time}
        </p>
        <h3 className="font-display text-lg sm:text-xl text-imperial-red mb-1.5">
          {item.title}
        </h3>
        <p className="text-ink-muted text-sm sm:text-[15px] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
