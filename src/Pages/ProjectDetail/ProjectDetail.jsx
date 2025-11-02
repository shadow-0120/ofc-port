import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, User, Tag, ExternalLink, ChevronLeft, ChevronRight, Maximize2, X, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
// Import projects data with real images and website links
const projectsData = [
  {
    id: 'sbs-school',
    name: 'SBS School Management System',
    description: 'A comprehensive school management platform with student tracking, grade management, and parent communication features. This project revolutionized how educational institutions manage their daily operations, providing real-time insights and seamless communication between teachers, students, and parents.',
    date: '2024',
    category: 'Web Application',
    client: 'SBS Educational Group',
    website: 'https://sbsschool-lilac.vercel.app',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
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
    name: 'Joker Platform',
    description: 'An innovative platform with advanced features, real-time multiplayer capabilities, and immersive user experience. Built with cutting-edge technologies to provide seamless gaming experiences for players worldwide.',
    date: '2024',
    category: 'Gaming Platform',
    client: 'Joker Entertainment',
    website: 'https://jokeresgen.com',
    technologies: ['Three.js', 'WebGL', 'Socket.io', 'Redis'],
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
    website: 'https://kahina-vert.vercel.app',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
    image: '/images/kahina-hotel/kahina.png',
    images: [
      '/images/kahina-hotel/kahina.png',
      '/images/kahina-hotel/kahina1.png',
      '/images/kahina-hotel/kahina2.png'
    ]
  }
]

export default function ProjectDetail() {
  const [project, setProject] = useState(projectsData[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowLeft') prevLightboxImage()
        else if (e.key === 'ArrowRight') nextLightboxImage()
        else if (e.key === 'Escape') setIsLightboxOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isLightboxOpen, lightboxIndex])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextLightboxImage = () => {
    setLightboxIndex((lightboxIndex + 1) % project.images.length)
  }

  const prevLightboxImage = () => {
    setLightboxIndex((lightboxIndex - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8 z-50"
      >
        <button className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-300 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <Link to={"/projects"} className="font-medium">Back to Projects</Link>
        </button>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative pt-32 pb-20 px-6 md:px-12"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-violet-600/20 text-violet-300 rounded-full text-sm font-medium border border-violet-500/30">
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            {project.description}
          </motion.p>

          {/* Visit Website Button */}
          <motion.a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 group"
          >
            <Globe className="w-5 h-5" />
            <span>Visit Live Website</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </motion.section>

      {/* Project Details Card */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative px-6 md:px-12 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Project Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-violet-600/20 rounded-xl">
                    <User className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Client</p>
                    <p className="text-lg font-semibold">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-blue-600/20 rounded-xl">
                    <Calendar className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Year</p>
                    <p className="text-lg font-semibold">{project.date}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-purple-600/20 rounded-xl">
                    <Tag className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Category</p>
                    <p className="text-lg font-semibold">{project.category}</p>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-sm text-gray-400 mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="relative px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Project Gallery
            </h2>
            <p className="text-gray-400 text-lg">Explore the visual journey of this project</p>
          </motion.div>

          {/* Masonry Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={image}
                    alt={`${project.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between">
                        <p className="text-white font-semibold">View Full Size</p>
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
              className="absolute left-6 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
              className="absolute right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.images[lightboxIndex]}
                alt={`${project.name} - Image ${lightboxIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/70 backdrop-blur-xl rounded-full">
                <p className="text-white font-medium">
                  {lightboxIndex + 1} / {project.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="relative px-6 md:px-12 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-violet-600/20 to-blue-600/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to see it in action?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Experience the full functionality of {project.name} by visiting the live website
            </p>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 group"
            >
              <span>Explore Live Website</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer Wave */}
      <div className="relative h-32">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/5"
          />
        </svg>
      </div>
    </div>
  )
}