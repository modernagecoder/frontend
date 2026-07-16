# Modern Age Coders — Social Creative Kit (Master Prompt)

Paste this whole block, then add one line at the end, for example:
"Make a portrait post promoting the DSA course, batch starts 12 July."
"MAC kit: square meme about debugging at 2am."
"MAC kit: 3-slide carousel of Python tips, plus a caption."

The agent should produce: (1) a high-quality graphic rendered to a real PNG at the right Instagram size, shown for approval, and (2) a natural human caption. Same look every time.

---

## WHO WE ARE
Modern Age Coders. Live, online coding and mathematics classes for ages 6 to 65, taught in depth from first principles. Real teachers, real projects, no fluff.
- Website: learn.modernagecoders.com
- WhatsApp / Call: +91 9123366161
- Email: contact@modernagecoders.com
- Instagram: @modern_age_coders   YouTube: @modernagecoders
- Audience shifts by post: parents of young kids, teens, college students, working professionals. Match the tone to who the post is for.

## THE LOOK (this is the whole point, never break it)
A warm, hand-made "engineering notebook / editorial" style. It should feel premium, human and crafted, like a thoughtful indie studio, not a template.
- NEVER use the generic dark, neon-gradient, glowing "AI startup / SaaS" look. That is the thing we are avoiding.
- Background: warm cream paper #FBF7EC with faint horizontal ruled lines (a 1px line every ~40px).
- Surfaces/cards: #FFFDF6 with thick ink borders (#201E24, 2.5px to 4px) and chunky hard offset shadows (for example box-shadow: 6px 7px 0). Rounded corners 14px to 36px.
- Palette: ink #201E24 (text and borders), pine green #15795A and deep pine #0E5841 (primary, "correct/solved"), coral #D55B3D (highlight + handwriting), amber #B7770F (warm highlight), yellow #FFD66B (pop accent on dark areas only).
- Type: Bricolage Grotesque for headlines (weight 800, big and tight). Caveat for handwritten accents and eyebrows (coral, rotated about -1.5deg). Inter for body. JetBrains Mono for labels, numbers, code, Big-O, and keyword "chips".
- Logo: the real Modern Age Coders logo only (blue rounded square with white braces). Never a placeholder like </> or a generic mark. Inline the SVG from public/images/logo.svg, sized about 52px, rounded corners, thin ink border.
- Icons: clean line SVG icons (stroke width ~2.2, currentColor). Calendar, clock, price tag, graduation cap, bolt, etc.
- Signature touches: a coral highlighter swipe under one key word in the headline, small hand-drawn doodles (a little tree/graph, arrows, underlines), mono keyword chips, and a bold ink CTA bar with a colored hard shadow.

## HARD RULES (do not violate)
- No emojis. Anywhere. Use SVG icons instead.
- No em dashes in any text on the graphic or in the caption. Use a period, a comma, or just the word "and"/"to".
- No AI gradients, glow, glassmorphism, or purple "AI" sheen.
- No fake numbers or made-up testimonials. Only real facts.
- Do not overcrowd. Lots of breathing room. One clear focal point and one clear CTA.

## FORMATS AND SIZES (pixels)
- Feed square: 1080 x 1080
- Feed portrait (best reach): 1080 x 1350
- Story / Reel cover: 1080 x 1920
- Carousel: several 1080 x 1350 frames that share the style
- Memes: usually square 1080 x 1080
Default to portrait 1080x1350 unless told otherwise.

## HOW TO BUILD IT (production method)
1. Write ONE self-contained HTML file with inline CSS using the tokens above. Inline the logo SVG and any icon SVGs. Load fonts via Google Fonts @import.
2. Render with Playwright: set the viewport to the exact target pixels, use page.setContent(html), wait for document.fonts.ready, then screenshot as PNG. (If a tool blocks reading local files, pass the HTML inline to setContent.)
3. Save into the marketing/ folder with a clear name, for example dsa-instagram-portrait-<date>.png.
4. Always show the screenshot to me before calling it done, so I can approve or ask for tweaks.

## LAYOUT RECIPE (promo poster)
Top bar: logo + brand name on the left, a small status pill on the right (for example LIVE . ONLINE).
Then: Caveat eyebrow (the hook or "new batch") > giant Bricolage headline with ONE coral-highlighted word > a short bold one or two line claim that names the real benefit > a 2x2 grid of fact cards, each with a line-SVG icon and a mono label plus a bold value (date, time, fee, who it is for) > a small urgency row (for example a LIMITED SEATS pill) plus the prerequisite or one extra detail > a row of mono keyword chips > a bold ink CTA bar at the bottom with the offer, the URL, the WhatsApp/DM number, and "link in bio".
For non-promo posts (meme, tip, belief), keep the same frame, type and colors, but the center becomes the creative content instead of fact cards.

## CAPTION RULES (sound like a real human, not AI)
- Write like a real teacher or founder typed it. Conversational, specific, a bit of personality and warmth.
- No em dashes. No emojis (or at most one, rarely). 
- Ban these AI tells: "unlock", "elevate", "dive in", "in today's fast-paced world", "look no further", "game-changer", "supercharge", "embark", "unleash", "world of", "the perfect", and neat three-part lists. Vary sentence length. It is fine to start with "And" or a short fragment.
- Open with a real hook, an honest observation, or a small story, not a slogan.
- Give the facts plainly (what, when, fee, who it is for), then ONE clear call to action (DM a word, WhatsApp the number, book a free demo, link in bio).
- Hashtags: 8 to 12, relevant, lowercase or normal case, always include #ModernAgeCoders.

## POST-TYPE PLAYBOOK
- Course promo: hook on the pain or the outcome, then key facts (start date, time, fee, who it is for, prerequisite), an urgency line, and the CTA.
- Brand awareness: lead with a belief we actually hold ("we teach in depth, not for marks", "logic over rote", "every student ships a real project"), back it with one honest proof point, soft CTA.
- Meme: keep the notebook frame, make the center the joke. Relatable student/coder humour (debugging, semicolons, exams, "it works on my machine"). Caption short and genuinely funny, still human.
- Tip or carousel: one idea per slide, a tiny mono snippet or sketch, last slide is the CTA.
- Testimonial / wall of love: pull a real quote, attribute to a student's first name, point to /love. Never invent quotes.
- Milestone / announcement: warm and specific, say the real number, thank the students, invite the next batch.

## REMEMBER
Premium, warm, hand-made, human. Real logo. SVG icons, no emojis. No em dashes. No AI look. Show me the render, give me a natural caption, save to marketing/.
