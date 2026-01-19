import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Scene, Page } from '../types';

interface StatueProps {
  currentScene: Scene;
  currentPage: Page;
  scrollY: number; // Keep for compatibility if needed, but we'll use local useScroll
}

const Statue: React.FC<StatueProps> = ({ currentScene, currentPage }) => {
  const { scrollY } = useScroll();
  
  // Use springs for smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create refined MotionValues for the final rotation
  const rotateY = useTransform(scrollY, (v) => {
    if (currentPage !== 'home') return -15;
    switch (currentScene) {
      case 'intro': return v * 0.05;
      case 'values': return -15;
      case 'practice': return 180;
      case 'stats': return 30;
      case 'cta': return v * 0.03;
      default: return 0;
    }
  });

  const baseScale = currentPage !== 'home' ? 0.6 : (() => {
    switch (currentScene) {
      case 'intro': return 1.1;
      case 'values': return 0.9;
      case 'practice': return 0.6;
      case 'stats': return 0.75;
      case 'team': return 0.5;
      case 'cta': return 1.3;
      default: return 1;
    }
  })();

  const baseOpacity = currentPage !== 'home' ? 0.04 : (() => {
    switch (currentScene) {
      case 'practice': return 0.1;
      case 'stats': return 0.2;
      case 'team': return 0.08;
      case 'cta': return 0.8;
      default: return 1;
    }
  })();

  // Combine springs and scroll for the final transform
  const combinedRotateY = useTransform([rotateY, springMouseX], ([rot, m]: any) => rot + m * 0.1);
  const translateX = useTransform([springMouseX], ([m]: any) => {
    if (currentPage !== 'home') return "40vw";
    if (currentScene === 'values') return "25vw";
    if (currentScene === 'stats') return "-35vw";
    if (currentScene === 'intro') return `${m * 0.1}px`;
    return "0px";
  });
  const translateY = useTransform([springMouseY], ([m]: any) => {
    if (currentPage !== 'home') return "10vh";
    if (currentScene === 'practice') return "15vh";
    if (currentScene === 'team') return "-25vh";
    if (currentScene === 'intro') return `${m * 0.1}px`;
    return "0px";
  });
  const translateZ = currentScene === 'practice' ? "-150px" : (currentScene === 'cta' ? "100px" : (currentPage !== 'home' ? "-200px" : "0px"));
  const rotateZ = currentScene === 'values' ? "5deg" : "0deg";

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 perspective-[2000px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative w-[85vh] h-[85vh] preserve-3d will-change-transform"
        style={{
          x: translateX,
          y: translateY,
          z: translateZ,
          rotateY: combinedRotateY,
          rotateZ: rotateZ,
          scale: baseScale,
          opacity: baseOpacity,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          opacity: { duration: 1 }
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
      </motion.div>
    </div>
  );
};

export default Statue;
