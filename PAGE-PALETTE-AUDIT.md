# Page palette audit: pages that do not match the main website

Generated 2026-09-19 from a **rendered** audit of every routed page (1303 pages: 1040 in `src/pages`, 122 course pages, 132 blog pages, 8 resources pages, /love). Nothing was changed on the site by the audit itself.

**Update 2026-09-19:** `/best-coding-classes-online` and `/faq` have since been rebuilt on the brand theme (commit `17958bb70`, pushed). Rendered re-score: 2-3% dark, 72-75% warm paper, 98% amber accents, the same profile as `/about`. They are still listed below as they were measured before the rebuild.

## Baseline (what "matching" means)

The homepage and the editorial pages (`/about`, `/pricing`, `/contact`, `/book-demo`, every course page, the blog) use the "Ledger & Proof" theme from `src/css/editorial-theme.css`: warm paper `#FBF8F2` background with a faint grid, ink `#1C1814` text, amber `#B45309` / `#D97706` accents, Fraunces headings and Inter body, and a light menu bar with a black Login button.

## How it was measured

- Each page was loaded at 1280px in headless Chromium from the local dev server and scrolled top to bottom. The background colour was sampled on a 7-column grid every 110px down the whole page, ignoring the sticky menu bar, floating chat buttons and footer. The share of dark samples (luminance < 0.12) is the "dark" figure.
- Accent colours: every saturated text, background, gradient and border colour was bucketed by hue (amber = brand; violet / indigo / cyan / pink = the retired "AI look").
- Menu bar: the colour at the top of the viewport. The old bar is near-black `rgb(10,10,20)`, the brand bar is paper.
- Cross-checked against a source census of which stylesheets each page links. 235 pages still link the legacy `style.css` / `pages/global.css` / `best-coding-class.css` stack. Group A (below) is larger because some dark pages use their own stylesheets rather than the legacy stack: `maths-pages.css`, `country-pages.css`, the generated resources pages, `battle.css` and inline-only pages.

## Summary

| Group | Pages | Verdict |
|---|---:|---|
| A. Retired dark theme | 319 | near-black background, purple/indigo/cyan accents |
| B. Partly off | 22 | dark hero/sections on a light page, or the old dark menu bar |
| C. Light, but a different palette | 45 | own colours and fonts instead of warm paper + amber |
| D. Brand base, own accent colour | 346 | warm paper base and brand layout, but a per-cluster accent instead of amber (probably intentional, owner call) |
| OK. Matches the homepage | 571 | warm paper, ink, amber, Fraunces/Inter |

**Clearly off-brand (A + B + C): 386 pages.** Group D (346) is a judgement call; group OK (571) matches.

## A. Retired dark theme: near-black background, purple/indigo/cyan accents (319)

These read as a different website. Both pages the owner named (/best-coding-classes-online, /faq) are here. Most load the legacy `style.css` / `pages/global.css` stack; the dark menu bar with the purple or coral gradient LOGIN button comes with it. A handful are not marketing pages (`/battle`, `/battle-screen`, `/battle-admin`, `/check-status`, `/hackathon-login`), but `/login`, `/terms`, `/privacy`, `/refund` and `/cancellation` are user-facing and belong here.

### Course/language landing pages (Java, C++, Python, AI, state pages...) on `style.css` + `best-coding-class.css` + `pages/landing.css` (135)

Avg dark background 94% · warm paper 0% · amber share of accents 20% · old dark menu bar on 135/135

