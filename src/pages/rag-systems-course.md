---
title: "RAG Systems Course | Retrieval Is the Part That Breaks"
description: "Most RAG failures are retrieval failures, not model failures. Build over a corpus you know, measure retrieval before generation, localise faults by stage."
canonical: https://learn.modernagecoders.com/rag-systems-course
source: src/pages/rag-systems-course.html
---
> Most RAG failures are retrieval failures, not model failures. Build over a corpus you know, measure retrieval before generation, localise faults by stage.

The short answer

Retrieval augmented generation puts relevant text in front of a model before it answers, which removes most confident invention. The failures that remain are overwhelmingly retrieval failures rather than model failures: the right passage was never fetched, was ranked far down, or arrived truncated, and no prompt can improve a document that is absent. Modern Age Coders teaches RAG as search engineering, with a labelled question set built first and retrieval measured on its own before any generated answer is judged, over a corpus the student knows well enough to grade. Group teaching is USD 100 a month, private is USD 150, first class free.

The reframe

## Retrieval augmented generation is a search problem wearing an AI costume

RAG means fetching relevant text and putting it in front of the model before it answers. The generation half gets all the attention. The retrieval half is where it fails.

The idea is genuinely good and it addresses the real limitation described on [the mechanism page](/how-llms-actually-work): a model has no access to your documents and nothing in its loop consults reality. Hand it the relevant passage and the whole class of confident invention largely disappears.

So people build one, it works impressively on the first ten questions, and then it starts producing answers that are wrong in a specific and infuriating way: confident, well formed, and drawn from the wrong part of the document. And because the visible component is the model, the model is what gets replaced.

In the systems we have taken apart with students, the large majority of failures are upstream of the model entirely. The relevant passage was never retrieved, or was retrieved and ranked fortieth, or arrived cut in half. No model can answer from text it was not given, and no prompt improves a document that is absent.

Which means the skill this course actually builds is search engineering: chunking, embeddings, ranking, and above all measuring retrieval on its own before anybody looks at an answer. That is less exciting than it sounds in a product demo, and it is where the difference between a toy and a system lives.

One failure, traced properly

## The chunking everybody writes first, and where the fix belongs

Read the left block, then the right, which is how we teach students to localise a RAG failure instead of guessing at it.

***THE CHUNKING EVERYBODY WRITES FIRST**python*

```
chunks = [text[i:i+1000]
          for i in range(0, len(text), 1000)]

# Splits mid-sentence. Splits mid-table.
# Splits the heading away from the clause
# it governs.

# "Section 7.2 Refunds" ends up in chunk 41.
# The refund policy is in chunk 42, and now
# says "this" with no antecedent anywhere.
```

Then somebody asks about the refund policy, the right chunk is retrieved, and the answer is confidently wrong. Everyone blames the model.

***WHERE THE FIX ACTUALLY GOES**the pipeline*

```
ASK: "what is the refund window?"

 1 Retrieval   did the right chunk come back?
   -> NO in ~70% of failures we see.
      Fix chunking, not the prompt.

 2 Ranking     was it in the top 3, or 40th?
   -> if 40th, it never reached the model.
      Add a reranker.

 3 Context     did it survive the window?
   -> truncated at the join is common.

 4 Generation  given the right text, was the
   answer still wrong?
   -> ONLY here is it a model problem.
```

Four stages, and three of them are search engineering. Teams reach for a better model at stage four when the failure was at stage one.

The right-hand block is bisection applied to a pipeline, which is the same procedure as [debugging](/how-to-debug-code) and for the same reason: four stages, each individually checkable, and a decisive answer at each one. The alternative, which is what most teams do, is to adjust the prompt and hope.

Notice what stage one requires. To ask *did the right chunk come back*, somebody must have decided in advance which chunk is right. That is a labelled set of questions and expected sources, and building it is the least glamorous and most valuable morning in the course.

The pipeline

## Seven stages, and the four places students underestimate the work

1. #### Ingest, and keep where everything came from

  File, page, section, date. Students skip provenance because it is dull and then cannot cite, cannot debug a bad answer, and cannot remove a document that turned out to be wrong. Retrofitting it means reprocessing everything.
2. #### Chunk along the structure, not the character count

  Split at headings, sections and paragraph boundaries, and carry the heading into the chunk so a clause knows what it belongs to. Fixed-width splitting is the single largest source of confidently wrong answers we see.
3. #### Embed, and understand what similarity means here

  Embeddings capture topical closeness, which is not the same as answering the question. Two passages about refunds are close together whether one grants them and the other forbids them, and that distinction is invisible to the geometry.
4. #### Retrieve with keywords as well as vectors

  Pure vector search misses exact terms: product codes, names, clause numbers, anything rare. Hybrid retrieval combining both is unfashionable, boring and consistently better, which describes most of this subject.
