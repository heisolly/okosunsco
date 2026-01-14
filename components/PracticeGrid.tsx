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
      className="py-48 px-6 md:px-24 bg-gradient-to-b from-white/30 to-ivory/50 backdrop-blur-sm relative overflow-hidden"
      data-scene="practice"
    >
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block shimmer">
              <DecryptedText text="DOMAINS" />
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-primary italic leading-tight">
              Mastery across the <span className="gradient-text"><GradientText text="legal spectrum." colors={['#D4AF37', '#0E0E12', '#D4AF37']} /></span>
            </h2>
          </div>
          <p className="text-secondary/50 max-w-xs text-sm font-light">
            Sophisticated counsel tailored for Nigeria's evolving corporate
            and individual landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.id}
              className="stagger-item group p-12 glass-card hover:shadow-gold transition-all duration-700 hover:-translate-y-3 hover:scale-105 flex flex-col rounded-3xl card-3d relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 float-icon">
                  {getIcon(area.icon)}
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-500">
                  <TextPressure text={area.title} />
                </h3>
                <p className="text-sm font-light text-secondary/70 mb-10 leading-relaxed">
                  {area.description}
                </p>
                <button
                  onClick={() => onNavigate("practice")}
                  className="mt-auto flex items-center gap-3 text-[10px] uppercase tracking-widest font-black text-accent group-hover:gap-5 transition-all animated-underline"
                >
                  <ShinyText text="Brief Details" /> <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
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
