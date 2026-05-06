---
title: "Practice: Typography and Google Fonts"
description: "55 practice problems for Typography and Google Fonts in HTML and CSS"
slug: typography-and-fonts-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/typography-and-fonts/practice/
category: "HTML and CSS"
---
# Practice: Typography and Google Fonts

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What does this declare?

```
font-family: 'Poppins', Arial, sans-serif;
```

*Hint:* Commas mean fallback fonts.

**Answer:** Try Poppins first. If not available, use Arial. If Arial is also missing, use the default sans-serif font.

Font-family uses a fallback chain. The browser tries each font left to right and uses the first one it finds.

### Q2. [Easy] Why must `'Times New Roman'` be in quotes?

*Hint:* The name has spaces.

**Answer:** Because it contains spaces. Font names with spaces must be quoted so the parser treats them as a single name.

Without quotes, the CSS parser sees 'Times', 'New', and 'Roman' as three different fonts.

### Q3. [Easy] What is the default font-weight for `normal`?

*Hint:* Weights run 100 to 900 in steps of 100.

**Answer:** 400

font-weight: normal is equivalent to 400. bold is 700. Extra-bold is 800. Thin is 100.

### Q4. [Easy] What is the unit-free line-height of 1.6 relative to?

*Hint:* Unitless line-heights multiply the element's font-size.

**Answer:** The element's own font-size. A 20px font with line-height 1.6 gets a 32px line-height.

Unitless line-heights are multipliers. Each element calculates its own line-height based on its own font-size. This behaves correctly when children have different sizes.

### Q5. [Easy] What does `text-transform: uppercase` do?

*Hint:* Does it change the HTML?

**Answer:** Displays the text in all capital letters, without changing the actual HTML.

text-transform is visual only. The underlying text in the HTML stays unchanged. Useful for labels, buttons, and headings.

### Q6. [Easy] What does `font-size: 2rem` produce if the root font-size is 16px?

*Hint:* rem = root em.

**Answer:** 32px.

rem is relative to the root (html) element's font-size. 2rem means 2 times the root size. 2 x 16 = 32.

### Q7. [Easy] What does `text-decoration: none` do?

*Hint:* Think about what links look like by default.

**Answer:** Removes the underline from links (or the line from  tags).

By default links have text-decoration: underline. Setting it to none removes the underline. A common reset for navigation menus.

### Q8. [Easy] What three values does text-shadow need at minimum?

*Hint:* Think position and color.

**Answer:** x-offset, y-offset, and color. Blur is optional.

Minimal text-shadow: `text-shadow: 2px 2px red;`. Full form with blur: `text-shadow: 2px 2px 8px red;`.

### Q9. [Easy] What does `letter-spacing: 0.1em` do?

*Hint:* Think about space between characters.

**Answer:** Adds space equal to 10% of the font size between every character.

Positive letter-spacing loosens character spacing. 0.1em at 20px font-size = 2px between letters. Commonly used on uppercase labels.

### Q10. [Easy] Which is a monospace font?

*Hint:* Think code editors.

**Answer:** Fira Code, Courier New, and Monaco are monospace fonts. Every character has the same width.

Monospace fonts are used for code because each character takes equal horizontal space, aligning columns cleanly.

### Q11. [Medium] What is the result?

```
font-size: clamp(16px, 3vw, 24px);
```

*Hint:* clamp takes min, preferred, max.

**Answer:** The font-size is at least 16px, grows to 3% of the viewport width at medium sizes, and never exceeds 24px.

clamp(min, preferred, max) keeps the value between min and max, using the preferred value (which can be a dynamic unit like vw) in between.

### Q12. [Medium] What is the font-family of `system-ui`?

*Hint:* It is a generic family like sans-serif.

**Answer:** Whatever font the user's operating system uses for its UI (San Francisco on macOS, Segoe UI on Windows, Roboto on Android).

system-ui tells the browser to use the native system font. Instant load, matches platform look. Supported in modern browsers.

### Q13. [Medium] Why is unitless line-height better than px for a parent element?

*Hint:* Think about a h1 with bigger font inside.

