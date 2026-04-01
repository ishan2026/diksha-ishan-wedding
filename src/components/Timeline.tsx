import React from 'react';
import { motion } from 'motion/react';
import { Gem, Music, PartyPopper, Flame, Calendar } from 'lucide-react';

interface Event {
  date: string;
  title: string;
  ceremonies: string[];
  icon: React.ReactNode;
  bgImage?: string;
}

const events: Event[] = [
  {
    date: '19th April 2026',
    title: 'Pre-Wedding Ceremonies',
    ceremonies: ['Ring Ceremony', 'Tilak'],
    icon: <Gem className="text-wedding-gold" size={32} />,
    bgImage: 'https://raw.githubusercontent.com/ishan2026/shaadi-pix/9bb5ba369417dc2cac25e042c23fbb5849c90e7b/Hand%20holding%20Shaadi.jpg',
  },
  {
    date: '20th April 2026',
    title: 'The Big Day',
    ceremonies: ['Baarat', 'Shaadi'],
    icon: <Flame className="text-wedding-gold" size={32} />,
    bgImage: 'https://raw.githubusercontent.com/ishan2026/shaadi-pix/8d66c98aab70a1c39afae9e5d11655a47d8242fc/The%20big%20day.jpg',
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-wedding-maroon/10">
      <h2 className="font-display text-wedding-gold text-4xl text-center mb-16 underline underline-offset-8 decoration-wedding-gold/30">
        Wedding Ceremonies
      </h2>

      <div className="relative max-w-lg mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-wedding-gold/20 rounded-full" />

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex flex-col items-center"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-12 h-12 bg-wedding-maroon border-4 border-wedding-gold rounded-full flex items-center justify-center z-10 shadow-lg">
                {event.icon}
              </div>

              <div className="mt-16 w-full p-6 border-2 border-wedding-gold/30 rounded-2xl backdrop-blur-sm text-center shadow-xl relative overflow-hidden">
                {/* Background Image if exists */}
                {event.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={event.bgImage} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                )}
                
                {/* Fallback background if no image */}
                {!event.bgImage && <div className="absolute inset-0 bg-wedding-maroon/40 z-0" />}

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Calendar className="text-wedding-gold" size={16} />
                    <p className="font-serif text-wedding-gold text-lg font-bold drop-shadow-md">{event.date}</p>
                  </div>
                  
                  <h3 className="font-display text-wedding-cream text-2xl mb-4 drop-shadow-md">{event.title}</h3>
                  
                  <div className="space-y-2">
                    {event.ceremonies.map((ceremony, i) => (
                      <div key={i} className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-wedding-gold rounded-full" />
                        <p className="font-serif text-wedding-cream/90 text-lg italic drop-shadow-md">{ceremony}</p>
                        <div className="w-2 h-2 bg-wedding-gold rounded-full" />
                      </div>
                    ))}
                  </div>

                  {/* Decorative icons */}
                  <div className="mt-6 flex justify-center gap-6 opacity-30">
                    {index === 0 ? (
                      <>
                        <Music size={24} />
                        <Gem size={24} />
                      </>
                    ) : (
                      <>
                        <PartyPopper size={24} />
                        <Flame size={24} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
