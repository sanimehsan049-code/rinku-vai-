import React from 'react';
import {
  Calendar,
  Phone,
  ArrowRight,
  Stethoscope,
  Baby,
  Sparkles,
  Activity,
  HeartPulse,
  Clock,
  MapPin,
  CheckCircle2,
  User,
} from 'lucide-react';
import { doctorData } from '../config/doctorData';

interface HeroSectionProps {
  currentPortrait: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentPortrait }) => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const headerOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToService = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const serviceEl = document.getElementById('service');
    if (serviceEl) {
      const headerOffset = 80;
      const elementPosition = serviceEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const getBannerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-white" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-white" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-white" />;
      default:
        return <Stethoscope className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 bg-gradient-to-b from-[#f0fdfa]/50 via-[#f8fafc] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container - Matching the user's provided picture */}
        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl shadow-teal-900/5 overflow-hidden">
          
          {/* Subtle curved accents like medical chamber interior wall */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-50/60 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            
            {/* Left Column: Brand, Tagline, 5 Services, and CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* Slogan with Heart Logo */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-teal-700"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M7 11h2l1.5-3 2 6 1.5-3h2" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-wide text-teal-800 uppercase">
                  {doctorData.chamber.slogan}
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  <span className="text-[#0f2c59]">Dr. Mahabub's </span>
                  <span className="text-teal-700 block sm:inline">Chamber</span>
                </h1>
                
                {/* Subtitle with line dividers */}
                <div className="flex items-center gap-3 mt-3 max-w-lg">
                  <div className="h-[1.5px] w-8 sm:w-12 bg-teal-600/40" />
                  <p className="text-sm sm:text-base font-semibold text-slate-700 tracking-wide">
                    {doctorData.chamber.tagline}
                  </p>
                  <div className="h-[1.5px] flex-1 bg-teal-600/40" />
                </div>
              </div>

              {/* 5 Core Services from Banner */}
              <div className="w-full pt-1">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-2">
                  {doctorData.services.map((service) => (
                    <a
                      key={service.id}
                      href="#service"
                      onClick={scrollToService}
                      className="group flex flex-col items-center text-center p-2 rounded-xl hover:bg-teal-50/80 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-teal-700 group-hover:bg-teal-800 flex items-center justify-center shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform mb-2">
                        {getBannerIcon(service.icon)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">
                        {service.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Book an Appointment + Direct Call */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-md shadow-teal-700/25 transition-all hover:scale-[1.01] active:scale-95 group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${doctorData.chamber.phone}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm sm:text-base transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call: {doctorData.chamber.phoneDisplay}</span>
                </a>
              </div>

              {/* Chamber Hours & Location Snapshot */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 border-t border-slate-100 w-full">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal-700" />
                  <span>
                    <strong>Hours:</strong> {doctorData.chamber.schedule[0].timing} ({doctorData.chamber.schedule[0].days})
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" />
                  <span>{doctorData.chamber.address}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Doctor Portrait & Badge (Directly reflecting the banner) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              {/* Quote from the banner */}
              <div className="w-full text-right mb-2 hidden lg:block pr-4">
                <p className="text-sm font-semibold text-slate-700 italic">
                  {doctorData.doctor.quote}
                </p>
                <div className="h-[1.5px] w-16 bg-teal-600/50 ml-auto mt-1" />
              </div>

              {/* Portrait Frame */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <img
                  src={currentPortrait}
                  alt={doctorData.doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = doctorData.doctor.portrait;
                  }}
                />

                {/* Subtle bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-75" />

                {/* Doctor Info Pill Badge on bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-md border border-slate-100 flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="font-extrabold text-sm sm:text-base text-[#0f2c59] tracking-tight">
                          {doctorData.doctor.name}
                        </h2>
                        <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      </div>
                      <p className="text-xs text-teal-700 font-semibold">
                        {doctorData.doctor.title}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {doctorData.doctor.registration}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
