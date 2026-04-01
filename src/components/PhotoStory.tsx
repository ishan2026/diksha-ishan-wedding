import React from 'react';
import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';

const PhotoStory: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-wedding-maroon">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-wedding-gold text-4xl mb-12 underline underline-offset-8 decoration-wedding-gold/30">
          These Two Little Hearts Are Getting Married ❤️
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          {/* Bride Childhood */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-wedding-gold shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img 
                src="https://raw.githubusercontent.com/ishan2026/shaadi-pix/32e44670ba96fc6a840f93b329162f8bdf697347/Diksha%20Childhood%20picture.jpg" 
                alt="Little Diksha" 
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-wedding-gold text-wedding-maroon px-4 py-1 rounded-full font-display font-bold text-sm shadow-md">
              Little Diksha
            </div>
          </motion.div>

          {/* Heart Connector */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative"
          >
            <Heart className="text-wedding-red fill-wedding-red animate-pulse" size={64} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="text-wedding-gold animate-spin-slow" size={32} />
            </div>
          </motion.div>

          {/* Groom Childhood */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-wedding-gold shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <img 
                src="https://raw.githubusercontent.com/ishan2026/shaadi-pix/fe1332cf4a635abedba92552735b1c3a95cec9e7/Ishan%20childhood%20pic%203.JPG" 
                alt="Little Ishan" 
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-wedding-gold text-wedding-maroon px-4 py-1 rounded-full font-display font-bold text-sm shadow-md">
              Little Ishan
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center"
        >
          <ArrowRight className="text-wedding-gold rotate-90 mb-8 animate-bounce" size={48} />
          
          <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-video rounded-2xl overflow-hidden border-4 border-wedding-gold shadow-2xl">
            <img 
              src="https://raw.githubusercontent.com/ishan2026/shaadi-pix/1ae4a3afa6c220dcd9023b8dd82f8ccdc87ed869/D%26I%203.jpg" 
              alt="Diksha and Ishan" 
              className="w-full h-full object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wedding-maroon/80 to-transparent flex items-end justify-center p-6">
              <p className="font-calligraphy text-wedding-gold text-4xl">From childhood dreams to forever</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Sparkles: React.FC<{ className?: string; size?: number }> = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

export default PhotoStory;
