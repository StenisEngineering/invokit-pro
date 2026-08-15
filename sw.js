const CACHE = 'invokit-v36-dashboard';
const SHELL = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install: cache the app shell, do NOT skip waiting automatically
// (let the update banner in the app handle it)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
  );
});

// Activate: delete old caches, claim clients
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Message: handle SKIP_WAITING from update banner
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch strategy
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // Network-first for API calls (licence validation Worker)
  if (url.hostname.includes('workers.dev')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Network-first for navigate (ensures fresh app on reload)
  // Falls back to cache if offline
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() =>
          caches.match(e.request).then(cached => cached || caches.match('/index.html'))
        )
    );
    return;
  }

  // Cache-first for all other assets (fonts, icons, etc.)
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
