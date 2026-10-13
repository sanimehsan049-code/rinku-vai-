import React from 'react';
import { CheckCircle2, Clock, MapPin, Stethoscope } from 'lucide-react';
import { doctorData } from '../config/doctorData';

interface AboutSectionProps {
  currentPortrait: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentPortrait }) => {
  return (
    <section id="about" className="py-14 sm:py-18 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
            About
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2c59] tracking-tight">
            {doctorData.doctor.name}
          </h2>
          <p className="text-sm font-semibold text-teal-700">
            {doctorData.doctor.title} · {doctorData.doctor.registration}
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-xs rounded-2xl bg-slate-50 border border-slate-200 p-2.5 shadow-sm">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={currentPortrait}
                  alt={doctorData.doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = doctorData.doctor.portrait;
                  }}
                />
              </div>
              <div className="mt-2.5 p-2.5 bg-white rounded-lg border border-slate-200/80 text-left text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Qualification:</span>
                  <span className="font-bold text-slate-800">{doctorData.doctor.degrees}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Registry:</span>
                  <span className="font-semibold text-teal-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    BMDC Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Real Bio & Chamber Highlights */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {doctorData.doctor.shortBio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                    Scope of Practice
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    General medicine, primary healthcare, and family health consultations.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                    Consultation Hours
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sat – Thu: 4:30 PM – 9:00 PM <br />
                    Fri: 9:00 AM – 12:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200/80 flex items-center gap-2.5 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                <strong>Chamber Address:</strong> {doctorData.chamber.address}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
