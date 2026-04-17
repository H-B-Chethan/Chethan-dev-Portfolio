import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    type: "Featured",
    description:
      "Full-featured shopping application with product management, cart, and checkout flow. Optimized for performance and mobile responsiveness.",
    features: [
      "Product search, filter & category browsing",
      "Shopping cart with Redux state management",
      "Simulated checkout & order tracking",
      "Responsive UI with Tailwind CSS",
    ],
    tech: ["React", "Node.js", "MongoDB", "Redux", "Tailwind"],
    github: "https://github.com/Chethan-H-B",
    demo: "#",
  },
  {
    id: 2,
    title: "MERN Task Dashboard",
    category: "Full Stack",
    type: "Featured",
    description:
      "Production-ready task management system built with the full MERN stack, featuring JWT auth and MySQL for relational task data.",
    features: [
      "JWT-based login, signup & session management",
      "Task CRUD with drag-and-drop prioritization",
      "MySQL + MongoDB dual-database integration",
      "Role-based access control (Admin / User)",
    ],
    tech: ["React", "Node.js", "Express", "MySQL", "MongoDB", "JWT"],
    github: "https://github.com/Chethan-H-B",
    demo: "#",
  },
  {
    id: 3,
    title: "Secure Auth System",
    category: "Backend",
    type: "Featured",
    description:
      "Robust authentication backend providing JWT login, signup, password reset and role management — production-ready patterns throughout.",
    features: [
      "JWT access & refresh token flow",
      "Secure password hashing with bcrypt",
      "Email-based password reset",
      "Role-based middleware (Admin / User)",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/Chethan-H-B",
    demo: "#",
  },
  {
    id: 4,
    title: "REST API Server",
    category: "Backend",
    type: "Featured",
    description:
      "Scalable Express API with 12+ endpoints covering full CRUD, rate limiting, structured error handling and PostgreSQL persistence.",
    features: [
      "12+ RESTful CRUD endpoints",
      "Rate limiting & request validation",
      "Structured middleware pipeline",
      "PostgreSQL with query optimization",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "REST API"],
    github: "https://github.com/Chethan-H-B",
    demo: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter || p.type === filter);

  const isExpanded = expandedCategory === filter;
  const displayedProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, 3);
  const hasMore = filteredProjects.length > 3;

  const toggleExpand = () => {
    setExpandedCategory(isExpanded ? null : filter);
  };

  return (
    <section id="projects" className="section container">
      <AnimatedSection>
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="skills-subtitle">
          Real projects built with production-quality code — click GitHub or
          Live Demo to explore.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="project-filters">
          {["All", "Frontend", "Backend", "Full Stack"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => {
                setFilter(f);
                setExpandedCategory(null);
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <AnimatedSection
            key={project.id}
            delay={0.1 * (index + 3)}
            className="project-card-wrapper"
          >
            <div className="project-card glass">
              <div className="project-image">
                <div className="project-placeholder">
                  {/* PLACEHOLDER IMAGE: 
                      Replace this placeholder text with your actual project image.
                      Example: <img src="/project-1.jpg" alt={project.title} />
                  */}
                  Add Project Image Here
                </div>
                <div className="project-badges">
                  {project.type === "Featured" && (
                    <span className="badge featured">Featured</span>
                  )}
                  <span className="badge tech-badge">{project.category}</span>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary small-btn"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary small-btn"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {hasMore && (
        <AnimatedSection delay={0.5}>
          <div className="show-more-container">
            <button
              className="btn btn-primary show-more-btn"
              onClick={toggleExpand}
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={20} /> Show More Projects
                </>
              )}
            </button>
          </div>
        </AnimatedSection>
      )}
    </section>
  );
};

export default Projects;
