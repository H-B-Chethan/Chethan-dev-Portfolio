import React from "react";
import { GraduationCap, Briefcase, Code, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="section container about-section">
      <AnimatedSection>
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
      </AnimatedSection>

      <div className="about-content">
        <AnimatedSection delay={0.1}>
          <div className="about-image-wrapper glass">
            <img
              src="/profile-image.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="hire-badge">
              <span className="status-dot"></span> Available for Hire
            </div>
          </div>
        </AnimatedSection>

        <div className="about-text">
          <AnimatedSection delay={0.2}>
            <p>
              I'm a <span className="highlight">Full Stack MERN Developer</span>{" "}
              and{" "}
              <span className="highlight">
                Information Science & Engineering
              </span>{" "}
              graduate from Global Academy of Technology, Bengaluru (CGPA:
              8.08), having completed my graduation in June 2026.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p>
              I specialize in building scalable web applications using{" "}
              <span className="highlight">
                React, Node.js, Express, MongoDB
              </span>{" "}
              and <span className="highlight">MySQL</span>, with strong
              fundamentals in{" "}
              <span className="highlight">
                REST APIs, authentication systems
              </span>
              , and <span className="highlight">database design</span>.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="skill-tags">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "MySQL",
                "REST APIs",
                "Java",
              ].map((skill) => (
                <span key={skill} className="skill-tag glass">
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <ul className="about-bullets">
              <li>
                Built a full-stack MERN Task Dashboard with JWT authentication
                and MySQL integration
              </li>
              <li>
                Developed responsive e-commerce platforms and robust product
                systems
              </li>
              <li>
                Designed secure backend systems with REST API endpoints and
                role-based features
              </li>
              <li>
                Focused on clean code, performance optimization, and scalable
                architecture
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="experience-box glass">
              <p>
                During my internship at{" "}
                <strong>CampusPe (Edufu Technologies Pvt Ltd.)</strong>, I
                worked as a Full Stack Developer, building production-ready
                applications and gaining real-world development experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <p className="mt-4">
              I'm currently seeking{" "}
              <span className="highlight-color">
                entry-level or internship opportunities
              </span>{" "}
              where I can contribute and grow as a software engineer.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="about-cards">
        {[
          {
            icon: GraduationCap,
            title: "Information Science & Engineering Graduate",
            desc: "ISE @ GAT, Bengaluru — CGPA 8.08",
          },
          {
            icon: Briefcase,
            title: "Multiple Projects",
            desc: "E-commerce, MERN dashboards & more",
          },
          {
            icon: Code,
            title: "APIs & Auth Expert",
            desc: "REST APIs, JWT, role-based systems",
          },
          {
            icon: Rocket,
            title: "Open to Work",
            desc: "Entry-level & internship roles",
          },
        ].map((item, index) => (
          <AnimatedSection
            key={item.title}
            delay={0.1 * index}
            className="about-card-wrapper"
          >
            <div className="about-card glass">
              <item.icon className="card-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default About;
