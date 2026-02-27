import SectionWrapper from "../common/SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "Baaz Bikes",
    period: "Mar 2024 – Present",
    highlights: [
      "Serving 1L+ downloads with a 4.5★ Play Store rating",
      "Led React Native upgrades (0.68 → 0.72 → 0.82) and migrated to New Architecture (Fabric + TurboModules)",
      "Implemented FCM deep linking → increased notification conversion by 25%",
      "Designed CI/CD pipelines using Fastlane & GitHub Actions",
      "Integrated BLE modules & Geofencing workflows for EV services",
      "Reduced crash rates via Sentry monitoring & global error boundaries",
      "Optimized assets & build configuration → reduced APK size",
    ],
  },
  {
    role: "Mobile App Development Intern",
    company: (
      <a
        href="https://drive.google.com/file/d/17Pyn2YqLbMZJrej-pS9LMGjqy1ItS2U7/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        Poulima Infotech
      </a>
    ),
    period: "Nov 2023 – Mar 2024",
    highlights: [
      "Built blog, calendar & in-app purchase modules",
      "Improved API performance using React Query (useQuery)",
      "Enhanced UI consistency using Tailwind CSS",
    ],
  },
  {
    role: "Software Development Intern",
    company: (
      <a
        href="https://drive.google.com/file/d/18E5CdlcteZkj6CjQfMSyv3Tj3KcqOs53/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deep Thought
      </a>
    ),
    period: "Nov 2022 – Feb 2023",
    highlights: [
      "Participated in cross-functional discussions to understand product requirements and development workflows",
      "Contributed to feature enhancements and development tasks supporting application improvements",
      "Awarded a technical Letter of Recommendation from Rohini Tech Media Pvt. Ltd. for development contributions",
    ],
  },
];
function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline-wrapper" ref={ref}>
        <motion.div className="scroll-indicator" style={{ top: indicatorY }} />
        <div className="timeline-line" />
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-content">
              <h3 className="role">{exp.role}</h3>
              <h4 className="company">{exp.company}</h4>
              <p className="period">{exp.period}</p>

              <ul>
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Experience;
