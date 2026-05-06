---
title: "CSS Typography and Google Fonts - font-family, clamp, line-height, Google Fonts | Modern Age Coders"
description: "Master CSS typography. Learn font-family with fallbacks, Google Fonts integration, font-size with clamp for fluid text, font-weight, line-height, letter-spacing, text-shadow, @font-face, and more. 55+ practice questions with complete runnable HTML examples."
slug: typography-and-fonts
canonical: https://learn.modernagecoders.com/resources/html-and-css/typography-and-fonts
category: "HTML and CSS"
keywords: ["css typography", "css font-family", "google fonts tutorial", "css clamp font-size", "system font stack", "line-height css", "letter-spacing css", "text-shadow css", "@font-face css", "web fonts"]
---
# Typography and Google Fonts

**Difficulty:** Intermediate  
**Reading time:** 38 min  
**Chapter:** 12  
**Practice questions:** 55

## What Is Typography in CSS?

Typography is the art of arranging text to make it beautiful and readable. Good typography is the difference between a page that looks amateur and one that looks professional. The same content with different fonts, sizes, line heights, and spacing can feel like two completely different websites.

In this chapter you will learn every CSS property that affects text: the font itself, its size, weight, style, spacing, alignment, decoration, and transformation. You will also learn how to use Google Fonts (free, beautiful web fonts) in your own projects.

```
body {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.01em;
  color: #1a1a2e;
}
```

## Why Does Typography Matter?

### 1. 90% of the Web Is Text

Most of what people read on the web is text. Blog posts, product descriptions, articles, forms. If your typography is bad, your users struggle to read and bounce. If your typography is great, they stay longer, understand better, and trust your site more.

### 2. Fonts Set the Entire Mood

Switch a site from **Times New Roman** to **Inter** and it feels modern. Switch to **Playfair Display** and it feels editorial. Switch to **Fira Code** and it feels technical. You cannot design a look without thinking about the font.

### 3. Google Fonts Is Free and Amazing

Google Fonts gives you thousands of professional-quality fonts for free. A single `` tag in your HTML and you can use fonts like Poppins, Inter, Montserrat, Playfair Display, and many more. This chapter will show you exactly how.

### 4. Fluid Typography Is the Modern Way

Responsive design used to require media queries to change font sizes. Now you can write `font-size: clamp(16px, 2vw, 24px)` and the text automatically scales with the viewport. One line replaces multiple media queries.

## Detailed Explanation

### 1. font-family and Fallbacks

font-family specifies which font to use. You list multiple fonts as fallbacks in case the first one is not available. Always end with a generic family (serif, sans-serif, monospace).

```
body {
  font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
}
code {
  font-family: 'Fira Code', 'Courier New', monospace;
}
h1 {
  font-family: 'Playfair Display', Georgia, serif;
}
```

Rule: fonts with a space in the name must be quoted (`'Fira Code'`). Single-word fonts do not need quotes (`Arial`).

### 2. System Font Stack

The system font stack uses whatever font the user's operating system uses for its interface. It loads instantly (no download) and looks native on every platform.

```
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

This gives you San Francisco on macOS/iOS, Segoe UI on Windows, Roboto on Android, and fallbacks for everything else.

### 3. Google Fonts

Visit fonts.google.com, pick a font, copy the `` tag, paste it in your HTML head, then use the font-family name.

```
<!-- In HTML head -->

