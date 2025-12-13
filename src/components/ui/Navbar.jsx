import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href.substring(1));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.5 }}
        // CHANGED: md:w-auto -> lg:w-auto
        className={`fixed left-1/2 z-50 transition-all duration-500 w-[95%] lg:w-auto ${
          isScrolled ? "top-4" : "top-5"
        }`}
      >
        <div
          // CHANGED: md:w-auto -> lg:w-auto, md:justify-start -> lg:justify-start
          className={`relative transition-all duration-500 w-full lg:w-auto flex items-center justify-between lg:justify-start ${
            isScrolled
              ? "bg-zinc-900/80 backdrop-blur-xl border border-zinc-500/50 shadow-2xl shadow-black/20"
              : "bg-zinc-900/50 backdrop-blur-lg border border-zinc-500/30"
          } rounded-full px-6 py-3`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <a href="/" className="relative z-10 mr-0 lg:mr-8 block shrink-0">
            <img src="/logo1.svg" alt="Piyush Logo" className="w-32 lg:w-48 h-auto hover:opacity-80 transition-opacity" />
          </a>

          {/* Desktop Navigation */}
          {/* CHANGED: hidden md:flex -> hidden lg:flex */}
          <ul className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative z-10 block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
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
                    className="absolute inset-0 bg-sky-500/20 rounded-full border border-blue-500/30 z-0"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          {/* CHANGED: hidden md:flex -> hidden lg:flex */}
          <div className="hidden lg:flex items-center gap-4 ml-2">
            <a 
              href="/resume.pdf" 
              download="Piyush_Prajapati_Resume.pdf"
              className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="#contact"
              className="px-5 py-2 bg-sky-500 text-white text-sm font-semibold rounded-full hover:bg-sky-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          {/* CHANGED: md:hidden -> lg:hidden (Shows on Tablets now) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-1 hover:bg-zinc-800/50 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              // CHANGED: md:hidden -> lg:hidden
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -20, x: "-50%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-1/2 w-[90%] max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg z-50 lg:hidden overflow-hidden"
              >
              <div className="p-6">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`block px-6 py-4 text-base font-medium rounded-2xl transition-all duration-300 ${
                          activeSection === link.href.substring(1)
                            ? "text-white bg-blue-500/20 border border-blue-500/30"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-4">
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    href="/resume.pdf"
                    download="Piyush_Prajapati_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 border border-zinc-700 text-white text-base font-semibold rounded-2xl hover:bg-zinc-800 transition-all duration-300"
                  >
                    <Download size={20} />
                    Download Resume
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 bg-blue-500 text-white text-center text-base font-semibold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30"
                  >
                    Let's Talk
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;