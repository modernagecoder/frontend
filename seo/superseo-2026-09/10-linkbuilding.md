# Link Building — learn.modernagecoders.com

Skill: `superseo:linkbuilding` · Run 2026-09-03

**This is the file that matters most.** Everything else in this folder is on-page work, and the on-page
work on this site is already better than its competitors'. The reason it loses category terms to
Codingal is not markup. It is that Codingal is described by Y Combinator, STEM.org, IIT Roorkee, the
Times of India, YourStory, Indian Express, Mint and Business Standard, and this site is described by
itself.

## Phase assessment: Growth, upper end

| Signal | Reading |
|---|---|
| Age | Founded 2020, so six years. Not foundation phase |
| Content volume | ~764 pages in `src/pages`, 1,010 sitemap URLs. Well past the growth-phase 20-100 band |
| Google Business Profile | Live, **4.9 across 547 real reviews**. A strong, genuine local signal |
| Crunchbase | **Exists** at `crunchbase.com/organization/modern-age-coders`, active, 1-10 employees |
| YouTube | `@ModernAgeCoders`, live |
| Knowledge panel | Not apparent |
| Wikidata | **None** |
| LinkedIn company page | **None found.** Only the founder's personal profile |
| Media coverage | **One** article: Insider News Times, April 2026 |

**Growth phase, held below authority phase by exactly two things: no media footprint and an
unconsolidated entity.** Six years and 764 pages should be producing a knowledge panel. It is not,
and the reasons are fixable and cheap.

## Do foundation work first, even though this is not a foundation-phase site

The playbook says entity stacking is a foundation tactic and the site is past that phase. Do it
anyway, because it was never finished, and because sites that complete entity stacking before
outreach see materially faster authority growth. Outreach into an unconsolidated entity is money
spent teaching Google about a company it cannot yet identify.

### Concrete gaps found, in priority order

**1. Crunchbase exists and is not in `sameAs`.** Free, five minutes, and it is a profile Google
already trusts. The organization's `sameAs` currently lists Facebook, Instagram, YouTube, GitHub and
the Google review page. Add Crunchbase.

**2. There is no LinkedIn company page.** The organization's `sameAs` was pointing at the *founder's
personal* LinkedIn, which I removed this session because an organization's `sameAs` should carry the
organization. That leaves a hole that only a real company page fills. For a B2B-adjacent education
business with a `/for-business` arm, this is a straightforward miss.

**3. No Wikidata entry.** The playbook calls this the secret weapon and it is right: Google pulls
Knowledge Panels directly from Wikidata. Notability is the question, and this business has an unusual
amount of it: a named LLP, a six-year history, a verifiable 547-review Google profile, and one
independent press citation. Worth attempting.

**4. Brand name has three forms in the wild.** "Modern Age Coders", "The Modern Age Coders" (the
founder's LinkedIn headline and the Graphy footer), and "Mahavira Coding Classes" (the Graphy
subdomain). Entity recognition degrades on exactly this. Pick one canonical string and use it
everywhere. `legalName` in schema is a separate question, flagged as action item D.

**5. No X/Twitter presence in `sameAs`.**

Two things checked and found **healthy**, so no work needed:

- `www.modernagecoders.com` 301s cleanly to `learn.modernagecoders.com`, including deep paths like
  `/aboutus`. The stale `www` entries still in the index will drop out on their own. No domain split.
- `mahaviracodingclasses.graphy.com` uses the "Modern Age Coders" brand consistently and already links
  back to the main site.

## An owned asset that is outranking the main site

`mahaviracodingclasses.graphy.com` carries 50+ posts (32 tagged Python, 16 Coding), and one of them,
*"Best Python Training Institute in Kolkata"*, **surfaces for a Kolkata Python query that
`learn.modernagecoders.com` does not rank for at all.** That is the exact gap
`03-semantic-gap-kolkata.md` diagnosed and the new `#python-kolkata` section now addresses.

