---
title: "Vibe Coding and AI Agents Classes in Longueuil | In English"
description: "Vibe coding and AI agent classes in English for Longueuil teens and adults: AI tool age rules, Quebec school context, and a French text search on city data."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-longueuil
source: src/pages/vibe-coding-and-ai-agents-classes-in-longueuil.html
---
> Yes. Modern Age Coders teaches vibe coding and AI agents in English, live online, to learners in Longueuil, Quebec. Teens from 13 to 17 take Vibe Coding for Teens; adults take a separate agents course built on Codex and Claude Code, which admits over-18s only. Learn in a class of fifteen to twenty or one to one.

[Home](/) / [Canada](/coding-classes-in-canada) / Longueuil

Longueuil, Quebec / Live online

# Vibe coding and AI agents classes in Longueuil

**Can a Longueuil teen or adult learn vibe coding and AI agents in English?** Yes. Modern Age Coders teaches vibe coding and AI agents in English, live online, to learners in Longueuil, Quebec. Teens from 13 to 17 take Vibe Coding for Teens; adults take a separate agents course built on Codex and Claude Code, which admits over-18s only. Learn in a class of fifteen to twenty or one to one.

Longueuil sits across the St. Lawrence from Montreal, and most of its public data is published in French. That makes it a good place to learn something every vibe coder meets sooner or later: AI-written code that works perfectly on the examples in the prompt and fails on the way people actually type. Vibe coding is asking a model for code in plain words; agents add a loop in which the model picks a tool, calls it and reads the reply before choosing its next move. On this page an AI-style search over the city's list of sports and recreation equipment returns nothing for jeux d'eau and nothing for petanque, although the file lists 19 and 27. The fix takes a few lines. Finding the need for it takes a habit we teach: write the test queries first, the way real users would type them. Classes are in English; the data is in French; the lesson is about text.

Facts last verified 23 October 2026. Teaching is online; no Longueuil branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Four courses for Longueuil, sorted by age first

Age decides which AI tools a learner may use, and so which course they join. The free class decides the level.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects with assistants teens are allowed to use, tested against inputs typed the way real people type them, accents included.
- [Python for Teens](/courses/python-complete-masterclass-teens) (Teens, beginners): Python by hand: strings, lists, loops and functions, so a teen understands what an assistant's code does to text before trusting it.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Adults only, 18+): Coding agents on real repositories for working adults. Anthropic limits Claude Code to users aged 18 and over, so teens are not enrolled.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Ages 18 and up): How large language models, retrieval and agents work from first principles, including why they handle some languages and spellings worse than others.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Where are the jeux d'eau? A search that fails in French, and the fix

Ville de Longueuil publishes its sports and recreation equipment as open data on Données Québec: 644 rows, from play modules to arenas. We wrote the search an assistant typically produces, tested it with queries people actually type, and fixed it. All code and counts are ours, from the file downloaded on 23 October 2026.

**Five test queries, written before the code, against the draft and the folded search (our run on the Ville de Longueuil file, 23 October 2026)**

| Query as a person types it | What the file actually says | Draft finds | Folded search finds |
|---|---|---|---|
| jeux d'eau | Jeux d&rsquo;eau, with a curly apostrophe | 0 | 19 |
| petanque | Terrain sportif - Pétanque | 0 | 27 |
| patinoires et sentier glace | Patinoires et sentier glacé | 0 | 47 |
| aréna - olympia | Aréna, two spaces, then - Olympia | 0 | 1 |
| pataugeoire | Pataugeoire | 21 | 21 |

The draft lowercases both sides and looks for the query inside the type and place columns. That is what a quick prompt usually returns, and it passes the one test most people try, a plain word with no accent. It fails on the other four for three different reasons: a curly apostrophe (U+2019) where the user typed a straight one, an accent the user did not type, and a doubled space in the city's own data.

The fix folds both the query and the data the same way before comparing: apostrophes made straight, accents stripped, case and spacing ignored. Here is the whole exercise:

