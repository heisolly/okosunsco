import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock, ArrowUp, ChevronDown } from 'lucide-react';
import { Page } from '../types';
import { ASCIIText, ShinyText } from './ReactsbitsAnimations';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="w-full bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #D4AF37 1px, transparent 1px),
            linear-gradient(to bottom, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />
      
      <div className="max-w-[1800px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="hidden lg:grid grid-cols-12 gap-20 pb-16 border-b border-white/10">
          <div className="col-span-4 space-y-8">
            <div>
              <img 
                src="/logo.png" 
                alt="Okosun, Okosun & Partners" 
                className="h-24 w-auto object-contain mb-6 brightness-0 invert opacity-95"
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
                  className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group rounded-lg"
                >
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-6">
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

          <div className="col-span-3 space-y-6">
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

          <div className="col-span-3 space-y-6">
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

              <a href="tel:+2348101050240" className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-white/60 group-hover:text-accent transition-colors">
                  +234 810 105 0240<br />
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

        <div className="lg:hidden space-y-8 pb-12 border-b border-white/10">
          <div className="space-y-6">
            <img 
              src="/logo.png" 
              alt="Okosun, Okosun & Partners" 
              className="h-16 w-auto object-contain brightness-0 invert opacity-95"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              Delivering strategic legal excellence since 2010.
            </p>
          </div>

          <div className="space-y-2">
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('links')}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Quick Links</span>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${expandedSection === 'links' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'links' ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="p-4 space-y-3">
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
                        className="text-sm text-white/60 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('practice')}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Practice Areas</span>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${expandedSection === 'practice' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'practice' ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="p-4 space-y-3">
                  {["Corporate Law", "Litigation", "Property Law", "Criminal Defense", "Legal Advisory"].map((area) => (
                    <li key={area}>
                      <span className="text-sm text-white/60">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('contact')}
                className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-bold text-accent uppercase tracking-wider">Get In Touch</span>
                <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${expandedSection === 'contact' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'contact' ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-white/60 leading-relaxed">
                      1st Ewasede, Benin City, Edo State, Nigeria
                    </div>
                  </div>

                  <a href="tel:+2348101050240" className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-white/60">
                      +234 810 105 0240<br />
                      +234 803 482 8680
                    </div>
                  </a>

                  <a href="mailto:counsel@okosunpartners.com" className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60 break-all">
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
          </div>

          <div className="flex gap-3 justify-center">
            {[
              { Icon: Twitter, label: 'Twitter', url: '#' },
              { Icon: Linkedin, label: 'LinkedIn', url: '#' },
              { Icon: Instagram, label: 'Instagram', url: '#' }
            ].map(({ Icon, label, url }, i) => (
              <a
                key={i}
                href={url}
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group rounded-lg"
              >
                <Icon className="w-4 h-4 text-white/50 group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 text-center md:text-left">
            © 2026 Okosun, Okosun & Partners. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
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
            className="group flex items-center gap-2 px-6 py-2 border border-white/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 rounded-lg"
          >
            <span className="text-xs uppercase tracking-wider font-bold text-white/60 group-hover:text-accent transition-colors">
              <ShinyText text="Back to Top" />
            </span>
            <ArrowUp className="w-4 h-4 text-white/60 group-hover:text-accent group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
