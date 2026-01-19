
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
  // Simple pass-through without animations to improve performance and remove scroll reveal
  return (
    <section 
      {...rest}
      className={`${className}`} // Removed opacity/transform transition classes
    >
      {children}
    </section>
  );
};

export default RevealSection;
