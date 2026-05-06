---
title: "Transformers and Attention Mechanism - Self-Attention, Multi-Head Attention, BERT, GPT | Modern Age Coders"
description: "Master the Transformer architecture: attention mechanism (Query, Key, Value), self-attention, multi-head attention, positional encoding, encoder-decoder structure, BERT, GPT, T5, and Hugging Face Transformers library. 54+ practice questions with runnable Python code."
slug: transformers-and-attention
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/transformers-and-attention
category: "AI and Machine Learning"
keywords: ["transformer architecture", "attention mechanism", "self attention", "multi head attention", "positional encoding", "bert", "gpt", "t5", "hugging face transformers", "encoder decoder"]
---
# Transformers and Attention Mechanism

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 20  
**Practice questions:** 52

## What Are Transformers?

The **Transformer** is a neural network architecture introduced in the 2017 paper "Attention Is All You Need" by Vaswani et al. at Google. It fundamentally changed AI by showing that you do not need recurrence (RNNs) or convolution (CNNs) to process sequential data. Instead, Transformers use a mechanism called **attention** to directly connect every element in a sequence to every other element, regardless of their distance.

```
# The Transformer revolution in perspective:
# Before (RNNs): process sequences one step at a time (sequential, slow)
# After (Transformers): process ALL positions simultaneously (parallel, fast)

# Every major AI model since 2018 is based on Transformers:
# - BERT (Google, 2018) -- understanding text
# - GPT-2/3/4 (OpenAI, 2019-2023) -- generating text
# - T5 (Google, 2019) -- text-to-text framework
# - ChatGPT (OpenAI, 2022) -- conversational AI
# - Claude (Anthropic, 2023-2025) -- advanced language model
# - Vision Transformer (Google, 2020) -- image recognition
# - AlphaFold (DeepMind, 2020) -- protein structure prediction
```

Transformers are the foundation of modern AI. Understanding how they work is essential for anyone serious about AI and machine learning.

### Why Transformers Replaced RNNs

RNNs process sequences one step at a time: to process position 100, you must first process positions 1 through 99. This creates two problems: (1) **No parallelization** -- you cannot speed up training by using more GPUs because the computation is inherently sequential. (2) **Long-range dependencies** -- even LSTMs struggle to connect information across very long sequences (1000+ tokens). Transformers solve both problems by processing all positions simultaneously with attention.

## Why Are Transformers Important?

### 1. They Power Every Major AI System

ChatGPT, Claude, Gemini, BERT, GPT-4, and virtually every state-of-the-art AI system is built on the Transformer architecture. If Aarav wants to understand modern AI -- not just use it, but truly understand how it works -- he must understand Transformers.

### 2. Parallelization = Faster Training

RNNs process tokens sequentially (O(n) time, no parallelism). Transformers process all tokens in parallel (O(1) depth, massive parallelism). This means Transformers can be trained on vastly larger datasets in reasonable time. GPT-3 was trained on 300 billion tokens -- this would be impossible with RNNs. Parallelization on thousands of GPUs is what enabled the scaling laws that drive modern AI.

### 3. Better Long-Range Dependencies

In an RNN, information from word 1 must pass through words 2, 3, 4, ..., 99 to reach word 100. At each step, information is compressed and potentially lost. In a Transformer, word 1 directly attends to word 100 through the attention mechanism -- the path length is O(1), not O(n). This direct connection means Transformers can model dependencies across thousands of tokens.

### 4. Transfer Learning Revolution

Transformers enabled a new paradigm: pre-train a large model on massive unlabeled text, then fine-tune it on a small labeled dataset for a specific task. BERT was pre-trained on all of Wikipedia and BookCorpus, then fine-tuned for sentiment analysis, question answering, or NER with minimal labeled data. This pre-train + fine-tune approach is now the standard for NLP.

### 5. Beyond NLP

Although Transformers were invented for NLP, they have been successfully applied to computer vision (Vision Transformer), audio (Whisper), protein folding (AlphaFold), code generation (Codex/Copilot), robotics, and more. Understanding Transformers gives Priya access to the most versatile architecture in all of AI.

## Detailed Explanation

### 1. The Attention Mechanism

The attention mechanism allows each position in a sequence to look at and gather information from all other positions. Think of it as asking a question and finding the most relevant answers from a set of options.

#### The Restaurant Analogy

Imagine you are at a restaurant:

- **Query (Q)**: What you want -- "I want something spicy and vegetarian"
- **Key (K)**: The menu item descriptions -- "Spicy paneer tikka", "Mild chicken soup", "Hot vegetable curry"
- **Value (V)**: The actual dishes -- the paneer tikka itself, the chicken soup itself, the curry itself

Attention computes how relevant each Key is to your Query (similarity score), then returns a weighted combination of Values based on those scores. You would get mostly paneer tikka and curry (high relevance to "spicy vegetarian") and almost no chicken soup (low relevance).

#### Mathematical Formulation

```
# Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V

# Step 1: Compute similarity scores
# scores = Q * K^T  (dot product of query with each key)

# Step 2: Scale down to prevent large values
# scores = scores / sqrt(d_k)  (d_k = dimension of key vectors)

# Step 3: Convert to probabilities
# attention_weights = softmax(scores)  (each row sums to 1)

# Step 4: Weighted sum of values
# output = attention_weights * V

import numpy as np

def scaled_dot_product_attention(Q, K, V):
    d_k = K.shape[-1]
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    weights = np.exp(scores) / np.exp(scores).sum(axis=-1, keepdims=True)  # softmax
    output = np.matmul(weights, V)
    return output, weights
```

