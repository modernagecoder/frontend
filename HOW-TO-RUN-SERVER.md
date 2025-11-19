# 🚀 How to Run Your Website with Components

## ⚠️ IMPORTANT: You MUST Use a Local Server!

**Why?** Browsers block loading files via JavaScript for security reasons. Components won't load if you just open the HTML file directly.

---

## ✅ Quick Solution (Choose One)

### Option 1: Using npx (Recommended - No Installation)
```bash
npx http-server
```
Then open: `http://localhost:8080/src/pages/index.html`

### Option 2: Using npm http-server (Install Once)
```bash
# Install globally (one time only)
npm install -g http-server

# Run server
http-server

# Open: http://localhost:8080/src/pages/index.html
```

### Option 3: Using Python (If you have Python installed)
```bash
# Python 3
python -m http.server 8000

# Open: http://localhost:8000/src/pages/index.html
```

### Option 4: Using VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"

### Option 5: Using Node.js (If you have package.json)
```bash
npm start
# or
npm run dev
```

---

## 🎯 Step-by-Step Instructions

### 1. Open Terminal in Your Project Folder
```bash
cd C:\Users\hp\Desktop\SkyCoders\kiro23\frontend
```

### 2. Run Server
```bash
npx http-server
```

You should see:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.x.x:8080
Hit CTRL-C to stop the server
```

### 3. Open Browser
Go to: `http://localhost:8080/src/pages/index.html`

### 4. Check Console (F12)
You should see:
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

---

## ✅ Success Checklist

- [ ] Server is running
- [ ] Opened `http://localhost:8080/src/pages/index.html` (NOT file://)
- [ ] Navigation bar appears at top
- [ ] Footer appears at bottom
- [ ] No errors in console (F12)
- [ ] All links work
- [ ] Mobile menu works

---

## 🐛 Still Not Working?

### Check 1: Are you using localhost?
❌ **Wrong:** `file:///C:/Users/hp/Desktop/.../index.html`  
✅ **Correct:** `http://localhost:8080/src/pages/index.html`

### Check 2: Open Browser Console (F12)
Look for errors. Common ones:
- "Failed to load component" → Server not running
- "404 Not Found" → Wrong path
- "CORS error" → Not using localhost

### Check 3: Verify Files Exist
```bash
dir components
# Should show: nav.html, footer.html

dir js
# Should show: components-loader.js
```

### Check 4: Test Component Files Directly
Open these in browser:
- `http://localhost:8080/components/nav.html`
- `http://localhost:8080/components/footer.html`

If you see HTML code, files are in correct location!

---

## 💡 Quick Test

Create `test.html` in your root folder:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>Component Test</h1>
    <div id="nav-placeholder"></div>
    <p>Content here</p>
    <div id="footer-placeholder"></div>
    <script src="js/components-loader.js"></script>
</body>
</html>
```

Run server and open: `http://localhost:8080/test.html`

If components load here, they'll load in index.html too!

---

## 🎉 Once It Works

Your components are working! Now you can:
1. Edit `components/nav.html` to update navigation everywhere
2. Edit `components/footer.html` to update footer everywhere
3. Refresh browser to see changes

---

## 📞 Need More Help?

Read: `TROUBLESHOOTING-COMPONENTS.md` for detailed debugging steps.

---

**Remember: Always use a local server! Never open HTML files directly (file://)** ✅
