const fs = require('fs');
let html = fs.readFileSync('src/pages/about.html', 'utf8');
if (!html.includes('about.css')) {
    html = html.replace('</head>', '    <link rel="stylesheet" href="/css/about.css">\n</head>');
    fs.writeFileSync('src/pages/about.html', html);
    console.log("Successfully added about.css");
} else {
    console.log("about.css already linked");
}
