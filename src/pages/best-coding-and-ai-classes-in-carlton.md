---
title: "Coding and AI Classes in Carlton, Nottinghamshire | Ages 6 to 67"
description: "Online coding, AI, Python and vibe coding classes taught live for Carlton, Gedling, Netherfield and Colwick learners aged 6 to 67. The first lesson is free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-carlton
source: src/pages/best-coding-and-ai-classes-in-carlton.html
---
> The ONS counted 53,555 residents in the Carlton built-up area at the 2021 census, and 117,264 in Gedling borough. Gedling, Netherfield, Colwick and Porchester are recorded as suburban areas of the borough, and Burton Joyce as a village. Anyone from six to 67 can study coding, AI, Python, vibe coding and maths with our India-based tutors over live video, in private lessons or in a group of five to ten learners at a shared level. Thinking comes before tools in every course, so a learner can question what a model or a chatbot says. For the Carlton project a learner trains a random forest on Gedling census areas and then uses partial dependence plots to ask what the model believes about one input at a time. Lesson one is free and ends with a course suggestion. After it, a group seat costs USD 100 a month and one-to-one teaching USD 150 a month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [East Midlands](/coding-and-ai-classes-in-east-midlands) / Carlton

Carlton, Gedling, Nottinghamshire / Live online

# Coding and AI classes in Carlton, Nottinghamshire

**Where will a Carlton learner find the best coding and AI classes?** The ONS counted 53,555 residents in the Carlton built-up area at the 2021 census, and 117,264 in Gedling borough. Gedling, Netherfield, Colwick and Porchester are recorded as suburban areas of the borough, and Burton Joyce as a village. Anyone from six to 67 can study coding, AI, Python, vibe coding and maths with our India-based tutors over live video, in private lessons or in a group of five to ten learners at a shared level. Thinking comes before tools in every course, so a learner can question what a model or a chatbot says. For the Carlton project a learner trains a random forest on Gedling census areas and then uses partial dependence plots to ask what the model believes about one input at a time. Lesson one is free and ends with a course suggestion. After it, a group seat costs USD 100 a month and one-to-one teaching USD 150 a month.

A trained model is a black box until someone interrogates it. One standard way to do that is a partial dependence plot: choose a single input, force it to a fixed value for every row of the data, average the model's predictions, then repeat for the next value. The resulting line shows how the model's answer moves as that one input changes. Gedling borough has 399 census output areas, which is enough for a Carlton learner to train a model in Python, draw these plots, and then discover the catch that careful analysts always mention: the plot describes the model, and inputs that travel together can make it misleading.

Facts last verified 30 September 2026. Teaching is online; no Carlton branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Courses in thinking, vibe coding and AI for Carlton

Choose by age. Whichever course fits, the first live class is free and no payment details are taken.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): How to think: change one thing at a time and watch what happens to the answer.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Ask an AI for a Scratch game, then test one setting at a time to see what each does.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Train models on real data and open them up, including the Gedling partial dependence plots.
- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): AI-assisted Python and web projects where the learner must explain every part.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Carlton, Arnold, Calverton and the places between

Three built-up areas linked to Gedling borough, and the smaller places that postcode data records there.

**Built-up areas associated with Gedling borough, ONS 2021 census figures**

| Built-up area | Residents (2021) |
|---|---|
| Carlton | 53,555 |
| Arnold | 40,010 |
| Calverton | 7,320 |

The ONS draws built-up areas around continuous building, not around council boundaries, so the Carlton and Arnold figures should not be read as "inside Gedling only", and we do not add the three rows together. The borough total of 117,264 is a separate census figure. Postcodes.io lists Gedling, Netherfield, Colwick and Porchester as suburban areas within the borough and Burton Joyce as a village. Local schools teach the national curriculum for England; tell us your term dates and lessons will sit inside them.

### Nottinghamshire, the East Midlands and how we teach

See [coding classes in Nottinghamshire](/coding-classes-in-nottinghamshire) for the county and [the East Midlands page](/coding-and-ai-classes-in-east-midlands) for the region. Our approach is explained on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Partial dependence plots on a model of 399 Gedling areas

