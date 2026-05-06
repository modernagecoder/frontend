---
title: "Practice: Large Language Models"
description: "50 practice problems for Large Language Models in AI and Machine Learning"
slug: large-language-models-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/large-language-models/practice/
category: "AI and Machine Learning"
---
# Practice: Large Language Models

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokens = tokenizer.tokenize("Hello world")
print(len(tokens))
print(tokens)
```

*Hint:* GPT-2 uses BPE tokenization. Common words may remain as single tokens.

**Answer:** `2`
`['Hello', ' world']`

GPT-2's BPE tokenizer keeps common words intact. 'Hello' and ' world' (note the leading space) are both in the vocabulary, so the text becomes 2 tokens.

### Q2. [Easy] What is the output?

```
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("gpt2")
ids = tokenizer.encode("AI is great")
print(type(ids))
print(tokenizer.decode(ids))
```

*Hint:* encode() returns a list of integers. decode() converts them back to text.

**Answer:** ``
`AI is great`

`encode()` converts text to a list of token IDs (integers). `decode()` converts those IDs back to the original text string. The round trip preserves the original text.

### Q3. [Easy] What is the output?

```
temperatures = [0.0, 0.5, 1.0, 2.0]
for t in temperatures:
    if t == 0.0:
        print(f"Temp {t}: greedy (deterministic)")
    elif t < 1.0:
        print(f"Temp {t}: sharper distribution")
    elif t == 1.0:
        print(f"Temp {t}: original distribution")
    else:
        print(f"Temp {t}: flatter distribution")
```

*Hint:* Temperature 0 is greedy, less than 1 sharpens, equal to 1 keeps original, greater than 1 flattens.

**Answer:** `Temp 0.0: greedy (deterministic)`
`Temp 0.5: sharper distribution`
`Temp 1.0: original distribution`
`Temp 2.0: flatter distribution`

Temperature controls the softmax distribution: 0 always picks the top token, values below 1 make it peakier (less random), 1.0 keeps the original probabilities, and values above 1 flatten the distribution (more random).

### Q4. [Easy] What is the output?

```
models = {
    "BERT": "encoder-only",
    "GPT": "decoder-only",
    "T5": "encoder-decoder"
}
for name, arch in models.items():
    print(f"{name}: {arch}")
```

*Hint:* This iterates over a dictionary of model names and their architecture types.

**Answer:** `BERT: encoder-only`
`GPT: decoder-only`
`T5: encoder-decoder`

BERT uses only the encoder part of the transformer (bidirectional, good for understanding). GPT uses only the decoder (autoregressive, good for generation). T5 uses both encoder and decoder (good for sequence-to-sequence tasks like translation and summarization).

### Q5. [Easy] What is the output?

```
gpt_versions = [
    ("GPT-1", "117M"),
    ("GPT-2", "1.5B"),
    ("GPT-3", "175B"),
    ("GPT-4", "Multimodal")
]
for name, info in gpt_versions:
    print(f"{name}: {info}")
```

*Hint:* Simple iteration over a list of tuples showing GPT evolution.

**Answer:** `GPT-1: 117M`
`GPT-2: 1.5B`
`GPT-3: 175B`
`GPT-4: Multimodal`

The GPT family scaled from 117 million parameters (GPT-1) to 1.5 billion (GPT-2) to 175 billion (GPT-3). GPT-4 introduced multimodal capabilities (text + images) along with further scaling.

### Q6. [Medium] What is the output?

```
import math

def softmax_with_temperature(logits, temperature):
    if temperature == 0:
        result = [0.0] * len(logits)
        result[logits.index(max(logits))] = 1.0
        return result
    scaled = [x / temperature for x in logits]
    exp_scaled = [math.exp(x) for x in scaled]
    total = sum(exp_scaled)
    return [round(x / total, 3) for x in exp_scaled]

logits = [2.0, 1.0, 0.5]
print(softmax_with_temperature(logits, 0))
print(softmax_with_temperature(logits, 1.0))
print(softmax_with_temperature(logits, 0.5))
```

*Hint:* Temperature 0 gives all probability to the max logit. Lower temperature sharpens the distribution.

**Answer:** `[1.0, 0.0, 0.0]`
`[0.506, 0.186, 0.113]` (approximately)
`[0.724, 0.098, 0.036]` (approximately)

Temperature 0: greedy, all probability on the highest logit. Temperature 1.0: standard softmax. Temperature 0.5: sharpened distribution -- the highest logit gets even more probability mass, making generation more deterministic.

### Q7. [Medium] What is the output?

```
def top_k_filter(probs, k):
    sorted_probs = sorted(enumerate(probs), key=lambda x: x[1], reverse=True)
    top_k = sorted_probs[:k]
    total = sum(p for _, p in top_k)
    return [(idx, round(p/total, 3)) for idx, p in top_k]

