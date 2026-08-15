# International Growth Cluster: 20 pages

Date: 2026-08-15
Status: approved for build, page by page
Related: [global AI cluster spec](2026-07-24-global-ai-cluster-design.md), [Gulf pages spec](2026-07-10-gulf-pages-design.md)

## 1. Goal

Twenty new landing pages that sell coding and maths courses to students outside
India, in markets the site does not currently address. Each page must be strong
enough to rank in Google, to be quoted by ChatGPT, Claude, Perplexity and Bing,
and to convert a visitor into a callback lead.

Quality is the constraint, not speed. One page at a time, one commit per page,
each page through the verification gate before the next begins.

### Success criteria

A page is done when all of the following hold:

1. `node scripts/verify-cluster-pages.js <slug>` exits 0.
2. `node scripts/check-cluster-uniqueness.js <slug>` reports under 6 percent
   seven word shingle overlap against every sibling in this cluster, against the
   matching `/ai-and-machine-learning-classes-in-<market>` page, and against the
   relevant country hub.
3. 3,000 words minimum of substantive prose.
4. At least three inbound internal links from pages outside the cluster.
5. Routed in `_redirects`, `netlify.toml`, `sitemap-international.xml`, and
   listed in `llms.txt`.
6. A lead submitted from the page arrives in the admin panel with a usable phone
   number.

## 2. The twenty pages

All use the established slug pattern `/coding-classes-in-<market>`.

### Tier 1: half built markets (6)

These six markets already have an `/ai-and-machine-learning-classes-in-<market>`
page but no coding page, while every other market in the site has both. Filling
them completes a pattern the owner already approved rather than opening a new
axis. All six slugs were verified free in `_redirects` on 2026-08-15.

| # | Slug | Notes |
|---|------|-------|
| 1 | `/coding-classes-in-oman` | Country hub, pairs with existing Muscat AI page |
| 2 | `/coding-classes-in-muscat` | City spoke off Oman |
| 3 | `/coding-classes-in-kuwait` | Country level only. Kuwait City deliberately excluded, see section 12 |
| 4 | `/coding-classes-in-bahrain` | Large Indian school population |
| 5 | `/coding-classes-in-hong-kong` | High income, English medium schooling |
| 6 | `/coding-classes-in-netherlands` | High income, strong English proficiency |

### Tier 2: sub national spokes (14)

No US state, Canadian province or UK city page exists anywhere in the codebase,
while 20 Indian state pages and 47 Kolkata locality pages do. This is the
largest untouched vein in the site. Hubs already exist to link from:
`/coding-classes-in-united-states` (130KB), `/coding-classes-in-canada`,
`/coding-classes-in-united-kingdom`.

Ranking evidence is the 2020 US Census, 2021 Canadian Census and 2021 UK Census.
Every figure below is to be re-verified against a primary source at build time
before it appears on a page.

**United States (9)**

| # | Slug | Indian American population | Share of state |
|---|------|---------------------------|----------------|
| 7 | `/coding-classes-in-new-jersey` | 415,342 | 4.47 percent, densest in the US |
| 8 | `/coding-classes-in-california` | 830,259 | 2.1 percent, largest absolute |
| 9 | `/coding-classes-in-texas` | 480,566 | 1.65 percent |
| 10 | `/coding-classes-in-new-york` | 387,376 | 1.92 percent |
| 11 | `/coding-classes-in-illinois` | 260,055 | 2.03 percent |
| 12 | `/coding-classes-in-georgia` | 165,895 | 1.55 percent |
| 13 | `/coding-classes-in-virginia` | 157,635 | 1.83 percent |
| 14 | `/coding-classes-in-washington` | to verify | Seattle and Bellevue tech corridor |
| 15 | `/coding-classes-in-maryland` | 104,617 | 1.69 percent |

**Canada (3)**

| # | Slug | Indo-Canadian population | Share |
|---|------|-------------------------|-------|
| 16 | `/coding-classes-in-ontario` | 1,052,045 | 7.5 percent |
| 17 | `/coding-classes-in-british-columbia` | 388,930 | 7.91 percent |
| 18 | `/coding-classes-in-alberta` | 210,425 | 5.04 percent |

