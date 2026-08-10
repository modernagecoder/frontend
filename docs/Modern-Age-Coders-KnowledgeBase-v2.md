# Modern Age Coders: AI Agent, WhatsApp Agent and Support Knowledge Base

**Version 2.0 · Last updated: 4 August 2026, pricing amended 10 August 2026 (one-to-one ₹4,999 for coding and maths, one class a week in India) · Supersedes the April 2026 edition**

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

2. **Pricing.** Quote the current three-tier India structure: **₹1,499 / ₹2,999 / ₹4,999 per month**, the same for coding and maths. India one-to-one runs **one class a week (4 a month)** since 10 August 2026; Group and Mini Batch run two a week. Mini Batch is **India only**. International students see **$100 group and $150 one-to-one** only. See §3, and read §3.8 before you quote anything.

3. **Demo class requests.** Confirm it is **free**, that it is a **full live hour with a real mentor** (30 to 45 minutes for the shorter assessment format), that **no card details are ever requested**, and collect: student's name, age or class, parent's WhatsApp number with country code, preferred subject (coding or maths), preferred language (English or Hindi).

4. **Refund or cancellation queries.** Quote the policy verbatim from §13. Do not improvise.

5. **Tone.** Warm, helpful, parent-friendly. Use "Sir" and "Ma'am" with Indian customers. Never overpromise placement, salary or guaranteed outcomes. Never insult a competitor.

6. **Hard escalations to Shivam Sir (+91 9123366161):** custom corporate quotes · international pricing in non-USD currencies · bulk school partnerships · refund disputes · anything you cannot find in this document.

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

> **The rule for deciding whether a figure is retired.** A number counts as retired **only when it is not a current price anywhere in the pricing config**. Numbers can come back. On 3 August 2026 the owner brought **₹9,999** back, so ₹9,999 is now a **live price in two places** and must not be treated as retired:
>
> - **₹9,999 / month** is the one-to-one rate for the two premium Codex + Claude Code AI-agents courses (§4.7)
> - **₹9,999 one time** is the India holiday camp fee (§3.4)
>
> These two are easy to confuse because they are the same digits. One is **monthly**, one is a **single payment**. Always say which.

### 0.2 FACTS THAT NEED OWNER CONFIRMATION (flag, do not guess)

These are places where the live website currently contradicts itself. Until the owner rules, use the **safe answer** column, which is always the one that under-promises rather than over-promises.

| Topic | The contradiction on the live site | Safe answer to give |
|---|---|---|
| **Group batch size** | `/guarantee` and `/pricing` cards say **"capped at 10 students"**. `scripts/brand-facts.json` says **5 to 8**. `/about` says **"maximum 5-6 students"**. The comparison table on `/pricing` and `/contact` says **"Max 6-8 Students"**. Four different numbers. | Say **"group classes are capped at 10 students, and in practice batches usually run smaller."** This is the published promise on `/guarantee`, and it is the only one of the four that cannot become a broken promise. Never promise "maximum 5" or "maximum 6". |
| **Teen age band** | Nav and course pages say **13-18**. The `/pricing` and `/contact` FAQs say **13-17**. | Use **13 to 18**. |
| **Overall age range** | Brand facts, `/pricing` and `/contact` say **6 to 67**. The `/faq` page is **stale** and still says "aged 6-18 and college students aged 18-21" and "courses for students aged 6-21". | Use **6 to 67**. The `/faq` page needs updating; do not quote it. |
| **Team size** | The April document claimed "50+ instructors and staff". This number is **not** in `brand-facts.json` and is not evidenced anywhere in the codebase. | Do not quote a team size. Say "a team of professional engineers and educators". |
| **"500+ families from Delhi's top schools"** | Appears on 14 DPS pages, flagged in `brand-facts.json` as unevidenced. | Do not repeat this claim in chat. |
| **Physical office** | `/contact` publishes a Kolkata address; the April document said "no physical campus to visit". | Both are true if phrased correctly: see §2 and §14 Q38. All teaching is online; the Kolkata address is the registered office, not a campus students attend. |
| **Stale comment in the pricing config** | The comment above the `agents` block in `pricing/pricing.config.jsonc` still reads "Currently priced the SAME as everything else", but the value beneath it is now ₹9,999. The comment was not updated when the price was. | Trust the **value**, not the comment. AI-agents one-to-one is **₹9,999**. Worth a one-line fix in the repo. |

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
- Small batches: group capped at 10, mini batch just 3 to 4, and true one-to-one
- Project-based: students build real things from the first week
- Maths and code taught together, so logic skills compound across both
- Flexible timing: weekday evening, weekend and international time-zone slots
- A real portfolio: students graduate with projects, not just a certificate
- Regular parent updates: progress reports and parent-mentor sync calls
- Zero-risk start: free demo, monthly billing, no registration fee, cancel anytime

> **Positioning rule (important).** Lead with depth, mentorship and interactive live teaching. Price is the **closing proof**, not the opening pitch. We are not the cheapest option and we do not want to be sold as one.

---

## 2. CONTACT INFORMATION

| Channel | Detail |
|---|---|
| **Primary phone / WhatsApp** | **+91 9123366161** |
| Contact person (batch timings and enrolment) | **Shivam Sir** (Founder / Director) |
| Email | contact@modernagecoders.com |
| Registered office | Modern Age Coders Education, 1B, JK Ambika Tower, Kolkata, West Bengal 700002, India |
| Phone hours | Monday to Saturday, 9:00 AM to 6:00 PM IST. Sunday closed. |
| Callback request | Callback widget on every page. Takes a phone number, **callback within 3 hours**. |
| Contact-form response time | Within 48 hours on working days |
| Demo booking | https://learn.modernagecoders.com/book-demo or via WhatsApp |
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

Prices come from one file, `pricing/pricing.config.jsonc`, last changed **1 August 2026**. The model is deliberately simple: **rupees inside India, one flat USD price list for every country outside India**. Detection is automatic. There is no country-by-country or purchasing-power pricing any more; that system was built and then removed by the owner on 1 August 2026.

### 3.1 India, coding (and every course except maths one-to-one)

| Plan | Price | Batch size | Best for |
|---|---|---|---|
| **Group Classes** | **₹1,499 / month** | Capped at 10 students | Beginners, group energy, budget-conscious families |
| **Mini Batch** *(Most Popular)* | **₹2,999 / month** | **Just 3 to 4 students** | Near one-to-one attention at an affordable price |
| **Personalised 1-on-1** | **₹4,999 / month** | 1 student, 1 mentor · 1 class a week (4 a month) | Custom curriculum, fast learners, exam prep, advanced learners |

> **One exception to the ₹4,999 one-to-one rate.** The premium AI-agents courses (Codex + Claude Code, and AI Agents with Copilot Studio) are **₹9,999** one-to-one (§4.7), and they run two private classes a week. Group and Mini Batch are ₹1,499 and ₹2,999 for every course without exception.

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

Applies to coding and maths alike. Also available in EUR, GBP, CAD, AUD, SGD and AED at the equivalent rate; for those, route to Shivam Sir on +91 9123366161 for payment details.

Per-class maths, useful when a parent asks "is that expensive?":
- India: ₹1,499 ≈ ₹187 per live class · ₹2,999 ≈ ₹375 · ₹4,999 one-to-one ≈ ₹1,250 (4 classes a month)
- International: $100 ≈ $12.50 per live class · $150 ≈ $18.75

(Group and Mini Batch figures assume 8 live classes a month; the India one-to-one plan runs 4 a month, which is what makes its per-class figure ₹1,250.)

### 3.4 Holiday camps (one payment, not monthly)

| Region | Price |
|---|---|
| India | **₹9,999 one time** |
| International | **$200 one time** |

Every camp seat is **8 personalized one-to-one classes** with a dedicated mentor - there are no group camp batches. Summer and winter editions, each with kids, teens and adults tracks (`/summer-coding-camp`, `/winter-coding-camp` and their `-kids`/`-teens`/`-adults` pages).

> Always say **"one time"** with the camp fee. ₹9,999 is also the monthly one-to-one rate for the two AI-agents courses, so an unqualified "₹9,999" is ambiguous.

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

- **Live one-hour classes: two a week (8 a month) on Group and Mini Batch, one a week (4 a month) on India one-to-one**
- **Recorded session access** for revision and missed classes
- **Doubt resolution support**
- **Course completion certificate**
- **Project-based learning**, real builds rather than theory
- **Free demo before you pay**, no card required
- **Monthly billing, cancel anytime**, no registration fee, no lock-in

**Mini Batch adds:** near one-to-one teacher attention, live doubt-clearing every class, targeted topic mastery.

**Personalised 1-on-1 adds:** 100% customised curriculum (go at your own pace or cover twice the content), flexible scheduling you pick, monthly parent-mentor sync call, priority doubt support, lifetime recording access, portfolio building and career guidance. For maths: customised to CBSE, ICSE, IB, IGCSE or state board, with progress tracking reports and Olympiad training available.

> **Careful with the word "lifetime".** "Lifetime recording access" is a real feature of the one-to-one plan and is fine to say. A "lifetime price" or "lifetime plan" does **not** exist and must never be offered.

### 3.8 What NOT to say about pricing

- Quote **only the fee for where the student lives**. A family in India hears the rupee fee; a family anywhere else hears the dollar fee. Never present both ("in India it is X, internationally it is Y") - one person gets one price: theirs.
- Answer **only the pricing question asked**. Do not volunteer other plans, other regions, or extra pricing commentary. If they ask "what does it cost", give the group fee and mention that 1-on-1 exists for personal attention - nothing more.
- Do **not** quote any price below **₹1,499**. We have no plan cheaper than that.
- Do **not** quote **₹2,499**, **₹7,500** or **₹8,500**. All are retired. (**₹4,999 is current again** — it is the one-to-one rate since 10 August 2026.) See §0.1.
- Do **not** quote **$40**, **$149.99** or **$374.99**. All retired.
- Do **not** quote **$100 as the one-to-one price**. $100 is the **group** price now; one-to-one is **$150**.
- Do **not** quote **₹7,500 or ₹8,500 for any one-to-one**. Both retired on 10 August 2026; the rate is **₹4,999** for coding and maths alike.
- Do **not** quote **₹7,500 for the two Codex + Claude Code courses**. Their one-to-one rate is **₹9,999**.
- Do **not** say **₹9,999** without saying whether you mean the AI-agents one-to-one **monthly** rate or the India camp **one-time** fee.
- Do **not** offer **Mini Batch** to an international customer. It is India only.
- Do **not** offer any **lifetime** plan.
- Do **not** promise a discount you cannot confirm. Say "let me check with Shivam Sir for any current offers".

### 3.9 Payment terms

- **Currency:** INR inside India, USD everywhere else. Other currencies on request.
- **Methods:** UPI, bank transfer, card. Payments only via secure links, never over chat.
- **Billing:** monthly and recurring. Cancel anytime, effective at the end of the current cycle.
- **Discounts:** quarterly and yearly prepay discounts exist, and sibling and group discounts may apply. Confirm with Shivam Sir before promising one.
- **Instalments:** available for many courses. Confirm with Shivam Sir.
- **Free trial:** one free demo class before enrolment. No commitment, no card upfront.
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

We organise coding by **audience**, not by language. **115 course pages** are live, each at `/courses/<slug>`. The complete list with URLs is **Appendix A**. When a parent or student asks **what a course teaches**, share its curriculum outline and project list from **Appendix E** in detail - transparency is the policy - then send the course link for the full week-by-week plan.

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

> **Two things to get right.** (1) **These courses carry the premium one-to-one rate** (as do the three AI Agents with Copilot Studio courses, which are taught 1-on-1 only). Group **₹1,499** and Mini Batch **₹2,999** are the same as everywhere else, but one-to-one is **₹9,999 / month**, not the standard ₹4,999. The owner restored this premium rate on 3 August 2026. Internationally they follow the standard $100 group and $150 one-to-one. (2) Students **need their own Claude and ChatGPT subscriptions** for these two courses. Say so before enrolling anyone, so it is never a surprise.

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

Summer and winter camps, each with kids, teens and adults variants: `/summer-coding-camp`, `/summer-coding-camp-kids`, `/summer-coding-camp-teens`, `/summer-coding-camp-adults`, and the same pattern for `/winter-coding-camp`. Priced as a **one-time payment: ₹9,999 in India, $200 international**. See §3.4, and always say "one time" so it is not mistaken for a monthly fee.

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

- Group and Mini Batch: **2 classes per week**, **1 hour each**, **8 classes a month** · India one-to-one: **1 class per week, 4 a month**
- Plus recordings, practice and project work outside class

### 6.3 Course length

- Beginner courses: **3 to 6 months**
- Advanced specialisations: **6 to 9 months**
- Custom programmes: flexible

### 6.4 Batch sizes

- **Group:** capped at 10 students
- **Mini Batch:** 3 to 4 students (India only)
- **1-on-1:** a single student with a dedicated mentor
- **Custom Group:** 3 to 10 students

(See §0.2 on the batch-size wording. Say "capped at 10", never "maximum 5" or "maximum 6".)

### 6.5 What students need

A computer (Windows, Mac or Chromebook) · reliable internet · webcam and mic recommended · notebook and pen, especially for maths.

### 6.6 Class timings: THE KEY ESCALATION

**Do NOT quote specific timings.** We run multiple batches across weekday evenings (typically 5 PM to 9 PM IST), weekend mornings and afternoons, and special slots for international time zones.

> **Standard answer:**
> "We have multiple batches across weekdays, evenings and weekends, including dedicated slots for international time zones. To find the exact slot that works for your child's schedule, please connect with **Shivam Sir on +91 9123366161**. He will match you to the best batch and check live availability."

---

## 7. ENROLMENT FLOW

1. **Discovery call or WhatsApp chat.** Understand age, current level, goals, board, preferred subject.
2. **Free demo class.** One free live class, no card needed, parent can sit in.
3. **Plan selection.** Group, Mini Batch or 1-on-1.
4. **Batch matching.** Shivam Sir picks the slot that fits.
5. **Payment.** First month's fee, monthly recurring, via secure link.
6. **Onboarding.** Student gets dashboard access, class link and recording archive.
7. **Classes begin.**
8. **Monthly review.** Progress report shared with the parent.

### 7.1 Information to collect on first contact

Student's full name · age and class or grade · school and board · parent's name · parent's WhatsApp number **with country code** · city, country and time zone · preferred subject (coding, maths or both) · preferred plan if known · specific goal (board exam, hobby, college prep, Olympiad, AI, web dev) · broad availability (weekdays or weekends, morning or evening) · preferred language (English or Hindi).

### 7.2 The free demo: what to promise and what not to

**Promise:** free · a full live class with a real mentor · **no card details ever requested** · parent welcome to sit in · roughly 30 to 45 minutes for the assessment format, up to a full hour for the trial-class format · doubles as a placement assessment, so the mentor recommends a starting point honestly · one free demo per student.

**Do not promise:** a specific instructor by name · a specific date or time without checking with Shivam Sir · that the demo guarantees a place in a particular batch.

> A useful line: *"Prefer to judge us before booking? You can watch recordings of real, unedited classes first."*

### 7.3 The zero-risk promise (`/guarantee`)

Six promises we publish and must honour:

1. A free demo before any payment
2. Monthly billing, cancel anytime, no 6 or 12 month packs, no cancellation fee
3. No registration or hidden fees. The price on the pricing page is the whole price.
4. Small live batches: group capped at 10, mini batch 3 to 4, full one-to-one available
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

**Blog.** 116 published posts at `/blog`, plus five topic hubs: `/blog/topic/python`, `/blog/topic/java`, `/blog/topic/kids-coding`, `/blog/topic/maths`, `/blog/topic/ai`. Full list in Appendix C.

---

## 11. SCHOOLS AND BUSINESS

### 11.1 Schools

We partner with schools for in-school coding programmes and after-school enrichment. **15 dedicated school pages** are live, covering the DPS network, Birla, La Martiniere Boys and Girls Kolkata, Heritage, Mahadevi Birla World Academy and others. Main page: `/schools`.

In-school bootcamp pricing: **₹1,999 group, ₹2,999 one-to-one, per month, India only.** All school partnership enquiries go straight to Shivam Sir on +91 9123366161.

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
- **143 international and country pages**, including the United States, United Kingdom, Canada, Australia, New Zealand, Ireland, Germany, Switzerland, Sweden, Singapore, Hong Kong, UAE, Qatar and Saudi Arabia

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

**Processing.** Once approved, the refund is initiated to the original payment method. Credit appears within **7 to 10 business days**, depending on the card issuer.

**How to request.** Email `contact@modernagecoders.com` with order details and reason.

### 13.2 Cancellation Policy (last updated February 2026)

- **Course cancellation.** You may cancel enrolment at any time. Cancellations made after a live cohort starts, or after digital materials are accessed, are subject to the Refund Policy.
- **Subscription cancellation.** Cancel anytime through the account dashboard. Cancellation takes effect at the end of the current billing cycle and you will not be charged again.
- **Cancellation by us.** We may cancel or reschedule courses due to insufficient enrolments or unforeseen circumstances. Affected participants get a full refund or a transfer to another schedule.
- **Impact.** After cancellation you retain access to the platform and materials until the end of the current billing period. Afterwards, premium access is suspended.
- **How to cancel.** Account settings, or email `contact@modernagecoders.com`.

### 13.3 Terms of Service (last updated January 2026)

Key points an agent may need: all fees are listed in INR unless otherwise stated · all course content is our intellectual property and may not be reproduced or redistributed · services are provided "as is" · questions to `contact@modernagecoders.com`.

### 13.4 Standard answer to "What if I'm not satisfied?"

> "We have a 7-day money-back guarantee. If within the first week you have consumed less than 20% of the course and you are not satisfied, we issue a full refund. Just email contact@modernagecoders.com with your order details. And remember, you get a free demo class before you pay anything at all."

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
115 courses across coding (Python, JavaScript, Java, C, C++, HTML/CSS, React, block-based, AI/ML, web dev, app dev, DSA, cybersecurity, competitive programming) and mathematics (early years through college, plus Olympiad, exam-board and applied maths). Full list at https://learn.modernagecoders.com/courses

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
Group classes are capped at 10 students. Mini Batch is just 3 to 4. One-to-one is a single student with a dedicated mentor.

**Q14. How do I enrol my child?**
Book a free demo at `/book-demo`, or call or WhatsApp Shivam Sir on +91 9123366161. He will have a quick chat, recommend the right batch and book the demo.

**Q15. What is the fee structure?**
India: Group ₹1,499/month · Mini Batch ₹2,999/month · Personalised 1-on-1 ₹4,999/month (coding and maths alike; one class a week, 4 a month). International: $100 group, $150 one-to-one. Same prices for coding and maths on every tier.

**Q16. Do you offer free trial classes?**
Yes, one free demo class per student. No card, no commitment. Parents welcome to sit in.

**Q17. Can I pay in instalments?**
Yes, flexible options including instalments are available for many courses. Quarterly and yearly prepay discounts also exist. Confirm details with Shivam Sir on +91 9123366161.

**Q18. What if I miss a class?** Every class is recorded, including coding demos and explanations. Catch up at your own pace. For one-to-one we can often reschedule with advance notice.

**Q19. Do you provide technical support?** Yes, for class access, platform setup and the tools used in lessons.

**Q20. Do you offer certificates?** Yes, on course completion, listing the skills learned.

**Q21. Do you help with internships or real projects?** Yes, advanced students get opportunities on real client projects.

**Q22. Can parents track progress?** Yes. Periodic progress reports, teacher feedback in review sessions, monthly tests, and a monthly parent-mentor sync call on the 1-on-1 plan.

**Q23. Do you conduct assessments?** Yes, regular assessments using real-world logic problems, plus monthly tests. Top performers are promoted to higher batches.

**Q24. What if my child struggles with a topic?** We add doubt-clearing sessions and one-to-one support. No student gets left behind.

**Q25. Do you teach AI?**
Yes, extensively: AI Literacy for Kids (8 to 14), AI/ML for teens and college, generative AI, deep learning, computer vision, and our flagship Codex + Claude Code AI agents courses. We also publish an AI Tools Age Guide covering the real minimum age of 124 AI tools.

**Q26. Can college students join?** Yes. College programmes focus on practical coding, advanced maths and real project exposure for internships and jobs.

**Q27. Do you offer career guidance?** Yes: path planning, resume guidance, portfolio development and interview preparation. Job placement assistance is part of the Custom 1-on-1 package.

**Q28. Do you offer one-to-one mentoring?** Yes. The Personalised 1-on-1 plan (₹4,999/month for coding and maths, one class a week) gives a dedicated expert mentor, a fully customised curriculum and flexible scheduling.

**Q29. Can students take part in hackathons?** Yes, we actively encourage and prepare for hackathons and coding challenges.

**Q30. Do you teach web and app development?** Yes, full web and app development with HTML, CSS, JavaScript, React, Python and more. Students build real working products.

**Q31. How do I contact you?**
Call or WhatsApp **Shivam Sir on +91 9123366161** (Mon to Sat, 9 AM to 6 PM IST) or email contact@modernagecoders.com. You can also use the callback button on any page and we call back within 3 hours.

**Q32. Are there girls-only batches?** Yes: Princess Coders (beginner/intermediate), Queen Coders (advanced) and Alpha Girls (elite), plus a Coding Comeback programme for women returning to tech.

**Q33. Is there an age limit?** Our youngest learners are 6, our oldest are 67. There is no upper limit in practice; working professionals and retired learners are part of our community.

**Q34. Do you teach maths along with coding?** Yes, and they reinforce each other. Logic from maths makes better coders; coding makes maths practical. Many students take both.

**Q35. What boards do you cover?** CBSE, ICSE, IGCSE, IB, A-Level and GCSE, US Common Core and AP, Singapore MOE, and most major Indian state boards.

**Q36. Do you offer corporate training?** Yes, for companies upskilling tech teams. Custom curricula for web dev, AI/ML, data science, cloud, DevOps, cybersecurity and more. Quote-based; contact Shivam Sir for a consultation.

**Q37. Can I get a refund?** Yes, a 7-day money-back guarantee provided less than 20% of the course has been consumed. Email contact@modernagecoders.com. See §13.

**Q38. Where is your office?**
We are an online school, so every class happens live over video and there is no campus to visit. Our registered office is Modern Age Coders Education, 1B, JK Ambika Tower, Kolkata, West Bengal 700002.

**Q39. Do you build software for businesses too?**
Yes. Custom web and mobile apps, AI agents, automation tools, e-commerce platforms and API development. See `/for-business`. It is also why our advanced students get real client project exposure.

**Q40. Do I need a paid AI subscription for the AI agents courses?**
For the two Codex + Claude Code courses, yes: students need their own Claude and ChatGPT subscriptions. Every other course needs nothing beyond a computer and internet.

---

## 15. STANDARD RESPONSE PATTERNS

### 15.1 Greeting

> "Hi, welcome to Modern Age Coders. I'm here to help with our live coding and maths classes. Could you tell me a bit about the learner: their age (or yours, if you're the student), and whether you're interested in coding, maths or both? I'll point you to the right starting place."

### 15.2 Pricing question

> "Sure. We have three plans, and the prices are the same for coding and maths:
>
> **Group Classes, ₹1,499/month**, capped at 10 students, 2 live classes a week
> **Mini Batch, ₹2,999/month** (most popular), just 3 to 4 students, near one-to-one attention
> **Personalised 1-on-1, ₹4,999/month**, one private class a week with your own dedicated mentor and a fully customised curriculum
>
> Group and Mini Batch include two 1-hour live classes a week, one-to-one includes one; every plan comes with recordings, doubt support and a certificate. Maths costs the same as coding.
>
> The first class is **free**, with no card needed. Would you like to book a demo?"

*(For international customers: "Group is $100/month and one-to-one is $150/month. Mini Batch is only available in India.")*

### 15.3 Batch timings question

> "We have multiple batches across weekday evenings and weekend mornings and afternoons, plus slots for international time zones. To match you to the best one around your child's school routine, please connect with **Shivam Sir on +91 9123366161** by call or WhatsApp. He allocates the batches personally."

### 15.4 "Is it worth it?"

> "Honestly, the only way to know is the free demo. No card, no commitment, one real live class with an actual mentor. You and your child will know within the hour whether it clicks, and the mentor will give you an honest read on where they should start. Shall I book one? I just need the student's name, age and your WhatsApp number."

### 15.5 "Can I get a discount?"

> "Let me check with Shivam Sir on current offers. Quarterly and yearly prepay discounts exist, and sibling and group discounts sometimes apply. Please WhatsApp him on **+91 9123366161** and he'll share what's available right now."

### 15.6 Closing / call to action

> "Shall I book your free demo? I just need:
> 1. Student's name and age (or class)
> 2. Subject: coding or maths, or both
> 3. Your WhatsApp number with country code
>
> Once you share these, Shivam Sir will reach out to confirm the slot."

### 15.7 Out of scope or unknown

> "Great question, let me get you the right answer rather than guess. Please WhatsApp **Shivam Sir on +91 9123366161** and he'll take care of this personally within a few hours."

### 15.8 Anxious-about-cost parent

> "I understand. Two things that might help: the demo class is completely free and needs no card, so you can see the teaching before spending anything. And there is no lock-in, no registration fee and no long-term pack. Group classes start at ₹1,499 a month and you can stop any month. Would you like to try the free class first?"

---

## 16. DO's AND DON'Ts

### DO

- Quote prices accurately: **₹1,499 / ₹2,999 / ₹4,999** (coding and maths alike), AI-agents one-to-one **₹9,999**, international **$100 / $150**
- Always offer the **free demo class** as the next step
- Refer to **Shivam Sir on +91 9123366161** for batch timings, custom quotes and anything ambiguous
- Use "Sir" and "Ma'am" politely with Indian customers
- Keep replies short and warm. Parents are busy.
- Lead with **teaching quality and small batches**, then use price as closing proof
- Mention classes are **LIVE**, never pre-recorded
- Mention **recordings** are available for missed classes
- Ask qualifying questions (age, level, goal) before recommending a plan
- Say "rated 4.9 across 547 Google reviews" when citing our rating

### DO NOT

- Quote any price below **₹1,499**
- Quote **₹2,499**, **₹7,500**, **₹8,500**, **$40**, **$149.99** or **$374.99**. All retired. (₹4,999 is the CURRENT one-to-one rate and fine to quote.)
- Quote **$100 as the one-to-one price**. That is now the group price.
- Quote **₹7,500 or ₹8,500 for any one-to-one**. The rate is **₹4,999** since 10 August 2026.
- Quote **₹7,500 for the Codex + Claude Code courses**. Their one-to-one rate is **₹9,999**.
- Say **₹9,999** without saying whether it is the AI-agents **monthly** rate or the camp **one-time** fee
- Offer **Mini Batch** to an international customer
- Offer any **lifetime** plan or lifetime price
- Say **"6 to 65"**, **"500+ students"**, **"247 reviews"** or **"15+ countries"**. All retired.
- Offer `/courses/kids-ai-mastery-course`. Retired URL, and the course is now **13+**.
- Promise a **maximum batch size below 10** for group classes (see §0.2)
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
> "Wonderful, we have students in 25+ countries. Outside India we offer Group at $100/month and Personalised 1-on-1 at $150/month, and we can also bill in EUR, GBP, CAD, AUD, SGD or AED. For your time zone Shivam Sir will pick a batch that fits. Please WhatsApp him on +91 9123366161."

**17.4 "Can I switch plans later?"**
> "Yes, you can upgrade or downgrade anytime. Just message us a few days before the next billing cycle and we'll adjust. Shivam Sir will make the transition clean."

**17.5 "What if my child doesn't like the demo?"**
> "No pressure at all. The demo is free with zero commitment. If your child doesn't enjoy it you walk away with no charge. We only enrol students who actually want to be there."

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
- If a parent is anxious about cost, lead with the **free demo** and the no-lock-in promise, then the Group plan.
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
PHONE HOURS .......... Mon-Sat, 9 AM - 6 PM IST (Sun closed)
EMAIL ................ contact@modernagecoders.com
WEBSITE .............. learn.modernagecoders.com
DASHBOARD ............ dashboard.modernagecoders.com
REGISTERED OFFICE .... 1B, JK Ambika Tower, Kolkata, West Bengal 700002
LANGUAGES ............ English, Hindi
AGES ................. 6 to 67
STUDENTS ............. 10,000+
RATING ............... 4.9 across 547 Google reviews
COUNTRIES ............ 25+
DELIVERY ............. 100% online, LIVE classes, recordings included
CLASSES/WEEK ......... 2  (1 hour each, 8 a month)
SUBJECTS ............. Coding + Mathematics
COURSES LIVE ......... 115
BLOG POSTS ........... 116

PRICING (India, per month):
  Group Classes        Rs 1,499    capped at 10 students
  Mini Batch           Rs 2,999    3-4 students     MOST POPULAR
  Personalised 1-on-1  Rs 4,999    1 student + dedicated mentor · 1 class/wk
  Maths 1-on-1         Rs 4,999    <- same as coding
  AI-agents 1-on-1     Rs 9,999    <- Codex + Claude Code courses only

PRICING (International, per month):
  Group                $100
  1-on-1               $150        (all subjects, incl. AI agents)
  Mini Batch           NOT SOLD outside India

CAMPS ................ Rs 9,999 ONE-TIME (India) / $200 ONE-TIME (intl)
SCHOOL BOOTCAMP ...... Rs 1,499 group / Rs 2,999 1-on-1 (India only)
CUSTOM / CORPORATE ... quote-based, route to Shivam Sir

Rs 9,999 IS AMBIGUOUS. Always qualify it:
  Rs 9,999 / month   = AI-agents 1-on-1
  Rs 9,999 one time  = India holiday camp

RETIRED, NEVER QUOTE:
  Rs 2,499 · Rs 7,500 · Rs 8,500 · $40 · $149.99 · $374.99
  any "lifetime" plan · "6 to 65" · "500+ students"
  "247 reviews" · "15+ countries" · /courses/kids-ai-mastery-course
  (Rs 9,999 is NOT retired. It came back on 3 Aug 2026.)

DEMO ................. free, live, real mentor, no card, 30-60 min
CALLBACK ............. within 3 hours
FORM RESPONSE ........ within 48 hours
REFUND ............... 7-day money-back, if <20% content consumed
CANCELLATION ......... anytime, effective end of billing cycle
CERTIFICATE .......... yes, on completion
PROGRESS REPORTS ..... periodic; 1-on-1 adds monthly parent call

GIRLS-ONLY ........... Princess Coders / Queen Coders / Alpha Girls
SCHOOLS .............. yes, 15 pages (DPS, Birla, La Martiniere, etc.)
B2B .................. /for-business (needs EXACTLY 10-digit phone)
HACKATHONS ........... encouraged and supported
INTERNSHIPS .......... available to advanced students

ESCALATE TO SHIVAM SIR FOR:
  - Batch timings / slot availability      - Corporate & school quotes
  - Discounts                              - Custom curriculum
  - Non-USD international pricing          - Refund disputes
  - ANYTHING not covered in this document
```

---

## 20. CHANGELOG

- **10 August 2026 (owner price change).** India one-to-one moved to **₹4,999 per month** for coding AND maths (the ₹8,500 maths exception ended), on a new schedule of **one class a week, four a month — India only**. International one-to-one unchanged at $150 with two classes a week; Group, Mini Batch, camps, school bootcamps and the ₹9,999 AI-agents premium unchanged. ₹4,999 is a current price again and no longer a retired figure; **₹7,500 and ₹8,500 are retired instead**.
- **4 August 2026 (v2.0, this edition).** Rebuilt from the live codebase. Flat worldwide pricing adopted 1 August 2026: India ₹1,499 / ₹2,999 / ₹7,500 (maths one-to-one ₹8,500), international $100 group and $150 one-to-one. Per-country and purchasing-power pricing removed. Brand facts corrected to 10,000+ students, 547 Google reviews, 25+ countries, ages 6 to 67.
- **3 August 2026 (owner price change, captured in this edition).** Premium one-to-one restored at **₹9,999** for the two Codex + Claude Code AI-agents courses. Holiday camp fee raised to **₹9,999 one time** in India and **$200** internationally. School bootcamp group rate lowered to **₹1,499**. Because ₹9,999 is a current price again, it is no longer a retired figure. Course catalogue grew to 115 and the blog to 116 posts. Added camps and school-bootcamp price rows, the For Business cluster, exam-board maths (A-Level, GCSE, IGCSE, IB, SAT, AP, JEE, PSLE, 11-plus, CBSE Class 10), certification prep, the Codex + Claude Code courses, the tools and games catalogue, the zero-risk guarantee, the registered office address and office hours. Corrected the LinkedIn and Facebook URLs. Kids AI Mastery retired to a 13+ teens course.
- **July 2026.** 131 Indian city pages differentiated. Course catalogue and blog expanded heavily. AI Tools Age Guide published. Admin panel rebuilt.
- **April 2026.** Three-tier pricing rolled out (was two-tier). Mini Batch added as the middle tier, India only.
- **February 2026.** Refund and cancellation policies last reviewed.
- **January 2026.** Terms of Service last reviewed.
- **2020.** Modern Age Coders founded by Shivam Khemka.

## APPENDIX A: EVERY COURSE PAGE (115 live courses)

All course pages live at `https://learn.modernagecoders.com/courses/<slug>`. Every URL below was checked against the sitemap and the routing table on 4 August 2026.


### A.1 Coding, AI and technology courses (87)

