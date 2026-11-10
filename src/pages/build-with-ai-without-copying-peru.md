---
title: "Build with AI Without Copying: Live Classes for Peru"
description: "How teenagers and adults in Peru can build software with AI assistants and still understand every line: live online classes in English, group or one to one."
canonical: https://learn.modernagecoders.com/build-with-ai-without-copying-peru
source: src/pages/build-with-ai-without-copying-peru.html
---
> Building with AI without copying means you let an assistant draft code but accept nothing you cannot read, predict, test and explain yourself. Modern Age Coders teaches this live and online, in English, to teenagers from 13, with a parent's permission where a tool requires it, and for university students and adults in Peru. Mentors in India teach a fixed review routine, starting from the AI makers' own warning that output can be wrong. You choose a group of fifteen to twenty or one-to-one lessons, at flexible hours.

[Home](/) / [Courses](/courses) / [Peru](/coding-and-ai-classes-in-peru) / Build with AI without copying

Peru · AI as a collaborator · Ages 13 to adult

# Build with AI without copying: live classes for Peru

An AI assistant can write a working function faster than any student. It can also write one that works on the example you gave it and breaks on the next. The companies that make these tools say so in their own documents. This page shows what they say, which tools a teenager in Peru may use, and the routine we teach so that what you build is still yours.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; Who: Teenagers of 13 to 17, university students and adults in Peru; Tools: Chosen by age, following each maker's own terms; Method: Write or plan first, generate second, review always; Format: A group of fifteen to twenty, or one to one; Hours: Any day, any hour in Peru time; First class: Free, without a card. Rated 4.9 across 547 Google reviews.

## Three courses where AI is a reviewed collaborator

One for teenagers, one for university students and one for working adults. In all three the learner plans and tests; the assistant drafts.

- [Vibe coding for teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course): For 13 to 17 year olds. Web and Python builds where the tests exist before a single line is generated.
- [Vibe coding for university students](/courses/vibe-coding-for-college-fullstack-ai-dsa-career-course): From 18. Full-stack builds and data structures, so generated code is judged by someone who knows what good looks like.
- [Coding agents for professionals](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals): Adults only. Agents that edit whole projects, supervised with version control, tests and code review.

## What do AI companies say about checking AI-generated code?

They say check all of it. Each major assistant's own documentation or terms tells users that output can be wrong while looking right, and that reviewing it is the user's job. These are not critics speaking; they are the makers.

**What three AI makers tell their own users about output, quoted from their documents**

| Maker and document | What it says | What that means for a learner |
|---|---|---|
| GitHub, application card for Copilot inline suggestions | "You should always review Copilot's suggestions before accepting them" | Accepting a suggestion is a decision you make, so you need to be able to make it |
| GitHub, same document | "Hallucinations are a known risk of large language models and are a key reason that human review of AI-generated output is important." | Code can call functions that do not exist or misuse ones that do |
| Anthropic, Consumer Terms of Service (effective 8 October 2025) | "Outputs may not always be accurate and may contain material inaccuracies even if they appear accurate because of their level of detail or specificity." | A detailed, confident answer is not evidence that it is right |
| Anthropic, same terms | "You should not rely on any Outputs or Actions without independently confirming their accuracy." | Confirming means a test or a check that does not come from the same tool |
| Google, Gemini Apps Privacy Hub (updated 26 October 2026) | "Gemini can make mistakes." and LLM experiences "can hallucinate and present inaccurate information as factual." | The same caution applies whichever assistant you use |

Sources: GitHub Docs, "Application card: GitHub Copilot inline suggestions"; Anthropic, Consumer Terms of Service; Google, Gemini Apps Privacy Hub. All read in English on 9 November 2026. OpenAI's site refused our request that day, so ChatGPT appears below only through its age rule, quoted from the vendor page in our July 2026 audit.

### Why a learner should take this seriously

A professional who reviews AI code is comparing it with years of their own. A learner has nothing to compare it with yet, which makes copying more tempting and more risky at the same time. The answer is not to avoid the tools. It is to build the judgement first, then use the tools where that judgement can catch their mistakes.

