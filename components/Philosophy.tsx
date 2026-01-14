import React from 'react';
import { Quote } from 'lucide-react';
import RevealSection from './RevealSection';
import { ScrollReveal } from './ReactsbitsAnimations';

const Philosophy: React.FC = () => {
  return (
    <RevealSection className="py-32 bg-[#F9F9F7] relative" data-scene="philosophy">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
            <Quote className="text-accent text-4xl" />
        </div>
        
        <ScrollReveal text="">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary leading-[1.2] mb-12">
            "We do not merely practice law; <br className="hidden md:block"/> 
            we <span className="italic text-secondary/60">engineer</span> outcomes."
          </h2>
        </ScrollReveal>
        
        <div className="w-24 h-[1px] bg-accent mx-auto my-12" />
        
        <ScrollReveal text="">
          <p className="text-lg md:text-xl text-secondary/70 font-light leading-relaxed max-w-3xl mx-auto">
            In a landscape defined by complexity, clarity is the ultimate currency. At Okosun, Okosun & Partners, we combine deep local jurisprudence with international standards of practice to deliver certainty in uncertain times.
          </p>
        </ScrollReveal>
      </div>
    </RevealSection>
  );
};

export default Philosophy;
