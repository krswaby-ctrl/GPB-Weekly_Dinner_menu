const CACHE_NAME = 'gpb-menu-cache-v1';
const assetsToCache = [
  './',
  './index.html',
  './manifest.json',
  './GPB Week 1 Dinner Menu 9.25.png',
  './GPB Week 2 Dinner Menu 9.25.png',
  './GPB Week 3 Dinner Menu 9.25.png',
  './GPB Week 4 Dinner Menu 9.25.png',
  './GPB Week 5 Dinner Menu 9.25.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
