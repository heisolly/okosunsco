import React from 'react';
import RevealSection from './RevealSection';
import { ScrambledText, SplitText, GlitchText, FuzzyText } from './ReactsbitsAnimations';

interface WhyChooseUsItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface AboutHighlightProps {
  whyChooseUs: WhyChooseUsItem[];
}

const AboutHighlight: React.FC<AboutHighlightProps> = ({ whyChooseUs }) => {
  return (
    <RevealSection
      className="py-48 px-6 md:px-24 bg-gradient-to-br from-primary via-primary to-accent/20 text-white overflow-hidden relative"
      data-scene="values"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-light rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-accent/50 rounded-full" style={{ animation: 'float 10s ease-in-out infinite' }} />
        <div className="absolute top-[50%] right-[15%] w-3 h-3 bg-gold-light/40 rounded-full" style={{ animation: 'floatReverse 12s ease-in-out infinite' }} />
        <div className="absolute bottom-[25%] left-[30%] w-1.5 h-1.5 bg-accent/60 rounded-full" style={{ animation: 'float 14s ease-in-out infinite' }} />
        <div className="absolute top-[70%] right-[40%] w-2.5 h-2.5 bg-gold-light/30 rounded-full" style={{ animation: 'floatReverse 11s ease-in-out infinite' }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
        <div className="relative">
          <div className="absolute -top-24 -left-24 text-[20rem] font-serif italic text-white/5 pointer-events-none animate-pulse">
            O&P
          </div>
          <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block shimmer">
            <ScrambledText text="THE CHAMBERS" />
          </span>
          <h2 className="font-serif text-5xl md:text-8xl text-white italic mb-12 leading-none">
            <SplitText text="Since 2010," delay={0.1} /> <br />
            we've refined the <br />
            art of <span className="gradient-text text-glow"><GlitchText text="victory." /></span>
          </h2>
          <p className="text-white/40 font-light text-xl leading-relaxed mb-16 max-w-lg">
            Founded by Emmanuel and Aituaje Okosun, our firm bridges the gap
            between traditional advocacy and modern strategic consulting.
          </p>
          <div className="space-y-10">
            {whyChooseUs.slice(0, 3).map((item, i) => (
              <div key={i} className="flex gap-6 group hover-lift">
                <div className="shrink-0 p-4 glass-card-dark rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    <FuzzyText text={item.title} />
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] rounded-[4rem] overflow-hidden group shadow-gold hover:shadow-[0_40px_100px_-20px_rgba(212,175,55,0.4)] transition-all duration-700">
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:brightness-75 group-hover:grayscale-0 transition-all duration-1000"
              alt="Chambers"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent group-hover:from-accent/30 transition-colors duration-700" />
          </div>
          <div className="absolute bottom-12 -left-12 p-12 glass-card-dark rounded-[3rem] shadow-gold max-w-xs transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-gold-light to-accent opacity-90 rounded-[3rem]" />
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest block mb-4 text-white/70">
                Total Recovered
              </span>
              <p className="font-display text-5xl font-bold text-white gradient-text">$50M+</p>
              <p className="text-xs font-medium uppercase tracking-tighter text-white/80 mt-2">
                Capital Secured for Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default AboutHighlight;
