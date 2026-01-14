import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Utility function for class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// SIMPLIFIED ANIMATIONS - Performance First

// 1. Split Text - Just static text (no animation)
export const SplitText: React.FC<{ text: string; className?: string; delay?: number }> = ({ 
  text, 
  className = '', 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 2. Blur Text - Simple fade in
export const BlurText: React.FC<{ text: string; className?: string; delay?: number }> = ({ 
  text, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.span
      className={cn('inline-block', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  );
};

// 3. Text Type - Just static text
export const TextType: React.FC<{ text: string; className?: string; speed?: number }> = ({ 
  text, 
  className = '',
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 4. Shuffle Text - Just static text
export const ShuffleText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 5. Shiny Text - Just static text
export const ShinyText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 6. Gradient Text - Just static text
export const GradientText: React.FC<{ text: string; className?: string; colors?: string[] }> = ({ 
  text, 
  className = '',
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 7. Falling Text - Just static text
export const FallingText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 8. Decrypted Text - Just static text
export const DecryptedText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 9. Scroll Reveal - Simple fade in on scroll
export const ScrollReveal: React.FC<{ 
  text: string; 
  className?: string;
  children?: React.ReactNode;
}> = ({ text, className = '', children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={cn('inline-block', className)}
    >
      {children || text}
    </motion.div>
  );
};

// 10. Scrambled Text - Just static text
export const ScrambledText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 11. Rotating Text - Just static text (shows first word)
export const RotatingText: React.FC<{ words: string[]; className?: string }> = ({ 
  words, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{words[0]}</span>;
};

// 12. Glitch Text - Just static text
export const GlitchText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 13. Fuzzy Text - Just static text
export const FuzzyText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 14. Scroll Float - Just static
export const ScrollFloat: React.FC<{ 
  text: string; 
  className?: string;
  children?: React.ReactNode;
}> = ({ text, className = '', children }) => {
  return (
    <div className={cn('inline-block', className)}>
      {children || text}
    </div>
  );
};

// 15. Scroll Velocity - Just static
export const ScrollVelocity: React.FC<{ 
  text: string; 
  className?: string;
  baseVelocity?: number;
}> = ({ text, className = '' }) => {
  return <div className={cn('inline-block', className)}>{text}</div>;
};

// 16. Variable Proximity - Just static text
export const VariableProximity: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 17. Text Cursor - Just static text
export const TextCursor: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 18. True Focus - Just static text
export const TrueFocus: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 19. Text Pressure - Just static text
export const TextPressure: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};

// 20. ASCII Text - Just static text
export const ASCIIText: React.FC<{ text: string; className?: string }> = ({ 
  text, 
  className = '' 
}) => {
  return <span className={cn('inline-block', className)}>{text}</span>;
};
