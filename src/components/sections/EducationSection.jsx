import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, Star, TrendingUp } from "lucide-react";

const SpotlightCard = ({ children }) => {
  return (
    <div className="relative group">
      {children}
    </div>
  );
};

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
    school: "Thakur College of Engineering",
    year: "2024 - 2028",
    desc: "Focused on Data Structures, Algorithms, and System Design. Documentation team member at TCET Shastra Coding Club.",
    gpa: "9.58", 
    gradeLabel: "CGPA",
    courses: ["OS & Networks", "DBMS", "Java OOPs", "Web Dev", "Python"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Bhavans Junior College, Mumbai",
    year: "2022 - 2024",
    desc: "Specialized in Science (PCM) + Electronics. Developed a strong foundation in mathematics and logic building.",
    gpa: "81.5%",
    gradeLabel: "Percentage", 
    courses: ["Mathematics", "Electronics", "Physics", "Chemistry", "English"]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Smt.Rajrani Malhotra Vidyalaya, Mumbai",
    year: "2012-2022",
    desc: "Completed secondary education with distinction.",
    gpa: "87.60%",
    gradeLabel: "Percentage",
    courses: ["Mathematics", "Science", "Social Sciences"]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_65%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
            <TrendingUp size={16} className="text-sky-400" />
            <span className="text-sm font-semibold text-sky-400">Academic Journey</span>
          </div>
          <h2 className="text-5xl md:text-1xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">Education</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            My Academic Journey throughout the years.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-sky-500/30 to-transparent"></div>

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative pl-16 md:pl-28">
                <div className="absolute left-5 md:left-10 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-zinc-950 border-4 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.5)] z-10">
                  <div className="absolute -inset-2 rounded-full bg-sky-500/20 animate-pulse"></div>
                </div>

                <div className="absolute left-12 md:left-20 top-4 z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1 rounded-md bg-zinc-900 border border-sky-500/30 shadow-lg">
                    <Calendar size={12} className="text-sky-400" />
                    <span className="text-xs font-bold text-sky-400">{edu.year}</span>
                  </div>
                </div>

                <SpotlightCard>
                  <div className="relative mt-12 bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-zinc-800 overflow-hidden hover:border-sky-500/40 transition-all duration-500 group">
                    <div className="h-1 bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="p-4 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                        <div className="flex items-start gap-3 md:gap-4 flex-1">
                          <div className="p-2 md:p-3 bg-gradient-to-br from-sky-500/20 to-sky-500/5 rounded-xl border border-sky-500/30 flex-shrink-0">
                            <GraduationCap className="text-sky-400" size={24} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-sky-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-zinc-400 text-xs md:text-sm font-medium">
                              {edu.school}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 self-start">
                          <Award size={16} className="text-sky-400" />
                          <div>
                            <div className="text-xs text-zinc-400 font-medium">{edu.gradeLabel}</div>
                            <div className="text-sm font-bold text-white">{edu.gpa}</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 pl-0 md:pl-16">
                        {edu.desc}
                      </p>

                      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-6"></div>

                      <div className="pl-0 md:pl-16">
                        <div className="flex items-center gap-2 mb-3">
                          <Star size={14} className="text-sky-400" />
                          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Key Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span 
                              key={course} 
                              className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs font-medium bg-zinc-800/60 text-zinc-300 rounded-lg border border-zinc-700/50 hover:border-sky-500/50 hover:bg-zinc-800 hover:text-sky-400 transition-all duration-300 cursor-default"
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