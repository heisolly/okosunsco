import React, { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`split-text-container ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="split-text-char"
          style={{
            animationDelay: `${delay + index * 0.03}s`,
            opacity: isVisible ? 1 : 0
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`gradient-text-animated ${className}`}>
      {text}
    </span>
  );
};

interface ShinyTextProps {
  text: string;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`shiny-text ${className}`}>
      {text}
    </span>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`blur-text-container ${className}`}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`blur-text-word ${isVisible ? 'blur-text-visible' : ''}`}
          style={{
            animationDelay: `${delay + index * 0.1}s`
          }}
        >
          {word}
          {index < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ))}
    </div>
  );
};

interface FuzzyTextProps {
  text: string;
  className?: string;
}

export const FuzzyText: React.FC<FuzzyTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`fuzzy-text ${className}`}>
      {text}
    </span>
  );
};