Train a model, then ask it one question at a time, and check its answers against the raw data.

The learner fetches four Census 2021 tables from Nomis for each of Gedling's 399 output areas. Together the areas hold 51,536 households, and 9,763 of them, 18.94%, had no car or van. A random forest of 500 trees is trained to predict that share for an area from four inputs: population density, the share of one-person households, the share of detached homes and the share of purpose-built flats. Checked by five-fold cross-validation, the forest explains about 73% of the variation between areas it was not trained on (R squared 0.733), against 0.923 on the areas it had seen.

**Partial dependence: average predicted no-car share across all 399 areas when one input is fixed, our Python run on Census 2021 data from Nomis**

| One-person households set to | Average prediction | Detached homes set to | Average prediction |
|---|---|---|---|
| 15% | 14.8% | 0% | 24.5% |
| 20% | 15.8% | 10% | 23.0% |
| 30% | 19.3% | 20% | 20.2% |
| 40% | 24.7% | 40% | 16.1% |
| 50% | 29.2% | 60% | 16.1% |

Read down the left pair of columns. With every other input left as it really is, the forest predicts 15.8% when the one-person share is set to 20% and 24.7% when it is set to 40%, a rise of 8.9 points. The right pair falls from 24.5% to 16.1% as the detached share goes from none to 40%, and then stops moving: the model has learned a curve with a flat end, which a straight-line model could not show. Now compare with the raw data. Areas where 15% to 25% of households are one person average 12.3% without a car; areas at 35% to 45% average 25.9%, a gap of 13.6 points. The raw gap is wider than the partial dependence gap because those two groups differ in other ways as well. In the first group about half of homes are detached (49.8%); in the second, under a quarter (23.2%). The plot holds that difference still, and the raw comparison does not.

There is a catch in holding things still. Setting an area to 50% one-person households while leaving it with mostly detached houses describes a place that barely exists in Gedling, since the two inputs are correlated (minus 0.42). The forest still gives an answer, but it is guessing outside its experience. And in every case the plot reports what the model predicts, not what would happen if households changed. Nothing here shows a cause.

### Ages 8 to 11

A recipe game: change only the sugar, taste-score each batch, and draw the line.

### Ages 11 to 15

Chart no-car share against one-person share for Gedling areas in Python and describe the pattern.

### Ages 15 and up

Train the forest, code partial dependence by hand, and explain why it differs from the raw averages.

### Official counts, our model

All household counts are Office for National Statistics Census 2021 data taken from Nomis under the Open Government Licence. The forest, its scores and the partial dependence figures are our calculations and are published nowhere else. They concern areas, never individual households.

## What this teaches about vibe coding and AI agents

An explanation of a model is a claim too, and it deserves the same checking as a prediction.

**From the Gedling forest to everyday AI use**

| In the project | With AI tools |
|---|---|
| The plot showed 8.9 points, the raw data 13.6 | An explanation can disagree with a simple chart; find out why |
| Inputs moved together | Changing "one thing" may create a case the model never saw |
| Detached curve went flat after 40% | Models learn shapes; ask to see them |
| 0.923 on seen areas, 0.733 on unseen | Judge a model on data it did not train on |
| The plot described the forest | A model's behaviour is not proof of cause |

Vibe coding means describing a program in ordinary words and letting an AI write the first version. Ask a chatbot to "explain the model" and it will happily produce a plot and a confident paragraph about what drives the result. Carlton students learn to request the raw comparison next to it and to ask which inputs are correlated before trusting the story. The same discipline applies to AI agents that analyse data without supervision. We introduce agent building when a learner writes Python unaided, which tends to be in the last years of school or later, and Copilot Studio agents are reserved for one-to-one lessons. Further reading: [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) and [AI agents for UK students](/ai-agents-course-for-students-uk).

This page has no connection to the Office for National Statistics, Nomis or postcodes.io beyond using their open data. The model and every figure derived from it are our responsibility.

