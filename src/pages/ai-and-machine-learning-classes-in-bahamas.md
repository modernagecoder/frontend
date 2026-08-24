---
title: "AI and Machine Learning Classes in The Bahamas | Ages 12+"
description: "A model that is right 99 per cent of the time can be useless. Live online machine learning for Bahamian students, taught on data they build. First class free."
canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-bahamas
source: src/pages/ai-and-machine-learning-classes-in-bahamas.html
---
> A model that is right 99 per cent of the time can be useless. Live online machine learning for Bahamian students, taught on data they build. First class free.

Courses

## The courses behind the machine learning track

Every model measured in a unit a parent could check, against a baseline it had to beat first.

[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  ML / 01 AI and Machine Learning for Teens The main route. Every model measured against a baseline before anyone is allowed to believe it. Open the syllabus →](/courses/ai-ml-masterclass-teens)[![Data Science for Teens course thumbnail](/images/data-science-teens.webp)  ML / 02 Data Science for Teens The quarter that decides whether any modelling means anything: files that arrive broken. Open the syllabus →](/courses/data-science-course-for-teens-python-data)[![AI and ML Masterclass course thumbnail](/images/ai-ml-college.webp)  ML / 03 AI and ML Masterclass The adult version of the same ladder, with an evaluation habit that survives questioning. Open the syllabus →](/courses/ai-ml-masterclass-complete-college)

The rest of the ladder is [Python and AI for Kids](/courses/python-ai-kids-masterclass) · [AI Literacy for Kids](/courses/ai-literacy-for-kids-course) · [Python for Teens](/courses/python-complete-masterclass-teens) · [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) · [Data Science for Teens](/courses/data-science-course-for-teens-python-data) · [Git and GitHub](/courses/git-github-version-control-course-for-teens) · [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) · [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college). The full list is on the [catalogue](/courses).

In short

Modern Age Coders teaches machine learning to learners in The Bahamas from about age twelve, as the third quarter of a twelve-month Python and AI track. The organising idea is evaluation rather than algorithms: class imbalance, why accuracy misleads when an outcome is rare, precision and recall, and the fact that a false alarm and a missed event almost never cost the same. Everything is written in Python on an ordinary laptop, using data the student generates or collects. Group teaching is USD 100 a month, private USD 150, and the first class is free.

The lesson this stage is built around

## A model that is right 99 per cent of the time can be completely useless

This is the single most important idea in applied machine learning, it is almost never taught to school students, and it matters more in a country like the Bahamas than in most.

Suppose you want to predict whether something rare will happen. Rare means it happens on roughly one day in a hundred. A student trains a model, tests it, and reports **99 per cent accuracy**. Everybody is delighted.

Then somebody asks what the model actually predicts, and it turns out it says **no, every single time**. It has never once predicted the rare event. It is right ninety-nine days in a hundred because saying no is right ninety-nine days in a hundred, and it has learned precisely nothing.

That is the accuracy paradox, and it is not a curiosity. It is the default outcome when a beginner trains a classifier on imbalanced data, which is most real data.

Why this lands harder here: the Bahamas is a country where the statistics of rare but consequential events are part of ordinary planning rather than an abstraction. Any household that has thought seriously about preparedness already understands intuitively that the cost of missing a warning and the cost of a false alarm are not the same number. That intuition is exactly what the mathematics formalises, and a student who has it absorbs this stage noticeably faster.

To be clear about what we do and do not do: we teach the statistics of rare events, on data the student generates or collects themselves. We do not use disaster records, casualty or damage data, or anything concerning identifiable people or properties. The subject is the reasoning, and it is taught with the seriousness the reasoning deserves.

| If the event happens on 1 day in 100 | A model that always says no | A model that is actually useful |
| --- | --- | --- |
| Accuracy | 99 per cent | Possibly lower |
| Times it predicted the event | Never | Sometimes, and sometimes wrongly |
| Missed events | All of them | Few |
| False alarms | None | Some, deliberately |
| Worth deploying | No | Yes, if the costs were weighed |

What a student actually does

## Six steps to a model whose number means something

In Python, on a small dataset the student built, so that they know the ground truth and can therefore discover that they are wrong.

1. #### Build a dataset where you know the answer

  The student generates or collects it themselves, with the rare outcome deliberately rare. Knowing the ground truth is not a convenience; it is the only way a learner can ever discover that their model is confidently wrong, which is the experience the whole stage is for.
2. #### Train something, and celebrate the wrong number

  A first classifier and its accuracy. It will look excellent. We let it stand for a few minutes, because a student who has felt pleased about a meaningless figure remembers the correction far better than one who was warned in advance.
3. #### Count what it actually predicted

  Not the score, the predictions. How many times did it say yes? Frequently the answer is zero, and the room goes quiet. This is the moment the stage exists to produce and it does not need explaining once it has happened.
4. #### Learn the four boxes, then the two ratios

  Correct yes, correct no, false alarm, missed event. From those come precision and recall, which are not jargon but two different questions: when it says yes how often is it right, and of all the real events how many did it catch? A student who can say which of those matters for their problem has understood the subject.
