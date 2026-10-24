---
title: "Vibe Coding and AI Agents Classes in Peterborough, Ontario"
description: "Vibe coding and AI agents for Peterborough, Ontario teens and adults: AI tool age rules, Ontario school coding, and a lake-area unit check on County water data."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-peterborough-ontario
source: src/pages/vibe-coding-and-ai-agents-classes-in-peterborough-ontario.html
---
> Yes. Modern Age Coders offers live online classes to Peterborough, Ontario: Vibe Coding for Teens for ages 13 to 17, and an adults-only agents course using Codex and Claude Code. Learners study in classes of fifteen to twenty or one to one, and every number an AI computes must come with its unit and pass a consistency check.

[Home](/) / [Canada](/coding-classes-in-canada) / [Ontario](/coding-classes-in-ontario) / Peterborough

Peterborough, Ontario / Live online

# Vibe coding and AI agents classes in Peterborough, Ontario

**Can a Peterborough, Ontario teen or adult learn AI-assisted coding that holds up?** Yes. Modern Age Coders offers live online classes to Peterborough, Ontario: Vibe Coding for Teens for ages 13 to 17, and an adults-only agents course using Codex and Claude Code. Learners study in classes of fifteen to twenty or one to one, and every number an AI computes must come with its unit and pass a consistency check.

Peterborough in Ontario, on the Otonabee River at the edge of the Kawarthas, is the place this page is about, not the cathedral city in England. Vibe coding is getting an AI model to write code from a plain description; an AI agent goes further, choosing tools and running them on your behalf. A common slip in both is the quiet unit error: code that is right in every line except the one that converts square metres. Here an AI-style draft turns Little Lake, in the heart of the city, into a lake of 604 square kilometres. No test of the output against a known answer was needed to catch it, only a rule any learner can write: one square kilometre must always equal one hundred hectares. We also set out which AI tools a teenager may use, what Ontario schools already ask of students, and how class times shift with Ontario's clocks.

Facts last verified 23 October 2026. Teaching is online; no Peterborough branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for Peterborough teens and adults

The AI tools a person may use depend on their age, so our courses are split the same way. The free lesson sets the level.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects built with assistants teens are allowed to use, where every number printed must carry a unit and survive a check.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Teens, starting): Arithmetic, functions and data in hand-written Python, so a teen can see exactly which line converts a unit, and whether it is right.
- [Data Science for Teens](/courses/data-science-course-for-teens-python-data) (Teens, data): Real public files, cleaned and summarised with care for units and definitions, then the first models built on top.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults only, 18+): Coding agents on real repositories for working adults. Claude Code is an 18-and-over product under Anthropic's terms, so teens cannot join.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## How big is Little Lake? 604 square kilometres, says the draft

The County of Peterborough republishes the Ontario Hydro Network's waterbody layer, clipped to the county, as open data: 12,073 lakes, ponds and river sections with their areas. We asked an AI-style draft to convert three lake areas, then checked it. The code, conversions and counts are ours, from the layer as downloaded on 23 October 2026.

**Three lakes: area in the file and our corrected conversion (our run, 23 October 2026; the file's areas are in square metres, as the layer's coordinates are)**

| Lake | Area in the file (m&sup2;) | Draft says | Corrected (ours) |
|---|---|---|---|
| Little Lake, in the city | 604,381 | 604.4 km&sup2; | 0.60 km&sup2;, 60.4 ha |
| Chemong Lake | 16,471,699 | 16,471.7 km&sup2; | 16.47 km&sup2;, 1,647.2 ha |
| Rice Lake | 92,363,066 | 92,363.1 km&sup2; | 92.36 km&sup2;, 9,236.3 ha |

The draft's mistake is a classic: it divides square metres by 1,000 to get square kilometres and by 100 to get hectares, treating an area like a length. The right factors are 1,000,000 and 10,000. Nothing crashes, and the numbers even look precise. A learner who did not already know roughly how big Little Lake is would have no reason to doubt 604.4.

The program and its two checks:

