/**
 * Fix payment amount - should send 1499 (rupees), not 149900 (paise)
 * Backend converts to paise automatically
 */
const fs = require('fs');
const path = require('path');

const GENERATED_DIR = path.join(__dirname, '../content/courses/generated');

function fixAmount(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix: Change amount from 149900 to 1499
        if (content.includes('amount: 149900')) {
            content = content.replace(/amount: 149900/g, 'amount: 1499');
            fs.writeFileSync(filePath, content, 'utf8');
            return 'fixed';
        }
        return 'skipped';
    } catch (e) {
        return 'error';
    }
}

console.log('💰 Fixing payment amount (1499 rupees)...\n');
let fixed = 0, skipped = 0;

const items = fs.readdirSync(GENERATED_DIR);
for (const item of items) {
    const itemPath = path.join(GENERATED_DIR, item);
    if (fs.statSync(itemPath).isDirectory()) {
        const indexPath = path.join(itemPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            const result = fixAmount(indexPath);
            if (result === 'fixed') { fixed++; console.log(`✅ ${item}`); }
            else skipped++;
        }
    }
}

console.log(`\n📊 Fixed: ${fixed}, Skipped: ${skipped}`);
