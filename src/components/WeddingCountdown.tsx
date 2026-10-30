import { useEffect, useState } from 'react';
import { couple } from '../data/weddingData';
import { CloudMotif } from './decorations/CloudMotif';
import { CornerLattice } from './decorations/CornerLattice';
import { Lantern } from './decorations/Lantern';

const weddingTime = new Date(couple.ceremonyStartsAt).getTime();

function remainingSeconds() {
  return Math.max(0, Math.ceil((weddingTime - Date.now()) / 1000));
}

export function WeddingCountdown() {
  const [remaining, setRemaining] = useState(remainingSeconds);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = remainingSeconds();
      setRemaining(next);
      if (next === 0) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: Math.floor(remaining / 86400) },
    { label: 'Hours', value: Math.floor((remaining % 86400) / 3600) },
    { label: 'Minutes', value: Math.floor((remaining % 3600) / 60) },
    { label: 'Seconds', value: remaining % 60 },
  ];

  return (
    <section id="countdown" aria-labelledby="countdown-heading" className="relative overflow-hidden paper-texture px-4 py-16 sm:py-24">
      <CloudMotif className="absolute -left-12 top-28 w-52 text-imperial-red/5" />
      <CloudMotif className="absolute -right-12 bottom-20 w-52 text-imperial-red/5" />
      <div className="relative mx-auto max-w-2xl border border-gold-dark/40 p-2">
        <div className="relative border border-gold-dark/25 px-3 py-12 text-center sm:px-10 sm:py-16">
          {(['tl', 'tr', 'bl', 'br'] as const).map((position) => (
            <CornerLattice key={position} position={position} className="text-gold-dark" size={36} />
          ))}
          <Lantern className="absolute top-4 left-4 sm:left-8" size={30} sway={false} />
          <Lantern className="absolute top-4 right-4 sm:right-8" size={30} sway={false} />
          <div aria-hidden="true" className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-gold-dark/50 bg-imperial-red text-4xl text-gold shadow-sm">囍</div>
          <h2 id="countdown-heading" className="font-display text-3xl sm:text-4xl text-imperial-red italic">
            {remaining > 0 ? 'We Only Have' : 'Our Forever Begins'}
          </h2>

          <div role="timer" aria-label="Time remaining until the wedding" className="mx-auto mt-8 grid max-w-lg grid-cols-4">
            {units.map(({ label, value }, index) => (
              <div key={label} className="relative min-w-0">
                {index > 0 && <span aria-hidden="true" className="absolute left-0 top-0 -translate-x-1/2 font-display text-3xl leading-none text-gold-dark sm:text-5xl">:</span>}
                <span className="block font-display text-[clamp(1.65rem,6.5vw,3.5rem)] leading-none tabular-nums text-imperial-red-dark">
                  {String(value).padStart(2, '0')}
                </span>
                <span className="mt-3 block text-[9px] uppercase tracking-[0.12em] text-ink-muted sm:text-xs sm:tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-7 font-display text-sm tracking-[0.16em] text-imperial-red-dark sm:text-base">
            {remaining > 0 ? 'LEFT BEFORE THE WEDDING!' : 'THE WAIT IS OVER!'}
          </p>
          <p className="mt-4 text-xs tracking-wide text-ink-muted">
            <time dateTime={couple.ceremonyStartsAt}>{couple.dateEnglish} · 8:30 AM (Philippine time)</time>
          </p>
          <div aria-hidden="true" className="mx-auto my-8 flex items-center justify-center gap-4 text-gold-dark">
            <span className="h-px w-16 bg-gold-dark/50" />
            <span className="h-2 w-2 rotate-45 border border-gold-dark" />
            <span className="h-px w-16 bg-gold-dark/50" />
          </div>
          <p className="mx-auto max-w-sm font-display text-base leading-relaxed text-ink-muted sm:text-lg">
            We truly hope you can join us<br />on this special day.
          </p>
          <p className="mt-10 font-display text-xl tracking-[0.22em] text-imperial-red sm:text-2xl">SEE YOU THERE</p>
        </div>
      </div>
    </section>
  );
}