- `/ai-agents-course`: dark 94%, paper 0%, accents green 46%, blue 34%, dark menu bar
- `/ai-and-machine-learning-for-working-professionals`: dark 96%, paper 0%, accents amber 43%, indigo 30%, dark menu bar
- `/ai-course-for-beginners`: dark 96%, paper 0%, accents green 46%, cyan 28%, dark menu bar
- `/ai-ml-certification-course`: dark 96%, paper 0%, accents violet 58%, amber 31%, dark menu bar
- `/ai-ml-course-for-college-students`: dark 96%, paper 0%, accents blue 46%, green 35%, dark menu bar
- `/ai-ml-projects-for-students`: dark 96%, paper 0%, accents cyan 42%, pink 28%, dark menu bar
- `/artificial-intelligence-course`: dark 89%, paper 0%, accents violet 61%, blue 33%, dark menu bar
- `/best-ai-and-machine-learning-course-in-india`: dark 93%, paper 0%, accents cyan 59%, violet 35%, dark menu bar
- `/best-c-plus-plus-classes-in-india`: dark 91%, paper 0%, accents blue 37%, amber 22%, dark menu bar
- `/best-java-classes-in-india`: dark 93%, paper 0%, accents amber 45%, blue 37%, dark menu bar
- `/build-machine-learning-models-in-python`: dark 96%, paper 0%, accents green 45%, blue 35%, dark menu bar
- `/c-plus-plus-certification-course`: dark 89%, paper 0%, accents amber 90%, blue 6%, dark menu bar
- `/c-plus-plus-classes-for-college-students`: dark 93%, paper 0%, accents green 56%, blue 28%, dark menu bar
- `/c-plus-plus-classes-for-teens`: dark 91%, paper 0%, accents blue 48%, violet 46%, dark menu bar
- `/c-plus-plus-dsa-course`: dark 91%, paper 0%, accents indigo 57%, blue 25%, dark menu bar
- `/c-plus-plus-for-beginners`: dark 89%, paper 0%, accents cyan 50%, blue 28%, dark menu bar
- `/c-plus-plus-for-competitive-programming`: dark 94%, paper 0%, accents red 51%, blue 23%, dark menu bar
- `/c-plus-plus-for-placement-preparation`: dark 94%, paper 0%, accents green 57%, blue 26%, dark menu bar
- `/c-plus-plus-game-development`: dark 89%, paper 0%, accents violet 70%, blue 21%, dark menu bar
- `/c-plus-plus-oops-concepts-course`: dark 96%, paper 0%, accents cyan 45%, blue 33%, dark menu bar
- `/c-plus-plus-projects-for-students`: dark 89%, paper 0%, accents pink 48%, blue 30%, dark menu bar
- `/coding-and-maths-for-birla-high-school-kolkata`: dark 89%, paper 0%, accents blue 24%, green 19%, dark menu bar
- `/coding-and-maths-for-birla-high-school-mukundapur-kolkata`: dark 92%, paper 0%, accents cyan 30%, violet 19%, dark menu bar
- `/coding-and-maths-for-don-bosco-park-circus-kolkata`: dark 93%, paper 0%, accents indigo 21%, amber 20%, dark menu bar
- `/coding-and-maths-for-heritage-school-kolkata`: dark 90%, paper 0%, accents violet 35%, green 29%, dark menu bar
- `/coding-and-maths-for-mahadevi-birla-world-academy-kolkata`: dark 87%, paper 0%, accents cyan 30%, violet 29%, dark menu bar
- `/coding-and-maths-for-sushila-birla-girls-school-kolkata`: dark 87%, paper 0%, accents violet 27%, pink 27%, dark menu bar
- `/coding-classes-for-dps-bangalore`: dark 91%, paper 0%, accents violet 41%, cyan 18%, dark menu bar
- `/coding-classes-for-dps-dwarka-new-delhi`: dark 91%, paper 0%, accents violet 41%, cyan 18%, dark menu bar
- `/coding-classes-for-dps-greater-noida`: dark 87%, paper 0%, accents violet 40%, cyan 20%, dark menu bar
- `/coding-classes-for-dps-gurgaon`: dark 96%, paper 0%, accents violet 41%, cyan 18%, dark menu bar
- `/coding-classes-for-dps-hyderabad`: dark 91%, paper 0%, accents violet 41%, cyan 18%, dark menu bar
- `/coding-classes-for-dps-international-saket-delhi`: dark 91%, paper 0%, accents violet 41%, cyan 20%, dark menu bar
- `/coding-classes-for-dps-navi-mumbai`: dark 91%, paper 0%, accents violet 41%, cyan 18%, dark menu bar
- `/coding-classes-for-dps-new-town-kolkata`: dark 91%, paper 0%, accents violet 37%, cyan 24%, dark menu bar
- `/coding-classes-for-dps-noida`: dark 91%, paper 0%, accents violet 41%, cyan 19%, dark menu bar
- `/coding-classes-for-dps-rk-puram-new-delhi`: dark 91%, paper 0%, accents violet 40%, cyan 19%, dark menu bar
- `/coding-classes-for-dps-rohini-new-delhi`: dark 91%, paper 0%, accents violet 41%, cyan 18%, dark menu bar
- `/coding-classes-for-dps-ruby-park-kolkata`: dark 91%, paper 0%, accents violet 38%, cyan 23%, dark menu bar
- `/coding-classes-for-dps-vasant-kunj-new-delhi`: dark 91%, paper 0%, accents violet 40%, cyan 19%, dark menu bar
- `/coding-classes-for-la-martiniere-boys-kolkata`: dark 91%, paper 0%, accents violet 39%, cyan 18%, dark menu bar
- `/coding-classes-for-la-martiniere-girls-kolkata`: dark 83%, paper 0%, accents violet 28%, pink 28%, dark menu bar
- `/coding-classes-in-andhra-pradesh`: dark 93%, paper 0%, accents green 44%, cyan 38%, dark menu bar
- `/coding-classes-in-assam`: dark 94%, paper 0%, accents green 52%, cyan 31%, dark menu bar
- `/coding-classes-in-bihar`: dark 94%, paper 0%, accents amber 97%, violet 2%, dark menu bar
- `/coding-classes-in-chhattisgarh`: dark 94%, paper 0%, accents amber 47%, cyan 31%, dark menu bar
- `/coding-classes-in-goa`: dark 94%, paper 0%, accents red 45%, cyan 31%, dark menu bar
- `/coding-classes-in-gujarat`: dark 93%, paper 0%, accents violet 53%, amber 39%, dark menu bar
- `/coding-classes-in-haryana`: dark 94%, paper 0%, accents cyan 44%, green 39%, dark menu bar
- `/coding-classes-in-himachal-pradesh`: dark 94%, paper 0%, accents green 51%, cyan 32%, dark menu bar
- `/coding-classes-in-jharkhand`: dark 94%, paper 0%, accents amber 47%, green 39%, dark menu bar
- `/coding-classes-in-karnataka`: dark 94%, paper 0%, accents cyan 54%, green 30%, dark menu bar
- `/coding-classes-in-kerala`: dark 94%, paper 0%, accents green 44%, amber 40%, dark menu bar
- `/coding-classes-in-madhya-pradesh`: dark 94%, paper 0%, accents amber 90%, red 7%, dark menu bar
- `/coding-classes-in-maharashtra`: dark 94%, paper 0%, accents violet 58%, pink 32%, dark menu bar
- `/coding-classes-in-odisha`: dark 94%, paper 0%, accents violet 48%, cyan 42%, dark menu bar
- `/coding-classes-in-punjab`: dark 94%, paper 0%, accents amber 46%, red 32%, dark menu bar
- `/coding-classes-in-rajasthan`: dark 94%, paper 0%, accents amber 39%, pink 38%, dark menu bar
- `/coding-classes-in-tamil-nadu`: dark 94%, paper 0%, accents cyan 41%, amber 37%, dark menu bar
- `/coding-classes-in-telangana`: dark 94%, paper 0%, accents indigo 90%, red 6%, dark menu bar
- `/coding-classes-in-uttar-pradesh`: dark 94%, paper 0%, accents amber 91%, green 7%, dark menu bar
- `/coding-classes-in-uttarakhand`: dark 94%, paper 0%, accents green 51%, blue 32%, dark menu bar
- `/coding-classes-in-west-bengal`: dark 94%, paper 0%, accents blue 90%, red 6%, dark menu bar
- `/coding-classes-near-ajc-bose-road-kolkata`: dark 94%, paper 0%, accents indigo 94%, violet 3%, dark menu bar
- `/coding-classes-near-alipore-kolkata`: dark 96%, paper 0%, accents green 95%, violet 3%, dark menu bar
- `/coding-classes-near-andul-howrah`: dark 95%, paper 0%, accents green 95%, violet 3%, dark menu bar
- `/coding-classes-near-baguiati-kolkata`: dark 95%, paper 0%, accents blue 87%, cyan 7%, dark menu bar
- `/coding-classes-near-bally-howrah`: dark 95%, paper 0%, accents violet 96%, green 2%, dark menu bar
- `/coding-classes-near-ballygunge-kolkata`: dark 95%, paper 0%, accents amber 89%, cyan 5%, dark menu bar
- `/coding-classes-near-baranagar-kolkata`: dark 95%, paper 0%, accents amber 91%, violet 3%, dark menu bar
- `/coding-classes-near-bhowanipore-kolkata`: dark 98%, paper 0%, accents pink 93%, violet 3%, dark menu bar
- `/coding-classes-near-camac-street-kolkata`: dark 98%, paper 0%, accents amber 94%, violet 3%, dark menu bar
- `/coding-classes-near-deshapriya-park-kolkata`: dark 98%, paper 0%, accents indigo 94%, violet 3%, dark menu bar
- `/coding-classes-near-dhakuria-kolkata`: dark 98%, paper 0%, accents amber 88%, cyan 6%, dark menu bar
- `/coding-classes-near-domjur-howrah`: dark 95%, paper 0%, accents amber 93%, violet 4%, dark menu bar
- `/coding-classes-near-dum-dum-kolkata`: dark 95%, paper 0%, accents cyan 93%, violet 3%, dark menu bar
- `/coding-classes-near-elgin-road-kolkata`: dark 95%, paper 0%, accents cyan 93%, violet 3%, dark menu bar
- `/coding-classes-near-gariahat-kolkata`: dark 98%, paper 0%, accents amber 91%, cyan 4%, dark menu bar
- `/coding-classes-near-golpark-kolkata`: dark 98%, paper 0%, accents violet 96%, green 2%, dark menu bar
- `/coding-classes-near-hazra-kolkata`: dark 98%, paper 0%, accents green 94%, violet 3%, dark menu bar
- `/coding-classes-near-howrah-city-howrah`: dark 98%, paper 0%, accents red 93%, violet 3%, dark menu bar
- `/coding-classes-near-jadavpur-kolkata`: dark 95%, paper 0%, accents red 87%, cyan 7%, dark menu bar
- `/coding-classes-near-jodhpur-park-kolkata`: dark 95%, paper 0%, accents red 89%, violet 3%, dark menu bar
- `/coding-classes-near-kadamtala-howrah`: dark 95%, paper 0%, accents indigo 94%, violet 3%, dark menu bar
- `/coding-classes-near-kalighat-kolkata`: dark 95%, paper 0%, accents amber 93%, violet 4%, dark menu bar
- `/coding-classes-near-kasba-kolkata`: dark 98%, paper 0%, accents indigo 86%, cyan 8%, dark menu bar
- `/coding-classes-near-kestopur-kolkata`: dark 98%, paper 0%, accents pink 86%, cyan 8%, dark menu bar
- `/coding-classes-near-lake-gardens-kolkata`: dark 98%, paper 0%, accents cyan 92%, violet 3%, dark menu bar
- `/coding-classes-near-lake-town-kolkata`: dark 95%, paper 0%, accents amber 91%, violet 3%, dark menu bar
- `/coding-classes-near-lansdowne-kolkata`: dark 95%, paper 0%, accents amber 94%, violet 3%, dark menu bar
- `/coding-classes-near-liluah-howrah`: dark 98%, paper 0%, accents cyan 92%, violet 3%, dark menu bar
- `/coding-classes-near-loudon-street-kolkata`: dark 95%, paper 0%, accents pink 92%, violet 4%, dark menu bar
- `/coding-classes-near-mandirtala-howrah`: dark 95%, paper 0%, accents cyan 93%, violet 3%, dark menu bar
- `/coding-classes-near-nager-bazar-kolkata`: dark 98%, paper 0%, accents violet 93%, cyan 3%, dark menu bar
- `/coding-classes-near-new-alipore-kolkata`: dark 98%, paper 0%, accents violet 88%, cyan 8%, dark menu bar
- `/coding-classes-near-new-town-kolkata`: dark 95%, paper 0%, accents blue 79%, cyan 14%, dark menu bar
- `/coding-classes-near-park-circus-kolkata`: dark 95%, paper 0%, accents indigo 86%, cyan 8%, dark menu bar
- `/coding-classes-near-park-street-kolkata`: dark 96%, paper 0%, accents pink 92%, violet 4%, dark menu bar
- `/coding-classes-near-ramrajatala-howrah`: dark 95%, paper 0%, accents amber 93%, violet 4%, dark menu bar
- `/coding-classes-near-rashbehari-kolkata`: dark 95%, paper 0%, accents red 86%, cyan 7%, dark menu bar
- `/coding-classes-near-salt-lake-kolkata`: dark 95%, paper 0%, accents cyan 94%, violet 3%, dark menu bar
- `/coding-classes-near-santragachi-howrah`: dark 95%, paper 0%, accents pink 93%, violet 3%, dark menu bar
- `/coding-classes-near-shakespeare-sarani-kolkata`: dark 98%, paper 0%, accents green 94%, violet 3%, dark menu bar
- `/coding-classes-near-shibpur-howrah`: dark 95%, paper 0%, accents green 84%, cyan 11%, dark menu bar
- `/coding-classes-near-shyambazar-kolkata`: dark 95%, paper 0%, accents cyan 92%, violet 4%, dark menu bar
- `/coding-classes-near-southern-avenue-kolkata`: dark 95%, paper 0%, accents amber 94%, violet 3%, dark menu bar
- `/coding-classes-near-sreebhumi-kolkata`: dark 98%, paper 0%, accents green 92%, violet 3%, dark menu bar
- `/coding-classes-near-uluberia-howrah`: dark 95%, paper 0%, accents blue 94%, violet 3%, dark menu bar
- `/coding-classes-near-vip-road-kolkata`: dark 98%, paper 0%, accents indigo 91%, violet 3%, dark menu bar
- `/computer-vision-course`: dark 96%, paper 0%, accents violet 59%, cyan 27%, dark menu bar
- `/data-analytics-course`: dark 94%, paper 0%, accents indigo 42%, cyan 28%, dark menu bar
- `/data-science-course`: dark 96%, paper 0%, accents cyan 64%, amber 20%, dark menu bar
- `/deep-learning-course`: dark 94%, paper 0%, accents pink 47%, violet 44%, dark menu bar
- `/deep-learning-with-tensorflow-and-pytorch`: dark 96%, paper 0%, accents blue 44%, amber 33%, dark menu bar
- `/generative-ai-course`: dark 96%, paper 0%, accents violet 61%, cyan 32%, dark menu bar
- `/how-to-build-ai-models`: dark 94%, paper 0%, accents violet 45%, amber 44%, dark menu bar
- `/how-to-train-machine-learning-models`: dark 96%, paper 0%, accents red 36%, indigo 28%, dark menu bar
- `/java-certification-course`: dark 91%, paper 0%, accents amber 96%, violet 3%, dark menu bar
- `/java-classes-for-adults`: dark 94%, paper 0%, accents cyan 50%, amber 30%, dark menu bar
- `/java-classes-for-teens`: dark 93%, paper 0%, accents violet 65%, amber 30%, dark menu bar
- `/java-dsa-course`: dark 91%, paper 0%, accents amber 44%, indigo 34%, dark menu bar
- `/java-for-beginners`: dark 91%, paper 0%, accents green 48%, amber 35%, dark menu bar
- `/java-oops-concepts-course`: dark 91%, paper 0%, accents blue 50%, amber 32%, dark menu bar
- `/java-programming-for-icse-students`: dark 91%, paper 0%, accents green 48%, amber 37%, dark menu bar
- `/java-projects-for-students`: dark 91%, paper 0%, accents amber 52%, pink 28%, dark menu bar
- `/large-language-models-course`: dark 96%, paper 0%, accents violet 45%, amber 43%, dark menu bar
- `/machine-learning-course-for-beginners`: dark 96%, paper 0%, accents indigo 43%, green 42%, dark menu bar
- `/natural-language-processing-course`: dark 96%, paper 0%, accents violet 61%, green 31%, dark menu bar
- `/neural-networks-course`: dark 96%, paper 0%, accents violet 45%, cyan 41%, dark menu bar
- `/online-ai-and-machine-learning-classes`: dark 94%, paper 0%, accents violet 57%, cyan 29%, dark menu bar
- `/online-c-plus-plus-classes`: dark 96%, paper 0%, accents cyan 50%, blue 27%, dark menu bar
- `/online-java-classes`: dark 89%, paper 0%, accents amber 44%, cyan 34%, dark menu bar
- `/prompt-engineering-course`: dark 92%, paper 0%, accents violet 47%, amber 27%, dark menu bar
- `/python-for-data-science`: dark 96%, paper 0%, accents amber 43%, blue 37%, dark menu bar
- `/python-for-machine-learning`: dark 96%, paper 0%, accents green 50%, blue 35%, dark menu bar

