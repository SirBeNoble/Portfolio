import { coursera, ztm, thm, solo } from "../assets/images";
import {
    // car,
    contact,
    css,
    estate,
    // express,
    git,
    github,
    html,
    javascript,
    linkedin,
    // mongodb,
    // motion,
    // mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    // redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Google Cybersecurity",
        company_name: "Coursera",
        icon: coursera,
        iconBg: "#0056D2", // #accbe1
        date: "September 2023",
        points: [
            "Learned the importance of cybersecurity practices and their impact for organizations",
            "Identify common risks, threats, and vulnerabilities, as well as techniques to mitigate them.",
            "Gained hands-on experience with Python, Linux, and SQL.",
        ],
    },
    {
        title: "Pre Security Learning Path",
        company_name: "Try Hack Me",
        icon: thm,
        iconBg: "white", // #fbc3bc
        date: "September 2023",
        points: [
            "Cyber security basics",
            "Networking basics and weaknesses",
            "The web and common attacks",
        ],
    },
    {
        title: "Introduction to Cyber Security Learning Path",
        company_name: "Try Hack Me",
        icon: thm,
        iconBg: "white", // #b7e4c7
        date: "September 2023",
        points: [
            "Learned the basic offensive security concepts",
            "Exposure to defensive security and protect a system by blocking an on ongoing cyber attack",
        ],
    },
    {
        title: "SOC Level 1 Learning Path",
        company_name: "Try Hack Me",
        icon: thm,
        iconBg: "white", // #a2d2ff
        date: "October 2023",
        points: [
            "Detect and analyze traffic anomalies",
            "Monitor endpoints for threats",
            "Utilise SIEM tools to handle incidents",
        ],
    },
    {
        title: "Python Developer",
        company_name: "Sololearn",
        icon: solo,
        iconBg: "white",
        date: "October 2023",
        points: [
            "Learned to build interactive programs and automate your tasks.",
            "Analyzed and visualized even the most complex data.",
            "Created AI and machine learning models.",
        ],
    },
    {
        title: "Python Intermediate",
        company_name: "Sololearn",
        icon: solo,
        iconBg: "white",
        date: "October 2023",
        points: [
            "Learned how to build complex programs using Python's built-in collection data types.",
            "Created programs that interface with files to read and write information.",
        ],
    },
    {
        title: "Introduction to SQL",
        company_name: "Sololearn",
        icon: solo,
        iconBg: "white",
        date: "October 2023",
        points: [
            "Used SQL standardized database language to access and manipulate data stored in databases.",
        ],
    },
    {
        title: "SQL Intermediate",
        company_name: "Sololearn",
        icon: solo,
        iconBg: "white",
        date: "October 2023",
        points: [
            "Used SQL standardized database language to easily deal with more than on table.",
            "Mastered the process of data manipulation and worked with complex interrelated mult-table databases.",
        ],
    },
    {
        title: "Web Development",
        company_name: "Sololearn",
        icon: solo,
        iconBg: "white",
        date: "October 2023",
        points: [
            "Covers HTML, CSS, and JavaScript, the core technologies for building interactive and responsive web pages.",
        ],
    },
    {
        title: "Complete Python Developer",
        company_name: "Zero To Mastery",
        icon: ztm,
        iconBg: "white",
        date: "March 2024",
        points: [
            "Learned Data Science with Python to analyze and visualize data.",
            "Master modern Python fundamentals as well as advance topics.",
            "Built a machine learning model.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SirBeNoble',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Yoom Video App',
        description: 'A Zoom application clone using Next JS, Typescript, Tailwind CSS, Stream, Clerk and ShadCN. With everything from authentication, creating personal rooms to endless meeting controls and a list of all previous meetings.',
        link: 'https://joom-video-app.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'LiveDocs',
        description: 'A Google Live Doc application clone using Next JS, Typescript, Tailwind CSS, Liveblocks and ShadCN. A fully responsive web application across all devices that even gives users the feature of inviting anyone to work on you r document with you.',
        link: 'https://live-docs-phi-nine.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Noble Chat Bot',
        description: 'A friendly chat bot made with Groq and Ollama named NOBLE. NOBLE is a powerful LLM that can answer all your questions.',
        link: 'https://noblechatbot.streamlit.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: '3D T-Shirt Shtore',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://jermaines3dtshirts.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Nike Shoe Store',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://jermainesnikeshoestore.netlify.app/',
    }
];