---
title: "How to Read Code: A Method, Not a Talent | Live Classes"
description: "You read far more code than you write, and machines now write it faster than you can read. The four-pass method for code you did not write, taught live."
canonical: https://learn.modernagecoders.com/how-to-read-code
source: src/pages/how-to-read-code.html
---
> You read far more code than you write, and machines now write it faster than you can read. The four-pass method for code you did not write, taught live.

Start here

## Where reading is taught in the catalogue

It is not a separate product. It runs inside every course from the point a student can write a little, because reading and writing are two halves of one skill and separating them is what produced the gap.

[![Python for Teens course thumbnail](/images/python-teens.webp)  DEPTH / 01 Python for Teens Reading runs inside it from the point a student can write a little. Splitting comprehension from production is the mistake that created the gap. Open the syllabus →](/courses/python-complete-masterclass-teens)[![Git and GitHub for Teens course thumbnail](/images/git-github-teens.webp)  DEPTH / 02 Git and GitHub for Teens History as a reading tool. A confusing line is usually the residue of one specific bug, and the commit that introduced it often says why. Open the syllabus →](/courses/git-github-version-control-course-for-teens)[![Coding Agents: Codex and Claude Code course thumbnail](/images/codex-claude-code-teens.webp)  DEPTH / 03 Coding Agents: Codex and Claude Code Where reading earns its keep fastest now, because the material arrives faster than any human can carefully take it in. Open the syllabus →](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens)

The short answer

Reading code is a procedure rather than a talent, and it is the skill programmers use most and are taught least. The method is four passes in a fixed order: what goes in and out, follow one item through, what happens to the leftovers, then name the thing yourself. It scales from a single function to a large repository. Modern Age Coders teaches it live because reading is the one programming skill with no feedback loop: form a wrong understanding and nothing happens at all, so a teacher has to supply the correction. Group teaching is USD 100 a month, private is USD 150, and the first class is free without a card.

The asymmetry nobody plans for

## You will read vastly more code than you write, and you were taught only the writing

Every hour of a working programmer's week is heavier on reading than on typing, and that was true long before a machine started generating the reading material.

Think about what actually happens when you join anything. A new job, an open source project, a team, a codebase somebody left behind. Nobody asks you to write for the first weeks. They ask you to understand, and every course you have taken prepared you for the opposite task.

Almost all programming education is production-shaped: here is a blank file, here is a problem, produce a solution. Almost none of it is comprehension-shaped: here are four hundred lines you did not write, tell me what happens when the input is empty. The second exercise is closer to the job and is essentially absent from teaching.

Then agents arrived and made the asymmetry extreme. A student can now generate more code in an afternoon than they could read carefully in a week. The production side went to nearly free; the comprehension side did not move at all, because it is limited by a human being holding a model of a system in their head.

So the ratio that was already lopsided became the defining constraint of the work. If you can only carefully read two hundred lines an hour, and your tools emit two thousand, then your reading speed is your engineering speed. Everything else is throughput you cannot use.

A demonstration

## Twelve lines you have never seen, understood in six minutes

Read the first block and notice your instinct. Then read the second, which is the method we teach, applied to exactly the same code.

***AN UNFAMILIAR FUNCTION**javascript*

```
export function reconcile(prev, next, ctx) {
  const seen = new Map();
  for (const n of prev) seen.set(key(n), n);
  const out = [];
  for (const n of next) {
    const old = seen.get(key(n));
    if (old && old.rev === n.rev) { out.push(old); continue; }
    out.push(ctx.hydrate(n, old));
    seen.delete(key(n));
  }
  for (const stale of seen.values()) ctx.release(stale);
  return out;
}
```

Twelve lines, no comments, three unfamiliar names. Most people respond by reading it top to bottom and understanding almost nothing. Here is the alternative.

***THE SAME FUNCTION, IN FOUR PASSES**method*

```
PASS 1  What goes in, what comes out?
        In: two collections and a ctx. Out: one array.
        So it is a merge. Nothing else matters yet.

PASS 2  Follow ONE item through.
        An item in next that also exists in prev,
        same rev -> the OLD object is kept.
        It is preserving identity, not copying data.

PASS 3  What happens to the leftovers?
        Anything still in `seen` was in prev but not
        next. It gets released.
        That is the whole purpose: cleanup.

PASS 4  Now name it yourself.
        "Keep unchanged things, rebuild changed ones,
        free anything that disappeared."
```

