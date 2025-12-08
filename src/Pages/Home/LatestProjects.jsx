import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './LatestProjects.css'

import { projectsData } from '../../data/projectsData'

export default function LatestProjects() {
  // Get the 4 latest projects
  const latestProjects = projectsData.slice(0, 4)

  return (
    <motion.section
      className="latest-projects-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="latest-projects-container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="section-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
          >
            Latest Work
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Explore my recent work and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {latestProjects.map((project, index) => (
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

        {/* See More Button */}
        <motion.div
          className="see-more-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <Link to="/projects" className="see-more-button">
            <span>See More Projects</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