### Maths tutor / maths landing pages on `maths-pages.css` (65)

Avg dark background 81% · warm paper 6% · amber share of accents 20% · old dark menu bar on 0/65

- `/11-plus-maths-tuition`: dark 71%, paper 0%, accents amber 56%, indigo 37%
- `/a-level-maths-tuition-online`: dark 72%, paper 0%, accents cyan 93%, green 7%
- `/a-level-maths-tutor-uae`: dark 72%, paper 0%, accents cyan 93%, green 7%
- `/act-math-tutoring-online`: dark 99%, paper 0%, accents amber 55%, cyan 38%
- `/algebra-2-tutoring-online`: dark 77%, paper 0%, accents indigo 97%, green 3%
- `/algebra-tutoring-online-usa`: dark 96%, paper 0%, accents green 100%
- `/american-maths-tutor-uae`: dark 59%, paper 0%, accents indigo 64%, red 33%
- `/ap-calculus-tutoring-online`: dark 100%, paper 0%, accents indigo 95%, green 5%
- `/ap-statistics-tutoring-online`: dark 98%, paper 0%, accents violet 93%, green 5%
- `/best-age-to-start-coding`: dark 86%, paper 13%, accents red 94%, green 4%
- `/calculus-tutoring-online`: dark 65%, paper 0%, accents violet 100%, green 0%
- `/cbse-maths-tutor-uae`: dark 79%, paper 10%, accents green 62%, amber 38%
- `/coding-vs-maths`: dark 100%, paper 0%, accents violet 95%, green 3%
- `/common-entrance-maths-tuition`: dark 65%, paper 1%, accents amber 57%, pink 36%
- `/free-coding-starter-kit`: dark 64%, paper 23%, accents amber 93%, green 7%
- `/free-trial`: dark 82%, paper 0%, accents green 100%
- `/functional-skills-maths-tuition-online`: dark 57%, paper 0%, accents blue 93%, green 5%
- `/further-maths-tuition-online`: dark 69%, paper 0%, accents indigo 95%, green 5%
- `/gcse-maths-tuition-online`: dark 80%, paper 0%, accents green 44%, indigo 31%
- `/gcse-maths-tutor-uae`: dark 100%, paper 0%, accents green 45%, blue 28%
- `/geometry-tutoring-online-usa`: dark 99%, paper 0%, accents cyan 94%, green 6%
- `/homeschool-coding-curriculum`: dark 99%, paper 0%, accents green 100%
- `/ib-maths-tutor-uae`: dark 100%, paper 0%, accents indigo 92%, green 5%
- `/isee-ssat-math-prep`: dark 100%, paper 0%, accents green 100%
- `/ks3-maths-tuition-online`: dark 95%, paper 0%, accents blue 90%, green 7%
- `/math-catch-up-program`: dark 92%, paper 0%, accents cyan 97%, green 3%
- `/math-olympiad-amc-tutoring`: dark 88%, paper 0%, accents amber 93%, green 7%
- `/maths-classes-for-adults-uae`: dark 75%, paper 0%, accents cyan 90%, green 6%
- `/maths-tuition-for-kids-uae`: dark 99%, paper 0%, accents cyan 90%, green 7%
- `/maths-tuition-for-teens-uae`: dark 85%, paper 0%, accents indigo 93%, green 4%
- `/maths-tutor-in-abu-dhabi`: dark 62%, paper 0%, accents cyan 93%, green 5%
- `/minecraft-coding-classes-for-kids`: dark 58%, paper 0%, accents green 100%
- `/online-coding-classes-for-kids-uk`: dark 54%, paper 42%, accents red 80%, pink 17%
- `/online-coding-classes-for-kids-usa`: dark 71%, paper 0%, accents indigo 99%, green 1%
- `/online-coding-summer-camp`: dark 84%, paper 15%, accents amber 97%, green 3%
- `/online-math-tutor-10th-grade`: dark 80%, paper 20%, accents red 80%, pink 18%
- `/online-math-tutor-11th-grade`: dark 100%, paper 0%, accents violet 97%, green 3%
- `/online-math-tutor-12th-grade`: dark 79%, paper 0%, accents indigo 100%, green 0%
- `/online-math-tutor-1st-grade`: dark 72%, paper 24%, accents pink 97%, green 3%
- `/online-math-tutor-6th-grade`: dark 60%, paper 0%, accents blue 98%, indigo 2%
- `/online-math-tutor-7th-grade`: dark 63%, paper 36%, accents amber 98%, green 2%
- `/online-math-tutor-8th-grade`: dark 58%, paper 0%, accents indigo 100%, green 0%
- `/online-math-tutor-9th-grade`: dark 78%, paper 0%, accents green 100%
- `/online-math-tutor-canada`: dark 94%, paper 6%, accents red 98%, green 2%
- `/online-math-tutor-kindergarten`: dark 61%, paper 37%, accents amber 97%, green 3%
- `/online-maths-classes-for-adults-in-uk`: dark 90%, paper 0%, accents amber 93%, green 7%
- `/online-maths-classes-for-adults-in-usa`: dark 98%, paper 0%, accents green 97%, amber 3%
- `/online-maths-tuition-for-college-students-in-uk`: dark 99%, paper 0%, accents amber 94%, green 6%
- `/online-maths-tuition-for-kids-in-uk`: dark 80%, paper 0%, accents blue 92%, indigo 8%
- `/online-maths-tuition-for-teens-in-uk`: dark 89%, paper 0%, accents violet 75%, indigo 21%
- `/online-maths-tuition-singapore`: dark 55%, paper 41%, accents red 98%, green 2%
- `/online-maths-tuition-uae`: dark 74%, paper 14%, accents green 98%, amber 2%
- `/online-maths-tutoring-australia`: dark 88%, paper 0%, accents green 100%
- `/online-maths-tutoring-for-college-students-in-usa`: dark 98%, paper 0%, accents amber 93%, green 7%
- `/online-maths-tutoring-for-kids-in-usa`: dark 100%, paper 0%, accents red 90%, green 6%
- `/online-maths-tutoring-for-teens-in-usa`: dark 100%, paper 0%, accents indigo 93%, green 5%
- `/parent-faq`: dark 82%, paper 0%, accents violet 91%, green 6%
- `/precalculus-tutoring-online`: dark 64%, paper 0%, accents cyan 98%, green 2%
- `/results`: dark 89%, paper 0%, accents indigo 98%, green 2%
- `/roblox-coding-classes-for-kids`: dark 60%, paper 34%, accents red 97%, green 3%
- `/sat-math-tutoring-online`: dark 100%, paper 0%, accents indigo 66%, red 28%
- `/scratch-coding-classes-for-kids`: dark 63%, paper 36%, accents amber 98%, green 2%
- `/singapore-math-method-tutoring`: dark 75%, paper 24%, accents red 98%, green 2%
- `/summer-math-program-online`: dark 85%, paper 14%, accents amber 98%, green 2%
- `/ukmt-maths-challenge-tutoring`: dark 54%, paper 0%, accents amber 94%, green 6%

