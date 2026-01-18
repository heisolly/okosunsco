import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare, Shield, Globe } from 'lucide-react';
import { DecryptedText, GradientText, ShinyText, BlurText, TextPressure } from '../components/ReactsbitsAnimations';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-primary selection:bg-accent selection:text-white">
      {/* Luxurious Hybrid Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-white">
        {/* Abstract Gold & Light Gradients */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_70%)]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-[radial-gradient(circle_at_bottom_left,rgba(14,14,18,0.05),transparent_60%)]" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-40 right-[10%] w-64 h-64 border border-accent/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
        <div className="absolute top-60 right-[12%] w-32 h-32 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary text-white rounded-full mb-10 shadow-2xl shadow-primary/20">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Elite Legal Advocacy
              </span>
            </div>
            
            <h1 className="font-serif text-7xl md:text-[10rem] text-primary italic leading-[0.8] mb-12">
              <span className="block">Legal</span>
              <span className="block translate-x-[5%] md:translate-x-[15%] text-accent">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/60 font-light max-w-2xl leading-relaxed border-l-2 border-accent/30 pl-8">
              <BlurText text="Architecture of victory begins with a single conversation. Connect with our senior partners to discuss your strategic objectives." delay={0.3} />
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Sophisticated Form */}
      <section className="pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Direct Access & Visuals */}
            <div className="lg:col-span-4 space-y-16">
              <div className="space-y-10">
                {[
                  { icon: MapPin, label: "Private Office", val: ["1st Ewasede,", "Benin City, Edo State", "Nigeria"] },
                  { icon: Phone, label: "Direct Access", val: ["+234 805 528 2602", "+234 803 482 8680"] },
                  { icon: Mail, label: "Digital Briefs", val: ["counsel@okosunpartners.com", "info@okosunpartners.com"] },
                  { icon: Clock, label: "Operational Hours", val: ["Mon - Fri: 9AM - 6PM", "Sat: By Appointment"] }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-primary/5 border border-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-2">{item.label}</p>
                      {item.val.map((v, idx) => (
                        <p key={idx} className="text-base font-medium text-primary/80 leading-snug italic">{v}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group border-4 border-white">
                <img 
                  src="/images/IMG_9642-Edit.jpg" 
                  alt="Senior Counsel" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center">
                      <Globe className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Strategic Alliance</span>
                  </div>
                  <h3 className="text-3xl font-serif italic leading-tight">
                    "Victory is the byproduct <br /> of superior preparation."
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: The Premium Gold/Dark Form */}
            <div className="lg:col-span-8">
              <div className="bg-primary rounded-[4rem] p-8 md:p-20 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(14,14,18,0.4)]">
                {/* Gold Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-[70%] h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_60%)]" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
                
                <div className="relative z-10 mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-accent opacity-50" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Inquiry Protocol</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight mb-6">
                    Begin Your <span className="text-accent underline decoration-accent/30 underline-offset-8">Engagement</span>
                  </h2>
                  <p className="text-white/40 font-light text-lg max-w-xl">
                    Our senior associates review all submissions personally. Please provide comprehensive context for your inquiry.
                  </p>
                </div>

                <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="bg-white/5 border-b border-white/10 p-4 transition-all focus-within:border-accent">
                      <label className="block text-[9px] font-black uppercase tracking-widest text-accent mb-2">Legal Identity</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-transparent text-xl font-serif italic text-white outline-none placeholder:text-white/5" 
                        placeholder="Johnathan D. Vance"
                      />
                    </div>
                    <div className="bg-white/5 border-b border-white/10 p-4 transition-all focus-within:border-accent">
                      <label className="block text-[9px] font-black uppercase tracking-widest text-accent mb-2">Electronic Mail</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-transparent text-xl font-serif italic text-white outline-none placeholder:text-white/5" 
                        placeholder="vance@corporate.law"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="bg-white/5 border-b border-white/10 p-4 transition-all focus-within:border-accent">
                      <label className="block text-[9px] font-black uppercase tracking-widest text-accent mb-2">Secure Mobile</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent text-xl font-serif italic text-white outline-none placeholder:text-white/5" 
                        placeholder="+234..."
                      />
                    </div>
                    <div className="bg-white/5 border-b border-white/10 p-4 transition-all focus-within:border-accent">
                      <label className="block text-[9px] font-black uppercase tracking-widest text-accent mb-2">Counsel Required</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent text-xl font-serif italic text-white outline-none placeholder:text-white/5" 
                        placeholder="Arbitration / Litigation"
                      />
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 transition-all focus-within:border-accent/40">
                    <label className="block text-[9px] font-black uppercase tracking-widest text-accent mb-4">Brief Context</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-transparent text-xl font-serif italic text-white outline-none resize-none placeholder:text-white/5" 
                      placeholder="Outline the parameters of your legal matter..."
                    ></textarea>
                  </div>

                  <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-10">
                    <button className="group relative w-full md:w-auto px-20 py-10 bg-accent text-primary rounded-full overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)]">
                      <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20" />
                      <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.6em] flex items-center justify-center gap-4">
                        <ShinyText text="TRANSMIT BRIEF" />
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    </button>
                    <div className="flex flex-col items-end opacity-30 text-[9px] font-black uppercase tracking-[0.3em] text-white">
                      <span>v.25-Alpha Secure System</span>
                      <span>Strict Attorney-Client Privilege</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Hybrid Map Integration */}
      <section className="relative w-full h-[600px] bg-white pt-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto h-full px-6 relative">
          <div className="w-full h-full rounded-[4rem] overflow-hidden shadow-2xl relative border border-primary/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.3!2d5.634533!3d6.333446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjAnMDAuNCJOIDXCsDM4JzA0LjMiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Global Office"
            ></iframe>
            
            {/* Map Overlay Card */}
            <div className="absolute top-12 left-12 max-w-sm bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white z-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">HQ Command</p>
                  <p className="text-xl font-serif italic text-primary">Benin City Hub</p>
                </div>
              </div>
              <p className="text-primary/60 text-sm leading-relaxed mb-8 italic">
                1st Ewasede, Edo State, Nigeria. <br /> Our doors are open for scheduled consultations and strategic briefings.
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary hover:text-accent transition-colors underline decoration-accent decoration-2 underline-offset-8"
              >
                Access Directions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Support Section */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 border border-primary/5 shadow-xl">
            <div className="max-w-xl text-center lg:text-left">
              <MessageSquare className="w-12 h-12 text-accent mb-8 mx-auto lg:mx-0" />
              <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight mb-6">
                Critical Response Need?
              </h2>
              <p className="text-primary/50 font-light text-lg">
                For urgent matters requiring immediate partner intervention outside regular business hours, our priority response channels remain active 24/7.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
              {[
                { label: "Emergency Line", val: "+234 805 528 2602" },
                { label: "Priority Messenger", val: "+234 803 482 8680" }
              ].map((chan, i) => (
                <div key={i} className="bg-primary p-8 rounded-[2.5rem] flex-1 min-w-[300px] group cursor-pointer hover:bg-accent hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20 hover:shadow-accent/40">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:text-primary mb-3 block">{chan.label}</span>
                  <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors block">{chan.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