**United Kingdom (2)**

| # | Slug | British Indian population | Share |
|---|------|--------------------------|-------|
| 19 | `/coding-classes-in-leicester` | 126,421 | 34.30 percent, highest in Britain |
| 20 | `/coding-classes-in-birmingham` | 66,519 | 3.8 percent, 276,030 across West Midlands |

## 3. Axis and anti cannibalisation

The site already carries three international clusters. This one must not eat
any of them.

| Existing cluster | Covers | How this cluster stays clear |
|------------------|--------|------------------------------|
| 13 country pages `/coding-classes-in-<country>` | US, UK, CA, AU, DE, IE, NZ, SE, CH, SG, AE, SA, QA | Tier 1 adds only markets with no country page. Tier 2 sits one level below the hub and links up to it. |
| 20 Gulf city pages | Dubai, Abu Dhabi, Sharjah, Riyadh, Jeddah, Dammam, Doha | Tier 1 Gulf entries are Oman, Muscat, Kuwait, Bahrain only. No overlap. |
| 21 AI cluster pages | `/ai-and-machine-learning-classes-in-<market>` | Different axis. AI pages teach building models. These pages sell the full coding and maths ladder. Cross linked as siblings, not competitors. |

Tier 2 pages are **spokes**, not rivals to their hub. Each links up to its
country hub in the first 300 words, and the hub gains a link down to it.

## 4. Uniqueness contract

**Now machine enforced.** Owner requirement restated 2026-08-15: every page must
be genuinely unique, with real depth and no thin content. Shingle overlap only
catches duplication after a page is written, so the dossier is now a checked
artifact rather than a discipline.

`content/coding-global-dossiers.json` holds one entry per market.
`verify-cluster-pages.js` fails the page unless:

- `requiredMentions` has at least 8 market-specific strings, each a named
  statute, regulation, curriculum document, exam board, institution, dataset,
  operator or place. Generic marketing words defeat the purpose and do not count.
- **Every one of those strings actually appears in the page HTML.** A promise in
  the dossier that never made it onto the page fails the build.
- **No string is shared with another market's dossier.** This is the
  anti-duplication rule, enforced rather than trusted.
- `localProject` names a real dataset from that market with a real analytical
  trap.
- `sources` lists at least 3 primary sources, each with the claim it supports and
  a URL.

The gate was negative-tested on 2026-08-15: injecting a fact the page does not
contain produced `ERROR dossier facts missing from page`, and removing it
restored the pass. A gate that has never been seen to fail is not a gate.

The dossier also carries `rejectedClaims`, recording facts that could not be
sourced and were therefore removed. See section 4a.

A page may not be written until its dossier fills eight slots with sourced local
fact. This is the device that kept the AI cluster between 0.4 and 5.7 percent
overlap and it is mandatory here.

1. **Curriculum authority**: the actual computing or ICT curriculum a student
   there sits, named, with the governing body.
2. **Exam or credential**: the qualification a learner works toward locally.
3. **Target universities**: the institutions families in that market aim at.
4. **Local tech economy**: named employers or sectors, with a sourced figure.
5. **Timezone**: converted to literal wording, but see section 8 for the
   constraint on promising specific class times.
6. **School calendar**: term dates and holiday windows, which drive enrolment
   timing.
7. **Currency and fee framing**: USD only, see section 7.
8. **A local project brief with real numbers in it.** This is the strongest anti
   duplication slot. It is a described student project built on a real local
   dataset with a real modelling or logic trap in it.

Slot 8 is where sub national pages become genuinely un clonable, because
education policy below national level really does differ:

- US states control their own CS graduation requirements, CS standards and math
  standards. Source: each state Department of Education, plus the Code.org State
  of CS report data dashboard at `advocacy.code.org/report-data/`.