### Age and class pages (coding-for-N-year-olds, coding-for-class-N, boards) on `age-wise-pages.css` (46)

Avg dark background 93% · warm paper 0% · amber share of accents 16% · old dark menu bar on 46/46

- `/coding-for-10-year-olds`: dark 91%, paper 0%, accents cyan 79%, violet 15%, dark menu bar
- `/coding-for-11-year-olds`: dark 94%, paper 0%, accents blue 78%, cyan 13%, dark menu bar
- `/coding-for-12-year-olds`: dark 96%, paper 0%, accents indigo 81%, blue 14%, dark menu bar
- `/coding-for-13-year-olds`: dark 96%, paper 0%, accents violet 80%, pink 13%, dark menu bar
- `/coding-for-14-year-olds`: dark 94%, paper 0%, accents violet 80%, cyan 14%, dark menu bar
- `/coding-for-15-year-olds`: dark 95%, paper 0%, accents cyan 78%, indigo 17%, dark menu bar
- `/coding-for-16-year-olds`: dark 94%, paper 0%, accents green 80%, violet 16%, dark menu bar
- `/coding-for-17-year-olds`: dark 93%, paper 0%, accents amber 79%, red 13%, dark menu bar
- `/coding-for-8-year-olds`: dark 94%, paper 0%, accents pink 78%, amber 13%, dark menu bar
- `/coding-for-9-year-olds`: dark 94%, paper 0%, accents amber 78%, pink 13%, dark menu bar
- `/coding-for-cbse-students`: dark 91%, paper 0%, accents red 78%, blue 14%, dark menu bar
- `/coding-for-class-10`: dark 94%, paper 0%, accents cyan 78%, indigo 16%, dark menu bar
- `/coding-for-class-11`: dark 94%, paper 0%, accents green 81%, violet 16%, dark menu bar
- `/coding-for-class-12`: dark 93%, paper 0%, accents amber 79%, red 12%, dark menu bar
- `/coding-for-class-3`: dark 94%, paper 0%, accents amber 77%, pink 13%, dark menu bar
- `/coding-for-class-4`: dark 94%, paper 0%, accents amber 77%, pink 14%, dark menu bar
- `/coding-for-class-5`: dark 94%, paper 0%, accents cyan 78%, violet 15%, dark menu bar
- `/coding-for-class-6`: dark 96%, paper 0%, accents blue 77%, cyan 13%, dark menu bar
- `/coding-for-class-7`: dark 95%, paper 0%, accents indigo 81%, blue 13%, dark menu bar
- `/coding-for-class-8`: dark 94%, paper 0%, accents violet 80%, pink 13%, dark menu bar
- `/coding-for-class-9`: dark 94%, paper 0%, accents violet 80%, cyan 13%, dark menu bar
- `/coding-for-icse-students`: dark 95%, paper 0%, accents indigo 81%, cyan 14%, dark menu bar
- `/coding-for-igcse-students`: dark 93%, paper 0%, accents cyan 76%, violet 17%, dark menu bar
- `/computer-applications-icse-class-10`: dark 93%, paper 0%, accents green 80%, violet 16%, dark menu bar
- `/computer-science-class-11-cbse`: dark 87%, paper 0%, accents amber 77%, violet 16%, dark menu bar
- `/computer-science-class-11-icse`: dark 89%, paper 0%, accents cyan 78%, indigo 17%, dark menu bar
- `/computer-science-class-12-cbse`: dark 87%, paper 0%, accents red 78%, amber 13%, dark menu bar
- `/computer-science-class-12-icse`: dark 89%, paper 0%, accents violet 80%, cyan 14%, dark menu bar
- `/python-for-10-year-olds`: dark 93%, paper 0%, accents cyan 77%, amber 14%, dark menu bar
- `/python-for-11-year-olds`: dark 95%, paper 0%, accents blue 77%, cyan 14%, dark menu bar
- `/python-for-12-year-olds`: dark 93%, paper 0%, accents indigo 80%, cyan 14%, dark menu bar
- `/python-for-13-year-olds`: dark 93%, paper 0%, accents violet 79%, pink 14%, dark menu bar
- `/python-for-14-year-olds`: dark 93%, paper 0%, accents violet 79%, cyan 14%, dark menu bar
- `/python-for-15-year-olds`: dark 93%, paper 0%, accents cyan 77%, indigo 17%, dark menu bar
- `/python-for-16-year-olds`: dark 93%, paper 0%, accents green 80%, violet 17%, dark menu bar
- `/python-for-17-year-olds`: dark 93%, paper 0%, accents amber 79%, red 13%, dark menu bar
- `/python-for-9-year-olds`: dark 94%, paper 0%, accents blue 77%, amber 14%, dark menu bar
- `/python-for-beginners-kids`: dark 93%, paper 0%, accents blue 77%, amber 14%, dark menu bar
- `/python-for-class-10`: dark 94%, paper 0%, accents cyan 77%, indigo 17%, dark menu bar
- `/python-for-class-11-cbse`: dark 94%, paper 0%, accents amber 77%, violet 16%, dark menu bar
- `/python-for-class-12-cbse`: dark 90%, paper 0%, accents red 78%, amber 14%, dark menu bar
- `/python-for-class-6`: dark 94%, paper 0%, accents blue 77%, amber 13%, dark menu bar
- `/python-for-class-7`: dark 95%, paper 0%, accents indigo 81%, cyan 13%, dark menu bar
- `/python-for-class-8`: dark 94%, paper 0%, accents violet 80%, pink 13%, dark menu bar
- `/python-for-class-9`: dark 94%, paper 0%, accents violet 80%, cyan 13%, dark menu bar
- `/python-projects-for-kids`: dark 91%, paper 0%, accents green 81%, amber 14%, dark menu bar

### Core utility pages (FAQ, terms, privacy, login, refund, levels...) on `style.css` + `pages/global.css` (18)

Avg dark background 93% · warm paper 0% · amber share of accents 19% · old dark menu bar on 17/18