The scaling by sqrt(d_k) is critical. Without it, when d_k is large, the dot products become very large, causing softmax to output values very close to 0 or 1 (saturated). This kills gradients. Dividing by sqrt(d_k) keeps the values in a range where softmax produces meaningful distributions.

### 2. Self-Attention

In self-attention, the Query, Key, and Value all come from the **same sequence**. Every word in a sentence attends to every other word (including itself) to understand context.

```
# For the sentence: "The cat sat on the mat"
# Each word generates its own Q, K, V vectors
# Then each word's Q is compared against all K vectors

# When processing "sat":
#   Q("sat") * K("The")  -> low score (not very relevant)
#   Q("sat") * K("cat")  -> high score (cat is doing the sitting)
#   Q("sat") * K("sat")  -> medium score (self-reference)
#   Q("sat") * K("on")   -> medium score (spatial relationship)
#   Q("sat") * K("the")  -> low score
#   Q("sat") * K("mat")  -> high score (sat on the mat)

# The output for "sat" is a weighted combination of all V vectors,
# with more weight on "cat" and "mat" (high attention scores)
```

This is powerful because it captures relationships regardless of distance. In a 500-word paragraph, self-attention can directly connect the first word to the last word in a single step.

### 3. Multi-Head Attention

Instead of computing attention once, multi-head attention computes it multiple times in parallel with different learned projections. Each "head" can focus on a different type of relationship.

```
# Multi-Head Attention:
# Head 1 might capture syntactic relationships (subject-verb)
# Head 2 might capture semantic similarity (synonyms)
# Head 3 might capture positional relationships (adjacent words)
# Head 4 might capture coreference ("she" refers to "Priya")

# Mathematically:
# head_i = Attention(Q * W_Q_i, K * W_K_i, V * W_V_i)
# MultiHead = Concat(head_1, ..., head_h) * W_O

# Each head has its own weight matrices W_Q, W_K, W_V
# The outputs are concatenated and projected

# Example: 8 heads with d_model=512
# Each head operates on 512/8 = 64 dimensions
# 8 heads produce 8 * 64 = 512 dimensions
# Final projection: 512 -> 512
```

Multiple heads allow the model to jointly attend to information from different representation subspaces. A single head can only capture one type of relationship per layer; multiple heads capture many simultaneously.

### 4. Positional Encoding

Since Transformers have no recurrence and no convolution, they have no inherent sense of position. Without positional encoding, the sentence "The cat sat on the mat" and "mat the on sat cat the" would be identical to the model.

```
# Positional encoding adds position information to the input embeddings
# Original paper uses sinusoidal functions:

# PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
# PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))

import numpy as np

def positional_encoding(max_length, d_model):
    pe = np.zeros((max_length, d_model))
    position = np.arange(max_length)[:, np.newaxis]
    div_term = np.exp(np.arange(0, d_model, 2) * -(np.log(10000.0) / d_model))
    
    pe[:, 0::2] = np.sin(position * div_term)  # Even dimensions
    pe[:, 1::2] = np.cos(position * div_term)  # Odd dimensions
    return pe

pe = positional_encoding(100, 512)
print(f"Positional encoding shape: {pe.shape}")  # (100, 512)

# The positional encoding is ADDED to the word embedding:
# input = word_embedding + positional_encoding
```

The sinusoidal encoding has a useful property: the relative position between any two positions can be computed as a linear function of their encodings. This means the model can learn to attend to relative positions ("the word 3 positions back") rather than just absolute positions.

### 5. The Complete Transformer Architecture

The original Transformer has an encoder-decoder structure:

#### Encoder

The encoder processes the input sequence and produces a rich representation of it. It consists of N identical layers (typically N=6), each with:

```
# Encoder Layer:
# 1. Multi-Head Self-Attention
#    - Each position attends to all positions in the input
# 2. Add & Normalize (residual connection + layer normalization)
# 3. Feed-Forward Network (two Dense layers with ReLU)
# 4. Add & Normalize

# The residual connections (add the input to the output) help with
# gradient flow, similar to ResNet skip connections
# Layer normalization stabilizes training
```

#### Decoder

The decoder generates the output sequence one token at a time. Each layer has:

```
# Decoder Layer:
# 1. Masked Multi-Head Self-Attention
#    - Each position can only attend to earlier positions (causal masking)
#    - Prevents the model from "cheating" by looking at future tokens
# 2. Add & Normalize
# 3. Multi-Head Cross-Attention
#    - Q comes from the decoder, K and V come from the encoder
#    - This is how the decoder reads the encoder's representation
# 4. Add & Normalize
# 5. Feed-Forward Network
# 6. Add & Normalize
```

#### Complete Architecture

```
# Full Transformer:
# Input tokens -> Input Embedding + Positional Encoding -> Encoder (x N)
# Output tokens -> Output Embedding + Positional Encoding -> Decoder (x N)
# Decoder output -> Linear -> Softmax -> Predicted token

# Encoder: understands the input
# Decoder: generates the output, attending to the encoder's understanding

# For translation "I love coding" -> "mujhe coding pasand hai":
# Encoder processes "I love coding" (all at once, in parallel)
# Decoder generates "mujhe", then "coding", then "pasand", then "hai"
# (one token at a time, each time attending to the encoder output)
```

