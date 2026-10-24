---
title: "Vibe Coding and AI Agents Classes in Kingston, Ontario"
description: "Vibe coding and AI agents for Kingston, Ontario teens and adults: tool age limits, Ontario computer studies, and a rink agent that must date every answer."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-kingston-ontario
source: src/pages/vibe-coding-and-ai-agents-classes-in-kingston-ontario.html
---
> Yes. Modern Age Coders runs live online classes for Kingston, Ontario: Vibe Coding for Teens for 13 to 17 year olds, and a Codex and Claude Code agents course limited to adults. Study in a class of fifteen to twenty, or privately with one teacher, and learn to make every AI answer show where its facts came from and how old they are.

[Home](/) / [Canada](/coding-classes-in-canada) / [Ontario](/coding-classes-in-ontario) / Kingston

Kingston, Ontario / Live online

# Vibe coding and AI agents classes in Kingston, Ontario

**Can a Kingston teen or adult learn to build with AI properly, not just prompt it?** Yes. Modern Age Coders runs live online classes for Kingston, Ontario: Vibe Coding for Teens for 13 to 17 year olds, and a Codex and Claude Code agents course limited to adults. Study in a class of fifteen to twenty, or privately with one teacher, and learn to make every AI answer show where its facts came from and how old they are.

Kingston, at the eastern end of Lake Ontario, is the city on this page; not Kingston upon Thames and not Kingston, Jamaica. Vibe coding is writing software by describing it to an AI model, while an AI agent hands the model a set of tools, lets it call them, and has it act on whatever comes back. A model will happily tell you a rink is closed tonight. What it will not tell you, unless someone forces it to, is that its information was last updated in March. This page builds a small rink agent on the City of Kingston's own outdoor rinks file, then adds the check that makes it honest about dates. It also covers the AI tools a Kingston teen may use, the Ontario courses and contests a student meets, and how lesson times move with Ontario's clock changes.

Facts last verified 23 October 2026. Teaching is online; no Kingston branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for Kingston teens and adults

Which tools a learner may use depends on age, so the course does too; level is settled in the free lesson.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects with assistants a teenager may use, where every answer the software gives must cite its source and date.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Teens, first steps): Python written by hand, from variables to dictionaries and dates, so that AI-written Python can be read rather than trusted.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults only, 18+): Coding agents on real repositories for working adults. Anthropic restricts Claude Code to people aged 18 and over, so no teen is enrolled.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (Adults, automation): Scripts that fetch, clean and report on real data for adults at work, the everyday ground where agents are most tempting and most risky.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Is the Polson Park rink open? An agent that has to say &ldquo;as of when&rdquo;

The City of Kingston publishes its public outdoor rinks as open data: seventeen rinks, each with hours, a status and a few yes or no fields. We built a tiny agent around it and a check a person wrote first. Code, output and counts are ours; the file was downloaded on 23 October 2026.

**What the City's file holds (our tally of 17 rows, downloaded 23 October 2026)**

| Field | Values in the file |
|---|---|
| Status | Closed on all 17 rows |
| Type | City Operated 13, Community Rink Agreement 4 |
| Hours of Operation | 7:00 am - 9:00 pm on 16 rows, one rink with later hours |
| Washroom | Yes at 6 rinks |
| Staffed | Yes at 7 rinks |
| Capacity | Only the numbers 0, 5, 10 and 25, with no unit or definition anywhere in the dataset description |
| Layer last edited | 21 March 2026, according to the City's map service |

Every rink reads Closed. On a late October download that is no surprise, and the City's own description says that the existence of the rinks is weather dependent and that unstaffed rinks may be maintained by volunteers under a community agreement. But an agent asked &ldquo;is Polson Park open tonight?&rdquo; in January would still read Closed from a file last edited in March, and answer with total confidence.

So the tool returns the edit date with every row, and the check refuses answers that leave it out:

