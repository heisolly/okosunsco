import React, { useEffect, useRef, useState } from 'react';
import { Scale, Briefcase, Building2, Users, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';
import { Page } from '../types';

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

  const getIconComponent = (iconName: string) => {
    const iconProps = { className: "w-16 h-16 stroke-[1.5]" };
    switch (iconName) {
      case 'scale': return <Scale {...iconProps} />;
      case 'briefcase': return <Briefcase {...iconProps} />;
      case 'building': return <Building2 {...iconProps} />;
      case 'users': return <Users {...iconProps} />;
      default: return <Scale {...iconProps} />;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Hero Section */}
      <div className="relative pt-48 pb-32 px-6 md:px-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
              AREAS OF EXPERTISE
            </span>
            <h1 className="font-serif text-6xl md:text-9xl text-white italic mb-12 leading-none">
              Strategic Legal
              <br />
              <span className="text-accent">Excellence.</span>
            </h1>
            <p className="text-2xl text-white/70 font-light leading-relaxed max-w-3xl mb-12">
              Delivering comprehensive legal solutions across multiple practice areas with precision, 
              integrity, and unwavering commitment to our clients' success.
            </p>
            <div className="flex flex-wrap gap-8 text-white/60">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-sm font-light">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-sm font-light">500+ Cases Won</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-sm font-light">₦5B+ Recovered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas - Smooth Scroll Animation */}
      <div className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {PRACTICE_AREAS.map((area, index) => {
            const isVisible = visibleSections.has(index);
            const isCriminalLaw = index === 1; // Criminal Law is at index 1
            const isPropertyLaw = index === 2; // Property Law is at index 2
            const hasImage = isCriminalLaw || isPropertyLaw;
            
            return (
              <div 
                key={area.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ease-out ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Visual Side - Image for Criminal Law, Icon for others */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <div className="relative group">
                    {hasImage ? (
                      // Criminal Law & Property Law - Show Image
                      <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img
                          src={isCriminalLaw ? "/images/criminal-law.png" : "/images/property-law.png"}
                          alt={area.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-accent">
                              {getIconComponent(area.icon)}
                            </div>
                          </div>
                          <p className="text-sm font-light leading-relaxed">
                            Expert legal counsel in {area.title.toLowerCase()}
                          </p>
                        </div>
                        <div className="absolute top-8 right-8 w-16 h-16 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary font-serif text-2xl font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    ) : (
                      // Other Practice Areas - Show Icon
                      <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-[3rem] p-16 flex items-center justify-center relative overflow-hidden border-2 border-primary/10 hover:border-accent/30 transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="text-accent group-hover:scale-110 transition-transform duration-700 relative z-10">
                          {getIconComponent(area.icon)}
                        </div>
                        <div className="absolute top-8 right-8 text-primary/5 font-serif text-9xl font-bold group-hover:text-accent/10 transition-colors duration-700">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 1 ? 'translate-x-8' : '-translate-x-8'}`
                }`}>
                  <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">
                    {area.id.toUpperCase()} LAW
                  </span>
                  <h2 className="font-serif text-5xl md:text-6xl text-primary italic mb-8 leading-tight">
                    {area.title}
                  </h2>
                  <p className="text-xl text-primary/60 font-light leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <p className="text-base text-primary/50 font-light leading-relaxed mb-10">
                    {area.detailedDescription}
                  </p>
                  <button 
                    onClick={() => onNavigate("contact")}
                    className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-black text-primary hover:text-accent transition-all duration-300"
                  >
                    Discuss This Practice
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-primary/5 border-y-2 border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl md:text-5xl text-primary italic mb-4">
              Proven Track Record
            </h3>
            <p className="text-primary/60 font-light">
              Numbers that speak to our commitment and success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Cases Successfully Resolved" },
              { value: "₦5B+", label: "Recovered for Clients" },
              { value: "98%", label: "Client Satisfaction Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-5xl md:text-6xl font-serif italic text-accent mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.3em] font-black text-primary/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 px-6 bg-gradient-to-br from-primary via-primary/98 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Award className="w-20 h-20 text-accent mx-auto mb-8" />
          <h2 className="font-serif text-5xl md:text-7xl text-white italic mb-8 leading-tight">
            Ready to Secure Your
            <br />
            <span className="text-accent">Legal Victory?</span>
          </h2>
          <p className="text-xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Our expert legal team is ready to provide you with strategic counsel and representation 
            tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate("consultation")}
              className="group relative px-12 py-6 bg-accent text-primary rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Schedule Consultation</span>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="group px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-500 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
