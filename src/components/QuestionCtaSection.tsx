import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface QuestionCtaSectionProps {
  onOpenBooking: () => void;
}

export const QuestionCtaSection: React.FC<QuestionCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-5 sm:py-7 bg-[#faf7f2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center overflow-hidden shadow-xl border border-[#d49a55]/40"
          style={{
            background: 'radial-gradient(ellipse at center top, #4a240c 0%, #261307 60%, #150a04 100%)'
          }}
        >
          {/* Subtle Ambient Glowing Highlights */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#d97706]/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#f5c278]/60 to-transparent" />

          {/* Heading */}
          <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider uppercase text-[#f7d6a5] drop-shadow-sm mb-2.5 leading-tight">
            Still Have a Question Regarding Consultation in Delhi?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-[#ebd6c3] font-normal max-w-2xl mx-auto leading-relaxed mb-5 sm:mb-6">
            Our Vedic astrology support desk is available to assist you with appointment slots, report delivery timelines, and queries.
          </p>

          {/* Action Buttons (WhatsApp & Book Appointment) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-10">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=Namaste%20Acharya%20Ji,%20I%20have%20a%20query%20regarding%20astrology%20consultation%20in%20Delhi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat via WhatsApp</span>
            </a>

            {/* Book Appointment Button */}
            <button
              onClick={onOpenBooking}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-[#1a0f07] text-xs sm:text-sm font-extrabold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 fill-[#1a0f07] text-[#1a0f07]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
