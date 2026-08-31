import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES_LIST } from '../data/mockData';
import { ArticleItem } from '../types';

interface LatestArticlesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const LatestArticlesSection: React.FC<LatestArticlesSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-14 sm:py-18 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top: Title Left, View All Button Right */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#eaddca]">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#271b12]">
            Latest Articles
          </h2>

          <button
            onClick={() => onSelectArticle(ARTICLES_LIST[0])}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#c78033] text-xs font-bold text-[#b3681b] hover:bg-[#fbf4eb] transition-colors cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ARTICLES_LIST.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-xl overflow-hidden border border-[#e7d8c6] shadow-2xs hover:shadow-md hover:border-[#c97a29]/60 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#eadecc]">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {article.readTime}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-[15px] text-[#281b13] group-hover:text-[#b3681b] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#715c4d] line-clamp-2 leading-relaxed">
                    {article.snippet}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#f4ece1] flex items-center justify-between text-xs font-semibold text-[#b3681b]">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
