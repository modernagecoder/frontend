# Comprehensive Course System

A powerful course generation system that creates detailed, SEO-optimized course pages from structured JSON data with support for nested curriculum (Phases → Months → Weeks).

## Quick Start

1. **Create a JSON file** in `courses/data/` folder
2. **Run the generator**: `node scripts/generate-courses.js`
3. **Done!** Your course will be at `courses/generated/my-course-slug/index.html`

## Features

✅ Nested Curriculum Structure (Phase → Month → Week)  
✅ Rich Content (Topics, Projects, Practice, Assessments)  
✅ Custom Hero Images for SEO  
✅ Responsive Design  
✅ Interactive Accordions  
✅ SEO Optimized with Structured Data  
✅ Show More/Less for Long Lists  
✅ Career Outcomes Timeline  
✅ Learning Path Visualization  

## JSON Structure Example

See `courses/data/full-stack-web-development.json` for a complete example.

### Minimal Structure

```json
{
  "meta": {
    "slug": "my-course",
    "title": "My Course Title",
    "description": "Course description for SEO",
    "keywords": ["keyword1", "keyword2"],
    "category": "Programming",
    "price": {
      "group": "₹1499/month",
      "personal": "₹2999/month"
    }
  },
  "phase_1_foundation": {
    "title": "PHASE 1: Foundation",
    "description": "Build fundamentals",
    "month_1_2": {
      "title": "Months 1-2: Basics",
      "weeks": "Week 1-8",
      "week_1_2": {
        "title": "Introduction",
        "topics": ["Topic 1", "Topic 2"],
        "projects": ["Project 1"],
        "practice": "Daily practice instructions"
      }
    }
  }
}
```

## Image Support

Place images in `courses/images/` and reference in JSON:

```json
{
  "meta": {
    "image_path": "my-course-hero.jpg"
  }
}
```

**Recommended**: 1200x630px, JPG/PNG, < 500KB

## Generator Usage

```bash
node scripts/generate-courses.js
```

Output shows generation progress and any warnings.

## Documentation

For complete documentation, see the full-stack-web-development.json example which demonstrates all available fields and features.

## Troubleshooting

- **Image not showing**: Verify image exists in `courses/images/`
- **Accordion not working**: Check `course-navigation.js` is copied
- **Styling issues**: Verify `style.css` exists in generated folder
