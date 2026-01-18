const CACHE_NAME = 'gpb-menu-v1';
const ASSETS = [
  '/GPB-Weekly_Dinner_menu/',
  '/GPB-Weekly_Dinner_menu/index.html',
  '/GPB-Weekly_Dinner_menu/manifest.json',
  '/GPB-Weekly_Dinner_menu/GPB Week 1 Dinner Menu 9.25.png',
  '/GPB-Weekly_Dinner_menu/GPB Week 2 Dinner Menu 9.25.png',
  '/GPB-Weekly_Dinner_menu/GPB Week 3 Dinner Menu 9.25.png',
  '/GPB-Weekly_Dinner_menu/GPB Week 4 Dinner Menu 9.25.png',
  '/GPB-Weekly_Dinner_menu/GPB Week 5 Dinner Menu 9.25.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
