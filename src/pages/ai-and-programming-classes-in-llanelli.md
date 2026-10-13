---
title: "AI and Programming Classes in Llanelli, Carmarthenshire"
description: "AI and programming classes for Llanelli, Felinfoel, Dafen, Llwynhendy and Bynea, live on video for ages 6 to 67: Python, machine learning and agents. Try it free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-llanelli
source: src/pages/ai-and-programming-classes-in-llanelli.html
---
> AI and programming classes for Llanelli, Felinfoel, Dafen, Llwynhendy and Bynea, live on video for ages 6 to 67: Python, machine learning and agents. Try it free.

Skip to contentCourse ideas

## AI and programming courses for Llanelli learners

Our usual first course for each age. Every course opens with a free live lesson and no card details.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsSorting, grouping and spotting rules, the thinking behind both coding and machine learning.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsChildren build Scratch games with an AI, then check and correct them.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensPython machine learning with real data, including the Llanelli street-name model.See the syllabus](/courses/ai-ml-masterclass-teens)[![Data Structures & Algorithms Course course thumbnail](/images/dsa-college.webp)Students and adultsData Structures & Algorithms CourseGraphs and algorithms in depth, the tools that answered the question the model could not.See the syllabus](/courses/data-structures-algorithms-masterclass-college)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)Llanelli and Carmarthenshire

## Llanelli, Felinfoel, Dafen, Llwynhendy and Bynea

Two census totals and the suburb list, each tied to a source.

| Area | Residents |
| --- | --- |
| Llanelli built-up area | 42,155 |
| Carmarthenshire | 187,897 |

Carmarthenshire also includes Carmarthen, Ammanford, Burry Port and a great deal of countryside, so its total is not something to add the town to. The full list of suburbs we could place inside the Llanelli built-up area, by checking the postcode nearest to each gazetteer point, is Felinfoel, Dafen, Llwynhendy, Bynea, Morfa, Seaside, Furnace, Pemberton, Bigyn, Pen-y-fan, Cwmcarnhywel, Sandy and Swiss Valley. Machynys, Pwll and Llangennech did not pass that check, so they are not listed. Schools in Llanelli teach the Curriculum for Wales, and older learners can take WJEC GCSE and A level computer science alongside our lessons.

### West Wales pages