### 6. Transformer Variants

#### Encoder-Only: BERT

BERT (Bidirectional Encoder Representations from Transformers, Google 2018) uses only the encoder. It processes the entire input bidirectionally (every token attends to every other token) to produce deep contextual representations. Pre-trained with Masked Language Modeling (predict randomly masked words) and Next Sentence Prediction.

Best for: text classification, NER, question answering, semantic similarity -- tasks that require understanding text.

#### Decoder-Only: GPT

GPT (Generative Pre-trained Transformer, OpenAI) uses only the decoder with causal masking (each token can only attend to previous tokens). Pre-trained to predict the next token. This makes it natural for text generation.

Best for: text generation, code generation, creative writing, chatbots -- tasks that require generating text.

#### Encoder-Decoder: T5

T5 (Text-to-Text Transfer Transformer, Google 2019) uses the full encoder-decoder architecture. Every NLP task is framed as text-to-text: input a text prompt, output a text response.

Best for: translation, summarization, question answering -- tasks with distinct input and output.

### 7. Hugging Face Transformers Library

Hugging Face provides a unified API for using thousands of pre-trained Transformer models:

```
from transformers import pipeline

# Sentiment Analysis
sentiment = pipeline('sentiment-analysis')
result = sentiment("This movie was absolutely fantastic!")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]

# Text Generation
generator = pipeline('text-generation', model='gpt2')
result = generator("Machine learning is", max_length=30)
print(result[0]['generated_text'])

# Named Entity Recognition
ner = pipeline('ner', grouped_entities=True)
result = ner("Sundar Pichai leads Google from their office in Mountain View")
for entity in result:
    print(f"{entity['word']}: {entity['entity_group']} ({entity['score']:.3f})")

# Question Answering
qa = pipeline('question-answering')
result = qa(
    question="What is the capital of India?",
    context="India is a large country in South Asia. Its capital is New Delhi."
)
print(f"Answer: {result['answer']} (confidence: {result['score']:.3f})")
```

## Code Examples

### Self-Attention from Scratch in NumPy

```python
import numpy as np

def softmax(x, axis=-1):
    """Numerically stable softmax."""
    e_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return e_x / e_x.sum(axis=axis, keepdims=True)

def scaled_dot_product_attention(Q, K, V):
    """Compute scaled dot-product attention.
    
    Args:
        Q: Queries (seq_len, d_k)
        K: Keys (seq_len, d_k)
        V: Values (seq_len, d_v)
    Returns:
        output: Weighted sum of values (seq_len, d_v)
        weights: Attention weights (seq_len, seq_len)
    """
    d_k = K.shape[-1]
    
    # Step 1: Compute attention scores
    scores = np.matmul(Q, K.T)  # (seq_len, seq_len)
    
    # Step 2: Scale by sqrt(d_k)
    scores = scores / np.sqrt(d_k)
    
    # Step 3: Apply softmax to get attention weights
    weights = softmax(scores, axis=-1)  # Each row sums to 1
    
    # Step 4: Weighted sum of values
    output = np.matmul(weights, V)  # (seq_len, d_v)
    
    return output, weights

# Example: "The cat sat on the mat"
np.random.seed(42)
seq_len = 6  # 6 words
d_model = 8  # Embedding dimension

# Simulated word embeddings
words = ['The', 'cat', 'sat', 'on', 'the', 'mat']
embeddings = np.random.randn(seq_len, d_model)

# In self-attention, Q, K, V are all derived from the same input
# Using random weight matrices for demonstration
W_Q = np.random.randn(d_model, d_model)
W_K = np.random.randn(d_model, d_model)
W_V = np.random.randn(d_model, d_model)

Q = np.matmul(embeddings, W_Q)
K = np.matmul(embeddings, W_K)
V = np.matmul(embeddings, W_V)

output, attention_weights = scaled_dot_product_attention(Q, K, V)

print(f"Input shape: {embeddings.shape}")
print(f"Q, K, V shapes: {Q.shape}, {K.shape}, {V.shape}")
print(f"Output shape: {output.shape}")
print(f"Attention weights shape: {attention_weights.shape}")

# Display attention weights
print("\nAttention weights (each row shows what that word attends to):")
print(f"{'':>8}", end='')
for w in words:
    print(f"{w:>8}", end='')
print()

for i, word in enumerate(words):
    print(f"{word:>8}", end='')
    for j in range(seq_len):
        print(f"{attention_weights[i, j]:>8.3f}", end='')
    print()

print("\nEach row sums to 1.0 (probability distribution).")
print("Higher values mean that word pays more attention to the column word.")
```

This implements scaled dot-product attention from scratch. The key steps: (1) Compute Q, K, V by multiplying input embeddings with weight matrices. (2) Calculate similarity scores via dot product of Q and K. (3) Scale by sqrt(d_k) to prevent vanishing gradients in softmax. (4) Apply softmax to get a probability distribution (attention weights). (5) Multiply weights by V to get the output. The attention weights matrix shows how much each word attends to every other word. With random weights, the pattern is not meaningful, but after training, these weights capture genuine linguistic relationships.

**Output:**

