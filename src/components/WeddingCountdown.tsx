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
  const [motionEnabled, setMotionEnabled] = useState(true);

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
    <section id="countdown" data-motion={motionEnabled ? 'playing' : 'paused'} aria-labelledby="countdown-heading" className="relative overflow-hidden paper-texture px-4 py-16 sm:py-24">
      <CloudMotif className="countdown-cloud absolute -left-12 top-28 w-52 text-imperial-red" opacity={0.24} />
      <CloudMotif className="countdown-cloud countdown-cloud-delayed absolute -right-12 bottom-20 w-52 text-gold-dark" opacity={0.4} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }, (_, index) => (
          <svg
            key={index}
            viewBox="0 0 24 32"
            className="countdown-petal absolute h-10 w-7"
            style={{
              left: `${index % 2 === 0 ? 2 + index * 1.6 : 84 + index * 1.2}%`,
              top: `${8 + (index * 9) % 75}%`,
              color: index % 3 === 0 ? '#C8102E' : '#D4AF37',
              animationDelay: `${-index * 1.7}s`,
              animationDuration: `${3.5 + (index % 4) * 0.5}s`,
            }}
          >
            <path d="M12 2C24 10 23 23 6 30 0 18 2 8 12 2Z" fill="currentColor" fillOpacity="0.7" />
            <path d="M7 26 14 9" fill="none" stroke="currentColor" strokeOpacity="0.5" />
          </svg>
        ))}
      </div>
      <div className="relative mx-auto max-w-2xl border border-gold-dark/40 p-2">
        <div className="relative border border-gold-dark/25 px-3 py-12 text-center sm:px-10 sm:py-16">
          {(['tl', 'tr', 'bl', 'br'] as const).map((position) => (
            <CornerLattice key={position} position={position} className="text-gold-dark" size={36} />
          ))}
          <div className="countdown-lantern pointer-events-none absolute top-4 left-4 sm:left-8" aria-hidden="true">
            <Lantern size={52} sway={false} />
          </div>
          <div className="countdown-lantern countdown-lantern-delayed pointer-events-none absolute top-4 right-4 sm:right-8" aria-hidden="true">
            <Lantern size={52} sway={false} />
          </div>
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
      <button
        type="button"
        onClick={() => setMotionEnabled((enabled) => !enabled)}
        aria-pressed={!motionEnabled}
        className="relative mx-auto mt-5 block rounded-full border border-gold-dark/40 px-4 py-2 text-xs text-imperial-red hover:bg-imperial-red/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-imperial-red"
      >
        {motionEnabled ? 'Pause animation' : 'Play animation'}
      </button>
    </section>
  );
}
