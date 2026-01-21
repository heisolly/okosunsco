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
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    // The 'Premium Feeling' GSAP Horizontal Scroll Logic
    const scrollAnimation = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + track.offsetWidth,
        scrub: 0.5, // Smoothness sweet spot
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });

    return () => {
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      data-scene="archive"
      className="horizontal-section relative z-[60] bg-[#0A0A0E] overflow-hidden h-screen grid place-items-center"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent/30 rotate-[15deg] transform-gpu blur-[1px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/20 rotate-[-5deg] transform-gpu blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent)]"></div>
        <div className="absolute inset-0 bg-grain opacity-[0.04]"></div>
      </div>

      {/* TRACK: The 'width: max-content' is crucial for horizontal GSAP */}
      <div 
        ref={trackRef}
        className="horizontal-track relative z-10 flex gap-[4vw] px-[5vw] h-[70vh] w-max items-center"
      >
        {cards.map((card: any, index) => (
          <div 
            key={index}
            className="panel relative flex-shrink-0 
                       bg-[#0E0E12]/95 backdrop-blur-xl 
                       border border-white/10 
                       rounded-[2rem] lg:rounded-[3rem] overflow-hidden 
                       group 
                       hover:border-accent/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
                       transition-all duration-700
                       w-[85vw] md:w-[60vw] max-w-[900px] h-full
                       shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
             {/* Luxury Border Glow */}
             <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, transparent 50%, rgba(212,175,55,0.1) 100%)',
                    filter: 'blur(20px)'
                  }}
             />

             {/* Card Content */}
             <div className="relative h-full flex flex-col p-8 lg:p-12 justify-between">
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                
                {/* Header */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent transition-all duration-500 shadow-lg">
                        {card.type === 'intro' ? <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-accent"/> : 
                         card.type === 'outro' ? <Award className="w-5 h-5 lg:w-6 lg:h-6 text-accent"/> : 
                         <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-accent"/>}
                     </div>
                     <span className="text-accent text-[10px] lg:text-xs font-black uppercase tracking-[0.25em]">
                       {index === 0 ? 'Start' : index === cards.length - 1 ? 'End' : `Case 0${index}`}
                     </span>
                  </div>
                  <span className="text-5xl lg:text-[9rem] leading-none font-serif text-white/5 font-black italic -mt-6 lg:-mt-8 -mr-4 select-none">
                    {index + 1}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-4 lg:space-y-6 z-10 max-w-2xl mt-auto">
                   <h3 className="text-2xl lg:text-6xl font-serif text-white italic leading-tight group-hover:text-accent transition-colors duration-500">
                     {card.title}
                   </h3>
                   <p className="text-white/70 text-sm lg:text-xl leading-relaxed border-l-2 border-accent/40 pl-5 lg:pl-6 group-hover:border-accent transition-colors duration-500 line-clamp-4 lg:line-clamp-none">
                     {card.subtitle || card.description || 'Strategic legal victory in high-stakes litigation.'}
                   </p>
                </div>

                {/* Footer/Action */}
                <div className="pt-6 lg:pt-8 flex items-center gap-6 z-10">
                  <button className="flex items-center gap-3 text-xs lg:text-sm font-bold uppercase tracking-widest text-accent hover:text-white transition-colors group/btn px-5 lg:px-6 py-2.5 lg:py-3 border border-accent/20 rounded-full hover:bg-accent/10 hover:border-accent">
                    <span>Explore Brief</span>
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
