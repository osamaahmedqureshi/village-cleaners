import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowDown, Compass, Star, Clock, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { getStoreStatus, StoreStatus } from '../utils/timezone';
import { MagneticButton } from './MagneticButton';

interface HeroSectionProps {
  onOpenCareAdvisor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCareAdvisor }) => {
  const [storeStatus, setStoreStatus] = useState<StoreStatus>(() => getStoreStatus());
  const heroRef = useRef<HTMLElement>(null);

  // Parallax motion values for hero photograph on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const xOffset = (e.clientX - (left + width / 2)) / (width / 2);
    const yOffset = (e.clientY - (top + height / 2)) / (height / 2);
    // Restrained parallax (up to 12px translation)
    mouseX.set(xOffset * 10);
    mouseY.set(yOffset * 10);
  };

  const handleHeroMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Stagger variants for editorial text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F8F5EE]"
    >
      {/* Decorative hairline grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 border-x border-[#183C35]/15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Staggered Masked Headline & Value Proposition (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Live Status & Eyebrow Ribbon */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A]">
                NASHVILLE'S NEIGHBORHOOD GARMENT CARE
              </span>
              <span className="text-[#202724]/30" aria-hidden="true">·</span>
              
              {/* Dynamic Chicago Time Store Status */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#202724]/80">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    storeStatus.isOpen ? 'bg-[#183C35]' : 'bg-stone-400'
                  }`}
                  aria-hidden="true"
                />
                <span className="font-semibold text-[#183C35]">{storeStatus.statusText}</span>
                <span className="text-[#202724]/50 hidden sm:inline">({storeStatus.currentLocalTime} CT)</span>
              </div>
            </motion.div>

            {/* Masked Headline with Upward Reveal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#183C35] leading-[1.08] text-balance mb-6 overflow-hidden">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  className="block"
                >
                  Exceptional Care.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
                  className="block italic font-light text-[#202724]"
                >
                  A Nashville Tradition.
                </motion.span>
              </span>
            </h1>

            {/* Subhead / Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#202724]/80 leading-relaxed max-w-2xl mb-8"
            >
              From everyday essentials to your most cherished garments, discover thoughtful dry cleaning and personal service in the heart of Nashville's historic Hillsboro Village.
            </motion.p>

            {/* Dual CTAs & Secondary Inquiry with Magnetic Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <MagneticButton
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-[#C6A77A] group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href={BUSINESS_CONFIG.urls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#183C35] bg-transparent border border-[#183C35]/30 rounded-sm hover:bg-[#183C35]/5 transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C6A77A] group-hover:rotate-45 transition-transform" />
                <span>Get Directions</span>
              </MagneticButton>

              <button
                type="button"
                onClick={onOpenCareAdvisor}
                data-cursor="expand"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#183C35] hover:text-[#C6A77A] underline underline-offset-4 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A77A]" />
                <span>Fabric Care Guide & Advisor</span>
              </button>
            </motion.div>

            {/* Review Summary Indicator & Location Snapshot */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#183C35]/15 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center text-[#C6A77A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-[#202724]/75">
                  <span className="font-bold text-[#183C35] font-serif text-sm">4.4</span>
                  <span className="mx-1">/</span>
                  <span>101 Reviews</span>
                  <span className="ml-2 inline-block text-[11px] text-[#202724]/60 bg-[#C6A77A]/15 px-2 py-0.5 rounded-sm">
                    Sample Data Snapshot
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#202724]/70">
                <MapPin className="w-3.5 h-3.5 text-[#183C35]" />
                <span>2010 Acklen Ave · Hillsboro Village</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Cinematic Photography with Parallax & Clip-path reveal (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer champagne brass hairline frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="absolute -inset-2.5 sm:-inset-3 border border-[#C6A77A]/40 rounded-sm -z-0 pointer-events-none"
              />

              {/* Primary Image Container with Cinematic Reveal */}
              <motion.div
                initial={{ clipPath: 'inset(10% 0% 10% 0%)', opacity: 0, scale: 1.05 }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                data-cursor="view"
                className="relative rounded-sm overflow-hidden shadow-xl bg-[#183C35]/5 aspect-[4/3] lg:aspect-[4/5] group"
              >
                <img
                  src="/src/assets/images/hero_garment_craft_1793993496017.jpg"
                  alt="Tailored charcoal wool suit and pressed shirt on a handcrafted walnut hanger representing Village Cleaners bespoke care"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#183C35]/65 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Editorial Note at base */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 text-white"
                >
                  <span className="text-[11px] uppercase tracking-widest text-[#C6A77A] font-semibold block mb-0.5">
                    Careful Finishing
                  </span>
                  <p className="text-xs font-serif text-[#F8F5EE]/90 leading-snug">
                    Hand-shaped lapels, soft steam form-finishing, and meticulous button inspection.
                  </p>
                </motion.div>
              </motion.div>

              {/* Small Archival Stamp floating badge with float entrance */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 -left-3 sm:-left-5 bg-[#F8F5EE] border border-[#C6A77A]/40 p-3 rounded-sm shadow-md hidden sm:block max-w-[210px]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#183C35]" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#183C35]">
                    Acklen Ave Counter
                  </span>
                </div>
                <p className="text-[11px] text-[#202724]/75 leading-tight">
                  Serving Hillsboro Village, Vanderbilt & Belmont neighbors.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Elegant Animated Scroll Down Indicator */}
        <div className="mt-16 sm:mt-20 text-center">
          <a
            href="#story"
            className="group inline-flex flex-col items-center gap-2 text-xs text-[#202724]/60 hover:text-[#183C35] transition-colors"
            aria-label="Scroll to our story"
            data-cursor="expand"
          >
            <span className="uppercase tracking-widest text-[10px] font-medium">Discover Our Story</span>
            <div className="w-5 h-8 border border-[#183C35]/30 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-[#C6A77A] rounded-full"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
