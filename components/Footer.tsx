import React from 'react';
import { Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock, ArrowDown } from 'lucide-react';
import { Page } from '../types';
import { ASCIIText, TrueFocus, ShinyText } from './ReactsbitsAnimations';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />
      
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 pb-16 border-b border-white/10">
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

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">
              <ASCIIText text="Quick Links" />
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
                    onClick={() => onNavigate(link.id as Page)}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">
              <ASCIIText text="Practice Areas" />
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

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">
              <ASCIIText text="Get In Touch" />
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 leading-relaxed">
                  1st Ewasede<br />
                  Benin City, Edo State<br />
                  Nigeria
                </div>
              </div>

              <a href="tel:+2348055282602" className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 group-hover:text-accent transition-colors">
                  +234 805 528 2602<br />
                  +234 803 482 8680
                </div>
              </a>

              <a href="mailto:counsel@okosunpartners.com" className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 group-hover:text-accent transition-colors">
                  counsel@okosunpartners.com
                </span>
              </a>

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

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 px-6 py-2 border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300"
          >
            <span className="text-xs uppercase tracking-wider font-bold text-white/60 group-hover:text-accent transition-colors">
              <ShinyText text="Back to Top" />
            </span>
            <ArrowDown className="w-4 h-4 rotate-180 text-white/60 group-hover:text-accent group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