- `/beat-the-babu`: dark 94%, paper 0%, accents blue 51%, green 31%, dark menu bar
- `/cancellation`: dark 96%, paper 0%, accents violet 51%, green 49%, dark menu bar
- `/faq`: dark 91%, paper 0%, accents amber 36%, violet 31%, dark menu bar
- `/free-resources`: dark 96%, paper 0%, accents cyan 65%, violet 8%, dark menu bar
- `/levels/coding-for-college-students`: dark 91%, paper 0%, accents green 72%, cyan 15%, dark menu bar
- `/levels/coding-for-kids`: dark 87%, paper 0%, accents violet 70%, cyan 20%, dark menu bar
- `/levels/coding-for-professionals`: dark 89%, paper 0%, accents amber 67%, cyan 19%, dark menu bar
- `/levels/coding-for-teens`: dark 81%, paper 0%, accents blue 50%, violet 27%, dark menu bar
- `/levels/corporate-training`: dark 96%, paper 0%, accents indigo 40%, violet 38%, dark menu bar
- `/login`: dark 94%, paper 0%, accents indigo 43%, violet 25%, dark menu bar
- `/maths-class-10`: dark 93%, paper 0%, accents amber 96%, green 4%, dark menu bar
- `/online-maths-tuition`: dark 93%, paper 0%, accents amber 95%, red 3%, dark menu bar
- `/privacy`: dark 96%, paper 0%, accents violet 51%, green 49%, dark menu bar
- `/refund`: dark 96%, paper 0%, accents violet 51%, green 49%, dark menu bar
- `/schools`: dark 96%, paper 0%, accents violet 70%, cyan 13%, dark menu bar
- `/search`: dark 100%, paper 0%, accents violet 49%, green 26%, dark menu bar
- `/terms`: dark 96%, paper 0%, accents violet 51%, green 49%, dark menu bar
- `/welcome`: dark 93%, paper 0%, accents cyan 42%, green 27%

### Country pages (cp- cluster) on `country-pages.css` (11)

Avg dark background 100% · warm paper 0% · amber share of accents 23% · old dark menu bar on 11/11

- `/coding-classes-in-australia`: dark 100%, paper 0%, accents amber 82%, red 11%, dark menu bar
- `/coding-classes-in-canada`: dark 100%, paper 0%, accents red 83%, amber 10%, dark menu bar
- `/coding-classes-in-germany`: dark 100%, paper 0%, accents yellow 68%, red 11%, dark menu bar
- `/coding-classes-in-ireland`: dark 100%, paper 0%, accents green 81%, amber 15%, dark menu bar
- `/coding-classes-in-new-zealand`: dark 100%, paper 0%, accents cyan 84%, green 9%, dark menu bar
- `/coding-classes-in-singapore`: dark 100%, paper 0%, accents pink 83%, cyan 8%, dark menu bar
- `/coding-classes-in-sweden`: dark 99%, paper 0%, accents yellow 74%, amber 11%, dark menu bar
- `/coding-classes-in-switzerland`: dark 99%, paper 0%, accents red 73%, amber 14%, dark menu bar
- `/coding-classes-in-uae`: dark 99%, paper 0%, accents amber 84%, green 12%, dark menu bar
- `/coding-classes-in-united-kingdom`: dark 100%, paper 0%, accents red 62%, green 14%, dark menu bar
- `/coding-classes-in-united-states`: dark 99%, paper 0%, accents indigo 59%, red 12%, dark menu bar

### One-off pages on `style.css` (10)

Avg dark background 88% · warm paper 4% · amber share of accents 33% · old dark menu bar on 10/10

- `/ai-agents-and-automation`: dark 97%, paper 0%, accents amber 96%, green 4%, dark menu bar
- `/ai-agents-explained`: dark 95%, paper 0%, accents cyan 62%, violet 31%, dark menu bar
- `/ai-engineer-roadmap-2026`: dark 51%, paper 44%, accents red 47%, blue 31%, dark menu bar
- `/build-your-own-gpt-python`: dark 96%, paper 0%, accents pink 35%, amber 34%, dark menu bar
- `/coding-classes-in-india`: dark 96%, paper 0%, accents violet 61%, green 13%, dark menu bar
- `/coding-olympiad-medal-track`: dark 85%, paper 0%, accents amber 80%, red 18%, dark menu bar
- `/hackathon`: dark 69%, paper 0%, accents violet 78%, cyan 10%, dark menu bar
- `/learn-coding-by-age`: dark 96%, paper 0%, accents violet 61%, cyan 16%, dark menu bar
- `/learn-coding-by-class`: dark 96%, paper 0%, accents violet 61%, cyan 16%, dark menu bar
- `/screen-time-to-skill`: dark 96%, paper 0%, accents amber 76%, red 21%, dark menu bar

### Summer and winter camp pages (8)

Avg dark background 97% · warm paper 0% · amber share of accents 32% · old dark menu bar on 8/8

- `/summer-coding-camp`: dark 93%, paper 0%, accents amber 51%, red 25%, dark menu bar
- `/summer-coding-camp-adults`: dark 97%, paper 0%, accents amber 67%, red 25%, dark menu bar
- `/summer-coding-camp-kids`: dark 96%, paper 0%, accents amber 70%, red 23%, dark menu bar
- `/summer-coding-camp-teens`: dark 99%, paper 0%, accents amber 66%, red 26%, dark menu bar
- `/winter-coding-camp`: dark 96%, paper 0%, accents cyan 88%, green 6%, dark menu bar
- `/winter-coding-camp-adults`: dark 99%, paper 0%, accents cyan 95%, violet 2%, dark menu bar
- `/winter-coding-camp-kids`: dark 99%, paper 0%, accents cyan 95%, green 3%, dark menu bar
- `/winter-coding-camp-teens`: dark 99%, paper 0%, accents cyan 96%, green 2%, dark menu bar

### Resources hub and resource pages (generated) (8)

Avg dark background 100% · warm paper 0% · amber share of accents 23% · old dark menu bar on 8/8

- `/resources`: dark 100%, paper 0%, accents violet 58%, green 42%, dark menu bar
- `/resources/ai-and-machine-learning`: dark 100%, paper 0%, accents amber 27%, red 27%, dark menu bar
- `/resources/cpp`: dark 100%, paper 0%, accents green 27%, amber 24%, dark menu bar
- `/resources/html-and-css`: dark 100%, paper 0%, accents green 31%, violet 23%, dark menu bar
- `/resources/java`: dark 100%, paper 0%, accents green 31%, amber 27%, dark menu bar
- `/resources/javascript`: dark 100%, paper 0%, accents amber 29%, green 24%, dark menu bar
- `/resources/python`: dark 100%, paper 0%, accents green 31%, amber 27%, dark menu bar
- `/resources/sql`: dark 100%, paper 0%, accents amber 30%, green 27%, dark menu bar

### One-off pages with inline styles only (7)

Avg dark background 99% · warm paper 0% · amber share of accents 27% · old dark menu bar on 7/7

- `/coding-vs-programming`: dark 99%, paper 0%, accents cyan 55%, amber 40%, dark menu bar
- `/hackathon-guide`: dark 95%, paper 0%, accents violet 87%, cyan 7%, dark menu bar
- `/hackathon-login`: dark 98%, paper 0%, accents violet 37%, cyan 32%, dark menu bar
- `/how-large-language-models-work`: dark 99%, paper 0%, accents red 83%, violet 8%, dark menu bar
- `/machine-learning-from-scratch`: dark 99%, paper 0%, accents amber 55%, pink 41%, dark menu bar
- `/maths-behind-machine-learning`: dark 100%, paper 0%, accents amber 62%, violet 34%, dark menu bar
- `/python-from-the-ground-up`: dark 100%, paper 0%, accents green 52%, amber 27%, dark menu bar

### "Best coding classes" pages on `best-coding-class.css` (6)

Avg dark background 96% · warm paper 0% · amber share of accents 31% · old dark menu bar on 6/6

- `/ai-ml-course-for-teens`: dark 96%, paper 0%, accents cyan 74%, violet 14%, dark menu bar
- `/best-coding-classes-online`: dark 96%, paper 0%, accents indigo 68%, green 10%, dark menu bar
- `/coding-classes-for-girls`: dark 91%, paper 0%, accents pink 96%, green 3%, dark menu bar
- `/coding-classes-near-tollygunge-kolkata`: dark 98%, paper 0%, accents violet 90%, cyan 6%, dark menu bar
- `/java-programming-for-kids-teens`: dark 96%, paper 0%, accents amber 88%, green 8%, dark menu bar
- `/python-and-ai-classes-for-kids-teens`: dark 96%, paper 0%, accents amber 94%, violet 3%, dark menu bar

### Battle game screens on `battle.css` (3)

Avg dark background 99% · warm paper 0% · amber share of accents 0% · old dark menu bar on 3/3

- `/battle`: dark 100%, paper 0%, accents violet 48%, cyan 22%, dark menu bar
- `/battle-admin`: dark 100%, paper 0%, accents green 35%, violet 27%, dark menu bar
- `/battle-screen`: dark 98%, paper 0%, accents green 34%, violet 26%, dark menu bar

### Pages on `pages/global.css` alone (2)

Avg dark background 98% · warm paper 0% · amber share of accents 0% · old dark menu bar on 1/2

- `/aura`: dark 100%, paper 0%, accents green 54%, indigo 33%, dark menu bar
- `/check-status`: dark 95%, paper 0%, accents violet 65%, cyan 20%

