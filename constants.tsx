
import React from 'react';
import { Scale, Briefcase, Users, Building2, Lightbulb, ArrowRight, Gavel, ShieldCheck, Landmark, Clock, Calendar, Smartphone, Trophy, UserCheck, Search } from 'lucide-react';
import { PracticeArea, Partner, CaseVictory, FAQItem } from './types';

export const FIRM_NAME = "Okosun, Okosun & Partners";

export const WHY_CHOOSE_US = [
  { title: "Experienced Advocates", desc: "Over 15 years of navigating Nigeria's complex legal landscape.", icon: <Trophy className="w-5 h-5" /> },
  { title: "Personalized Service", desc: "Every case receives the direct attention of our senior partners.", icon: <UserCheck className="w-5 h-5" /> },
  { title: "Proven Results", desc: "A track record of high-stakes victories and multi-million naira recoveries.", icon: <Landmark className="w-5 h-5" /> },
  { title: "Strategic Integrity", desc: "Ethics and efficiency are the dual pillars of our advocacy.", icon: <ShieldCheck className="w-5 h-5" /> }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil',
    title: 'Civil Law',
    description: 'Resolving high-stakes disputes with precision and leverage.',
    detailedDescription: 'Our civil litigation team handles matters ranging from breach of contract to tort claims. We prioritize alternative dispute resolution (ADR) when possible but maintain a formidable presence in the courtroom.',
    icon: 'users'
  },
  {
    id: 'criminal',
    title: 'Criminal Law',
    description: 'Aggressive protection of your rights in state and federal courts.',
    detailedDescription: 'From high-stakes white-collar crimes to state-level defense, our criminal law department utilizes a strategy-first approach to protect individual liberties. We represent clients at every stage of the legal process.',
    icon: 'scale'
  },
  {
    id: 'property',
    title: 'Property Law',
    description: 'Commercial transactions, zoning, and property development law.',
    detailedDescription: 'Managing the intricacies of Land Use Act compliance, perfection of titles, and large-scale property disputes. Our firm ensures your real estate investments are legally sound.',
    icon: 'building'
  },
  {
    id: 'company',
    title: 'Company & IP Law',
    description: 'Navigating complex mergers, acquisitions, and compliance disputes.',
    detailedDescription: 'OkoSlaw provides comprehensive corporate services, including CAC registrations, shareholder agreement drafting, and representation in complex commercial litigation and intellectual property protection.',
    icon: 'briefcase'
  }
];

export const OFFICE_HOURS = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM', icon: <Clock className="w-4 h-4" /> },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM', icon: <Calendar className="w-4 h-4" /> },
  { day: 'Sunday', hours: 'Closed (By Appointment)', icon: <Smartphone className="w-4 h-4" /> }
];

export const PARTNERS: Partner[] = [
  {
    id: 'emmanuel',
    name: 'Emmanuel Ehiabhi Okosun',
    role: 'Principal Partner',
    bar: 'Called to Bar 2007',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    bio: 'With nearly two decades of litigation experience, Emmanuel has established himself as a formidable force in the Nigerian legal system. Specializing in high-stakes criminal defense and constitutional law.'
  },
  {
    id: 'aituaje',
    name: 'Aituaje Okosun',
    role: 'Managing Partner',
    bar: 'Called to Bar 2008',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    bio: 'Aituaje leads our corporate and property law divisions with meticulous precision. Her background in complex commercial transactions and estate management has made her primary counsel for Lagos’s prominent entities.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I schedule a consultation?",
    answer: "You can use our 'Book Consultation' form on the Contact page, call our direct line, or message our legal assistant for immediate scheduling assistance."
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "Please bring all relevant documents, including contracts, correspondence, or court summons. Having a clear timeline of events also helps our partners provide the best preliminary strategy."
  },
  {
    question: "Does the firm handle international clients?",
    answer: "Yes, we represent many international clients and Nigerian diaspora entities with property or corporate interests within Nigeria."
  }
];

export const VICTORIES: CaseVictory[] = [
  {
    title: 'Corporate Dispute',
    status: 'SETTLED',
    description: 'Successfully negotiated a multi-million Naira settlement in a complex shareholder derivative suit.',
    highlighted: true
  },
  {
    title: 'Federal Defense',
    status: 'DISMISSED',
    description: 'All charges dismissed pre-trial for a client facing significant federal regulatory allegations.'
  },
  {
    title: 'Estate Litigation',
    status: 'FAVORABLE VERDICT',
    description: 'Secured full beneficiary rights in a contested will proceeding involving international assets.'
  }
];

export const getIcon = (name: string) => {
  const props = { className: "w-6 h-6 mb-6 stroke-[1.5] text-accent transition-transform group-hover:scale-110 duration-500" };
  switch (name) {
    case 'scale': return <Scale {...props} />;
    case 'briefcase': return <Briefcase {...props} />;
    case 'users': return <Users {...props} />;
    case 'building': return <Building2 {...props} />;
    case 'lightbulb': return <Lightbulb {...props} />;
    default: return <ArrowRight {...props} />;
  }
};