In practice that means a learner should be able to write a small version of the thing on their own before asking an assistant for the big version.

### What "independently confirming" looks like

Anthropic's phrase is the useful one. Confirming independently means a check that does not depend on the tool's own explanation: running the code on inputs you chose, tracing it by hand, reading the official documentation for a function, or comparing with a version you wrote.

Asking the same assistant "are you sure?" is not independent. Its second answer comes from the same place as its first.

## Which AI coding tools can a teenager in Peru use?

It depends on the tool, and the rule is in each maker's own terms, not in a school policy. Some allow 13-year-olds with a parent's permission; some require users to be adults. We follow the strictest reading in class.

### What the terms say

Anthropic's consumer terms say: "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." So Claude is an adults-only tool in our classes.

OpenAI's terms, as quoted in our audit of July 2026, say that users under 18 "must have your parent or legal guardian's permission". Microsoft says users must be at least 13 to use Copilot. Google's Gemini help says a Family Link account cannot use the Gemini web app, so a supervised child account cannot use it there.

### What we do with that

Under 13: no chatbots in class. Children learn how AI works through projects that do not need an account, such as training a tiny model on their own examples.

From 13 to 17: tools whose terms allow the age, with the parent's permission where the terms ask for it, and only after the learner has written their own first version. From 18: every tool the course needs, including coding agents. The full list, tool by tool, is on our [AI tools age guide](/ai-tools-age-guide).

Tool terms change. We re-read them before a course uses a tool, and a parent can ask the mentor at any time which tools their teenager is using and under whose account. For the AI side of the curriculum for secundaria, our Spanish page on [IA para adolescentes](/curso-de-ia-para-adolescentes-peru) explains what we teach about how models work.

## How can AI code pass a test and still be wrong?

By being tested on the one case it happens to handle. The lesson below is ours. The first function is the kind of short, tidy answer an assistant often gives to "remove the blank names from a list"; we wrote it ourselves to make the point, and we never show students a real tool's output as if it were a fixed fact.

**Version 1: the tidy answer** (Python)
```python
# A plausible answer to: "remove the blank names from a list"
def drop_blanks(names):
    for name in names:
        if name == '':
            names.remove(name)
    return names

print(drop_blanks(['Ana', '', 'Luis', '', 'Rosa']))
print(drop_blanks(['Ana', '', '', 'Luis', 'Rosa']))
print(drop_blanks(['', '', '', 'Rosa']))
```
It reads well: loop over the names, remove each blank one, return the list. Before running it, the mentor asks the learner to predict all three printed lines.

**What Version 1 prints** (Output)
```output
['Ana', 'Luis', 'Rosa']
['Ana', '', 'Luis', 'Rosa']
['', 'Rosa']
```
Copied verbatim after we ran it under Python 3. The first test passes. The second leaves a blank behind. The third leaves two. A learner who tried only the first list would have shipped it.

The pattern in the failures is the clue: the function fails when two blanks sit next to each other. Rather than ask the assistant to "fix it", the learner makes the function show its work, printing what the loop sees at each step and what the list looks like at that moment.

**Version 2: make the loop show what it sees** (Python)
```python
def drop_blanks_traced(names):
    for i, name in enumerate(names):
        print('step', i, 'sees', repr(name), 'list is now', names)
        if name == '':
            names.remove(name)
    return names

print(drop_blanks_traced(['Ana', '', '', 'Luis', 'Rosa']))
```
enumerate gives the step number alongside each name, and repr prints an empty string as two quote marks, so it is visible.

**What Version 2 prints** (Output)
```output
step 0 sees 'Ana' list is now ['Ana', '', '', 'Luis', 'Rosa']
step 1 sees '' list is now ['Ana', '', '', 'Luis', 'Rosa']
step 2 sees 'Luis' list is now ['Ana', '', 'Luis', 'Rosa']
step 3 sees 'Rosa' list is now ['Ana', '', 'Luis', 'Rosa']
['Ana', '', 'Luis', 'Rosa']
```
Exact output from our own run. At step 1 the loop sees the first blank and removes it. Every later name slides one place to the left, so the second blank moves into position 1, which the loop has already visited. At step 2 it sees Luis. The second blank is never looked at.

