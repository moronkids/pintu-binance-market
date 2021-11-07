/* eslint-disable no-restricted-globals */
var CACHE_NAME = "task-manager-pwa";
var urlsToCache = [
  "/",
];

// Install service worker
self.addEventListener("install", (event) => {
  // Perform the install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return the requests
// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }

//       return fetch(event.request).then(function (response) {
//         // Check if we received a valid response
//         if (!response || response.status !== 200 || response.type !== "basic") {
//           return response;
//         }

//         // IMPORTANT: Clone the response. A response is a stream
//         // and because we want the browser to consume the response
//         // as well as the cache consuming the response, we need
//         // to clone it so we have two streams.
//         var responseToCache = response.clone();

//         caches.open(CACHE_NAME).then(function (cache) {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((response) => (response ? response : fetch(e.request)))
  );
});

// Update service worker
self.addEventListener("activate", (event) => {
  console.info("Event: Activate");
  event.waitUntil(
    self.clients.claim(),
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
