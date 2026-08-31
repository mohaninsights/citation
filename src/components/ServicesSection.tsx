import React from 'react';
import { 
  Briefcase, 
  HeartHandshake, 
  Heart, 
  TrendingUp, 
  Activity, 
  IndianRupee, 
  Home, 
  Grid,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#b3681b]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#b3681b]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#b3681b]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#b3681b]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#b3681b]" />;
      case 'IndianRupee':
        return <IndianRupee className="w-6 h-6 text-[#b3681b]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#b3681b]" />;
      case 'Grid':
        return <Grid className="w-6 h-6 text-[#b3681b]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#b3681b]" />;
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#271b12] tracking-tight">
            Our Astrology Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6f5a49] font-medium">
            Personalized Solutions for Every Aspect of Your Life
          </p>
        </div>

        {/* 8 Services Grid (4 cols on lg, 2 cols on md, 1 col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white rounded-xl p-6 border border-[#e8ddcd] shadow-2xs hover:shadow-md hover:border-[#c97a29]/60 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#fbf3e8] border border-[#ecd9c2] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#f6e5cd] transition-transform">
                {getIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-serif-title font-bold text-lg text-[#2a1d14] group-hover:text-[#b3681b] transition-colors mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#6d594b] leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* CTA Link */}
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b3681b] group-hover:text-[#884b0f] transition-colors cursor-pointer"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