## From one-change experiments to explaining models

The year bands are approximate; a free lesson finds the real starting point.

- **Years 2 to 7: How to think** Change one thing, keep the rest, and record what happened. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Small games made with AI help, tested by the child who asked for them. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python, data and AI** Machine learning projects that sit alongside GCSE and A level work. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Statistics & Probability](/courses/statistics-probability-maths-course)
- **Adults: Models at work** Python, then generative AI and agents you can explain to a colleague. [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college), [Generative AI Course](/courses/complete-generative-ai-masterclass-college)

## What is a partial dependence plot?

A partial dependence plot shows how a trained model's average prediction changes as one input is varied while the other inputs are left at their real values.

For a random forest trained on 399 Gedling census areas, raising the one-person household share from 20% to 40% moved the average predicted no-car share from 15.8% to 24.7%, less than the 13.6-point gap in the raw averages.

Learners who have built the plot by hand know it reports the model's view, and that correlated inputs can push it into cases no real area matches.

Carlton teenagers who can code that check are equipped to challenge an AI's explanation, which is a strong argument for learning to program in 2026. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Netherfield, Colwick and Gedling, by video

Any reasonably recent computer with a camera and steady internet will do.

- **The learner drives** Code is typed and run by the student while the tutor watches the screen share and probes the reasoning.
- **Level found first** We use the trial to see where to begin and to write down the exam board if there is one.
- **Trial without payment** Session one costs nothing and ends with the course we think fits.
- **Small matched classes** Groups are five to ten learners at a similar stage, drawn from all over the UK.
- **Two sessions a week** Term-time rhythm, with school holidays left free on request.
- **One fixed hour** Tutors move their own clocks when British Summer Time changes; yours stays as booked.

**Why we teach online** Matching learners by level across the country gives every class a sensible pace, something a single neighbourhood rarely has the numbers for.

## Carlton fees

Families in Carlton pay the international rate that applies to all learners outside India.

- First class: USD 0. One full live lesson, free, ending with a suggested course.
- Group tuition: USD 100 a month. Roughly eight live small-group lessons per month.
- Private tuition: USD 150 a month. Roughly eight live private lessons per month.

Charges are made in US dollars and we publish no figure in pounds. Billing begins only when the trial has led to a chosen course and a weekly time. The pricing page explains holiday pauses, missed sessions and changing between formats.

## Carlton questions

### How many people live in Carlton, Nottinghamshire?

The Carlton built-up area had 53,555 residents at the 2021 census according to the ONS. Gedling borough had 117,264.

### Do you teach Carlton learners online?

Yes. Classes are live on video for ages 6 to 67, whether you are in Carlton, Netherfield, Colwick, Gedling village or Burton Joyce.

### What is a partial dependence plot?

A chart of a model's average prediction as one input is changed and the others are kept as they are. It shows what the model has learned about that input.

### What is a random forest?

A model made of many decision trees, each trained on a slightly different sample of the data, whose predictions are averaged.

### What is the Carlton project?

Training a forest on Census data for 399 Gedling areas, drawing partial dependence plots, and comparing them with plain averages to see where they differ.

### Does vibe coding feature in lessons?

At every level. The learner sets the goal, an AI writes a draft, and the learner tests and corrects it.

### When do learners start on AI agents?

Once they can write Python without help, usually late in secondary school or as adults. Copilot Studio agents are one-to-one only.

### Is there help for GCSE or A level?

For computer science and maths, yes. The goal is real understanding; no grade is promised.

### What are the fees?

Nothing for the first lesson. Then USD 100 each month for a group seat, or USD 150 each month for private lessons.

### What about school holidays?

Lessons pause for them if you give us the dates.

## More Nottinghamshire and East Midlands pages

Different projects run on the pages for [Nottingham](/best-coding-class-in-nottingham), [Mansfield](/online-coding-and-python-classes-in-mansfield) and [Derby](/best-coding-class-in-derby). For everywhere else, start at the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-carlton](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-carlton#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
