import { SKILLS } from "../../constants";

// Skill icons mapping
const skillIcons = {
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
};

const SkillsSection = () => {
  const allSkills = Object.keys(skillIcons);
  
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-20 bg-zinc-950/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-sky-500/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Technical <span className="text-sky-500">Arsenal</span>
          </h2>
          <p className="text-zinc-400 text-lg">Technologies I work with: </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden py-2">
            <div className="flex gap-6 animate-scroll hover:pause-animation w-max">
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/20 min-w-[140px]">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-zinc-800/50 group-hover:bg-sky-500/10 transition-all duration-300 p-2">
                      <img 
                        src={skillIcons[skill] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"} 
                        alt={skill}
                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                    
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-sky-400 transition-colors duration-300 text-center whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-zinc-500 text-l">And constantly learning more...</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;