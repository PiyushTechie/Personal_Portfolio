import React from 'react';
import { FocusCards } from "../ui/focus-cards"; 
import { Code2 } from "lucide-react";
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

        <FocusCards cards={PROJECTS} />

      </div>
    </section>
  );
};

export default ProjectsSection;