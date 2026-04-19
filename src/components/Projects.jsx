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
    github: "https://github.com/Chethan-H-B/react-ecommerce-tech-store",
    demo: "https://techstore-react-e-commerce-applicatio.netlify.app/",
    image: "/images/project1.png",
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
    github: "https://github.com/Chethan-H-B/mern-mysql-auth-crud",
    demo: "https://github.com/Chethan-H-B/mern-mysql-auth-crud",
    image: "/images/project3.png",
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
  {
    id: 5,
    title: "TechStore",
    category: "Frontend",
    type: "Featured",
    description:
      "A modern e-commerce platform showcasing the latest in premium technology with a sleek and responsive design.",
    features: [
      "New arrivals section",
      "Interactive shopping cart",
      "Responsive design",
      "Dynamic product filtering",
    ],
    tech: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Chethan-H-B/techstore",
    demo: "https://techstore-demo.netlify.app/",
    image: "/images/project1.png",
  },
  {
    id: 6,
    title: "Smart Flooring Cost Optimizer",
    category: "Frontend",
    type: "Featured",
    description:
      "Modern web application that calculates the most cost-effective tile configuration for any room dimension with real-time floor visualization.",
    features: [
      "Custom room dimension input (Length & Width)",
      "Dynamic tile management (Add/Remove unlimited tile types)",
      "Automatic minimum cost calculation",
      "Grid-based tile placement algorithm",
      "Real-time proportional floor visualization",
      "Cost analytics panel",
    ],
    tech: ["HTML5", "Tailwind CSS", "JavaScript", "CSS Grid"],
    github: "https://github.com/Chethan-H-B/Smart-Flooring-Optimizer",
    demo: "https://chethan-smart-flooring-optimizer.netlify.app/",
    image: "/images/project2.png",
  },
  {
    id: 7,
    title: "Gushwork Web Developer Assignment",
    category: "Frontend",
    type: "Featured",
    description:
      "Pixel-perfect, responsive web page built using vanilla HTML, CSS, and JavaScript, strictly following the provided Figma design.",
    features: [
      "Sticky Header with smooth transition animation",
      "Image Carousel with Zoom preview",
      "Hover-based zoom functionality",
      "Thumbnail navigation support",
      "Fully Responsive Design (Desktop, Tablet, Mobile)",
      "Pixel-perfect Figma implementation",
    ],
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    github: "https://github.com/Chethan-H-B/Gushwork-web-assignment",
    demo: "https://chethan-gushwork.netlify.app/",
    image: "/images/project4.png",
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
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    Add Project Image Here
                  </div>
                )}
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