**Answer:** Unitless line-heights multiply the child's own font-size, so headings and paragraphs each get proportional spacing. Fixed px line-heights inherit as-is and may be too tight for large children.

If body has line-height: 24px and h1 is 40px, the heading's lines will overlap. Unitless (1.5) gives each element its own proportional line-height.

### Q14. [Medium] What does this shorthand set?

```
font: italic bold 18px/1.5 'Poppins', sans-serif;
```

*Hint:* Order: style weight size/line-height family.

**Answer:** font-style: italic, font-weight: bold, font-size: 18px, line-height: 1.5, font-family: 'Poppins', sans-serif.

The font shorthand combines up to 5 properties. Size/line-height is separated by a slash. Family must come last.

### Q15. [Medium] What does `&display=swap` do in a Google Fonts URL?

*Hint:* Think about what happens while the font is loading.

**Answer:** Tells the browser to show the fallback font immediately, then swap to the web font once it finishes downloading.

Without swap, browsers may hide text until the font loads (Flash of Invisible Text). swap prevents this by showing fallback text right away.

### Q16. [Medium] What is the difference between em and rem?

*Hint:* What are they each relative to?

**Answer:** em is relative to the parent element's font-size (compounds when nested). rem is relative to the root (html) font-size (no compounding).

Nested em values multiply: if parent is 2em and child is 1.5em, the child is 3x root. rem always references the root, avoiding surprises.

### Q17. [Medium] What happens if the browser cannot load a Google Font?

*Hint:* Fallbacks.

**Answer:** The browser uses the next font in the font-family fallback list (Arial, Georgia, sans-serif, etc.).

The fallback chain is the safety net. If the Google Font fails to load, the page still renders with a backup font rather than showing unstyled text.

### Q18. [Medium] What does `text-decoration: underline wavy #a855f7` do?

*Hint:* Modern shorthand allows style and color.

**Answer:** Applies a wavy purple underline under the text.

Modern text-decoration accepts three parts: line (underline/overline/line-through), style (solid/wavy/dotted/dashed), and color.

### Q19. [Medium] Which text-align value justifies text to both left and right margins?

*Hint:* Newspaper layout.

**Answer:** `justify`

text-align: justify adjusts word spacing so text lines up on both sides. Common in print, less common online due to uneven gaps.

### Q20. [Medium] What does `font-weight: 800` mean?

*Hint:* Weight scale is 100-900.

**Answer:** Extra bold (heavier than regular bold which is 700).

800 is extra bold. Only works if that weight was loaded for the font. Otherwise, the browser uses the nearest available weight.

### Q21. [Hard] What is the computed line-height in px?

```
body { font-size: 18px; line-height: 1.6; }
```

*Hint:* Multiply.

**Answer:** 28.8px (18 x 1.6).

Unitless line-height multiplies the font-size. 18 * 1.6 = 28.8px. Browsers may round to 29px when rendering.

### Q22. [Hard] Why does this cause a problem?

```
@font-face { font-family: 'MyFont'; src: url('font.woff2') format('woff2'); }
/* No font-display */
```

*Hint:* Think about what the user sees while the font is downloading.

**Answer:** The browser hides text until the font loads (FOIT - Flash of Invisible Text), causing blank content for up to 3 seconds.

Always include `font-display: swap` in @font-face to show fallback text immediately while the custom font loads.

### Q23. [Hard] What is this element's final font-size?

```
html { font-size: 18px; }
body { font-size: 1rem; }
h1 { font-size: 2em; }
```

*Hint:* body is 1rem (relative to root), h1 is 2em (relative to body).

**Answer:** 36px. (root=18, body=18, h1=2*18=36).

rem is always relative to root. em is relative to the parent. body computes to 18px. h1 is 2em relative to body = 36px.

### Q24. [Hard] When should you pick a system font stack over Google Fonts?

*Hint:* Think load time and design intent.

**Answer:** Use system fonts when performance is critical (no download), when you want a native platform look, or when the design doesn't need a custom personality. Use Google Fonts when you want a specific brand look or a font that is consistent across all devices.

System fonts load instantly with zero bandwidth. Google Fonts give you brand consistency. Many sites use system fonts for body text and Google Fonts for headings to balance speed and style.

