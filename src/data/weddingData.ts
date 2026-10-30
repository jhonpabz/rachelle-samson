import type {
  BannerImage,
  GalleryPhoto,
  TimelineItem,
  EntourageGroup,
  ColorSwatch,
} from '../types';

/* ──────────────────────────────────────────────────────────────
   WEDDING CONTENT CONFIGURATION
   Edit names, dates, venues, entourage, and image paths here.
   Local images live in public/prenup/ — keep fallbackSrc always.
   ────────────────────────────────────────────────────────────── */

export const couple = {
  bride: 'Maria Santos',
  groom: 'Juan dela Cruz',
  monogram: '囍',
  tagline: 'Dalawang puso, isang pag-ibig, isang bagong simula',
  date: '15 Pebrero 2026',
  dateEnglish: 'February 15, 2026',
  dayOfWeek: 'Linggo',
};

export const welcomeMessage = {
  title: 'Mahal naming mga bisita',
  body: `Sa araw na ito ng pag-ibig at pagdiriwang, iniimbitahan namin kayo upang saksihan ang aming paglalakbay bilang mag-asawa.

Tulad ng bagong taon sa kalendaryong Tsino na nagdadala ng kasaganaan at pag-asa, ganoon din ang aming pagsasama — puno ng pagmamahal, respeto, at magandang hangarin.

Salamat sa pagiging bahagi ng aming kuwento.`,
  poem: `"Sa gitna ng pula at ginto,
   dalawang puso'y nagsasama
   sa ilalim ng langit na puno ng pag-asa."`,
};

export const banners: BannerImage[] = [
  {
    id: 'banner-1',
    src: '/prenup/banner-1.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85',
    alt: 'Couple in elegant formal attire under soft light',
  },
  {
    id: 'banner-2',
    src: '/prenup/banner-2.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1400&q=85',
    alt: 'Romantic outdoor prenup portrait',
  },
  {
    id: 'banner-3',
    src: '/prenup/banner-3.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85',
    alt: 'Cinematic couple portrait with warm tones',
  },
];

/**
 * Prenup gallery grid.
 * Place personal photos in public/prenup/ (e.g. gallery-1.jpg …)
 * and update `src` while keeping `fallbackSrc` for graceful fallback.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'g1',
    src: '/prenup/gallery-1.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85',
    alt: 'Couple in elegant formal attire',
    caption: 'Together forever',
  },
  {
    id: 'g2',
    src: '/prenup/gallery-2.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&q=85',
    alt: 'Romantic outdoor portrait',
    caption: 'A moment of pure joy',
  },
  {
    id: 'g3',
    src: '/prenup/gallery-3.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85',
    alt: 'Bride and groom holding hands',
    caption: 'Hand in hand',
  },
  {
    id: 'g4',
    src: '/prenup/gallery-4.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85',
    alt: 'Elegant wedding portrait in warm tones',
    caption: 'Love in bloom',
  },
  {
    id: 'g5',
    src: '/prenup/gallery-5.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85',
    alt: 'Couple walking together',
    caption: 'Our journey begins',
  },
  {
    id: 'g6',
    src: '/prenup/gallery-6.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=85',
    alt: 'Close-up romantic moment',
    caption: 'Eternal promise',
  },
];

export const timeline: TimelineItem[] = [
  {
    id: 'assembly',
    time: '2:00 PM',
    title: 'Assembly Time',
    description:
      'Pagtitipon ng mga panauhin sa loob ng simbahan. Mangyaring dumating nang maaga upang makapagpahinga at makapaghanda.',
    icon: 'assembly',
  },
  {
    id: 'ceremony',
    time: '3:00 PM',
    title: 'Holy Ceremony',
    description:
      'Sagradong kasal sa St. Joseph Parish Church, Parañaque City. Pagsasama sa harap ng Diyos at mga minamahal.',
    icon: 'ceremony',
  },
  {
    id: 'reception',
    time: '6:00 PM',
    title: 'Reception & Dinner',
    description:
      'Pagdiriwang, hapunan, at saya sa The Grand Pavilion, Manila. Mga kuwento, saya, at pasasalamat sa lahat.',
    icon: 'reception',
  },
];

export const entourage: EntourageGroup[] = [
  {
    id: 'principal',
    title: 'Principal Sponsors',
    subtitle: 'Ninong & Ninang',
    members: [
      'Mr. & Mrs. Roberto Mendoza',
      'Mr. & Mrs. Elena Villanueva',
      'Atty. & Mrs. Carlos Reyes',
      'Dr. & Mrs. Patricia Lim',
    ],
  },
  {
    id: 'secondary',
    title: 'Secondary Sponsors',
    members: [
      'Candle — Ana & Miguel Torres',
      'Veil — Sofia & Diego Ramirez',
      'Cord — Isabella & Marco Santos',
    ],
  },
  {
    id: 'bridal-party',
    title: 'Bridal Party',
    members: [
      'Best Man — Luis dela Cruz',
      'Maid of Honor — Camila Santos',
      'Groomsmen — Paolo, Andre, Raphael',
      'Bridesmaids — Julia, Bianca, Elena',
      'Flower Girls — Little Mia & Ava',
      'Ring Bearer — Little Noah',
    ],
  },
];

export const dressCode = {
  title: 'Dress Code Guidelines',
  theme: 'Chinese Formal · Modern Cheongsam / Hanfu accents · Barong · Evening Gown',
  description:
    'Inaanyayahan naming magsuot ang mga panauhin ng eleganteng pormal na kasuotan na may inspirasyon sa tradisyonal na Tsino at Filipino formal wear. Pumili ng mga kulay na nagpapakita ng kasaganaan at saya.',
  colors: [
    { name: 'Imperial Red', hex: '#C8102E' },
    { name: 'Luminous Gold', hex: '#FFD700' },
    { name: 'Deep Crimson', hex: '#8B0000' },
    { name: 'Warm Cream', hex: '#FFFDF7' },
  ] as ColorSwatch[],
  avoidNote:
    'Mangyaring iwasan ang plain black o plain white attire upang mapanatili ang masaya at makulay na diwa ng pagdiriwang.',
};

export const giftGuide = {
  title: 'Gift Guide & Reminders',
  angbaoNote:
    'Sa tradisyong Tsino, ang red packet (Angbao / Hongbao) ay simbolo ng magandang hangarin at kasaganaan. Kung nais ninyong magbigay, ang monetary gift sa red envelope ay lubos naming pinahahalagahan.',
  reminders: [
    'Ang paanyaya ay personal at limitado sa nakapangalan na panauhin.',
    'Walang plus-one upang mapanatiling intimate ang selebrasyon.',
    'Mangyaring kumpirmahin ang inyong attendance sa pamamagitan ng RSVP form sa ibaba.',
    'Para sa mga katanungan, maaring makipag-ugnayan sa amin sa pamamagitan ng email.',
  ],
};

export const rsvpCopy = {
  sectionTitle: 'RSVP',
  sectionSubtitle: 'Ipaalam sa amin kung makakasama ka',
};
