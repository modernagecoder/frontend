---
title: "Student Hackathons UK | Who Can Go and What Happens"
description: "Student hackathons in the UK: who runs them, which events accept sixth formers, what a weekend actually involves, and the thing that breaks most teams at 3am."
canonical: https://learn.modernagecoders.com/student-hackathons-uk
source: src/pages/student-hackathons-uk.html
---
> Most student hackathons in the UK are run by university tech societies, supported by Hackathons UK, "a growing, community-led non-profit focused on supporting hackathon organisers and student tech societies in the United Kingdom", a registered charity in England, number 1195243, which reports 5,000 or more hackers reached, 1,000 or more projects judged and 60 or more events supported over five years. For school-age students, HackUK says it hosts "free hackathons and tech events for sixth form students across the United Kingdom" for "young people aged 16-18 across Britain", with events described as workshops and build sessions with mentors; its Counterspell Wolverhampton was "a weekend-long game-making hackathon" where participants "had two days to ship a playable game", and Hack4Health is listed for 19 December 2026 in Central London. Internationally, Major League Hacking describes itself as "the world's largest developer community" with "1000+ annual events" across "100 countries". We teach the building. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.

[Home](/) / [Courses](/courses) / [UK competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) / Student hackathons

United Kingdom · Mostly 16 and over · Weekend events

# Student hackathons in the UK

A hackathon is the only competition on this site where nobody tells you what to build. You arrive on a Friday evening, usually with people you have not met, and by Sunday afternoon there has to be a working thing to show. Everything else, the pizza, the sleeping bags, the lanyards, is decoration around that one constraint. Which makes the useful questions narrower than parents expect: who is actually allowed in at sixteen, what a weekend really contains, and why four capable people so often arrive at Sunday with four half-finished pieces that do not fit together.

At a glance: Typical length: A weekend; Sixth formers: HackUK events, ages 16 to 18; University level: Society-run events across the UK; Support charity: Hackathons UK, number 1195243; International network: Major League Hacking; Cost: Often free to attend; Deliverable: Something that works, demonstrated; Under 16: No national listing we could find. Rated 4.9 across 547 Google reviews.

## Three courses for a first hackathon

The skill a hackathon rewards is finishing something with other people, which is narrower and harder than it sounds.

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): The most useful hackathon skill set: a working interface with something real behind it, built in slices.
- [Python from start to finish](/courses/python-complete-masterclass-teens): For students who want to build the logic rather than the screens, and to debug it at speed.
- [Hackathon preparation for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): For younger students, ages 8 to 12: the same habits, at a pace that suits a child who is years away from a real event.

## Societies, a charity, and one route in at sixteen

Facts read at each organisation's own site on 20 September 2026, attributed in the row.

**The organisations behind UK student hackathons**

| Organisation | What it says about itself | What it means for a student |
|---|---|---|
| Hackathons UK | "A growing, community-led non-profit focused on supporting hackathon organisers and student tech societies in the United Kingdom" | The support layer behind many university events |
| Its status | A registered charity in England, number 1195243, and a company limited by guarantee, number 12530692 | A real organisation, not a brand |
| Its scale | 5,000 or more hackers reached, 1,000 or more projects judged, 60 or more events supported, over five years | A busy calendar, mostly at universities |
| HackUK | "We Host Free Hackathons & Tech Events for Sixth Form Students Across the United Kingdom", for "young people aged 16-18 across Britain" | The clearest route in for a school-age student |
| A HackUK event | "Workshops and build sessions where you'll learn from mentors, work on your own ideas, and actually finish something you can show people" | Taught and supported, not thrown in at the deep end |
| An example | Counterspell Wolverhampton, "a weekend-long game-making hackathon", where participants "had two days to ship a playable game" | Two days, one finished thing |
| Listed next | Hack4Health, 19 December 2026, Central London | A concrete date to plan around |
| Major League Hacking | "The World's Largest Developer Community", with "5 million software creators" and "1000+ Annual Events" across "100 Countries" | The international network many university events belong to |

One thing this page will not do is tell you the minimum age for a hackathon in general, because there is no such thing. Each event sets its own rules, and Major League Hacking's published code of conduct, which we read, does not state an age policy. Anyone who tells you that hackathons are open from thirteen, or closed below eighteen, is generalising from one event they went to.

What we can say is what we found. HackUK publishes an age range of 16 to 18. University society events are, in practice, for students at that university or visiting from another. And we could find no national listing of hackathons open to under-16s at all.

That gap is worth naming rather than papering over. A thirteen-year-old who wants the hackathon experience in Britain has no obvious front door, which is part of why we run our own event alongside a preparation course for ages 8 to 12.

For a sixteen-year-old the picture is much better, and it is free. HackUK charges nothing, and university events typically charge nothing either, which makes travel the only real cost.