5. #### Weigh the two mistakes against each other

  A false alarm and a missed event almost never cost the same, and no formula tells you the ratio: that is a judgement about consequences, made by a person. This is where the subject stops being mathematics and becomes engineering, and where students most often change their mind about what they were optimising.
6. #### Publish it with the confusion matrix in the open

  Not just the headline figure. The four boxes, the two ratios, the threshold chosen and why. A project that shows its own confusion matrix reads as engineering; one that shows only accuracy reads as somebody hoping nobody asks.

The mathematics, honestly

## What is genuinely required, and when it turns up

Parents ask this first and the answer is less frightening than the marketing on either side suggests.

| The idea | What it is for | When it arrives |
| --- | --- | --- |
| Fractions and percentages | Reading precision and recall without being misled | Immediately |
| Averages and spread | Knowing whether a result is unusual at all | Early |
| Coordinates and lines | Seeing what a simple model is actually fitting | Middle of the quarter |
| Arrays and shapes | Why data sizes have to agree, and what breaks when they do not | Middle of the quarter |
| Probability, informally | How confident a classifier is entitled to be | Late, and only informally |

Nothing beyond ordinary school arithmetic is needed to start. Each idea above is introduced at the point where it explains something the student has already watched happen on their own screen, which is a completely different experience from meeting it as a chapter. If the blocker turns out to be the mathematics rather than the code, the honest fix is to address that directly, and we teach mathematics as its own subject at every level.

On syllabuses that list twenty algorithms

## Three are enough, and the fourth is a distraction

A long list of algorithm names is the easiest way to make a course look advanced and one of the least useful things to give a school student. Here is what we actually teach and why the rest waits.

### Linear regression

Predicting a number. It is transparent enough that a student can read the fitted line and say what it claims, which makes it the only sensible first model. Almost every mistake a beginner will ever make is visible in a linear fit, which is precisely why we start there rather than somewhere more impressive.

### Logistic regression, or a small tree

Predicting a category, which is where class imbalance and the four boxes live. A decision tree has the advantage that a student can print it out and read the rules the machine invented, and reading a rule you did not write is one of the more formative experiences in this subject.

### A baseline, which is not an algorithm

Always predict the average, or always predict no. One line of code, no learning at all, and it is the number every model has to beat before anybody is allowed to be pleased. Most school projects skip it, which is why most school projects report figures that mean nothing.

Neural networks come later and they come after a student can already say why their simpler model failed, because otherwise a network is just a more expensive way of not understanding the problem. The same applies to the fashionable end of the subject: a learner who can evaluate a linear model honestly will be dangerous with a transformer in two years, and one who cannot will not be, whatever they were shown at fourteen.

Where this sits

## Quarter three of a twelve-month year

Machine learning is the third of four quarters, and it is third for a reason rather than for pacing.

A student cannot evaluate a model without data handling, because every interesting error lives in the data. And they cannot build anything trustworthy on top of a model they cannot measure. Put the modelling first and you produce somebody who can run a notebook and cannot say whether the output means anything.

The full year is on [the track page](/python-and-ai-track-for-students-bahamas), and the first two quarters are Python and data.

After this comes shipping it: a project running at a public address with its error and its limits written down, which is [the portfolio page](/github-portfolio-for-students-bahamas). For students who want the agent layer specifically, the site-wide [AI agents course](/ai-agents-course) goes considerably deeper than a quarter allows.

For a Bahamian family weighing this against the free national platform: Upskill Bahamas carries AI courses and is open from age sixteen. Below that age this is what exists, and the reasoning is on [the Nassau page](/coding-and-ai-classes-in-nassau).

One practical note for families comparing this against a school computing subject. Nothing on this page is on a Bahamian syllabus and it is not trying to be. A school course teaches a student what a computer does; this teaches them how to find out whether a claim about data is true, which is a narrower skill with a much wider application. A student who can look at a headline figure and ask what it was measured against has been given something that outlasts every framework and every model architecture they will meet later. That question is the whole of the subject compressed into six words, and it is the one we care most about them leaving with.

What families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

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

Fees

## What this stage costs

The same figure as every other stage, because moving up the track does not change what you pay. Charged monthly in US dollars, identical in every country we teach outside India.

Free first class

USD 0

no card required

- Taught, not sold
- It settles which stage the learner starts at
- You watch it, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher throughout
- Live video, never a recording
- Weekly build work reviewed by the teacher
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching at your own pace
- The only way to get a weekday morning slot
- Syllabus shaped to the goal

Enquire

Questions about machine learning

## What Bahamian families ask about this stage

### Is twelve really old enough for machine learning?

For this version of it, yes, and it depends on the two stages beneath rather than on the birthday. A student needs Python they wrote themselves and some experience of data that was not tidied for them. Given those, the ideas on this page are well within reach at twelve, because none of them require calculus: they require careful counting and a willingness to be wrong.

### Does this need an expensive computer?

No. Everything here runs on an ordinary laptop with free libraries, on datasets small enough that a student can inspect them by hand. If a provider tells you a twelve year old needs a graphics card, they have pointed the child at a problem too large for them to check, which is the wrong direction entirely.

### How much mathematics is involved?

