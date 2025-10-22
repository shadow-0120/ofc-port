// Service Worker for caching static assets
const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/assets/videos/home-video.mp4',
  '/models/model1.glb'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Don't cache module scripts, API calls, or development server files
  if (
    event.request.destination === 'script' && 
    (event.request.url.includes('/src/') || 
     event.request.url.includes('main.jsx') ||
     event.request.url.includes('vite') ||
     event.request.url.includes('node_modules'))
  ) {
    // Always fetch from network for module scripts
    event.respondWith(fetch(event.request));
    return;
  }
  
  // For other resources, use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
