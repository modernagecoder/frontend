# Course Thumbnail Image Setup Guide

## Overview
This guide explains how to add course thumbnail images to your course detail pages. When users click on a course from the course listing page, they will now see the same thumbnail image displayed in the hero section of the course detail page.

## How It Works

The course generation system looks for an `image_path` field in each course's JSON data file. When this field is present:
1. The image is copied from `public/images/` to the course's generated folder
2. The image is displayed in the hero section of the course detail page
3. The image is used in Open Graph and Twitter Card meta tags for social sharing

## Step-by-Step Instructions

### Step 1: Identify the Course Image

First, find the appropriate image for your course in the `public/images/` folder. Common image names include:
- `python-college.png` - Python courses for college students
- `python-teens.png` - Python courses for teens
- `python-kids.png` - Python courses for kids
- `full-stack-development-college.jpg` - Full-stack courses
- `react-college.jpg` - React courses
- `ai-ml-college.jpg` - AI/ML courses
- `data-science.png` - Data science courses
- `game-dev-college.png` - Game development courses
- etc.

### Step 2: Copy the Image to Course Images Folder

Copy the image from `public/images/` to `content/courses/images/`:

```bash
# Example for Python course
Copy-Item "public/images/python-college.png" -Destination "content/courses/images/python-college.png"
```

### Step 3: Update the Course JSON File

Open the course's JSON file in `content/courses/data/` and add the `image_path` field to the `meta` section:

**Before:**
```json
{
  "meta": {
    "slug": "python-programming-masterclass-zero-to-advanced-college",
    "title": "Complete Python Programming Masterclass",
    "description": "...",
    "category": "Professional Python Programming",
    "price": {
      "group": "₹999/month",
      ...
    }
  }
}
```

**After:**
```json
{
  "meta": {
    "slug": "python-programming-masterclass-zero-to-advanced-college",
    "title": "Complete Python Programming Masterclass",
    "description": "...",
    "category": "Professional Python Programming",
    "image_path": "python-college.png",
    "price": {
      "group": "₹999/month",
      ...
    }
  }
}
```

**Important:** The `image_path` should be just the filename (e.g., `"python-college.png"`), not the full path.

### Step 4: Regenerate Course Pages

Run the course generation script to apply the changes:

```bash
node scripts/generate-courses.js
```

You should see output like:
```
📄 Generating: python-programming-masterclass-zero-to-advanced-college
  ✓ Copied course-navigation.js
  ✓ Copied image: python-college.png
✅ Successfully generated: python-programming-masterclass-zero-to-advanced-college
```

## Quick Reference: Course to Image Mapping

Here's a suggested mapping of courses to images:

### Coding Courses (College/Professional)
- Python courses → `python-college.png`
- Full-stack courses → `full-stack-development-college.jpg`
- React courses → `react-college.jpg`
- MERN stack → `mern-stack-college.jpg`
- Java courses → `java-college.png`
- C++ courses → `cpp-college.png`
- AI/ML courses → `ai-ml-college.jpg`
- Data Science → `data-science.png`
- App Development → `app-dev-college.png`
- Game Development → `game-dev-college.png`
- Database/MySQL → `database-college.jpg`
- Data Structures → `dsa-college.jpg`

### Coding Courses (Teens)
- Python courses → `python-teens.png`
- React courses → `react-teens.png`
- Full-stack courses → `web-dev-teens.png`
- Java courses → `java-teens.png`
- C++ courses → `cpp-teens.png`
- AI/ML courses → `ai-ml-teens.png`
- App Development → `app-dev-teens.png`
- Game Development → `game-dev-teens.png`
- Backend → `backend-teens.png`
- Frontend → `frontend-teens.png`

### Coding Courses (Kids)
- Python courses → `python-kids.png`
- Scratch → `scratch-kids.png`
- Block coding → `blockly.png`
- Web design → `html-css-kids.png`
- AI courses → `ai-tools-kids.png`
- Game development → `game-dev-kids.png`
- App development → `app-dev-kids.png`

### Mathematics Courses
- Elementary math → `elementary-maths.png`
- Middle school math → `middle-school-maths.png`
- High school math → `high-school-maths.png`
- College math → `college-level-maths.png`
- Olympiad math → `olympiad-competition-maths.png`
- Data analytics math → `data-analytics-maths.png`
- Business/Finance math → `business-finance-maths.png`

## Batch Update Script

To update multiple courses at once, you can create a PowerShell script:

```powershell
# Copy all images to course images folder
Copy-Item "public/images/*.png" -Destination "content/courses/images/"
Copy-Item "public/images/*.jpg" -Destination "content/courses/images/"

# Then manually update each JSON file with the appropriate image_path
# Or use a script to automate this based on the mapping above
```

## Troubleshooting

### Image Not Found Error
If you see `⚠️ Image not found: [filename]`, it means:
1. The image doesn't exist in `content/courses/images/`
2. Copy it from `public/images/` first
3. Make sure the filename in the JSON matches exactly (case-sensitive)

### Image Not Displaying
If the image doesn't show on the course page:
1. Check that the course was regenerated after adding the `image_path`
2. Verify the image exists in `content/courses/generated/[course-slug]/images/`
3. Check browser console for 404 errors
4. Clear browser cache and reload

### Wrong Image Showing
If the wrong image appears:
1. Verify the `image_path` in the JSON file
2. Check that the correct image was copied to `content/courses/images/`
3. Regenerate the course pages

## Example: Complete Workflow

Here's a complete example for adding an image to the React course:

```powershell
# 1. Copy the image
Copy-Item "public/images/react-college.jpg" -Destination "content/courses/images/react-college.jpg"

# 2. Edit content/courses/data/react-js-college.json
# Add: "image_path": "react-college.jpg" to the meta section

# 3. Regenerate courses
node scripts/generate-courses.js

# 4. Verify the output shows:
# ✓ Copied image: react-college.jpg
```

## Notes

- Images should be optimized for web (recommended size: 800x600px or similar aspect ratio)
- Supported formats: PNG, JPG, JPEG
- The same image can be used for multiple courses if appropriate
- If no `image_path` is specified, a default SVG placeholder will be used
- Images are automatically included in social media meta tags for better sharing

## Next Steps

After setting up images for all courses:
1. Test each course page to ensure images display correctly
2. Check mobile responsiveness
3. Verify social media sharing shows the correct image
4. Update any documentation or README files
