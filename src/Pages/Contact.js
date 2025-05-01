import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setMessageSent(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error(error.text);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a project in mind, collaboration, or just want to connect? Send me a message!
        </motion.p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {messageSent && <p className="success-msg">✅ Message sent successfully!</p>}

        <p className="direct-email">Or reach me at: <strong>mohammedsartajkhan@gmail.com</strong></p>
      </div>
    </section>
  );
};

export default Contact;