See also [Swansea](/best-coding-class-in-swansea), [Carmarthenshire](/coding-classes-in-carmarthenshire), [WJEC GCSE computer science help](/wjec-gcse-computer-science-help-wales) and [coding across Wales](/coding-and-ai-classes-in-wales). We explain why reasoning comes before AI on [thinking skills before AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Llanelli project

## A model that learned the name, not the street

559 named streets, one honest label for each, and a model that only reads names.

The learner downloads every mapped road and path around Llanelli from OpenStreetMap in one query and keeps the 559 named streets that lie wholly inside a rectangle drawn around the town. For each one the program answers a question from the map itself: does either end of the street stop at a point joined to no other road a car could use? By that test 215 streets, 38.5%, are dead ends. Footpaths are ignored, so a cul-de-sac with a path out of it still counts as a dead end for cars.

Next the streets are split by naming pattern. 293 follow the English pattern, with the kind of road as the last word: Road, Street, Close, Court. Only 71 of them, 24.2%, are dead ends, and the last word is a strong clue: 9 of the 11 Closes and 8 of the 9 Courts are dead ends, against 7 of 83 Streets. Another 122 follow the Welsh pattern, with the kind of road first: Heol, Clos, Llys, Maes. Here 72, or 59.0%, are dead ends, including 15 of the 23 streets starting with Clos and 11 of the 15 starting with Llys. The remaining 144 names fit neither pattern and are set aside.

| Tested on | Model accuracy | Always guessing "not a dead end" | Dead ends the model found |
| --- | --- | --- | --- |
| Unseen English-pattern streets | 82.3% | 75.5% | 33.1% of them |
| All 122 Welsh-pattern streets | 41.0% | 41.0% | 0 of 72, in every split |

On new English names the model looks useful, beating the lazy guess by 6.8 points. Its heaviest weights explain why: "close" pushes hard towards dead end and "street" hard away from it. On the Welsh names it is exactly as good as saying no every time, and in all 200 runs it does not find a single one of the 72 Welsh-pattern dead ends. Clos, the Welsh word for close, sits at the front of the name where a last-word model never looks, and every word after it is new to the model. Nothing about the streets changed; the clue disappeared. The map answers the question perfectly in a few lines of code, because the map, unlike the name, is the thing itself.

### Ages 8 to 11

Sort picture cards by a rule, then try the rule on cards drawn in a different style.

### Ages 11 to 15

Count dead ends by name ending in Python, then check the counts against the map.

### Ages 15 and up

Train the model, inspect its weights, and design a test that exposes the shortcut.

### Data and method

Streets and road connections are from OpenStreetMap contributors under the Open Database Licence, read with one Overpass query on 1 October 2026. The term shortcut learning follows Geirhos and colleagues, Nature Machine Intelligence, 2020. The dead-end rule, the naming patterns and every percentage here are our own work, and footpaths were deliberately left out of the test.

Programming with AI

## What the street-name model teaches about AI

A high score on familiar data says little about unfamiliar data.

| What the model did | The lesson for any AI |
| --- | --- |
| Scored 82.3% on English names by leaning on "close" | Ask which clue a model is really using |
| Found 0 of 72 Welsh-pattern dead ends | Test on data unlike the training data |
| Matched a guess that always says no | Compare every model with a lazy baseline |
| The map gave the exact answer | If a direct method exists, prefer it to a prediction |
| Footpaths were left out on purpose | State the definition behind every label |

Large language models take shortcuts too, and their confident tone hides it. In Llanelli lessons, vibe coding means getting an AI to draft the classifier, then probing it with names it has never seen and explaining its mistakes from its weights. We hold agent-building back until a learner's own Python is dependable, which for most comes around age sixteen or later, and anything involving Copilot Studio agents is private tuition. There is more on [reading code before trusting it](/understand-the-code-dont-copy-paste-uk) and on [our AI agents route for UK students](/ai-agents-course-for-students-uk).

This page uses open data from OpenStreetMap, the ONS and postcodes.io. They are not connected with Modern Age Coders, and the model and its results are our own.

Progress

## From sorting cards at seven to testing models at seventeen

The trial lesson places each learner; school year is only a rough first guess.

Years 2 to 6

### Rules and patterns

Sorting, grouping and step-by-step thinking, often away from the screen.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### First code with AI

Scratch built with an AI, then early Python.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Machine learning

Training, testing and questioning models beside WJEC courses.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[Python for Teens](/courses/python-complete-masterclass-teens)Adults

### Algorithms, then agents

Solid algorithms and Python, then agents you can explain.

[Data Structures & Algorithms Course](/courses/data-structures-algorithms-masterclass-college)[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)Models and AI

## What is shortcut learning, and why does it matter for AI?

Shortcut learning is when a machine learning model relies on an easy clue that happens to work in its training data instead of the real property it was meant to learn, and it matters because such a model can score well in testing and then fail completely when the clue is missing.

Trained on Llanelli's English-pattern street names, a model reached 82.3% accuracy on new English names but found 0 of the 72 dead ends among Welsh-pattern names, where Clos comes first instead of Close coming last.

A learner who has caught a model doing this asks of any AI result which clue produced it, and whether that clue will still be there next time.

Llanelli teenagers who can test a model like this are ready to question AI rather than simply use it, and that confidence is built by writing code. The longer argument is in [why code is still worth learning for teenagers in 2026](/blog/is-coding-worth-learning-2026).

Lesson details

## How Llanelli lessons are taught

Lessons are live video sessions. Please join from a computer with a physical keyboard, as phones and tablets make programming hard going.

### Learner at the controls

The learner writes and runs the code while the tutor asks the questions.

### Placed by the trial

The free lesson shows where to begin, and the course suggestion follows.

### Trial without payment

The first lesson is free and needs no card.

### Groups by level

Each class holds fifteen to twenty people at a shared stage, from all corners of Britain.

### About eight a month

Two lessons a week in term time, with holiday weeks dropped when you ask.

### A fixed UK slot

We handle the clock changes, so the lesson hour does not move.

Why we teach online

Finding fifteen to twenty learners at one exact level is realistic across the whole UK, and video means no one travels.

Fees

## Fees for Llanelli learners

Llanelli learners pay the rate that applies to all our students outside India.

First class**USD 0**

First lesson: free, full length, closing with a course suggestion.

Group tuition**USD 100**

Group lessons, around eight a month.

Private tuition**USD 150**

Private one-to-one lessons, around eight a month.

Every fee is set in US dollars; there is no sterling price list. Nothing is charged for the trial, and billing starts once a course and a weekly time are fixed. Holidays, missed lessons and moving between group and private are explained on the pricing page.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Llanelli%20and%20would%20like%20to%20book%20a%20free%20AI%20or%20programming%20lesson.)Reviews

