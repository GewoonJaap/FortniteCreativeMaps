// This is the "Offline page" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    colorLog('[Fortnite-Island Service Worker] active service worker found, no need to register"', 'warning');
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("pwabuilder-sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        colorLog('[Fortnite-Island Service Worker] Service worker has been registered for scope: ' + reg.scope, 'warning');
      });
  }
}
