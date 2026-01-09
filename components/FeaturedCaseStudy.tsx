import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealSection from './RevealSection';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <RevealSection className="py-32 bg-primary text-white relative overflow-hidden" data-scene="case-study">
        {/* Background Texture or Grain could go here if global not sufficient */}
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-accent text-[10px] uppercase tracking-[0.25em] font-bold mb-6 block">
                        Case Study: Landmark Ruling
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 italic">
                        The Banking Sector Consolidation Defense.
                    </h2>
                    <p className="text-white/60 font-light text-lg leading-relaxed mb-10">
                        Representing a consortium of financial institutions in a ₦50 Billion asset dispute. Our strategic intervention at the Appellate Court set a new precedent for banking mergers in Nigeria.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div className="border-l border-accent/30 pl-6">
                            <p className="text-3xl font-serif text-accent">18</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Months Duration</p>
                        </div>
                        <div className="border-l border-accent/30 pl-6">
                            <p className="text-3xl font-serif text-accent">100%</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Assets Secured</p>
                        </div>
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1 group">
                        Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="relative group">
                    <div className="absolute inset-0 bg-accent rounded-sm transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-900">
                        <img 
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
                            alt="Legal Documents" 
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:opacity-80 group-hover:mix-blend-normal transition-all duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>
            </div>
        </div>
    </RevealSection>
  );
};

export default FeaturedCaseStudy;