### Q25. [Hard] Why use `max-width: 60ch` or `max-width: 65ch` for paragraph text?

*Hint:* ch = width of the '0' character. Think readability studies.

**Answer:** Typography research shows paragraphs are easiest to read when lines contain 45-75 characters. max-width: 65ch limits line length to roughly 65 characters, improving reading comfort and reducing eye fatigue.

The ch unit is based on character width. Using it for max-width keeps paragraphs in the ideal readability range regardless of font-size.

## Mixed Questions

### Q1. [Easy] What is font-weight: bold equal to numerically?

*Hint:* Weights go 100-900.

**Answer:** 700

The keyword bold corresponds to the numeric weight 700. normal = 400.

### Q2. [Easy] Which unit is relative to the viewport width?

*Hint:* vw.

**Answer:** `vw`

1vw = 1% of the viewport width. 100vw is the full viewport width. Useful for fluid typography and full-width layouts.

### Q3. [Easy] What does `text-transform: capitalize` do?

*Hint:* Think first letter.

**Answer:** Capitalizes the first letter of each word.

capitalize only affects the first letter of each word. Use uppercase for all caps, lowercase for all lowercase.

### Q4. [Easy] What does `text-decoration: line-through` look like?

*Hint:* Think crossed-out text.

**Answer:** Text with a horizontal line through the middle, like crossed-out text.

Used for strikethrough effects, old prices, or deleted content. The  HTML element has this style by default.

### Q5. [Easy] Which generic font family is always monospace?

*Hint:* Fixed character width.

**Answer:** `monospace`

The generic families are serif, sans-serif, monospace, cursive, and fantasy. monospace guarantees a fixed-width font.

### Q6. [Easy] What is the advantage of `rem` over `px`?

*Hint:* Think accessibility - users changing the default font-size.

**Answer:** rem scales with the root font-size. If a user sets a larger default font-size in their browser for accessibility, rem values scale up too. px stays fixed.

Using rem respects user font-size preferences. Many accessibility guidelines recommend rem over px for font-size.

### Q7. [Medium] What does this shorthand NOT include?

```
font: 18px/1.5 Arial;
```

*Hint:* Minimal form with just size, line-height, and family.

**Answer:** font-style and font-weight are not specified. They will use their default values (normal, normal).

The font shorthand resets any omitted properties to their defaults. If you only want to change size and family, use longhand to preserve other settings.

### Q8. [Medium] How do you make link text NOT underlined?

*Hint:* text-decoration.

**Answer:** `a { text-decoration: none; }`

Browsers apply text-decoration: underline to links by default. Set it to none to remove the underline. Add your own hover style if needed.

### Q9. [Medium] How do you make fallback text visible while a web font loads?

*Hint:* font-display.

**Answer:** Use `font-display: swap` in @font-face or `&display=swap` in the Google Fonts URL.

swap tells browsers to show fallback text immediately and swap to the web font once it downloads. Without it, users may see blank content.

### Q10. [Medium] What does this do?

```
text-shadow: 2px 2px 0 black, 4px 4px 0 #a855f7;
```

*Hint:* Two shadows stacked.

**Answer:** Creates a 3D/layered effect with a black shadow 2px down-right and a purple shadow 4px further down-right.

Multiple text-shadows are painted in order (first on top). Offsets create depth. This pattern is popular for retro/poster-style text.

### Q11. [Medium] What does `font-style: italic` do?

*Hint:* Slanted text.

**Answer:** Displays text in the italic variant of the font (slanted characters).

Requires the font to have an italic style. If not, the browser may synthesize a slanted version which usually looks worse.

### Q12. [Medium] Why load only the font weights you need from Google Fonts?

*Hint:* Each weight is a separate file.

**Answer:** Each weight is a separate font file that the browser must download. Loading 9 weights instead of 3 can add hundreds of kilobytes and slow page load noticeably.

Most designs need 2-4 weights (for example 400, 600, 800). Load only those. Faster pages and better Lighthouse scores.

### Q13. [Medium] What is a good line-height for body paragraphs?

*Hint:* Typographers recommend 1.5-1.8.

