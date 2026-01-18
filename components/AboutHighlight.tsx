import React, { useState } from 'react';
import RevealSection from './RevealSection';
import { DecryptedText, GlitchText } from './ReactsbitsAnimations';
import { Zap, Trophy, Target, Shield, ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';

interface WhyChooseUsItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface AboutHighlightProps {
  whyChooseUs: WhyChooseUsItem[];
}

const AboutHighlight: React.FC<AboutHighlightProps> = ({ whyChooseUs }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { icon: Award, value: "15+", label: "Years", color: "from-accent to-yellow-400" },
    { icon: Trophy, value: "500+", label: "Cases Won", color: "from-accent to-orange-400" },
    { icon: TrendingUp, value: "₦5B+", label: "Recovered", color: "from-accent to-green-400" },
    { icon: Users, value: "100%", label: "Client Trust", color: "from-accent to-blue-400" }
  ];

  return (
    <RevealSection
      className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-primary via-[#0a0a0c] to-primary text-white overflow-hidden relative"
      data-scene="values"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full mb-6 border border-accent/20">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">
              <DecryptedText text="WHY CHOOSE US" />
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white italic mb-6 leading-tight">
            Excellence in <span className="text-accent"><GlitchText text="Every Detail" /></span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Since 2010, we've been redefining legal excellence through innovation, strategy, and unwavering commitment.
          </p>
        </div>

        <div className="lg:hidden mb-8 -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[70vw] max-w-[280px] snap-center group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`} />
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10 text-center">
                  <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <div className="text-5xl font-serif text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/60 font-bold">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full" />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {stats.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-white/20"
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-500 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10">
                <stat.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                <div className="text-4xl font-serif text-white mb-2 group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/60 font-bold">
                  {stat.label}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-6">
          <div className="relative rounded-2xl overflow-hidden group min-h-[450px]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale"
                alt="Legal Excellence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="absolute top-6 right-6 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                    Premium
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Target className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Our Mission
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif italic text-white leading-tight">
                  Delivering Justice with <span className="text-accent">Strategic Precision</span>
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  We don't just win cases—we architect victories. Every strategy is tailored, every move calculated.
                </p>

                <div className="flex gap-4 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-xl font-serif text-accent">₦5B+</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Recovered</div>
                  </div>
                  <div>
                    <div className="text-xl font-serif text-accent">500+</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Cases</div>
                  </div>
                  <div>
                    <div className="text-xl font-serif text-accent">100%</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">Trust</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-6">
          <div className="space-y-4">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-500 overflow-hidden"
                style={{
                  animation: `fadeInLeft 0.6s ease-out ${index * 0.15}s forwards`,
                  opacity: 0
                }}
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10 flex gap-4 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 shrink-0 mt-1" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden group h-full min-h-[400px]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                alt="Legal Excellence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="absolute top-8 right-8 px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-black uppercase tracking-wider text-primary">
                    Premium Service
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Our Mission
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                  Delivering Justice with <span className="text-accent">Strategic Precision</span>
                </h3>

                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  We don't just win cases—we architect victories. Every strategy is tailored, every move calculated, every outcome optimized for your success.
                </p>

                <div className="flex gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-serif text-accent">₦5B+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Recovered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-accent">500+</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Cases Won</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-accent">100%</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-500 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </RevealSection>
  );
};

export default AboutHighlight;
