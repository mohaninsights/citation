import React, { useState } from 'react';
import { Phone, User, Menu, X, BookOpen, GraduationCap } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState<string | null>(null);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses', onClick: () => onOpenBooking('Astrology Courses & Consultation') },
    { name: 'Products', href: '#products', onClick: () => onOpenBooking('Vedic Gemstones & Yantras') },
    { name: 'Reports', href: '#reports', onClick: () => onOpenBooking('Janam Kundli & Dasha Report') },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blogs', href: '#services' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fdfcf9] border-b border-[#ebdcca] shadow-2xs">
        {/* Top Header Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
          
          {/* Left: Acharya Ganesh Logo Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex flex-col items-center">
              {/* Circular Logo Badge */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                {/* Mandala SVG Ring & Guru Graphic */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                  {/* Outer Mandala Rays / Petals */}
                  <circle cx="50" cy="46" r="42" fill="#7a3e1d" />
                  <circle cx="50" cy="46" r="40" fill="#fdfaf3" stroke="#b06c3b" strokeWidth="2.5" />
                  
                  {/* Sun / Star burst pattern in background */}
                  <g stroke="#deb887" strokeWidth="1.5" opacity="0.6">
                    <line x1="50" y1="8" x2="50" y2="84" />
                    <line x1="12" y1="46" x2="88" y2="46" />
                    <line x1="23" y1="19" x2="77" y2="73" />
                    <line x1="23" y1="73" x2="77" y2="19" />
                  </g>
                  
                  <circle cx="50" cy="46" r="33" fill="#f5ede0" stroke="#8b4513" strokeWidth="1.5" strokeDasharray="3 2" />
                  <circle cx="50" cy="46" r="28" fill="#e8d5bc" />

                  {/* Meditating Rishi / Acharya Figure */}
                  {/* Aura */}
                  <circle cx="50" cy="42" r="20" fill="#ffd992" opacity="0.8" />
                  {/* Head & Topknot */}
                  <circle cx="50" cy="33" r="6" fill="#8b4513" />
                  <circle cx="50" cy="25" r="3.5" fill="#5c290a" />
                  <circle cx="50" cy="34" r="5" fill="#e0a96d" />
                  {/* Beard */}
                  <path d="M 46 35 Q 50 43 54 35 Z" fill="#5c290a" />
                  {/* Tilak */}
                  <line x1="50" y1="31" x2="50" y2="34" stroke="#d9381e" strokeWidth="1" />
                  {/* Saffron Robe / Meditating Body */}
                  <path d="M 37 54 C 38 43, 44 41, 50 41 C 56 41, 62 43, 63 54 C 61 58, 39 58, 37 54 Z" fill="#d96b27" />
                  {/* Crossed Legs in Lotus Pose */}
                  <ellipse cx="50" cy="55" rx="16" ry="6" fill="#bf5717" />
                  {/* Mala / Rudraksha string */}
                  <path d="M 45 42 Q 50 49 55 42" fill="none" stroke="#5c290a" strokeWidth="1" strokeDasharray="1.5 1" />
                </svg>

                {/* Bottom Golden Ribbon / Banner Banner Text */}
                <div className="absolute -bottom-2 inset-x-[-12px] flex flex-col items-center">
                  <div className="bg-gradient-to-r from-[#8a4218] via-[#a85822] to-[#8a4218] text-[#fffae8] text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-sm shadow-xs border border-[#ffcf87]/60 whitespace-nowrap">
                    Acharya Ganesh
                  </div>
                  <span className="text-[6.5px] sm:text-[7px] text-[#85471d] font-bold tracking-tight mt-[1px]">
                    ज्योतिष का विचार
                  </span>
                </div>
              </div>
            </div>

            {/* Hidden on small mobile, visible on tablet+ */}
            <div className="hidden lg:flex flex-col ml-1">
              <span className="font-serif-title font-bold text-base sm:text-lg text-[#261a12] tracking-tight leading-none">
                Acharya Ganesh
              </span>
              <span className="text-[10px] text-[#915421] font-semibold tracking-wider uppercase mt-0.5">
                Vedic Astrology &amp; Astro-Vastu
              </span>
            </div>
          </a>

          {/* Right Area: Phone Numbers & Login Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {/* Phone Number 1 */}
            <a
              href="tel:+917300004325"
              className="flex items-center gap-2 group text-[#1a1a1a] hover:text-[#a85822] transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-[#2b2118] flex items-center justify-center group-hover:border-[#a85822] group-hover:bg-[#faeee2] transition-all">
                <Phone className="w-4 h-4 text-[#2b2118] group-hover:text-[#a85822]" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                +91 73000-04325
              </span>
            </a>

            {/* Phone Number 2 */}
            <a
              href="tel:+917300004326"
              className="flex items-center gap-2 group text-[#1a1a1a] hover:text-[#a85822] transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-[#2b2118] flex items-center justify-center group-hover:border-[#a85822] group-hover:bg-[#faeee2] transition-all">
                <Phone className="w-4 h-4 text-[#2b2118] group-hover:text-[#a85822]" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                +91 73000-04326
              </span>
            </a>

            {/* Log in Pill Button */}
            <button
              onClick={() => setShowLoginModal('Log in')}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a] rounded-full transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <User className="w-4 h-4" />
              <span>Log in</span>
            </button>

            {/* Course Login Pill Button */}
            <button
              onClick={() => setShowLoginModal('Course Login')}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white border border-[#1a1a1a] rounded-full transition-all duration-200 cursor-pointer shadow-2xs"
            >
              <span>Course Login</span>
            </button>
          </div>

          {/* Mobile Right Controls: Quick Call & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+917300004325"
              className="w-8 h-8 rounded-full border border-[#2b2118] flex items-center justify-center text-[#2b2118] bg-white shadow-2xs"
              aria-label="Call Acharya Ganesh"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#2b2118] hover:bg-[#f3e8da] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Bottom Navigation Bar: Centered Nav Links matching image */}
        <div className="border-t border-[#ebdcca] bg-[#fbf8f2]/90 hidden md:block">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-center gap-6 lg:gap-10 py-2.5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="text-xs sm:text-[13.5px] font-semibold text-[#291d14] hover:text-[#b3681b] transition-colors relative py-1 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b3681b] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#ebdcca] bg-[#fbf9f5] px-4 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
            {/* Nav links */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#e9dcce]">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="px-3 py-2 text-xs font-semibold text-[#291d14] hover:bg-[#f2e6d6] rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Phone numbers */}
            <div className="space-y-2 pt-1">
              <a
                href="tel:+917300004325"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border border-[#e5d8c7] text-xs font-bold text-[#1a1a1a]"
              >
                <Phone className="w-4 h-4 text-[#a85822]" />
                <span>+91 73000-04325</span>
              </a>
              <a
                href="tel:+917300004326"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white border border-[#e5d8c7] text-xs font-bold text-[#1a1a1a]"
              >
                <Phone className="w-4 h-4 text-[#a85822]" />
                <span>+91 73000-04326</span>
              </a>
            </div>

            {/* Login buttons on mobile */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowLoginModal('Log in');
                }}
                className="w-full py-2 text-xs font-semibold text-[#1a1a1a] border border-[#1a1a1a] rounded-full text-center flex items-center justify-center gap-1.5 bg-white"
              >
                <User className="w-3.5 h-3.5" />
                <span>Log in</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setShowLoginModal('Course Login');
                }}
                className="w-full py-2 text-xs font-semibold text-[#1a1a1a] border border-[#1a1a1a] rounded-full text-center bg-white"
              >
                Course Login
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Login / Course Portal Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#d8c7b0] overflow-hidden p-6 relative">
            <button
              onClick={() => setShowLoginModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#faebd7] text-[#a85822] mx-auto flex items-center justify-center mb-3">
                {showLoginModal === 'Course Login' ? (
                  <GraduationCap className="w-6 h-6" />
                ) : (
                  <User className="w-6 h-6" />
                )}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#24170d]">
                {showLoginModal === 'Course Login' ? 'Student Course Portal' : 'Acharya Ganesh Member Login'}
              </h3>
              <p className="text-xs text-[#6e5a4a] mt-1">
                Access your personalized astrological reports, consultations &amp; learning modules.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Login functionality will be authenticated with your registered credentials.');
                setShowLoginModal(null);
              }}
              className="space-y-3.5 text-xs sm:text-sm"
            >
              <div>
                <label className="block font-semibold text-[#3a2c20] mb-1">Mobile Number or Email</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 98765 43210 or email@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#dacab6] bg-[#fbf9f6] focus:outline-none focus:ring-2 focus:ring-[#b3681b]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#3a2c20] mb-1">Password / OTP</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#dacab6] bg-[#fbf9f6] focus:outline-none focus:ring-2 focus:ring-[#b3681b]"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#8c531d] pt-1">
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Please contact our support team at +91 73000-04325 for instant password reset assistance.'); }} className="hover:underline">
                  Forgot Password?
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setShowLoginModal(null);
                    onOpenBooking();
                  }}
                  className="hover:underline font-semibold"
                >
                  New user? Register / Book
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 mt-2 bg-[#1a1a1a] hover:bg-[#333] text-white font-bold rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
