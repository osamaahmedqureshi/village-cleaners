import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA, GalleryImage } from '../data/galleryData';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_DATA.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? GALLERY_DATA.length - 1 : prev - 1) : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  const activeImage: GalleryImage | null =
    activeLightboxIndex !== null ? GALLERY_DATA[activeLightboxIndex] : null;

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#183C35]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 border-b border-[#183C35]/10"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
              VISUAL EXPERIENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183C35] leading-tight text-balance">
              The Texture of Craftsmanship.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#202724]/70 max-w-sm">
            A visual study of tailored fabrics, crisp cottons, and steam-finished textiles cared for with precision.
          </p>
        </motion.div>

        {/* Asymmetric Gallery Grid with Progressive Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {GALLERY_DATA.map((item, index) => {
            const colSpan =
              index === 0
                ? 'lg:col-span-7'
                : index === 1
                ? 'lg:col-span-5'
                : index === 2
                ? 'lg:col-span-4'
                : index === 3
                ? 'lg:col-span-4'
                : 'lg:col-span-4';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                data-cursor="view"
                className={`group relative rounded-sm overflow-hidden bg-[#F8F5EE] border border-[#183C35]/10 shadow-xs cursor-pointer ${colSpan}`}
                onClick={() => setActiveLightboxIndex(index)}
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-72 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Caption Overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <div className="flex justify-end">
                      <span className="p-2 bg-black/40 backdrop-blur-xs rounded-full group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-4 h-4 text-[#C6A77A]" />
                      </span>
                    </div>
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#C6A77A] block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="font-serif text-lg font-medium leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtitle visible under image for mobile accessibility */}
                <div className="p-3 bg-white block lg:hidden border-t border-[#183C35]/10">
                  <span className="text-[11px] font-semibold text-[#183C35] block">{item.title}</span>
                  <span className="text-[10px] text-[#202724]/60">{item.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-[#202724]/60">
          <span>Editorial demonstration imagery representing garment care standards and textile finishing.</span>
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeLightboxIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-5 right-5 p-3 text-white hover:text-[#C6A77A] focus-visible:outline-2 focus-visible:outline-[#C6A77A] z-10 cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Left Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) =>
                  prev !== null ? (prev === 0 ? GALLERY_DATA.length - 1 : prev - 1) : null
                );
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all hover:scale-110 z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % GALLERY_DATA.length : null
                );
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-all hover:scale-110 z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image & Caption Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xs shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center text-white max-w-xl">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C6A77A] block mb-1">
                  {activeImage.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl mb-1">{activeImage.title}</h3>
                <p className="text-xs text-stone-300">{activeImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
