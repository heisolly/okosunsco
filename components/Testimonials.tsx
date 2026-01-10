import React from 'react';
import RevealSection from './RevealSection';

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
    <RevealSection className="py-32 px-6 bg-white" data-scene="testimonials">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-6 block">
            CLIENT VOICES
          </span>
          <h2 className="font-serif text-6xl md:text-8xl text-primary italic">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testimonial, i) => (
            <div key={i} className="bg-white border-2 border-primary/10 p-10 hover:border-accent transition-all duration-500 hover:shadow-xl group">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-accent text-xl">★</span>
                ))}
              </div>
              <p className="text-primary/70 font-light leading-relaxed mb-8 text-lg italic">
                "{testimonial.text}"
              </p>
              <div className="border-t-2 border-accent/20 pt-6">
                <p className="font-bold text-primary mb-1">{testimonial.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-primary/50 font-black">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default Testimonials;
