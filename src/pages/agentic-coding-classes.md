---
title: "Agentic Coding Classes | Direct an AI Agent, Review Every Line"
description: "The agent writes the code. Your job is to be able to say no. Live online agentic coding classes that teach the review, not the prompt, for ages 6 to 67."
canonical: https://learn.modernagecoders.com/agentic-coding-classes
source: src/pages/agentic-coding-classes.html
---
> The agent writes the code. Your job is to be able to say no. Live online agentic coding classes that teach the review, not the prompt, for ages 6 to 67.

The short answer

Agentic coding is directing an AI coding agent to build real software and then being able to audit what it produced. Modern Age Coders teaches the audit rather than the prompting, because prompting takes an afternoon and changes every six months while review is engineering judgement and does not change. The characteristic failure of agent-written code is not a bug but an unexamined decision: the prompt said apply the discounts, the agent decided by writing a loop, and a loop compounds. Students bring a real diff each week and defend it line by line. Group teaching is USD 100 a month, private is USD 150, and the first class is free without a card.

The thing that actually changed

## The bottleneck moved from writing code to being able to refuse it

For forty years the scarce skill in software was producing correct code. That is no longer the scarce skill, and pretending otherwise is why a lot of teaching has quietly stopped being useful.

A capable coding agent will now produce a plausible implementation of most things a working programmer does in a day. It will do it in seconds, it will be formatted better than yours, and it will come with a confident explanation. The generation problem is, for a very large class of everyday work, solved.

What is not solved, and what has become dramatically more valuable, is the ability to look at that output and say: no. Not this. This is subtly wrong, and here is the specific reason, and here is what it should be instead. That sentence is the entire job now, and almost nobody is being taught to say it.

You can see the consequence in any team that adopted these tools quickly. Output went up immediately. Defect rates went up shortly afterwards, and the defects were of a new kind: not typos and crashes, which are loud, but reasonable-looking decisions nobody made deliberately, which are silent.

That is what this course is for. We are not teaching prompting, which takes an afternoon and changes every six months. We are teaching the review, which takes a year and does not change at all, because it is really just engineering judgement applied to a new source of code.

A worked example, in full

## Here is code an agent wrote. Find what is wrong with it.

This is the exercise we run in the first month, and the first time almost every student, including experienced adults, gets it wrong.

***WHAT THE AGENT RETURNED**python*

```
def apply_discounts(order, discounts):
    # looks tidy, reads well, passes the happy-path test
    total = order.subtotal
    for d in discounts:
        if d.is_active:
            total = total - (total * d.percent / 100)
    return round(total, 2)
```

Ask yourself, before reading on: what is wrong with this? Most people say nothing. It is clean, it is readable, and it does compute a number.

***WHAT A REVIEWER SAYS**the three questions*

```
1. Do the discounts compound?
   Two 50% discounts give 25% of subtotal, not free.
   Nobody decided that. The loop decided it.

2. What bounds the total?
   Eleven 10% discounts and the customer still pays.
   Twelve and it is still positive. There is no floor.

3. What if percent is 120, or -5?
   Nothing stops it. The function trusts its input
   because the prompt never said it should not.
```

None of the three is a bug in the ordinary sense. Each is a decision the agent made silently because nobody specified it, and each one is a real invoice.

Notice what the three questions have in common. Not one of them is about syntax, style or performance, which is what code review is usually taught as. All three are about **decisions that were made by nobody**. The prompt said apply the discounts. The agent had to decide what applying several discounts means, and it decided by writing a loop, and a loop compounds. That is a business rule invented by control flow.

This is the characteristic failure of agent-written code and it is why the old review checklist does not catch it. You are no longer looking for mistakes. You are looking for *unexamined choices*, which look exactly like correct code, because syntactically they are correct code.

The method

## Six passes over anything a machine wrote, in this order

Order matters. Most people start at pass five, which is why they find style problems and miss invoices.

1. #### One: ask what it decided that you did not

  Before anything else. Every place the specification was silent, the code chose. Compounding, ordering, rounding, what happens on an empty list, what counts as a duplicate. These are business rules invented by control flow and they are the most expensive category by a wide margin.
2. #### Two: find the boundaries and check they exist

  What is the largest input this handles, the smallest, the empty one, the negative one? Agent-written code trusts its inputs because the prompt described the happy path, and the happy path is the only path anybody described.
