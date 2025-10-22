import React, { useEffect, useRef } from 'react';
import './LogoCarousel.css';

const LogoCarousel = () => {
  const carouselRef = useRef(null);

  // Logo data with Unsplash images and external links
  const logos = [
    {
      id: 1,
      name: 'Apple',
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=200&fit=crop&crop=center',
      link: 'https://www.apple.com'
    },
    {
      id: 2,
      name: 'Google',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=200&fit=crop&crop=center',
      link: 'https://www.google.com'
    },
    {
      id: 3,
      name: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1633419463012-0a4a0a0a0a0a?w=200&h=200&fit=crop&crop=center',
      link: 'https://www.microsoft.com'
    },
    {
      id: 4,
      name: 'Tesla',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=200&fit=crop&crop=center',
      link: 'https://www.tesla.com'
    },
    {
      id: 5,
      name: 'Netflix',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=200&fit=crop&crop=center',
      link: 'https://www.netflix.com'
    }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Create smooth infinite scroll animation
    const animate = () => {
      carousel.style.transform = 'translateX(-50%)';
    };

    // Start animation after component mounts
    setTimeout(animate, 100);
  }, []);

  const handleLogoClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="logo-carousel-container">
      <div className="logo-carousel" ref={carouselRef}>
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="logo-card"
            onClick={() => handleLogoClick(logo.link)}
          >
            <div className="logo-image-container">
              <img
                src={logo.image}
                alt={logo.name}
                className="logo-image"
                loading="lazy"
              />
            </div>
            <div className="logo-name">{logo.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