```
# Searching Longueuil's equipment list in French: a naive draft, then a folded search (our teaching example)
import unicodedata
from openpyxl import load_workbook   # pip install openpyxl

sheet = load_workbook("equipsportsrecreatifs.xlsx", read_only=True).active
rows = list(sheet.iter_rows(values_only=True))
head, data = rows[0], rows[1:]
TYPE = head.index("Type d'équipement")
PLACE = head.index("Localisation de l'équipement")

def fold(text):
    """Curly apostrophe to straight, accents removed, case and spacing ignored."""
    text = unicodedata.normalize("NFKD", (text or "").replace("\u2019", "'"))
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return " ".join(text.lower().split())

def draft_search(query):
    return [r for r in data if query.lower() in (r[TYPE] or "").lower() + " " + (r[PLACE] or "").lower()]

def folded_search(query):
    return [r for r in data if fold(query) in fold(r[TYPE]) + " " + fold(r[PLACE])]

# The test queries: typed the way people really type them, written down before any code.
QUERIES = ["jeux d'eau", "petanque", "patinoires et sentier glace", "aréna - olympia", "pataugeoire"]
for q in QUERIES:
    print(repr(q), "draft", len(draft_search(q)), "folded", len(folded_search(q)))
```

### Write the queries first

The five queries were listed before any code existed, typed the way a Longueuil parent would type them on a phone: no accents, straight apostrophes, single spaces. If the draft had been tested only with pataugeoire, it would have looked correct.

### Count the variants

Our count finds 23 type values with a curly apostrophe and 8 with a straight one, and 27 place names with stray or doubled spaces. Folding is not cosmetic; on this file it decides whether a search works at all.

### Know what folding costs

Folding can merge values. On this file it turns 261 raw place names into 246, and we checked all 14 merged groups: each is one place written two or three ways, such as Complexe Sportif Longueuil and Complexe sportif Longueuil. Elsewhere accents can separate real words, so test before shipping.

### A column that is not what its name says

The column headed Secteur holds a postal code on 637 of the 644 rows. On 6 rows it holds a district name instead (Saint-Hubert four times, Maricourt once and Longueuil once), and one postal code, J4P3K3 on OBJECTID 69, has lost its space. An agent told to group equipment by sector would group by postal code without saying so. Reading the values before trusting the header is the check.