- Ontario placed coding inside the **Grades 1 to 8 mathematics** curriculum in
  September 2020, the first province in Canada to do so. British Columbia uses
  Applied Design, Skills and Technologies. Alberta uses Career and Technology
  Foundations. Three provinces, three different curricula, three different pages.
- Leicester and Birmingham share England's National Curriculum, so those two
  differentiate on local schools, local employers, and GCSE and A level context
  instead. They are the two hardest pages in the cluster and are scheduled last.

## 4a. Sourcing rule, learned on page one

**A search-result summary is not a source.** New Jersey nearly shipped with a
claim, repeated by two separate search summaries, that an Advanced Placement
computer science course satisfies part of the New Jersey mathematics graduation
credit. It was the page's strongest commercial hook.

Checked at primary source, it did not hold up. The claim is absent from the state
minimum graduation requirements chart at N.J.A.C. 6A:8-5.1 and from the Cornell
LII text of that regulation, and the two summaries contradicted each other on the
starting grade nine class year (2014-2015 versus 2016-2017) and on whether it
covers mathematics only or mathematics or science. It was removed, and the page
now tells families to ask their school counsellor instead.

Rules that follow from this, binding on all 19 remaining pages:

1. Any legal, curricular or statistical claim goes on a page only with a primary
   source recorded in the dossier. Government site, statute, regulation, exam
   board, official dataset.
2. If a claim cannot be verified, it is either stated as unconfirmed with the
   reason, or dropped. It is never asserted and quietly hedged.
3. Removing an unverifiable claim usually improves the page. New Jersey lost the
   AP hook and gained the real statute (N.J.S.A. 18A:7C-1.1, including the county
   vocational exclusion) plus the actual 120 credit graduation table, which is
   more useful to a parent and more citable by an AI engine. Word count went up,
   not down.
4. Government PDFs often defeat text conversion. Inflating the content streams
   directly works and is how the credit table was recovered. Do not give up on a
   primary source because the first fetch returns binary.

## 5. Design system

**Do not reuse `src/css/country-pages.css`.** Verified 2026-08-15: its background
is `#05060a` with neon accent glows, and `/coding-classes-in-united-states`
carries 62 instances of the `cp-vibe` purple and cyan block. That is the retired
"AI look" the owner rejected.

New file: `src/css/coding-global.css`

- Brand tokens only: paper `#FBF8F2`, ink `#1C1814`, amber `#B45309` and
  `#D97706`, muted `#6B6259`.
- Fraunces for display, Inter for body, JetBrains Mono for mono.
- Body class `cg-root cg-<code>`, per market accent via `--cg-accent` and
  `--cg-accent-soft`.
- Prefix `cg-` on every class.
- No scroll reveal JavaScript. Sections are static and visible without JS, which
  is what the AI cluster does and what LLM crawlers need.
- Structurally distinct from `ai-global.css`, so that Oman's coding page and
  Oman's AI page do not read as twins to a human or to a crawler.

Star ratings use the literal character, coloured via CSS. No emoji anywhere. No
em dashes anywhere.

## 6. Page anatomy

In order:

1. Own light nav, self contained.
2. Hero: H1, lede, two CTAs, trust strip drawn from `scripts/brand-facts.json`.
3. **Answer capsule**: a 40 to 60 word direct answer to the page's core question,
   inside the first screen. This is the block AI engines lift.
4. Link up to the country hub.
5. Real course cards linking to `/courses/<meta.slug>`.
6. Local curriculum and exam section, dossier slots 1 to 3.
7. The local project brief, dossier slot 8.
8. How live classes work, batch sizes from brand facts.
9. Pricing, section 7.
10. The eight real verified reviews only. No fabricated reviews, ever.
11. FAQ, 8 to 12 questions, mirrored character for character in FAQPage schema.
12. Lead form, section 8.
13. Own footer with cluster and sibling links.

## 7. Pricing rules

Read from `pricing/pricing.config.jsonc` on 2026-08-15:

```
international: group $100, miniBatch null, personal $150
camps international: $200 one time
display.chargeCurrencies.international = USD
```

