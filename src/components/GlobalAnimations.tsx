import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Flower2 } from 'lucide-react';

const GlobalAnimations: React.FC = () => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Initial batch of hearts
    const initialElements = Array.from({ length: 30 }).map(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const duration = 15 + Math.random() * 15;
      return {
        id,
        type: 'heart',
        x: Math.random() * 100,
        duration,
        size: 8 + Math.random() * 24,
        initialY: `${10 + Math.random() * 90}vh`
      };
    });
    setElements(initialElements);

    const interval = setInterval(() => {
      const id = Math.random().toString(36).substr(2, 9);
      const type = Math.random() > 0.25 ? 'heart' : Math.random() > 0.5 ? 'petal' : 'sparkle';
      const x = Math.random() * 100;
      const duration = 15 + Math.random() * 15;
      const size = 8 + Math.random() * 24;

      setElements((prev) => [...prev, { id, type, x, duration, size, initialY: '110vh' }]);

      setTimeout(() => {
        setElements((prev) => prev.filter((el) => el.id !== id));
      }, duration * 1000);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {elements.map((el) => (
          <motion.div
            key={el.id}
            initial={{ y: el.initialY, x: `${el.x}vw`, opacity: 0, rotate: 0 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 0.4, 0.4, 0], 
              rotate: 360,
              x: [`${el.x}vw`, `${el.x + (Math.random() * 20 - 10)}vw`]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: el.duration, ease: 'linear' }}
            className="absolute"
            style={{ width: el.size, height: el.size }}
          >
            {el.type === 'heart' && <Heart className="text-wedding-red fill-wedding-red opacity-30" size={el.size} />}
            {el.type === 'petal' && <Flower2 className="text-wedding-cream opacity-20" size={el.size} />}
            {el.type === 'sparkle' && <Sparkles className="text-wedding-gold opacity-40" size={el.size} />}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Subtle glowing particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,0,0,0.1),transparent_70%)]" />
    </div>
  );
};

export default GlobalAnimations;
