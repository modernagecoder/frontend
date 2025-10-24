# Modern Age Coders Blog System

A simple, powerful blog generation system that creates SEO-optimized, visually stunning blog posts from JSON data files.

## Quick Start

### 1. Create a Blog Post

Create a JSON file in `blog/data/` folder (example: `my-blog-post.json`):

```json
{
  "meta": {
    "slug": "my-blog-post",
    "title": "My Amazing Blog Post",
    "description": "A brief description for SEO (150-160 characters)",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "author": {
      "name": "Your Name",
      "bio": "Brief author bio",
      "avatar": "https://placehold.co/80x80"
    },
    "date": "2025-10-12",
    "category": "Programming",
    "tags": ["Tag1", "Tag2"],
    "readTime": "5 min read",
    "featured": false
  },
  "hero": {
    "title": "My Amazing Blog Post",
    "subtitle": "An engaging subtitle",
    "featuredImage": {
      "url": "https://placehold.co/1200x600",
      "alt": "Descriptive alt text"
    }
  },
  "content": {
    "sections": [
      {
        "type": "paragraph",
        "text": "Your blog content here..."
      }
    ]
  },
  "relatedPosts": ["other-post-slug"]
}
```

### 2. Generate Blog Pages

Run the generation command:

```bash
node scripts/generate-blogs.js
```

Or use npm:

```bash
npm run generate-blogs
```

### 3. View Your Blog

Open `blog/generated/index.html` in your browser to see the blog listing page, or navigate to `blog/generated/[your-slug]/` to see your blog post.

## JSON Schema Reference

### Required Fields

#### meta (object)
- `slug` (string) - URL-friendly identifier (use kebab-case)
- `title` (string) - Blog post title
- `description` (string) - SEO meta description (150-160 characters)
- `keywords` (array) - Array of SEO keywords
- `author` (object) - Author information
  - `name` (string) - Author name
  - `bio` (string) - Author biography
  - `avatar` (string) - Author avatar URL
- `date` (string) - Publication date (YYYY-MM-DD format)
- `category` (string) - Blog category
- `tags` (array) - Array of tags
- `readTime` (string) - Estimated read time (e.g., "5 min read")
- `featured` (boolean) - Whether to feature on listing page

#### hero (object)
- `title` (string) - Hero section title
- `subtitle` (string) - Hero section subtitle
- `featuredImage` (object) - Featured image
  - `url` (string) - Image URL
  - `alt` (string) - Image alt text

#### content (object)
- `sections` (array) - Array of content sections

### Content Section Types

#### Paragraph
```json
{
  "type": "paragraph",
  "text": "Your paragraph text with <strong>HTML</strong> support"
}
```

#### Heading
```json
{
  "type": "heading",
  "level": 2,
  "text": "Section Heading"
}
```
Levels: 2-6 (H2-H6)

#### List
```json
{
  "type": "list",
  "style": "unordered",
  "items": ["Item 1", "Item 2", "Item 3"]
}
```
Styles: `"unordered"` or `"ordered"`

#### Image
```json
{
  "type": "image",
  "url": "https://example.com/image.jpg",
  "alt": "Image description",
  "caption": "Optional caption"
}
```

#### Code Block
```json
{
  "type": "code",
  "language": "javascript",
  "code": "const greeting = 'Hello, World!';\nconsole.log(greeting);"
}
```
Supported languages: javascript, python, html, css, java, cpp, etc.

#### Quote
```json
{
  "type": "quote",
  "text": "Quote text here",
  "author": "Author Name"
}
```

## Features

✅ **SEO Optimized**
- Proper meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card tags
- Structured data (JSON-LD) for search engines
- SEO-friendly URLs

✅ **Beautiful Design**
- Responsive layout (mobile, tablet, desktop)
- Glassmorphism design matching course pages
- Smooth animations and transitions
- Reading progress indicator
- Featured post highlighting

✅ **Easy to Use**
- Simple JSON format
- No HTML knowledge required
- Automatic blog listing page generation
- Related posts support

✅ **Developer Friendly**
- Template-based system
- Reusable components
- Error handling and validation
- Clear console output

## File Structure

```
blog/
├── data/                          # Your blog post JSON files
│   ├── my-first-post.json
│   └── my-second-post.json
├── template/                      # Template files (don't modify)
│   ├── blog-template.html
│   └── blog-listing-template.html
├── generated/                     # Generated blog pages (auto-created)
│   ├── index.html                # Blog listing page
│   ├── my-first-post/
│   │   └── index.html
│   └── my-second-post/
│       └── index.html
└── images/                        # Blog images
    ├── featured/
    └── content/
```

## NPM Commands

```bash
# Generate blog posts only
npm run generate-blogs

# Generate courses only
npm run generate-courses

# Generate both blogs and courses
npm run generate-all

# Build for production
npm run build
```

## Tips & Best Practices

### Writing Great Blog Posts

1. **Title**: Keep it under 60 characters for SEO
2. **Description**: Write compelling 150-160 character descriptions
3. **Keywords**: Use 3-6 relevant keywords
4. **Images**: Use high-quality images with descriptive alt text
5. **Content**: Break content into sections with headings
6. **Code**: Use code blocks for technical content
7. **Links**: Reference related posts to keep readers engaged

### SEO Best Practices

- Use descriptive, keyword-rich slugs (e.g., `javascript-basics` not `post-1`)
- Write unique meta descriptions for each post
- Include relevant keywords naturally in content
- Use proper heading hierarchy (H2, H3, H4)
- Add alt text to all images
- Keep URLs short and descriptive

### Content Structure

- Start with an engaging introduction
- Use headings to organize content
- Include code examples for technical posts
- Add images to break up text
- End with a call-to-action or summary
- Link to related posts

## Troubleshooting

### Blog post not generating

**Check:**
- JSON file is in `blog/data/` folder
- JSON syntax is valid (use a JSON validator)
- All required fields are present
- Date format is YYYY-MM-DD
- Slug is unique and uses kebab-case

### Images not showing

**Check:**
- Image URLs are correct and accessible
- Image paths are absolute URLs or correct relative paths
- Images are in `blog/images/` folder if using local images

### Styling issues

**Check:**
- `style.css` is being copied to blog post directory
- No CSS conflicts with custom styles
- Browser cache is cleared

### Generation errors

**Check console output for:**
- Missing required fields
- Invalid JSON syntax
- Duplicate slugs
- Invalid date format

## Advanced Usage

### Custom Styling

To customize blog styling, edit `style.css` and look for the "BLOG SYSTEM STYLES" section.

### Template Customization

To modify the blog template:
1. Edit `blog/template/blog-template.html`
2. Use `{{PLACEHOLDER}}` syntax for dynamic content
3. Regenerate all blogs to apply changes

### Adding New Content Types

To add new content section types:
1. Edit `scripts/generate-blogs.js`
2. Add new case in `generateContent()` method
3. Update this README with the new type

## Support

For questions or issues:
- Check this README
- Review sample blog posts in `blog/data/`
- Contact Modern Age Coders team

## License

MIT License - Modern Age Coders
