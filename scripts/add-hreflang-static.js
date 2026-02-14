const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const baseUrl = 'https://learn.modernagecoders.com';

function scanDirectory(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            processFile(fullPath);
        }
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already has hreflang
    if (content.includes('hreflang="en-in"')) {
        console.log(`Skipping (already exists): ${filePath}`);
        return;
    }

    // Determine URL
    let relativePath = path.relative(pagesDir, filePath).replace(/\\/g, '/');

    // Remove .html extension
    let urlPath = relativePath.replace(/\.html$/, '');

    // Handle index.html
    if (urlPath === 'index') {
        urlPath = '';
    } else if (urlPath.endsWith('/index')) {
        urlPath = urlPath.substring(0, urlPath.length - 6);
    }

    const fullUrl = urlPath ? `${baseUrl}/${urlPath}` : baseUrl + '/';
    const tag = `    <link rel="alternate" hreflang="en-in" href="${fullUrl}" />`;

    // Insert tag
    // Try to insert after canonical link
    if (content.includes('rel="canonical"')) {
        content = content.replace(/(<link rel="canonical"[^>]*>)/, `$1\n${tag}`);
    } else if (content.includes('</head>')) {
        content = content.replace('</head>', `${tag}\n</head>`);
    } else {
        console.warn(`Could not find insertion point for: ${filePath}`);
        return;
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath} -> ${fullUrl}`);
}

console.log('Starting hreflang injection...');
scanDirectory(pagesDir);
console.log('Done!');
