import React from 'react';
import {
  Stethoscope,
  Baby,
  Sparkles,
  Activity,
  HeartPulse,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { doctorData } from '../config/doctorData';

interface ServiceSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  const handleBookService = (title: string) => {
    onSelectService(title);
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

  return (
    <section id="service" className="py-14 sm:py-18 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2c59] tracking-tight">
            Clinical Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Healthcare consultations provided at Dr. Mahabub's Chamber in Gangni, Meherpur.
          </p>
        </div>

        {/* 5 Core Cards in Clean Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {doctorData.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-teal-400 p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-teal-700 text-teal-700 group-hover:text-white flex items-center justify-center transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-teal-800 text-base transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.desc}
                </p>
              </div>

              <button
                onClick={() => handleBookService(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-50 hover:bg-teal-700 text-slate-700 hover:text-white border border-slate-200 hover:border-teal-700 text-xs font-bold transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book for this Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
