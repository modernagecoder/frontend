
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/faq.html');
const content = fs.readFileSync(filePath, 'utf8');

const jsonStart = content.indexOf('<script type="application/ld+json">') + '<script type="application/ld+json">'.length;
const jsonEnd = content.indexOf('</script>', jsonStart);

const jsonString = content.substring(jsonStart, jsonEnd).trim();

try {
    JSON.parse(jsonString);
    console.log("JSON is valid");
} catch (e) {
    console.error("JSON is invalid:", e.message);
    // Print context around the error if possible
    // Basic error reporting
}
