---
title: "Vibe Coding and AI Agents Classes in North Vancouver | Live"
description: "Vibe coding and AI agent classes for North Vancouver teens and adults: each tool's age rule, BC computing courses, and a street tree check on District data."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-north-vancouver
source: src/pages/vibe-coding-and-ai-agents-classes-in-north-vancouver.html
---
> Modern Age Coders teaches vibe coding and AI agents classes live online to learners in the District and the City of North Vancouver. Vibe Coding for Teens takes ages 13 to 17, while agent work with Codex and Claude Code is reserved for adults. Classes are group-based (fifteen to twenty) or private, and every number an AI produces is tested for plausibility before it is used.

[Home](/) / [Canada](/coding-classes-in-canada) / [British Columbia](/coding-classes-in-british-columbia) / North Vancouver

North Vancouver, British Columbia / Live online

# Vibe coding and AI agents classes in North Vancouver

**Who teaches vibe coding and AI agents to North Vancouver teens and adults?** Modern Age Coders teaches vibe coding and AI agents classes live online to learners in the District and the City of North Vancouver. Vibe Coding for Teens takes ages 13 to 17, while agent work with Codex and Claude Code is reserved for adults. Classes are group-based (fifteen to twenty) or private, and every number an AI produces is tested for plausibility before it is used.

The North Shore has two North Vancouvers, the District and the City, and this page serves both. Vibe coding is building software by telling an AI model what you want; an AI agent is software in which the model also picks the tools and runs them. The danger in both is the same: a result that is fluent, specific and impossible. We show it here with the District's own street tree inventory. A short AI-style script, asked for the tallest street tree, replies with a European Hornbeam 615 metres high. Nothing crashes. The only protection is a person who decided in advance what a believable answer looks like. Further down you will find the checks themselves, the tools a teenager is permitted to sign up for, the computing courses offered in BC secondary schools, and lesson times now that the province has stopped changing its clocks.

Facts last verified 23 October 2026. Teaching is online; no North Vancouver branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for North Vancouver learners

Age sets which tools a learner may use, which sets the course. The free lesson confirms the level.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Projects in Python and on the web, built with assistants a teenager is allowed to use, where every output is sense-checked before it is kept.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Teens starting out): Hand-written Python first: types, conditions, loops and functions, so that a teen can read and question what an assistant suggests.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Teens, models): How machine learning models are trained and why they can be confidently wrong, with real data and honest evaluation.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults only, 18+): Agentic coding for working adults on real repositories. Under Anthropic's terms Claude Code is for people aged 18 or older, so the course admits adults only.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## How tall is the tallest street tree? 615 metres, says the first draft

The District of North Vancouver publishes an inventory of its registered street trees, with species, trunk diameter and height. We asked an AI-style script for the tallest one, then ran checks we had written down first. Everything in this section, code and numbers alike, is our own work on the District's file as downloaded on 23 October 2026.

The prompt: &ldquo;Using this CSV, which standing street tree in North Vancouver is the tallest?&rdquo; The obvious script filters out removed trees, takes the maximum of HEIGHT_M and prints it. It prints European Hornbeam, 615 m, STREE01036, a tree in Braemar with a 30 cm trunk. That is a data-entry slip in the file, almost certainly a misplaced digit, and a careless agent would report it as a fact about North Vancouver.

