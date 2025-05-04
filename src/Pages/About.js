import React from 'react';
import ProfileImage from '../Assets/Profile.jpg';

import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    About Me
                    <motion.img
                        src={ProfileImage}
                        alt="Profile"
                        className="profile-img"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    />


                </motion.h2>
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="bio">
                        <p>
                            I'm Mohd Sartaj, a Computer Science student and aspiring
                            Blockchain Security Expert. I have a strong background in
                            **Java**, **Cybersecurity**, and **Web Development**.
                        </p>
                        <p>
                            Currently, I am focused on building secure applications, with a
                            deep interest in **smart contract auditing** and blockchain security.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