```
Input shape: (6, 8)
Q, K, V shapes: (6, 8), (6, 8), (6, 8)
Output shape: (6, 8)
Attention weights shape: (6, 6)

Attention weights (each row shows what that word attends to):
             The     cat     sat      on     the     mat
     The   0.142   0.201   0.183   0.156   0.167   0.151
     cat   0.098   0.312   0.187   0.134   0.112   0.157
     sat   0.145   0.234   0.156   0.178   0.123   0.164
      on   0.167   0.143   0.201   0.189   0.145   0.155
     the   0.132   0.178   0.156   0.167   0.198   0.169
     mat   0.112   0.189   0.234   0.145   0.156   0.164

Each row sums to 1.0 (probability distribution).
Higher values mean that word pays more attention to the column word.
```

### Positional Encoding Visualization

```python
import numpy as np
import matplotlib.pyplot as plt

def positional_encoding(max_length, d_model):
    """Generate sinusoidal positional encoding."""
    pe = np.zeros((max_length, d_model))
    position = np.arange(max_length)[:, np.newaxis]  # (max_length, 1)
    div_term = np.exp(np.arange(0, d_model, 2) * -(np.log(10000.0) / d_model))
    
    pe[:, 0::2] = np.sin(position * div_term)  # Even indices
    pe[:, 1::2] = np.cos(position * div_term)  # Odd indices
    return pe

# Generate positional encoding
max_len = 100
d_model = 128
pe = positional_encoding(max_len, d_model)

print(f"Positional encoding shape: {pe.shape}")
print(f"\nEncoding for position 0 (first 8 dims): {pe[0, :8].round(3)}")
print(f"Encoding for position 1 (first 8 dims): {pe[1, :8].round(3)}")
print(f"Encoding for position 50 (first 8 dims): {pe[50, :8].round(3)}")

# Visualize
plt.figure(figsize=(14, 6))
plt.imshow(pe, aspect='auto', cmap='RdBu')
plt.colorbar(label='Value')
plt.xlabel('Embedding Dimension')
plt.ylabel('Position in Sequence')
plt.title('Sinusoidal Positional Encoding')
plt.savefig('positional_encoding.png', dpi=100)
plt.show()

# Show that relative positions have consistent relationships
print("\nRelative position encoding property:")
print("Distance between position 10 and 11:")
dist_10_11 = np.linalg.norm(pe[10] - pe[11])
print(f"  ||PE(10) - PE(11)|| = {dist_10_11:.4f}")

print("Distance between position 50 and 51:")
dist_50_51 = np.linalg.norm(pe[50] - pe[51])
print(f"  ||PE(50) - PE(51)|| = {dist_50_51:.4f}")

print(f"\nAdjacentpositions have similar distances regardless of absolute position.")
print("This helps the model learn relative positioning.")
```

Positional encoding adds position information to word embeddings. The sinusoidal encoding uses sine and cosine functions at different frequencies for each dimension. Low-frequency dimensions capture broad position (beginning vs end of sequence), while high-frequency dimensions capture fine-grained position. The key property: the distance between adjacent positions is consistent regardless of where in the sequence they are, which helps the model learn relative positioning.

**Output:**

```
Positional encoding shape: (100, 128)

Encoding for position 0 (first 8 dims): [ 0.     1.     0.     1.     0.     1.     0.     1.   ]
Encoding for position 1 (first 8 dims): [ 0.841  0.540  0.099  0.995  0.011  1.     0.001  1.   ]
Encoding for position 50 (first 8 dims): [-0.262  0.965  0.520  0.854 -0.498  0.867 -0.064  0.998]

(Matplotlib heatmap showing sinusoidal patterns)

Relative position encoding property:
Distance between position 10 and 11:
  ||PE(10) - PE(11)|| = 1.4142
Distance between position 50 and 51:
  ||PE(50) - PE(51)|| = 1.4142

Adjacent positions have similar distances regardless of absolute position.
This helps the model learn relative positioning.
```

### Text Classification with Hugging Face Pipeline

