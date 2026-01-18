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

      {/* Team Images Section */}
      <div className="border-t-2 border-primary/10 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            '/images/IMG_9634-Edit.jpg',
            '/images/IMG_9627-Edit.jpg',
            '/images/IMG_9642-Edit.jpg'
          ].map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={image}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Team Member"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

