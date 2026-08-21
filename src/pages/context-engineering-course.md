---
title: "Context Engineering Course | The Window Is What You Control"
description: "You do not control the model, you control what it can see. Why filling the window makes things worse, what belongs in it, and how every decision gets measured."
canonical: https://learn.modernagecoders.com/context-engineering-course
source: src/pages/context-engineering-course.html
---
> You do not control the model, you control what it can see. Why filling the window makes things worse, what belongs in it, and how every decision gets measured.

Start here

## Where context engineering sits in the catalogue

Inside the generative AI masterclass and the agent courses, because a context window is only interesting once something real is being assembled into it.

[![Generative AI: LLMs, RAG and Agents course thumbnail](/images/generative-ai-college.webp)  DEPTH / 01 Generative AI: LLMs, RAG and Agents Assembling a window: which instructions, which examples, which retrieved passages, and the token budget they share. Open the syllabus →](/courses/complete-generative-ai-masterclass-college)[![AI and Machine Learning for Teens course thumbnail](/images/ai-ml-teens.webp)  DEPTH / 02 AI and Machine Learning for Teens The mechanism this depends on, because half of context engineering follows from the model having no memory at all. Open the syllabus →](/courses/ai-ml-masterclass-teens)[![Python and AI Automation course thumbnail](/images/python-college.webp)  DEPTH / 03 Python and AI Automation For adults building something real, where a bloated window is a monthly bill rather than an abstraction. Open the syllabus →](/courses/python-ai-automation-masterclass-college)

The short answer

Context engineering is deciding what goes into a model's context window for a given request: instructions, examples, retrieved passages, conversation history, tool definitions and their order. It replaced prompt engineering because in any real system the instructions are a small fraction of the window and everything else is assembled by code. The instinct to include everything because the window is large produces slower, costlier and measurably worse results, since attention is finite and diluted by irrelevance. Modern Age Coders teaches it as controlled experiments against an evaluation set rather than as prompting tips. Group teaching is USD 100 a month, private USD 150, first class free.

The variable you actually control

## You do not control the model. You control what it can see.

Context engineering is the discipline of deciding what goes into the window for a given request. It replaced prompt engineering for a straightforward reason: the prompt turned out to be the small part.

The weights are fixed. You did not train them and you cannot adjust them. What you decide, entirely, is the text placed in front of the model before it answers: the instructions, the examples, the retrieved documents, the conversation so far, the tools it may call, and how all of that is ordered.

Prompt engineering treated that as a question of phrasing, and phrasing does matter a little. But in any real system the instructions are a small fraction of the window and almost everything else is assembled by code you wrote, from sources you chose, in an order you decided. That assembly is the engineering.

The reason this is a discipline rather than a knack is that the obvious strategy is wrong. Windows are now large enough to hold a great deal, so the instinct is to include everything and let the model sort it out. That is slower, more expensive and, importantly, worse at the thing you wanted.

Attention is finite and diluted by irrelevance. A window containing the right paragraph and little else outperforms one containing the right paragraph buried in sixty thousand tokens of manual, consistently and measurably. More room is not more attention, and the gap between those two ideas is the whole subject.

Two windows, same question

## Ninety-six thousand tokens, and three thousand that work better

Both of these answer the same user question. One of them is what people build first.

***THE INSTINCT: PUT EVERYTHING IN**context window*

```
[ system prompt        1,200 tokens ]
[ 40 few-shot examples 9,000 tokens ]
[ entire user manual  60,000 tokens ]
[ full chat history   22,000 tokens ]
[ 12 tool definitions  4,000 tokens ]
[ the actual question      14 tokens ]

# The one thing that matters is 0.01%
# of what the model is looking at.
```

It fits. It is slow, expensive, and measurably worse at finding one specific fact than a window a twentieth of the size containing the right paragraph.

***THE SAME TASK, ASSEMBLED**context window*

```
[ system prompt, trimmed   240 tokens ]
[ 3 examples, chosen for
  THIS input type          600 tokens ]
[ 2 retrieved passages,
  reranked               1,100 tokens ]
[ summary of prior turns   300 tokens ]
[ 3 relevant tools         900 tokens ]
[ the question              14 tokens ]

# ~3k tokens. Faster, cheaper, and better.
```

Nothing here is a trick. Every line is a decision somebody made about what this particular request needs, and each decision is testable against an evaluation set.

Look at the last line of the left block. The question the user actually asked is a rounding error in what the model is attending to, and everything above it is competing for the same finite attention. The system is not broken; it has been handed a haystack and asked about a needle that it was also given.