Four passes, perhaps six minutes, and you can now describe a function you had never seen without knowing what hydrate or rev mean. That is what reading is.

The difference is not intelligence and it is not familiarity with the language. It is that the second reader never tried to understand the whole function at once. They asked four narrow questions in a fixed order and let the answers accumulate. Reading code is not a talent, it is a procedure, and procedures can be taught to a thirteen year old.

The method, generalised

## How to walk into a codebase you have never seen

The four passes scale from one function to a repository of two hundred thousand lines. What changes is the unit, not the procedure.

1. #### Find the entry point, not the beginning

  The first line of the first file is almost never where the story starts. Find what runs first when the program is used: the route handler, the main function, the event listener. Everything else is reachable from there, and reading alphabetically is the commonest way to waste a day.
2. #### Read the shapes before the logic

  What types move through this system? A list of what? A dictionary keyed by what? Understanding the data usually collapses the difficulty of the code, because most functions are obvious once you know precisely what they are handed.
3. #### Follow one realistic item all the way through

  One order, one user, one message. Trace it from arrival to storage, ignoring every branch it does not take. This single technique does more than any other and is what separates a reader from somebody scrolling.
4. #### Give yourself twenty minutes before asking anybody

  Long enough to build a real question, short enough that a whole afternoon is not lost to pride. The rule matters in both directions: students who ask at two minutes never build the skill, and students who refuse to ask for a day are performing rather than working.
5. #### Write the sentence you would tell a colleague

  One plain sentence for what the thing is for. If you cannot produce it, you have not finished reading, and the inability to write it is a far more reliable signal than the feeling of understanding.
6. #### Change something small and watch what breaks

  The fastest way to test a mental model is to perturb the system and predict the result first. Being wrong here is the whole value, and it is the only feedback reading naturally provides.

Two behaviours, side by side

## What a beginner does, and what a reader does instead

| Situation | What a beginner does | What a reader does |
| --- | --- | --- |
| Opening a new repository | Starts at the first file alphabetically | Finds what runs first |
| Meeting an unknown function | Reads every line in order | Checks inputs and outputs, then stops |
| Hitting an unfamiliar name | Stops to look it up immediately | Assumes a meaning, continues, verifies later |
| Facing a long file | Feels defeated, scrolls | Traces one item and ignores the rest |
| Being unsure | Rereads the same lines slowly | Changes something and predicts the break |
| Finishing | Feels they understand it | Writes one sentence saying what it is for |

The middle column is not a description of somebody unintelligent. It is a description of somebody who was taught to produce and never taught to comprehend, which is nearly everybody, including a great many people already working in the industry.

Habits

## Six things good readers do that look like shortcuts and are not

### Reading with a specific question

Never read code to understand it generally. Read it to answer something: where does this number come from, what runs when the button is pressed. Aimless reading feels diligent and retains nothing.

### Deliberately not looking things up

Assume a plausible meaning for an unknown name and keep going. Nine times in ten the assumption is right and the interruption would have cost the thread. Verify at the end, in one pass, cheaply.

### Reading the tests first

Tests are documentation that cannot go out of date, because they fail when they lie. In an unfamiliar codebase they are usually the fastest honest description of what something is supposed to do.

### Using the history as an explanation

A confusing line is often the residue of a specific bug. The commit that introduced it frequently says why, and version control is therefore a reading tool as much as a safety tool.

### Reading their own code from six months ago

The cheapest available source of unfamiliar code, and uniquely instructive because the student can compare what they meant with what they wrote. Almost every student is shocked the first time.

### Stopping when the question is answered

Understanding a whole system is not usually the goal and is rarely achievable. Understanding enough to make one correct change is the goal, and knowing where that line is separates efficient readers from exhausted ones.

How it is taught here

## You cannot practise this alone, which is the whole difficulty

Reading is the one skill in programming with no feedback loop. Write code and it either runs or it does not. Read code and form a wrong understanding, and absolutely nothing happens. You walk away confident and incorrect, and you find out three weeks later, or never.

So the teaching has to supply the feedback. Every session a student reads something they did not write and then explains it out loud, and a teacher who knows the code asks the question that finds the gap. What happens on an empty input. Which of these two paths runs more often. Where does this value come from originally.

The material is deliberately real: open source projects, the student's own older work, and increasingly diffs produced by an agent, which is the case examined on [the agentic coding page](/agentic-coding-classes). Textbook code is written to be understood and therefore teaches nothing about reading code that was written to be finished.

