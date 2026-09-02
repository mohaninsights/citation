import React from 'react';
import { motion, type Variants } from 'motion/react';
import { 
  Briefcase, 
  HeartHandshake, 
  Heart, 
  TrendingUp, 
  Activity, 
  IndianRupee, 
  Home, 
  Grid,
  Scale,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  HeartCrack,
  Compass,
  Building2
} from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookDirect?: (serviceTitle: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.93,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 24,
      mass: 0.75,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookDirect }) => {

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'IndianRupee':
        return <IndianRupee className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'Grid':
        return <Grid className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'HeartCrack':
        return <HeartCrack className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-14 bg-[#faf7f2] relative overflow-hidden">
      
      {/* Background Sacred Geometric Mandala Accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 opacity-[0.03] pointer-events-none text-[#b3681b]">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100,10 L100,190 M10,100 L190,100 M36,36 L164,164 M36,164 L164,36" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-7 sm:mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#f6ebdc] border border-[#e2d0ba] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-2">
            <Sparkles className="w-3 h-3 text-[#b3681b]" />
            <span>Divine Vedic Solutions</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#b7651a] tracking-tight leading-tight">
            Our Astrology Services
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-[#6f5a49] font-medium max-w-xl mx-auto">
            Accurate, confidential &amp; tailored Vedic guidance with practical, result-driven remedies.
          </p>
        </motion.div>

        {/* Compact Service Cards Grid with One-by-One Staggered Entry Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4.5"
        >
          {SERVICES_LIST.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] } 
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-xl sm:rounded-2xl border border-[#e5d8c7] shadow-xs hover:shadow-xl hover:border-[#c97a29] transition-colors duration-300 flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Short Compact Image Container */}
              <div className="relative h-24 sm:h-28 lg:h-32 w-full overflow-hidden bg-[#241710]">
                <img
                  src={service.imageUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Atmospheric Dark & Amber Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f140c]/85 via-transparent to-black/20 group-hover:from-[#1f140c]/70 transition-all duration-300" />
                
                {/* Floating Vedic Circular Icon Badge */}
                <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 z-10">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-gradient-to-br from-[#c97a29] to-[#914d10] p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200">
                    <div className="w-full h-full rounded-[4px] sm:rounded-[6px] bg-[#241710] flex items-center justify-center text-[#f7d7a4] group-hover:text-white transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body - Clean & Minimal: Only Service Name */}
              <div className="p-2.5 sm:p-3 flex items-center justify-between bg-white flex-grow">
                <h3 className="font-serif font-bold text-xs sm:text-sm text-black group-hover:text-[#b7651a] transition-colors leading-snug">
                  {service.title}
                </h3>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#fbf5ed] group-hover:bg-[#a85c14] flex items-center justify-center text-[#a85c14] group-hover:text-white transition-all duration-200 flex-shrink-0 ml-1.5 shadow-2xs">
                  <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Assurance Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 rounded-xl bg-white border border-[#e6dac9] shadow-xs text-xs text-[#594435] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#a85c14]" />
              <span>100% Confidential</span>
            </span>
            <span className="hidden sm:inline text-[#d9c7b2]">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#a85c14]" />
              <span>Hindi &amp; English</span>
            </span>
            <span className="hidden sm:inline text-[#d9c7b2]">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#a85c14]" />
              <span>Delhi Center &amp; Video Calls</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
