import RotatingGreeting from "../effects/RotatingGreeting";
import { ABOUT_ME } from "../../constants";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="font-serif min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-10 text-center md:text-left mt-20 md:mt-0">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Hi, 👋 I'm{" "}
                <span className="text-sky-400">
                  {ABOUT_ME.name}
                </span>
              </h1>
              <RotatingGreeting />
            </div>
            
            <p className="text-base md:text-2xl text-zinc-200 leading-loose max-w-xl">
              {ABOUT_ME.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start items-center">
              <a 
                href="#projects" 
                className="px-6 py-3.5 border-2 border-zinc-700 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sky-500/50"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 border-2 border-zinc-700 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sky-500/50"
              >
                Get In Touch
              </a>

              <a 
                href="/Piyush_Prajapati_Resume.pdf" 
                download="Piyush_Prajapati_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 text-zinc-400 hover:text-white transition-all font-medium hover:scale-105"
              >
                <Download size={20} />
                Download CV
              </a>
              
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="absolute -inset-6 bg-sky-500 blur-[100px] opacity-20 rounded-full"></div>
            
            <div className="relative w-70 h-70 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800 shadow-5xl hover:border-sky-500 transition-all duration-700 hover:scale-110">
              <img 
                src="/project-images/Profilephoto.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;