**The draft answer against our checks (our run on the District file, 23 October 2026; review limits are ours, not the District's)**

| Step | What it found |
|---|---|
| Rows in the file | 4,289 trees, of which 3,671 are marked not removed |
| Standing trees with a height value | 3,634 |
| Draft answer (plain maximum) | European Hornbeam, 615 m, trunk 30 cm |
| Check 1: any height over our 40 m review limit | Exactly one row, the 615 m hornbeam |
| Check 2: trunk far too wide for the height (our ratio rule) | 194 standing trees, to be looked at by a person |
| Checked answer after setting the one impossible row aside | 30 m, shared by a Red Alder and a Big Leaf Maple |

The whole exercise, with the limits stated in the code before the maximum is ever printed:

```
# Tallest street tree: a quick draft, then our plausibility checks (teaching example for this page)
import csv

def num(text):
    try:
        return float(text)
    except ValueError:
        return None

trees = [r for r in csv.DictReader(open("EnvStreetTree_nonpersonal_subset.csv", encoding="utf-8"))
         if r["REMOVED_RE"] == "No" and num(r["HEIGHT_M"]) is not None]

# The draft: what a quick AI-written answer does. Take the maximum and report it.
top = max(trees, key=lambda r: num(r["HEIGHT_M"]))
print("draft answer:", top["COMMONNAME"], top["HEIGHT_M"], "m", top["ASSET_ID"])

# The checks: our own review limits, chosen by us and written down before looking at the answer.
REVIEW_HEIGHT_M = 40      # any street tree taller than this goes to a person
REVIEW_RATIO = 0.6        # trunk diameter in cm per metre of height above which we look again
flagged = [r for r in trees if num(r["HEIGHT_M"]) > REVIEW_HEIGHT_M]
odd_shape = [r for r in trees if num(r["DBH_CM"]) and num(r["HEIGHT_M"]) and
             num(r["HEIGHT_M"]) <= REVIEW_HEIGHT_M and num(r["HEIGHT_M"]) * REVIEW_RATIO * 10 < num(r["DBH_CM"])]
print("flagged over", REVIEW_HEIGHT_M, "m:", [(r["ASSET_ID"], r["COMMONNAME"], r["HEIGHT_M"]) for r in flagged])
print("trunk far too wide for the height:", len(odd_shape))
kept = [r for r in trees if r not in flagged]
tallest = max(kept, key=lambda r: num(r["HEIGHT_M"]))
print("checked answer:", tallest["HEIGHT_M"], "m")
```

### Limits before looking

The 40 m limit and the trunk ratio were written into the script first. Choosing limits after seeing the answer is how people talk themselves into believing it. Our limits are teaching choices, and a forester might pick different ones.

### Flag, do not delete

The hornbeam row is set aside and reported, not removed from the file. Its real height is unknown to us; the District is the only party who can correct it. An honest answer says that, rather than replacing 615 with a guess.

### Ratio checks find more

Range checks catch the absurd. Ratio checks catch the quietly odd: a Vine Maple listed with a 200 cm trunk and only 8 m of height, which also has no ASSET_ID. Either may be a typing slip; neither should feed a chart unread.

### Keys matter as much as values

The TAGNUMBER column repeats across many rows, while ASSET_ID is unique where filled. An agent told to look up a tree by its tag number would pick the first match and sound sure of itself. In class, learners find the repeats themselves before they write any lookup tool.

This file is the District of North Vancouver's, so it covers District streets, not the separate City of North Vancouver. Before using it we removed the columns holding staff usernames, house numbers and free-text comments; the licence does not cover personal information, and none is needed for this exercise. Reused under the Open Government Licence - North Vancouver, whose grant extends to commercial purposes ([District data page and licence](https://geoweb.dnv.org/data/)). Contains information licensed under the Open Government Licence - North Vancouver. The District does not endorse this page.

## Five habits for trusting AI-written code, numbers and agent answers

None of these is new to good programmers. What is new is how often they are needed, now that a model writes the first draft of almost everything.

**Our habits for AI-assisted work, and where the BC curriculum already names the idea (curriculum wording quoted from the ministry, read 22 October 2026)**

| Habit | In practice | BC curriculum echo |
|---|---|---|
| Decompose the question | Split &ldquo;tallest tree&rdquo; into: which trees count, which column, which unit | Computer Science 11: &ldquo;dividing complex problems into parts that are easier to conceive, understand, and program&rdquo; |
| Fix limits in advance | Write the plausible range before running the code | Computer Programming 11 names abstraction and algorithmic thinking among the key components |
| Prefer unique keys | Look rows up by an ID that never repeats | Not a curriculum line; this habit is ours |
| Pause on surprises | Stop the run and ask a person when a value breaks a limit | Ours too, and Anthropic gives agents the same advice (below) |
| Explain the final answer | State the answer, its caveat and its source in one sentence | Our rule for every exercise, at every age |

The fourth habit matters most for agents. Anthropic, describing how its own engineers build agents, writes that &ldquo;agents can then pause for human feedback at checkpoints or when encountering blockers&rdquo;. A value that breaks a limit is a blocker. In our adult course, North Vancouver learners build that pause into their agents, so an impossible number stops the run and asks a person, instead of flowing into a confident summary.

Behind all five sits the owner's promise: we teach people to think through a problem and solve it, not to copy an answer, and an answer from an AI is no exception. A North Vancouver Grade 11 student and a North Shore data analyst will both be asked, at the end of each exercise, to explain why their answer is believable.

## What a North Vancouver teen may use, and what waits until 18

AI companies set their own minimum ages. We checked the current terms on 22 October 2026; the course a learner joins follows from them.

**AI coding tools and their age rules (each company's terms, read 22 October 2026)**

| If the learner is | May use in our classes | May not use |
|---|---|---|
| 13 to 17, no parental permission given | GitHub Copilot (GitHub accounts from 13; free for verified students) | ChatGPT and other OpenAI services, Claude, Claude Code |
| 13 to 17, a parent has given permission | GitHub Copilot, and OpenAI tools, whose terms ask for a parent's or guardian's permission under 18 | Claude, Claude Code |
| 18 or older | All of the above, plus Claude and Claude Code (Anthropic sets 18 as its minimum age) | Nothing on this list |
| Anyone, during the CCC | No AI assistant at all; the rules ban generative AI and editor plug-ins | Every assistant |

### North Vancouver parents

A teenager in our classes is only ever pointed to tools that accept their age. OpenAI products need a parent's go-ahead under 18, so we get that before any lesson that would use one.

### North Shore adults

Adults work with agents that edit files and run commands, on a project held in Git, and learn to read each agent change before accepting it.

### Rules can move

Companies revise their terms. We recheck them before each course begins, and we suggest families read the live page for any tool they adopt.

## Computing courses a North Vancouver student can take, and the contests beside them

North Vancouver public schools follow the BC curriculum. The descriptions here are ours; quoted phrases are the ministry's or CEMC's, read on 22 October 2026.

### Two course families

BC offers computing in two places: ADST courses such as Computer Information Systems 11 and Computer Programming 11 and 12, and Computer Science 11 and 12 listed under mathematics. A student can meet decomposition in both.

### Earlier grades

In Grades 6 and 7, students take at least three ADST modules a year, and the computational thinking module mentions visual programming such as Scratch. AI coding tools come later, at 13 and up.

### No credits from us

Our classes run alongside a school course, never instead of it. School assignments stay the student's own work, and we do not grant British Columbia credits.

**CEMC computing contests for 2026 to 2027 (CEMC's North and South America dates, read 22 October 2026)**

| Contest | Who | Date | Format |
|---|---|---|---|
| Beaver Computing Challenge | Levels up to Grade 9/10; no coding needed | 9 to 20 November 2026 | Multiple choice, 45 minutes |
| Canadian Computing Competition, Junior or Senior | Any grade, chosen by skill | Wednesday 17 February 2027 | 5 questions in 3 hours |

CEMC says the Beaver Computing Challenge only requires familiarity with concepts covered in the mathematics curriculum across all Canadian provinces, which makes it a fair first contest for a North Vancouver Grade 9 student. For the CCC, CEMC warns that a perfect score may not always be possible with a particular language choice, Python included; students who aim high often learn C++ alongside. Both contests are entered through a school. Our [Beaver Computing Challenge guide](/beaver-computing-challenge-guide) and [CCC Senior guide](/ccc-senior-guide) cover them in detail.

## Pacific time, all year, on the North Shore

According to a BC government news release, the province adopted permanent daylight time once the clocks went forward in March 2026. Since then North Vancouver has sat seven hours behind UTC in every season.

**Example conversions, not a published timetable (UTC-7 all year; India is 12 hours 30 minutes ahead; our arithmetic)**

| North Vancouver | India | Example learner |
|---|---|---|
| Monday to Friday, 4:30 to 6:00 pm | 5:00 to 6:30 am, next day | A teen after school |
| Monday to Friday, 7:30 to 9:00 pm | 8:00 to 9:30 am, next day | An adult after work |
| Saturday or Sunday, 8:30 to 10:00 am | 9:00 to 10:30 pm, same day | Either |

### Nothing to reset

When eastern Canada changes its clocks on 1 November 2026, North Vancouver does not. Class times set in October stay the same through the winter.

### North Shore numbers

Phone numbers starting 604, 778, 236, 672 or 257 work in the booking form. Give the ten digits only.

### From India

Our teachers are in India. Evenings and weekend mornings on the North Shore fall inside their working day.

## From hand-written Python to agents that know when to stop

Ages here are approximate. Placement depends on what a learner can explain on the day.

- **Ages 13 and 14: Foundations** Python without assistants, reading errors, and the first checks a learner writes on their own. [Python for Teens](/courses/python-complete-masterclass-teens), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Ages 14 to 17: Assisted building** Vibe coding with permitted assistants, plus machine learning taught with honest evaluation. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Ages 18 and up: AI in projects** Generative AI, automation and full stack projects for students and career changers. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)
- **Working adults: Agents with checkpoints** Coding agents on real repositories, with pauses for human review built in. Adults only. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)

## Why should a North Vancouver learner still learn to code?

Because a 615 metre tree only looks wrong to someone who knows what to look for.

The draft script in the tree example was correct Python. It did exactly what it was asked: find the largest value. The error lived in the data, and in the question nobody asked, which was whether the largest value made sense. Models are getting better at code every year; they are not getting any better at knowing which questions you forgot to ask.

That is why our classes teach code and judgement together. A learner who can write the maximum by hand, and who knows that a street tree is not taller than the towers downtown, will catch the error whether the script was typed by a person, an assistant or an agent.

Coding is how you check the machine; without it, you can only hope. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Live online for the North Shore, from Deep Cove to Lower Lonsdale

No bridge, no SeaBus, no parking. Lessons are live with a teacher who follows the learner's screen and asks them to explain each step.

- **Times** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Group or private** Group classes of fifteen to twenty at the same age and level, or private lessons, which many adults prefer when they bring their own code.
- **Teens apart from adults** Our teen and adult courses are separate because the companies' terms give the two groups different tools.
- **District and City** Learners from the District of North Vancouver, the City of North Vancouver and West Vancouver share the same classes on the same Pacific time clock.
- **Set-up** A laptop or desktop, a microphone and a dependable connection. Teens need no paid AI subscription for our teen course.
- **A free start** The first lesson is free and complete, and it ends with a placement. No card details are requested.

**No North Shore centre** We have no premises in North Vancouver and do not claim any. Teaching is live over video from India. We are not connected with the District or City of North Vancouver, the BC ministry or CEMC.

## Fees for North Vancouver learners

Three items, each shown in your currency by the price anchor.

- First class: Free. A trial lesson at no charge that ends with a placement.
- Group tuition: CAD 140 a month. The monthly fee for a group of fifteen to twenty, eight live classes a month.
- Private tuition: CAD 210 a month. The monthly fee for private lessons with your own teacher.

North Shore learners pay the same monthly fee as learners anywhere else in Canada. You are billed only after the trial lesson, when a course and a time suit you.

## Vibe coding and AI agents in North Vancouver: questions

### Do you offer vibe coding classes in North Vancouver?

Yes, online and live. Teens join the teen course, adults join adult courses, and every class is taught by a teacher over video. There is no North Vancouver classroom.

### Is the page for the District or the City of North Vancouver?

Both. Classes are online, so learners from either municipality join the same groups. The data example uses the District's street tree file, which covers District streets.

### What is vibe coding?

Getting an AI model to write code from a plain-language description. We teach it as the start of the job; checking, testing and explaining the result is the rest.

### Can a 16-year-old in North Vancouver use Claude Code with you?

No. Anthropic sets 18 as the minimum age for its consumer services, so Claude and Claude Code are used in our adult course only and are never recommended to teens.

### Does my teen need ChatGPT?

No. OpenAI wants a parent or guardian to agree before anyone under 18 uses its services, so we only use it once a parent agrees. Teens use GitHub Copilot instead, which is free for verified students.

### Do you teach AI agents to adults on the North Shore?

Yes. Our Codex and Claude Code course is for adults only, on real repositories with version control. Learners build agents that pause for a person when something looks wrong.

### Why did the script say a tree was 615 metres tall?

One row in the District file lists a European Hornbeam with a 615 m height and a 30 cm trunk, almost certainly a typing slip. A script that only takes the maximum repeats it. A height limit set in advance flags it.

### Does this help with BC Computer Programming 11?

It supports it. The course names decomposition, patterns, abstraction and algorithmic thinking, which our checks practise. We work alongside the school course and do not grant British Columbia credits.

### Are AI tools allowed in the Canadian Computing Competition?

No. Generative AI is banned, including AI features in an editor. CEMC lists the 2027 CCC for Wednesday 17 February 2027, written through a school.

### What times suit North Vancouver?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are given in Pacific time, which BC now keeps all year.

## Other pages for North Vancouver and BC learners

The national guide is [vibe coding and AI agents classes in Canada](/vibe-coding-and-ai-agents-classes-in-canada), and the province page is [coding classes in British Columbia](/coding-classes-in-british-columbia). Families can read [vibe coding for teens](/vibe-coding-for-teens) and the [AI tools age guide](/ai-tools-age-guide); adults may prefer [agentic coding classes](/agentic-coding-classes) or the [Model Context Protocol course](/model-context-protocol-mcp-course).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-north-vancouver](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-north-vancouver#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
