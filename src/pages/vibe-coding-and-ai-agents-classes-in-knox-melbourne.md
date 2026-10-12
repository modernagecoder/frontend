---
title: "Vibe Coding and AI Agents Classes in Knox, Melbourne"
description: "Live online vibe coding and AI agents classes for Knox learners: building with AI tools, prompt templates and Python, in groups or one to one, first lesson free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-knox-melbourne
source: src/pages/vibe-coding-and-ai-agents-classes-in-knox-melbourne.html
---
> How to give an AI tool exact instructions and check what comes back. Most agents fill prompt templates with data, and our Knox project shows what happens when one field is empty: one method stops, one quietly sends a broken prompt, and one invents the word "None".

[Home](/) / [Australia](/coding-classes-in-australia) / [Victoria](/coding-and-ai-classes-in-victoria) / [Melbourne](/vibe-coding-and-ai-agents-classes-in-melbourne) / Knox

Knox City Council, Melbourne, Victoria / Live online

# Vibe coding and AI agents classes in Knox

**What does an AI agents class teach a Knox learner?** How to give an AI tool exact instructions and check what comes back. Most agents fill prompt templates with data, and our Knox project shows what happens when one field is empty: one method stops, one quietly sends a broken prompt, and one invents the word "None".

Picture an agent that writes a one-line description of each of the 33 government schools Knox has in the 2025 state list. It fills a prompt template with each school's name, type, suburb and closest station. Thirty-two rows have every value. One does not, and how the code reacts to that single gap is the whole lesson.

Facts last verified 10 October 2026. Teaching is online; no Knox branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Vibe coding and agents courses

Every course below pairs AI tools with real code the learner can read. Book the free lesson and we will recommend a level.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Build web and Python projects with AI help, and learn to check the output.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Games and stories with Scratch and friendly AI tools.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (University and adult): Python scripts, templates and AI calls that automate real tasks.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults 18 and over): Working with AI coding agents on real repositories.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Houses, families and a median age of 40

Numbers for Knox (ABS LGA23670), copied from the QuickStats page for the 2021 Census on 10 October 2026.

**Knox in the 2021 Census**

| Statistic | Knox |
|---|---|
| Residents counted | 159,103 |
| Median resident age | 40 |
| Families | 45,145 |
| Private dwellings | 61,956 |
| Average household | 2.7 people |
| Average vehicles per dwelling | 2 |

**Knox shares, with Victoria for scale**

| Proportion | Knox | Victoria |
|---|---|---|
| Separate houses | 83.3% (47,854) | 73.4% |
| Flats or apartments | 2.7% (1,531) | 12.1% |
| Bachelor degree or higher | 28.0% (36,895) | 29.2% |
| Professionals among workers | 23.5% (19,146) | 25.0% |

### Five to nine

Knox had 9,408 residents aged 5 to 9, which is 5.9% of the council.

### Under five

8,428 children, 5.3% of residents, were aged 0 to 4.

### Working from home

25.2% of Knox workers (20,582) worked at home on Census day, which fell during a Melbourne lockdown and is not a normal week.

The bureau rounds its published percentages and makes small random changes to protect privacy. We print values exactly as shown and never create totals by adding rows.

## One missing field, three behaviours

Each sentence comes from one template: "$name is $kind school in $town. In a straight line, the closest metropolitan station is $station, $dist km away." Our lookup gives $kind for primary, secondary and combined schools. The council's one specific-purpose school has no entry, on purpose, so one row is missing a slot.

**What each method did with 33 rows (our test)**

| Method | Rows with a gap | What came out |
|---|---|---|
| Template.substitute | 1 | A KeyError; the run stops and names the missing slot. |
| Template.safe_substitute | 1 | A sentence still containing the literal text $kind. |
| str.format_map with a defaultdict | 1 | A sentence with the word None where the type should be. |

**Closest station to each of the 33 schools, straight-line (our calculation)**

| Station | Schools | Inside Knox? |
|---|---|---|
| Ferntree Gully | 11 | yes |
| Boronia | 8 | yes |
| Bayswater | 5 | yes |
| Heathmont | 4 | no |
| Upper Ferntree Gully | 3 | yes |
| Glen Waverley | 1 | no |
| Yarraman | 1 | no |

### Loud is good

substitute refuses to build a prompt with a hole in it. The run stops on the one bad row, so a person fixes the lookup before any model sees the text.

### Quiet is risky

safe_substitute is meant for partial templates and leaves the placeholder in place. In an agent, that raw $kind goes to the model, which may guess a type and write it confidently.

### Wrong is worse

The defaultdict route fills the gap with None. The sentence reads normally, so nothing flags it, and the error flows into every later step.

### The rule we teach

Required fields fail loudly; optional fields get a deliberate default. Deciding which is which is the design work, and it happens before any prompt is sent.

Distances are straight-line from each school's listed coordinates to the nearest of the 222 metropolitan stations, ranging from 0.6 km to 6.9 km. They are not travel distances. Six schools are closest to a station outside the council, which is why that column matters. The specific-purpose school is counted but not named.

## Writing a template that fails safely

string.Template is part of the standard library and uses $name placeholders, which keeps prompt text easy to read.

**Steps in the Knox exercise**

| Step | Learner task |
|---|---|
| 1 | Build one dictionary of values per school from the state file. |
| 2 | Fill the template with substitute and catch KeyError. |
| 3 | Print the school row that failed and the missing slot. |
| 4 | Decide: fix the lookup, or make that slot optional on purpose. |

