import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/PiyushTechie", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/piyushprajapati1336", color: "hover:text-blue-400" },
    { name: "Email", icon: Mail, href: "mailto:piyushprajapati7120@gmail.com", color: "hover:text-white-900" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/piyush_prajapati004/", color: "hover:text-red-400" },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50 font-['EB_Garamond',_serif]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-500/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="/" className="relative z-10 mr-0 md:mr-8 flex items-center">
              <img src="/logo1.svg" alt="Piyush Logo" className="w-36 md:w-44 h-auto hover:scale-105 transition-transform"/>
            </a>
            <p className="text-zinc-300 text-xl max-w-xs text-center md:text-left italic">
              Building digital experiences that make a difference.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 text-lg hover:text-sky-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full font-sans">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Available for work</span>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-300 transition-all duration-300 hover:scale-110 hover:border-zinc-700 ${social.color}`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base text-zinc-400">
          <p className="text-center md:text-left">
            © {currentYear} Piyush-Prajapati. Made with <Heart size={14} className="inline text-red-400 fill-red-800 animate-pulse" /> by{" "}
            <span className="text-sky-400 font-semibold">Piyush Prajapati</span>
          </p>
          
          <div className="flex items-center gap-2">
            <a href="mailto:piyushprajapati7120@gmail.com" className="hover:text-sky-400 transition-colors font-sans text-sm">
              piyushprajapati7120@gmail.com
            </a>
            <span className="hidden md:inline text-zinc-600">•</span>
            <span className="hidden md:inline">Mumbai, Maharashtra, India</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity" title="Total Portfolio Views">
              <img 
                src="https://hits.sh/piyush-prajapati.vercel.app.svg?style=flat-square&label=Views&extraCount=0&color=0ea5e9&labelColor=18181b" 
                alt="Page Views"
                className="h-5 w-auto rounded" 
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;