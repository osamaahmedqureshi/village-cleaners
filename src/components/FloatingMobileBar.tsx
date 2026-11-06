import React from 'react';
import { motion } from 'motion/react';
import { Phone, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

export const FloatingMobileBar: React.FC = () => {
  return (
    <motion.aside
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#183C35]/95 backdrop-blur-md border-t border-[#C6A77A]/30 px-4 py-2.5 shadow-2xl pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Call Now Button */}
        <motion.a
          whileTap={{ scale: 0.97 }}
          href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#F8F5EE] text-[#183C35] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#183C35]" />
          <span>Call Now</span>
        </motion.a>

        {/* Get Directions Button */}
        <motion.a
          whileTap={{ scale: 0.97 }}
          href={BUSINESS_CONFIG.urls.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-[#C6A77A] text-[#183C35] text-xs font-semibold uppercase tracking-wider hover:bg-[#d4b991] transition-all shadow-xs"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Directions</span>
        </motion.a>
      </div>
    </motion.aside>
  );
};
