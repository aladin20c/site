
const sections = [
    { id: '#about', label: 'About' },
    { id: '#experience', label: 'Experience' },
    { id: '#education', label: 'Education' },
    { id: '#projects', label: 'Projects' }
];


const socials = [
    { name: 'github', label: 'GitHub', url: 'https://github.com/aladin20c' },
    { name: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/aladin-cheniour/' },
    { name: 'goodreads', label: 'Goodreads', url: 'https://www.goodreads.com/user/show/101887216-aladin' },
    //{ name: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/bchiang7/' },
];

const experiences = [
    {
        date: "2025 — Present",
        role: "Medical HCI Research Intern",
        company: "Dassault Systèmes",
        companyLink: "https://www.3ds.com/science/meditwin",
        description: "Researching innovative HCI tools and 2D/3D visualization methods for medical viewers for surgical planning. Developing manipulation tools for medical data and exploring remote rendering and optimisation techniques for volumetric rendering.",
        techs: ["DICOM", "FHIR", "VTK", "WebGL", "Lit"]
    },
    {
        date: "April — Aug 2025",
        role: "Full-Stack Software Engineer",
        company: "Ouidou",
        companyLink: "https://www.ouidou.fr",
        description: "Collaborated with multi-disciplinary teams to maintain and implement major features. Optimized application performance by resolving bottlenecks in backend queries and frontend rendering.",
        techs: ["Node.js","Angular", "Spring Boot", "React", "PostgreSQL"]
    },
    {
        date: "Sept 2024 — June 2025",
        role: "Academic Tutor",
        company: "Polytech Paris Saclay",
        companyLink: "https://www.polytech.universite-paris-saclay.fr",
        description: "Led tutoring sessions at polytech for first and second-year engineering students in Computer Science, Mathematics, and Physics.",
        techs: ["Algorithms", "Math", "C++", "Physics"]
    },
    {
        date: "June — Aug 2024",
        role: "Software Engineer Intern",
        company: "SMA BTP",
        companyLink: "https://www.smabtp.fr",
        description: "Automated file submission and testing workflows by developing Selenium scripts. Interfaced with developers to ensure coherent UX across internal tools.",
        techs: ["Selenium", "Angular", "Spring Boot"]
    },
    {
        date: "July — Aug 2022",
        role: "Software Engineer Intern",
        company: "SEABEX",
        companyLink: "https://seabex.com",
        description: "Developed and maintained Python programs for processing and analyzing satellite-collected agricultural data.",
        techs: ["Python", "PyTorch", "OpenCV"]
    }
];


const education = [
    {
        period: "2025 — 2026",
        degree: "Master of Science",
        field: "Interaction, Computer Graphics & Design",
        institution: "Institut Polytechnique de Paris",
        institutionLink: "https://www.ip-paris.fr",
        grade: "Palaiseau, France",
        // Added your specific research focus here
        thesis: "Innovative Visualization and Manipulation Tools and 3D rendering techniques for Medical Data",
        achievements: [
            "Research focus: Enhancing practitioner efficiency via advanced 2D/3D medical viewers",
            "Exploring remote rendering for high-fidelity convergence algorithms",
            "Courses: Computer Vision, Deep Learning, Virtual Humans"
        ]
    },
    {
        period: "2023 — 2026",
        degree: "Engineering Degree",
        field: "Mathematics & Computer Science",
        institution: "Polytech Paris Saclay",
        institutionLink: "https://www.polytech.universite-paris-saclay.fr",
        grade: "Orsay, France",
        achievements: [
            "Courses Included : Advanced Database Management, Computer Networks, Machine Learning, Computer Architecture and Web Development",
            "Won the Polytech Rendering Competition Award 2024"
        ]
    },
    {
        period: "July — Aug 2023",
        degree: "Summer School",
        field: "Game Design & Development",
        institution: "Turku University",
        institutionLink: "https://www.utu.fi/en",
        grade: "Turku, Finland",
        achievements: [
            "Intensive program in Game Design principles",
            "Game development using the Unity engine"
        ]
    },
    {
        period: "2021 — 2023",
        degree: "Bachelor of Science (L1-L2)",
        field: "Mathematics & Computer Science",
        institution: "University of Paris City",
        institutionLink: "https://u-paris.fr",
        grade: "Paris, France",
        achievements: [
            "Foundational courses in Mathematics and Computational Theory",
            "Courses included : Linear Algebra, Discrete Math, Topology, Logic, OOP, Functional Programming, etc."
        ]
    }
];



// projects.js
const projects = [
    {
        title: "Cursor-Tracking HeatMap",
        description: "Chrome extension capturing user cursor behavior during live sessions to visualize interactions via heatmaps and detailed user paths for UX optimization.",
        techs: ["JavaScript", "Chrome API", "Data Visualization"],
        image: "./public/assets/img1.png",
        githubLink: "https://github.com/aladin20c/cursor-tracker-quant-ux"
    },
    {
        title: "Computer Vision Pipeline For Chess",
        description: "Computer vision system that identifies piece positions on a physical chessboard from a photo to reconstruct the digital game state.",
        techs: ["Python", "OpenCV", "Computer Vision"],
        image: "./public/assets/img2.png",
        githubLink: "https://github.com/aladin20c/chess_computer_vision"
    },
    {
        title: "Carbon Footprint Calculator",
        description: "Mobile application for Viveris to calculate environmental impact, featuring a robust backend and cross-platform mobile UI.",
        techs: ["Spring Boot","React" ,"React Native", "Java"],
        image: "./public/assets/img3.png",
        githubLink: "https://github.com/aladin20c/eco-boost-campus"
    }
];

export {sections,socials,experiences,education,projects};