probs = [0.4, 0.3, 0.15, 0.1, 0.05]
result = top_k_filter(probs, 3)
for idx, p in result:
    print(f"Token {idx}: {p}")
```

*Hint:* Top-k keeps only the k highest probability tokens and renormalizes.

**Answer:** `Token 0: 0.471`
`Token 1: 0.353`
`Token 2: 0.176`

Top-k=3 keeps the 3 highest probability tokens (0.4, 0.3, 0.15). Their sum is 0.85. After renormalizing: 0.4/0.85=0.471, 0.3/0.85=0.353, 0.15/0.85=0.176. Tokens 3 and 4 are discarded entirely.

### Q8. [Medium] What is the output?

```
def top_p_filter(probs, p):
    sorted_probs = sorted(enumerate(probs), key=lambda x: x[1], reverse=True)
    cumulative = 0
    selected = []
    for idx, prob in sorted_probs:
        cumulative += prob
        selected.append((idx, prob))
        if cumulative >= p:
            break
    return len(selected)

probs = [0.4, 0.3, 0.15, 0.1, 0.05]
print(top_p_filter(probs, 0.5))
print(top_p_filter(probs, 0.7))
print(top_p_filter(probs, 0.9))
```

*Hint:* Top-p accumulates probabilities from highest to lowest until reaching p.

**Answer:** `2`
`2`
`4`

Top-p=0.5: cumulative 0.4 (not enough), add 0.3 = 0.7 >= 0.5, return 2 tokens. Top-p=0.7: cumulative 0.4, then 0.7 >= 0.7, return 2 tokens. Top-p=0.9: cumulative 0.4, 0.7, 0.85, then 0.95 >= 0.9, return 4 tokens. Top-p dynamically adjusts the number of candidates based on the probability distribution.

### Q9. [Medium] What is the output?

```
def count_parameters(total_params, lora_rank, num_layers, hidden_dim):
    # LoRA adds two matrices per layer: A (hidden_dim x rank) and B (rank x hidden_dim)
    lora_params = num_layers * 2 * hidden_dim * lora_rank
    percentage = (lora_params / total_params) * 100
    return lora_params, round(percentage, 2)

# GPT-2 small: 124M params, 12 layers, hidden_dim=768
lora_p, pct = count_parameters(124_000_000, 8, 12, 768)
print(f"LoRA params: {lora_p:,}")
print(f"Percentage: {pct}%")
```

*Hint:* LoRA adds A (d x r) and B (r x d) matrices to each layer.

**Answer:** `LoRA params: 147,456`
`Percentage: 0.12%`

Each layer gets two LoRA matrices: A (768 x 8) and B (8 x 768). Per layer: 2 * 768 * 8 = 12,288 parameters. Across 12 layers: 12 * 12,288 = 147,456. That is only 0.12% of the total 124M parameters, demonstrating LoRA's parameter efficiency.

### Q10. [Hard] What is the output?

```
def simulate_bpe(text, num_merges):
    # Start with character-level tokens
    tokens = list(text.replace(" ", "_ ").strip())
    print(f"Initial: {tokens}")
    
    for i in range(num_merges):
        # Count adjacent pairs
        pairs = {}
        for j in range(len(tokens) - 1):
            pair = (tokens[j], tokens[j+1])
            pairs[pair] = pairs.get(pair, 0) + 1
        
        if not pairs:
            break
        
        # Find most frequent pair
        best = max(pairs, key=pairs.get)
        merged = best[0] + best[1]
        
        # Merge all occurrences
        new_tokens = []
        j = 0
        while j < len(tokens):
            if j < len(tokens) - 1 and (tokens[j], tokens[j+1]) == best:
                new_tokens.append(merged)
                j += 2
            else:
                new_tokens.append(tokens[j])
                j += 1
        tokens = new_tokens
        print(f"Merge {i+1}: {best} -> '{merged}' | {tokens}")
    
    return tokens

result = simulate_bpe("ab ab ab cd", 2)
print(f"Final: {result}")
```

*Hint:* BPE iteratively merges the most frequent adjacent pair. Spaces become underscores.

**Answer:** The function first converts to character tokens with underscores for spaces, then merges the most frequent pair in each step. After 2 merges, commonly paired characters are combined.

BPE starts with individual characters and merges the most frequent adjacent pair at each step. In 'ab_ ab_ ab_ cd', the pair ('a', 'b') appears 3 times (most frequent), so it merges first to 'ab'. Then the next most frequent pair is found and merged. This iterative process builds the subword vocabulary.

### Q11. [Hard] What is the output?

```
def few_shot_prompt(examples, query):
    prompt = "Classify the sentiment as Positive or Negative.\n\n"
    for text, label in examples:
        prompt += f"Text: {text}\nSentiment: {label}\n\n"
    prompt += f"Text: {query}\nSentiment:"
    return prompt

