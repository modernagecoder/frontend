---
title: "Learn to Think, Not Copy AI: Coding Classes in Germany"
description: "Coding and maths classes in Germany that teach children to think, not copy AI: what the KMK asks of pupils using AI, and an exercise in checking answers."
canonical: https://learn.modernagecoders.com/learn-to-think-not-copy-ai-germany
source: src/pages/learn-to-think-not-copy-ai-germany.html
---
> Learning to think, not copy AI means a learner plans a solution, predicts what it will do, tests it and can explain it, and treats any AI answer as a claim to check. Modern Age Coders teaches coding and problem solving this way for children and teenagers in Germany, live online in English, in a group or one to one, starting with the Python and AI for kids course.

[Home](/) / [Courses](/courses) / [Coding classes in Germany](/coding-classes-in-germany) / Think, not copy AI

Germany · Think, not copy · Ages 8 to 18

# Learn to think, not copy AI

A chatbot can produce a working answer to most homework questions in seconds. That is exactly why the habit of thinking a problem through yourself is now worth more, not less. German education ministers say much the same in their own documents. This page explains what they ask of pupils, shows in one short program how a confident answer can be right this year and wrong last year, and describes how our classes build the habit of checking.

At a glance: Teaching language: Live classes in English only, at the learner&rsquo;s own pace; mentors speak clearly and match their speed and accent to the learner; For: Children and teenagers, 8 to 18; Covers: Python, algorithms, simple AI; Habit: Predict, test, explain; Group size: Fifteen to twenty, or one to one; Times: German afternoons and weekends; First class: Free, no card needed. Rated 4.9 across 547 Google reviews.

## Three courses where thinking comes first

Each starts with the learner's own reasoning and adds tools only when the reasoning is there.

- [Python and AI for kids](/courses/python-ai-kids-masterclass): Ages 8 to 14. Real Python, small programs that learn from data, and the question "how would we know if it is wrong?" in every class.
- [Problem solving and computational thinking](/courses/problem-solving-and-computational-thinking-for-kids): Puzzles and patterns that train breaking a problem down before writing a line of code.
- [AI literacy for kids](/courses/ai-literacy-for-kids-course): What AI is, where it fails, and how to check an answer, without needing an adult-only chatbot account.

## What do German education ministers say about AI in learning?

On 10 October 2024 the education ministers of the Länder adopted a recommendation on how schools should handle artificial intelligence. It is a careful document, and on one point it is very clear: the aim is pupils who can judge AI, not pupils who only use it.

### No ban, but judgement

The recommendation states that a general ban on using AI for homework is neither useful nor desirable nor enforceable, given the world pupils live in. Instead, teachers and pupils are to agree how AI may be used and how AI-generated work is marked as such.

In learning about AI, the KMK says, what matters is being able to assess the quality of AI results and their effects, including from an ethical point of view.

### Exams that show your own work

Where a pupil uses AI to make something and then presents it, the recommendation asks that the defence also assess how skilfully the pupil worked with the AI and how well they can reflect on the results.

Exam formats that cannot legally guarantee the independent work a task demands are to be abolished or fundamentally reworked. Marking, the KMK adds, is and remains a task for teachers.

The document also records a disagreement worth knowing. The KMK's own scientific commission, the SWK, published a paper on large language models on 17 January 2024 and recommended largely doing without AI language models in primary school and the first years of lower secondary. The ministers call that recommendation one that needs discussion, given the potential of adaptive learning tools. In other words, the experts and the ministers agree that judgement matters and disagree on how early tools should arrive.

Source: KMK, Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in schulischen Bildungsprozessen, Beschluss der Bildungsministerkonferenz vom 10.10.2024, revised edition March 2025, read 3 November 2026. Our English summaries; the German text is the authority.

## What does the KMK's 2026 AI framework expect pupils to do?

On 16 October 2026 the KMK adopted an update of its competence framework Bildung in der digitalen Welt for the age of AI. The six areas from 2016 stay the same; AI is added inside them, under four headings: dealing with AI consciously, using it creatively, using it purposefully and helping to shape it. Five of the new lines describe exactly what we mean by thinking, not copying.

**Five AI-related competences in the KMK framework of 16 October 2026, and how they look in a coding class**

