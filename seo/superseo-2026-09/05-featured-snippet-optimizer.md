# Featured Snippet Optimizer

Skill: `superseo:featured-snippet-optimizer` · Run 2026-09-03

## Target selection: the first candidate was wrong

Input given: *"best coding classes in Kolkata for kids"* + `/best-coding-class-in-kolkata`, where the
site verifiably ranks **#3**.

Rejected after Step 1. That query returns **no featured snippet at all** and is answered by an AI
Overview assembled from several vendors. It is a commercial "best X in city" query, and the skill's own
guidance says not to chase snippets on AIO-dominated informational SERPs. There is no slot to win.

Retargeted to a query where the site ranks, a snippet slot is genuinely contested, and the answer
matters: **"what is the best age to start coding"**, against `/best-age-to-start-coding`.

## Current state

| | |
|---|---|
| Keyword | what is the best age to start coding (for kids) |
| Snippet holder | **nobody from this site.** The answer is assembled from CodeMonkey, Create & Learn, Raspberry Pi Foundation and learning.com |
| Format Google wants | **paragraph, 40-60 words** ("what is X" query) |
| Our position | top 10 (a blog post, `/blog/coding-for-7-year-olds...`, surfaced in the SERP; the dedicated page also ranks for the term) |
| Consensus answer being cited | start at 5-6, Scratch at 8, Python at 10 |

## Why the page was losing a query it deserves to win

`/best-age-to-start-coding` is one of the better pages on this site. The H1 is the query verbatim, the
angle is honest ("The internet answers this question with whatever age the answerer happens to sell"),
and the age map includes **"not yet" rows**, which no competitor publishes. It should hold this snippet.

Three structural reasons it did not:

1. **The answer sat under a `<span>`, not a heading.** The block was labelled
   `<span class="q">The 20-second answer</span>`. Google's extractor looks for a heading that restates
   the query with the answer immediately beneath it. There was no such heading anywhere near the answer.
2. **The answer ran 90 words in one paragraph.** Google truncates paragraph snippets around 60. A
   90-word block with four separate claims gives the extractor nothing clean to lift.
3. **Every H2 on the page is rhetorical, not query-matching.** "Age by age, honestly, including the
   'not yet' rows." · "The six readiness signals we actually look for." · "Everything parents ask about
   starting age." Good writing. Zero extractable heading-answer pairs.

## Shipped

**New H2 (restates the query):** `What is the best age to start coding?`

**New answer block (47 words, verified rendered):**

> The best age to start coding is **6 to 9** for block coding like Scratch, which carries real ideas
> without typing or syntax in the way. From **9 to 12**, children can start directly in text code such
> as Python. Before 6, coding-flavored play beats formal classes.

**Follow-up paragraph** (demoted out of the snippet block, keeps the page's best line):

> And later is never too late: a motivated 14-year-old catches a casual 8-year-start within months. The
> variable that outweighs age every time is **readiness**, curiosity about how things work, tolerance
> for tinkering, and enough reading fluency for the tool in question.

Keyword lands in the first six words. The answer is self-contained: it makes sense with nothing else on
the page. `.mp-answer .q` is a class selector, so the `<h2>` inherits the eyebrow styling; a one-line CSS
change zeroes the `h2` user-agent margin and bold so it looks identical.

**Verified rendered** at 1280 and 390: tag is `H2`, 47 words, two paragraphs, 12.48px uppercase mono
eyebrow, margin-top 0. `validate-heading-hierarchy.js` reports no new errors.

## The strategic point, which is bigger than the snippet

The consensus answer this SERP currently gives parents is *start at 5*. The vendors giving it sell to
5-year-olds. This page's answer is **6 to 9, with honest "not yet" rows**, and it now matches the
enrollment floor the owner set. Winning this snippet means the honest answer is the one parents read,
and it is a rare case where the commercially useful move and the truthful one are the same move.

It also connects to finding A in `00-ACTION-PLAN.md`: 139 pages still say the kids track starts at 8.
The snippet says 6. Those need to agree, or the snippet gets contradicted by the landing page it sends
people to.

## Timeline

Google typically reprocesses within 1 to 4 weeks. Do not touch this block again for at least two weeks.
If nothing changes in four, the next lever is the H2 phrasing, not the answer.

## Two further snippet opportunities, not yet built

Both are queries where the site has a real, non-obvious answer and no query-matching heading:

- **"is 14 too late to start coding"** and its variants. The page already answers it ("a motivated
  14-year-old catches a casual 8-year-start within months") but the claim is buried in a follow-up
  paragraph with no heading. It deserves its own H3 and a 45-word block.
- **"what age can a child start Python"**. Currently answered inside a table row. Table cells do not
  win paragraph snippets.

## Unrelated finding while validating

`validate-heading-hierarchy.js` reports 3 pre-existing heading-level skips, none of them mine:

- `about.html`: h2 followed by h4 ("Shewta Singh", a testimonial attribution marked up as a heading)
- `pricing.html`: h1 followed by h3 ("Group Classes")
- `pricing.html`: h2 followed by h4 ("Progress Tracking")

Left alone deliberately. The tags are bare (`<h4>` with no class), so their styling comes from element
selectors and changing the level changes the appearance of two commercial pages. Worth fixing with a
compensating class and a render check, not worth fixing blind.
