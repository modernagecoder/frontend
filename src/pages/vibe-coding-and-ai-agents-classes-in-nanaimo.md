---
title: "Vibe Coding and AI Agents Classes in Nanaimo, BC | Live Online"
description: "Vibe coding and AI agents for Nanaimo teens and adults: which AI tools each age may use, BC computing courses, and a trail agent with a step budget on City data."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-nanaimo
source: src/pages/vibe-coding-and-ai-agents-classes-in-nanaimo.html
---
> Modern Age Coders teaches vibe coding and AI agents classes in Nanaimo live online. Nanaimo teens aged 13 to 17 learn in Vibe Coding for Teens, and adults learn AI agents in a separate Codex and Claude Code course that accepts over-18s only. Classes run live in groups of fifteen to twenty or privately, and every agent a learner builds gets a step budget and a completeness check.

[Home](/) / [Canada](/coding-classes-in-canada) / [British Columbia](/coding-classes-in-british-columbia) / Nanaimo

Nanaimo, British Columbia / Live online

# Vibe coding and AI agents classes in Nanaimo

**Where can a Nanaimo teen or adult learn to build with AI, safely?** Modern Age Coders teaches vibe coding and AI agents classes in Nanaimo live online. Nanaimo teens aged 13 to 17 learn in Vibe Coding for Teens, and adults learn AI agents in a separate Codex and Claude Code course that accepts over-18s only. Classes run live in groups of fifteen to twenty or privately, and every agent a learner builds gets a step budget and a completeness check.

Nanaimo, on the east coast of Vancouver Island, has more than two thousand mapped trail segments in its open data, and they make a fine test of an AI agent. Vibe coding means describing the code you want to an AI model and letting it write the draft; an agent is the next step, where the model decides on its own to call a tool, read the result and call again. The two classic agent failures are going round in circles and stopping too soon with a confident answer. Here we build a small trail agent that pages through the City's segments, show both failures with stand-in plans, and add the two guards that catch them: a step budget, and a rule that the agent may not answer until it has read every page. You will also find the age limits on AI tools, the BC computing courses a Nanaimo student can take, and how Pacific time works now that BC no longer changes its clocks.

Facts last verified 23 October 2026. Teaching is online; no Nanaimo branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for Nanaimo learners

Courses are split by age because AI companies split their tools by age. Level is settled in the free lesson.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Building Python and web projects with AI help that teens are permitted to use, and learning to say exactly when a program has finished its job.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Teens, first course): Loops, lists and functions written by hand, including the loop that never ends, which is the first thing an agent loop can get wrong.
- [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens) (Teens, safety net): Commits, branches and pull requests, so that anything an assistant changes in a teen's project can be seen and reversed.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults only, 18+): Agentic coding on real repositories for working adults. Anthropic permits Claude Code only from age 18, so teens are not admitted.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## How long are the Bowen Park trails? An agent that must read every page

The City of Nanaimo publishes its trails as open data, split into short segments with a name, a surface type and a length in metres. Our agent answers one question by paging through them. The code, the stand-in plans and every figure are ours, run on the City's layer as downloaded on 23 October 2026.

**The City's trail segments at a glance (our tally of 2,190 rows; lengths in metres per the layer's own unit)**

| What we counted | Result |
|---|---|
| Segments in the layer | 2,190, of which 147 have no trail name |
| Surface types | Wilderness 725, Hard 637, Soft 564, Stairs 141, Boardwalk 84, Bridge 39 |
| Segments named Bowen Park | 219, more than any other name |
| Segments named Westwood Lake Park | 158 |
| Sum of the Bowen Park segment lengths (our calculation) | 7,535 m, about 7.53 km |

The design: the agent's only tool hands back at most 50 segment lengths at a time, plus the number of segments the trail has. With 219 Bowen Park segments, a correct answer needs five calls. The loop has two guards. A step budget of eight stops a plan that never finishes, and an answer is accepted only if the agent has read every segment and its total matches the sum of what its own tool calls returned.

The full program, with three plans written by us in place of a model:

