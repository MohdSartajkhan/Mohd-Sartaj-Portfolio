import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Connect with Me</h3>
        <div className="social-icons">
          <a
            href="https://github.com/Sartaj-CS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-sartaj-khan-a0a467275"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:mohammedsartajkhan@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Mohd Sartaj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
