---
title: "Vibe Coding and AI Agents Classes in Greater Sudbury | Online"
description: "Vibe coding and AI agents for Greater Sudbury teens and adults: AI tool age rules, Ontario school coding, and a check that bilingual City park records agree."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-greater-sudbury
source: src/pages/vibe-coding-and-ai-agents-classes-in-greater-sudbury.html
---
> Modern Age Coders teaches vibe coding and AI agents classes live online to Greater Sudbury learners. Thirteen to seventeen year olds enrol in Vibe Coding for Teens; grown-ups learn agents with Codex and Claude Code in a course closed to anyone under 18. Lessons are shared, fifteen to twenty per group, or private, and every agent answer has to name the record it used.

[Home](/) / [Canada](/coding-classes-in-canada) / [Ontario](/coding-classes-in-ontario) / Greater Sudbury

Greater Sudbury, Ontario / Live online

# Vibe coding and AI agents classes in Greater Sudbury

**How can a Greater Sudbury teen or adult learn vibe coding and AI agents?** Modern Age Coders teaches vibe coding and AI agents classes live online to Greater Sudbury learners. Thirteen to seventeen year olds enrol in Vibe Coding for Teens; grown-ups learn agents with Codex and Claude Code in a course closed to anyone under 18. Lessons are shared, fifteen to twenty per group, or private, and every agent answer has to name the record it used.

Greater Sudbury takes in Sudbury itself and communities such as Lively, Chelmsford, Val Caron and Capreol, and its City publishes its parks list with every name and category in both English and French. Bilingual records invite a check that AI tutorials rarely mention. Vibe coding is asking an AI model to write code from plain words; an AI agent goes a step further and decides which tools to call to answer a question. Ask such an agent about a park in English and then in French, and on this file it can give two different answers for the same place, because a handful of records disagree with themselves. Below, we find those records by OBJECTID with three short checks, and explain why an agent should cite the ID it relied on. Further sections cover the minimum ages AI firms set, what local schools teach under the provincial curriculum, and how lesson times move when Eastern clocks change.

Facts last verified 23 October 2026. Teaching is online; no Greater Sudbury branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for Greater Sudbury learners

Teens and adults may use different AI tools, so they take different courses. Level is decided in the free first lesson.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects with assistants teens are allowed to use, where each answer the program gives can be traced to the data behind it.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Teens, beginners): Strings, dictionaries and loops in hand-written Python, so a teen can read an assistant's code and spot where it assumes too much.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults only, 18+): Coding agents on real repositories for working adults. Anthropic's age floor for Claude Code is 18, so teens are not admitted.
- [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course) (Ages 18 and up): Full stack projects built with AI assistance for college students and career changers, with the data structures needed to judge the code.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## One park, two languages, two answers: auditing the City's bilingual file

The City of Greater Sudbury publishes its parks as open data: 406 rows, each with an English and a French name, category and address. Before letting an agent answer questions about it in either language, we checked that the two halves of each record agree. We wrote the checks and made the counts ourselves, on a copy of the CSV taken on 23 October 2026.

**The file at a glance (our tally of the City of Greater Sudbury Parks / Parcs file, 406 rows)**

| What we counted | Result |
|---|---|
| Largest English categories | Natural Park 92, Playground 83, Park 74, Tot Lot 70 |
| Community values | 23, with Sudbury on 206 rows |
| English name Unnamed / French name Sans nom | 94 / 93 |
| Category pairs off the usual English and French pattern | 3 |
| Rows where only one language says the park is unnamed | 9 |
| French names or categories with stray spaces or line breaks | 21 |

Why this matters for an agent: a tool that looks parks up by French category would return OBJECTID 169 as a natural park, while the English record calls it a plain Park. Asked in English, the agent says one thing; asked in French, another. Neither answer is invented, which is what makes it hard to notice.

The three checks, using only Python's standard library:

