import React from 'react';
import { ChevronDown } from 'lucide-react';
import RevealSection from './RevealSection';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
  activeFaq: number | null;
  setActiveFaq: (idx: number | null) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, activeFaq, setActiveFaq }) => {
  return (
    <RevealSection className="py-32 px-6 bg-[#F9F9F7]" data-scene="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent mb-6 block">
            COMMON QUESTIONS
          </span>
          <h2 className="font-serif text-6xl md:text-8xl text-primary italic">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-primary/10 hover:border-accent transition-all duration-300">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
              >
                <span className="font-bold text-primary text-lg group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <ChevronDown className={`w-6 h-6 text-accent transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === i && (
                <div className="px-8 pb-6 text-primary/70 font-light leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
};

export default FAQSection;
