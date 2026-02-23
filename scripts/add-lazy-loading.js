/**
 * Add loading="lazy" to all <img loading="lazy"> tags that don't already have it.
 * Scans HTML files in src/, components/, and JS files in scripts/ and js/.
 * Usage: node scripts/add-lazy-loading.js
 */

const fs = require('fs');
const path = require('path');

const SCAN_DIRS = [
    { dir: path.join(__dirname, '..', 'src'), ext: '.html' },
    { dir: path.join(__dirname, '..', 'components'), ext: '.html' },
    { dir: path.join(__dirname, '..', 'scripts'), ext: '.js' },
    { dir: path.join(__dirname, '..', 'js'), ext: '.js' },
];

function findFiles(dir, extension) {
    let results = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results = results.concat(findFiles(fullPath, extension));
            } else if (entry.name.endsWith(extension)) {
                results.push(fullPath);
            }
        }
    } catch (err) { /* skip */ }
    return results;
}

function addLazyLoading(content) {
    let changeCount = 0;

    // Match <img tags that do NOT already have loading= attribute
    // This handles both HTML and JS string contexts
    const updated = content.replace(/<img\b([^>]*?)(\s*\/?>)/gi, (match, attrs, closing) => {
        // Skip if already has loading attribute
        if (/loading\s*=/i.test(attrs)) {
            return match;
        }
        changeCount++;
        return `<img${attrs} loading="lazy"${closing}`;
    });

    return { content: updated, changeCount };
}

async function main() {
    console.log('🖼️  Adding loading="lazy" to all <img> tags...\n');

    let totalChanges = 0;
    let filesChanged = 0;

    for (const { dir, ext } of SCAN_DIRS) {
        if (!fs.existsSync(dir)) continue;
        const files = findFiles(dir, ext);

        for (const filePath of files) {
            const original = fs.readFileSync(filePath, 'utf8');
            const { content: updated, changeCount } = addLazyLoading(original);

            if (changeCount > 0) {
                fs.writeFileSync(filePath, updated, 'utf8');
                const relPath = path.relative(process.cwd(), filePath);
                console.log(`  ✅ ${relPath} (${changeCount} img tags updated)`);
                totalChanges += changeCount;
                filesChanged++;
            }
        }
    }

    console.log(`\n========================`);
    console.log(`✅ Added loading="lazy" to ${totalChanges} img tags across ${filesChanged} files`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