The dataset is Ville de Longueuil's, published on Données Québec under Creative Commons Attribution 4.0 (CC BY 4.0), which the portal's licence page describes as allowing reuse même à des fins commerciales, that is, even for commercial purposes ([dataset](https://www.donneesquebec.ca/recherche/dataset/equipements-sportifs-et-recreatifs), [licence](https://www.donneesquebec.ca/licence/#cc-by)). Source: Ville de Longueuil, Équipements sportifs et récréatifs, CC BY 4.0. The city does not endorse this page or our classes.

## Prompt, test with real input, fold, explain

Text is where AI-written code fails most quietly, because the failure is an empty result rather than an error message. Our routine for any code that handles names, places or search terms has four steps.

**Our routine for AI-assisted text handling (ours)**

| Step | What the learner does | What it caught in Longueuil |
|---|---|---|
| 1. Collect real inputs | Write test strings the way users type them: no accents, mixed case, odd spacing | Four of five queries failed the draft |
| 2. Read the data's spelling | Count which characters actually appear: curly or straight apostrophes, accents, double spaces | U+2019 in 23 type values |
| 3. Normalise both sides | Apply the same folding to query and data, never only one of them | All four failures fixed |
| 4. Explain the trade-off | Say what the folding could merge by mistake, and test for it | 14 merged place groups, all the same place |

For agents the stakes are higher, because an agent that gets an empty search result will often conclude that the thing does not exist, and say so politely. Anthropic's published advice to agent builders is to look for the simplest solution and add complexity only when it is needed; here the simple solution is a better search tool, not a cleverer agent. In our adult course, Longueuil learners fix the tool, then write the test that would have caught the empty answer.

This is the owner's promise on our own terms: we teach learners to think about a problem and solve it, never to copy an answer, AI answers included. A Secondary 4 student and an adult analyst in Longueuil both finish this exercise the same way, by explaining in their own words why the draft returned nothing.

## Which AI coding tools a Longueuil teenager may use

Each AI company publishes its own age floor. Our reading of those pages on 22 October 2026 is summarised below, and it fixes which course a Longueuil learner may enter.

**AI coding tools by age (companies' terms, read 22 October 2026)**

| Tool | Teens, 13 to 17 | Adults, 18 and over |
|---|---|---|
| GitHub Copilot | Yes: GitHub accounts start at 13, and verified students get Copilot free through GitHub Education | Yes |
| ChatGPT and other OpenAI services | Only once a parent agrees: OpenAI asks for that consent from every user under 18 | Yes |
| Claude and Claude Code | No: Anthropic's consumer terms set a minimum age of 18 | Yes, in the adult course |
| Any assistant during the CCC | No: the contest bans generative AI and editor plug-ins | Not relevant |

### For parents in Longueuil

Teens are never steered toward tools their age excludes. Before any lesson that would use an OpenAI product, we ask for a parent's agreement, as the company requires.

### For adults

Adults practise with agents that change files and run commands, always inside a Git project so each change can be inspected and reverted.

### Terms are revised

These rules belong to the companies and can change. We look again before each new course; check the live terms before you open any account.

## Secondary math options, CEGEP and contests for a Longueuil student

Quebec's education system differs from the rest of Canada's in ways that matter for planning. We quote the Quebec government's pages and CEMC, read 22 October 2026; summaries are ours.

### Three math options

In Secondary Cycle Two, Quebec students follow one of three mathematics options, abbreviated CST, TS and S in the English program document, and the ministry states that each of the three still opens the door to a pre-university CEGEP program.

### Then CEGEP

After Secondary 5 comes CEGEP: two full-time years for a pre-university program, three for a technical one, according to the Quebec government, which also notes that universities weigh applicants by their R score.

### Language

Quebec's Charter of the French language makes French the province's official language. We teach in English, which suits learners from either school system who are comfortable following a lesson in English.

**CEMC computing contests open to Longueuil students, 2026 to 2027 (CEMC, read 22 October 2026)**

| Contest | Languages | Date |
|---|---|---|
| Beaver Computing Challenge (no coding background needed) | English only | 9 to 20 November 2026 |
| Canadian Computing Competition, Junior or Senior | English and French | Wednesday 17 February 2027 |

Entry to any CEMC contest is arranged by a school; there is no personal registration. The CCC is offered in French as well as English, which suits Longueuil students in French-language schools; the Beaver Computing Challenge is offered in English only. We prepare students with original problems of our own and point them to CEMC's free archive, and we do not grant credits of any kind. Our [Secondary 4 math options page](/quebec-secondary-4-math-cst-ts-science) and [CEGEP computer science page](/cegep-computer-science-preparation) go further.

## Longueuil time against India time, through the November change

Longueuil keeps Eastern time, as Montreal does. Clocks go back on 1 November 2026 and forward on 14 March 2027; India, where our teachers are, does not change.

**A Saturday 9:30 am class in Longueuil, seen from India (tzdb 2026e offsets; India times are our conversion)**

| Period | Longueuil offset | India time for that class |
|---|---|---|
| Until 1 November 2026 | UTC-4 | 7:00 pm |
| 1 November 2026 to 14 March 2027 | UTC-5 | 8:00 pm |
| From 14 March 2027 | UTC-4 | 7:00 pm |

### Same local time, every season

A Longueuil class stays at the same local time across both changes; our teachers adjust on their side, and we re-send the schedule the week before.

### South Shore numbers

Numbers on the 450, 579 and 354 area codes are accepted in the booking form. Type the ten digits without the 1.

### Weekend mornings fit well

A Saturday morning in Longueuil is a Saturday evening in India, which is why weekend morning groups are easy for us to staff.

## From reading Python to building agents that search well

The age bands are a guide; the free class shows where each Longueuil learner actually starts.

- **Ages 13 and 14: Python first** Strings, lists and functions written by hand, so AI-written text code can be read. [Python for Teens](/courses/python-complete-masterclass-teens), [Git & GitHub Course for Teens](/courses/git-github-version-control-course-for-teens)
- **Ages 14 to 17: Vibe coding, tested** Projects with permitted assistants, checked with real inputs in more than one language. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **Ages 18 and up: How models work** Generative AI, retrieval and full stack building for CEGEP and university students and career changers. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Vibe Coding for College](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course)
- **Working adults: Agents with good tools** Coding agents on real repositories, with tools that are tested before agents use them. Adults only. [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals), [Python Automation Course](/courses/python-ai-automation-masterclass-college)

## Does a Longueuil learner still need to code when AI writes the search?

Yes, because the AI wrote a search that could not find anything a real user typed.

The draft in the Longueuil example was tidy and plausible, and it returned zero for four ordinary questions. No error, no warning. Someone had to know that an apostrophe can be two different characters, that accents matter to a computer even when they do not matter to a reader, and that city data contains stray spaces. That knowledge comes from having handled text yourself.

So we teach code and judgement together. Teens use assistants their age allows and adults use agents, but every learner writes the test inputs, reads the data's real spelling, and explains the final code without help. That is how AI help becomes something you can depend on.

In a bilingual region, text handling is not an edge case; it is most of the job. The longer argument is in [is coding still worth learning in 2026](/blog/is-coding-worth-learning-2026).

## Live online for Longueuil, Saint-Hubert and Greenfield Park

Learners sit at their own computer in their own home; the teacher, live on video, shares the screen with them and asks for the reasoning behind each line, in English.

- **Flexible timing** Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.
- **How many in a class** Fifteen to twenty learners of the same age band and level, or a single learner with a teacher, which adults often choose for their own projects.
- **Two age tracks** Teens and adults learn in separate courses, because the companies' terms allow them different tools.
- **Across the South Shore** Brossard, Boucherville and Montreal learners are placed in these groups too; all of them keep Eastern time like Longueuil.
- **Equipment** Any recent computer with a browser, a headset if possible, and internet that holds a video call. Nothing paid is required for the AI tools in the teen course.
- **First lesson on us** Session one is a genuine lesson that costs nothing. At the end the teacher suggests a level and course, and we never ask for a card number at that point.

**No Longueuil office** We have no centre in Longueuil and do not claim one. Teaching is live and online, in English, from India. We are not connected with Ville de Longueuil, Données Québec, the Quebec ministry or CEMC.

## Fees for Longueuil learners

Three items, each displayed in your own currency by the price anchor.

- First class: Free. A full first lesson at no charge, with a placement at the end.
- Group tuition: CAD 140 a month. The monthly fee for a class of fifteen to twenty, eight live lessons a month.
- Private tuition: CAD 210 a month. The monthly fee for one-to-one lessons at times you choose.

There is no Longueuil surcharge or discount: the fee matches every other Canadian city. Payment starts after the first lesson, when you have chosen a course and a time.

## Vibe coding and AI agents in Longueuil: questions

### Do you teach vibe coding in Longueuil?

Yes, live online with a teacher. Teens aged 13 to 17 take the teen course and adults take separate courses. There is no classroom in Longueuil.

### Are the classes in French or English?

English. The data example uses a French-language city file, and learners handle French text in it, but teaching is in English.

### What is vibe coding?

Asking an AI model to write code from a plain description. We treat that as the first draft; testing it with real inputs and explaining it are what we teach.

### Is Claude Code part of the teen course?

No. Anthropic's consumer terms require users to be at least 18, so Claude and Claude Code are limited to our adult course and never offered to teens.

### Does my teen need ChatGPT?

No. Without a parent's go-ahead, which OpenAI requires below 18, we leave ChatGPT out. GitHub Copilot is the alternative, free for verified students.

### Is there an AI agents course for adults near Montreal?

Yes, online. Adults learn agentic coding with Codex and Claude Code on real Git repositories, reviewing and reverting each agent change; teenagers cannot enrol.

### Why did the search find no jeux d'eau?

The city file writes it with a curly apostrophe, and people type a straight one. The draft compared them as different characters. Folding both sides the same way finds all 19.

### Can Longueuil students write the CCC in French?

Yes. The CCC is available in English and French, according to CEMC. The 2027 sitting is on Wednesday 17 February 2027 through participating schools, and AI help of any kind is banned.

### Do your classes give Quebec credits?

No. We teach alongside school and CEGEP and do not grant credits of any kind; those come from the student's own institution.

### When can Longueuil learners take classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern time, Longueuil's own.

## Other pages for Longueuil and Quebec learners

Read [vibe coding and AI agents classes in Canada](/vibe-coding-and-ai-agents-classes-in-canada) for the whole country; every province is listed on [coding classes in Canada](/coding-classes-in-canada). Quebec students can read about [CEGEP computer science preparation](/cegep-computer-science-preparation); parents may want the [AI tools age guide](/ai-tools-age-guide), and adults [AI agents explained](/ai-agents-explained).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-longueuil](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-longueuil#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
