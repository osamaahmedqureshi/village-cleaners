import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Clock, Landmark, Car } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

export const NeighborhoodSection: React.FC = () => {
  return (
    <section id="neighborhood" className="py-20 lg:py-28 bg-[#F8F5EE] border-b border-[#183C35]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Landmarks with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block">
              HILLSBORO VILLAGE & VANDERBILT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183C35] leading-tight text-balance">
              Right Here in the Heart of Nashville.
            </h2>
            <p className="text-sm sm:text-base text-[#202724]/80 leading-relaxed">
              Tucked along the historic Acklen Avenue corridor just off 21st Avenue South, Village Cleaners is an integral part of one of Nashville's most walkable and historic neighborhoods. We are proud neighbors to Vanderbilt University, Belmont University, and the vibrant shops of Hillsboro Village.
            </p>

            {/* Neighborhood Anchors with Hover Elevation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#183C35]/10">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-4 bg-white rounded-sm border border-[#183C35]/10 hover:border-[#C6A77A]/50 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2 text-[#183C35] font-semibold text-xs mb-1">
                  <Landmark className="w-4 h-4 text-[#C6A77A]" />
                  <span>Vanderbilt & Belmont</span>
                </div>
                <p className="text-xs text-[#202724]/70">
                  Minutes from medical center offices, campus faculty halls, and university residences.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-4 bg-white rounded-sm border border-[#183C35]/10 hover:border-[#C6A77A]/50 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2 text-[#183C35] font-semibold text-xs mb-1">
                  <Car className="w-4 h-4 text-[#C6A77A]" />
                  <span>Acklen Ave Approach</span>
                </div>
                <p className="text-xs text-[#202724]/70">
                  Convenient neighborhood drop-off point with easy access from 21st Ave South and Wedgewood.
                </p>
              </motion.div>
            </div>

            {/* Directions & Contact Magnetic Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={BUSINESS_CONFIG.urls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#C6A77A] group-hover:rotate-45 transition-transform" />
                <span>Open Google Maps Directions</span>
              </MagneticButton>

              <MagneticButton
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#183C35] border border-[#183C35]/30 rounded-sm hover:bg-[#183C35]/5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C6A77A]" />
                <span>(615) 383-4264</span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column: Interactive Location Card with Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-white border border-[#183C35]/15 rounded-sm p-6 sm:p-8 shadow-sm relative">
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#183C35]/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#C6A77A] block mb-1">
                    PHYSICAL STOREFRONT
                  </span>
                  <h3 className="font-serif text-2xl text-[#183C35]">
                    Village Cleaners
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202724]/80 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#183C35] shrink-0" />
                    <span>2010 Acklen Ave, Nashville, TN 37212</span>
                  </p>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="py-6 border-b border-[#183C35]/10">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183C35] mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#C6A77A]" />
                  <span>Store Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  {BUSINESS_CONFIG.hours.map((h) => (
                    <div key={h.days} className="flex justify-between items-center py-1">
                      <span className="text-[#202724]/80 font-medium">{h.days}</span>
                      <span className="font-semibold text-[#183C35]">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Visual Stylization */}
              <div className="mt-6 p-4 rounded-sm bg-[#183C35]/5 border border-[#183C35]/10 text-xs text-[#202724]/75 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#183C35]">Hillsboro Village Corridor</span>
                  <span className="text-[11px] text-[#C6A77A] font-semibold">Zip: 37212</span>
                </div>
                <p>
                  Located on Acklen Ave between 20th and 21st Avenues. Easy stop for your morning commute or weekend errands in the village.
                </p>
                <div className="pt-2 flex justify-end">
                  <a
                    href={BUSINESS_CONFIG.urls.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="expand"
                    className="inline-flex items-center gap-1 font-semibold text-[#183C35] hover:text-[#C6A77A] text-xs underline underline-offset-4 transition-colors"
                  >
                    <span>Route from your current location</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
