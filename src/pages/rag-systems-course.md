---
title: "RAG Systems Course | Retrieval Is the Part That Breaks"
description: "Most RAG failures are retrieval failures, not model failures. Build over a corpus you know, measure retrieval before generation, localise faults by stage."
canonical: "https://learn.modernagecoders.com/rag-systems-course"
region: "global"
updated: "2026-08-19"
---

# Most RAG failures are retrieval failures. The model gets blamed anyway.

> Retrieval augmented generation puts relevant text in front of a model before it answers, which removes most confident invention. The failures that remain are overwhelmingly retrieval failures rather than model failures: the right passage was never fetched, was ranked far down, or arrived truncated, and no prompt can improve a document that is absent. Modern Age Coders teaches RAG as search engineering, with a labelled question set built first and retrieval measured on its own before any generated answer is judged, over a corpus the student knows well enough to grade. Group teaching is USD 100 a month, private is USD 150, first class free.

## The reframe

Retrieval augmented generation means fetching relevant text and putting it in front of the model before it answers. It genuinely fixes the limitation that a model has no access to your documents and nothing in its loop consults reality.

Then it starts producing answers that are confident, well formed, and drawn from the wrong part of the document. Because the model is the visible component, the model gets replaced.

In the systems we take apart with students, the large majority of failures are upstream of the model entirely. The passage was never retrieved, or ranked fortieth, or arrived cut in half. **No model can answer from text it was not given, and no prompt improves a document that is absent.**

## Localising a failure instead of guessing

Given the question, work through four stages in order:

1. **Retrieval.** Did the right chunk come back at all? In roughly seventy per cent of the failures we see, no. Fix the chunking, not the prompt.
2. **Ranking.** Was it in the top three, or fortieth? Only the top few reach the model.
3. **Context.** Did it survive the window intact? Truncation at the join is common.
4. **Generation.** Given the right text, was the answer still wrong? Only here is it a model problem.

To ask the first question, somebody must have decided in advance which chunk is correct. That is a labelled question set, and building it is the least glamorous and most valuable morning of the course.

## The pipeline

1. **Ingest, keeping provenance.** File, page, section, date. Retrofitting it means reprocessing everything.
2. **Chunk on structure, not character count.** Fixed-width splitting separates a heading from the clause it governs, and is the single largest source of confidently wrong answers.
3. **Embed, understanding what similarity means.** Two passages about refunds are close whether one grants them and the other forbids them.
4. **Retrieve with keywords as well as vectors.** Pure vector search misses product codes, names and clause numbers.
5. **Rerank.** Getting into the top fifty is easy; the top three is the actual problem.
6. **Generate with instructions about not knowing.** Otherwise it fills the gap from training, fluently.
7. **Cite, then verify the citations are honest.** An answer can cite a real passage and misread it.

## Symptom to stage

| Symptom | Broken stage | Usual fix |
|---|---|---|
| Answers from the wrong section | Chunking split the context away | Split on structure, carry headings |
| Cannot find exact codes | Vector-only retrieval | Add keyword search |
| Right passage ignored | Ranking | Add a reranker |
| Was good, quietly got worse | Corpus changed, nobody re-measured | A regression set on ingest |

## Honest limits

It cannot answer questions requiring the whole corpus: how many contracts mention indemnity is a database query. It inherits your documents' contradictions and will confidently report whichever it retrieved. And **citations are not verification**, because a cited answer can misread the passage it cites while the link makes it look checked.


## The courses this draws on

**Children, ages 6 to 12**
[Python and AI for Kids](https://learn.modernagecoders.com/courses/python-ai-kids-masterclass) . [AI Literacy for Kids](https://learn.modernagecoders.com/courses/ai-literacy-for-kids-course) . [Kids Coding Blocks](https://learn.modernagecoders.com/courses/kids-coding-blocks-masterclass)

**Teenagers, ages 13 to 18**
[Python for Teens](https://learn.modernagecoders.com/courses/python-complete-masterclass-teens) . [AI and Machine Learning for Teens](https://learn.modernagecoders.com/courses/ai-ml-masterclass-teens) . [Data Science for Teens](https://learn.modernagecoders.com/courses/data-science-course-for-teens-python-data) . [Git and GitHub for Teens](https://learn.modernagecoders.com/courses/git-github-version-control-course-for-teens) . [Coding Agents: Codex and Claude Code](https://learn.modernagecoders.com/courses/codex-and-claude-code-ai-coding-agents-course-for-teens)

**University students and working adults**
[AI and ML Masterclass](https://learn.modernagecoders.com/courses/ai-ml-masterclass-complete-college) . [Generative AI: LLMs, RAG and Agents](https://learn.modernagecoders.com/courses/complete-generative-ai-masterclass-college) . [Data Science Masterclass](https://learn.modernagecoders.com/courses/data-science-complete-masterclass-college) . [Python and AI Automation](https://learn.modernagecoders.com/courses/python-ai-automation-masterclass-college) . [Data Structures and Algorithms](https://learn.modernagecoders.com/courses/data-structures-algorithms-masterclass-college) . [Git and GitHub, in depth](https://learn.modernagecoders.com/courses/git-github-advanced-version-control-masterclass-for-professionals)

The full list is on the [catalogue](https://learn.modernagecoders.com/courses).


## Fees

| Plan | Price | Included |
|---|---|---|
| First class | Free | Taught rather than sold. No card |
| Group batch | USD 100 a month | 5 to 8 students, the same teacher throughout |
| One to one | USD 150 a month | Private teaching, syllabus shaped to one goal |

The same figures apply in every country we teach outside India, billed in US dollars. No enrolment fee, no annual contract and no minimum term. Every session is a live video call taught from India, and the telephone number is an Indian one. Courses built around a commercial coding agent require the student's own subscription to that tool, which is stated on those course pages.


## The rest of the depth series

[Agentic coding](https://learn.modernagecoders.com/agentic-coding-classes) . [How to read code](https://learn.modernagecoders.com/how-to-read-code) . [How to debug code](https://learn.modernagecoders.com/how-to-debug-code) . [How to think like a programmer](https://learn.modernagecoders.com/how-to-think-like-a-programmer) . [How to actually learn to code](https://learn.modernagecoders.com/how-to-actually-learn-to-code)

[How LLMs actually work](https://learn.modernagecoders.com/how-llms-actually-work) . [Context engineering](https://learn.modernagecoders.com/context-engineering-course) . [RAG systems](https://learn.modernagecoders.com/rag-systems-course) . [AI evaluations](https://learn.modernagecoders.com/ai-evaluations-course) . [Model Context Protocol](https://learn.modernagecoders.com/model-context-protocol-mcp-course)

Contact: [WhatsApp](https://wa.me/919123366161) . [+91 91233 66161](tel:+919123366161) . [contact@modernagecoders.com](mailto:contact@modernagecoders.com)

Facts last verified 19 August 2026.
