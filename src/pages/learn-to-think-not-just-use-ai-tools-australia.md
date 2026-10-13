---
title: "Learn to Think, Not Just Use AI Tools | Australian Students"
description: "For Australian students using AI: what the curriculum says about prompting, how many AI answers to check before trusting a batch, and how to think alongside AI."
canonical: https://learn.modernagecoders.com/learn-to-think-not-just-use-ai-tools-australia
source: src/pages/learn-to-think-not-just-use-ai-tools-australia.html
---
> Learning to think with AI means understanding how a tool produces its answer, checking that answer, and being able to solve the problem without it. The Australian Curriculum already includes writing prompts and refining output "to improve its correctness". Because no one can check every answer, students also need to know how many to spot-check: if 4 of 40 AI answers are wrong, checking 17 at random gives at least a 90% chance of catching one.

[Home](/) / [Courses](/courses) / [Coding classes in Australia](/coding-classes-in-australia) / Think, not just use AI

Australia · Years 5 to 12 and adults · AI with judgement

# Learn to think, not just use AI tools

An AI chatbot will write a paragraph, a program or a maths solution in seconds, and most of the time the result looks convincing. The skill that matters now is not getting an answer; it is knowing whether the answer is right, and knowing what you would have done without it. Australian schools are already teaching students to write prompts. This page sets out what the curriculum actually asks for, what the AI companies themselves say about age, and a piece of mathematics that answers a question every student should ask: if I cannot check every answer, how many do I need to check before I trust the rest?

At a glance: For: Students from about Year 5, and adults; Focus: Understanding and checking AI; Builds: Programs that test AI answers; Curriculum: Digital Technologies, Years 7 to 10; Age rules: Followed for every AI tool; Format: Live online video; Group: Fifteen to twenty, or one to one; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Three courses that put understanding first

Matched to age and to the AI tools each age may use. The free first lesson confirms the right one.

- [How AI works, for children](/courses/ai-literacy-for-kids-course): Ages 8 to 14. What AI learns from, where it goes wrong, and how to check it, without needing an adult-only chatbot.
- [AI tools with judgement, for teens](/courses/teens-ai-tools-mastery-course): Ages 13 and up. Prompting, checking and citing, using tools whose terms allow teenagers.
- [Building the models yourself](/courses/ai-ml-masterclass-teens): Teens ready for Python. Train small models and see exactly where their answers come from.

## What Australian classrooms already ask of students

Prompting is not a fringe skill in Australia. The Australian Curriculum v9 names it in Digital Technologies for Years 7 and 8, alongside the expectation that students improve the correctness of what a model produces.

**AI in the Australian Curriculum v9, Digital Technologies 7 to 10, as published**

| Where | Code | The curriculum's words |
|---|---|---|
| Years 7 and 8, elaboration | AC9TDI8P11 | "using effective prompts with generative AI models to create output that is better suited to the problem being solved" |
| Years 7 and 8, elaboration | AC9TDI8P11 | "using a progressive series of prompts with generative models to refine output to improve its correctness" |
| Years 9 and 10, elaboration | AC9TDI10P11 | "locating relevant content by using Boolean operators or artificial intelligence search features of search engines" |
| Years 7 and 8, band description | None | "Students check their solutions meet the specifications by testing and debugging their algorithms" |

### The word that matters

Look closely at the second line. The curriculum does not stop at writing a prompt; it expects students to refine the output "to improve its correctness". That assumes the student can tell when the output is wrong.

Telling right from wrong is a thinking skill, and it depends on understanding the subject well enough to notice a mistake.

### Testing is the same habit

The band description for Years 7 and 8 asks students to check their own solutions "by testing and debugging". Checking an AI's answer is the same discipline applied to someone else's work.

A student who tests their own code habitually is already halfway to checking an AI properly.

