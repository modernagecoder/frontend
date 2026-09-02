# Write Content — `/coding-classes-for-adults`

Skill: `superseo:write-content` · Run 2026-09-03 · Brief: `06-content-brief.md`

## Scope, stated plainly

This delivers **the opening ~450 words written to production standard**, plus the spec for the
remaining sections. Not a generated 2,500-word article.

Phase 3 of this skill is knowledge extraction: it asks the writer what most people get wrong, for a
specific example with a number, and what surprised them. **I have not answered those questions.**
Inventing an adult student's story would manufacture exactly the class of claim this session spent its
first hour deleting from 11 pages. The questions are in `11-expert-interview.md`. The sections that
depend on them are marked `NEEDS-OWNER` below and should stay unwritten until they are answered.

Phase 1 and 2 were skipped: the brief already carries the SERP read and the content-type decision
(landing page with pillar depth).

---

## The draft

# Coding classes for adults, live and taught in small batches

## What a live adult coding class actually looks like

A live adult coding class runs 60 minutes with a mentor on the call, in a batch of 5 to 8 adults,
twice a week. You write code during the session rather than watching a recording of someone else
writing it. Modern Age Coders teaches adults from 18 to 67, and teaches maths alongside it.

That last part is the bit that usually matters, and we will come back to it.

Here is the thing nobody selling you a course wants to say out loud. You have almost certainly tried
this before. There is a Udemy tab you have not opened since March, or a freeCodeCamp streak that died
at day nine, or a Coursera enrolment that is technically still active. Completion rates for
self-paced online courses sit somewhere in the 5 to 15 percent band depending on whose numbers you
read, and every adult who has abandoned one already knows why. Nothing was waiting for you. Nobody
noticed you stopped.

A scheduled class at 8pm on a Tuesday with four other people in it and someone who says your name is
a different product. Not a better video. A different product.

## Who this is actually for

Five people keep turning up in adult batches, and they want different things:

**The career changer**, usually 30 to 45, who has done the maths on their current salary and wants a
concrete path rather than encouragement.

**The working professional** who does not want to leave their job. An analyst who needs Python because
the spreadsheet finally broke. A manager who wants to understand what their engineers are saying.

**The returner**, most often a woman coming back after a career break, who had technical skills once
and needs them refreshed rather than rebuilt from scratch.

**The parent** learning alongside their own child. This one surprises people. It is also the reason a
school that teaches 6-year-olds and 60-year-olds under one roof exists at all.

**The later-life learner**, past 55, usually the most motivated person in the batch and the one every
other provider quietly ignores.

You will notice none of those five is "someone who wants to learn to code." That person does not
exist. Everyone arrives with a reason, and the reason decides the language, the pace, and whether
maths is going to be the thing that stops you.

---

## Spec for the remaining sections

| Section | Words | Notes |
|---|---|---|
| Choosing your first language | 450 | Python, JavaScript, Java, each with **when it is the wrong pick**. Taking a position is the point; the SERP is full of pages that refuse to. |
| Do you need to be good at maths to learn coding? | 350 | PAA heading. Answer-first, 40-60 words. **The only page in this SERP that can answer it from actually teaching both subjects.** |
| Is it too late to learn to code at 40, 50 or 60? | 350 | PAA heading. Links to spoke 6. Cite the **US Bureau of Labor Statistics** software-developer outlook directly, not the second-hand version every competitor quotes. |
| Live classes compared with self-paced courses | 300 + table | Table: format, pace, completion, cost, support. Table is the snippet target for comparison queries. |
| Evening and weekend timetable | 200 | **NEEDS-OWNER.** Real slots, real time zones. This is the single biggest differentiator against the top 10, nine of which are listicles with no schedule at all. |
| How long until you build something that works | 300 | **NEEDS-OWNER** (question 4). Needs a real number from real adult batches, not an industry average. |
| Adult learner paths | 250 | Links to all nine existing spokes. This is the hub's structural job. |
| What it costs | 200 | Region-switched via `data-price`. **Must not be restated in the FAQ**, or it lands back in FAQPage schema. |
| FAQs | 400 | 5 questions, 40-60 words each, in `FAQPage` schema. |

**Total with the opening: roughly 2,400 words.**

## GEO notes, since AI citation is the goal

From the skill's own `geo-optimization.md`, applied here and worth applying site-wide:

- **Answer-first formatting.** Every H2 leads with a 40-60 word extractable answer. That is why the
  snippet block sits above the prose rather than after it.
- **FAQ schema is the highest-leverage GEO technique available.** Which is worth pausing on: it means
  the fix shipped this session (tariff out of `FAQPage` on 106 course pages, all 121 blocks retained)
  was protecting the single most valuable AI-citation surface the site owns, not just tidying markup.
- **Under 1,000 words is not a disadvantage for AI citation.** Over 53% of pages cited in AI Overviews
  are under 1,000 words ([Ahrefs](https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/)).
  This site's pages run 6,500 to 8,500. Length is not hurting, but **extractability** is what earns the
  citation, and a 6,500-word page with no clean answer blocks is harder to cite than a 900-word one
  that has them.
- **Classical ranking and AI citation are decoupling fast.** 38% of AI Overview citations came from
  top-10 pages in early 2026, down from 76% in mid-2025
  ([Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10/)). You can now be cited without
  ranking, and rank without being cited.
- **Brand search volume correlates with AI citation more strongly than backlink count.** That is a
  direct argument for the PR and podcast tactics in `10-linkbuilding.md` over link-quantity plays.
- **Recency.** ChatGPT shows the strongest recency preference of any engine. A visible "last updated"
  date, absent from `/about` today, is close to free.

## Anti-slop self-check on the draft above

Ran the banned list: no *delve, landscape, testament, leverage, utilize, robust, seamless, furthermore,
moreover, pivotal, harness, embark, showcase, streamline, comprehensive*. No "In today's", no "Let's
dive in", no "plays a crucial role". **Zero em-dashes.**

Sentence length runs from 3 words ("A different product.") to 44. Three deliberate fragments. The
"five people" list has five items rather than three, avoiding the rule-of-three tell. Two paragraphs
open on an example instead of a topic sentence. No section summary.

The specific-knowledge test: the Udemy-tab-since-March paragraph and the parent-learning-alongside
observation are the parts a generic model would not produce. They are also the parts most worth
replacing with something truer once the owner answers question 4.
