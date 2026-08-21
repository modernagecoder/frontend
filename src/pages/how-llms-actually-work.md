---
title: "How LLMs Actually Work | Fluent and Wrong Are Not Opposites"
description: "A language model predicts the next token, then does it again. That is the whole loop. Why hallucination follows, why it miscounts letters, and how we teach it."
canonical: https://learn.modernagecoders.com/how-llms-actually-work
source: src/pages/how-llms-actually-work.html
---
> A language model predicts the next token, then does it again. That is the whole loop. Why hallucination follows, why it miscounts letters, and how we teach it.

Start here

## Where this is taught in the catalogue

At three depths, by age. The honest simplified version for children, the actual mechanism for teenagers with an API project attached, and the full treatment including training dynamics for adults.

[![AI Literacy for Kids course thumbnail](/images/ai-literacy-for-kids.webp)  DEPTH / 01 AI Literacy for Kids The honest simplified version from about eight: a very good guesser at what comes next, which looks nothing up, and can be sure and wrong at once. Open the syllabus →](/courses/ai-literacy-for-kids-course)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  DEPTH / 02 AI and Machine Learning for Teens The actual loop, tokenisation, training against inference, then something built on an API so the abstraction stops being one. Open the syllabus →](/courses/ai-ml-masterclass-teens)[![Generative AI: LLMs, RAG and Agents course thumbnail](/images/generative-ai-college.webp)  DEPTH / 03 Generative AI: LLMs, RAG and Agents The full treatment for adults: adaptation, grounding, and agents that are bounded, logged and loud when something goes wrong. Open the syllabus →](/courses/complete-generative-ai-masterclass-college)

The short answer

A large language model is trained to produce a probability distribution over the next token given the text so far, then to sample one, append it and repeat. That loop is the whole of inference: nothing in it consults a database or checks whether a sentence is true. Fluency is therefore what the objective optimises directly and truth is only correlated with it, which is why a confident, well-formed, invented citation is not a malfunction but the system doing exactly what it was built to do. Modern Age Coders teaches this mechanism from about age eight in honest simplified form and in full to teenagers and adults. Group teaching is USD 100 a month, private is USD 150, first class free.

The single idea

## Fluent and wrong are not opposites

Almost every misunderstanding about these systems, in both directions, comes from assuming that something which writes well must be doing something like knowing.

A language model is trained to do one thing: given some text, produce a probability distribution over what comes next. That is not a simplification for children, it is the objective. Everything impressive it does is a consequence of doing that extremely well across an enormous quantity of text.

Which means fluency is the thing being optimised, directly. Truth is not. Truth correlates with fluency, because true sentences are common in the training text and coherent documents tend to be accurate ones, and correlation is why the systems are useful at all. But it is a correlation, and it can break without anything looking different.

That is the entire explanation of the behaviour people find most unnerving: a confident, well-formed, completely invented citation. The model was not lying, because lying requires a belief about truth. It produced what a citation in that position usually looks like, which is exactly what it was built to do.

Understanding this changes how a person uses the tools far more than any list of prompting tips. It tells you where to check, what kinds of question are structurally risky, and why a confident tone carries no information at all about correctness. That is the whole argument for teaching it to a twelve year old.

Two mechanisms, shown

## The loop, and the reason it cannot count letters

These two blocks explain a large fraction of everything odd you have ever seen one of these systems do.

***WHAT IT IS ACTUALLY DOING**every single step*

```
"The capital of France is" ->

   Paris    0.94
   the      0.02
   located  0.01
   a        0.01
   ...

Pick one. Append it. Do it all again.

# That is the whole loop. There is no
# lookup, no database, no step where it
# checks whether the sentence is true.
```

Once you have seen the loop, hallucination stops being mysterious. Nothing in it ever consults reality; the model is producing what such a sentence usually looks like.

***WHY IT MISCOUNTS LETTERS**tokenisation*

```
"strawberry"  ->  ["str", "aw", "berry"]

# The model never sees s-t-r-a-w-b-e-r-r-y.
# It sees three opaque ids: 496, 707, 15717.

Q: how many r in strawberry?
It is being asked to count something
it structurally cannot see.
```

This is not a gap in knowledge that a bigger model fixes by knowing more. It is a consequence of the representation, which is why the failure looks so strange from outside.

The right-hand block is the more important one and it is genuinely all there is to inference. Take the text so far, produce a distribution over the next token, choose one, append it, and repeat. There is no separate stage where the sentence is checked against anything. The model does not know whether it is answering from something it saw a million times or improvising.

The left-hand block explains a class of failure that makes people think the systems are pretending. Text is split into tokens before the model sees it, so a question about individual letters is a question about something below its resolution. It is not being obtuse; it has been handed three numbers and asked about spelling.

How one gets made

