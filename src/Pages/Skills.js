import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="skill-bars">
          <motion.div
            className="skill-bar"
            initial={{ width: 0 }}
            animate={{ width: '90%' }}
            transition={{ duration: 1 }}
          >
            <span className="skill-name">Java</span>
          </motion.div>
          <motion.div
            className="skill-bar"
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            transition={{ duration: 2 }}
          >
            <span className="skill-name">ChatGPT</span>
          </motion.div>
          <motion.div
            className="skill-bar"
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ duration: 3}}
          >
            <span className="skill-name">JavaScript/CSS</span>
          </motion.div>
          <motion.div
            className="skill-bar"
            initial={{ width: 0 }}
            animate={{ width: '55%' }}
            transition={{ duration: 4 }}
          >
            <span className="skill-name">IOT</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
