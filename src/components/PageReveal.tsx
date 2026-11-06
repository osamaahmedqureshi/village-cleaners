import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const PageReveal: React.FC = () => {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    // If reduced motion is preferred, immediately dismiss
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowCurtain(false);
      return;
    }

    // Dismiss curtain smoothly after 550ms
    const timer = setTimeout(() => {
      setShowCurtain(false);
    }, 550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showCurtain && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0.95 }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#183C35] flex flex-col items-center justify-center text-[#F8F5EE] pointer-events-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-10 h-10 rounded-sm bg-[#C6A77A] text-[#183C35] font-serif text-xl font-bold flex items-center justify-center shadow-lg">
              V
            </div>
            <span className="font-serif text-lg tracking-widest text-[#F8F5EE] uppercase">
              Village Cleaners
            </span>
            <div className="w-12 h-0.5 bg-[#C6A77A]/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
