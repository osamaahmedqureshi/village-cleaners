import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Compass, Sparkles, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenCareAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCareAdvisor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Services', href: '#services' },
    { label: 'Craft & Care', href: '#craft' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Neighborhood', href: '#neighborhood' },
    { label: 'Visit', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EE]/95 backdrop-blur-md shadow-xs border-b border-[#C6A77A]/25 py-3'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark with hover scale */}
            <a
              href="#"
              className="group flex items-center gap-2.5 text-slate-900 focus-visible:outline-2 focus-visible:outline-[#183C35] focus-visible:outline-offset-4 rounded-sm"
              aria-label="Village Cleaners Home"
            >
              <motion.span
                whileHover={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.4 }}
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#183C35] text-[#F8F5EE] font-serif text-sm font-semibold tracking-wider transition-colors group-hover:bg-[#C6A77A]"
              >
                V
              </motion.span>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183C35] whitespace-nowrap shrink-0 transition-colors group-hover:text-[#235349]">
                VILLAGE CLEANERS
              </span>
            </a>

            {/* Zone 2: 4–6 concise single-line text links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-[#202724]/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative py-1 text-[#202724]/80 hover:text-[#183C35] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A77A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                </a>
              ))}

              <button
                type="button"
                onClick={onOpenCareAdvisor}
                data-cursor="expand"
                className="group flex items-center gap-1.5 text-[#183C35] hover:text-[#C6A77A] transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0 font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C6A77A] transition-transform duration-300 group-hover:rotate-12" />
                <span>Fabric Advisor</span>
              </button>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <MagneticButton
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider text-[#183C35] border border-[#183C35]/20 rounded-sm hover:border-[#183C35] hover:bg-[#183C35]/5 transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(615) 383-4264</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors shadow-xs whitespace-nowrap shrink-0"
              >
                <Compass className="w-3.5 h-3.5 text-[#C6A77A]" />
                <span>Visit Store</span>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button with Smooth Icon Animation */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-sm text-[#183C35] hover:bg-[#183C35]/10 focus-visible:outline-2 focus-visible:outline-[#183C35] cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-full bg-[#183C35] transition-transform duration-300 ease-out origin-center ${
                      mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-[#183C35] transition-opacity duration-200 ${
                      mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-[#183C35] transition-transform duration-300 ease-out origin-center ${
                      mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-[#183C35]/50 backdrop-blur-xs lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#F8F5EE] border-l border-[#C6A77A]/30 p-6 shadow-2xl lg:hidden flex flex-col justify-between"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#202724]/10">
                  <span className="font-serif text-lg font-bold text-[#183C35]">
                    VILLAGE CLEANERS
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-[#202724] hover:text-[#183C35] rounded-sm focus-visible:outline-2 focus-visible:outline-[#183C35]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col gap-3">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx + 0.1, duration: 0.3 }}
                      className="text-base font-serif font-medium text-[#202724] hover:text-[#183C35] transition-colors py-2 border-b border-[#202724]/5 flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-[#C6A77A] text-xs">→</span>
                    </motion.a>
                  ))}

                  <motion.button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCareAdvisor();
                    }}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="flex items-center justify-between text-base font-serif font-medium text-[#183C35] hover:text-[#C6A77A] text-left py-2 border-b border-[#202724]/5 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C6A77A]" />
                      <span>Garment Care Advisor</span>
                    </span>
                    <span className="text-[#C6A77A] text-xs">✦</span>
                  </motion.button>
                </nav>
              </div>

              <div className="pt-6 border-t border-[#202724]/10 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#183C35] border border-[#183C35]/30 rounded-sm hover:bg-[#183C35]/5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C6A77A]" />
                  <span>Call (615) 383-4264</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.urls.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors shadow-xs"
                >
                  <Compass className="w-4 h-4 text-[#C6A77A]" />
                  <span>Get Directions</span>
                </a>

                <div className="mt-2 text-center text-xs text-[#202724]/60">
                  <span>2010 Acklen Ave · Hillsboro Village</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
