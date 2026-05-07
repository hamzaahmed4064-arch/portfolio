import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all assets
import {
  backend,
  javascript,
  typescript,
  reactjs,
  postgresql,
  mongodb,
  aws,
  azure,
  connectwise,
  awsec2Icon,
  awss3Icon,
  awslambdaIcon,
  awscloudwatchIcon,
  n8nIcon,
  apifyIcon,
} from "../assets";

const ICONS = {
  microservices: "https://cdn.simpleicons.org/kubernetes/326CE5",
  nestjs: "https://cdn.simpleicons.org/nestjs/E0234E",
  reactnative: "https://cdn.simpleicons.org/react/61DAFB",
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  angular: "https://cdn.simpleicons.org/angular/DD0031",
  capacitor: "https://cdn.simpleicons.org/capacitor/119EFF",
  restapi: "https://cdn.simpleicons.org/openapiinitiative/6BA539",
  postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
  mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
  awsec2: awsec2Icon,
  awss3: awss3Icon,
  awslambda: awslambdaIcon,
  awscloudwatch: awscloudwatchIcon,
  aws: "https://cdn.simpleicons.org/amazonwebservices/FF9900",
  azure: "https://cdn.simpleicons.org/microsoftazure/0078D4",
  n8n: n8nIcon,
  apify: apifyIcon,
  cursor: "https://cdn.simpleicons.org/cursor/ffffff",
  claude: "https://cdn.simpleicons.org/anthropic/ffffff",
};

const programming = [
  { name: "Microservices Architecture", icon: ICONS.microservices, fallbackIcon: backend },
  { name: "NestJS", icon: ICONS.nestjs, fallbackIcon: backend },
  { name: "React Native", icon: ICONS.reactnative, fallbackIcon: reactjs },
  { name: "JavaScript", icon: ICONS.javascript, fallbackIcon: javascript },
  { name: "TypeScript", icon: ICONS.typescript, fallbackIcon: typescript },
  { name: "Firebase", icon: ICONS.firebase, fallbackIcon: connectwise },
  { name: "Angular / Ionic", icon: ICONS.angular, fallbackIcon: reactjs },
  { name: "Capacitor", icon: ICONS.capacitor, fallbackIcon: reactjs },
  { name: "REST API Design", icon: ICONS.restapi, fallbackIcon: backend },
  { name: "PostgreSQL", icon: ICONS.postgresql, fallbackIcon: postgresql },
  { name: "MongoDB", icon: ICONS.mongodb, fallbackIcon: mongodb },
];

const cloudAndDevOps = [
  { name: "AWS EC2", icon: ICONS.awsec2, fallbackIcon: aws },
  { name: "AWS S3", icon: ICONS.awss3, fallbackIcon: aws },
  { name: "AWS Lambda", icon: ICONS.awslambda, fallbackIcon: aws },
  { name: "AWS CloudWatch", icon: ICONS.awscloudwatch, fallbackIcon: aws },
  { name: "Amazon Cognito", icon: ICONS.aws, fallbackIcon: aws },
  { name: "AWS", icon: ICONS.aws, fallbackIcon: aws },
  { name: "Azure", icon: ICONS.azure, fallbackIcon: azure },
  { name: "Firebase Cloud Functions", icon: ICONS.firebase, fallbackIcon: connectwise },
  { name: "n8n", icon: ICONS.n8n, fallbackIcon: connectwise },
  { name: "Apify", icon: ICONS.apify, fallbackIcon: javascript },
];

const automationAndAI = [
  { name: "n8n Workflows", icon: ICONS.n8n, fallbackIcon: connectwise },
  { name: "Cursor", icon: ICONS.cursor, fallbackIcon: javascript },
  { name: "Claude", icon: ICONS.claude, fallbackIcon: javascript },
  { name: "Prompt Engineering", icon: ICONS.javascript, fallbackIcon: javascript },
];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    cloudAndDevOps: [],
    automationAndAI: [],
  });
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.2
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    const dynamicRows = [];
    let startIndex = 0;
    const mobileRowSize = width < 640 ? 3 : width < 1024 ? 4 : null;
    let desktopRowSize = 6;

    while (startIndex < techArray.length) {
      const rowSize = mobileRowSize ?? desktopRowSize;
      const endIndex = startIndex + rowSize;
      dynamicRows.push(techArray.slice(startIndex, endIndex));
      startIndex += rowSize;

      if (!mobileRowSize) {
        desktopRowSize = desktopRowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows.filter((row) => row.length > 0);
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const currentWidth = window.innerWidth;
      setIsMobile(currentWidth < 640);

      const rowsData = {
        programming: calculateRows(currentWidth, programming),
        cloudAndDevOps: calculateRows(currentWidth, cloudAndDevOps),
        automationAndAI: calculateRows(currentWidth, automationAndAI),
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        delay: Math.random() * 1.5, 
        duration: 0.5, 
        type: "spring" 
      } 
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 }
    }
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{categoryName}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${!isMobile && rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ userSelect: "none" }}
                  draggable="false"
                  onError={(e) => {
                    if (tech.fallbackIcon && e.currentTarget.src !== tech.fallbackIcon) {
                      e.currentTarget.src = tech.fallbackIcon;
                    }
                  }}
                />
                <span className="mt-2 text-[10px] sm:text-[11px] text-white text-center leading-tight px-1">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{categoryName}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("Programming", rows.programming)}
        {renderCategory("Cloud & DevOps", rows.cloudAndDevOps)}
        {renderCategory("Automation & AI", rows.automationAndAI)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");