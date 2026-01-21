import React, { useState, useEffect } from "react";
import { PhoneCall, ExternalLink, Menu, X, ArrowRight } from "lucide-react";
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Statue from "./components/Statue";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Practice from "./pages/Practice";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import Admin from "./pages/Admin";
import { Scene, Page } from "./types";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentScene, setCurrentScene] = useState<Scene>("intro");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeaderLinks, setShowHeaderLinks] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setCurrentPage('admin');
    } else if (path === '/consultation') {
      setCurrentPage('consultation');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    }
  }, []);

  const navigateTo = (page: Page) => {
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setCurrentPage(page), 100);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Scene detection using IntersectionObserver
    if (currentPage === "home") {
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -20% 0px", // Focus on the middle of the viewport
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sceneAttr = entry.target.getAttribute("data-scene") as Scene;
            if (sceneAttr) {
              setCurrentScene(sceneAttr);
            }
          }
        });
      }, observerOptions);

      const sections = document.querySelectorAll("section[data-scene]");
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, [currentPage]);

  useEffect(() => {
    // Initialize Lenis for global smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start RAF
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    // Note: If using window scroll, ScrollTrigger usually auto-detects. 
    // But explicit update is safer for pinned sections.
    // lenis.on('scroll', ScrollTrigger.update); 
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000); // GSAP's ticker can drive Lenis for perfect sync, 
    // });
    // However, the manual RAF above is the "standard" recommendation from Lenis docs for React.
    
    // Existing scroll handler for React state (Header/Statue)
    // Lenis scrolls the window natively, so 'scroll' events still fire.
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          setShowHeaderLinks(currentScrollY <= 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  // Determine header theme based on current section - Clone section backgrounds
  const isDarkSection = ["practice", "contact", "team", "archive"].includes(currentScene || "");
  const headerBg = isDarkSection ? "bg-[#0E0E12]/90 border-white/10" : "bg-[#FDFCF8]/90 border-[#D4AF37]/20";
  const headerText = isDarkSection ? "text-white" : "text-primary";
  const headerAccent = isDarkSection ? "text-[#D4AF37]" : "text-[#D4AF37]";
  const navLinkActive = isDarkSection ? "text-[#D4AF37] bg-[#D4AF37]/10" : "text-primary bg-[#D4AF37]/5";
  const navLinkInactive = isDarkSection ? "text-white/60 hover:text-[#D4AF37]" : "text-primary/60 hover:text-primary";

  return (
    <div className="relative min-h-screen bg-ivory text-primary selection:bg-accent/20 selection:text-accent font-sans overflow-x-hidden">
      <div className="bg-grain"></div>
      
      <nav 
        style={{
          clipPath: (scrollY > 50 && window.innerWidth >= 768) ? "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" : "none"
        }}
        className={`fixed z-[1000] transistion-all duration-500 ease-out flex justify-center items-center ${
        scrollY > 50 
          ? `top-0 inset-x-0 md:top-4 md:inset-x-8 md:w-auto backdrop-blur-xl border-b md:border shadow-2xl py-3 md:py-4 ${headerBg} ${headerText}` 
          : "top-0 inset-x-0 bg-transparent py-4 md:py-6 border-b border-transparent text-primary"
      }`}>
        <div className="w-full max-w-[1920px] px-6 lg:px-8 xl:px-12 flex items-center justify-between">
            
            {/* 1. Logo Section - Matches Image 1 */}
            <div
              onClick={() => navigateTo("home")}
              className="flex items-center gap-4 md:gap-6 cursor-pointer group/logo"
            >
              {/* Logo Icon */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                 <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              
              {/* Vertical Divider - Hidden on Mobile */}
              <div className={`hidden md:block h-10 w-[1px] ${headerAccent}`} />

              {/* Text Hierarchy - Hidden on Mobile to reduce clutter */}
              <div className="hidden md:flex flex-col items-start justify-center">
                {/* Top Label */}
                <div className="flex items-center gap-2 mb-0.5 opacity-0 animate-in fade-in slide-in-from-left-2 duration-700 delay-100 fill-mode-forwards">
                   <h3 className={`text-[10px] uppercase font-medium tracking-[0.25em] ${headerAccent}`}>
                     Established 2010 • Benin City Hub
                   </h3>
                </div>

                {/* Main Name */}
                <h1 className={`font-serif text-lg md:text-xl italic ${headerText} leading-none tracking-wide text-shadow-sm mb-1`}>
                  Okosun, Okosun & Partners
                </h1>

                {/* Bottom Label with Diamond */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${isDarkSection ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]'} rotate-45`} />
                  <span className={`text-[9px] uppercase font-medium tracking-[0.3em] ${headerAccent}`}>
                    Strategic Legal Counsel
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Navigation - Fixed Layout (No Absolute) */}
            <div className={`hidden xl:flex items-center h-full ml-auto mr-12 border-l ${isDarkSection ? 'border-white/20' : 'border-[#D4AF37]/20'}`}>
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "Firm" },
                { id: "team", label: "Partners" },
                { id: "practice", label: "Practice" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`relative h-12 px-8 flex items-center justify-center text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 border-r ${isDarkSection ? 'border-white/20' : 'border-[#D4AF37]/20'} group/nav ${
                    currentPage === item.id 
                      ? navLinkActive
                      : navLinkInactive + ' hover:bg-[#D4AF37]/5'
                  }`}
                >
                  {/* Diamond Indicator for Active State */}
                  {currentPage === item.id && (
                     <div className="absolute top-1/2 left-4 -translate-y-1/2 w-1.5 h-1.5 bg-[#D4AF37] rotate-45" />
                  )}
                  
                  {item.label}

                  {/* Gold Underline for Active State */}
                  <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] transition-all duration-300 transform origin-left ${
                     currentPage === item.id ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                  }`} />
                </button>
              ))}
            </div>

            {/* 3. CTA Button - Black Polygon from Image 2 */}
            <div className={`flex items-center ${scrollY > 50 ? "ml-0" : "gap-6"}`}>
              {/* Desktop Details */}
              <button
                onClick={() => navigateTo("consultation")}
                className="hidden md:flex relative group overflow-hidden transition-transform duration-300 active:scale-95"
                style={{
                   clipPath: "polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)",
                   filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))"
                }}
              >
                <div className="absolute inset-0 bg-[#0E0E12] group-hover:bg-primary transition-colors duration-300" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                <div className="relative px-10 py-4 flex items-center gap-3">
                  <span className="text-white text-[11px] font-medium uppercase tracking-[0.25em] group-hover:tracking-[0.35em] transition-all duration-300">
                    Initiate Brief
                  </span>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45 animate-pulse" />
                </div>
              </button>

              {/* Mobile Toggle - Minimal & Clean */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden relative z-[110] flex items-center justify-center transition-colors duration-300 ${
                  mobileMenuOpen ? 'text-white' : headerText
                }`}
              >
                  {mobileMenuOpen ? (
                    <span className="text-xs font-medium tracking-[0.25em] uppercase">Close</span>
                  ) : (
                    <div className={`w-12 h-12 flex items-center justify-center border ${isDarkSection ? 'border-white/10' : 'border-primary/10'} rotate-45 hover:bg-accent hover:border-accent group transition-all duration-300`}>
                      <div className="flex flex-col gap-1.5 -rotate-45">
                         <span className={`w-6 h-0.5 ${isDarkSection ? 'bg-white' : 'bg-primary'} group-hover:bg-primary transition-colors`} />
                         <span className={`w-4 h-0.5 ${isDarkSection ? 'bg-white' : 'bg-primary'} group-hover:bg-primary transition-colors ml-auto`} />
                      </div>
                    </div>
                  )}
              </button>
            </div>

          </div>

        {/* 4. Architectural Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-[#0E0E12] z-[90] h-[100dvh] transition-all duration-500 ease-out ${
            mobileMenuOpen 
               ? "opacity-100 pointer-events-auto" 
               : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Internal Close Button (Redundant but requested) */}
          <div className="absolute top-8 right-6 z-[120]">
              {/* We rely on the header button which is z-[110], but user specifically asked for 'a nav closing button'.
                  Since we adjusted the header button to be z-[110] and white, it serves this purpose perfectly.
                  Adding another one might be cluttered, but sticking to the improved header button is cleaner.
              */}
          </div>

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 h-full flex flex-col justify-start pt-40 px-8 sm:px-12">
             <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
               {[
                 { id: "home", label: "Residence", sub: "01" },
                 { id: "about", label: "The Firm", sub: "02" },
                 { id: "practice", label: "Expertise", sub: "03" },
                 { id: "team", label: "Partners", sub: "04" },
                 { id: "contact", label: "Connect", sub: "05" }
               ].map((item, i) => (
                 <button
                   key={item.id}
                   onClick={() => navigateTo(item.id as Page)}
                   className="group w-full flex items-center justify-between py-5 hover:bg-white/5 transition-colors"
                 >
                    <div className="flex items-center gap-6">
                        <span className={`text-xs font-mono text-accent/50 group-hover:text-accent transition-colors`}>{item.sub}</span>
                        <span className={`font-serif text-3xl sm:text-4xl italic transition-all duration-300 ${currentPage === item.id ? 'text-accent' : 'text-white group-hover:text-accent group-hover:pl-4'}`}>
                            {item.label}
                        </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-accent -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                 </button>
               ))}
             </div>
          </div>
        </div>
      </nav>

      <Statue
        currentScene={currentScene}
        currentPage={currentPage}
        scrollY={scrollY}
      />

      <main className="relative z-10">
        {currentPage === "home" && (
          <Home 
            onNavigate={navigateTo} 
            activeFaq={activeFaq} 
            setActiveFaq={setActiveFaq} 
          />
        )}
        {currentPage === "about" && <About />}
        {currentPage === "team" && <Team />}
        {currentPage === "practice" && <Practice onNavigate={navigateTo} />}
        {currentPage === "consultation" && <Consultation />}
        {currentPage === "contact" && <Contact />}
        {currentPage === "admin" && <Admin />}
        
        <Footer onNavigate={navigateTo} />
      </main>
    </div>
  );
};

export default App;