```
# Nanaimo trail agent with a step budget, and a check that redoes the sum (our teaching example)
import json

SEGMENTS = []
for page in ("trails-p0.json", "trails-p2000.json"):
    SEGMENTS += [f["attributes"] for f in json.load(open(page, encoding="utf-8"))["features"]]

PAGE = 50
def get_segments(name, offset):
    """Tool: up to 50 segment lengths (metres) of one named trail, from offset, plus the trail's row count."""
    rows = [s for s in SEGMENTS if s["NAME"] == name]
    return {"lengths_m": [s["Shape__Length"] for s in rows[offset:offset + PAGE]], "total_rows": len(rows)}

def run(plan, max_steps=8):
    """Execute tool calls until the plan answers; stop when the step budget is spent."""
    seen, total = [], None
    for step, call in enumerate(plan, start=1):
        if step > max_steps:
            return "STOPPED: budget of %d steps spent, no answer" % max_steps
        if call["type"] == "answer":
            recomputed = round(sum(seen) / 1000, 2)
            if len(seen) != total:
                return "REJECTED: read %d of %d segments" % (len(seen), total)
            if call["km"] != recomputed:
                return "REJECTED: claimed %s km, tool results add to %s km" % (call["km"], recomputed)
            return "OK: %s km from %d segments" % (call["km"], total)
        result = get_segments(call["name"], call["offset"])
        seen += result["lengths_m"]
        total = result["total_rows"]
    return "plan ended without an answer"

# Three stand-in plans in place of a model, so the loop and its checks run with no AI service.
name = "Bowen Park"
rows = get_segments(name, 0)["total_rows"]
calls = [{"type": "tool", "name": name, "offset": o} for o in range(0, rows, PAGE)]
honest = calls + [{"type": "answer", "km": 7.53}]
stuck = [calls[0]] * 20                                   # asks for the first page again and again
early = calls[:2] + [{"type": "answer", "km": 3.26}]       # answers after two pages of five

for label, plan in (("honest", honest), ("stuck", stuck), ("early", early)):
    print(label, "->", run(plan))
```

What it printed:

```
honest -> OK: 7.53 km from 219 segments
stuck -> STOPPED: budget of 8 steps spent, no answer
early -> REJECTED: read 100 of 219 segments
```

### The stuck plan

It asks for the first page twenty times. Without a budget the loop would run until someone noticed; with one, it stops after eight steps and says plainly that it has no answer. An honest stop is a result.

### The early plan

It reads two pages of five and answers 3.26 km. That number is the true sum of what it read, so a check that only re-adds its tool results would pass it. The completeness rule catches it: 100 of 219 segments is not the trail.

### The honest plan

Five calls, every segment read, a total that matches the tool results: 7.53 km. The figure is our sum of the City's segment lengths, not a published trail length, and segments without a name are not included.

### What the file does not settle

Bowen Park segments include 13 of stairs and 2 of bridge, so the 7.53 km mixes surfaces a walker and a cyclist would treat very differently. The layer has no date column, and a trail split across two names would need a person to decide whether to merge them. We report the sum for one name and stop there.

