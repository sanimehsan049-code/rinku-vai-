import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { doctorData } from '../config/doctorData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'service', label: 'Service' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo - Heart + Pulse as on the banner */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shadow-2xs">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-teal-700"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M7 11h2l1.5-3 2 6 1.5-3h2" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-baseline">
                <span className="font-extrabold text-[#0f2c59] text-base sm:text-lg tracking-tight">
                  Dr. Mahabub's{' '}
                </span>
                <span className="font-extrabold text-teal-700 text-base sm:text-lg tracking-tight ml-1">
                  Chamber
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                {doctorData.doctor.name} · {doctorData.doctor.degrees}
              </span>
            </div>
          </a>

          {/* Clean English Navigation Bar - Exactly 4 items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-teal-800 hover:bg-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Call & Appointment */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${doctorData.chamber.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 hover:border-teal-300 bg-white hover:bg-teal-50/50 text-slate-700 hover:text-teal-800 text-xs sm:text-sm font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>{doctorData.chamber.phoneDisplay}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${doctorData.chamber.phone}`}
              className="p-2 rounded-xl bg-teal-700 text-white shadow-2xs"
              aria-label="Call Doctor"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 mt-2 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`py-2.5 px-3 rounded-xl border text-center text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm shadow-2xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