| No. | The KMK's words | In plain English | In our classes |
|---|---|---|---|
| 1.2.1 | reflektierte Einordnung KI-generierter Ergebnisse sowie möglicher Verzerrungen | Judge AI results and spot bias | Every answer, ours included, gets tested before it is believed |
| 1.2.2 | Informationsquellen auch im Abgleich mit Primärquellen analysieren | Check against the original source | We compare a claim with the law, the data or the documentation itself |
| 2.2.2 | transparente Kennzeichnung KI-generierter und -überarbeiteter Beiträge | Say openly what AI made | Learners mark any code they did not write themselves |
| 3.2.2 | KI-unterstützte Ergebnisse prüfen, anpassen und begründet in eigene Produkte einbinden | Check, adapt, and justify what you use | A line of code stays only if the learner can explain it |
| 5.5.1 | zentraler Konzepte maschinellen Lernens sowie deren Grenzen | Know how machine learning works and where it stops | Learners train small models and find where they fail |

Source: KMK-Kompetenzrahmen "Bildung in der digitalen Welt"; Aktualisierung im Kontext Künstlicher Intelligenz (2026), Beschluss der Bildungsministerkonferenz vom 16.10.2026, read 3 November 2026. The framework says it draws on the OECD and European Commission AI Literacy Framework published in 2026. The right-hand column is ours.

One more line in the framework, 5.5.3, asks pupils to plan and use a structured, algorithmic sequence to solve a problem. That is programming in all but name, and it comes before any of the AI lines in practice: a learner who cannot plan steps cannot check whether an AI's steps are right.

## Can a confident answer be right this year and wrong last year?

Our own exercise. Ask "when does summer time start in Germany?" and you will often hear a tidy rule: the fourth Sunday in March. It sounds official and it gives the right date for 2027. The German summer time ordinance (Sommerzeitverordnung, section 2) says something different: summer time begins on the last Sunday in March at 2:00. We wrote both rules in Python and compared them over twenty-one years.

**A confident rule against the law** (Python)
```python
from datetime import date, timedelta

def confident_answer(year):
    # "Summer time starts on the fourth Sunday in March."
    day = date(year, 3, 1)
    while day.weekday() != 6:          # 6 means Sunday
        day += timedelta(days=1)
    return day + timedelta(weeks=3)

def the_law(year):
    # SoZV section 2: "am letzten Sonntag im März"
    day = date(year, 3, 31)
    while day.weekday() != 6:
        day -= timedelta(days=1)
    return day

print("2027:", confident_answer(2027), the_law(2027))
wrong = [y for y in range(2020, 2041) if confident_answer(y) != the_law(y)]
print("Years 2020 to 2040 where the answer is wrong:", wrong)
```
Run with Python 3 on 3 November 2026, it prints 2027: 2027-03-28 2027-03-28 and Years 2020 to 2040 where the answer is wrong: [2020, 2024, 2025, 2026, 2030, 2031, 2036, 2037].

### Why it fooled us in 2027

March always has 31 days, so it has either four or five Sundays. When it has four, the fourth Sunday is the last one and the tidy rule works, as it does on 28 March 2027. When March has five Sundays, the rule picks the wrong one, a week too early.

In 2026, March began on a Sunday, so it had five: the rule says 22 March, the law says 29 March 2026. Over 2020 to 2040 the tidy rule fails in eight years of twenty-one.

### What the exercise teaches

Checking the answer once, for the year you happen to care about, would have confirmed a wrong rule. Checking it against the definition, over many cases, exposed it in seconds.

That is the habit the KMK framework describes as checking against primary sources. The source here is a German ordinance anyone can read on gesetze-im-internet.de; the check is a few lines of Python.

1. **Ages 8 to 10, on paper.** Take a calendar of March 2026. Circle every Sunday. Which is the fourth? Which is the last? Are they the same?
2. **Ages 10 to 13, in Python.** Run the program, then change the range to 2000 to 2100 and count the wrong years. Is it roughly the same share?
3. **Ages 13 and up.** The ordinance says summer time ends on the last Sunday in October. Write end_of_summer_time(year) and test it the same way: against the definition, over many years, before you trust it.

## Are AI tools allowed in German maths and coding competitions?

It depends on the competition, and the rules are getting sharper.

### A flat no in the Bundeswettbewerb Mathematik

