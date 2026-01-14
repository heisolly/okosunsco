import React from 'react';
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { SplitText, BlurText, TextType } from './ReactsbitsAnimations';

interface HeroProps {
  onInitiateBrief: () => void;
  onViewCapabilities: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInitiateBrief, onViewCapabilities }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-white pt-24 md:pt-32 pb-12 md:pb-0" data-scene="intro">
      <div className="absolute inset-0 z-0">
        <svg className="absolute top-10 md:top-20 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-15 md:opacity-20" viewBox="0 0 200 200">
          <path d="M 20,100 Q 60,20 100,100 T 180,100" fill="none" stroke="#0E0E12" strokeWidth="1.5"/>
          <path d="M 10,120 Q 50,60 90,120" fill="none" stroke="#D4AF37" strokeWidth="1.2"/>
          <circle cx="50" cy="80" r="120" fill="none" stroke="#0E0E12" strokeWidth="0.5"/>
          <circle cx="60" cy="90" r="100" fill="none" stroke="#D4AF37" strokeWidth="0.3"/>
        </svg>
        <svg className="absolute bottom-0 right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] opacity-15 md:opacity-20" viewBox="0 0 200 200">
          <path d="M 20,100 Q 60,180 100,100 T 180,100" fill="none" stroke="#0E0E12" strokeWidth="1.5"/>
          <path d="M 110,140 Q 150,80 190,140" fill="none" stroke="#D4AF37" strokeWidth="1.2"/>
          <circle cx="150" cy="120" r="100" fill="none" stroke="#0E0E12" strokeWidth="0.5"/>
          <circle cx="140" cy="110" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.3"/>
        </svg>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  <TextType text="Est. 2010 • Award-Winning Firm" speed={30} />
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary leading-[1.05] tracking-tight">
                <SplitText text="Justice Served" delay={0.2} />
                <br />
                <span className="italic font-normal">with Integrity</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-primary/60 font-light leading-relaxed max-w-lg">
                <BlurText text="Nigeria's premier legal strategists. We combine deep expertise with innovative thinking to deliver exceptional results for our clients across civil, criminal, property, and corporate law." delay={0.5} />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <button 
                onClick={onInitiateBrief}
                className="group px-8 md:px-10 py-3 md:py-4 bg-primary text-white font-bold text-xs md:text-sm uppercase tracking-wide hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 rounded-full"
              >
                <span>Get Service Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={onViewCapabilities}
                className="group px-8 md:px-10 py-3 md:py-4 border-2 border-primary/20 text-primary font-bold text-xs md:text-sm uppercase tracking-wide hover:border-accent hover:text-accent transition-all duration-300 flex items-center justify-center gap-3 rounded-full"
              >
                <span>Our Expertise</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-primary/10">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Award className="w-5 h-5 text-accent" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-accent">15+</div>
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-primary/50 font-bold">Years Excellence</div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Users className="w-5 h-5 text-accent" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-accent">500+</div>
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-primary/50 font-bold">Cases Won</div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-accent">₦5B+</div>
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-primary/50 font-bold">Recovered</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 pt-4 border-t border-primary/10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">EO</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">AO</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/30 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">+10</span>
                </div>
              </div>
              <div className="text-sm text-primary/60">
                <span className="font-bold text-primary">Expert Legal Team</span>
                <br />
                <span className="text-xs">Senior Partners & Associates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] order-1 lg:order-2 animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-end justify-center lg:justify-end">
                <img 
                  src="/lady-justice.png" 
                  alt="Lady Justice - Symbol of Legal Excellence" 
                  className="h-full w-auto object-contain object-bottom max-w-none"
                  style={{ maxHeight: '100%' }}
                />
              </div>

              <div className="absolute top-[20%] md:top-1/3 right-4 sm:right-6 lg:right-20 bg-white/95 backdrop-blur-sm border border-primary/10 p-4 md:p-6 rounded-xl max-w-[280px] sm:max-w-xs shadow-2xl z-30 animate-in fade-in slide-in-from-top duration-1000 delay-700">
                <div className="flex items-start gap-2">
                  <div className="text-3xl md:text-5xl text-accent/30 font-serif leading-none mt-1">"</div>
                  <div className="flex-1">
                    <p className="text-primary/70 font-light text-xs md:text-sm leading-relaxed">
                      <BlurText text="Strategic foresight is the foundation of every victory. We architect legal solutions that stand the test of time." delay={1.5} />
                    </p>
                    <p className="text-primary/50 text-[10px] md:text-xs mt-2 md:mt-3 uppercase tracking-wider font-bold">Okosun & Partners</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 left-0 text-center z-20 hidden md:block">
                <div className="text-[8rem] md:text-[12rem] lg:text-[20rem] font-serif font-bold text-primary/[0.02] leading-none select-none">
                  Legal Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