examples = [
    ("I love this product", "Positive"),
    ("Terrible experience", "Negative"),
    ("Absolutely wonderful", "Positive")
]

prompt = few_shot_prompt(examples, "Not worth the money")
lines = prompt.strip().split("\n")
print(f"Total lines: {len(lines)}")
print(f"Num examples: {len(examples)}")
print(f"Last line: {lines[-1]}")
```

*Hint:* Count the lines in the formatted few-shot prompt. Each example has 2 lines plus a blank line.

**Answer:** `Total lines: 10`
`Num examples: 3`
`Last line: Sentiment:`

The prompt has: 1 instruction line + 1 blank line + 3 examples * (2 lines + 1 blank) + 1 query text line + 1 Sentiment: line. After stripping, there are 10 non-empty lines. The last line is 'Sentiment:' which the model should complete with its prediction. This is the few-shot learning pattern.

### Q12. [Easy] What is the fundamental task that LLMs are trained to perform?

*Hint:* Think about what the model predicts at each step during training.

**Answer:** LLMs are trained to perform **next-token prediction**. Given a sequence of tokens, the model learns to predict the probability distribution over the vocabulary for the next token. During training, the model sees billions of text sequences and adjusts its parameters to minimize the prediction error (cross-entropy loss). At inference time, text is generated by repeatedly predicting and appending the next token.

This simple objective -- predict the next word -- turns out to be extraordinarily powerful at scale. To predict the next word accurately, the model must learn grammar, facts, reasoning patterns, and even some common sense from the training data.

### Q13. [Medium] What is the difference between fine-tuning and prompt engineering? When would Kavitha choose one over the other?

*Hint:* Think about whether model weights change, and what resources each approach needs.

**Answer:** **Fine-tuning** updates the model's weights by training on task-specific labeled data. It requires a dataset, GPU compute, and ML expertise, but produces a specialized model with high accuracy. **Prompt engineering** crafts the input text to guide the model's behavior without changing any weights. It requires no training data or compute beyond inference. Kavitha should choose fine-tuning when she has labeled data and needs consistently high accuracy on a specific task (e.g., classifying legal documents). She should choose prompt engineering for quick prototyping, general-purpose tasks, or when labeled data is unavailable.

In practice, many teams start with prompt engineering and switch to fine-tuning only when prompting does not meet accuracy requirements. LoRA makes fine-tuning more accessible by reducing compute needs.

### Q14. [Medium] Why does LoRA freeze the base model weights and add small matrices instead of fine-tuning all parameters?

*Hint:* Think about memory, compute, and the number of parameters being updated.

**Answer:** Full fine-tuning of a model with billions of parameters requires enormous GPU memory (to store model weights, gradients, and optimizer states) and risks catastrophic forgetting. LoRA freezes the base weights and adds small trainable low-rank matrices (rank r, typically 4-16) to specific layers. This reduces trainable parameters from billions to millions (often 0.1-1% of total), drastically lowering memory requirements. The low-rank hypothesis suggests that the weight updates during fine-tuning have a low intrinsic rank, so a low-rank approximation captures most of the adaptation needed.

LoRA makes fine-tuning practical on consumer GPUs. A 7B parameter model that would need 4 x 80GB GPUs for full fine-tuning can be LoRA-tuned on a single 24GB GPU. QLoRA reduces this further with 4-bit quantization.

### Q15. [Hard] Explain how BERT's Masked Language Modeling differs from GPT's next-token prediction, and why this difference makes BERT better for understanding tasks and GPT better for generation.

*Hint:* Consider what context each model can see when making predictions.

**Answer:** BERT's MLM randomly masks 15% of tokens and predicts them using **both left and right context** (bidirectional). This means BERT learns deep representations where each token's embedding captures information from the entire sequence. GPT's next-token prediction uses only **left context** (tokens that came before). Each token can only attend to previous tokens. BERT is better for understanding because bidirectional context gives richer representations for classification, NER, and QA. GPT is better for generation because its left-to-right architecture naturally supports sequential text generation -- it can generate the next token without needing future tokens.

The key trade-off: BERT's bidirectional attention cannot generate text autoregressively (it would need to see the tokens it has not generated yet). GPT's causal attention enables generation but means each token only has partial context. Models like T5 combine both approaches with an encoder-decoder architecture.

### Q16. [Hard] What is the output?

```
class SimpleTokenizer:
    def __init__(self):
        self.vocab = {}
        self.next_id = 0
    
    def add_token(self, token):
        if token not in self.vocab:
            self.vocab[token] = self.next_id
            self.next_id += 1
    
    def encode(self, text):
        tokens = text.lower().split()
        return [self.vocab.get(t, -1) for t in tokens]
    
    def decode(self, ids):
        reverse = {v: k for k, v in self.vocab.items()}
        return " ".join(reverse.get(i, "[UNK]") for i in ids)

