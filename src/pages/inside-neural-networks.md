---
title: "Inside Neural Networks — How Deep Learning Really Works, From Perceptron to Transformer | Modern Age Coders"
description: "The honest, mechanical deep dive into how neural networks learn. Perceptrons, multilayer networks, backpropagation derived by hand, CNNs, RNNs and transformers — explained without hiding the maths. By Modern Age Coders."
canonical: https://learn.modernagecoders.com/inside-neural-networks
keywords: ["how neural networks work", "deep learning explained", "backpropagation explained", "neural network from scratch", "perceptron explained", "CNN explained", "RNN explained", "gradient descent", "how does deep learning work", "neural network maths", "neural network learning", "modern age coders"]
source: src/pages/inside-neural-networks.html
---
> The honest, mechanical deep dive into how neural networks learn. Perceptrons, multilayer networks, backpropagation derived by hand, CNNs, RNNs and transformers — explained without hiding the maths. By Modern Age Coders.

A long deep-learning deep dive · 28 min read

# Inside *neural networks*. The architecture, the maths, the moment of learning — without hiding the ∂L/∂w.

Every popular AI explainer either skips the maths or buries the intuition under it. This page does neither. We walk from a single artificial neuron, through how networks learn by gradient descent, derive backpropagation by hand, build up to CNNs, RNNs and transformers — keeping the equations visible but explaining each one the moment it appears.

**1957**First perceptron (Rosenblatt)**1986**Backprop popularised**2012**AlexNet · the modern era begins**2017**Transformer · attention is all you need

Or — *train one alongside other learners.* Live cohorts, every age. One click in.

