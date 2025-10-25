# Course Navigation Script Fix - Complete

## Problem
The generated course pages had a script tag `<script src="./course-navigation.js"></script>` but the JavaScript file wasn't being copied to the course directories during generation.

## Root Cause
In `scripts/generate-courses.js`, the script was looking for `course-navigation.js` in the project root:
```javascript
const jsSourcePath = path.join(this.projectRoot, 'course-navigation.js');
```

But the actual file is located at: `src/js/course-navigation.js`

## Solution Applied
Updated the path in `scripts/generate-courses.js` (line ~90):

**Before:**
```javascript
const jsSourcePath = path.join(this.projectRoot, 'course-navigation.js');
```

**After:**
```javascript
const jsSourcePath = path.join(this.projectRoot, 'src', 'js', 'course-navigation.js');
```

Also added logging to confirm the copy operation:
```javascript
if (fs.existsSync(jsSourcePath)) {
    fs.copyFileSync(jsSourcePath, courseJsPath);
    console.log(`  ✓ Copied course-navigation.js`);
} else {
    console.warn(`  ⚠️  course-navigation.js not found at ${jsSourcePath}`);
}
```

## Verification
✅ All 27 courses regenerated successfully
✅ `course-navigation.js` copied to each course directory
✅ Script tag in HTML: `<script src="./course-navigation.js"></script>` (correct relative path)
✅ File verified in: `content/courses/generated/ai-ml-masterclass-complete/course-navigation.js`

## What the Script Does
The `course-navigation.js` file provides:
- Tab switching functionality for course pages
- Curriculum accordion (Phase → Month → Week structure)
- "Show More" buttons for long topic lists
- Course card click navigation
- URL parameter handling for direct tab access
- Keyboard accessibility support

## Future Course Generation
Now whenever you run `node scripts/generate-courses.js`, the script will automatically:
1. Copy the CSS file to each course directory
2. Copy the JavaScript file to each course directory
3. Generate the HTML with correct relative paths

All generated courses will have working navigation and interactive features!
