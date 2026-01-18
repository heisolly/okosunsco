import React from 'react';
import { Building2, Briefcase, TrendingUp } from 'lucide-react';

const SocialMarquee: React.FC = () => {
  const clients = [
    { name: "Multinational Banking", icon: Building2 },
    { name: "Oil & Gas Majors", icon: Briefcase },
    { name: "Telecommunications", icon: TrendingUp },
    { name: "Construction Giants", icon: Building2 },
    { name: "Federal Agencies", icon: Briefcase },
    { name: "Real Estate Developers", icon: TrendingUp },
    { name: "Tech Conglomerates", icon: Building2 },
    { name: "Manufacturing", icon: Briefcase }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-[#F5F5F0] to-white overflow-hidden border-y border-primary/10">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #0E0E12 1px, transparent 1px),
            linear-gradient(to bottom, #0E0E12 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-primary/60 text-xs font-mono tracking-[0.4em] uppercase">Est. 2010</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary mb-6">
            Trusted by <span className="italic text-accent">Industry Leaders</span>
          </h2>
          <p className="text-primary/50 text-sm md:text-base max-w-xl mx-auto font-light">
            Representing Nigeria's most prestigious organizations
          </p>
        </div>

        {/* Mobile: Grid Cards */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-12">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.05}s forwards`,
                opacity: 0
              }}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <client.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs text-primary/60 group-hover:text-primary font-medium transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Marquee */}
        <div className="hidden md:block relative luxury-marquee-container mb-16 lg:mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-[#F5F5F0] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-[#F5F5F0] to-transparent z-10 pointer-events-none"></div>
          
          <div className="luxury-marquee-track">
            <div className="luxury-marquee-content">
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {clients.map((client, i) => (
                    <div 
                      key={`${setIndex}-${i}`} 
                      className="luxury-marquee-item group"
                    >
                      <div className="relative flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 shrink-0">
                          <client.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 group-hover:from-accent/10 group-hover:via-accent/20 group-hover:to-accent/10 transition-all duration-500 rounded-lg"></div>
                        <span className="relative block text-primary/40 group-hover:text-primary text-base md:text-lg font-light tracking-wide transition-all duration-500 px-4 py-4">
                          {client.name}
                        </span>
                        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:via-accent transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Stats - Responsive Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-primary/50 text-[10px] md:text-xs uppercase tracking-widest font-bold">Cases Won</div>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1 group-hover:scale-110 transition-transform duration-300">₦5B+</div>
            <div className="text-primary/50 text-[10px] md:text-xs uppercase tracking-widest font-bold">Recovered</div>
          </div>
          
          <div className="text-center p-4 md:p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1 group-hover:scale-110 transition-transform duration-300">15+</div>
            <div className="text-primary/50 text-[10px] md:text-xs uppercase tracking-widest font-bold">Years</div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default SocialMarquee;
