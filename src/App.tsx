import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsBar } from './components/MetricsBar';
import { ServicesSection } from './components/ServicesSection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { TransformCtaSection } from './components/TransformCtaSection';
import { VideoSection } from './components/VideoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SeoContentSection } from './components/SeoContentSection';
import { QuestionCtaSection } from './components/QuestionCtaSection';
import { FaqAndAreasSection } from './components/FaqAndAreasSection';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem, BookingFormData } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [prefillBookingData, setPrefillBookingData] = useState<Partial<BookingFormData> | undefined>();

  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: string, prefill?: Partial<BookingFormData>) => {
    if (service) setSelectedServiceForBooking(service);
    if (prefill) setPrefillBookingData(prefill);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPrefillBookingData(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] font-sans selection:bg-[#c97a29]/20 selection:text-[#8a4e14]">
      {/* 1. Header with Logo & Google 4.9/5 Rating */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: Best Astrologer in Delhi */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 3. Metrics Bar: 17+ Yrs, 50k+ Clients, 98% Accuracy, 4.9/5 Rating, 100% Private */}
        <MetricsBar />

        {/* 4. Our Astrology Services: 8 Grid Cards */}
        <ServicesSection onSelectService={(srv) => setActiveServiceModal(srv)} />

        {/* 5. Why People in Delhi Trust Hanish Bagga? */}
        <WhyTrustSection />

        {/* 6. Ready to Transform Your Life? Golden CTA Banner with rolling zodiac (Thin & Sleek) */}
        <TransformCtaSection onOpenBooking={handleOpenBooking} />

        {/* 7. YouTube Video Insights & Discourses by Hanish Bagga */}
        <VideoSection />

        {/* 8. How Our Consultation Works: 6 Step Flow */}
        <HowItWorksSection />

        {/* 9. What Our Clients Say: Testimonials with 5-Stars */}
        <TestimonialsSection />

        {/* 10. 500+ Words SEO-Friendly Guide on Vedic Astrology & Astro Vastu in Delhi */}
        <SeoContentSection />

        {/* 11. Still Have a Question Regarding Consultation in Delhi? CTA Banner */}
        <QuestionCtaSection onOpenBooking={handleOpenBooking} />

        {/* 12. Serving All Areas of Delhi + Frequently Asked Questions */}
        <FaqAndAreasSection />
      </main>

      {/* Floating Action Button for Instant WhatsApp / Call Assistance */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/919876543210?text=Namaste%20Acharya%20Ji,%20I%20would%20like%20to%20book%20a%20consultation%20in%20Delhi."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
        prefillData={prefillBookingData}
      />

      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookThisService={(title) => {
          handleOpenBooking(title);
        }}
      />
    </div>
  );
}
