---
title: "How Large Language Models Work - Understand Tokens, Embeddings & Attention | Modern Age Coders"
description: "Understand how large language models actually work - tokens, embeddings, attention and transformers, training and fine-tuning, RAG and agents - explained from the inside, then built. Live small-batch AI classes for serious learners, college and professionals. Free demo."
canonical: https://learn.modernagecoders.com/how-large-language-models-work
source: src/pages/how-large-language-models-work.html
---
> Understand how large language models actually work - tokens, embeddings, attention and transformers, training and fine-tuning, RAG and agents - explained from the inside, then built. Live small-batch AI classes for serious learners, college and professionals. Free demo.

Inside the models behind modern AI

# How large language models actually work.

Tokens, embeddings, attention and transformers - explained from the inside, then built. This is the page that turns "AI feels like magic" into "I know exactly what is happening, and I can make it do useful work."

[Book a free demo](/book-demo)See inside ↓10,000+students taught15+countries70+live courses4.9/5from 247+ reviews

The whole model in three moves

## Tokenise → attend → predict

A language model never sees words the way you do. It reads a sentence as a list of tokens, lets each token look at the others to decide what matters, and then guesses the single most likely token to come next. Everything else is detail on top of these three moves.

1 · TokeniseThemodelcanwrite_2 · Attend

To fill the blank, the model leans on can and write more than on The. Those weighted links are attention.

3 · Predict next tokencode0.71poems0.14music0.09tests0.06

The model assigns a probability to every token it knows, then samples one. Pick code, append it, and run the whole loop again to produce the next token. A long answer is just this loop, repeated, one token at a time.

The pipeline, in order

## From text to thought to text

Here is the full path a sentence takes through a model, broken into the parts you can actually reason about and, later in our classes, build.

STEP 01

### Tokenisation

A model cannot read letters; it reads tokens, which are numbered fragments of text. A tokeniser slices your input into common chunks - whole words like the, pieces like token + ise, and even single characters for rare strings. Each chunk maps to an integer in a fixed vocabulary. This is why models count tokens, not words, why unusual names cost more tokens, and why your context limit is measured in tokens. Get this wrong and your prompts silently get truncated. Understanding it is the first practical lever you gain.

STEP 02

### Embeddings

Each token integer is looked up in a giant table and replaced with a vector - a long list of numbers that the model learned during training. Vectors are how the model stores **meaning**: tokens used in similar ways end up near each other in this space, so king and queen sit closer than king and bicycle. Position information is added too, so the model knows token order. From here on, the model is working entirely with numbers, and arithmetic on those numbers is what produces understanding.

STEP 03

### Attention

This is the core idea, and it is simpler than the name suggests. For every token, the model asks: **which other tokens should I pay attention to right now?** It scores each pair of tokens, turns those scores into weights that sum to one, and blends the other tokens' information in proportion to those weights. In "the trophy did not fit in the case because it was too big", attention is how the model links it to trophy rather than case. Attention is the mechanism that lets context change meaning.

STEP 04

### Transformers

One attention step is useful; stacking dozens of them is powerful. A transformer interleaves attention layers with small feed-forward networks, and repeats the block many times. Early layers capture surface patterns like grammar; deeper layers capture relationships, intent and topic. Many attention "heads" run in parallel, each free to track a different kind of relationship. The transformer is the architecture that made today's models possible, because it processes a whole sequence at once and scales cleanly to enormous size.

STEP 05

### Next-token prediction

After all those layers, the model outputs one score per token in its vocabulary, converts the scores to probabilities, and that is the answer to a single question: **what comes next?** A language model is, at heart, a very good guesser of the next token. Sampling settings like temperature decide whether it always takes the top guess or occasionally takes a lower one for variety. Knowing this demystifies a lot: the model is not retrieving a stored answer, it is composing one token by token from learned probability.

STEP 06

### Training and fine-tuning

**Pretraining** shows the model oceans of text and asks it, over and over, to predict the next token, adjusting billions of weights each time it is wrong. That alone produces fluency but not helpfulness. **Instruction tuning and RLHF** then teach it to follow requests and prefer answers humans rate as good - in plain terms, people compare responses, and the model is nudged toward the preferred style. Finally, **fine-tuning** adapts a base model to your own data and tone, which you will do hands-on in our classes.

