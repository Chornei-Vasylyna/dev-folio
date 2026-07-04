export const mockUser = {
  avatar: "",
  fullName: "Vasilina Kovalenko",
  specialty: "Frontend Developer",
  email: "vasilina.kovalenko@gmail.com",
  phone: "+380671234567",
  githubUrl: "https://github.com/vasilinadev",
  linkedinUrl: "https://www.linkedin.com/in/vasilinadev",
  telegramUrl: "https://t.me/vasilinadev",
  bio: `Frontend Developer focused on building responsive, accessible and performant web applications using React, Next.js and TypeScript. Passionate about clean architecture, reusable components and great user experience.`,

  skills:
    "HTML, CSS, SCSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js, React Hook Form, Zod, TanStack Query, Zustand, Git, GitHub, Figma",

  experience: [
    {
      position: "Frontend Developer Intern",
      company: "Tech Solutions",
      period: "Jun 2025 – Sep 2025",
      description:
        "Developed responsive interfaces using React and TypeScript, integrated REST APIs, fixed bugs and collaborated with designers to improve user experience.",
    },
    {
      position: "Freelance Frontend Developer",
      company: "Self-employed",
      period: "Oct 2025 – Present",
      description:
        "Built portfolio websites, landing pages and dashboard interfaces using Next.js, Tailwind CSS and modern frontend best practices.",
    },
  ],

  education: [
    {
      specialty: "Computer Science",
      institution: "Lviv Polytechnic National University",
      period: "2022 – Present",
      description:
        "Studying software engineering, databases, algorithms and web development while building real-world frontend projects.",
    },
  ],

  projects: [
    {
      name: "Portfolio Builder",
      description:
        "A resume and portfolio builder where users can manage personal information, projects, education and experience and export everything to PDF.",
      githubUrl: "https://github.com/vasilinadev/portfolio-builder",
      imageUrl: "",
      liveUrl: "https://portfolio-builder.vercel.app",
    },
    {
      name: "Task Manager",
      description:
        "A full-featured task management application with authentication, CRUD functionality, filtering and responsive UI.",
      githubUrl: "https://github.com/vasilinadev/task-manager",
      imageUrl: "",
      liveUrl: "https://task-manager.vercel.app",
    },
    {
      name: "Weather Dashboard",
      description:
        "Weather application with geolocation, search history and 5-day forecast powered by the OpenWeather API.",
      githubUrl: "https://github.com/vasilinadev/weather-dashboard",
      imageUrl: "",
      liveUrl: "https://weather-dashboard.vercel.app",
    },
  ],
};
