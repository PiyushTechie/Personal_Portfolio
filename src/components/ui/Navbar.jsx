import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href.substring(1));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed left-1/2 z-50 transition-all duration-500 w-[95%] sm:w-[92%] lg:w-fit lg:max-w-[92vw] font-['EB_Garamond',_serif] ${
          isScrolled ? "top-3 sm:top-4" : "top-4 sm:top-5"
        }`}
      >
        <div
          className={`relative transition-all duration-500 w-full lg:w-auto flex items-center justify-between lg:justify-start ${
            isScrolled
              ? "bg-zinc-900/90 backdrop-blur-xl border border-zinc-500/60 shadow-2xl shadow-black/30"
              : "bg-zinc-900/60 backdrop-blur-lg border border-zinc-500/40"
          } rounded-full px-4 py-2.5 sm:px-5 md:px-6 md:py-3`}
        >
          <a href="/" className="relative z-10 mr-0 lg:mr-6 block shrink-0">
            <img 
                src="/logo1.svg" 
                alt="Piyush Logo" 
                className="w-24 sm:w-28 lg:w-36 h-auto hover:opacity-80 transition-opacity duration-300" 
            />
          </a>

          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative z-10 block px-3 xl:px-4 py-2 text-[15px] font-semibold rounded-full transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-sky-500/20 rounded-full border border-sky-500/40 z-0"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-3 xl:ml-4 pl-3 xl:pl-4 border-l border-zinc-700/50">
            <a 
              href="/Piyush_Prajapati_Resume.pdf" 
              download="Piyush_Prajapati_Resume.pdf"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-300 text-[15px] font-medium whitespace-nowrap group"
            >
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
              Resume
            </a>

            <a
              href="#contact"
              className="px-4 xl:px-5 py-2 bg-sky-500 text-white text-[15px] font-bold rounded-full hover:bg-sky-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 whitespace-nowrap"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center hover:bg-zinc-800/50 rounded-full transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-white rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
              transition={{ 
                duration: 0.3, 
                ease: [0.4, 0, 0.2, 1],
                scale: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="fixed top-20 sm:top-24 left-1/2 w-[90%] max-w-md bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/60 rounded-3xl shadow-2xl shadow-black/50 z-50 lg:hidden overflow-hidden font-['EB_Garamond',_serif]"
            >
              <div className="p-5 sm:p-6">
                <ul className="space-y-1.5">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ 
                        delay: index * 0.08,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`block px-5 py-3.5 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 ${
                          activeSection === link.href.substring(1)
                            ? "text-white bg-sky-500/20 border border-sky-500/40 shadow-lg shadow-sky-500/10"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/60 active:scale-[0.98]"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  className="mt-5 pt-5 border-t border-zinc-800/80 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <a
                    href="/Piyush_Prajapati_Resume.pdf"
                    download="Piyush_Prajapati_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 border border-zinc-700/80 text-white text-base sm:text-lg font-bold rounded-2xl hover:bg-zinc-800/60 transition-all duration-300 active:scale-[0.98]"
                  >
                    <Download size={18} />
                    Download Resume
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-5 py-3.5 bg-sky-500 text-white text-center text-base sm:text-lg font-bold rounded-2xl hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 active:scale-[0.98]"
                  >
                    Let's Talk
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;