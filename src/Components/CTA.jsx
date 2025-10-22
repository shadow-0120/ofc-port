import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shadow-0120',
      icon: 'fab fa-github'
    },
    {
      name: 'Instagram', 
      url: 'https://www.instagram.com/koussai.dev?igsh=MW9teXR6a2hldWN2Nw==',
      icon: 'fab fa-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17b7WBrzbQ/', 
      icon: 'fab fa-facebook'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/koussai-mahdi-25b200283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: 'fab fa-linkedin'
    }
  ];

  const handleContactClick = () => {
    // You can add contact functionality here
    console.log('Contact button clicked');
  };

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section 
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cta-container">
        {/* Main CTA Content */}
        <div className="cta-content">
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.button 
            className="cta-button"
            onClick={handleContactClick}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now
          </motion.button>
        </div>

        {/* Social Media Links */}
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <i className={social.icon}></i>
              <span>{social.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="cta-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="footer-content">
            <p className="copyright">
              © 2024 Koussai Mahdi. All rights reserved.
            </p>
            <button 
              className="go-back-button"
              onClick={handleGoBack}
            >
              <i className="fas fa-arrow-up"></i>
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;