The right block contains no clever technique. Each line is a decision: these three examples because this input is of that type, these two passages because retrieval ranked them, this summary because the older turns matter less than their conclusion. Decisions are testable, which is what makes this engineering rather than taste.

What goes in

## Six components, and the question to ask about each

Every one of these has a budget, and the budgets compete. Deciding the split is the daily work.

1. #### Instructions: what is the smallest version that works?

  System prompts grow by accretion, because every incident adds a clause and nothing is ever removed. Most are several times longer than they need to be, and the excess competes with the material that actually answers the question. Trim, measure, keep the trim if nothing broke.
2. #### Examples: are these chosen, or just present?

  A handful of examples matched to the shape of this particular input outperforms forty generic ones by a wide margin. If your examples are the same on every request, they are decoration for most of them.
3. #### Retrieved material: is this the top three, or the top forty?

  This is usually the largest component and the one with the worst ratio of relevant to present. Ranking matters more than recall here, which is the argument set out on the RAG page.
4. #### History: does the model need the transcript or the conclusion?

  Conversations grow without bound and old turns are mostly noise by the tenth exchange. Summarising resolved parts and keeping only live threads costs a little accuracy and buys a great deal of room.
5. #### Tools: is every definition earning its place?

  Twelve tool definitions when three are relevant is thousands of tokens of distraction plus a wider set of wrong choices. Filtering the tool list by task is one of the cheapest available improvements and almost nobody does it.
6. #### Order: what is nearest the question?

  Position affects what gets used. Putting the decisive material adjacent to the question rather than at the top of a long window is a free change, and it is one worth testing on your own set rather than trusting anybody's rule about it.

Diagnosis

## What the symptom says about the window

| The symptom | What it usually means | The change to try |
| --- | --- | --- |
| Ignores an instruction you gave | Buried under retrieved bulk | Move it adjacent to the question |
| Answers from the wrong document | Too many passages, poorly ranked | Fewer passages, add a reranker |
| Loses the thread in long chats | History pushed the point out | Summarise resolved turns |
| Picks a strange tool | Twelve definitions, three relevant | Filter tools by task |
| Slow and expensive per call | Window filled because it fits | Budget each component, measure |
| Good on short inputs, poor on long | Attention diluted, not capability lost | Retrieve rather than include |

The pattern across the table is that most behaviour people describe as the model being unreliable is a property of what it was shown. That is encouraging, because what it was shown is the part you can change, and unlike the weights it is fully under your control.

Traps

## Six habits that make a window worse while feeling thorough

### Adding a clause after every incident

System prompts accumulate rules that each made sense once. Nobody removes anything because removal feels risky, and after a year the instructions are longer than the content and internally contradictory.

### Confusing window size with attention

A larger window means more can be present, not that more will be used well. The measured result is consistently that a smaller, better-chosen window beats a larger stuffed one at locating a specific fact.

### Keeping the whole conversation forever

By the fifteenth turn most of the history is resolved and irrelevant, and it is crowding out the retrieval that would answer the current question. Summarise, keep the live threads, drop the rest.

### Generic examples on every request

Few-shot examples are powerful when matched to the input and near-useless when they are the same regardless. If the examples never change, ask what they are doing on a request they do not resemble.

### Exposing every tool you have

The cost is not only tokens. A longer menu means more opportunities to choose wrongly, and the wrong tool called confidently is more expensive than a missing capability.

### Changing several things at once

The commonest reason a team cannot tell what helped. One change, one run of the evaluation set, one attributable result. Anything else is the week of vibes described on the evaluations page.

The course

## How it is taught, and why it is inseparable from measurement

Every claim on this page is testable and none of it should be taken on authority, including from us. So the course is built as a sequence of experiments: change one thing about the window, run the evaluation set, look at what moved. Students arrive expecting prompt tips and leave having run controlled comparisons.

That is why this cannot be taught apart from [evaluations](/ai-evaluations-course). A context decision without a measurement is a preference, and a course teaching preferences about window layout would be exactly the sort of thing this series exists to argue against.

The prerequisites are honest ones. You need to understand the loop, which is on [how LLMs actually work](/how-llms-actually-work), because half of context engineering follows directly from the fact that the model has no memory and sees only what you assembled.

And you need retrieval, because in most real systems the largest and most consequential part of the window is fetched rather than written. That half is [the RAG page](/rag-systems-course), and the two courses are usually taken together.

The catalogue

## Where context engineering sits in the catalogue

Inside the generative AI masterclass and the agent courses, because a context window is only interesting once something real is being assembled into it.

I

### Where context engineering is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### Generative AI: LLMs, RAG and Agents

