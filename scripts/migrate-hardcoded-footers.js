const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SCAN_DIRS = [
    path.join(ROOT, 'src', 'pages'),
    path.join(ROOT, 'content', 'blog', 'generated'),
    path.join(ROOT, 'content', 'courses', 'generated'),
];

// Regex to find hardcoded footers that are NOT wrapped in our inline comments
// Looks for <footer class="site-footer"> ... </footer>
const FOOTER_REGEX = /<footer\s+class=["']site-footer["']\s*>[\s\S]*?<\/footer>/gi;
const INLINED_MARKER = '<!-- BEGIN_INLINED_FOOTER -->';

// Regex to find the specific inline script block added by inline-components.js
// We want to remove ALL occurrences so a clean single one can be added back
const INLINE_SCRIPT_REGEX = /<!-- Components inlined at build time -->\s*<script>\s*\(function\s*\(\)\s*\{[\s\S]*?document\.dispatchEvent\(new CustomEvent\(['"]componentsLoaded['"]\)\)[\s\S]*?\}\)\(\);\s*<\/script>/gi;

function findHtmlFiles(dir) {
    const results = [];
    if (!fs.existsSync(dir)) return results;

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findHtmlFiles(fullPath));
        } else if (entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

function migrateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;
    let modified = false;

    // 1. Migrate Hardcoded Footer
    // Only if it doesn't already have the inline marker
    if (!content.includes(INLINED_MARKER)) {
        if (FOOTER_REGEX.test(content)) {
            console.log(`  🔧 Replacing hardcoded footer in: ${path.basename(filePath)}`);
            content = content.replace(FOOTER_REGEX, '<div id="footer-placeholder"></div>');
            modified = true;
        }
    }

    // 2. Remove Duplicate Inline Scripts
    // We remove ALL of them. inline-components.js will add exactly one back.
    if (INLINE_SCRIPT_REGEX.test(content)) {
        const matches = content.match(INLINE_SCRIPT_REGEX);
        if (matches && matches.length > 0) {
            console.log(`  🧹 Removing ${matches.length} inline script block(s) in: ${path.basename(filePath)}`);
            content = content.replace(INLINE_SCRIPT_REGEX, '');
            // Clean up extra newlines left behind
            content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        return true;
    }
    return false;
}

function main() {
    console.log('🚀 Starting Footer Migration & Cleanup...');
    let totalModified = 0;

    for (const dir of SCAN_DIRS) {
        const files = findHtmlFiles(dir);
        for (const file of files) {
            if (migrateFile(file)) {
                totalModified++;
            }
        }
    }

    console.log(`\n✨ Migration Complete. Modified ${totalModified} files.`);
}

main();
