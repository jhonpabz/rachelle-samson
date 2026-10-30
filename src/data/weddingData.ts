import type {
  BannerImage,
  GalleryPhoto,
  TimelineItem,
  EntourageGroup,
  ColorSwatch,
} from "../types";

/* ──────────────────────────────────────────────────────────────
   WEDDING CONTENT CONFIGURATION
   Edit names, dates, venues, entourage, and image paths here.
   Local images live in public/prenup/ — keep fallbackSrc always.
   ────────────────────────────────────────────────────────────── */

export const couple = {
  bride: "Rachelle Murro",
  groom: "Samson Pacatang",
  monogram: "囍",
  tagline: "Two Hearts, One Love. One Beautiful New Beginning.",
  date: "06 February 2027",
  dateEnglish: "February 06, 2027",
  dayOfWeek: "Saturday",
};

export const welcomeMessage = {
  title: "Mahal naming mga bisita",
  body: `Sa araw na ito ng pag-ibig at pagdiriwang, iniimbitahan namin kayo upang saksihan ang aming paglalakbay bilang mag-asawa.

Tulad ng bagong taon sa kalendaryong Tsino na nagdadala ng kasaganaan at pag-asa, ganoon din ang aming pagsasama — puno ng pagmamahal, respeto, at magandang hangarin.

Salamat sa pagiging bahagi ng aming kuwento.`,
  poem: `"Sa gitna ng pula at ginto,
   dalawang puso'y nagsasama
   sa ilalim ng langit na puno ng pag-asa."`,
};

export const banners: BannerImage[] = [
  {
    id: "banner-1",
    src: "/prenup/banner-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85",
    alt: "Couple in elegant formal attire under soft light",
  },
  {
    id: "banner-2",
    src: "/prenup/banner-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1400&q=85",
    alt: "Romantic outdoor prenup portrait",
  },
  {
    id: "banner-3",
    src: "/prenup/banner-3.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85",
    alt: "Cinematic couple portrait with warm tones",
  },
];

/**
 * Prenup gallery grid.
 * Place personal photos in public/prenup/ (e.g. gallery-1.jpg …)
 * and update `src` while keeping `fallbackSrc` for graceful fallback.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    src: "/prenup/gallery-1.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
    alt: "Couple in elegant formal attire",
    caption: "Together forever",
  },
  {
    id: "g2",
    src: "/prenup/gallery-2.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&q=85",
    alt: "Romantic outdoor portrait",
    caption: "A moment of pure joy",
  },
  {
    id: "g3",
    src: "/prenup/gallery-3.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85",
    alt: "Bride and groom holding hands",
    caption: "Hand in hand",
  },
  {
    id: "g4",
    src: "/prenup/gallery-4.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85",
    alt: "Elegant wedding portrait in warm tones",
    caption: "Love in bloom",
  },
  {
    id: "g5",
    src: "/prenup/gallery-5.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=85",
    alt: "Couple walking together",
    caption: "Our journey begins",
  },
  {
    id: "g6",
    src: "/prenup/gallery-6.jpg",
    fallbackSrc:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=85",
    alt: "Close-up romantic moment",
    caption: "Eternal promise",
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "assembly",
    time: "7:30 AM",
    title: "The Gathering of Guests",
    description:
      "A warm welcome as we prepare for this beautiful celebration of love.",
    icon: "assembly",
  },
  {
    id: "ceremony",
    time: "8:30 AM",
    title: "The Sacred Union",
    description:
      "Holy Matrimony at P-Silangan Poblacion Tubod Surigao del Norte",
    icon: "ceremony",
  },
  {
    id: "reception",
    time: "12 NN",
    title: "Celebration Reception",
    description: "",
    icon: "reception",
  },
];

export const entourage: EntourageGroup[] = [
  {
    id: "principal",
    title: "Principal Sponsors",
    subtitle: "Ninong & Ninang",
    members: [
      "Mr. & Mrs. Roberto Mendoza",
      "Mr. & Mrs. Elena Villanueva",
      "Atty. & Mrs. Carlos Reyes",
      "Dr. & Mrs. Patricia Lim",
    ],
  },
  {
    id: "secondary",
    title: "Secondary Sponsors",
    members: [
      "Candle — Ana & Miguel Torres",
      "Veil — Sofia & Diego Ramirez",
      "Cord — Isabella & Marco Santos",
    ],
  },
  {
    id: "bridal-party",
    title: "Bridal Party",
    members: [
      "Best Man — Luis dela Cruz",
      "Maid of Honor — Camila Santos",
      "Groomsmen — Paolo, Andre, Raphael",
      "Bridesmaids — Julia, Bianca, Elena",
      "Flower Girls — Little Mia & Ava",
      "Ring Bearer — Little Noah",
    ],
  },
];

export const dressCode = {
  title: "Dress Code Guidelines",
  theme:
    "Chinese Formal · Modern Cheongsam / Hanfu accents · Barong · Evening Gown",
  description:
    "We kindly invite our guests to adorn themselves in elegant formal attire inspired by traditional Chinese and Filipino fashion. We encourage colors that symbolize prosperity, joy, and good fortune, in keeping with the spirit of our celebration.",
  colors: [
    { name: "Imperial Red", hex: "#C8102E" },
    { name: "Luminous Gold", hex: "#FFD700" },
    { name: "Deep Crimson", hex: "#8B0000" },
  ] as ColorSwatch[],
  avoidNote:
    "To complement the vibrant and joyful spirit of the celebration, female guests are kindly requested to refrain from wearing plain black or all-white attire and are encouraged to wear red or red with a touch of gold. Male guests are kindly requested to refrain from wearing red, as this color is reserved for the groom.",
};

export const giftGuide = {
  title: "Gift Guide & Reminders",
  angbaoNote:
    "In Chinese tradition, the red envelope (Angbao/Hongbao) symbolizes love, good fortune, and blessings for a prosperous future. As we begin this beautiful new chapter together, should you wish to give us a gift, a monetary gift in a red envelope or you may scanned the QR code below for our bank details, would be lovingly appreciated. Your presence and blessings on our special day mean the world to us.",
  reminders: [],
};

export const rsvpCopy = {
  sectionTitle: "RSVP",
  sectionSubtitle: "Ipaalam sa amin kung makakasama ka",
};
