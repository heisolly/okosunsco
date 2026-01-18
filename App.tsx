import React, { useState, useEffect } from "react";
import { PhoneCall, ExternalLink, Menu, X } from "lucide-react";
import Statue from "./components/Statue";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Practice from "./pages/Practice";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import { Scene, Page } from "./types";

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentScene, setCurrentScene] = useState<Scene>("intro");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeaderLinks, setShowHeaderLinks] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY > 100) {
        setShowHeaderLinks(false);
      } else {
        setShowHeaderLinks(true);
      }
      
      if (currentPage !== "home") return;

      const sections = document.querySelectorAll("section");
      let bestScene: Scene = "intro";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          const sceneAttr = section.getAttribute("data-scene") as Scene;
          if (sceneAttr) bestScene = sceneAttr;
        }
      });
      setCurrentScene(bestScene);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setCurrentPage(page), 100);
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-ivory text-primary selection:bg-accent/20 selection:text-accent font-sans overflow-x-hidden">
      <div className="bg-grain"></div>
      
      <nav className="fixed top-0 w-full z-[100] transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[150px] pointer-events-none opacity-30">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            <path d="M 150,0 Q 180,30 200,50" fill="none" stroke="#0E0E12" strokeWidth="1"/>
            <path d="M 160,0 Q 185,25 200,40" fill="none" stroke="#D4AF37" strokeWidth="0.8"/>
            <circle cx="180" cy="30" r="40" fill="none" stroke="#0E0E12" strokeWidth="0.5"/>
          </svg>
        </div>
        
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div
              onClick={() => navigateTo("home")}
              className="flex items-center gap-4 cursor-pointer group/logo"
            >
              <img 
                src="/logo.png" 
                alt="Okosun, Okosun & Partners" 
                className="h-12 lg:h-14 w-auto object-contain group-hover/logo:scale-105 transition-all duration-500"
              />
              <div className="hidden xl:flex flex-col border-l-2 border-accent/30 pl-4">
                <span className="text-sm font-bold tracking-tight text-primary">
                  Okosun, Okosun & Partners
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-black text-primary/40">
                  Strategic Legal Counsel
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-12">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "practice", label: "Practice" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`relative text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 py-2 group/nav ${
                    currentPage === item.id 
                      ? "text-accent" 
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${
                      currentPage === item.id 
                        ? "w-full" 
                        : "w-0 group-hover/nav:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className={`lg:hidden flex items-center gap-6 transition-all duration-300 ${
              showHeaderLinks ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "practice", label: "Practice" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`relative text-[9px] uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                    currentPage === item.id 
                      ? "text-accent" 
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateTo("consultation")}
                className="hidden md:flex items-center gap-3 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] bg-primary text-white hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl group/cta rounded-full"
              >
                <PhoneCall className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
                <span>Consult Now</span>
              </button>

              <button
                onClick={() => navigateTo("contact")}
                className="hidden sm:flex items-center justify-center w-12 h-12 border-2 border-primary/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 group/icon rounded-full backdrop-blur-sm bg-white/80"
              >
                <ExternalLink className="w-5 h-5 text-primary/60 group-hover/icon:text-accent transition-colors" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-12 h-12 border-2 border-primary/10 hover:border-accent hover:bg-accent/5 transition-all duration-300 rounded-full backdrop-blur-sm bg-white/90 shadow-lg"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`lg:hidden fixed inset-0 top-[72px] bg-primary/95 backdrop-blur-lg z-50 transition-all duration-500 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className={`flex flex-col h-full p-8 transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="flex flex-col gap-6 mb-12">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "team", label: "Team" },
                { id: "practice", label: "Practice" },
                { id: "contact", label: "Contact" }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id as Page)}
                  className={`text-left text-2xl font-serif italic transition-all duration-300 py-3 border-b border-white/10 ${
                    currentPage === item.id 
                      ? "text-accent" 
                      : "text-white hover:text-accent"
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: mobileMenuOpen ? 'fadeInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <button
                onClick={() => navigateTo("consultation")}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] bg-accent text-primary hover:bg-accent/90 transition-all duration-300 shadow-lg rounded-full"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Book Consultation</span>
              </button>

              <div className="text-center text-white/60 text-sm">
                <p>Strategic Legal Counsel</p>
                <p className="text-accent font-bold mt-1">Okosun, Okosun & Partners</p>
              </div>
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
        
        <Footer onNavigate={navigateTo} />
      </main>
    </div>
  );
};

export default App;