Sources: [Hackathons UK](https://www.hackathons.org.uk/), [HackUK](https://www.hackuk.network/) and [Major League Hacking](https://www.mlh.com/), all read 20 September 2026. Modern Age Coders is not connected with any of them.

## Two people, one file, three in the morning

Teams do not usually fail because the idea was bad. They fail at the point where four people's work has to become one program, and here is that moment, reproduced.

We made a repository with a two-line program, then had two people each add one line near the top: Ana added a variable for lives, Ben added one for the level. Both changes are correct. Both work. Then Ben merged Ana's work into his.

**Our run of 20 September 2026, in a real repository**

| Step | What happened |
|---|---|
| Ana's branch | She adds a line for lives, and her copy runs |
| Ben's branch | He adds a line for level, and his copy runs |
| Ben merges Ana's work | "CONFLICT (content): Merge conflict in game.py" |
| The file afterwards | Rewritten to hold both versions, separated by conflict markers, and it no longer runs |

### Nobody did anything wrong

Two correct changes to nearby lines is all it takes. The tool cannot know which one should come first, so it stops and asks, in a format that terrifies anyone meeting it for the first time at 3am.

### Why it always happens then

Teams work separately all Saturday and integrate on Sunday morning, so every conflict in the weekend arrives at once, in the hours when nobody is thinking clearly.

### The fix is scheduling

Merge early and often. A team that joins its work together every two hours meets conflicts one at a time, awake, with time to fix them.

This is the single most valuable thing a student can learn before their first hackathon, and almost nobody teaches it, because school projects are written by one person. The first time most young programmers see conflict markers is in an event, under a deadline, with three teammates watching.

Ten minutes of practice removes the fear entirely. Make a repository, create the conflict on purpose, resolve it, and it stops being an emergency and becomes a chore.

The second habit is to divide the work by file rather than by feature where possible. Two people editing different files almost never collide; two people editing the same function collide constantly, however carefully they talk.

And agree before Friday night who merges. A team with one person responsible for integration finishes; a team where everyone merges into everyone spends Sunday morning untangling.

The repository, both branches, the conflict and the resulting file are ours, produced on 20 September 2026. The error text is exactly what the tool printed.

## What forty-eight hours actually contains

The advertised number and the usable number are not the same, and knowing the difference is most of a good plan.

**A weekend event, honestly accounted for. The allowances are ours, not any organiser's.**

| Goes on | Roughly | Note |
|---|---|---|
| Opening, briefing and team forming | 2 hours | Longer than anyone expects, and it matters |
| Sleep, across two nights | 12 hours | Teams that skip this demo badly on Sunday |
| Eating, breaks and moving about | 5 hours | Including the walk to find food at midnight |
| Workshops and mentor sessions | 3 hours | Optional, and usually worth it for a first-timer |
| Judging, demos and the closing | 3 hours | Nothing gets built in this time |
| What is left to build in | About 23 hours | Per person, minus every minute spent integrating |

Twenty-three hours is a useful number to hold in your head on Friday evening, because it is roughly three school days of work, not a fortnight. Teams that plan a product plan badly; teams that plan one feature that works, with a screen somebody can press, finish.

The other consequence is that the demo is the deliverable. Judges see what can be shown in a few minutes, so anything clever that is invisible on screen may as well not exist. Build the visible thing first and the clever thing after, not the other way round.

For a first-timer the most useful advice we can give is to go without a team and without an idea. Events are built to match people up and most of them run sessions for exactly that, and arriving with a fixed plan makes it harder to join anyone.

And go for the weekend rather than for the prize. Almost everything a student takes away from a hackathon, including the version control they will use for the rest of their life, has nothing to do with who won.

## Four rungs to a useful weekend

Each rung is something to have done once before Friday, not something to learn during it.

**From building alone to building with three strangers**

| Stage | Rung | The sign it is secure |
|---|---|---|
| Before 14 | 1. Finishing something | Has built a small thing end to end and shown it to somebody |
| 14 to 16 | 2. Version control | Can make a repository, branch, merge and resolve a conflict without panic |
| 16 to 18 | 3. Building in slices | Gets something on screen in the first hours, then improves it |
| 16 and up | 4. Working with strangers | Can divide work, agree an integrator, and demo in three minutes |

### Before a first event

Create a merge conflict on purpose and resolve it. Ten minutes now saves the worst hour of the weekend.
Decide who merges before anyone writes any code, and divide the work by file rather than by feature.

### If under sixteen

We could find no national listing of UK hackathons open to under-16s, which is why we run our own event alongside a preparation course for ages 8 to 12.
The [competitions calendar](/uk-coding-maths-and-ai-competitions-calendar) has plenty that is open at any age, including showcases with no ranking.

## Courses for someone who wants to build in a weekend

Grouped by what a student will actually be doing at the table.

### Building fast

The core skill

- [Full stack web development](/courses/full-stack-web-development-teens-masterclass): A screen and a database, built in slices.
- [App development](/courses/complete-app-development-masterclass-for-teens): Something on a phone that a judge can press.
- [Python from start to finish](/courses/python-complete-masterclass-teens): The logic, and debugging it at speed.

### Working together

Where weekends break

- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): Choosing a method that will finish tonight.
- [Competitive programming](/courses/competitive-programming-for-teens-course): Writing correct code when the clock is unkind.
- [Hackathon preparation for kids](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): The same habits for ages 8 to 12.

