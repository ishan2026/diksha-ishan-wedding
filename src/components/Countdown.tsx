import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the wedding date to April 20, 2026
    const targetDate = new Date('2026-04-20T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-8 bg-wedding-ivory relative overflow-hidden border-t border-wedding-gold/20">
      {/* Cute floating background hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-wedding-maroon/10"
          initial={{ 
            y: '100vh', 
            x: `${Math.random() * 100}vw`, 
            scale: Math.random() * 0.5 + 0.5 
          }}
          animate={{ 
            y: '-20vh', 
            rotate: 360 
          }}
          transition={{ 
            duration: Math.random() * 10 + 15, 
            repeat: Infinity, 
            ease: 'linear', 
            delay: Math.random() * 5 
          }}
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="mx-auto text-wedding-gold fill-wedding-gold mb-4 animate-pulse" size={32} />
          <h2 className="font-calligraphy text-wedding-maroon text-5xl md:text-6xl mb-4">
            The Countdown Begins
          </h2>
          <p className="font-serif text-wedding-maroon/80 text-lg mb-12 italic">
            Counting down the moments until forever
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-wedding-gold bg-wedding-ivory/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.2)] mb-3 relative group">
                <div className="absolute inset-0 rounded-full border border-wedding-gold/50 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <span className="font-display text-3xl md:text-5xl text-wedding-maroon font-bold">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="font-serif text-wedding-maroon tracking-widest uppercase text-xs md:text-sm font-semibold">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