Assembling a window: which instructions, which examples, which retrieved passages, and the token budget they share.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

DEPTH / 02

#### AI and Machine Learning for Teens

The mechanism this depends on, because half of context engineering follows from the model having no memory at all.

[Open the syllabus](/courses/ai-ml-masterclass-teens)

DEPTH / 03

#### Python and AI Automation

For adults building something real, where a bloated window is a monthly bill rather than an abstraction.

[Open the syllabus](/courses/python-ai-automation-masterclass-college)

DEPTH / 04

#### AI Agents with Copilot Studio

Where tool definitions compete for the same window. Taught one to one only, and priced as private teaching.

[Open the syllabus](/courses/ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals)

Students who arrive through this page also take [Python and AI for Kids](/courses/python-ai-kids-masterclass) · [AI Literacy for Kids](/courses/ai-literacy-for-kids-course) · [Python for Teens](/courses/python-complete-masterclass-teens) · [AI and Machine Learning for Teens](/courses/ai-ml-masterclass-teens) · [Data Science for Teens](/courses/data-science-course-for-teens-python-data) · [Git and GitHub](/courses/git-github-version-control-course-for-teens) · [AI and ML Masterclass](/courses/ai-ml-masterclass-complete-college) · [Generative AI: LLMs, RAG and Agents](/courses/complete-generative-ai-masterclass-college). The full list is on the [catalogue](/courses).

Fees

## What it costs, anywhere in the world

The same flat pair of figures everywhere we teach outside India, in US dollars, monthly, with no minimum term and no enrolment fee.

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

This page sits between the mechanism, which explains why the window is all there is, and evaluation, which is the only thing that makes a context decision more than a preference.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[RAG systems/rag-systems-course](/rag-systems-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about context engineering

## What learners ask about context

### How is this different from prompt engineering?

Prompt engineering is about phrasing the instructions, which is a genuine but small part. Context engineering is about everything in the window: which examples, which retrieved passages, how much history, which tools, in what order and within what token budget. In a real system the instructions are a small fraction of what the model sees.

### Is a bigger context window not the answer?

No, and this is the most common misconception. A larger window means more can be present, not that more is attended to well. Filling it is slower, costs more per call, and is measurably worse at locating one specific fact than a small window containing the right paragraph. More room is not more attention.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, and these are the same flat figures everywhere we teach outside India. No enrolment fee, no minimum term, and the first class is free without a card.

### What do I need to know first?

The mechanism, because half of context engineering follows from the model having no memory and seeing only what you assembled, and enough Python to build the assembly. Retrieval helps a great deal too, since in most systems the largest part of the window is fetched rather than written.

### Can you just tell me the optimal layout?

No, and anybody who does is selling you their intuition. The correct order and budget depend on your task, your documents and your model, and they change when any of those change. What we teach is how to find out for your case, which is why this course is inseparable from evaluation.

### Does this apply if I only use ChatGPT or Claude as a user?

Partly, and usefully. Supplying the document instead of asking from memory, starting a fresh conversation when the thread has drifted, and putting the actual question last rather than first are all context decisions available to any user. The engineering version is for people building systems.

### Is this stable knowledge or will it change?

The specific numbers change constantly and the principles have been stable across every model generation so far, because they follow from finite attention and from the model having no memory. That is why we teach the reasoning and expect the constants to move.

### Can teenagers learn this?

Yes, if they write Python confidently, and it teaches experimental discipline unusually well. The whole subject is a sequence of controlled comparisons, which makes it one of the better introductions to changing one thing at a time that we have found.

### How does this relate to fine-tuning?

They solve different problems and are often confused. Fine-tuning changes behaviour and style by training on examples; context engineering changes what the model knows about this specific request. Most problems people try to fine-tune away are context problems, and trying the cheaper option first is almost always right.

### What happens after I send the form?

A mentor calls to arrange the free class. Bring a system prompt you currently use, however rough, and we will look at what is in it and what is missing. That conversation usually surfaces two or three decisions the author did not realise they had made.

Start

## Bring a prompt you already use

The free first class is most useful when it starts from something real. Bring a system prompt or an application you have built, however rough, and we will go through what is occupying the window, what is competing with what, and which single change would be worth measuring first. Ninety minutes, no card, and if the honest answer is that you need the mechanism or retrieval before this, we will say so.

Rather read first? [How LLMs actually work](/how-llms-actually-work), [RAG systems](/rag-systems-course), or [evaluations](/ai-evaluations-course).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20learning%20context%20engineering%20properly.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

---

*Canonical: https://learn.modernagecoders.com/context-engineering-course*