3. #### Three: ask how it fails

  Not whether. When the network is down, when the file is missing, when the value is None. The correct answer is almost always to stop loudly. The common answer is to carry on with a default that looks plausible, which is how a wrong number reaches a report.
4. #### Four: check the data it touches

  What does it read, what does it write, what does it send anywhere. This is the pass where credentials in a config file and personal data in a log get caught, and it is the one students skip because it is not about correctness.
5. #### Five: only now, read it as prose

  Names, structure, whether the shape of the code matches the shape of the problem. Real and worth doing, and fifth, because a beautifully named function can still be quietly compounding discounts.
6. #### Six: make it prove itself

  A test that fails before the code and passes after. If the student cannot write that test, they have not understood what the code is for, and neither had the agent.

Three practices, told apart properly

## Vibe coding, agentic coding, and writing it yourself

These get used interchangeably and they are not the same activity, do not build the same skill, and do not fail in the same way.

|   | Vibe coding | Agentic coding | Writing it yourself |
| --- | --- | --- | --- |
| You supply | A description of the result | A goal, constraints and review | Every line |
| The machine supplies | The whole thing | A proposal you may reject | Autocomplete, at most |
| You must be able to | Judge the output works | Say why a line is wrong | Produce it from nothing |
| Fails by | Working until it does not | Silent unexamined decisions | Taking a long time |
| Builds the skill of | Specifying clearly | Engineering judgement | Fluency and recall |
| Good for | Speed, prototypes, scope | Most real professional work | Learning, and hard cores |

We teach all three, and we are explicit with families about which one a given course is. Vibe coding is genuinely useful and we have [courses in it](/vibe-coding-classes). What it does not by itself produce is somebody who can answer the three questions above, and the gap between building something and being able to defend it is the gap this page exists to close.

What goes wrong, specifically

## Four failure modes we make students produce deliberately

You do not learn to spot these by being warned about them. You learn by causing one, watching it pass every test you wrote, and then finding it.

### The confident wrong constant

A magic number that is right for the example and wrong for the domain. Ninety days, twenty items, five retries. It came from the training distribution, not from your requirements, and it will be correct in testing.

### The silently swallowed error

A try block wrapping something that should have stopped everything, returning an empty list on failure. Downstream sees no data rather than an error, and reports zero, and somebody believes it.

### The query inside the loop

Correct, readable and quadratic. Fine on the forty rows in development, catastrophic on the four hundred thousand in production. Agents optimise for looking clear, and clear code is often the slow shape.

### The plausible API that does not exist

A method name that ought to exist on that object, invented rather than checked. This one is easy, because it crashes. We include it precisely so students learn that loud failures are the cheap kind.

### The permission nobody asked for

Broader file access, a wider database scope, a token with more rights than the task needs. Nothing breaks, so nothing signals, and the blast radius grew for free.

### The test that tests the implementation

An agent asked for tests will often write tests that assert what the code does rather than what it should do. They pass forever, including when the behaviour is wrong, which is worse than no tests because it reads as evidence.

The course itself

## What a student actually does, and what we will not claim

### The work

Every student runs a real project they chose, built with an agent, in a repository with a full history. Each week they bring a diff the agent produced and defend it line by line to a teacher whose job is to find the unexamined choice. They lose that argument frequently in the first term, which is the point.

By the end they have something deployed that a stranger can use, and, more usefully, they have the habit of reading a diff before accepting it. That habit is described further on [how to read code](/how-to-read-code), which is the companion skill and the one this depends on.

### Four things we will not claim

**That this makes you a senior engineer quickly.** Reviewing well requires knowing what usually goes wrong, and that knowledge is accumulated rather than taught.

**That you can skip learning to program.** You cannot review a language you cannot read. Students arriving without Python do the Python first, and we will say so.

**That the specific tools will still be current.** They will not. The three questions will be.

**That we supply the subscriptions.** The agent courses need the student's own account with the tool used, and that is stated on the course page rather than discovered later.

The catalogue

## Where agentic coding sits in the catalogue

Two courses teach it directly. The rest of the ladder is what makes the review possible in the first place, because you cannot audit a language you cannot read.

I

### Where agentic coding is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### Coding Agents: Codex and Claude Code