The Bundeswettbewerb Mathematik, a national maths competition for pupils on the way to the Abitur, lists using artificial intelligence to solve the problems, or even to check your own solution, among the things participants must not do.

A pupil who has only ever checked work with a chatbot will find that rule hard. One who checks by testing cases, as in the exercise above, is already used to it.

### Where building AI is the task

The opposite case is the Bundeswettbewerb Künstliche Intelligenz (BWKI), where pupils must build a project with machine-learning methods. Our page on [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany) covers it.

Both rules point the same way: a competition wants to see the pupil's own thinking, whether the subject is proofs or models.

## How do our classes teach children to think instead of copying?

The owner of Modern Age Coders promises families the same teaching anywhere in the world: we teach learners how to think and solve problems, not how to copy answers or AI output. In a live class that promise becomes five routines.

1. **Say it before you run it.** Before any program runs, the learner predicts the output out loud. A wrong prediction is the most useful moment in the class.
2. **Plan in words first.** The learner writes the steps in plain English, then turns them into code. The KMK's framework calls this a structured, algorithmic sequence.
3. **Test the edges.** The first day of a month, an empty list, a five-Sunday March. Learners choose the awkward cases themselves.
4. **Explain every line.** Code the learner cannot explain is deleted and written again, however it got there.
5. **Check against the source.** A rule is compared with the law, the dataset or the documentation it claims to describe.

### English only, live

Every class runs live and in English. We do not teach in German; the mentor names German school terms where they help.

### Pace and accent matched

Mentors wait for the learner's own idea instead of supplying the answer, and adjust to how the learner speaks.

### The same mentor

One person who notices when a learner starts guessing and brings them back to reasoning.

## Which AI tools are suitable for children in Germany?

We do not recommend any AI chatbot to children, and our classes for under-18s do not need one.

### Read the provider's own age rules

Providers set their own minimum ages. Anthropic's consumer terms for Claude require users to be at least 18. OpenAI's terms for ChatGPT set 13 as the floor and require a parent's or guardian's permission for anyone under 18. Our [AI tools age guide](/ai-tools-age-guide) quotes these terms for many tools.

The KMK recommendation also records the Länder's aim of giving schools data-protection-compliant, free access to language models, which would answer the question differently inside school.

### What children use with us instead

Children write Python, train small models on data they can see, and check results against sources. When AI comes into a lesson, it is something the learner builds and tests, not an adult account they log into.

Older teenagers learn how language models work and where they fail, so that when they do use one at sixteen or eighteen, they use it as the framework intends: checked, adapted and declared.

## From first program to checking any answer

Our own stages for the thinking habit, from age eight upwards.

**Thinking milestones (ours)**

| Stage | Typical age | The learner can |
|---|---|---|
| Predict | 8 to 9 | Say what a short program will do before running it |
| Plan | 9 to 11 | Write the steps of a solution in words, then in code |
| Test | 11 to 13 | Choose awkward cases and check a rule against them |
| Explain | 12 to 15 | Justify every line of a program to someone else |
| Judge | 14 and up | Check an AI answer against a source and say what is wrong with it |

### For parents

Ask your child to predict before they press run. It is the simplest habit to support at home.
If homework involved AI, ask which part your child could explain without it.

### For learners

When an answer looks perfect, try the strangest case you can think of.
Write down where an idea came from. Your school may ask, and the KMK expects it.

## Nine more courses that put reasoning first

Live in English with a regular mentor; choose a batch or private lessons.

### Young thinkers

Ages 6 to 11

- [Scratch](/courses/scratch-programming-complete-course): Planning and debugging with blocks.
- [Reasoning for young thinkers](/courses/reasoning-and-readiness-course-for-young-thinkers): Logic and patterns before code.
- [Mathematik-Olympiade and Känguru](/courses/mathematik-olympiade-and-kaenguru-training-course): Competition problems, our own, no AI.

### Teen programmers

Ages 11 to 16

- [Python for teens](/courses/python-complete-masterclass-teens): Programs they can explain line by line.
- [Maths through coding](/courses/maths-through-coding): Test maths ideas in code.
- [Informatik Companion](/courses/informatik-companion-course-klasse-5-10): Alongside school Informatik, Klasse 5 to 10.

### Building, not prompting

Ages 13 to 18