```
# Peterborough County waterbodies: an AI-style unit conversion, and the checks that catch it (our teaching example)
import glob, json

rows = []
for page in sorted(glob.glob("wb-*.json")):
    rows += [f["attributes"] for f in json.load(open(page, encoding="utf-8"))["features"]]

def find(name):
    return [r for r in rows if r["OFFICIAL_NAME_LABEL"] == name and r["WATERBODY_TYPE"] == "Lake"]

# The draft: areas are in square metres, so "divide by 1000 for km2 and by 100 for hectares".
def draft(m2):
    return {"km2": m2 / 1000, "ha": m2 / 100}

# The fix: 1 km2 = 1,000,000 m2 and 1 ha = 10,000 m2.
def fixed(m2):
    return {"km2": m2 / 1_000_000, "ha": m2 / 10_000}

def consistent(a):
    """Human check 1: 1 km2 is exactly 100 ha, whatever the input."""
    return abs(a["ha"] - 100 * a["km2"]) < 1e-6 * max(1, a["ha"])

for name in ("Little Lake", "Chemong Lake", "Rice Lake"):
    lake = max(find(name), key=lambda r: r["SYSTEM_CALCULATED_AREA"])
    m2 = lake["SYSTEM_CALCULATED_AREA"]
    d, f = draft(m2), fixed(m2)
    print(name, "| draft consistent:", consistent(d), "| fixed", round(f["km2"], 2), "km2", round(f["ha"], 1), "ha")

# Human check 2: the file has two area columns. Where do they disagree by more than 1 percent?
odd = [r for r in rows if abs(r["Shape__Area"] - r["SYSTEM_CALCULATED_AREA"]) > 0.01 * r["SYSTEM_CALCULATED_AREA"]]
print("area columns disagree on", len(odd), "of", len(rows), "rows")
```

### Check 1: units agree with each other

One square kilometre is exactly one hundred hectares. The draft's two outputs break that rule for every lake, so the check fails without anyone knowing the true area. Internal consistency is the cheapest test there is.

### Check 2: two columns, one quantity

The layer carries both Shape__Area and SYSTEM_CALCULATED_AREA. They agree on all but 4 of 12,073 rows. On Crowe Lake the first is 0.835 of the second, and on Burnt River 0.735.

### What we think, and what we know

Our guess is that those 4 polygons were cut at the county boundary, which would change one area but not the province's original figure. The snippet does say the layer is clipped to the county. We label this a guess and choose the column per question.

### Names are rarer than water

Only 483 of the 12,073 polygons carry an official name, and most are ponds (6,066) or lakes (5,644). An agent asked to list Peterborough County lakes by name will miss thousands of unnamed ones, and the Otonabee River alone is split into 42 named polygons. Counting before summarising is the habit that keeps an answer honest.

This is county and provincial data, not the City of Peterborough's: the City's own portal terms allow use of unmodified datasets only, and its map items ask commercial users to arrange a paid agreement, so we chose the County layer, which covers the city's waters too. Used under the Open Government Licence - Ontario, which grants use including for commercial purposes ([licence](https://www.ontario.ca/page/open-government-licence-ontario), [County of Peterborough layer](https://www.arcgis.com/home/item.html?id=d84ead49d8094ec1ae4539c516fb56a0)). Contains information licensed under the Open Government Licence - Ontario. Neither the County nor the province endorses this page.

## Units are part of the answer: how we teach AI-assisted calculation

An AI model is fluent with arithmetic and careless with meaning. These are the habits Peterborough learners build so that a number from AI-written code is safe to use.

**Our habits for numbers in AI-written code (ours), beside the Ontario idea each one develops**

| Habit | In practice | Ontario link |
|---|---|---|
| Name the unit in the variable | area_m2, not area | MTH1W: coding used to make sense of the mathematics |
| Write an invariant | ha == 100 * km2 must hold for every row | Grade 4 coding: nested events, loops inside loops over the data |
| Read before you edit | Find the conversion line in the AI's code and say what it does | Grade 1 coding: read and alter existing code and describe the effect |
| Compare two sources | If two columns should agree, measure where they do not | ICS4C: object-oriented programs that keep data and rules together |

Agents make units more dangerous, because an agent passes numbers from one tool to the next without anyone reading them. Anthropic has described changing a tool so that it always required absolute file paths, after which its model stopped making a whole class of path mistakes. Units deserve the same treatment: in the adult course, Peterborough learners write tools that return the unit with every number, so a model never has to guess.

Underneath sits the owner's promise, put in our own words for this page: learners are taught to think through a problem and solve it, not to copy an answer, and a number from an AI is still just an answer until it has been reasoned about. A Grade 9 student and an engineer in Peterborough both finish this exercise by stating the area of Little Lake with its unit, and explaining why 604.4 could not be right.

