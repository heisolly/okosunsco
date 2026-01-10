import React from 'react';
import { Clock, Calendar, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
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
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full z-[-1]"></div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-serif italic text-primary mb-6">Our Story</h3>
              <div className="space-y-6 text-primary/70 leading-relaxed font-light">
                <p>
                  Okosun, Okosun & Partners began as a specialized litigation boutique.
                  Today, we are a full-service firm known for handling the most complex
                  civil and criminal matters across Nigeria. We integrate deep expertise
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
};

export default About;
