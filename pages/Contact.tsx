import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-primary/10 p-12 md:p-16 hover:border-accent/30 transition-all duration-500">
            <h3 className="font-serif text-4xl text-primary italic mb-8 text-center">
              Send Us a Message
            </h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                    Full Name *
                  </label>
                  <input type="text" required className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                    Email Address *
                  </label>
                  <input type="email" required className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                    Phone Number
                  </label>
                  <input type="tel" className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none" placeholder="+234 XXX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                    Subject
                  </label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-primary/20 px-0 py-4 text-primary focus:border-accent transition-all outline-none" placeholder="Legal Consultation" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-primary/50 mb-3">
                  Message *
                </label>
                <textarea required rows={6} className="w-full bg-primary/5 border-2 border-primary/10 p-6 text-primary focus:border-accent focus:bg-white transition-all outline-none resize-none" placeholder="Please describe your legal matter..."></textarea>
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

      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent z-10"></div>
        <div className="relative w-full h-[700px] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none z-10"></div>
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
          <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-8 py-4 shadow-xl border-l-4 border-accent z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-1">OUR LOCATION</p>
                <p className="text-sm font-bold text-primary">1st Ewasede, Benin City</p>
                <p className="text-xs text-primary/60">Edo State, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent/30 pointer-events-none z-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent/30 pointer-events-none z-20"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      </div>
    </div>
  );
};

export default Contact;
