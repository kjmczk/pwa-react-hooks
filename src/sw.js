workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// workbox.routing.registerRoute(
//   /^https:\/\/(?:fonts|cdnjs).*\.com/,
//   new workbox.strategies.StaleWhileRevalidate()
// );

// Cache Google Fonts

// Cache the Google Fonts stylesheets with a stale while revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30
      })
    ]
  })
);

// Cache minified JavaScript and CSS
workbox.routing.registerRoute(
  /^https:.*\.min\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate()
);

self.addEventListener('install', event => {
  console.log('install');
});
self.addEventListener('activate', event => {
  console.log('activate');
});
// self.addEventListener('fetch', event => {
//   console.log('fetch');
// });
