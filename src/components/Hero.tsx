import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 overflow-hidden">
      {/* Mandala Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/mandala/800/800" 
          alt="Mandala Background" 
          className="w-full max-w-2xl animate-spin-slow opacity-20"
          style={{ animationDuration: '60s' }}
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl w-full p-8 rounded-xl overflow-visible shadow-2xl"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none rounded-xl overflow-hidden">
          <img 
            src="https://raw.githubusercontent.com/ishan2026/shaadi-pix/9bb5ba369417dc2cac25e042c23fbb5849c90e7b/final%20first%20page.PNG" 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Subtle overlay to ensure text readability if needed, but keeping it minimal as requested */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 flex items-center justify-center">
              <img 
                src="https://raw.githubusercontent.com/ishan2026/shaadi-pix/35a6433e14e9aad64bcb45c0d04a83af75bd9298/Lord%20Ganesha%20Picture%20.png" 
                alt="Lord Ganesha" 
                className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="font-serif text-wedding-gold text-lg mb-4 italic drop-shadow-md">By the grace of the Almighty</p>
          
          <div className="mb-8">
            <p className="font-serif text-wedding-cream text-sm mb-2 drop-shadow-md">With the blessings of</p>
            <p className="font-display text-wedding-gold text-lg drop-shadow-md">All Elderly of Mishra and Sharma family</p>
          </div>

          <div className="mb-8">
            <p className="font-serif text-wedding-cream text-sm mb-1 drop-shadow-md">Shrimati Sunita Mishra and Shri Om Narayan Mishra</p>
            <p className="font-serif text-wedding-cream/90 text-lg italic drop-shadow-md">request the honour of your presence</p>
            <p className="font-serif text-wedding-cream/90 text-lg italic drop-shadow-md">on the auspicious occasion of the wedding of their beloved daughter</p>
          </div>

          <div className="relative mb-8 py-4">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-4">
                <Heart className="text-wedding-gold fill-wedding-gold animate-pulse drop-shadow-md" size={24} />
                <h1 className="font-calligraphy text-wedding-gold text-6xl md:text-8xl text-shadow-gold">Diksha</h1>
                <Heart className="text-wedding-gold fill-wedding-gold animate-pulse drop-shadow-md" size={24} />
              </div>
              <p className="font-calligraphy text-wedding-cream text-3xl my-2 drop-shadow-md">with</p>
              <div className="flex items-center gap-4">
                <Heart className="text-wedding-gold fill-wedding-gold animate-pulse drop-shadow-md" size={24} />
                <h1 className="font-calligraphy text-wedding-gold text-6xl md:text-8xl text-shadow-gold">Ishan</h1>
                <Heart className="text-wedding-gold fill-wedding-gold animate-pulse drop-shadow-md" size={24} />
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <p className="font-serif text-wedding-cream/90 text-sm italic drop-shadow-md">Son of</p>
            <p className="font-serif text-wedding-cream text-sm drop-shadow-md">Shrimati Anju (Anu) Sharma and Shri K. K. Sharma</p>
          </div>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent mx-auto mb-8" />

          <p className="font-serif text-wedding-cream text-sm leading-relaxed max-w-md mx-auto drop-shadow-md">
            Your gracious presence and blessings will make this joyous occasion even more memorable for the couple and the family.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
