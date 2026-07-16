# Master Prompt — Modern Age Coders SEO Blog + Matching Rendered Images

Paste this whole file into a fresh Claude Code (or similar) session, fill in the `<<...>>` fields at the top, and run it. It produces ONE complete blog post in your exact JSON schema **plus** its own set of custom images, rendered the same way the social posters are made (self-contained HTML → Playwright screenshot → crisp PNG). Every image is built from the actual section it illustrates. No stock photos, no random clip art, no AI-photo generation.

---

## 0. FILL THIS IN

- **BLOG TOPIC / PRIMARY KEYWORD:** `<<e.g. "python for beginners" / "scratch vs python for kids">>`
- **BLOG TYPE:** `<<one of: technical-tutorial | concept-explainer | course-promo | brand-awareness | listicle | comparison | opinion/thought-leadership | parent-guide>>`
- **PRIMARY AUDIENCE:** `<<kids | teens | parents | college students | working professionals>>`
- **TARGET LENGTH:** `<<default 1500-2200 words for guides, 900-1400 for narrow how-tos>>`
- **MUST-INCLUDE FACTS / INTERNAL LINKS (optional):** `<<any real numbers, course slugs, or pages to link>>`

---

## 1. WHAT TO PRODUCE (two deliverables)

1. **The post:** a JSON file at `content/blog/data/<slug>.json` following the EXACT schema in Part 3, SEO-optimised and written in the brand voice. This is what `npm run generate-blogs` turns into the live page.
2. **The images:** 1 hero cover + 3 to 6 inline figures. Each is authored as a self-contained HTML file, rendered to a PNG with the pipeline in Part 5, saved to `public/images/blog/<slug>/`, and wired into the JSON. Each figure must visualise the specific idea in the section it sits next to.

Work in this order: research the topic → outline sections → write the JSON copy → plan which sections get a figure → design + render each figure → wire the PNG URLs into the JSON → self-check.

---

## 2. SEO + WRITING RULES

