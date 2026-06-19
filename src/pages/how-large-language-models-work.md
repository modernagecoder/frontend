---
title: "How Large Language Models Work - Understand Tokens, Embeddings & Attention"
description: "Understand how large language models actually work - tokens, embeddings, attention and transformers, training and fine-tuning, RAG and agents - explained from the inside, then built. Live small-batch AI classes for serious learners, college and professionals. Free demo."
canonical: "https://learn.modernagecoders.com/how-large-language-models-work"
keywords:
  - how large language models work
  - how llms work explained
  - how chatgpt works
  - understand transformers
  - attention mechanism explained
  - tokens and embeddings
  - fine-tuning llms
  - how generative ai works
  - learn llms
  - transformers explained simply
  - build with llms
  - what is a token in ai
source: src/pages/how-large-language-models-work.html
---

# How large language models actually work

Tokens, embeddings, attention and transformers - explained from the inside, then built. This is the page that turns "AI feels like magic" into "I know exactly what is happening, and I can make it do useful work."

Modern Age Coders runs live, online, instructor-led classes for ages 6 to 65 in small batches: 10,000+ students taught, 15+ countries, 70+ live courses, rated 4.9/5 from 247+ reviews. You can [book a free demo](https://learn.modernagecoders.com/book-demo) to meet a teacher before you commit.

## Tokenise, attend, predict

A language model never sees words the way you do. It reads a sentence as a list of tokens, lets each token look at the others to decide what matters, and then guesses the single most likely token to come next. Everything else is detail on top of these three moves.

1. **Tokenise.** The sentence "The model can write ___" is split into tokens.
2. **Attend.** To fill the blank, the model leans on "can" and "write" far more than on "The". Those weighted links are attention.
3. **Predict the next token.** The model scores every token it knows. For this sentence it might assign code 0.71, poems 0.14, music 0.09, tests 0.06, then sample one - append it - and run the whole loop again.

A long answer is just this loop, repeated, one token at a time.

## From text to thought to text

### Step 1 - Tokenisation

A model cannot read letters; it reads tokens, which are numbered fragments of text. A tokeniser slices your input into common chunks - whole words, word pieces, even single characters for rare strings - and maps each to an integer in a fixed vocabulary. This is why models count tokens rather than words, why unusual names cost more tokens, and why your context limit is measured in tokens. Get it wrong and prompts silently truncate.

### Step 2 - Embeddings

Each token integer is looked up in a giant learned table and replaced with a vector - a long list of numbers. Vectors store meaning: tokens used in similar ways sit near each other, so "king" and "queen" are closer than "king" and "bicycle". Position information is added so the model knows token order. From here on the model works entirely with numbers, and arithmetic on those numbers is what produces understanding.

### Step 3 - Attention

This is the core idea, and it is simpler than the name suggests. For every token the model asks which other tokens it should pay attention to right now. It scores each pair of tokens, turns those scores into weights that sum to one, and blends the other tokens' information in proportion. In "the trophy did not fit in the case because it was too big", attention is how the model links "it" to "trophy" rather than "case". Attention is the mechanism that lets context change meaning.

### Step 4 - Transformers

One attention step is useful; stacking dozens is powerful. A transformer interleaves attention layers with small feed-forward networks and repeats the block many times. Early layers capture surface patterns like grammar; deeper layers capture relationships, intent and topic. Many attention heads run in parallel, each tracking a different kind of relationship. The transformer made today's models possible because it processes a whole sequence at once and scales cleanly to enormous size.

### Step 5 - Next-token prediction

After all those layers, the model outputs one score per token in its vocabulary, converts the scores to probabilities, and answers a single question: what comes next? A language model is, at heart, a very good guesser of the next token. Sampling settings like temperature decide whether it always takes the top guess or occasionally takes a lower one. The model is not retrieving a stored answer - it is composing one token by token from learned probability.

### Step 6 - Training and fine-tuning

**Pretraining** shows the model oceans of text and asks it, over and over, to predict the next token, adjusting billions of weights each time it is wrong. That produces fluency but not helpfulness. **Instruction tuning and RLHF** then teach it to follow requests and prefer answers humans rate as good - people compare responses, and the model is nudged toward the preferred style. Finally, **fine-tuning** adapts a base model to your own data and tone, which you do hands-on in our classes.

## Why a model can be confident and wrong

Using LLMs well means respecting their limits. These follow directly from how the machine works, and you design around them.

- **Hallucination.** The model optimises for the most plausible next token, not the most true one. Without grounding it will still produce fluent, confident text. The fix is to ground it with retrieval, ask for checkable sources, and verify anything that matters.
- **The context window.** A model can only attend to a fixed number of tokens at once. Past that window, earlier text is gone, which is why long chats lose the thread. Deciding what to keep, summarise or retrieve is a real engineering skill.
- **No live knowledge.** A base model knows only what was in its training data, frozen at a cutoff. It does not browse, remember you, or check the clock unless you give it tools that do.

## What you learn to build

Every technique below sits on top of the mechanics above. We teach the why first so your builds hold up, then you build them live with an instructor. This is the practical core of our [real coding classes](https://learn.modernagecoders.com/real-coding-classes).

- **Prompting that actually works.** Set role and constraints, give worked examples, ask for structured output, and break hard tasks into followable steps - and know why some tricks work and others are folklore.
- **Retrieval-augmented generation (RAG).** Turn your documents into embeddings, retrieve the most relevant chunks for a question, and feed them into the context window so answers are grounded in real sources.
- **Fine-tuning on your own data.** Prepare a dataset, train a smaller model to adopt a specific tone or task, and measure whether it actually improved.
- **Simple agents.** Give a model tools and a loop so it can decide, act, read the result and continue - with guardrails so it fails safely.

## Courses that build on this

Live, small-batch, instructor-led tracks. [Browse all courses](https://learn.modernagecoders.com/course-atlas).

- [Generative AI Masterclass](https://learn.modernagecoders.com/courses/complete-generative-ai-masterclass-college) - build with LLMs end to end: prompting, RAG, fine-tuning and generation projects.
- [AI & ML Complete](https://learn.modernagecoders.com/courses/ai-ml-masterclass-complete-college) - the full machine learning foundation underneath modern language models.
- [Artificial Intelligence Complete](https://learn.modernagecoders.com/courses/artificial-intelligence-complete-masterclass-college) - a broad, rigorous tour of AI, from search and learning to deep networks.
- [Codex + Claude Code: AI Coding Agents](https://learn.modernagecoders.com/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals) - ship real software with AI coding agents, for adults and professionals.
- [Python Masterclass - Zero to Advanced](https://learn.modernagecoders.com/courses/python-programming-masterclass-zero-to-advanced-college) - the language every AI project is written in, from first line to advanced.

## Go deeper

- [The Maths Behind Machine Learning](https://learn.modernagecoders.com/maths-behind-machine-learning) - vectors, gradients and probability, the small set of maths that powers every model on this page.
- [How Computer Vision Works](https://learn.modernagecoders.com/how-computer-vision-works) - how machines turn pixels into objects, faces and scenes, layer by layer.
- [Machine Learning From Scratch](https://learn.modernagecoders.com/machine-learning-from-scratch) - build the core algorithms by hand so the maths and code finally connect.
- [Master AI, ML, Python & Java](https://learn.modernagecoders.com/master-ai-ml-python-java) - a full route through the languages and skills behind a serious AI career.

## Frequently asked questions

**Do I need to be advanced to understand LLMs?**
No. You need curiosity and a willingness to think carefully. We start from text and tokens and build up the ideas one layer at a time. If you can follow a recipe and reason about steps, you can follow how a language model turns words into numbers, weighs context, and predicts the next token. Our small live batches mean you can ask the instructor to slow down or re-explain any idea until it clicks.

**Do I need maths for this?**
Some, but far less than people fear. To understand and build with LLMs you mainly need comfort with vectors and a rough sense of probability - both of which we teach in context as they come up. You do not need to derive backpropagation by hand to use embeddings, attention and fine-tuning well. If you want the deeper mathematics, our companion page on the maths behind machine learning takes you there at your own pace.

**Will I build real things with LLMs or just learn theory?**
You build. Every concept is paired with code you run yourself. You will tokenise text, inspect embeddings, write prompts that behave reliably, connect a retrieval-augmented generation pipeline to your own documents, fine-tune a small model on a dataset, and assemble a simple agent that uses tools. The theory exists to make your builds robust, not to replace them.

**Who is this for and what ages?**
This path is aimed at serious teenagers, college students and working professionals who want real understanding rather than a quick demo. Modern Age Coders teaches ages 6 to 65 across more than 70 live courses, and we place each learner in a track that matches their background, whether that is a curious 15-year-old or an engineer adding AI to their work.

**Are classes live?**
Yes. Every class is live, online and instructor-led in small batches, not a pre-recorded video library. You write code with your instructor watching, ask questions in real time, and get feedback on your own projects. Start with a free demo to meet the teacher and see the format before you commit.

**If I can just call an LLM API, why understand how it works?**
Because understanding tokens, attention and the model's limits is what separates a fragile demo from a real product. When you know that the model reads tokens, attends to context within a fixed window, and predicts the next token by probability, you can prompt well, choose when to fine-tune, design retrieval-augmented generation that grounds answers in facts, recognise and defuse hallucination traps, and control cost. People who only call the API get surprised; people who understand the machine ship.

---

Ready to go from understanding to building? [Book a free demo](https://learn.modernagecoders.com/book-demo) or [browse all courses](https://learn.modernagecoders.com/course-atlas).