```
# Sudbury parks, English half against French half: an audit we wrote for this page
from collections import Counter
import csv

rows = list(csv.DictReader(open("sudbury-parks.csv", encoding="utf-8-sig")))
clean = lambda s: " ".join(s.split())

# Learn the usual English-to-French category pairing from the file itself (the majority wins).
pairs = Counter((clean(r["Category_E"]), clean(r["Category_F"])) for r in rows)
usual = {}
for (en, fr), n in pairs.most_common():
    usual.setdefault(en, fr)

# Check 1: categories whose French label is not the usual partner of the English one.
odd_category = [(r["OBJECTID"], clean(r["Category_E"]), clean(r["Category_F"])) for r in rows
                if usual[clean(r["Category_E"])] != clean(r["Category_F"])]

# Check 2: one language says the park has no name, the other gives one.
EN_NONE, FR_NONE = "Unnamed", "Sans nom"
odd_name = [(r["OBJECTID"], clean(r["Name_EN"]), clean(r["Name_FR"])) for r in rows
            if (clean(r["Name_EN"]) == EN_NONE) != (clean(r["Name_FR"]) == FR_NONE)]

# Check 3: text that needs trimming before any lookup can match it.
untrimmed = sum(1 for r in rows for k in ("Name_FR", "Category_F") if r[k] != r[k].strip())

print("parks", len(rows), "| category pairs that break the usual pattern:", odd_category)
print("name pairs where only one language says unnamed:", len(odd_name))
print("French name or category values with stray spaces or line breaks:", untrimmed)
```

What it printed:

```
parks 406 | category pairs that break the usual pattern: [('115', 'Tot Lot', 'Rue Redfern'), ('123', 'Natural Park', 'Parc'), ('169', 'Park', 'Parc naturel')]
name pairs where only one language says unnamed: 9
French name or category values with stray spaces or line breaks: 21
```

### The odd category pairs

OBJECTID 115 is a Tot Lot in English and Rue Redfern in French, a street name sitting in the category column. OBJECTID 123 is a Natural Park paired with Parc, and 169 a Park paired with Parc naturel. The pattern each one breaks was learned from the file itself, by majority.

### The odd name pairs

OBJECTID 65 is Unnamed in English but croissant Douglas in French. Five parks, including 265 Lively Greenspace and 273 Bell Grove, have English names and Sans nom in French. Three more, 364 to 366, say Unnamed - Lake Access and Sans nom, which a person may decide is consistent after all.

### Why a person decides

The checks find candidates, not verdicts. Whether Unnamed - Lake Access matches Sans nom is a judgement about meaning. A good audit lists every case with its ID and leaves that call to someone who can ask the City.

### What an honest agent answer looks like

In our adult course, the lookup tool returns both languages and the OBJECTID, and the answer must quote the ID it used. When the two languages disagree, the agent says so: OBJECTID 169 is listed as Park in English and Parc naturel in French. An answer without an ID is rejected by the check, and so is one that reports only the language that was asked.

Reused under the City of Greater Sudbury Open Data Licence, an adaptation of Ontario's Open Government Licence 1.0 whose grant covers commercial purposes ([licence](https://www.greatersudbury.ca/city-hall/open-data/licence/), [dataset](https://opendata.greatersudbury.ca/datasets/e1f2c475a7d14e3dbc46715b8baed81a_4)). Contains information licensed under the Open Data Licence - City of Greater Sudbury. No endorsement by the City is implied.

## Agents need trustworthy ground, so we check the ground first

Anthropic, writing about the agents it builds, observes that agents' autonomy makes them ideal for scaling tasks in trusted environments. The word that matters is trusted. A bilingual file with records that contradict themselves is not yet a trusted environment, so we audit before we automate.

**Four steps, in this order, for agents over real records (our method), each tied to an Ontario course idea**

| Step | What happens | Ontario link |
|---|---|---|
| Audit | Check paired or repeated columns agree, and list every exception by ID | Grade 8: coding that analyses data to support a decision |
| Clean or flag | Trim stray spaces; flag, never silently fix, contradictions | Grade 5 coding: conditional statements choose the path |
| Build the tool | Return every field the answer needs, plus the record ID | ICS3C: students write and test computer programs |
| Check the answer | Reject answers that drop the ID or hide a disagreement | ICD2O: weighing what AI does well and badly |

Vibe coding gets the same discipline in smaller doses. When a Greater Sudbury teen asks an assistant to look something up in the parks file, the class first asks what the lookup key is, whether it is clean, and what happens if English and French disagree. The assistant writes the code quickly; the learner decides whether it can be trusted.

This is our owner's promise in practice: learners are trained to reason their way to a solution instead of copying one, and an AI's reply counts as one more thing to reason about. In Greater Sudbury that means every learner, teen or adult, finishes the parks exercise by explaining one flagged record in their own words and saying what they would ask the City.