Used under the Open Government Licence - Nanaimo, which grants use including for commercial purposes ([Open Data Catalogue Licence](https://www.nanaimo.ca/your-government/maps-data/open-data-catalogue/open-data-catalogue-licence)). Contains information licenced under the Open Government Licence - Nanaimo. No endorsement by the City of Nanaimo is implied.

## Budgets, finish lines and honest stops

Anthropic, describing how it builds agents, notes that it is common to include stopping conditions, such as a maximum number of iterations, to maintain control. We teach that as a rule, not an option, and add a second one: define what finished means before the agent starts.

**Four guards every learner adds to an agent loop (ours)**

| Guard | Question it answers | In the Nanaimo agent |
|---|---|---|
| Step budget | When do we give up? | Eight steps, then an explicit STOPPED message |
| Completeness rule | Has the agent seen everything it needs? | Segments read must equal the trail's segment count |
| Recomputation | Does the answer follow from the evidence? | The claimed total must equal the sum of the tool results |
| Plain failure messages | Can a person tell what went wrong? | Each rejection says why, in numbers |

Vibe coding meets the same ideas in a smaller form. When a Nanaimo teen asks an assistant for a loop, we ask what makes it end, and what proves it ended for the right reason. A while loop that relies on a condition the data never meets is the stuck plan in miniature, and a for loop over the first page of results is the early plan.

All of this rests on the owner's promise: we teach people to think a problem through and solve it, never to copy an answer, and an AI's answer is no exception. Whether the learner is in Grade 10 or runs a small business in Nanaimo, the closing question of every exercise is the same: how do you know it is finished, and how do you know it is right?

## AI tools by age for Nanaimo learners

Every company that makes an AI coding tool sets its own minimum age. We went through those pages on 22 October 2026, and the result below sets the course each Nanaimo learner can enter.

### From 13: GitHub Copilot

GitHub accounts are open from age 13, and GitHub Education gives Copilot free to verified students. It is the assistant our teen course leans on.

### 13 to 17 with a parent: OpenAI

ChatGPT and OpenAI's other services are open to 13 to 17 year olds only with a parent or guardian's say-so, under the company's current terms. We collect that say-so first.

### 18 and over: Claude and Claude Code

Anthropic's consumer terms set a minimum age of 18. Nanaimo teens therefore never see either tool in class; they belong to the adult course.

One more rule applies to everyone: the Canadian Computing Competition forbids generative AI and AI features built into code editors, so contest practice is done with every assistant switched off. Terms belong to the companies and are revised from time to time; we look them over again ahead of every intake, and anyone opening an account should read the live version.

## Computing in BC schools for a Nanaimo student

Nanaimo public schools follow the BC curriculum. Quoted phrases are from the ministry's curriculum site and from CEMC, read on 22 October 2026; the rest is our own summary.

A Nanaimo child first meets computing in Grades 6 and 7, when the BC curriculum asks for at least three Applied Design, Skills, and Technologies modules a year; the computational thinking module mentions &ldquo;simple algorithms&rdquo; and &ldquo;visual programming&rdquo; with tools such as Kodu and Scratch. By secondary school the options widen into Web Development 10, Computer Programming 11 and 12, and Robotics 11 and 12 on the ADST side, and Computer Science 11 and 12 on the mathematics side.

By Grade 12 the BC programming course expects students to organise code into functions, methods or classes. The trail agent is built that way on purpose: one tool function with a clear contract, one loop function holding its guards, and nothing hidden. We tutor beside the school course rather than in place of it; marks and credits come from the school, and we award no BC credit ourselves.

**CEMC computing contests open to Nanaimo students, 2026 to 2027 (CEMC, read 22 October 2026)**

| Contest | Details | Date |
|---|---|---|
| Beaver Computing Challenge | 15 multiple-choice questions at the Grade 7/8 and 9/10 levels, 45 minutes, no coding needed | 9 to 20 November 2026 |
| Canadian Computing Competition | Junior or Senior, chosen by skill regardless of grade; C, C++, Python or Java | Wednesday 17 February 2027 |
| Canadian Computing Olympiad | By invitation: about 20 top official CCC Senior participants | Each spring, after the CCC |

Registration for CEMC contests goes through schools only. For more detail, read our guide to [BC Computer Programming 11 and 12](/computer-programming-11-and-12-bc) or the [Beaver Computing Challenge guide](/beaver-computing-challenge-guide).

## One clock all year on Vancouver Island

British Columbia moved to permanent Pacific daylight time in March 2026, so Nanaimo is seven hours behind UTC in summer and winter alike. Our teachers are in India, 12 hours 30 minutes ahead of Nanaimo through every season.

**Example Nanaimo times and the India clock, for illustration only (UTC-7 all year; our conversion)**

| Nanaimo | India | Example learner |
|---|---|---|
| Weekday 5:00 to 6:30 pm | 5:30 to 7:00 am, next day | Teens after school |
| Weekday 8:00 to 9:30 pm | 8:30 to 10:00 am, next day | Working adults |
| Saturday 9:00 to 10:30 am | 9:30 to 11:00 pm, same day | Families and adults |

### November stays quiet

Eastern Canada sets its clocks back on 1 November 2026. Nanaimo does not, so October class times carry straight through the winter.

### Island phone numbers

The booking form takes Island and BC numbers on 250, 778, 236, 672 or 257. Leave off the country code and give ten digits.

### Times in your zone

Every schedule we send is written in Pacific time first. Teachers in India do the conversion so that families do not have to.

## From a loop that ends to an agent that knows when to stop

The age bands are rough. Each Nanaimo learner's first lesson decides the true starting point.

- **Ages 13 and 14: Loops that end** Python by hand, with loops, conditions and functions, and the habit of asking what stops each loop. [Python for Teens](/courses/python-complete-masterclass-teens), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Ages 14 to 17: Assisted projects** Vibe coding with permitted assistants, and machine learning with honest evaluation. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Ages 18 and up: AI in practice** Automation and generative AI for students and adults changing careers. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)
- **Working adults: Guarded agents** Coding agents on real repositories, with budgets, checks and rollback. Adults only. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)

