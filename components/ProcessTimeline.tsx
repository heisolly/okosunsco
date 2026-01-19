import React, { useRef, useEffect } from 'react';
import { MessageSquare, Shield, Gavel, CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProcessTimelineProps {
  onStartProcess: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartProcess }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: "01",
      icon: MessageSquare,
      title: "Alignment",
      desc: "We align with your objectives through deep-dive discovery and forensic analysis of the situation."
    },
    {
      id: "02",
      icon: Shield,
      title: "Blueprint",
      desc: "Crafting a master strategy that anticipates opposition moves and secures multiple pathways to victory."
    },
    {
      id: "03",
      icon: Gavel,
      title: "Strike",
      desc: "Surgical execution of the legal strategy. Precision filings, aggressive negotiation, and dominant presence."
    },
    {
      id: "04",
      icon: CheckCircle2,
      title: "Legacy",
      desc: "Securing the outcome and fortifying your position to ensure long-term stability and protection."
    }
  ];

  useEffect(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative z-[50] bg-[#0E0E12] overflow-hidden"
      data-scene="process"
      style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/50 blur-[200px] rounded-full pointer-events-none" />

      {/* HORIZONTAL TRACK */}
      <div 
        ref={trackRef}
        className="flex gap-[4vw] h-[70vh] w-max pl-[5vw] pr-[5vw] relative z-10"
      >
        {/* PANEL 1: INTRO */}
        <div className="w-[80vw] md:w-[40vw] max-w-[600px] h-full flex flex-col justify-center flex-shrink-0">
           <span className="text-accent text-xs font-mono tracking-[0.4em] uppercase block mb-6 animate-pulse">
              Forensic Strategy
           </span>
           <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
              Architecture of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#F4E4C1]">Victory.</span>
           </h2>
           <p className="text-white/40 text-lg leading-relaxed font-light border-l border-accent/20 pl-6">
              Our engagement model is designed for high-stakes complexity. We dissect, deconstruct, and dominate.
           </p>
        </div>

        {/* PANELS 2-5: STEPS */}
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="w-[85vw] md:w-[35vw] max-w-[500px] h-full flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between group hover:bg-white/10 hover:border-accent/30 transition-all duration-500"
          >
             <div>
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 rounded-full bg-[#0E0E12] border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                      <step.icon className="w-6 h-6 text-accent" />
                   </div>
                   <span className="text-6xl font-serif text-white/5 group-hover:text-accent/10 transition-colors duration-500 select-none">
                     {step.id}
                   </span>
                </div>
                <h3 className="text-3xl font-serif text-white mb-6 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {step.desc}
                </p>
             </div>
             <div className="w-full h-[1px] bg-white/10 group-hover:bg-accent/30 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
             </div>
          </div>
        ))}

        {/* PANEL 6: CTA */}
        <div className="w-[80vw] md:w-[30vw] max-w-[400px] h-full flex-shrink-0 flex items-center justify-center">
           <button 
             onClick={onStartProcess}
             className="group relative w-full aspect-square rounded-full border border-accent/20 flex flex-col items-center justify-center gap-6 hover:bg-accent hover:border-accent transition-all duration-700"
           >
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white group-hover:text-primary transition-colors">
                Initiate Process
              </span>
              <ArrowRight className="w-8 h-8 text-accent group-hover:text-primary group-hover:scale-125 transition-all duration-500" />
              <div className="absolute inset-0 rounded-full border border-white/5 scale-90 group-hover:scale-100 transition-transform duration-1000" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