tok = SimpleTokenizer()
for word in ["hello", "world", "machine", "learning"]:
    tok.add_token(word)

print(tok.encode("hello machine learning"))
print(tok.encode("hello unknown world"))
print(tok.decode([0, 3, 2]))
```

*Hint:* Tokens get IDs in order of addition. Unknown words get -1.

**Answer:** `[0, 2, 3]`
`[0, -1, 1]`
`hello learning machine`

Tokens are assigned IDs in insertion order: hello=0, world=1, machine=2, learning=3. 'hello machine learning' encodes to [0, 2, 3]. 'unknown' is not in vocabulary, so it gets -1. decode([0, 3, 2]) maps to 'hello learning machine'.

### Q17. [Hard] What are scaling laws for LLMs, and what did the Chinchilla paper reveal about how most LLMs were being trained?

*Hint:* Think about the relationship between model size, data size, and compute budget.

**Answer:** Scaling laws (Kaplan et al., 2020) showed that LLM performance (measured as loss) improves as a power law of three factors: model parameters, dataset size, and compute budget. The relationship is predictable -- you can forecast performance before training. The **Chinchilla paper** (Hoffmann et al., 2022) revealed that most LLMs were significantly **undertrained**: for a fixed compute budget, it is better to train a moderately-sized model on much more data than to train an extremely large model on less data. Chinchilla (70B parameters trained on 1.4 trillion tokens) outperformed Gopher (280B parameters trained on 300 billion tokens) despite being 4x smaller.

Chinchilla's insight: the optimal model size and dataset size should scale roughly equally. A 10x increase in compute should go to both a larger model AND more training data. This led to models like LLaMA being trained on far more data relative to their size.

### Q18. [Easy] What is the output?

```
pipeline_tasks = ["text-generation", "sentiment-analysis", "summarization", "ner", "question-answering"]
for task in pipeline_tasks:
    print(f"pipeline('{task}')")
print(f"Total tasks: {len(pipeline_tasks)}")
```

*Hint:* Hugging Face pipeline supports multiple NLP tasks.

**Answer:** `pipeline('text-generation')`
`pipeline('sentiment-analysis')`
`pipeline('summarization')`
`pipeline('ner')`
`pipeline('question-answering')`
`Total tasks: 5`

Hugging Face's pipeline function supports many NLP tasks out of the box. Each task loads an appropriate pre-trained model automatically. This makes it easy to use state-of-the-art NLP models with just one line of code.

### Q19. [Easy] What is the difference between zero-shot, one-shot, and few-shot learning in the context of LLMs?

*Hint:* Think about how many examples are provided in the prompt.

**Answer:** **Zero-shot**: The model performs a task with only a description, no examples. Example prompt: 'Classify the following as positive or negative: I love this.' **One-shot**: One example is provided. 'Positive: Great product! Now classify: I love this.' **Few-shot**: Several examples are provided (typically 2-10). The model learns the task pattern from the examples without any weight updates. Few-shot learning was a breakthrough capability of GPT-3 that emerged at 175B parameters.

These paradigms eliminate the need for fine-tuning on many tasks. The model uses in-context learning -- understanding the task pattern from the prompt structure. More examples generally improve accuracy but consume more of the context window.

### Q20. [Medium] What is the output?

```
def compare_approaches(task, data_available, compute_available):
    if data_available > 1000 and compute_available:
        return "fine-tuning"
    elif data_available > 5:
        return "few-shot prompting"
    elif data_available > 0:
        return "one-shot prompting"
    else:
        return "zero-shot prompting"

scenarios = [
    ("Sentiment", 5000, True),
    ("Translation", 8, False),
    ("Summarization", 0, False),
    ("NER", 1, False)
]

for task, data, compute in scenarios:
    approach = compare_approaches(task, data, compute)
    print(f"{task:15s}: {approach}")
