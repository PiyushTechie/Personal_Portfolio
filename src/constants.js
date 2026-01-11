export const ABOUT_ME = {
  name: "Piyush Prajapati",
  role: "Full Stack Developer",
  bio: "I craft clean, reliable, and intelligent digital experiences. Blending Java enterprise strength with the flexibility of the MERN stack, I build systems that are fast, secure, and ready to scale.",
  
  longBio: `
    I am a Full Stack Developer with a deep focus on performance, security, and scalability. Currently pursuing my Computer Science degree, I specialize in building robust applications using both the MERN stack (MongoDB, Express, React, Node.js) and expanding my expertise in Java ecosystem (Spring and SpringBoot).

    My journey involves solving complex problems—from optimizing database queries in my 'Stayzio' rental platform using Redis caching to implementing rigorous security protocols like Helmet and CSRF protection. I don't just write code; I architect solutions that are fast, secure, and user-centric.

    When I'm not developing web applications, I am refining my problem-solving skills through Data Structures & Algorithms or exploring the latest trends in cloud architecture and system design.
  `,
  
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com"
  }
};

export const PROJECTS = [
  {
    title: "Stayzio",
    desc: "A high-performance real-estate rental platform engineered for speed and security. Features include advanced search filtering, real-time booking management, and a secure user authentication system.",
    tags: ["Node.js", "EJS", "Javascript ES6+", "CSS", "MongoDB", "Express", "Rate Limiters","REST APIs", "Tailwind CSS", "Redis", "Websockets", "Socket.io", "Cloudinary", "MJML for Emails", "CSRF"],
    link: "https://stayzio-app.onrender.com",
    github: "https://github.com/PiyushTechie/Stayzio_FullStack",
    images: [
      "/project-images/stayzio1.png",  
      "/project-images/stayzio2.png",
      "/project-images/stayzio3.png",
      "/project-images/stayzio4.png",
      "/project-images/stayzio5.png",
      "/project-images/stayzio6.png",
      "/project-images/stayzio7.png",
      
    ]
  },
  {
    title: "Banking System",
    desc: "A secure, transactional banking application built with Java core technologies. Handles account management, fund transfers, and transaction history with strict ACID compliance via MySQL.",
    tags: ["Java Servlets", "JSP", "MySQL", "Apache Tomcat"],
    link: "#",
    github: "https://github.com/PiyushTechie/Banking-Management-System-JAVA"
  },
  {
    title: "Portfolio V2",
    desc: "An interactive, component-driven portfolio featuring a custom Bento Grid layout, hardware-accelerated animations, and a responsive glassmorphism design system.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#"
  }
];

export const SKILLS_CATEGORIES = {
  languages: ["JavaScript (ES6+)", "Java", "HTML5", "CSS3", "SQL"],
  frontend: ["React.js", "Tailwind CSS", "Framer Motion", "Redux", "Vite"],
  backend: ["Node.js", "Express.js", "Java Servlets", "JSP", "REST APIs"],
  database: ["MongoDB", "MySQL", "Redis"],
  tools: ["Git & GitHub", "Postman", "VS Code", "IntelliJ IDEA"]
};

export const SKILLS = [
  "React", "Node.js", "Java", "MongoDB", "MySQL", "Redis", "Express", "Tailwind CSS", "Git"
];