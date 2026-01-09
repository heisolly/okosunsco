import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  Quote,
  ArrowRight,
  Shield,
  Scale,
  Gavel,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  CheckCircle2,
  MessageSquare,
  Clock,
  Globe,
  Send,
  ShieldAlert,
  Instagram,
  Linkedin,
  Twitter,
  PhoneCall,
  ExternalLink,
} from "lucide-react";
import Statue from "./components/Statue";
import RevealSection from "./components/RevealSection";
import LegalAssistant from "./components/LegalAssistant";
import ScaleModel from "./components/ScaleModel"; // New 3D Animation
import SocialMarquee from "./components/SocialMarquee"; // New Marquee
import Philosophy from "./components/Philosophy"; // New Quote Section
import FeaturedCaseStudy from "./components/FeaturedCaseStudy"; // New Dark Section
import LegalInsights from "./components/LegalInsights"; // New Blog Section
import { Scene, Page } from "./types";
import {
  PRACTICE_AREAS,
  PARTNERS,
  getIcon,
  FAQS,
  OFFICE_HOURS,
  FIRM_NAME,
  WHY_CHOOSE_US,
} from "./constants";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentScene, setCurrentScene] = useState<Scene>("intro");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (currentPage !== "home") return;

      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll("section");
      let bestScene: Scene = "intro";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          const sceneAttr = section.getAttribute("data-scene") as Scene;
          if (sceneAttr) bestScene = sceneAttr;
        }
      });
      setCurrentScene(bestScene);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setCurrentPage(page), 100);
  };

  const renderHome = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="bg-grain"></div> {/* Film/Noise Overlay */}
      
      {/* NOIR LUXE HEADER */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 lg:px-12 transition-all duration-500 bg-gradient-to-b from-black/50 to-transparent">
         <div className="max-w-[1800px] mx-auto flex items-center justify-between">
             <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigateTo('home')}>
                <div className="text-2xl font-serif text-white group-hover:text-accent transition-colors">O&P</div>
                <div className="h-4 w-[1px] bg-white/20" />
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/80">Okosun & Partners</div>
             </div>
             
             <div className="hidden md:flex items-center gap-12">
                {['Practice', 'The Firm', 'Insights'].map((item) => (
                   <button key={item} 
                      className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-accent hover:underline decoration-accent/50 underline-offset-8 transition-all"
                      onClick={() => navigateTo(item.toLowerCase() as any)}
                   >
                      {item}
                   </button>
                ))}
             </div>

             <button onClick={() => navigateTo('consultation')} className="text-[10px] tracking-[0.2em] font-bold text-primary bg-accent px-6 py-2 hover:bg-white transition-colors uppercase">
                Consult
             </button>
         </div>
      </nav>

      {/* HERO SECTION - GOLDEN HOUR LUXURY */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-primary" data-scene="intro">
         
         {/* Background Layer - Warm Luxury */}
         <div className="absolute inset-0 z-0">
            {/* Base Image - Visible & Rich */}
            <div className="absolute inset-0 bg-[url('/benigno-hoyuela-rb70_pV4nAE-unsplash.jpg')] bg-cover bg-center opacity-50" />
            
            {/* Rich Gold-Tinted Gradient - Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-primary/80 to-primary" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/5 pointer-events-none" />
            
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
         </div>

         {/* Centered Content */}
         <div className="relative z-20 flex flex-col items-center text-center w-full max-w-[1920px] px-4 pt-12">
             
             {/* Decorative Top Line */}
             <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-accent/50 to-transparent mb-8" />

             {/* Top Label */}
             <div className="flex items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-1000 delay-100 mb-4">
                <span className="text-accent/80 text-xs md:text-sm font-mono tracking-[0.5em] uppercase shadow-black/50 drop-shadow-lg">Est. 2010</span>
                <div className="w-2 h-2 rounded-full border border-accent/60" />
                <span className="text-accent/80 text-xs md:text-sm font-mono tracking-[0.5em] uppercase shadow-black/50 drop-shadow-lg">Global Counsel</span>
             </div>

             {/* Main Typography - MASSIVE SCALE */}
             <div className="relative py-8 flex flex-col items-center justify-center w-full">
                
                {/* 'Strategic' */}
                <h2 className="text-[clamp(4rem,10vw,8rem)] leading-none font-serif italic text-white/20 mix-blend-screen tracking-tighter animate-in slide-in-from-bottom-8 duration-1000 delay-200">
                   Strategic
                </h2>
                
                {/* 'DEFENSE' - The Centerpiece */}
                <h1 className="text-[clamp(7rem,22vw,22rem)] leading-[0.8] font-serif text-transparent bg-clip-text bg-gradient-to-b from-ivory to-white/80 tracking-tighter animate-in zoom-in-95 duration-1000 delay-300 drop-shadow-2xl relative z-10 -mt-2 lg:-mt-6">
                   DEFENSE
                </h1>
                
                {/* '& Legacy' */}
                <h2 className="text-[clamp(3rem,8vw,6rem)] leading-none font-serif italic text-accent tracking-wide animate-in slide-in-from-bottom-8 duration-1000 delay-500 relative z-20 -mt-2 lg:-mt-8">
                   & Legacy
                </h2>
             </div>

             {/* Manifesto / Description - More Text as Requested */}
             <div className="max-w-3xl mx-auto mt-8 md:mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                <p className="text-lg md:text-2xl text-secondary/70 font-light leading-relaxed px-4">
                   We do not merely practice law. We engineer outcomes for Nigeria's most prominent families and corporations.
                   <span className="block mt-4 text-white/90 font-normal">Precision. Discretion. Absolute Power.</span>
                </p>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                   <button onClick={() => navigateTo('consultation')} className="px-10 py-4 bg-accent text-primary text-xs font-bold uppercase tracking-[0.25em] hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 min-w-[200px]">
                      Inititate Brief
                   </button>
                   <button onClick={() => navigateTo('practice')} className="px-10 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-white/5 transition-all min-w-[200px]">
                      Our Capabilities
                   </button>
                </div>
             </div>

         </div>

         {/* Bottom Footer - Minimal */}
         <div className="absolute bottom-8 w-full px-8 lg:px-20 flex justify-between items-end z-30 pointer-events-none text-white/30">
             <div className="hidden md:block text-[10px] uppercase tracking-widest font-mono">
                Based in Benin City<br/>Operating Globally
             </div>
             
             {/* Floating Stats */}
             <div className="flex flex-col items-end">
                <div className="text-5xl lg:text-7xl font-serif text-white/10 font-bold leading-none select-none">15<span className="text-accent/20">+</span></div>
                <div className="text-[10px] uppercase tracking-[0.4em] border-t border-accent/20 pt-2 mt-2">Years of Excellence</div>
             </div>
         </div>

      </section>

      {/* NEW: Branding Marquee */}
      <SocialMarquee />

      {/* NEW: Philosophy / Quote */}
      <Philosophy />

      {/* Modern Practice Grid with 3D Cards */}
      <RevealSection
        className="py-48 px-6 md:px-24 bg-gradient-to-b from-white/30 to-ivory/50 backdrop-blur-sm relative overflow-hidden"
        data-scene="practice"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-accent text-xs font-black uppercase tracking-[0.4em] mb-4 block shimmer">
                DOMAINS
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-primary italic leading-tight">
                Mastery across the <span className="gradient-text">legal spectrum.</span>
              </h2>
            </div>
            <p className="text-secondary/50 max-w-xs text-sm font-light">
              Sophisticated counsel tailored for Nigeria's evolving corporate
              and individual landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.map((area, index) => (
              <div
                key={area.id}
                className="stagger-item group p-12 glass-card hover:shadow-gold transition-all duration-700 hover:-translate-y-3 hover:scale-105 flex flex-col rounded-3xl card-3d relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  <div className="mb-10 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 float-icon">
                    {getIcon(area.icon)}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-500">
                    {area.title}
                  </h3>
                  <p className="text-sm font-light text-secondary/70 mb-10 leading-relaxed">
                    {area.description}
                  </p>
                  <button
                    onClick={() => navigateTo("practice")}
                    className="mt-auto flex items-center gap-3 text-[10px] uppercase tracking-widest font-black text-accent group-hover:gap-5 transition-all animated-underline"
                  >
                    Brief Details <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* NEW: Featured Case Study (Dark Mode) */}
      <FeaturedCaseStudy />

      {/* Split About Section with Premium Effects */}
      <RevealSection
        className="py-48 px-6 md:px-24 bg-gradient-to-br from-primary via-primary to-accent/20 text-white overflow-hidden relative"
        data-scene="values"
      >
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[200px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-light rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-accent/50 rounded-full" style={{ animation: 'float 10s ease-in-out infinite' }} />
          <div className="absolute top-[50%] right-[15%] w-3 h-3 bg-gold-light/40 rounded-full" style={{ animation: 'floatReverse 12s ease-in-out infinite' }} />
          <div className="absolute bottom-[25%] left-[30%] w-1.5 h-1.5 bg-accent/60 rounded-full" style={{ animation: 'float 14s ease-in-out infinite' }} />
          <div className="absolute top-[70%] right-[40%] w-2.5 h-2.5 bg-gold-light/30 rounded-full" style={{ animation: 'floatReverse 11s ease-in-out infinite' }} />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="relative">
            <div className="absolute -top-24 -left-24 text-[20rem] font-serif italic text-white/5 pointer-events-none animate-pulse">
              O&P
            </div>
            <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block shimmer">
              THE CHAMBERS
            </span>
            <h2 className="font-serif text-5xl md:text-8xl text-white italic mb-12 leading-none">
              Since 2010, <br />
              we've refined the <br />
              art of <span className="gradient-text text-glow">victory.</span>
            </h2>
            <p className="text-white/40 font-light text-xl leading-relaxed mb-16 max-w-lg">
              Founded by Emmanuel and Aituaje Okosun, our firm bridges the gap
              between traditional advocacy and modern strategic consulting.
            </p>
            <div className="space-y-10">
              {WHY_CHOOSE_US.slice(0, 3).map((item, i) => (
                <div key={i} className="flex gap-6 group hover-lift">
                  <div className="shrink-0 p-4 glass-card-dark rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden group shadow-gold hover:shadow-[0_40px_100px_-20px_rgba(212,175,55,0.4)] transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:brightness-75 group-hover:grayscale-0 transition-all duration-1000"
                alt="Chambers"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent group-hover:from-accent/30 transition-colors duration-700" />
            </div>
            <div className="absolute bottom-12 -left-12 p-12 glass-card-dark rounded-[3rem] shadow-gold max-w-xs transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-gold-light to-accent opacity-90 rounded-[3rem]" />
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest block mb-4 text-white/70">
                  Total Recovered
                </span>
                <p className="font-display text-5xl font-bold text-white gradient-text">$50M+</p>
                <p className="text-xs font-medium uppercase tracking-tighter text-white/80 mt-2">
                  Capital Secured for Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Premium CTA Section */}
      <RevealSection className="py-48 px-6 relative overflow-hidden" data-scene="cta">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-5xl mx-auto text-center glass-card rounded-[5rem] p-24 shadow-gold relative overflow-hidden group hover:scale-[1.02] transition-all duration-700">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[5rem]" />
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          
          {/* Floating Particles */}
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
              onClick={() => navigateTo("contact")}
              className="group/btn relative px-16 py-8 bg-gradient-to-r from-primary via-accent to-primary text-white rounded-full text-[11px] uppercase tracking-[0.5em] font-black shadow-gold transform hover:-translate-y-3 hover:shadow-[0_30px_80px_-15px_rgba(212,175,55,0.5)] transition-all duration-500 overflow-hidden btn-premium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-gold-light to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover/btn:scale-110 inline-block transition-transform duration-300">
                Initiate Consultation
              </span>
            </button>
          </div>
        </div>
      </RevealSection>

      {/* CLIENT TESTIMONIALS SECTION */}
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
            {[
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
            ].map((testimonial, i) => (
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

      {/* STRATEGIC PROCESS - THE GOLDEN TIMELINE */}
      <RevealSection className="py-32 lg:py-48 px-6 bg-[#0E0E12] overflow-hidden relative" data-scene="process">
         
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/50 blur-[200px] rounded-full pointer-events-none" />

         <div className="max-w-[1600px] mx-auto relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b border-accent/10 pb-12">
               <div>
                  <span className="text-accent text-xs font-mono tracking-[0.4em] uppercase block mb-6 animate-pulse">
                     Thought Leadership
                  </span>
                  <h2 className="text-5xl md:text-7xl font-serif text-white max-w-2xl leading-[1.1]">
                     Architecture of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#F4E4C1]">Victory.</span>
                  </h2>
               </div>
               <p className="text-white/40 max-w-md text-sm leading-relaxed mb-2 font-light">
                  Our engagement model is designed for high-stakes complexity. We dissect, deconstruct, and dominate.
               </p>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 relative group/timeline">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/5" />
               
               {[
                  {
                     id: "01",
                     icon: MessageSquare,
                     title: "Alignment",
                     desc: "We align with your objectives through deep-dive discovery and forensic analysis of the situation."
                  },
                  {
                     id: "02",
                     icon: Shield,
                     title: "Blueprint",
                     desc: "Crafting a master strategy that anticipates opposition moves and secures multiple pathways to victory."
                  },
                  {
                     id: "03",
                     icon: Gavel,
                     title: "Strike",
                     desc: "Surgical execution of the legal strategy. Precision filings, aggressive negotiation, and dominant presence."
                  },
                  {
                     id: "04",
                     icon: CheckCircle2,
                     title: "Legacy",
                     desc: "Securing the outcome and fortifying your position to ensure long-term stability and protection."
                  }
               ].map((step, idx) => (
                  <div key={idx} className="relative p-8 md:p-12 border-l border-white/5 group hover:bg-white/5 transition-all duration-500 hover:border-accent/20">
                     
                     {/* Step Number */}
                     <span className="text-6xl md:text-8xl font-serif text-white/5 group-hover:text-accent/10 transition-colors duration-500 absolute top-4 right-4 md:right-8 select-none">
                        {step.id}
                     </span>

                     {/* Icon Marker */}
                     <div className="w-4 h-4 bg-[#0E0E12] border border-accent/50 rounded-full relative z-10 mb-12 group-hover:bg-accent group-hover:scale-125 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        <div className="absolute -inset-2 bg-accent/20 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
                     </div>

                     {/* Content */}
                     <div className="relative z-10">
                        <h3 className="text-2xl font-serif text-white mb-6 group-hover:text-accent transition-colors duration-300">
                           {step.title}
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                           {step.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 flex justify-center">
               <button onClick={() => navigateTo('consultation')} className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-accent transition-colors">
                  <span>Start the Process</span>
                  <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>

         </div>
      </RevealSection>

      {/* NEW: Legal Insights / Blog */}
      <LegalInsights />

      {/* FAQ SECTION */}
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
            {FAQS.map((faq, i) => (
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
    </div>
  );

  const renderAbout = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* About Hero */}
      <div className="pt-48 pb-20 px-6 md:px-24 max-w-[1800px] mx-auto">
        <div className="max-w-4xl">
          <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
            ABOUT THE FIRM
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-primary italic mb-12 leading-none">
            A Legacy of <br />
            <span className="text-accent">Excellence</span> & Trust.
          </h1>
          <p className="text-2xl text-primary/60 font-light leading-relaxed max-w-2xl">
            Founded in 2010, Okosun, Okosun & Partners serves as the strategic
            vanguard for Nigeria's elite corporate interests and individual rights.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Years of Experience", value: "15+" },
            { label: "Cases Won", value: "500+" },
            { label: "recovered for clients", value: "₦5 Billion+" },
            { label: "Expert Attorneys", value: "12" }
          ].map((stat, i) => (
            <div key={i} className="text-center group hover:-translate-y-2 transition-transform duration-500">
              <div className="text-4xl md:text-6xl font-serif italic text-accent mb-4">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Section */}
      <div className="py-32 px-6 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1575505586669-63d931686482?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                alt="Law Office"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full z-[-1]"></div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-serif italic text-primary mb-6">Our Story</h3>
              <div className="space-y-6 text-lg text-primary/70 font-light leading-relaxed">
                <p>
                  We provide client-focused legal solutions with absolute integrity.
                  Every case is treated as a strategic project, utilizing the latest
                  in legal tech and traditional investigative methods to ensure the best possible outcomes.
                </p>
                <p>
                  Under the leadership of Emmanuel Ehiabhi Okosun, the firm has
                  successfully recovered billions of Naira for clients in complex
                  commercial litigation and property disputes, establishing a reputation for
                  tenacity and brilliance in the courtroom.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Strategic Vision", desc: "Forward-thinking approaches to complex legal challenges." },
                { title: "Client Focus", desc: "Unwavering commitment to our clients' best interests." },
                { title: "Integrity", desc: "Upholding the highest standards of professional ethics." },
                { title: "Excellence", desc: "Delivering world-class legal services in every matter." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-accent/20 pl-6 hover:border-accent transition-colors duration-300">
                  <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-primary/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
    </div>
  );

  const renderPractice = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Practice Hero */}
      <div className="pt-48 pb-20 px-6 md:px-24 max-w-[1800px] mx-auto">
        <div className="max-w-4xl">
          <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
            AREAS OF EXPERTISE
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-primary italic mb-12 leading-none">
            Legal <br />
            <span className="text-accent">Mastery.</span>
          </h1>
          <p className="text-2xl text-primary/60 font-light leading-relaxed max-w-2xl">
            Our practice is built on deep industry knowledge and unwavering commitment to securing favorable outcomes in complex legal matters.
          </p>
        </div>
      </div>

      {/* Practice Grid */}
      <div className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div key={area.id} className="group relative bg-primary/[0.02] hover:bg-primary text-primary hover:text-white p-10 lg:p-12 transition-all duration-500 border border-primary/5 hover:border-primary/0 hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gavel className="w-32 h-32 rotate-12" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block opacity-70">
                    {area.id}
                  </span>
                  <h3 className="font-serif text-3xl italic mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-90 max-w-xs mb-8">
                    {area.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-black group-hover:text-accent transition-colors">
                  <span className="w-8 h-[1px] bg-current"></span>
                  Learn More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-5xl italic mb-8">Ready to discuss your case?</h2>
          <p className="text-white/60 mb-12 text-lg">We are ready to provide the strategic counsel you need.</p>
          <button
            onClick={() => navigateTo("contact")}
            className="px-12 py-5 bg-accent text-primary text-xs font-black uppercase tracking-[0.3em] hover:bg-white transition-all duration-500"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );

  const renderConsultation = () => (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Consult Hero */}
      <div className="pt-48 pb-32 px-6 md:px-24 max-w-[100vw] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
            PRIORITY ACCESS
          </span>
          <h1 className="font-serif text-5xl md:text-8xl italic mb-8">
            Schedule Your <br/><span className="text-accent">Strategic Review</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Secure a private session with our senior counsel. We review your case details with strict confidentiality and provide an initial strategic roadmap.
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 -mt-20 pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column: Benefits & Trust */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Benefits Card */}
            <div className="bg-white p-10 shadow-2xl border-t-4 border-accent">
               <h3 className="font-serif text-2xl text-primary mb-6 italic">Why Schedule?</h3>
               <ul className="space-y-6">
                 {[
                   { title: "Direct Partner Access", desc: "Consult directly with senior strategists." },
                   { title: "Case Assessment", desc: "Honest evaluation of your legal standing." },
                   { title: "Strategic Roadmap", desc: "Actionable next steps for your matter." },
                   { title: "Strict Confidentiality", desc: "Your privacy is guaranteed from step one." }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4">
                     <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                     <div>
                       <h4 className="font-bold text-sm text-primary uppercase tracking-wider">{item.title}</h4>
                       <p className="text-xs text-primary/60 mt-1 leading-relaxed">{item.desc}</p>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Testimonial Snippet */}
            <div className="bg-primary p-10 text-white relative overflow-hidden">
               <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/10" />
               <p className="font-serif italic text-lg leading-relaxed mb-6 opacity-90">
                 "The consultation alone gave me more clarity than months of research. Absolutely worth the time."
               </p>
               <div className="flex items-center gap-3 opacity-60">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-xs uppercase tracking-widest font-black">Corporate Client</span>
               </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
               
               <h3 className="font-serif text-3xl text-primary italic mb-10">Consultation Request</h3>
               
               <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Full Name</label>
                     <input type="text" className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" placeholder="e.g. John Doe" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Organization</label>
                     <input type="text" className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" placeholder="e.g. Global Corp" />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Email Address</label>
                     <input type="email" className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" placeholder="john@example.com" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Phone Number</label>
                     <input type="tel" className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" placeholder="+234..." />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Case Category</label>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                      {["Corporate", "Litigation", "Property", "Advisory"].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                           <div className="w-4 h-4 border border-primary/20 rounded-full flex items-center justify-center group-hover:border-accent">
                             <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                           </div>
                           <span className="text-sm text-primary/60 group-hover:text-primary transition-colors">{type}</span>
                        </label>
                      ))}
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Brief Case Description</label>
                   <textarea className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20 min-h-[120px]" placeholder="Could you provide a brief overview of your legal inquiry?"></textarea>
                 </div>

                 <div className="pt-8 flex items-center justify-between">
                    <p className="text-xs text-primary/40 max-w-xs">
                       * By submitting this form, you agree to our privacy policy. Your information is encrypted and secure.
                    </p>
                    <button type="submit" className="px-12 py-5 bg-primary text-white hover:bg-accent transition-all duration-500 shadow-xl hover:shadow-2xl group">
                       <span className="text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4">
                          Request Slot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </span>
                    </button>
                 </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-ivory text-primary selection:bg-accent/20 selection:text-accent font-sans overflow-x-hidden">
      <div className="bg-grain"></div> {/* Film/Noise Overlay */}
      {/* LUXURY HEADER - REDESIGNED */}
      <nav className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-xl border-b border-accent/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-500">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            
            {/* LOGO SECTION - LEFT */}
            <div
              onClick={() => navigateTo("home")}
              className="flex items-center gap-4 cursor-pointer group/logo"
            >
              <img 
                src="/logo.png" 
                alt="Okosun, Okosun & Partners" 
                className="h-10 lg:h-12 w-auto object-contain group-hover/logo:scale-105 transition-all duration-500"
              />
              <div className="hidden xl:flex flex-col border-l-2 border-accent/30 pl-4">
                <span className="text-sm font-bold text-primary tracking-tight">
                  Okosun, Okosun & Partners
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-black text-primary/40">
                  Strategic Legal Counsel
                </span>
              </div>
            </div>

            {/* NAVIGATION - CENTER */}
            <div className="hidden lg:flex items-center gap-12">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "practice", label: "Practice" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 py-2 group/nav ${
                    currentPage === item.id 
                      ? "text-accent" 
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${
                      currentPage === item.id 
                        ? "w-full" 
                        : "w-0 group-hover/nav:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA BUTTONS - RIGHT */}
            <div className="flex items-center gap-4">
              {/* Consult Button */}
              <button
                onClick={() => navigateTo("consultation")}
                className="hidden md:flex items-center gap-3 px-8 py-3 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl group/cta"
              >
                <PhoneCall className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
                <span>Consult Now</span>
              </button>

              {/* Contact Icon Button */}
              <button
                onClick={() => navigateTo("contact")}
                className="flex items-center justify-center w-12 h-12 border-2 border-primary/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 group/icon"
              >
                <ExternalLink className="w-5 h-5 text-primary/60 group-hover/icon:text-accent transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Statue
        currentScene={currentScene}
        currentPage={currentPage}
        scrollY={scrollY}
      />

      <main className="relative z-10">
        {currentPage === "home" && renderHome()}
        {currentPage === "about" && renderAbout()}
        {currentPage === "team" && renderTeam()}
        {currentPage === "practice" && renderPractice()}
        {currentPage === "consultation" && renderConsultation()}
        {currentPage === "contact" && (
          <div className="pt-48 pb-0">
            {/* Contact Header & Form Section */}
            <div className="px-6 md:px-24 max-w-7xl mx-auto pb-32">
              <div className="text-center mb-20">
                <span className="text-accent text-xs font-black uppercase tracking-[0.5em] mb-8 block">
                  GET IN TOUCH
                </span>
                <h1 className="font-serif text-6xl md:text-9xl text-primary italic mb-6">
                  Contact Us
                </h1>
                <p className="text-xl text-primary/60 font-light max-w-2xl mx-auto">
                  Schedule a confidential consultation with our legal experts
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                <div className="bg-white border-2 border-primary/10 p-8 text-center hover:border-accent transition-all duration-500 hover:shadow-xl group">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-all">
                    <MapPin className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-3">
                    OFFICE LOCATION
                  </p>
                  <p className="text-primary font-light leading-relaxed">
                    1st Ewasede<br />
                    Benin City, Edo State<br />
                    Nigeria
                  </p>
                </div>

                <div className="bg-white border-2 border-primary/10 p-8 text-center hover:border-accent transition-all duration-500 hover:shadow-xl group">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-all">
                    <Phone className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-3">
                    PHONE
                  </p>
                  <p className="text-primary font-light leading-relaxed">
                    +234 805 528 2602<br />
                    +234 803 482 8680
                  </p>
                </div>

                <div className="bg-white border-2 border-primary/10 p-8 text-center hover:border-accent transition-all duration-500 hover:shadow-xl group">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-all">
                    <Mail className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-3">
                    EMAIL
                  </p>
                  <p className="text-primary font-light leading-relaxed">
                    counsel@okosunpartners.com<br />
                    info@okosunpartners.com
                  </p>
                </div>

                <div className="bg-white border-2 border-primary/10 p-8 text-center hover:border-accent transition-all duration-500 hover:shadow-xl group">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 border-accent flex items-center justify-center group-hover:bg-accent transition-all">
                    <Clock className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-3">
                    OFFICE HOURS
                  </p>
                  <p className="text-primary font-light leading-relaxed">
                    Mon - Fri: 9AM - 6PM<br />
                    Sat: By Appointment
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border-2 border-primary/10 p-12 md:p-16 hover:border-accent/30 transition-all duration-500">
                  <h3 className="font-serif text-4xl text-primary italic mb-8 text-center">
                    Send Us a Message
                  </h3>
                  <form
                    className="space-y-8"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none"
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none"
                          placeholder="Legal Consultation"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        className="w-full bg-primary/5 border-2 border-primary/10 p-6 text-primary focus:border-accent focus:bg-white transition-all outline-none resize-none"
                        placeholder="Please describe your legal matter..."
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button className="px-16 py-6 bg-primary text-white hover:bg-accent transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
                        <span className="text-[11px] uppercase tracking-[0.5em] font-black">
                          Send Message
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* FULL WIDTH MAP SECTION - COOL DESIGN */}
            <div className="relative w-full">
              {/* Decorative Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-10"></div>
              
              {/* Map Container with Shadow */}
              <div className="relative w-full h-[700px] shadow-2xl">
                {/* Overlay Gradient for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none z-10"></div>
                
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.3!2d5.634533!3d6.333446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjAnMDAuNCJOIDXCsDM4JzA0LjMiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0%) contrast(1.1) saturate(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Okosun, Okosun & Partners Office Location - Benin City"
                ></iframe>

                {/* Location Badge Overlay */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-8 py-4 shadow-xl border-l-4 border-accent z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-1">
                        OUR LOCATION
                      </p>
                      <p className="text-sm font-bold text-primary">
                        1st Ewasede, Benin City
                      </p>
                      <p className="text-xs text-primary/60">
                        Edo State, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent/30 pointer-events-none z-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent/30 pointer-events-none z-20"></div>
              </div>

              {/* Decorative Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>
        )}

        {/* REDESIGNED LUXURY FOOTER */}
        <footer className="w-full bg-primary text-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />
          
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 lg:py-24 relative z-10">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 pb-16 border-b border-white/10">
              
              {/* Brand Section - Left */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <img 
                    src="/logo.png" 
                    alt="Okosun, Okosun & Partners" 
                    className="h-20 lg:h-24 w-auto object-contain mb-6 brightness-0 invert opacity-95"
                  />
                  <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                    Delivering strategic legal excellence with unwavering commitment to our clients' success since 2010.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {[
                    { Icon: Twitter, label: 'Twitter', url: '#' },
                    { Icon: Linkedin, label: 'LinkedIn', url: '#' },
                    { Icon: Instagram, label: 'Instagram', url: '#' }
                  ].map(({ Icon, label, url }, i) => (
                    <a
                      key={i}
                      href={url}
                      aria-label={label}
                      className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2 space-y-6">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { id: "home", label: "Home" },
                    { id: "about", label: "About Us" },
                    { id: "team", label: "Our Team" },
                    { id: "practice", label: "Practice Areas" },
                    { id: "contact", label: "Contact" }
                  ].map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => navigateTo(link.id as Page)}
                        className="text-sm text-white/60 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practice Areas */}
              <div className="lg:col-span-3 space-y-6">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">
                  Practice Areas
                </h4>
                <ul className="space-y-3">
                  {["Corporate Law", "Litigation", "Property Law", "Criminal Defense", "Legal Advisory"].map((area) => (
                    <li key={area}>
                      <span className="text-sm text-white/60 hover:text-accent transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-3 space-y-6">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">
                  Get In Touch
                </h4>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-white/60 leading-relaxed">
                      1st Ewasede<br />
                      Benin City, Edo State<br />
                      Nigeria
                    </div>
                  </div>

                  {/* Phone */}
                  <a href="tel:+2348055282602" className="flex items-start gap-3 group">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-white/60 group-hover:text-accent transition-colors">
                      +234 805 528 2602<br />
                      +234 803 482 8680
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:counsel@okosunpartners.com" className="flex items-start gap-3 group">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60 group-hover:text-accent transition-colors">
                      counsel@okosunpartners.com
                    </span>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-white/60 leading-relaxed">
                      Mon - Fri: 9AM - 6PM<br />
                      Sat: By Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs text-white/40">
                © 2026 Okosun, Okosun & Partners. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="text-xs text-white/40 hover:text-accent transition-colors">
                  Privacy Policy
                </button>
                <button className="text-xs text-white/40 hover:text-accent transition-colors">
                  Terms of Service
                </button>
                <button className="text-xs text-white/40 hover:text-accent transition-colors">
                  Cookie Policy
                </button>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-2 px-6 py-2 border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <span className="text-xs uppercase tracking-wider font-bold text-white/60 group-hover:text-accent transition-colors">
                  Back to Top
                </span>
                <ArrowDown className="w-4 h-4 rotate-180 text-white/60 group-hover:text-accent group-hover:-translate-y-1 transition-all" />
              </button>
            </div>
          </div>
        </footer>
      </main>

      <LegalAssistant />
    </div>
  );
};

export default App;
