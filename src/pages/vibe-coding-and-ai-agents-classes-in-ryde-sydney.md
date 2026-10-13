---
title: "Vibe Coding and AI Agents Classes in Ryde, Sydney"
description: "Live online vibe coding, AI agents and Python classes for Ryde teenagers and adults, with real teachers, in small groups or one to one. The first lesson is free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-ryde-sydney
source: src/pages/vibe-coding-and-ai-agents-classes-in-ryde-sydney.html
---
> In live online lessons where a teacher shows Ryde teenagers and adults how to have an AI write code, check what it wrote, and build agents that look things up before they answer. The 2021 Census counted 129,123 people in the City of Ryde council area, 46.4% of those aged 15 and over with a bachelor degree or higher. Teaching is private or in a level-matched small group, and the opening lesson is free.

[Home](/) / [Australia](/coding-classes-in-australia) / [New South Wales](/coding-and-ai-classes-in-new-south-wales) / [Sydney](/best-coding-classes-in-sydney) / Ryde

City of Ryde, Sydney, New South Wales / Live online

# Vibe coding and AI agents classes in Ryde

**Where do Ryde learners find the best vibe coding and AI agents classes?** In live online lessons where a teacher shows Ryde teenagers and adults how to have an AI write code, check what it wrote, and build agents that look things up before they answer. The 2021 Census counted 129,123 people in the City of Ryde council area, 46.4% of those aged 15 and over with a bachelor degree or higher. Teaching is private or in a level-matched small group, and the opening lesson is free.

Many AI agents answer questions by first fetching a piece of text and then reading only that piece. Which piece they can fetch depends on how the document was cut up beforehand, a step called chunking. We wrote one plain sentence for each of the 19 government schools in the City of Ryde, from the state's open schools file, and asked an agent when each school first had a teacher. Cut the text into 60-character chunks and the agent never sees a complete answer: 0 out of 19. Cut it at sentence boundaries and it gets 16 right. The three it still misses are instructive, because each one is a school whose name is also the name of a suburb.

Facts last verified 10 October 2026. Teaching is online; no Ryde branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 15 to 20 students per group.

## Courses for agents that read before they answer

Every course here connects to the retrieval project. A free trial settles which fits, and no card details are asked for.

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Prompt an AI to build Python and web projects, then read and test every line it writes.
- [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course) (Ages 13 to 18): How everyday AI tools work, where they get things wrong, and how to fact-check what they say.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (University and adult): Generative AI in depth, including retrieval, embeddings and evaluation of answers.
- [Copilot Studio Agent Masterclass for Professionals](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals) (Professionals, one to one): Workplace agents in Copilot Studio that search company documents, taught privately.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## A council area of apartments, graduates and young adults

QuickStats for the City of Ryde local government area from the 2021 Census, against New South Wales and Australia.

**City of Ryde, 2021 Census headline counts**

| Headline | Ryde |
|---|---|
| Residents | 129,123 |
| Families | 34,985 |
| Private dwellings | 55,669 |
| People per household | 2.5 |

**Ryde measured against NSW and Australia**

| Measure | Ryde | NSW | Australia |
|---|---|---|---|
| Median age | 37 | 39 | 38 |
| Flats or apartments among occupied homes | 44.6% (21,854) | 21.7% | 14.2% |
| Bachelor degree or higher, aged 15 and over | 46.4% (50,196) | 27.8% | 26.3% |
| Professionals among employed residents | 37.1% (24,337) | 25.8% | 24.0% |

### Apartments and houses

Flats and apartments made up 44.6% of occupied homes and separate houses 40.8%; across NSW separate houses made up 65.6%.

### Young adults

The Census counted 8,607 residents aged 20 to 24, 6.7% of the population, against 6,283 aged 10 to 14.

### Small households

At 2.5 people per household on average, Ryde households are smaller than the state pattern.

Privacy protection means the bureau slightly randomises every table cell, so columns may not sum exactly to their totals. We therefore quote the bureau's published numbers directly and never derive totals by addition.

## Chunk the text badly and the agent never sees the answer

We turned the NSW Department of Education's records for the 19 Ryde government schools into 19 short sentences, 2,284 characters in all, then let a simple retrieval agent fetch one chunk per question.

**Questions where the retrieved chunk held both the school name and its date, out of 19 (our calculation)**

