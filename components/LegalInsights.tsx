import React from 'react';
import { ArrowRight } from 'lucide-react';
import RevealSection from './RevealSection';

const LegalInsights: React.FC = () => {
  const articles = [
      {
          category: "Corporate Law",
          date: "Oct 12, 2023",
          readTime: "5 min read",
          title: "Implications of the New Finance Act on Tech Startups",
          excerpt: "An analysis of tax incentives and regulatory hurdles introduced in the latest legislative session.",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
      },
      {
          category: "Real Estate",
          date: "Sep 28, 2023",
          readTime: "4 min read",
          title: "Land Tenure Systems: Mitigating Risk in Lagos",
          excerpt: "Navigating the complexities of Governor's Consent and C of O verification processes.",
          image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
      },
      {
          category: "Litigation",
          date: "Sep 15, 2023",
          readTime: "6 min read",
          title: "Supreme Court Precedents on Election Tribunals",
          excerpt: "A review of recent judgments affecting the timeline and admissibility of evidence.",
          image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600"
      }
  ];

  return (
    <RevealSection className="py-32 bg-white" data-scene="insights">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <span className="text-accent text-[10px] uppercase tracking-[0.25em] font-bold mb-4 block whitespace-nowrap">
                        Thought
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary italic">Strategic Intelligence</h2>
                </div>
                <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary/60 hover:text-accent transition-colors group">
                    View All Analysis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {articles.map((article, i) => (
                    <article key={i} className="group cursor-pointer">
                        <div className="aspect-video bg-neutral-100 mb-6 overflow-hidden relative">
                             <img 
                                src={article.image} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                alt={article.title}
                             />
                             <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-accent">
                                {article.category}
                            </div>
                        </div>
                        <div className="text-[10px] text-secondary/40 mb-3 font-medium">
                            {article.date} • {article.readTime}
                        </div>
                        <h3 className="font-serif text-xl text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                            {article.title}
                        </h3>
                        <p className="text-xs text-secondary/60 leading-relaxed line-clamp-2">
                            {article.excerpt}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    </RevealSection>
  );
};

export default LegalInsights;