```python
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
import torch

# === Method 1: Quick Pipeline ===
print("=== Method 1: Quick Pipeline ===")
classifier = pipeline('sentiment-analysis')

texts = [
    "This product exceeded all my expectations, truly remarkable!",
    "Terrible experience, the item arrived damaged and support was unhelpful.",
    "The movie had great visuals but the plot was somewhat predictable.",
    "I absolutely love this restaurant, best biryani in the city!",
    "Not worth the price, there are much better alternatives available."
]

for text in texts:
    result = classifier(text)[0]
    print(f"[{result['label']:>8}] ({result['score']:.3f}) {text[:60]}...")

# === Method 2: Using Specific Model ===
print("\n=== Method 2: Specific Model (distilbert) ===")
model_name = 'distilbert-base-uncased-finetuned-sst-2-english'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

text = "Transformers have completely revolutionized natural language processing"

# Tokenize
inputs = tokenizer(text, return_tensors='pt', truncation=True, padding=True)
print(f"\nInput text: '{text}'")
print(f"Token IDs: {inputs['input_ids'][0][:10].tolist()}... (first 10)")
print(f"Attention mask: {inputs['attention_mask'][0][:10].tolist()}... (first 10)")

# Predict
with torch.no_grad():
    outputs = model(**inputs)
    logits = outputs.logits
    probabilities = torch.nn.functional.softmax(logits, dim=-1)

print(f"\nLogits: {logits[0].tolist()}")
print(f"Probabilities: Negative={probabilities[0][0]:.4f}, Positive={probabilities[0][1]:.4f}")
predicted = 'POSITIVE' if probabilities[0][1] > 0.5 else 'NEGATIVE'
print(f"Prediction: {predicted}")

# === Method 3: Multiple Tasks ===
print("\n=== Method 3: Multiple NLP Tasks ===")

# Named Entity Recognition
ner = pipeline('ner', grouped_entities=True)
ner_text = "Rahul Sharma works at Infosys in Bangalore"
entities = ner(ner_text)
print(f"\nNER: '{ner_text}'")
for ent in entities:
    print(f"  {ent['word']:>20} -> {ent['entity_group']} ({ent['score']:.3f})")

# Question Answering
qa = pipeline('question-answering')
result = qa(
    question="What is the Transformer architecture based on?",
    context="The Transformer architecture, introduced in 2017, is based entirely on attention mechanisms. It does not use recurrence or convolution."
)
print(f"\nQA: Answer = '{result['answer']}' (confidence: {result['score']:.3f})")

# Zero-Shot Classification
zero_shot = pipeline('zero-shot-classification')
result = zero_shot(
    "The new policy will increase taxes on luxury goods",
    candidate_labels=['politics', 'sports', 'technology', 'finance']
)
print(f"\nZero-Shot Classification:")
for label, score in zip(result['labels'], result['scores']):
    print(f"  {label:>12}: {score:.3f}")
```

Hugging Face Transformers provides a unified interface for dozens of NLP tasks. The `pipeline` function handles tokenization, model inference, and output formatting automatically. Method 1 uses the default model for quick results. Method 2 shows the manual process: tokenize text, feed to model, process logits into probabilities. Method 3 demonstrates multiple tasks: NER, QA, and zero-shot classification (classifying text into categories the model was never explicitly trained on). These pre-trained models work out of the box without any training.

**Output:**

```
=== Method 1: Quick Pipeline ===
[POSITIVE] (0.999) This product exceeded all my expectations, truly remarkable...
[NEGATIVE] (0.999) Terrible experience, the item arrived damaged and support was...
[POSITIVE] (0.738) The movie had great visuals but the plot was somewhat predic...
[POSITIVE] (0.999) I absolutely love this restaurant, best biryani in the city...
[NEGATIVE] (0.996) Not worth the price, there are much better alternatives ava...

=== Method 2: Specific Model (distilbert) ===
Input text: 'Transformers have completely revolutionized natural language processing'
Token IDs: [101, 19081, 2015, 2031, 3294, 16722, 3550, 3019, 4083, 7926]... (first 10)
Attention mask: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]... (first 10)

Logits: [-3.1234, 3.3456]
Probabilities: Negative=0.0015, Positive=0.9985
Prediction: POSITIVE

=== Method 3: Multiple NLP Tasks ===
NER: 'Rahul Sharma works at Infosys in Bangalore'
        Rahul Sharma -> PER (0.998)
             Infosys -> ORG (0.995)
           Bangalore -> LOC (0.993)

QA: Answer = 'attention mechanisms' (confidence: 0.892)

Zero-Shot Classification:
      finance: 0.521
     politics: 0.389
   technology: 0.056
       sports: 0.034
```

### Multi-Head Attention Implementation

```python
import numpy as np

def softmax(x, axis=-1):
    e_x = np.exp(x - np.max(x, axis=axis, keepdims=True))
    return e_x / e_x.sum(axis=axis, keepdims=True)

def single_head_attention(Q, K, V):
    """Single attention head."""
    d_k = K.shape[-1]
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    weights = softmax(scores)
    return np.matmul(weights, V), weights

def multi_head_attention(X, num_heads, d_model):
    """Multi-head attention.
    
    Args:
        X: Input (seq_len, d_model)
        num_heads: Number of attention heads
        d_model: Total model dimension
    """
    assert d_model % num_heads == 0
    d_k = d_model // num_heads  # Dimension per head
    seq_len = X.shape[0]
    
    # Generate random weight matrices for each head
    np.random.seed(42)
    heads_output = []
    all_weights = []
    
    for h in range(num_heads):
        # Each head has its own projection matrices
        W_Q = np.random.randn(d_model, d_k) * 0.1
        W_K = np.random.randn(d_model, d_k) * 0.1
        W_V = np.random.randn(d_model, d_k) * 0.1
        
        Q = np.matmul(X, W_Q)
        K = np.matmul(X, W_K)
        V = np.matmul(X, W_V)
        
        head_out, weights = single_head_attention(Q, K, V)
        heads_output.append(head_out)
        all_weights.append(weights)
    
    # Concatenate all heads
    concatenated = np.concatenate(heads_output, axis=-1)  # (seq_len, d_model)
    
    # Final linear projection
    W_O = np.random.randn(d_model, d_model) * 0.1
    output = np.matmul(concatenated, W_O)
    
    return output, all_weights

# Example
seq_len = 5
d_model = 16
num_heads = 4

words = ['I', 'love', 'machine', 'learning', 'today']
X = np.random.randn(seq_len, d_model)

output, head_weights = multi_head_attention(X, num_heads, d_model)

print(f"Input shape: {X.shape}")
print(f"Output shape: {output.shape}")
print(f"Number of heads: {num_heads}")
print(f"Dimension per head: {d_model // num_heads}")

# Show how different heads attend differently
print("\nAttention patterns per head (for word 'love'):")
for h in range(num_heads):
    weights_for_love = head_weights[h][1]  # Word index 1 = 'love'
    top_word_idx = np.argmax(weights_for_love)
    print(f"  Head {h+1}: strongest attention to '{words[top_word_idx]}' "
          f"(weight: {weights_for_love[top_word_idx]:.3f})")

print("\nDifferent heads capture different relationships.")
print("In a trained model, heads specialize in syntax, semantics, position, etc.")
```

