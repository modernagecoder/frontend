---
title: "Vibe Coding and AI Agents Classes in Folkestone | Ages 6 to 67"
description: "Live online vibe coding, AI agents, Python and coding classes for Folkestone, Cheriton, Sandgate and Morehall, ages 6 to 67. Your first lesson is free."
canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-folkestone
source: src/pages/vibe-coding-and-ai-agents-classes-in-folkestone.html
---
> Live online vibe coding, AI agents, Python and coding classes for Folkestone, Cheriton, Sandgate and Morehall, ages 6 to 67. Your first lesson is free.

Skip to contentWhere to begin

## Four Folkestone starting points for vibe coding and agents

Pick by age. Each course starts with a live lesson at no cost, and we never ask for card details to book it.

[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsScratch games made with an AI helper, where the child decides what to build and checks what comes back.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think: ordering, ranking and fair rules, worked out with cards and puzzles before any typing.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects by vibe coding, including the Kipps search agent described on this page.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Masterclass course thumbnail](/images/python-college.webp)Students and adultsPython MasterclassFrom a first line of Python to retrieval, agents and the tests that keep them honest.See the syllabus](/courses/python-programming-masterclass-zero-to-advanced-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)The town in figures

## Folkestone, Cheriton, Sandgate, Morehall and Foord

Two census counts on two different boundaries, and five suburb names from the gazetteer.

| Area | Residents |
| --- | --- |
| Folkestone built-up area | 51,995 |
| Folkestone and Hythe district | 109,758 |

The built-up area is the continuous town as the ONS draws it; the district also takes in Hythe, Hawkinge and New Romney, so the two rows are not parts of one sum. postcodes.io lists Cheriton, Morehall and Foord as suburban areas in the CT19 postcode district and Sandgate and Coolinge in CT20, and in each case the postcode closest to the gazetteer point is assigned to the Folkestone built-up area. Schools here follow the English national curriculum, so telling us a year group from Year 2 to Year 13 is enough to start, and our tutors can work alongside GCSE and A level computer science.

### Other Kent pages

Our Kent set includes the [county page](/coding-classes-in-kent), [Ashford](/online-coding-and-python-classes-in-ashford) and [Canterbury](/best-coding-class-in-canterbury). Why we teach thinking before tools is set out on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Folkestone project

## Reciprocal rank fusion: one answer from three lists that disagree

A novel, a five-word question and three rankers, each wrong in a different way.

Kipps, a novel by H. G. Wells, is free to read on Project Gutenberg in an edition dated 1906, and the word Folkestone appears in it 66 times. The learner downloads the text, cuts it at blank lines and keeps every passage of 25 words or more. That leaves 1,138 passages holding 92,961 words. The question for the agent is where the book describes the Leas, the lift, the Harbour and the sea at Folkestone, so the query is five words: folkestone, leas, lift, harbour, sea. One hundred passages contain at least one of them.

Ranker A counts how many times the query words occur. Ranker B divides that count by the length of the passage. Ranker C counts how many different query words are present and uses the raw count only to break ties. Each is a few lines of Python, and each has a weakness. A likes long passages because they have more room for hits. B likes short ones: its winner is a 31-word passage that says "sea" twice and has nothing to do with the town. C cannot tell a passing mention from a description.

| Passage | Rank in A, B, C | Fused score | Fused place |
| --- | --- | --- | --- |
| 128 words, 5 hits, the walk "along the Leas to the lift" | 1, 4, 1 | 0.04841 | 1st |
| 107 words, 5 hits, looking down on the Harbour | 2, 2, 2 | 0.04839 | 2nd |
| 105 words, 3 hits, Sunday along the front of the Leas | 5, 15, 4 | 0.04434 | 3rd |
| 31 words, "sea" twice, no mention of the town | 10, 1, 16 | 0.04384 | 4th |

The fusion rule is this: for each passage, add up 1 divided by (60 plus its rank) across the lists, then sort by the total. The first row scores 1/61 + 1/64 + 1/61, which is 0.04841. The three top-ten lists had little in common: A and B shared three passages, and only two passages were in all three. The fused top ten kept nine of A's ten, three of B's and six of C's. B's misleading winner was pushed down to fourth because the other two rankers placed it 10th and 16th. One passage that no single ranker put in its top ten (it was 16th, 21st and 11th) reached ninth place after fusion, because being fairly good on every list counts for a lot.