```
# Kingston rink agent: every answer must say how old its data is (our classroom example)
import csv, json
from datetime import datetime, timezone

RINKS = list(csv.DictReader(open("kingston-rinks.csv", encoding="utf-8-sig")))
EDITED_MS = json.load(open("layer0.json", encoding="utf-8"))["editingInfo"]["dataLastEditDate"]
AS_OF = datetime.fromtimestamp(EDITED_MS / 1000, timezone.utc).strftime("%d %B %Y")

def rink_status(name):
    """Tool: one rink's row, plus the date the City last edited the layer."""
    for r in RINKS:
        if r["Name"].lower().startswith(name.lower()):
            return {"rink": r["Name"], "status": r["Status"], "hours": r["Hours of Operation"],
                    "washroom": r["Washroom"], "staffed": r["Staffed"], "as_of": AS_OF}
    return {"error": "no rink starting with " + name}

def check(answer, result):
    """Human-written check: a status claim needs the as-of date and must match the tool."""
    problems = []
    if result["status"].lower() not in answer.lower():
        problems.append("status differs from the tool")
    if result["as_of"] not in answer:
        problems.append("no as-of date")
    if "capacity" in answer.lower():
        problems.append("uses Capacity, which the file never defines")
    return "OK" if not problems else "REJECTED: " + "; ".join(problems)

result = rink_status("Polson Park")
print("tool ->", result)
# Two stand-in answers in place of a model, so the check can be tested offline.
honest = "The City's layer, last edited " + AS_OF + ", lists Polson Park Outdoor Rink as Closed."
hasty = "Polson Park rink is Closed tonight and holds 10 skaters at capacity."
for a in (honest, hasty):
    print(check(a, result), "|", a)
```

What it printed on our machine:

```
tool -> {'rink': 'Polson Park Outdoor Rink', 'status': 'Closed', 'hours': '7:00 am - 9:00 pm', 'washroom': 'Yes', 'staffed': 'Yes', 'as_of': '21 March 2026'}
OK | The City's layer, last edited 21 March 2026, lists Polson Park Outdoor Rink as Closed.
REJECTED: no as-of date; uses Capacity, which the file never defines | Polson Park rink is Closed tonight and holds 10 skaters at capacity.
```

### The date travels with the fact

Every tool result carries the layer's last-edit date. An answer that drops it is rejected, because a status without a date is a guess dressed as a fact, especially for something as changeable as ice.

### Undefined means untouchable

Capacity holds 0, 5, 10 and 25, and nothing in the City's description says what they count. The hasty answer turned 10 into skaters. Our check rejects any answer that uses the field until someone finds a definition.

### Stand-in answers, on purpose

The two answers are written by us in place of a model, one honest and one hasty, so the check can be tested on any laptop with no AI service. In the adult course the stand-ins are replaced by real model calls and the check stays.

### What a better agent would add

Two OBJECTIDs, 2 and 3, are missing from the sequence; the rows may have been retired, and the file does not say. A careful agent would also point users to the City's own rink page for live conditions, rather than treating a spring snapshot as tonight's news.