Graphy is a shared SaaS host, so the subdomain's link equity is limited and it will never be the right
long-term home for this content. Two options, and the first is better:

1. **Move the best-performing Graphy posts onto the main domain**, 301 the originals, and keep Graphy
   for the course-delivery job it exists to do. This consolidates the ranking signal onto the domain
   that sells.
2. Leave them and add contextual links up to the matching main-site page.

Either way, audit those 50 posts for the "world's first" claim removed this session, and for the
stale age ranges in action item A. Owned properties drift out of sync exactly like this.

## Top 3 tactics for the next 90 days

### 1. Resource pages, aimed at universities and career centres · highest confidence

There is direct evidence this works in this niche: the article *"11 Free Online Coding Classes
[Beginner Guide]"* appears syndicated across **three separate university career-centre blogs** (St
Mary's University, North Dakota State, INROADS) in the adult-coding SERP. Those pages link out to
coding resources, they are DR 70-90, and they are actively maintained.

**First action:** search `intitle:resources coding students site:.edu`, plus `.ac.in` and `.ac.uk` for
the markets this site actually serves. Pitch the free-resources hub, `/resources`, and the coding
roadmap. Not the sales pages.

**Expected:** 5-15 referring domains over 90 days, at high authority.

### 2. Digital PR built on the one thing nobody else has: the age span

The business teaches **6 to 67**. Every competitor stops at 18. That is a genuine story hook and it
has never been pitched. "The school where an 8-year-old and a 60-year-old learn the same lesson" is a
feature, not a press release, and Indian education desks run this kind of piece.

The strongest supporting asset would be the age-span dataset proposed in `01-page-audit-homepage.md`:
what six years of teaching 6-to-67 actually taught you about how learning changes with age. Original
data is the most linkable thing this business could publish, and it cannot be fabricated or copied.

**First action:** start from the one journalist who already covered the company (Insider News Times,
April 2026). A second piece from someone who has already written about you is the cheapest media link
there is. And **link to that article from the site**, which currently does not.

### 3. Podcast guesting

Target education, parenting and career-change shows in the 1,000-10,000 listener band. Host links in
show notes are dofollow. The founder is a named, credentialed, linkable entity, which is the
prerequisite, and the 6-to-67 angle gives a booker a reason to say yes.

**Expected:** 3-8 referring domains over 90 days, plus brand search volume, which matters more than the
links do. See below.

## Why brand-building beats link quantity here, specifically

This is the part that connects link building back to what was actually asked for, which was visibility
in AI answers and chatbots rather than rankings.

From the skills' own GEO research:

- **Brand search volume correlates more strongly with AI citation than raw backlink count.**
- **AI Overview citations are decoupling from classical rankings fast:** 38% of citations came from
  top-10 pages in early 2026, down from 76% in mid-2025
  ([Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10/)).
- **Entities described consistently across many independent sources get cited more** than isolated
  ones, regardless of link equity.

So the ordering is not the usual one. Press mentions, podcast appearances and Wikidata beat a pile of
directory links, because they raise brand search and they give language models independent
descriptions of the entity to draw on. **A link you cannot get is still worth pitching if it produces
a sentence about you on someone else's site.** For AI citation, the unlinked mention counts.

## Link velocity

| Period | Target |
|---|---|
| Month 1 | 15-25, mostly entity stacking and citations. This is catch-up, and it is safe because it is foundation work |
| Months 2-3 | 5-10 quality links |
| Months 4-6 | 8-15 |
| Month 7+ | 10-30 |

Anchor safety: no backlink export was available, so Step 3 was skipped. When one exists, keep exact-match
anchors under 5%. For a brand with this much unlinked-mention potential, branded anchors should
dominate anyway.

## What not to do

No PBNs, no link exchanges, no mass directory submissions, no paid guest-post networks. This site's
single strongest asset is that its numbers are true and consistent. A spam profile is the one thing
that would cost more than it buys.