## The AI tools a Peterborough teenager may use

Each AI company sets its own age floor. We read their current terms on 22 October 2026; the course a learner joins follows from them.

**Age floors for AI coding tools (companies' own terms, read 22 October 2026)**

| Tool | Who may use it | How our classes apply it |
|---|---|---|
| GitHub Copilot | Anyone 13 or older with a GitHub account; free for verified students | Used by teens and adults |
| ChatGPT and other OpenAI services | From 13; under 18 only with a parent's or guardian's permission | Teens need a parent's yes first |
| Claude and Claude Code | 18 or older | Adult course only |
| Any AI help during the CCC | Nobody: the contest bans generative AI | Contest practice is assistant-free |

In practice this means a Peterborough teen is never asked to sign up for something their age excludes, and a parent is asked before any lesson that would use an OpenAI tool. Adults work with agents on a project in Git, where every change is reviewed as a diff and can be reverted. The rules belong to the companies, so we read them again before each intake.

## Coding and contests for a Peterborough student

Peterborough's publicly funded schools teach to the provincial curriculum. Facts here were checked against the province's curriculum website, EQAO and CEMC as they stood on 22 October 2026, and paraphrases are ours.

### From Grade 1

Ontario math has children read and alter existing code from Grade 1 and describe how the changes affect the outcome. By Grade 4 the code includes nested events, which is a loop inside a loop.

### Grade 9 math

The course description of MTH1W says students use mathematical processes, modelling and coding to make sense of the mathematics they are learning. Units and conversions are exactly that kind of sense-making.

### Grade 12 options

ICS4C, the college-stream Grade 12 course, teaches object-oriented programming; ICS4U is the university-stream course. We support both and do not grant Ontario credits.

**Peterborough students' calendar for the 2026 to 2027 year, as published by EQAO and CEMC**

| What | Details | When |
|---|---|---|
| EQAO Grade 9 Assessment of Mathematics | Online, two sessions totalling 54 questions, multi-stage adaptive | 12 January to 5 February 2027 |
| Canadian Computing Competition | Junior or Senior by skill; written at school | Wednesday 17 February 2027 |
| Pascal, Cayley and Fermat (Grades 9, 10, 11) | 25 multiple-choice questions in 60 minutes | 23 and 24 February 2027 |

CEMC stresses that its contests are not tests or exams, and that entry goes through a school. Unit sense is useful in all three math contests, and in the CCC, where a wrong conversion gives a wrong answer just as surely as a wrong loop. Our [MTH1W explainer](/mth1w-grade-9-math-explained) and [Waterloo contests page](/cemc-waterloo-contests-preparation) go further.

## Peterborough time, India time and the 1 November change

Peterborough runs on Eastern time: clocks fall back on Sunday 1 November 2026 and spring forward on Sunday 14 March 2027. India, where our teachers are based, keeps one time all year.

**A Thursday 6:30 pm class in Peterborough, seen from India (tzdb 2026e; our conversion)**

| Period | Peterborough | India |
|---|---|---|
| Up to 1 November 2026 | 6:30 pm, UTC-4 | 4:00 am, Friday |
| 1 November 2026 to 14 March 2027 | 6:30 pm, UTC-5 | 5:00 am, Friday |
| From 14 March 2027 | 6:30 pm, UTC-4 | 4:00 am, Friday |

### Local time is fixed

A Peterborough class stays at its local time through both changes; our teachers shift instead. We resend each timetable in Eastern time the week before.

### 705 and friends

Numbers on the 705, 249 and 683 area codes work in the form. Enter the ten digits only.

### Time zones are units too

Converting a class time is a unit conversion with a rule that changes twice a year. Learners who code it with a fixed offset see it fail on 1 November 2026, which is the lesson.

## From reading code to agents that report their units

Bands are approximate; the first lesson decides each Peterborough learner's starting point.

- **Ages 13 and 14: Code you can read** Hand-written Python with numbers, functions and files, and names that carry units. [Python for Teens](/courses/python-complete-masterclass-teens), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Ages 14 to 17: Assisted and checked** Vibe coding with permitted assistants, with invariants on every calculation. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 and up: AI in projects** Generative AI and automation for students and career changers. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)
- **Working adults: Agents with typed tools** Coding agents on real repositories, with tools that return units and checks on their output. Adults only. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)

