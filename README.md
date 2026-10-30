# 囍 Wedding RSVP — Chinese New Year Inspired

A production-ready, mobile-first wedding RSVP web application built as a long-form vertical story scroll. Inspired by traditional Chinese New Year aesthetics (Imperial Red, Luminous Gold, parchment cards) with a Filipino-language RSVP form.

## Features

- **Interactive Red Envelope (Hongbao)** landing with 3D flip/unseal animation
- Continuous vertical story layout with alternating parchment cards and full-width prenup banners
- **Prenup Gallery** — responsive photo grid with lightbox, keyboard navigation, and Unsplash fallbacks
- Schedule timeline, Entourage, Dress Code, Gift / Angbao guide
- Fully controlled, validated RSVP form (Filipino labels + no-plus-one acknowledgment)
- Local image support under `public/prenup/` with graceful Unsplash fallbacks
- Framer Motion scroll-triggered fade-ins and subtle floating effects
- Fully responsive (mobile-first) and accessible

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4 (custom Imperial Red / Gold / Cream theme)
- Framer Motion
- Lucide React
- Google Fonts (Cinzel + Inter)

## Getting Started

```bash
cd wedding-rsvp
npm install
npm run dev
```

Open http://localhost:5173

## Project Structure

```
src/
├── components/
│   ├── Envelope.tsx        # Red packet opening experience
│   ├── Hero.tsx            # Monogram + names + date
│   ├── BannerImage.tsx     # Full-width prenup dividers + onError fallback
│   ├── Gallery.tsx         # Prenup photo grid + lightbox
│   ├── SectionCard.tsx     # Reusable parchment card with gold filigree
│   ├── WelcomeCard.tsx     # Love story / welcome message
│   ├── Timeline.tsx        # Schedule of events
│   ├── Entourage.tsx       # Principal / Secondary / Bridal Party
│   ├── DressCode.tsx       # Color swatches + attire guidelines
│   ├── GiftGuide.tsx       # Angbao note + reminders
│   ├── RsvpForm.tsx        # Fully typed controlled form
│   └── Footer.tsx
├── data/
│   └── weddingData.ts      # All copy, timeline, gallery, entourage, image URLs
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Adding Personal Prenup Photos

1. Place images in `public/prenup/`  
   - Banners: `banner-1.jpg`, `banner-2.jpg`, `banner-3.jpg`  
   - Gallery: `gallery-1.jpg` … `gallery-6.jpg`
2. Open `src/data/weddingData.ts`
3. Update each `src` to the local path (keep `fallbackSrc`)

```ts
src: "/prenup/gallery-1.jpg",
fallbackSrc: "https://images.unsplash.com/..."
```

`BannerImage` and `Gallery` automatically fall back to Unsplash if a local file is missing.

## Color Theme

| Token          | Hex       | Usage                     |
|----------------|-----------|---------------------------|
| Imperial Red   | `#C8102E` | Primary, CTAs, accents    |
| Deep Crimson   | `#8B0000` | Secondary / dark red      |
| Luminous Gold  | `#FFD700` | Borders, ornaments, icons |
| Muted Gold     | `#D4AF37` | Supporting gold           |
| Warm Cream     | `#FFFDF7` | Background / parchment    |

## Form Fields (Filipino)

- **Ang Iyong Pangalan** (required)
- **Email** (required)
- **Makakadalo ka ba?** — radio: yes / no
- No-plus-one acknowledgment checkbox (required)
- **Mensahe para sa ikakasal** (optional)
- Submit: **Ipadala ang RSVP**

## Customization

Edit `src/data/weddingData.ts` for:

- Couple names & date
- Welcome message / poem
- Timeline times & venues
- Entourage lists
- Dress code notes
- Gift / Angbao copy
- Banner image paths

## Production Notes

- Replace the simulated submit in `RsvpForm.tsx` with a real endpoint (Formspree, custom API, etc.)
- All animations respect reduced-motion preferences via Framer Motion defaults
- Build: `npm run build` → output in `dist/`

Built with care for a sophisticated, culturally respectful celebration.