**Answer:** Unitless 1.5 to 1.8. Lower (1.2) for headings, higher for body paragraphs.

Airy line-heights improve readability for long text. Headings look better with tight line-heights because they are short and large.

### Q14. [Medium] Which is a web-safe font available on almost every device?

*Hint:* Classic names.

**Answer:** Arial, Georgia, Times New Roman, Courier New, Verdana, Tahoma, Trebuchet MS, and Impact are widely available.

Web-safe fonts are preinstalled on nearly every operating system. You can use them without loading anything, making them ideal for fallbacks.

### Q15. [Medium] Why would you combine a serif font for body and a sans-serif for headings?

*Hint:* Readability and contrast.

**Answer:** Serif fonts have decorative strokes that improve readability in long paragraphs. Sans-serif fonts look clean and modern for headings. Combining them creates visual contrast and hierarchy.

Example pairing: Merriweather (serif body) + Inter (sans-serif headings). The serif makes reading paragraphs comfortable; the sans-serif gives headings a crisp modern look.

### Q16. [Hard] What is the result?

```
p::first-line { font-weight: bold; }
```

*Hint:* ::first-line is a pseudo-element.

**Answer:** Makes only the first line of every paragraph bold.

::first-line selects the rendered first line of a block element. The bold effect stops when the text wraps to the next line. Common in editorial designs.

### Q17. [Hard] What is the effect?

```
h1 { font: 600 clamp(32px, 5vw, 72px)/1.1 'Inter', sans-serif; letter-spacing: -0.02em; }
```

*Hint:* Shorthand plus clamp plus tighter letter-spacing.

**Answer:** A semibold h1 in Inter with fluid font-size (32-72px), tight line-height (1.1), and slightly tightened letter-spacing for a polished modern heading.

This is a production-ready heading recipe. clamp for fluidity, tight line-height for headings, slightly negative letter-spacing for big text.

### Q18. [Hard] What is the difference between FOIT and FOUT?

*Hint:* Both are font loading issues. One flashes invisible, one flashes unstyled.

**Answer:** FOIT (Flash of Invisible Text) is when the browser hides text completely while the font loads. FOUT (Flash of Unstyled Text) is when the browser shows fallback text first then swaps to the web font. font-display: swap causes FOUT, which is usually preferred.

FOUT is a brief visual shift but the user can read immediately. FOIT hides content completely. Most designers prefer FOUT because content is accessible sooner.

### Q19. [Hard] How does ch unit work?

*Hint:* It is based on a character.

**Answer:** The ch unit equals the width of the '0' (zero) character in the current font. `max-width: 60ch` limits a container to about 60 characters wide, regardless of font-size.

ch is perfect for typography because it scales naturally with the font. Researchers recommend 45-75 characters per line for best readability, so 60-65ch is a safe default.

### Q20. [Hard] Why add `` before the Google Fonts link?

*Hint:* Performance.

**Answer:** preconnect tells the browser to start establishing a connection to fonts.googleapis.com and fonts.gstatic.com early, before it actually needs the font. This shaves milliseconds off font loading time.

Google Fonts recommends adding two preconnect links before the stylesheet link. It is a small but measurable performance improvement.

## Multiple Choice Questions

### Q1. [Easy] Which CSS property sets the font?

**Answer:** C

**C is correct.** font-family sets the typeface. It accepts a list of fallback fonts ending with a generic family.

### Q2. [Easy] Which unit is relative to the ROOT font-size?

**Answer:** B

**B is correct.** rem = 'root em'. Relative to the html element's font-size. em is relative to the parent.

### Q3. [Easy] What is font-weight: bold numerically?

**Answer:** D

**D is correct.** The keyword bold corresponds to numeric weight 700. normal is 400.

### Q4. [Easy] Which line-height is correct?

**Answer:** B

**B is correct.** Unitless line-heights scale correctly with the element's own font-size. Preferred for almost all cases.

### Q5. [Easy] Which removes the underline from a link?

**Answer:** B

**B is correct.** text-decoration: none removes underlines, overlines, and line-throughs.

### Q6. [Easy] How do you display text in all uppercase without changing the HTML?

**Answer:** B

