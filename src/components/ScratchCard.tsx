import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

const ScratchCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [scratchPercentage, setScratchPercentage] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      
      canvas.width = rect.width;
      canvas.height = rect.height;

      if (!isScratched) {
        // Draw scratch layer
        ctx.fillStyle = '#B38728'; // Solid gold base
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#BF953F');
        gradient.addColorStop(0.2, '#FCF6BA');
        gradient.addColorStop(0.5, '#B38728');
        gradient.addColorStop(0.8, '#FBF5B7');
        gradient.addColorStop(1, '#AA771C');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add some texture/pattern to the scratch layer
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 2;
        for (let i = 0; i < canvas.width + canvas.height; i += 20) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i - canvas.height, canvas.height);
          ctx.stroke();
        }

        ctx.font = 'bold 24px serif';
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('SCRATCH TO REVEAL', canvas.width / 2, canvas.height / 2);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas.parentElement || canvas);

    const handleScratch = (e: MouseEvent | TouchEvent) => {
      if (isScratched) return;

      const rect = canvas.getBoundingClientRect();
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();

      // Calculate percentage
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparentPixels++;
      }
      const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100;
      setScratchPercentage(percentage);

      if (percentage > 50) {
        setIsScratched(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    canvas.addEventListener('mousemove', handleScratch);
    canvas.addEventListener('touchmove', handleScratch);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleScratch);
      canvas.removeEventListener('touchmove', handleScratch);
    };
  }, [isScratched]);

  return (
    <section className="py-20 px-8 flex flex-col items-center justify-center bg-wedding-maroon/20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-wedding-gold"
      >
        {/* Hidden Content */}
        <div className="absolute inset-0 bg-wedding-maroon flex flex-col items-center justify-center text-center p-6">
          <motion.div
            animate={isScratched ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5, repeat: isScratched ? 2 : 0 }}
          >
            <h2 className="font-display text-wedding-gold text-4xl mb-2">20th April 2026</h2>
            <p className="font-calligraphy text-wedding-cream text-3xl">Save the Date</p>
          </motion.div>
          
          {isScratched && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: '50%', y: '50%', scale: 0 }}
                  animate={{ 
                    x: `${Math.random() * 100}%`, 
                    y: `${Math.random() * 100}%`, 
                    scale: Math.random() * 1.5,
                    opacity: 0
                  }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="absolute"
                >
                  <Sparkles className="text-wedding-gold" size={20} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Scratch Layer */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
        />
      </motion.div>
      
      <p className="mt-6 font-serif text-wedding-cream/60 italic text-sm">
        {isScratched ? 'Date revealed! ❤️' : 'Use your finger to scratch and reveal the date'}
      </p>
    </section>
  );
};

export default ScratchCard;