| How the text was chunked | No overlap | With 25% overlap |
|---|---|---|
| 60 characters | 0 | 0 |
| 120 characters | 1 | 0 |
| 200 characters | 8 | 4 |
| 400 characters | 10 | 11 |
| 800 characters | 14 | 13 |
| The whole text as one chunk | 19 | 19 |

**Chunking by whole sentences instead (our calculation)**

| Sentences per chunk | Questions answered |
|---|---|
| 1 | 16 of 19 |
| 2 | 13 of 19 |
| 3 | 14 of 19 |
| 5 | 14 of 19 |

### Too small

A 60-character chunk cuts a school's name away from its date, so no single chunk ever contains a complete answer, whatever the agent does next.

### Too big

One giant chunk always contains the answer, but it hands the agent the entire document every time, which defeats the point of retrieval on anything longer than a page.

### Cut where meaning ends

Splitting at sentence boundaries keeps each record whole and answers 16 of 19, more than any fixed size short of the whole text.

### The three it still misses

None of the wrong schools scored higher. Asked about Eastwood Public School, three sentences tie, because Denistone East and Eastwood Heights Public Schools also have Eastwood addresses, and the agent takes the first one in the text. Asked about West Ryde Public School, Ermington Public School, whose address is in West Ryde, ties with the right sentence and comes earlier. For Ryde Public School, every sentence containing Ryde ties, and Ermington is again first. Reading the top three sentences instead of one answers 18 of 19; Ryde Public School still misses because too many sentences share its words.

The sentences, questions, chunk counts and retrieval scores are our own, built from the department's published fields; the agent is a simple keyword matcher written for teaching, not a commercial product. Overlap did not help reliably here because sliding windows still split records at awkward places.

## Questions to ask of any agent that searches documents

Retrieval sits behind many AI assistants that answer from company files, manuals or websites. The Ryde example shows where they go wrong.

**Retrieval checks a learner can apply anywhere**

| Check | Failure it prevents | What to try |
|---|---|---|
| Does a chunk hold a whole fact? | Answers split across two chunks | Cut at sentences, rows or headings |
| How many chunks does the agent read? | The right chunk tied for first but not picked | Retrieve the top three, not one |
| Do names clash with other words? | Eastwood the suburb beating Eastwood the school | Match whole names or use embeddings |
| Is retrieval tested? | Silent failures nobody measures | A list of questions with known answers, like our 19 |

The last check matters most. Our 19 questions with known answers turned vague impressions into a number that could be compared, which is exactly how professional teams evaluate retrieval systems before trusting them with real users.

### Teenagers

Build the chunker and keyword retriever in Python, then improve the score from 16 towards 19 and explain each fix.

### University students

Replace keyword matching with embeddings, compare scores on the same 19 questions, and study where each method fails.

### Adults

Design document search for workplace agents, including chunking rules and an evaluation set before launch.

The NSW Department of Education, City of Ryde, Transport for NSW and the statistics bureau provide the open data used here and have no link with Modern Age Coders. The sentences, chunks and scores come from our own code.

## A school from 1868 and a university station

More facts from the same files and the NSW calendar.

### The earliest schools

Ryde Public School records its first teacher in 1868, North Ryde Public School in 1878 and Gladesville Public School in 1879, the three earliest dates in the council area.

### Two kinds of station

In August 2026 Transport for NSW counted 482,099 entries at Macquarie University metro station and 113,714 at West Ryde train station.

### Term 1, 2027

For Eastern division schools, Term 1 of 2027 runs from Wednesday 3 February until Friday 9 April.

**Addresses in the file** The schools file gives each school a street address. Among the 19 Ryde schools the address suburbs include East Ryde, Eastwood, Gladesville, Marsfield, Meadowbank, North Ryde, Ryde and West Ryde, which is also why so many names in our questions collide.

## From asking an AI for a game to building agents that cite their sources

Use the ages as a guide only; the free trial fixes the level.

- **Ages 8 to 12: Vibe coding for kids** Scratch games planned by the child and built with AI help, then tested. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)
- **Ages 13 to 15: Reading AI code** Python projects written with an AI, then read, debugged and extended. [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course), [Python for Teens](/courses/python-complete-masterclass-teens)
- **Ages 15 to 18: Agents and retrieval** Agents that search text, measured on questions with known answers. [AI Tools Course for Teens (13+)](/courses/teens-ai-tools-mastery-course), [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)
- **University and adult: Agents for work** Retrieval-based assistants and workplace agents, designed and evaluated properly. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Copilot Studio Agent Masterclass for Professionals](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals)

