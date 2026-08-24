---
title: "How to Debug Code: Search, Do Not Guess | Live Classes"
description: "Two equally able programmers differ tenfold at debugging, and it is never knowledge. The bisection method, worked on a real intermittent bug, taught live."
canonical: https://learn.modernagecoders.com/how-to-debug-code
source: src/pages/how-to-debug-code.html
---
> Two equally able programmers differ tenfold at debugging, and it is never knowledge. The bisection method, worked on a real intermittent bug, taught live.

Start here

## Where debugging is taught in the catalogue

In every course, from the point a student writes their first program that does not work. It is never sold separately, because a debugging course without your own broken code in it would be a lecture.

[![Python for Teens course thumbnail](/images/python-teens.webp)  DEPTH / 01 Python for Teens From the first program that does not work, which arrives around week two. The stated-hypothesis rule starts the same day. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Python and AI for Kids course thumbnail](/images/python-kids.webp)  DEPTH / 02 Python and AI for Kids The junior version of the same habit: what did you change, undo it, what do you think is happening. Worth more at that age than any vocabulary. Open the syllabus →](/courses/python-ai-kids-masterclass)[![Git and GitHub for Teens course thumbnail](/images/git-github-teens.webp)  DEPTH / 03 Git and GitHub for Teens Bisecting the history rather than the code. If it worked in March, the commit that broke it can be found mechanically. Open the syllabus →](/courses/git-github-version-control-course-for-teens)

The short answer

Debugging is a search problem: the set of possible causes is a space, and the technique is to design questions that eliminate roughly half of it whichever way the answer comes out. A guessed hypothesis eliminates one possibility out of thousands; a good cut eliminates half, so four cuts are worth about a thousand guesses. Modern Age Coders teaches this by deliberately introducing non-obvious defects into a student's own working project, requiring a stated hypothesis before any change, and practising on the bugs that do not announce themselves rather than on crashes. Group teaching is USD 100 a month, private is USD 150, and the first class is free without a card.

Why two equally able people differ tenfold

## Debugging is a search problem, and most people search at random

Take two students who write comparably good code. Put a defect in front of both. One will find it in fifteen minutes and one will still be there after a day, and the difference is almost never knowledge.

Watch the slow one closely and a pattern appears immediately. They change something. They run it. It is still broken. They change something else, without undoing the first change. They run it again. Twenty minutes later the program contains four modifications, none of which they can now evaluate, and the original bug is still there underneath.

That is not debugging, it is stirring. The fast student is doing something structurally different: they are treating the set of possible causes as a space and repeatedly cutting it roughly in half. Same intelligence, same knowledge, entirely different procedure.

The reason this matters more than almost anything else on this site is that debugging is where the hours go. Not writing, which is fast and pleasant. Not designing, which happens in bursts. The bulk of a programmer's real time is spent on the gap between what they believed the system did and what it actually does.

It is also the skill least likely to be taught explicitly, because the code in a lesson usually works. A course whose examples always run has not once put a student in the state that defines the job, and no amount of watching correct code being written prepares anybody for a wrong number on a Sunday.

A real defect, worked through

## An intermittent wrong number, found in four cuts

Read the left block and consider how you would start. Then read the right one, which is the method rather than the insight.

***THE REPORT YOU ACTUALLY GET**the whole of it*

```
"Sometimes the weekly report shows
 the wrong total. Not always. Maybe
 once a fortnight. Finance noticed."

# No error. No stack trace. No crash.
# Nothing in the logs. Runs fine locally.
```

This is the shape of a real bug. Not a red exception on line 40, which is the only kind most courses ever show you, but an intermittent wrong number with no signal attached.

***SEARCHING INSTEAD OF GUESSING**four halvings*

