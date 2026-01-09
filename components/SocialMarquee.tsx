import React from 'react';

const SocialMarquee: React.FC = () => {
  const clients = [
    "Multinational Banking", "Oil & Gas Majors", "Telecommunications", "Construction Giants", "Federal Parastatals", "Real Estate Developers", "Tech Conglomerates"
  ];

  return (
    <section className="py-12 border-y border-neutral-200/60 bg-white overflow-hidden">
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-8 font-bold">
        Trusted by Industry Leaders
      </p>
      <div className="marquee-container relative max-w-full flex overflow-hidden">
        <div className="marquee-content flex items-center gap-24 min-w-full pl-24">
          {/* Logo Set 1 */}
          <div className="flex items-center gap-24 opacity-40 hover:opacity-100 transition-all duration-500">
            {clients.map((client, i) => (
              <span key={i} className="font-serif text-2xl italic font-semibold text-primary whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
          {/* Logo Set 2 (Duplicate for smooth loop) */}
          <div className="flex items-center gap-24 opacity-40 hover:opacity-100 transition-all duration-500">
            {clients.map((client, i) => (
              <span key={`dup-${i}`} className="font-serif text-2xl italic font-semibold text-primary whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
           {/* Logo Set 3 (Extra Duplicate for wide screens) */}
           <div className="flex items-center gap-24 opacity-40 hover:opacity-100 transition-all duration-500">
            {clients.map((client, i) => (
              <span key={`dup2-${i}`} className="font-serif text-2xl italic font-semibold text-primary whitespace-nowrap">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMarquee;
