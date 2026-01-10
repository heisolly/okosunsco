import React from 'react';

interface HeroProps {
  onInitiateBrief: () => void;
  onViewCapabilities: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInitiateBrief, onViewCapabilities }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-primary" data-scene="intro">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/benigno-hoyuela-rb70_pV4nAE-unsplash.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-primary/80 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-[1920px] px-4 pt-12">
        <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-accent/50 to-transparent mb-8" />

        <div className="flex items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-1000 delay-100 mb-4">
          <span className="text-accent/80 text-xs md:text-sm font-mono tracking-[0.5em] uppercase shadow-black/50 drop-shadow-lg">Est. 2010</span>
          <div className="w-2 h-2 rounded-full border border-accent/60" />
          <span className="text-accent/80 text-xs md:text-sm font-mono tracking-[0.5em] uppercase shadow-black/50 drop-shadow-lg">Global Counsel</span>
        </div>

        <div className="relative py-8 flex flex-col items-center justify-center w-full">
          <h2 className="text-[clamp(4rem,10vw,8rem)] leading-none font-serif italic text-white/20 mix-blend-screen tracking-tighter animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            Strategic
          </h2>
          <h1 className="text-[clamp(7rem,22vw,22rem)] leading-[0.8] font-serif text-transparent bg-clip-text bg-gradient-to-b from-ivory to-white/80 tracking-tighter animate-in zoom-in-95 duration-1000 delay-300 drop-shadow-2xl relative z-10 -mt-2 lg:-mt-6">
            DEFENSE
          </h1>
          <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-serif italic text-accent tracking-wide animate-in slide-in-from-bottom-8 duration-1000 delay-500 relative z-20 -mt-2 lg:-mt-8">
            & Legacy
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 md:mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <p className="text-lg md:text-2xl text-secondary/70 font-light leading-relaxed px-4">
            We do not merely practice law. We engineer outcomes for Nigeria's most prominent families and corporations.
            <span className="block mt-4 text-white/90 font-normal">Precision. Discretion. Absolute Power.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
            <button onClick={onInitiateBrief} className="px-10 py-4 bg-accent text-primary text-xs font-bold uppercase tracking-[0.25em] hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 min-w-[200px]">
              Initiate Brief
            </button>
            <button onClick={onViewCapabilities} className="px-10 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-white/5 transition-all min-w-[200px]">
              Our Capabilities
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 w-full px-8 lg:px-20 flex justify-between items-end z-30 pointer-events-none text-white/30">
        <div className="hidden md:block text-[10px] uppercase tracking-widest font-mono">
          Based in Benin City<br/>Operating Globally
        </div>
        <div className="flex flex-col items-end">
          <div className="text-5xl lg:text-7xl font-serif text-white/10 font-bold leading-none select-none">15<span className="text-accent/20">+</span></div>
          <div className="text-[10px] uppercase tracking-[0.4em] border-t border-accent/20 pt-2 mt-2">Years of Excellence</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
