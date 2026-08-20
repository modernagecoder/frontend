---
title: "How to Think Like a Programmer | Invariants, Not Syntax"
description: "Programming is not typing, it is deciding what must be true. The six thinking moves behind the pauses, taught explicitly, live online for ages 6 to 67."
canonical: https://learn.modernagecoders.com/how-to-think-like-a-programmer
source: src/pages/how-to-think-like-a-programmer.html
---
> Programming is not typing, it is deciding what must be true. The six thinking moves behind the pauses, taught explicitly, live online for ages 6 to 67.

The short answer

Thinking like a programmer means deciding what must be true before writing anything: what a piece of code may assume, what it guarantees in return, and which states are nonsense it should refuse rather than tolerate. That decision is what the long pauses in experienced work are made of, and it is the part that transfers furthest outside software. Modern Age Coders teaches it explicitly and early, through a teacher who declines to accept a proposed solution until the student has said what happens on the empty list, the negative number and the simultaneous arrival. Group teaching is USD 100 a month, private is USD 150, and the first class is free without a card.

The misconception

## Programming is not typing. It is deciding what must be true.

Almost everybody arrives believing the hard part is the syntax, and almost everybody discovers within a year that the syntax was the easy part they were worried about.

Watch somebody experienced work and the striking thing is how little typing there is. There are long pauses. There is a lot of staring, some drawing, occasionally a sentence written in plain English above an empty function. Then twenty lines appear quickly and mostly work. The visible part is a small consequence of the invisible part.

What is happening in the pause is a specific activity, not vague pondering. The person is deciding what must be true: what this function may assume, what it guarantees in return, what states are possible, and which of those are nonsense that the code should refuse rather than tolerate.

A student who has not been shown this treats a function as a recipe for producing an answer. Somebody who has been shown it treats a function as a contract, and the code as the enforcement of that contract. It is a genuinely different relationship to the same text on the screen.

This is also the part that transfers furthest outside programming, which is the honest reason a lot of parents want their children to learn to code at all. Nobody needs a fourteen year old to know Python syntax. Wanting them to be the sort of person who asks what would make this wrong is an entirely reasonable thing to want.

The same function, twice

## Eight lines that produce a number, and eight that mean something

Both compute an average. Only one of them has an author who decided anything.

***WHAT A STUDENT WRITES FIRST**python*

```
def average_score(scores):
    total = 0
    for s in scores:
        total += s
    return total / len(scores)

# Correct. Also a crash waiting for an empty list,
# and it has no opinion about what a score IS.
```

This is fine as an answer to an exercise and dangerous as a piece of a system, and the difference is not skill. It is that nobody asked what must be true.

***WHAT MUST BE TRUE, MADE EXPLICIT**python*

```
def average_score(scores):
    # INVARIANT: at least one score, each 0..100
    if not scores:
        raise ValueError("no scores to average")
    for s in scores:
        if not 0 <= s <= 100:
            raise ValueError(f"score out of range: {s}")

    return sum(scores) / len(scores)
    # Now the function has a contract. Callers
    # that break it hear about it immediately,
    # at the point of the mistake, not later.
```

The second version is not more clever. It is a different activity: the author decided what must be true and then wrote code that refuses to proceed when it is not.

Students often read the second version as defensive clutter added by somebody paranoid. It is the opposite. The checks are not the point; **the decision is the point**, and the checks are simply where the decision became visible. An author who has decided that an empty list is meaningless has understood the problem better than one who has not, and would write better code even in a language with no way to express it.

This is why we teach invariants long before anybody meets a type system or a testing framework. Those are ways of writing down what must be true. The hard and portable part is having something to write down.

The moves

## Six thinking moves, taught explicitly rather than absorbed

These are what the pauses are made of. Most people acquire two or three by accident over several years.

1. #### State the invariant before the implementation

  What must be true when this runs, and what must still be true when it finishes. A sorted list stays sorted. A balance never goes below zero. Writing that sentence first changes what code gets written, and it is the move that most reliably separates two students of equal ability.
