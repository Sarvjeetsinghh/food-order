import React from 'react';
import { motion } from 'framer-motion';


const ContactPage = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="contact-title"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="contact-description"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        We’re here to help! Feel free to reach out for any questions, feedback, or issues with your order.
      </motion.p>

      <motion.div
        className="contact-form"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;