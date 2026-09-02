import React from 'react';
import { motion, type Variants } from 'motion/react';
import { 
  CalendarCheck, 
  FileText, 
  Compass, 
  PhoneCall, 
  Sparkles, 
  Headphones,
  ArrowRight
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.94,
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
        return <CalendarCheck className="w-6 h-6 text-[#b3681b]" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-[#b3681b]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#b3681b]" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-[#b3681b]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#b3681b]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#b3681b]" />;
      default:
        return <CalendarCheck className="w-6 h-6 text-[#b3681b]" />;
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#271b12] tracking-tight">
            How Our Consultation Works
          </h2>
        </motion.div>

        {/* 6 Steps Row with Directional Flow */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 relative"
        >
          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <motion.div 
              key={stepItem.step} 
              variants={stepVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center relative group cursor-pointer"
            >
              
              {/* Step Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#e8dac8] shadow-2xs flex items-center justify-center mb-3 group-hover:scale-105 group-hover:border-[#c97a29] group-hover:shadow-sm transition-all duration-300">
                {getStepIcon(stepItem.icon)}
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-bold text-sm sm:text-base text-[#241912] leading-tight">
                {stepItem.title}
              </h3>
              <p className="text-xs text-[#6e5a4a] font-medium mt-0.5 leading-tight">
                {stepItem.subtitle}
              </p>

              {/* Connecting Arrow between items (hidden on last item and on mobile wrapping) */}
              {index < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 text-[#cfb79f] pointer-events-none transform translate-x-1/2">
                  <ArrowRight className="w-4 h-4 text-[#c7ad94]" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