- **Search intent first.** Decide what the searcher wants (learn / compare / decide / start). Map ONE primary keyword + 3-6 secondary/long-tail phrases and use them naturally in the title, H1/hero, first 100 words, a couple of H2s, and the meta description.
- **Title** ≤ 60 chars. **Meta description** ≤ 155 chars, benefit-led, contains the primary keyword.
- **Slug:** kebab-case, descriptive, keyword-rich. Must be unique (check existing files in `content/blog/data/`).
- **Structure:** start with a `toc` section, then a strong 2-3 paragraph intro (hook + what they'll learn), then scannable H2/H3 sections, short paragraphs, bullet/numbered lists, at least one `callout`, code blocks for anything technical, an `accordion` FAQ of 5-10 real questions (target People-Also-Ask), and a closing section with a clear CTA `button` to `/courses` or `/contact`.
- **E-E-A-T:** be specific and accurate. Real facts, real numbers, honest trade-offs. No invented statistics. When you cite a stat, make it defensible.
- **Internal links:** link to real pages using `<a href='/...'>` inside paragraph text — e.g. `/courses`, a specific `/courses/<course-slug>`, or a relevant landing page. Set `relatedPosts` to 3 real slugs that exist in `content/blog/data/`.
- **Voice:** warm, plain, human. Write like a good teacher talking to one person. Vary sentence length. **Banned words/phrases:** unlock, elevate, dive in, game-changer, delve, tapestry, "in today's fast-paced world", and neat rule-of-three flourishes. **No emojis. No em dashes or en dashes** (use full stops or commas). Contractions are fine.
- **Age range rule:** whenever you mention the age span we teach, write it as **"6 to 67"**, never 65. (Intentional brand wink.)
- Add the `meta`, `hero`, and `readTime` accurately (readTime = ceil(words / 220) min).

---

## 3. BLOG JSON SCHEMA (match exactly)

```json
{
  "meta": {
    "slug": "kebab-case-slug",
    "title": "Under 60 chars, keyword-rich",
    "description": "Under 155 chars, benefit + primary keyword.",
    "keywords": ["primary keyword", "secondary", "long tail", "..."],
    "author": { "name": "Modern Age Coders Team", "bio": "Expert educators making coding and maths clear for ages 6 to 67.", "avatar": "/images/logo.svg" },
    "date": "YYYY-MM-DD",
    "dateModified": "YYYY-MM-DD",
    "category": "e.g. Python | Artificial Intelligence | Coding for Kids",
    "tags": ["Tag1", "Tag2", "Tag3"],
    "readTime": "N min read",
    "featured": false
  },
  "hero": {
    "title": "H1 for the page",
    "subtitle": "One or two sentences that set up the value.",
    "featuredImage": { "url": "/images/blog/<slug>/00-hero.png", "alt": "Descriptive, keyword-aware alt text" }
  },
  "content": {
    "sections": [
      { "type": "toc" },
      { "type": "paragraph", "text": "Intro with <strong>HTML</strong> and <a href='/courses'>internal links</a> allowed." },
      { "type": "heading", "level": 2, "text": "Section title", "id": "anchor-id" },
      { "type": "list", "style": "unordered", "items": ["<strong>Label:</strong> detail", "..."] },
      { "type": "image", "url": "/images/blog/<slug>/01-<name>.png", "alt": "What the figure shows", "caption": "Short caption" },
      { "type": "callout", "calloutType": "info", "title": "Callout title", "text": "info | tip | success | warning callout." },
      { "type": "code", "language": "python", "code": "print(\"hello world\")" },
      { "type": "divider", "style": "gradient" },
      { "type": "quote", "text": "A real, earned line.", "author": "Optional" },
      { "type": "button", "text": "Book a Free Demo", "url": "/contact", "style": "primary" },
      { "type": "accordion", "items": [ { "title": "FAQ question?", "content": "Plain, specific answer." } ] }
    ]
  },
  "relatedPosts": ["existing-slug-1", "existing-slug-2", "existing-slug-3"]
}
```

Section types available: `toc`, `paragraph`, `heading` (level 2-6, optional `id`), `list` (`unordered`/`ordered`), `image`, `callout` (`info`/`tip`/`success`/`warning`), `code`, `quote`, `divider` (`default`/`gradient`), `button`, `accordion`. Put an `image` section only where a visual genuinely helps understanding.

---

## 4. IMAGE PLAN — match every figure to the content

**How many:** 1 hero (`00-hero.png`) + 3 to 6 inline figures, one per major idea that benefits from a visual. Do not add a figure to a section that is already clear in words.

**Pick a FORMAT per figure from this library (never a generic decorative graphic):**

| Format | Use it when the section is about... |
|---|---|
| Cover / title card | the hero: post title + one-line promise + subtle motif |
| Concept diagram | relationships, hierarchy, "how X fits inside Y" (e.g. AI ⊃ ML ⊃ DL) |
| Labelled illustration | one thing with parts named (a program, a file, a pipeline) via inline-SVG |
| Step / flow strip | a process or roadmap (numbered stages with arrows) |
| Checklist card | "what you'll build", prerequisites, a do-list |
| Code window | a real snippet, terminal output, before/after code (JetBrains Mono) |
| Comparison two-column | X vs Y (Scratch vs Python, TensorFlow vs PyTorch) |
| Stat / number card | one memorable figure (salary range, timeline, percentage) |
| Quote / principle card | a key takeaway or rule worth isolating |
| Mini-table figure | a small matrix that reads better as an image than HTML |

**Each figure's content comes from the section it illustrates** — pull the actual list items, steps, code, or comparison from the copy. If the section lists 4 things you'll build, the checklist card shows those 4 things. Never invent unrelated visuals.

**Branded vs neutral — decide by BLOG TYPE:**

- **Full brand** (warm "notebook" look, cream paper, ink borders, coral/pine/amber, Caveat handwritten accents, MAC logo in the corner): use for `brand-awareness`, `course-promo`, `opinion/thought-leadership`, `parent-guide`, comparisons that position us. These should feel like us.
- **Neutral-editorial** (same type system for consistency, but clean white/near-white background, one restrained accent, small logo or none, no handwriting): use for `technical-tutorial`, `concept-explainer`, `listicle`, `comparison` of neutral tools. A heavy sales look on a pure how-to erodes trust. Keep it cohesive (same fonts) so it still reads as ours, just understated.
- Either way: **no emoji, no em dashes, no fake numbers, high contrast, legible on a phone.** Inline SVG only for icons/diagrams (plus the logo). No external images.

**Dimensions (render at 2x / device scale for retina):**
- Hero cover: **1200 x 630** (Open Graph friendly).
- Inline figures: **1200 x 675** (16:9). A square **1080 x 1080** is fine for a standalone quote/stat card.

---

## 5. IMAGE RENDER PIPELINE (identical logic to the social posters)

### 5a. Shared base stylesheet
Create `content/blog/image-src/base.css` once (reuse across posts). Brand tokens + a crop-proof shell so nothing ever clips:

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap');
:root{ --paper:#FBF7EC; --card:#FFFDF6; --ink:#201E24; --pine:#15795A; --coral:#D55B3D; --amber:#B7770F; --yellow:#FFD15A; --line:#E7DCC4;
  /* neutral variant */ --n-bg:#FFFFFF; --n-ink:#1B2430; --n-soft:#5B6472; --n-line:#E6E9EE; --n-accent:#15795A; }
*{margin:0;padding:0;box-sizing:border-box}
body{width:var(--w);height:var(--h);font-family:'Inter',sans-serif;color:var(--ink);display:flex;overflow:hidden}
/* BRAND theme */
body.brand{background:var(--paper);background-image:linear-gradient(rgba(231,220,196,.55) 1.5px,transparent 1.5px);background-size:100% 40px;padding:40px}
body.brand .frame{flex:1;border:6px solid var(--ink);border-radius:30px;background:var(--card);box-shadow:14px 16px 0 var(--ink);padding:44px 52px;display:flex;flex-direction:column}
/* NEUTRAL theme */
body.neutral{background:var(--n-bg);color:var(--n-ink);padding:0}
body.neutral .frame{flex:1;background:var(--n-bg);padding:64px 72px;display:flex;flex-direction:column;border-bottom:6px solid var(--n-accent)}
/* shared */
.brand-row{display:flex;align-items:center;gap:14px;margin-bottom:6px}
.logo{width:52px;height:52px;border-radius:13px;overflow:hidden;border:3px solid var(--ink);flex:none}.neutral .logo{border-color:var(--n-ink)}
.logo svg{width:100%;height:100%;display:block}
.brand-name{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:26px}
.eyebrow{font-family:'Caveat',cursive;font-weight:700;font-size:42px;color:var(--coral);line-height:1}
.neutral .eyebrow{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:22px;letter-spacing:2px;text-transform:uppercase;color:var(--n-accent)}
h1{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;line-height:.98;letter-spacing:-1.5px;font-size:88px}
.sub{font-size:34px;line-height:1.3;font-weight:500;color:#3b3833}.neutral .sub{color:var(--n-soft)}
.hl{background:linear-gradient(transparent 55%,#F3B7A6 55% 92%,transparent 92%);padding:0 4px}
.mono{font-family:'JetBrains Mono',monospace}
.main{flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:0;width:100%}
.fit{width:100%;display:flex;flex-direction:column;transform-origin:center center}
/* code window */
.win{background:#211F24;border-radius:16px;border:3px solid var(--ink);overflow:hidden}
.win .bar{background:#2f2c34;padding:12px 16px;display:flex;gap:8px}.win .dot{width:13px;height:13px;border-radius:50%}
.win .body{padding:24px 26px;font-family:'JetBrains Mono',monospace;font-size:27px;line-height:1.5;color:#e7e3ec}
.cmt{color:#7f7a87}.grn{color:#6fcf97}.red{color:#ff7a6b}.yel{color:#ffd15a}.cyn{color:#67d1e0}
```

### 5b. Per-figure HTML
For each figure write `content/blog/image-src/<slug>/NN.html`. Set the canvas size via inline vars, choose the theme class, inline the logo (brand theme), put content in `.main > .fit`:

```html
<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="../base.css">
<style>:root{--w:1200px;--h:675px}</style></head>
<body class="brand"><div class="frame">
  <div class="brand-row"><span class="logo"><!-- inline logo.svg here (brand theme only) --></span><span class="brand-name">Modern Age Coders</span></div>
  <div class="main"><div class="fit"> <!-- the figure: diagram / checklist / code window / comparison, built from this section's real content --> </div></div>
</div></body></html>
```
Logo SVG to inline (from `public/images/logo.svg`): a 512x512 blue `#007bff` rounded square with the white bracket-face "MAC" glyph. For the neutral theme, set `<body class="neutral">` and omit or shrink the logo.

### 5c. Render each HTML to PNG
1. Start a tiny static server on the image-src folder (run in background):
   `node -e "const http=require('http'),fs=require('fs'),p=require('path');const m={'.html':'text/html','.css':'text/css','.svg':'image/svg+xml','.png':'image/png'};http.createServer((q,s)=>{let f=p.join(process.cwd(),decodeURIComponent(q.url.split('?')[0]));fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end()}else{s.writeHead(200,{'Content-Type':m[p.extname(f).toLowerCase()]||'text/plain'});s.end(d)}})}).listen(8140)"`  (cwd = `content/blog/image-src`)
2. With Playwright MCP, for each figure at size W x H:
   - `browser_resize(W, H)`
   - `browser_navigate("http://localhost:8140/<slug>/NN.html")`
   - `browser_evaluate` the auto-fit so content never crops:
     ```js
     async () => { await document.fonts.ready; await new Promise(r=>setTimeout(r,150));
       const m=document.querySelector('.main'), f=document.querySelector('.fit');
       if(f&&m){ const s=Math.min(1, m.clientHeight/f.scrollHeight); if(s<1) f.style.transform='scale('+s+')'; }
       return true; }
     ```
   - `browser_take_screenshot({ type:'png', scale:'device', filename:'<abs path>/public/images/blog/<slug>/NN-<name>.png' })`
3. **Read each PNG back and look at it.** Fix anything cropped, misaligned, low-contrast, or off-brand, then re-render. Do not ship an unseen image.

Naming: `00-hero.png`, then `01-<name>.png`, `02-<name>.png`, ... Save PNGs under `public/images/blog/<slug>/` (this folder is served at the site root, so the URL is `/images/blog/<slug>/NN-name.png`).

---

## 6. WIRE-UP

- `hero.featuredImage.url` = `/images/blog/<slug>/00-hero.png`, with real `alt`.
- Each inline figure = an `image` section placed right after the paragraph/list it illustrates, with descriptive `alt` (helps SEO + accessibility) and a short `caption`.
- Keep the HTML sources in `content/blog/image-src/<slug>/` (handy for future edits); only the PNGs go in `public/images/blog/<slug>/`.
- After writing the JSON, note that the page builds via `npm run generate-blogs` (the `generated/` folder is rebuilt by Netlify, so you usually only commit the `data/*.json` and the `public/images/...` PNGs).

---

## 7. FINAL SELF-CHECK (do not finish until all true)

- [ ] Title ≤ 60 chars, description ≤ 155, unique kebab slug, primary keyword present in title + intro + one H2 + description.
- [ ] Intro hooks, `toc` present, clear H2/H3 hierarchy, at least one callout, a real FAQ accordion, a closing CTA button.
- [ ] Voice is human and specific. No emojis, no em/en dashes, no banned words, no fake stats. Age span written as "6 to 67".
- [ ] `relatedPosts` are 3 slugs that actually exist in `content/blog/data/`.
- [ ] 1 hero + 3-6 inline figures. Each figure is built from its section's real content, in the right theme (brand vs neutral by blog type), no stock/AI-photo, no emoji/em dash.
- [ ] Every figure was rendered, opened, and visually verified. Nothing cropped; text legible at phone size.
- [ ] Every image `url` points to a real file under `public/images/blog/<slug>/`; every image has alt text.
- [ ] JSON is valid and matches the schema.
```
```

*(Reuse note: the design system in Part 5 is the same one used for the social posters — warm notebook DNA, Bricolage / Caveat / Inter / JetBrains Mono, coral/pine/amber. The neutral theme is for technical posts where a branded look would feel salesy.)*