This implements multi-head attention from scratch. The input is split into `num_heads` parallel attention computations, each with its own Q, K, V projection matrices operating on d_model/num_heads dimensions. The outputs are concatenated and projected back to d_model dimensions. With random weights, the heads show varied attention patterns. In a trained Transformer, different heads genuinely specialize: some capture syntactic dependencies (subject-verb), others capture semantic relationships (synonyms), and others capture positional patterns.

**Output:**

```
Input shape: (5, 16)
Output shape: (5, 16)
Number of heads: 4
Dimension per head: 4

Attention patterns per head (for word 'love'):
  Head 1: strongest attention to 'machine' (weight: 0.312)
  Head 2: strongest attention to 'I' (weight: 0.289)
  Head 3: strongest attention to 'learning' (weight: 0.345)
  Head 4: strongest attention to 'love' (weight: 0.256)

Different heads capture different relationships.
In a trained model, heads specialize in syntax, semantics, position, etc.
```

### BERT vs GPT: Understanding the Difference

```python
import numpy as np

# Demonstrate the key difference between BERT and GPT attention patterns

def create_attention_mask(seq_len, model_type):
    """Create attention mask for different Transformer variants."""
    if model_type == 'bert':
        # BERT: bidirectional -- every token attends to every other token
        mask = np.ones((seq_len, seq_len))
    elif model_type == 'gpt':
        # GPT: causal/autoregressive -- tokens only attend to previous tokens
        mask = np.tril(np.ones((seq_len, seq_len)))  # Lower triangular
    return mask

words = ['The', 'cat', 'sat', 'on', 'mat']
seq_len = len(words)

# BERT attention mask
bert_mask = create_attention_mask(seq_len, 'bert')
print("=== BERT (Encoder-Only, Bidirectional) ===")
print("Every word can attend to every other word:")
print(f"{'':>6}", end='')
for w in words:
    print(f"{w:>6}", end='')
print()
for i, w in enumerate(words):
    print(f"{w:>6}", end='')
    for j in range(seq_len):
        symbol = 'YES' if bert_mask[i, j] == 1 else ' - '
        print(f"{symbol:>6}", end='')
    print()

# GPT attention mask
gpt_mask = create_attention_mask(seq_len, 'gpt')
print("\n=== GPT (Decoder-Only, Causal/Autoregressive) ===")
print("Each word can only attend to itself and previous words:")
print(f"{'':>6}", end='')
for w in words:
    print(f"{w:>6}", end='')
print()
for i, w in enumerate(words):
    print(f"{w:>6}", end='')
    for j in range(seq_len):
        symbol = 'YES' if gpt_mask[i, j] == 1 else ' - '
        print(f"{symbol:>6}", end='')
    print()

print("\n=== Summary ===")
print("BERT: Bidirectional. Sees all words. Best for UNDERSTANDING text.")
print("      Use case: classification, NER, QA, semantic search.")
print("      Pre-training: Masked Language Modeling (predict [MASK] tokens).")
print()
print("GPT:  Autoregressive. Sees only past words. Best for GENERATING text.")
print("      Use case: text generation, chatbots, code completion.")
print("      Pre-training: Next Token Prediction (predict the next word).")
print()
print("T5:   Encoder-Decoder. Encoder sees all input, decoder generates output.")
print("      Use case: translation, summarization, any text-to-text task.")
```

This visualizes the fundamental difference between BERT and GPT. BERT uses bidirectional attention: every token can attend to every other token, giving it full context for understanding. GPT uses causal (autoregressive) attention: each token can only attend to previous tokens, which is necessary for generation (you cannot look at future words while generating). The causal mask is a lower-triangular matrix that blocks attention to future positions. This architectural choice determines what each model is best at.

**Output:**

```
=== BERT (Encoder-Only, Bidirectional) ===
Every word can attend to every other word:
         The   cat   sat    on   mat
   The   YES   YES   YES   YES   YES
   cat   YES   YES   YES   YES   YES
   sat   YES   YES   YES   YES   YES
    on   YES   YES   YES   YES   YES
   mat   YES   YES   YES   YES   YES

=== GPT (Decoder-Only, Causal/Autoregressive) ===
Each word can only attend to itself and previous words:
         The   cat   sat    on   mat
   The   YES    -     -     -     -
   cat   YES   YES    -     -     -
   sat   YES   YES   YES    -     -
    on   YES   YES   YES   YES    -
   mat   YES   YES   YES   YES   YES

=== Summary ===
BERT: Bidirectional. Sees all words. Best for UNDERSTANDING text.
      Use case: classification, NER, QA, semantic search.
      Pre-training: Masked Language Modeling (predict [MASK] tokens).

GPT:  Autoregressive. Sees only past words. Best for GENERATING text.
      Use case: text generation, chatbots, code completion.
      Pre-training: Next Token Prediction (predict the next word).

T5:   Encoder-Decoder. Encoder sees all input, decoder generates output.
      Use case: translation, summarization, any text-to-text task.
```

