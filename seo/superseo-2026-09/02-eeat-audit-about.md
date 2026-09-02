# E-E-A-T Audit — https://learn.modernagecoders.com/about

Skill: `superseo:eeat-audit` · Run 2026-09-03 · Scored against the about-page E-E-A-T bar.

## Scorecard

| Signal | Score | Key gap |
|---|---|---|
| Experience | 5/10 | Six years of teaching, and not one teaching observation on the page |
| Expertise | 6/10 | Numbers are consistent and defensible; method is asserted, never evidenced |
| Authoritativeness | 4/10 | No team section, no press section, one external profile link total |
| Trustworthiness | 3/10 | **A verifiably false superlative, repeated on 11 pages, one of them inside FAQ schema** |
| **Total** | **18/40** | |

## What's working

Genuinely good, and worth protecting:

- **The numbers agree with themselves.** 2020, 10,000+, 4.9 across 547 reviews, 25+ countries, ages
  6-67 are identical here, in `brand-facts.json`, and in the schema. Cross-page numeric consistency is
  a named trust signal, and it is why the AI answer for the brand query quoted these figures back
  correctly instead of hedging. Most sites this size cannot do this.
- **Real, checkable contact details.** A street address (1B, JK Ambika Tower, Kolkata 700002), a phone
  number, and an email, all in `PostalAddress` and `ContactPoint` schema. Raters check for exactly this.
- **The legal entity is disclosed:** "Modern Age Coders comes under The Mahaviras Education LLP." Very
  few edtech sites name the operating entity. This is a strong, unglamorous Trust signal.
- **The founder is a linked, external, verifiable entity.** `Shivam Khemka` appears as a `Person` node
  with `@id`, `jobTitle`, and a LinkedIn `sameAs`, and the body links to that profile. That is fix #4
  of the fastest-wins list, already done.
- **Named testimonials with relationships** (Shewta Singh, mother of Ishan; Samridho Mondal, Grade 9)
  rather than "S.K., parent". Real names are checkable, which is the point.
- Solid schema stack: `AboutPage`, `Organization`, `EducationalOrganization`, `Person`, `ContactPoint`,
  `PostalAddress`, `BreadcrumbList`, `OfferCatalog`, 6 `Course`, 2 `Service`.

## What's missing

### 1. The false superlative (Trust, critical)

> "Modern Age Coders is the world's first platform offering integrated maths and coding online."

This is not defensible. Khan Academy released its computer programming curriculum in **August 2012**
alongside a maths curriculum that predates it, which is eight years before this company was founded in
2020. In the live SERP I read for this audit, WhiteHat Jr's own title tag is "Live Online Coding,
**Math** & Music Classes", 98thPercentile sells "Math, English and Coding", and Codeyoung sells
"coding & AI, **math**, english, science". Whoever was actually first, it was not a company founded in
2020.

**Where it appears — 20 instances across 11 pages plus their `.md` twins:**

`about`, `index`, `index2`, `best-coding-classes-online`, `coding-classes-for-girls`,
`maths-class-10`, `online-maths-tuition`, `coding-classes-in-uae`, `coding-classes-in-dubai`,
`ai-classes-in-dubai`, `ai-and-machine-learning-classes-in-uae`, plus the blog posts
`whitehat-jr-alternative` and `best-byjus-alternative`, plus one resource page.

**Why this one matters more than a normal overclaim, three ways:**

- **It is inside FAQ schema.** On `whitehat-jr-alternative` it is an FAQ *answer*: *"Yes! This is our
  biggest differentiator. We are the world's first platform combining coding and maths..."* That gets
  emitted as `FAQPage` structured data, which is the single most machine-readable surface on the site.
  A false claim in structured data is a false claim handed to Google and every LLM pre-parsed.
- **It sits on the two pages that disprove it.** It is on the WhiteHat Jr alternative page and the
  BYJU's alternative page. Any model reading either document sees the superlative and its
  counter-evidence in the same file.
- **It contaminates the true numbers.** This is the real cost. The site's other statistics are unusually
  well-disciplined. An unfalsifiable superlative sitting next to them invites a rater, and an LLM's
  own reliability weighting, to discount the whole set. It also carries live ASCI exposure in India for
  an unsubstantiated superlative, which is the exact rule WhiteHat Jr was censured under.

**The fix is not to hedge it. The fix is to replace a rank claim with a substance claim**, because the
substance is genuinely differentiated and the rank never was.

### 2. No team section (Authoritativeness)

The about-page template calls for `H2: Our team` with an H3, photo, credential and external link per
person. There is none. The founder is in schema and linked once; no instructor is named anywhere on
the page. All three top competitors name people, and two publish founder credentials (IIT Roorkee,
HackerEarth co-founder). A `/team` page exists but is not doing this job.

### 3. No press section (Authoritativeness)

The template calls for `H2: In the press`. There is none, and there is at least one real mention in
the wild (`insidernewstimes.co.in`, April 2026) that the site does not link to. Competitors run
Forbes, Mint, USA Today, Indian Express, Business Standard.

### 4. No experience anywhere (Experience)

Six years, 10,000+ students, ages 6 to 67, and not a single first-person teaching observation. "Our
Story" tells why the company started, not what running it taught anyone. The single richest Experience
asset this business owns is the age span, and the page does not draw one conclusion from it.

### 5. Method asserted, never evidenced (Expertise)

"Coding without maths is incomplete, and maths without coding is abstract" is a good line and a real
thesis. It is stated and then never demonstrated. No worked example, no named research anchor.
Codeyoung anchors its 1:1 model to Bloom's 2-Sigma studies; that is what an evidenced method looks like.

### 6. No "last updated" date (Trust)

Cheapest Trust win there is, and it is absent.

## Fastest wins (under 30 minutes each, ordered by impact)

1. **Remove the false superlative from all 20 instances** and replace with the substance claim:
   *"Modern Age Coders teaches maths and coding as one subject, not two. Coding without maths is
   incomplete, and maths without coding is abstract."* Same rhetorical punch, zero exposure. Fix the
   FAQ-schema instance on `whitehat-jr-alternative` first: it is the machine-readable one. **+3 Trust.**

2. **Add a visible "Last updated" line** to `/about`. **+1 Trust.**

3. **Add an `H2: In the press`** with the one real mention that already exists. One honest logo beats
   an empty section, and it converts an off-site asset the company already earned. **+1 Authoritativeness.**

## Structural recommendations

- **Build a real team section** on `/about` pulling from `/team`: three named mentors, one credential
  each, one external profile link each. Then add `Person` schema per mentor with `sameAs`. Note the
  open NEEDS-FACT chips on `/team` are the blocker here, and they need the owner.
- **Add one experience paragraph** to "Our Story" that only this school could write. The prompt that
  produces it is in `11-expert-interview.md` — question 1 is exactly this.
- **Anchor the coding-plus-maths thesis to named research** so it stops being an opinion.
- **Fix the organization `sameAs`** to carry company profiles rather than the founder's personal
  LinkedIn, which belongs on the `Person` node where it already correctly sits.

## Note on what this audit deliberately does not recommend

The standard E-E-A-T playbook would tell you to add `AggregateRating` to this page and put a
money-back guarantee next to it. **Do not.** Self-serving `AggregateRating` was already removed from
332 pages on this site as a deliberate decision, and the review data is genuine and better served by
the live Google review link that is already there. Adding a guarantee the business does not offer
would create exactly the class of problem this audit's headline finding is about.
