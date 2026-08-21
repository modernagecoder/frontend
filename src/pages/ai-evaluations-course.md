---
title: "AI Evaluations Course | Measure It, or You Are Just Hoping"
description: "Almost every AI project that stalls stalls in one place: nobody can say whether this week beats last week. Build the eval set before the system. Live online."
canonical: https://learn.modernagecoders.com/ai-evaluations-course
source: src/pages/ai-evaluations-course.html
---
> Almost every AI project that stalls stalls in one place: nobody can say whether this week beats last week. Build the eval set before the system. Live online.

The short answer

An evaluation set is a written list of inputs with the answers you expect, run every time anything changes. Without one, a team improving an AI system has only impressions to go on, which are biased towards the cases they tried, forget what the previous version did, and cannot detect regressions. Modern Age Coders teaches evaluation as the first step of every AI project a student runs, built before the prompt and before retrieval, because a number without something to compare it to is meaningless. Grading uses exact checks where possible, model judges where not, and a human-reviewed sample to keep the judges honest. Group teaching is USD 100 a month, private USD 150, first class free.

The gap where projects die

## If you cannot measure it, you are not engineering it. You are hoping.

Almost every AI project that stalls stalled in the same place, and it is not the modelling. It is that nobody can say whether this week is better than last week.

The demo stage is easy and genuinely encouraging. You build something, you try it on questions you thought of, it works, everybody is impressed. The trouble starts the moment you begin improving it, because improvement requires comparison and there is nothing to compare against.

So the team falls back on the only instrument available: looking at output and forming an impression. That instrument is unreliable in a specific and predictable way. It is biased towards the cases you happen to try, it forgets what last week's version did, and it cannot detect the thing you broke while fixing something else.

The fix is unglamorous and it is not a technology. Write down a set of inputs with the answers you expect, before you change anything, and run it every time. That is an evaluation set, and it is the difference between a project that improves and one that oscillates for a year.

It is also the single most neglected topic in AI education. There are a thousand courses on building and very few on measuring, which is precisely backwards, because building is now the easy part and knowing whether the thing works is the hard part.

Before and after

## A week of vibes, and forty lines that end them

The left block is a real pattern, described without exaggeration. The right block is the smallest intervention that removes it.

***HOW MOST TEAMS DECIDE**the honest transcript*

```
Mon   "Tried the new prompt. Feels better."
Tue   "Hmm, worse on that one weird case."
Wed   "Switched models. Definitely better?"
Thu   "Someone says it broke. Can't reproduce."
Fri   "Reverted. Not sure which change."

# Four changes shipped. Zero attributable.
# Nobody can say if Friday beats Monday.
```

This is not incompetence. It is what happens when a system has no measurement and the only available instrument is how the output felt to whoever looked last.

***THE SMALLEST THING THAT FIXES IT**evals.jsonl*

```
{"id": "refund_01",
 "input": "How long do I have to return a lamp?",
 "must_contain": ["30 days"],
 "must_not_contain": ["14 days", "no returns"],
 "source": "policy.md#returns"}

{"id": "refund_02_edge",
 "input": "Can I return a lamp bought 31 days ago?",
 "must_contain": ["no", "30 days"],
 "note": "boundary. Was wrong in v3."}

# 40 lines like this beat any amount of
# staring at output. Write it BEFORE the fix.
```

Forty cases is enough to change how a team works. The hard part is not the format; it is sitting down and deciding what the right answer actually is.

Two things about the right-hand block are worth dwelling on. The first is how modest it is: no framework, no dashboard, a text file of cases with expectations. The second is the note on the second case, *was wrong in v3*. That is a regression test, and the moment a set starts accumulating those, it stops being a checklist and becomes institutional memory.

Notice also that writing it forces something uncomfortable and useful. To record an expected answer you must decide what the right answer is, and teams routinely discover at this point that they disagree with each other about what the system is supposed to do.

Building one

## Six steps, and the one everybody wants to skip

Step one is the one people skip, and skipping it turns the whole exercise into decoration.

1. #### Write the cases before you build anything

  Not after. Before, when you still have to decide what correct means and cannot be influenced by what the system happens to do well. A set written afterwards tends to describe current behaviour, which measures nothing except your own memory.
