# Component Loading Troubleshooting

## Issue: Navigation and Footer Not Showing

### Quick Fix Steps

#### 1. Open Browser Console
- Press **F12** to open Developer Tools
- Go to **Console** tab
- Look for error messages

#### 2. Check What You Should See
You should see these messages:
```
Initializing components...
Base path: ../../components/
Loading component from: ../../components/nav.html
Component loaded successfully: ../../components/nav.html
Component inserted: nav-placeholder
Loading component from: ../../components/footer.html
Component loaded successfully: ../../components/footer.html
Component inserted: footer-placeholder
Components loaded successfully!
```

#### 3. Common Issues & Solutions

##### Issue: "Failed to load component" or 404 errors
**Solution:** You need to run a local development server

**Why?** Browsers block loading local files via `fetch()` for security reasons.

**How to fix:**
```bash
# Option 1: If you have Node.js
npx http-server

# Option 2: If you have Python
python -m http.server 8000

# Option 3: If you have PHP
php -S localhost:8000

# Option 4: Use VS Code Live Server extension
# Install "Live Server" extension and click "Go Live"
```

Then open: `http://localhost:8000/src/pages/index.html`

##### Issue: Components load but styles are broken
**Solution:** Check CSS file paths in index.html

Make sure CSS paths are correct:
```html
<link rel="stylesheet" href="../../css/style.css">
<!-- NOT -->
<link rel="stylesheet" href="/css/style.css">
```

##### Issue: "Placeholder not found"
**Solution:** Check that placeholders exist in HTML

Make sure you have:
```html
<div id="nav-placeholder"></div>
<!-- and -->
<div id="footer-placeholder"></div>
```

#### 4. Verify File Structure
```
your-project/
├── components/
│   ├── nav.html          ← Must exist
│   └── footer.html       ← Must exist
├── js/
│   └── components-loader.js  ← Must exist
└── src/
    └── pages/
        └── index.html    ← Your page
```

#### 5. Test Component Files Directly
Try opening these URLs in your browser:
- `http://localhost:8000/components/nav.html`
- `http://localhost:8000/components/footer.html`

If you get 404, the files are in the wrong location.

### Quick Test Page

Create this simple test file in your root directory as `test-components.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Component Test</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>Component Test Page</h1>
    
    <div id="nav-placeholder"></div>
    
    <main>
        <p>If you see navigation above and footer below, components are working!</p>
    </main>
    
    <div id="footer-placeholder"></div>
    
    <script>
        // Simple inline loader for testing
        async function loadComponent(url, placeholderId) {
            try {
                console.log('Loading:', url);
                const response = await fetch(url);
                const html = await response.text();
                document.getElementById(placeholderId).outerHTML = html;
                console.log('Loaded:', url);
            } catch (error) {
                console.error('Error loading', url, error);
            }
        }
        
        loadComponent('components/nav.html', 'nav-placeholder');
        loadComponent('components/footer.html', 'footer-placeholder');
    </script>
</body>
</html>
```

### Still Not Working?

#### Check Network Tab
1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Refresh page
4. Look for `nav.html` and `footer.html` requests
5. Check their status (should be 200, not 404)

#### Verify Script is Loading
In console, type:
```javascript
document.querySelector('script[src*="components-loader"]')
```
Should return the script element, not null.

#### Manual Test
In console, try loading manually:
```javascript
fetch('../../components/nav.html')
  .then(r => r.text())
  .then(html => console.log(html))
```

If this works, the component loader should work too.

### Contact for Help

If still not working, provide:
1. Screenshot of browser console
2. Screenshot of Network tab
3. Your file structure
4. How you're running the server

---

## Quick Solution Summary

**Most Common Issue:** Not using a development server

**Quick Fix:**
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run in your project root
http-server

# Open browser to:
http://localhost:8080/src/pages/index.html
```

**That's it!** Components should load now. ✅
