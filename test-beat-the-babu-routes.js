// Quick test to verify beat-the-babu routes are configured correctly
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Beat the Babu Configuration...\n');

// Test 1: Check if the game file exists
const gameFilePath = 'src/pages/beat-the-babu.html';
if (fs.existsSync(gameFilePath)) {
    console.log('✅ Game file exists: ' + gameFilePath);
} else {
    console.log('❌ Game file NOT found: ' + gameFilePath);
}

// Test 2: Check _redirects file
const redirectsPath = '_redirects';
const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
if (redirectsContent.includes('/beat-the-babu')) {
    console.log('✅ Route configured in _redirects');
} else {
    console.log('❌ Route NOT found in _redirects');
}

// Test 3: Check netlify.toml
const netlifyTomlPath = 'netlify.toml';
const netlifyContent = fs.readFileSync(netlifyTomlPath, 'utf8');
if (netlifyContent.includes('/beat-the-babu')) {
    console.log('✅ Route configured in netlify.toml');
} else {
    console.log('❌ Route NOT found in netlify.toml');
}

// Test 4: Check dev-server.js
const devServerPath = 'scripts/dev-server.js';
const devServerContent = fs.readFileSync(devServerPath, 'utf8');
if (devServerContent.includes('/beat-the-babu')) {
    console.log('✅ Route configured in dev-server.js');
} else {
    console.log('❌ Route NOT found in dev-server.js');
}

// Test 5: Check footer link in index.html
const indexPath = 'src/pages/index.html';
const indexContent = fs.readFileSync(indexPath, 'utf8');
if (indexContent.includes('beat-the-babu')) {
    console.log('✅ Game link added to footer in index.html');
} else {
    console.log('❌ Game link NOT found in footer');
}

// Test 6: Check game file has Firebase config
const gameContent = fs.readFileSync(gameFilePath, 'utf8');
if (gameContent.includes('firebase')) {
    console.log('✅ Firebase integration found in game');
} else {
    console.log('⚠️  Firebase integration NOT found in game');
}

console.log('\n📊 Configuration Summary:');
console.log('   Production URL: https://learn.modernagecoders.com/beat-the-babu');
console.log('   Local URL: http://localhost:3001/beat-the-babu');
console.log('\n✨ All checks completed!');
