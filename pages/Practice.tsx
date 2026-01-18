import React, { useEffect, useRef, useState } from 'react';
import { Scale, Briefcase, Building2, Users, ArrowRight, CheckCircle, Award, Landmark, Shield, Gavel, FileText, TrendingUp } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';
import { Page } from '../types';
import { DecryptedText, GradientText, ShinyText, BlurText, TextPressure } from '../components/ReactsbitsAnimations';

interface PracticeProps {
  onNavigate: (page: Page) => void;
}

const Practice: React.FC<PracticeProps> = ({ onNavigate }) => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections((prev) => new Set(prev).add(index));
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const getIconComponent = (iconName: string, className = "w-16 h-16 stroke-[1]") => {
    switch (iconName) {
      case 'scale': return <Scale className={className} />;
      case 'briefcase': return <Briefcase className={className} />;
      case 'building': return <Building2 className={className} />;
      case 'users': return <Users className={className} />;
      default: return <Scale className={className} />;
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-primary selection:bg-accent selection:text-white">
      {/* Luxury Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-white">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_70%)]" />
          <div className="absolute -bottom-1/2 -right-1/4 w-[100%] md:[80%] h-full bg-[radial-gradient(circle_at_bottom,rgba(14,14,18,0.03),transparent_70%)]" />
          
          {/* Animated Strokes */}
          <div className="absolute top-[20%] right-[15%] w-px h-[60%] bg-gradient-to-b from-transparent via-accent/20 to-transparent rotate-12" />
        </div>
        
        <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-primary text-white rounded-full mb-8 md:mb-10 shadow-xl md:shadow-2xl">
                <Gavel className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">Expert Practice</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[11rem] text-primary italic leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
                <TextPressure text="Elite Advocacy" />
              </h1>
              
              <p className="text-lg md:text-2xl lg:text-3xl text-primary/60 font-light max-w-2xl leading-relaxed border-l-4 border-accent pl-6 md:pl-10">
                <BlurText text="A legacy of high-stakes victories across Nigeria's most complex legal landscapes." delay={0.3} />
              </p>
            </div>

            <div className="flex flex-row lg:flex-col items-center lg:items-end gap-10 lg:gap-6 pb-4 lg:pb-12 border-t lg:border-t-0 pt-8 lg:pt-0 border-primary/5">
              <div className="text-left lg:text-right flex-1">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-accent mb-1 md:mb-2">Success Rate</p>
                <p className="text-3xl md:text-5xl font-serif italic text-primary">98.4%</p>
              </div>
              <div className="hidden lg:block h-px w-32 bg-primary/10" />
              <div className="text-left lg:text-right flex-1">
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-accent mb-1 md:mb-2">Years Active</p>
                <p className="text-3xl md:text-5xl font-serif italic text-primary">15+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Navigation / Sticky Scroll Feel */}
      <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_80%)]" />
          <div className="absolute -bottom-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <div className="lg:sticky lg:top-48 space-y-8 md:space-y-12">
                <div className="space-y-4 md:space-y-6">
                  <span className="text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] block">THE ARCHITECTURE OF DEFENSE</span>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic leading-[1.1]">
                    Strategic <br /> <span className="text-accent underline decoration-accent/30 underline-offset-4 md:underline-offset-8">Perspectives</span>
                  </h2>
                </div>
                
                <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-md">
                  We don't just practice law; we architect solutions. Explore our core domains of expertise tailored for elite corporate and individual interests.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6 md:pt-8">
                  {[
                    { icon: Landmark, label: "Federal Courts" },
                    { icon: Shield, label: "Civil Defense" },
                    { icon: TrendingUp, label: "M&A Advisory" },
                    { icon: FileText, label: "Title Perfection" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                        <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12 md:space-y-24 pt-8 md:pt-24 lg:pt-24">
              {PRACTICE_AREAS.map((area, index) => {
                const isVisible = visibleSections.has(index);
                return (
                  <div 
                    key={area.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className={`relative p-8 md:p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] md:rounded-[3rem] transition-all duration-1000 group hover:bg-white/10 hover:border-accent/30 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                    }`}
                  >
                    <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-accent text-primary rounded-full flex items-center justify-center text-2xl md:text-4xl font-serif font-black shadow-2xl transition-transform group-hover:scale-110">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="space-y-6 md:space-y-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center text-accent">
                        {getIconComponent(area.icon, "w-8 h-8 md:w-10 md:h-10")}
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        <h3 className="text-3xl md:text-4xl font-serif italic group-hover:text-accent transition-colors underline decoration-accent/0 group-hover:decoration-accent/50 underline-offset-4 md:underline-offset-8">
                          {area.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/70 italic leading-relaxed">
                          {area.description}
                        </p>
                      </div>

                      <div className="h-px w-full bg-white/10" />

                      <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                        {area.detailedDescription}
                      </p>

                      <button 
                        onClick={() => onNavigate("contact")}
                        className="flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-accent group-hover:translate-x-4 transition-all duration-500"
                      >
                        Transmit Inquiry
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break / Showcase Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-8 md:space-y-12 text-center lg:text-left">
              <span className="text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] block">FIELD INTELLIGENCE</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-primary leading-[1.1]">
                Proven <br className="hidden md:block" /> <span className="text-accent">Execution.</span>
              </h2>
              <div className="grid grid-cols-2 gap-8 md:gap-12">
                {[
                  { val: "₦5.2B+", label: "Capital Recovered" },
                  { val: "120+", label: "Corporate M&A" },
                  { val: "450+", label: "Property Titles" },
                  { val: "95%", label: "Litigation Retention" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1.5 md:space-y-2">
                    <p className="text-3xl md:text-4xl font-serif italic text-primary">{stat.val}</p>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 relative mt-12 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-6 md:space-y-8 md:pt-16 lg:pt-24">
                  <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl md:shadow-2xl border-[6px] md:border-8 border-[#FAF9F6] relative group">
                    <img src="/images/criminal-law.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Litigation" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                  <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] bg-accent p-8 md:p-12 flex flex-col justify-between">
                    <Shield className="w-10 h-10 md:w-16 md:h-16 text-primary" />
                    <p className="text-xl md:text-2xl font-serif italic text-primary leading-tight">"Integrity is the anchor of our practice."</p>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] bg-primary p-8 md:p-12 flex flex-col justify-between text-white">
                    <Landmark className="w-10 h-10 md:w-16 md:h-16 text-accent" />
                    <p className="text-xl md:text-2xl font-serif italic leading-tight">Federal presence across every geopolitical zone.</p>
                  </div>
                  <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl md:shadow-2xl border-[6px] md:border-8 border-[#FAF9F6] relative group">
                    <img src="/images/property-law.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Property" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Closing CTA */}
      <section className="relative py-32 md:py-48 bg-primary overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-10 md:space-y-16">
          <Award className="w-16 h-16 md:w-24 md:h-24 text-accent mx-auto animate-pulse" />
          
          <h2 className="text-5xl md:text-6xl lg:text-9xl font-serif italic text-white leading-tight">
            Secure Your <br className="hidden md:block" /> <span className="text-accent">Victory.</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed italic px-4">
            Whether you're navigating complex corporate waters or defending individual rights, our senior partners are ready to architect your strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            <button
              onClick={() => onNavigate("consultation")}
              className="group relative w-full sm:w-auto px-12 md:px-20 py-8 md:py-10 bg-accent text-primary rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_15px_30px_-10px_rgba(212,175,55,0.5)]"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
              <span className="relative z-10 text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">
                <ShinyText text="COMMENCE BRIEF" />
              </span>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="group w-full sm:w-auto px-12 md:px-20 py-8 md:py-10 bg-transparent border-2 border-white/20 text-white rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] hover:bg-white hover:text-primary transition-all duration-500"
            >
              Direct Link
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;
