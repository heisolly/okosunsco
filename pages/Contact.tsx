import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare, Shield, Globe } from 'lucide-react';
import { DecryptedText, GradientText, ShinyText, BlurText, TextPressure } from '../components/ReactsbitsAnimations';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap">
          <span className="text-[20rem] font-serif font-black leading-none">CONNECT</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Confidential Counsel
              </span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-9xl text-primary italic leading-[0.9] mb-8">
              <TextPressure text="Get In Touch" />
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/60 font-light max-w-2xl leading-relaxed">
              <BlurText text="Whether you require strategic defense, corporate navigation, or personal advocacy, our partners are ready to architect your victory." delay={0.3} />
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Info & Image */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: MapPin, label: "Studio Location", val: ["1st Ewasede,", "Benin City, Edo State", "Nigeria"] },
                  { icon: Phone, label: "Direct Channels", val: ["+234 805 528 2602", "+234 803 482 8680"] },
                  { icon: Mail, label: "Secure Email", val: ["counsel@okosunpartners.com", "info@okosunpartners.com"] },
                  { icon: Clock, label: "Consultation Hours", val: ["Mon - Fri: 9AM - 6PM", "Sat: By Appointment"] }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                        <item.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">{item.label}</span>
                    </div>
                    <div className="space-y-1">
                      {item.val.map((v, idx) => (
                        <p key={idx} className="text-sm font-medium text-primary/80 leading-relaxed italic">{v}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img 
                  src="/images/IMG_9642-Edit.jpg" 
                  alt="Legal Strategy Session" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border border-accent/50 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Worldwide Representation</span>
                  </div>
                  <h3 className="text-3xl font-serif italic leading-tight">
                    "Strategy is the <br /> Foundation of Victory"
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#F9F9F7] rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-[10rem] pointer-events-none" />
                
                <div className="mb-12 relative z-10">
                  <h2 className="text-4xl md:text-5xl font-serif italic text-primary leading-tight mb-4">
                    Architect Your Roadmap
                  </h2>
                  <p className="text-primary/60 font-light">
                    Complete the brief below. Our senior associates respond to all inquiries within 12 business hours.
                  </p>
                </div>

                <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Full Identity</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-transparent border-b border-primary/10 py-4 text-lg font-serif italic text-primary focus:border-accent transition-all outline-none placeholder:text-primary/10" 
                        placeholder="e.g. Alexander Vance"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Digital Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-transparent border-b border-primary/10 py-4 text-lg font-serif italic text-primary focus:border-accent transition-all outline-none placeholder:text-primary/10" 
                        placeholder="vance@corporate.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Mobile Channel</label>
                      <input 
                        type="tel" 
                        className="w-full bg-transparent border-b border-primary/10 py-4 text-lg font-serif italic text-primary focus:border-accent transition-all outline-none placeholder:text-primary/10" 
                        placeholder="+234..."
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Inquiry Subject</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-primary/10 py-4 text-lg font-serif italic text-primary focus:border-accent transition-all outline-none placeholder:text-primary/10" 
                        placeholder="Litigation Defense"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40">Case Context</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="w-full bg-white/50 border border-primary/5 rounded-2xl p-6 text-lg font-serif italic text-primary focus:border-accent/30 focus:bg-white transition-all outline-none resize-none placeholder:text-primary/10" 
                      placeholder="Briefly outline your legal situation..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button className="group relative w-full md:w-auto px-16 py-8 bg-primary text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(14,14,18,0.3)]">
                      <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-4">
                        <ShinyText text="Transmit Brief" />
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </span>
                    </button>
                    <p className="mt-6 text-[10px] text-primary/30 uppercase tracking-widest italic">
                      * Strictly Confidential • Encrypted Submission
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Interactive Map */}
      <section className="relative w-full h-[600px] overflow-hidden bg-primary/5">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.3!2d5.634533!3d6.333446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjAnMDAuNCJOIDXCsDM4JzA0LjMiRQ!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.05)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Okosun, Okosun & Partners Location"
        ></iframe>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-12 h-12 bg-accent rounded-full animate-ping opacity-20" />
          <div className="absolute w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full mb-8 z-20">
          <div className="bg-white/95 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border border-primary/5 min-w-[300px]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Our Headquarters</p>
                <p className="text-lg font-serif italic text-primary leading-tight">1st Ewasede, Benin City</p>
                <p className="text-sm text-primary/50 mt-1">Edo State, Nigeria</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/5 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-green-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                Office Open
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-accent transition-colors flex items-center gap-2 pointer-events-auto"
              >
                Directions <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Script CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageSquare className="w-12 h-12 text-accent/20 mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-serif italic text-primary mb-6">
            Immediate Response Required?
          </h2>
          <p className="text-primary/60 font-light mb-10">
            For urgent legal matters requiring immediate partner intervention after hours, please use our priority WhatsApp channel or call the emergency litigation line directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-2">Emergency Line</span>
              <span className="text-xl font-bold text-primary">+234 805 528 2602</span>
            </div>
            <div className="w-px h-12 bg-primary/10 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 mb-2">Secure WhatsApp</span>
              <span className="text-xl font-bold text-primary">+234 803 482 8680</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
