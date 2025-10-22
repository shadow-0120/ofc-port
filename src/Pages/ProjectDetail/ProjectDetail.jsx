import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProjectDetail.css'

gsap.registerPlugin(ScrollTrigger)


// Import projects data with real images
const projectsData = [
  {
    id: 'sbs-school',
    name: 'SBS School Management System',
    description: 'A comprehensive school management platform with student tracking, grade management, and parent communication features. This project revolutionized how educational institutions manage their daily operations, providing real-time insights and seamless communication between teachers, students, and parents.',
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
    name: 'Joker  Platform',
    description: 'An innovative  platform with advanced features, real-time multiplayer capabilities, and immersive user experience. Built with cutting-edge technologies to provide seamless gaming experiences for players worldwide.',
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
    description: 'A comprehensive hotel management solution with booking system, guest services, and operational analytics. This platform streamlines hotel operations and enhances guest experience through digital innovation.',
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

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  const galleryRef = useRef(null)
  const imageRefs = useRef([])
  const fullscreenRefs = useRef([])

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === id)
    setProject(foundProject)
  }, [id])

  useEffect(() => {
    if (project) {
      // Fullscreen image animations with enhanced parallax
      const fullscreenImages = fullscreenRefs.current
      fullscreenImages.forEach((section, index) => {
        if (section) {
          const img = section.querySelector('.fullscreen-image')
          const overlay = section.querySelector('.image-overlay')
          
          // Entrance animation
          gsap.fromTo(section, 
            {
              opacity: 0,
              y: 100
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          )

          // Image parallax effect
          gsap.to(img, {
            y: -100,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          })

          // Overlay fade in on hover
          if (overlay) {
            gsap.set(overlay, { opacity: 0 })
          }
        }
      })

      // Keyboard navigation
      const handleKeyPress = (e) => {
        if (e.key === 'ArrowLeft') {
          prevImage()
        } else if (e.key === 'ArrowRight') {
          nextImage()
        } else if (e.key === 'Escape') {
          closeFullscreen()
        }
      }

      document.addEventListener('keydown', handleKeyPress)
      
      return () => {
        document.removeEventListener('keydown', handleKeyPress)
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [project])

  const closeFullscreen = () => {
    setIsFullscreen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    const nextIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1
    setCurrentImageIndex(nextIndex)
    scrollToImage(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    scrollToImage(prevIndex)
  }

  const scrollToImage = (index) => {
    const targetSection = fullscreenRefs.current[index]
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="loading-state">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="loading-spinner"
          >
            <div className="spinner"></div>
            <p>Loading project...</p>
          </motion.div>
        </div>
      </div>
    )
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-detail-container"
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="back-button"
      >
        <Link to="/projects" className="back-link">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="project-title"
          >
            {project.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="project-description"
          >
            {project.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Project Details Table */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="details-section"
      >
        <div className="details-container">
          <h2 className="section-title">Project Details</h2>
          <div className="details-table">
            <div className="detail-row">
              <div className="detail-label">
                <User size={20} />
                <span>Client</span>
              </div>
              <div className="detail-value">{project.client}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">
                <Calendar size={20} />
                <span>Year</span>
              </div>
              <div className="detail-value">{project.date}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">
                <Tag size={20} />
                <span>Category</span>
              </div>
              <div className="detail-value">{project.category}</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Scroll-Based Full-Screen Gallery */}
      <section className="scroll-gallery-section">
        <div className="scroll-gallery-container">
          <h2 className="section-title">Project Gallery</h2>
          <p className="gallery-instruction">Scroll to view full-screen images</p>
        </div>
        
        {project.images.map((image, index) => (
          <motion.section
            key={index}
            className="fullscreen-image-section"
            ref={el => fullscreenRefs.current[index] = el}
            style={{ height: '100vh' }}
          >
            <div className="fullscreen-image-container">
              <img 
                src={image} 
                alt={`${project.name} - Image ${index + 1}`}
                className="fullscreen-image"
              />
              <div className="image-overlay">
                <div className="image-info">
                  <h3 className="image-title">{project.name}</h3>
                  <p className="image-counter">{index + 1} / {project.images.length}</p>
                </div>
                <div className="image-controls">
                  <button 
                    className="nav-btn prev-btn" 
                    onClick={prevImage}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div className="scroll-indicator">
                    <div className="scroll-dots">
                      {project.images.map((_, dotIndex) => (
                        <div 
                          key={dotIndex}
                          className={`scroll-dot ${index === dotIndex ? 'active' : ''}`}
                          onClick={() => {
                            setCurrentImageIndex(dotIndex)
                            scrollToImage(dotIndex)
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <button 
                    className="nav-btn next-btn" 
                    onClick={nextImage}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </section>

      {/* Moving Text Animation */}
      <motion.section
        style={{ y }}
        className="moving-text-section"
      >
        <div className="moving-text-container">
          <motion.div
            animate={{ x: [0, -100] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
            className="moving-text"
          >
            <span>More Work</span>
            <span>More Work</span>
            <span>More Work</span>
            <span>More Work</span>
            <span>More Work</span>
            <span>More Work</span>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}
