import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Resume.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const resumeRef = useRef(null);
  const photoRef = useRef(null);
  const sectionsRef = useRef([]);

  // Sample resume data - you can customize this
  const resumeData = {
    personalInfo: {
      name: "Koussai Mahdi",
      title: "Full Stack Developer & UI/UX Designer",
      email: "koussaiimahdi@gmail.com",
      phone: "+213 671 376 330",
      location: "Kolea, Tipaza, Algeria",
      website: "koussaidev.com",
      linkedin: "https://www.linkedin.com/in/koussai-mahdi-25b200283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    summary: "Passionate full-stack developer with 4+ years of experience creating innovative web applications. Specialized in React, Node.js, and modern web technologies. Committed to delivering high-quality solutions that drive business growth.",
    experience: [
      {
        title: "Web Developer (Freelance)",
        company: "",
        period: "2021 - Present",
        description: "Develops modern, responsive websites and landing pages for clients using HTML, CSS, JavaScript, and React. Focuses on delivering user-friendly interfaces, smooth performance, and clean design while managing projects from concept to launch.",
        achievements: [
          "Completed multiple freelance projects with high client satisfaction.",
          "Built optimized landing pages that improved client conversions.",
          "Strengthened brand image through professional, SEO-ready websites."
        ]
      },
      {
        title: "Thumbnail Designer & Content Creator",
        company: "",
        period: "2024 - Present",
        description: "Creates high-quality visual content and thumbnails for YouTube and Instagram, combining design psychology with marketing principles to boost engagement. Produces educational and tech-related videos that inspire and teach online audiences.",
        achievements: [
          "Created over 20+ high-quality thumbnails and videos",
          "Boosted engagement rates by 30% through strategic design choices",
          "Developed a consistent brand voice that resonates with target audiences"
        ]
      },
      {
        title: "Front-End Developer – School & Club Projects",
        company: "",
        period: "2021 - Present",
        description: "Leads the web development initiatives of the school’s scientific club. Designs and implements responsive websites and internal platforms to enhance project visibility and digital management.",
        achievements: [
          "Developed and maintained multiple school websites and internal platforms",
          "Enhanced project visibility through responsive design and digital management",
          "Collaborated with cross-functional teams to deliver high-quality products"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Node.js", level: 63 },
        { name: "Python", level: 40 },
        { name: "TypeScript", level: 45 },
        { name: "MongoDB", level: 30 },
        { name: "Firebase", level: 80 },
        { name: "AWS", level: 70 }
      ],
      soft: [
        "Team Leadership",
        "Problem Solving",
        "Communication",
        "Project Management",
        "Mentoring",
        "Agile Methodologies"
      ]
    },
    education: [
      {
        degree: "",
        school: "Higher School of Management and Digital Economy",
        year: "2024 - Present",
        
      }
    ],
    certifications: [
      "Frontend Developer Certificate",
      "React Professional Certification",
    
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        name: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        technologies: ["React", "Socket.io", "Express", "PostgreSQL"]
      },
      {
        name: "Education Platform",
        description: "Education platform for students to learn and improve their skills",
        technologies: ["React", "Tailwind CSS", "Firebase", "Stripe API"]
      },
      {
        name: "Joker Club Platform",
        description: "Joker Club Platform To manage the club and the members",
        technologies: ["React",  "Tailwind CSS", "Express", "PostgreSQL"]
      }
    ]
  };

  // GSAP animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial animations
    tl.fromTo(photoRef.current, 
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    )
    .fromTo(sectionsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
      "-=0.5"
    );

    // Scroll-triggered animations
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div className="resume-page">
      <div className="resume-container" ref={resumeRef}>
        {/* Header Section */}
        <div className="resume-header">
          <div className="resume-header-content">
            <div className="resume-photo-section" ref={photoRef}>
              <img 
                src="/images/me.jpg" 
                alt="Profile Photo" 
                className="resume-profile-photo"
                onError={(e) => {
                  e.target.src = "/images/photo1.jpg";
                }}
              />
              <div className="resume-photo-frame"></div>
            </div>
            <div className="resume-header-info">
              <h1 className="resume-name">{resumeData.personalInfo.name}</h1>
              <h2 className="resume-title">{resumeData.personalInfo.title}</h2>
              <div className="resume-contact-info">
                <div className="resume-contact-item">
                  <span>{resumeData.personalInfo.email}</span>
                </div>
                <div className="resume-contact-item">
                  <span>{resumeData.personalInfo.phone}</span>
                </div>
                <div className="resume-contact-item">
                  <span>{resumeData.personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Divider */}
        <div className="resume-divider">
          <div className="resume-divider-line"></div>
        </div>

        {/* Summary Section */}
        <section className="resume-section" ref={el => sectionsRef.current[0] = el}>
          <h3 className="resume-section-title">
            Professional Summary
          </h3>
          <div className="resume-section-content">
            <p className="resume-summary-text">{resumeData.summary}</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="resume-section" ref={el => sectionsRef.current[1] = el}>
          <h3 className="resume-section-title">
            Professional Experience
          </h3>
          <div className="resume-section-content">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="resume-experience-item">
                <div className="resume-experience-header">
                  <h4 className="resume-job-title">{job.title}</h4>
                  <span className="resume-job-period">{job.period}</span>
                </div>
                <div className="resume-company-name">{job.company}</div>
                <p className="resume-job-description">{job.description}</p>
                <ul className="resume-achievements-list">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="resume-achievement-item">
                      <span className="resume-achievement-bullet">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="resume-section" ref={el => sectionsRef.current[2] = el}>
          <h3 className="resume-section-title">
            Skills & Expertise
          </h3>
          <div className="resume-section-content">
            <div className="resume-skills-grid">
              <div className="resume-technical-skills">
                <h4 className="resume-skills-subtitle">Technical Skills</h4>
                <div className="resume-skills-list">
                  {resumeData.skills.technical.map((skill, index) => (
                    <div key={index} className="resume-skill-item">
                      <div className="resume-skill-info">
                        <span className="resume-skill-name">{skill.name}</span>
                        <span className="resume-skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="resume-skill-bar">
                        <div 
                          className="resume-skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="resume-soft-skills">
                <h4 className="resume-skills-subtitle">Soft Skills</h4>
                <div className="resume-soft-skills-list">
                  {resumeData.skills.soft.map((skill, index) => (
                    <span key={index} className="resume-soft-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="resume-section" ref={el => sectionsRef.current[3] = el}>
          <h3 className="resume-section-title">
            Education
          </h3>
          <div className="resume-section-content">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="resume-education-item">
                <h4 className="resume-degree-title">{edu.degree}</h4>
                <div className="resume-education-details">
                  <span className="resume-school-name">{edu.school}</span>
                  <span className="resume-education-period">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="resume-section" ref={el => sectionsRef.current[4] = el}>
          <h3 className="resume-section-title">
            Certifications
          </h3>
          <div className="resume-section-content">
            <div className="resume-certifications-list">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="resume-certification-item">
                  <span className="resume-cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="resume-section" ref={el => sectionsRef.current[5] = el}>
          <h3 className="resume-section-title">
            Key Projects
          </h3>
          <div className="resume-section-content">
            <div className="resume-projects-grid">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="resume-project-item">
                  <h4 className="resume-project-name">{project.name}</h4>
                  <p className="resume-project-description">{project.description}</p>
                  <div className="resume-project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="resume-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Divider */}
        <div className="resume-divider resume-footer-divider">
          <div className="resume-divider-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