Know the failure modes

## Why a model can be confident and wrong

Using LLMs well means respecting their limits. These are not bugs to wait out; they follow directly from how the machine works, and you design around them.

### Hallucination

The model optimises for the most plausible next token, not the most true one. When it has no grounding, it will still produce fluent, confident text - a citation, a date, an API that does not exist. The fix is not to scold the model; it is to **ground** it with retrieval, ask for sources you can check, and verify anything that matters.

### The context window

A model can only attend to a fixed number of tokens at once. Past that window, earlier text is simply gone. This is why long chats lose the thread and why pasting an entire book fails. Designing what to keep, summarise, or retrieve into the window is a real engineering skill, and one we drill directly.

### No live knowledge

A base model knows only what was in its training data, frozen at a cutoff. It does not browse, remember you between sessions, or check the clock unless you give it tools that do. Treat it as a brilliant reasoner with no calendar and no internet until you wire those in - which, again, is exactly what you will build.

Theory you can ship

## What you learn to build

Every technique below sits on top of the mechanics above. We teach the why first so your builds hold up, then you build them live with an instructor. This is the practical core of our [real coding classes](/real-coding-classes).

### Prompting that actually works

Once you know the model is reading tokens and predicting the next one, prompting stops being guesswork. You learn to set role and constraints, give worked examples, ask for structured output, and break hard tasks into steps the model can follow. You also learn why some "tricks" work and others are folklore, so you can write prompts that behave the same way every time.

### Retrieval-augmented generation

RAG is how you give a model facts it was never trained on. You turn your documents into embeddings, store them, retrieve the most relevant chunks for a question, and feed them into the context window so the answer is grounded in real sources. Because you understand embeddings and the context window, you can debug a RAG system instead of just hoping it works.

### Fine-tuning on your own data

When prompting and retrieval are not enough, you fine-tune. You will prepare a dataset, train a smaller model to adopt a specific tone or task, and measure whether it actually improved. Knowing what pretraining and RLHF already did tells you when fine-tuning is the right tool and when it is an expensive detour.

### Simple agents

An agent is a model given tools and a loop: it decides what to do, calls a tool, reads the result, and continues until the job is done. You build one that can search, run code, or call an API - and because you understand the model's limits, you design guardrails so it fails safely instead of looping forever or making things up.

Attached learning paths

## Courses that build on this

Live, small-batch, instructor-led tracks that take you from the ideas on this page to working AI projects.

![Generative AI Masterclass thumbnail](/images/generative-ai-college.png)

### Generative AI Masterclass

Build with LLMs end to end - prompting, RAG, fine-tuning and generation projects.

[View course →](/courses/complete-generative-ai-masterclass-college)![AI and Machine Learning Complete course thumbnail](/images/ai-ml-college.jpg)

### AI & ML Complete

The full machine learning foundation underneath modern language models.

[View course →](/courses/ai-ml-masterclass-complete-college)![Artificial Intelligence Complete Masterclass thumbnail](/images/ai-college.png)

### Artificial Intelligence Complete

A broad, rigorous tour of AI - from search and learning to deep networks.

[View course →](/courses/artificial-intelligence-complete-masterclass-college)![Codex and Claude Code AI coding agents course thumbnail](/images/codex-claude-code-adults.webp)

### Codex + Claude Code: AI Coding Agents

Ship real software with AI coding agents - for adults and professionals.

[View course →](/courses/codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals)![Python Masterclass Zero to Advanced thumbnail](/images/python-college.png)

### Python Masterclass - Zero to Advanced

The language every AI project is written in, from first line to advanced.

[View course →](/courses/python-programming-masterclass-zero-to-advanced-college)

[Browse all courses](/course-atlas)

Keep reading

## Go deeper

Standalone deep-dives that sit alongside this one. Each explains a part of modern AI from the inside.

[**The Maths Behind Machine Learning**Vectors, gradients and probability - the small set of maths that powers every model on this page.](/maths-behind-machine-learning)[**How Computer Vision Works**How machines turn pixels into objects, faces and scenes, layer by layer.](/how-computer-vision-works)[**Machine Learning From Scratch**Build the core algorithms by hand so the maths and code finally connect.](/machine-learning-from-scratch)[**Master AI, ML, Python & Java**A full route through the languages and skills behind a serious AI career.](/master-ai-ml-python-java)

