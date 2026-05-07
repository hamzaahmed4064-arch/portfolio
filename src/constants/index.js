import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  // html,  // unused - not in Tech.jsx
  // css,   // unused - not in any array
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  // git,   // unused - not in any array
  otu,
  uol,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  lorryz,
  whmis,
  aws,
  azure,
  python,
  cplusplus,
  typescript,
  axelotlanding,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  // metasploit,  // unused - not in Tech.jsx
  johntheripper,
  // hydra,       // unused - not in Tech.jsx
  // aircrackng,  // unused - not in Tech.jsx
  photoshop,
  premiere,
  cinema4d,
  // blender,  // unused - not in Tech.jsx
  connectwisecert,
  awsdbcert,
  // financialflowimage,
  // enterpriseapitester,
  atsscreenerlanding,
  github,
  mongodb,
  microsoft,
  cinnova,
  ibm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "Senior Full Stack Developer",
    icon: fullstack,
  },
  {
    title: "Mobile App Development",
    icon: backend,
  },
  {
    title: "Microservices Architecture",
    icon: mobile,
  },
  {
    title: "Cloud Deployment",
    icon: web,
  },
];

const education = [
  {
    title: "Bachelor of Software Engineering",
    company_name: "University of Lahore",
    icon: uol,
    iconBg: "#fff",
    date: "Completed",
    points: [
      "Focused on software engineering fundamentals and full-stack development.",
      "Applied coursework in real-world product development and architecture decisions.",
    ],
  },
];

const technologies = [
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: reactjs,
  },
  {
    name: "Ionic",
    icon: mobile,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node.js",
    icon: backend,
  },
  {
    name: "NestJS",
    icon: backend,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: google,
  },
  {
    name: "Firebase Cloud Functions",
    icon: google,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  // {
  //   name: "Metasploit",
  //   icon: metasploit,
  // },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  // {
  //   name: "Hydra",
  //   icon: hydra,
  // },
  // {
  //   name: "Aircrack-ng",
  //   icon: aircrackng,
  // },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  // {
  //   name: "Blender",
  //   icon: blender,
  // },
];

