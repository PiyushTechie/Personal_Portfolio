import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import IntroScreen from "./components/effects/IntroScreen";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import CustomCursor from "./components/effects/CustomCursor";
import Footer from "./components/ui/Footer";
import EducationSection from "./components/sections/EducationSection";
import TechMarquee from "./components/ui/TechMarquee";
import { lazy, Suspense } from "react";
const Github = lazy(() => import("./components/sections/Github"));
function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroScreen onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>


      {!showIntro && (
        <div className="fade-in-animation">
        <CustomCursor />
          <Navbar />
          <HeroSection />
          <SkillsSection />
          <EducationSection/>
          <ProjectsSection />
          <Suspense fallback={null}>
            <Github />
          </Suspense>

          <ContactSection />
          <TechMarquee/>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;