## Why learn to code in Peterborough if an AI can do the arithmetic?

Because the AI did the arithmetic perfectly and the answer was still wrong by a factor of a thousand.

Every division in the Little Lake draft was computed correctly. The error was in choosing what to divide by, which is a question about meaning, not arithmetic. A learner who has converted areas by hand knows that squaring the unit squares the factor; that knowledge is what makes the consistency check obvious to write.

So our classes keep both skills: the code and the sense behind it. Teens use assistants their age allows, adults use agents that act for them, and both state each result with its unit and explain, without help, why it is believable.

A number without a unit is not an answer; an AI will hand you plenty of those. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Live online for Peterborough and the Kawarthas

Lessons happen at home, with a live teacher on video who follows the learner's screen and asks for the reason behind each step.

- **Times to suit you** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Shared or private** Shared classes take fifteen to twenty learners of the same age band and level; private lessons give one learner the teacher's full attention.
- **Teen and adult tracks** Teens and adults never share a class, because the AI companies allow them different tools.
- **Around the region** Learners from Lakefield, Selwyn and Cobourg join the same online classes on the same Eastern clock.
- **What to have** A computer, a microphone and an internet connection steady enough for video. The teen course needs no paid AI subscription.
- **Start with a free lesson** The first lesson is free and taught in full, and it ends with a placement. We do not take card details.

**No Peterborough office** We have no premises in Peterborough and claim none. Teaching is live and online from India, and we are not connected with the City or County of Peterborough, the Ontario Ministry of Education, EQAO or CEMC.

## Fees for Peterborough learners

Three items, each displayed in your currency by the price anchor.

- First class: Free. A free first lesson, taught in full, ending with a placement.
- Group tuition: CAD 140 a month. The monthly fee for a shared class of fifteen to twenty, eight live lessons a month.
- Private tuition: CAD 210 a month. The monthly fee for private lessons with your own teacher.

Peterborough learners pay the same monthly fee as learners elsewhere in Canada. You are billed only after the free lesson, once you have a course and a time.

## Vibe coding and AI agents in Peterborough, Ontario: questions

### Are your vibe coding classes available in Peterborough, Ontario?

Yes, live online with a teacher. Peterborough teens take the teen course and adults take separate courses, all from home. We have no local classroom.

### Is this Peterborough in Ontario or in England?

Ontario. Times are given in Eastern time, and the school and contest details are Ontario and Canadian ones.

### What is vibe coding, in one line?

Describing the program you want to an AI model and letting it draft the code, which our classes then teach you to test, check and understand.

### Can a Peterborough teen use Claude Code?

Not in our classes. Anthropic's terms require users to be 18 or older, so Claude and Claude Code are confined to the adult course.

### Must my teen sign up for ChatGPT?

No. OpenAI's terms require a parent's or guardian's permission under 18, so it is used only if you agree; GitHub Copilot, free for verified students, works instead.

### Can adults in Peterborough learn to build AI agents?

Yes, online. The agents course with Codex and Claude Code is for adults only, on real Git repositories, and learners build tools that return units with every number.

### Why did the draft say Little Lake was 604 square kilometres?

It divided square metres by 1,000 instead of 1,000,000. The file gives 604,381 square metres, which is about 60.4 hectares. A check that 1 square kilometre equals 100 hectares exposed the mistake.

### Do your classes count toward an Ontario credit?

No. We do not grant Ontario credits. ICS4C, ICS4U and every other credit are earned at school; we teach alongside.

### May students use AI in the CCC or the Waterloo math contests?

The CCC rules ban generative AI outright, including assistants in editors, and CEMC lists its 2027 sitting for Wednesday 17 February 2027. All CEMC contests are entered through a school.

### What lesson times are possible from Peterborough?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Schedules are written in Eastern time.

## Other pages for Peterborough and Ontario learners

For all of Canada, read [vibe coding and AI agents classes in Canada](/vibe-coding-and-ai-agents-classes-in-canada); for the province, [coding classes in Ontario](/coding-classes-in-ontario). Students may want [Python classes in Canada](/python-classes-in-canada), and adults [coding classes for adults in Canada](/coding-classes-for-adults-in-canada).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-peterborough-ontario](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-peterborough-ontario#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