**B is correct.** text-transform: uppercase renders the text in caps visually without modifying the source.

### Q7. [Easy] Which generic font family is for code?

**Answer:** C

**C is correct.** monospace guarantees every character has the same width, which is ideal for code.

### Q8. [Easy] How do you center text horizontally?

**Answer:** B

**B is correct.** text-align: center centers inline content within its block container.

### Q9. [Easy] Which is a web-safe font?

**Answer:** C

**C is correct.** Arial is preinstalled on virtually every device. The others are web fonts that require loading.

### Q10. [Easy] What does `&display=swap` do?

**Answer:** B

**B is correct.** swap keeps text visible during font loading by showing fallback first, then swapping to the web font.

### Q11. [Medium] What does clamp(16px, 2vw, 24px) return?

**Answer:** C

**C is correct.** clamp(min, preferred, max) returns the preferred value (2vw), but clamped to never go below 16px or above 24px.

### Q12. [Medium] Which font property quoting is correct?

**Answer:** B

**B is correct.** Names with spaces must be quoted. Multiple fonts are separated by commas, ending with a generic family.

### Q13. [Medium] What is the font shorthand order?

**Answer:** B

**B is correct.** The order is: font-style font-variant font-weight font-size/line-height font-family. Family must be last.

### Q14. [Medium] Which is better for accessibility: px or rem for font-size?

**Answer:** B

**B is correct.** rem scales with the root font-size, which users can increase for accessibility. px stays fixed regardless.

### Q15. [Medium] Which text-shadow creates a soft glow?

**Answer:** B

**B is correct.** Zero offsets with a large blur produce a soft glow around the text.

### Q16. [Medium] What is a reasonable max-width for comfortable reading?

**Answer:** B

**B is correct.** 45-75 characters per line is the sweet spot. 65ch or around 680px work well for body text.

### Q17. [Medium] Why add preconnect links before Google Fonts?

**Answer:** B

**B is correct.** preconnect warms up the DNS and TLS handshake before the browser needs the font file, reducing load time.

### Q18. [Medium] Which declares a custom font from your own file?

**Answer:** B

**B is correct.** @font-face declares a custom font with its file location, format, weight, style, and display strategy.

### Q19. [Medium] What does `letter-spacing: -0.02em` do to big headings?

**Answer:** B

**B is correct.** Big headings look better with slightly tightened letter-spacing. Positive spacing is for small uppercase labels.

### Q20. [Medium] Which is NOT a valid font-weight value?

**Answer:** C

**C is correct.** 'heavy' is not a CSS keyword. Valid keywords: normal, bold, bolder, lighter. Numeric: 100-900.

### Q21. [Hard] What is the FOIT problem with web fonts?

**Answer:** B

**B is correct.** Flash of Invisible Text: the browser hides text until the web font loads. font-display: swap fixes this by showing fallback text immediately.

### Q22. [Hard] Why use unitless line-height on the body element?

**Answer:** B

**B is correct.** Unitless line-heights scale per-element. A fixed px line-height on body would be inherited as-is and cause overlapping lines on big headings.

### Q23. [Hard] Which combination creates clean modern blog typography?

**Answer:** B

**B is correct.** A serif for body improves reading comfort. Sans-serif for headings adds contrast. Airy line-height and a sensible max-width round out the recipe.

### Q24. [Hard] Which is the best way to include Google Fonts for performance?

**Answer:** B

**B is correct.** Minimum weights, swap for visible fallback, preconnect to warm up the connection. @import blocks rendering and is slower than a link tag.

### Q25. [Hard] What is the difference between em and rem when font-size changes?

**Answer:** B

**B is correct.** em is relative to the parent and compounds: 1.5em inside 1.5em = 2.25x root. rem always references the html element.

## Coding Challenges

### Challenge 1. Import and Apply Poppins

**Difficulty:** Easy

Create a page with a heading 'Hello from Priya' and a short paragraph. Import Poppins from Google Fonts with weights 400 and 800. Apply Poppins to the whole body. Heading should be weight 800, paragraph weight 400.

**Constraints:**

