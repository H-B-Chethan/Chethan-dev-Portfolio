import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer border-t border-glass">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="logo-icon-small">C</span>
          <span className="brand-font">Chethan <span className="gradient-text">.dev</span></span>
        </div>
        
        <p className="copyright">
          © {new Date().getFullYear()} Chethan H B. All rights reserved.
        </p>
        
        <div className="footer-links">
          <a href="https://github.com/H-B-Chethan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chethanhb7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hbchethan24@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

