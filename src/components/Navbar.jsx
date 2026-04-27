import React, { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <a href="#home" className="logo brand-font">
          <span className="logo-icon">C</span>
          Chethan <span className="gradient-text">.dev</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="active-indicator" />
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
