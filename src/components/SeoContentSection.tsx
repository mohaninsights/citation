import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  HeartHandshake, 
  Briefcase, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  MapPin
} from 'lucide-react';

export const SeoContentSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-6 sm:py-8 bg-[#fdfbf8] border-t border-[#ebdfcf] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#f6ebdc] border border-[#e2d0ba] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-2.5">
            <BookOpen className="w-3 h-3 text-[#b3681b]" />
            <span>Vedic Knowledge Hub</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#b7651a] tracking-tight leading-tight">
            Best Astrologer in Delhi: Authentic Vedic Guidance for Clarity and Success
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6f5a49] font-medium max-w-2xl mx-auto">
            Janam Kundali analysis, Kundali Milan, Career Guidance and Astro-Vastu solutions for individuals and families in Delhi NCR are provided under one roof.
          </p>
        </div>

        {/* 500+ Words SEO-Rich Content Article Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e4d7c5] shadow-xs">
          
          {/* Article Lead Introduction (Always Visible) */}
          <div className="prose prose-stone max-w-none text-[#374151] text-xs sm:text-sm lg:text-[15px] leading-relaxed space-y-4">
            <p>
              Multitasking becomes a way of life when living in the hustle and bustle of <strong>Delhi NCR</strong>, where one has to handle work goals, business commitments, relationships, finances and personal choices simultaneously. Vedic Astrology (<em>Jyotish Shastra</em>) is the study of planetary positions at the birth time to obtain clarity of the important life patterns. While looking for the best person to see in Delhi, people do not just want to see a prediction on the horoscope; they want to understand the situation and make logical, practical decisions without fear.
            </p>

            <p>
              <strong>Hanish Bagga</strong> has more than 17 years of experience and thousands of consultations in Delhi, Gurugram, Noida and around the globe with classical Parashar principles, Jaimini astrology and Astro-Vastu sciences. Rather than fostering fear or superstition, consultations aim to grasp the unique planetary arrangements, current <em>Vimshottari Mahadasha</em> periods, pivotal transits and auspicious times in your chart. The fact that it is a structured approach makes it more relevant in today's personal and professional aspects to consult an experienced astrologer in Delhi.
            </p>
          </div>

          {/* Key Pill Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 pt-4 border-t border-[#ede1d3]">
            <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#e6d8c7] flex items-center gap-2.5">
              <Briefcase className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#271b12]">Career and Business</p>
                <p className="text-[11px] text-[#705c4d]">10th House Karma Bhava</p>
              </div>
            </div>

            <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#e6d8c7] flex items-center gap-2.5">
              <HeartHandshake className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#271b12]">Kundali Milan</p>
                <p className="text-[11px] text-[#705c4d]">7th and Navamsha (D9)</p>
              </div>
            </div>

            <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#e6d8c7] flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#271b12]">Astro-Vastu</p>
                <p className="text-[11px] text-[#705c4d]">No Demolition Remedies</p>
              </div>
            </div>

            <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#e6d8c7] flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#271b12]">100% Confidential</p>
                <p className="text-[11px] text-[#705c4d]">Private 1-on-1 Sessions</p>
              </div>
            </div>
          </div>

          {/* Deep Editorial Subsections */}
          <div className="space-y-6 text-[#374151] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed pt-2">
            
            {/* Section 1 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                Janam Kundli Analysis – Your Personal Cosmic Blueprint
              </h3>
              <p>
                Your birth chart (<em>Lagna Kundli</em>) is like a detailed map of the Universe that is split into 12 houses or divisions, each pertaining to one of the areas of life: longevity (1st), wealth (2nd), courage and siblings (3rd), mother and property (4th), intelligence and children (5th), health and competition (6th), marriage and partnerships (7th), unexpected changes (8th), fortune and dharma (9th), profession (10th), gains (11th) and expenses (12th). The best astrologer of Delhi NCR can analyze the supportive period along with possible challenging periods and the areas where it may be advisable to be cautious about by studying the house lords, planetary conjunctions, aspects, nakshatras and active dashas.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                Kundali Milan and Guidance for Marital Harmony
              </h3>
              <p>
                In Delhi and North India, marriage is not only about the union of the two individuals; it's also the coming together of the two families. Traditional horoscope matching is done on 36 Guna Ashtakoota score but meaningful analysis needs to be done on 7th house, 8th house, 12th house, planetary aspects and Navamsha (D9) horoscope. Some other diseases like <em>Mangal Dosha</em>, <em>Nadi Dosha</em> and difficult planetary combinations also can be studied carefully. With the help of the practical advice from the Vedic science this can help couples understand compatibility, understand their emotional needs and expectations, understand communication patterns and understand the harmony in marriage in the long term.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                Career Growth, Corporate Changes and Business Astrology
              </h3>
              <p>
                From transitioning at a corporate level in Gurugram to thinking about a start-up in South Delhi or a promotion or even moving to another country to look for opportunities, timing plays a major factor in decision-making. Planetary transits (<em>Gochar</em>) of Jupiter, Saturn, Rahu and Ketu are also examined with your current Dasha periods to see when the developments are likely to be more supported. An astrologer in Delhi would be able to offer you guidance on business expansion, career change, promotions, property buying, investments and when it is not wise to take on unnecessary financial risks.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                Astro-Vastu: Harmonizing space with planetary energies
              </h3>
              <p>
                Astro-Vastu is a fusion between the key directional energies in the home, office, shop or commercial space and the individual horoscope analysis. Hanish Bagga doesn't rush to a single solution of rebuilding or structural demolition but suggests practical corrections based on the need of the space. These can involve using the right kind of metallic strips, correct colours, energised Yantras, balancing of elements and positioning of objects according to direction. The Northeast (<em>Ishan</em>) can be evaluated for clarity and positive thinking, while the Southeast (<em>Agneya</em>) is traditionally believed to be a source of fire energy, financial activity and financial movements.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-[#faf6f0] p-4 sm:p-5 rounded-xl border border-[#e6d8c7]">
              <h3 className="font-serif text-base sm:text-lg font-bold text-black mb-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b7651a]" />
                Practical and Result-Oriented Vedic Remedies
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#5e4b3c] leading-relaxed">
                The purpose of the Vedic cures is to reinforce the positive planetary influences and mitigate the adverse planetary influences. Treatment suggestions vary according to individual birth chart analysis and may involve the use of certified natural gemstones, energized Rudraksha beads, Vedic mantra chanting (<em>Japa</em>), planetary charity (<em>Daan</em>), spiritual practices and behavioral changes. For deeper learning enthusiasts, there are also courses on astrology in Delhi that can delve into the traditional astrological beliefs and concepts in a systematic way.
              </p>
            </div>

          </div>

          {/* Delhi Coverage Footer Note */}
          <div className="mt-6 pt-4 border-t border-[#ede1d3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#705b4b]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <span>
                <strong>Serving All Delhi:</strong> East Delhi, West Delhi, North Delhi, and South Delhi.
              </span>
            </div>
            <span className="text-[#b3681b] font-semibold">
              Available for In-Person and Online Video Consultations
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
