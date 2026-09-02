import React, { useState } from 'react';
import { Plus, Minus, MapPin, Sparkles } from 'lucide-react';
import { FAQ_LIST, DELHI_AREAS } from '../data/mockData';

export const FaqAndAreasSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Serving All Areas of Delhi (East, West, North, South) */}
        <div className="bg-gradient-to-br from-[#fcf9f4] via-[#f7f0e4] to-[#f4e8d8] rounded-2xl p-6 sm:p-10 border border-[#e8dac6] shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faebd7] text-[#a85c14] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#e6cbb0]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Delhi Coverage</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#b7651a]">
              Serving All Areas of Delhi
            </h2>
            <p className="text-xs sm:text-sm text-[#665342] mt-2">
              Available for in-person consultations across all Delhi regions as well as seamless online video sessions across India &amp; globally.
            </p>
          </div>

          {/* Area Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
            {DELHI_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xs rounded-xl p-4 border border-[#e4d5c1] shadow-2xs hover:shadow-xs hover:border-[#cf9254] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-[#faebd7] flex items-center justify-center text-[#b3681b] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#2d1e15]">
                    {area.name}
                  </h3>
                </div>
                {area.description && (
                  <p className="text-[11px] text-[#786453] leading-snug pl-9">
                    {area.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Frequently Asked Questions (Centered Layout) */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#b7651a]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#685545] mt-2">
              Common questions about astrological consultations, Janam Kundli analysis, and remedies.
            </p>
          </div>

          {/* Centered Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQ_LIST.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-[#cf9254] shadow-xs' : 'border-[#e7dac8] shadow-2xs hover:border-[#d9c7b2]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-[#2c1e15] hover:text-[#b3681b] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#b3681b] text-white'
                          : 'bg-[#f4ebe0] text-[#b3681b]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-[13px] text-[#5f4b3c] leading-relaxed border-t border-[#f3e8da]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