## Five stages, and what each one can and cannot fix

Most public confusion comes from attributing a property to the wrong stage.

1. #### Tokenisation: text becomes numbers

  Before anything, text is chopped into pieces from a fixed vocabulary and each piece becomes an integer. Common words are one token, unusual ones are several, and individual characters are usually invisible. Every downstream oddity about spelling, arithmetic digits and unusual languages starts here.
2. #### Pretraining: predict the next token, at enormous scale

  The model is shown vast quantities of text and repeatedly asked what comes next, adjusting itself when wrong. This is where essentially all of the capability comes from, and it is also where the knowledge cutoff comes from: it knows the text it saw and nothing after.
3. #### Fine-tuning and preference training: shaping the manner

  Further training on curated examples and human preferences makes it helpful, safer and conversational. This changes behaviour and style substantially and adds relatively little new knowledge, which is why a polite refusal and a confident fabrication can come from the same model.
4. #### Inference: the loop, one token at a time

  At use time it does only what the second block above shows. Sampling settings decide how adventurously it picks among likely candidates, which is the entire technical content of temperature and why the same question can produce different answers.
5. #### The context window: everything it can see right now

  The model has no memory between conversations. Whatever it appears to remember was placed back into the window by the surrounding software. Deciding what goes in there is the real engineering problem, and it is the subject of the context engineering page.

Consequences, derived

## Six familiar behaviours, and the mechanism each one comes from

| Behaviour you notice | The mechanism it comes from | What actually helps |
| --- | --- | --- |
| Invents a plausible citation | Nothing in the loop checks reality | Verify externally; never trust tone |
| Cannot count letters in a word | It sees tokens, not characters | Give it a tool, or do it in code |
| Forgets what you said earlier | It fell out of the context window | Restate, or retrieve it deliberately |
| Knows nothing about last week | Pretraining has a cutoff date | Supply the document yourself |
| Different answer each time | Sampling, not determinism | Lower the temperature, or fix a seed |
| Changes answer when you push back | Agreement is a likely continuation | Ask for evidence, not for confirmation |

Every row is derivable from the loop rather than memorised as a quirk, which is the difference between understanding these systems and having a list of tips. A student who has the mechanism can predict a failure mode in a tool released next year; a student with the tips cannot.

Using this

## Six checks that follow directly from how it works

### Check anything that has a name, number or date

Proper nouns, statistics, citations and dates are precisely where fluency and truth part company, because a plausible-looking one is easy to generate and impossible to detect by reading. These are the highest-yield things to verify and almost the only ones worth verifying every time.

### Treat confidence as style, not evidence

The tone is produced by the same process as the content and carries no signal about correctness. A hedged wrong answer and a confident wrong answer are equally wrong, and the confident one is more dangerous only because of how you respond to it.

### Supply the source rather than asking it to recall

Handing the model the document and asking about that is a different and far more reliable operation than asking what it remembers. This is the whole idea behind retrieval, and it is the single biggest reliability improvement available to an ordinary user.

### Ask it to show work you can check

Not because the reasoning is a true account of an internal process, but because intermediate steps are individually verifiable. A wrong step is visible in a way a wrong conclusion is not.

### Be suspicious when it agrees with you immediately

Agreement is often the most likely continuation of a sentence in which somebody pushed back. If a challenge flips the answer without new evidence, you have learned about the loop rather than about the question.

### Know which tasks are structurally safe

Rewriting, summarising supplied text and generating options are low risk because the material is in front of it. Recalling facts, doing exact arithmetic and counting are high risk. Sorting your requests into those two piles is most of using these tools well.

Teaching it

## What a child should be told, and what we will not pretend

### What we teach, by age

Under twelve: it is a very good guesser about what words come next, it does not look anything up, and it can be completely wrong while sounding completely sure. That is age appropriate and it is also true, which matters more than it sounds.

Teenagers get the actual loop, tokenisation, and training against inference, and then build something with an API so the abstraction becomes concrete. Adults and university students go further, into how the context window is filled, which is [context engineering](/context-engineering-course), and how to measure whether any of it works, which is [evaluation](/ai-evaluations-course).

### What we will not pretend

**That anybody fully understands why these work as well as they do.** The mechanism is clear and the emergent capability is genuinely an open research question. A course claiming otherwise is overselling.

**That this page settles whether they understand anything.** That is a real philosophical dispute among serious people, and we teach the mechanism and let students argue about the rest, which most of them enjoy considerably.

**That knowing this makes you an AI engineer.** It is the foundation. Building on it is the [Build AI](/learn-to-build-ai) track, and it takes a good deal longer.

The catalogue

## Where this is taught in the catalogue

At three depths, by age. The honest simplified version for children, the actual mechanism for teenagers with an API project attached, and the full treatment including training dynamics for adults.

I