const experiences = [
  {
    title: "Team Lead / Full Stack Developer",
    company_name: "Cinnova Technologies",
    icon: cinnova,
    iconBg: "#fff",
    date: "Dec 2022 - Present",
    points: [
      "Led development of scalable web and mobile products using React Native, React, Angular, Ionic, and Node.js.",
      "Designed and implemented microservices architecture with NestJS for modular, maintainable backend services.",
      "Built workflow automation pipelines with n8n to streamline integrations, notifications, and operational tasks.",
      "Used AI-assisted development workflows with Cursor and Claude for faster delivery, refactoring, and quality improvements.",
      "Implemented native mobile capabilities including push notifications, dynamic links, and deep-link routing.",
      "Built real-time chat and engagement modules with reliable event-driven backend processing.",
      "Developed serverless handlers and background processes using Firebase Cloud Functions.",
      "Architected secure REST APIs and optimized performance for production-scale traffic and reliability.",
      "Managed App Store / Play Store deployments, release versioning, and AWS operations (EC2, S3, Lambda, CloudWatch).",
      "Mentored engineers, enforced clean code standards, and guided technical decisions for long-term scalability.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Lorryz",
    icon: lorryz,
    iconBg: "#fff",
    date: "Jan 2021 - Nov 2022",
    points: [
      "Built a logistics platform connecting shippers and carriers across mobile and web.",
      "Developed Ionic apps for drivers and customers with real-time tracking.",
      "Implemented push notifications, booking workflows, dynamic links, and location-based services.",
      "Delivered native integrations for device capabilities and improved user engagement in production.",
      "Integrated backend APIs and optimized data synchronization performance.",
      "Supported deployments to Play Store and App Store.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Elk Tech",
    icon: otu,
    iconBg: "#fff",
    date: "Oct 2019 - Dec 2020",
    points: [
      "Developed frontend and backend features with Angular and Node.js.",
      "Built and maintained APIs and reusable UI components.",
      "Contributed to clean architecture and scalable code practices.",
    ],
  },
];


const extracurricular = [
  {
    title: "Agile / Scrum Delivery",
    type: "Engineering Practice",
    icon: microsoft,
    iconBg: "#000000",
    date: "Core Practice",
    points: [
      "Experience collaborating in Agile/Scrum teams and delivering iteratively from planning to production.",
    ],
    credential: "https://www.atlassian.com/agile",
  },
  {
    title: "REST API Design & Integration",
    type: "Engineering Practice",
    icon: backend,
    iconBg: "#000000",
    date: "Core Practice",
    points: [
      "Strong understanding of clean API contracts, integration patterns, and scalable backend architecture.",
    ],
    credential: "https://restfulapi.net/",
  },
  {
    title: "CI/CD, Testing, and Reliability",
    type: "Engineering Practice",
    icon: aws,
    iconBg: "#000000",
    date: "Core Practice",
    points: [
      "Familiar with CI/CD workflows, unit/integration testing concepts, and production issue resolution.",
    ],
    credential: "https://aws.amazon.com/devops/what-is-devops/",
  },
];

const projects = [
  {
    name: "MeridianSync",
    description:
      "Event management platform delivered as a complete system (mobile app, admin panel, and backend). Built for real-time engagement with sessions, chat, notifications, and geofencing, while handling production constraints around background location services.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: atsscreenerlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "Lorryz",
    description:
      "Logistics platform connecting shippers and carriers through mobile and web products. Included Ionic apps for drivers and customers, real-time tracking, and booking workflows integrated with backend APIs.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Realtime Tracking",
        color: "blue-text-gradient",
      },
    ],
    image: axelotlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "FarmGhar",
    description:
      "Livestock marketplace mobile app with listings, chat, and notification workflows. Led full deployment lifecycle from implementation to production release and support.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "Mobile Marketplace",
        color: "green-text-gradient",
      },
      {
        name: "Chat/Notifications",
        color: "pink-text-gradient",
      },
      {
        name: "Deployment",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "Cincy Local and Live",
    description:
      "Client platform focused on local discovery and live experiences. Built with scalable backend services, responsive UX, and production-ready deployment workflows.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Microservices",
        color: "blue-text-gradient",
      },
    ],
    image: atsscreenerlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "Tech Society Mobile Application",
    description:
      "Mobile application for community engagement, announcements, and event workflows. Delivered cross-platform with robust API integration and notification support.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: axelotlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "Teleflex Product Performance",
    description:
      "Data-driven performance tracking solution for product analytics and reporting. Designed to support business monitoring with reliable backend processing and dashboard-ready outputs.",
    tags: [
      {
        name: "Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "REST APIs",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "Procamps",
    description:
      "Client product focused on operational workflows and user engagement. Implemented full-stack modules with secure APIs, scalable architecture, and cloud deployment support.",
    tags: [
      {
        name: "NestJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Microservices",
        color: "blue-text-gradient",
      },
    ],
    image: atsscreenerlanding,
    source_code_link: "",
    live_project_link: "",
  },
  {
    name: "Meridian Document Library",
    description:
      "Document management and retrieval platform built for organized access and collaboration. Included structured storage, search-friendly APIs, and role-aware workflows.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "AWS S3",
        color: "pink-text-gradient",
      },
      {
        name: "REST APIs",
        color: "blue-text-gradient",
      },
    ],
    image: securebankdashboard,
    source_code_link: "",
    live_project_link: "",
  },
];

const testimonials = [
  {
    testimonial:
      "Hamza consistently delivers reliable full-stack solutions with a strong focus on production quality, scalability, and maintainable architecture.",
    name: "Engineering Collaborator",
    designation: "Product Team",
    company: "Cinnova Technologies",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "From mobile app experience to backend APIs, Hamza combines hands-on execution with leadership. He is strong in Angular, Ionic, Node.js, and cloud deployment workflows.",
    name: "Technical Stakeholder",
    designation: "Engineering Leadership",
    company: "Lorryz",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Hamza is proactive in solving real-world performance and deployment issues. He communicates clearly, mentors teammates, and helps teams ship stable products faster.",
    name: "Project Partner",
    designation: "Delivery Team",
    company: "Elk Tech",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
