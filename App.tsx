import React, { useState, useEffect } from "react";
import { PhoneCall, ExternalLink } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
  };

  return (
    <div className="relative min-h-screen bg-ivory text-primary selection:bg-accent/20 selection:text-accent font-sans overflow-x-hidden">
      <div className="bg-grain"></div>
      
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        currentPage === "home" && scrollY < 50
          ? "bg-transparent py-6 lg:py-8"
          : "bg-white/95 backdrop-blur-xl border-b border-accent/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3 lg:py-4"
      }`}>
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div
              onClick={() => navigateTo("home")}
              className="flex items-center gap-4 cursor-pointer group/logo"
            >
              <img 
                src="/logo.png" 
                alt="Okosun, Okosun & Partners" 
                className={`h-10 lg:h-12 w-auto object-contain group-hover/logo:scale-105 transition-all duration-500 ${
                  currentPage === "home" && scrollY < 50 ? "brightness-0 invert" : ""
                }`}
              />
              <div className={`hidden xl:flex flex-col border-l-2 border-accent/30 pl-4 ${
                currentPage === "home" && scrollY < 50 ? "border-white/20" : ""
              }`}>
                <span className={`text-sm font-bold tracking-tight ${
                  currentPage === "home" && scrollY < 50 ? "text-white" : "text-primary"
                }`}>
                  Okosun, Okosun & Partners
                </span>
                <span className={`text-[8px] uppercase tracking-[0.3em] font-black ${
                  currentPage === "home" && scrollY < 50 ? "text-white/40" : "text-primary/40"
                }`}>
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
                      : (currentPage === "home" && scrollY < 50 ? "text-white/70 hover:text-white" : "text-primary/70 hover:text-primary")
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

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateTo("consultation")}
                className={`hidden md:flex items-center gap-3 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-xl group/cta ${
                  currentPage === "home" && scrollY < 50
                    ? "bg-white text-primary hover:bg-accent hover:text-white"
                    : "bg-primary text-white hover:bg-accent"
                }`}
              >
                <PhoneCall className="w-4 h-4 group-hover/cta:rotate-12 transition-transform" />
                <span>Consult Now</span>
              </button>

              <button
                onClick={() => navigateTo("contact")}
                className={`flex items-center justify-center w-12 h-12 border-2 transition-all duration-300 group/icon ${
                  currentPage === "home" && scrollY < 50
                    ? "border-white/10 hover:border-white hover:bg-white/5"
                    : "border-primary/10 hover:border-accent hover:bg-accent/5"
                }`}
              >
                <ExternalLink className={`w-5 h-5 transition-colors ${
                  currentPage === "home" && scrollY < 50 ? "text-white/60 group-hover/icon:text-white" : "text-primary/60 group-hover/icon:text-accent"
                }`} />
              </button>
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
