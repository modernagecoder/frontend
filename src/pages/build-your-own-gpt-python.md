---
title: "Build Your Own GPT in Python — From Tokenizer to Trained Model in 300 Lines | Modern Age Coders"
description: "The honest, code-first walkthrough of building a tiny transformer language model from scratch in Python. Tokenizer, embeddings, multi-head attention, training loop and sampling — written so a determined teenager can follow. By Modern Age Coders."
canonical: https://learn.modernagecoders.com/build-your-own-gpt-python
source: src/pages/build-your-own-gpt-python.html
---
> The honest, code-first walkthrough of building a tiny transformer language model from scratch in Python. Tokenizer, embeddings, multi-head attention, training loop and sampling — written so a determined teenager can follow. By Modern Age Coders.

~/build-your-own-gpt/main.py · open in editor

# def build_a_gpt(): # in 300 lines of Python.

This is the code-first walkthrough we wish we had when we started. A complete, working, end-to-end implementation of a small transformer language model — tokenizer, embeddings, multi-head attention, training loop, sampling — written in PyTorch, line by line, with every line explained. No "use this library" handwaving. The actual matrix math. Built so that a determined fifteen-year-old can follow.

**~*300* lines**Of real PyTorch**~*4* hours**To read end-to-end**~*$0***Runs on Google Colab free**~*10M* params**The tiny GPT you will build

$ ls courses · *or take this with a cohort.* Live small-batch, every age. Click into any.

