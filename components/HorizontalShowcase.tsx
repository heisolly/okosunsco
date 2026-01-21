import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, ArrowUpRight, Shield, Award } from 'lucide-react';
import { VICTORIES } from '../constants';

// Register ScrollTrigger outside component to avoid re-registration
gsap.registerPlugin(ScrollTrigger);

const HorizontalShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const cards = [
    { type: 'intro', title: 'The Archive', subtitle: 'Of National Excellence' },
    ...VICTORIES,
    { type: 'outro', title: 'Begin Your Briefing', subtitle: 'Secure your future today' }
  ];

  useEffect(() => {
    // GSAP ScrollTrigger Animation - PC ONLY (Horizontal Scroll)
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + (track.scrollWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      data-scene="archive"
      className="horizontal-section relative z-[60] bg-[#0A0A0E] overflow-hidden py-20 lg:py-0 lg:h-screen lg:grid lg:place-items-center"
    >
      {/* Background Ambience - Enhanced */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent/30 rotate-[15deg] transform-gpu blur-[1px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/20 rotate-[-5deg] transform-gpu blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent)]"></div>
        <div className="absolute inset-0 bg-grain opacity-[0.04]"></div>
      </div>

      {/* TRACK: Horizontal (PC) / Vertical Stack (Mobile) */}
      <div 
        ref={trackRef}
        className="horizontal-track relative z-10 
                   flex flex-col gap-16 px-6 w-full
                   lg:flex-row lg:gap-[4vw] lg:h-[75vh] lg:w-max lg:pl-[5vw] lg:pr-[5vw] lg:px-0"
      >
        {cards.map((card: any, index) => (
          <div 
            key={index}
            className="panel relative flex-shrink-0 
                       bg-[#0E0E12]/90 backdrop-blur-xl 
                       border border-white/10 
                       rounded-[2rem] overflow-hidden 
                       group 
                       hover:border-accent/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
                       transition-all duration-700
                       w-full h-[70vh] 
                       lg:w-[65vw] lg:max-w-[950px] lg:h-full
                       sticky top-20 lg:static
                       shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            style={{ 
               willChange: 'transform'
            }}
          >
             {/* Luxury Border Glow */}
             <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, transparent 50%, rgba(212,175,55,0.1) 100%)',
                    filter: 'blur(20px)'
                  }}
             />

             {/* Card Content */}
             <div className="relative h-full flex flex-col p-8 lg:p-12 justify-between">
                
                {/* Background Decor - Enhanced */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                
                {/* Header */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-500 shadow-lg">
                        {card.type === 'intro' ? <Shield className="w-6 h-6"/> : 
                         card.type === 'outro' ? <Award className="w-6 h-6"/> : 
                         <Trophy className="w-6 h-6"/>}
                     </div>
                     <span className="text-accent text-xs font-black uppercase tracking-[0.25em]">
                       {index === 0 ? 'Start' : index === cards.length - 1 ? 'End' : `Case 0${index}`}
                     </span>
                  </div>
                  <span className="text-[5rem] lg:text-[9rem] leading-none font-serif text-white/5 font-black italic -mt-8 -mr-4 select-none">
                    {index + 1}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-6 z-10 max-w-2xl mt-auto lg:mt-0">
                   <h3 className="text-3xl lg:text-6xl font-serif text-white italic leading-tight group-hover:text-accent transition-colors duration-500">
                     {card.title}
                   </h3>
                   <p className="text-white/70 text-base lg:text-xl leading-relaxed border-l-2 border-accent/40 pl-6 group-hover:border-accent transition-colors duration-500">
                     {card.subtitle || card.description || 'Strategic legal victory in high-stakes litigation.'}
                   </p>
                </div>

                {/* Footer/Action */}
                <div className="pt-8 flex items-center gap-6 z-10">
                  <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent hover:text-white transition-colors group/btn px-6 py-3 border border-accent/20 rounded-full hover:bg-accent/10 hover:border-accent">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>

             </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HorizontalShowcase;
