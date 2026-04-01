import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle } from 'lucide-react';

const RSVP: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-wedding-maroon/10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-wedding-gold text-4xl mb-4 underline underline-offset-8 decoration-wedding-gold/30">
            RSVP / Contact the Couple
          </h2>
          <div className="flex justify-center mb-12">
            <Heart className="text-wedding-red fill-wedding-red animate-pulse" size={24} />
          </div>

          <div className="relative bg-wedding-maroon/60 border-2 border-wedding-gold/30 rounded-3xl shadow-2xl overflow-hidden group min-h-[500px] flex flex-col justify-center p-6 md:p-12">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://raw.githubusercontent.com/ishan2026/shaadi-pix/90bdf13c5c699f0acde9546d322bb8635e5302ca/Gods%20picture%20ShivJi%2C%20ParvatiJi.jpg" 
                alt="ShivJi and ParvatiJi" 
                className="w-full h-full object-cover md:object-contain opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-wedding-maroon/80 via-wedding-maroon/40 to-wedding-maroon/80" />
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-wedding-gold/10 rounded-full blur-2xl group-hover:bg-wedding-gold/20 transition-colors duration-500 z-1" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-wedding-red/10 rounded-full blur-2xl group-hover:bg-wedding-red/20 transition-colors duration-500 z-1" />

            <div className="relative z-10 space-y-8">
              <div className="flex justify-center">
                <div className="p-4 bg-wedding-gold/20 rounded-full border border-wedding-gold/40 backdrop-blur-md">
                  <MessageCircle className="text-wedding-gold" size={32} />
                </div>
              </div>

              <div className="space-y-6">
                <p className="font-serif text-wedding-cream text-2xl md:text-3xl italic leading-relaxed drop-shadow-lg">
                  "We would be delighted to celebrate this special day with you."
                </p>
                
                <div className="w-16 h-0.5 bg-wedding-gold/50 mx-auto" />

                <p className="font-serif text-wedding-cream/90 text-lg md:text-xl leading-relaxed max-w-md mx-auto drop-shadow-md">
                  For confirmations, travel coordination, or any questions, please feel free to contact the couple.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-calligraphy text-wedding-gold text-4xl drop-shadow-lg">
                  With Love, Diksha & Ishan
                </p>
              </div>
            </div>

            {/* Floating hearts animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: '120%', x: `${15 + i * 15}%`, opacity: 0, scale: 0.5 }}
                  animate={{ y: '-20%', opacity: [0, 0.4, 0.4, 0], scale: [0.5, 1, 1, 0.5] }}
                  transition={{ 
                    duration: 4 + Math.random() * 2, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "linear"
                  }}
                  className="absolute"
                >
                  <Heart className="text-wedding-gold fill-wedding-gold/20" size={16} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