```
Space of possible causes: everything.

CUT 1  Is it the data or the code?
       Re-run last month's data through
       today's code. Wrong total again.
       -> the code. Data eliminated.

CUT 2  Which half of the pipeline?
       Print the subtotal before aggregation.
       Subtotal is already wrong.
       -> upstream. Reporting eliminated.

CUT 3  Which rows differ?
       Diff the row set against a good run.
       17 rows missing, all late Sunday.
       -> a boundary, not a calculation.

CUT 4  What is special about Sunday night?
       The window is built in local time.
       The clocks changed.
```

Four questions, each eliminating about half of what remains, and the answer arrives in twenty minutes rather than two days. Nobody guessed anything.

The important property of those four cuts is that **every one of them was informative whichever way it came out**. Had the first re-run produced the right total, the data would have been the culprit and the code eliminated instead. A good cut is one where both answers are useful, and designing cuts with that property is the entire technique.

Compare that with the usual approach, which is to think of a plausible cause and test it. Plausible causes are drawn from what you happen to remember, so they are correlated with nothing, and each miss eliminates one possibility out of thousands. Bisection eliminates half. Over four steps that is the difference between four and roughly a thousand.

The procedure

## Six steps, and the order is most of the value

Steps one and two are the ones people skip, and skipping them is what turns twenty minutes into a day.

1. #### Reproduce it before you understand it

  A bug you cannot trigger on demand cannot be debugged, only speculated about, and every minute spent theorising about an unreproducible fault is wasted. Getting from sometimes to every time is frequently the majority of the work and it is the step people are most eager to skip.
2. #### Read the error. All of it. Out loud if necessary

  A startling proportion of the time the message names the file, the line and the cause. Students glance at the first sentence, decide it is noise, and start guessing. Reading the whole traceback is the single cheapest habit in this entire discipline.
3. #### Write down what you believe is true

  One sentence: I think the total is wrong because the aggregation double-counts. Now you have something falsifiable, and the next action is chosen to disprove it rather than to fiddle. Without this step the following steps have nothing to act on.
4. #### Design a cut, not a test of your hunch

  Ask a question whose answer is useful in both directions. Is it the data or the code. Is it before or after this line. Does it happen with one row. A question that only tells you something if you were right is a guess wearing a lab coat.
5. #### Change exactly one thing, and undo it if it fails

  Two simultaneous changes destroy the information from both. The discipline of reverting a failed experiment before the next one feels slow and is the fastest way through. Version control makes it free, which is one of several reasons we teach it early.
6. #### When you find it, ask why it was possible

  The defect is the symptom. The interesting question is what allowed it: an unstated assumption, a missing boundary, a value that should never have been representable. Fixing the line takes a minute; fixing the category is the thing that stops the next five.

Two procedures compared

## Guessing and searching, at each stage of the same bug

| Stage | Guessing | Searching |
| --- | --- | --- |
| First move | Change the line that looks suspicious | Reproduce it reliably |
| The error text | Skimmed, assumed to be noise | Read completely, treated as evidence |
| Next action chosen by | What comes to mind | What would eliminate the most |
| Number of changes at once | Several, none reverted | One, reverted if it fails |
| On being wrong | Discouraging | Informative, half the space is gone |
| When it is fixed | Relief, move on | Ask what made it possible |

Nothing in the middle column is stupid. Every one of those moves is what a reasonable person does under pressure when nobody has ever shown them an alternative, which is the situation almost every self-taught programmer is in.

Habits

## Six things that separate a fast debugger from a lucky one

### Trusting the machine over the memory

The system is not lying to you. Your model of it is wrong. Every hour lost to "that cannot be happening" is an hour spent defending a belief against evidence, and the belief is what should give way.

### Making it smaller before making it clear

Cut the input down until the failure disappears, then add back the last thing. A bug reproduced by four hundred rows is hard; the same bug reproduced by two rows is usually obvious on sight.

### Explaining it to somebody uninvolved

The reason this works is that describing a system out loud forces you to state assumptions you had been silently carrying, and the wrong one tends to fall out mid-sentence. It works on a patient colleague, and almost as well on nobody in particular.

### Bisecting the history, not just the code

