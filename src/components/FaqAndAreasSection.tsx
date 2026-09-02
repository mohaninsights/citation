import React, { useState } from 'react';
import { Plus, Minus, MapPin } from 'lucide-react';
import { FAQ_LIST, DELHI_AREAS } from '../data/mockData';

export const FaqAndAreasSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const areaColumns = [
    { left: { name: 'South Delhi', pin: '📍' }, right: { name: 'Rohini', pin: '📍' } },
    { left: { name: 'North Delhi', pin: '📍' }, right: { name: 'Dwarka', pin: '📍' } },
    { left: { name: 'West Delhi', pin: '📍' }, right: { name: 'Noida', pin: '📍' } },
    { left: { name: 'East Delhi', pin: '📍' }, right: { name: 'Gurugram', pin: '📍' } }
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Frequently Asked Questions */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#b7651a] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {FAQ_LIST.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#fcfaf7] border border-[#e7dac8] rounded-xl overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-[#2c1e15] hover:text-[#b3681b] transition-colors cursor-pointer"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-[#f4ebe0] flex items-center justify-center flex-shrink-0 text-[#b3681b]">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-[#635041] leading-relaxed border-t border-[#f1e6d7]/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Serving All Areas of Delhi NCR with Qutub Minar & Monument Illustration */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#fcf9f4] via-[#f7f0e4] to-[#ebdcc8] rounded-2xl p-6 sm:p-8 border border-[#e6d8c4] shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            
            {/* Content Top */}
            <div className="relative z-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#b7651a] text-center mb-6">
                Serving All Areas of Delhi NCR
              </h2>

              {/* 2-Column Pin Grid */}
              <div className="space-y-3.5 max-w-md mx-auto">
                {areaColumns.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-[#322318]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#b3681b] flex-shrink-0 fill-[#fcecd7]" />
                      <span>{row.left.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#b3681b] flex-shrink-0 fill-[#fcecd7]" />
                      <span>{row.right.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Right Monument Graphic (Qutub Minar & Mughal Architecture Silhouette) */}
            <div className="relative mt-8 sm:mt-6 flex justify-end items-end pointer-events-none">
              <div className="w-64 sm:w-80 h-36 relative opacity-90">
                <img
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=80"
                  alt="Delhi Heritage Qutub Minar Monument"
                  className="w-full h-full object-contain object-right-bottom mix-blend-multiply filter sepia-[0.4] contrast-[1.2]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
