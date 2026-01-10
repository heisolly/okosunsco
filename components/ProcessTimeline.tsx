import React from 'react';
import { MessageSquare, Shield, Gavel, CheckCircle2, ArrowRight } from 'lucide-react';
import RevealSection from './RevealSection';

interface ProcessTimelineProps {
  onStartProcess: () => void;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onStartProcess }) => {
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

  return (
    <RevealSection className="py-32 lg:py-48 px-6 bg-[#0E0E12] overflow-hidden relative" data-scene="process">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/50 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-accent/10 pb-12">
          <div>
            <span className="text-accent text-xs font-mono tracking-[0.4em] uppercase block mb-6 animate-pulse">
              Forensic Strategy
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white max-w-2xl leading-[1.1]">
              Architecture of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#F4E4C1]">Victory.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed mb-2 font-light">
            Our engagement model is designed for high-stakes complexity. We dissect, deconstruct, and dominate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 relative group/timeline">
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/5" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 md:p-12 border-l border-white/5 group hover:bg-white/5 transition-all duration-500 hover:border-accent/20">
              <span className="text-6xl md:text-8xl font-serif text-white/5 group-hover:text-accent/10 transition-colors duration-500 absolute top-4 right-4 md:right-8 select-none">
                {step.id}
              </span>

              <div className="w-4 h-4 bg-[#0E0E12] border border-accent/50 rounded-full relative z-10 mb-12 group-hover:bg-accent group-hover:scale-125 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button onClick={onStartProcess} className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-accent transition-colors">
            <span>Start the Process</span>
            <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </RevealSection>
  );
};

export default ProcessTimeline;
