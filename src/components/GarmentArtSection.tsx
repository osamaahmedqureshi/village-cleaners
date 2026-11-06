import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, UserCheck } from 'lucide-react';

export const GarmentArtSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="craft" className="py-24 lg:py-32 bg-[#183C35] text-[#F8F5EE] relative overflow-hidden">
      {/* Floating ambient subtle glow lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#C6A77A] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8B7A4] rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
            THE ART OF GARMENT CARE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#F8F5EE] leading-tight text-balance mb-6">
            Every Fabric Has a Story.
            <span className="block italic text-[#C6A77A]">We Treat It That Way.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F8F5EE]/80 leading-relaxed max-w-2xl mx-auto">
            From the structured shoulders of a bespoke blazer to the airy drape of fine silk, garments embody confidence and memories. Our finishing process is guided by patience, touch, and decades of textile understanding.
          </p>
        </motion.div>

        {/* 3 Tasteful Benefit Tiles with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Tile 1 */}
          <motion.div
            variants={tileVariants}
            whileHover={{ y: -6, borderColor: 'rgba(198, 167, 122, 0.6)' }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-sm bg-[#20453E]/60 border border-[#C6A77A]/20 transition-all duration-300 group shadow-xs hover:shadow-xl"
          >
            <div className="h-10 w-10 rounded-sm bg-[#183C35] border border-[#C6A77A]/30 flex items-center justify-center text-[#C6A77A] mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F8F5EE] mb-3">
              Fiber-Conscious Temperature
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F5EE]/75 leading-relaxed">
              We calibrate solvent purification and drying temperatures to match fiber density, preventing fiber fatigue, shrinkage, and premature weave thinning.
            </p>
          </motion.div>

          {/* Tile 2 */}
          <motion.div
            variants={tileVariants}
            whileHover={{ y: -6, borderColor: 'rgba(198, 167, 122, 0.6)' }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-sm bg-[#20453E]/60 border border-[#C6A77A]/20 transition-all duration-300 group shadow-xs hover:shadow-xl"
          >
            <div className="h-10 w-10 rounded-sm bg-[#183C35] border border-[#C6A77A]/30 flex items-center justify-center text-[#C6A77A] mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F8F5EE] mb-3">
              Form-Fitted Finishing
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F5EE]/75 leading-relaxed">
              Garments are tension-steamed on forms to restore their three-dimensional silhouette naturally, avoiding the harsh creases and sheen of aggressive flatbed pressing.
            </p>
          </motion.div>

          {/* Tile 3 */}
          <motion.div
            variants={tileVariants}
            whileHover={{ y: -6, borderColor: 'rgba(198, 167, 122, 0.6)' }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-sm bg-[#20453E]/60 border border-[#C6A77A]/20 transition-all duration-300 group shadow-xs hover:shadow-xl"
          >
            <div className="h-10 w-10 rounded-sm bg-[#183C35] border border-[#C6A77A]/30 flex items-center justify-center text-[#C6A77A] mb-6 group-hover:scale-110 transition-transform">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#F8F5EE] mb-3">
              Personal Accountability
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F5EE]/75 leading-relaxed">
              Our Acklen Avenue counter staff personally reviews garments on intake and collection, ensuring specific customer preferences and button integrity are checked with care.
            </p>
          </motion.div>
        </motion.div>

        {/* Quiet Editorial Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-[#C6A77A]/20 text-center max-w-xl mx-auto"
        >
          <p className="font-serif text-lg italic text-[#C6A77A] mb-2">
            "Your clothes deserve better than rushed treatment. Experience the calm reassurance of honest craftsmanship."
          </p>
          <span className="text-xs uppercase tracking-widest text-[#F8F5EE]/60">
            Village Cleaners · Nashville, Tennessee
          </span>
        </motion.div>
      </div>
    </section>
  );
};
