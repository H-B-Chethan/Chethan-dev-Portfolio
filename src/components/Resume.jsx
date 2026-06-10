import React from "react";
import { FileText, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Resume.css";

const resumeHighlights = [
  {
    title: "Information Science & Engineering Graduate",
    subtitle: "GAT Bengaluru · CGPA 8.08",
  },
  { title: "10+ Real-World Projects", subtitle: "Built with MERN stack" },
  { title: "REST APIs & Auth Systems", subtitle: "JWT, MongoDB, PostgreSQL" },
  { title: "Full Stack Internship", subtitle: "CampusPe - Edufu Technologies" },
];

const Resume = () => {
  return (
    <section id="resume" className="section container">
      <div className="resume-container glass">
        <AnimatedSection>
          <div className="resume-icon-wrapper">
            <FileText size={40} className="resume-icon" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="resume-title">
            Review My <span className="gradient-text">Resume</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="resume-desc">
            Get a detailed overview of my technical skills, projects, and
            hands-on experience in full-stack development.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="resume-highlights">
            {resumeHighlights.map((item) => (
              <div key={item.title} className="highlight-item glass">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="availability-text">
            Available for full-time roles and internships — Immediate joiner.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="resume-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary resume-btn"
            >
              <FileText size={20} /> View Resume
            </a>

            <a
              href="/resume.pdf"
              download="Chethan_HB_Resume.pdf"
              className="btn btn-secondary resume-btn"
            >
              <Download size={20} /> Download
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Resume;
