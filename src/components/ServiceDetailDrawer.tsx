import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Compass, AlertCircle } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

interface ServiceDetailDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailDrawer: React.FC<ServiceDetailDrawerProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [service, onClose]);

  const isCore = service?.details.verifiedStatus === 'Verified Core Service';

  return (
    <AnimatePresence>
      {service && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
        >
          {/* Backdrop with Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer Content with Spring Slide */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative z-10 w-full max-w-xl bg-[#F8F5EE] min-h-screen p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#183C35]/10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#183C35] text-[#F8F5EE] font-serif text-xs font-bold rounded-xs">
                    {service.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#C6A77A] font-semibold">
                    {service.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  data-cursor="expand"
                  className="p-2 text-[#202724] hover:text-[#183C35] rounded-sm focus-visible:outline-2 focus-visible:outline-[#183C35] cursor-pointer"
                  aria-label="Close service details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Status */}
              <div className="my-6">
                <div className="flex items-center gap-2 mb-2 text-xs">
                  {isCore ? (
                    <span className="inline-flex items-center gap-1 text-[#183C35] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#183C35]" />
                      <span>Verified Core Counter Service</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#202724]/70 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 text-[#C6A77A]" />
                      <span>Specialty In-Store Evaluation</span>
                    </span>
                  )}
                </div>

                <h2 id="drawer-title" className="font-serif text-3xl sm:text-4xl text-[#183C35]">
                  {service.title}
                </h2>
              </div>

              {/* Featured Image */}
              <div className="rounded-sm overflow-hidden border border-[#183C35]/10 mb-6 aspect-[16/9] bg-[#183C35]/5 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="space-y-6 text-xs sm:text-sm text-[#202724]/85 leading-relaxed">
                <p className="text-sm font-medium text-[#183C35]">
                  {service.details.overview}
                </p>

                {/* Fabrics */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#183C35] mb-2.5">
                    Fabrics & Garment Types Handled
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.details.fabrics.map((fabric) => (
                      <span
                        key={fabric}
                        className="px-2.5 py-1 bg-white border border-[#183C35]/10 rounded-xs text-xs text-[#202724]"
                      >
                        {fabric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#183C35] mb-2.5">
                    Care Protocol Steps
                  </h4>
                  <ol className="space-y-2">
                    {service.details.process.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#C6A77A] font-serif font-bold text-sm shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Advisory Note */}
                <div className="p-4 bg-white border border-[#C6A77A]/40 rounded-sm text-xs shadow-xs">
                  <span className="font-bold text-[#183C35] block mb-1">
                    Client Advisory Note:
                  </span>
                  <p className="text-[#202724]/80">{service.details.advisory}</p>
                </div>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="mt-8 pt-6 border-t border-[#183C35]/10 flex flex-col sm:flex-row gap-3">
              <MagneticButton
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#183C35] border border-[#183C35]/30 rounded-sm hover:bg-[#183C35]/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to Inquire</span>
              </MagneticButton>

              <MagneticButton
                href={BUSINESS_CONFIG.urls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors shadow-xs"
              >
                <Compass className="w-3.5 h-3.5 text-[#C6A77A]" />
                <span>Directions to Store</span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
