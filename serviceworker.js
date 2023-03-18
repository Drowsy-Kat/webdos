// You can change the number on the end of the site to refresh the cache
const CACHE_NAME = 'my-site-v2';

// add all your files in the CACHE_URLS
const CACHE_URLS = ['/',
  'styles/cssdemo.css',
  'cssdemo.html',
  'demos.html',
  'holding.html',
  'index.html',
  'qualifications.html',
  'interest.html',
  'styles/styles.css',
  'manifest.json',
  '404.html',
  'images/ai.webp',
  'images/css.webp',
  'images/css2.webp',
  'images/drawing.webp',
  'images/event.webp',
  'images/heart.webp',
  'images/k.ico',
  'images/k.webp',
  "images/khizer's-portfolio-1.webp",
  'images/layers.webp',
  'images/me-big.webp',
  'images/me-med.webp',
  'images/me-small.webp',
  'images/star.webp',
  'images/user.webp',
  'images/k.png'


  // add all your images in here, in the correct folders. No need to add this file
];
//DO NOT change any of the code below

self.addEventListener("install", function (event) {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log("Cache opened");
        return cache.addAll(CACHE_URLS);
      })
  );
});


self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName.startsWith('my-site-') && CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log(`Return ${event.request.url} from cache`);
        return response;
      }
      console.log(`Fetch ${event.request.url} from network`);
      return fetch(event.request);
    })
  );
});
