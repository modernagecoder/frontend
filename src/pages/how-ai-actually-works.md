---
title: "How AI Actually Works — A First-Principles Guide to LLMs, Tokens, Embeddings and Transformers | Modern Age Coders"
description: "The honest, mechanical explanation of how large language models like ChatGPT, Claude and Gemini actually generate text. Tokens, embeddings, attention, transformers, training and RLHF — explained without analogies that fall apart, for parents, students and the genuinely curious. By Modern Age Coders."
canonical: https://learn.modernagecoders.com/how-ai-actually-works
source: src/pages/how-ai-actually-works.html
---
> The honest, mechanical explanation of how large language models like ChatGPT, Claude and Gemini actually generate text. Tokens, embeddings, attention, transformers, training and RLHF — explained without analogies that fall apart, for parents, students and the genuinely curious. By Modern Age Coders.

A long, honest explainer · 22 minute read · revised May 2026

# How AI *actually* works. No analogies that fall apart on the second question.

Everyone tells you AI is "like a brain." It is not. AI is matrix multiplication at a scale your grandparents would have called witchcraft, trained by gradient descent on the bulk of human writing, and surprisingly easy to understand if someone walks you through it without the hype. This is Modern Age Coders trying to be that someone.

**For**Parents · students · curious adults**You will leave with**A working mental model of LLMs**You do not need**Maths beyond high school**You will need**Patience for one long read

Or skip the reading — *here are the cohorts we teach.* Live, small-batch, every age. Pick yours.

