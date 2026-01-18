import React from 'react';
import { ArrowRight, Shield, Scale, Globe, Gavel } from 'lucide-react';
import { DecryptedText, ShinyText, BlurText, TextPressure } from './ReactsbitsAnimations';

interface HeroProps {
  onInitiateBrief: () => void;
  onViewCapabilities: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInitiateBrief, onViewCapabilities }) => {
  return (
    <>
      {/* Sharp Mobile Hero - Redesigned for Luxury & Precision */}
      <section className="lg:hidden relative min-h-screen w-full flex flex-col overflow-hidden bg-[#FAF9F6]" data-scene="intro">
        {/* The "Crazy" Sharp Background Architecture */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[1px] h-[120%] bg-accent/20 rotate-[30deg] transform-gpu" />
          <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-accent/10 rotate-[30deg] transform-gpu" />
          
          {/* Subtle Masked Symbolism - Increased Visibility */}
          <div className="absolute bottom-0 right-[-10%] w-full h-2/3 opacity-[0.15] z-0">
            <img src="/lady-justice.png" alt="" className="w-full h-full object-contain object-bottom grayscale scale-125 origin-bottom-right" />
          </div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col pt-32 px-8">
          <div className="space-y-8">
            {/* Elite Origin Tag */}
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left duration-700">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-accent">Elite National Command</span>
            </div>

            {/* Impactful Typography */}
            <div className="space-y-2">
              <h1 className="font-serif text-[16vw] leading-[0.85] text-primary italic">
                <TextPressure text="Justice" />
              </h1>
              <h1 className="font-serif text-[16vw] leading-[0.85] text-primary">
                Served <span className="text-accent underline decoration-accent/10 underline-offset-[12px]">Sharp.</span>
              </h1>
            </div>

            <p className="text-primary/60 text-base font-light leading-relaxed max-w-[280px] border-l-2 border-accent pl-6 italic">
              <BlurText text="Clinical legal strategies drafted for Nigeria's high-stakes corporate and private interests." delay={0.4} />
            </p>
          </div>

          <div className="mt-auto pb-16 space-y-16">
            {/* Reference-Style Stats Node */}
            <div className="relative">
              <div className="absolute left-0 top-[-20%] bottom-[-20%] w-[1px] bg-accent/30 rotate-[15deg]" />
              <div className="pl-10 space-y-10">
                <div className="group">
                  <p className="text-[8px] font-black uppercase tracking-widest text-accent mb-2 opacity-70">Success Rate</p>
                  <p className="text-5xl font-serif italic text-primary">98.4%</p>
                </div>
                <div className="w-16 h-[1px] bg-primary/5" />
                <div className="group">
                  <p className="text-[8px] font-black uppercase tracking-widest text-accent mb-2 opacity-70">Years Active</p>
                  <p className="text-5xl font-serif italic text-primary">15+</p>
                </div>
              </div>
            </div>

            {/* Action Suite */}
            <div className="space-y-4">
              <button 
                onClick={onInitiateBrief}
                className="group relative w-full py-7 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(14,14,18,0.4)] flex items-center justify-center gap-4"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.5em]">
                  <ShinyText text="COMMENCE BRIEF" />
                </span>
                <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-2" />
              </button>
              
              <div className="flex justify-center pt-2">
                <a href="tel:+2348101050240" className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Office Line: 0810 105 0240
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharp Desktop Hero - Reference Image Aesthetic */}
      <section className="hidden lg:flex relative min-h-screen w-full items-center overflow-hidden bg-[#FAF9F6]" data-scene="intro">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          {/* THE "CRAZY" SHARP LINE - From Reference Image */}
          <div className="absolute top-[-10%] right-[42%] w-[1px] h-[120%] bg-accent/30 rotate-[15deg] transform-gpu transition-transform duration-[2s] hover:rotate-[16deg]" />
          
          {/* Subtle Masked Justice */}
          <div className="absolute right-0 bottom-0 w-1/2 h-[90%] flex items-end justify-end opacity-20 pointer-events-none">
            <img 
              src="/lady-justice.png" 
              alt="Justice" 
              className="h-full w-auto object-contain object-bottom scale-110 grayscale"
            />
          </div>
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="max-w-[1800px] mx-auto px-24 w-full relative z-10">
          <div className="grid grid-cols-12 gap-0 items-center">
            
            {/* Main Content Column */}
            <div className="col-span-12 lg:col-span-7">
              <div className="space-y-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left duration-700">
                    <div className="w-12 h-[1px] bg-accent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Established 2010 • Benin City Hub</span>
                  </div>

                  <h1 className="font-serif text-[10rem] xl:text-[13rem] leading-[0.85] text-primary italic">
                    <TextPressure text="Justice" />
                    <span className="block mt-4 not-italic font-serif">Served <span className="text-accent underline decoration-accent/10 underline-offset-[20px]">Sharp.</span></span>
                  </h1>

                  <p className="text-2xl text-primary/50 font-light max-w-xl leading-relaxed border-l-2 border-accent pl-10 italic">
                    <BlurText text="We don't just advocate; we architect. Delivering clinical legal solutions for Nigeria's most complex challenges." delay={0.5} />
                  </p>
                </div>

                <div className="flex items-center gap-10">
                  <button 
                    onClick={onInitiateBrief}
                    className="group relative px-16 py-10 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_40px_80px_-20px_rgba(14,14,18,0.4)]"
                  >
                    <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
                    <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.6em] flex items-center gap-4">
                      <ShinyText text="COMMENCE BRIEF" />
                      <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-2" />
                    </span>
                  </button>

                  <button 
                    onClick={onViewCapabilities}
                    className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-primary hover:text-accent transition-all"
                  >
                    Capabilities <Scale className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  </button>
                </div>
              </div>
            </div>

            {/* THE "SIMPLE CRAZY" STATS COLUMN - Exact Match to Reference Image */}
            <div className="hidden lg:flex col-span-5 h-[600px] flex-col justify-center pl-24 relative">
              {/* Reference Stats Design */}
              <div className="space-y-20 relative">
                {/* Individual Stat Node */}
                <div className="relative py-4 group">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 opacity-70">Success Rate</p>
                  <div className="relative">
                    <p className="text-8xl xl:text-9xl font-serif italic text-primary transition-all duration-700 group-hover:translate-x-4">98.4%</p>
                    <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-accent/30 group-hover:w-12 transition-all" />
                  </div>
                </div>

                {/* The Horizontal Sharp Divider - From Image */}
                <div className="w-[300px] h-[1px] bg-primary/10 ml-[-50px]" />

                {/* Individual Stat Node */}
                <div className="relative py-4 group">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 opacity-70">Years Active</p>
                  <div className="relative">
                    <p className="text-8xl xl:text-9xl font-serif italic text-primary transition-all duration-700 group-hover:translate-x-4">15+</p>
                    <div className="absolute -left-12 top-1/2 w-8 h-[1px] bg-accent/30 group-hover:w-12 transition-all" />
                  </div>
                </div>

                {/* Bottom Signature */}
                <div className="pt-12 flex items-center gap-4 text-[9px] font-black text-primary/20 uppercase tracking-[0.6em]">
                  <Globe className="w-4 h-4" />
                  <span>National Command</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Global Floating Decor - Simple & Sharp */}
        <div className="absolute bottom-12 left-12 flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-primary/30 z-20">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
             <span>Secure Network Active</span>
          </div>
          <span>v.26-Elite</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
