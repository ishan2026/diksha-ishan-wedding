import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error("Audio playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
      setShowTooltip(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-wedding-gold text-wedding-maroon px-4 py-2 rounded-xl font-display text-xs shadow-xl border border-wedding-maroon/10 mb-2 relative"
          >
            Play Wedding Music
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-wedding-gold rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-2
          ${isPlaying 
            ? 'bg-wedding-maroon border-wedding-gold text-wedding-gold animate-pulse' 
            : 'bg-wedding-gold border-wedding-maroon text-wedding-maroon hover:bg-wedding-cream'
          }
        `}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        
        {/* Animated Music Notes when playing */}
        {isPlaying && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  y: -40 - (i * 10), 
                  x: (i % 2 === 0 ? 20 : -20) 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2"
              >
                <Music size={12} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.button>

      <audio
        ref={audioRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
      />
    </div>
  );
};

export default MusicPlayer;