- **USD only on every page in this cluster.** No AED, OMR, KWD, BHD, HKD, EUR,
  CAD or GBP figures. The rule that a visitor sees exactly one currency is
  absolute, and the charge currency for all international students is USD.
- No mini batch tier on these pages. It is null internationally.
- Retired figures that must never appear: `$40`, `₹7,500`, `₹8,500`, and
  `₹9,999` as a course price. `₹9,999` is a camp fee only.
- No `AggregateRating` schema on any page in this cluster.

## 8. Lead capture

**Corrected 2026-08-15 by reading the live backend.** The earlier assumption that
the backend demands exactly 10 digits is out of date, and acting on it would have
made things worse.

Live rule, identical in all three mounted handlers: `backend/server.js:1871`
(`POST /api/contact/submit`), `backend/server.js:1970`
(`POST /api/callback/request`), and `backend/api/contact/submit.js:160`:

```js
const validationIso = (countryIso || 'IN').toUpperCase();
const phoneRegex = validationIso === 'IN' ? /^[0-9]{10}$/ : /^[0-9]{7,15}$/;
```

`backend/models/Contact.js:55-63` backs this with a loose `^[0-9]{7,15}$` and
dedicated `countryCode`, `countryIso` and `countryName` fields.

So:

- **The backend already accepts international numbers.** Oman 8, Kuwait 8,
  Bahrain 8, Hong Kong 8, Netherlands 9 and United Kingdom 10 to 11 all pass.
- **The real hazard is a missing `countryIso`.** The handler falls back to `'IN'`
  when the field is absent, which applies India's strict 10 digit rule and
  rejects a legitimate 8 digit Oman number. A form that omits `countryIso` is
  the thing that silently drops Tier 1 leads.
- **Do not reuse the zero padding in `src/js/biz-lead-form.js:53-71`.** Padding an
  8 digit Oman number to `0012345678` would store a wrong number in a backend
  that would have accepted the real one. That workaround predates the
  international validation and is now actively harmful here.

### The lead contract for every page in this cluster

Every form on these pages sends:

| Field | Value | Why |
|-------|-------|-----|
| `contact` | the real local digits, no padding, no truncation | backend strips non digits itself |
| `countryIso` | uppercase ISO 2, e.g. `US`, `OM`, `NL`, `GB`, `CA`, `HK` | **required**, absence triggers the India rule and rejects the lead |
| `countryCode` | dial code, e.g. `+1`, `+968`, `+31` | admin display |
| `countryName` | full country name | admin display, avoids "Unknown" |
| `source` | `<slug>-inline` | lead attribution |

Client side, accept 7 to 15 digits and let the backend do the rest.

### Endpoint choice: `/api/contact/submit`, not `/api/callback/request`

The Build-AI cluster posts to `POST /api/callback/request`, whose model
(`backend/models/CallbackRequest.js`) stores only phone, country fields, status,
notes, attribution and demo slot. **It has no name, email or message field**, so
the `source` and `meta: { name, age }` those pages send are silently discarded.
A lead arrives as a bare phone number.

This cluster posts the inline form to `POST /api/contact/submit`, which stores
name, email, contact, message and the country fields. A richer lead is the whole
point of the exercise. The quick-callback path stays available through
`openCallbackModal()` for visitors who only want a call back.

### Attribution

Both handlers pass the request through `buildAttribution`
(`backend/models/leadTracking.js:256`), which expects an `attribution` object:

```
{ formPage, landingPage, referrer, journey, firstSeenAt }
```

`formPage` falls back to the POST's `Referer` header when the client sends
nothing, so pages are attributed even without it, but the header can be
stripped. Every page in this cluster sends `attribution.formPage` explicitly,
set to its own path, plus `referrer` from `document.referrer`.

Note that `source` is **not** a field either handler reads. Any page sending
`source: '<slug>-inline'` and expecting to see it in the admin panel is wrong;
attribution is what carries the page identity.

**No test leads are required.** The validation was read directly from the
backend source, so the earlier plan to submit one probe lead per market, and the
`ZZ Test <market>` tagging convention it needed, is dropped. Nothing junk gets
written into the owner's admin panel.

