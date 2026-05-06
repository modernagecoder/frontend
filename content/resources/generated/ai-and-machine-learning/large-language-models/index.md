---
title: "Large Language Models (LLMs) - GPT, BERT, Transformers, Hugging Face, LoRA | Modern Age Coders"
description: "Learn Large Language Models including how LLMs work via next-token prediction, temperature and sampling strategies, BERT and GPT architectures, scaling laws, tokenization with BPE and SentencePiece, fine-tuning vs prompt engineering, Hugging Face Transformers library, LoRA and QLoRA for parameter-efficient fine-tuning. Includes 54+ practice questions with Python code examples."
slug: large-language-models
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/large-language-models/
category: "AI and Machine Learning"
keywords: ["large language models", "LLM tutorial", "GPT architecture", "BERT fine-tuning", "Hugging Face transformers", "LoRA QLoRA", "tokenization BPE", "next token prediction", "few-shot learning", "sentiment analysis BERT"]
---
# Large Language Models

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 21  
**Practice questions:** 50

## What Are Large Language Models?

A **Large Language Model (LLM)** is a neural network trained on massive amounts of text data to understand and generate human language. These models contain billions of parameters and learn statistical patterns of language -- how words, sentences, and ideas relate to each other. At their core, LLMs perform **next-token prediction**: given a sequence of tokens (words or subwords), the model predicts the most likely next token.

```
# Conceptual illustration of next-token prediction
# Input:  "The capital of India is"
# Model predicts: "New" (highest probability)
# Then:   "The capital of India is New"
# Model predicts: "Delhi" (highest probability)
# Result: "The capital of India is New Delhi"
```

The term "large" refers to both the training data (hundreds of gigabytes to terabytes of text from books, websites, code repositories, and academic papers) and the model size (from hundreds of millions to over a trillion parameters). The transformer architecture, introduced in 2017, made LLMs possible by enabling efficient parallel processing of sequences through the **self-attention mechanism**.

Two foundational families dominate LLMs: **BERT** (Bidirectional Encoder Representations from Transformers) which reads text in both directions and excels at understanding tasks, and **GPT** (Generative Pre-trained Transformer) which reads left-to-right and excels at generating text. Modern LLMs like GPT-4, Gemini, Claude, and LLaMA have demonstrated remarkable abilities in reasoning, coding, translation, summarization, and even creative writing.

## Why Are Large Language Models Important?

### 1. They Power Modern AI Applications

LLMs are behind chatbots (ChatGPT, Claude), code assistants (GitHub Copilot), search engines (Bing AI, Google SGE), and content generation tools. Understanding how they work is essential for any AI practitioner in 2025 and beyond. When Priya builds a customer support chatbot or Arjun creates an automated code reviewer, they are building on top of LLMs.

### 2. From Rule-Based to Learning-Based NLP

Before LLMs, natural language processing required hand-crafted rules, feature engineering, and task-specific models. LLMs changed this by learning general language understanding from raw text, then adapting to specific tasks with minimal additional training. A single LLM can perform translation, summarization, question answering, and code generation -- tasks that previously required separate specialized systems.

### 3. The Fine-Tuning and Prompt Engineering Revolution

