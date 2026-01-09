
import React, { useState, useEffect } from 'react';
import { Scene, Page } from '../types';

interface StatueProps {
  currentScene: Scene;
  currentPage: Page;
  scrollY: number;
}

const Statue: React.FC<StatueProps> = ({ currentScene, currentPage, scrollY }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTransform = () => {
    const mx = mousePos.x * 0.1;
    const my = mousePos.y * 0.1;

    if (currentPage !== 'home') {
      return `translate3d(40vw, 10vh, -200px) rotateY(${-15 + mx}deg) rotateX(${my}deg) scale(0.6)`;
    }

    switch (currentScene) {
      case 'intro':
        return `translate3d(${mx}px, ${my}px, 0) rotateY(${scrollY * 0.05 + mx}deg) rotateX(${my}deg) scale(1.1)`;
      case 'values':
        return `translate3d(25vw, 0, 0) rotateY(${-15 + mx}deg) rotateZ(5deg) scale(0.9)`;
      case 'practice':
        return `translate3d(0, 15vh, -150px) rotateY(${180 + mx}deg) scale(0.6)`;
      case 'stats':
        return `translate3d(-35vw, 0, 0) rotateY(${30 + mx}deg) scale(0.75)`;
      case 'team':
        return `translate3d(0, -25vh, 0) rotateY(${mx}deg) scale(0.5)`;
      case 'cta':
        return `translate3d(0, 0, 100px) rotateY(${scrollY * 0.03 + mx}deg) scale(1.3)`;
      default:
        return `translate3d(0, 0, 0) rotateY(${mx}deg)`;
    }
  };

  const getOpacity = () => {
    if (currentPage !== 'home') return '0.04';
    switch (currentScene) {
      case 'practice': return '0.1';
      case 'stats': return '0.2';
      case 'team': return '0.08';
      case 'cta': return '0.8';
      default: return '1';
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 perspective-[2000px] flex items-center justify-center overflow-hidden">
      <div
        className="relative w-[85vh] h-[85vh] transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) preserve-3d"
        style={{
          transform: getTransform(),
          opacity: getOpacity(),
        }}
      >
        {/* Layer 1: The Scales (Front) */}
        <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-full h-full fill-none stroke-accent stroke-[0.3] vector-effect-non-scaling-stroke" style={{ transform: 'translateZ(60px)' }}>
          <path d="M100 20 L100 180 M35 60 L165 60" strokeOpacity="0.8" />
          <circle cx="35" cy="95" r="22" strokeWidth="0.1" fill="rgba(212,175,55,0.1)" />
          <circle cx="165" cy="95" r="22" strokeWidth="0.1" fill="rgba(212,175,55,0.1)" />
        </svg>

        {/* Layer 2: Main Body (Center) */}
        <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-full h-full fill-primary stroke-accent stroke-[0.15] opacity-90" style={{ transform: 'translateZ(0px)' }}>
          <path d="M85 180 L115 180 L108 45 L92 45 Z" />
          <circle cx="100" cy="32" r="12" />
        </svg>

        {/* Layer 3: Back Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-radial from-accent/10 via-transparent to-transparent blur-[120px] -z-10"
          style={{ transform: 'translateZ(-80px)' }}
        />
      </div>
    </div>
  );
};

export default Statue;