| Course | URL path | Who it is for |
|---|---|---|
| Advanced Git & GitHub Masterclass for Professionals | `/courses/git-github-advanced-version-control-masterclass-for-professionals` | College |
| AI & Machine Learning for Teens: Zero to AI Expert | `/courses/ai-ml-masterclass-teens` | Teens |
| AI & Machine Learning Masterclass: Zero to AI Expert | `/courses/ai-ml-masterclass-complete-college` | College |
| AI Literacy for Kids (Ages 8 to 14): Understand AI, Do Not Just Use It | `/courses/ai-literacy-for-kids-course` | Kids |
| AI Tools for Teens (13+): Prompting, Creative Projects & Safe AI Use | `/courses/teens-ai-tools-mastery-course` | Teens |
| AI Tools Mastery: ChatGPT to Production AI Automation | `/courses/ai-tools-mastery-complete-college` | College |
| Algorithmic Trading & Stock Market Automation Masterclass | `/courses/algorithmic-trading-automation-masterclass` | College |
| Algorithmic Trading Masterclass: Zero to Automated Systems | `/courses/algorithmic-trading-masterclass-complete` | College |
| Alpha Girls: Elite Tech Mastery & Leadership for Women | `/courses/alpha-girls-elite-tech-mastery` | Girls only |
| AP Computer Science A: Java Programming and Full Exam Prep | `/courses/ap-computer-science-a-java-exam-prep-course` | Teens |
| AP Computer Science Principles: Create Task and Exam Prep | `/courses/ap-computer-science-principles-exam-prep-course` | Teens |
| App Development Course: Build Mobile & Web Apps From Zero | `/courses/complete-app-development-masterclass-college` | College |
| Artificial Intelligence Course: Classical AI to AGI | `/courses/artificial-intelligence-complete-masterclass-college` | College |
| Backend Development for Teens: APIs, Databases & Cloud | `/courses/backend-coding-masterclass-for-teens` | Teens |
| Block-Based App Development: Build Apps With No Code | `/courses/block-coding-app-development-masterclass` | Kids |
| C Programming for Beginners: Pointers, Memory & Structs | `/courses/c-programming-course-for-college-beginners` | College |
| C++ Course for Teens Online: Games & Competitive Coding | `/courses/cpp-programming-masterclass-for-teens` | Teens |
| C++ Programming Masterclass: Zero to System Programmer | `/courses/cpp-programming-complete-masterclass-college` | College |
| Canva & AI Design Course: Zero to Professional Designer | `/courses/canva-ai-design-masterclass` | Kids |
| CBSE Computational Thinking & AI for Kids (Class 3-8) | `/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8` | Kids |
| CBSE Computational Thinking & AI for Teens (Class 9-12) | `/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843` | Teens |
| Codex & Claude Code for Teens: AI Coding Agents Course | `/courses/codex-and-claude-code-ai-coding-agents-course-for-teens` | Teens |
| Codex & Claude Code: AI Coding Agents for Professionals | `/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals` | College |
| Competitive Programming Course Online: Crack Codeforces | `/courses/competitive-programming-masterclass-college` | College |
| Competitive Programming for Teens: ZCO, INOI and USACO Track | `/courses/competitive-programming-for-teens-course` | Teens |
| Computer Science Class 11-12: CBSE Python & ICSE/ISC Java | `/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course` | Teens |
| Creative Coding & Animation: Content Creator Course | `/courses/creative-coding-animation-mastery` | Kids |
| Creative Media & Design for Teens: Photo, Video & Editing | `/courses/creative-media-design-masterclass-teens` | Teens |
| Cybersecurity for Teens: Online Safety & White-Hat Defense | `/courses/cybersecurity-course-for-teens-ethical-defensive` | Teens |
| Data Analysis Course: From Excel to Machine Learning | `/courses/data-analysis-mastery-course-college` | College |
| Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI) | `/courses/data-and-ai-analytics-for-non-programmers-course` | Professionals |
| Data Science Course: Zero to Job-Ready Data Scientist | `/courses/data-science-complete-masterclass-college` | College |
| Data Science for Teens: Python & Your First ML Models | `/courses/data-science-course-for-teens-python-data` | Teens |
| Data Structures & Algorithms Course: Interview-Ready DSA | `/courses/data-structures-algorithms-masterclass-college` | College |
| DSA & Problem Solving for Teens: Algorithms to Interviews | `/courses/problem-solving-dsa-masterclass-teens` | Teens |
| Ethical Hacking & Cybersecurity: Zero to Pentester | `/courses/ethical-hacking-masterclass-complete` | College |
| Flutter App Development Course: Zero to Pro Developer | `/courses/complete-flutter-app-development-masterclass-college` | College |
| Frontend Development Course for Teens: HTML, CSS, React | `/courses/frontend-development-masterclass-for-teens` | Teens |
| Full Stack Web Development for Teens: React & Node.js | `/courses/full-stack-web-development-teens-masterclass` | Teens |
| Full Stack Web Development: Frontend, Backend & DevOps | `/courses/full-stack-web-development-masterclass-college` | College |
| Game Development Course: Unity, Unreal & C++, Zero to Pro | `/courses/game-development-complete-masterclass-college` | College |
| Game Development for Kids: Scratch, Roblox & Minecraft | `/courses/game-development-masterclass-for-kids` | Kids |
| Game Development for Teens: Unity, Unreal & Real Games | `/courses/complete-game-development-masterclass-for-teens` | Teens |
| Generative AI Course: LLMs, RAG & AI Agents, Zero to Pro | `/courses/complete-generative-ai-masterclass-college` | College |
| Git & GitHub Course for College Students: Team-Ready Skills | `/courses/git-github-version-control-course-for-college-students` | College |
| Git & GitHub Course for Teens: Version Control from Zero | `/courses/git-github-version-control-course-for-teens` | Teens |
| Go (Golang) Programming: Concurrency, gRPC & Microservices | `/courses/complete-golang-programming-masterclass-college` | College |
| Hackathon for Adults: Free Event + 12-Week Pro Prep (18+) | `/courses/hackathon-prep-for-adults-professionals-coding-ai-innovation-course` | Professionals |
| Hackathon for Kids: Free Event + 12-Week Prep (Ages 8-12) | `/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course` | Kids |
| Hackathon for Teens: Free Event + 12-Week Prep (Ages 13-17) | `/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course` | Teens |
| HTML & CSS for Beginners: Build Real Responsive Websites | `/courses/html-css-course-for-beginners-build-real-websites` | Teens |
| IB DP Computer Science (New Guide, First Assessment 2027) | `/courses/ib-diploma-computer-science-course` | Teens |
| ICSE Computer Applications (Class 9-10): Java with BlueJ | `/courses/icse-computer-applications-java-bluej-course` | Teens |
| IGCSE Computer Science (0478): Full Syllabus and Exam Prep | `/courses/igcse-computer-science-0478-course` | Teens |
| Informatics Practices (IP) Class 11-12: CBSE Python & SQL | `/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course` | Teens |
| Java Programming for Teens: Zero to Professional Developer | `/courses/java-programming-masterclass-for-teens` | Teens |
| Java Programming: Core Java, Spring Boot & Microservices | `/courses/complete-java-programming-masterclass-college` | College |
| JavaScript for Teens: Interactive Websites & Browser Games | `/courses/javascript-course-for-teens-beginners-interactive-web` | Teens |
| Kids Coding Masterclass: Scratch, Games, Apps & AI Projects | `/courses/kids-coding-blocks-masterclass` | Kids |
| Kotlin Programming: Zero to Android & Backend Developer | `/courses/complete-kotlin-programming-masterclass-professional` | College |
| MERN Stack Course Online: Job-Ready Full-Stack Bootcamp | `/courses/mern-stack-development-masterclass-college` | College |
| Microsoft Office & Windows for Kids: Digital Skills Course | `/courses/microsoft-office-kids-mastery` | Kids |
| Minecraft Coding for Kids: From Blocks to Real Code | `/courses/minecraft-coding-for-kids-course` | Kids |
| Mobile App Development for Teens: Publish to App Stores | `/courses/complete-app-development-masterclass-for-teens` | Teens |
| MySQL Database Masterclass: SQL, Design & Administration | `/courses/mysql-database-complete-masterclass-college` | College |
| MySQL for Teens: SQL Queries, Database Design & Security | `/courses/mysql-mastery-for-teens` | Teens |
| Orange Data Mining Course for College Students: Machine Learning and Analytics | `/courses/orange-data-mining-machine-learning-course-for-college-students` | College |
| Orange Data Mining Course for Teens: Machine Learning Without Code | `/courses/orange-data-mining-visual-machine-learning-course-for-teens` | Teens |
| PCAP Certification Prep: Certified Associate in Python Programming | `/courses/pcap-python-certification-prep-course` | Professionals |
| Princess Coders: Complete Coding Course for Girls & Women | `/courses/princess-coders-complete-coding-masterclass` | Girls only |
| Problem-Solving & Computational Thinking Course for Kids | `/courses/problem-solving-and-computational-thinking-for-kids` | Kids |
| Python & AI Automation: Machine Learning, NLP & Scripting | `/courses/python-ai-automation-masterclass-college` | College |
| Python & AI for Kids: Coding, Games, Robotics & AI Projects | `/courses/python-ai-kids-masterclass` | Kids |
| Python Programming for Teens: Zero to Advanced in 2 Years | `/courses/python-complete-masterclass-teens` | Teens |
| Python Programming Masterclass: Zero to Advanced Pro | `/courses/python-programming-masterclass-zero-to-advanced-college` | College |
| Python Web Development with Django and Flask Course | `/courses/python-web-development-django-flask-course` | College |
| Queen Coders: 1-Year Advanced Tech Leadership for Women | `/courses/queen-coders-advanced-tech-leadership` | Girls only |
| React for Teens: Build Real Apps, Zero to Pro Developer | `/courses/react-for-teens-complete-masterclass` | Teens |
| React.js Masterclass: Zero to Senior Frontend Developer | `/courses/react-js-complete-masterclass-college` | College |
| Roblox Game Coding for Kids: Build Real Games in Luau | `/courses/roblox-game-coding-for-kids-lua-course` | Kids |
| Scratch Programming for Kids: 3-Month Course, 50+ Projects | `/courses/scratch-programming-complete-course` | Kids |
| Swift Programming Masterclass: Zero to iOS & macOS Pro | `/courses/complete-swift-programming-masterclass-college` | College |
| TypeScript Programming: Zero to Enterprise Developer | `/courses/complete-typescript-programming-masterclass-college` | College |
| Vibe Coding for College: Full Stack, AI & DSA (Ages 18+) | `/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course` | College |
| Vibe Coding for Kids: AI, Scratch & Game Dev (Ages 8-12) | `/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev` | Kids |
| Vibe Coding for Teens: Python, Web Dev & AI (Ages 13-17) | `/courses/vibe-coding-for-teens-python-web-ai-projects-course` | Teens |
| Web Development for Kids: Build Websites with HTML, CSS & AI | `/courses/kids-ai-web-development-course` | Kids |

### A.2 Mathematics courses (28)

| Course | URL path | Who it is for |
|---|---|---|
| 11 Plus Maths Prep: UK Grammar & Independent School Entry | `/courses/11-plus-maths-preparation-course-uk` | Middle school |
| A-Level Maths: Pure, Mechanics, Statistics (Edexcel/AQA) | `/courses/a-level-maths-course-pure-mechanics-statistics` | High school |
| Abacus & Mental Maths for Kids: From First Beads to Anzan | `/courses/abacus-mental-maths-course-for-kids` | Elementary |
| Algebra Foundations: Pre-Algebra & Algebra 1, Live Online | `/courses/algebra-foundations-masterclass` | Middle school |
| AP Calculus AB & BC Exam Prep, Live Online, Score 5 Goal | `/courses/ap-calculus-exam-prep` | High school |
| AP Precalculus: Units 1 to 3 and Full Exam Prep | `/courses/ap-precalculus-exam-prep-course` | High school |
| AP Statistics: Exam Prep with the Investigative Task | `/courses/ap-statistics-maths-exam-prep-course` | High school |
| Business & Finance Mathematics: Investment to Risk | `/courses/complete-business-finance-mathematics-mastery` | Professionals |
| CBSE Class 10 Maths Board Prep: Case Studies & Mocks | `/courses/cbse-class-10-maths-board-exam-prep-course` | High school |
| College Mathematics: Calculus to Real Analysis & Beyond | `/courses/college-mathematics-complete-masterclass` | College, Girls only |
| Complete Data & Analytics Mathematics Masterclass - Statistics to Machine Learning | `/courses/data-analytics-mathematics-masterclass` | Professionals |
| Early Math Foundations: Playful, Concrete Math (Ages 4-7) | `/courses/early-math-foundations` | Elementary |
| Elementary Mathematics for Grade 1-5: Numbers to Geometry | `/courses/elementary-mathematics-complete-masterclass` | Elementary, Girls only |
| GCSE Maths: Foundation & Higher (9-1), AQA, Edexcel, OCR | `/courses/gcse-mathematics-mastery` | High school |
| GRE & GMAT Quantitative Prep: Live Maths Coaching | `/courses/gre-gmat-quant-maths-prep-course` | Professionals |
| High School Mathematics: Algebra to Calculus (Grade 9-12) | `/courses/complete-high-school-mathematics-mastery` | Girls only, High school |
| IB Maths AA & AI: SL & HL, Live Online with IA Coaching | `/courses/ib-mathematics-aa-ai-masterclass` | High school |
| IGCSE Maths: Core, Extended & Additional Mathematics Online | `/courses/igcse-mathematics-mastery` | High school |
| JEE Foundation Maths Class 8-10: Proofs & Problem Solving | `/courses/jee-foundation-maths-course-class-8-10` | High school |
| Maths Olympiad & Competition Course: AMC, AIME to IMO | `/courses/olympiad-competition-mathematics-mastery` | Elementary, Girls only, High school, Middle school |
| Maths Through Coding: Learn Math in Python (Ages 10-15) | `/courses/maths-through-coding` | Middle school |
| Mental Maths for Kids: Number Sense, Not Tricks (Ages 5-10) | `/courses/mental-maths-mastery-kids` | Elementary |
| Middle School Mathematics Mastery: Pre-Algebra & Geometry | `/courses/comprehensive-middle-school-mathematics-mastery` | Girls only, Middle school |
| Olympiad Mathematics: IOQM, INMO and AMC Preparation | `/courses/olympiad-mathematics-premium-course` | Teens |
| PSLE Maths: Model Method, Problem Sums & MOE Syllabus | `/courses/psle-maths-mastery` | Elementary |
| SAT Math 800 Prep: Live Classes for the Digital SAT | `/courses/sat-math-prep-course` | High school |
| Statistics & Probability: Data to Hypothesis Testing | `/courses/statistics-probability-maths-course` | College |
| Vedic Maths Mastery: Speed Calculation with All 16 Sutras | `/courses/vedic-maths-course-speed-calculation-mastery` | Middle school |

---

## APPENDIX B: COMPLETE SITE URL INDEX (820 live URLs)

Every URL below is present in a sitemap **and** resolves through the routing table. Redirect-only URLs are excluded. The site-wide link check passed with 0 broken internal links across 53,903 link instances on 4 August 2026. Prefix any path with `https://learn.modernagecoders.com`.


### B.1 Core site pages (35)

