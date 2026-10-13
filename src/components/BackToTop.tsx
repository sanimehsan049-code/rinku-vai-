import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { doctorData } from '../config/doctorData';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Mobile quick call floating button */}
      <a
        href={`tel:${doctorData.chamber.phone}`}
        className="w-12 h-12 rounded-full bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center shadow-lg shadow-teal-700/30 transition-transform hover:scale-110 active:scale-95 sm:hidden"
        aria-label="Call Doctor"
        title="সরাসরি কল দিন"
      >
        <Phone className="w-5 h-5 fill-white" />
      </a>

      {/* Floating Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-white hover:bg-teal-700 text-slate-700 hover:text-white border border-slate-200 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
        title="উপরে যান"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