## Which AI tools a Greater Sudbury teen may use

Who may use an AI tool is decided by the firm that makes it. The rules below, as published on 22 October 2026, sort Greater Sudbury learners into our teen or adult courses.

### GitHub Copilot: from 13

GitHub requires account holders to be at least 13, and GitHub Education offers Copilot free to verified students. Teens in our course can use it.

### ChatGPT: with consent

Per OpenAI's help centre, anyone from 13 to 18 needs a parent's consent to use ChatGPT. A teen lesson brings it in only after that consent arrives.

### Claude and Claude Code: 18+

Anthropic's consumer terms carry an 18-and-over rule. That puts both tools in the adult course only, out of reach of every teen class.

Contests are stricter still: the Canadian Computing Competition bans generative AI, including AI features inside code editors, so contest practice happens with no assistant at all. Adults, meanwhile, learn agents on projects held in Git, reading every change before it is kept. Because these are company rules, we check them again before each course begins.

## Where Greater Sudbury students meet code at school, in either language

Publicly funded schools across the city teach to the provincial curriculum. Our summaries below draw on the Ontario curriculum site and on CEMC, consulted 22 October 2026.

### Early grades

Ontario math introduces coding in Grade 1; by Grade 2 the code involves sequential and concurrent events, and by Grade 5 it adds conditional statements and other control structures, the same if and else used in the audit above.

### Grade 8

In Grade 8 the curriculum turns coding toward data that helps people make and explain decisions, which is a fair description of the park audit: it tells a person which records to question.

### High school

Grade 11 brings ICS3U and ICS3C, and the Grade 10 course ICD2O has students judge where AI helps and where it falls short. We tutor beside these courses; the credits themselves come only from school.

**Waterloo contests open to Greater Sudbury students this school year, with CEMC's published dates**

| Contest | Language | Date |
|---|---|---|
| Beaver Computing Challenge | English only | 9 to 20 November 2026 |
| Canadian Computing Competition | English and French | Wednesday 17 February 2027 |
| Euclid (final year of secondary school) | See CEMC | Tuesday 6 April 2027 |
| Fryer, Galois and Hypatia (Grades 9, 10, 11) | See CEMC | Wednesday 7 April 2027 |

French-language school students can write the CCC in French; the Beaver challenge, by contrast, comes in English alone. CEMC says the Euclid contest is written annually by over 25,000 participants worldwide. All CEMC contests are entered through a school. Our [Euclid preparation page](/euclid-contest-preparation) and [CCC Junior guide](/ccc-junior-guide) have more.

## Greater Sudbury clocks and India clocks, 2026 to 2027

The city is on Eastern time. Its clocks go back on the first of November 2026 and ahead again in mid-March 2027, while India, home to our teachers, never moves.

**A Tuesday 4:30 pm class in Greater Sudbury, seen from India (tzdb 2026e; our conversion)**

| Period | Greater Sudbury | India |
|---|---|---|
| Before 1 November 2026 | 4:30 pm, UTC-4 | 2:00 am, Wednesday |
| Winter, from 1 November 2026 | 4:30 pm, UTC-5 | 3:00 am, Wednesday |
| After 14 March 2027 | 4:30 pm, UTC-4 | 2:00 am, Wednesday |

### Fixed on your side

Your class keeps the same local time through both changes. We resend each schedule, in Eastern time, before the switch.

### Northeastern numbers

Numbers on the 705, 249 and 683 area codes are accepted in the booking form. Type ten digits, no leading 1.

### Mornings and evenings

A Saturday morning lesson in Sudbury lands in an Indian Saturday evening, so those slots rarely clash with anything.

## From a first lookup to agents that cite their records

The ages are only a guide; the first lesson shows where a Greater Sudbury learner really starts.

- **Ages 13 and 14: Lookups by hand** Python dictionaries, strings and loops typed without help, including keys that are not clean. [Python for Teens](/courses/python-complete-masterclass-teens), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Ages 14 to 17: Assisted and audited** Vibe coding with permitted assistants, plus data work that checks before it summarises. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Data Science for Teens](/courses/data-science-course-for-teens-python-data)
- **Ages 18 and up: AI projects** Full stack and generative AI projects for college students and career changers. [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)
- **Working adults: Cited agents** Coding agents on real repositories whose answers name the records they used. Adults only. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Why should a Greater Sudbury learner code if an AI can answer the question?