## If an AI agent can do the work, why should a Nanaimo learner code?

Because someone has to decide when the work is done.

The early plan in the trail example gave an answer that was arithmetically perfect and factually wrong: it summed exactly what it had read, and it had read less than half the trail. No model can tell you that by itself, because it does not know what you meant by the whole trail. A person who has written a paging loop knows to ask.

That is the part our classes protect. A fifteen-year-old practises it with a permitted assistant, a forty-year-old with an agent on a work repository; both must explain, unaided, why the program stops and why the answer covers everything.

An agent with no budget and no finish line is not autonomous; it is unsupervised. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Live online for Nanaimo, from Departure Bay to Cedar

No ferry, no drive. A live teacher works through the lesson with each learner over video and asks them to explain their code as they go.

- **Times** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Class size** A shared class holds fifteen to twenty learners of one age band and level; private lessons suit anyone who wants their own pace.
- **Teens and adults kept apart** The companies' terms give teens and adults different tools, so the two groups always take different courses.
- **Up and down the Island** Learners in Lantzville, Ladysmith, Parksville and Victoria join the same online groups on the same Pacific clock.
- **What you need** A computer with a modern browser, a microphone, and a connection that holds a video call. No paid AI subscription is needed for teens.
- **Try a lesson free** The first lesson is a full class at no cost and ends with a placement. No card is taken.

**No Nanaimo centre** We have no premises in Nanaimo and claim none. Teaching is live over video from India, and we are not connected with the City of Nanaimo, the BC ministry or CEMC.

## Fees for Nanaimo learners

Three lines, each priced in your own currency by the anchor.

- First class: USD 0. A full first lesson, free, ending with a level and a suggested course.
- Group tuition: USD 100 a month. The monthly fee for a group of fifteen to twenty, eight live classes a month.
- Private tuition: USD 150 a month. The monthly fee for private lessons at times that suit you.

Island learners pay the same monthly fee as learners on the mainland or anywhere else in Canada. Billing begins only after the first lesson.

## Vibe coding and AI agents in Nanaimo: questions

### Do you offer vibe coding classes in Nanaimo?

Yes, live online. Nanaimo teens from 13 to 17 take the teen course, adults take separate courses, and every class has a real teacher on video. There is no classroom in Nanaimo.

### What is vibe coding?

Building software by describing what you want to an AI model and letting it write the code. We teach it as the first draft, followed by testing, checking and explaining.

### What is a step budget in an AI agent?

A limit on how many actions the agent may take before it must stop. In our Nanaimo trail agent the budget is eight steps; a plan stuck repeating itself is stopped and reports that it has no answer.

### Can my teenager use Claude Code?

Not with us. Anthropic's consumer terms set 18 as the minimum age, which keeps Claude Code inside the adult course.

### Is ChatGPT required for the teen course?

No. Because OpenAI wants a parent to agree for users under 18, we bring it in only after you say yes; otherwise teens work with GitHub Copilot, free to verified students.

### Can Vancouver Island adults learn to build agents?

Yes, online. Agent building with Codex and Claude Code is taught to adults only, on Git repositories, and every agent a learner writes carries a budget and a completeness check.

### How long are the Bowen Park trails in the City data?

Our sum of the 219 segments named Bowen Park in the City of Nanaimo trails layer is about 7.53 km. That is our calculation from the segment lengths, not a figure published by the City.

### Does this connect to BC Computer Programming 12?

Yes. That course is about organising code into functions and similar structures, which is how the trail agent is written. We work beside the school, which alone awards the credit.

### What about AI help in computing contests?

Not allowed in the CCC, whose rules forbid generative AI and editor plug-ins. CEMC lists the 2027 CCC for Wednesday 17 February 2027, written at school.

### Which lesson times can a Nanaimo family pick?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our schedules show Pacific time, unchanged by any November switch.

## Other pages for Nanaimo and BC learners

Our Canada-wide page, [vibe coding and AI agents classes in Canada](/vibe-coding-and-ai-agents-classes-in-canada), gives the national picture, and [coding classes in British Columbia](/coding-classes-in-british-columbia) for the province. Families can read [what is vibe coding?](/what-is-vibe-coding) and the [parent's guide to vibe coding](/parents-guide-to-vibe-coding); adults may want [AI agents explained](/ai-agents-explained).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-nanaimo](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-nanaimo#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
