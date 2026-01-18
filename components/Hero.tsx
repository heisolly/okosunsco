import React from 'react';
import { ArrowRight, Award, Users, TrendingUp, Shield, Scale, Gavel, Globe } from 'lucide-react';
import { DecryptedText, GradientText, ShinyText, BlurText, TextPressure } from './ReactsbitsAnimations';

interface HeroProps {
  onInitiateBrief: () => void;
  onViewCapabilities: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInitiateBrief, onViewCapabilities }) => {
  return (
    <>
      {/* Mobile Hero - Cinematic & Impactful */}
      <section className="lg:hidden relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#FAF9F6]" data-scene="intro">
        {/* Abstract Background Gradients */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[80%] h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_70%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-full h-[60%] bg-[radial-gradient(circle_at_bottom_left,rgba(14,14,18,0.05),transparent_60%)]" />
        </div>

        {/* Feature Image - Lady Justice */}
        <div className="absolute inset-x-0 bottom-0 z-0 h-3/4 flex items-end justify-center pointer-events-none opacity-20">
          <img 
            src="/lady-justice.png" 
            alt="Lady Justice" 
            className="h-full w-auto object-contain object-bottom scale-110"
          />
        </div>

        <div className="relative z-10 w-full h-full min-h-screen flex flex-col pt-24 pb-12 px-6">
          <div className="flex-1 flex flex-col items-center justify-start text-center">
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary text-white rounded-full mb-10 shadow-2xl shadow-primary/20 animate-in fade-in duration-700">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Elite Advocacy • Est. 2010
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl text-primary leading-tight mb-8">
              <TextPressure text="Justice Served" />
              <span className="block mt-2 text-accent italic font-normal underline decoration-accent/20 underline-offset-8">with Integrity</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-primary/60 font-light max-w-sm leading-relaxed border-l-2 border-accent/30 pl-6 mx-auto">
              <BlurText text="Nigeria's premier legal architects. Delivering strategic foresight for elite corporate and private interests." delay={0.4} />
            </p>
          </div>

          <div className="space-y-4 w-full max-w-md mx-auto relative z-20">
            <button 
              onClick={onInitiateBrief}
              className="group w-full px-8 py-6 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(14,14,18,0.4)] flex items-center justify-center gap-4"
            >
              <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.5em]">
                <ShinyText text="COMMENCE BRIEF" />
              </span>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button 
              onClick={onViewCapabilities}
              className="group w-full px-8 py-6 bg-white border-2 border-primary/5 text-primary rounded-full hover:border-accent transition-all duration-500 flex items-center justify-center gap-4"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">Expertise</span>
              <Scale className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform" />
            </button>

            {/* Mobile Stats Ribbon */}
            <div className="flex items-center justify-between pt-8 border-t border-primary/5">
              {[
                { label: "Years", val: "15+" },
                { label: "Cases", val: "500+" },
                { label: "Success", val: "98%" }
              ].map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <p className="text-xl font-serif italic text-primary leading-none mb-1">{stat.val}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-accent">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Hero - The Premium Dossier View */}
      <section className="hidden lg:flex relative min-h-screen w-full items-center overflow-hidden bg-[#FAF9F6] pt-24" data-scene="intro">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_70%)]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[70%] bg-[radial-gradient(circle_at_bottom_left,rgba(14,14,18,0.03),transparent_60%)]" />
          
          {/* Subtle Grid & Animated Stroke */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-[15%] w-px h-1/2 bg-gradient-to-b from-transparent via-accent/30 to-transparent rotate-12" />
        </div>

        <div className="max-w-[1800px] mx-auto px-16 xl:px-24 py-16 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <div className="col-span-6 space-y-12">
              <div className="space-y-8">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-primary text-white rounded-full shadow-2xl shadow-primary/20">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                    Elite National Advocacy • Est. 2010
                  </span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="font-serif text-7xl xl:text-9xl text-primary leading-[1.1] md:leading-[1] italic">
                    <TextPressure text="Justice Served" />
                    <span className="block translate-x-[15%] text-accent underline decoration-accent/20 underline-offset-[16px]">with Integrity</span>
                  </h1>
                </div>
                
                <p className="text-xl xl:text-2xl text-primary/60 font-light leading-relaxed max-w-2xl border-l-4 border-accent pl-10">
                  <BlurText text="Architecture of victory begins with strategic foresight. We provide elite legal representation for high-stakes corporate and private interests across Nigeria." delay={0.5} />
                </p>
              </div>

              {/* Action Suite */}
              <div className="flex items-center gap-8 pt-4">
                <button 
                  onClick={onInitiateBrief}
                  className="group relative px-16 py-10 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_30px_60px_-15px_rgba(14,14,18,0.5)]"
                >
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
                  <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.6em] flex items-center gap-4">
                    <ShinyText text="COMMENCE BRIEF" />
                    <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-2" />
                  </span>
                </button>
                
                <button 
                  onClick={onViewCapabilities}
                  className="group px-12 py-10 bg-transparent border-2 border-primary/5 text-primary rounded-full text-[12px] font-black uppercase tracking-[0.6em] hover:bg-white hover:border-accent hover:text-accent transition-all duration-500 flex items-center gap-4"
                >
                  Expertise
                  <Scale className="w-5 h-5 text-accent transition-transform group-hover:rotate-12" />
                </button>
              </div>

              {/* Success Metrics Overlay */}
              <div className="grid grid-cols-3 gap-12 pt-12 border-t border-primary/5">
                {[
                  { icon: Award, val: "15+", label: "Years Excellence" },
                  { icon: Gavel, val: "500+", label: "Cases Resolved" },
                  { icon: TrendingUp, val: "₦5B+", label: "Capital Recovered" }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      <div className="text-4xl font-serif italic text-primary">{stat.val}</div>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 group-hover:text-accent transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Column - The Cinematic Frame */}
            <div className="col-span-6 relative h-[85vh] animate-in fade-in slide-in-from-right duration-[1.5s]">
              <div className="relative w-full h-full">
                {/* Foreground Image with Luxury Masking */}
                <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-end">
                  {/* Glowing Aura behind Justice */}
                  <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
                  
                  <img 
                    src="/lady-justice.png" 
                    alt="Lady Justice" 
                    className="h-full w-auto object-contain object-bottom scale-110 relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                  />
                </div>

                {/* Floating Intelligence Card */}
                <div className="absolute top-[20%] right-0 bg-white/90 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] max-w-sm shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-20">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Strategic Presence</p>
                      <p className="text-xl font-serif italic text-primary">Global Standards. National Precision.</p>
                    </div>
                  </div>
                  <p className="text-primary/60 font-medium italic text-sm leading-relaxed mb-6">
                    "Victory is the byproduct of superior preparation. We architect legal strategies that stand the test of time."
                  </p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/30">Node: HQ-BENIN-01</p>
                </div>

                {/* Background Text Depth */}
                <div className="absolute bottom-0 right-0 left-0 text-right pr-12 pb-12 z-0 overflow-hidden pointer-events-none">
                  <div className="text-[18rem] font-serif font-black text-primary/[0.015] leading-none select-none italic whitespace-nowrap">
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
