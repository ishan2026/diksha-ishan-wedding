import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

import Envelope from './components/Envelope';
import GlobalAnimations from './components/GlobalAnimations';
import Hero from './components/Hero';
import ScratchCard from './components/ScratchCard';
import Timeline from './components/Timeline';
import Location from './components/Location';
import Trivia from './components/Trivia';
import PhotoStory from './components/PhotoStory';
import RSVP from './components/RSVP';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
  };

  return (
    <main className="min-h-screen bg-wedding-maroon selection:bg-wedding-gold selection:text-wedding-maroon">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <Envelope key="envelope" onOpen={handleOpen} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <GlobalAnimations />
            <MusicPlayer />
            
            {/* Main Content Sections */}
            <div className="relative z-10">
              <Hero />
              <ScratchCard />
              <Timeline />
              <Location />
              <PhotoStory />
              <Trivia />
              <RSVP />
              <Countdown />

              {/* Footer */}
              <footer className="py-12 px-8 text-center border-t border-wedding-gold/20 bg-wedding-maroon/40 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="text-wedding-red fill-wedding-red" size={20} />
                  <p className="font-calligraphy text-wedding-gold text-2xl">Diksha & Ishan</p>
                  <Heart className="text-wedding-red fill-wedding-red" size={20} />
                </div>
                <p className="font-serif text-wedding-cream/40 text-xs italic">
                  Made with love for the couple. 2026.
                </p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
