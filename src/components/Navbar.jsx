import React from "react";
import { motion } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    100,
  );

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <a href="#home" className="logo brand-font">
          <span className="logo-icon">C</span>
          Chethan <span className="gradient-text">.dev</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
