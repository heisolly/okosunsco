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
      {/* SECOND DESIGN - Mobile Hero: "Justice Served Sharp." */}
      <section className="lg:hidden relative min-h-screen w-full flex flex-col bg-[#FAF9F6] overflow-hidden pt-32 pb-16" data-scene="intro">
        
        {/* Background: Lady Justice (Centered, Larger) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
             <img 
               src="/images/lady-justice.png" 
               alt="" 
               className="h-[70%] w-auto opacity-[0.15] grayscale brightness-[1.05] contrast-[1.1]" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-[#FAF9F6]" />
          </div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-8 text-center justify-between">
          
          {/* Elite Tag */}
          <div className="hero-fade-in flex flex-col items-center gap-4 mb-8 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="text-[9px] font-bold uppercase tracking-[0.45em] text-accent">Elite National Command</span>
              <div className="w-10 h-[1px] bg-accent" />
            </div>
          </div>

          {/* Main Headline: "Justice Served Sharp." */}
          <div className="flex-1 flex flex-col justify-center mb-8">
            <div className="space-y-2">
              <div className="overflow-hidden">
                <h1 className="hero-title-line font-italiana text-[15vw] leading-[1] text-primary tracking-tight italic">
                  Justice
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="hero-title-line font-italiana text-[15vw] leading-[1] text-primary tracking-tight">
                  Served <span className="text-accent italic">Sharp.</span>
                </h1>
              </div>
              {/* Gold Underline */}
              <div className="w-[70%] h-[3px] bg-accent mx-auto mt-3" />
            </div>

            {/* Tagline */}
            <div className="hero-fade-in mt-10 max-w-[320px] mx-auto">
              <p className="text-primary/60 text-sm font-serif italic leading-relaxed">
                "Clinical legal strategies architected for Nigeria's most complex corporate and private interests."
              </p>
            </div>
          </div>

          {/* Stats Row - Centered */}
          <div className="hero-fade-in grid grid-cols-2 gap-16 mb-12 max-w-[340px] mx-auto">
            <div className="text-center space-y-1">
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-accent/60">Success Rate</p>
              <p className="text-5xl font-serif italic font-light text-primary">98.4%</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-accent/60">Years Active</p>
              <p className="text-5xl font-serif italic font-light text-primary">15+</p>
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
