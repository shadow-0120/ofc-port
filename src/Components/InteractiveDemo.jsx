import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';
import './InteractiveDemo.css';

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const demoSteps = [
    {
      title: "Component Creation",
      code: `import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="card"
    >
      <h3>Interactive Card</h3>
      <p>Smooth animations with Framer Motion</p>
    </motion.div>
  );
};`,
      description: "Creating a reusable animated component with smooth transitions"
    },
    {
      title: "Animation Configuration",
      code: `const animations = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: "easeOut" }
};`,
      description: "Configuring smooth animations with custom easing"
    },
    {
      title: "Interactive Effects",
      code: `const interactiveProps = {
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  whileTap: { scale: 0.95 },
  drag: true,
  dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 }
};`,
      description: "Adding hover effects and drag interactions"
    },
    {
      title: "Final Result",
      code: `// Complete animated component
export default function InteractiveCard() {
  return (
    <motion.div
      {...animations}
      {...interactiveProps}
      className="interactive-card"
    >
      <h3>Amazing Animation!</h3>
      <p>Built with React & Framer Motion</p>
    </motion.div>
  );
}`,
      description: "The final component with all animations and interactions"
    }
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setShowResult(false);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          setShowResult(true);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setShowResult(false);
  };

  return (
    <motion.section
      className="interactive-demo"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.8 }}
    >
      <div className="demo-container">
        <motion.div
          className="demo-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <span className="demo-badge">Live Demo</span>
          <h2 className="demo-title">See My Code in Action</h2>
          <p className="demo-subtitle">
            Interactive demonstration of my development skills
          </p>
        </motion.div>

        <div className="demo-content">
          <div className="demo-controls">
            <button
              className={`control-button ${isPlaying ? 'active' : ''}`}
              onClick={isPlaying ? handlePause : handlePlay}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              {isPlaying ? 'Pause' : 'Play Demo'}
            </button>
            <button
              className="control-button reset"
              onClick={handleReset}
            >
              <RotateCcw size={20} />
              Reset
            </button>
          </div>

          <div className="demo-workspace">
            <div className="code-section">
              <div className="code-header">
                <div className="code-tabs">
                  <span className="tab active">Component.jsx</span>
                </div>
                <div className="code-actions">
                  <span className="language">JavaScript</span>
                </div>
              </div>
              
              <div className="code-content">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="code-block"
                  >
                    <code>{demoSteps[currentStep]?.code}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>

            <div className="preview-section">
              <div className="preview-header">
                <span className="preview-title">Live Preview</span>
                {showResult && (
                  <motion.div
                    className="success-indicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={16} />
                    Complete!
                  </motion.div>
                )}
              </div>
              
              <div className="preview-content">
                <motion.div
                  className="demo-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>Interactive Card</h3>
                  <p>Hover and click to see animations!</p>
                </motion.div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {demoSteps[currentStep] && (
              <motion.div
                className="step-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h4>{demoSteps[currentStep].title}</h4>
                <p>{demoSteps[currentStep].description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default InteractiveDemo;
