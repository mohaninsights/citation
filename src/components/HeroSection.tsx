import React, { useState, useRef } from 'react';
import { Calendar, Users, ShieldCheck, Camera, Upload, RefreshCw, X, Check, Image as ImageIcon, Link as LinkIcon, MapPin, Sparkles, SlidersHorizontal } from 'lucide-react';
import hanumanChestOpenBg from '../assets/images/karol_bagh_hanuman_chest_open_banner_1788173520131.jpg';
import hanumanPureBg from '../assets/images/karol_bagh_hanuman_statue_pure_1788172967038.jpg';
import hanumanFrontCloseBg from '../assets/images/karol_bagh_hanuman_front_close_1788173133646.jpg';
import hanumanTwilightBg from '../assets/images/karol_bagh_hanuman_twilight_1788173155256.jpg';
import hanumanWideBg from '../assets/images/karol_bagh_hanuman_statue_delhi_1788172818530.jpg';
import portraitIndiaGateMobile from '../assets/images/regenerated_image_1788174954609.jpg';
import portraitIndiaGateDesktop from '../assets/images/delhi_acharya_ganesh_india_gate_1788170672200.jpg';
import portraitPng from '../assets/images/acharya_ganesh_person_cutout_clean.png';
import portraitCutout from '../assets/images/astrologer_person_cutout_1788159948116.jpg';
import portraitSenior from '../assets/images/astrologer_person_portrait_2_1788159992121.jpg';

interface HeroSectionProps {
  onOpenBooking: (service?: string, prefill?: any) => void;
}

interface ImagePreset {
  id: string;
  name: string;
  subtitle: string;
  src: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  // Available Astrologer Presets
  const personPresets: ImagePreset[] = [
    {
      id: 'acharya-india-gate',
      name: 'Acharya Ganesh (Vedic Portrait)',
      subtitle: 'Celebrity Vedic Astrologer in Delhi',
      src: portraitIndiaGateMobile
    },
    {
      id: 'acharya-india-gate-wide',
      name: 'Acharya Ganesh (Delhi Heritage)',
      subtitle: 'Delhi Sunset Atmosphere',
      src: portraitIndiaGateDesktop
    },
    {
      id: 'acharya-png',
      name: 'Acharya Ganesh (Classic Cutout)',
      subtitle: 'Red Shawl & Kundli Chart',
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
    }
  ];

  // Available Karol Bagh Hanuman Mandir Presets
  const hanumanPresets: ImagePreset[] = [
    {
      id: 'hanuman-chest-open',
      name: '108-Ft Karol Bagh Hanuman (Center)',
      subtitle: 'Hands on Chest Blessing Pose',
      src: hanumanChestOpenBg
    },
    {
      id: 'hanuman-pure',
      name: 'Karol Bagh Saffron Colossal Statue',
      subtitle: 'Authentic Delhi Mandir Landmark',
      src: hanumanPureBg
    },
    {
      id: 'hanuman-front-close',
      name: 'Hanuman Ji Front View with Gada',
      subtitle: 'Frontal Grand Statue',
      src: hanumanFrontCloseBg
    },
    {
      id: 'hanuman-twilight',
      name: 'Twilight Temple Illumination',
      subtitle: 'Sacred Golden Hour Glow',
      src: hanumanTwilightBg
    },
    {
      id: 'hanuman-wide',
      name: 'Delhi Karol Bagh Panorama',
      subtitle: 'Wide Temple Complex View',
      src: hanumanWideBg
    }
  ];

  const [personImage, setPersonImage] = useState<string>(portraitIndiaGateMobile);
  const [hanumanImage, setHanumanImage] = useState<string>(hanumanChestOpenBg);
  const [personName, setPersonName] = useState<string>('Acharya Ganesh');
  const [personTitle, setPersonTitle] = useState<string>('Vedic Astro Vastu Expert');
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'hanuman' | 'person'>('hanuman');
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  
  const personFileInputRef = useRef<HTMLInputElement>(null);
  const hanumanFileInputRef = useRef<HTMLInputElement>(null);

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

