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
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "case-studies",
    title: "Case Studies",
  },
  {
    id: "contact",
    title: "Contact",
  },
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
      "Led development of scalable web and mobile products using React, Angular, Ionic, and Node.js.",
      "Designed and implemented microservices architecture with NestJS for modular, maintainable backend services.",
      "Built workflow automation pipelines with n8n to streamline integrations, notifications, and operational tasks.",
      "Implemented native mobile capabilities including push notifications, dynamic links, and deep-link routing.",
      "Built real-time chat and engagement modules with reliable event-driven backend processing.",
      "Led Meradian platform security hardening by implementing OWASP-aligned auth/sanitization controls, stronger password policy + 2FA, and CORS/SSRF protections across app and cloud layers.",
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
      "Case Study - Problem: The platform had runtime failures from schema/data mismatches, brittle auth/input handling, and incorrect bulk certificate generation. What I Built: I led full-stack hardening across mobile app, admin panel, and backend by adding idempotent DB migrations, fixing type/date mismatches, refining certificate logic to selected users only, and implementing region lifecycle management with soft deletes and guardrails. Impact: Eliminated critical flow-breaking errors, prevented unintended certificate issuance, and improved admin reliability and mobile usability.",
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
    name: "Meradian Platform Security & Auth Modernization",
    description:
      "Case Study - Problem: Security controls and auth behavior were inconsistent across UI, API boundaries, and cloud/network policy layers, increasing review and compliance risk. What I Built: Implemented OWASP-aligned hardening including sanitization in auth pages, stronger password policy with 2FA, and validated CORS/SSRF guardrails; also delivered consolidated architecture/security documentation and rollout playbooks. Impact: Reduced risk exposure, improved audit/compliance readiness, and lowered review-to-release friction for stakeholders.",
    tags: [
      {
        name: "Security Hardening",
        color: "blue-text-gradient",
      },
      {
        name: "2FA/Auth",
        color: "green-text-gradient",
      },
      {
        name: "CORS/SSRF",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
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
      "Case Study - Problem: A trucking marketplace (Uber-like for freight) needed reliable live operations, including background driver tracking and booking continuity under real-world mobile/network constraints. What I Built: Developed Ionic apps and backend-integrated workflows for real-time shipment visibility, background location tracking, push notifications, dynamic links/deep links, and booking flows for drivers and customers. Impact: Improved dispatch transparency and user engagement, while enabling stable production releases to both App Store and Play Store.",
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
    name: "Teleflex Product Performance",
    description:
      "Case Study - Problem: Product teams needed trustworthy performance reporting instead of fragmented operational data. What I Built: Implemented backend processing and API-driven reporting flows to normalize performance signals into dashboard-ready outputs with reliable data pipelines. Impact: Improved decision-making speed and confidence through clearer product-performance visibility.",
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
    name: "Campers",
    description:
      "Case Study - Problem: Event and sports-marketing workflows needed scalable digital support for athlete-led experiences, youth clinics, and stakeholder coordination. What I Built: Delivered platform modules and API integrations to support camp/clinic operations, participant-facing workflows, and brand-activation-aligned event management journeys. Impact: Enabled smoother event execution and stronger fan/participant experience across recurring programs.",
    tags: [
      {
        name: "Event Management",
        color: "blue-text-gradient",
      },
      {
        name: "Sports Marketing",
        color: "green-text-gradient",
      },
      {
        name: "Athlete Experiences",
        color: "pink-text-gradient",
      },
      {
        name: "Camps & Clinics",
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
      "Case Study - Problem: Teams lacked a consistent, role-aware document retrieval workflow, causing delays and access confusion. What I Built: Designed structured storage and search-focused APIs with role-based access flows for secure collaboration and faster retrieval. Impact: Improved document discoverability, reduced manual lookup overhead, and strengthened governance for shared records.",
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

const caseStudies = [
  {
    title: "MeridianSync",
    problem:
      "Runtime failures from schema/data mismatches, brittle auth/input handling, and incorrect bulk certificate generation.",
    solution:
      "Led full-stack hardening with idempotent migrations, type/date sanitization, certificate eligibility fixes, and region lifecycle management with guardrails.",
    impact:
      "Eliminated critical flow-breaking errors, prevented unintended certificate issuance, and improved admin reliability and mobile usability.",
    stack: ["Node.js", "Express", "Sequelize", "PostgreSQL", "Angular", "Ionic", "AWS", "Firebase"],
  },
  {
    title: "Meradian Platform Security & Auth Modernization",
    problem:
      "Inconsistent security controls across frontend, API boundaries, and cloud/network policies increased compliance and release risk.",
    solution:
      "Implemented OWASP-aligned hardening: sanitization in auth flows, stronger password policy + 2FA, CORS/SSRF guardrails, and consolidated architecture/security implementation docs.",
    impact:
      "Reduced risk exposure, improved audit/compliance readiness, and lowered review-to-release friction across teams.",
    stack: ["Node.js", "AWS", "AuthN/AuthZ", "2FA", "CORS", "SSRF Protection"],
  },
  {
    title: "Lorryz (Uber-like for Freight)",
    problem:
      "A trucking marketplace needed reliable background location tracking and operational continuity under real-world mobile/network constraints.",
    solution:
      "Built Ionic apps and backend-integrated workflows for real-time shipment visibility, background tracking, push notifications, dynamic links/deep links, and booking flows.",
    impact:
      "Improved dispatch transparency and user engagement while supporting stable production releases on both App Store and Play Store.",
    stack: ["Ionic", "Angular", "Node.js", "Realtime Tracking", "Push Notifications", "Dynamic Links"],
  },
  {
    title: "Teleflex Product Performance",
    problem:
      "Product teams lacked reliable, unified performance reporting and were making decisions from fragmented operational data.",
    solution:
      "Implemented backend processing and API-driven reporting pipelines that normalized raw performance signals into dashboard-ready outputs.",
    impact:
      "Improved decision-making speed and confidence through cleaner product-performance visibility.",
    stack: ["Node.js", "PostgreSQL", "AWS", "REST APIs"],
  },
  {
    title: "Meridian Document Library",
    problem:
      "Teams had inconsistent, role-unsafe document retrieval workflows that slowed collaboration and increased lookup effort.",
    solution:
      "Designed structured storage and search-focused APIs with role-based access behavior for secure and predictable document workflows.",
    impact:
      "Improved document discoverability, reduced manual lookup overhead, and strengthened governance of shared records.",
    stack: ["Node.js", "PostgreSQL", "AWS S3", "REST APIs"],
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
  caseStudies,
  education,
  testimonials
};