- Use preconnect, display=swap, and load only the needed weights.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A page with a bold Poppins heading and a regular Poppins paragraph.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Poppins', sans-serif; padding: 40px; color: #1a1a2e; line-height: 1.6; }
    h1 { font-weight: 800; font-size: 48px; margin: 0 0 12px; }
    p { font-weight: 400; font-size: 18px; max-width: 600px; }
  </style>
</head>
<body>
  <h1>Hello from Priya</h1>
  <p>This page uses the Poppins font loaded from Google Fonts. The heading is weight 800, the paragraph is weight 400.</p>
</body>
</html>
```

### Challenge 2. Fluid Heading with clamp

**Difficulty:** Easy

Create a page with a heading that uses clamp() to scale smoothly from 32px (minimum) to 64px (maximum) based on viewport width. Resize the window to test.

**Constraints:**

- Use clamp(32px, 5vw, 64px). No media queries.

**Sample input:**

```
Resize the browser
```

**Sample output:**

```
The heading grows and shrinks smoothly as the window changes width.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; background: #0f172a; color: white; }
    h1 { font-size: clamp(32px, 5vw, 64px); line-height: 1.1; margin: 0; }
    p { font-size: 16px; color: #94a3b8; max-width: 500px; }
  </style>
</head>
<body>
  <h1>Resize me, Aarav!</h1>
  <p>This heading scales smoothly between 32px and 64px as the window width changes. No media queries.</p>
</body>
</html>
```

### Challenge 3. Blog Post Layout

**Difficulty:** Medium

Build a blog post with Merriweather serif for body and Inter sans-serif for headings. Include a title, meta line (author + date in uppercase tracked label style), 2 paragraphs, and an italic blockquote with colored left border.

**Constraints:**

- Use two Google Fonts. max-width 680px, line-height 1.75, letter-spacing on meta line.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A clean blog post with serif body, sans-serif title, uppercase meta, and a styled blockquote.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Merriweather', Georgia, serif; max-width: 680px; margin: 0 auto; padding: 60px 20px; line-height: 1.75; color: #1a202c; }
    h1 { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 44px; line-height: 1.2; letter-spacing: -0.02em; margin: 0 0 8px; }
    .meta { font-family: 'Inter', sans-serif; font-size: 12px; color: #64748b; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 30px; }
    p { font-size: 18px; margin-bottom: 20px; }
    blockquote { border-left: 4px solid #a855f7; padding: 8px 20px; margin: 30px 0; font-style: italic; color: #4b5563; }
  </style>
</head>
<body>
  <h1>Why I Love Coding</h1>
  <p class="meta">By Kavya Reddy - April 11, 2026</p>
  <p>Coding gives me a superpower. I can take an idea from my head and turn it into something I can click, play with, and share with my friends. That feeling never gets old.</p>
  <blockquote>The only way to learn a new programming language is by writing programs in it.</blockquote>
  <p>Last week I built a calculator app, and today I am learning typography. Every day is a new adventure.</p>
</body>
</html>
```

### Challenge 4. Neon Text Effect

**Difficulty:** Medium

Create a dark background page with the text 'RIYA CODES' as a big heading that glows neon purple using multiple text-shadows. Add a subtitle below it with a softer cyan glow.

**Constraints:**

- Use multiple stacked text-shadows. Dark body background. Center everything.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
Big neon purple 'RIYA CODES' glowing on a dark background with a cyan subtitle.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0f; color: white; text-align: center; padding: 120px 20px; min-height: 100vh; margin: 0; box-sizing: border-box; }
    h1 {
      font-size: 80px;
      letter-spacing: 4px;
      margin: 0;
      text-shadow:
        0 0 4px #fff,
        0 0 12px #a855f7,
        0 0 25px #a855f7,
        0 0 50px #a855f7,
        0 0 90px #a855f7;
    }
    p {
      font-size: 22px;
      color: #06b6d4;
      margin-top: 20px;
      letter-spacing: 2px;
      text-shadow: 0 0 10px #06b6d4, 0 0 25px #06b6d4;
    }
  </style>
</head>
<body>
  <h1>RIYA CODES</h1>
  <p>Until The Sun Rises</p>
