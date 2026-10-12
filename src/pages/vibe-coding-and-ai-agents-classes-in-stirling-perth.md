---
title: "Vibe Coding and AI Agents Classes in Stirling, Perth"
description: "Stirling learners aged 6 to adult join live online vibe coding and AI agent lessons, with a project on place names that confuse agents, built on Main Roads data."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-stirling-perth
source: src/pages/vibe-coding-and-ai-agents-classes-in-stirling-perth.html
---
> It finds the wrong Stirling. A keyword search over Main Roads traffic counters matches Stirling Highway, Stirling Street and Stirling Crescent in other councils, 34 sites in all, and none inside the City of Stirling. A filter on the council field finds all 107. Learners build an agent that decides which Stirling a question means before it searches.

[Home](/) / [Australia](/coding-classes-in-australia) / [Western Australia](/coding-and-ai-classes-in-western-australia) / [Perth](/online-coding-and-python-classes-in-perth-western-australia) / Stirling

City of Stirling, northern suburbs of Perth, Western Australia / Live online

# Vibe coding and AI agents classes in Stirling

**What goes wrong when an agent searches for Stirling?** It finds the wrong Stirling. A keyword search over Main Roads traffic counters matches Stirling Highway, Stirling Street and Stirling Crescent in other councils, 34 sites in all, and none inside the City of Stirling. A filter on the council field finds all 107. Learners build an agent that decides which Stirling a question means before it searches.

The City of Stirling counted 226,369 residents in 2021, more than Joondalup, Wanneroo or Melville, and runs from the coast at Scarborough and North Beach inland to Mirrabooka and Dianella. Its name is shared by a highway, several streets, a suburb inside the council and much else across the state, which makes it the perfect place to teach an AI agent that a word is not a place.

Facts last verified 12 October 2026. Teaching is online; no Stirling branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Agents, vibe coding and careful search

Courses that suit the homonym project below. The first lesson is free and sets the level.

- [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens) (Ages 13 to 17): Coding agents for teenagers, with plans checked before code runs.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Small apps drafted with an assistant and checked line by line.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Tool calling, retrieval and evaluation of agent answers.
- [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course) (Ages 8 to 12): How AI reads words, and why it confuses names.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A big, mixed council of townhouses and buses

Council-wide numbers (ABS LGA57910) taken from the 2021 Census QuickStats on 12 October 2026, beside the bureau's population estimate for 2025.

**City of Stirling counts**

| Measure | Value |
|---|---|
| Residents, 2021 Census | 226,369 |
| Estimated residents, 2025 | 254,821 |
| Median age | 38 |
| Families | 59,778 |
| Private dwellings | 102,101 |
| People per household | 2.4 |

**Stirling shares compared with Western Australia**

| Share | Stirling | WA |
|---|---|---|
| Semi-detached, terrace or townhouse | 32.0% (28,890) | 13.0% |
| Separate houses | 58.0% (52,380) | 79.7% |
| Bus to work | 4.0% (4,700) | 2.9% |
| Bachelor degree or higher | 33.7% (63,451) | 23.8% |

### Denser housing

Almost a third of Stirling dwellings were semi-detached, terrace or townhouse homes, far above the state share.

### Two population figures

The Census counted 226,369 people; the ABS estimate for 2025 is 254,821. They are measured differently, so we report them separately.

### Schools

Our map test finds 47 government schools inside the council outline, 35 of them primary schools.

Census night fell during the pandemic, so commuting answers may reflect that week. The ABS rounds shares and lightly adjusts small counts for privacy; parts of its tables can differ slightly from totals, and we print its numbers unchanged.

## Which Stirling did you mean?

A user asks the agent: how busy are the roads in Stirling? The agent has two ways to search the Main Roads Traffic Digest. One matches the word in road names and site descriptions. The other filters on the council field Main Roads attaches to each count site. Learners run both and score them.

**Two search tools on the same question (Main Roads data; scoring is our calculation)**

| Tool | Sites found | In the City of Stirling |
|---|---|---|
| Keyword "stirling" in road or description | 34 | 0 |
| Council field equals City of Stirling | 107 | 107 |
| Keyword search of bike counters | 3 | 0 |
| Council filter on bike counters | 7 | 7 |

**Where the 34 keyword matches actually are (councils as Main Roads records them)**

| Council | Matches |
|---|---|
| Fremantle and Claremont | 5 each |
| Perth and Nedlands | 4 each |
| Swan, Mosman Park and East Fremantle | 3 each |
| Peppermint Grove and Cottesloe | 2 each |
| Toodyay, Northam and Vincent | 1 each |

### Stirling Highway

Fifteen matches are counters on Stirling Highway, recorded in councils from Nedlands to Fremantle, none of them in the City of Stirling.

### Hidden matches

Another 14 sites match only because their description mentions Stirling, such as a counter west of Stirling Highway or near Stirling Bridge.

### Zero and zero

The keyword tool scores no correct sites out of 34 found and finds none of the 107 it should. Yet its answer would look confident and full of numbers.

### Resolve first, then search

The fixed agent keeps a short list of what Stirling can mean here: the council, the suburb of the same name inside it, a highway, streets and a bridge. It maps the question to one of them and calls the matching structured tool. When the question cannot be resolved, it says which meanings it found rather than guessing.

Every site and council name is as Main Roads publishes it in its vehicle and bicycle counter layers, fetched on 12 October 2026. The two search tools, the matching rules and the precision and recall scores are our own scripts and arithmetic.

