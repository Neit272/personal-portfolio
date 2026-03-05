export const personalInfo = {
  name: "Tran Huynh Tien",
  title: "Information Security Student / Frontend Developer",
  avatar: "/images/avatar.jpg",
  intro: "An Information Security student with a strong passion for web development. I love building web applications focusing on smooth user experiences, optimal performance, and robust data management systems.",
  dob: "February 27, 2004", 
  gender: "Male",
  address: "Thu Duc, Ho Chi Minh City",
  email: "tranhuynhtien.work@gmail.com",
  phone: "(+84) 767533227",
  objective: "To become a comprehensive Frontend Developer by leveraging my knowledge of cybersecurity and software engineering to construct practical products that deliver significant value to users.",
  github: "https://github.com/Neit272",
  linkedin: "https://www.linkedin.com/in/trtieens/",
};

export const education = [
  {
    id: 1,
    school: "University of Information Technology - VNUHCM",
    major: "Information Security",
    gpa: "7.55 / 10",
    period: "Sep 2022 - Present",
  },
];

export const experience = [
  {
    id: 1,
    company: "Công ty TNHH Cơ Khí Tín Đạt",
    role: "Freelance Fullstack Developer",
    period: "Aug 2025 - Nov 2025",
    description: "Designed, developed, and deployed a B2B corporate and e-commerce platform from scratch. Architected a Headless CMS solution using Strapi v5 for dynamic content management. Developed a responsive front-end with Next.js 15, optimized for SEO and Core Web Vitals using SSR and ISR. Integrated Cloudinary for automated media optimization, improving overall site performance.",
  }
];

export const skills = {
  technical: [
    { name: "Python, C/C++", level: 85, category: "Language" },
    { name: "HTML, CSS, JavaScript, TypeScript", level: 85, category: "Language" },
    { name: "React, Next.js, Vite", level: 85, category: "Framework/Library" },
    { name: "Tailwind CSS, Shadcn UI", level: 85, category: "Framework/Library" },
    { name: "MySQL, MongoDB, PostgreSQL", level: 75, category: "Database" },
    { name: "Git, Wireshark, Burp Suite, Nmap", level: 80, category: "Tools" },
    { name: "Networking (TCP/IP, Routing, Firewall...)", level: 75, category: "Knowledge" },
    { name: "Security (Penetration Testing, Malware...)", level: 80, category: "Knowledge" },
  ],
  soft: [
    "Problem Solving",
    "Self-learning",
    "Systems Thinking",
  ],
  languages: [
    { name: "English", proficiency: "Comprehensive reading and writing skills" },
    { name: "Vietnamese", proficiency: "Native" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Movie Time",
    description: "Built a Single Page Application (SPA) that aggregates and normalizes movie/comic data from distributed sources to provide a seamless entertainment experience.",
    thumbnail: "/projects/movie-time.jpg", 
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "RESTful API", "Intersection Observer"],
    github: "https://github.com/Neit272/movie-time-for-you", 
    demo: "https://movie-time-for-you.vercel.app", 
  },
  {
    id: 2,
    title: "Euroma Tire",
    description: "Developed an intuitive B2B corporate website and product showcase platform for a tire business, emphasizing diverse product catalog management and optimizing customer search experience.",
    thumbnail: "/projects/euroma.jpg",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shadcn UI", "Strapi v5", "Cloudinary"],
    github: "https://github.com/Neit272/Euroma-Tire",
    demo: "https://euromatire.com", 
  },
];
