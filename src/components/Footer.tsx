import React from 'react';
import { ArrowUp, Phone, MapPin, MessageCircle } from 'lucide-react';
import { doctorData } from '../config/doctorData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-left pt-10 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-8 border-b border-slate-800 text-xs">
          
          {/* Brand */}
          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-teal-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M7 11h2l1.5-3 2 6 1.5-3h2" />
                </svg>
              </div>
              <h3 className="font-extrabold text-white text-base">
                Dr. Mahabub's <span className="text-teal-400">Chamber</span>
              </h3>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {doctorData.chamber.tagline} — {doctorData.doctor.name} ({doctorData.doctor.degrees}).
            </p>
          </div>

          {/* 4 Nav items in clean English */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-teal-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#service" onClick={(e) => scrollToSection(e, 'service')} className="hover:text-teal-400 transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Helpline */}
          <div className="lg:col-span-4 space-y-2 text-slate-400">
            <h4 className="font-bold uppercase tracking-wider text-white">
              Chamber Helpline
            </h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <a href={`tel:${doctorData.chamber.phone}`} className="hover:text-white font-mono">
                  {doctorData.chamber.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{doctorData.chamber.whatsappDisplay} (WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{doctorData.chamber.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="py-3 text-[11px] text-slate-500 border-b border-slate-800 leading-normal">
          <p>{doctorData.disclaimer}</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Mahabub's Chamber. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
