---
title: "AI and Programming Classes in Grantham, Lincolnshire"
description: "AI, programming, Python and vibe coding classes live online for Grantham, Harrowby, Spittlegate, Manthorpe and Great Gonerby, ages 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-grantham
source: src/pages/ai-and-programming-classes-in-grantham.html
---
> AI, programming, Python and vibe coding classes live online for Grantham, Harrowby, Spittlegate, Manthorpe and Great Gonerby, ages 6 to 67. The first lesson is free.

Skip to contentChoose a course

## AI, programming and thinking courses for Grantham

Pick by age. The first live lesson on each course is free, and no card is taken to book it.

[![Problem Solving and Computational Thinking for Kids course thumbnail](/images/problem-solving-kids.webp)Ages 7 to 12Problem Solving and Computational Thinking for KidsHow to think: sort picture cards into town and country, then argue about the ones that fit neither.See the syllabus](/courses/problem-solving-and-computational-thinking-for-kids)[![Vibe Coding for Kids course thumbnail](/images/vibe-coding-kids.webp)Ages 8 to 12Vibe Coding for KidsGet an AI to make a Scratch sorting game, then change the order of the questions and see if scores change.See the syllabus](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)Ages 13 to 17AI and Machine Learning for TeensHow models learn, including the South Kesteven training-order experiment in Python.See the syllabus](/courses/ai-ml-masterclass-teens)[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Ages 13 to 17Vibe Coding for TeensPython and web projects written with an assistant, where every claim is tested more than once.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)

Browse the [course atlas](/course-atlas) for more than one hundred options and use the [coding roadmap](/coding-roadmap) to check prerequisites.

The four we are known for

### Python, AI, vibe coding and agentic coding

These run underneath everything above. Every one is live and online, placed by ability rather than by age, and the first class is free.

[![Vibe Coding for Teens course thumbnail](/images/vibe-coding-teens.webp)Vibe codingAges 13 to 17Vibe Coding for TeensPython, web and AI projects where the learner still owns the thinking.See the syllabus](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[![Python Automation Course course thumbnail](/images/python-college.webp)Python and AICollege and adultPython Automation CourseAutomate the work you already do, then let AI carry part of it.See the syllabus](/courses/python-ai-automation-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)AI and MLAges 14 to 18AI and Machine Learning for TeensTrain a model, read what it learned, and be able to say why it is wrong.See the syllabus](/courses/ai-ml-masterclass-teens)[![Codex & Claude Code course thumbnail](/images/codex-claude-code-adults.webp)Agentic codingProfessionalsCodex & Claude CodeRun AI coding agents on real work without losing control of the codebase.See the syllabus](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)South Kesteven

## Grantham and the district's other towns

The five built-up areas of at least 5,000 people that lie wholly inside South Kesteven, which also define "town" in the project below.

| Built-up area | Residents |
| --- | --- |
| Grantham | 44,905 |
| Stamford | 20,750 |
| Bourne | 17,495 |
| Deeping St James | 7,255 |
| Market Deeping | 6,535 |

We reproduce the ONS figures without adding them together; the district figure of 143,404 comes from a separate census table. Around Grantham, postcodes.io also lists Great Ponton, Syston, Denton, Allington, Sedgebrook, Ropsley, Old Somerby and Colsterworth as villages. Grantham schools follow the national curriculum for England, and our lessons are arranged round whichever term dates you pass on.

### Lincolnshire, the East Midlands and our teaching

The county page is [coding classes in Lincolnshire](/coding-classes-in-lincolnshire) and the region's is [the East Midlands](/coding-and-ai-classes-in-east-midlands). The case for putting thinking before tools is made in [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

The Grantham project

## Curriculum learning, tested 200 times

Train the same model on the same examples in four different orders and see what order really does.

The learner downloads four census tables from Nomis for all 466 output areas in South Kesteven and builds six numbers for each: population density on a log scale, and the shares of one-person households, residents aged 65 or over, detached homes, flats and children under 15. The label says whether the area lies inside one of the five towns in the table above: 321 do and 145 do not. A model that always answered "town" would be right 68.9% of the time, so that is the score to beat.

The model is logistic regression, trained one example at a time by gradient descent, which makes the order of examples matter. To rank examples from easy to hard the learner first trains a "teacher" model on the training data and records how confident it is about each example's true label. Then four students are trained on the same 326 training areas in different orders: random, easiest first, easiest first but alternating town and country, and hardest first. Each student is scored on 140 areas it has never seen, after 10, 25, 50, 100, 200 and all 326 examples, then again after four more passes in random order. The whole thing is repeated on 200 random splits of the data.