- [AI and machine learning](/courses/ai-ml-masterclass-teens): Train models and find where they fail.
- [Algorithms and data structures](/courses/problem-solving-dsa-masterclass-teens): The reasoning behind fast programs.
- [Biber, BWINF and BWKI](/courses/german-informatics-competitions-course-biber-bwinf-bwki): German competitions, our own practice problems.

## How a live thinking-first class works

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each class follows the same rhythm: a problem, a prediction, the learner's own attempt, then a test.

- **After school** For example 14:15 German time, which is 18:45 in India in winter.
- **Later** For example 16:15 German time, 19:45 in India from 28 March 2027.
- **1-on-1** Saturday at 11:00, or a time your family picks.

- **Problem first** Every class opens with a question, not a tutorial.
- **Predict, then run** Learners commit to an answer before the computer gives one.
- **Edge cases** The awkward input is part of every task.
- **Own words** Learners explain their code back to the mentor.
- **Parents informed** Short notes on what was reasoned out, not just finished.
- **Batch or private** Fifteen to twenty learners, or private lessons.

## Fees for families in Germany

You pay per month for eight live classes. Prices here are euro amounts based on the European Central Bank reference rate; the actual charge is in US dollars and your bank converts it, so a small difference on the statement is normal.

- Free first class: Free. A free first class. A short problem to see how your child reasons. No card needed.
- Group batch: €90 (charged in US dollars) a month. Fifteen to twenty learners at one level. One regular mentor. Two classes a week. Monthly, cancel any month.
- One to one: €134 (charged in US dollars) a month. Your child and one mentor. Paced to how your child thinks. Times your family chooses.

## Thinking, not copying AI: common questions

### What does "learn to think, not copy AI" mean in practice?

The learner plans a solution, predicts what it will do, tests it on awkward cases and explains every line. Any answer from a tool, or from the mentor, is treated as a claim to check, not a result to copy.

### Is AI banned in German schools?

No. The KMK recommendation of 10 October 2024 says a general ban on AI for homework is neither useful nor enforceable, and asks schools to agree how AI may be used and how AI-generated work is labelled.

### What does the KMK expect pupils to be able to do with AI?

Its framework of 16 October 2026 adds AI to the six areas of Bildung in der digitalen Welt: for example, judging AI results and possible bias, checking against primary sources, labelling AI-generated work and checking and adapting AI results before using them.

### Should my child use ChatGPT or Claude for coding homework?

We do not recommend any chatbot to children. Claude's terms require users to be 18, and ChatGPT's terms require a parent's permission for anyone under 18. Our classes for children need neither.

### Are AI tools allowed in the Bundeswettbewerb Mathematik?

No. The competition forbids using artificial intelligence to solve its problems or to check your own solutions.

### Will my child fall behind without AI tools?

Our view is the reverse: a learner who can plan, test and explain will use any tool better later, and the KMK framework asks for exactly those skills. Children with us still learn how AI works by building small models.

### Are the classes in German?

No, the teaching is in English only and always live. Mentors work from India and adapt to each child's pace and accent. For school-related topics they also give the German term.

### When are the classes?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our mentors' day in India runs 4 hours 30 minutes ahead of Germany in winter and 3 hours 30 minutes in summer.

### Are you connected to the KMK or a school?

No. Modern Age Coders is not connected to the KMK, the SWK, any ministry or competition. We teach alongside school; school marks come only from the school.

### How much does it cost?

A monthly fee, displayed here in euro at the European Central Bank reference rate and charged in US dollars, which your bank converts. The first class is free.

## Related pages

- [AI and machine learning in Germany](/ai-and-machine-learning-classes-in-germany): Building and testing models, and the BWKI.
- [AI tools age guide](/ai-tools-age-guide): Minimum ages from the providers' own terms.
- [How to think like a programmer](/how-to-think-like-a-programmer): The habits behind good code.
- [Coding classes in Germany](/coding-classes-in-germany): All our pages for families in Germany.
- [Informatik-Nachhilfe online](/informatik-nachhilfe-online): School Informatik help, page in German.
- [Python and AI for kids syllabus](/courses/python-ai-kids-masterclass): Every topic in the course.

## Contact

Book the free first class at [https://learn.modernagecoders.com/learn-to-think-not-copy-ai-germany](https://learn.modernagecoders.com/learn-to-think-not-copy-ai-germany#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
