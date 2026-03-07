
const sections = [
    { id: '#about', label: 'About' },
    { id: '#experience', label: 'Experience' },
    { id: '#education', label: 'Education' },
    { id: '#projects', label: 'Projects' }
];

const socials = [
    { name: 'github', label: 'GitHub', url: 'https://github.com/aladin20c' },
    { name: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/aladin-cheniour/' },
    //{ name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/bchiang7/' },
    { name: 'goodreads', label: 'Goodreads', url: 'https://www.goodreads.com/user/show/101887216-aladin' }
];

const experiences = [
    {
        date: "2023 - Present",
        role: "Creative Developer",
        company: "Studio AI",
        companyLink: "https://example.com",
        description: "Designing and building immersive WebGL experiences and integrating computer vision models into real-time browser applications.",
        techs: ["Three.js", "WebGL", "TensorFlow.js", "Lit"]
    },
    {
        date: "2021 - 2023",
        role: "Software Engineering Intern",
        company: "TechNova",
        companyLink: "https://example.com",
        description: "Assisted in migrating legacy dashboard interfaces to modern Web Components. Optimized build pipelines to reduce deployment times.",
        techs: ["JavaScript", "HTML/CSS", "Webpack", "Python"]
    },
    {
        date: "2020 - 2021",
        role: "Freelance Web Developer",
        company: "Self-Employed",
        companyLink: "#",
        description: "Developed responsive, accessible portfolio sites and e-commerce platforms for local artists and small businesses.",
        techs: ["React", "Tailwind CSS", "Figma"]
    }
];


const education = [
    {
        period: "2019 — 2022",
        degree: "Master of Science",
        field: "Human-Computer Interaction",
        institution: "Stanford University",
        institutionLink: "https://stanford.edu",
        grade: "Distinction · 4.0 GPA",
        thesis: "Designing Adaptive Interfaces for Cognitive Load Management",
        achievements: [
            "Published research on gesture-based interactions in CHI 2022",
            "Teaching assistant for Advanced UX Design course",
            "Developed prototype for AR navigation system"
        ]
    },
    {
        period: "2015 — 2019",
        degree: "Bachelor of Fine Arts",
        field: "Interactive Design",
        institution: "Rhode Island School of Design",
        institutionLink: "https://risd.edu",
        grade: "Honors · Magna Cum Laude",
        achievements: [
            "Senior thesis awarded 'Most Innovative Design'",
            "President of Design Club",
            "Internship at IDEO"
        ]
    }
];



// projects.js
const projects = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio website built with Lit components and vanilla CSS. Features responsive design, dark mode, and interactive UI elements.",
        techs: ["Lit", "JavaScript", "CSS", "HTML"],
        image: "/images/portfolio.jpg",  // Optional: path to image
        githubLink: "https://github.com/yourusername/portfolio",  // Optional
        demoLink: "https://yourportfolio.com"  // Optional
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application that displays current conditions and 5-day forecast for any city. Uses OpenWeatherMap API.",
        techs: ["JavaScript", "API Integration", "CSS Grid"],
        // No image - will show placeholder with first letter
        githubLink: "https://github.com/yourusername/weather-app",
        demoLink: "https://weather-demo.netlify.app"
    },
    {
        title: "Command Line Tool",
        description: "A developer productivity tool that automates common Git workflows and project setup tasks.",
        techs: ["Node.js", "TypeScript", "Commander.js", "Jest"],
        // No image, no demo - just GitHub
        githubLink: "https://github.com/yourusername/cli-tool"
    }
];

export {sections,socials,experiences,education,projects};
