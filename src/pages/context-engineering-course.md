---
title: "Context Engineering Course | The Window Is What You Control"
description: "You do not control the model, you control what it can see. Why filling the window makes things worse, what belongs in it, and how every decision gets measured."
canonical: "https://learn.modernagecoders.com/context-engineering-course"
region: "global"
updated: "2026-08-19"
---

# You do not control the model. You control what it can see.

> Context engineering is deciding what goes into a model's context window for a given request: instructions, examples, retrieved passages, conversation history, tool definitions and their order. It replaced prompt engineering because in any real system the instructions are a small fraction of the window and everything else is assembled by code. The instinct to include everything because the window is large produces slower, costlier and measurably worse results, since attention is finite and diluted by irrelevance. Modern Age Coders teaches it as controlled experiments against an evaluation set rather than as prompting tips. Group teaching is USD 100 a month, private USD 150, first class free.

## The variable you control

Context engineering is deciding what goes into the window for a given request. It replaced prompt engineering because the prompt turned out to be the small part.

The weights are fixed; you did not train them and cannot adjust them. What you decide entirely is the text placed in front of the model: instructions, examples, retrieved documents, conversation so far, tool definitions, and the order of all of it. In any real system the instructions are a small fraction of the window and the rest is assembled by code you wrote.

## Why filling it is wrong

Windows are now large enough to hold a great deal, so the instinct is to include everything. That is slower, more expensive, and worse at the thing you wanted.

A window carrying a system prompt, forty generic examples, an entire manual, a full chat history and twelve tool definitions can reduce the user's actual question to a rounding error of what the model is attending to. **Attention is finite and diluted by irrelevance.** More room is not more attention.

The assembled alternative is a trimmed prompt, three examples chosen for this input type, two reranked passages, a summary of prior turns and three relevant tools. Perhaps three thousand tokens instead of ninety-six thousand: faster, cheaper and better. Nothing in it is a trick. Every line is a decision, and decisions are testable.

## Six components, six questions

1. **Instructions: what is the smallest version that works?** System prompts grow by accretion because every incident adds a clause and nothing is removed.
2. **Examples: are these chosen, or just present?** If they are identical on every request, they are decoration for most of them.
3. **Retrieved material: top three, or top forty?** Usually the largest component with the worst ratio of relevant to present.
4. **History: the transcript, or the conclusion?** Summarising resolved turns costs a little accuracy and buys a lot of room.
5. **Tools: is every definition earning its place?** A longer menu means more chances to choose wrongly.
6. **Order: what is nearest the question?** Position affects what gets used, and moving the decisive material is free.

## Symptom to cause

| Symptom | Usually means | Try |
|---|---|---|
| Ignores an instruction | Buried under retrieved bulk | Move it next to the question |
| Answers from the wrong document | Too many passages, poorly ranked | Fewer passages, add a reranker |
| Loses the thread in long chats | History pushed the point out | Summarise resolved turns |
| Picks a strange tool | Twelve definitions, three relevant | Filter tools by task |
| Good short, poor long | Attention diluted, not capability lost | Retrieve rather than include |

## Why it is inseparable from measurement

Every claim here is testable and none should be taken on authority, including from us. The course is a sequence of experiments: change one thing about the window, run the evaluation set, see what moved. A context decision without a measurement is a preference, and a course teaching preferences about window layout is exactly what this series argues against.


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
