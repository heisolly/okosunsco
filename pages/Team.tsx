import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PARTNERS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="pt-48 pb-32 px-6 md:px-24 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row items-end justify-between mb-32">
        <div>
          <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
            THE PARTNERS
          </span>
          <h1 className="font-serif text-6xl md:text-9xl text-primary italic leading-none">
            Architects of <br />
            Justice.
          </h1>
        </div>
      </div>
      
      {/* Partners Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        {PARTNERS.map((p) => (
          <div key={p.id} className="group relative">
            <div className="aspect-[3/4] overflow-hidden rounded-[3rem] relative mb-12 shadow-2xl">
              <img
                src={p.image}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                alt={p.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-12 left-12 p-8 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-[10px] uppercase tracking-widest font-black text-accent mb-2 block">
                  Principal Lead
                </span>
                <p className="font-serif text-3xl italic">
                  "{p.bio.slice(0, 80)}..."
                </p>
              </div>
            </div>
            <h3 className="font-display text-4xl font-bold text-primary mb-2">
              {p.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-black mb-6">
              {p.role} • {p.bar}
            </p>
            <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-black text-primary hover:text-accent transition-all group-hover:translate-x-4">
              Private Dossier <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Team Gallery Section */}
      <div className="border-t-2 border-primary/10 pt-24">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary italic text-center">
            Our Legal Team
          </h2>
          <p className="text-center text-primary/60 mt-4 font-light">
            Dedicated professionals committed to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            '/images/IMG_9616-Edit.jpg',
            '/images/IMG_9660-Edit.jpg',
            '/images/IMG_9608-Edit.jpg',
            '/images/IMG_9615-Edit-Edit.jpg',
            '/images/IMG_9619-Edit.jpg',
            '/images/IMG_9627-Edit.jpg',
            '/images/IMG_9634-Edit.jpg',
            '/images/IMG_9640-Edit.jpg',
            '/images/IMG_9642-Edit.jpg',
            '/images/IMG_9664-Edit-Edit.jpg',
            '/images/IMG_9672-Edit.jpg',
            '/images/IMG_9612-Edit.jpg'
          ].map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={image}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  alt={`Team member ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