1. **Name the cause in one sentence.** "Removing an item shifts the rest left, but the loop still moves forward one place, so it skips whatever slid into the gap." If the learner can say that, they understand it.
2. **Check the official source.** The Python tutorial warns about this exact pattern: "Code that modifies a collection while iterating over that same collection can be tricky to get right." It suggests looping over a copy or building a new collection instead.
3. **Prefer a new list.** Building a fresh list leaves the original alone, which also avoids a second, quieter problem: Version 1 changes the list the caller passed in.
4. **Write the tests before the fix.** Adjacent blanks, blanks at the start, a list of only blanks and an empty list, plus a check that the input is untouched.

**Version 3: build a new list, then test hard** (Python)
```python
def drop_blanks(names):
    return [name for name in names if name != '']

tests = [
    ['Ana', '', 'Luis', '', 'Rosa'],
    ['Ana', '', '', 'Luis', 'Rosa'],
    ['', '', '', 'Rosa'],
    ['', ''],
    [],
]
for t in tests:
    original = list(t)
    result = drop_blanks(t)
    print(result, '| no blanks left:', '' not in result, '| input untouched:', t == original)
```
The comprehension reads as one English sentence: keep each name that is not blank. list(t) takes a copy before the call, so the last check can prove the input was not modified.

**What Version 3 prints** (Output)
```output
['Ana', 'Luis', 'Rosa'] | no blanks left: True | input untouched: True
['Ana', 'Luis', 'Rosa'] | no blanks left: True | input untouched: True
['Rosa'] | no blanks left: True | input untouched: True
[] | no blanks left: True | input untouched: True
[] | no blanks left: True | input untouched: True
```
Exact output from our own run: five cases, no blanks left in any result, and every input list exactly as it was before the call.

Could an assistant have produced Version 3 first time? Often, yes. The point of the lesson is that the learner can now tell Version 1 from Version 3 without running them, and knows which four tests to write next time. That is the difference between building with AI and copying from it.

## How do you review AI-generated code before using it?

With the same five steps every time, in the same order. The routine is ours and it is deliberately boring: a habit only works if it does not depend on how confident you feel about a particular answer.

1. **State the job and the tests first.** Before prompting, write in plain English what the code must do and three to five cases with their expected results, including at least one awkward one.
2. **Read it aloud, line by line.** For each line, say what it does. Mark any line you cannot explain; marked lines are not accepted until you can.
3. **Predict, then run your tests.** Say what each test will print before running. A wrong prediction on a passing test still means you do not understand something.
4. **Shrink it.** If the answer is longer than the problem deserves, rewrite the part you understand in fewer lines, or ask for a smaller version. Long code hides bugs from beginners.
5. **Explain the change you would make.** Pick one new requirement, such as "also remove names that are only spaces", and describe where it goes. If you cannot, you are not ready to own this code.

### For a teenager

Steps 1 to 3 every time, step 4 when the answer is longer than a screen. The mentor asks for step 5 aloud at the end of each project.

### For a university student

All five steps, plus version control: every accepted change is its own commit with a message that says why, so a bad suggestion can be undone.

### For a professional

All five, plus a check against the project's own rules on data and security. Agents that edit many files get their changes reviewed as if a new colleague had written them.

For the wider picture, including what vibe coding is and where it differs from this routine, our Spanish guide [vibe coding en inglés](/vibe-coding-curso-en-ingles) is the place to start. Parents of younger children who would rather wait on AI tools can see what we teach before any assistant appears on our Spanish page about [clases de programación para adolescentes](/clases-de-programacion-para-adolescentes-peru).

## How is AI being used in Peruvian schools and competitions?

Cautiously and in specific places. Peruvian institutions have begun using AI for planning and running AI projects, while the computing olympiad keeps it out of the contest room entirely.

### Planning in rural secondary schools

MINEDU announced in December 2025 that from the following year it would use AI for learning planning in 205 rural secondary schools serving about 27,000 students. The tool supports teachers; it does not do the students' work.

