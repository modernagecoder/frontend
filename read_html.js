const fs = require('fs');
const html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', 'utf8');
const startIndex = html.indexOf('<style>\n                        /* ====== GLASS SWITCH TOGGLE ====== */');
const endIndex = html.indexOf('<div class="level-divider" id="levelSelector" style="scroll-margin-top: 80px;">');
if (startIndex !== -1 && endIndex !== -1) {
    fs.writeFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/toggle_chunk.txt', html.substring(startIndex, endIndex));
    console.log("Wrote chunk to toggle_chunk.txt");
} else {
    console.log("Could not find start or end index", startIndex, endIndex);
}
