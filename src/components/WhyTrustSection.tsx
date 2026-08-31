import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';

export const WhyTrustSection: React.FC = () => {
  const trustPoints = [
    '17+ Years of Experience in Vedic Astrology',
    '50,000+ Satisfied Clients Worldwide',
    'Celebrity Astrologer & TV Panelist',
    'Featured on India TV, Zee News & More',
    'Practical Remedies with 98% Accuracy',
    '100% Confidential & Personalized Guidance'
  ];

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80'
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#f7f2ea] border-t border-[#ebdfcf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Why People in Delhi Trust Card with Astrologer Image */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#e4d7c4] shadow-xs flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Image Box */}
            <div className="w-full md:w-5/12 flex-shrink-0">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-[#decbb2]">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=700&auto=format&fit=crop&q=80"
                  alt="Acharya Ganesh Vedic Astrologer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                {/* Gold Vedic Mandala Pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20150d]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-[#f6d7a7] bg-[#22160d]/80 px-2.5 py-1 rounded-full border border-[#d4994e]/50 backdrop-blur-xs">
                    Vedic Jyotish Acharya
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#231912] leading-tight mb-3">
                Why People in Delhi Trust Acharya Ganesh?
              </h2>
              <p className="text-xs sm:text-sm text-[#665243] leading-relaxed mb-5">
                Acharya Ganesh Ji combines ancient Vedic wisdom with modern understanding to provide accurate predictions and practical remedies.
              </p>

              {/* 6 Trust Points with Gold Checks */}
              <div className="space-y-2.5">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-medium text-[#36271c]">
                    <CheckCircle2 className="w-4 h-4 text-[#b3681b] fill-[#faebd7] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured On & Google Reviews Cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            
            {/* Top Card: Featured On with TV News Channel Logos */}
            <div className="bg-white rounded-2xl p-6 border border-[#e4d7c4] shadow-xs flex flex-col justify-center flex-1">
              <h3 className="text-sm font-bold text-[#271b12] text-center uppercase tracking-wider mb-5">
                Featured On
              </h3>
              
              <div className="grid grid-cols-3 gap-3 items-center justify-items-center">
                {/* India TV Badge */}
                <div className="flex items-center justify-center p-2 rounded-md hover:scale-105 transition-transform">
                  <div className="font-bold text-base sm:text-lg tracking-tighter text-[#1f2937] flex items-center">
                    <span className="text-[#e11d48] font-black mr-0.5">INDIA</span>
                    <span className="bg-[#1f2937] text-white px-1 py-0.5 rounded-xs text-xs font-bold">TV</span>
                  </div>
                </div>

                {/* Zee News Badge */}
                <div className="flex items-center justify-center p-2 rounded-md hover:scale-105 transition-transform">
                  <div className="flex items-center gap-1">
                    <div className="w-7 h-7 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-black text-xs shadow-xs">
                      ZEE
                    </div>
                    <span className="text-xs font-bold text-gray-800 tracking-tight">NEWS</span>
                  </div>
                </div>

                {/* News 18 India Badge */}
                <div className="flex items-center justify-center p-2 rounded-md hover:scale-105 transition-transform">
                  <div className="bg-[#dc2626] text-white px-2 py-1 rounded-sm text-center shadow-xs">
                    <div className="text-[10px] font-black leading-none">NEWS 18</div>
                    <div className="text-[9px] font-bold text-yellow-300 leading-tight">इंडिया</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Google Reviews */}
            <div className="bg-white rounded-2xl p-6 border border-[#e4d7c4] shadow-xs flex flex-col items-center justify-center text-center flex-1">
              <h3 className="text-xs font-bold text-[#6f5a49] uppercase tracking-wider mb-2">
                Google Reviews
              </h3>
              
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <span className="font-serif-title text-4xl sm:text-5xl font-black text-[#261a12]">
                  4.9
                </span>
                <div className="flex text-[#f59e0b] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f59e0b]" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#705e50] font-medium mb-3">
                Based on 5000+ Reviews
              </p>

              {/* Avatar Stack */}
              <div className="flex -space-x-2 overflow-hidden justify-center items-center py-1">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Verified Client"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
