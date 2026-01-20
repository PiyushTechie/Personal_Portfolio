// src/components/EducationSection.jsx
import React from "react";
import { Timeline } from "../ui/timeline"; 
import { GraduationCap, Award, TrendingUp } from "lucide-react";

const EDUCATION = [
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Smt.Rajrani Malhotra Vidyalaya",
    logo: "https://content.jdmagicbox.com/v2/comp/mumbai/e4/022pxx22.xx22.161118155853.r7e4/catalogue/smt-raj-rani-malhotra-vidyalaya-andheri-west-mumbai-schools-645cc14po4.jpg",
    year: "2012 - 2022",
    desc: "Completed secondary education with distinction.",
    gpa: "87.60%",
    gradeLabel: "Percentage",
    courses: ["Mathematics", "Science", "Social Sciences"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Bhavans Junior College, Mumbai",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66UA2EYgB-1BPkaf-ndmCcomRKJFrLl9XLQ&s",
    year: "2022 - 2024",
    desc: "Specialized in Science (PCM) + Electronics. Developed a strong foundation in mathematics and logic building.",
    gpa: "81.5%",
    gradeLabel: "Percentage",
    courses: ["Mathematics", "Electronics", "Physics", "Chemistry", "English"],
  },
  {
    degree: "Bachelor of Technology in AI & ML",
    school: "Thakur College of Engineering",
    logo: "https://images.shiksha.com/mediadata/images/1489300063phpA1CPrW.jpeg",
    year: "2024 - 2028",
    desc: "Focused on Data Structures, Algorithms, and System Design. Documentation team member at TCET Shastra Coding Club.",
    gpa: "9.58",
    gradeLabel: "CGPA",
    courses: ["OS & Networks", "DBMS", "Java OOPs", "Web Dev", "Python"],
  },
];

const EducationSection = () => {
  const data = EDUCATION.map((edu) => ({
    title: edu.year,
    content: (
      <div className="relative pl-2 group">
        <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-sky-500/30 transition-colors duration-500 shadow-xl">
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="shrink-0">
               <div className="w-20 h-20 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center overflow-hidden p-2">
                 {edu.logo ? (
                   <img 
                     src={edu.logo} 
                     alt={edu.school} 
                     className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                   />
                 ) : (
                   <GraduationCap className="text-sky-500" />
                 )}
               </div>
            </div>

            <div className="flex-1">
              <h4 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2 group-hover:text-sky-400 transition-colors font-['EB_Garamond',_serif]">
                {edu.degree}
              </h4>
              <p className="text-zinc-400 text-base font-sans font-medium mb-3">{edu.school}</p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20">
                <Award size={14} className="text-sky-400" />
                <span className="text-xs font-bold text-sky-400 font-sans">
                  {edu.gradeLabel}: {edu.gpa}
                </span>
              </div>
            </div>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-['EB_Garamond',_serif]">
            {edu.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {edu.courses.map((course, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 text-sm font-semibold bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700 hover:text-zinc-200 hover:border-zinc-600 transition-colors font-sans"
              >
                {course}
              </span>
            ))}
          </div>

        </div>
      </div>
    ),
  }));

  return (
    <section className="w-full bg-zinc-950 font-['EB_Garamond',_serif] py-24" id="education">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6 font-sans">
          <TrendingUp size={16} className="text-sky-400" />
          <span className="text-sm font-semibold text-sky-400">Academic Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600">Education</span>
        </h2>
        <p className="text-zinc-300 text-2xl max-w-xl mx-auto italic">
          The academic milestones that have shaped my technical foundation and professional growth.
        </p>
      </div>

      <Timeline data={data} />
    </section>
  );
};

export default EducationSection;