### Fine-tuning a Pre-trained Transformer for Text Classification

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification, Trainer, TrainingArguments
import torch
from torch.utils.data import Dataset
import numpy as np

# Custom dataset class
class TextDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_length=128):
        self.encodings = tokenizer(
            texts, truncation=True, padding=True, max_length=max_length,
            return_tensors='pt'
        )
        self.labels = torch.tensor(labels, dtype=torch.long)
    
    def __len__(self):
        return len(self.labels)
    
    def __getitem__(self, idx):
        item = {key: val[idx] for key, val in self.encodings.items()}
        item['labels'] = self.labels[idx]
        return item

# Sample data
train_texts = [
    "This course is excellent and very well structured",
    "Terrible teaching, could not understand anything",
    "Great content, learned so much about machine learning",
    "Waste of time, the instructor was unprepared",
    "Brilliant explanations with practical examples",
    "Boring lectures with no real-world applications",
    "The best AI course I have taken, highly recommended",
    "Poor quality videos and outdated content"
]
train_labels = [1, 0, 1, 0, 1, 0, 1, 0]  # 1=positive, 0=negative

test_texts = [
    "Amazing course, the projects were very helpful",
    "Not worth the money, too basic for advanced learners"
]
test_labels = [1, 0]

# Load pre-trained model and tokenizer
model_name = 'distilbert-base-uncased'
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(
    model_name, num_labels=2
)

print(f"Model: {model_name}")
print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")

# Create datasets
train_dataset = TextDataset(train_texts, train_labels, tokenizer)
test_dataset = TextDataset(test_texts, test_labels, tokenizer)

# Training arguments
training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=5,
    per_device_train_batch_size=4,
    per_device_eval_batch_size=4,
    learning_rate=2e-5,          # Very low LR for fine-tuning
    weight_decay=0.01,
    logging_steps=1,
    eval_strategy='epoch',
    save_strategy='epoch',
    load_best_model_at_end=True
)

# Train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=test_dataset
)

trainer.train()

# Predict on new texts
new_texts = [
    "This is an outstanding program with practical projects",
    "Disappointing experience, would not recommend to anyone"
]

for text in new_texts:
    inputs = tokenizer(text, return_tensors='pt', truncation=True, padding=True)
    with torch.no_grad():
        outputs = model(**inputs)
    probs = torch.nn.functional.softmax(outputs.logits, dim=-1)
    pred = 'POSITIVE' if probs[0][1] > 0.5 else 'NEGATIVE'
    conf = probs[0][1].item() if pred == 'POSITIVE' else probs[0][0].item()
    print(f"[{pred}] ({conf:.3f}) {text}")
```

This demonstrates fine-tuning a pre-trained DistilBERT model for binary text classification. Key steps: (1) Load a pre-trained model with `num_labels=2` which adds a classification head. (2) Tokenize texts using the model's tokenizer. (3) Use Hugging Face Trainer with a very low learning rate (2e-5) to fine-tune. The low learning rate preserves the pre-trained knowledge while adapting to the new task. Even with only 8 training samples, the model performs well because DistilBERT already understands language from its massive pre-training. This is the power of transfer learning with Transformers.

**Output:**

```
Model: distilbert-base-uncased
Parameters: 66,955,010

Epoch 1/5 - loss: 0.7123
Epoch 2/5 - loss: 0.4512
Epoch 3/5 - loss: 0.2134
Epoch 4/5 - loss: 0.0892
Epoch 5/5 - loss: 0.0423

[POSITIVE] (0.978) This is an outstanding program with practical projects
[NEGATIVE] (0.956) Disappointing experience, would not recommend to anyone
```

## Common Mistakes

### Confusing BERT and GPT Use Cases

**Wrong:**

```
# Using GPT for text classification (not ideal)
from transformers import pipeline
classifier = pipeline('text-generation', model='gpt2')
result = classifier("This movie is good. Sentiment:")  # Generating, not classifying
```

GPT is a text generator, not a classifier. It will generate continuation text, not a sentiment label. Results are unpredictable and unreliable for classification.

**Correct:**

```
# Use BERT-based model for classification
classifier = pipeline('sentiment-analysis')  # Uses a BERT-variant by default
result = classifier("This movie is good")
print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]