**Verification**: submit one real test lead per country configuration and confirm
it lands in the admin panel with a usable number. This is part of the page gate,
not an afterthought.

### Timezone wording

The owner has not confirmed that early morning IST staffing is available, so **no
page may promise specific class times in the local timezone.** Approved wording
is that slots are matched to the student's timezone and confirmed on the demo
call. Dossier slot 5 is still researched, because timezone context is useful
prose, but it may not become a scheduling promise. Revisit if staffing is
confirmed later.

## 9. AEO and GEO

The owner's stated goal is that ChatGPT, Claude, Bing and Google surface these
pages. Requirements per page:

- Answer capsule in the first screen, section 6 item 3.
- FAQPage schema matching visible text character for character. The gate checks
  this, because a mismatch is a structured data violation.
- `Course`, `BreadcrumbList` and `EducationalOrganization` schema.
- A `.md` twin at `src/pages/<slug>.md`, routed. LLM crawlers read these
  preferentially. Note that `.md` twins always 404 on the local dev server; that
  is expected and is not a routing bug.
- An `llms.txt` entry, wired by the same script that wires routing so that a
  page cannot be routed without being listed.
- Sourced, checkable facts with named sources. Fabricated statistics are the
  fastest way to lose AI citation and the site has a history of them.
- Bing and IndexNow submission requires owner account access. Flag at the end of
  the cluster, do not attempt.

## 10. Internal linking

A new cluster is born orphaned, which starves it of authority regardless of page
quality. The AI cluster hit exactly this and needed `link-into-ai-cluster.js` to
fix it.

Per page, before it counts as done:

- Up: one link to the country hub, inside the first 300 words.
- Down: the country hub gains a link to the new page.
- Sideways: link to the matching AI cluster page where one exists, and to two
  sibling pages in this cluster.
- Inbound: at least three links from pages outside the cluster.
- Cluster hub link added to `components/footer.html` only. `build:inline` bakes
  it into pages at deploy. Never commit re-inlined `src/pages`.

## 11. Routing and wiring

New script `scripts/wire-coding-global-routes.js`, modelled on
`wire-ai-global-routes.js`, idempotent, handling `_redirects`, `netlify.toml`,
`sitemap-international.xml`, the `.md` twin route, and the `llms.txt` entry in a
single pass.

**Insertion position is critical.** Netlify applies the first matching rule, so
any rule written below a catch all is dead. Verified positions on 2026-08-15:

- `_redirects` line 1487: `/* /src/pages/404.html 404`
- `netlify.toml` line 6335: `from = "/*"`

All new rules go **above** those lines in both files. The two files must stay in
sync, since a page must be routed in both.

Course links are `/courses/<meta.slug>` where the slug lives inside the course
JSON and is not the filename. A wrong slug 404s silently. Verify each with
`ls content/courses/generated/<slug>` before shipping a page.

## 12. Decisions and rationale

- **Kuwait City excluded.** Most of Kuwait's population lives in the capital
  area, so a Kuwait page and a Kuwait City page would overlap enough to threaten
  the uniqueness gate. The 20th slot goes to Maryland instead, a market with no
  overlap risk. Owner decision, 2026-08-15.
- **Surrey rejected in favour of Maryland.** British Columbia's page already
  covers Surrey's catchment, so a Surrey page would cannibalise it.
- **Slug pattern `/coding-classes-in-<state>`** rather than
  `/coding-classes-for-kids-in-<state>`. Keeps cluster consistency and keeps the
  page open to teen and adult courses, which matches the brand's 6 to 67 range.
  The kids intent is captured in the H1, the title tag and a dedicated on page
  section. Owner decision, 2026-08-15.
- **3,000 word floor**, matching the AI cluster gate. Owner decision,
  2026-08-15.
- **Built by hand, sequentially.** Agent built cluster pages previously came in
  at 12.7 percent overlap and needed two dedupe passes. Hand building is both
  the higher quality path and what the owner asked for.

