import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/mockData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 240,
      damping: 22,
    },
  },
};

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2] border-t border-[#ebdfce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#271b12] tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Carousel / Multi-Card Row */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#ddcfbd] shadow-md flex items-center justify-center text-[#553e2e] hover:bg-[#f6ebd9] hover:text-[#b3681b] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#ddcfbd] shadow-md flex items-center justify-center text-[#553e2e] hover:bg-[#f6ebd9] hover:text-[#b3681b] transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 4 Cards Grid matching exact layout in the image */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-2"
          >
            {TESTIMONIALS_LIST.slice(0, 4).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-xl p-5 border border-[#e5d8c6] shadow-2xs flex flex-col justify-between hover:shadow-md hover:border-[#c97a29]/50 transition-colors duration-300 relative group"
              >
                <div>
                  {/* Top: Avatar & 5 Stars */}
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#e8dac8] flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex text-[#f59e0b] gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-[13px] text-[#534033] leading-relaxed italic mb-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Name with Location */}
                <div className="pt-2 border-t border-[#f4ebdf]">
                  <p className="text-xs font-bold text-[#2a1d14]">
                    — {testimonial.name}, {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
