const CACHE_NAME = "simple-cache-v1";
const urlsToCache = ["/", "/offline", "/sw.js"];

self.addEventListener("install", event => {

    console.log('service worker install');

    const preLoaded = caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))

    event.waitUntil(preLoaded);

});

self.addEventListener("fetch", event => {

    console.log('service worker fetch');

    // const response = caches.match(event.request)
    //     .then(match => match || fetch(event.request));
    // event.respondWith(response);

    const response = caches.match(event.request)
        .then(match => match || fetch(event.request))
        .catch(error => {

            console.log('catch');
            // `fetch()` throws an exception when the server is unreachable but not
            // for valid HTTP responses, even `4xx` or `5xx` range.
            return caches.open(CACHE_NAME).then(cache => {
                console.log('offline catch')
                return cache.match('/offline');
            });

        
        });

    event.respondWith(response);

});