The course this page describes. Direct an agent to build real software, then defend every line of the diff to somebody looking for the decision you did not make.

[Open the syllabus](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens)

DEPTH / 02

#### Python for Teens

The prerequisite nobody can skip. You cannot audit a language you cannot read, and students arriving without it start here instead.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DEPTH / 03

#### Git and GitHub for Teens

Reviewing a diff assumes a history to review. Committing as the work happens is what makes the review unit exist at all.

[Open the syllabus](/courses/git-github-version-control-course-for-teens)

DEPTH / 04

#### Data Structures and Algorithms

Why the loop an agent wrote is correct at forty rows and catastrophic at four hundred thousand. The knowledge that makes the performance pass possible.

[Open the syllabus](/courses/data-structures-algorithms-masterclass-college)

Fees

## What this costs, anywhere in the world

One flat pair of figures everywhere we teach outside India, billed in US dollars, charged monthly with no minimum term. The tool subscriptions are the student's own and are not included.

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

Each one takes a single idea seriously enough to be worth reading on its own. Reading code and debugging are the two that make this page work.

[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about agentic coding

## What learners and parents ask

 @@

### Is this the same as vibe coding?

No, and the difference is the whole point. Vibe coding is describing a result and accepting what comes back; you judge it by whether it appears to work. Agentic coding is directing an agent under constraints and being able to say precisely why a particular line is wrong. We teach both and we label them honestly, because the second one is what professional work actually requires.

### What age can start?

Thirteen for the full course, and realistically only once a student can read the language the agent is writing. Younger children do the Python first: reviewing code you cannot read is not a skill, it is a guess. Adults with existing programming experience often start here directly and go one to one.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one teaching is USD 150 a month, billed in US dollars, the same figures everywhere we teach outside India. No enrolment fee and no minimum term. The first class is free without a card. The agent subscription itself is the student's own cost.

### Which tools do you use?

The current generation of coding agents, and we deliberately do not build the course around one, because the specific tool will change and the review method will not. What we do require is that the student has their own subscription to whichever tool their course uses, which is stated on the course page rather than discovered afterwards.

### Will this make my child lazy about learning to program?

It would if it were prompting lessons, which is a fair worry and the reason we do not teach it that way. A student here spends most of the session arguing about code they did not write, in front of somebody who will ask what happens when the list is empty. That is more demanding than writing it themselves, not less, and students find that out in about week three.

### Do you provide the subscriptions?

No. Across our whole catalogue the only courses needing a paid third-party account are the coding agent ones, and the student provides it. We say so upfront because a course that quietly assumes a subscription is a course with a hidden fee.

### What does a student have at the end?

A deployed project built with an agent, a repository with a real history, and the habit of reading a diff before accepting it. The project is the visible output; the habit is the one that keeps paying. What that repository should look like is set out on our portfolio guidance.

### Is code review not just for professionals?

It used to be, when producing code was the hard part and only senior people had time to check others. Now everybody generates more code than they can carefully read, including fourteen year olds, so review has stopped being a senior privilege and become the basic operating skill. Teaching it at thirteen is not premature, it is overdue.

### What if I already work as a developer?

Then one to one is usually the right format and the syllabus starts from your codebase rather than ours. The six passes are the same; what changes is that we run them against work with real consequences, and the sessions tend to be shorter and more frequent.

### What happens after I send the form?

A mentor calls to arrange the free first class, which is taught rather than sold. For this course that session is normally the discount exercise on this page, done live, because how somebody behaves in the ten minutes after being shown plausible wrong code tells us more than any placement test.

@@

Start

## The free class is the exercise on this page, run live

We do not use a placement test for this course. We show you working, plausible, wrong code and watch what you do with it, because that reveals the thing we actually need to know: whether you look for what is broken or for what was never decided. It takes ninety minutes, costs nothing and requires no card, and you will get a straight answer about whether this course or the Python underneath it is the right starting point.

Rather read first? [How to read code](/how-to-read-code), [how to debug code](/how-to-debug-code), or the [Build AI hub](/learn-to-build-ai).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20agentic%20coding%20classes.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

 @@@@ [Chat with us](https://wa.me/919123366161?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20courses!)

---

*Canonical: https://learn.modernagecoders.com/agentic-coding-classes*
