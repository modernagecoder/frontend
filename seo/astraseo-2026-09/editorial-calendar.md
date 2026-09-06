# Editorial and distribution calendar: first four weeks (Phase F of astraseo.md)

The brief's weekly production is: improve two existing high-intent pages, publish one
instructor-reviewed guide, publish one teaching demonstration with a transcript, and add one
verified student project or outcome. The rotation is children, teens, college learners,
professionals, corporate teams. Every item below connects
**useful question -> lesson or recording -> relevant course -> direct enrolment or optional demo**.

Owner-executed. Code side is done: every course page now answers the buyer's nine questions,
links the matched recording library, and offers direct enrolment; the country pages form one
hreflang cluster; llms.txt and the markdown twins state the same facts. What the site cannot
produce by itself is original teaching evidence, and that is what these four weeks add.

Rules that apply to every item: numbers only from `scripts/brand-facts.json`; no em-dashes;
one currency per visitor and no prices in FAQ text; recordings are "free with a Google sign-in";
a live demo is optional, never required; nothing invented (no instructor names, durations or
student results the site cannot show).

## Week 1: children (ages 6 to 12)

- Improve: `/coding-classes-for-kids` style pages that lead the kids funnel: `/levels/coding-for-kids`
  and `/scratch-programming-complete-course` (add the kids library link above the fold, a
  parent question block, and one real project from `/student-labs`).
- Guide (instructor-reviewed): "What a 7-year-old actually does in a first Scratch class" as a
  blog post, built from one real lesson, with the recording linked.
- Teaching demonstration: one 10 to 15 minute excerpt from the kids library with a written
  transcript, published as a page section on `/how-we-teach` (transcript makes it searchable
  and quotable by AI answers).
- Verified outcome: one finished kids project from `/student-labs`, with the child's first
  name only, what they built, and the course it came from.

## Week 2: teens (ages 13 to 18)

- Improve: `/ai-ml-course-for-teens` and `/python-and-ai-classes-for-kids-teens` (teens
  library link, the "can I enroll without a demo" answer, a real teen project).
- Guide: "How we debug with a teenager: a real session, line by line" (Python), reviewed by
  the mentor who taught it.
- Teaching demonstration: a teens library excerpt with transcript (a debugging moment, not a
  lecture, because that is the depth claim the site makes).
- Verified outcome: one deployed teen project (a Flask app or a game) with its public URL.

## Week 3: college students

- Improve: `/levels/coding-for-college-students` and `/machine-learning-from-scratch`
  (prerequisites stated plainly, the assessment and feedback answer, a portfolio example).
- Guide: "Gradient descent by hand before the library: why we teach it this way", reviewed
  by the mentor.
- Teaching demonstration: an ML-from-scratch excerpt with transcript.
- Verified outcome: one college portfolio project with a GitHub link.

## Week 4: professionals

- Improve: `/levels/coding-for-professionals` and the Codex + Claude Code masterclass page
  (workflow, tooling, evaluation, the assisted international payment stated once).
- Guide: "Shipping a feature with an AI coding agent: the tradeoffs we teach", reviewed by
  the mentor who runs the course.
- Teaching demonstration: an adults library excerpt with transcript.
- Verified outcome: one professional's project or a before-and-after workflow, with consent.

Week 5 returns to corporate teams (`/for-business`, one applied workshop excerpt), then the
rotation repeats.

## Distribution (every week, 30 to 40 minutes)

- Google Business Profile: one post linking the week's demonstration; reply to every review.
- YouTube: publish the week's excerpt (unlisted is fine) and embed it on the page; the
  transcript is the description.
- LinkedIn (founder): the guide's first paragraph as the post, link in the first comment.
- Reddit or a parent forum: answer one real question with the recording link, recommending a
  competitor honestly where they fit better.
- Partnerships: keep one attributable landing page per programme (school, university,
  professional community, parent association, webinar, referral) and record the source on
  every lead (attribution is already captured server-side).

## What to measure (the reporting split now exists in the admin analytics)

Inquiries, reserved, confirmed, attended and no-show demos are counted separately from
verified paid enrolments. Recording clicks fire `watch_library_click` in GA4 with the library
and the page. Report weekly: confirmed demos, direct enrolments, enrolments after a recording
click, enrolments after a demo, and unmet demand for class times.
