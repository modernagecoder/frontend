# 📸 How to Add Project Images

## Step 1: Prepare Your Images

1. **Take a screenshot** of the project
2. **Save it** in `/images/projects/` folder
3. **Name it** descriptively (e.g., `ai-chatbot.jpg`, `ecommerce-website.png`)

**Recommended image size:** 800x600px or 1200x800px

---

## Step 2: Add Image Path to Project

Open `src/pages/student-projects-final.html` and find the `projects` array (around line 280).

### Example:

```javascript
{
    title: "AI Chatbot Assistant",
    student: "Aryan Sharma",
    category: "ai",
    description: "An intelligent chatbot...",
    tags: ["Python", "TensorFlow"],
    link: "https://example.com/ai-chatbot",
    image: "/images/projects/ai-chatbot.jpg"  // ← ADD THIS LINE
}
```

---

## Step 3: Image Path Options

### Option 1: Local Image
```javascript
image: "/images/projects/my-project.jpg"
```

### Option 2: External URL
```javascript
image: "https://example.com/screenshot.jpg"
```

### Option 3: No Image (Shows Rocket 🚀)
```javascript
image: ""
// OR just omit the image field entirely
```

---

## 📁 Folder Structure

```
frontend/
├── images/
│   └── projects/           ← PUT YOUR IMAGES HERE
│       ├── ai-chatbot.jpg
│       ├── ecommerce.png
│       ├── game.jpg
│       └── ...
└── src/
    └── pages/
        └── student-projects-final.html
```

---

## ✅ Complete Example

```javascript
const projects = [
    {
        title: "AI Chatbot Assistant",
        student: "Aryan Sharma",
        category: "ai",
        description: "An intelligent chatbot powered by machine learning.",
        tags: ["Python", "TensorFlow", "NLP"],
        link: "https://example.com/ai-chatbot",
        image: "/images/projects/ai-chatbot.jpg"  // ← Image added
    },
    {
        title: "E-Commerce Website",
        student: "Priya Patel",
        category: "web",
        description: "A fully functional online shopping platform.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "https://example.com/ecommerce",
        image: "/images/projects/ecommerce.png"  // ← Image added
    },
    {
        title: "Space Shooter Game",
        student: "Rohan Kumar",
        category: "game",
        description: "An exciting 2D space shooter game.",
        tags: ["Unity", "C#"],
        link: "https://example.com/space-game",
        image: ""  // ← No image, will show 🚀
    }
];
```

---

## 🎨 Image Tips

### Good Images:
- ✅ Clear screenshot of the project
- ✅ Shows the main interface
- ✅ Good lighting/contrast
- ✅ 800x600px or larger
- ✅ JPG or PNG format

### Avoid:
- ❌ Blurry images
- ❌ Too small (less than 400px wide)
- ❌ Wrong aspect ratio (very tall or very wide)

---

## 🔧 Troubleshooting

### Image Not Showing?

1. **Check the path** - Make sure it starts with `/images/projects/`
2. **Check the file exists** - Verify the image is in the folder
3. **Check the filename** - Match exact spelling and extension
4. **Check browser console** (F12) for errors

### Image Too Big/Small?

The CSS automatically handles sizing with `object-fit: cover`, so images will always fit perfectly!

---

## 🚀 Quick Start

1. Save your project screenshot to `/images/projects/my-project.jpg`
2. Open `student-projects-final.html`
3. Find your project in the `projects` array
4. Add: `image: "/images/projects/my-project.jpg"`
5. Save and refresh!

---

**That's it! Your project images will now display beautifully!** 🎉
