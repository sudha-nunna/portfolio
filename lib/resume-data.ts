// Professional corporate resume data

export const profile = {
  name: "Sudha Nunna",
  title: "Full Stack Developer – MERN Stack",
  email: "nunnasudha03@gmail.com",
  phone: "+91 8247526925",
  location: "Vijayawada, Andhra Pradesh, India",
  summary:
    "Full Stack Developer with expertise in MERN stack technologies, specializing in scalable web applications and RESTful API development. Proven experience in production environments with focus on performance optimization and system architecture.",
  professionalSummary:
    "Experienced Full Stack Developer specializing in MERN stack development with demonstrated expertise in building scalable web applications, implementing secure authentication systems, and optimizing database performance. Strong background in API development, system architecture, and collaborative development practices.",
  strengths: ["MERN Stack Development", "API Architecture", "System Scalability", "Performance Optimization"],
  links: {
    linkedin: "https://www.linkedin.com/in/sudha-nunna/",
    github: "https://github.com/sudha-nunna",
    portfolio: "",
  },
}

// Professional skills categorization - no icons, clean text only
export const skillCategories = {
  "Frontend": [
    "HTML5",
    "CSS3", 
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT Authentication",
    "API Design"
  ],
  "Databases": [
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Redis",
    "Database Optimization"
  ],
  "Languages": [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "SQL"
  ],
  "Tools": [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Postman",
    "Cursor"
  ]
}

export const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Express.js", "Python", "Java", "SQL", "MongoDB", "Mongoose", "PostgreSQL", 
  "Redis", "Git", "GitHub", "Visual Studio Code", "Postman", "Cursor", "RESTful APIs", "JWT Authentication"
]

export const certifications = [
  { name: "Python Programming", issuer: "Guvi" },
  { name: "Frontend Development (HTML, CSS, JavaScript)", issuer: "AWS Community Builders" },
  { name: "Full Stack Development", issuer: "Apna College" },
]

// Professional project descriptions - SaaS case study style
export const projects = [
  {
    name: "Micro SaaS Inventory Management System",
    description: "Enterprise-grade inventory management platform built for small to medium businesses with real-time tracking, automated reporting, and integrated payment processing.",
    keyContributions: [
      "Architected scalable MERN stack application serving 500+ concurrent users",
      "Implemented secure JWT authentication and role-based access control",
      "Developed real-time inventory tracking with WebSocket integration",
      "Integrated Stripe API for subscription billing and payment processing",
      "Optimized MongoDB queries reducing response time by 40%"
    ],
    tech: ["Next.js", "Node.js", "Express.js", "React.js", "MongoDB", "Stripe API", "WebSocket"],
    category: "Full Stack",
    featured: true,
    liveUrl: "",
    githubUrl: "https://github.com/sudha-nunna/Microsaas_project.git",
  },
  {
    name: "Healthcare Price Comparison Platform",
    description: "Comprehensive healthcare platform enabling price transparency, appointment booking, and provider reviews for improved patient decision-making.",
    keyContributions: [
      "Built scalable price comparison engine with advanced filtering capabilities",
      "Developed appointment booking system with calendar integration",
      "Implemented provider review and rating system with moderation",
      "Created responsive UI optimized for mobile and desktop platforms",
      "Integrated third-party APIs for real-time pricing data"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    category: "Full Stack",
    featured: false,
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "11+ SmartPrep Educational Platform",
    description: "Educational technology platform for UK students preparing for 11+ entrance exams with adaptive learning and progress analytics.",
    keyContributions: [
      "Developed MERN-based learning management system",
      "Designed RESTful APIs for multi-tenant architecture",
      "Built comprehensive analytics dashboard for performance tracking",
      "Implemented adaptive learning algorithms for personalized content",
      "Optimized system architecture for high concurrent user loads"
    ],
    tech: ["Next.js", "Node.js", "Express.js", "React.js", "MongoDB", "TypeScript"],
    category: "Full Stack",
    featured: true,
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "E-Commerce Frontend Application",
    description: "Modern e-commerce frontend with dynamic cart management, product catalog, and responsive design optimized for conversion.",
    keyContributions: [
      "Built responsive e-commerce interface using React.js and Vite",
      "Implemented dynamic shopping cart with real-time calculations",
      "Developed advanced product filtering and search functionality",
      "Created wishlist and user preference management system",
      "Optimized performance achieving 95+ Lighthouse scores"
    ],
    tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    featured: false,
    liveUrl: "",
    githubUrl: "",
  },
]

// Professional experience with impact-driven descriptions
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Datavalley Inc.",
    period: "June 2025 – Present",
    location: "Remote",
    project: "11 Plus SmartPrep Platform",
    points: [
      "Developed and deployed MERN-based educational platform serving 1000+ students across UK schools",
      "Architected RESTful APIs enabling seamless collaboration between schools, tutors, and students",
      "Optimized system performance achieving 99.9% uptime and 2s average response time",
      "Implemented scalable database architecture supporting concurrent user sessions",
      "Collaborated with cross-functional teams using Agile methodologies and Git workflows"
    ],
  },
]

export const education = [
  {
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    school: "Vijaya Institute of Technology for Women",
    period: "2021 - 2025",
    location: "Vijayawada, Andhra Pradesh",
    gpa: "CGPA: 8.07",
  },
  {
    degree: "Intermediate Education",
    school: "Narayana Junior College", 
    period: "2019 - 2021",
    location: "Vijayawada, Andhra Pradesh",
    gpa: "CGPA: 9.02",
  },
  {
    degree: "Secondary Education",
    school: "Kalidindi Public School",
    period: "2018 - 2019", 
    location: "Kalidindi, Andhra Pradesh",
    gpa: "CGPA: 9.7",
  },
]
