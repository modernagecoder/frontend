const fs = require('fs');
const html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', 'utf8');
const lines = html.split('\n');

let jsStart = html.indexOf('<script>');
while (jsStart > -1) {
    const jsEnd = html.indexOf('</script>', jsStart);
    if (jsEnd > jsStart) {
        const scriptContent = html.substring(jsStart, jsEnd + 9);
        if (scriptContent.includes('codingTab') || scriptContent.includes('mathsTab')) {
            console.log("Found script with tab logic.");
            const scriptLines = scriptContent.split('\n');
            const startIndex = scriptLines.findIndex(l => l.includes('codingTab') || l.includes('mathsTab') || l.includes('mainTab'));

            console.log("Lines around logic:");
            for (let i = Math.max(0, startIndex - 5); i < Math.min(scriptLines.length, startIndex + 25); i++) {
                console.log(i + ": " + scriptLines[i]);
            }
        }
    }
    jsStart = html.indexOf('<script>', jsStart + 1);
}
