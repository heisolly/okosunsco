import React from 'react';
import Hero from '../components/Hero';
import SocialMarquee from '../components/SocialMarquee';
import Philosophy from '../components/Philosophy';
import PracticeGrid from '../components/PracticeGrid';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import AboutHighlight from '../components/AboutHighlight';
import Testimonials from '../components/Testimonials';
import ProcessTimeline from '../components/ProcessTimeline';
import FAQSection from '../components/FAQSection';
import { PRACTICE_AREAS, WHY_CHOOSE_US, getIcon, FAQS } from '../constants';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
  activeFaq: number | null;
  setActiveFaq: (idx: number | null) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, activeFaq, setActiveFaq }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="bg-grain"></div>
      
      <Hero 
        onInitiateBrief={() => onNavigate('consultation')}
        onViewCapabilities={() => onNavigate('practice')}
      />

      <SocialMarquee />

      <Philosophy />

      <PracticeGrid 
        areas={PRACTICE_AREAS}
        onNavigate={onNavigate}
        getIcon={getIcon}
      />

      <FeaturedCaseStudy />

      <AboutHighlight whyChooseUs={WHY_CHOOSE_US} />

      <section className="py-48 px-6 relative overflow-hidden" data-scene="cta">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-5xl mx-auto text-center glass-card rounded-[5rem] p-24 shadow-gold relative overflow-hidden group hover:scale-[1.02] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[5rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-accent/40 rounded-full" style={{ animation: 'float 7s ease-in-out infinite' }} />
            <div className="absolute top-[70%] right-[20%] w-1.5 h-1.5 bg-accent/30 rounded-full" style={{ animation: 'floatReverse 9s ease-in-out infinite' }} />
            <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-accent/35 rounded-full" style={{ animation: 'float 11s ease-in-out infinite' }} />
          </div>

          <div className="relative z-10">
            <h2 className="font-serif text-5xl md:text-8xl text-primary italic mb-12 leading-tight">
              Ready for a <br />
              <span className="gradient-text text-glow">Strategic Shift?</span>
            </h2>
            <p className="text-2xl text-secondary/60 font-light mb-16 max-w-2xl mx-auto">
              Our partners handle only a limited portfolio of cases to ensure
              absolute strategic focus.
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="group/btn relative px-16 py-8 bg-gradient-to-r from-primary via-accent to-primary text-white rounded-full text-[11px] uppercase tracking-[0.5em] font-black shadow-gold transform hover:-translate-y-3 hover:shadow-[0_30px_80px_-15px_rgba(212,175,55,0.5)] transition-all duration-500 overflow-hidden btn-premium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-gold-light to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover/btn:scale-110 inline-block transition-transform duration-300">
                Initiate Consultation
              </span>
            </button>
          </div>
        </div>
      </section>

      <Testimonials />

      <ProcessTimeline onStartProcess={() => onNavigate('consultation')} />

      <FAQSection 
        faqs={FAQS}
        activeFaq={activeFaq}
        setActiveFaq={setActiveFaq}
      />
    </div>
  );
};

export default Home;
