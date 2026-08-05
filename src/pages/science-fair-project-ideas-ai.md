---
title: "AI Science Fair Project Ideas That Follow the Actual Rules"
description: "AI science fair project ideas built around a testable question rather than an app demo, with the real ISEF rules: win an affiliated fair first, 12 month research cap, teams of up to three. Includes how to write the hypothesis."
canonical: https://learn.modernagecoders.com/science-fair-project-ideas-ai
source: src/pages/science-fair-project-ideas-ai.html
---

> An AI science fair project is judged as science, which means it needs a question, a method, controls and a result, not simply working software. Regeneron ISEF is not open entry: finalists qualify by winning a Society-affiliated fair, and projects may include no more than 12 months of continuous research. Teams are capped at three members.

# AI science fair projects built around a question, not a demo.

The most common reason a strong AI build does badly at a science fair is that it is a product, and a fair is judging science. Same code, different framing, completely different result.

## The short version

- A fair judges a question and a method. "I built an app" is not a question.
- ISEF is qualified into, not entered. Finalists come through 365 affiliated fairs across more than 60 countries.
- The research window is capped at 12 months of continuous research, so an early start does not mean an earlier start is always better.
- Team projects are limited to three members.
- The strongest school AI fair projects use data the student collected, and state clearly what the result does not prove.

## The rules people find out about too late

- **ISEF is not open entry** (Qualify first): Students in grades 9 to 12 must compete in and win through a Society-affiliated fair to earn a place. Finalists are drawn from 365 affiliated fairs in more than 60 countries and territories. Source: Society for Science, ISEF, https://www.societyforscience.org/isef/
- **A hard cap on continuous research** (12 months): Each project may include no more than 12 months of continuous research. Work stretching over several years has to be scoped and presented carefully against this rule. Source: Society for Science, rules for all projects, https://www.societyforscience.org/isef/international-rules/rules-for-all-projects/
- **Team size is capped** (Max 3): Team projects may have no more than three members. Larger groups have to split the work into genuinely separate projects. Source: Society for Science, ISEF rules, https://www.societyforscience.org/isef/international-rules/
- **It is genuinely international** (Global): The fair draws roughly 1,700 finalists, with a substantial majority of participating countries outside the United States, so students abroad have a real path in through their national or regional affiliate. Source: Society for Science, ISEF FAQ, https://www.societyforscience.org/isef/faq/

## Fourteen AI fair projects with a real hypothesis

### Category A: Model behaviour questions (Cheap to run, strong science)

- **Does more training data help less than better labels?**: Hold the model fixed. Compare a large noisy dataset against a smaller carefully labelled one, and measure where each wins. Why it holds up: A clean two-variable experiment with a genuinely uncertain answer. Judges like uncertainty.
- **How much can you shrink a model before it breaks?**: Progressively reduce a model and plot accuracy against size, identifying the point where performance collapses rather than declines. Why it holds up: Produces a curve, and a curve with a knee in it is a finding.
- **Does image augmentation help on your own photographs?**: Test whether standard augmentation techniques improve results on a dataset you collected, where the assumptions may not hold. Why it holds up: Testing a standard technique on non-standard data is a legitimate small research question.
- **Which errors does the model make that a human never would?**: Classify the failure cases and test whether human annotators make the same mistakes on the same inputs. Why it holds up: Comparing to human performance gives you a control group, which fairs reward.
- **Does the model rely on the thing you think it does?**: Occlude or remove parts of the input systematically and measure what actually drives the prediction. Why it holds up: Often produces a surprising answer, and surprise is what makes a judge remember a board.

### Category B: Applied questions with local data (You collect the data)

- **Can a phone camera classify local water quality indicators?**: Collect samples with known measurements, photograph under controlled lighting, and test how well colour alone predicts the reading. Why it holds up: Local, testable, and the controls for lighting are exactly the rigour judges look for.
- **Does air quality near your school follow the pattern the public sensor claims?**: Deploy your own sensors, compare against the nearest official station, and quantify the disagreement. Why it holds up: Comparing against an authoritative source is a proper method with a clear result.
- **Can leaf photographs predict disease earlier than visible symptoms?**: Photograph the same plants over weeks, label by eventual outcome, and test whether the model detects it before a person can. Why it holds up: The time dimension gives you a genuine claim: earlier than the human baseline, or not.
- **Does a model trained on one accent work on yours?**: Test a speech model against recordings in your local accent and quantify the performance gap. Why it holds up: A measurable, socially meaningful gap that you are well placed to document.
- **Can sound alone identify local bird species?**: Record in your area, label with expert help, and report which species are separable and which are not. Why it holds up: Ecology fields love this, and the confusions between similar species are the interesting result.

### Category C: Method and fairness questions (Design the measurement)

