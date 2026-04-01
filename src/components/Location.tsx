import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const funFacts = [
  { text: 'Known as the Land of White Tigers' },
  { text: 'Famous for Rewa Fort' },
  { text: 'Rich Bagheli culture' },
  { text: 'Historical royal heritage' },
  { text: 'Beautiful waterfalls nearby' }
];

const Location: React.FC = () => {
  return (
    <section className="py-20 px-8 relative overflow-hidden bg-wedding-ivory">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-display text-wedding-maroon text-4xl mb-12 underline underline-offset-8 decoration-wedding-maroon/30">
          Wedding Location
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/60 border-2 border-wedding-gold/30 p-8 rounded-3xl shadow-xl mb-12"
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="relative">
              <MapPin className="text-wedding-red fill-wedding-red animate-bounce" size={48} />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/10 rounded-full blur-sm" />
            </div>
            <h3 className="font-display text-wedding-maroon text-3xl">Rewa, Madhya Pradesh</h3>
          </div>

          <p className="font-serif text-gray-800 text-lg mb-8 italic">
            Join us in the historic city of Rewa, where royalty meets tradition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts.map((fact, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white/40 border border-wedding-gold/20 rounded-xl text-center hover:border-wedding-maroon/30 transition-colors"
            >
              <p className="font-serif text-gray-800 text-sm italic">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