### Known ambiguities accepted

- `/coding-classes-in-georgia` is ambiguous between the US state and the
  country. Accepted, because Atlanta metro intent is strong and the page content
  disambiguates immediately. If the country of Georgia is ever targeted it takes
  a different slug.
- `/coding-classes-in-washington` refers to the state, not DC. The H1 and the
  first paragraph must say so explicitly.

## 13. Brand facts and content rules

Every self referential number comes from `scripts/brand-facts.json`. Never hand
type a stat.

- Students: 10,000+
- Reviews: 547, rated 4.9. This is a Google review rating, never restated as a
  student count.
- Founded: 2020
- Countries: 25+
- Ages: 6 to 67. Do not introduce a fourth age range; the site already has an
  unresolved contradiction elsewhere and this cluster must not add to it.
- Batch sizes: group 5 to 8, mini batch 3 to 4, one to one 1:1.

Prohibited across every page: em dashes, emoji, fabricated reviews, fabricated
statistics, `AggregateRating`, a second currency, and any retired price.

## 14. Build order

Highest value first, because research budget is finite and WebSearch is capped
per session at roughly 200 calls while WebFetch is uncapped and gives better
provenance anyway.

1. **New Jersey** first. Highest value market and the page that invents the
   template. Built fully, shown to the owner, and approved before any other page
   begins.
2. Ontario, then Texas, then California. These prove the template across a
   second country and a second curriculum authority.
3. Remaining US states: New York, Illinois, Virginia, Washington, Georgia,
   Maryland.
4. Remaining Canada: British Columbia, Alberta.
5. Tier 1 markets: Oman, Muscat, Kuwait, Bahrain, Hong Kong, Netherlands. These
   are cheapest, because a researched sibling AI page already exists for each.
6. Leicester, Birmingham last. Hardest to differentiate, so they benefit from
   every lesson the previous 18 pages produce.

One commit per page. Commit and push after every page, because session limits
have previously killed builds mid write and left truncated files on disk.

## 15. Pre flight tooling work, before New Jersey

Verified 2026-08-15 by reading the scripts. Both gate scripts are hardcoded to
the Build-AI cluster and would not work here. This must be fixed before the
first page is written, not discovered on page 14.

**`scripts/verify-cluster-pages.js`**

- Line 61 reads accents with `/\.ag-root\.(ag-[a-z]+)\s*\{[^}]*--ag-accent:/`.
- Lines 99 and 100 parse the FAQ from `<div class="ag-faq-item">`.
- Line 141 requires `ag-root` on the body.
- Line 142 requires a market class from a fixed list of AI cluster codes.

**`scripts/check-cluster-uniqueness.js`**

- Line 38 collects siblings only from
  `/^(learn-to-build-ai|ai-and-machine-learning-classes-in-.+)\.html$/`, so a
  `cg-` page would be compared against no siblings at all.
- `SHARED_COMPONENTS` (lines 99 to 101) strips designed-to-repeat blocks by
  `ag-` class only. On a `cg-` page nothing would be stripped, so course cards,
  reviews, pricing and batch sizes would all count as duplicate prose and the
  overlap number would be inflated and useless.

**Fix**: introduce a small cluster registry in both scripts, keyed by cluster
name, holding the class prefix, the sibling filename pattern, the market code
list, and the shared component classes. Register the existing Build-AI cluster
as the default entry so current invocations behave identically, then add a
`coding-global` entry.

**Regression proof required**: run both scripts against an existing Build-AI
page before and after the change and confirm identical output. The site has a
recorded history of verification that counted passes on broken output, so the
gate itself gets verified before it is trusted.

### Success criterion 2, corrected

The under 6 percent overlap target against the country hub is only meaningful
once `SHARED_COMPONENTS` knows the `cg-` classes. Spokes legitimately share
course cards, batch sizes, reviews and pricing language with their hub. Run the
uniqueness check against New Jersey while it is still half written, to confirm
the signal is usable while the fix is still cheap.

