import React from 'react';
import { ArrowRight, Shield, Award, Users, Search, Target, Scale, Gavel, Briefcase } from 'lucide-react';
import { PARTNERS } from '../constants';
import { DecryptedText, GradientText, ShinyText, BlurText, TextPressure } from '../components/ReactsbitsAnimations';

const Team: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-primary selection:bg-accent selection:text-white">
      {/* Cinematic Team Hero */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 overflow-hidden bg-white">
        {/* Abstract Floating Gradients */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[80%] md:w-[60%] h-[100%] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_70%)]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[70%] md:w-[50%] h-[70%] bg-[radial-gradient(circle_at_bottom_left,rgba(14,14,18,0.05),transparent_60%)]" />
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-primary text-white rounded-full mb-8 md:mb-10 shadow-2xl shadow-primary/20">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
                Elite Counsel
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[10rem] text-primary italic leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
              <TextPressure text="Architects" />
              <span className="block translate-x-[5%] md:translate-x-[15%] text-accent underline decoration-accent/20 underline-offset-4 md:underline-offset-8">of Justice.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-primary/60 font-light max-w-2xl leading-relaxed border-l-4 border-accent pl-6 md:pl-10">
              <BlurText text="Our partners bring a combined half-century of strategic intelligence to the most complex legal inquiries in Nigeria." delay={0.3} />
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section: The Principal Leads */}
      <section className="pb-20 md:pb-32 px-6 md:px-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {PARTNERS.map((p, idx) => (
              <div key={p.id} className="group relative">
                <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] relative mb-8 md:mb-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] bg-primary border-4 border-white overflow-hidden">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100"
                    alt={p.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating ID Tag */}
                  <div className="absolute top-8 right-8 md:top-12 md:right-12 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] z-20">
                    Lead Partner No. 0{idx + 1}
                  </div>

                  <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 right-8 md:right-16 text-white translate-y-4 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 z-20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Scale className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-accent">Strategic Directive</span>
                    </div>
                    <p className="font-serif text-xl md:text-3xl italic leading-tight">
                      "{p.bio.slice(0, 100)}..."
                    </p>
                  </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="font-serif text-3xl md:text-5xl italic text-primary group-hover:text-accent transition-colors underline decoration-accent/0 group-hover:decoration-accent/30 underline-offset-4 md:underline-offset-8">
                      {p.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-black">
                      <span>{p.role}</span>
                      <span className="w-1 h-1 bg-accent rounded-full opacity-30" />
                      <span className="text-primary/40 italic">{p.bar}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-primary hover:text-accent transition-all group-hover:translate-x-4">
                    <ShinyText text="ACCESS PRIVATE DOSSIER" /> <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gallery of Excellence: Legal Team */}
      <section className="bg-primary pt-24 md:pt-48 pb-32 md:pb-48 relative overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start mb-24 md:mb-32">
            <div className="lg:col-span-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-accent opacity-50" />
                <span className="text-accent text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] block">
                  THE ACTIVE FORCE
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-7xl lg:text-9xl text-white italic leading-[1.1]">
                Operational <br /> <span className="text-accent underline decoration-accent/20 underline-offset-8">Dossiers.</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              { img: '/images/IMG_9616-Edit.jpg', role: 'Arbitration Lead', code: 'NODE-01' },
              { img: '/images/IMG_9660-Edit.jpg', role: 'Corporate Counsel', code: 'NODE-02' },
              { img: '/images/IMG_9608-Edit.jpg', role: 'Litigation Specialist', code: 'NODE-03' },
              { img: '/images/IMG_9615-Edit-Edit.jpg', role: 'Regulatory Advisor', code: 'NODE-04' },
              { img: '/images/IMG_9619-Edit.jpg', role: 'Maritime Strategist', code: 'NODE-05' },
              { img: '/images/IMG_9627-Edit.jpg', role: 'Family Law Associate', code: 'NODE-06' },
              { img: '/images/IMG_9634-Edit.jpg', role: 'Energy Consultant', code: 'NODE-07' },
              { img: '/images/IMG_9640-Edit.jpg', role: 'Property Law Lead', code: 'NODE-08' },
              { img: '/images/IMG_9642-Edit.jpg', role: 'Senior Litigation', code: 'NODE-09' },
              { img: '/images/IMG_9664-Edit-Edit.jpg', role: 'Commercial Lead', code: 'NODE-10' },
              { img: '/images/IMG_9672-Edit.jpg', role: 'Intellectual Property', code: 'NODE-11' },
              { img: '/images/IMG_9612-Edit.jpg', role: 'Financial Crimes', code: 'NODE-12' }
            ].map((node, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-700"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={node.img}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-110"
                    alt={node.role}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Strategic Node Overlays */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="px-3 py-1 bg-accent/20 backdrop-blur-md rounded-full border border-accent/30">
                      <span className="text-[8px] md:text-[9px] font-black tracking-widest text-accent">{node.code}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 z-20 transition-all duration-500 group-hover:translate-y-2 group-hover:opacity-0">
                    <p className="text-[10px] md:text-[12px] font-serif italic text-white/50 mb-1">{node.role}</p>
                    <div className="h-[1px] w-8 bg-accent opacity-50" />
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-primary/40 backdrop-blur-sm">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center mb-6 scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif italic text-white text-center mb-2">{node.role}</h4>
                  <p className="text-[8px] md:text-[9px] font-black tracking-[0.3em] text-accent uppercase underline decoration-accent/30 underline-offset-4">Strategic Active</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-20 md:py-32 bg-[#FAF9F6] border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center items-center">
            <div className="space-y-4">
              <Target className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto" />
              <h3 className="text-xl md:text-2xl font-serif italic text-primary">Unwavering Focus</h3>
              <p className="text-primary/50 text-sm md:text-base italic">Driven by outcome, anchored in strategy.</p>
            </div>
            <div className="bg-primary p-12 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <Gavel className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto mb-8 relative z-10" />
              <p className="text-2xl md:text-3xl font-serif italic text-white leading-tight relative z-10">
                "We don't just defend; we architect."
              </p>
            </div>
            <div className="space-y-4">
              <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto" />
              <h3 className="text-xl md:text-2xl font-serif italic text-primary">Absolute Discretion</h3>
              <p className="text-primary/50 text-sm md:text-base italic">Confidentiality is our primary protocol.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

