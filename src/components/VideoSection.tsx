import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Youtube, 
  Sparkles, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-8 sm:py-10 bg-[#f5ede2] border-y border-[#ebdccb] relative overflow-hidden">
      {/* Background Subtle Vedic Glow */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#dfbe95]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#c97a29]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Compact */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#faebd7] border border-[#dfc8ad] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-1.5">
            <Youtube className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>Vedic Insights Video</span>
          </div>

          <h2 className="font-serif-title text-xl sm:text-2xl lg:text-3xl font-bold text-[#271b12] tracking-tight">
            Watch Vedic Astrology Wisdom by Hanish Bagga
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#66513f] font-medium">
            Understand planetary transits, career dasha cycles, and practical Vedic remedies.
          </p>
        </div>

        {/* Single Compact Video Card (Side-by-side on desktop, stacked on mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="bg-[#1a110a] rounded-2xl p-3 sm:p-4.5 border border-[#e2d0ba]/25 shadow-xl text-white grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center"
        >
          
          {/* Left: 16:9 Video Frame (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
              {isPlaying ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/3JZ_D3ELwOQ?autoplay=1&rel=0"
                  title="Vedic Astrology & Planetary Cycles Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div 
                  className="relative w-full h-full group cursor-pointer" 
                  onClick={() => setIsPlaying(true)}
                  title="Click to play video"
                >
                  {/* Backdrop Thumbnail */}
                  <img
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1000&auto=format&fit=crop&q=80"
                    alt="Vedic Astrology Consultation Video"
                    className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a05] via-black/20 to-transparent" />

                  {/* Play Button Trigger */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c97a29] group-hover:bg-[#dc2626] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                    </div>
                    <span className="mt-2.5 px-3 py-1 bg-black/75 backdrop-blur-xs rounded-full text-[11px] sm:text-xs font-semibold text-[#f8dec2] border border-[#c97a29]/30 shadow-md">
                      Click to Play Video
                    </span>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#c97a29] text-white text-[10px] font-bold uppercase tracking-wider">
                      Featured Masterclass
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-semibold text-gray-200">
                    <Clock className="w-3 h-3 text-[#f3caa0]" />
                    <span>14:25</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Compact Video Details & Action (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4 h-full py-2 sm:py-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#e5b376] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#e5b376]" />
                <span>Planetary Karma &amp; Remedies</span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-[#fff3e4] leading-snug">
                How Planetary Dasha Cycles Dictate Career, Marriage &amp; Financial Growth
              </h3>
            </div>

            {/* Bottom Actions: Channel Link & Watch on YT */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#dc2626] flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                  <Youtube className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#f1ddca]">
                  Hanish Bagga Official
                </span>
              </div>

              <a
                href="https://www.youtube.com/@HanishBagga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold rounded-lg transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Visit YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
