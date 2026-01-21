import React, { useState } from "react";
import { cn } from "../../utils/utils";
import { Github, ExternalLink, ArrowUpRight, Terminal, Plus, Layers } from "lucide-react";
import SpotlightCard from "../effects/SpotlightCard";

const techLogos = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "nextjs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Node": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Framer Motion": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Sass": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "Go": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "Swift": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  "Rust": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Spring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  "Material UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "MUI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const imageUrl =
      card.images && card.images.length > 0
        ? card.images[0]
        : card.image
        ? card.image
        : null;

    const tagsList = card.tags || card.tech || [];

    const DISPLAY_LIMIT = 7;
    const showExpandButton = tagsList.length > DISPLAY_LIMIT && !isExpanded;
    const displayedTags = isExpanded 
      ? tagsList 
      : tagsList.slice(0, DISPLAY_LIMIT - (showExpandButton ? 1 : 0));
    const remainingCount = tagsList.length - displayedTags.length;

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
                        
                        <div className="flex items-center gap-2 mb-3">
                            <Layers size={14} className="text-zinc-500" />
                            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-sans">
                                Technologies Used
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 font-sans relative transition-all duration-300">
                            {displayedTags.map((tag) => {
                                const iconUrl = techLogos[tag] || techLogos[tag.split(" ")[0]];
                                
                                if (iconUrl) {
                                    return (
                                        <div 
                                            key={tag} 
                                            className="relative group/icon"
                                            title={tag}
                                        >
                                            <div className="w-9 h-9 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center p-1.5 shadow-sm hover:scale-110 hover:border-sky-500/30 hover:bg-zinc-800 transition-all duration-300 cursor-default">
                                                <img 
                                                    src={iconUrl} 
                                                    alt={tag} 
                                                    className="w-full h-full object-contain grayscale-[0.3] group-hover/icon:grayscale-0 transition-all" 
                                                />
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <span 
                                            key={tag} 
                                            className="px-2.5 py-1 text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    );
                                }
                            })}

                            {showExpandButton && (
                                <button 
                                    onClick={(e) => {
                                      e.preventDefault(); 
                                      setIsExpanded(true);
                                    }}
                                    className="w-9 h-9 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 hover:bg-sky-500/30 hover:border-sky-500/50 transition-all duration-300 hover:scale-110 group/expand"
                                    title="Show all technologies"
                                >
                                    <Plus size={14} className="group-hover/expand:rotate-90 transition-transform duration-300" />
                                    <span className="text-[10px] font-bold ml-0.5">{remainingCount}</span>
                                </button>
                            )}
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