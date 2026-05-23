// Minimal preview server that mimics the Netlify redirects we rely on:
//   /css/*    -> /src/css/*
//   /js/*     -> /src/js/*
//   /images/* -> /public/images/*
//   /<slug>   -> /src/pages/<slug>.html
// Usage: node scripts/preview-server.js [port]
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = Number(process.argv[2]) || 8787;
const TYPES = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon', '.json':'application/json', '.md':'text/markdown', '.webp':'image/webp' };

function resolve(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if (p === '/' ) p = '/src/pages/index.html';
  else if (p.startsWith('/css/'))    p = '/src/css/' + p.slice(5);
  else if (p.startsWith('/js/'))     p = '/src/js/' + p.slice(4);
  else if (p.startsWith('/images/')) p = '/public/images/' + p.slice(8);
  else if (!path.extname(p)) {
    const html = path.join(ROOT, 'src/pages', p.slice(1) + '.html');
    if (fs.existsSync(html)) return html;
  }
  return path.join(ROOT, p);
}

http.createServer((req, res) => {
  const file = resolve(req.url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found: ' + req.url); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log('preview server on http://localhost:' + PORT));
