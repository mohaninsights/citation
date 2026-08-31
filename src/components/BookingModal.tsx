import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Sparkles, User, Mail, Phone } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  prefillData?: Partial<BookingFormData>;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  prefillData
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    selectedService: initialService || 'Career Guidance',
    preferredDate: '',
    preferredTime: '11:00 AM',
    birthDate: '',
    birthTime: '',
    birthPlace: 'Delhi, India',
    notes: ''
  });

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, selectedService: initialService }));
    }
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        fullName: prefillData.fullName || prev.fullName,
        mobileNumber: prefillData.mobileNumber || prev.mobileNumber,
        emailAddress: prefillData.emailAddress || prev.emailAddress,
        selectedService: prefillData.selectedService || initialService || prev.selectedService
      }));
    }
  }, [initialService, prefillData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 600);
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#d8c7b0] overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2c1d13] via-[#3d2719] to-[#25170e] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#d49b54]/20 border border-[#d49b54]/60 flex items-center justify-center text-[#e6af6c]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-title font-bold text-lg text-[#fbebd6]">
                Book Vedic Consultation
              </h3>
              <p className="text-xs text-[#d1b89d]">
                1-on-1 Confidential Guidance with Acharya Ganesh
              </p>
            </div>
          </div>
          
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#423124] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:ring-1 focus:ring-[#b3681b] text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#423124] mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:ring-1 focus:ring-[#b3681b] text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#423124] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:ring-1 focus:ring-[#b3681b] text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#423124] mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.selectedService}
                    onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:ring-1 focus:ring-[#b3681b] text-gray-800 cursor-pointer"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Complete Kundli Reading">Complete Kundli Reading</option>
                    <option value="Vedic Gemstone Consultation">Vedic Gemstone Consultation</option>
                  </select>
                </div>
              </div>

              {/* Optional Vedic Birth Details for Kundli Preparation */}
              <div className="p-3.5 bg-[#fbf7f0] rounded-xl border border-[#ebdcc8]">
                <span className="text-[11px] font-bold text-[#b3681b] uppercase tracking-wider block mb-2">
                  Birth Details for Precise Vedic Kundli (Optional)
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] text-gray-600 mb-0.5">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-[#d6c7b3] rounded-sm text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-600 mb-0.5">Birth Time</label>
                    <input
                      type="time"
                      value={formData.birthTime}
                      onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-[#d6c7b3] rounded-sm text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-600 mb-0.5">Birth Place</label>
                    <input
                      type="text"
                      placeholder="Delhi"
                      value={formData.birthPlace}
                      onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                      className="w-full px-2 py-1.5 text-xs bg-white border border-[#d6c7b3] rounded-sm text-gray-700"
                    />
                  </div>
                </div>
              </div>

              {/* Consultation Mode / Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#423124] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:ring-1 focus:ring-[#b3681b] text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#423124] mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#d6c7b3] rounded-md focus:ring-1 focus:ring-[#b3681b] text-gray-700"
                  >
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:30 AM - 12:30 PM">11:30 AM - 12:30 PM</option>
                    <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                    <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                    <option value="07:30 PM - 08:30 PM">07:30 PM - 08:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-[#b3681b] to-[#8d4b0d] hover:from-[#9c5914] hover:to-[#763d08] text-white font-bold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>{isSubmitting ? 'Confirming Appointment...' : 'Confirm Consultation Booking'}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#786454]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b3681b]" />
                <span>100% Confidentiality & Data Privacy Guaranteed</span>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#fdf5eb] text-[#b3681b] flex items-center justify-center mx-auto border-2 border-[#d49b54]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif-title text-2xl font-bold text-[#221810]">
                Consultation Request Received!
              </h4>

              <p className="text-xs sm:text-sm text-[#5d493a] max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-[#2b1f15]">{formData.fullName}</strong>. Acharya Ganesh Ji's Delhi coordination desk will connect with you on <strong className="text-[#2b1f15]">{formData.mobileNumber}</strong> within 15 minutes to share the Google Meet / In-person appointment link.
              </p>

              <div className="bg-[#faf6ee] p-4 rounded-xl border border-[#e5d6c1] text-xs text-left max-w-md mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-bold text-gray-800">{formData.selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Slot:</span>
                  <span className="font-bold text-gray-800">{formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-bold text-gray-800">Delhi NCR / Online Video</span>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-[#2a1a0f] text-white text-xs font-semibold rounded-md hover:bg-[#b3681b] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