2. #### Work backwards from how you would check it

  Before solving anything, describe how you would know the answer is right. If you cannot describe the check, you do not yet understand the problem, and every minute of implementation before that point is speculative.
3. #### Decompose until each piece is boring

  The correct size for a sub-problem is one you find dull. Excitement at this stage means the piece is still too big and hides decisions you have not made. Students consistently stop decomposing one level too early.
4. #### Ask what would make this wrong

  Deliberately hunt for the input that breaks your own idea, before anybody else finds it. This feels adversarial towards your own work and is the fastest single route from plausible to correct.
5. #### Name the thing before you build it

  If a good name will not come, the concept is usually confused rather than the vocabulary lacking. Struggling to name something is diagnostic information about your understanding, not a stylistic inconvenience.
6. #### Solve the smallest real version first

  One user, one row, one day. Get that entirely correct, then generalise. Almost every stuck student is stuck because they began with the general case, where the decisions are hardest and the feedback is slowest.

From wish to specification

## What a vague goal looks like once it has been made checkable

| A wish | The question that sharpens it | A specification |
| --- | --- | --- |
| Make the app fast | Fast doing what, measured how? | Search returns in under 200ms for 10,000 rows |
| Handle bad input | Bad how, and then what? | Non-numeric input is rejected with a message, nothing is saved |
| Store the users | What identifies one uniquely? | One record per email, second signup updates rather than duplicates |
| Sort the results | By what, and ties broken how? | By date descending, ties by title ascending |
| Make it reliable | Reliable against which failure? | A dropped connection mid-save leaves the old record intact |
| Summarise the document | Summary judged how? | Under 100 words, every claim traceable to a quoted line |

The right-hand column is not more detailed for the sake of it. Each row has been turned into something with a yes or no answer, and that conversion is the single most useful intellectual operation in this entire subject. A goal you cannot check is a wish, and code cannot be written against a wish.

Where it shows up

## Six places this reasoning appears outside a text editor

### Reading a statistic in the news

Compared to what, measured over what period, on whom. This is the invariant question wearing different clothes, and students who have been drilled on it in code apply it here without being told to.

### Planning anything with a deadline

Decomposing until each piece is boring is project management. The failure mode is identical too: people stop breaking things down one level before the point where the work becomes estimable.

### Arguing a position

What would make this wrong is the same move as steelmanning an objection. Students who practise it against their own code become noticeably harder to fool by a confident argument.

### Science and laboratory work

Working backwards from the check is experimental design. Deciding how you would know before you begin is precisely what distinguishes an experiment from an activity.

### Using an AI assistant well

A vague request gets a plausible answer that cannot be evaluated. Turning a wish into a checkable specification is the difference between using these tools and being used by them.

### Ordinary careful writing

Naming the thing before building it is what an outline is. The inability to name a section usually means the idea underneath it has not yet been thought through, in prose exactly as in code.

How it is taught

## You cannot teach thinking by describing it

Everything on this page can be read in ten minutes and none of it transfers from reading. The move that works is a teacher refusing to accept an answer until the student has stated what must be true, every session, for months, until the student starts doing it before being asked.

Concretely: a student proposes a solution and the teacher asks what happens when the list is empty, when the number is negative, when two things arrive at the same instant. The student loses that exchange a great many times, and each loss installs a question they now ask themselves.

The younger the better, within reason. A nine year old can be asked what would make this wrong about a program that draws a square, and the question is the same question. What changes with age is the sophistication of the invariants, not the habit.

This is also the foundation the rest of the series stands on. Deciding what must be true is what makes a [debugging](/how-to-debug-code) hypothesis possible, and it is exactly what an agent does not do for you, which is the argument on [agentic coding](/agentic-coding-classes).

The catalogue

## Where this reasoning is taught in the catalogue

It is the first thing in every course and the last thing we stop insisting on. There is no separate reasoning product, because reasoning taught away from real problems becomes vocabulary rather than habit.

I

### Where this reasoning is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### Kids Coding Blocks

Where it starts. What would make this wrong is the same question at nine about a square as at twenty-five about a payment system.

[Open the syllabus](/courses/kids-coding-blocks-masterclass)

DEPTH / 02

#### Python and AI for Kids

