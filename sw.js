// Service Worker for VisualBTC - PWA Support
// Cache strategy: Cache-first for static assets, network-first for dynamic content

const CACHE_NAME = 'visualbtc-v1';
const CACHE_VERSION = '1.0.0';
const FULL_CACHE_NAME = CACHE_NAME + '-' + CACHE_VERSION;

// Assets to cache during service worker installation
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/visualPrivKey.css',
  '/js/visualPrivKeyMain.js',
  '/js/bitcoinJS-lib.js',
  '/js/QRcode.js',
  '/favicon.ico',
  '/robots.txt'
];

// Install event - cache assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(FULL_CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Cache miss - try network
        return fetch(event.request).catch(function() {
          // Both cache and network failed
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      }
  )());
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // Delete old caches
          if (cacheName !== FULL_CACHE_NAME && cacheName.startsWith(CACHE_NAME)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Push event - for push notifications (optional PWA feature)
self.addEventListener('push', function(event) {
  const title = 'VisualBTC';
  const options = {
    body: 'Atualização disponível!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    data: {
      url: '/'
    }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// Notification click event
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});