# Improve Content — /best-coding-class-in-kolkata

Skill: `superseo:improve-content` · Run 2026-09-03 · Content type: **location page**.

## Decision: additions, not a rewrite

The skill's default output is a full rewrite. That would be the wrong move here and I did not do it.
This page ranks **#3** for "best coding classes in Kolkata for kids" and is named in the AI answer.
A page that already ranks is a page whose rewrite risk exceeds its rewrite upside, and this site has
already taken two uniqueness FAILs from rewriting a page into the shape of a sibling.

So: keep every passage that earns the current ranking, add only what closes the queries it loses.

## Step 3 interview: not answered by me

The skill asks three update questions. Answering them myself would manufacture exactly the kind of
unverifiable claim that this session has spent its time removing. They are carried to
`11-expert-interview.md` as questions for the owner, unanswered.

## What shipped

### 1. The site's own tariff was inside FAQPage structured data

The FAQ answer to "How much do coding classes cost in Kolkata?" carried `Rs.1499 / Rs.2,999 /
Rs.4,999` and was emitted in `FAQPage` JSON-LD. Structured data has no idea who is reading it, so it
bypasses `international-pricing.js` entirely: a parent in Dubai, London or New Jersey asking Google or
any chatbot what this school costs was quoted rupees. That is the one-currency rule, broken at the
most machine-readable surface on the page.

Replaced in **both** copies (JSON-LD and the visible `<details>`) with a format description plus a
pointer to `/pricing`, which is region-aware.

**This is not confined to one page. 385 pages leak the site's own tariff into `FAQPage` schema** (279
in `src/pages`, 106 generated from `content/courses/data/*.json`). Full breakdown and a dry-run script
in `00-ACTION-PLAN.md`. It is the single largest mechanical finding of this session.

*(A first pass flagged 661 pages. That number is wrong and I am not using it: most were third-party
figures, developer salaries, Coursera fees, government budgets, which the rule does not cover. The
real number is 385, filtered to this company's own price points.)*

### 2. An FAQ answer that contradicted itself, in schema

> "We recommend starting coding at age 8 with visual block-based programming like Scratch. [...] Our
> courses are designed for kids (6-12) and teens (13-18)."

Age 8 and age 6, in one answer, in structured data. Rewritten to keep the pedagogy (blocks before
text) without disagreeing with the enrollment floor the owner set on 2026-07-18:

> "Children can start with us from age 6 on block-based tools like ScratchJr and Scratch, where the
> logic is visual and nothing depends on typing speed. Most are ready for text-based Python or Java
> around age 12 to 13. Our kids track runs 6 to 12 and the teens track 13 to 18."

### 3. Two more stale age labels

The kids track label read "Ages 8-12" while the navigation on the same page read "For Kids (Ages
6-12)". Both fixed, along with "Scratch (for kids 8-12)" in the languages FAQ. Codingal advertises
from age 5; being wrong in the direction of three years older was costing enrollments as well as
consistency.

### 4. New section: "Python classes for kids and teens in Kolkata"

The core gap from `03-semantic-gap-kolkata.md`. ~380 words, inserted between the kids and teens course
rails at `#python-kolkata`. It is the first passage on the site where "Python" and "Kolkata" are the
same topic rather than two facts on one page.

What it carries that no competitor page can:

- **The Scratch-to-Python transition described as a real problem**, not a curriculum step: a child who
  has done two years of Scratch understands loops and variables fine, they have simply never had to
  *spell* them. That is a teaching observation, and it is the kind of thing that reads as first-hand
  because it is.
- **Named tools with reasons**: Thonny over a browser playground, because a beginner needs to watch the
  variable panel change while the code runs. Colab later. Turtle first, Pygame when a student wants a
  score. These are the tool entities Codingal has and this page did not.
- **A Kolkata employment hook**: Sector V and New Town, and what Python is actually used for there.
- **The ISC Java argument, assembled**. The page already held all three facts separately: West Bengal
  is ICSE-heavy, ISC Computer Science is examined in Java, BlueJ is on the paper. Nobody had ever put
  them in the same sentence. Now they are one argument, and it is an argument no national competitor
  can make about this state.

Three internal links with descriptive anchors.

## Voice check

Written against the anti-slop ruleset. No banned vocabulary. No em-dashes. Sentence length varies from
four words to forty. Two deliberate fragments ("Turtle for the first drawings. Pygame once a student
wants something with a score in it."). No section summary, no rule-of-three padding, and the section
ends on an offer rather than a recap.

## Left undone deliberately

Items 3 to 5 of the content addition plan (Scratch ages 6 to 9, six locally-phrased FAQs, and the WB
boards maths crossover) are specified in `03-semantic-gap-kolkata.md` and not written. One section
proves the pattern; the remaining ~1,100 words are a copy job that should be checked against a real
teacher's account of these students before it goes live, not generated.
