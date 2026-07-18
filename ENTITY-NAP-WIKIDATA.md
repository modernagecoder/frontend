# Phase 8 — Entity, NAP & Wikidata/Crunchbase data pack

Prepared 2026-07-18. This is the ready-to-submit data for the entity trail (Wikidata + Crunchbase + LinkedIn) and the single canonical NAP string. **Items marked 🔴 NEED OWNER need a real value before anything using them can go live** (they must be byte-identical everywhere, so a wrong value is worse than a blank).

I cannot create the Wikidata item or Crunchbase profile myself (they require account creation / external publishing, which I don't do). This pack is so you (or someone on the team) can create them in ~1 hour with consistent, sourced data.

---

## 1. Canonical NAP (Name / Address / Phone) — use this EXACT string everywhere

Once fixed, this string must be identical on: site footer + /contact + /about, Google Business Profile, Wikidata, Crunchbase, LinkedIn, Justdial, Sulekha. ("Street" vs "St." mismatches measurably hurt local ranking.)

| Field | Value | Status |
|---|---|---|
| Brand name | Modern Age Coders | ✅ confirmed |
| Legal name | Modern Age Coders Education | ✅ **owner-confirmed 2026-07-19** (the plan's "The Mahaviras Education LLP" is NOT the entity to use) |
| Registered address | 🔴 **NEED OWNER** — full registered address incl. street, area, Kolkata, PIN. The footer/schema have NO address today (a standing E-E-A-T gap). | missing |
| Phone | +91 9123366161 | ✅ consistent site-wide |
| Email | contact@modernagecoders.com | ✅ |
| Website | https://learn.modernagecoders.com | ✅ |

Once the address + legal name are provided, I will: add the address to the footer + /contact + /about + PostalAddress schema (currently only `addressCountry: IN`), and reconcile `legalName` site-wide.

---

## 2. Wikidata item — property list (each value needs ≥2 sources)

Create at wikidata.org (free, no notability threshold for an organisation). Suggested statements:

| Property | Value | Source(s) |
|---|---|---|
| instance of (P31) | online educational organization / business | site, GBP |
| inception (P571) | 2020 | site (foundingDate), GBP |
| founded by (P112) | Shivam Khemka | /team page, LinkedIn |
| official website (P856) | https://learn.modernagecoders.com | site |
| headquarters location (P159) | Kolkata, West Bengal, India | 🔴 add exact address once confirmed |
| country (P17) | India | site |
| industry (P452) | education / online tutoring | site |
| official name (P1448) | 🔴 legal name (see §1) | registration doc |
| social media: LinkedIn/Instagram/YouTube/Facebook/GitHub | see §4 sameAs | the profiles themselves |
| Google Knowledge/GBP | g.page/r/Cff_QkHNaP9yEAE | GBP |

Target 15–20 statements, each referenced to the site + one independent source (GBP, and press once it exists).

---

## 3. Crunchbase org profile fields

Company name, legal name (§1), founded 2020, founder Shivam Khemka, HQ Kolkata (§1 address), categories = EdTech / Online Education / Coding Bootcamp / Tutoring, website, social links (§4), short description (reuse the homepage description: "Online maths and coding classes for children and adults. Live 1-on-1 and group sessions for ages 6 to 67. Students from 25+ countries.").

---

## 4. sameAs loop (already in the site's Organization schema)

Live and verified:
- https://www.facebook.com/modernagecoders
- https://www.instagram.com/modern_age_coders
- https://www.youtube.com/@ModernAgeCoders
- https://github.com/modernagecoder
- https://www.linkedin.com/in/shivam-khemka-modern-age-coders (founder)
- https://g.page/r/Cff_QkHNaP9yEAE/review (Google Business Profile)

**To close the loop:** once the Wikidata item and Crunchbase profile exist, send me their URLs and I will add both to the Organization `sameAs` in the generators (so every page links out to them, and they link back — the bidirectional trail Google/LLMs follow).

---

## 5. Other Phase 8 items still needing you

- **/team completion:** the founder Person entity + LinkedIn is now in schema, but the visible bio still has open NEEDS-FACT chips. Send: founder credentials, years teaching, a 2-3 sentence bio, and a real photo.
- **Blog authors + avatars:** ✅ RESOLVED (owner decision 2026-07-19) — posts stay attributed to the Organization. Schema is valid (Organization author), and the visible byline avatar is now the real brand logo on all 116 posts (the broken/placeholder avatars are fixed). No per-author headshots needed.
- **/success-stories:** to turn it into 8-10 deep case studies I need real student first names (with consent), class/school, the project, and a parent quote.
