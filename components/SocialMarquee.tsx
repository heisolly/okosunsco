import React from 'react';

const SocialMarquee: React.FC = () => {
  const clients = [
    "Multinational Banking",
    "Oil & Gas Majors",
    "Telecommunications",
    "Construction Giants",
    "Federal Agencies",
    "Real Estate Developers",
    "Tech Conglomerates",
    "Manufacturing"
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-[#F5F5F0] to-white overflow-hidden border-y border-primary/10">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
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

        <div className="relative luxury-marquee-container">
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
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 group-hover:from-accent/10 group-hover:via-accent/20 group-hover:to-accent/10 transition-all duration-500 rounded-lg"></div>
                        <span className="relative block text-primary/40 group-hover:text-primary text-base md:text-lg font-light tracking-wide transition-all duration-500 px-8 py-4">
                          {client}
                        </span>
                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:via-accent transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center px-6 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">500+</div>
            <div className="text-primary/50 text-xs uppercase tracking-widest">Cases Won</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <div className="text-center px-6 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">₦5B+</div>
            <div className="text-primary/50 text-xs uppercase tracking-widest">Recovered</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <div className="text-center px-6 py-4 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-accent/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">15+</div>
            <div className="text-primary/50 text-xs uppercase tracking-widest">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMarquee;
