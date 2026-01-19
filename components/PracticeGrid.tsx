import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealSection from './RevealSection';
import { PracticeArea } from '../types';
import { DecryptedText, GradientText, TextPressure, ShinyText } from './ReactsbitsAnimations';

interface PracticeGridProps {
  areas: PracticeArea[];
  onNavigate: (page: any) => void;
  getIcon: (name: string) => React.ReactNode;
}

const PracticeGrid: React.FC<PracticeGridProps> = ({ areas, onNavigate, getIcon }) => {
  return (
    <RevealSection
      className="py-32 md:py-56 px-0 md:px-24 bg-[#FAF9F6] relative overflow-hidden"
      data-scene="practice"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent/10 rotate-[15deg] transform-gpu blur-[1px]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/5 rotate-[-5deg] transform-gpu blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent)]" />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10 px-6 md:px-0">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-accent text-[11px] md:text-xs font-black uppercase tracking-[0.5em]">
                Strategic Domains
              </span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-primary italic leading-[0.9] mb-8">
              Practice <br /> 
              <span className="text-accent underline decoration-accent/20 underline-offset-8">Intelligence.</span>
            </h2>
            
            <p className="text-primary/60 text-lg md:text-2xl font-light italic border-l border-accent/20 pl-6 md:pl-10 max-w-2xl">
              Sophisticated legal architecture tailored for Nigeria's most complex corporate and private inquiries.
            </p>
          </div>

          <div className="hidden lg:block pb-4">
            <button 
              onClick={() => onNavigate("practice")}
              className="group flex items-center gap-6 text-primary hover:text-accent transition-all duration-500"
            >
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">View All Expertise</span>
                <span className="text-[8px] text-primary/40 uppercase tracking-[0.2em]">Archive Class A-01</span>
              </div>
              <div className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide">
            {areas.map((area, index) => (
              <div
                key={area.id}
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <div className="group h-full p-10 bg-white border border-primary/5 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-10">
                      <div className="p-5 rounded-2xl bg-primary/5 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                        {getIcon(area.icon)}
                      </div>
                      <span className="text-[5rem] font-serif italic text-primary/5 leading-none">0{index + 1}</span>
                    </div>
                    
                    <h3 className="font-serif text-3xl italic text-primary mb-4 group-hover:text-accent transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-primary/50 font-light leading-relaxed mb-10">
                      {area.description}
                    </p>
                    
                    <button
                      onClick={() => onNavigate("practice")}
                      className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent"
                    >
                      <ShinyText text="ANALYZE CAPABILITIES" /> <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div
              key={area.id}
              className="group p-12 bg-white border border-primary/5 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_100px_-20px_rgba(212,175,55,0.1)] hover:-translate-y-4 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="text-[12rem] font-serif italic text-primary leading-none">0{index + 1}</span>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-12 inline-block">
                  <div className="p-6 rounded-3xl bg-[#FAF9F6] text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-700 shadow-sm border border-primary/5">
                    {getIcon(area.icon)}
                  </div>
                </div>

                <h3 className="font-serif text-4xl italic text-primary mb-6 group-hover:text-accent transition-colors duration-500">
                  {area.title}
                </h3>

                <p className="text-primary/50 text-lg font-light leading-relaxed mb-12 flex-grow">
                  {area.description}
                </p>

                <button
                  onClick={() => onNavigate("practice")}
                  className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.4em] text-accent group-hover:gap-10 transition-all duration-700"
                >
                  <span className="relative">
                    CAPABILITIES BRIEF
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-700">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default PracticeGrid;
