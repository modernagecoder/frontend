# Local Testing Guide - Clean URLs

## ✅ Dev Server is Running!

Your local development server is now running with support for clean URLs.

**Server URL:** http://localhost:3001

## 🧪 Test These URLs Locally

### Course Category Pages
Open these URLs in your browser:

1. **Coding for Kids:**
   ```
   http://localhost:3001/courses/coding/kids
   ```

2. **Coding for Teens:**
   ```
   http://localhost:3001/courses/coding/teens
   ```

3. **Coding for College:**
   ```
   http://localhost:3001/courses/coding/college
   ```

4. **Mathematics Elementary:**
   ```
   http://localhost:3001/courses/mathematics/elementary
   ```

5. **Mathematics High School:**
   ```
   http://localhost:3001/courses/mathematics/high-school
   ```

### Individual Course Pages
```
http://localhost:3001/courses/scratch-programming-complete-course
http://localhost:3001/courses/python-programming-masterclass-zero-to-advanced
```

### Main Pages
```
http://localhost:3001/
http://localhost:3001/about
http://localhost:3001/courses
http://localhost:3001/contact
```

## ✅ What to Check

For each URL, verify:
- [ ] Page loads without 404 error
- [ ] Correct tab is activated (Coding or Mathematics)
- [ ] Correct subtab is highlighted (Kids, Teens, etc.)
- [ ] Courses display correctly
- [ ] Navigation menu works
- [ ] All links are clickable

## 🔧 If You See Issues

### Issue: Still seeing 404
**Solution:** Make sure you're using port 3001, not 3000
- ❌ Wrong: http://localhost:3000/courses/coding/kids
- ✅ Correct: http://localhost:3001/courses/coding/kids

### Issue: Wrong tab activated
**Solution:** Check browser console for JavaScript errors

### Issue: Courses not displaying
**Solution:** Make sure courses are generated:
```bash
npm run generate:courses
```

## 🚀 Deploy to Production

Once local testing is complete:

1. **Stop the dev server:**
   - Press Ctrl+C in the terminal

2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Implement clean SEO-friendly URLs with proper redirects"
   git push
   ```

3. **Netlify will auto-deploy** (if connected)

4. **Test on production:**
   - https://learn.modernagecoders.com/courses/coding/teens
   - https://learn.modernagecoders.com/courses/mathematics/high-school

## 📝 Files Updated

### Configuration Files
- ✅ `netlify.toml` - Netlify redirects (correct order)
- ✅ `_redirects` - Netlify redirects file (correct order)
- ✅ `scripts/dev-server.js` - Local dev server with category URL support

### HTML Pages (All navigation updated)
- ✅ `src/pages/index.html`
- ✅ `src/pages/course.html`
- ✅ `src/pages/about.html`
- ✅ `src/pages/contact.html`
- ✅ `src/pages/pricing.html`
- ✅ `src/pages/faq.html`
- ✅ `src/pages/privacy.html`
- ✅ `src/pages/terms.html`
- ✅ `src/pages/student-labs.html`
- ✅ `src/pages/404.html`

## 🎯 Key Points

1. **Redirect Order Matters!**
   - Category URLs (`/courses/coding/*`) must come BEFORE
   - Individual courses (`/courses/*`)
   - This is now fixed in both netlify.toml and _redirects

2. **Local vs Production**
   - Local: Uses `scripts/dev-server.js` (port 3001)
   - Production: Uses Netlify redirects

3. **Backwards Compatible**
   - Old URLs still work: `/courses?tab=coding&subtab=teens`
   - New clean URLs: `/courses/coding/teens`

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Check if port is in use
netstat -ano | findstr :3001

# Kill the process if needed
taskkill /PID <process_id> /F

# Restart server
node scripts/dev-server.js
```

### Changes Not Showing
1. Hard refresh browser: Ctrl + Shift + R
2. Clear browser cache
3. Restart dev server

### 404 on Production (After Deploy)
1. Check Netlify deploy logs
2. Verify _redirects file is in root
3. Check redirect order in Netlify dashboard

---

**Current Status:** ✅ Ready for local testing
**Dev Server:** Running on http://localhost:3001
**Next Step:** Test the URLs above, then deploy!
