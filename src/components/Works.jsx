import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const caseStudies = [
  {
    title: "MeridianSync",
    problem:
      "Runtime failures from schema/data mismatches, brittle auth/input handling, and incorrect bulk certificate generation.",
    built:
      "Led full-stack hardening with idempotent migrations, type/date sanitization, certificate eligibility fixes, and region lifecycle management with guardrails.",
    impact:
      "Eliminated critical flow-breaking errors, prevented unintended certificate issuance, and improved admin reliability and mobile usability.",
    tech: ["Node.js", "Express", "Sequelize", "PostgreSQL", "Angular", "Ionic", "AWS", "Firebase"],
  },
  {
    title: "Meridian Platform Security & Auth Modernization",
    problem:
      "Inconsistent security controls across frontend, API boundaries, and cloud/network policies increased compliance and release risk.",
    built:
      "Implemented OWASP-aligned hardening: sanitization in auth flows, stronger password policy + 2FA, CORS/SSRF guardrails, and consolidated architecture/security implementation docs.",
    impact:
      "Reduced risk exposure, improved audit/compliance readiness, and lowered review-to-release friction across teams.",
    tech: ["Node.js", "AWS", "AuthN/AuthZ", "2FA", "CORS", "SSRF Protection"],
  },
  {
    title: "Lorryz (Uber-like for Freight)",
    problem:
      "A trucking marketplace needed reliable background location tracking and operational continuity under real-world mobile/network constraints.",
    built:
      "Built Ionic apps and backend-integrated workflows for real-time shipment visibility, background tracking, push notifications, dynamic links/deep links, and booking flows.",
    impact:
      "Improved dispatch transparency and user engagement while supporting stable production releases on both App Store and Play Store.",
    tech: ["Ionic", "Angular", "Node.js", "Realtime Tracking", "Push Notifications", "Dynamic Links"],
  },
  {
    title: "Teleflex Product Performance",
    problem:
      "Product teams lacked reliable, unified performance reporting and were making decisions from fragmented operational data.",
    built:
      "Implemented backend processing and API-driven reporting pipelines that normalized raw performance signals into dashboard-ready outputs.",
    impact:
      "Improved decision-making speed and confidence through cleaner product-performance visibility.",
    tech: ["Node.js", "PostgreSQL", "AWS", "REST APIs"],
  },
  {
    title: "Meridian Document Library",
    problem:
      "Teams had inconsistent, role-unsafe document retrieval workflows that slowed collaboration and increased lookup effort.",
    built:
      "Designed structured storage and search-focused APIs with role-based access behavior for secure and predictable document workflows.",
    impact:
      "Improved document discoverability, reduced manual lookup overhead, and strengthened governance of shared records.",
    tech: ["Node.js", "PostgreSQL", "AWS S3", "REST APIs"],
  },
];

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  animate,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={animate}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] rounded-2xl bg-black-200 border border-white/10 flex items-center justify-center p-6">
          <p className="text-center text-secondary text-[13px] leading-6">
            Client project visuals are confidential.
            <br />
            Details can be shared on request.
          </p>

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {live_project_link && (
          <a href={live_project_link} target="_blank" rel="noopener noreferrer">
            <button className="mt-3 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]">
              Live Project
            </button>
          </a>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" }); // Adjust amount as needed
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section ref={ref}>
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionSubText} text-center`}>
          Fact-Based Delivery
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>Case Studies.</h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
      >
        <div className="mt-8 grid grid-cols-1 gap-6">
          {caseStudies.map((study) => (
            <div key={study.title} className="bg-tertiary rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-bold text-[22px]">{study.title}</h4>
              <p className="mt-3 text-secondary text-[14px] leading-7">
                <span className="text-white font-semibold">Problem:</span> {study.problem}
              </p>
              <p className="mt-2 text-secondary text-[14px] leading-7">
                <span className="text-white font-semibold">What I built:</span> {study.built}
              </p>
              <p className="mt-2 text-secondary text-[14px] leading-7">
                <span className="text-white font-semibold">Impact:</span> {study.impact}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tech.map((item) => (
                  <p key={`${study.title}-${item}`} className="text-[13px] text-purple-300">
                    #{item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <span className="hash-span" id="projects">
          &nbsp;
        </span>
        <h3 className={`${styles.sectionHeadText} text-center mt-16`}>Projects.</h3>
        <div
          className="mt-8 grid grid-cols-1 gap-4 place-items-center md:flex md:flex-wrap md:justify-center md:gap-7"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              animate={fadeIn("up", "spring", index * 0.5, 0.75)}
              {...project}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default SectionWrapper(Works, "case-studies");
