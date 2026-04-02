# Meta Ads Launch Blueprint — Modern Age Coders

**Business:** Modern Age Coders (Coding + Maths Education, Ages 6–65)
**Website:** learn.modernagecoders.com
**Goal:** Lead Generation → Demo Bookings → Sales
**Budget:** ₹5,000/month (~$60 USD)
**Geo:** Worldwide (India primary, English-speaking markets secondary)
**Date:** 2026-03-29

---

## Budget Reality Check

₹5,000/month is a micro-budget. Be upfront about what's achievable:

| Metric | Estimate |
|--------|----------|
| Daily spend | ~₹165/day |
| Estimated CPM (India) | ₹50–150 |
| Estimated CPM (US/UK/UAE) | ₹400–1,200 |
| Estimated impressions/month (India-focused) | 33,000–100,000 |
| Estimated leads/month (India, ₹50–150/lead) | 30–100 leads |
| Estimated leads/month (Global, ₹200–500/lead) | 10–25 leads |

**Recommendation:** Start India-only for the first 2 months. India CPMs are 5–10x cheaper than US/UK. Once you have conversion data and proof of ROI, scale budget and expand geo.

---

## Phase 0: Pre-Launch Setup (Do This Before Spending ₹1)

### 1. Meta Pixel Installation

Add this code to **every page** on learn.modernagecoders.com, inside `<head>`:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

**How to get your Pixel ID:**
1. Go to Meta Events Manager → Data Sources → Add → Web → Meta Pixel
2. Name it "Modern Age Coders Pixel"
3. Copy the Pixel ID and replace `YOUR_PIXEL_ID` above

### 2. Standard Events to Configure

Fire these events on your site:

| Event | Where to Fire | Code |
|-------|--------------|------|
| PageView | Every page (automatic with pixel) | `fbq('track', 'PageView')` |
| ViewContent | Course pages | `fbq('track', 'ViewContent', {content_name: 'Python for Kids', content_category: 'Coding'})` |
| Lead | Demo form submission (Try Coding form) | `fbq('track', 'Lead', {content_name: 'Demo Booking'})` |
| Contact | Callback modal submission | `fbq('track', 'Contact')` |
| Schedule | Demo actually booked/confirmed | `fbq('track', 'Schedule')` |
| Purchase | Course purchased | `fbq('track', 'Purchase', {value: 999, currency: 'INR'})` |

**Priority:** Get `Lead` event firing on your Try Coding form (`#contact`) first. This is your primary conversion event.

### 3. Lead Event on Try Coding Form

Add this to your form's submit handler in `src/js/` (after successful submission):

```javascript
// Fire after form successfully submits
fbq('track', 'Lead', {
  content_name: 'Demo Booking',
  content_category: 'Free Trial'
});
```

### 4. Domain Verification

1. Meta Business Suite → Settings → Brand Safety → Domains
2. Add `learn.modernagecoders.com`
3. Verify via DNS TXT record or meta tag (DNS is more reliable)
4. This is **required** for iOS 14.5+ tracking

### 5. Aggregated Event Measurement (AEM)

1. Events Manager → Your Pixel → Aggregated Event Measurement
2. Configure event priority (highest to lowest):
   - Purchase
   - Schedule
   - Lead
   - Contact
   - ViewContent
   - PageView
3. This ensures iOS users' top-priority conversions are still tracked

### 6. Conversions API (CAPI) — Phase 2

Skip CAPI for now at ₹5K budget. Add it when budget hits ₹25K+/month.
When ready, use a partner integration (Zapier, Google Tag Manager server-side, or manual API).

---

## Phase 1: Campaign Structure (Month 1–2)

### Campaign Architecture

With ₹5,000/month, run **ONE campaign** with **TWO ad sets**. Do not spread thin.

```
Campaign: "Demo Bookings — India"
├── Objective: Leads
├── Budget: ₹5,000/month (Campaign Budget Optimization ON)
│
├── Ad Set 1: "Parents of Kids & Teens"
│   ├── Audience: Parents with children ages 6–17
│   ├── Age: 25–50
│   ├── Location: India (Tier 1 cities first)
│   ├── Language: English
│   ├── Placements: Advantage+ (automatic)
│   ├── Ad 1: Image — kid coding on laptop
│   ├── Ad 2: Video — 15s demo of a kid's project
│   └── Ad 3: Carousel — coding + maths course highlights
│
└── Ad Set 2: "Adults — Self-Learners"
    ├── Audience: Interests in programming, coding, web development, mathematics
    ├── Age: 18–35
    ├── Location: India (Tier 1 cities first)
    ├── Language: English
    ├── Placements: Advantage+ (automatic)
    ├── Ad 1: Image — career upgrade angle
    ├── Ad 2: Video — 15s student testimonial
    └── Ad 3: Carousel — course curriculum preview
```

### Why This Structure

