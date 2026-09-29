---
title: "Coding and AI Classes in Farnborough | Python, Ages 6 to 67"
description: "Online coding, AI, Python and vibe coding lessons for Farnborough, Cove, North Camp and Aldershot learners aged 6 to 67, taught live by a tutor. First lesson free."
canonical: https://learn.modernagecoders.com/best-coding-and-ai-classes-in-farnborough
source: src/pages/best-coding-and-ai-classes-in-farnborough.html
---
> The ONS gives the Farnborough built-up area 60,655 residents at the 2021 census and Aldershot 39,825, in Rushmoor, a borough of 99,756. Cove, North Camp, Southwood, West Heath and Farnborough Park are recorded suburbs lying inside Farnborough's built-up area. Rushmoor learners aged six to 67 are taught coding, AI, Python, vibe coding and maths on camera by tutors working from India, privately or inside a level-matched class of five to ten. We put thinking first, so learners can explain why a model or chatbot said what it did. Your first lesson is free and closes with our course recommendation. The Farnborough project trains a model on 318 Census areas and then interrogates it about which inputs it actually uses, with a column of random numbers planted as a test. Past the trial, a class place is USD 100 per month and a private tutor USD 150 per month.

[Home](/) / [United Kingdom](/coding-classes-in-united-kingdom) / [South East England](/coding-and-ai-classes-in-south-east-england) / Farnborough

Farnborough, Rushmoor, Hampshire, England / Live online

# Coding and AI classes in Farnborough

**Where can Farnborough learners find the best coding and AI classes?** The ONS gives the Farnborough built-up area 60,655 residents at the 2021 census and Aldershot 39,825, in Rushmoor, a borough of 99,756. Cove, North Camp, Southwood, West Heath and Farnborough Park are recorded suburbs lying inside Farnborough's built-up area. Rushmoor learners aged six to 67 are taught coding, AI, Python, vibe coding and maths on camera by tutors working from India, privately or inside a level-matched class of five to ten. We put thinking first, so learners can explain why a model or chatbot said what it did. Your first lesson is free and closes with our course recommendation. The Farnborough project trains a model on 318 Census areas and then interrogates it about which inputs it actually uses, with a column of random numbers planted as a test. Past the trial, a class place is USD 100 per month and a private tutor USD 150 per month.

Once a machine learning model is trained, people want to know why it predicts what it does. The common shortcut is a feature importance score, a percentage for each input that most libraries print with one line of code. Those numbers look authoritative, but they are not all equally trustworthy. This project gives a random forest four inputs about each of Rushmoor's 318 Census areas, three genuine and one made of pure random numbers, and asks it to predict how many households live in flats. Then it compares two ways of asking the model which inputs mattered. A good method should give the random column nothing.

Facts last verified 29 September 2026. Teaching is online; no Farnborough branch is claimed. 10,000+ students taught, rated 4.9 across 547 Google reviews, teaching since 2020, 25+ countries, ages 6 to 67, 5 to 10 students per group.

## Farnborough courses in reasoning, Python and AI

Pick a course by age and interest. Lesson one of each is live and free, with no card needed.

- [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids) (Ages 7 to 12): The how-to-think course: testing ideas, controls and asking which clue really mattered.
- [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev) (Ages 8 to 12): Scratch games planned by the learner, built with an AI and tested for every bug.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 13 to 17): Machine learning in Python, including the random-column importance test on Rushmoor data.
- [Generative AI Course](/courses/complete-generative-ai-masterclass-college) (Students and adults): Modern AI, how models are evaluated and explained, and AI agents in Python.

The four we are known for, on every market page:

- [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course) (Ages 13 to 17): Python, web and AI projects where the learner still owns the thinking.
- [Python Automation Course](/courses/python-ai-automation-masterclass-college) (College and adult): Automate the work you already do, then let AI carry part of it.
- [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) (Ages 14 to 18): Train a model, read what it learned, and be able to say why it is wrong.
- [Codex & Claude Code](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) (Professionals): Run AI coding agents on real work without losing control of the codebase.

Browse the [course atlas](/course-atlas) for more than one hundred options and the [coding roadmap](/coding-roadmap) for prerequisites.

## Farnborough, Aldershot, Cove and North Camp

The borough's two ONS built-up areas, and recorded suburbs within Farnborough.

**ONS built-up areas in Rushmoor, 2021 census residents**

| Built-up area | Residents (2021) |
|---|---|
| Farnborough | 60,655 |
| Aldershot | 39,825 |