### Something to show

The demo is the deliverable

- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): A model that does something visible.
- [Data science with Python](/courses/data-science-course-for-teens-python-data): Real data, shown convincingly.
- [Game development for kids](/courses/game-development-masterclass-for-kids): For a game-making weekend, at a younger age.

### Before all that

Younger students

- [Python and AI for kids](/courses/python-ai-kids-masterclass): A first typed language, taught patiently.
- [Scratch for kids](/courses/scratch-programming-complete-course): Finishing something, which is the real skill.
- [GCSE Computer Science](/courses/gcse-computer-science-course): The qualification running alongside.

## Weekly building, with the integration practised

Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.

- **Weekday evening** The usual slot for teenagers.
- **Weekend morning** For a long build session, start to finish.
- **Holiday weeks** For a project run like a small hackathon.

- **Version control taught** Branches, merges and conflicts practised deliberately, before anyone meets one under pressure.
- **Something on screen first** We teach building in slices, so there is always a demonstrable thing.
- **Five to ten learners** Enough that work has to be divided, few enough that everyone is heard.
- **Our own hackathon** We run an event for younger students alongside a twelve-week preparation course for ages 8 to 12.
- **One to one when useful** For a student preparing for a specific event.
- **No affiliation** We have no relationship with Hackathons UK, HackUK or Major League Hacking.

## Fees

One monthly price in US dollars for families outside India, nothing to pay to register, and no term you are locked into.

- Free first class: USD 0. A real lesson building something. An honest read on the level. No card details taken.
- Group batch: USD 100 a month. Five to ten learners at one level. The same teacher weekly. Code reviewed as it grows. A certificate at the end.
- One to one: USD 150 a month. A teacher working with one learner. Shaped around what they are building. Useful before a first event.

## What students and parents ask

### What is a hackathon?

A weekend event where students build something working and demonstrate it at the end. Nobody tells you what to build, and the deadline is the only fixed thing.

### How old do you have to be?

It depends on the event, and there is no general rule. HackUK publishes an age range of 16 to 18 for its free events. University society events are in practice for students at a university. Major League Hacking's published code of conduct, which we read, does not state an age policy.

### Are there hackathons for under-16s in the UK?

We could find no national listing of them. That gap is real, and it is why we run our own event for younger students alongside a preparation course for ages 8 to 12.

### Who supports UK student hackathons?

Hackathons UK, which describes itself as a community-led non-profit supporting hackathon organisers and student tech societies, and is a registered charity in England, number 1195243. It reports supporting more than 60 events over five years.

### Do they cost anything?

HackUK says its hackathons and tech events are free, and university events are typically free to attend, so travel is usually the only cost.

### What actually happens over a weekend?

Less building than the advertised hours suggest. Once opening, sleep, food, workshops and judging are accounted for, our own allowance leaves about 23 hours to build in, which is roughly three school days.

### Why do good teams fail?

Usually at integration. Two people making correct changes near the same lines produce a merge conflict, and teams that work separately all Saturday meet every conflict at once on Sunday morning.

### How do we avoid that?

Merge early and often, divide work by file rather than by feature, and agree before anyone writes code who is responsible for integrating. Practising a conflict on purpose beforehand takes ten minutes.

### Should my child go with a team and an idea?

Not necessarily. Events are built to match people up and run sessions for it, and arriving with a fixed plan can make joining a team harder.

### Is it worth going without winning?

Almost everything a student takes away, including the version control they will use for the rest of their life, has nothing to do with who won.

## Other ways to build and show

- [Coolest Projects UK](/coolest-projects-uk-project-ideas): Any age, no ranking, every checked entry shown.
- [Big Bang Competition](/big-bang-competition-project-help): Project entries from teams of any size.
- [FIRST LEGO League](/first-lego-league-uk-coding-help): Autonomous robots and an innovation project.
- [UK competitions calendar 2026-27](/uk-coding-maths-and-ai-competitions-calendar): The season in one table, with each organiser named.
- [Coding classes in the UK](/coding-classes-in-united-kingdom): The four school systems, and every UK page.
- [Student labs](/student-labs): Projects our own students have finished and published.

## Contact

Book the free first class at [https://learn.modernagecoders.com/student-hackathons-uk](https://learn.modernagecoders.com/student-hackathons-uk#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email contact@modernagecoders.com.