### Student projects

MINEDU's Hackathon 2025, its fourth edition, rewarded teams of students and teachers for projects in AI and robotics, and reported that participation by girls grew 28% between 2023 and 2025.

### The contest room

UTEC's rules for the 2025 Peruvian Computing Olympiad ban generative AI for solving problems. A teenager who aims at the OPI needs to code alone, which is one more reason to build skill before leaning on tools.

We are not connected with MINEDU, UTEC or any school, and our classes do not count towards Peruvian grades. They run beside school and work, and a learner who finishes a course receives our own certificate of completion.

## Are the classes taught in Spanish?

No. Lessons are live, online and given only in English. The mentors, who work from India, keep their speech clear and unhurried and follow the pace and accent of the person in front of them. For AI work, English carries a practical advantage.

### Prompts, errors and documentation

Most of the documentation an AI assistant was trained on, and most of the error messages it will explain, are in English. A learner who can write a precise prompt in English, and read the documentation that confirms or contradicts the answer, can check the tool against its sources.

In class, learners write their task statements and test descriptions in English, which doubles as practice in saying exactly what they mean.

### If your English is still growing

That is normal and fine. Mentors slow down, repeat in simpler words and type key phrases into the chat. Many adults in Peru read English far better than they speak it, and the classes give daily speaking practice in a low-pressure setting.

You may write to us on WhatsApp in Spanish whenever you like; the lessons themselves stay in English.

For Lima learners at bilingual or international schools, our page on [English-medium coding classes in Lima](/english-medium-coding-classes-lima) describes how classes fit beside an English-language timetable.

## When can I take a live class from Peru?

Whenever suits you. Mentors work from India, and the gap between the two clocks never changes, because neither country moves its clocks during the year.

**Peru time beside India time (conversions only; you choose the hour)**

| Peru time | India time | Day in India |
|---|---|---|
| 6:30 a.m. | 5:00 p.m. | Same day |
| 8:30 a.m. | 7:00 p.m. | Same day |
| 11:30 a.m. | 10:00 p.m. | Same day |
| 2:30 p.m. | 1:00 a.m. | Next day |
| 6:30 p.m. | 5:00 a.m. | Next day |
| 9:00 p.m. | 7:30 a.m. | Next day |

Peru is on UTC minus 5 throughout the year and does not use daylight saving (tz database, America/Lima). India is on UTC plus 5:30, also without daylight saving, so India is always 10 hours 30 minutes ahead of Peru.

Working adults in Lima often take an early morning class before the office; university students tend to pick late evenings. Either way, you book in Peru time and the conversion is our job.

## How does judgement with AI tools grow?

Five levels of our own. Most learners start at 1 or 2, whatever their age; what moves them up is practice with the review routine, not more prompting.

**Five levels of judgement when coding with an AI assistant (ours)**

| Level | Typical behaviour | Next step |
|---|---|---|
| 1. Paste and hope | Copies output, runs it once, moves on if no error appears | Write the expected result before running |
| 2. Test the example | Checks the case given in the prompt only | Add an awkward case: empty, repeated, reversed |
| 3. Read every line | Can explain each line and marks the ones they cannot | Trace the marked lines by hand |
| 4. Catch and fix | Finds a hidden failure and repairs it without asking the tool | Write the tests before generating anything |
| 5. Direct the tool | Specifies the job and tests, judges drafts, rejects weak ones | Review a classmate's AI-assisted code |

### For parents

Ask your teenager which level they are on this week and what moved them. A learner at level 3 or above can tell you about a time the AI was wrong.
If the honest answer is level 1, that is where most beginners start. The routine is designed to move them.

### For learners

Keep a short log of every time an assistant gave you something wrong and how you caught it. It becomes a list of your own blind spots.
The fastest route to level 5 is writing the tests before the prompt.

## Nine more courses for building with AI

All live, in English, with one mentor, and all using AI tools within each maker's age rules.

### Teenagers

Ages 13 to 17