If it worked in March and fails now, the change that broke it is in the commits between, and you can halve that range mechanically. Students who keep a real commit history get this technique for free, which is another argument for committing as you work.

### Keeping a written trail during a long hunt

What was tried, what the result was, what it eliminated. After ninety minutes nobody remembers which branches are already dead, and the commonest failure in a long debug is retesting something you disproved an hour ago.

### Knowing when to stop and sleep

Genuinely part of the method. Debugging quality collapses with fatigue faster than almost any other technical work, because it depends on holding a model in working memory. Two fresh hours regularly beat six tired ones.

How we teach it

## We break things on purpose, which is harder than it sounds

You cannot learn this from bugs that arrive naturally, because they arrive too rarely and at the wrong moments. So we manufacture them. A teacher takes a student's own working project, introduces a defect deliberately, and hands it back. The student knows a bug exists and knows nothing else, which is precisely the professional situation.

The defects are chosen to be the kind that do not announce themselves: an off-by-one in a boundary, a timezone, a mutable default, a comparison that is right for integers and wrong for floating point. Loud crashes are the easy category and we mostly leave them alone.

The rule during the exercise is that a student must state a hypothesis out loud before touching anything, and say what result would disprove it. Students hate this for about a month and then start doing it silently, which is the point at which the skill has actually transferred.

It compounds with the other two habits in this series. You cannot bisect code you cannot [read](/how-to-read-code), and the same discipline applied to a machine-generated diff is what [agentic coding](/agentic-coding-classes) requires. The three together are most of what engineering judgement actually is.

The catalogue

## Where debugging is taught in the catalogue

In every course, from the point a student writes their first program that does not work. It is never sold separately, because a debugging course without your own broken code in it would be a lecture.

I

### Where debugging is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### Python for Teens

From the first program that does not work, which arrives around week two. The stated-hypothesis rule starts the same day.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DEPTH / 02

#### Python and AI for Kids

The junior version of the same habit: what did you change, undo it, what do you think is happening. Worth more at that age than any vocabulary.

[Open the syllabus](/courses/python-ai-kids-masterclass)

DEPTH / 03

#### Git and GitHub for Teens

Bisecting the history rather than the code. If it worked in March, the commit that broke it can be found mechanically.

[Open the syllabus](/courses/git-github-version-control-course-for-teens)

DEPTH / 04

#### Data Science for Teens

Where the hardest defects live, because a wrong number in a pipeline never crashes and never announces itself.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

Students who arrive through this page also take [Python and AI for Kids](/courses/python-ai-kids-masterclass) · [AI Literacy for Kids](/courses/ai-literacy-for-kids-course) · [Python for Teens](/courses/python-complete-masterclass-teens) · [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) · [Data Science for Teens](/courses/data-science-course-for-teens-python-data) · [Git and GitHub](/courses/git-github-version-control-course-for-teens) · [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) · [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college). The full list is on the [catalogue](/courses).

Fees

## What it costs, anywhere in the world

The same flat pair of figures everywhere we teach outside India, billed in US dollars, charged monthly with no minimum term and no enrolment fee.

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

Debugging depends on reading, and applies directly to code an agent generated. Those two pages are the natural next ones.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about debugging

## What learners and parents ask

### Is debugging not just experience?

Experience makes you faster because you accumulate a library of things that commonly go wrong. But the procedure is separable and teachable, and a student given the bisection method at thirteen debugs better than an adult who has been guessing productively for ten years. The library takes years; the method takes a term.

### What age can start?

From about eleven, or whenever a learner has written something that does not work, which arrives quickly. Younger children get a simplified version of the same idea: what did you change, undo it, what do you think is happening. The habit is more valuable than the vocabulary at that age.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, and these are the same figures everywhere we teach outside India. No enrolment fee, no minimum term, and the first class is free without a card.

### Can I not just ask an AI to find the bug?

Often, and we teach students to use that. What it does not do is reproduce an intermittent failure, decide what evidence would be decisive, or tell you whether its confident explanation is correct. It is a fast generator of hypotheses, which is genuinely useful, and hypotheses are the cheap half of debugging. The cuts are the expensive half.