These counts come straight from the ONS and are not added together; the Rushmoor figure of 99,756 is from a separate table. Postcodes.io records Cove, North Camp, Southwood, West Heath, Farnborough Park and Farnborough Street as suburban areas, and in each case the nearest Census output area sits in the Farnborough built-up area. Hampshire schools teach England's national curriculum; share the holiday dates and lessons will avoid them.

### Hampshire, the South East and why reasoning first

More choices are on [coding classes in Hampshire](/coding-classes-in-hampshire) and [South East England](/coding-and-ai-classes-in-south-east-england). Our view on thinking before tools is on [learn to think, not just use AI tools](/learn-to-think-not-just-use-ai-tools-uk).

## Which inputs does the model use? Feature importance with a random-number control

Train a model, plant a fake input, and see which importance method is fooled.

From the Nomis API the learner downloads four Census 2021 tables for all 318 output areas in Rushmoor. Of 39,339 households, 10,831 live in a flat of some kind, most of them, 9,138, in purpose-built blocks. The share in flats is the target. The inputs are population density, the share of one-person households, the share of households without a car, and a fourth column filled with random numbers that cannot carry any information. A random forest is trained on 70% of the areas and tested on the other 30%, and the whole process is repeated on 20 different random splits.

On unseen areas the model explains about 65% of the variation in the flat share. Two importance methods are then compared. The first is the forest's built-in score, based on how much each input helped split the training data. The second, permutation importance, shuffles one input at a time on the test areas and measures how much worse the predictions become.

**Importance of each input for predicting the share of households in flats, averages over 20 splits, our Python run on Census 2021 data for Rushmoor**

| Input | Built-in score | Permutation: accuracy lost when shuffled |
|---|---|---|
| No-car share | 45.3% | 0.429 |
| One-person share | 36.6% | 0.342 |
| Population density | 12.1% | 0.065 |
| Random numbers | 6.0% | -0.001 |

The built-in score hands the random column 6.0%, half as much as density. That happens because the score is measured on the training data, where a forest can always find some split on noise that fits a few areas slightly better. Permutation importance, measured on areas the model never saw, gives the random column essentially zero: shuffling it changes nothing. Two more warnings emerge. Density's permutation score swings from -0.023 to 0.121 across the 20 splits, so with only a few hundred areas the smaller scores are shaky. And the no-car and one-person shares are correlated (0.66), so they partly stand in for each other; their scores describe this model, not which one causes flats.

### Ages 8 to 11

Hide one clue in a guessing game, see if the guesses get worse, and decide which clues really helped.

### Ages 11 to 15

Chart Rushmoor's flat share against each input in Python and spot which ones move together.

### Ages 15 and up

Train the forest, add a noise column, and compare built-in and permutation importance.

### Census tables, our model

Accommodation, car, household and density data are Office for National Statistics Census 2021 releases via Nomis, under the Open Government Licence. The model, the random column and every importance figure are our own calculations.

## What this teaches about vibe coding and AI agents

When a model explains itself, treat the explanation as one more output to verify.

**From the Farnborough importance test to working with AI**

| In the flats project | When AI explains a result |
|---|---|
| Random numbers scored 6.0% built-in | Default explanations can credit noise |
| Permutation gave them about zero | Test importance on data the model has not seen |
| Density swung between splits | Small datasets give unstable explanations |
| Two inputs were correlated | Importance is not the same as cause |
| A planted fake input exposed the flaw | Build controls into every check |

