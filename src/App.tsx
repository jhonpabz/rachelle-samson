import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Envelope } from './components/Envelope';
import { Hero } from './components/Hero';
import { BannerImage } from './components/BannerImage';
import { WelcomeCard } from './components/WelcomeCard';
import { Gallery } from './components/Gallery';
import { Timeline } from './components/Timeline';
import { Entourage } from './components/Entourage';
import { DressCode } from './components/DressCode';
import { GiftGuide } from './components/GiftGuide';
import { RsvpForm } from './components/RsvpForm';
import { Footer } from './components/Footer';
import { banners } from './data/weddingData';

/**
 * Main application shell.
 * 1. Interactive Red Envelope landing
 * 2. Continuous vertical story scroll of all sections in exact order
 */
export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <Envelope key="envelope" onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen bg-[#FFFDF7]"
        >
          <main>
            {/* 1. Hero Banner */}
            <Hero />

            {/* 2. Full-Width Prenup Banner #1 */}
            <BannerImage banner={banners[0]} />

            {/* 3. Love Story / Welcome Scroll Card */}
            <WelcomeCard />

            {/* 4. Prenup Gallery */}
            <Gallery />

            {/* 5. Schedule of Events (Timeline) */}
            <Timeline />

            {/* 6. Full-Width Prenup Banner #2 */}
            <BannerImage banner={banners[1]} />

            {/* 7. Entourage Section */}
            <Entourage />

            {/* 8. Dress Code Guidelines */}
            <DressCode />

            {/* 9. Full-Width Prenup Banner #3 */}
            <BannerImage banner={banners[2]} />

            {/* 10. Gift Guide / Reminders */}
            <GiftGuide />

            {/* 11. RSVP Form Container */}
            <RsvpForm />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