5. #### Rerank, because position decides what the model sees

  Getting the right passage into the top fifty is easy; getting it into the top three is the actual problem, and only the top few reach the model. A reranking pass is usually the largest single quality improvement available.
6. #### Generate with instructions about not knowing

  Tell the model explicitly to answer only from the supplied passages and to say when they are insufficient. Without that instruction it will fill the gap from its training, fluently, and you will not be able to tell.
7. #### Cite, and then verify the citations are honest

  A citation makes an answer look checked, which is dangerous if nobody checked it. We have students deliberately produce an answer that cites a real passage and misreads it, because seeing that once permanently changes how they treat cited output.

Diagnosis

## What the symptom tells you about which stage is broken

| The symptom | The stage that is broken | What usually fixes it |
| --- | --- | --- |
| Answers from the wrong section | Chunking split the context away | Split on structure, carry headings |
| Cannot find exact codes or names | Vector-only retrieval | Add keyword search alongside |
| Right passage exists but is ignored | Ranking, not retrieval | Add a reranker |
| Answer contradicts the document | Generation ignored the passage | Instruct answer-only-from-context |
| Confidently answers the unanswerable | No instruction to decline | Require saying when it does not know |
| Was good, quietly got worse | The corpus changed, nobody re-measured | A regression set that runs on ingest |

This table is the most practically useful thing on the page and it is the sort of knowledge that normally takes a team two frustrating quarters to assemble. Each row maps a symptom people describe as the AI being bad onto a specific, fixable, unglamorous stage.

Traps

## Six things that quietly ruin a retrieval system

### Never measuring retrieval separately

The single most consequential omission. If you only ever judge final answers, you cannot tell whether the failure was fetching or writing, and you will spend months tuning prompts against a search problem.

### A corpus nobody has read

Building over documents you do not know means every evaluation is guesswork, because you cannot say what the right answer was. Students who choose an unfamiliar corpus because it seems impressive learn considerably less.

### Ignoring the documents that contradict each other

Real corpora contain a current policy and three superseded ones. The system will happily quote the 2019 version with total confidence. This is a document governance problem and no amount of engineering hides it.

### Chunks too large to be precise

Enormous chunks retrieve well and answer badly, because the relevant sentence is buried among four pages of unrelated text. Precision and recall trade off here and the trade has to be made deliberately.

### Assuming a bigger context window removes the problem

Putting everything in the window is expensive, slow and measurably worse at finding a specific fact than good retrieval. More room does not equal better attention to the part that mattered.

### Treating a citation as proof

The most dangerous habit, because it looks like rigour. An answer can cite a genuine passage and describe it incorrectly, and the presence of a link makes readers stop checking exactly when they should start.

The course

## What students build, and the honest limits of the technique

### The build

Every student ships a system over a corpus they genuinely care about and know well enough to grade: their own notes, a rulebook for something they play, a public dataset in a field they follow. Knowing the corpus matters, because you cannot judge retrieval on documents you have never read.

Before any answer is generated they build a labelled question set and measure retrieval alone. Most students discover their first system finds the right passage in roughly half of cases, and every subsequent improvement is then attributable rather than hoped for. The measurement discipline is set out on [the evaluations page](/ai-evaluations-course).

### Three honest limits

**It cannot answer questions requiring the whole corpus.** How many contracts mention indemnity is a database query, not a retrieval question, and no amount of tuning converts one into the other.

**It inherits your documents' contradictions.** If two pages disagree, the system will confidently report whichever it retrieved. RAG is not a truth layer.

**Citations are not verification.** A cited answer can still misread the passage it cites, and a link makes it look checked. We make students break this on purpose.

The catalogue

## Where RAG sits in the catalogue

Inside the generative AI masterclass and the data science track, because retrieval is a data problem before it is a model problem and the prerequisites are the ones that teach handling messy documents.

I

### Where retrieval is taught

Chosen for this page rather than listed in full

DEPTH / 01

#### Generative AI: LLMs, RAG and Agents

The main route. Chunking, embeddings, hybrid retrieval, reranking and citation, measured before anybody looks at a generated answer.

[Open the syllabus](/courses/complete-generative-ai-masterclass-college)

DEPTH / 02

#### Data Science Masterclass

The prerequisite that decides everything. Retrieval is a data problem first, and messy documents are where it is won or lost.

[Open the syllabus](/courses/data-science-complete-masterclass-college)

DEPTH / 03

#### Data Science for Teens

The teenage version: files that arrive broken, categories spelled two ways, and the row that would have poisoned the answer.

[Open the syllabus](/courses/data-science-course-for-teens-python-data)

DEPTH / 04

