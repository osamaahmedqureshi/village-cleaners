import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check, AlertTriangle, Phone, Compass } from 'lucide-react';
import { CARE_GUIDE_DATA } from '../data/careGuideData';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

interface CareAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareAdvisorModal: React.FC<CareAdvisorModalProps> = ({ isOpen, onClose }) => {
  const [selectedId, setSelectedId] = useState<string>(CARE_GUIDE_DATA[0].id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const currentItem = CARE_GUIDE_DATA.find((item) => item.id === selectedId) || CARE_GUIDE_DATA[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="advisor-modal-title"
        >
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Card with Spring Scale & Fade */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative z-10 w-full max-w-3xl bg-[#F8F5EE] rounded-sm border border-[#C6A77A]/40 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between pb-5 border-b border-[#183C35]/15">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C6A77A] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>INTERACTIVE WARDROBE TOOL</span>
                  </div>
                  <h2 id="advisor-modal-title" className="font-serif text-2xl sm:text-3xl text-[#183C35]">
                    Garment Care Advisor
                  </h2>
                  <p className="text-xs text-[#202724]/70 mt-1">
                    Select your textile or care scenario to view recommendations from our garment specialists.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  data-cursor="expand"
                  className="p-2 text-[#202724] hover:text-[#183C35] rounded-sm focus-visible:outline-2 focus-visible:outline-[#183C35] cursor-pointer"
                  aria-label="Close fabric advisor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Interactive Fabric Selector Tabs */}
              <div className="flex flex-wrap gap-2 py-4 border-b border-[#183C35]/10 overflow-x-auto">
                {CARE_GUIDE_DATA.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    data-cursor="expand"
                    className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      selectedId === item.id
                        ? 'bg-[#183C35] text-[#F8F5EE] shadow-xs'
                        : 'bg-white text-[#202724]/75 hover:bg-[#183C35]/10 border border-[#183C35]/15'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Advisor Content Body with Tab Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="py-6 space-y-6 overflow-y-auto max-h-[50vh] pr-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#183C35]/10">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#183C35]">
                        {currentItem.name}
                      </h3>
                      <p className="text-xs text-[#202724]/70 italic mt-0.5">
                        {currentItem.tagline}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[11px] uppercase tracking-wider text-[#C6A77A] font-bold block">
                        Recommended Service
                      </span>
                      <span className="text-xs font-semibold text-[#183C35]">
                        {currentItem.recommendedService}
                      </span>
                    </div>
                  </div>

                  {/* Recommended Care Frequency */}
                  <div className="p-3 bg-white border border-[#183C35]/10 rounded-sm text-xs flex items-center justify-between">
                    <span className="font-semibold text-[#183C35]">Optimal Care Frequency:</span>
                    <span className="text-[#202724]/80">{currentItem.frequency}</span>
                  </div>

                  {/* Dos and Don'ts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Recommended Handling */}
                    <div className="p-4 bg-white rounded-sm border border-[#183C35]/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#183C35] mb-3 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-700" />
                        <span>Recommended Habits</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-[#202724]/80">
                        {currentItem.handlingTips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C6A77A] mt-0.5">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Things to Avoid */}
                    <div className="p-4 bg-white rounded-sm border border-[#183C35]/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-700" />
                        <span>Common Pitfalls to Avoid</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-[#202724]/80">
                        {currentItem.thingsToAvoid.map((avoid, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-700 mt-0.5">•</span>
                            <span>{avoid}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#183C35]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#202724]/60 text-center sm:text-left">
                Have a question about a specific piece? Bring it in to 2010 Acklen Ave for personalized inspection.
              </span>
              <div className="flex items-center gap-2">
                <MagneticButton
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#183C35] border border-[#183C35]/30 rounded-sm hover:bg-[#183C35]/5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Staff</span>
                </MagneticButton>
                <MagneticButton
                  href={BUSINESS_CONFIG.urls.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-[#C6A77A]" />
                  <span>Get Directions</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
