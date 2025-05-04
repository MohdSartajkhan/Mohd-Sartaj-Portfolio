// src/Pages/Skills.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillSet = [
  'Java', 'ChatGPT', 'JavaScript', 'CSS', 'HTML',
  'React', 'Node.js', 'Kotlin', 'Firebase', 'MongoDB',
  'Tailwind CSS', 'MySQL', 'IOT', 'Linux', 'Git',
  'Express.js', 'JavaFX', 'REST APIs', 'Spring Boot', 'Next.js'
];

const Skills = () => {
  const [positions, setPositions] = useState(
    Array(skillSet.length).fill({ x: 0, y: 0 })
  );

  const handleClick = (index, e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 100;

    const newPos = [...positions];
    newPos[index] = { x: offsetX, y: offsetY };
    setPositions(newPos);

    setTimeout(() => {
      newPos[index] = { x: 0, y: 0 };
      setPositions([...newPos]);
    }, 700); // Reset smoothly
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillSet.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{
              transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
            }}
            onClick={(e) => handleClick(index, e)}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
