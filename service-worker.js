const CACHE_NAME="youtube-pwa-v2";
const FILES=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
  )));
  self.clients.claim();
});
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  if(u.origin===self.location.origin){
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