Less than parents fear, and later. Nothing beyond school arithmetic is needed to start. Over the quarter a student meets fractions and percentages properly, averages and spread, coordinates and lines, and eventually probability handled informally. Each arrives when it explains something already observed on screen, which is a very different thing from meeting it as a chapter to revise.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one teaching is USD 150 a month, billed in US dollars, the same flat figures everywhere outside India. There is no enrolment fee, no annual contract, and the first class is free without a card.

### Do students work with real hurricane or weather data?

We teach the statistics of rare events, which is why this stage exists, and we do it on data the student generates or collects themselves. We do not use disaster records, casualty or damage data, or anything concerning identifiable people or properties. The reasoning is the subject and it deserves to be taught seriously rather than dramatically.

### What is the difference between this and an AI course that uses ChatGPT?

One is operating a finished product and one is building and evaluating a system. Both are useful and we teach both. The distinction is what happens when the output is wrong: a student who has only prompted can rephrase and hope, while a student who has trained and measured something can say how often it is wrong and under what conditions. The second is what this stage produces.

### Is this on the BGCSE syllabus?

No, and we will not imply otherwise. Nothing in this track appears on a BJC or a BGCSE. Where it sits alongside those examinations, including the years when the honest advice is to reduce or pause, is set out on its own page. What tends to transfer is the habit of asking what a number is compared to, which shows up in science and data-handling questions.

### Can an adult do this stage on its own?

Yes, and adults often should. Ages six to sixty-seven are taught. An adult who already works with spreadsheets has most of the mental model for the data stage and simply lacks the syntax, so the route compresses considerably. Those learners usually go one to one so the syllabus can bend entirely around what they actually need it for.

### What does my child have at the end of the quarter?

A trained model, its confusion matrix, its precision and recall, the threshold they chose and their written reason for choosing it, all in a public repository. That combination is unusual for a school-age student and it is far more persuasive to a technical reader than a higher accuracy figure with nothing behind it.

### What happens after we send the form?

A mentor telephones you at a Bahamian hour to arrange the free session. Nothing is charged and no card is requested. Sending the form opens a conversation rather than an enrolment. Whether your child is ready for this stage, or should spend a term on the one below it, is settled on that call before money is mentioned.

Start here

## One task, and an honest answer about readiness

The free first session establishes whether the two stages beneath machine learning are actually in place, because that is what decides whether this quarter will work rather than frustrate. A learner attempts one problem while the teacher watches the approach. If the answer is that Python or data handling needs a term first, you will be told that, even though it is the slower sale.

Rather read first? [The twelve-month track](/python-and-ai-track-for-students-bahamas), [the Nassau page](/coding-and-ai-classes-in-nassau), or the site-wide [maths behind machine learning](/maths-behind-machine-learning).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders%2C%20I%20want%20a%20free%20class%20for%20a%20student%20in%20the%20Bahamas%20who%20wants%20to%20learn%20machine%20learning.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere in the Bahamas. Every session is a live video call taught from India, and the number above rings in India.

## Keep exploring Modern Age Coders

### Coding classes in nearby places

- [Coding and AI Alongside BJC and BGCSE in The Bahamas](/coding-and-ai-alongside-bjc-and-bgcse-bahamas)
- [Year-Round Coding Classes vs Summer Camps in The Bahamas](/year-round-coding-classes-vs-summer-camps-bahamas)
- [The 12-Month Python and AI Track for Bahamian Students](/python-and-ai-track-for-students-bahamas)
- [One to One Coding Classes in Nassau](/one-to-one-coding-classes-in-nassau)
- [Coding Competitions for Students in The Bahamas](/coding-competitions-for-students-bahamas)

### Learn more

- [Orange Data Mining Course for College Students](/courses/orange-data-mining-machine-learning-course-for-college-students)
- [Data and AI Analytics for Non-Programmers (Excel, Sheets, Power BI)](/courses/data-and-ai-analytics-for-non-programmers-course)
- [How to Build AI Models](/how-to-build-ai-models)
- [AI Projects for High School Students](/ai-projects-for-high-school-students)

### Free resources

- [AI & Machine Learning Tutorial: Basics to Deep Learning](/resources/ai-and-machine-learning)
- [MLOps and Model Deployment](/resources/ai-and-machine-learning/ml-ops-and-model-deployment)
- [Recurrent Neural Networks (RNN) and LSTM](/resources/ai-and-machine-learning/recurrent-neural-networks)
- [Unsupervised Learning](/resources/ai-and-machine-learning/unsupervised-learning-clustering)

### From the blog

- [AI & Machine Learning Guides](/blog/topic/ai)
- [Best Data Science Courses in India for Students and](/blog/data-science-course-india)
- [Best AI Coding Tools for Students in 2026](/blog/best-ai-coding-tools-for-students-2026)
- [Data Science, AI, and Math: Skills Every Tech Professional Must Learn](/blog/data-science-ai-math-skills-professionals)

### Start here

- [Browse every live course at Modern Age Coders](/courses)
- [Try a free trial class with a Modern Age Coders mentor](/free-trial)

[Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/ai-and-machine-learning-classes-in-bahamas*
