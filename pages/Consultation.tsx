import React, { useState } from 'react';
import { Quote, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ConsultationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    category: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCategoryChange = (category: string) => {
    setFormData({
      ...formData,
      category
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('consultation_requests')
        .insert([
          { 
            name: formData.name, 
            organization: formData.org, 
            email: formData.email, 
            phone: formData.phone, 
            category: formData.category, 
            description: formData.description 
          }
        ]);

      if (supabaseError) throw supabaseError;

      setIsSuccess(true);
      setFormData({ name: '', org: '', email: '', phone: '', category: '', description: '' });
    } catch (err) {
       setError('Request failed. Please try again or contact us directly.');
       console.error('Supabase Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
       <div className="bg-white p-8 md:p-12 lg:p-16 shadow-2xl min-h-[500px] flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-in zoom-in duration-500">
             <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-serif text-3xl text-primary italic mb-4">Request Logged</h3>
          <p className="text-primary/60 max-w-sm mb-8">
             Your consultation request has been successfully prioritized. A partner availability schedule will be sent to your email shortly.
          </p>
          <button 
             onClick={() => setIsSuccess(false)}
             className="text-xs font-black uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors"
          >
             Return to Form
          </button>
       </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Full Name</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" 
            placeholder="e.g. John Doe" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Organization</label>
          <input 
            type="text" 
            name="org"
            value={formData.org}
            onChange={handleChange}
            className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" 
            placeholder="e.g. Global Corp" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Email Address</label>
          <input 
            type="email" 
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" 
            placeholder="okosunokosunandpartners@gmail.com" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20" 
            placeholder="+234..." 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Case Category</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {["Corporate", "Litigation", "Property", "Advisory"].map(type => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 border border-primary/20 rounded-full flex items-center justify-center group-hover:border-accent ${formData.category === type ? 'border-accent' : ''}`}>
                <div className={`w-2 h-2 bg-accent rounded-full transition-opacity ${formData.category === type ? 'opacity-100' : 'opacity-0'}`} />
              </div>
              <input 
                type="radio" 
                name="category" 
                value={type}
                checked={formData.category === type}
                onChange={() => handleCategoryChange(type)}
                className="hidden"
              />
              <span className={`text-sm transition-colors ${formData.category === type ? 'text-primary font-bold' : 'text-primary/60 group-hover:text-primary'}`}>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-black text-primary/40">Brief Case Description</label>
        <textarea 
          name="description"
          required
          rows={5}
          value={formData.description}
          onChange={handleChange}
          className="w-full bg-primary/[0.03] border-b border-primary/10 px-0 py-4 focus:outline-none focus:border-accent transition-colors font-serif text-lg text-primary placeholder:text-primary/20 min-h-[120px]" 
          placeholder="Could you provide a brief overview of your legal inquiry?"
        ></textarea>
      </div>
      
      {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}

      <div className="pt-8 flex items-center justify-between">
        <p className="text-xs text-primary/40 max-w-xs">
          * By submitting this form, you agree to our privacy policy. Your information is encrypted and secure.
        </p>
        <button 
           type="submit" 
           disabled={isSubmitting}
           className="px-12 py-5 bg-primary text-white hover:bg-accent transition-all duration-500 shadow-xl hover:shadow-2xl group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] flex items-center gap-4">
            {isSubmitting ? (
              <>
                 Processing <Loader2 className="w-4 h-4 animate-spin" />
              </>
            ) : (
              <>
                 Request Slot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
};

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
               
                <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
