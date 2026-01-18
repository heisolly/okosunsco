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

      {/* Team Gallery Section - Modern Masonry Layout */}
      <div className="border-t-2 border-primary/10 pt-24">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary italic text-center">
            Our Legal Team
          </h2>
          <p className="text-center text-primary/60 mt-4 font-light">
            Dedicated professionals committed to excellence
          </p>
        </div>
        
        {/* Masonry Grid Gallery */}
        <div className="relative">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, #0E0E12 1px, transparent 1px),
                linear-gradient(to bottom, #0E0E12 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Desktop: 4 Column Masonry */}
          <div className="hidden md:grid grid-cols-4 gap-6 relative z-10">
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
            ].map((image, index) => {
              // Create staggered heights for masonry effect
              const heights = ['h-[400px]', 'h-[500px]', 'h-[450px]', 'h-[480px]'];
              const heightClass = heights[index % 4];
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-3xl ${heightClass} masonry-item`}
                  style={{
                    animationDelay: `${index * 0.08}s`
                  }}
                >
                  {/* Image */}
                  <img
                    src={image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    alt={`Team member ${index + 1}`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <span className="text-primary font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="h-1 w-0 bg-accent group-hover:w-20 transition-all duration-500 delay-200"></div>
                  </div>

                  {/* Border Accent */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-3xl transition-all duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Mobile: 2 Column Grid */}
          <div className="md:hidden grid grid-cols-2 gap-4 relative z-10">
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
            ].map((image, index) => {
              // Alternating heights for mobile
              const heights = ['h-[280px]', 'h-[320px]'];
              const heightClass = heights[index % 2];
              
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${heightClass} masonry-item`}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <img
                    src={image}
                    className="w-full h-full object-cover grayscale group-active:grayscale-0 transition-all duration-700"
                    alt={`Team member ${index + 1}`}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes masonryFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .masonry-item {
          animation: masonryFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Team;

