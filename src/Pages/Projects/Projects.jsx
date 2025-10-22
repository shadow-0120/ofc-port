import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Projects.css'

const projectsData = [
  {
    id: 'sbs-school',
    name: 'SBS School Management System',
    description: 'A comprehensive school management platform with student tracking, grade management, and parent communication features.',
    date: '2024',
    category: 'Web Application',
    client: 'SBS Educational Group',
    image: '/images/sbs/sbs1.png',
    images: [
      '/images/sbs/sbs1.png',
      '/images/sbs/sbs2.png',
      '/images/sbs/sbs3.png',
      '/images/sbs/sbs4.png',
      '/images/sbs/sbs5.png',
      '/images/sbs/sbs6.png',
      '/images/sbs/sbs7.png',
      '/images/sbs/sbs8.png',
      '/images/sbs/sbs9.png'
    ]
  },
  {
    id: 'joker-project',
    name: 'Joker Club Platform',
    description: 'An innovative  platform with advanced features, real-time multiplayer capabilities, and immersive user experience.',
    date: '2024',
    category: 'Gaming Platform',
    client: 'Joker Entertainment',
    image: '/images/joker/joker.png',
    images: [
      '/images/joker/joker.png',
      '/images/joker/joker1.png',
      '/images/joker/joker2.png',
      '/images/joker/joker4.png',
      '/images/joker/joker5.png'
    ]
  },
  {
    id: 'kahina-hotel',
    name: 'Kahina Hotel Management System',
    description: 'A comprehensive hotel management solution with booking system, guest services, and operational analytics.',
    date: '2023',
    category: 'Hospitality',
    client: 'Kahina Hotel Group',
    image: '/images/kahina-hotel/kahina.png',
    images: [
      '/images/kahina-hotel/kahina.png',
      '/images/kahina-hotel/kahina1.png',
      '/images/kahina-hotel/kahina2.png'
    ]
  }
]

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="projects-container"
    >
      {/* Header Section */}
      <motion.div 
        className="projects-header"
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
            (2021-2025)
          </motion.div>
          <motion.h1 
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            My Latest Work
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A collection of projects showcasing modern design, innovative solutions, and cutting-edge technology
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <Link to={`/project/${project.id}`} className="card-link">
              <div className="card-image-container">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="card-image"
                />
                <div className="card-overlay">
                  <motion.div 
                    className="view-project"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <span className="project-date">{project.date}</span>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ 
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span>Scroll to explore</span>
      </motion.div>

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
    </motion.div>
  )
}