Source, read 7 October 2026: ACARA, [Australian Curriculum v9, Digital Technologies content, Years 7 to 10](https://www.australiancurriculum.edu.au/content/dam/en/curriculum/ac-version-9/downloads/technologies/digital-technologies/technologies-digital-technologies-curriculum-content-7-10-v9.docx) (Word file). Elaborations are examples of how a content description may be taught, not compulsory content.

## Which AI tools a student is allowed to use

Thinking well about AI starts with using the right tool for your age. The companies and the education system each set their own lines, and they are not all the same.

**Age lines we read at source**

| Who says it | What they say |
|---|---|
| Anthropic, consumer terms for Claude | "You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher." |
| Digital Technologies Hub, AI implementation module for teachers | Strategies "for integrating GenAI with students (age 13+)" |
| Our courses | Children under 13 learn how AI works through activities that need no adult-only accounts |

### Why we teach AI to children without chatbots

AI tools set their own minimum ages, and Claude's is 18. We follow each tool's current terms, which shapes how we teach younger students.

Children aged 8 to 12 learn how a model learns from examples, train small classifiers in child-safe tools, and practise checking outputs, without signing up to any adult service.

### Free teacher modules

The Digital Technologies Hub offers teachers nine modules on AI "designed to build understanding of AI concepts such as Generative AI, machine learning and bias, responsible AI, programming and ethics", with no log-in required.

If your school uses them, our lessons will feel familiar; if it does not, they are a useful read for parents too.

Sources, read 7 October 2026: [Anthropic consumer terms](https://www.anthropic.com/legal/consumer-terms) and [Digital Technologies Hub, Explore AI in education](https://www.digitaltechnologieshub.edu.au/ai/professional-learning/explore-ai-in-education/). Terms change; always check the current terms of any tool before a child signs up.

## How many AI answers do you need to check?

Suppose an AI has produced 40 answers for you: worked solutions, translations, or lines of code. Checking all 40 defeats the purpose of using it. Checking two feels too few. Factories face the same question with batches of parts, and the answer has a name: acceptance sampling.

**Chance of catching at least one wrong answer, checking n of 40 at random (our calculation)**

| Wrong answers in the batch | Check 3 | Check 5 | Check 10 | Check 20 |
|---|---|---|---|---|
| 1 of 40 | 7.5% | 12.5% | 25.0% | 50.0% |
| 2 of 40 | 14.6% | 23.7% | 44.2% | 75.6% |
| 4 of 40 | 27.7% | 42.7% | 70.0% | 94.7% |
| 8 of 40 | 49.8% | 69.4% | 92.4% | 99.8% |

### What the table says

If 4 of the 40 answers are wrong and you check 5, you have only a 42.7% chance of spotting even one mistake. More often than not, a quick glance passes a batch that contains four errors.

To reach a 90% chance of catching at least one mistake in that batch, you need to check 17 answers. With 8 wrong, 10 checks are enough; with 2 wrong, you need 27.

### The mathematics

The chance of missing every wrong answer is the number of ways to choose your checks from the correct answers, divided by the number of ways to choose them from all 40. One minus that is the chance of catching at least one.

In Python it is a single line using math.comb: 1 - comb(40 - k, n) / comb(40, n). Students in Years 9 and 10 can derive it; younger students can simulate it by drawing cards.

**The thinking lesson** A few spot-checks catch a tool that is often wrong, but they rarely catch one that is occasionally wrong. The rarer the mistakes, the more you have to understand the subject yourself, because sampling alone will not save you.

## Five habits that keep the thinking yours

These are the habits we build in every course that touches AI, at every age.

### Predict first

Before asking an AI, write down what you expect the answer to look like. A prediction turns a surprising answer into a question rather than an acceptance.

### Ask why

For any answer you keep, be able to explain why it is right in your own words. If you cannot, you have borrowed it, not learned it.

### Check at random

When you cannot check everything, check a random sample, not the first few. Errors are not polite enough to sit at the top of a list.

### Solve one by hand

Every so often, solve a problem without the tool. It keeps the skill alive and gives you a benchmark for the tool's answers.

### Know the limits

Learn what kinds of question a tool handles badly, such as exact arithmetic, recent events or sources it cannot see.

### Own the result

Whatever you submit or ship is yours. Schools and employers judge the work, not the tool that helped.

For assessed school work, each state's rules decide what AI use is allowed, and the work must be the student's own. We teach the understanding and the checking; we never write a student's assessed work. For a deeper look at reading and owning code, see our page on [understanding the code rather than copying it](/understand-the-code-dont-copy-paste-australia).

## From AI user to AI thinker

A progression we see in students who learn to work with AI well.

**Four stages of thinking with AI**

| Stage | What the student can do |
|---|---|
| 1. Use | Get a useful answer from a tool appropriate for their age |
| 2. Doubt | Notice when an answer looks wrong, and say why |
| 3. Check | Test answers systematically, including by random sampling |
| 4. Build | Write programs, and train small models, that do the checking |

### For younger students

The first two stages come through activities and games, without adult-only accounts.
Children learn that a computer can be confidently wrong, which is the most useful lesson of all.

### For teenagers and adults

Stages three and four involve real code: test harnesses, sampling programs and small models whose every decision can be inspected.
By then the AI is a tool the student directs, not an oracle they obey.

## Nine courses about understanding AI, not just using it

Grouped by age. The free first lesson places each student.

### Children

Ages 8 to 12

- [What AI is and is not](/courses/ai-literacy-for-kids-course): Activities that show how machines learn.
- [Python projects with AI inside](/courses/python-ai-kids-masterclass): Small, checkable AI programs.
- [Thinking before computing](/courses/problem-solving-and-computational-thinking-for-kids): Logic that makes checking possible.

### Teenagers

Ages 13 to 18

- [Prompting, checking, citing](/courses/teens-ai-tools-mastery-course): AI tools used with judgement.
- [Models you train yourself](/courses/ai-ml-masterclass-teens): From data to a working model.
- [Data before conclusions](/courses/data-science-course-for-teens-python-data): Python for real datasets.

### Adults

18 and over

- [AI tools for work](/courses/ai-tools-mastery-complete-college): Productive, checked, accountable.
- [How LLM systems are built](/courses/complete-generative-ai-masterclass-college): Retrieval, agents and evaluation.
- [Automation you can audit](/courses/python-ai-automation-masterclass-college): Scripts with applied AI.

## Lessons where the student explains every answer

Whether or not an AI tool is involved, the student does the thinking, out loud, with a teacher listening.

- **After school** Weekday afternoons in your state.
- **Evenings** For senior students and adults.
- **Weekends** Saturday and Sunday options.

- **Predict, then run** Students say what they expect before any code or tool runs.
- **Explain it back** An answer counts only once the student can explain it.
- **Age-appropriate tools** We follow each tool's terms on minimum age.
- **Groups** Fifteen to twenty students, or one to one.
- **Their own work** Teachers question and guide; they do not do the work.
- **Real checks** Students write tests and samplers, not just opinions.

## Fees

Outside India we charge a single monthly fee in US dollars, identical across countries. Joining costs nothing extra and no term contract applies, so you may stop at the close of any month.

- Free first class: USD 0. A first lesson that costs nothing. A clear recommendation from the teacher. No card details asked.
- Group batch: USD 100 a month. Fifteen to twenty students. One teacher all the way through. Grouped by age and level. Monthly, no lock-in.
- One to one: USD 150 a month. A teacher for one student. Scheduled around school. Paced to the learner.

## Common questions about thinking with AI

### What does learn to think, not just use AI tools mean?

It means understanding how an AI tool reaches its answer, checking that answer properly, and keeping the ability to solve the problem without the tool, so the student directs the AI rather than depending on it.

### What is acceptance sampling?

Acceptance sampling is a way of deciding whether to trust a batch of items by checking a random sample of them. Applied to AI, it tells you how many answers to check: with 4 wrong in 40, checking 17 at random gives at least a 90% chance of catching one.

### Does the Australian Curriculum teach students to use AI?

Yes. The Australian Curriculum v9 includes elaborations in Digital Technologies for Years 7 and 8 about using effective prompts with generative AI and refining output to improve its correctness.

### How old do you have to be to use AI chatbots?

It depends on the tool. Anthropic's consumer terms for Claude require users to be at least 18. Other tools set their own minimum ages, so always check the current terms before a child signs up.

### Can children under 13 learn about AI with you?

Yes. Children aged 8 to 12 learn how AI works through activities and child-safe tools that need no adult-only accounts.

### Will you help my child use AI for school assignments?

We teach understanding and checking. We never write a student's assessed work, and each state's rules decide what AI use is allowed in assessments.

### Why not just trust AI tools since they are usually right?

Because "usually" hides the problem. If a tool is wrong only occasionally, a few spot-checks rarely catch it, so the student must understand the subject well enough to notice errors.

### Does my child need to know coding first?

No. Younger students start with activities and Scratch; programming in Python comes later, when they write programs that test AI answers.

### Are lessons live?

Yes. Every lesson is live over video with a teacher, in small groups or one to one, at times set for your state.

### How much do the courses cost?

The first lesson is free. After that, fees are monthly with no joining fee and no term commitment, as shown in the fees section on this page.

## Related pages

- [Coding classes in Australia](/coding-classes-in-australia): Our main page for Australian families.
- [Understand the code, do not copy-paste](/understand-the-code-dont-copy-paste-australia): Owning what you submit.
- [Learn to train AI](/learn-to-train-ai-not-just-prompt-it-australia): Building models rather than prompting them.
- [AI courses for kids](/ai-courses-for-kids-australia): AI for primary-age children.
- [AI classes for teens](/ai-classes-for-teens-australia): AI for secondary students.
- [HSC Software Engineering](/hsc-software-engineering-help): For NSW senior students.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-to-think-not-just-use-ai-tools-australia](https://learn.modernagecoders.com/learn-to-think-not-just-use-ai-tools-australia#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