- **Does the order of examples change what a language model answers?**: Hold the content fixed, vary the order, and measure how much the answer moves. Why it holds up: A simple, rigorous test of a property people assume is stable.
- **Can a model detect its own uncertainty usefully?**: Measure whether a model's confidence score actually predicts whether it is right, across many cases. Why it holds up: Calibration is a real research area and the experiment is within reach at school level.
- **Does a fairness fix reduce bias or move it?**: Apply a published mitigation technique and measure whether the disparity shrinks overall or shifts to a different group. Why it holds up: The honest answer is often uncomfortable, and honest uncomfortable answers score well.
- **How little labelled data do you actually need?**: Plot performance against labelled examples to find the point of diminishing returns for your specific task. Why it holds up: Practical, quantitative, and the resulting curve is a genuine contribution for that task.

## What a fair board needs that an app demo does not

- **A falsifiable question**: Written so that a specific result would prove you wrong. If no outcome could disprove it, it is not a hypothesis.
- **A control or baseline**: What you are comparing against. Without a comparison there is no result, only a number.
- **A documented method**: Detailed enough that another student could repeat it and get the same answer.
- **Data you can account for**: Where every data point came from, how many you discarded, and why. Judges ask this.
- **Statistics, not vibes**: Repeat runs, variation reported, and a clear statement of whether the difference you found is meaningful.
- **Stated limitations**: What your result does not prove. Volunteering this is one of the strongest signals available to a school student.

## A season, working backwards

- **Before you start - Find your affiliated fair**: Locate the Society-affiliated fair that serves your region and read its rules and dates. This decides everything downstream.
- **Month 1 - Write the question and the method**: Before any code. If the question cannot be answered wrongly, rewrite it.
- **Months 2 to 4 - Collect data and build the pipeline**: Usually the longest phase, and the one students underestimate most.
- **Months 5 to 7 - Run the experiment properly**: Repeat runs, record variation, and resist changing the question to match the result.
- **Month 8 - Write it up and build the board**: Method, results, limitations. The board is a summary of the work, not the work itself.
- **Final weeks - Rehearse being questioned**: Judges interview you. Practise answering "how do you know?" about every claim on the board.

## How Modern Age Coders helps

Our mentors work with the student on the question first, then the build, then the analysis. The insistence on a baseline, repeat runs and a written limitation is where a fair project separates from a school assignment.

Our Portfolio Program pairs a student with a mentor for a full build: version control from day one, a working demo, a written build log, and a mock technical interview where the student defends the work. Students who are not ready for a full project usually start with one of our regular courses first.

We are a coding and maths school. We do not offer admissions consulting, we do not write applications, and we do not promise admissions outcomes.

## Fees

Coding classes are $100 per month for international group classes and $150 per month one to one. In India they are ₹1,499 group, ₹2,999 mini batch and ₹7,500 one to one, per month. Project work happens inside regular classes, so there is no separate portfolio charge. Full pricing: https://learn.modernagecoders.com/pricing

## Student projects

- **GuardianX, an AI safety layer for the internet**: A student build aimed at filtering harmful content. The interesting engineering is in the false positives, and the student can explain them.
- **HairSync, an AI hairstyle try-on**: Image manipulation where the output is judged by eye, so the student had to define what good even meant.
- **Life Span Tracker**: Date arithmetic, which is one of the classic places beginner code quietly goes wrong.
- **SkyCast, a weather forecast app**: Third-party API, error states, and what to show when the network fails. Unglamorous, and exactly what reviewers probe.

More at https://learn.modernagecoders.com/student-labs

## FAQ

### How does a student qualify for ISEF?

By competing in and winning through a Society-affiliated local, regional, state or national fair. Finalists come from 365 affiliated fairs across more than 60 countries. There is no route that skips the affiliated fair.

### Can international students compete at ISEF?

Yes. The affiliate network spans more than 60 countries and territories, and a large share of finalists come from outside the United States. Find your national or regional affiliate first.

### How long can the research take?

A project may include no more than 12 months of continuous research. Longer programmes of work need to be scoped so that the entered project falls inside that window.

### Can students work in teams?

Yes, up to three members per team project.

### What makes an AI project suitable for a science fair rather than a hackathon?

A fair judges a question, a method, controls and a result. A hackathon judges a working build. The same model can serve both, but the fair version needs a hypothesis that could have been proved wrong.

### Does the project need to be original research?

It needs a question you answered yourself with a method you can defend. Testing an established technique on data you collected in your own area is legitimate and often stronger than an over-ambitious novel claim.

### What if the hypothesis turns out to be wrong?

That is a result. Judges respond well to a clean experiment with a negative result and an honest discussion. Changing the question after seeing the data is the thing to avoid.

### Can Modern Age Coders help with a fair project?

We teach the coding and the experimental design, live and with a mentor. We do not do the project for the student, and a project a student cannot explain would defeat the purpose.

## Contact

- WhatsApp or call: +91 91233 66161
- Email: contact@modernagecoders.com
- Or send your enquiry through the form at /science-fair-project-ideas-ai

## About Modern Age Coders

Live online coding and maths classes since 2020, taught to 10,000+ students across 25+ countries, ages 6 to 67. Rated 4.9 across 547 Google reviews.