[View all 60+ courses →](/courses)[Ages 8–12 · Kids Python & AI *Kids Masterclass* Real Python with first-touch AI tools. The on-ramp for ambitious young learners. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 14–18 · Teens AI & ML *Masterclass · Teens* Train real neural networks. The teen-paced version of this article. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[College / Adult Generative AI *Masterclass* Build with LLMs professionally — RAG, fine-tuning, agents, evaluation. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)[College / Adult AI & ML *Complete* The flagship engineering track. Numpy through transformers, mentor-led. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)

## Eight chapters · in the order that builds a real understanding

CH 01What "AI" actually means in 2026CH 02The token — the smallest thing an LLM seesCH 03The embedding — meaning as coordinatesCH 04The attention mechanism, demystifiedCH 05The transformer block, in one diagramCH 06Training — how an empty network learns anythingCH 07RLHF — why ChatGPT is politeCH 08What is still genuinely magicalChapter 01

## What "AI" actually *means* in 2026.

When people say "AI" today, they almost always mean one specific kind of system: a **large language model**, or LLM. ChatGPT is an LLM. Claude is an LLM. Gemini, Llama, Mistral, DeepSeek — all LLMs. The same family of math underneath. A different brand on top.

An LLM is, mechanically, a function. You give it text. It gives you back text. That is it. Every dazzling output you have ever seen — the poem, the working Python code, the medical opinion you should not have asked for — is the same function being called with a different input.

What makes the function feel like magic is not what it does. It is the **scale** at which it does it. A modern LLM has somewhere between 50 billion and 2 trillion *parameters*: numbers that the model has learned, one at a time, from reading roughly the entire indexed internet. Each call to the function involves multiplying input through those parameters in a precise sequence. The output is, mathematically, the most likely next chunk of text given the input. Run that loop once and you get a word. Run it five hundred times and you get an essay.

> A useful way to hold this in your head: the AI is not thinking. It is predicting. But it has been trained on so much human thinking that prediction at this scale starts to look indistinguishable from thinking. Whether the difference matters depends on the question you are asking it. — The honest one-paragraph summary of the field

The chapters that follow open up that function. Token by token, layer by layer. By the end of this page, "How does ChatGPT work?" will not be a hand-wavy question for you any more.

Chapter 02

## The token — the *smallest thing* the model sees.

An LLM does not read letters. It does not even read words, not really. It reads **tokens**. A token is a small chunk of text — usually three to six characters — produced by a separate program called a tokenizer that runs *before* the language model itself. The tokenizer's job is to split text into a small fixed vocabulary, often around 50,000 to 200,000 unique tokens.

Most common English words are a single token. Longer or rarer words split. Punctuation, spaces, even emojis become tokens.

Figure 2.1 — How "Modern Age Coders teaches AI" is tokenised by GPT-4-class tokenizersModernAgeCodersteachesAI

Six tokens. The space before each token is part of the token — that is why " Age" looks weird. The model sees them as a sequence of integer IDs: [42816, 14628, 18488, 388, 22779, 15592].

Once text is tokens, and tokens are integer IDs, the model can begin its actual work. Everything downstream — every embedding, every attention head, every output probability — operates on these IDs, not on the original characters.

This has consequences. It is why the model can be terrible at counting letters ("how many r's in strawberry?" tripped LLMs for years — they were counting tokens, not letters). It is why some languages cost more to talk to than others — Tamil and Bengali tokenise into more tokens per word than English, so the same conversation costs more. And it is why prompt engineering sometimes feels arbitrary: you are not talking to a reader, you are giving instructions to a sequence-of-integers processor.

Chapter 03

## The embedding — *meaning* as coordinates.

An integer ID like 42816 has no meaning. The number itself is arbitrary. The model needs a way to turn each token into something that **encodes meaning**. The trick the field landed on is to map each token to a long vector of real numbers — typically 768, 1536, 4096 or more numbers — called an **embedding**.

Each number in the vector is a coordinate in a "meaning space" the model has learned. Tokens with similar meanings sit close together in that space. Tokens with different meanings sit far apart. This is one of the most important and least understood facts about how LLMs work — meaning lives in geometry.

Figure 3.1 — A toy embedding (4 dimensions) of three tokensToken · king0.62-0.180.910.07Token · queen0.59-0.15-0.850.04

The first two coordinates are almost identical (royalty-ness). The third coordinate flips sign (gender-ness). The fourth is similar (formality, perhaps). This is hand-waved — real embeddings have 768+ dimensions and the meanings of individual coordinates are not human-readable. But the principle is exactly this.

The famous king − man + woman ≈ queen result, discovered by Mikolov in 2013, is the first hint of this. It said: if you take the embedding of "king", subtract the embedding of "man", add the embedding of "woman", you arrive remarkably close to the embedding of "queen". Meaning had become arithmetic. The field has been built on that observation ever since.

In a modern LLM, every input token is converted to its embedding before anything else happens. The embedding is what enters the network. The token ID is left at the door.

Chapter 04

## The *attention mechanism*, demystified.

If embeddings are the input, attention is the engine. Attention is what lets an LLM read a long passage and understand which earlier words matter most for predicting the next word. It is the single most important architectural idea in modern AI — and it is much simpler than it sounds.

### The idea, in one sentence

For each word in the sequence, look at every other word in the sequence. Decide how relevant each one is. Take a weighted average of their embeddings using those relevance scores. That weighted average is what flows forward to the next layer.

That is it. The cleverness is in *how* the model decides relevance — which it does by giving each token three little projections of itself: a **query**, a **key**, and a **value**.

Figure 4.1 — Attention scores for the token "it" in: "the cat sat on the mat because it was warm"thecatsatmatit0.04low0.18some0.06low0.61HIGH0.11self

The word "it" attends mostly to "mat" — because the mat is what was warm. The model figures this out without being told what a pronoun is. It learns the pattern from billions of examples.

Each attention layer typically has between 12 and 96 *heads* running in parallel. Each head learns to attend to a different kind of relationship. One head might track grammatical subjects. Another tracks subject–verb agreement. Another tracks paragraph-level themes. Nobody programmed these. The training process discovered them.

This is the moment in the explanation when most learners pause and say: "wait, the model figures out that 'it' refers to 'mat' on its own?" Yes. It does. From the gradient signal alone, given billions of training examples. It is the single most impressive emergent behaviour in the field.

Chapter 05

## The transformer block, in *one diagram*.

A modern LLM is a stack of identical building blocks, called **transformer blocks**, stacked between 24 and 120 deep. Each block does two things in sequence. First, an attention layer mixes information across tokens. Second, a simple *feedforward* layer transforms each token individually. Both layers are wrapped in a small mathematical trick called a *residual connection* that lets information flow around the layer if needed.

Transformer block, in pseudocode# x is a tensor of shape [batch, sequence_length, dim]# It enters the block as embeddings and leaves as embeddings.def transformer_block(x): # Step 1 — token-mixing via attention attn_out = multi_head_attention(layer_norm(x)) x = x + attn_out # residual connection# Step 2 — per-token transformation ffn_out = feedforward(layer_norm(x)) x = x + ffn_out # residual connectionreturn x

Six lines. Stack 96 of them on top of each other. Wrap the input in a token embedding lookup. Wrap the output in a layer that maps the final hidden states back into a probability distribution over the vocabulary. That is the architecture of GPT-4. That is also, more or less, the architecture of Claude and Gemini and Llama. The differences are in scale, training data, and dozens of small tricks. The skeleton is the same.

This is the bewildering thing for someone meeting the architecture for the first time. The model is conceptually so simple. You can fit the entire algorithm on a postcard. And yet — out the other end — it can write a sonnet, debug your TypeScript, and explain quantum tunnelling to a teenager. The intelligence is not in the architecture. The intelligence is in the **billions of learned numbers** the architecture moves around.

Chapter 06

## Training — *how* an empty network learns anything.

At the start, every parameter in the network is a random number. The model is functionally nonsense. Feed it text and it will produce gibberish. Training is the process by which the random numbers become, slowly, the numbers that turn an empty network into GPT.

The training task is mechanically simple. You take a piece of real text — say, the first sentence of a Wikipedia article. You hide the last word. You ask the network to predict it. If the network's predicted word is right, you do nothing. If it is wrong, you compute exactly how wrong (this is the *loss*) and you nudge every parameter in the direction that would have produced a slightly less wrong answer.

You repeat this with another piece of text. And another. And another. **Trillions of times.** In modern training runs, the model sees somewhere between two and twenty trillion tokens. By the end, the nudges have accumulated into something extraordinary: the network has internalised the statistical structure of human writing.

### What the model is actually learning

It is not memorising the training text. The text is far too big for the model's parameters to memorise. What the model is learning is the *function* behind the text. The patterns. The grammar. The logical structures. The factual associations. Slowly, statistically, painfully. By the millionth example, a small grammar starts to crystallise. By the billionth, a sense of subject-matter coherence. By the trillionth, what looks an awful lot like reasoning.

This is what people mean by "training" when they say GPT-4 cost a hundred million dollars to train. They mean: a few thousand specialised GPUs running this prediction-and-nudge loop continuously for several months, on the largest curated text dataset humanity has ever assembled. Every nudge is a tiny shift in some parameter. Add a trillion such nudges together and you get the modern LLM.

Chapter 07

## RLHF — why *ChatGPT is polite.*

The model that comes out of the training loop above can predict text. It cannot yet help you. It will happily complete your question with three more questions. It will produce unsafe answers. It will be inconsistent. It is, after the first training stage, a stunningly good autocomplete and not a useful assistant.

The second stage — the one that turns GPT into ChatGPT — is called **reinforcement learning from human feedback**, or RLHF. Human labellers are paid to rank the model's outputs. Better answer first. Worse answer second. Over hundreds of thousands of rankings, a small "reward model" learns to mimic human preference. Then the main LLM is fine-tuned to maximise that reward.

RLHF is what gives ChatGPT its voice — the politeness, the refusal to do dangerous things, the long structured answers with bullet points. Different labs make different RLHF choices and the result is that Claude sounds like Claude, ChatGPT sounds like ChatGPT, and Gemini sounds like Gemini, even though their base models are architecturally similar.

This is also the stage where most of the model's *safety* behaviour lives. The base model knows how to write malware. The RLHF-trained model has been heavily reinforced toward refusing. Whether this works is a research field of its own — and the fact that "jailbreaks" are still a category of attack tells you the RLHF layer is more like a polite suggestion than a hard wall.

Chapter 08

## What is still *genuinely magical*.

You now know roughly how an LLM works. Tokens, embeddings, attention, transformer stacks, the prediction loss, RLHF. That is, with surprising honesty, the whole picture. There is no secret module we left out.

And yet — most people who work on these models full time will tell you the same thing: we know how to *build* them, but we still do not fully understand *why* they work as well as they do.

Why does an LLM with enough parameters suddenly become capable of multi-step arithmetic when a slightly smaller one cannot? Why do certain training data mixtures produce dramatically better reasoning? Why does attention learn to look up factual knowledge in some heads and grammar in others, without being told to? Why is the loss curve smooth even when the capabilities emerging from it are jagged?

This is the active research field of *mechanistic interpretability* — opening up trained networks neuron by neuron, trying to figure out what each one has learned. We are years away from a satisfying answer. The architecture is on a postcard. The reason it works is not.

If you have read this far, you now have a more honest mental model of how modern AI works than ninety-nine per cent of the people writing op-eds about it. The next question is: what do you do with that understanding?

The honest answer is the obvious one. You learn to build with it. The chapters above are the conceptual skeleton. The skill itself comes from writing the code, training the tiny models, breaking them, and watching them work. That is what every Modern Age Coders AI course is built around — at every age, from eight to fifty.

> The architecture is on a postcard. The reason it works is *not*. That is why the engineers who can build this are about to be the most valuable people in the next decade.

— A line we wish we had not had to writeModern Age Coders · courses by age band

## Now *build* what you just understood.

Reading this page gives you the map. Building gives you the territory. Below are the real Modern Age Coders cohorts — live, small batch, mentor-led, for every age from seven to fifty. Click any to see the full syllabus, schedule and fee.

### For *kids*, age 7 to 12 — the on-ramp

Junior · weekly live[Ages 7–11 · Beginner Vibe Coding for *Kids* Scratch and block coding plus AI-assisted projects. The on-ramp that gets a child from "what is code" to "I built this." 2 classes/week₹1,499/mo](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)[Ages 8–12 · Python & AI Python & AI Kids *Masterclass* Pure Python introduction with AI tooling baked in. The most-requested course in our kids catalog. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 9–13 · AI Tools Kids AI *Mastery* AI tools that real children can use to build real things — chatbots, image generators, mini agents. 2 classes/week₹1,499/mo](/courses/kids-ai-mastery-course)

### For *teens*, age 13 to 18 — the build years

Senior · weekly live[Ages 13–17 · Core Vibe Coding for *Teens* Python, web, AI tools, shipped projects. A teenager finishes the year with a real GitHub and a real portfolio. 2 classes/week₹1,499/mo](/courses/vibe-coding-for-teens-python-web-ai-projects-course)[Ages 14–18 · AI / ML Deep AI & ML *Masterclass · Teens* Build real ML models. Train neural networks. Touch the same techniques the chapters above describe. The serious teen track. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[Ages 13–17 · Python depth Python Complete *Masterclass* The full language. Deep. From basics through advanced features, with projects that prove fluency. 2 classes/week₹1,499/mo](/courses/python-complete-masterclass-teens)

### For *adults & college*, age 17+ — the engineer track

Pro · weekly live[College / Adult · AI / ML AI & ML *Complete* The flagship engineering track. From numpy through transformers. Build small models, train them, deploy them. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)[College / Adult · Gen AI Generative AI *Masterclass* Build with LLMs the right way. RAG, fine-tuning, custom GPTs, agentic workflows, evaluation. Career-grade. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)[College / Adult · Automation Python AI *Automation* Python plus AI plus automation tooling — the highest-leverage skill stack for a non-engineer in 2026. 2 classes/week₹1,499/mo](/courses/python-ai-automation-masterclass-college)Talk to a real mentor · free 25-minute call

## If you read this page and want a *human* to suggest the right course — we have one for you.

Modern Age Coders has been teaching live online since 2020. 10,000+ families in eleven countries. Real teachers, small cohorts, no recorded-video nonsense. Tell us who is learning and we will write back within twenty-four hours with the cohort that fits.

Questions readers ask after finishing this article

## The things you *actually* want to ask.

Is AI really intelligent?

Modern AI systems are pattern matchers of extraordinary scale, trained on the bulk of human writing. Whether that constitutes intelligence depends on how you define the word. They do not understand in the human sense — they have no body, no model of the world, no ongoing inner life between conversations. They predict. But prediction at this scale produces something close enough to understanding to be useful for an enormous number of tasks. The honest position is somewhere in the middle: it is not a person, but it is also not a calculator. We do not yet have the right word for what it is.

Will AI take my child's job?

The honest answer is yes — and no. AI will take many existing roles, particularly those that consist primarily of routine analytical or written work. But the same wave is creating new roles faster than economists are tracking. The students of ours who started learning AI in 2022 are now, four years later, in some of the highest-paid roles in the industry. The risk is not that AI exists. The risk is for the child whose parents did not let them learn it.

Can my child learn how AI works?

Yes, at every age. A nine-year-old can understand the idea of token prediction by playing with one of our Scratch demos. A fourteen-year-old can build a small chatbot using the Anthropic or OpenAI API. A college student can train a tiny transformer from scratch. We have built a sequence of courses that matches the age, the curiosity level, and the realistic time commitment of each band. Pick one from the courses section above or talk to a mentor.

How is this different from learning to use ChatGPT?

Using ChatGPT is using a calculator. Knowing how an LLM works is knowing how a calculator does long division — and being able to build one yourself if the calculator on the shelf is broken or wrong. The first is a useful skill. The second is an unfair advantage. The students we are training are aiming for the second.

Where should I go next on Modern Age Coders to learn more?

Three places. First — our [build your own GPT in Python](/build-your-own-gpt-python) walkthrough, which turns this conceptual page into actual code. Second — our [inside neural networks](/inside-neural-networks) deep dive, which goes one layer below this page into how learning actually happens. Third — our [AI engineer roadmap](/ai-engineer-roadmap-2026), which lays out the full path from beginner to working AI engineer.

Where can I read more about the mechanistic interpretability research mentioned in Chapter 8?

The leading public lab in this area is Anthropic's interpretability team — their work is freely readable. Chris Olah, Neel Nanda, and the broader "circuits" community publish accessibly. Outside of academic papers, the best informal source is Andrej Karpathy's YouTube channel, which is where many of our older students go after our courses. We will be writing a Modern Age Coders companion piece on interpretability later this year.

I am a complete adult beginner — am I too late?

No. Roughly thirty per cent of our enrollments in 2026 have been adults — career changers, returnees, mid-career professionals, people in their 40s and 50s. The field is six years old at scale and most of the people working in it learned what they know in the last three. You are not late. You are early to a field that is still being built.

## Read next

#### Sibling pillar pages

[Build your own GPT in Python](/build-your-own-gpt-python)[Inside neural networks](/inside-neural-networks)[AI engineer roadmap 2026](/ai-engineer-roadmap-2026)[AI agents explained](/ai-agents-explained)

#### Course tracks

[For kids](/levels/coding-for-kids)[For teens](/levels/coding-for-teens)[For college](/levels/coding-for-college-students)[For professionals](/levels/coding-for-professionals)

#### Specialty tracks

[Olympiad medal track](/coding-olympiad-medal-track)[JEE coding track](/jee-aspirant-coding-track)[Coding comeback · women](/coding-comeback-women)[AI agents for business](/ai-agents-and-automation)

#### Tools

[Screen-time to skill](/screen-time-to-skill)[Fee calculator](/coding-fee-calculator)[Coding roadmap](/coding-roadmap)[Book a free demo](/book-demo)

Real student projects

## What our students actually build

Every one is a real, live project shipped by a Modern Age Coders student. Explore more in [Student Labs](/student-labs).

[![Moxo — Company Landing Page](/images/projects/moxo.webp)Web AppMoxo — Company Landing PageA stunning modern landing page with smooth parallax scrolling, advanced GSAP animations and elegant section transitions that bring the brand to life.by IshaOpen the live project ↗](https://moxo.modernagecoders.com)[![Baby — Typing Speed Challenge](/images/projects/baby.webp)GameBaby — Typing Speed ChallengeAn engaging typing speed challenge where users test how fast and accurately they can type, with a live leaderboard connected to a MongoDB backend.by KritikaOpen the live project ↗](https://baby.modernagecoders.com)[![MyDay — Social Productivity Organizer](/images/projects/myday.webp)Web AppMyDay — Social Productivity OrganizerA beautifully designed productivity platform to organise daily tasks, set goals and stay consistent — with a community feed of others' plans for inspiration.by VedantOpen the live project ↗](https://myday.modernagecoders.com)

Parent & student voices

## What our families say

Real, verified reviews from Modern Age Coders families. Read hundreds more on our [Wall of Love](/love).

★★★★★

> “The classes are excellent. The teachers explain concepts very clearly and make code fun and easy to understand. The sessions are interactive and fun. They also help students boost their confidence. We not only focus on academics, but also on logic building and problem solving.”

*PPragyen Diwan
Parent*

★★★★★

> “My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it. I can see his improvement, and I believe he will grow even more interested in the subject. The teachers are very cooperative and listen to our suggestions. Overall, I am very happy with the class.”

*SSonam Oswal
Parent of Dhairya*

★★★★★

> “The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. Teachers make it so simple with clear explanations, practical exercises, and interactive content. As per my son, the coding class is very helpful and engaging. Sir explains complex concepts clearly. The projects were challenging and rewarding.”

*RRia Mukherjee
Parent*

---

*Canonical: https://learn.modernagecoders.com/how-ai-actually-works*