```

*Hint:* More data + compute = fine-tuning. Less data = prompting with available examples.

**Answer:** `Sentiment      : fine-tuning`
`Translation    : few-shot prompting`
`Summarization  : zero-shot prompting`
`NER            : one-shot prompting`

The approach depends on available resources: 5000 labeled examples with GPU compute allows fine-tuning for best accuracy. 8 examples is enough for few-shot prompting. 0 examples requires zero-shot. 1 example enables one-shot. In practice, start with prompting and only fine-tune if accuracy is insufficient.

## Mixed Questions

### Q1. [Easy] What is the output?

```
bert_tasks = ["Classification", "NER", "QA", "Similarity"]
gpt_tasks = ["Text Generation", "Completion", "Chat", "Code"]

print(f"BERT tasks: {len(bert_tasks)}")
print(f"GPT tasks: {len(gpt_tasks)}")
print(f"All tasks: {len(bert_tasks + gpt_tasks)}")
```

*Hint:* len() counts elements. Concatenating two lists adds their lengths.

**Answer:** `BERT tasks: 4`
`GPT tasks: 4`
`All tasks: 8`

Each list has 4 elements. Concatenating them with + produces a list of 8 elements. BERT excels at understanding tasks (classification, NER, QA) while GPT excels at generative tasks.

### Q2. [Easy] What is the output?

```
approach = {"fine-tuning": "updates weights", "prompting": "no weight change"}
for method, desc in approach.items():
    print(f"{method}: {desc}")
```

*Hint:* Dictionary iteration produces key-value pairs.

**Answer:** `fine-tuning: updates weights`
`prompting: no weight change`

Fine-tuning modifies model weights by training on task-specific data. Prompt engineering (prompting) guides the model through carefully crafted input text without any weight updates.

### Q3. [Medium] What is the output?

```
def estimate_memory_gb(params_billions, bytes_per_param):
    return round(params_billions * bytes_per_param, 1)

# FP32 = 4 bytes, FP16 = 2 bytes, INT8 = 1 byte, INT4 = 0.5 bytes
model_size = 7  # 7B parameter model

for precision, bpp in [("FP32", 4), ("FP16", 2), ("INT8", 1), ("INT4", 0.5)]:
    mem = estimate_memory_gb(model_size, bpp)
    print(f"{precision}: {mem} GB")
```

*Hint:* Memory = parameters * bytes per parameter. 7B * 4 bytes = 28 GB for FP32.

**Answer:** `FP32: 28 GB`
`FP16: 14 GB`
`INT8: 7 GB`
`INT4: 3.5 GB`

A 7B parameter model needs 28 GB in FP32 (full precision), 14 GB in FP16 (half precision), 7 GB in INT8 (8-bit quantization), and 3.5 GB in INT4 (4-bit quantization, used by QLoRA). Quantization makes large models fit on smaller GPUs.

### Q4. [Medium] What is the output?

```
def zero_shot_vs_few_shot(num_examples):
    if num_examples == 0:
        return "zero-shot"
    elif num_examples == 1:
        return "one-shot"
    else:
        return "few-shot"

for n in [0, 1, 3, 5]:
    print(f"{n} examples: {zero_shot_vs_few_shot(n)}")
```

*Hint:* Zero examples = zero-shot, one = one-shot, more = few-shot.

**Answer:** `0 examples: zero-shot`
`1 examples: one-shot`
`3 examples: few-shot`
`5 examples: few-shot`

GPT-3 introduced these paradigms: zero-shot (task description only, no examples), one-shot (one example), and few-shot (multiple examples in the prompt). The model learns the task pattern from the examples without any weight updates.

### Q5. [Medium] What is the output?

```
class LoRALayer:
    def __init__(self, in_dim, out_dim, rank):
        self.rank = rank
        self.a_shape = (in_dim, rank)
        self.b_shape = (rank, out_dim)
        self.trainable = in_dim * rank + rank * out_dim
        self.frozen = in_dim * out_dim
    
    def __repr__(self):
        pct = round(100 * self.trainable / (self.frozen + self.trainable), 2)
        return f"LoRA(rank={self.rank}, trainable={self.trainable}, frozen={self.frozen}, {pct}%)"

layer = LoRALayer(768, 768, 8)
print(layer)
```

*Hint:* A matrix has shape (in, rank) and B has shape (rank, out). Total trainable = in*r + r*out.

**Answer:** `LoRA(rank=8, trainable=12288, frozen=589824, 2.04%)`

Matrix A: 768 * 8 = 6144 params. Matrix B: 8 * 768 = 6144 params. Total trainable: 12,288. Frozen: 768 * 768 = 589,824. Percentage: 12288 / (589824 + 12288) * 100 = 2.04%. LoRA adds very few parameters relative to the frozen weight matrix.

### Q6. [Hard] What is the output?

```
import math

