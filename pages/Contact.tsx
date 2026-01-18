import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare, Shield, Globe } from 'lucide-react';
import { DecryptedText, GradientText, ShinyText, BlurText, TextPressure } from '../components/ReactsbitsAnimations';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#0A0A0C] min-h-screen text-white selection:bg-accent selection:text-primary">
      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-30" />
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[100px]" />
        </div>

        {/* Background Decorative Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap">
          <span className="text-[25rem] font-serif font-black leading-none tracking-tighter">CONTACT</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent/80">
                Encrypted Channel
              </span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-9xl text-white italic leading-[0.85] mb-8">
              <TextPressure text="Strategic Access" />
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl leading-relaxed">
              <BlurText text="Our partners maintain a limited portfolio to ensure absolute focus. Connect with us to initiate your legal architecture." delay={0.3} />
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Side: Intelligence & Visuals */}
            <div className="lg:col-span-5 space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: MapPin, label: "Precinct", val: ["1st Ewasede,", "Benin City, Edo State", "Nigeria"] },
                  { icon: Phone, label: "Direct Comms", val: ["+234 805 528 2602", "+234 803 482 8680"] },
                  { icon: Mail, label: "Secure Inbox", val: ["counsel@okosunpartners.com", "info@okosunpartners.com"] },
                  { icon: Clock, label: "Operational Window", val: ["Mon - Fri: 9AM - 6PM", "Sat: By Appointment"] }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{item.label}</span>
                    </div>
                    <div className="space-y-1 pl-1">
                      {item.val.map((v, idx) => (
                        <p key={idx} className="text-sm font-medium text-white/70 leading-relaxed italic group-hover:text-white transition-colors">{v}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group border border-white/5">
                <img 
                  src="/images/IMG_9642-Edit.jpg" 
                  alt="Legal Strategy" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Globe className="w-5 h-5 text-accent animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Global Reach</span>
                  </div>
                  <h3 className="text-4xl font-serif italic leading-tight text-white mb-4">
                    "Precision is not an act, <br /> but a habit."
                  </h3>
                  <div className="w-20 h-1 bg-accent/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* Right Side: The Consultation Forge */}
            <div className="lg:col-span-7">
              <div className="relative p-[1px] rounded-[3.5rem] bg-gradient-to-br from-white/10 via-transparent to-accent/20 group">
                <div className="bg-[#0E0E12] rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden">
                  {/* Decorative Gradient Background for Form */}
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)]" />
                  
                  <div className="mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight mb-6">
                      Briefing Protocol
                    </h2>
                    <p className="text-white/40 font-light leading-relaxed">
                      Initialize your consultation request below. All data is transmitted via secure, encrypted channels.
                    </p>
                  </div>

                  <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Assignee Name</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-white/5 border-b border-white/10 px-4 py-5 text-lg font-serif italic text-white focus:border-accent focus:bg-white/10 transition-all outline-none placeholder:text-white/5" 
                          placeholder="Lord/Lady Vance"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Secure Email</label>
                        <input 
                          type="email" 
                          required 
                          className="w-full bg-white/5 border-b border-white/10 px-4 py-5 text-lg font-serif italic text-white focus:border-accent focus:bg-white/10 transition-all outline-none placeholder:text-white/5" 
                          placeholder="confidential@node.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Direct Line</label>
                        <input 
                          type="tel" 
                          className="w-full bg-white/5 border-b border-white/10 px-4 py-5 text-lg font-serif italic text-white focus:border-accent focus:bg-white/10 transition-all outline-none placeholder:text-white/5" 
                          placeholder="+234..."
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Nature of Inquiry</label>
                        <input 
                          type="text" 
                          className="w-full bg-white/5 border-b border-white/10 px-4 py-5 text-lg font-serif italic text-white focus:border-accent focus:bg-white/10 transition-all outline-none placeholder:text-white/5" 
                          placeholder="Asset Extraction"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/20 ml-1">Matter Intelligence</label>
                      <textarea 
                        required 
                        rows={5} 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-lg font-serif italic text-white focus:border-accent/30 focus:bg-white/10 transition-all outline-none resize-none placeholder:text-white/5" 
                        placeholder="Provide deep context for our senior analysts..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button className="group relative w-full px-12 py-8 bg-accent text-primary rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.6em] flex items-center justify-center gap-4 text-primary">
                          <ShinyText text="TRANSMIT DATA" />
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
                        </span>
                      </button>
                      <div className="mt-8 flex items-center justify-between text-[10px] text-white/20 uppercase tracking-[0.3em] italic">
                        <span>Strict Professional Secrecy</span>
                        <span>v24.0.1 Secure</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Styled Interactive Map */}
      <section className="relative w-full h-[700px] overflow-hidden bg-primary/20">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.3!2d5.634533!3d6.333446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjAnMDAuNCJOIDXCsDM4JzA0LjMiRQ!5e0!3m2!1sen!2sng!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(1) grayscale(1) contrast(1.5) opacity(0.5)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Global Headquarters"
        ></iframe>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-24 h-24 bg-accent/20 rounded-full animate-ping" />
          <div className="absolute w-6 h-6 bg-accent rounded-full shadow-[0_0_30px_rgba(212,175,55,1)] flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full mb-12 z-20">
          <div className="bg-[#0E0E12]/95 backdrop-blur-xl px-10 py-8 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/5 min-w-[340px]">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-2">Central Node</p>
                <p className="text-xl font-serif italic text-white leading-tight">1st Ewasede, Benin City</p>
                <p className="text-sm text-white/40 mt-1">Edo State, Nigeria</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,1)]" />
                Live: Command Center
              </span>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2 pointer-events-auto"
              >
                ACCESS COORDS <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Intervention CTA */}
      <section className="py-32 bg-[#0A0A0C] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageSquare className="w-16 h-16 text-accent/10 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8">
            Emergency Dispatch?
          </h2>
          <p className="text-white/40 font-light mb-16 leading-relaxed max-w-2xl mx-auto">
            If your situation requires immediate, high-priority partner intervention after hours, activate the emergency channels below.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-3 group-hover:text-accent transition-colors">Emergency Protocol</span>
              <span className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">+234 805 528 2602</span>
            </div>
            <div className="w-px h-16 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center group cursor-pointer">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-3 group-hover:text-accent transition-colors">Priority Messenger</span>
              <span className="text-2xl md:text-3xl font-bold text-white group-hover:scale-110 transition-transform">+234 803 482 8680</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
