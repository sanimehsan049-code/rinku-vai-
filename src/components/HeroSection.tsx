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
  ShieldCheck,
  Quote,
  Camera,
} from 'lucide-react';
import { doctorData } from '../config/doctorData';

interface HeroSectionProps {
  currentPortrait: string;
  onUpdatePortrait?: (newImg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentPortrait, onUpdatePortrait }) => {
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
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#f0fdfa]/70 via-[#f8fafc] to-white overflow-hidden"
    >
      {/* Premium ambient decorative lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-teal-200/30 via-emerald-100/20 to-sky-100/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-300/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-emerald-300/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Container - Luxury Medical Elevation */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#fcfefd] to-[#f4fbf8] border border-teal-100/90 shadow-2xl shadow-teal-950/5 overflow-hidden">
          
          {/* Subtle architectural curved accents like private healthcare executive suite */}
          <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-teal-50/70 via-emerald-50/20 to-transparent pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-teal-400/10 to-emerald-400/5 blur-2xl pointer-events-none" />

          {/* Focused Element: Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-4 sm:p-8 lg:p-12 relative z-10">
            
            {/* Left Column: Brand, Tagline, 5 Services, and CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* Slogan Pill with Animated Health Pulse */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 shadow-2xs">
                <div className="w-6 h-6 rounded-md bg-teal-700 flex items-center justify-center text-white shadow-xs">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M7 11h2l1.5-3 2 6 1.5-3h2" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-teal-900 uppercase">
                    {doctorData.chamber.slogan}
                  </span>
                </div>
              </div>

              {/* Grand Headline & Subtitle */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                  <span className="text-[#0b1c3d]">Dr. Mahabub's </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600 block sm:inline">
                    Chamber
                  </span>
                </h1>
                
                {/* Tagline with polished accents */}
                <div className="flex items-center gap-3 pt-1 max-w-lg">
                  <div className="h-[2px] w-10 sm:w-14 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full" />
                  <p className="text-sm sm:text-base font-bold text-slate-800 tracking-wide uppercase text-xs sm:text-sm">
                    {doctorData.chamber.tagline}
                  </p>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Providing attentive clinical consultations, accurate diagnosis, and personalized family healthcare in Kahali Mor, Gangni, Meherpur.
                </p>
              </div>

              {/* 5 Core Circular Medical Services from Banner */}
              <div className="w-full pt-1">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-3">
                  {doctorData.services.map((service) => (
                    <a
                      key={service.id}
                      href="#service"
                      onClick={scrollToService}
                      className="group flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl bg-white/80 hover:bg-white border border-slate-100 hover:border-teal-200/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-700 to-emerald-700 group-hover:from-teal-600 group-hover:to-emerald-600 flex items-center justify-center shadow-md shadow-teal-700/25 group-hover:scale-105 transition-transform mb-2">
                        {getBannerIcon(service.icon)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-800 group-hover:text-teal-900 leading-tight">
                        {service.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Actions: Luxury Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 hover:from-teal-600 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-700/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${doctorData.chamber.phone}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-teal-50/50 text-slate-800 hover:text-teal-900 border border-slate-200 hover:border-teal-300 font-bold text-sm sm:text-base transition-all duration-200 shadow-2xs hover:shadow-sm"
                >
                  <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>{doctorData.chamber.phoneDisplay}</span>
                </a>
              </div>

              {/* Chamber Concierge Bar (Hours & Location) */}
              <div className="pt-3 w-full">
                <div className="p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-teal-50 text-teal-700">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">
                        {doctorData.chamber.schedule[0].timing}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {doctorData.chamber.schedule[0].days}
                      </span>
                    </div>
                  </div>

                  <div className="h-6 w-[1px] bg-slate-200 hidden sm:block" />

                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-teal-50 text-teal-700">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 block">
                        Kahali Mor, Gangni
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Meherpur, Bangladesh
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Doctor Portrait Presentation (Elevated Executive Style) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              {/* Floating Quote Badge */}
              <div className="w-full flex justify-end mb-3 pr-2 hidden lg:flex">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-teal-100 shadow-xs backdrop-blur-md">
                  <Quote className="w-3.5 h-3.5 text-teal-600 rotate-180" />
                  <span className="text-xs font-semibold text-slate-700 italic">
                    {doctorData.doctor.quote}
                  </span>
                </div>
              </div>

              {/* High-Resolution Portrait with Luxury Framing */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-900/10 bg-slate-100 group">
                <img
                  src={currentPortrait}
                  alt={doctorData.doctor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.src = doctorData.doctor.portrait;
                  }}
                />

                {/* Gentle cinematic lighting vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-950/20 via-transparent to-transparent pointer-events-none" />

                {/* Top Floating Status & Photo Upload Control */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-md pointer-events-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Chamber Active</span>
                  </div>

                  {onUpdatePortrait && (
                    <label className="pointer-events-auto cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hover:bg-white text-slate-800 text-[11px] font-bold shadow-md border border-slate-200/90 transition-all hover:scale-105 active:scale-95">
                      <Camera className="w-3.5 h-3.5 text-teal-700" />
                      <span>{currentPortrait.startsWith('data:') ? 'Change Photo' : 'Upload Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              if (typeof reader.result === 'string') {
                                onUpdatePortrait(reader.result);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                    </label>
                  )}
                </div>

                {/* Doctor Identity Pill (Matching banner design - Responsive & Fully Visible on Mobile) */}
                <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-white/90 flex items-center gap-2.5 sm:gap-3 text-left">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-700 to-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-700/20">
                      <Stethoscope className="w-4 h-4 sm:w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                        <h2 className="font-extrabold text-xs sm:text-base text-[#0b1c3d] tracking-tight leading-snug whitespace-normal break-words">
                          {doctorData.doctor.name}
                        </h2>
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 shrink-0" />
                      </div>
                      <p className="text-[11px] sm:text-xs text-teal-700 font-bold leading-tight mt-0.5 whitespace-normal">
                        {doctorData.doctor.title}
                      </p>
                      <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 text-[9px] sm:text-[10px] text-slate-500 font-medium whitespace-normal">
                        <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{doctorData.doctor.registration}</span>
                      </div>
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
