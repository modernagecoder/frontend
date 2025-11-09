# ⚡ Quick Reference - Add a Student Project

## 🎯 3-Step Process

### Step 1: Open the Data File
```
Open: src/js/student-projects-data.js
```

### Step 2: Copy This Template
```javascript
{
    id: 13, // ← Change to next number
    title: "Project Name Here",
    student: "Student Name",
    category: "web", // web, ai, game, or mobile
    description: "Brief description of the project",
    tags: ["Tech1", "Tech2", "Tech3"],
    image: "/images/projects/screenshot.jpg",
    link: "https://project-url.com",
    featured: false
}
```

### Step 3: Add to Array
Paste it inside the `studentProjects` array, before the closing `]`

---

## 📋 Field Guide

| Field | Required | Example | Notes |
|-------|----------|---------|-------|
| `id` | ✅ Yes | `13` | Must be unique |
| `title` | ✅ Yes | `"AI Chatbot"` | Project name |
| `student` | ✅ Yes | `"Aryan Sharma"` | Student's name |
| `category` | ✅ Yes | `"ai"` | web, ai, game, mobile |
| `description` | ✅ Yes | `"An AI chatbot..."` | 2-3 sentences |
| `tags` | ✅ Yes | `["Python", "AI"]` | Array of strings |
| `image` | ❌ No | `"/images/..."` | Path to image |
| `link` | ✅ Yes | `"https://..."` | Project URL |
| `featured` | ❌ No | `false` | true or false |

---

## 🎨 Category Options

```javascript
"web"    // 🌐 Websites, web apps
"ai"     // 🤖 AI/ML projects
"game"   // 🎮 Games
"mobile" // 📱 Mobile apps
```

---

## 🏷️ Popular Tags

### Web Development
```javascript
["HTML", "CSS", "JavaScript", "React", "Vue", "Angular", 
 "Node.js", "Express", "MongoDB", "Firebase"]
```

### AI & Machine Learning
```javascript
["Python", "TensorFlow", "PyTorch", "Keras", "OpenCV",
 "NLP", "Computer Vision", "Machine Learning"]
```

### Game Development
```javascript
["Unity", "Unreal Engine", "Godot", "C#", "C++",
 "Game Design", "3D Modeling", "Animation"]
```

### Mobile Development
```javascript
["React Native", "Flutter", "Swift", "Kotlin",
 "iOS", "Android", "Mobile UI/UX"]
```

---

## 📸 Image Guidelines

### Option 1: Add Screenshot
1. Take screenshot of project
2. Save to: `/images/projects/`
3. Name it: `project-name.jpg`
4. Use path: `"/images/projects/project-name.jpg"`

### Option 2: No Image
```javascript
image: "", // Shows 🚀 placeholder
```

---

## 🔗 Link Examples

```javascript
// Live website
link: "https://my-project.netlify.app"

// GitHub repo
link: "https://github.com/username/project"

// YouTube demo
link: "https://youtube.com/watch?v=demo"

// App store
link: "https://play.google.com/store/apps/..."
```

---

## ✅ Complete Example

```javascript
const studentProjects = [
    // ... existing projects ...
    
    // 👇 ADD YOUR NEW PROJECT HERE
    {
        id: 13,
        title: "Weather Dashboard",
        student: "Priya Sharma",
        category: "web",
        description: "A beautiful weather dashboard showing real-time forecasts with interactive charts and maps.",
        tags: ["React", "API", "Chart.js", "CSS"],
        image: "/images/projects/weather-dashboard.jpg",
        link: "https://weather-dashboard.netlify.app",
        featured: false
    }
    
    // 👆 DON'T FORGET THE COMMA!
];
```

---

## ⚠️ Common Mistakes

### ❌ Wrong
```javascript
{
    id: 13
    title: "Project"  // Missing comma!
    category: web     // Missing quotes!
    tags: "React"     // Should be array!
}
```

### ✅ Correct
```javascript
{
    id: 13,           // ← Comma
    title: "Project", // ← Comma + quotes
    category: "web",  // ← Quotes
    tags: ["React"]   // ← Array
}
```

---

## 🚀 After Adding

1. **Save** the file
2. **Refresh** the page
3. **Check** if project appears
4. **Test** the link works
5. **Try** filtering by category

---

## 🐛 Troubleshooting

### Project Not Showing?
- Check browser console (F12)
- Look for syntax errors
- Verify all commas are present
- Check quotes are correct

### Image Not Loading?
- Verify file path is correct
- Check image file exists
- Use forward slashes: `/`

### Link Not Working?
- Include `https://` in URL
- Test link in new tab first
- Check for typos

---

## 💡 Pro Tips

1. **Use descriptive titles** - Make it exciting!
2. **Keep descriptions short** - 2-3 sentences max
3. **Add relevant tags** - Help users find projects
4. **Use good screenshots** - First impression matters
5. **Test the link** - Make sure it works!

---

## 📞 Need Help?

Check these files:
- `STUDENT-PROJECTS-GUIDE.md` - Full guide
- `STUDENT-PROJECTS-SUMMARY.md` - Overview
- `STUDENT-PROJECTS-PREVIEW.md` - Visual guide

---

**Happy showcasing!** 🎉
