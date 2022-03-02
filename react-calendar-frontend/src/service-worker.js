/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

// Precache all of the assets generated by your build process.
// Their URLs are injected into the manifest variable below.
// This variable must be present somewhere in your service worker file,
// even if you decide not to use precaching. See https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /_, skip.

    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});






// Any other custom service worker logic can go here.

//Entender Service Worker sin Workbox
// https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=es

// Mi propia configuración del Service Worker sin Workbox
/*
 Self -> Hace referencia a mi Service Worker
 Cache Storage -> Disco duro del cliente
*/

self.addEventListener( 'install', async( event ) => {
  console.log('instalación');
  console.log('Service Worker detecta que ya corri una vez, no vuelve a correr, solo con skipWaiting ');

  const cache = await caches.open('cache-v1');

  await cache.addAll([
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css',
    '/favicon.ico'
  ]);

});

//http://localhost:4000/api/events
const apiOfflineFallbacks = [
  'http://localhost:4000/api/auth/renew',
  'http://localhost:4000/api/events'
]


//Cualquier Request GET,POST, ...
//Network first with cache fallback
self.addEventListener( 'fetch', ( event ) => {
  //Saber que peticiones se estan haciendo: 
  //console.log(event.request.url);

  //if( event.request.url !== 'http://localhost:4000/api/auth/renew' || 'http://localhost:4000/api/events' ) return;
  if ( !apiOfflineFallbacks.includes( event.request.url )) return;
  //console.log(event.request.url)
  //console.log('VOY A MANEJAR EL RENEW');

  const resp = fetch( event.request )
    .then( response => {

      if( !response ) {
        return caches.match( event.request )
      }

      //Guardar en cache la respuesta
      caches.open('cache-BE-dynamic').then(cache => {
        cache.put(event.request, response);
      });

      return response.clone();
    })
    .catch ( err => {
      console.log('Offline responde');
      return caches.match( event.request )
    })

    event.respondWith(resp);
});