def perplexity(loss):
    return round(math.exp(loss), 2)

# Lower loss = lower perplexity = better model
losses = [4.5, 3.2, 2.1, 1.5]
for loss in losses:
    ppl = perplexity(loss)
    print(f"Loss: {loss} -> Perplexity: {ppl}")
```

*Hint:* Perplexity = e^(loss). Lower perplexity means the model is less surprised by the data.

**Answer:** `Loss: 4.5 -> Perplexity: 90.02`
`Loss: 3.2 -> Perplexity: 24.53`
`Loss: 2.1 -> Perplexity: 8.17`
`Loss: 1.5 -> Perplexity: 4.48`

Perplexity is e raised to the cross-entropy loss. It represents how 'surprised' the model is by the data. A perplexity of 4.48 means the model is, on average, as confused as choosing between about 4.5 equally likely tokens. Lower perplexity indicates a better language model.

### Q7. [Medium] Rohan wants to build a chatbot for his college that answers questions about admission procedures. Should he fine-tune a model or use prompt engineering? Explain your reasoning.

*Hint:* Consider the available data, required accuracy, and development speed.

**Answer:** Rohan should start with **prompt engineering** using a capable LLM (like GPT-4 or Claude). He can include the admission procedures as context in the prompt (RAG pattern -- Retrieval Augmented Generation). This approach is faster, cheaper, and does not require training data or GPUs. If the chatbot needs to handle very specific edge cases or domain-specific terminology that prompting cannot handle reliably, he can then consider fine-tuning a smaller model on a dataset of actual admission Q&A pairs. The practical approach: prompt engineering first, fine-tuning only if prompting falls short.

For most domain-specific Q&A applications, RAG (providing relevant documents in the prompt) combined with good prompt engineering achieves strong results without fine-tuning. Fine-tuning is better when the task requires a specialized output format, domain-specific reasoning, or consistent behavior across thousands of edge cases.

### Q8. [Hard] What is the difference between BPE and SentencePiece tokenization? Why do multilingual models prefer SentencePiece?

*Hint:* Think about how each handles spaces and different languages.

**Answer:** BPE (Byte-Pair Encoding) requires pre-tokenization -- splitting text by spaces and punctuation before applying subword merges. This assumes space-separated words, which works well for English but poorly for languages like Chinese, Japanese, and Thai that do not use spaces between words. SentencePiece treats the input as a raw byte stream and learns subword tokens directly from the raw text without pre-tokenization. It represents spaces as special characters (like '_'). This makes SentencePiece **language-independent** -- it works equally well for English, Hindi, Chinese, and any other language.

Multilingual models like mBERT, T5, and LLaMA use SentencePiece because it handles all languages uniformly. It can learn useful subword units for any language without language-specific preprocessing rules. The '_' character in SentencePiece output marks word boundaries.

### Q9. [Hard] What is the output?

```
def simulate_autoregressive(vocab, seed_tokens, steps):
    # Simulated next-token prediction (deterministic for demo)
    transitions = {
        "the": "model",
        "model": "predicts",
        "predicts": "the",
        "AI": "is",
        "is": "powerful",
        "powerful": "."
    }
    tokens = list(seed_tokens)
    for _ in range(steps):
        last = tokens[-1]
        next_token = transitions.get(last, "[END]")
        tokens.append(next_token)
    return " ".join(tokens)

print(simulate_autoregressive(None, ["the"], 5))
print(simulate_autoregressive(None, ["AI"], 3))
```

*Hint:* Each token maps to a fixed next token. Follow the chain for the specified number of steps.

**Answer:** `the model predicts the model predicts`
`AI is powerful .`

Autoregressive generation: each step looks at the last token and predicts the next. Starting from 'the': the -> model -> predicts -> the -> model -> predicts (cycles). Starting from 'AI': AI -> is -> powerful -> '.'. This demonstrates how GPT generates token by token, left to right.

### Q10. [Hard] Why did GPT-3's few-shot learning capability emerge at 175B parameters but not at smaller scales like GPT-2's 1.5B? What does this tell us about LLM capabilities and scale?

*Hint:* Think about emergent abilities and the relationship between scale and new capabilities.

**Answer:** GPT-3 demonstrated **emergent abilities** -- capabilities that appear suddenly above a certain model size threshold rather than improving gradually. At 175B parameters, GPT-3 could perform tasks from a few examples in the prompt (few-shot learning) without any fine-tuning. GPT-2 at 1.5B could not do this reliably. This tells us that some LLM capabilities are not linear functions of scale -- they are phase transitions that emerge at critical thresholds. Possible explanations: larger models learn more abstract representations, store more factual knowledge, and develop better in-context learning circuits. The implication is that we cannot always predict what capabilities a larger model will have based on smaller models.

Emergent abilities are one of the most surprising findings in LLM research. Other examples include chain-of-thought reasoning, arithmetic ability, and code generation -- all of which improve dramatically above certain parameter thresholds. This unpredictability is both exciting and concerning for AI safety.

### Q11. [Easy] What is the output?

```
hf_components = ["AutoTokenizer", "AutoModel", "pipeline", "Trainer", "TrainingArguments"]
for comp in hf_components:
    print(f"from transformers import {comp}")