#### AI and ML Masterclass

For students who want to understand what an embedding is rather than call one, which is a genuinely different course.

[Open the syllabus](/courses/ai-ml-masterclass-complete-college)

Fees

## What it costs, anywhere in the world

One flat pair of figures everywhere we teach outside India, billed in US dollars, monthly, no minimum term and no enrolment fee.

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

RAG depends on the mechanism page and is impossible to improve without the evaluations page. Context engineering is what decides what to do with the passages once you have them.

[Agentic coding/agentic-coding-classes](/agentic-coding-classes)[Reading code/how-to-read-code](/how-to-read-code)[Debugging/how-to-debug-code](/how-to-debug-code)[Thinking like a programmer/how-to-think-like-a-programmer](/how-to-think-like-a-programmer)[How learning actually works/how-to-actually-learn-to-code](/how-to-actually-learn-to-code)[How LLMs work/how-llms-actually-work](/how-llms-actually-work)[Context engineering/context-engineering-course](/context-engineering-course)[Evaluations/ai-evaluations-course](/ai-evaluations-course)[MCP/model-context-protocol-mcp-course](/model-context-protocol-mcp-course)

Questions about RAG

## What learners ask about retrieval systems

### What is RAG, plainly?

Fetching text relevant to a question and putting it in front of the model before it answers, so the answer comes from your documents rather than from what the model absorbed in training. It is the most reliable single improvement available for factual work, and its failures are mostly search failures.

### Why do you say the model is rarely the problem?

Because when we take systems apart with students, the relevant passage usually was not in what the model received. It was never retrieved, or it ranked far below the cutoff, or it was truncated. A model cannot answer from text it was not given, and swapping in a better one changes nothing about that.

### How much does it cost?

A group batch of five to eight students is USD 100 a month and one to one is USD 150 a month, billed in US dollars, the same flat figures everywhere we teach outside India. No enrolment fee and no minimum term, and the first class is free without a card.

### Do I need machine learning knowledge first?

You need to write Python comfortably and to have handled messy real data, which matters more here than any modelling background. Most of this course is engineering: splitting documents sensibly, combining two kinds of search, measuring whether the right passage came back. The mechanism page is a better prerequisite than a maths course.

### Is RAG obsolete now that context windows are enormous?

No, and the claim is worth addressing directly. Putting an entire corpus in the window is expensive, slow, and measurably worse at locating one specific fact than good retrieval. More room in the window is not the same as attention landing on the part that mattered, and cost scales with every single query.

### What corpus should a student use?

One they know well enough to grade. Personal notes, a rulebook for a game they play, a public dataset in a field they follow. Familiarity is the requirement, because evaluating retrieval means knowing what the right answer was, and a student who has not read the documents is guessing at every measurement.

### Can this be taught to teenagers?

Yes, to teenagers who write Python confidently, and it lands well because the failures are so concrete. A fifteen year old who has watched their own system quote the wrong section of a rulebook understands the retrieval problem better than most adults who have read about it.

### How do you evaluate a RAG system?

In two separate halves, and separating them is the whole method. First, retrieval alone against a labelled set of questions with known correct sources. Only once that is acceptable do you judge generated answers. Teams that judge only the final answer cannot attribute a failure and end up tuning prompts against a search problem.

### What about private or sensitive documents?

In the course, nothing sensitive goes anywhere: students use their own material or public data, and we do not have them wire real confidential corpora into third-party services as a teaching exercise. What we do teach is how to reason about where documents travel, which is a decision people frequently make without noticing.

### What happens after I send the form?

A mentor calls to arrange the free class. Bring a corpus you know well and a few questions you would want answered from it, and we will look at how it should be chunked. That conversation is usually more informative about the difficulty of your particular problem than anything we could tell you in advance.

Start

## Bring a set of documents and three real questions

The most useful free class here starts from your actual corpus. Bring documents you know well and three questions you genuinely want answered from them, and we will work through how they should be split, what a labelled question set for them would look like, and where this particular corpus is likely to fail. Ninety minutes, no card, and an honest view on whether retrieval or your document structure is the real problem.

Rather read first? [Evaluations](/ai-evaluations-course), [context engineering](/context-engineering-course), or [how LLMs actually work](/how-llms-actually-work).

[WhatsApp us](https://wa.me/919123366161?text=Hello%20Modern%20Age%20Coders.%20I%20am%20interested%20in%20learning%20to%20build%20RAG%20systems%20properly.) · [+91 91233 66161](tel:+919123366161) · [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

We hold no premises anywhere. Every session is a live video call taught from India, and the number above rings in India. Sending the form opens a conversation rather than an enrolment, and holds no place in any batch.

---

*Canonical: https://learn.modernagecoders.com/rag-systems-course*
