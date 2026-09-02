import React from 'react';
import { motion, type Variants } from 'motion/react';
import { 
  CalendarCheck, 
  FileText, 
  Compass, 
  PhoneCall, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 22,
    },
  },
};

export const HowItWorksSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <CalendarCheck className="w-7 h-7 text-[#b3681b]" />;
      case 'FileText':
        return <FileText className="w-7 h-7 text-[#b3681b]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#b3681b]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-7 h-7 text-[#b3681b]" />;
      default:
        return <CalendarCheck className="w-7 h-7 text-[#b3681b]" />;
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#f6ebdc] border border-[#e2d0ba] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-2">
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b7651a] tracking-tight">
            How Our Consultation Works
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#715c4c] font-medium max-w-lg mx-auto">
            From booking your slot to receiving deep personalized horoscope guidance.
          </p>
        </motion.div>

        {/* 4 Steps Row with One-By-One Passing Arrow Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative"
        >
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <motion.div 
              key={stepItem.step} 
              variants={stepVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-[#e8dac8] shadow-2xs hover:shadow-md hover:border-[#c97a29]/60 transition-all duration-300 flex flex-col items-center text-center relative group cursor-pointer"
            >
              
              {/* Step Number Badge */}
              <div className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#faf4ec] border border-[#e8d8c6] text-[11px] font-bold text-[#9c5a17] flex items-center justify-center">
                0{stepItem.step}
              </div>

              {/* Step Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#faf5ee] border border-[#e8dac8] shadow-2xs flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#f6ebd9] group-hover:border-[#c97a29] transition-all duration-300">
                {getStepIcon(stepItem.icon)}
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-serif font-bold text-base sm:text-lg text-black leading-tight">
                {stepItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9c5914] font-semibold mt-1 leading-tight">
                {stepItem.subtitle}
              </p>

              {/* Desktop Sequential One-By-One Passing Arrow Connector */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div 
                  className="hidden lg:flex items-center justify-center absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-8 h-8"
                  aria-hidden="true"
                >
                  {/* Outer circle housing */}
                  <div className="relative w-8 h-8 rounded-full bg-[#fbf8f4] border border-[#dec9b2] shadow-xs flex items-center justify-center overflow-hidden">
                    
                    {/* Ghost base arrow */}
                    <ChevronRight className="w-4 h-4 text-[#decbb7]" />

                    {/* Sequential Passing Light Pulse Arrow */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-[#b3681b]"
                      initial={{ x: -14, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        x: [-14, 0, 14],
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.15, 0.8]
                      }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        repeatDelay: 1.8, // Total cycle = 2.7s (3 arrows * 0.9s)
                        delay: index * 0.9, // Staggered one by one in sequence
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-[#b3681b] drop-shadow-xs" />
                    </motion.div>

                    {/* Passing energetic glow shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-radial from-[#c97a29]/30 via-transparent to-transparent rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        repeatDelay: 1.8,
                        delay: index * 0.9,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