- [Python for teens](/courses/python-complete-masterclass-teens): The foundation that lets a teenager judge generated Python.
- [AI and machine learning for teens](/courses/ai-ml-masterclass-teens): How models learn, so their mistakes make sense.
- [Git and GitHub for teens](/courses/git-github-version-control-course-for-teens): Version control, so every AI change can be inspected and undone.

### University students

18 and over

- [Python and AI automation](/courses/python-ai-automation-masterclass-college): Scripts and workflows that call models, with error handling.
- [Generative AI](/courses/complete-generative-ai-masterclass-college): What large language models are doing when they write code.
- [Data structures and algorithms](/courses/data-structures-algorithms-masterclass-college): The knowledge that spots an inefficient suggestion.

### Professionals

Adults at work

- [Agents with Copilot Studio](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals): Business agents built and reviewed one to one.
- [Agents with Gemini Enterprise](/courses/build-ai-agents-with-google-gemini-enterprise-course): Enterprise agents with testing and governance.
- [Advanced Git for professionals](/courses/git-github-advanced-version-control-masterclass-for-professionals): Branches, reviews and history for teams using AI.

## What happens in a live class with AI tools?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.

- **Early mornings** Popular with working adults in Lima.
- **Evenings** After school or lectures, in Peru time.
- **Set by you** One-to-one lessons whenever you book them.

- **Plan on paper** Each task begins with a written goal and test cases.
- **Draft with a tool** Only tools the learner's age allows.
- **Review aloud** Line-by-line explanation to the mentor.
- **Break it on purpose** Awkward inputs before anything is kept.
- **Commit with a reason** Every accepted change explained in a sentence.
- **Group or solo** Fifteen to twenty learners of a similar level, or one to one.

## Fees for learners in Peru

Plans are priced monthly in US dollars and charged to a debit or credit card. Your bank does the conversion to soles at its own rate, which is why the amount you see on your statement may differ by a little each month.

- Free first class: Free. A free first class with a mentor. A short task done with and without an assistant. No card needed.
- Group batch: USD 100 a month. Fifteen to twenty learners of a similar level. One mentor throughout. Two live classes a week. Monthly, cancel at the end of any month.
- One to one: USD 150 a month. You and a mentor only. Your own project and tools. Days and times you pick.

## Building with AI without copying: questions and answers

### Are the classes in Spanish?

No. Every class is live, online and taught only in English. Mentors based in India keep their English plain and steady and adapt to how quickly you follow. You can write to us in Spanish on WhatsApp, but lessons stay in English.

### Is using AI to code cheating?

Not in itself. It becomes copying when you accept code you cannot explain or test. In a contest that bans AI, such as the OPI, or in homework where the teacher forbids it, using it anyway is cheating, and we teach learners to follow those rules.

### What age can my child start using AI coding tools?

In our classes, from 13, with tools whose own terms allow it and a parent's permission where the terms ask for it. Claude requires users to be 18, so only adults use it. Children under 13 learn how AI works without chatbot accounts.

### Do I need to know how to code before using AI?

You need enough to read and test what the tool writes. Complete beginners spend their first weeks writing small programs alone, then bring in an assistant once they can check its work.

### Which tools do you use?

It depends on the course and the learner's age: coding assistants in an editor, chat assistants for explanations, and for adults, coding agents that edit whole projects. Tool terms are re-read before a course uses them.

### What time are the classes?

Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 8:30 a.m. in Lima is 7:00 p.m. in India.

### Can a professional with a full-time job join?

Yes. Many adults take one-to-one classes early in the morning or late in the evening, Peru time, and bring a real problem from work to build during the course.

### Will I get a certificate?

You receive our own certificate of completion when you finish a course. It is not a university credit or an official Peruvian qualification, and we are not connected with MINEDU or any university.

### What if the AI gives a different answer each time?

That is normal for these tools and one more reason the tests come first. If two different answers both pass your tests, your tests are probably too easy, and the mentor will help you write a harder one.

### How do I pay?

By card, monthly, in US dollars; your bank converts the charge into soles. The first class is free and needs no card.

## More on AI and code

