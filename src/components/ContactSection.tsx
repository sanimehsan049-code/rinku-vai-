import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  User,
  Activity,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import { doctorData } from '../config/doctorData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      return;
    }

    const message = `Hello, I would like to book a serial at Dr. Mahabub's Chamber:\n\n` +
      `• Patient Name: ${patientName}\n` +
      `• Phone: ${patientPhone}\n` +
      `• Service: ${selectedService || 'General Consultation'}\n` +
      `• Preferred Date: ${preferredDate || 'Upcoming date'}\n` +
      (notes ? `• Symptoms/Note: ${notes}\n\n` : '\n') +
      `Please confirm the serial time.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${doctorData.chamber.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(doctorData.chamber.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-18 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2c59] tracking-tight">
            Chamber Location & Serial Booking
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Kahali Mor, Gangni, Meherpur · Saturday to Thursday (4:30 PM – 9:00 PM)
          </p>
        </div>

        {/* 2-Column Clean Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${doctorData.chamber.phone}`}
                className="p-4 rounded-xl bg-teal-50/80 border border-teal-200 hover:border-teal-400 hover:bg-teal-100/70 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-teal-800 bg-white px-2 py-0.5 rounded-full border border-teal-200">
                    Call
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Phone Helpline</span>
                  <span className="text-sm font-bold text-[#0f2c59] font-mono">
                    {doctorData.chamber.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${doctorData.chamber.whatsappNumber}?text=${encodeURIComponent(
                  "Hello, I would like to inquire about booking a serial at Dr. Mahabub's Chamber."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-100/70 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                    WhatsApp
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Direct WhatsApp</span>
                  <span className="text-sm font-bold text-slate-800 font-mono">
                    {doctorData.chamber.whatsappDisplay}
                  </span>
                </div>
              </a>
            </div>

            {/* Chamber Hours */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2">
                <Clock className="w-4 h-4 text-teal-700" />
                <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                  Chamber Consultation Hours
                </h3>
              </div>
              <div className="space-y-1.5 text-xs">
                {doctorData.chamber.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-slate-800 block">
                        {item.days}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {item.type}
                      </span>
                    </div>
                    <span className="font-bold text-teal-800 font-mono text-xs">
                      {item.timing}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                    Chamber Address
                  </h3>
                </div>
                <button
                  onClick={copyAddress}
                  className="text-xs text-slate-500 hover:text-teal-700 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="text-xs text-slate-700 space-y-0.5">
                <p className="font-bold text-slate-900 text-sm">
                  {doctorData.chamber.name}
                </p>
                <p className="font-medium">
                  {doctorData.chamber.address}
                </p>
              </div>

              <a
                href={doctorData.chamber.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors mt-1"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-[#0f2c59]">
                  Book an Appointment Serial
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Send your appointment inquiry directly to the chamber assistant.
                </p>
              </div>

              <form onSubmit={handleSubmitInquiry} className="space-y-3">
                
                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Enter full name"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm text-slate-800 placeholder-slate-400 outline-none"
                    />
                  </div>
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="017XXXXXXXX"
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm text-slate-800 placeholder-slate-400 outline-none"
                    />
                  </div>
                </div>

                {/* Service & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service
                    </label>
                    <div className="relative">
                      <Activity className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm text-slate-800 outline-none bg-white appearance-none"
                      >
                        <option value="">-- Select Service --</option>
                        {doctorData.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm text-slate-800 outline-none bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Symptoms / Note */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Symptoms or Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Brief description of symptoms..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-sm text-slate-800 placeholder-slate-400 outline-none resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${doctorData.chamber.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
