const fs = require('fs');
let html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/index.html', 'utf8');

const findString = 'headline';

// Let's do a more robust fix
html = html.replace('id="hero-main-title">id="hero-main-title">', 'id="hero-main-title">');
html = html.replace('<h1 id="hero-main-title">id="hero-main-title"', '<h1 id="hero-main-title"');

// Just in case, let's look for the actual string that's appearing
html = html.replace('id="hero-main-title">Maths + Code', 'Maths + Code');


fs.writeFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/index_fixed.html', html);
console.log("Rewrote HTML to fix ID injection bugs");
