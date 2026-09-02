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
    <section className="py-2.5 sm:py-3.5 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek & Thin Golden Consultation CTA Banner Card */}
        <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#fdedbe] via-[#faebba] to-[#f8dc93] border border-[#ebd08b] py-3.5 px-4 sm:py-4 sm:px-7 lg:px-9 overflow-hidden shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Subtle Golden Glow Accent */}
          <div className="absolute inset-0 bg-radial from-white/35 via-transparent to-transparent pointer-events-none" />

          {/* Left / Center Content Column */}
          <div className="relative z-10 max-w-2xl text-center md:text-left flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <div>
              {/* Italic Eyebrow */}
              <p className="font-serif italic text-[#7a5323] text-[10px] sm:text-xs font-bold tracking-wider mb-0.5">
                DESIGN YOUR OWN FUTURE
              </p>

              {/* Bold Headline */}
              <h2 className="font-serif-title font-extrabold text-base sm:text-lg lg:text-xl text-[#1a110a] tracking-tight uppercase leading-snug">
                BOOK YOUR CONSULTATION AND START THE JOURNEY TODAY!
              </h2>
            </div>
          </div>

          {/* Right Controls: Button and Compact Rolling Zodiac */}
          <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 flex-shrink-0">
            {/* Pill CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 bg-[#120d09] hover:bg-[#271a10] text-[#f7eedc] text-xs sm:text-sm font-bold rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group whitespace-nowrap"
            >
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f3caa0] group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Rolling Zodiac Circle Wheel */}
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
              <div className="w-full h-full animate-spin-rolling origin-center select-none pointer-events-none">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full drop-shadow-2xs"
                  fill="none"
                >
                  {/* Outer Dotted Guide Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    stroke="#997848"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                    opacity="0.65"
                  />

                  {/* Outer Solid Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="178"
                    stroke="#8e6b3b"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />

                  {/* Middle Divider Circle for Zodiac Ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="125"
                    stroke="#8e6b3b"
                    strokeWidth="1.5"
                    opacity="0.75"
                  />

                  {/* Radial Dividing Lines for 12 Houses */}
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

                  {/* Zodiac Sign Symbols */}
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

                  {/* Inner Core Geometry */}
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

                  {/* Cardinal Crosshairs */}
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
      </div>
    </section>
  );
};

