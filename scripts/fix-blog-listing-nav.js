const fs = require('fs');

const file = 'c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/content/blog/generated/index.html';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('unified-mobile-nav.js')) {
    content = content.replace(
        /<\/body>/g,
        `    <!-- Mobile Navigation -->
    <script src="/js/unified-mobile-nav.js"></script>
    <script src="/js/mobile-navigation.js"></script>
</body>`
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed blog listing index.html!');
} else {
    console.log('Already has unified-mobile-nav.js');
}
