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
    // GSAP ScrollTrigger Animation (driven by global Lenis in App.tsx)
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;

      if (!track || !section) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + track.offsetWidth,
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      data-scene="archive"
      className="horizontal-section relative z-[60] bg-[#0A0A0E] overflow-hidden"
      // CSS from user: height: 100vh; display: grid; place-items: center;
      style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent/20 rotate-[15deg] transform-gpu blur-[1px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/10 rotate-[-5deg] transform-gpu blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)]"></div>
        <div className="absolute inset-0 bg-grain opacity-[0.03]"></div>
      </div>

      {/* HORIZONTAL TRACK */}
      {/* CSS from user: display: flex; gap: 4vw; height: 70vh; width: max-content; */}
      <div 
        ref={trackRef}
        className="horizontal-track relative z-10 pl-[5vw] pr-[5vw]" // Added padding to start/end so items aren't flush
        style={{ display: 'flex', gap: '4vw', height: '70vh', width: 'max-content' }}
      >
        {cards.map((card: any, index) => (
          <div 
            key={index}
            className="panel relative flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden group hover:border-accent/30 transition-colors duration-500"
            // CSS from user: width: 60vw; max-width: 900px; height: 100%;
            style={{ width: '60vw', maxWidth: '900px', height: '100%' }}
          >
             {/* Card Content - Adapted to fit new panel size */}
             <div className="relative h-full flex flex-col p-8 md:p-12 justify-between">
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-32 bg-accent/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Header */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                        {card.type === 'intro' ? <Shield className="w-5 h-5"/> : 
                         card.type === 'outro' ? <Award className="w-5 h-5"/> : 
                         <Trophy className="w-5 h-5"/>}
                     </div>
                     <span className="text-accent text-xs font-black uppercase tracking-[0.2em]">
                       {index === 0 ? 'Start' : index === cards.length - 1 ? 'End' : `Case 0${index}`}
                     </span>
                  </div>
                  <span className="text-[8rem] leading-none font-serif text-white/5 font-black italic -mt-8 -mr-4 select-none">
                    {index + 1}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-6 z-10 max-w-2xl">
                   <h3 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">
                     {card.title}
                   </h3>
                   <p className="text-white/60 text-lg leading-relaxed border-l border-accent/30 pl-6">
                     {card.subtitle || card.description || 'Strategic legal victory in high-stakes litigation.'}
                   </p>
                </div>

                {/* Footer/Action */}
                <div className="pt-8 flex items-center gap-6 z-10">
                  <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-accent hover:text-white transition-colors group/btn">
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
