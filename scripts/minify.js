/**
 * Minify CSS and JS files for production
 * Run: npm run minify
 *
 * Overwrites files in-place during Netlify build (build is ephemeral).
 * Source files in git remain unminified.
 */

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

const ROOT = path.resolve(__dirname, '..');

const CSS_FILES = [
    'src/css/style.css',
    'src/css/index-bundle.css',
    'src/css/course.css',
    'src/css/about.css',
    'src/css/contact.css',
    'src/css/pricing.css',
    'src/css/best-coding-class.css',
];

const JS_FILES = [
    'src/js/mainbundle.js',
    'src/js/auth.js',
    'src/js/corporate-training-form.js',
];

async function minifyCSS() {
    const cleanCSS = new CleanCSS({
        level: 2,
        compatibility: '*',
    });

    let totalBefore = 0;
    let totalAfter = 0;

    for (const file of CSS_FILES) {
        const filePath = path.join(ROOT, file);
        if (!fs.existsSync(filePath)) {
            console.log(`  [skip] ${file} (not found)`);
            continue;
        }
        const input = fs.readFileSync(filePath, 'utf8');
        const output = cleanCSS.minify(input);

        if (output.errors && output.errors.length > 0) {
            console.error(`  [error] ${file}:`, output.errors);
            continue;
        }

        fs.writeFileSync(filePath, output.styles, 'utf8');
        const before = input.length;
        const after = output.styles.length;
        totalBefore += before;
        totalAfter += after;
        console.log(`  [css] ${file}: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (${Math.round((1 - after / before) * 100)}% smaller)`);
    }

    console.log(`  [css] Total: ${(totalBefore / 1024).toFixed(1)}KB -> ${(totalAfter / 1024).toFixed(1)}KB\n`);
}

async function minifyJS() {
    let totalBefore = 0;
    let totalAfter = 0;

    for (const file of JS_FILES) {
        const filePath = path.join(ROOT, file);
        if (!fs.existsSync(filePath)) {
            console.log(`  [skip] ${file} (not found)`);
            continue;
        }
        const input = fs.readFileSync(filePath, 'utf8');
        const result = await minify(input, {
            compress: {
                drop_console: true,
                passes: 2,
            },
            mangle: true,
        });

        if (result.error) {
            console.error(`  [error] ${file}:`, result.error);
            continue;
        }

        fs.writeFileSync(filePath, result.code, 'utf8');
        const before = input.length;
        const after = result.code.length;
        totalBefore += before;
        totalAfter += after;
        console.log(`  [js]  ${file}: ${(before / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (${Math.round((1 - after / before) * 100)}% smaller)`);
    }

    console.log(`  [js]  Total: ${(totalBefore / 1024).toFixed(1)}KB -> ${(totalAfter / 1024).toFixed(1)}KB\n`);
}

async function main() {
    console.log('\n[minify] Starting CSS/JS minification...\n');

    await minifyCSS();
    await minifyJS();

    console.log('[minify] Done!\n');
}

main().catch(err => {
    console.error('[minify] Fatal error:', err);
    process.exit(1);
});
