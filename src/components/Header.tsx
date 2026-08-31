import React from 'react';
import { Sparkles, Star, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e9dfd0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#c97a29] to-[#914d10] p-0.5 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#24170d] flex items-center justify-center border border-[#d8974a]/40">
              <Sparkles className="w-4 h-4 text-[#d8974a] animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-title font-bold text-lg sm:text-xl text-[#2b2118] tracking-tight leading-none group-hover:text-[#b5681c] transition-colors">
              Hanish Bagga
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-[#b3681b] font-semibold mt-0.5">
              Celebrity Vedic Astrologer
            </span>
          </div>
        </a>

        {/* Right Info: Google Rating Badge & Quick CTA */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Google Review Badge matching reference */}
          <div className="flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full border border-[#e4d8c5] shadow-xs">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs border border-gray-100">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs sm:text-sm text-[#2b2118] leading-none">4.9/5</span>
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#f59e0b]" />
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-gray-500 leading-none">Google Rating</span>
            </div>
          </div>

          {/* Direct CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#b3681b] to-[#925011] hover:from-[#9c5914] hover:to-[#7e430c] rounded-md shadow-sm transition-all hover:shadow cursor-pointer"
          >
            Book Slot
          </button>
        </div>
      </div>
    </header>
  );
};
