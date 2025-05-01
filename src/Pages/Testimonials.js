import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';  


const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Hackathon Teammate",
    feedback:
      "Sartaj is a passionate and proactive teammate. His work on the Instamart project was absolutely professional and dependable.",
  },
  {
    name: "Priya Singh",
    role: "College Cultural Lead",
    feedback:
      "He brings creativity to both code and culture. A great combination of technical and artistic skills!",
  },
  {
    name: "Ankit Verma",
    role: "Android Developer",
    feedback:
      "We worked together on the College Alert app. Sartaj’s backend integration and logic were rock solid!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p>"{item.feedback}"</p>
              <h4>- {item.name}</h4>
              <span>{item.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
