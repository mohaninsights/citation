import React, { useState } from 'react';
import { Calendar, Lock, UserCheck, Ban, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';

interface TransformCtaSectionProps {
  onOpenBooking: (service?: string, prefill?: any) => void;
}

export const TransformCtaSection: React.FC<TransformCtaSectionProps> = ({ onOpenBooking }) => {
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
      alert('Please fill in your name and mobile number.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenBooking(formData.selectedService, formData);
    }, 300);
  };

  const badges = [
    { icon: Lock, label: '100% Confidential' },
    { icon: UserCheck, label: '1-on-1 Consultation' },
    { icon: Ban, label: 'No Generic Reports' },
    { icon: Sparkles, label: 'Practical Solutions' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#0f141f] text-white relative overflow-hidden">
      {/* Background Zodiac Celestial Chart Wheel on Right */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none" stroke="#d49b54" strokeWidth="1" className="w-full h-full animate-pulse-glow">
          <circle cx="250" cy="250" r="230" strokeDasharray="6 4" />
          <circle cx="250" cy="250" r="180" />
          <circle cx="250" cy="250" r="130" strokeDasharray="3 3" />
          <circle cx="250" cy="250" r="80" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="250"
              y1="20"
              x2="250"
              y2="480"
              transform={`rotate(${i * 30} 250 250)`}
              stroke="#d49b54"
              strokeWidth="0.8"
            />
          ))}
          {/* Zodiac Sun in Center */}
          <circle cx="250" cy="250" r="30" fill="#d49b54" fillOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & 4 Guarantee Badges */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight">
              Ready to Transform Your Life?
            </h2>
            
            <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-lg">
              Book a consultation with Hanish Bagga today and take the first step towards a better tomorrow.
            </p>

            {/* 4 Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#e6af6c] mb-1.5" />
                    <span className="text-[10px] sm:text-[11px] font-medium text-gray-300 leading-tight">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: In-Banner Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-5 sm:p-7 shadow-2xl border border-[#d8c3a5]">
              <h3 className="font-serif-title font-bold text-xl text-[#221811] text-center mb-4">
                Book Your Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#d6c7b2] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b3681b] focus:border-[#b3681b] text-gray-800 placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#d6c7b2] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b3681b] focus:border-[#b3681b] text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#d6c7b2] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b3681b] focus:border-[#b3681b] text-gray-800 placeholder-gray-400"
                  />
                  <select
                    value={formData.selectedService}
                    onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#d6c7b2] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b3681b] focus:border-[#b3681b] text-gray-700 cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Complete Kundli Reading">Complete Kundli Reading</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#b3681b] to-[#8d4b0d] hover:from-[#9c5914] hover:to-[#763d08] text-white font-bold text-sm rounded-md shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Securing Slot...' : 'Book Consultation'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