Within a term the visible change is that a student stops asking what a line does and starts asking what it is for, which is a different question and the one that unlocks a codebase. The debugging counterpart of this habit is set out on [how to debug code](/how-to-debug-code).

The catalogue

## Where reading is taught in the catalogue

It is not a separate product. It runs inside every course from the point a student can write a little, because reading and writing are two halves of one skill and separating them is what produced the gap.

I

### Where reading is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### Python for Teens

Reading runs inside it from the point a student can write a little. Splitting comprehension from production is the mistake that created the gap.

[Open the syllabus](/courses/python-complete-masterclass-teens)

DEPTH / 02

#### Git and GitHub for Teens

History as a reading tool. A confusing line is usually the residue of one specific bug, and the commit that introduced it often says why.

[Open the syllabus](/courses/git-github-version-control-course-for-teens)

DEPTH / 03

#### Coding Agents: Codex and Claude Code

Where reading earns its keep fastest now, because the material arrives faster than any human can carefully take it in.

[Open the syllabus](/courses/codex-and-claude-code-ai-coding-agents-course-for-teens)

DEPTH / 04

#### Git and GitHub, in depth

For adults whose real complaint is that onboarding takes too long. Branching, review, and a history several authors have touched.

[Open the syllabus](/courses/git-github-advanced-version-control-masterclass-for-professionals)

Fees

## What it costs, anywhere in the world

One flat pair of figures everywhere we teach outside India, billed in US dollars and charged monthly with no minimum term, so a family can stop at the end of any month.

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

Reading pairs most directly with debugging and with agentic coding, which is really reading applied to a diff somebody else generated.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about reading code

## What learners and parents ask

### Can reading code really be taught, or is it just experience?

It is a procedure, and procedures are teachable. Experience makes you faster at it, but the four passes are explicit and a competent eleven year old can apply them within a few sessions. What experience adds is a library of patterns you recognise, and that accumulates faster when somebody has given you the method than when you are inventing it alone.

### At what age does this make sense?

From about eleven, once a learner can write a little code themselves. There is nothing to read against before that. In practice it becomes the more valuable half of the lesson somewhere around thirteen, when students start building things big enough that they cannot hold the whole thing in their head.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, the same flat figures everywhere we teach outside India. There is no enrolment fee and no minimum term, and the first class is free without a card.

### Is this a separate course?

No, and deliberately so. It runs inside every course from the point the student can write a little, because splitting reading from writing is exactly the mistake that created this gap in the first place. What this page describes is a method we apply throughout, not a product with its own checkout.

### Why does it need a live teacher?

Because reading is the only programming skill with no natural feedback loop. Write wrong code and it breaks; read code wrongly and nothing whatsoever happens. Somebody who knows the code has to ask the question that exposes the gap, and no amount of video or reading material can do that.

### What code do students read?

Real code only: open source projects, their own work from months earlier, and diffs produced by coding agents. We avoid textbook examples, which are written to be understood and therefore teach nothing about reading code that was written to be finished under time pressure.

### My child can write code but freezes at anything they did not write. Is that normal?

It is extremely normal and it is exactly the symptom this addresses. It is not a sign of weak ability; it is a sign of a production-only education. The fix is a method plus supervised practice, and the change is usually visible within a term.

### Does this matter now that AI can explain code?

It matters more. An assistant will give you a fluent summary of code whether or not the summary is accurate, and the only defence against a confident wrong explanation is being able to check it yourself. Outsourcing comprehension to the same class of system that generated the code is not a plan.

### Is this useful for someone already working?

It is one of the most common one to one requests we get from working developers, usually phrased as onboarding taking too long. Those sessions run against the person's actual codebase rather than ours, and are typically shorter and more frequent than a student track.

### What happens after I send the form?

A mentor calls to arrange the free class. For this one, bring code you did not write and do not understand, and we will read it together in the session. That is more useful than any assessment we could set, and it shows you immediately whether the method does anything for you.

Start

## Bring code you do not understand

The free first class for this one has a specific shape: bring something real that you did not write and cannot follow. An open source file, a diff an agent produced, your own project from last year. We read it together using the four passes, and by the end of ninety minutes you will either be able to say what it is for or you will know exactly which pass you got stuck on. Nothing is charged and no card is requested.

Rather read first? [How to debug code](/how-to-debug-code), [agentic coding](/agentic-coding-classes), or [how to think like a programmer](/how-to-think-like-a-programmer).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20learning%20to%20read%20code%20properly.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

---

*Canonical: https://learn.modernagecoders.com/how-to-read-code*