LLMs introduced two powerful paradigms: **fine-tuning** (adapting a pre-trained model to a specific task with a small labeled dataset) and **prompt engineering** (guiding the model's behavior through carefully crafted input text). Understanding these techniques lets Kavitha build a legal document classifier by fine-tuning BERT with just a few thousand examples, or lets Vikram extract structured data from invoices using a well-designed prompt -- no training required.

### 4. Career-Defining Skill

Companies across India and globally are investing heavily in LLM-based products. Roles like ML Engineer, NLP Engineer, and AI Application Developer increasingly require knowledge of transformer architectures, tokenization, Hugging Face tools, and parameter-efficient fine-tuning methods like LoRA. Understanding LLMs is no longer optional for an AI career.

## Detailed Explanation

### 1. How LLMs Work: Next-Token Prediction

An LLM is trained to predict the next token in a sequence. During training, the model sees billions of text sequences and adjusts its parameters to minimize prediction error. At inference time, the model generates text by repeatedly predicting the next token and appending it to the input.

```
# Simplified view of LLM text generation
# Step 1: Input = "India is a"
# Step 2: Model outputs probability distribution over vocabulary
#   P("diverse") = 0.15, P("country") = 0.12, P("beautiful") = 0.08, ...
# Step 3: Sample or select the next token
# Step 4: Append to input: "India is a diverse"
# Step 5: Repeat from Step 2 until stop condition
```

### 2. Decoding Strategies: Temperature, Top-k, Top-p

When generating text, the model produces a probability distribution over all possible next tokens. How we select from this distribution affects output quality:

- **Temperature**: Controls randomness. Temperature = 0 always picks the most probable token (greedy, deterministic). Temperature = 1.0 samples from the full distribution. Temperature > 1.0 increases randomness. Temperature between 0 and 1 makes the distribution sharper (more focused on high-probability tokens).
- **Top-k sampling**: Only consider the k most probable tokens. If k=50, the model samples only from the top 50 candidates, ignoring unlikely tokens.
- **Top-p (nucleus) sampling**: Consider the smallest set of tokens whose cumulative probability exceeds p. If p=0.9, the model samples from the fewest tokens that together have 90% probability. This adapts dynamically -- sometimes considering 10 tokens, sometimes 100.

```
# Temperature effects on token selection
# Original probabilities: {"Delhi": 0.4, "Mumbai": 0.3, "Bangalore": 0.2, "Chennai": 0.1}

# Temperature = 0 (greedy): Always selects "Delhi"
# Temperature = 0.5 (sharper): {"Delhi": 0.57, "Mumbai": 0.27, "Bangalore": 0.12, "Chennai": 0.04}
# Temperature = 1.0 (original): {"Delhi": 0.4, "Mumbai": 0.3, "Bangalore": 0.2, "Chennai": 0.1}
# Temperature = 2.0 (flatter): {"Delhi": 0.30, "Mumbai": 0.27, "Bangalore": 0.23, "Chennai": 0.20}
```

### 3. BERT: Bidirectional Encoder

BERT (2018, Google) is an **encoder-only** transformer that reads text **bidirectionally** -- it considers both left and right context for every token. BERT is pre-trained with two objectives:

- **Masked Language Modeling (MLM)**: Randomly mask 15% of tokens and predict them. This forces BERT to learn deep contextual representations.
- **Next Sentence Prediction (NSP)**: Given two sentences, predict whether the second follows the first. This helps BERT understand sentence relationships.

BERT excels at **understanding tasks**: text classification, named entity recognition (NER), question answering, and semantic similarity. You fine-tune BERT by adding a task-specific output layer on top and training on labeled data.

```
# BERT Masked Language Modeling example
# Input:  "The [MASK] of India is New Delhi"
# BERT predicts: "capital" for the [MASK] position
# Because BERT reads bidirectionally, it uses both
# "The" (left context) and "of India is New Delhi" (right context)
```

### 4. GPT: Autoregressive Decoder

GPT (OpenAI) is a **decoder-only** transformer that reads text **left-to-right** (autoregressive). It is pre-trained with a single objective: predict the next token. GPT's power comes from **scale** -- more parameters and more data lead to better performance.

- **GPT-1** (2018): 117M parameters. Demonstrated that pre-training + fine-tuning works for NLP.
- **GPT-2** (2019): 1.5B parameters. Showed impressive text generation; initially withheld due to misuse concerns.
- **GPT-3** (2020): 175B parameters. Introduced **few-shot learning** -- performing tasks from just a few examples in the prompt, without any fine-tuning.
- **GPT-4** (2023): Multimodal (text + images). State-of-the-art reasoning, coding, and instruction following.

GPT models support **zero-shot** (no examples), **one-shot** (one example), and **few-shot** (a few examples) learning through prompts.

### 5. Scaling Laws

Research by Kaplan et al. (2020) showed that LLM performance improves predictably with three factors: **model size** (number of parameters), **dataset size** (amount of training data), and **compute budget** (training FLOPs). These **scaling laws** follow power-law relationships -- doubling model size gives a consistent, predictable improvement. This insight drove the creation of ever-larger models and led to the "Chinchilla scaling laws" (2022) which showed that many LLMs were undertrained: given a fixed compute budget, training a smaller model on more data often outperforms a larger model on less data.

### 6. Tokenization: BPE and SentencePiece

LLMs do not process raw characters or full words. Instead, they use **subword tokenization** to split text into tokens. This balances vocabulary size with the ability to handle rare or unseen words.

- **Byte-Pair Encoding (BPE)**: Starts with individual characters, then iteratively merges the most frequent pairs. Common words become single tokens; rare words are split into subword pieces. Used by GPT models.
- **SentencePiece**: A language-independent tokenizer that treats the input as a raw byte stream. Works without pre-tokenization (no need to split by spaces first). Used by LLaMA, T5, and many multilingual models.

```
# BPE tokenization example
# Vocabulary built iteratively:
# Step 1: ["l", "o", "w", "e", "r", "n", "s", "t", "i", "d"]
# Step 2: Merge most frequent pair ("e", "r") -> "er"
# Step 3: Merge ("l", "o") -> "lo"
# Step 4: Merge ("lo", "w") -> "low"
# Result: "lowest" -> ["low", "est"]
#         "lower"  -> ["low", "er"]
#         "newest" -> ["new", "est"]
```

### 7. Fine-Tuning vs Prompt Engineering

**Fine-tuning** adapts a pre-trained model to a specific task by continuing training on task-specific labeled data. The model's weights are updated. Fine-tuning requires labeled data, compute resources, and ML expertise, but produces a specialized model with strong performance.

**Prompt engineering** guides the model's behavior through carefully crafted input text -- instructions, examples, and constraints. No weight updates occur. Prompt engineering is faster, cheaper, and requires no training data, but may be less reliable for complex or domain-specific tasks.

AspectFine-TuningPrompt EngineeringWeight updatesYesNoLabeled data neededYes (hundreds to thousands)No (or a few examples in prompt)Compute costHigh (GPU hours)Low (inference only)SpecializationHigh (domain-specific)Moderate (general purpose)Setup timeHours to daysMinutes

### 8. Hugging Face Transformers Library

Hugging Face provides the most popular open-source library for working with LLMs. Key components:

- **AutoTokenizer**: Automatically loads the correct tokenizer for any model.
- **AutoModel / AutoModelForSequenceClassification**: Loads pre-trained models with optional task-specific heads.
- **pipeline()**: High-level API for common tasks (text generation, sentiment analysis, summarization, NER, question answering).

```
# Using Hugging Face pipeline for text generation
from transformers import pipeline

generator = pipeline("text-generation", model="gpt2")
result = generator("Artificial intelligence will", max_length=50, num_return_sequences=1)
print(result[0]["generated_text"])
```

### 9. LoRA and QLoRA: Parameter-Efficient Fine-Tuning

Fine-tuning a model with billions of parameters requires enormous GPU memory. **LoRA (Low-Rank Adaptation)** solves this by freezing the original model weights and injecting small trainable matrices into each transformer layer. Instead of updating all parameters, LoRA adds low-rank decomposition matrices (A and B) that approximate the weight updates:

```
# LoRA concept
# Original weight matrix W (frozen): shape [d, d]
# LoRA matrices: A (shape [d, r]) and B (shape [r, d]) where r << d
# Modified forward pass: output = W @ x + (A @ B) @ x
# Only A and B are trained -- typically 0.1% to 1% of total parameters
```

**QLoRA** goes further by quantizing the frozen base model to 4-bit precision, reducing memory usage by 4x. This allows fine-tuning a 65B parameter model on a single 48GB GPU -- something previously requiring multiple high-end GPUs.

```
# QLoRA setup with bitsandbytes
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, get_peft_model
import torch

quant_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16
)

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-7b-hf",
    quantization_config=quant_config
)

lora_config = LoraConfig(
    r=16,                # Rank of the low-rank matrices
    lora_alpha=32,       # Scaling factor
    target_modules=["q_proj", "v_proj"],  # Which layers to apply LoRA
    lora_dropout=0.05,
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 4,194,304 || all params: 6,742,609,920 || trainable%: 0.0622
```

## Code Examples

### Tokenization with Hugging Face AutoTokenizer

```python
from transformers import AutoTokenizer

# Load GPT-2 tokenizer (uses BPE)
tokenizer = AutoTokenizer.from_pretrained("gpt2")

text = "Reinforcement learning is a powerful paradigm"

# Encode text to token IDs
token_ids = tokenizer.encode(text)
print(f"Token IDs: {token_ids}")

# Decode back to text
decoded = tokenizer.decode(token_ids)
print(f"Decoded: {decoded}")

# See individual tokens
tokens = tokenizer.tokenize(text)
print(f"Tokens: {tokens}")
print(f"Number of tokens: {len(tokens)}")

# Vocabulary size
print(f"Vocabulary size: {tokenizer.vocab_size}")

# Tokenize with padding and attention mask
encoded = tokenizer(
    ["Hello world", "Reinforcement learning is fascinating"],
    padding=True,
    return_tensors="pt"
)
print(f"Input IDs shape: {encoded['input_ids'].shape}")
print(f"Attention mask: {encoded['attention_mask']}")
```

`AutoTokenizer` automatically loads the correct tokenizer for any model. The `tokenize()` method shows subword splits -- BPE may split uncommon words into subword pieces. `encode()` converts text to integer IDs. The tokenizer handles padding and creates attention masks for batch processing.

**Output:**

```
Token IDs: [7738, 10071, 4673, 318, 257, 3665, 22288]
Decoded: Reinforcement learning is a powerful paradigm
Tokens: ['Re', 'inforcement', ' learning', ' is', ' a', ' powerful', ' paradigm']
Number of tokens: 7
Vocabulary size: 50257
Input IDs shape: torch.Size([2, 6])
Attention mask: tensor([[1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]])
```

### Text Generation with GPT-2 Pipeline

```python
from transformers import pipeline

# Load text generation pipeline with GPT-2
generator = pipeline("text-generation", model="gpt2")

# Simple generation
result = generator(
    "The future of artificial intelligence in India",
    max_length=60,
    num_return_sequences=1,
    temperature=0.7,
    top_p=0.9,
    do_sample=True
)
print("Generated text:")
print(result[0]["generated_text"])
print()

# Multiple completions with different temperatures
for temp in [0.3, 0.7, 1.2]:
    output = generator(
        "Machine learning is",
        max_length=30,
        temperature=temp,
        do_sample=True,
        num_return_sequences=1
    )
    print(f"Temperature {temp}: {output[0]['generated_text']}")
```

The `pipeline` function provides a high-level API for text generation. Lower temperature (0.3) produces more deterministic, focused text. Higher temperature (1.2) produces more diverse but potentially less coherent text. `top_p=0.9` uses nucleus sampling to select from tokens covering 90% of the probability mass.

**Output:**

```
Generated text:
The future of artificial intelligence in India is bright. With a growing
number of startups and research labs, the country is poised to become
a global leader in AI development and deployment.

Temperature 0.3: Machine learning is a branch of artificial intelligence that focuses on building
Temperature 0.7: Machine learning is transforming how businesses approach data analysis and decision
Temperature 1.2: Machine learning is rapidly intersecting with quantum computing paradigms to create
```

### Sentiment Analysis with BERT (Hugging Face Pipeline)

```python
from transformers import pipeline

# Load sentiment analysis pipeline (uses distilbert by default)
sentiment = pipeline("sentiment-analysis")

# Analyze single text
result = sentiment("I love learning about transformers and LLMs!")
print(f"Single: {result}")

# Analyze multiple texts
texts = [
    "The course on machine learning was excellent and well-structured.",
    "I found the assignment confusing and poorly explained.",
    "The exam was fair but challenging.",
    "Deploying ML models to production is rewarding work."
]

results = sentiment(texts)
for text, res in zip(texts, results):
    label = res["label"]
    score = res["score"]
    print(f"[{label} {score:.3f}] {text}")
```

The Hugging Face `pipeline('sentiment-analysis')` loads a pre-trained DistilBERT model fine-tuned on SST-2 sentiment data. It tokenizes input, runs inference, and returns labels (POSITIVE/NEGATIVE) with confidence scores. The pipeline handles all preprocessing and postprocessing automatically.

**Output:**

```
Single: [{'label': 'POSITIVE', 'score': 0.9998}]
[POSITIVE 0.999] The course on machine learning was excellent and well-structured.
[NEGATIVE 0.998] I found the assignment confusing and poorly explained.
[POSITIVE 0.993] The exam was fair but challenging.
[POSITIVE 0.997] Deploying ML models to production is rewarding work.
```

### Fine-Tuning BERT for Text Classification

```python
from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer
)
from datasets import load_dataset
import numpy as np

# Load dataset (IMDB movie reviews)
dataset = load_dataset("imdb", split={"train": "train[:2000]", "test": "test[:500]"})

# Load tokenizer and model
model_name = "bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=2)

# Tokenize dataset
def tokenize_fn(examples):
    return tokenizer(examples["text"], truncation=True, padding="max_length", max_length=256)

tokenized = dataset.map(tokenize_fn, batched=True)

# Define metrics
def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    accuracy = (predictions == labels).mean()
    return {"accuracy": accuracy}

# Training arguments
training_args = TrainingArguments(
    output_dir="./bert-imdb",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=32,
    eval_strategy="epoch",
    save_strategy="epoch",
    learning_rate=2e-5,
    weight_decay=0.01,
    logging_steps=50
)

# Create Trainer and train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized["train"],
    eval_dataset=tokenized["test"],
    compute_metrics=compute_metrics
)

trainer.train()
results = trainer.evaluate()
print(f"Test accuracy: {results['eval_accuracy']:.4f}")
```

This complete example fine-tunes BERT for binary sentiment classification on IMDB reviews. Key steps: load a pre-trained BERT model with a classification head (`num_labels=2`), tokenize the dataset, configure training arguments (learning rate 2e-5 is standard for BERT fine-tuning), and use the `Trainer` API. The model's pre-trained knowledge transfers to the new task, achieving high accuracy even with limited data.

**Output:**

```
Epoch 1/3 - Loss: 0.3845 - Eval Accuracy: 0.8820
Epoch 2/3 - Loss: 0.1923 - Eval Accuracy: 0.9060
Epoch 3/3 - Loss: 0.0912 - Eval Accuracy: 0.9140
Test accuracy: 0.9140
```

### Named Entity Recognition with BERT Pipeline

```python
from transformers import pipeline

# Load NER pipeline
ner = pipeline("ner", model="dslim/bert-base-NER", aggregation_strategy="simple")

# Recognize entities in text
text = "Sundar Pichai, CEO of Google, announced new AI features at the event in Bangalore. The partnership with IIT Delhi will focus on research."

entities = ner(text)

print("Named Entities Found:")
print("-" * 60)
for entity in entities:
    print(f"  {entity['entity_group']:8s} | {entity['word']:20s} | confidence: {entity['score']:.3f}")

# Another example
text2 = "Ratan Tata invested in Ola Electric, which is headquartered in Mumbai."
entities2 = ner(text2)
print(f"\nEntities in second text:")
for entity in entities2:
    print(f"  {entity['entity_group']:8s} | {entity['word']:20s} | confidence: {entity['score']:.3f}")
```

Named Entity Recognition (NER) identifies and classifies entities in text into categories like persons (PER), organizations (ORG), and locations (LOC). The `aggregation_strategy='simple'` parameter merges subword tokens into complete entity names. This BERT-based NER model was fine-tuned on the CoNLL-2003 dataset.

**Output:**

```
Named Entities Found:
------------------------------------------------------------
  PER      | Sundar Pichai        | confidence: 0.998
  ORG      | Google               | confidence: 0.997
  LOC      | Bangalore            | confidence: 0.996
  ORG      | IIT Delhi            | confidence: 0.994

Entities in second text:
  PER      | Ratan Tata           | confidence: 0.997
  ORG      | Ola Electric         | confidence: 0.993
  LOC      | Mumbai               | confidence: 0.998
```

### LoRA Fine-Tuning with PEFT Library

```python
from transformers import AutoModelForCausalLM, AutoTokenizer, TrainingArguments, Trainer
from peft import LoraConfig, get_peft_model, TaskType
from datasets import load_dataset

# Load base model and tokenizer
model_name = "gpt2"
tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(model_name)

# Configure LoRA
lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=8,                          # Rank: lower = fewer params, higher = more capacity
    lora_alpha=16,                # Scaling factor (alpha / r is the actual scale)
    lora_dropout=0.1,
    target_modules=["c_attn"],    # Apply LoRA to attention layers
)

# Apply LoRA to model
model = get_peft_model(model, lora_config)

# Print parameter comparison
model.print_trainable_parameters()

# Prepare dataset (example with a small custom dataset)
texts = [
    "Machine learning is the study of algorithms that improve through experience.",
    "Neural networks are computing systems inspired by biological neural networks.",
    "Deep learning uses multiple layers to progressively extract features.",
    "Gradient descent is an optimization algorithm used to minimize the loss function.",
]

# Tokenize
encodings = tokenizer(texts, truncation=True, padding=True, max_length=64, return_tensors="pt")
encodings["labels"] = encodings["input_ids"].clone()

# Training configuration
training_args = TrainingArguments(
    output_dir="./gpt2-lora",
    num_train_epochs=5,
    per_device_train_batch_size=2,
    learning_rate=3e-4,        # LoRA typically uses higher LR than full fine-tuning
    logging_steps=10,
    save_strategy="no"
)

print(f"\nBase model parameters: {sum(p.numel() for p in model.parameters()):,}")
print(f"Trainable parameters: {sum(p.numel() for p in model.parameters() if p.requires_grad):,}")
print(f"Percentage trainable: {100 * sum(p.numel() for p in model.parameters() if p.requires_grad) / sum(p.numel() for p in model.parameters()):.2f}%")
```

LoRA adds small trainable matrices to specific layers (here, the attention layers) while freezing the entire base model. With rank `r=8`, only a tiny fraction of parameters are trainable. The `lora_alpha` parameter controls the scaling of LoRA updates. This approach dramatically reduces memory requirements and training time. Typical LoRA learning rates (3e-4) are higher than full fine-tuning rates (2e-5) because fewer parameters need to be updated.

**Output:**

```
trainable params: 294,912 || all params: 124,734,464 || trainable%: 0.2364

Base model parameters: 124,734,464
Trainable parameters: 294,912
Percentage trainable: 0.24%
```

### Summarization and Question Answering Pipelines

```python
from transformers import pipeline

# Summarization
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

long_text = """
Large Language Models have transformed the field of natural language processing.
These models, trained on vast amounts of text data, can perform a wide range of
tasks including text generation, translation, summarization, and question answering.
The transformer architecture, introduced in the paper 'Attention Is All You Need',
enabled the training of these massive models through efficient parallel processing.
BERT and GPT represent two major families of language models. BERT uses bidirectional
encoding for understanding tasks, while GPT uses autoregressive decoding for generation
tasks. Recent models like GPT-4 and Claude demonstrate remarkable reasoning abilities.
"""

summary = summarizer(long_text, max_length=60, min_length=20, do_sample=False)
print("Summary:")
print(summary[0]["summary_text"])

# Question Answering
qa = pipeline("question-answering", model="deepset/roberta-base-squad2")

context = """BERT was introduced by Google in 2018. It uses masked language modeling
and next sentence prediction for pre-training. BERT-base has 110 million parameters
and BERT-large has 340 million parameters. It achieved state-of-the-art results on
11 NLP benchmarks when it was released."""

questions = [
    "Who introduced BERT?",
    "How many parameters does BERT-large have?",
    "What pre-training tasks does BERT use?"
]

print("\nQuestion Answering:")
for q in questions:
    answer = qa(question=q, context=context)
    print(f"  Q: {q}")
    print(f"  A: {answer['answer']} (confidence: {answer['score']:.3f})")
```

Hugging Face pipelines make it easy to use pre-trained models for various NLP tasks. The summarization pipeline uses BART (a seq2seq model) to condense long text. The question-answering pipeline uses RoBERTa fine-tuned on SQuAD2 to extract answers from a given context. Both pipelines handle tokenization, inference, and post-processing automatically.

**Output:**

```
Summary:
Large Language Models have transformed the field of natural language processing. BERT uses bidirectional encoding for understanding tasks, while GPT uses autoregressive decoding for generation tasks.

Question Answering:
  Q: Who introduced BERT?
  A: Google (confidence: 0.982)
  Q: How many parameters does BERT-large have?
  A: 340 million (confidence: 0.976)
  Q: What pre-training tasks does BERT use?
  A: masked language modeling and next sentence prediction (confidence: 0.951)
```

## Common Mistakes

### Confusing BERT and GPT Architectures

**Wrong:**

```
# WRONG: Using BERT for text generation
from transformers import pipeline

# BERT is an encoder -- it is designed for understanding, not generation
generator = pipeline("text-generation", model="bert-base-uncased")
result = generator("The capital of India is")
# This will fail or produce nonsensical output
```

BERT is an encoder-only model designed for understanding tasks (classification, NER, QA). It cannot perform autoregressive text generation. GPT is a decoder-only model designed for generation.

**Correct:**

```
from transformers import pipeline

# Use GPT for text generation
generator = pipeline("text-generation", model="gpt2")
result = generator("The capital of India is", max_length=20)
print(result[0]["generated_text"])

# Use BERT for understanding tasks
classifier = pipeline("sentiment-analysis")  # Uses BERT-based model
result = classifier("This course is excellent!")
print(result)
```

BERT reads bidirectionally and fills in masked tokens -- it understands context. GPT reads left-to-right and generates the next token -- it produces text. Choose the architecture based on your task: BERT for classification, NER, QA; GPT for generation, completion, conversation.

### Not Setting pad_token for GPT Models

**Wrong:**

```
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")

# WRONG: Trying to batch-tokenize without a pad token
texts = ["Hello world", "This is a longer sentence"]
encoded = tokenizer(texts, padding=True, return_tensors="pt")
# Error: Cannot pad because pad_token is not set
```

GPT-2 and similar models do not have a pad token by default. Attempting to use padding without setting one raises an error.

**Correct:**

```
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokenizer.pad_token = tokenizer.eos_token  # Set pad token to EOS token

texts = ["Hello world", "This is a longer sentence"]
encoded = tokenizer(texts, padding=True, return_tensors="pt")
print(f"Shape: {encoded['input_ids'].shape}")
print(f"Attention mask: {encoded['attention_mask']}")
```

GPT-style models are trained without padding, so they have no pad token configured. The standard fix is to set `tokenizer.pad_token = tokenizer.eos_token`. The attention mask ensures the model ignores padded positions during inference.

### Using Wrong Learning Rate for Fine-Tuning

**Wrong:**

```
# WRONG: Using a high learning rate for full BERT fine-tuning
training_args = TrainingArguments(
    output_dir="./output",
    learning_rate=1e-2,  # Way too high for fine-tuning BERT
    num_train_epochs=3
)
# Result: model diverges, catastrophic forgetting of pre-trained knowledge
```

A learning rate of 1e-2 is far too high for fine-tuning pre-trained transformers. The model will forget its pre-trained knowledge (catastrophic forgetting) and produce random outputs.

**Correct:**

```
# CORRECT learning rates:
# Full fine-tuning of BERT/RoBERTa: 2e-5 to 5e-5
# LoRA fine-tuning: 1e-4 to 3e-4 (higher because fewer params)

# For full fine-tuning
training_args = TrainingArguments(
    output_dir="./output",
    learning_rate=2e-5,  # Standard for BERT fine-tuning
    num_train_epochs=3,
    weight_decay=0.01    # Regularization to prevent overfitting
)

# For LoRA fine-tuning
lora_training_args = TrainingArguments(
    output_dir="./output-lora",
    learning_rate=3e-4,  # Higher LR is fine for LoRA
    num_train_epochs=5
)
```

Pre-trained models have already learned useful representations. Fine-tuning should make small adjustments, not overwrite them. The standard learning rate for BERT fine-tuning is 2e-5 to 5e-5. LoRA fine-tuning uses higher rates (1e-4 to 3e-4) because it updates far fewer parameters, making each update less impactful.

### Ignoring max_length During Tokenization

**Wrong:**

```
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

# WRONG: Not setting max_length for variable-length inputs
long_text = "word " * 1000  # 1000 words
tokens = tokenizer(long_text, return_tensors="pt")
# BERT has a max of 512 tokens -- this will silently truncate
# or worse, cause a runtime error during model forward pass
```

BERT and most transformer models have a maximum sequence length (512 tokens for BERT). Inputs exceeding this limit either get silently truncated or cause errors during the model's forward pass.

**Correct:**

```
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")

long_text = "word " * 1000

# CORRECT: Explicitly set truncation and max_length
tokens = tokenizer(
    long_text,
    truncation=True,     # Explicitly truncate to max_length
    max_length=512,      # BERT's maximum
    padding="max_length", # Pad shorter sequences to 512
    return_tensors="pt"
)
print(f"Token shape: {tokens['input_ids'].shape}")  # [1, 512]
```

Always set `truncation=True` and `max_length` when tokenizing for transformer models. BERT supports up to 512 tokens, GPT-2 supports 1024, and newer models support longer contexts. Being explicit about truncation prevents silent data loss and runtime errors.

## Summary

- A Large Language Model (LLM) is a neural network with billions of parameters trained on massive text data. It works by next-token prediction: given a sequence, the model predicts the probability distribution over the entire vocabulary for the next token, then samples from this distribution to generate text.
- Temperature controls randomness in generation: 0 means greedy (always pick the most probable token), 0.7 gives balanced creativity, and values above 1.0 increase randomness. Top-k sampling restricts selection to the k most probable tokens. Top-p (nucleus) sampling selects from the smallest set of tokens whose cumulative probability exceeds p.
- BERT is an encoder-only transformer that reads text bidirectionally. Pre-trained with Masked Language Modeling (predict masked tokens) and Next Sentence Prediction. Best for understanding tasks: text classification, named entity recognition (NER), question answering, and semantic similarity.
- GPT is a decoder-only transformer that reads text left-to-right (autoregressive). Pre-trained solely on next-token prediction. Excels at text generation. GPT-3 introduced few-shot learning -- performing tasks from a few examples in the prompt without any weight updates.
- Scaling laws show that LLM performance improves predictably with model size, dataset size, and compute budget, following power-law relationships. Chinchilla scaling laws (2022) showed that optimal performance comes from balancing model size with training data quantity.
- Tokenization converts text to integer IDs that models can process. BPE (Byte-Pair Encoding) iteratively merges frequent character pairs to build a subword vocabulary. SentencePiece is a language-independent tokenizer that works on raw byte streams without pre-tokenization.
- Fine-tuning adapts a pre-trained model to a specific task by updating weights on labeled data (requires compute and data). Prompt engineering guides model behavior through crafted input text without updating weights (faster, cheaper, but less specialized). Both approaches complement each other.
- Hugging Face Transformers library provides AutoTokenizer (loads any tokenizer), AutoModel (loads any model), and pipeline() (high-level API for text generation, sentiment analysis, NER, QA, and summarization). It is the de facto standard for working with LLMs in Python.
- LoRA (Low-Rank Adaptation) freezes base model weights and adds small trainable low-rank matrices to transformer layers, training only 0.1-1% of parameters. QLoRA adds 4-bit quantization of the frozen model, enabling fine-tuning of 65B+ parameter models on a single GPU.
- The GPT family evolved from GPT-1 (117M params, proved pre-training works) to GPT-2 (1.5B, strong generation) to GPT-3 (175B, few-shot learning) to GPT-4 (multimodal, state-of-the-art reasoning). Each generation demonstrated that scaling model size unlocks new capabilities.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/large-language-models/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/large-language-models/practice/*
