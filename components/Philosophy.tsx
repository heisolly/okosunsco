import React from 'react';
import { Quote, Award, Scale, Users, TrendingUp, Shield } from 'lucide-react';
import RevealSection from './RevealSection';
import { ScrollReveal, DecryptedText } from './ReactsbitsAnimations';

const Philosophy: React.FC = () => {
  return (
    <RevealSection className="py-16 md:py-32 bg-gradient-to-b from-white to-[#F9F9F7] relative overflow-hidden" data-scene="philosophy">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #0E0E12 1px, transparent 1px),
            linear-gradient(to bottom, #0E0E12 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            <DecryptedText text="THE CHAMBERS" />
          </span>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Scale className="text-accent w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-12">
          <div className="text-center">
            <Quote className="text-accent w-12 h-12 mx-auto mb-6 opacity-30" />
            <ScrollReveal text="">
              <h2 className="text-3xl sm:text-4xl font-serif text-primary leading-[1.2] mb-8">
                "We do not merely practice law;
                <br />
                we <span className="italic text-accent">engineer</span> outcomes."
              </h2>
            </ScrollReveal>
            
            <div className="w-16 h-[2px] bg-accent mx-auto my-8" />
            
            <ScrollReveal text="">
              <p className="text-base text-secondary/70 font-light leading-relaxed">
                In a landscape defined by complexity, clarity is the ultimate currency. At Okosun, Okosun & Partners, we combine deep local jurisprudence with international standards.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, value: "15+", label: "Years of Excellence" },
              { icon: Users, value: "500+", label: "Cases Won" },
              { icon: TrendingUp, value: "₦5B+", label: "Recovered" },
              { icon: Shield, value: "100%", label: "Client Trust" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl text-center hover:shadow-gold transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-serif text-primary mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-wider text-primary/60 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          <div>
            <Quote className="text-accent w-16 h-16 mb-8 opacity-30" />
            <ScrollReveal text="">
              <h2 className="text-5xl xl:text-6xl font-serif text-primary leading-[1.2] mb-8">
                "We do not merely practice law;
                <br />
                we <span className="italic text-accent">engineer</span> outcomes."
              </h2>
            </ScrollReveal>
            
            <div className="w-24 h-[2px] bg-accent my-8" />
            
            <ScrollReveal text="">
              <p className="text-lg text-secondary/70 font-light leading-relaxed mb-8">
                In a landscape defined by complexity, clarity is the ultimate currency. At Okosun, Okosun & Partners, we combine deep local jurisprudence with international standards of practice to deliver certainty in uncertain times.
              </p>
            </ScrollReveal>

            <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">EO</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">AO</span>
                </div>
              </div>
              <div className="text-sm text-primary/60">
                <span className="font-bold text-primary">Senior Partners</span>
                <br />
                <span className="text-xs">Leading Legal Excellence</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Award, value: "15+", label: "Years of Excellence", color: "from-accent/10 to-accent/5" },
              { icon: Users, value: "500+", label: "Cases Won", color: "from-primary/10 to-primary/5" },
              { icon: TrendingUp, value: "₦5B+", label: "Recovered", color: "from-accent/10 to-accent/5" },
              { icon: Shield, value: "100%", label: "Client Trust", color: "from-primary/10 to-primary/5" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`stagger-item group glass-card p-8 rounded-3xl text-center hover:shadow-gold transition-all duration-700 hover:-translate-y-2 relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                <div className="relative z-10">
                  <stat.icon className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                  <div className="text-4xl font-serif text-primary mb-3 group-hover:text-accent transition-colors duration-500">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-primary/60 font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default Philosophy;