| URL path | Page title |
|---|---|
| `/` | Modern Age Coders - Online Coding & Maths Classes for All Ages |
| `/about` | About Modern Age Coders |
| `/aeo-geo-optimization-services` | AEO & GEO Services |
| `/ai-tools-age-guide` | AI Tool Age Limits: What Your Child Can Actually Use |
| `/aura` | Aura Type - Master Your Typing Flow |
| `/beat-the-babu` | Beat The Babu - The Fastest 90-Second Math Challenge Game |
| `/blog` | Blog index |
| `/book-demo` | Book a Free Coding Demo Class |
| `/cancellation` | Cancellation Policy |
| `/coding-challenges` | Competitive Programming Practice: Daily Coding Challenges |
| `/coding-fee-calculator` | Coding Class Fee Calculator - Instant Transparent Pricing for India & Global |
| `/coding-roadmap` | How to Start Coding: Which Language First & The Full Roadmap (Ages 6-67) |
| `/contact` | Contact Us |
| `/course-atlas` | The Course Atlas - Every Coding, AI & Mathematics Course (Kids, Teens, College, Profess... |
| `/courses` | Learn Coding & Math Online |
| `/custom-software-development-services` | Custom Software Development Company |
| `/faq` | FAQ |
| `/for-business` | Software Development Company for Business |
| `/free-coding-starter-kit` | Free Coding Starter Kit |
| `/free-resources` | Free Programming Resources |
| `/free-trial` | Free Trial Class |
| `/guarantee` | Our Zero-Risk Promise |
| `/how-we-teach` | How We Teach - Watch Our Free Coding & Maths Demo Library |
| `/love` |  |
| `/maths-challenges` | Daily Maths Challenge |
| `/mistakes-students-make` | 11 Common Coding & Maths Mistakes Students Make |
| `/parent-faq` | Parent FAQ |
| `/pricing` | Affordable Coding Classes in India: Plans Starting Rs 1,499/month |
| `/privacy` | Privacy Policy |
| `/refund` | Refund Policy |
| `/schools` | Coding & Maths Classes for School Students |
| `/seo-services` | SEO Services |
| `/student-labs` | Student Labs - Real, Live Coding Projects Built by Kids, Teens & Students |
| `/success-stories` | Success Stories |
| `/terms` | Terms of Service |

### B.2 Course detail pages (115)

Listed with titles in Appendix A.

```
/courses/11-plus-maths-preparation-course-uk
/courses/a-level-maths-course-pure-mechanics-statistics
/courses/abacus-mental-maths-course-for-kids
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
/courses/c-programming-course-for-college-beginners
/courses/canva-ai-design-masterclass
/courses/cbse-class-10-maths-board-exam-prep-course
/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8
/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843
/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course
/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course
/courses/codex-and-claude-code-ai-coding-agents-course-for-teens
/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals
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
/courses/game-development-complete-masterclass-college
/courses/game-development-masterclass-for-kids
/courses/gcse-mathematics-mastery
/courses/git-github-advanced-version-control-masterclass-for-professionals
/courses/git-github-version-control-course-for-college-students
/courses/git-github-version-control-course-for-teens
/courses/gre-gmat-quant-maths-prep-course
/courses/hackathon-prep-for-adults-professionals-coding-ai-innovation-course
/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course
/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course
/courses/html-css-course-for-beginners-build-real-websites
/courses/ib-diploma-computer-science-course
/courses/ib-mathematics-aa-ai-masterclass
/courses/icse-computer-applications-java-bluej-course
/courses/igcse-computer-science-0478-course
/courses/igcse-mathematics-mastery
/courses/java-programming-masterclass-for-teens
/courses/javascript-course-for-teens-beginners-interactive-web
/courses/jee-foundation-maths-course-class-8-10
/courses/kids-ai-web-development-course
/courses/kids-coding-blocks-masterclass
/courses/maths-through-coding
/courses/mental-maths-mastery-kids
/courses/mern-stack-development-masterclass-college
/courses/microsoft-office-kids-mastery
/courses/minecraft-coding-for-kids-course
/courses/mysql-database-complete-masterclass-college
/courses/mysql-mastery-for-teens
/courses/olympiad-competition-mathematics-mastery
/courses/olympiad-mathematics-premium-course
/courses/orange-data-mining-machine-learning-course-for-college-students
/courses/orange-data-mining-visual-machine-learning-course-for-teens
/courses/pcap-python-certification-prep-course
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
/courses/roblox-game-coding-for-kids-lua-course
/courses/sat-math-prep-course
/courses/scratch-programming-complete-course
/courses/statistics-probability-maths-course
/courses/teens-ai-tools-mastery-course
/courses/vedic-maths-course-speed-calculation-mastery
/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course
/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev
/courses/vibe-coding-for-teens-python-web-ai-projects-course
```

### B.3 Blog posts (116)

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
/blog/app-idea-to-app-store-60-days-teen-developer-roadmap
/blog/armstrong-number-python-complete-guide-examples-code
/blog/best-ai-coding-tools-for-students-2026
/blog/best-byjus-alternative
/blog/best-coding-languages-kids-10-18-beginner-advanced
/blog/best-free-paid-coding-courses-students
/blog/best-free-platforms-for-vibe-coding
/blog/best-java-ides-for-beginners
/blog/best-programming-languages-college-students-2026
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
/blog/coding-is-the-new-english-why-2026-is-the-year-to-start
/blog/coding-mathematics-engineering-science
/blog/coding-vs-ai-what-should-my-child-learn
/blog/common-myths-about-coding-for-school-students
/blog/competitive-coding-vs-development-skills-what-students-focus
/blog/custom-software-vs-ready-made-software
/blog/data-analytics-math-help-businesses-better-decisions
/blog/data-science-ai-math-skills-professionals
/blog/data-science-course-india
/blog/does-online-maths-tuition-work
/blog/exception-handling-in-python
/blog/fibonacci-series-in-python
/blog/file-built-in-methods-python-guide
/blog/file-organization-in-python
/blog/file-types-in-python-complete-guide
/blog/full-stack-vs-ai-engineer-salary-india
/blog/group-vs-1-on-1-coding-classes
/blog/help-child-with-maths-anxiety
/blog/help-child-with-maths-homework
/blog/how-coding-education-changing-future-india
/blog/how-coding-improves-mathematical-thinking-children
/blog/how-college-students-build-real-world-projects-while-studying
/blog/how-schools-parents-prepare-children-future-tech-careers
/blog/how-to-build-menu-driven-program-in-python
/blog/how-to-choose-a-coding-class-for-your-child
/blog/how-to-find-hcf-and-lcm-in-python
/blog/how-to-get-better-at-maths
/blog/how-to-make-maths-fun-for-kids
/blog/how-to-read-and-write-files-in-python
/blog/how-to-reverse-a-string-in-python
/blog/how-to-teach-kids-ai-at-home
/blog/how-to-write-a-leap-year-program-in-python
/blog/html-css-javascript-project-ideas
/blog/icse-class-10-computer-applications-revision
/blog/igcse-computer-science-explained-for-parents
/blog/is-coding-good-for-kids
/blog/is-coding-worth-learning-2026
/blog/is-vedic-maths-actually-useful
/blog/java-array-programs-for-beginners
/blog/java-constructors-explained
/blog/java-for-kids-complete-guide-learning-programming-2026
/blog/javascript-basics
/blog/learn-python-step-by-step
/blog/learn-to-code-career-change-2026
/blog/mental-maths-tricks-for-kids
/blog/minecraft-vs-roblox-which-teaches-kids-to-code
/blog/mobile-apps-increase-customer-engagement-businesses
/blog/modern-age-coders-certificate-earned-not-given
/blog/outsourcing-software-development-vs-hiring-inhouse-developers
/blog/parents-guide-starting-coding-education-home
/blog/project-based-learning-why-theory-alone-not-enough-coding
/blog/python-basic-programs-for-beginners
/blog/python-dictionary-complete-guide
/blog/python-for-beginners
/blog/python-lambda-functions
/blog/python-list-comprehension-explained
/blog/python-oop-tutorial-for-beginners
/blog/python-programs-for-cbse-class-12
/blog/python-vs-javascript-which-to-learn-first
/blog/robotics-coding-stem-kits-build-logical-thinking
/blog/role-of-mathematics-programming-logical-problem-solving
/blog/safe-ai-tools-for-kids-homework-2025
/blog/scratch-vs-python-which-better-young-learners
/blog/signs-your-child-is-ready-to-learn-coding
/blog/star-pattern-programs-in-python
/blog/stem-education-for-girls-india
/blog/string-handling-in-java
/blog/top-10-java-programs-every-college-student-must-know
/blog/top-10-java-programs-for-school-students
/blog/top-20-java-programs-for-icse-class-10
/blog/top-coding-games-platforms-make-learning-fun-kids
/blog/top-emerging-tech-skills-learn-2025-ai-low-code-cloud
/blog/uae-ai-curriculum-schools-what-it-means
/blog/vibe-coding-vs-learning-to-code-properly
/blog/what-is-ai-complete-beginners-guide-how-to-start
/blog/what-is-blockly-for-kids
/blog/what-is-floor-division-in-python
/blog/what-is-the-responsibility-of-developers-using-generative-AI
/blog/what-is-vibe-coding-future-of-software-development
/blog/what-type-of-data-is-generative-ai-most-suitable-for
/blog/whitehat-jr-alternative
/blog/who-are-modern-age-coders-why-choose-us
/blog/why-coding-is-new-literacy-kids-2025
/blog/why-early-exposure-coding-gives-students-competitive-advantage
/blog/why-every-business-needs-website-mobile-app-2025
/blog/why-every-teen-should-learn-coding
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

### B.6 Indian city pages (131)

| URL path | Page title |
|---|---|
| `/best-coding-class-in-agra` | Best Coding Classes in Agra |
| `/best-coding-class-in-ahmedabad` | Best Coding Classes in Ahmedabad |
| `/best-coding-class-in-ajmer` | Best Coding Classes in Ajmer |
| `/best-coding-class-in-akola` | Best Coding Classes in Akola |
| `/best-coding-class-in-aligarh` | Best Coding Classes in Aligarh |
| `/best-coding-class-in-amravati` | Best Coding Classes in Amravati |
| `/best-coding-class-in-amritsar` | Best Coding Classes in Amritsar |
| `/best-coding-class-in-anand` | Best Coding Classes in Anand |
| `/best-coding-class-in-asansol` | Best Coding Classes in Asansol |
| `/best-coding-class-in-aurangabad` | Best Coding Classes in Aurangabad |
| `/best-coding-class-in-balasore` | Best Coding Classes in Balasore |
| `/best-coding-class-in-bareilly` | Best Coding Classes in Bareilly |
| `/best-coding-class-in-belagavi` | Best Coding Classes in Belagavi (Belgaum) |
| `/best-coding-class-in-bengaluru` | Best Coding Classes in Bengaluru |
| `/best-coding-class-in-berhampur` | Best Coding Classes in Berhampur |
| `/best-coding-class-in-bhagalpur` | Best Coding Classes in Bhagalpur |
| `/best-coding-class-in-bhavnagar` | Best Coding Classes in Bhavnagar |
| `/best-coding-class-in-bhilai` | Best Coding Classes in Bhilai |
| `/best-coding-class-in-bhopal` | Best Coding Classes in Bhopal |
| `/best-coding-class-in-bhubaneswar` | Best Coding Classes in Bhubaneswar |
| `/best-coding-class-in-bikaner` | Best Coding Classes in Bikaner |
| `/best-coding-class-in-bokaro` | Best Coding Classes in Bokaro |
| `/best-coding-class-in-chandigarh` | Best Coding Classes in Chandigarh |
| `/best-coding-class-in-chennai` | Best Coding Classes in Chennai |
| `/best-coding-class-in-coimbatore` | Best Coding Classes in Coimbatore |
| `/best-coding-class-in-cuttack` | Best Coding Classes in Cuttack |
| `/best-coding-class-in-darbhanga` | Best Coding Classes in Darbhanga |
| `/best-coding-class-in-davanagere` | Best Coding Classes in Davanagere (Davangere) |
| `/best-coding-class-in-dehradun` | Best Coding Classes in Dehradun |
| `/best-coding-class-in-delhi` | Best Coding Classes in Delhi |
| `/best-coding-class-in-dhanbad` | Best Coding Classes in Dhanbad |
| `/best-coding-class-in-durgapur` | Best Coding Classes in Durgapur |
| `/best-coding-class-in-erode` | Best Coding Classes in Erode |
| `/best-coding-class-in-faridabad` | Best Coding Classes in Faridabad |
| `/best-coding-class-in-gandhinagar` | Best Coding Classes in Gandhinagar |
| `/best-coding-class-in-gangtok` | Best Coding Classes in Gangtok |
| `/best-coding-class-in-gaya` | Best Coding Classes in Gaya |
| `/best-coding-class-in-ghaziabad` | Best Coding Classes in Ghaziabad |
| `/best-coding-class-in-goa` | Best Coding Classes in Goa |
| `/best-coding-class-in-gorakhpur` | Best Coding Classes in Gorakhpur |
| `/best-coding-class-in-greater-noida` | Best Coding Classes in Greater Noida |
| `/best-coding-class-in-guntur` | Best Coding Classes in Guntur |
| `/best-coding-class-in-gurgaon` | Best Coding Classes in Gurgaon |
| `/best-coding-class-in-guwahati` | Best Coding Classes in Guwahati |
| `/best-coding-class-in-gwalior` | Best Coding Classes in Gwalior |
| `/best-coding-class-in-haldwani` | Best Coding Classes in Haldwani |
| `/best-coding-class-in-haridwar` | Best Coding Classes in Haridwar |
| `/best-coding-class-in-hisar` | Best Coding Classes in Hisar |
| `/best-coding-class-in-hubli` | Best Coding Classes in Hubli |
| `/best-coding-class-in-hyderabad` | Best Coding Classes in Hyderabad |
| `/best-coding-class-in-imphal` | Best Coding Classes in Imphal |
| `/best-coding-class-in-indore` | Best Coding Classes in Indore |
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
| `/best-coding-class-in-kochi` | Best Coding Classes in Kochi |
| `/best-coding-class-in-kolhapur` | Best Coding Classes in Kolhapur |
| `/best-coding-class-in-kolkata` | Best Coding Classes in Kolkata |
| `/best-coding-class-in-kollam` | Best Coding Classes in Kollam |
| `/best-coding-class-in-kota` | Best Coding Classes in Kota |
| `/best-coding-class-in-kottayam` | Best Coding Classes in Kottayam |
| `/best-coding-class-in-kozhikode` | Best Coding Classes in Kozhikode |
| `/best-coding-class-in-latur` | Best Coding Classes in Latur |
| `/best-coding-class-in-lucknow` | Best Coding Classes in Lucknow |
| `/best-coding-class-in-ludhiana` | Best Coding Classes in Ludhiana |
| `/best-coding-class-in-madurai` | Best Coding Classes in Madurai |
| `/best-coding-class-in-mangalore` | Best Coding Classes in Mangalore (Mangaluru) |
| `/best-coding-class-in-meerut` | Best Coding Classes in Meerut |
| `/best-coding-class-in-mohali` | Best Coding Classes in Mohali |
| `/best-coding-class-in-moradabad` | Best Coding Classes in Moradabad |
| `/best-coding-class-in-mumbai` | Best Coding Classes in Mumbai |
| `/best-coding-class-in-muzaffarpur` | Best Coding Classes in Muzaffarpur |
| `/best-coding-class-in-mysore` | Best Coding Classes in Mysore |
| `/best-coding-class-in-nagpur` | Best Coding Classes in Nagpur |
| `/best-coding-class-in-nashik` | Best Coding Classes in Nashik |
| `/best-coding-class-in-navi-mumbai` | Best Coding Classes in Navi Mumbai |
| `/best-coding-class-in-nellore` | Best Coding Classes in Nellore |
| `/best-coding-class-in-nizamabad` | Best Coding Classes in Nizamabad |
| `/best-coding-class-in-noida` | Best Coding Classes in Noida |
| `/best-coding-class-in-palakkad` | Best Coding Classes in Palakkad |
| `/best-coding-class-in-panipat` | Best Coding Classes in Panipat |
| `/best-coding-class-in-patiala` | Best Coding Classes in Patiala |
| `/best-coding-class-in-patna` | Best Coding Classes in Patna |
| `/best-coding-class-in-pimpri-chinchwad` | Best Coding Classes in Pimpri-Chinchwad |
| `/best-coding-class-in-prayagraj` | Best Coding Classes in Prayagraj |
| `/best-coding-class-in-pune` | Best Coding Classes in Pune |
| `/best-coding-class-in-raipur` | Best Coding Classes in Raipur |
| `/best-coding-class-in-rajahmundry` | Best Coding Classes in Rajahmundry |
| `/best-coding-class-in-rajkot` | Best Coding Classes in Rajkot |
| `/best-coding-class-in-ranchi` | Best Coding Classes in Ranchi |
| `/best-coding-class-in-rishikesh` | Best Coding Classes in Rishikesh |
| `/best-coding-class-in-rohtak` | Best Coding Classes in Rohtak |
| `/best-coding-class-in-roorkee` | Best Coding Classes in Roorkee |
| `/best-coding-class-in-rourkela` | Best Coding Classes in Rourkela |
| `/best-coding-class-in-salem` | Best Coding Classes in Salem |
| `/best-coding-class-in-sambalpur` | Best Coding Classes in Sambalpur |
| `/best-coding-class-in-shimla` | Best Coding Classes in Shimla |
| `/best-coding-class-in-shimoga` | Best Coding Classes in Shivamogga (Shimoga) |
| `/best-coding-class-in-sikar` | Best Coding Classes in Sikar |
| `/best-coding-class-in-siliguri` | Best Coding Classes in Siliguri |
| `/best-coding-class-in-solapur` | Best Coding Classes in Solapur |
| `/best-coding-class-in-sonipat` | Best Coding Classes in Sonipat |
| `/best-coding-class-in-srinagar` | Best Coding Classes in Srinagar |
| `/best-coding-class-in-surat` | Best Coding Classes in Surat |
| `/best-coding-class-in-thane` | Best Coding Classes in Thane |
| `/best-coding-class-in-thanjavur` | Best Coding Classes in Thanjavur |
| `/best-coding-class-in-thiruvananthapuram` | Coding Classes in Thiruvananthapuram |
| `/best-coding-class-in-thrissur` | Best Coding Classes in Thrissur |
| `/best-coding-class-in-tirunelveli` | Best Coding Classes in Tirunelveli |
| `/best-coding-class-in-tirupati` | Best Coding Classes in Tirupati |
| `/best-coding-class-in-trichy` | Best Coding Classes in Trichy |
| `/best-coding-class-in-udaipur` | Best Coding Classes in Udaipur |
| `/best-coding-class-in-udupi` | Best Coding Classes in Udupi & Manipal |
| `/best-coding-class-in-ujjain` | Best Coding Classes in Ujjain |
| `/best-coding-class-in-vadodara` | Best Coding Classes in Vadodara |
| `/best-coding-class-in-varanasi` | Best Coding Classes in Varanasi |
| `/best-coding-class-in-vellore` | Best Coding Classes in Vellore |
| `/best-coding-class-in-vijayawada` | Best Coding Classes in Vijayawada |
| `/best-coding-class-in-visakhapatnam` | Best Coding Classes in Visakhapatnam |
| `/best-coding-class-in-warangal` | Best Coding Classes in Warangal |

### B.7 School partnership pages (21)

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
| `/coding-classes-for-la-martiniere-boys-kolkata` | Coding Classes for La Martiniere for Boys Students |
| `/coding-classes-for-la-martiniere-girls-kolkata` | Coding Classes for La Martiniere for Girls Students |

### B.8 Country and international pages (143)

| URL path | Page title |
|---|---|
| `/ai-and-machine-learning-classes-in-australia` | AI and Machine Learning Classes in Australia |
| `/ai-and-machine-learning-classes-in-bahrain` | AI and Machine Learning Classes in Bahrain |
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
| `/coding-classes-cost-india-2026` | Coding Classes Cost in India 2026: Honest Price Guide |
| `/coding-classes-for-girls` | Coding Classes for Girls |
| `/coding-classes-for-kids-cost` | Coding Classes for Kids Cost 2026: US Prices by Format |
| `/coding-classes-for-kids-in-doha` | Coding Classes for Kids in Doha |
| `/coding-classes-for-kids-in-dubai` | Coding Classes for Kids in Dubai |
| `/coding-classes-for-kids-in-riyadh` | Coding Classes for Kids in Riyadh |
| `/coding-classes-in-abu-dhabi` | Coding Classes in Abu Dhabi |
| `/coding-classes-in-andhra-pradesh` | Coding Classes in Andhra Pradesh |
| `/coding-classes-in-assam` | Coding Classes in Assam |
| `/coding-classes-in-australia` | Online Coding & AI Classes in Australia |
| `/coding-classes-in-avani-riverside-howrah` | Coding & Maths Classes near Avani Riverside, Howrah |
| `/coding-classes-in-avidipta-mukundapur` | Coding & Maths Classes near Avidipta |
| `/coding-classes-in-bihar` | Coding Classes in Bihar |
| `/coding-classes-in-calcutta-riverside` | Coding & Maths Classes near Calcutta Riverside |
| `/coding-classes-in-canada` | Coding & AI Classes in Canada |
| `/coding-classes-in-chhattisgarh` | Coding Classes in Chhattisgarh |
| `/coding-classes-in-dammam` | Coding Classes in Dammam & Khobar |
| `/coding-classes-in-diamond-city-north` | Coding & Maths Classes at Diamond City North |
| `/coding-classes-in-diamond-city-south` | Coding & Maths Classes near Diamond City South |
| `/coding-classes-in-dlf-new-town-heights` | Coding & Maths Classes at DLF New Town Heights |
| `/coding-classes-in-doha` | Coding Classes in Doha |
| `/coding-classes-in-dubai` | Coding Classes in Dubai |
| `/coding-classes-in-eden-city-maheshtala` | Coding & Maths Classes in Eden City, Maheshtala |
| `/coding-classes-in-elita-garden-vista` | Coding & Maths Classes near Elita Garden Vista |
| `/coding-classes-in-genexx-valley-joka` | Coding & Maths Classes in Joka |
| `/coding-classes-in-germany` | Coding & AI Classes in Germany |
| `/coding-classes-in-goa` | Coding Classes in Goa |
| `/coding-classes-in-godrej-prakriti` | Coding & Maths Classes at Godrej Prakriti, Sodepur |
| `/coding-classes-in-greenfield-city-behala` | Coding & Maths Classes in Greenfield City, Behala |
| `/coding-classes-in-gujarat` | Coding Classes in Gujarat |
| `/coding-classes-in-haryana` | Coding Classes in Haryana |
| `/coding-classes-in-hiland-park` | Coding & Maths Classes near Hiland Park |
| `/coding-classes-in-hiland-willows` | Coding & Maths Classes near Hiland Willows |
| `/coding-classes-in-himachal-pradesh` | Coding Classes in Himachal Pradesh |
| `/coding-classes-in-ideal-niketan-tangra` | Coding & Maths Classes near Ideal Niketan, Tangra |
| `/coding-classes-in-india` | Coding Classes in India |
| `/coding-classes-in-ireland` | Online Coding & AI Classes in Ireland |
| `/coding-classes-in-jeddah` | Coding Classes in Jeddah |
| `/coding-classes-in-jharkhand` | Coding Classes in Jharkhand |
| `/coding-classes-in-karnataka` | Coding Classes in Karnataka |
| `/coding-classes-in-kerala` | Coding Classes in Kerala |
| `/coding-classes-in-madhya-pradesh` | Coding Classes in Madhya Pradesh |
| `/coding-classes-in-maharashtra` | Coding Classes in Maharashtra |
| `/coding-classes-in-natural-city-garia` | Coding & Maths Classes in Garia, Kolkata |
| `/coding-classes-in-new-zealand` | Online Coding & AI Classes in New Zealand |
| `/coding-classes-in-odisha` | Coding Classes in Odisha |
| `/coding-classes-in-punjab` | Coding Classes in Punjab |
| `/coding-classes-in-qatar` | Coding Classes in Qatar |
| `/coding-classes-in-rajasthan` | Coding Classes in Rajasthan |
| `/coding-classes-in-riyadh` | Coding Classes in Riyadh |
| `/coding-classes-in-rosedale-garden` | Coding & Maths Classes near Rosedale Garden |
| `/coding-classes-in-saudi-arabia` | Coding Classes in Saudi Arabia |
| `/coding-classes-in-sharjah` | Coding Classes in Sharjah |
| `/coding-classes-in-sherwood-estate` | Coding & Maths Classes near Sherwood Estate |
| `/coding-classes-in-siddha-town-madhyamgram` | Coding & Maths Classes in Siddha Town, Madhyamgram |
| `/coding-classes-in-singapore` | Coding & AI Classes in Singapore |
| `/coding-classes-in-south-city` | Coding & Maths Classes near South City |
| `/coding-classes-in-sugam-habitat` | Coding & Maths Classes near Sugam Habitat |
| `/coding-classes-in-sukhobrishti` | Coding & Maths Classes near Sukhobrishti |
| `/coding-classes-in-sweden` | Online Coding & AI Classes in Sweden |
| `/coding-classes-in-switzerland` | Online Coding & AI Classes in Switzerland |
| `/coding-classes-in-tamil-nadu` | Coding Classes in Tamil Nadu |
| `/coding-classes-in-telangana` | Coding Classes in Telangana |
| `/coding-classes-in-uae` | Online Coding & AI Classes in the UAE |
| `/coding-classes-in-udayan-condoville-em-bypass` | Coding & Maths Classes near Udayan Condoville |
| `/coding-classes-in-united-kingdom` | Online Coding & AI Classes in the UK |
| `/coding-classes-in-united-states` | Online Coding & AI Classes in the USA |
| `/coding-classes-in-uniworld-city` | Coding & Maths Classes near Uniworld City |
| `/coding-classes-in-upohar` | Coding & Maths Classes near Upohar, EM Bypass |
| `/coding-classes-in-urbana` | Coding & Maths Classes near Urbana, Anandapur |
| `/coding-classes-in-uttar-pradesh` | Coding Classes in Uttar Pradesh |
| `/coding-classes-in-uttarakhand` | Coding Classes in Uttarakhand |
| `/coding-classes-in-west-bengal` | Coding Classes in West Bengal |
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

### B.9 Coding and Python by age (19)

| URL path | Page title |
|---|---|
| `/coding-for-10-year-olds` | Coding for 10 Year Olds |
| `/coding-for-11-year-olds` | Coding for 11 Year Olds - Python, Web Development & AI Projects for Class 6 |
| `/coding-for-12-year-olds` | Coding for 12 Year Olds - Python, Web Dev, App Building & AI for Class 7 |
| `/coding-for-13-year-olds` | Coding for 13 Year Olds - Python, Full Stack Web & App Development for Teens |
| `/coding-for-14-year-olds` | Coding for 14 Year Olds - Python OOP, Full Stack, AI/ML & DSA for Class 9 |
| `/coding-for-15-year-olds` | Coding for 15 Year Olds - Full Stack, AI/ML & DSA for Class 10 Board Year |
| `/coding-for-16-year-olds` | Coding for 16 Year Olds - CS Stream, Full Stack, AI/ML & DSA for Class 11 |
| `/coding-for-17-year-olds` | Coding for 17 Year Olds - Class 12 CS, College Prep, Portfolio & DSA |
| `/coding-for-8-year-olds` | Coding for 8 Year Olds - Scratch, Block Coding & Creative Projects for Kids |
| `/coding-for-9-year-olds` | Coding for 9 Year Olds - Scratch, Python Basics & Game Projects for Kids |
| `/python-for-10-year-olds` | Python for 10 Year Olds - Real Python Programs, Turtle Art & Mini Games |
| `/python-for-11-year-olds` | Python for 11 Year Olds - Functions, Files & First AI Projects for Class 6 |
| `/python-for-12-year-olds` | Python for 12 Year Olds - OOP, Pygame, sklearn & Real Projects for Class 7 |
| `/python-for-13-year-olds` | Python for 13 Year Olds - OOP, Flask APIs, sklearn ML & Portfolio Projects |
| `/python-for-14-year-olds` | Python for 14 Year Olds - Flask, Django Intro, sklearn ML & Kaggle Projects |
| `/python-for-15-year-olds` | Python for 15 Year Olds - Board-Safe Python + Django, ML & DSA for Class 10 |
| `/python-for-16-year-olds` | Python for 16 Year Olds - CS Stream Python, Pandas, ML, Django & DSA |
| `/python-for-17-year-olds` | Python for 17 Year Olds - Class 12 Board CS, College Portfolio, ML & DSA |
| `/python-for-9-year-olds` | Python for 9 Year Olds - First Python Programs, Turtle Graphics & Games |

### B.10 Coding and Python by school class (17)

| URL path | Page title |
|---|---|
| `/coding-for-class-10` | Coding for Class 10 - Board-Safe CS Prep, Python, Java, AI & DSA |
| `/coding-for-class-11` | Coding for Class 11 - CS Stream, Python/Pandas, MERN, AI/ML & DSA in C++ |
| `/coding-for-class-12` | Coding for Class 12 - Board CS, College-Ready Portfolio, DSA & Competitive Programming |
| `/coding-for-class-3` | Coding for Class 3 - Scratch, Block Coding & First Python for 8 Year Olds |
| `/coding-for-class-4` | Coding for Class 4 - Scratch, Block Coding & First Python for 9 Year Olds |
| `/coding-for-class-5` | Coding for Class 5 - Python, Scratch & AI Tools for 10 Year Olds |
| `/coding-for-class-6` | Coding for Class 6 - Python, HTML/CSS & AI Projects Matched to CBSE/ICSE Syllabus |
| `/coding-for-class-7` | Coding for Class 7 - Python, JavaScript, App Dev & AI for CBSE/ICSE Students |
| `/coding-for-class-8` | Coding for Class 8 - Python OOP, Full Stack, Java & AI for CBSE/ICSE Students |
| `/coding-for-class-9` | Coding for Class 9 - CBSE/ICSE CS, Python, Java, Full Stack & DSA |
| `/python-for-class-10` | Python for Class 10 - Board-Safe Python for CBSE IT 402 + College Prep |
| `/python-for-class-11-cbse` | Python for Class 11 CBSE - CS 083 & IP Aligned, Pandas, SQL, Functions |
| `/python-for-class-12-cbse` | Python for Class 12 CBSE Board Exam - Full Syllabus, Project, SQL, Sample Papers |
| `/python-for-class-6` | Python for Class 6 - CBSE Code 166 Python, Turtle, First AI (Age 11) |
| `/python-for-class-7` | Python for Class 7 - OOP Basics, Pygame, First sklearn for Age 12 Students |
| `/python-for-class-8` | Python for Class 8 - OOP, Flask API, sklearn, Kaggle Datasets & DSA Intro |
| `/python-for-class-9` | Python for Class 9 - CBSE Code 402 Python, Flask, Django Intro & Kaggle |

### B.11 Comparison and alternative pages (17)

| URL path | Page title |
|---|---|
| `/brightchamps-alternative` | BrightChamps Alternative 2026: Focused Depth, Not Breadth |
| `/byjus-coding-alternative` | BYJU'S Coding Alternative 2026: Live, Small-Batch, Honest |
| `/coding-vs-maths` | Coding vs Maths: Which Should Your Child Learn? The Honest Answer |
| `/coding-vs-programming` | Coding vs Programming: The Real Difference & How We Build Programmers |
| `/codingal-alternative` | Codingal Alternative 2026: Depth-First Coding and Maths |
| `/cuemath-alternative` | Cuemath Alternative for 2026: A Live Coding and Maths School |
| `/modern-age-coders-vs-codingal` | Modern Age Coders vs Codingal: Honest 2026 Comparison |
| `/modern-age-coders-vs-cuemath` | Modern Age Coders vs Cuemath: Honest 2026 Comparison |
| `/modern-age-coders-vs-juni-learning` | Modern Age Coders vs Juni Learning: 2026 Comparison |
| `/modern-age-coders-vs-kumon` | Modern Age Coders vs Kumon: Honest 2026 Comparison |
| `/modern-age-coders-vs-mathnasium` | Modern Age Coders vs Mathnasium: Honest 2026 Comparison |
| `/modern-age-coders-vs-outschool` | Modern Age Coders vs Outschool: School or Marketplace? (2026) |
| `/modern-age-coders-vs-tynker` | Modern Age Coders vs Tynker: App or Live Teaching? (2026) |
| `/modern-age-coders-vs-whitehat-jr-cuemath-codingal` | Modern Age Coders vs WhiteHat Jr, Cuemath & Codingal - Honest Comparison |
| `/private-math-tutor-vs-online-tutoring` | Private Math Tutor vs Online Tutoring: 2026 Decision Guide |
| `/tynker-alternative` | Tynker Alternative 2026: A Live Teacher, Not an App Alone |
| `/whitehat-jr-alternative` | WhiteHat Jr Alternative in 2026: Real Mentors, Not Scripts |

### B.12 Camps (summer and winter) (9)

| URL path | Page title |
|---|---|
| `/online-coding-summer-camp` | Online Coding Summer Camp |
| `/summer-coding-camp` | Summer Coding Camp 2026 |
| `/summer-coding-camp-adults` | Summer Coding Bootcamp for Adults 2026 (18+) |
| `/summer-coding-camp-kids` | Summer Coding Camp for Kids 2026 - Ages 6-12 |
| `/summer-coding-camp-teens` | Summer Coding Camp for Teens 2026 (Ages 12-17) |
| `/winter-coding-camp` | Winter Coding Camp 2026 |
| `/winter-coding-camp-adults` | Winter Coding Camp for Adults 2026 (Ages 18+) |
| `/winter-coding-camp-kids` | Winter Coding Camp for Kids 2026 (Ages 6-11) |
| `/winter-coding-camp-teens` | Winter Coding Camp for Teens 2026 (Ages 12-17) |

### B.13 Mathematics landing pages (68)

| URL path | Page title |
|---|---|
| `/11-plus-maths-tuition` | 11 Plus Maths Tuition Online · 1:1 GL & CEM 11+ Maths Prep |
| `/a-level-maths-tuition-online` | A-Level Maths Tuition Online · 1:1 Pure, Mechanics & Statistics |
| `/a-level-maths-tutor-uae` | A-Level Maths Tutor in the UAE · 1:1 Online Pure, Mechanics & Statistics |
| `/act-math-tutoring-online` | ACT Math Tutoring Online · 1:1 ACT Math Prep |
| `/algebra-2-tutoring-online` | Algebra 2 Tutoring Online |
| `/algebra-tutoring-online-usa` | Algebra Tutoring Online (USA) · 1:1 Pre-Algebra, Algebra 1 & 2 |
| `/american-maths-tutor-uae` | American Curriculum & SAT Maths Tutor in the UAE · 1:1 Online |
| `/ap-calculus-tutoring-online` | AP Calculus Tutoring Online · 1:1 AP Calculus AB & BC Prep |
| `/ap-statistics-tutoring-online` | AP Statistics Tutoring Online · 1:1 AP Stats Prep |
| `/best-online-math-tutoring-2026` | Best Online Math Tutoring 2026: Ranked Honestly, With Sources |
| `/best-online-maths-classes-2026` | Best Online Maths Classes for Kids 2026: Ranked Honestly |
| `/calculus-tutoring-online` | Calculus Tutoring Online |
| `/cbse-maths-tutor-uae` | CBSE Maths Tutor in the UAE · 1:1 Online CBSE & ICSE - Class 6 to 12 |
| `/common-entrance-maths-tuition` | Common Entrance Maths Tuition · 1:1 ISEB 13+ & 11+ Maths |
| `/functional-skills-maths-tuition-online` | Functional Skills Maths Tuition Online · 1:1 Entry 3, Level 1 & Level 2 |
| `/further-maths-tuition-online` | Further Maths Tuition Online · 1:1 A-Level Further Mathematics |
| `/gcse-maths-tuition-online` | GCSE Maths Tuition Online · 1:1 AQA, Edexcel & OCR |
| `/gcse-maths-tutor-uae` | GCSE Maths Tutor in the UAE · 1:1 Online IGCSE & GCSE - AQA, Edexcel, OCR, CIE |
| `/geometry-tutoring-online-usa` | Geometry Tutoring Online (USA) · 1:1 High School Geometry & Proofs |
| `/homeschool-math-curriculum-usa` | Homeschool Math Curriculum (USA) · 1:1 Online Math for Homeschoolers |
| `/ib-maths-tuition-online` | IB Maths Tuition Online |
| `/ib-maths-tutor-uae` | IB Maths Tutor in the UAE · 1:1 Maths AA & AI (SL & HL) |
| `/igcse-maths-tuition-online` | IGCSE Maths Tuition Online |
| `/isee-ssat-math-prep` | ISEE & SSAT Math Prep Online |
| `/ks2-maths-tuition-online` | KS2 Maths Tuition Online · 1:1 Year 3-6 & SATs Maths |
| `/ks3-maths-tuition-online` | KS3 Maths Tuition Online · 1:1 Year 7-9 Maths |
| `/math-catch-up-program` | Math Catch-Up Program |
| `/math-olympiad-amc-tutoring` | Math Olympiad & AMC Tutoring Online · 1:1 AMC 8/10/12 & MATHCOUNTS Coaching |
| `/maths-behind-machine-learning` | The Maths Behind Machine Learning - Linear Algebra, Calculus & Probability for AI |
| `/maths-class-10` | Maths Tuition for Class 10 |
| `/maths-classes-for-adults-uae` | Maths Classes for Adults in the UAE · 1:1 Online - Work, Study & GMAT/GRE |
| `/maths-tuition-for-kids-uae` | Maths Tuition for Kids in the UAE · 1:1 Online Primary Maths |
| `/maths-tuition-for-teens-uae` | Maths Tuition for Teens in the UAE · 1:1 Online Secondary Maths |
| `/maths-tutor-in-abu-dhabi` | Maths Tutor in Abu Dhabi · 1:1 Online Maths Tuition, Every Curriculum |
| `/maths-tutor-in-dubai` | Maths Tutor in Dubai · 1:1 Online Maths Tuition, Every Curriculum |
| `/maths-tutor-in-sharjah` | Maths Tutor in Sharjah · 1:1 Online Maths Tuition, Every Curriculum |
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
| `/online-maths-classes-for-adults-in-uk` | Online Maths Classes for Adults in the UK · 1:1 Numeracy, GCSE Resit & Functional Skills |
| `/online-maths-classes-for-adults-in-usa` | Online Maths Classes for Adults in the USA · 1:1 Math for Work, Study & Confidence |
| `/online-maths-tuition` | Online Maths Tuition for All Ages |
| `/online-maths-tuition-for-college-students-in-uk` | Online Maths Tuition for College & Sixth Form in the UK · 1:1 A-Level & University Maths |
| `/online-maths-tuition-for-kids-in-uk` | Online Maths Tuition for Kids in the UK · 1:1 Primary Maths (KS1 & KS2) |
| `/online-maths-tuition-for-teens-in-uk` | Online Maths Tuition for Teens in the UK · 1:1 KS3 & GCSE Maths |
| `/online-maths-tuition-singapore` | Online Maths Tuition Singapore |
| `/online-maths-tuition-uae` | Online Maths Tuition in the UAE · 1:1 Across Every Curriculum & Emirate |
| `/online-maths-tutoring-australia` | Online Maths Tutoring Australia |
| `/online-maths-tutoring-for-college-students-in-usa` | Online Maths Tutoring for College Students in the USA · 1:1 Calculus, Linear Algebra &... |
| `/online-maths-tutoring-for-kids-in-usa` | Online Maths Tutoring for Kids in the USA · 1:1 Elementary Math (K-5) |
| `/online-maths-tutoring-for-teens-in-usa` | Online Maths Tutoring for Teens in the USA · 1:1 Middle & High School Math |
| `/precalculus-tutoring-online` | Precalculus Tutoring Online |
| `/sat-math-tutoring-online` | SAT Math Tutoring Online · 1:1 Digital SAT Math Prep |
| `/singapore-math-method-tutoring` | Singapore Math Method Tutoring Online |
| `/summer-math-program-online` | Online Summer Math Program 2026 |
| `/ukmt-maths-challenge-tutoring` | UKMT Maths Challenge Tutoring · 1:1 Junior, Intermediate & Senior Challenge |

### B.14 AI and machine learning pages (29)

| URL path | Page title |
|---|---|
| `/ai-agents-and-automation` | AI Agents & Automation for Business |
| `/ai-agents-course` | AI Agents Course |
| `/ai-agents-explained` | AI Agents Explained - How to Actually Build One That Doesn't Hallucinate Itself Into Pi... |
| `/ai-and-machine-learning-for-working-professionals` | AI & Machine Learning for Working Professionals |
| `/ai-classes-for-beginners` | AI Classes for Beginners - Start From Zero, No Experience Needed |
| `/ai-classes-for-cbse-class-6-to-8` | CBSE AI Classes for Class 6-8: Where AI Literacy Actually Begins |
| `/ai-classes-for-kids` | AI Classes for Kids (Ages 6-12) - Fun, Live, Project-Based |
| `/ai-classes-for-kids-in-uae` | AI Classes for Kids in UAE |
| `/ai-classes-for-teenagers` | AI Classes for Teenagers (13-18) - Build Real AI Projects & a Portfolio |
| `/ai-course-for-beginners` | AI Course for Beginners |
| `/ai-development-services` | AI Development Company |
| `/ai-engineer-roadmap-2026` | The AI Engineer Roadmap 2026 - From Python Day One to Shipping AI in Production |
| `/ai-ml-certification-course` | AI & ML Certification Course |
| `/ai-ml-course-for-college-students` | AI & ML Course for College Students |
| `/ai-ml-course-for-teens` | AI & ML Course for Kids & Teens - Learn Artificial Intelligence |
| `/ai-ml-projects-for-students` | AI & ML Projects for Students |
| `/artificial-intelligence-course` | Artificial Intelligence Course |
| `/best-ai-and-machine-learning-course-in-india` | Best AI & Machine Learning Course in India |
| `/build-machine-learning-models-in-python` | Build Machine Learning Models in Python |
| `/computer-vision-course` | Computer Vision Course |
| `/deep-learning-course` | Deep Learning Course |
| `/deep-learning-with-tensorflow-and-pytorch` | Deep Learning with TensorFlow & PyTorch |
| `/generative-ai-course` | Generative AI Course |
| `/how-computer-vision-works` | How Computer Vision Works - CNNs, Feature Maps & Object Detection Explained |
| `/how-to-train-machine-learning-models` | How to Train Machine Learning Models |
| `/machine-learning-course-for-beginners` | Machine Learning Course for Beginners |
| `/machine-learning-from-scratch` | Machine Learning From Scratch - Build Real AI/ML Models (College & Professionals) |
| `/online-ai-and-machine-learning-classes` | Online AI & Machine Learning Classes |
| `/python-for-machine-learning` | Python for Machine Learning |

### B.15 Programming language and topic pages (95)

| URL path | Page title |
|---|---|
| `/best-age-to-start-coding` | Best Age to Start Coding? The Honest Age-by-Age Answer |
| `/best-c-plus-plus-classes-in-india` | Best C++ Classes in India |
| `/best-coding-classes-online` | Best Coding Classes for Kids in India and Worldwide |
| `/best-java-classes-in-india` | Best Java Classes in India |
| `/best-online-coding-classes-for-kids-2026` | Best Online Coding Classes for Kids 2026: Ranked Honestly |
| `/bootstrap` | Complete Bootstrap 5.3 Guide - Learn Bootstrap from Scratch |
| `/build-your-own-gpt-python` | Build Your Own GPT in Python - From Tokenizer to Trained Model in 300 Lines |
| `/c-plus-plus-certification-course` | C++ Certification Course |
| `/c-plus-plus-classes-for-college-students` | C++ Classes for College Students |
| `/c-plus-plus-classes-for-teens` | C++ Classes for Teens |
| `/c-plus-plus-dsa-course` | C++ DSA Course |
| `/c-plus-plus-for-beginners` | C++ for Beginners |
| `/c-plus-plus-for-competitive-programming` | C++ for Competitive Programming |
| `/c-plus-plus-for-placement-preparation` | C++ for Placement Preparation |
| `/c-plus-plus-game-development` | C++ Game Development Course |
| `/c-plus-plus-oops-concepts-course` | C++ OOP Concepts Course |
| `/c-plus-plus-projects-for-students` | C++ Projects for Students |
| `/cbse-ai-curriculum-classes` | CBSE's Computational Thinking & AI Curriculum (2026-27): A Parent's Complete Guide |
| `/cbse-computational-thinking-classes-3-to-5` | CBSE Computational Thinking for Classes 3-5: What Your Child Actually Learns |
| `/coding-comeback-women` | Coding Comeback for Women - Return to Tech After a Career Break, Maternity Pause or Sab... |
| `/coding-for-cbse-students` | Coding for CBSE Students - Python, CS & Informatics Practices from Class 6 to 12 |
| `/coding-for-icse-students` | Coding for ICSE Students - Java BlueJ, Computer Applications & ISC CS |
| `/coding-for-igcse-students` | Coding for IGCSE Students - Cambridge CS 0478, 0984, ICT & Python |
| `/coding-lang` | Learn Programming Languages & Frameworks |
| `/coding-olympiad-medal-track` | Coding Olympiad Medal Track - IOQI, ZIO, INOI, IOI, Bebras, Math Kangaroo Coaching |
| `/computer-applications-icse-class-10` | Computer Applications ICSE Class 10 - Java BlueJ Tuition, Project & Viva Prep |
| `/computer-science-class-11-cbse` | Computer Science Class 11 CBSE - Python, Boolean Logic & Full Syllabus Tuition |
| `/computer-science-class-11-icse` | Computer Science Class 11 ICSE - Java OOP, Boolean Algebra & ISC Full Syllabus |
| `/computer-science-class-12-cbse` | Computer Science Class 12 CBSE - Python Data Structures, SQL & Full Board Tuition |
| `/computer-science-class-12-icse` | Computer Science Class 12 ICSE - ISC Java Data Structures, Recursion & Board Prep |
| `/cpa-cpp-certification-prep` | CPA C++ Certification (CPA-21-02) - Full Exam Guide, Syllabus & Live Coaching |
| `/data-analytics-course` | Data Analytics Course |
| `/data-science-course` | Data Science Course |
| `/data-structures-and-algorithms-course` | DSA Course - Build Your Logic with Data Structures & Algorithms |
| `/gazette` | The Modern Age Coders Gazette |
| `/hackathon` | Modern Age Coders Hackathon 1.0 (June 2026) - ₹30,000 Prize Pool |
| `/hackathon-guide` | Hackathon 1.0 Guide (June 2026) - How It Worked, 3 Rounds, Rules & What to Build |
| `/homeschool-coding-curriculum` | Homeschool Coding Curriculum |
| `/how-ai-actually-works` | How AI Actually Works - A First-Principles Guide to LLMs, Tokens, Embeddings and Transf... |
| `/how-large-language-models-work` | How Large Language Models Work - Understand Tokens, Embeddings & Attention |
| `/how-to-build-ai-models` | How to Build AI Models |
| `/inside-neural-networks` | Inside Neural Networks - How Deep Learning Really Works, From Perceptron to Transformer |
| `/java-certification-course` | Java Certification Course |
| `/java-classes-for-adults` | Java Classes for Adults |
| `/java-classes-for-teens` | Java Classes for Teens |
| `/java-dsa-course` | Java DSA Course |
| `/java-for-beginners` | Java for Beginners |
| `/java-oops-concepts-course` | Java OOP Concepts Course |
| `/java-programming-for-icse-students` | Java for ICSE & ISC Students |
| `/java-programming-for-kids-teens` | Java Programming for Kids & Teens: Learn Java Online |
| `/java-projects-for-students` | Java Projects for Students |
| `/jee-aspirant-coding-track` | JEE Aspirant Coding Track - Python & Computational Maths for Class 11 & 12 Without Dist... |
| `/large-language-models-course` | Large Language Models Course (LLMs) |
| `/learn-coding-by-age` | Learn Coding by Age (8-17) |
| `/learn-coding-by-class` | Learn Coding by Class (4-12) |
| `/learn-coding-from-first-principles` | Learn Coding From First Principles - Understand How Code Actually Works |
| `/learn-to-build-ai` | Learn to Build AI, Not Just Use It |
| `/levels/coding-for-college-students` | Coding for College Students - Python, DSA, Web Dev & AI |
| `/levels/coding-for-kids` | Online Coding Classes for Kids Ages 6-12 |
| `/levels/coding-for-professionals` | Coding for Adults & Beginners: Career Switch to Tech |
| `/levels/coding-for-teens` | Coding for Teenagers Ages 13-18 |
| `/levels/corporate-training` | Corporate Coding Training |
| `/master-ai-ml-python-java` | Master AI, ML, Python & Java - Go Deeper |
| `/minecraft-coding-classes-for-kids` | Minecraft Coding Classes for Kids |
| `/mobile-app-development-services` | Mobile App Development Company |
| `/mvp-development-company` | MVP Development Company for Startups |
| `/natural-language-processing-course` | Natural Language Processing Course (NLP) |
| `/neural-networks-course` | Neural Networks Course |
| `/numpy-pandas-matplotlib-masterclass` | NumPy, Pandas & Matplotlib Masterclass - Python Data Analysis in Depth |
| `/oca-java-certification-prep` | OCA Java SE 8 Certification (1Z0-808) - Full Exam Guide, Objectives & Live Coaching |
| `/online-c-plus-plus-classes` | Online C++ Classes |
| `/online-coding-classes-for-kids-uk` | Online Coding Classes for Kids in the UK |
| `/online-coding-classes-for-kids-usa` | Online Coding Classes for Kids in the USA |
| `/online-java-classes` | Online Java Classes |
| `/pcep-python-certification-prep` | PCEP Certification Preparation - Python Entry-Level Exam Guide & Live Coaching |
| `/prompt-engineering-course` | Prompt Engineering Course |
| `/python-and-ai-classes-for-kids-teens` | Python for Kids & Teens |
| `/python-classes-in-dubai` | Python Classes in Dubai |
| `/python-classes-in-qatar` | Python Classes in Qatar |
| `/python-classes-in-saudi-arabia` | Python Classes in Saudi Arabia |
| `/python-for-beginners-kids` | Python for Beginners Kids - Absolute Zero Start, Fun Projects, Live 1-on-1 Classes |
| `/python-for-data-science` | Python for Data Science |
| `/python-for-kids-in-dubai` | Python for Kids in Dubai |
| `/python-from-the-ground-up` | Python From the Ground Up - Complete, In-Depth Python Course (Grade 6 to Professional) |
| `/python-projects-for-kids` | Python Projects for Kids - 20+ Finishable Python Projects (Ages 8 to 15) |
| `/real-coding-classes` | Real Coding Classes - Learn How Code Actually Works, How to Think Like a Programmer & B... |
| `/results` | Our Results |
| `/roblox-coding-classes-for-kids` | Roblox Coding Classes for Kids |
| `/scratch-coding-classes-for-kids` | Scratch Coding Classes for Kids |
| `/screen-time-to-skill` | Screen Time to Skill Calculator - Turn Your Child's YouTube Hours into Apps, Code & Income |
| `/software-maintenance-and-support` | Bug Fixing, QA & Software Maintenance Services |
| `/software-scaling-and-modernization` | Software Scaling & Modernization Services |
| `/team` | Our Team |
| `/vibe-coding-classes` | Vibe Coding Classes for Kids, Teens & College |
| `/web-application-development-services` | Web Application Development Company |

---

## APPENDIX C: EVERY BLOG POST (116 posts)

All posts live at `https://learn.modernagecoders.com/blog/<slug>`. Use these when a customer asks a question a post already answers in depth.


### Education (33)

| Post | URL path |
|---|---|
| 10 Safe AI Tools Your Child Should Be Using for Homework in 2026 | `/blog/safe-ai-tools-for-kids-homework-2025` |
| 12 Best Coding Games for Kids (2026), Free & Fun to Play | `/blog/top-coding-games-platforms-make-learning-fun-kids` |
| 21 Best Coding Courses for Students 2026 (Free & Paid) | `/blog/best-free-paid-coding-courses-students` |
| 30+ Scratch Project Ideas for Kids: Fun Coding Projects from Beginner to Advanced | `/blog/30-plus-scratch-project-ideas-kids-fun-coding-beginner-advanced` |
| A Parent's Guide to Starting Coding Education at Home | `/blog/parents-guide-starting-coding-education-home` |
| Best Byju's Alternative for Kids and Teens in India (2026) - Live Classes, Coding + Maths | `/blog/best-byjus-alternative` |
| Best Coding Languages for Kids Age 10-18-2026 Parent Guide | `/blog/best-coding-languages-kids-10-18-beginner-advanced` |
| Best WhiteHat Jr Alternative in 2026 - Why Parents Are Switching to Modern Age Coders | `/blog/whitehat-jr-alternative` |
| Coding Class Fees in India 2026: What to Pay | `/blog/coding-class-fees-india-2026` |
| Coding for 5-Year-Olds: How Young Kids Can Start Learning Programming? | `/blog/coding-for-5-year-olds-young-kids-start-learning-programming` |
| Coding for 6-Year-Olds: Best Ways to Introduce Programming at an Early Age | `/blog/coding-for-6-year-olds` |
| Coding for 7-Year-Olds: What and How Kids Should Learn Programming | `/blog/coding-for-7-year-olds-what-how-kids-should-learn-programming` |
| Coding is the New English: Why 2026 is the Year to Start | `/blog/coding-is-the-new-english-why-2026-is-the-year-to-start` |
| Common Myths About Coding for School Students (And the Truth Behind Them) | `/blog/common-myths-about-coding-for-school-students` |
| How Coding and Mathematics Work Together in Engineering & Science | `/blog/coding-mathematics-engineering-science` |
| How Coding Education is Changing the Future of India | `/blog/how-coding-education-changing-future-india` |
| How Learning Coding Improves Mathematical Thinking in Children | `/blog/how-coding-improves-mathematical-thinking-children` |
| How Schools and Parents Can Prepare Children for Future Tech Careers | `/blog/how-schools-parents-prepare-children-future-tech-careers` |
| Introduction: What is Blockly for Kids? | `/blog/what-is-blockly-for-kids` |
| Is Coding Still Worth Learning in 2026? | `/blog/is-coding-worth-learning-2026` |
| Java for Kids: Complete Kids Guide to Learning Java Programming in 2026 | `/blog/java-for-kids-complete-guide-learning-programming-2026` |
| Minecraft vs. Roblox: Which One Actually Teaches Your Child to Code? | `/blog/minecraft-vs-roblox-which-teaches-kids-to-code` |
| Project-Based Learning: Why Theory Alone Is Not Enough in Coding | `/blog/project-based-learning-why-theory-alone-not-enough-coding` |
| Robotics and Coding: How STEM Kits Build Logical Thinking | `/blog/robotics-coding-stem-kits-build-logical-thinking` |
| Scratch vs Python: Which is Better for Young Learners? | `/blog/scratch-vs-python-which-better-young-learners` |
| STEM Education for Girls in India: Breaking Barriers and Building Futures | `/blog/stem-education-for-girls-india` |
| The CBSE/ICSE Gap: What Schools Aren't Teaching About Tech (And How to Fill It) | `/blog/cbse-icse-gap-what-schools-not-teaching-about-tech` |
| The Role of Mathematics in Programming and Logical Problem Solving | `/blog/role-of-mathematics-programming-logical-problem-solving` |
| The Ultimate Guide to Teaching Kids Coding in 2025 | `/blog/coding-for-kids-guide` |
| What is Coding for Kids? A Parent's Complete Guide to Getting Started in 2026 | `/blog/coding-for-kids-parents-complete-guide-2026` |
| Why Coding is the New Literacy for Kids in 2025 | `/blog/why-coding-is-new-literacy-kids-2025` |
| Why Early Exposure to Coding Gives Students a Competitive Advantage | `/blog/why-early-exposure-coding-gives-students-competitive-advantage` |
| Why Every Teen Should Learn Coding: The Ultimate Guide for 2025 | `/blog/why-every-teen-should-learn-coding` |

### Programming (28)

| Post | URL path |
|---|---|
| 10 Best Java IDEs for Beginners: Complete Guide to Choosing Your First IDE | `/blog/best-java-ides-for-beginners` |
| 20 Python Programs for CBSE Class 12 Board Exam (083) | `/blog/python-programs-for-cbse-class-12` |
| 30+ Best Java Programs for Class 8 Students: Easy Projects to Start Coding | `/blog/30-best-java-programs-for-class-8-students` |
| 30+ Python Basic Programs for Beginners to Practice in 2026 | `/blog/python-basic-programs-for-beginners` |
| Advantages of Functions in Python: Why Every Coder Should Use Them | `/blog/advantages-functions-python-why-every-coder-should-use-them` |
| Armstrong Number in Python, Code Examples & 5-Min Tutorial | `/blog/armstrong-number-python-complete-guide-examples-code` |
| Exception Handling in Python: Try, Except, Finally | `/blog/exception-handling-in-python` |
| Fibonacci Series in Python: 7 Ways to Write It | `/blog/fibonacci-series-in-python` |
| File Built-in Methods in Python: Complete Guide for Beginners | `/blog/file-built-in-methods-python-guide` |
| File Organization in Python: A Beginner's Guide to Managing Your Code Like a Pro | `/blog/file-organization-in-python` |
| File Types in Python: A Complete Beginner's Guide to Working with Different Files | `/blog/file-types-in-python-complete-guide` |
| How to Build a Menu Driven Program in Python (Step-by-Step Guide) | `/blog/how-to-build-menu-driven-program-in-python` |
| How to Find HCF and LCM in Python (5 Easy Methods) | `/blog/how-to-find-hcf-and-lcm-in-python` |
| How to Read and Write Files in Python (The Complete Guide) | `/blog/how-to-read-and-write-files-in-python` |
| How to Reverse a String in Python: 5 Easy Methods | `/blog/how-to-reverse-a-string-in-python` |
| How to Write a Leap Year Program in Python (3 Simple Methods) | `/blog/how-to-write-a-leap-year-program-in-python` |
| Learn Python for Beginners: Complete Step-by-Step Guide (2026) | `/blog/python-for-beginners` |
| Learn Python Step by Step: The Free Tutorial Library | `/blog/learn-python-step-by-step` |
| Learn Web Development with JavaScript - Basics, Projects & Hands-On Guide | `/blog/javascript-basics` |
| Python Dictionary: The Complete Guide With 20 Examples | `/blog/python-dictionary-complete-guide` |
| Python Lambda Functions: When to Use Them, 10 Examples | `/blog/python-lambda-functions` |
| Python List Comprehension: 15 Examples, Simple to Advanced | `/blog/python-list-comprehension-explained` |
| Python OOP Tutorial: Classes, Objects, and Inheritance | `/blog/python-oop-tutorial-for-beginners` |
| Python vs JavaScript: Which Should You Learn First? | `/blog/python-vs-javascript-which-to-learn-first` |
| Star Pattern Programs in Python: 30 Patterns With Code | `/blog/star-pattern-programs-in-python` |
| Top 10 Java Programs Every College Student Must Know (With Solutions) | `/blog/top-10-java-programs-every-college-student-must-know` |
| Top 10 Java Programs Every School Student Should Know (With Solutions) | `/blog/top-10-java-programs-for-school-students` |
| What is Floor Division in Python? Complete Guide with Examples | `/blog/what-is-floor-division-in-python` |

### Career (10)

| Post | URL path |
|---|---|
| Best Programming Languages for College Students to Learn in 2026 | `/blog/best-programming-languages-college-students-2026` |
| Career Transition Guide: Moving from Non-Tech to Tech Roles | `/blog/career-transition-guide-moving-non-tech-to-tech-roles` |
| Competitive Coding vs Development Skills: What Should Students Focus On? | `/blog/competitive-coding-vs-development-skills-what-students-focus` |
| Data Science, AI, and Math: Skills Every Tech Professional Must Learn | `/blog/data-science-ai-math-skills-professionals` |
| Full Stack vs. AI Engineer: Which Career Path Pays More in India? | `/blog/full-stack-vs-ai-engineer-salary-india` |
| How College Students Can Build Real-World Projects While Studying | `/blog/how-college-students-build-real-world-projects-while-studying` |
| How Working Professionals Can Upskill with Coding Without Quitting Their Job | `/blog/working-professionals-upskill-coding-without-quitting-job` |
| Is It Worth Learning to Code for a Career Change in 2026? | `/blog/learn-to-code-career-change-2026` |
| Top Emerging Tech Skills to Learn in 2025 (AI, Low-Code, Cloud) | `/blog/top-emerging-tech-skills-learn-2025-ai-low-code-cloud` |
| Why Python is the Most Powerful Skill for Professionals Today | `/blog/why-python-most-powerful-skill-professionals-today` |

### Mathematics (10)

| Post | URL path |
|---|---|
| 10 Mental Maths Tricks for Kids, With Worked Examples | `/blog/mental-maths-tricks-for-kids` |
| Abacus vs Vedic vs Mental Maths: A Clear Comparison | `/blog/abacus-vs-vedic-vs-mental-maths` |
| Best Online CBSE Maths Tuition for Class 6-12 in India (2026 Guide) | `/blog/cbse-maths-tuition-online` |
| Does Online Maths Tuition Really Work? An Honest 2026 Answer | `/blog/does-online-maths-tuition-work` |
| How to Get Better at Maths: 8 Methods That Actually Work | `/blog/how-to-get-better-at-maths` |
| How to Help a Child with Maths Anxiety: A 2026 Parent Guide | `/blog/help-child-with-maths-anxiety` |
| How to Help With Maths Homework (Without Solving It) | `/blog/help-child-with-maths-homework` |
| How to Make Maths Fun for Kids: 9 Ideas That Really Work | `/blog/how-to-make-maths-fun-for-kids` |
| Is Vedic Maths Actually Useful? An Honest 2026 Guide | `/blog/is-vedic-maths-actually-useful` |
| Why Is My Child Struggling with Maths? The Real Reasons | `/blog/why-is-my-child-struggling-with-maths` |

### Artificial Intelligence (8)

| Post | URL path |
|---|---|
| Agent Terminology in AI: A Simple Guide to Understanding AI Agents | `/blog/agentic-terminology-in-ai` |
| Best AI Coding Tools for Students in 2026 | `/blog/best-ai-coding-tools-for-students-2026` |
| How to Teach Kids AI at Home: A Safe 2026 Parent Guide | `/blog/how-to-teach-kids-ai-at-home` |
| UAE Made AI Mandatory in Schools: What It Means | `/blog/uae-ai-curriculum-schools-what-it-means` |
| Vibe Coding vs Learning to Code Properly | `/blog/vibe-coding-vs-learning-to-code-properly` |
| What is AI? Complete Beginner's Guide: How to Start, Which Languages, and How Deep to Go | `/blog/what-is-ai-complete-beginners-guide-how-to-start` |
| What is the Responsibility of Developers Using Generative AI? A Complete Guide | `/blog/what-is-the-responsibility-of-developers-using-generative-AI` |
| What Type of Data is Generative AI Most Suitable For? A Complete Guide | `/blog/what-type-of-data-is-generative-ai-most-suitable-for` |

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

### Kids Coding (5)

| Post | URL path |
|---|---|
| 7 Signs Your Child Is Ready to Learn Coding (2026 Guide) | `/blog/signs-your-child-is-ready-to-learn-coding` |
| Coding vs AI: What Should My Child Learn in 2026? | `/blog/coding-vs-ai-what-should-my-child-learn` |
| Group vs 1-on-1 Coding Classes: Which Is Better? | `/blog/group-vs-1-on-1-coding-classes` |
| How to Choose a Coding Class for Your Child | `/blog/how-to-choose-a-coding-class-for-your-child` |
| Is Coding Good for Kids? What It Really Teaches | `/blog/is-coding-good-for-kids` |

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
| 10 Best Free Platforms for Vibe Coding to Build Software Without Syntax | `/blog/best-free-platforms-for-vibe-coding` |
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
  "email": "contact@modernagecoders.com",
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
  "courses_live": 115,
  "blog_posts": 116,
  "live_urls": 820,
  "pricing": {
    "coding": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 7500
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      }
    },
    "maths": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 8500
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      }
    },
    "agents": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 9999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
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
      }
    },
    "camps": {
      "india": {
        "oneTime": 9999
      },
      "international": {
        "oneTime": 200
      }
    }
  },
  "pricing_ambiguous_figures": {
    "9999": [
      "agents.india.personal (per month)",
      "camps.india.oneTime (one time)"
    ]
  },
  "pricing_currencies": {
    "india": "INR",
    "international": "USD"
  },
  "pricing_updated": "2026-08-03",
  "premium_course_overrides": {
    "codex-and-claude-code-ai-coding-agents-course-for-teens": "agents",
    "codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals": "agents"
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
    "non-USD international pricing",
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
    "processing_business_days": "7-10"
  }
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

