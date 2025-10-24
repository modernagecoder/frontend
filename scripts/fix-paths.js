const fs = require('fs');
const path = require('path');

// Files to process
const files = [
    'src/pages/index.html',
    'src/pages/about.html',
    'src/pages/course.html'
];

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix image paths
    content = content.replace(/src="\.\.\/\.\.\/public\/images\//g, 'src="/images/');
    
    // Fix course template URLs
    content = content.replace(/templateUrl: '\.\.\/\.\.\/content\/courses\/generated\//g, 'templateUrl: \'/courses/');
    
    // Fix blog links
    content = content.replace(/href="\.\.\/\.\.\/content\/blog\/generated\/index\.html"/g, 'href="/blog"');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed paths in ${filePath}`);
});

console.log('All paths fixed!');
