# Blog Content Types - Quick Reference Card

## Basic Content

| Type | Usage |
|------|-------|
| **paragraph** | `{"type": "paragraph", "text": "Your text"}` |
| **heading** | `{"type": "heading", "level": 2, "text": "Title", "id": "anchor"}` |
| **list** | `{"type": "list", "style": "ordered/unordered", "items": [...]}` |
| **image** | `{"type": "image", "url": "...", "alt": "...", "caption": "..."}` |
| **code** | `{"type": "code", "language": "js", "title": "file.js", "code": "..."}` |
| **quote** | `{"type": "quote", "text": "...", "author": "..."}` |

## Advanced Content

| Type | Usage |
|------|-------|
| **callout** | `{"type": "callout", "calloutType": "info/tip/warning/success", "title": "...", "text": "..."}` |
| **video** | `{"type": "video", "platform": "youtube", "videoId": "...", "caption": "..."}` |
| **table** | `{"type": "table", "headers": [...], "rows": [[...]]}` |
| **accordion** | `{"type": "accordion", "items": [{"title": "...", "content": "..."}]}` |
| **button** | `{"type": "button", "text": "...", "url": "...", "style": "primary/secondary"}` |
| **divider** | `{"type": "divider", "style": "default/gradient/dashed/thick"}` |
| **gallery** | `{"type": "gallery", "images": [{"url": "...", "alt": "...", "caption": "..."}]}` |
| **toc** | `{"type": "toc"}` |
| **columns** | `{"type": "columns", "columns": [{"content": [...]}]}` |
| **embed** | `{"type": "embed", "html": "<div>...</div>"}` |

## Callout Types

- 🔵 **info** - General information
- 💡 **tip** - Helpful advice
- ⚠️ **warning** - Important caution
- ✅ **success** - Positive outcome
- ❌ **error** - Error or problem
- 📝 **note** - Additional note

## Code Languages

javascript, python, java, html, css, json, bash, typescript, php, ruby, go, rust, sql, markdown

## Button Styles

- **primary** - Purple gradient button
- **secondary** - Outline button

## Divider Styles

- **default** - Simple line
- **gradient** - Gradient line
- **dashed** - Dashed line
- **thick** - Thick accent line

## Tips

1. Use `id` on headings for TOC linking
2. Add `className` for custom styling
3. Place `toc` near the top
4. Use callouts to highlight key points
5. Break up content with images/dividers
6. Add code titles for context
7. Use accordions for FAQs

## Example Structure

```json
{
  "content": {
    "sections": [
      {"type": "toc"},
      {"type": "paragraph", "text": "Intro..."},
      {"type": "callout", "calloutType": "tip", "text": "..."},
      {"type": "heading", "level": 2, "text": "Section", "id": "section"},
      {"type": "code", "language": "js", "code": "..."},
      {"type": "button", "text": "CTA", "url": "/link"}
    ]
  }
}
```

## Generate & Test

```bash
# Generate blogs
node scripts/generate-blogs.js

# Start server
npm start

# View at
http://localhost:3000/content/blog/generated/[slug]/
```
