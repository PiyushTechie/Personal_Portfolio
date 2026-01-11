import React from 'react';
import { GraduationCap, Calendar, Award, Star, TrendingUp } from "lucide-react";

const SpotlightCard = ({ children }) => {
  return (
    <div className="relative group">
      {children}
    </div>
  );
};

const EDUCATION = [
  {
    degree: "Bachelor of Technology in AI & ML",
    school: "Thakur College of Engineering",
    logo: "https://images.shiksha.com/mediadata/images/1489300063phpA1CPrW.jpeg", 
    year: "2024 - 2028",
    desc: "Focused on Data Structures, Algorithms, and System Design. Documentation team member at TCET Shastra Coding Club.",
    gpa: "9.58", 
    gradeLabel: "CGPA",
    courses: ["OS & Networks", "DBMS", "Java OOPs", "Web Dev", "Python"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Bhavans Junior College, Mumbai",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66UA2EYgB-1BPkaf-ndmCcomRKJFrLl9XLQ&s",
    year: "2022 - 2024",
    desc: "Specialized in Science (PCM) + Electronics. Developed a strong foundation in mathematics and logic building.",
    gpa: "81.5%",
    gradeLabel: "Percentage", 
    courses: ["Mathematics", "Electronics", "Physics", "Chemistry", "English"]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Smt.Rajrani Malhotra Vidyalaya",
    logo: "https://content.jdmagicbox.com/v2/comp/mumbai/e4/022pxx22.xx22.161118155853.r7e4/catalogue/smt-raj-rani-malhotra-vidyalaya-andheri-west-mumbai-schools-645cc14po4.jpg",
    year: "2012-2022",
    desc: "Completed secondary education with distinction.",
    gpa: "87.60%",
    gradeLabel: "Percentage",
    courses: ["Mathematics", "Science", "Social Sciences"]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950 font-['EB_Garamond',_serif]">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_65%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6 font-sans">
            <TrendingUp size={16} className="text-sky-400" />
            <span className="text-sm font-semibold text-sky-400">Academic Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">Education</span>
          </h2>
          <p className="text-zinc-300 text-2xl max-w-2xl mx-auto italic">
            My Academic Journey throughout the years.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-sky-500/30 to-transparent"></div>

          <div className="space-y-16">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative pl-16 md:pl-28">
                
                <div className="absolute left-5 md:left-10 top-10 w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-950 border-4 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.5)] z-10">
                  <div className="absolute -inset-2 rounded-full bg-sky-500/20 animate-pulse"></div>
                </div>

                <div className="absolute left-12 md:left-20 top-8 z-10 font-sans">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-sky-500/30 shadow-lg">
                    <Calendar size={12} className="text-sky-400" />
                    <span className="text-xs font-bold text-sky-400">{edu.year}</span>
                  </div>
                </div>

                <SpotlightCard>
                  <div className="relative mt-12 bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden hover:border-sky-500/40 transition-all duration-500 group">
                    <div className="h-1 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="p-6 md:p-8">
                      
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 mb-6">
                        <div className="flex items-start gap-5 md:gap-8 flex-1">
                          
                          <div className="relative p-2 bg-gradient-to-br from-sky-500/10 to-transparent rounded-2xl border border-sky-500/20 flex-shrink-0 h-24 w-24 md:h-32 md:w-32 flex items-center justify-center overflow-hidden shadow-lg bg-white/5">
                             {edu.logo ? (
                               <img 
                                 src={edu.logo} 
                                 alt={`${edu.school} logo`} 
                                 className="w-full h-full object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                               />
                             ) : (
                               <GraduationCap className="text-sky-400" size={48} />
                             )}
                          </div>

                          <div className="flex-1 min-w-0 pt-2">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight group-hover:text-sky-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-zinc-300 text-lg md:text-xl italic">
                              {edu.school}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 self-start font-sans">
                          <Award size={20} className="text-sky-400" />
                          <div>
                            <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{edu.gradeLabel}</div>
                            <div className="text-xl font-bold text-white">{edu.gpa}</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-zinc-300 text-lg leading-relaxed mb-8 pl-0 md:pl-40">
                        {edu.desc}
                      </p>

                      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-6 ml-0 md:ml-40"></div>

                      <div className="pl-0 md:pl-40">
                        <div className="flex items-center gap-2 mb-4 font-sans">
                          <Star size={14} className="text-sky-400" />
                          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-2 font-sans">
                          {edu.courses.map((course) => (
                            <span 
                              key={course} 
                              className="px-3 py-1.5 text-xs font-bold bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/50 hover:border-sky-500/50 hover:bg-zinc-800 hover:text-sky-400 transition-all duration-300 cursor-default"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

          <div className="relative pl-20 md:pl-28 pt-8">
            <div className="absolute left-8 md:left-12 top-0 w-2 h-2 rounded-full bg-sky-500/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;