The first invariants, said out loud before the code. At this age the habit matters considerably more than the notation.

[Open the syllabus](/courses/python-ai-kids-masterclass)

DEPTH / 03

#### Python for Teens

Where a teacher stops accepting a solution until the student has said what happens on the empty list and the negative number.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DEPTH / 04

#### Data Structures and Algorithms

Invariants at their most explicit. A sorted list stays sorted, and the subject is really what must remain true while something changes.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

Fees

## What it costs, anywhere in the world

One flat pair of figures everywhere we teach outside India, in US dollars, monthly, with no minimum term and no enrolment fee.

 @@

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

Enquire@@

What learners and families say

## Rated 4.9 across 547 Google reviews

Real reviews from real families. We neither write nor commission them.

 @@

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

@@

The rest of the series

## The nine other pages in this series

This is the page the others stand on. Debugging needs a hypothesis, reading needs a model, and neither is possible without deciding what must be true.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about programming reasoning

## What learners and parents ask

 @@

### Is this just computational thinking under another name?

It overlaps and it is narrower and more concrete. Computational thinking is usually taught as four abstract nouns. What this page describes is six specific moves, each of which a teacher can require in a given session and a student can visibly fail to perform. The abstraction is easy to agree with and hard to act on.

### What age does this start?

From about nine in age-appropriate form. A nine year old can be asked what would make this wrong about a program that draws a square, and it is the same question they will ask at twenty-five about a payment system. What changes with age is the sophistication of the invariants, not the habit.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, and these are the same flat figures everywhere we teach outside India. No enrolment fee and no minimum term, and the first class is free without a card.

### Can this be learned from a book?

The content can be read in ten minutes. The habit does not transfer from reading, because the whole mechanism is somebody declining to accept your answer until you have stated what must be true. That exchange has to happen with a person, repeatedly, over months, and it is uncomfortable enough that nobody does it to themselves.

### Does my child need to want to be a programmer?

No, and most of ours do not. The moves on this page are why a lot of families want coding at all: not the syntax, which nobody needs, but the habit of asking what would make this wrong. That habit is portable to laboratory work, to essays and to reading a statistic, and it is the honest answer to what coding is for.

### Is this the same as maths?

Related and not identical. Both reward precision and both punish unstated assumptions. The difference is that code executes, so a wrong assumption produces a wrong answer you can observe, which makes programming an unusually good place to learn the discipline even for students who dislike mathematics.

### How is this different from a normal coding class?

In a normal class the student's job is to produce something that runs, and the teacher's job is to help them get it running. Here the student's job is to say what must be true, and the teacher's job is to find the case they did not consider. Both classes end with working code, and the students are not the same afterwards.

### Does AI make this obsolete?

It makes it more valuable, and this is not a rhetorical answer. An assistant will happily implement a wish, and a wish implemented confidently is exactly the expensive failure. Someone who can turn a vague goal into a checkable specification directs these tools well; someone who cannot receives plausible output and has no way to evaluate it.

### What does progress look like from outside?

The most commonly reported change from parents is that a child stops saying it does not work and starts saying it breaks when the list is empty. Several also mention it appearing in schoolwork before it appears anywhere technical, usually as a habit of breaking an open assignment into checkable steps.

### What happens after I send the form?

A mentor calls to arrange the free class. That session is deliberately built around a problem slightly beyond what the learner can currently do, because how somebody behaves at the edge of their ability is far more informative than what they already know, and it tells us exactly where to start.

@@

Start

## The free class is one problem, slightly too hard

We do not use a placement test. The free first session gives a learner a problem a little beyond what they can comfortably do, and pays attention to what happens at the edge: whether they ask what the problem actually means, whether they try the smallest version first, whether they can say how they would know the answer is right. Ninety minutes, no card, and a specific view afterwards on which of the six moves is already there and which is missing.

Rather read first? [How learning actually works](/how-to-actually-learn-to-code), [how to debug code](/how-to-debug-code), or [how to read code](/how-to-read-code).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20learning%20to%20think%20like%20a%20programmer.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

 @@@@ [Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/how-to-think-like-a-programmer*
