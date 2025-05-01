import React from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Sartaj.dev</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-icons">
        <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/mohammed-sartaj-khan-a0a467275" target="_blank"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;
