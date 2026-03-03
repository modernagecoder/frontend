const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.join('c:', 'Users', 'hp', 'Desktop', 'SkyCoders', 'kiro24', 'frontend');
const PAGES_DIR = path.join(FRONTEND_DIR, 'src', 'pages');

const courseReplacements = {
    '/courses/python-programming-masterclass-teens': '/courses/python-complete-masterclass-teens',
    '/courses/maths': '/courses/college-mathematics-complete-masterclass',
    '/courses/python-ai-automation-masterclass': '/courses/python-ai-automation-masterclass-college',
    '/courses/kids-coding-complete': '/courses/kids-coding-blocks-masterclass',
    '/courses/ai-tools-mastery-complete': '/courses/ai-tools-mastery-complete-college',
    '/courses/data-science-complete-masterclass': '/courses/data-science-complete-masterclass-college',
    '/courses/data-analysis-mastery-course': '/courses/data-analysis-mastery-course-college',
    '/courses/react-js-complete-masterclass': '/courses/react-js-complete-masterclass-college',
    '/courses/mysql-database-complete-masterclass': '/courses/mysql-database-complete-masterclass-college',
    '/courses/competitive-programming-masterclass': '/courses/competitive-programming-masterclass-college',
    '/courses/complete-java-programming-masterclass': '/courses/complete-java-programming-masterclass-college',
    '/courses/game-development-complete-masterclass': '/courses/game-development-complete-masterclass-college',
    '/courses/cpp-programming-complete-masterclass': '/courses/cpp-programming-complete-masterclass-college',
    '/courses/artificial-intelligence-complete-masterclass': '/courses/artificial-intelligence-complete-masterclass-college',
    '/courses/ai-ml-masterclass-complete': '/courses/ai-ml-masterclass-complete-college',
    '/courses/mern-stack-development-masterclass': '/courses/mern-stack-development-masterclass-college',
    '/courses/full-stack-web-development-masterclass': '/courses/full-stack-web-development-masterclass-college',
    '/courses/python-programming-masterclass-zero-to-advanced': '/courses/python-programming-masterclass-zero-to-advanced-college',
    '/courses/app-development': '/courses/complete-app-development-masterclass-college',
    '/courses/data-structures-algorithms-masterclass': '/courses/data-structures-algorithms-masterclass-college',
    '/courses/kids-python-programming': '/courses/python-ai-kids-masterclass',
    '/courses/kids-web-design': '/courses/kids-ai-web-development-course',
    '/courses/kids': '/category/kids',
    '/courses/teens': '/category/teens',
    '/courses/college': '/category/college',
    '/courses/girls-coding': '/category/kids'
};

const regexes = Object.keys(courseReplacements).map(oldUrl => {
    // Exact match for the slug ending with or without trailing slash or quote
    return {
        regex: new RegExp(`href=["']${oldUrl}/*["']`, 'g'),
        replacement: `href="${courseReplacements[oldUrl]}"`,
        oldUrl: oldUrl
    };
});

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    regexes.forEach(rule => {
        if (rule.regex.test(content)) {
            content = content.replace(rule.regex, rule.replacement);
            modified = true;
            console.log(`Replaced ${rule.oldUrl} in ${path.basename(filePath)}`);
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

// 1. Process all HTML files in src/pages
const files = fs.readdirSync(PAGES_DIR);
files.forEach(file => {
    if (file.endsWith('.html')) {
        processFile(path.join(PAGES_DIR, file));
    }
});

// Also check root index.html and any other common places
const rootIndex = path.join(FRONTEND_DIR, 'index.html');
if (fs.existsSync(rootIndex)) {
    processFile(rootIndex);
}

const componentDir = path.join(FRONTEND_DIR, 'components');
if (fs.existsSync(componentDir)) {
    const componentFiles = fs.readdirSync(componentDir);
    componentFiles.forEach(file => {
        if (file.endsWith('.html') || file.endsWith('.js')) {
            processFile(path.join(componentDir, file));
        }
    });
}

// 2. Fix the sitemap.xml
const sitemapPath = path.join(FRONTEND_DIR, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    let sitemapModified = false;
    
    // In sitemap, URLs are like <loc>https://..., so we need to process differently
    Object.keys(courseReplacements).forEach(oldUrl => {
        const sitemapRegex = new RegExp(`<loc>https://learn.modernagecoders.com${oldUrl}/*</loc>`, 'g');
        if (sitemapRegex.test(sitemapContent)) {
            sitemapContent = sitemapContent.replace(sitemapRegex, `<loc>https://learn.modernagecoders.com${courseReplacements[oldUrl]}</loc>`);
            sitemapModified = true;
            console.log(`Fixed sitemap.xml for ${oldUrl}`);
        }
    });
    
    if (sitemapModified) {
        fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    }
}

console.log('Update completed successfully.');
