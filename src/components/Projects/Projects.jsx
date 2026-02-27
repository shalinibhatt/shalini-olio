import SectionWrapper from "../common/SectionWrapper";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Movie-Wovie",
    desc: "Basic movie discovery app built with React and REST APIs with search and responsive layout.",
    tech: ["React", "REST API", "Responsive UI"],
    status: "Live",
    link: "https://shalinibhatt.github.io/movie-wovie/",
  },
  {
    title: "MyJournal",
    desc: "Basic full-stack CRUD application with authentication and a simple star-rating animation for journal entries.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    status: "Live",
    link: "https://myjournsfe.onrender.com/",
  },
  {
    title: "gogoGames",
    desc: "AI-powered card game app built with React Native featuring custom shuffle logic, AI-generated backgrounds, and smooth animations.",
    tech: ["React Native", "State Management", "Animations"],
    status: "Ongoing",
  },
];

function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">Selected Projects</h2>

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
