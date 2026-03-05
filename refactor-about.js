const fs = require('fs');
const CleanCSS = require('clean-css');

let htmlPath = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/about.html';
let cssPath = 'C:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/css/about.css';

let htmlContent = fs.readFileSync(htmlPath, 'utf8');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// The file has a duplicate block from line 1 to 108.
// We need to extract the breadcrumb schema script and put it into the actual head.
let secondDocTypeIdx = htmlContent.indexOf('<!DOCTYPE html>', 10);
if (secondDocTypeIdx !== -1) {
    let prefix = htmlContent.substring(0, secondDocTypeIdx);
    let breadcrumbMatch = prefix.match(/<script type="application\/ld\+json">\s*{\s*"@context": "https:\/\/schema\.org",\s*"@type": "BreadcrumbList"[\s\S]*?<\/script>/);

    // Remove the entire prefix
    htmlContent = htmlContent.substring(secondDocTypeIdx);

    if (breadcrumbMatch) {
        // Insert the breadcrumb list just before </head>
        htmlContent = htmlContent.replace('</head>', '\n' + breadcrumbMatch[0] + '\n</head>');
    }
}

let extractedCss = '';

// Extract <style>...</style>
htmlContent = htmlContent.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, contents) => {
    extractedCss += '\n' + contents;
    return ''; // remove from HTML
});

// Extract style="..." attributes but properly handling spaces and classes
let inlineCounter = 1;
htmlContent = htmlContent.replace(/<([a-zA-Z0-9\-]+)([^>]*?)\sstyle=(["'])(.*?)\3([^>]*?)>/gi, (match, tagName, beforeStyle, quote, styleContent, afterStyle) => {
    if (styleContent.trim() === '') return `<${tagName}${beforeStyle}${afterStyle}>`;

    let className = 'about-inline_' + inlineCounter++;
    extractedCss += `\n.${className} { ${styleContent} }`;

    let remainder = beforeStyle + afterStyle;

    if (/class=["']/.test(remainder)) {
        remainder = remainder.replace(/class=(["'])([^"']*)["']/, (m, q, classes) => {
            return `class=${q}${classes.trim()} ${className}${q}`;
        });
    } else {
        remainder += ` class="${className}"`;
    }

    return `<${tagName}${remainder}>`;
});

// Format and Deduplicate CSS using clean-css
let combinedCss = cssContent + '\n/* ---- Extracted Styles ---- */\n' + extractedCss;

try {
    const cleaner = new CleanCSS({
        format: 'beautify',
        level: {
            1: { transform: false },
            2: {
                mergeAdjacentRules: true,
                mergeMedia: true,
                mergeNonAdjacentRules: false, // dangerous if cascading matters
                removeDuplicateFontRules: true,
                removeDuplicateMediaBlocks: true,
                removeDuplicateRules: true
            }
        }
    });

    const output = cleaner.minify(combinedCss);
    if (output.errors.length > 0) {
        console.error("CleanCSS Errors: ", output.errors);
        fs.writeFileSync(cssPath, combinedCss, 'utf8');
    } else {
        // CleanCSS beautify uses 2 spaces, let's keep it clean
        fs.writeFileSync(cssPath, output.styles, 'utf8');
    }
} catch (e) {
    console.error(e);
    fs.writeFileSync(cssPath, combinedCss, 'utf8');
}

fs.writeFileSync(htmlPath, htmlContent, 'utf8');

console.log('Script completed successfully.');
