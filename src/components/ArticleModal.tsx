import React from 'react';
import { X, Calendar, Clock, BookOpen, Sparkles } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onBookConsultation
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#d8c7b0] overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header with image */}
        <div className="relative aspect-[21/9] w-full bg-[#301f13] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover filter brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#b3681b] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
              {article.category}
            </span>
            <h3 className="font-serif-title text-lg sm:text-xl font-bold text-white leading-tight">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#47372a] leading-relaxed">
          <div className="flex items-center gap-3 text-xs text-[#8c7461] pb-3 border-b border-[#f2e7d7]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#b3681b]" />
              By Hanish Bagga
            </span>
          </div>

          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Callout box */}
          <div className="p-4 bg-[#fbf6ee] rounded-xl border border-[#ebdcc7] space-y-2 mt-4">
            <h4 className="font-bold text-xs text-[#291c13]">
              Need personalized Vedic guidance on this topic?
            </h4>
            <p className="text-xs text-[#635041]">
              Consult Hanish Bagga to analyze your specific birth chart (Kundli) and receive customized Vedic gemstone & mantra remedies.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#b3681b] hover:bg-[#975412] text-white font-semibold text-xs rounded-md shadow-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Astrological Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
