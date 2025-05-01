import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectList = [
  {
    title: 'Instamart',
    description: 'Java Web app for authentication and shopping (Login, Signup, Landing Page).',
    tech: 'Java, HTML, CSS',
    link: '#',
    image: '/assets/instamart.png',
  },
  {
    title: 'College Alert App',
    description: 'Android app to alert students for college activities with direct notification.',
    tech: 'Kotlin, Firebase',
    link: '#',
    image: '/assets/college-alert.png',
  },
  {
    title: 'Todo List with Alarm',
    description: 'Advanced Todo app with notifications, alarms, and weekly planning.',
    tech: 'React.js, MySQL',
    link: '#',
    image: '/assets/todo-app.png',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
