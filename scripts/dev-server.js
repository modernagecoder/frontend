const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

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
    if (urlPath === '/faq') return 'src/pages/faq.html';
    if (urlPath === '/terms') return 'src/pages/terms.html';
    if (urlPath === '/privacy') return 'src/pages/privacy.html';
    if (urlPath === '/index.html') return 'src/pages/index.html';
    
    // Static assets
    if (urlPath.startsWith('/css/')) {
        return urlPath.replace('/css/', 'src/css/');
    }
    if (urlPath.startsWith('/js/')) {
        return urlPath.replace('/js/', 'src/js/');
    }
    if (urlPath.startsWith('/images/')) {
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
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Development server running!`);
    console.log(`\n   Local:   http://localhost:${PORT}`);
    console.log(`\n📝 Press Ctrl+C to stop\n`);
});
