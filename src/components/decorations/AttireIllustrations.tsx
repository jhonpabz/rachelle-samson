/** Lightweight clothing vectors inspired by the invitation's attire guide. */
export function AttireIllustrations() {
  const outfits = [
    {
      label: 'Evening gown',
      drawing: <>
        <path fill="#C8102E" d="M43 12h5l2 10 2-10h5l3 17-7 15c5 22 16 42 34 59-21 13-53 13-74 0 18-17 29-37 34-59l-7-15z" />
        <path fill="#8B0000" d="M47 45c-3 25-10 45-20 60l12 3c6-22 10-41 11-63zm6 0c3 26 10 47 20 60l-12 3c-6-22-10-41-11-63z" />
        <path d="M44 43h12M46 29l4 4 4-4" fill="none" stroke="#D4AF37" strokeWidth="2" />
      </>,
    },
    {
      label: 'Cheongsam',
      drawing: <>
        <path fill="#C8102E" d="M44 10h12l2 7 13 7 7 16-12 5-4-9-4 20 8 54H34l8-54-4-20-4 9-12-5 7-16 13-7z" />
        <path fill="#8B0000" d="m58 56 8 54H54l3-28-7 28h-6z" />
        <path d="m44 11 6 8 6-8M50 19l10 12-7 17M59 80l-7 29" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
        <g fill="#D4AF37">
          <circle cx="59" cy="31" r="2" /><circle cx="56" cy="39" r="2" />
          <path d="m44 56 2 4 4 2-4 2-2 4-2-4-4-2 4-2zm8 17 2 3 3 2-3 2-2 3-2-3-3-2 3-2z" />
        </g>
      </>,
    },
    {
      label: 'Formal dress',
      drawing: <>
        <path fill="#C8102E" d="m35 17 8 3q7 8 14 0l8-3 9 8-6 11-8-5-4 17c6 17 17 34 31 53-24 12-50 12-74 0 14-19 25-36 31-53l-4-17-8 5-6-11z" />
        <path fill="#8B0000" d="M44 49c-5 21-12 39-21 53l12 4 13-57zm12 0c5 21 12 39 21 53l-12 4-13-57z" />
        <path d="M44 46h12M43 24q7 7 14 0" fill="none" stroke="#D4AF37" strokeWidth="2" />
        <path d="m50 56-5 49" stroke="#F56A78" strokeWidth="3" strokeLinecap="round" />
      </>,
    },
    {
      label: 'Formal suit',
      drawing: <>
        <path fill="#262626" d="m35 18 15 5 15-5 14 9 10 66-13 3-9-45 3 59H30l3-59-9 45-13-3 10-66z" />
        <path fill="#FFFDF7" d="m37 19 13 4 13-4-13 57z" />
        <path fill="#444" d="m35 18-6 19 11 4-5 8 15 22-9-42zm30 0 6 19-11 4 5 8-15 22 9-42z" />
        <path fill="#262626" d="m43 25 7 3 7-3v9l-7-3-7 3z" />
        <path fill="#D4AF37" d="m61 49 8-2-1 6h-8z" />
        <path d="M50 71v38M34 82h9m14 0h9" stroke="#666" strokeWidth="1.5" />
        <g fill="#D4AF37"><circle cx="53" cy="76" r="1.5" /><circle cx="53" cy="87" r="1.5" /></g>
      </>,
    },
  ];

  return (
    <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-x-3 gap-y-5 max-w-md mx-auto mb-8">
      {outfits.map(({ label, drawing }) => (
        <figure key={label} className="flex flex-col items-center gap-2">
          <svg viewBox="0 0 100 120" className="h-24 sm:h-28 w-auto" aria-hidden="true">
            {drawing}
          </svg>
          <figcaption className="text-xs text-ink-muted text-center tracking-wide">{label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
