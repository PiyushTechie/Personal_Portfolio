import { useState } from "react";
import SpotlightCard from "../effects/SpotlightCard";
import { PROJECTS } from "../../constants";
import { ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import ProjectImageCarousel from "./ProjectImageCarousel";

const ProjectsSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const currentProject = PROJECTS[activeProjectIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Featured <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg">Selected works from my portfolio</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex gap-3">
                <button 
                  onClick={prevProject}
                  className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-white transition-all border border-zinc-700 hover:scale-110"
                >
                  <ChevronLeft size={22} />
                </button>
                <button 
                  onClick={nextProject}
                  className="p-3 rounded-full bg-zinc-800/50 hover:bg-zinc-700 text-white transition-all border border-zinc-700 hover:scale-110"
                >
                  <ChevronRight size={22} />
                </button>
             </div>
          </div>
        </div>

        <div className="relative">
          <SpotlightCard className="bg-zinc-900/40 border-zinc-800/50 overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-0">
              
              <div className="relative h-[400px] lg:h-auto overflow-hidden group bg-black flex items-center justify-center">
                {currentProject?.images && currentProject.images.length > 0 ? (
                    <div className="w-full h-full">
                        <ProjectImageCarousel 
                            key={activeProjectIndex} 
                            images={currentProject.images} 
                        />
                    </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                    <span className="text-8xl text-zinc-800 font-bold opacity-50">Code</span>
                  </div>
                )}
              </div>

              
              <div className="p-8 lg:p-12 flex flex-col h-full bg-zinc-900/20 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-lg">
                       0{activeProjectIndex + 1}
                    </div>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {currentProject?.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {currentProject?.desc}
                  </p>

                  
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                        <Layers size={16} className="text-sky-500" />
                        <span>Technologies Used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {currentProject?.tags?.map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 mt-auto">
                  <div className="flex gap-4">
                    {currentProject?.link && (
                      <a 
                        href={currentProject.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                    
                    {currentProject?.github && (
                      <a 
                        href={currentProject.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10 hover:-translate-y-0.5"
                      >
                        <Github size={20} />
                        Code
                      </a>
                    )}
                  </div>

                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500 ease-out"
                      style={{ width: `${((activeProjectIndex + 1) / PROJECTS.length) * 100}%` }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </SpotlightCard>
        </div>

        <div className="text-center mt-16">
          <a href="https://github.com/PiyushTechie?tab=repositories" className="inline-flex items-center gap-2 text-zinc-400 hover:text-sky-400 transition-colors font-medium group text-lg">
            View Full Project Archive
            <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;