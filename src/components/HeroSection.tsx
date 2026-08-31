import React, { useState, useRef } from 'react';
import { Calendar, Users, ShieldCheck, Camera, Upload, RefreshCw, X, Check, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import indiaGateBg from '../assets/images/delhi_india_gate_sunset_1788159975571.jpg';
import portraitPng from '../assets/images/acharya_ganesh_cutout_trimmed.png';
import portraitCutout from '../assets/images/astrologer_person_cutout_1788159948116.jpg';
import portraitSenior from '../assets/images/astrologer_person_portrait_2_1788159992121.jpg';
import portraitBanner from '../assets/images/delhi_astrologer_banner_1788159520467.jpg';

interface HeroSectionProps {
  onOpenBooking: (service?: string, prefill?: any) => void;
}

interface PersonPreset {
  id: string;
  name: string;
  subtitle: string;
  src: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  // Available Presets
  const presets: PersonPreset[] = [
    {
      id: 'acharya-png',
      name: 'Acharya Ganesh (Transparent Cutout)',
      subtitle: 'Celebrity Vedic Astrologer',
      src: portraitPng
    },
    {
      id: 'acharya-vest',
      name: 'Acharya Ganesh (Golden Vest)',
      subtitle: 'Vedic & Vastu Expert',
      src: portraitCutout
    },
    {
      id: 'acharya-senior',
      name: 'Senior Vedic Acharya',
      subtitle: 'Namaste Blessing',
      src: portraitSenior
    },
    {
      id: 'acharya-delhi',
      name: 'Acharya Ganesh (Full Atmosphere)',
      subtitle: 'Executive Desk Portrait',
      src: portraitBanner
    }
  ];

  const [personImage, setPersonImage] = useState<string>(portraitPng);
  const [personName, setPersonName] = useState<string>('Acharya Ganesh');
  const [personTitle, setPersonTitle] = useState<string>('Celebrity Vedic Astrologer & Vastu Shastra Mentor');
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const checklistCol1 = [
    'Career Guidance',
    'Marriage Solutions',
    'Love & Relationship',
    'Health Predictions'
  ];

  const checklistCol2 = [
    'Business & Finance',
    'Vastu Consultation',
    'Numerology',
    'Spiritual Healing'
  ];

  // Handle local file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setPersonImage(uploadEvent.target.result as string);
          setShowImageModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      setPersonImage(customUrlInput.trim());
      setCustomUrlInput('');
      setShowImageModal(false);
    }
  };

  const handleSelectPreset = (preset: PersonPreset) => {
    setPersonImage(preset.src);
    setShowImageModal(false);
  };

  const handleReset = () => {
    setPersonImage(portraitPng);
    setPersonName('Acharya Ganesh');
    setPersonTitle('Celebrity Vedic Astrologer & Vastu Shastra Mentor');
    setShowImageModal(false);
  };

  return (
    <section className="relative w-full bg-[#fbf8f3] py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8">
      {/* Outer Banner Card Container with rounded corners matching reference */}
      <div className="max-w-[1400px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#e8ded0] relative bg-[#f5ecdd]">
        
        {/* Full Banner Panoramic India Gate Sunset & Celestial Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={indiaGateBg}
            alt="Delhi India Gate Sunset Vedic Astrology Background"
            className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.01]"
            referrerPolicy="no-referrer"
          />

          {/* Left subtle gradient veil for crystal clear text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef]/95 via-[#fbf6ef]/85 via-50% to-transparent lg:via-[#fbf6ef]/70 lg:via-42%" />
          
          {/* Top subtle fade */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#fbf6ef]/85 via-[#fbf6ef]/40 to-transparent pointer-events-none" />

          {/* Bottom subtle shadow */}
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#1f140c]/40 to-transparent pointer-events-none" />
        </div>

        {/* Top Header Bar Inside Banner */}
        <div className="relative z-20 px-5 sm:px-8 lg:px-12 pt-6 sm:pt-7 flex items-center justify-between">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            {/* Intricate Golden Vedic Mandala Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center text-[#b3681b]">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="currentColor">
                <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                {[...Array(12)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                    <polygon points="50,4 53,20 47,20" fill="currentColor" />
                    <circle cx="50" cy="24" r="2" fill="currentColor" />
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title font-bold text-xl sm:text-2xl text-[#241710] tracking-tight leading-tight">
                Acharya Ganesh
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-[#665040] tracking-wide">
                Celebrity Vedic Astrologer
              </span>
            </div>
          </div>

          {/* Right Floating Google Rating Badge matching image */}
          <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#e3d4c0] shadow-md">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs sm:text-sm text-[#241710] leading-none">4.9/5</span>
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs leading-none">★</span>
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-[#786454] leading-none mt-0.5">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Main Banner Grid Content (Without form overlay covering the person) */}
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 pt-6 pb-6 sm:pb-8 lg:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Metrics, Checkpoints & Consultation CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:pr-4">
              
              {/* Main Headline */}
              <div>
                <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#231812] tracking-tight leading-[1.06]">
                  Best Astrologer in
                  <span className="block text-[#a85c14] font-serif-title font-bold text-5xl sm:text-6xl lg:text-[70px] mt-0.5 tracking-tight drop-shadow-xs">
                    Delhi
                  </span>
                </h1>
                <p className="mt-2 text-base sm:text-lg text-[#523e30] font-medium leading-snug">
                  Trusted Celebrity Vedic Astrologer for Accurate &amp; Confidential Guidance
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {/* 1. Years of Experience */}
                <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base text-[#241710] leading-none">17+</span>
                    <span className="text-[10px] text-[#715c4d] leading-tight mt-0.5">Years of Experience</span>
                  </div>
                </div>

                {/* 2. Happy Clients */}
                <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base text-[#241710] leading-none">50,000+</span>
                    <span className="text-[10px] text-[#715c4d] leading-tight mt-0.5">Happy Clients</span>
                  </div>
                </div>

                {/* 3. Accuracy & Trust */}
                <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm sm:text-base text-[#241710] leading-none">98%</span>
                    <span className="text-[10px] text-[#715c4d] leading-tight mt-0.5">Accuracy &amp; Trust</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Checklist with Golden Circle Checks */}
              <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1">
                <div className="space-y-2">
                  {checklistCol1.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#33241a]">
                      <div className="w-4 h-4 rounded-full bg-[#a85c14] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                        <svg className="w-2.5 h-2.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {checklistCol2.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#33241a]">
                      <div className="w-4 h-4 rounded-full bg-[#a85c14] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                        <svg className="w-2.5 h-2.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Consultation Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#b3681b] via-[#a35c15] to-[#8d4b0d] hover:from-[#9e5a14] hover:to-[#783e09] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>

                <button
                  onClick={() => setShowImageModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/90 hover:bg-white text-[#573e2c] hover:text-[#9e5a14] font-semibold text-xs sm:text-sm rounded-xl border border-[#d6c7b2] shadow-xs transition-all duration-150 cursor-pointer"
                  title="Change person image"
                >
                  <Camera className="w-4 h-4 text-[#a85c14]" />
                  <span>Change Person Photo</span>
                </button>
              </div>
            </div>

            {/* Right Column: Prominent Person Image (Clean transparent PNG, no white border or card box) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-end relative mt-4 lg:mt-0">
              
              {/* Person Image Container */}
              <div className="relative group w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] flex flex-col items-center">
                
                {/* Clean Astrologer Transparent PNG Cutout - No White Border */}
                <div className="relative z-10 w-full flex items-end justify-center">
                  <img
                    src={personImage}
                    alt={personName}
                    className="w-full h-auto max-h-[420px] sm:max-h-[480px] lg:max-h-[520px] object-contain object-bottom filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Traditional Golden Engraved Plaque on Desk */}
                <div className="relative z-20 w-[90%] sm:w-[85%] -mt-4 bg-gradient-to-b from-[#241710] via-[#1a100a] to-[#0d0704] text-white py-2 px-3 sm:px-4 rounded-lg border-2 border-[#d4994e] shadow-2xl text-center">
                  <div className="border border-[#d4994e]/50 py-1 px-3 rounded-xs">
                    <h3 className="font-serif-title font-bold text-base sm:text-lg text-[#f7d7a4] tracking-wide leading-tight">
                      {personName}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#e0b87c] font-medium tracking-wider uppercase mt-0.5">
                      {personTitle}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Change Person Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#e3d7c5] relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#f0e6d6]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#fdf4e9] text-[#b3681b] flex items-center justify-center">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title font-bold text-lg text-[#241710]">Change Person Photo</h3>
                  <p className="text-xs text-[#735f4f]">Upload custom image, choose preset, or paste URL</p>
                </div>
              </div>
              <button
                onClick={() => setShowImageModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5 pt-4">
              
              {/* 1. Upload Local Photo */}
              <div>
                <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-2">
                  1. Upload Photo from Device
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-dashed border-[#b3681b]/50 hover:border-[#b3681b] bg-[#fdfaf5] hover:bg-[#faefe0] text-[#8d4b0d] font-semibold text-sm transition-all cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  <span>Choose Image File (JPG, PNG, WebP)</span>
                </button>
              </div>

              {/* 2. Choose from Astrologer Presets */}
              <div>
                <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-2">
                  2. Choose Preset Astrologer Portrait
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset)}
                      className={`flex flex-col items-center text-left p-2.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                        personImage === preset.src
                          ? 'border-[#b3681b] bg-[#fbf5ec] ring-2 ring-[#b3681b]/30'
                          : 'border-[#e4d7c5] hover:border-[#b3681b]/50 bg-white'
                      }`}
                    >
                      <div className="w-full h-24 rounded-lg overflow-hidden mb-2 bg-[#1b120c]">
                        <img
                          src={preset.src}
                          alt={preset.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="font-bold text-xs text-[#241710] line-clamp-1 w-full text-center">
                        {preset.name}
                      </span>
                      <span className="text-[10px] text-[#715c4d] line-clamp-1 w-full text-center">
                        {preset.subtitle}
                      </span>
                      {personImage === preset.src && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#b3681b] text-white flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Paste Custom Image URL */}
              <div>
                <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-2">
                  3. Or Paste Image URL
                </label>
                <form onSubmit={handleApplyUrl} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#b3681b] text-gray-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#b3681b] hover:bg-[#995512] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Apply URL
                  </button>
                </form>
              </div>

              {/* Optional Name & Title Edit */}
              <div className="pt-2 border-t border-[#f0e6d6]">
                <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-2">
                  Astrologer Name &amp; Title
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    placeholder="Astrologer Name"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#d6c7b2] rounded-lg text-gray-800"
                  />
                  <input
                    type="text"
                    value={personTitle}
                    onChange={(e) => setPersonTitle(e.target.value)}
                    placeholder="Title / Credentials"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#d6c7b2] rounded-lg text-gray-800"
                  />
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-5 pt-3 border-t border-[#f0e6d6] flex items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#8a5d3b] hover:text-[#241710] transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
              
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="px-5 py-2 bg-[#241710] hover:bg-[#3d271c] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