Two honest limits. Nobody has marked which passages are truly the right answers, so this run shows how fusion behaves, not that it is correct. And the constant 60 comes from the 2009 paper; the learner tries 1 and 1,000 to see what changes and why a middling value is forgiving.

### Ages 8 to 11

Three friends each rank ten ice cream flavours. Merge the lists by hand with a points rule and argue about whether it is fair.

### Ages 11 to 15

Write ranker A in Python, print its top five passages from Kipps, and spot what it gets wrong.

### Ages 15 and up

Build all three rankers, fuse them, and change the constant to watch the order shift.

### Sources and what is ours

The text is Project Gutenberg eBook 39162, which Gutenberg distributes free of charge. The fusion formula is from Cormack, Clarke and Buettcher (2009). The passage rule, the query, the three rankers and every rank and score above come from our own run.

Why agents need this

## What merged rankings teach about vibe coding and AI agents

An agent is only as good as the passage it was handed, and handing it over is ordinary code.

| Seen in the Folkestone run | Habit it builds |
| --- | --- |
| Each ranker had a different blind spot | Ask what a search method cannot see |
| Scores from A, B and C were not comparable | Do not average numbers that mean different things |
| Positions could be combined safely | Prefer a simple rule you can check by hand |
| A short passage fooled ranker B | Read the retrieved text, not just the answer |
| No one had marked the right answers | Say plainly when a result is untested |

Vibe coding means describing the program you want to an AI and steering what it writes. Ask an assistant for "a search over this book" and it will produce something that runs, usually a single ranker with no explanation of its bias. Folkestone learners practise asking for two or three methods, fusing them, and printing the passages so a person can judge. The same step sits inside most document-answering agents, where a keyword search and a meaning-based search are merged before the language model sees anything. We teach agent building once a learner can write Python unaided, which tends to mean older teenagers and adults, and Copilot Studio agents are offered one-to-one only. Read more on [AI agents for UK students](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

Project Gutenberg, the Office for National Statistics and postcodes.io have no link with Modern Age Coders. We used their open material; the experiment is our own work.

Stage by stage

## From ranking by hand to agents that search

A school year gives us a first guess at the stage, and the free lesson confirms or corrects it.

Years 2 to 6

### How to think

Sorting, ranking and fair rules, tried on paper first.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Scratch games the child designs and an AI helps to draft.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Vibe coding in Python

Text search, web apps and small tools, each with tests.

[Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Retrieval and agents

Python agents that find, rank and cite their sources.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI agents and search

## What is reciprocal rank fusion, and why do AI agents use it?

Reciprocal rank fusion merges several ranked lists by giving each item a score of 1 divided by (a constant plus its rank) in every list and adding those up; AI agents use it because it combines different search methods without needing their scores to be comparable.

On 1,138 passages of Kipps and a five-word question about Folkestone, three rankers agreed on only two of their top ten, yet the fused list put a 128-word description of the Leas and the lift first with a score of 0.04841.

Learners who have coded that merge tend to ask a new question of any agent: which passages did you retrieve, and how were they ordered?

A Folkestone teenager who can build and inspect the retrieval step is in a position to trust or challenge an AI's answer, and that comes from learning to code. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lesson format

## How a Folkestone lesson runs

All that is needed at home is a laptop or desktop with a webcam and an internet connection that does not drop.

### Hands on the keyboard

The learner shares a screen and types; the tutor watches, questions and nudges instead of lecturing.

### Placement by evidence

We suggest a course only after seeing the learner work in the free session.

### No card for the trial

Booking the first lesson costs nothing and asks for no payment details.

### Level-matched groups

Fifteen to twenty learners at the same stage, drawn from across the UK.

### Two lessons most weeks

Tell us the Kent term dates your school follows and we skip the holidays.

### Your slot stays put

When UK clocks move in spring and autumn, the tutor adjusts, not you.

Why we teach live and online

Live, because a tutor who can ask "what will this line print?" finds gaps a video never will. Online, because a group at exactly one level is easier to form across a country than within one town.

Fees

## Fees for Folkestone learners

The UK is on our international price list, which is set in US dollars.

First class**USD 0**

A complete first lesson, free, closing with the course we would recommend.

Group tuition**USD 100**

A place in a group, around eight lessons each month.

Private tuition**USD 150**

Private one-to-one lessons, around eight each month.

Prices are stated in US dollars and we do not publish a sterling figure. There is no charge until the trial has happened and a course and weekly time are agreed. The pricing page explains holidays, missed lessons and moving between group and private.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20live%20in%20Folkestone%20and%20would%20like%20a%20free%20trial%20lesson%20in%20vibe%20coding%20or%20AI%20agents.)Reviews

## Google reviews from Kent families and learners across the UK

Rated 4.9 across 547 Google reviews. These are real reviews, reproduced as written.

★★★★★

"The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. The teachers explain complex concepts clearly with practical exercises and interactive content."

Ria Mukherjee

Parent

★★★★★

"Modern Age Coders has been a game-changer for me. I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."

Samriddha Mondal

Student

★★★★★

"One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development."

Vansh Agarwal

Student

★★★★★

"My child Dhairya is really enjoying the Modern Age Coders classes. This is his first online class and he eagerly looks forward to it. I can already see his improvement, and the teachers are very cooperative."

Sonam Oswal

Parent of Dhairya

★★★★★

"Modern Age Coders have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence and inspires them to learn without hesitation."

Sonu Goyal

Parent

★★★★★

"I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding."

Ritu Kedia

Parent

Free placement class

## Book a free lesson from Folkestone

Send an age or year group and one interest. We can shape the trial around it: ranking cards by hand, an AI-assisted Scratch game, a first Python program, or a small search over a book.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Folkestone one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20live%20in%20Folkestone%20and%20would%20like%20a%20free%20trial%20lesson%20in%20vibe%20coding%20or%20AI%20agents.)