print(f"\nTotal imports: {len(hf_components)}")
```

*Hint:* 5 key components of the Hugging Face transformers library.

**Answer:** `from transformers import AutoTokenizer`
`from transformers import AutoModel`
`from transformers import pipeline`
`from transformers import Trainer`
`from transformers import TrainingArguments`
`Total imports: 5`

The Hugging Face transformers library provides Auto classes (load any model/tokenizer), pipeline (high-level inference), and Trainer/TrainingArguments (fine-tuning). These are the essential imports for most LLM tasks.

### Q12. [Medium] What is the output?

```
def token_count_estimate(text, chars_per_token=4):
    """Rough estimate: ~4 characters per token for English text."""
    return len(text) // chars_per_token

texts = [
    "Hello world",
    "Machine learning is a subset of artificial intelligence",
    "The quick brown fox jumps over the lazy dog" * 10
]

for text in texts:
    tokens = token_count_estimate(text)
    print(f"Chars: {len(text):4d} | ~Tokens: {tokens:4d} | Text: {text[:40]}...")
```

*Hint:* Divide character count by 4 for a rough token estimate.

**Answer:** Each text shows its character count divided by 4 as an approximate token count. Longer texts have proportionally more tokens.

A rough rule of thumb for English text: 1 token is about 4 characters or 0.75 words. GPT-2 has a 1024 token context window, GPT-3 has 4096, and GPT-4 supports up to 128K tokens. Understanding token counts is essential for managing context window limits and API costs.

### Q13. [Easy] What is the Hugging Face pipeline function and why is it useful?

*Hint:* Think about how much code you need to write to use a pre-trained model.

**Answer:** The Hugging Face `pipeline()` function is a high-level API that handles tokenization, model inference, and post-processing in a single call. You only need to specify the task (e.g., 'sentiment-analysis', 'text-generation', 'summarization') and optionally a model name. It automatically downloads the model, tokenizes the input, runs inference, and returns human-readable results. Without pipeline, you would need to manually load the tokenizer, tokenize input, run the model forward pass, and post-process logits. Pipeline reduces this from 10+ lines to 2 lines of code.

Pipeline is the fastest way to get started with Hugging Face models. For production use, you may need more control (custom tokenization, batch processing), in which case you use AutoTokenizer and AutoModel directly.

### Q14. [Hard] What is the output?

```
def compute_attention_memory(seq_len, hidden_dim, num_heads, dtype_bytes=2):
    """Estimate memory for self-attention computation."""
    # Attention matrix: seq_len x seq_len per head
    attention_memory = seq_len * seq_len * num_heads * dtype_bytes
    # Q, K, V projections
    qkv_memory = 3 * seq_len * hidden_dim * dtype_bytes
    total_mb = (attention_memory + qkv_memory) / (1024 * 1024)
    return round(total_mb, 2)

for seq_len in [512, 2048, 8192, 32768]:
    mem = compute_attention_memory(seq_len, 4096, 32)
    print(f"Seq length {seq_len:6d}: ~{mem:8.2f} MB attention memory")
