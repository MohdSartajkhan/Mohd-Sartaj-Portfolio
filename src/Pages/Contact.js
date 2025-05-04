import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const messageRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = messageRef.current.value;
    if (!message) return;

    const phoneNumber = '9044376979'; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    messageRef.current.value = '';
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Chat with Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Send your message directly via WhatsApp!
        </motion.p>
        

        <form onSubmit={handleSendMessage} className="contact-form">
          <textarea
            ref={messageRef}
            rows="6"
            placeholder="Type your message..."
            required
          ></textarea>
          <button type="submit">Send to WhatsApp</button>
        </form>

        {showSuccess && <div className="toast-success">✅ Message redirected to WhatsApp!</div>}
      </div>
    </section>
  );
};

export default Contact;
