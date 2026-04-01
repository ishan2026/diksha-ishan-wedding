import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-wedding-maroon overflow-hidden">
      {/* Background balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '110vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{ y: '-10vh', opacity: [0, 0.4, 0.4, 0] }}
            transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: i * 2 }}
            className="absolute w-8 h-10 bg-wedding-red rounded-full opacity-20"
            style={{ filter: 'blur(2px)' }}
          />
        ))}
      </div>

      <motion.div 
        className="relative w-[90%] max-w-md aspect-[4/3] cursor-pointer"
        onClick={handleOpen}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-wedding-maroon border-4 border-wedding-gold rounded-lg shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-paper.png')]" />
          
          {/* Flap */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1/2 bg-wedding-maroon border-b-2 border-wedding-gold origin-top z-20"
            animate={isOpen ? { rotateX: -180 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-paper.png')]" />
          </motion.div>

          {/* Wax Seal */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            animate={isOpen ? { opacity: 0, scale: 0.5 } : {}}
          >
            <div className="w-16 h-16 bg-wedding-red rounded-full border-2 border-wedding-gold flex items-center justify-center shadow-lg">
              <Heart className="text-wedding-gold fill-wedding-gold" size={32} />
            </div>
          </motion.div>

          {/* Invitation Card (sliding out) */}
          <motion.div 
            className="absolute inset-4 bg-wedding-cream rounded-md z-10 p-6 flex flex-col items-center justify-center text-center border border-wedding-gold/30"
            animate={isOpen ? { y: -100, scale: 1.1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h2 className="font-display text-wedding-maroon text-xl mb-2">The Wedding of</h2>
            <h1 className="font-calligraphy text-wedding-red text-4xl mb-4">Diksha & Ishan</h1>
            <p className="font-serif text-wedding-maroon text-sm italic">Tap to Open Invitation</p>
          </motion.div>
        </div>

        {/* Floating hearts around envelope */}
        {!isOpen && (
          <div className="absolute -top-10 -right-10 animate-float">
            <Heart className="text-wedding-red fill-wedding-red opacity-50" size={40} />
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: '50vw', y: '50vh', scale: 0 }}
                animate={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  scale: Math.random() * 2,
                  opacity: 0
                }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="absolute"
              >
                <Sparkles className="text-wedding-gold" size={20} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Envelope;