### A-Level Maths: Pure, Mechanics, Statistics (Edexcel/AQA)

`/courses/a-level-maths-course-pure-mechanics-statistics` · 18 months (72 weeks) · A-Level students (Years 12-13 or equivalent), Edexcel, AQA and OCR

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

### AI & Machine Learning for Teens: Zero to AI Expert

`/courses/ai-ml-masterclass-teens` · 12 months (52 weeks) · Complete Beginner to AI Developer

  - PHASE 1: Foundation & AI Basics (Months 1-3, Weeks 1-13)
    Build strong programming foundations, understand AI concepts, and create your first intelligent programs.
    - Month 1: Python Programming for AI
      - Introduction to AI & Python Setup
      - Python Data Structures & Control Flow
      - NumPy & Mathematical Foundations
      - Pandas & Data Manipulation
    - Months 2-3: AI Fundamentals & First Models
      - Introduction to Machine Learning
      - Classification Algorithms
      - Regression & Prediction
      - Unsupervised Learning
      - Phase 1 Capstone Project
    - Month 3: Advanced ML & Introduction to Deep Learning
      - Advanced Machine Learning Techniques
      - Introduction to Neural Networks
      - Deep Learning Fundamentals
      - Data Augmentation & Preprocessing
      - Phase 1 Final Assessment
  - PHASE 2: Core Machine Learning Mastery (Months 4-6, Weeks 14-26)
    Deep dive into advanced ML algorithms, feature engineering, model optimization, and real-world applications.
    - Months 4-5: Advanced ML & Computer Vision
      - Convolutional Neural Networks (CNNs)
      - Advanced Computer Vision
      - Recurrent Neural Networks (RNNs)
      - Natural Language Processing Basics
      - Transformers & Modern NLP
    - Month 6: Generative AI & Creative Applications
      - Generative Adversarial Networks (GANs)
      - Autoencoders & Dimensionality Reduction
      - Audio & Music AI
      - Reinforcement Learning Introduction
      - Phase 2 Capstone Project
    - Phase 2 Advanced Topics
      - Edge AI & Mobile Deployment
      - AI in Games & Simulations
      - MLOps & Production Systems
      - AI Ethics & Responsible AI
      - Phase 2 Final Project
  - PHASE 3: Deep Learning Mastery & Specializations (Months 7-9, Weeks 27-39)
    Master advanced deep learning, cutting-edge AI techniques, and specialized domains like robotics and healthcare AI.
    - Months 7-8: Advanced Deep Learning
      - Advanced CNN Architectures
      - Advanced NLP & Language Models
      - Multimodal AI
      - Graph Neural Networks
      - Time Series & Forecasting
    - Month 8: Specialized AI Domains
      - Robotics & Embodied AI
      - Healthcare AI & Bioinformatics
      - AI for Science & Research
      - Creative AI & Art
      - Advanced Reinforcement Learning
    - Month 9: Cutting-Edge AI & Research
      - Generative AI Revolution
      - Neural Architecture Search & AutoML
      - Explainable AI & Interpretability
      - Federated Learning & Privacy
      - Phase 3 Capstone Project
  - PHASE 4: Professional AI Development & Career Launch (Months 10-12, Weeks 40-52)
    Build production-grade AI systems, contribute to open source, prepare for AI careers, and launch your AI startup or research path.
    - Months 10-11: Production AI Systems
      - Scalable AI Infrastructure
      - Real-time AI Systems
      - AI Product Development
      - AI Startups & Entrepreneurship
      - Open Source Contribution
    - Month 11: Advanced Applications & Industry
      - AI in Finance & Trading
      - AI for Social Media & Content
      - AI in Education & EdTech
      - AI for Sustainability & Climate
      - Future of AI & Emerging Tech
    - Month 12: Mastery & Career Launch
      - AI Research Methods
      - Industry Preparation
      - Competitions & Challenges
      - AI Community & Impact
    - Final Month: Capstone & Graduation
      - Final Capstone - Part 1
      - Final Capstone - Part 2
      - Graduation & Future Path

**Projects students build:** Setup complete AI development environment; Rule-based chatbot (like early Siri); Simple recommendation system using rules; AI decision tree for game choices; Student grade predictor system; Text-based adventure game with AI NPCs; Data analyzer for social media stats; Simple expert system for diagnosis; Grade distribution analyzer; Dice probability simulator; Image manipulation with arrays; Statistical analysis dashboard; YouTube channel analytics tool; Sports statistics analyzer; Weather pattern explorer - plus 216 more on the course page.

### AI & Machine Learning Masterclass: Zero to AI Expert

`/courses/ai-ml-masterclass-complete-college` · 12 months (52 weeks) · Complete Beginner to AI/ML Expert

  - PHASE 1: Mathematics, Programming & Data Foundations (Months 1-3, Weeks 1-13)
    Build rock-solid mathematical and programming foundations essential for AI/ML. Master linear algebra, calculus, statistics, Python, and data manipulation.
    - Months 1-2: Mathematics for Machine Learning
      - Mathematics Prerequisites & Linear Algebra - Part 1
      - Linear Algebra - Part 2 & Calculus Fundamentals
      - Probability & Statistics - Part 1
      - Statistics - Part 2 & Python for ML
    - Month 3: Data Analysis & Exploratory Data Analysis
      - Advanced NumPy & Pandas
      - Data Visualization & EDA
      - SQL for Data Science & Phase 1 Review
  - PHASE 2: Classical Machine Learning (Months 4-6, Weeks 14-26)
    Master traditional machine learning algorithms, feature engineering, model evaluation, and scikit-learn.
    - Months 4-5: Machine Learning Fundamentals & Supervised Learning
      - Introduction to Machine Learning
      - Classification Algorithms - Part 1
      - Feature Engineering & Preprocessing
      - Unsupervised Learning
      - Ensemble Methods & Advanced Techniques
    - Month 6: Advanced ML & Time Series
      - Model Evaluation & Validation
      - Time Series Analysis & Forecasting
      - Recommender Systems
      - Advanced Topics & Specialized ML
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Production ML Basics
      - ML Model Deployment Basics
      - Introduction to Deep Learning
      - Version Control & Experiment Tracking
      - ML Engineering Best Practices
      - Big Data for ML (Introduction)
  - PHASE 3: Deep Learning & Specialized AI (Months 7-9, Weeks 27-39)
    Master deep learning, computer vision, natural language processing, and specialized AI domains.
    - Months 7-8: Deep Learning & Computer Vision
      - Convolutional Neural Networks (CNN)
      - Advanced Computer Vision
      - Recurrent Neural Networks (RNN)
      - Natural Language Processing (NLP) - Part 1
      - NLP - Part 2 (Advanced)
    - Month 9: Advanced Deep Learning & Generative AI
      - Generative Adversarial Networks (GANs)
      - Variational Autoencoders & Advanced Generative Models
      - Reinforcement Learning - Part 1
      - Reinforcement Learning - Part 2 (Deep RL)
      - PyTorch Deep Dive
    - PHASE 3 COMPLETION - Month 9 Final Weeks
      - Model Optimization & Compression
      - Audio & Speech Processing
      - Multi-Modal Learning & Graph Neural Networks
      - AI Ethics, Fairness & Responsible AI
      - Phase 3 Capstone Project
  - PHASE 4: MLOps, Production AI & Research (Months 10-12, Weeks 40-52)
    Master MLOps, production deployment, scalable AI systems, research skills, and career preparation.
    - Months 10-11: MLOps & Production AI Systems
      - MLOps Fundamentals
      - Model Serving & Deployment at Scale
      - Monitoring & Observability for ML
      - Scalable ML Infrastructure
      - AutoML & Meta-Learning
    - Month 12: Research Skills & Career Excellence
      - Reading & Implementing Research Papers
      - Advanced AI Topics & Frontier Research
      - Domain-Specific AI Applications
      - Building AI Products & Startups
      - Interview Preparation & Career Strategy
    - PHASE 4 COMPLETION - Final Projects
      - Kaggle & Competitions
      - Open Source Contribution in AI/ML
      - Technical Writing & Teaching
      - Continuous Learning & Specialization
    - Final Month - Capstone & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & AI/ML Professional

**Projects students build:** Vector operations visualizer; Matrix calculator implementation; Linear equation solver; Geometric transformations with matrices; PCA implementation from scratch; Image compression using SVD; Gradient descent visualizer; Function optimizer using calculus; Probability calculator; Distribution visualizer; Bayes theorem applications; Monte Carlo simulations; Statistical analysis tool; Hypothesis testing framework; A/B testing simulator - plus 296 more on the course page.

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

### AI Tools for Teens (13+): Prompting, Creative Projects & Safe AI Use

`/courses/teens-ai-tools-mastery-course` · 6 months (26 weeks) · Complete Beginner to Confident AI User

  - Month 1: AI Fundamentals & ChatGPT Mastery
    Understand AI basics, master ChatGPT, and learn the art of prompt engineering.
    - Introduction to AI World
    - ChatGPT Fundamentals
    - Prompt Engineering Basics
    - Advanced ChatGPT Techniques
  - Month 2: AI Art & Image Generation
    Master AI image generation tools, create stunning artwork, and understand visual AI.
    - Introduction to AI Art
    - AI Image Generation Mastery
    - Midjourney and Advanced AI Art
    - AI Photo Editing and Manipulation
  - Month 3: AI Music, Audio & Video Creation
    Explore AI tools for music composition, audio editing, and video creation.
    - AI Music Generation
    - AI Voice and Audio Tools
    - AI Video Generation
    - AI Animation and Motion
  - Month 4: AI for Learning & Productivity
    Use AI tools to enhance learning, boost productivity, and excel in academics.
    - AI Study Assistants
    - AI Research and Writing Tools
    - AI Productivity Tools
    - AI for Creative Projects
  - Month 5: AI Coding, Apps & Advanced Tools
    Learn AI-assisted coding, app development, and explore advanced AI platforms.
    - AI Coding Assistants
    - No-Code AI App Builders
    - Machine Learning Platforms
    - AI Game Development
  - Month 6: AI Projects & Future Skills
    Create advanced projects, understand AI's future, and prepare for AI-driven careers.
    - AI for Social Good
    - AI Business and Entrepreneurship
    - AI Safety and Ethics
    - Future of AI and Emerging Tech
    - Capstone Project Development
    - Graduation and Future Planning
      - Certified AI Creator - Youth

**Projects students build:** My First AI Conversation; AI vs Human: Comparison chart; Draw AI's journey timeline; Play and analyze AI games; Interview ChatGPT about its capabilities; Create a story with ChatGPT; Get homework help (with citations); Plan a birthday party with AI; Create prompt template library; Before/After prompt improvements; Prompt engineering challenge; Build custom AI assistant personality; Create personalized study assistant; Build interactive quiz game; Research project on favorite topic - plus 81 more on the course page.

### AI Tools Mastery: ChatGPT to Production AI Automation

`/courses/ai-tools-mastery-complete-college` · 6 months (26 weeks) · Complete Beginner to AI Tools Expert

  - PHASE 1: AI Fundamentals & ChatGPT Mastery (Months 1-2, Weeks 1-8)
    Master ChatGPT, prompt engineering, AI writing tools, and conversational AI applications.
    - Months 1-2: ChatGPT & Prompt Engineering Excellence
      - Introduction to AI Tools & ChatGPT Basics
      - Advanced Prompt Engineering
      - ChatGPT for Content Creation & Writing
      - ChatGPT for Business & Productivity
  - PHASE 2: Advanced AI Tools & Visual AI (Months 3-4, Weeks 9-17)
    Master Claude, Gemini, Midjourney, Stable Diffusion, and all major AI tools for images, video, and audio.
    - Months 3-4: Visual AI & Alternative LLMs
      - Claude AI & Google Gemini
      - Midjourney Mastery - Part 1
      - Midjourney Mastery - Part 2 & Advanced Techniques
      - Stable Diffusion & Other Image AI Tools
      - Video & Audio AI Tools
    - Advanced AI Tools Ecosystem
      - AI Research & Knowledge Tools
      - AI Design & Creative Tools
      - AI Coding & Development Tools
      - Specialized AI Tools
      - Phase 2 Capstone Project
  - PHASE 3: AI Automation & Monetization (Months 5-6, Weeks 22-26)
    Master AI workflow automation, agents, integration, and monetization strategies.
    - Months 5-6: Advanced Automation & Business Applications
      - AI Workflow Automation
      - AI Agents & Advanced Automation
      - AI Integration & API Usage
      - Monetization & Business with AI Tools
      - AI Tools for Specific Industries
    - Final Month: Advanced Topics & Career
      - Staying Current with AI Tools
      - Ethics, Safety & Responsible AI Use
      - Teaching & Thought Leadership
      - Building AI Tool Businesses
      - Final Capstone & Career Launch

**Projects students build:** Personal AI assistant setup; Custom instruction templates; Daily productivity workflow with ChatGPT; Meeting notes summarizer; Email response generator; Prompt template library (50+ templates); Industry-specific prompt collections; Complex task automation prompts; Creative writing prompt system; Business analysis prompts; Complete blog writing system; Social media content calendar (30 days); Email sequence (welcome, nurture, sales); E-book outline and chapters; Product descriptions generator - plus 144 more on the course page.

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

### Algorithmic Trading & Stock Market Automation Masterclass

`/courses/algorithmic-trading-automation-masterclass` · 12 months (52 weeks) · Complete Beginner to Professional Quant Trader

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
      - Phase 1 Assessment
    - Month 3: Strategy Development & Backtesting
      - Trading Strategy Design
      - Backtesting Frameworks
      - Performance Analytics
      - Strategy Optimization
      - Phase 2 Assessment
  - PHASE 2: Advanced Strategies & Portfolio Management (Months 4-6, Weeks 14-26)
    Master portfolio theory, risk management, advanced strategies, and quantitative methods.
    - Months 4-5: Portfolio Theory & Risk Management
      - Modern Portfolio Theory
      - Risk Management Systems
      - Advanced Trading Strategies
      - Market Microstructure & Execution
      - Quantitative Research Methods
    - Month 6: Machine Learning for Trading
      - ML Fundamentals for Trading
      - Classification & Regression for Trading
      - Deep Learning for Markets
      - Alternative Data & NLP
      - ML Model Deployment
    - Months 7-9: Live Trading & Production Systems
      - Broker APIs & Connectivity
      - Paper Trading Implementation
      - Live Trading Systems
      - Cryptocurrency Trading
      - Phase 3 Assessment
  - PHASE 3: Professional Trading & Advanced Systems (Months 7-9, Weeks 27-39)
    Master institutional-grade trading systems, advanced strategies, and professional deployment.
    - Months 7-8: Institutional Trading Systems
      - Options Trading Automation
      - Futures & Derivatives Trading
      - High-Frequency Trading Concepts
      - Fixed Income & Forex Trading
      - Quantitative Risk Analytics
    - Month 9: Advanced Infrastructure & Deployment
      - Trading Infrastructure Design
      - Cloud Deployment for Trading
      - Monitoring & Observability
      - Compliance & Regulatory
      - Testing & Quality Assurance
    - Months 10-12: Professional Development & Advanced Topics
      - Advanced Machine Learning Applications
      - Market Making & Liquidity Provision
      - Fund Management Systems
      - Alternative Trading Venues
      - Phase 4 Final Project - Part 1
  - PHASE 4: Master Trader & Career Launch (Months 10-12, Weeks 40-52)
    Complete mastery of algorithmic trading, final projects, and professional career preparation.
    - Months 10-11: Advanced Specializations
      - Sentiment-Driven Trading
      - Systematic Global Macro
      - Volatility Trading Systems
      - Statistical Arbitrage Advanced
      - Blockchain & DeFi Trading
    - Month 11: Business & Operations
      - Trading Business Setup
      - Raising Capital & Investor Relations
      - Team Building & Management
      - Research & Development
      - Performance Review & Optimization
    - Month 12: Final Projects & Launch
      - Final Project Development
      - Final Project Deployment
      - Portfolio & Career Preparation
      - Job Search & Opportunities
    - Month 12: Graduation & Beyond
      - Final Assessments
      - Industry Networking
      - Continuous Learning & Future

**Projects students build:** Market research report on major indices; Trading account setup (paper trading); Market terminology glossary; Paper trading diary with 10 trades; Risk-reward calculator; Trading cost analyzer; Python trading environment setup; Stock price data analyzer; Market statistics calculator; Multi-source data fetcher; Historical data downloader; Real-time price tracker; Financial database creator; Candlestick pattern detector; Support/resistance calculator - plus 213 more on the course page.

### Algorithmic Trading Masterclass: Zero to Automated Systems

`/courses/algorithmic-trading-masterclass-complete` · 12 months (52 weeks) · Complete Beginner to Professional Quant Trader

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
      - Phase 2 Capstone Project
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
      - Phase 3 Capstone Project
  - PHASE 4: Live Trading & Professional Quant (Months 10-12, Weeks 40-52)
    Master live trading deployment, infrastructure, fund management, and career development.
    - Months 10-11: Live Trading & Infrastructure
      - Live Trading Infrastructure
      - Deployment & Production Systems
      - Live Trading Risk Management
      - Performance Monitoring & Analysis
      - Starting with Real Money
    - Month 12: Professional Development & Career
      - Quantitative Finance Career Paths
      - Interview Preparation for Quant Roles
      - Running a Proprietary Trading Desk
      - Launching a Quant Hedge Fund
      - Continuous Learning & Community
    - FINAL PROJECT & CAREER LAUNCH
      - Research & Strategy Innovation
      - Advanced Technology Integration
      - Regulatory & Compliance Mastery
      - Final Capstone & Launch

**Projects students build:** Market research on different instruments; Paper trading practice (manual); Order type experiments; Market analysis report; Trading journal setup; Load and explore stock price data; Calculate basic statistics (mean, std, returns); Price data manipulation exercises; Simple moving average calculator; Trading signal generator (basic); Multi-asset data downloader; Returns and volatility analyzer; Correlation matrix for portfolio; Interactive price charts; Market data dashboard - plus 244 more on the course page.

### Alpha Girls: Elite Tech Mastery & Leadership for Women

`/courses/alpha-girls-elite-tech-mastery` · 12 months (52 weeks) · Expert Developer to Industry Pioneer/Tech Mogul

  - PHASE 1: Enterprise Mastery & Billion-Scale Systems (Months 1-3, Weeks 1-13)
    Master the architecture and engineering behind the world's largest technology systems. Build production systems for real Fortune 500 companies.
    - Months 1-2: Fortune 500 Enterprise Architecture
      - Ultra-Scale System Architecture
      - Enterprise Cloud & Multi-Cloud Mastery
      - AI/ML Systems at Enterprise Scale
      - Financial Systems & Fintech Architecture
    - Month 3: Critical Infrastructure & Security
      - National Security & Defense Systems
      - Healthcare & Biotech Systems
      - Space Tech & Future Systems
      - Phase 1 Enterprise Delivery
      - Transition to Industry Leadership
    - Months 4-6: Building Tech Empires
      - Unicorn Startup Engineering
      - Venture Building & Tech Investing
      - Enterprise Consulting & $1M Contracts
      - Tech Media Empire & Influence
      - Phase 2 Empire Launch
  - PHASE 2: Industry Disruption & Market Domination (Months 4-6, Weeks 14-26)
    Build industry-disrupting products, command the market, and establish yourself as a tech mogul with multiple revenue streams.
    - Months 4-5: Market Domination Strategies
      - Monopoly Building & Platform Domination
      - Deep Tech & Frontier Innovation
      - Government & Defense Contracting
      - Private Equity & Acquisition
      - AI Platform & Agent Infrastructure
    - Month 6: Global Expansion & Empire Building
      - International Business & Expansion
      - IPO Preparation & Public Markets
      - Wealth Management & Asset Building
      - Industry Influence & Power
      - Phase 2 Global Summit
    - Months 7-9: Tech Mogul & Industry Pioneer
      - Billionaire Mindset & Strategies
      - Tech Dynasty Building
      - Philanthropy & Global Impact
      - Historical Legacy & Immortality
      - Phase 3 Coronation
  - PHASE 3: Tech Mogul & Industry Revolution (Months 7-9, Weeks 27-39)
    Ascend to the pinnacle of tech leadership. Build empires, shape industries, and leave an indelible mark on the world.
    - Months 7-8: Empire Architecture
      - Conglomerate Building
      - Market Maker & Exchange Building
      - Infrastructure Monopolies
      - Geopolitical Technology
      - Space Economy Leadership
    - Month 9: Ultimate Achievement
      - Technological Singularity Preparation
      - Civilization Scale Systems
      - Ultimate Wealth & Power
      - Immortal Legacy Creation
      - Phase 3 Ascension
    - Months 10-12: Transcendent Leadership
      - The Alpha Network Effect
      - The Alpha Revolution
      - The Alpha Sisterhood
      - The Alpha Legacy
      - The Final Transformation
  - PHASE 4: Universal Domination & Eternal Legacy (Months 10-12, Weeks 40-52)
    Transcend normal boundaries. Build empires that span industries, create technologies that define humanity's future, and establish an eternal legacy.
    - Months 10-11: The Alpha Apex
      - Multi-Planetary Technology Empire
      - Quantum Supremacy & Computing Future
      - Biological & Consciousness Engineering
      - Reality Engineering & Simulation
      - The Alpha Singularity
    - Month 12: The Alpha Ascension
      - Ultimate Preparation & Summit
      - The Alpha Summit
      - The Coronation
      - The New Beginning
      - Alpha Eternity
    - Beyond Alpha: Infinite Dominion
      - The Eternal Empire
      - Universal Expansion
      - The Alpha Multiverse
      - Alpha Infinity
    - The Alpha Omega
      - Beginning and End
      - The Final Form
      - ALPHA ETERNAL

**Projects students build:** Design Twitter-scale messaging system; Build Netflix-level video streaming architecture; Create Uber's global dispatch system; Implement Google-scale search infrastructure; Migrate Fortune 500 to cloud (real project); Build multi-cloud platform for enterprise; Design $10M+ cost optimization strategy; Implement global compliance framework; Build TikTok-scale recommendation system; Create enterprise fraud detection saving $100M; Implement real-time translation for 50 languages; Design autonomous vehicle ML pipeline; Build Visa-scale payment network; Create high-frequency trading platform; Design central bank digital currency system - plus 211 more on the course page.

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

### App Development Course: Build Mobile & Web Apps From Zero

`/courses/complete-app-development-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Professional App Developer

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
    - Month 6: React Native & Alternative Platforms
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
  - PHASE 4: Publishing, Monetization & App Business (Months 10-12, Weeks 40-52)
    Master app publishing, monetization strategies, marketing, analytics, and running an app business.
    - Months 10-11: App Store Publishing & Monetization
      - App Store Publishing (iOS)
      - Google Play Store Publishing (Android)
      - App Monetization Strategies
      - Analytics & User Engagement
      - App Performance & Optimization
    - Month 12: Marketing, Business & Career
      - App Marketing & User Acquisition
      - App Maintenance & Updates
      - Building an App Business
      - Career Development in App Development
      - Emerging Technologies & Future
    - FINAL CAPSTONE & LAUNCH
      - Final Capstone Planning
      - Final Capstone Development
      - Final Capstone Launch
      - Post-Launch & Career Success

**Projects students build:** Environment setup checklist; Simple 'Hello World' app; App idea documentation; Wireframe sketches (paper); Git repository creation; Calculator logic; Temperature converter; Todo list logic (console); Quiz game logic; BMI calculator logic; Simple games (number guessing); Design system in Figma; App UI mockups (5 different apps); Icon set creation; User flow diagrams - plus 223 more on the course page.

### Artificial Intelligence Course: Classical AI to AGI

`/courses/artificial-intelligence-complete-masterclass-college` · 12 months (52 weeks) · Complete Beginner to AI Research Scientist

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
  - PHASE 4: Advanced AI, AGI & Research (Months 10-12, Weeks 40-52)
    Master cognitive architectures, AGI concepts, AI philosophy, ethics, cutting-edge research, and career preparation.
    - Months 10-11: Cognitive AI & AGI
      - Cognitive Architectures
      - Artificial General Intelligence (AGI) Concepts
      - AI Philosophy & Theory of Mind
      - AI Safety & Alignment
      - AI Ethics & Societal Impact
    - Month 12: Research, Innovation & Career
      - AI Research Methodology
      - Cutting-Edge AI Research Areas
      - AI in Industry & Applications
      - Career Paths in AI Research
      - Future of AI
    - FINAL CAPSTONE & RESEARCH LAUNCH
      - Novel AI System Design
      - Implementation & Experimentation
      - Documentation & Publication
      - Final Defense & Career Launch

**Projects students build:** Simple reflex agent implementation; Model-based agent for grid world; Agent environment simulator; AI timeline and evolution visualization; Turing Test chatbot (rule-based); 8-puzzle solver with BFS/DFS; Maze solver with multiple algorithms; Route finding system (city maps); N-Queens problem solver; Missionaries and Cannibals problem; Search visualization tool; Performance comparison framework; A* pathfinding implementation; 15-puzzle solver with pattern databases; Route optimization with A* - plus 262 more on the course page.

### Backend Development for Teens: APIs, Databases & Cloud

`/courses/backend-coding-masterclass-for-teens` · 12 months (52 weeks) · Complete Beginner to Professional Backend Developer

  - PHASE 1: Foundation & Programming Basics (Months 1-3, Weeks 1-13)
    Start from absolute zero. Learn how the internet works, master programming fundamentals, and build your first servers.
    - Months 1-2: Internet Basics & Programming Fundamentals
      - How The Internet Actually Works
      - JavaScript Fundamentals - The Language of Backend
      - Python Basics - Alternative Backend Language
      - Algorithms & Problem Solving
    - Month 3: Your First Backend Server
      - Node.js - JavaScript on Servers
      - Express.js - Professional Backend Framework
      - RESTful API Design
  - PHASE 2: Databases & Data Management (Months 4-6, Weeks 14-26)
    Master databases - where all the data lives. Learn to store millions of users, posts, and manage data like tech giants.
    - Months 4-5: Database Fundamentals
      - Introduction to Databases
      - MongoDB - NoSQL for Modern Apps
      - PostgreSQL - Powerful SQL Database
      - Redis & Caching
      - Database Integration & ORMs
    - Month 6: Authentication & Security
      - User Authentication Systems
      - API Security & Best Practices
      - File Uploads & Media Handling
      - Email & Notifications
      - Payment Integration
    - Month 6 Review & Advanced Features
      - Real-time Features & WebSockets
      - Advanced API Features
      - Search & Analytics
      - Background Jobs & Scheduling
      - Phase 2 Capstone Project
  - PHASE 3: Advanced Backend & System Design (Months 7-9, Weeks 27-39)
    Level up to advanced backend concepts. Learn microservices, system design, and how to build scalable systems.
    - Months 7-8: Microservices & Advanced Architecture
      - Microservices Architecture
      - Message Queues & Event Systems
      - System Design Fundamentals
      - Advanced Database Concepts
      - Performance & Optimization
    - Month 8: Testing & Quality Assurance
      - Testing Fundamentals
      - API & Integration Testing
      - Code Quality & Best Practices
      - Monitoring & Logging
      - Month 8 Project Integration
    - Month 9: Advanced Topics & Specializations
      - Serverless & Cloud Functions
      - AI/ML Integration for Backend
      - AI Backends & Agent APIs
      - Advanced Security Topics
      - Phase 3 Capstone Project
  - PHASE 4: DevOps, Cloud & Production (Months 10-12, Weeks 40-52)
    Master deployment, cloud services, DevOps practices, and build production-ready systems.
    - Months 10-11: Docker & Cloud Deployment
      - Docker Fundamentals
      - Kubernetes Basics
      - AWS Cloud Services
      - CI/CD Pipelines
      - Alternative Cloud Providers
    - Month 11: Infrastructure & Scaling
      - Infrastructure as Code
      - Scaling & Performance
      - Site Reliability Engineering
      - Advanced Monitoring & Observability
      - Month 11 Integration Week
    - Month 12: Final Projects & Career Launch
      - Industry Best Practices
      - Final Capstone - Planning
      - Final Capstone - Development
      - Final Capstone - Production
    - Week 51-52: Career Launch & Beyond
      - Portfolio & Personal Brand
      - Interview Preparation
      - Graduation & Next Steps

**Projects students build:** Draw your favorite app's architecture; Set up your ultimate coding environment; Create your GitHub profile README; Discord bot message generator; Minecraft inventory manager; YouTube stats calculator; Grade calculator with GPA; Instagram follower tracker; Automated homework organizer; Game high score manager; Weather data analyzer; Build TikTok's recommendation algorithm (simplified); Create a matchmaking system for games; Implement Instagram's hashtag search; Design a tournament bracket system - plus 194 more on the course page.

### Block-Based App Development: Build Apps With No Code

`/courses/block-coding-app-development-masterclass` · 6 months (26 weeks) · Complete Beginner to Advanced App Creator

  - PHASE 1: Foundation & Logic Building (Months 1-2, Weeks 1-8)
    Master the fundamentals of programming logic using visual blocks. Start with Scratch to understand core concepts, then create your first mobile apps.
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
      - Month 3-4 Review & Mini Projects
    - Months 5-6: Advanced Features & Publishing
      - APIs and Web Services
      - Game Development Advanced
      - AI and Machine Learning Blocks
      - IoT and Hardware Integration
      - Publishing and Monetization
  - PHASE 2: Specialized Tracks (Choose Your Path)
    Select specialized tracks based on interest: Educational Apps, Business Tools, Games, or Creative Apps.
    - Educational Technology Track
      - Educational App Design
      - STEM and Coding Education
      - Business and Productivity Track
      - E-commerce and Marketplace Apps
      - Game Development Specialization
    - Creative and Media Apps Track
      - Creative Tools Development
      - Social Media and Communication
      - Health and Fitness Apps
      - Entertainment and Lifestyle
      - Augmented Reality with Blocks
    - Professional Development Track
      - Advanced Thunkable Features
      - Cross-Platform Development
      - App Testing and Quality
      - Transition to Text Coding
      - Final Capstone Project
  - BONUS CONTENT: Advanced Topics & Emerging Technologies
    Optional advanced modules for continued learning and specialization.
    - Emerging Technologies
      - AI Features in Your Apps
      - Advanced AI Integration
      - Virtual and Mixed Reality
      - Enterprise and B2B Apps
      - App Entrepreneurship
    - Teaching and Content Creation
      - Becoming a Block Coding Instructor
      - Content Creation for App Developers
      - Open Source and Community
      - Accessibility and Inclusive Design
      - Future of No-Code Development
    - Specialized Industry Applications
      - Healthcare and Medical Apps
      - Financial Technology Apps
      - Government and Civic Apps
      - Real Estate and Property Apps
      - Final Master Certification
  - LIFETIME LEARNING: Continuous Updates & Community
    Ongoing support, new content, and community engagement for lifetime learners.
    - Community Projects & Collaboration
      - Team Development Projects
      - Advanced Workshops & Masterclasses
      - Mentorship and Teaching Others
      - Research and Innovation
      - Platform Updates & New Features
    - Professional Networking & Growth
      - Building Professional Network
      - Freelancing and Consulting
      - App Business Development
      - Industry Certifications
      - Global Opportunities
    - Lifetime Support & Resources
      - Alumni Network
      - Continuous Content Updates
      - Special Interest Groups
      - Future Learning Paths
    - Success Celebration & Next Steps
      - Portfolio Showcase
      - Graduation & Certification
      - Your Journey Continues

**Projects students build:** Animated greeting card; Interactive story with characters; Simple animation sequence; Musical instrument app; Calculator with visual blocks; Quiz game with scoring; Number guessing game; Drawing app with controls; Maze navigation game; Platformer game with jumping; Space shooter with enemies; Puzzle game with levels; Hello World mobile app; Personal information form; Multi-screen navigation app - plus 221 more on the course page.

### Business & Finance Mathematics: Investment to Risk

`/courses/complete-business-finance-mathematics-mastery` · 12 months (52 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Business Mathematics Foundations (Months 1-3, Weeks 1-13)
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
  - PHASE 2: Statistical Analysis & Economic Mathematics (Months 4-6, Weeks 14-26)
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
  - PHASE 3: Investment Mathematics & Risk Management (Months 7-9, Weeks 27-39)
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
  - PHASE 4: Advanced Finance & Quantitative Methods (Months 10-12, Weeks 40-52)
    Master derivatives pricing, quantitative finance, financial modeling, and advanced corporate finance.
    - Months 10-11: Derivatives & Structured Products
      - Options Mathematics
      - Futures & Forwards
      - Swaps & Interest Rate Derivatives
      - Credit Derivatives & Structured Finance
      - Volatility & Advanced Greeks
    - Month 11-12: Quantitative Finance & Modeling
      - Financial Modeling Excellence
      - Algorithmic Trading Mathematics
      - Corporate Finance Advanced
      - Fintech & Blockchain Finance
      - ESG & Sustainable Finance
    - Professional Applications & Certification
      - Industry Case Studies
      - Professional Certifications Prep
      - Financial Technology Tools
      - Career Development & Networking
    - Final Projects & Certification
      - Capstone Project - Part 1
      - Capstone Project - Part 2 & Presentation
      - Final Assessment & Certification

**Projects students build:** Profit margin calculator for business; Sales commission tracker; Break-even analysis tool; Compound interest calculator; Investment growth simulator; Currency converter with live rates; Loan amortization calculator; Mortgage comparison tool; Retirement planning calculator; Financial ratio analyzer; Company comparison dashboard; Industry benchmark tool; Depreciation schedule generator; Inventory management calculator; Cash flow statement builder - plus 113 more on the course page.

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

### C++ Course for Teens Online: Games & Competitive Coding

`/courses/cpp-programming-masterclass-for-teens` · 12 months (52 weeks) · Complete Beginner to Advanced C++ Developer

  - PHASE 1: C++ Fundamentals & First Programs (Months 1-3, Weeks 1-13)
    Start from absolute zero and write your first C++ programs. Build games, solve puzzles, and understand how computers really work.
    - Month 1: C++ Basics & Setup
      - Introduction to C++ & Programming
      - Variables & Data Types
      - Control Flow & Decision Making
      - Loops & Repetition
    - Month 2: Functions & Arrays
      - Functions - Code Reusability
      - Arrays & Strings
      - Pointers & References
      - Dynamic Memory Management
      - Month 3: Object-Oriented Basics
    - Month 3: Structures & File I/O
      - Structures & Enums
      - File Input/Output
      - Error Handling & Debugging
      - STL Basics - Standard Template Library
      - Phase 1 Capstone Project
  - PHASE 2: Object-Oriented Programming & Data Structures (Months 4-6, Weeks 14-26)
    Master OOP concepts and build complex data structures. Create game engines and advanced applications.
    - Months 4-5: Advanced OOP
      - Inheritance & Polymorphism
      - Advanced Class Features
      - Templates & Generic Programming
      - Design Patterns
      - Smart Pointers & Modern C++
    - Month 6: Data Structures
      - Linear Data Structures
      - Trees & Graphs
      - Hash Tables & Sets
      - Algorithms - Searching & Sorting
      - Advanced Algorithms
    - Phase 2 Capstone & STL Mastery
      - STL Containers Deep Dive
      - STL Algorithms & Functional
      - Multithreading Basics
      - Memory Management Mastery
      - Phase 2 Capstone Project
  - PHASE 3: Graphics, Games & System Programming (Months 7-9, Weeks 27-39)
    Dive into graphics programming, game development, and system-level programming.
    - Months 7-8: Graphics Programming
      - 2D Graphics with SFML
      - Advanced 2D Graphics
      - OpenGL Basics
      - Game Physics
      - Audio Programming
    - Month 9: System Programming
      - Operating System Interfaces
      - Network Programming
      - Database Programming
      - Embedded & Arduino
      - Phase 3 Integration
    - Phase 3 Capstone & Specialization
      - Game Engine Architecture
      - AI for Games
      - Optimization & Performance
      - Modern C++ Features
      - Phase 3 Capstone Project
  - PHASE 4: Competitive Programming & Career Launch (Months 10-12, Weeks 40-52)
    Master competitive programming, build portfolio projects, and prepare for careers or college.
    - Months 10-11: Competitive Programming
      - Competitive Programming Foundations
      - Dynamic Programming
      - Graph Algorithms Advanced
      - Advanced Data Structures
      - Mathematics for CP
    - Month 11: Advanced Topics & Projects
      - String Algorithms
      - Computational Geometry
      - Machine Learning with C++
      - Cryptography Basics
      - Compiler Design Basics
    - Month 12: Portfolio & Career
      - Portfolio Development
      - Interview Preparation
      - Open Source & Collaboration
      - Final Project Development
    - Week 51-52: Graduation & Launch
      - Final Project Completion
      - Career Launch
      - Graduation & Celebration

**Projects students build:** Hello World variations; ASCII art generator; Personal introduction program; Simple conversation bot; Calculator with all operations; Temperature converter; Random dice roller for D&D; Simple RPG stat calculator; Text adventure game; Grade calculator with letter grades; Rock-Paper-Scissors game; Simple AI decision maker; Pattern generator program; Prime number finder; Multiplication table generator - plus 225 more on the course page.

### C++ Programming Masterclass: Zero to System Programmer

`/courses/cpp-programming-complete-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Expert C++ Developer

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
  - PHASE 4: Specialization & Career Launch (Months 10-12, Weeks 40-52)
    Choose your specialization path and prepare for professional C++ development careers.
    - Months 10-11: Specialization Tracks
      - Game Development with C++
      - High-Performance Computing
      - Financial Systems Development
      - Modern C++ Best Practices
      - Open Source Contribution
    - Month 12: Career Preparation & Launch
      - Interview Preparation
      - Portfolio Development
      - Career Paths & Specializations
      - Professional Skills
      - Final Project & Graduation
    - Continuous Learning & Excellence
      - Staying Current with C++
      - Advanced Certifications
      - Building C++ Products
      - Mastery & Leadership

