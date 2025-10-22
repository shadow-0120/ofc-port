import React, { useState, useEffect } from 'react';
import './CinematicSplashScreen.css';

const CinematicSplashScreen = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const increment = 100 / (duration / 16); // 60fps animation
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for cinematic feel (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newCounter = Math.floor(easedProgress * 100);
      
      setCounter(newCounter);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Counter complete, start fade out
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete && onComplete();
          }, 500); // Wait for fade out animation
        }, 500); // Brief pause at 100%
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className={`cinematic-splash ${!isVisible ? 'cinematic-splash--fade-out' : ''}`}>
      <div className="cinematic-splash__overlay">
        <div className="cinematic-splash__counter">
          <span className="cinematic-splash__number">{counter}</span>
          <div className="cinematic-splash__percentage">%</div>
        </div>
        <div className="cinematic-splash__loading-bar">
          <div 
            className="cinematic-splash__progress" 
            style={{ width: `${counter}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CinematicSplashScreen;
