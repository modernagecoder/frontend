const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

// ── Load nav & footer for on-the-fly inlining ────────────────────
const NAV_FILE = path.join(__dirname, '..', 'components', 'nav.html');
const FOOTER_FILE = path.join(__dirname, '..', 'components', 'footer.html');

let navHtml = '';
let footerHtml = '';
try {
    navHtml = fs.readFileSync(NAV_FILE, 'utf-8');
    footerHtml = fs.readFileSync(FOOTER_FILE, 'utf-8');
    console.log('✅ Loaded nav.html & footer.html for on-the-fly inlining');
} catch (e) {
    console.warn('⚠️  Could not load nav/footer components for inlining:', e.message);
}

/**
 * Inline nav/footer into an HTML string (mirrors build-time inlining)
 */
function inlineComponents(html) {
    if (!navHtml && !footerHtml) return html;

    let result = html;

    // Replace nav placeholder
    result = result.replace(/<div\s+id=["']nav-placeholder["']\s*>\s*<\/div>/gi, navHtml);

    // Replace footer placeholder
    result = result.replace(/<div\s+id=["']footer-placeholder["']\s*>\s*<\/div>/gi, footerHtml);

    // Remove components-loader script tag (no longer needed)
    result = result.replace(/\s*<script\s+src=["']\/(?:src\/)?js\/components-loader\.js["']\s*>\s*<\/script>\s*/gi, '\n');

    // Add componentsLoaded event + copyright year before </body>
    const bootstrap = `
    <!-- Components inlined by dev server -->
    <script>
        (function() {
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
            var c = document.getElementById('copyright');
            if (c) c.innerHTML = '\\u00A9 ' + new Date().getFullYear() + ' Modern Age Coders. All Rights Reserved.';
        })();
    </script>`;
    result = result.replace(/<\/body>/i, bootstrap + '\n</body>');

    return result;
}

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
    '.xml': 'text/xml'
};

// URL to file path mapping (mimics Netlify redirects)
function resolveFilePath(url) {
    // Remove query string
    const urlPath = url.split('?')[0];

    // Root
    if (urlPath === '/') {
        return 'src/pages/index.html';
    }

    // Clean URLs
    if (urlPath === '/about') return 'src/pages/about.html';
    if (urlPath === '/about.html') return 'src/pages/about.html';
    if (urlPath === '/courses') return 'src/pages/course.html';
    if (urlPath === '/course.html') return 'src/pages/course.html';
    if (urlPath === '/courses.html') return 'src/pages/course.html';
    if (urlPath === '/contact') return 'src/pages/contact.html';
    if (urlPath === '/pricing') return 'src/pages/pricing.html';
    if (urlPath === '/login') return 'src/pages/login.html';
    if (urlPath === '/beat-the-babu') return 'src/pages/beat-the-babu.html';
    if (urlPath === '/aura') return 'src/pages/aura.html';
    if (urlPath === '/business-solutions') return 'src/pages/business-solutions.html';
    if (urlPath === '/faq') return 'src/pages/faq.html';
    if (urlPath === '/terms') return 'src/pages/terms.html';
    if (urlPath === '/privacy') return 'src/pages/privacy.html';
    if (urlPath === '/student-labs') return 'src/pages/student-labs.html';
    if (urlPath === '/search') return 'src/pages/search.html';
    if (urlPath === '/projects') return 'src/pages/projects.html';
    if (urlPath === '/love') return 'lovewall/dist/index.html';
    if (urlPath === '/summer-coding-camp') return 'src/pages/summer-coding-camp.html';
    if (urlPath === '/index.html') return 'src/pages/index.html';

    // Static assets - check multiple locations
    if (urlPath.startsWith('/css/')) {
        // First check src/css, then css folder
        const srcPath = urlPath.replace('/css/', 'src/css/');
        const rootPath = urlPath.replace('/css/', 'css/');
        if (fs.existsSync(srcPath)) return srcPath;
        if (fs.existsSync(rootPath)) return rootPath;
        return srcPath; // Default to src/css
    }
    if (urlPath.startsWith('/js/')) {
        // First check src/js, then js folder
        const srcPath = urlPath.replace('/js/', 'src/js/');
        const rootPath = urlPath.replace('/js/', 'js/');
        if (fs.existsSync(srcPath)) return srcPath;
        if (fs.existsSync(rootPath)) return rootPath;
        return srcPath; // Default to src/js
    }
    if (urlPath.startsWith('/components/')) {
        return urlPath.substring(1); // Remove leading slash, serve from root
    }
    if (urlPath.startsWith('/images/')) {
        // Check if image exists in lovewall/dist/images first (for /love page)
        const lovewallImagePath = 'lovewall/dist' + urlPath;
        if (fs.existsSync(lovewallImagePath)) {
            return lovewallImagePath;
        }
        // Otherwise serve from public/images
        return urlPath.replace('/images/', 'public/images/');
    }
    if (urlPath.startsWith('/favicon/')) {
        return urlPath.replace('/favicon/', 'public/favicon/');
    }
    if (urlPath === '/favicon.ico') {
        return 'public/favicon/favicon.ico';
    }
    if (urlPath.startsWith('/admin/')) {
        return urlPath.replace('/admin/', 'src/admin/');
    }

    // Lovewall assets (serve from dist folder)
    if (urlPath.startsWith('/assets/')) {
        return 'lovewall/dist' + urlPath;
    }

    // Blog
    if (urlPath === '/blog') {
        return 'content/blog/generated/index.html';
    }
    if (urlPath.startsWith('/blog/')) {
        return urlPath.replace('/blog/', 'content/blog/generated/') + '/index.html';
    }

    // Course category pages (must come before individual courses)
    if (urlPath.startsWith('/courses/coding/') || urlPath.startsWith('/courses/mathematics/')) {
        return 'src/pages/course.html';
    }

    // Course static assets (CSS, JS, images from course folders)
    if (urlPath.startsWith('/content/courses/generated/')) {
        return urlPath.substring(1); // Remove leading slash
    }

    // Individual course pages
    if (urlPath.startsWith('/courses/')) {
        return urlPath.replace('/courses/', 'content/courses/generated/') + '/index.html';
    }

    // Default: try to serve the file directly
    return urlPath.substring(1);
}

const server = http.createServer((req, res) => {
    let filePath = resolveFilePath(req.url);

    // Debug logging
    console.log(`Request: ${req.url} -> ${filePath}`);

    // If directory, try index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // 404 - File not found
                fs.readFile('src/pages/404.html', (err404, content404) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content404 || '<h1>404 - Page Not Found</h1>', 'utf-8');
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`, 'utf-8');
            }
        } else {
            // Success – inline components for HTML files
            if (ext === '.html') {
                const inlined = inlineComponents(content.toString('utf-8'));
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(inlined, 'utf-8');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Development server running!`);
    console.log(`\n   Local:   http://localhost:${PORT}`);
    console.log(`\n📝 Press Ctrl+C to stop\n`);
});
