/**
 * Modern Age Coders Service Worker
 * Phase 3 Performance — caching strategies for instant repeat visits.
 *
 * Strategy summary:
 *   • CSS, JS, fonts, images:  cache-first with network fallback
 *   • HTML pages:               network-first with cache fallback
 *   • Offline:                  serves last-known cache or a tiny inline message
 *
 * Update strategy:
 *   When this file changes (bump CACHE_VERSION), the new SW takes over on the
 *   next page load. Old caches are pruned in the activate event.
 */

const CACHE_VERSION = 'mac-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

// Files to precache on install. Keep this list small — only the absolutely
// critical assets needed for the homepage to render.
const PRECACHE_URLS = [
    '/',
    '/css/style.css?v=20260325',
    '/css/index-bundle.css?v=20260325',
    '/css/core.css?v=20260411',
    '/css/pages/homepage.css?v=20260411',
    '/images/logo.svg',
    '/favicon.ico',
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            // Precache best-effort: don't fail install if a single resource is missing.
            return Promise.allSettled(
                PRECACHE_URLS.map((url) => cache.add(url).catch(() => null))
            );
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((k) => !k.startsWith(CACHE_VERSION))
                    .map((k) => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// Helper: is this a same-origin GET request we should handle?
function shouldHandle(request) {
    if (request.method !== 'GET') return false;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return false;
    // Skip auth/dashboard endpoints — let those go through fresh
    if (url.pathname.startsWith('/api/')) return false;
    if (url.pathname.includes('admin')) return false;
    return true;
}

// Heuristic: is this a navigation (HTML page)?
function isNavigation(request) {
    return request.mode === 'navigate' ||
        (request.headers.get('accept') || '').includes('text/html');
}

// Heuristic: is this a static asset (CSS/JS/image/font)?
function isStaticAsset(url) {
    return /\.(css|js|woff2?|ttf|otf|eot|svg|png|jpg|jpeg|webp|avif|gif|ico)(\?.*)?$/i.test(url.pathname);
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (!shouldHandle(request)) return;

    const url = new URL(request.url);

    // ── HTML pages: network-first ──────────────────────────────
    if (isNavigation(request)) {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    // Cache a copy for offline use
                    const copy = response.clone();
                    caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() =>
                    caches.match(request).then((cached) =>
                        cached || new Response(
                            '<!doctype html><meta charset=utf-8><title>Offline</title><body style="font-family:system-ui;background:#0a0a14;color:#f1f5f9;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:2rem"><div><h1 style="font-size:2rem">You\'re offline</h1><p>Please reconnect and try again.</p><button onclick="location.reload()" style="margin-top:1rem;padding:.75rem 1.5rem;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;border:none;border-radius:.75rem;font-weight:600;cursor:pointer">Retry</button></div></body>',
                            { headers: { 'Content-Type': 'text/html' } }
                        )
                    )
                )
        );
        return;
    }

    // ── Static assets: cache-first ─────────────────────────────
    if (isStaticAsset(url)) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) {
                    // Refresh in the background (stale-while-revalidate)
                    fetch(request).then((response) => {
                        if (response && response.status === 200) {
                            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, response));
                        }
                    }).catch(() => { });
                    return cached;
                }
                return fetch(request).then((response) => {
                    if (response && response.status === 200) {
                        const copy = response.clone();
                        caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
                    }
                    return response;
                });
            })
        );
        return;
    }
});

// Allow page to trigger immediate update
self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
