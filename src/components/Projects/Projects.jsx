import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Baazigar App",
    desc: "Customer-facing production mobile application with 1L+ downloads. Contributed to feature development, performance optimization, CI/CD automation, and release management.",
    tech: ["React Native", "Redux Toolkit", "Firebase", "CI/CD", "Geolocation"],
    status: "Live",
    link: "https://play.google.com/store/apps/details?id=com.baaz_baazigar&hl=en_IN",
  },
  {
    title: "Baaz Runner App",
    desc: "Internal operations app used by field staff for battery swaps and service tracking. Worked on notification handling, rating system, and analytics integration.",
    tech: [
      "React Native",
      "Push Notifications",
      "Google Analytics",
      "API Integration",
      "Role based Authentication",
    ],
    status: "Live",
    link: "https://play.google.com/store/apps/details?id=com.baaz_electorq&hl=en_IN",
  },
  {
  title: "In a Park. On a Beach",
  desc: "Freelance SEO-friendly blog platform built with Firebase and Vercel featuring authentication, protected publishing, and dynamic article management.",
  tech: ["Firebase", "Firestore", "Vercel", "Authentication"],
  status: "Freelance",
  link: "https://github.com/zFunx/in-a-park-on-a-beach",
},
];

function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="project-header">
              <h3>{proj.title}</h3>

              <span
                className={`status-badge ${
                  proj.status === "Ongoing" ? "ongoing" : "live"
                }`}
              >
                {proj.status}
              </span>
            </div>

            <p className="project-desc">{proj.desc}</p>

            <div className="tech-stack">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
