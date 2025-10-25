# Blog Quick Start Guide

## ✅ All Fixed! Your Blog System is Ready

### What Was Fixed
1. ✅ CSS now loads properly on all blog pages
2. ✅ JavaScript files work correctly (navigation + blog features)
3. ✅ Navigation bar links to all pages correctly
4. ✅ Blog listing page accessible from main site
5. ✅ All blog posts link back to listing and main site

---

## 🚀 How to Generate Blogs

### Step 1: Create a Blog Post
Create a JSON file in `content/blog/data/` with this structure:

```json
{
  "meta": {
    "slug": "my-awesome-post",
    "title": "My Awesome Post Title",
    "description": "A brief description of the post",
    "author": {
      "name": "Your Name",
      "bio": "Your bio here",
      "avatar": "/images/avatar.png"
    },
    "date": "2025-10-25",
    "category": "Tutorial",
    "tags": ["coding", "tutorial"],
    "readTime": "5 min read",
    "featured": false
  },
  "hero": {
    "title": "My Awesome Post Title",
    "subtitle": "A catchy subtitle",
    "featuredImage": {
      "url": "https://placehold.co/1200x600",
      "alt": "Post image description"
    }
  },
  "content": {
    "sections": [
      {
        "type": "paragraph",
        "text": "Your content here..."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Section Heading"
      }
    ]
  },
  "relatedPosts": ["other-post-slug"]
}
```

### Step 2: Generate the Blog
Run this command:
```bash
npm run generate:blogs
```

### Step 3: View Your Blog
Open in browser:
- Blog listing: `content/blog/generated/index.html`
- Individual post: `content/blog/generated/[slug]/index.html`

---

## 📁 File Structure

```
content/blog/
├── data/                    # Your blog JSON files go here
│   ├── my-post.json
│   └── another-post.json
├── template/                # Templates (don't modify unless needed)
│   ├── blog-template.html
│   └── blog-listing-template.html
└── generated/               # Auto-generated (don't edit manually)
    ├── index.html           # Blog listing page
    └── [slug]/              # Individual blog posts
        ├── index.html
        ├── style.css
        ├── navigation.js
        └── blog-navigation.js
```

---

## 🎨 Content Types Supported

### Paragraph
```json
{
  "type": "paragraph",
  "text": "Your paragraph text here."
}
```

### Heading
```json
{
  "type": "heading",
  "level": 2,
  "text": "Your Heading"
}
```

### List
```json
{
  "type": "list",
  "style": "unordered",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```

### Image
```json
{
  "type": "image",
  "url": "/images/my-image.png",
  "alt": "Image description",
  "caption": "Optional caption"
}
```

### Code Block
```json
{
  "type": "code",
  "language": "javascript",
  "code": "console.log('Hello World');"
}
```

### Quote
```json
{
  "type": "quote",
  "text": "Your quote here",
  "author": "Quote Author"
}
```

---

## 🔗 Navigation Links

### Main Site → Blog
The "Blog" link in your main navigation now correctly points to:
`/content/blog/generated/index.html`

### Blog Listing → Blog Post
Click any blog card to navigate to that post

### Blog Post → Blog Listing
Click the back arrow button in the header

### Blog Post → Main Site
All navigation links (Home, Courses, About, etc.) work correctly

---

## ✨ Features Working

✅ **Responsive Design**: Works on mobile, tablet, and desktop
✅ **Reading Progress Bar**: Shows on individual blog posts
✅ **Smooth Scrolling**: For anchor links
✅ **Mobile Menu**: Hamburger menu on small screens
✅ **SEO Optimized**: Meta tags and structured data included
✅ **Related Posts**: Shows related articles at bottom
✅ **Author Bio**: Displays author information
✅ **Blog Cards**: Clickable cards on listing page
✅ **Featured Posts**: Can mark posts as featured

---

## 🧪 Testing Checklist

After generating blogs, test:
- [ ] Blog listing page loads with CSS
- [ ] Individual blog posts load with CSS
- [ ] Navigation bar appears correctly
- [ ] All navigation links work
- [ ] Mobile menu functions
- [ ] Blog cards are clickable
- [ ] Back button returns to listing
- [ ] Related posts link correctly
- [ ] Reading progress bar appears
- [ ] Images load properly

---

## 🎯 Quick Commands

```bash
# Generate blogs only
npm run generate:blogs

# Generate courses only
npm run generate:courses

# Generate everything
npm run generate:all

# Start dev server
npm run dev
```

---

## 📝 Example Blog Posts

You already have 3 example blog posts:
1. `coding-for-kids-guide.json`
2. `javascript-basics.json`
3. `python-for-beginners.json`

Use these as templates for creating new posts!

---

## 🐛 Troubleshooting

### CSS not loading?
- Make sure you ran `npm run generate:blogs`
- Check that `src/css/style.css` exists

### Navigation links broken?
- All links use absolute paths starting with `/`
- Make sure you're serving from the project root

### Blog not appearing?
- Check JSON file is in `content/blog/data/`
- Verify JSON is valid (no syntax errors)
- Run generation command again

---

## 🎉 You're All Set!

Your blog generation system is now fully functional. Just create JSON files and run the generator!