[browse all 60+ →](/courses)[Ages 8–12 · Kids Python & AI Kids Masterclass Real Python with first-touch AI tooling — the on-ramp for serious young learners. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 14–18 · Teens AI & ML Teens Train real neural networks. Build the tiny transformer from this article, with peers. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[College / Adult Generative AI Masterclass RAG · fine-tuning · agents · evaluation. The career-grade Gen AI cohort. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)[College / Adult AI & ML Complete Flagship engineering track. Numpy through transformers. Mentor-led, 11-week build. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)

## // table of contents

01What we are building02The training data03Character tokenizer04Token + position embeddings05Single-head attention06Multi-head attention07The transformer block08The full model09The training loop10Sampling — generating text11Scaling up — what next12The full fileSection 01 — Setup

## What we are *building*, exactly.

A character-level GPT. About **10 million parameters**. Trained on a small text file — Shakespeare is the traditional choice. After roughly thirty minutes of training on a free Colab GPU, this model produces output that looks like Shakespeare. Not Shakespeare. *Like* Shakespeare. Pentameter-ish phrasing, mostly real words, occasional comedy.

This is enough scale to actually feel the magic. Big enough to learn meaningful patterns. Small enough to train in one sitting. Architecturally identical to GPT-2 — same transformer block, same multi-head attention, same training objective. The thing we will build is a real LLM. Tiny, but real.

Three files. Three concepts. One file for the model, one for training, one for sampling. The full file at the end of this article fits in your editor without scrolling.

**Prerequisites · be honest** You will need: comfort with Python basics, comfort with reading numpy-style array code, a free Google account for Colab, and three to four hours of focused attention. If you have not used PyTorch before, you will pick it up here. We will explain every PyTorch concept on first use. Section 02 — Data

## The *training data.*

One text file. Plain text. The complete works of Shakespeare is the canonical choice — about 1 MB of clean English, broken into character-level structure. You can substitute any large text corpus you like. We have students train on Tagore, on Sherlock Holmes, on years of their own WhatsApp logs (with permission).

data.py

```
# Download the tiny Shakespeare dataset
import urllib.request

url = "https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt"
urllib.request.urlretrieve(url, "input.txt")

with open("input.txt", "r") as f:
    text = f.read()

print(f"Total characters: {len(text):,}")
print(f"First 200 chars:")
print(text[:200])
```

Total characters: 1,115,394 First 200 chars: First Citizen: Before we proceed any further, hear me speak. All: Speak, speak. First Citizen: You are all resolved rather to die than to famish? All: Resolved. resolved. First Citizen:

1.1 million characters. About a quarter of a million tokens once we run our (tiny) tokenizer. Real Elizabethan English with stage directions, character names, line breaks. The model will learn the rhythm of dialogue, the rhythm of pentameter, the surface texture of seventeenth-century vocabulary.

Section 03 — Tokenizer

## A *character tokenizer* in twelve lines.

Real LLMs use byte-pair encoding (BPE) tokenizers with vocabularies of fifty thousand or more. We will use something simpler: **one character = one token**. The vocabulary becomes the set of unique characters in our training text. Tiny — about 65 entries. It is conceptually identical to a real tokenizer, just simpler.

tokenizer.py

```
# Build the vocabulary
chars = sorted(list(set(text)))
vocab_size = len(chars)
print(f"Vocab size: {vocab_size}")

# Map characters to integers and back
stoi = { ch: i for i, ch in enumerate(chars) }
itos = { i: ch for i, ch in enumerate(chars) }

def encode(s):
    return [stoi[c] for c in s]

def decode(l):
    return ''.join([itos[i] for i in l])

print(encode("hello"))
print(decode(encode("hello")))
```

Vocab size: 65 [46, 43, 50, 50, 53] hello

Two dictionaries — one mapping character to ID, one mapping ID back to character. Encode and decode functions that walk through a string. That is the whole tokenizer. Twelve lines. Conceptually identical to what GPT-4's BPE tokenizer does, except ours has 65 entries and theirs has 100,257.

Section 04 — Embeddings

## Token and *position embeddings.*

The model cannot look at a number 46 and know it means the letter "h". The first step inside the model is to convert each token ID into an **embedding** — a learnable vector of size `n_embd`, typically 384 in our tiny model. We need a second embedding too: a **position embedding**, which tells the model where each token sits in the sequence. Without position embeddings, the model treats sentences as bags of words.

model.py · embeddings

```
import torch
import torch.nn as nn

n_embd = 384
block_size = 256  # max context length in tokens

# Token embedding: each token ID gets a vector of size n_embd
token_embedding_table = nn.Embedding(vocab_size, n_embd)

# Position embedding: each position 0..block_size-1 gets a vector
position_embedding_table = nn.Embedding(block_size, n_embd)

# Inside forward pass:
tok_emb = token_embedding_table(idx)        # (B, T, n_embd)
pos_emb = position_embedding_table(torch.arange(T))  # (T, n_embd)
x = tok_emb + pos_emb                       # (B, T, n_embd)
```

Each `nn.Embedding` is conceptually a lookup table — a matrix where row *i* is the embedding for ID *i*. The rows start random and are learned during training. By the end, the row for the letter "h" sits close, in embedding space, to the rows for "g", "i", "j" and other letters with similar contexts.

The addition `tok_emb + pos_emb` is one of the strangest and most beautiful tricks in the transformer. Position and content live in the same vector space, added together. The model learns to disentangle them in later layers. It works astonishingly well.

Section 05 — Attention

## *Single-head attention*, derived from scratch.

This is the heart. Once you understand a single attention head, multi-head is just running several in parallel, and the rest of the architecture is plumbing.

### The intuition first

For each position in the sequence, we want to look at *previous positions* and decide how much to attend to each. We project each token into three vectors: a **query**, a **key**, and a **value**. The query of the current token is dot-producted with the keys of all previous tokens to produce attention scores. The scores are softmaxed to become weights. The weighted sum of the values is the output.

model.py · single head

```
class Head(nn.Module):
    def __init__(self, head_size):
        super().__init__()
        self.key   = nn.Linear(n_embd, head_size, bias=False)
        self.query = nn.Linear(n_embd, head_size, bias=False)
        self.value = nn.Linear(n_embd, head_size, bias=False)
        self.register_buffer('tril',
            torch.tril(torch.ones(block_size, block_size)))

    def forward(self, x):
        B, T, C = x.shape
        k = self.key(x)    # (B, T, head_size)
        q = self.query(x)  # (B, T, head_size)
        v = self.value(x)  # (B, T, head_size)

        # Compute attention scores
        wei = q @ k.transpose(-2, -1) * C**-0.5  # (B, T, T)
        wei = wei.masked_fill(self.tril[:T, :T] == 0, float('-inf'))
        wei = torch.softmax(wei, dim=-1)            # (B, T, T)

        out = wei @ v   # (B, T, head_size)
        return out
```

Three lines of math, doing all the real work:

- `q @ k.transpose(-2, -1)` — dot product of every query with every key. Big when they "align" in embedding space.
- `* C**-0.5` — scaling, so softmax doesn't saturate at large head sizes.
- `masked_fill(tril==0, -inf)` — the **causal mask**. Each position can only attend to itself and earlier positions. This is what makes the model autoregressive.
- `softmax` — normalises scores into weights that sum to 1.
- `wei @ v` — the weighted sum.

If you understand these five lines, you understand attention. The rest of the paper is decoration. Read them twice.

Section 06 — Multi-head

## *Multi-head* attention is just several heads, concatenated.

One head is good. Six heads is better. Each head learns to look at the sequence in a different way. One head learns about subject–verb agreement. Another tracks long-range dependencies. Another tracks rhyme. We don't tell them what to learn. They discover their specialisations during training.

model.py · multi head

```
class MultiHeadAttention(nn.Module):
    def __init__(self, num_heads, head_size):
        super().__init__()
        self.heads = nn.ModuleList(
            [Head(head_size) for _ in range(num_heads)]
        )
        self.proj = nn.Linear(n_embd, n_embd)

    def forward(self, x):
        # Concatenate outputs of every head along the channel dim
        out = torch.cat([h(x) for h in self.heads], dim=-1)
        out = self.proj(out)
        return out
```

If `n_embd=384` and `num_heads=6`, each head produces a tensor of size `head_size=64`. Concatenating six of them gives back `384`. Then a final linear projection mixes them. That is multi-head attention. Six lines.

Section 07 — Block

## The *transformer block.*

A transformer block is attention followed by a small feedforward network, each wrapped in a layer-norm and a residual connection. This is the unit we will stack repeatedly to make the full model.

model.py · block

```
class FeedForward(nn.Module):
    def __init__(self, n_embd):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(n_embd, 4 * n_embd),
            nn.ReLU(),
            nn.Linear(4 * n_embd, n_embd),
        )
    def forward(self, x):
        return self.net(x)

class Block(nn.Module):
    def __init__(self, n_embd, n_heads):
        super().__init__()
        self.sa = MultiHeadAttention(n_heads, n_embd // n_heads)
        self.ffwd = FeedForward(n_embd)
        self.ln1 = nn.LayerNorm(n_embd)
        self.ln2 = nn.LayerNorm(n_embd)

    def forward(self, x):
        x = x + self.sa(self.ln1(x))     # residual
        x = x + self.ffwd(self.ln2(x))   # residual
        return x
```

That's it. The same block, repeated six times, is the entire body of our model. The feedforward layer (size 4× n_embd in the hidden) is where most of the model's "knowledge" actually lives. Attention moves information between tokens; the feedforward layer transforms that information per-token.

Section 08 — Full model

## The full *model class.*

Stack the embeddings, the transformer blocks, a final layer norm, and a head that projects back to vocabulary size. The full GPT model in one class:

model.py · gpt

```
n_layer = 6
n_heads = 6

class GPT(nn.Module):
    def __init__(self):
        super().__init__()
        self.token_embedding = nn.Embedding(vocab_size, n_embd)
        self.pos_embedding   = nn.Embedding(block_size, n_embd)
        self.blocks = nn.Sequential(*[
            Block(n_embd, n_heads) for _ in range(n_layer)
        ])
        self.ln_f = nn.LayerNorm(n_embd)
        self.head = nn.Linear(n_embd, vocab_size)

    def forward(self, idx, targets=None):
        B, T = idx.shape
        tok_emb = self.token_embedding(idx)
        pos_emb = self.pos_embedding(torch.arange(T))
        x = tok_emb + pos_emb
        x = self.blocks(x)
        x = self.ln_f(x)
        logits = self.head(x)   # (B, T, vocab_size)

        loss = None
        if targets is not None:
            B, T, C = logits.shape
            loss = nn.functional.cross_entropy(
                logits.view(B*T, C), targets.view(B*T)
            )
        return logits, loss
```

Roughly 10 million parameters. The full architecture of GPT-2 at small scale. Save it. Print `sum(p.numel() for p in model.parameters())` to convince yourself the parameter count is in the right ballpark.

Section 09 — Train

## The *training loop.*

For each batch, we draw random chunks of `block_size` tokens from the training text. The targets are the same chunks shifted by one — the model's job is to predict the next token at every position. We compute cross-entropy loss across the whole sequence, backpropagate, and step the optimizer.

train.py

```
batch_size = 64
lr = 3e-4
max_iters = 5000
device = "cuda" if torch.cuda.is_available() else "cpu"

data = torch.tensor(encode(text), dtype=torch.long)
n = int(0.9*len(data))
train_data, val_data = data[:n], data[n:]

def get_batch(split):
    src = train_data if split=='train' else val_data
    ix = torch.randint(len(src) - block_size, (batch_size,))
    x = torch.stack([src[i:i+block_size] for i in ix])
    y = torch.stack([src[i+1:i+block_size+1] for i in ix])
    return x.to(device), y.to(device)

model = GPT().to(device)
optim = torch.optim.AdamW(model.parameters(), lr=lr)

for step in range(max_iters):
    xb, yb = get_batch('train')
    logits, loss = model(xb, yb)
    optim.zero_grad(set_to_none=True)
    loss.backward()
    optim.step()

    if step % 500 == 0:
        print(f"step {step:5d} | loss {loss.item():.4f}")
```

step 0 | loss 4.2381 step 500 | loss 2.1042 step 1000 | loss 1.7321 step 2000 | loss 1.5612 step 3500 | loss 1.4488 step 5000 | loss 1.3997

Loss falls from 4.2 (essentially uniform random over 65 chars, log(65) ≈ 4.17) toward 1.4 — meaningful prediction. Thirty minutes on a free Colab T4 GPU. Half a million parameter updates. The model is, slowly, learning Shakespeare.

Section 10 — Sample

## *Sampling* — generating text.

The model takes a sequence and produces a probability over the next token. To generate, we sample one token from that probability distribution, append it to the input, and repeat. Greedy sampling (always pick the highest-probability token) produces dull, repetitive output. Sampling with a small *temperature* introduces controlled randomness and produces more interesting text.

sample.py

```
@torch.no_grad()
def generate(model, idx, max_new_tokens, temperature=1.0):
    for _ in range(max_new_tokens):
        idx_cond = idx[:, -block_size:]
        logits, _ = model(idx_cond)
        logits = logits[:, -1, :] / temperature   # last position
        probs = torch.softmax(logits, dim=-1)
        next_id = torch.multinomial(probs, num_samples=1)
        idx = torch.cat([idx, next_id], dim=1)
    return idx

start = torch.zeros((1, 1), dtype=torch.long, device=device)
out = generate(model, start, max_new_tokens=300)
print(decode(out[0].tolist()))
```

ROMEO: What stinks in our most love and beggar of breath, That she shall not gracious from the worth? JULIET: And to make her loss, the heavens of the cruel. DUKE VINCENTIO: This is the woman of his trumpet of the world!

Not Shakespeare. But — recognisably Shakespeare-shaped. Capital-letter character names. Colons. Dialog rhythm. Five-syllable-ish lines. Made-up words that sound plausible. This came out of 10 million parameters trained on 1 MB of text for thirty minutes. Now think about what GPT-4 — 1.7 trillion parameters trained on perhaps 10 trillion tokens — is doing. It is exactly the same algorithm. Scaled.

Section 11 — Scale

## What *scaling up* actually means.

You have just built nano-GPT. The path from nano-GPT to GPT-2 is increasing five numbers: `n_layer`, `n_heads`, `n_embd`, `block_size`, and the training corpus size. GPT-2 had 12 layers, 12 heads, 768 embedding size, 1024 context. GPT-3 was the same architecture with vastly bigger numbers — 96 layers, 96 heads, 12288 embedding size — and trained on hundreds of billions of tokens for months on thousands of GPUs.

The path from GPT-3 to GPT-4 added: a real BPE tokenizer (50,000+ tokens), grouped-query attention, mixture-of-experts in some variants, rotary position embeddings (rather than learned ones), much more training data, and the RLHF stage on top. The skeleton you just wrote is still in there.

**What costs money** Modeling: cheap, fits on one GPU. Training data: huge but free (Common Crawl). The expensive thing is *compute* — thousands of high-end GPUs running for months. That is why frontier labs are concentrated in a few places. Your nano-GPT runs on free Colab. GPT-4-class models do not. Section 12 — Full file

## The *full file*, all 300 lines, copy-paste runnable.

Available on our GitHub at `github.com/modernagecoders/nano-gpt-tutorial`. One file. Three commands to run: download data, train, sample. We tested it on a fresh Colab notebook on 14 May 2026. It runs.

If you got this far — **you have just built an LLM from scratch**. Not a toy. Not a hello world. A real, working, autoregressive transformer language model. The same family of math behind ChatGPT. You will never read about "AI" in the news the same way again.

What's next? Two natural directions. One — keep going on language: switch to a real BPE tokenizer, train on a bigger corpus, scale up the layers. Two — take what you have learned and apply it to images, audio, agents, or fine-tuning. Both paths are inside our advanced courses below.

live small-batch cohorts · build alongside other learners

## Want a *cohort* that walks through this with you?

Reading this article is one path. Sitting alongside a mentor and four other learners for twelve weeks is another. Modern Age Coders runs live cohorts at every age — pick the band that fits you or your child.

### For *kids*, age 8–12 — start the journey here

Junior · weekly live[Ages 8–12 · Python+AI Python & AI Kids *Masterclass* The first real step toward training a model someday. Solid Python plus first-touch AI projects. 2 classes/week₹1,499/mo](/courses/python-ai-kids-masterclass)[Ages 8–13 · AI & Thinking Computational Thinking *& AI* Train your own model with Teachable Machine and build real mini-projects. 2 classes/week₹1,499/mo](/courses/cbse-computational-thinking-and-ai-course-for-kids-classes-3-to-8)[Ages 7–11 · Beginner Vibe Coding for *Kids* For complete beginners. Scratch through first Python, with AI co-pilot from day one. 2 classes/week₹1,499/mo](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev)

### For *teens*, age 13–18 — build a real model

Senior · weekly live[Ages 14–18 · AI/ML Deep AI & ML *Masterclass · Teens* The course where teens train real neural networks. Closest parallel to what this article walks through. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-teens)[Ages 13–17 · Python depth Python Complete *Masterclass* The prerequisite for the AI/ML track if you have not done a serious Python year yet. 2 classes/week₹1,499/mo](/courses/python-complete-masterclass-teens)[Ages 13–17 · Full Stack Vibe Coding for *Teens* Python plus web plus AI projects, designed to produce a working teenage portfolio in a year. 2 classes/week₹1,499/mo](/courses/vibe-coding-for-teens-python-web-ai-projects-course)

### For *adults & college*, age 17+ — the engineer path

Pro · weekly live[College / Adult · Gen AI Generative AI *Masterclass* The flagship for anyone who wants to build with LLMs professionally. RAG, fine-tuning, agents, evaluation. 2 classes/week₹1,499/mo](/courses/complete-generative-ai-masterclass-college)[College / Adult · AI/ML AI & ML *Complete* Numpy through training transformers from scratch — like this article, but supervised, with peers. 2 classes/week₹1,499/mo](/courses/ai-ml-masterclass-complete-college)[College / Adult · Automation Python AI *Automation* For the non-engineer adult who wants the highest-leverage AI skill stack. Real automation, real income paths. 2 classes/week₹1,499/mo](/courses/python-ai-automation-masterclass-college)talk to a mentor · free 25 min

## If you got this far, you are *ready for a real cohort.*

Tell us roughly where you are — Python comfortable, PyTorch new, want to train something real — and a senior MAC mentor will write back with the right next step. No sales call, no auto-emails. One human, one reply.

// questions readers ask after running the code

## The honest *follow-up questions.*

Will this code actually train a working LLM?

Yes. We have tested the full script on a fresh Colab notebook on 14 May 2026 and it ran without modification. Training takes about thirty minutes on a free Colab T4 GPU. The output is recognisable English-with-Shakespeare-rhythm. If your loss does not fall below 1.6 in 5000 iterations, the likely culprit is the learning rate or batch size — check those first.

Why character-level instead of BPE tokenisation?

Character-level is twelve lines and conceptually clean. Real BPE adds another two hundred lines for negligible conceptual gain at this scale. The course version of this tutorial does go through BPE in week eight. Karpathy's "Let's build the GPT tokenizer" video is the canonical deeper dive if you want it now.

How do I scale this up to GPT-2 size?

Increase `n_layer` from 6 to 12, `n_heads` from 6 to 12, `n_embd` from 384 to 768, and `block_size` from 256 to 1024. You will hit GPU memory limits on free Colab — you need a T4 with 15 GB minimum, or an A100. Then increase the training corpus from 1 MB to roughly 4 GB. Karpathy's `nanoGPT` repo (github.com/karpathy/nanoGPT) does exactly this and is worth reading after this article.

Where do I learn the maths behind backpropagation?

Our companion pillar page [Inside Neural Networks](/inside-neural-networks) walks through backprop step by step with the same depth as this page does with attention. Read that next.

I am a teenager. Is this honestly within reach?

Yes — if you have a year of Python under your belt. We have had fourteen-year-olds in our cohorts work through this exact material with mentoring. Without a guide it is harder; with a guide it is well within reach. The [AI & ML Masterclass for Teens](/courses/ai-ml-masterclass-teens) is built around walking students through this and its scaled-up successors.

What about Indian languages — Hindi, Tamil, Bengali?

The same architecture works. The tokenizer needs to be more careful for non-Latin scripts (UTF-8 character split is messy), and you need a corpus in your target language. We have students who have trained tiny models on Devanagari Hindi corpora using this exact pipeline with a custom tokenizer. The Generative AI Masterclass goes through this as a week-10 project.

Do you have a GitHub with the full code?

Yes — github.com/modernagecoders/nano-gpt-tutorial. One file. README with run instructions. Tested on Colab. MIT licensed. Fork and modify.

What should I read after this?

In order: the original "Attention is All You Need" paper (it is short and surprisingly readable now that you have the code); Karpathy's nanoGPT YouTube video (3 hours, the most-watched ML tutorial on the internet); the GPT-2 paper. And our pillar pages [How AI Actually Works](/how-ai-actually-works), [Inside Neural Networks](/inside-neural-networks) and [AI Engineer Roadmap 2026](/ai-engineer-roadmap-2026).

## Read next

#### Pillar siblings

[How AI actually works](/how-ai-actually-works)[Inside neural networks](/inside-neural-networks)[AI engineer roadmap](/ai-engineer-roadmap-2026)[AI agents explained](/ai-agents-explained)

#### Course tracks

[For kids](/levels/coding-for-kids)[For teens](/levels/coding-for-teens)[For college](/levels/coding-for-college-students)[For professionals](/levels/coding-for-professionals)

#### Specialty

[Olympiad track](/coding-olympiad-medal-track)[JEE coding track](/jee-aspirant-coding-track)[Comeback · women](/coding-comeback-women)[AI for business](/ai-agents-and-automation)

#### Tools

[Screen-time calculator](/screen-time-to-skill)[Fee calculator](/coding-fee-calculator)[Coding roadmap](/coding-roadmap)[Book a free demo](/book-demo)

Real student projects

## What our students actually build

Every one is a real, live project shipped by a Modern Age Coders student. Explore more in [Student Labs](/student-labs).

[![Life Span Tracker](/images/projects/lifespan.webp)ToolLife Span TrackerAn interactive web tool that calculates expected lifespan, shows days, months and years lived, and visualises remaining time to motivate better habits.by ManayOpen the live project ↗](https://lifespantracker.netlify.app/)[![Simon Game](/images/projects/simongame.webp)GameSimon GameA fun memory-based game where players repeat colour and sound sequences. Each level adds a new challenge — brain-boosting for kids learning logic and focus.by YashaswiOpen the live project ↗](http://yashaswi-2017.my.canva.site)[![Image Slider Website](/images/projects/slider.webp)ToolImage Slider WebsiteA visually appealing site with a smooth image carousel — auto or manual navigation, responsive layout and beautiful transition effects.by SomrajOpen the live project ↗](https://robo23middle-stack.github.io/scenes/)

Parent & student voices

## What our families say

Real, verified reviews from Modern Age Coders families. Read hundreds more on our [Wall of Love](/love).

★★★★★

> “Modern Age Coders has been a game-changer for me! I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I'm now the topper in my class and can confidently write complex programs with ease.”

*SSamriddha Mondal
Student*

★★★★★

> “Modern Age Coder have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence, keeps them updated with technology, and inspires them to learn without hesitation.”

*SSonu Goyal
Parent*

★★★★★

> “My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it. I can see his improvement, and I believe he will grow even more interested in the subject. The teachers are very cooperative and listen to our suggestions. Overall, I am very happy with the class.”

*SSonam Oswal
Parent of Dhairya*

---

*Canonical: https://learn.modernagecoders.com/build-your-own-gpt-python*
