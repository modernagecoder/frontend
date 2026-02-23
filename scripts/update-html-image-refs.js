/**
 * Update HTML image references from .png/.jpg to .webp
 * Preserves OG image references (og-*.jpg) for social media compatibility
 * Usage: node scripts/update-html-image-refs.js
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

function findHtmlFiles(dir) {
    let results = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results = results.concat(findHtmlFiles(fullPath));
            } else if (entry.name.endsWith('.html')) {
                results.push(fullPath);
            }
        }
    } catch (err) { /* skip */ }
    return results;
}

function updateImageRefs(content) {
    let updated = content;
    let changeCount = 0;

    // Replace /images/XXXX.png -> /images/XXXX.webp (but NOT og-*.jpg or og-*.png)
    updated = updated.replace(/(["'](?:\/images\/|images\/))([^"']+?)\.(png|jpg|jpeg)(["'])/g, (match, prefix, name, ext, suffix) => {
        // Keep OG images as JPG for social media compatibility
        if (name.startsWith('og-') || name.includes('-og') || name.includes('og.')) {
            return match;
        }
        // Keep twitter-specific images as JPG
        if (name.includes('twitter')) {
            return match;
        }
        changeCount++;
        return `${prefix}${name}.webp${suffix}`;
    });

    // Also handle full URL references like https://learn.modernagecoders.com/images/logo.png
    updated = updated.replace(/(https?:\/\/[^"']+\/images\/)([^"']+?)\.(png|jpg|jpeg)(["'])/g, (match, prefix, name, ext, suffix) => {
        // Keep OG images as JPG
        if (name.startsWith('og-') || name.includes('-og') || name.includes('og.') || name.includes('twitter')) {
            return match;
        }
        changeCount++;
        return `${prefix}${name}.webp${suffix}`;
    });

    return { content: updated, changeCount };
}

async function main() {
    console.log('🔄 Updating HTML image references to .webp...\n');

    const htmlFiles = findHtmlFiles(SRC_DIR);
    console.log(`📁 Found ${htmlFiles.length} HTML files in src/\n`);

    let totalChanges = 0;
    let filesChanged = 0;

    for (const filePath of htmlFiles) {
        const original = fs.readFileSync(filePath, 'utf8');
        const { content: updated, changeCount } = updateImageRefs(original);

        if (changeCount > 0) {
            fs.writeFileSync(filePath, updated, 'utf8');
            const relPath = path.relative(process.cwd(), filePath);
            console.log(`  ✅ ${relPath} (${changeCount} references updated)`);
            totalChanges += changeCount;
            filesChanged++;
        }
    }

    console.log(`\n========================`);
    console.log(`✅ Updated ${totalChanges} references across ${filesChanged} files`);
    console.log(`📝 OG images (og-*.jpg) preserved for social media compatibility`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