Ask an AI assistant which factors matter most in a dataset and it will often train a quick model and read out the built-in importance scores as if they were facts. Vibe coding lets learners describe the analysis in words while an AI writes the Python; our Farnborough learners add a random control column and a permutation check before they believe any ranking. AI agents that analyse data and write reports face the same trap, so the controls belong in their instructions. Agents come later in our courses, once Python flows, which is mostly for sixteen-plus learners; anything in Copilot Studio is delivered only in private lessons. Our [UK agents course page](/ai-agents-course-for-students-uk) maps the steps; [understand the code, don't copy-paste](/understand-the-code-dont-copy-paste-uk) explains the thinking.

The ONS, Nomis and postcodes.io have no part in this page beyond publishing the open data it uses; the forest, the planted column and any error are ours alone.

## From clue games to explaining models

A school year gives a starting guess; the free lesson pins down the level.

- **Years 2 to 7: How to think** Clues, controls and asking what really made the difference. [Problem Solving and Computational Thinking for Kids](/courses/problem-solving-and-computational-thinking-for-kids), [Scratch Coding for Kids](/courses/scratch-programming-complete-course)
- **Years 4 to 8: Vibe coding for kids** Games and apps built with an AI and tested by the learner. [Vibe Coding for Kids](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev), [Python and AI for Kids](/courses/python-ai-kids-masterclass)
- **Years 9 to 13: Python and machine learning** Models, importance and controls alongside GCSE and A level. [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens), [Vibe Coding for Teens](/courses/vibe-coding-for-teens-python-web-ai-projects-course)
- **Adults: AI, evaluation and agents** How models are judged and explained, then agents in Python. [Generative AI Course](/courses/complete-generative-ai-masterclass-college), [Python Masterclass](/courses/python-programming-masterclass-zero-to-advanced-college)

## What is feature importance in machine learning, and can you trust it?

Feature importance scores how much each input contributes to a model's predictions; permutation importance on held-out data is generally more trustworthy than the built-in scores many libraries print by default.

On Rushmoor's 318 Census areas, a random forest's built-in score credited a column of pure random numbers with 6.0%, while permutation importance on unseen areas gave it about zero.

Learners who have run that test ask of any AI explanation: was it measured on new data, and would it credit noise?

Farnborough teenagers who can audit an explanation will not be talked round by a confident chart, and coding is where that audit skill is learned. The longer argument is in [why teenagers should still learn to code in 2026](/blog/is-coding-worth-learning-2026).

## Cove to North Camp, all online

Bring a computer and an internet connection that handles video; that is the whole kit list.

- **Learner at the controls** Code, prompts and test runs are all done by the student, with the tutor following the shared screen and asking for reasons.
- **Starting from the trial** What the free session uncovers sets the first topic; exam boards go on file.
- **No fee for lesson one** The trial is free and wraps up with a course suggestion.
- **Same-level classes** Five to ten learners from across the UK make up each class, all at one stage.
- **Two each week** Paused in school holidays.
- **Stable lesson time** Tutors adjust when UK clocks change, so your hour stays put.

**Why lessons are online** Five learners at the same level with the same free evening are rarely neighbours. Video means they do not need to be.

## Farnborough fees

Farnborough learners pay our international prices, which apply everywhere except India.

- First class: USD 0. A full lesson at no charge, then a recommendation.
- Group tuition: USD 100 a month. Roughly eight live group lessons per month.
- Private tuition: USD 150 a month. Roughly eight live private lessons per month.

Fees are set in US dollars, not pounds, and billing starts only after the trial has confirmed a course and a weekly time. The pricing page covers holidays, missed lessons and swaps between group and private.

## Farnborough questions

### What is the population of Farnborough?

The ONS counted 60,655 residents in the Farnborough built-up area at the 2021 census; Rushmoor borough had 99,756.

### Are coding and AI classes available online in Farnborough?

They are. Rushmoor learners aged 6 to 67, Aldershot included, join each lesson by live video.

### What is permutation importance?

A way to measure how much a trained model relies on an input: shuffle that input on data the model has not seen and see how much the predictions worsen.

### Why can built-in feature importance be misleading?

Scores calculated on training data can reward inputs the model merely used to fit noise. In our Rushmoor test, a column of random numbers received 6.0% from the built-in score.

### What happens in the Farnborough project?

Learners predict the share of households in flats across 318 Census areas, plant a random column, and compare two ways of ranking the inputs.

### Is vibe coding taught?

Yes, for all ages; the learner plans the program and tests the code an AI writes.

### When do learners build AI agents?

Python has to feel routine first, which for most is sixteen or over; Copilot Studio is taught privately.

### Do lessons support exam courses?

GCSE and A level computer science and maths, yes, with the focus on real understanding rather than any promised grade.

### What do lessons cost?

The first is free. After that, USD 100 a month for group lessons or USD 150 a month for one-to-one.

### Do lessons pause in school holidays?

Yes, just send the dates.

## More Hampshire, Surrey and Berkshire pages

Pages with projects of their own: [Guildford](/ai-and-programming-classes-in-guildford), [Woking](/best-coding-and-ai-classes-in-woking), [Basingstoke](/ai-and-programming-classes-in-basingstoke) and [Bracknell](/online-coding-and-python-classes-in-bracknell). Everywhere else we teach is on the [UK hub](/coding-classes-in-united-kingdom).

## Contact

Book the free class on [https://learn.modernagecoders.com/best-coding-and-ai-classes-in-farnborough](https://learn.modernagecoders.com/best-coding-and-ai-classes-in-farnborough#book), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com. Rated 4.9 across 547 Google reviews.