## B. Partly off: dark hero/sections on a light page, or the old dark menu bar (22)

Mostly light, but a dark (cool near-black or dark-green/purple) hero or band, or the old dark menu bar sitting on top of an otherwise light page.

### Maths tutor / maths landing pages on `maths-pages.css` (10)

Avg dark background 39% · warm paper 11% · amber share of accents 10% · old dark menu bar on 0/10

- `/homeschool-math-curriculum-usa`: dark 31%, paper 0%, accents green 94%, amber 6%
- `/ib-maths-tuition-online`: dark 39%, paper 0%, accents indigo 98%, green 2%
- `/igcse-maths-tuition-online`: dark 43%, paper 47%, accents pink 98%, green 2%
- `/ks2-maths-tuition-online`: dark 44%, paper 0%, accents green 100%
- `/maths-tutor-in-dubai`: dark 45%, paper 0%, accents amber 39%, cyan 38%
- `/maths-tutor-in-sharjah`: dark 49%, paper 19%, accents amber 52%, red 42%
- `/online-math-tutor-2nd-grade`: dark 46%, paper 44%, accents green 100%
- `/online-math-tutor-3rd-grade`: dark 36%, paper 0%, accents cyan 98%, green 2%
- `/online-math-tutor-4th-grade`: dark 28%, paper 0%, accents cyan 98%, green 2%
- `/online-math-tutor-5th-grade`: dark 31%, paper 0%, accents violet 100%, green 0%

### One-off pages on `style.css` (6)

Avg dark background 13% · warm paper 69% · amber share of accents 22% · old dark menu bar on 6/6

- `/coding-comeback-women`: dark 0%, paper 89%, accents red 69%, amber 28%, dark menu bar
- `/coding-fee-calculator`: dark 34%, paper 0%, accents green 100%, dark menu bar
- `/how-ai-actually-works`: dark 28%, paper 65%, accents pink 58%, amber 40%, dark menu bar
- `/how-we-teach`: dark 15%, paper 77%, accents yellow 31%, red 30%, dark menu bar
- `/inside-neural-networks`: dark 0%, paper 96%, accents pink 73%, indigo 18%, dark menu bar
- `/jee-aspirant-coding-track`: dark 0%, paper 89%, accents red 49%, amber 45%, dark menu bar

### One-off pages with inline styles only (5)

Avg dark background 16% · warm paper 46% · amber share of accents 18% · old dark menu bar on 0/5

- `/coding-roadmap`: dark 23%, paper 77%, accents red 33%, amber 25%
- `/course-atlas`: dark 14%, paper 66%, accents red 23%, green 23%
- `/cpa-cpp-certification-prep`: dark 15%, paper 0%, accents red 66%, blue 29%
- `/data-structures-and-algorithms-course`: dark 14%, paper 86%, accents red 49%, green 35%
- `/pcep-python-certification-prep`: dark 15%, paper 0%, accents cyan 53%, amber 29%

### Core utility pages (FAQ, terms, privacy, login, refund, levels...) on `style.css` + `pages/global.css` (1)

Avg dark background 0% · warm paper 7% · amber share of accents 4% · old dark menu bar on 1/1

- `/bootstrap`: dark 0%, paper 7%, accents blue 42%, pink 25%, dark menu bar

## C. Light, but a different palette: own colours and fonts instead of warm paper + amber (45)

No dark theme, but not the brand look either: a white or grey-white base instead of warm paper, or warm paper with teal / indigo / pink / green accents and a different font per page instead of amber + Fraunces/Inter. The Kolkata complex pages (coding-classes-in-<complex>) were deliberately given a unique palette and font each for near-duplicate differentiation, which is why they drift.

### One-off pages with inline styles only (33)

Avg dark background 1% · warm paper 55% · amber share of accents 10% · old dark menu bar on 0/33

- `/ai-classes-for-beginners`: dark 0%, paper 0%, accents cyan 80%, red 13%
- `/ai-classes-for-kids`: dark 0%, paper 0%, accents blue 42%, green 27%
- `/ai-classes-for-teenagers`: dark 1%, paper 93%, accents indigo 35%, pink 35%
- `/coding-classes-in-avani-riverside-howrah`: dark 1%, paper 99%, accents cyan 45%, red 45%
- `/coding-classes-in-avidipta-mukundapur`: dark 1%, paper 97%, accents cyan 48%, pink 42%
- `/coding-classes-in-calcutta-riverside`: dark 2%, paper 97%, accents cyan 83%, green 7%
- `/coding-classes-in-diamond-city-north`: dark 1%, paper 0%, accents blue 53%, cyan 38%
- `/coding-classes-in-diamond-city-south`: dark 0%, paper 87%, accents cyan 48%, green 46%
- `/coding-classes-in-dlf-new-town-heights`: dark 1%, paper 99%, accents cyan 47%, pink 44%
- `/coding-classes-in-eden-city-maheshtala`: dark 2%, paper 85%, accents cyan 52%, indigo 41%
- `/coding-classes-in-elita-garden-vista`: dark 0%, paper 0%, accents cyan 46%, pink 45%
- `/coding-classes-in-genexx-valley-joka`: dark 2%, paper 0%, accents indigo 66%, cyan 23%
- `/coding-classes-in-godrej-prakriti`: dark 1%, paper 99%, accents cyan 87%, green 5%
- `/coding-classes-in-greenfield-city-behala`: dark 1%, paper 96%, accents cyan 75%, green 7%
- `/coding-classes-in-hiland-park`: dark 4%, paper 0%, accents indigo 67%, cyan 25%
- `/coding-classes-in-hiland-willows`: dark 1%, paper 98%, accents cyan 78%, amber 10%
- `/coding-classes-in-ideal-niketan-tangra`: dark 1%, paper 98%, accents cyan 45%, red 45%
- `/coding-classes-in-natural-city-garia`: dark 2%, paper 97%, accents cyan 49%, red 43%
- `/coding-classes-in-rosedale-garden`: dark 2%, paper 96%, accents cyan 46%, blue 44%
- `/coding-classes-in-sherwood-estate`: dark 1%, paper 0%, accents violet 47%, cyan 46%
- `/coding-classes-in-siddha-town-madhyamgram`: dark 1%, paper 0%, accents cyan 46%, amber 46%
- `/coding-classes-in-south-city`: dark 1%, paper 4%, accents cyan 80%, amber 7%
- `/coding-classes-in-sugam-habitat`: dark 2%, paper 96%, accents cyan 84%, green 6%
- `/coding-classes-in-uniworld-city`: dark 1%, paper 90%, accents cyan 80%, amber 12%
- `/coding-classes-in-upohar`: dark 2%, paper 0%, accents cyan 56%, pink 35%
- `/coding-classes-in-urbana`: dark 2%, paper 97%, accents cyan 54%, amber 39%
- `/how-computer-vision-works`: dark 0%, paper 0%, accents green 78%, pink 19%
- `/master-ai-ml-python-java`: dark 0%, paper 0%, accents amber 93%, green 7%
- `/modern-age-coders-vs-whitehat-jr-cuemath-codingal`: dark 2%, paper 93%, accents indigo 91%, green 6%
- `/numpy-pandas-matplotlib-masterclass`: dark 1%, paper 0%, accents indigo 89%, green 5%
- `/real-coding-classes`: dark 11%, paper 89%, accents green 74%, amber 24%
- `/student-labs`: dark 0%, paper 100%, accents amber 34%, red 26%
- `/vibe-coding-classes`: dark 0%, paper 0%, accents violet 64%, red 17%

### Gulf cluster (UAE / Qatar) on `gulf-*.css` (8)

Avg dark background 1% · warm paper 0% · amber share of accents 8% · old dark menu bar on 0/8

- `/ai-classes-for-kids-in-uae`: dark 1%, paper 0%, accents blue 94%, amber 5%
- `/ai-classes-in-dubai`: dark 1%, paper 0%, accents blue 91%, amber 8%
- `/coding-classes-for-kids-in-dubai`: dark 1%, paper 0%, accents blue 93%, amber 7%
- `/coding-classes-in-abu-dhabi`: dark 0%, paper 0%, accents blue 90%, amber 10%
- `/coding-classes-in-dubai`: dark 0%, paper 0%, accents blue 90%, amber 10%
- `/coding-classes-in-sharjah`: dark 0%, paper 0%, accents blue 90%, amber 10%
- `/python-classes-in-dubai`: dark 1%, paper 0%, accents blue 92%, amber 7%
- `/python-for-kids-in-dubai`: dark 1%, paper 0%, accents blue 93%, amber 7%

### Daily challenge pages on `challenge-pages.css` (3)

Avg dark background 6% · warm paper 3% · amber share of accents 16% · old dark menu bar on 0/3

