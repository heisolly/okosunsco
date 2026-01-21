import React, { useEffect, useRef } from 'react';
import { Quote, Scale } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.philosophy-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 bg-[#FAF9F6] overflow-hidden" data-scene="philosophy">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      
      {/* Architectural Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-[#D4AF37]/20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-[#D4AF37]/20" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <div className="philosophy-text flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border border-[#D4AF37]/20 flex items-center justify-center">
            <Scale className="text-[#D4AF37] w-6 h-6" />
          </div>
        </div>

        <h2 className="philosophy-text font-serif text-4xl md:text-6xl text-[#0E0E12] leading-[1.15] mb-10">
          "We do not merely practice law; <br className="hidden md:block"/>
          we <span className="italic text-[#D4AF37]">engineer</span> outcomes."
        </h2>

        <div className="philosophy-text w-24 h-[2px] bg-[#D4AF37] mx-auto mb-10" />

        <p className="philosophy-text text-lg md:text-xl text-[#0E0E12]/70 font-sans font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          In a landscape defined by complexity, clarity is the ultimate currency. We combine deep local jurisprudence with international standards of practice to deliver certainty in uncertain times.
        </p>

        <div className="philosophy-text flex flex-col items-center gap-2">
          <div className="flex -space-x-3 mb-3">
             <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border-2 border-[#FAF9F6] flex items-center justify-center text-[10px] font-bold text-[#D4AF37]">EO</div>
             <div className="w-10 h-10 rounded-full bg-[#0E0E12]/90 border-2 border-[#FAF9F6] flex items-center justify-center text-[10px] font-bold text-white">AO</div>
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E0E12]">Okosun & Okosun</p>
          <p className="text-[10px] text-[#0E0E12]/50 font-serif italic">Senior Partners</p>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;

