/**
 * Convert all PNG/JPG images to WebP format
 * Keeps original files as backup
 * Usage: node scripts/convert-to-webp.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const QUALITY = 80; // WebP quality (0-100)
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Directories to scan for images
const SCAN_DIRS = [
    path.join(__dirname, '..', 'content', 'courses', 'images'),
    path.join(__dirname, '..', 'content', 'courses', 'generated'),
    path.join(__dirname, '..', 'public', 'images'),
];

function findImages(dir, extensions) {
    let results = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results = results.concat(findImages(fullPath, extensions));
            } else if (extensions.includes(path.extname(entry.name).toLowerCase())) {
                results.push(fullPath);
            }
        }
    } catch (err) {
        // Skip directories we can't read
    }
    return results;
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

async function convertImage(inputPath) {
    const outputPath = inputPath.replace(/\.[^.]+$/, '.webp');

    // Skip if WebP already exists and is newer than source
    if (fs.existsSync(outputPath)) {
        const srcStat = fs.statSync(inputPath);
        const dstStat = fs.statSync(outputPath);
        if (dstStat.mtimeMs >= srcStat.mtimeMs) {
            return { skipped: true, path: inputPath };
        }
    }

    try {
        const inputSize = fs.statSync(inputPath).size;
        await sharp(inputPath)
            .webp({ quality: QUALITY })
            .toFile(outputPath);
        const outputSize = fs.statSync(outputPath).size;
        const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

        return {
            path: inputPath,
            inputSize,
            outputSize,
            savings: parseFloat(savings),
            skipped: false,
        };
    } catch (err) {
        return { path: inputPath, error: err.message, skipped: false };
    }
}

async function main() {
    console.log('🖼️  WebP Image Converter');
    console.log('========================\n');

    // Collect all images
    let allImages = [];
    for (const dir of SCAN_DIRS) {
        if (fs.existsSync(dir)) {
            const found = findImages(dir, IMAGE_EXTENSIONS);
            allImages = allImages.concat(found);
            console.log(`📁 Found ${found.length} images in ${path.relative(process.cwd(), dir)}`);
        }
    }

    console.log(`\n🔄 Converting ${allImages.length} images to WebP (quality: ${QUALITY})...\n`);

    let totalSaved = 0;
    let totalOriginal = 0;
    let convertedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const imgPath of allImages) {
        const result = await convertImage(imgPath);
        const relPath = path.relative(process.cwd(), result.path);

        if (result.skipped) {
            skippedCount++;
        } else if (result.error) {
            console.log(`  ❌ ${relPath}: ${result.error}`);
            errorCount++;
        } else {
            totalOriginal += result.inputSize;
            totalSaved += (result.inputSize - result.outputSize);
            convertedCount++;
            console.log(`  ✅ ${relPath}`);
            console.log(`     ${formatBytes(result.inputSize)} → ${formatBytes(result.outputSize)} (${result.savings}% smaller)`);
        }
    }

    console.log('\n========================');
    console.log(`✅ Converted: ${convertedCount}`);
    console.log(`⏭️  Skipped:   ${skippedCount}`);
    console.log(`❌ Errors:    ${errorCount}`);
    if (totalOriginal > 0) {
        console.log(`\n💾 Total savings: ${formatBytes(totalSaved)} (${((totalSaved / totalOriginal) * 100).toFixed(1)}% reduction)`);
        console.log(`   Original total: ${formatBytes(totalOriginal)}`);
        console.log(`   New total:      ${formatBytes(totalOriginal - totalSaved)}`);
    }
    console.log('\n📝 Original files preserved as backup.');
    console.log('   Delete them manually after verifying everything works.');
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
