import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

export const HeritageSection: React.FC = () => {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#183C35]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 lg:mb-18"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
            HERITAGE & NEIGHBORHOOD ROOTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183C35] leading-tight text-balance mb-6">
            A Little More Care.
            <span className="block italic text-[#202724]">A Lot More Confidence.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#202724]/80 leading-relaxed">
            In an era of rushed automation and impersonal counters, Village Cleaners remains rooted in the enduring virtue of taking the time to do things right. For generations, Nashville neighbors have trusted us with the garments that define their days.
          </p>
        </motion.div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Documentary Photography with Clip-Path Reveal */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(10% 0% 10% 0%)', scale: 1.04 }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div
              data-cursor="view"
              className="relative rounded-sm overflow-hidden shadow-lg bg-[#F8F5EE] group"
            >
              <img
                src="/images/heritage_garment_care_1793993496548.jpg"
                alt="Artisanal garment care, hand-finishing and steam pressing at work"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10] transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-[#183C35]/10 rounded-sm pointer-events-none" />
            </div>

            {/* Captioned Note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 flex items-start gap-3 text-xs text-[#202724]/70"
            >
              <span className="text-[#C6A77A] font-serif font-bold text-sm">✦</span>
              <p>
                Every garment is handled individually. From pre-treatment to hand-inspection, we treat your clothing with personal responsibility.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Values & Storytelling with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="border-l-2 border-[#C6A77A] pl-5">
              <span className="font-serif text-xl sm:text-2xl text-[#183C35] italic block mb-2">
                "A Nashville tradition built on familiar faces, dependable standards, and respect for fine garments."
              </span>
              <span className="text-xs uppercase tracking-wider text-[#202724]/60">
                — {BUSINESS_CONFIG.heritage.headline}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#202724]/80 leading-relaxed">
              Located on Acklen Avenue right beside Hillsboro Village, we serve a vibrant community of Vanderbilt scholars, local professionals, longtime residents, and discerning families. Whether it is a bespoke suit for an executive meeting or a cherished vintage heirloom, we believe thoughtful garment care is a quiet craft worth preserving.
            </p>

            {/* Pillars with Micro-interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#183C35]/10">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-sm transition-colors hover:bg-[#F8F5EE]"
              >
                <div className="flex items-center gap-2 mb-2 text-[#183C35]">
                  <HeartHandshake className="w-4 h-4 text-[#C6A77A]" />
                  <h4 className="font-serif text-base font-semibold">Personal Touch</h4>
                </div>
                <p className="text-xs text-[#202724]/70 leading-normal">
                  Friendly greetings, familiar faces, and custom preferences remembered on your account.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-sm transition-colors hover:bg-[#F8F5EE]"
              >
                <div className="flex items-center gap-2 mb-2 text-[#183C35]">
                  <Eye className="w-4 h-4 text-[#C6A77A]" />
                  <h4 className="font-serif text-base font-semibold">Meticulous Detail</h4>
                </div>
                <p className="text-xs text-[#202724]/70 leading-normal">
                  Loose buttons noted, cuffs aligned, and collar stays protected with professional discipline.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-sm transition-colors hover:bg-[#F8F5EE]"
              >
                <div className="flex items-center gap-2 mb-2 text-[#183C35]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A77A]" />
                  <h4 className="font-serif text-base font-semibold">Fiber Respect</h4>
                </div>
                <p className="text-xs text-[#202724]/70 leading-normal">
                  Temperature-regulated cycles and low-moisture purification to protect delicate weaves.
                </p>
              </motion.div>
            </div>

            {/* BBB / Heritage Disclosure Notice */}
            <div className="p-4 bg-[#F8F5EE] border border-[#C6A77A]/30 rounded-sm text-xs text-[#202724]/70">
              <span className="font-semibold text-[#183C35] block mb-1">
                Heritage Verification Note:
              </span>
              <p>
                A Better Business Bureau (BBB) listing documents commercial service dating back to 1950. As a matter of authentic client presentation, this milestone is proudly recognized as a Nashville tradition awaiting final owner archive confirmation before formal catalog publication.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