### Where this is taught, by depth

Chosen for this page rather than listed in full

DEPTH / 01

#### AI Literacy for Kids

The honest simplified version from about eight: a very good guesser at what comes next, which looks nothing up, and can be sure and wrong at once.

[Open the syllabus](/courses/ai-literacy-for-kids-course)

DEPTH / 02

#### AI and Machine Learning for Teens

The actual loop, tokenisation, training against inference, then something built on an API so the abstraction stops being one.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

DEPTH / 03

#### Generative AI: LLMs, RAG and Agents

The full treatment for adults: adaptation, grounding, and agents that are bounded, logged and loud when something goes wrong.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

DEPTH / 04

#### AI and ML Masterclass

For anyone who wants to train one rather than understand one. Two more years of work, and a different subject from this page.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

Students who arrive through this page also take [Python and AI for Kids](/courses/python-ai-kids-masterclass) · [AI Literacy for Kids](/courses/ai-literacy-for-kids-course) · [Python for Teens](/courses/python-complete-masterclass-teens) · [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) · [Data Science for Teens](/courses/data-science-course-for-teens-python-data) · [Git and GitHub](/courses/git-github-version-control-course-for-teens) · [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) · [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college). The full list is on the [catalogue](/courses).

Fees

## What it costs, anywhere in the world

The same flat pair of figures everywhere we teach outside India, in US dollars, charged monthly with no minimum term.

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

This page is the mechanism. Context engineering, RAG and evaluation are the three things you build on top of it once you accept what the loop does and does not do.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[Context engineering/context-engineering-course](/context-engineering-course)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about how LLMs work

## What learners and parents ask

### Does the model understand what it is saying?

That is a genuine dispute among serious people and we do not pretend to settle it in a class. What we teach is the mechanism, which is not in dispute, and then let students argue about the rest, which they enjoy a great deal. What we will say firmly is that the loop contains no step which checks a sentence against reality, and that fact alone explains most of the behaviour people find puzzling.

### Why does it make things up?

Because nothing in the process distinguishes recalling from improvising. The model produces what text of that shape usually looks like, and a plausible citation is exactly as easy to generate as a real one. It is not lying, which would require a belief about truth; it is doing the only thing it does, in a case where fluency and accuracy have come apart.

### How much does it cost to learn this properly?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, and these are the same figures everywhere we teach outside India. No enrolment fee, no minimum term, and the first class is free without a card.

### What age can understand this?

The honest simplified version works from about eight: it is a very good guesser about what comes next, it does not look anything up, and it can be totally wrong while sounding totally sure. That is age appropriate and true, which is the combination we insist on. The actual loop and tokenisation land well from about thirteen.

### Do you need maths for this?

Not for the mechanism on this page, which is conceptual and needs no notation at all. You need mathematics to build one, and specifically linear algebra, probability and calculus, which is what the machine learning courses cover. Understanding what these systems do and being able to train one are separated by a couple of years of work.

### Is this out of date already?

The specific models are, constantly. The content of this page is not, because it describes the objective and the inference loop, which have been stable throughout every generation so far and are what the architecture is built to serve. That is exactly why we teach mechanism rather than a tour of current products.

### Why does it forget our conversation?

There is no memory between conversations. Everything the system appears to remember was put back into the context window by the software wrapped around the model, and anything that falls out of that window is gone completely. What goes into it is a design decision, and a large one, which is the subject of the context engineering page.

### Should children be using these tools at all?

Ours do, with the mechanism explained first and with age floors respected, because most of these products set a minimum age and several are eighteen plus. The order matters more than the answer: a child who has been told how it works checks things, and a child who has been handed a magic answer box does not.

### Is this the same as your AI and machine learning courses?

This is the foundation those courses assume. The machine learning track goes on to train models, measure error against a baseline and deploy something, which is months of work. This page is the conceptual grounding, and it is worth having even for a learner who never intends to build anything.

### What happens after I send the form?

A mentor calls to arrange the free class. For this topic the session is usually spent making a model fail live, on purpose, in two or three of the ways this page predicts, because watching the mechanism produce a specific wrong answer teaches more than any explanation of it, including this one.

Start

## The free class is spent making it fail, deliberately

The most useful ninety minutes we can give a new learner on this topic is not an explanation. It is sitting with a model and making it produce a confident wrong answer on purpose, in two or three of the ways this page predicts, and then explaining why each one happened. It costs nothing, needs no card, and it tends to change how a family uses these tools that same week regardless of whether they ever enrol.

Rather read first? [Context engineering](/context-engineering-course), [RAG systems](/rag-systems-course), or [evaluations](/ai-evaluations-course).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20trying%20to%20understand%20how%20language%20models%20actually%20work.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

---

*Canonical: https://learn.modernagecoders.com/how-llms-actually-work*
