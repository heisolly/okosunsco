import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import RevealSection from './RevealSection';

const FeaturedCaseStudy: React.FC = () => {
  return (
    <RevealSection className="py-32 md:py-56 bg-primary text-white relative overflow-hidden" data-scene="case-study">
        {/* Cinematic Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-accent/10 rotate-[15deg] transform-gpu blur-[1px]" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/5 rotate-[-5deg] transform-gpu blur-[2px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.05),transparent)]" />
          <div className="absolute inset-0 bg-grain opacity-[0.03]" />
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
                
                {/* Content Side */}
                <div className="lg:col-span-7 space-y-10 md:space-y-16">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-accent" />
                            <span className="text-accent text-[11px] md:text-xs font-black uppercase tracking-[0.5em]">
                                National Landmark Ruling
                            </span>
                        </div>
                        
                        <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white italic leading-[1.05] tracking-tight">
                            The Banking <br /> 
                            <span className="text-accent underline decoration-accent/20 underline-offset-8">Consolidation.</span>
                        </h2>
                        
                        <p className="text-white/40 text-lg md:text-2xl font-light italic border-l border-accent/20 pl-6 md:pl-10 max-w-3xl leading-relaxed">
                            Representing a consortium of financial institutions in a ₦50 Billion asset dispute. Our strategic intervention at the Appellate Court set a new precedent for banking mergers in Nigeria.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Timeline</span>
                                <div className="h-[1px] w-4 bg-accent/20" />
                            </div>
                            <p className="font-serif text-4xl md:text-5xl text-white italic">18 <span className="text-xl md:text-2xl text-white/30 not-italic">Mo</span></p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Operational Duration</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Outcome</span>
                                <div className="h-[1px] w-4 bg-accent/20" />
                            </div>
                            <p className="font-serif text-4xl md:text-5xl text-white italic">100<span className="text-xl md:text-2xl text-white/30 not-italic">%</span></p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Assets Secured</p>
                        </div>

                        <div className="hidden md:block space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Impact</span>
                                <div className="h-[1px] w-4 bg-accent/20" />
                            </div>
                            <p className="font-serif text-4xl md:text-5xl text-white italic">Elite</p>
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/20">Jurisprudential Shift</p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button className="group flex items-center gap-6 text-accent hover:gap-10 transition-all duration-700 bg-white/5 px-10 py-5 rounded-full border border-white/10 hover:bg-accent hover:text-primary">
                            <span className="text-[11px] font-black uppercase tracking-[0.4em]">Review Full Briefing</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/10 group shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" 
                            alt="Legal Documents" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>
                        
                        <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                            <ShieldCheck className="w-10 h-10 text-accent" />
                        </div>
                    </div>

                    {/* Floating Accent */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-accent/20 rounded-full flex items-center justify-center p-8 animate-spin-slow pointer-events-none hidden md:flex">
                        <div className="w-full h-full border border-accent/10 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </RevealSection>
  );
};

export default FeaturedCaseStudy;
