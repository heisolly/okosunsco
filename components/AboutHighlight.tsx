import React, { useEffect, useRef } from 'react';
import { Trophy, Target, TrendingUp, Users, ArrowRight, Shield, Scale } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WhyChooseUsItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface AboutHighlightProps {
  whyChooseUs: WhyChooseUsItem[];
}

const AboutHighlight: React.FC<AboutHighlightProps> = ({ whyChooseUs }) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Fade In for content
      gsap.fromTo('.reveal-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Image Scale Reveal
      gsap.fromTo('.reveal-image',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "₦5B+", label: "Recovered" },
    { value: "500+", label: "Successful Cases" },
  ];

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-[#0E0E12] text-white overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Typography & Content */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center h-full pt-10">
            {/* Header Tag */}
            <div className="reveal-item flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">
                The Firm
              </span>
            </div>

            <h2 className="reveal-item font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-[#FAF9F6]">
              Excellence in <br/>
              <span className="italic text-[#D4AF37]">Every Detail.</span>
            </h2>

            <p className="reveal-item text-lg text-white/60 font-light leading-relaxed mb-12 border-l border-[#D4AF37]/30 pl-6">
              Since 2010, we have been redefining legal excellence through strategic aggression and unwavering precision. We don't just represent you; we architect your victory.
            </p>

            {/* Stats Row */}
            <div className="reveal-item grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-4">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif italic text-3xl md:text-4xl text-[#D4AF37] mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
            
             <div className="reveal-item mt-12">
                <button className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white hover:text-[#D4AF37] transition-colors">
                  More About Us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </button>
             </div>
          </div>

          {/* Right Column: Visual Layout */}
          <div className="col-span-12 lg:col-span-7 relative">
            
            {/* Main Image with Polygon Clip */}
            <div className="reveal-image relative z-10 w-full aspect-[4/3] max-h-[700px]">
               <div className="w-full h-full relative overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Office Interior" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0E0E12]/20 mix-blend-multiply" />
               </div>
               {/* Border Outline */}
               <div className="absolute inset-0 border border-[#D4AF37]/30 pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)", top: "15px", left: "15px", zIndex: -1 }} />
            </div>

            {/* Floating 'Why Choose Us' Card */}
            <div className="reveal-item absolute -bottom-12 -left-12 z-20 hidden lg:block bg-[#1a1a1e] p-8 max-w-sm border border-white/5 shadow-2xl">
               <div className="flex items-center gap-3 mb-6">
                 <Shield className="w-5 h-5 text-[#D4AF37]" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Strategy First</span>
               </div>
               <p className="text-white/70 font-serif italic text-xl leading-relaxed">
                 "Every case is a chessboard. We plan ten moves ahead."
               </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHighlight;
