# Local Development Guide

## 🚨 Important: Don't Open HTML Files Directly!

When you double-click HTML files, they open with `file://` protocol which doesn't support absolute paths like `/css/style.css`. This is why CSS doesn't load.

## ✅ Solution: Use the Development Server

### Start the Server:

```bash
npm run dev
```

Or:

```bash
npm start
```

This will start a local server at **http://localhost:3000**

### Then Open in Browser:

- Homepage: http://localhost:3000
- About: http://localhost:3000/about
- Courses: http://localhost:3000/courses
- Blog: http://localhost:3000/blog

## 🎯 How It Works

The dev server mimics Netlify's behavior:
- ✅ Serves files with correct MIME types
- ✅ Handles clean URLs (`/about` instead of `/about.html`)
- ✅ Maps `/css/*` to `src/css/*`
- ✅ Maps `/js/*` to `src/js/*`
- ✅ Maps `/images/*` to `public/images/*`
- ✅ Shows custom 404 page for missing files

## 🔄 Alternative: Use Python Server

If you prefer Python:

```bash
# Python 3
python -m http.server 3000
```

Then visit: http://localhost:3000/src/pages/index.html

(Note: With Python server, you'll need to use full paths)

## 🛠️ Alternative: Use VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `src/pages/index.html`
3. Select "Open with Live Server"

(Note: You may need to configure base path)

## 📝 Remember

**Always use a local server for development!**
- ✅ DO: `npm run dev` → http://localhost:3000
- ❌ DON'T: Double-click HTML files

This ensures your local environment matches Netlify exactly.
