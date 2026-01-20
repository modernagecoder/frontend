const fs = require('fs');
const path = require('path');

const blogDir = 'c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/content/blog/generated';

function fixBlogFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Fix the malformed string from previous attempt
        content = content.replace(
            /<script src="\/js\/unified-mobile-nav\.js"><\/script>`n    <script src="\/js\/mobile-navigation\.js"><\/script>/g,
            '<script src="/js/unified-mobile-nav.js"></script>\r\n    <script src="/js/mobile-navigation.js"></script>'
        );

        // Also add the script if it's not there at all (for any that weren't touched)
        if (!content.includes('unified-mobile-nav.js')) {
            content = content.replace(
                /<!-- Load Mobile Navigation JavaScript -->\r?\n\s*<script src="\/js\/mobile-navigation\.js"><\/script>/g,
                '<!-- Load Mobile Navigation JavaScript -->\r\n    <script src="/js/unified-mobile-nav.js"></script>\r\n    <script src="/js/mobile-navigation.js"></script>'
            );
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed:', filePath);
    } catch (err) {
        console.error('Error with file:', filePath, err.message);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (file === 'index.html') {
            fixBlogFile(fullPath);
        }
    }
}

walkDir(blogDir);
console.log('Done!');
