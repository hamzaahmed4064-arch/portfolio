import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { caseStudies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const CaseStudyCard = ({ study, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.75)}
    className="bg-tertiary/80 border border-white/10 rounded-2xl p-6"
  >
    <h3 className="text-white text-[22px] font-bold">{study.title}</h3>
    <p className="mt-4 text-secondary text-[14px]">
      <span className="text-white font-semibold">Problem: </span>
      {study.problem}
    </p>
    <p className="mt-3 text-secondary text-[14px]">
      <span className="text-white font-semibold">What I built: </span>
      {study.solution}
    </p>
    <p className="mt-3 text-secondary text-[14px]">
      <span className="text-white font-semibold">Impact: </span>
      {study.impact}
    </p>
    <div className="mt-4 flex flex-wrap gap-2">
      {study.stack.map((item) => (
        <span
          key={`${study.title}-${item}`}
          className="text-[12px] text-white/90 bg-black-200 px-3 py-1 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const CaseStudies = () => {
  return (
    <section>
      <p className={`${styles.sectionSubText} text-center`}>Fact-Based Delivery</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Case Studies.</h2>

      <div className="mt-12 grid grid-cols-1 gap-6">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.title} study={study} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(CaseStudies, "case-studies");
