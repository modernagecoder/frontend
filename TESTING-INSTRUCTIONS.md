# Testing Instructions for Dynamic Form

## Quick Test

### Option 1: Test the Standalone Test Page

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open in browser:
   ```
   http://localhost:8080/test-dynamic-form.html
   ```

3. Try selecting different options in the dropdown:
   - Select "Corporate Training for My Team" → Should show purple corporate fields
   - Select "Personal Upskilling to Get a Better Job" → Should show teal individual fields
   - Select "Career Change / New Skills" → Should show teal individual fields

4. Check the browser console (F12) for debug messages

---

### Option 2: Test on Main Website

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open in browser:
   ```
   http://localhost:8080
   ```

3. Scroll to "Coding Curriculum" section

4. Click the **"Corporate"** tab

5. Try selecting different options in "I am looking for" dropdown

6. **Open browser console (F12)** to see debug messages

---

## What to Check

### In Browser Console (F12 → Console tab)

You should see messages like:
```
Corporate training form script loaded
Form found: <form>
Form elements found: {trainingTypeSelect: true, corporateFields: true, individualFields: true}
Adding change listener to training type select
```

When you change the dropdown:
```
Training type changed!
Selected value: company
Hiding corporate fields
Hiding individual fields
Showing corporate fields
```

---

## Expected Behavior

### When you select "Corporate Training for My Team":
- ✅ Company Name field appears
- ✅ Team Size field appears
- ❌ Employment Status hidden
- ❌ Career Goal hidden

### When you select any individual option:
- ❌ Company Name hidden
- ❌ Team Size hidden
- ✅ Employment Status appears
- ✅ Career Goal appears

---

## Troubleshooting

### If fields don't show/hide:

1. **Check browser console for errors**
   - Press F12
   - Go to Console tab
   - Look for red error messages

2. **Check if script is loaded**
   - In console, you should see: "Corporate training form script loaded"
   - If not, the script isn't loading

3. **Check if form is found**
   - In console, you should see: "Form found: <form>"
   - If you see "Form not found!", the form ID might be wrong

4. **Try hard refresh**
   - Press Ctrl+Shift+R (Windows/Linux)
   - Press Cmd+Shift+R (Mac)
   - This clears cache

5. **Check Network tab**
   - Press F12
   - Go to Network tab
   - Refresh page
   - Look for "corporate-training-form.js"
   - Should show status 200 (loaded successfully)

---

## What to Report Back

Please tell me:

1. **Which test did you try?** (Test page or main website)

2. **What do you see in the console?** (Copy/paste the messages)

3. **What happens when you change the dropdown?**
   - Do fields appear/disappear?
   - Do you see console messages?
   - Any errors?

4. **Screenshot if possible** (of the form and console)

---

## Quick Debug Commands

Open browser console (F12) and type these commands:

```javascript
// Check if elements exist
console.log('Training select:', document.getElementById('trainingType'));
console.log('Corporate fields:', document.getElementById('corporateFields'));
console.log('Individual fields:', document.getElementById('individualFields'));

// Manually trigger the function
document.getElementById('trainingType').value = 'company';
document.getElementById('trainingType').dispatchEvent(new Event('change'));
```

This will help us see what's happening!