[Browse all 60+ courses →](/courses)[Ages 8–12 · Kids Python & AI *Kids* The kid-paced first chapter — solid Python, first-touch AI projects, real shipped work. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 14–18 · Teens AI & ML *Teens* This article taught at teen pace, in PyTorch, with peers — by week 12 you train a working CNN. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[College / Adult · Engineer AI & ML *Complete* Backprop by hand. Train CNNs. Build transformers. The serious engineering track. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)[College / Adult · GenAI Generative AI *Masterclass* Where the deep-learning maths in this article meets the systems being shipped in 2026. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)

## Nine chapters · in the order intuition builds

01What is an artificial neuron?02Multilayer networks03Loss — how we measure wrongness04Gradient descent, geometrically05Backpropagation, derived06Why depth matters07Convolutional networks08RNNs and the long-range problem09The transformer, and what changedChapter 01 · The neuron

## One *artificial neuron*, the building unit.

An artificial neuron is, mechanically, a function. It takes several numbers in, produces one number out. That is the whole object. The function is a weighted sum followed by a non-linearity. Three lines of arithmetic.

Figure 1.1 · A single neuron receiving three inputsx₁ · 0.62x₂ · -0.30x₃ · 1.10f( Σ wᵢxᵢ + b )y · 0.84

Each input *xi* is multiplied by a learned weight *wi*. The products are summed. A learned bias *b* is added. The result is passed through an activation function — typically the ReLU, which simply returns the input if positive and zero otherwise. The output is one number.

 y = f(w1x1 + w2x2 + w3x3 + b) (1.1)

The weights and the bias are what the network **learns**. The inputs come from outside. The activation function is fixed. Everything fancy about modern neural networks reduces, at the bottom, to billions of copies of this small function with different learned weights and biases.

**The honest part** A "neuron" is a deeply misleading name. There is no biology in here. It is a weighted sum followed by a max function. Frank Rosenblatt called it a neuron in 1957 and the name stuck. Try not to be misled by it. Chapter 02 · Networks

## Multilayer networks — *neurons in formation.*

A single neuron cannot do much. The leap is to arrange many neurons into **layers**, and stack the layers. Each layer's outputs become the next layer's inputs. Information flows from the input layer, through one or more hidden layers, to the output layer.

Figure 2.1 · A 4-layer feedforward network — input, two hidden, outputInputHidden 1Hidden 2Output

Each neuron in a hidden layer takes inputs from *every* neuron in the previous layer. This is why these are called **fully connected** or *dense* layers. With three inputs and a five-neuron hidden layer, you have 3×5 + 5 = 20 weights and biases to learn just at that layer. With a thousand inputs and a thousand-neuron hidden layer, you have a million.

Stack enough layers and the network can represent arbitrarily complex functions. This is the *universal approximation theorem*: a sufficiently large feedforward network can approximate any continuous function to any precision. It does not tell us how to find the right weights. That is the rest of this article.

Chapter 03 · Loss

## The *loss function* — how we measure wrong.

Before the network can learn, we need a number that tells us how wrong it currently is. We call this the **loss**. The loss is small when the network's output matches the target and large when it does not. Learning is, mechanically, the process of *reducing the loss*.

For classification, the standard loss is *cross-entropy*. For regression, it is *mean squared error*. There are many others. They all share one property: they take the network's prediction and the true target and return a single non-negative number.

 L = (ypred − ytrue)² (3.1)

The loss is, geometrically, a function in a very high-dimensional space — one dimension per parameter of the network. With ten million parameters, the loss is a function in a ten-million-dimensional space. We cannot visualise this. We can, however, find a direction that reduces the loss at any given point. That direction is the **gradient**.

Chapter 04 · Gradient descent

## Gradient descent, *geometrically.*

Imagine the loss as a landscape — hills, valleys, ridges, in millions of dimensions. The network's current parameters place you somewhere on this landscape, at some altitude (the current loss). Learning is, mechanically, the process of **walking downhill**. At every step, look at the slope of the ground beneath you and take a small step in the steepest-downhill direction.

 wnew = wold − η · ∂L/∂w (4.1)

The slope of the loss with respect to a single weight is its *partial derivative*: *∂L/∂w*. We subtract a small multiple (*η*, the **learning rate**) of this slope from the weight. This nudges the weight slightly in the direction that reduces the loss. Apply this update across every weight in the network, and the network has, technically, learned a little.

Do this once for each training example. Or, for efficiency, do it for a small batch of examples at once — this is **stochastic gradient descent**. Repeat for billions of batches. After enough steps, the parameters settle into a configuration where the loss is low. That configuration is, by definition, the trained model.

**The single most surprising fact in this field** Gradient descent works. Loss landscapes in millions of dimensions have, in principle, no reason to be navigable by simple downhill walking. They could be jagged and trap-filled. Empirically, they turn out to be remarkably smooth — full of broad valleys you can reach from many starting points. Why this is true is an open research question. Chapter 05 · Backprop

## Backpropagation, *derived* from one rule.

For gradient descent to work we need *∂L/∂w* for every single weight. With ten million weights, this would seem to require ten million separate calculations. The trick that makes deep learning tractable is that we can compute all of them in **one backward pass** through the network using a single rule from high school: the chain rule.

The chain rule says: if *L* depends on *y*, and *y* depends on *w*, then ∂L/∂w = (∂L/∂y) × (∂y/∂w). Apply this recursively from the output backward through every layer, and you can compute the gradient of every parameter in time roughly equal to one forward pass.

 ∂L/∂wj = ∂L/∂aL · ∂aL/∂aL−1 · … · ∂aj+1/∂wj(5.1)

The product of derivatives, traced backward through the network's layers, is what gives the algorithm its name. The forward pass computes the loss; the backward pass computes the gradient of every parameter. PyTorch and TensorFlow do this for you with one line — `loss.backward()` — but underneath, it is just the chain rule applied a few million times.

# In PyTorch — the entire training stepfor x, y_true in dataloader: y_pred = model(x) # forward pass loss = criterion(y_pred, y_true) loss.backward() # gradient of every parameter optimizer.step() # nudge parameters downhill optimizer.zero_grad()

Five lines. The same five lines train GPT-4 and your nano-GPT.

Chapter 06 · Depth

## Why *depth* matters — the compositionality argument.

A two-layer network can technically approximate any function. So why are modern networks dozens or hundreds of layers deep? The answer is *compositionality*. Real-world data has hierarchical structure. An image is composed of objects, which are composed of parts, which are composed of edges, which are composed of pixels. Each layer of a deep network learns to detect features one step further up this hierarchy.

You can see this directly in trained image networks. The first layer learns edges. The second learns simple textures. The third learns shapes. The fourth learns parts of objects. The fifth learns whole objects. The same pattern shows up in language models — early layers track syntax, middle layers track semantics, later layers track high-level meaning and reasoning.

Depth is not magic. It is the architecture's way of saying: **learning compositional structure is easier than learning everything at once.**

Chapter 07 · CNN

## Convolutional networks — *seeing.*

For images, a fully connected layer is hopelessly wasteful. A 224 × 224 image has 50,176 pixels; the first hidden layer alone would have hundreds of millions of weights. We need an architecture that respects the structure of images: spatial locality, translation invariance, repeated features.

The solution, due to Yann LeCun in the 1980s, is the **convolutional layer**. Instead of every neuron looking at every pixel, each neuron looks at a small local patch (say, 3 × 3 pixels). The same small set of weights — called a *kernel* — is slid across the entire image, producing a "feature map" of where that kernel's pattern appears.

A CNN typically stacks many such convolutional layers. The first layer's kernels learn to detect edges. The second layer's kernels learn to detect combinations of edges (corners, textures). The third learns combinations of textures (parts). And so on, until the deepest layers respond to entire objects. This is exactly the compositional argument of Chapter 6, made concrete.

CNNs dominated computer vision from AlexNet in 2012 through 2020, when transformers — adapted from language to vision via the Vision Transformer (ViT) — began to overtake them on the largest scales. Both architectures remain in active use depending on data size and compute budget.

Chapter 08 · RNN

## RNNs and the *long-range problem.*

Sequences — text, speech, time series — pose a different challenge from images. They have order. They have variable length. A model needs to remember earlier parts of the sequence to make sense of later parts. The first solution was the **recurrent neural network**: a network whose hidden state at time *t* depends on its hidden state at time *t−1*.

This worked, modestly, for short sequences. For long ones it failed for two reasons. First, gradients *vanish*: when you backpropagate through many time steps, repeated multiplication by small numbers makes the gradient effectively zero by the time it reaches the early steps. Second, RNN computation is inherently *sequential*: you cannot compute step *t* before computing step *t−1*. This made training painfully slow on modern hardware.

The LSTM (long short-term memory) of Hochreiter and Schmidhuber, 1997, partially solved the vanishing-gradient problem with an explicit memory cell. LSTMs ruled natural language processing through about 2017. Then they were replaced.

Chapter 09 · Transformer

## The transformer, and *what changed.*

The 2017 paper "Attention is All You Need" introduced an architecture with no recurrence and no convolutions. Just stacked layers of **self-attention**, in which every position in the sequence simultaneously looks at every other position and decides what to attend to. The attention mechanism is described in mechanical detail in our pillar page [How AI Actually Works](/how-ai-actually-works) and implemented from scratch in [Build Your Own GPT](/build-your-own-gpt-python).

Two things changed for the transformer that did not change for any prior architecture. First — it parallelises perfectly across sequence positions, which means modern GPU hardware can be used at very high efficiency. Second — gradient flow is dramatically shorter, because every position can attend to every other in one step rather than propagating through many.

The result was the scaling era. Between 2017 and 2026, transformer models grew from millions of parameters to trillions. The same architecture. The same training objective. Wider, deeper, longer-context, more data. The capabilities at the other end stunned everyone, including the labs building them.

**The whole field, on one line** Neural network = neuron → layer → network → trained by backpropagation → deepened to capture hierarchy → specialised by architecture (CNN for spatial, RNN/transformer for sequential). Every modern AI system you have heard of fits inside this sentence.

If you have made it through this article, you now have the conceptual map of deep learning. The next two natural directions: **code it** — our [build your own GPT](/build-your-own-gpt-python) walkthrough is exactly that. And **place yourself on the path** — our [AI engineer roadmap](/ai-engineer-roadmap-2026) tells you what to do this month, this quarter, this year, until the engineer you want to be is the engineer in the mirror.

Modern Age Coders cohorts · for every age

## The courses where you *build* these networks.

A neural networks paper is not the same as training a neural network. Below are the live MAC cohorts — at every age — where students implement perceptrons, train classifiers, build CNNs and write tiny transformers under mentor supervision.

### For *kids*, age 8–12

Junior · weekly live[Ages 8–12 · Python + AI Python & AI Kids *Masterclass* The kid-paced foundation. Build first AI projects. The neuron and gradient descent introduced gently. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 8–11 · Thinking Computational *Thinking + AI* The skill that comes before the model. Pattern recognition, decomposition, the algorithmic mind. 2 classes/week₹1,499/mo](/courses/computational-thinking-ai-kids)[Ages 9–13 · AI Tools Kids AI *Mastery* Use real AI tools, then look under the hood at what is actually happening. Curiosity-led. 2 classes/week₹1,499/mo](/courses/kids-ai-mastery-course)

### For *teens*, age 13–18

Senior · weekly live[Ages 14–18 · AI/ML deep AI & ML *Masterclass · Teens* This article taught at teen pace, in PyTorch, with peers. Build a working CNN by week 12. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[Ages 13–17 · Python Python Complete *Masterclass* The Stage 1 prerequisite for any deep learning. Get fluent here before chasing transformers. 2 classes/week₹1,499/mo](/courses/python-complete-masterclass-teens)[Ages 13–17 · Foundations Computational Thinking + *AI* The thinking layer. Builds the muscle that understanding neural networks actually requires. 2 classes/week₹1,499/mo](/courses/computational-thinking-ai-teens)

### For *adults & college*, age 17+

Pro · weekly live[College / Adult · AI/ML AI & ML *Complete* The flagship engineering track. Implement backprop. Train CNNs. Build transformers. By hand. With mentors. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)[College / Adult · AI Broad Artificial Intelligence *Complete* The wide-arc AI course. Classical, deep, generative, agentic. Foundation for the field. 2 classes/week₹1,499/mo](/courses/artificial-intelligence-complete-masterclass-college)[College / Adult · GenAI Generative AI *Masterclass* The transformer-and-after course. Where the maths in this article meets the systems being built in 2026. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)Talk to a mentor · free 25 min

## If this article made *sense*, the right next step is a cohort.

The fastest way from "I understand backpropagation" to "I just trained one" is a small group of peers and a mentor. Tell us roughly where you are; a senior MAC instructor will write back inside 24 hours with the cohort that fits.

Honest follow-ups

## The questions readers *genuinely ask.*

I am not strong at maths. Should I still try this?

Yes. The maths you need for working deep learning is small — linear algebra basics, derivatives, the chain rule. Less than a single semester of high school calculus. Our [roadmap's Stage 2](/ai-engineer-roadmap-2026) tells you exactly what to learn. Avoid the trap of "going back to maths" for six months — learn the precise subset alongside code.

Do I need a GPU to learn this?

No. Free Google Colab gives you a T4 GPU for several hours a day. That is enough to train every model in our coursework, including a small transformer. You will need your own GPU only if you start training models with millions of parameters for hours at a time — and that is well past the point where you should have already been hired.

What is the right age to start neural networks?

Conceptually, about age 12 — when a child can sit with an equation for ten minutes without losing patience. Practically — through code, with mentor supervision — age 14 is comfortable. We have had 13-year-olds train working MNIST classifiers in cohort. Younger than that, we focus on Python fluency and computational thinking; the neural networks come naturally a year or two later.

How is this different from learning from YouTube?

YouTube is excellent for first exposure. It is not how anyone learns to actually do this. Deep learning intuition lives in the fingertips — built by typing every line of code yourself, breaking it, fixing it, debugging the tensor shape errors. Watching someone else type does not build that muscle. A cohort gives you a fixed cadence, mentor feedback on your code, and peers at the same stage. We see the gap every month between learners who watched and learners who built.

Will neural networks be replaced soon?

Almost certainly not in the next decade. The architecture details will keep evolving — transformer variants, mixtures of experts, state-space models — but the broad family (differentiable function approximators trained by gradient descent) is the right primitive for the foreseeable future. Learning it now is not a bet on a fashion; it is a bet on the substrate.

What is the difference between this page and "How AI Actually Works"?

The two pillars pair. [How AI Actually Works](/how-ai-actually-works) covers tokens, embeddings and the transformer at conceptual depth — what an LLM is. **This page** covers neural networks themselves at mechanical depth — how they learn. Read them together for the full picture. The [Build Your Own GPT](/build-your-own-gpt-python) tutorial then turns both into running code.

Do you have resources for an absolute beginner who hasn't done Python yet?

Yes. Start with our [Python for Beginners](/python-for-beginners-kids) page if a child, or the [Python Zero-to-Advanced](/courses/python-programming-masterclass-zero-to-advanced-college) course if an adult. Three months in Python first, then come back to this article. Neural networks with weak Python is the most common painful skipped step.

## Read next

#### Pillar siblings

[How AI actually works](/how-ai-actually-works)[Build your own GPT](/build-your-own-gpt-python)[AI engineer roadmap](/ai-engineer-roadmap-2026)[AI agents explained](/ai-agents-explained)

#### Course tracks

[For kids](/levels/coding-for-kids)[For teens](/levels/coding-for-teens)[For college](/levels/coding-for-college-students)[For professionals](/levels/coding-for-professionals)

#### Specialty

[Olympiad track](/coding-olympiad-medal-track)[JEE coding track](/jee-aspirant-coding-track)[Comeback · women](/coding-comeback-women)[AI for business](/ai-agents-and-automation)

#### Tools

[Screen-time calculator](/screen-time-to-skill)[Fee calculator](/coding-fee-calculator)[Coding roadmap](/coding-roadmap)[Book a free demo](/book-demo)

Real student projects

## What our students actually build

Every one is a real, live project shipped by a Modern Age Coders student. Explore more in [Student Labs](/student-labs).

[![Misti — AI Chatbot for Maths & Coding](/images/projects/misti.webp)AI & MLMisti — AI Chatbot for Maths & CodingAn intelligent AI-powered chatbot that helps students solve maths and coding questions with deep, step-by-step explanations using advanced Python AI frameworks and LLM APIs.by HarshitOpen the live project ↗](https://misti.modernagecoders.com)[![Babu — 90 Second Maths Challenge](/images/projects/babu.webp)GameBabu — 90 Second Maths ChallengeAn exciting 90-second maths challenge with random problems under time pressure, and a dynamic leaderboard powered by Firebase/MongoDB with real-time score updates.by Modern Age CodersOpen the live project ↗](https://babu.modernagecoders.com)[![NutriLife — AI Nutrition Coach](/images/projects/nutrilife.webp)AI & MLNutriLife — AI Nutrition CoachSnap a photo of any meal and NutriLife instantly names every food, then breaks down the calories, macros, vitamins and minerals — powered by AI. Bhavya vibe-coded it from a single idea: shaped the app in prompts, then wired up the AI food-recognition, daily tracking and smart coaching by hand.by BhavyaOpen the live project ↗](https://nutrilife-bhavya.lovable.app)

Parent & student voices

## What our families say

Real, verified reviews from Modern Age Coders families. Read hundreds more on our [Wall of Love](/love).

★★★★★

> “Ma'am taught me division using sharing candies among friends. Now I know WHY we divide and what remainders mean. Math is not scary anymore—it's just solving real problems!”

*KKabir Singh
Grade 4 Student*

★★★★★

> “They don't just teach syntax, they explain WHY things work. I finally understood how loops actually work in memory. Now I can solve any problem without memorizing patterns!”

*AAarav Sharma
Student, Grade 7*

★★★★★

> “Best part? They connect coding to real-world scenarios. Learned how Netflix recommendations work while studying algorithms. Concepts stick forever when you understand the 'why'.”

*IIshaan Reddy
College Student, B.Tech CSE*

---

*Canonical: https://learn.modernagecoders.com/inside-neural-networks*