  // Handle local file uploads
  const handlePersonFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleHanumanFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setHanumanImage(uploadEvent.target.result as string);
          setShowImageModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      if (activeTab === 'hanuman') {
        setHanumanImage(customUrlInput.trim());
      } else {
        setPersonImage(customUrlInput.trim());
      }
      setCustomUrlInput('');
      setShowImageModal(false);
    }
  };

  const handleReset = () => {
    setPersonImage(portraitIndiaGateMobile);
    setHanumanImage(hanumanChestOpenBg);
    setPersonName('Acharya Ganesh');
    setPersonTitle('Vedic Astro Vastu Expert');
    setShowImageModal(false);
  };

  return (
    <section className="relative w-full bg-[#fbf8f3] py-2 sm:py-3 lg:py-4 px-2 sm:px-4 lg:px-6">
      {/* Outer Banner Card Container */}
      <div className="max-w-[1360px] mx-auto rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-[#e8ded0] relative bg-[#f5ecdd]">
        
        {/* Full Banner Panoramic Karol Bagh Hanuman Statue Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={hanumanImage}
            alt="Best Astrologer in Delhi - Karol Bagh Hanuman Mandir Statue"
            className="w-full h-full object-cover object-[center_center] filter contrast-[1.03] brightness-[1.02] transition-all duration-500"
            referrerPolicy="no-referrer"
          />

          {/* Adaptive soft gradient veil for crisp text readability on the left while keeping the Hanuman image clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf6ef]/95 via-[#fbf6ef]/85 via-50% to-transparent lg:bg-gradient-to-r lg:from-[#fbf6ef]/95 lg:via-[#fbf6ef]/70 lg:via-48% lg:to-transparent" />
          
          {/* Subtle top & bottom shadow veils */}
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#fbf6ef]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
        </div>

        {/* Top Header Bar Inside Banner */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 flex items-center justify-between">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-2.5">
            {/* Intricate Golden Vedic Mandala Icon */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center text-[#b3681b]">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="currentColor">
                <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                <circle cx="50" cy="28" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                {[...Array(12)].map((_, i) => (
                  <g key={i} transform={`rotate(${i * 30} 50 50)`}>
                    <polygon points="50,4 53,20 47,20" fill="currentColor" />
                    <circle cx="50" cy="24" r="2" fill="currentColor" />
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title font-bold text-lg sm:text-xl text-[#241710] tracking-tight leading-tight">
                Acharya Ganesh
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#665040] tracking-wide">
                Celebrity Vedic Astrologer
              </span>
            </div>
          </div>
        </div>

        {/* Main Banner Grid Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-4 sm:pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Metrics, Checkpoints & Consultation CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-3.5 sm:space-y-4 lg:pr-2">
              
              {/* Main Headline */}
              <div>
                <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#231812] tracking-tight leading-[1.08]">
                  Best Astrologer in
                  <span className="block text-[#a85c14] font-serif-title font-bold text-4xl sm:text-5xl lg:text-[54px] mt-0.5 tracking-tight drop-shadow-xs">
                    Delhi
                  </span>
                </h1>
                <p className="mt-1.5 text-xs sm:text-sm text-[#523e30] font-medium leading-snug">
                  Trusted Celebrity Vedic Astrologer for Accurate &amp; Confidential Guidance
                </p>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-0.5">
                {/* 1. Years of Experience */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-[#241710] leading-none">17+</span>
                    <span className="text-[8px] sm:text-[9px] text-[#715c4d] leading-tight mt-0.5">Years of Experience</span>
                  </div>
                </div>

                {/* 2. Happy Clients */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-[#241710] leading-none">50,000+</span>
                    <span className="text-[8px] sm:text-[9px] text-[#715c4d] leading-tight mt-0.5">Happy Clients</span>
                  </div>
                </div>

                {/* 3. Accuracy & Trust */}
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-[#e5d7c4] shadow-xs">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#fcf2e4] flex items-center justify-center flex-shrink-0 text-[#a85c14]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-xs sm:text-sm text-[#241710] leading-none">98%</span>
                    <span className="text-[8px] sm:text-[9px] text-[#715c4d] leading-tight mt-0.5">Accuracy &amp; Trust</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Checklist with Golden Circle Checks */}
              <div className="grid grid-cols-2 gap-x-2.5 gap-y-1.5 pt-0.5">
                <div className="space-y-1.5">
                  {checklistCol1.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#33241a]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#a85c14] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                        <svg className="w-2 h-2 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  {checklistCol2.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#33241a]">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#a85c14] flex items-center justify-center flex-shrink-0 text-white shadow-2xs">
                        <svg className="w-2 h-2 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Consultation Button */}
              <div className="pt-2 flex items-center">
                <button
                  onClick={() => onOpenBooking()}
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 bg-gradient-to-r from-[#b3681b] via-[#a35c15] to-[#8d4b0d] hover:from-[#9e5a14] hover:to-[#783e09] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>

            </div>

            {/* Right Column: Astrologer Person with Karol Bagh Hanuman Landmark Backdrop */}
            <div className="lg:col-span-6 flex flex-col items-center justify-end relative mt-2 lg:mt-0">
              
              <div className="relative group w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] flex flex-col items-center">
                
                {/* Person Portrait Container */}
                <div className="relative z-10 w-full rounded-2xl overflow-hidden border-2 border-[#d4994e]/60 bg-gradient-to-b from-[#2a1a0f] via-[#1a0e06] to-[#0d0704] shadow-2xl">
                  
                  {/* Subtle Background Glow behind Astrologer */}
                  <div className="absolute inset-0 bg-radial-at-c from-[#f59e0b]/20 via-transparent to-black/40 pointer-events-none" />

                  {/* Main Astrologer Image */}
                  <img
                    src={personImage}
                    alt={personName}
                    className="w-full h-auto max-h-[320px] sm:max-h-[370px] lg:max-h-[420px] object-cover object-top filter contrast-[1.03] transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Bottom Gradient for smooth blend with plaque */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#120a05] via-[#120a05]/60 to-transparent pointer-events-none" />
                </div>

                {/* Traditional Golden Engraved Plaque at bottom */}
                <div className="relative z-20 w-[94%] sm:w-[90%] -mt-4 bg-gradient-to-b from-[#241710] via-[#1a100a] to-[#0d0704] text-white py-1.5 px-3 sm:px-4 rounded-lg border-2 border-[#d4994e] shadow-2xl text-center">
                  <div className="border border-[#d4994e]/50 py-1 px-2.5 rounded-xs">
                    <h3 className="font-serif-title font-bold text-sm sm:text-base text-[#f7d7a4] tracking-wide leading-tight flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#d4994e]" />
                      <span>{personName}</span>
                      <Sparkles className="w-3 h-3 text-[#d4994e]" />
                    </h3>
                    <p className="text-[9px] sm:text-[10px] text-[#e0b87c] font-medium tracking-wider uppercase mt-0.5">
                      {personTitle}
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Image Customizer Modal (Handles both Hanuman Mandir Background & Astrologer Photo) */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-[#e3d7c5] relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#f0e6d6]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#fdf4e9] text-[#b3681b] flex items-center justify-center">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-title font-bold text-base sm:text-lg text-[#241710]">
                    Customize Banner &amp; Photo
                  </h3>
                  <p className="text-xs text-[#735f4f]">Select presets, upload file, or paste custom URL</p>
                </div>
              </div>
              <button
                onClick={() => setShowImageModal(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Selection */}
            <div className="flex border-b border-[#e8ded0] mt-3 mb-4">
              <button
                type="button"
                onClick={() => setActiveTab('hanuman')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'hanuman'
                    ? 'border-[#e07010] text-[#a85009] bg-[#fdf8f3]'
                    : 'border-transparent text-[#705a48] hover:text-[#241710]'
                }`}
              >
                <ImageIcon className="w-4 h-4 text-[#e07010]" />
                <span>Hanuman Mandir Image</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('person')}
                className={`flex-1 py-2.5 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'person'
                    ? 'border-[#b3681b] text-[#934f0d] bg-[#fdf8f3]'
                    : 'border-transparent text-[#705a48] hover:text-[#241710]'
                }`}
              >
                <Camera className="w-4 h-4 text-[#b3681b]" />
                <span>Astrologer Person Photo</span>
              </button>
            </div>

            {/* Tab 1: Hanuman Mandir Image Controls */}
            {activeTab === 'hanuman' && (
              <div className="space-y-4">
                {/* 1. Upload Local Hanuman Photo */}
                <div>
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-1.5">
                    1. Upload Hanuman Image from Device
                  </label>
                  <input
                    type="file"
                    ref={hanumanFileInputRef}
                    onChange={handleHanumanFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => hanumanFileInputRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-dashed border-[#e07010]/60 hover:border-[#e07010] bg-[#fef9f4] hover:bg-[#faefe0] text-[#9c4c05] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-[#e07010]" />
                    <span>Choose Hanuman Image (JPG, PNG, WebP)</span>
                  </button>
                </div>

                {/* 2. Choose from Karol Bagh Hanuman Presets */}
                <div>
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-2">
                    2. Choose Karol Bagh Hanuman Statue Preset
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {hanumanPresets.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => setHanumanImage(preset.src)}
                        className={`flex flex-col items-center text-left p-2 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                          hanumanImage === preset.src
                            ? 'border-[#e07010] bg-[#fdf5eb] ring-2 ring-[#e07010]/30'
                            : 'border-[#e4d7c5] hover:border-[#e07010]/50 bg-white'
                        }`}
                      >
                        <div className="w-full h-24 rounded-lg overflow-hidden mb-1.5 bg-[#1b120c]">
                          <img
                            src={preset.src}
                            alt={preset.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <span className="font-bold text-xs text-[#241710] line-clamp-1 w-full text-center">
                          {preset.name}
                        </span>
                        <span className="text-[10px] text-[#715c4d] line-clamp-1 w-full text-center">
                          {preset.subtitle}
                        </span>
                        {hanumanImage === preset.src && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#e07010] text-white flex items-center justify-center shadow-xs">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Paste Custom Image URL */}
                <div>
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-1.5">
                    3. Or Paste Hanuman Image URL
                  </label>
                  <form onSubmit={handleApplyUrl} className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://example.com/hanuman-statue.jpg"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#e07010] text-gray-800"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#e07010] hover:bg-[#c45e07] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex-shrink-0"
                    >
                      Apply URL
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Tab 2: Person Portrait Controls */}
            {activeTab === 'person' && (
              <div className="space-y-4">
                {/* 1. Upload Local Photo */}
                <div>
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-1.5">
                    1. Upload Astrologer Photo from Device
                  </label>
                  <input
                    type="file"
                    ref={personFileInputRef}
                    onChange={handlePersonFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => personFileInputRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-dashed border-[#b3681b]/50 hover:border-[#b3681b] bg-[#fdfaf5] hover:bg-[#faefe0] text-[#8d4b0d] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-[#b3681b]" />
                    <span>Choose Person Image (JPG, PNG, WebP)</span>
                  </button>
                </div>

                {/* 2. Choose from Astrologer Presets */}
                <div>
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-2">
                    2. Choose Preset Astrologer Portrait
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {personPresets.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => setPersonImage(preset.src)}
                        className={`flex flex-col items-center text-left p-2 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                          personImage === preset.src
                            ? 'border-[#b3681b] bg-[#fbf5ec] ring-2 ring-[#b3681b]/30'
                            : 'border-[#e4d7c5] hover:border-[#b3681b]/50 bg-white'
                        }`}
                      >
                        <div className="w-full h-24 rounded-lg overflow-hidden mb-1.5 bg-[#1b120c]">
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
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-1.5">
                    3. Or Paste Image URL
                  </label>
                  <form onSubmit={handleApplyUrl} className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b2] rounded-lg focus:outline-hidden focus:ring-1.5 focus:ring-[#b3681b] text-gray-800"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#b3681b] hover:bg-[#995512] text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex-shrink-0"
                    >
                      Apply URL
                    </button>
                  </form>
                </div>

                {/* Name & Title Edit */}
                <div className="pt-2 border-t border-[#f0e6d6]">
                  <label className="block text-xs font-bold text-[#35251a] uppercase tracking-wider mb-1.5">
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
            )}

            {/* Modal Footer */}
            <div className="mt-5 pt-3 border-t border-[#f0e6d6] flex items-center justify-between">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#8a5d3b] hover:text-[#241710] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset All Defaults</span>
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


