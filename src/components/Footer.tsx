import React from 'react';
import { motion } from 'motion/react';
import { Compass, Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#183C35] text-[#F8F5EE] border-t border-[#C6A77A]/20 pt-16 pb-24 md:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C6A77A]/15">
          {/* Col 1: Wordmark & Heritage Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#C6A77A] text-[#183C35] font-serif font-bold text-sm">
                V
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-[#F8F5EE]">
                VILLAGE CLEANERS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F8F5EE]/75 leading-relaxed max-w-sm">
              Thoughtful dry cleaning, fine garment finishing, and trusted neighborhood service in Nashville's historic Hillsboro Village.
            </p>
            <div className="text-xs text-[#C6A77A] font-serif italic pt-1">
              "Exceptional Care. A Nashville Tradition."
            </div>
          </div>

          {/* Col 2: Services Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C6A77A] block">
              Core Services
            </span>
            <ul className="space-y-2 text-xs text-[#F8F5EE]/80">
              <li>
                <a href="#services" className="hover:text-[#C6A77A] transition-colors inline-block hover:translate-x-1 duration-200">
                  Professional Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A77A] transition-colors inline-block hover:translate-x-1 duration-200">
                  Shirt Laundering & Pressing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A77A] transition-colors inline-block hover:translate-x-1 duration-200">
                  Suits & Business Attire
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A77A] transition-colors inline-block hover:translate-x-1 duration-200">
                  Formalwear & Special Occasion
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A77A] transition-colors inline-block hover:translate-x-1 duration-200">
                  Stain Diagnosis & Fabric Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Schedule (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C6A77A] block">
              Store Hours
            </span>
            <div className="space-y-1.5 text-xs text-[#F8F5EE]/80">
              <p className="font-semibold text-[#F8F5EE]">Mon – Fri</p>
              <p className="text-[11px] text-[#F8F5EE]/70">7:00 AM – 6:00 PM</p>
              <p className="font-semibold text-[#F8F5EE] pt-1">Saturday</p>
              <p className="text-[11px] text-[#F8F5EE]/70">8:00 AM – 4:00 PM</p>
              <p className="font-semibold text-[#F8F5EE] pt-1">Sunday</p>
              <p className="text-[11px] text-[#F8F5EE]/70">Closed</p>
            </div>
          </div>

          {/* Col 4: Storefront & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C6A77A] block">
              Acklen Ave Counter
            </span>
            <div className="space-y-2 text-xs text-[#F8F5EE]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A77A] shrink-0 mt-0.5" />
                <span>2010 Acklen Ave, Nashville, TN 37212</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A77A] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`} className="hover:text-[#C6A77A] transition-colors">
                  (615) 383-4264
                </a>
              </p>
            </div>

            <div className="pt-2">
              <MagneticButton
                href={BUSINESS_CONFIG.urls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#183C35] bg-[#C6A77A] rounded-xs hover:bg-[#d4b991] transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Attribution & Heritage Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#F8F5EE]/60">
          <div>
            <span>© {new Date().getFullYear()} Village Cleaners. All rights reserved. Nashville, Tennessee.</span>
          </div>

          <div className="flex items-center gap-4 text-center md:text-right">
            <span>Verified NAP Presentation</span>
            <span aria-hidden="true">·</span>
            <span>Client Acquisition Demonstration Prototype</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
