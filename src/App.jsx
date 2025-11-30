import React, { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CinematicSplashScreen from './Components/SplashScreen/CinematicSplashScreen';
import Navbar from './Components/Navbar/Navbar';
import PerformanceOptimizer from './Components/Performance/PerformanceOptimizer';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { preloadResources } from './utils/performance';

// Lazy load pages for better performance
const Home = lazy(() => import('./Pages/Home/Home'));
const Services = lazy(() => import('./Pages/Services/Services'));
const Projects = lazy(() => import('./Pages/Projects/Projects'));
const ProjectDetail = lazy(() => import('./Pages/ProjectDetail/ProjectDetail'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Resume = lazy(() => import('./Pages/Resume/Resume'));
const AdminLogin = lazy(() => import('./Pages/AdminDashboard/Login'));
const AdminDashboard = lazy(() => import('./Pages/AdminDashboard/Dashboard'));

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Preload critical resources
  useEffect(() => {
    preloadResources([
      { href: '/assets/videos/home-video.mp4', as: 'video' },
      { href: '/images/photo1.jpg', as: 'image' },
      { href: '/models/model1.glb', as: 'fetch' },
    ]);
  }, []);

  // Show splash screen on page reload/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      setShowSplash(true);
    };

    const handleLoad = () => {
      if (isFirstLoad) {
        setIsFirstLoad(false);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, [isFirstLoad]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <CinematicSplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <div className="text-white">
        <PerformanceOptimizer />
        <ConditionalNavbar />  {/* 👈 Navbar is shown/hidden automatically */}
        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              {/* Admin Routes */}
              <Route path="/admin-dashboard/login" element={<AdminLogin />} />
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

// 👇 Helper component to hide Navbar on specific pages
function ConditionalNavbar() {
  const location = useLocation();

  // Add any path prefixes where you want to hide the navbar
  const hideNavbarOn = ['/project/', '/admin-dashboard'];

  // Check if current route starts with any of those prefixes
  const shouldHideNavbar = hideNavbarOn.some(path =>
    location.pathname.startsWith(path)
  );

  return shouldHideNavbar ? null : <Navbar />;
}
