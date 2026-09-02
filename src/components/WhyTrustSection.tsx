import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import hanishBaggaImg from '../assets/images/regenerated_image_1788330560485.webp';

export const WhyTrustSection: React.FC = () => {
  const trustPoints = [
    '17+ Years of Experience in Vedic Astrology',
    '50,000+ Satisfied Clients Worldwide',
    'Certified Vastu Consultant',
    'Specialist in Accurate Birth Chart (Kundli) & Dasha Analysis',
    'Practical Remedies with 98% Accuracy',
    '100% Confidential & Personalized Guidance'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-[#f7f2ea] border-t border-[#ebdfcf]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why People in Delhi Trust Card with Astrologer Image */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e4d7c4] shadow-xs flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-center">
          {/* Image Box */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex-shrink-0">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm border border-[#decbb2] max-w-[320px] mx-auto md:max-w-none">
              <img
                src={hanishBaggaImg}
                alt="Hanish Bagga Vedic Astrologer"
                className="w-full h-full object-cover object-top filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              {/* Gold Vedic Mandala Pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#20150d]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3 right-3 text-center">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#f6d7a7] bg-[#22160d]/80 px-3 py-1 rounded-full border border-[#d4994e]/50 backdrop-blur-xs">
                  Hanish Bagga
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#f6ebdc] border border-[#e2d0ba] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-3 w-fit">
              <span>Trusted Vedic Mastery</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#b7651a] leading-tight mb-3.5">
              Why People in Delhi Trust Hanish Bagga?
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#665243] leading-relaxed mb-6">
              Hanish Bagga combines ancient Vedic wisdom with modern understanding to provide accurate predictions and practical remedies tailored to your life situation.
            </p>

            {/* Trust Points with Gold Checks in a 2-column responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-[13px] lg:text-sm font-medium text-[#36271c] bg-[#faf6f0] p-2.5 rounded-lg border border-[#ede2d2]">
                  <CheckCircle2 className="w-4 h-4 text-[#b3681b] fill-[#faebd7] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