| Order of examples | After 10 | After 50 | After 100 | After 326 | After five full passes |
| --- | --- | --- | --- | --- | --- |
| Random | 79.4% | 86.8% | 88.1% | 88.2% | 88.1% |
| Easiest first | 68.5% | 74.8% | 77.1% | 86.9% | 88.2% |
| Easiest first, town and country alternated | 71.2% | 73.1% | 75.2% | 83.0% | 88.1% |
| Hardest first | 21.3% | 20.2% | 72.7% | 88.3% | 88.2% |

Easy first did not help. It was behind random order after 50 examples in every one of the 200 splits. Part of the reason is visible straight away: the 40 easiest areas, ranked by a teacher trained on all 466, are 82.5% town, so an easy-first model spends its early lessons on one class. Alternating town and country fixes that and still loses to random, in 199 of 200 splits at 100 examples. Our reading is that the easy examples sit far from the boundary between town and country: they show which way the line should face but not where it should go, and the examples that pin it down come last.

Hardest first was dramatic in the other direction. After 10 to 50 examples it scored between 16% and 21%, far worse than always guessing "town", in all 200 splits. The hardest examples are the ones that break the pattern, town areas that look rural and village areas that look urban, so a model that learns from them first learns the rule backwards. And the ending matters as much as the start: after five full passes every order finished between 88.1% and 88.2%, and easy first beat random in 73 splits while losing in 74. Order changed how the model got there, not where it ended up.

### Ages 8 to 11

Teach a friend to sort town and country pictures, once starting with obvious ones and once with odd ones, and compare.

### Ages 11 to 15

Train a tiny model in Python on the census areas and plot its accuracy as each example arrives.

### Ages 15 and up

Build the teacher, the four orders and the 200 splits, then design a curriculum that actually beats random.

### Data and honesty notes

Census 2021 tables TS006, TS017, TS007A and TS044 via Nomis, and the ONS output area to built-up area lookup, under the Open Government Licence. The label, the features, the models and every percentage are ours. A different model, a smaller learning rate or a different idea of "easy" could give a different result; the page reports what this setup did, not a law of machine learning.

Order and learning

## What training order teaches about AI and vibe coding

An idea that sounds obviously right still needs an experiment, repeated enough times to trust.

| In the project | In AI practice |
| --- | --- |
| Easy first behind random in 200 of 200 splits | Intuitions about teaching do not transfer automatically to models |
| The 40 easiest were 82.5% town | Check what a sorting rule does to class balance |
| Hardest first 16% to 21% accurate early on | Atypical data seen early can mislead a model |
| All orders 88.1% to 88.2% after five passes | Separate effects on speed from effects on the final result |
| 200 splits, not one | One lucky run proves nothing |

The order of training data is a live design question for the people who train large AI models, which see enormous mixtures of text in some sequence. The same caution applies there: an ordering that sounds sensible has to be tested, and effects on how fast a model learns are easy to confuse with effects on how well it ends up. Ask an AI assistant to vibe code a training loop and it will shuffle the data or not, usually without mentioning why. Grantham learners know that choice can matter early and vanish later, and they know how to check. Building AI agents follows once someone can write Python on their own, generally from the sixth form onwards, and Copilot Studio agents are kept to private lessons. Read [AI agents for students in the UK](/ai-agents-course-for-students-uk) and [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk).

This experiment has not been reviewed by the Office for National Statistics or by postcodes.io, who are not connected with us. We use their open data; the experiment and its conclusions are ours.

Learning route

## From sorting cards to training models

Year groups are only a first guess; the free lesson shows us the right place to start.

Years 2 to 6

### How to think

Sorting, rules and the examples that break them.

[Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids)[Scratch Coding for Kids](/courses/scratch-programming-complete-course)Years 4 to 8

### Vibe coding for kids

Sorting and quiz games made with AI help and tested by the child.

[Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Python and AI for Kids](/courses/python-ai-kids-masterclass)Years 9 to 13

### Python and machine learning

Training, testing and repeating experiments, next to GCSE and A level.

[AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens)[High School Mathematics](/courses/complete-high-school-mathematics-mastery)Adults

### Machine learning at work

Python basics, then machine learning, generative AI and agents.

[Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)[Generative AI Course](/courses/complete-generative-ai-masterclass-college)AI and training

## What is curriculum learning in machine learning?

Curriculum learning is the practice of training a machine learning model on its examples in a planned order, usually from easy to hard, instead of in random order, on the idea that a model, like a pupil, learns faster when the difficulty builds up gradually; whether it helps has to be tested for each model and dataset.

Training a small model on 466 South Kesteven census areas, easiest-first ordering was behind random order after 50 examples in all 200 of our test splits, 74.8% accurate against 86.8%.

