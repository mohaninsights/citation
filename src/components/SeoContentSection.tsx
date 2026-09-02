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
    <section className="py-14 sm:py-18 bg-[#fdfbf8] border-t border-[#ebdfcf] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#f6ebdc] border border-[#e2d0ba] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-2.5">
            <BookOpen className="w-3 h-3 text-[#b3681b]" />
            <span>Vedic Knowledge Hub</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#b7651a] tracking-tight leading-tight">
            Best Astrologer in Delhi: Authentic Vedic Guidance for Clarity &amp; Success
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6f5a49] font-medium max-w-2xl mx-auto">
            A comprehensive guide to understanding Vedic astrology, Janam Kundali analysis, Kundali Milan, and Astro-Vastu solutions in Delhi NCR.
          </p>
        </div>

        {/* 500+ Words SEO-Rich Content Article Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#e4d7c5] shadow-xs">
          
          {/* Article Lead Introduction (Always Visible) */}
          <div className="prose prose-stone max-w-none text-[#374151] text-xs sm:text-sm lg:text-[15px] leading-relaxed space-y-4">
            <p>
              In today’s fast-paced metropolitan environment of <strong>Delhi NCR</strong>, balancing career aspirations, commercial ventures, marital relationships, and personal peace often brings moments of uncertainty. Vedic Astrology (<em>Jyotish Shastra</em>) is an ancient, mathematical science that decodes planetary configurations at the exact moment of birth to provide actionable clarity. When looking for the <strong>Best Astrologer in Delhi</strong>, seekers seek not just predictions, but rational, practical, and non-fear based guidance that transforms challenges into tangible opportunities.
            </p>

            <p>
              With over 17 years of dedicated experience and thousands of consultations across Delhi, Gurugram, Noida, and globally, <strong>Hanish Bagga</strong> is widely recognized for combining classical Parashari principles, Jaimini astrology, and Astro-Vastu sciences. Rather than relying on superstition or fatalistic views, consultations are designed to help you understand your unique planetary DNA, current <em>Vimshottari Mahadasha</em> cycles, and auspicious karmic timings.
            </p>
          </div>

          {/* Key Pill Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 pt-4 border-t border-[#ede1d3]">
            <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#e6d8c7] flex items-center gap-2.5">
              <Briefcase className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#271b12]">Career &amp; Business</p>
                <p className="text-[11px] text-[#705c4d]">10th House Karma Bhava</p>
              </div>
            </div>

            <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#e6d8c7] flex items-center gap-2.5">
              <HeartHandshake className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#271b12]">Kundali Milan</p>
                <p className="text-[11px] text-[#705c4d]">7th &amp; Navamsha (D9)</p>
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
                1. Janam Kundli Analysis: Decoding Your Cosmic Blueprint
              </h3>
              <p>
                Your birth chart (<em>Lagna Kundli</em>) acts as a cosmic roadmap dividing the sky into 12 houses (<em>Bhavas</em>), each governing a distinct facet of human life—such as longevity (1st), wealth (2nd), siblings and courage (3rd), mother and property (4th), intellect and progeny (5th), competitive strength and health (6th), marriage and business partners (7th), sudden events (8th), fortune and dharma (9th), profession (10th), gains (11th), and expenditure (12th). By synthesizing house lords, planetary conjunctions, and Nakshatra placements, a genuine Vedic astrologer pinpoints exactly when promising opportunities will blossom and when caution is advised.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                2. Kundali Milan &amp; Marital Harmony Solutions
              </h3>
              <p>
                In Delhi and North India, marriage is a profound union of two individuals and their families. While conventional horoscope matching evaluates the basic 36 Guna Ashtakoota score, deeper astrological assessment requires examining the 7th house (spouse), 8th house (marital longevity), and 12th house (bed comforts and emotional peace), alongside the Navamsha (D9) divisional chart. Resolving <em>Mangal Dosha</em>, <em>Nadi Dosha</em>, and planetary malefic aspects through non-fear Vedic remedies ensures long-lasting marital harmony, mutual understanding, and family prosperity.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                3. Career Growth, Corporate Transitions &amp; Business Astrology
              </h3>
              <p>
                Whether you are navigating corporate restructuring in Gurugram, planning a startup in South Delhi, or seeking overseas settlement, timing is the catalyst for success. By tracking planetary transits (<em>Gochar</em>) of Jupiter, Saturn, Rahu, and Ketu against your Dasha timeline, you gain foresight on when to initiate business expansions, negotiate promotions, sign property deeds, or avoid risky financial speculations.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-snug">
                4. Astro-Vastu: Harmonizing Physical Spaces with Planetary Energy
              </h3>
              <p>
                Astro-Vastu is the sacred synergy between personal horoscope planetary placements and the directional architectural energies of your living or working premises. Instead of requiring costly structural demolition, Hanish Bagga provides precise, elemental remedies—such as customized metal strip installations, color therapy, yantra energization, and direction-specific object realignment—to activate the Northeast (<em>Ishan</em>) for clarity and the Southeast (<em>Agneya</em>) for cash flow.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-[#faf6f0] p-4 sm:p-5 rounded-xl border border-[#e6d8c7]">
              <h3 className="font-serif text-base sm:text-lg font-bold text-black mb-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b7651a]" />
                Practical &amp; Result-Oriented Vedic Remedies
              </h3>
              <p className="text-xs sm:text-[13.5px] text-[#5e4b3c] leading-relaxed">
                Astrological remedies are designed to strengthen weak benefic planets and pacify malefic planetary friction. Recommendations include pure certified natural gemstones, energized Rudraksha beads, Vedic mantra chanting (<em>Japa</em>), planetary charity (<em>Daan</em>), and behavioral modifications tailored specifically to your birth chart.
              </p>
            </div>

          </div>

          {/* Delhi NCR Coverage Footer Note */}
          <div className="mt-6 pt-4 border-t border-[#ede1d3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#705b4b]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#b3681b] flex-shrink-0" />
              <span>
                <strong>Serving All Delhi NCR:</strong> South Delhi, West Delhi, North Delhi, East Delhi, Dwarka, Rohini, Noida &amp; Gurugram.
              </span>
            </div>
            <span className="text-[#b3681b] font-semibold">
              Available for In-Person &amp; Online Video Consultations
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