- [Learn to code with AI](/learn-to-code-with-ai): A wider guide to assistants for beginners.
- [A parent's guide to vibe coding](/parents-guide-to-vibe-coding): What teenagers are doing with these tools, explained for parents.
- [How large language models work](/how-large-language-models-work): Why a model can sound sure and still be wrong.
- [AI tools age guide](/ai-tools-age-guide): The age rule for each tool, from its own terms.
- [How to debug code](/how-to-debug-code): Finding the cause, as in the lesson above.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): All our courses for Peru in one place.

## More pages for Peru

Part of the guide: [Every Peru page](/coding-and-ai-classes-in-peru)

### Guides to choosing

- [An English-taught option to Crack The Code](/crack-the-code-alternative-in-english)
- [Best AI course](/best-ai-course-in-peru)
- [Best coding classes](/best-coding-classes-in-peru)
- [Best online maths tutor](/best-online-maths-tutor-in-peru)
- [Best Python course](/best-python-course-in-peru)
- [Bootcamp or live classes](/coding-bootcamp-alternative-peru)
- [Class times in Peru time](/live-coding-classes-peru-time)
- [Cost of coding classes](/cost-of-coding-classes-in-peru)
- [Cost of maths tutoring](/cost-of-maths-tutoring-in-peru)
- [International-school families in Lima](/international-school-families-lima-coding)
- [Kodland vs Codingal, for Peru](/kodland-vs-codingal-peru)
- [Learn coding and English together](/learn-coding-and-english-together-peru)
- [Learn to think, not copy](/learn-to-think-not-copy-coding-peru)
- [Platzi alternative with live classes](/platzi-alternative-live-classes)
- [Remote tech job skills](/remote-tech-job-skills-peru)
- [Robotics or coding for kids?](/robotics-vs-coding-for-kids-peru)
- [University admission exams explained](/peru-university-admission-exams-explained)

### Guides to choosing (in Spanish)

- [¿Robótica o programación para niños?](/robotica-o-programacion-para-ninos)
- [Alternativa en inglés a Crack The Code](/alternativa-a-crack-the-code-en-ingles)
- [Aprender a pensar, no a copiar](/aprender-a-pensar-no-copiar-programacion)
- [Colegio bilingüe: refuerzo de programación](/colegio-bilingue-refuerzo-programacion)
- [Cómo elegir clases de programación para niños](/mejores-clases-de-programacion-para-ninos-peru)
- [Cómo elegir un curso de inteligencia artificial](/mejor-curso-de-inteligencia-artificial-peru)
- [Cómo elegir un curso de Python](/mejor-curso-de-python-peru)
- [Cuánto cuestan las clases de programación para niños](/cuanto-cuestan-clases-de-programacion-para-ninos-peru)
- [IA para niños de primaria](/inteligencia-artificial-para-ninos-de-primaria)
- [Inglés y programación para niños](/clases-de-ingles-y-programacion-ninos)
- [Kodland: opiniones y alternativa](/kodland-opiniones-alternativa)
- [Precio de un profesor particular de matemáticas](/precio-profesor-particular-matematicas-peru)
- [Programar con IA sin copiar](/programar-con-ia-sin-copiar)

More guides: [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru), [En español: clases de programación en inglés](/clases-de-programacion-en-ingles-peru), [Start here: English-medium coding in Lima](/english-medium-coding-classes-lima), [By age and stage: AI and coding for professionals](/ai-and-coding-for-professionals-peru), [Subjects and courses: AI agents course](/ai-agents-course-peru), [Exams, olympiads and school holidays: IB computer science tutor](/ib-computer-science-tutor-peru), [Regions of Peru: Amazonas region](/online-coding-and-ai-classes-amazonas-region-peru), [Cities: Arequipa: coding for every age](/coding-classes-in-arequipa-peru), [Lima and Callao districts: Programación para niños en Ancón](/clases-de-programacion-para-ninos-ancon-lima)

## Contact

Book the free first class at [https://learn.modernagecoders.com/build-with-ai-without-copying-peru](https://learn.modernagecoders.com/build-with-ai-without-copying-peru#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
