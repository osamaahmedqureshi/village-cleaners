import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShoppingBag, Eye, CheckCircle } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Bring In Your Garments',
      icon: ShoppingBag,
      summary: 'Drop by our store at 2010 Acklen Avenue.',
      description: 'Meet our friendly counter staff, mention any specific stains, loose buttons, or starch preferences, and receive your itemized claim receipt.',
    },
    {
      step: '02',
      title: 'We Give Them Careful Attention',
      icon: Eye,
      summary: 'Individual inspection, fiber sorting, and precision care.',
      description: 'Your clothing undergoes fiber-specific cleaning, pre-spotting, tension steam finishing, and final quality inspection by experienced hands.',
    },
    {
      step: '03',
      title: 'Pick Up With Confidence',
      icon: CheckCircle,
      summary: 'Ready on time, beautifully hung or folded.',
      description: 'Collect your pristine garments, protected in breathable covers and presented on structured hangers ready to elevate your wardrobe.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#183C35]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
            SEAMLESS NEIGHBORHOOD SERVICE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183C35] leading-tight text-balance mb-4">
            How It Works.
          </h2>
          <p className="text-sm sm:text-base text-[#202724]/75">
            A straightforward, personal experience designed to make caring for your wardrobe effortless and dependable.
          </p>
        </motion.div>

        {/* 3-Step Timeline with Animated Connector Line */}
        <div className="relative">
          {/* Animated Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[72px] left-28 right-28 h-0.5 bg-[#C6A77A]/25 -z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ originX: 0 }}
              className="h-full w-full bg-[#C6A77A]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center p-6 sm:p-8 bg-[#F8F5EE] border border-[#183C35]/10 hover:border-[#C6A77A]/50 rounded-sm relative shadow-xs hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Step Number Tag */}
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#C6A77A] font-bold mb-3">
                    STEP {item.step}
                  </span>

                  {/* Icon Badge with Pulse/Spin Micro-interaction */}
                  <div className="h-14 w-14 rounded-full bg-[#183C35] text-[#C6A77A] flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 group-hover:bg-[#20453E] transition-all duration-300">
                    <Icon className="w-6 h-6 transition-transform group-hover:rotate-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#183C35] mb-2 group-hover:text-[#235349] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#183C35]/80 mb-3">
                    {item.summary}
                  </p>

                  <p className="text-xs text-[#202724]/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Bar with Magnetic Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <MagneticButton
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#C6A77A]" />
            <span>Plan Your Visit</span>
          </MagneticButton>
          <span className="block mt-2.5 text-xs text-[#202724]/60">
            Convenient weekday & Saturday hours on Acklen Avenue
          </span>
        </motion.div>
      </div>
    </section>
  );
};