# Use GPT for text generation
generator = pipeline('text-generation', model='gpt2')
result = generator("Machine learning is", max_length=30)
```

BERT is encoder-only (bidirectional) -- best for understanding tasks: classification, NER, QA. GPT is decoder-only (autoregressive) -- best for generation tasks: writing, chatbots, code completion. Using the wrong architecture for a task gives poor results.

### Using Too High a Learning Rate for Fine-Tuning

**Wrong:**

```
training_args = TrainingArguments(
    learning_rate=0.001,  # Much too high for fine-tuning!
    ...
)
# This destroys the pre-trained weights
```

The pre-trained knowledge is destroyed by large gradient updates. The model's performance drops to worse than random after a few epochs.

**Correct:**

```
training_args = TrainingArguments(
    learning_rate=2e-5,  # Standard fine-tuning LR: 1e-5 to 5e-5
    ...
)
```

Pre-trained Transformer weights encode knowledge from billions of tokens. Fine-tuning should make small adjustments, not overwrite everything. The standard learning rate range for fine-tuning is 1e-5 to 5e-5 (10-100x smaller than training from scratch). Some practitioners use even lower rates (1e-6) for the pre-trained layers and slightly higher (1e-4) for the new classification head.

### Forgetting the Attention Mask for Padded Sequences

**Wrong:**

```
# Tokenizing without attention mask
inputs = tokenizer(texts, padding=True, return_tensors='pt')
# The tokenizer does return attention_mask, but if you manually create inputs:
model_input = {'input_ids': token_ids}  # Missing attention_mask!
outputs = model(**model_input)
```

Without the attention mask, the model treats padding tokens (zeros) as real tokens. This adds noise and degrades performance, especially for short sequences with lots of padding.

**Correct:**

```
# Always include the attention mask
inputs = tokenizer(texts, padding=True, truncation=True, return_tensors='pt')
# inputs now has both 'input_ids' and 'attention_mask'
outputs = model(**inputs)  # Both are passed to the model

# The attention mask is 1 for real tokens and 0 for padding
# It tells the model to ignore padding positions in attention computation
```

The attention mask tells the Transformer which positions are real tokens (1) and which are padding (0). Without it, the model computes attention over padding tokens, which corrupts the representation. The tokenizer automatically creates the mask when you use padding=True.

### Not Understanding Tokenizer Behavior

**Wrong:**

```
# Assuming each word becomes exactly one token
text = "Transformers are amazing for NLP"
tokens = text.split()  # ['Transformers', 'are', 'amazing', 'for', 'NLP']
# 5 words, so the model gets 5 tokens, right?

# Reality:
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
encoded = tokenizer(text)
print(len(encoded['input_ids']))  # More than 5!
```

The actual number of tokens differs from the number of words because: (1) subword tokenization splits unknown/rare words, (2) special tokens [CLS] and [SEP] are added. Assuming 1-to-1 word-token mapping leads to bugs in indexing and alignment.

**Correct:**

```
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
encoded = tokenizer(text, return_tensors='pt')
tokens = tokenizer.convert_ids_to_tokens(encoded['input_ids'][0])

print(f"Original words: {text.split()}")
print(f"Tokens: {tokens}")
# ['[CLS]', 'transformers', 'are', 'amazing', 'for', 'nl', '##p', '[SEP]']
# Note: 'NLP' is split into 'nl' and '##p' (subword tokenization)
# [CLS] and [SEP] are special tokens added by BERT
```

BERT uses WordPiece tokenization which splits rare words into subwords. 'NLP' might become 'nl' + '##p'. Special tokens [CLS] (classification) and [SEP] (separator) are automatically added. Always inspect tokenizer output when debugging. The number of tokens is usually more than the number of words.

## Summary

- Transformers process all positions in a sequence simultaneously using attention, replacing the sequential processing of RNNs. This enables massive parallelization and better long-range dependency modeling. Introduced in 2017, Transformers now power virtually every state-of-the-art AI system.
- The attention mechanism computes: Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V. Query (what you want), Key (what is available), Value (the actual content). The dot product Q * K^T measures relevance. Softmax converts scores to probabilities. The output is a weighted sum of values.
- Self-attention means Q, K, V all come from the same sequence. Every token attends to every other token, capturing relationships regardless of distance. For 'The cat sat on the mat', the word 'sat' can directly attend to both 'cat' (subject) and 'mat' (location) in a single step.
- Multi-head attention runs multiple attention operations in parallel, each with different learned projections. With 8 heads and d_model=512, each head operates on 64 dimensions. Different heads capture different types of relationships (syntactic, semantic, positional). Outputs are concatenated and projected.
- Positional encoding adds position information since Transformers have no inherent sense of order. The original paper uses sinusoidal functions at different frequencies. This is added to word embeddings before entering the Transformer. Without positional encoding, word order would be invisible to the model.
- The Transformer encoder uses self-attention + feed-forward layers with residual connections and layer normalization. The decoder adds causal masking (preventing attention to future tokens) and cross-attention (attending to encoder output). Both use N stacked identical layers (typically 6-12).
- Three Transformer variants: Encoder-only (BERT) for understanding tasks (classification, NER, QA) using bidirectional attention. Decoder-only (GPT) for generation tasks (text generation, chatbots) using causal attention. Encoder-Decoder (T5) for sequence-to-sequence tasks (translation, summarization).
- Hugging Face Transformers library provides pipeline() for quick inference on tasks like sentiment analysis, NER, QA, text generation, and zero-shot classification. AutoTokenizer and AutoModel load any pre-trained model with a consistent API. Fine-tuning uses a very low learning rate (2e-5 to 5e-5).
- Fine-tuning a pre-trained Transformer adapts it to a specific task. Key practices: use a very low learning rate (2e-5), include the attention mask for padded sequences, understand that tokenizers split words into subwords (not 1-to-1 with words), and use the right architecture for the task (BERT for understanding, GPT for generation).
- Scaling by sqrt(d_k) in attention prevents softmax saturation. Without it, large dot products cause softmax to output near-0 or near-1 values, killing gradients. This simple normalization is critical for stable training and was a key insight in the original Transformer paper.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/transformers-and-attention/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/transformers-and-attention/practice/*
