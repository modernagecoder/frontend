/**
 * Markdown content negotiation at the edge.
 *
 * When an AI agent sends `Accept: text/markdown` (Claude Code, Cursor,
 * OpenCode, future agents), we serve the pre-built `.md` companion of the
 * requested page instead of the HTML — same URL, smaller payload, ~80% fewer
 * tokens for the agent's context window.
 *
 * Browsers and other crawlers (Googlebot, Bingbot) never send this header,
 * so they continue to receive the canonical HTML. The behavior is the same
 * mechanism HTTP has used for `Accept-Language` since RFC 7231 — not cloaking.
 *
 * Path scope (configured at the bottom of this file):
 *   /blog, /blog/*, /courses, /courses/*, /resources, /resources/*
 *
 * The function always falls through to the origin on any error, so a bug
 * here cannot take pages offline — worst case the caller gets HTML instead
 * of markdown.
 */

const MD_HEADERS = {
    'content-type': 'text/markdown; charset=utf-8',
    'vary': 'accept',
    'content-signal': 'ai-train=yes, search=yes, ai-input=yes',
    'cache-control': 'public, max-age=3600',
    'x-robots-tag': 'noindex, follow',
    'x-edge-md': 'served'
};

/** Caller wants markdown if `text/markdown` appears in Accept (browsers never send it). */
function wantsMarkdown(accept) {
    if (!accept) return false;
    return /(?:^|,|\s)text\/(?:x-)?markdown\b/i.test(accept);
}

/**
 * Build the list of `.md` URLs to try for a given canonical path.
 * Each candidate is fetched in order and the first 200 markdown response wins.
 * Returns [] if the path obviously can't have a markdown twin.
 */
function markdownCandidates(pathname) {
    // Already a markdown / asset / API path — skip outright
    if (/\.(?:md|txt|css|js|json|xml|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|map|mp4|mp3|pdf|zip)$/i.test(pathname)) return [];
    if (pathname.startsWith('/api/')) return [];
    if (pathname.startsWith('/_')) return [];

    // Normalize: collapse trailing slashes, default root to '/'
    const trimmed = pathname.replace(/\/+$/, '');
    const isRoot = trimmed === '' || trimmed === '/';
    const base = isRoot ? '/index' : trimmed;

    // Two probe shapes:
    //   1. {path}/index.md   — used by generated content (blog, courses, resources)
    //                          and also resolved by the static-page redirect rule.
    //   2. {path}.md         — used by static page suffix-style URLs (/about.md).
    return isRoot
        ? ['/index.md', '/index/index.md']
        : [`${base}/index.md`, `${base}.md`];
}

/** Rough estimate so agents can size their context window before reading the body. */
function estimateTokens(text) {
    return String(Math.ceil(text.length / 4));
}

export default async (request, context) => {
    try {
        const accept = request.headers.get('accept');
        if (!wantsMarkdown(accept)) {
            return context.next();
        }

        const url = new URL(request.url);
        const candidates = markdownCandidates(url.pathname);
        if (!candidates.length) {
            return context.next();
        }

        for (const candidate of candidates) {
            const mdUrl = new URL(candidate, url.origin);
            let mdResp;
            try {
                mdResp = await fetch(mdUrl.toString(), {
                    headers: { 'x-edge-fetch': 'markdown-negotiate' }
                });
            } catch {
                continue;
            }
            if (!mdResp.ok) continue;

            const ct = mdResp.headers.get('content-type') || '';
            if (!/text\/(?:markdown|plain)/i.test(ct)) continue;

            const body = await mdResp.text();
            return new Response(body, {
                status: 200,
                headers: {
                    ...MD_HEADERS,
                    'x-markdown-tokens': estimateTokens(body),
                    'x-edge-md-source': candidate
                }
            });
        }

        // No companion found — fall through to canonical HTML
        const r = await context.next();
        r.headers.set('x-edge-md', 'fallthrough-no-md');
        return r;
    } catch (err) {
        // Never break the page on a bug in this function
        console.error('[markdown-negotiate] error:', err && err.message);
        return context.next();
    }
};

export const config = {
    // Apply to every request — the function quick-exits on browser/asset traffic
    // (no Accept: text/markdown) and on already-`.md` paths.
    path: '/*',
    excludedPath: [
        '/api/*',
        '/_*',
        '/css/*', '/js/*', '/images/*', '/favicon/*', '/assets/*',
        '/*.md', '/*.txt', '/*.css', '/*.js', '/*.png', '/*.jpg', '/*.jpeg',
        '/*.gif', '/*.svg', '/*.webp', '/*.avif', '/*.ico', '/*.woff', '/*.woff2',
        '/*.json', '/*.xml', '/*.map', '/*.mp4', '/*.mp3', '/*.pdf', '/*.zip'
    ]
};