- `/coding-challenges`: dark 6%, paper 0%, accents indigo 39%, violet 26%
- `/maths-challenges`: dark 6%, paper 0%, accents indigo 32%, amber 19%
- `/mistakes-students-make`: dark 7%, paper 10%, accents indigo 43%, red 26%

### Wall of Love (separate React app) (1)

- `/love`: warm off-white base, neon yellow / cyan / magenta sticker style, marker font and its own menu bar (checked by screenshot; the automated run timed out on this page)

## D. Brand base, own accent colour: warm paper base and brand layout, but a per-cluster accent instead of amber (probably intentional, owner call) (346)

Warm paper base (at least 50% of the page) and the brand page structure, but each page or country swaps amber for its own accent (for example crimson for Bahrain, navy for Dublin districts, maroon for Qatar, indigo on the comparison pages). Headings are Fraunces on cg-/ag-/bx- pages, Source Serif 4 on the comparison pages and Newsreader on the Qatar pages. This was a deliberate per-market "personality" in the build guide. Listed so the owner can decide whether accents should be unified; not a defect by itself.

### Coding-global cluster (cg-: Ireland, Netherlands, Oman ...) on `coding-global.css` (211)

Avg dark background 0% · warm paper 99% · amber share of accents 3% · old dark menu bar on 0/211

`/coding-classes-in-new-jersey` `/coding-classes-in-ontario` `/coding-classes-in-texas` `/coding-classes-in-new-york` `/coding-classes-in-washington` `/coding-classes-in-georgia` `/coding-classes-in-oman` `/coding-classes-in-muscat` `/coding-classes-in-seeb` `/coding-classes-in-al-mouj` `/coding-classes-in-qurum` `/coding-classes-in-al-khuwair` `/coding-classes-in-azaiba` `/coding-classes-in-madinat-al-irfan` `/coding-classes-in-al-hail` `/coding-classes-in-al-khoudh` `/coding-classes-in-barka` `/coding-classes-in-salalah` `/coding-classes-in-ibra` `/coding-classes-in-sur` `/coding-classes-in-duqm` `/coding-classes-in-khasab` `/coding-classes-in-al-batinah-south` `/coding-classes-in-al-batinah-north` `/coding-classes-in-ad-dakhiliyah` `/coding-classes-in-ash-sharqiyah-north` `/coding-classes-in-kuwait` `/coding-classes-in-hong-kong` `/coding-classes-in-bahrain` `/coding-classes-in-british-columbia` `/coding-classes-in-leicester` `/coding-classes-in-birmingham` `/coding-classes-in-brunei` `/coding-classes-in-bandar-seri-begawan` `/coding-classes-in-kuala-belait` `/coding-classes-in-tutong` `/coding-classes-in-temburong` `/coding-classes-in-seria` `/coding-classes-in-gadong` `/coding-classes-in-as-suwaiq` `/coding-classes-in-rustaq` `/coding-classes-in-al-musanaah` `/coding-classes-in-shinas` `/coding-classes-in-al-khaburah` `/coding-classes-in-samail` `/coding-classes-in-izki` `/coding-classes-in-liwa` `/coding-classes-in-al-kamil-wal-wafi` `/coding-classes-in-bidbid` `/coding-classes-in-qurayyat` `/coding-classes-in-adam` `/coding-classes-in-nakhal` `/coding-classes-in-al-hamra` `/coding-classes-in-al-qabil` `/coding-classes-in-manah` `/coding-classes-in-al-awabi` `/coding-classes-in-taqah` `/coding-classes-in-dhank` `/coding-classes-in-dima-wa-attayeen` `/coding-classes-in-mahout` `/coding-classes-in-mirbat` `/coding-classes-in-masirah` `/coding-classes-in-wadi-bani-khalid` `/coding-classes-in-mahdah` `/coding-classes-in-daba-al-bayah` `/coding-classes-in-haima` `/coding-classes-in-al-mazyunah` `/coding-classes-in-shalim` `/coding-classes-in-madha` `/coding-classes-in-amstelveen` `/coding-classes-in-amsterdam` `/coding-classes-in-eindhoven` `/coding-classes-in-the-hague` `/coding-classes-in-utrecht` `/coding-classes-in-rotterdam` `/coding-classes-in-gelderland` `/coding-classes-in-noord-holland` `/coding-classes-in-zuid-holland` `/coding-classes-in-overijssel` `/coding-classes-in-limburg` `/coding-classes-in-friesland` `/coding-classes-in-flevoland` `/coding-classes-in-zeeland` `/coding-classes-in-groningen` `/coding-classes-in-nijmegen` `/coding-classes-in-apeldoorn` `/coding-classes-in-haarlem` `/coding-classes-in-haarlemmermeer` `/coding-classes-in-amersfoort` `/coding-classes-in-zaanstad` `/coding-classes-in-enschede` `/coding-classes-in-den-bosch` `/coding-classes-in-zwolle` `/coding-classes-in-leeuwarden` `/coding-classes-in-zoetermeer` `/coding-classes-in-maastricht` `/coding-classes-in-dordrecht` `/coding-classes-in-alphen-aan-den-rijn` `/coding-classes-in-alkmaar` `/coding-classes-in-delft` `/coding-classes-in-emmen` `/coding-classes-in-uithoorn` `/coding-classes-in-venlo` `/coding-classes-in-amsterdam-centrum` `/coding-classes-in-amsterdam-west` `/coding-classes-in-amsterdam-zuid` `/coding-classes-in-amsterdam-zuidoost` `/coding-classes-in-rotterdam-centrum` `/coding-classes-in-delfshaven` `/coding-classes-in-charlois` `/coding-classes-in-ijsselmonde` `/coding-classes-in-kralingen-crooswijk` `/coding-classes-in-prins-alexander` `/coding-classes-in-haagse-hout` `/coding-classes-in-scheveningen` `/coding-classes-in-escamp` `/coding-classes-in-laak` `/coding-classes-in-segbroek` `/coding-classes-in-eindhoven-centrum` `/coding-classes-in-tongelre` `/coding-classes-in-helmond` `/coding-classes-in-gestel` `/coding-classes-in-woensel-zuid` `/coding-classes-in-purmerend` `/coding-classes-in-oss` `/coding-classes-in-sittard-geleen` `/coding-classes-in-nissewaard` `/coding-classes-in-heerlen` `/coding-classes-in-meierijstad` `/coding-classes-in-hengelo` `/coding-classes-in-schiedam` `/coding-classes-in-almelo` `/coding-classes-in-hoorn` `/coding-classes-in-leidschendam-voorburg` `/coding-classes-in-roosendaal` `/coding-classes-in-gouda` `/coding-classes-in-veenendaal` `/coding-classes-in-velsen` `/coding-classes-in-wassenaar` `/coding-classes-in-bergen-op-zoom` `/coding-classes-in-voorschoten` `/coding-classes-in-capelle-aan-den-ijssel` `/coding-classes-in-rijswijk` `/coding-classes-in-oegstgeest` `/coding-classes-in-diemen` `/best-coding-class-in-dublin` `/coding-classes-in-dun-laoghaire-rathdown` `/best-coding-class-in-cork` `/best-coding-class-in-limerick` `/best-coding-class-in-galway` `/best-coding-class-in-waterford` `/coding-classes-in-county-wexford` `/coding-classes-in-county-carlow` `/coding-classes-in-county-wicklow` `/coding-classes-in-county-kildare` `/coding-classes-in-county-laois` `/coding-classes-in-fingal` `/coding-classes-in-south-dublin` `/coding-classes-in-county-westmeath` `/coding-classes-in-county-clare` `/coding-classes-in-county-kerry` `/coding-classes-in-county-galway` `/coding-classes-in-county-offaly` `/coding-classes-in-county-longford` `/coding-classes-in-county-mayo` `/coding-classes-in-county-cavan` `/coding-classes-in-county-sligo` `/coding-classes-in-county-leitrim` `/coding-classes-in-county-donegal` `/coding-classes-in-county-roscommon` `/coding-classes-in-county-monaghan` `/coding-and-ai-classes-in-connacht` `/coding-and-ai-classes-in-leinster` `/coding-and-ai-classes-in-munster` `/best-coding-class-in-swords` `/best-coding-class-in-maynooth` `/best-coding-class-in-dundalk` `/best-coding-class-in-drogheda` `/best-coding-class-in-tralee` `/best-coding-class-in-newbridge` `/best-coding-class-in-balbriggan` `/best-coding-class-in-killarney` `/best-coding-class-in-arklow` `/best-coding-class-in-wicklow` `/best-coding-class-in-tramore` `/best-coding-class-in-athy` `/best-coding-class-in-longford` `/best-coding-class-in-rush` `/best-coding-class-in-portmarnock` `/best-coding-class-in-skerries` `/best-coding-class-in-dungarvan` `/coding-classes-in-blanchardstown-dublin` `/best-coding-class-in-shannon` `/coding-classes-in-lucan-dublin` `/coding-classes-in-dundrum-dublin` `/coding-classes-in-douglas-cork` `/coding-classes-in-castletroy-limerick` `/coding-classes-in-tallaght-dublin` `/coding-classes-in-sandyford-dublin` `/coding-classes-in-ballincollig-cork` `/coding-classes-in-clondalkin-dublin` `/coding-classes-in-rathfarnham-dublin` `/coding-classes-in-dun-laoghaire-dublin` `/coding-classes-in-stillorgan-dublin` `/coding-classes-in-blackrock-dublin` `/coding-classes-in-drumcondra-dublin` `/coding-classes-in-clontarf-dublin` `/coding-classes-in-rathmines-dublin` `/coding-classes-in-terenure-dublin` `/coding-classes-in-glanmire-cork` `/coding-classes-in-knocknacarra-galway`