## Agents already search documents. Why should a Ryde learner build the search?

Because when a retrieval agent is wrong it is usually confidently wrong, and the cause is often a chunking decision nobody noticed.

An assistant that answers from documents gives a fluent reply whether or not the chunk it read contained the answer. In our Ryde test the agent asked about Ryde Public School read a sentence about Ermington Public School instead; a language model given that sentence would happily produce an answer about the wrong school.

A learner who has measured 0, 8, 14 and 16 correct out of 19 understands that retrieval quality has to be tested, not assumed. They ask how a system splits its documents, how many pieces it reads, and whether anyone has checked it against questions with known answers.

In 2026 agents read before they answer, and the Ryde learner who knows how the reading can fail is the one who builds agents people can trust. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Gladesville to Marsfield, one online class

The schools in our project have addresses from Gladesville to Marsfield, and a live online lesson reaches every one of those neighbourhoods equally.

- **From home** No travel between suburbs; the learner logs in from home and the whole hour is spent coding.
- **NSW stages** Plans track the NSW syllabus stages, break for the state holidays, and give senior students projects that suit their computing subjects.
- **Trial, not a pitch** The free first lesson is a real class. At the end the teacher suggests a course, level and time, with nothing paid.
- **Fifteen to twenty learners** Groups are built around level and pace, mixing Ryde learners with classmates from elsewhere.
- **Twice a week** A fixed hour on two days each week, roughly eight lessons monthly, with breaks agreed ahead.
- **Teachers in India** An 8pm Ryde lesson in summer starts at 2:30pm India time; after Sydney leaves daylight saving it starts at 3:30pm there.

**Daylight saving in Sydney** Clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, and India keeps one time all year. Every lesson time we give is Sydney time.

## Ryde class fees

Three amounts make up the whole price list.

- First class: USD 0. The first lesson costs nothing and ends with a clear recommendation.
- Group tuition: USD 100 a month. A month of small-group lessons, normally eight, with fifteen to twenty learners.
- Private tuition: USD 150 a month. Roughly eight lessons a month, one teacher and one learner.

Outside India every invoice is in US dollars, which means one rate for all of Ryde rather than a suburb tariff. Nothing is charged until course and time are fixed after the trial; holidays, absences and format changes are covered on the pricing page.

## Ryde vibe coding and AI agents questions

### How many people live in the City of Ryde?

The 2021 Census QuickStats for the Ryde local government area record 129,123 residents and put their median age at 37.

### What is chunking in AI retrieval?

Chunking is splitting a document into pieces before an AI system searches it. The system then retrieves and reads only the pieces that look relevant, so the way the text is split decides what the AI can see.

### What is the Ryde agent project?

Learners turn the records of the 19 Ryde government schools into sentences, chunk the text in different ways, and measure how often a retrieval agent fetches a chunk holding the answer. Results range from 0 of 19 with 60-character chunks to 16 of 19 with one sentence per chunk.

### Why does the agent confuse Ryde Public School with Ermington Public School?

Because the keyword matcher gives them the same score. Ermington Public School's address is in West Ryde, so its sentence contains Ryde, Public and School just as Ryde Public School's own sentence does. On a tie the agent takes the sentence that comes first in the text, and Ermington comes first alphabetically.

### Does the project rate schools?

No. It uses names, addresses and first-teacher dates to study retrieval and says nothing about results, enrolment or quality.

### Are Copilot Studio agents taught in groups?

No. Copilot Studio agents are taught one to one only, because each workplace has its own documents and permissions. Teenagers build agents in Python.

### Can children learn too?

Yes, from age six. Younger children begin with Scratch and simple vibe coding; the retrieval project is for older students.

### Do you have an office in Ryde?

No. Every lesson is live online and we have no premises in Australia. A computer with sound and a stable connection is enough; the phone number we display is Indian.

### How much are AI agents classes for Ryde learners?

The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.

### How many people are in a group?

Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner's time.

## More for Ryde learners

Nearby, [Hornsby](/online-coding-and-python-classes-in-hornsby-sydney) and [Ku-ring-gai](/ai-and-programming-classes-in-ku-ring-gai-sydney) have pages of their own, and the [Sydney page](/best-coding-classes-in-sydney) covers the city. [Understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-australia) explains our approach to AI-written code; for statewide options see [coding and AI in New South Wales](/coding-and-ai-classes-in-new-south-wales).

## Contact

Book the free class on [https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-ryde-sydney](https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-ryde-sydney#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
