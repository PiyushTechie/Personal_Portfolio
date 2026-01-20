import React, { useState } from "react";
import { cn } from "../../utils/utils";
import { Github, ExternalLink, ArrowUpRight, Terminal } from "lucide-react";
import SpotlightCard from "../effects/SpotlightCard"; 

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }) => {
    const imageUrl =
      card.images && card.images.length > 0
        ? card.images[0]
        : card.image
        ? card.image
        : null;

    const tagsList = card.tags || card.tech || [];

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "h-full w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98] grayscale-[0.5] opacity-70"
        )}
      >
        <SpotlightCard className="h-full">
            <div className="h-full flex flex-col bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-sky-500/50 transition-all duration-300 group overflow-hidden">
                
                <div className="relative h-52 overflow-hidden bg-zinc-950 border-b border-white/5 shrink-0">
                    {imageUrl ? (
                        <>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60"></div>
                        <img 
                            src={imageUrl} 
                            alt={card.title} 
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
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors font-['EB_Garamond',_serif]">
                        {card.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-sans">
                        {card.desc}
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
                        {card.github && card.github !== "#" && (
                            <a 
                            href={card.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-semibold"
                            >
                            <Github size={18} />
                            Source Code
                            </a>
                        )}
                        
                        {card.github && card.github !== "#" && card.link && card.link !== "#" && (
                            <div className="w-px h-4 bg-zinc-800"></div>
                        )}

                        {card.link && card.link !== "#" && (
                            <a 
                            href={card.link} 
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
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full items-stretch">
      {cards.map((card, index) => (
        <Card
          key={card.title + index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}