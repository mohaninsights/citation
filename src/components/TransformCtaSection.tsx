import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TransformCtaSectionProps {
  onOpenBooking: (service?: string, prefill?: any) => void;
}

export const TransformCtaSection: React.FC<TransformCtaSectionProps> = ({ onOpenBooking }) => {
  // 12 Zodiac signs with classical unicode symbols and angles
  const zodiacSigns = [
    { symbol: '♈', name: 'Aries' },
    { symbol: '♉', name: 'Taurus' },
    { symbol: '♊', name: 'Gemini' },
    { symbol: '♋', name: 'Cancer' },
    { symbol: '♌', name: 'Leo' },
    { symbol: '♍', name: 'Virgo' },
    { symbol: '♎', name: 'Libra' },
    { symbol: '♏', name: 'Scorpio' },
    { symbol: '♐', name: 'Sagittarius' },
    { symbol: '♑', name: 'Capricorn' },
    { symbol: '♒', name: 'Aquarius' },
    { symbol: '♓', name: 'Pisces' },
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Golden Consultation CTA Banner Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#fdedbe] via-[#faebba] to-[#f8dc93] border border-[#ebd08b] py-6 px-6 sm:py-8 sm:px-8 lg:py-8 lg:px-12 overflow-hidden shadow-sm shadow-[#d9b158]/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Subtle Golden Glow Accent */}
          <div className="absolute inset-0 bg-radial from-white/35 via-transparent to-transparent pointer-events-none" />

          {/* Left Content Column */}
          <div className="relative z-10 max-w-xl text-left">
            {/* Italic Eyebrow */}
            <p className="font-serif italic text-[#7a5323] text-xs sm:text-sm font-semibold tracking-wide mb-1.5">
              DESIGN YOUR OWN FUTURE
            </p>

            {/* Bold Headline */}
            <h2 className="font-serif-title font-extrabold text-xl sm:text-2xl lg:text-[28px] text-[#1a110a] tracking-tight uppercase leading-[1.2] mb-2 sm:mb-3">
              BOOK YOUR CONSULTATION AND <br className="hidden sm:inline" />
              START THE JOURNEY TODAY!
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#5f442b] font-normal leading-relaxed mb-4 sm:mb-5 max-w-lg">
              Direct astrological guidance for Kundali Milan, Career Growth, Astro Vastu &amp; Planetary Remedies.
            </p>

            {/* Pill CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-[#120d09] hover:bg-[#271a10] text-[#f7eedc] text-xs sm:text-sm font-bold rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 text-[#f3caa0] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Side: Continuous Smooth Rolling Zodiac Circle Wheel */}
          <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px]">
            {/* The Rolling Zodiac SVG Wheel */}
            <div className="w-full h-full animate-spin-rolling origin-center select-none pointer-events-none">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-xs"
                fill="none"
              >
                {/* 1. Outer Dotted Guide Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  stroke="#997848"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  opacity="0.65"
                />

                {/* 2. Outer Solid Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="178"
                  stroke="#8e6b3b"
                  strokeWidth="1.5"
                  opacity="0.8"
                />

                {/* 3. Middle Divider Circle for Zodiac Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="125"
                  stroke="#8e6b3b"
                  strokeWidth="1.5"
                  opacity="0.75"
                />

                {/* 4. Radial Dividing Lines for 12 Houses */}
                {[...Array(12)].map((_, i) => {
                  const angleRad = (i * 30 * Math.PI) / 180;
                  const x1 = 200 + 125 * Math.cos(angleRad);
                  const y1 = 200 + 125 * Math.sin(angleRad);
                  const x2 = 200 + 178 * Math.cos(angleRad);
                  const y2 = 200 + 178 * Math.sin(angleRad);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#8e6b3b"
                      strokeWidth="1.2"
                      opacity="0.7"
                    />
                  );
                })}

                {/* 5. Zodiac Sign Symbols in each 30° Sector */}
                {zodiacSigns.map((sign, idx) => {
                  const midAngle = idx * 30 + 15;
                  const midRad = (midAngle * Math.PI) / 180;
                  const glyphRadius = 151;
                  const x = 200 + glyphRadius * Math.cos(midRad);
                  const y = 200 + glyphRadius * Math.sin(midRad);

                  return (
                    <text
                      key={idx}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#7a5526"
                      fontSize="22"
                      fontWeight="bold"
                      fontFamily="serif"
                      transform={`rotate(${midAngle + 90}, ${x}, ${y})`}
                      opacity="0.85"
                    >
                      {sign.symbol}
                    </text>
                  );
                })}

                {/* 6. Inner Core Geometry */}
                <circle
                  cx="200"
                  cy="200"
                  r="62"
                  stroke="#8e6b3b"
                  strokeWidth="1.4"
                  opacity="0.7"
                />

                {/* Inner Sun / Center Rings */}
                <circle
                  cx="200"
                  cy="200"
                  r="14"
                  stroke="#8e6b3b"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="4"
                  fill="#7a5526"
                  opacity="0.85"
                />

                {/* Cardinal Diagonal Crosshairs */}
                <line
                  x1="148"
                  y1="148"
                  x2="252"
                  y2="252"
                  stroke="#8e6b3b"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.5"
                />
                <line
                  x1="252"
                  y1="148"
                  x2="148"
                  y2="252"
                  stroke="#8e6b3b"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