### Why do you break the student's own project?

Because bugs in unfamiliar toy code are a different exercise. In your own project you have a model of how it works, that model is wrong in a specific place, and finding the discrepancy between belief and reality is precisely the professional experience. Somebody else's broken example never produces that feeling.

### My child gets very frustrated when code breaks. Does this help?

It is usually the thing that helps most. Frustration comes from having no next action, and randomness produces no next action reliably. A procedure gives a student something to do when stuck, and the emotional change from that is often more noticeable to parents than the technical one.

### Do you teach debugger tools?

Yes, breakpoints and step-through and inspecting state, and they are useful. But we teach them after the method rather than before, because a debugger in the hands of somebody without a hypothesis is just a slower way to stir. The tool amplifies the procedure and cannot replace it.

### How long before we see a difference?

The stated-hypothesis habit usually shows up within a term, and it is visible from outside: a student stops saying it does not work and starts saying I think it is the date handling because. That sentence is the whole skill in miniature and it tends to arrive before any of the faster technique does.

### Is this relevant for adults already working?

It is a frequent one to one request, generally from self-taught developers who write good code and lose entire days to defects. Those sessions run against real work, and the most common single finding is that the person was skipping reproduction and starting from a hunch.

### What happens after I send the form?

A mentor calls to arrange the free class. If you have something currently broken, bring it, because working a live defect together is far more useful than any prepared exercise, and it also shows you honestly whether the method changes anything for you before you pay for anything.

Start

## Bring something that is currently broken

The most useful free first class for this topic uses a real defect rather than a prepared one. If you or your child has something that does not work, bring it and we will hunt it together, out loud, stating hypotheses before touching anything. If nothing is broken today we will break something instead, which is nearly as good. Ninety minutes, no card, and an honest view at the end on whether the procedure or the underlying programming is the thing to work on first.

Rather read first? [How to read code](/how-to-read-code), [how to think like a programmer](/how-to-think-like-a-programmer), or [agentic coding](/agentic-coding-classes).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20learning%20to%20debug%20properly.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

## Keep exploring Modern Age Coders

### Related courses and guides

- [How To Build a Coding Portfolio That Holds Up Under Questioning](/how-to-build-a-coding-portfolio)
- [How Large Language Models Work](/how-large-language-models-work)
- [JEE Aspirant Coding Track: Python & Computational Maths for](/jee-aspirant-coding-track)
- [How Computer Vision Works](/how-computer-vision-works)
- [Large Language Models Course (LLMs)](/large-language-models-course)
- [Homeschool Coding Curriculum](/homeschool-coding-curriculum)
- [Online Coding Summer Camp](/online-coding-summer-camp)
- [Online Coding Classes for Kids in the USA](/online-coding-classes-for-kids-usa)
- [Coding Classes for DPS Gurgaon Students](/coding-classes-for-dps-gurgaon)

### Free resources

- [HTML & CSS Tutorial: Build Websites from Scratch](/resources/html-and-css)
- [Project: Build a Complete Landing Page](/resources/html-and-css/project-build-a-landing-page)
- [STL Containers - vector, list, map, set, stack, queue](/resources/cpp/stl-containers)
- [Abstract Classes, Pure Virtual Functions, and Interfaces](/resources/cpp/abstraction-and-interfaces)

### From the blog

- [How to Reverse a String in Python: 5 Easy Methods](/blog/how-to-reverse-a-string-in-python)
- [Armstrong Number in Python, Code Examples & 5-Min Tutorial](/blog/armstrong-number-python-complete-guide-examples-code)
- [String Handling in Java: The ICSE and CBSE Guide](/blog/string-handling-in-java)

### Start here

- [About Modern Age Coders, teaching since 2020](/about)
- [Modern Age Coders pricing, one honest price per plan](/pricing)

---

*Canonical: https://learn.modernagecoders.com/how-to-debug-code*
