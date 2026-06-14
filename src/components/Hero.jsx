import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const phrases = [
    "Building scalable web applications",
    "Open to Entry Level Roles",
    "Problem Solver",
    "Developing REST APIs"
  ];
  const typingText = useTypewriter(phrases, 100, 50, 2000);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="badge glass">
          <span className="status-dot"></span> Available for Work
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Chethan H B</span>
        </h1>
        
        <h2 className="hero-subtitle">
          A Full Stack Developer <span className="typing-text">{typingText}</span><span className="cursor-blink">|</span>
        </h2>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com/H-B-Chethan" target="_blank" rel="noopener noreferrer" className="social-btn glass">
            <FaGithub size={20} />
            <span>GITHUB</span>
          </a>
          <a href="https://www.linkedin.com/in/chethanhb7/" target="_blank" rel="noopener noreferrer" className="social-btn glass">
            <FaLinkedin size={20} />
            <span>LINKEDIN</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-btn glass">
            <Download size={20} />
            <span>RESUME</span>
          </a>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;

