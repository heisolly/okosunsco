
import { ReactNode } from 'react';

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  bar: string;
  image: string;
  bio: string;
}

export interface CaseVictory {
  title: string;
  status: string;
  description: string;
  highlighted?: boolean;
}

export type Scene = 'intro' | 'values' | 'practice' | 'stats' | 'team' | 'timeline' | 'testimonials' | 'cta';

export type Page = 'home' | 'about' | 'team' | 'practice' | 'contact' | 'faq' | 'privacy' | 'blog' | 'consultation';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  groundingUrls?: { title: string; uri: string }[];
}

export interface Suggestion {
  label: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