Submitted details are used for placement and follow-up.

FAQ

## Folkestone questions and answers

On rank fusion, the Kipps project, vibe coding, agents and the practical details.

### How many people live in Folkestone?

The ONS built-up area of Folkestone had 51,995 usual residents at the 2021 census. Folkestone and Hythe district had 109,758.

### Do you run vibe coding and AI agents classes in Folkestone?

Yes, as live online lessons for ages 6 to 67 in Folkestone, Cheriton, Sandgate, Morehall, Foord and Coolinge.

### What is vibe coding?

Vibe coding is building software by telling an AI in plain language what you want, then reading, testing and correcting the code it produces.

### What is retrieval in an AI agent?

Retrieval is the step where the agent searches documents for passages relevant to a question, before a language model writes an answer from them.

### What did the Folkestone project show?

Three simple rankers shared only two of their top ten passages from Kipps. Fusing their ranks put a description of the Leas and the lift first and pushed a misleading short passage down to fourth.

### Why use ranks and not scores?

Because a count, a share and a number of distinct words are on different scales. A position in a list means the same thing in every list, so positions can be added.

### When can a learner start building agents?

When their Python is secure enough to write small programs alone, often in the later teens or as an adult. Copilot Studio agents are one-to-one only.

### Can lessons support GCSE or A level computer science?

Yes. We teach the programming and ideas behind both. We do not promise grades.

### How much are lessons?

Nothing for the first. Then USD 100 a month for a group place or USD 150 a month for one-to-one.

### What happens in school holidays?

Lessons pause for the weeks you tell us about and pick up again afterwards.

Elsewhere in Kent

## More Kent towns, each with a different project

Try [Ashford](/online-coding-and-python-classes-in-ashford), [Margate](/online-coding-and-python-classes-in-margate) or [Maidstone](/online-coding-and-python-classes-in-maidstone). Every Kent page is listed on the [county page](/coding-classes-in-kent), and the [UK hub](/coding-classes-in-united-kingdom) covers the other regions.

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20live%20in%20Folkestone%20and%20would%20like%20a%20free%20trial%20lesson%20in%20vibe%20coding%20or%20AI%20agents.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/vibe-coding-and-ai-agents-classes-in-folkestone*