<!-- In CSS -->
body { font-family: 'Poppins', sans-serif; }
h1 { font-weight: 800; }
```

The `wght@400;600;800` part tells Google which weights to download. Only request the ones you use -- fewer weights means faster page load.

### 4. font-size Units

- **px**: absolute pixels. `font-size: 16px`. Fixed and predictable.
- **em**: relative to parent font-size. `1.5em` = 1.5x parent. Compounds if nested.
- **rem**: relative to root (html) font-size. `1.5rem` = 1.5x root. Does not compound. Preferred for most sizing.
- **%**: relative to parent font-size (like em).
- **vw**: viewport width. `5vw` = 5% of browser width. Scales with screen.
- **clamp(min, preferred, max)**: fluid typography that scales between a minimum and maximum.

```
h1 {
  font-size: clamp(24px, 4vw, 48px);
  /* At least 24px, grows with viewport width, caps at 48px */
}
```

### 5. font-weight

Weight values: `100` (thin) to `900` (black). Or keywords: `normal` (400), `bold` (700), `lighter`, `bolder`.

```
h1 { font-weight: 800; }    /* Extra bold */
p  { font-weight: 400; }    /* Normal */
em { font-weight: 500; }    /* Medium */
```

Only weights you loaded in Google Fonts are available. If you load 400 and 700, asking for 600 will fall back to the closest one.

### 6. font-style

Values: `normal`, `italic`, `oblique`.

```
em { font-style: italic; }
.quote { font-style: italic; color: #6b7280; }
```

### 7. line-height

Vertical space between lines. Use **unitless** values like `1.5` or `1.6` instead of px. Unitless values multiply by the element's font-size, and children inherit the multiplier (not the computed value) -- which behaves correctly.

```
body { line-height: 1.6; }          /* GOOD */
body { line-height: 24px; }         /* Bad -- does not scale with font-size */

h1 { line-height: 1.2; }            /* Tight for headings */
p  { line-height: 1.6; }            /* Airy for paragraphs */
```

### 8. letter-spacing and word-spacing

Adjust the space between letters and words. Negative values tighten, positive values loosen.

```
h1 { letter-spacing: -0.02em; } /* Slightly tighter */
.small-caps {
  text-transform: uppercase;
  letter-spacing: 0.1em;          /* Loose uppercase looks elegant */
  font-size: 12px;
}

p { word-spacing: 2px; }
```

### 9. text-align

Values: `left` (default), `right`, `center`, `justify`.

```
h1 { text-align: center; }
.quote { text-align: right; }
```

### 10. text-decoration

Controls underlines, strikethroughs, and overlines. Common on links.

```
a { text-decoration: none; }                          /* remove underline */
a:hover { text-decoration: underline; }
del { text-decoration: line-through; }
.fancy { text-decoration: underline wavy #a855f7; }   /* modern shorthand */
```

### 11. text-transform

Changes letter case visually (HTML stays the same).

```
.upper { text-transform: uppercase; }
.lower { text-transform: lowercase; }
.cap   { text-transform: capitalize; }
```

### 12. text-shadow

Adds a shadow behind text. Syntax: `x-offset y-offset blur color`.

```
h1 { text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); }

/* Multiple shadows create glows and 3D effects */
h1 {
  text-shadow:
    0 0 10px #a855f7,
    0 0 20px #a855f7,
    0 0 40px #a855f7;
}
```

### 13. @font-face for Custom Fonts

If you have a custom font file, use @font-face to declare it, then use it like any other font.

```
@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/mycustom.woff2') format('woff2'),
       url('fonts/mycustom.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show fallback while loading */
}

body { font-family: 'MyCustomFont', sans-serif; }
```

### 14. font-display: swap

`font-display: swap` tells the browser: show the fallback font immediately, then swap to the web font when it loads. This prevents invisible text during font loading (known as FOIT). Always include it.

### 15. Web-Safe Fonts

Fonts installed on almost every device. Safe to use without loading anything: Arial, Georgia, Times New Roman, Courier New, Verdana, Tahoma, Trebuchet MS, Impact. Use them as fallbacks or when you need zero load time.

## Code Examples

### Google Fonts with Poppins

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', -apple-system, sans-serif;
      padding: 40px;
      background: #f9fafb;
      color: #1a1a2e;
      line-height: 1.6;
    }
    h1 { font-weight: 800; font-size: 48px; margin: 0 0 8px; }
    h2 { font-weight: 600; font-size: 24px; color: #a855f7; margin: 24px 0 8px; }
    .light { font-weight: 300; color: #6b7280; }
    p { font-weight: 400; font-size: 16px; max-width: 640px; }
  </style>
</head>
<body>
  <h1>Modern Typography</h1>
  <p class="light">A guide by Aarav Patel</p>
  <h2>Why fonts matter</h2>
  <p>Choosing the right font gives your content a voice. Poppins is a modern geometric sans-serif that feels clean and professional. It works beautifully for headings, buttons, and body text.</p>
  <h2>Weights available</h2>
  <p>This page loads four weights: 300 light, 400 normal, 600 semibold, and 800 extra bold. Each weight expresses a different mood.</p>
</body>
</html>
```

Google Fonts are loaded with a `` tag in the HTML head. The `wght@300;400;600;800` parameter requests four specific weights. `display=swap` ensures text is visible during load. In CSS, just reference `'Poppins'` as a normal font-family with a fallback stack.

**Output:**

```
A page with a bold Poppins heading, a light gray subtitle, purple section headers, and well-spaced body text.
```

### Fluid Typography with clamp()

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 40px 5%;
      margin: 0;
      background: #1a1a2e;
      color: white;
      line-height: 1.5;
    }
    h1 {
      font-size: clamp(32px, 6vw, 72px);
      line-height: 1.1;
      margin: 0 0 16px;
      background: linear-gradient(90deg, #a855f7, #06b6d4);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    h2 {
      font-size: clamp(20px, 3vw, 32px);
      margin: 32px 0 8px;
    }
    p {
      font-size: clamp(16px, 1.5vw, 18px);
      max-width: 60ch;
      color: #cbd5e1;
    }
    .tiny { font-size: clamp(12px, 1vw, 14px); color: #94a3b8; }
  </style>
</head>
<body>
  <h1>Resize your browser</h1>
  <p class="tiny">Fluid typography example by Priya Sharma</p>
  <p>All headings and paragraphs on this page use <strong>clamp()</strong> to scale fluidly. There is no media query. As you make the window wider, the text grows smoothly between its minimum and maximum.</p>
  <h2>How it works</h2>
  <p>clamp(min, preferred, max) takes three values: the smallest size allowed, the desired size (usually a viewport unit), and the largest size. The browser picks whichever is valid within the range.</p>
</body>
</html>
```

`clamp(32px, 6vw, 72px)` means: never smaller than 32px, never larger than 72px, and at sizes in between, use 6% of the viewport width. Resize the browser to see the text scale smoothly. No media queries needed.

**Output:**

```
A dark page where headings and paragraphs smoothly scale as you resize the browser window.
```

### Beautiful Blog Post Typography

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Merriweather', Georgia, serif;
      max-width: 680px;
      margin: 0 auto;
      padding: 60px 20px;
      line-height: 1.75;
      color: #1a202c;
      background: #fefefe;
    }
    h1 {
      font-family: 'Inter', sans-serif;
      font-size: 42px;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin: 0 0 8px;
    }
    .meta {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #64748b;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    p { font-size: 18px; margin-bottom: 20px; }
    p::first-line { font-weight: 700; }
    blockquote {
      border-left: 4px solid #a855f7;
      padding: 8px 20px;
      margin: 30px 0;
      font-style: italic;
      color: #4b5563;
    }
    a { color: #a855f7; text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 3px; }
  </style>
</head>
<body>
  <h1>Learning to Code at 13</h1>
  <p class="meta">By Kavya Reddy - April 11, 2026</p>
  <p>When I started coding, I had no idea what a variable was. My teacher Mr Verma told me just to type along and it would start making sense. He was right.</p>
  <blockquote>The best way to learn to code is to build things you care about.</blockquote>
  <p>Two years later, I have built a snake game, a to-do app, and my own website. If you are just starting, pick a font like <a href="#">Merriweather</a> for your blog and your posts will look instantly more professional.</p>
  <p>The tricks are simple: use a serif font, keep paragraph width around 60-70 characters, set line-height to 1.6 or higher, and pick a strong sans-serif for headings.</p>
</body>
</html>
```

This uses two Google Fonts: Merriweather (serif) for body text and Inter (sans-serif) for headings. max-width: 680px limits line length for comfortable reading. line-height: 1.75 gives airy spacing. A blockquote with a colored left border is a classic blog pattern.

**Output:**

```
A polished blog post layout with a bold Inter heading, italic blockquote, and easy-to-read serif body text.
```

### Text Shadow Glow Effect

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0a0a0f;
      padding: 100px 40px;
      text-align: center;
      min-height: 100vh;
      box-sizing: border-box;
    }
    .neon {
      color: #fff;
      font-size: 72px;
      font-weight: bold;
      letter-spacing: 2px;
      text-shadow:
        0 0 4px #fff,
        0 0 10px #a855f7,
        0 0 20px #a855f7,
        0 0 40px #a855f7,
        0 0 80px #a855f7;
    }
    .subtitle {
      color: #06b6d4;
      font-size: 24px;
      margin-top: 24px;
      text-shadow:
        0 0 8px #06b6d4,
        0 0 20px #06b6d4;
    }
    .soft {
      color: white;
      font-size: 18px;
      margin-top: 40px;
      text-shadow: 0 2px 20px rgba(168, 85, 247, 0.5);
    }
  </style>
</head>
<body>
  <h1 class="neon">RIYA</h1>
  <p class="subtitle">Codes After Midnight</p>
  <p class="soft">A simple soft glow for comparison.</p>
</body>
</html>
```

Multiple text-shadows create a neon glow effect. Each shadow adds a larger, softer glow on top of the previous one. The innermost shadow is white to brighten the letters, and outer shadows are purple for the halo.

**Output:**

```
A dark page with a glowing neon purple 'RIYA' title and a cyan subtitle, all with dramatic shadow effects.
```

### Monospace Code Block with Fira Code

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; background: #f3f4f6; color: #1a1a2e; }
    h1 { margin-bottom: 24px; }
    pre {
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.6;
      background: #1a1a2e;
      color: #f1f5f9;
      padding: 20px 24px;
      border-radius: 10px;
      overflow-x: auto;
      letter-spacing: 0;
    }
    .keyword { color: #c084fc; font-weight: 600; }
    .string  { color: #a7f3d0; }
    .comment { color: #6b7280; font-style: italic; }
    code { font-family: 'Fira Code', monospace; background: #e5e7eb; padding: 2px 6px; border-radius: 4px; font-size: 14px; }
  </style>
</head>
<body>
  <h1>A snippet from Ishaan's first program</h1>
  <p>Declare a variable with <code>let</code> and print it:</p>
  <pre><span class="comment">// First program</span>
<span class="keyword">let</span> name = <span class="string">'Ishaan'</span>;
<span class="keyword">console</span>.log(<span class="string">'Hello, '</span> + name);</pre>
</body>
</html>
```

Fira Code is a monospace font designed for code with programming ligatures. It is loaded from Google Fonts. The `pre` block preserves whitespace and uses the monospace font. Inline `code` tags use the same font with a light background.

**Output:**

```
A page with a dark code block showing a JavaScript snippet in Fira Code font with purple keywords, green strings, and gray comments.
```

### Font Shorthand and Text Transforms

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; background: white; color: #1a1a2e; }
    .card {
      padding: 24px;
      border-radius: 12px;
      background: #f9fafb;
      margin-bottom: 16px;
      max-width: 500px;
    }
    .title { font: italic bold 20px/1.3 Georgia, serif; margin: 0 0 8px; }
    .eyebrow { font: 600 12px/1 Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.15em; color: #a855f7; margin: 0 0 4px; }
    .price { font: bold 28px/1 system-ui, sans-serif; color: #06b6d4; margin: 0; }
    .strike { text-decoration: line-through; color: #9ca3af; font-weight: normal; font-size: 18px; margin-left: 8px; }
    .quote { font-style: italic; color: #4b5563; border-left: 3px solid #a855f7; padding-left: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <p class="eyebrow">LIMITED OFFER</p>
    <h2 class="title">Frontend Masterclass</h2>
    <p class="price">Rs 2,999 <span class="strike">Rs 4,999</span></p>
  </div>
  <div class="card">
    <p class="quote">"This course changed the way I think about design." - Meera Nair</p>
  </div>
</body>
</html>
```

The `font` shorthand combines style, weight, size, line-height, and family in one line: `font: italic bold 20px/1.3 Georgia, serif;`. The eyebrow label uses text-transform and letter-spacing to create a polished uppercase look. text-decoration: line-through creates the crossed-out original price.

**Output:**

```
Two cards: a product card with an uppercase eyebrow, italic title, and strike-through original price; and a testimonial card with an italic quote and colored left border.
```

## Common Mistakes

### Forgetting Quotes Around Font Names with Spaces

**Wrong:**

```
body { font-family: Times New Roman, serif; }
```

The browser tries to parse 'Times', 'New', and 'Roman' as three separate font names, failing.

**Correct:**

```
body { font-family: 'Times New Roman', serif; }
```

Any font name with spaces must be wrapped in quotes. Single-word fonts like `Arial` or `Georgia` do not need quotes, but it is fine (and consistent) to always quote them.

### Using px for line-height

**Wrong:**

```
body { font-size: 16px; line-height: 24px; }
h1 { font-size: 32px; /* line-height is STILL 24px -- too tight! */ }
```

Children inherit the fixed 24px line-height. A 32px heading with 24px line-height overlaps badly.

**Correct:**

```
body { font-size: 16px; line-height: 1.5; }
h1 { font-size: 32px; /* line-height is now 32 * 1.5 = 48px */ }
```

Unitless line-height multiplies by the element's own font-size. Fixed px line-height breaks when children have different font sizes. Always use unitless line-height like 1.5 or 1.6.

### Loading Too Many Google Font Weights

**Wrong:**

```
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

This loads 9 font weights. Each weight is a separate file download, slowing page load significantly.

**Correct:**

```
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
```

Only load the weights you actually use. Most designs need 2-3 weights. Loading all 9 can add 500KB+ to your page for no visual benefit.

### Forgetting font-display: swap

**Wrong:**

```
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700" rel="stylesheet">
```

Without display=swap, text is invisible until the font downloads (FOIT - Flash of Invisible Text). Users see blank content for up to 3 seconds.

**Correct:**

```
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

Always include `&display=swap`. This tells the browser to show the fallback font immediately, then swap to the web font when it loads. Much better user experience.

## Summary

- font-family lists fonts as fallbacks, ending with a generic family (serif, sans-serif, monospace). Quote any font name containing spaces: 'Times New Roman'.
- System font stack (-apple-system, Segoe UI, Roboto) uses the OS default font. Instant load, native look on every platform. Great default choice.
- Google Fonts is free and easy: add a link tag in HTML head, use the font-family name in CSS. Always include display=swap to prevent invisible text during load.
- font-size units: px (absolute), em (relative to parent), rem (relative to root -- preferred), vw (viewport width), clamp() (fluid). Use rem for consistent sizing.
- clamp(min, preferred, max) creates fluid typography: clamp(24px, 4vw, 48px) scales between 24 and 48 as the viewport changes. Replaces media queries.
- font-weight goes from 100 (thin) to 900 (black). Only weights you loaded are available. Keywords: normal = 400, bold = 700.
- line-height should be unitless (1.5, 1.6). Unitless values scale correctly when children have different font sizes. Never use px for line-height on parent elements.
- letter-spacing tightens or loosens character spacing. Negative values (-0.02em) for big headings. Positive values (0.1em) for uppercase labels.
- text-transform changes case visually: uppercase, lowercase, capitalize. The HTML source stays the same; only display changes.
- text-shadow syntax: x-offset y-offset blur color. Stack multiple shadows for neon glows, 3D effects, and drop shadows. @font-face loads custom fonts; always include font-display: swap.

## Related Topics

- undefined
- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/typography-and-fonts/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/typography-and-fonts/practice/*
