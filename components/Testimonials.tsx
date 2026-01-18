import React from 'react';
import RevealSection from './RevealSection';
import { DecryptedText, GradientText } from './ReactsbitsAnimations';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Group CEO",
      role: "Infrastructure Conglomerate",
      text: "Okosun, Okosun & Partners delivered exceptional results in our corporate restructuring. Their strategic approach saved us millions.",
      rating: 5
    },
    {
      name: "Managing Director",
      role: "Real Estate Development",
      text: "Professional, thorough, and results-driven. They handled our complex property dispute with remarkable expertise and dedication.",
      rating: 5
    },
    {
      name: "Executive Chairman",
      role: "Oil & Gas Sector",
      text: "The best legal counsel in Lagos. Their attention to detail and commitment to excellence is unmatched in the industry.",
      rating: 5
    }
  ];

  return (
    <RevealSection className="py-20 md:py-32 px-4 md:px-6 bg-white relative overflow-hidden" data-scene="testimonials">
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

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full mb-6 border border-accent/20">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-accent">
              <DecryptedText text="CLIENT VOICES" />
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-primary italic">
            <GradientText text="Testimonials" colors={['#0E0E12', '#D4AF37', '#0E0E12']} />
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4 mb-8">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((testimonial, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[85vw] max-w-md snap-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-ivory/50 border-2 border-primary/10 hover:border-accent transition-all duration-500 shadow-lg relative overflow-hidden group">
                  {/* Quote Icon Background */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Quote className="w-20 h-20 text-accent" />
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-primary/80 font-light leading-relaxed mb-8 text-base italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="border-t-2 border-accent/20 pt-6">
                      <p className="font-bold text-primary mb-1 text-lg">{testimonial.name}</p>
                      <p className="text-[10px] uppercase tracking-wider text-primary/50 font-black">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2">
            {reviews.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-primary/20"
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {reviews.map((testimonial, i) => (
            <div 
              key={i} 
              className="stagger-item group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-full p-10 rounded-2xl bg-gradient-to-br from-white to-ivory/50 border-2 border-primary/10 hover:border-accent transition-all duration-500 hover:shadow-xl relative overflow-hidden">
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Quote className="w-24 h-24 text-accent" />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-primary/70 font-light leading-relaxed mb-8 text-lg italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t-2 border-accent/20 pt-6">
                    <p className="font-bold text-primary mb-1">{testimonial.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-primary/50 font-black">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            </div>
          ))}
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
      `}</style>
    </RevealSection>
  );
};

export default Testimonials;
