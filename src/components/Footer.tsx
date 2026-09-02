import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Send } from 'lucide-react';

interface FooterProps {
  onOpenBooking: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#faf7f2] border-t border-[#e2d5c3] pt-12 pb-8 text-[#3c2e22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#e9dcce]">
          
          {/* Col 1: Brand & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2a1b10] border border-[#d8974a] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-[#e6af6c]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-title font-bold text-xl text-[#221810] leading-none">
                  Hanish Bagga
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#b3681b] font-semibold mt-1">
                  Celebrity Vedic Astrologer
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6e5949] leading-relaxed">
              Illuminating lives worldwide with timeless Vedic wisdom, accurate predictive astrology, and non-demolition Vastu remedies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#36271c] text-[#f2e6d6] flex items-center justify-center hover:bg-[#b3681b] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#36271c] text-[#f2e6d6] flex items-center justify-center hover:bg-[#b3681b] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#36271c] text-[#f2e6d6] flex items-center justify-center hover:bg-[#b3681b] hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#36271c] text-[#f2e6d6] flex items-center justify-center hover:bg-[#b3681b] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs sm:text-sm text-[#251a12] tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#675445] font-medium">
              <li><a href="#" className="hover:text-[#b3681b] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#b3681b] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#b3681b] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#b3681b] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#b3681b] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs sm:text-sm text-[#251a12] tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-[#675445] font-medium">
              <li><button onClick={() => onOpenBooking('Career Astrology')} className="hover:text-[#b3681b] transition-colors text-left">Career Astrology</button></li>
              <li><button onClick={() => onOpenBooking('Match Making')} className="hover:text-[#b3681b] transition-colors text-left">Match Making</button></li>
              <li><button onClick={() => onOpenBooking('Litigation Astrology')} className="hover:text-[#b3681b] transition-colors text-left">Litigation Astrology</button></li>
              <li><button onClick={() => onOpenBooking('Muhurta Consultation')} className="hover:text-[#b3681b] transition-colors text-left">Muhurta Consultation</button></li>
              <li><button onClick={() => onOpenBooking('Health Astrology')} className="hover:text-[#b3681b] transition-colors text-left">Health Astrology</button></li>
              <li><button onClick={() => onOpenBooking('Astrology Guidance')} className="hover:text-[#b3681b] transition-colors text-left">Astrology Guidance</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Us (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs sm:text-sm text-[#251a12] tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-[#675445]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b3681b] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#b3681b] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b3681b] flex-shrink-0" />
                <a href="mailto:info@acharyaganesh.com" className="hover:text-[#b3681b] transition-colors">info@acharyaganesh.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b3681b] flex-shrink-0 mt-0.5" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter (2 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs sm:text-sm text-[#251a12] tracking-wider">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#b3681b] text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 bg-gradient-to-r from-[#b3681b] to-[#8f4d0e] hover:from-[#9c5914] hover:to-[#743e09] text-white font-semibold text-xs rounded-md shadow-xs transition-all cursor-pointer"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#735e4e] gap-3">
          <p>© 2025 Hanish Bagga. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#b3681b] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#b3681b] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
