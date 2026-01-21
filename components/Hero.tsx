import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Scale, Globe, Gavel } from 'lucide-react';
import { DecryptedText, ShinyText, BlurText, TextPressure } from './ReactsbitsAnimations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onInitiateBrief: () => void;
  onViewCapabilities: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInitiateBrief, onViewCapabilities }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textTitleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Image Entrance (Scale & Clip)
      gsap.fromTo(imageRef.current,
        { 
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%, 0 100%)", // Compressed state
          opacity: 0,
          filter: "grayscale(100%) contrast(1.2)"
        },
        { 
          clipPath: "polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%)", // Final Polygon
          opacity: 1,
          filter: "grayscale(0%) contrast(1)",
          duration: 1.5,
          ease: "power4.out",
          delay: 0.2
        }
      );

      // 2. Text Stagger Reveal
      const titles = containerRef.current?.querySelectorAll('.hero-title-line');
      if (titles) {
        gsap.fromTo(titles, 
          { y: 100, opacity: 0, rotateX: -20 },
          { 
            y: 0, 
            opacity: 1, 
            rotateX: 0,
            stagger: 0.15, 
            duration: 1.2, 
            ease: "power3.out",
            delay: 0.5 
          }
        );
      }

      // 3. Elements Fade In
      gsap.fromTo('.hero-fade-in',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power2.out", 
          delay: 1.2 
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Large & Clean Mobile Hero Redesign - Cinematic Focus */}
      <section className="lg:hidden relative min-h-screen w-full flex flex-col bg-[#FAF9F6] overflow-hidden pt-32 pb-10" data-scene="intro">
        
        {/* LARGE CINEMATIC BACKGROUND VISUAL */}
        <div className="absolute inset-x-0 bottom-0 top-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
             <img 
               src="/images/lady-justice.png" 
               alt="" 
               className="w-[140%] h-auto opacity-[0.25] grayscale brightness-[1.1] contrast-[1.05] transform translate-y-12" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-[#FAF9F6]/80" />
             <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAF9F6] to-transparent" />
          </div>
          
          <div className="absolute top-0 right-[15%] w-[1px] h-full bg-accent/20 rotate-[20deg] transform-gpu" />
          <div className="absolute bottom-0 left-[10%] w-[1px] h-1/2 bg-accent/10 rotate-[20deg] transform-gpu" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-10 text-center">
          {/* Elite Tag - Focused Header */}
          {/* Elite Tag - Focused Header */}
          <div className="hero-fade-in flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent">Elite National Command</span>
              <div className="w-8 h-[1px] bg-accent" />
            </div>
          </div>

          {/* Headline Suite - Dramatic Centered Impact */}
          <div className="space-y-4 mb-10">
            <div className="overflow-hidden">
              <h1 className="hero-title-line font-italiana text-[16vw] leading-[0.85] text-primary uppercase tracking-widest block origin-bottom">
                Justice
              </h1>
            </div>
            <div className="overflow-hidden">
               <h1 className="hero-title-line font-italiana text-[16vw] leading-[0.85] text-primary uppercase tracking-widest relative inline-block origin-bottom">
                Start <span className="text-accent text-[16vw] underline decoration-accent/10 underline-offset-[16px]">With Us.</span>
                <div className="absolute -bottom-4 left-0 right-0 h-[6px] bg-accent" />
              </h1>
            </div>
          </div>

          {/* Clean Clinical Description */}
          <div className="hero-fade-in relative py-6 px-8 mb-10 backdrop-blur-md bg-white/10 rounded-[2.5rem] border border-white/30 max-w-[340px] mx-auto shadow-sm">
             <p className="text-primary/70 text-base font-serif italic leading-relaxed">
               "Clinical legal strategies architected for Nigeria's most complex corporate and private interests."
             </p>
          </div>

          {/* Precision Stats Node */}
          <div className="hero-fade-in grid grid-cols-2 gap-12 mb-16 relative px-4">
            <div className="space-y-1">
              <p className="text-[9px] font-medium uppercase tracking-widest text-accent opacity-60">Success Rate</p>
              <p className="text-5xl font-serif italic font-light text-primary">98.4%</p>
            </div>
            <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-primary/10 -translate-x-1/2 rotate-[12deg]" />
            <div className="space-y-1">
              <p className="text-[9px] font-medium uppercase tracking-widest text-accent opacity-60">Years Active</p>
              <p className="text-5xl font-serif italic font-light text-primary">15+</p>
            </div>
          </div>

          {/* Multi-Action Suite */}
          <div className="hero-fade-in mt-auto pb-12 w-full max-w-[420px] mx-auto space-y-8">
            <button 
              onClick={onInitiateBrief}
              className="group relative w-full py-8 bg-primary text-white rounded-[2rem] overflow-hidden transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(14,14,18,0.5)] flex items-center justify-center gap-4"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
              <span className="relative z-10 text-[12px] font-medium uppercase tracking-[0.5em]">
                <ShinyText text="COMMENCE BRIEF" />
              </span>
              <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-3" />
            </button>
            
            <div className="flex justify-center flex-col items-center gap-4">
               <a href="tel:+2348101050240" className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary/40 flex items-center gap-3 hover:text-accent transition-colors">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                 Secure Response: 0810 105 0240
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* MODERN LUXURY DESKTOP HERO - Simple, Editorial, Sharp */}
      <section className="hidden lg:flex relative min-h-screen w-full items-center overflow-hidden bg-[#FDFCF8]" data-scene="intro">
        
        {/* 1. Background Grain & Light Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.4]" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        </div>

        <div className="max-w-[1920px] mx-auto px-12 xl:px-20 w-full relative z-10 h-screen flex items-center pt-24">
          <div className="grid grid-cols-12 gap-8 w-full h-[85vh] items-center relative">
            
            {/* LEFT: Main Typography (Editorial Style) */}
            {/* Using Col-6 to leave room for the stats and image */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center h-full relative z-20" ref={textTitleRef}>
              
              {/* Top Label */}
              <div className="hero-fade-in flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
                  Est. 2010 • Benin City
                </span>
              </div>

              {/* HERO TEXT: Italiana (Classic, Sharp, Engineered) */}
              <div className="relative z-20 text-primary space-y-4">
                  <div className="overflow-hidden">
                    <h1 className="hero-title-line font-italiana text-[8vw] xl:text-[9vw] leading-[0.9] text-primary tracking-widest uppercase origin-bottom-left block">
                      Justice
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <h1 className="hero-title-line font-italiana text-[8vw] xl:text-[9vw] leading-[0.9] text-primary tracking-widest uppercase origin-bottom-left block">
                      Start
                    </h1>
                  </div>
                  <div className="overflow-hidden flex items-center gap-6">
                    <h1 className="hero-title-line font-italiana text-[8vw] xl:text-[9vw] leading-[0.9] text-primary tracking-widest uppercase origin-bottom-left block">
                      With Us<span className="text-[#D4AF37]">.</span>
                    </h1>
                  </div>
              </div>

              {/* Description */}
              <div className="mt-12 max-w-lg hero-fade-in">
                <p className="font-sans text-lg text-primary/60 font-light leading-relaxed border-l border-[#D4AF37]/30 pl-6">
                  Architecting <span className="font-serif italic text-primary text-xl">clinical legal strategies</span> for Nigeria's most complex corporate interests.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 flex items-center gap-8 hero-fade-in">
                 <button 
                  onClick={onInitiateBrief}
                  className="group relative px-10 py-5 bg-[#0E0E12] text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%)" }}
                 >
                   <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   <span className="relative z-10 font-sans text-[11px] font-medium uppercase tracking-[0.3em] flex items-center gap-3">
                     Initiate Brief <ArrowRight className="w-4 h-4" />
                   </span>
                 </button>
                 
                 <a href="tel:+2348101050240" className="font-serif italic text-2xl text-primary hover:text-[#D4AF37] transition-colors cursor-pointer">
                   +234 810 105 0240
                 </a>
              </div>
            </div>

            {/* CENTER: The "Stats" Column (Matches Uploaded Image) */}
            {/* Positioned to bridge the text and the image */}
            <div className="col-span-12 lg:col-span-2 h-[600px] relative hidden lg:flex flex-col justify-center items-center z-10 ml-[-2vw]">
                {/* The Diagonal Line Divider */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[1px] h-[70%] bg-[#D4AF37]/30 rotate-[15deg] origin-center" />

                {/* Vertical Stack of Stats - Clean & Luxury */}
                <div className="flex flex-col gap-20 pl-8 hero-fade-in">
                   <div className="text-center">
                      <p className="font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-[#D4AF37] mb-2">Success Rate</p>
                      <p className="font-serif italic font-light text-6xl xl:text-7xl text-primary">98.4%</p>
                   </div>
                   
                   <div className="w-12 h-[1px] bg-[#D4AF37]/20 mx-auto" />

                   <div className="text-center">
                      <p className="font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-[#D4AF37] mb-2">Years Active</p>
                      <p className="font-serif italic font-light text-6xl xl:text-7xl text-primary">15+</p>
                   </div>
                </div>
            </div>

            {/* RIGHT: Visual (Sharp Polygon Image) */}
            <div className="col-span-12 lg:col-span-4 h-full relative flex items-center justify-end z-20">
               <div ref={imageRef} className="relative w-full aspect-[2/3] max-w-[500px]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%, 0 100%)", opacity: 0 }} // Closed state matching GSAP 'from'
               >
                  {/* Clean Image Container */}
                  <div className="w-full h-full relative overflow-hidden bg-[#F2F0E9]">
                     {/* The Lady Justice - Grayscale & High Contrast */}
                     <img 
                        src="/images/lady-justice.png" 
                        alt="Justice" 
                        className="w-full h-full object-cover object-top scale-110 grayscale contrast-[1.1] hover:scale-105 transition-transform duration-[1.5s]"
                     />
                     
                     {/* Overlay - subtle gold wash */}
                     <div className="absolute inset-0 bg-[#D4AF37] mix-blend-multiply opacity-10" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-transparent opacity-20" />
                  </div>
                  
                  {/* Sharp Border Frame */}
                  <div className="absolute inset-0 border border-[#D4AF37]/20 pointer-events-none" />
               </div>
            </div>

          </div>
          
          {/* Scroll */}
          <div className="absolute bottom-10 left-12 flex items-center gap-4 hero-fade-in">
             <div className="w-[1px] h-12 bg-primary/20" />
             <span className="font-sans text-[9px] font-medium uppercase tracking-[0.3em] text-primary/40 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
