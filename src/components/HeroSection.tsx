import React, { useState } from 'react';
import { Calendar, Users, ShieldCheck, Lock, UserCheck, ChevronDown } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import bannerImage from '../assets/images/delhi_astrologer_banner_1788159520467.jpg';

interface HeroSectionProps {
  onOpenBooking: (service?: string, prefill?: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    selectedService: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber) {
      alert('Please enter your full name and mobile number.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenBooking(formData.selectedService, formData);
    }, 350);
  };

  const checklistCol1 = [
    'Career Guidance',
    'Marriage Solutions',
    'Love & Relationship',
    'Health Predictions'
  ];

  const checklistCol2 = [
    'Business & Finance',
    'Vastu Consultation',
    'Numerology',
    'Spiritual Healing'
  ];

  return (
    <section className="relative w-full bg-[#fbf8f3] py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8">
      {/* Outer Banner Card Container with rounded corners matching reference */}
      <div className="max-w-[1400px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#e8ded0] relative bg-[#f5ecdd]">
        
        {/* Full Banner Background: Combined Artwork & Panoramic Sunset Backdrop */}
        <div className="absolute inset-0 z-0">
          {/* Main photorealistic banner image */}
          <img
            src={bannerImage}
            alt="Acharya Ganesh - Best Astrologer in Delhi"
            className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02]"
            referrerPolicy="no-referrer"
          />

          {/* Left subtle gradient veil to ensure text readability while keeping landscape visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef]/95 via-[#fbf6ef]/85 via-45% to-transparent lg:via-[#fbf6ef]/70 lg:via-40%" />
          
          {/* Top subtle fade */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#fbf6ef]/80 via-[#fbf6ef]/40 to-transparent pointer-events-none" />

          {/* Right side subtle glow behind form */}
          <div className="absolute top-0 right-0 w-full lg:w-[450px] h-full bg-gradient-to-l from-[#20150d]/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Top Header Bar Inside Banner */}
        <div className="relative z-20 px-5 sm:px-8 lg:px-12 pt-6 sm:pt-7 flex items-center justify-between">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            {/* Intricate Golden Vedic Mandala Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center text-[#b3681b]">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="currentColor">
                {/* 16-point Vedic Sun Mandala */}
                <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                {[...Array(12)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                    <polygon points="50,4 53,20 47,20" fill="currentColor" />
                    <circle cx="50" cy="24" r="2" fill="currentColor" />
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title font-bold text-xl sm:text-2xl text-[#241710] tracking-tight leading-tight">
                Acharya Ganesh
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#665040] tracking-wide">
                Celebrity Vedic Astrologer
              </span>
            </div>
          </div>

          {/* Right Floating Google Rating Badge matching image */}
          <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#e3d4c0] shadow-md">
            {/* Google Multicolor Logo */}
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-[#241710] leading-none">4.9/5</span>
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs leading-none">★</span>
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-[#786454] leading-none mt-0.5">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Main Banner Grid Content */}
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 pt-6 pb-8 sm:pb-10 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Left Column: Heading, Metrics, Checkpoints & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pr-2">
              
              {/* Main Headline */}
              <div>
                <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#231812] tracking-tight leading-[1.06]">
                  Best Astrologer in
                  <span className="block text-[#a85c14] font-serif-title font-bold text-5xl sm:text-6xl lg:text-[68px] mt-0.5 tracking-tight drop-shadow-xs">
                    Delhi
                  </span>
                </h1>
                <p className="mt-2 text-base sm:text-lg text-[#523e30] font-medium leading-snug">
                  Trusted Celebrity Vedic Astrologer for Accurate &amp; Confidential Guidance
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {/* 1. Years of Experience */}
                <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base text-[#241710] leading-none">17+</span>
                    <span className="text-[10px] text-[#715c4d] leading-tight mt-0.5">Years of Experience</span>
                  </div>
                </div>

                {/* 2. Happy Clients */}
                <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base text-[#241710] leading-none">50,000+</span>
                    <span className="text-[10px] text-[#715c4d] leading-tight mt-0.5">Happy Clients</span>
                  </div>
                </div>

                {/* 3. Accuracy & Trust */}
                <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base text-[#241710] leading-none">98%</span>
                    <span className="text-[10px] text-[#715c4d] leading-tight mt-0.5">Accuracy &amp; Trust</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Checklist with Golden Circle Checks */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1">
                <div className="space-y-2">
                  {checklistCol1.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#33241a]">
                      <div className="w-4 h-4 rounded-full bg-[#a85c14] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                        <svg className="w-2.5 h-2.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {checklistCol2.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#33241a]">
                      <div className="w-4 h-4 rounded-full bg-[#a85c14] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                        <svg className="w-2.5 h-2.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Consultation Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#b3681b] via-[#a35c15] to-[#8d4b0d] hover:from-[#9e5a14] hover:to-[#783e09] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Center Area: Visual Space & Nameplate Plaque (Aligned with background imagery) */}
            <div className="lg:col-span-3 min-h-[160px] lg:min-h-[380px] flex flex-col justify-end items-center relative">
              {/* Traditional Golden Plaque on Desk matching exact reference */}
              <div className="w-full max-w-[270px] bg-gradient-to-b from-[#241710] via-[#1a100a] to-[#0d0704] text-white py-2 px-3 rounded-md border-2 border-[#d4994e] shadow-2xl text-center backdrop-blur-xs mb-2">
                <div className="border border-[#d4994e]/50 py-1.5 px-2 rounded-xs">
                  <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f7d7a4] tracking-wide leading-tight">
                    Acharya Ganesh
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-[#e0b87c] font-medium tracking-wider uppercase mt-0.5">
                    Celebrity Vedic Astrologer &amp; Vastu Shastra Mentor
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: "Book Your Consultation" Card matching reference */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="w-full max-w-[360px] bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-[#e2d5c2] relative">
                <h2 className="font-serif-title font-bold text-xl text-[#221811] text-center mb-4">
                  Book Your Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#b3681b] focus:border-[#b3681b] placeholder-gray-400 text-gray-800 transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#b3681b] focus:border-[#b3681b] placeholder-gray-400 text-gray-800 transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#b3681b] focus:border-[#b3681b] placeholder-gray-400 text-gray-800 transition-all shadow-2xs"
                    />
                  </div>

                  <div className="relative">
                    <select
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#b3681b] focus:border-[#b3681b] text-gray-700 transition-all cursor-pointer appearance-none shadow-2xs pr-9"
                    >
                      <option value="">Select Service</option>
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Complete Kundli Reading">Complete Kundli Reading</option>
                      <option value="Vedic Gemstone Consultation">Vedic Gemstone Consultation</option>
                      <option value="Career & Business Astrology">Career &amp; Business Astrology</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#b3681b] via-[#a05a14] to-[#8d4b0d] hover:from-[#9c5914] hover:to-[#763d08] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] mt-1"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isSubmitting ? 'Securing Slot...' : 'Book Consultation'}</span>
                  </button>
                </form>

                {/* Bottom Guarantee Badges */}
                <div className="mt-4 pt-3.5 border-t border-[#f0e6d6] flex items-center justify-between text-[11px] font-semibold text-[#6e5849]">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#a85c14]" />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#a85c14]" />
                    <span>1-on-1 Consultation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

