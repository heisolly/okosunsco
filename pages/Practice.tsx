import React from 'react';
import { Gavel } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';
import { Page } from '../types';

interface PracticeProps {
  onNavigate: (page: Page) => void;
}

const Practice: React.FC<PracticeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="pt-48 pb-20 px-6 md:px-24 max-w-[1800px] mx-auto">
        <div className="max-w-4xl">
          <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
            AREAS OF EXPERTISE
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-primary italic mb-12 leading-none">
            Legal <br />
            <span className="text-accent">Mastery.</span>
          </h1>
          <p className="text-2xl text-primary/60 font-light leading-relaxed max-w-2xl">
            Our practice is built on deep industry knowledge and unwavering commitment to securing favorable outcomes in complex legal matters.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div key={area.id} className="group relative bg-primary/[0.02] hover:bg-primary text-primary hover:text-white p-10 lg:p-12 transition-all duration-500 border border-primary/5 hover:border-primary/0 hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gavel className="w-32 h-32 rotate-12" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block opacity-70">
                    {area.id}
                  </span>
                  <h3 className="font-serif text-3xl italic mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-90 max-w-xs mb-8">
                    {area.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-black group-hover:text-accent transition-colors">
                  <span className="w-8 h-[1px] bg-current"></span>
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-5xl italic mb-8">Ready to discuss your case?</h2>
          <p className="text-white/60 mb-12 text-lg">We are ready to provide the strategic counsel you need.</p>
          <button
            onClick={() => onNavigate("contact")}
            className="px-12 py-5 bg-accent text-primary text-xs font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