- **1 campaign** = entire ₹5K goes to one learning pool (Meta's algorithm needs ~50 conversions/week to optimize)
- **CBO ON** = Meta auto-allocates budget to whichever ad set performs better
- **2 ad sets** = test kids vs adults; kill the loser after 2 weeks
- **3 ads per ad set** = minimum for Meta to optimize creative delivery

### Tier 1 Cities to Start

Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad

These have highest English-speaking, tech-aware parent density and lowest CPL.

---

## Phase 2: Audience Strategy

### Ad Set 1 — Parents of Kids & Teens

**Detailed Targeting:**
- Parents (all) OR Parents with children (6–8, 8–12, 13–18 years)
- AND Interests: coding for kids, STEM education, online learning, mathematics, Scratch programming, robotics

**Exclusions:**
- Existing leads (create Custom Audience from form submissions)

### Ad Set 2 — Adults Self-Learners

**Detailed Targeting:**
- Interests: Python programming, web development, JavaScript, data science, competitive mathematics
- OR Job titles: student, fresher, software engineer, IT professional
- OR Education: currently in university/college

**Exclusions:**
- Existing leads

### Future Audiences (When Budget Scales to ₹15K+)

| Audience | Type | When to Add |
|----------|------|-------------|
| Website visitors (180 days) | Custom Audience (Retargeting) | After 1,000+ site visitors |
| Lead form openers who didn't submit | Custom Audience | After running Lead forms |
| 1% Lookalike of leads | Lookalike | After 100+ leads |
| 3% Lookalike of leads | Lookalike | After 300+ leads |
| Engaged with Instagram/Facebook page | Custom Audience | After consistent organic posting |
| Video viewers (50%+) | Custom Audience | After running video ads |

---

## Phase 3: Creative Strategy

### Ad Formats to Create

| Format | Use Case | Priority |
|--------|----------|----------|
| **Static Image** | Quick to make, test messaging fast | HIGH — start here |
| **Short Video (15s)** | Reels/Stories, highest engagement | HIGH — week 2 |
| **Carousel** | Show multiple courses/features | MEDIUM — week 3 |
| **Instant Form** | In-app lead capture (no landing page needed) | HIGH — test vs website |

### Creative Angles to Test

**For Parents (Kids & Teens):**

| Angle | Headline | Primary Text |
|-------|----------|-------------|
| Future-proof | "Your Child's First Line of Code" | Most jobs in 2030 will need coding skills. Give your child a 5-year head start with live classes designed for ages 6–17. Book a free demo → |
| Maths + Code | "Maths + Code = Superpowers" | Your child learns Python AND strengthens maths — in one class. 1,000+ students already enrolled. Free demo class this week. |
| Social proof | "Rated ⭐ by 500+ Parents" | "My 8-year-old built a game in 2 weeks!" See what your child can build with Modern Age Coders. Free trial class → |
| Urgency | "Free Demo — Limited Spots" | Only 10 free demo spots left this week. Live coding class for kids 6–17. Your child builds their first project in 60 minutes. |

**For Adults:**

| Angle | Headline | Primary Text |
|-------|----------|-------------|
| Career switch | "Learn to Code in 90 Days" | No prior experience needed. Live classes, real projects, job-ready portfolio. Start with a free demo class. |
| Skill-up | "Python + Maths for Your Career" | Data science, web dev, competitive programming — all taught live by expert instructors. Free trial available. |
| Affordability | "₹999/month — Expert Coding Classes" | Premium live classes at a fraction of bootcamp prices. 1-on-1 doubt clearing included. Try a class free. |

### Creative Specs

| Placement | Size | Format | Max Duration |
|-----------|------|--------|-------------|
| Feed (image) | 1080 × 1080 px | JPG/PNG, <30MB | — |
| Feed (video) | 1080 × 1080 px | MP4, H.264 | 60s (keep under 30s) |
| Stories/Reels | 1080 × 1920 px | MP4 | 15s |
| Carousel | 1080 × 1080 px | JPG/PNG per card | 2–10 cards |

### Creative Refresh Schedule

| Week | Action |
|------|--------|
| 1–2 | Launch 3 image ads per ad set |
| 3 | Add 1 video ad per ad set |
| 4 | Review CTR; pause any ad with CTR <0.5% |
| 5–6 | Refresh copy on winning images; test carousel |
| 7–8 | New creative batch; pause anything with frequency >3.0 |

---

## Phase 4: Lead Capture Strategy

### Option A: Website Landing Page (Your Current Site)

- Send traffic to `learn.modernagecoders.com#contact` (Try Coding form)
- **Pro:** Full pixel tracking, rich page content builds trust
- **Con:** Extra click, page load time matters

### Option B: Meta Instant Form (Recommended for ₹5K Budget)

- Lead form opens inside Facebook/Instagram — no page load
- **Pro:** 2–3x higher conversion rate, instant autofill
- **Con:** Lower lead quality (people submit without reading)
- **Tip:** Add 1 qualifying question: "What age group?" (6–12 / 13–17 / 18+)

### Recommended Instant Form Setup

```
Form Name: "Book Free Demo Class"
Form Type: More Volume (not Higher Intent — at ₹5K you need volume first)

Intro:
  Headline: "Free Demo Coding Class"
  Image: Kid coding on laptop
  Description: "Your child builds their first project in 60 minutes. Live class with expert instructor."

Questions:
  1. Full Name (autofill)
  2. Email (autofill)
  3. Phone Number (autofill)
  4. "Who is the class for?" → Dropdown: My child (6-12) / My teen (13-17) / Myself (18+)

Privacy Policy: Link to your privacy policy page
Thank You Screen:
  Headline: "You're In! 🎉"
  Description: "Our team will call you within 24 hours to schedule your free demo."
  CTA Button: "Visit Our Website" → learn.modernagecoders.com
```

---

## Phase 5: Bidding & Optimization

### Settings

| Setting | Value | Why |
|---------|-------|-----|
| Campaign objective | Leads | Primary goal is demo bookings |
| Optimization event | Lead (Instant Form or Pixel) | Optimize for form submissions |
| Bid strategy | Lowest Cost (no cap) | At ₹5K, don't restrict the algorithm |
| Budget type | Campaign Budget Optimization (CBO) | Let Meta split between ad sets |
| Attribution window | 7-day click, 1-day view | Default, best for lead gen |
| Placements | Advantage+ Placements | Let Meta find cheapest placements |
| Schedule | Run continuously | Don't daypart at this budget |

### Learning Phase

- Meta needs ~50 conversions per ad set per week to exit learning phase
- At ₹5K/month, you'll likely stay in learning phase (this is OK at micro-budget)
- **Do NOT** make changes to ad sets during the first 7 days — let the algorithm learn
- Any edit (audience, budget, creative, bid) resets learning

---

## Phase 6: Scaling Roadmap

| Monthly Budget | Action |
|----------------|--------|
| **₹5K** (now) | 1 campaign, 2 ad sets, India only, Instant Forms |
| **₹10K** | Add retargeting ad set (website visitors), add video creatives |
| **₹15K** | Test 1% Lookalike audience, expand to Tier 2 cities |
| **₹25K** | Add CAPI, test Advantage+ Audience, add UAE/Singapore |
| **₹50K** | Separate campaigns by funnel stage (TOFU/MOFU/BOFU), add US/UK/Canada |
| **₹1L+** | Full international expansion, Advantage+ Shopping if selling courses directly |

---

## Quick Wins — Do This Week

| # | Action | Time | Impact |
|---|--------|------|--------|
| 1 | Create Meta Business Suite account + Ad Account | 30 min | Required |
| 2 | Install Meta Pixel on all pages | 45 min | Critical |
| 3 | Fire `Lead` event on Try Coding form submit | 30 min | Critical |
| 4 | Verify domain in Business Settings | 15 min | Required for iOS |
| 5 | Configure AEM event priorities | 10 min | Required for iOS |
| 6 | Create campaign with Instant Form | 1 hour | Launch! |
| 7 | Design 3 static image ads (1080×1080) | 2 hours | Creative |
| 8 | Set up lead notification (email/CRM) | 30 min | Don't lose leads |

---

## KPIs to Track Weekly

| Metric | Target (Month 1) | Red Flag |
|--------|-------------------|----------|
| Cost per Lead (CPL) | <₹150 (India) | >₹300 |
| CTR (link click) | >1.0% | <0.5% |
| Form completion rate | >30% (Instant Form) | <15% |
| Frequency (7-day) | <2.0 | >3.0 |
| Lead → Demo show rate | >50% | <25% |
| Demo → Sale rate | >20% | <10% |
| ROAS (by month 3) | >3x | <1x |

---

## Common Mistakes to Avoid

1. **Don't split ₹5K across multiple campaigns** — you'll starve the algorithm
2. **Don't change ads in the first 7 days** — learning phase needs stability
3. **Don't target worldwide at ₹5K** — CPMs in US/UK will eat your entire budget in 3 days
4. **Don't skip the Pixel** — without conversion tracking, Meta can't optimize
5. **Don't ignore lead follow-up** — call leads within 1 hour for 5x higher conversion
6. **Don't use "Boost Post"** — always use Ads Manager for proper targeting and tracking
7. **Don't set a bid cap at micro-budget** — let Lowest Cost find your natural CPL first

---

## Tools You'll Need

| Tool | Purpose | Cost |
|------|---------|------|
| Meta Business Suite | Ad account, page management | Free |
| Meta Ads Manager | Campaign creation & management | Free |
| Meta Events Manager | Pixel, CAPI, event tracking | Free |
| Canva / Figma | Ad creative design | Free tier |
| Google Sheets | Lead tracking & follow-up | Free |
| WhatsApp Business | Lead follow-up (India) | Free |

---

*Generated by Meta Ads Launch Blueprint — Modern Age Coders*
*Date: 2026-03-29*