## A resolver step in front of every search

The agent gains one new step: before calling a tool, it turns the place words in a question into an identifier the data understands.

**Lesson steps**

| Step | Learner task |
|---|---|
| 1 | Write the keyword tool and the council-filter tool over the downloaded table. |
| 2 | Ask both for Stirling, then score precision and recall against the council field. |
| 3 | Build a small resolver that lists the meanings of a place word with their types. |
| 4 | Test the agent on ten questions, including ones about Stirling Highway that should not go to the council. |

The most revealing part of step 4 is the reverse case. A question about Stirling Highway traffic should reach the keyword or road tool and return the 15 highway counters, while a question about the City should not. Learners find that one tool is not right or wrong in general; it is right for one meaning. The same lesson applies to Perth, which on this website alone names a city in Western Australia and a city in Scotland.

### Younger learners

Sort picture cards of things that share a name, such as a bat for cricket and a bat that flies.

### Teenagers

Code both tools, measure precision and recall, and write the resolver with an AI assistant.

### Adults

Add entity resolution to a work agent that searches customers, products or sites by name.

## Busy highways, freeway paths and 2027 terms

Local figures from Main Roads and the WA Department of Education.

### Reid Highway

The counter at the bridge over Alexander Drive averages 76,071 vehicles a day, the highest of the 107 Stirling sites, from a 2024/25 count.

### Freeway path

The path beside Mitchell Freeway north of Hutton Street averages 744 riders a day, the busiest of the city's seven bike counters.

### Second semester

In 2027 the third WA school term opens on Monday 19 July and closes on Friday 24 September, a tidy window for a new course.

**Outline used** We use the ABS council boundary, roughly 104.7 square kilometres. A suburb called Stirling also lies within it according to our point-in-polygon test; its own figures are left off this council page.

## From picture cards to agent resolvers

Ages are a starting guide; the trial decides.

- **Ages 6 to 10: Words and meanings** Scratch stories about names that mean two things. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)
- **Ages 10 to 14: Python and AI** First code and a clear picture of AI's limits. [Python and AI for Kids](/courses/python-ai-kids-masterclass), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 14 to 18: Agents** Tools, search and checking what an agent returns. [Codex & Claude Code for Teens](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)
- **Adults 18 and over: Agents at work** Generative AI and coding agents for real jobs. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)

## Will smarter models fix this alone?

They help with language, but the tools still decide what comes back.

A strong model may guess that "roads in Stirling" means the council. If its only tool is a keyword search, the guess changes nothing: the tool still returns Stirling Highway counters in Nedlands and Claremont.

Learners who have scored both tools understand that agent quality depends on the tools it is given and on the step that chooses between them. They design that step instead of hoping for it.

In Stirling classes, every agent answer is checked against the data it came from. The longer argument is in [why coding is still worth learning alongside AI agents](/blog/is-coding-worth-learning-2026).

## Stirling classes, live online

Lessons run over video, so learners join from home anywhere between the coast and Mirrabooka.

- **Real-time teaching** A teacher leads and checks code during each lesson.
- **In step with school** Classes keep to WA term dates and rest in the holidays.
- **No-cost trial** One free lesson, then a short course plan.
- **Group or private** Level-matched groups of five to ten, or a private teacher.
- **Two per week** Around eight lessons a month.
- **Indian clock** A 4:30pm Stirling lesson starts at 2pm in India.

**Fixed offset** Western Australia's last daylight saving period ended in March 2009, as the IANA time zone database records, so Perth stays two and a half hours ahead of India.

## Stirling class fees

The same fees for every learner.

- First class: USD 0. There is no charge for the opening lesson, which ends with a plan.
- Group tuition: USD 100 a month. Group lessons: about eight a month in groups of five to ten.
- Private tuition: USD 150 a month. Private lessons: about eight a month with your own teacher.

Fees are in US dollars and begin only after the free lesson has agreed a course and a weekly slot. The pricing page explains holidays and missed lessons.

## Stirling vibe coding and agents questions

### What is the population of the City of Stirling?

The 2021 Census counted 226,369 residents and the ABS estimate for 2025 is 254,821. The median age in 2021 was 38.

### What is a homonym in data?

A name shared by different things, such as Stirling the council, Stirling the suburb and Stirling Highway. Search tools cannot tell them apart without extra information.

### What are precision and recall?

Precision is the share of found items that are correct; recall is the share of correct items that were found. The keyword tool scored zero on both.

### Is Stirling Highway in the City of Stirling?

Not according to Main Roads' count sites: its 15 counters are recorded in councils between Perth and Fremantle, such as Nedlands and Claremont.

### Can children learn about agents?

Younger learners explore how AI reads words through guided activities. Building agents usually starts in the teenage years.

### How many traffic counters are in the City of Stirling?

Main Roads lists 107 traffic count sites on 56 roads in the City of Stirling, plus 7 bike counters.

### Do you have a centre in Stirling?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Stirling classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### How do you form groups?

By level and pace, five to ten learners each, not by age or suburb. One-to-one lessons suit anyone no group time fits.

### Can adults build agents with you?

Yes. Adults learn in adult groups or one to one, often building agents for their own work.

## More to read

Stirling sits inside the wider [Perth classes page](/online-coding-and-python-classes-in-perth-western-australia), which in turn belongs to our [guide to Western Australia](/coding-and-ai-classes-in-western-australia). Parents of primary children may prefer [coding for Perth kids](/coding-classes-for-kids-perth).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-stirling-perth](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-stirling-perth#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
