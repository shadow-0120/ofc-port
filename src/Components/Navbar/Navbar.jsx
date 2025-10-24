import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  
  // Refs for GSAP animations
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(navbarRef.current, 
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(menuItemsRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Mobile menu animation
  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
    // toggles mobile menu state
  };

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMenuOpen) {
      toggleMobileMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Cleanup effect to remove body class on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  return (
    <nav 
      ref={navbarRef}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-1000 bg-white/10 backdrop-blur-[20px] border border-white/20 rounded-[50px] transition-all duration-400 ease-in-out px-8 py-4 w-auto box-border lg:px-6 lg:py-3 md:top-[15px] md:px-6 md:py-3 sm:top-2.5 sm:px-4 sm:py-2.5 xs:top-[8px] xs:px-3 xs:py-2"
      role="navigation"
      aria-label="Main navigation"
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      <div className="flex items-center justify-center gap-8 w-auto lg:gap-6 md:justify-center md:gap-4 sm:gap-3 xs:gap-2">
        {/* Time Display */}
  <div className="text-white font-semibold text-2xl transition-all duration-300 ease-in-out relative cursor-default select-none shrink-0 md:shrink-0" ref={logoRef}>
          <div className="flex flex-col items-center gap-2 md:gap-1 sm:gap-1 xs:gap-0.5">
            <span className="text-2xl text-white font-bold font-mono tracking-wider leading-none md:text-xl sm:text-lg xs:text-base">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false, 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
            <span className="text-sm text-white/70 font-normal uppercase tracking-wider leading-none md:text-xs sm:text-[0.6rem] xs:text-[0.5rem]">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="items-center gap-4 flex-wrap justify-center hidden lg:flex" role="menubar">
          {navItems.map((item, index) => (
            <div key={item.name} className="inline-block">
              <Link
                to={item.path}
                className={`text-white/80 font-medium text-lg transition-all duration-300 ease-in-out py-3 px-6 rounded-[25px] relative block text-center min-w-20 hover:text-white hover:bg-white/10 hover:-translate-y-px lg:py-2.5 lg:px-5 lg:text-base ${
                  location.pathname === item.path 
                    ? 'text-white bg-blue-400/20 border border-blue-400/30' 
                    : ''
                }`}
                ref={el => menuItemsRef.current[index] = el}
                role="menuitem"
              >
                <span>
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`flex lg:hidden flex-col justify-center items-center w-14 h-14 bg-transparent border-none cursor-pointer p-0 z-1001 rounded-full transition-all duration-300 ease-in-out hover:bg-white/10 sm:w-12 sm:h-12 xs:w-10 xs:h-10 ${
            isMenuOpen ? 'bg-white/15' : ''
          }`}
          onClick={toggleMobileMenu}
          ref={hamburgerRef}
          aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span ref={line1Ref} className="w-[30px] h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-sm origin-center sm:w-[26px] sm:h-[3px] xs:w-[22px] xs:h-[2.5px]"></span>
          <span ref={line2Ref} className="w-[30px] h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-sm origin-center sm:w-[26px] sm:h-[3px] xs:w-[22px] xs:h-[2.5px]"></span>
          <span ref={line3Ref} className="w-[30px] h-1 bg-white my-1 transition-all duration-300 ease-in-out rounded-sm origin-center sm:w-[26px] sm:h-[3px] xs:w-[22px] xs:h-[2.5px]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-0 left-[50%] transform -translate-x-1/2 bottom-0 w-screen h-screen bg-black/95 backdrop-blur-[20px] z-999 hidden lg:flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden opacity-0 invisible transition-all duration-300 ease-in-out box-border ${
          isMenuOpen ? 'flex! opacity-100 visible' : ''
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            toggleMobileMenu();
          }
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className={`flex flex-col items-center gap-4 text-center w-full max-w-[500px] bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-[25px] p-10 transform transition-transform duration-300 ease-in-out mx-auto relative min-h-fit max-h-[90vh] overflow-y-auto box-border sm:gap-3 sm:p-8 sm:max-w-[450px] xs:gap-2 xs:p-6 xs:max-w-[400px] ${
          isMenuOpen ? 'scale-100' : 'scale-90'
        }`}>
         
          <nav className="flex flex-col gap-2 w-full" role="menu">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <Link
                  to={item.path}
                  className={`text-white/80 text-xl font-medium py-4 px-6 rounded-[25px] transition-all duration-300 ease-in-out w-full text-center relative overflow-hidden min-h-11 flex items-center justify-center hover:text-white hover:bg-white/10 hover:-translate-y-0.5 sm:text-lg sm:py-3 sm:px-5 xs:text-base xs:py-2.5 xs:px-4 ${
                    location.pathname === item.path 
                      ? 'text-white bg-blue-400/20 border border-blue-400/30' 
                      : ''
                  }`}
                  onClick={toggleMobileMenu}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;