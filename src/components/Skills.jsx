import React from "react";
import { Layout, Server, Database, Wrench, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Skills.css";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "Tailwind CSS",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Java",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    icon: BookOpen,
    title: "Core Concepts",
    skills: [
      "OOPs",
      "SOLID Principles",
      "API Design",
      "Data Structures & Problem Solving",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <AnimatedSection>
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className="skills-subtitle">
          Technologies I work with — no inflated percentages, just real skills.
        </p>
      </AnimatedSection>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <AnimatedSection key={category.title} delay={0.1 * (index + 2)}>
            <div className="skill-category glass premium-card">
              <div className="category-header">
                <category.icon className="category-icon" />
                <h3>{category.title}</h3>
              </div>
              <div className="tech-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Skills;