Because the AI can only answer from the data, and the data disagreed with itself.

Nothing in the parks example involved a clever algorithm. It needed someone to think of comparing the English half of each record with the French half, to write three short checks, and to recognise that Unnamed - Lake Access and Sans nom might be the same thing after all. Models do not ask that kind of question unless someone who understands the data asks it first.

That understanding is what our classes build. Teens work with assistants their age allows and adults with agents, and both audit before they automate, cite the record behind every answer, and explain their final code without help.

In a city that keeps its records in two languages, checking that they agree is part of the code, not an extra. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Live online across Greater Sudbury, from Capreol to Lively

No long drives across the city. Lessons are live on video, with a teacher who watches the learner's screen and asks them to explain what each line does.

- **Your schedule** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **Groups and private** Group lessons seat fifteen to twenty people of one age band and level; private lessons are there for anyone, adults with their own data especially.
- **Age tracks** Separate teen and adult courses follow from separate tool rules: what a fifteen-year-old may open is not what a thirty-year-old may.
- **Across the North** North Bay and Timmins learners sit in these groups too, since the whole region shares Sudbury's Eastern time.
- **What to have** A laptop or desktop, something to speak into, and internet good enough for video. Teens do not have to pay for any AI service.
- **Begin free** Lesson one is complete and costs nothing; it closes with our suggested level. Payment details are not taken.

**No Sudbury centre** We have no premises in Greater Sudbury and do not claim any. Teaching is live and online from India, and we are not connected with the City of Greater Sudbury, the Ontario Ministry of Education or CEMC.

## Fees for Greater Sudbury learners

Each figure below appears in the currency of wherever you are browsing from.

- First class: USD 0. A full first lesson at no charge, with a placement at the end.
- Group tuition: USD 100 a month. The monthly fee for a class of fifteen to twenty, eight live lessons a month.
- Private tuition: USD 150 a month. The monthly fee for one-to-one lessons at times you choose.

Sudbury fees are identical to fees in every other Canadian city. We bill nothing until the free lesson is over and you have chosen both course and time.

## Vibe coding and AI agents in Greater Sudbury: questions

### Can Greater Sudbury learners take your vibe coding classes?

Yes. Classes are live online with a teacher, so learners anywhere in Greater Sudbury join from home. Teens and adults learn in separate courses, and there is no local classroom.

### What is vibe coding?

Telling an AI model in plain words what program you want and letting it write the draft. Our classes teach the part after that: checking, testing and understanding the code.

### What does it mean for an agent to cite a record?

Its answer names the ID of the data it relied on, such as an OBJECTID in the City parks file, so a person can look it up and confirm it. Our checks reject agent answers that do not.

### Can a Sudbury teenager use Claude Code with you?

No. Anthropic's age floor is 18, which confines Claude Code, and Claude itself, to our adult course.

### Will my teenager have to open a ChatGPT account?

No. Consent from a parent is OpenAI's condition for users aged 13 to 18, so ChatGPT stays out unless you give it; GitHub Copilot, free to verified students, covers the gap.

### Is there agent training for adults in Northern Ontario?

Yes, delivered online. Over-18s build agents with Codex and Claude Code on Git repositories, and each agent they write has to cite the records its answers rest on.

### What did the bilingual audit find?

Three parks whose English and French categories do not match, including OBJECTID 115, whose French category is a street name, and nine where only one language calls the park unnamed. A person reviews each one.

### Will a course with you count as an Ontario credit?

It will not: we do not grant Ontario credits. ICS3U, ICS3C, ICD2O and the rest are awarded by schools, and our lessons simply run beside them.

### Can the CCC be written in French, and is AI allowed?

CEMC offers the CCC in English and French, on Wednesday 17 February 2027, through schools. AI tools are banned during the contest.

### At what times can a Sudbury learner study?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Sudbury families get every schedule in their own Eastern time.

## Other pages for Greater Sudbury and Ontario learners

Our national overview lives at [vibe coding and AI agents classes in Canada](/vibe-coding-and-ai-agents-classes-in-canada); for Ontario as a whole see [coding classes in Ontario](/coding-classes-in-ontario). Families can read [vibe coding for teens](/vibe-coding-for-teens); adults may start with [agentic coding classes](/agentic-coding-classes).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-greater-sudbury](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-greater-sudbury#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