Common questions

## Frequently asked questions

Do I need to be advanced to understand LLMs?

No. You need curiosity and a willingness to think carefully. We start from text and tokens and build up the ideas one layer at a time. If you can follow a recipe and reason about steps, you can follow how a language model turns words into numbers, weighs context, and predicts the next token. Our small live batches mean you can ask the instructor to slow down or re-explain any idea until it clicks.

Do I need maths for this?

Some, but far less than people fear. To understand and build with LLMs you mainly need comfort with vectors and a rough sense of probability - both of which we teach in context as they come up. You do not need to derive backpropagation by hand to use embeddings, attention and fine-tuning well. If you want the deeper mathematics, our companion page on the maths behind machine learning takes you there at your own pace.

Will I build real things with LLMs or just learn theory?

You build. Every concept is paired with code you run yourself. You will tokenise text, inspect embeddings, write prompts that behave reliably, connect a retrieval-augmented generation pipeline to your own documents, fine-tune a small model on a dataset, and assemble a simple agent that uses tools. The theory exists to make your builds robust, not to replace them.

Who is this for and what ages?

This path is aimed at serious teenagers, college students and working professionals who want real understanding rather than a quick demo. Modern Age Coders teaches ages 6 to 65 across more than 70 live courses, and we place each learner in a track that matches their background, whether that is a curious 15-year-old or an engineer adding AI to their work.

Are classes live?

Yes. Every class is live, online and instructor-led in small batches, not a pre-recorded video library. You write code with your instructor watching, ask questions in real time, and get feedback on your own projects. Start with a free demo to meet the teacher and see the format before you commit.

If I can just call an LLM API, why understand how it works?

Because understanding tokens, attention and the model's limits is what separates a fragile demo from a real product. When you know that the model reads tokens, attends to context within a fixed window, and predicts the next token by probability, you can prompt well, choose when to fine-tune, design retrieval-augmented generation that grounds answers in facts, recognise and defuse hallucination traps, and control cost. People who only call the API get surprised; people who understand the machine ship.

Start with a conversation

## See how an LLM works, then build one with us.

A free, live demo with a real instructor. Bring your questions about tokens, attention or anything on this page.

[Book a free demo](/book-demo)[Browse all courses](/course-atlas)

Real student projects

## What our students actually build

Every one is a real, live project shipped by a Modern Age Coders student. Explore more in [Student Labs](/student-labs).

[![Word Counter Website](/images/projects/wordcounter.webp)ToolWord Counter WebsiteA simple yet powerful tool that counts words, sentences and paragraphs from user input with instant, real-time results and a clean responsive interface.by VanshOpen the live project ↗](https://vanshagarwalwordcounter-sys.github.io/WordCounter/)[![Life Span Tracker](/images/projects/lifespan.webp)ToolLife Span TrackerAn interactive web tool that calculates expected lifespan, shows days, months and years lived, and visualises remaining time to motivate better habits.by ManayOpen the live project ↗](https://lifespantracker.netlify.app/)[![Simon Game](/images/projects/simongame.webp)GameSimon GameA fun memory-based game where players repeat colour and sound sequences. Each level adds a new challenge — brain-boosting for kids learning logic and focus.by YashaswiOpen the live project ↗](http://yashaswi-2017.my.canva.site)

Parent & student voices

## What our families say

Real, verified reviews from Modern Age Coders families. Read hundreds more on our [Wall of Love](/love).

★★★★★

> “I absolutely love it here! I made new friends and learned important valuable coding skills while having the fun of my life. It's not just coding here, it's outings, bonding and most importantly preparing you for your future. Definitely five stars.”

*YYug Rathore
Student*

★★★★★

> “I am really glad to be a part of Modern Age Coders as it helped me a lot to know what coding means and helped me find myself. I thank Shreya Ma'am, Mihir Sir and Shivam Sir for always being there for me and for showing me the real path for success.”

*SSujal Ramola
Student*

★★★★★

> “Modern Age Coders has been a game-changer for me! I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I'm now the topper in my class and can confidently write complex programs with ease.”

*SSamriddha Mondal
Student*

---

*Canonical: https://learn.modernagecoders.com/how-large-language-models-work*