### AI-global cluster (ag-) on `ai-global.css` (103)

Avg dark background 0% · warm paper 85% · amber share of accents 0% · old dark menu bar on 0/103

`/ai-and-machine-learning-classes-in-oman` `/ai-and-machine-learning-classes-in-muscat` `/ai-and-machine-learning-classes-in-uae` `/ai-and-machine-learning-classes-in-kuwait` `/ai-and-machine-learning-classes-in-bahrain` `/ai-and-machine-learning-classes-in-saudi-arabia` `/ai-and-machine-learning-classes-in-kuwait-city` `/ai-and-machine-learning-classes-in-qatar` `/ai-and-machine-learning-classes-in-usa` `/ai-and-machine-learning-classes-in-switzerland` `/ai-and-machine-learning-classes-in-london` `/ai-and-machine-learning-classes-in-singapore` `/ai-and-machine-learning-classes-in-zurich` `/ai-and-machine-learning-classes-in-canada` `/ai-and-machine-learning-classes-in-uk` `/ai-and-machine-learning-classes-in-australia` `/ai-and-machine-learning-classes-in-ireland` `/ai-and-machine-learning-classes-in-hong-kong` `/ai-and-machine-learning-classes-in-brunei` `/ai-and-python-academy-oman` `/ai-agents-course-for-students-oman` `/build-real-ai-projects-oman` `/vibe-coding-vs-building-ai-oman` `/python-to-ai-roadmap-for-students-oman` `/ai-and-python-academy-for-girls-oman` `/machine-learning-for-school-students-oman` `/coding-and-ai-classes-in-nassau` `/python-and-ai-track-for-students-bahamas` `/github-portfolio-for-students-bahamas` `/one-to-one-coding-classes-in-nassau` `/year-round-coding-classes-vs-summer-camps-bahamas` `/coding-and-ai-alongside-bjc-and-bgcse-bahamas` `/ai-and-machine-learning-classes-in-bahamas` `/agentic-coding-classes` `/ai-evaluations-course` `/context-engineering-course` `/how-to-think-like-a-programmer` `/how-to-read-code` `/how-to-actually-learn-to-code` `/how-to-debug-code` `/how-llms-actually-work` `/ib-computer-science-online-tuition` `/ap-computer-science-a-online-classes` `/uk-gcse-computer-science-tutoring` `/usaco-preparation-online-coaching` `/cambridge-a-level-computer-science-online-classes` `/ioi-olympiad-informatics-training` `/python-certification-pcep-pcap-course` `/canadian-computing-competition-ccc-prep` `/what-is-vibe-coding` `/vibe-coding-projects-for-students` `/vibe-coding-for-beginners` `/vibe-coding-for-teens` `/learn-to-code-with-ai` `/build-apps-with-ai` `/ai-coding-course` `/ai-agents-for-teens` `/should-my-child-learn-ai` `/best-ai-courses-for-teens-2026` `/ai-literacy-for-students` `/ai-classes-for-adults` `/one-on-one-ai-classes` `/ai-and-python-academy-amsterdam` `/ai-and-python-academy-eindhoven` `/ai-and-python-academy-utrecht` `/ai-and-python-academy-the-hague` `/ai-and-python-academy-groningen` `/ai-and-python-academy-rotterdam` `/coding-classes-for-kids-netherlands` `/coding-classes-for-teens-netherlands` `/coding-and-ai-classes-for-adults-netherlands` `/build-real-ai-projects-netherlands` `/coding-for-college-students-netherlands` `/ai-agents-course-for-professionals-netherlands` `/machine-learning-for-school-students-netherlands` `/ai-and-python-academy-for-girls-netherlands` `/python-classes-netherlands` `/ai-agents-course-for-students-netherlands` `/java-classes-netherlands` `/data-science-course-netherlands` `/app-development-course-netherlands` `/full-stack-software-development-course-netherlands` `/python-to-ai-roadmap-for-students-netherlands` `/vibe-coding-vs-building-ai-netherlands` `/understand-the-code-dont-copy-paste-ireland` `/best-online-coding-classes-ireland` `/leaving-cert-computer-science-grinds-online` `/after-coderdojo-next-step-coding-ireland` `/best-coding-classes-for-teens-ireland` `/best-coding-classes-for-kids-ireland` `/junior-cycle-coding-short-course-help` `/transition-year-coding-course-ireland` `/problem-solving-skills-through-coding-ireland` `/best-python-classes-online-ireland` `/data-science-course-ireland` `/best-coding-classes-for-adults-ireland` `/coding-for-college-students-ireland` `/build-real-ai-projects-ireland` `/learn-to-think-not-just-use-ai-tools-ireland` `/learn-to-train-ai-not-just-prompt-it-ireland` `/java-classes-ireland` `/ai-agents-course-for-professionals-ireland` `/app-development-course-ireland`

### Comparison / alternative / cost pages on `compare-pages.css` (17)

Avg dark background 0% · warm paper 93% · amber share of accents 1% · old dark menu bar on 0/17

`/cuemath-alternative` `/whitehat-jr-alternative` `/codingal-alternative` `/byjus-coding-alternative` `/brightchamps-alternative` `/tynker-alternative` `/coding-classes-cost-india-2026` `/coding-classes-for-kids-cost` `/private-math-tutor-vs-online-tutoring` `/online-math-tutor-cost` `/modern-age-coders-vs-codingal` `/modern-age-coders-vs-outschool` `/modern-age-coders-vs-tynker` `/modern-age-coders-vs-juni-learning` `/modern-age-coders-vs-cuemath` `/modern-age-coders-vs-kumon` `/modern-age-coders-vs-mathnasium`

### Class 10 board-prep pages (bx-) on `board-prep.css` (10)

Avg dark background 0% · warm paper 81% · amber share of accents 0% · old dark menu bar on 0/10

`/cbse-class-10-ai-classes-online` `/cbse-class-10-ai-syllabus-explained` `/cbse-class-10-ai-board-exam-preparation` `/python-for-cbse-class-10-ai` `/cbse-class-10-ai-project-and-practical-file` `/icse-class-10-java-classes-online` `/icse-class-10-computer-applications-syllabus-explained` `/icse-class-10-bluej-java-coaching` `/icse-class-10-java-programs-practice` `/icse-class-10-computer-applications-board-exam-preparation`

### Gulf cluster (UAE / Qatar) on `gulf-*.css` (5)

Avg dark background 0% · warm paper 85% · amber share of accents 0% · old dark menu bar on 0/5

`/coding-classes-for-kids-in-doha` `/python-classes-in-qatar` `/coding-classes-in-doha` `/coding-classes-in-qatar` `/ai-classes-in-qatar`

## OK: matches the homepage

- blog: 132
- city warm (city-warm.css): 131
- course detail (generated): 122
- Coding-global cluster (cg-: Ireland, Netherlands, Oman ...) on `coding-global.css`: 106
- editorial-theme: 37
- AI-global cluster (ag-) on `ai-global.css`: 23
- One-off pages with inline styles only: 8
- Gulf cluster (UAE / Qatar) on `gulf-*.css`: 7
- Comparison / alternative / cost pages on `compare-pages.css`: 3
- homepage: 1
- other: ../css/gazette.css: 1

## Notes

- Blog posts show 12-31% dark from their code boxes, which use the brand ink colour. That is on-brand and counted as OK.
- `/thank-you` opens the demo-choice overlay on load, so its measurement is of the overlay (warm), not the page underneath.
- Measured on the local working tree (`main`, including unpushed Ireland commits). Live pages that are not yet pushed may differ.
- Re-run: scripts live in the session scratchpad (`palette-audit.mjs`, `nav-check.mjs`, `analyze.mjs`, `report.mjs`).
