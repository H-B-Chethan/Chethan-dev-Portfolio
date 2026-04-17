import React from 'react';
import { GitBranch, Star, GitCommit, GitPullRequest } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './GithubActivity.css';

const GithubActivity = () => {
  return (
    <section className="section container">
      <h2 className="section-title">
        GitHub <span className="gradient-text">Activity</span>
      </h2>
      
      <div className="github-stats-grid">
        <div className="stat-card glass">
          <GitBranch className="stat-icon" />
          <h3 className="stat-value">24</h3>
          <p className="stat-label">Repositories</p>
        </div>
        
        <div className="stat-card glass">
          <Star className="stat-icon" />
          <h3 className="stat-value">12</h3>
          <p className="stat-label">Stars Earned</p>
        </div>
        
        <div className="stat-card glass">
          <GitCommit className="stat-icon" />
          <h3 className="stat-value">482</h3>
          <p className="stat-label">Commits (2024)</p>
        </div>
        
        <div className="stat-card glass">
          <GitPullRequest className="stat-icon" />
          <h3 className="stat-value">15</h3>
          <p className="stat-label">Pull Requests</p>
        </div>
      </div>
      
      <div className="github-cta glass">
        <div className="cta-content">
          <h3>Check out my code</h3>
          <p>I believe in building in public and contributing to open source. All my personal projects are available on GitHub.</p>
        </div>
        <a href="https://github.com/Chethan-H-B" target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex-shrink-0">
          View GitHub Profile <FaGithub size={18} />
        </a>
      </div>
    </section>
  );
};

export default GithubActivity;