**Projects students build:** Hello World variations; Simple calculator with basic operations; Temperature converter; Personal information display program; Advanced calculator with bitwise operations; Data type size explorer; Number system converter (binary, decimal, hex); Bitwise flag management system; Menu-driven banking system; Number guessing game; Prime number generator; Recursive factorial and Fibonacci calculator; Pattern printing programs; Dynamic array implementation; String manipulation library - plus 185 more on the course page.

### Canva & AI Design Course: Zero to Professional Designer

`/courses/canva-ai-design-masterclass` · 6 months (26 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Design Foundation & Canva Mastery (Months 1-2, Weeks 1-8)
    Build strong design fundamentals while mastering Canva. Learn design principles, typography, color theory, and create your first professional designs.
    - Months 1-2: Design Fundamentals & Canva Essentials
      - Introduction to Design & Canva Setup
      - Design Principles & Composition
      - Typography & Color Theory
      - Canva Advanced Features & Templates
    - Months 1-2 Continued: Social Media & Marketing Design
      - Social Media Design Mastery
      - Marketing Materials & Print Design
      - Logo Design & Brand Identity
      - Photo Editing & Manipulation
      - Months 1-2 Assessment & Portfolio
    - Phase 1 Projects & Specialization
      - Real Client Project Simulation
      - Industry Specialization Tracks
      - Advanced Canva Techniques
      - Design Systems & Consistency
      - Phase 1 Final Project
  - PHASE 2: Advanced Design & AI Tools Integration (Months 3-4, Weeks 9-17)
    Master advanced photo editing, video creation, and integrate cutting-edge AI design tools into your workflow.
    - Months 3-4: AI Design Tools & Advanced Photo Editing
      - Introduction to AI Design Tools
      - Advanced Midjourney Mastery
      - AI-Powered Photo Editing
      - Video Editing Fundamentals
      - Advanced Video & Animation
    - Months 3-4: Professional Video & Content Creation
      - Content Creation Workflow
      - AI Video Generation
      - Advanced AI Prompt Engineering
      - 3D Design & AR Basics
      - Phase 2 Integration Project
    - Months 3-4: Specialization & Advanced Techniques
      - UI/UX Design Basics
      - Motion Design & Animation
      - Advanced Brand Design
      - Print Production & Specifications
      - Phase 2 Capstone Project
  - PHASE 3: Professional Practice & Business (Months 5-6, Weeks 18-26)
    Launch your design career with advanced business skills, client management, and professional portfolio development.
    - Months 5-6: Freelancing & Business Setup
      - Freelance Business Fundamentals
      - Pricing & Proposals
      - Client Management & Communication
      - Marketing Your Design Services
      - Platform Mastery & Passive Income
    - Months 5-6: Advanced Skills & Specialization
      - Web Design & Development Basics
      - Advanced AI Workflows
      - Data Visualization & Infographics
      - Photography for Designers
      - Emerging Technologies
    - Months 5-6: Portfolio & Career Launch
      - Portfolio Development
      - Job Search & Applications
      - Advanced Client Projects
      - Specialization Deep Dive
      - Final Capstone & Graduation
  - BONUS PHASE: Lifetime Learning & Advanced Mastery
    Continuous updates with new tools, techniques, and industry developments. Access to masterclasses and advanced workshops.
    - Ongoing Advanced Workshops
      - AI Tools Updates
      - Design Trends & Innovation
      - Business Growth Strategies
      - Teaching & Course Creation
      - Community & Networking
    - Specialized Masterclasses
      - Entertainment Industry Design
      - Luxury & Premium Design
      - Cultural & Social Impact Design
      - Technical & B2B Design
      - Personal Brand Mastery
    - Expert Specializations
      - Design Psychology & Neuroscience
      - Design Research & Strategy
      - Global Design & Localization
      - Future of Design
    - Lifetime Success Program
      - Alumni Success Program
      - Continuous Updates
      - Career Advancement Support

**Projects students build:** Create personal introduction card; Design simple social media post; Make basic business card; Redesign poorly designed flyer; Create balanced poster design; Design minimalist quote graphics; Build visual hierarchy infographic; Typography poster with font hierarchy; Brand color palette creation; Mood board with color themes; Restaurant menu with proper typography; Complete brand kit setup; Create reusable template set; Design animated social media post; Multi-page presentation design - plus 217 more on the course page.

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

`/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8` · 9 months (40 weeks, expandable to 12-month mastery track) · Absolute Beginner (Class 3-5) to Intermediate AI Project Builder (Class 6-8)

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
      - AI Ethics, Bias & Responsible AI (CBSE Mandatory Module)
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
      - Graduation & Lifetime Alumni Induction

**Projects students build:** Create a 'How I Get Ready for School' step-by-step poster; Break down making Maggi into 10 precise steps (Decomposition); CT Thinking Diary, daily entries for a week; Decompose your favorite board game into its smallest rules; Plan a pretend birthday party using only decomposition; Create a decomposition poster for any Class subject; Pattern hunt journal, photograph 20 patterns around you; Design a Rangoli using mathematical patterns; Create a pattern-based memory game; Write the 'Perfect Algorithm' for making your favorite food; Design a flowchart adventure story; Program your family to be 'robots' and follow your algorithm; Animated birthday card for a family member; Dancing cat in 5 different backgrounds; Digital storybook cover with your name - plus 75 more on the course page.

### CBSE Computational Thinking & AI for Teens (Class 9-12)

`/courses/cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843` · 12 months intensive (extendable to 4-year board track for Class 9 → Class 12) · Complete Beginner to CBSE AI Board Topper + Industry-Ready AI Developer

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
      - Graduation + Lifetime Alumni Induction

**Projects students build:** Write a 500-word reflective essay on 'AI in my life'; Create a SMART goals worksheet for the AI course; Group presentation: 'Barriers to communication in AI teams'; Set up a cloud backup of your AI work (Google Drive); Interview a local entrepreneur (1-page report); Green AI poster, connect 3 SDGs to AI; AI Spotter, identify 50 AI systems in daily life; AI Timeline infographic (Canva); Debate: 'Narrow AI vs General AI, will we ever reach AGI?'; Apply the full 5-stage Project Cycle to a real school problem; Write a 10-page CBSE-format AI Project Report; Present project in board-exam viva style; BMI Calculator; Temperature converter; Interactive quiz on AI concepts - plus 66 more on the course page.

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

### College Mathematics: Calculus to Real Analysis & Beyond

`/courses/college-mathematics-complete-masterclass` · 24 months (104 weeks) · High School Graduate to Advanced Undergraduate Mathematics

  - PHASE 1: Mathematical Foundations (Months 1-6, Weeks 1-26)
    Build rock-solid foundations in calculus, linear algebra, and mathematical reasoning with proof writing.
    - Months 1-2: Single Variable Calculus I
      - Limits and Continuity
      - Differentiation
      - Applications of Derivatives
      - Integration Fundamentals
    - Months 3-4: Calculus II & Linear Algebra I
      - Advanced Integration Techniques
      - Sequences and Series
      - Linear Algebra: Vectors and Matrices
      - Systems of Linear Equations
      - Mathematical Proof Writing
    - Months 5-6: Advanced Linear Algebra & Vector Calculus
      - Eigenvalues and Eigenvectors
      - Vector Spaces and Linear Transformations
      - Multivariable Functions and Partial Derivatives
      - Optimization and Vector Fields
      - Phase 1 Capstone Project
  - PHASE 2: Core Mathematics (Months 7-12, Weeks 27-52)
    Master multivariable calculus, differential equations, discrete mathematics, and probability theory.
    - Months 7-8: Multiple Integration & ODEs
      - Double and Triple Integrals
      - Line and Surface Integrals
      - First-Order Differential Equations
      - Higher-Order Linear ODEs
      - Laplace Transforms
    - Months 9-10: Discrete Mathematics
      - Set Theory and Relations
      - Combinatorics
      - Graph Theory
      - Number Theory
      - Boolean Algebra and Logic
    - Months 11-12: Probability and Statistics
      - Probability Theory
      - Joint Distributions and Limit Theorems
      - Statistical Inference
      - Stochastic Processes
      - Phase 2 Capstone Project
  - PHASE 3: Advanced Pure Mathematics (Months 13-18, Weeks 53-78)
    Master real analysis, abstract algebra, topology, complex analysis, and advanced mathematical theory.
    - Months 13-14: Real Analysis
      - Metric Spaces and Sequences
      - Limits and Continuity in R^n
      - Differentiation Theory
      - Riemann Integration
      - Sequences and Series of Functions
    - Months 15-16: Abstract Algebra
      - Group Theory
      - Ring Theory
      - Field Theory
      - Linear Algebra (Abstract)
      - Module Theory
    - Months 17-18: Topology & Complex Analysis
      - General Topology
      - Algebraic Topology Introduction
      - Complex Analysis
      - Advanced Complex Analysis
      - Phase 3 Capstone Project
  - PHASE 4: Applied Mathematics & Research (Months 19-24, Weeks 79-104)
    Master PDEs, numerical analysis, optimization, mathematical modeling, and conduct original research.
    - Months 19-20: Partial Differential Equations
      - First-Order PDEs
      - Second-Order Linear PDEs
      - Transform Methods for PDEs
      - Numerical Methods for PDEs
      - Nonlinear PDEs
    - Months 21-22: Numerical Analysis & Scientific Computing
      - Numerical Linear Algebra
      - Interpolation and Approximation
      - Numerical Integration and Differentiation
      - Numerical Optimization
      - Fast Algorithms
    - Month 23: Mathematical Modeling & Applications
      - Mathematical Biology
      - Mathematical Finance
      - Data Science Mathematics
      - Fluid Dynamics & Continuum Mechanics
    - Month 24: Research & Career Preparation
      - Mathematical Research Project
      - Advanced Topics Seminar
      - Career Paths & Future Learning

**Projects students build:** Epsilon-delta proof visualizer; Limit calculator implementation; Continuity explorer interactive tool; Derivative visualizer application; Automatic differentiation engine; Physics motion simulator; Optimization problem solver; Curve sketching software; Newton's method visualizer; Riemann sum visualizer; Numerical integration calculator; Volume calculator for solids of revolution; Advanced integration solver; Numerical methods comparison tool; Physics applications simulator - plus 160 more on the course page.

### Competitive Programming Course Online: Crack Codeforces

`/courses/competitive-programming-masterclass-college` · 6 months (26 weeks) · Complete Beginner to Expert Competitive Programmer

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
      - Phase 1 Assessment
    - Months 3-4: Trees, Graphs & Dynamic Programming
      - Tree Algorithms
      - Graph Algorithms Fundamentals
      - Shortest Paths & MST
      - Dynamic Programming Basics
      - Phase 2 Assessment
  - PHASE 2: Advanced Algorithms & Contest Strategy (Months 3-4, Weeks 9-17)
    Master advanced algorithms, dynamic programming patterns, and develop contest-winning strategies.
    - Month 3: Advanced Dynamic Programming
      - DP Optimization Techniques
      - Bitmask DP & DP on Trees
      - String Algorithms
      - Advanced Graph Algorithms
      - Game Theory
    - Month 4: Data Structures & Optimization
      - Advanced Data Structures
      - Computational Geometry
      - Advanced Number Theory
      - Optimization & Heuristics
      - Interactive & Randomized
    - Months 5-6: Contest Mastery & Peak Performance
      - Contest Strategy & Time Management
      - Speed Programming & Templates
      - Team Programming (ICPC Style)
      - Platform-Specific Mastery
      - Phase 3 Final Assessment
  - PHASE 3: Expert Level & Specializations (Months 5-6, Weeks 18-26)
    Master expert-level algorithms, specialized topics, and achieve competitive programming excellence.
    - Month 5: Expert Algorithms & Techniques
      - FFT & Polynomial Algorithms
      - Linear Algebra in CP
      - Advanced String Structures
      - Advanced Graph Theory
      - Approximation Algorithms
    - Month 6: Peak Performance & Competition
      - Research & Cutting Edge
      - Competition Preparation
      - Teaching & Mentoring
      - Career & Opportunities
      - Final Graduation
    - Lifetime Resources & Continuous Learning
      - Advanced Problem Archives
      - Community & Contribution
      - Research & Innovation
      - Specialized Domains
      - Success Stories & Inspiration
  - ELITE TRACK: Beyond Expert Level
    Optional advanced paths for those aiming for the absolute top
    - Grandmaster Path
      - Rating 2400+ Strategy
      - International Competition
      - Problem Setting Mastery
      - Research Excellence
      - Legacy Building
    - Professional Applications
      - Quantitative Trading
      - Tech Giant Excellence
      - Startup & Innovation
      - Education & Impact
      - Lifetime Excellence
    - Resources & References
      - Book References
      - Online Resources
      - Tools & Utilities
      - Templates & Libraries
    - Final References
      - Contest Cheat Sheets
      - Achievement Tracking
      - Future Roadmap

**Projects students build:** CP template creation; STL practice problems set; Fast I/O benchmarking; Complexity analyzer tool; Algorithm visualization; Problem approach templates; Data structure library; Custom implementations; Performance comparison tool; Backtracking solver framework; Optimization comparisons; Contest problem generator; Number theory library; Prime utilities toolkit; Modular arithmetic calculator - plus 161 more on the course page.

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

### Complete Data & Analytics Mathematics Masterclass - Statistics to Machine Learning

`/courses/data-analytics-mathematics-masterclass` · 24 months (104 weeks) · Basic Math Knowledge to Advanced Data Science Mathematics

  - PHASE 1: Mathematical Foundations for Data Science (Months 1-6, Weeks 1-26)
    Build rock-solid foundations in statistics, probability, and linear algebra essential for data science.
    - Months 1-2: Descriptive Statistics & Data Fundamentals
      - Introduction to Statistical Thinking
      - Measures of Central Tendency and Spread
      - Data Visualization and Graphical Analysis
      - Probability Fundamentals
    - Months 3-4: Probability Distributions & Linear Algebra Basics
      - Discrete Probability Distributions
      - Continuous Probability Distributions
      - Linear Algebra for Data Science - Vectors
      - Linear Algebra for Data Science - Matrices
      - Eigenvalues and PCA Foundations
    - Months 5-6: Statistical Inference & Hypothesis Testing
      - Sampling Distributions and CLT
      - Confidence Intervals
      - Hypothesis Testing Fundamentals
      - ANOVA and Multiple Comparisons
      - Phase 1 Capstone Project
  - PHASE 2: Core Analytics & Machine Learning Mathematics (Months 7-12, Weeks 27-52)
    Master regression, classification, clustering, and core machine learning mathematics.
    - Months 7-8: Regression Analysis
      - Simple Linear Regression
      - Multiple Linear Regression
      - Regularized Regression
      - Generalized Linear Models
      - Nonparametric Regression
    - Months 9-10: Classification & Clustering
      - Classification Fundamentals
      - Tree-Based Methods
      - Support Vector Machines
      - Clustering Algorithms
      - Model Evaluation and Selection
    - Months 11-12: Optimization & Neural Network Mathematics
      - Optimization Theory for ML
      - Neural Network Fundamentals
      - Convolutional Neural Networks Mathematics
      - Recurrent Neural Networks Mathematics
      - Phase 2 Capstone Project
  - PHASE 3: Advanced Analytics & Deep Learning (Months 13-18, Weeks 53-78)
    Master Bayesian methods, deep learning, reinforcement learning, and advanced statistical techniques.
    - Months 13-14: Bayesian Statistics & Inference
      - Bayesian Fundamentals
      - Markov Chain Monte Carlo
      - Bayesian Regression and Classification
      - Hierarchical and Mixture Models
      - Bayesian Model Selection
    - Months 15-16: Deep Learning & Advanced Architectures
      - Advanced Deep Learning Theory
      - Transformers and Attention
      - Generative Models
      - Graph Neural Networks
      - Reinforcement Learning Mathematics
    - Months 17-18: Time Series & Causal Inference
      - Time Series Analysis
      - Advanced Time Series Methods
      - Causal Inference
      - Structural Equation Modeling
      - Phase 3 Capstone Project
  - PHASE 4: Big Data, Production Systems & Research (Months 19-24, Weeks 79-104)
    Master big data analytics, production ML systems, experimental design, and conduct original research.
    - Months 19-20: Big Data & Distributed Analytics
      - Big Data Fundamentals
      - Scalable Machine Learning
      - Stream Processing & Real-time Analytics
      - NoSQL and NewSQL for Analytics
      - Cloud Analytics Platforms
    - Months 21-22: Experimental Design & A/B Testing
      - Design of Experiments
      - A/B Testing at Scale
      - Quasi-Experimental Methods
      - Survival Analysis
      - Longitudinal Data Analysis
    - Month 23: Advanced Topics & Specializations
      - Spatial Statistics & GIS
      - Text Analytics & NLP Mathematics
      - Computer Vision Mathematics
      - Recommendation Systems
    - Month 24: MLOps, Ethics & Career Preparation
      - MLOps & Production Systems
      - Ethics, Fairness & Interpretability
      - Research & Career Development

**Projects students build:** Design a data collection strategy; Data quality assessment tool; Sampling simulation study; Statistical calculator from scratch; Outlier detection system; Interactive visualization dashboard; Build comprehensive EDA toolkit; Create interactive data dashboard; Visualization best practices guide; Probability simulator; Bayes theorem calculator; Monte Carlo estimation tool; Distribution calculator and visualizer; A/B test simulator; Discrete event simulator - plus 162 more on the course page.

### Computer Science Class 11-12: CBSE Python & ICSE/ISC Java

`/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course` · 24 months (Class 11 + Class 12 full syllabus) · Class 11 Beginner to Class 12 Board Exam Ready

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

### Creative Coding & Animation: Content Creator Course

`/courses/creative-coding-animation-mastery` · 6 months (26 weeks) · Beginner to Professional Content Creator

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
  - Month 4: 3D Animation & Advanced Visual Effects
    Master 3D animation, advanced VFX, and professional post-production.
    - 3D Animation Fundamentals with Blender
    - Character Animation & Rigging in 3D
    - Advanced VFX & Compositing
    - Motion Capture & Virtual Production
  - Month 5: Social Media Mastery & Platform Optimization
    Master content creation for every platform, viral strategies, and audience growth.
    - Instagram & Reels Mastery
    - TikTok & Short-Form Dominance
    - YouTube & Long-Form Content
    - Multi-Platform Strategy & Analytics
  - Month 6: Professional Portfolio & Client Projects
    Build professional portfolio, work on client projects, and launch your creative career.
    - Portfolio Development & Personal Branding
    - Client Project Management
    - Industry Specialization
    - Advanced Techniques & Emerging Trends
    - Final Capstone Project
    - Graduation & Career Launch

### Creative Media & Design for Teens: Photo, Video & Editing

`/courses/creative-media-design-masterclass-teens` · 12 months (52 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Foundation & Core Creative Skills (Months 1-6, Weeks 1-26)
    Build solid creative foundations. Learn design principles, master photo editing, create videos, and start building your online presence.
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
  - PHASE 2: Advanced Creative Mastery & Professional Skills (Months 7-12, Weeks 27-52)
    Master advanced video effects, motion graphics, 3D design, professional workflows, and build your creative business.
    - Months 7-8: Advanced Video & Visual Effects
      - Advanced Premiere Pro Techniques
      - After Effects Fundamentals
      - Visual Effects & Compositing
      - Motion Graphics Design
      - 3D Design Introduction
    - Months 9-10: Professional Photography & Advanced Design
      - Professional Photography Editing
      - Advanced Photoshop Techniques
      - Animation & GIF Creation
      - Audio Production for Video
      - Live Streaming & Real-Time Content
    - Months 11-12: Business Skills & Career Launch
      - Freelancing & Client Work
      - Building Your Creative Brand
      - Advanced Portfolio & Showreel
      - Industry Trends & Future Skills
      - Final Showcase & Career Launch
  - PHASE 3: Placeholder - Structure Required by Template
    This phase is not applicable for the 1-year creative course but included to maintain JSON structure integrity.
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
  - PHASE 4: Placeholder - Structure Required by Template
    This phase is not applicable for the 1-year creative course but included to maintain JSON structure integrity.
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A

**Projects students build:** Set up complete creative workstation; Create organized folder structure for projects; Design a personal creative brand/logo; Edit 10 personal photos to perfection; Create viral meme templates; Design custom phone wallpapers; Create surreal photo manipulation artwork; Professional portrait retouching project; Design Instagram post templates; 30-day Instagram feed makeover; Create viral TikTok photo series; Mobile photography portfolio; Shoot and plan first short film (2-3 minutes); Create a day-in-my-life vlog; Record product review video - plus 73 more on the course page.

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

### Data Analysis Course: From Excel to Machine Learning

`/courses/data-analysis-mastery-course-college` · 6 months (26 weeks) · Complete Beginner to Professional Analyst

  - PHASE 1: Foundation & Excel Mastery (Months 1-2, Weeks 1-8)
    Build strong foundations in data concepts, statistics, and become an Excel power user.
    - Month 1: Data Fundamentals & Excel
      - Introduction to Data Analysis
      - Excel Fundamentals & Formulas
      - Excel Data Management
      - Excel Advanced Functions
    - Month 2: Statistics & Data Visualization in Excel
      - Statistics Fundamentals
      - Excel Data Analysis Tools
      - Data Visualization in Excel
      - Business Reporting with Excel
      - Phase 1 Assessment
    - Months 3-4: SQL & Python for Data Analysis
      - SQL Fundamentals
      - SQL Joins & Advanced Queries
      - SQL Analytics Functions
      - Python Fundamentals for Analysis
      - Phase 2 Assessment
  - PHASE 2: Advanced Python & Data Processing (Months 3-4, Weeks 9-17)
    Master Python for data analysis, pandas, data cleaning, and exploratory data analysis.
    - Month 3: Pandas & Data Manipulation
      - Pandas Fundamentals
      - Data Cleaning with Pandas
      - Data Transformation & Aggregation
      - Exploratory Data Analysis (EDA)
      - NumPy for Numerical Computing
    - Month 4: Data Visualization & Storytelling
      - Matplotlib & Seaborn
      - Interactive Visualizations
      - Business Intelligence Tools
      - Data Storytelling & Presentation
      - Advanced Analytics Techniques
    - Months 5-6: Machine Learning & Production Analytics
      - Machine Learning Fundamentals
      - Clustering & Segmentation
      - Web Analytics & Digital Marketing
      - APIs & Automation
      - Phase 3 Assessment
  - PHASE 3: Industry Applications & Career Launch (Months 5-6, Weeks 18-26)
    Master industry-specific analytics, cloud platforms, and prepare for professional roles.
    - Month 5: Industry-Specific Analytics
      - Financial Analytics
      - Healthcare Analytics
      - Retail & E-commerce Analytics
      - Supply Chain Analytics
      - HR & People Analytics
    - Month 6: Cloud Analytics & Career Preparation
      - Cloud Platforms for Analytics
      - Big Data Analytics
      - Portfolio Development
      - Interview Preparation
      - Career Launch & Networking
    - Advanced Topics & Specializations
      - Advanced Statistical Methods
      - Deep Learning for Analysts
      - Data Engineering Basics
      - Business Strategy & Analytics
      - Future of Analytics
  - CONTINUOUS LEARNING: Post-Course Resources
    Lifetime learning paths and advanced certifications
    - Professional Certifications
      - Microsoft Certifications
      - Google & AWS Certifications
      - Industry Certifications
      - Academic Pathways
      - Specialization Areas
    - Career Development
      - Freelancing & Consulting
      - Leadership & Management
      - Innovation & Research
      - Entrepreneurship
      - Lifetime Learning
    - Resources & Tools
      - Essential Tools
      - Data Sources
      - Communities & Networks
      - Best Practices
    - Quick References
      - Technical References
      - Business References
      - Career Resources

**Projects students build:** Personal data audit project; Industry analysis report; Data source catalog creation; Sales calculator dashboard; Employee timesheet system; Grade calculation spreadsheet; Customer database cleanup; Inventory management system; Survey data processor; Dynamic sales report system; Financial analysis model; HR analytics dashboard; Statistical analysis report; A/B testing simulator; Quality control dashboard - plus 159 more on the course page.

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

### Data Science Course: Zero to Job-Ready Data Scientist

`/courses/data-science-complete-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Professional Data Scientist

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
      - Advanced Kaggle Competition
      - Phase 2 Capstone Project
  - PHASE 3: Deep Learning & Advanced AI (Months 7-9, Weeks 27-39)
    Master deep learning, computer vision, NLP, and cutting-edge AI techniques.
    - Months 7-8: Deep Learning Fundamentals
      - Neural Network Fundamentals
      - Convolutional Neural Networks (CNNs)
      - Recurrent Neural Networks (RNNs)
      - Natural Language Processing
      - Advanced Deep Learning Topics
    - Month 9: Specialized Domains & Research
      - Computer Vision Projects
      - Advanced NLP Applications
      - Reinforcement Learning
      - Research Paper Implementation
      - Phase 3 Capstone Project
  - PHASE 4: MLOps, Big Data & Career Launch (Months 10-12, Weeks 40-52)
    Master production deployment, big data technologies, and prepare for data science careers.
    - Months 10-11: MLOps & Production Systems
      - MLOps Fundamentals
      - Big Data Technologies
      - Cloud Platforms for Data Science
      - Advanced Data Engineering
      - Business & Soft Skills
    - Month 12: Specialization & Career Launch
      - Choose Your Specialization
      - Portfolio & Personal Branding
      - Interview Preparation
      - Job Search & Freelancing
      - Final Project & Graduation
    - Continuous Learning & Growth
      - Staying Current
      - Advanced Certifications
      - Building Data Products
      - Giving Back

**Projects students build:** Python fundamentals practice notebook; Building a data science toolkit with functions; Automated data processing script; Image manipulation with NumPy arrays; Statistical calculator using NumPy; Matrix operations library; Performance comparison: NumPy vs pure Python; Complete EDA on retail sales dataset; Data cleaning pipeline for messy dataset; Time series analysis of stock prices; Customer behavior analysis; Statistical analysis of A/B test results; Hypothesis testing on real datasets; Building a statistical testing framework; Correlation analysis of multiple variables - plus 147 more on the course page.

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

`/courses/data-structures-algorithms-masterclass-college` · 6 months (26 weeks) · Beginner to Advanced Problem Solver

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
      - Phase 1 Assessment
    - Months 3-4: Trees, Heaps & Graphs
      - Binary Trees Fundamentals
      - Binary Search Trees & Balanced Trees
      - Heaps & Priority Queues
      - Tries & Advanced Trees
      - Phase 2 Assessment
  - PHASE 2: Graphs & Advanced Algorithms (Months 3-4, Weeks 9-17)
    Master graph algorithms, advanced problem-solving patterns, and complex algorithmic techniques.
    - Month 3: Graph Algorithms Mastery
      - Graph Fundamentals & Traversals
      - Shortest Path Algorithms
      - Minimum Spanning Trees & Network Flow
      - Advanced Graph Patterns
      - String Algorithms Advanced
    - Month 4: Dynamic Programming Mastery
      - Dynamic Programming Fundamentals
      - 2D Dynamic Programming
      - Advanced DP Patterns
      - Greedy Algorithms & Optimization
      - Backtracking & Branch and Bound
    - Months 5-6: Advanced Topics & Interview Preparation
      - Advanced Algorithms
      - System Design Basics for Interviews
      - Competitive Programming
      - Mock Interviews & Behavioral Prep
      - Phase 3 Final Assessment
  - PHASE 3: Interview Mastery & Career Launch (Months 5-6, Weeks 18-26)
    Master interview skills, tackle company-specific problems, and launch your tech career.
    - Month 5: Company-Specific Preparation
      - Google Interview Preparation
      - Amazon Interview Preparation
      - Meta (Facebook) Preparation
      - Microsoft & Apple Preparation
      - Startup & Unicorn Preparation
    - Month 6: Final Polish & Career Launch
      - Advanced Problem Patterns
      - Interview Week Simulation
      - Soft Skills & Communication
      - Career Strategy & Negotiation
      - Final Week & Graduation
    - Bonus Content: Specialized Topics
      - Machine Learning Algorithms
      - Parallel & Distributed Algorithms
      - Security & Cryptography
      - Quantum Computing Basics
      - Research & Innovation
  - CONTINUOUS LEARNING: Beyond the Course
    Lifetime learning resources and advanced pathways
    - Competitive Programming Mastery
      - Codeforces & TopCoder
      - Google Competitions
      - ICPC Preparation
      - Open Source Contributions
      - Teaching & Mentoring
    - Industry Applications
      - Algorithms in Production
      - Research & Development
      - Entrepreneurship Path
      - Specialized Domains
      - Lifetime Learning Plan
    - Resources & Community
      - Learning Resources
      - Community Building
      - Success Metrics
      - Alumni Network
    - Final Resources
      - Interview Cheat Sheets
      - Problem Categories
      - Career Milestones

**Projects students build:** Complexity analyzer tool; Problem-solving template creator; Personal progress tracker; Array manipulation library; String utilities toolkit; Pattern matching visualizer; Linked list library from scratch; Recursion visualizer; Memory stack simulator; Expression evaluator; Browser history simulator; Task scheduler with priority queue; Search algorithm visualizer; Binary search template library; Search complexity analyzer - plus 162 more on the course page.

### DSA & Problem Solving for Teens: Algorithms to Interviews

`/courses/problem-solving-dsa-masterclass-teens` · 12 months (52 weeks) · Complete Beginner to Competition Ready

  - PHASE 1: Foundation & Logic Building (Months 1-3, Weeks 1-13)
    Build unshakeable foundations. Learn to think like a programmer, master basic syntax, and solve your first 200+ problems.
    - Month 1: Programming Fundamentals & First Steps
      - Introduction to Problem Solving & Setup
      - Conditional Logic & Decision Making
      - Loops & Iteration Mastery
      - Functions & Modular Programming
    - Months 2-3: Data Structures Basics & Problem Patterns
      - Lists/Arrays Fundamentals
      - Strings & Text Processing
      - Dictionaries/Hash Maps & Sets
      - Basic Algorithms & Complexity
      - Month 2-3 Assessment & Review
    - Month 3: Advanced Basics & Contest Preparation
      - Stack & Queue Mastery
      - Recursion & Backtracking Basics
      - Mathematics for Programming
      - Linked Lists Introduction
      - Phase 1 Final Project
  - PHASE 2: Core Data Structures & Algorithms (Months 4-6, Weeks 14-26)
    Master essential data structures, dive deep into algorithms, and start solving medium-level competitive programming problems.
    - Months 4-5: Trees & Advanced Sorting
      - Binary Trees Fundamentals
      - Binary Search Trees (BST)
      - Advanced Sorting Algorithms
      - Heaps & Priority Queues
      - Tries & String Algorithms
    - Month 6: Graphs & Network Algorithms
      - Graph Fundamentals
      - Graph Traversal Algorithms
      - Shortest Path Algorithms
      - Minimum Spanning Trees
      - Advanced Graph Algorithms
    - Phase 2 Completion & Integration
      - Algorithm Design Paradigms
      - Space & Time Optimization
      - Testing & Debugging Mastery
      - Competition Strategies
      - Phase 2 Capstone Project
  - PHASE 3: Advanced Algorithms & Techniques (Months 7-9, Weeks 27-39)
    Master dynamic programming, advanced data structures, computational geometry, and complex problem-solving techniques.
    - Months 7-8: Dynamic Programming Mastery
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
      - Advanced Geometry
      - Advanced Number Theory
      - Combinatorics & Counting
      - Phase 3 Capstone Project
  - PHASE 4: Competitive Programming & Interview Mastery (Months 10-12, Weeks 40-52)
    Master competitive programming, ace technical interviews, explore advanced topics, and build your problem-solving portfolio.
    - Months 10-11: Competitive Programming Excellence
      - Advanced Data Structures
      - String Algorithms Mastery
      - Network Flow & Matching
      - FFT & Polynomials
      - Parallel & Distributed Algorithms
    - Month 11: Competition Training & Practice
      - Codeforces & Contest Strategies
      - USACO & IOI Preparation
      - Google Competitions
      - Advanced Contest Techniques
      - Platform Mastery
    - Month 12: Interview Preparation & Career Launch
      - Technical Interview Mastery
      - System Design for Beginners
      - Open Source & Portfolio
      - Advanced Topics Exploration
    - Final Month: Mastery & Beyond
      - Final Project - Part 1
      - Final Project - Part 2 & Polish
      - Graduation & Career Launch

**Projects students build:** Calculator for homework problems; Age calculator with fun facts; Simple chatbot that responds to inputs; Grade calculator with letter grades; Rock-Paper-Scissors game; Simple adventure game with choices; Password strength checker; Pattern printer (20+ patterns); Multiplication table generator; Prime number checker and generator; Number guessing game with attempts; Math helper library (GCD, LCM, factorial); Text analyzer (word count, character frequency); Recursive art generator; Unit converter with functions - plus 216 more on the course page.

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

### Elementary Mathematics for Grade 1-5: Numbers to Geometry

`/courses/elementary-mathematics-complete-masterclass` · 24 months (104 weeks) · Complete Beginner to Advanced Elementary Mathematics

  - PHASE 1: Mathematical Foundations (Months 1-6, Weeks 1-26)
    Build rock-solid foundations in numbers, basic operations, shapes, and mathematical thinking.
    - Months 1-2: Numbers and Counting Mastery
      - Introduction to Numbers and Counting
      - Numbers to 100 and Place Value
      - Basic Addition (Single Digit)
      - Basic Subtraction (Single Digit)
    - Months 3-4: Advanced Operations and Problem-Solving
      - Two-Digit Addition
      - Two-Digit Subtraction
      - Introduction to Multiplication
      - Geometry Basics: 2D Shapes
      - Month 3-4 Review & Assessment
    - Months 5-6: Measurement, Time, and Money
      - Time and Calendar
      - Money and Financial Literacy
      - Length and Height Measurement
      - Weight and Capacity
      - Phase 1 Capstone Project
  - PHASE 2: Core Mathematics Skills (Months 7-12, Weeks 27-52)
    Master multiplication, division, fractions, advanced geometry, and complex problem-solving.
    - Months 7-8: Multiplication and Division Mastery
      - Advanced Multiplication Facts
      - Multi-Digit Multiplication
      - Introduction to Division
      - Long Division
      - Problem-Solving with Operations
    - Months 9-10: Fractions and Decimals Introduction
      - Understanding Fractions
      - Operations with Fractions
      - Introduction to Decimals
      - Decimal Operations
      - Data and Graphing
    - Months 11-12: Advanced Geometry and Measurement
      - Advanced 2D Geometry
      - 3D Shapes and Volume
      - Area and Perimeter
      - Coordinate Geometry
      - Phase 2 Capstone Project
  - PHASE 3: Advanced Concepts & Problem-Solving (Months 13-18, Weeks 53-78)
    Master complex operations, advanced fractions/decimals, ratios, percentages, and sophisticated problem-solving.
    - Months 13-14: Advanced Number Theory
      - Large Numbers and Place Value
      - Factors and Multiples
      - Advanced Multiplication Strategies
      - Advanced Division Strategies
      - Number Patterns and Sequences
    - Months 15-16: Advanced Fractions and Decimals
      - Complex Fraction Operations
      - Advanced Decimal Operations
      - Ratios and Proportions
      - Percentages
      - Mixed Operations and Order
    - Months 17-18: Advanced Geometry and Measurement
      - Advanced Angle Relationships
      - Transformations and Symmetry
      - Circle Geometry
      - Advanced Measurement Conversions
      - Phase 3 Capstone Project
  - PHASE 4: Mastery & Real-World Applications (Months 19-24, Weeks 79-104)
    Master pre-algebra concepts, statistics, probability, mathematical reasoning, and real-world applications.
    - Months 19-20: Pre-Algebra Foundations
      - Variables and Expressions
      - Simple Equations
      - Inequalities Introduction
      - Functions and Graphing
      - Integer Operations
    - Months 21-22: Statistics and Probability
      - Advanced Data Analysis
      - Probability Fundamentals
      - Combinations and Permutations Basics
      - Statistical Reasoning
      - Financial Mathematics
    - Month 23: Advanced Problem-Solving & Logic
      - Logic and Reasoning
      - Problem-Solving Strategies Mastery
      - Mathematical Investigations
      - Competition Mathematics
    - Month 24: Culmination and Future Preparation
      - Real-World Mathematics Applications
      - Comprehensive Review and Integration
      - Transition to Advanced Mathematics

**Projects students build:** Create number book with illustrations; Number hunt around the house; Build counting games with everyday objects; 100 chart coloring patterns; Place value manipulative games; Create skip counting songs; Addition fact family houses; Create addition story problems book; Design addition board game; Subtraction story problems collection; Fact family triangles craft; Subtraction bowling game; Shopping mall addition game; Create addition puzzle cards; Design digital addition calculator - plus 163 more on the course page.

### Ethical Hacking & Cybersecurity: Zero to Pentester

`/courses/ethical-hacking-masterclass-complete` · 6 months (26 weeks) - Can be taken as 1.5 hour daily sessions · Complete Beginner to Professional Ethical Hacker

  - PHASE 1: Networking, Linux & Security Foundations (Weeks 1-8)
    Build rock-solid networking and Linux foundations essential for ethical hacking. Master TCP/IP, operating systems, programming basics, and security fundamentals.
    - Weeks 1-4: Networking & Linux Fundamentals
      - Introduction to Ethical Hacking & Networking Basics
      - Linux Mastery for Hackers
      - Programming for Hackers - Python & Web Basics
      - Information Gathering & OSINT
    - Weeks 5-8: Scanning & Enumeration
      - Network Scanning & Enumeration
      - Web Application Scanning
      - Vulnerability Assessment
  - PHASE 2: Core Hacking & Exploitation (Weeks 9-16)
    Master system hacking, web application attacks, exploitation frameworks, and post-exploitation techniques.
    - Weeks 9-12: System Hacking & Exploitation
      - System Hacking & Password Attacks
      - Metasploit Framework & Exploitation
      - Web Application Hacking - OWASP Top 10
      - Advanced Web Attacks & API Security
      - Database Hacking & NoSQL Injection
    - Weeks 13-16: Network Attacks & Post-Exploitation
      - Network Attacks & Man-in-the-Middle
      - Wireless Network Hacking
      - Post-Exploitation & Lateral Movement
      - Malware Analysis & Reverse Engineering Basics
      - Phase 2 Capstone Project
    - Additional Phase 2 Content
      - Active Directory Attacks
      - Mobile Application Security
      - Cloud Security & Container Hacking
      - IoT & ICS Security
      - Physical Security & Social Engineering
  - PHASE 3: Advanced Security & Specialized Domains (Weeks 17-24)
    Master advanced exploitation, zero-day research, exploit development, and specialized security domains.
    - Weeks 17-20: Advanced Exploitation & Zero Days
      - Buffer Overflow Exploitation
      - Modern Exploit Mitigation Bypasses
      - Web Application Firewall Bypasses
      - Cryptography & Cryptanalysis
      - Red Team Operations
    - Weeks 21-24: DevSecOps & Automation
      - DevSecOps & CI/CD Security
      - Security Automation & Orchestration
      - Threat Hunting & Intelligence
      - Incident Response & Forensics
      - Compliance & Governance
    - Additional Phase 3 Content
      - Zero Trust Architecture
      - Advanced Malware Development
      - Blockchain & Smart Contract Security
      - AI/ML Security
      - Phase 3 Capstone Project
  - PHASE 4: Professional Skills & Career Development (Weeks 25-26)
    Master bug bounty hunting, professional reporting, certification preparation, and career development.
    - Week 25: Bug Bounty & Professional Skills
      - Bug Bounty Hunting Mastery
      - Professional Report Writing
      - Security Certifications Preparation
      - Soft Skills & Consulting
      - Legal & Ethical Considerations
    - Week 26: Career Launch & Final Assessment
      - Career Strategy & Job Hunting
      - Industry Specializations
      - Building Security Tools & Products
      - Advanced Career Development
      - Continuous Learning & Growth
    - Final Week Activities
      - Real-World Scenarios
      - Security Operations Center (SOC)
      - Emerging Threats & Technologies
      - Entrepreneurship in Security
    - Final Assessment & Graduation
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Certification

**Projects students build:** Complete hacking lab setup with multiple VMs; Network topology design and implementation; Subnet calculator tool development; Protocol analyzer using Wireshark; Automation scripts for reconnaissance; Custom security monitoring dashboard; Log analysis automation tool; Linux hardening checklist implementation; Port scanner in Python; Password cracker for weak hashes; Web crawler for reconnaissance; Network packet sniffer; Simple vulnerability scanner; Complete OSINT profile builder; Automated reconnaissance framework - plus 252 more on the course page.

### Flutter App Development Course: Zero to Pro Developer

`/courses/complete-flutter-app-development-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Advanced Professional

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
    - Months 4-5: Advanced Dart, Layouts & State Management Foundations
      - Advanced Dart, Collections & Async Programming
      - Flutter Navigation, Routing & App Structure
      - Forms, Validation & User Input Handling
      - Flutter Layout Mastery, Lists & Responsive Design
      - Intro to State Management Patterns
    - Month 6: Persistent Storage, Offline Apps & Advanced State
      - Local Storage: SharedPreferences, SQLite & Object Persistence
      - State Management with Provider & Riverpod, Part 1
      - Advanced State Management: Riverpod / BLoC, Part 2
      - Flutter Animations & UX Polish
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Architecture, Packages & Best Practices
      - Reusable Widgets, Design Systems & Theming
      - Clean Code, Architecture Patterns & Folder Structures
      - Networking & REST API Integration - Fundamentals
      - Intro to Testing Flutter Apps
      - Build Automation, Packages & Version Control
  - PHASE 3: Backend Integration, Firebase & Production Features (Months 7-9, Weeks 27-39)
    Master building connected apps with Firebase and REST backends, implement authentication, payments, notifications, and solid application architecture.
    - Months 7-8: Firebase, Auth & Real-World Features
      - Firebase Fundamentals & Realtime Data
      - Authentication & User Management
      - Cloud Storage, Media & File Handling
      - Push Notifications & In-App Messaging
      - Advanced Firebase: Queries, Security & Performance
    - Month 9: REST APIs, Payments & Robust Product Apps
      - Advanced REST APIs, Error Handling & Data Layers
      - In-App Purchases & Payment Gateway Integration
      - App Architecture in Depth: Clean Architecture & Large App Design
      - Testing Connected Apps (REST + Firebase)
      - Phase 3 Capstone Preparation & Consolidation
    - PHASE 3 COMPLETION - Production-Ready App Delivery
      - Performance Optimization & App Size Management
      - Error Reporting, Logging & Analytics
      - Security & Data Protection in Flutter Apps
      - Phase 3 Capstone Implementation
      - Phase 3 Review & Assessment
  - PHASE 4: Advanced Flutter, Multi-Platform, DevOps & Career Excellence (Months 10-12, Weeks 40-52)
    Master advanced patterns, multi-platform delivery, CI/CD, store deployment, performance engineering, and become industry-ready as a professional Flutter developer.
    - Months 10-11: Multi-Platform, Advanced Patterns & Tooling
      - Flutter Web & Desktop Fundamentals
      - Modularization, Packages & Plugin Ecosystem
      - Internationalization, Accessibility & Advanced UX
      - CI/CD, Automation & Release Management for Flutter
      - Store Deployment & App Store Readiness
    - Month 12: System Design Thinking for Apps, Performance & DevOps
      - Mobile/App System Design & Architecture
      - Performance Engineering for Flutter Apps
      - DevOps & Observability for Flutter-Based Products
      - Code Quality, Refactoring & Long-Term Maintainability
      - Phase 4 Pre-Capstone Review
    - PHASE 4 COMPLETION - Career Preparation
      - Advanced Flutter Topics & Specializations
      - Code Quality & Best Practices (Flutter Edition)
      - Open Source & Community
      - Interview Preparation (Flutter & Mobile Roles)
    - Final Month - Capstone & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Professional Development

**Projects students build:** Hello Flutter app with personalized welcome screen; Digital visiting card app (name, role, contact info); Simple profile screen with image, text and icons; Two-screen mini app using basic navigation; Kids track variant: Colorful "My Favorite Things" app; Simple console calculator (add, subtract, multiply, divide); Tip & bill split calculator (per person amount); Age & birthday countdown calculator; Unit converters: temperature, length, weight; Kids variant: Score tracker for a simple game; Number guessing game (console or Flutter dialog-based); Grade calculator with letter-grade output; To-do list data model (List operations) with console UI; Simple quiz logic engine (questions and scoring); Kids variant: Multiplication practice generator - plus 238 more on the course page.

### Frontend Development Course for Teens: HTML, CSS, React

`/courses/frontend-development-masterclass-for-teens` · 12 months (52 weeks) · Complete Beginner to Professional Frontend Developer

  - PHASE 1: Web Fundamentals & Design (Months 1-3, Weeks 1-13)
    Start from absolute zero and build your first amazing websites. Learn the core technologies that power every website on the internet.
    - Month 1: HTML & CSS Foundations
      - Introduction to Web Development
      - CSS Styling & Design
      - Flexbox & Grid Layouts
      - Responsive Design & Mobile First
    - Month 2: JavaScript Fundamentals
      - JavaScript Basics
      - Control Flow & Logic
      - DOM Manipulation
      - Asynchronous JavaScript & APIs
      - Month 3: Advanced CSS & Animations
    - Month 3: Modern CSS & Build Tools
      - Modern CSS Techniques
      - SASS/SCSS & CSS Architecture
      - Build Tools & Modern Workflow
      - Tailwind CSS & Utility-First
      - Phase 1 Capstone Project
  - PHASE 2: React & Modern Frameworks (Months 4-6, Weeks 14-26)
    Master React, the most popular frontend framework. Build complex, interactive applications like the pros.
    - Months 4-5: React Fundamentals & Ecosystem
      - React Basics
      - React Hooks Deep Dive
      - React Router & Navigation
      - State Management with Redux
      - Advanced React Patterns
    - Month 6: Advanced React & Next.js
      - Styling in React
      - Forms & Data Handling
      - Next.js - Production React
      - Testing React Applications
      - TypeScript with React
    - Phase 2 Capstone & Performance
      - Performance Optimization
      - Accessibility & SEO
      - Real-time Features
      - GraphQL with React
      - Phase 2 Capstone Project
  - PHASE 3: Vue.js & Alternative Frameworks (Months 7-9, Weeks 27-39)
    Expand your skills with Vue.js and explore other modern frameworks. Become a versatile frontend developer.
    - Months 7-8: Vue.js Mastery
      - Vue.js Fundamentals
      - Vue.js Advanced Features
      - Vue Router & Vuex
      - Nuxt.js - Vue Framework
      - Vue.js Ecosystem
    - Month 9: Modern Frameworks & Tools
      - Svelte & SvelteKit
      - Angular Basics
      - Web Components & Lit
      - Static Site Generators
      - Phase 3 Integration
    - Phase 3 Capstone & Advanced Topics
      - Micro Frontends
      - Advanced Animation & 3D
      - Advanced State Management
      - Design Systems & Component Libraries
      - Phase 3 Capstone Project
  - PHASE 4: Professional Skills & Career Launch (Months 10-12, Weeks 40-52)
    Master professional development skills, build your portfolio, and launch your frontend career.
    - Months 10-11: Professional Development
      - Portfolio Development
      - Freelancing Fundamentals
      - Open Source Contribution
      - Interview Preparation
      - Advanced Git & Collaboration
    - Month 11: Specialized Skills
      - E-commerce Development
      - CMS & Headless Solutions
      - Mobile-First Development
      - Deployment & DevOps
      - Emerging Technologies
    - Month 12: Final Project & Launch
      - Final Project Planning
      - Final Project Development - Part 1
      - Final Project Development - Part 2
      - Launch Preparation
    - Week 51-52: Graduation & Career Launch
      - Career Launch
      - Final Presentations
      - Graduation & Beyond

**Projects students build:** Personal introduction webpage; Favorite artist fan page; School project presentation site; Recipe collection page; Animated landing page; CSS art challenge; Interactive button collection; Photo gallery with effects; Instagram-style photo grid; YouTube homepage layout; Discord server layout; Pinterest-style masonry; Fully responsive portfolio; Mobile-first blog design; Responsive e-commerce page - plus 221 more on the course page.

### Full Stack Web Development for Teens: React & Node.js

`/courses/full-stack-web-development-teens-masterclass` · 24 months (104 weeks) · Complete Beginner to Professional Full Stack Developer

  - PHASE 1: Web Development Foundations (Months 1-6, Weeks 1-26)
    Start from zero and build a rock-solid foundation. Learn how the internet works, create beautiful websites, and master JavaScript - the language that powers the web.
    - Months 1-2: HTML, CSS & Your First Websites
      - Introduction to Web Development
      - Advanced HTML & Forms
      - CSS - Making Things Look Amazing
      - Modern CSS Layouts & Responsive Design
    - Months 3-4: JavaScript Programming Fundamentals
      - JavaScript Basics
      - Control Flow & Functions
      - DOM Manipulation - Making Pages Interactive
      - Advanced JavaScript Concepts
      - Asynchronous JavaScript & APIs
    - Months 5-6: Advanced Frontend & First Framework
      - Modern JavaScript (ES6+)
      - Build Tools & Development Workflow
      - Introduction to React
      - CSS Frameworks & UI Libraries
      - Phase 1 Capstone Project
  - PHASE 2: Advanced Frontend & Modern Frameworks (Months 7-12, Weeks 27-52)
    Master modern frontend frameworks, build complex UIs, and create professional-grade applications that look and feel like real products.
    - Months 7-8: React Mastery
      - Advanced React Concepts
      - React Router & Navigation
      - State Management with Redux
      - Testing React Applications
      - React Performance & Optimization
    - Months 9-10: Vue.js & Alternative Frameworks
      - Vue.js Fundamentals
      - Advanced Vue.js
      - Angular Basics
      - Modern Frontend Tools & Libraries
      - TypeScript for Frontend
    - Months 11-12: UI/UX & Professional Frontend
      - UI/UX Design Principles
      - Advanced CSS & Animations
      - Mobile-First & Cross-Platform
      - Frontend Security & Best Practices
      - Phase 2 Capstone Project
  - PHASE 3: Backend Development & Databases (Months 13-18, Weeks 53-78)
    Master server-side programming, databases, APIs, authentication, and build the backend systems that power modern web applications.
    - Months 13-14: Node.js & Express
      - Node.js Fundamentals
      - Express.js Framework
      - MongoDB & Mongoose
      - RESTful API Design
      - Authentication & Authorization
    - Months 15-16: Python & Advanced Databases
      - Python Fundamentals for Web
      - Django Framework
      - SQL & PostgreSQL
      - Advanced Database Topics
      - Real-time & WebSockets
    - Months 17-18: Advanced Backend & Cloud
      - Microservices Architecture
      - Cloud Services (AWS)
      - DevOps & CI/CD
      - API Security & Performance
      - Phase 3 Capstone Project
  - PHASE 4: Full Stack Mastery & Career Launch (Months 19-24, Weeks 79-104)
    Combine everything you've learned, build production applications, master advanced topics, and prepare for your career as a professional full stack developer.
    - Months 19-20: Full Stack Applications
      - Full Stack Architecture
      - Advanced Authentication Systems
      - Real-time Applications
      - Performance & Scalability
      - Mobile App Development
    - Months 21-22: Advanced Topics & Specializations
      - Machine Learning for Web Devs
      - AI-Powered Full-Stack Apps
      - Game Development for Web
      - Enterprise Development
      - Open Source Contribution
    - Month 23: Career Preparation
      - Portfolio & Personal Brand
      - Interview Preparation
      - Freelancing & Business
      - Startup & Entrepreneurship
    - Month 24: Final Projects & Graduation
      - Final Capstone Project
      - Project Launch & Presentation
      - Graduation & Career Launch

**Projects students build:** Personal profile page; Favorite band/artist fan page; School project presentation website; Multi-page school website; Survey form for friends; Restaurant menu with ordering form; Style your HTML projects beautifully; Create a magazine-style layout; Design product cards like Amazon; Responsive portfolio website; Animated landing page; Instagram-style photo grid; Interactive calculator; Mad libs game generator; Grade calculator for school - plus 164 more on the course page.

### Full Stack Web Development: Frontend, Backend & DevOps

`/courses/full-stack-web-development-masterclass-college` · 24 months (104 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Foundation & Core Skills (Months 1-6, Weeks 1-26)
    Build rock-solid fundamentals. Learn how computers work, master programming basics, and create your first websites.
    - Months 1-2: Computer Science & Programming Fundamentals
      - Introduction to Computing & Setup
      - HTML5 Mastery
      - CSS3 Fundamentals
      - Advanced CSS Layouts
    - Months 3-4: JavaScript Fundamentals & Programming Logic
      - JavaScript Basics & Syntax
      - Control Flow & Logic
      - Functions & Scope
      - Objects & Data Structures
      - Month 3-4 Review & Assessment
    - Months 5-6: DOM Manipulation & Interactive Websites
      - Document Object Model (DOM)
      - Events & User Interaction
      - Advanced JavaScript Concepts
      - Asynchronous JavaScript
      - Phase 1 Capstone Project
  - PHASE 2: Frontend Mastery & Modern Frameworks (Months 7-12, Weeks 27-52)
    Master modern frontend development with React, TypeScript, state management, and advanced UI/UX patterns.
    - Months 7-8: Modern JavaScript & ES6+
      - ES6+ Advanced Features
      - Object-Oriented Programming in JavaScript
      - Functional Programming Concepts
      - Build Tools & Module Systems
      - TypeScript Fundamentals
    - Months 9-10: React.js Mastery
      - React Fundamentals
      - React Hooks & State Management
      - Advanced React Patterns
      - State Management Libraries
      - React with TypeScript
    - Months 11-12: Advanced Frontend & UI/UX
      - Styling in React & CSS-in-JS
      - Performance Optimization
      - Testing in React
      - Next.js & Server-Side Rendering
      - Phase 2 Capstone Project
  - PHASE 3: Backend Engineering & Databases (Months 13-18, Weeks 53-78)
    Master backend development, databases, APIs, authentication, security, and server-side architecture.
    - Months 13-14: Node.js & Express.js
      - Node.js Fundamentals
      - Express.js Framework
      - RESTful API Design
      - Advanced Node.js & Async Patterns
      - Express.js Advanced Concepts
    - Months 15-16: Databases & Data Modeling
      - MongoDB & NoSQL Databases
      - Mongoose ODM
      - SQL & Relational Databases
      - Advanced SQL & Database Design
      - ORMs & Database Integration
    - Months 17-18: Authentication, Security & Advanced Backend
      - Authentication & Authorization
      - API Security & Best Practices
      - Real-time Communication
      - Advanced Backend Patterns
      - Phase 3 Capstone Project
  - PHASE 4: Advanced Topics & Production Systems (Months 19-24, Weeks 79-104)
    Master system design, microservices, DevOps, cloud infrastructure, and production-grade application development.
    - Months 19-20: System Design & Architecture
      - System Design Fundamentals
      - Microservices Architecture
      - GraphQL
      - Advanced System Design Patterns
      - Performance Optimization
    - Months 21-22: DevOps & Cloud Infrastructure
      - Docker & Containerization
      - Kubernetes & Orchestration
      - AWS Cloud Services
      - CI/CD Pipelines
      - Infrastructure as Code
    - Month 23: Advanced Topics & Specializations
      - Advanced Database Topics
      - Advanced Security Topics
      - Machine Learning for Web Developers
      - AI Integration Basics
    - Month 24: Final Projects & Career Preparation
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2 & Deployment
      - Career Preparation & Job Readiness

**Projects students build:** Set up complete development environment; Create first GitHub repository; Write 'About Me' HTML page; Personal portfolio website (HTML only); Restaurant menu page with images and tables; Multi-page contact form with validation; Style your portfolio with beautiful CSS; Create a styled blog post layout; Design a product card component; Holy grail layout with Flexbox and Grid; Responsive navigation menu; Photo gallery with Grid; Complete responsive landing page; Temperature converter; Simple tip calculator - plus 211 more on the course page.

### Game Development Course: Unity, Unreal & C++, Zero to Pro

`/courses/game-development-complete-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Professional Game Developer

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
    - Month 6: VR/AR and Mobile Development
      - Virtual Reality Development
      - Augmented Reality Development
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
      - Live Service Games
      - Game Monetization
      - Phase 3 Capstone Project
  - PHASE 4: Publishing & Career Launch (Months 10-12, Weeks 40-52)
    Master game publishing, marketing, specialized development, and launch your game development career.
    - Months 10-11: Publishing and Marketing
      - Game Publishing Process
      - Game Marketing
      - Business of Game Development
      - Specialized Game Development
      - Tools and Pipeline Development
    - Month 12: Career Launch & Final Projects
      - Portfolio Development
      - Game Industry Careers
      - Interview Preparation
      - Indie Game Development
      - Final Project & Launch
    - Ongoing Development & Growth
      - Staying Current
      - Advanced Specializations
      - Community and Teaching
      - Studio Leadership

**Projects students build:** Write your first Game Design Document; Analyze 5 favorite games critically; Create paper prototype of simple game; Set up Unity and development environment; Design a complete game concept with mechanics; Create difficulty curve for a game; Design reward system for mobile game; Build paper prototype and playtest it; Create animated sprite character; Build tilemap-based level; Implement 2D platformer mechanics; Add particle effects and polish; Player movement controller; Enemy AI basic behavior; Inventory system - plus 151 more on the course page.

### Game Development for Kids: Scratch, Roblox & Minecraft

`/courses/game-development-masterclass-for-kids` · 6 months (26 weeks) · Complete Beginner to Advanced Game Creator

  - PHASE 1: Game Foundations & First Games (Months 1-2, Weeks 1-8)
    Master game thinking and create your first games using Scratch and basic tools. Learn what makes games fun!
    - Months 1-2: Game Logic & Scratch Mastery
      - Introduction to Game Development
      - Game Mechanics & Player Control
      - Advanced Scratch Game Development
      - Introduction to GDevelop
    - Months 3-4: 2D Game Mastery
      - Construct 3 Game Engine
      - Game Art & Animation
      - Mobile Game Development
      - GameMaker Studio Basics
      - 2D Games Showcase
    - Months 5-6: 3D Worlds & Multiplayer
      - Roblox Studio Fundamentals
      - Advanced Roblox Development
      - Minecraft Modding & Creation
      - Unity with Visual Scripting
      - Final Game Project & Publishing
  - PHASE 2: Advanced Game Development (Specialized Tracks)
    Choose specialized paths: Mobile Games, Multiplayer, VR/AR, or Competitive Gaming
    - Mobile Game Specialization
      - Buildbox for Mobile Games
      - PlayCanvas Web Games
      - Core Games Platform
      - Stencyl 2D Games
      - Godot Engine Basics
    - Multiplayer & Social Games
      - Multiplayer Game Design
      - Among Us Style Games
      - io Games Development
      - Minecraft Server Creation
      - Discord Game Bots
    - VR/AR & Emerging Tech
      - VR Game Development
      - AR Games with Lens Studio
      - AI in Games
      - AI in Games
      - Game Developer Portfolio
  - SPECIALIZATION TRACKS: Choose Your Path
    Deep dive into specialized areas of game development
    - Esports & Competitive Gaming
      - Esports Game Design
      - Stream-Friendly Games
      - Game Analytics & Metrics
      - Game Marketing & Growth
      - Game Monetization Strategies
    - Educational Game Development
      - Learning Game Design
      - STEM Game Development
      - Serious Games Development
      - Classroom Integration
      - Game Accessibility
    - Professional Skills & Industry
      - Game Industry Overview
      - Game Testing & QA
      - Game Documentation
      - Team Collaboration
      - Final Showcase & Graduation
  - BONUS CONTENT: Advanced Specializations
    Optional advanced modules for continued excellence
    - Game Art & Sound Mastery
      - Advanced Pixel Art
      - 3D Modeling Basics
      - Game Audio & Music
      - Procedural Generation
      - Game Narrative Design
    - Business & Entrepreneurship
      - Starting a Game Studio
      - Crowdfunding Games
      - Game Publishing
      - Live Operations
      - Game Franchises
    - Cutting-Edge Technologies
      - Cloud Gaming Development
      - AI Game Development
      - Multiplayer & Social Game Design
      - Experimental Gaming
    - Master Game Developer Path
      - Game Development Mastery
      - Industry Leadership
      - Your Gaming Legacy

**Projects students build:** Catch the falling objects game; Simple maze game; Pet virtual game; Two-player tag game; Platformer with jumping; Racing game with timer; Shooting game with score; Puzzle with levels; Multi-level adventure game; RPG with inventory; Battle arena game; Story-driven game; Physics puzzle game; Endless runner; Tower defense game - plus 216 more on the course page.

### Game Development for Teens: Unity, Unreal & Real Games

`/courses/complete-game-development-masterclass-for-teens` · 24 months (104 weeks) · Complete Beginner to Professional Game Developer

  - PHASE 1: Foundation & 2D Games (Months 1-6, Weeks 1-26)
    Start from zero and build your first games. Master programming fundamentals through game creation and understand what makes games fun.
    - Months 1-2: Programming Fundamentals Through Games
      - Introduction to Game Development
      - C# Programming for Games
      - 2D Game Development in Unity
      - Game Physics & Collision
    - Months 3-4: 2D Game Mechanics & Polish
      - Player Movement & Controls
      - Enemy AI & Behaviors
      - Game UI & Menus
      - Animation & Visual Effects
      - Audio & Music in Games
    - Months 5-6: Complete 2D Games & Design
      - Level Design Fundamentals
      - Game Design Theory
      - Mobile Game Development
      - Save Systems & Persistence
      - Phase 1 Capstone Project
  - PHASE 2: 3D Games & Unity Mastery (Months 7-12, Weeks 27-52)
    Enter the world of 3D game development. Master Unity's 3D capabilities and create games like Minecraft, Fortnite, and Fall Guys.
    - Months 7-8: 3D Fundamentals
      - 3D Basics in Unity
      - 3D Character Controllers
      - 3D Animation & Rigging
      - 3D Level Design & Environments
      - 3D Modeling Basics (Blender)
    - Months 9-10: Advanced Unity Features
      - Advanced Physics & Mechanics
      - Shader Programming
      - AI & Pathfinding
      - Procedural Generation
      - Optimization & Profiling
    - Months 11-12: Multiplayer & Networking
      - Multiplayer Basics
      - Advanced Multiplayer Systems
      - Cross-Platform Development
      - Game Services Integration
      - Phase 2 Capstone Project
  - PHASE 3: Unreal Engine & Advanced Systems (Months 13-18, Weeks 53-78)
    Master Unreal Engine, advanced graphics, VR/AR development, and AAA game production techniques.
    - Months 13-14: Unreal Engine Fundamentals
      - Unreal Engine Basics
      - Unreal C++ Programming
      - Unreal Animation System
      - Unreal Graphics & Rendering
      - Unreal Multiplayer Systems
    - Months 15-16: VR/AR Development
      - Virtual Reality Development
      - Augmented Reality Development
      - Mixed Reality & Future Tech
      - Advanced AI & Machine Learning
      - Game Audio Advanced
    - Months 17-18: Professional Production
      - Game Production Pipeline
      - Tools & Editor Development
      - Platform-Specific Development
      - Live Service & Post-Launch
      - Phase 3 Capstone Project
  - PHASE 4: Studio Creation & Business (Months 19-24, Weeks 79-104)
    Build your game studio, master the business of games, and launch commercially successful titles.
    - Months 19-20: Game Business & Marketing
      - Game Business Fundamentals
      - Game Marketing & PR
      - Monetization Strategies
      - Publishing & Distribution
      - Analytics & Metrics
    - Months 21-22: Advanced Specializations
      - Esports & Competitive Gaming
      - AI in Game Development
      - Cloud Gaming & Streaming
      - Game Narrative & Writing
      - Accessibility & Inclusion
    - Month 23: Final Production
      - Studio Portfolio Development
      - Final Project Pre-Production
      - Final Project Production
      - Launch Preparation
    - Month 24: Launch & Graduation
      - Game Launch & Release
      - Career Preparation
      - Graduation & Future

**Projects students build:** Pong remake; Breakout/Arkanoid clone; Simple clicker game; Text adventure game; Number guessing game; Rock Paper Scissors with AI; Simple RPG battle system; Dice rolling game; Top-down shooter; Endless runner like Temple Run; 2D platformer basics; Asteroids remake; Angry Birds clone; Pinball game; Physics puzzle game - plus 220 more on the course page.

### GCSE Maths: Foundation & Higher (9-1), AQA, Edexcel, OCR

`/courses/gcse-mathematics-mastery` · 18 months (72 weeks) · Years 9-11 GCSE students, Foundation and Higher tiers, plus resit candidates

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

### Generative AI Course: LLMs, RAG & AI Agents, Zero to Pro

`/courses/complete-generative-ai-masterclass-college` · 12 months (52 weeks) · Complete Beginner to AI Engineer Professional

  - PHASE 1: Foundation & AI Fundamentals (Months 1-3, Weeks 1-13)
    Build rock-solid AI fundamentals. Learn Python, mathematics for AI, machine learning basics, and introduction to generative AI.
    - Months 1-2: Python Programming & Math for AI
      - Python Fundamentals & Development Setup
      - Advanced Python & Data Manipulation
      - Mathematics for AI - Part 1
      - Mathematics for AI - Part 2 & Statistics
    - Month 3: Machine Learning Fundamentals
      - Introduction to Machine Learning
      - Neural Networks & Deep Learning Basics
      - Introduction to Generative AI
  - PHASE 2: LLM Foundations & Prompt Engineering (Months 4-6, Weeks 14-26)
    Master Large Language Models, transformer architecture, prompt engineering, working with AI APIs, and building LLM-powered applications.
    - Months 4-5: Transformers, LLMs & API Integration
      - Transformer Architecture Deep Dive
      - OpenAI API & LLM Integration
      - Advanced Prompt Engineering
      - Alternative LLM APIs & Providers
      - Vector Databases & Embeddings
    - Month 6: LangChain & AI Application Development
      - LangChain Fundamentals
      - Advanced LangChain & Tools
      - Retrieval Augmented Generation (RAG) - Part 1
      - Retrieval Augmented Generation (RAG) - Part 2
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Computer Vision & Multimodal AI
      - Computer Vision Fundamentals
      - Generative Models for Images
      - Multimodal AI & Vision-Language Models
      - Audio & Speech AI
      - AI Ethics & Responsible Development
  - PHASE 3: Fine-tuning, AI Agents & Production Systems (Months 7-9, Weeks 27-39)
    Master model fine-tuning, build autonomous AI agents, create production-ready AI systems, and learn MLOps.
    - Months 7-8: Model Fine-tuning & Customization
      - Fine-tuning Fundamentals
      - Advanced Fine-tuning Techniques
      - Open Source LLMs & Local Deployment
      - AI Agents Architecture - Part 1
      - AI Agents Architecture - Part 2
    - Month 9: MLOps & Production AI Systems
      - MLOps Fundamentals
      - AI Application Architecture & APIs
      - Prompt Engineering at Scale
      - Vector Databases at Scale
      - LLM Observability & Monitoring
    - PHASE 3 COMPLETION - Month 9 Advanced Topics
      - Advanced RAG Techniques
      - AI Security & Safety
      - AI Infrastructure & Cloud Deployment
      - AI Product Development
      - Phase 3 Capstone Project
  - PHASE 4: Custom Models, Research & Professional Excellence (Months 10-12, Weeks 40-52)
    Master custom model development, research methodologies, specialized AI domains, and career mastery.
    - Months 10-11: Training Custom Models & Advanced Topics
      - Training LLMs from Scratch - Theory
      - Training LLMs from Scratch - Practice
      - Specialized AI Domains - NLP
      - Specialized AI Domains - Code & Reasoning
      - Reinforcement Learning for LLMs
    - Month 12: Research, Cutting Edge & Career Launch
      - AI Research & Paper Implementation
      - Cutting-Edge AI Techniques
      - Building AI Startups & Products
      - AI Consulting & Freelancing
      - Career Development & Job Search
    - PHASE 4 COMPLETION - Specialization & Mastery
      - Choose Your Specialization
      - AI Community & Open Source
      - The Future of AI & Your Role
      - Interview Mastery & Career Launch
    - Final Month - Masterpiece Project & Career Launch
      - Final Masterpiece Project - Part 1
      - Final Masterpiece Project - Part 2
      - Career Launch & AI Leadership

**Projects students build:** Text-based calculator program; Todo list application; File organizer script; Simple data analyzer from CSV; Web scraper basics with requests; Command-line application; Personal expense tracker; Password generator and validator; Data analysis pipeline for CSV files; Student grade analyzer with Pandas; Weather data visualizer; E-commerce sales dashboard; Stock price analyzer and plotter; Text file analyzer with regex; Custom data class library - plus 381 more on the course page.

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

### Go (Golang) Programming: Concurrency, gRPC & Microservices

`/courses/complete-golang-programming-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Cloud Native Expert

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
    - Months 4-5: Concurrency & Advanced Features
      - Goroutines & Channels Fundamentals
      - Advanced Concurrency Patterns
      - Reflection & Generics
      - Testing & Benchmarking
      - Performance Optimization & Profiling
    - Month 6: CLI Tools & Systems Programming
      - Building CLI Applications
      - File I/O & System Programming
      - Networking & Protocols
      - Data Serialization & Encoding
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Tooling & Best Practices
      - Build Tools & Dependency Management
      - Code Quality & Best Practices
      - Debugging & Troubleshooting
      - Open Source Contribution
      - Advanced Topics & Specializations
  - PHASE 3: Web Development & Enterprise Applications (Months 7-9, Weeks 27-39)
    Master web development with Go, build REST APIs, GraphQL, gRPC services, work with databases, and deploy production applications.
    - Months 7-8: Web Development & APIs
      - HTTP & Web Fundamentals
      - Web Frameworks & REST APIs
      - Database Programming
      - NoSQL & Caching
      - GraphQL & Modern APIs
    - Month 9: gRPC & Microservices Foundations
      - gRPC & Protocol Buffers
      - Message Queues & Event-Driven
      - Authentication & Security
      - Observability & Monitoring
      - Phase 3 Capstone Project
    - PHASE 3 COMPLETION - Deployment & DevOps
      - Containerization & Orchestration
      - CI/CD & Automation
      - Cloud Platforms & Serverless
      - Production Best Practices
      - Integration & Enterprise Patterns
  - PHASE 4: Cloud Native Mastery & Professional Excellence (Months 10-12, Weeks 40-52)
    Master cloud-native development, advanced microservices, distributed systems, and prepare for senior engineering roles.
    - Months 10-11: Advanced Microservices & Distributed Systems
      - Microservices Architecture Deep Dive
      - Distributed Systems Fundamentals
      - Service Mesh & Advanced Orchestration
      - Advanced Kubernetes & Operators
      - Cloud Native Security
    - Month 12: System Design & Career Excellence
      - System Design Mastery
      - Performance Engineering
      - Advanced Cloud & Edge Computing
      - AI/ML Integration & Data Engineering
      - Blockchain & Web3
    - PHASE 4 COMPLETION - Career Preparation
      - Interview Mastery
      - Professional Portfolio

**Projects students build:** Hello World with command-line arguments; Personal information display program; ASCII art generator in Go; Simple text output variations; Environment variable reader; Calculator with all arithmetic operations; Temperature converter (Celsius, Fahrenheit, Kelvin); Unit converter (length, weight, volume); BMI calculator with health assessment; Currency converter with live rates simulation; Bitwise operations demonstrator; Type conversion examples program; Interest calculator (simple and compound); Number guessing game; Grade calculator with switch - plus 431 more on the course page.

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

`/courses/complete-high-school-mathematics-mastery` · 12 months (52 weeks) · Complete Beginner to Advanced High School

  - PHASE 1: Algebraic Foundations & Basic Geometry (Months 1-3, Weeks 1-13)
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
  - PHASE 2: Advanced Algebra & Functions (Months 4-6, Weeks 14-26)
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
  - PHASE 3: Trigonometry & Pre-Calculus (Months 7-9, Weeks 27-39)
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
  - PHASE 4: Calculus & Advanced Topics (Months 10-12, Weeks 40-52)
    Master differential and integral calculus, statistics, probability, and advanced problem-solving techniques for university readiness.
    - Months 10-11: Calculus
      - Differential Calculus
      - Applications of Derivatives
      - Integral Calculus
      - Applications of Integration
      - Series and Sequences (Calculus)
    - Month 12: Statistics & Probability
      - Descriptive Statistics
      - Probability Theory
      - Probability Distributions
      - Statistical Inference
      - Advanced Problem Solving
    - Final Review & Applications
      - Real-World Applications
      - Technology in Mathematics
      - Mathematical Research Project
      - University Preparation
    - Final Assessments & Certification
      - Comprehensive Review - Part 1
      - Comprehensive Review - Part 2 & Mock Exams
      - Final Certification & Future Planning

**Projects students build:** Create a number system classification chart; Real-world scientific notation problems; Algebraic expression calculator design; Budget planning with linear equations; Distance-rate-time problem solver; Inequality graphing tool; Polynomial calculator implementation; Area and volume problems with polynomials; Pascal's triangle pattern explorer; Factoring flowchart creation; Projectile motion problems; Optimization problem solver; Supply and demand economic model; Mixture problem solver; Linear programming introduction - plus 109 more on the course page.

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
      - IA Draft Critique and Final Polish Plan
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

`/courses/igcse-mathematics-mastery` · 18 months (72 weeks) · IGCSE students, years 9-11: Core, Extended and Additional Maths

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

`/courses/cbse-informatics-practices-ip-class-11-12-python-pandas-sql-complete-course` · 24 months (Class 11 + Class 12 full syllabus) · Class 11 Beginner to Class 12 Board Exam Ready

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

### Java Programming for Teens: Zero to Professional Developer

`/courses/java-programming-masterclass-for-teens` · 24 months (104 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Foundation & Core Programming (Months 1-6, Weeks 1-26)
    Build rock-solid programming fundamentals. Learn to think like a programmer, master Java basics, and create your first applications.
    - Months 1-2: Introduction to Programming & Java Basics
      - Introduction to Programming & Setup
      - Variables, Data Types & Basic Operations
      - Control Flow: Making Decisions
      - Loops: Repetition in Programming
    - Months 3-4: Arrays, Methods & Problem Solving
      - Arrays: Working with Collections
      - Methods: Building Reusable Code
      - String Manipulation & Text Processing
      - File Handling & Exception Basics
      - Month 3-4 Review & Mini Projects
    - Months 5-6: Introduction to Object-Oriented Programming
      - Classes and Objects Fundamentals
      - Encapsulation and Access Modifiers
      - Inheritance: Building Class Hierarchies
      - Polymorphism and Interfaces
      - Phase 1 Capstone Project
  - PHASE 2: Advanced Java & Application Development (Months 7-12, Weeks 27-52)
    Master advanced Java concepts, build desktop applications with JavaFX, explore game development, and dive into data structures and algorithms.
    - Months 7-8: Collections Framework & Advanced Java
      - Java Collections Framework
      - Generics and Type Safety
      - Exception Handling & Debugging
      - Lambda Expressions & Stream API
      - Multithreading Basics
    - Months 9-10: GUI Development with JavaFX
      - JavaFX Fundamentals
      - Advanced JavaFX Controls
      - MVC Pattern & Application Architecture
      - Database Integration
      - Game Development Basics
    - Months 11-12: Data Structures & Algorithms
      - Fundamental Data Structures
      - Searching and Sorting Algorithms
      - Graph Algorithms & Advanced Topics
      - Performance & Optimization
      - Phase 2 Capstone Project
  - PHASE 3: Enterprise Java & Web Development (Months 13-18, Weeks 53-78)
    Master enterprise Java development with Spring Framework, build RESTful APIs, microservices, and web applications.
    - Months 13-14: Web Development & Servlets
      - Web Fundamentals for Java Developers
      - Java Servlets & JSP
      - Spring Framework Fundamentals
      - Spring Boot Essentials
      - RESTful Web Services
    - Months 15-16: Database & Security
      - Spring Data JPA
      - Advanced Database Operations
      - Spring Security
      - Messaging & Integration
      - Testing Spring Applications
    - Months 17-18: Microservices & Cloud
      - Microservices Architecture
      - Docker & Containerization
      - Kubernetes & Cloud Deployment
      - DevOps & CI/CD
      - Phase 3 Capstone Project
  - PHASE 4: Mobile, Advanced Topics & Career (Months 19-24, Weeks 79-104)
    Master Android development, explore advanced Java topics, contribute to open source, and prepare for professional career.
    - Months 19-20: Android Development
      - Android Fundamentals
      - Android UI & User Experience
      - Android Data & Networking
      - Advanced Android Development
      - Android Testing & Publishing
    - Months 21-22: Advanced Java & Specializations
      - Reactive Programming
      - Performance & JVM Internals
      - Design Patterns & Architecture
      - Big Data & Machine Learning
      - AI & Emerging Tech with Java
    - Month 23: Open Source & Advanced Projects
      - Open Source Contribution
      - Minecraft Modding
      - Game Development Advanced
      - System Design & Architecture
    - Month 24: Final Projects & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Professional Development

**Projects students build:** Set up complete Java development environment; Create and run Hello World in 3 different ways; Build a simple personal introduction program; Interactive calculator application; Temperature converter (Celsius/Fahrenheit/Kelvin); Simple cashier program with tax calculation; Mad Libs story generator; Grade calculator with letter grades; Simple adventure game with choices; Rock-Paper-Scissors game; Age-appropriate movie recommendation system; Number guessing game with attempts; Multiplication table generator; Pattern printer (pyramids, diamonds); Simple password validator with retry - plus 266 more on the course page.

### Java Programming: Core Java, Spring Boot & Microservices

`/courses/complete-java-programming-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Enterprise Professional

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
    - Months 4-5: Advanced Java Features & Collections
      - String Handling & Regular Expressions
      - Exception Handling & Error Management
      - Collections Framework - Part 1
      - Collections Framework - Part 2
      - Generics & Advanced Collections
    - Month 6: File I/O, Multithreading & Modern Java
      - File I/O & Serialization
      - Multithreading & Concurrency - Part 1
      - Multithreading & Concurrency - Part 2
      - Java 8+ Modern Features
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Design Patterns & Best Practices
      - Design Patterns - Part 1 (Creational)
      - Design Patterns - Part 2 (Structural & Behavioral)
      - JDBC & Database Programming
      - Unit Testing with JUnit
      - Build Tools & Version Control
  - PHASE 3: Enterprise Java & Web Development (Months 7-9, Weeks 27-39)
    Master enterprise Java development with Servlets, JSP, Spring Framework, Spring Boot, Hibernate, and RESTful APIs.
    - Months 7-8: Web Development & Spring Framework
      - Servlets & JSP Fundamentals
      - Advanced Servlets & Web Technologies
      - Spring Framework Core
      - Spring Boot Fundamentals
      - Spring Data JPA & Hibernate
    - Month 9: Advanced Spring Boot & Microservices Basics
      - Spring Security & Authentication
      - Spring Boot Advanced Features
      - RESTful API Best Practices & Microservices Intro
      - Spring Boot with External Services
      - Testing Spring Boot Applications
    - PHASE 3 COMPLETION - Month 9 Final Week
      - Database Design & Optimization
      - Application Deployment & DevOps
      - Monitoring, Logging & Performance
      - Security Best Practices & API Standards
      - Phase 3 Capstone Project
  - PHASE 4: Microservices, Cloud & Professional Excellence (Months 10-12, Weeks 40-52)
    Master microservices architecture, Spring Cloud, cloud-native development, DevOps, system design, and career preparation.
    - Months 10-11: Microservices Architecture & Spring Cloud
      - Microservices Fundamentals
      - Spring Cloud Ecosystem
      - Inter-Service Communication & Messaging
      - Microservices Data Management
      - Microservices Security & Observability
    - Month 12: Cloud Native, DevOps & Career Excellence
      - Cloud Native Java & Kubernetes
      - AWS & Cloud Services for Java
      - DevOps & CI/CD for Java
      - System Design & Architecture
      - Performance Engineering
    - PHASE 4 COMPLETION - Career Preparation
      - Advanced Java Topics & Specializations
      - Code Quality & Best Practices
      - Open Source & Community
      - Interview Preparation
    - Final Month - Capstone & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Professional Development

**Projects students build:** Hello World variations with personalized messages; Simple output programs using System.out.println; Personal information display program; ASCII art generator in Java; Simple calculator (four basic operations); Temperature converter (Celsius, Fahrenheit, Kelvin); Age calculator with detailed output; BMI calculator with health categories; Currency converter; Area and perimeter calculator for shapes; Compound interest calculator; Number guessing game with attempts limit; Grade calculator with letter grades; Even/odd checker and list generator; Prime number checker and generator - plus 368 more on the course page.

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

### Kids Coding Masterclass: Scratch, Games, Apps & AI Projects

`/courses/kids-coding-blocks-masterclass` · 24 months (104 weeks) · Complete Beginner (Age 7+) to Advanced Creator

  - PHASE 1: Foundation & Block Coding Basics (Months 1-6, Weeks 1-26)
    Start your coding journey with fun, visual programming. Learn computational thinking, create games, animations, and interactive stories using block-based platforms.
    - Months 1-2: Introduction to Coding & Scratch Basics
      - Welcome to the Digital World
      - Motion and Animation in Scratch
      - Events and Interactivity
      - Introduction to Game Logic
    - Months 3-4: Advanced Scratch & Code.org
      - Loops and Patterns
      - Variables and Data
      - Code.org and Hour of Code
      - Clone Games and Complex Projects
      - Month 3-4 Review & Showcase
    - Months 5-6: MakeCode & Physical Computing
      - Microsoft MakeCode Arcade
      - Micro:bit Programming
      - Blockly and Google Tools
      - Game Design Principles
      - Phase 1 Final Project
  - PHASE 2: Advanced Blocks & Creative Computing (Months 7-12, Weeks 27-52)
    Explore advanced platforms, AI tools, mobile app development, and creative computing with more sophisticated block-based environments.
    - Months 7-8: MIT App Inventor & Mobile Apps
      - App Inventor Basics
      - Advanced App Features
      - Game Development in App Inventor
      - IoT and Connected Apps
      - Roblox Studio Introduction
    - Months 9-10: AI Tools & Creative Computing
      - Introduction to AI for Kids
      - Teachable Machine & AI Projects
      - Canva Design Fundamentals
      - Video Creation & Editing
      - Digital Storytelling
    - Months 11-12: Microsoft Skills & Productivity
      - Microsoft Word Mastery
      - Microsoft PowerPoint Excellence
      - Microsoft Excel Basics
      - Microsoft Teams & OneNote
      - Phase 2 Integration Project
  - PHASE 3: Advanced Platforms & Professional Skills (Months 13-18, Weeks 53-78)
    Master advanced creative tools, 3D design, advanced AI, professional software, and begin transition to text-based coding.
    - Months 13-14: 3D Design & Virtual Worlds
      - Minecraft Education Edition
      - CoSpaces & VR/AR Creation
      - Tinkercad 3D Design
      - Advanced Roblox Development
      - Unity with Visual Scripting
    - Months 15-16: Advanced AI & Data Science
      - Advanced AI Tools
      - Data Science for Kids
      - Internet of Things (IoT)
      - Robotics Programming
      - Advanced Maker Projects
    - Months 17-18: Professional Tools & Career Skills
      - Adobe Creative Suite Basics
      - Google Workspace Mastery
      - Digital Marketing Basics
      - Entrepreneurship for Kids
      - Phase 3 Showcase Project
  - PHASE 4: Text Coding Transition & Professional Development (Months 19-24, Weeks 79-104)
    Transition from blocks to text-based programming, web development basics, and professional portfolio creation.
    - Months 19-20: Python Programming Basics
      - Introduction to Python
      - Python Control Flow
      - Python Data Structures
      - Python Game Development
      - Python for Data and AI
    - Months 21-22: Web Development Fundamentals
      - HTML & CSS Basics
      - Responsive Web Design
      - JavaScript for the Web
      - Full Stack Basics
      - Framework Introduction
    - Month 23: Specialization & Advanced Projects
      - Choose Your Specialization
      - Advanced Project Planning
      - Open Source Contribution
      - Professional Skills Development
    - Month 24: Final Projects & Graduation
      - Final Capstone Project - Development
      - Final Project Polish & Presentation
      - Graduation & Future Planning

**Projects students build:** Animated greeting card; Pet animation with sounds; Interactive 'About Me' project; Animated story with 3 scenes; Dancing party animation; Virtual pet that moves and makes sounds; Interactive quiz game; Virtual piano/musical instrument; Dress-up game with clickable items; Catch the falling objects game; Simple maze game; Whack-a-mole style game; Number guessing game; Geometric art generator; Pattern-based puzzle game - plus 214 more on the course page.

### Kotlin Programming: Zero to Android & Backend Developer

`/courses/complete-kotlin-programming-masterclass-professional` · 12 months (52 weeks) · Complete Beginner to Professional Developer

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
    - Months 4-5: Advanced Language Features & Coroutines
      - Generics & Type System
      - Delegation & Property Delegates
      - Collections Deep Dive
      - Coroutines Fundamentals
      - Advanced Coroutines & Flow
    - Month 6: DSLs, Reflection & Professional Patterns
      - Domain-Specific Languages (DSLs)
      - Reflection & Annotations
      - Design Patterns in Kotlin
      - Testing in Kotlin
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Kotlin for Backend
      - Ktor Framework - Part 1
      - Ktor Framework - Part 2
      - Spring Boot with Kotlin
      - Database Access with Kotlin
      - Build Tools & Kotlin Scripting
  - PHASE 3: Android Development Mastery (Months 7-9, Weeks 27-39)
    Master modern Android development with Kotlin, Jetpack Compose, Material Design, Architecture Components, and professional app development.
    - Months 7-8: Android Fundamentals & Jetpack Compose
      - Android Basics & Setup
      - Jetpack Compose Fundamentals
      - Advanced Compose & Navigation
      - Android Architecture Components
      - Local Data Storage
    - Month 9: Networking, APIs & Advanced Android
      - Networking & REST APIs
      - Image Loading & Media
      - Advanced UI & Material Design
      - Background Work & Services
      - Testing Android Apps
    - PHASE 3 COMPLETION - Month 9 Advanced Topics
      - Performance & Optimization
      - Publishing & Deployment
      - Advanced Features & Libraries
      - Security Best Practices
      - Phase 3 Capstone Project
  - PHASE 4: Kotlin Multiplatform, Cloud & Career Excellence (Months 10-12, Weeks 40-52)
    Master Kotlin Multiplatform, advanced backend, cloud deployment, system design, and professional career preparation.
    - Months 10-11: Kotlin Multiplatform & Advanced Topics
      - Kotlin Multiplatform Mobile (KMM)
      - Kotlin Multiplatform for All Platforms
      - Advanced Backend with Kotlin
      - Cloud & Deployment
      - Observability & DevOps
    - Month 12: System Design & Career Excellence
      - System Design Fundamentals
      - Performance & Optimization
      - Security & Best Practices
      - Open Source & Community
      - Advanced Kotlin Topics
    - PHASE 4 COMPLETION - Career Launch
      - Interview Preparation
      - Professional Development
      - Specialization & Niches
      - Future of Kotlin
    - Final Month - Ultimate Capstone & Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Beyond

**Projects students build:** Hello World variations with string templates; Simple output programs using println; Personal information display with string interpolation; ASCII art generator in Kotlin; Interactive REPL experiments; Null-safe calculator with Kotlin operators; Temperature converter with smart casts; Age calculator with null safety; BMI calculator with safe operations; Currency converter with type-safe design; Area calculator using when expressions; Compound interest calculator with ranges; String manipulation utility; Number guessing game with when expression; Grade calculator using when - plus 369 more on the course page.

### Maths Olympiad & Competition Course: AMC, AIME to IMO

`/courses/olympiad-competition-mathematics-mastery` · 12 months (52 weeks) · Intermediate to International Competition Level

  - PHASE 1: Competition Fundamentals & Number Theory (Months 1-3, Weeks 1-13)
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
  - PHASE 2: Advanced Algebra & Polynomial Theory (Months 4-6, Weeks 14-26)
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
  - PHASE 3: Competition Geometry & Trigonometry (Months 7-9, Weeks 27-39)
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
  - PHASE 4: Inequalities, Advanced Topics & IMO Preparation (Months 10-12, Weeks 40-52)
    Master inequalities, advanced problem-solving techniques, and prepare for international competitions.
    - Months 10-11: Inequalities & Optimization
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
      - Research Mathematics Introduction
    - Month 12: Mock Competitions & Final Preparation
      - National Olympiad Simulations
      - International Competition Week
      - Topic Integration & Problem Creation
      - Advanced Problem-Solving Techniques
    - Month 12: Final Assessments & Future Planning
      - Comprehensive Review & Mastery
      - Final Competition Series
      - Future Planning & Career Guidance

**Projects students build:** Solve 50 AMC 8 problems; Create problem-solving strategy guide; Analyze past competition papers; Implement prime generation algorithms; Solve 30 number theory competition problems; Create divisibility proof portfolio; Modular arithmetic problem set; CRT application problems; Create modular arithmetic reference guide; Advanced number theory problem collection; Historical theorems exploration; IMO number theory problems analysis; Combinatorial identity proofs; Counting problems compilation; Create combinatorics formula sheet - plus 111 more on the course page.

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

### MERN Stack Course Online: Job-Ready Full-Stack Bootcamp

`/courses/mern-stack-development-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Full Stack Expert

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
      - Phase 2 Assessment
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
      - Mobile Development with React Native
    - Month 6: Full Frontend Integration
      - Micro-Frontends & Architecture
      - Advanced Animation & Graphics
      - Accessibility & Internationalization
      - Security & Best Practices
      - Phase 2 Capstone
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
    - Month 9: Advanced Backend & DevOps
      - Microservices Architecture
      - GraphQL Backend
      - Testing & Quality Assurance
      - Security & Compliance
      - Phase 3 Capstone
  - PHASE 4: Full Stack Integration & Production (Months 10-12, Weeks 40-52)
    Integrate frontend and backend, master DevOps, deployment, and build production applications.
    - Month 10: Full Stack Integration
      - Full Stack Architecture
      - Payment Integration
      - DevOps & CI/CD
      - Cloud Deployment
      - Kubernetes & Scaling
    - Month 11: Advanced Topics & Optimization
      - Performance & Optimization
      - Advanced Security
      - Analytics & Monitoring
      - Machine Learning Integration
      - AI Integration
    - Month 12: Career Preparation & Final Projects
      - Portfolio Development
      - Interview Preparation
      - Freelancing & Business
      - Final Capstone Project
    - Graduation & Beyond
      - Advanced Specializations
      - Community & Networking
      - Lifetime Learning Path

**Projects students build:** Personal portfolio HTML structure; Multi-page website; Contact form with validation; Responsive portfolio design; Landing page with animations; CSS art and illustrations; Company website with Tailwind; Dashboard UI with Bootstrap; Accessible web application; Interactive calculator; Todo list application; Quiz application; Dynamic content management system; Drag-and-drop task board; Image gallery with lazy loading - plus 159 more on the course page.

### Microsoft Office & Windows for Kids: Digital Skills Course

`/courses/microsoft-office-kids-mastery` · 6 months (26 weeks) · Complete Beginner to Advanced User

  - Month 1: Windows Basics & Digital Art
    Master Windows fundamentals, file management, and creative expression with Paint and Paint 3D.
    - Introduction to Windows & Computer Basics
    - File Management & Organization
    - Microsoft Paint Fundamentals
    - Paint 3D & Advanced Digital Art
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
  - Month 5: OneNote, Teams & Collaboration Tools
    Master digital note-taking, online collaboration, and communication tools.
    - OneNote Digital Notebook
    - Microsoft Teams for Students
    - Outlook & Email Skills
    - Additional Microsoft Tools
  - Month 6: Advanced Integration & Professional Projects
    Combine all skills for complex projects and professional-level work.
    - Advanced Windows Tools & Utilities
    - Integrated Office Projects
    - Professional Document Creation
    - Creative Multimedia Projects
    - Final Capstone Project
    - Graduation & Certification

**Projects students build:** Customize desktop wallpaper and theme; Create desktop shortcuts; Organize taskbar with favorite apps; Personal desktop setup; Create organized folder system for schoolwork; Digital filing cabinet setup; Photo organization project; Backup important files; Create pixel art characters; Design birthday card; Draw house and landscape; Make school poster; Create emoji collection; Design 3D room layout; Create 3D character - plus 83 more on the course page.

### Middle School Mathematics Mastery: Pre-Algebra & Geometry

`/courses/comprehensive-middle-school-mathematics-mastery` · 12 months (52 weeks) · Complete Beginner to Advanced Middle School Level

  - PHASE 1: Number Systems & Fundamental Operations (Months 1-3, Weeks 1-13)
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
  - PHASE 2: Fractions, Decimals, and Proportional Reasoning (Months 4-6, Weeks 14-26)
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
  - PHASE 3: Algebraic Thinking and Pre-Algebra (Months 7-9, Weeks 27-39)
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
  - PHASE 4: Geometry, Statistics, and Advanced Problem Solving (Months 10-12, Weeks 40-52)
    Master geometric concepts, statistical analysis, probability, and complex problem-solving strategies.
    - Months 10-11: Geometry Foundations
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
      - Advanced Number Theory
      - Mathematical Connections
      - Competition Mathematics
      - Test Preparation and Strategies
    - Month 12: Final Projects and Comprehensive Review
      - Comprehensive Review and Integration
      - Final Capstone Projects
      - Final Assessment and Future Planning

**Projects students build:** Create a number system timeline; Design a place value game; Real-world number investigation project; Budget planning project; Distance calculation map activity; Integer game design; Multiplication strategy booklet; Area calculation for room design; Array art project; Factor tree artwork; Divisibility rule investigation; Prime number sieve project; PEMDAS puzzle creation; Expression evaluation game; Calculator investigation project - plus 111 more on the course page.

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

### Mobile App Development for Teens: Publish to App Stores

`/courses/complete-app-development-masterclass-for-teens` · 18 months (78 weeks) · Complete Beginner to Professional App Developer

  - PHASE 1: Foundation & Design Thinking (Months 1-4, Weeks 1-17)
    Build rock-solid programming fundamentals and learn to think like an app designer. Create your first apps using web technologies.
    - Months 1-2: Programming Fundamentals & App Concepts
      - Introduction to App Development World
      - JavaScript Programming Essentials
      - UI/UX Design Fundamentals
      - Advanced JavaScript & ES6+
    - Months 3-4: Web Apps & React Fundamentals
      - React.js Fundamentals
      - React State Management & Routing
      - Progressive Web Apps (PWAs)
      - Backend Basics & Firebase
      - Phase 1 Capstone Project
  - PHASE 2: Native Mobile Development (Months 5-9, Weeks 18-39)
    Master native Android and iOS development. Build apps that feel truly native with platform-specific features.
    - Months 5-6: Android Development with Kotlin
      - Android Studio & Kotlin Basics
      - Android UI Development
      - Android Data & Storage
      - Advanced Android Features
      - Jetpack Compose (Modern Android UI)
    - Months 7-8: iOS Development with Swift
      - Xcode & Swift Fundamentals
      - iOS UI Development with UIKit
      - SwiftUI - Modern iOS Development
      - iOS Data Persistence & Networking
      - Advanced iOS Features
    - Month 9: Publishing & App Store
      - App Store Preparation
      - Google Play Store Publishing
      - App Monetization Strategies
      - App Marketing & Growth
      - Phase 2 Capstone
  - PHASE 3: Cross-Platform Development (Months 10-13, Weeks 40-56)
    Master cross-platform frameworks to build once and deploy everywhere. Learn React Native and Flutter.
    - Months 10-11: React Native Development
      - React Native Fundamentals
      - React Native Advanced Features
      - React Native UI Libraries & Styling
      - State Management & Testing
      - Building & Deployment
    - Months 12-13: Flutter Development
      - Flutter & Dart Basics
      - Flutter UI Development
      - Flutter State Management
      - Flutter Backend Integration
      - Flutter Advanced Features
    - Month 13: Cross-Platform Mastery
      - Advanced Cross-Platform Patterns
      - Backend as a Service (BaaS) Mastery
      - App Analytics & Performance
      - Cross-Platform Game Development
      - Phase 3 Capstone Project
  - PHASE 4: Advanced Technologies & Launch (Months 14-18, Weeks 57-78)
    Master cutting-edge technologies, build viral apps, and launch your startup.
    - Months 14-15: AI, AR & Advanced Features
      - AI Integration in Mobile Apps
      - Augmented Reality (AR) Development
      - Advanced Gaming Features
      - IoT & Wearables Integration
      - AI Features & Agents in Mobile Apps
    - Months 16-17: Startup & Business Skills
      - App Business Fundamentals
      - Growth Hacking & Viral Marketing
      - User Psychology & Retention
      - Scaling & Team Building
      - Advanced Monetization & Analytics
    - Month 18: Final Projects & Launch
      - Final Project Planning
      - Final Project Development
      - Launch Preparation
      - Launch Week & Celebration
    - Weeks 77-78: Career Launch & Beyond
      - Portfolio & Career Preparation
      - Future Technologies & Continued Learning
      - Graduation & Celebration

**Projects students build:** Research and present your favorite app's history; Set up complete development environment; Create your first web-based calculator app; Design your dream app concept (mockup); To-do list app with local storage; Quiz game with score tracking; Weather app using API; Instagram-style photo filter app (basic); Redesign a popular app for better UX; Create complete UI kit in Figma; Design your social media app mockup; Build clickable prototype; Movie database app with TMDB API; Real-time chat app (web version); Music player with Spotify Web API - plus 202 more on the course page.

### MySQL Database Masterclass: SQL, Design & Administration

`/courses/mysql-database-complete-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Database Expert

  - PHASE 1: SQL Fundamentals & Database Basics (Months 1-3, Weeks 1-13)
    Build rock-solid foundations in SQL, understand relational database concepts, and master basic to intermediate queries.
    - Months 1-2: Database Fundamentals & Basic SQL
      - Introduction to Databases & MySQL Setup
      - SQL Basics - Data Definition Language (DDL)
      - SQL Basics - Data Manipulation Language (DML)
      - Querying Data - SELECT Mastery
    - Month 3: Relationships & Joins
      - Database Relationships
      - Mastering Joins
      - Subqueries & Set Operations
  - PHASE 2: Advanced SQL & Database Design (Months 4-6, Weeks 14-26)
    Master advanced SQL features, stored procedures, triggers, and professional database design.
    - Months 4-5: Advanced SQL Programming
      - Views & Indexes
      - Stored Procedures
      - Functions & Triggers
      - Transactions & Concurrency
      - Advanced Database Design
    - Month 6: Programming Integration
      - MySQL with Python
      - MySQL with Other Languages
      - NoSQL Features in MySQL
      - Testing & Version Control
      - Phase 2 Capstone Project
  - PHASE 3: Administration & Performance (Months 7-9, Weeks 27-39)
    Master database administration, performance tuning, security, and maintenance.
    - Months 7-8: Database Administration
      - MySQL Architecture & Storage Engines
      - User Management & Security
      - Backup & Recovery
      - Performance Tuning Basics
      - Monitoring & Maintenance
    - Month 9: Advanced Performance
      - Advanced Performance Tuning
      - Performance Schema & Sys Schema
      - Scaling MySQL
      - Troubleshooting
      - Phase 3 Capstone Project
  - PHASE 4: High Availability & Cloud (Months 10-12, Weeks 40-52)
    Master replication, clustering, cloud deployment, and enterprise architecture.
    - Months 10-11: Replication & High Availability
      - MySQL Replication
      - MySQL Group Replication & InnoDB Cluster
      - Alternative HA Solutions
      - Cloud MySQL - AWS
      - Cloud MySQL - GCP & Azure
    - Month 12: Enterprise & Career
      - Enterprise Architecture
      - Migration & Upgrades
      - DevOps for Databases
      - Career Development
      - Final Project & Graduation
    - Continuous Learning & Specialization
      - Staying Current
      - Specialization Options
      - Advanced Topics
      - Leadership & Mentorship

**Projects students build:** Install MySQL on local machine; Set up MySQL Workbench; Create first database and tables; Configure basic security settings; Design employee database schema; Create online store database structure; Build student management system tables; Library management database design; Populate employee database with data; Create product catalog with 1000+ items; Build customer records system; Inventory management data setup; Sales reporting queries; Customer analytics dashboard queries; Product search functionality - plus 149 more on the course page.

### MySQL for Teens: SQL Queries, Database Design & Security

`/courses/mysql-mastery-for-teens` · 12 months (52 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Foundation & Core MySQL Skills (Months 1-6, Weeks 1-26)
    Build rock-solid database fundamentals. Learn what databases are, master SQL queries, and create your first real-world database applications.
    - Months 1-2: Database Fundamentals & MySQL Basics
      - Introduction to Databases & MySQL Setup
      - SQL Basics: Creating and Managing Databases
      - Data Manipulation: INSERT, SELECT Basics
      - UPDATE, DELETE, and Data Integrity
    - Months 3-4: Advanced Queries & Functions
      - MySQL Functions: String and Numeric
      - Date/Time Functions and Operations
      - Aggregate Functions and Grouping
      - Subqueries and Nested Queries
      - Month 3-4 Review & Assessment
    - Months 5-6: Relationships & Database Design
      - Table Relationships and JOINS
      - Advanced JOINS and Set Operations
      - Database Design & Normalization
      - Constraints and Data Validation
      - Phase 1 Capstone Project
  - PHASE 2: Advanced MySQL & Professional Skills (Months 7-12, Weeks 27-52)
    Master advanced MySQL features, administration, optimization, and real-world applications to become a professional database developer.
    - Months 7-8: Advanced MySQL Features
      - Views and Virtual Tables
      - Stored Procedures and Functions
      - Triggers and Events
      - Transactions and Concurrency
      - Indexing and Query Optimization
    - Months 9-10: Database Administration
      - User Management and Security
      - Backup and Recovery
      - Performance Monitoring and Tuning
      - Replication and High Availability
      - MySQL with Programming Languages
    - Months 11-12: Real-World Applications & Career Prep
      - Big Data and Analytics
      - Cloud Databases and Modern Deployments
      - NoSQL and MySQL Integration
      - Industry Best Practices and Standards
      - Final Capstone & Career Preparation
  - PHASE 3: Placeholder - Structure Required by Template
    This phase is not applicable for the 1-year MySQL course but included to maintain JSON structure integrity.
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
  - PHASE 4: Placeholder - Structure Required by Template
    This phase is not applicable for the 1-year MySQL course but included to maintain JSON structure integrity.
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A
      - N/A
    - Not Applicable
      - N/A
      - N/A
      - N/A

**Projects students build:** Install and configure MySQL environment; Create 'MyLife' database for personal data; Design a simple contact list database; School database with students and classes; Gaming stats tracker database; Music library database structure; Populate school database with student data; Create and query a movie ratings database; Build a sports team roster system; Grade management system with updates; Inventory system with stock updates; Social media profile manager; Username generator with string functions; Grade calculator with numeric functions; Data cleaning toolkit - plus 74 more on the course page.

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

### Princess Coders: Complete Coding Course for Girls & Women

`/courses/princess-coders-complete-coding-masterclass` · 12 months (52 weeks) · Complete Beginner to Advanced Developer

  - PHASE 1: Foundation & Creative Coding (Months 1-3, Weeks 1-13)
    Start your coding journey with fun, creative projects. Build confidence while learning the fundamentals of programming and web development.
    - Months 1-2: Introduction to Coding & Web Basics
      - Welcome to Princess Coders - Your Tech Journey Begins
      - HTML - Building Your Digital Kingdom
      - CSS - Styling Your Digital Creations
      - JavaScript - Making Things Interactive
    - Month 3: Advanced JavaScript & Creative Projects
      - Advanced JavaScript Concepts
      - Creative Coding & Visual Projects
      - Month 3 Integration Project
      - Phase 1 Review & Assessment
      - Bridge Week - Preparing for Advanced Topics
    - Months 4-6: Frontend Development Mastery
      - React.js Fundamentals
      - Advanced React & State Management
      - Modern CSS & UI Libraries
      - TypeScript & Modern Tools
      - Phase 2 Capstone Project
  - PHASE 2: Frontend Development & Design (Months 4-6, Weeks 14-26)
    Master modern frontend development with React, create beautiful user interfaces, and build professional web applications.
    - Months 4-5: React & Modern Frontend
      - React.js Foundation
      - Advanced React Patterns
      - State Management & Data Flow
      - UI/UX Design for Developers
      - Modern Styling Solutions
    - Month 6: Advanced Frontend & Portfolio
      - Next.js & Modern Frameworks
      - Testing & Quality Assurance
      - Performance & Optimization
      - TypeScript Mastery
      - Phase 2 Final Project
    - Months 7-9: Backend Development
      - Node.js Fundamentals
      - Express.js & REST APIs
      - Databases & Data Modeling
      - Authentication & Security
      - Phase 3 Backend Project
  - PHASE 3: Backend Development & Databases (Months 7-9, Weeks 27-39)
    Master server-side development, databases, APIs, and build powerful backend systems that power modern applications.
    - Months 7-8: Server-Side Development
      - Introduction to Backend Development
      - Building APIs with Express.js
      - Databases - Storing Your Data
      - Authentication & User Management
      - Real-time Features & WebSockets
    - Month 9: Advanced Backend & Integration
      - Advanced API Development
      - Cloud Services & Deployment
      - SQL Databases & Advanced Queries
      - Performance & Optimization
      - Phase 3 Final Project
    - Months 10-12: Professional Development
      - Mobile App Development
      - AI & Machine Learning for Web
      - DevOps & Automation
      - Entrepreneurship & Freelancing
      - Advanced Topics & Specialization
  - PHASE 4: Professional Skills & Career Launch (Months 10-12, Weeks 40-52)
    Master professional development skills, build your portfolio, prepare for your tech career, and join the global community of women in tech.
    - Months 10-11: Advanced Projects & Specialization
      - Building Your Signature Project
      - Women in Tech Leadership
      - Specialization Tracks (Choose One)
      - Open Source Contribution
      - Portfolio & Personal Branding
    - Month 12: Career Launch & Graduation
      - Job Search Preparation
      - Interview Mastery
      - Negotiation & Career Planning
      - Final Capstone Presentation
      - Graduation & Beyond
    - Bonus Month: Lifetime Learning
      - Advanced Specializations
      - Entrepreneurship Path
      - Community Leadership
      - Lifetime Achievement
    - Princess Coders Forever
      - Alumni Network & Support
      - Giving Back Program
      - Your Tech Journey Continues

**Projects students build:** Create your Princess Coder profile page; Design your digital business card; Build an 'About Me' interactive story; Personal blog about your interests; Recipe collection website; Digital diary or journal; Online portfolio for your hobbies; Fashion lookbook website; Interactive greeting card creator; Photo gallery with filters; Animated story presentation; Interactive quiz about your favorite topic; Simple drawing application; To-do list with style; Mood tracker application - plus 202 more on the course page.

### Problem-Solving & Computational Thinking Course for Kids

`/courses/problem-solving-and-computational-thinking-for-kids` · 6 months (26 weeks) · Complete Beginner to Advanced Problem Solver

  - PHASE 1: Thinking Foundations (Months 1-2, Weeks 1-8)
    Build core thinking skills through puzzles, patterns, and logical reasoning. Start with unplugged activities and gradually introduce coding concepts.
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
      - Mid-Program Assessment
    - Months 5-6: Advanced Problem Solving
      - Advanced Algorithms
      - Robotics Problem Solving
      - Data and Logic Problems
      - Creative Problem Solving
      - Final Capstone Project
  - PHASE 2: Specialized Problem-Solving Tracks
    Choose specialized areas: Science, Technology, Engineering, Arts, or Mathematics
    - Science Problem Solving Track
      - Scientific Method & Experimentation
      - Environmental Problem Solving
      - Space and Astronomy Challenges
      - Biology and Health Solutions
      - Chemistry and Materials
    - Technology Problem Solving Track
      - App Development Problem Solving
      - AI and Machine Learning
      - Internet of Things (IoT)
      - Cybersecurity Basics
      - Web Development Logic
    - Engineering Problem Solving Track
      - Mechanical Engineering
      - Electrical Engineering
      - Civil Engineering
      - Aerospace Engineering
      - Final Integration Project
  - ADVANCED TRACKS: Competitive & Specialized
    Competition preparation and specialized problem-solving domains
    - Competition Preparation
      - Coding Competitions
      - Math Olympiad Preparation
      - Science Olympiad
      - Robotics Competitions
      - Hackathon Preparation
    - Arts & Creative Problem Solving
      - Design Thinking Mastery
      - Music and Sound Problem Solving
      - Visual Arts and Graphics
      - Storytelling and Narrative
      - Performance and Drama
    - Mathematics Deep Dive
      - Advanced Number Theory
      - Geometry and Spatial Reasoning
      - Statistics and Data Science
      - Logic and Discrete Math
      - Graduation & Future Path
  - ENRICHMENT: Real-World Applications
    Apply problem-solving skills to real-world challenges and career exploration
    - Social Problem Solving
      - Community Service Projects
      - Global Challenges
      - Entrepreneurship for Kids
      - Innovation Lab
      - Career Exploration
    - Teaching & Leadership
      - Peer Teaching
      - Leadership Development
      - Content Creation
      - Community Building
      - Research Skills
    - Advanced Specializations
      - Quantum Computing Basics
      - AI Agents for Problem Solving
      - Bioinformatics Basics
      - Neuroscience and Brain
    - Mastery & Graduation
      - Portfolio Excellence
      - Final Projects Showcase
      - Graduation & Beyond

**Projects students build:** Create a puzzle book; Design a treasure hunt; Solve 20 logic puzzles; Build pattern art; Write algorithms for daily tasks; Create a board game with rules; Design a flowchart adventure; Program a 'human robot'; Complete Code.org Course A; Create digital art with code; Solve 50 coding puzzles; Design custom maze challenges; Math puzzle collection; Create a math game; Budget planning project - plus 216 more on the course page.

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

### Python & AI Automation: Machine Learning, NLP & Scripting

`/courses/python-ai-automation-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Python Foundation & Core Programming (Months 1-3, Weeks 1-13)
    Build rock-solid Python fundamentals. Learn programming concepts, master Python syntax, and create your first automation projects.
    - Months 1-2: Python Fundamentals & Programming Logic
      - Introduction to Python & Setup
      - Variables, Data Types & Operations
      - Control Flow & Loops
      - Data Structures in Python
    - Month 3: Functions, Modules & OOP
      - Functions & Functional Programming
      - Object-Oriented Programming
      - Modules, Packages & Error Handling
      - File Handling & Data Processing
      - Phase 1 Capstone Project
    - Months 4-6: Advanced Python & Automation
      - Advanced Python Concepts
      - Database Programming
      - Web Development with Python
      - Network Programming & APIs
      - Phase 2 Capstone Project
  - PHASE 2: Web Scraping & Automation Tools (Months 4-6, Weeks 14-26)
    Master web scraping, browser automation, task automation, and building robust automation frameworks.
    - Months 4-5: Web Scraping & Browser Automation
      - Web Scraping Fundamentals
      - Advanced Web Scraping
      - Selenium & Browser Automation
      - Alternative Automation Tools
      - Data Processing & Analysis
    - Month 6: Enterprise Automation & Integration
      - RPA & Process Automation
      - API Development & Microservices
      - Cloud Automation & DevOps
      - Testing & Quality Assurance
      - Security & Best Practices
    - Months 7-9: AI & Machine Learning
      - Machine Learning Fundamentals
      - Supervised Learning Algorithms
      - Unsupervised Learning & Deep Learning Intro
      - Deep Learning with TensorFlow/PyTorch
      - Phase 3 Capstone Project
  - PHASE 3: Advanced AI & Computer Vision (Months 7-9, Weeks 27-39)
    Master advanced AI techniques, computer vision, natural language processing, and production AI systems.
    - Months 7-8: Computer Vision & Image Processing
      - Image Processing Fundamentals
      - Advanced Computer Vision
      - Deep Learning for Computer Vision
      - Natural Language Processing
      - Advanced NLP with Transformers
    - Month 9: Reinforcement Learning & Advanced AI
      - Reinforcement Learning Basics
      - Time Series & Forecasting
      - AI Ethics & Explainable AI
      - Edge AI & IoT Integration
      - MLOps & Production Systems
    - Months 10-12: Advanced Systems & Production
      - Distributed Computing & Big Data
      - Advanced Deep Learning
      - Cloud AI Services & Deployment
      - Industry Applications & Specializations
      - Phase 4 Final Capstone - Part 1
  - PHASE 4: Production Systems & Career Preparation (Months 10-12, Weeks 40-52)
    Master production deployment, advanced AI systems, and prepare for professional AI/automation engineering roles.
    - Months 10-11: Production Systems & Enterprise AI
      - Enterprise AI Architecture
      - AutoML & Model Optimization
      - Advanced Automation Frameworks
      - Conversational AI & Chatbots
      - AI Product Development
    - Month 11: Integration & Advanced Topics
      - Integration with Enterprise Systems
      - Advanced Data Engineering
      - Specialized AI Applications
      - Performance & Scalability
      - Open Source Contribution
    - Month 12: Final Projects & Career Launch
      - Final Capstone - Development
      - Final Capstone - Deployment
      - Portfolio & Personal Branding
      - Interview Preparation
    - Month 12: Career Launch & Continuous Learning
      - Job Search & Applications
      - Freelancing & Consulting
      - Continuous Learning & Growth

**Projects students build:** Set up complete Python development environment; Simple calculator program; Personal information collector; Temperature converter (C/F/K); Text analyzer and formatter; Simple encryption/decryption tool; Number guessing game; Pattern generator (pyramids, diamonds); Prime number calculator; Password strength validator; Student management system; Shopping cart application; Contact book with search; Data structure performance analyzer; Modular calculator with functions - plus 215 more on the course page.

### Python & AI for Kids: Coding, Games, Robotics & AI Projects

`/courses/python-ai-kids-masterclass` · 12 months (52 weeks) · Complete Beginner to Advanced Young Programmer

  - PHASE 1: Python Basics & Fun with Code (Months 1-3, Weeks 1-13)
    Start your coding adventure! Learn Python basics through fun projects, colorful graphics, and exciting games.
    - Months 1-2: Python Fundamentals & First Programs
      - Welcome to Programming & Setup
      - Variables & Data Types - Teaching Python to Remember
      - Making Decisions with If-Else
      - Loops - Making Python Repeat
    - Month 3: Turtle Graphics & Visual Programming
      - Introduction to Turtle Graphics
      - Advanced Turtle Projects
      - Phase 1 Showcase & Review
  - PHASE 2: Creative Coding & Game Development (Months 4-6, Weeks 14-26)
    Level up your Python skills! Create awesome games, work with data, and build useful applications.
    - Months 4-5: Lists, Functions & Advanced Concepts
      - Lists & Collections
      - Functions - Reusable Code Blocks
      - File Handling & Data
      - Object-Oriented Programming Basics
      - Error Handling & Debugging
    - Month 6: Game Development with Pygame
      - Introduction to Pygame
      - Building Complete Games
      - Advanced Game Features
      - Creative Coding Projects
      - Phase 2 Game Showcase
  - PHASE 3: Introduction to AI & Machine Learning (Months 7-9, Weeks 27-39)
    Enter the world of AI! Learn how computers can learn, recognize patterns, and make intelligent decisions.
    - Months 7-8: AI Fundamentals & Smart Programs
      - What is Artificial Intelligence?
      - Smart Decision Making Programs
      - Data Science for Kids
      - Introduction to Machine Learning
      - Neural Networks Basics
    - Month 9: Computer Vision & Image AI
      - Computer Vision Basics
      - Advanced Computer Vision
      - Image Recognition Projects
      - Creative AI Art
      - Phase 3 AI Exhibition
  - PHASE 4: Advanced AI Projects & Future Tech (Months 10-12, Weeks 40-52)
    Build amazing AI projects! Create chatbots, voice assistants, and your own AI-powered applications.
    - Months 10-11: Natural Language & Chatbots
      - Natural Language Processing Basics
      - Building Chatbots
      - Voice Assistants & Speech
      - AI APIs & Cloud Services
      - Internet of Things (IoT) Basics
    - Month 11: Robotics & Advanced Projects
      - Robotics with Python
      - Game AI & Reinforcement Learning
      - Data Visualization & Dashboards
      - Web Development & AI Integration
      - Mobile Apps & AI
    - Month 12: Final Projects & Future Path
      - Ethical AI & Future Technologies
      - Advanced AI Topics
      - Hackathon Preparation
      - Open Source & Community
    - Final Month: Capstone & Graduation
      - Final Capstone Project - Planning
      - Final Capstone Project - Development
      - Showcase & Future Journey

**Projects students build:** Personalized greeting program; Magic calculator with special messages; Story generator with your name; Interactive story with user input; Age calculator with birthday messages; Mad Libs game generator; Personal quiz about yourself; Adventure game with choices; Grade calculator with feedback; Virtual pet mood checker; Rock, Paper, Scissors game; Pattern art generator; Guessing game with attempts; Countdown timer with effects; ASCII art animation - plus 147 more on the course page.

### Python Programming for Teens: Zero to Advanced in 2 Years

`/courses/python-complete-masterclass-teens` · 24 months (104 weeks) · Absolute Beginner to Python Expert

  - PHASE 1: Python Foundations & Programming Logic (Months 1-6, Weeks 1-26)
    Master Python fundamentals, programming logic, data structures, algorithms, and object-oriented programming.
    - Months 1-2: Python Basics & Programming Fundamentals
      - Introduction to Python & Setup
      - Control Flow & Logic
      - Loops & Iterations
      - Functions & Functional Programming
    - Months 3-4: Data Structures & Collections
      - Lists & Tuples Mastery
      - Dictionaries & Sets
      - Strings & Text Processing
      - Advanced Data Structures
      - Algorithms & Problem Solving
    - Months 5-6: Object-Oriented Programming & Design Patterns
      - OOP Fundamentals
      - Inheritance & Polymorphism
      - Magic Methods & Protocols
      - Design Patterns
      - Phase 1 Capstone Project
  - PHASE 2: Web Development & Full-Stack Python (Months 7-12, Weeks 27-52)
    Master web development with Django and Flask, build APIs, work with databases, and create full-stack applications.
    - Months 7-8: Web Fundamentals & Flask
      - Web Development Basics
      - Flask Framework Mastery
      - Database Programming
      - API Development
      - Frontend Integration
    - Months 9-10: Django & Advanced Web Development
      - Django Fundamentals
      - Django Advanced Features
      - Full-Stack Development
      - Cloud & Deployment
      - Testing & Quality Assurance
    - Months 11-12: Microservices & Advanced Architecture
      - Microservices Architecture
      - AsyncIO & Concurrency
      - GraphQL & Modern APIs
      - DevOps for Python
      - Phase 2 Capstone Project
  - PHASE 3: Specializations & Advanced Python (Months 13-18, Weeks 53-78)
    Master specialized domains: game development, data science, automation, machine learning, and contribute to open source.
    - Months 13-14: Game Development & Graphics
      - Pygame Mastery
      - 3D Graphics & Advanced Games
      - Game AI & Procedural Generation
      - Mobile Game Development
      - Game Publishing & Monetization
    - Months 15-16: Data Science & Machine Learning
      - Data Science with Python
      - Data Visualization
      - Machine Learning Fundamentals
      - Deep Learning with Python
      - AI Applications
    - Months 17-18: Automation & Advanced Tools
      - Automation & Scripting
      - GUI Development
      - Network Programming
      - Cybersecurity with Python
      - Phase 3 Capstone Project
  - PHASE 4: Expert Python & Professional Development (Months 19-24, Weeks 79-104)
    Master advanced Python internals, contribute to Python itself, build frameworks, and launch your career.
    - Months 19-20: Python Internals & Advanced Concepts
      - Python Internals
      - Metaprogramming & Advanced Features
      - Performance Optimization
      - Building Frameworks
      - Compiler & Interpreter Design
    - Months 21-22: Industry & Enterprise Python
      - Enterprise Python
      - Cloud Native Python
      - IoT & Hardware
      - Scientific Python
      - AI Agents & Automation with Python
    - Month 23: Open Source & Community
      - Open Source Contribution
      - Teaching & Mentoring
      - Career Development
      - Python Ecosystem Mastery
    - Month 24: Final Projects & Graduation
      - Final Capstone - Part 1
      - Final Capstone - Part 2
      - Graduation & Beyond

**Projects students build:** Personal assistant chatbot; Calculator with memory; Mad libs story generator; Temperature converter with GUI preview; Rock-Paper-Scissors-Lizard-Spock game; Password strength analyzer with rules; Quiz game with scoring system; Decision tree adventure game; Pattern generator (ASCII art); Prime number visualizer; Multiplication table game; Progress bar implementation; Homework helper library; Unit converter with 50+ conversions; Function benchmark tool - plus 223 more on the course page.

### Python Programming Masterclass: Zero to Advanced Pro

`/courses/python-programming-masterclass-zero-to-advanced-college` · 12 months (52 weeks) · Complete Beginner to Advanced Professional

  - PHASE 1: Foundation & Core Python Skills (Months 1-3, Weeks 1-13)
    Build rock-solid Python fundamentals. Learn programming logic, master Python syntax, and create your first applications.
    - Months 1-2: Python Fundamentals & Programming Basics
      - Introduction to Programming & Python Setup
      - Variables, Data Types & Operators
      - Control Flow: Conditions & Loops
      - Functions & Modular Programming
    - Month 3: Data Structures & String Manipulation
      - Lists & List Operations
      - Tuples, Sets & Dictionaries
      - Advanced String Manipulation
  - PHASE 2: Intermediate Python & Algorithm Mastery (Months 4-6, Weeks 14-26)
    Master data structures, algorithms, object-oriented programming, file handling, and testing.
    - Months 4-5: Object-Oriented Programming & Advanced Concepts
      - Introduction to OOP Concepts
      - OOP Principles: Inheritance & Polymorphism
      - File Handling & Exception Handling
      - Modules, Packages & Standard Library
      - Comprehensions & Functional Programming
    - Month 6: Algorithms, Data Structures & Testing
      - Algorithms & Problem Solving
      - Advanced Data Structures
      - Testing & Debugging
      - Advanced Python Features
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - This section adapts to Python context
      - Version Control with Git & GitHub
      - Virtual Environments & Package Management
      - Regular Expressions & Text Processing
      - Working with APIs & Web Scraping Basics
      - Concurrency & Parallel Programming
  - PHASE 3: Web Development, Databases & Automation (Months 7-9, Weeks 27-39)
    Master web development with Django/Flask, databases, REST APIs, web scraping, and automation.
    - Months 7-8: Web Development with Flask & Django
      - Flask Web Framework Fundamentals
      - Flask Advanced & REST APIs
      - Django Web Framework Fundamentals
      - Django Models & Database
      - Django Forms & User Authentication
    - Month 9: Databases, ORMs & Advanced Web Topics
      - SQL Databases with Python
      - NoSQL Databases & MongoDB
      - Django REST Framework & API Development
      - Web Scraping & Automation
      - Task Automation & Scripting
    - PHASE 3 COMPLETION - Month 9 Continued
      - Deployment & Production Best Practices
      - Security Best Practices
      - Performance Optimization & Caching
      - Real-time Applications & WebSockets
      - Phase 3 Capstone Project
  - PHASE 4: Data Science, Machine Learning & Professional Skills (Months 10-12, Weeks 40-52)
    Master data science, machine learning, AI, cloud computing, and professional development practices.
    - Months 10-11: Data Science & Machine Learning
      - Data Science Fundamentals with NumPy
      - Data Analysis with Pandas
      - Data Visualization with Matplotlib & Seaborn
      - Machine Learning Fundamentals
      - Advanced Machine Learning
    - Month 12: Deep Learning, Cloud & Professional Skills
      - Deep Learning with TensorFlow/Keras
      - Natural Language Processing (NLP)
      - Cloud Computing & AWS for Python
      - DevOps & CI/CD for Python
      - Specialized Python Topics
    - PHASE 4 COMPLETION - Final Month Activities
      - Open Source Contribution
      - Python Best Practices & Design Patterns
      - Performance & Optimization
      - Interview Preparation
    - Final Projects & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Portfolio Building

**Projects students build:** Hello World variations (personalized greetings); Simple calculator using print statements; About Me program (display personal information); ASCII art creator; Temperature converter (Celsius/Fahrenheit); Age calculator with days, hours, minutes; Simple interest calculator; BMI (Body Mass Index) calculator; Tip calculator with bill splitting; Number guessing game with attempts; Grade calculator with letter grades; Even/odd number checker; Multiplication table generator; Pattern printing (stars, pyramids, diamonds); Simple password validator - plus 247 more on the course page.

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

### Queen Coders: 1-Year Advanced Tech Leadership for Women

`/courses/queen-coders-advanced-tech-leadership` · 12 months (52 weeks) · Intermediate Developer to Tech Leader/Architect

  - PHASE 1: Advanced Engineering & Architecture (Months 1-3, Weeks 1-13)
    Master advanced programming paradigms, system design, and cloud-native architecture. Build enterprise-grade applications.
    - Months 1-2: Advanced Programming & System Design
      - Advanced Software Engineering Principles
      - Cloud Architecture & Infrastructure
      - Advanced Databases & Data Architecture
      - Performance Engineering & Optimization
    - Month 3: Security & Enterprise Architecture
      - Advanced Security Engineering
      - API Design & GraphQL Mastery
      - Enterprise Integration Patterns
      - Phase 1 Comprehensive Project
      - Bridge to AI/ML & Emerging Tech
    - Months 4-6: AI/ML & Agent Specialization
      - Machine Learning Engineering
      - Advanced AI Applications
      - AI Engineering & Agent Development
      - Data Engineering & Analytics
      - Phase 2 Innovation Project
  - PHASE 2: Specialized Technologies & Innovation (Months 4-6, Weeks 14-26)
    Master cutting-edge technologies including AI/ML, blockchain, and data engineering while building industry-changing solutions.
    - Months 4-5: Deep Specialization
      - Advanced Machine Learning & Deep Learning
      - LLMs & Generative AI
      - AI Agent Architecture at Scale
      - Cloud-Native & Platform Engineering
      - Quantum Computing & Future Tech
    - Month 6: Advanced Integration & Platforms
      - Enterprise Architecture Patterns
      - DevOps & SRE Excellence
      - Technical Leadership Skills
      - Product Engineering & Strategy
      - Phase 2 Platform Launch
    - Months 7-9: Leadership & Management
      - Engineering Leadership
      - Startup Engineering & Entrepreneurship
      - Open Source & Community Leadership
      - Innovation & R&D Leadership
      - Phase 3 Leadership Summit
  - PHASE 3: Leadership & Strategic Technology (Months 7-9, Weeks 27-39)
    Develop executive leadership skills, master strategic technology decisions, and prepare for C-level positions.
    - Months 7-8: Technical Leadership Excellence
      - Staff/Principal Engineering Skills
      - Engineering Management Mastery
      - VP/Director Level Skills
      - CTO/VP Engineering Preparation
      - Board Readiness & Governance
    - Month 9: Strategic Innovation & Impact
      - Corporate Innovation Leadership
      - Technology for Social Impact
      - Global Technology Leadership
      - Women Tech Leaders Network
      - Phase 3 Executive Presentation
    - Months 10-12: Entrepreneurship & Industry Leadership
      - Tech Entrepreneurship Mastery
      - Venture Capital & Investment
      - Industry Influence & Thought Leadership
      - Building Your Legacy
      - Final Capstone - Industry Impact
  - PHASE 4: Industry Leadership & Global Impact (Months 10-12, Weeks 40-52)
    Establish yourself as an industry leader, build influential networks, and create lasting impact in the technology world.
    - Months 10-11: Executive Excellence
      - C-Suite Technology Leadership
      - Global Women Tech Leaders
      - Venture Building & Scaling
      - Technology Policy & Regulation
      - Personal Brand as Tech Leader
    - Month 12: Graduation & Global Impact
      - Final Capstone - Industry Transformation
      - Queen Coders Summit Preparation
      - Career Acceleration & Placement
      - Queen Coders Global Summit
      - Graduation & Coronation Ceremony
    - Beyond Graduation: Lifetime Queendom
      - Queen's Advisory Council
      - Queen's Innovation Lab
      - Queen's Global Network
      - Queen's Eternal Legacy
    - The Queen Coders Dynasty
      - Queens Changing the World
      - Queens Building Empires
      - Queens Forever - Your Reign Begins

**Projects students build:** Design and implement a distributed cache system; Build a custom ORM framework; Create a microservices architecture blueprint; Implement advanced design patterns library; Multi-region Kubernetes deployment; Serverless e-commerce backend; Infrastructure automation with Terraform; Cloud cost optimization audit tool; Build a sharded database system; Real-time analytics pipeline with Kafka; Graph-based recommendation engine; Data warehouse ETL pipeline; Build a high-performance web server; Optimize a slow application (10x improvement); Implement custom load balancer - plus 205 more on the course page.

### React for Teens: Build Real Apps, Zero to Pro Developer

`/courses/react-for-teens-complete-masterclass` · 12 months (52 weeks) · Complete Beginner to Professional React Developer

  - PHASE 1: Web Foundations & JavaScript (Months 1-3, Weeks 1-13)
    Start from absolute zero and build the foundation you need for React. Learn how websites work and master JavaScript through fun, interactive projects.
    - Months 1-2: HTML, CSS & Web Basics
      - Your First Steps in Web Development
      - CSS - Making Things Look Amazing
      - Advanced CSS & Modern Web Design
      - JavaScript Fundamentals - Programming Basics
    - Month 3: JavaScript Mastery for React
      - JavaScript DOM Manipulation
      - Modern JavaScript (ES6+) for React
      - JavaScript Project Week & React Prep
  - PHASE 2: React Fundamentals & Core Concepts (Months 4-6, Weeks 14-26)
    Dive into React! Learn the library that powers Facebook, Instagram, Netflix, and countless other apps. Build your first React applications.
    - Months 4-5: React Basics & Components
      - Introduction to React
      - React State & Interactivity
      - React Hooks Deep Dive
      - React Router & Navigation
      - Working with APIs in React
    - Month 6: Building Real React Applications
      - Styling React Applications
      - Forms & Validation in React
      - React Performance Optimization
      - Testing React Applications
      - Phase 2 Capstone Project
  - PHASE 3: Advanced React & State Management (Months 7-9, Weeks 27-39)
    Master advanced React patterns, state management, real-time features, and start building production-ready applications.
    - Months 7-8: State Management & Advanced Patterns
      - Context API & Global State
      - Redux State Management
      - Alternative State Management
      - Advanced React Patterns
      - Real-time Features with WebSockets
    - Month 9: Full Stack React Development
      - Backend Basics for React Developers
      - GraphQL with React
      - Authentication & Security
      - Deployment & DevOps Basics
      - Phase 3 Capstone Project
    - Month 9 (Extended): Advanced Topics
      - TypeScript with React
      - React Ecosystem & Libraries
      - Progressive Web Apps (PWAs)
      - React Performance Mastery
      - Advanced Project Week
  - PHASE 4: Professional React & Career Preparation (Months 10-12, Weeks 40-52)
    Master React Native, Next.js, advanced architectures, and prepare for your career as a professional React developer.
    - Months 10-11: React Native & Mobile Development
      - React Native Fundamentals
      - React Native Advanced Features
      - Next.js for Production React
      - Advanced Next.js & Full Stack
      - Remix Framework Introduction
    - Month 11-12: Professional Skills & Career Prep
      - Advanced Architecture Patterns
      - Open Source Contribution
      - Interview Preparation
      - Freelancing & Entrepreneurship
      - Advanced React Ecosystem
    - Month 12: Final Projects & Graduation
      - Capstone Project Planning
      - Capstone Development Sprint 1
      - Capstone Development Sprint 2
      - Launch Week & Presentation
    - Final Week & Beyond
      - Career Launch & Next Steps
      - Graduation & Celebration
      - Bonus Week: Emerging Technologies

**Projects students build:** Personal profile page about your interests; Fan page for your favorite artist/game/show; School club or team website; Animated landing page for a fake startup; Instagram-style photo gallery; Responsive blog design with dark mode; Animated movie poster with hover effects; Spotify-inspired music player UI; Gaming website with parallax scrolling; Grade calculator for school; Simple quiz game about your interests; Password strength checker; Interactive todo list with local storage; Countdown timer for events; Simple drawing app with canvas - plus 127 more on the course page.

### React.js Masterclass: Zero to Senior Frontend Developer

`/courses/react-js-complete-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Senior React Developer

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
  - PHASE 4: React Native & Professional Development (Months 10-12, Weeks 40-52)
    Master React Native, deployment, DevOps, and prepare for senior developer roles.
    - Months 10-11: React Native & Mobile Development
      - React Native Fundamentals
      - Advanced React Native
      - React Native Deployment
      - Full-Stack React Development
      - DevOps for React
    - Month 12: Career Launch & Specialization
      - Advanced Patterns & Architecture
      - Interview Preparation
      - Portfolio & Personal Brand
      - Specialization Paths
      - Final Project & Graduation
    - Continuous Learning & Growth
      - Staying Current with React
      - Advanced Topics
      - Teaching & Mentoring
      - Leadership & Architecture

**Projects students build:** JavaScript utility functions library; Todo app with vanilla JavaScript; Weather app with API calls; Array manipulation exercises; First React app setup; Static website with React; Personal portfolio starter; JSX exercises and experiments; Component library creation; Blog post list component; Product card components; Navigation menu component; Interactive counter app; Form with validation; Todo list with state - plus 149 more on the course page.

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

### Scratch Programming for Kids: 3-Month Course, 50+ Projects

`/courses/scratch-programming-complete-course` · 3 months (12 weeks) · Complete Beginner to Advanced Scratch Developer

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
    - Advanced Extensions and Hardware
    - Physics and Simulation
    - Optimization and Professional Polish
    - Final Projects and Portfolio
      - Professional Game Development

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

### Swift Programming Masterclass: Zero to iOS & macOS Pro

`/courses/complete-swift-programming-masterclass-college` · 12 months (52 weeks) · Complete Beginner to iOS/macOS Professional

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
    - Months 4-5: Advanced Swift Features & SwiftUI Basics
      - Enumerations & Advanced Types
      - Error Handling & Advanced Error Management
      - Generics & Type System Deep Dive
      - SwiftUI Fundamentals - Part 1
      - SwiftUI Fundamentals - Part 2
    - Month 6: Advanced SwiftUI & UIKit Fundamentals
      - SwiftUI Lists, Forms & Data Display
      - SwiftUI Animations & Custom Drawing
      - UIKit Fundamentals
      - Data Persistence - UserDefaults & File System
      - Phase 2 Capstone Project
    - PHASE 2 CONTINUED - Advanced Patterns & Core Data
      - Swift Concurrency - Async/Await
      - Core Data Fundamentals
      - Advanced Core Data
      - Combine Framework Fundamentals
      - Swift Package Manager & Project Organization
  - PHASE 3: Professional iOS Development (Months 7-9, Weeks 27-39)
    Master professional iOS development with networking, advanced architecture, testing, accessibility, and real-world app development patterns.
    - Months 7-8: Networking & Architecture
      - Networking with URLSession
      - Advanced Networking & Authentication
      - App Architecture - MVVM
      - Advanced Architecture & The Composable Architecture
      - Unit Testing & Test-Driven Development
    - Month 9: UI Testing, Accessibility & Advanced Features
      - UI Testing & Snapshot Testing
      - Accessibility & Localization
      - Maps, Location & Background Tasks
      - Push Notifications & App Extensions
      - Camera, Photos & Media
    - PHASE 3 COMPLETION - Month 9 Final Week
      - App Performance & Optimization
      - In-App Purchases & Subscriptions
      - Security & Data Protection
      - Design Patterns & Best Practices
      - Phase 3 Capstone Project
  - PHASE 4: Expert Development, Multi-Platform & Career Excellence (Months 10-12, Weeks 40-52)
    Master advanced topics, multi-platform development, App Store publishing, CI/CD, and career preparation.
    - Months 10-11: Multi-Platform & Advanced Topics
      - SwiftUI Advanced Topics
      - WidgetKit & App Intents
      - macOS Development with SwiftUI
      - watchOS & tvOS Development
      - visionOS & Spatial Computing
    - Month 12: App Store, CI/CD & Career Excellence
      - App Store Submission & Distribution
      - CI/CD & Automation
      - Analytics, Crash Reporting & Monitoring
      - Server-Side Swift & Backend Integration
      - SwiftData & Modern Persistence (iOS 17+)
    - PHASE 4 COMPLETION - Career Preparation
      - Advanced Topics & Specializations
      - Code Quality & Professional Practices
      - Open Source & Community
      - Interview Preparation
    - Final Month - Capstone & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Professional Development

**Projects students build:** Hello World variations with personalized messages in Playground; Simple output programs using print() function; Personal information display program; ASCII art generator in Swift Playground; Interactive Playground with markdown documentation; Simple calculator (four basic operations) in Playground; Temperature converter (Celsius, Fahrenheit, Kelvin); Age calculator with optional handling; BMI calculator with health categories; Currency converter with type safety; Area and perimeter calculator for shapes; Compound interest calculator; String formatter and validator; Number guessing game with attempts limit; Grade calculator with letter grades using switch - plus 380 more on the course page.

### TypeScript Programming: Zero to Enterprise Developer

`/courses/complete-typescript-programming-masterclass-college` · 12 months (52 weeks) · Complete Beginner to Enterprise Professional

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
    - Months 7-8: Node.js & Express Fundamentals
      - Node.js Fundamentals
      - Express.js Framework
      - REST API Design & Best Practices
      - Database Fundamentals - SQL
      - ORMs - Prisma & Drizzle
    - Month 9: Authentication, NoSQL & Advanced Backend
      - Authentication & Authorization
      - NoSQL Databases - MongoDB
      - Caching, Sessions & Real-time
      - Email, File Storage & External Services
      - Testing Backend Applications
    - PHASE 3 COMPLETION - Advanced Backend
      - Background Jobs & Message Queues
      - Logging, Monitoring & Observability
      - Security & API Protection
      - Docker & Deployment
      - Phase 3 Capstone Project
  - PHASE 4: Full-Stack Mastery & Enterprise Development (Months 10-12, Weeks 40-52)
    Master Next.js, GraphQL, microservices architecture, cloud-native development, DevOps, system design, and career preparation.
    - Months 10-11: Next.js, GraphQL & Advanced Full-Stack
      - Next.js Fundamentals
      - Advanced Next.js & Server Actions
      - GraphQL Fundamentals
      - Advanced GraphQL & tRPC
      - Microservices Architecture
    - Month 12: Cloud, DevOps & Career Excellence
      - Cloud Platforms & Serverless
      - CI/CD & DevOps Practices
      - System Design & Architecture
      - Performance & Optimization
      - Advanced TypeScript Patterns
    - PHASE 4 COMPLETION - Career Preparation
      - Code Quality & Best Practices
      - Open Source & Community
      - Interview Preparation
      - Final Capstone Planning
    - Final Month - Capstone & Career Launch
      - Final Capstone Project - Part 1
      - Final Capstone Project - Part 2
      - Career Launch & Professional Development

**Projects students build:** Hello World variations with personalized messages; Simple output programs using console.log; Personal information display program; ASCII art generator in JavaScript; Interactive greeting program; Simple calculator (four basic operations); Temperature converter (Celsius, Fahrenheit, Kelvin); Age calculator with detailed output; BMI calculator with health categories; Currency converter with exchange rates; Area and perimeter calculator for shapes; Compound interest calculator; Number guessing game with attempts limit; Grade calculator with letter grades; Even/odd checker and list generator - plus 287 more on the course page.

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

### Web Development for Kids: Build Websites with HTML, CSS & AI

`/courses/kids-ai-web-development-course` · 12 months (52 weeks) · Complete Beginner to Advanced Young Developer

  - PHASE 1: HTML Foundation & AI Introduction (Months 1-3, Weeks 1-13)
    Start your coding adventure! Learn HTML basics while using AI assistants to help you code faster and smarter.
    - Months 1-2: HTML Basics & Your First Websites
      - Welcome to Web Development & AI Tools Setup
      - HTML Elements Zoo - Text, Images & Links
      - Fun with Forms & Tables
      - Multimedia Magic - Audio, Video & Canvas
    - Month 3: CSS Foundations & AI-Powered Styling
      - CSS Basics - Making Websites Beautiful
      - CSS Box Model & Spacing Magic
      - Phase 1 Celebration Project
  - PHASE 2: Advanced CSS & Animation Magic (Months 4-6, Weeks 14-26)
    Level up your design skills! Master advanced CSS, create stunning animations, and use AI to generate professional designs.
    - Months 4-5: CSS Layouts & Responsive Design
      - Flexbox - The Flexible Layout System
      - CSS Grid - The Ultimate Layout Tool
      - Responsive Design - Mobile First!
      - CSS Transforms & Transitions
      - CSS Animations & Keyframes
    - Month 6: Advanced Styling & AI Design Tools
      - Advanced CSS Effects & Filters
      - CSS Frameworks & Libraries
      - AI-Powered Design Tools
      - CSS Best Practices & Organization
      - Phase 2 Showcase Project
  - PHASE 3: JavaScript & AI Integration (Months 7-9, Weeks 27-39)
    Add interactivity to your websites! Learn JavaScript basics and use AI to write complex code easily.
    - Months 7-8: JavaScript Fundamentals
      - JavaScript Basics - Making Websites Interactive
      - JavaScript Logic & Decisions
      - Loops & Arrays - Handling Multiple Items
      - Functions - Reusable Code Blocks
      - Objects - Organizing Related Data
    - Month 9: DOM & AI-Powered Interactivity
      - DOM Manipulation - Changing Websites with JavaScript
      - Events - Responding to User Actions
      - Local Storage & Data Persistence
      - APIs & External Data
      - Phase 3 Interactive Project
  - PHASE 4: Professional Projects & AI Mastery (Months 10-12, Weeks 40-52)
    Build professional websites using advanced AI tools, learn modern web development practices, and create your portfolio.
    - Months 10-11: Advanced AI Tools & Modern Development
      - Advanced AI Coding Assistants
      - AI Website Builders & No-Code Tools
      - Version Control with Git & GitHub
      - Modern JavaScript Frameworks Introduction
      - Web Accessibility & Best Practices
    - Month 12: Final Projects & Portfolio
      - Portfolio Development & Personal Branding
      - Real-World Client Projects
      - Advanced Project: Full-Stack Application
      - Performance & Optimization
      - Career Preparation & Future Learning
    - Final Month: Capstone & Graduation
      - Final Capstone Project Planning
      - Final Capstone Development
      - Testing, Polish & Deployment
      - Presentation & Celebration
    - Bonus Content & Extended Learning
      - Advanced AI Integration
      - Mobile App Development Basics
      - Lifetime Learning Resources

**Projects students build:** Create 'All About Me' webpage with AI suggestions; Build a digital pet profile page; Make a birthday invitation webpage; Digital photo album with captions; My favorite YouTube videos collection; Interactive storybook with multiple pages; School project presentation website; Personality quiz generator with AI questions; Friend information collector form; Class schedule table; Restaurant menu with order form; Personal video channel page; Music playlist website; Digital art gallery with canvas; Multimedia learning resource page - plus 150 more on the course page.

---

**End of knowledge base. When in doubt, route to Shivam Sir at +91 9123366161.**
