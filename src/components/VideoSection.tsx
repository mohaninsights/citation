import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { 
  Play, 
  Youtube, 
  Sparkles, 
  Clock, 
  Eye, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  description: string;
  highlights: string[];
}

const VIDEOS: VideoItem[] = [
  {
    id: 'career-dasha',
    youtubeId: '3JZ_D3ELwOQ', // Standard embed fallback
    title: 'How Planetary Dasha Cycles Dictate Career Growth & Business Success',
    category: 'Career & Wealth',
    duration: '14:25',
    views: '128K views',
    description: 'Learn how 10th house planetary alignments, Mahadasha transitions, and Saturn-Jupiter transit cycles influence corporate promotions, startup timing, and financial breakthroughs.',
    highlights: ['10th House Karma Bhava', 'Timing your job switch or business launch', 'Pacifying malefic transit obstacles']
  },
  {
    id: 'kundali-milan',
    youtubeId: 'L_LUpnjgPso',
    title: 'Beyond 36 Gunas: True Astrological Secrets of Marital Longevity & Peace',
    category: 'Love & Marriage',
    duration: '18:40',
    views: '215K views',
    description: 'Why Gun Milan alone is not enough. Deep analysis of 7th & 8th house afflictions, Mangal Dosha neutrality, and mutual emotional compatibility in Vedic astrology.',
    highlights: ['7th & 8th House scrutiny', 'Mangal Dosha mitigation', 'Navamsha (D9) spouse indicators']
  },
  {
    id: 'astro-vastu',
    youtubeId: 'kJQP7kiw5Fk',
    title: 'Astro-Vastu Remedies: Aligning Your Living Space with Your Birth Chart',
    category: 'Vastu & Energy',
    duration: '16:15',
    views: '94K views',
    description: 'Discover how planetary directions in your personal horoscope interact with directional energies (Ishan, Nairutya, Agneya) in your home or commercial office.',
    highlights: ['Directional planetary mapping', 'Remedies without demolition', 'Attracting financial abundance']
  },
  {
    id: 'sade-sati',
    youtubeId: 'fJ9rUzIMcZQ',
    title: 'Demystifying Shani Sade Sati: Remedies, Myths & Turning Obstacles to Success',
    category: 'Remedies & Karma',
    duration: '21:10',
    views: '340K views',
    description: 'A rational, Vedic perspective on Saturn’s 7.5-year cycle. Understand why Sade Sati is a period of karmic elevation, discipline, and long-term reward when handled wisely.',
    highlights: ['Phase-wise breakdown of Sade Sati', 'Authentic Saturn mantra Sadhana', 'Avoid costly superstitious remedies']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-14 sm:py-18 bg-[#f5ede2] border-y border-[#ebdccb] relative overflow-hidden">
      {/* Background Subtle Vedic Mandala Glow */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#dfbe95]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-[#c97a29]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#faebd7] border border-[#dfc8ad] text-[#9c5914] text-[11px] font-bold tracking-wide uppercase mb-2.5">
            <Youtube className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>Watch &amp; Learn</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#271b12] tracking-tight">
            Vedic Astrology Video Insights by Hanish Bagga
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#66513f] font-medium max-w-2xl mx-auto">
            Clear, rational Vedic wisdom on YouTube demystifying horoscope charts, career transitions, marriage yogas, and practical non-fear based remedies.
          </p>
        </motion.div>

        {/* Video Player & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Active Video Stage (7 Cols on Desktop) */}
          <div className="lg:col-span-7 bg-[#1c130d] rounded-2xl p-3 sm:p-4 border border-[#e2d0ba]/30 shadow-lg text-white">
            
            {/* 16:9 Video Frame */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  {/* Backdrop Thumbnail */}
                  <img
                    src={`https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&auto=format&fit=crop&q=80`}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover filter brightness-[0.65] group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140c07] via-transparent to-black/40" />

                  {/* Play Button Trigger */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c97a29]/90 text-white flex items-center justify-center shadow-xl group-hover:bg-[#e11d48] group-hover:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
                    </div>
                    <span className="mt-3 px-3 py-1 bg-black/70 backdrop-blur-xs rounded-full text-xs font-semibold text-[#f8dec2] border border-[#c97a29]/30">
                      Click to Watch Video
                    </span>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c97a29] text-white text-[10px] font-bold uppercase tracking-wider">
                      {activeVideo.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-200">
                    <Clock className="w-3 h-3 text-[#f3caa0]" />
                    <span>{activeVideo.duration}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Info Box */}
            <div className="p-3 sm:p-4 mt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#d1b99f] mb-1.5">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#e8b577]">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeVideo.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {activeVideo.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeVideo.duration}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fff3e4] leading-snug mb-2">
                {activeVideo.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#ceb8a2] leading-relaxed mb-3.5 font-normal">
                {activeVideo.description}
              </p>

              {/* Key Highlights */}
              <div className="pt-3 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider font-bold text-[#e1a86b] mb-2">
                  Key Topics Explored in this Episode:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeVideo.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#edd9c5] bg-white/5 px-2.5 py-1.5 rounded-md border border-white/5">
                      <CheckCircle2 className="w-3 h-3 text-[#dca666] flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Playlist / Video Selector Column (5 Cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#e2d0ba]">
              <h4 className="text-sm font-bold text-[#2a1d13] flex items-center gap-1.5">
                <Youtube className="w-4 h-4 text-[#e11d48]" />
                Featured Video Playlist
              </h4>
              <span className="text-xs text-[#7d6550] font-medium">
                4 Selected Episodes
              </span>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-2.5"
            >
              {VIDEOS.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <motion.div
                    key={video.id}
                    onClick={() => {
                      setActiveVideo(video);
                      setIsPlaying(true);
                    }}
                    whileHover={{ x: 3 }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex gap-3 items-center ${
                      isSelected
                        ? 'bg-white border-[#c97a29] shadow-md ring-1 ring-[#c97a29]/30'
                        : 'bg-white/80 hover:bg-white border-[#e6d8c7] shadow-2xs'
                    }`}
                  >
                    {/* Small Video Thumbnail with Play Badge */}
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#2b1c12]">
                      <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&auto=format&fit=crop&q=80"
                        alt={video.title}
                        className="w-full h-full object-cover filter brightness-[0.7]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#c97a29] text-white' : 'bg-black/60 text-white'}`}>
                          <Play className="w-3 h-3 fill-white translate-x-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1 rounded-xs font-mono">
                        {video.duration}
                      </span>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#b3681b] uppercase tracking-wide">
                        {video.category}
                      </span>
                      <h5 className="text-xs font-bold text-[#24170e] leading-snug line-clamp-2 mt-0.5">
                        {video.title}
                      </h5>
                      <div className="flex items-center gap-2 mt-1 text-[10px] text-[#78614d]">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>Full HD</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Subscribe & Watch More Channel Banner */}
            <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-[#20150e] to-[#342216] text-white border border-[#483324] flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#ffebdb]">
                    Subscribe on YouTube
                  </h5>
                  <p className="text-[11px] text-[#c9b29d]">
                    Get weekly planetary transit &amp; Vedic horoscope updates
                  </p>
                </div>
              </div>

              <a
                href="https://www.youtube.com/@HanishBagga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#e11d48] hover:bg-[#be123c] text-white text-xs font-bold rounded-lg transition-colors flex-shrink-0 cursor-pointer shadow-xs"
              >
                <span>Visit Channel</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
