import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./home.css";
import Stats from "./Stats";
import CurvedLoop from './CurvedLoop';
import AboutMe from "./AboutMe";
import LatestProjects from "./LatestProjects";
import ParticleBackground from "../../Components/ParticleBackground";
import TestimonialCarousel from "../../Components/TestimonialCarousel";
import CTA from "../../Components/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const textRef = useRef(null);
  const nameRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const demoRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef(null);

  const initAnimations = useCallback(() => {
    // Simple scroll-triggered animations without parallax (instant, no scrub)
    // About section fade-in
    gsap.fromTo(".about-me", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Projects section fade-in
    gsap.fromTo(".latest-work-section", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".latest-work-section",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Testimonials fade-in
    gsap.fromTo(".testimonial-carousel", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".testimonial-carousel",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // CTA section fade-in
    gsap.fromTo(".cta-section", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Stats section fade-in
    gsap.fromTo(".stats-section", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Scroll progress indicator - works on all devices
    const sections = ['.home-section', '.about-me', '.latest-work-section', '.testimonial-carousel', '.cta-section'];
    const dots = document.querySelectorAll('.scroll-dot');
    
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          dots.forEach(dot => dot.classList.remove('active'));
          if (dots[index]) dots[index].classList.add('active');
        },
        onEnterBack: () => {
          dots.forEach(dot => dot.classList.remove('active'));
          if (dots[index]) dots[index].classList.add('active');
        }
      });
    });

    // Add click handlers for scroll dots (using native scroll)
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const targetSection = document.querySelector(sections[index]);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const cleanup = initAnimations();
    return cleanup;
  }, [initAnimations]);

  return (
    <>
      <motion.section 
        className="home-section"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Particle Background */}
        <div className="particle-background">
          <ParticleBackground />
        </div>

        {/* Hero Section */}
        <div className="home-content-wrapper">
          <motion.div 
            className="home-information"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="available-work" 
              ref={textRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="dot-green"></span>
              AVAILABLE FOR WORK
            </motion.p>
            <motion.h1 
              ref={nameRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
            >
              KOUSSAI MAHDI
            </motion.h1>
            
            {/* Location and Role */}
            <motion.ul
              className="location-role"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <li>From Algeria</li>
              <li>Web Developer</li>
            </motion.ul>
            
            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="resume-button-container"
            >
              <Link to="/resume" className="resume-button">
                View Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Stats/>
          </motion.div>
          
          {/* Curved Text Section */}
          <motion.div 
            className="curved-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <CurvedLoop 
              marqueeText="✦ Hello ✦ In ✦ My ✦ Portfolio ✦"
              speed={3}
              curveAmount={500}
              direction="right"
              interactive={true}
              className="custom-text-style"
            />
          </motion.div>
        </div>

        {/* About Me Section */}
        <motion.div 
          className="about-me"
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <AboutMe/>
        </motion.div>

        {/* Latest Projects Section */}
        <div className="latest-work-section" ref={projectsRef}>
          <LatestProjects />
        </div>

        {/* Testimonial Carousel Section */}
        <div className="testimonial-carousel" ref={testimonialsRef}>
          <TestimonialCarousel />
        </div>


        {/* CTA Section */}
        <div className="cta-section" ref={ctaRef}>
          <CTA />
        </div>

        {/* Floating Elements */}
        <div className="floating-elements" ref={floatingElementsRef}>
          <motion.div 
            className="floating-circle circle-1"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-circle circle-2"
            animate={{ 
              y: [0, 20, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="floating-circle circle-3"
            animate={{ 
              x: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Scroll Progress Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot active" data-section="hero"></div>
          <div className="scroll-dot" data-section="about"></div>
          <div className="scroll-dot" data-section="projects"></div>
          <div className="scroll-dot" data-section="testimonials"></div>
          <div className="scroll-dot" data-section="demo"></div>
          <div className="scroll-dot" data-section="cta"></div>
        </div>
      </motion.section>
    </>
  );
}