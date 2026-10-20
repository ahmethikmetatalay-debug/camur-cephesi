// Uygulama olarak yüklenebilmek için gereken en basit service worker.
// Önbellek tutmaz: oyun zaten internet ister, böylece her güncelleme anında gelir.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
