const CACHE_NAME = 'gpb-menu-v13'; // Changed version to force update
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-128.png',
  './icon-512.png'
];

// On install, cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // Force the new service worker to take over immediately
});

// Network-first strategy: Try the internet first for the newest menu
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