Hardest first scored 16% to 21% early on, yet after five full passes every ordering finished between 88.1% and 88.2%.

Grantham teenagers who have run that experiment ask two things of any claimed AI improvement: was it tested more than once, and did it change the end result or only the speed? Asking well comes from coding the test yourself, which is a sound reason to learn to code in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

Lesson basics

## Harrowby, Spittlegate and Great Gonerby in the same online class

A computer with a camera and a connection that can hold a video call is enough.

### Learner leads

The student codes on a shared screen; the tutor asks the questions.

### Placed after the trial

We see what a learner can do before recommending a level.

### Free first lesson

A full lesson with no card, ending with our advice.

### One level per class

Fifteen to twenty learners at the same stage, from around the UK.

### Two sessions weekly

Send us your holiday weeks and we drop them.

### A time that holds

Clock changes are managed by our tutors, not by you.

Why learn online

A class of learners at exactly one stage needs more candidates than a single district holds. The UK as a whole has plenty.

Fees

## Grantham lesson prices

Grantham is billed at our international rates, which apply outside India.

First class**USD 0**

One full lesson free, finishing with our course recommendation.

Group tuition**USD 100**

Around eight group lessons a month.

Private tuition**USD 150**

Around eight private lessons a month.

All fees are in US dollars; we give no price in pounds. Billing starts once the trial is done and a course and weekly slot are agreed. The pricing page covers holidays, missed sessions and changing format.

Request placement[Check availability](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Grantham.)Reviews

## East Midlands families and UK learners on Google

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

## Request a free Grantham lesson

Send an age or school year and one interest. The trial might be a sorting puzzle, a Scratch game built with AI, first Python code, or a first model trained on real data.

### Want a class sooner? Book a priority demo

A priority demo is a full class of about 45 to 60 minutes. After the class the mentor sends a written skill report and a personal learning roadmap on WhatsApp. If you enrol, the demo fee is adjusted against your first month's fee. Share your demo Order ID with us on WhatsApp and we take it off.

[Book a priority demo](/book-demo)

### Contact the team directly

WhatsApp or call [+91 91233 66161](tel:+919123366161), or email [connect@modernagecoders.com](mailto:connect@modernagecoders.com). This is Modern Age Coders' actual contact, an Indian number, and not an invented Grantham one.

[WhatsApp Modern Age Coders](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Grantham.)

Submitted details are used for placement and follow-up.

FAQ

## Grantham questions

Curriculum learning, the census project, AI, programming and practical details.

### What is the population of Grantham?

The ONS recorded 44,905 usual residents in the Grantham built-up area at the 2021 census, within a South Kesteven district of 143,404.

### Can Grantham learners join AI and programming classes online?

Yes. Lessons are live on video for ages 6 to 67, for Grantham, Harrowby, Spittlegate, Manthorpe, Great Gonerby and the rest of South Kesteven.

### What is logistic regression?

A simple machine learning model that combines input numbers with learned weights and turns the total into a probability between 0 and 1, for example the chance that an area is part of a town.

### Why did hardest first do so badly at the start?

Because the hardest examples are the exceptions: town areas that look rural and village areas that look urban. Learning from those first taught the model the opposite of the usual pattern.

### What do learners build in the Grantham project?

Six census features for 466 South Kesteven areas, a logistic regression trained one example at a time, four training orders, and a test repeated on 200 random splits.

### Do you teach vibe coding?

Yes, at all ages. The learner directs an AI to write code, then reads and tests it.

### When can learners build AI agents?

When Python comes naturally to them without support, which for most means sixteen or older. Copilot Studio work is private-lesson only.

### Do lessons help with GCSE and A level?

They do, for computer science and maths. The goal is understanding, and no grade is guaranteed.

### What does it cost?

Lesson one costs nothing. Continuing is USD 100 per month in a class or USD 150 per month on your own with a tutor.

### Do lessons pause for holidays?

Yes, for any dates you send us.

More of Lincolnshire

## Nearby towns with their own projects

You will find quite different lessons on the pages for [Lincoln](/best-coding-class-in-lincoln), [Boston](/best-coding-and-ai-classes-in-boston) and [Grimsby](/ai-and-programming-classes-in-grimsby), and the county has a page at [Lincolnshire](/coding-classes-in-lincolnshire). For the rest of the country, use the [UK hub](/coding-classes-in-united-kingdom).

Book the free class[Book a priority demo](/book-demo)[Message us on WhatsApp](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20would%20like%20a%20free%20AI%20or%20programming%20lesson%20for%20a%20learner%20in%20Grantham.)Free class[Priority demo](/book-demo)[Call us](tel:+919123366161)

---

*Canonical: https://learn.modernagecoders.com/ai-and-programming-classes-in-grantham*
