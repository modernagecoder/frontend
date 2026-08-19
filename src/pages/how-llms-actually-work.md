---
title: "How LLMs Actually Work | Fluent and Wrong Are Not Opposites"
description: "A language model predicts the next token, then does it again. That is the whole loop. Why hallucination follows, why it miscounts letters, and how we teach it."
canonical: "https://learn.modernagecoders.com/how-llms-actually-work"
region: "global"
updated: "2026-08-19"
---

# A language model predicts the next word. Everything else follows from that.

> A large language model is trained to produce a probability distribution over the next token given the text so far, then to sample one, append it and repeat. That loop is the whole of inference: nothing in it consults a database or checks whether a sentence is true. Fluency is therefore what the objective optimises directly and truth is only correlated with it, which is why a confident, well-formed, invented citation is not a malfunction but the system doing exactly what it was built to do. Modern Age Coders teaches this mechanism from about age eight in honest simplified form and in full to teenagers and adults. Group teaching is USD 100 a month, private is USD 150, first class free.

## One idea

A language model is trained to do one thing: given some text, produce a probability distribution over what comes next. That is the objective, not a simplification for children.

So fluency is what is optimised, directly. Truth is not. Truth correlates with fluency, because true sentences are common in training text, and that correlation is why these systems are useful at all. But it is a correlation, and it can break without anything looking different.

That is the whole explanation of a confident, well-formed, completely invented citation. The model was not lying, because lying requires a belief about truth. It produced what a citation in that position usually looks like.

## The loop

Given "The capital of France is", the model produces a distribution: Paris at 0.94, "the" at 0.02, and so on. Pick one. Append it. Do it all again.

That is the entirety of inference. There is no lookup, no database, and no step at which the sentence is checked against anything. The model does not know whether it is answering from something it saw a million times or improvising.

## Why it cannot count letters

Text is split into tokens before the model sees it. "strawberry" might become three pieces, and the model receives three opaque integers. Asked how many r it contains, it is being asked to count something below its resolution. This is not a knowledge gap a bigger model closes; it is a consequence of the representation.

## Five stages

1. **Tokenisation.** Text becomes integers from a fixed vocabulary. Every oddity about spelling, digits and unusual languages starts here.
2. **Pretraining.** Predict the next token across vast text. Essentially all capability comes from here, and so does the knowledge cutoff.
3. **Fine-tuning and preference training.** Shapes manner, helpfulness and safety. Changes behaviour substantially, adds little knowledge.
4. **Inference.** The loop, one token at a time. Sampling settings decide how adventurously it picks, which is all that temperature means.
5. **The context window.** No memory between conversations. Whatever it appears to remember was put back by the surrounding software.

## Behaviours, derived

| What you notice | The mechanism | What helps |
|---|---|---|
| Invents a plausible citation | Nothing checks reality | Verify externally, never trust tone |
| Cannot count letters | Tokens, not characters | Give it a tool, or use code |
| Forgets earlier turns | It fell out of the window | Restate, or retrieve deliberately |
| Knows nothing recent | Pretraining has a cutoff | Supply the document yourself |
| Different answer each time | Sampling, not determinism | Lower the temperature |
| Agrees when you push back | Agreement is a likely continuation | Ask for evidence, not confirmation |

## What we will not pretend

That anybody fully understands why these work as well as they do; the mechanism is clear and the emergent capability is an open research question. That this settles whether they understand anything, which is a real dispute among serious people. Or that knowing this makes you an AI engineer: it is the foundation, and building on it takes considerably longer.


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
