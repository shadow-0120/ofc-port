import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import "./home.css";
import Stats from "./Stats";
import CurvedLoop from './CurvedLoop';
import AboutMe from "./AboutMe";
import LatestProjects from "./LatestProjects";
import ParticleBackground from "../../components/ParticleBackground";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import InteractiveDemo from "../../components/InteractiveDemo";
import CTA from "../../components/CTA";

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
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Hero section parallax animations
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    heroTl.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1 }
    ).fromTo(
      nameRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1 },
      "-=0.3"
    );

    // Hero background parallax
    gsap.to(".home-section", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Hero content parallax
    gsap.to(".home-information", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Video parallax
    gsap.to(".home-video-element", {
      y: -150,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-video-element",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // About section parallax
    gsap.fromTo(".about-me", 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-me",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

    // Projects section parallax
    gsap.fromTo(".latest-work-section", 
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".latest-work-section",
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1
        }
      }
    );

    // Testimonials parallax
    gsap.fromTo(".testimonial-carousel", 
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-carousel",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

    // Interactive demo parallax
    gsap.fromTo(".interactive-demo", 
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".interactive-demo",
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1
        }
      }
    );

    // CTA section parallax
    gsap.fromTo(".cta-section", 
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

    // Floating elements parallax
    gsap.to(".floating-circle", {
      y: (i) => i * -50,
      x: (i) => i * 30,
      rotation: (i) => i * 45,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Stats section parallax
    gsap.fromTo(".stats-section", 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      }
    );

    // Curved text parallax
    gsap.fromTo(".curved-text", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".curved-text",
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1
        }
      }
    );

    // Particle background parallax
    gsap.to(".particle-background", {
      y: -200,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Scroll progress indicator
    const sections = ['.home-section', '.about-me', '.latest-work-section', '.testimonial-carousel', '.interactive-demo', '.cta-section'];
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

    // Add click handlers for scroll dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const targetSection = document.querySelector(sections[index]);
        if (targetSection) {
          lenis.scrollTo(targetSection, { duration: 1.5 });
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis.destroy();
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

      {/* Location and Role */}
      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <li>From Algeria</li>
        <li>Web Developer</li>
      </motion.ul>

      {/* Video Section */}
      {/* <motion.div 
        className="home-video-element"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="home-video">
          <video 
            className="w-full h-full object-cover"
            src="" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            poster=""
          />
        </div>
      </motion.div> */}

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

      {/* About Me Section */}
      <motion.div 
        className="about-me"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="first-side">
          <AboutMe/>
        </div>
        <div className="second-side"></div>
      </motion.div>

      {/* Latest Projects Section */}
      <div className="latest-work-section" ref={projectsRef}>
        <LatestProjects />
      </div>

      {/* Testimonial Carousel Section */}
      <div className="testimonial-carousel" ref={testimonialsRef}>
        <TestimonialCarousel />
      </div>

      {/* Interactive Demo Section */}
      <div className="interactive-demo" ref={demoRef}>
        <InteractiveDemo />
      </div>

      {/* Logo Carousel Section */}
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
