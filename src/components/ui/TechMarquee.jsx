import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript, 
  // SiJava,  <-- REMOVE THIS LINE
  SiRedis, 
  SiDocker, 
  SiMysql, 
  SiGit,
  SiSpringboot
} from "react-icons/si";

// 👇 ADD THIS NEW IMPORT
import { FaJava } from "react-icons/fa"; 

const TECH_STACK = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  
  // 👇 UPDATE THIS LINE TO USE FaJava
  { name: "Java", icon: FaJava, color: "text-red-500" },
  
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-white" },
  { name: "Redis", icon: SiRedis, color: "text-red-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
];

const TechMarquee = () => {
  return (
    <section className="py-10 bg-zinc-950 border-y border-white/5 overflow-hidden relative">
      
      {/* Side Fades */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

      {/* Scrolling Container */}
      <div className="flex w-max">
        {/* First Loop */}
        <div className="flex animate-marquee">
          {TECH_STACK.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 mx-8 md:mx-12 group cursor-default">
              <tech.icon className={`text-3xl md:text-4xl ${tech.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
              <span className="text-zinc-500 font-bold text-lg group-hover:text-zinc-300 transition-colors uppercase tracking-wider">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second Loop */}
        <div className="flex animate-marquee" aria-hidden="true">
          {TECH_STACK.map((tech, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-2 mx-8 md:mx-12 group cursor-default">
              <tech.icon className={`text-3xl md:text-4xl ${tech.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
              <span className="text-zinc-500 font-bold text-lg group-hover:text-zinc-300 transition-colors uppercase tracking-wider">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;