```

*Hint:* Attention memory scales quadratically with sequence length (O(n^2)).

**Answer:** Memory increases quadratically: 512 tokens uses relatively little memory, while 32768 tokens uses enormous memory due to the O(n^2) scaling of the attention matrix.

Self-attention has O(n^2) memory complexity because it computes attention scores between every pair of tokens. This is why long-context models (128K+ tokens) require techniques like FlashAttention, sparse attention, or linear attention to reduce memory usage. Doubling the sequence length quadruples the attention memory.

## Multiple Choice Questions

### Q1. [Easy] What is the core training objective of GPT models?

**Answer:** B

**B is correct.** GPT models are trained with a causal language modeling objective: predict the next token given all previous tokens. This autoregressive approach enables text generation.

### Q2. [Easy] Which model architecture does BERT use?

**Answer:** B

**B is correct.** BERT uses the encoder part of the transformer architecture. It processes text bidirectionally, allowing each token to attend to all other tokens in the sequence.

### Q3. [Easy] What does temperature = 0 mean in LLM text generation?

**Answer:** C

**C is correct.** Temperature 0 makes the probability distribution infinitely sharp, always selecting the token with the highest probability. This produces deterministic, repeatable output.

### Q4. [Easy] What is BPE in the context of LLMs?

**Answer:** B

**B is correct.** Byte-Pair Encoding (BPE) starts with individual characters and repeatedly merges the most frequent adjacent pair to build a subword vocabulary. This balances vocabulary size with the ability to handle rare words.

### Q5. [Easy] Which GPT version first demonstrated few-shot learning capabilities?

**Answer:** C

**C is correct.** GPT-3 (175B parameters) was the first to demonstrate strong few-shot learning -- performing tasks from just a few examples in the prompt without any fine-tuning. This was a breakthrough capability enabled by scale.

### Q6. [Easy] What does the Hugging Face pipeline('sentiment-analysis') return?

**Answer:** C

**C is correct.** The sentiment analysis pipeline returns a dictionary with a label (POSITIVE or NEGATIVE) and a confidence score (0 to 1). It handles tokenization, inference, and post-processing automatically.

### Q7. [Medium] What is the key advantage of top-p (nucleus) sampling over top-k sampling?

**Answer:** B

**B is correct.** Top-p dynamically adjusts the number of tokens considered. When the model is confident (one token has high probability), fewer candidates are used. When uncertain (flat distribution), more candidates are included. Top-k always considers exactly k tokens regardless of the distribution shape.

### Q8. [Medium] What pre-training task does BERT NOT use?

**Answer:** C

**C is correct.** BERT uses Masked Language Modeling (MLM) and Next Sentence Prediction (NSP). Next-token prediction is GPT's training objective. BERT predicts masked tokens using bidirectional context, not the next sequential token.

### Q9. [Medium] What does LoRA stand for, and what is its primary benefit?

**Answer:** A

**A is correct.** LoRA (Low-Rank Adaptation) freezes the base model and adds small low-rank matrices to transformer layers. This reduces trainable parameters to 0.1-1% of the total, making fine-tuning feasible on consumer GPUs.

### Q10. [Medium] What is the Chinchilla scaling law's key finding?

**Answer:** B

**B is correct.** The Chinchilla paper showed that for a fixed compute budget, the optimal strategy is to balance model size and training data. Many existing LLMs were undertrained -- a smaller model trained on more data can outperform a larger model trained on less data.

### Q11. [Medium] What is the typical learning rate range for fine-tuning BERT on a downstream task?

**Answer:** B

**B is correct.** BERT fine-tuning uses a very small learning rate (2e-5 to 5e-5) to make gentle adjustments to the pre-trained weights without destroying the learned representations. Higher rates cause catastrophic forgetting.

### Q12. [Medium] Why does SentencePiece work better than BPE for multilingual models?

**Answer:** B

**B is correct.** SentencePiece treats input as a raw byte stream and learns subword tokens directly. Unlike BPE, it does not assume words are separated by spaces, making it work equally well for languages like Chinese, Japanese, Hindi, and Thai.

### Q13. [Hard] What is the difference between QLoRA and standard LoRA?

**Answer:** B

**B is correct.** QLoRA combines LoRA with 4-bit quantization (NF4 data type) of the frozen base model. The LoRA matrices remain in higher precision for training. This reduces memory by approximately 4x compared to standard LoRA with FP16 base weights, enabling fine-tuning of 65B+ models on a single GPU.

### Q14. [Hard] What are 'emergent abilities' in the context of LLMs?

**Answer:** B

**B is correct.** Emergent abilities are capabilities that are absent in smaller models but suddenly appear when models reach a critical size. Examples include few-shot learning, chain-of-thought reasoning, and arithmetic. These abilities are not explicitly trained -- they emerge from scale.

### Q15. [Hard] When using Hugging Face Trainer for BERT fine-tuning, what does the eval_strategy='epoch' parameter do?

**Answer:** B

**B is correct.** Setting `eval_strategy='epoch'` runs evaluation on the validation dataset at the end of every training epoch. This lets you monitor performance over time and detect overfitting. Other options include 'steps' (evaluate every N steps) and 'no' (skip evaluation).

### Q16. [Hard] In a LoRA configuration with r=16 and lora_alpha=32, what is the effective scaling factor applied to the LoRA update?

**Answer:** C

**C is correct.** The LoRA update is scaled by alpha/r. With lora_alpha=32 and r=16, the scaling factor is 32/16 = 2. This means the LoRA update is multiplied by 2 before being added to the frozen weights. Higher alpha/r ratios amplify the LoRA adaptation.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/large-language-models/*