Used under the City of Kingston Open Data Licence 1.0, which the City adapted from version 1.0 of the Open Government Licence for Ontario; its grant covers commercial purposes as well ([licence](https://www.cityofkingston.ca/documents/10180/144997/CityofKingston_OpenDataLicense.pdf), [dataset](https://opendatakingston.cityofkingston.ca/datasets/10f7c977639442679ea836b47935ab3b_0)). Contains information licensed under the Open Data Licence - City of Kingston. The City does not endorse this page or our classes.

## Agents run for many steps. Every step needs a source and a date

Anthropic, writing about agents its engineers build, puts the risk plainly: &ldquo;The LLM will potentially operate for many turns, and you must have some level of trust in its decision-making.&rdquo; Our job is to make that trust earned.

**Our four rules for agents that report facts (ours), and the Ontario course idea each one builds on**

| Rule | What it looks like in code | Ontario link |
|---|---|---|
| Every fact has a source | Tool results carry the dataset name and row ID | ICS4U: programs that are &ldquo;fully documented&rdquo; |
| Every fact has a date | Tools return the data's last-edit date; answers must repeat it | ICS3C: students &ldquo;write and test computer programs&rdquo; |
| Undefined fields are off limits | The check rejects answers that use columns without a definition | MTH1W: decomposing situations &ldquo;into computational steps&rdquo; |
| Stand-ins before models | Test the loop with hand-written answers first, good and bad | Grade 6 math: writing and executing &ldquo;efficient code&rdquo; |

Vibe coding gets the same treatment at a smaller scale. When a Kingston teen asks an assistant for a function, the first question in class is not whether it runs but what it assumes: which file, which date, which meaning for each column. A function that silently assumes the data is current is the same bug as the rink agent, only harder to see.

This is the owner's promise in our own words: we teach learners to think a problem through and solve it, never to copy an answer, and that includes an answer from an AI. A Grade 11 student and an adult who works with data are both asked, at the end of each task, where each fact came from and when it was true.

## AI tools a Kingston teen may use, by each company's rules

Every AI company sets a minimum age. Their pages, checked on 22 October 2026, decide which course a Kingston learner joins.

**Who may use what, by age (companies' terms and help pages, read 22 October 2026)**

| Tool | Age 13 to 17 | 18 and over | What the company says |
|---|---|---|---|
| GitHub Copilot | Yes | Yes | GitHub accounts from 13; free Copilot for verified students through GitHub Education |
| ChatGPT | With a parent's consent only | Yes | OpenAI says it requires children aged 13 to 18 to obtain parental consent |
| Claude and Claude Code | No | Yes | Anthropic: users must be at least 18 |
| Any AI help in the CCC | No | No | Contest rules forbid generative AI, including editor features |

### Kingston parents

We never ask a teen to create an account their age does not allow. Lessons that would use ChatGPT wait until a parent has said yes, which is what OpenAI itself asks.

### Kingston adults

Adults learn on agentic tools that edit code and run commands, inside a Git project, so each change is reviewed as a diff and can be undone.

### Recheck before you sign

These are company rules, not laws we can promise will stay fixed. We review them before each new course; read the live terms for any tool you choose.

## Ontario computer studies for a Kingston student, and where we fit

Publicly funded schools in Kingston follow the Ontario curriculum. Phrases in quotation marks are taken from the province's online curriculum and from CEMC, both consulted on 22 October 2026; the summaries are ours.

**Ontario computer studies courses (curriculum service, read 22 October 2026)**

| Course | Grade | In the ministry's words |
|---|---|---|
| ICD2O, Digital Technology and Innovations in the Changing World | 10, open (2023) | Strands on computational thinking, on hardware, software and innovations, and on programming |
| ICS3U, Introduction to Computer Science | 11, university | Software designed independently and in teams; no prerequisite |
| ICS3C, Introduction to Computer Programming | 11, college | &ldquo;Students will write and test computer programs&rdquo; |
| ICS4U, Computer Science | 12, university | &ldquo;modular design principles to create complex and fully documented programs&rdquo; |

We teach beside these courses and do not grant Ontario credits; a student earns ICS3U or ICS4U at school. Kingston students who began Grade 9 in 2020 to 2021 or later also need at least two online learning credits for the diploma, according to the Ontario government. Those credits come through the school system; our classes are not credit courses. EQAO lists Ontario's literacy test, the OSSLT, for 3 to 30 November 2026.

### The CCC in 2027

CEMC lists the 2027 Canadian Computing Competition for Wednesday 17 February 2027. Junior questions start with basic loops and conditions and end with recursion and two-dimensional arrays.

### Free practice

CEMC lets participants create a free practice account and access previous contests. We point Kingston students there and write our own practice problems rather than copying CEMC's.

### Entered at school

Students write CEMC contests through a school, not on their own. A Kingston student whose school does not take part can ask another local school about joining.

## Kingston changes its clocks twice in this school year

Kingston is on Eastern time and India, where our teachers are, never changes. The gap between them grows by an hour on 1 November 2026 and shrinks again on 14 March 2027.

**A 5 pm weekday class in Kingston, seen from India (UTC offsets from tzdb 2026e; India times are our conversion)**

| Period | Kingston | India |
|---|---|---|
| To 1 November 2026 | 5:00 pm, UTC-4 | 2:30 am, next day |
| 1 November 2026 to 14 March 2027 | 5:00 pm, UTC-5 | 3:30 am, next day |
| After 14 March 2027 | 5:00 pm, UTC-4 | 2:30 am, next day |

### We hold your time steady

Your class stays at the same Kingston time through each change; our teachers move their side. Schedules are re-sent in Eastern time the week before.

### Kingston numbers

Numbers with the 613, 343 and 753 area codes are accepted in the form. Enter the ten digits without a leading 1.

### Dates are a coding lesson

Clock changes are where date code breaks. The rink agent stores its as-of date in UTC for the same reason: the moment does not move when the clocks do.

## From reading code to agents that cite their sources

The ages are a guide only. Each learner's free lesson decides the real starting point.

- **Ages 13 and 14: Read and write by hand** Python without assistants, including files and dates, the basis for reading AI output. [Python for Teens](/courses/python-complete-masterclass-teens), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Ages 14 to 17: Vibe coding with care** Projects with permitted assistants, every result sourced and checked. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 and up: AI in real projects** Generative AI, retrieval and automation for students and career changers. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Automation Course](/courses/python-ai-automation-masterclass-college)
- **Working adults: Agents you can audit** Coding agents on live repositories, with sourced answers and safe rollback. Adults only. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)

## Why learn to code in Kingston if an AI can write the script?

Because the script was never the hard part of the rink agent; the questions were.

Writing the rink tool takes an assistant a few seconds. Knowing that the answer needs a date, that Capacity has no definition, and that two IDs are missing takes someone who has opened the file and thought about it. Those are the decisions that separate a toy from something a person can rely on.

Our classes put the time there. Teens learn on tools their age allows and adults on agents, but both learn to ask what the data is, when it was true and what it does not say, and both explain their finished code without help.

An agent that says &ldquo;as of 21 March 2026&rdquo; is less impressive and far more useful than one that sounds certain. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Live online for Kingston, from downtown to the west end

Lessons happen at home with a live teacher who watches the screen and asks the learner to explain each step aloud.

- **When** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Class size** Fifteen to twenty learners of one age band and level share a class, or a learner has the teacher alone, which suits adults working on their own data.
- **Teens and adults apart** Because their permitted tools differ under the companies' terms, teens and adults are always taught in separate courses.
- **Around Kingston** Learners from Napanee, Gananoque and the surrounding townships take the same online classes on the same Eastern clock.
- **What to have ready** A laptop or desktop, a microphone and a steady connection. No paid AI subscription is needed for the teen course.
- **Free first lesson** The first lesson is a full class at no cost, closing with a placement. We do not ask for card details.

**No Kingston location** We have no centre in Kingston and do not claim one. Teaching is live and online from India, and we are not connected with the City of Kingston, the Ontario Ministry of Education, EQAO or CEMC.

## Fees for Kingston learners

Three items; the price anchors show each one in your own currency.

- First class: Free. A full trial lesson, free, finishing with a level and a course suggestion.
- Group tuition: CAD 140 a month. The monthly fee for a group of fifteen to twenty, eight live classes a month.
- Private tuition: CAD 210 a month. The monthly fee for private lessons at times you choose.

Kingston learners pay the same monthly fee as anyone else in Canada. Billing starts only once the trial is done and a course and time are agreed.

## Vibe coding and AI agents in Kingston, Ontario: questions

### Do you have vibe coding classes for Kingston, Ontario?

Yes, live online with a real teacher. Kingston teenagers from 13 to 17 learn together, and adults learn in their own courses. There is no Kingston classroom.

### Is this for Kingston, Ontario or another Kingston?

Kingston, Ontario, at the east end of Lake Ontario. Lesson times are quoted on Eastern time, and the courses and contests described are Ontario ones.

### What is an AI agent, simply?

A program where an AI model decides which tools to use, runs them, and reports back. We teach learners to build one and to make it say where its facts came from and how current they are.

### Can my teenager use Claude Code in your classes?

No. Anthropic requires users to be at least 18, so Claude and Claude Code belong to our adult course only. They are never suggested to anyone younger.

### Will my teen need ChatGPT?

Not necessarily. OpenAI requires parental consent for ages 13 to 18, so we use it only with a parent's agreement. GitHub Copilot is free for verified students and is what teens use otherwise.

### Is there an AI agents course for adults in Kingston?

Yes. The Codex and Claude Code course is for adults only and uses real repositories in Git. Python automation is a gentler start for adults who want to work with data first.

### Why does the rink agent print a date?

Because the City's rink layer was last edited on 21 March 2026, and a status is only true as of its date. Our check rejects any answer that leaves the date out.

### Do your classes count for an Ontario credit?

No. We do not grant Ontario credits. Courses such as ICS3U and ICS4U, and the online learning credits in the diploma rules, are earned through school.

### Can students use AI in the Canadian Computing Competition?

No. The rules ban generative AI and AI tools inside the editor. CEMC lists the 2027 CCC for Wednesday 17 February 2027, entered through a school.

### What class times work in Kingston?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in Eastern time, and kept steady through clock changes.

## Other pages for Kingston and Ontario learners

For the country-wide view see [vibe coding and AI agents classes in Canada](/vibe-coding-and-ai-agents-classes-in-canada); for the province, [coding classes in Ontario](/coding-classes-in-ontario). Students can read the [CCC Junior guide](/ccc-junior-guide) and [ICS3U help](/ics3u-computer-science-help); adults can start with [coding classes for adults in Canada](/coding-classes-for-adults-in-canada).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-kingston-ontario](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-kingston-ontario#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
