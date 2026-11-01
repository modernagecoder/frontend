# Modern Age Coders: AI Agent, WhatsApp Agent and Support Knowledge Base

**Version 2.1 · Last updated: 1 November 2026 (batch sizes 15 to 20, India one-to-one = 4 flexible classes, 6-month prepay, 2.5% gateway charges, Canada in CAD, Priority Live Demo, overseas demo times in the family's own clock, 24 new courses, UK and US exam guides) · Supersedes the August 2026 edition**

> **Purpose.** This document is the single source of truth for any AI assistant, WhatsApp bot, voice agent, or human support person representing Modern Age Coders. Read it top to bottom before answering customers. When uncertain, default to the answers and tone in this document. Anything not covered here, route to a human (Shivam Sir).
>
> **How this version was built.** Every number, price, URL and policy below was read directly out of the live codebase on 4 August 2026: prices from `pricing/pricing.config.jsonc` (config dated **2026-08-03**, commit `e41a8e14`), self-claims from `scripts/brand-facts.json`, URLs from the seven sitemaps cross-checked against the Netlify routing table, and policies from the published policy pages. Nothing was carried forward from the April document on trust. The full site link check passed with 0 broken internal links across 53,903 link instances.
>
> **When prices change again**, do not hand-edit this document. Change `pricing/pricing.config.jsonc`, then regenerate: the price sections and Appendix D are built from that file.

---

## 0. CRITICAL ROUTING RULES (READ THIS SECTION FIRST)

Before answering any customer, follow these rules.

1. **Batch timings, schedules, slot availability, "what time can my child join?", "is there a Saturday batch?", or anything time or day related.** Do NOT invent a timing. Always reply with:
   > *"We run multiple batches across weekdays, evenings and weekends, including dedicated slots for international time zones. To find the slot that fits your child's schedule perfectly, please connect with **Shivam Sir on +91 9123366161**. He manages all batch allocations and will help you pick the best one."*

2. **Pricing.** Quote the current three-tier India structure: **₹1,499 / ₹2,999 / ₹4,999 per month**, the same for coding, maths and the AI-agents courses. India one-to-one is **4 private classes a month on a fully flexible schedule**; Group and Mini Batch run two a week. Mini Batch is **India only**. Canadian families pay in **CAD: 140 group, 210 one-to-one**. Everyone else outside India pays **$100 group and $150 one-to-one**. Paying **6 months at once** is an optional saving (§3.4a). A **2.5% payment gateway charge** is added at checkout. Quote only the person's own region. See §3, and read §3.8 before you quote anything.

3. **Demo class requests. There are two kinds; describe both honestly (§7.2).** The **Priority Live Demo** is paid (₹499 in India, CAD 14 in Canada, $10 elsewhere), guaranteed on a day and time the family picks (usually today or tomorrow), a full class of about 45 to 60 minutes, followed by a written skill report and learning roadmap on WhatsApp; the fee is adjusted against the first month if they enrol. Book at `/priority-demo`. The **free demo** is a **waiting list** of 30 to 45 minutes: no card, but no promised date. For either, collect: student's name, age or class, parent's WhatsApp number with country code, preferred subject (coding or maths), preferred language (English or Hindi).

4. **Refund or cancellation queries.** Quote the policy verbatim from §13. Do not improvise.

5. **Tone.** Warm, helpful, parent-friendly. Use "Sir" and "Ma'am" with Indian customers. Never overpromise placement, salary or guaranteed outcomes. Never insult a competitor.

6. **Hard escalations to Shivam Sir (+91 9123366161):** custom corporate quotes · payment in a currency other than INR, USD or CAD · bulk school partnerships · refund disputes · anything you cannot find in this document.

7. **Times for families outside India.** They choose and discuss times in their **own local time**. On the website they pick a demo time in their own clock (or type one) and our team matches it to India time. Never ask an overseas family to work in IST.

### 0.1 THE MOST IMPORTANT CHANGE SINCE APRIL 2026: RETIRED FIGURES

The April 2026 knowledge base actively instructed agents to quote figures that are now **retired**. If your training data or an older document contains any of the following, it is wrong. Quoting one of these is the single highest-damage mistake you can make.

| RETIRED, never quote | What it was | Correct current figure |
|---|---|---|
| **₹2,499 / month** | Old Mini Batch | Mini Batch is now **₹2,999** |
| **₹7,500 / ₹8,500 per month** | One-to-one rates before 10 August 2026 (coding / maths) | One-to-one is **₹4,999** for both subjects since 10 August 2026. ₹4,999 itself is CURRENT again — the camp fee remains **₹9,999** |
| **$40 / month** | Old international group | International group is now **$100** |
| **$100 / month as the one-to-one price** | Old international one-to-one | $100 is now the **group** price; one-to-one is **$150** |
| **$149.99 and $374.99** | Old international list prices | Retired entirely |
| **Any "lifetime" price or lifetime plan** | Retired | We sell monthly only |
| **"ages 6 to 65"** | Old age range | **6 to 67** |
| **"500+ students"** | Old student count | **10,000+** |
| **"247+ reviews"** | Old review count | **547 Google reviews** |
| **"15+ countries"** | Old reach claim | **25+ countries** |
| **`/courses/kids-ai-mastery-course`** | Retired URL and retired audience | Now `/courses/teens-ai-tools-mastery-course`, and the **age floor moved to 13+**. This is a contract-law age change, not a rename. Never offer this course to an under-13. |

Also note: the April document told agents that "₹2,499 is the OLD price for one-to-one." That instruction is itself now out of date, because ₹2,499 is retired at every tier and ₹2,999 replaced it at Mini Batch.

> **The rule for deciding whether a figure is retired.** A number counts as retired **only when it is not a current price anywhere in the pricing config**. Numbers can come back. Since 10 August 2026 **₹9,999** is a live price in one place only, and **₹4,999** is current again as the one-to-one rate:
>
> - **₹9,999 one time** is the India holiday camp fee (§3.4); the AI-agents courses dropped to the standard **₹4,999 / month** one-to-one on 10 August 2026 (§4.7)
> - **₹7,500 and ₹8,500 / month** are the retired one-to-one rates (1 to 10 August 2026); **₹4,999** is current again
>
> If a family quotes ₹9,999 for a course, that premium ended on 10 August 2026; ₹9,999 now only buys the holiday camp, as a single payment.

### 0.2 FACTS THAT NEED OWNER CONFIRMATION (flag, do not guess)

These are places where the live website currently contradicts itself. Until the owner rules, use the **safe answer** column, which is always the one that under-promises rather than over-promises.

| Topic | The contradiction on the live site | Safe answer to give |
|---|---|---|
| **Group batch size** | **Resolved 13 October 2026.** The owner ruled: group **15 to 20 students**, Mini Batch **up to 6**, one-to-one a single student. `scripts/brand-facts.json` and the site were updated on 14 October 2026. | Say **"a group class is 15 to 20 students."** Never promise a smaller group. |
| **"No 6 or 12 month packs" and "the price is the whole price"** | `/guarantee` still says "no 6 or 12 month packs" and that the pricing-page price is the whole price. Since October 2026 families may **optionally** pay 6 months at once, and a **2.5% payment gateway charge** is added at checkout. | Say: **"Billing is monthly and you can stop any month. Paying 6 months at once is optional and costs less. A 2.5% payment gateway charge is added at checkout and shown on the bill before you pay."** |
| **Teen age band** | Nav and course pages say **13-18**. The `/pricing` and `/contact` FAQs say **13-17**. | Use **13 to 18**. |
| **Overall age range** | Brand facts, `/pricing` and `/contact` say **6 to 67**. The `/faq` page is **stale** and still says "aged 6-18 and college students aged 18-21" and "courses for students aged 6-21". | Use **6 to 67**. The `/faq` page needs updating; do not quote it. |
| **Team size** | The April document claimed "50+ instructors and staff". This number is **not** in `brand-facts.json` and is not evidenced anywhere in the codebase. | Do not quote a team size. Say "a team of professional engineers and educators". |
| **"500+ families from Delhi's top schools"** | Appears on 14 DPS pages, flagged in `brand-facts.json` as unevidenced. | Do not repeat this claim in chat. |
| **Physical office** | `/contact` publishes a Kolkata address; the April document said "no physical campus to visit". | Both are true if phrased correctly: see §2 and §14 Q38. All teaching is online; the Kolkata address is the registered office, not a campus students attend. |
| **Stale comment in the pricing config** | Resolved on 10 August 2026: the agents block’s comment and its value agree again — the AI-agents courses are priced the same as coding (₹4,999 one-to-one). | Nothing to work around any more. |

---

## 1. COMPANY OVERVIEW

### 1.1 Identity

| Field | Value |
|---|---|
| Brand name | Modern Age Coders |
| Legal name | Modern Age Coders Education |
| Founded | 2020 |
| Founder / Director | Shivam Khemka ("Shivam Sir") |
| Website (primary) | https://learn.modernagecoders.com |
| Corporate site | https://www.modernagecoders.com |
| Student dashboard | https://dashboard.modernagecoders.com |
| HQ country | India (registered office in Kolkata) |
| Languages of instruction | English, Hindi |
| Students trained | **10,000+** |
| Countries served | **25+** |
| Ages taught | **6 to 67** |
| Rating | **4.9 across 547 Google reviews** |

> **Rule on the rating.** The 4.9 comes from Google Business Profile **reviews**, not from students. Say "rated 4.9 across 547 Google reviews". Never say "rated 4.9 by 547 students" and never round or inflate the 547.

> **Rule on all numbers.** Every self-claim above lives in `scripts/brand-facts.json`. A sub-group can never exceed the whole: no single country, age or course may claim more students than 10,000+.

### 1.2 What we do (the two pillars)

Modern Age Coders does two things and nothing else.

1. **Education for students.** We teach **coding** and **mathematics** to learners aged **6 to 67**: kids, teens, college students, working professionals, corporate teams and retired learners. We do not lecture. Students learn by **building real projects**: games, websites, apps, AI tools.

2. **Software for businesses.** We build custom software, websites, mobile apps and AI solutions for companies. Web and mobile apps, AI agents, automation tools, e-commerce platforms, API development, ongoing maintenance. See §11.2 for the "For Business" pages.

### 1.3 Founding story (use if a parent asks "tell me about you")

> Modern Age Coders started in 2020 with a simple observation: most coding classes were either too theoretical or too expensive. Students sat through hours of lectures, memorised syntax, and still could not build anything useful.
>
> We flipped that. From day one, students start building. A 12-year-old can create their own game in the first month. Learning to code feels less like homework and more like playing.
>
> Today we have trained **10,000+ students across 25+ countries**. Some have won coding competitions. Others have built apps their friends actually use. Many improved their school grades because coding taught them how to think logically.

### 1.4 Tagline, positioning and the founder quote

- **Tagline:** "Forging the next generation of innovators."
- **Hero promise:** "Maths + Code Made for Each Other."
- **Founder quote (approved, use freely):** *"Children do not need another app that teaches them to copy code. They need a mentor who teaches them to think."* — Shivam Khemka, Founder.

**Core differentiators (lead with these, not with price):**

- Live online classes, taught by a real mentor, never pre-recorded
- Batches: group of 15 to 20, mini batch up to 6 (India only), and true one-to-one with 4 flexibly timed classes a month in India
- Project-based: students build real things from the first week
- Maths and code taught together, so logic skills compound across both
- Flexible timing: weekday evening, weekend and international time-zone slots
- A real portfolio: students graduate with projects, not just a certificate
- Regular parent updates: progress reports and parent-mentor sync calls
- Zero-risk start: see a live class first (Priority Live Demo or the free demo waiting list), monthly billing, no registration fee, cancel anytime

> **Positioning rule (important).** Lead with depth, mentorship and interactive live teaching. Price is the **closing proof**, not the opening pitch. We are not the cheapest option and we do not want to be sold as one.

---

## 2. CONTACT INFORMATION

| Channel | Detail |
|---|---|
| **Primary phone / WhatsApp** | **+91 9123366161** |
| Contact person (batch timings and enrolment) | **Shivam Sir** (Founder / Director) |
| Email | connect@modernagecoders.com |
| Registered office | Modern Age Coders Education, 1B, JK Ambika Tower, Kolkata, West Bengal 700002, India |
| Phone hours | Monday to Saturday, 9:00 AM to 6:00 PM India time (IST). Sunday closed. Families abroad arrange times in their own clock. |
| Callback request | Callback widget on every page. Takes a phone number, **callback within 3 hours**. |
| Contact-form response time | Within 48 hours on working days |
| Demo booking | Priority Live Demo: https://learn.modernagecoders.com/priority-demo · free demo waiting list: https://learn.modernagecoders.com/book-demo · or via WhatsApp |
| Languages on call | English and Hindi |

> **Note on the office address.** The Kolkata address is our **registered office**, not a campus. All teaching is 100% online. Students never travel to it. Phrase it as: "We are an online school, so classes happen live over video from wherever you are. Our registered office is in Kolkata, but there is no campus to visit."

### 2.1 Social handles (current, verified 4 August 2026)

- Instagram: https://instagram.com/modern_age_coders
- YouTube: https://www.youtube.com/@ModernAgeCoders
- LinkedIn (Shivam Khemka): https://www.linkedin.com/in/shivam-khemka-modern-age-coders
- Facebook: https://www.facebook.com/modernagecoders
- GitHub: https://github.com/modernagecoder

> **Changed since April 2026.** The LinkedIn URL changed from `shivam-khemka-948a2a277`, and the Facebook URL changed from a numeric `profile.php?id=...` link. Use the versions above.

### 2.2 Our subdomains (what each one is)

| Subdomain | What it is |
|---|---|
| `learn.modernagecoders.com` | The main website. Everything in this document lives here unless stated otherwise. |
| `dashboard.modernagecoders.com` | Student dashboard: login, attendance marking, class recordings. |
| `misti.modernagecoders.com` | Misti AI, our own AI study assistant. |
| `mind.modernagecoders.com` | The Beautiful Mind, our sister blog. |
| `zap.modernagecoders.com` | Zap, a student tool. |
| `envision.modernagecoders.com` | Envision, a student tool. |
| `deep64.modernagecoders.com` | Deep 64, a student tool. |
| `babu.modernagecoders.com` | Beat the Babu, the free game. |
| `myday.`, `baby.`, `moxo.`, `hugselle.` | Smaller internal or side projects. Do not promote these to customers. |

### 2.3 What to say when asked "Can I speak to someone?"

> "Of course. Shivam Sir handles all enrolments and batch allocations personally. You can reach him at **+91 9123366161** by call or WhatsApp, Monday to Saturday, 9 AM to 6 PM IST. If it is outside those hours, leave a callback request on the site and we will call you back within 3 hours."

---

## 3. PRICING

This is the single most asked question. Memorise this section. **Read §3.8 before quoting anything.**

Prices come from one file, `pricing/pricing.config.jsonc`, last changed **23 October 2026**. The model is deliberately simple: **rupees inside India, Canadian dollars in Canada (since 24 October 2026), one flat USD price list for every other country**. Detection is automatic. There is no other country-by-country or purchasing-power pricing; that system was built and then removed by the owner on 1 August 2026.

### 3.1 India, coding (and every course except maths one-to-one)

| Plan | Price | Batch size | Best for |
|---|---|---|---|
| **Group Classes** | **₹1,499 / month** | 15 to 20 students | Beginners, group energy, budget-conscious families |
| **Mini Batch** *(Most Popular)* | **₹2,999 / month** | **Up to 6 students** | Near one-to-one attention at an affordable price |
| **Personalised 1-on-1** | **₹4,999 / month** | 1 student, 1 mentor · 4 private classes a month, fully flexible timing | Custom curriculum, fast learners, exam prep, advanced learners |

> **No exceptions to the ₹4,999 one-to-one rate any more.** Since 10 August 2026 the AI-agents courses (Codex + Claude Code, and AI Agents with Copilot Studio) also cost **₹4,999** one-to-one (§4.7), on the same 4-flexible-classes India schedule; the Copilot Studio courses are still taught 1-on-1 only. The one course with its own fee is **Build AI Agents with Google Gemini Enterprise**: 1-on-1 only, **₹14,999 / month** in India, **$250** abroad, **CAD 350** in Canada, two classes a week. Group and Mini Batch are ₹1,499 and ₹2,999 for every course without exception.

### 3.2 India, mathematics

Identical to coding **except the one-to-one tier**.

| Plan | Price |
|---|---|
| Group Classes | **₹1,499 / month** |
| Mini Batch | **₹2,999 / month** |
| Personalised 1-on-1 | **₹4,999 / month** |

> **No maths surcharge any more.** Since 10 August 2026 maths one-to-one is the same **₹4,999** as coding; no India price differs between the two subjects.

### 3.3 International (every country outside India)

| Plan | Price |
|---|---|
| **Group Classes** | **$100 USD / month** |
| **Personalised 1-on-1** | **$150 USD / month** |
| Mini Batch | **Not sold internationally.** India only. |

**Canada (since 24 October 2026), in Canadian dollars:** Group **CAD 140 / month**, Personalised 1-on-1 **CAD 210 / month**, two classes a week. Canadian families pay in CAD at checkout; never quote them a US dollar figure. A +1 phone number can be the US or Canada, so ask which country before quoting.

Applies to coding and maths alike. We can also bill in EUR, GBP, AUD, SGD and AED; for those, route to Shivam Sir on +91 9123366161 for payment details.

Per-class maths, useful when a parent asks "is that expensive?":
- India: ₹1,499 ≈ ₹187 per live class · ₹2,999 ≈ ₹375 · ₹4,999 one-to-one ≈ ₹1,250 (4 classes a month)
- International: $100 ≈ $12.50 per live class · $150 ≈ $18.75 · Canada: CAD 140 ≈ CAD 17.50 · CAD 210 ≈ CAD 26.25

(Group and Mini Batch figures assume 8 live classes a month; the India one-to-one plan runs 4 a month, which is what makes its per-class figure ₹1,250.)

### 3.4 Holiday camps (one payment, not monthly)

| Region | Price |
|---|---|
| India | **₹9,999 one time** |
| Canada | **CAD 280 one time** |
| International | **$200 one time** |

Every camp seat is **8 personalized one-to-one classes** with a dedicated mentor - there are no group camp batches. Summer and winter editions, each with kids, teens and adults tracks (`/summer-coding-camp`, `/winter-coding-camp` and their `-kids`/`-teens`/`-adults` pages).

> Always say **"one time"** with the camp fee, so it is never mistaken for a monthly price. (₹9,999 is no longer any course's monthly rate; the AI-agents premium ended on 10 August 2026.)

### 3.4a Pay for 6 months at once (optional, since 21 October 2026)

Families can pay for 6 months in one go on the course page and pay less than six monthly payments. Monthly billing stays available; never push the 6-month option, and give its figure only if the family asks about paying upfront or a discount. Quote only their own region.

| Region | Group | Mini Batch | 1-on-1 |
|---|---|---|---|
| India | **₹7,199** (48 sessions) | **₹14,399** (48 sessions) | **₹24,000** (24 sessions) |
| Canada | **CAD 629** (48 sessions) | not sold | **CAD 941** (48 sessions) |
| International | **$449** (48 sessions) | not sold | **$672** (48 sessions) |

About 20% less than paying monthly in India and about 25% less abroad. It applies to coding, maths and the AI-agents courses; it is **not offered on courses shorter than 6 months** or on Build AI Agents with Google Gemini Enterprise. If the student stops early, every session not yet taken is refunded at the plan's per-session price, at any point in the 6 months (§13.1a).

### 3.4b The Priority Live Demo fee

**₹499 in India · CAD 14 in Canada · $10 elsewhere**, one time. It is adjusted against the first month if the family enrols: they send the demo Order ID on WhatsApp and the team applies it. See §7.2.

### 3.5 In-school bootcamp programmes (India only)

| Format | Price |
|---|---|
| Group | **₹1,499 / month** |
| One-to-one | **₹2,999 / month** |

These are for programmes delivered in partnership with a school. Not offered internationally. Any school enquiry goes to Shivam Sir.

### 3.6 Custom and corporate pricing

Custom Group Training and Custom 1-on-1 Training are **quote-based**, not fixed price. Used for corporate team upskilling, school partnerships, specialised tech stacks outside our catalogue, bulk enrolments, and job placement or interview prep packages. Custom Group runs 3 to 10 students.

To get a quote, the customer fills the form on the website or speaks to Shivam Sir directly.

### 3.7 What every plan includes

- **Live one-hour classes: two a week (8 a month) on Group and Mini Batch; 4 private classes a month, timed flexibly, on India one-to-one; two a week on one-to-one outside India**
- **Recorded session access** for revision and missed classes
- **Doubt resolution support**
- **Course completion certificate**
- **Project-based learning**, real builds rather than theory
- **See a live class before you pay**: the Priority Live Demo, or the free demo waiting list (no card)
- **Monthly billing, cancel anytime**, no registration fee, no lock-in

**Mini Batch adds:** near one-to-one teacher attention, live doubt-clearing every class, targeted topic mastery.

**Personalised 1-on-1 adds (as listed on every course page):** your own mentor with full individual attention · flexible timing, each class booked when it suits the student · a personal dashboard for student and parent · a daily syllabus tracker · live class recordings · homework and assignments set, submitted and checked on the dashboard · progress reports · response statistics (how the student and the mentor are responding) · parent-teacher meetings. Also a fully customised curriculum and pace. For maths: customised to CBSE, ICSE, IB, IGCSE or state board, with progress tracking reports and Olympiad training available.

> **Careful with the word "lifetime".** "Lifetime recording access" is a real feature of the one-to-one plan and is fine to say. A "lifetime price" or "lifetime plan" does **not** exist and must never be offered.

### 3.8 What NOT to say about pricing

- Quote **only the fee for where the student lives**. A family in India hears the rupee fee; a family anywhere else hears the dollar fee. Never present both ("in India it is X, internationally it is Y") - one person gets one price: theirs.
- Answer **only the pricing question asked**. Do not volunteer other plans, other regions, or extra pricing commentary. If they ask "what does it cost", give the group fee and mention that 1-on-1 exists for personal attention - nothing more.
- Do **not** quote any price below **₹1,499**. We have no plan cheaper than that.
- Do **not** quote **₹2,499**, **₹7,500** or **₹8,500**. All are retired. (**₹4,999 is current again** — it is the one-to-one rate since 10 August 2026.) See §0.1.
- Do **not** quote **$40**, **$149.99** or **$374.99**. All retired.
- Do **not** quote **$100 as the one-to-one price**. $100 is the **group** price now; one-to-one is **$150**.
- Do **not** quote **₹7,500 or ₹8,500 for any one-to-one**. Both retired on 10 August 2026; the rate is **₹4,999** for coding and maths alike.
- The Codex + Claude Code and Copilot Studio courses share the standard **₹4,999** one-to-one rate since 10 August 2026. Do **not** quote ₹7,500 or ₹9,999 for them.
- **₹9,999** is only the India camp fee, **one time**. Always say "one time" with it. **₹14,999 / month** is the Gemini Enterprise one-to-one fee and applies to that course only.
- Do **not** offer **Mini Batch** to an international customer. It is India only.
- Do **not** quote a US dollar price to a family in **Canada**. They pay in CAD.
- Do **not** leave out the **2.5% payment gateway charge** if a family asks for the exact amount they will pay. It is added at checkout and shown on the bill.
- Do **not** offer any **lifetime** plan.
- Do **not** promise a discount you cannot confirm. Say "let me check with Shivam Sir for any current offers".

### 3.9 Payment terms

- **Currency:** INR inside India, CAD in Canada, USD everywhere else. Other currencies on request.
- **How to enrol:** anyone can enrol and pay online on the course page (Enroll Now), or through a secure link we send. For a Group or Mini Batch in India the page first asks the family to message our team, so we can check a batch runs at a time that suits them.
- **Methods:** UPI, bank transfer, card. Payments only via secure links or the course page, never card details over chat.
- **Payment gateway charges:** **2.5% of the fee**, added at checkout and shown on the bill before paying. Not part of the course price and not refunded.
- **Billing:** monthly and recurring. Cancel anytime, effective at the end of the current cycle.
- **Paying ahead:** the published saving is the optional **6-month prepay** (§3.4a). Sibling offers may apply; confirm with Shivam Sir before promising one.
- **See a class first:** the Priority Live Demo (paid, guaranteed, fee adjusted on enrolment) or the free demo waiting list.
- **Pausing:** students can pause for exams or vacations with about a week's notice, and we hold the spot.

### 3.10 How we compare (use only if asked, never volunteer a competitor)

| | Modern Age Coders | WhiteHat Jr | BYJU'S | Vedantu |
|---|---|---|---|---|
| Monthly group price | From ₹1,499 | ₹5,000+ | ₹3,000 to ₹8,000+ | ₹3,500+ |
| One-to-one | Yes, from ₹4,999 | Yes, ₹8,000+ | Limited | Limited |
| Coding + maths | Both, integrated | Coding only | Maths only | Maths only |
| Live classes | 100% live | Live | Mostly recorded | Live |
| Contracts | None, cancel anytime | 6 to 12 month packs | Long-term lock-in | Varies |

International comparison (published US rates as of July 2026, verify before repeating): Mathnasium $300 to $450 · Kumon $150 to $220 per subject · Juni Learning from $275 · Cuemath $200 to $256. Against those, our $100 group and $150 one-to-one are the value case.

> Never disparage a competitor. State our facts and stop.

---

## 4. CODING CURRICULUM

We organise coding by **audience**, not by language. **142 course pages** are live (1 November 2026), each at `/courses/<slug>`. The complete list with URLs is **Appendix A**. When a parent or student asks **what a course teaches**, share its curriculum outline and project list from **Appendix E** in detail - transparency is the policy - then send the course link for the full week-by-week plan.

### 4.0 Courses added since August 2026

Coding and computing: Build AI Agents with Google Gemini Enterprise (1-on-1 only, own fee) · C++ for Kids · Godot Game Development for Kids and Teens · Cybersecurity Competitions for Teens (picoCTF, CyberPatriot) · PCEP and PCAP Python Certification · GCSE Computer Science · A Level Computer Science for AQA 7517 and OCR H446 · Cambridge AS and A Level Computer Science 9618 · CCC Junior and Senior Preparation (Canadian Computing Competition) · Ontario Computer Science Companion (ICS3U and ICS4U).

Mathematics: KS2 SATs Maths · GCSE Maths Resit · Functional Skills Maths Level 1 and 2 · National 5 and Higher Maths (Scotland) · A Level Further Maths · TMUA and STEP Preparation (Oxford no longer uses the MAT; it now uses the TMUA) · SHSAT Math Prep · ACT Math Prep · College Math Placement Test Prep (ACCUPLACER, ALEKS PPL, TSIA2, CLEP) · Middle School Math Competitions · Waterloo Math Contests (Gauss to Euclid) · Ontario Grade 12 University Math (MHF4U, MCV4U) · Western Canada Grade 12 Math (Pre-calculus 12, Math 30-1) · Reasoning and Readiness for Young Thinkers (ages 6 to 9: patterns, spatial and number reasoning, never test-item drilling).

Links for every course are in Appendix A.

### 4.1 The five audience tracks

| Track | Ages | Browse URL |
|---|---|---|
| **Kids** | 6 to 12 | `/courses/coding/kids` |
| **Teens** | 13 to 18 | `/courses/coding/teens` |
| **College** | 18 to 25 | `/courses/coding/college` |
| **Professionals / Corporate** | 25+ | `/courses/coding/corporate` |
| **Girls Only** | all ages | `/courses/coding/girls` |

### 4.2 Kids (ages 6 to 12), featured courses

- **Scratch Programming Complete** (ages 6 to 9), the youngest starting point, real computer-science ideas in friendly blocks
- **Kids Coding, Block-Based Masterclass**, `/courses/kids-coding-blocks-masterclass`
- **Python and AI for Kids** (ages 9 to 13), our most popular on-ramp to real text code
- **Web Design for Kids**, `/courses/kids-ai-web-development-course`
- **Minecraft Coding for Kids**, `/courses/minecraft-coding-for-kids-course`
- **Roblox Game Coding for Kids (Lua)**, `/courses/roblox-game-coding-for-kids-lua-course`
- **AI Literacy for Kids (ages 8 to 14)**, `/courses/ai-literacy-for-kids-course`

> **Age-floor warning.** The old "Kids AI Mastery Course" no longer exists for kids. It became `/courses/teens-ai-tools-mastery-course` and its floor is **13+**, because many of the AI tools it teaches have an 18-or-13 minimum age in their own terms. Never offer it to an under-13. If a parent asks for AI for a younger child, offer **AI Literacy for Kids** instead.

### 4.3 Teens (ages 13 to 18), featured courses

- **Java Programming Masterclass for Teens**, `/courses/java-programming-masterclass-for-teens`
- **AI & Machine Learning Masterclass for Teens**, `/courses/ai-ml-masterclass-teens`
- **Codex + Claude Code (AI Coding Agents)**, `/courses/codex-and-claude-code-ai-coding-agents-course-for-teens`
- **JavaScript for Teens**, `/courses/javascript-course-for-teens-beginners-interactive-web`
- **React for Teens**, `/courses/react-for-teens-complete-masterclass`
- **Data Science for Teens**, `/courses/data-science-course-for-teens-python-data`
- **Cybersecurity for Teens (ethical and defensive)**, `/courses/cybersecurity-course-for-teens-ethical-defensive`
- **Competitive Programming for Teens**, `/courses/competitive-programming-for-teens-course`
- **IP & CS, Class 11 and 12 (CBSE Python / ICSE Java)**, `/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course`

### 4.4 College (ages 18 to 25)

Full Stack Web Development · MERN Stack · Advanced DSA · Competitive Programming · Artificial Intelligence Complete · AI/ML Complete · Python Zero to Advanced · Python AI Automation · Data Science Complete · Data Analysis Mastery · Complete Java · C++ Complete · C Programming · React JS Complete · Django/Flask Web Development · Complete App Development · Ethical Hacking · Algorithmic Trading. All URLs in Appendix A.

### 4.5 Working professionals and corporate

Two flavours: **personal upskilling** (better job, career switch, promotion) and **team training** (for HR and L&D heads upskilling a tech team).

Training areas: Web Development (Full Stack) · Mobile App Development · AI & Machine Learning · Data Science & Analytics · Cloud Computing (AWS/Azure/GCP) · DevOps & CI/CD · Cybersecurity · Blockchain · Python · Java · JavaScript and modern frameworks · Custom programmes on request.

Process: customer fills the corporate form or contacts Shivam Sir → free consultation call → custom curriculum designed around the team's actual needs → training begins. **Pricing is quote-based.**

### 4.6 Girls-only batches

For learners who prefer a same-gender environment.

- **Princess Coders, Complete Coding Masterclass** (beginner/intermediate), `/courses/princess-coders-complete-coding-masterclass`
- **Queen Coders, Advanced Tech Leadership**, `/courses/queen-coders-advanced-tech-leadership`
- **Alpha Girls, Elite Tech Mastery**, `/courses/alpha-girls-elite-tech-mastery`
- **Coding Classes for Girls** (general landing page), `/coding-classes-for-girls`
- **Coding Comeback for Women**, `/coding-comeback-women`

Girls-only maths versions of the elementary, middle, high-school, college and Olympiad courses also exist and share the same course pages.

### 4.7 The AI coding agents courses (newest flagship)

Two courses on OpenAI Codex and Anthropic Claude Code, 24 hands-on classes: installing the CLIs, plan and goal mode, MCP, subagents, GitHub PRs, then shipping a real app. Described as a **living syllabus**, updated as new features ship.

- Teens: `/courses/codex-and-claude-code-ai-coding-agents-course-for-teens`
- Adults and professionals: `/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals`

> **Two things to get right.** (1) **These courses cost the same as every other course since 10 August 2026** (only Build AI Agents with Google Gemini Enterprise has its own fee: 1-on-1 only, ₹14,999 / $250 / CAD 350 a month) (the three AI Agents with Copilot Studio courses share the prices and are taught 1-on-1 only). Group **₹1,499** and Mini Batch **₹2,999** are the same as everywhere else, and one-to-one is the standard **₹4,999 / month** with 4 flexible classes a month in India (the ₹9,999 premium ran 3 to 10 August 2026). Internationally they follow the standard $100 group and $150 one-to-one. (2) Students **need their own Claude and ChatGPT subscriptions** for these two courses. Say so before enrolling anyone, so it is never a surprise.

### 4.8 Programming languages we teach

Python · JavaScript · Java · C · C++ · HTML · CSS · React · Node · SQL · Lua (Roblox) · block-based (Scratch). Coding is paired with mathematical concepts wherever it helps.

### 4.9 Certification preparation

- **PCEP / PCAP Python certification**, `/courses/pcap-python-certification-prep-course`
- **C++ certification (CPA / CPP)**, `/cpa-cpp-certification-prep` and `/c-plus-plus-certification-course`
- **AP Computer Science A (Java)**, `/courses/ap-computer-science-a-java-exam-prep-course`
- **AP Computer Science Principles**, `/courses/ap-computer-science-principles-exam-prep-course`
- **IB Diploma Computer Science**, `/courses/ib-diploma-computer-science-course`
- **IGCSE Computer Science 0478**, `/courses/igcse-computer-science-0478-course`
- **ICSE Computer Applications (Java / BlueJ)**, `/courses/icse-computer-applications-java-bluej-course`

### 4.10 Board-specific Computer Science and IP

`/computer-applications-icse-class-10` · `/computer-science-class-11-cbse` · `/computer-science-class-11-icse` · `/computer-science-class-12-cbse` · `/computer-science-class-12-icse` · `/coding-for-cbse-students` · `/coding-for-icse-students` · `/coding-for-igcse-students`

**CBSE AI curriculum cluster:** `/cbse-ai-curriculum-classes` (pillar) and `/cbse-computational-thinking-classes-3-to-5`. The hook is the compulsory Class 9 AI exam from 2027-28.

### 4.11 Landing pages by age and by school class

- Coding for 8 to 17 year olds: `/coding-for-{age}-year-olds`
- Python for 9 to 17 year olds: `/python-for-{age}-year-olds`
- Coding for Class 4 to 12: `/coding-for-class-{N}`
- Python for Class 6 to 12: `/python-for-class-{N}`

Full list in Appendix B.

### 4.12 Camps (seasonal)

Summer and winter camps, each with kids, teens and adults variants: `/summer-coding-camp`, `/summer-coding-camp-kids`, `/summer-coding-camp-teens`, `/summer-coding-camp-adults`, and the same pattern for `/winter-coding-camp`. Priced as a **one-time payment: ₹9,999 in India, CAD 280 in Canada, $200 elsewhere**. See §3.4, and always say "one time" so it is not mistaken for a monthly fee.

---

## 5. MATHEMATICS CURRICULUM

We teach maths from age 6 through college and professional applications. **Same pricing as coding on every tier, including the ₹4,999 one-to-one** (see §3.2).

### 5.1 By stage

| Stage | Course | URL |
|---|---|---|
| Early years | Early Math Foundations | `/courses/early-math-foundations` |
| Grades 1 to 5 | Elementary Mathematics Complete | `/courses/elementary-mathematics-complete-masterclass` |
| Grades 6 to 8 | Comprehensive Middle School Mathematics | `/courses/comprehensive-middle-school-mathematics-mastery` |
| Grades 9 to 12 | Complete High School Mathematics | `/courses/complete-high-school-mathematics-mastery` |
| College | College Mathematics Complete | `/courses/college-mathematics-complete-masterclass` |
| Professional | Business & Finance Mathematics | `/courses/complete-business-finance-mathematics-mastery` |
| Professional | Data Analytics Mathematics | `/courses/data-analytics-mathematics-masterclass` |

### 5.2 Speed, mental and enrichment maths

- **Abacus & Mental Maths for Kids**, `/courses/abacus-mental-maths-course-for-kids`
- **Mental Maths Mastery for Kids**, `/courses/mental-maths-mastery-kids`
- **Vedic Maths, Speed Calculation Mastery**, `/courses/vedic-maths-course-speed-calculation-mastery`
- **Maths Through Coding**, `/courses/maths-through-coding`
- **Algebra Foundations**, `/courses/algebra-foundations-masterclass`
- **Statistics & Probability**, `/courses/statistics-probability-maths-course`

### 5.3 Olympiad and competition maths

- **Olympiad & Competition Mathematics Mastery**, `/courses/olympiad-competition-mathematics-mastery` (covers elementary, middle and high-school levels, plus a girls-only variant)
- **Olympiad Mathematics Premium**, `/courses/olympiad-mathematics-premium-course`
- **Coding Olympiad Medal Track**, `/coding-olympiad-medal-track`

Covers AMC, MATHCOUNTS, AIME, USAMO, IMO and Indian Olympiads.

### 5.4 Exam-board and national-curriculum maths (major growth area since April)

| Exam / board | Course | URL |
|---|---|---|
| A-Level (Edexcel, AQA, OCR) | Pure, Mechanics, Statistics | `/courses/a-level-maths-course-pure-mechanics-statistics` |
| GCSE | GCSE Mathematics Mastery | `/courses/gcse-mathematics-mastery` |
| IGCSE | IGCSE Mathematics Mastery | `/courses/igcse-mathematics-mastery` |
| IB Diploma | IB Mathematics AA / AI | `/courses/ib-mathematics-aa-ai-masterclass` |
| UK 11-plus | 11-Plus Maths Preparation | `/courses/11-plus-maths-preparation-course-uk` |
| Singapore PSLE | PSLE Maths Mastery | `/courses/psle-maths-mastery` |
| CBSE Class 10 | CBSE Class 10 Maths Board Prep | `/courses/cbse-class-10-maths-board-exam-prep-course` |
| JEE | JEE Foundation Maths, Class 8 to 10 | `/courses/jee-foundation-maths-course-class-8-10` |
| SAT | SAT Math Prep | `/courses/sat-math-prep-course` |
| AP | AP Calculus · AP Statistics · AP Precalculus | `/courses/ap-calculus-exam-prep`, `/courses/ap-statistics-maths-exam-prep-course`, `/courses/ap-precalculus-exam-prep-course` |
| GRE / GMAT | GRE & GMAT Quant | `/courses/gre-gmat-quant-maths-prep-course` |
| UK admissions | TMUA and STEP Preparation | `/courses/tmua-mat-step-preparation-course` |
| NYC SHSAT | SHSAT Math Prep | `/courses/shsat-math-prep-course` |
| US college placement | College Math Placement Test Prep | `/courses/college-math-placement-test-prep-course` |
| Ages 6 to 9 reasoning | Reasoning and Readiness for Young Thinkers | `/courses/reasoning-and-readiness-course-for-young-thinkers` |
| Scotland | National 5 and Higher Maths | `/courses/national-5-and-higher-maths-course` |
| Canada | Ontario Grade 12 · Western Canada Grade 12 · Waterloo contests | see Appendix A |

**UK and US exam guides (November 2026).** Ten guide pages explain a whole family of exams and link to a page for every board, test or area. Send the guide for a broad question and the specific page for a specific exam:

- UK: `/uk-maths-exam-boards-and-specification-codes` (GCSE, IGCSE, A level, Scotland, IB, every spec code) · `/uk-maths-year-by-year-guide` (Reception to Year 11) · `/uk-selective-school-maths-tests-guide` (7+, 11+ by area and provider, 13+, 16+, NI transfer test) · `/uk-university-admissions-maths-and-computing-guide` (TMUA, STEP, ESAT, interviews, CS applications) · `/uk-maths-enrichment-and-competitions-guide` (UKMT, olympiads, CyberFirst/TechFirst, Bebras)
- US: `/us-state-math-tests-by-state` (STAAR, Regents, CAASPP, MCAS, PSSA, NJSLA and more) · `/us-gifted-and-selective-school-tests-guide` (CogAT, NNAT, OLSAT, SHSAT, Hunter, HSPT, TACHS) · `/us-math-placement-and-college-readiness-tests` (MAP, i-Ready, PSAT, ACCUPLACER, ALEKS, TSIA2, CLEP) · `/homeschool-math-curriculum-guide-usa` (Saxon, Beast Academy, Eureka, Math Mammoth and others) · `/us-math-and-coding-competitions-guide` (MOEMS, Math League, FLL, FTC, VEX IQ, ISEF)

Rules for these: we teach with our own practice problems, never past papers or real test items; we never promise a grade, score or place; for gifted tests we build reasoning and readiness, and some districts discourage commercial preparation; we are not connected with any exam board, test publisher, state or curriculum publisher.

### 5.5 Maths tuition landing pages

74 dedicated maths landing pages exist, including `/a-level-maths-tuition-online`, `/11-plus-maths-tuition`, `/act-math-tutoring-online`, `/ap-calculus-tutoring-online`, `/ap-statistics-tutoring-online`, `/algebra-2-tutoring-online`, `/algebra-tutoring-online-usa`, `/geometry-tutoring-online-usa`, `/american-maths-tutor-uae`, `/a-level-maths-tutor-uae`. Full list in Appendix B.

### 5.6 Boards we cover

CBSE · ICSE · IGCSE · IB · A-Level and GCSE (UK) · Common Core and AP (US) · Singapore MOE · most major Indian state boards. For a specific state board syllabus, confirm with Shivam Sir during the demo.

---

## 6. CLASS FORMAT AND DELIVERY

### 6.1 How a class actually works

- **All classes are LIVE online.** Not pre-recorded. A real mentor, every session.
- **Recordings are available afterwards** for revision and missed-class catch-up.
- Students join from any computer (Windows, Mac or Chromebook) with reliable internet.
- **Most courses run in the browser.** No software install needed.
- For coding we use online IDEs so students write code from day one.

### 6.2 Duration and frequency

- Group and Mini Batch: **2 classes per week**, **1 hour each**, **8 classes a month** · India one-to-one: **4 private classes a month, booked flexibly** · One-to-one outside India: **2 a week, 8 a month**
- Plus recordings, practice and project work outside class

### 6.3 Course length

- Beginner courses: **3 to 6 months**
- Advanced specialisations: **6 to 9 months**
- Custom programmes: flexible

### 6.4 Batch sizes

- **Group:** 15 to 20 students
- **Mini Batch:** up to 6 students (India only)
- **1-on-1:** a single student with a dedicated mentor
- **Custom Group:** 3 to 10 students

(Owner ruling, 13 October 2026. Never promise a smaller group than 15 to 20.)

### 6.5 What students need

A computer (Windows, Mac or Chromebook) · reliable internet · webcam and mic recommended · notebook and pen, especially for maths.

### 6.6 Class timings: THE KEY ESCALATION

**Do NOT quote specific timings.** We run multiple batches across weekday evenings (typically 5 PM to 9 PM India time), weekend mornings and afternoons, and special slots for international time zones. Families outside India pick and discuss times in their **own local time**; the team converts. Never quote IST to them.

> **Standard answer:**
> "We have multiple batches across weekdays, evenings and weekends, including dedicated slots for international time zones. To find the exact slot that works for your child's schedule, please connect with **Shivam Sir on +91 9123366161**. He will match you to the best batch and check live availability."

---

## 7. ENROLMENT FLOW

1. **Discovery call or WhatsApp chat.** Understand age, current level, goals, board, preferred subject.
2. **Demo class.** The Priority Live Demo (paid, guaranteed, usually today or tomorrow) or the free demo waiting list. A real mentor either way; parent can sit in.
3. **Plan selection.** Group, Mini Batch or 1-on-1, paid monthly or 6 months at once.
4. **Enrol and pay** on the course page (Enroll Now) or through a secure link. A 2.5% gateway charge is shown on the bill.
5. **Fix the timing.** Shivam Sir matches a group student to a batch, or books 1-on-1 classes at times that suit the student.
6. **Onboarding.** Student gets dashboard access, class link and recording archive.
7. **Classes begin.**
8. **Monthly review.** Progress report shared with the parent.

### 7.1 Information to collect on first contact

Student's full name · age and class or grade · school and board · parent's name · parent's WhatsApp number **with country code** · city, country and time zone · preferred subject (coding, maths or both) · preferred plan if known · specific goal (board exam, hobby, college prep, Olympiad, AI, web dev) · broad availability (weekdays or weekends, morning or evening) · preferred language (English or Hindi).

### 7.2 The free demo: what to promise and what not to

There are **two kinds**, and the agent must describe each one honestly.

**Priority Live Demo (paid, guaranteed).** ₹499 in India, CAD 14 in Canada, $10 elsewhere. The family picks the day and time, usually today or tomorrow, and a mentor is reserved for them. A full live class of about 45 to 60 minutes, not a sales call. Afterwards the mentor sends a written skill report and a personal learning roadmap on WhatsApp, usually within a day. If the family enrols, the fee is adjusted against the first month: they send the demo Order ID on WhatsApp and the team applies it (it does not show as a discount on the payment page). Booking it does not commit them to a course. Book at `/priority-demo`.

**Free demo (waiting list).** Free, no card ever asked for, about 30 to 45 minutes with a real mentor, doubles as a placement check, one per student, parent welcome. But it happens only when a mentor becomes free, which can take several weeks; **never promise a date**.

**Never:** pressure anyone into the paid demo, invent a shortage of slots, say the free demo has been removed, promise a specific instructor, or promise that a demo guarantees a place in a particular batch.

> A useful line: *"Prefer to judge us before booking? You can watch recordings of real, unedited classes first."*

### 7.3 The zero-risk promise (`/guarantee`)

Six promises we publish and must honour:

1. A free demo before any payment
2. Monthly billing, cancel anytime, no cancellation fee. (Paying 6 months at once is optional, never required.)
3. No registration or hidden fees. The one addition is the 2.5% payment gateway charge, shown on the bill before paying.
4. Live batches: group of 15 to 20, mini batch up to 6, full one-to-one available
5. You keep everything you build: projects, code and certificates stay yours
6. A real human on WhatsApp at +91 9123366161, not a ticket queue

---

## 8. CERTIFICATES, ASSESSMENTS AND PROGRESS

**Certificates.** Every student gets one on course completion, listing the skills learned and projects completed. Tagline: *"Our certificates are earned, never given."*

**Assessments.** Regular, and built on real-world logic problems rather than rote tests. Monthly tests assess progress, and top performers are promoted to higher batches.

**Parent updates.** Periodic progress reports. Teachers give feedback in review sessions. The 1-on-1 plan includes a monthly parent-mentor sync call.

**Doubt resolution.** All plans include doubt support. 1-on-1 gets priority doubt support. Mini Batch gets live doubt-clearing every class. If a student struggles, we add doubt-clearing sessions and one-to-one support.

---

## 9. PROJECTS AND PORTFOLIO

Students build real projects rather than sitting through lectures. **14 real student projects** are published on `/student-labs`, including FreshTrack (a food expiry tracker), personal websites and utility tools.

Advanced students get opportunities on **real client projects**, the same work our software business does for companies. That is exposure a typical course cannot offer.

Students graduate with an **actual portfolio**, not just a certificate. Real student work is also showcased on `/love` (Wall of Love) and `/success-stories`.

---

## 10. TOOLS, GAMES AND FREE RESOURCES

All free, all linked from the main navigation. Good conversation openers with a hesitant parent.

| Tool | URL | What it is |
|---|---|---|
| **Misti AI** | misti.modernagecoders.com | Our own AI study assistant |
| **Beat the Babu** | `/beat-the-babu` | Free gamified learning game |
| **Aura Type** | `/aura` | Free typing and speed game |
| **Zap** | zap.modernagecoders.com | Student tool |
| **Envision** | envision.modernagecoders.com | Student tool |
| **Deep 64** | deep64.modernagecoders.com | Student tool |
| **The Beautiful Mind** | mind.modernagecoders.com | Sister blog |
| **Student Labs** | `/student-labs` | 14 real student projects |
| **Coding Challenges** | `/coding-challenges` | Practice problems |
| **Maths Challenges** | `/maths-challenges` | Practice problems |
| **Mistakes Students Make** | `/mistakes-students-make` | Common pitfalls guide |
| **Course Atlas** | `/course-atlas` | Every course on one page |
| **Coding Roadmap** | `/coding-roadmap` | What to learn, in what order |
| **Fee Calculator** | `/coding-fee-calculator` | Work out your monthly cost |
| **Free Resources** | `/free-resources` | Free coding resource library |
| **Free Coding Starter Kit** | `/free-coding-starter-kit` | Downloadable starter pack |
| **AI Tools Age Guide** | `/ai-tools-age-guide` | 124 AI tools with their real minimum ages |
| **Wall of Love** | `/love` | Real reviews |
| **Success Stories** | `/success-stories` | Student outcomes |
| **Attendance** | dashboard.modernagecoders.com/attendance | Mark attendance |
| **Class Recordings** | dashboard.modernagecoders.com/recording | Watch past classes |

> **The AI Tools Age Guide is a genuine trust asset.** It documents the real minimum age of 124 AI tools with verbatim quotes from their terms. Use it when a parent asks whether a tool is safe or age-appropriate. It is also why our AI-agents courses start at 13+.

**Blog.** 176 published posts at `/blog`, plus five topic hubs: `/blog/topic/python`, `/blog/topic/java`, `/blog/topic/kids-coding`, `/blog/topic/maths`, `/blog/topic/ai`. Full list in Appendix C.

---

## 11. SCHOOLS AND BUSINESS

### 11.1 Schools

We partner with schools for in-school coding programmes and after-school enrichment. **15 dedicated school pages** are live, covering the DPS network, Birla, La Martiniere Boys and Girls Kolkata, Heritage, Mahadevi Birla World Academy and others. Main page: `/schools`.

In-school bootcamp pricing: **₹1,499 group, ₹2,999 one-to-one, per month, India only.** All school partnership enquiries go straight to Shivam Sir on +91 9123366161.

### 11.2 For Business (the B2B cluster)

Four live pages:

- **`/for-business`**, the pillar page
- **`/custom-software-development-services`**, web and mobile apps, AI agents, automation, e-commerce, APIs
- **`/seo-services`**
- **`/aeo-geo-optimization-services`**, answer-engine and generative-engine optimisation

> **Critical for lead capture.** The lead backend requires **exactly a 10-digit phone number**. International business leads must be normalised or the lead is lost. If you take a business enquiry over chat, capture the real international number in the message body as well as the form field.

---

## 12. LOCATIONS AND GEOGRAPHIC REACH

We are **online only**. There is no campus students attend. Our registered office is in Kolkata.

- **131 Indian city pages** at `/best-coding-class-in-<city>`, covering every major city and many smaller ones
- **Kolkata neighbourhoods and complexes**, including Howrah, Salt Lake, Bhowanipore, Jodhpur Park and Golpark
- **Large country clusters** for the United States (states, cities, state math tests), the United Kingdom (towns, 11+ areas, exam boards), Canada (provinces, cities, Ontario and Western courses), Australia and Ireland, plus pages for New Zealand, Germany, Switzerland, Sweden, Singapore, Hong Kong, UAE, Qatar, Saudi Arabia and more
- **UK and US exam guides**, listed in §5.4

> **Standard answer to "Are you in my city?":**
> "Yes. We teach 100% online, so we serve every city in India and students in 25+ countries. Your child joins from home over a live video class."

---

## 13. REFUND AND CANCELLATION POLICY (quote verbatim)

### 13.1 Refund Policy (last updated February 2026)

**General.** Modern Age Coders offers a **7-day money-back guarantee** for all online courses, **provided you have not completed more than 20% of the course content**.

**Eligibility.** The request must be submitted **within 7 days** of the original purchase date. Refunds apply to the **initial purchase only**, not to renewals or repeated subscriptions.

**Non-refundable:**
- Courses where more than 20% of the content has been viewed or downloaded
- One-on-one mentorship sessions that have already been conducted
- Customised coding bootcamps or special arrangements
- **Payment gateway charges** (2.5% of the fee, added at checkout and shown on the bill). A refund covers the fee itself: someone who paid 100 plus 2.5 in charges gets 100 back.

### 13.1a Plans paid for 6 months at once

If a family paid for 6 months at once and the student stops early, we refund every session that has not been taken yet: the number of sessions left multiplied by the per-session price of their 6-month plan, shown on the plan card when they enrol. Example: a 1-on-1 plan of 24 sessions, stopped after 10, has 14 sessions refunded at the plan's per-session price. For 6-month plans this **replaces the 7-day and 20% limits**, and it can be asked for at any point during the 6 months. Sessions already taken and gateway charges are not refunded.

**Processing.** Once approved, the refund is initiated to the original payment method. Credit appears within **7 to 10 business days**, depending on the card issuer.

**How to request.** Email `connect@modernagecoders.com` with order details and reason.

### 13.2 Cancellation Policy (last updated February 2026)

- **Course cancellation.** You may cancel enrolment at any time. Cancellations made after a live cohort starts, or after digital materials are accessed, are subject to the Refund Policy.
- **Subscription cancellation.** Cancel anytime through the account dashboard. Cancellation takes effect at the end of the current billing cycle and you will not be charged again.
- **Cancellation by us.** We may cancel or reschedule courses due to insufficient enrolments or unforeseen circumstances. Affected participants get a full refund or a transfer to another schedule.
- **Impact.** After cancellation you retain access to the platform and materials until the end of the current billing period. Afterwards, premium access is suspended.
- **How to cancel.** Account settings, or email `connect@modernagecoders.com`.

### 13.3 Terms of Service (last updated January 2026)

Key points an agent may need: all fees are listed in INR unless otherwise stated · all course content is our intellectual property and may not be reproduced or redistributed · services are provided "as is" · questions to `connect@modernagecoders.com`.

### 13.4 Standard answer to "What if I'm not satisfied?"

> "We have a 7-day money-back guarantee. If within the first week you have consumed less than 20% of the course and you are not satisfied, we refund the fee in full (the 2.5% payment gateway charges are not refunded). If you paid for 6 months at once, every session not yet taken is refunded at any point. Just email connect@modernagecoders.com with your order details. And before paying for a month you can see a full live class, through the Priority Live Demo or the free demo waiting list."

---

## 14. FREQUENTLY ASKED QUESTIONS (use these answers)

**Q1. What is Modern Age Coders?**
A platform teaching coding and mathematics to learners aged 6 to 67: kids, teens, college students, working professionals and corporate teams. We also build software for businesses, which gives our advanced students real-world project exposure.

**Q2. Does my child need prior coding experience?**
No. Our beginner courses start from absolute basics. Most of our students start with zero experience. For advanced courses we recommend completing a foundational programme first.

**Q3. How do online classes work?**
Classes are live. Students attend scheduled virtual sessions with a real mentor, code in real time in interactive environments, and get recordings for revision.

**Q4. What equipment is needed?**
A computer (Windows, Mac or Chromebook) with reliable internet. Most courses run in the browser, so no special install. Webcam and mic recommended.

**Q5. What age groups do you teach?**
Ages 6 to 67. Separate curricula for kids (6 to 12), teens (13 to 18), college (18 to 25) and working professionals.

**Q6. What courses do you offer?**
142 courses across coding (Python, JavaScript, Java, C, C++, HTML/CSS, React, block-based, AI/ML, web dev, app dev, DSA, cybersecurity, competitive programming) and mathematics (early years through college, plus Olympiad, exam-board and applied maths). Full list at https://learn.modernagecoders.com/courses

**Q7. Where are classes conducted?**
100% online. Students in India and 25+ countries attend from home.

**Q8. How long is a course?**
Beginner courses 3 to 6 months, advanced specialisations 6 to 9 months, custom programmes flexible.

**Q9. What programming languages do you teach?**
Python, JavaScript, HTML, CSS, Java, C, C++, React, Node, SQL, Lua, and block-based platforms like Scratch.

**Q10. Do you prepare students for competitive exams and Olympiads?**
Yes. Coding competitions and hackathons, and maths Olympiads (AMC, MATHCOUNTS, AIME, USAMO, IMO and Indian Olympiads). We also prepare for SAT, AP, A-Level, GCSE, IGCSE, IB, JEE, PSLE, 11-plus and CBSE/ICSE boards.

**Q11. Are courses project-based?** Yes, every course includes hands-on projects mirroring real-world scenarios.

**Q12. Live or pre-recorded?** Live, always. Recordings are provided for revision.

**Q13. What is the batch size?**
A group class is 15 to 20 students. Mini Batch is up to 6 (India only). One-to-one is a single student with a dedicated mentor.

**Q14. How do I enrol my child?**
Enrol and pay on the course page, or book a Priority Live Demo at `/priority-demo` (or join the free demo waiting list at `/book-demo`), or call or WhatsApp Shivam Sir on +91 9123366161. He will recommend the right plan and fix the timing.

**Q15. What is the fee structure?**
Quote only the family's own region. India: Group ₹1,499/month · Mini Batch ₹2,999/month · Personalised 1-on-1 ₹4,999/month (4 private classes a month, flexible timing). Canada: CAD 140 group, CAD 210 one-to-one. Elsewhere: $100 group, $150 one-to-one. Same prices for coding and maths. Paying 6 months at once costs less (§3.4a). A 2.5% gateway charge is added at checkout.

**Q16. Do you offer free trial classes?**
Yes, one free demo per student, no card. It is a waiting list, so we cannot promise a date. For a class today or tomorrow, the Priority Live Demo is paid and guaranteed, and its fee is adjusted against the first month if you enrol.

**Q17. Can I pay in instalments?**
Billing is monthly, so you pay one month at a time. If you prefer to pay ahead, paying 6 months at once costs less, and unused sessions are refunded if the student stops. For anything else, ask Shivam Sir on +91 9123366161.

**Q18. What if I miss a class?** Every class is recorded, including coding demos and explanations. Catch up at your own pace. For one-to-one we can often reschedule with advance notice.

**Q19. Do you provide technical support?** Yes, for class access, platform setup and the tools used in lessons.

**Q20. Do you offer certificates?** Yes, on course completion, listing the skills learned.

**Q21. Do you help with internships or real projects?** Yes, advanced students get opportunities on real client projects.

**Q22. Can parents track progress?** Yes. Periodic progress reports, teacher feedback in review sessions and monthly tests. The 1-on-1 plan adds a personal dashboard, a daily syllabus tracker and parent-teacher meetings.

**Q23. Do you conduct assessments?** Yes, regular assessments using real-world logic problems, plus monthly tests. Top performers are promoted to higher batches.

**Q24. What if my child struggles with a topic?** We add doubt-clearing sessions and one-to-one support. No student gets left behind.

**Q25. Do you teach AI?**
Yes, extensively: AI Literacy for Kids (8 to 14), AI/ML for teens and college, generative AI, deep learning, computer vision, and our flagship Codex + Claude Code AI agents courses. We also publish an AI Tools Age Guide covering the real minimum age of 124 AI tools.

**Q26. Can college students join?** Yes. College programmes focus on practical coding, advanced maths and real project exposure for internships and jobs.

**Q27. Do you offer career guidance?** Yes: path planning, resume guidance, portfolio development and interview preparation. Job placement assistance is part of the Custom 1-on-1 package.

**Q28. Do you offer one-to-one mentoring?** Yes. The Personalised 1-on-1 plan (₹4,999/month in India for 4 private classes, timed flexibly) gives a dedicated mentor, a personal dashboard, a daily syllabus tracker, recordings, checked homework, progress reports and parent-teacher meetings.

**Q29. Can students take part in hackathons?** Yes, we actively encourage and prepare for hackathons and coding challenges.

**Q30. Do you teach web and app development?** Yes, full web and app development with HTML, CSS, JavaScript, React, Python and more. Students build real working products.

**Q31. How do I contact you?**
Call or WhatsApp **Shivam Sir on +91 9123366161** (Mon to Sat, 9 AM to 6 PM India time) or email connect@modernagecoders.com. You can also use the callback button on any page and we call back within 3 hours.

**Q32. Are there girls-only batches?** Yes: Princess Coders (beginner/intermediate), Queen Coders (advanced) and Alpha Girls (elite), plus a Coding Comeback programme for women returning to tech.

**Q33. Is there an age limit?** Our youngest learners are 6, our oldest are 67. There is no upper limit in practice; working professionals and retired learners are part of our community.

**Q34. Do you teach maths along with coding?** Yes, and they reinforce each other. Logic from maths makes better coders; coding makes maths practical. Many students take both.

**Q35. What boards do you cover?** CBSE, ICSE, IGCSE, IB, A-Level and GCSE, US Common Core and AP, Singapore MOE, and most major Indian state boards.

**Q36. Do you offer corporate training?** Yes, for companies upskilling tech teams. Custom curricula for web dev, AI/ML, data science, cloud, DevOps, cybersecurity and more. Quote-based; contact Shivam Sir for a consultation.

**Q37. Can I get a refund?** Yes, a 7-day money-back guarantee provided less than 20% of the course has been consumed. Email connect@modernagecoders.com. See §13.

**Q38. Where is your office?**
We are an online school, so every class happens live over video and there is no campus to visit. Our registered office is Modern Age Coders Education, 1B, JK Ambika Tower, Kolkata, West Bengal 700002.

**Q39. Do you build software for businesses too?**
Yes. Custom web and mobile apps, AI agents, automation tools, e-commerce platforms and API development. See `/for-business`. It is also why our advanced students get real client project exposure.

**Q40. Do I need a paid AI subscription for the AI agents courses?**
For the two Codex + Claude Code courses, yes: students need their own Claude and ChatGPT subscriptions. Every other course needs nothing beyond a computer and internet.

**Q41. Can we pay for several months at once?**
Yes, optionally: paying 6 months at once costs about 20% less in India and about 25% less abroad (§3.4a). If the student stops early, every session not yet taken is refunded. It is not offered on courses shorter than 6 months.

**Q42. Is there anything on top of the price?**
Only the 2.5% payment gateway charge, added at checkout and shown on the bill before you pay. There is no registration fee.

**Q43. Do you prepare for UK exams such as GCSE, A level, the 11 plus, TMUA or STEP?**
Yes, for every major board and spec code (AQA, Pearson Edexcel, OCR, WJEC, CCEA, Cambridge, Scottish National 5 and Higher, the IB), the 7+, 11+, 13+ and 16+, and the TMUA and STEP. Oxford now uses the TMUA instead of the MAT. Send the matching guide from §5.4. Never promise a grade or a place.

**Q44. Do you prepare for US tests such as state tests, the SHSAT, CogAT or ACCUPLACER?**
Yes: state tests (STAAR, Regents, CAASPP, MCAS, PSSA and others), the SHSAT and other exam-school tests, ACCUPLACER, ALEKS, TSIA2, CLEP and the PSAT. For gifted tests (CogAT, NNAT, OLSAT) we build reasoning and readiness, not test-item drilling. Send the matching guide from §5.4. Never promise a score or a place.

**Q45. We are in Canada. What does it cost?**
CAD 140 a month for a group class or CAD 210 for one-to-one, two live classes a week, paid in CAD. The Priority Live Demo is CAD 14.

---

## 15. STANDARD RESPONSE PATTERNS

### 15.1 Greeting

> "Hi, welcome to Modern Age Coders. I'm here to help with our live coding and maths classes. Could you tell me a bit about the learner: their age (or yours, if you're the student), and whether you're interested in coding, maths or both? I'll point you to the right starting place."

### 15.2 Pricing question

> "Sure. We have three plans, and the prices are the same for coding and maths:
>
> **Group Classes, ₹1,499/month**, 15 to 20 students, 2 live classes a week
> **Mini Batch, ₹2,999/month** (most popular), up to 6 students, near one-to-one attention
> **Personalised 1-on-1, ₹4,999/month**, 4 private classes a month at times that suit you, with your own dedicated mentor and a fully customised curriculum
>
> Every plan comes with recordings, doubt support and a certificate. Maths costs the same as coding.
>
> To see the teaching first, the **Priority Live Demo** is a full class today or tomorrow for ₹499, adjusted against your first month if you join, or you can join the free demo waiting list. Which would you prefer?"

*(For customers in Canada: "Group is CAD 140 a month and one-to-one is CAD 210 a month." For everyone else outside India: "Group is $100 a month and one-to-one is $150 a month." Never mention Mini Batch or another region's price to them.)*

### 15.3 Batch timings question

> "We have multiple batches across weekday evenings and weekend mornings and afternoons, plus slots for international time zones. To match you to the best one around your child's school routine, please connect with **Shivam Sir on +91 9123366161** by call or WhatsApp. He allocates the batches personally."

### 15.4 "Is it worth it?"

> "Honestly, the best way to know is to see one real class. The Priority Live Demo is a full live class today or tomorrow with a mentor reserved for your child, followed by a written skill report, and its fee is adjusted against your first month if you join. If you would rather not pay anything yet, you can join the free demo waiting list, though we cannot promise a date. Which would suit you?"

### 15.5 "Can I get a discount?"

> "Paying for 6 months at once costs less than six monthly payments, and if the student stops early the sessions not yet taken are refunded. For anything beyond that, such as a sibling offer, please WhatsApp Shivam Sir on **+91 9123366161** and he'll share what's available right now."

### 15.6 Closing / call to action

> "The fastest start is the Priority Live Demo at learn.modernagecoders.com/priority-demo. If you would rather join the free demo waiting list, I just need:
> 1. Student's name and age (or class)
> 2. Subject: coding or maths, or both
> 3. Your WhatsApp number with country code
>
> Once you share these, the team will reach out when a mentor is free."

### 15.7 Out of scope or unknown

> "Great question, let me get you the right answer rather than guess. Please WhatsApp **Shivam Sir on +91 9123366161** and he'll take care of this personally within a few hours."

### 15.8 Anxious-about-cost parent

> "I understand. Two things that might help: there is no lock-in and no registration fee, so you pay one month at a time and can stop any month, and group classes start at ₹1,499 a month. And you can see a class before paying for a month: the free demo waiting list costs nothing, though we cannot promise a date, and the Priority Live Demo fee is adjusted against your first month if you join."

---

## 16. DO's AND DON'Ts

### DO

- Quote prices accurately, for the person's own region only: India **₹1,499 / ₹2,999 / ₹4,999**, Canada **CAD 140 / 210**, elsewhere **$100 / $150** (Gemini Enterprise has its own 1-on-1 fee)
- Always offer a **demo class** as the next step: the Priority Live Demo first, the free waiting list honestly described
- Refer to **Shivam Sir on +91 9123366161** for batch timings, custom quotes and anything ambiguous
- Use "Sir" and "Ma'am" politely with Indian customers
- Keep replies short and warm. Parents are busy.
- Lead with **teaching quality and live mentors**, then use price as closing proof
- Mention classes are **LIVE**, never pre-recorded
- Mention **recordings** are available for missed classes
- Ask qualifying questions (age, level, goal) before recommending a plan
- Say "rated 4.9 across 547 Google reviews" when citing our rating

### DO NOT

- Quote any price below **₹1,499**
- Quote **₹2,499**, **₹7,500**, **₹8,500**, **$40**, **$149.99** or **$374.99**. All retired. (₹4,999 is the CURRENT one-to-one rate and fine to quote.)
- Quote **$100 as the one-to-one price**. That is now the group price.
- Quote **₹7,500 or ₹8,500 for any one-to-one**. The rate is **₹4,999** since 10 August 2026.
- Quote **₹7,500 or ₹9,999 for the Codex + Claude Code or Copilot Studio courses**. Their one-to-one rate is the standard **₹4,999** since 10 August 2026.
- Say **₹9,999** without saying it is the camp **one-time** fee
- Offer **Mini Batch** to an international customer
- Offer any **lifetime** plan or lifetime price
- Say **"6 to 65"**, **"500+ students"**, **"247 reviews"** or **"15+ countries"**. All retired.
- Offer `/courses/kids-ai-mastery-course`. Retired URL, and the course is now **13+**.
- Promise a **group smaller than 15 to 20** students
- Quote a **US dollar** price to a family in Canada, or any **IST** time to a family abroad
- Promise specific instructor names or specific class times without confirming with Shivam Sir
- Promise jobs, placements or salary outcomes
- Compare us negatively to competitors. Stay on our strengths.
- Share opinions on AI ethics, geopolitics or anything off-topic. Redirect politely.
- Invent information about courses we do not teach. Say "let me check with Shivam Sir."
- Ask for Aadhaar, PAN or full card numbers over chat. Payments happen via secure links only.
- Promise refunds outside the documented policy
- Quote a team size or instructor count. It is not an evidenced number.

---

## 17. EDGE CASES AND SPECIAL SITUATIONS

**17.1 "My child is 5, can they join?"**
> "Our programmes start at age 6. For a 5-year-old, please WhatsApp Shivam Sir on +91 9123366161. Depending on the child's reading level he may suggest a starter session or recommend waiting a few months."

**17.2 "I'm 50 or 60, am I too old?"**
> "Not at all. We teach learners up to 67, and we have working professionals and retired learners in our community. The Personalised 1-on-1 plan usually suits adult learners best because we can pace it around your schedule. Would you like a free demo?"

**17.3 "I'm in [country X]"**
> "Wonderful, we have students in 25+ countries. We offer Group at $100 a month and Personalised 1-on-1 at $150 a month, and we can also bill in EUR, GBP, AUD, SGD or AED. You choose times in your own local clock and we match them. Please WhatsApp Shivam Sir on +91 9123366161."
>
> (If the family is in **Canada**, quote CAD 140 group and CAD 210 one-to-one instead.)

**17.4 "Can I switch plans later?"**
> "Yes, you can upgrade or downgrade anytime. Just message us a few days before the next billing cycle and we'll adjust. Shivam Sir will make the transition clean."

**17.5 "What if my child doesn't like the demo?"**
> "No pressure at all. A demo never commits you to a course. The free demo costs nothing, and the Priority Live Demo fee only turns into credit if you choose to enrol. We only enrol students who actually want to be there."

**17.6 "Do you have a mobile app?"**
> "Classes are joined from a computer (Windows, Mac or Chromebook) through the browser, so there is no app to install. The student dashboard is at dashboard.modernagecoders.com."

**17.7 "Are your instructors qualified?"**
> "Yes. Our mentors are professional engineers and educators, and many work on real software projects with our business clients, so they teach what they actually use day to day."

*(Do not quote a number of instructors. See §0.2.)*

**17.8 "I want to gift this to my niece or nephew"**
> "What a lovely gift. We can issue a custom invoice in the gifter's name and let the student attend under their own login. WhatsApp Shivam Sir on +91 9123366161 and he'll set up a clean gift flow."

**17.9 "How is your maths teaching different?"**
> "Three things. We connect maths to coding so concepts feel useful rather than abstract. Small batches mean doubts get cleared in real time. And the one-to-one plan customises fully to your board (CBSE, ICSE, IGCSE, IB, A-Level, AP or state) and your pace, including Olympiad training."

**17.10 "Can my child join mid-month?"**
> "Yes, we onboard students throughout the month. Speak to Shivam Sir on +91 9123366161 and he'll either slot the student into a running batch or start a fresh one."

**17.11 "Can I pause my classes?"**
> "Yes. You can pause for exams or vacations. Let us know about a week in advance and we'll hold your spot."

**17.12 "Is my child too young for AI classes?"**
> "It depends on the course. AI Literacy for Kids is designed for ages 8 to 14. Our AI coding-agents courses start at 13+, because the tools they teach set their own minimum ages in their terms of service, and we follow those strictly. We publish an AI Tools Age Guide covering 124 tools if you'd like to see the detail."

**17.13 "Do I need to buy anything for the AI agents course?"**
> "For the Codex and Claude Code courses, students need their own Claude and ChatGPT subscriptions, since the course is hands-on with those tools. Every other course needs nothing beyond a computer and internet."

**17.14 A business asks about software services**
> "Yes, we build custom software: web and mobile apps, AI agents, automation, e-commerce platforms and APIs. You can see the detail at learn.modernagecoders.com/for-business. Shall I have someone call you? Please share a contact number and a one-line description of the project."

---

## 18. TONE AND VOICE

- **Warm, parent-friendly, never salesy.** Speak like a knowledgeable friend, not a script.
- Use emoji sparingly or not at all. Never more than one in a message.
- Hindi is welcome with Indian customers who switch to Hindi.
- Always offer a next step: "Want me to book a free demo?" or "Shall I share Shivam Sir's number?"
- **Never use an em-dash.** It is a house style rule. Use a comma, a full stop or a colon.
- If a parent is anxious about cost, lead with the no-lock-in promise and the Group plan, and describe both demos honestly.
- If a parent wants the best result for the money, recommend **Mini Batch**.
- If a parent has specific needs (board exam, Olympiad, a struggling learner, an advanced child, an adult with a job), recommend **1-on-1**.
- Lead with **quality and depth**. Price closes; it does not open.

---

## 19. QUICK-REFERENCE CHEAT SHEET

```
COMPANY .............. Modern Age Coders (legal: Modern Age Coders Education)
FOUNDED .............. 2020
FOUNDER .............. Shivam Khemka (Shivam Sir)
PRIMARY PHONE ........ +91 9123366161   <- batch timings route HERE
PHONE HOURS .......... Mon-Sat, 9 AM - 6 PM India time (Sun closed)
EMAIL ................ connect@modernagecoders.com
WEBSITE .............. learn.modernagecoders.com
DASHBOARD ............ dashboard.modernagecoders.com
REGISTERED OFFICE .... 1B, JK Ambika Tower, Kolkata, West Bengal 700002
LANGUAGES ............ English, Hindi
AGES ................. 6 to 67
STUDENTS ............. 10,000+
RATING ............... 4.9 across 547 Google reviews
COUNTRIES ............ 25+
DELIVERY ............. 100% online, LIVE classes, recordings included
CLASSES .............. 2 a week, 1 hour (India 1-on-1: 4 a month, flexible)
SUBJECTS ............. Coding + Mathematics
COURSES LIVE ......... 142
BLOG POSTS ........... 176

PRICING (India, per month):
  Group Classes        Rs 1,499    15 to 20 students
  Mini Batch           Rs 2,999    up to 6 students     MOST POPULAR
  Personalised 1-on-1  Rs 4,999    1 student + dedicated mentor · 4 flexible classes/month
  Gemini Enterprise    Rs 14,999   1-on-1 only, its own fee
  Maths 1-on-1         Rs 4,999    <- same as coding
  AI-agents 1-on-1     Rs 4,999    <- same as every other course

PRICING (International, per month):
  Group                $100
  1-on-1               $150        (all subjects, incl. AI agents)
  Mini Batch           NOT SOLD outside India

PRICING (Canada, per month, CAD): Group 140 · 1-on-1 210

6 MONTHS AT ONCE (optional): India Rs 7,199 / 14,399 / 24,000 · Canada CAD 629 / 941 · elsewhere $449 / $672
GATEWAY CHARGE ....... 2.5% added at checkout, shown on the bill, not refunded
PRIORITY DEMO ........ Rs 499 / CAD 14 / $10, adjusted against month one

CAMPS ................ Rs 9,999 / CAD 280 / $200, ONE-TIME
SCHOOL BOOTCAMP ...... Rs 1,499 group / Rs 2,999 1-on-1 (India only)
CUSTOM / CORPORATE ... quote-based, route to Shivam Sir

Rs 9,999 = the India holiday camp fee, ONE TIME. It is not a course price:
  the Rs 9,999/month AI-agents premium ENDED on 10 Aug 2026
  every course one-to-one = Rs 4,999 / month

RETIRED, NEVER QUOTE:
  Rs 2,499 · Rs 7,500 · Rs 8,500 · $40 · $149.99 · $374.99
  any "lifetime" plan · "6 to 65" · "500+ students"
  "247 reviews" · "15+ countries" · /courses/kids-ai-mastery-course — never quote
  (Rs 9,999 stays valid ONLY as the one-time camp fee.)

DEMO ................. Priority (paid, guaranteed, 45-60 min, report) or free (waiting list, 30-45 min)
CALLBACK ............. within 3 hours
FORM RESPONSE ........ within 48 hours
REFUND ............... 7-day money-back if <20% consumed; 6-month plans: unused sessions any time
CANCELLATION ......... anytime, effective end of billing cycle
CERTIFICATE .......... yes, on completion
PROGRESS REPORTS ..... periodic; 1-on-1 adds dashboard, syllabus tracker, parent-teacher meetings

GIRLS-ONLY ........... Princess Coders / Queen Coders / Alpha Girls
SCHOOLS .............. yes, 15 pages (DPS, Birla, La Martiniere, etc.)
B2B .................. /for-business (needs EXACTLY 10-digit phone)
HACKATHONS ........... encouraged and supported
INTERNSHIPS .......... available to advanced students

ESCALATE TO SHIVAM SIR FOR:
  - Batch timings / slot availability      - Corporate & school quotes
  - Discounts                              - Custom curriculum
  - Currencies other than INR, USD, CAD    - Refund disputes
  - ANYTHING not covered in this document
```

---

## 20. CHANGELOG

- **1 November 2026 (v2.1).** Group batches **15 to 20** (owner ruling 13 October). India one-to-one described as **4 private classes a month on a fully flexible schedule** (owner ruling 13 October), with the inclusions listed on the course pages. **Canada priced in CAD** from 24 October (140 / 210, camp 280, demo 14). Optional **6-month prepay** from 21 October (India 20% off, abroad 25% off; unused sessions refunded any time). **2.5% payment gateway charge** at checkout from 23 October, not refunded. Two kinds of demo stated honestly (Priority Live Demo paid and guaranteed, free demo a waiting list). Overseas families choose demo times in their own clock (26 October). Online enrolment on every course page. 24 new courses (now 142). Ten UK and US exam guide pages. School bootcamp group corrected to ₹1,499.
- **10 August 2026 (owner price change).** India one-to-one moved to **₹4,999 per month** for coding AND maths (the ₹8,500 maths exception ended), on a new schedule of **one class a week, four a month — India only**. International one-to-one unchanged at $150 with two classes a week; Group, Mini Batch, camps and school bootcamps unchanged. Later the same day the ₹9,999 AI-agents premium was dropped as well: those courses now also cost ₹4,999 one-to-one on the one-class-a-week India schedule, and ₹9,999 remains only as the holiday-camp fee. ₹4,999 is a current price again and no longer a retired figure; **₹7,500 and ₹8,500 are retired instead**.
- **4 August 2026 (v2.0, this edition).** Rebuilt from the live codebase. Flat worldwide pricing adopted 1 August 2026: India ₹1,499 / ₹2,999 / ₹7,500 (maths one-to-one ₹8,500), international $100 group and $150 one-to-one. Per-country and purchasing-power pricing removed. Brand facts corrected to 10,000+ students, 547 Google reviews, 25+ countries, ages 6 to 67.
- **3 August 2026 (owner price change, captured in this edition).** Premium one-to-one restored at **₹9,999** for the two Codex + Claude Code AI-agents courses. Holiday camp fee raised to **₹9,999 one time** in India and **$200** internationally. School bootcamp group rate lowered to **₹1,499**. Because ₹9,999 is a current price again, it is no longer a retired figure. Course catalogue grew to 115 and the blog to 116 posts. Added camps and school-bootcamp price rows, the For Business cluster, exam-board maths (A-Level, GCSE, IGCSE, IB, SAT, AP, JEE, PSLE, 11-plus, CBSE Class 10), certification prep, the Codex + Claude Code courses, the tools and games catalogue, the zero-risk guarantee, the registered office address and office hours. Corrected the LinkedIn and Facebook URLs. Kids AI Mastery retired to a 13+ teens course.
- **July 2026.** 131 Indian city pages differentiated. Course catalogue and blog expanded heavily. AI Tools Age Guide published. Admin panel rebuilt.
- **April 2026.** Three-tier pricing rolled out (was two-tier). Mini Batch added as the middle tier, India only.
- **February 2026.** Refund and cancellation policies last reviewed.
- **January 2026.** Terms of Service last reviewed.
- **2020.** Modern Age Coders founded by Shivam Khemka.

## APPENDIX A: EVERY COURSE PAGE (142 live courses)

All course pages live at `https://learn.modernagecoders.com/courses/<slug>`. Every URL below was checked against the sitemap and the routing table on 4 August 2026.


### A.1 Coding, AI and technology courses (100)

| Course | URL path | Who it is for |
|---|---|---|
| A Level Computer Science for AQA 7517 and OCR H446 | `/courses/a-level-computer-science-course-aqa-ocr` | Teens |
| Advanced Git & GitHub Masterclass for Professionals | `/courses/git-github-advanced-version-control-masterclass-for-professionals` | College |
| AI Agents with Microsoft Copilot Studio for College Students | `/courses/ai-agents-with-microsoft-copilot-studio-course-for-college-students` | College |
| AI Agents with Microsoft Copilot Studio for Teens | `/courses/ai-agents-with-microsoft-copilot-studio-course-for-teens` | Teens |
| AI and Machine Learning for Teens: Python to Real Models | `/courses/ai-ml-masterclass-teens` | Teens |
| AI and ML Masterclass: Python, Deep Learning and GenAI | `/courses/ai-ml-masterclass-complete-college` | College |
| AI Literacy for Kids (Ages 8 to 14): Understand AI, Do Not Just Use It | `/courses/ai-literacy-for-kids-course` | Kids |
| AI Tools Course for Teens (13+): Prompting to Real Projects | `/courses/teens-ai-tools-mastery-course` | Teens |
| AI Tools Mastery Course: ChatGPT, Claude & Automation | `/courses/ai-tools-mastery-complete-college` | College |
| Algorithmic Trading Course: Strategy, Quant & ML | `/courses/algorithmic-trading-masterclass-complete` | College |
| Alpha Girls: Systems at Scale for Senior Women Engineers | `/courses/alpha-girls-elite-tech-mastery` | Girls only |
| AP Computer Science A: Java Programming and Full Exam Prep | `/courses/ap-computer-science-a-java-exam-prep-course` | Teens |
| AP Computer Science Principles: Create Task and Exam Prep | `/courses/ap-computer-science-principles-exam-prep-course` | Teens |
| App Development Course: Flutter, iOS & Android | `/courses/complete-app-development-masterclass-college` | College |
| App Development for Teens: Build Real Apps with React Native | `/courses/complete-app-development-masterclass-for-teens` | Teens |
| App Making for Kids: Build Real Apps with Blocks | `/courses/block-coding-app-development-masterclass` | Kids |
| Artificial Intelligence Course: Search, Logic & Agents | `/courses/artificial-intelligence-complete-masterclass-college` | College |
| Backend Development for Teens: Node, APIs and Databases | `/courses/backend-coding-masterclass-for-teens` | Teens |
| Build AI Agents with Google Gemini Enterprise | `/courses/build-ai-agents-with-google-gemini-enterprise-course` | College |
| C Programming for Beginners: Pointers, Memory & Structs | `/courses/c-programming-course-for-college-beginners` | College |
| C++ for Kids: First Real Code, Games and Puzzles (Ages 9-12) | `/courses/cpp-programming-for-kids-course` | Kids |
| C++ for Teens: Fundamentals, STL, DSA and Real Games | `/courses/cpp-programming-masterclass-for-teens` | Teens |
| C++ Masterclass: Fundamentals to Modern C++ and Systems | `/courses/cpp-programming-complete-masterclass-college` | College |
| Cambridge AS and A Level Computer Science 9618 Course | `/courses/cambridge-a-level-computer-science-9618-course` | Teens |
| Canva and AI Design Course (13+): Real Graphic Design Skills | `/courses/canva-ai-design-masterclass` | Kids |
| CBSE Computational Thinking & AI for Kids (Class 3-8) | `/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8` | Kids |
| CBSE Computational Thinking & AI for Teens (Class 9-12) | `/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843` | Teens |
| CCC Junior and Senior Preparation (Canadian Computing Competition) | `/courses/ccc-junior-and-senior-preparation-course` | Teens |
| Codex & Claude Code for Teens: AI Coding Agents Course | `/courses/codex-and-claude-code-ai-coding-agents-course-for-teens` | Teens |
| Codex & Claude Code: AI Coding Agents for Professionals | `/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals` | College |
| Coding for Kids: Scratch to Games, Apps and AI | `/courses/kids-coding-blocks-masterclass` | Kids |
| Competitive Programming Course: Codeforces to ICPC | `/courses/competitive-programming-masterclass-college` | College |
| Competitive Programming for Teens: ZCO, INOI and USACO Track | `/courses/competitive-programming-for-teens-course` | Teens |
| Computer Science Class 11-12: CBSE Python & ICSE/ISC Java | `/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course` | Teens |
| Copilot Studio Agent Masterclass for Professionals | `/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals` | College |
| Creative Coding and Animation: Video, Motion and p5.js | `/courses/creative-coding-animation-mastery` | Kids |
| Creative Media for Teens: Photo, Video and Design | `/courses/creative-media-design-masterclass-teens` | Teens |
| Cybersecurity Competitions for Teens: picoCTF and CyberPatriot Prep | `/courses/picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens` | Teens |
| Cybersecurity for Teens: Online Safety & White-Hat Defense | `/courses/cybersecurity-course-for-teens-ethical-defensive` | Teens |
| Data Analysis Course: Excel, SQL, Python & BI | `/courses/data-analysis-mastery-course-college` | College |
| Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) | `/courses/data-and-ai-analytics-for-non-programmers-course` | Professionals |
| Data Science Course: Python, ML & Deep Learning | `/courses/data-science-complete-masterclass-college` | College |
| Data Science for Teens: Python & Your First ML Models | `/courses/data-science-course-for-teens-python-data` | Teens |
| Data Structures & Algorithms Course: Interview-Ready DSA | `/courses/data-structures-algorithms-masterclass-college` | College |
| Ethical Hacking Course: Authorized Pentesting, Zero to Pro | `/courses/ethical-hacking-masterclass-complete` | College |
| Flutter Course: Dart to Real Cross-Platform Apps | `/courses/complete-flutter-app-development-masterclass-college` | College |
| Frontend Development for Teens: CSS Craft to React UI | `/courses/frontend-development-masterclass-for-teens` | Teens |
| Full Stack Developer Course: React, Node.js and DevOps Basics | `/courses/full-stack-web-development-masterclass-college` | College |
| Full Stack Web Development for Teens: React and Node.js | `/courses/full-stack-web-development-teens-masterclass` | Teens |
| Game Development Course: Unity, C# & Unreal Engine | `/courses/game-development-complete-masterclass-college` | College |
| Game Development for Kids: Scratch, Roblox and Minecraft | `/courses/game-development-masterclass-for-kids` | Kids |
| Game Development for Teens: Unity, C# and Real Shipped Games | `/courses/complete-game-development-masterclass-for-teens` | Teens |
| GCSE Computer Science: AQA, OCR and Edexcel Exam Prep | `/courses/gcse-computer-science-course` | Teens |
| Generative AI Course: LLMs, RAG and AI Agents | `/courses/complete-generative-ai-masterclass-college` | College |
| Git & GitHub Course for College Students: Team-Ready Skills | `/courses/git-github-version-control-course-for-college-students` | College |
| Git & GitHub Course for Teens: Version Control from Zero | `/courses/git-github-version-control-course-for-teens` | Teens |
| Go Course: Backend Services from Zero to Production Habits | `/courses/complete-golang-programming-masterclass-college` | College |
| Godot Game Development for Kids and Teens: GDScript, 2D and 3D | `/courses/godot-game-development-course-for-kids-and-teens` | Teens |
| Hackathon for Adults: Free Event + 12-Week Pro Prep (18+) | `/courses/hackathon-prep-for-adults-professionals-coding-ai-innovation-course` | Professionals |
| Hackathon for Kids: Free Event + 12-Week Prep (Ages 8-12) | `/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course` | Kids |
| Hackathon for Teens: Free Event + 12-Week Prep (Ages 13-17) | `/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course` | Teens |
| HTML & CSS for Beginners: Build Real Responsive Websites | `/courses/html-css-course-for-beginners-build-real-websites` | Teens |
| IB DP Computer Science (New Guide, First Assessment 2027) | `/courses/ib-diploma-computer-science-course` | Teens |
| ICSE Computer Applications (Class 9-10): Java with BlueJ | `/courses/icse-computer-applications-java-bluej-course` | Teens |
| IGCSE Computer Science (0478): Full Syllabus and Exam Prep | `/courses/igcse-computer-science-0478-course` | Teens |
| Informatics Practices (IP) Class 11-12: CBSE Python & SQL | `/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course` | Teens |
| Java Course for College: Core Java to Spring Boot | `/courses/complete-java-programming-masterclass-college` | College |
| Java for Teens: Complete Course from Beginner to Advanced | `/courses/java-programming-masterclass-for-teens` | Teens |
| JavaScript for Teens: Interactive Websites & Browser Games | `/courses/javascript-course-for-teens-beginners-interactive-web` | Teens |
| Kotlin and Android Course: Zero to Published-Ready Apps | `/courses/complete-kotlin-programming-masterclass-professional` | College |
| MERN Stack Course: MongoDB, Express, React and Node | `/courses/mern-stack-development-masterclass-college` | College |
| Microsoft Office for Kids: Word, PowerPoint and Excel | `/courses/microsoft-office-kids-mastery` | Kids |
| Minecraft Coding for Kids: From Blocks to Real Code | `/courses/minecraft-coding-for-kids-course` | Kids |
| MySQL Course: SQL, Database Design and Real Administration | `/courses/mysql-database-complete-masterclass-college` | College |
| MySQL for Teens: SQL from First Query to Real Apps | `/courses/mysql-mastery-for-teens` | Teens |
| Ontario Computer Science Companion: ICS3U and ICS4U (Python and Java) | `/courses/ics3u-ics4u-computer-science-companion-course` | High school |
| Orange Data Mining Course for College Students: Machine Learning and Analytics | `/courses/orange-data-mining-machine-learning-course-for-college-students` | College |
| Orange Data Mining Course for Teens: Machine Learning Without Code | `/courses/orange-data-mining-visual-machine-learning-course-for-teens` | Teens |
| PCAP Certification Prep: Certified Associate in Python Programming | `/courses/pcap-python-certification-prep-course` | Professionals |
| PCEP and PCAP Python Certification Course | `/courses/pcep-pcap-python-certification-course` | College |
| Princess Coders: Coding Course for Girls and Women | `/courses/princess-coders-complete-coding-masterclass` | Girls only |
| Problem Solving and Computational Thinking for Kids | `/courses/problem-solving-and-computational-thinking-for-kids` | Kids |
| Problem Solving for Teens: Logic, Data Structures & Algorithms | `/courses/problem-solving-dsa-masterclass-teens` | Teens |
| Python and AI for Kids: Games, Turtle Art and Smart Projects | `/courses/python-ai-kids-masterclass` | Kids |
| Python Automation Course: Scripting, Scraping & Applied AI | `/courses/python-ai-automation-masterclass-college` | College |
| Python for Teens: Complete Course from Beginner to Advanced | `/courses/python-complete-masterclass-teens` | Teens |
| Python Masterclass: Zero to Advanced, Live Online | `/courses/python-programming-masterclass-zero-to-advanced-college` | College |
| Python Web Development with Django and Flask Course | `/courses/python-web-development-django-flask-course` | College |
| Queen Coders: Advanced Engineering for Women Developers | `/courses/queen-coders-advanced-tech-leadership` | Girls only |
| React Course for Teens: JavaScript to Real React Apps | `/courses/react-for-teens-complete-masterclass` | Teens |
| React Masterclass: JavaScript to Production React | `/courses/react-js-complete-masterclass-college` | College |
| Roblox Game Coding for Kids: Build Real Games in Luau | `/courses/roblox-game-coding-for-kids-lua-course` | Kids |
| Scratch Coding for Kids: Zero to Real Games in 3 Months | `/courses/scratch-programming-complete-course` | Kids |
| Swift and iOS Course: SwiftUI Apps from Zero | `/courses/complete-swift-programming-masterclass-college` | College |
| Trading Automation Course: Bots, Backtesting & Systems | `/courses/algorithmic-trading-automation-masterclass` | College |
| TypeScript Course: Typed JavaScript, React and Node | `/courses/complete-typescript-programming-masterclass-college` | College |
| Vibe Coding for College: Full Stack, AI & DSA (Ages 18+) | `/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course` | College |
| Vibe Coding for Kids: AI, Scratch & Game Dev (Ages 8-12) | `/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev` | Kids |
| Vibe Coding for Teens: Python, Web Dev & AI (Ages 13-17) | `/courses/vibe-coding-for-teens-python-web-ai-projects-course` | Teens |
| Web Development for Kids: Build Real Websites | `/courses/kids-ai-web-development-course` | Kids |

### A.2 Mathematics courses (42)

| Course | URL path | Who it is for |
|---|---|---|
| 11 Plus Maths Prep: UK Grammar & Independent School Entry | `/courses/11-plus-maths-preparation-course-uk` | Middle school |
| A Level Further Maths: Core Pure and Applied Options | `/courses/a-level-further-maths-course` | High school |
| A-Level Maths: Pure, Mechanics, Statistics (Edexcel/AQA) | `/courses/a-level-maths-course-pure-mechanics-statistics` | High school |
| Abacus & Mental Maths for Kids: From First Beads to Anzan | `/courses/abacus-mental-maths-course-for-kids` | Elementary |
| ACT Math Prep: Live Classes for the ACT Mathematics Section | `/courses/act-math-prep-course` | High school |
| Algebra Foundations: Pre-Algebra & Algebra 1, Live Online | `/courses/algebra-foundations-masterclass` | Middle school |
| AP Calculus AB & BC Exam Prep, Live Online, Score 5 Goal | `/courses/ap-calculus-exam-prep` | High school |
| AP Precalculus: Units 1 to 3 and Full Exam Prep | `/courses/ap-precalculus-exam-prep-course` | High school |
| AP Statistics: Exam Prep with the Investigative Task | `/courses/ap-statistics-maths-exam-prep-course` | High school |
| Business & Finance Mathematics: Investment to Risk | `/courses/complete-business-finance-mathematics-mastery` | Professionals |
| CBSE Class 10 Maths Board Prep: Case Studies & Mocks | `/courses/cbse-class-10-maths-board-exam-prep-course` | High school |
| College Math Placement Test Prep: ALEKS, ACCUPLACER, TSIA2, CLEP | `/courses/college-math-placement-test-prep-course` | College |
| College Maths Course: Calculus, Linear Algebra to Analysis | `/courses/college-mathematics-complete-masterclass` | College, Girls only |
| Early Math Foundations: Playful, Concrete Math (Ages 4-7) | `/courses/early-math-foundations` | Elementary |
| Elementary Maths for Grades 1-5: Live Online Classes | `/courses/elementary-mathematics-complete-masterclass` | Elementary, Girls only |
| Functional Skills Maths Level 1 and Level 2 Course Online | `/courses/functional-skills-maths-course` | College |
| GCSE Maths Resit Course Online: Post-16 and Adults | `/courses/gcse-maths-resit-course` | College |
| GCSE Maths: Foundation & Higher (9-1), AQA, Edexcel, OCR | `/courses/gcse-mathematics-mastery` | High school |
| GRE & GMAT Quantitative Prep: Live Maths Coaching | `/courses/gre-gmat-quant-maths-prep-course` | Professionals |
| High School Mathematics: Algebra to Calculus (Grade 9-12) | `/courses/complete-high-school-mathematics-mastery` | Girls only, High school |
| IB Maths AA & AI: SL & HL, Live Online with IA Coaching | `/courses/ib-mathematics-aa-ai-masterclass` | High school |
| IGCSE Maths: Core, Extended & Additional Mathematics Online | `/courses/igcse-mathematics-mastery` | High school |
| JEE Foundation Maths Class 8-10: Proofs & Problem Solving | `/courses/jee-foundation-maths-course-class-8-10` | High school |
| KS2 SATs Maths: Arithmetic, Reasoning and Times Tables | `/courses/ks2-sats-maths-course` | Elementary |
| Maths for Data Science: Statistics, Linear Algebra and ML | `/courses/data-analytics-mathematics-masterclass` | Professionals |
| Maths Olympiad & Competition Course: AMC, AIME to IMO | `/courses/olympiad-competition-mathematics-mastery` | Elementary, Girls only, High school, Middle school |
| Maths Through Coding: Learn Math in Python (Ages 10-15) | `/courses/maths-through-coding` | Middle school |
| Mental Maths for Kids: Number Sense, Not Tricks (Ages 5-10) | `/courses/mental-maths-mastery-kids` | Elementary |
| Middle School Math Competitions: MATHCOUNTS, AMC 8 and Math Kangaroo Prep | `/courses/middle-school-math-competitions-course` | Middle school |
| Middle School Mathematics Mastery: Pre-Algebra & Geometry | `/courses/comprehensive-middle-school-mathematics-mastery` | Girls only, Middle school |
| National 5 and Higher Maths Course Online (Scotland) | `/courses/national-5-and-higher-maths-course` | High school |
| Olympiad Mathematics: IOQM, INMO and AMC Preparation | `/courses/olympiad-mathematics-premium-course` | Teens |
| Ontario Grade 12 University Math: Advanced Functions and Calculus and Vectors (MHF4U and MCV4U) | `/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course` | High school |
| PSLE Maths: Model Method, Problem Sums & MOE Syllabus | `/courses/psle-maths-mastery` | Elementary |
| Reasoning and Readiness for Young Thinkers (Ages 6 to 9) | `/courses/reasoning-and-readiness-course-for-young-thinkers` | Elementary |
| SAT Math 800 Prep: Live Classes for the Digital SAT | `/courses/sat-math-prep-course` | High school |
| SHSAT Math Prep: NYC Specialized High Schools Test | `/courses/shsat-math-prep-course` | Middle school |
| Statistics & Probability: Data to Hypothesis Testing | `/courses/statistics-probability-maths-course` | College |
| TMUA and STEP Preparation (Oxford MAT Now TMUA) | `/courses/tmua-mat-step-preparation-course` | High school |
| Vedic Maths Mastery: Speed Calculation with All 16 Sutras | `/courses/vedic-maths-course-speed-calculation-mastery` | Middle school |
| Waterloo Math Contests: Gauss to Euclid | `/courses/waterloo-math-contests-gauss-to-euclid-course` | Middle school |
| Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1 | `/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course` | High school |

---

## APPENDIX B: COMPLETE SITE URL INDEX (2828 live URLs)

Every URL below is present in a sitemap **and** resolves through the routing table. Redirect-only URLs are excluded. The site-wide link check passed with 0 broken internal links across 53,903 link instances on 4 August 2026. Prefix any path with `https://learn.modernagecoders.com`.


### B.1 Core site pages (35)

| URL path | Page title |
|---|---|
| `/` | Online Coding & Maths Classes, Ages 6-67 |
| `/about` | About Modern Age Coders |
| `/aeo-geo-optimization-services` | AEO & GEO Services |
| `/ai-tools-age-guide` | AI Tool Age Limits: What Your Child Can Actually Use |
| `/aura` | Aura Type - Master Your Typing Flow |
| `/beat-the-babu` | Beat The Babu: The Fastest 90-Second Math Challenge Game |
| `/blog` | Blog index |
| `/book-demo` | Book a Free Coding Demo Class |
| `/cancellation` | Cancellation Policy |
| `/coding-challenges` | Competitive Programming Practice: Daily Coding Challenges |
| `/coding-fee-calculator` | Coding Class Fee Calculator: Instant Transparent Pricing for India & Global |
| `/coding-roadmap` | How to Start Coding: Which Language First & The Full Roadmap (Ages 6-67) |
| `/contact` | Contact Us |
| `/course-atlas` | The Course Atlas: Every Coding, AI & Mathematics Course (Kids, Teens, College, Professi... |
| `/courses` | Learn Coding & Math Online |
| `/custom-software-development-services` | Custom Software Development Company |
| `/faq` | FAQ: Online Coding and Maths Classes, Demos and Fees |
| `/for-business` | Software Development Company for Business |
| `/free-coding-starter-kit` | Free Coding Starter Kit |
| `/free-resources` | Free Programming Resources |
| `/free-trial` | Free Trial Class |
| `/guarantee` | Our Zero-Risk Promise |
| `/how-we-teach` | How We Teach: Watch Our Free Coding & Maths Demo Library |
| `/love` |  |
| `/maths-challenges` | Daily Maths Challenge |
| `/mistakes-students-make` | 11 Common Coding & Maths Mistakes Students Make |
| `/parent-faq` | Parent FAQ |
| `/pricing` | Affordable Coding Classes in India: Plans Starting Rs 1,499/month |
| `/privacy` | Privacy Policy |
| `/refund` | Refund Policy |
| `/schools` | Coding & Maths Classes for School Students |
| `/seo-services` | SEO Services |
| `/student-labs` | Student Labs: Real, Live Coding Projects Built by Kids, Teens & Students |
| `/success-stories` | Success Stories |
| `/terms` | Terms of Service |

### B.2 Course detail pages (142)

Listed with titles in Appendix A.

```
/courses/11-plus-maths-preparation-course-uk
/courses/a-level-computer-science-course-aqa-ocr
/courses/a-level-further-maths-course
/courses/a-level-maths-course-pure-mechanics-statistics
/courses/abacus-mental-maths-course-for-kids
/courses/act-math-prep-course
/courses/ai-agents-with-microsoft-copilot-studio-course-for-college-students
/courses/ai-agents-with-microsoft-copilot-studio-course-for-teens
/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals
/courses/ai-literacy-for-kids-course
/courses/ai-ml-masterclass-complete-college
/courses/ai-ml-masterclass-teens
/courses/ai-tools-mastery-complete-college
/courses/algebra-foundations-masterclass
/courses/algorithmic-trading-automation-masterclass
/courses/algorithmic-trading-masterclass-complete
/courses/alpha-girls-elite-tech-mastery
/courses/ap-calculus-exam-prep
/courses/ap-computer-science-a-java-exam-prep-course
/courses/ap-computer-science-principles-exam-prep-course
/courses/ap-precalculus-exam-prep-course
/courses/ap-statistics-maths-exam-prep-course
/courses/artificial-intelligence-complete-masterclass-college
/courses/backend-coding-masterclass-for-teens
/courses/block-coding-app-development-masterclass
/courses/build-ai-agents-with-google-gemini-enterprise-course
/courses/c-programming-course-for-college-beginners
/courses/cambridge-a-level-computer-science-9618-course
/courses/canva-ai-design-masterclass
/courses/cbse-class-10-maths-board-exam-prep-course
/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8
/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843
/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course
/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course
/courses/ccc-junior-and-senior-preparation-course
/courses/codex-and-claude-code-ai-coding-agents-course-for-teens
/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals
/courses/college-math-placement-test-prep-course
/courses/college-mathematics-complete-masterclass
/courses/competitive-programming-for-teens-course
/courses/competitive-programming-masterclass-college
/courses/complete-app-development-masterclass-college
/courses/complete-app-development-masterclass-for-teens
/courses/complete-business-finance-mathematics-mastery
/courses/complete-flutter-app-development-masterclass-college
/courses/complete-game-development-masterclass-for-teens
/courses/complete-generative-ai-masterclass-college
/courses/complete-golang-programming-masterclass-college
/courses/complete-high-school-mathematics-mastery
/courses/complete-java-programming-masterclass-college
/courses/complete-kotlin-programming-masterclass-professional
/courses/complete-swift-programming-masterclass-college
/courses/complete-typescript-programming-masterclass-college
/courses/comprehensive-middle-school-mathematics-mastery
/courses/cpp-programming-complete-masterclass-college
/courses/cpp-programming-for-kids-course
/courses/cpp-programming-masterclass-for-teens
/courses/creative-coding-animation-mastery
/courses/creative-media-design-masterclass-teens
/courses/cybersecurity-course-for-teens-ethical-defensive
/courses/data-analysis-mastery-course-college
/courses/data-analytics-mathematics-masterclass
/courses/data-and-ai-analytics-for-non-programmers-course
/courses/data-science-complete-masterclass-college
/courses/data-science-course-for-teens-python-data
/courses/data-structures-algorithms-masterclass-college
/courses/early-math-foundations
/courses/elementary-mathematics-complete-masterclass
/courses/ethical-hacking-masterclass-complete
/courses/frontend-development-masterclass-for-teens
/courses/full-stack-web-development-masterclass-college
/courses/full-stack-web-development-teens-masterclass
/courses/functional-skills-maths-course
/courses/game-development-complete-masterclass-college
/courses/game-development-masterclass-for-kids
/courses/gcse-computer-science-course
/courses/gcse-mathematics-mastery
/courses/gcse-maths-resit-course
/courses/git-github-advanced-version-control-masterclass-for-professionals
/courses/git-github-version-control-course-for-college-students
/courses/git-github-version-control-course-for-teens
/courses/godot-game-development-course-for-kids-and-teens
/courses/gre-gmat-quant-maths-prep-course
/courses/hackathon-prep-for-adults-professionals-coding-ai-innovation-course
/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course
/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course
/courses/html-css-course-for-beginners-build-real-websites
/courses/ib-diploma-computer-science-course
/courses/ib-mathematics-aa-ai-masterclass
/courses/ics3u-ics4u-computer-science-companion-course
/courses/icse-computer-applications-java-bluej-course
/courses/igcse-computer-science-0478-course
/courses/igcse-mathematics-mastery
/courses/java-programming-masterclass-for-teens
/courses/javascript-course-for-teens-beginners-interactive-web
/courses/jee-foundation-maths-course-class-8-10
/courses/kids-ai-web-development-course
/courses/kids-coding-blocks-masterclass
/courses/ks2-sats-maths-course
/courses/maths-through-coding
/courses/mental-maths-mastery-kids
/courses/mern-stack-development-masterclass-college
/courses/microsoft-office-kids-mastery
/courses/middle-school-math-competitions-course
/courses/minecraft-coding-for-kids-course
/courses/mysql-database-complete-masterclass-college
/courses/mysql-mastery-for-teens
/courses/national-5-and-higher-maths-course
/courses/olympiad-competition-mathematics-mastery
/courses/olympiad-mathematics-premium-course
/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course
/courses/orange-data-mining-machine-learning-course-for-college-students
/courses/orange-data-mining-visual-machine-learning-course-for-teens
/courses/pcap-python-certification-prep-course
/courses/pcep-pcap-python-certification-course
/courses/picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens
/courses/princess-coders-complete-coding-masterclass
/courses/problem-solving-and-computational-thinking-for-kids
/courses/problem-solving-dsa-masterclass-teens
/courses/psle-maths-mastery
/courses/python-ai-automation-masterclass-college
/courses/python-ai-kids-masterclass
/courses/python-complete-masterclass-teens
/courses/python-programming-masterclass-zero-to-advanced-college
/courses/python-web-development-django-flask-course
/courses/queen-coders-advanced-tech-leadership
/courses/react-for-teens-complete-masterclass
/courses/react-js-complete-masterclass-college
/courses/reasoning-and-readiness-course-for-young-thinkers
/courses/roblox-game-coding-for-kids-lua-course
/courses/sat-math-prep-course
/courses/scratch-programming-complete-course
/courses/shsat-math-prep-course
/courses/statistics-probability-maths-course
/courses/teens-ai-tools-mastery-course
/courses/tmua-mat-step-preparation-course
/courses/vedic-maths-course-speed-calculation-mastery
/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course
/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev
/courses/vibe-coding-for-teens-python-web-ai-projects-course
/courses/waterloo-math-contests-gauss-to-euclid-course
/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course
```

### B.3 Blog posts (176)

Listed with titles in Appendix C.

```
/blog/30-best-java-programs-for-class-8-students
/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced
/blog/50-java-programs-for-icse-class-10
/blog/abacus-vs-vedic-vs-mental-maths
/blog/advantages-functions-python-why-every-coder-should-use-them
/blog/agentic-terminology-in-ai
/blog/ai-automation-transforming-small-medium-businesses
/blog/ap-computer-science-a-changes-2026
/blog/ap-csp-vs-ap-csa-which-to-take-first
/blog/app-idea-to-app-store-60-days-teen-developer-roadmap
/blog/area-and-perimeter-difference
/blog/armstrong-number-python-complete-guide-examples-code
/blog/best-ai-coding-tools-for-students-2026
/blog/best-byjus-alternative
/blog/best-coding-languages-kids-10-18-beginner-advanced
/blog/best-free-paid-coding-courses-students
/blog/best-free-platforms-for-vibe-coding
/blog/best-java-ides-for-beginners
/blog/best-programming-languages-college-students-2026
/blog/big-o-notation-explained-simply
/blog/binary-numbers-explained
/blog/bodmas-rule-explained
/blog/cambridge-9618-paper-4-python-java-or-visual-basic
/blog/canadian-computing-competition-junior-or-senior
/blog/career-transition-guide-moving-non-tech-to-tech-roles
/blog/cbse-icse-gap-what-schools-not-teaching-about-tech
/blog/cbse-maths-tuition-online
/blog/cloud-computing-explained-business-owners-without-tech-jargon
/blog/coding-class-fees-india-2026
/blog/coding-for-5-year-olds-young-kids-start-learning-programming
/blog/coding-for-6-year-olds
/blog/coding-for-7-year-olds-what-how-kids-should-learn-programming
/blog/coding-for-kids-guide
/blog/coding-for-kids-parents-complete-guide-2026
/blog/coding-interview-preparation-for-freshers
/blog/coding-is-the-new-english-why-2026-is-the-year-to-start
/blog/coding-mathematics-engineering-science
/blog/coding-vs-ai-what-should-my-child-learn
/blog/common-myths-about-coding-for-school-students
/blog/competitive-coding-vs-development-skills-what-students-focus
/blog/conways-game-of-life-python
/blog/custom-software-vs-ready-made-software
/blog/data-analytics-math-help-businesses-better-decisions
/blog/data-science-ai-math-skills-professionals
/blog/data-science-course-india
/blog/dijkstras-algorithm-fastest-route
/blog/do-ai-detectors-work
/blog/does-online-maths-tuition-work
/blog/estimation-in-maths
/blog/exception-handling-in-python
/blog/fibonacci-series-in-python
/blog/file-built-in-methods-python-guide
/blog/file-organization-in-python
/blog/file-types-in-python-complete-guide
/blog/full-stack-vs-ai-engineer-salary-india
/blog/git-vs-github-difference
/blog/group-vs-1-on-1-coding-classes
/blog/help-child-with-maths-anxiety
/blog/help-child-with-maths-homework
/blog/how-are-passwords-stored
/blog/how-coding-education-changing-future-india
/blog/how-coding-improves-mathematical-thinking-children
/blog/how-college-students-build-real-world-projects-while-studying
/blog/how-do-computers-store-images
/blog/how-do-search-engines-work
/blog/how-do-spam-filters-work
/blog/how-does-encryption-work
/blog/how-does-file-compression-work
/blog/how-does-gps-work
/blog/how-long-does-it-take-to-learn-python
/blog/how-schools-parents-prepare-children-future-tech-careers
/blog/how-to-build-menu-driven-program-in-python
/blog/how-to-calculate-percentages
/blog/how-to-choose-a-coding-class-for-your-child
/blog/how-to-explain-division-to-a-child
/blog/how-to-find-hcf-and-lcm-in-python
/blog/how-to-get-a-5-in-ap-computer-science-a
/blog/how-to-get-better-at-maths
/blog/how-to-help-a-child-understand-fractions
/blog/how-to-learn-times-tables-fast
/blog/how-to-make-a-text-adventure-game-in-python
/blog/how-to-make-maths-fun-for-kids
/blog/how-to-read-and-write-files-in-python
/blog/how-to-reverse-a-string-in-python
/blog/how-to-revise-gcse-computer-science
/blog/how-to-solve-maths-word-problems
/blog/how-to-solve-quadratic-equations
/blog/how-to-solve-simultaneous-equations
/blog/how-to-start-learning-data-structures-and-algorithms
/blog/how-to-teach-kids-ai-at-home
/blog/how-to-use-chatgpt-to-study-without-cheating
/blog/how-to-write-a-leap-year-program-in-python
/blog/how-to-write-a-maths-proof
/blog/html-css-javascript-project-ideas
/blog/ib-computer-science-ia-client-rule-2027
/blog/icse-class-10-computer-applications-revision
/blog/igcse-computer-science-0478-pseudocode-guide
/blog/igcse-computer-science-explained-for-parents
/blog/ioi-syllabus-what-to-learn-and-what-to-skip
/blog/is-coding-good-for-kids
/blog/is-coding-worth-learning-2026
/blog/is-vedic-maths-actually-useful
/blog/java-array-programs-for-beginners
/blog/java-constructors-explained
/blog/java-for-kids-complete-guide-learning-programming-2026
/blog/javascript-basics
/blog/javascript-to-learn-before-react
/blog/learn-python-step-by-step
/blog/learn-to-code-career-change-2026
/blog/logic-gates-for-beginners
/blog/long-division-step-by-step
/blog/mean-median-mode-explained
/blog/mental-maths-tricks-for-kids
/blog/minecraft-vs-roblox-which-teaches-kids-to-code
/blog/mobile-apps-increase-customer-engagement-businesses
/blog/modern-age-coders-certificate-earned-not-given
/blog/modular-arithmetic-explained
/blog/negative-numbers-explained
/blog/outsourcing-software-development-vs-hiring-inhouse-developers
/blog/parents-guide-starting-coding-education-home
/blog/pcep-vs-pcap-which-python-certification
/blog/pigeonhole-principle-explained
/blog/place-value-explained
/blog/prime-numbers-explained
/blog/probability-for-beginners
/blog/project-based-learning-why-theory-alone-not-enough-coding
/blog/pythagoras-theorem-explained
/blog/python-basic-programs-for-beginners
/blog/python-dictionary-complete-guide
/blog/python-for-beginners
/blog/python-lambda-functions
/blog/python-list-comprehension-explained
/blog/python-oop-tutorial-for-beginners
/blog/python-programs-for-cbse-class-12
/blog/python-vs-java-which-to-learn-first
/blog/python-vs-javascript-which-to-learn-first
/blog/recursion-explained-for-beginners
/blog/robotics-coding-stem-kits-build-logical-thinking
/blog/role-of-mathematics-programming-logical-problem-solving
/blog/safe-ai-tools-for-kids-homework-2025
/blog/scratch-vs-python-which-better-young-learners
/blog/signs-your-child-is-ready-to-learn-coding
/blog/sohcahtoa-trigonometry-for-beginners
/blog/sql-or-python-first
/blog/star-pattern-programs-in-python
/blog/stem-education-for-girls-india
/blog/string-handling-in-java
/blog/top-10-java-programs-every-college-student-must-know
/blog/top-10-java-programs-for-school-students
/blog/top-20-java-programs-for-icse-class-10
/blog/top-coding-games-platforms-make-learning-fun-kids
/blog/top-emerging-tech-skills-learn-2025-ai-low-code-cloud
/blog/touch-typing-for-kids
/blog/uae-ai-curriculum-schools-what-it-means
/blog/usaco-bronze-to-silver-what-blocks-most-students
/blog/vibe-coding-vs-learning-to-code-properly
/blog/what-is-ai-complete-beginners-guide-how-to-start
/blog/what-is-an-algorithm
/blog/what-is-an-api-explained-simply
/blog/what-is-blockly-for-kids
/blog/what-is-floor-division-in-python
/blog/what-is-the-responsibility-of-developers-using-generative-AI
/blog/what-is-vibe-coding-future-of-software-development
/blog/what-type-of-data-is-generative-ai-most-suitable-for
/blog/whitehat-jr-alternative
/blog/who-are-modern-age-coders-why-choose-us
/blog/why-can-i-understand-solutions-but-not-solve-problems
/blog/why-coding-is-new-literacy-kids-2025
/blog/why-do-machine-learning-models-make-mistakes
/blog/why-early-exposure-coding-gives-students-competitive-advantage
/blog/why-every-business-needs-website-mobile-app-2025
/blog/why-every-teen-should-learn-coding
/blog/why-is-0-1-plus-0-2-not-0-3
/blog/why-is-my-child-struggling-with-maths
/blog/why-python-most-powerful-skill-professionals-today
/blog/working-professionals-upskill-coding-without-quitting-job
```

### B.4 Blog topic hubs (5)

| URL path | Page title |
|---|---|
| `/blog/topic/ai` | AI & Machine Learning Guides |
| `/blog/topic/java` | Java Tutorials & Programs |
| `/blog/topic/kids-coding` | Coding for Kids: Guides for Parents |
| `/blog/topic/maths` | Maths Learning Guides |
| `/blog/topic/python` | Python Tutorials & Guides |

### B.6 Indian city pages (262)

| URL path | Page title |
|---|---|
| `/best-coding-class-in-aberdeen` | Best Coding Classes in Aberdeen |
| `/best-coding-class-in-agra` | Best Coding Classes in Agra |
| `/best-coding-class-in-ahmedabad` | Coding Classes in Ahmedabad Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-ajmer` | Best Coding Classes in Ajmer |
| `/best-coding-class-in-akola` | Best Coding Classes in Akola |
| `/best-coding-class-in-aligarh` | Best Coding Classes in Aligarh |
| `/best-coding-class-in-amravati` | Best Coding Classes in Amravati |
| `/best-coding-class-in-amritsar` | Best Coding Classes in Amritsar |
| `/best-coding-class-in-anand` | Best Coding Classes in Anand |
| `/best-coding-class-in-arklow` | Best Coding Class in Arklow |
| `/best-coding-class-in-armagh` | Best Coding Classes in Armagh |
| `/best-coding-class-in-asansol` | Best Coding Classes in Asansol |
| `/best-coding-class-in-ashbourne` | Best Coding Class in Ashbourne |
| `/best-coding-class-in-athlone` | Best Coding Class in Athlone |
| `/best-coding-class-in-athy` | Best Coding Class in Athy |
| `/best-coding-class-in-aurangabad` | Best Coding Classes in Aurangabad |
| `/best-coding-class-in-balasore` | Best Coding Classes in Balasore |
| `/best-coding-class-in-balbriggan` | Best Coding Class in Balbriggan |
| `/best-coding-class-in-ballina` | Best Coding Class in Ballina |
| `/best-coding-class-in-bangor-northern-ireland` | Best Coding Classes in Bangor, County Down |
| `/best-coding-class-in-bangor-wales` | Best Coding Classes in Bangor, Wales |
| `/best-coding-class-in-bareilly` | Best Coding Classes in Bareilly |
| `/best-coding-class-in-bath` | Best Coding Classes in Bath |
| `/best-coding-class-in-belagavi` | Best Coding Classes in Belagavi (Belgaum) |
| `/best-coding-class-in-belfast` | Best Coding Classes in Belfast |
| `/best-coding-class-in-bengaluru` | Coding Classes in Bengaluru Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-berhampur` | Best Coding Classes in Berhampur |
| `/best-coding-class-in-bhagalpur` | Best Coding Classes in Bhagalpur |
| `/best-coding-class-in-bhavnagar` | Best Coding Classes in Bhavnagar |
| `/best-coding-class-in-bhilai` | Best Coding Classes in Bhilai |
| `/best-coding-class-in-bhopal` | Coding Classes in Bhopal Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-bhubaneswar` | Best Coding Classes in Bhubaneswar |
| `/best-coding-class-in-bikaner` | Best Coding Classes in Bikaner |
| `/best-coding-class-in-bokaro` | Best Coding Classes in Bokaro |
| `/best-coding-class-in-bradford` | Best Coding Classes in Bradford |
| `/best-coding-class-in-bray` | Best Coding Class in Bray |
| `/best-coding-class-in-brighton-and-hove` | Best Coding Classes in Brighton and Hove |
| `/best-coding-class-in-bristol` | Best Coding Classes in Bristol |
| `/best-coding-class-in-cambridge` | Best Coding Classes in Cambridge |
| `/best-coding-class-in-canterbury` | Best Coding Classes in Canterbury |
| `/best-coding-class-in-cardiff` | Best Coding Classes in Cardiff |
| `/best-coding-class-in-carlisle` | Best Coding Classes in Carlisle |
| `/best-coding-class-in-carlow` | Best Coding Class in Carlow |
| `/best-coding-class-in-carrigaline` | Best Coding Class in Carrigaline |
| `/best-coding-class-in-castlebar` | Best Coding Class in Castlebar |
| `/best-coding-class-in-cavan` | Best Coding Class in Cavan Town |
| `/best-coding-class-in-celbridge` | Best Coding Class in Celbridge |
| `/best-coding-class-in-chandigarh` | Best Coding Classes in Chandigarh |
| `/best-coding-class-in-chelmsford` | Best Coding Classes in Chelmsford |
| `/best-coding-class-in-chennai` | Coding Classes in Chennai Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-chester` | Best Coding Classes in Chester |
| `/best-coding-class-in-chichester` | Best Coding Classes in Chichester |
| `/best-coding-class-in-clonmel` | Best Coding Class in Clonmel |
| `/best-coding-class-in-cobh` | Best Coding Class in Cobh |
| `/best-coding-class-in-coimbatore` | Best Coding Classes in Coimbatore |
| `/best-coding-class-in-colchester` | Best Coding Classes in Colchester |
| `/best-coding-class-in-cork` | Best Coding Classes in Cork |
| `/best-coding-class-in-coventry` | Best Coding Classes in Coventry |
| `/best-coding-class-in-cuttack` | Best Coding Classes in Cuttack |
| `/best-coding-class-in-darbhanga` | Best Coding Classes in Darbhanga |
| `/best-coding-class-in-davanagere` | Best Coding Classes in Davanagere (Davangere) |
| `/best-coding-class-in-dehradun` | Best Coding Classes in Dehradun |
| `/best-coding-class-in-delhi` | Coding Classes in Delhi Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-derby` | Best Coding Classes in Derby |
| `/best-coding-class-in-derry-londonderry` | Best Coding Classes in Derry~Londonderry |
| `/best-coding-class-in-dhanbad` | Best Coding Classes in Dhanbad |
| `/best-coding-class-in-doncaster` | Best Coding Classes in Doncaster |
| `/best-coding-class-in-drogheda` | Best Coding Class in Drogheda |
| `/best-coding-class-in-dublin` | Best Coding Classes in Dublin |
| `/best-coding-class-in-dundalk` | Best Coding Class in Dundalk |
| `/best-coding-class-in-dundee` | Best Coding Classes in Dundee |
| `/best-coding-class-in-dunfermline` | Best Coding Classes in Dunfermline |
| `/best-coding-class-in-dungarvan` | Best Coding Class in Dungarvan |
| `/best-coding-class-in-durgapur` | Best Coding Classes in Durgapur |
| `/best-coding-class-in-durham` | Best Coding Classes in Durham |
| `/best-coding-class-in-edinburgh` | Best Coding Classes in Edinburgh |
| `/best-coding-class-in-ely` | Best Coding Classes in Ely |
| `/best-coding-class-in-ennis` | Best Coding Class in Ennis |
| `/best-coding-class-in-enniscorthy` | Best Coding Class in Enniscorthy |
| `/best-coding-class-in-erode` | Best Coding Classes in Erode |
| `/best-coding-class-in-exeter` | Best Coding Classes in Exeter |
| `/best-coding-class-in-faridabad` | Best Coding Classes in Faridabad |
| `/best-coding-class-in-galway` | Best Coding Classes in Galway |
| `/best-coding-class-in-gandhinagar` | Best Coding Classes in Gandhinagar |
| `/best-coding-class-in-gangtok` | Best Coding Classes in Gangtok |
| `/best-coding-class-in-gaya` | Best Coding Classes in Gaya |
| `/best-coding-class-in-ghaziabad` | Best Coding Classes in Ghaziabad |
| `/best-coding-class-in-glasgow` | Best Coding Classes in Glasgow |
| `/best-coding-class-in-gloucester` | Best Coding Classes in Gloucester |
| `/best-coding-class-in-goa` | Best Coding Classes in Goa |
| `/best-coding-class-in-gorakhpur` | Best Coding Classes in Gorakhpur |
| `/best-coding-class-in-gorey` | Best Coding Class in Gorey |
| `/best-coding-class-in-greater-noida` | Best Coding Classes in Greater Noida |
| `/best-coding-class-in-greystones` | Best Coding Class in Greystones |
| `/best-coding-class-in-guntur` | Best Coding Classes in Guntur |
| `/best-coding-class-in-gurgaon` | Best Coding Classes in Gurgaon |
| `/best-coding-class-in-guwahati` | Best Coding Classes in Guwahati |
| `/best-coding-class-in-gwalior` | Best Coding Classes in Gwalior |
| `/best-coding-class-in-haldwani` | Best Coding Classes in Haldwani |
| `/best-coding-class-in-haridwar` | Best Coding Classes in Haridwar |
| `/best-coding-class-in-hereford` | Best Coding Classes in Hereford |
| `/best-coding-class-in-hisar` | Best Coding Classes in Hisar |
| `/best-coding-class-in-hubli` | Best Coding Classes in Hubli |
| `/best-coding-class-in-hull` | Best Coding Classes in Hull |
| `/best-coding-class-in-hyderabad` | Coding Classes in Hyderabad Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-imphal` | Best Coding Classes in Imphal |
| `/best-coding-class-in-indore` | Coding Classes in Indore Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-inverness` | Best Coding Classes in Inverness |
| `/best-coding-class-in-jabalpur` | Best Coding Classes in Jabalpur |
| `/best-coding-class-in-jaipur` | Best Coding Classes in Jaipur |
| `/best-coding-class-in-jalandhar` | Best Coding Classes in Jalandhar |
| `/best-coding-class-in-jammu` | Best Coding Classes in Jammu |
| `/best-coding-class-in-jamnagar` | Best Coding Classes in Jamnagar |
| `/best-coding-class-in-jamshedpur` | Best Coding Classes in Jamshedpur |
| `/best-coding-class-in-jhansi` | Best Coding Classes in Jhansi |
| `/best-coding-class-in-jodhpur` | Best Coding Classes in Jodhpur |
| `/best-coding-class-in-kakinada` | Best Coding Classes in Kakinada |
| `/best-coding-class-in-kannur` | Best Coding Classes in Kannur |
| `/best-coding-class-in-kanpur` | Best Coding Classes in Kanpur |
| `/best-coding-class-in-karimnagar` | Best Coding Classes in Karimnagar |
| `/best-coding-class-in-karnal` | Best Coding Classes in Karnal |
| `/best-coding-class-in-kharagpur` | Best Coding Classes in Kharagpur |
| `/best-coding-class-in-kildare` | Best Coding Class in Kildare Town |
| `/best-coding-class-in-kilkenny` | Best Coding Class in Kilkenny |
| `/best-coding-class-in-killarney` | Best Coding Class in Killarney |
| `/best-coding-class-in-kochi` | Best Coding Classes in Kochi |
| `/best-coding-class-in-kolhapur` | Best Coding Classes in Kolhapur |
| `/best-coding-class-in-kolkata` | Coding Classes in Kolkata Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-kollam` | Best Coding Classes in Kollam |
| `/best-coding-class-in-kota` | Best Coding Classes in Kota |
| `/best-coding-class-in-kottayam` | Best Coding Classes in Kottayam |
| `/best-coding-class-in-kozhikode` | Best Coding Classes in Kozhikode |
| `/best-coding-class-in-lancaster` | Best Coding Classes in Lancaster |
| `/best-coding-class-in-latur` | Best Coding Classes in Latur |
| `/best-coding-class-in-laytown-bettystown` | Best Coding Class in Laytown and Bettystown |
| `/best-coding-class-in-leeds` | Best Coding Classes in Leeds |
| `/best-coding-class-in-leixlip` | Best Coding Class in Leixlip |
| `/best-coding-class-in-letterkenny` | Best Coding Class in Letterkenny |
| `/best-coding-class-in-lichfield` | Best Coding Classes in Lichfield |
| `/best-coding-class-in-limerick` | Best Coding Classes in Limerick |
| `/best-coding-class-in-lincoln` | Best Coding Classes in Lincoln |
| `/best-coding-class-in-lisburn` | Best Coding Classes in Lisburn |
| `/best-coding-class-in-liverpool` | Best Coding Classes in Liverpool |
| `/best-coding-class-in-london` | Best Coding Classes in London |
| `/best-coding-class-in-longford` | Best Coding Class in Longford Town |
| `/best-coding-class-in-lucknow` | Best Coding Classes in Lucknow |
| `/best-coding-class-in-ludhiana` | Best Coding Classes in Ludhiana |
| `/best-coding-class-in-luton` | Best Coding Classes in Luton |
| `/best-coding-class-in-madurai` | Best Coding Classes in Madurai |
| `/best-coding-class-in-malahide` | Best Coding Class in Malahide |
| `/best-coding-class-in-mallow` | Best Coding Class in Mallow |
| `/best-coding-class-in-manchester` | Best Coding Classes in Manchester |
| `/best-coding-class-in-mangalore` | Best Coding Classes in Mangalore (Mangaluru) |
| `/best-coding-class-in-maynooth` | Best Coding Class in Maynooth |
| `/best-coding-class-in-meerut` | Best Coding Classes in Meerut |
| `/best-coding-class-in-midleton` | Best Coding Class in Midleton |
| `/best-coding-class-in-milton-keynes` | Best Coding Classes in Milton Keynes |
| `/best-coding-class-in-mohali` | Best Coding Classes in Mohali |
| `/best-coding-class-in-moradabad` | Best Coding Classes in Moradabad |
| `/best-coding-class-in-mullingar` | Best Coding Class in Mullingar |
| `/best-coding-class-in-mumbai` | Coding Classes in Mumbai Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-muzaffarpur` | Best Coding Classes in Muzaffarpur |
| `/best-coding-class-in-mysore` | Best Coding Classes in Mysore |
| `/best-coding-class-in-naas` | Best Coding Class in Naas |
| `/best-coding-class-in-nagpur` | Best Coding Classes in Nagpur |
| `/best-coding-class-in-nashik` | Best Coding Classes in Nashik |
| `/best-coding-class-in-navan` | Best Coding Class in Navan |
| `/best-coding-class-in-navi-mumbai` | Best Coding Classes in Navi Mumbai |
| `/best-coding-class-in-nellore` | Best Coding Classes in Nellore |
| `/best-coding-class-in-newbridge` | Best Coding Class in Newbridge |
| `/best-coding-class-in-newcastle-upon-tyne` | Best Coding Classes in Newcastle upon Tyne |
| `/best-coding-class-in-newport-wales` | Best Coding Classes in Newport, Wales |
| `/best-coding-class-in-newry` | Best Coding Classes in Newry |
| `/best-coding-class-in-nizamabad` | Best Coding Classes in Nizamabad |
| `/best-coding-class-in-noida` | Coding Classes in Noida Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-norwich` | Best Coding Classes in Norwich |
| `/best-coding-class-in-nottingham` | Best Coding Classes in Nottingham |
| `/best-coding-class-in-oxford` | Best Coding Classes in Oxford |
| `/best-coding-class-in-palakkad` | Best Coding Classes in Palakkad |
| `/best-coding-class-in-panipat` | Best Coding Classes in Panipat |
| `/best-coding-class-in-patiala` | Best Coding Classes in Patiala |
| `/best-coding-class-in-patna` | Best Coding Classes in Patna |
| `/best-coding-class-in-perth-scotland` | Best Coding Classes in Perth, Scotland |
| `/best-coding-class-in-peterborough` | Best Coding Classes in Peterborough |
| `/best-coding-class-in-pimpri-chinchwad` | Best Coding Classes in Pimpri-Chinchwad |
| `/best-coding-class-in-plymouth` | Best Coding Classes in Plymouth |
| `/best-coding-class-in-portlaoise` | Best Coding Class in Portlaoise |
| `/best-coding-class-in-portmarnock` | Best Coding Class in Portmarnock |
| `/best-coding-class-in-portsmouth` | Best Coding Classes in Portsmouth |
| `/best-coding-class-in-prayagraj` | Best Coding Classes in Prayagraj |
| `/best-coding-class-in-preston` | Best Coding Classes in Preston |
| `/best-coding-class-in-pune` | Coding Classes in Pune Near Me: Live Online for Kids, Teens and Adults |
| `/best-coding-class-in-raipur` | Best Coding Classes in Raipur |
| `/best-coding-class-in-rajahmundry` | Best Coding Classes in Rajahmundry |
| `/best-coding-class-in-rajkot` | Best Coding Classes in Rajkot |
| `/best-coding-class-in-ranchi` | Best Coding Classes in Ranchi |
| `/best-coding-class-in-ratoath` | Best Coding Class in Ratoath |
| `/best-coding-class-in-reading` | Best Coding Classes in Reading |
| `/best-coding-class-in-ripon` | Best Coding Classes in Ripon |
| `/best-coding-class-in-rishikesh` | Best Coding Classes in Rishikesh |
| `/best-coding-class-in-rohtak` | Best Coding Classes in Rohtak |
| `/best-coding-class-in-roorkee` | Best Coding Classes in Roorkee |
| `/best-coding-class-in-rourkela` | Best Coding Classes in Rourkela |
| `/best-coding-class-in-rush` | Best Coding Class in Rush |
| `/best-coding-class-in-salem` | Best Coding Classes in Salem |
| `/best-coding-class-in-salford` | Best Coding Classes in Salford |
| `/best-coding-class-in-salisbury` | Best Coding Classes in Salisbury |
| `/best-coding-class-in-sambalpur` | Best Coding Classes in Sambalpur |
| `/best-coding-class-in-shannon` | Best Coding Class in Shannon, Co Clare |
| `/best-coding-class-in-sheffield` | Best Coding Classes in Sheffield |
| `/best-coding-class-in-shimla` | Best Coding Classes in Shimla |
| `/best-coding-class-in-shimoga` | Best Coding Classes in Shivamogga (Shimoga) |
| `/best-coding-class-in-sikar` | Best Coding Classes in Sikar |
| `/best-coding-class-in-siliguri` | Best Coding Classes in Siliguri |
| `/best-coding-class-in-skerries` | Best Coding Class in Skerries |
| `/best-coding-class-in-sligo` | Best Coding Class in Sligo |
| `/best-coding-class-in-slough` | Best Coding Classes in Slough |
| `/best-coding-class-in-solapur` | Best Coding Classes in Solapur |
| `/best-coding-class-in-sonipat` | Best Coding Classes in Sonipat |
| `/best-coding-class-in-southampton` | Best Coding Classes in Southampton |
| `/best-coding-class-in-southend-on-sea` | Best Coding Classes in Southend-on-Sea |
| `/best-coding-class-in-srinagar` | Best Coding Classes in Srinagar |
| `/best-coding-class-in-st-albans` | Best Coding Classes in St Albans |
| `/best-coding-class-in-st-asaph` | Best Coding Classes in St Asaph |
| `/best-coding-class-in-st-davids` | Best Coding Classes in St Davids |
| `/best-coding-class-in-stirling` | Best Coding Classes in Stirling |
| `/best-coding-class-in-stoke-on-trent` | Best Coding Classes in Stoke-on-Trent |
| `/best-coding-class-in-sunderland` | Best Coding Classes in Sunderland |
| `/best-coding-class-in-surat` | Best Coding Classes in Surat |
| `/best-coding-class-in-swansea` | Best Coding Classes in Swansea |
| `/best-coding-class-in-swords` | Best Coding Class in Swords |
| `/best-coding-class-in-thane` | Best Coding Classes in Thane |
| `/best-coding-class-in-thanjavur` | Best Coding Classes in Thanjavur |
| `/best-coding-class-in-the-world` | Best Coding Class in the World? Eight Tests It Must Pass |
| `/best-coding-class-in-thiruvananthapuram` | Coding Classes in Thiruvananthapuram |
| `/best-coding-class-in-thrissur` | Best Coding Classes in Thrissur |
| `/best-coding-class-in-tirunelveli` | Best Coding Classes in Tirunelveli |
| `/best-coding-class-in-tirupati` | Best Coding Classes in Tirupati |
| `/best-coding-class-in-tralee` | Best Coding Class in Tralee |
| `/best-coding-class-in-tramore` | Best Coding Class in Tramore |
| `/best-coding-class-in-trichy` | Best Coding Classes in Trichy |
| `/best-coding-class-in-truro` | Best Coding Classes in Truro |
| `/best-coding-class-in-tullamore` | Best Coding Class in Tullamore |
| `/best-coding-class-in-udaipur` | Best Coding Classes in Udaipur |
| `/best-coding-class-in-udupi` | Best Coding Classes in Udupi & Manipal |
| `/best-coding-class-in-ujjain` | Best Coding Classes in Ujjain |
| `/best-coding-class-in-vadodara` | Best Coding Classes in Vadodara |
| `/best-coding-class-in-varanasi` | Best Coding Classes in Varanasi |
| `/best-coding-class-in-vellore` | Best Coding Classes in Vellore |
| `/best-coding-class-in-vijayawada` | Best Coding Classes in Vijayawada |
| `/best-coding-class-in-visakhapatnam` | Best Coding Classes in Visakhapatnam |
| `/best-coding-class-in-wakefield` | Best Coding Classes in Wakefield |
| `/best-coding-class-in-warangal` | Best Coding Classes in Warangal |
| `/best-coding-class-in-waterford` | Best Coding Classes in Waterford |
| `/best-coding-class-in-wells` | Best Coding Classes in Wells, Somerset |
| `/best-coding-class-in-wexford` | Best Coding Class in Wexford |
| `/best-coding-class-in-wicklow` | Best Coding Class in Wicklow Town |
| `/best-coding-class-in-winchester` | Best Coding Classes in Winchester |
| `/best-coding-class-in-wolverhampton` | Best Coding Classes in Wolverhampton |
| `/best-coding-class-in-worcester` | Best Coding Classes in Worcester |
| `/best-coding-class-in-wrexham` | Best Coding Classes in Wrexham |
| `/best-coding-class-in-york` | Best Coding Classes in York |

### B.7 School partnership pages (23)

| URL path | Page title |
|---|---|
| `/coding-and-maths-for-birla-high-school-kolkata` | Coding & Maths Classes for Birla High School Students Kolkata |
| `/coding-and-maths-for-birla-high-school-mukundapur-kolkata` | Coding & Maths Classes for BHS Mukundapur Students Kolkata |
| `/coding-and-maths-for-don-bosco-park-circus-kolkata` | Coding & Maths Classes for Don Bosco Park Circus Students Kolkata |
| `/coding-and-maths-for-heritage-school-kolkata` | Coding & Maths Classes for Heritage School Students Kolkata |
| `/coding-and-maths-for-mahadevi-birla-world-academy-kolkata` | Coding & Maths Classes for Mahadevi Birla World Academy Students |
| `/coding-and-maths-for-sushila-birla-girls-school-kolkata` | Coding & Maths Classes for Sushila Birla Girls' School Kolkata |
| `/coding-classes-for-dps-bangalore` | Coding Classes for DPS Bangalore Students |
| `/coding-classes-for-dps-dwarka-new-delhi` | Coding Classes for DPS Dwarka Students |
| `/coding-classes-for-dps-greater-noida` | Coding Classes for DPS Greater Noida Students |
| `/coding-classes-for-dps-gurgaon` | Coding Classes for DPS Gurgaon Students |
| `/coding-classes-for-dps-hyderabad` | Coding Classes for DPS Hyderabad Students |
| `/coding-classes-for-dps-international-saket-delhi` | Coding Classes for DPS Saket Students |
| `/coding-classes-for-dps-navi-mumbai` | Coding Classes for DPS Navi Mumbai Students |
| `/coding-classes-for-dps-new-town-kolkata` | Coding Classes for DPS New Town |
| `/coding-classes-for-dps-noida` | Coding Classes for DPS Noida Students |
| `/coding-classes-for-dps-rk-puram-new-delhi` | Coding Classes for DPS R.K. Puram Students |
| `/coding-classes-for-dps-rohini-new-delhi` | Coding Classes for DPS Rohini Students |
| `/coding-classes-for-dps-ruby-park-kolkata` | Coding Classes for DPS Ruby Park Students Students |
| `/coding-classes-for-dps-vasant-kunj-new-delhi` | Coding Classes for DPS Vasant Kunj Students Students |
| `/coding-classes-for-high-school-students` | Coding Classes for High School Students: CS, AP and Beyond |
| `/coding-classes-for-la-martiniere-boys-kolkata` | Coding Classes for La Martiniere for Boys Students |
| `/coding-classes-for-la-martiniere-girls-kolkata` | Coding Classes for La Martiniere for Girls Students |
| `/coding-classes-for-middle-school-students` | Coding Classes for Middle School Students: Grades 6 to 8 |

### B.8 Country and international pages (575)

| URL path | Page title |
|---|---|
| `/ai-and-machine-learning-classes-in-australia` | AI and Machine Learning Classes in Australia |
| `/ai-and-machine-learning-classes-in-bahamas` | AI and Machine Learning Classes in The Bahamas |
| `/ai-and-machine-learning-classes-in-bahrain` | AI and Machine Learning Classes in Bahrain |
| `/ai-and-machine-learning-classes-in-brunei` | AI and Machine Learning Classes in Brunei |
| `/ai-and-machine-learning-classes-in-canada` | AI and Machine Learning Classes in Canada |
| `/ai-and-machine-learning-classes-in-germany` | AI and Machine Learning Classes in Germany |
| `/ai-and-machine-learning-classes-in-hong-kong` | AI and Machine Learning Classes in Hong Kong |
| `/ai-and-machine-learning-classes-in-ireland` | AI and Machine Learning Classes in Ireland |
| `/ai-and-machine-learning-classes-in-kuwait` | AI & Machine Learning Classes in Kuwait |
| `/ai-and-machine-learning-classes-in-kuwait-city` | AI & Machine Learning Classes in Kuwait City |
| `/ai-and-machine-learning-classes-in-london` | AI and Machine Learning Classes in London |
| `/ai-and-machine-learning-classes-in-muscat` | AI and Machine Learning Classes in Muscat |
| `/ai-and-machine-learning-classes-in-netherlands` | AI and Machine Learning Classes in the Netherlands |
| `/ai-and-machine-learning-classes-in-oman` | AI & Machine Learning Classes in Oman |
| `/ai-and-machine-learning-classes-in-qatar` | AI & Machine Learning Classes in Qatar |
| `/ai-and-machine-learning-classes-in-saudi-arabia` | AI & Machine Learning Classes in Saudi Arabia |
| `/ai-and-machine-learning-classes-in-singapore` | AI and Machine Learning Classes in Singapore |
| `/ai-and-machine-learning-classes-in-switzerland` | AI and Machine Learning Classes in Switzerland |
| `/ai-and-machine-learning-classes-in-uae` | AI & Machine Learning Classes in UAE |
| `/ai-and-machine-learning-classes-in-uk` | AI and Machine Learning Classes in the UK |
| `/ai-and-machine-learning-classes-in-usa` | AI and Machine Learning Classes in the USA |
| `/ai-and-machine-learning-classes-in-zurich` | AI and Machine Learning Classes in Zurich |
| `/ai-classes-in-dubai` | AI Classes in Dubai |
| `/ai-classes-in-qatar` | AI Classes in Qatar |
| `/ai-classes-in-saudi-arabia` | AI Classes in Saudi Arabia |
| `/coding-classes-cost-australia` | Coding Classes Cost in Australia 2026: Per Lesson and Term |
| `/coding-classes-cost-canada` | Coding Classes Cost in Canada 2026: Fees by Format |
| `/coding-classes-cost-india-2026` | Coding Classes Cost in India 2026: Honest Price Guide |
| `/coding-classes-for-11-and-12-year-olds-australia` | Coding Classes for 11 and 12 Year Olds in Australia |
| `/coding-classes-for-5-and-6-year-olds-australia` | Coding Classes for 5 and 6 Year Olds in Australia |
| `/coding-classes-for-7-and-8-year-olds-australia` | Coding Classes for 7 and 8 Year Olds in Australia |
| `/coding-classes-for-9-and-10-year-olds-australia` | Coding Classes for 9 and 10 Year Olds in Australia |
| `/coding-classes-for-adults` | Coding Classes for Adults: Live, Small Batches, Ages 18 to 67 |
| `/coding-classes-for-adults-australia` | Coding Classes for Adults in Australia |
| `/coding-classes-for-adults-in-canada` | Coding Classes for Adults in Canada: Python and Web, Live |
| `/coding-classes-for-elementary-students` | Coding Classes for Elementary Students: Grades 1 to 5 |
| `/coding-classes-for-girls` | Coding Classes for Girls |
| `/coding-classes-for-kids-adelaide` | Coding Classes for Kids in Adelaide |
| `/coding-classes-for-kids-brisbane` | Coding Classes for Kids in Brisbane |
| `/coding-classes-for-kids-canberra` | Coding Classes for Kids in Canberra |
| `/coding-classes-for-kids-cost` | Coding Classes for Kids Cost 2026: US Prices by Format |
| `/coding-classes-for-kids-gold-coast` | Coding Classes for Kids on the Gold Coast |
| `/coding-classes-for-kids-in-abbotsford` | Coding Classes for Kids in Abbotsford, BC |
| `/coding-classes-for-kids-in-ajax-and-pickering` | Coding Classes for Kids in Ajax and Pickering |
| `/coding-classes-for-kids-in-cambridge-ontario` | Coding Classes for Kids in Cambridge, Ontario |
| `/coding-classes-for-kids-in-canada` | Coding Classes for Kids in Canada: Live Online, Ages 6 to 12 |
| `/coding-classes-for-kids-in-doha` | Coding Classes for Kids in Doha |
| `/coding-classes-for-kids-in-dubai` | Coding Classes for Kids in Dubai |
| `/coding-classes-for-kids-in-etobicoke-toronto` | Coding Classes for Kids in Etobicoke |
| `/coding-classes-for-kids-in-langley-bc` | Coding Classes for Kids in Langley, BC |
| `/coding-classes-for-kids-in-nassau` | Coding Classes for Kids in Nassau |
| `/coding-classes-for-kids-in-north-york-toronto` | Coding Classes for Kids in North York |
| `/coding-classes-for-kids-in-oshawa-and-whitby` | Coding Classes for Kids in Oshawa and Whitby |
| `/coding-classes-for-kids-in-riyadh` | Coding Classes for Kids in Riyadh |
| `/coding-classes-for-kids-in-scarborough-toronto` | Coding Classes for Kids in Scarborough |
| `/coding-classes-for-kids-in-st-catharines-niagara` | Coding Classes for Kids in St. Catharines and Niagara |
| `/coding-classes-for-kids-melbourne` | Coding Classes for Kids in Melbourne |
| `/coding-classes-for-kids-netherlands` | Coding Classes for Kids in the Netherlands |
| `/coding-classes-for-kids-newcastle` | Coding Classes for Kids in Newcastle NSW |
| `/coding-classes-for-kids-perth` | Coding Classes for Kids in Perth |
| `/coding-classes-for-kids-sydney` | Coding Classes for Kids in Sydney |
| `/coding-classes-for-seniors-in-canada` | Coding Classes for Seniors in Canada: Patient, Live Online |
| `/coding-classes-for-teens-australia` | Coding Classes for Teens in Australia |
| `/coding-classes-for-teens-in-canada` | Coding Classes for Teens in Canada: High School and Beyond |
| `/coding-classes-for-teens-netherlands` | Coding Classes for Teens in the Netherlands |
| `/coding-classes-in-aberdeenshire` | Coding Classes in Aberdeenshire |
| `/coding-classes-in-abu-dhabi` | Coding Classes in Abu Dhabi |
| `/coding-classes-in-ad-dakhiliyah` | Coding Classes in Ad Dakhiliyah |
| `/coding-classes-in-adam` | Coding Classes in Adam |
| `/coding-classes-in-adh-dhahirah` | Coding Classes in Adh Dhahirah |
| `/coding-classes-in-al-amarat` | Coding Classes in Al Amarat |
| `/coding-classes-in-al-awabi` | Coding Classes in Al Awabi |
| `/coding-classes-in-al-batinah-north` | Coding Classes in Al Batinah North |
| `/coding-classes-in-al-batinah-south` | Coding Classes in Al Batinah South |
| `/coding-classes-in-al-buraimi` | Coding Classes in Al Buraimi |
| `/coding-classes-in-al-ghubrah` | Coding Classes in Al Ghubrah |
| `/coding-classes-in-al-hail` | Coding Classes in Al Hail |
| `/coding-classes-in-al-hamra` | Coding Classes in Al Hamra |
| `/coding-classes-in-al-kamil-wal-wafi` | Coding Classes in Al Kamil Wal Wafi |
| `/coding-classes-in-al-khaburah` | Coding Classes in Al Khaburah |
| `/coding-classes-in-al-khoudh` | Coding Classes in Al Khoudh |
| `/coding-classes-in-al-khuwair` | Coding Classes in Al Khuwair |
| `/coding-classes-in-al-mazyunah` | Coding Classes in Al Mazyunah |
| `/coding-classes-in-al-mouj` | Online Coding Classes in Al Mouj |
| `/coding-classes-in-al-mudhaibi` | Coding Classes in Al Mudhaibi |
| `/coding-classes-in-al-musanaah` | Coding Classes in Al Musanaah |
| `/coding-classes-in-al-qabil` | Coding Classes in Al Qabil |
| `/coding-classes-in-al-wusta` | Coding Classes in Al Wusta |
| `/coding-classes-in-alberta` | Online Coding Classes in Alberta |
| `/coding-classes-in-alkmaar` | Coding Classes in Alkmaar |
| `/coding-classes-in-almelo` | Coding Classes in Almelo |
| `/coding-classes-in-almere` | Coding Classes in Almere |
| `/coding-classes-in-alphen-aan-den-rijn` | Coding Classes in Alphen aan den Rijn |
| `/coding-classes-in-amersfoort` | Coding Classes in Amersfoort |
| `/coding-classes-in-amstelveen` | Coding Classes in Amstelveen |
| `/coding-classes-in-amsterdam` | Coding Classes in Amsterdam |
| `/coding-classes-in-amsterdam-centrum` | Coding Classes in Amsterdam-Centrum |
| `/coding-classes-in-amsterdam-nieuw-west` | Coding Classes in Amsterdam Nieuw-West |
| `/coding-classes-in-amsterdam-noord` | Coding Classes in Amsterdam-Noord |
| `/coding-classes-in-amsterdam-oost` | Coding Classes in Amsterdam-Oost |
| `/coding-classes-in-amsterdam-west` | Coding Classes in Amsterdam-West |
| `/coding-classes-in-amsterdam-zuid` | Coding Classes in Amsterdam-Zuid |
| `/coding-classes-in-amsterdam-zuidoost` | Coding Classes in Amsterdam-Zuidoost |
| `/coding-classes-in-andhra-pradesh` | Coding Classes in Andhra Pradesh |
| `/coding-classes-in-anglesey` | Coding Classes in Anglesey, Ynys Môn |
| `/coding-classes-in-angus` | Coding Classes in Angus |
| `/coding-classes-in-antrim-and-newtownabbey` | Coding Classes in Antrim and Newtownabbey |
| `/coding-classes-in-apeldoorn` | Coding Classes in Apeldoorn |
| `/coding-classes-in-argyll-and-bute` | Coding Classes in Argyll and Bute |
| `/coding-classes-in-arnhem` | Coding Classes in Arnhem |
| `/coding-classes-in-as-suwaiq` | Coding Classes in As Suwaiq |
| `/coding-classes-in-ash-sharqiyah-north` | Coding Classes in Ash Sharqiyah North |
| `/coding-classes-in-ash-sharqiyah-south` | Coding Classes in Ash Sharqiyah South |
| `/coding-classes-in-assam` | Coding Classes in Assam |
| `/coding-classes-in-assen` | Coding Classes in Assen |
| `/coding-classes-in-australia` | Online Coding & AI Classes in Australia |
| `/coding-classes-in-avani-riverside-howrah` | Coding & Maths Classes near Avani Riverside, Howrah |
| `/coding-classes-in-avidipta-mukundapur` | Coding & Maths Classes near Avidipta |
| `/coding-classes-in-azaiba` | Coding Classes in Azaiba |
| `/coding-classes-in-bahla` | Coding Classes in Bahla |
| `/coding-classes-in-bahrain` | Online Coding Classes in Bahrain |
| `/coding-classes-in-ballincollig-cork` | Coding Classes in Ballincollig, Cork |
| `/coding-classes-in-ballymun-dublin` | Coding Classes in Ballymun, Dublin |
| `/coding-classes-in-bandar-seri-begawan` | Coding Classes in Bandar Seri Begawan |
| `/coding-classes-in-barka` | Coding Classes in Barka |
| `/coding-classes-in-barking-and-dagenham-london` | Coding Classes in Barking and Dagenham |
| `/coding-classes-in-barnet-london` | Coding Classes in Barnet, Finchley, Hendon |
| `/coding-classes-in-bawshar` | Online Coding Classes in Bawshar |
| `/coding-classes-in-bedfordshire` | Coding Classes in Bedfordshire |
| `/coding-classes-in-bergen-op-zoom` | Coding Classes in Bergen op Zoom |
| `/coding-classes-in-berkshire` | Coding Classes in Berkshire |
| `/coding-classes-in-bexley-london` | Coding Classes in Bexley, Sidcup and Erith |
| `/coding-classes-in-bidbid` | Coding Classes in Bidbid |
| `/coding-classes-in-bidiyah` | Coding Classes in Bidiyah |
| `/coding-classes-in-bihar` | Coding Classes in Bihar |
| `/coding-classes-in-birmingham` | Online Coding Classes in Birmingham |
| `/coding-classes-in-bishopstown-cork` | Coding Classes in Bishopstown, Cork |
| `/coding-classes-in-blackrock-dublin` | Coding Classes in Blackrock, Dublin |
| `/coding-classes-in-blaenau-gwent` | Coding Classes in Blaenau Gwent |
| `/coding-classes-in-blanchardstown-dublin` | Coding Classes in Blanchardstown, Dublin 15 |
| `/coding-classes-in-breda` | Coding Classes in Breda |
| `/coding-classes-in-brent-london` | Coding Classes in Brent, Wembley and Kilburn |
| `/coding-classes-in-bridgend` | Coding Classes in Bridgend |
| `/coding-classes-in-british-columbia` | Online Coding Classes in British Columbia |
| `/coding-classes-in-bromley-london` | Coding Classes in Bromley and Beckenham |
| `/coding-classes-in-brunei` | Online Coding Classes in Brunei |
| `/coding-classes-in-buckinghamshire` | Coding Classes in Buckinghamshire |
| `/coding-classes-in-caerphilly-county-borough` | Coding Classes in Caerphilly |
| `/coding-classes-in-calcutta-riverside` | Coding & Maths Classes near Calcutta Riverside |
| `/coding-classes-in-california` | Coding Classes in California |
| `/coding-classes-in-cambridgeshire` | Coding Classes in Cambridgeshire |
| `/coding-classes-in-camden-london` | Coding Classes in Camden and Hampstead |
| `/coding-classes-in-canada` | Coding & AI Classes in Canada |
| `/coding-classes-in-capelle-aan-den-ijssel` | Coding Classes in Capelle aan den IJssel |
| `/coding-classes-in-carmarthenshire` | Coding Classes in Carmarthenshire |
| `/coding-classes-in-castleknock-dublin` | Coding Classes in Castleknock, Dublin 15 |
| `/coding-classes-in-castletroy-limerick` | Coding Classes in Castletroy, Limerick |
| `/coding-classes-in-causeway-coast-and-glens` | Coding Classes in Causeway Coast and Glens |
| `/coding-classes-in-ceredigion` | Coding Classes in Ceredigion |
| `/coding-classes-in-charlois` | Coding Classes in Charlois, Rotterdam |
| `/coding-classes-in-cheshire` | Coding Classes in Cheshire |
| `/coding-classes-in-chhattisgarh` | Coding Classes in Chhattisgarh |
| `/coding-classes-in-clackmannanshire` | Coding Classes in Clackmannanshire |
| `/coding-classes-in-clondalkin-dublin` | Coding Classes in Clondalkin, Dublin 22 |
| `/coding-classes-in-clontarf-dublin` | Coding Classes in Clontarf, Dublin |
| `/coding-classes-in-conwy` | Coding Classes in Conwy |
| `/coding-classes-in-cornwall` | Coding Classes in Cornwall |
| `/coding-classes-in-county-carlow` | Coding Classes in County Carlow |
| `/coding-classes-in-county-cavan` | Coding Classes in County Cavan |
| `/coding-classes-in-county-clare` | Coding Classes in County Clare |
| `/coding-classes-in-county-cork` | Coding Classes in County Cork |
| `/coding-classes-in-county-donegal` | Coding Classes in County Donegal |
| `/coding-classes-in-county-durham` | Coding Classes in County Durham |
| `/coding-classes-in-county-galway` | Coding Classes in County Galway |
| `/coding-classes-in-county-kerry` | Coding Classes in County Kerry |
| `/coding-classes-in-county-kildare` | Coding Classes in County Kildare |
| `/coding-classes-in-county-kilkenny` | Coding Classes in County Kilkenny |
| `/coding-classes-in-county-laois` | Coding Classes in County Laois |
| `/coding-classes-in-county-leitrim` | Coding Classes in County Leitrim |
| `/coding-classes-in-county-longford` | Coding Classes in County Longford |
| `/coding-classes-in-county-louth` | Coding Classes in County Louth |
| `/coding-classes-in-county-mayo` | Coding Classes in County Mayo |
| `/coding-classes-in-county-meath` | Coding Classes in County Meath |
| `/coding-classes-in-county-monaghan` | Coding Classes in County Monaghan |
| `/coding-classes-in-county-offaly` | Coding Classes in County Offaly |
| `/coding-classes-in-county-roscommon` | Coding Classes in County Roscommon |
| `/coding-classes-in-county-sligo` | Coding Classes in County Sligo |
| `/coding-classes-in-county-tipperary` | Coding Classes in County Tipperary |
| `/coding-classes-in-county-westmeath` | Coding Classes in County Westmeath |
| `/coding-classes-in-county-wexford` | Coding Classes in County Wexford |
| `/coding-classes-in-county-wicklow` | Coding Classes in County Wicklow |
| `/coding-classes-in-croydon-london` | Coding Classes in Croydon, Purley, Norbury |
| `/coding-classes-in-crumlin-dublin` | Coding Classes in Crumlin, Dublin |
| `/coding-classes-in-cumbria` | Coding Classes in Cumbria |
| `/coding-classes-in-daba-al-bayah` | Coding Classes in Daba Al Bayah |
| `/coding-classes-in-dammam` | Coding Classes in Dammam & Khobar |
| `/coding-classes-in-delfshaven` | Coding Classes in Delfshaven, Rotterdam |
| `/coding-classes-in-delft` | Coding Classes in Delft |
| `/coding-classes-in-den-bosch` | Coding Classes in Den Bosch |
| `/coding-classes-in-denbighshire` | Coding Classes in Denbighshire |
| `/coding-classes-in-derbyshire` | Coding Classes in Derbyshire |
| `/coding-classes-in-deventer` | Coding Classes in Deventer |
| `/coding-classes-in-devon` | Coding Classes in Devon |
| `/coding-classes-in-dhank` | Coding Classes in Dhank |
| `/coding-classes-in-dhofar` | Coding Classes in Dhofar |
| `/coding-classes-in-diamond-city-north` | Coding & Maths Classes at Diamond City North |
| `/coding-classes-in-diamond-city-south` | Coding & Maths Classes near Diamond City South |
| `/coding-classes-in-diemen` | Coding Classes in Diemen |
| `/coding-classes-in-dima-wa-attayeen` | Coding Classes in Dima Wa Attayeen |
| `/coding-classes-in-dlf-new-town-heights` | Coding & Maths Classes at DLF New Town Heights |
| `/coding-classes-in-doha` | Coding Classes in Doha |
| `/coding-classes-in-dordrecht` | Coding Classes in Dordrecht |
| `/coding-classes-in-dorset` | Coding Classes in Dorset |
| `/coding-classes-in-douglas-cork` | Coding Classes in Douglas, Cork |
| `/coding-classes-in-drenthe` | Coding Classes in Drenthe |
| `/coding-classes-in-drumcondra-dublin` | Coding Classes in Drumcondra, Dublin |
| `/coding-classes-in-dubai` | Coding Classes in Dubai |
| `/coding-classes-in-dumfries-and-galloway` | Coding Classes in Dumfries and Galloway |
| `/coding-classes-in-dun-laoghaire-dublin` | Coding Classes in Dún Laoghaire, Dublin |
| `/coding-classes-in-dun-laoghaire-rathdown` | Coding Classes in Dún Laoghaire-Rathdown |
| `/coding-classes-in-dundrum-dublin` | Coding Classes in Dundrum, Dublin 14 |
| `/coding-classes-in-duqm` | Coding Classes in Duqm |
| `/coding-classes-in-ealing-london` | Coding Classes in Ealing, Acton, Southall |
| `/coding-classes-in-east-ayrshire` | Coding Classes in East Ayrshire |
| `/coding-classes-in-east-dunbartonshire` | Coding Classes in East Dunbartonshire |
| `/coding-classes-in-east-lothian` | Coding Classes in East Lothian |
| `/coding-classes-in-east-renfrewshire` | Coding Classes in East Renfrewshire |
| `/coding-classes-in-east-riding-of-yorkshire` | Coding Classes in the East Riding |
| `/coding-classes-in-east-sussex` | Coding Classes in East Sussex |
| `/coding-classes-in-ede` | Coding Classes in Ede |
| `/coding-classes-in-eden-city-maheshtala` | Coding & Maths Classes in Eden City, Maheshtala |
| `/coding-classes-in-eindhoven` | Coding Classes in Eindhoven |
| `/coding-classes-in-eindhoven-centrum` | Coding Classes in Eindhoven Centrum |
| `/coding-classes-in-elita-garden-vista` | Coding & Maths Classes near Elita Garden Vista |
| `/coding-classes-in-emmen` | Coding Classes in Emmen |
| `/coding-classes-in-enfield-london` | Coding Classes in Enfield and Edmonton |
| `/coding-classes-in-enschede` | Coding Classes in Enschede |
| `/coding-classes-in-escamp` | Coding Classes in Escamp, The Hague |
| `/coding-classes-in-essex` | Coding Classes in Essex |
| `/coding-classes-in-falkirk` | Coding Classes in Falkirk |
| `/coding-classes-in-feijenoord` | Coding Classes in Feijenoord, Rotterdam |
| `/coding-classes-in-fermanagh-and-omagh` | Coding Classes in Fermanagh and Omagh |
| `/coding-classes-in-fife` | Coding Classes in Fife |
| `/coding-classes-in-fingal` | Coding Classes in Fingal |
| `/coding-classes-in-finglas-dublin` | Coding Classes in Finglas, Dublin |
| `/coding-classes-in-flevoland` | Coding Classes in Flevoland |
| `/coding-classes-in-flintshire` | Coding Classes in Flintshire |
| `/coding-classes-in-friesland` | Coding Classes in Friesland (Fryslân) |
| `/coding-classes-in-gadong` | Coding Classes in Gadong, Brunei |
| `/coding-classes-in-gelderland` | Coding Classes in Gelderland |
| `/coding-classes-in-genexx-valley-joka` | Coding & Maths Classes in Joka |
| `/coding-classes-in-georgia` | Coding Classes in Georgia, USA |
| `/coding-classes-in-germany` | Coding & AI Classes in Germany |
| `/coding-classes-in-gestel` | Coding Classes in Gestel, Eindhoven |
| `/coding-classes-in-glanmire-cork` | Coding Classes in Glanmire, Cork |
| `/coding-classes-in-glasnevin-dublin` | Coding Classes in Glasnevin, Dublin |
| `/coding-classes-in-gloucestershire` | Coding Classes in Gloucestershire |
| `/coding-classes-in-goa` | Coding Classes in Goa |
| `/coding-classes-in-godrej-prakriti` | Coding & Maths Classes at Godrej Prakriti, Sodepur |
| `/coding-classes-in-gouda` | Coding Classes in Gouda |
| `/coding-classes-in-greater-manchester` | Coding Classes in Greater Manchester |
| `/coding-classes-in-greenfield-city-behala` | Coding & Maths Classes in Greenfield City, Behala |
| `/coding-classes-in-greenwich-london` | Coding Classes in Greenwich and Woolwich |
| `/coding-classes-in-groningen` | Coding Classes in Groningen |
| `/coding-classes-in-groningen-province` | Coding Classes in the Province of Groningen |
| `/coding-classes-in-gujarat` | Coding Classes in Gujarat |
| `/coding-classes-in-gwynedd` | Coding Classes in Gwynedd |
| `/coding-classes-in-haagse-hout` | Coding Classes in Haagse Hout, The Hague |
| `/coding-classes-in-haarlem` | Coding Classes in Haarlem |
| `/coding-classes-in-haarlemmermeer` | Coding Classes in Haarlemmermeer, Hoofddorp |
| `/coding-classes-in-hackney-london` | Coding Classes in Hackney and Shoreditch |
| `/coding-classes-in-haima` | Coding Classes in Haima |
| `/coding-classes-in-hammersmith-and-fulham-london` | Coding Classes in Hammersmith and Fulham |
| `/coding-classes-in-hampshire` | Coding Classes in Hampshire |
| `/coding-classes-in-haringey-london` | Coding Classes in Haringey and Tottenham |
| `/coding-classes-in-harrow-london` | Coding Classes in Harrow, London |
| `/coding-classes-in-haryana` | Coding Classes in Haryana |
| `/coding-classes-in-havering-london` | Coding Classes in Havering and Romford |
| `/coding-classes-in-heerlen` | Coding Classes in Heerlen |
| `/coding-classes-in-helmond` | Coding Classes in Helmond |
| `/coding-classes-in-hengelo` | Coding Classes in Hengelo |
| `/coding-classes-in-herefordshire` | Coding Classes in Herefordshire |
| `/coding-classes-in-hertfordshire` | Coding Classes in Hertfordshire |
| `/coding-classes-in-highland` | Coding Classes in the Highlands |
| `/coding-classes-in-hiland-park` | Coding & Maths Classes near Hiland Park |
| `/coding-classes-in-hiland-willows` | Coding & Maths Classes near Hiland Willows |
| `/coding-classes-in-hillegersberg-schiebroek` | Coding Classes in Hillegersberg-Schiebroek |
| `/coding-classes-in-hillingdon-london` | Coding Classes in Hillingdon, Uxbridge, Hayes |
| `/coding-classes-in-hilversum` | Coding Classes in Hilversum |
| `/coding-classes-in-himachal-pradesh` | Coding Classes in Himachal Pradesh |
| `/coding-classes-in-hong-kong` | Online Coding Classes in Hong Kong |
| `/coding-classes-in-hoorn` | Coding Classes in Hoorn |
| `/coding-classes-in-hounslow-london` | Coding Classes in Hounslow, Chiswick, Feltham |
| `/coding-classes-in-howth-dublin` | Coding Classes in Howth, Dublin |
| `/coding-classes-in-ibra` | Coding Classes in Ibra |
| `/coding-classes-in-ibri` | Coding Classes in Ibri |
| `/coding-classes-in-ideal-niketan-tangra` | Coding & Maths Classes near Ideal Niketan, Tangra |
| `/coding-classes-in-ijsselmonde` | Coding Classes in IJsselmonde, Rotterdam |
| `/coding-classes-in-illinois` | Coding Classes in Illinois |
| `/coding-classes-in-india` | Coding Classes in India: Live Online in 130+ Cities |
| `/coding-classes-in-inverclyde` | Coding Classes in Inverclyde |
| `/coding-classes-in-ireland` | Online Coding & AI Classes in Ireland |
| `/coding-classes-in-isle-of-wight` | Coding Classes on the Isle of Wight |
| `/coding-classes-in-islington-london` | Coding Classes in Islington and Clerkenwell |
| `/coding-classes-in-izki` | Coding Classes in Izki |
| `/coding-classes-in-jalan-bani-bu-ali` | Coding Classes in Jalan Bani Bu Ali |
| `/coding-classes-in-jalan-bani-bu-hassan` | Coding Classes in Jalan Bani Bu Hassan |
| `/coding-classes-in-jeddah` | Coding Classes in Jeddah |
| `/coding-classes-in-jerudong` | Coding Classes in Jerudong, Brunei |
| `/coding-classes-in-jharkhand` | Coding Classes in Jharkhand |
| `/coding-classes-in-karnataka` | Coding Classes in Karnataka |
| `/coding-classes-in-kensington-and-chelsea-london` | Coding Classes in Kensington and Chelsea |
| `/coding-classes-in-kent` | Coding Classes in Kent |
| `/coding-classes-in-kerala` | Coding Classes in Kerala |
| `/coding-classes-in-khasab` | Coding Classes in Khasab |
| `/coding-classes-in-kingston-upon-thames-london` | Coding Classes in Kingston upon Thames |
| `/coding-classes-in-knocknacarra-galway` | Coding Classes in Knocknacarra, Galway |
| `/coding-classes-in-kralingen-crooswijk` | Coding Classes in Kralingen-Crooswijk |
| `/coding-classes-in-kuala-belait` | Coding Classes in Kuala Belait and Seria |
| `/coding-classes-in-kuwait` | Online Coding Classes in Kuwait |
| `/coding-classes-in-laak` | Coding Classes in Laak, The Hague |
| `/coding-classes-in-lambeth-london` | Coding Classes in Lambeth, Brixton, Clapham |
| `/coding-classes-in-lancashire` | Coding Classes in Lancashire |
| `/coding-classes-in-leeuwarden` | Coding Classes in Leeuwarden |
| `/coding-classes-in-leicester` | Online Coding Classes in Leicester |
| `/coding-classes-in-leicestershire` | Coding Classes in Leicestershire |
| `/coding-classes-in-leiden` | Coding Classes in Leiden |
| `/coding-classes-in-leidschendam-voorburg` | Coding Classes in Leidschendam-Voorburg |
| `/coding-classes-in-leidschenveen-ypenburg` | Coding Classes in Leidschenveen-Ypenburg |
| `/coding-classes-in-lelystad` | Coding Classes in Lelystad |
| `/coding-classes-in-lewisham-london` | Coding Classes in Lewisham, Catford, Deptford |
| `/coding-classes-in-liang` | Coding Classes in Liang and Lumut, Brunei |
| `/coding-classes-in-limburg` | Coding Classes in Limburg |
| `/coding-classes-in-lincolnshire` | Coding Classes in Lincolnshire |
| `/coding-classes-in-liwa` | Coding Classes in Liwa |
| `/coding-classes-in-loosduinen` | Coding Classes in Loosduinen, The Hague |
| `/coding-classes-in-lucan-dublin` | Coding Classes in Lucan, Dublin |
| `/coding-classes-in-maastricht` | Coding Classes in Maastricht |
| `/coding-classes-in-madha` | Coding Classes in Madha |
| `/coding-classes-in-madhya-pradesh` | Coding Classes in Madhya Pradesh |
| `/coding-classes-in-madinat-al-irfan` | Coding Classes in Madinat Al Irfan |
| `/coding-classes-in-madinat-al-sultan-qaboos` | Coding Classes in Madinat Al Sultan Qaboos |
| `/coding-classes-in-maharashtra` | Coding Classes in Maharashtra |
| `/coding-classes-in-mahdah` | Coding Classes in Mahdah |
| `/coding-classes-in-mahout` | Coding Classes in Mahout |
| `/coding-classes-in-manah` | Coding Classes in Manah |
| `/coding-classes-in-manitoba` | Coding Classes in Manitoba |
| `/coding-classes-in-maryland` | Coding and AI Classes in Maryland |
| `/coding-classes-in-masirah` | Coding Classes in Masirah |
| `/coding-classes-in-mawaleh` | Coding Classes in Mawaleh |
| `/coding-classes-in-meierijstad` | Coding Classes in Meierijstad |
| `/coding-classes-in-merseyside` | Coding Classes in Merseyside |
| `/coding-classes-in-merthyr-tydfil-county-borough` | Coding Classes in Merthyr Tydfil |
| `/coding-classes-in-merton-london` | Coding Classes in Merton, Wimbledon, Mitcham |
| `/coding-classes-in-mid-and-east-antrim` | Coding Classes in Mid and East Antrim |
| `/coding-classes-in-mid-ulster` | Coding Classes in Mid Ulster |
| `/coding-classes-in-middelburg` | Coding Classes in Middelburg |
| `/coding-classes-in-midlothian` | Coding Classes in Midlothian |
| `/coding-classes-in-mirbat` | Coding Classes in Mirbat |
| `/coding-classes-in-monmouthshire` | Coding Classes in Monmouthshire |
| `/coding-classes-in-moray` | Coding Classes in Moray |
| `/coding-classes-in-musandam` | Coding Classes in Musandam |
| `/coding-classes-in-muscat` | Online Coding Classes in Muscat |
| `/coding-classes-in-muttrah` | Online Coding Classes in Muttrah |
| `/coding-classes-in-na-h-eileanan-siar` | Coding Classes in the Western Isles |
| `/coding-classes-in-nakhal` | Coding Classes in Nakhal |
| `/coding-classes-in-natural-city-garia` | Coding & Maths Classes in Garia, Kolkata |
| `/coding-classes-in-neath-port-talbot` | Coding Classes in Neath Port Talbot |
| `/coding-classes-in-netherlands` | Online Coding Classes in the Netherlands |
| `/coding-classes-in-new-brunswick` | Coding Classes in New Brunswick |
| `/coding-classes-in-new-jersey` | Coding and AI Classes in New Jersey |
| `/coding-classes-in-new-york` | Coding Classes in New York |
| `/coding-classes-in-new-zealand` | Online Coding & AI Classes in New Zealand |
| `/coding-classes-in-newfoundland-and-labrador` | Coding Classes in Newfoundland and Labrador |
| `/coding-classes-in-newham-london` | Coding Classes in Newham, Stratford, East Ham |
| `/coding-classes-in-nijmegen` | Coding Classes in Nijmegen |
| `/coding-classes-in-nissewaard` | Coding Classes in Nissewaard |
| `/coding-classes-in-nizwa` | Coding Classes in Nizwa |
| `/coding-classes-in-noord-brabant` | Coding Classes in Noord-Brabant |
| `/coding-classes-in-noord-holland` | Coding Classes in Noord-Holland |
| `/coding-classes-in-norfolk` | Coding Classes in Norfolk |
| `/coding-classes-in-north-ayrshire` | Coding Classes in North Ayrshire |
| `/coding-classes-in-north-lanarkshire` | Coding Classes in North Lanarkshire |
| `/coding-classes-in-north-yorkshire` | Coding Classes in North Yorkshire |
| `/coding-classes-in-northamptonshire` | Coding Classes in Northamptonshire |
| `/coding-classes-in-northumberland` | Coding Classes in Northumberland |
| `/coding-classes-in-northwest-territories` | Coding Classes in the Northwest Territories |
| `/coding-classes-in-nottinghamshire` | Coding Classes in Nottinghamshire |
| `/coding-classes-in-nova-scotia` | Coding Classes in Nova Scotia |
| `/coding-classes-in-odisha` | Coding Classes in Odisha |
| `/coding-classes-in-oegstgeest` | Coding Classes in Oegstgeest |
| `/coding-classes-in-oman` | Online Coding Classes in Oman |
| `/coding-classes-in-ontario` | Coding Classes in Ontario |
| `/coding-classes-in-orkney` | Coding Classes in the Orkney Islands |
| `/coding-classes-in-oss` | Coding Classes in Oss |
| `/coding-classes-in-overijssel` | Coding Classes in Overijssel |
| `/coding-classes-in-oxfordshire` | Coding Classes in Oxfordshire |
| `/coding-classes-in-pembrokeshire` | Coding Classes in Pembrokeshire |
| `/coding-classes-in-perth-and-kinross` | Coding Classes in Perth and Kinross |
| `/coding-classes-in-powys` | Coding Classes in Powys |
| `/coding-classes-in-prins-alexander` | Coding Classes in Prins Alexander, Rotterdam |
| `/coding-classes-in-punjab` | Coding Classes in Punjab |
| `/coding-classes-in-purmerend` | Coding Classes in Purmerend |
| `/coding-classes-in-qatar` | Coding Classes in Qatar |
| `/coding-classes-in-quebec` | Coding Classes in Quebec |
| `/coding-classes-in-qurayyat` | Coding Classes in Qurayyat |
| `/coding-classes-in-qurum` | Online Coding Classes in Qurum |
| `/coding-classes-in-rajasthan` | Coding Classes in Rajasthan |
| `/coding-classes-in-rathfarnham-dublin` | Coding Classes in Rathfarnham, Dublin |
| `/coding-classes-in-rathmines-dublin` | Coding Classes in Rathmines, Dublin |
| `/coding-classes-in-redbridge-london` | Coding Classes in Redbridge, Ilford, Woodford |
| `/coding-classes-in-renfrewshire` | Coding Classes in Renfrewshire |
| `/coding-classes-in-rhondda-cynon-taf` | Coding Classes in Rhondda Cynon Taf |
| `/coding-classes-in-richmond-upon-thames-london` | Coding Classes in Richmond, Twickenham, Kew |
| `/coding-classes-in-rijswijk` | Coding Classes in Rijswijk |
| `/coding-classes-in-riyadh` | Coding Classes in Riyadh |
| `/coding-classes-in-roermond` | Coding Classes in Roermond |
| `/coding-classes-in-roosendaal` | Coding Classes in Roosendaal |
| `/coding-classes-in-rosedale-garden` | Coding & Maths Classes near Rosedale Garden |
| `/coding-classes-in-rotterdam` | Coding Classes in Rotterdam |
| `/coding-classes-in-rotterdam-centrum` | Coding Classes in Rotterdam Centrum |
| `/coding-classes-in-rustaq` | Coding Classes in Rustaq |
| `/coding-classes-in-rutland` | Coding Classes in Rutland |
| `/coding-classes-in-saham` | Coding Classes in Saham |
| `/coding-classes-in-salalah` | Coding Classes in Salalah |
| `/coding-classes-in-samail` | Coding Classes in Samail |
| `/coding-classes-in-sandyford-dublin` | Coding Classes in Sandyford, Dublin 18 |
| `/coding-classes-in-saskatchewan` | Coding Classes in Saskatchewan |
| `/coding-classes-in-saudi-arabia` | Coding Classes in Saudi Arabia |
| `/coding-classes-in-scheveningen` | Coding Classes in Scheveningen, The Hague |
| `/coding-classes-in-schiedam` | Coding Classes in Schiedam |
| `/coding-classes-in-scottish-borders` | Coding Classes in the Scottish Borders |
| `/coding-classes-in-seeb` | Online Coding Classes in Seeb |
| `/coding-classes-in-segbroek` | Coding Classes in Segbroek, The Hague |
| `/coding-classes-in-seria` | Coding Classes in Seria, Brunei |
| `/coding-classes-in-shalim` | Coding Classes in Shalim |
| `/coding-classes-in-sharjah` | Coding Classes in Sharjah |
| `/coding-classes-in-sherwood-estate` | Coding & Maths Classes near Sherwood Estate |
| `/coding-classes-in-shetland` | Coding Classes in the Shetland Islands |
| `/coding-classes-in-shinas` | Coding Classes in Shinas |
| `/coding-classes-in-shropshire` | Coding Classes in Shropshire |
| `/coding-classes-in-siddha-town-madhyamgram` | Coding & Maths Classes in Siddha Town, Madhyamgram |
| `/coding-classes-in-singapore` | Coding & AI Classes in Singapore |
| `/coding-classes-in-sittard-geleen` | Coding Classes in Sittard-Geleen |
| `/coding-classes-in-sohar` | Coding Classes in Sohar |
| `/coding-classes-in-somerset` | Coding Classes in Somerset |
| `/coding-classes-in-south-ayrshire` | Coding Classes in South Ayrshire |
| `/coding-classes-in-south-city` | Coding & Maths Classes near South City |
| `/coding-classes-in-south-dublin` | Coding Classes in South Dublin |
| `/coding-classes-in-south-lanarkshire` | Coding Classes in South Lanarkshire |
| `/coding-classes-in-south-yorkshire` | Coding Classes in South Yorkshire |
| `/coding-classes-in-southwark-london` | Coding Classes in Southwark and Peckham |
| `/coding-classes-in-staffordshire` | Coding Classes in Staffordshire |
| `/coding-classes-in-stillorgan-dublin` | Coding Classes in Stillorgan, Dublin |
| `/coding-classes-in-stratum` | Coding Classes in Stratum, Eindhoven |
| `/coding-classes-in-strijp` | Coding Classes in Strijp, Eindhoven |
| `/coding-classes-in-suffolk` | Coding Classes in Suffolk |
| `/coding-classes-in-sugam-habitat` | Coding & Maths Classes near Sugam Habitat |
| `/coding-classes-in-sukhobrishti` | Coding & Maths Classes near Sukhobrishti |
| `/coding-classes-in-sur` | Coding Classes in Sur |
| `/coding-classes-in-surrey` | Coding Classes in Surrey |
| `/coding-classes-in-sutton-london` | Coding Classes in Sutton, Cheam, Carshalton |
| `/coding-classes-in-sweden` | Online Coding & AI Classes in Sweden |
| `/coding-classes-in-switzerland` | Online Coding & AI Classes in Switzerland |
| `/coding-classes-in-tallaght-dublin` | Coding Classes in Tallaght, Dublin 24 |
| `/coding-classes-in-tamil-nadu` | Coding Classes in Tamil Nadu |
| `/coding-classes-in-taqah` | Coding Classes in Taqah |
| `/coding-classes-in-telangana` | Coding Classes in Telangana |
| `/coding-classes-in-temburong` | Coding Classes in Temburong and Bangar |
| `/coding-classes-in-terenure-dublin` | Coding Classes in Terenure, Dublin |
| `/coding-classes-in-texas` | Coding Classes in Texas |
| `/coding-classes-in-the-city-of-london` | Coding Classes in the City of London |
| `/coding-classes-in-the-hague` | Coding Classes in The Hague |
| `/coding-classes-in-the-hague-centrum` | Coding Classes in Den Haag Centrum |
| `/coding-classes-in-the-west-midlands` | Coding Classes in the West Midlands |
| `/coding-classes-in-thumrait` | Coding Classes in Thumrait |
| `/coding-classes-in-tilburg` | Coding Classes in Tilburg |
| `/coding-classes-in-tongelre` | Coding Classes in Tongelre, Eindhoven |
| `/coding-classes-in-torfaen` | Coding Classes in Torfaen |
| `/coding-classes-in-tower-hamlets-london` | Coding Classes in Tower Hamlets, Canary Wharf |
| `/coding-classes-in-tutong` | Coding Classes in Tutong |
| `/coding-classes-in-tyne-and-wear` | Coding Classes in Tyne and Wear |
| `/coding-classes-in-uae` | Online Coding & AI Classes in the UAE |
| `/coding-classes-in-udayan-condoville-em-bypass` | Coding & Maths Classes near Udayan Condoville |
| `/coding-classes-in-uithoorn` | Coding Classes in Uithoorn |
| `/coding-classes-in-united-kingdom` | Coding Classes in the UK |
| `/coding-classes-in-united-states` | Online Coding & AI Classes in the USA |
| `/coding-classes-in-uniworld-city` | Coding & Maths Classes near Uniworld City |
| `/coding-classes-in-upohar` | Coding & Maths Classes near Upohar, EM Bypass |
| `/coding-classes-in-urbana` | Coding & Maths Classes near Urbana, Anandapur |
| `/coding-classes-in-utrecht` | Coding Classes in Utrecht |
| `/coding-classes-in-utrecht-province` | Coding Classes in the Province of Utrecht |
| `/coding-classes-in-uttar-pradesh` | Coding Classes in Uttar Pradesh |
| `/coding-classes-in-uttarakhand` | Coding Classes in Uttarakhand |
| `/coding-classes-in-vale-of-glamorgan` | Coding Classes in the Vale of Glamorgan |
| `/coding-classes-in-veenendaal` | Coding Classes in Veenendaal |
| `/coding-classes-in-velsen` | Coding Classes in Velsen |
| `/coding-classes-in-venlo` | Coding Classes in Venlo |
| `/coding-classes-in-virginia` | Coding and AI Classes in Virginia |
| `/coding-classes-in-vlaardingen` | Coding Classes in Vlaardingen |
| `/coding-classes-in-voorschoten` | Coding Classes in Voorschoten |
| `/coding-classes-in-wadi-al-maawil` | Coding Classes in Wadi Al Maawil |
| `/coding-classes-in-wadi-bani-khalid` | Coding Classes in Wadi Bani Khalid |
| `/coding-classes-in-waltham-forest-london` | Coding Classes in Waltham Forest, Walthamstow |
| `/coding-classes-in-wandsworth-london` | Coding Classes in Wandsworth and Putney |
| `/coding-classes-in-warwickshire` | Coding Classes in Warwickshire |
| `/coding-classes-in-washington` | Coding and AI Classes in Washington State |
| `/coding-classes-in-wassenaar` | Coding Classes in Wassenaar |
| `/coding-classes-in-weesp` | Coding Classes in Weesp |
| `/coding-classes-in-west-bengal` | Coding Classes in West Bengal |
| `/coding-classes-in-west-dunbartonshire` | Coding Classes in West Dunbartonshire |
| `/coding-classes-in-west-lothian` | Coding Classes in West Lothian |
| `/coding-classes-in-west-sussex` | Coding Classes in West Sussex |
| `/coding-classes-in-west-yorkshire` | Coding Classes in West Yorkshire |
| `/coding-classes-in-westland` | Coding Classes in Westland |
| `/coding-classes-in-westminster-london` | Coding Classes in Westminster and Marylebone |
| `/coding-classes-in-wiltshire` | Coding Classes in Wiltshire |
| `/coding-classes-in-woensel-noord` | Coding Classes in Woensel-Noord, Eindhoven |
| `/coding-classes-in-woensel-zuid` | Coding Classes in Woensel-Zuid, Eindhoven |
| `/coding-classes-in-worcestershire` | Coding Classes in Worcestershire |
| `/coding-classes-in-yanqul` | Coding Classes in Yanqul |
| `/coding-classes-in-zaanstad` | Coding Classes in Zaanstad and Zaandam |
| `/coding-classes-in-zeeland` | Coding Classes in Zeeland |
| `/coding-classes-in-zoetermeer` | Coding Classes in Zoetermeer |
| `/coding-classes-in-zuid-holland` | Coding Classes in Zuid-Holland |
| `/coding-classes-in-zwolle` | Coding Classes in Zwolle |
| `/coding-classes-near-ajc-bose-road-kolkata` | Live Online Coding & Maths Classes near AJC Bose Road |
| `/coding-classes-near-alipore-kolkata` | Live Online Coding & Maths Classes near Alipore, Kolkata |
| `/coding-classes-near-andul-howrah` | Live Online Coding & Maths Classes near Andul, Howrah |
| `/coding-classes-near-baguiati-kolkata` | Live Online Coding & Maths Classes near Baguiati, Kolkata |
| `/coding-classes-near-bally-howrah` | Live Online Coding & Maths Classes near Bally, Howrah |
| `/coding-classes-near-ballygunge-kolkata` | Coding & Maths Classes near Ballygunge, Kolkata |
| `/coding-classes-near-baranagar-kolkata` | Live Online Coding & Maths Classes near Baranagar |
| `/coding-classes-near-bhowanipore-kolkata` | Coding & Maths Classes near Bhowanipore, Kolkata |
| `/coding-classes-near-camac-street-kolkata` | Live Online Coding & Maths Classes near Camac Street |
| `/coding-classes-near-deshapriya-park-kolkata` | Live Online Coding & Maths Classes near Deshapriya Park |
| `/coding-classes-near-dhakuria-kolkata` | Live Online Coding & Maths Classes near Dhakuria, Kolkata |
| `/coding-classes-near-domjur-howrah` | Live Online Coding & Maths Classes near Domjur, Howrah |
| `/coding-classes-near-dum-dum-kolkata` | Live Online Coding & Maths Classes near Dum Dum, Kolkata |
| `/coding-classes-near-elgin-road-kolkata` | Live Online Coding & Maths Classes near Elgin Road, Kolkata |
| `/coding-classes-near-gariahat-kolkata` | Live Online Coding & Maths Classes near Gariahat |
| `/coding-classes-near-golpark-kolkata` | Live Online Coding & Maths Classes near Golpark, Kolkata |
| `/coding-classes-near-hazra-kolkata` | Live Online Coding & Maths Classes near Hazra, Kolkata |
| `/coding-classes-near-howrah-city-howrah` | Live Online Coding & Maths Classes near Howrah City |
| `/coding-classes-near-jadavpur-kolkata` | Live Online Coding & Maths Classes near Jadavpur, Kolkata |
| `/coding-classes-near-jodhpur-park-kolkata` | Live Online Coding & Maths Classes near Jodhpur Park, Kolkata |
| `/coding-classes-near-kadamtala-howrah` | Live Online Coding & Maths Classes near Kadamtala, Howrah |
| `/coding-classes-near-kalighat-kolkata` | Live Online Coding & Maths Classes near Kalighat, Kolkata |
| `/coding-classes-near-kasba-kolkata` | Live Online Coding & Maths Classes near Kasba, Kolkata |
| `/coding-classes-near-kestopur-kolkata` | Live Online Coding & Maths Classes near Kestopur, Kolkata |
| `/coding-classes-near-lake-gardens-kolkata` | Live Online Coding & Maths Classes near Lake Gardens |
| `/coding-classes-near-lake-town-kolkata` | Live Online Coding & Maths Classes near Lake Town, Kolkata |
| `/coding-classes-near-lansdowne-kolkata` | Live Online Coding & Maths Classes near Lansdowne, Kolkata |
| `/coding-classes-near-liluah-howrah` | Live Online Coding & Maths Classes near Liluah, Howrah |
| `/coding-classes-near-loudon-street-kolkata` | Live Online Coding & Maths Classes near Loudon Street |
| `/coding-classes-near-mandirtala-howrah` | Live Online Coding & Maths Classes near Mandirtala, Howrah |
| `/coding-classes-near-me-australia-online-or-local` | Coding Classes Near Me in Australia: Online or Local? |
| `/coding-classes-near-nager-bazar-kolkata` | Live Online Coding & Maths Classes near Nager Bazar |
| `/coding-classes-near-new-alipore-kolkata` | Live Online Coding & Maths Classes near New Alipore |
| `/coding-classes-near-new-town-kolkata` | Coding & Maths Classes near New Town, Kolkata |
| `/coding-classes-near-park-circus-kolkata` | Live Online Coding & Maths Classes near Park Circus, Kolkata |
| `/coding-classes-near-park-street-kolkata` | Live Online Coding & Maths Classes near Park Street |
| `/coding-classes-near-ramrajatala-howrah` | Live Online Coding & Maths Classes near Ramrajatala, Howrah |
| `/coding-classes-near-rashbehari-kolkata` | Live Online Coding & Maths Classes near Rashbehari |
| `/coding-classes-near-salt-lake-kolkata` | Coding & Maths Classes near Salt Lake, Kolkata |
| `/coding-classes-near-santragachi-howrah` | Live Online Coding & Maths Classes near Santragachi, Howrah |
| `/coding-classes-near-shakespeare-sarani-kolkata` | Live Online Coding & Maths Classes near Shakespeare Sarani |
| `/coding-classes-near-shibpur-howrah` | Live Online Coding & Maths Classes near Shibpur, Howrah |
| `/coding-classes-near-shyambazar-kolkata` | Live Online Coding & Maths Classes near Shyambazar |
| `/coding-classes-near-southern-avenue-kolkata` | Live Online Coding & Maths Classes near Southern Avenue |
| `/coding-classes-near-sreebhumi-kolkata` | Live Online Coding & Maths Classes near Sreebhumi, Kolkata |
| `/coding-classes-near-tollygunge-kolkata` | Coding & Maths Classes near Tollygunge, Kolkata |
| `/coding-classes-near-uluberia-howrah` | Live Online Coding & Maths Classes near Uluberia, Howrah |
| `/coding-classes-near-vip-road-kolkata` | Live Online Coding & Maths Classes near VIP Road, Kolkata |
| `/coding-classes-vs-coding-camps-australia` | Coding Classes vs Coding Camps in Australia: Which Sticks? |

### B.9 Coding and Python by age (19)

| URL path | Page title |
|---|---|
| `/coding-for-10-year-olds` | Coding Classes for 10 Year Olds Online: Scratch to Python |
| `/coding-for-11-year-olds` | Coding Classes for 11 Year Olds: Python, Web and AI Projects |
| `/coding-for-12-year-olds` | Coding Classes for 12 Year Olds: Python, Web, Apps and AI |
| `/coding-for-13-year-olds` | Coding Classes for 13 Year Olds: Python Course, Web, Apps and AI |
| `/coding-for-14-year-olds` | Coding Classes for 14 Year Olds: Python OOP, Full Stack and DSA |
| `/coding-for-15-year-olds` | Coding Classes for 15 Year Olds: Full Stack, AI and DSA, Class 10 |
| `/coding-for-16-year-olds` | Coding Classes for 16 Year Olds: Full Stack, AI and DSA, Class 11 |
| `/coding-for-17-year-olds` | Coding Classes for 17 Year Olds: Class 12 CS, DSA and Portfolio |
| `/coding-for-8-year-olds` | Coding Classes for 8 Year Olds: Scratch and First Games, Live |
| `/coding-for-9-year-olds` | Coding Classes for 9 Year Olds: Scratch Games and First Python |
| `/python-for-10-year-olds` | Python for 10 Year Olds: Real Python Programs, Turtle Art & Mini Games |
| `/python-for-11-year-olds` | Python for 11 Year Olds: Functions, Files & First AI Projects for Class 6 |
| `/python-for-12-year-olds` | Python for 12 Year Olds: OOP, Pygame, sklearn & Real Projects for Class 7 |
| `/python-for-13-year-olds` | Python for 13 Year Olds: OOP, Flask APIs, sklearn ML & Portfolio Projects |
| `/python-for-14-year-olds` | Python for 14 Year Olds: Flask, Django Intro, sklearn ML & Kaggle Projects |
| `/python-for-15-year-olds` | Python for 15 Year Olds: Board-Safe Python + Django, ML & DSA for Class 10 |
| `/python-for-16-year-olds` | Python for 16 Year Olds: CS Stream Python, Pandas, ML, Django & DSA |
| `/python-for-17-year-olds` | Python for 17 Year Olds: Class 12 Board CS, College Portfolio, ML & DSA |
| `/python-for-9-year-olds` | Python for 9 Year Olds: First Python Programs, Turtle Graphics & Games |

### B.10 Coding and Python by school class (17)

| URL path | Page title |
|---|---|
| `/coding-for-class-10` | Coding for Class 10: Board-Safe CS Prep, Python, Java, AI & DSA |
| `/coding-for-class-11` | Coding for Class 11: CS Stream, Python/Pandas, MERN, AI/ML & DSA in C++ |
| `/coding-for-class-12` | Coding for Class 12: Board CS, College-Ready Portfolio, DSA & Competitive Programming |
| `/coding-for-class-3` | Coding for Class 3: Scratch, Block Coding & First Python for 8 Year Olds |
| `/coding-for-class-4` | Coding for Class 4: Scratch, Block Coding & First Python for 9 Year Olds |
| `/coding-for-class-5` | Coding for Class 5: Python, Scratch & AI Tools for 10 Year Olds |
| `/coding-for-class-6` | Coding for Class 6: Python, HTML/CSS & AI Projects Matched to CBSE/ICSE Syllabus |
| `/coding-for-class-7` | Coding for Class 7: Python, JavaScript, App Dev & AI for CBSE/ICSE Students |
| `/coding-for-class-8` | Coding for Class 8: Python OOP, Full Stack, Java & AI for CBSE/ICSE Students |
| `/coding-for-class-9` | Coding for Class 9: CBSE/ICSE CS, Python, Java, Full Stack & DSA |
| `/python-for-class-10` | Python for Class 10: Board-Safe Python for CBSE IT 402 + College Prep |
| `/python-for-class-11-cbse` | Python for Class 11 CBSE: CS 083 & IP Aligned, Pandas, SQL, Functions |
| `/python-for-class-12-cbse` | Python for Class 12 CBSE Board Exam: Full Syllabus, Project, SQL, Sample Papers |
| `/python-for-class-6` | Python for Class 6: CBSE Code 166 Python, Turtle, First AI (Age 11) |
| `/python-for-class-7` | Python for Class 7: OOP Basics, Pygame, First sklearn for Age 12 Students |
| `/python-for-class-8` | Python for Class 8: OOP, Flask API, sklearn, Kaggle Datasets & DSA Intro |
| `/python-for-class-9` | Python for Class 9: CBSE Code 402 Python, Flask, Django Intro & Kaggle |

### B.11 Comparison and alternative pages (54)

| URL path | Page title |
|---|---|
| `/after-school-coding-club-vs-online-class-australia` | After-School Coding Club vs Online Class in Australia |
| `/aqa-vs-edexcel-vs-ocr-gcse-maths` | AQA vs Edexcel vs OCR GCSE Maths: How the Boards Differ |
| `/art-of-problem-solving-alternative` | Art of Problem Solving Alternative: AoPS Compared, and a Tutor |
| `/bhanzu-alternative` | Bhanzu Alternative for 2026: Live Maths and Coding, Ages 6 to 67 |
| `/brightchamps-alternative` | BrightChamps Alternative 2026: Focused Depth, Not Breadth |
| `/byjus-coding-alternative` | BYJU'S Coding Alternative 2026: Live, Small-Batch, Honest |
| `/codakid-alternative` | CodaKid Alternative: Self-Paced Courses or Live Classes? |
| `/codewizardshq-alternative` | CodeWizardsHQ Alternative: How the Two Compare (2026) |
| `/codeyoung-alternative` | Codeyoung Alternative for 2026: Live Small-Batch Coding and Maths |
| `/coding-vs-maths` | Coding vs Maths: Which Should Your Child Learn? The Honest Answer |
| `/coding-vs-programming` | Coding vs Programming: The Real Difference & How We Build Programmers |
| `/coding-with-kids-alternative` | Coding with Kids Alternative: Ladder, In-Person, Online |
| `/codingal-alternative` | Codingal Alternative 2026: Depth-First Coding and Maths |
| `/common-core-math-vs-traditional-math` | Common Core Math vs Traditional Math: A Parent Guide |
| `/create-and-learn-alternative` | Create & Learn Alternative: Small Groups, Levels, Trials |
| `/cuemath-alternative` | Cuemath Alternative for 2026: A Live Coding and Maths School |
| `/duke-tip-alternatives` | Duke TIP Alternatives: Gifted Programs Since TIP Closed |
| `/free-demo-vs-priority-demo` | Free Demo vs Priority Demo |
| `/functional-skills-maths-vs-gcse-maths` | Functional Skills Maths vs GCSE Maths: Which Should You Take? |
| `/gcse-maths-calculator-vs-non-calculator-papers` | GCSE Maths Calculator vs Non-Calculator Papers Explained |
| `/gcse-maths-foundation-vs-higher` | GCSE Maths Foundation vs Higher Tier: Which Should You Sit? |
| `/group-vs-one-to-one-maths-tuition` | Group vs One-to-One Maths Tuition: Cost, Evidence, Fit |
| `/ics3u-vs-ics3c` | ICS3U vs ICS3C: Choosing Grade 11 Computer Studies in Ontario |
| `/id-tech-alternative` | iD Tech Alternative: Camps, Private Lessons, Weekly Classes |
| `/khan-academy-computer-science-vs-live-classes` | Khan Academy Computer Science vs Live Classes: How to Choose |
| `/khan-academy-math-vs-live-tutor` | Khan Academy Math vs a Live Tutor: Which Does Your Child Need? |
| `/live-vs-recorded-coding-classes` | Live vs Recorded Coding Classes for Kids: Which Is Better? |
| `/math-30-1-vs-math-30-2` | Math 30-1 vs Math 30-2: Alberta's Two Grade 12 Math Paths |
| `/maths-tutor-vs-tuition-centre-uk` | Maths Tutor vs Tuition Centre UK: Kumon, Explore Learning, Cost |
| `/mcf3m-vs-mcr3u` | MCF3M vs MCR3U: Which Grade 11 Math to Take in Ontario |
| `/modern-age-coders-vs-brightchamps` | Modern Age Coders vs BrightCHAMPS in Canada (2026) |
| `/modern-age-coders-vs-code-ninjas` | Modern Age Coders vs Code Ninjas: Canada Comparison 2026 |
| `/modern-age-coders-vs-codingal` | Modern Age Coders vs Codingal: Honest 2026 Comparison |
| `/modern-age-coders-vs-cuemath` | Modern Age Coders vs Cuemath: Honest 2026 Comparison |
| `/modern-age-coders-vs-juni-learning` | Modern Age Coders vs Juni Learning: 2026 Comparison |
| `/modern-age-coders-vs-kumon` | Modern Age Coders vs Kumon: Honest 2026 Comparison |
| `/modern-age-coders-vs-mathnasium` | Modern Age Coders vs Mathnasium: Honest 2026 Comparison |
| `/modern-age-coders-vs-outschool` | Modern Age Coders vs Outschool: School or Marketplace? (2026) |
| `/modern-age-coders-vs-oxford-learning` | Modern Age Coders vs Oxford Learning: Cost and Fit 2026 |
| `/modern-age-coders-vs-spirit-of-math` | Modern Age Coders vs Spirit of Math: 2026 Comparison |
| `/modern-age-coders-vs-tynker` | Modern Age Coders vs Tynker: App or Live Teaching? (2026) |
| `/modern-age-coders-vs-whitehat-jr-cuemath-codingal` | Modern Age Coders vs WhiteHat Jr, Cuemath & Codingal - Honest Comparison |
| `/national-5-vs-higher-maths` | National 5 vs Higher Maths: Papers, Topics and the Jump |
| `/online-vs-face-to-face-maths-tuition-uk` | Online vs Face-to-Face Maths Tuition UK: Cost Compared |
| `/online-vs-in-person-coding-classes-australia` | Online vs In-Person Coding Classes in Australia Compared |
| `/private-math-tutor-vs-online-tutoring` | Private Math Tutor vs Online Tutoring: 2026 Decision Guide |
| `/russian-school-of-mathematics-alternative` | Russian School of Mathematics Alternative: Compare and Choose |
| `/tutor-vs-tutoring-centre-maths-australia` | Maths Tutor vs Tutoring Centre in Australia: How to Choose |
| `/tynker-alternative` | Tynker Alternative 2026: A Live Teacher, Not an App Alone |
| `/vedantu-alternative` | Vedantu Alternative for 2026: Live Coding and Maths Classes |
| `/vibe-coding-vs-building-ai-netherlands` | Vibe Coding vs Building AI in the Netherlands |
| `/vibe-coding-vs-building-ai-oman` | Vibe Coding vs Building AI: A Guide for Parents in Oman |
| `/whitehat-jr-alternative` | WhiteHat Jr Alternative in 2026: Real Mentors, Not Scripts |
| `/year-round-coding-classes-vs-summer-camps-bahamas` | Year-Round Coding Classes vs Summer Camps in The Bahamas |

### B.12 Camps (summer and winter) (16)

| URL path | Page title |
|---|---|
| `/coding-bootcamp-for-teens` | Coding Bootcamp for Teens: An Honest Eight-Week Plan |
| `/coding-camp-cost-canada` | Coding Camp Cost in Canada: 2026 Weekly Fees Compared |
| `/coding-summer-camp-for-middle-schoolers` | Coding Summer Camp for Middle Schoolers: Grades 6 to 8 |
| `/game-design-summer-camp-for-teens` | Game Design Summer Camp for Teens: Engines, Plans, Portfolio |
| `/march-break-coding-camp-online` | March Break Coding Online: 2027 Dates, PA Days, Live Classes |
| `/online-coding-summer-camp` | Online Coding Summer Camp |
| `/online-coding-summer-camp-canada` | Online Coding Summer Camp in Canada: Summer 2027 Guide |
| `/summer-coding-camp` | Summer Coding Camp 2026 |
| `/summer-coding-camp-adults` | Summer Coding Bootcamp for Adults 2026 (18+) |
| `/summer-coding-camp-kids` | Summer Coding Camp for Kids 2026 - Ages 6-12 |
| `/summer-coding-camp-teens` | Summer Coding Camp for Teens 2026 (Ages 12-17) |
| `/vibe-coding-and-ai-agents-classes-in-campbelltown-nsw` | Vibe Coding and AI Agents Classes in Campbelltown, NSW |
| `/winter-coding-camp` | Winter Coding Camp 2026 |
| `/winter-coding-camp-adults` | Winter Coding Camp for Adults 2026 (Ages 18+) |
| `/winter-coding-camp-kids` | Winter Coding Camp for Kids 2026 (Ages 6-11) |
| `/winter-coding-camp-teens` | Winter Coding Camp for Teens 2026 (Ages 12-17) |

### B.13 Mathematics landing pages (365)

| URL path | Page title |
|---|---|
| `/11-plus-maths-tuition` | 11 Plus Maths Tuition Online · 1:1 GL & CEM 11+ Maths Prep |
| `/11-plus-maths-tuition-barnet` | 11 Plus Maths Tuition Barnet |
| `/11-plus-maths-tuition-bexley` | 11 Plus Maths Tuition Bexley |
| `/11-plus-maths-tuition-birmingham` | 11 Plus Maths Tuition Birmingham |
| `/11-plus-maths-tuition-bournemouth-christchurch-and-poole` | 11 Plus Maths Tuition Bournemouth and Poole |
| `/11-plus-maths-tuition-bromley` | 11 Plus Maths Tuition Bromley |
| `/11-plus-maths-tuition-buckinghamshire` | 11 Plus Maths Tuition Buckinghamshire |
| `/11-plus-maths-tuition-calderdale` | 11 Plus Maths Tuition Calderdale |
| `/11-plus-maths-tuition-enfield` | 11 Plus Maths Tuition Enfield |
| `/11-plus-maths-tuition-essex` | 11 Plus Maths Tuition Essex |
| `/11-plus-maths-tuition-gloucestershire` | 11 Plus Maths Tuition Gloucestershire |
| `/11-plus-maths-tuition-hertfordshire` | 11 Plus Maths Tuition Hertfordshire |
| `/11-plus-maths-tuition-kent` | 11 Plus Maths Tuition Kent |
| `/11-plus-maths-tuition-kingston` | 11 Plus Maths Tuition Kingston |
| `/11-plus-maths-tuition-lancashire` | 11 Plus Maths Tuition Lancashire |
| `/11-plus-maths-tuition-lincolnshire` | 11 Plus Maths Tuition Lincolnshire |
| `/11-plus-maths-tuition-medway` | 11 Plus Maths Tuition Medway |
| `/11-plus-maths-tuition-north-yorkshire` | 11 Plus Maths Tuition North Yorkshire |
| `/11-plus-maths-tuition-plymouth` | 11 Plus Maths Tuition Plymouth |
| `/11-plus-maths-tuition-reading` | 11 Plus Maths Tuition Reading |
| `/11-plus-maths-tuition-redbridge` | 11 Plus Maths Tuition Redbridge |
| `/11-plus-maths-tuition-slough` | 11 Plus Maths Tuition Slough |
| `/11-plus-maths-tuition-southend` | 11 Plus Maths Tuition Southend |
| `/11-plus-maths-tuition-sutton` | 11 Plus Maths Tuition Sutton |
| `/11-plus-maths-tuition-torbay` | 11 Plus Maths Tuition Torbay |
| `/11-plus-maths-tuition-trafford` | 11 Plus Maths Tuition Trafford |
| `/11-plus-maths-tuition-warwickshire` | 11 Plus Maths Tuition Warwickshire |
| `/11-plus-maths-tuition-wiltshire` | 11 Plus Maths Tuition Wiltshire |
| `/11-plus-maths-tuition-wirral` | 11 Plus Maths Tuition Wirral |
| `/11-plus-maths-tuition-wolverhampton-and-walsall` | 11 Plus Maths Tuition Wolverhampton and Walsall |
| `/13-plus-scholarship-maths-preparation` | 13 Plus Scholarship Maths Preparation |
| `/16-plus-sixth-form-entrance-maths` | 16 Plus Entrance Exam Maths |
| `/7-plus-maths-preparation` | 7 Plus Maths Preparation |
| `/a-level-maths-tuition-online` | A-Level Maths Tuition Online · 1:1 Pure, Mechanics & Statistics |
| `/a-level-maths-tutor-cost-uk` | A Level Maths Tutor Cost UK 2026: Hourly Rates Compared |
| `/a-level-maths-tutor-uae` | A-Level Maths Tutor in the UAE · 1:1 Online Pure, Mechanics & Statistics |
| `/accelerated-math-program-online` | Accelerated Math Program Online: Compacted Math Help |
| `/accuplacer-math-prep` | ACCUPLACER Math Prep: Arithmetic, QAS and AAF Tests |
| `/act-math-tutoring-online` | ACT Math Tutoring Online · 1:1 ACT Math Prep |
| `/advanced-higher-maths-tuition-online` | Advanced Higher Maths Tuition Online |
| `/alberta-grade-6-math-pat-practice` | Alberta Grade 6 Math PAT 2027: What It Tests, With Practice |
| `/alberta-grade-9-math-pat-practice` | Alberta Grade 9 Math PAT: Part A, Part B and Practice |
| `/alberta-math-30-1-diploma-exam-prep` | Alberta Math 30-1 Diploma Exam 2027: Dates, Marking, Prep |
| `/alberta-new-math-curriculum-explained` | Alberta's New Math Curriculum Explained: K to 6 and 7 to 9 |
| `/aleks-math-placement-test-prep` | ALEKS Math Placement Test Prep: How ALEKS PPL Works |
| `/algebra-1-eoc-prep` | Algebra 1 EOC Prep: How the Exam Works in Each State |
| `/algebra-1-regents-prep` | Algebra 1 Regents Prep: Live Online Classes for June 2027 |
| `/algebra-2-regents-prep` | Algebra 2 Regents Prep: The New Exam, June 2027 |
| `/algebra-2-tutoring-online` | Algebra 2 Tutoring Online |
| `/algebra-tutoring-online-usa` | Algebra Tutoring Online (USA) · 1:1 Pre-Algebra, Algebra 1 & 2 |
| `/american-maths-tutor-uae` | American Curriculum & SAT Maths Tutor in the UAE · 1:1 Online |
| `/ap-calculus-tutoring-online` | AP Calculus Tutoring Online · 1:1 AP Calculus AB & BC Prep |
| `/ap-computer-science-a-online-classes` | AP Computer Science A Online Classes |
| `/ap-computer-science-a-practice-questions` | AP Computer Science A Practice Questions, With Answers |
| `/ap-computer-science-a-score-calculator` | AP Computer Science A Score Calculator: A Labelled Estimate |
| `/ap-computer-science-principles-online-coaching` | AP Computer Science Principles Online Coaching |
| `/ap-csp-create-performance-task-guide` | AP CSP Create Performance Task Guide: Rules, PPR and Deadline |
| `/ap-csp-score-calculator` | AP CSP Score Calculator: Weights, Rubric Points, an Estimate |
| `/ap-precalculus-tutoring-online` | AP Precalculus Tutoring Online: Units 1 to 3, May 2027 Exam |
| `/ap-statistics-tutoring-online` | AP Statistics Tutoring Online · 1:1 AP Stats Prep |
| `/apsmo-maths-olympiad-practice` | APSMO Maths Olympiad Practice |
| `/aqa-a-level-further-maths-7367-help` | AQA A Level Further Maths 7367 Help: Papers and Options |
| `/aqa-a-level-maths-7357-help` | AQA A Level Maths 7357 Help: Papers, Topics and Calculator |
| `/aqa-gcse-maths-8300-help` | AQA GCSE Maths 8300 Help |
| `/aqa-level-2-further-maths-8365-help` | AQA Level 2 Further Maths 8365 Help |
| `/australian-coding-maths-and-ai-competitions-calendar` | Coding and Maths Competitions in Australia: 2026 Calendar |
| `/australian-curriculum-maths-year-7-to-10-help` | Australian Curriculum Maths Years 7 to 10 Help |
| `/australian-maths-competitions-for-primary-kids` | Maths Competitions for Primary Kids in Australia: A Guide |
| `/australian-maths-trust-amc-aio-cat-preparation` | Australian Maths Trust Prep: AMC, AIO and CAT, Live Online |
| `/best-online-math-tutoring-2026` | Best Online Math Tutoring 2026: Ranked Honestly, With Sources |
| `/best-online-math-tutoring-in-canada` | Best Online Math Tutoring in Canada: 7 Checks Before You Pick |
| `/best-online-maths-classes-2026` | Best Online Maths Classes for Kids 2026: Ranked Honestly |
| `/big-ideas-math-help` | Big Ideas Math Help: Live Tutoring for Grades 6 to Algebra 2 |
| `/boston-exam-schools-math-prep` | Boston Exam Schools Math Prep: MAP Growth and GPA, 2027 |
| `/caaspp-math-practice` | CAASPP Math Practice: California Test Guide, Grades 3 to 11 |
| `/calculus-12-tutor-bc` | Calculus 12 BC Tutor Online: Limits, Derivatives, Integrals |
| `/calculus-tutoring-online` | Calculus Tutoring Online |
| `/cambridge-a-level-further-maths-9231-help` | Cambridge 9231 Further Maths Help: Papers and Routes |
| `/cambridge-a-level-maths-9709-help` | Cambridge A Level Maths 9709 Help: Papers, Routes, Syllabus |
| `/cambridge-igcse-additional-maths-0606-help` | IGCSE Additional Maths 0606 Help: Papers, Topics, Grades |
| `/cambridge-igcse-maths-0580-help` | Cambridge IGCSE Maths 0580 Help: Papers, Tiers, Accuracy |
| `/canada-high-school-math-courses-compared` | Grade 12 Math by Province: MHF4U, Math 30-1 and More |
| `/canada-math-and-coding-contest-calendar` | Canada Contest Calendar 2026 to 2027: CEMC, CCC and COMC |
| `/canadian-math-olympiad-cmo-path` | Canadian Math Olympiad (CMO): The Path to Team Canada |
| `/cbse-icse-maths-tuition-online` | CBSE and ICSE Maths Tuition Online, Class 6 to 12: Live Batches |
| `/cbse-maths-tutor-uae` | CBSE Maths Tutor in the UAE · 1:1 Online CBSE & ICSE: Class 6 to 12 |
| `/ccea-a-level-maths-help` | CCEA A Level Maths Help: AS 1 to A2 2 Units Explained |
| `/ccea-gcse-maths-help` | CCEA GCSE Maths Help |
| `/cem-11-plus-maths-practice` | CEM 11 Plus Maths Practice |
| `/clep-calculus-prep` | CLEP Calculus Prep and CLEP Precalculus Prep: Exam Guide |
| `/clep-college-algebra-prep` | CLEP College Algebra Prep: Exam Topics, Scores, Practice |
| `/coding-class-or-maths-tutor-first-australia` | Coding Class or Maths Tutor First? A Guide for Australian Parents |
| `/colorado-cmas-math-practice` | CMAS Math Practice for Colorado Grades 3 to 8 (2027 Test) |
| `/common-core-math-tutor` | Common Core Math Tutor Online: Homework Help, Grades K to 8 |
| `/common-entrance-maths-tuition` | Common Entrance Maths Tuition · 1:1 ISEB 13+ & 11+ Maths |
| `/continental-math-league-preparation` | Continental Math League Practice Problems and Prep, Grades 2 to 9 |
| `/dual-enrollment-math-help` | Dual Enrollment Math Help: College Algebra and Calculus I |
| `/edexcel-a-level-further-maths-9fm0-help` | Edexcel A Level Further Maths 9FM0 Help: Option Routes |
| `/edexcel-a-level-maths-9ma0-help` | Edexcel A Level Maths 9MA0 Help: Papers, Data Set, Formulae |
| `/edexcel-gcse-maths-1ma1-help` | Edexcel GCSE Maths 1MA1 Help |
| `/edexcel-igcse-further-pure-maths-4pm1-help` | Edexcel IGCSE Further Pure Maths 4PM1 Help and Topics |
| `/edexcel-international-gcse-maths-a-4ma1-help` | Edexcel IGCSE Maths 4MA1 Help: Papers, Tiers and Grades |
| `/envision-math-help` | enVision Math Help: Live Tutoring for Grades K to 8 (Savvas) |
| `/eqao-grade-3-math-practice` | EQAO Grade 3 Math Practice: 15 Free Questions with Answers |
| `/eqao-grade-6-math-practice` | EQAO Grade 6 Math Practice: 15 Sample Questions, Answers |
| `/eqao-grade-9-math-practice` | EQAO Grade 9 Math Practice: Format, Formula Sheet, 15 Questions |
| `/esat-maths-preparation` | ESAT Maths Preparation: Mathematics 1 and 2, 2026 to 2027 |
| `/eureka-math-homework-help` | Eureka Math Homework Help for Parents (and EngageNY) |
| `/foundations-of-math-11-tutor-bc` | Foundations of Math 11 BC Tutor: Curriculum, Practice, Help |
| `/functional-skills-maths-course-cost-uk` | Functional Skills Maths Course Cost UK 2026: Free or Paid? |
| `/functional-skills-maths-tuition-online` | Functional Skills Maths Tuition Online · 1:1 Entry 3, Level 1 & Level 2 |
| `/further-maths-tuition-online` | Further Maths Tuition Online · 1:1 A-Level Further Mathematics |
| `/further-maths-tutor-cost-uk` | Further Maths Tutor Cost UK 2026: Rates and What You Pay For |
| `/further-maths-when-your-school-does-not-offer-it` | Further Maths When Your School Does Not Offer It |
| `/gcse-foundation-maths-tutor-online` | GCSE Foundation Maths Tutor Online |
| `/gcse-higher-maths-grade-9-tutor` | GCSE Higher Maths Grade 9 Tutor |
| `/gcse-maths-and-numeracy-wales-help` | GCSE Maths and Numeracy Help, Wales |
| `/gcse-maths-grades-explained` | GCSE Maths Grades 1 to 9 Explained: What 4 and 5 Mean |
| `/gcse-maths-resit-explained` | GCSE Maths Resit Explained: Rules, November Series, Adults |
| `/gcse-maths-tuition-online` | GCSE Maths Tuition Online · 1:1 AQA, Edexcel & OCR |
| `/gcse-maths-tutor-cost-uk` | GCSE Maths Tutor Cost UK 2026: Hourly Rates by Format |
| `/gcse-maths-tutor-uae` | GCSE Maths Tutor in the UAE · 1:1 Online IGCSE & GCSE: AQA, Edexcel, OCR, CIE |
| `/gcse-statistics-tutor-online` | GCSE Statistics Tutor Online |
| `/geometry-regents-prep` | Geometry Regents Prep: Proofs, Tools and the June 2027 Exam |
| `/geometry-tutoring-online-usa` | Geometry Tutoring Online (USA) · 1:1 High School Geometry & Proofs |
| `/gifted-and-talented-maths-and-coding-uk` | Gifted and Talented Maths and Coding UK: More Able Pupils |
| `/gl-assessment-11-plus-maths-practice` | GL Assessment 11 Plus Maths Practice |
| `/go-math-homework-help` | Go Math Homework Help (and Into Math): Live Tutor, Grades K to 6 |
| `/higher-maths-tuition-online` | Higher Maths Tuition Online |
| `/homeschool-coding-and-math-alberta` | Homeschool Coding and Math in Alberta: Home Education Guide |
| `/homeschool-coding-and-math-bc` | Homeschool Coding and Math in BC: School Act Guide |
| `/homeschool-coding-and-math-ontario` | Homeschool Coding and Math in Ontario: A PPM 131 Guide |
| `/homeschool-math-curriculum-guide-usa` | Homeschool Math Curriculum Comparison: 9 Programs Side by Side |
| `/homeschool-math-curriculum-usa` | Homeschool Math Curriculum (USA) · 1:1 Online Math for Homeschoolers |
| `/hsc-maths-advanced-tutoring` | HSC Maths Advanced Tutoring |
| `/hsc-maths-extension-1-tutoring` | HSC Maths Extension 1 Tutoring |
| `/hsc-maths-extension-2-tutoring` | HSC Maths Extension 2 Tutoring |
| `/hsc-maths-standard-tutoring` | HSC Maths Standard Tutoring |
| `/hspt-math-prep` | HSPT Math Prep and Tutoring: Quantitative and Math |
| `/hunter-college-high-school-math-prep` | Hunter College High School Entrance Exam Math Prep 2027 |
| `/i-ready-math-help` | i-Ready Math Help: Diagnostic Results and Home Support |
| `/ib-extended-essay-maths-computer-science-mentoring` | IB Extended Essay in Maths or Computer Science |
| `/ib-maths-ai-sl-tutor-online` | IB Maths AI SL Tutor Online |
| `/ib-maths-ia-guidance` | IB Maths IA Guidance |
| `/ib-maths-tuition-online` | IB Maths Tuition Online |
| `/ib-maths-tutor-uae` | IB Maths Tutor in the UAE · 1:1 Maths AA & AI (SL & HL) |
| `/ib-myp-maths-tutor-online` | IB MYP Maths Tutor Online |
| `/icas-maths-practice-online` | ICAS Maths Practice Online |
| `/igcse-maths-for-home-educated-students-uk` | IGCSE Maths for Home-Educated Students: Private Candidates |
| `/igcse-maths-tuition-online` | IGCSE Maths Tuition Online |
| `/illinois-iar-math-practice` | Illinois IAR Math Practice: The Spring 2027 Test, Grades 3 to 8 |
| `/independent-school-11-plus-maths-london` | London 11 Plus Consortium Maths |
| `/integrated-math-1-tutoring` | Integrated Math 1 Tutoring: Integrated Math I Help Online |
| `/integrated-math-2-tutoring` | Integrated Math 2 Tutoring: Integrated Math II Help Online |
| `/integrated-math-3-tutoring` | Integrated Math 3 Tutoring: Integrated Math III Help Online |
| `/iowa-assessments-math-prep` | Iowa Assessments Math Prep (ITBS) for Grades 1 to 5 |
| `/is-a-level-further-maths-worth-it` | Is A Level Further Maths Worth It? What It Adds and Costs |
| `/is-maths-tuition-worth-it-uk` | Is Maths Tuition Worth It? An Honest UK Guide for 2026 |
| `/iseb-common-pre-test-maths-practice` | ISEB Common Pre-Test Maths Practice |
| `/isee-ssat-math-prep` | ISEE & SSAT Math Prep Online |
| `/keystone-algebra-1-prep` | Keystone Algebra 1 Prep: Modules, Anchors and 2027 Dates |
| `/ks1-maths-tuition-online` | KS1 Maths Tuition Online |
| `/ks1-sats-maths-explained` | KS1 SATs Maths Explained |
| `/ks2-and-11-plus-maths-tutor-cost-uk` | KS2 and 11 Plus Maths Tutor Cost UK 2026: What to Budget |
| `/ks2-maths-tuition-online` | KS2 Maths Tuition Online · 1:1 Year 3-6 & SATs Maths |
| `/ks2-sats-maths-papers-explained` | KS2 SATs Maths Papers Explained: Arithmetic and Reasoning |
| `/ks3-maths-tuition-online` | KS3 Maths Tuition Online · 1:1 Year 7-9 Maths |
| `/map-growth-math-test-prep` | MAP Growth Math Test Prep: RIT Scores and Readiness |
| `/math-30-1-tutor-alberta` | Math 30-1 Tutor, Alberta: Outcomes, Worked Problems, Practice |
| `/math-catch-up-program` | Math Catch-Up Program |
| `/math-classes-for-kids-in-canada` | Math Classes for Kids in Canada: Grades 1 to 8, Live Online |
| `/math-competitions-for-middle-school-students` | Math Competitions for Middle School: MATHCOUNTS and More |
| `/math-kangaroo-canada-preparation` | Math Kangaroo Canada 2027: Format, Grades and Practice |
| `/math-kangaroo-usa-preparation` | Math Kangaroo USA Preparation: Live Online, Grades 1 to 12 |
| `/math-league-contest-preparation` | Math League Contest Preparation: 2026-27 Dates and Rounds |
| `/math-mammoth-tutor` | Math Mammoth Tutor Online: Live Help for Grades 1 to 7 |
| `/math-olympiad-amc-tutoring` | Math Olympiad & AMC Tutoring Online · 1:1 AMC 8/10/12 & MATHCOUNTS Coaching |
| `/math-tutor-brampton` | Math Tutor Brampton |
| `/math-tutor-burnaby` | Math Tutor Burnaby |
| `/math-tutor-calgary` | Math Tutor Calgary |
| `/math-tutor-cost-canada` | Math Tutor Cost in Canada: Hourly Rates, Free Options, Real Price |
| `/math-tutor-edmonton` | Math Tutor Edmonton |
| `/math-tutor-markham` | Math Tutor Markham |
| `/math-tutor-mississauga` | Math Tutor Mississauga |
| `/math-tutor-montreal` | Math Tutor Montreal |
| `/math-tutor-oakville` | Math Tutor Oakville |
| `/math-tutor-ottawa` | Math Tutor Ottawa |
| `/math-tutor-richmond-hill` | Math Tutor Richmond Hill |
| `/math-tutor-surrey-bc` | Math Tutor Surrey, BC |
| `/math-tutor-toronto` | Math Tutor Toronto |
| `/math-tutor-vancouver` | Math Tutor Vancouver |
| `/math-tutor-vaughan` | Math Tutor Vaughan |
| `/math-tutor-waterloo-ontario` | Math Tutor Waterloo, Ontario |
| `/math-tutor-winnipeg` | Math Tutor Winnipeg |
| `/math-u-see-tutor` | Math-U-See Tutor Online: Live Help From Delta to Algebra 1 |
| `/maths-behind-machine-learning` | The Maths Behind Machine Learning - Linear Algebra, Calculus & Probability for AI |
| `/maths-challenge-for-young-australians-practice` | Maths Challenge for Young Australians Practice |
| `/maths-class-10` | Maths Tuition for Class 10: CBSE & ICSE Board Exam Prep |
| `/maths-classes-for-adults-uae` | Maths Classes for Adults in the UAE · 1:1 Online: Work, Study & GMAT/GRE |
| `/maths-for-home-educated-children-uk` | Maths for Home Educated Children UK |
| `/maths-masterclasses-for-able-students-uk` | Maths Masterclasses UK: Royal Institution and Online Stretch |
| `/maths-olympiad-classes-online` | Maths Olympiad Classes Online: Which Contest, and How to Enter |
| `/maths-olympiad-training-uk` | Maths Olympiad Training UK |
| `/maths-tuition-for-kids-uae` | Maths Tuition for Kids in the UAE · 1:1 Online Primary Maths |
| `/maths-tuition-for-teens-uae` | Maths Tuition for Teens in the UAE · 1:1 Online Secondary Maths |
| `/maths-tuition-in-belfast` | Maths Tuition in Belfast |
| `/maths-tuition-in-birmingham` | Maths Tuition in Birmingham |
| `/maths-tuition-in-bristol` | Maths Tuition in Bristol |
| `/maths-tuition-in-cambridge` | Maths Tuition in Cambridge |
| `/maths-tuition-in-cardiff` | Maths Tuition in Cardiff |
| `/maths-tuition-in-coventry` | Maths Tuition in Coventry |
| `/maths-tuition-in-edinburgh` | Maths Tuition in Edinburgh |
| `/maths-tuition-in-glasgow` | Maths Tuition in Glasgow |
| `/maths-tuition-in-leeds` | Maths Tuition in Leeds |
| `/maths-tuition-in-leicester` | Maths Tuition in Leicester |
| `/maths-tuition-in-liverpool` | Maths Tuition in Liverpool |
| `/maths-tuition-in-london` | Maths Tuition in London |
| `/maths-tuition-in-luton` | Maths Tuition in Luton |
| `/maths-tuition-in-manchester` | Maths Tuition in Manchester |
| `/maths-tuition-in-milton-keynes` | Maths Tuition in Milton Keynes |
| `/maths-tuition-in-nottingham` | Maths Tuition in Nottingham |
| `/maths-tuition-in-oxford` | Maths Tuition in Oxford |
| `/maths-tuition-in-reading` | Maths Tuition in Reading |
| `/maths-tuition-in-sheffield` | Maths Tuition in Sheffield |
| `/maths-tuition-in-slough` | Maths Tuition in Slough |
| `/maths-tutor-adelaide` | Maths Tutor in Adelaide |
| `/maths-tutor-box-hill` | Maths Tutor in Box Hill |
| `/maths-tutor-brisbane` | Maths Tutor in Brisbane |
| `/maths-tutor-canberra` | Maths Tutor in Canberra |
| `/maths-tutor-chatswood` | Maths Tutor in Chatswood |
| `/maths-tutor-cost-australia-explained` | Maths Tutor Cost in Australia 2026: Rates Explained |
| `/maths-tutor-cost-scotland` | Maths Tutor Cost in Scotland 2026: National 5 and Higher |
| `/maths-tutor-glen-waverley` | Maths Tutor in Glen Waverley |
| `/maths-tutor-gold-coast` | Maths Tutor Gold Coast |
| `/maths-tutor-hobart` | Maths Tutor in Hobart |
| `/maths-tutor-in-abu-dhabi` | Maths Tutor in Abu Dhabi · 1:1 Online Maths Tuition, Every Curriculum |
| `/maths-tutor-in-dubai` | Maths Tutor in Dubai · 1:1 Online Maths Tuition, Every Curriculum |
| `/maths-tutor-in-sharjah` | Maths Tutor in Sharjah · 1:1 Online Maths Tuition, Every Curriculum |
| `/maths-tutor-melbourne` | Maths Tutor in Melbourne |
| `/maths-tutor-newcastle-nsw` | Maths Tutor Newcastle NSW |
| `/maths-tutor-parramatta` | Maths Tutor in Parramatta |
| `/maths-tutor-perth-wa` | Maths Tutor in Perth, WA |
| `/maths-tutor-sunnybank` | Maths Tutor in Sunnybank |
| `/maths-tutor-sydney` | Maths Tutor in Sydney |
| `/mcas-math-prep` | MCAS Math Prep: Grades 3 to 8 and Grade 10, 2027 Guide |
| `/mcv4u-calculus-and-vectors-tutor` | MCV4U Calculus and Vectors Tutor: Ontario Grade 12 Help |
| `/middle-school-math-placement-test-prep` | Middle School Math Placement Test Prep: Grade 6 to Algebra 1 |
| `/moems-math-olympiad-preparation` | MOEMS Preparation: Math Olympiad Practice for Grades 4 to 8 |
| `/mth1w-grade-9-math-explained` | MTH1W Explained: Ontario De-streamed Grade 9 Math and Coding |
| `/national-5-applications-of-maths-help` | National 5 Applications of Maths Help |
| `/national-5-maths-tuition-online` | National 5 Maths Tuition Online |
| `/nc-eog-math-practice` | NC EOG Math Practice: Grades 3 to 8, the 2027 Test |
| `/nc-math-1-eoc-prep` | NC Math 1 EOC Prep, With NC Math 3: The North Carolina Tests |
| `/njgpa-math-prep` | NJGPA Math Prep: The 450 Graduation Score, Class of 2028 |
| `/njsla-math-practice` | NJSLA Math Practice: The 2027 Adaptive Test, Grades 3 to 8 |
| `/noetic-math-contest-preparation` | Noetic Math Contest Practice Problems and Prep, Grades 2 to 8 |
| `/nys-math-test-prep-grades-3-8` | NYS Math Test Prep, Grades 3 to 8: The 2027 State Test |
| `/oc-test-maths-practice-nsw` | OC Test Maths Practice NSW |
| `/ocr-a-level-maths-h240-help` | OCR A Level Maths H240 Help: Papers and Command Words |
| `/ocr-fsmq-additional-maths-6993-help` | OCR FSMQ Additional Maths 6993 Help |
| `/ocr-gcse-maths-j560-help` | OCR GCSE Maths J560 Help |
| `/ocr-mei-a-level-maths-h640-help` | OCR MEI A Level Maths H640 Help: Comprehension Paper |
| `/online-math-circle-for-kids` | Online Math Circle for Kids: What It Is and How to Join |
| `/online-math-tutor-10th-grade` | Online Math Tutor for 10th Grade |
| `/online-math-tutor-11th-grade` | Online Math Tutor for 11th Grade |
| `/online-math-tutor-12th-grade` | Online Math Tutor for 12th Grade |
| `/online-math-tutor-1st-grade` | Online Math Tutor for 1st Grade |
| `/online-math-tutor-2nd-grade` | Online Math Tutor for 2nd Grade |
| `/online-math-tutor-3rd-grade` | Online Math Tutor for 3rd Grade |
| `/online-math-tutor-4th-grade` | Online Math Tutor for 4th Grade |
| `/online-math-tutor-5th-grade` | Online Math Tutor for 5th Grade |
| `/online-math-tutor-6th-grade` | Online Math Tutor for 6th Grade |
| `/online-math-tutor-7th-grade` | Online Math Tutor for 7th Grade |
| `/online-math-tutor-8th-grade` | Online Math Tutor for 8th Grade |
| `/online-math-tutor-9th-grade` | Online Math Tutor for 9th Grade |
| `/online-math-tutor-canada` | Online Math Tutor Canada |
| `/online-math-tutor-cost` | Online Math Tutor Cost 2026: Real US Prices by Format |
| `/online-math-tutor-kindergarten` | Online Math Tutor for Kindergarten |
| `/online-maths-circle-uk` | Online Maths Circle UK: University Clubs and a Weekly Circle |
| `/online-maths-classes-for-adults-in-uk` | Online Maths Classes for Adults in the UK · 1:1 Numeracy, GCSE Resit & Functional Skills |
| `/online-maths-classes-for-adults-in-usa` | Online Maths Classes for Adults in the USA · 1:1 Math for Work, Study & Confidence |
| `/online-maths-summer-school-uk` | Online Maths Summer School UK: UKMT Summer School Explained |
| `/online-maths-tuition` | Online Maths Tuition for Class 1-12, CBSE & ICSE |
| `/online-maths-tuition-for-college-students-in-uk` | Online Maths Tuition for College & Sixth Form in the UK · 1:1 A-Level & University Maths |
| `/online-maths-tuition-for-kids-in-uk` | Online Maths Tuition for Kids in the UK · 1:1 Primary Maths (KS1 & KS2) |
| `/online-maths-tuition-for-teens-in-uk` | Online Maths Tuition for Teens in the UK · 1:1 KS3 & GCSE Maths |
| `/online-maths-tuition-singapore` | Online Maths Tuition Singapore |
| `/online-maths-tuition-uae` | Online Maths Tuition in the UAE · 1:1 Across Every Curriculum & Emirate |
| `/online-maths-tutoring-australia` | Online Maths Tutoring Australia |
| `/online-maths-tutoring-for-college-students-in-usa` | Online Maths Tutoring for College Students in the USA · 1:1 Calculus, Linear Algebra &... |
| `/online-maths-tutoring-for-kids-in-usa` | Online Maths Tutoring for Kids in the USA · 1:1 Elementary Math (K-5) |
| `/online-maths-tutoring-for-teens-in-usa` | Online Maths Tutoring for Teens in the USA · 1:1 Middle & High School Math |
| `/ontario-grade-6-math-and-coding-help` | Grade 6 Math and Coding Help, Ontario: Strands and Practice |
| `/oxbridge-maths-interview-problem-solving` | Oxbridge Maths Interview Preparation: Problems and Practice |
| `/pre-calculus-11-tutor-bc` | Pre-calculus 11 BC Tutor: Course Topics, Practice and Help |
| `/pre-calculus-12-tutor-bc` | Pre-calculus 12 BC Tutor: Units, Practice Questions, Plan |
| `/preact-math-prep` | PreACT Test Prep: PreACT and PreACT 8/9 Math Help |
| `/precalculus-tutoring-online` | Precalculus Tutoring Online |
| `/preliminary-hsc-maths-year-11-help` | Year 11 Maths Help NSW |
| `/primary-maths-challenge-practice` | Primary Maths Challenge Practice |
| `/problem-solving-coding-and-math-classes-canada` | Problem-Solving Coding and Math Classes in Canada |
| `/psat-8-9-math-prep` | PSAT 8/9 Prep and PSAT 10 Math: Grades 8 to 10 |
| `/psat-math-prep` | PSAT Math Prep: PSAT/NMSQT Math and National Merit |
| `/pssa-math-practice` | PSSA Math Practice, Grades 3 to 8: The May 2027 Test |
| `/quebec-secondary-4-math-cst-ts-science` | Quebec Secondary 4 Math: CST, TS or Science, and the 2027 Exam |
| `/quebec-secondary-5-math-tutor` | Quebec Secondary 5 Math Tutor: CST, TS, Science Help Online |
| `/queensland-academies-entry-maths-practice` | Queensland Academies Entrance Test Maths Practice |
| `/quest-assessments-11-plus-maths-practice` | Quest 11 Plus Maths Practice |
| `/reception-maths-online-uk` | Reception Maths Online UK |
| `/s1-s3-maths-tutor-online-scotland` | S1 to S3 Maths Tutor Online, Scotland |
| `/sa-ignite-entry-maths-practice` | SA Ignite Assessment Maths Practice |
| `/sat-math-tutoring-online` | SAT Math Tutoring Online · 1:1 Digital SAT Math Prep |
| `/saxon-math-tutor` | Saxon Math Tutor Online: Live Help Alongside the Books |
| `/scottish-primary-maths-tutor-online` | Scottish Primary Maths Tutor Online |
| `/shsat-math-prep` | SHSAT Math Prep and Tutoring: the 2026 Adaptive Test |
| `/singapore-math-method-tutoring` | Singapore Math Method Tutoring Online |
| `/smarter-balanced-math-practice` | Smarter Balanced Math Practice: SBAC Claims and Blueprint |
| `/staar-algebra-1-eoc-prep` | STAAR Algebra 1 EOC Prep: Live Online Classes in Texas |
| `/staar-math-tutoring` | STAAR Math Tutoring and Practice, Grades 3 to 8 (2027) |
| `/stanford-10-math-practice` | Stanford 10 Math Practice (SAT10): Levels, Subtests, Scores |
| `/stanford-online-high-school-math-prep` | Stanford Online High School Math Prep: OHS Courses, Dates |
| `/statistics-tutoring-online` | Statistics Tutoring Online: High School Stats, Non-AP Help |
| `/step-maths-preparation` | STEP Maths Preparation and Tuition: STEP 2 and 3 for 2027 |
| `/summer-math-program-online` | Online Summer Math Program 2026 |
| `/tachs-math-prep` | TACHS Math Prep and Tutoring: 2026 Test, Calculator |
| `/teaching-textbooks-math-help` | Teaching Textbooks Math Help: When Your Child Needs a Tutor |
| `/transfer-test-maths-practice-northern-ireland` | Transfer Test Maths Practice, Northern Ireland |
| `/transfer-test-maths-tuition-belfast` | Transfer Test Maths Tuition Belfast |
| `/trigonometry-tutoring-online` | Trigonometry Tutoring Online: Unit Circle to Identities |
| `/tsia2-math-prep` | TSIA2 Math Prep: Texas College Readiness Test Help |
| `/uk-coding-maths-and-ai-competitions-calendar` | UK Coding, Maths and AI Competitions 2026-27 |
| `/uk-maths-enrichment-and-competitions-guide` | UK Maths Competitions and Enrichment for Able Children 2026-27 |
| `/uk-maths-exam-boards-and-specification-codes` | GCSE and A Level Maths Exam Boards and Specification Codes |
| `/uk-maths-year-by-year-guide` | What Maths Is Taught in Each Year? England Reception to Year 11 |
| `/uk-selective-school-maths-tests-guide` | 11 Plus Exams Explained by Area and Provider |
| `/uk-university-admissions-maths-and-computing-guide` | Which Universities Need TMUA, STEP or ESAT? UK Admissions Guide |
| `/ukiset-maths-reasoning-practice` | UKiset Maths Reasoning Practice |
| `/ukmt-maths-challenge-tutoring` | UKMT Maths Challenge Tutoring · 1:1 Junior, Intermediate & Senior Challenge |
| `/ukmt-team-maths-challenge-practice` | UKMT Team Maths Challenge Practice |
| `/us-coding-math-and-ai-competitions-calendar` | US Coding, Math and AI Competitions Calendar 2026-27 |
| `/us-math-and-coding-competitions-guide` | Math and Coding Competitions for Kids in the USA, by Grade |
| `/us-math-placement-and-college-readiness-tests` | Math Placement Tests Explained: ACCUPLACER, ALEKS PPL, TSIA2 |
| `/us-state-math-tests-by-state` | State Math Tests by State: What Each US State Uses |
| `/vce-foundation-maths-help` | VCE Foundation Maths Help |
| `/vce-general-maths-tutoring` | VCE General Maths Tutoring |
| `/vce-maths-methods-tutoring` | VCE Maths Methods Tutoring |
| `/vce-specialist-maths-tutoring` | VCE Specialist Maths Tutoring |
| `/victorian-selective-entry-exam-maths-practice` | Victorian Selective Entry Exam Maths Practice |
| `/wa-gate-aset-maths-practice` | WA GATE ASET Maths Practice |
| `/white-rose-maths-help-at-home` | White Rose Maths Help at Home |
| `/why-coding-and-maths-together` | Why Coding and Maths Together |
| `/wjec-a-level-maths-help-wales` | WJEC A Level Maths Help (Wales): Units, UMS and A* |
| `/year-1-maths-tutor-online` | Year 1 Maths Tutor Online |
| `/year-10-maths-methods-preparation` | Year 10 Maths Methods Preparation |
| `/year-10-maths-tutor-online` | Year 10 Maths Tutor Online |
| `/year-11-maths-tutor-online` | Year 11 Maths Tutor Online |
| `/year-12-maths-holiday-revision-australia` | Year 12 Maths Holiday Revision |
| `/year-2-maths-tutor-online` | Year 2 Maths Tutor Online |
| `/year-3-maths-tutor-online` | Year 3 Maths Tutor Online |
| `/year-4-maths-tutor-online` | Year 4 Maths Tutor Online |
| `/year-5-maths-tutor-online` | Year 5 Maths Tutor Online |
| `/year-6-maths-tutor-online` | Year 6 Maths Tutor Online |
| `/year-7-maths-tutor-online` | Year 7 Maths Tutor Online |
| `/year-8-maths-tutor-online` | Year 8 Maths Tutor Online |
| `/year-9-maths-tutor-online` | Year 9 Maths Tutor Online |

### B.14 AI and machine learning pages (214)

| URL path | Page title |
|---|---|
| `/ai-agents-and-automation` | AI Agents & Automation for Business |
| `/ai-agents-course` | AI Agents Course |
| `/ai-agents-course-for-professionals-australia` | AI Agents Course for Professionals in Australia |
| `/ai-agents-course-for-professionals-ireland` | AI Agents Course for Professionals in Ireland |
| `/ai-agents-course-for-professionals-netherlands` | AI Agents Course for Professionals, Netherlands |
| `/ai-agents-course-for-professionals-uk` | AI Agents Course for Professionals in the UK |
| `/ai-agents-course-for-students-australia` | AI Agents Course for Students in Australia |
| `/ai-agents-course-for-students-ireland` | AI Agents Course for Students in Ireland |
| `/ai-agents-course-for-students-netherlands` | AI Agents Course for Students in the Netherlands |
| `/ai-agents-course-for-students-oman` | AI Agents Course for Students in Oman |
| `/ai-agents-course-for-students-uk` | AI Agents Course for University Students in the UK |
| `/ai-agents-explained` | AI Agents Explained: How to Actually Build One That Doesn't Hallucinate Itself Into Pieces |
| `/ai-agents-for-teens` | AI Agents for Teens |
| `/ai-and-machine-learning-for-working-professionals` | AI & Machine Learning for Working Professionals |
| `/ai-and-programming-classes-in-aberdare` | AI and Programming Classes in Aberdare |
| `/ai-and-programming-classes-in-adelaide` | AI and Programming Classes in Adelaide |
| `/ai-and-programming-classes-in-andover` | AI and Programming Classes in Andover, Hampshire |
| `/ai-and-programming-classes-in-aylesbury` | AI and Programming Classes in Aylesbury |
| `/ai-and-programming-classes-in-baldivis-perth` | AI and Programming Classes in Baldivis, Perth |
| `/ai-and-programming-classes-in-banbridge` | AI and Programming Classes in Banbridge |
| `/ai-and-programming-classes-in-banbury` | AI and Programming Classes in Banbury, Oxfordshire |
| `/ai-and-programming-classes-in-bankstown-sydney` | AI and Programming Classes in Bankstown, Sydney |
| `/ai-and-programming-classes-in-barnsley` | AI and Programming Classes in Barnsley |
| `/ai-and-programming-classes-in-barrow-in-furness` | AI and Programming Classes in Barrow-in-Furness |
| `/ai-and-programming-classes-in-barry` | AI and Programming Classes in Barry |
| `/ai-and-programming-classes-in-basingstoke` | AI and Programming Classes in Basingstoke |
| `/ai-and-programming-classes-in-bathurst` | AI and Programming Classes in Bathurst |
| `/ai-and-programming-classes-in-bendigo` | AI and Programming Classes in Bendigo |
| `/ai-and-programming-classes-in-berwick-melbourne` | AI and Programming Classes in Berwick, Melbourne |
| `/ai-and-programming-classes-in-blackburn` | AI and Programming Classes in Blackburn |
| `/ai-and-programming-classes-in-bloxwich` | AI and Programming Classes in Bloxwich |
| `/ai-and-programming-classes-in-bootle` | AI and Programming Classes in Bootle, Merseyside |
| `/ai-and-programming-classes-in-browns-plains-brisbane` | AI and Programming Classes in Browns Plains, Brisbane |
| `/ai-and-programming-classes-in-burton-upon-trent` | AI and Programming Classes in Burton upon Trent |
| `/ai-and-programming-classes-in-burwood-sydney` | AI and Programming Classes in Burwood, Sydney |
| `/ai-and-programming-classes-in-bury-st-edmunds` | AI and Programming Classes in Bury St Edmunds |
| `/ai-and-programming-classes-in-camden-sydney` | AI and Programming Classes in Camden, Sydney |
| `/ai-and-programming-classes-in-carindale-brisbane` | AI and Programming Classes in Carindale, Brisbane |
| `/ai-and-programming-classes-in-caroline-springs-melbourne` | AI and Programming Classes in Caroline Springs, Melbourne |
| `/ai-and-programming-classes-in-casuarina-darwin` | AI and Programming Classes in Casuarina, Darwin |
| `/ai-and-programming-classes-in-charlestown-newcastle` | AI and Programming Classes in Charlestown, Newcastle |
| `/ai-and-programming-classes-in-chatham` | AI and Programming Classes in Chatham |
| `/ai-and-programming-classes-in-cherrybrook-sydney` | AI and Programming Classes in Cherrybrook, Sydney |
| `/ai-and-programming-classes-in-chesterfield` | AI and Programming Classes in Chesterfield |
| `/ai-and-programming-classes-in-chorlton-manchester` | AI and Programming Classes in Chorlton, Manchester |
| `/ai-and-programming-classes-in-clayton-melbourne` | AI and Programming Classes in Clayton, Melbourne |
| `/ai-and-programming-classes-in-cockburn-perth` | AI and Programming Classes in Cockburn, Perth |
| `/ai-and-programming-classes-in-coomera-gold-coast` | AI and Programming Classes in Coomera, Gold Coast |
| `/ai-and-programming-classes-in-cranbourne-melbourne` | AI and Programming Classes in Cranbourne, Melbourne |
| `/ai-and-programming-classes-in-devonport` | AI and Programming Classes in Devonport, Tasmania |
| `/ai-and-programming-classes-in-dewsbury` | AI and Programming Classes in Dewsbury |
| `/ai-and-programming-classes-in-dubbo` | AI and Programming Classes in Dubbo |
| `/ai-and-programming-classes-in-dulwich-london` | AI and Programming Classes in Dulwich |
| `/ai-and-programming-classes-in-dumfries` | AI and Programming Classes in Dumfries |
| `/ai-and-programming-classes-in-earlsdon-coventry` | AI and Programming Classes in Earlsdon, Coventry |
| `/ai-and-programming-classes-in-east-kilbride` | AI and Programming Classes in East Kilbride |
| `/ai-and-programming-classes-in-edgware-london` | AI and Programming Classes in Edgware, London |
| `/ai-and-programming-classes-in-eight-mile-plains-brisbane` | AI and Programming Classes in Eight Mile Plains, Brisbane |
| `/ai-and-programming-classes-in-elgin` | AI and Programming Classes in Elgin |
| `/ai-and-programming-classes-in-ellesmere-port` | AI and Programming Classes in Ellesmere Port |
| `/ai-and-programming-classes-in-evington-leicester` | AI and Programming Classes in Evington, Leicester |
| `/ai-and-programming-classes-in-gateshead` | AI and Programming Classes in Gateshead |
| `/ai-and-programming-classes-in-gillingham` | AI and Programming Classes in Gillingham |
| `/ai-and-programming-classes-in-grafton` | AI and Programming Classes in Grafton |
| `/ai-and-programming-classes-in-grantham` | AI and Programming Classes in Grantham, Lincolnshire |
| `/ai-and-programming-classes-in-gravesend` | AI and Programming Classes in Gravesend |
| `/ai-and-programming-classes-in-greenock` | AI and Programming Classes in Greenock |
| `/ai-and-programming-classes-in-grimsby` | AI and Programming Classes in Grimsby |
| `/ai-and-programming-classes-in-guildford` | AI and Programming Classes in Guildford |
| `/ai-and-programming-classes-in-gympie` | AI and Programming Classes in Gympie |
| `/ai-and-programming-classes-in-halifax` | AI and Programming Classes in Halifax |
| `/ai-and-programming-classes-in-harborne-birmingham` | AI and Programming Classes in Harborne, Birmingham |
| `/ai-and-programming-classes-in-harrogate` | AI and Programming Classes in Harrogate |
| `/ai-and-programming-classes-in-hoddesdon` | AI and Programming Classes in Hoddesdon |
| `/ai-and-programming-classes-in-horsham` | AI and Programming Classes in Horsham |
| `/ai-and-programming-classes-in-hume-melbourne` | AI and Programming Classes in Hume, Melbourne |
| `/ai-and-programming-classes-in-inner-south-canberra` | AI and Programming Classes in Inner South Canberra |
| `/ai-and-programming-classes-in-karratha` | AI and Programming Classes in Karratha |
| `/ai-and-programming-classes-in-kenmore-brisbane` | AI and Programming Classes in Kenmore, Brisbane |
| `/ai-and-programming-classes-in-kingston-melbourne` | AI and Programming Classes in Kingston, Melbourne |
| `/ai-and-programming-classes-in-kingston-tas-hobart` | AI and Programming Classes in Kingston, Tasmania |
| `/ai-and-programming-classes-in-kirkcaldy` | AI and Programming Classes in Kirkcaldy |
| `/ai-and-programming-classes-in-ku-ring-gai-sydney` | AI and Programming Classes in Ku-ring-gai, Sydney |
| `/ai-and-programming-classes-in-leighton-buzzard` | AI and Programming Classes in Leighton Buzzard |
| `/ai-and-programming-classes-in-leith-edinburgh` | AI and Programming Classes in Leith, Edinburgh |
| `/ai-and-programming-classes-in-llanelli` | AI and Programming Classes in Llanelli, Carmarthenshire |
| `/ai-and-programming-classes-in-lowestoft` | AI and Programming Classes in Lowestoft |
| `/ai-and-programming-classes-in-maidenhead` | AI and Programming Classes in Maidenhead |
| `/ai-and-programming-classes-in-mandurah` | AI and Programming Classes in Mandurah |
| `/ai-and-programming-classes-in-manningham-melbourne` | AI and Programming Classes in Manningham, Melbourne |
| `/ai-and-programming-classes-in-marion-adelaide` | AI and Programming Classes in Marion, Adelaide |
| `/ai-and-programming-classes-in-marrickville-sydney` | AI and Programming Classes in Marrickville, Sydney |
| `/ai-and-programming-classes-in-maryborough-qld` | AI and Programming Classes in Maryborough, Queensland |
| `/ai-and-programming-classes-in-melton` | AI and Programming Classes in Melton |
| `/ai-and-programming-classes-in-melville-perth` | AI and Programming Classes in Melville, Perth |
| `/ai-and-programming-classes-in-middlesbrough` | AI and Programming Classes in Middlesbrough |
| `/ai-and-programming-classes-in-middleton` | AI and Programming Classes in Middleton, Rochdale |
| `/ai-and-programming-classes-in-midland-perth` | AI and Programming Classes in Midland, Perth |
| `/ai-and-programming-classes-in-mildura` | AI and Programming Classes in Mildura |
| `/ai-and-programming-classes-in-mitcham-sa-adelaide` | AI and Programming Classes in Mitcham, Adelaide |
| `/ai-and-programming-classes-in-moonee-valley-melbourne` | AI and Programming Classes in Moonee Valley, Melbourne |
| `/ai-and-programming-classes-in-newtownards` | AI and Programming Classes in Newtownards |
| `/ai-and-programming-classes-in-north-sydney-sydney` | AI and Programming Classes in North Sydney, NSW |
| `/ai-and-programming-classes-in-northern-beaches-sydney` | AI and Programming Classes in the Northern Beaches, Sydney |
| `/ai-and-programming-classes-in-oldham` | AI and Programming Classes in Oldham |
| `/ai-and-programming-classes-in-ormeau-belfast` | AI and Programming Classes in Ormeau, Belfast |
| `/ai-and-programming-classes-in-penrith-nsw` | AI and Programming Classes in Penrith, NSW |
| `/ai-and-programming-classes-in-point-cook-melbourne` | AI and Programming Classes in Point Cook, Melbourne |
| `/ai-and-programming-classes-in-pontypool` | AI and Programming Classes in Pontypool |
| `/ai-and-programming-classes-in-redditch` | AI and Programming Classes in Redditch |
| `/ai-and-programming-classes-in-reservoir-melbourne` | AI and Programming Classes in Reservoir, Melbourne |
| `/ai-and-programming-classes-in-rhodes-sydney` | AI and Programming Classes in Rhodes, Sydney |
| `/ai-and-programming-classes-in-rockhampton` | AI and Programming Classes in Rockhampton |
| `/ai-and-programming-classes-in-roundhay-leeds` | AI and Programming Classes in Roundhay, Leeds |
| `/ai-and-programming-classes-in-royal-tunbridge-wells` | AI and Programming Classes in Royal Tunbridge Wells |
| `/ai-and-programming-classes-in-sale` | AI and Programming Classes in Sale |
| `/ai-and-programming-classes-in-stevenage` | AI and Programming Classes in Stevenage |
| `/ai-and-programming-classes-in-stockport` | AI and Programming Classes in Stockport |
| `/ai-and-programming-classes-in-strabane` | AI and Programming Classes in Strabane |
| `/ai-and-programming-classes-in-sunshine-coast` | AI and Programming Classes on the Sunshine Coast |
| `/ai-and-programming-classes-in-swindon` | AI and Programming Classes in Swindon |
| `/ai-and-programming-classes-in-taree` | AI and Programming Classes in Taree |
| `/ai-and-programming-classes-in-telford` | AI and Programming Classes in Telford |
| `/ai-and-programming-classes-in-tipton` | AI and Programming Classes in Tipton, Sandwell |
| `/ai-and-programming-classes-in-townsville` | AI and Programming Classes in Townsville |
| `/ai-and-programming-classes-in-traralgon` | AI and Programming Classes in Traralgon |
| `/ai-and-programming-classes-in-trowbridge` | AI and Programming Classes in Trowbridge |
| `/ai-and-programming-classes-in-unley-adelaide` | AI and Programming Classes in Unley, Adelaide |
| `/ai-and-programming-classes-in-wallsend` | AI and Programming Classes in Wallsend, North Tyneside |
| `/ai-and-programming-classes-in-wentworthville-sydney` | AI and Programming Classes in Wentworthville, Sydney |
| `/ai-and-programming-classes-in-west-end-glasgow` | AI and Programming Classes in the West End, Glasgow |
| `/ai-and-programming-classes-in-willenhall` | AI and Programming Classes in Willenhall, Walsall |
| `/ai-and-programming-classes-in-wimbledon-london` | AI and Programming Classes in Wimbledon, London |
| `/ai-and-programming-classes-in-woden-canberra` | AI and Programming Classes in Woden, Canberra |
| `/ai-and-python-academy-amsterdam` | AI and Python Academy, Amsterdam |
| `/ai-and-python-academy-eindhoven` | AI and Python Academy, Eindhoven |
| `/ai-and-python-academy-for-girls-australia` | AI and Python Academy for Girls in Australia |
| `/ai-and-python-academy-for-girls-ireland` | AI and Python Academy for Girls in Ireland |
| `/ai-and-python-academy-for-girls-netherlands` | AI and Python Academy for Girls, Netherlands |
| `/ai-and-python-academy-for-girls-oman` | Coding and AI Classes for Girls in Oman |
| `/ai-and-python-academy-for-girls-uk` | AI and Python Classes for Girls in the UK |
| `/ai-and-python-academy-groningen` | AI and Python Academy, Groningen |
| `/ai-and-python-academy-netherlands` | AI and Python Academy, Netherlands |
| `/ai-and-python-academy-nizwa` | AI and Python Academy for Students in Nizwa |
| `/ai-and-python-academy-oman` | AI and Python Academy for Students in Oman |
| `/ai-and-python-academy-rotterdam` | AI and Python Academy, Rotterdam |
| `/ai-and-python-academy-salalah` | AI and Python Academy for Students in Salalah |
| `/ai-and-python-academy-sohar` | AI and Python Academy for Students in Sohar |
| `/ai-and-python-academy-the-hague` | AI and Python Academy, The Hague |
| `/ai-and-python-academy-utrecht` | AI and Python Academy, Utrecht |
| `/ai-and-python-classes-for-teens-in-austin-texas` | AI and Python Classes for Teens in Austin, Texas |
| `/ai-and-python-classes-for-teens-in-boston-massachusetts` | AI and Python Classes for Teens in Boston, Massachusetts |
| `/ai-and-python-classes-for-teens-in-brampton` | AI and Python Classes for Teens in Brampton, ON |
| `/ai-and-python-classes-for-teens-in-denver` | AI and Python Classes for Teens in Denver |
| `/ai-and-python-classes-for-teens-in-fredericton` | AI and Python Classes for Teens in Fredericton, NB |
| `/ai-and-python-classes-for-teens-in-gatineau` | AI and Python Classes for Teens in Gatineau, QC |
| `/ai-and-python-classes-for-teens-in-guelph` | AI and Python Classes for Teens in Guelph, ON |
| `/ai-and-python-classes-for-teens-in-lethbridge` | AI and Python Classes for Teens in Lethbridge, AB |
| `/ai-and-python-classes-for-teens-in-miami` | AI and Python Classes for Teens in Miami |
| `/ai-and-python-classes-for-teens-in-northern-virginia` | AI and Python Classes for Teens in Northern Virginia |
| `/ai-and-python-classes-for-teens-in-orange-county-california` | AI and Python Classes for Teens in Orange County, CA |
| `/ai-and-python-classes-for-teens-in-portland-oregon` | AI and Python Classes for Teens in Portland, Oregon |
| `/ai-and-python-classes-for-teens-in-richmond-hill` | AI and Python Classes for Teens in Richmond Hill, ON |
| `/ai-and-python-classes-for-teens-in-san-francisco-bay-area` | AI and Python Classes for Teens in the SF Bay Area |
| `/ai-and-python-classes-for-teens-in-surrey-bc` | AI and Python Classes for Teens in Surrey, BC |
| `/ai-and-python-classes-for-teens-in-waterloo-ontario` | AI and Python Classes for Teens in Waterloo, ON |
| `/ai-certification-for-high-school-students` | AI Certification for High School Students: The Exams Compared |
| `/ai-classes-for-adults` | AI Classes for Adults |
| `/ai-classes-for-beginners` | AI Classes for Beginners - Start From Zero, No Experience Needed |
| `/ai-classes-for-cbse-class-6-to-8` | CBSE AI Classes for Class 6-8: Where AI Literacy Actually Begins |
| `/ai-classes-for-kids` | AI Classes for Kids (Ages 6-12) - Fun, Live, Project-Based |
| `/ai-classes-for-kids-in-canada` | AI Classes for Kids in Canada: What Children Learn and Build |
| `/ai-classes-for-kids-in-uae` | AI Classes for Kids in UAE |
| `/ai-classes-for-kids-uk` | AI Classes for Kids in the UK |
| `/ai-classes-for-middle-school-students` | AI Classes for Middle School Students: Grades 6 to 8 |
| `/ai-classes-for-teenagers` | AI Classes for Teenagers (13-18) - Build Real AI Projects & a Portfolio |
| `/ai-classes-for-teens-australia` | AI Classes for Teens in Australia |
| `/ai-coding-course` | AI Coding Course |
| `/ai-course-for-beginners` | AI Course for Beginners |
| `/ai-courses-for-high-school-students` | AI Courses for High School Students: School, Free and Live |
| `/ai-courses-for-kids-australia` | AI Courses for Kids in Australia |
| `/ai-development-services` | AI Development Company |
| `/ai-engineer-roadmap-2026` | The AI Engineer Roadmap 2026: From Python Day One to Shipping AI in Production |
| `/ai-evaluations-course` | AI Evaluations Course |
| `/ai-guidance-for-schools-by-state` | AI Guidance for Schools by State: All 50 and DC |
| `/ai-literacy-for-elementary-students` | AI Literacy for Elementary Students: A K-5 Guide |
| `/ai-literacy-for-students` | AI Literacy for Students |
| `/ai-ml-certification-course` | AI & ML Certification Course |
| `/ai-ml-course-for-college-students` | AI & ML Course for College Students |
| `/ai-ml-course-for-teens` | AI & ML Course for Kids & Teens: Learn Artificial Intelligence |
| `/ai-ml-projects-for-students` | AI & ML Projects for Students |
| `/ai-projects-for-high-school-students` | AI Projects for High School Students |
| `/ai-projects-for-kids` | AI Projects for Kids |
| `/ai-projects-for-middle-school-students` | AI Projects for Middle School Students: 10 Ideas, 2 in Python |
| `/ai-research-programs-for-high-school-students` | AI Research Programs for High School Students: 2026 to 2027 |
| `/ai-summer-programs-for-high-school-students` | AI Summer Programs for High School Students: 2027 Guide |
| `/artificial-intelligence-course` | Artificial Intelligence Course |
| `/best-ai-and-machine-learning-course-in-india` | Best AI & Machine Learning Course in India |
| `/build-machine-learning-models-in-python` | Build Machine Learning Models in Python |
| `/computer-vision-course` | Computer Vision Course |
| `/deep-learning-course` | Deep Learning Course |
| `/deep-learning-with-tensorflow-and-pytorch` | Deep Learning with TensorFlow & PyTorch |
| `/generative-ai-course` | Generative AI Course |
| `/how-computer-vision-works` | How Computer Vision Works - CNNs, Feature Maps & Object Detection Explained |
| `/how-llms-actually-work` | How LLMs Actually Work |
| `/how-to-train-machine-learning-models` | How to Train Machine Learning Models |
| `/machine-learning-competitions-for-high-school-students` | Machine Learning Competitions for High School Students |
| `/machine-learning-course-for-beginners` | Machine Learning Course for Beginners |
| `/machine-learning-for-school-students-netherlands` | Machine Learning for School Students, Netherlands |
| `/machine-learning-for-school-students-oman` | Machine Learning for School Students in Oman |
| `/machine-learning-from-scratch` | Machine Learning From Scratch: Build Real AI/ML Models (College & Professionals) |
| `/online-ai-and-machine-learning-classes` | Online AI & Machine Learning Classes |
| `/python-for-machine-learning` | Python for Machine Learning |
| `/uk-olympiad-in-artificial-intelligence-preparation` | UK Olympiad in AI Preparation |

### B.15 Programming language and topic pages (925)

| URL path | Page title |
|---|---|
| `/a-level-computer-science-nea-help` | A-Level Computer Science NEA Help |
| `/a-level-computer-science-tutor-online-uk` | A Level Computer Science Tutor Online |
| `/acsl-competition-preparation` | ACSL Competition Preparation: Divisions, Dates, Topics |
| `/advanced-higher-computing-science-project-help` | Advanced Higher Computing Science Project Help |
| `/after-code-club-next-step-coding-uk` | After Code Club: The Next Step in Coding, UK |
| `/after-coderdojo-next-step-coding-ireland` | After CoderDojo: The Next Step in Coding in Ireland |
| `/after-hour-of-code-next-steps` | After the Hour of Code: Next Steps for Kids in 2026 |
| `/after-microbit-next-step-python-uk` | After the micro:bit: The Next Step to Python, UK |
| `/after-scratch-next-step-python-australia` | After Scratch: Moving to Python, for Australian Kids |
| `/agentic-coding-classes` | Agentic Coding Classes |
| `/aio-to-ioi-pathway-australia` | AIO to IOI Pathway in Australia |
| `/app-development-classes-for-teens-canada` | App Development Classes for Teens in Canada: Build and Ship |
| `/app-development-course-australia` | App Development Course in Australia |
| `/app-development-course-ireland` | App Development Course in Ireland |
| `/app-development-course-netherlands` | App Development Course in the Netherlands |
| `/app-development-course-uk` | App Development Course in the UK |
| `/app-inventor-for-kids` | MIT App Inventor for Kids: Sign-In, Setup and a First App |
| `/aqa-a-level-computer-science-7517-help` | AQA A-level Computer Science 7517 Help |
| `/aqa-gcse-computer-science-8525-help` | AQA GCSE Computer Science 8525 Help |
| `/astro-pi-mission-zero-and-space-lab-help` | Astro Pi Mission Zero Help |
| `/atar-explained-for-coding-students` | ATAR Explained for Coding Students |
| `/australian-coding-competitions-for-primary-kids` | Coding Competitions for Primary Kids in Australia: A Guide |
| `/australian-curriculum-digital-technologies-help` | Australian Curriculum Digital Technologies Help |
| `/australian-informatics-olympiad-preparation` | Australian Informatics Olympiad Preparation |
| `/australian-mathematical-olympiad-preparation` | Australian Mathematical Olympiad Preparation: AMO Explained |
| `/australian-mathematics-competition-practice-by-year` | Australian Mathematics Competition Practice by Year |
| `/australian-student-hackathons` | Student Hackathons in Australia: Who Can Enter, How to Prepare |
| `/bc-adst-curriculum-coding-by-grade` | BC ADST Curriculum: Coding by Grade, Kindergarten to Grade 9 |
| `/bc-grade-10-numeracy-assessment-practice` | BC Grade 10 Numeracy Assessment Practice: Format, Questions |
| `/beast-academy-tutor` | Beast Academy Tutor: Live Help With Levels 1 to 5 |
| `/beaver-computing-challenge-guide` | Beaver Computing Challenge 2026: Guide and Practice Tasks |
| `/bebras-challenge-australia-practice` | Bebras Challenge Australia Practice |
| `/bebras-challenge-practice` | Bebras Challenge Practice (USA 2026): Format, Scoring, Puzzles |
| `/bebras-computational-thinking-challenge-practice-uk` | UK Bebras Challenge Practice |
| `/best-age-to-start-coding` | Best Age to Start Coding? The Honest Age-by-Age Answer |
| `/best-ai-courses-for-teens-2026` | Best AI Courses for Teens 2026 |
| `/best-c-plus-plus-classes-in-india` | Best C++ Classes in India |
| `/best-coding-and-ai-classes-in-ayr` | Coding and AI Classes in Ayr |
| `/best-coding-and-ai-classes-in-bamber-bridge` | Coding and AI Classes in Bamber Bridge |
| `/best-coding-and-ai-classes-in-basildon` | Coding and AI Classes in Basildon |
| `/best-coding-and-ai-classes-in-batley` | Coding and AI Classes in Batley, West Yorkshire |
| `/best-coding-and-ai-classes-in-baulkham-hills-sydney` | Best Coding and AI Classes in Baulkham Hills, Sydney |
| `/best-coding-and-ai-classes-in-bayside-melbourne` | Best Coding and AI Classes in Bayside, Melbourne |
| `/best-coding-and-ai-classes-in-bebington` | Coding and AI Classes in Bebington, Wirral |
| `/best-coding-and-ai-classes-in-belconnen-canberra` | Best Coding and AI Classes in Belconnen, Canberra |
| `/best-coding-and-ai-classes-in-birkenhead` | Coding and AI Classes in Birkenhead |
| `/best-coding-and-ai-classes-in-boroondara-melbourne` | Best Coding and AI Classes in Boroondara, Melbourne |
| `/best-coding-and-ai-classes-in-boston` | Coding and AI Classes in Boston, Lincolnshire |
| `/best-coding-and-ai-classes-in-bournemouth` | Coding and AI Classes in Bournemouth |
| `/best-coding-and-ai-classes-in-brimbank-melbourne` | Coding and AI Classes in Brimbank, Melbourne |
| `/best-coding-and-ai-classes-in-burleigh-heads-gold-coast` | Best Coding and AI Classes in Burleigh Heads, Gold Coast |
| `/best-coding-and-ai-classes-in-burnside-adelaide` | Best Coding and AI Classes in Burnside, Adelaide |
| `/best-coding-and-ai-classes-in-cannock` | Coding and AI Classes in Cannock |
| `/best-coding-and-ai-classes-in-canterbury-bankstown-sydney` | Best Coding and AI Classes in Canterbury-Bankstown |
| `/best-coding-and-ai-classes-in-carlton` | Coding and AI Classes in Carlton, Nottinghamshire |
| `/best-coding-and-ai-classes-in-carrickfergus` | Coding and AI Classes in Carrickfergus |
| `/best-coding-and-ai-classes-in-cheshunt` | Coding and AI Classes in Cheshunt, Hertfordshire |
| `/best-coding-and-ai-classes-in-christchurch` | Coding and AI Classes in Christchurch, Dorset |
| `/best-coding-and-ai-classes-in-clifton-bristol` | Coding and AI Classes in Clifton, Bristol |
| `/best-coding-and-ai-classes-in-dandenong-melbourne` | Best Coding and AI Classes in Dandenong, Melbourne |
| `/best-coding-and-ai-classes-in-darebin-melbourne` | Best Coding and AI Classes in Darebin, Melbourne |
| `/best-coding-and-ai-classes-in-dartford` | Coding and AI Classes in Dartford |
| `/best-coding-and-ai-classes-in-eastleigh` | Coding and AI Classes in Eastleigh, Hampshire |
| `/best-coding-and-ai-classes-in-eccles` | Coding and AI Classes in Eccles, Salford |
| `/best-coding-and-ai-classes-in-ecclesall-sheffield` | Coding and AI Classes in Ecclesall, Sheffield |
| `/best-coding-and-ai-classes-in-enniskillen` | Coding and AI Classes in Enniskillen |
| `/best-coding-and-ai-classes-in-farnborough` | Coding and AI Classes in Farnborough |
| `/best-coding-and-ai-classes-in-finchley-london` | Coding and AI Classes in Finchley, London |
| `/best-coding-and-ai-classes-in-frankston-melbourne` | Best Coding and AI Classes in Frankston, Melbourne |
| `/best-coding-and-ai-classes-in-georges-river-sydney` | Best Coding and AI Classes in Georges River, Sydney |
| `/best-coding-and-ai-classes-in-glen-waverley-melbourne` | Best Coding and AI Classes in Glen Waverley, Melbourne |
| `/best-coding-and-ai-classes-in-glenorchy-hobart` | Best Coding and AI Classes in Glenorchy, Hobart |
| `/best-coding-and-ai-classes-in-glenrothes` | Coding and AI Classes in Glenrothes |
| `/best-coding-and-ai-classes-in-gosport` | Coding and AI Classes in Gosport |
| `/best-coding-and-ai-classes-in-hampstead-london` | Coding and AI Classes in Hampstead, London |
| `/best-coding-and-ai-classes-in-harlow` | Coding and AI Classes in Harlow |
| `/best-coding-and-ai-classes-in-hemel-hempstead` | Coding and AI Classes in Hemel Hempstead |
| `/best-coding-and-ai-classes-in-high-wycombe` | Coding and AI Classes in High Wycombe |
| `/best-coding-and-ai-classes-in-hinckley` | Coding and AI Classes in Hinckley |
| `/best-coding-and-ai-classes-in-horsforth-leeds` | Coding and AI Classes in Horsforth, Leeds |
| `/best-coding-and-ai-classes-in-huddersfield` | Coding and AI Classes in Huddersfield |
| `/best-coding-and-ai-classes-in-inner-west-sydney` | Best Coding and AI Classes in the Inner West, Sydney |
| `/best-coding-and-ai-classes-in-ipswich` | Coding and AI Classes in Ipswich |
| `/best-coding-and-ai-classes-in-joondalup-perth` | Best Coding and AI Classes in Joondalup, Perth |
| `/best-coding-and-ai-classes-in-kellyville-sydney` | Best Coding and AI Classes in Kellyville, Sydney |
| `/best-coding-and-ai-classes-in-kirkby` | Coding and AI Classes in Kirkby, Merseyside |
| `/best-coding-and-ai-classes-in-livingston` | Coding and AI Classes in Livingston |
| `/best-coding-and-ai-classes-in-loughborough` | Coding and AI Classes in Loughborough |
| `/best-coding-and-ai-classes-in-lytham-st-annes` | Coding and AI Classes in Lytham St Annes |
| `/best-coding-and-ai-classes-in-macquarie-park-sydney` | Best Coding and AI Classes in Macquarie Park, Sydney |
| `/best-coding-and-ai-classes-in-mansfield-brisbane` | Best Coding and AI Classes in Mansfield, Brisbane |
| `/best-coding-and-ai-classes-in-mawson-lakes-adelaide` | Best Coding and AI Classes in Mawson Lakes, Adelaide |
| `/best-coding-and-ai-classes-in-moseley-birmingham` | Coding and AI Classes in Moseley, Birmingham |
| `/best-coding-and-ai-classes-in-motherwell` | Coding and AI Classes in Motherwell |
| `/best-coding-and-ai-classes-in-nightcliff-darwin` | Best Coding and AI Classes in Nightcliff, Darwin |
| `/best-coding-and-ai-classes-in-northampton` | Coding and AI Classes in Northampton |
| `/best-coding-and-ai-classes-in-paignton` | Coding and AI Classes in Paignton |
| `/best-coding-and-ai-classes-in-pakenham-melbourne` | Best Coding and AI Classes in Pakenham, Melbourne |
| `/best-coding-and-ai-classes-in-parramatta-sydney` | Best Coding and AI Classes in Parramatta, Sydney |
| `/best-coding-and-ai-classes-in-penarth` | Coding and AI Classes in Penarth |
| `/best-coding-and-ai-classes-in-pontypridd` | Coding and AI Classes in Pontypridd |
| `/best-coding-and-ai-classes-in-portadown` | Coding and AI Classes in Portadown |
| `/best-coding-and-ai-classes-in-ramsgate` | Coding and AI Classes in Ramsgate, Kent |
| `/best-coding-and-ai-classes-in-roath-cardiff` | Coding and AI Classes in Roath, Cardiff |
| `/best-coding-and-ai-classes-in-rochester` | Coding and AI Classes in Rochester |
| `/best-coding-and-ai-classes-in-rockingham-perth` | Best Coding and AI Classes in Rockingham, Perth |
| `/best-coding-and-ai-classes-in-rotherham` | Coding and AI Classes in Rotherham |
| `/best-coding-and-ai-classes-in-rouse-hill-sydney` | Best Coding and AI Classes in Rouse Hill, Sydney |
| `/best-coding-and-ai-classes-in-salisbury-adelaide` | Best Coding and AI Classes in Salisbury, Adelaide |
| `/best-coding-and-ai-classes-in-shawlands-glasgow` | Coding and AI Classes in Shawlands, Glasgow |
| `/best-coding-and-ai-classes-in-shrewsbury` | Coding and AI Classes in Shrewsbury |
| `/best-coding-and-ai-classes-in-smethwick` | Coding and AI Classes in Smethwick |
| `/best-coding-and-ai-classes-in-south-shields` | Coding and AI Classes in South Shields |
| `/best-coding-and-ai-classes-in-southport` | Coding and AI Classes in Southport |
| `/best-coding-and-ai-classes-in-southport-gold-coast` | Best Coding and AI Classes in Southport, Gold Coast |
| `/best-coding-and-ai-classes-in-springfield-brisbane` | Best Coding and AI Classes in Springfield, Brisbane |
| `/best-coding-and-ai-classes-in-st-helens` | Coding and AI Classes in St Helens |
| `/best-coding-and-ai-classes-in-stanmore-london` | Coding and AI Classes in Stanmore, London |
| `/best-coding-and-ai-classes-in-subiaco-perth` | Best Coding and AI Classes in Subiaco, Perth |
| `/best-coding-and-ai-classes-in-sunbury-melbourne` | Best Coding and AI Classes in Sunbury, Melbourne |
| `/best-coding-and-ai-classes-in-sunnybank-brisbane` | Best Coding and AI Classes in Sunnybank, Brisbane |
| `/best-coding-and-ai-classes-in-tamworth` | Coding and AI Classes in Tamworth |
| `/best-coding-and-ai-classes-in-the-gap-brisbane` | Best Coding and AI Classes in The Gap, Brisbane |
| `/best-coding-and-ai-classes-in-the-hills-shire-sydney` | Best Coding and AI Classes in The Hills Shire, Sydney |
| `/best-coding-and-ai-classes-in-torquay` | Coding and AI Classes in Torquay, Devon |
| `/best-coding-and-ai-classes-in-walsall` | Coding and AI Classes in Walsall |
| `/best-coding-and-ai-classes-in-watford` | Coding and AI Classes in Watford |
| `/best-coding-and-ai-classes-in-wellingborough` | Coding and AI Classes in Wellingborough |
| `/best-coding-and-ai-classes-in-welwyn-garden-city` | Coding and AI Classes in Welwyn Garden City |
| `/best-coding-and-ai-classes-in-wembley-london` | Coding and AI Classes in Wembley, London |
| `/best-coding-and-ai-classes-in-werribee-melbourne` | Best Coding and AI Classes in Werribee, Melbourne |
| `/best-coding-and-ai-classes-in-west-molesey` | Coding and AI Classes in West Molesey, Surrey |
| `/best-coding-and-ai-classes-in-weston-creek-canberra` | Best Coding and AI Classes in Weston Creek, Canberra |
| `/best-coding-and-ai-classes-in-widnes` | Coding and AI Classes in Widnes |
| `/best-coding-and-ai-classes-in-willetton-perth` | Best Coding and AI Classes in Willetton, Perth |
| `/best-coding-and-ai-classes-in-willoughby-sydney` | Best Coding and AI Classes in Willoughby, Sydney |
| `/best-coding-and-ai-classes-in-withington-manchester` | Coding and AI Classes in Withington, Manchester |
| `/best-coding-and-ai-classes-in-woking` | Coding and AI Classes in Woking |
| `/best-coding-and-ai-classes-in-worthing` | Coding and AI Classes in Worthing |
| `/best-coding-and-ai-classes-in-yeovil` | Coding and AI Classes in Yeovil |
| `/best-coding-classes-for-adults-ireland` | Best Coding Classes for Adults in Ireland |
| `/best-coding-classes-for-adults-uk` | Best Coding Classes for Adults in the UK |
| `/best-coding-classes-for-kids-in-burnaby` | Best Coding Classes for Kids in Burnaby |
| `/best-coding-classes-for-kids-in-charlotte` | Best Coding Classes for Kids in Charlotte |
| `/best-coding-classes-for-kids-in-chicago` | Best Coding Classes for Kids in Chicago |
| `/best-coding-classes-for-kids-in-houston` | Best Coding Classes for Kids in Houston |
| `/best-coding-classes-for-kids-in-kelowna` | Best Coding Classes for Kids in Kelowna |
| `/best-coding-classes-for-kids-in-kitchener` | Best Coding Classes for Kids in Kitchener |
| `/best-coding-classes-for-kids-in-laval` | Best Coding Classes for Kids in Laval |
| `/best-coding-classes-for-kids-in-markham` | Best Coding Classes for Kids in Markham |
| `/best-coding-classes-for-kids-in-minneapolis` | Best Coding Classes for Kids in Minneapolis |
| `/best-coding-classes-for-kids-in-mississauga` | Best Coding Classes for Kids in Mississauga |
| `/best-coding-classes-for-kids-in-moncton` | Best Coding Classes for Kids in Moncton |
| `/best-coding-classes-for-kids-in-new-york-city` | Best Coding Classes for Kids in New York City |
| `/best-coding-classes-for-kids-in-oakville` | Best Coding Classes for Kids in Oakville |
| `/best-coding-classes-for-kids-in-orlando` | Best Coding Classes for Kids in Orlando |
| `/best-coding-classes-for-kids-in-philadelphia` | Best Coding Classes for Kids in Philadelphia |
| `/best-coding-classes-for-kids-in-san-jose` | Best Coding Classes for Kids in San Jose |
| `/best-coding-classes-for-kids-in-vancouver` | Best Coding Classes for Kids in Vancouver |
| `/best-coding-classes-for-kids-ireland` | Best Coding Classes for Kids in Ireland |
| `/best-coding-classes-for-teens-ireland` | Best Coding Classes for Teens in Ireland |
| `/best-coding-classes-for-teens-uk` | Best Coding Classes for Teens in the UK |
| `/best-coding-classes-in-alice-springs` | Best Coding Classes in Alice Springs |
| `/best-coding-classes-in-armidale` | Best Coding Classes in Armidale |
| `/best-coding-classes-in-brisbane` | Best Coding Classes in Brisbane |
| `/best-coding-classes-in-busselton` | Best Coding Classes in Busselton |
| `/best-coding-classes-in-coffs-harbour` | Best Coding Classes in Coffs Harbour |
| `/best-coding-classes-in-geraldton` | Best Coding Classes in Geraldton |
| `/best-coding-classes-in-gladstone` | Best Coding Classes in Gladstone |
| `/best-coding-classes-in-gold-coast` | Best Coding Classes on the Gold Coast |
| `/best-coding-classes-in-griffith` | Best Coding Classes in Griffith NSW |
| `/best-coding-classes-in-hobart` | Best Coding Classes in Hobart |
| `/best-coding-classes-in-kalgoorlie` | Best Coding Classes in Kalgoorlie |
| `/best-coding-classes-in-launceston` | Best Coding Classes in Launceston |
| `/best-coding-classes-in-lismore` | Best Coding Classes in Lismore |
| `/best-coding-classes-in-logan` | Best Coding Classes in Logan |
| `/best-coding-classes-in-mount-isa` | Best Coding Classes in Mount Isa |
| `/best-coding-classes-in-port-lincoln` | Best Coding Classes in Port Lincoln |
| `/best-coding-classes-in-sydney` | Best Coding Classes in Sydney |
| `/best-coding-classes-in-toowoomba` | Best Coding Classes in Toowoomba |
| `/best-coding-classes-in-wagga-wagga` | Best Coding Classes in Wagga Wagga |
| `/best-coding-classes-in-wollongong` | Best Coding Classes in Wollongong |
| `/best-coding-classes-online` | Best Online Coding Classes for Kids, Teens and Adults |
| `/best-java-classes-in-india` | Best Java Classes in India |
| `/best-online-coding-classes-for-kids-2026` | Online Coding Classes for Kids: Best Live Options, Ranked (2026) |
| `/best-online-coding-classes-for-kids-usa-compared` | Online Coding Classes for Kids in the USA, Compared (2026) |
| `/best-online-coding-classes-in-canada` | Best Online Coding Classes in Canada (2026): How to Choose |
| `/best-online-coding-classes-ireland` | Best Online Coding Classes in Ireland |
| `/best-online-coding-classes-uk` | Best Online Coding Classes in the UK |
| `/best-python-classes-online-ireland` | Best Python Classes Online in Ireland |
| `/best-python-classes-online-uk` | Best Python Classes Online in the UK |
| `/big-bang-competition-project-help` | Big Bang Competition Project Help |
| `/bluej-not-working-fix` | BlueJ Not Working? Fixes for Install, Output and Frozen Programs |
| `/bootstrap` | Complete Bootstrap 5.3 Guide - Learn Bootstrap from Scratch |
| `/british-informatics-olympiad-preparation` | British Informatics Olympiad Preparation |
| `/british-mathematical-olympiad-bmo-preparation` | British Mathematical Olympiad Preparation |
| `/btec-it-programming-unit-help` | BTEC IT Programming Unit Help |
| `/build-apps-with-ai` | Build Apps with AI |
| `/build-real-ai-projects-australia` | Build Real AI Projects in Australia |
| `/build-real-ai-projects-ireland` | Build Real AI Projects in Ireland |
| `/build-real-ai-projects-netherlands` | Build Real AI Projects in the Netherlands |
| `/build-real-ai-projects-oman` | Build Real AI Projects: Oman Student Portfolios |
| `/build-real-ai-projects-uk` | Build Real AI Projects in the UK |
| `/build-your-own-gpt-python` | Build Your Own GPT in Python: From Tokenizer to Trained Model in 300 Lines |
| `/c-plus-plus-certification-course` | C++ Certification Course |
| `/c-plus-plus-classes-for-college-students` | C++ Classes for College Students |
| `/c-plus-plus-classes-for-teens` | C++ Classes for Teens |
| `/c-plus-plus-classes-online-australia` | C++ Classes Online in Australia |
| `/c-plus-plus-dsa-course` | C++ DSA Course |
| `/c-plus-plus-for-beginners` | C++ for Beginners |
| `/c-plus-plus-for-competitive-programming` | C++ for Competitive Programming |
| `/c-plus-plus-for-kids` | C++ for Kids: Is It a Good First Language? Real Code Inside |
| `/c-plus-plus-for-placement-preparation` | C++ for Placement Preparation |
| `/c-plus-plus-game-development` | C++ Game Development Course |
| `/c-plus-plus-oops-concepts-course` | C++ OOP Concepts Course |
| `/c-plus-plus-projects-for-students` | C++ Projects for Students |
| `/cambridge-a-level-computer-science-online-classes` | Cambridge A Level Computer Science 9618 Online Classes |
| `/cambridge-igcse-computer-science-tuition` | Cambridge IGCSE Computer Science Tuition |
| `/canada-coding-curriculum-by-province` | Coding Curriculum by Province: Canada's Schools Compared |
| `/canada-time-zones-2026-online-class-times` | Canada Time Zones 2026: Online Class Times by Province |
| `/canadian-computing-competition-ccc-prep` | Canadian Computing Competition Prep |
| `/canadian-computing-olympiad-cco-guide` | Canadian Computing Olympiad (CCO): From CCC to the IOI |
| `/cayley-contest-preparation` | Cayley Contest 2027 (Grade 10): Paper, Results, Practice |
| `/cbse-ai-curriculum-classes` | CBSE's Computational Thinking & AI Curriculum (2026-27): A Parent's Complete Guide |
| `/cbse-class-10-ai-board-exam-preparation` | CBSE Class 10 AI Board Exam Preparation |
| `/cbse-class-10-ai-classes-online` | CBSE Class 10 AI Classes Online (417) |
| `/cbse-class-10-ai-employability-skills-part-a` | CBSE Class 10 AI Part A: Employability Skills (10 Marks) |
| `/cbse-class-10-ai-exam-date-and-paper-pattern` | CBSE Class 10 AI Exam Date 2027 and Paper Pattern (417) |
| `/cbse-class-10-ai-important-questions` | CBSE Class 10 AI Important Questions 2027 (417), Unit-Wise |
| `/cbse-class-10-ai-online-classes-gulf-and-abroad` | CBSE Class 10 AI Online Classes in the UAE, Gulf and Abroad |
| `/cbse-class-10-ai-project-and-practical-file` | CBSE Class 10 AI Project and Practical File |
| `/cbse-class-10-ai-sample-paper-and-mock-tests` | CBSE Class 10 AI Sample Paper 2026-27 and Mock Tests, Solved Live |
| `/cbse-class-10-ai-syllabus-explained` | CBSE Class 10 AI Syllabus 2026-27 (417) Explained, Unit by Unit |
| `/cbse-computational-thinking-classes-3-to-5` | CBSE Computational Thinking for Classes 3-5: What Your Child Actually Learns |
| `/ccc-junior-guide` | CCC Junior 2027 Guide: Format, Rules, Practice Problems |
| `/ccc-past-problems-practice-guide` | CCC Past Papers: How to Practise with CEMC's Archive |
| `/ccc-senior-guide` | CCC Senior 2027 Guide: Graphs, DP and Efficient Code |
| `/ccea-a-level-software-systems-development-help` | CCEA A Level Software Systems Development Help |
| `/ccea-gcse-digital-technology-programming-help` | CCEA GCSE Digital Technology Programming Help |
| `/cegep-computer-science-preparation` | CEGEP Computer Science: Programs, Admission and Preparation |
| `/cemc-free-resources-guide` | CEMC Free Resources: Problem of the Week, CS Circles, More |
| `/cemc-waterloo-contests-preparation` | CEMC Waterloo Contest Preparation: Gauss to Euclid, Live Online |
| `/choosing-gcse-computer-science-year-9-options` | Choosing GCSE Computer Science |
| `/choosing-year-11-computing-subjects-australia` | Choosing Year 11 Computing Subjects |
| `/cimc-and-csmc-contest-guide` | CIMC and CSMC 2026: Dates, Marking and Practice |
| `/code-org-app-lab-help` | Code.org App Lab Help: Fix Events, Variables and Screens |
| `/codehs-help-for-students` | CodeHS Help for Students: Errors, Resets and Debugging |
| `/coding-alongside-informatica-havo-vwo-netherlands` | Coding Alongside Informatica, Havo and Vwo |
| `/coding-and-ai-alongside-bjc-and-bgcse-bahamas` | Coding and AI Alongside BJC and BGCSE in The Bahamas |
| `/coding-and-ai-classes-for-adults-netherlands` | Coding and AI Classes for Adults, Netherlands |
| `/coding-and-ai-classes-in-alabama` | Coding and AI Classes in Alabama |
| `/coding-and-ai-classes-in-alaska` | Coding and AI Classes in Alaska |
| `/coding-and-ai-classes-in-arizona` | Coding and AI Classes in Arizona |
| `/coding-and-ai-classes-in-arkansas` | Coding and AI Classes in Arkansas |
| `/coding-and-ai-classes-in-australian-capital-territory` | Coding and AI Classes in the ACT |
| `/coding-and-ai-classes-in-bahamas` | Coding and AI Classes in The Bahamas |
| `/coding-and-ai-classes-in-calgary` | Coding and AI Classes in Calgary |
| `/coding-and-ai-classes-in-colorado` | Coding and AI Classes in Colorado |
| `/coding-and-ai-classes-in-connacht` | Coding and AI Classes in Connacht |
| `/coding-and-ai-classes-in-connecticut` | Coding and AI Classes in Connecticut |
| `/coding-and-ai-classes-in-delaware` | Coding and AI Classes in Delaware |
| `/coding-and-ai-classes-in-east-midlands` | Coding and AI Classes in the East Midlands |
| `/coding-and-ai-classes-in-east-of-england` | Coding and AI Classes in the East of England |
| `/coding-and-ai-classes-in-edmonton` | Coding and AI Classes in Edmonton |
| `/coding-and-ai-classes-in-england` | Coding and AI Classes in England |
| `/coding-and-ai-classes-in-florida` | Coding and AI Classes in Florida |
| `/coding-and-ai-classes-in-halifax-nova-scotia` | Coding and AI Classes in Halifax, Nova Scotia |
| `/coding-and-ai-classes-in-hawaii` | Coding and AI Classes in Hawaii |
| `/coding-and-ai-classes-in-idaho` | Coding and AI Classes in Idaho |
| `/coding-and-ai-classes-in-indiana` | Coding and AI Classes in Indiana |
| `/coding-and-ai-classes-in-iowa` | Coding and AI Classes in Iowa |
| `/coding-and-ai-classes-in-kansas` | Coding and AI Classes in Kansas |
| `/coding-and-ai-classes-in-kentucky` | Coding and AI Classes in Kentucky |
| `/coding-and-ai-classes-in-leinster` | Coding and AI Classes in Leinster |
| `/coding-and-ai-classes-in-london-ontario` | Coding and AI Classes in London, Ontario |
| `/coding-and-ai-classes-in-louisiana` | Coding and AI Classes in Louisiana |
| `/coding-and-ai-classes-in-maine` | Coding and AI Classes in Maine |
| `/coding-and-ai-classes-in-massachusetts` | Coding and AI Classes in Massachusetts |
| `/coding-and-ai-classes-in-michigan` | Coding and AI Classes in Michigan |
| `/coding-and-ai-classes-in-minnesota` | Coding and AI Classes in Minnesota |
| `/coding-and-ai-classes-in-mississippi` | Coding and AI Classes in Mississippi |
| `/coding-and-ai-classes-in-missouri` | Coding and AI Classes in Missouri |
| `/coding-and-ai-classes-in-montana` | Coding and AI Classes in Montana |
| `/coding-and-ai-classes-in-montreal` | Coding and AI Classes in Montreal |
| `/coding-and-ai-classes-in-munster` | Coding and AI Classes in Munster |
| `/coding-and-ai-classes-in-nassau` | Coding and AI Classes in Nassau, Bahamas |
| `/coding-and-ai-classes-in-nevada` | Coding and AI Classes in Nevada |
| `/coding-and-ai-classes-in-new-hampshire` | Coding and AI Classes in New Hampshire |
| `/coding-and-ai-classes-in-new-mexico` | Coding and AI Classes in New Mexico |
| `/coding-and-ai-classes-in-new-south-wales` | Coding and AI Classes in New South Wales |
| `/coding-and-ai-classes-in-north-carolina` | Coding and AI Classes in North Carolina |
| `/coding-and-ai-classes-in-north-dakota` | Coding, Cyber and AI Classes in North Dakota |
| `/coding-and-ai-classes-in-north-east-england` | Coding and AI Classes in North East England |
| `/coding-and-ai-classes-in-north-west-england` | Coding and AI Classes in North West England |
| `/coding-and-ai-classes-in-northern-ireland` | Coding and AI Classes in Northern Ireland |
| `/coding-and-ai-classes-in-northern-territory` | Coding and AI Classes in the Northern Territory |
| `/coding-and-ai-classes-in-ohio` | Coding and AI Classes in Ohio |
| `/coding-and-ai-classes-in-oklahoma` | Coding and AI Classes in Oklahoma |
| `/coding-and-ai-classes-in-oregon` | Coding and AI Classes in Oregon |
| `/coding-and-ai-classes-in-ottawa` | Coding and AI Classes in Ottawa |
| `/coding-and-ai-classes-in-pennsylvania` | Coding and AI Classes in Pennsylvania |
| `/coding-and-ai-classes-in-quebec-city` | Coding and AI Classes in Quebec City |
| `/coding-and-ai-classes-in-queensland` | Coding and AI Classes in Queensland |
| `/coding-and-ai-classes-in-regina` | Coding and AI Classes in Regina |
| `/coding-and-ai-classes-in-rhode-island` | Coding and AI Classes in Rhode Island |
| `/coding-and-ai-classes-in-saskatoon` | Coding and AI Classes in Saskatoon |
| `/coding-and-ai-classes-in-scotland` | Coding and AI Classes in Scotland |
| `/coding-and-ai-classes-in-south-australia` | Coding and AI Classes in South Australia |
| `/coding-and-ai-classes-in-south-carolina` | Coding and AI Classes in South Carolina |
| `/coding-and-ai-classes-in-south-dakota` | Coding and AI Classes in South Dakota |
| `/coding-and-ai-classes-in-south-east-england` | Coding and AI Classes in South East England |
| `/coding-and-ai-classes-in-south-west-england` | Coding and AI Classes in South West England |
| `/coding-and-ai-classes-in-st-johns-newfoundland` | Coding and AI Classes in St. John's, Newfoundland |
| `/coding-and-ai-classes-in-tasmania` | Coding and AI Classes in Tasmania |
| `/coding-and-ai-classes-in-tennessee` | Coding and AI Classes in Tennessee |
| `/coding-and-ai-classes-in-toronto` | Coding and AI Classes in Toronto |
| `/coding-and-ai-classes-in-ulster` | Coding and AI Classes in Ulster |
| `/coding-and-ai-classes-in-utah` | Coding and AI Classes in Utah |
| `/coding-and-ai-classes-in-vermont` | Coding and AI Classes in Vermont |
| `/coding-and-ai-classes-in-victoria` | Coding and AI Classes in Victoria |
| `/coding-and-ai-classes-in-victoria-bc` | Coding and AI Classes in Victoria, BC |
| `/coding-and-ai-classes-in-wales` | Coding and AI Classes in Wales |
| `/coding-and-ai-classes-in-washington-dc` | Coding and AI Classes in Washington, DC |
| `/coding-and-ai-classes-in-west-midlands-region` | Coding and AI Classes in the West Midlands Region |
| `/coding-and-ai-classes-in-west-virginia` | Coding and AI Classes in West Virginia |
| `/coding-and-ai-classes-in-western-australia` | Coding and AI Classes in Western Australia |
| `/coding-and-ai-classes-in-winnipeg` | Coding and AI Classes in Winnipeg |
| `/coding-and-ai-classes-in-wisconsin` | Coding and AI Classes in Wisconsin |
| `/coding-and-ai-classes-in-wyoming` | Coding and AI Classes in Wyoming |
| `/coding-and-ai-classes-in-yorkshire-and-the-humber` | Coding and AI Classes in Yorkshire and the Humber |
| `/coding-before-a-degree-apprenticeship-uk` | Coding Before a Degree Apprenticeship, UK |
| `/coding-comeback-women` | Coding Comeback for Women: Return to Tech After a Career Break, Maternity Pause or Sabb... |
| `/coding-competitions-for-high-school-students` | Coding Competitions for High School Students: 2026-27 Guide |
| `/coding-competitions-for-middle-school-students` | Coding Competitions for Middle School Students (2026-27) |
| `/coding-competitions-for-students-bahamas` | Coding Competitions for Students in The Bahamas |
| `/coding-for-career-changers-australia` | Coding for Career Changers in Australia |
| `/coding-for-cbse-students` | Coding for CBSE Students: Python, CS & Informatics Practices from Class 6 to 12 |
| `/coding-for-college-students-ireland` | Coding for College Students in Ireland |
| `/coding-for-college-students-netherlands` | Coding for College Students in the Netherlands |
| `/coding-for-home-educated-children-uk` | Coding for Home-Educated Children, UK |
| `/coding-for-homeschool-kids-australia` | Coding for Homeschool Kids in Australia |
| `/coding-for-icse-students` | Coding for ICSE Students: Java BlueJ, Computer Applications & ISC CS |
| `/coding-for-igcse-students` | Coding for IGCSE Students: Cambridge CS 0478, 0984, ICT & Python |
| `/coding-for-university-students-australia` | Coding for University Students in Australia |
| `/coding-for-university-students-uk` | Coding for University Students in the UK |
| `/coding-for-year-7-australia` | Coding for Year 7 in Australia: From Blocks to Python |
| `/coding-games-for-kids-australia` | Coding Games for Kids in Australia |
| `/coding-lang` | Programming Languages, Frameworks and Tools to Learn in 2026: The Complete Guide |
| `/coding-milestones-by-age` | Coding Milestones by Age: What Kids Can Do from 6 to 18 |
| `/coding-olympiad-medal-track` | Coding Olympiad Medal Track: IOQI, ZIO, INOI, IOI, Bebras, Math Kangaroo Coaching |
| `/cogat-test-prep` | CogAT Test Prep: Reasoning and Readiness for Ages 6 to 9 |
| `/comc-canada-open-mathematics-challenge-guide` | COMC 2026: Canadian Open Mathematics Challenge Guide |
| `/competitive-programming-australia` | Competitive Programming in Australia |
| `/computer-applications-icse-class-10` | Computer Applications ICSE Class 10: Java BlueJ Tuition, Project & Viva Prep |
| `/computer-programming-11-and-12-bc` | BC Computer Programming 11 and 12, Computer Science 11 Help |
| `/computer-science-class-11-cbse` | Computer Science Class 11 CBSE: Python, Boolean Logic & Full Syllabus Tuition |
| `/computer-science-class-11-icse` | Computer Science Class 11 ICSE: Java OOP, Boolean Algebra & ISC Full Syllabus |
| `/computer-science-class-12-cbse` | Computer Science Class 12 CBSE: Python Data Structures, SQL & Full Board Tuition |
| `/computer-science-class-12-icse` | Computer Science Class 12 ICSE: ISC Java Data Structures, Recursion & Board Prep |
| `/computer-science-extracurriculars` | Computer Science Extracurriculars, Ranked by What Actually Counts |
| `/computer-science-graduation-requirements-by-state` | Computer Science Graduation Requirements by State |
| `/computer-science-internships-for-high-school-students` | Computer Science Internships for High School Students |
| `/computer-science-personal-statement-projects-uk` | Computer Science Personal Statement Projects for UCAS 2027 |
| `/computer-science-prerequisites-canadian-universities` | Computer Science Prerequisites at Canadian Universities |
| `/computer-science-standards-by-state` | K-12 Computer Science Standards by State, With AI |
| `/computer-science-summer-programs-for-high-school-students` | CS Summer Programs for High School Students: 2027 Guide |
| `/congressional-app-challenge-guide` | Congressional App Challenge Guide: Rules, Video, Judging |
| `/context-engineering-course` | Context Engineering Course |
| `/coolest-projects-uk-project-ideas` | Coolest Projects UK |
| `/cpa-cpp-certification-prep` | CPA C++ Certification (CPA-21-02): Full Exam Guide, Syllabus & Live Coaching |
| `/cyber-security-course-for-teens-australia` | Cyber Security Course for Teens in Australia |
| `/cyber-security-course-for-teens-uk` | Cyber Security Course for Teens in the UK |
| `/cyberfirst-courses-and-bursary-preparation` | CyberFirst Bursary and Courses in 2026: What Runs Now |
| `/cyberfirst-girls-competition-preparation` | CyberFirst Girls Competition Preparation |
| `/cyberpatriot-preparation` | CyberPatriot Preparation: 2026-27 Schedule, Scoring, Setup |
| `/cybersecurity-classes-for-teens` | Cybersecurity Classes for Teens: CyberPatriot, AP and CTFs |
| `/data-analytics-course` | Data Analytics Course |
| `/data-science-course` | Data Science Course |
| `/data-science-course-australia` | Data Science Course in Australia |
| `/data-science-course-ireland` | Data Science Course in Ireland |
| `/data-science-course-netherlands` | Data Science Course in the Netherlands |
| `/data-science-course-uk` | Data Science Course in the UK |
| `/data-structures-and-algorithms-course` | DSA Course: Build Your Logic with Data Structures & Algorithms |
| `/digital-technologies-primary-coding-help` | Primary Digital Technologies Coding Help |
| `/digital-technologies-years-7-to-10-coding` | Digital Technologies Years 7 to 10 Coding |
| `/does-ap-computer-science-give-college-credit` | Does AP Computer Science Give College Credit? A and CSP Compared |
| `/duke-of-edinburgh-skills-section-coding` | Duke of Edinburgh Skills Section Coding: Plans by Level |
| `/eclipse-java-help-for-students` | Eclipse Java Help for Students: Run, Errors and Setup Fixes |
| `/edexcel-gcse-computer-science-1cp2-help` | Edexcel GCSE Computer Science 1CP2 Help |
| `/epq-computer-science-artefact-mentoring` | EPQ Computer Science Artefact Mentoring |
| `/euclid-contest-preparation` | Euclid Contest 2027: Date, Marking and Full Solutions |
| `/fermat-contest-preparation` | Fermat Contest 2027 (Grade 11): Date, Timing, Practice |
| `/first-competitions-for-primary-school-children-uk` | First Competitions for Primary School Children UK |
| `/first-lego-league-australia-coding-help` | FIRST LEGO League Australia: Coding Help for Teams |
| `/first-lego-league-coding-help-usa` | FIRST LEGO League Coding Help USA: BIOGLOW 2026-27 |
| `/first-lego-league-uk-coding-help` | FIRST LEGO League UK Coding Help |
| `/free-coding-classes-for-kids-australia-what-you-get` | Free Coding Classes for Kids in Australia: What You Get |
| `/free-coding-programs-for-high-school-students` | Free Coding Programs for High School Students: What Is Free |
| `/fryer-galois-hypatia-contests-guide` | Fryer, Galois and Hypatia Contests 2027: A Full Guide |
| `/ftc-programming-help` | FTC Programming Help: Java and Blocks for BIOBUZZ 2026-27 |
| `/full-stack-software-development-course-ireland` | Full Stack Software Development Course |
| `/full-stack-software-development-course-netherlands` | Full Stack Software Development Course, Netherlands |
| `/full-stack-software-development-course-uk` | Full Stack Software Development Course, UK |
| `/game-design-classes-for-teens` | Game Design for Teens: Live Classes, a Method and Real Code |
| `/game-development-classes-for-kids-canada` | Game Development Classes for Kids in Canada: Scratch to Roblox |
| `/game-development-for-kids-australia` | Game Development for Kids in Australia |
| `/game-programming-course-australia` | Game Programming Course in Australia |
| `/gauss-contest-preparation` | Gauss Contest 2027 (Grades 7 and 8): Dates and Practice |
| `/gazette` | The Modern Age Coders Gazette |
| `/gifted-and-talented-test-prep` | Gifted and Talented Test Prep: An Honest Guide for Ages 6 to 9 |
| `/girls-programming-network-next-step-australia` | After a Girls' Programming Network Workshop: Next Steps |
| `/girls-who-code-next-step` | Girls Who Code Next Step: After a GWC Club or Pathways |
| `/github-classroom-help-for-students` | GitHub Classroom Retired: Help for Students in 2026 |
| `/github-portfolio-for-students-bahamas` | GitHub Portfolios for Bahamian Students |
| `/godot-for-kids-and-teens` | Godot for Kids and Teens: Free Engine, GDScript, Real Code |
| `/google-colab-help-for-students` | Google Colab Help for Students: Errors, Files and Limits |
| `/hackathon` | Modern Age Coders Hackathon 1.0 (June 2026): ₹30,000 Prize Pool |
| `/hackathon-guide` | Hackathon 1.0 Guide (June 2026): How It Worked, 3 Rounds, Rules & What to Build |
| `/hackathons-for-high-school-students` | Hackathons for High School Students |
| `/high-school-computer-science-access-by-state` | High School Computer Science Access by State, 2025 Data |
| `/higher-computing-science-help` | Higher Computing Science Help |
| `/homeschool-coding-curriculum` | Homeschool Coding Curriculum |
| `/homeschool-computer-science-high-school-credit` | Homeschool Computer Science High School Credit, State by State |
| `/how-ai-actually-works` | How AI Actually Works: A First-Principles Guide to LLMs, Tokens, Embeddings and Transfo... |
| `/how-large-language-models-work` | How Large Language Models Work - Understand Tokens, Embeddings & Attention |
| `/how-to-actually-learn-to-code` | How to Actually Learn to Code |
| `/how-to-book-a-priority-demo` | How to Book a Priority Demo |
| `/how-to-build-a-coding-portfolio` | How To Build a Coding Portfolio That Holds Up Under Questioning |
| `/how-to-build-ai-models` | How to Build AI Models |
| `/how-to-debug-code` | How to Debug Code: Search, Do Not Guess |
| `/how-to-make-a-3d-game-for-kids` | How to Make a 3D Video Game for Kids: Tools, Steps and Code |
| `/how-to-make-a-roblox-game` | How to Make a Roblox Game: Studio, Luau and Publishing |
| `/how-to-make-a-video-game-for-kids` | How to Make a Video Game for Kids: Free Tools and Steps |
| `/how-to-read-code` | How to Read Code: A Method, Not a Talent |
| `/how-to-register-for-waterloo-contests` | How to Register for Waterloo Contests and the CCC in Canada |
| `/how-to-think-like-a-programmer` | How to Think Like a Programmer |
| `/hsc-enterprise-computing-help` | HSC Enterprise Computing Help |
| `/hsc-software-engineering-help` | HSC Software Engineering Help |
| `/ib-computer-science-online-tuition` | IB Computer Science Online Tuition |
| `/icas-digital-technologies-practice` | ICAS Digital Technologies Practice: Papers by Year Level |
| `/icd2o-digital-technology-course-explained` | ICD2O Explained: Ontario Grade 10 Computer Course, and ICS2O |
| `/ics3u-computer-science-help` | ICS3U Computer Science Help: Python, Java, Exam Review |
| `/ics3u-ics4u-exam-review-practice` | ICS3U and ICS4U Exam Review: Mock Exams With a Marking Guide |
| `/ics4u-computer-science-help` | ICS4U Computer Science Help: Recursion, OOP, Python and Java |
| `/icse-class-10-bluej-java-coaching` | ICSE Class 10 BlueJ Java Coaching |
| `/icse-class-10-computer-applications-board-exam-preparation` | ICSE Class 10 Computer Applications Board Exam Preparation |
| `/icse-class-10-computer-applications-classes-gulf-and-abroad` | ICSE Computer Applications Classes in Dubai, UAE and Abroad |
| `/icse-class-10-computer-applications-exam-date-and-paper-pattern` | ICSE Computer Applications Exam Date 2027 and Paper Pattern |
| `/icse-class-10-computer-applications-important-questions` | ICSE Computer Applications Important Questions 2027, Unit-Wise |
| `/icse-class-10-computer-applications-project-and-internal-assessment` | ICSE Computer Applications Project and Internal Assessment 2027 |
| `/icse-class-10-computer-applications-specimen-paper-and-mock-tests` | ICSE Computer Applications Specimen Paper 2027 and Mock Tests |
| `/icse-class-10-computer-applications-syllabus-explained` | ICSE Class 10 Computer Applications Syllabus 2026-27 Explained |
| `/icse-class-10-java-classes-online` | ICSE Class 10 Java Classes Online |
| `/icse-class-10-java-programs-practice` | ICSE Class 10 Java Programs Practice |
| `/indian-computing-olympiad-preparation` | Indian Computing Olympiad Prep: ZIO, ZCO and INOI, Live Online |
| `/inside-neural-networks` | Inside Neural Networks: How Deep Learning Really Works, From Perceptron to Transformer |
| `/intellij-and-pycharm-free-for-students` | IntelliJ and PyCharm Free for Students: License and Setup |
| `/intermediate-mathematical-olympiad-cayley-hamilton-maclaurin-preparation` | Cayley, Hamilton and Maclaurin Preparation |
| `/ioi-olympiad-informatics-training` | IOI and Informatics Olympiad Training |
| `/ioqm-rmo-inmo-preparation` | IOQM, RMO and INMO Preparation Online: India's Olympiad Pathway |
| `/is-ap-computer-science-hard` | Is AP Computer Science Hard? CSA and CSP, by the Numbers |
| `/isef-computer-science-project-mentoring` | ISEF Computer Science Project Mentoring: 2027 Rules Guide |
| `/java-cannot-find-symbol-error` | Java "cannot find symbol" Error: What It Means and How to Fix It |
| `/java-certification-course` | Java Certification Course |
| `/java-classes-for-adults` | Java Classes for Adults |
| `/java-classes-for-teens` | Java Classes for Teens |
| `/java-classes-for-teens-in-canada` | Java Classes for Teens in Canada: ICS3U, ICS4U and Beyond |
| `/java-classes-ireland` | Java Classes in Ireland |
| `/java-classes-netherlands` | Java Classes in the Netherlands |
| `/java-classes-online-australia` | Java Classes Online in Australia |
| `/java-classes-uk` | Java Classes in the UK |
| `/java-dsa-course` | Java DSA Course |
| `/java-for-beginners` | Java for Beginners |
| `/java-oops-concepts-course` | Java OOP Concepts Course |
| `/java-programming-for-icse-students` | Java for ICSE & ISC Students |
| `/java-programming-for-kids-teens` | Java Programming for Kids & Teens: Learn Java Online |
| `/java-projects-for-students` | Java Projects for Students |
| `/javascript-classes-online-australia` | JavaScript Classes Online in Australia |
| `/javascript-for-kids` | JavaScript for Kids: Where to Start, With Three Real Programs |
| `/jee-aspirant-coding-track` | JEE Aspirant Coding Track: Python & Computational Maths for Class 11 & 12 Without Distu... |
| `/junior-cycle-coding-short-course-help` | Junior Cycle Coding Short Course Help |
| `/junior-mathematical-olympiad-preparation` | Junior Mathematical Olympiad Preparation |
| `/jupyter-notebook-errors-for-students` | Jupyter Notebook Errors: A Fix Guide for Students |
| `/kids-coding-languages-australia` | Kids Coding Languages: Which One First? Australia Guide |
| `/ks1-coding-lessons-online` | KS1 Coding Lessons Online |
| `/ks2-coding-lessons-online` | Key Stage 2 Coding Lessons Online |
| `/ks3-computing-tuition-online` | Key Stage 3 Computing Tuition Online |
| `/large-language-models-course` | Large Language Models Course (LLMs) |
| `/learn-coding-by-age` | Learn Coding by Age (8-17) |
| `/learn-coding-by-class` | Learn Coding by Class (4-12) |
| `/learn-coding-from-first-principles` | Learn Coding From First Principles: Understand How Code Actually Works |
| `/learn-to-build-ai` | Learn to Build AI, Not Just Use It |
| `/learn-to-code-minecraft-mods` | Learn to Code Minecraft Mods in Java: A Guide for Teens |
| `/learn-to-code-over-50-australia` | Learn to Code Over 50 in Australia |
| `/learn-to-code-over-50-uk` | Learn to Code Over 50, UK |
| `/learn-to-code-with-ai` | Learn to Code with AI |
| `/learn-to-think-not-just-use-ai-tools-australia` | Learn to Think, Not Just Use AI Tools |
| `/learn-to-think-not-just-use-ai-tools-ireland` | Learn to Think, Not Just Use AI Tools |
| `/learn-to-think-not-just-use-ai-tools-uk` | Learn to Think, Not Just Use AI Tools |
| `/learn-to-train-ai-not-just-prompt-it-australia` | Learn to Train AI, Not Just Prompt It |
| `/learn-to-train-ai-not-just-prompt-it-ireland` | Learn to Train AI, Not Just Prompt It |
| `/learn-to-train-ai-not-just-prompt-it-uk` | Learn to Train AI, Not Just Prompt It |
| `/leaving-cert-computer-science-grinds-online` | Leaving Cert Computer Science Grinds Online |
| `/levels/coding-for-college-students` | Coding for College Students - Python, DSA, Web Dev & AI |
| `/levels/coding-for-kids` | Online Coding Classes for Kids Ages 6-12 |
| `/levels/coding-for-professionals` | Coding for Adults & Beginners: Career Switch to Tech |
| `/levels/coding-for-teens` | Coding for Teenagers Ages 13-18 |
| `/levels/corporate-training` | Corporate Coding Training |
| `/lua-for-kids` | Lua for Kids: Learn Lua and Luau with Real Code |
| `/makecode-arcade-help-for-students` | MakeCode Arcade Help: Jump, Gravity, Levels and Saving |
| `/master-ai-ml-python-java` | Master AI, ML, Python & Java: Go Deeper |
| `/mathcounts-preparation` | MATHCOUNTS Preparation Online: Sprint, Target, Team, Countdown |
| `/mathematical-olympiad-for-girls-preparation` | Mathematical Olympiad for Girls Preparation |
| `/mcr3u-functions-tutor` | MCR3U Functions Tutor: Grade 11 Help and Final Exam Prep |
| `/mdm4u-data-management-tutor` | MDM4U Data Management Tutor: Grade 12 Help and Practice |
| `/mhf4u-advanced-functions-tutor` | MHF4U Advanced Functions Tutor: Grade 12 Help and Exam Prep |
| `/minecraft-coding-classes-australia` | Minecraft Coding Classes in Australia |
| `/minecraft-coding-classes-for-kids` | Minecraft Coding Classes for Kids |
| `/mobile-app-development-services` | Mobile App Development Company |
| `/model-context-protocol-mcp-course` | Model Context Protocol (MCP) Course |
| `/multiplication-tables-check-year-4-practice` | Multiplication Tables Check Practice, Year 4 |
| `/mvp-development-company` | MVP Development Company for Startups |
| `/naplan-numeracy-practice-online` | NAPLAN Numeracy Practice Online |
| `/naplan-year-3-numeracy-practice` | NAPLAN Year 3 Numeracy Practice |
| `/naplan-year-5-numeracy-practice` | NAPLAN Year 5 Numeracy Practice |
| `/naplan-year-7-numeracy-practice` | NAPLAN Year 7 Numeracy Practice |
| `/naplan-year-9-numeracy-practice` | NAPLAN Year 9 Numeracy Practice |
| `/national-5-computing-science-help` | National 5 Computing Science Help |
| `/national-cipher-challenge-preparation` | National Cipher Challenge Preparation |
| `/natural-language-processing-course` | Natural Language Processing Course (NLP) |
| `/neural-networks-course` | Neural Networks Course |
| `/new-computing-gcse-explained` | The New Computing GCSE Explained |
| `/nnat-test-prep` | NNAT Test Prep: NNAT3 Nonverbal Reasoning for Ages 6 to 9 |
| `/nsw-selective-test-mathematical-reasoning-practice` | NSW Selective Test Mathematical Reasoning Practice |
| `/nsw-selective-test-thinking-skills-practice` | NSW Selective Test Thinking Skills Practice |
| `/numpy-pandas-matplotlib-masterclass` | NumPy, Pandas & Matplotlib Masterclass: Python Data Analysis in Depth |
| `/nyc-gifted-and-talented-guide` | NYC Gifted and Talented Guide 2027: No Test, Real Readiness |
| `/oca-java-certification-prep` | OCA Java SE 8 Certification (1Z0-808): Full Exam Guide, Objectives & Live Coaching |
| `/ocr-a-level-computer-science-h446-help` | OCR A-level Computer Science H446 Help |
| `/ocr-gcse-computer-science-j277-help` | OCR GCSE Computer Science J277 Help |
| `/olsat-test-prep` | OLSAT Test Prep: OLSAT-8 Reasoning and Readiness, Ages 6 to 9 |
| `/one-on-one-ai-classes` | One to One AI Classes |
| `/one-on-one-coding-tutor-australia` | One-on-One Coding Tutor in Australia |
| `/one-to-one-coding-classes-in-nassau` | One to One Coding Classes in Nassau |
| `/one-to-one-coding-classes-netherlands` | One-to-One Coding Classes in the Netherlands |
| `/online-c-plus-plus-classes` | Online C++ Classes |
| `/online-coding-and-ai-classes-in-atlanta` | Online Coding and AI Classes in Atlanta, Georgia |
| `/online-coding-and-ai-classes-in-dallas-fort-worth` | Online Coding and AI Classes in Dallas Fort Worth |
| `/online-coding-and-ai-classes-in-los-angeles` | Online Coding and AI Classes in Los Angeles |
| `/online-coding-and-ai-classes-in-phoenix` | Online Coding and AI Classes in Phoenix |
| `/online-coding-and-ai-classes-in-raleigh-durham` | Online Coding and AI Classes in Raleigh-Durham, North Carolina |
| `/online-coding-and-ai-classes-in-san-diego` | Online Coding and AI Classes in San Diego |
| `/online-coding-and-ai-classes-in-seattle` | Online Coding and AI Classes in Seattle |
| `/online-coding-and-python-classes-in-altrincham` | Online Coding and Python Classes in Altrincham |
| `/online-coding-and-python-classes-in-arnold` | Online Coding and Python Classes in Arnold, Nottingham |
| `/online-coding-and-python-classes-in-ashford` | Online Coding and Python Classes in Ashford, Kent |
| `/online-coding-and-python-classes-in-ashton-under-lyne` | Online Coding and Python Classes in Ashton-under-Lyne, Tameside |
| `/online-coding-and-python-classes-in-ballarat` | Online Coding and Python Classes in Ballarat |
| `/online-coding-and-python-classes-in-ballina` | Online Coding and Python Classes in Ballina |
| `/online-coding-and-python-classes-in-ballymena` | Online Coding and Python Classes in Ballymena |
| `/online-coding-and-python-classes-in-balwyn-melbourne` | Online Coding and Python Classes in Balwyn, Melbourne |
| `/online-coding-and-python-classes-in-barrie` | Online Coding and Python Classes in Barrie |
| `/online-coding-and-python-classes-in-bedford` | Online Coding and Python Classes in Bedford |
| `/online-coding-and-python-classes-in-beeston` | Online Coding and Python Classes in Beeston, Nottinghamshire |
| `/online-coding-and-python-classes-in-bexhill-on-sea` | Online Coding and Python Classes, Bexhill-on-Sea |
| `/online-coding-and-python-classes-in-blackpool` | Online Coding and Python Classes in Blackpool |
| `/online-coding-and-python-classes-in-bletchley` | Online Coding and Python Classes in Bletchley, Milton Keynes |
| `/online-coding-and-python-classes-in-bolton` | Online Coding and Python Classes in Bolton |
| `/online-coding-and-python-classes-in-bowral` | Online Coding and Python Classes in Bowral |
| `/online-coding-and-python-classes-in-bracknell` | Online Coding and Python Classes in Bracknell |
| `/online-coding-and-python-classes-in-braintree` | Online Coding and Python Classes in Braintree |
| `/online-coding-and-python-classes-in-brentwood` | Online Coding and Python Classes in Brentwood |
| `/online-coding-and-python-classes-in-broken-hill` | Online Coding and Python Classes in Broken Hill |
| `/online-coding-and-python-classes-in-bundaberg` | Online Coding and Python Classes in Bundaberg |
| `/online-coding-and-python-classes-in-burlington-ontario` | Online Coding and Python Classes in Burlington, Ontario |
| `/online-coding-and-python-classes-in-burwood-east-melbourne` | Online Coding and Python Classes in Burwood East, Melbourne |
| `/online-coding-and-python-classes-in-bury` | Online Coding and Python Classes in Bury |
| `/online-coding-and-python-classes-in-calamvale-brisbane` | Online Coding and Python Classes in Calamvale, Brisbane |
| `/online-coding-and-python-classes-in-canning-vale-perth` | Online Coding and Python Classes in Canning Vale, Perth |
| `/online-coding-and-python-classes-in-carlingford-sydney` | Online Coding and Python Classes in Carlingford, Sydney |
| `/online-coding-and-python-classes-in-casey-melbourne` | Online Coding and Python Classes in Casey, Melbourne |
| `/online-coding-and-python-classes-in-castle-hill-sydney` | Online Coding and Python Classes in Castle Hill, Sydney |
| `/online-coding-and-python-classes-in-castleford` | Online Coding and Python Classes in Castleford, West Yorkshire |
| `/online-coding-and-python-classes-in-cheltenham` | Online Coding and Python Classes in Cheltenham |
| `/online-coding-and-python-classes-in-chermside-brisbane` | Online Coding and Python Classes in Chermside, Brisbane |
| `/online-coding-and-python-classes-in-chiswick-london` | Online Coding and Python Classes in Chiswick |
| `/online-coding-and-python-classes-in-coatbridge` | Online Coding and Python Classes in Coatbridge |
| `/online-coding-and-python-classes-in-colwyn-bay` | Online Coding and Python Classes in Colwyn Bay |
| `/online-coding-and-python-classes-in-coquitlam` | Online Coding and Python Classes in Coquitlam |
| `/online-coding-and-python-classes-in-corby` | Online Coding and Python Classes in Corby |
| `/online-coding-and-python-classes-in-craigieburn-melbourne` | Online Coding and Python Classes in Craigieburn, Melbourne |
| `/online-coding-and-python-classes-in-crawley` | Online Coding and Python Classes in Crawley |
| `/online-coding-and-python-classes-in-crosby` | Online Coding and Python Classes in Crosby |
| `/online-coding-and-python-classes-in-cumbernauld` | Online Coding and Python Classes in Cumbernauld |
| `/online-coding-and-python-classes-in-darwin` | Online Coding and Python Classes in Darwin |
| `/online-coding-and-python-classes-in-didsbury-manchester` | Online Coding and Python Classes in Didsbury, Manchester |
| `/online-coding-and-python-classes-in-doncaster-melbourne` | Online Coding and Python Classes in Doncaster, Melbourne |
| `/online-coding-and-python-classes-in-downpatrick` | Online Coding and Python Classes in Downpatrick |
| `/online-coding-and-python-classes-in-dudley` | Online Coding and Python Classes in Dudley |
| `/online-coding-and-python-classes-in-eastbourne` | Online Coding and Python Classes in Eastbourne |
| `/online-coding-and-python-classes-in-edgbaston-birmingham` | Online Coding and Python Classes in Edgbaston, Birmingham |
| `/online-coding-and-python-classes-in-ellenbrook-perth` | Online Coding and Python Classes in Ellenbrook, Perth |
| `/online-coding-and-python-classes-in-epping-vic-melbourne` | Online Coding and Python Classes in Epping, Melbourne |
| `/online-coding-and-python-classes-in-forest-lake-brisbane` | Online Coding and Python Classes in Forest Lake, Brisbane |
| `/online-coding-and-python-classes-in-geelong` | Online Coding and Python Classes in Geelong |
| `/online-coding-and-python-classes-in-hamilton-ontario` | Online Coding and Python Classes in Hamilton, Ontario |
| `/online-coding-and-python-classes-in-hartlepool` | Online Coding and Python Classes in Hartlepool |
| `/online-coding-and-python-classes-in-hastings` | Online Coding and Python Classes in Hastings |
| `/online-coding-and-python-classes-in-hatfield` | Online Coding and Python Classes in Hatfield |
| `/online-coding-and-python-classes-in-havant` | Online Coding and Python Classes in Havant |
| `/online-coding-and-python-classes-in-hayes-london` | Online Coding and Python Classes in Hayes, London |
| `/online-coding-and-python-classes-in-headingley-leeds` | Online Coding and Python Classes in Headingley, Leeds |
| `/online-coding-and-python-classes-in-homebush-sydney` | Online Coding and Python Classes in Homebush, Sydney |
| `/online-coding-and-python-classes-in-hornsby-sydney` | Online Coding and Python Classes in Hornsby, Sydney |
| `/online-coding-and-python-classes-in-hurstville-sydney` | Online Coding and Python Classes in Hurstville, Sydney |
| `/online-coding-and-python-classes-in-ilford-london` | Online Coding and Python Classes in Ilford, London |
| `/online-coding-and-python-classes-in-inner-north-canberra` | Online Coding and Python Classes in Inner North Canberra |
| `/online-coding-and-python-classes-in-irvine` | Online Coding and Python Classes in Irvine |
| `/online-coding-and-python-classes-in-kamloops` | Online Coding and Python Classes in Kamloops |
| `/online-coding-and-python-classes-in-kings-lynn` | Online Coding and Python Classes in King's Lynn |
| `/online-coding-and-python-classes-in-kingswinford` | Online Coding and Python Classes in Kingswinford |
| `/online-coding-and-python-classes-in-kingswood-bristol` | Online Coding and Python Classes in Kingswood |
| `/online-coding-and-python-classes-in-larne` | Online Coding and Python Classes in Larne |
| `/online-coding-and-python-classes-in-macclesfield` | Online Coding and Python Classes in Macclesfield |
| `/online-coding-and-python-classes-in-mackay` | Online Coding and Python Classes in Mackay |
| `/online-coding-and-python-classes-in-maidstone` | Online Coding and Python Classes in Maidstone |
| `/online-coding-and-python-classes-in-maitland-newcastle` | Online Coding and Python Classes in Maitland, Newcastle |
| `/online-coding-and-python-classes-in-malone-belfast` | Online Coding and Python Classes in Malone, Belfast |
| `/online-coding-and-python-classes-in-mansfield` | Online Coding and Python Classes in Mansfield |
| `/online-coding-and-python-classes-in-margate` | Online Coding and Python Classes in Margate |
| `/online-coding-and-python-classes-in-maroondah-melbourne` | Online Coding and Python Classes in Maroondah, Melbourne |
| `/online-coding-and-python-classes-in-modbury-adelaide` | Online Coding and Python Classes in Modbury, Adelaide |
| `/online-coding-and-python-classes-in-moreton-bay` | Online Coding and Python Classes in Moreton Bay |
| `/online-coding-and-python-classes-in-mosman-sydney` | Online Coding and Python Classes in Mosman, Sydney |
| `/online-coding-and-python-classes-in-musselburgh` | Online Coding and Python Classes in Musselburgh |
| `/online-coding-and-python-classes-in-neath` | Online Coding and Python Classes in Neath |
| `/online-coding-and-python-classes-in-nelson-bay` | Online Coding and Python Classes in Nelson Bay |
| `/online-coding-and-python-classes-in-newbury` | Online Coding and Python Classes in Newbury |
| `/online-coding-and-python-classes-in-newcastle-nsw` | Online Coding and Python Classes in Newcastle NSW |
| `/online-coding-and-python-classes-in-norwood-adelaide` | Online Coding and Python Classes in Norwood, Adelaide |
| `/online-coding-and-python-classes-in-nowra` | Online Coding and Python Classes in Nowra |
| `/online-coding-and-python-classes-in-oran-park-sydney` | Online Coding and Python Classes in Oran Park, Sydney |
| `/online-coding-and-python-classes-in-paisley` | Online Coding and Python Classes in Paisley |
| `/online-coding-and-python-classes-in-palmerston-nt-darwin` | Online Coding and Python Classes in Palmerston, Darwin |
| `/online-coding-and-python-classes-in-perth-western-australia` | Online Coding and Python Classes in Perth, WA |
| `/online-coding-and-python-classes-in-poole` | Online Coding and Python Classes in Poole |
| `/online-coding-and-python-classes-in-prospect-sa-adelaide` | Online Coding and Python Classes in Prospect, Adelaide |
| `/online-coding-and-python-classes-in-queanbeyan` | Online Coding and Python Classes in Queanbeyan |
| `/online-coding-and-python-classes-in-red-deer` | Online Coding and Python Classes in Red Deer |
| `/online-coding-and-python-classes-in-redlands-brisbane` | Online Coding and Python Classes in Redlands, Brisbane |
| `/online-coding-and-python-classes-in-rochdale` | Online Coding and Python Classes in Rochdale |
| `/online-coding-and-python-classes-in-royal-leamington-spa` | Online Coding and Python Classes in Royal Leamington Spa |
| `/online-coding-and-python-classes-in-rugby` | Online Coding and Python Classes in Rugby |
| `/online-coding-and-python-classes-in-runcorn` | Online Coding and Python Classes in Runcorn |
| `/online-coding-and-python-classes-in-saint-john-new-brunswick` | Online Coding and Python Classes in Saint John, NB |
| `/online-coding-and-python-classes-in-sandy-bay-hobart` | Online Coding and Python Classes in Sandy Bay, Hobart |
| `/online-coding-and-python-classes-in-scarborough` | Online Coding and Python Classes in Scarborough |
| `/online-coding-and-python-classes-in-scarborough-wa-perth` | Online Coding and Python Classes in Scarborough, Perth |
| `/online-coding-and-python-classes-in-shepparton` | Online Coding and Python Classes in Shepparton |
| `/online-coding-and-python-classes-in-sherbrooke` | Online Coding and Python Classes in Sherbrooke |
| `/online-coding-and-python-classes-in-solihull` | Online Coding and Python Classes in Solihull |
| `/online-coding-and-python-classes-in-stafford` | Online Coding and Python Classes in Stafford |
| `/online-coding-and-python-classes-in-stockbridge-edinburgh` | Online Coding and Python Classes in Stockbridge, Edinburgh |
| `/online-coding-and-python-classes-in-stonnington-melbourne` | Online Coding and Python Classes in Stonnington, Melbourne |
| `/online-coding-and-python-classes-in-stourbridge` | Online Coding and Python Classes in Stourbridge |
| `/online-coding-and-python-classes-in-strathfield-sydney` | Online Coding and Python Classes in Strathfield, Sydney |
| `/online-coding-and-python-classes-in-surfers-paradise-gold-coast` | Online Coding and Python Classes in Surfers Paradise, Gold Coast |
| `/online-coding-and-python-classes-in-sutherland-shire-sydney` | Online Coding and Python Classes in Sutherland Shire, Sydney |
| `/online-coding-and-python-classes-in-tamworth-nsw` | Online Coding and Python Classes in Tamworth NSW |
| `/online-coding-and-python-classes-in-thunder-bay` | Online Coding and Python Classes in Thunder Bay |
| `/online-coding-and-python-classes-in-tuggeranong-canberra` | Online Coding and Python Classes in Tuggeranong, Canberra |
| `/online-coding-and-python-classes-in-vaughan` | Online Coding and Python Classes in Vaughan |
| `/online-coding-and-python-classes-in-wangaratta` | Online Coding and Python Classes in Wangaratta |
| `/online-coding-and-python-classes-in-wanneroo-perth` | Online Coding and Python Classes in Wanneroo, Perth |
| `/online-coding-and-python-classes-in-warragul` | Online Coding and Python Classes in Warragul |
| `/online-coding-and-python-classes-in-warrington` | Online Coding and Python Classes in Warrington |
| `/online-coding-and-python-classes-in-waverley-sydney` | Online Coding and Python Classes in Waverley, Sydney |
| `/online-coding-and-python-classes-in-west-bridgford-nottingham` | Online Coding and Python Classes in West Bridgford |
| `/online-coding-and-python-classes-in-weston-super-mare` | Online Coding and Python Classes in Weston-super-Mare |
| `/online-coding-and-python-classes-in-whitehorse-melbourne` | Online Coding and Python Classes in Whitehorse, Melbourne |
| `/online-coding-and-python-classes-in-whyalla` | Online Coding and Python Classes in Whyalla |
| `/online-coding-and-python-classes-in-wigan` | Online Coding and Python Classes in Wigan |
| `/online-coding-and-python-classes-in-wigston-leicester` | Online Coding and Python Classes in Wigston |
| `/online-coding-and-python-classes-in-windsor-ontario` | Online Coding and Python Classes in Windsor, Ontario |
| `/online-coding-and-python-classes-in-yarra-ranges-melbourne` | Online Coding and Python Classes in Yarra Ranges, Melbourne |
| `/online-coding-classes-australia-compared` | Online Coding Classes in Australia Compared: What to Check |
| `/online-coding-classes-cost` | How Much Do Coding Classes Cost in 2026? Fees by Format |
| `/online-coding-classes-for-kids-australia` | Online Coding Classes for Kids in Australia |
| `/online-coding-classes-for-kids-uk` | Online Coding Classes for Kids in the UK |
| `/online-coding-classes-for-kids-usa` | Online Coding Classes for Kids in the USA |
| `/online-coding-summer-course-ireland` | Online Coding Summer Course in Ireland |
| `/online-coding-summer-course-uk` | Online Coding Summer Course, UK |
| `/online-coding-tutor-australia` | Online Coding Tutor in Australia |
| `/online-coding-tutor-uk` | Online Coding Tutor UK |
| `/online-java-classes` | Online Java Classes |
| `/ontario-coding-curriculum-grades-1-to-8` | Ontario Math Curriculum Coding, Grades 1 to 8, by Grade |
| `/ontario-computer-science-course-pathway` | Ontario Computer Science Pathway: ICD2O to ICS4U, Grade by Grade |
| `/ontario-high-school-diploma-credits-explained` | Ontario High School Credits Explained: OSSD Requirements |
| `/oxford-mat-preparation` | Oxford MAT Preparation: MAT Replaced by the TMUA in 2026 |
| `/oxford-university-computing-challenge-preparation` | Oxford University Computing Challenge |
| `/parents-guide-to-vibe-coding` | A Parent's Guide to Vibe Coding |
| `/pascal-contest-preparation` | Pascal Contest 2027 (Grade 9): Format, Scoring, Practice |
| `/passion-project-ideas-computer-science` | Passion Project Ideas for Computer Science Students |
| `/pcep-python-certification-prep` | PCEP Certification Preparation: Python Entry-Level Exam Guide & Live Coaching |
| `/perse-coding-team-challenge-preparation` | Perse Coding Team Challenge Preparation |
| `/picoctf-for-beginners` | picoCTF for Beginners: How to Start, Ethically, in 2026 |
| `/presidential-ai-challenge-guide` | Presidential AI Challenge Guide: 2027 Rules, Dates, Scoring |
| `/priority-demo` | Priority Live Demo Class |
| `/problem-solving-skills-through-coding-ireland` | Problem Solving Skills Through Coding |
| `/problem-solving-skills-through-coding-uk` | Problem-Solving Skills Through Coding |
| `/problem-solving-through-coding-australia` | Problem Solving Through Coding |
| `/prompt-engineering-course` | Prompt Engineering Course |
| `/python-ai-course-for-kids-australia` | Python AI Course for Kids in Australia |
| `/python-and-ai-classes-for-kids-teens` | Python for Kids & Teens |
| `/python-and-ai-track-for-students-bahamas` | The 12-Month Python and AI Track for Bahamian Students |
| `/python-certification-pcep-pcap-course` | Python Certification Course |
| `/python-classes-in-canada` | Python Classes in Canada: Live Online for Kids, Teens, Adults |
| `/python-classes-in-dubai` | Python Classes in Dubai |
| `/python-classes-in-qatar` | Python Classes in Qatar |
| `/python-classes-in-saudi-arabia` | Python Classes in Saudi Arabia |
| `/python-classes-netherlands` | Python Classes in the Netherlands |
| `/python-classes-online-australia` | Python Classes Online in Australia |
| `/python-for-beginners-kids` | Python for Beginners Kids: Absolute Zero Start, Fun Projects, Live 1-on-1 Classes |
| `/python-for-cbse-class-10-ai` | Python for CBSE Class 10 AI (417) |
| `/python-for-data-science` | Python for Data Science |
| `/python-for-kids-in-dubai` | Python for Kids in Dubai |
| `/python-from-the-ground-up` | Python From the Ground Up: Complete, In-Depth Python Course (Grade 6 to Professional) |
| `/python-games-for-kids` | Python Games for Kids: Code Your First Game, Then Pygame |
| `/python-indentation-error-explained` | Python IndentationError Explained: Every Message and Fix |
| `/python-projects-for-kids` | Python Projects for Kids: 20+ Finishable Python Projects (Ages 8 to 15) |
| `/python-to-ai-roadmap-for-students-netherlands` | Python to AI Roadmap for Students in the Netherlands |
| `/python-to-ai-roadmap-for-students-oman` | Python to AI Roadmap for Students in Oman |
| `/python-turtle-not-working` | Python Turtle Not Working? Real Errors and Fixes |
| `/rag-systems-course` | RAG Systems Course |
| `/raspberry-pi-coding-projects-uk` | Raspberry Pi Coding Projects for Kids and Teens, UK |
| `/real-coding-classes` | Real Coding Classes: Learn How Code Actually Works, How to Think Like a Programmer & Bu... |
| `/results` | Our Results |
| `/roblox-coding-classes-australia` | Roblox Coding Classes in Australia |
| `/roblox-coding-classes-for-kids` | Roblox Coding Classes for Kids |
| `/roblox-studio-errors-fixed` | Roblox Studio Errors Fixed: 403, 502, HTTP and Output |
| `/robocup-junior-australia-coding-help` | RoboCup Junior Australia Coding Help: Challenges Explained |
| `/sace-digital-technologies-help` | SACE Digital Technologies Help |
| `/sace-mathematical-methods-tutoring` | SACE Mathematical Methods Tutoring |
| `/sace-specialist-mathematics-tutoring` | SACE Specialist Mathematics Tutoring |
| `/school-holiday-coding-course-australia` | School Holiday Coding Course in Australia |
| `/science-fair-project-ideas-ai` | AI Science Fair Project Ideas That Follow the Actual Rules |
| `/science-olympiad-coding-events-help` | Science Olympiad Coding Events Help: 2027 Season Guide |
| `/scottish-mathematical-challenge-practice` | Scottish Mathematical Challenge Practice |
| `/scratch-coding-classes-for-kids` | Scratch Coding Classes for Kids |
| `/scratch-not-working-help` | Scratch Not Working? Fixes for Saving, Sign-In and Loading |
| `/screen-time-to-skill` | Screen Time to Skill Calculator: Turn Your Child's YouTube Hours into Apps, Code & Income |
| `/sentinus-young-innovators-coding-help` | Sentinus Young Innovators Coding Help |
| `/should-my-child-learn-ai` | Should My Child Learn AI? An Honest Decision Guide |
| `/small-batches-and-1-on-1-classes` | Small Live Batches and 1-on-1 Classes |
| `/sof-icso-preparation` | SOF ICSO (NCO) Preparation Classes Online, Classes 1 to 10 |
| `/sof-imo-preparation` | SOF IMO Preparation Classes Online, Classes 1 to 12 |
| `/software-development-course-australia` | Software Development Course in Australia |
| `/software-engineering-major-project-help-hsc` | HSC Software Engineering Project Help |
| `/software-maintenance-and-support` | Bug Fixing, QA & Software Maintenance Services |
| `/software-scaling-and-modernization` | Software Scaling & Modernization Services |
| `/student-hackathons-uk` | Student Hackathons UK |
| `/summer-research-programs-coding` | Summer Research Programs in Coding and AI |
| `/t-level-digital-coding-help` | T Level Digital Software Development Help |
| `/tasc-computer-science-help` | TASC Computer Science Help |
| `/tasc-mathematics-methods-tutoring` | TASC Mathematics Methods Tutoring |
| `/team` | Our Team |
| `/technovation-girls-guide` | Technovation Girls Guide: 2026-27 Divisions, Dates, Rules |
| `/think-like-a-software-engineer` | Think Like a Software Engineer |
| `/times-tables-tutor-online-uk` | Times Tables Tutor Online UK |
| `/tmua-preparation` | TMUA Preparation: Format, 2026 to 2027 Dates and Who Needs It |
| `/transition-year-coding-course-ireland` | Transition Year Coding Course in Ireland |
| `/ubc-computer-science-admission-requirements` | UBC Computer Science Admission Requirements, 2027 Entry |
| `/uk-gcse-computer-science-tutoring` | GCSE Computer Science Tutoring |
| `/ukmt-kangaroo-rounds-practice` | UKMT Kangaroo Practice |
| `/understand-the-code-dont-copy-paste-australia` | Understand the Code, Don't Copy-Paste |
| `/understand-the-code-dont-copy-paste-ireland` | Understand the Code, Don't Copy-Paste |
| `/understand-the-code-dont-copy-paste-uk` | Understand the Code, Do Not Copy-Paste It |
| `/unity-for-teens` | Unity for Teens: Age Rules, Free Plans and First C# Scripts |
| `/uoft-computer-science-admission-requirements` | U of T Computer Science Admission: TAD, TMX and TXC |
| `/us-gifted-and-selective-school-tests-guide` | Gifted and Talented Tests Explained: CogAT, NNAT, OLSAT, SHSAT |
| `/usaco-for-canadian-students` | USACO for Canadian Students: How It Differs from the CCC |
| `/usaco-preparation-online-coaching` | USACO Preparation Online Coaching |
| `/vce-algorithmics-hess-help` | VCE Algorithmics (HESS) Help |
| `/vce-applied-computing-data-analytics-help` | VCE Data Analytics Help |
| `/vce-applied-computing-software-development-help` | VCE Software Development Help |
| `/vex-iq-programming-help` | VEX IQ Programming Help: Coding Tutorial for 2026-27 |
| `/vibe-coding-and-ai-agents-classes-in-airdrie` | Vibe Coding and AI Agents Classes in Airdrie |
| `/vibe-coding-and-ai-agents-classes-in-albany-wa` | Vibe Coding and AI Agents Classes in Albany, WA |
| `/vibe-coding-and-ai-agents-classes-in-albury-wodonga` | Vibe Coding and AI Agents Classes in Albury-Wodonga |
| `/vibe-coding-and-ai-agents-classes-in-applecross-perth` | Vibe Coding and AI Agents Classes in Applecross, Perth |
| `/vibe-coding-and-ai-agents-classes-in-armadale-perth` | Vibe Coding and AI Agents Classes in Armadale, Perth |
| `/vibe-coding-and-ai-agents-classes-in-aspley-brisbane` | Vibe Coding and AI Agents Classes in Aspley, Brisbane |
| `/vibe-coding-and-ai-agents-classes-in-auburn-sydney` | Vibe Coding and AI Agents Classes in Auburn, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-banyule-melbourne` | Vibe Coding and AI Agent Classes in Banyule, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-bishops-stortford` | Vibe Coding and AI Agents Classes in Bishop's Stortford |
| `/vibe-coding-and-ai-agents-classes-in-bishopston-bristol` | Vibe Coding and AI Agents Classes in Bishopston, Bristol |
| `/vibe-coding-and-ai-agents-classes-in-blacktown-sydney` | Vibe Coding and AI Agents Classes in Blacktown, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-bognor-regis` | Vibe Coding and AI Agents Classes in Bognor Regis |
| `/vibe-coding-and-ai-agents-classes-in-box-hill-melbourne` | Vibe Coding and AI Agents Classes in Box Hill, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-brantford` | Vibe Coding and AI Agents Classes in Brantford, Ontario |
| `/vibe-coding-and-ai-agents-classes-in-bridgwater` | Vibe Coding and AI Agents Classes in Bridgwater, Somerset |
| `/vibe-coding-and-ai-agents-classes-in-bunbury` | Vibe Coding and AI Agents Classes in Bunbury |
| `/vibe-coding-and-ai-agents-classes-in-burnie` | Vibe Coding and AI Agents Classes in Burnie |
| `/vibe-coding-and-ai-agents-classes-in-burnley` | Vibe Coding and AI Agents Classes in Burnley |
| `/vibe-coding-and-ai-agents-classes-in-cairns` | Vibe Coding and AI Agents Classes in Cairns |
| `/vibe-coding-and-ai-agents-classes-in-camberwell-melbourne` | Vibe Coding and AI Agents Classes in Camberwell, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-canada` | Vibe Coding and AI Agents Classes in Canada: Teens and Adults |
| `/vibe-coding-and-ai-agents-classes-in-canberra` | Vibe Coding and AI Agents Classes in Canberra |
| `/vibe-coding-and-ai-agents-classes-in-central-coast-nsw` | Vibe Coding and AI Agents Classes on the Central Coast NSW |
| `/vibe-coding-and-ai-agents-classes-in-chatswood-sydney` | Vibe Coding and AI Agents Classes in Chatswood, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-clacton-on-sea` | Vibe Coding and AI Agents Classes in Clacton-on-Sea |
| `/vibe-coding-and-ai-agents-classes-in-clarence-hobart` | Vibe Coding and AI Agents Classes in Clarence, Hobart |
| `/vibe-coding-and-ai-agents-classes-in-coleraine` | Vibe Coding and AI Agents Classes in Coleraine |
| `/vibe-coding-and-ai-agents-classes-in-crewe` | Vibe Coding and AI Agents Classes in Crewe |
| `/vibe-coding-and-ai-agents-classes-in-crookes-sheffield` | Vibe Coding and AI Agents Classes in Crookes, Sheffield |
| `/vibe-coding-and-ai-agents-classes-in-cwmbran` | Vibe Coding and AI Agents Classes in Cwmbran |
| `/vibe-coding-and-ai-agents-classes-in-darlington` | Vibe Coding and AI Agents Classes in Darlington |
| `/vibe-coding-and-ai-agents-classes-in-dungannon` | Vibe Coding and AI Agents Classes in Dungannon |
| `/vibe-coding-and-ai-agents-classes-in-echuca` | Vibe Coding and AI Agents Classes in Echuca |
| `/vibe-coding-and-ai-agents-classes-in-epping-sydney` | Vibe Coding and AI Agents Classes in Epping, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-fareham` | Vibe Coding and AI Agents Classes in Fareham, Hampshire |
| `/vibe-coding-and-ai-agents-classes-in-folkestone` | Vibe Coding and AI Agents Classes in Folkestone |
| `/vibe-coding-and-ai-agents-classes-in-fremantle-perth` | Vibe Coding and AI Agents Classes in Fremantle, Perth |
| `/vibe-coding-and-ai-agents-classes-in-glen-eira-melbourne` | Vibe Coding and AI Agents Classes in Glen Eira, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-glenelg-adelaide` | Vibe Coding and AI Agents Classes in Glenelg, Adelaide |
| `/vibe-coding-and-ai-agents-classes-in-golden-grove-adelaide` | Vibe Coding and AI Agents Classes in Golden Grove, Adelaide |
| `/vibe-coding-and-ai-agents-classes-in-goulburn` | Vibe Coding and AI Agents Classes in Goulburn |
| `/vibe-coding-and-ai-agents-classes-in-grays` | Vibe Coding and AI Agents Classes in Grays, Essex |
| `/vibe-coding-and-ai-agents-classes-in-greater-sudbury` | Vibe Coding and AI Agents Classes in Greater Sudbury |
| `/vibe-coding-and-ai-agents-classes-in-gungahlin-canberra` | Vibe Coding and AI Agents Classes in Gungahlin, Canberra |
| `/vibe-coding-and-ai-agents-classes-in-halesowen` | Vibe Coding and AI Agents Classes in Halesowen |
| `/vibe-coding-and-ai-agents-classes-in-hamilton-scotland` | Vibe Coding and AI Agents Classes in Hamilton |
| `/vibe-coding-and-ai-agents-classes-in-haywards-heath` | Vibe Coding and AI Agents Classes in Haywards Heath |
| `/vibe-coding-and-ai-agents-classes-in-helensvale-gold-coast` | Vibe Coding and AI Agents Classes in Helensvale, Gold Coast |
| `/vibe-coding-and-ai-agents-classes-in-hervey-bay` | Vibe Coding and AI Agents Classes in Hervey Bay |
| `/vibe-coding-and-ai-agents-classes-in-horsham-victoria` | Vibe Coding and AI Agents Classes in Horsham, Victoria |
| `/vibe-coding-and-ai-agents-classes-in-huyton-with-roby` | Vibe Coding and AI Agents Classes in Huyton with Roby |
| `/vibe-coding-and-ai-agents-classes-in-indooroopilly-brisbane` | Vibe Coding and AI Agents Classes in Indooroopilly, Brisbane |
| `/vibe-coding-and-ai-agents-classes-in-ipswich-qld` | Vibe Coding and AI Agents Classes in Ipswich, Queensland |
| `/vibe-coding-and-ai-agents-classes-in-keighley` | Vibe Coding and AI Agents Classes in Keighley, West Yorkshire |
| `/vibe-coding-and-ai-agents-classes-in-kettering` | Vibe Coding and AI Agents Classes in Kettering |
| `/vibe-coding-and-ai-agents-classes-in-kidderminster` | Vibe Coding and AI Agents Classes in Kidderminster |
| `/vibe-coding-and-ai-agents-classes-in-kilmarnock` | Vibe Coding and AI Agents Classes in Kilmarnock |
| `/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham` | Vibe Coding and AI Agents Classes in Kings Heath |
| `/vibe-coding-and-ai-agents-classes-in-kingston-ontario` | Vibe Coding and AI Agents Classes in Kingston, Ontario |
| `/vibe-coding-and-ai-agents-classes-in-knox-melbourne` | Vibe Coding and AI Agents Classes in Knox, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-lake-macquarie-newcastle` | Vibe Coding and AI Agents Classes in Lake Macquarie |
| `/vibe-coding-and-ai-agents-classes-in-lane-cove-sydney` | Vibe Coding and AI Agents Classes in Lane Cove, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-leigh` | Vibe Coding and AI Agents Classes in Leigh, Wigan |
| `/vibe-coding-and-ai-agents-classes-in-liverpool-sydney` | Vibe Coding and AI Agents Classes in Liverpool, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-llandaff-cardiff` | Vibe Coding and AI Agents Classes in Llandaff, Cardiff |
| `/vibe-coding-and-ai-agents-classes-in-longueuil` | Vibe Coding and AI Agents Classes in Longueuil |
| `/vibe-coding-and-ai-agents-classes-in-lurgan` | Vibe Coding and AI Agents Classes in Lurgan |
| `/vibe-coding-and-ai-agents-classes-in-melbourne` | Vibe Coding and AI Agents Classes in Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-milton-ontario` | Vibe Coding and AI Agents Classes in Milton, Ontario |
| `/vibe-coding-and-ai-agents-classes-in-molonglo-canberra` | Vibe Coding and AI Agents Classes in Molonglo, Canberra |
| `/vibe-coding-and-ai-agents-classes-in-monash-melbourne` | Vibe Coding and AI Agents Classes in Monash, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-morningside-edinburgh` | Vibe Coding and AI Agents Classes in Morningside, Edinburgh |
| `/vibe-coding-and-ai-agents-classes-in-mount-gambier` | Vibe Coding and AI Agents Classes in Mount Gambier |
| `/vibe-coding-and-ai-agents-classes-in-mount-waverley-melbourne` | Vibe Coding and AI Agents Classes in Mount Waverley, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-murray-bridge` | Vibe Coding and AI Agents Classes in Murray Bridge |
| `/vibe-coding-and-ai-agents-classes-in-nanaimo` | Vibe Coding and AI Agents Classes in Nanaimo, BC |
| `/vibe-coding-and-ai-agents-classes-in-newcastle-under-lyme` | Vibe Coding and AI Agents Classes in Newcastle-under-Lyme |
| `/vibe-coding-and-ai-agents-classes-in-north-lakes-brisbane` | Vibe Coding and AI Agents Classes in North Lakes, Brisbane |
| `/vibe-coding-and-ai-agents-classes-in-north-vancouver` | Vibe Coding and AI Agents Classes in North Vancouver |
| `/vibe-coding-and-ai-agents-classes-in-nuneaton` | Vibe Coding and AI Agents Classes in Nuneaton |
| `/vibe-coding-and-ai-agents-classes-in-oadby-leicester` | Vibe Coding and AI Agents Classes in Oadby |
| `/vibe-coding-and-ai-agents-classes-in-oldbury` | Vibe Coding and AI Agents Classes in Oldbury, Sandwell |
| `/vibe-coding-and-ai-agents-classes-in-orange` | Vibe Coding and AI Agents Classes in Orange |
| `/vibe-coding-and-ai-agents-classes-in-pennant-hills-sydney` | Vibe Coding and AI Agents Classes in Pennant Hills, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-peterborough-ontario` | Vibe Coding and AI Agents Classes in Peterborough, Ontario |
| `/vibe-coding-and-ai-agents-classes-in-pinner-london` | Vibe Coding and AI Agents Classes in Pinner |
| `/vibe-coding-and-ai-agents-classes-in-port-macquarie` | Vibe Coding and AI Agents Classes in Port Macquarie |
| `/vibe-coding-and-ai-agents-classes-in-port-talbot` | Vibe Coding and AI Agents Classes in Port Talbot |
| `/vibe-coding-and-ai-agents-classes-in-randwick-sydney` | Vibe Coding and AI Agents Classes in Randwick, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-rhyl` | Vibe Coding and AI Agents Classes in Rhyl |
| `/vibe-coding-and-ai-agents-classes-in-richmond-bc` | Vibe Coding and AI Agents Classes in Richmond, BC |
| `/vibe-coding-and-ai-agents-classes-in-robina-gold-coast` | Vibe Coding and AI Agents Classes in Robina, Gold Coast |
| `/vibe-coding-and-ai-agents-classes-in-ryde-sydney` | Vibe Coding and AI Agents Classes in Ryde, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-schofields-sydney` | Vibe Coding and AI Agents Classes in Schofields, Sydney |
| `/vibe-coding-and-ai-agents-classes-in-scunthorpe` | Vibe Coding and AI Agents Classes in Scunthorpe |
| `/vibe-coding-and-ai-agents-classes-in-sittingbourne` | Vibe Coding and AI Agents Classes in Sittingbourne |
| `/vibe-coding-and-ai-agents-classes-in-south-morang-melbourne` | Vibe Coding and AI Agents Classes in South Morang, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-southall-london` | Vibe Coding and AI Agents Classes in Southall |
| `/vibe-coding-and-ai-agents-classes-in-st-andrews` | Vibe Coding and AI Agents Classes in St Andrews |
| `/vibe-coding-and-ai-agents-classes-in-stirling-perth` | Vibe Coding and AI Agents Classes in Stirling, Perth |
| `/vibe-coding-and-ai-agents-classes-in-stockton-on-tees` | Vibe Coding and AI Agents Classes in Stockton-on-Tees |
| `/vibe-coding-and-ai-agents-classes-in-sutton-coldfield-birmingham` | Vibe Coding and AI Agents Classes in Sutton Coldfield |
| `/vibe-coding-and-ai-agents-classes-in-tarneit-melbourne` | Vibe Coding and AI Agents Classes in Tarneit, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-taunton` | Vibe Coding and AI Agents Classes in Taunton |
| `/vibe-coding-and-ai-agents-classes-in-tea-tree-gully-adelaide` | Vibe Coding and AI Agents Classes in Tea Tree Gully, Adelaide |
| `/vibe-coding-and-ai-agents-classes-in-thundersley-and-south-benfleet` | Vibe Coding and AI Agents Classes: Thundersley, South Benfleet |
| `/vibe-coding-and-ai-agents-classes-in-toowong-brisbane` | Vibe Coding and AI Agents Classes in Toowong, Brisbane |
| `/vibe-coding-and-ai-agents-classes-in-twickenham-london` | Vibe Coding and AI Agents Classes in Twickenham |
| `/vibe-coding-and-ai-agents-classes-in-tynemouth` | Vibe Coding and AI Agents Classes in Tynemouth |
| `/vibe-coding-and-ai-agents-classes-in-urmston` | Vibe Coding and AI Agents Classes in Urmston, Trafford |
| `/vibe-coding-and-ai-agents-classes-in-wallasey` | Vibe Coding and AI Agents Classes in Wallasey |
| `/vibe-coding-and-ai-agents-classes-in-warrnambool` | Vibe Coding and AI Agents Classes in Warrnambool |
| `/vibe-coding-and-ai-agents-classes-in-washington` | Vibe Coding and AI Agents Classes in Washington, Tyne and Wear |
| `/vibe-coding-and-ai-agents-classes-in-west-bromwich` | Vibe Coding and AI Agents Classes in West Bromwich |
| `/vibe-coding-and-ai-agents-classes-in-weymouth` | Vibe Coding and AI Agents Classes in Weymouth |
| `/vibe-coding-and-ai-agents-classes-in-wokingham` | Vibe Coding and AI Agents Classes in Wokingham |
| `/vibe-coding-and-ai-agents-classes-in-worksop` | Vibe Coding and AI Agents Classes in Worksop |
| `/vibe-coding-and-ai-agents-classes-in-wyndham-melbourne` | Vibe Coding and AI Agents Classes in Wyndham, Melbourne |
| `/vibe-coding-and-ai-agents-classes-in-wythenshawe-manchester` | Vibe Coding and AI Agents Classes in Wythenshawe, Manchester |
| `/vibe-coding-classes` | Vibe Coding Classes for Kids, Teens & College |
| `/vibe-coding-for-beginners` | Vibe Coding for Beginners |
| `/vibe-coding-for-teens` | Vibe Coding for Teens |
| `/vibe-coding-projects-for-students` | Vibe Coding Projects for Students |
| `/video-game-coding-classes-for-kids` | Video Game Coding Classes for Kids: Live Online, Ages 6 to 17 |
| `/video-game-design-for-kids-australia` | Video Game Design for Kids in Australia |
| `/vs-code-setup-for-students` | VS Code Setup for Students: Python and Java Without Errors |
| `/waterloo-aif-guide` | Waterloo AIF Guide: Questions, Deadline, AI Rule, Hours |
| `/waterloo-computer-science-admission-requirements` | Waterloo Computer Science Admission Requirements, 2027 |
| `/we-teach-you-how-to-think` | We Teach You How to Think |
| `/web-application-development-services` | Web Application Development Company |
| `/web-development-course-for-teens-australia` | Web Development Course for Teens in Australia |
| `/what-happens-in-a-demo-class` | What Happens in a Demo Class |
| `/what-is-vibe-coding` | What Is Vibe Coding? A Plain Explanation for Families |
| `/why-trust-modern-age-coders` | Why Trust Modern Age Coders |
| `/why-we-charge-for-a-priority-demo` | Why We Charge for a Priority Demo |
| `/wjec-gcse-computer-science-help-wales` | WJEC GCSE Computer Science Help, Wales |
| `/wjec-gcse-digital-technology-help-wales` | WJEC GCSE Digital Technology Help, Wales |
| `/year-4-multiplication-tables-check-explained` | Year 4 Multiplication Tables Check Explained (2027) |
| `/young-ict-explorers-project-help` | Young ICT Explorers Project Help: Plan, Build, Present |

---

## APPENDIX C: EVERY BLOG POST (176 posts)

All posts live at `https://learn.modernagecoders.com/blog/<slug>`. Use these when a customer asks a question a post already answers in depth.


### Programming (52)

| Post | URL path |
|---|---|
| 20 Python Programs for CBSE Class 12 Board Exam (083) | `/blog/python-programs-for-cbse-class-12` |
| 30+ Best Java Programs for Class 8 Students: Easy Projects to Start Coding | `/blog/30-best-java-programs-for-class-8-students` |
| 35 Basic Python Programs for Beginners, With Code and Output | `/blog/python-basic-programs-for-beginners` |
| Advantages of Functions in Python: 8 Benefits With Examples | `/blog/advantages-functions-python-why-every-coder-should-use-them` |
| Armstrong Number: Definition, Full List and Python Program | `/blog/armstrong-number-python-complete-guide-examples-code` |
| Best Java IDE for Beginners in 2026: 7 Free IDEs Compared | `/blog/best-java-ides-for-beginners` |
| Big O Notation Explained Simply, With Real Code | `/blog/big-o-notation-explained-simply` |
| Binary Numbers Explained: Convert, Count and Add | `/blog/binary-numbers-explained` |
| CCC Junior or Senior? How to Choose and How to Score | `/blog/canadian-computing-competition-junior-or-senior` |
| Conway's Game of Life in Python: Rules, Patterns and Code | `/blog/conways-game-of-life-python` |
| Exception Handling in Python: Try, Except, Finally | `/blog/exception-handling-in-python` |
| Fibonacci Series in Python: 7 Ways to Write It | `/blog/fibonacci-series-in-python` |
| File Built-in Methods in Python: Complete Guide for Beginners | `/blog/file-built-in-methods-python-guide` |
| File Organization in Python: A Beginner's Guide to Managing Your Code Like a Pro | `/blog/file-organization-in-python` |
| File Types in Python: A Complete Beginner's Guide to Working with Different Files | `/blog/file-types-in-python-complete-guide` |
| Git vs GitHub: The Difference, With a Real Session | `/blog/git-vs-github-difference` |
| How Are Passwords Stored? Hashing, Salting and Strength | `/blog/how-are-passwords-stored` |
| How Do Computers Store Images? Pixels, RGB and File Size | `/blog/how-do-computers-store-images` |
| How Do Maps Find the Fastest Route? Dijkstra's Algorithm | `/blog/dijkstras-algorithm-fastest-route` |
| How Do Search Engines Work? Build a Tiny One in Python | `/blog/how-do-search-engines-work` |
| How Does Encryption Work? From Caesar Ciphers to HTTPS | `/blog/how-does-encryption-work` |
| How Does File Compression Work? RLE and Huffman in Python | `/blog/how-does-file-compression-work` |
| How Long Does It Take to Learn Python? (Real Hours) | `/blog/how-long-does-it-take-to-learn-python` |
| How to Find HCF and LCM in Python (5 Easy Methods) | `/blog/how-to-find-hcf-and-lcm-in-python` |
| How to Make a Text Adventure Game in Python | `/blog/how-to-make-a-text-adventure-game-in-python` |
| How to Read and Write Files in Python (The Complete Guide) | `/blog/how-to-read-and-write-files-in-python` |
| How to Reverse a String in Python: 5 Easy Methods | `/blog/how-to-reverse-a-string-in-python` |
| How to Start Learning Data Structures and Algorithms | `/blog/how-to-start-learning-data-structures-and-algorithms` |
| Leap Year Program in Python: Logic, Code and Output | `/blog/how-to-write-a-leap-year-program-in-python` |
| Learn Python for Beginners: Complete Step-by-Step Guide (2026) | `/blog/python-for-beginners` |
| Learn Python Step by Step: The Free Tutorial Library | `/blog/learn-python-step-by-step` |
| Learn Web Development with JavaScript - Basics, Projects & Hands-On Guide | `/blog/javascript-basics` |
| Logic Gates for Beginners: AND, OR, NOT and a Binary Adder | `/blog/logic-gates-for-beginners` |
| Menu Driven Program in Python (With a Daily Menu Script) | `/blog/how-to-build-menu-driven-program-in-python` |
| Python Dictionary: The Complete Guide With 20 Examples | `/blog/python-dictionary-complete-guide` |
| Python Lambda Functions: When to Use Them, 10 Examples | `/blog/python-lambda-functions` |
| Python List Comprehension: 15 Examples, Simple to Advanced | `/blog/python-list-comprehension-explained` |
| Python OOP Tutorial: Classes, Objects, and Inheritance | `/blog/python-oop-tutorial-for-beginners` |
| Python vs Java: Which Should You Learn First? | `/blog/python-vs-java-which-to-learn-first` |
| Python vs JavaScript: Which Should You Learn First? | `/blog/python-vs-javascript-which-to-learn-first` |
| Recursion Explained for Beginners, With a Call Trace | `/blog/recursion-explained-for-beginners` |
| SQL or Python First? How to Choose for Your Goal | `/blog/sql-or-python-first` |
| Star Pattern Programs in Python: 30 Patterns With Code | `/blog/star-pattern-programs-in-python` |
| The IOI Syllabus Excludes More Than You Expect | `/blog/ioi-syllabus-what-to-learn-and-what-to-skip` |
| Top 10 Java Programs Every College Student Must Know (With Solutions) | `/blog/top-10-java-programs-every-college-student-must-know` |
| Top 10 Java Programs Every School Student Should Know (With Solutions) | `/blog/top-10-java-programs-for-school-students` |
| USACO Bronze to Silver: What Actually Blocks You | `/blog/usaco-bronze-to-silver-what-blocks-most-students` |
| What Is an Algorithm? Simple Examples for Kids and Beginners | `/blog/what-is-an-algorithm` |
| What Is an API? Explained Simply, With a Real One | `/blog/what-is-an-api-explained-simply` |
| What is Floor Division in Python? Complete Guide with Examples | `/blog/what-is-floor-division-in-python` |
| What JavaScript to Learn Before React (with Examples) | `/blog/javascript-to-learn-before-react` |
| Why Is 0.1 + 0.2 Not 0.3? Floating Point in Python | `/blog/why-is-0-1-plus-0-2-not-0-3` |

### Education (40)

| Post | URL path |
|---|---|
| 10 Safe AI Tools Your Child Should Be Using for Homework in 2026 | `/blog/safe-ai-tools-for-kids-homework-2025` |
| 30+ Scratch Project Ideas for Kids: Starter Projects to Advanced Games, Step by Step | `/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced` |
| A Parent's Guide to Starting Coding Education at Home | `/blog/parents-guide-starting-coding-education-home` |
| AP CSP vs AP CSA: Which Is Harder, and Which to Take First | `/blog/ap-csp-vs-ap-csa-which-to-take-first` |
| Best Byju's Alternative for Kids and Teens in India (2026) - Live Classes, Coding + Maths | `/blog/best-byjus-alternative` |
| Best Coding Courses Online for Students 2026-27: 21 Free and Paid Options Compared | `/blog/best-free-paid-coding-courses-students` |
| Best Coding Games for Kids in 2026: 10 Picks by Age | `/blog/top-coding-games-platforms-make-learning-fun-kids` |
| Best Coding Languages for Kids and Teens by Age, 6 to 18: 2026-27 Parent Guide | `/blog/best-coding-languages-kids-10-18-beginner-advanced` |
| Best WhiteHat Jr Alternative in 2026 - Why Parents Are Switching to Modern Age Coders | `/blog/whitehat-jr-alternative` |
| Cambridge 9618 Paper 4: Python, Java or Visual Basic? | `/blog/cambridge-9618-paper-4-python-java-or-visual-basic` |
| Coding Class Fees in India 2026: What to Pay | `/blog/coding-class-fees-india-2026` |
| Coding for 5-Year-Olds: How Young Kids Can Start Learning Programming? | `/blog/coding-for-5-year-olds-young-kids-start-learning-programming` |
| Coding for 6 Year Olds: How to Start, Best Tools, Session Length and a First Class | `/blog/coding-for-6-year-olds` |
| Coding for 7 Year Olds: What to Learn, Best Platforms and the First Month | `/blog/coding-for-7-year-olds-what-how-kids-should-learn-programming` |
| Coding is the New English: Why 2026 is the Year to Start | `/blog/coding-is-the-new-english-why-2026-is-the-year-to-start` |
| Common Myths About Coding for School Students (And the Truth Behind Them) | `/blog/common-myths-about-coding-for-school-students` |
| How Coding and Mathematics Work Together in Engineering & Science | `/blog/coding-mathematics-engineering-science` |
| How Coding Education is Changing the Future of India | `/blog/how-coding-education-changing-future-india` |
| How Learning Coding Improves Mathematical Thinking in Children | `/blog/how-coding-improves-mathematical-thinking-children` |
| How Schools and Parents Can Prepare Children for Future Tech Careers | `/blog/how-schools-parents-prepare-children-future-tech-careers` |
| How to Get a 5 in AP Computer Science A (2026) | `/blog/how-to-get-a-5-in-ap-computer-science-a` |
| How to Revise GCSE Computer Science (AQA and OCR) | `/blog/how-to-revise-gcse-computer-science` |
| IGCSE 0478 Pseudocode: The Rules Examiners Mark | `/blog/igcse-computer-science-0478-pseudocode-guide` |
| Is Coding Still Worth Learning in 2026? | `/blog/is-coding-worth-learning-2026` |
| Java for Kids: Complete Kids Guide to Learning Java Programming in 2026 | `/blog/java-for-kids-complete-guide-learning-programming-2026` |
| Math in Programming: What You Need, Shown in Real Code | `/blog/role-of-mathematics-programming-logical-problem-solving` |
| Minecraft vs Roblox for Kids: Which Teaches Coding Better? | `/blog/minecraft-vs-roblox-which-teaches-kids-to-code` |
| Project-Based Learning: Why Theory Alone Is Not Enough in Coding | `/blog/project-based-learning-why-theory-alone-not-enough-coding` |
| Robotics and Coding: How STEM Kits Build Logical Thinking | `/blog/robotics-coding-stem-kits-build-logical-thinking` |
| Scratch vs Python for Kids: The Difference and Which First | `/blog/scratch-vs-python-which-better-young-learners` |
| STEM Education for Girls in India: Breaking Barriers and Building Futures | `/blog/stem-education-for-girls-india` |
| The CBSE/ICSE Gap: What Schools Aren't Teaching About Tech (And How to Fill It) | `/blog/cbse-icse-gap-what-schools-not-teaching-about-tech` |
| The IB Computer Science IA No Longer Needs a Client | `/blog/ib-computer-science-ia-client-rule-2027` |
| The Ultimate Guide to Teaching Kids Coding in 2025 | `/blog/coding-for-kids-guide` |
| What Is Blockly? Block Coding for Kids, Explained | `/blog/what-is-blockly-for-kids` |
| What is Coding for Kids? A Parent's Complete Guide to Getting Started in 2026 | `/blog/coding-for-kids-parents-complete-guide-2026` |
| Why Can I Understand Solutions but Not Solve Problems? | `/blog/why-can-i-understand-solutions-but-not-solve-problems` |
| Why Coding is the New Literacy for Kids in 2025 | `/blog/why-coding-is-new-literacy-kids-2025` |
| Why Early Exposure to Coding Gives Students a Competitive Advantage | `/blog/why-early-exposure-coding-gives-students-competitive-advantage` |
| Why Every Teen Should Learn Coding: The Ultimate Guide for 2025 | `/blog/why-every-teen-should-learn-coding` |

### Mathematics (32)

| Post | URL path |
|---|---|
| 10 Mental Maths Tricks for Kids, With Worked Examples | `/blog/mental-maths-tricks-for-kids` |
| Abacus vs Vedic vs Mental Maths: A Clear Comparison | `/blog/abacus-vs-vedic-vs-mental-maths` |
| Area and Perimeter: The Difference, Explained Simply | `/blog/area-and-perimeter-difference` |
| Best Online CBSE Maths Tuition for Class 6-12 in India (2026 Guide) | `/blog/cbse-maths-tuition-online` |
| BODMAS Rule Explained: The Left to Right Step | `/blog/bodmas-rule-explained` |
| Does Online Maths Tuition Really Work? An Honest 2026 Answer | `/blog/does-online-maths-tuition-work` |
| Estimation in Maths: Rounding, Fermi Problems and Checks | `/blog/estimation-in-maths` |
| How Does GPS Work? Trilateration, Clocks and Relativity | `/blog/how-does-gps-work` |
| How to Calculate Percentages: Every Method Explained | `/blog/how-to-calculate-percentages` |
| How to Explain Division to a Child: Share or Group | `/blog/how-to-explain-division-to-a-child` |
| How to Get Better at Maths: 8 Methods That Actually Work | `/blog/how-to-get-better-at-maths` |
| How to Help a Child Understand Fractions | `/blog/how-to-help-a-child-understand-fractions` |
| How to Help a Child with Maths Anxiety: A 2026 Parent Guide | `/blog/help-child-with-maths-anxiety` |
| How to Help With Maths Homework (Without Solving It) | `/blog/help-child-with-maths-homework` |
| How to Learn Times Tables Fast: The 21-Fact Method | `/blog/how-to-learn-times-tables-fast` |
| How to Make Maths Fun for Kids: 9 Ideas That Really Work | `/blog/how-to-make-maths-fun-for-kids` |
| How to Solve Maths Word Problems (Without Keywords) | `/blog/how-to-solve-maths-word-problems` |
| How to Solve Quadratic Equations: 3 Methods with Examples | `/blog/how-to-solve-quadratic-equations` |
| How to Solve Simultaneous Equations: 3 Methods and Examples | `/blog/how-to-solve-simultaneous-equations` |
| How to Write a Maths Proof: A Beginner's Guide with Examples | `/blog/how-to-write-a-maths-proof` |
| Is Vedic Maths Actually Useful? An Honest 2026 Guide | `/blog/is-vedic-maths-actually-useful` |
| Long Division Step by Step: The Four-Move Method | `/blog/long-division-step-by-step` |
| Mean, Median and Mode Explained, With Examples | `/blog/mean-median-mode-explained` |
| Modular Arithmetic: Clock Maths for Olympiads and Code | `/blog/modular-arithmetic-explained` |
| Negative Numbers Explained: Rules and Reasons | `/blog/negative-numbers-explained` |
| Place Value Explained: Blocks, Zero and Lakhs | `/blog/place-value-explained` |
| Prime Numbers Explained: Sieve, Factors and Proof | `/blog/prime-numbers-explained` |
| Probability for Beginners: Rules, Examples and Simulations | `/blog/probability-for-beginners` |
| Pythagoras Theorem Explained, With a Visual Proof | `/blog/pythagoras-theorem-explained` |
| SOH CAH TOA: Trigonometry for Beginners with Examples | `/blog/sohcahtoa-trigonometry-for-beginners` |
| The Pigeonhole Principle: 4 Olympiad Problems Solved | `/blog/pigeonhole-principle-explained` |
| Why Is My Child Struggling with Maths? The Real Reasons | `/blog/why-is-my-child-struggling-with-maths` |

### Artificial Intelligence (12)

| Post | URL path |
|---|---|
| Agent Terminology in AI: A Simple Guide to Understanding AI Agents | `/blog/agentic-terminology-in-ai` |
| Best AI Coding Tools for Students in 2026 | `/blog/best-ai-coding-tools-for-students-2026` |
| Do AI Detectors Work? What Students and Parents Should Know | `/blog/do-ai-detectors-work` |
| How Do Spam Filters Work? Build a Simple One in Python | `/blog/how-do-spam-filters-work` |
| How to Teach Kids AI at Home: A Safe 2026 Parent Guide | `/blog/how-to-teach-kids-ai-at-home` |
| How to Use ChatGPT to Study Without Cheating | `/blog/how-to-use-chatgpt-to-study-without-cheating` |
| UAE Made AI Mandatory in Schools: What It Means | `/blog/uae-ai-curriculum-schools-what-it-means` |
| Vibe Coding vs Learning to Code Properly | `/blog/vibe-coding-vs-learning-to-code-properly` |
| What is AI? Complete Beginner's Guide: How to Start, Which Languages, and How Deep to Go | `/blog/what-is-ai-complete-beginners-guide-how-to-start` |
| What is the Responsibility of Developers Using Generative AI? A Complete Guide | `/blog/what-is-the-responsibility-of-developers-using-generative-AI` |
| What Type of Data is Generative AI Most Suitable For? A Complete Guide | `/blog/what-type-of-data-is-generative-ai-most-suitable-for` |
| Why Do AI Models Make Mistakes? 5 Reasons, Tested | `/blog/why-do-machine-learning-models-make-mistakes` |

### Career (12)

| Post | URL path |
|---|---|
| Best Programming Languages for College Students to Learn in 2026 | `/blog/best-programming-languages-college-students-2026` |
| Career Transition Guide: Moving from Non-Tech to Tech Roles | `/blog/career-transition-guide-moving-non-tech-to-tech-roles` |
| Coding Interview Preparation for Freshers: A Plan | `/blog/coding-interview-preparation-for-freshers` |
| Competitive Coding vs Development Skills: What Should Students Focus On? | `/blog/competitive-coding-vs-development-skills-what-students-focus` |
| Data Science, AI, and Math: Skills Every Tech Professional Must Learn | `/blog/data-science-ai-math-skills-professionals` |
| Full Stack vs. AI Engineer: Which Career Path Pays More in India? | `/blog/full-stack-vs-ai-engineer-salary-india` |
| How College Students Can Build Real-World Projects While Studying | `/blog/how-college-students-build-real-world-projects-while-studying` |
| How Working Professionals Can Upskill with Coding Without Quitting Their Job | `/blog/working-professionals-upskill-coding-without-quitting-job` |
| Is It Worth Learning to Code for a Career Change in 2026? | `/blog/learn-to-code-career-change-2026` |
| PCEP vs PCAP: Which Python Certification Is Worth It? | `/blog/pcep-vs-pcap-which-python-certification` |
| Top Emerging Tech Skills to Learn in 2025 (AI, Low-Code, Cloud) | `/blog/top-emerging-tech-skills-learn-2025-ai-low-code-cloud` |
| Why Python is the Most Powerful Skill for Professionals Today | `/blog/why-python-most-powerful-skill-professionals-today` |

### Business (7)

| Post | URL path |
|---|---|
| Cloud Computing Explained for Business Owners (Without Tech Jargon) | `/blog/cloud-computing-explained-business-owners-without-tech-jargon` |
| Custom Software vs Ready-Made Software: What Is Right for Your Business? | `/blog/custom-software-vs-ready-made-software` |
| How AI and Automation Are Transforming Small and Medium Businesses | `/blog/ai-automation-transforming-small-medium-businesses` |
| How Data Analytics and Math Help Businesses Make Better Decisions | `/blog/data-analytics-math-help-businesses-better-decisions` |
| How Mobile Apps Increase Customer Engagement for Businesses | `/blog/mobile-apps-increase-customer-engagement-businesses` |
| Outsourcing Software Development vs Hiring In-House Developers | `/blog/outsourcing-software-development-vs-hiring-inhouse-developers` |
| Why Every Business Needs a Website and Mobile App in 2025 | `/blog/why-every-business-needs-website-mobile-app-2025` |

### Java (6)

| Post | URL path |
|---|---|
| 50 Important Java Programs for ICSE Class 10 Boards | `/blog/50-java-programs-for-icse-class-10` |
| ICSE Class 10 Computer Applications: Revision Guide | `/blog/icse-class-10-computer-applications-revision` |
| Java Array Programs for Beginners: 20 Solved Examples | `/blog/java-array-programs-for-beginners` |
| Java Constructors Explained: Types, Overloading, ICSE | `/blog/java-constructors-explained` |
| String Handling in Java: The ICSE and CBSE Guide | `/blog/string-handling-in-java` |
| Top 20 Java Programs for ICSE Class 10 (With Code) | `/blog/top-20-java-programs-for-icse-class-10` |

### Kids Coding (6)

| Post | URL path |
|---|---|
| 7 Signs Your Child Is Ready to Learn Coding (2026 Guide) | `/blog/signs-your-child-is-ready-to-learn-coding` |
| Coding vs AI: What Should My Child Learn in 2026? | `/blog/coding-vs-ai-what-should-my-child-learn` |
| Group vs 1-on-1 Coding Classes: Which Is Better? | `/blog/group-vs-1-on-1-coding-classes` |
| How to Choose a Coding Class for Your Child | `/blog/how-to-choose-a-coding-class-for-your-child` |
| Is Coding Good for Kids? What It Really Teaches | `/blog/is-coding-good-for-kids` |
| Touch Typing for Kids: When to Start and How to Practise | `/blog/touch-typing-for-kids` |

### About Us (2)

| Post | URL path |
|---|---|
| Modern Age Coders Certificate: Earned, Not Given | `/blog/modern-age-coders-certificate-earned-not-given` |
| Who Are Modern Age Coders? Why Choose Us for Your Coding Journey | `/blog/who-are-modern-age-coders-why-choose-us` |

### Coding (2)

| Post | URL path |
|---|---|
| AP Computer Science A Changes for 2026: A Parent's Guide | `/blog/ap-computer-science-a-changes-2026` |
| IGCSE Computer Science (0478) Explained for Parents | `/blog/igcse-computer-science-explained-for-parents` |

### Technology (2)

| Post | URL path |
|---|---|
| 10 Best Free Vibe Coding Platforms and Tools in 2026 (Updated September 2026) | `/blog/best-free-platforms-for-vibe-coding` |
| Best Data Science Courses in India for Students and Professionals in 2026 | `/blog/data-science-course-india` |

### Projects (1)

| Post | URL path |
|---|---|
| App Idea to App Store in 60 Days: Teen Developer's Complete Roadmap | `/blog/app-idea-to-app-store-60-days-teen-developer-roadmap` |

### Technology Trends (1)

| Post | URL path |
|---|---|
| What is Vibe Coding? The Ultimate Deep-Dive Guide to AI-Powered Development (2026) | `/blog/what-is-vibe-coding-future-of-software-development` |

### Web Development (1)

| Post | URL path |
|---|---|
| 20 HTML, CSS, and JavaScript Project Ideas (With Code) | `/blog/html-css-javascript-project-ideas` |

---

## APPENDIX D: MACHINE-READABLE QUICK FACTS

Paste this block straight into an agent prompt or a retrieval index. Generated from `pricing/pricing.config.jsonc` and `scripts/brand-facts.json`, the two files that govern every number on the website.

```json
{
  "_read_me_first": "Prices are grouped subject.region.tier. Two different products can share the same digits: check the period before quoting. Monthly tiers are group/miniBatch/personal; oneTime is a single payment, not a monthly fee.",
  "brand": "Modern Age Coders",
  "legal_name": "Modern Age Coders Education",
  "founded": 2020,
  "founder": "Shivam Khemka",
  "website": "https://learn.modernagecoders.com",
  "dashboard": "https://dashboard.modernagecoders.com",
  "phone_whatsapp": "+91 9123366161",
  "email": "connect@modernagecoders.com",
  "registered_office": "1B, JK Ambika Tower, Kolkata, West Bengal 700002, India",
  "phone_hours": "Mon-Sat 09:00-18:00 IST",
  "callback_sla_hours": 3,
  "form_response_sla_hours": 48,
  "languages": [
    "English",
    "Hindi"
  ],
  "ages": "6 to 67",
  "students": "10,000+",
  "google_reviews": 547,
  "rating": 4.9,
  "rating_source": "Google Business Profile reviews, not students",
  "countries": "25+",
  "delivery": "100% online, live classes, recordings included",
  "classes_per_week": 2,
  "class_length_hours": 1,
  "classes_per_month": 8,
  "batch_caps": {
    "group": 10,
    "mini_batch": "3-4",
    "one_to_one": 1,
    "custom_group": "3-10"
  },
  "courses_live": 142,
  "blog_posts": 176,
  "live_urls": 2828,
  "pricing": {
    "coding": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 4999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      },
      "canada": {
        "group": 140,
        "miniBatch": null,
        "personal": 210
      }
    },
    "maths": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 4999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      },
      "canada": {
        "group": 140,
        "miniBatch": null,
        "personal": 210
      }
    },
    "agents": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 4999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      },
      "canada": {
        "group": 140,
        "miniBatch": null,
        "personal": 210
      }
    },
    "gemini": {
      "india": {
        "group": null,
        "miniBatch": null,
        "personal": 14999
      },
      "international": {
        "group": null,
        "miniBatch": null,
        "personal": 250
      },
      "canada": {
        "group": null,
        "miniBatch": null,
        "personal": 350
      }
    },
    "school": {
      "india": {
        "group": 1499,
        "miniBatch": null,
        "personal": 2999
      },
      "international": {
        "group": null,
        "miniBatch": null,
        "personal": null
      },
      "canada": {
        "group": null,
        "miniBatch": null,
        "personal": null
      }
    },
    "camps": {
      "india": {
        "oneTime": 9999
      },
      "international": {
        "oneTime": 200
      },
      "canada": {
        "oneTime": 280
      }
    }
  },
  "pricing_ambiguous_figures": {},
  "pricing_currencies": {
    "india": "INR",
    "international": "USD",
    "canada": "CAD"
  },
  "pricing_updated": "2026-10-23",
  "premium_course_overrides": {
    "codex-and-claude-code-ai-coding-agents-course-for-teens": "agents",
    "codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals": "agents",
    "ai-agents-with-microsoft-copilot-studio-course-for-teens": "agents",
    "ai-agents-with-microsoft-copilot-studio-course-for-college-students": "agents",
    "ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals": "agents",
    "build-ai-agents-with-google-gemini-enterprise-course": "gemini",
    "tmua-mat-step-preparation-course": "maths",
    "reasoning-and-readiness-course-for-young-thinkers": "maths"
  },
  "retired_never_quote": [
    "Rs 2499",
    "Rs 4999",
    "$40",
    "$149.99",
    "$374.99",
    "any lifetime plan",
    "6 to 65",
    "500+ students",
    "247 reviews",
    "15+ countries",
    "/courses/kids-ai-mastery-course"
  ],
  "escalate_to_human": [
    "batch timings",
    "slot availability",
    "discounts",
    "international pricing other than USD or CAD",
    "corporate quotes",
    "school quotes",
    "custom curriculum",
    "refund disputes",
    "anything not in this document"
  ],
  "demo": {
    "free": true,
    "card_required": false,
    "per_student": 1,
    "duration_minutes": "30-60",
    "live": true,
    "parent_may_attend": true
  },
  "refund": {
    "window_days": 7,
    "max_content_consumed_percent": 20,
    "processing_business_days": "7-10",
    "gateway_charges_refunded": false
  },
  "payment_gateway_charges_percent": 2.5
}
```

---

## APPENDIX E: WHAT EACH COURSE TEACHES (curriculum outlines and projects)

Share this freely and in detail when a parent or student asks what a course covers - full transparency is the policy, and the course page has the complete week-by-week plan. Fees are in section 3 and Appendix D; quote only the fee that applies to where the asker lives.


### 11 Plus Maths Prep: UK Grammar & Independent School Entry

`/courses/11-plus-maths-preparation-course-uk` · 8 months (32 weeks) · UK students ages 9-11 (Years 5-6), grammar and independent school applicants

  - PHASE 1: Number Fluency (Months 1-2, Weeks 1-8)
    Speed and accuracy with number come first. Every later topic, and every timed paper, leans on arithmetic that works without hesitation.
    - Month 1: Place Value and the Four Operations
      - Weeks 1-2: Place Value, Ordering and Mental Methods
      - Weeks 3-4: Multiplication, Division and Order of Operations
    - Month 2: Number Properties and Fluency Under Time
      - Weeks 5-6: Factors, Multiples, Primes and Sequences
      - Weeks 7-8: Mixed Arithmetic with the Clock Running Gently
  - PHASE 2: Fractions, Decimals, Percentages, Ratio and Proportion (Months 3-4, Weeks 9-16)
    The part-whole toolkit that 11 plus papers test relentlessly, taught as one connected system rather than three separate topics, then extended into ratio and proportion.
    - Month 3: Fractions, Decimals and Percentages
      - Weeks 9-10: Fractions That Make Sense
      - Weeks 11-12: Decimals, Percentages and Moving Between All Three
    - Month 4: Ratio, Proportion and Best Value
      - Weeks 13-14: Ratio and Sharing
      - Weeks 15-16: Proportion, Best Value and Scale
  - PHASE 3: Early Algebra, Geometry, Measures and Data (Months 5-6, Weeks 17-24)
    The remaining syllabus ground: missing-number thinking and simple equations, then shapes, angles, area, units and time, and finally charts, tables and averages.
    - Month 5: Early Algebra and Geometry
      - Weeks 17-18: Missing Numbers and Simple Equations
      - Weeks 19-20: Shapes, Angles and Position
    - Month 6: Measures, Time and Data
      - Weeks 21-22: Perimeter, Area, Volume and Units
      - Weeks 23-24: Charts, Tables and Averages
  - PHASE 4: Problem Solving Under Time and the Practice-Paper Cycle (Months 7-8, Weeks 25-32)
    The syllabus is done; now the test itself is the subject. Multi-step word problems, timing strategy and multiple-choice technique, then a full cycle of practice papers with marked reviews.
    - Month 7: Word Problems and Test Technique
      - Weeks 25-26: Multi-Step Word Problems
      - Weeks 27-28: Timing and Multiple-Choice Technique
    - Month 8: The Practice-Paper Cycle
      - Weeks 29-30: Full Papers, Marked and Mined
      - Weeks 31-32: Final Papers and a Calm Finish

**Projects students build:** Speed grid week: a daily 5-minute arithmetic grid, times recorded so the child can watch their own speed climb; Personal tables map: each child's slowest facts identified and drilled until they match their fastest; Number detective set: 12 who-am-I number puzzles solved using properties, the kind the 11 plus loves; First mini-paper: a 15-question arithmetic paper under generous timing, reviewed question by question in class; Fraction wall build: each child makes their own fraction wall and uses it to settle five comparison arguments; Conversion pack: a self-made table of the equivalences worth knowing cold, from a half down to a twentieth; Recipe rescale: one real family recipe scaled for 2, 6 and 9 people, with the working presented neatly; Supermarket challenge: real price comparisons worked as best-value problems and written up as answers with reasons; Puzzle exchange: each child writes three think-of-a-number puzzles and solves three written by classmates; Shape fact file: a one-page reference of shape and angle facts in the child's own words and drawings; Room plan: the child's own room measured, drawn to scale and its floor area calculated; Family survey: a small data set collected at home, charted by hand, and turned into three test-style questions; Problem autopsy set: 10 hard word problems dissected in writing, what was given, what was asked, what was the trap; Technique card: each child writes their own one-page test plan, timings, skip rules and reset routine included; Error log finalised: each child's recurring mistakes named, with the fix written next to each - plus 1 more on the course page.

### A Level Computer Science for AQA 7517 and OCR H446

`/courses/a-level-computer-science-course-aqa-ocr` · 9 months (36 weeks) covering the two-year content, joinable any month and paced to the student's year and board · Year 12 and Year 13 students (roughly ages 16 to 18) on AQA 7517 or OCR H446; GCSE Computer Science helps but is not required

  - PHASE 1: Python and Data Foundations (Months 1-3, Weeks 1-12)
    The programming every later topic depends on, taught in Python, with the data representation theory that both boards examine early.
    - Month 1: Programming Core in Python
      - Weeks 1-2: How the Boards Assess, and Python from Solid Ground
      - Weeks 3-4: Strings, Lists, Files and Exceptions
    - Month 2: Object-Oriented Programming and Program Structure
      - Weeks 5-6: Classes, Objects and Encapsulation
      - Weeks 7-8: Reading Large Programs and Recursion
    - Month 3: Data Representation and Boolean Logic
      - Weeks 9-10: Numbers, Bases and Floating Point
      - Weeks 11-12: Images, Sound, Compression, Encryption and Boolean Algebra
  - PHASE 2: The Two Exam Disciplines (Months 4-6, Weeks 13-24)
    Algorithms and computation for the programming paper, and systems theory for the written paper, taught in alternating weeks so both stay sharp.
    - Month 4: Data Structures and Standard Algorithms
      - Weeks 13-14: Stacks, Queues, Linked Lists, Trees and Hash Tables
      - Weeks 15-16: Searching, Sorting, Graph Algorithms and Complexity
    - Month 5: Theory of Computation and Computer Architecture
      - Weeks 17-18: Abstraction, Automata and the Limits of Computation
      - Weeks 19-20: Processors, Memory, Assembly and Operating Systems
    - Month 6: Networks, Databases, Software and Ethics
      - Weeks 21-22: Networks, the Internet and Web Technologies
      - Weeks 23-24: Databases, SQL, Big Data, Functional Programming and Ethics
  - PHASE 3: Exam Season and Project Method (Months 7-9, Weeks 25-36)
    The final three months build exam speed on both papers and teach the project method on a practice project, never the student's own NEA.
    - Month 7: Programming Paper Craft
      - Weeks 25-26: Skeleton Programs and Pre-Release Thinking (AQA) and Algorithms Under Time (OCR)
      - Weeks 27-28: The Questions That Separate Answers
    - Month 8: Theory Paper Craft and Project Method
      - Weeks 29-30: Extended Answers on the Theory Paper
      - Weeks 31-32: The Project Method on a Practice Project
    - Month 9: Full Mocks and Final Review
      - Weeks 33-34: Back-to-Back Mocks
      - Weeks 35-36: Final Review and Next Steps

**Projects students build:** A unit converter with validated input, written as small tested subroutines; A quiz engine that reads its questions from a file and saves scores back; A small library system with a class hierarchy and a class diagram; Adapt and extend a 300-line practice program of our own in three requested ways; A base-conversion and two's complement checker in Python; A run-length encoder and decoder, with a written comparison of compression methods; Implement a stack, a queue and a binary search tree as Python classes with tests; A sorting race: time four sorts on growing lists and explain the results with Big O; Code a finite state machine in Python that validates a postcode-style pattern; Write and trace a short assembly-style program in an online simulator; A small client-server message program in Python on one machine; Design a normalised database for a club and query it with SQL from Python; A full mock of the programming paper for the student's board, written by us; A personal answer bank: ten of your own corrected answers to hard question types; A set of model extended answers written by the student and improved after feedback - plus 3 more on the course page.

### A Level Further Maths: Core Pure and Applied Options

`/courses/a-level-further-maths-course` · 18 months (72 weeks), taught alongside A Level Maths · Year 12 and 13 students (or equivalent) taking Further Maths with AQA, Edexcel or OCR

  - PHASE 1: Core Pure, First Year (Months 1-5, Weeks 1-20)
    The compulsory core every board examines, taught to AS depth. Each topic is introduced after the A level Maths skill it needs, and proof is practised from the first fortnight.
    - Month 1: Proof and Series
      - Weeks 1-2: Diagnostic and Proof by Induction
      - Weeks 3-4: Standard Series and the Method of Differences
    - Month 2: Complex Numbers
      - Weeks 5-6: Complex Arithmetic and the Argand Diagram
      - Weeks 7-8: Loci and Regions
    - Month 3: Matrices
      - Weeks 9-10: Matrix Algebra and Transformations
      - Weeks 11-12: Determinants, Inverses and Linear Systems
    - Month 4: Roots of Polynomials and Rational Functions
      - Weeks 13-14: Roots of Polynomials
      - Weeks 15-16: Curve Sketching and Inequalities
    - Month 5: Vectors and First Further Calculus
      - Weeks 17-18: Lines and Planes in Three Dimensions
      - Weeks 19-20: Volumes of Revolution and Mean Values
  - PHASE 2: Applied Option One (Months 6-9, Weeks 21-36)
    The first of the options your board and centre have chosen. The topics below show the mechanics route; statistics, decision or discrete students follow the same timetable with their own option content.
    - Month 6: Momentum and Impulse
      - Weeks 21-22: Momentum, Impulse and Collisions
      - Weeks 23-24: Successive Collisions and Impulse in Two Dimensions
    - Month 7: Work, Energy and Power
      - Weeks 25-26: Work, Energy and Power
      - Weeks 27-28: Elastic Strings and Springs
    - Month 8: Circular Motion and Dimensional Analysis
      - Weeks 29-30: Horizontal and Vertical Circular Motion
      - Weeks 31-32: Dimensional Analysis and Modelling
    - Month 9: AS Checkpoint
      - Weeks 33-34: Consolidation of Core and Option
      - Weeks 35-36: AS-Standard Mock
  - PHASE 3: Core Pure, Second Year (Months 10-14, Weeks 37-56)
    The A level half of the core, where the subject becomes recognisably university mathematics: de Moivre, further calculus, polar curves, hyperbolic functions and differential equations.
    - Month 10: Further Complex Numbers
      - Weeks 37-38: Exponential Form and de Moivre's Theorem
      - Weeks 39-40: Roots of Unity and Complex Roots
    - Month 11: Further Calculus and Series
      - Weeks 41-42: Improper Integrals and Inverse Trigonometric Functions
      - Weeks 43-44: Maclaurin Series
    - Month 12: Polar Coordinates and Hyperbolic Functions
      - Weeks 45-46: Polar Coordinates
      - Weeks 47-48: Hyperbolic Functions
    - Month 13: Differential Equations
      - Weeks 49-50: First and Second Order Differential Equations
      - Weeks 51-52: Modelling with Differential Equations
    - Month 14: Core Pure Consolidation
      - Weeks 53-54: Mixed Core Pure Problems
      - Weeks 55-56: Core Pure Mock
  - PHASE 4: Applied Option Two and Option Depth (Months 15-16, Weeks 57-64)
    The second option, taught at the depth your board sets, and the first option extended to full A level standard. Students on a further pure route take their extra pure option here.
    - Month 15: Second Option
      - Weeks 57-58: Second Option Foundations
      - Weeks 59-60: Second Option Applications
    - Month 16: Both Options at Full Depth
      - Weeks 61-62: First Option to A Level Depth
      - Weeks 63-64: Options Mock
  - PHASE 5: Revision and the Past-Paper Cycle (Months 17-18, Weeks 65-72)
    No new content. Structured revision by strand, then full past papers under real timing for your board, marked against official schemes.
    - Month 17: Structured Revision
      - Weeks 65-66: Core Pure Revision by Strand
      - Weeks 67-68: Option Revision by Strand
    - Month 18: Past Papers Under Timing
      - Weeks 69-70: Full Past Papers, Core
      - Weeks 71-72: Full Past Papers, Options and Final Review

**Projects students build:** Proof portfolio opened: six induction proofs written to exam standard and checked line by line; Question bank entry: 15 solved series questions, each checked by a second method; Complex number reference sheet built by the student, with one worked example per rule; Locus atlas: eight annotated sketches of standard loci and combined regions; Transformation catalogue: each standard 2 by 2 matrix with its effect drawn on the unit square; Three-planes casebook: every arrangement of three planes, with a system that produces it; Question bank entry: 12 roots questions solved two ways, by sums of roots and by substitution; Graph file: ten sketches with asymptotes, intercepts and turning points labelled; 3D geometry sheet: every distance and angle method on one page with a worked example; Modelling task: the volume of a real container estimated by a volume of revolution and compared with its label; Collision file: worked solutions for every collision type, with a diagram for each; Question bank entry: 10 multi-stage collision problems with the decision points marked; Energy method sheet: when to use energy and when to use Newton's second law; Modelling task: a bungee jump modelled with energy methods and its assumptions criticised; Circular motion casebook: six standard set-ups with force diagrams - plus 21 more on the course page.

### A-Level Maths: Pure, Mechanics, Statistics (Edexcel/AQA)

`/courses/a-level-maths-course-pure-mechanics-statistics` · 18 months (72 weeks), joinable any month · A-Level students (Years 12-13 or equivalent), Edexcel, AQA and OCR

  - PHASE 1: AS Pure Mathematics (Months 1-5, Weeks 1-20)
    The pure core that every later topic stands on: algebra done properly, coordinate geometry, trigonometry, exponentials and logarithms, and the first calculus. Roughly two thirds of the A-Level is pure mathematics, and it starts here.
    - Month 1: Algebra Foundations
      - Weeks 1-2: Indices, Surds and Quadratics
      - Weeks 3-4: Simultaneous Equations, Inequalities and First Proof
    - Month 2: Polynomials, Graphs and Coordinate Geometry
      - Weeks 5-6: Polynomials and Curve Sketching
      - Weeks 7-8: Straight Lines and Circles
    - Month 3: Binomial Expansion and Trigonometry
      - Weeks 9-10: The Binomial Expansion
      - Weeks 11-12: Trigonometry: Ratios, Identities and Equations
    - Month 4: Exponentials, Logarithms and First Calculus
      - Weeks 13-14: Exponentials and Logarithms
      - Weeks 15-16: Differentiation from First Principles
    - Month 5: Integration, Vectors and the AS Pure Finish
      - Weeks 17-18: Integration
      - Weeks 19-20: Vectors in Two Dimensions
  - PHASE 2: AS Statistics and Mechanics (Months 6-9, Weeks 21-36)
    The applied third of the qualification begins: statistics with the board's large data set, probability and hypothesis testing, then mechanics from kinematics to Newton's laws. The phase closes with a full AS-standard mock.
    - Month 6: Sampling, Data and the Large Data Set
      - Weeks 21-22: Sampling and Data Presentation
      - Weeks 23-24: Location, Spread and Interpretation
    - Month 7: Probability, the Binomial and Hypothesis Testing
      - Weeks 25-26: Probability and the Binomial Distribution
      - Weeks 27-28: Hypothesis Testing with the Binomial
    - Month 8: Mechanics: Modelling and Motion
      - Weeks 29-30: Modelling and Kinematics
      - Weeks 31-32: Variable Acceleration
    - Month 9: Forces, Newton's Laws and the AS Checkpoint
      - Weeks 33-34: Forces and Newton's Laws
      - Weeks 35-36: AS Consolidation and Mock
  - PHASE 3: A2 Pure Mathematics (Months 10-14, Weeks 37-56)
    The second-year pure content where most A-Level grades are decided: functions, series, the full trig toolkit, parametrics, advanced calculus, numerical methods and 3D vectors.
    - Month 10: Proof, Fractions and Functions
      - Weeks 37-38: Proof by Contradiction and Partial Fractions
      - Weeks 39-40: Functions and the Modulus
    - Month 11: Sequences, Series and Radian Trigonometry
      - Weeks 41-42: Sequences and Series
      - Weeks 43-44: Radians, Sectors and New Trig Functions
    - Month 12: The Full Trig Toolkit and Parametric Equations
      - Weeks 45-46: Compound Angles and the R Form
      - Weeks 47-48: Parametric Equations
    - Month 13: Advanced Differentiation and Integration
      - Weeks 49-50: Differentiation Methods
      - Weeks 51-52: Integration Methods
    - Month 14: Numerical Methods, 3D Vectors and the General Binomial
      - Weeks 53-54: Numerical Methods
      - Weeks 55-56: 3D Vectors and the Binomial for Any Power
  - PHASE 4: A2 Statistics and Mechanics (Months 15-16, Weeks 57-64)
    The second-year applied content: conditional probability, the normal distribution and its hypothesis tests, then resolving forces, friction, moments and projectiles.
    - Month 15: The Normal Distribution and Hypothesis Tests
      - Weeks 57-58: Conditional Probability and the Normal Distribution
      - Weeks 59-60: Testing Means and Correlation
    - Month 16: Resolving Forces, Friction, Moments and Projectiles
      - Weeks 61-62: Resolving Forces and Friction
      - Weeks 63-64: Moments and Projectiles
  - PHASE 5: Revision and the Past-Paper Cycle (Months 17-18, Weeks 65-72)
    No new content, on purpose. Structured revision by strand, then full past papers under real 2-hour timing, matched to your board's paper structure and marked against official schemes.
    - Month 17: Structured Revision
      - Weeks 65-66: Pure Revision by Strand
      - Weeks 67-68: Applied Revision and Board Alignment
    - Month 18: The Past-Paper Cycle
      - Weeks 69-70: Papers Under Real Timing
      - Weeks 71-72: Final Mocks and Exam Craft

**Projects students build:** Question bank entry: 15 solved exam-style questions on indices, surds and quadratics, written to full method standard; Proof portfolio opened: four short proofs written out to exam standard, checked line by line; Sketching sheet: 10 polynomial and reciprocal curves sketched with intercepts, turning behaviour and asymptotes labelled; Question bank entry: 12 solved coordinate geometry questions, including one full circle-tangent problem; Question bank entry: 10 solved binomial questions, including two find-the-coefficient problems worked two ways; Solution-count drill: 12 trig equations where the number of solutions in the interval is predicted before solving; Modelling write-up: one exponential growth or decay problem solved and interpreted in three or four written sentences; First-principles proof: the derivative of x squared and x cubed derived and written out to exam standard; Area problem set: 8 shaded-region questions where the region is sketched and decomposed before any integration; Question bank entry: 10 solved vector problems including two geometric proofs; Large data set field notes: a one-page profile of your board's data set in your own words, variables, units and quirks included; Comparison write-up: two groups from the large data set compared on location and spread, in four marked sentences; Model-check drill: 8 scenarios judged binomial or not, with the failing condition named each time; Question bank entry: 8 full hypothesis tests written to exam standard, conclusions in context every time; Graph story set: 6 motion graphs translated into written descriptions of the trip and back again - plus 21 more on the course page.

### Abacus & Mental Maths for Kids: From First Beads to Anzan

`/courses/abacus-mental-maths-course-for-kids` · 8 months (32 weeks) · Ages 5 to 10, no prior maths needed beyond counting

  - PHASE 1: Bead Basics and Number Sense (Months 1-2, Weeks 1-8)
    The abacus in hand: setting and reading numbers, place value on the rods, and the small-friend pairs that make 5. Everything later stands on the fluency built here.
    - Month 1: Meeting the Abacus
      - Weeks 1-2: Beads, Fingers and First Numbers
      - Weeks 3-4: Tens, Place Value and First Sums
    - Month 2: Small Friends, the Pairs That Make 5
      - Weeks 5-6: Adding with Small Friends
      - Weeks 7-8: Subtracting with Small Friends
  - PHASE 2: Crossing the Tens (Months 3-4, Weeks 9-16)
    Big friends, the pairs that make 10, open up sums that cross rods: carrying, borrowing, three-digit numbers and dictation at growing speed.
    - Month 3: Big Friends, the Pairs That Make 10
      - Weeks 9-10: Adding Over Ten
      - Weeks 11-12: Subtracting Across Ten
    - Month 4: Combined Moves and Three-Digit Numbers
      - Weeks 13-14: When Both Friends Work Together
      - Weeks 15-16: Three Digits and Real-Life Numbers
  - PHASE 3: Anzan, the Abacus in the Head (Months 5-6, Weeks 17-24)
    The step this whole course points at: the physical abacus is set aside and the child moves imaginary beads. Rows start tiny and grow week by week.
    - Month 5: Picture the Beads
      - Weeks 17-18: First Imaginary Beads
      - Weeks 19-20: Flash Numbers and Longer Pictures
    - Month 6: Mental Rows That Grow
      - Weeks 21-22: Five-Number Rows and Listening Sums
      - Weeks 23-24: Level Test One, Fully Mental
  - PHASE 4: Multiplication and the Mental-Only Capstone (Months 7-8, Weeks 25-32)
    Multiplication arrives on the abacus once addition is second nature, and the course closes with longer mental rows and a graded test done entirely in the head.
    - Month 7: Multiplication on the Abacus
      - Weeks 25-26: Tables Meet the Beads
      - Weeks 27-28: The Harder Tables
    - Month 8: The Mental-Only Capstone
      - Weeks 29-30: Longer, Faster, Still Accurate
      - Weeks 31-32: The Graded Mental Test and Family Show

**Projects students build:** My abacus card: the child draws bead pictures for the numbers 1 to 9 and reads them back from the drawing; Two-digit dictation sheet: 20 numbers set from hearing alone, scored and kept as the month 1 record; Make-5 rainbow chart: the child's own picture of the pairs that make 5, used at home during practice; Row book started: a notebook of daily rows with date and score, kept for the rest of the course; Make-10 rainbow chart to sit beside the make-5 chart at home; Mixed-rules row sheet: 15 rows solved and marked with which friend rule each step used; Speed ladder record: one row sheet attempted three times with times and scores charted by the child; Shop game record: a pretend-shop worksheet of five purchases totalled and checked on the abacus; Eyes-closed challenge card: ten single-number settings done mentally and verified, signed off in class; Flash round scorecard: three class flash rounds with scores tracked by the child; Listening log: ten dictated mental rows across the fortnight with scores and row lengths recorded; Level test one: a graded mental-only paper of rows, flash and listening sums, marked and kept; Table pattern cards: bead-picture cards for the 2, 3, 4 and 5 tables made by the child; Mixed paper folder: three 20-question mixed papers completed, marked and filed across the fortnight; Row book review page: the child charts their own week 8 versus week 30 row length and speed - plus 2 more on the course page.

### ACT Math Prep: Live Classes for the ACT Mathematics Section

`/courses/act-math-prep-course` · 5 months (20 weeks) · Grades 9-12 (ages 14 to 18), all starting scores

  - PHASE 1: Diagnostic and Integrating Essential Skills (Weeks 1-6)
    Find the starting point, learn how the section works, and secure the multi-step essential skills questions that appear throughout the test.
    - Weeks 1-2: Diagnostic and How ACT Math Works
    - Weeks 3-4: Rates, Percentages and Proportional Reasoning
    - Weeks 5-6: Area, Volume, Averages and Number Forms
  - PHASE 2: Preparing for Higher Math (Weeks 7-16)
    The categories that make up most of the section, taught in the order they build on each other: number, algebra, functions, geometry, then statistics and probability.
    - Weeks 7-8: Number and Quantity
    - Weeks 9-10: Algebra
    - Weeks 11-12: Functions
    - Weeks 13-14: Geometry and Trigonometry
    - Weeks 15-16: Statistics and Probability
  - PHASE 3: Modeling and Test Craft (Weeks 17-20)
    Knowledge becomes a repeatable score: modeling questions, calculator workflows, pacing under real timing, and full timed sections with honest review.
    - Weeks 17-18: Modeling, Calculators and Pacing
    - Weeks 19-20: Full Timed Sections and Test Week

**Projects students build:** Personal diagnostic report: score by category, top three content gaps and a starting pacing target; Error log opened with every diagnostic miss classified and corrected; Word problem translation sheet: twenty phrasings mapped to the equation each one means; Timed essential skills set with every step written out for review; Formula and method sheet written by the student, with one worked example per idea; Mixed essential skills timed set reviewed question by question; Exponent and radical rule card built from worked examples; Number and Quantity timed set with errors classified in the log; Algebra method map: which method to reach for first for each equation type; Two timed algebra sets, the second solved with a calculator check strategy; Function family gallery: a sketch, an equation and a key feature for each family; Functions timed set with a graph-first solution for every miss; Geometry recognition sheet: diagrams that signal similar triangles, special right triangles or circle facts; Geometry timed set reviewed for drawing and labelling habits; Statistics vocabulary and method sheet with one example of each idea - plus 5 more on the course page.

### Advanced Git & GitHub Masterclass for Professionals

`/courses/git-github-advanced-version-control-masterclass-for-professionals` · 24 classes (12 weeks · 2 classes/week) · Intermediate to advanced (working professionals; basic Git assumed or fast-tracked)

  - Phase 1: The Git Mental Model
    Learn how Git actually works underneath: the object database, refs and HEAD, the staging area, and the plumbing commands that make every advanced operation predictable instead of scary.
    - Class 1: How Git Actually Stores Data: The Object Model
    - Class 2: Refs, HEAD, Detached HEAD and the Three Trees
    - Class 3: Porcelain vs Plumbing and the Staging Area Deep Dive
    - Class 4: Config Layers, Aliases and Diff/Merge Tooling
  - Phase 2: History Mastery
    Rewrite, rescue, and interrogate history with confidence: interactive rebase, cherry-pick and revert, reflog and stash recovery, automated bisect, and blame and pickaxe archaeology.
    - Class 5: Interactive Rebase: Rewriting History with Intent
    - Class 6: Cherry-pick, Revert and Fixing Shared History
    - Class 7: Reflog Rescues, Lost Commits and Stash Mastery
    - Class 8: git bisect: Finding the Exact Commit That Broke It
    - Class 9: History Archaeology: blame, Pickaxe and Log Forensics
  - Phase 3: Team Workflows at Scale
    Design how a whole team uses Git: pick the right branching strategy, enforce it with protection rules and CODEOWNERS, build a PR culture that scales, tame big repositories, and run professional releases.
    - Class 10: Branching Strategies: Trunk-Based vs GitFlow vs GitHub Flow
    - Class 11: Branch Protection, Rulesets and CODEOWNERS
    - Class 12: Pull Request Culture That Scales
    - Class 13: Monorepos, Submodules and Scaling Big Repositories
    - Class 14: Release Management: Tags, SemVer and Changelogs
  - Phase 4: Automation, CI/CD & Security
    Automate everything and lock it down: GitHub Actions from fundamentals to reusable workflows, secret management and gated deployments, supply chain security, signed commits, hooks, and GitHub CLI scripting.
    - Class 15: GitHub Actions: The Core Model
    - Class 16: Advanced Actions: Matrix Builds, Caching and Reusable Workflows
    - Class 17: Secrets, Environments and Deployment Pipelines
    - Class 18: Supply Chain Security: Dependabot, Secret Scanning and CodeQL
    - Class 19: Signed Commits, 2FA, Hooks and the pre-commit Framework
    - Class 20: GitHub CLI (gh) and API Automation
  - Phase 5: Leadership & Capstone
    Operate at the level teams depend on: migrate an organization to GitHub, recover from disasters and leaked secrets, run AI-assisted review workflows responsibly, and ship a capstone workflow you can defend.
    - Class 21: Migrating a Team to GitHub and Teaching Git Well
    - Class 22: Disaster Recovery: filter-repo, Leaked Secrets and Corrupt Repos
    - Class 23: AI-Assisted Git Workflows: Copilot and Coding Agents
    - Class 24: Capstone: Design a Complete Team Workflow + Certification

**Projects students build:** Trace one of your own commits end to end with git cat-file: from the commit SHA to the root tree to a specific blob, and diagram the object graph you found; Build a personal reset cheat card: run soft, mixed, and hard resets on a scratch repository and document exactly what happened to HEAD, index, and working tree in each case; Create a real commit using only plumbing commands (update-index, write-tree, commit-tree), then verify it with git log and git cat-file; Ship a dotfiles-quality global .gitconfig: identities via includeIf, five aliases you will actually use, zdiff3 conflict style, rerere enabled, and a configured mergetool; Take a deliberately messy 10-commit feature branch and rebase it into 3 clean, logical, test-passing commits using fixup, squash, reword, and an exec test line; Simulate a release: branch release/1.2 from an older commit, cherry-pick two hotfixes onto it with -x, then revert a bad feature merge on main with revert -m 1; Run a rescue drill: deliberately destroy work three different ways (reset --hard, branch -D, dropped stash) and recover all three using reflog and fsck; In a prepared repository with a hidden regression, write a small test script and let git bisect run find the first bad commit completely automatically; Answer three archaeology questions on a real open source repository (when was X introduced, who last changed Y and why, which commit removed Z) using blame, -S, and -G, citing exact SHAs; Write a one-page branching strategy proposal for a team you know: chosen model, merge strategy, branch naming, and the reasoning behind each decision; Configure a demo repository with a full ruleset: required reviews with code owners, required status checks, linear history, and a CODEOWNERS file covering two teams, then prove each rule blocks what it should; Design a complete PR playbook for a repository: template, review checklist, size guidelines, and auto-merge or merge queue settings, then run one real PR through it end to end; Rescue a bloated demo repo: move its binary assets to Git LFS with lfs migrate, set up cone-mode sparse-checkout for one team's directory, and measure clone size before and after using --filter=blob:none; Run a full release cycle on your own project: conventional commits, cut a release branch, create an annotated signed v1.0.0 tag, publish a GitHub Release with categorized auto-generated notes, then ship a v1.0.1 hotfix; Build a CI workflow from scratch for a small app: lint, test, and build on every pull request, with path filters so documentation-only changes skip CI - plus 9 more on the course page.

### AI Agents with Microsoft Copilot Studio for College Students

`/courses/ai-agents-with-microsoft-copilot-studio-course-for-college-students` · 24 classes (12 weeks · 2 classes/week) · Intermediate (college students and early-career, ages 18+; no prior agent experience needed)

  - Phase 1: Agent Foundations
    Understand agents in business terms, tour Microsoft Copilot Studio properly, write instructions that actually steer behaviour, test like a professional, and meet the models and harnesses underneath every agent.
    - Class 1: Agents as a Business Skill, Not a Toy
    - Class 2: Your First Agent, Built Properly
    - Class 3: Instructions at Business Depth
    - Class 4: Testing Like Someone Whose Name Is on It
    - Class 5: Models, Harnesses and What You Are Actually Running On
  - Phase 2: Knowledge & Grounding at Business Depth
    Ground agents in the knowledge sources enterprises actually use: SharePoint, documents, Dataverse and connector-indexed enterprise data, with citations, conflict handling and accuracy audits you publish.
    - Class 6: Grounding vs Guessing, the Business Version
    - Class 7: SharePoint and Documents Done Right
    - Class 8: Dataverse, Enterprise Data and Source Conflicts
    - Class 9: Accuracy Audits, Bias and the Trust Contract
  - Phase 3: Conversation & Orchestration
    Design conversations that hold up under real users: topics and trigger phrases, entities and variables, condition groups, adaptive cards, and a deliberate choice between generative and classic orchestration.
    - Class 10: Topics and Trigger Phrases
    - Class 11: Entities, Variables and Slot Filling
    - Class 12: Condition Groups and Branch Design
    - Class 13: Adaptive Cards and Business-Grade Responses
    - Class 14: Generative Orchestration vs Classic, Chosen Deliberately
  - Phase 4: Tools, Automation & Multi-Agent
    The employability core: connectors and Prompt tools, deterministic agent flows, REST and custom connectors, Model Context Protocol, autonomous event triggers with real security discipline, multi-agent design with A2A, and analytics with agent evaluations.
    - Class 15: The Tool Menu and Connector Library
    - Class 16: Agent Flows: Automation That Runs the Same Every Time
    - Class 17: REST APIs, Custom Connectors and Governance
    - Class 18: Model Context Protocol and Computer Use
    - Class 19: Autonomous Agents: Event Triggers and the Security They Demand
    - Class 20: Multi-Agent Design, Analytics and Evaluations
  - Phase 5: Publish, Credentials & Capstone
    Publish to the channels businesses use, pass a professional pre-flight checklist, then build and defend a business-grade capstone agent, leaving with a mapped Microsoft credential roadmap.
    - Class 21: Channels and the Agent Store
    - Class 22: The Pre-Flight Checklist: Security, Cost and Honesty
    - Class 23: Capstone Build Week
    - Class 24: Demo Day and the Credential Roadmap

**Projects students build:** Agent teardown, business edition: analyse one real customer-facing agent (bank, airline, university helpdesk), reverse-engineer its probable instructions, knowledge and tools, and write a one-page teardown; Build 'Placement FAQ v1': an agent with hand-written instructions that answers questions about one real company's hiring process in a tone you designed; The Refusal Gauntlet, corporate edition: 10 questions your Placement FAQ agent must refuse or redirect (offer-letter legal advice, personal data, salary speculation), tuned until all 10 are handled gracefully; Build the permanent 15-question test set for Placement FAQ, run it twice in one week, and file the two most instructive failures with root causes; Model comparison memo: run your full Placement FAQ test set on two available models and write a one-page recommendation with evidence; Ground Placement FAQ in the target company's public website and prove five answers now carry citations a recruiter could check; Build 'Society Desk': an agent for a real college society grounded in a clean 3-document knowledge pack you author, with a 10-question proof test; Build a two-source Internship Tracker knowledge base (structured table plus policy document) and document exactly how the agent behaves when they conflict; Publish an accuracy audit of Society Desk: 20 scored answers with cited source paragraphs, an accuracy figure, and the three fixes it demanded; Build 'Fest Helpdesk' with three designed topics for a real event: schedule lookup, registration help and venue directions; Upgrade Internship Tracker: an add-application topic that collects company, role, deadline and status through entities, confirming with a variable-built summary; Rebuild Fest Helpdesk registration as a condition-driven flow: student vs guest vs volunteer paths, each with its own confirmation and an escalation branch; Give Internship Tracker a card-based pipeline view: each application a card with company, role, deadline and a status-update action; Migrate Fest Helpdesk to generative orchestration, rerun the full test set, and file a keep-or-fix verdict on every behaviour change; Add a 'JD decoder' Prompt tool to Placement FAQ: paste any job description, get requirements, keywords and preparation gaps in a fixed format - plus 9 more on the course page.

### AI Agents with Microsoft Copilot Studio for Teens

`/courses/ai-agents-with-microsoft-copilot-studio-course-for-teens` · 24 classes (12 weeks · 2 classes/week) · Beginner (ages 13-18; no coding experience needed)

  - Phase 1: Your First Agents
    Understand what an AI agent actually is, tour Microsoft Copilot Studio, build your first agent from a plain-English description, and learn how instructions and testing really work.
    - Class 1: What an AI Agent Really Is (and What It Is Not)
    - Class 2: Your First Agent in One Hour
    - Class 3: Instructions That Actually Steer Behaviour
    - Class 4: Testing Like a Professional
    - Class 5: How the Platform Thinks: Environments, Models and Harnesses
  - Phase 2: Knowledge & Grounding
    Give your agent real knowledge: websites, documents and SharePoint sources, citations users can check, and the discipline of grounding answers instead of guessing.
    - Class 6: Grounding vs Guessing
    - Class 7: Document Knowledge Done Right
    - Class 8: Multi-Source Knowledge and Conflicts
    - Class 9: Honest Agents: Accuracy, Bias and Boundaries
  - Phase 3: Conversation Design
    Design conversations deliberately: topics and trigger phrases, questions and variables, condition logic, adaptive cards, and the two orchestration modes that decide how your agent thinks.
    - Class 10: Topics and Trigger Phrases
    - Class 11: Questions, Entities and Variables
    - Class 12: Condition Logic and Branching
    - Class 13: Adaptive Cards and Rich Responses
    - Class 14: Generative Orchestration vs Classic
  - Phase 4: Tools & Autonomy
    Make your agent act: connectors and Prompt tools, agent flows for multi-step work, a first look at Model Context Protocol, then event triggers and a fully autonomous agent with analytics to prove it works.
    - Class 15: Tools: Giving Your Agent Hands
    - Class 16: Agent Flows: Multi-Step Work That Always Runs the Same
    - Class 17: Connecting to the Real World: Connectors, REST and MCP
    - Class 18: Event Triggers: Agents That Wake Up by Themselves
    - Class 19: Your Autonomous Agent, Hardened
    - Class 20: Analytics: Proving Your Agent Works
  - Phase 5: Publish & Capstone
    Publish agents to real channels, pass a safety and quality checklist, then design, build, test and present a capstone agent that does a real job for real people.
    - Class 21: Channels: Where Agents Live
    - Class 22: The Pre-Flight Checklist: Safety, Quality, Honesty
    - Class 23: Capstone Build Week
    - Class 24: Demo Day and What Comes Next

**Projects students build:** Agent safari: analyse two real agents you have used (a support bot, a game helper), map what their instructions and knowledge must look like, and write a one-page teardown; Build 'Study Buddy v1': an agent with instructions for your real timetable and subjects that answers revision questions in a tone you designed; The Refusal Gauntlet: write 10 questions your Study Buddy must refuse or redirect, then tune instructions until all 10 are handled gracefully; Build your permanent 15-question test set for Study Buddy, with expected behaviour written down before you run it; Draw the journey of one question through your agent: user, harness, instructions, model, answer, and label the parts you control; Ground Study Buddy in one real source (your school's public website or a subject site) and prove three answers now cite it; Create a clean 3-document knowledge pack from your own class notes and ground a Revision Coach agent in it, with a 10-question proof test; Build 'Club Desk': an agent for a real club or activity grounded in two sources, with documented behaviour when sources conflict; Accuracy audit: score 20 answers from Revision Coach against the actual source paragraphs and publish your agent's accuracy number with examples; Build a 'Homework Planner' agent with three hand-designed topics: add a task, list this week, and what should I do first; Upgrade Homework Planner: the add-a-task topic now collects subject, due date and effort through entities and confirms with a summary using variables; Build 'Event Helper' for a real school or family event: RSVP path, question path, and organiser-escalation path, all condition-driven; Give Homework Planner a card-based weekly view: each task a card with subject, due date and a 'mark done' action; Switch Event Helper to generative orchestration, rerun your full test set, and document every behaviour change with a keep-or-fix verdict; Add a 'flashcard maker' Prompt tool to Revision Coach: paste messy notes, get clean question-answer pairs, every time - plus 9 more on the course page.

### AI and Machine Learning for Teens: Python to Real Models

`/courses/ai-ml-masterclass-teens` · 10-12 months (40-48 weeks) · Beginner friendly, ages 13 to 18; school maths is enough to start

  - PHASE 1: Python and First Models (Months 1-3, Weeks 1-12)
    The data stack from zero, Python through pandas, then the moment it all changes: the first real machine learning model, trained and honestly evaluated.
    - Month 1: Python for AI
      - Introduction to AI & Python Setup
      - Python Data Structures & Control Flow
    - Month 2: The Data Stack
      - NumPy & Mathematical Foundations
      - Pandas & Data Manipulation
    - Month 3: First Machine Learning
      - Introduction to Machine Learning
      - Classification Algorithms
  - PHASE 2: Core Machine Learning (Months 4-6, Weeks 13-24)
    The full classical toolkit, regression to clustering, then neural networks built from a single neuron to real deep learning, with data preparation as a discipline.
    - Month 4: Prediction and Patterns
      - Regression & Prediction
      - Unsupervised Learning
    - Month 5: Neural Networks
      - Advanced ML: Ensembles and Model Craft
      - Introduction to Neural Networks
    - Month 6: Deep Learning Fundamentals
      - Deep Learning Fundamentals
      - Data Preparation and Augmentation
  - PHASE 3: Machines That See and Read (Months 7-8, Weeks 25-32)
    The two great applied fields at teen-buildable depth: convolutional networks and computer vision projects, then NLP and the transformer idea that changed everything.
    - Month 7: Computer Vision
      - Convolutional Neural Networks (CNNs)
      - Advanced Computer Vision
    - Month 8: Language
      - Natural Language Processing Basics
      - Transformers and Modern NLP
  - PHASE 4: Modern AI and the Capstone (Months 9-10, Weeks 33-40)
    Generative AI understood from the inside and used safely, ethics that actually bites, an AI product built end to end, and the final exam at demo day.
    - Month 9: The Generative Layer
      - Generative AI from the Inside
      - AI Ethics and Honest Evaluation
    - Month 10: Build, Ship, Defend
      - AI Product Week
      - Final Capstone Build
      - Demo Day and What Comes Next

**Projects students build:** Setup complete AI development environment; Rule-based chatbot (like early Siri); Simple recommendation system using rules; AI decision tree for game choices; Student grade predictor system; Text-based adventure game with AI NPCs; Data analyzer for social media stats; Simple expert system for diagnosis; Grade distribution analyzer; Dice probability simulator; Image manipulation with arrays; Statistical analysis dashboard; YouTube channel analytics tool; Sports statistics analyzer; Weather pattern explorer - plus 60 more on the course page.

### AI and ML Masterclass: Python, Deep Learning and GenAI

`/courses/ai-ml-masterclass-complete-college` · 12-14 months (48-56 weeks) · Complete beginner (18+); school maths refreshed, everything else built here

  - PHASE 1: Mathematics, Python and Data (Months 1-3, Weeks 1-12)
    The load-bearing floor: linear algebra, calculus intuition, probability and statistics, built alongside Python and real exploratory data work.
    - Month 1: The Mathematical Core I
      - Mathematics Prerequisites & Linear Algebra - Part 1
      - Linear Algebra - Part 2 & Calculus Fundamentals
    - Month 2: Probability, Statistics and Python
      - Probability & Statistics - Part 1
      - Statistics - Part 2 & Python for ML
    - Month 3: The Data Stack
      - Advanced NumPy & Pandas
      - Data Visualization & EDA
  - PHASE 2: Classical Machine Learning (Months 4-6, Weeks 13-24)
    The working core of applied ML: scikit-learn end to end, feature craft, unsupervised methods, ensembles, and evaluation as a discipline.
    - Month 4: First Models Done Right
      - Introduction to Machine Learning
      - Classification Algorithms - Part 1
    - Month 5: Feature Craft and Structure
      - Feature Engineering & Preprocessing
      - Unsupervised Learning
    - Month 6: Ensembles, Evaluation and the Phase Capstone
      - Model Evaluation & Validation
      - Phase 2 Capstone
  - PHASE 3: Deep Learning with PyTorch (Months 7-9, Weeks 25-36)
    The modern engine room: PyTorch fluency, convolutional networks and real computer vision, NLP through the transformer.
    - Month 7: Into Deep Learning
      - Introduction to Deep Learning
      - PyTorch in Depth
    - Month 8: Computer Vision
      - Convolutional Neural Networks (CNN)
      - Advanced Computer Vision
    - Month 9: Language and Transformers
      - Natural Language Processing (NLP) - Part 1
      - Advanced NLP and the Transformer
  - PHASE 4: Generative AI, Shipping and the Capstone (Months 10-12, Weeks 37-48)
    The modern layer done properly: LLM engineering and retrieval, deployment and monitoring fundamentals, responsible AI, interview craft, and the defended capstone.
    - Month 10: Generative AI and LLM Engineering
      - LLM Engineering
      - Deployment and Experiment Tracking
    - Month 11: Production Habits and Responsible AI
      - MLOps Fundamentals, Honestly Scoped
      - Responsible AI and Explainability
    - Month 12: Capstone, Interviews and the Final Exam
      - Capstone Build
      - ML Interview Craft
      - Demo Day and the Final Exam

**Projects students build:** Vector operations visualizer; Matrix calculator implementation; Linear equation solver; Geometric transformations with matrices; PCA implementation from scratch; Image compression using SVD; Gradient descent visualizer; Function optimizer using calculus; Probability calculator; Distribution visualizer; Bayes theorem applications; Monte Carlo simulations; Statistical analysis tool; Hypothesis testing framework; A/B testing simulator - plus 112 more on the course page.

### AI Literacy for Kids (Ages 8 to 14): Understand AI, Do Not Just Use It

`/courses/ai-literacy-for-kids-course` · 4 months (16 weeks), joinable any month · Ages 8 to 14; no prior coding required, everything is taught from scratch

  - PHASE 1: What AI Is, and How a Machine Learns
    The foundations, taught with hands-on activities rather than definitions to memorise.
    - Month 1: Machines, Rules and Learning
      - What Is Artificial Intelligence, Really
      - Teaching a Machine by Example
      - Training Your First Real Model
      - Patterns, Data and Prediction
  - PHASE 2: Where AI Goes Wrong, and How to Judge It
    The critical-thinking half, which is the part that actually protects a child.
    - Month 2: Bias, Hallucination and Judging Answers
      - Where the Data Comes From
      - When AI Makes Things Up
      - Using AI Honestly for Schoolwork
      - Staying Safe and Private
  - PHASE 3: Building Something Real and Explaining It
    Children apply everything to a project of their own and learn to present it clearly.
    - Month 3: Simple AI Projects
      - Block Coding Meets AI
      - Designing a Project That Helps Someone
      - Building the Capstone
      - Presenting and Explaining

**Projects students build:** An AI spotting hunt: find five AI systems you used this week and explain what each one decides; Train a classmate as if they were a machine: give only examples, no rules, then test them; Train an image or sound classifier on your own examples and demonstrate it to the class; Predict outcomes from a small dataset by hand, then compare with the model's prediction; Deliberately train a model on lopsided data, then show the class exactly how it fails; Fact-check a set of teacher-provided AI answers and mark which are wrong and why; Take one homework-style problem, use AI only for hints, and explain the solution back unaided; Write a family AI agreement: what is allowed, what is not, and who to ask; Build a block-coded project that responds to your trained model's predictions; Write a one-page plan for your capstone: the person, the problem, the data, the plan; Build your working capstone project; Present your capstone to the class and to your parents.

### AI Tools Course for Teens (13+): Prompting to Real Projects

`/courses/teens-ai-tools-mastery-course` · 4-5 months (16-20 weeks) · Complete beginner, ages 13 to 18

  - Month 1: AI Foundations and Prompt Craft
    How AI actually works, ChatGPT used properly with a parent-approved account, and prompting practiced as a real skill.
    - Introduction to AI World
    - ChatGPT Fundamentals
    - Prompt Engineering Basics
    - Advanced ChatGPT Techniques
  - Month 2: Creative AI, Done Legally
    AI art and image editing with tools that genuinely permit teens, plus the copyright and ethics questions creative AI raises.
    - Introduction to AI Art
    - Image Generation with Teen-Legal Tools
    - Adobe Firefly, Canva AI and Advanced Art
    - AI Photo Editing and Manipulation
  - Month 3: AI for Media and School
    Music, audio and video tools at teen-appropriate levels, then the serious part: AI as a study partner used ethically.
    - AI Music and Audio
    - AI Video and Animation
    - AI Study Assistants, Used Ethically
    - AI Research and Writing Tools
  - Month 4: The Builder’s Month and the Final Exam
    The step from user to builder: coding assistants, training your own models, the ethics that govern it all, and the capstone exam.
    - AI Coding Assistants
    - Train Your Own Models
    - AI Safety, Ethics and the Future
    - Capstone, Demo Day and the Final Exam

**Projects students build:** My First AI Conversation; AI vs Human: Comparison chart; Draw AI's journey timeline; Play and analyze AI games; Interview ChatGPT about its capabilities; Create a story with ChatGPT; Get homework help (with citations); Plan a birthday party with AI; Create prompt template library; Before/After prompt improvements; Prompt engineering challenge; Build custom AI assistant personality; Create personalized study assistant; Build interactive quiz game; Research project on favorite topic - plus 44 more on the course page.

### AI Tools Mastery Course: ChatGPT, Claude & Automation

`/courses/ai-tools-mastery-complete-college` · 5-6 months (22-26 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: AI Foundations and Prompt Engineering (Weeks 1-6)
    Master ChatGPT, prompt engineering, AI writing tools, and conversational AI applications.
    - ChatGPT & Prompt Engineering Excellence
      - Introduction to AI Tools & ChatGPT Basics
      - Advanced Prompt Engineering
      - ChatGPT for Content Creation & Writing
      - ChatGPT for Business & Productivity
  - PHASE 2: Visual, Creative and Developer AI Tools (Weeks 7-12)
    Master Claude, Gemini, Midjourney, Stable Diffusion, and all major AI tools for images, video, and audio.
    - Visual AI & Alternative LLMs
      - Claude AI & Google Gemini
      - Midjourney and Image Generation
      - Stable Diffusion & Other Image AI Tools
      - Video & Audio AI Tools
    - Research, Coding and Creative AI Tools
      - AI Research & Knowledge Tools
      - AI Coding & Development Tools
  - PHASE 3: AI Automation and Professional Applications (Weeks 13-18)
    Turn tool fluency into leverage: workflow automation, connecting tools through their APIs, and building AI agents for multi-step work, used responsibly with verification built in.
    - Automation, Agents and Business Applications
      - AI Workflow Automation
      - AI Agents & Advanced Automation
      - AI Integration & API Usage
      - AI Tools for Business and Professional Work
    - Staying Current and Responsible Use
      - Staying Current with AI Tools
      - Ethics, Safety & Responsible AI Use
  - PHASE 4: The Finale (Month 5, Weeks 19-23)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 5: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Personal AI assistant setup; Custom instruction templates; Daily productivity workflow with ChatGPT; Meeting notes summarizer; Email response generator; Prompt template library (50+ templates); Industry-specific prompt collections; Complex task automation prompts; Creative writing prompt system; Business analysis prompts; Complete blog writing system; Social media content calendar (30 days); Email sequence (welcome, nurture, sales); E-book outline and chapters; Product descriptions generator - plus 93 more on the course page.

### Algebra Foundations: Pre-Algebra & Algebra 1, Live Online

`/courses/algebra-foundations-masterclass` · 12 months (52 weeks) · Grades 7-9, or any student whose algebra base needs a real rebuild

  - PHASE 1: Pre-Algebra, The Number System Mastered (Weeks 1-16)
    Almost every algebra struggle is an arithmetic gap wearing a disguise. This phase rebuilds integers, fractions, decimals and ratios to genuine fluency, then introduces variables so gently they feel obvious.
    - Weeks 1-4: Diagnostic + Integers and the Number Line
    - Weeks 5-10: Fractions and Decimals, Properly This Time
    - Weeks 11-16: Ratios, Percents and the First Variables
  - PHASE 2: Equations, Functions and Systems (Weeks 17-36)
    The heart of Algebra 1. Equations are read as sentences and solved with balance reasoning; linear functions are met as equation, table and graph telling one story; systems make two stories intersect. This is the phase that decides the next five years of math.
    - Weeks 17-22: Equations and Inequalities as Sentences
    - Weeks 23-29: Linear Functions Three Ways
    - Weeks 30-36: Systems of Equations and Inequalities
  - PHASE 3: Exponents, Polynomials and Quadratics (Weeks 37-52)
    The bridge into Algebra 2: exponent rules from meaning, polynomial arithmetic without fear, factoring as detective work and quadratics met as functions with real stories. The course closes with the word-problem and graph craft that turns knowledge into marks.
    - Weeks 37-42: Exponents and Polynomials
    - Weeks 43-48: Factoring and Quadratic Equations
    - Weeks 49-52: Quadratic Functions + the Capstone

**Projects students build:** Personal gap map for the year ahead; Integer war-stories set: temperature, bank balance and elevation problems; Fraction operation gallery: one worked picture per operation, made by the student; Real-recipe scaling project: fractions doing real work; Best-buy investigation: unit-price reasoning on real products; Phase mastery check: solve, explain and extend, per topic; Equation-sentence dictionary: twenty phrasings, twenty equations; Real-world setups: phone plans, savings goals, break-even problems; Equation-table-graph triptych for three real situations; Data modeling mini-project: fit a line, defend the interpretation; Business break-even case solved all three ways; Powers-of-ten scale tour: notation doing real scientific work; Area-model gallery for polynomial multiplication; Factoring pattern-book, built by the student; Quadratic equation gauntlet: mixed methods under light timing - plus 2 more on the course page.

### Algorithmic Trading Course: Strategy, Quant & ML

`/courses/algorithmic-trading-masterclass-complete` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Financial Markets & Trading Foundations (Months 1-3, Weeks 1-13)
    Build solid understanding of financial markets, instruments, Python programming, and data analysis for trading.
    - Months 1-2: Markets, Instruments & Python Basics
      - Introduction to Financial Markets
      - Python Programming for Trading - Part 1
      - Financial Data Analysis with Python
      - Technical Analysis Foundations
    - Month 3: Advanced Python & Market Analysis
      - Object-Oriented Programming for Trading Systems
      - Statistical Analysis for Trading
      - Fundamental Analysis & Market Data APIs
  - PHASE 2: Trading Strategies & Backtesting (Months 4-6, Weeks 14-26)
    Master strategy development, backtesting frameworks, optimization, and strategy evaluation.
    - Months 4-5: Strategy Development & Backtesting
      - Backtesting Framework Development
      - Momentum & Trend Following Strategies
      - Mean Reversion & Statistical Arbitrage
      - Breakout & Volatility Strategies
      - Options Trading Strategies (Basics)
    - Month 6: Advanced Strategies & Optimization
      - Strategy Optimization & Parameter Tuning
      - Risk Management & Position Sizing
      - Multi-Asset & Portfolio Strategies
      - Cryptocurrency Trading Strategies
  - PHASE 3: Machine Learning & Advanced Quant (Months 7-9, Weeks 27-39)
    Master machine learning for trading, advanced quantitative strategies, and high-frequency concepts.
    - Months 7-8: Machine Learning for Trading
      - ML Fundamentals for Trading
      - Classification Models for Trading
      - Deep Learning for Trading
      - NLP & Sentiment Analysis for Trading
      - Alternative Data & Quantitative Research
    - Month 9: Advanced Trading Concepts
      - High-Frequency Trading (HFT) Concepts
      - Advanced Options & Derivatives
      - Execution Algorithms & Transaction Cost Analysis
      - Quantitative Portfolio Management
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Market research on different instruments; Paper trading practice (manual); Order type experiments; Market analysis report; Trading journal setup; Load and explore stock price data; Calculate basic statistics (mean, std, returns); Price data manipulation exercises; Simple moving average calculator; Trading signal generator (basic); Multi-asset data downloader; Returns and volatility analyzer; Correlation matrix for portfolio; Interactive price charts; Market data dashboard - plus 151 more on the course page.

### Alpha Girls: Systems at Scale for Senior Women Engineers

`/courses/alpha-girls-elite-tech-mastery` · 9-11 months (36-44 weeks) · Experienced women engineers (roughly 4+ years or Queen Coders graduates)

  - PHASE 1: Systems at Scale (Months 1-3, Weeks 1-12)
    The core discipline: design method under load, data at scale, cloud architecture, reliability and the economics of performance.
    - Month 1: Design Method Under Load
      - System Design at Scale: The Method
      - Cloud Architecture, Judged
    - Month 2: Data and Reliability
      - Data Platforms and Pipelines
      - Reliability Engineering
    - Month 3: Performance Economics and ML Systems
      - Performance at Scale
      - ML Systems in Production
  - PHASE 2: Platforms and Production Judgment (Months 4-6, Weeks 13-24)
    Platform engineering, security and compliance leadership, and the architecture review cycle practiced as craft.
    - Month 4: Platform Engineering
      - Platforms and Developer Experience
      - Security and Compliance Leadership
    - Month 5: The Architecture Review Cycle
      - Architecture Reviews and ADRs
      - Build, Buy or Wait
    - Month 6: The Mid-Course Defense
      - Integration: An AI-Era System at Scale
      - Phase 2 Defense
  - PHASE 3: Technical Strategy (Months 7-8, Weeks 25-32)
    Turning depth into direction: roadmaps, migrations, incident leadership and the influence craft of principal engineers.
    - Month 7: Direction
      - Technical Strategy and Roadmaps
      - Leading Migrations
    - Month 8: Influence
      - Incident Leadership and Hard Weeks
      - Mentoring, Sponsorship and the Room
  - PHASE 4: The Finale (Month 9, Weeks 33-36)
    The redesign capstone: one real system taken from pressure to proposal to panel.
    - Month 9: The Redesign and the Panel
      - Capstone Build: The Redesign Proposal
      - Red Team Week
      - The Final Defense

**Projects students build:** Design Twitter-scale messaging system; Build Netflix-level video streaming architecture; Create Uber's global dispatch system; Implement Google-scale search infrastructure; Migrate Fortune 500 to cloud (real project); Build multi-cloud platform for enterprise; Design $10M+ cost optimization strategy; Implement global compliance framework; A data platform design for a stated workload, with the decision table shown; An SLO set plus incident runbook for a chosen service; A performance investigation with before/after measurements; Build TikTok-scale recommendation system; Create enterprise fraud detection saving $100M; Implement real-time translation for 50 languages; Design autonomous vehicle ML pipeline - plus 13 more on the course page.

### AP Calculus AB & BC Exam Prep, Live Online, Score 5 Goal

`/courses/ap-calculus-exam-prep` · 10 months (40 weeks) · AP Calculus AB and BC students, grades 11-12

  - PHASE 1: Limits and Derivatives as Ideas (Weeks 1-14)
    The diagnostic finds the real starting point, including the precalculus debt, then the two foundational ideas are built properly: the limit as approach, the derivative as instantaneous rate, and the rule toolkit drilled to exam speed only after the ideas hold.
    - Weeks 1-3: Diagnostic + Limits as Approach
    - Weeks 4-8: The Derivative, Discovered Then Drilled
    - Weeks 9-14: Implicit, Inverse and the First Applications
  - PHASE 2: Analysis, Integrals and the FTC (Weeks 15-28)
    Curve analysis makes the derivative a reasoning tool, then the integral arrives as accumulation and the Fundamental Theorem connects the two halves of the course. By the end of this phase the entire AB syllabus is owned.
    - Weeks 15-19: Curve Analysis and Optimization
    - Weeks 20-24: The Integral as Accumulation + the FTC
    - Weeks 25-28: Applications of Integrals + Differential Equations
  - PHASE 3: BC Topics + Exam Craft and Mock Cycles (Weeks 29-40)
    BC students complete series, parametrics and polar; AB students go straight to craft. Then the program becomes an exam machine: FRQ rubric mastery, MCQ pacing, calculator strategy and full mock cycles that peak in the first week of May.
    - Weeks 29-33: BC Extensions (BC track) / Deep Review (AB track)
    - Weeks 34-37: FRQ Rubric Mastery and Calculator Strategy
    - Weeks 38-40: Full Mock Cycles and Peak Week

**Projects students build:** Personal error log and gap map for the whole year; Limit-evaluation toolkit sheet, built not copied; Shrinking-interval investigation: one data table to both core ideas; Timed derivative gauntlet at exam pace, reviewed for error patterns; Related-rates case set: five classic setups from picture to answer; Phase checkpoint: timed AB-style mixed section with full review; Full f-f'-f'' graph-relationship FRQ solved and self-graded on the rubric; Optimization mini-case portfolio: fence, box, cost, distance; Riemann-to-FTC investigation: watching sums converge; Accumulation FRQ set against real rubrics; Volume gallery: one solid each way, from sketch to setup to answer; AB mock exam number one with documented score; Series convergence decision-tree card, built by the student; Parametric motion mini-case (BC) / AB mixed mock section (AB); Self-graded FRQ portfolio: one of each archetype against real rubrics - plus 3 more on the course page.

### AP Computer Science A: Java Programming and Full Exam Prep

`/courses/ap-computer-science-a-java-exam-prep-course` · 6 months (24 weeks) · High school students preparing for AP Computer Science A; taught from Java basics, no prior coding required

  - PHASE 1: Java Foundations and Using Objects (Unit 1, Months 1-2, Weeks 1-8)
    Java built from nothing, then Unit 1 of the redesigned course: using objects and methods, the largest single source of early marks and the base everything else stands on.
    - Month 1: Java From the Ground Up
      - Setup, the Java Program, and Output
      - Primitive Types, Variables, and Expressions
      - Using Objects and the String Class
      - The Math Class and Method Basics
    - Month 2: Unit 1 Depth, Using Objects and Methods
      - Wrapper Classes and Number Handling
      - String Manipulation Deep Dive
      - Designing and Calling Methods
      - Unit 1 Mastery and the Digital Multiple Choice
  - PHASE 2: Selection, Iteration and Class Creation (Units 2 and 3, Months 3-4, Weeks 9-16)
    The logic and loops that drive every program, then writing your own classes, which is exactly what the class-design free-response question demands.
    - Month 3: Selection and Iteration (Unit 2)
      - Boolean Expressions and if Statements
      - Compound Conditions and De Morgan's Laws
      - While and For Loops
      - Nested Loops and String Traversal
    - Month 4: Class Creation (Unit 3)
      - Anatomy of a Class
      - Methods, Encapsulation, and Access
      - Static, Scope, and Designing to a Specification
      - Unit 3 Mastery and the Class-Design Free Response
  - PHASE 3: Data Collections and Exam Mastery (Unit 4 and Full Mocks, Months 5-6, Weeks 17-24)
    Arrays, ArrayList, 2D arrays, files and data sets, then a full turn to exam craft: every free-response type drilled and complete timed digital mock exams.
    - Month 5: Data Collections (Unit 4)
      - One-Dimensional Arrays
      - ArrayList
      - Two-Dimensional Arrays
      - Files, Data Sets, and Recursion Tracing
    - Month 6: Free-Response Mastery and Full Mock Exams
      - Free Response 1 and 2: Methods, Control Structures and Class Design
      - Free Response 3 and 4: ArrayList Data Analysis and 2D Arrays
      - Multiple-Choice Strategy and Full Mock Exam One
      - Full Mock Exam Two and Test-Ready Review

**Projects students build:** First program: a short Java program that prints a formatted pattern, run and explained line by line; Calculator methods: small programs computing averages, remainders and unit conversions, each predicting integer versus double results first; String toolkit: methods that extract initials, reverse words and search text, using only the AP-tested String methods; Dice and ranges: a program that generates random values in given ranges and verifies the distribution by counting; Number-handling drill: a program that safely parses, compares and formats numeric input, with the precision traps annotated; Text processor: methods that clean, search and transform text, each tested on tricky edge cases like empty and single-character strings; Method decomposition: one larger task solved twice, once as a single long method and once split into helpers, then compared for clarity; First timed multiple-choice block on Unit 1 content, reviewed question by question with each miss tagged by cause; Decision engine: a grading or categorising program driven entirely by conditionals, tested against every boundary value; Condition simplifier: a set of gnarly boolean expressions rewritten in simplest equivalent form and verified by truth table; Loop patterns: programs that sum, count, find and build using loops, each with the iteration count predicted before running; Pattern generator: nested-loop programs that draw shapes and process text grids, with execution counts worked out by hand; First class from scratch: a small class with fields and a constructor, instantiated and exercised from a tester program; Encapsulated class: a class with private fields and a full set of methods, with a test proving the state can only change through methods; Spec-to-class: a complete class built from a behaviour table alone, then checked case by case against that table - plus 9 more on the course page.

### AP Computer Science Principles: Create Task and Exam Prep

`/courses/ap-computer-science-principles-exam-prep-course` · 6 months (24 weeks) · High school students preparing for AP Computer Science Principles; beginner-friendly, no prior coding required

  - PHASE 1: Creative Development and Programming Foundations (Big Idea 1 and Core of Big Idea 3, Months 1-2, Weeks 1-8)
    Computational thinking, the core programming building blocks CSP tests, and the habits of incremental development, ending with a planned and approved Create Task idea.
    - Month 1: Computational Thinking and Programming Building Blocks
      - Course Map, Computational Thinking, and What CSP Actually Tests
      - Variables, Data Abstraction, and Expressions
      - Lists and Iteration
      - Selection, Boolean Logic, and Procedures
    - Month 2: Algorithms, Procedural Abstraction, and Planning the Create Task
      - Algorithms: Combining Sequencing, Selection, and Iteration
      - Procedural Abstraction and Parameters
      - The Development Process: Incremental Building, Testing, and Collaboration
      - Choosing and Planning Your Create Task Idea
  - PHASE 2: Data, Deeper Algorithms, and Building the Create Task (Big Ideas 2 and 3, Months 3-4, Weeks 9-16)
    How computers represent and use data, then a return to algorithms with more complex data, while the Create Performance Task itself is planned, built across guided sessions, and finished.
    - Month 3: Data and Information
      - Binary and How Computers Represent Data
      - Data Compression
      - Extracting Information from Data
      - Using Data to Solve Problems and Simulations
    - Month 4: Robust Programs and Building the Create Task
      - Two-Dimensional Lists and Algorithmic Thinking
      - Simulations, Abstraction, and Managing Complexity
      - Building the Create Task: Robust Programs and Instructor Feedback
      - Completing the Create Task and the Personalized Project Reference
  - PHASE 3: Computer Systems, Impact of Computing, and Exam Mastery (Big Ideas 4 and 5 and Full Practice, Months 5-6, Weeks 17-24)
    How the internet and larger computing systems actually work, an honest look at computing's effects on real people, then a full turn to exam craft built around your own finished Create Task.
    - Month 5: Computer Systems and Networks
      - How the Internet Works
      - Fault Tolerance and Parallel Computing
      - Cybersecurity Fundamentals
      - Computer Systems Review and Practice
    - Month 6: Impact of Computing and Full Exam Mastery
      - Beneficial and Harmful Effects of Computing
      - Intellectual Property, Open Source, and Full Multiple-Choice Practice
      - Written-Response Drilling with the Personalized Project Reference
      - Full Mock Exam and Test-Ready Review

**Projects students build:** First program: a short interactive program that takes input and produces output, run and explained line by line; Variable tracker: a short program that stores, updates, and reports several related values, traced by hand before it is run; List toolkit: procedures that sum, count, filter, and find the maximum of a list, tested on an empty list and a single-item list; Decision-making procedure: a small program that classifies input using nested conditionals, tested against every boundary case; Algorithm workbook: a search and a sort implemented from a plain-language description, each hand-traced on a small list first; Procedure library: a small set of reusable procedures for a chosen task, called from one main program and tested independently; Debug and repair: a deliberately broken program fixed step by step, with every bug and its fix logged in writing; Approved Create Task proposal: a one-page plan naming your program's purpose, its list, its procedure with parameters, and its core algorithm; Binary explorer: a program that converts numbers between binary and decimal and explains each step of the conversion; Compression demo: a small program that compresses a repetitive data set with a simple scheme and reports the size saved; Data-set investigation: a provided data set explored with filtering and grouping to answer three written questions with cited evidence; Simple simulation: a small program that models a repeated random process, for example a game of chance, and reports results across many runs; Grid processor: a program that stores and analyses a small two-dimensional data set, for example a seating chart or a simple game board; Create Task build session one: the first working version of your program's core algorithm and required list, reviewed live with the instructor; Create Task build session two: a tested, working version of your full program, incorporating the feedback from session one - plus 9 more on the course page.

### AP Precalculus: Units 1 to 3 and Full Exam Prep

`/courses/ap-precalculus-exam-prep-course` · 6 months (24 weeks) · High school students preparing for AP Precalculus; a solid Algebra 2 background is assumed

  - PHASE 1: Polynomial and Rational Functions (Unit 1, Months 1-2, Weeks 1-8)
    Rates of change, polynomial behaviour and zeros, rational functions with their asymptotes and holes, transformations, and model selection: the function-behaviour toolkit every later unit builds on.
    - Month 1: Rates of Change and Polynomial Behaviour
      - Functions, Change, and Rates of Change
      - Polynomial Functions: Zeros and Local Behaviour
      - End Behaviour and Rational Functions
      - Vertical Asymptotes, Holes, and Equivalent Forms
    - Month 2: Transformations, Modelling, and Unit 1 Mastery
      - Transformations of Functions
      - Choosing a Function Model
      - Algebraic Fluency with Polynomial and Rational Expressions
      - Unit 1 Mastery and the Multiple-Choice Format
  - PHASE 2: Exponential and Logarithmic Functions (Unit 2, Months 3-4, Weeks 9-16)
    Sequences as the discrete root of exponential change, exponential functions and modelling, composition and inverses, then logarithms through to equation solving, closing with a first look at free response.
    - Month 3: Sequences, Exponential Functions, and Modelling
      - Sequences and the Roots of Exponential Growth
      - Exponential Functions: Behaviour and Manipulation
      - Exponential Modelling and Competing Models
      - Function Composition and Inverses
    - Month 4: Logarithms and Equation Solving
      - Logarithms as Inverses of Exponential Functions
      - Logarithmic Properties and Manipulation
      - Solving Exponential and Logarithmic Equations
      - Unit 2 Mastery and a First Look at Free Response
  - PHASE 3: Trigonometric and Polar Functions, and Full Exam Mastery (Unit 3 and Mocks, Months 5-6, Weeks 17-24)
    The unit circle, sinusoidal and trigonometric functions, and polar coordinates and functions, followed by a full turn to exam craft: the calculator/no-calculator skill, free-response method, and complete timed hybrid-digital mock exams.
    - Month 5: Trigonometric and Polar Functions
      - The Unit Circle and Periodic Behaviour
      - Sinusoidal Functions and Modelling
      - Tangent, Reciprocal Trig, and Inverse Trig
      - Equivalent Trig Forms and Polar Functions
    - Month 6: Free-Response Mastery and Full Mock Exams
      - The Calculator/No-Calculator Split and Multiple-Choice Strategy
      - Free-Response Method Across Units 1 to 3
      - Full Mock Exam One
      - Full Mock Exam Two, Test-Ready Review, and a Unit 4 Preview

**Projects students build:** Rate-of-change notebook: a function studied three ways, table, graph and average rate of change over five different intervals, with each answer interpreted in a sentence; Zero-to-graph drill: eight polynomials sketched from a list of zeros and multiplicities alone, then checked point by point; Asymptote hunt: twelve rational functions sorted into horizontal-asymptote, slant-asymptote or neither, then verified by long division where needed; Rewrite-and-reveal set: ten rational functions rewritten from standard to factored form specifically to expose a hidden hole or asymptote; Transformation matching set: ten transformed graphs matched to their equations, then the reverse, equation to sketch, for the same ten; Model justification write-up: two data tables modelled and the choice of model defended in four written sentences each; Domain-safe solving set: eight rational equations and inequalities solved with every excluded value stated before the algebra begins; First timed multiple-choice block on Unit 1, split into a no-calculator half and a calculator half, reviewed question by question; Sequence-to-function bridge: four geometric sequences extended into continuous exponential models, with the jump from discrete to continuous explained in writing; Percent-change translator: eight real-world growth and decay descriptions rewritten as exponential equations, base and starting value identified from the words alone; Model face-off: one data set modelled two competing ways, exponential and polynomial, with a written case for which one actually fits; Inverse verification set: six functions inverted algebraically, then checked both by composing and graphically, by reflecting; Exponential-log translation set: twelve equations converted between exponential and logarithmic form, evaluated by hand where the values are friendly; Expand-and-condense drill: ten logarithmic expressions expanded fully, then condensed back, each check confirming the two forms are equal; Extraneous-solution audit: eight logarithmic equations solved, with every solution checked back in the original equation and any extraneous root explained - plus 9 more on the course page.

### AP Statistics: Exam Prep with the Investigative Task

`/courses/ap-statistics-maths-exam-prep-course` · 6 months (24 weeks) · High school students preparing for AP Statistics; taught from the ground up, comfort with school algebra assumed

  - PHASE 1: Exploring Data and Collecting Data (Units 1-3, Months 1-2, Weeks 1-8)
    The data-analysis half of the course: describing one-variable and two-variable data honestly, then how data is collected in the first place. The graphing calculator and the free-response communication standard are introduced here and used every week from this point on.
    - Month 1: Exploring One-Variable Data (Unit 1)
      - Displaying and Describing Distributions
      - Measuring Center and Spread
      - The Normal Distribution
      - Unit 1 Mastery and the Free-Response Standard
    - Month 2: Two-Variable Data and Collecting Data (Units 2-3)
      - Exploring Two-Variable Data: Scatterplots and Correlation
      - Least-Squares Regression
      - Collecting Data: Sampling
      - Collecting Data: Experiments and Unit 2-3 Mastery
  - PHASE 2: Probability and Sampling Distributions (Units 4-5, Months 3-4, Weeks 9-16)
    The mechanics of randomness that make inference possible: probability rules, random variables, the named distributions, then sampling distributions and the Central Limit Theorem that the entire second half of the course depends on.
    - Month 3: Probability, Random Variables and Probability Distributions (Unit 4)
      - Probability Rules
      - Random Variables
      - Binomial and Geometric Distributions
      - Unit 4 Mastery and Probability Free Response
    - Month 4: Sampling Distributions (Unit 5)
      - Sampling Variability and the Sampling Distribution of a Proportion
      - The Sampling Distribution of a Sample Mean and the Central Limit Theorem
      - Sampling Distributions for Differences and Exam-Style Reasoning
      - Unit 5 Mastery and the Bridge to Inference
  - PHASE 3: Inference and Exam Mastery (Units 6-9 and Full Mocks, Months 5-6, Weeks 17-24)
    Formal inference for every setting the exam tests, then a full turn to exam craft: the Investigative Task drilled as its own skill, every free-response type reviewed against the real rubric, and two complete timed mock exams under hybrid-digital conditions.
    - Month 5: Inference for Proportions and Means (Units 6-7)
      - Confidence Intervals for a Proportion
      - Significance Tests for a Proportion
      - Confidence Intervals for a Mean
      - Significance Tests for a Mean and Unit 6-7 Mastery
    - Month 6: Chi-Square, Slopes, the Investigative Task, and Full Mock Exams (Units 8-9)
      - Inference for Categorical Data: Chi-Square
      - Inference for the Slope of a Regression Line
      - The Investigative Task
      - Full Mock Exams and Test-Ready Review

**Projects students build:** First distribution report: a real one-variable data set displayed, described in full shape-outliers-center-spread sentences, and checked on the calculator; Center-and-spread comparison: two real groups compared on boxplots with a full written comparison of shape, center, spread and outliers; Normal model check: a real quantitative data set tested against the 68-95-99.7 rule, with normalcdf and invNorm used to answer three context questions; First scored free response: a Unit 1 style question written under time and self-scored against a rubric, with every lost point named; Relationship study: a real two-variable data set plotted, described in full, and its correlation computed and interpreted in context; Prediction model: a regression line fit to real data, its residual plot checked for pattern, and two predictions made with their limits stated; Sampling critique: a real published survey evaluated for its sampling method, with specific bias risks named in writing; Experiment design: a full experimental design written for a given research question, naming treatments, randomisation and control; Two-way table study: a real two-way table used to compute conditional probabilities and formally test two events for independence; Combined-variable analysis: two random variables combined by sum or difference, with mean and standard deviation of the result found and interpreted; Model choice project: three real scenarios each modelled correctly as binomial or geometric, with the setting's conditions checked in writing; Timed probability free response written under exam conditions and self-scored against a rubric; Simulation build: a sampling distribution for a proportion simulated by hand or calculator, with shape, center and spread reported from the simulation; Central Limit Theorem simulation: sample means drawn repeatedly from a skewed population, with the resulting shape compared at small and large sample sizes; Distribution identification drill: ten scenarios each matched to the correct sampling distribution, with mean, standard deviation and conditions stated - plus 9 more on the course page.

### App Development Course: Flutter, iOS & Android

`/courses/complete-app-development-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundations & First Apps (Months 1-3, Weeks 1-13)
    Build programming foundations, master UI/UX design principles, and create your first mobile applications.
    - Months 1-2: Programming Basics & App Fundamentals
      - Introduction to App Development & Setup
      - Programming Fundamentals (Dart/JavaScript)
      - UI/UX Design for App Developers
      - Introduction to Flutter Development
    - Month 3: Intermediate Flutter & State Management
      - Advanced Flutter Widgets & Layouts
      - State Management in Flutter
      - Navigation & Routing
  - PHASE 2: Cross-Platform Development & Backend Integration (Months 4-6, Weeks 14-26)
    Master cross-platform development, backend integration, APIs, databases, and real-world app features.
    - Months 4-5: Backend Integration & Data Persistence
      - Local Data Storage
      - REST APIs & HTTP Networking
      - Firebase Integration
      - Advanced App Features
      - Animations & Advanced UI
    - Month 6: Alternative Stacks: React Native, PWAs & App Backends
      - React Native Introduction
      - Progressive Web Apps (PWA)
      - Backend Development for Apps (Node.js/Express)
      - Testing & Quality Assurance
      - Phase 2 Capstone Project
  - PHASE 3: Native Development & Advanced Topics (Months 7-9, Weeks 27-39)
    Master native iOS and Android development, advanced app features, and platform-specific capabilities.
    - Months 7-8: iOS Development with Swift
      - Swift Programming & iOS Basics
      - UIKit Development
      - SwiftUI (Modern iOS Development)
      - iOS Data & Networking
      - iOS Advanced Features
    - Month 9: Android Development with Kotlin
      - Kotlin Programming & Android Basics
      - Android UI Development
      - Jetpack Compose (Modern Android UI)
      - Android Data & Architecture
      - Android Advanced & Phase 3 Capstone
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Environment setup checklist; Simple 'Hello World' app; App idea documentation; Wireframe sketches (paper); Git repository creation; Calculator logic; Temperature converter; Todo list logic (console); Quiz game logic; BMI calculator logic; Simple games (number guessing); Design system in Figma; App UI mockups (5 different apps); Icon set creation; User flow diagrams - plus 153 more on the course page.

### App Development for Teens: Build Real Apps with React Native

`/courses/complete-app-development-masterclass-for-teens` · 10-12 months (40-48 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Foundations to First App (Months 1-3, Weeks 1-12)
    JavaScript learned properly, interface thinking with React, and the jump to React Native: by the end of this phase an app the student built runs on their own phone.
    - Month 1: How Apps Are Built
      - The App World, Honestly Mapped
      - JavaScript Essentials
      - UI and UX Fundamentals
      - Modern JavaScript
    - Month 2: React and the Backend Taste
      - React Fundamentals
      - State and Navigation Thinking
      - Progressive Web Apps: Ship Before the Stores
      - Firebase: A Backend Without a Server
    - Month 3: React Native, and an App on Your Phone
      - React Native with Expo
      - Core Components and Native Feel
      - Styling and UI Libraries
      - Phase Capstone: First Real App
  - PHASE 2: App Craft (Months 4-6, Weeks 13-24)
    What separates demos from products: data that persists, device features, polish, analytics, store readiness, accessibility and AI features, ending in a polished second app.
    - Month 4: Data and Device Powers
      - State Management and Testing
      - Data That Survives: Storage and Offline
      - Camera, Location and Notifications
      - Builds and Sharing
    - Month 5: The Product Layer
      - Firebase in Depth: Auth and Firestore
      - Animations and Gestures
      - Analytics and Performance, Honestly
      - Store Readiness, Told Straight
    - Month 6: The Modern App
      - AI Features in Your App
      - Accessibility and App Safety
      - An Honest Week of Flutter
      - Phase 2 Capstone: The Polished App
  - PHASE 3: The Wider Craft and the Capstone Build (Months 7-8, Weeks 25-32)
    The map of native development, notifications done right, professional Git workflow, and then the main event: the final capstone designed and built.
    - Month 7: The Wider World
      - The Native Map: Kotlin and Swift, Honestly
      - Push Notifications and Background Work
      - Git and Team Workflow for Apps
      - Mini Product Sprint
    - Month 8: The Capstone, Designed and Built
      - Capstone Spec and Design Sprint
      - Capstone Build
      - User Testing and Iteration
  - PHASE 4: Launch (Months 9-10, Weeks 33-40)
    The last mile real developers respect: hardening, honest distribution, real users, iteration, portfolio, and the final exam at demo day.
    - Month 9: Ship It Properly
      - Hardening Week
      - Distribution, For Real
      - Launch Week
      - Portfolio and Devlog
    - Month 10: The Finale
      - Iteration Sprint
      - Final Polish and Demo Preparation
      - Demo Day and What Comes Next

**Projects students build:** Research and present your favorite app's history; Set up complete development environment; Create your first web-based calculator app; Design your dream app concept (mockup); To-do list app with local storage; Quiz game with score tracking; Weather app using API; Instagram-style photo filter app (basic); Redesign a popular app for better UX; Create complete UI kit in Figma; Design your social media app mockup; Build clickable prototype; Movie database app with TMDB API; Real-time chat app (web version); Music player with Spotify Web API - plus 73 more on the course page.

### App Making for Kids: Build Real Apps with Blocks

`/courses/block-coding-app-development-masterclass` · 6-8 months (26-32 weeks) · Complete beginner, ages 8 to 12

  - THE COURSE: From Logic to Launched-at-Home (Months 1-6, Weeks 1-26)
    Visual programming logic, then real mobile apps built, tested by the family and presented at demo day.
    - Months 1-2: Visual Programming Fundamentals
      - Introduction to Block Coding & Scratch Basics
      - Programming Logic with Blocks
      - Game Development in Scratch
      - Introduction to MIT App Inventor
    - Months 3-4: Mobile App Development
      - Thunkable Platform Mastery
      - Working with Device Features
      - Data Storage and Persistence
      - Advanced UI and User Experience
      - Mid-Course Review and Showcase
    - Months 5-6: Advanced Features & Publishing
      - APIs and Web Services
      - Game Development Advanced
      - AI and Machine Learning Blocks
      - IoT and Hardware Integration
      - Capstone and the Final Exam

**Projects students build:** Animated greeting card; Interactive story with characters; Simple animation sequence; Musical instrument app; Calculator with visual blocks; Quiz game with scoring; Number guessing game; Drawing app with controls; Maze navigation game; Platformer game with jumping; Space shooter with enemies; Puzzle game with levels; Hello World mobile app; Personal information form; Multi-screen navigation app - plus 38 more on the course page.

### Artificial Intelligence Course: Search, Logic & Agents

`/courses/artificial-intelligence-complete-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Classical AI Foundations (Months 1-3, Weeks 1-13)
    Build deep understanding of AI foundations, search algorithms, logic, knowledge representation, and problem-solving.
    - Months 1-2: AI Foundations & Search Algorithms
      - Introduction to Artificial Intelligence
      - Search Algorithms - Part 1 (Uninformed Search)
      - Search Algorithms - Part 2 (Informed/Heuristic Search)
      - Adversarial Search & Game Playing
    - Month 3: Logic & Knowledge Representation
      - Propositional Logic
      - First-Order Logic & Inference
      - Constraint Satisfaction Problems
  - PHASE 2: Reasoning, Planning & Probabilistic AI (Months 4-6, Weeks 14-26)
    Master probabilistic reasoning, planning algorithms, decision theory, and uncertainty management in AI.
    - Months 4-5: Uncertainty & Probabilistic Reasoning
      - Probability Theory for AI
      - Bayesian Networks
      - Markov Models & Temporal Reasoning
      - Decision Theory & Utility
      - Planning Under Uncertainty
    - Month 6: Classical Planning & Knowledge Integration
      - Classical Planning
      - Ontologies & Knowledge Engineering
      - Learning in AI Systems
      - Explanation & Interpretability in AI
      - Phase 2 Capstone Project
  - PHASE 3: Intelligent Systems & Applications (Months 7-9, Weeks 27-39)
    Master expert systems, intelligent agents, robotics, computer vision, NLP, and multi-agent systems.
    - Months 7-8: Expert Systems & Intelligent Agents
      - Expert Systems Architecture
      - Intelligent Agent Architectures
      - Robotics & Embodied AI
      - Computer Vision for AI Systems
      - Natural Language Understanding (AI Perspective)
    - Month 9: Multi-Agent Systems & Collective Intelligence
      - Multi-Agent Systems Fundamentals
      - Game Theory for Multi-Agent AI
      - Swarm Intelligence & Collective Behavior
      - Social AI & Human-AI Interaction
      - Phase 3 Capstone Project
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Simple reflex agent implementation; Model-based agent for grid world; Agent environment simulator; AI timeline and evolution visualization; Turing Test chatbot (rule-based); 8-puzzle solver with BFS/DFS; Maze solver with multiple algorithms; Route finding system (city maps); N-Queens problem solver; Missionaries and Cannibals problem; Search visualization tool; Performance comparison framework; A* pathfinding implementation; 15-puzzle solver with pattern databases; Route optimization with A* - plus 172 more on the course page.

### Backend Development for Teens: Node, APIs and Databases

`/courses/backend-coding-masterclass-for-teens` · 9-11 months (36-44 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Foundations (Months 1-3, Weeks 1-12)
    The internet demystified, JavaScript learned properly, problem-solving sharpened, then the first real servers with Node and Express.
    - Month 1: The Internet and JavaScript
      - How The Internet Actually Works
      - JavaScript Fundamentals - The Language of Backend
    - Month 2: Problem Solving and First Servers
      - Algorithms and Problem Solving
      - Node.js - JavaScript on Servers
    - Month 3: Express and REST Design
      - Express.js - Professional Backend Framework
      - RESTful API Design
  - PHASE 2: Data and Product Features (Months 4-6, Weeks 13-24)
    The features every real product needs: both database families, safe authentication, hardened APIs, and file uploads done properly.
    - Month 4: Databases, Both Families
      - MongoDB - NoSQL for Modern Apps
      - PostgreSQL - Powerful SQL Database
    - Month 5: Auth and Security
      - User Authentication Systems
      - API Security & Best Practices
    - Month 6: Uploads, Media and the Phase Capstone
      - File Uploads & Media Handling
      - Phase 2 Capstone: A Product Backend
  - PHASE 3: Real Systems (Months 7-8, Weeks 25-32)
    What separates demos from systems: live features, background work, tests, and the modern AI-backend layer built with guardrails.
    - Month 7: Live Features and Background Work
      - Real-time Features & WebSockets
      - Background Jobs, Scheduling and Email
    - Month 8: Testing and AI Backends
      - Testing Fundamentals
      - AI Backends and Agent APIs
  - PHASE 4: Ship (Month 9, Weeks 33-36)
    Performance judgment, one honest week of Docker, and the capstone deployed, documented and defended.
    - Month 9: Performance, Docker, Capstone
      - Performance and Monitoring Basics
      - Docker in One Honest Week
      - Capstone Build
      - Demo Day and the Final Exam

**Projects students build:** Draw your favorite app's architecture; Set up your ultimate coding environment; Create your GitHub profile README; Discord bot message generator; Minecraft inventory manager; YouTube stats calculator; Grade calculator with GPA; Build TikTok's recommendation algorithm (simplified); Create a matchmaking system for games; Implement Instagram's hashtag search; Design a tournament bracket system; File-based todo list for homework; Discord webhook notifier; Local multiplayer game server; Meme generator backend - plus 55 more on the course page.

### Build AI Agents with Google Gemini Enterprise

`/courses/build-ai-agents-with-google-gemini-enterprise-course` · 16 classes (2 months · 2 classes/week · 1 hour each) · Intermediate to advanced · working professionals, founders, team leads and developers

  - Phase 1: The Gemini Enterprise Platform
    Map Google's two-sided agent stack, get the right edition and access, learn the anatomy of a Workflow Builder agent, build instruction and testing discipline, and make the model and Skills decisions that shape cost and capability.
    - Class 1: Google's Agent Stack in September 2026 and Where You Build
    - Class 2: Agent Anatomy in Workflow Builder
    - Class 3: Testing Like It Is Already in Production
    - Class 4: Models, Skills and Projects: The Decisions Underneath
  - Phase 2: Knowledge, Connectors and Actions
    Ground agents in Google Workspace and third-party data at scale, understand federated versus indexed sources, give agents actions that write to real systems, add custom MCP servers under Agent Registry governance, and prove accuracy the way an auditor would.
    - Class 5: Grounding Strategy: The Data Store Estate
    - Class 6: Documents, Workspace and Third-Party Knowledge Done Right
    - Class 7: Actions: Agents That Write to Real Systems
    - Class 8: Custom MCP Servers, Agent Registry and the Accuracy Audit
  - Phase 3: Workflows, Autonomy and Multi-Agent Systems
    Build multi-step workflows with triggers, schedules and human approvals, run them from the Inbox, compose sub-agents and Agent Gallery agents, register agents over A2A and A2UI, then cross to the pro-code side: ADK, Agent Runtime, Agent Identity and Model Armor.
    - Class 9: Workflows: Deterministic Automation with a Human in the Loop
    - Class 10: Triggers, Schedules and Hardened Autonomy
    - Class 11: Multi-Agent Systems: Sub-Agents, the Agent Gallery, A2A and A2UI
    - Class 12: The Pro-Code Bridge: ADK, Agent Runtime, Agent Identity and Model Armor
  - Phase 4: Observability, Cost, Governance and Capstone
    Prove agents work and know what they cost: tracing and metrics, seat and pay-as-you-go economics, data residency and policy controls, the Professional Agentic Architect exam map, then a production capstone defended with its governance and cost pack.
    - Class 13: Observability: Traces, Metrics and the Improvement Loop
    - Class 14: Cost: Seats, Pay-As-You-Go, Overage and Runtime Metering
    - Class 15: Governance: Residency, Policy Constraints, Content Policies and the Certification Map
    - Class 16: Capstone Build and Defence

**Projects students build:** Write your organisation's one-page agent opportunity memo: three candidate processes, the data and systems each needs, the risks each carries, the edition it requires, and the one that becomes your capstone; Build Policy Desk v1: an internal chat agent for one real policy area of your organisation, with a complete instruction stack, five tested refusals and a designed hand-off to a human; Build the permanent 25-question test set for Policy Desk, including five adversarial probes, and run it end to end in the testing environment with verdicts logged; Run your Policy Desk test set against two Gemini models, score the differences, and write the model decision with evidence attached; then package the agent's reusable behaviour as a Skill and put its source documents in a Project; Ground Policy Desk in a real Google Drive or SharePoint source (or a mirrored practice copy) and prove ten answers cite the correct document and passage; Rebuild one messy real document into a retrieval-optimised version, ground both versions side by side, and publish the before-and-after accuracy comparison; then add a second, structured source and document the arbitration behaviour with five conflict questions; Build Support Triage v1: a chat agent that collects an issue, searches the right knowledge, and creates the ServiceNow incident or Jira issue (or posts to the right Slack channel) with a confirmation step and tested failure messages; Connect one custom MCP server to a practice agent with only the tools you need enabled and a one-page security note, then run the full 25-answer accuracy audit on Policy Desk and publish the result with methodology and a remediation list; Build Expense Helper: a workflow that collects an expense claim, validates it against policy, pauses for a manager's approval, files the result in the right system and reports back, with tested error paths for every step; Build Weekly Reporter: a scheduled workflow that compiles a weekly status summary from real sources, drafts it into a Google Doc, and posts it for review, never directly to stakeholders; then harden it with an approval pause, an error diary and a self-report of its own actions; Refactor Support Triage into a two-agent design: a routing agent plus a specialist sub-agent, with documented hand-off contracts and a failure-mode table; then register an external A2A agent and delegate one task to it; Build and run a small ADK agent in Python that wraps one tool your capstone needs, deploy it to Agent Runtime, register it in Gemini Enterprise, and call it from a Workflow Builder agent; document the identity and Model Armor settings you applied; Observability sprint: run one agent with at least five real users for a week, review its traces and metrics, ship two data-demanded improvements, and write the before-and-after with p95 latency and error rate on the page; Build the complete cost model for your capstone: edition recommendation, seat count, pay-as-you-go versus seats comparison, Agent Runtime line if any, overage cap, and a monthly projection at three adoption levels; Write the governance pack for your capstone: region and residency decision, organisation policy and content policy plan, identity and sharing plan, Agent Registry entries, compliance notes, and the rollout runbook with rollback - plus 1 more on the course page.

### Business & Finance Mathematics: Investment to Risk

`/courses/complete-business-finance-mathematics-mastery` · 12-14 months (52-60 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Business Mathematics Foundations (Weeks 1-13)
    Build rock-solid foundations in business calculations, financial mathematics, and accounting principles. Master the mathematical tools used daily in business.
    - Months 1-2: Core Business Mathematics
      - Percentages & Business Applications
      - Time Value of Money Fundamentals
      - Annuities & Loan Mathematics
      - Business Ratios & Analysis
    - Month 3: Accounting Mathematics & Cost Analysis
      - Accounting Mathematics Fundamentals
      - Cost Accounting & Budgeting
      - Phase 1 Assessment & Integration
  - PHASE 2: Statistical Analysis and Economic Mathematics (Weeks 14-26)
    Master statistical methods for business decision-making, economic analysis, and financial forecasting.
    - Months 4-5: Business Statistics & Analytics
      - Descriptive Statistics for Business
      - Probability in Business Decisions
      - Regression & Predictive Analytics
      - Hypothesis Testing for Business
      - Time Series Analysis
    - Month 6: Economic & Market Mathematics
      - Microeconomic Mathematics
      - Macroeconomic Mathematics
      - Financial Markets Mathematics
      - International Finance Mathematics
      - Phase 2 Capstone Project
  - PHASE 3: Investment Mathematics and Risk Management (Weeks 27-39)
    Master investment analysis, portfolio management, risk assessment, and corporate finance decisions.
    - Months 7-8: Investment Analysis & Valuation
      - Equity Valuation Mathematics
      - Fixed Income Mathematics
      - Portfolio Theory & Optimization
      - Performance Measurement & Attribution
      - Alternative Investments Mathematics
    - Month 9: Risk Management & Insurance
      - Risk Measurement & Modeling
      - Insurance Mathematics
      - Operational & Market Risk
      - Regulatory Capital & Compliance
      - Phase 3 Integration & Assessment
  - PHASE 4: Advanced Finance and Final Revision (Weeks 40-52)
    Master derivatives pricing, quantitative finance, financial modeling, and advanced corporate finance.
    - Month 10: Derivatives & Structured Products
      - Options Mathematics
      - Futures & Forwards
      - Swaps & Interest Rate Derivatives
      - Credit Derivatives & Structured Finance
      - Volatility & Advanced Greeks
    - Month 11: Quantitative Finance and Modelling
      - Financial Modeling Excellence
      - Algorithmic Trading Mathematics
      - Corporate Finance Advanced
    - Month 12: Professional Applications and Revision
      - Industry Case Studies
      - Financial Technology Tools
    - Month 13: Final Projects & Certification
      - Capstone Project - Part 2 & Presentation
      - Final Assessment & Certification

**Projects students build:** Profit margin calculator for business; Sales commission tracker; Break-even analysis tool; Compound interest calculator; Investment growth simulator; Currency converter with live rates; Loan amortization calculator; Mortgage comparison tool; Retirement planning calculator; Financial ratio analyzer; Company comparison dashboard; Industry benchmark tool; Depreciation schedule generator; Inventory management calculator; Cash flow statement builder - plus 96 more on the course page.

### C Programming for Beginners: Pointers, Memory & Structs

`/courses/c-programming-course-for-college-beginners` · 6 months (24 weeks) · Beginner, college students and first-year engineers

  - PHASE 1: The Language Core and the Machine (Months 1-2, Weeks 1-8)
    C fundamentals built on honest ground: what the compiler does, what types really are, and how functions and the call stack work, so the pointer month lands on solid footing.
    - Month 1: From Source Code to Executable
      - Hello, Compiler
      - Types, Variables, and Their Limits
      - Operators and Control Flow
      - Loops
    - Month 2: Functions and the Call Stack
      - Functions Done Properly
      - Scope, Storage, and the Stack
      - Recursion
      - Multi-File Programs and the Build
  - PHASE 2: Pointers and Memory, Taught Properly (Months 3-4, Weeks 9-16)
    The month most courses rush is the month this course is named for: pointers with a memory diagram for every operation, then dynamic memory, the heap, and structs, including the famous bugs made visible.
    - Month 3: Pointers, One Diagram at a Time
      - Addresses and the & Operator
      - Pointers and Functions
      - Arrays and Pointer Arithmetic
      - Strings at the Memory Level
    - Month 4: The Heap, Dynamic Memory, and Structs
      - malloc and the Heap
      - Dynamic Arrays and the Famous Bugs
      - Structs
      - Structs Meet the Heap
  - PHASE 3: C at Work: Files, Data Structures, and the Capstone (Months 5-6, Weeks 17-24)
    The skills become systems: file handling, linked lists, stacks, queues, and sorting built from raw structs and malloc, a grounded look at where C runs in industry, and a capstone project compiled and defended.
    - Month 5: File Handling and Data Structures from Scratch
      - File Handling
      - Linked Lists
      - Stacks and Queues
      - Searching, Sorting, and Function Pointers
    - Month 6: Systems Context and the Capstone
      - Where C Runs: Bits, Kernels, and Microcontrollers
      - Capstone: Scope and Foundations
      - Capstone: Build and Review
      - Ship and Defend

**Projects students build:** Banner program: compile, break, and fix a program five different ways to learn the error messages early; Limits explorer: a program that prints the size and range of every basic type on your machine; Grade and tax calculator: branching logic with real edge cases, negative inputs, and boundary values; Pattern engine: pyramids, diamonds, and number triangles from nested loops; Prime and perfect number finder with a hand-traced dry run submitted alongside the code; Number theory library: gcd, lcm, prime check, and digit sum as clean reusable functions in their own file; Stack tracer: a set of nested function calls with a hand-drawn stack diagram matched against actual output; Recursive toolkit: power, GCD, decimal-to-binary, and Tower of Hanoi with move printing; Unit converter suite: a menu-driven multi-file program with separate modules for length, weight, and temperature; Memory mapper: a program that prints the address and value of every variable it owns, matched to a hand-drawn diagram; Statistics engine: one function that fills min, max, and mean through pointer parameters from a single pass; Array toolkit: reverse, rotate, and search implemented twice, once with indices and once with pointers; mini_string.h: your own implementation of five standard string functions, tested against the real library; Runtime array: a program that asks the user how much data is coming, allocates exactly that, and cleans up properly; Growable list: a dynamic array module with append, insert, and remove that survives a sanitizer run cleanly - plus 10 more on the course page.

### C++ for Kids: First Real Code, Games and Puzzles (Ages 9-12)

`/courses/cpp-programming-for-kids-course` · 6 months (24 weeks) · Complete beginner to text coding, ages 9 to 12

  - PHASE 1: First Programs (Months 1-2, Weeks 1-8)
    From what a program is to loops that draw patterns and run games. Every concept is shown on paper first, then typed, run and changed.
    - Month 1: Hello, C++
      - Weeks 1-2: What Code Is and Your First Program
      - Weeks 3-4: Variables, Input and Arithmetic
    - Month 2: Decisions and Loops
      - Weeks 5-6: If, Else and Making Choices
      - Weeks 7-8: Loops That Repeat
  - PHASE 2: Building Blocks (Months 3-4, Weeks 9-16)
    The tools that let programs grow without getting messy: functions, lists, text and grouped data, each taught inside a small game or tool.
    - Month 3: Functions and Vectors
      - Weeks 9-10: Functions
      - Weeks 11-12: Lists with Vectors
    - Month 4: Strings and Structs
      - Weeks 13-14: Working with Text
      - Weeks 15-16: Grouping Data with Structs
  - PHASE 3: Games and Puzzles (Months 5-6, Weeks 17-24)
    Everything comes together in bigger text games, grid puzzles and the short problem-solving tasks used in programming contests, ending with a capstone each child designs.
    - Month 5: Bigger Games
      - Weeks 17-18: Random Numbers and a Text Adventure
      - Weeks 19-20: Grids and Nested Loops
    - Month 6: Contest Puzzles and the Capstone
      - Weeks 21-22: Thinking Like a Problem Solver
      - Weeks 23-24: Capstone Project and Showcase

**Projects students build:** Name banner: a program that prints a decorated banner with the student's name and favourite things; Pocket calculator and age-in-days converter that ask the user for numbers and print answers; Quiz show: a five-question quiz that keeps score and gives a message based on the result; Times-table trainer and a number guessing game that says higher or lower until the player wins; Shape helper: functions that draw squares and triangles and work out area and perimeter; High score board: enter scores, sort them and print the top five with medals beside them; Secret code machine: a shift cipher that encodes and decodes messages between friends; Virtual pet: a pet that gets hungry and bored over time and responds to feeding and play commands; Dungeon adventure: a text adventure with rooms, random encounters, an inventory and a win condition; Tic-tac-toe for two players and a maze game where the player finds the exit; Puzzle notebook: eight short contest-style problems solved, each with a sentence on the idea behind it; Capstone: an original game or tool planned, built and presented by the student.

### C++ for Teens: Fundamentals, STL, DSA and Real Games

`/courses/cpp-programming-masterclass-for-teens` · 10-12 months (40-48 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Fundamentals (Months 1-3, Weeks 1-12)
    The language learned patiently: syntax, control flow, loops, functions, arrays and strings, each week ending with working programs.
    - Month 1: First C++
      - Introduction to C++ & Programming
      - Variables & Data Types
    - Month 2: Control and Repetition
      - Control Flow & Decision Making
      - Loops & Repetition
    - Month 3: Functions, Arrays and Strings
      - Functions - Code Reusability
      - Arrays & Strings
  - PHASE 2: The Hard Beautiful Parts (Months 4-6, Weeks 13-24)
    What makes C++ C++: pointers and references with pictures, dynamic memory without fear, object-oriented design, files, and the first taste of the STL.
    - Month 4: Pointers and Memory
      - Pointers & References
      - Dynamic Memory Management
    - Month 5: Objects and Inheritance
      - Object-Oriented Basics: Classes and Objects
      - Inheritance & Polymorphism
    - Month 6: Files, Errors and First STL
      - File Input/Output
      - STL Basics - Standard Template Library
  - PHASE 3: Data Structures in C++ (Months 7-8, Weeks 25-32)
    The serious core, built by hand in the language it was invented for: linear structures, trees and graphs, sorting, and STL depth.
    - Month 7: Structures by Hand
      - Linear Data Structures
      - Trees & Graphs
    - Month 8: Algorithms and STL Depth
      - Algorithms - Searching & Sorting
      - STL Containers Deep Dive
  - PHASE 4: Games, Contests and the Capstone (Months 9-10, Weeks 33-40)
    C++ made visible and competitive: a real SFML game, contest foundations, modern C++ habits, and the capstone exam.
    - Month 9: SFML and First Contests
      - 2D Graphics with SFML
      - Competitive Programming Foundations
    - Month 10: Modern C++, Capstone, Demo Day
      - Modern C++: Smart Pointers and Clean Habits
      - Capstone Build
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations; ASCII art generator; Personal introduction program; Simple conversation bot; Calculator with all operations; Temperature converter; Random dice roller for D&D; Simple RPG stat calculator; Text adventure game; Grade calculator with letter grades; Rock-Paper-Scissors game; Simple AI decision maker; Pattern generator program; Prime number finder; Multiplication table generator - plus 63 more on the course page.

### C++ Masterclass: Fundamentals to Modern C++ and Systems

`/courses/cpp-programming-complete-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: C++ Fundamentals & Object-Oriented Programming (Months 1-3, Weeks 1-13)
    Build rock-solid foundations in C++ syntax, memory management, pointers, and object-oriented programming principles.
    - Months 1-2: C++ Basics & Core Concepts
      - Introduction to C++ & Development Environment
      - Variables, Data Types & Operators
      - Control Flow & Functions
      - Arrays, Strings & Pointers
    - Month 3: Object-Oriented Programming
      - Classes and Objects
      - Inheritance and Polymorphism
      - Operator Overloading & Advanced OOP
  - PHASE 2: STL, Templates & Modern C++ (Months 4-6, Weeks 14-26)
    Master the Standard Template Library, template programming, and modern C++ features.
    - Months 4-5: STL Mastery
      - STL Containers
      - STL Algorithms
      - Template Programming
      - Modern C++ Features (C++11/14/17/20)
      - Error Handling & Exception Safety
    - Month 6: Data Structures & Algorithms
      - Advanced Data Structures
      - Algorithm Design & Analysis
      - Performance Optimization
      - Competitive Programming
      - Phase 2 Capstone Project
  - PHASE 3: System Programming & Concurrency (Months 7-9, Weeks 27-39)
    Master system-level programming, multithreading, networking, and low-level development.
    - Months 7-8: System Programming
      - Operating System Interface
      - Memory Management Deep Dive
      - Multithreading & Concurrency
      - Network Programming
      - Database Systems Programming
    - Month 9: Advanced System Topics
      - Compiler Design & Tools
      - Embedded Systems Programming
      - Security Programming
      - Graphics Programming Basics
      - Phase 3 Capstone Project
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations; Simple calculator with basic operations; Temperature converter; Personal information display program; Advanced calculator with bitwise operations; Data type size explorer; Number system converter (binary, decimal, hex); Bitwise flag management system; Menu-driven banking system; Number guessing game; Prime number generator; Recursive factorial and Fibonacci calculator; Pattern printing programs; Dynamic array implementation; String manipulation library - plus 120 more on the course page.

### Cambridge AS and A Level Computer Science 9618 Course

`/courses/cambridge-a-level-computer-science-9618-course` · 9 months (36 weeks) for the full A Level, joinable any month · Cambridge AS and A Level students on 9618; an IGCSE Computer Science background helps but is not required

  - PHASE 1: AS Theory Fundamentals, Paper 1 (Months 1-3)
    Sections 1 to 8 of the syllabus: how data is represented, how the machine works, and the vocabulary Paper 1 marks against.
    - Month 1: Information Representation and Hardware
      - Number Systems and Data Representation
      - Images, Sound and Compression
      - Computer Architecture and the Processor
      - Input, Output and Storage
    - Month 2: Networks, the Internet and Security
      - Networks and Topologies
      - Security, Privacy and Data Integrity
      - Ethics, Ownership and Legal Context
      - Databases and Data Modelling
    - Month 3: Paper 1 Technique and Full Papers
      - Command Words and Mark Schemes
      - Boolean Logic and Logic Circuits
      - Full Paper 1, Marked and Reviewed
      - Targeted Repair on Sections 1 to 8
  - PHASE 2: Paper 2, Reasoning About Programs Without Writing Them (Months 4-6)
    Sections 9 to 12. The paper that states candidates will not be required to write programming code, and supplies an Insert of pseudocode built-in functions. A separate discipline from Paper 4, and taught as one.
    - Month 4: Algorithm Design and Cambridge Pseudocode
      - Pseudocode as the Language of This Paper
      - Structure Charts, Flowcharts and Decomposition
      - Trace Tables and Predicting Output
      - Standard Algorithms and Data Structures
    - Month 5: Programming Concepts Without Code
      - Subroutines, Parameters and Scope
      - File Handling and Exception Handling
      - Software Development Life Cycle
      - Full Paper 2, Marked and Reviewed
    - Month 6: AS Level Consolidation
      - Both AS Papers Together
      - Cross-Topic Questions
      - Second Full AS Set
      - AS Readiness
  - PHASE 3: A Level Papers 3 and 4 (Months 7-9)
    Sections 13 to 20. Advanced theory, and then the practical paper where program code and evidence of testing are submitted.
    - Month 7: Advanced Theory, Paper 3
      - Data Representation and Communication, Extended
      - Hardware, Virtual Machines and Operating Systems
      - Security, Artificial Intelligence and Emerging Content
      - Advanced Algorithms and Data Structures
    - Month 8: Paper 4 Practical, Sections 19 to 20
      - From Pseudocode to Working Code
      - Object-Oriented Programming
      - Files, Data Structures and Recursion in Practice
      - Evidence of Testing
    - Month 9: All Four Papers
      - Full Paper 3 Under Time
      - Full Paper 4 Under Time
      - Second Full Set of Both
      - Exam Readiness

### Canva and AI Design Course (13+): Real Graphic Design Skills

`/courses/canva-ai-design-masterclass` · 6-8 months (26-32 weeks) · Beginner friendly, ages 13 to adult

  - PHASE 1: Design Foundations (Months 1-2, Weeks 1-8)
    The principles that separate design from decoration: hierarchy, spacing, color and typography, practiced through daily Canva builds.
    - Months 1-2: Principles into Practice
      - Introduction to Design & Canva Setup
      - Design Principles & Composition
      - Typography & Color Theory
      - Canva Advanced Features & Templates
  - PHASE 2: Social and Marketing Design (Months 3-4, Weeks 9-17)
    The formats the world actually runs on: posts, carousels, stories, decks and posters, plus one small real brand built end to end.
    - Months 3-4: Formats and a Real Brand
      - Social Media Design Mastery
      - Marketing Materials & Print Design
      - Logo Design & Brand Identity
      - Photo Editing & Manipulation
      - Phase Review and Brand Showcase
  - PHASE 3: AI-Assisted Design (Month 5, Weeks 18-21)
    The honest AI layer: Canva Magic Studio and Adobe Firefly used to accelerate real work, with photo editing craft and credit habits.
    - Month 5: Magic Studio and Firefly
      - AI Design Tools, Age-Legal and Honest
      - Photo Editing and Compositing
  - PHASE 4: Video and the Finale (Month 6, Weeks 22-26)
    Short-form video design in Canva, then the portfolio capstone and the final exam that decides the certificate.
    - Month 6: Motion, Portfolio, Exam
      - Short-Form Video Design
      - Portfolio Capstone
      - Demo Day and the Final Exam

**Projects students build:** Create personal introduction card; Design simple social media post; Make basic business card; Redesign poorly designed flyer; Create balanced poster design; Design minimalist quote graphics; Build visual hierarchy infographic; Typography poster with font hierarchy; Brand color palette creation; Mood board with color themes; Restaurant menu with proper typography; Complete brand kit setup; Create reusable template set; Design animated social media post; Multi-page presentation design - plus 33 more on the course page.

### CBSE Class 10 Maths Board Prep: Case Studies & Mocks

`/courses/cbse-class-10-maths-board-exam-prep-course` · 10 months (40 weeks) · CBSE Class 10 students, Standard (041) and Basic (241)

  - PHASE 1: Number Systems and Algebra (Months 1-3, Weeks 1-12)
    The heaviest unit first. Algebra alone carries 20 of the 80 theory marks, and with Real Numbers this phase covers 26. Every chapter closes with board-style MCQ and case-study practice.
    - Month 1: Real Numbers and Polynomials
      - Weeks 1-2: Real Numbers
      - Weeks 3-4: Polynomials
    - Month 2: Pair of Linear Equations and Quadratic Equations
      - Weeks 5-6: Pair of Linear Equations in Two Variables
      - Weeks 7-8: Quadratic Equations
    - Month 3: Arithmetic Progressions and Algebra Consolidation
      - Weeks 9-10: Arithmetic Progressions
      - Weeks 11-12: Algebra Unit Under Board Conditions
  - PHASE 2: Geometry, Coordinate Geometry and Trigonometry (Months 4-6, Weeks 13-24)
    The proof-and-figure half of the paper: 33 marks across Geometry, Coordinate Geometry and Trigonometry, where drawing the figure and showing the steps is most of the battle.
    - Month 4: Triangles and Coordinate Geometry
      - Weeks 13-14: Triangles and Similarity
      - Weeks 15-16: Coordinate Geometry
    - Month 5: Trigonometry and Its Applications
      - Weeks 17-18: Introduction to Trigonometry
      - Weeks 19-20: Heights and Distances
    - Month 6: Circles and the Half-Syllabus Checkpoint
      - Weeks 21-22: Circles and Tangents
      - Weeks 23-24: Half-Syllabus Mock and Review
  - PHASE 3: Mensuration, Statistics and Probability (Months 7-8, Weeks 25-32)
    The final 21 marks of new content: areas related to circles, combined solids, grouped data and probability, all heavy with the data-interpretation forms the competency questions love.
    - Month 7: Areas Related to Circles and Combined Solids
      - Weeks 25-26: Areas Related to Circles
      - Weeks 27-28: Surface Areas and Volumes
    - Month 8: Statistics and Probability
      - Weeks 29-30: Statistics of Grouped Data
      - Weeks 31-32: Probability and the Content Finish Line
  - PHASE 4: Revision and the Mock Cycle (Months 9-10, Weeks 33-40)
    No new content, on purpose. Structured revision by unit, then CBSE sample papers and previous-year papers under real timing, each followed by an error clinic.
    - Month 9: Structured Revision
      - Weeks 33-34: Algebra and Number Systems Revisited
      - Weeks 35-36: Geometry, Trigonometry and the Data Chapters Revisited
    - Month 10: The Mock Cycle
      - Weeks 37-38: Sample Papers Under Real Timing
      - Weeks 39-40: Final Mocks and Exam Craft

**Projects students build:** Chapter question bank entry: 15 solved board-style questions on real numbers, built and kept by the student; Graph-reading sheet: 8 polynomial graphs interpreted for number and sign of zeros; Word-problem translation drill: 10 situations converted to equation pairs before any solving; Chapter question bank entry: 15 solved board-style quadratics including 2 case studies; AP situations sheet: 8 real-life progressions identified, with first term and difference extracted; Personal error log formalised: every phase 1 test miss classified as concept, method or presentation; Proof portfolio started: BPT and two similarity applications written to full board standard; Chapter question bank entry: 12 solved coordinate geometry questions across all board formats; Identity toolkit card: the identities plus the five standard proof moves, in the student's own words; Figure-first drill set: 10 heights and distances problems where the marked figure is drawn before any calculation; Proof portfolio extended: both tangent theorems plus two applications written in full; Half-syllabus mock with a written self-review: three strengths, three fixes, one habit to change; Combination-figure sheet: 8 shaded-region problems with the decomposition drawn before any formula; Solid dissection cards: 6 combined solids sketched, split into parts, with the joining surfaces marked; Data study: the student collects a real dataset from home or school, groups it and computes all three measures - plus 5 more on the course page.

### CBSE Computational Thinking & AI for Kids (Class 3-8)

`/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8` · 9-12 months (40-52 weeks) · Absolute Beginner (Class 3-5) to Intermediate AI Project Builder (Class 6-8)

  - PHASE 1: Computational Thinking Foundations (Months 1-3, Weeks 1-13), Aligned to CBSE Classes 3-5
    Build the four pillars of Computational Thinking, Decomposition, Pattern Recognition, Abstraction and Algorithms, through unplugged activities, games, storytelling and block coding. No prior coding or computer experience required. Perfect for CBSE Classes 3, 4 and 5 students.
    - Month 1: The Four Pillars of Computational Thinking (Unplugged + Intro to Scratch)
      - Introduction to Computational Thinking & Why It Matters
      - Decomposition, Breaking Big Problems Into Small Ones
      - Pattern Recognition, The Secret Skill of Scientists
      - Abstraction & Algorithms, Recipes for Computers
    - Month 2: First Coding with Scratch, Where CT Meets Computers
      - Welcome to Scratch, The Block Coding Playground
      - Events, Loops & Repeat, Making Programs Powerful
      - Decisions, Conditions & Interactive Stories
      - First Mini Capstone: Build Your Own Scratch Game
    - Month 3: What is AI?, Your First Encounter with Artificial Intelligence
      - AI All Around Us, Seeing AI Everywhere
      - How Does AI 'See', Introduction to Computer Vision
      - How Does AI 'Listen & Talk', Natural Language & Speech
      - Introduction to the CBSE AI Project Cycle (4Ws & Beyond)
      - Phase 1 Capstone, Your First AI-Assisted Project
  - PHASE 2: AI Builder Track (Months 4-6, Weeks 14-26), Aligned to CBSE Classes 6-8
    Dive deep into Artificial Intelligence with the official CBSE Classes 6-8 AI curriculum. Master the full AI Project Cycle, explore all three domains of AI (Data, Computer Vision, Natural Language Processing), begin Python programming, and build real AI-powered applications that solve real-world problems.
    - Month 4: Mastering the CBSE AI Project Cycle
      - Problem Scoping & Data Acquisition (Deep Dive)
      - Data Exploration & Visualization
    - Month 5: AI Domains, Data, Computer Vision, NLP
      - Data Science, Teaching Computers to Predict
      - Computer Vision, Deep Dive
      - Natural Language Processing, Making Machines Understand Us
      - AI Ethics, Bias & Responsible AI (core CBSE AI themes)
    - Month 6: Modelling & Evaluation + First Python Steps
      - Modelling, How Machines Learn
      - Evaluation & Deployment
      - Introduction to Python for AI (CBSE Class 8 Transition)
      - Phase 2 Capstone, End-to-End AI Project
  - PHASE 3: Young AI Creator Track (Months 7-8, Weeks 27-34)
    Advance beyond the CBSE Class 6-8 level into true AI project creation. Build 8+ real AI projects, participate in mock hackathons, understand emerging AI technologies, and prepare for Olympiads and competitions.
    - Month 7: Advanced AI Tools & Projects
      - Generative AI for Kids, Safe Exploration
      - Robotics & AI, Bringing AI to the Real World
      - AI for Sustainable Development Goals (SDGs)
      - App-Based AI Projects with MIT App Inventor
    - Month 8: Mini-Hackathon & Olympiad Prep
      - Competition Preparation & Mini-Hackathon
      - AI Olympiad & CBSE Competition Preparation
  - PHASE 4: Mastery & Transition (Month 9, Weeks 35-40)
    Final capstone project, portfolio creation, CBSE AI Class 9 (Code 417) readiness test, and graduation ceremony.
    - Month 9: Capstone, Portfolio & Certification
      - Grand Capstone Project (Full AI Lifecycle)
      - Portfolio, LinkedIn (with parental guidance) & Public Showcase
      - CBSE AI Class 9 (Code 417) Readiness Test & Beyond
      - Graduation & Final Showcase

**Projects students build:** Create a 'How I Get Ready for School' step-by-step poster; Break down making Maggi into 10 precise steps (Decomposition); CT Thinking Diary, daily entries for a week; Decompose your favorite board game into its smallest rules; Plan a pretend birthday party using only decomposition; Create a decomposition poster for any Class subject; Pattern hunt journal, photograph 20 patterns around you; Design a Rangoli using mathematical patterns; Create a pattern-based memory game; Write the 'Perfect Algorithm' for making your favorite food; Design a flowchart adventure story; Program your family to be 'robots' and follow your algorithm; Animated birthday card for a family member; Dancing cat in 5 different backgrounds; Digital storybook cover with your name - plus 75 more on the course page.

### CBSE Computational Thinking & AI for Teens (Class 9-12)

`/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843` · 12-14 months (48-56 weeks), or the full Class 9-12 board track · Complete Beginner to CBSE AI Board Topper + Industry-Ready AI Developer

  - PHASE 1: CBSE AI Foundation (Code 417 syllabus, Months 1-3, Weeks 1-13)
    Complete mastery of the CBSE AI 417 syllabus - Employability Skills, Introduction to AI, AI Project Cycle basics, Neural Networks and Python for AI. This is the Class 10 board syllabus, and the right foundation for a Class 9 student now that CBSE has discontinued AI 417 at Class 9. Every student builds a rock-solid foundation regardless of prior coding experience.
    - Month 1: Employability Skills + Introduction to AI (CBSE Unit 1-3)
      - Employability Skills Part 1: Communication & Self-Management (CBSE Mandatory Unit)
      - Employability Skills Part 2: ICT, Entrepreneurial & Green Skills
      - Introduction to Artificial Intelligence (CBSE Unit 1, Subject Specific)
      - AI Project Cycle, Deep Dive (CBSE Core Unit)
    - Month 2: Python Programming for AI (CBSE Unit 3)
      - Python Basics (CBSE-aligned + Industry Level)
      - Python Control Flow & Data Structures
      - NumPy & Pandas, Data Handling for AI (CBSE Class 11 AI Unit)
      - Data Visualization, Matplotlib, Seaborn (CBSE Class 11 AI)
    - Month 3: AI Domains Deep Dive + Neural Networks Intro (CBSE Class 10)
      - Data Science Domain (CBSE Class 10 Unit 4)
      - Computer Vision Domain (CBSE Class 10 Unit 5)
      - Natural Language Processing Domain (CBSE Class 10 Unit 6)
      - Neural Networks Introduction (CBSE Class 10 Unit 7)
      - CBSE Class 9-10 AI Board Practical File + Viva Prep
  - PHASE 2: CBSE Class 10 AI (417) Board Mastery + Advanced Projects (Months 4-6, Weeks 14-26)
    Complete the CBSE Class 10 AI (Code 417) board syllabus mastery with extensive project work, practical file completion, mock exams, and competition preparation. Build 20+ industry-grade projects.
    - Month 4: Advanced Data Science Projects
      - End-to-End Data Science Projects
      - Advanced Computer Vision Projects
    - Month 5: Advanced NLP + Generative AI
      - Advanced NLP & Chatbot Engineering
      - Generative AI & Prompt Engineering (2026-27 CBSE emerging topic)
    - Month 6: CBSE Class 10 Board Final Prep + Capstone
      - CBSE Class 10 AI Board Full Revision + Sample Papers
      - Class 10 Grand Capstone + Practical File Completion
      - Mock Board Exam + Competition Launch
  - PHASE 3: CBSE Class 11 AI (Code 843), Machine Learning Deep Dive (Months 7-9, Weeks 27-39)
    Complete CBSE Class 11 Artificial Intelligence (Subject Code 843) syllabus with industry-grade ML engineering skills. Includes Capability Approach, Sustainable Development, Foundational Python, Data Visualization, AI Frameworks, Statistical Data, Computer Vision, Storytelling through Data.
    - Month 7: CBSE AI 843 Class 11 Units 1-4
      - Capability Approach + Sustainable Development (CBSE AI 843 Unit 1)
      - Communication Skills + AI Review + Python Foundation (CBSE Units 2-3)
      - Data Literacy, Data Visualization & Statistical Data (CBSE Unit 4)
    - Month 8: CBSE AI 843 Class 11 Units 5-7 (Frameworks, CV, ML)
      - AI Frameworks & Tools (CBSE Class 11 Unit 5)
      - Computer Vision Advanced (CBSE Class 11 Unit 6)
      - Machine Learning Algorithms Mastery (CBSE Unit 7)
    - Month 9: Class 11 AI Board Prep + Storytelling + Competitions
      - Storytelling Through Data (CBSE Class 11 Unit 8)
      - Class 11 AI Board Revision + Pre-Board
      - Class 11 Capstone + Competition Deployment
  - PHASE 4: CBSE Class 12 AI (843), Deep Learning, NLP, Career Launch (Months 10-12, Weeks 40-52)
    Complete CBSE Class 12 AI (Code 843) syllabus including Capstone Project, Data Science, CV, NLP, Model Evaluation, AI Ethics. Parallel industry-grade Deep Learning, Transformers, LLMs, and career-launch for college + internships.
    - Month 10: CBSE Class 12 AI Units 1-4
      - Communication Skills Advanced + Self-Mgmt + Entrepreneurship (CBSE Units 1-2)
      - Capstone Project (CBSE Class 12 Unit 3), Official Board Project
      - Data Science Advanced + Statistical ML (CBSE Class 12 Unit 4)
    - Month 11: Deep Learning + Transformers + LLMs (CBSE Units 5-6 Extended)
      - Deep Learning Mastery, CNNs, RNNs, LSTMs (CBSE Class 12 Unit 5)
      - Transformers, LLMs & Modern AI (CBSE Class 12 Unit 6 extended)
    - Month 12: CBSE Class 12 Board Finals + Career Launch
      - CBSE Class 12 AI Board Revision + Pre-Board
      - Final Board Readiness + Viva Mastery
      - College, Internship & Career Launch
      - Graduation & Final Showcase

**Projects students build:** Write a 500-word reflective essay on 'AI in my life'; Create a SMART goals worksheet for the AI course; Group presentation: 'Barriers to communication in AI teams'; Set up a cloud backup of your AI work (Google Drive); Interview a local entrepreneur (1-page report); Green AI poster, connect 3 SDGs to AI; AI Spotter, identify 50 AI systems in daily life; AI Timeline infographic (Canva); Debate: 'Narrow AI vs General AI, will we ever reach AGI?'; Apply the full 5-stage Project Cycle to a real school problem; Write a 10-page CBSE-format AI Project Report; Present project in board-exam viva style; BMI Calculator; Temperature converter; Interactive quiz on AI concepts - plus 66 more on the course page.

### CCC Junior and Senior Preparation (Canadian Computing Competition)

`/courses/ccc-junior-and-senior-preparation-course` · A 24-week season, September to the CCC on Wednesday, February 17, 2027, joinable any month · Students roughly aged 13 to 18 who can write simple programs (Junior track) or are confident programmers ready for algorithms (Senior track)

  - PHASE 1: The Shared Core (September and October, Weeks 1-8)
    Everything both tracks need: precise reading, exact input and output, and the loops, conditions, strings, lists and counting that the first CCC questions are built on.
    - Month 1: Contest Setup, Input and Output, Loops and Conditions
      - Weeks 1-2: How the CCC Works and First Problems
      - Weeks 3-4: Strings, Lists and Simple Counting
    - Month 2: Grids, Functions and First Ideas of Efficiency
      - Weeks 5-6: Two-Dimensional Grids and Functions
      - Weeks 7-8: How Fast Is Fast Enough?
  - PHASE 2: Junior and Senior Tracks (November and December, Weeks 9-16)
    The tracks run in parallel in separate batches. Junior students build toward the hardest Junior question; Senior students build the algorithm families the Senior paper rewards.
    - Months 3-4, Junior Track: From Counting to Recursion and Efficient Algorithms
      - Weeks 9-10: Junior Questions 3 and 4 Skills
      - Weeks 11-12: Two-Dimensional Arrays in Depth
      - Weeks 13-14: Recursion
      - Weeks 15-16: Efficient and Insightful Algorithms
    - Months 3-4, Senior Track: Sorting, Searching, Counting, Graphs and Dynamic Programming
      - Weeks 9-10: Sorting and Searching
      - Weeks 11-12: Careful Counting and Mathematical Reasoning
      - Weeks 13-14: Graphs
      - Weeks 15-16: Dynamic Programming and the Hardest Questions
  - PHASE 3: Contest Season (January and February, Weeks 17-24)
    Full timed mocks, contest craft and the CCC itself on Wednesday, February 17, 2027, followed by upsolving and a plan for what comes next.
    - Month 5: Mock Contests and Contest Craft
      - Weeks 17-18: Pacing a 3-Hour, 5-Question Paper
      - Weeks 19-20: Upsolving and Weak-Spot Repair
    - Month 6: Final Mocks, the CCC and Next Steps
      - Weeks 21-22: Final Mocks
      - Weeks 23-24: Contest Week and After

**Projects students build:** A personal starting profile: track choice, language choice and five solved warm-up problems; A counting and simulation problem set solved in full, with a written list of edge cases for each; A grid puzzle solver for an original problem, organized into clear functions; Solve one original problem three ways, from slow to fast, and time each version; Five original middle-level problems, each with a plain-word plan and a test list; An original region-counting problem solved with flood fill; Three recursion problems solved and explained in a short written note; Take a slow solution from earlier in the course and rewrite it to run within the limits; An original problem solved with binary search on the answer, with a written proof that it is fast enough; A greedy and counting problem pack with a short argument for each solution; An original routing problem solved with breadth-first search and then with Dijkstra's algorithm; Solve one original dynamic programming problem top-down and bottom-up, and compare; Two full 3-hour mocks, each followed by a written pacing review; A personal weak-spot plan with three topics, each with a problem set completed; A final mock with a written contest-day plan - plus 1 more on the course page.

### Codex & Claude Code for Teens: AI Coding Agents Course

`/courses/codex-and-claude-code-ai-coding-agents-course-for-teens` · 24 classes (12 weeks · 2 classes/week) · Beginner-friendly (ages 13-18) to confident AI-agent builder

  - Phase 1: Foundations of AI Coding Agents
    Understand what AI coding agents are, install both Codex and Claude Code, learn to keep them safe with approval modes, and complete your very first real coding task.
    - Class 1: What Are AI Coding Agents? (Codex vs Claude Code)
    - Class 2: Installing & Setting Up Claude Code
    - Class 3: Installing & Using the OpenAI Codex CLI
    - Class 4: Staying in Control with Approval & Permission Modes
    - Class 5: Your First Real Task in Both Agents
  - Phase 2: Your Daily Coding Workflow
    Learn the everyday moves: slash commands, planning before building, editing and diffs, running tests and git, teaching the agent your project, and undoing mistakes.
    - Class 6: Slash Commands & Steering Your Session
    - Class 7: Plan Mode & Goal Mode, Think Before You Build
    - Class 8: Reading, Editing & Reviewing Code Changes
    - Class 9: Running Commands, Tests & Git from the Agent
    - Class 10: Project Memory, CLAUDE.md & AGENTS.md
    - Class 11: Checkpoints, Rewind, Undo & Resuming Sessions
  - Phase 3: Extending & Connecting Your Agents
    Supercharge both agents: connect external tools with MCP, build skills and plugins, create subagents, automate with hooks, choose models and reasoning effort, and code from screenshots.
    - Class 12: Connecting External Tools & Data with MCP
    - Class 13: Skills, Custom Commands & Codex Plugins
    - Class 14: Subagents, Your Specialist Team
    - Class 15: Hooks & Automation
    - Class 16: Models & Reasoning Effort
    - Class 17: Multimodal Coding from Screenshots & Images
  - Phase 4: Cloud, Collaboration & Scale
    Go beyond your laptop: delegate tasks to Codex Cloud, use Claude Code on web and mobile, get automatic GitHub code reviews, and run several agents at once.
    - Class 18: Codex Cloud, Delegating Tasks That Run for You
    - Class 19: Claude Code Everywhere, on Web, Desktop, and Mobile
    - Class 20: GitHub Integration & Automatic Code Review
    - Class 21: Parallel Agents, Worktrees & /batch
  - Phase 5: Build, Secure & Ship
    Bring it together: automate with the SDKs, code safely with sandboxes and permissions, and ship a real capstone app, then earn your certificate.
    - Class 22: Building With the SDKs (Agent SDK & Codex SDK)
    - Class 23: Security, Sandboxing & Responsible AI Coding
    - Class 24: Capstone, Ship a Real App + Certification

**Projects students build:** Make a one-page 'Codex vs Claude Code' comparison sheet in your own words, listing 3 things each is great at; Install Claude Code, start a session in an empty folder, and ask it to create a hello.html page that says your name; Install Codex, run codex doctor, then have Codex add a new section to your hello.html from Class 2; Run the same small task ('add a footer to hello.html') in plan mode first, review the plan, then approve and apply it; Add two new features to the to-do app, one with Claude Code, one with Codex, and note which felt easier; Create a personal cheat-sheet of your 10 most-used slash commands across both tools; Use Plan Mode to design a 'dark mode toggle' for a web page, review the plan, then let the agent build it; Have an agent refactor a messy function and walk you through the diff line-by-line; Build a tiny feature, have the agent write a test for it, run the test, and commit when it passes; Write a CLAUDE.md and an AGENTS.md for your to-do app describing how to run it and your code style; Make a risky change, dislike it, and use /rewind to go back cleanly; Connect one MCP server to each agent and have the agent use it to fetch real information; Create a Claude Code custom command (like /newpage that scaffolds an HTML page) and a Codex profile for your project; Create a 'code-reviewer' subagent and have it review your to-do app; Add a PostToolUse hook that runs a formatter after the agent edits a file - plus 9 more on the course page.

### Codex & Claude Code: AI Coding Agents for Professionals

`/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals` · 24 classes (12 weeks · 2 classes/week) · Beginner to advanced, for working professionals, career switchers & developers

  - Phase 1: Foundations of AI Coding Agents
    Understand the agentic-coding landscape, install and configure both Codex and Claude Code, master the approval/permission models, and complete your first real engineering task.
    - Class 1: The Agentic Coding Landscape (Codex vs Claude Code)
    - Class 2: Installing & Configuring Claude Code
    - Class 3: Installing & Configuring the OpenAI Codex CLI
    - Class 4: Approval & Permission Models (Safety Backbone)
    - Class 5: Your First Real Engineering Task in Both Agents
  - Phase 2: Your Daily Engineering Workflow
    Build a fast, reliable daily loop: slash commands, planning, reviewing diffs, running tests and git, teaching the agent your codebase, and recovering with checkpoints.
    - Class 6: Slash Commands & Session Control
    - Class 7: Plan Mode & Goal Mode
    - Class 8: Diffs, Multi-File Edits & Review Discipline
    - Class 9: Running Tests, Commands & Git from the Agent
    - Class 10: Project Memory, CLAUDE.md & AGENTS.md
    - Class 11: Checkpoints, Rewind & Session Management
  - Phase 3: Extending & Connecting Your Agents
    Make the agents fit your stack: connect tools via MCP, build skills/plugins, deploy subagents, automate with hooks, tune models and reasoning effort, and feed visual context.
    - Class 12: Connecting Tools, Data & Services with MCP
    - Class 13: Skills, Custom Commands & Codex Plugins
    - Class 14: Subagents, Specialized and Isolated Helpers
    - Class 15: Hooks & Workflow Automation
    - Class 16: Models, Reasoning Effort & Context
    - Class 17: Multimodal Inputs, Visual Context
  - Phase 4: Cloud, Collaboration & Scale
    Operate beyond a single machine: delegate to Codex Cloud, use Claude Code across surfaces, integrate AI code review into GitHub/CI, and orchestrate parallel agents.
    - Class 18: Codex Cloud, Parallel Tasks & Auto-PRs
    - Class 19: Claude Code Across Surfaces (Web, Desktop, Mobile, Background)
    - Class 20: GitHub Integration & AI Code Review at Scale
    - Class 21: Parallel Agents, Worktrees, /batch & Teams
  - Phase 5: Build, Secure & Ship
    Operationalize agents: automate with the SDKs, harden security for teams, and deliver a production-grade capstone, then certify.
    - Class 22: Building With the SDKs (Claude Agent SDK & Codex SDK)
    - Class 23: Security, Sandboxing & Governance for Teams
    - Class 24: Capstone, Ship a Production-Grade Build + Certification

**Projects students build:** Write a one-page internal brief: 'Codex vs Claude Code: where we'd use each' for a hypothetical team; Install Claude Code, configure a project .claude/settings.json, and run your first task in a real repo; Install Codex, create a ~/.codex/config.toml with a custom profile, and complete a task in workspace-write mode; Author a restrictive permission/approval policy for both tools and prove a blocked action is denied; Resolve the same issue with each agent and write a short comparison of edit quality and effort; Create a personal/team reference of the 12 most-used commands across both tools with examples; Use Plan Mode to design a non-trivial change (e.g., add pagination to an API) and execute the approved plan; Have an agent refactor a legacy function and review every hunk, rejecting anything out of scope; Implement a feature TDD-style with the agent: failing test → implementation → green → commit; Write production-quality CLAUDE.md and AGENTS.md for a real repo, including review guidelines; Run a risky refactor, reject the outcome, and recover cleanly via /rewind plus git; Connect a real MCP server (e.g., a database or docs server) to both agents and complete a task using it; Build a Claude Code skill that automates a repeatable workflow and a Codex profile for a project; Create code-reviewer and test-writer subagents and use them on a real change; Implement a PostToolUse format+lint hook and a PreToolUse guard that blocks force-push - plus 9 more on the course page.

### Coding for Kids: Scratch to Games, Apps and AI

`/courses/kids-coding-blocks-masterclass` · 10-12 months (40-48 weeks) · Complete beginner, ages 6 to 12 (batches grouped by age)

  - PHASE 1: Scratch from Zero to Real Games (Months 1-3, Weeks 1-12)
    Scratch is where children discover that they can command a computer. From first animation to complete games with menus, levels and scores.
    - Month 1: First Steps in Scratch
      - Welcome to Coding
      - Motion and Animation
      - Events and Interactivity
      - First Game Logic
    - Month 2: Think Like a Coder
      - Loops and Patterns
      - Variables: Numbers That Remember
      - Lists and Inventories
      - Puzzle Week on Code.org
    - Month 3: Real Games, Properly Built
      - Clone the Classics I
      - Clone the Classics II: Platformers
      - What Makes Games Fun?
      - Scratch Showcase
  - PHASE 2: New Worlds: Arcade, micro:bit and Mobile Apps (Months 4-6, Weeks 13-24)
    The skills from Scratch travel: arcade games in MakeCode, inventions on a simulated micro:bit, and real mobile apps built in MIT App Inventor.
    - Month 4: MakeCode Arcade and micro:bit
      - MakeCode Arcade Basics
      - MakeCode Arcade: Enemies and Effects
      - micro:bit Inventions
      - Blockly Puzzle Gym
    - Month 5: Build Real Mobile Apps
      - MIT App Inventor Basics
      - Apps with Camera, Voice and Drawing
      - Games on the Phone
      - App Capstone: An App for Your Family
    - Month 6: Stories, Worlds and the Phase Capstone
      - Digital Storytelling
      - What Is AI, Really?
      - Teachable Machine Projects
      - Phase 2 Capstone and Review
  - PHASE 3: Minecraft, Roblox and AI (Months 7-8, Weeks 25-32)
    Coding inside the worlds kids already love: Minecraft Education, Roblox Studio with first Lua scripts, 3D design, and AI models they train themselves.
    - Month 7: Minecraft and Roblox
      - Coding in Minecraft Education
      - Roblox Studio: First Worlds
      - Roblox: First Lua Scripts
      - Data Detective
    - Month 8: 3D Worlds and Your Own AI
      - Tinkercad 3D Design
      - VR and AR Worlds in CoSpaces
      - AI Inside Your Games
      - Phase 3 Capstone
  - PHASE 4: The Bridge to Real Code (Months 9-10, Weeks 33-40)
    The step every parent asks about, done gently and properly: from blocks to first typed Python, a first web page, and a final capstone with a real exam.
    - Month 9: First Typed Code
      - From Blocks to Text
      - First Python with Turtle
      - My First Web Page
      - Creator Habits
    - Month 10: Capstone and Demo Day
      - Capstone Planning
      - Capstone Build
      - Demo Day and What Comes Next

**Projects students build:** Animated greeting card; Pet animation with sounds; Interactive 'About Me' project; Animated story with 3 scenes; Dancing party animation; Virtual pet that moves and makes sounds; Interactive quiz game; Virtual piano/musical instrument; Dress-up game with clickable items; Catch the falling objects game; Simple maze game; Whack-a-mole style game; Number guessing game; Geometric art generator; Pattern-based puzzle game - plus 97 more on the course page.

### College Math Placement Test Prep: ALEKS, ACCUPLACER, TSIA2, CLEP

`/courses/college-math-placement-test-prep-course` · 4 months (16 weeks), joinable any month; shorter focused plans are possible 1-on-1 when a test date is close · Students aged 15 and up, including adults returning to study, from rusty arithmetic to precalculus-level functions

  - PHASE 1: Number and Arithmetic Rebuilt (Month 1, Weeks 1-4)
    Everything later depends on number sense. Adults returning to study often find this month the turning point.
    - Month 1: Fractions, Percents, Ratios and Exponents
      - Weeks 1-2: Which Test, a Diagnostic, and Fractions and Decimals
      - Weeks 3-4: Percents, Ratios, Signed Numbers and Exponents
  - PHASE 2: Algebra Core, Statistics and Geometry (Months 2-3, Weeks 5-12)
    The algebra at the heart of every placement test, plus the statistics and geometry that QAS and TSIA2 include.
    - Month 2: Expressions, Linear Equations, Inequalities and Systems
      - Weeks 5-6: Expressions and Linear Equations
      - Weeks 7-8: Inequalities, Systems and Linear Applications
    - Month 3: Polynomials, Quadratics, Radicals, Statistics and Geometry
      - Weeks 9-10: Polynomials, Factoring and Quadratics
      - Weeks 11-12: Statistics, Probability and Geometry
  - PHASE 3: Functions and Test Formats (Month 4, Weeks 13-16)
    The function topics that decide higher placements, then format training for the student's own test.
    - Month 4: Functions, Exponentials, Logarithms and Timed Practice
      - Weeks 13-14: Functions, Exponentials and Logarithms
      - Weeks 15-16: Test-Format Training and Final Review

**Projects students build:** A personal study map: test, college, target course and topic list; A real-life math sheet: a budget, a recipe scaled up and a sale price worked out; Model three real situations with linear equations and graph them; A phone-plan comparison solved as a system of equations; A factoring strategy card the student builds from their own worked examples; Summarize a small real data set and write a short interpretation; A function gallery: eight function types graphed and described by the student; A personal test-day plan for the student's own test.

### College Maths Course: Calculus, Linear Algebra to Analysis

`/courses/college-mathematics-complete-masterclass` · 10-12 months per track (3 tracks, joinable any month) · College and university students; placement by current course and semester

  - PHASE 1: Track 1, Calculus and Linear Algebra (One Academic Year)
    The first-year core: limits to integrals, vectors to eigenvalues, the craft of proof, and multivariable calculus, built with intuition before rigor.
    - Months 1-2: Single Variable Calculus I
      - Limits and Continuity
      - Differentiation
      - Applications of Derivatives
      - Integration Fundamentals
    - Months 3-4: Calculus II and Linear Algebra I
      - Advanced Integration Techniques
      - Sequences and Series
      - Linear Algebra: Vectors and Matrices
      - Systems of Linear Equations
      - Mathematical Proof Writing
    - Months 5-6: Advanced Linear Algebra and Vector Calculus
      - Eigenvalues and Eigenvectors
      - Vector Spaces and Linear Transformations
      - Multivariable Functions and Partial Derivatives
      - Optimization and Vector Fields
      - Track 1 Exam
  - PHASE 2: Track 2, Differential Equations, Discrete Maths and Probability (One Academic Year)
    The methods year every engineering and science degree leans on: multiple integration, ODEs and Laplace transforms, discrete mathematics, and probability and statistics done properly.
    - Months 1-2: Multiple Integration and ODEs
      - Double and Triple Integrals
      - Line and Surface Integrals
      - First-Order Differential Equations
      - Higher-Order Linear ODEs
      - Laplace Transforms
    - Months 3-4: Discrete Mathematics
      - Set Theory and Relations
      - Combinatorics
      - Graph Theory
      - Number Theory
      - Boolean Algebra and Logic
    - Months 5-6: Probability, Statistics and the Track Exam
      - Probability Theory
      - Joint Distributions and Limit Theorems
      - Statistical Inference
      - Stochastic Processes
      - Track 2 Exam
  - PHASE 3: Track 3, Analysis, Algebra and Beyond (One Academic Year)
    Where mathematics becomes a discipline: real analysis, abstract algebra, topology and complex analysis, rigorous but humane, intuition drawn before every epsilon.
    - Months 1-3: Real Analysis
      - Metric Spaces and Sequences
      - Limits and Continuity in R^n
      - Differentiation Theory
      - Riemann Integration
      - Sequences and Series of Functions
    - Months 4-6: Abstract Algebra
      - Group Theory
      - Ring Theory
      - Field Theory
      - Linear Algebra (Abstract)
    - Months 7-10: Topology, Complex Analysis and the Track Exam
      - General Topology
      - Complex Analysis
      - Advanced Complex Analysis
      - Track 3 Capstone and Exam

**Projects students build:** Epsilon-delta proof visualizer; Limit calculator implementation; Continuity explorer interactive tool; Derivative visualizer application; Automatic differentiation engine; Physics motion simulator; Optimization problem solver; Curve sketching software; Newton's method visualizer; Riemann sum visualizer; Numerical integration calculator; Volume calculator for solids of revolution; Advanced integration solver; Numerical methods comparison tool; Physics applications simulator - plus 108 more on the course page.

### Competitive Programming Course: Codeforces to ICPC

`/courses/competitive-programming-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Problem Solving Basics (Months 1-2, Weeks 1-8)
    Build strong foundations in C++ STL, basic algorithms, and develop problem-solving mindset.
    - Month 1: C++ Mastery & Basic Algorithms
      - C++ STL & Fast I/O
      - Time Complexity & Basic Algorithms
      - Basic Data Structures
      - Recursion & Backtracking
    - Month 2: Mathematics & Number Theory
      - Number Theory Fundamentals
      - Combinatorics & Probability
      - Bit Manipulation Mastery
      - Sorting & Searching Advanced
    - Month 3: Trees, Graphs & Dynamic Programming
      - Tree Algorithms
      - Graph Algorithms Fundamentals
      - Shortest Paths & MST
      - Dynamic Programming Basics
  - PHASE 2: Advanced Algorithms & Contest Strategy (Months 3-4, Weeks 9-17)
    Master advanced algorithms, dynamic programming patterns, and develop contest-winning strategies.
    - Month 4: Advanced Dynamic Programming
      - DP Optimization Techniques
      - Bitmask DP & DP on Trees
      - String Algorithms
      - Advanced Graph Algorithms
      - Game Theory
    - Month 5: Data Structures & Optimization
      - Advanced Data Structures
      - Computational Geometry
      - Advanced Number Theory
      - Optimization & Heuristics
      - Interactive & Randomized
    - Month 6: Contest Mastery & Peak Performance
      - Contest Strategy & Time Management
      - Speed Programming & Templates
      - Team Programming (ICPC Style)
  - PHASE 3: Expert Techniques & Peak Performance (Months 7-9, Weeks 27-39)
    Master expert-level algorithms, specialized topics, and achieve competitive programming excellence.
    - Months 7-8: Expert Algorithms & Techniques
      - FFT & Polynomial Algorithms
      - Linear Algebra in CP
      - Advanced String Structures
      - Advanced Graph Theory
      - Approximation Algorithms
    - Month 9: Peak Performance & Contests
      - Research & Cutting Edge
      - Competition Preparation
      - Career & Opportunities
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** CP template creation; STL practice problems set; Fast I/O benchmarking; Complexity analyzer tool; Algorithm visualization; Problem approach templates; Data structure library; Custom implementations; Performance comparison tool; Backtracking solver framework; Optimization comparisons; Contest problem generator; Number theory library; Prime utilities toolkit; Modular arithmetic calculator - plus 88 more on the course page.

### Competitive Programming for Teens: ZCO, INOI and USACO Track

`/courses/competitive-programming-for-teens-course` · 6 months (24 weeks), joinable any month · Teens aged 13 to 18 who can already write basic programs and want contest-level problem solving

  - PHASE 1: Foundations and Core Data Structures
    The tools every contest problem assumes you already have, built until they are automatic.
    - Month 1: Complexity, Arrays and Strings
      - Setup, Judges and Big-O
      - Arrays, Sorting and Binary Search
      - Prefix Sums, Strings and Number Theory Basics
      - Stacks, Queues and the Standard Library
    - Month 2: Recursion, Backtracking and First Graphs
      - Recursion and Backtracking
      - Graph Representation, BFS and DFS
      - Greedy Algorithms
      - Contest Technique
  - PHASE 2: The Core Algorithm Families
    The material that separates a zonal qualifier from a national-level contestant.
    - Month 3: Dynamic Programming
      - Introduction to Dynamic Programming
      - Knapsack and Grid DP
      - DP on Sequences and Intervals
      - Weighted Graphs and Shortest Paths
  - PHASE 3: Contest Mastery and Olympiad Preparation
    Harder problems and the discipline that turns knowledge into a rank.
    - Months 4 to 6: Advanced Topics and Full Contests
      - Advanced Structures and Techniques
      - Olympiad-Style Problem Sets
      - Full Contests, Upsolve and Peak Form

**Projects students build:** Submit your first ten problems and read every verdict, including the failures; Solve a set of problems where binary search on the answer is the intended solution; Build a small library of your own tested helper functions; Solve a monotonic stack problem and explain why the stack is the right structure; Solve a classic constraint problem with backtracking and measure the effect of each pruning rule; Model a described real-world scenario as a graph and solve it with BFS; Solve an interval-scheduling set and write a short argument for why the greedy rule works; A full contest run with a written post-mortem of every decision; Solve the same problem both top-down and bottom-up and compare; Solve a knapsack variant and reconstruct the chosen items; Implement LIS in both the quadratic and the faster form and compare on large input; Solve a routing problem with Dijkstra and justify the data structures chosen; Implement a segment tree from scratch and use it on a real range-query problem; Complete full past sets under time and grade them honestly; A full contest every week with a written post-mortem.

### Computer Science Class 11-12: CBSE Python & ICSE/ISC Java

`/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course` · 24 months (Class 11 + Class 12, the full 2-year board cycle), joinable any month · Class 11 Beginner to Class 12 Board Exam Ready

  - PHASE 1: Class 11 Semester 1, Computer Fundamentals & Programming Foundations (Months 1-5)
    Build rock-solid fundamentals in computer science theory and start your programming journey. CBSE students begin with Python, ISC students begin with Java. Both batches cover computer organization, number systems, and Boolean logic.
    - Month 1: Computer Systems & Organization
      - Computer System Overview & Hardware
      - Software, Operating Systems & Encoding
      - Number Systems & Conversions
      - Boolean Logic & Encoding Schemes
    - Months 2-3: Programming Foundations (Python for CBSE / Java for ISC)
    - Months 4-5: Functions, Strings & Data Handling
  - PHASE 2: Class 11 Semester 2, Advanced Concepts, Ethics & Practicals (Months 6-10)
    Complete remaining Class 11 syllabus topics, prepare practical file with 20+ programs, work on project, and build exam readiness.
    - Months 6-7: Society, Law, Ethics & Advanced Topics
      - Society, Law and Ethics, Digital Citizenship (CBSE) / Computing Trends (ISC)
      - CBSE: Advanced Python Concepts / ISC: File Handling & Packages in Java
      - Practical File Preparation, Project Work & Class 11 Exam Prep
  - PHASE 3: Class 12 Semester 1, Advanced Programming, File Handling & Data Structures (Months 11-17)
    Deep dive into Class 12 core topics: advanced programming, file handling, data structures, sorting and searching algorithms. This is the highest-weightage section in board exams.
    - Months 11-12: Advanced Functions, Exception Handling & File Handling
    - Months 13-14: Sorting, Searching & Algorithm Efficiency
  - PHASE 4: Class 12 Semester 2, SQL, Networks, Connectivity & Board Exam Mastery (Months 18-24)
    Complete the remaining Class 12 syllabus: SQL and databases, computer networks, Python-MySQL connectivity, then intensive board exam preparation with mock tests and revision.
    - Months 18-19: Database Management & SQL
      - Database Concepts & SQL Fundamentals
      - SQL DDL & DML Commands
      - SQL DQL, SELECT Queries, Clauses & Functions
      - SQL Joins, Functions & Advanced Queries
      - Boolean Algebra & Karnaugh Maps (ISC Class 12, runs parallel to SQL for CBSE)
    - Months 20-21: Computer Networks & Python-MySQL Connectivity
      - Computer Networks, Complete Chapter (CBSE & ISC)
      - Network Topologies, Protocols & Web Technologies
      - Network Security & Python-MySQL Connectivity (CBSE)
    - Months 22-24: Board Exam Preparation, Intensive Revision & Mock Tests
      - Practical File Completion & Project Submission Preparation
      - Chapter-Wise Revision, Programming Topics
      - Chapter-Wise Revision, SQL, Networks & Theory
      - Mock Board Exams, Set 1 & 2
      - Mock Board Exams, Set 3, 4 & 5 + Previous Year Paper Analysis
      - Final Revision & Last-Minute Board Exam Tips

**Projects students build:** Create an illustrated computer system diagram with all components labeled; Memory hierarchy comparison chart with speed, cost, and capacity; Research report: Evolution of processors from Intel 4004 to latest chips; Software classification mind map with 20+ real-world examples; OS comparison: Windows vs Linux vs macOS, features and use cases; Install and explore Linux (Ubuntu) in a virtual machine; Number system converter calculator (manual worksheet with 50 conversions); Color code converter: RGB decimal to hexadecimal; Binary arithmetic drill, 30 addition and subtraction problems; Truth table generator for any 2-3 variable Boolean expression; Gate diagram drawing practice, 10 circuits; Encoding explorer: Convert your name to ASCII, Unicode values; Personal bio generator, takes name, age, hobby as input and formats output; Simple calculator, add, subtract, multiply, divide two numbers; Temperature converter, Celsius to Fahrenheit and vice versa - plus 130 more on the course page.

### Copilot Studio Agent Masterclass for Professionals

`/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals` · 24 classes (12 weeks · 2 classes/week) · Intermediate to advanced (working professionals; no prior agent experience assumed, business software fluency expected)

  - Phase 1: Platform & Foundations
    Map the 2026 agent landscape, learn the anatomy of a Copilot Studio agent, build instruction and testing discipline, and make the model and harness decisions that shape cost and capability.
    - Class 1: The 2026 Agent Landscape and Where Copilot Studio Sits
    - Class 2: Agent Anatomy and Instruction Discipline
    - Class 3: Testing Like It Is Already in Production
    - Class 4: Models and Harnesses: The Decisions Underneath Everything
  - Phase 2: Enterprise Knowledge
    Ground agents in enterprise sources at scale: SharePoint, Dataverse, documents and connector-indexed data, tenant graph grounding, curation strategy, and accuracy audits an auditor would accept.
    - Class 5: Grounding Strategy: The Knowledge Source Estate
    - Class 6: SharePoint and Documents Done Right
    - Class 7: Dataverse, Connector-Indexed Data and Tenant Graph Grounding
    - Class 8: Accuracy Audits and Honest Agents
  - Phase 3: Orchestration & Tools
    Design conversations for critical paths, choose orchestration modes deliberately, then master the full tool surface: Prompt tools, agent flows, connectors, custom connectors and REST, Model Context Protocol under DLP, computer use with guardrails, and deep reasoning.
    - Class 9: Topics for Critical Paths
    - Class 10: Generative Orchestration, Deliberately
    - Class 11: Prompt Tools and Agent Flows
    - Class 12: The Connector Estate: Standard, Premium, On-Premises, Custom, REST
    - Class 13: Model Context Protocol Under Enterprise Governance
    - Class 14: Computer Use and Deep Reasoning: The Power Tools
  - Phase 4: Autonomy, Multi-Agent & Quality
    Ship agents that act on their own and prove they work: event triggers under the maker-credentials rule, hardening, multi-agent architectures with A2A, agent evaluations, analytics, and full cost management in Copilot Credits.
    - Class 15: Event Triggers and Autonomous Agents
    - Class 16: Hardening Autonomy: Approval Pauses and Failure Design
    - Class 17: Multi-Agent Architecture and the A2A Protocol
    - Class 18: Agent Evaluations: Quality You Can Prove
    - Class 19: Analytics: Outcomes, CSAT and the Cost Savings Metric
    - Class 20: Cost Management: Copilot Credits Without Surprises
  - Phase 5: Governance, Rollout & Capstone
    Master the governance layer that makes agents deployable: Entra Agent ID, Conditional Access, DLP, Microsoft Agent 365 and the Agent Store, then ship a production capstone with the governance and ROI pack to defend it.
    - Class 21: Identity and Policy: Entra Agent ID, Conditional Access, DLP
    - Class 22: The Agent Estate: Microsoft Agent 365, the Agent Store, and Rollout
    - Class 23: Capstone Build Week
    - Class 24: Capstone Defence and the Credential Road

**Projects students build:** Write the one-page 'agent opportunity memo' for your organisation: three candidate processes, the data each would need, the risks each carries, and which one becomes your capstone; Build 'Policy Desk v1': an internal FAQ agent for one real policy area of your workplace, with a complete instruction stack and five tested refusals; Build the permanent 25-question test set for Policy Desk, including five adversarial probes, with expected behaviour written before the first run; Run your Policy Desk test set against two GA models (one OpenAI, one Anthropic), score the differences, and write the one-paragraph model decision with evidence attached; Ground Policy Desk in a real SharePoint site (or a mirrored practice copy) and prove ten answers cite the correct policy paragraph; Rebuild one messy real document into a retrieval-optimised version, ground both versions side by side, and publish the before-and-after accuracy comparison; Add a second source type to Policy Desk (Dataverse table or connector-indexed source), then document the arbitration behaviour with five conflict questions; Run the full 25-answer accuracy audit on Policy Desk and publish the result as a one-page report with examples, methodology and a remediation list; Build 'Support Triage v1': a customer-facing agent with three designed topics (report an issue, check status, escalate to human), entities capturing the details, and an adaptive card summary; Migrate Support Triage to generative orchestration, rerun the full test set, and publish the behaviour-change log with a keep-or-fix verdict per change; Build 'Expense Helper': conversation collects an expense claim, an agent flow validates it, routes it for approval, and returns the outcome, with tested error paths for every step; Wire one real connector tool and one REST or custom connector tool into a practice agent, and demonstrate a conversation that reads and writes live data through both; Add an MCP server to a practice agent, disable every tool you do not need, and document the resulting capability surface as a one-page security note; Build a governed computer-use demo: one legacy-UI task automated with allow-lists, HTTPS enforcement and human supervision configured, plus a per-run credit cost estimate; Build 'Weekly Reporter': an autonomous agent on a Recurrence trigger that compiles a weekly status summary from real sources and posts it for review, never directly to stakeholders - plus 9 more on the course page.

### Creative Coding and Animation: Video, Motion and p5.js

`/courses/creative-coding-animation-mastery` · 5-6 months (20-24 weeks) · Beginner friendly, ages 13 to adult

  - Month 1: Creative Foundations & Video Editing Basics
    Master design principles, animation fundamentals, and professional video editing.
    - Design Principles & Digital Art Basics
    - Animation Principles & 2D Basics
    - Video Editing Fundamentals
    - Mobile Video Editing & Quick Content
  - Month 2: Motion Graphics & After Effects Mastery
    Master motion design, visual effects, and professional animation techniques.
    - After Effects Fundamentals
    - Advanced Motion Graphics
    - Character Animation & Rigging
    - Visual Effects & Compositing
  - Month 3: Creative Coding & Interactive Media
    Master creative programming with Processing, p5.js, and interactive installations.
    - Processing Fundamentals
    - p5.js and Web-Based Creative Coding
    - Interactive Installations & Physical Computing
    - Creative Coding Applications
  - Month 4: Blender 3D and Short-Form Craft
    Three weeks of honest Blender fundamentals, then the short-form editing craft that makes work travel.
    - 3D Animation Fundamentals with Blender
    - Character Animation & Rigging in 3D
    - Advanced VFX & Compositing
    - Short-Form Video Craft
  - Month 5: Channel, Portfolio and the Finale
    Long-form storytelling, honest analytics, a portfolio that opens doors, and the final capstone exam.
    - Long-Form Video and Storytelling
    - Publishing Strategy and Honest Analytics
    - Portfolio Development & Personal Branding
    - Capstone, Demo Day and Final Exam

**Projects students build:** Personal Brand Identity: Logo, color palette, style guide; Mood Board Collection: 5 different aesthetic mood boards; Social Media Template Set: Consistent design templates; Bouncing Ball Animation: Master timing and physics; Character Walk Cycle: Create smooth character movement; Animated Logo Reveal: Bring brand to life; Day in Life Vlog: Edit personal vlog footage; Product Commercial: 30-second product showcase; Music Video Edit: Sync video to music; Instagram Reels Series: 5 trending reels; YouTube Shorts Collection: Engaging short-form content; Animated Title Sequence: Professional title animation; Kinetic Typography: Text-driven animation; Logo Animation Pack: Brand animations; Explainer Video: 2-minute animated explainer - plus 41 more on the course page.

### Creative Media for Teens: Photo, Video and Design

`/courses/creative-media-design-masterclass-teens` · 8-10 months (32-40 weeks) · Beginner friendly, ages 13 to 18

  - PHASE 1: The Creative Core (Months 1-6, Weeks 1-26)
    Photo editing, video production and graphic design, each learned to real competence with weekly critiqued builds.
    - Months 1-2: Creative Fundamentals & Photo Editing Basics
      - Introduction to Digital Creativity & Setup
      - Photoshop Fundamentals
      - Advanced Photo Manipulation
      - Mobile Photography & Editing
    - Months 3-4: Video Editing & Production Basics
      - Video Production Fundamentals
      - Premiere Pro Essentials
      - YouTube Content Creation
      - TikTok & Short-Form Content
      - Month 3-4 Review & Portfolio Building
    - Months 5-6: Graphic Design & Brand Creation
      - Illustrator & Vector Design
      - Social Media Design & Branding
      - Print Design & Merchandise
      - Web & UI Design Basics
      - Phase 1 Capstone Project
  - PHASE 2: Advanced Craft and the Finale (Months 7-8, Weeks 27-32)
    Visual effects and real photography craft, then the portfolio capstone and the final exam.
    - Months 7-8: Effects, Light and the Portfolio
      - Advanced Video: Effects and Sound
      - Photography: Real Light, Any Camera
      - Portfolio Capstone
      - Demo Day and the Final Exam

**Projects students build:** Set up complete creative workstation; Create organized folder structure for projects; Design a personal creative brand/logo; Edit 10 personal photos to perfection; Design custom phone wallpapers; Create surreal photo manipulation artwork; Professional portrait retouching project; Design Instagram post templates; 30-day Instagram feed makeover; Mobile photography portfolio; Shoot and plan first short film (2-3 minutes); Create a day-in-my-life vlog; Record product review video; Edit a cinematic travel video; Create YouTube video with intro/outro - plus 27 more on the course page.

### Cybersecurity Competitions for Teens: picoCTF and CyberPatriot Prep

`/courses/picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens` · 6 months (24 weeks) · Beginner to intermediate, ages 13 to 18, no prior security experience needed

  - PHASE 1: Foundations and Ethics (Months 1-2, Weeks 1-8)
    The shared foundations of both competitions, starting with the rules: what is allowed, what is not, and why that line matters.
    - Month 1: The White-Hat Agreement and the Linux Command Line
      - Weeks 1-2: Rules, Ethics and the Practice Lab
      - Weeks 3-4: Linux Command Line Essentials
    - Month 2: Windows Administration and Networking
      - Weeks 5-6: Windows Administration
      - Weeks 7-8: How Networks Move Data
  - PHASE 2: System Hardening in the CyberPatriot Style (Months 3-4, Weeks 9-16)
    Defence under a clock: securing Windows and Linux systems against a scenario, answering forensics questions, learning network fundamentals and working as a team.
    - Month 3: Hardening Windows and Linux
      - Weeks 9-10: Hardening Windows
      - Weeks 11-12: Hardening Linux
    - Month 4: Network Fundamentals and Team Rounds
      - Weeks 13-14: Network Fundamentals and Server Roles
      - Weeks 15-16: Team Rounds
  - PHASE 3: Capture-the-Flag Skills in the picoCTF Style (Months 5-6, Weeks 17-24)
    Puzzle-style security challenges on purpose-built practice platforms: encodings and ciphers, forensics, reading code, and how web and memory bugs are recognised and fixed, ending in a mock CTF.
    - Month 5: Cryptography and Forensics
      - Weeks 17-18: Encodings and Cryptography
      - Weeks 19-20: Forensics
    - Month 6: Reading Code, Bugs and Fixes, and a Mock CTF
      - Weeks 21-22: Reading Code and Recognising Bugs
      - Weeks 23-24: Mock CTF and the Road Ahead

**Projects students build:** Signed white-hat agreement and a working practice lab with a Linux virtual machine and a restore snapshot; Command line treasure hunt: an instructor-built set of files and folders with clues found only by using the right commands; Read-only Windows settings audit on your own computer: users, services and updates checked against a written checklist, nothing changed; Packet capture walkthrough: an annotated explanation of a provided capture from first packet to last; Personal Windows hardening checklist, checked read-only against your own computer's settings; Personal Linux hardening checklist, tested on your own Linux practice virtual machine; Small simulated network built and documented, with a subnetting worksheet; Full mock team round on your Linux practice virtual machines and written Windows scenarios, followed by a written team review; Cryptography challenge set solved on a practice platform, with a written solution for each; Forensics challenge set solved on a practice platform, with a written solution for each; Bug and fix notebook: for each practice challenge, the bug, how it was recognised and the code change that would fix it; Mock CTF on an instructor-built challenge set, followed by a polished solution portfolio.

### Cybersecurity for Teens: Online Safety & White-Hat Defense

`/courses/cybersecurity-course-for-teens-ethical-defensive` · 6 months (24 weeks) · Beginner, ages 13 to 18, no coding required

  - PHASE 1: The Digital World and Your Identity (Months 1-2, Weeks 1-8)
    You cannot secure what you do not understand. First the internet itself, then the single most attacked thing on it: your identity.
    - Month 1: How the Internet Actually Works
      - The Life of a Web Request
      - Networks Around You
      - Your Digital Footprint
      - Thinking Like a Defender
    - Month 2: Passwords, Hashing, and Proving Who You Are
      - How Passwords Fail
      - Hashing: Why Good Sites Never Store Your Password
      - Two-Factor Authentication and Beyond
      - Identity Theft and Scams That Target Teens
  - PHASE 2: Attacks Recognized, Defenses Built (Months 3-4, Weeks 9-16)
    The two attack families that touch everyone: deception aimed at people, and malicious software aimed at machines. Recognition first, then working defenses.
    - Month 3: Phishing and Social Engineering
      - Anatomy of a Phishing Email
      - Beyond Email: Where Teens Actually Get Phished
      - The Psychology of Social Engineering
      - The Phish Detector Field Guide
    - Month 4: Malware Concepts and Safe Habits
      - The Malware Families
      - Defenses That Actually Work
      - Case Study: A Ransomware Outbreak, Read as Defenders
      - Hardening Your Own Machines
  - PHASE 3: Cryptography, the Web, and the CTF Capstone (Months 5-6, Weeks 17-24)
    The mathematics of secrets, the trust machinery of the web, safer coding habits, and a capture-the-flag capstone that turns six months of defense into sport.
    - Month 5: Encryption and How the Web Stays Trustworthy
      - Classical Ciphers by Hand
      - Modern Encryption, Conceptually
      - Cookies, Sessions, and the Padlock
      - Safe Coding Habits
    - Month 6: The Capture-the-Flag Capstone
      - Welcome to CTF
      - Training Camp
      - The Capstone CTF Event
      - Writeups and the White-Hat Road Ahead

**Projects students build:** Map the full path of a web request as an annotated diagram, from keyboard to server and back; Home network inventory: every connected device listed, with a written safety checklist for the household; Personal digital footprint audit: what is publicly findable about you, plus a written cleanup plan you execute; Full threat model for a fictional student's phone and accounts, with ranked risks and matched defenses; Password health review of your own accounts, done privately at home with a parent, with a migration plan to unique passphrases; Hashing lab worksheet: predict, test, and explain hash behavior across a set of inputs, including a tampered file; Account lockdown: 2FA enabled on your key accounts with recovery codes stored safely, checklist evidence submitted; Family security briefing: a one-page document teaching your household the month's defenses, delivered as a short talk at home; Phish anatomy poster: dissect one anonymized real phishing email into its labeled parts; Spot-the-phish gallery: grade 15 anonymized real samples as safe or suspicious, with written reasoning for each call; Case study brief: reconstruct a documented social engineering incident and identify the three points where defense could have stopped it; Phish detector field guide: an illustrated recognition and response guide, then the class phishing-recognition tournament; Malware family tree: an illustrated chart mapping each family to its behavior and its most common arrival route; Personal backup plan: design and actually implement a 3-2-1 backup for your own important files, with a test restore; Defender's timeline: reconstruct the outbreak and mark every point where standard defenses from week 14 would have changed the outcome - plus 9 more on the course page.

### Data Analysis Course: Excel, SQL, Python & BI

`/courses/data-analysis-mastery-course-college` · 8-10 months (35-43 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Excel, Statistics & SQL (Months 1-3, Weeks 1-10)
    Build strong foundations in data concepts, statistics, and become an Excel power user.
    - Month 1: Data Fundamentals & Excel
      - Introduction to Data Analysis
      - Excel Fundamentals & Formulas
      - Excel Advanced Functions
    - Month 2: Statistics & Data Visualization in Excel
      - Statistics Fundamentals
      - Excel Data Analysis Tools
      - Data Visualization in Excel
    - Month 3: SQL & Python for Data Analysis
      - SQL Fundamentals
      - SQL Joins & Advanced Queries
      - SQL Analytics Functions
      - Python Fundamentals for Analysis
  - PHASE 2: Python, Pandas & Business Intelligence (Months 3-5, Weeks 11-20)
    Master Python for data analysis, pandas, data cleaning, and exploratory data analysis.
    - Month 4: Pandas & Data Manipulation
      - Pandas Fundamentals
      - Data Cleaning with Pandas
      - Data Transformation & Aggregation
      - Exploratory Data Analysis (EDA)
    - Month 5: Data Visualization & Storytelling
      - Matplotlib & Seaborn
      - Business Intelligence Tools
      - Data Storytelling & Presentation
    - Month 6: Machine Learning & Automation for Analysts
      - Machine Learning Fundamentals
      - Clustering & Segmentation
      - APIs & Automation
  - PHASE 3: Industry Analytics & the Working Analyst (Months 5-7, Weeks 21-30)
    Master industry-specific analytics, cloud platforms, and prepare for professional roles.
    - Month 7: Industry-Specific Analytics
      - Financial Analytics
      - Healthcare Analytics
      - Retail & E-commerce Analytics
      - Supply Chain Analytics
      - HR & People Analytics
    - Month 8: Cloud Analytics & Your Portfolio
      - Cloud Platforms for Analytics
      - Portfolio Development
    - Month 9: Advanced Methods, Engineering & Strategy
      - Advanced Statistical Methods
      - Data Engineering Basics
      - Business Strategy & Analytics
  - PHASE 4: The Finale (Month 8, Weeks 31-35)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 8: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Personal data audit project; Industry analysis report; Data source catalog creation; Sales calculator dashboard; Employee timesheet system; Grade calculation spreadsheet; Dynamic sales report system; Financial analysis model; HR analytics dashboard; Statistical analysis report; A/B testing simulator; Quality control dashboard; Sales performance dashboard; Budget optimization model; Multi-dimensional analysis cube - plus 77 more on the course page.

### Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)

`/courses/data-and-ai-analytics-for-non-programmers-course` · 4 months (16 weeks), joinable any month · Working professionals and students with no programming background; spreadsheet familiarity helps but is not required

  - PHASE 1: Spreadsheets Done Properly
    The foundation almost everyone half-knows, rebuilt so the later work holds up.
    - Month 1: Excel and Google Sheets Foundations
      - Structuring Data So It Can Be Analysed
      - The Formulas That Actually Matter
      - Lookups and Joining Data
      - Pivot Tables and Fast Summaries
  - PHASE 2: Cleaning Real Data and Analysing It Honestly
    Where most analysis fails, and the statistics you need to avoid fooling yourself.
    - Month 2: Data Cleaning and Practical Statistics
      - Cleaning Messy Real Data
      - Power Query for Repeatable Cleaning
      - Statistics That Keep You Honest
      - Charts That Do Not Lie
  - PHASE 3: Power BI, AI-Assisted Analysis and Your Portfolio
    Turning analysis into something a decision-maker uses, with AI as an accelerator rather than an oracle.
    - Month 3: Power BI and Data Modelling
      - Power BI Foundations
      - Data Modelling and Relationships
      - DAX Measures Without Fear
      - Designing Dashboards People Actually Use
    - Month 4: AI-Assisted Analysis and the Capstone
      - Using AI Assistants Well
      - Checking What AI Gives You
      - Capstone Build
      - Presenting and Your Portfolio

**Projects students build:** Take a genuinely badly structured sheet and restructure it into a usable table; Build a summary sheet driven entirely by formulas from a raw data tab; Combine three separate exports into one analysable table and reconcile the mismatches; Answer five real business questions about one dataset using only pivots; Clean a genuinely messy dataset and write a short log of every decision made; Build a Power Query pipeline that cleans a monthly export automatically; Take a real claim from a report and check whether the data actually supports it; Redesign three bad charts and explain what each change fixes; Build your first working Power BI report from a real dataset; Model a multi-table dataset properly and prove the totals reconcile; Add a full measure set to your model including period comparisons; Redesign your dashboard after watching someone else try to use it; Solve a full analysis task using AI assistance and log where it helped and where it did not; Audit a set of AI-produced analyses and find the errors deliberately planted in them; Build your full capstone: question, clean data, model, dashboard, findings - plus 1 more on the course page.

### Data Science Course: Python, ML & Deep Learning

`/courses/data-science-complete-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundations of Data Science (Months 1-3, Weeks 1-13)
    Build rock-solid foundations in Python programming, statistics, data analysis, and SQL that form the backbone of data science.
    - Months 1-2: Python & Statistical Foundations
      - Python Programming for Data Science
      - NumPy for Numerical Computing
      - Data Manipulation with Pandas
      - Statistical Foundations for Data Science
    - Month 3: Data Visualization & SQL
      - Data Visualization Mastery
      - SQL for Data Scientists
      - Exploratory Data Analysis (EDA) & Feature Engineering
  - PHASE 2: Machine Learning Mastery (Months 4-6, Weeks 14-26)
    Master classical machine learning algorithms, model evaluation, and participate in Kaggle competitions.
    - Months 4-5: Supervised Learning
      - Regression Algorithms
      - Classification Algorithms
      - Advanced Machine Learning Techniques
      - Unsupervised Learning
      - Kaggle Competition Participation
    - Month 6: Real-world ML Projects
      - End-to-End ML Project Development
      - Industry-Specific Applications
      - ML Engineering Best Practices
      - Phase 2 Capstone Project
  - PHASE 3: Deep Learning & Advanced AI (Months 7-9, Weeks 27-39)
    Master deep learning, computer vision, NLP, and cutting-edge AI techniques.
    - Months 7-8: Deep Learning Fundamentals
      - Neural Network Fundamentals
      - Convolutional Neural Networks (CNNs)
      - Recurrent Neural Networks (RNNs)
      - Natural Language Processing
      - Advanced Deep Learning Topics
    - Month 9: Applied Vision, NLP & Research Practice
      - Computer Vision Projects
      - Advanced NLP Applications
      - Research Paper Implementation
      - Phase 3 Capstone Project
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Python fundamentals practice notebook; Building a data science toolkit with functions; Automated data processing script; Image manipulation with NumPy arrays; Statistical calculator using NumPy; Matrix operations library; Performance comparison: NumPy vs pure Python; Complete EDA on retail sales dataset; Data cleaning pipeline for messy dataset; Time series analysis of stock prices; Customer behavior analysis; Statistical analysis of A/B test results; Hypothesis testing on real datasets; Building a statistical testing framework; Correlation analysis of multiple variables - plus 88 more on the course page.

### Data Science for Teens: Python & Your First ML Models

`/courses/data-science-course-for-teens-python-data` · 6 months (24 weeks) · Ages 14 to 18, basic Python required

  - PHASE 1: Python for Data and the pandas Toolkit (Months 1-2, Weeks 1-8)
    First the Python muscles data work leans on, retrained in notebooks. Then pandas, the tool that turns tables of raw data into answers.
    - Month 1: Python, Retuned for Data
      - Notebooks and the Python Refresh
      - Functions and Files
      - Thinking in Tables
      - NumPy Essentials
    - Month 2: pandas
      - DataFrames
      - Filtering and Sorting
      - Grouping and Aggregation
      - Combining Datasets
  - PHASE 2: Cleaning Real Data and Charting It Honestly (Months 3-4, Weeks 9-16)
    The craft phase. Real datasets arrive dirty, and most of data science is the disciplined work of fixing them, then showing results without distortion.
    - Month 3: Cleaning Real Datasets
      - Missing Values
      - Wrong Types and Dirty Strings
      - Outliers, Duplicates, and Judgment Calls
      - The Cleaning Project
    - Month 4: Visualization with matplotlib
      - First Charts
      - Distributions and the Right Chart
      - Honest Charts and Polished Figures
      - The Four-Chart Data Story
  - PHASE 3: Statistics, First Models, and the Capstone (Months 5-6, Weeks 17-24)
    Statistics gives judgment, scikit-learn gives first models, and the capstone puts it all behind one question the student actually cares about.
    - Month 5: Statistics for Judgment, Then First Models
      - Describing Data Truthfully
      - Correlation and Its Traps
      - First Machine Learning: Regression
      - First Machine Learning: Classification
    - Month 6: The Capstone Data Story
      - The Question and the Data
      - Analysis Sprint
      - The Optional Model and the Narrative
      - Present and Publish

**Projects students build:** Class survey analysis, round one: collect a small class survey and answer three questions about it with plain Python; Hand-rolled report: read a 500-row CSV with plain Python and compute totals, averages, and a top-five list; Question workshop: pick a public dataset, write five precise questions about it, and classify which are answerable from the columns present; Class survey analysis, round two: redo week 1's analysis in NumPy and compare the code side by side; First pandas notebook: load a movies dataset and produce a profile of it, size, columns, types, and five first findings; Movie interrogation: answer ten ranked questions about the movies dataset, best-rated per decade, longest, most profitable, each as a clean filtered result; Season in review: full statistical breakdown of a sports season, per team and per month, from a raw match-results dataset; Two-table analysis: join two related datasets, for example city populations with air quality readings, and answer three questions no single table could; Missing-value audit: map the missingness of a real open dataset, choose treatments per column, and defend each in your cleaning log; Type rescue: take a scraped price-and-date dataset where every column is text and restore true types, documenting each repair; Judgment file: on a dataset seeded with ambiguous outliers and duplicates, decide keep or remove case by case, with one-line justifications; Full cleaning project: raw city open data, for example street trees or road accidents, taken from download to documented, analysis-ready form; Three-chart notebook: one line, one bar, one scatter from your cleaned month 3 dataset, each fully labeled; Distribution study: profile three numeric columns with histograms and box plots, and write what each shape reveals; Mislead and repair: take one truthful chart, make the most misleading legal version of it, then write the repair, a before-and-after pair - plus 9 more on the course page.

### Data Structures & Algorithms Course: Interview-Ready DSA

`/courses/data-structures-algorithms-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Core Data Structures (Months 1-2, Weeks 1-8)
    Build rock-solid foundations with basic data structures, complexity analysis, and fundamental algorithms.
    - Month 1: Foundations & Linear Data Structures
      - Programming Fundamentals & Complexity Analysis
      - Arrays & Strings Mastery
      - Linked Lists & Recursion
      - Stacks & Queues
    - Month 2: Searching, Sorting & Hashing
      - Searching Algorithms
      - Sorting Algorithms Mastery
      - Hashing & Hash Tables
      - Bit Manipulation & Mathematics
    - Month 3: Trees, Heaps & Graphs
      - Binary Trees Fundamentals
      - Binary Search Trees & Balanced Trees
      - Heaps & Priority Queues
      - Tries & Advanced Trees
  - PHASE 2: Graphs & Advanced Algorithms (Months 3-4, Weeks 9-17)
    Master graph algorithms, advanced problem-solving patterns, and complex algorithmic techniques.
    - Month 4: Graph Algorithms Mastery
      - Graph Fundamentals & Traversals
      - Shortest Path Algorithms
      - Minimum Spanning Trees & Network Flow
      - Advanced Graph Patterns
      - String Algorithms Advanced
    - Month 5: Dynamic Programming Mastery
      - Dynamic Programming Fundamentals
      - 2D Dynamic Programming
      - Advanced DP Patterns
      - Greedy Algorithms & Optimization
      - Backtracking & Branch and Bound
    - Month 6: Advanced Topics & Interview Preparation
      - Advanced Algorithms
      - System Design Basics for Interviews
  - PHASE 3: Interview Mastery (Months 7-9, Weeks 27-39)
    Master interview skills, tackle company-specific problems, and launch your tech career.
    - Months 7-8: Company-Specific Preparation
      - Google Interview Preparation
      - Amazon Interview Preparation
      - Meta (Facebook) Preparation
      - Microsoft & Apple Preparation
      - Startup & Unicorn Preparation
    - Month 9: Final Polish & Interview Simulation
      - Advanced Problem Patterns
      - Interview Week Simulation
      - Soft Skills & Communication
      - Career Strategy & Negotiation
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Complexity analyzer tool; Problem-solving template creator; Personal progress tracker; Array manipulation library; String utilities toolkit; Pattern matching visualizer; Linked list library from scratch; Recursion visualizer; Memory stack simulator; Expression evaluator; Browser history simulator; Task scheduler with priority queue; Search algorithm visualizer; Binary search template library; Search complexity analyzer - plus 88 more on the course page.

### Early Math Foundations: Playful, Concrete Math (Ages 4-7)

`/courses/early-math-foundations` · 12 months (52 weeks) · Ages 4-7 (kindergarten to grade 2), all starting points

  - PHASE 1: Counting That Means Something (Months 1-4)
    Counting looks simple and hides deep ideas: one number per object, the last number telling the total, quantities compared and conserved. This phase builds those ideas properly through objects, movement and games, the difference between reciting numbers and understanding them.
    - Month 1: Numbers as Quantities
      - A Playful First Look
      - One Number for Each Thing
      - Seeing Small Numbers Instantly
      - More, Fewer, or the Same?
    - Months 2-3: The Number World to 10
      - Number Symbols and Counting Both Ways
      - The Ten-Frame as Home Base
      - Breaking Numbers into Parts
      - First, Second, Third and Where Things Sit
    - Month 4: Patterns and Sorting + Stage Checkpoint
      - Patterns That Repeat
      - Sorting by How Things Are Alike
      - Patterns That Grow
      - Phase One Check Through Play
  - PHASE 2: Stories, Bonds and the Teen Numbers (Months 5-8)
    Addition and subtraction arrive as stories acted out with objects, joining, separating, comparing, long before symbols carry them. Bonds to 10 grow toward automaticity through games, and the famously confusing teen numbers get demystified with place-value materials.
    - Month 5: Addition and Subtraction as Stories
      - Adding and Taking Away as Stories
      - Counting On and Counting Back
    - Month 6: Bonds of 10 and Fact Families
      - The Pairs That Make Ten
      - One Number Trio, Four Facts
    - Month 7: Teen Numbers and Place Value Beginnings
      - Teen Numbers Are Ten and Some More
      - All the Way to Twenty
    - Month 8: Story Problems and the Explain Habit
      - Act It, Draw It, Write It
      - Missing Numbers and Phase Two Check
  - PHASE 3: To 100 and Into the World (Months 9-12)
    The number world expands to 100 with place-value understanding, and math steps into the child's world: measuring, money, time, shapes and simple data. The course closes with problem-solving courage and a confident handoff to grade-level mathematics.
    - Month 9: The Road to 100
      - Building Numbers from Tens and Ones
      - Skip Counting and the Hundred Square
    - Month 10: Two-Digit Confidence
      - Adding Two-Digit Numbers
      - Ten More and Ten Less
    - Month 11: Measurement, Money and Time
      - Measuring and Guessing
      - Money and Telling the Time
    - Month 12: Shapes, Data and Graduation
      - Shapes and Fair Shares
      - Graphs, Graduation and the Road Ahead

### Elementary Maths for Grades 1-5: Live Online Classes

`/courses/elementary-mathematics-complete-masterclass` · 10-12 months per level (3 levels, Grades 1-5) · Grades 1-5; every child is placed by grade and a short placement check

  - PHASE 1: Level A for Grades 1-2 (One School Year)
    The foundation year(s): numbers, place value, addition and subtraction, first multiplication, shapes, time, money and measurement, all learned with objects and pictures before symbols.
    - Months 1-2: Numbers and Counting
      - Introduction to Numbers and Counting
      - Numbers to 100 and Place Value
      - Basic Addition (Single Digit)
      - Basic Subtraction (Single Digit)
    - Months 3-4: Bigger Numbers and First Multiplication
      - Two-Digit Addition
      - Two-Digit Subtraction
      - Introduction to Multiplication
      - Geometry Basics: 2D Shapes
      - Mid-Level Review
    - Months 5-6: Time, Money and Measurement
      - Time and Calendar
      - Money and Financial Literacy
      - Length and Height Measurement
      - Weight and Capacity
      - Level A Exam and Celebration
  - PHASE 2: Level B for Grades 3-4 (One School Year)
    The fluency year(s): multiplication and division mastered properly, fractions and decimals understood instead of memorized, plus data, geometry, area and perimeter.
    - Months 1-2: Multiplication and Division Mastery
      - Advanced Multiplication Facts
      - Multi-Digit Multiplication
      - Introduction to Division
      - Long Division
      - Problem-Solving with Operations
    - Months 3-4: Fractions and Decimals
      - Understanding Fractions
      - Operations with Fractions
      - Introduction to Decimals
      - Decimal Operations
      - Data and Graphing
    - Months 5-6: Geometry, Area and the Level Exam
      - Advanced 2D Geometry
      - 3D Shapes and Volume
      - Area and Perimeter
      - Coordinate Geometry
      - Level B Exam and Celebration
  - PHASE 3: Level C for Grade 5 (One School Year)
    The bridge year: large numbers, advanced fractions, ratios and percentages, circle geometry, first algebra, probability and money maths, everything middle school assumes.
    - Months 1-2: Numbers and Fractions Mastery
      - Large Numbers and Place Value
      - Factors and Multiples
      - Complex Fraction Operations
      - Advanced Decimal Operations
    - Months 3-4: Proportional Thinking and Geometry
      - Ratios and Proportions
      - Percentages
      - Advanced Angle Relationships
      - Circle Geometry
    - Months 5-6: First Algebra, Data and the Level Exam
      - Variables and Expressions
      - Simple Equations
      - Advanced Data Analysis
      - Probability Fundamentals
      - Money Maths, Review and the Level C Exam

**Projects students build:** Create number book with illustrations; Number hunt around the house; Build counting games with everyday objects; 100 chart coloring patterns; Place value manipulative games; Create skip counting songs; Addition fact family houses; Create addition story problems book; Design addition board game; Subtraction story problems collection; Fact family triangles craft; Subtraction bowling game; Shopping mall addition game; Create addition puzzle cards; Design digital addition calculator - plus 105 more on the course page.

### Ethical Hacking Course: Authorized Pentesting, Zero to Pro

`/courses/ethical-hacking-masterclass-complete` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundations, Ethics and Reconnaissance (Months 1-3, Weeks 1-13)
    Build rock-solid networking and Linux foundations essential for ethical hacking. Master TCP/IP, operating systems, programming basics, and security fundamentals.
    - Months 1-2: Networking & Linux Fundamentals
      - Introduction to Ethical Hacking & Networking Basics
      - Linux Mastery for Hackers
      - Programming for Hackers - Python & Web Basics
      - Information Gathering & OSINT
    - Month 3: Scanning & Enumeration
      - Network Scanning & Enumeration
      - Web Application Scanning
      - Vulnerability Assessment
  - PHASE 2: Core Exploitation and Advanced Domains (Months 4-6, Weeks 14-26)
    Master system hacking, web application attacks, exploitation frameworks, and post-exploitation techniques.
    - Month 4: System Hacking & Exploitation
      - System Hacking & Password Attacks
      - Metasploit Framework & Exploitation
      - Web Application Hacking - OWASP Top 10
      - Advanced Web Attacks & API Security
      - Database Hacking & NoSQL Injection
    - Month 5: Network Attacks & Post-Exploitation
      - Network Attacks & Man-in-the-Middle
      - Wireless Network Hacking
      - Post-Exploitation & Lateral Movement
      - Malware Analysis & Reverse Engineering Basics
    - Month 6: Advanced Domains: Active Directory, Mobile and Cloud
      - Active Directory Attacks
      - Mobile Application Security
      - Cloud Security & Container Hacking
      - Physical Security & Social Engineering
  - PHASE 3: Advanced Offensive and Defensive Security (Months 7-9, Weeks 27-39)
    Master advanced exploitation, zero-day research, exploit development, and specialized security domains.
    - Month 7: Advanced Exploitation & Zero Days
      - Buffer Overflow Exploitation
      - Modern Exploit Mitigation Bypasses
      - Web Application Firewall Bypasses
      - Cryptography & Cryptanalysis
      - Red Team Operations
    - Month 8: DevSecOps & Automation
      - DevSecOps & CI/CD Security
      - Security Automation & Orchestration
      - Threat Hunting & Intelligence
      - Incident Response & Forensics
      - Compliance & Governance
    - Month 9: Emerging Security Domains
      - Zero Trust Architecture
      - Blockchain & Smart Contract Security
      - AI/ML Security
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Complete hacking lab setup with multiple VMs; Network topology design and implementation; Subnet calculator tool development; Protocol analyzer using Wireshark; Automation scripts for reconnaissance; Custom security monitoring dashboard; Log analysis automation tool; Linux hardening checklist implementation; Port scanner in Python; Password cracker for weak hashes; Web crawler for reconnaissance; Network packet sniffer; Simple vulnerability scanner; Complete OSINT profile builder; Automated reconnaissance framework - plus 158 more on the course page.

### Flutter Course: Dart to Real Cross-Platform Apps

`/courses/complete-flutter-app-development-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Core Flutter + Dart Skills (Months 1-3, Weeks 1-13)
    Build rock-solid programming and Flutter fundamentals. Learn Dart, understand Flutter’s widget tree, layout system, and create your first interactive cross‑platform apps.
    - Months 1-2: Dart Fundamentals & Flutter Basics
      - Introduction to Flutter, Dart & Development Environment Setup
      - Dart Basics, Variables, Data Types & Operators
      - Control Flow, Functions & Basic Collections
      - Core Flutter Widgets & Layout Basics
    - Month 3: Object-Oriented Programming with Dart & Stateful Widgets
      - Dart Classes, Objects & OOP Basics
      - Inheritance, Polymorphism & Flutter Stateful Widgets
      - Abstraction, Interfaces & PHASE 1 Mini Capstone
  - PHASE 2: Intermediate Flutter, State Management & App Architecture (Months 4-6, Weeks 14-26)
    Master advanced Dart, state management patterns, navigation, forms, local storage, and start building real-world, offline-capable Flutter apps.
    - Month 4: Advanced Dart, Layouts & State Management Foundations
      - Advanced Dart, Collections & Async Programming
      - Flutter Navigation, Routing & App Structure
      - Forms, Validation & User Input Handling
      - Flutter Layout Mastery, Lists & Responsive Design
      - Intro to State Management Patterns
    - Month 5: Persistent Storage, Offline Apps & Advanced State
      - Local Storage: SharedPreferences, SQLite & Object Persistence
      - State Management with Provider & Riverpod, Part 1
      - Advanced State Management: Riverpod / BLoC, Part 2
      - Flutter Animations & UX Polish
    - Month 6: Design Systems, APIs & Testing Foundations
      - Reusable Widgets, Design Systems & Theming
      - Networking & REST API Integration - Fundamentals
      - Intro to Testing Flutter Apps
      - Build Automation, Packages & Version Control
  - PHASE 3: Backend Integration, Firebase & Production Features (Months 7-9, Weeks 27-39)
    Master building connected apps with Firebase and REST backends, implement authentication, payments, notifications, and solid application architecture.
    - Month 7: Firebase, Auth & Real-World Features
      - Firebase Fundamentals & Realtime Data
      - Authentication & User Management
      - Cloud Storage, Media & File Handling
      - Push Notifications & In-App Messaging
      - Advanced Firebase: Queries, Security & Performance
    - Month 8: REST APIs, Payments & Robust Product Apps
      - Advanced REST APIs, Error Handling & Data Layers
      - In-App Purchases & Payment Gateway Integration
      - App Architecture in Depth: Clean Architecture & Large App Design
      - Testing Connected Apps (REST + Firebase)
    - Month 9: Production Hardening
      - Performance Optimization & App Size Management
      - Error Reporting, Logging & Analytics
      - Security & Data Protection in Flutter Apps
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello Flutter app with personalized welcome screen; Digital visiting card app (name, role, contact info); Simple profile screen with image, text and icons; Two-screen mini app using basic navigation; Kids track variant: Colorful "My Favorite Things" app; Simple console calculator (add, subtract, multiply, divide); Tip & bill split calculator (per person amount); Age & birthday countdown calculator; Unit converters: temperature, length, weight; Kids variant: Score tracker for a simple game; Number guessing game (console or Flutter dialog-based); Grade calculator with letter-grade output; To-do list data model (List operations) with console UI; Simple quiz logic engine (questions and scoring); Kids variant: Multiplication practice generator - plus 147 more on the course page.

### Frontend Development for Teens: CSS Craft to React UI

`/courses/frontend-development-masterclass-for-teens` · 9-11 months (36-44 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Foundations (Months 1-3, Weeks 1-12)
    HTML with meaning, CSS with discipline, layouts that survive every screen, and first JavaScript.
    - Month 1: Structure and Style
      - Introduction to Web Development
      - CSS Styling & Design
    - Month 2: Layout Mastery
      - Flexbox & Grid Layouts
      - Responsive Design & Mobile First
    - Month 3: First JavaScript
      - JavaScript Basics
      - Control Flow & Logic
  - PHASE 2: The Styling Craft (Months 4-6, Weeks 13-24)
    Where interfaces start feeling expensive: the DOM, live data, modern CSS, SASS architecture, Tailwind and animation.
    - Month 4: Living Pages
      - DOM Manipulation
      - Asynchronous JavaScript & APIs
    - Month 5: Modern CSS and Architecture
      - Modern CSS Techniques
      - SASS/SCSS & CSS Architecture
    - Month 6: Tailwind and Motion
      - Tailwind CSS & Utility-First
      - Animation: Interfaces That Feel Alive
  - PHASE 3: React for UI Builders (Months 7-8, Weeks 25-32)
    React as a UI instrument: components, hooks, styling strategies, and the crowning project of the phase, a design system of your own.
    - Month 7: React Essentials
      - React Basics
      - React Hooks Deep Dive
    - Month 8: Styling React and Design Systems
      - Styling in React
      - Your Own Design System
  - PHASE 4: The Finishing School (Month 9, Weeks 33-36)
    The two marks of professional frontend, accessibility and performance, then the polished capstone and the final exam.
    - Month 9: Polish, Capstone, Demo Day
      - Accessibility and SEO Basics
      - Performance: Measured, Then Fixed
      - Capstone Build
      - Demo Day and the Final Exam

**Projects students build:** Personal introduction webpage; Favorite artist fan page; School project presentation site; Recipe collection page; Animated landing page; CSS art challenge; Interactive button collection; Photo gallery with effects; Instagram-style photo grid; YouTube homepage layout; Discord server layout; Pinterest-style masonry; Fully responsive portfolio; Mobile-first blog design; Responsive e-commerce page - plus 56 more on the course page.

### Full Stack Developer Course: React, Node.js and DevOps Basics

`/courses/full-stack-web-development-masterclass-college` · 12-14 months (48-56 weeks) · Complete beginner; college students, graduates and career switchers (18+)

  - PHASE 1: Foundations (Months 1-3, Weeks 1-12)
    Computing, HTML, CSS and JavaScript built to real depth. The phase ends with an interactive, API-powered project deployed to a public URL.
    - Month 1: How the Web Is Built
      - Computing, the Web and Your Toolkit
      - HTML5 Done Properly
      - CSS Fundamentals
      - Flexbox, Grid and Responsive Layouts
    - Month 2: JavaScript Fundamentals
      - JavaScript Basics and Syntax
      - Control Flow, Loops and Arrays
      - Functions, Scope and Closures
      - Objects and Data Structures
    - Month 3: The Interactive Web
      - The DOM
      - Events and User Interaction
      - Practical JavaScript: Errors, Storage and Regex
      - Async JavaScript, APIs and the First Deploy
  - PHASE 2: TypeScript and React (Months 4-6, Weeks 13-24)
    Modern JavaScript mastery, TypeScript from the start, and React the way production teams write it, ending in a frontend capstone.
    - Month 4: Modern JavaScript Mastery
      - ES6+ in Depth
      - Object-Oriented JavaScript
      - Functional Programming Patterns
      - Modules, npm and Build Tools
    - Month 5: TypeScript and React Core
      - TypeScript Fundamentals
      - React Fundamentals
      - Hooks and State
      - Advanced React Patterns
    - Month 6: State, Styling and the Frontend Capstone
      - State Management with Redux Toolkit
      - React with TypeScript
      - Styling: Tailwind and Component Libraries
      - Frontend Capstone
  - PHASE 3: Backend Engineering (Months 7-9, Weeks 25-36)
    Node and Express done properly, both database families, safe authentication, OWASP security and real-time, ending with a deployed backend capstone.
    - Month 7: Node and Express
      - Node.js Fundamentals
      - Express.js Framework
      - RESTful API Design
      - Production Express: Middleware and Hardening
    - Month 8: Both Database Families
      - MongoDB
      - Mongoose ODM
      - SQL and PostgreSQL
      - Prisma and Choosing Your Database
    - Month 9: Auth, Security and Real-Time
      - Authentication and Authorization
      - API Security: The OWASP Essentials
      - Real-Time with Socket.io
      - Backend Capstone
  - PHASE 4: Production Engineering and the Capstone (Months 10-12, Weeks 37-48)
    What separates course graduates from employable developers: testing, Next.js, performance, Docker, CI/CD, cloud fundamentals, system design, AI features, and a shipped capstone.
    - Month 10: Quality and the Modern Stack
      - Testing Across the Stack
      - Next.js and Server-Side Rendering
      - Performance: Measuring and Fixing
      - Backend Patterns: Caching, Jobs and Integrations
    - Month 11: Docker, CI/CD, Cloud and AI
      - Docker and Containers
      - CI/CD with GitHub Actions
      - System Design Fundamentals
      - AI Features, End to End
    - Month 12: The Capstone
      - Capstone Planning and Cloud Setup
      - Capstone Build
      - Launch, Demo Day and What Comes Next

**Projects students build:** Set up complete development environment; Create first GitHub repository; Write 'About Me' HTML page; Personal portfolio website (HTML only); Restaurant menu page with images and tables; Multi-page contact form with validation; Style your portfolio with beautiful CSS; Create a styled blog post layout; Design a product card component; Holy grail layout with Flexbox and Grid; Responsive navigation menu; Photo gallery with Grid; Complete responsive landing page; Temperature converter; Simple tip calculator - plus 146 more on the course page.

### Full Stack Web Development for Teens: React and Node.js

`/courses/full-stack-web-development-teens-masterclass` · 12-14 months (48-56 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Web Foundations (Months 1-3, Weeks 1-12)
    The real base: HTML with meaning, CSS that survives a phone, and JavaScript learned deeply enough that React will make sense instead of feeling like magic.
    - Month 1: HTML and CSS
      - How the Web Works, and Your First Pages
      - Forms, Structure and Meaning
      - CSS: Making It Look Right
      - Flexbox, Grid and Responsive Design
    - Month 2: JavaScript, Properly
      - JavaScript Fundamentals
      - Control Flow and Functions
      - The DOM: Making Pages Interactive
      - Interactive Projects Week
    - Month 3: Modern JavaScript and the First Deploy
      - Arrays, Objects and Data Thinking
      - Async JavaScript and Real APIs
      - ES6+, Modules and npm
      - Phase 1 Capstone: Ship a Real Site
  - PHASE 2: The React Frontend (Months 4-6, Weeks 13-24)
    React the way it is actually written now: components, hooks, routing, real styling, TypeScript, a taste of Next.js, and a frontend capstone.
    - Month 4: React Core
      - Thinking in React
      - Hooks and Effects
      - Routing and Multi-Page Apps
      - Fetching Data Like a Professional
    - Month 5: React Craft
      - State Management That Scales
      - TypeScript for React
      - UI/UX for Developers
      - Tailwind and Component Libraries
    - Month 6: Next.js Taste and the Frontend Capstone
      - Performance and PWA Basics
      - A Taste of Next.js
      - Frontend Capstone
  - PHASE 3: Backend and Databases (Months 7-9, Weeks 25-36)
    The engine room: Node and Express, MongoDB and SQL, authentication done safely, and the moment the two halves connect into one deployed application.
    - Month 7: Node, Express and MongoDB
      - Node.js Fundamentals
      - Express: Your First Server
      - MongoDB and Mongoose
      - REST API Design
    - Month 8: Authentication, SQL and Safety
      - Authentication Done Safely
      - SQL and PostgreSQL Essentials
      - API Security and Performance
      - Backend Capstone: A Deployed API
    - Month 9: The Two Halves Connect
      - Full-Stack Architecture with MERN
      - Real-Time with Socket.io
      - Full-Stack Deployment
      - Full-Stack Mini Build
  - PHASE 4: AI, Quality and the Capstone (Months 10-12, Weeks 37-48)
    The final level: uploads and integrations, AI features built with guardrails, testing across the stack, and a four-week capstone shipped like a product.
    - Month 10: Power-Ups and AI
      - Uploads, Email and Integrations
      - Machine Learning for Web Developers
      - AI Features with Guardrails
      - Testing Across the Stack
    - Month 11: Ship Like a Professional
      - Git Workflow and CI Basics
      - Security Hardening Pass
      - Performance and Polish Pass
      - Capstone Planning
    - Month 12: The Capstone
      - Capstone Build
      - Launch Week
      - Demo Day and What Comes Next

**Projects students build:** Personal profile page; Favorite band/artist fan page; School project presentation website; Multi-page school website; Survey form for friends; Restaurant menu with ordering form; Style your HTML projects beautifully; Create a magazine-style layout; Design product cards like Amazon; Responsive portfolio website; Animated landing page; Instagram-style photo grid; Interactive calculator; Mad libs game generator; Grade calculator for school - plus 92 more on the course page.

### Functional Skills Maths Level 1 and Level 2 Course Online

`/courses/functional-skills-maths-course` · 6 months (24 weeks) for a full level; shorter for learners who start part-way · Adults, apprentices and post-16 learners working towards Functional Skills maths at Level 1 or Level 2

  - PHASE 1: Using Numbers (Months 1-2, Weeks 1-8)
    The number skills every other part of the course depends on. Level 1 learners build the foundations; Level 2 learners extend them to percentage change, ratio and inverse proportion.
    - Month 1: Whole Numbers, Fractions and Decimals
      - Weeks 1-2: Starting Check and Whole Numbers
      - Weeks 3-4: Fractions and Decimals
    - Month 2: Percentages, Ratio and Proportion
      - Weeks 5-6: Percentages
      - Weeks 7-8: Ratio, Proportion and Formulae
  - PHASE 2: Measures, Shape and Space (Months 3-4, Weeks 9-16)
    Maths for money, measuring and making things fit. Contexts include budgets, travel, decorating, delivery and the workplace.
    - Month 3: Money, Time and Units
      - Weeks 9-10: Money and Budgeting
      - Weeks 11-12: Time, Units and Compound Measures
    - Month 4: Shape and Space
      - Weeks 13-14: Perimeter, Area and Volume
      - Weeks 15-16: Scale, Plans and Position
  - PHASE 3: Handling Information and Data (Month 5, Weeks 17-20)
    Reading, presenting and questioning data, the skill employers notice most when it is missing.
    - Month 5: Data, Averages and Probability
      - Weeks 17-18: Tables, Charts and Graphs
      - Weeks 19-20: Averages, Range and Probability
  - PHASE 4: Exam Practice (Month 6, Weeks 21-24)
    Full practice assessments in the style of your exam centre's awarding organisation, with the non-calculator and calculator sections taken under real timing.
    - Month 6: Practice Assessments
      - Weeks 21-22: Underpinning Skills and Problem Solving
      - Weeks 23-24: Final Practice and Exam Readiness

**Projects students build:** Personal method sheet: one worked example of each written method; Real-life problem set: a recipe scaled and a bill split, solved with fractions; Shopping comparison: three offers compared with percentages and a written recommendation; Workplace task: a staffing or mixing problem solved and explained in a short note; Monthly budget: a realistic household or event budget built and checked; Journey plan: a trip timed and costed from a real timetable; Room project: flooring and paint worked out for a real room plan, with costs; Scale plan: a simple floor plan drawn to scale from real measurements; Data report: a small real data set presented two ways with a written comparison; Comparison task: two shops, teams or months compared with averages and range; Error log started from the first practice assessment; Completed error log and method sheet, kept for revision.

### Game Development Course: Unity, C# & Unreal Engine

`/courses/game-development-complete-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Game Fundamentals & 2D Development (Months 1-3, Weeks 1-13)
    Build solid foundations in game design theory, 2D game development, and Unity basics while creating your first playable games.
    - Months 1-2: Game Design & 2D Fundamentals
      - Introduction to Game Development
      - Game Design Fundamentals
      - 2D Game Development with Unity
      - Programming Fundamentals with C#
    - Month 3: Complete 2D Games
      - Building Complete 2D Games
      - 2D Art and Animation
      - Audio and Polish
  - PHASE 2: 3D Development & Advanced Unity (Months 4-6, Weeks 14-26)
    Master 3D game development, advanced C# programming, and professional Unity techniques.
    - Months 4-5: 3D Game Development
      - 3D Fundamentals in Unity
      - 3D Animation and Characters
      - Advanced C# for Games
      - AI for Games
      - 3D Game Projects
    - Month 6: Mobile & Cross-Platform Games
      - Mobile Game Development
      - Cross-Platform Development
      - Phase 2 Capstone Project
  - PHASE 3: Unreal Engine & Advanced Programming (Months 7-9, Weeks 27-39)
    Master Unreal Engine, C++ game programming, graphics programming, and advanced game systems.
    - Months 7-8: Unreal Engine Mastery
      - Unreal Engine Fundamentals
      - C++ Game Programming
      - Advanced Unreal Systems
      - Graphics Programming
      - Engine Architecture
    - Month 9: Multiplayer & Networking
      - Multiplayer Fundamentals
      - Advanced Multiplayer Systems
      - Phase 3 Capstone Project
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Write your first Game Design Document; Analyze 5 favorite games critically; Create paper prototype of simple game; Set up Unity and development environment; Design a complete game concept with mechanics; Create difficulty curve for a game; Design reward system for mobile game; Build paper prototype and playtest it; Create animated sprite character; Build tilemap-based level; Implement 2D platformer mechanics; Add particle effects and polish; Player movement controller; Enemy AI basic behavior; Inventory system - plus 82 more on the course page.

### Game Development for Kids: Scratch, Roblox and Minecraft

`/courses/game-development-masterclass-for-kids` · 6-8 months (26-32 weeks) · Complete beginner, ages 8 to 12

  - PHASE 1: Game Logic in Scratch (Months 1-2, Weeks 1-8)
    The mechanics under every game, built by the child: movement, scoring, enemies, and complete first games that work.
    - Months 1-2: Scratch Game Mastery
      - Introduction to Game Development
      - Game Mechanics & Player Control
      - Advanced Scratch Game Development
      - Introduction to GDevelop
  - PHASE 2: 2D Game Mastery (Months 3-4, Weeks 9-17)
    From working to wonderful: levels, polish, game feel and bigger 2D builds that friends genuinely want to play.
    - Months 3-4: Bigger, Better 2D Games
      - Construct 3 Game Engine
      - Game Art & Animation
      - Mobile Game Development
      - GameMaker Studio Basics
      - Phase Review and Showcase
  - PHASE 3: 3D Worlds and the Finale (Months 5-6, Weeks 18-26)
    The leap kids dream about: Roblox Studio worlds, coded Minecraft builds, first multiplayer fun, and the capstone presented at demo day.
    - Months 5-6: Roblox, Minecraft and the Capstone
      - Roblox Studio Fundamentals
      - Advanced Roblox Development
      - Minecraft Modding & Creation
      - Unity with Visual Scripting
      - Capstone and the Final Exam

**Projects students build:** Catch the falling objects game; Simple maze game; Pet virtual game; Two-player tag game; Platformer with jumping; Racing game with timer; Shooting game with score; Puzzle with levels; Multi-level adventure game; RPG with inventory; Battle arena game; Story-driven game; Physics puzzle game; Endless runner; Tower defense game - plus 38 more on the course page.

### Game Development for Teens: Unity, C# and Real Shipped Games

`/courses/complete-game-development-masterclass-for-teens` · 10-12 months (40-48 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Complete 2D Games (Months 1-3, Weeks 1-12)
    C# learned through games, Unity 2D mastered properly, and the phase ends the only way that matters: a finished game, published.
    - Month 1: Foundations Through Games
      - Welcome to Game Development
      - C# for Games
      - Unity 2D Fundamentals
      - Game Physics and Collision
    - Month 2: Mechanics That Feel Good
      - Player Movement and Game Feel
      - Enemy AI and Behaviors
      - Game UI and Menus
      - Animation and Visual Effects
    - Month 3: Finish and Ship
      - Audio and Music in Games
      - Level Design
      - Save Systems and Progress
      - Phase 1 Capstone: Publish Your Game
  - PHASE 2: 3D Worlds (Months 4-6, Weeks 13-24)
    The jump to 3D done properly: controllers, animation, environments, your own Blender assets, shaders, procedural generation, and a finished 3D game.
    - Month 4: 3D Fundamentals
      - 3D Basics in Unity
      - 3D Character Controllers
      - 3D Animation with Mixamo
      - 3D Environments and Terrain
    - Month 5: The Craft Around the Code
      - Blender: Your Own 3D Assets
      - Game Design Theory
      - Game AI and Pathfinding
      - Shader Graph and Visual Polish
    - Month 6: Finish a 3D Game
      - Procedural Generation
      - Optimization and Profiling
      - 3D Game Build Week
      - Phase 2 Capstone and Review
  - PHASE 3: Multiplayer, Mobile and the Wider Craft (Months 7-8, Weeks 25-32)
    The systems that make games feel modern: multiplayer basics, mobile builds, an honest week inside Unreal, AI in game development, narrative, and accessibility.
    - Month 7: Multiplayer and Mobile
      - Multiplayer Basics
      - Multiplayer Systems in Practice
      - Mobile Game Builds
      - Leaderboards, Achievements and Saves Online
    - Month 8: The Wider Craft
      - An Honest Week in Unreal Engine
      - AI in Game Development
      - Game Narrative and Writing
      - Accessibility and Inclusive Design
  - PHASE 4: Production and the Capstone (Months 9-10, Weeks 33-40)
    The final month pair runs like a small studio: pipeline, polish, publishing, and a capstone game shipped and presented at demo day.
    - Month 9: Studio Habits
      - How Real Games Get Made
      - Polish and Game Feel Week
      - Publishing on itch.io and Game Jams
      - Portfolio and Devlog
    - Month 10: The Capstone
      - Capstone Pre-Production
      - Capstone Build
      - Launch, Demo Day and What Comes Next

**Projects students build:** Pong remake; Breakout/Arkanoid clone; Simple clicker game; Text adventure game; Number guessing game; Rock Paper Scissors with AI; Simple RPG battle system; Dice rolling game; Top-down shooter; Endless runner like Temple Run; 2D platformer basics; Asteroids remake; Angry Birds clone; Pinball game; Physics puzzle game - plus 104 more on the course page.

### GCSE Computer Science: AQA, OCR and Edexcel Exam Prep

`/courses/gcse-computer-science-course` · 6 months (24 weeks), joinable any month · GCSE students on AQA, OCR or Edexcel Computer Science; taught from the basics, no prior coding required

  - PHASE 1: Programming That Survives Paper 1 (Months 1-2)
    Real Python, written by hand, plus the code-tracing habit that carries more marks than any single topic on the specification.
    - Month 1: Python Fundamentals and Code Tracing
      - Variables, Input and Output, and Reading an Error
      - Selection, and the Conditions Examiners Set
      - Iteration, and Two-Column Trace Tables
      - Lists, Strings and Standard Algorithms
    - Month 2: Subprograms, Files and Robust Programs
      - Functions, Procedures and Parameters
      - File Handling and Data Validation
      - Testing, Debugging and the Language of Errors
      - Paper 1 Under Time
  - PHASE 2: Computing Concepts and Systems (Months 3-4)
    The theory half, taught as systems that relate to each other rather than as vocabulary to be memorised, because that is what the longer questions reward.
    - Month 3: Data Representation and Computer Systems
      - Binary, Hexadecimal and Binary Arithmetic
      - Images, Sound and Compression
      - The CPU, the Fetch-Decode-Execute Cycle and Memory
      - Software, Translators and Systems Architecture
    - Month 4: Networks, Security, Databases and Impact
      - Networks, Topologies and Protocols
      - Cyber Security and Threats
      - Databases and SQL
      - Ethical, Legal and Environmental Impact
  - PHASE 3: Board-Specific Exam Mastery (Months 5-6)
    The half of the course that separates the three specifications, spent entirely on the papers this student will actually sit.
    - Month 5: Your Board's Papers, In Their Own Format
      - Knowing Your Own Specification
      - Command Words and the Mark Scheme
      - The Long Questions
      - Full Paper 1, Marked and Reviewed
    - Month 6: Full Papers and Final Preparation
      - Full Paper 2, Marked and Reviewed
      - Targeted Repair
      - Second Full Set
      - Exam Week Readiness

### GCSE Maths Resit Course Online: Post-16 and Adults

`/courses/gcse-maths-resit-course` · 6 months (24 weeks) for a summer entry; a shorter plan for the November series · Learners aged 16 and over, and adults, resitting GCSE Maths with AQA, Edexcel or OCR

  - PHASE 1: Diagnostic and Number (Months 1-2, Weeks 1-8)
    Find the lost marks first, then repair number, the strand that runs through every paper and dominates the non-calculator paper.
    - Month 1: Diagnostic and the Lost-Marks Map
      - Weeks 1-2: The Diagnostic Paper
      - Weeks 3-4: Number Without a Calculator
    - Month 2: Fractions, Decimals and Percentages
      - Weeks 5-6: Fractions and Decimals
      - Weeks 7-8: Percentages and Money
  - PHASE 2: Algebra and Ratio (Months 3-4, Weeks 9-16)
    The strands where resit learners most often lose marks they could win: forming and solving equations, reading graphs, and ratio in context.
    - Month 3: Expressions, Equations and Graphs
      - Weeks 9-10: Expressions and Equations
      - Weeks 11-12: Sequences and Graphs
    - Month 4: Ratio, Proportion and Rates
      - Weeks 13-14: Ratio and Proportion
      - Weeks 15-16: Rates and Compound Measures
  - PHASE 3: Geometry, Probability and Statistics (Month 5, Weeks 17-20)
    Shape, space and data, taught to the depth your tier needs and practised in exam-style questions.
    - Month 5: Geometry, Probability and Statistics
      - Weeks 17-18: Geometry and Measures
      - Weeks 19-20: Probability and Statistics
  - PHASE 4: Full Papers (Month 6, Weeks 21-24)
    No new content. Full sets of three papers at your tier under real timing, marked against published mark schemes, with repair lessons between papers.
    - Month 6: Paper Sets and Repair
      - Weeks 21-22: Full Sets Under Timing
      - Weeks 23-24: Final Set and Exam Readiness

**Projects students build:** Lost-marks map: every topic coloured by how many marks it cost; Non-calculator method sheet: one worked example of every written method; Repair log: each fraction slip from the diagnostic re-done correctly; Money problem set: interest, discounts and comparisons solved two ways; Equation bank: one solved example of each equation type, with a check by substitution; Graph file: six graph types drawn and annotated; Ratio problem set: five real contexts solved with a bar model and then algebra; Repair log updated: ratio and rate errors from the diagnostic re-done; Geometry sheet: every formula and angle fact with a worked example; Data question bank: one solved example of every chart and average type; Paper tracker: every paper's score on one chart; Completed paper tracker and lost-marks map, kept for revision.

### GCSE Maths: Foundation & Higher (9-1), AQA, Edexcel, OCR

`/courses/gcse-mathematics-mastery` · 18 months (72 weeks), joinable any month · Years 9-11 GCSE students, Foundation and Higher tiers, plus resit candidates

  - PHASE 1: The Core, Built Properly (Months 1-6)
    Foundation-tier territory owned deeply is what Higher-tier grades stand on. This phase rebuilds number fluency without a calculator, teaches algebra as a language, and secures the geometry and statistics basics, with the diagnostic finding the true starting point first.
    - Months 1-2: Diagnostic + Number, Bare-Handed
      - Diagnostic, Board and Tier Fit
      - Fractions, Decimals and Percentages to Fluency
      - Ratio and Proportion Reasoning
      - Indices, Standard Form and Bounds
    - Months 3-4: Algebra as a Language
      - Expressions, Expansion and Factorisation
      - Linear Equations, Inequalities and Formulae
      - Straight-Line Graphs and y = mx + c
      - Simultaneous Equations and Sequences
    - Months 5-6: Shape and Data Foundations
      - Angle Reasoning and Justification
      - Area, Perimeter, Volume and Pythagoras
      - Averages, Charts and Correlation
      - Phase 1 Checkpoint Paper
  - PHASE 2: The Higher Reach, With Settling Time (Months 7-12)
    The topics that separate grade 5 from grade 9, taught months before the exam so they are owned rather than crammed: quadratics and functions, trigonometry beyond right angles, vectors, circle theorems and the algebraic craft the top questions assume.
    - Months 7-8: Quadratics and Functions
      - Solving Quadratics Three Ways
      - Quadratic Graphs and Turning Points
      - Functions: Composite and Inverse
      - Graph Transformations and Algebraic Fractions
    - Months 9-10: Trigonometry, Vectors and Circle Theorems
      - Right-Triangle Trigonometry and Exact Values
      - Sine and Cosine Rules
      - Vectors and Geometric Proof
      - Circle Theorems
    - Months 11-12: Probability, Proportion and the Grade 8-9 Craft
      - Probability, Trees and Venn Diagrams
      - Proportion and Rates of Change
      - Histograms and Cumulative Frequency
      - Phase 2 Higher-Tier Checkpoint
  - PHASE 3: Paper Craft to the Exam Series (Months 13-18)
    Three papers, one strictly non-calculator, sat over exam season: this phase turns understanding into grades with board-exact past-paper cycles, personal timing plans, mark-banking discipline and a peak plan that meets the series calmly.
    - Months 13-14: The Three-Paper System
      - Paper 1 Craft, Non-Calculator
      - Papers 2 and 3 Calculator Craft
    - Months 15-16: Full Cycles by Board
      - Full Board-Exact Paper Cycles
      - Timing Plans and Weak-Topic Rotations
    - Months 17-18: The Series, Met Calmly
      - Final Cycles and Error-Log Closure
      - Peak Plan and Exam-Day Routines

### Generative AI Course: LLMs, RAG and AI Agents

`/courses/complete-generative-ai-masterclass-college` · 10-12 months (40-48 weeks) · Complete beginner (18+); Python and the maths are built inside the course

  - PHASE 1: Foundations (Months 1-3, Weeks 1-12)
    Python, the working mathematics, and enough real ML and neural-network understanding that everything generative later makes sense from the inside.
    - Month 1: Python for AI Engineering
      - Python Fundamentals & Development Setup
      - Advanced Python & Data Manipulation
    - Month 2: The Working Mathematics
      - Mathematics for AI - Part 1
      - Mathematics for AI - Part 2 & Statistics
    - Month 3: ML and Neural Networks, the Fast Honest Pass
      - Introduction to Machine Learning
      - Neural Networks & Deep Learning Basics
  - PHASE 2: The LLM Core (Months 4-6, Weeks 13-24)
    Transformers understood deeply enough to reason about, APIs across providers, prompt engineering with evaluation harnesses, embeddings, and RAG built for the first time.
    - Month 4: Transformers and APIs
      - Transformer Architecture Deep Dive
      - LLM APIs Across Providers
    - Month 5: Prompt Engineering and Embeddings
      - Advanced Prompt Engineering
      - Embeddings and Vector Databases
    - Month 6: Frameworks and First RAG
      - LangChain Fundamentals
      - Retrieval Augmented Generation (RAG) - Part 1
  - PHASE 3: Agents and Adaptation (Months 7-8, Weeks 25-32)
    RAG hardened for the real world, agent architecture with tools and memory, and fine-tuning judgment: what it changes, what it costs, when it is wrong.
    - Month 7: Hardened RAG and First Agents
      - RAG for the Real World
      - AI Agents Architecture - Part 1
    - Month 8: Agent Systems and Fine-Tuning
      - Agent Systems: Memory, Planning and Guardrails
      - Fine-tuning Fundamentals
  - PHASE 4: Production and the Capstone (Months 9-10, Weeks 33-40)
    Open-weight models run locally, production architecture with observability and security, responsible AI, and a capstone shipped behind an API and defended.
    - Month 9: Open Weights and Production Architecture
      - Open Source LLMs & Local Deployment
      - Production Architecture, Observability and Security
    - Month 10: Ethics, Capstone and the Final Exam
      - Responsible GenAI
      - Capstone Build
      - Demo Day and the Final Exam

**Projects students build:** Text-based calculator program; Todo list application; File organizer script; Simple data analyzer from CSV; Web scraper basics with requests; Command-line application; Personal expense tracker; Password generator and validator; Data analysis pipeline for CSV files; Student grade analyzer with Pandas; Weather data visualizer; E-commerce sales dashboard; Stock price analyzer and plotter; Text file analyzer with regex; Custom data class library - plus 138 more on the course page.

### Git & GitHub Course for College Students: Team-Ready Skills

`/courses/git-github-version-control-course-for-college-students` · 24 classes (12 weeks · 2 classes/week) · Beginner to job-ready collaborator (college students and recent graduates)

  - Phase 1: Foundations Fast
    Go from zero to confident daily Git use: how version control thinks, complete CLI fluency, an undo toolkit you can trust in any situation, and repository hygiene that keeps secrets and junk out of history.
    - Class 1: How Version Control Thinks: Concepts, Install & First Config
    - Class 2: CLI Fluency: init, add, commit, log & diff Like You Mean It
    - Class 3: The Full Undo Toolkit: restore, reset, revert & When Each Is Safe
    - Class 4: .gitignore for Real Stacks, Secrets & Commit Craft
  - Phase 2: GitHub for Your Career
    Turn GitHub into a career asset: SSH and remotes done properly, READMEs and licenses recruiters respect, a profile that survives a 30-second scan, the Student Developer Pack claimed, and a live portfolio on GitHub Pages.
    - Class 5: GitHub, SSH Keys & Your First Push
    - Class 6: Clone, Fetch, Pull & Speaking Remote Fluently
    - Class 7: READMEs & Licenses: Repos Recruiters Actually Read
    - Class 8: Profile README, Pinned Repos & the Student Developer Pack
    - Class 9: Ship Your Portfolio on GitHub Pages
  - Phase 3: Team Workflows
    Work the way engineering teams work: feature branches, clean history with merge and rebase, real conflict resolution, pull requests with meaningful review, and issues and Projects boards that keep group assignments and hackathons on track.
    - Class 10: Branches & the Feature-Branch Workflow
    - Class 11: Merge vs Rebase & Keeping History Clean
    - Class 12: Resolving Merge Conflicts Under Deadline Pressure
    - Class 13: Pull Requests With Meaningful Descriptions
    - Class 14: Code Review: Giving & Receiving Like a Professional
    - Class 15: Issues, Projects, Forks & Running a Team Repo
  - Phase 4: Automation & Open Source
    Automate quality and step into the open source world: CI that runs your tests on every push, branch protection that enforces discipline, professional versioning and releases, and a real contribution roadmap through Hacktoberfest and GSoC preparation.
    - Class 16: GitHub Actions: CI That Runs Your Tests on Every Push
    - Class 17: Status Checks, Branch Protection & Team Discipline
    - Class 18: Conventional Commits, Tags & Releases
    - Class 19: Contributing to Open Source: Etiquette & Your First PR
    - Class 20: Hacktoberfest, GSoC & Your Open Source Roadmap
  - Phase 5: Advanced Git & Capstone
    The finishing layer: advanced rescue and history-debugging tools, the interview questions that filter candidates, and a team capstone shipped with the complete professional workflow, followed by your certificate.
    - Class 21: stash, cherry-pick & reflog: The Rescue Kit
    - Class 22: git bisect & Debugging With History
    - Class 23: Git Interview Questions & Whiteboard Scenarios
    - Class 24: Capstone: Ship a Team Project the Professional Way + Certificate

**Projects students build:** Install Git, complete your global configuration, create your first repository with git init, and explore the hidden .git folder to see where history actually lives; Build a personal-notes repository with at least 8 meaningful commits, using git add -p at least twice and reading your own history with git log --oneline --graph; Run a scripted rescue drill: amend a bad message, soft-reset a premature commit, hard-reset a failed experiment, and revert a bad commit that was already pushed to a practice remote; Take a messy starter project with node_modules, a fake .env, and editor junk already tracked; write a production-grade .gitignore, untrack the offenders with git rm --cached, and re-commit cleanly; Create or clean up your GitHub account, set up ed25519 SSH authentication end to end, and push your Class 4 repository with git push -u origin main; Simulate a two-computer workflow using two local clones of your own repository: make diverging changes, inspect with git fetch, reconcile with git pull --rebase, and push; Rewrite the README of your best existing project to the professional template, add a screenshot and a suitable license, and complete the repo description and topics; Ship your profile README in the username/username repository, pin your best repositories, complete your bio, and submit your Student Developer Pack verification; Deploy a portfolio site at username.github.io featuring at least three projects with live links, then add the portfolio URL to your GitHub bio and resume; Build two features of a small app on separate branches (feature/navbar and feature/contact-form), merge both into main, and delete the merged branches; Take a feature branch with five messy WIP commits, use git rebase -i to squash and reword them into two clean commits, then rebase onto an updated main and merge; Run a staged three-person conflict lab: all three teammates edit the same function on separate branches, then merge every branch into main resolving each conflict correctly; Open a real PR on your team repository with a complete description, screenshots, and a linked issue; get it reviewed by a classmate and squash-merge it; Complete a paired review cycle: review a classmate's PR leaving at least one suggested change and one question, and shepherd your own PR from Request changes to Approved; Set up your capstone team repository: issue templates, labels, a milestone, a Projects board with 10+ scoped issues, and a fork-based contributor test run with upstream syncing - plus 9 more on the course page.

### Git & GitHub Course for Teens: Version Control from Zero

`/courses/git-github-version-control-course-for-teens` · 24 classes (12 weeks · 2 classes/week) · Beginner-friendly (ages 13-18) to confident GitHub collaborator

  - Phase 1: Git Foundations
    Understand why version control exists, install Git on your own machine, get comfortable in the terminal from zero, and master the everyday cycle of init, status, add, commit, log, diff, and safe undo.
    - Class 1: Why Version Control? (The Lost Homework Horror Story)
    - Class 2: Terminal Survival Skills (Zero Assumed)
    - Class 3: Your First Repository: init, status, add, commit
    - Class 4: Time Travel: log, diff, and Inspecting History
    - Class 5: Undoing Safely + .gitignore
  - Phase 2: GitHub Essentials
    Take your repositories online: create your GitHub account, set up SSH keys, push and pull, write READMEs people actually read, build your profile page, understand licenses and issues, and publish a free website with GitHub Pages.
    - Class 6: Joining GitHub (13+) and Your First Push
    - Class 7: HTTPS vs SSH: Keys, Cloning, and Pulling
    - Class 8: READMEs That Make People Care (Markdown)
    - Class 9: Your Profile README and GitHub Identity
    - Class 10: Licenses, Issues, and Repo Housekeeping
    - Class 11: Publish Your First Website Free with GitHub Pages
  - Phase 3: Branching & Collaboration
    Learn the skill that separates solo coders from teammates: branches, merges, calm conflict resolution, pull requests end to end, kind code review, forks with upstream syncing, and a real two-person project on one shared repository.
    - Class 12: Branches: Parallel Universes for Your Code
    - Class 13: Merging Branches Like a Pro
    - Class 14: When Branches Collide: Conflicts Made Simple
    - Class 15: Pull Requests End to End
    - Class 16: Reviewing Kindly + Forks and Upstream
    - Class 17: Team Project: Two People, One Repo
  - Phase 4: Level Up
    Move past the basics with the tools developers reach for daily: a safe introduction to rebase, git stash for interruptions, tags and releases for shipping versions, your first GitHub Actions automation, and a portfolio pass that makes your profile genuinely readable.
    - Class 18: Merge vs Rebase, a Safe Introduction
    - Class 19: Stash, Tags, and Releases
    - Class 20: Your First GitHub Actions Workflow
    - Class 21: A Portfolio Recruiters and Colleges Can Actually Read
  - Phase 5: Open Source & Capstone
    Graduate from your own repos to the world's: find a genuine good first issue, learn the etiquette that gets contributions merged, open a real external pull request, and complete a capstone that earns your certificate.
    - Class 22: Finding Your First Open Source Issue
    - Class 23: Making the Contribution: Etiquette and the External PR
    - Class 24: Capstone: Profile, Portfolio, Merged PR + Certification

**Projects students build:** Install Git on your own computer, run git --version to prove it works, and write a half-page version-control horror story from your own life (or a friend's) that this course will make impossible; Build a coding-projects folder tree (three nested folders and two files) entirely from the terminal, no mouse allowed, and configure your Git name and email; Create my-first-repo and build a tiny webpage across 5 separate commits, each with a clear message, so git log reads like a story of how the page grew; History detective challenge: in a prepared repo, use log, show, diff, and blame to answer five questions like 'which commit broke the page title and what did it change?'; Rescue mission: in a prepared practice repo, unstage a file, discard a bad edit with git restore, amend a commit message, revert a bad commit, and write a .gitignore that keeps secrets.txt out forever; Create your GitHub account with 2FA enabled, make your first online repository, connect your Class 3 local repo to it, and push all 5 commits so they appear on github.com; Set up a working SSH key, clone your own repository into a second folder to simulate a second computer, make a change there, push it, and pull it back into the original; Write a complete README.md for your webpage project with a heading, screenshot, run instructions, a feature table, and one code block, then push it and admire the rendered result; Create your username/username repository with a profile README introducing yourself, your current projects, and what you are learning, then pin your two best repos; Add an MIT license to your webpage project, open three well-written issues on it (one bug, two feature ideas), and close one automatically with a 'fixes #N' commit; Publish your webpage project live on GitHub Pages, fix any broken image paths, add a custom 404 page, and share your working URL with the class; On your live website repo, build a new feature (a dark theme or a new section) entirely on a feature branch while main stays untouched and your live site keeps working; Merge your dark-theme branch into main (watching your live Pages site update), then create, merge, and delete a second small feature branch using --no-ff and compare the two history shapes; Conflict laboratory: follow a script that manufactures a two-branch conflict in your repo, resolve it three ways (current, incoming, hand-crafted blend), and keep the best resolution; Ship a real feature to your website through a complete PR: branch, push, open a PR with description and screenshot, link an issue, then squash-merge it and watch the issue close - plus 9 more on the course page.

### Go Course: Backend Services from Zero to Production Habits

`/courses/complete-golang-programming-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Core Go Skills (Months 1-3, Weeks 1-13)
    Build rock-solid Go fundamentals. Learn programming logic, master Go syntax, understand Go's philosophy, and create your first applications.
    - Months 1-2: Go Fundamentals & Programming Basics
      - Introduction to Go & Development Environment Setup
      - Variables, Data Types & Operators
      - Control Flow & Functions
      - Arrays, Slices & Maps
    - Month 3: Structs, Methods & Interfaces
      - Structs & Methods
      - Interfaces & Polymorphism
      - Packages & Error Handling
  - PHASE 2: Advanced Go & Systems Programming (Months 4-6, Weeks 14-26)
    Master Go's concurrency model, advanced features, testing, performance optimization, and systems programming.
    - Month 4: Concurrency & Advanced Features
      - Goroutines & Channels Fundamentals
      - Advanced Concurrency Patterns
      - Reflection & Generics
      - Testing & Benchmarking
      - Performance Optimization & Profiling
    - Month 5: CLI Tools & Systems Programming
      - Building CLI Applications
      - File I/O & System Programming
      - Networking & Protocols
      - Data Serialization & Encoding
    - Month 6: Tooling, Quality & Debugging
      - Build Tools & Dependency Management
      - Code Quality & Best Practices
      - Debugging & Troubleshooting
  - PHASE 3: Web Development & Enterprise Applications (Months 7-9, Weeks 27-39)
    Master web development with Go, build REST APIs, GraphQL, gRPC services, work with databases, and deploy production applications.
    - Month 7: Web Development & APIs
      - HTTP & Web Fundamentals
      - Web Frameworks & REST APIs
      - Database Programming
      - NoSQL & Caching
      - GraphQL & Modern APIs
    - Month 8: gRPC & Microservices Foundations
      - gRPC & Protocol Buffers
      - Message Queues & Event-Driven
      - Authentication & Security
      - Observability & Monitoring
    - Month 9: Shipping Go: Containers, CI & Production Habits
      - Containerization & Orchestration
      - CI/CD & Automation
      - Production Best Practices
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello World with command-line arguments; Personal information display program; ASCII art generator in Go; Simple text output variations; Environment variable reader; Calculator with all arithmetic operations; Temperature converter (Celsius, Fahrenheit, Kelvin); Unit converter (length, weight, volume); BMI calculator with health assessment; Currency converter with live rates simulation; Bitwise operations demonstrator; Type conversion examples program; Interest calculator (simple and compound); Number guessing game; Grade calculator with switch - plus 277 more on the course page.

### Godot Game Development for Kids and Teens: GDScript, 2D and 3D

`/courses/godot-game-development-course-for-kids-and-teens` · 6 months (24 weeks) · Beginner to text coding, ages 10 to 17

  - PHASE 1: Godot Foundations and a First Finished Game (Months 1-2, Weeks 1-8)
    Students learn how Godot thinks, write their first GDScript, and finish a complete 2D arcade game with scoring, a game over screen and a browser build.
    - Month 1: Nodes, Scenes and Scripts
      - Weeks 1-2: The Godot Editor and Your First Scene
      - Weeks 3-4: Movement, Input and the Game Loop
    - Month 2: A Complete Arcade Game
      - Weeks 5-6: Collisions, Signals and Spawning
      - Weeks 7-8: Score, HUD, Game Over and Export
  - PHASE 2: Platformers and Game Feel (Months 3-4, Weeks 9-16)
    The genre that teaches the most: gravity, jumping, levels built from tiles, enemies that think a little, and the animation and sound that make a game feel alive.
    - Month 3: Platformer Physics and Levels
      - Weeks 9-10: CharacterBody2D, Gravity and Jumping
      - Weeks 11-12: Tile Maps, Cameras and Animation
    - Month 4: Enemies, Menus and Game Feel
      - Weeks 13-14: Enemies and Simple State Machines
      - Weeks 15-16: Animation, Sound, Menus and Saving
  - PHASE 3: 3D and the Capstone Game (Months 5-6, Weeks 17-24)
    Students carry what they know into 3D, then design and ship an original game of their own, from written plan to playable build.
    - Month 5: Into 3D
      - Weeks 17-18: 3D Scenes, Cameras and Movement
      - Weeks 19-20: A 3D Collect-a-thon Level
    - Month 6: The Capstone Game
      - Weeks 21-22: Design Document, Scope and Prototype
      - Weeks 23-24: Polish, Export and Showcase

**Projects students build:** Hello Godot: a scene with a moving title, a sprite and a script that greets the player by name; Top-down mover: a player ship that moves smoothly in eight directions and stays inside the screen; Dodge the falling objects: enemies spawn at random positions and the game reacts when the player is hit; First finished game: the dodge game with title screen, score, high score for the session, sound and a web build; Jump lab: a test room where every jump setting can be tuned live and compared; Two-level platformer: tile map levels, collectibles, an animated player and a working exit; Enemy pack: three enemies with different behaviours added to the platformer; Polished platformer: menus, pause, music, particles and a saved best time, exported for the web; 3D playground: a lit scene where a character runs, jumps and pushes objects around; 3D level: collect every item before the timer runs out, with a finish screen and a best time; Capstone prototype: the core loop of the student's own game, playable from start to finish; Finished capstone game, exported and presented at the class showcase.

### GRE & GMAT Quantitative Prep: Live Maths Coaching

`/courses/gre-gmat-quant-maths-prep-course` · 6 months (24 weeks) · Adults preparing for graduate admissions; school maths is refreshed from the ground up

  - PHASE 1: Rebuilding the Maths Foundation (Months 1-2, Weeks 1-8)
    The arithmetic and algebra both exams assume you already own, rebuilt from the ground up and drilled at exam speed, because this is where the majority of lost marks quietly come from.
    - Month 1: Arithmetic and Number Properties
      - Diagnostic and the Number System
      - Fractions, Decimals and Percentages
      - Ratios, Proportions and Rates
      - Exponents, Roots and Number Sense
    - Month 2: The Algebra Foundation
      - Expressions and Linear Equations
      - Systems, Inequalities and Absolute Value
      - Quadratics and Functions
      - Algebra Under Exam Pressure
  - PHASE 2: The Full Content Map of Both Exams (Months 3-4, Weeks 9-16)
    Word problems, the geometry the GRE still tests, coordinate geometry that the GMAT counts as algebra, and the descriptive statistics and data interpretation both exams rely on.
    - Month 3: Word Problems and Geometry
      - Word Problems That Actually Appear
      - Geometry for the GRE: Lines, Angles and Triangles
      - Geometry for the GRE: Circles, Polygons and Solids
      - Coordinate Geometry
    - Month 4: Statistics and Data Interpretation
      - Descriptive Statistics
      - Counting and Probability
      - Data Interpretation and Graphs
      - Consolidation and First Full Quant Section
  - PHASE 3: Exam Craft and Timed Mastery (Months 5-6, Weeks 17-24)
    The question formats unique to each exam, the timing and guessing strategy that protects a score, and repeated full timed practice reviewed until the mistake patterns are gone.
    - Month 5: Exam-Specific Formats and Strategy
      - GRE Quantitative Comparison
      - Data Sufficiency and the GMAT Data Insights Section
      - Timing, Pacing and Educated Guessing
      - Error Patterns and Targeted Repair
    - Month 6: Full Timed Practice and Test-Ready Review
      - Full Section One and Deep Review
      - Full Section Two and Format Sharpening
      - Full Section Three and Final Content Gaps
      - Test-Ready: Final Review and Plan

**Projects students build:** Personal weakness map: your diagnostic broken down by topic into a ranked list of what to fix first; Percentage trap set: ten deliberately baited percentage questions worked slowly, then reworked at speed; Rate reasoning: five real-world rate scenarios set up as equations before any number is plugged in; Shortcut library: your own one-page sheet of the number-sense checks that will not fit in a calculator; Translation drill: fifteen word phrases each converted to an equation, the step where most marks are won or lost; Two-variable challenge: a set of word problems that each resolve to a two-equation system, set up before solving; Quadratic recognition: ten problems where the challenge is realising a quadratic is involved at all; Method-choice audit: a mixed algebra set where you record which method you chose and whether it was the fastest available; Word-problem playbook: your own labelled template for each of the six recurring problem types; Triangle toolkit: a reference of every triangle fact the GRE reuses, drawn and annotated by you; Formula sheet, earned: build the geometry formula reference yourself, which is how it actually sticks; Line investigation: a set of coordinate problems solved both algebraically and by sketching, to see which is faster where; Average-shift study: a set of questions about how statistics change when the data changes, reasoned without brute force; Counting decision tree: your own flowchart for choosing between permutation, combination and direct counting; Graph deconstruction: a real multi-graph data set answered, then examined for how it could have been misread - plus 9 more on the course page.

### Hackathon for Adults: Free Event + 12-Week Pro Prep (18+)

`/courses/hackathon-prep-for-adults-professionals-coding-ai-innovation-course` · 12 weeks pro prep + Live Hackathon Weekend · Beginner-Friendly to Advanced (Adults 18+)

  - PHASE 1: Foundations, Engineering Fluency for Adults (Weeks 1-4)
    Adults arrive from very different starting points, some are seasoned engineers, some are PMs who've never written code, some are career switchers from medicine or finance. Phase 1 is the great equalizer. By Week 4, every participant ships a deployed full-stack app and competes in their first solo mini-hackathon.
    - Week 1: Hackathon Culture, Python + TypeScript Setup, Engineering Mindset
    - Week 2: Full-Stack Fundamentals, REST, Databases, Auth
    - Week 3: Modern Frontend, Next.js 16, Server Actions, Tailwind, shadcn/ui
    - Week 4: First Solo Pro Mini Hackathon, Ship Production-Ready in 12 Hours
  - PHASE 2: Pro Stack, AI Agents, RAG, System Design (Weeks 5-8)
    This is the differentiator, what separates a winning hackathon team from a generic one. Adults learn how production AI software is actually built today: agents with tool calling, durable workflows, RAG over private data, and the system design choices that scale.
    - Week 5: AI APIs & The Vercel AI SDK, Stream, Cache, Cost-Manage
    - Week 6: AI Agents, Tool Calling & Durable Workflows
    - Week 7: RAG Done Right, Embeddings, Vector DBs, Hybrid Search, Eval
    - Week 8: System Design + Mock Pro Hackathon (Teams of 2-4)
  - PHASE 3: Pro Hackathon Sprint, Capstone, Pitch Lab & Live Hackathon Weekend (Weeks 9-12)
    The final 4 weeks are a real, founder-grade hackathon journey. Adults lock a capstone, get matched with senior mentors (engineers, founders, VCs as needed), build with production discipline, get founder-grade pitch coaching, and compete in the Live Pro Hackathon Weekend with sponsor prizes.
    - Week 9: Capstone Lock, Spec, Architecture, Cost Model, GTM Sketch
    - Week 10: Heavy Build Sprint, Production Discipline at Hackathon Speed
    - Week 11: Founder-Grade Pitch Lab, VC Critique, Slides, Demo Polish
    - Week 12: LIVE PRO HACKATHON WEEKEND, Compete with Founders & Senior Engineers

**Projects students build:** CLI tool in Python and same tool in TypeScript; Personal landing page deployed to Vercel; First open-source PR to a public repo; CRUD app with Supabase + Next.js; Auth flow with Clerk + RBAC; Public + private routes split with middleware; Marketing landing page with shadcn/ui; Dashboard with charts (Recharts) + Cache Components; Form-heavy app using Server Actions exclusively; PHASE 1 CAPSTONE, Solo Pro Mini Hackathon: 12-hour build, deployed to a real domain, 2-minute pro demo, judge-ready README; Streaming chat app with prompt caching enabled; Multi-provider AI gateway with failover; Structured-output extraction from PDFs; Coding agent that writes, runs and tests code in Sandbox; Research agent that browses, synthesizes and cites sources - plus 15 more on the course page.

### Hackathon for Kids: Free Event + 12-Week Prep (Ages 8-12)

`/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course` · 12 weeks prep + Live Hackathon Weekend · Complete Beginner (Ages 8-12)

  - PHASE 1: Hackathon Foundations, How Hackathons Work (Weeks 1-4)
    Kids learn what a hackathon is, why it exists, how teams build software in 48 hours, and how to start thinking like an inventor. They build their first 'mini hack' projects in Scratch and learn the language of hackathons: idea, MVP, sprint, demo and pitch.
    - Week 1: What is a Hackathon?, Welcome to the Builder Mindset
    - Week 2: Idea Generation, Where Hackathon Ideas Come From
    - Week 3: Coding Logic, Loops, Conditions & Variables in Scratch
    - Week 4: First Mini Hackathon (Solo), Build & Pitch in 4 Hours
  - PHASE 2: Build Skills, AI, Algorithms & Team Hacking (Weeks 5-8)
    Kids level up to AI tools, learn the basics of algorithms (the secret sauce of efficient hackathon projects), discover Replit and Bolt.new, and start working in teams of 2-3. By Week 8, they will have built their first AI-powered hackathon project with a partner.
    - Week 5: Vibe Coding with AI, Build Apps by Talking to Computers
    - Week 6: Algorithms for Kids, Sorting, Searching & Pathfinding
    - Week 7: Team Hacking, Roles, GitHub Basics & Collaboration
    - Week 8: Mock Hackathon (Teams), 8-Hour Sprint Across Two Days
  - PHASE 3: Real Hackathon Sprint, Capstone, Pitch & Live Hackathon Weekend (Weeks 9-12)
    The final phase is a real hackathon journey. Kids pick their dream project, get paired with mentors, build their capstone over 4 weeks, get pitch coaching, record final demos, and compete in the official Modern Age Coders Live Hackathon Weekend at the end of Week 12, the same hackathon that's free for the public.
    - Week 9: Capstone Idea Lock, Mentor Matching & Project Plan
    - Week 10: Build Sprint, Code, AI, Iterate, Repeat
    - Week 11: Pitch Coaching & Demo Polish, Tell the Story
    - Week 12: LIVE HACKATHON WEEKEND, Compete, Demo & Get Crowned

**Projects students build:** 60-Minute Mini Hack: Animated Welcome Card; Hacker ID Card (designed in Canva); Idea Wall, write 10 things in the world you'd like to fix; My Idea Comic, 6-panel storyboard of your hackathon dream project; Problem Statement Card (one sentence); Empathy Interview, interview a family member about their daily problems; Number Guessing Game with hints; Score-Tracking Quiz Game (5 questions); Loop Art, generate a star pattern using only loops; PHASE 1 CAPSTONE, Solo Mini Hackathon: 4-hour build + 60-second demo + 1-page README. Choose any problem from your Idea Wall.; AI-Built Calculator with custom theme (Replit Agent); AI-Built Quiz App on a topic you love (Bolt.new); AI-Explained Code Journal, print 3 AI snippets and write what each line does; Sorting Race, animate bubble sort vs. insertion sort with sprites; Maze Solver, a sprite that finds the exit using a simple algorithm - plus 15 more on the course page.

### Hackathon for Teens: Free Event + 12-Week Prep (Ages 13-17)

`/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course` · 12 weeks prep + Live Hackathon Weekend · Beginner-Friendly to Intermediate (Ages 13-17)

  - PHASE 1: Foundations, Python, JavaScript & Git for Hackers (Weeks 1-4)
    Teens build serious coding fluency. We cover Python (logic + scripting), JavaScript (the universal language of the web), and Git/GitHub workflow that every hackathon team uses. By Week 4, every student can ship a small web app to a real URL.
    - Week 1: Hackathon Culture, Python Basics & The Hacker Mindset
    - Week 2: JavaScript Essentials & DOM, The Universal Hackathon Language
    - Week 3: Git, GitHub & Team Coding, Professional Workflow
    - Week 4: First Mini Hackathon (Solo), Ship to a Live URL in 8 Hours
  - PHASE 2: Build Stack, React, AI APIs, Algorithms & System Design (Weeks 5-8)
    Teens learn the full modern hackathon stack. By Week 8, they can build a deployable React + Tailwind + Supabase app with an AI feature in under 24 hours.
    - Week 5: React + Tailwind, The Hackathon UI Stack
    - Week 6: Backend with Supabase + REST APIs, Build a Real Product
    - Week 7: AI APIs, Build AI-Powered Hackathon Projects
    - Week 8: Algorithms, DSA & System Design Lite + Mock Hackathon (Teams)
  - PHASE 3: Real Hackathon Sprint, Capstone, Pitch Lab & Live Hackathon (Weeks 9-12)
    The final 4 weeks are a real hackathon journey. Teens lock a capstone idea, get matched with a senior mentor, build, polish, get pitch coached and compete in the Live Modern Age Coders Hackathon Weekend.
    - Week 9: Capstone Lock, Mentor Matching, Spec & Architecture
    - Week 10: Heavy Build Sprint, Code, Test, Iterate
    - Week 11: Pitch Lab, Storytelling, Slides & Demo Polish
    - Week 12: LIVE HACKATHON WEEKEND, Compete with the World

**Projects students build:** CLI To-Do List in Python; Number guessing game with hints + difficulty levels; Data formatter: read a CSV, print summary stats; Weather App calling a public weather API; Markdown live preview editor; GitHub user profile fetcher; Personal Portfolio site deployed via GitHub Pages; Open-source contribution: file 1 PR to a public repo; Team-built mini app with branches and PRs; PHASE 1 CAPSTONE, Solo Mini Hackathon: 8-hour build, deployed to Vercel, 90-second demo, judge-ready README; Personal landing page with React + Tailwind; Recipe finder calling an external API; Interactive dashboard with charts (Recharts); Notes app with auth + Supabase database; Image gallery with uploads + storage - plus 15 more on the course page.

### High School Mathematics: Algebra to Calculus (Grade 9-12)

`/courses/complete-high-school-mathematics-mastery` · 12-14 months (52-60 weeks) · Complete Beginner to Advanced High School

  - PHASE 1: Algebraic Foundations and Basic Geometry (Weeks 1-13)
    Build strong foundations in algebraic thinking, equation solving, and geometric reasoning. Master the core concepts that form the basis of all advanced mathematics.
    - Months 1-2: Algebra I Fundamentals
      - Number Systems & Algebraic Expressions
      - Linear Equations & Inequalities
      - Polynomials & Operations
      - Factoring Techniques
    - Month 3: Systems & Basic Geometry
      - Systems of Linear Equations
      - Introduction to Geometry
      - Phase 1 Review & Assessment
  - PHASE 2: Advanced Algebra and Functions (Weeks 14-26)
    Master quadratic functions, advanced algebraic concepts, coordinate geometry, and function theory. Build strong analytical and graphing skills.
    - Months 4-5: Quadratics & Functions
      - Quadratic Functions & Equations
      - Exponential & Logarithmic Functions
      - Rational Functions & Expressions
      - Function Theory & Transformations
      - Conic Sections
    - Month 6: Coordinate Geometry & Vectors
      - Advanced Coordinate Geometry
      - Introduction to Vectors
      - Sequences and Series
      - Complex Numbers
      - Phase 2 Capstone Assessment
  - PHASE 3: Trigonometry and Pre-Calculus (Weeks 27-39)
    Master trigonometric functions, identities, and applications. Prepare for calculus with limits, advanced functions, and analytical geometry.
    - Months 7-8: Trigonometry Mastery
      - Trigonometric Ratios & Functions
      - Graphing Trigonometric Functions
      - Trigonometric Identities
      - Trigonometric Equations & Applications
      - Law of Sines and Cosines
    - Month 9: Pre-Calculus & Limits
      - Limits and Continuity
      - Introduction to Derivatives
      - Mathematical Reasoning & Proofs
      - Matrices and Determinants
      - Phase 3 Review & Assessment
  - PHASE 4: Calculus, Statistics and Final Revision (Weeks 40-52)
    Master differential and integral calculus, statistics, probability, and advanced problem-solving techniques for university readiness.
    - Month 10: Calculus
      - Differential Calculus
      - Applications of Derivatives
      - Integral Calculus
      - Applications of Integration
      - Series and Sequences (Calculus)
    - Month 11: Statistics & Probability
      - Descriptive Statistics
      - Probability Theory
      - Probability Distributions
      - Statistical Inference
      - Advanced Problem Solving
    - Month 12: Final Review & Applications
      - University Preparation
    - Month 13: Final Assessments & Certification
      - Comprehensive Review - Part 1
      - Comprehensive Review - Part 2 & Mock Exams

**Projects students build:** Create a number system classification chart; Real-world scientific notation problems; Algebraic expression calculator design; Budget planning with linear equations; Distance-rate-time problem solver; Inequality graphing tool; Polynomial calculator implementation; Area and volume problems with polynomials; Pascal's triangle pattern explorer; Factoring flowchart creation; Projectile motion problems; Optimization problem solver; Supply and demand economic model; Mixture problem solver; Linear programming introduction - plus 100 more on the course page.

### HTML & CSS for Beginners: Build Real Responsive Websites

`/courses/html-css-course-for-beginners-build-real-websites` · 4 months (16 weeks) · Absolute beginner, ages 10 to adult

  - PHASE 1: The Two Languages (Months 1-2, Weeks 1-8)
    HTML gives a page its structure and meaning; CSS gives it appearance. Both are learned by building real pages from the first week.
    - Month 1: HTML, the Structure of Every Page
      - Your First Page
      - Links, Images, and Paths
      - Semantic Structure
      - Tables, Media, and Clean Code
    - Month 2: CSS, the Appearance Layer
      - First Styles
      - Typography
      - The Box Model
      - Display and Simple Layout
  - PHASE 2: Layout, Responsiveness, and Shipping (Months 3-4, Weeks 9-16)
    Flexbox and grid turn styled pages into real layouts. Then responsive design, forms, and a capstone month: build, test, and publish a multi-page personal site.
    - Month 3: Real Layout with Flexbox and Grid
      - Flexbox Fundamentals
      - Flexbox in the Real World
      - CSS Grid
      - Responsive Design
    - Month 4: Forms, Polish, and the Capstone Site
      - Forms
      - Polish and Performance
      - Capstone Build
      - Test, Publish, Present

**Projects students build:** A real first page: an introduction page with headings, paragraphs, and a list, opened in the browser by the end of class one; Two-page mini site: an about page and a favorites page, linked both ways, with images that actually load; Restructure week 2's site with proper semantic tags, then sketch the structure of a favorite real website on paper; A results or schedule page with a real data table plus an embedded video or map; Style the month 1 introduction page: a real color scheme, applied through classes, no inline styles; Typography makeover: the same article styled two ways, one serious, one playful, with a note on the choices; Profile card: photo, name, description, and a button, spaced and shadowed like a real component; A styled article page: centered content column, styled headings, hover-styled links, and a card or two; A proper navigation bar: logo left, links right, evenly spaced, with hover states; Photo gallery row and a three-card feature section, both wrapping cleanly as the window narrows; Magazine-style layout: a featured story spanning two columns above a grid of smaller pieces; Make the month's layouts fully responsive: gallery, cards, and magazine layout all working from phone to desktop; A styled contact form: name, email, subject dropdown, message, and a submit button that validates; Polish pass on your best existing page: transitions, favicon, compressed images, and an accessibility check; The capstone: a multi-page personal site, four pages, shared navigation, responsive throughout - plus 1 more on the course page.

### IB DP Computer Science (New Guide, First Assessment 2027)

`/courses/ib-diploma-computer-science-course` · Ongoing DP support, joinable any month · IB Diploma Programme students taking Computer Science at SL or HL

  - PHASE 1: Theme A, Computer Fundamentals and Networks
    How computing systems actually work, taught so the Paper 1 answers come from understanding rather than recall.
    - Month 1: Computer Fundamentals and System Architecture
      - Hardware, Software and the System
      - System Architecture and the Processor
      - Data Representation and Abstraction
      - Ethical and Social Issues in Computing
    - Month 2: Networks, Security and the Cloud
      - Network Structures and Types
      - Protocols and Data Transmission
      - Cybersecurity
      - Cloud Computing
  - PHASE 2: Databases, Machine Learning and the Case Study
    The two Theme A areas that are new or expanded for both SL and HL, plus the case study that is now assessed inside Paper 1.
    - Month 3: Databases and SQL
      - The Relational Model
      - SQL in Practice
      - Data Storage, Integrity and Ethics
      - Machine Learning and AI
    - Month 4: The Case Study and Computational Thinking
      - Working the Annual Case Study
      - Case Study Depth and Application
      - Computational Thinking
      - Algorithms and Efficiency
  - PHASE 3: Programming, the Internal Assessment and Exam Mastery
    Theme B in code, the computational solution built properly, and both papers drilled under timed conditions.
    - Month 5: Programming and Object-Oriented Programming
      - Programming Fundamentals in Your Paper 2 Language
      - Data Structures and File Handling
      - Object-Oriented Programming (SL and HL)
      - Starting the Internal Assessment
    - Month 6: Completing the IA and Full Exam Practice
      - Building and Documenting the Solution
      - Finishing the IA and the Video
      - Paper 1 Technique
      - Paper 2 and Full Mocks

**Projects students build:** Map a described real system end to end, labelling every hardware and software component; Trace a full instruction cycle and explain each stage in your own words; Describe one everyday system at three different levels of abstraction; Write a balanced evaluation of one real computing controversy, naming stakeholders on both sides; Design a network for a described organisation and justify every choice; Trace a single web request across the layers, naming the protocol at each step; Produce a security assessment for a described system with prioritised, justified recommendations; Write a balanced recommendation on moving a described organisation to the cloud; Design a normalised relational schema for a described scenario and draw its ER diagram; Build a working database and write the queries that answer real questions about it; Audit a described database for integrity and privacy risks and recommend fixes; Explain how a described ML system reaches a decision, then identify where bias could enter; Produce a full annotated summary and terminology glossary for the current case study; Write two full extended responses on the case study and mark them against the criteria; Take one problem from analysis through to a fully traced algorithm, documenting each thinking step - plus 9 more on the course page.

### IB Maths AA & AI: SL & HL, Live Online with IA Coaching

`/courses/ib-mathematics-aa-ai-masterclass` · 24 months (the full Diploma Programme arc) · IB DP students (AA & AI, SL & HL) and MYP students heading to the DP

  - PHASE 1: The Shared Core at DP Strength (Months 1-8)
    Both IB courses stand on the same five topic areas. This phase builds number & algebra and functions to Diploma strength, repairs MYP-era gaps inline, and establishes the retrieval and paper habits that a two-year syllabus demands.
    - Months 1-2: Diagnostic, Course Fit and Algebra at DP Pace
      - Diagnostic and Course Fit (AA vs AI, SL vs HL)
      - Exponents and Logarithms to DP Fluency
      - Sequences, Series and Financial Applications
      - Proof and Mathematical Writing Foundations
    - Months 3-5: Functions, the DP's Load-Bearing Topic
      - Function Anatomy: Domain, Range, Composition, Inverses
      - Transformations, Quadratics and Polynomials
      - Exponential, Log and Rational Functions with the GDC
    - Months 6-8: Geometry, Trigonometry and First Paper Craft
      - Trigonometry: Unit Circle to Applied Bearings
      - Vectors, 3D Geometry and the Sine and Cosine Rules
      - First Past-Paper Season and the Review Ritual
  - PHASE 2: Course-Specific Depth + the IA (Months 9-16)
    The AA and AI tracks now genuinely diverge: calculus and proof depth for AA, statistics and modelling with full GDC fluency for AI. In the middle of this phase sits IA season, the Mathematical Exploration, coached against the real criteria while remaining the student's own work.
    - Months 9-11: The AA Track / The AI Track
      - AA Differentiation from First Principles / AI Statistics and Regression
      - AA Applications and Integration / AI Probability Distributions
      - AA Integration and Areas / AI Modelling Cycle and Networks
    - Months 12-14: IA Season, the Exploration, Shepherded
      - IA Topic Selection and Proposal
      - Deepening the IA Mathematics
      - Judging an Exploration Against the Criteria
    - Months 15-16: Syllabus Depth Continues
      - AA Further Calculus / AI Hypothesis Testing
      - HL Paper 3 Investigations Introduced / SL Consolidation
  - PHASE 3: Syllabus Close + Paper Craft to Exam Session (Months 17-24)
    The remaining syllabus is closed with margin, then the program becomes exam craft: papers by course and level, calculator and non-calculator discipline, HL Paper 3 stamina, and full timed cycles that peak in the exam session, with predicted-grade checkpoints along the way.
    - Months 17-19: Closing the Syllabus with Margin
      - Closing the Final Syllabus Topics
      - Full-Syllabus Connection Map and Spaced Retrieval
    - Months 20-22: Paper Craft by Course and Level
      - AA Paper 1 Non-Calculator Craft / AI GDC Speed
      - Paper 2 Technique and Time Allocation
      - HL Paper 3 Stamina and Investigation Craft
    - Months 23-24: Full Cycles and the Exam Session
      - Full Timed Past-Paper Cycles
      - Peak Plan and the Exam Session

### ICSE Computer Applications (Class 9-10): Java with BlueJ

`/courses/icse-computer-applications-java-bluej-course` · Class 9 and 10 board program, monthly enrolment · ICSE Class 9 and 10 students taking Computer Applications; taught from the basics, no prior coding required

  - PHASE 1: Java and OOP Foundations, the Class 9 Core (in BlueJ)
    Object-oriented thinking and Java built from nothing in BlueJ, then the Class 9 Computer Applications syllabus in order: the base everything in Class 10 stands on.
    - Month 1: Object-Oriented Thinking and Java Basics
      - Introduction to OOP and the BlueJ Environment
      - Elementary Concept of Objects and Classes, Values and Data Types
      - Operators in Java and Expressions
      - Input in Java and Mathematical Library Methods
    - Month 2: Conditional and Iterative Constructs
      - Conditional Constructs: if, if-else, if-else-if
      - The switch-case Construct
      - Iteration: for, while and do-while Loops
      - Nested Loops and Patterns
  - PHASE 2: The Class 10 Core, Classes, Methods and Encapsulation
    The heart of the Class 10 syllabus: writing your own classes, methods and constructors, and using the library and wrapper classes the paper depends on.
    - Month 3: Classes, User-Defined Methods and Constructors
      - The Class as the Basis of All Computation
      - User-Defined Methods
      - Constructors
      - Encapsulation and Clean Class Design
    - Month 4: Library Classes, Wrapper Classes and Characters
      - Library Classes and Wrapper Classes
      - Character and Case Handling
      - Building the Practical File, Part One
      - The Disruptive Technologies Project
  - PHASE 3: Arrays, Strings and Full Board and Practical Mastery
    The last major syllabus topics, then the whole subject brought together: the two-section theory paper and the BlueJ practical exam, drilled until top marks are a habit.
    - Month 5: Arrays and String Handling
      - Single Dimensional Arrays
      - Sorting and Searching in Arrays
      - Double Dimensional Arrays
      - String Handling
    - Month 6: Board Theory and BlueJ Practical Exam Mastery
      - The Theory Paper: Section A Technique
      - The Theory Paper: Section B Programs
      - The BlueJ Practical Exam and the Internal Assessment
      - Full Mock Board Exams and Final Polishing

**Projects students build:** First BlueJ program: create a class, compile it, and run a method that prints a short formatted output; A class that stores and prints details using the correct data type for each field; A simple calculator class that applies each operator and prints the result; A program that reads values and computes results such as area, simple interest and the roots of a quadratic using Math methods; A program that classifies input, for example grade from marks or category from a value, using an if-else-if ladder; A menu-driven program, for example a units converter or a simple arithmetic menu, built with switch-case; A program producing a series result, for example the sum of a series, factorial, or checking a number for a property; A pattern-printing program and a number-property checker, both built with nested loops; A complete class, for example a Student or BankAccount, with fields and methods, created and used from main; A class with several overloaded and value-returning methods, each tested from main; A class with default, parameterised and copy constructors, demonstrated by creating objects several ways; An encapsulated class with private fields and get and set methods, used safely from outside; A program that reads numeric text input, parses it with wrapper methods, and computes a result; A program that scans text and reports counts of vowels, consonants, digits and other characters; The first several formal BlueJ lab assignments, written up to internal-assessment standard - plus 9 more on the course page.

### IGCSE Computer Science (0478): Full Syllabus and Exam Prep

`/courses/igcse-computer-science-0478-course` · 6 months (24 weeks), joinable any month · IGCSE students taking Computer Science 0478; taught from the basics, no prior coding required

  - PHASE 1: Computer Systems Foundations (Paper 1 core, Months 1-2)
    How a computer actually represents, moves and processes information, built from binary upward so nothing later has to be taken on faith.
    - Month 1: Data Representation and Data Transmission
      - Binary, Denary and Hexadecimal
      - Representing Text, Images and Sound
      - Compression and Data Transmission
      - Error Detection and Encryption
    - Month 2: Hardware and Computer Architecture
      - The CPU and the Fetch-Decode-Execute Cycle
      - Input, Output and Sensors
      - Memory and Storage
      - Network Hardware and the Internet Backbone
  - PHASE 2: Software, the Internet, Emerging Technologies and Logic (Months 3-4)
    The rest of the Paper 1 theory, then Boolean logic, which is the bridge into the programming half of the course.
    - Month 3: Software and the Internet
      - System Software and the Operating System
      - Programming Languages, Translators and the IDE
      - The Internet and Its Uses
      - Cyber Security
    - Month 4: Automated Systems, Emerging Technologies and Boolean Logic
      - Automated Systems and Robotics
      - Artificial Intelligence at Syllabus Depth
      - Logic Gates and Truth Tables
      - Logic Circuits and Logic Expressions
  - PHASE 3: Algorithms, Programming, Databases and Exam Mastery (Paper 2, Months 5-6)
    The programming half of the qualification, taught by actually writing code, then both papers drilled under timed conditions.
    - Month 5: Algorithm Design and Programming
      - Algorithm Design, Pseudocode and Flowcharts
      - Programming Fundamentals in Python
      - Arrays, Procedures, Functions and File Handling
      - Validation, Verification, Test Data and Trace Tables
    - Month 6: Databases, SQL and Full Exam Practice
      - Databases and SQL
      - Paper 1 Technique
      - Paper 2 Technique and the Scenario Question
      - Full Mock Exams and Final Polishing

**Projects students build:** A conversion drill sheet worked by hand, then a short Python script that checks your answers; Calculate the true file size of a given image and sound clip, then verify against a real file; Compress a sample string by run-length encoding by hand, then reverse it; Work a parity check and a check-digit calculation by hand, then break a deliberately corrupted example; Trace one full fetch-decode-execute cycle for a simple instruction and explain each step in your own words; Specify the input and output devices for a described real system and justify every choice; Build a comparison table of storage types and defend a recommendation for a given user; Map how a request travels from a home device to a web server and back, labelling each component; Explain, in your own words, exactly what happens between pressing power and seeing the desktop; Run the same short program through an interpreter and observe how errors surface; Trace what happens from typing a URL to the page rendering, naming every step; Build a threat-and-solution table, then answer a scenario recommending and justifying protections; Design an automated system for a described situation, naming every sensor and the microprocessor logic; Explain how an expert system reaches a conclusion, using its rule base and inference engine; Produce complete truth tables for all six gates from memory, then verify them - plus 9 more on the course page.

### IGCSE Maths: Core, Extended & Additional Mathematics Online

`/courses/igcse-mathematics-mastery` · 18 months (72 weeks), joinable any month · IGCSE students, years 9-11: Core, Extended and Additional Maths

  - PHASE 1: The Core Foundation, Built Properly (Months 1-6)
    Everything on the Extended papers stands on Core material owned deeply: number fluency without a calculator, algebra as a language rather than ritual, and the geometry and data basics. The diagnostic finds the real starting point; this phase makes it solid.
    - Months 1-2: Diagnostic + Number, Bare-Handed
      - Diagnostic, Syllabus Code and Tier Fit
      - Number Fluency Rebuilt
      - Ratio, Proportion and Standard Form
      - Indices, Surds, Bounds and Accuracy
    - Months 3-4: Algebra as a Language
      - Expressions, Expansion and Factorisation
      - Linear Equations, Inequalities and Formulae
      - Straight-Line Graphs as One Story
      - Simultaneous Equations and Sequences
    - Months 5-6: Shape, Space and Data Foundations
      - Angle Reasoning and Justification
      - Perimeter, Area, Volume and Pythagoras
      - Statistics Foundations
      - Phase 1 Core-Tier Checkpoint
  - PHASE 2: The Extended Reach, With Settling Time (Months 7-12)
    The topics that separate Extended from Core, and top grades from safe passes, taught months before the exam so they are owned, not crammed: functions, trigonometry beyond right angles, vectors, and probability at full depth.
    - Months 7-8: Quadratics and Functions
      - Solving Quadratics Three Ways
      - Quadratic Graphs and Linear-Quadratic Systems
      - Functions: Composite and Inverse
      - Graph Transformations and Graph Literacy
    - Months 9-10: Trigonometry and Vectors at Full Depth
      - Trigonometry: Right Triangles to Sine and Cosine Rules
      - Trig Graphs and Equations
      - Vectors and Geometric Proof
      - Circle Theorems
    - Months 11-12: Probability, Data and the Extended Checkpoint
      - Probability and Tree Diagrams
      - Cumulative Frequency and Histograms
      - Introductory Differentiation (Extended)
      - Phase 2 Extended-Tier Checkpoint
  - PHASE 3: Additional Maths 0606 + Exam Craft (Months 13-18)
    Strong students extend into Additional Mathematics, functions, identities, vectors and introductory calculus taught properly. All students then enter the exam machine: past-paper cycles by exact board and series, non-calculator discipline, and mark-scheme craft that peaks in the exam window.
    - Months 13-15: Additional Mathematics 0606 (or Extended Consolidation)
      - 0606 Functions and Algebra Foundations
      - 0606 Binomial, Trig Identities and Logs
      - 0606 Calculus, Vectors and Kinematics
    - Months 16-17: Past-Paper Craft by Board and Series
      - Board-Exact Paper Cycles
      - Timing Plans and Point-Leak Habits
    - Month 18: The Exam Series, Met Calmly
      - Final Cycles and Error-Log Closure
      - Peak-Week Plan and Exam-Day Routines

### Informatics Practices (IP) Class 11-12: CBSE Python & SQL

`/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course` · 24 months (Class 11 + Class 12, the full 2-year board cycle), joinable any month · Class 11 Beginner to Class 12 Board Exam Ready

  - PHASE 1: Class 11 Semester 1, Computer Basics, Python Programming & SQL Introduction (Months 1-5)
    Build your foundation in computer science concepts, learn Python programming from scratch, and start with SQL database queries. By the end of this phase, you'll write Python programs confidently and run basic SQL queries on MySQL.
    - Month 1: Introduction to Computer Systems
      - Evolution of Computing & Computer Hardware
      - Memory, Storage & Software
    - Months 2-3: Introduction to Python Programming
      - Getting Started with Python, Setup & First Programs
      - Variables, Data Types & Input/Output
      - Operators & Expressions
      - Control Flow, Conditional Statements & Loops
      - Lists in Python, IP Perspective
      - Dictionaries in Python, IP Perspective
    - Months 4-5: SQL Fundamentals, Database Concepts & Basic Queries
      - Database Concepts & Relational Model
      - SQL Introduction, DDL & DML Commands
      - SQL DQL, SELECT Queries with WHERE, Operators & Sorting
      - SQL Aggregate Functions & Class 11 SQL Revision
  - PHASE 2: Class 11 Semester 2, Emerging Trends, Practicals & Exam Prep (Months 6-10)
    Complete remaining Class 11 topics: Emerging Trends in Technology. Prepare practical file with Python programs and SQL queries. Get ready for Class 11 final examination.
    - Months 6-7: Emerging Trends & Revision
      - Introduction to Emerging Trends (CBSE IP Unit 4-5 marks)
      - Practical File, Project & Class 11 Exam Preparation
  - PHASE 3: Class 12 Semester 1, Pandas, Data Visualization & Advanced Data Handling (Months 11-17)
    This is the CORE of Class 12 IP, mastering Pandas for data handling and Matplotlib for data visualization. Unit 1 carries 25 marks in the board exam. Every concept here is board exam critical.
    - Months 11-12: Python Pandas, Series
      - Introduction to Python Libraries & Pandas Series Basics
      - Pandas Series, Operations, Indexing & Methods
      - Pandas DataFrame, Creation & Basic Operations
      - Pandas DataFrame, Advanced Operations & Data Manipulation
    - Months 13-14: Data Visualization with Matplotlib
      - Introduction to Matplotlib, Line Charts & Bar Graphs
      - Histograms, Advanced Customization & Combining Charts
    - Months 15-16: Pandas + Matplotlib Integration & CSV Data Workflow
      - Pandas DataFrame Visualization & CSV Import/Export
      - Pandas & Matplotlib Revision + Practical Programs
  - PHASE 4: Class 12 Semester 2, Advanced SQL, Networks, Society & Board Exam Mastery (Months 18-24)
    Complete remaining Class 12 syllabus: advanced SQL with functions, joins, GROUP BY/HAVING, computer networks, and societal impacts. Then intensive board exam preparation with mock tests.
    - Months 18-19: Advanced SQL, Functions, GROUP BY, HAVING & Joins
      - SQL Single Row Functions, Math, String & Date Functions
      - SQL Aggregate Functions, GROUP BY & HAVING, Deep Dive
      - SQL Joins, Equi-Join on Two Tables
      - SQL Complete Revision + 15 SQL Queries for Practical File
    - Months 20-21: Computer Networks & Societal Impacts
      - Introduction to Computer Networks (CBSE IP Unit 3-10 marks)
      - Internet, Web Technologies & Protocols
      - Societal Impacts of Technology (CBSE IP Unit 4-10 marks)
    - Months 22-24: Board Exam Preparation, Intensive Revision & Mock Tests
      - Practical File Completion & Project Submission
      - Chapter-Wise Revision, Pandas & Matplotlib
      - Chapter-Wise Revision, SQL, Networks & Societal Impacts
      - Mock Board Exams, Set 1 & 2
      - Mock Board Exams, Set 3, 4, 5 + Previous Year Paper Solving
      - Final Revision & Last-Minute Board Exam Preparation

**Projects students build:** Computer system diagram with all components labeled; Input-output devices classification chart with 20+ devices; Research project: Latest processor technologies in 2026-27; Memory hierarchy pyramid diagram with specifications; Software classification chart, 15+ examples each category; Compare 5 open-source vs proprietary software alternatives; 10 print() variations, different data types, multiple arguments; Interactive mode exploration, test 20 expressions; Valid/invalid identifier quiz, 30 examples; Student information collector, input name, age, class, marks, display formatted; Simple interest calculator, P, R, T as input; BMI calculator with formatted output; Swap two variables, 3 methods: temp, arithmetic, Pythonic a,b = b,a; Expression evaluator worksheet, 30 complex expressions with step-by-step solutions; Electricity bill calculator with slab rates - plus 84 more on the course page.

### Java Course for College: Core Java to Spring Boot

`/courses/complete-java-programming-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Core Java Skills (Months 1-3, Weeks 1-13)
    Build rock-solid Java fundamentals. Learn programming logic, master Java syntax, OOP principles, and create your first applications.
    - Months 1-2: Java Fundamentals & Programming Basics
      - Introduction to Java & Development Environment Setup
      - Variables, Data Types & Operators
      - Control Flow Statements
      - Methods & Arrays
    - Month 3: Object-Oriented Programming Fundamentals
      - Classes, Objects & OOP Basics
      - Inheritance & Polymorphism
      - Abstraction & Interfaces
  - PHASE 2: Intermediate Java & Advanced Concepts (Months 4-6, Weeks 14-26)
    Master advanced Java features, Collections Framework, exception handling, file I/O, multithreading, and design patterns.
    - Month 4: Advanced Java Features & Collections
      - String Handling & Regular Expressions
      - Exception Handling & Error Management
      - Collections Framework - Part 1
      - Collections Framework - Part 2
      - Generics & Advanced Collections
    - Month 5: File I/O, Multithreading & Modern Java
      - File I/O & Serialization
      - Multithreading & Concurrency - Part 1
      - Multithreading & Concurrency - Part 2
      - Java 8+ Modern Features
    - Month 6: Design Patterns, JDBC & Testing
      - Design Patterns - Part 1 (Creational)
      - Design Patterns - Part 2 (Structural & Behavioral)
      - JDBC & Database Programming
      - Unit Testing with JUnit
  - PHASE 3: Enterprise Java & Web Development (Months 7-9, Weeks 27-39)
    Master enterprise Java development with Servlets, JSP, Spring Framework, Spring Boot, Hibernate, and RESTful APIs.
    - Month 7: Web Development & Spring Framework
      - Servlets & JSP Fundamentals
      - Spring Framework Core
      - Spring Boot Fundamentals
      - Spring Data JPA & Hibernate
    - Month 8: Advanced Spring Boot & Microservices Basics
      - Spring Security & Authentication
      - Spring Boot Advanced Features
      - RESTful API Best Practices & Microservices Intro
      - Spring Boot with External Services
      - Testing Spring Boot Applications
    - Month 9: Production Java: Deployment, Monitoring & Security
      - Database Design & Optimization
      - Application Deployment & DevOps
      - Monitoring, Logging & Performance
      - Security Best Practices & API Standards
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations with personalized messages; Simple output programs using System.out.println; Personal information display program; ASCII art generator in Java; Simple calculator (four basic operations); Temperature converter (Celsius, Fahrenheit, Kelvin); Age calculator with detailed output; BMI calculator with health categories; Currency converter; Area and perimeter calculator for shapes; Compound interest calculator; Number guessing game with attempts limit; Grade calculator with letter grades; Even/odd checker and list generator; Prime number checker and generator - plus 247 more on the course page.

### Java for Teens: Complete Course from Beginner to Advanced

`/courses/java-programming-masterclass-for-teens` · 10-12 months (40-48 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Java Foundations and OOP (Months 1-3, Weeks 1-12)
    From the first program to real object-oriented design. Java’s strictness becomes an advantage: every concept is understood, not guessed.
    - Month 1: First Programs
      - Introduction and Setup
      - Variables, Types and Operations
      - Control Flow: Making Decisions
      - Loops: Repetition and Patterns
    - Month 2: Arrays, Methods, Strings and Files
      - Arrays
      - Methods: Reusable Code
      - Strings and Text Processing
      - Files and Exceptions
    - Month 3: Object-Oriented Programming
      - Classes and Objects
      - Encapsulation and Static
      - Inheritance
      - Polymorphism and Interfaces
  - PHASE 2: Collections, Apps, Games and Minecraft (Months 4-6, Weeks 13-24)
    Modern Java and things you can see: the collections framework, desktop apps with JavaFX, a complete 2D game, and your own Minecraft mods.
    - Month 4: Collections and Modern Java
      - The Collections Framework
      - Generics
      - Lambdas and Streams
      - Exceptions and Debugging Like a Professional
    - Month 5: Desktop Apps with JavaFX
      - JavaFX Fundamentals
      - Tables, Charts and Real Controls
      - Structuring a Real App with MVC
      - Databases for Desktop Apps
    - Month 6: Games and Minecraft Modding
      - Game Development Basics
      - Build a Complete 2D Game
      - Minecraft Modding
      - Phase 2 Capstone and Review
  - PHASE 3: Data Structures and Algorithms (Months 7-8, Weeks 25-32)
    The serious core of computer science, built by hand in Java: structures, sorting, graphs, recursion, and a first look at threads.
    - Month 7: Structures Built from Scratch
      - Lists, Stacks and Queues by Hand
      - Hash Tables and Trees
      - Sorting, Searching and Big O
      - Problem-Solving Patterns
    - Month 8: Graphs, Recursion and Threads
      - Graphs
      - Recursion and Backtracking
      - Multithreading, the Honest Introduction
      - DSA Capstone
  - PHASE 4: APIs, AI and the Capstone (Months 9-10, Weeks 33-40)
    Where teen Java meets the real world: a REST API with Spring Boot, AI models called from Java, Git and JUnit, and a final capstone shipped properly.
    - Month 9: APIs and AI
      - How the Web Works, for Java Developers
      - Your First REST API with Spring Boot
      - Saving Data: JPA Without the Jargon
      - Calling AI Models from Java
    - Month 10: Quality, Capstone and Demo Day
      - Git, GitHub and JUnit
      - Final Capstone Build
      - Demo Day and What Comes Next

**Projects students build:** Set up complete Java development environment; Create and run Hello World in 3 different ways; Build a simple personal introduction program; Interactive calculator application; Temperature converter (Celsius/Fahrenheit/Kelvin); Simple cashier program with tax calculation; Mad Libs story generator; Grade calculator with letter grades; Simple adventure game with choices; Rock-Paper-Scissors game; Age-appropriate movie recommendation system; Number guessing game with attempts; Multiplication table generator; Pattern printer (pyramids, diamonds); Simple password validator with retry - plus 128 more on the course page.

### JavaScript for Teens: Interactive Websites & Browser Games

`/courses/javascript-course-for-teens-beginners-interactive-web` · 6 months (24 weeks) · Beginner, ages 13 to 18

  - PHASE 1: The Language and the Page (Months 1-2, Weeks 1-8)
    JavaScript from the first line: values, decisions, loops, and functions, then the DOM and events so real pages respond to real users.
    - Month 1: JavaScript from the First Line
      - First Lines of JavaScript
      - Making Decisions
      - Loops and Repetition
      - Functions
    - Month 2: The DOM and Events
      - Meeting the DOM
      - Events: Pages That Listen
      - Interactive Widgets
      - Project Week: The Interactive Quiz
  - PHASE 2: Data and the Network (Months 3-4, Weeks 9-16)
    Arrays, objects, and JSON give projects real data to work with. Then fetch opens the door to public APIs and pages built on live information.
    - Month 3: Arrays, Objects, and JSON
      - Arrays
      - Array Methods That Do the Work
      - Objects
      - JSON and Saving Data
    - Month 4: Fetch and Public APIs
      - What an API Is
      - async, await, and Things Going Wrong
      - Search Interfaces
      - Project Week: The Two-API Dashboard
  - PHASE 3: Canvas Games and the Capstone (Months 5-6, Weeks 17-24)
    A month of real game programming on the HTML canvas, then a capstone month: scope, build, deploy, and present an interactive site of your own.
    - Month 5: Games on the Canvas
      - Drawing and the Game Loop
      - Player Control
      - Collisions, Score, and Lives
      - Finish and Polish the Game
    - Month 6: The Capstone Site
      - Scoping the Capstone
      - Build Sprint One: Core Features
      - Build Sprint Two: Data and Fit
      - Ship and Present

**Projects students build:** Story generator: a script that assembles a silly story from variables, then from user input via prompt; Number guessing game, round one: the computer picks, you guess, it answers higher or lower; Times-table printer with formatting; Guessing game, round two: limited tries, a running score, play-again logic; Tip calculator and unit converter built as a small library of reusable functions; Mood page: buttons that change the page's colors, text, and heading live; Click counter with milestones; Live character counter for a message box, with a limit warning; Dark mode toggle for a full page; FAQ accordion that opens one answer at a time; Interactive quiz app: questions, scoring, a results screen, and a restart button; To-do list, version one: add, display, and delete tasks backed by an array; Movie list page: search box and filter buttons that narrow a list of films live; Contact cards: render a grid of profile cards from an array of person objects; To-do list, version two: tasks survive a page refresh using localStorage - plus 12 more on the course page.

### JEE Foundation Maths Class 8-10: Proofs & Problem Solving

`/courses/jee-foundation-maths-course-class-8-10` · 12 months (48 weeks) · Class 8 to 10 students, batched by class

  - PHASE 1: Numbers and Algebra at Depth (Months 1-3, Weeks 1-12)
    The chapters every entrance exam quietly assumes: number theory basics, exponents and surds, identities, factorisation, and equations, taken well past the textbook stopping point.
    - Month 1: Number Systems, Properly
      - Weeks 1-2: The Number Line, End to End
      - Weeks 3-4: Divisibility and Remainders
    - Month 2: Exponents, Surds and Identities
      - Weeks 5-6: Exponents and Surds
      - Weeks 7-8: Identities and Factorisation
    - Month 3: Equations and Inequalities
      - Weeks 9-10: Linear Equations and Systems
      - Weeks 11-12: Inequalities and a First Look at Quadratics
  - PHASE 2: Geometry as a Proof Discipline (Months 4-6, Weeks 13-24)
    Geometry is where students first learn what mathematical certainty means. Congruence, similarity, quadrilaterals and circles, with proof writing drilled from the first week.
    - Month 4: Angles, Triangles and Congruence
      - Weeks 13-14: Lines, Angles and What a Proof Is
      - Weeks 15-16: Congruence
    - Month 5: Similarity, Pythagoras and Quadrilaterals
      - Weeks 17-18: Similarity and Pythagoras
      - Weeks 19-20: Quadrilaterals and the Midpoint Theorem
    - Month 6: Circles and the Geometry Workshop
      - Weeks 21-22: Circle Theorems
      - Weeks 23-24: The Geometry Problem Workshop
  - PHASE 3: Mensuration, Trigonometry and Coordinates (Months 7-9, Weeks 25-36)
    The toolkit chapters every entrance exam draws on: 2D and 3D mensuration, introductory trigonometry with heights and distances, and coordinate geometry.
    - Month 7: Mensuration in Two and Three Dimensions
      - Weeks 25-26: Areas in the Plane
      - Weeks 27-28: Solids and Scaling
    - Month 8: Introductory Trigonometry
      - Weeks 29-30: Ratios and Identities
      - Weeks 31-32: Heights and Distances
    - Month 9: Coordinate Geometry
      - Weeks 33-34: The Plane and Its Formulas
      - Weeks 35-36: Lines and Coordinate Problem Solving
  - PHASE 4: Problem Solving and the MCQ Phase (Months 10-12, Weeks 37-48)
    The part school never teaches: heuristics for unfamiliar problems, olympiad-style questions, then a full timed MCQ and mock phase in the style of NTSE-type talent exams and entrance papers.
    - Month 10: How Hard Problems Are Actually Solved
      - Weeks 37-38: The Heuristics
      - Weeks 39-40: Counting and Logical Structure
    - Month 11: MCQ Craft Under Time
      - Weeks 41-42: The Craft of the Multiple Choice Question
      - Weeks 43-44: Sectional Timing and the Error Log
    - Month 12: Mocks and the Readiness Review
      - Weeks 45-46: The Mock Series
      - Weeks 47-48: Final Mocks and the Road to Class 11

**Projects students build:** Number-line dossier: one page classifying 20 assorted numbers with a one-line justification each; Divisibility rule proof sheet: the rules for 3, 9 and 11 explained in the student's own words with examples; Simplification gauntlet: 10 layered exponent-surd expressions reduced step by step, each step justified; Identity map: every identity in the phase on one sheet with a numeric example and one exam use each; Translation drill sheet: 12 word problems converted to equations before any are solved; Personal error log opened: every phase 1 test miss classified as concept, method or slip, used all year; First proof portfolio entries: angle-sum and exterior-angle proofs written in full four-part format; Criterion sorting sheet: 12 figures matched to their congruence criterion with the given parts marked; Proof portfolio extended: BPT and the similarity proof of Pythagoras written in full; Quadrilateral family tree: the shapes and the exact conditions separating them, made by the student; Circle theorem atlas: every theorem drawn, stated and proved or justified on the student's own pages; Workshop set: 6 multi-step geometry problems solved with the construction decision written out for each; Decomposition sheet: 8 shaded-region problems with the cut lines drawn and named before any formula is used; Scaling experiment write-up: one solid scaled by 2 and by 3, with areas and volumes tabulated and the pattern stated; Two-triangle derivation page: the 30-60-90 and 45-45-90 triangles built and every standard value read off them - plus 10 more on the course page.

### Kotlin and Android Course: Zero to Published-Ready Apps

`/courses/complete-kotlin-programming-masterclass-professional` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Core Kotlin Skills (Months 1-3, Weeks 1-13)
    Build rock-solid Kotlin fundamentals. Learn programming logic, master Kotlin syntax, OOP principles, functional programming, and create your first applications.
    - Months 1-2: Kotlin Fundamentals & Programming Basics
      - Introduction to Kotlin & Development Environment Setup
      - Variables, Data Types & Operators
      - Control Flow & Expressions
      - Functions & Collections Basics
    - Month 3: Object-Oriented Programming & Functional Concepts
      - Classes, Objects & OOP in Kotlin
      - Inheritance, Interfaces & Polymorphism
      - Functional Programming in Kotlin
  - PHASE 2: Advanced Kotlin & Modern Features (Months 4-6, Weeks 14-26)
    Master advanced Kotlin features, coroutines, DSLs, delegation, generics, and professional coding patterns.
    - Month 4: Advanced Language Features & Coroutines
      - Generics & Type System
      - Delegation & Property Delegates
      - Collections Deep Dive
      - Coroutines Fundamentals
      - Advanced Coroutines & Flow
    - Month 5: DSLs, Reflection & Professional Patterns
      - Domain-Specific Languages (DSLs)
      - Reflection & Annotations
      - Design Patterns in Kotlin
      - Testing in Kotlin
    - Month 6: Server-Side Kotlin with Ktor
      - Ktor Framework - Part 1
      - Ktor Framework - Part 2
      - Database Access with Kotlin
      - Build Tools & Kotlin Scripting
  - PHASE 3: Android Development Mastery (Months 7-9, Weeks 27-39)
    Master modern Android development with Kotlin, Jetpack Compose, Material Design, Architecture Components, and professional app development.
    - Month 7: Android Fundamentals & Jetpack Compose
      - Android Basics & Setup
      - Jetpack Compose Fundamentals
      - Advanced Compose & Navigation
      - Android Architecture Components
      - Local Data Storage
    - Month 8: Networking, APIs & Advanced Android
      - Networking & REST APIs
      - Image Loading & Media
      - Advanced UI & Material Design
      - Background Work & Services
      - Testing Android Apps
    - Month 9: Ship-Quality Android: Performance, Publishing & Security
      - Performance & Optimization
      - Publishing & Deployment
      - Security Best Practices
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations with string templates; Simple output programs using println; Personal information display with string interpolation; ASCII art generator in Kotlin; Interactive REPL experiments; Null-safe calculator with Kotlin operators; Temperature converter with smart casts; Age calculator with null safety; BMI calculator with safe operations; Currency converter with type-safe design; Area calculator using when expressions; Compound interest calculator with ranges; String manipulation utility; Number guessing game with when expression; Grade calculator using when - plus 249 more on the course page.

### KS2 SATs Maths: Arithmetic, Reasoning and Times Tables

`/courses/ks2-sats-maths-course` · 8 months (32 weeks), timed to finish before the May tests · Children in Years 4, 5 and 6 at primary schools in England, ages 8 to 11

  - PHASE 1: Times Tables to Instant Recall (Months 1-2, Weeks 1-8)
    Every table up to 12 by 12 and its division facts, learned through patterns first and speed second. Year 4 children practise in the format of the multiplication tables check; older children use it as a warm-up for the papers.
    - Month 1: Tables by Pattern
      - Weeks 1-2: Diagnostic and the Easy Tables
      - Weeks 3-4: The Harder Tables
    - Month 2: Speed and Division Facts
      - Weeks 5-6: Division Facts and Missing Numbers
      - Weeks 7-8: Six-Second Recall
  - PHASE 2: The Arithmetic Paper (Months 3-4, Weeks 9-16)
    Paper 1 is 40 marks in 30 minutes, all calculation. Each written method is taught, practised and checked until it is automatic, then mixed under time.
    - Month 3: Whole Numbers and Written Methods
      - Weeks 9-10: Place Value and Addition and Subtraction
      - Weeks 11-12: Multiplication and Division
    - Month 4: Fractions, Decimals and Percentages
      - Weeks 13-14: Fraction Calculations
      - Weeks 15-16: Decimals, Percentages and the Full Paper
  - PHASE 3: The Reasoning Papers (Months 5-6, Weeks 17-24)
    Papers 2 and 3 are 35 marks and 40 minutes each, and they test whether a child can use maths in context and explain it. Each question type is taught on its own, then mixed.
    - Month 5: Number Reasoning and Measures
      - Weeks 17-18: Multi-Step Word Problems
      - Weeks 19-20: Measures, Money and Time
    - Month 6: Geometry, Statistics and Explaining
      - Weeks 21-22: Geometry and Statistics
      - Weeks 23-24: Explain, Show and Check
  - PHASE 4: Full Papers Under Timing (Months 7-8, Weeks 25-32)
    No new content. Full sets of three papers under real timing, marked against the published mark schemes, with a short review after each one and a calm plan for test week.
    - Month 7: Paper Sets
      - Weeks 25-26: First Full Sets
      - Weeks 27-28: Targeted Repair
    - Month 8: Ready for Test Week
      - Weeks 29-30: Final Sets
      - Weeks 31-32: Calm Before the Tests

**Projects students build:** Fact chart started: every fact up to 12 by 12 coloured by speed after the diagnostic; Fact chart updated: amber and red facts listed with a hook for each; Fact family cards made for the ten facts the child finds slowest; Fact chart completed: the aim is every fact green; Method book started: one worked example per method, written by the child; Method book entry: long multiplication and long division set out step by step; Method book entry: every fraction method with a worked example; Arithmetic tracker: score and time recorded for every practice paper; Problem journal started: one solved problem per question type with a bar model; Problem journal entry: a measures question for each unit type; Problem journal entry: geometry and statistics questions with labelled diagrams; Explanation bank: model answers to ten explain questions, written in the child's own words; Paper tracker: scores for each paper on one chart; Repair list: each weak area with the date it was fixed; Paper tracker completed - plus 1 more on the course page.

### Maths for Data Science: Statistics, Linear Algebra and ML

`/courses/data-analytics-mathematics-masterclass` · 12-14 months (48-56 weeks) · School-level maths assumed; built for college students and working professionals

  - PHASE 1: Statistics That Tell the Truth (Months 1-3, Weeks 1-12)
    The bedrock: describing data honestly, visualizing without lying, and the probability language every model speaks.
    - Month 1: Describing Data Honestly
      - Introduction to Statistical Thinking
      - Measures of Central Tendency and Spread
    - Month 2: Visualization and Probability
      - Data Visualization and Graphical Analysis
      - Probability Fundamentals
    - Month 3: The Great Distributions
      - Discrete Probability Distributions
      - Continuous Probability Distributions
  - PHASE 2: Linear Algebra and Statistical Inference (Months 4-6, Weeks 13-24)
    The two pillars: the vector and matrix language models are written in, and inference, how honest conclusions get drawn from samples.
    - Month 4: Linear Algebra for Data
      - Linear Algebra for Data Science - Vectors
      - Linear Algebra for Data Science - Matrices
    - Month 5: Eigenvalues, PCA and Sampling
      - Eigenvalues, Eigenvectors and PCA
      - Sampling Distributions and CLT
    - Month 6: Inference Done Honestly
      - Confidence Intervals
      - Hypothesis Testing Fundamentals
  - PHASE 3: The Mathematics of Machine Learning (Months 7-9, Weeks 25-36)
    Models from first principles: regression, regularization, classification, trees and clustering, with evaluation treated as the moral core of the discipline.
    - Month 7: Regression from First Principles
      - Simple Linear Regression
      - Multiple Linear Regression
    - Month 8: Regularization and Classification
      - Regularized Regression
      - Classification Fundamentals
    - Month 9: Trees, Clusters and Honest Evaluation
      - Tree-Based Methods
      - Clustering Algorithms
  - PHASE 4: Optimization, Neural Networks and Modern Practice (Months 10-12, Weeks 37-48)
    The mathematics behind modern AI and modern analytics: optimization, neural networks, Bayesian methods, time series, experiments, and a defensible capstone.
    - Month 10: Optimization and Neural Network Mathematics
      - Optimization Theory for ML
      - Neural Network Fundamentals
    - Month 11: Bayesian Methods and Time Series
      - Bayesian Fundamentals
      - Time Series Analysis
    - Month 12: Experiments and the Capstone
      - A/B Testing and Experimental Design
      - Capstone and Final Exam

**Projects students build:** Design a data collection strategy; Data quality assessment tool; Sampling simulation study; Statistical calculator from scratch; Outlier detection system; Interactive visualization dashboard; Build comprehensive EDA toolkit; Create interactive data dashboard; Visualization best practices guide; Probability simulator; Bayes theorem calculator; Monte Carlo estimation tool; Distribution calculator and visualizer; A/B test simulator; Discrete event simulator - plus 53 more on the course page.

### Maths Olympiad & Competition Course: AMC, AIME to IMO

`/courses/olympiad-competition-mathematics-mastery` · 12-14 months (52-60 weeks) · Intermediate to International Competition Level

  - PHASE 1: Competition Fundamentals and Number Theory (Weeks 1-13)
    Build strong foundations in competition problem-solving, master number theory, and develop combinatorial thinking.
    - Months 1-2: Competition Mathematics Basics & Number Theory
      - Introduction to Competition Mathematics
      - Divisibility and Prime Numbers
      - Modular Arithmetic
      - Advanced Number Theory
    - Month 3: Combinatorics Fundamentals
      - Counting Principles and Techniques
      - Graph Theory Basics
      - Phase 1 Review and Competition
  - PHASE 2: Advanced Algebra and Polynomial Theory (Weeks 14-26)
    Master algebraic manipulations, polynomial theory, sequences, and functional equations for competitions.
    - Months 4-5: Competition Algebra & Polynomials
      - Advanced Algebraic Techniques
      - Polynomial Theory
      - Sequences and Series
      - Equations and Systems
      - Complex Numbers in Competitions
    - Month 6: Functional Equations & Advanced Topics
      - Functional Equations
      - Mathematical Induction Advanced
      - Pigeonhole Principle & Extremal Problems
      - Invariants and Monovariants
      - Phase 2 Review and Competition
  - PHASE 3: Competition Geometry and Trigonometry (Weeks 27-39)
    Master advanced geometric techniques, trigonometric identities, and coordinate geometry for olympiad success.
    - Months 7-8: Euclidean Geometry & Triangle Theory
      - Advanced Triangle Geometry
      - Circle Geometry
      - Similarity and Homothety
      - Geometric Transformations
      - Construction Problems
    - Month 9: Trigonometry & Coordinate Geometry
      - Advanced Trigonometry
      - Analytic Geometry
      - Vectors in Geometry
      - Area and Volume Methods
      - Phase 3 Review and Competition
  - PHASE 4: Inequalities, Olympiad Practice and Final Revision (Weeks 40-52)
    Master inequalities, advanced problem-solving techniques, and prepare for international competitions.
    - Month 10: Inequalities & Optimization
      - Classical Inequalities
      - Advanced Inequality Techniques
      - Optimization Problems
      - Advanced Combinatorics
      - Advanced Number Theory Topics
    - Month 11: Problem-Solving Mastery & Competition Strategy
      - IMO Problem Analysis
      - Putnam Competition Preparation
      - Asian Pacific Mathematics Olympiad
      - Competition Psychology & Peak Performance
    - Month 12: Mock Competitions & Final Preparation
      - National Olympiad Simulations
      - International Competition Week
    - Month 13: Final Assessments & Future Planning
      - Comprehensive Review & Mastery
      - Final Competition Series

**Projects students build:** Solve 50 AMC 8 problems; Create problem-solving strategy guide; Analyze past competition papers; Implement prime generation algorithms; Solve 30 number theory competition problems; Create divisibility proof portfolio; Modular arithmetic problem set; CRT application problems; Create modular arithmetic reference guide; Advanced number theory problem collection; Historical theorems exploration; IMO number theory problems analysis; Combinatorial identity proofs; Counting problems compilation; Create combinatorics formula sheet - plus 102 more on the course page.

### Maths Through Coding: Learn Math in Python (Ages 10-15)

`/courses/maths-through-coding` · 9 months (36 weeks) · Ages 10-15 (grades 5-10); no coding experience required

  - PHASE 1: Numbers as Programs (Months 1-3)
    Python foundations learned through number theory a student can touch: parity, divisibility, primes, factors and fractions. By phase end the student programs comfortably and, the real goal, has met arithmetic ideas so concretely they can never again be mysterious.
    - Month 1: First Programs, First Number Ideas
      - Hello Python: Editor, Print and Variables
      - Arithmetic Operators and Order of Operations
      - Integer Division, Remainders and Modulo
      - Conditionals and Divisibility Rules
    - Month 2: Loops Meet Number Theory
      - Loops and Times-Table Patterns
      - Factor Finders and Prime Testers
    - Month 3: The Fraction Machine
      - GCD and the Fraction Simplifier
      - Fraction Arithmetic and Phase Demo Day
  - PHASE 2: Shape and Change (Months 4-6)
    Geometry becomes visceral through turtle graphics, exterior angles are unforgettable once you have steered them, and algebra comes alive as code: variables that actually vary, functions as machines, and graphs the student plots themselves.
    - Month 4: Turtle Geometry
      - Turtle Basics and the Exterior-Angle Discovery
      - Star Polygons, Spirals and Angle Art
    - Month 5: Coordinates and Real Variables
      - The Coordinate Plane in Code
      - Algebra as Code: Expressions and Equations
    - Month 6: Functions as Machines, Literally
      - Functions as Machines: Input, Rule, Output
      - The Grapher Project and Phase Demo Day
  - PHASE 3: Chance, Data and the Capstone (Months 7-9)
    Probability stops being formulas when you can roll ten thousand dice per second: simulators settle intuitions, real datasets get summarized and questioned, and the course closes with a capstone the student designs, a working program where the mathematics is the star.
    - Month 7: Probability by Simulation
      - Randomness: Coin Flippers and Dice Rollers
      - Simulating Classic Probability Puzzles
    - Month 8: Statistics on Real Data
      - Mean, Median and Range in Code
      - Exploring a Real Dataset
    - Month 9: The Capstone
      - Capstone Chosen and Scoped
      - Capstone Build, Test and Demo Day

**Projects students build:** Write a Python script that prints a personalised greeting built from variables; Write a Python calculator that evaluates a multi-step expression and prints the result; Write a Python script that labels every number from 1 to 50 as even or odd using modulo; Write a Python program that reports which of 2, 3, 5 and 10 a number is divisible by; Write a Python script that visualises a times-table as a grid of rows and columns; Write a Python program that lists every factor of a number; Write a Python prime tester that prints all primes up to 100; Write a Python fraction simplifier that reduces any fraction to lowest terms using the GCD; Write a Python fraction calculator that adds, subtracts and simplifies two fractions; Write a Python turtle program that draws any regular polygon from the number of sides; Write a Python turtle program that draws a star polygon or spiral of your own design; Write a Python program that plots points and draws the line and midpoint between two of them; Write a Python script that solves a linear equation by guess-check-refine and prints each step; Write a Python function that takes x and returns a rule such as 2x plus 1, then tabulates it; Write a Python grapher that plots y = mx + c for chosen values of m and c - plus 7 more on the course page.

### Mental Maths for Kids: Number Sense, Not Tricks (Ages 5-10)

`/courses/mental-maths-mastery-kids` · 12 months (52 weeks) · Ages 5-10 (roughly grades K-5), all starting levels

  - PHASE 1: Number Sense Foundations (Months 1-4)
    Before speed comes seeing: numbers as quantities that break apart and recombine. This phase builds subitizing, part-whole thinking and the bonds of 10 and 20 through concrete materials and games, tuned to each child's starting stage.
    - Month 1: Seeing Numbers
      - Getting to Know Your Number Sense
      - Seeing How Many at a Glance
      - Numbers Are Made of Smaller Numbers
      - Living on the Number Line
    - Months 2-3: The Bonds That Power Everything
      - The Pairs That Make Ten
      - Doubles and Their Neighbours
      - Making Ten to Add Bigger
      - Bonds to Twenty and Fact Families
    - Month 4: Subtraction as Distance + Stage Checkpoint
      - Two Ways to Subtract
      - The Shopkeeper's Counting-Up Trick
      - Many Roads to the Same Answer
      - Phase One Check Through Play
  - PHASE 2: The Strategy Toolkit (Months 5-8)
    The heart of mental maths: named strategies the child chooses between, make-ten, compensation, doubling and halving, plus multiplication met as structure and arrays rather than chanted tables. Choice is the skill; speed is the side effect.
    - Month 5: Two-Digit Courage
      - Adding Two-Digit Numbers in Jumps
      - The Compensation Superpower
    - Month 6: Multiplication as Structure
      - Multiplication as Groups You Can See
      - The Clever Route Through the Tables
    - Month 7: The Full Tables, Owned
      - Taming the Trickiest Facts
      - Division Is Multiplication Backwards
    - Month 8: Doubling, Halving and Strategy Choice
      - Doubling and Halving Magic
      - Strategy Tournament and Phase Two Check
  - PHASE 3: Big Numbers, Estimation and Durable Speed (Months 9-12)
    The toolkit scales up: multi-digit mental arithmetic, the beginnings of fraction sense, estimation as judgment, and, now that understanding holds, genuine speed work. The course closes with each child measurably faster and, more importantly, able to explain every move.
    - Month 9: Multi-Digit Mental Arithmetic
      - Big Numbers Without Fear
      - Multiplying Beyond the Tables
    - Month 10: Estimation as Judgment
      - Rounding to Get Close Fast
      - Does This Answer Make Sense?
    - Month 11: Fraction Sense Beginnings
      - Halves and Quarters of Things
      - Half, Point Five and Fifty Percent
    - Month 12: Speed With Understanding + Graduation
      - Beat Your Own Record
      - Graduation and the Road Ahead

### MERN Stack Course: MongoDB, Express, React and Node

`/courses/mern-stack-development-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Web Development Foundation (Months 1-3, Weeks 1-13)
    Build solid foundations in HTML, CSS, JavaScript, and modern web development tools.
    - Month 1: HTML, CSS & Web Basics
      - Introduction to Web Development
      - CSS Fundamentals & Styling
      - Advanced CSS & Modern Techniques
      - JavaScript Fundamentals
    - Month 2: Advanced JavaScript & DOM
      - DOM Manipulation & Events
      - Asynchronous JavaScript
      - Object-Oriented & Functional Programming
      - Build Tools & Modern Workflow
      - Phase 1 Capstone Project
    - Month 3: Advanced Frontend & Introduction to React
      - Modern JavaScript & TypeScript
      - Introduction to React
      - React Hooks & Modern Patterns
      - Component Libraries & Styling
  - PHASE 2: React Mastery & Advanced Frontend (Months 4-6, Weeks 14-26)
    Master React ecosystem, state management, advanced patterns, and modern frontend development.
    - Month 4: Advanced React & State Management
      - React Router & Navigation
      - State Management with Redux
      - Alternative State Management
      - Performance Optimization
      - Testing React Applications
    - Month 5: Next.js & Server-Side Rendering
      - Next.js Fundamentals
      - Advanced Next.js Features
      - GraphQL & Modern APIs
      - Progressive Web Apps
    - Month 6: Frontend Polish: Animation, Accessibility & Security
      - Advanced Animation & Graphics
      - Accessibility & Internationalization
      - Security & Best Practices
  - PHASE 3: Backend Development with Node.js (Months 7-9, Weeks 27-39)
    Master Node.js, Express, MongoDB, and build production-ready backend systems.
    - Month 7: Node.js & Express Fundamentals
      - Node.js Fundamentals
      - Express.js Framework
      - Database Design & MongoDB
      - Mongoose ODM & Data Modeling
      - RESTful API Design
    - Month 8: Authentication & Advanced Backend
      - Authentication & Authorization
      - Real-time Communication
      - File Handling & Cloud Storage
      - Email & Notification Systems
      - Caching & Performance
    - Month 9: GraphQL, Testing & Security
      - GraphQL Backend
      - Testing & Quality Assurance
      - Security & Compliance
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Personal portfolio HTML structure; Multi-page website; Contact form with validation; Responsive portfolio design; Landing page with animations; CSS art and illustrations; Company website with Tailwind; Dashboard UI with Bootstrap; Accessible web application; Interactive calculator; Todo list application; Quiz application; Dynamic content management system; Drag-and-drop task board; Image gallery with lazy loading - plus 101 more on the course page.

### Microsoft Office for Kids: Word, PowerPoint and Excel

`/courses/microsoft-office-kids-mastery` · 5-6 months (20-24 weeks) · Complete beginner, ages 7 to 12

  - Month 1: Windows Basics & Digital Art
    Windows fundamentals, tidy file habits, and creative confidence with Paint, Photos and Clipchamp.
    - Introduction to Windows & Computer Basics
    - File Management & Organization
    - Microsoft Paint Fundamentals
    - Photos, Clipchamp and Creative Projects
  - Month 2: Microsoft Word Mastery
    Become a Word expert, creating professional documents, reports, and creative writing projects.
    - Word Basics & Text Formatting
    - Advanced Formatting & Page Layout
    - Working with Images & Graphics
    - Tables, References & Collaboration
  - Month 3: PowerPoint Presentation Excellence
    Master the art of creating engaging, professional presentations with PowerPoint.
    - PowerPoint Fundamentals
    - Animations & Transitions
    - Multimedia & Interactive Elements
    - Advanced Design & Presenting
  - Month 4: Excel and Data Skills
    Learn spreadsheet basics, data management, charts, and basic formulas with Excel.
    - Excel Basics & Data Entry
    - Formulas & Functions
    - Charts & Data Visualization
    - Data Management & Analysis
  - Month 5: OneNote, Teams and the Grand Finale
    The organizational tools school life runs on, one integrated project that uses everything, and the final exam.
    - OneNote Digital Notebook
    - Microsoft Teams for Students
    - The Integrated Project
    - Final Exam and Demo Day

**Projects students build:** Customize desktop wallpaper and theme; Create desktop shortcuts; Organize taskbar with favorite apps; Personal desktop setup; Create organized folder system for schoolwork; Digital filing cabinet setup; Photo organization project; Backup important files; Create pixel art characters; Design birthday card; Draw house and landscape; Make school poster; Create emoji collection; Edited photo set: before and after; A 60-second family slideshow video in Clipchamp - plus 60 more on the course page.

### Middle School Math Competitions: MATHCOUNTS, AMC 8 and Math Kangaroo Prep

`/courses/middle-school-math-competitions-course` · 6 months (24 weeks), repeatable as a second season with new problem sets · Students roughly aged 10 to 14 (grades 5 to 8) who are comfortable with school maths and want more challenge

  - PHASE 1: The Problem-Solving Base (Months 1-2, Weeks 1-8)
    Fast, reliable number work and the first big competition ideas: divisibility, primes, ratios and counting.
    - Month 1: Number Sense and Number Theory
      - Weeks 1-2: Diagnostic, Contest Formats and Fast Arithmetic
      - Weeks 3-4: Primes, Factors and Divisibility
    - Month 2: Ratios, Word Problems and Counting
      - Weeks 5-6: Ratios, Rates and Algebra Word Problems
      - Weeks 7-8: Counting Basics
  - PHASE 2: Core Contest Topics (Months 3-4, Weeks 9-16)
    Probability, geometry and the patterns and logic questions that appear across all three contests.
    - Month 3: Probability and Plane Geometry
      - Weeks 9-10: Probability
      - Weeks 11-12: Angles, Triangles and Area
    - Month 4: Circles, Solids, Patterns and Logic
      - Weeks 13-14: Circles and Solids
      - Weeks 15-16: Patterns, Sequences, Remainders and Logic
  - PHASE 3: Contest Craft and Mock Contests (Months 5-6, Weeks 17-24)
    Turning knowledge into results on the day: round-by-round strategy for MATHCOUNTS, multiple-choice technique for the AMC 8 and Math Kangaroo, and full mock contests.
    - Month 5: MATHCOUNTS Round Strategy
      - Weeks 17-18: Sprint and Countdown Speed
      - Weeks 19-20: Target and Team Strategy
    - Month 6: Multiple-Choice Craft and Mock Contests
      - Weeks 21-22: Multiple-Choice Technique for the AMC 8 and Math Kangaroo
      - Weeks 23-24: Final Mocks and the Next Season

**Projects students build:** Personal diagnostic summary with three target topics and an opened error log; Number theory toolkit page: each rule with a worked contest-style example; Word problem casebook: ten problem types, each with a model solution; Counting toolkit page: when to list, multiply, arrange, choose or subtract; Probability lab: run a small experiment, compare it with the calculated answer and explain the difference; Geometry fact sheet with a diagram for every fact; Shaded-region and solids casebook with ten worked problems; Patterns and logic casebook, with a one-line explanation of why each pattern holds; Two timed Sprint-style rounds with a personal pacing plan written after each; Full MATHCOUNTS-style mock: Sprint, Target and Team rounds, with a written review; Timed multiple-choice mock papers in the AMC 8 and Math Kangaroo styles, with written reviews; Final mock contest and a personal next-season plan based on the error log.

### Middle School Mathematics Mastery: Pre-Algebra & Geometry

`/courses/comprehensive-middle-school-mathematics-mastery` · 12-14 months (52-60 weeks) · Complete Beginner to Advanced Middle School Level

  - PHASE 1: Number Systems and Fundamental Operations (Weeks 1-13)
    Build unshakeable foundations in number concepts, operations, and mathematical thinking.
    - Months 1-2: Number Systems and Basic Operations
      - Introduction to Number Systems
      - Addition and Subtraction Mastery
      - Multiplication Fundamentals
      - Division and Factors
    - Month 3: Order of Operations and Problem Solving
      - Order of Operations (PEMDAS/BODMAS)
      - Problem-Solving Strategies
      - Phase 1 Review and Assessment
  - PHASE 2: Fractions, Decimals and Proportional Reasoning (Weeks 14-26)
    Master rational numbers, proportional relationships, and their real-world applications.
    - Months 4-5: Fractions and Mixed Numbers
      - Understanding Fractions
      - Operations with Fractions
      - Decimals and Place Value
      - Multiplying and Dividing Decimals
      - Percentages and Applications
    - Month 6: Ratios and Proportional Relationships
      - Understanding Ratios
      - Proportions and Scale
      - Real-World Applications
      - Data with Fractions, Decimals, and Percents
      - Phase 2 Review and Assessment
  - PHASE 3: Algebraic Thinking and Pre-Algebra (Weeks 27-39)
    Develop algebraic reasoning, solve equations, and understand functions and patterns.
    - Months 7-8: Introduction to Algebra
      - Variables and Expressions
      - One-Step Equations
      - Two-Step and Multi-Step Equations
      - Inequalities
      - Introduction to Functions
    - Month 9: Coordinate Geometry and Graphing
      - The Coordinate Plane
      - Linear Relationships
      - Patterns and Sequences
      - Polynomials Introduction
      - Phase 3 Review and Assessment
  - PHASE 4: Geometry, Statistics and Final Revision (Weeks 40-52)
    Master geometric concepts, statistical analysis, probability, and complex problem-solving strategies.
    - Month 10: Geometry Foundations
      - Basic Geometric Concepts
      - Triangles and Quadrilaterals
      - Circles
      - Area and Perimeter
      - 3D Geometry and Volume
    - Month 11: Statistics and Data Analysis
      - Data Collection and Representation
      - Measures of Central Tendency
      - Probability Fundamentals
      - Statistical Analysis and Interpretation
      - Problem Solving with Multiple Concepts
    - Month 12: Advanced Topics and Test Preparation
      - Competition Mathematics
      - Test Preparation and Strategies
    - Month 13: Final Projects and Comprehensive Review
      - Comprehensive Review and Integration

**Projects students build:** Create a number system timeline; Design a place value game; Real-world number investigation project; Budget planning project; Distance calculation map activity; Integer game design; Multiplication strategy booklet; Area calculation for room design; Array art project; Factor tree artwork; Divisibility rule investigation; Prime number sieve project; PEMDAS puzzle creation; Expression evaluation game; Calculator investigation project - plus 105 more on the course page.

### Minecraft Coding for Kids: From Blocks to Real Code

`/courses/minecraft-coding-for-kids-course` · 4 months (16 weeks) · Beginner, ages 7 to 12

  - PHASE 1: Code That Builds (Months 1-2, Weeks 1-8)
    From the first chat command to an automated farm: children learn sequencing, loops, variables, and decisions by making Minecraft do the building for them.
    - Month 1: First Commands and the Agent
      - Hello, Code Builder
      - The Agent, Your Robot
      - Loops: Building at Superspeed
      - Big Builds with Loops
    - Month 2: Variables and Decisions
      - Variables: Code That Remembers
      - Decisions: Code That Checks
      - Events: Code That Reacts
      - Project Week: The Auto-Farm
  - PHASE 2: Code That Plays (Months 3-4, Weeks 9-16)
    The building skills become game-making skills: randomness, scores, and timers combine into real mini-games, and the course ends with a student-designed capstone and a peek at real typed code.
    - Month 3: Mini-Games
      - Randomness
      - Keeping Score
      - Timers and Pressure
      - Project Week: The Arena Game
    - Month 4: The Capstone and the Code Peek
      - Functions: Naming Your Powers
      - The JavaScript Peek
      - Capstone Build Sprint
      - Finish and Showcase

**Projects students build:** Magic words: three chat commands that summon a block tower, a splash of flowers, and a chicken; Maze runner: program the agent to walk a maze you built for it, placing a torch at the exit; Wall factory: one program that builds a wall of any length, then a full square fort using nested loops; Pyramid of Giza: a layered pyramid built entirely by code, with a hollow secret chamber inside; Any-size house: one program that builds a house small, medium, or giant by changing a single number; Smart explorer: an agent that crosses rough ground by detecting obstacles and stepping around them; Trap gauntlet: a walkway with three coded surprises, from harmless confetti to a drop into a pool; Agent auto-farm: a robot farmer that tills the soil, plants crops in rows, and harvests when ready; Treasure hunt: a diamond block hidden at a random spot each round, with hot-and-cold chat hints; Collector clash: gather the glowing blocks scattered by code, one point each, first to ten wins; Build rush: players race a two-minute timer to copy a target structure, with a code-checked finish; Falling-floor arena: a coded mini-game where floor sections vanish on a timer and the last player standing wins; Village in a minute: houses, paths, and lamp posts, each a function, assembled into a whole village program; Two-view build: a fountain program written in blocks, then modified once in JavaScript view to change its size; Capstone, part one: the core of an original mini-game or automation, planned and working end to end - plus 1 more on the course page.

### MySQL Course: SQL, Database Design and Real Administration

`/courses/mysql-database-complete-masterclass-college` · 7-8 months (28-32 weeks) · Complete beginner; college students and working professionals (18+)

  - PHASE 1: SQL Foundations (Months 1-2, Weeks 1-8)
    The language of data learned properly: definitions, manipulation and SELECT mastery on datasets that feel real.
    - Months 1-2: The SQL Core
      - Introduction to Databases & MySQL Setup
      - SQL Basics - Data Definition Language (DDL)
      - SQL Basics - Data Manipulation Language (DML)
      - Querying Data - SELECT Mastery
  - PHASE 2: Design and Joins (Months 3-4, Weeks 9-16)
    Where amateurs are separated from professionals: relationships, joins without fear, subqueries, and schema design as a deliberate craft.
    - Months 3-4: Relationships to Real Design
      - Database Relationships
      - Mastering Joins
      - Subqueries and Set Operations
      - Schema Design Done Properly
  - PHASE 3: The Programmable Database (Months 5-6, Weeks 17-24)
    MySQL beyond queries: views and indexes, stored procedures, triggers, transactions argued about properly, and Python integration.
    - Months 5-6: Views to Python
      - Views & Indexes
      - Stored Procedures
      - Transactions & Concurrency
      - MySQL with Python
  - PHASE 4: The Production Month (Month 7, Weeks 25-28)
    What teams need before they trust you with data: security, backups, performance tuning with EXPLAIN, and the capstone exam.
    - Month 7: Production Essentials and the Finale
      - Users, Security and Backups
      - Performance Tuning with EXPLAIN
      - Capstone Build
      - Demo Day and Final Exam

**Projects students build:** Install MySQL on local machine; Set up MySQL Workbench; Create first database and tables; Configure basic security settings; Design employee database schema; Create online store database structure; Build student management system tables; Library management database design; Populate employee database with data; Create product catalog with 1000+ items; Build customer records system; Inventory management data setup; Sales reporting queries; Customer analytics dashboard queries; Product search functionality - plus 43 more on the course page.

### MySQL for Teens: SQL from First Query to Real Apps

`/courses/mysql-mastery-for-teens` · 5-6 months (20-24 weeks) · Absolute beginner, ages 13 to 18

  - Month 1: SQL Foundations
    Databases demystified and the four verbs of data: CREATE, INSERT, SELECT, UPDATE and DELETE, used safely from the start.
    - Introduction to Databases & MySQL Setup
    - SQL Basics: Creating and Managing Databases
    - Data Manipulation: INSERT, SELECT Basics
    - UPDATE, DELETE, and Data Integrity
  - Month 2: Query Power
    The everyday toolkit: string and numeric functions, dates, aggregation with GROUP BY, and first subqueries.
    - MySQL Functions: String and Numeric
    - Date/Time Functions and Operations
    - Aggregate Functions and Grouping
    - Subqueries and Nested Queries
  - Month 3: Real Database Design
    The part that separates users from designers: relationships, joins, ER diagrams, normalization and constraints.
    - Table Relationships and JOINS
    - Advanced JOINS and Set Operations
    - Database Design & Normalization
    - Constraints and Data Validation
  - Month 4: Power Features
    What professionals actually lean on: views, stored procedures, transactions with ACID honesty, and indexes that make queries fly.
    - Views and Virtual Tables
    - Stored Procedures and Functions
    - Transactions and Concurrency
    - Indexing and Query Optimization
  - Month 5: Real Apps and the Final Exam
    Securing the database, backing it up, driving it from Python, and the capstone defended at demo day.
    - Users, Security and Backups
    - MySQL from Python: Data Becomes an App
    - Capstone Build
    - Demo Day and Final Exam

**Projects students build:** Install and configure MySQL environment; Create 'MyLife' database for personal data; Design a simple contact list database; School database with students and classes; Gaming stats tracker database; Music library database structure; Populate school database with student data; Create and query a movie ratings database; Build a sports team roster system; Grade management system with updates; Inventory system with stock updates; Social media profile manager; Username generator with string functions; Grade calculator with numeric functions; Data cleaning toolkit - plus 41 more on the course page.

### National 5 and Higher Maths Course Online (Scotland)

`/courses/national-5-and-higher-maths-course` · About 6 months per level: National 5, then Higher (12 months for both) · S3 to S6 learners and adults in Scotland taking National 5 or Higher Mathematics

  - PHASE 1: National 5 Skills (Months 1-5, Weeks 1-20)
    The skills sampled in National 5 Mathematics, taught strand by strand with reasoning questions in every month.
    - Month 1: Numerical Skills
      - Weeks 1-2: Diagnostic, Surds and Indices
      - Weeks 3-4: Percentages, Fractions and Appreciation
    - Month 2: Algebraic Skills, Part One
      - Weeks 5-6: Expressions and Factorising
      - Weeks 7-8: Straight Lines and Equations
    - Month 3: Algebraic Skills, Part Two
      - Weeks 9-10: Quadratics
      - Weeks 11-12: Functions and Mixed Algebra
    - Month 4: Geometric Skills
      - Weeks 13-14: Shape, Area and Volume
      - Weeks 15-16: Vectors and Coordinates
    - Month 5: Trigonometric and Statistical Skills
      - Weeks 17-18: Trigonometry
      - Weeks 19-20: Statistics
  - PHASE 2: National 5 Papers (Month 6, Weeks 21-24)
    Full National 5 papers under real timing: Paper 1 without a calculator, 40 marks in 1 hour, and Paper 2, 50 marks in 1 hour 30 minutes.
    - Month 6: Full National 5 Papers
      - Weeks 21-22: Prelim-Style Papers
      - Weeks 23-24: Final Papers and Next Steps
  - PHASE 3: Higher Skills (Months 7-11, Weeks 25-44)
    The skills sampled in Higher Mathematics: algebraic and trigonometric, geometric and calculus skills, with reasoning throughout. Learners joining at Higher start here after a diagnostic.
    - Month 7: Algebra and Functions
      - Weeks 25-26: Polynomials and Quadratic Theory
      - Weeks 27-28: Functions and Graphs
    - Month 8: Trigonometry at Higher
      - Weeks 29-30: Radians, Formulae and Identities
      - Weeks 31-32: The Wave Function
    - Month 9: Straight Line, Circle, Vectors and Recurrence
      - Weeks 33-34: The Straight Line and the Circle
      - Weeks 35-36: Vectors and Recurrence Relations
    - Month 10: Differentiation
      - Weeks 37-38: Differentiating Functions
      - Weeks 39-40: Applying Differentiation
    - Month 11: Integration
      - Weeks 41-42: Integrating Functions
      - Weeks 43-44: Areas and Mixed Calculus
  - PHASE 4: Higher Papers (Month 12, Weeks 45-48)
    Full Higher papers under real timing: Paper 1 without a calculator, 55 marks in 1 hour 15 minutes, and Paper 2, 65 marks in 1 hour 30 minutes.
    - Month 12: Full Higher Papers
      - Weeks 45-46: Prelim-Style Papers
      - Weeks 47-48: Final Papers and Next Steps

**Projects students build:** Skills checklist started: every National 5 skill coloured by confidence; Money file: interest and depreciation problems solved and explained; Algebra method sheet: one worked example of every technique; Equation bank: simultaneous equation problems built from real contexts; Parabola file: six quadratics sketched with roots and turning points; Skills checklist updated after the first three months; Geometry sheet: every formula and property with a worked example; Vector diagram set: five shapes with pathways labelled; Triangle casebook: when to use each rule, with a solved example; Skills checklist completed for National 5; Paper tracker started for National 5; Completed National 5 paper tracker and error log; Higher skills checklist started; Graph file: transformations and log graphs annotated; Trigonometry sheet: exact values, formulae and identities - plus 9 more on the course page.

### Olympiad Mathematics: IOQM, INMO and AMC Preparation

`/courses/olympiad-mathematics-premium-course` · 12 months (48 weeks), joinable any month · Students roughly aged 12 to 18 who are strong at school maths and want genuine olympiad problem solving

  - PHASE 1: Proof Technique and Number Theory
    How to argue rigorously, then the pillar that best rewards it.
    - Months 1 to 2: Proof and Foundations
      - What Counts as a Proof
      - Induction and Invariants
      - Number Theory
  - PHASE 2: Algebra and Combinatorics
    The two pillars that most often decide an IOQM or AMC score.
    - Months 3 to 5: Algebra
      - Polynomials and Functional Equations
      - Inequalities
      - Combinatorics
  - PHASE 3: Geometry and Full Contest Simulation
    The pillar students most often avoid, then the contests themselves rehearsed properly.
    - Months 6 to 9: Geometry
      - Synthetic Geometry
      - Advanced Geometry Techniques
      - Mixed Problem Solving
    - Months 10 to 12: Contest Simulation
      - IOQM and AMC Format Training
      - INMO and AIME Level, and Peak Form

**Projects students build:** Write five full proofs and have every line challenged in class; Solve a set of invariant problems and articulate the invariant explicitly in each; Solve a graded ladder of number theory problems from IOQM level upward; Work a set of Vieta and functional equation problems from past papers; Prove a graded set of inequalities, each with a fully justified argument; Solve a counting problem two different ways and reconcile the results; Solve a ladder of synthetic geometry problems with full written proofs; Attack the same hard problem three ways and compare which was cleanest; Weekly mixed problem sets with no topic labels; Full timed IOQM and AMC papers every week; Full INMO-style and AIME-style papers, marked on rigour.

### Ontario Computer Science Companion: ICS3U and ICS4U (Python and Java)

`/courses/ics3u-ics4u-computer-science-companion-course` · 6 months (24 weeks) per plan, joinable any month and paced to your school course · Ontario students in Grades 11 and 12 (roughly ages 15 to 18) taking ICS3U or ICS4U at school, in Python or Java

  - PHASE 1: Problem Solving and the ICS3U Core (Months 1-2, Weeks 1-8)
    How a programmer thinks before typing, then the building blocks every ICS3U program uses, in Python or Java.
    - Month 1: Algorithms, Data Types and Input and Output
      - Weeks 1-2: Problem Solving Before Syntax
      - Weeks 3-4: Data Types, Variables and Expressions
    - Month 2: Control Structures
      - Weeks 5-6: Decisions
      - Weeks 7-8: Loops
  - PHASE 2: Completing ICS3U (Months 3-4, Weeks 9-16)
    The data structures, modular design, files and classic algorithms that larger ICS3U programs need, plus the software development habits the course describes.
    - Month 3: Lists, Arrays and Modular Programming
      - Weeks 9-10: Lists and Arrays
      - Weeks 11-12: Modular Programming with Functions and Methods
    - Month 4: Strings, Files, Sorting and Searching
      - Weeks 13-14: String and File Handling
      - Weeks 15-16: Sorting, Searching and the Development Life Cycle
  - PHASE 3: The ICS4U Toolkit, Final Project and Exam Review (Months 5-6, Weeks 17-24)
    What we teach for Grade 12: recursion, object-oriented design, efficiency and large, fully documented programs, then the final project and exam review. ICS4U batches begin with a fast review of Phases 1 and 2.
    - Month 5: Recursion and Object-Oriented Design
      - Weeks 17-18: Recursion
      - Weeks 19-20: Classes and Object-Oriented Design
    - Month 6: Efficiency, the Final Project and Exam Review
      - Weeks 21-22: Efficiency and Large Documented Programs
      - Weeks 23-24: Exam Review Technique

**Projects students build:** Three small problems solved twice: once as plain-word steps, once as working code; A unit converter or bill splitter with clear prompts, checked input and formatted output; A rules-based program, such as a ticket pricing or grading-rules calculator, with a written test plan; A number guessing game or a times-table quiz with scoring and replay; A class marks analyzer: store scores, report the average, the highest and lowest, and a simple bar display; Refactor an earlier project into well-named functions or methods, with a test for each; A file report tool: read a data file, summarize it and write a tidy results file; A searchable, sortable record list built from a file, with a short design document and test log; Write three recursive solutions and their loop versions, and compare them in a short written note; An object-oriented library, inventory or game roster program with a class diagram and documentation; A project plan and working first version for the student's own final project, built by the student; A personal review pack: topic summaries, a mistakes list and two reviewed timed papers.

### Ontario Grade 12 University Math: Advanced Functions and Calculus and Vectors (MHF4U and MCV4U)

`/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course` · 6 months (24 weeks) per plan, joinable any month and paced to your school course · Ontario students in Grade 12 (roughly ages 16 to 18) taking MHF4U, MCV4U or both at school

  - PHASE 1: Advanced Functions, Part 1 (Months 1-2, Weeks 1-8)
    The function toolkit every Grade 12 topic depends on, then polynomial and rational functions in depth.
    - Month 1: The Function Toolkit and Polynomial Functions
      - Weeks 1-2: Starting Point and the Function Toolkit
      - Weeks 3-4: Polynomial Functions
    - Month 2: Polynomial Equations and Rational Functions
      - Weeks 5-6: Polynomial Equations and Inequalities
      - Weeks 7-8: Rational Functions
  - PHASE 2: Advanced Functions, Part 2 (Months 3-4, Weeks 9-16)
    Trigonometry in radians, exponential and logarithmic functions, combining functions and rates of change, with MHF4U exam review.
    - Month 3: Trigonometric Functions, Identities and Equations
      - Weeks 9-10: Radians and Trigonometric Functions
      - Weeks 11-12: Identities and Trigonometric Equations
    - Month 4: Exponential and Logarithmic Functions, Combining Functions and Rates of Change
      - Weeks 13-14: Exponential and Logarithmic Functions
      - Weeks 15-16: Combining Functions, Rates of Change and MHF4U Review
  - PHASE 3: Calculus and Vectors, and Exam Review (Months 5-6, Weeks 17-24)
    What we teach for MCV4U: limits and the derivative, derivative rules and applications, then vectors, lines and planes, ending with exam review. MCV4U batches begin with a quick review of the MHF4U ideas calculus relies on.
    - Month 5: Limits, Derivatives and Their Applications
      - Weeks 17-18: Rates of Change, Limits and the Derivative
      - Weeks 19-20: Curve Sketching, Optimization and Rates
    - Month 6: Vectors, Lines and Planes, and Exam Review
      - Weeks 21-22: Vectors in Two and Three Dimensions
      - Weeks 23-24: Lines and Planes, and Exam Review Technique

**Projects students build:** A one-page function toolkit summary, with a sketch of each parent function and its transformations; A polynomial sketch set: ten polynomials sketched by hand from factored form, then checked with graphing technology; A worked solutions file for factoring and inequalities, with every step justified in words; A rational function sketch set with asymptotes, intercepts and behaviour near each asymptote explained; A sinusoidal model of a real periodic situation, with the equation built from the data and explained; An identity proof file: ten identities proved in full, with the strategy for each written first; An applications pack: four real situations modelled with exponential or logarithmic functions and solved in full; A personal MHF4U review pack: one-page summaries for each unit, a mistakes list and a reviewed timed paper; Three derivatives worked from first principles, then confirmed with the rules, with a short written explanation; An optimization pack: four real problems set up and solved in full, each with a domain check; A vector applications set with a labelled diagram and a full written solution for each problem; A personal MCV4U review pack: unit summaries, a mistakes list and two reviewed timed papers.

### Orange Data Mining Course for College Students: Machine Learning and Analytics

`/courses/orange-data-mining-machine-learning-course-for-college-students` · 24 classes (12 weeks · 2 classes/week) · Beginner to applied practitioner (college students and graduates), no prior machine learning required

  - Phase 1: Reproducible Foundations
    Classes 1 to 5. Set up Orange, learn the canvas properly, and build the habits that separate a project that survives a viva from one that falls apart when someone asks you to run it again. Everything in this phase is about data you can trust and workflows that reproduce.
    - Class 1: Orange, Visual Programming and Why It Is Taken Seriously
    - Class 2: Data Sources, Types and Roles
    - Class 3: Missing Data, Outliers and Defensible Cleaning
    - Class 4: Joins, Aggregation and Reshaping
    - Class 5: Preprocess, Reproducibility and Workflow Engineering
  - Phase 2: Exploratory Analysis and Feature Engineering
    Classes 6 to 10. Model performance is decided long before the learner widget. This phase covers reading a dataset properly and then constructing the features that make the difference, along with the diagnostics that tell you when a feature is helping and when it is cheating.
    - Class 6: Distributions, Dispersion and Group Comparison
    - Class 7: Bivariate Analysis and Informative Projections
    - Class 8: Correlation, Multicollinearity and Distance
    - Class 9: Feature Engineering, Discretisation and Encoding
    - Class 10: Communicating Analysis with the Orange Report
  - Phase 3: Modelling and Rigorous Evaluation
    Classes 11 to 16. The modelling half of a data mining syllabus, taught with the validation rigour that distinguishes a result from a coincidence. Classification and regression, simple models and ensembles, and tuning that does not quietly contaminate the test set.
    - Class 11: The Modelling Frame, Baselines and Validation Design
    - Class 12: Trees, Rules and Interpretable Models
    - Class 13: Distance and Probability Models, Regression Begins
    - Class 14: Evaluation in Depth, from Confusion Matrix to Calibration
    - Class 15: Ensembles and Neural Networks
    - Class 16: Tuning, Deployment and the Traps That Invalidate Results
  - Phase 4: Unsupervised, Explainable and Specialised Data
    Classes 17 to 21. The rest of a data mining syllabus, taught to the same standard: clustering with validity measures rather than eyeballing, dimensionality reduction, association rules, model explainability, and the two data types that dominate project work, text and time series.
    - Class 17: Clustering and Cluster Validity
    - Class 18: Dimensionality Reduction, Outliers and Association Rules
    - Class 19: Explainability and Fairness
    - Class 20: Text Mining and Document Analysis
    - Class 21: Time Series and Spatial Data
  - Phase 5: The Python Bridge and Capstone
    Classes 22 to 24. Leave the course able to work in both worlds. Orange is a Python library, so the last phase connects the canvas to code, sets the ethical standard for the work, and produces a capstone that reproduces on a machine that is not yours.
    - Class 22: The Python Script Widget and Orange as a Library
    - Class 23: Build and Defend Your Capstone
    - Class 24: Report, Present and Continue

**Projects students build:** Install Orange, build a File to Data Table to Distributions canvas on a bundled dataset, then deliberately change the upstream file and document exactly which downstream widgets recomputed; Load one awkward real-world .csv, correct every mistyped column with Edit Domain, assign roles deliberately, and write a data dictionary describing every variable, its type and its role; Build a fully annotated cleaning pipeline on a messy dataset, recording instance counts before and after each step, and write a cleaning log justifying every decision; Build an entity-level analysis dataset from at least two source tables using Merge Data and Group by, engineer three derived features with Formula, and document what one row represents at each stage; Package everything from Classes 2 to 4 as a reproducible project folder: annotated .ows workflow, raw data file and a README, then have a classmate rerun it from scratch and report any step they could not reproduce; Produce a full univariate profile of your dataset, every numeric variable charted and described, every categorical variable tabulated, ending with three written hypotheses worth testing; Rank every feature by at least three scoring methods, reconcile the disagreements in writing, and build the informative projection that best separates your target classes; Diagnose multicollinearity in a numeric dataset, decide which features to drop with a written justification, and demonstrate the effect on a linear model's coefficients before and after; Engineer at least five new features from domain reasoning, then run a cross validated with-and-without comparison for each and keep only the ones that measurably earned their place; Produce a complete exploratory data analysis report on your project dataset: question, data dictionary, univariate and bivariate evidence, engineered features, and a stated set of limitations, exported as PDF; Write and register your evaluation protocol for the course project, then establish both baselines with stratified 10-fold cross validation and record the numbers every later model must beat; Train a tuned decision tree and a CN2 rule set on the same problem, extract the decision logic from both as written rules, and compare their cross validated performance against your baselines; Build a full regression pipeline on a continuous target, compare linear regression with and without regularisation against kNN regression, and report RMSE and R squared under identical cross validation; Evaluate every model built so far on one problem with a full evaluation dossier: metrics table, confusion matrices with stated costs, ROC comparison, calibration plot, and a recommended operating threshold with its justification; Run a full learner tournament, baseline through neural network and stacking, under one fixed cross validation, and write a model selection memo that justifies your winner on grounds beyond the top accuracy figure - plus 9 more on the course page.

### Orange Data Mining Course for Teens: Machine Learning Without Code

`/courses/orange-data-mining-visual-machine-learning-course-for-teens` · 24 classes (12 weeks · 2 classes/week) · Beginner-friendly (ages 13-18), no programming experience required

  - Phase 1: The Canvas and Your Data
    Classes 1 to 5. Install Orange, learn how visual programming actually works, and get genuinely good at the unglamorous part every real analyst spends most of their time on: loading, reading, repairing and reshaping a dataset before a single model is trained.
    - Class 1: What Data Mining Is, and Meeting Orange
    - Class 2: Loading Data and Reading It Honestly
    - Class 3: Fixing the Data Nobody Wants to Fix
    - Class 4: Reshaping, Combining and Summarising Data
    - Class 5: Preprocess, Save and Share Your Workflow
  - Phase 2: Seeing the Data
    Classes 6 to 10. Charts are not decoration, they are how you find the question worth modelling. This phase turns you into someone who can look at an unfamiliar dataset and, within ten minutes, produce the three visuals that explain what is going on.
    - Class 6: Distributions, Box Plots and Violin Plots
    - Class 7: Scatter Plots and Finding Informative Projections
    - Class 8: Bar Plots, Line Plots and Categorical Relationships
    - Class 9: Heat Maps, Correlations and Distance Maps
    - Class 10: Telling the Story with the Orange Report
  - Phase 3: Your First Machine Learning Models
    Classes 11 to 16. Training a model in Orange takes about thirty seconds. Knowing whether the model is any good takes the rest of this phase, and it is the part that actually matters. Every model you build here is tested properly before you are allowed to be impressed by it.
    - Class 11: Supervised Learning and the Baseline You Must Beat
    - Class 12: Decision Trees, the Model You Can Actually Read
    - Class 13: k Nearest Neighbours, Naive Bayes and Preprocessing That Matters
    - Class 14: Testing Honestly with Cross Validation and Confusion Matrices
    - Class 15: Logistic Regression, ROC Curves and Nomograms
    - Class 16: Ensembles, Neural Networks and Making Predictions
  - Phase 4: Finding Hidden Structure, Text and Images
    Classes 17 to 21. Not every dataset comes with answers attached. This phase covers unsupervised learning, where the model finds structure nobody labelled, and then applies the same canvas to two data types that do not look like spreadsheets at all: text and images.
    - Class 17: k Means Clustering and Silhouette Scores
    - Class 18: Hierarchical Clustering, DBSCAN and Distance
    - Class 19: PCA, t-SNE and Outliers
    - Class 20: Text Mining, from Words to Sentiment
    - Class 21: Image Analytics and Your First Image Classifier
  - Phase 5: Ethics, Capstone and Showcase
    Classes 22 to 24. A model that is technically correct and socially careless is still a bad model. You finish the course by learning what can go wrong, then building and presenting an end to end project of your own from raw data to defended conclusion.
    - Class 22: Bias, Leakage and Honest Conclusions
    - Class 23: Build Your Capstone
    - Class 24: Present, Publish and Where Data Takes You Next

**Projects students build:** Install Orange on your own computer, open a blank canvas, place a File widget and a Data Table widget, connect them, and take a screenshot proving data flowed from one to the other; Load a real .csv you care about (school marks, cricket or football statistics, weather, a game leaderboard), inspect it in Data Table and Data Info, and write a one paragraph description of what each column means; Take a deliberately messy dataset provided in class, and build a five widget repair pipeline that renames variables, fixes types, filters bad rows and imputes missing values, ending in a clean Data Table; Combine two related datasets with Merge Data, create one new calculated column with Formula, and produce a Pivot Table that answers a specific question you write down first; Turn your Class 3 and Class 4 work into one tidy, annotated, left-to-right workflow, save it as an .ows file, and swap it with a classmate to check that they can rerun it with the data file; Build a three-chart comparison of one numeric variable across one categorical group in your dataset, using Distributions, Box Plot and Violin Plot, and write which chart told you the most; Use Find Informative Projections to identify the two most separating variables in a classification dataset, then build the scatter plot it suggests and select the most interesting cluster of points into a Data Table; Build a two-variable categorical analysis using Sieve Diagram and Mosaic Display, then present the same finding once honestly and once misleadingly with a Bar Plot, and explain exactly what you changed; Build a Correlations and Heat Map pair on a numeric dataset, identify one pair of variables that are effectively duplicates, and justify which one you would keep; Produce a complete visual story on your own dataset: one question, three charts chosen deliberately, written commentary on each, exported as a PDF report; Take a classification dataset, chart its target distribution, run the Constant baseline through Test and Score, and write down the accuracy number that every later model in this course must beat; Train a decision tree on your dataset, open Tree Viewer, and write out the three clearest decision rules in plain English, then deliberately overfit by removing the depth limit and describe what changed; Compare kNN with and without normalisation in the same Test and Score, add Naive Bayes as a third learner, and write a paragraph explaining the accuracy gap that normalisation caused; Run every model you have built so far through Test and Score with 10-fold cross validation against the Class 11 baseline, then open Confusion Matrix and describe, in consequences rather than numbers, what each type of error would mean; Train logistic regression alongside your decision tree, compare them in ROC Analysis, then use the Nomogram to write down the three features that most influence the prediction and in which direction - plus 9 more on the course page.

### PCAP Certification Prep: Certified Associate in Python Programming

`/courses/pcap-python-certification-prep-course` · 4 months (16 weeks), joinable any month · Anyone with basic Python (PCEP level or equivalent) preparing for the PCAP associate certification

  - PHASE 1: Modules, Packages, Strings and Exceptions
    The first block of exam objectives, taught as real Python and drilled in exam form.
    - Month 1: Modules, Packages and the Standard Library
      - Importing and Module Basics
      - Standard Library Essentials
      - Packages, __init__ and Distribution
      - Strings in Depth
    - Month 2: Exception Handling and Consolidation
      - The Exception Hierarchy
      - Custom Exceptions and Defensive Code
      - Data Aggregates Refresher
      - Functions, Scope and Arguments
  - PHASE 2: Object-Oriented Python
    The block that decides most PCAP results, taught until class behaviour is predictable rather than surprising.
    - Month 3: Classes, Inheritance and Special Methods
      - Classes, Instances and Attributes
      - Inheritance and Polymorphism
      - Special Methods and Introspection
      - OOP Consolidation
  - PHASE 3: Generators, Closures, File Processing and Full Mocks
    The last objectives, then the exam itself rehearsed until the result is predictable.
    - Month 4: Advanced Python and Exam Rehearsal
      - Comprehensions, Generators and Iterators
      - Closures, Lambdas and Functional Tools
      - File Processing
      - Full Timed Mock Exams

**Projects students build:** Write a small multi-module program and import across it every supported way; Solve a set of tasks using only the standard library, no third-party packages; Build a small package with nested sub-packages and import from it correctly; Write a text-processing utility using only string methods, no regular expressions; Take a fragile script and make it robust with correctly ordered handlers; Design a small exception hierarchy for a described domain and use it properly; Solve a data-shaping task choosing the right structure at each step and justifying it; Write functions exercising every argument form, then predict their behaviour before running them; Build a class where class and instance variables are deliberately contrasted, then predict every output; Design a class hierarchy with overriding and demonstrate the resolution order; Write a class with operator overloading and full introspection support; A full OOP-only mock section, reviewed question by question; Rewrite an eager data pipeline as a lazy generator pipeline and compare behaviour; Build a small closure-based counter and function factory; Write a program that reads, transforms and writes files with full error handling - plus 1 more on the course page.

### PCEP and PCAP Python Certification Course

`/courses/pcep-pcap-python-certification-course` · 5 months (20 weeks) for PCEP then PCAP, joinable any month · Anyone from about 13 upward, including working adults; no prior programming required for the PCEP half

  - PHASE 1: PCEP Foundations (Months 1-2)
    Entry-level Python taught properly rather than as exam trivia, with every topic implemented before it is tested.
    - Month 1: Syntax, Data Types and Control Flow
      - The Interpreter, Literals and Variables
      - Operators, Precedence and Type Conversion
      - Conditionals and Loops
      - Lists, Tuples, Dictionaries and Sets
    - Month 2: Functions, Scope and Exceptions
      - Functions and Parameters
      - Scope, Shadowing and the global Keyword
      - Exceptions and Data Handling
      - PCEP Timed Practice and the First Repository
  - PHASE 2: PCAP Associate Material (Months 3-4)
    Modules, packages, object-oriented programming, exceptions in depth, and the standard library the associate exam assumes.
    - Month 3: Modules, Packages and Classes
      - Modules, Packages and the Import System
      - Classes, Objects and Attributes
      - Inheritance and Polymorphism
      - Exceptions as Objects
    - Month 4: Files, Strings and the Standard Library
      - File Handling and Streams
      - Strings in Depth
      - List Comprehensions, Lambdas and Closures
      - PCAP Timed Practice and the Portfolio
  - PHASE 3: Exam Readiness and Real Evidence (Month 5)
    The final stretch: passing the exam, and finishing with something worth more than the certificate.
    - Month 5: Final Preparation
      - Full Mock Exams
      - Targeted Repair
      - The Repository That Outlasts the Certificate
      - Booking, Sitting and What Comes After

### Princess Coders: Coding Course for Girls and Women

`/courses/princess-coders-complete-coding-masterclass` · 9-11 months (36-44 weeks) · Complete beginner; school girls, college students and women switching careers

  - PHASE 1: Foundations (Months 1-3, Weeks 1-12)
    HTML, CSS and JavaScript built properly, with creative projects deployed from the first months.
    - Month 1: First Steps
      - Welcome: Your Tech Journey Begins
      - HTML: Real Structure
    - Month 2: Style and Logic
      - CSS: Design That Holds
      - JavaScript: First Interactivity
    - Month 3: JavaScript Depth
      - Advanced JavaScript Concepts
      - Creative Coding & Visual Projects
  - PHASE 2: Modern Frontend (Months 4-6, Weeks 13-24)
    React the way it is written now, with UI craft, TypeScript and testing.
    - Month 4: React Foundation
      - React.js Foundation
      - Advanced React Patterns
    - Month 5: State and UI Craft
      - State Management & Data Flow
      - UI/UX Design for Developers
    - Month 6: TypeScript and Quality
      - TypeScript in Practice
      - Testing and Quality
  - PHASE 3: Backend Basics (Months 7-8, Weeks 25-32)
    The other half: Node, Express, databases, authentication and a real deployment.
    - Month 7: Node and APIs
      - Backend Fundamentals with Node
      - Building APIs with Express.js
    - Month 8: Data and Auth
      - Databases - Storing Your Data
      - Authentication and Deployment
  - PHASE 4: The Finale (Month 9, Weeks 33-36)
    The signature capstone, the women-in-tech week, and the final exam at demo day.
    - Month 9: Capstone and Community
      - The Signature Capstone
      - Women in Tech: Community, Mentorship, Visibility
      - Demo Day and the Final Exam

**Projects students build:** Create your Princess Coder profile page; Design your digital business card; Build an 'About Me' interactive story; Personal blog about your interests; Recipe collection website; Digital diary or journal; Online portfolio for your hobbies; Fashion lookbook website; Interactive greeting card creator; Photo gallery with filters; Animated story presentation; Interactive quiz about your favorite topic; Simple drawing application; To-do list with style; Mood tracker application - plus 53 more on the course page.

### Problem Solving and Computational Thinking for Kids

`/courses/problem-solving-and-computational-thinking-for-kids` · 6-8 months (26-32 weeks) · Complete beginner, ages 7 to 12

  - THE COURSE: Thinking, Trained (Months 1-6, Weeks 1-26)
    Logic and patterns, applied problem solving, then advanced challenges and the exam gauntlet.
    - Months 1-2: Logic and Pattern Recognition
      - Introduction to Problem Solving
      - Algorithmic Thinking Unplugged
      - Introduction to Code.org
      - Mathematical Problem Solving
    - Months 3-4: Applied Problem Solving
      - Scratch Problem Solving
      - Game Strategy & Logic
      - Real-World Problem Solving
      - Coding Challenges Platform
      - Mid-Course Review and Showcase
    - Months 5-6: Advanced Problem Solving
      - Advanced Algorithms
      - Robotics Problem Solving
      - Data and Logic Problems
      - Creative Problem Solving
      - Capstone and the Final Exam

**Projects students build:** Create a puzzle book; Design a treasure hunt; Solve 20 logic puzzles; Build pattern art; Write algorithms for daily tasks; Create a board game with rules; Design a flowchart adventure; Program a 'human robot'; Complete Code.org Course A; Create digital art with code; Solve 50 coding puzzles; Design custom maze challenges; Math puzzle collection; Create a math game; Budget planning project - plus 38 more on the course page.

### Problem Solving for Teens: Logic, Data Structures & Algorithms

`/courses/problem-solving-dsa-masterclass-teens` · 10-12 months (44-52 weeks) · Teenagers 13-18; no prior experience needed

  - PHASE 1: Foundation & Logic Building (Months 1-3, Weeks 1-13)
    Build unshakeable foundations. Learn to think like a programmer, master basic syntax, and solve your first 200+ problems.
    - Month 1: Programming Fundamentals & First Steps
      - Introduction to Problem Solving & Setup
      - Conditional Logic & Decision Making
      - Loops & Iteration Mastery
      - Functions & Modular Programming
    - Month 2: Data Structures Basics & Problem Patterns
      - Lists/Arrays Fundamentals
      - Strings & Text Processing
      - Dictionaries/Hash Maps & Sets
      - Basic Algorithms & Complexity
    - Month 3: Advanced Basics & Contest Preparation
      - Stack & Queue Mastery
      - Recursion & Backtracking Basics
      - Mathematics for Programming
      - Linked Lists Introduction
      - Phase 1 Final Project
  - PHASE 2: Core Data Structures & Algorithms (Months 4-6, Weeks 14-26)
    Master essential data structures, dive deep into algorithms, and start solving medium-level competitive programming problems.
    - Month 4: Trees & Advanced Sorting
      - Binary Trees Fundamentals
      - Binary Search Trees (BST)
      - Advanced Sorting Algorithms
      - Heaps & Priority Queues
      - Tries & String Algorithms
    - Month 5: Graphs & Network Algorithms
      - Graph Fundamentals
      - Graph Traversal Algorithms
      - Shortest Path Algorithms
      - Minimum Spanning Trees
    - Month 6: Phase 2 Completion & Integration
      - Algorithm Design Paradigms
      - Space & Time Optimization
      - Testing & Debugging Mastery
  - PHASE 3: Advanced Algorithms & Techniques (Months 7-9, Weeks 27-39)
    Master dynamic programming, advanced data structures, computational geometry, and complex problem-solving techniques.
    - Month 7: Dynamic Programming Mastery
      - DP Fundamentals
      - String DP Problems
      - Grid & Matrix DP
      - Knapsack & Subset Problems
      - Tree DP
    - Month 8: Advanced DP & Optimization
      - DP with Bitmasks
      - Interval DP & Games
      - DP Optimizations
      - Probability & Expected Value DP
      - State Space Reduction
    - Month 9: Computational Geometry & Number Theory
      - Computational Geometry Basics
      - Advanced Number Theory
      - Combinatorics & Counting
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Calculator for homework problems; Age calculator with fun facts; Simple chatbot that responds to inputs; Grade calculator with letter grades; Rock-Paper-Scissors game; Simple adventure game with choices; Password strength checker; Pattern printer (20+ patterns); Multiplication table generator; Prime number checker and generator; Number guessing game with attempts; Math helper library (GCD, LCM, factorial); Text analyzer (word count, character frequency); Recursive art generator; Unit converter with functions - plus 138 more on the course page.

### PSLE Maths: Model Method, Problem Sums & MOE Syllabus

`/courses/psle-maths-mastery` · 12 months (52 weeks) · Primary 4-6 students on the MOE syllabus, PSLE-bound

  - PHASE 1: The Method, Rebuilt Properly (Months 1-4)
    The gap behind most PSLE struggles is a model method learned as template instead of thinking. This phase rebuilds number fluency and model drawing from meaning, then applies both to the first problem-sum families.
    - Month 1: Diagnostic + Number Fluency, Bare-Handed
      - Diagnostic and the Honest AL Baseline
      - Whole-Number Operations at Paper 1 Tempo
      - Fractions as Numbers, From Pictures First
      - Decimals and the Fraction-Decimal-Percentage Bridge
    - Months 2-3: Model Drawing as Thinking
      - Part-Whole Models as Reasoning
      - Comparison Models Made Visible
      - Unit Thinking and Re-Cutting Bars
      - First Structure Families: Sum-and-Difference
    - Month 4: Heuristics, Named and Trained
      - Work Backwards Heuristic
      - Disciplined Guess-and-Check
      - Restate and Simplify
      - Phase 1 Checkpoint
  - PHASE 2: The P5-P6 Canon, Family by Family (Months 5-9)
    The problem-sum territory where the PSLE decides its top bands, taught by structure family so your child recognises the skeleton under every costume: fractions of remainder, ratio and its changes, percentage, speed and geometry.
    - Month 5: Fractions of Remainder and Branch Models
      - Remainder Concept and Branch Models
      - Multi-Stage Remainder Problems
    - Month 6: Ratio, and Ratio That Changes
      - Ratio as Units
      - Before-and-After Ratio Problems
    - Month 7: Percentage in Every Costume
      - Percentage Of, Increase and Decrease
      - Reverse Percentage at Exam Standard
    - Month 8: Speed, Rate and the Journey Problems
      - Speed as a Rate With Meaning
      - Journey Problems and Average Speed
    - Month 9: Geometry, Area and the Visual Problems
      - Angles and Figures With Justification
      - Area, Perimeter and Shaded Regions
  - PHASE 3: Paper Craft and the PSLE Runway (Months 10-12)
    Understanding becomes AL bands here: Paper 1 speed without a calculator, Paper 2 working discipline, timed full papers with review rituals, and a peak plan that walks into the PSLE calm.
    - Month 10: Paper 1 and Paper 2 as Different Skills
      - Paper 1 Craft and Mental Strategies
      - Paper 2 Craft and Method Marks
    - Month 11: Timed Papers and Mark Banking
      - Full Timed Papers and Mark Banking
      - Review Rituals and the Error Log
    - Month 12: The Calm Runway
      - Weakest-Family Rotations
      - Final Cycles and the Peak-Week Plan

### Python and AI for Kids: Games, Turtle Art and Smart Projects

`/courses/python-ai-kids-masterclass` · 8-10 months (32-40 weeks) · Complete beginner, ages 9 to 12

  - PHASE 1: Python Basics (Months 1-2, Weeks 1-8)
    The first real language, learned through play: printing, variables, decisions and loops, every week ending with something funny or clever to show at home.
    - Month 1: First Code
      - Welcome to Programming & Setup
      - Variables & Data Types - Teaching Python to Remember
    - Month 2: Decisions and Loops
      - Making Decisions with If-Else
      - Loops - Making Python Repeat
  - PHASE 2: Turtle Art and Coder Powers (Months 3-4, Weeks 9-16)
    The famous turtle draws what the child commands: spirals, stars and snowflakes, then lists and functions turn scripts into real programs.
    - Month 3: The Turtle Awakens
      - Introduction to Turtle Graphics
      - Advanced Turtle Projects
    - Month 4: Lists and Functions
      - Lists & Collections
      - Functions - Reusable Code Blocks
  - PHASE 3: Real Games (Months 5-6, Weeks 17-24)
    Programs that remember and games that feel real: files and saving, first object thinking, then Pygame from the game loop to finished, shareable games.
    - Month 5: Memory and Objects
      - File Handling & Data
      - Object-Oriented Programming Basics
    - Month 6: Pygame
      - Introduction to Pygame
      - Building Complete Games
  - PHASE 4: Kid-Safe AI and the Finale (Months 7-8, Weeks 25-32)
    AI learned the honest way for this age: built small, trained by the child, tested for mistakes, and finished with a capstone at demo day.
    - Month 7: AI, Discovered Properly
      - What is Artificial Intelligence?
      - Data Detective Work
    - Month 8: Camera Magic and the Capstone
      - Camera Magic: Train Your Own Model
      - Capstone and the Final Exam

**Projects students build:** Personalized greeting program; Magic calculator with special messages; Story generator with your name; Interactive story with user input; Age calculator with birthday messages; Mad Libs game generator; Personal quiz about yourself; Adventure game with choices; Grade calculator with feedback; Virtual pet mood checker; Rock, Paper, Scissors game; Pattern art generator; Guessing game with attempts; Countdown timer with effects; ASCII art animation - plus 45 more on the course page.

### Python Automation Course: Scripting, Scraping & Applied AI

`/courses/python-ai-automation-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Python Foundation & Core Programming (Months 1-3, Weeks 1-13)
    Build rock-solid Python fundamentals. Learn programming concepts, master Python syntax, and create your first automation projects.
    - Month 1: Python Fundamentals & Programming Logic
      - Introduction to Python & Setup
      - Variables, Data Types & Operations
      - Control Flow & Loops
      - Data Structures in Python
    - Month 2: Functions, Modules & OOP
      - Functions & Functional Programming
      - Object-Oriented Programming
      - Modules, Packages & Error Handling
      - File Handling & Data Processing
    - Month 3: Advanced Python & Automation
      - Advanced Python Concepts
      - Database Programming
      - Web Development with Python
      - Network Programming & APIs
  - PHASE 2: Web Scraping & Automation Tools (Months 4-6, Weeks 14-26)
    Master web scraping, browser automation, task automation, and building robust automation frameworks.
    - Month 4: Web Scraping & Browser Automation
      - Web Scraping Fundamentals
      - Advanced Web Scraping
      - Selenium & Browser Automation
      - Alternative Automation Tools
      - Data Processing & Analysis
    - Month 5: Enterprise Automation & Integration
      - RPA & Process Automation
      - API Development & Microservices
      - Cloud Automation & DevOps
      - Testing & Quality Assurance
      - Security & Best Practices
    - Month 6: Practical Machine Learning
      - Machine Learning Fundamentals
      - Supervised Learning Algorithms
      - Unsupervised Learning & Deep Learning Intro
  - PHASE 3: Applied AI for Automation (Months 7-9, Weeks 27-39)
    Master advanced AI techniques, computer vision, natural language processing, and production AI systems.
    - Month 7: Computer Vision & Image Processing
      - Image Processing Fundamentals
      - Advanced Computer Vision
      - Deep Learning for Computer Vision
      - Natural Language Processing
      - Advanced NLP with Transformers
    - Month 8: Time Series, Ethics & Production AI
      - Time Series & Forecasting
      - AI Ethics & Explainable AI
      - MLOps & Production Systems
    - Month 9: Cloud AI Services in Automation
      - Cloud AI Services & Deployment
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Set up complete Python development environment; Simple calculator program; Personal information collector; Temperature converter (C/F/K); Text analyzer and formatter; Simple encryption/decryption tool; Number guessing game; Pattern generator (pyramids, diamonds); Prime number calculator; Password strength validator; Student management system; Shopping cart application; Contact book with search; Data structure performance analyzer; Modular calculator with functions - plus 123 more on the course page.

### Python for Teens: Complete Course from Beginner to Advanced

`/courses/python-complete-masterclass-teens` · 10-12 months (40-48 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Python Foundations and OOP (Months 1-3, Weeks 1-12)
    From the first line of code to data structures, algorithms and object-oriented programming. Every week ends with something built.
    - Month 1: First Programs
      - Introduction and Setup
      - Control Flow and Logic
      - Loops and Iteration
      - Functions
    - Month 2: The Data Structures Every Program Uses
      - Lists and Tuples
      - Dictionaries and Sets
      - Strings and Text
      - Files, JSON and Errors
    - Month 3: Algorithms and Objects
      - Power Collections
      - Algorithms and Problem Solving
      - Object-Oriented Programming
      - Inheritance and Polymorphism
  - PHASE 2: Games, Apps and Automation (Months 4-6, Weeks 13-24)
    Skills become products: real Pygame games shared online, desktop apps, automation that does actual chores, and a first honest look at data.
    - Month 4: Build Real Games
      - Pythonic Objects
      - Pygame: The Game Loop
      - Pygame: Juice and Polish
      - Game AI and Shipping Your Game
    - Month 5: Programs That Do Your Chores
      - Desktop Apps with Tkinter
      - Automation: Files, Sheets and Documents
      - Web Scraping, Politely
      - Automation Capstone
    - Month 6: Data Tells Stories
      - NumPy and pandas Foundations
      - Data Visualization
      - A Real Data Project
      - Phase 2 Capstone and Review
  - PHASE 3: Python on the Web (Months 7-8, Weeks 25-32)
    How the web really works, then Flask: routes, templates, forms, a database, user accounts, and a deployment to a public URL.
    - Month 7: From Requests to Flask
      - How the Web Works
      - Consuming APIs
      - Flask: Your First Web App
      - Templates, Forms and Sessions
    - Month 8: Databases, Users and Deployment
      - Databases with SQLite and SQLAlchemy
      - User Accounts and Web Safety
      - Deploying to the Real Internet
      - Web Capstone
  - PHASE 4: AI, Quality and the Capstone (Months 9-10, Weeks 33-40)
    Machine learning done honestly, AI features built on modern APIs, professional habits with Git and pytest, and a final capstone shipped like a product.
    - Month 9: AI and Real-World Tools
      - Machine Learning with scikit-learn
      - Building on AI APIs
      - An AI Feature in a Real App
      - Git and GitHub for Real Projects
    - Month 10: Quality, Capstone and Demo Day
      - Testing and Code Quality
      - Final Capstone Build
      - Demo Day and What Comes Next

**Projects students build:** A personal greeting bot that asks questions and answers back; Calculator with memory; Mad libs story generator; Rock-Paper-Scissors-Lizard-Spock game; Password strength analyzer with rules; Choose-your-own-adventure text game; Pattern generator (ASCII art); Prime number visualizer; Multiplication table game; Progress bar implementation; Homework helper library of reusable functions; Unit converter covering 20+ conversions; Menu-driven mini app assembled from functions; Spotify playlist manager; Tic-tac-toe with AI opponent - plus 83 more on the course page.

### Python Masterclass: Zero to Advanced, Live Online

`/courses/python-programming-masterclass-zero-to-advanced-college` · 9-11 months (36-44 weeks) · Complete beginner (18+); college students, graduates and professionals

  - PHASE 1: Core Python (Months 1-3, Weeks 1-12)
    The language itself, learned properly: syntax, control flow, functions and the core data structures, practiced through daily building.
    - Month 1: First Python
      - Introduction to Programming & Python Setup
      - Variables, Data Types & Operators
    - Month 2: Control Flow and Functions
      - Control Flow: Conditions & Loops
      - Functions & Modular Programming
    - Month 3: The Data Structures
      - Lists & List Operations
      - Tuples, Sets & Dictionaries
  - PHASE 2: Professional Python (Months 4-6, Weeks 13-24)
    The jump from scripts to software: object-oriented design, files and exceptions, the standard library as a first resort, testing, and a real capstone.
    - Month 4: Object-Oriented Python
      - Introduction to OOP Concepts
      - OOP Principles: Inheritance & Polymorphism
    - Month 5: Files, Exceptions and the Standard Library
      - File Handling & Exception Handling
      - Modules, Packages & Standard Library
    - Month 6: Testing and the Phase Capstone
      - Testing & Debugging
      - Phase 2 Capstone
  - PHASE 3: The Working Toolkit (Months 7-8, Weeks 25-32)
    What turns language skill into working capability: Git and GitHub, real APIs and polite scraping, automation that survives reality, and concurrency without folklore.
    - Month 7: Git, GitHub and the Living Web
      - Version Control with Git & GitHub
      - APIs and Web Scraping, Done Politely
    - Month 8: Automation and Concurrency
      - Automation and Scripting That Survives Reality
      - Concurrency Without Folklore
  - PHASE 4: The Three Roads and the Finale (Month 9, Weeks 33-36)
    Web, data and AI, each tasted hands-on in real builds, then the final capstone and the exam that decides the certificate.
    - Month 9: Choose Your Road, Then Prove the Journey
      - The Three Roads, Tasted Honestly
      - Final Capstone Build
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations (personalized greetings); Simple calculator using print statements; About Me program (display personal information); ASCII art creator; Temperature converter (Celsius/Fahrenheit); Age calculator with days, hours, minutes; Simple interest calculator; BMI (Body Mass Index) calculator; Tip calculator with bill splitting; Number guessing game with attempts; Grade calculator with letter grades; Even/odd number checker; Multiplication table generator; Pattern printing (stars, pyramids, diamonds); Simple password validator - plus 75 more on the course page.

### Python Web Development with Django and Flask Course

`/courses/python-web-development-django-flask-course` · 6 months (24 weeks) · Intermediate, college students and working professionals with Python basics

  - PHASE 1: How the Web Works, Then Flask (Months 1-2, Weeks 1-8)
    HTTP demystified with real requests, then Flask built up from a single route to a complete application with a database, forms, and login.
    - Month 1: HTTP and Your First Flask Apps
      - What Happens When You Load a Page
      - First Flask Application
      - Templates
      - Forms and User Input
    - Month 2: Databases and a Complete Flask App
      - SQL Before the ORM
      - The ORM: SQLAlchemy
      - CRUD End to End
      - Sessions and Login
  - PHASE 2: Django Properly (Months 3-4, Weeks 9-16)
    The production framework, learned with Flask as the reference point: models, migrations, the admin, real authentication, relationships, and class-based views, ending in a multi-user project.
    - Month 3: Django Foundations
      - Projects, Apps, and URLs
      - Models and Migrations
      - The Admin and Django Templates
      - Django Forms
    - Month 4: Auth, Relationships, and Structure
      - Authentication
      - Relationships
      - Class-Based Views and Polish
      - Project Week: Ship the Django App
  - PHASE 3: REST APIs and Production (Months 5-6, Weeks 17-24)
    The skills backend jobs list by name: REST API design with Django REST Framework, token auth and permissions, then real deployment and a capstone shipped to a public URL.
    - Month 5: REST APIs with Django REST Framework
      - API Thinking
      - Serializers and CRUD Endpoints
      - API Authentication and Permissions
      - Consuming and Documenting the API
    - Month 6: Deployment and the Capstone
      - Deployment, For Real
      - Capstone: Scope and Foundations
      - Capstone: Build and Review
      - Ship and Defend

**Projects students build:** Request detective: a written trace of one real page load, every request annotated, plus a script that fetches and inspects three sites; Personal API: a Flask app with five routes returning text and JSON, including a dynamic greeting route; Movie catalog site: a browsable list rendered from Python data with a shared base layout and detail pages; Feedback board: a form that accepts, validates, and displays entries, with flash messages for errors and success; Query workbook: a seeded database of books and members, interrogated with fifteen handwritten SQL queries; Movie catalog, database edition: the month 1 site rebuilt on SQLAlchemy models instead of Python lists; Notes application: full CRUD with create, edit, delete, and detail pages backed by the database; Notes app with accounts: registration, hashed passwords, login, logout, and notes scoped to their owner; Django hello-world done right: a two-app project with routed pages, shared base template, and static files; Job board, part one: JobPosting and Company models, migrated, seeded, and queried from the shell; Job board, part two: public listing and detail pages, plus a configured admin where postings are managed; Job board, part three: a post-a-job form with validation, plus an application form with resume upload; Job board accounts: employer and candidate signup, login, and pages that respond to who is viewing them; Job board relationships: companies, postings, tags, and saved-jobs wired together with efficient queries; Job board, refactored: listing pages moved to generic views with pagination, search, and tag filtering - plus 9 more on the course page.

### Queen Coders: Advanced Engineering for Women Developers

`/courses/queen-coders-advanced-tech-leadership` · 9-11 months (36-44 weeks) · Women developers with working experience (roughly 2+ years or a strong portfolio)

  - PHASE 1: Advanced Engineering (Months 1-3, Weeks 1-12)
    The judgment layer above syntax: design principles, cloud and data architecture, performance and security.
    - Month 1: Design and Cloud
      - Advanced Software Engineering Principles
      - Cloud Architecture & Infrastructure
    - Month 2: Data and Performance
      - Advanced Databases & Data Architecture
      - Performance Engineering & Optimization
    - Month 3: Security and APIs
      - Advanced Security Engineering
      - API Design & GraphQL Mastery
  - PHASE 2: AI Engineering (Months 4-6, Weeks 13-24)
    The layer every senior role now assumes: ML engineering, modern AI applications, LLMs and agent development, and data engineering.
    - Month 4: ML Engineering
      - Machine Learning Engineering
      - Advanced AI Applications
    - Month 5: LLMs and Agents
      - LLMs & Generative AI
      - AI Engineering & Agent Development
    - Month 6: Data Engineering and the Phase Capstone
      - Data Engineering & Analytics
      - Phase 2 Capstone: An AI-Era System
  - PHASE 3: Technical Leadership (Months 7-8, Weeks 25-32)
    The honest skills of staff-level work: leading through decisions, reviews and people, and choosing between management and the senior IC road.
    - Month 7: Staff-Level Craft
      - Staff/Principal Engineering Skills
      - Technical Leadership Skills
    - Month 8: Leading Engineers
      - Engineering Leadership
      - Engineering Management vs the Senior IC Road
  - PHASE 4: The Finale (Month 9, Weeks 33-36)
    Community leadership, the architecture capstone, and the final defense.
    - Month 9: Capstone and Defense
      - Open Source and Community Leadership
      - Capstone Build: The Architecture Dossier
      - The Final Defense

**Projects students build:** Design and implement a distributed cache system; Build a custom ORM framework; Create a microservices architecture blueprint; Implement advanced design patterns library; Multi-region Kubernetes deployment; Serverless e-commerce backend; Infrastructure automation with Terraform; Cloud cost optimization audit tool; Build a sharded database system; Real-time analytics pipeline with Kafka; Graph-based recommendation engine; Data warehouse ETL pipeline; Build a high-performance web server; Optimize a slow application (10x improvement); Implement custom load balancer - plus 52 more on the course page.

### React Course for Teens: JavaScript to Real React Apps

`/courses/react-for-teens-complete-masterclass` · 9-11 months (36-44 weeks) · Absolute beginner, ages 13 to 18

  - PHASE 1: Web and JavaScript Foundations (Months 1-3, Weeks 1-12)
    The real base React stands on: HTML, CSS and JavaScript learned deeply, through the DOM and modern ES6+, ending with a deployed project.
    - Month 1: The Web, Properly
      - Your First Steps in Web Development
      - CSS - Making Things Look Amazing
    - Month 2: Modern CSS and First JavaScript
      - Advanced CSS & Modern Web Design
      - JavaScript Fundamentals - Programming Basics
    - Month 3: The DOM and Modern JavaScript
      - JavaScript DOM Manipulation
      - Modern JavaScript (ES6+) for React
  - PHASE 2: React Core (Months 4-6, Weeks 13-24)
    React the way it is actually written: components and props, state and hooks, routing, real data with honest loading states, and styling that scales.
    - Month 4: Components and State
      - Introduction to React
      - React State & Interactivity
    - Month 5: Hooks and Routing
      - React Hooks Deep Dive
      - React Router & Navigation
    - Month 6: Real Data and Styling
      - Data and APIs in React
      - Styling React Applications
  - PHASE 3: React Craft (Months 7-8, Weeks 25-32)
    What separates builders from tutorial-followers: forms done right, state at scale, TypeScript, and testing with performance judgment.
    - Month 7: Forms and State at Scale
      - Forms & Validation in React
      - State at Scale: Context and Beyond
    - Month 8: TypeScript and Quality
      - TypeScript with React
      - Testing and Performance
  - PHASE 4: Ship (Month 9, Weeks 33-36)
    An honest taste of Next.js, then the main event: the capstone built, deployed and defended at demo day.
    - Month 9: Next Taste, Capstone, Demo Day
      - A Taste of Next.js
      - Capstone Spec and Setup
      - Capstone Build
      - Demo Day and the Final Exam

**Projects students build:** Personal profile page about your interests; Fan page for your favorite artist/game/show; School club or team website; Animated landing page for a fake startup; Instagram-style photo gallery; Responsive blog design with dark mode; Animated movie poster with hover effects; Spotify-inspired music player UI; Gaming website with parallax scrolling; Grade calculator for school; Simple quiz game about your interests; Password strength checker; Interactive todo list with local storage; Countdown timer for events; Simple drawing app with canvas - plus 37 more on the course page.

### React Masterclass: JavaScript to Production React

`/courses/react-js-complete-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: JavaScript & React Fundamentals (Months 1-3, Weeks 1-13)
    Build rock-solid foundations in JavaScript ES6+ and React core concepts, components, and hooks.
    - Months 1-2: JavaScript Mastery for React
      - Modern JavaScript Essentials
      - Introduction to React
      - Components & Props
      - State & Event Handling
    - Month 3: React Hooks Mastery
      - Essential Hooks
      - Custom Hooks & Patterns
      - Styling in React
  - PHASE 2: Advanced React & State Management (Months 4-6, Weeks 14-26)
    Master routing, forms, API integration, and professional state management solutions.
    - Months 4-5: Routing & Data Management
      - React Router
      - Forms & Validation
      - API Integration & Data Fetching
      - Context API & State Management
      - Advanced Redux Patterns
    - Month 6: Component Patterns & Architecture
      - Advanced Component Patterns
      - Performance Optimization
      - Error Handling & Debugging
      - Accessibility & SEO
      - Phase 2 Capstone Project
  - PHASE 3: TypeScript, Testing & Next.js (Months 7-9, Weeks 27-39)
    Master TypeScript with React, comprehensive testing, and server-side rendering with Next.js.
    - Months 7-8: TypeScript & Testing
      - TypeScript Fundamentals for React
      - TypeScript with React
      - Testing React Applications
      - End-to-End Testing
      - Introduction to Next.js
    - Month 9: Advanced Next.js & Full-Stack
      - Advanced Next.js Features
      - GraphQL with React
      - Micro-Frontends & Module Federation
      - Progressive Web Apps (PWA)
      - Phase 3 Capstone Project
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** JavaScript utility functions library; Todo app with vanilla JavaScript; Weather app with API calls; Array manipulation exercises; First React app setup; Static website with React; Personal portfolio starter; JSX exercises and experiments; Component library creation; Blog post list component; Product card components; Navigation menu component; Interactive counter app; Form with validation; Todo list with state - plus 97 more on the course page.

### Reasoning and Readiness for Young Thinkers (Ages 6 to 9)

`/courses/reasoning-and-readiness-course-for-young-thinkers` · 6 months (24 weeks), joinable any month, in two age bands: ages 6 to 7 and ages 8 to 9 · Children aged 6 to 9 (roughly kindergarten or Year 1 to grade 4 or Year 5) who enjoy puzzles; no prior experience needed

  - PHASE 1: Seeing Patterns and Sorting (Months 1-2, Weeks 1-8)
    The first habits of reasoning: noticing what repeats, what changes and what belongs together.
    - Month 1: Patterns All Around
      - Weeks 1-2: Repeating Patterns and What Comes Next
      - Weeks 3-4: Growing Patterns and Shape Changes
    - Month 2: Alike, Different and Belonging Together
      - Weeks 5-6: Sorting and Classifying
      - Weeks 7-8: Analogies and Relationships
  - PHASE 2: Spatial and Quantitative Reasoning (Months 3-4, Weeks 9-16)
    Thinking with shapes in space, and thinking with numbers, both built on hands-on play before pictures.
    - Month 3: Turning, Flipping and Folding
      - Weeks 9-10: Rotations, Reflections and Shape Puzzles
      - Weeks 11-12: Folding, Cutting and Picturing
    - Month 4: Number Sense and Quantitative Reasoning
      - Weeks 13-14: Number Sense That Runs Deep
      - Weeks 15-16: Balances, Number Series and Number Puzzles
  - PHASE 3: Putting It Together (Months 5-6, Weeks 17-24)
    Harder mixed puzzles, explaining thinking clearly, and a calm, honest look at what a group screening feels like.
    - Month 5: Multi-Step Puzzles and Explaining Your Thinking
      - Weeks 17-18: Puzzles With Two Rules
      - Weeks 19-20: Listening, Choosing and Checking
    - Month 6: Familiarity, Confidence and Celebration
      - Weeks 21-22: What a Group Screening Is Like
      - Weeks 23-24: Puzzle Portfolio and Next Steps

**Projects students build:** A pattern necklace or pattern strip the child designs and explains; Build a growing pattern with blocks and draw the next two steps; A family sorting game the child invents and teaches at home; Draw three picture analogies of your own for the class to solve; A tangram picture book: five pictures built and named by the child; A folding and cutting predictions journal, checked with real paper each time; A number-line wall chart the child builds and uses in class; Invent a number series puzzle and a balance puzzle for the class; A two-rule puzzle the child designs, with a written or spoken explanation; A puzzle trail around the home with clues the child follows; A calm-day plan made with the child, in pictures; A puzzle portfolio: the child's own invented puzzles from the course.

### Roblox Game Coding for Kids: Build Real Games in Luau

`/courses/roblox-game-coding-for-kids-lua-course` · 6 months (24 weeks) · Beginner, ages 8 to 14

  - PHASE 1: Studio Skills and First Luau Scripts (Months 1-2, Weeks 1-8)
    First the tools: building worlds in Roblox Studio with confidence. Then the leap every Roblox kid dreams about: writing real Luau code that changes the world by itself.
    - Month 1: Becoming a Builder in Roblox Studio
      - Welcome to Roblox Studio
      - Parts and Properties
      - Building a World
      - Your First Script
    - Month 2: Luau from Zero
      - Variables and Values
      - Making Decisions
      - Loops
      - Functions
  - PHASE 2: Events, Players, and Keeping Score (Months 3-4, Weeks 9-16)
    Scripts so far ran on their own. Now they respond to players: touched events, health, doors, and traps, then leaderboards, coins, and checkpoints, the machinery every real Roblox game runs on.
    - Month 3: Events and Player Interaction
      - The Touched Event
      - Changing the Player
      - Doors, Buttons, and Debounce
      - Project Week: The Scripted Obby
    - Month 4: Score, Coins, and Checkpoints
      - Leaderboards
      - Collectibles
      - Checkpoints
      - On-Screen Interfaces
  - PHASE 3: Real Game Mechanics and the Published Capstone (Months 5-6, Weeks 17-24)
    Shops, timers, rounds, and polish turn a course into a game people replay. Then the capstone month: design, build, playtest, and publish an original game to Roblox.
    - Month 5: Mechanics That Make Games Fun
      - The Shop
      - Timers and Rounds
      - Sound, Light, and Polish
      - Project Week: The Complete Mini-Game
    - Month 6: The Capstone, Published to Roblox
      - Designing Your Game
      - Build Sprint One: Core Mechanics
      - Build Sprint Two: Testing and Tuning
      - Publish and Present

**Projects students build:** First playground: a small floating island with ramps, towers, and a jump course to test; Secret hideout: a house with a hidden walk-through wall and a glass floor over a drop; Obby, part one: a ten-stage jump course across terrain you sculpted yourself; Magic brick: a part that changes color and prints a welcome message the moment the game starts; Teleporting part: a script that moves a platform to a new position, then a script that grows it step by step; Weather machine: a script that checks a variable and sets the world to day, night, or fog to match; Disco floor: a grid of tiles that flash random colors forever; Instant staircase: a for loop that builds a climbable spiral stair; Trap factory: one makeTrap function used to fill an obby stage with ten identical traps in seconds; Lava stage: an obby section with kill bricks that send careless players back to the start; Power-up alley: a course with speed strips, jump pads, a healing station, and one sneaky slow-down trap; Dungeon gate room: a button-operated gate with proper debounce and a door that only opens for players holding the right key part; Obby 2.0: a fully scripted multi-stage obby with kill bricks, power-ups, at least one gate, and a victory area; Point course: a stage where every platform reached for the first time adds points to a live leaderboard; Coin rush: a field of spinning coins with pickup sounds, a live coin counter, and coins that respawn - plus 10 more on the course page.

### SAT Math 800 Prep: Live Classes for the Digital SAT

`/courses/sat-math-prep-course` · 6 months (26 weeks) · Grades 10-12, all starting scores

  - PHASE 1: The Algebra Core (Weeks 1-8)
    The Digital SAT's biggest domain is algebra. This phase diagnoses exactly where points are leaking and rebuilds linear equations, systems, inequalities and functions to reconstruction strength, the foundation every later question type stands on.
    - Weeks 1-2: Diagnostic + Linear Equations Rebuilt
    - Weeks 3-4: Systems and Inequalities
    - Weeks 5-6: Functions as Machines
    - Weeks 7-8: Algebra Domain Checkpoint
  - PHASE 2: Advanced Math + Problem-Solving & Data (Weeks 9-18)
    The domains that separate good scores from great ones: quadratics and exponentials taught as ideas, then the ratio-percent-data cluster where careless points go to die. Every topic is drilled at real SAT difficulty tiers, including the hard-module versions.
    - Weeks 9-11: Quadratics and Nonlinear Equations
    - Weeks 12-14: Exponential Growth, Polynomials and Rational Expressions
    - Weeks 15-18: Problem-Solving & Data Analysis
  - PHASE 3: Adaptive Test Craft + Mock Cycles (Weeks 19-26)
    Content becomes score in this phase: adaptive module strategy, Desmos speed workflows, geometry-and-trig completion, and a full mock cycle rhythm, test, review, repair, retest, that peaks the week of the real exam.
    - Weeks 19-20: Geometry and Trigonometry Domain
    - Weeks 21-23: Adaptive Strategy and Desmos Mastery
    - Weeks 24-26: Full Mock Cycles and Peak Week

**Projects students build:** Personal score map: your exact domains, question types and target; First timed mini-module under real Digital SAT pacing; Break-even mini-case solved by equation, table and graph; Error-log review: your system-question mistakes classified and closed; Function-transformation exploration built live in Desmos; Mixed timed set: algebra domain at full pace; Algebra checkpoint mock + personal pacing plan v1; Updated error log with closed vs open gap list; Projectile/revenue modeling mini-case solved by vertex reasoning; Timed hard-module quadratic set with full review; Growth-model comparison case: same data, linear vs exponential fits; Advanced Math domain checkpoint under timing; Data-interpretation sprint: 20 real chart questions under time; Full mixed-domain mock: first complete Digital SAT math section; Geometry domain checkpoint under timing - plus 5 more on the course page.

### Scratch Coding for Kids: Zero to Real Games in 3 Months

`/courses/scratch-programming-complete-course` · 3-4 months (12-16 weeks) · Complete beginner, ages 6 to 12

  - Month 1: Scratch Foundations & Basic Game Development
    Master Scratch basics, create animations, and build your first games.
    - Introduction to Scratch & Basic Motion
    - Looks, Sound, and Interactivity
    - Control Flow and Basic Logic
    - Pen Extension and Creative Drawing
  - Month 2: Advanced Scratch Techniques
    Master variables, lists, clones, and build complex games.
    - Variables and Score Systems
    - Lists and Data Management
    - Clones and Advanced Game Mechanics
    - Broadcast Messages and Multi-Sprite Coordination
      - Advanced Game Creation
  - Month 3: Mastery and Advanced Projects
    Create professional games, master extensions, and prepare for text coding.
    - Extensions and AI Blocks
    - Physics and Simulation
    - Optimization and Professional Polish
    - Final Projects and Portfolio

**Projects students build:** THE CAPSTONE: an original game designed and built by the child, with levels, scoring and a polished start screen; Classic picks: an RPG adventure with quests, an educational quiz world, or an arcade game with increasing difficulty; A portfolio page collecting the course’s best 10 projects.

### SHSAT Math Prep: NYC Specialized High Schools Test

`/courses/shsat-math-prep-course` · 6 months (24 weeks) per cycle, joinable any month; families usually start in grade 7 for the fall test in grade 8 · Students in grades 7 to 9 (roughly ages 12 to 15) who are confident with grade-level math and want to work on harder multi-step problems

  - PHASE 1: Number Fluency Without a Calculator (Months 1-2, Weeks 1-8)
    The arithmetic that every SHSAT math question rests on, made fast and accurate, plus the reading routine for word problems.
    - Month 1: Rational Numbers and the Problem Routine
      - Weeks 1-2: How the Adaptive SHSAT Works and a Starting Diagnostic
      - Weeks 3-4: Fractions, Decimals and Negative Numbers
    - Month 2: Number System, Exponents and Percents
      - Weeks 5-6: Factors, Primes, Exponents and Roots
      - Weeks 7-8: Percents, Percent Change and Multi-Step Number Problems
  - PHASE 2: The SHSAT Math Content Areas (Months 3-4, Weeks 9-16)
    Each content area NYC Public Schools names for the math section, taught at the depth multi-step questions need.
    - Month 3: Ratios, Expressions, Equations and Inequalities
      - Weeks 9-10: Ratios, Rates and Proportional Relationships
      - Weeks 11-12: Expressions, Linear Equations and Inequalities
    - Month 4: Statistics, Probability and Geometry
      - Weeks 13-14: Statistics and Probability
      - Weeks 15-16: Geometry and Measurement
  - PHASE 3: Test Craft for the Adaptive Format (Months 5-6, Weeks 17-24)
    Pacing, accuracy and calm on a long test where each question must be answered before the next appears.
    - Month 5: One Question at a Time
      - Weeks 17-18: Pacing and Decision-Making
      - Weeks 19-20: Weak-Spot Repair
    - Month 6: Final Practice and Test Day
      - Weeks 21-22: Final Timed Practice
      - Weeks 23-24: Test Week and Beyond

**Projects students build:** A personal starting profile: strengths, gaps and a target topic list; A no-calculator speed sheet of our own, retaken weekly to track accuracy and time; An original number-puzzle set, each solution explained in two sentences; Write and solve three original multi-step percent problems for a classmate; A ratio problem pack of our own, each problem solved two ways; An equation-building challenge: turn ten original word problems into equations, then solve; Collect a small data set, summarize it and write three probability questions about it; A personal formula sheet built from memory, then tested with original problems; Two full timed math sections of our own, each followed by a written pacing review; A weak-spot plan with three topics, each with a completed problem set; A written test-day plan: section order, pacing checkpoints and checks; Write a full solution to your favorite problem of the course for a newer student.

### Statistics & Probability: Data to Hypothesis Testing

`/courses/statistics-probability-maths-course` · 6 months (24 weeks) · College students and working professionals; no programming required

  - PHASE 1: Describing Data and Probability (Months 1-2, Weeks 1-8)
    The two foundations everything else stands on: honest description of data, and probability as the language of uncertainty.
    - Month 1: Describing Data Honestly
      - Data: What It Is and How It Lies to You
      - Central Tendency: What Is Typical
      - Spread: How Much Things Vary
      - Charts That Tell the Truth
    - Month 2: Probability, the Grammar of Uncertainty
      - Probability from First Ideas
      - Conditional Probability and Independence
      - Bayes' Theorem: Updating Beliefs with Evidence
      - Counting and Random Variables
  - PHASE 2: Distributions, Sampling and Estimation (Months 3-4, Weeks 9-16)
    The named distributions that model real processes, then the machinery of inference: sampling distributions, the central limit theorem seen by simulation, and confidence intervals.
    - Month 3: The Distributions That Model the World
      - The Binomial Distribution
      - Poisson and Geometric: Counts and Waits
      - Continuous Distributions and the Normal
      - Working with the Normal
    - Month 4: Sampling, the CLT and Confidence Intervals
      - Sampling: How Data Gets Collected and Corrupted
      - Sampling Distributions and the Central Limit Theorem
      - Confidence Intervals for Means
      - Proportions and Planning Sample Sizes
  - PHASE 3: Hypothesis Testing, Regression and the Capstone (Months 5-6, Weeks 17-24)
    Testing claims with data, measuring and modelling relationships, and then a complete analysis of a real dataset of your own, written up like professional work.
    - Month 5: Hypothesis Testing Done Honestly
      - The Logic of a Hypothesis Test
      - One-Sample Tests
      - Comparing Two Groups
      - Chi-Square and the Ethics of Testing
    - Month 6: Correlation, Regression and the Capstone
      - Correlation
      - Linear Regression
      - Capstone Build
      - Capstone Write-Up and Presentation

**Projects students build:** First dataset walk: load a real public dataset, document its variables, units and suspicious values before computing anything; Income exercise: a salary dataset summarised with mean and median, with a written note on why they disagree and which to report; Consistency study: two players or products with the same average compared on spread, with a recommendation written up; Chart audit: find one misleading chart in the wild, explain the distortion, and rebuild it honestly from the underlying data; Simulation warm-up: estimate a dice probability by simulation, compare with the exact answer, watch the gap shrink with more trials; Two-way table study: a real dataset cross-tabulated, with conditional probabilities read off and independence checked; Bayes explainer: work the medical test problem with natural frequencies and write an explanation a friend could follow; Game analysis: compute the expected value of a real lottery or carnival game and write the verdict in two sentences; Conversion study: model a marketing conversion scenario as a binomial and answer three business questions with it; Arrivals study: fit a Poisson model to real count data, compare observed and expected counts in a table; Normal check: test the 68-95-99.7 rule against a real dataset and report where it holds and where it breaks; Field guide build: your own one-page reference mapping real situations to binomial, Poisson, geometric, uniform or normal; Survey critique: take one published poll, identify its sampling method, and write three specific bias risks; CLT simulation: run the resampling experiment yourself in the spreadsheet or Python, and keep the charts as evidence; Interval report: a confidence interval for a real dataset's mean, reported in one correct sentence and one wrong-but-common sentence, labelled - plus 9 more on the course page.

### Swift and iOS Course: SwiftUI Apps from Zero

`/courses/complete-swift-programming-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & Core Swift Skills (Months 1-3, Weeks 1-13)
    Build rock-solid Swift fundamentals. Learn programming logic, master Swift syntax, protocol-oriented programming, and create your first iOS applications.
    - Months 1-2: Swift Fundamentals & Programming Basics
      - Introduction to Swift & Development Environment Setup
      - Variables, Data Types & Operators
      - Control Flow Statements
      - Functions & Collections
    - Month 3: Object-Oriented & Protocol-Oriented Programming
      - Structures, Classes & Properties
      - Inheritance, Polymorphism & Memory Management
      - Protocols & Protocol-Oriented Programming
  - PHASE 2: Intermediate Swift & SwiftUI Mastery (Months 4-6, Weeks 14-26)
    Master advanced Swift features, enumerations, generics, error handling, SwiftUI fundamentals, and basic iOS app development.
    - Month 4: Advanced Swift Features & SwiftUI Basics
      - Enumerations & Advanced Types
      - Error Handling & Advanced Error Management
      - Generics & Type System Deep Dive
      - SwiftUI Fundamentals - Part 1
      - SwiftUI Fundamentals - Part 2
    - Month 5: Advanced SwiftUI & UIKit Fundamentals
      - SwiftUI Lists, Forms & Data Display
      - SwiftUI Animations & Custom Drawing
      - UIKit Fundamentals
      - Data Persistence - UserDefaults & File System
    - Month 6: Concurrency, Core Data & Combine
      - Swift Concurrency - Async/Await
      - Core Data Fundamentals
      - Combine Framework Fundamentals
      - Swift Package Manager & Project Organization
  - PHASE 3: Professional iOS Development (Months 7-9, Weeks 27-39)
    Master professional iOS development with networking, advanced architecture, testing, accessibility, and real-world app development patterns.
    - Month 7: Networking & Architecture
      - Networking with URLSession
      - Advanced Networking & Authentication
      - App Architecture - MVVM
      - Advanced Architecture & The Composable Architecture
      - Unit Testing & Test-Driven Development
    - Month 8: UI Testing, Accessibility & Advanced Features
      - UI Testing & Snapshot Testing
      - Accessibility & Localization
      - Maps, Location & Background Tasks
      - Push Notifications & App Extensions
      - Camera, Photos & Media
    - Month 9: Performance, Purchases & Security
      - App Performance & Optimization
      - In-App Purchases & Subscriptions
      - Security & Data Protection
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations with personalized messages in Playground; Simple output programs using print() function; Personal information display program; ASCII art generator in Swift Playground; Interactive Playground with markdown documentation; Simple calculator (four basic operations) in Playground; Temperature converter (Celsius, Fahrenheit, Kelvin); Age calculator with optional handling; BMI calculator with health categories; Currency converter with type safety; Area and perimeter calculator for shapes; Compound interest calculator; String formatter and validator; Number guessing game with attempts limit; Grade calculator with letter grades using switch - plus 258 more on the course page.

### TMUA and STEP Preparation (Oxford MAT Now TMUA)

`/courses/tmua-mat-step-preparation-course` · 6 months (24 weeks) per stage: a TMUA stage for Year 12 and early Year 13, and a STEP stage for Year 13 offer-holders; joinable any month · Year 12 and Year 13 students (roughly ages 16 to 18) taking A Level Maths, ideally with Further Maths, who enjoy hard problems

  - PHASE 1: TMUA Content Fluency (Months 1-2, Weeks 1-8)
    UAT-UK's Section 1 knowledge, made fast and flexible without a calculator, and used in problems that do not look like textbook exercises.
    - Month 1: Algebra, Functions and Sequences
      - Weeks 1-2: The Tests, a Diagnostic and Algebra Without a Calculator
      - Weeks 3-4: Polynomials, Inequalities, Sequences and Series
    - Month 2: Coordinate Geometry, Trigonometry, Logarithms and Calculus
      - Weeks 5-6: Coordinate Geometry, Circles and Trigonometry
      - Weeks 7-8: Differentiation and Integration
  - PHASE 2: Mathematical Reasoning for TMUA Paper 2 (Months 3-4, Weeks 9-16)
    UAT-UK's Section 2: the logic of arguments and mathematical proof, taught from first principles and then tested under time.
    - Month 3: The Logic of Arguments
      - Weeks 9-10: Statements, Implication and Quantifiers
      - Weeks 11-12: Proof Methods and Counterexamples
    - Month 4: Finding Errors in Proofs and Timed TMUA Papers
      - Weeks 13-14: Identifying Errors in Proofs
      - Weeks 15-16: Full TMUA-Style Practice
  - PHASE 3: STEP 2 and STEP 3 (Months 5-6, Weeks 17-24)
    For students holding or expecting STEP offers: the specification's pure, mechanics and probability content stretched to STEP depth, and long solutions written in full.
    - Month 5: STEP Pure Mathematics
      - Weeks 17-18: How STEP Is Built, and Pure Problems That Take Time
      - Weeks 19-20: Calculus, Series and Complex Numbers at STEP Depth
    - Month 6: Mechanics, Probability and the June 2027 Papers
      - Weeks 21-22: Mechanics and Probability Questions
      - Weeks 23-24: Full Papers and the June Sittings

**Projects students build:** A personal starting profile: target tests, target universities and ten solved warm-ups; Write and solve five original problems that each hide a factorisation; An original geometry pack where every answer starts from a careful sketch; A calculus problem set of our own with one written explanation per answer; A logic glossary written in the student's own words with one original example each; Five short proofs of original statements, each written up twice: once rough, once clean; Write three deliberately flawed proofs of our own design and swap them with a classmate to find the errors; Two full timed TMUA-style papers of our own, each followed by a written review; Two long original problems written up in full, then rewritten after detailed feedback; A personal technique file: twelve methods, each with an original example; Two applied problems of our own written up in full with diagrams; A final full paper reviewed one to one with the teacher.

### Trading Automation Course: Bots, Backtesting & Systems

`/courses/algorithmic-trading-automation-masterclass` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Financial Markets & Python Foundation (Months 1-3, Weeks 1-13)
    Build solid understanding of financial markets, trading fundamentals, and Python programming for finance.
    - Month 1: Financial Markets Fundamentals
      - Introduction to Financial Markets
      - Trading Basics & Market Mechanics
      - Python Setup for Finance
      - Financial Data Acquisition
    - Month 2: Technical Analysis & Indicators
      - Classical Technical Analysis
      - Technical Indicators Programming
      - Fundamental Analysis Automation
      - Market Analysis & Screening
    - Month 3: Strategy Development & Backtesting
      - Trading Strategy Design
      - Backtesting Frameworks
      - Performance Analytics
      - Strategy Optimization
  - PHASE 2: Advanced Strategies & Portfolio Management (Months 4-6, Weeks 14-26)
    Master portfolio theory, risk management, advanced strategies, and quantitative methods.
    - Month 4: Portfolio Theory & Risk Management
      - Modern Portfolio Theory
      - Risk Management Systems
      - Advanced Trading Strategies
      - Market Microstructure & Execution
    - Month 5: Machine Learning for Trading
      - ML Fundamentals for Trading
      - Classification & Regression for Trading
      - Deep Learning for Markets
      - Alternative Data & NLP
      - ML Model Deployment
    - Month 6: Live Trading & Production Systems
      - Broker APIs & Connectivity
      - Paper Trading Implementation
      - Live Trading Systems
      - Cryptocurrency Trading
  - PHASE 3: Production Systems and Advanced Applications (Months 7-9, Weeks 27-39)
    From working strategies to production-grade systems: advanced instruments, trading infrastructure, cloud deployment, monitoring, compliance awareness and the safeguards that reliable automation demands.
    - Month 7: Advanced Instruments and Institutional Concepts
      - Options Trading Automation
      - Futures & Derivatives Trading
      - High-Frequency Trading Concepts
      - Fixed Income & Forex Trading
      - Quantitative Risk Analytics
    - Month 8: Advanced Infrastructure & Deployment
      - Trading Infrastructure Design
      - Cloud Deployment for Trading
      - Monitoring & Observability
      - Compliance & Regulatory
      - Testing & Quality Assurance
    - Month 9: Advanced Applications and Market Making
      - Advanced Machine Learning Applications
      - Market Making & Liquidity Provision
      - Alternative Trading Venues
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Market research report on major indices; Trading account setup (paper trading); Market terminology glossary; Paper trading diary with 10 trades; Risk-reward calculator; Trading cost analyzer; Python trading environment setup; Stock price data analyzer; Market statistics calculator; Multi-source data fetcher; Historical data downloader; Real-time price tracker; Financial database creator; Candlestick pattern detector; Support/resistance calculator - plus 137 more on the course page.

### TypeScript Course: Typed JavaScript, React and Node

`/courses/complete-typescript-programming-masterclass-college` · 10-12 months (44-52 weeks) · Complete beginner (18+); college students, graduates and working professionals

  - PHASE 1: Foundation & TypeScript Fundamentals (Months 1-3, Weeks 1-13)
    Build rock-solid JavaScript and TypeScript fundamentals. Learn programming logic, master TypeScript syntax, type systems, and create your first applications.
    - Months 1-2: JavaScript & TypeScript Fundamentals
      - Introduction to Programming & JavaScript Basics
      - Variables, Data Types & Operators
      - Control Flow & Functions
      - Arrays, Objects & ES6+ Features
    - Month 3: TypeScript Core & Type System
      - TypeScript Fundamentals & Setup
      - Interfaces, Type Aliases & Advanced Types
      - Generics & Advanced TypeScript
  - PHASE 2: Frontend Mastery with React & TypeScript (Months 4-6, Weeks 14-26)
    Master modern frontend development with React, state management, testing, and build production-ready user interfaces.
    - Months 4-5: React Fundamentals & Advanced Patterns
      - HTML, CSS & DOM Fundamentals
      - React Fundamentals & JSX
      - React Hooks & State Management
      - Advanced React Patterns
      - React Router & Navigation
    - Month 6: State Management & Testing
      - Global State Management
      - Testing React Applications
      - Build Tools & Performance
      - UI Libraries & Design Systems
      - Phase 2 Capstone Project
  - PHASE 3: Backend Engineering with Node.js & TypeScript (Months 7-9, Weeks 27-39)
    Master server-side development with Node.js, Express, databases, REST APIs, authentication, and production deployment.
    - Month 7: Node.js & Express Fundamentals
      - Node.js Fundamentals
      - Express.js Framework
      - REST API Design & Best Practices
      - Database Fundamentals - SQL
      - ORMs - Prisma & Drizzle
    - Month 8: Production Backend: Observability, Security & Deployment
      - Authentication & Authorization
      - NoSQL Databases - MongoDB
      - Caching, Sessions & Real-time
      - Email, File Storage & External Services
      - Testing Backend Applications
    - Month 9: Production Backend: Observability, Security & Deployment
      - Logging, Monitoring & Observability
      - Security & API Protection
      - Docker & Deployment
  - PHASE 4: The Finale (Month 10, Weeks 40-44)
    The capstone month: spec, build, ship and defend, then the final exam that decides the certificate.
    - Month 10: Capstone and the Final Exam
      - Capstone Spec and Setup
      - Capstone Build
      - Ship and Polish
      - Demo Day and the Final Exam

**Projects students build:** Hello World variations with personalized messages; Simple output programs using console.log; Personal information display program; ASCII art generator in JavaScript; Interactive greeting program; Simple calculator (four basic operations); Temperature converter (Celsius, Fahrenheit, Kelvin); Age calculator with detailed output; BMI calculator with health categories; Currency converter with exchange rates; Area and perimeter calculator for shapes; Compound interest calculator; Number guessing game with attempts limit; Grade calculator with letter grades; Even/odd checker and list generator - plus 192 more on the course page.

### Vedic Maths Mastery: Speed Calculation with All 16 Sutras

`/courses/vedic-maths-course-speed-calculation-mastery` · 6 months (24 weeks) · Beginner friendly, ages 8 to adult

  - PHASE 1: The Multiplication Engine (Months 1-2, Weeks 1-8)
    Multiplication shortcuts pay off fastest, so they come first: complements and base multiplication, the special patterns, then Urdhva-Tiryagbhyam for any two numbers.
    - Month 1: Complements and Base Multiplication
      - How the System Works: Complements
      - Nikhilam Multiplication Below the Base
      - Above the Base and Working Bases
      - The Special Patterns
    - Month 2: Urdhva-Tiryagbhyam, Multiplication for Any Numbers
      - Vertically and Crosswise: Two Digits
      - Three Digits and Mixed Sizes
      - Taking It Mental
      - Speed Lab One
  - PHASE 2: Squares, Cubes and Division (Months 3-4, Weeks 9-16)
    Powers and roots with Yavadunam and the duplex method, then the part most courses skip: division done three ways, including Tirthaji's general flag method.
    - Month 3: Squares, Cubes and Roots
      - Squares Near a Base
      - The Duplex Method: Any Square
      - Square Roots and Cube Patterns
      - Cube Roots and the Powers Checkpoint
    - Month 4: Division Three Ways
      - Nikhilam Division
      - Paravartya: Transpose and Apply
      - Straight Division: The Flag Method
      - Divisibility and Speed Lab Two
  - PHASE 3: Fractions, Algebra and the Capstone (Months 5-6, Weeks 17-24)
    The system applied where exams actually spend marks: fractions, decimals and percentages at speed, the algebra behind the sutras, and a timed capstone measured against week 1.
    - Month 5: Fractions, Decimals and Percentages at Speed
      - Recurring Decimals the Short Way
      - Fraction Arithmetic Without the Grind
      - Percentages and Ratio Shortcuts
      - Decimals and Speed Lab Three
    - Month 6: Algebra Applications and the Speed-Test Capstone
      - The Sutras Meet Algebra
      - Equations at Speed
      - Choosing the Right Tool
      - The Capstone Speed Test

**Projects students build:** Personal speed log opened: diagnostic scores recorded by sum type, to be updated all course; One-page proof poster: a student's own explanation of why Nikhilam works, with one worked example per base; Worked set: 20 mixed base multiplications with the chosen base and method noted next to each; Pattern wall chart: all month 1 shortcuts on one sheet in the student's own words and examples; Cross-pattern diagram set: the student draws the crosswise structure for five sums before solving them; Worked set: 15 three-digit crosswise multiplications with compact working shown; Mental drill routine card: a 5-minute daily warm-up the student designs and follows; Speed lab paper one: a timed 60-question multiplication paper, marked and logged the same day; Worked set: squares of every number from 91 to 109 by the fastest route, method noted for each; Duplex table: the student builds a reference table of duplexes for 1 to 3 digit forms with examples; Root-finder sheet: 20 perfect squares up to 5 digits, roots found and verified by squaring back; Powers method chart: every squares, cubes and roots technique on one page with a worked example each; Side-by-side set: 10 divisions worked both by long division and Nikhilam with times recorded for each; Choice drill sheet: 20 divisions labelled Nikhilam or Paravartya before solving, choices reviewed in class; Worked set: 12 flag-method divisions including two carried to three decimal places - plus 10 more on the course page.

### Vibe Coding for College: Full Stack, AI & DSA (Ages 18+)

`/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course` · 3 months (12 weeks) · Intermediate to Advanced (Ages 18+ / College Students)

  - PHASE 1: MERN Vibes, Full Stack Web Development (Weeks 1-4)
    Phase 1 builds you into a full-stack MERN developer. You'll master both the frontend (React) and backend (Node.js + Express + MongoDB), learn professional API design, authentication, and deploy your first production-level web application.
    - Week 1: JavaScript Mastery, Node.js & Your AI Development Toolkit
    - Week 2: MongoDB & Database Design, Persistent, Scalable Data
    - Week 3: React.js, Modern Frontend Development
    - Week 4: Full MERN, Authentication, Authorization & Deployment
  - PHASE 2: DSA & ML Vibes, Think Deeply, Build Intelligently (Weeks 5-8)
    Phase 2 is the intellectual heart of the program. We go deep into Data Structures & Algorithms for placement preparation, and simultaneously build practical Machine Learning projects that solve real problems. This phase makes you stand out in every technical interview.
    - Week 5: Data Structures, The Foundation of Every Interview
    - Week 6: Trees, Graphs & Advanced Algorithms
    - Week 7: Machine Learning, Teach Python to Predict the Future
    - Week 8: Deep Learning & AI Project Deployment
  - PHASE 3: Career Vibes, System Design, Capstone & Professional Launch (Weeks 9-12)
    The final phase transforms a skilled developer into a career-ready software engineer. System Design, advanced cloud deployment, the grand capstone project, and an intensive placement preparation program, this phase exists to get you hired.
    - Week 9: System Design & Agentic Engineering, Think Like a Senior Engineer
    - Week 10: Cloud, DevOps & Security for AI-Generated Code
    - Week 11: Placement Preparation & Professional Identity
    - Week 12: Grand Capstone Launch, Showcase, Certify & Conquer

**Projects students build:** Products REST API, CRUD operations for a product catalog (in-memory, no DB yet); URL Shortener API, shorten URLs and redirect, stored in memory; News Aggregation Proxy, fetch and forward data from a public news API; Blogging Platform API, full CRUD for posts, with categories, tags, and pagination; Student Records System, schema design with references between students, courses, grades; E-Commerce Product Catalog, categories, variants, stock tracking in MongoDB; Task Management Dashboard, Kanban-style board with drag and React state; Movie Browser, fetches TMDB API, search, filter, detailed movie pages; Expense Tracker, add/categorize/delete expenses, charts with Chart.js; Full-Stack Social Notes App, register/login, create/edit/delete notes, private per user; Recipe Sharing Platform, MERN app with auth, image uploads, saved recipes; LeetCode Top 50 Arrays & Strings, solve 15 curated problems with explanations; Custom Hash Map Implementation, build a hash map from scratch in Python; Text Editor Undo/Redo, stack-based implementation with UI; Graph Visualizer, interactive BFS/DFS visualization built with React - plus 18 more on the course page.

### Vibe Coding for Kids: AI, Scratch & Game Dev (Ages 8-12)

`/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev` · 3 months (12 weeks) · Complete Beginner (Ages 8-12)

  - PHASE 1: Foundation Vibes, Scratch & Creative Coding (Weeks 1-4)
    Kids dive into the colourful world of Scratch and block-based programming. They create their first animations, interactive stories, and simple games while learning the core ideas of coding, loops, events, and conditionals, through hands-on fun.
    - Week 1: Welcome to Vibe Coding!, Your First Animations
    - Week 2: Storytelling with Code, Scenes, Dialogues & Adventures
    - Week 3: Events & Interactivity, Making Things Happen!
    - Week 4: Loops & Patterns, The Magic of Repetition
  - PHASE 2: Game Dev Vibes, Build Your Own Games! (Weeks 5-8)
    Now the real fun begins! Kids learn the building blocks of game development: scoring, lives, enemies, levels, and game loops. By the end of Phase 2, every child will have built a complete, playable video game from scratch.
    - Week 5: Variables & Score Systems, 'You Win!' Moments
    - Week 6: Collision Detection & Game Mechanics, Real Game Feels
    - Week 7: Level Design & Multi-Screen Games, The Full Experience
    - Week 8: Complete Game Jam, Build Your Dream Game!
  - PHASE 3: AI & Real Vibe Coding, Build Apps by Talking to AI! (Weeks 9-12)
    In the final phase, kids experience the real magic of vibe coding, they train their own machine learning models, build real apps by describing ideas to AI tools like Replit and Bolt.new, create music with code, design with AI, and build their capstone 'Vibe Showcase' project. This is where kids learn the skill that Andrej Karpathy says will define the future: telling AI what to build and watching it come to life.
    - Week 9: AI for Kids, Teaching Computers to See, Hear & Build!
    - Week 10: Vibe Coding Your First Apps, Build by Talking to AI!
    - Week 11: Music Coding, AI Art & Portfolio, Create Like a Pro
    - Week 12: Grand Vibe Showcase, Your Moment to Shine!

**Projects students build:** Animated Greeting Card, make a character say hello to the world; Dancing Pet, a sprite that moves to your favourite music; About Me Story, an interactive presentation about yourself; A 3-Scene Adventure Story, hero, challenge, and victory; Interactive Storybook, click to turn pages; Talking Animal Show, two animals have a funny conversation; Virtual Piano, play notes by pressing keyboard keys; Click-and-Colour Art Canvas, draw with code; Interactive Quiz, 5 questions with right/wrong feedback; Geometric Art Machine, generates beautiful patterns automatically; Spinning Galaxy, looping space animation; Pattern Puzzle, create a design and challenge friends to recreate it; Catch the Falling Stars, catch sprites to earn points; Number Guessing Game, with hints and score tracking; Speed Challenge, collect 10 items before the timer runs out - plus 17 more on the course page.

### Vibe Coding for Teens: Python, Web Dev & AI (Ages 13-17)

`/courses/vibe-coding-for-teens-python-web-ai-projects-course` · 3 months (12 weeks) · Beginner to Intermediate (Ages 13-17)

  - PHASE 1: Python Vibes, Think Like a Developer (Weeks 1-4)
    Teens dive deep into Python, the world's most popular and versatile programming language. From variables and loops to building actual games and automation tools, Phase 1 transforms a complete beginner into a confident Python programmer.
    - Week 1: Python Unlocked, Your Developer Setup & First Programs
    - Week 2: Flow Control, Making Smart Programs
    - Week 3: Functions & Modules, Writing Clean, Reusable Code
    - Week 4: Data Structures & File Handling, Real Persistent Apps
  - PHASE 2: Web Dev Vibes, Build the Internet (Weeks 5-8)
    Now teens build things the whole world can see. Phase 2 covers HTML, CSS, and JavaScript, the core technologies of every website on the internet. By Week 8, students will have built fully responsive, beautifully designed websites deployed live on the internet.
    - Week 5: HTML, Structure is Everything
    - Week 6: CSS, Make It Look Amazing
    - Week 7: JavaScript, Bring Your Website to Life
    - Week 8: APIs & Full Web Projects, Connect to the Real World
  - PHASE 3: AI & Vibe Coding Mastery, Build Your Future (Weeks 9-12)
    The most exciting phase, teens master real vibe coding tools (Cursor IDE, Lovable, Claude/Gemini APIs), combine Python + Web skills to build AI-powered projects, set up their professional developer portfolio, and prepare for real-world opportunities: internships, hackathons, and competitive coding. This is where you become a true vibe coder, someone who can build anything by combining traditional coding skills with AI-powered development.
    - Week 9: AI Tools & Vibe Coding Mastery, Build with AI Like a Pro
    - Week 10: Vibe Coding Full Apps, Lovable, Bolt.new & Full Stack
    - Week 11: Developer Portfolio & Professional Presence
    - Week 12: Grand Vibe Showcase, Launch Your Career!

**Projects students build:** Personal Bio Generator, asks 5 questions and prints a formatted story about you; Simple Calculator, performs all 4 operations with user input; Mad Libs Creator, fill-in-the-blank story generator; Number Guessing Game, with hints, attempts counter, and high score; Times Table Generator, print any multiplication table on demand; Password Strength Checker, analyses a password and gives a strength rating; Dice Rolling Simulator, roll any number of sides, track statistics; Tip Calculator, restaurant bill splitter with formatted output; Word Counter, analyses a paragraph for word count, unique words, and top 5 most used; Contact Manager, add, search, update, delete contacts saved to a file; Student Grade Tracker, stores grades in JSON and calculates averages; Vocabulary Flash Card App, add words, quiz yourself, track score; Personal Portfolio Page v1, bio, skills, and contact section in pure HTML; Recipe Website, multi-page site with ingredients and instructions; Event Landing Page, HTML structure for a fictional school event - plus 19 more on the course page.

### Waterloo Math Contests: Gauss to Euclid

`/courses/waterloo-math-contests-gauss-to-euclid-course` · 6 months (24 weeks) per season, joinable any month and timed to the CEMC contests each student will write · Students roughly aged 11 to 18 (Grades 7 to 12) who are comfortable with school math and want harder problems, in a Gauss track (Grades 7 and 8), a Grades 9 and 10 track and a Grades 11 and 12 track

  - PHASE 1: The Shared Toolkit (Months 1-2, Weeks 1-8)
    Everything all three tracks need: how to read a contest problem, the core ideas of number, algebra, counting and geometry, and the first full written solutions.
    - Month 1: Reading Problems, Number Sense and Algebra
      - Weeks 1-2: How the Waterloo Contests Work and First Problems
      - Weeks 3-4: Number Sense and Algebra Habits
    - Month 2: Counting, Geometry and Writing a Full Solution
      - Weeks 5-6: Counting and Geometry Foundations
      - Weeks 7-8: Full Solutions and Multiple-Choice Technique
  - PHASE 2: The Grade Tracks (Months 3-4, Weeks 9-16)
    The tracks run in parallel in separate batches. Each track builds the mathematics and the question types of the contests its students will write.
    - Months 3-4, Gauss Track (Grades 7 and 8): Building the Gauss Toolkit
      - Weeks 9-10: Number Theory for Grades 7 and 8
      - Weeks 11-12: Ratios, Rates and Algebra in Words
      - Weeks 13-14: Counting and Probability
      - Weeks 15-16: Geometry and Measurement
    - Months 3-4, Grades 9 and 10 Track: Pascal, Cayley, Fryer, Galois and CIMC
      - Weeks 9-10: Algebra for Contests
      - Weeks 11-12: Number Theory and Counting
      - Weeks 13-14: Geometry with Reasons
      - Weeks 15-16: Full Solutions and Mixed Rounds
    - Months 3-4, Grades 11 and 12 Track: Fermat, Hypatia, CSMC and Euclid
      - Weeks 9-10: Functions, Equations and Inequalities
      - Weeks 11-12: Sequences, Number Theory and Counting
      - Weeks 13-14: Trigonometry and Geometry
      - Weeks 15-16: Proof Writing for Full-Solution Contests
  - PHASE 3: Contest Season (Months 5-6, Weeks 17-24)
    Timed rounds in the format of each student's next contest, polish on full solutions, the contest-day routine, then review and a plan for the next contest.
    - Month 5: Timed Rounds and Contest Craft
      - Weeks 17-18: Pacing Each Contest Format
      - Weeks 19-20: Review and Weak-Spot Repair
    - Month 6: Final Practice, Contest Days and Next Steps
      - Weeks 21-22: Final Practice Papers
      - Weeks 23-24: Contest Week and After

**Projects students build:** A personal starting profile: track, target contests for the year and ten solved warm-up problems; A word-problem pack of original problems, each solved with a clear equation and a check; A counting and geometry problem set of original problems, with a labelled diagram for every geometry question; Rewrite three of your own earlier answers as full solutions, then compare them with a model write-up; An original number puzzle pack, each solution explained in two or three sentences; A ratio and rate problem set solved two ways: once with a table, once with an equation; Design and solve three original counting problems for a classmate; A shaded-region problem pack of original problems, each with a labelled diagram; An original algebra problem set with full written solutions for the last three questions; A casework problem pack where each solution lists its cases clearly; Three original geometry problems solved with full written reasons; A personal model-solution file: five of your own best full solutions, rewritten after feedback; An original functions problem set with full written solutions for every question; A sequences and counting pack where each solution proves its pattern, not just finds it; Three original geometry problems, each solved by two different methods and written up in full - plus 5 more on the course page.

### Web Development for Kids: Build Real Websites

`/courses/kids-ai-web-development-course` · 8-10 months (32-40 weeks) · Complete beginner, ages 9 to 12

  - PHASE 1: HTML World (Months 1-2, Weeks 1-8)
    The structure of every website, hand-typed: text, images, links, forms, tables and multimedia, each week ending with a page to show the family.
    - Month 1: First Pages
      - Welcome to Web Development
      - HTML Elements Zoo - Text, Images & Links
    - Month 2: HTML Powers
      - Fun with Forms & Tables
      - Multimedia Magic - Audio, Video & Canvas
  - PHASE 2: CSS Magic (Months 3-4, Weeks 9-16)
    The art layer: colors, fonts, the box model, then the two great layout tools, flexbox and grid, used to make pages genuinely beautiful.
    - Month 3: Style Arrives
      - CSS Basics - Making Websites Beautiful
      - CSS Box Model & Spacing Magic
    - Month 4: Layout Superpowers
      - Flexbox - The Flexible Layout System
      - CSS Grid - The Ultimate Layout Tool
  - PHASE 3: JavaScript Sparks (Months 5-6, Weeks 17-24)
    Pages that fit every screen, then the big step: first real programming, decisions, loops and little games, in the language of the web.
    - Month 5: Every Screen, First Code
      - Responsive Design - Mobile First!
      - JavaScript Basics - Making Websites Interactive
    - Month 6: Logic, Loops and Little Games
      - JavaScript Logic & Decisions
      - Loops & Arrays - Handling Multiple Items
  - PHASE 4: Real Sites (Months 7-8, Weeks 25-32)
    Functions and DOM magic, proper publishing, one honest look at how professionals use AI, and the capstone site presented at demo day.
    - Month 7: DOM Magic
      - Functions - Reusable Code Blocks
      - DOM Manipulation - Changing Websites with JavaScript
    - Month 8: Publish, Look Ahead, and the Finale
      - Publish and Shine
      - Capstone and the Final Exam

**Projects students build:** Build a digital pet profile page; Make a birthday invitation webpage; Digital photo album with captions; My favorite YouTube videos collection; Interactive storybook with multiple pages; School project presentation website; Friend information collector form; Class schedule table; Restaurant menu with order form; Personal video channel page; Music playlist website; Digital art gallery with canvas; Multimedia learning resource page; Rainbow text website; Colorful mood board page - plus 40 more on the course page.

### Western Canada Grade 12 Math: Pre-calculus 12 and Math 30-1

`/courses/western-canada-grade-12-math-pre-calculus-12-math-30-1-course` · 6 months (24 weeks) per plan, joinable any month and paced to your school course · Students in Grade 12 (roughly ages 16 to 18) taking Pre-calculus 12 in British Columbia or Math 30-1 in Alberta

  - PHASE 1: Functions, Transformations and Polynomial, Radical and Rational Functions (Months 1-2, Weeks 1-8)
    The function toolkit every Grade 12 topic depends on, then the polynomial, radical and rational families.
    - Month 1: Functions and Transformations
      - Weeks 1-2: Starting Point and the Function Toolkit
      - Weeks 3-4: Transformations and Inverses
    - Month 2: Polynomial, Radical and Rational Functions
      - Weeks 5-6: Polynomial Functions
      - Weeks 7-8: Radical and Rational Functions
  - PHASE 2: Exponential and Logarithmic Functions, and Trigonometry (Months 3-4, Weeks 9-16)
    Growth, decay and logarithms, then trigonometry in radians with identities and equations.
    - Month 3: Exponential and Logarithmic Functions
      - Weeks 9-10: Exponential Functions
      - Weeks 11-12: Logarithms
    - Month 4: Trigonometry in Radians, Identities and Equations
      - Weeks 13-14: Radians, the Unit Circle and Trigonometric Graphs
      - Weeks 15-16: Identities and Trigonometric Equations
  - PHASE 3: Permutations and Combinations, Combining Functions and Exam Review (Months 5-6, Weeks 17-24)
    Careful counting, combining functions, then exam review for school finals and, for Alberta students, the Math 30-1 diploma exam.
    - Month 5: Permutations, Combinations and Combining Functions
      - Weeks 17-18: Permutations, Combinations and the Binomial Theorem
      - Weeks 19-20: Combining Functions
    - Month 6: Exam Review Technique
      - Weeks 21-22: Mixed Review and Written Solutions
      - Weeks 23-24: Timed Practice for School Finals and the Alberta Diploma Exam

**Projects students build:** A one-page function toolkit summary, with a sketch of each parent function and its key points; A transformation set: ten graphs transformed by hand from mapping rules, then checked with graphing technology; A polynomial sketch set with end behaviour, zeros and intercepts explained for each graph; A radical and rational function set with every restriction, asymptote and hole labelled; An applications pack: three real growth or decay situations modelled and solved in full; A logarithm laws file: ten equations solved in full, with each law named at the step where it is used; A sinusoidal model of a real periodic situation, with the equation built from the data and explained; An identity proof file: ten identities proved in full, with the strategy for each written first; A counting pack: twelve problems sorted by method, each solved with the reason for the method written first; A combining functions set with graphs, equations and domains explained for each; A personal review pack: unit summaries and a mistakes list with a corrected example for each mistake; Two reviewed timed papers and a written exam-week plan.

---

**End of knowledge base. When in doubt, route to Shivam Sir at +91 9123366161.**
