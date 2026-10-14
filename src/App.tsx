/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServiceSection } from './components/ServiceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { doctorData } from './config/doctorData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  
  // Custom user photo state with localStorage persistence
  const [currentPortrait, setCurrentPortrait] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('dr_mahabub_user_portrait');
      if (saved) return saved;
    } catch {
      // ignore
    }
    return doctorData.doctor.portrait;
  });

  const handleUpdatePortrait = (newImg: string) => {
    setCurrentPortrait(newImg);
    try {
      localStorage.setItem('dr_mahabub_user_portrait', newImg);
    } catch {
      // ignore
    }
  };

  // Scroll spy to highlight active section among: home, about, service, contact
  useEffect(() => {
    const sectionIds = ['home', 'about', 'service', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* 1. Top Navigation Bar (Clean English 4 items: Home | About | Service | Contact) */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Content */}
      <main className="flex-1 w-full">
        {/* 2. Home Section (Clean Hero matching the banner) */}
        <HeroSection
          currentPortrait={currentPortrait}
          onUpdatePortrait={handleUpdatePortrait}
        />

        {/* 3. About Section (Directly below Home) */}
        <AboutSection currentPortrait={currentPortrait} />

        {/* 4. Service Section (Directly below About) */}
        <ServiceSection
          onSelectService={(serviceTitle) => setPreselectedService(serviceTitle)}
        />

        {/* 5. Contact Section (Directly below Service) */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 6. Footer (Minimal footer at the very bottom) */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

    </div>
  );
}
