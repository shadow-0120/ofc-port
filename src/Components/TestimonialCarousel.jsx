import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './TestimonialCarousel.css';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Hossam Abaidia",
      role: "Diroctor of Step By Step.",
      content: "Koussai delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are unmatched.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sakina Benmousssa",
      role: "Vice President of Joker Club.",
      content: "Working with Koussai was a game-changer for our project. His innovative solutions and clean code made our development process smooth and efficient.",
      rating: 5,
    },
    {
      id: 3,
      name: "El Kahina Hotel",
      role: "CEO of El Kahina Hotel.",
      content: "Koussai's ability to translate complex requirements into beautiful, functional interfaces is remarkable. Highly recommended for any development project.",
      rating: 5,
    },
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      />
    ));
  };

  return (
    <motion.section
      className="testimonial-carousel"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="testimonial-container">
        <motion.div
          className="testimonial-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <span className="testimonial-badge">Client Testimonials</span>
          <h2 className="testimonial-title">What Clients Say</h2>
          <p className="testimonial-subtitle">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </motion.div>

        <div className="testimonial-content">
          <button 
            className="nav-button prev-button"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <blockquote className="testimonial-quote">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="testimonial-author">
                  
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            className="nav-button next-button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialCarousel;