</body>
</html>
```

### Challenge 5. Product Card Typography

**Difficulty:** Hard

Build a product card with an uppercase amber 'LIMITED OFFER' eyebrow label (tracked letter-spacing), a bold heading, a price with a line-through original price next to it in gray, and a description paragraph. Use proper type hierarchy.

**Constraints:**

- Use the font shorthand. text-transform and letter-spacing on the eyebrow. text-decoration line-through on original price.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A card showing all elements with clear typographic hierarchy.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; padding: 40px; background: #f9fafb; color: #1a1a2e; }
    .card { max-width: 360px; background: white; padding: 28px; border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    .eyebrow { font: 700 11px/1 system-ui, sans-serif; text-transform: uppercase; letter-spacing: 0.15em; color: #f59e0b; margin: 0 0 10px; }
    .title { font: 800 24px/1.2 system-ui, sans-serif; margin: 0 0 12px; }
    .price { font: 800 28px/1 system-ui, sans-serif; color: #a855f7; margin: 0 0 12px; }
    .old { font-size: 18px; color: #9ca3af; text-decoration: line-through; font-weight: normal; margin-left: 8px; }
    .desc { font-size: 15px; line-height: 1.6; color: #4b5563; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <p class="eyebrow">LIMITED OFFER</p>
    <h2 class="title">Frontend Masterclass</h2>
    <p class="price">Rs 2,999<span class="old">Rs 4,999</span></p>
    <p class="desc">A 12-week course for teens by Ishaan. Learn HTML, CSS, and JavaScript by building real projects.</p>
  </div>
</body>
</html>
```

### Challenge 6. Typography System Page

**Difficulty:** Hard

Build a 'Typography System' demo page that shows H1, H2, H3, paragraph, blockquote, ordered list, and code elements with consistent professional styling. Use one sans-serif Google Font.

**Constraints:**

- All sizes use rem. Unitless line-heights. max-width 700px. Clean spacing between elements.

**Sample input:**

```
Open the HTML file
```

**Sample output:**

```
A design-system style documentation page showing every text element with clear hierarchy.
```

**Solution:**

```html-and-css
<!DOCTYPE html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root { font-size: 16px; }
    body { font-family: 'Inter', sans-serif; max-width: 700px; margin: 0 auto; padding: 60px 20px; line-height: 1.6; color: #1a202c; background: white; }
    h1 { font-weight: 800; font-size: 3rem; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 0.5rem; }
    h2 { font-weight: 700; font-size: 2rem; line-height: 1.2; margin: 2.5rem 0 0.75rem; color: #a855f7; }
    h3 { font-weight: 600; font-size: 1.25rem; line-height: 1.3; margin: 1.75rem 0 0.5rem; }
    p { font-size: 1.0625rem; margin: 0 0 1rem; }
    blockquote { border-left: 4px solid #06b6d4; padding: 4px 16px; margin: 1.5rem 0; font-style: italic; color: #4b5563; }
    ol { padding-left: 1.5rem; }
    ol li { margin-bottom: 0.5rem; }
    code { font-family: 'Fira Code', 'Courier New', monospace; background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-size: 0.95em; color: #a855f7; }
    .intro { font-size: 1.25rem; color: #64748b; }
  </style>
</head>
<body>
  <h1>Typography System</h1>
  <p class="intro">A consistent type scale for everything Meera builds.</p>
  <h2>Heading 2: Section Title</h2>
  <p>This is a paragraph of body text. Good typography feels effortless to read. The line-height is 1.6 and the max-width keeps lines at a comfortable length.</p>
  <h3>Heading 3: Subsection</h3>
  <p>Use <code>font-family</code> with fallbacks and <code>line-height</code> as an unitless value for best results.</p>
  <blockquote>"Typography is two-dimensional architecture." - Hermann Zapf</blockquote>
  <h3>Ordered list</h3>
  <ol>
    <li>Pick one sans-serif font for the UI.</li>
    <li>Use 2-3 weights (400, 600, 800).</li>
    <li>Set unitless line-height on the body.</li>
    <li>Limit line length to 65ch for readability.</li>
  </ol>
</body>
</html>
```

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/typography-and-fonts/*
