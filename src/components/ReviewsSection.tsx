import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Info } from 'lucide-react';
import { REVIEWS_SNAPSHOT, SAMPLE_REVIEW_EXCERPTS, ReviewItem } from '../data/reviewsData';
import { MagneticButton } from './MagneticButton';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [direction, setDirection] = useState<number>(1);

  const categories = ['All', 'Suiting', 'Everyday Care', 'Delicates', 'Neighborhood Service'];

  const filteredReviews: ReviewItem[] =
    selectedFilter === 'All'
      ? SAMPLE_REVIEW_EXCERPTS
      : SAMPLE_REVIEW_EXCERPTS.filter((r) => r.category === selectedFilter);

  const totalFiltered = filteredReviews.length;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, totalFiltered - 1) : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= totalFiltered - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F8F5EE] border-b border-[#183C35]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
            COMMUNITY & TRUST
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#183C35] leading-tight text-balance mb-4">
            The Trust of Our Nashville Neighbors.
          </h2>
          <p className="text-sm sm:text-base text-[#202724]/80 leading-relaxed">
            The relationships we build are just as important as the garments we care for.
          </p>
        </motion.div>

        {/* Aggregate Prospecting Snapshot & Truthful Verification Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 p-6 sm:p-8 bg-white border border-[#183C35]/10 rounded-sm shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Star rating tally */}
            <div className="md:col-span-5 flex items-center gap-5 border-b md:border-b-0 md:border-r border-[#183C35]/10 pb-5 md:pb-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-serif text-5xl font-bold text-[#183C35] leading-none"
              >
                {REVIEWS_SNAPSHOT.rating.toFixed(1)}
              </motion.div>
              <div>
                <div className="flex items-center text-[#C6A77A] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(REVIEWS_SNAPSHOT.rating) ? 'fill-current' : 'fill-current/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs text-[#202724]/75">
                  <span className="font-semibold text-[#183C35]">
                    {REVIEWS_SNAPSHOT.totalReviews} Google Reviews
                  </span>{' '}
                  <span className="text-[#202724]/50">· Prospecting Snapshot</span>
                </div>
              </div>
            </div>

            {/* Right: Explicit Demonstration Notice & Live Link */}
            <div className="md:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-[#202724]/70 max-w-md">
                <div className="flex items-center gap-1.5 font-semibold text-[#183C35] mb-1">
                  <Info className="w-4 h-4 text-[#C6A77A]" />
                  <span>Sample Review Presentation (Demonstration Mode)</span>
                </div>
                <p>
                  To adhere strictly to platform truthfulness, client testimonials below are formatted sample templates representing community feedback. Connect Google Places API for real-time customer stream.
                </p>
              </div>

              <MagneticButton
                href={REVIEWS_SNAPSHOT.profileSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#183C35] border border-[#183C35]/30 rounded-sm hover:bg-[#183C35]/5 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Verify on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C6A77A]" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Controls with Animated Indicator */}
        <div className="flex flex-wrap items-center gap-2 mb-8" role="tablist" aria-label="Review Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedFilter(cat);
                setCurrentIndex(0);
              }}
              data-cursor="expand"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-all duration-200 cursor-pointer relative ${
                selectedFilter === cat
                  ? 'bg-[#183C35] text-[#F8F5EE] shadow-xs'
                  : 'bg-white text-[#202724]/70 hover:bg-[#183C35]/10 border border-[#183C35]/10'
              }`}
              role="tab"
              aria-selected={selectedFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Review Cards Carousel with Motion Animation */}
        {totalFiltered > 0 ? (
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${selectedFilter}-${currentIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredReviews.map((review, idx) => (
                    <motion.div
                      key={review.id}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className={`flex flex-col justify-between p-6 sm:p-7 bg-white rounded-sm border border-[#183C35]/10 hover:border-[#C6A77A]/50 shadow-xs hover:shadow-md transition-all ${
                        idx === currentIndex ? 'ring-1 ring-[#C6A77A]' : ''
                      }`}
                    >
                      <div>
                        {/* Top Bar with Stars & Category */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="flex items-center text-[#C6A77A]">
                            {[...Array(review.stars)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-[#C6A77A] bg-[#C6A77A]/10 px-2 py-0.5 rounded-xs">
                            {review.category}
                          </span>
                        </div>

                        {/* Headline */}
                        <h3 className="font-serif text-lg sm:text-xl text-[#183C35] font-semibold mb-2 leading-snug">
                          "{review.headline}"
                        </h3>

                        {/* Content */}
                        <p className="text-xs sm:text-sm text-[#202724]/80 leading-relaxed mb-6">
                          {review.content}
                        </p>
                      </div>

                      {/* Attribution & Demo Flag */}
                      <div className="pt-4 border-t border-[#183C35]/10 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-[#183C35] block">
                            {review.authorLabel}
                          </span>
                          <span className="text-[#202724]/60 text-[11px]">
                            {review.relationNote}
                          </span>
                        </div>
                        <span className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded-xs">
                          Demo Excerpt
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Controls with Animated Dots */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {filteredReviews.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => {
                      setDirection(dotIdx > currentIndex ? 1 : -1);
                      setCurrentIndex(dotIdx);
                    }}
                    aria-label={`Go to review card ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentIndex
                        ? 'w-6 bg-[#183C35]'
                        : 'w-1.5 bg-[#183C35]/25 hover:bg-[#183C35]/50'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  data-cursor="expand"
                  className="p-2.5 rounded-sm bg-white border border-[#183C35]/20 hover:bg-[#183C35] hover:text-[#F8F5EE] active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#183C35] cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  data-cursor="expand"
                  className="p-2.5 rounded-sm bg-white border border-[#183C35]/20 hover:bg-[#183C35] hover:text-[#F8F5EE] active:scale-95 transition-all focus-visible:outline-2 focus-visible:outline-[#183C35] cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-sm border border-[#183C35]/10 text-xs text-[#202724]/70">
            No sample reviews found in this category. Select "All" to view all cards.
          </div>
        )}

        {/* Integration Instructions Card for Client Acquisition */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 bg-[#20453E]/10 border border-[#183C35]/20 rounded-sm"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#183C35] block mb-1">
                Client Integration Note · Google Places API
              </span>
              <p className="text-xs text-[#202724]/80 max-w-2xl">
                When authorized by the owner, this section connects to the official Google Places API (New) to automatically ingest real-time star ratings, verified Google user badges, and customer remarks directly from the Acklen Avenue profile.
              </p>
            </div>
            <MagneticButton
              href={REVIEWS_SNAPSHOT.profileSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Acklen Ave Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
