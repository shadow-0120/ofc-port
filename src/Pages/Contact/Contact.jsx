import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import {
  Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, AlertTriangle,
  Send, Globe2, Facebook, Instagram, Linkedin, Twitter, MessageCircle,
  Loader2, ChevronRight, HelpCircle, Heart, Star, Users, Award, Zap,
  Calendar, Video, MessageSquare, Github, ExternalLink, ArrowRight
} from "lucide-react";
import './Contact.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiry: "general",
    captcha: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, success: false, error: "" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);
  const testimonialsRef = useRef(null);
  const particlesRef = useRef(null);
  const cursorRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const floatingShapesRef = useRef(null);
  const backgroundRef = useRef(null);

  // Time + timezone display
  const tz = "Africa/Algiers";
  const now = useMemo(() => new Date(), []);
  const localTime = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit", minute: "2-digit", timeZone: tz, hour12: false
  }).format(now);

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced GSAP animations with parallax and drawing effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline
      const masterTl = gsap.timeline();

      // Background parallax setup
      if (backgroundRef.current) {
        gsap.set(backgroundRef.current, { scale: 1.1 });
      }
      
      // Floating particles animation
      if (particlesRef.current && particlesRef.current.children) {
        const particles = Array.from(particlesRef.current.children);
        gsap.fromTo(particles, 
          { 
            scale: 0,
            rotation: 0,
            opacity: 0,
            y: "random(-100, 100)",
            x: "random(-100, 100)"
          },
          {
            scale: "random(0.5, 1.5)",
            rotation: "random(0, 360)",
            opacity: "random(0.3, 0.8)",
            y: "random(-200, 200)",
            x: "random(-200, 200)",
            duration: "random(3, 6)",
            ease: "power2.inOut",
            stagger: {
              amount: 2,
              from: "random"
            },
            repeat: -1,
            yoyo: true
          }
        );
      }

      // Hero section with typewriter effect
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, 
          { opacity: 0, y: 100 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.5,
            ease: "power3.out"
          }
        );

        // Typewriter effect for subtitle
        gsap.fromTo(subtitleRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            delay: 0.5
          }
        );

        // Text reveal animation
        gsap.fromTo(".text-reveal",
          { 
            y: 50, 
            opacity: 0,
            clipPath: "inset(0 100% 0 0)"
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.2,
            delay: 0.8
          }
        );
      }

      // Contact cards with 3D hover effects
      if (contactCardsRef.current && contactCardsRef.current.children) {
        const cards = Array.from(contactCardsRef.current.children);
        
        gsap.fromTo(cards,
          { 
            y: 100, 
            opacity: 0,
            rotationX: -15,
            transformOrigin: "center bottom"
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
            delay: 1.2
          }
        );

        // Add hover animations for cards
        cards.forEach((card, index) => {
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              rotationX: 5,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);

          // Store cleanup functions
          card._cleanup = () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };
        });
      }

      // Form animation with drawing effect
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { 
            y: 80, 
            opacity: 0,
            scale: 0.95
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 1.8
          }
        );

        // Animate form fields on focus
        const formInputs = formRef.current.querySelectorAll('input, textarea, select');
        formInputs.forEach((input, index) => {
          const handleFocus = () => {
            gsap.to(input, {
              scale: 1.02,
              boxShadow: "0 0 20px rgba(163, 230, 53, 0.3)",
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleBlur = () => {
            gsap.to(input, {
              scale: 1,
              boxShadow: "0 0 0px rgba(163, 230, 53, 0.3)",
              duration: 0.3,
              ease: "power2.out"
            });
          };

          input.addEventListener('focus', handleFocus);
          input.addEventListener('blur', handleBlur);

          // Store cleanup functions
          input._cleanup = () => {
            input.removeEventListener('focus', handleFocus);
            input.removeEventListener('blur', handleBlur);
          };
        });
      }

      // Testimonials with staggered reveal
      if (testimonialsRef.current && testimonialsRef.current.children) {
        const testimonials = Array.from(testimonialsRef.current.children);
        gsap.fromTo(testimonials,
          { 
            y: 60, 
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            delay: 2.2
          }
        );
      }

      // Scroll-triggered parallax effects
      gsap.utils.toArray(".parallax-slow").forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray(".parallax-fast").forEach((element) => {
        gsap.to(element, {
          yPercent: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Background parallax
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: "main",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

    });

    return () => {
      // Cleanup event listeners
      if (contactCardsRef.current && contactCardsRef.current.children) {
        const cards = Array.from(contactCardsRef.current.children);
        cards.forEach(card => {
          if (card._cleanup) {
            card._cleanup();
          }
        });
      }

      if (formRef.current) {
        const formInputs = formRef.current.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
          if (input._cleanup) {
            input._cleanup();
          }
        });
      }

      ctx.revert();
    };
  }, []);

  // Cursor follow effect
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [mousePosition]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";

    if ((form.captcha || "").trim() !== "7") e.captcha = "Captcha answer is incorrect";
    if (form.website.trim() !== "") e.website = "Spam detected";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    try {
      setStatus({ submitting: true, success: false, error: "" });

      const payload = { ...form, time: new Date().toISOString() };
      await new Promise((r) => setTimeout(r, 900));

      console.log("SUBMIT:", payload);
      setStatus({ submitting: false, success: true, error: "" });
      setForm({ name: "", email: "", subject: "", message: "", inquiry: "general", captcha: "", website: "" });
    } catch (err) {
      setStatus({ submitting: false, success: false, error: (err && err.message) || "Submission failed" });
    }
  }

  function inputClass(hasError, extra) {
    const base = "block w-full rounded-xl border bg-white/90 px-4 py-3 text-base text-gray-900 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 disabled:opacity-50 dark:bg-gray-900/80 dark:text-gray-100";
    const border = hasError ? "border-red-400 focus:ring-red-400" : "border-gray-200 focus:ring-blue-500 dark:border-gray-700";
    return [base, border, extra].filter(Boolean).join(" ");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="contact-container"
    >
      {/* Header Section */}
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="header-content">
          <motion.div 
            className="year-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
          >
            Available for Work
          </motion.div>
          <motion.h1 
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let's Create Something Amazing Together
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ready to bring your vision to life? I'm here to help you build something extraordinary. 
            Let's start a conversation about your next project.
          </motion.p>
        </div>
      </motion.div>

        {/* Contact Methods */}
        <section ref={contactCardsRef} className="py-32 px-4 md:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-instrument-sans text-reveal">
                Get in Touch
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-reveal">
                Choose your preferred way to connect. I'm always excited to discuss new projects and ideas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Email Card */}
              <div className="group relative perspective-1000">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-lime-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-400/20 transform-gpu preserve-3d">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with 3D Effect */}
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-lime-400/20 to-lime-400/5 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Mail className="h-10 w-10 text-lime-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-lime-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors duration-300">Email</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">Best for detailed project discussions and proposals</p>
                  
                  <a 
                    href="mailto:koussaiimahdi@gmail.com" 
                    className="inline-flex items-center text-lime-400 hover:text-lime-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    koussaiimahdi@gmail.com
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative perspective-1000">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 transform-gpu preserve-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Phone className="h-10 w-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-cyan-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Phone</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">Perfect for urgent matters and quick consultations</p>
                  
                  <a 
                    href="tel:+213671376330" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    +213 671 376 330
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Video Call Card */}
              <div className="group relative perspective-1000">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/20 transform-gpu preserve-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400/20 to-purple-400/5 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Video className="h-10 w-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-purple-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Video Call</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">Schedule a face-to-face meeting to discuss your project</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Schedule Meeting
                    <Calendar className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Social Card */}
              <div className="group relative perspective-1000">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-pink-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-400/20 transform-gpu preserve-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400/20 to-pink-400/5 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <MessageSquare className="h-10 w-10 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-pink-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">Social Media</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">Connect with me on LinkedIn, Twitter, or GitHub</p>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    Follow Me
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section ref={formRef} className="py-32 px-4 md:px-8 z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-instrument-sans text-reveal">
                Send a Message
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-reveal">
                Have a project in mind? Let's discuss how we can bring your vision to life.
              </p>
            </div>

            <div className="relative">
              {/* Form Background with Animated Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-700 shadow-2xl"></div>
              
              {/* Animated Grid Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl"></div>
              
              {/* Floating Orbs */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <form onSubmit={handleSubmit} noValidate className="relative z-10 p-8 md:p-12 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-4 group-hover:text-lime-400 transition-colors duration-300">
                      Name <span className="text-lime-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-6 py-5 bg-gray-800/60 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-500 group-hover:bg-gray-800/80 ${
                          errors["name"] 
                            ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-400/20" 
                            : "border-gray-600 focus:border-lime-400 focus:ring-4 focus:ring-lime-400/20 group-hover:border-lime-400/50"
                        }`}
                        placeholder="Your full name"
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                        errors["name"] ? "from-red-400/5 to-red-400/5" : ""
                      }`}></div>
                    </div>
                    {errors["name"] && (
                      <p className="mt-3 text-sm text-red-400 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        {String(errors["name"])}
                      </p>
                    )}
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-6 py-5 bg-gray-800/60 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-500 group-hover:bg-gray-800/80 ${
                          errors["email"] 
                            ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-400/20" 
                            : "border-gray-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 group-hover:border-cyan-400/50"
                        }`}
                        placeholder="your.email@example.com"
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                        errors["email"] ? "from-red-400/5 to-red-400/5" : ""
                      }`}></div>
                    </div>
                    {errors["email"] && (
                      <p className="mt-3 text-sm text-red-400 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        {String(errors["email"])}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-300 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      Project Type
                    </label>
                    <div className="relative">
                      <select
                        id="inquiry"
                        name="inquiry"
                        value={form.inquiry}
                        onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                        className="w-full px-6 py-5 bg-gray-800/60 backdrop-blur-sm border-2 border-gray-600 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all duration-500 group-hover:border-purple-400/50 group-hover:bg-gray-800/80"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="project">New Project</option>
                        <option value="partnership">Partnership</option>
                        <option value="consultation">Consultation</option>
                        <option value="support">Support</option>
                      </select>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-4 group-hover:text-pink-400 transition-colors duration-300">
                      Subject <span className="text-pink-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={`w-full px-6 py-5 bg-gray-800/60 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-500 group-hover:bg-gray-800/80 ${
                          errors["subject"] 
                            ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-400/20" 
                            : "border-gray-600 focus:border-pink-400 focus:ring-4 focus:ring-pink-400/20 group-hover:border-pink-400/50"
                        }`}
                        placeholder="What is this regarding?"
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                        errors["subject"] ? "from-red-400/5 to-red-400/5" : ""
                      }`}></div>
                    </div>
                    {errors["subject"] && (
                      <p className="mt-3 text-sm text-red-400 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        {String(errors["subject"])}
                      </p>
                    )}
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full px-6 py-5 bg-gray-800/60 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-500 resize-none group-hover:bg-gray-800/80 ${
                        errors["message"] 
                          ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-400/20" 
                          : "border-gray-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 group-hover:border-cyan-400/50"
                      }`}
                      placeholder="Tell me about your project, goals, and how I can help..."
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      errors["message"] ? "from-red-400/5 to-red-400/5" : ""
                    }`}></div>
                  </div>
                  {errors["message"] && (
                    <p className="mt-3 text-sm text-red-400 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      {String(errors["message"])}
                    </p>
                  )}
                </div>

                {/* Spam protection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="captcha" className="block text-sm font-semibold text-gray-300 mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      Spam check: 3 + 4 = ? <span className="text-yellow-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="captcha"
                        name="captcha"
                        inputMode="numeric"
                        value={form.captcha}
                        onChange={(e) => setForm({ ...form, captcha: e.target.value })}
                        className={`w-full px-6 py-5 bg-gray-800/60 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-500 group-hover:bg-gray-800/80 ${
                          errors["captcha"] 
                            ? "border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-400/20" 
                            : "border-gray-600 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 group-hover:border-yellow-400/50"
                        }`}
                        placeholder="Your answer"
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                        errors["captcha"] ? "from-red-400/5 to-red-400/5" : ""
                      }`}></div>
                    </div>
                    {errors["captcha"] && (
                      <p className="mt-3 text-sm text-red-400 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        {String(errors["captcha"])}
                      </p>
                    )}
                  </div>
                  
                  {/* Honeypot */}
                  <div className="sr-only">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className={`group relative inline-flex items-center gap-4 px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 focus:outline-none focus:ring-4 ${
                      status.submitting 
                        ? "bg-gray-600 cursor-not-allowed text-gray-400" 
                        : "bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 text-black hover:from-lime-300 hover:via-cyan-300 hover:to-purple-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/25 focus:ring-lime-400/30"
                    }`}
                  >
                    {status.submitting ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : (
                      <Send className="h-6 w-6" />
                    )}
                    {status.submitting ? "Sending..." : "Send Message"}
                    {!status.submitting && <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />}
                    
                    {/* Button Glow Effect */}
                    {!status.submitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    )}
                  </button>
                  
                  <div className="text-sm text-gray-400 text-center md:text-right">
                    Prefer email? <a href="mailto:koussaiimahdi@gmail.com" className="text-lime-400 hover:text-lime-300 underline underline-offset-2 transition-colors duration-300">koussaiimahdi@gmail.com</a>
                  </div>
                </div>

                {/* Status messages */}
                <div className="min-h-[32px] flex justify-center">
                  {status.success && (
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-lime-400/10 to-cyan-400/10 px-6 py-4 text-lime-400 border border-lime-400/20 backdrop-blur-sm">
                      <CheckCircle2 className="h-6 w-6" />
                      <span className="font-semibold">Thanks! Your message was sent. I'll reply soon.</span>
                    </div>
                  )}
                  {status.error && (
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-400/10 to-red-500/10 px-6 py-4 text-red-400 border border-red-400/20 backdrop-blur-sm">
                      <AlertTriangle className="h-6 w-6" />
                      <span className="font-semibold">{status.error}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-32 px-4 md:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-instrument-sans text-reveal">
                Client Testimonials
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-reveal">
                Don't just take my word for it. Here's what clients say about working with me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Houssam Abaidia",
                  company: "Step By Step.",
                  role: "Director",
                  content: "Working with Koussai was an absolute pleasure. He delivered our project on time and exceeded our expectations. The attention to detail is incredible.",
                  rating: 5,
                  color: "lime"
                },
                {
                  name: "El Kahina Hotel",
                  company: "El Kahina.",
                  role: "CEO",
                  content: "Professional, creative, and reliable. He understood our vision perfectly and brought it to life. Highly recommended for any web project.",
                  rating: 5,
                  color: "cyan"
                },
                {
                  name: "Sakina Benmousssa",
                  company: "Joker Club",
                  role: "Vice President",
                  content: "Outstanding communication throughout the project. He was always available to answer questions and provide updates. The final result was perfect.",
                  rating: 5,
                  color: "purple"
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`group relative perspective-1000 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-${testimonial.color}-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-${testimonial.color}-400/20 transform-gpu preserve-3d`}
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${testimonial.color}-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className={`h-6 w-6 text-${testimonial.color}-400 fill-current group-hover:scale-110 transition-transform duration-300`} style={{ transitionDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-8 italic text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${testimonial.color}-400 to-${testimonial.color === 'lime' ? 'cyan' : testimonial.color === 'cyan' ? 'purple' : 'pink'}-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xl group-hover:text-lime-400 transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-4 md:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, label: "Happy Clients", value: "50+", color: "lime" },
                { icon: Award, label: "Projects Completed", value: "25+", color: "cyan" },
                { icon: Clock, label: "Response Time", value: "< 24h", color: "purple" },
                { icon: Zap, label: "Success Rate", value: "100%", color: "pink" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group relative perspective-1000 text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700 hover:border-${stat.color}-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-${stat.color}-400/20 transform-gpu preserve-3d`}
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                      stat.color === 'lime' ? 'bg-lime-400/20' :
                      stat.color === 'cyan' ? 'bg-cyan-400/20' :
                      stat.color === 'purple' ? 'bg-purple-400/20' :
                      'bg-pink-400/20'
                    }`}>
                      <stat.icon className={`h-10 w-10 group-hover:scale-110 transition-transform duration-300 ${
                        stat.color === 'lime' ? 'text-lime-400' :
                        stat.color === 'cyan' ? 'text-cyan-400' :
                        stat.color === 'purple' ? 'text-purple-400' :
                        'text-pink-400'
                      }`} />
                      <div className={`absolute inset-0 bg-${stat.color}-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                    </div>
                    <div className={`text-4xl font-bold text-white mb-3 group-hover:text-${stat.color}-400 transition-colors duration-300`}>{stat.value}</div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Footer */}
        <footer className="relative border-t border-gray-800 py-20 px-4 md:px-8 z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-instrument-sans text-reveal">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto text-reveal">
                Let's create something amazing together. I'm excited to hear about your vision and help bring it to life.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a 
                href="mailto:koussaiimahdi@gmail.com"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 text-black font-bold rounded-2xl hover:from-lime-300 hover:via-cyan-300 hover:to-purple-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/25"
              >
                <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              </a>
              <a 
                href="#"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-2xl hover:border-lime-400 hover:text-lime-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/10"
              >
                <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Schedule a Call</span>
              </a>
            </div>
            
            <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <span>© {new Date().getFullYear()} Koussai Mahdi • Made with</span>
              <Heart className="h-4 w-4 text-red-500 inline animate-pulse" />
              <span>for amazing projects</span>
            </div>
          </div>
        </footer>

        {/* Floating Elements */}
        <div className="floating-elements">
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

        <style>{`
        /* Enhanced Grid System */
        .grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(163, 230, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163, 230, 53, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          top: 80%;
          left: 20%;
        }

        /* 3D Perspective */
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        /* Text Reveal Animation */
        .text-reveal {
          overflow: hidden;
        }

        /* Floating Animation for Shapes */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-180deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        /* Custom Scrollbar */
        

        /* Enhanced Grid Pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(163, 230, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(163, 230, 53, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
          animation: gridPulse 4s ease-in-out infinite;
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        /* Magnetic Hover Effect */
        .magnetic {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .magnetic:hover {
          transform: translate3d(0, -5px, 0);
        }

        /* Glow Effects */
        .glow-lime {
          box-shadow: 0 0 20px rgba(163, 230, 53, 0.3);
        }

        .glow-cyan {
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        }

        .glow-purple {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
        }

        .glow-pink {
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
        }

        /* Smooth Transitions */
        * {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Custom Cursor */
        .cursor-pointer {
          cursor: none;
        }

        /* Enhanced Focus States */
        input:focus, textarea:focus, select:focus {
          transform: scale(1.02);
        }

        /* Parallax Elements */
        .parallax-slow {
          will-change: transform;
        }

        .parallax-fast {
          will-change: transform;
        }

        /* Loading States */
        .loading {
          position: relative;
          overflow: hidden;
        }

        .loading::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: loading 1.5s infinite;
        }

        @keyframes loading {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        `}</style>
    </motion.div>
  );
}