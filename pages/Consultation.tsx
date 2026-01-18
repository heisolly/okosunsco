import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

const Consultation: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="pt-48 pb-32 px-6 md:px-24 max-w-[100vw] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/IMG_9627-Edit.jpg')] opacity-10 bg-cover bg-center" />
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
          <div className="lg:col-span-4 space-y-8">
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
};

export default Consultation;
