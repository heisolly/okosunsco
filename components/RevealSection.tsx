
import React, { useEffect, useRef, useState } from 'react';

interface RevealSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onVisible?: () => void;
  threshold?: number;
}

const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  className = '', 
  onVisible,
  threshold = 0.15,
  ...rest 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (onVisible) onVisible();
          // Stop observing this element specifically after it becomes visible
          obs.unobserve(entry.target);
        }
      },
      { 
        threshold,
        // Using rootMargin to trigger slightly before the element hits the threshold for smoother visuals
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [onVisible, threshold, isVisible]);

  return (
    <section 
      ref={sectionRef} 
      {...rest}
      className={`transition-all duration-1000 transform will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default RevealSection;
