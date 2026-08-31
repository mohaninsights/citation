import React, { useState } from 'react';
import { 
  Briefcase, 
  HeartHandshake, 
  Heart, 
  TrendingUp, 
  Activity, 
  IndianRupee, 
  Home, 
  Grid,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookDirect?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookDirect }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Services', count: SERVICES_LIST.length },
    { id: 'Career & Wealth', label: 'Career & Wealth', count: 2 },
    { id: 'Love & Family', label: 'Love & Marriage', count: 2 },
    { id: 'Business & Growth', label: 'Business & Numerology', count: 2 },
    { id: 'Wellness & Energy', label: 'Health & Vastu', count: 2 },
  ];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => {
        if (activeCategory === 'Wellness & Energy') {
          return s.category === 'Wellness & Mind' || s.category === 'Space & Energy';
        }
        return s.category === activeCategory;
      });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
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
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-[#faf7f2] relative overflow-hidden">
      
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f6ebdc] border border-[#e2d0ba] text-[#9c5914] text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#b3681b]" />
            <span>Divine Vedic Solutions</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#271b12] tracking-tight leading-tight">
            Our Astrology Services
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#6f5a49] font-medium max-w-xl mx-auto">
            Accurate, confidential &amp; tailored Vedic guidance with practical, result-driven remedies.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#241710] text-[#f7d7a4] shadow-md scale-[1.02] border border-[#d4994e]/50'
                    : 'bg-white/85 text-[#5e4b3d] hover:bg-white hover:text-[#241710] border border-[#e8ded0] shadow-2xs'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === cat.id ? 'bg-[#d4994e] text-[#241710]' : 'bg-[#f0e4d2] text-[#705a49]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 8 Enhanced Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-2xl border border-[#e5d8c7] shadow-xs hover:shadow-xl hover:border-[#c97a29] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1.5"
            >
              {/* Card Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-[#241710]">
                <img
                  src={service.imageUrl || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Atmospheric Dark & Amber Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f140c]/90 via-[#1f140c]/40 to-black/20 group-hover:via-[#1f140c]/30 transition-all duration-300" />
                
                {/* Floating Top Badge */}
                {service.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 bg-[#241710]/85 backdrop-blur-md text-[#fce4c4] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#d4994e]/60 shadow-md">
                      <Sparkles className="w-2.5 h-2.5 text-[#d4994e]" />
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Floating Vedic Circular Icon Badge */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c97a29] to-[#914d10] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    <div className="w-full h-full rounded-[10px] bg-[#241710] flex items-center justify-center text-[#f7d7a4] group-hover:text-white transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-semibold text-[#e8cfb3] drop-shadow-xs block leading-tight">
                      Vedic Consultation
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                
                {/* Service Title */}
                <h3 className="font-serif-title font-bold text-lg text-[#25170e] group-hover:text-[#a85c14] transition-colors leading-tight mb-2">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-[13px] text-[#695546] leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Highlight Tags */}
                {service.highlightTags && service.highlightTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {service.highlightTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7a5a40] bg-[#fbf6ee] border border-[#ecd9c2] px-2 py-0.5 rounded-md"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#b3681b]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-[#f2e7d8] flex items-center justify-between text-xs font-bold mt-auto">
                  <span className="text-[#a85c14] group-hover:text-[#7d410a] transition-colors flex items-center gap-1.5">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </span>

                  <span className="text-[11px] font-semibold text-[#968374] group-hover:text-[#241710] transition-colors">
                    1-on-1 Session
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3.5 rounded-2xl bg-white border border-[#e6dac9] shadow-xs text-xs sm:text-sm text-[#594435] font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#a85c14]" />
              <span>100% Confidential &amp; Non-Judgmental</span>
            </span>
            <span className="hidden sm:inline text-[#d9c7b2]">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#a85c14]" />
              <span>Available in Hindi &amp; English</span>
            </span>
            <span className="hidden sm:inline text-[#d9c7b2]">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#a85c14]" />
              <span>In-Person Delhi Center or Video/Phone Call</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
