const fs = require('fs');
const path = require('path');

// Configuration
const COMPONENTS_DIR = path.join(__dirname, '..', 'components');
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const FOOTER_FILE = path.join(COMPONENTS_DIR, 'footer.html');

// List of specific SEO pages to update
const TARGET_PAGES = [
    'best-coding-class-in-ahmedabad.html',
    'best-coding-class-in-bengaluru.html',
    'best-coding-class-in-chennai.html',
    'best-coding-class-in-delhi.html',
    'best-coding-class-in-hyderabad.html',
    'best-coding-class-in-indore.html',
    'best-coding-class-in-kolkata.html',
    'best-coding-class-in-mumbai.html',
    'best-coding-class-in-pune.html'
];

async function updateFooters() {
    try {
        // Read the updated footer content
        console.log(`Reading footer from ${FOOTER_FILE}...`);
        if (!fs.existsSync(FOOTER_FILE)) {
            throw new Error(`Footer file not found at ${FOOTER_FILE}`);
        }
        const footerContent = fs.readFileSync(FOOTER_FILE, 'utf8');

        // Extract the inner content of the footer (or use the whole thing if it's the whole tag)
        // In this case, components/footer.html contains the full <footer class="site-footer">...</footer>

        let successCount = 0;
        let failCount = 0;

        for (const pageName of TARGET_PAGES) {
            const pagePath = path.join(PAGES_DIR, pageName);
            console.log(`Processing ${pageName}...`);

            if (!fs.existsSync(pagePath)) {
                console.warn(`  ⚠️ File not found: ${pagePath}`);
                failCount++;
                continue;
            }

            let content = fs.readFileSync(pagePath, 'utf8');

            // Regex to find the existing footer block
            // We look for <footer class="site-footer"> ... </footer>
            // Using [\s\S]*? for multiline matching
            const footerRegex = /<footer class="site-footer">[\s\S]*?<\/footer>/;

            if (footerRegex.test(content)) {
                const newContent = content.replace(footerRegex, footerContent);
                fs.writeFileSync(pagePath, newContent, 'utf8');
                console.log(`  ✅ Updated footer in ${pageName}`);
                successCount++;
            } else {
                console.warn(`  ⚠️ Could not find <footer class="site-footer"> in ${pageName}`);

                // Fallback: Try to find where to insert it if it's missing (e.g., before body close)
                // specific for this project based on best-coding-class-in-kolkata.html structure
                // it seems they have it before <!-- Misti AI Floating Chat Button --> or </body>

                // Let's try to find a consistent anchor if replacement failed
                const mainEndRegex = /<\/main>/;
                if (mainEndRegex.test(content)) {
                    console.log(`  Attempting injection after </main>...`);
                    const newContent = content.replace('</main>', `</main>\n\n    <!-- Footer -->\n    ${footerContent}`);
                    fs.writeFileSync(pagePath, newContent, 'utf8');
                    console.log(`  ✅ Injected footer in ${pageName}`);
                    successCount++;
                } else {
                    console.error(`  ❌ Failed to update ${pageName}: No footer found and no clear insertion point.`);
                    failCount++;
                }
            }
        }

        console.log('\nSummary:');
        console.log(`✅ Successfully updated: ${successCount}`);
        console.log(`❌ Failed: ${failCount}`);

    } catch (error) {
        console.error('Fatal Error:', error);
    }
}

updateFooters();
