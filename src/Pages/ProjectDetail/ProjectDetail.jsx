import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Code2, Layers, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import './ProjectDetail.css';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
                <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
                <Link to="/projects" className="btn-primary">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            {/* Hero Section */}
            <div className="detail-hero">
                <div className="hero-background">
                    <img src={project.image} alt={project.title} className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="detail-title">{project.title}</h1>
                        <p className="detail-short-desc">{project.shortDescription}</p>

                        <div className="hero-buttons">
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    <ExternalLink size={20} /> View Live Demo
                                </a>
                            )}
                            {project.sourceLink && (
                                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                                    <Github size={20} /> View Source
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="detail-content">
                <motion.div
                    className="main-column"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Overview */}
                    <section className="description-section">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="text-white mb-7" size={28} />
                            <h2>Overview</h2>
                        </div>
                        <p className="full-description">{project.fullDescription}</p>
                    </section>

                    {/* Key Features */}
                    {project.features && (
                        <section className="features-section">
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="text-white mb-7" size={28} />
                                <h2>Key Features</h2>
                            </div>
                            <div className="features-grid">
                                {project.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="feature-card"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h3>0{idx + 1}.</h3>
                                        <p>{feature}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}
                </motion.div>

                {/* Sidebar Info */}
                <motion.div
                    className="sidebar-column"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="tech-stack-container">
                        <h3>Technologies Used</h3>
                        <div className="tech-tags">
                            {project.techUsed.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Gallery Section */}
                {project.gallery && (
                    <motion.div
                        className="gallery-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <ImageIcon className="text-white mb-7" size={28} />
                            <h2>Project Gallery</h2>
                        </div>
                        <div className="gallery-grid">
                            {project.gallery.map((img, idx) => (
                                <div key={idx} className="gallery-image-wrapper">
                                    <img src={img} alt={`Gallery ${idx + 1}`} className="gallery-img" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="pb-20 text-center">
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <ArrowLeft size={16} /> Back to All Projects
                </Link>
            </div>
        </div>
    );
}
