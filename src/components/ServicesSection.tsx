import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F5EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-18 pb-6 border-b border-[#183C35]/15"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
              TAILORED GARMENT CARE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183C35] leading-tight text-balance">
              Services Designed Around Your Wardrobe.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#202724]/70 max-w-sm">
            Core dry cleaning and pressing are supported by verified business operations. Specialty restorations and adjustments receive personal in-store evaluation.
          </p>
        </motion.div>

        {/* 6-Card Editorial Grid with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const isCore = service.details.verifiedStatus === 'Verified Core Service';
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between bg-white rounded-sm border border-[#183C35]/10 hover:border-[#C6A77A]/60 overflow-hidden shadow-xs hover:shadow-xl transition-colors duration-300"
              >
                <div>
                  {/* Image container with subtle hover zoom */}
                  <div
                    data-cursor="view"
                    onClick={() => onSelectService(service)}
                    className="relative aspect-[16/10] overflow-hidden bg-[#183C35]/5 cursor-pointer"
                  >
                    <img
                      src={service.image}
                      alt={`${service.title} - garment care demonstration for Village Cleaners Nashville`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Number & Category Overlay */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#F8F5EE]/95 text-[#183C35] font-serif text-xs font-bold rounded-xs tracking-wider">
                        {service.number}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] uppercase tracking-wider text-[#C6A77A] font-medium block">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-xs">
                      {isCore ? (
                        <span className="inline-flex items-center gap-1 text-[#183C35] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#183C35]" />
                          <span>Core Counter Service</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#202724]/70 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 text-[#C6A77A]" />
                          <span>In-Store Evaluation</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#183C35] mb-2.5 group-hover:text-[#235349] transition-colors relative inline-block">
                      <span>{service.title}</span>
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6A77A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                    </h3>

                    <p className="text-xs sm:text-sm text-[#202724]/75 leading-relaxed line-clamp-3 mb-4">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-[#183C35]/5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    data-cursor="expand"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183C35] group-hover:text-[#C6A77A] transition-colors cursor-pointer"
                  >
                    <span>Care Protocol</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                    data-cursor="expand"
                    className="inline-flex items-center gap-1 text-xs text-[#202724]/60 hover:text-[#183C35] transition-colors"
                    title="Call Acklen Ave counter to inquire"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Advisory Banner at base with subtle entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-5 bg-white border border-[#C6A77A]/30 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
        >
          <div className="text-xs text-[#202724]/80">
            <span className="font-semibold text-[#183C35]">Have a delicate vintage piece, designer gown, or stubborn spill?</span>
            <span className="block sm:inline sm:ml-2">
              Our experienced counter team evaluates fabrics in person at 2010 Acklen Ave to recommend the safest care protocol.
            </span>
          </div>
          <MagneticButton
            href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#C6A77A]" />
            <span>Call to Inquire</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
