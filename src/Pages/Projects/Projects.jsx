import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projectsData } from '../../data/projectsData'
import './Projects.css'

export default function Projects() {
  // Using static data, so no loading/error states needed

  if (projectsData.length === 0) {
    return (
      <div className="projects-container min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">No projects available at the moment.</p>
        </div>
      </div>
    )
  }

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
                  alt={project.title}
                  className="card-image"
                />
                <div className="card-overlay">
                  <motion.div
                    className="view-project"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Full Details
                  </motion.div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
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
