import React from 'react';
import { X, CheckCircle2, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookThisService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookThisService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#d8c7b0] overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Image / Header */}
        {service.imageUrl ? (
          <div className="relative h-40 w-full overflow-hidden">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20140c] via-[#20140c]/60 to-black/30" />
            
            <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#d49b54]/30 backdrop-blur-md border border-[#d49b54]/80 flex items-center justify-center text-[#ffd28e] shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title font-bold text-lg text-[#fbebd6] leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#d8c0a8] mt-0.5">
                    Specialized Vedic Astrology Consultation
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#2c1d13] to-[#3d2719] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#d49b54]/20 border border-[#d49b54]/60 flex items-center justify-center text-[#e6af6c]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-title font-bold text-lg text-[#fbebd6]">
                  {service.title}
                </h3>
                <p className="text-xs text-[#d1b89d]">
                  Specialized Vedic Astrology Consultation
                </p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#4a3a2d]">
          <p className="leading-relaxed font-medium text-[#2d2016]">
            {service.longDescription || service.description}
          </p>

          {/* Key Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="bg-[#fbf7f0] p-4 rounded-xl border border-[#ebdcc8] space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#b3681b]">
                Key Consultation Areas & Benefits
              </h4>
              <div className="space-y-1.5">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#3a2c20]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#b3681b] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Remedies Included */}
          {service.remediesOffered && service.remediesOffered.length > 0 && (
            <div className="space-y-2 pt-1">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#2d2016]">
                Remedies & Solutions Provided
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#5f4c3d]">
                {service.remediesOffered.map((rem, idx) => (
                  <li key={idx}>{rem}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Book Button */}
          <div className="pt-3 border-t border-[#f0e4d2]">
            <button
              onClick={() => {
                onClose();
                onBookThisService(service.title);
              }}
              className="w-full py-3 bg-gradient-to-r from-[#b3681b] to-[#8d4b0d] hover:from-[#9c5914] hover:to-[#763d08] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book {service.title} Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
