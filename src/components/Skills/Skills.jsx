import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import "./Skills.css";

const skillsRow1 = [
  "React Native",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
];

const skillsRow2 = [
  "AWS",
  "Firebase",
  "CI/CD",
  "GitHub Actions",
  "Android API 34",
];

const skillsRow3 = [
  "Performance Optimization",
  "Scalable Architecture",
  "UI Systems",
  "Play Store Deployment",
];

function MarqueeRow({ skills, duration, direction = 1 }) {
  return (
    <div className="marquee">
      <motion.div
        className="marquee-content"
        animate={{
          x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div key={i} className="skill-pill">
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title">Technical Expertise</h2>

      <div className="kinetic-container">
        <MarqueeRow skills={skillsRow1} duration={25} direction={1} />
        <MarqueeRow skills={skillsRow2} duration={18} direction={-1} />
        <MarqueeRow skills={skillsRow3} duration={30} direction={1} />
      </div>
    </SectionWrapper>
  );
}

export default Skills;
