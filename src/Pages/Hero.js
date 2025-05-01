import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span className="highlight">Mohd Sartaj</span></h1>
        <p>A passionate Java Developer & Cybersecurity Enthusiast</p>
        <a href="#contact" className="btn">Let's Connect</a>
      </motion.div>
    </section>
  );
};

export default Hero;