2. #### Collect real inputs, not tidy ones

  The questions actual users ask, including the badly phrased, the ambiguous and the ones outside scope. A set of well-formed questions measures a system nobody will use, and the gap between the two is where most production failures live.
3. #### Include the cases you already got wrong

  Every defect found becomes a permanent case. This is the mechanism by which a set turns into institutional memory rather than a checklist, and it is what stops a team fixing the same thing three times in a year.
4. #### Grade with the cheapest instrument that works

  Exact string checks, keyword presence and structural validation are free, fast and deterministic. Reach for a model judge only for genuinely subjective properties, and keep a human-reviewed sample to check the judge itself.
5. #### Run it on every change, automatically

  A set that is run when somebody remembers is a set that stops being run. It has to be attached to the change, so that a regression is visible in the minute it is introduced rather than in the week somebody complains.
6. #### Watch the set decay, and refresh it deliberately

  Usage shifts, documents change, and over-fitting to a fixed set is a real risk. Revisit quarterly, retire cases that no longer represent anything, and add new ones from what people are actually asking now.

Choosing an instrument

## Four ways to grade an answer, and when each one lies

| Instrument | Good for | When it lies | Cost |
| --- | --- | --- | --- |
| Exact match and keywords | Facts, numbers, formats, refusals | Right answer, different wording | Free |
| Structural validation | Valid JSON, required fields, length | Well formed and wrong | Free |
| A model as judge | Tone, helpfulness, subjective quality | Prefers verbose and confident answers | Per call |
| Human review of a sample | Everything, and calibrating the judge | Slow, and reviewers disagree | Expensive |

Most real systems use several at once: exact checks for the things that are checkable, a model judge for the things that are not, and a small human-reviewed sample to keep the judge honest. The mistake is picking one and trusting it everywhere, particularly the third row.

Traps

## Six ways an evaluation set quietly stops telling the truth

### Only easy cases

A set of questions the system already answers well measures nothing and reassures everybody. Deliberately include the ambiguous, the out-of-scope and the boundary, because those are where changes actually show up.

### Optimising against the set until it means nothing

Tune long enough and you fit the test rather than the task. Hold out cases you never look at while iterating, and be suspicious of a score that improves while nobody reports anything getting better.

### Trusting a model judge without checking it

Judges have consistent biases: they favour longer answers, confident phrasing and their own family of models. A small human-reviewed sample tells you how much to believe the judge, and it is not optional.

### Measuring the whole system and nothing inside it

One end-to-end number tells you something is wrong and never where. Retrieval, ranking and generation each need their own measurement, which is why the RAG page separates them.

### No negative cases

A system that always answers scores well until somebody asks something it should refuse. Cases where the correct response is I do not know are the ones most often missing and most often needed.

### Letting it go stale

A set built in March against a corpus that changed in June is measuring a system that no longer exists. Silent decay is worse than no set at all, because it produces confident numbers about the wrong thing.

How it is taught

## The set comes before the system, which students hate

In every AI project a student runs here, the evaluation set is built first. Before the prompt, before the retrieval, before anything works at all. Students find this intolerable for about two weeks, because it delays the moment something impressive happens.

Then the first time a change makes three cases better and two worse, and they can see it rather than argue about it, the objection stops. That moment is reliably the point at which a student stops treating an AI system as a magic box and starts treating it as something engineered.

It is the same discipline as the baseline in classical machine learning: a number is meaningless without something to compare it to, which is the argument made throughout our machine learning teaching. Evaluation is that idea applied to systems whose output is text rather than a prediction.

It pairs most directly with [RAG](/rag-systems-course), where retrieval must be measured separately from generation, and with [context engineering](/context-engineering-course), where every decision about what goes in the window is a hypothesis that needs testing.

The catalogue

## Where evaluation is taught in the catalogue

In every course with a model in it, as the first step rather than the last. There is no standalone evaluation product because evaluating nothing is not an exercise.

I

### Where measurement is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### AI and Machine Learning for Teens

Where the habit begins, as the baseline: a model must beat doing nothing clever before anybody is allowed to believe it.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

DEPTH / 02