One Knox example of a finished sentence: "Scoresby Primary School is a primary school in Scoresby. In a straight line, the closest metropolitan station is Glen Waverley, 6.0 km away." Every value in it comes from a file, not from a model.

### Children

Fill-the-gap stories in Scratch, where a missing word makes the sprite stop and ask.

### Teenagers

Write the template, find the gap, and compare the three behaviours on screen.

### Adults

Add required-field checks to the prompts in a work automation before it runs unattended.

## Knox schools and stations

From the 2025 Victorian school locations list and the department's station entries for FY24-25.

### 33 government schools

Knox has 26 primary, 5 secondary, 1 combined primary and secondary, and 1 specific-purpose government school in the 2025 file.

### Four stations

Boronia (462,850 entries in FY24-25), Bayswater, Ferntree Gully and Upper Ferntree Gully are inside the council boundary.

### Term 1 of 2027

Victorian government school students go back on Thursday 28 January 2027, and Term 1 ends on Thursday 25 March.

**Boundary used** Counts use the ABS outline of Knox City Council, about 113.9 square kilometres. School addresses inside it include Ferntree Gully, Rowville, Bayswater, Wantirna, Boronia and Knoxfield.

## From stories with gaps to agents

Age bands are only a guide; the first lesson shows where to begin.

- **Ages 6 to 9: Blocks first** Scratch projects and simple ideas about how AI tools follow instructions. [Scratch Coding for Kids](/courses/scratch-programming-complete-course), [AI Literacy for Kids (Ages 8 to 14)](/courses/ai-literacy-for-kids-course)
- **Ages 8 to 12: Vibe coding for kids** Making games with AI help while reading the code it suggests. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Ages 13 to 17: Building with AI** Python, web projects and careful use of AI tools. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course)
- **University and adult: Agents and automation** Templates, AI calls and coding agents for real work. [Python Automation Course](/courses/python-ai-automation-masterclass-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## Why do Knox learners need code if agents can write it?

Because an agent is only as reliable as the instructions and data it is given.

Vibe coding means describing what you want and letting an AI tool draft the code. It is fast, and it works well when the person describing the job can read the result and spot a placeholder that never got filled.

The Knox exercise is small on purpose. One empty field among 33 rows is easy to miss, and an agent repeating that mistake across thousands of rows is how real systems publish nonsense. Learners who have seen it once write the check without being asked.

In our Knox classes, learners direct the AI and verify its work. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## How Knox learners join

All lessons run live on video, for learners in Rowville, Wantirna or anywhere else in Knox.

- **Code on screen** Learners share their screen and the teacher works through their own project with them.
- **School-term calendar** Classes follow the Victorian term pattern and rest in the school holidays.
- **Trial lesson free** One complete lesson free of charge, then a course recommendation.
- **Five to ten per group** Groups match level and goals, and bring together learners from many places.
- **Two sessions a week** Lessons happen twice weekly, about eight in a month.
- **Teachers in India** A 5:30pm Knox class is noon India time during Melbourne daylight saving and 1pm once it finishes.

**Melbourne clocks** Daylight saving runs in Melbourne from Sunday 4 October 2026 to Sunday 4 April 2027. India does not use it, so every time we send is in Melbourne time.

## Knox class fees

Plain fees that apply to every family.

- First class: USD 0. The first lesson is on us, and it ends with a clear plan.
- Group tuition: USD 100 a month. Groups: a month of about eight lessons, five to ten learners per group.
- Private tuition: USD 150 a month. One to one: a month of about eight lessons, alone with a teacher.

Knox families are charged in US dollars. Payment starts only after the trial has set a course and a time; holiday and missed-lesson rules are on the pricing page.

## Knox vibe coding and AI agents questions

### How many people live in Knox?

Knox City Council counted 159,103 residents in the 2021 Census, with a median age of 40.

### What is vibe coding?

Vibe coding is building software by describing what you want to an AI tool, which drafts the code. The learner still reads, tests and fixes that code.

### What is an AI agent?

An AI agent is a program that uses a language model to take steps towards a goal, such as filling templates, calling tools and checking results.

### What is the difference between substitute and safe_substitute?

In Python's string.Template, substitute raises a KeyError when a placeholder has no value. safe_substitute leaves the placeholder text in place instead.

### Are AI agents classes suitable for children?

Younger children learn the ideas through Scratch and kid-safe tools. Building agents with real AI services suits teenagers and adults.

### Can adults learn to use AI coding agents?

Yes. Our coding agents course is for adults aged 18 and over, in groups or one to one.

### Do you have a centre in Knox?

No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.

### What do Knox classes cost?

The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of five to ten, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.

### Who is in each group?

Five to ten learners at a similar level and pace, not sorted by age or suburb. One-to-one lessons suit anyone no group time fits.

### How many government schools does Knox have?

The 2025 Victorian school locations file lists 33 government schools in Knox City Council.

## More for Knox learners

Visit the [Melbourne page](/vibe-coding-and-ai-agents-classes-in-melbourne) for the city, the [Victoria guide](/coding-and-ai-classes-in-victoria) for the state, and [coding for kids in Melbourne](/coding-classes-for-kids-melbourne) for young starters.

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-knox-melbourne](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-knox-melbourne#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
