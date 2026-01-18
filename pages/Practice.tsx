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
          { threshold: 0.2 }
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
      <section className="relative pt-48 pb-32 overflow-hidden bg-white">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_70%)]" />
          <div className="absolute -bottom-1/2 -right-1/4 w-[80%] h-full bg-[radial-gradient(circle_at_bottom,rgba(14,14,18,0.03),transparent_70%)]" />
          
          {/* Animated Strokes */}
          <div className="absolute top-[20%] right-[15%] w-px h-[60%] bg-gradient-to-b from-transparent via-accent/20 to-transparent rotate-12" />
          <div className="absolute top-[10%] left-[10%] w-96 h-96 border border-accent/5 rounded-full" />
          <div className="absolute top-[15%] left-[12%] w-[30rem] h-[30rem] border border-accent/5 rounded-full" />
        </div>
        
        <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary text-white rounded-full mb-10 shadow-2xl">
                <Gavel className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Expert Practice</span>
              </div>
              
              <h1 className="font-serif text-7xl md:text-[11rem] text-primary italic leading-[0.8] mb-12">
                <TextPressure text="Elite Advocacy" />
              </h1>
              
              <p className="text-2xl md:text-3xl text-primary/60 font-light max-w-2xl leading-relaxed border-l-4 border-accent pl-10">
                <BlurText text="A legacy of high-stakes victories across Nigeria's most complex legal landscapes." delay={0.3} />
              </p>
            </div>

            <div className="hidden lg:block pb-12">
              <div className="flex flex-col items-end gap-6">
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Success Rate</p>
                  <p className="text-5xl font-serif italic text-primary">98.4%</p>
                </div>
                <div className="h-px w-32 bg-primary/10" />
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Years Active</p>
                  <p className="text-5xl font-serif italic text-primary">15+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Navigation / Sticky Scroll Feel */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_80%)]" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="sticky top-48 space-y-12">
                <div className="space-y-6">
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] block">THE ARCHITECTURE OF DEFENSE</span>
                  <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">
                    Strategic <br /> <span className="text-accent underline decoration-accent/30 underline-offset-8">Perspectives</span>
                  </h2>
                </div>
                
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-md">
                  We don't just practice law; we architect solutions. Explore our core domains of expertise tailored for elite corporate and individual interests.
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8">
                  {[
                    { icon: Landmark, label: "Federal Courts" },
                    { icon: Shield, label: "Civil Defense" },
                    { icon: TrendingUp, label: "M&A Advisory" },
                    { icon: FileText, label: "Title Perfection" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                        <item.icon className="w-4 h-4 text-accent group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-24 lg:pt-24">
              {PRACTICE_AREAS.map((area, index) => {
                const isVisible = visibleSections.has(index);
                return (
                  <div 
                    key={area.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className={`relative p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] transition-all duration-1000 group hover:bg-white/10 hover:border-accent/30 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                    }`}
                  >
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent text-primary rounded-full flex items-center justify-center text-4xl font-serif font-black shadow-2xl transition-transform group-hover:scale-110">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="space-y-8">
                      <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                        {getIconComponent(area.icon, "w-10 h-10")}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-4xl font-serif italic group-hover:text-accent transition-colors underline decoration-accent/0 group-hover:decoration-accent/50 underline-offset-8">
                          {area.title}
                        </h3>
                        <p className="text-lg text-white/70 italic leading-relaxed">
                          {area.description}
                        </p>
                      </div>

                      <div className="h-px w-full bg-white/10" />

                      <p className="text-base text-white/40 font-light leading-relaxed">
                        {area.detailedDescription}
                      </p>

                      <button 
                        onClick={() => onNavigate("contact")}
                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-accent group-hover:translate-x-4 transition-all duration-500"
                      >
                        Transmit Inquiry
                        <ArrowRight className="w-4 h-4" />
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
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-12">
              <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] block">FIELD INTELLIGENCE</span>
              <h2 className="text-5xl md:text-7xl font-serif italic text-primary leading-[1.1]">
                Proven <br /> <span className="text-accent">Execution.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { val: "₦5.2B+", label: "Capital Recovered" },
                  { val: "120+", label: "Corporate M&A" },
                  { val: "450+", label: "Property Titles" },
                  { val: "95%", label: "Litigation Retention" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-4xl font-serif italic text-primary">{stat.val}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/30">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8 pt-24">
                  <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-[#FAF9F6] relative group">
                    <img src="/images/criminal-law.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Litigation" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                  <div className="aspect-[3/4] rounded-[4rem] bg-accent p-12 flex flex-col justify-between">
                    <Shield className="w-16 h-16 text-primary" />
                    <p className="text-2xl font-serif italic text-primary leading-tight">"Integrity is the anchor of our practice."</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="aspect-[3/4] rounded-[4rem] bg-primary p-12 flex flex-col justify-between text-white">
                    <Landmark className="w-16 h-16 text-accent" />
                    <p className="text-2xl font-serif italic leading-tight">Federal presence across every geopolitical zone.</p>
                  </div>
                  <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-[#FAF9F6] relative group">
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
      <section className="relative py-48 bg-primary overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-16">
          <Award className="w-24 h-24 text-accent mx-auto animate-pulse" />
          
          <h2 className="text-6xl md:text-9xl font-serif italic text-white leading-tight">
            Secure Your <br /> <span className="text-accent">Victory.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed italic">
            Whether you're navigating complex corporate waters or defending individual rights, our senior partners are ready to architect your strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <button
              onClick={() => onNavigate("consultation")}
              className="group relative px-20 py-10 bg-accent text-primary rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_25px_50px_-12px_rgba(212,175,55,0.5)]"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
              <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.6em]">
                <ShinyText text="COMMENCE BRIEF" />
              </span>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="group px-20 py-10 bg-transparent border-2 border-white/20 text-white rounded-full text-[12px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-primary transition-all duration-500"
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
