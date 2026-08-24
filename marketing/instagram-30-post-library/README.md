# Modern Age Coders: 60-Post Instagram Library

This library contains 60 publish-ready Instagram posts with 211 total slides. Every asset is manually composed at 1080 x 1350 pixels using a fixed grid, real typography, the official logo and a controlled brand palette.

## Content mix

- Posts 01-30: 58 slides mixing single posts and short carousels
- Posts 31-60: 153 slides focused on long, useful carousels
- Second collection: 2 four-slide, 24 five-slide, 3 six-slide and 1 seven-slide carousel
- 13 reusable layout structures
- Python, web development, AI/ML, data, security, projects, career skills and student mindset
- Seven value-first promotional carousels with free-demo CTAs

## Improvements applied

- No generated characters, artificial textures or decorative clutter
- One clear lesson or interaction per post
- Large phone-readable typography
- Strong first-slide hooks
- Answers and explanations separated from challenge slides
- Save, comment, share and swipe prompts used selectively
- Consistent branding without repeating one identical template
- Real learning value instead of motivational filler

## Recommended publishing rhythm

Use a repeating four-post cycle:

1. Interactive challenge
2. Concept explainer
3. Project or career post
4. Poll, mindset or saveable checklist

Publish three or four times per week. Reveal challenge answers through the next carousel slide, a pinned comment or Stories. Do not publish similar categories on consecutive days.

## Files

- `content.json`: structured content for posts 01-30
- `content-31-60.json`: structured content for posts 31-60
- `content-all-60.json`: combined source for the complete library
- `render-library.ps1`: editable deterministic design renderer
- `CAPTIONS-ALL-60.md`: combined captions, hashtags and engagement prompts
- `CAPTIONS-AND-PUBLISHING.md`: captions for posts 01-30
- `CAPTIONS-31-60.md`: captions for posts 31-60
- `CONTACT-SHEET-ALL-60-COVERS.png`: visual overview of all first slides
- `01-*` through `60-*`: individual post folders with slides in upload order

## Rebuilding the library

Run `render-library.ps1` with the desired content, caption and contact-sheet filenames. The renderer regenerates every slide while preserving the design system.
