import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Palette, Smartphone, Globe, Database, Shield, Zap, 
  Users, Award, Clock, CheckCircle, ArrowRight, Star, 
  Monitor, Smartphone as Mobile, Server, Lock, Rocket,
  Layers, Cpu, Wifi, Eye, Heart, Target, TrendingUp, Crown
} from 'lucide-react';
import './services.css';

export default function Services() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional full-stack web development, UI/UX design, and mobile app development services",
    "provider": {
      "@type": "Person",
      "name": "Koussai Mahdi",
      "jobTitle": "Full Stack Developer & UI/UX Designer"
    },
    "offers": {
      "@type": "Offer",
      "description": "Custom web development solutions including frontend, backend, mobile apps, and UI/UX design"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    }
  };

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Vue.js, and cutting-edge technologies.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion","Gsap"],
      color: "lime",
      gradient: "from-lime-400 to-green-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and optimal performance.",
      features: ["Node.js & Express", "Python & Django", "Database Design", "API Development", "Microservices"],
      color: "cyan",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Mobile,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native performance and user experience.",
      features: ["React Native", "Flutter", "iOS & Android", "PWA Development", "App Store Optimization"],
      color: "purple",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
      color: "pink",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Efficient data management with optimized queries and scalable database architecture.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Database Optimization", "Data Migration"],
      color: "orange",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Shield,
      title: "Security & DevOps",
      description: "Secure, reliable deployments with continuous integration and monitoring.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Security Audits", "Performance Monitoring"],
      color: "emerald",
      gradient: "from-emerald-400 to-teal-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision, goals, and requirements through detailed consultation.",
      icon: Target
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes for your approval.",
      icon: Eye
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your solution with clean, maintainable code and rigorous testing.",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "Seamless deployment with ongoing support and maintenance services.",
      icon: Rocket
    }
  ];



  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+", color: "lime" },
    { icon: Award, label: "Projects Completed", value: "75+", color: "cyan" },
    { icon: Clock, label: "Years Experience", value: "5+", color: "purple" },
    { icon: TrendingUp, label: "Success Rate", value: "100%", color: "pink" }
  ];

  return (
    <>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="services-container"
    >
      {/* Header Section */}
      <motion.div 
        className="services-header"
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
            Professional Services
          </motion.div>
          <motion.h1 
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Web Development Services
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Transform your ideas into powerful digital experiences. From concept to deployment, 
            I provide comprehensive web development solutions that drive results.
          </motion.p>
        </div>
      </motion.div>


      {/* Services Grid */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-instrument-sans">
              What I Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-400/10 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${
                      service.color === 'lime' ? 'text-lime-400' :
                      service.color === 'cyan' ? 'text-cyan-400' :
                      service.color === 'purple' ? 'text-purple-400' :
                      service.color === 'pink' ? 'text-pink-400' :
                      service.color === 'orange' ? 'text-orange-400' :
                      'text-emerald-400'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-lime-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <button className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Plans Section */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-instrument-sans">
              Simple Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your project. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-400/10 h-full">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-lime-400/10">
                    <Zap className="h-8 w-8 text-lime-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-gray-400 mb-4">Perfect for small projects</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    $199
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Up to 5 pages</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Basic animations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>2 weeks delivery</span>
                  </li>
                </ul>
                
                <a 
                  href="tel:+213671376330"
                  className="w-full py-3 px-6 bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold rounded-xl hover:from-lime-300 hover:to-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 inline-block text-center"
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Professional Plan - Featured */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md p-8 rounded-2xl border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 h-full relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-cyan-400/10">
                      <Rocket className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                    <p className="text-gray-400 mb-4">Ideal for growing businesses</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      $399
                      <span className="text-lg text-gray-400 font-normal">/project</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span>Up to 15 pages</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span>Advanced animations</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span>CMS integration</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span>SEO optimization</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span>3 weeks delivery</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                      <span>1 month support</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="tel:+213671376330"
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 inline-block text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/10 h-full">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-purple-400/10">
                    <Crown className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-gray-400 mb-4">For large-scale projects</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    $799
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>Unlimited pages</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>Custom animations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>4 weeks delivery</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <span>3 months support</span>
                  </li>
                </ul>
                
                <a 
                  href="tel:+213671376330"
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-300 hover:to-pink-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 inline-block text-center"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-400 mb-4">
              All plans include free consultation and project planning
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-lime-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-lime-400" />
                <span>Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-lime-400" />
                <span>Source code included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-instrument-sans">
              My Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures your project's success from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-2xl mb-6">
                    <step.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700 hover:border-lime-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-400/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                  stat.color === 'lime' ? 'bg-lime-400/10' :
                  stat.color === 'cyan' ? 'bg-cyan-400/10' :
                  stat.color === 'purple' ? 'bg-purple-400/10' :
                  'bg-pink-400/10'
                }`}>
                  <stat.icon className={`h-8 w-8 ${
                    stat.color === 'lime' ? 'text-lime-400' :
                    stat.color === 'cyan' ? 'text-cyan-400' :
                    stat.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md p-12 rounded-2xl border border-gray-700 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-instrument-sans">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. I'm excited to hear about your vision and help bring it to life.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lime-400 to-cyan-400 text-black font-semibold rounded-xl hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-400/25"
                >
                  <Heart className="h-5 w-5" />
                  Get Started Today
                </a>
                <a 
                  href="/resume"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                  View Portfolio
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>Response within 24 hours • Free consultation • No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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

      <style jsx>{`
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
      `}</style>
    </motion.div>
    </>
  );
}