## Google reviews from families in Wales and learners across the UK

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

## Book a free Llanelli lesson

An age or school year and one or two interests are all we need. Expect something like a card-sorting puzzle, an AI-assisted Scratch game, a first Python script or a small model trained on real Llanelli data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Llanelli one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Llanelli%20and%20would%20like%20to%20book%20a%20free%20AI%20or%20programming%20lesson.)

Submitted details are used for placement and follow-up.

FAQ

## Llanelli questions answered

The street-name model, machine learning, programming and the practical side.

### What is the population of Llanelli?

The ONS counted 42,155 usual residents in the Llanelli built-up area at the 2021 census. Carmarthenshire had 187,897.

### Are AI and programming classes available in Llanelli?

Yes. Anyone aged 6 to 67 in Llanelli, Felinfoel, Dafen, Llwynhendy, Bynea or elsewhere in Carmarthenshire can join, since every lesson is a live video call.

### What is a shortcut in machine learning?

A feature that predicts the answer in the training data without being the real reason, like the word Close predicting a dead end. When the feature is absent, the model fails.

### How do you catch a model taking a shortcut?

Look at which inputs carry the most weight, and test the model on data where that input is missing or different, such as Welsh-pattern street names.

### What did the Llanelli project find?

A model trained on English-pattern names scored 82.3% on new English names, but on 122 Welsh-pattern streets it matched a guess of always no and found 0 of the 72 dead ends.

### What is vibe coding?

Describing a program to an AI in everyday language, then reading, running and correcting its code. We teach it together with hand-written Python.

### At what point do agents come in?

When their Python stands up without support, for most learners somewhere from sixteen onwards. Copilot Studio agent work is private only.

### Can lessons support WJEC GCSE computer science?

Yes. Algorithms, data and the ethics of automated decisions appear in WJEC GCSE and A level computer science, and this project touches all three. Grades are never promised.

### How much are lessons?

The first lesson is free. After that, USD 100 a month in a group or USD 150 a month one-to-one.

### Can we pause lessons for the school holidays?

Yes. Send the holiday dates and we skip those weeks.

Nearby

## More pages for West Wales

Explore [Swansea](/best-coding-class-in-swansea), [Carmarthenshire](/coding-classes-in-carmarthenshire), [Neath Port Talbot](/coding-classes-in-neath-port-talbot) and [WJEC computer science help](/wjec-gcse-computer-science-help-wales). For the rest of Wales and the UK, go to [our Wales page](/coding-and-ai-classes-in-wales) or [the UK overview](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20we%20are%20in%20Llanelli%20and%20would%20like%20to%20book%20a%20free%20AI%20or%20programming%20lesson.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-llanelli*