#### Generative AI: LLMs, RAG and Agents

The same discipline applied to systems whose output is text, where exact equality mostly fails and properties are asserted instead.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

DEPTH / 03

#### Data Science Masterclass

Statistics that survive somebody sceptical asking how you know, which is the adult form of the same question.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

DEPTH / 04

#### AI and ML Masterclass

Evaluation that holds up under questioning rather than under demonstration, including the parts that are genuinely hard to measure.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

Fees

## What it costs, anywhere in the world

One flat pair of figures everywhere we teach outside India, in US dollars, charged monthly with no minimum term.

Free first class

USD 0

no card required

- Taught rather than sold
- It settles which rung the learner starts on
- You watch it, then decide

Book it

Group batch

USD 100

a month, billed in US dollars

- Five to eight students, one teacher throughout
- Live video, never a recording
- Build work between sessions, reviewed by the teacher
- Certificate on completion

Start here

One to one

USD 150

a month, billed in US dollars

- Private teaching, at the pace the goal needs
- The only way to get a weekday morning slot
- Syllabus shaped to one objective

Enquire

What learners and families say

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

The rest of the series

## The nine other pages in this series

Evaluation is what makes RAG and context engineering improvable rather than merely adjustable. Those two pages are the natural companions.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about AI evaluation

## What learners ask about measuring AI

### What exactly is an eval set?

A written list of inputs paired with what a correct response should contain or avoid, stored in a file and run every time something changes. It can be forty lines of JSON. The value is not in the format but in having decided, in advance and in writing, what correct means.

### Why build it before the system?

Because a set written afterwards describes what the system already does rather than what it should do. Once you have seen the output, you cannot un-see it, and your expectations quietly bend towards the behaviour in front of you. Writing first is the only way to keep the measurement independent.

### How much does it cost to learn this?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, and these are the same figures everywhere we teach outside India. No enrolment fee, no minimum term, and the first class is free without a card.

### Can I use an AI to grade AI output?

Yes, and it is genuinely useful for subjective properties like tone or helpfulness where no exact check exists. What you must not do is trust it unchecked: judges reliably prefer longer, more confident answers, and often favour their own model family. Keep a small human-reviewed sample to calibrate how much to believe it.

### How many cases do I need?

Around forty is enough to change how a team works, which surprises people who imagine this requires thousands. What matters far more than volume is coverage: boundaries, ambiguity, out-of-scope questions, and everything you have already got wrong once.

### Is this the same as software testing?

The same instinct applied to a system that does not give the same answer twice. Conventional tests assert exact equality, which mostly fails here. Evaluation asserts properties instead, tolerates variation, and reports a score rather than pass or fail, and that shift is the thing students have to internalise.

### Is this suitable for teenagers?

Yes, for teenagers who write Python, and it lands unusually well because it is concrete. A fifteen year old who has watched their own change improve three cases and break two has learned something about engineering that a great many adults working with these systems have not.

### Do I need this for a small personal project?

If you plan to improve it more than twice, yes, and the version you need is very small. Ten cases in a text file is enough to stop you from going in circles. The cost of not having them is invisible, which is exactly why people skip it.

### Does this apply outside AI?

The habit does, and it is the same one taught throughout our machine learning courses as the baseline: a number means nothing without something to compare it against. Students who take this seriously start asking the same question of benchmarks, marketing claims and their own school results.

### What happens after I send the form?

A mentor calls to arrange the free class. If you have an AI project already, bring it and three things it currently gets wrong, and we will write the first ten cases together in the session. That is usually the point at which the idea stops being abstract.

Start

## Bring a project and three things it gets wrong

The free first class on this topic is best spent writing the first ten evaluation cases for something you already have. Bring the project and three answers it currently gets wrong, and we will turn them into a file you can run. If you have no project yet, we will use one of ours, and you will still leave with the shape of the thing. Ninety minutes, no card, no obligation.

Rather read first? [RAG systems](/rag-systems-course), [context engineering](/context-engineering-course), or [how LLMs actually work](/how-llms-actually-work).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20learning%20how%20to%20evaluate%20AI%20systems%20properly.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

---

*Canonical: https://learn.modernagecoders.com/ai-evaluations-course*
