import React from 'react';
import SpotlightCard from "../effects/SpotlightCard";
import { Github, ExternalLink, Code2, ArrowUpRight, Terminal } from "lucide-react";
import { PROJECTS } from "../../constants"; 

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden font-['EB_Garamond',_serif]">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 mb-4 font-sans">
            <Code2 size={14} className="text-sky-400" />
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wide">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-sky-500">Projects</span>
          </h2>
          <p className="text-zinc-300 text-lg md:text-2xl max-w-2xl mx-auto italic">
            Selected works from my portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            
            const imageUrl = (project.images && project.images.length > 0) 
              ? project.images[0] 
              : project.image 
                ? project.image 
                : null;

            const tagsList = project.tags || project.tech || [];

            return (
              <SpotlightCard key={index} className="h-full">
                <div className="h-full flex flex-col bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-sky-500/50 transition-all duration-300 group overflow-hidden">
                  
                  <div className="relative h-52 overflow-hidden bg-zinc-950 border-b border-white/5 shrink-0">
                    
                    {imageUrl ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60"></div>
                        <img 
                          src={imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900/80 group-hover:bg-zinc-900 transition-colors">
                        <div className="text-center opacity-30 group-hover:opacity-50 transition-opacity">
                          <Terminal size={48} className="mx-auto mb-2 text-sky-500" />
                          <span className="text-sm font-mono text-sky-400 font-bold uppercase tracking-widest">
                            Code Project
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-zinc-950/60 backdrop-blur flex items-center justify-center rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    <div className="mb-6 mt-auto">
                      <div className="flex flex-wrap gap-2 font-sans">
                        {tagsList.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-1 text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-800 font-sans mt-auto">
                      {project.github && project.github !== "#" && (
                          <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold"
                          >
                          <Github size={18} />
                          Source Code
                          </a>
                      )}
                      
                      {project.github && project.github !== "#" && project.link && project.link !== "#" && (
                        <div className="w-px h-4 bg-zinc-800"></div>
                      )}

                      {project.link && project.link !== "#" && (
                          <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-semibold"
                          >
                          <ExternalLink size={18} />
                          Live Demo
                          </a>
                      )}
                    </div>
                  </div>

                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;