### Backend probe: RESOLVED 2026-08-15, no test leads needed

Answered by reading `backend/server.js:1843-1844`,
`backend/api/contact/submit.js:159-160` and `backend/models/Contact.js:55-63`
rather than by submitting probe leads. The backend already accepts 7 to 15
digits for every country except India. The actual requirement is that each form
sends `countryIso`. See section 8. No records were written to the admin panel.

### Tooling status: DONE 2026-08-15

Both scripts now carry a cluster registry and are proven against the Build-AI
cluster.

`verify-cluster-pages.js`:

- Cluster registry added, `build-ai` and `coding-global`. Optional cluster name
  argument; no argument runs every cluster that has pages.
- **Pre-existing bug found and fixed.** The JSON-LD regex required
  `<script type="application/ld+json">` to close immediately after the type
  attribute. The pricing single-source work on 2026-08-10 added
  `data-price-scope="coding.international"` to those tags, which blinded the
  check and made all 21 Build-AI pages report "no FAQPage schema". The gate had
  been silently red since then. The regex is now attribute tolerant.
- Result: 0/21 before, **21/21 after**, which restores the cluster to its
  documented 2026-07-25 state.

`check-cluster-uniqueness.js`:

- Same registry. Per cluster incumbent lists; `coding-global` compares against
  the country hubs it spokes from and the Build-AI page for the same market.
- `SHARED_COMPONENTS` is now derived from the cluster's class prefix, so `cg-`
  chrome is stripped the way `ag-` chrome always was.
- `cg-course-card` is additionally stripped for this cluster only, because a
  spoke carries the same catalogue as its hub by design. Documented inline.
- Regression proof: output for the Build-AI cluster is byte identical to the
  pre-change baseline, worst overlap still 8.7 percent on Oman.

### Design distinctness, made falsifiable

Section 5's requirement that `coding-global.css` be structurally distinct from
`ai-global.css` governs the six Tier 1 markets, where the same market already
has a page on the same domain with the same brand tokens. Two named structural
differences are gate items, not preferences:

1. No numbered protocol spine. That is the Build-AI identity's signature and it
   does not appear in this cluster.
2. Different section order. The Build-AI pages lead with the project brief;
   these lead with courses and the ladder, with the local project sitting mid
   page.

### Still open, carried forward from page one

1. **The lead payload is unexercised.** Every check run so far is static or
   DOM-level. Nothing has actually POSTed. New Jersey is a US 10 digit number, so
   even a missing `countryIso` would pass there; the bug only bites in Tier 1.
   **Before Oman, submit one real lead from a Tier 1 page** and confirm it lands
   with a callable 8 digit number and the right `attribution.formPage`. Reading
   the backend told us the rule, not that our payload satisfies it.
2. **Uniqueness is untested at n=2.** 0.5 percent overlap is what a cluster of
   one scores. Page two shares the alignment column, the ladder, the how-it-runs
   grid and the FAQ skeleton with page one. **Run
   `check-cluster-uniqueness.js coding-global` as soon as Ontario's draft body
   exists, before polishing it.** If stripping `cg-course-card` proves
   insufficient, learn that at n=2, not n=14.
3. **The Build-AI cluster sends `source` and `meta` that nothing reads**, so its
   21 pages capture no name or age and rely on the `Referer` fallback for
   attribution. Out of scope here, worth a follow-up.

## 16. Non goals

- No new countries beyond Tier 1. Nigeria, Kenya, Philippines, Malaysia, Japan
  and similar high growth markets are deliberately excluded: at $100 per month
  the conversion economics are weak, and thin pages in weak markets dilute the
  strong ones. Revisit if regional pricing is ever introduced.
- No US metro or city pages in this phase. State level carries both the search
  volume and the unique policy hook. Metro pages are a later phase that would
  spoke off these.
- No changes to existing country, Gulf or AI cluster pages beyond adding the
  outbound links described in section 10.
- No pricing changes. This cluster consumes `pricing.config.jsonc`, it does not
  edit it.
- No Bing or IndexNow submission. Owner account required.
