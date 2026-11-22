import 'https://cdn.jsdelivr.net/npm/webtorrent@2.5.19/dist/sw.min.js'
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()))
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()))

