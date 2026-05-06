---
title: "Practice: Transformers and Attention Mechanism"
description: "52 practice problems for Transformers and Attention Mechanism in AI and Machine Learning"
slug: transformers-and-attention-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/transformers-and-attention/practice
category: "AI and Machine Learning"
---
# Practice: Transformers and Attention Mechanism

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What paper introduced the Transformer architecture, and what was its key message?

*Hint:* The paper's title itself conveys the message.

**Answer:** The paper "Attention Is All You Need" (Vaswani et al., 2017, Google) introduced the Transformer. Its key message is that you do not need recurrence (RNNs) or convolution (CNNs) to process sequential data. The attention mechanism alone is sufficient and actually superior: it enables parallel processing, better long-range dependencies, and faster training.

Before this paper, the prevailing belief was that sequential data required sequential processing (RNNs). The Transformer showed that self-attention could replace recurrence entirely, leading to the modern AI revolution.

### Q2. [Easy] What are Query (Q), Key (K), and Value (V) in the attention mechanism?

*Hint:* Use the restaurant analogy.

**Answer:** Query (Q) is what you are looking for -- the question being asked. Key (K) is the identifier of each available item -- like a label or description. Value (V) is the actual content that will be retrieved. Attention computes similarity between Q and each K, then returns a weighted combination of Vs. Restaurant analogy: Q = your food preference, K = menu descriptions, V = the actual dishes.

In self-attention, Q, K, V are all derived from the same input by multiplying with different learned weight matrices (W_Q, W_K, W_V). This allows the same word to represent different things depending on whether it is asking a question (Q), being queried about (K), or providing information (V).

### Q3. [Easy] Why do Transformers need positional encoding?

*Hint:* What information is lost when you remove recurrence?

**Answer:** RNNs inherently process tokens in order, so position information is built into the computation. Transformers process all positions simultaneously with attention, which is permutation-invariant -- it does not care about order. Without positional encoding, 'dog bites man' and 'man bites dog' would produce identical representations. Positional encoding adds position information to the input embeddings so the model knows which word is first, second, etc.

The sinusoidal positional encoding uses sin and cos functions at different frequencies. Position 0 and position 100 get different encoding vectors. These are added (not concatenated) to word embeddings before entering the Transformer.

### Q4. [Easy] What does the Hugging Face pipeline produce?

```
from transformers import pipeline
sentiment = pipeline('sentiment-analysis')
result = sentiment("I love learning about Transformers")
print(result)
```

*Hint:* sentiment-analysis returns a label and confidence score.

**Answer:** `[{'label': 'POSITIVE', 'score': 0.9998}]` (approximately)

The pipeline returns a list of dictionaries, each with 'label' (POSITIVE/NEGATIVE) and 'score' (confidence between 0 and 1). The sentence expresses positive sentiment ('love', 'learning'), so the model is highly confident it is positive.

### Q5. [Easy] What is the difference between BERT and GPT in terms of attention direction?

*Hint:* One sees all words, the other sees only past words.

**Answer:** BERT uses bidirectional attention: every token can attend to every other token in the sequence, including tokens that come after it. GPT uses causal (autoregressive) attention: each token can only attend to tokens at the same or earlier positions. BERT sees the full context (ideal for understanding). GPT sees only the past (required for generation, since future tokens have not been generated yet).

BERT's bidirectional attention is implemented without any masking. GPT's causal attention uses a lower-triangular mask that blocks attention to future positions. This architectural choice is why BERT excels at understanding tasks and GPT excels at generation tasks.

### Q6. [Easy] What is the shape of attention weights?

```
# For a sequence of 10 tokens with d_model=512
# Attention(Q, K, V) = softmax(Q @ K^T / sqrt(d_k)) @ V
# What is the shape of the attention weight matrix?
```

*Hint:* Each token attends to every other token.

**Answer:** `(10, 10)`

The attention weight matrix has shape (seq_len, seq_len). Each row represents one token's attention distribution over all tokens. Q is (10, d_k), K^T is (d_k, 10), so Q @ K^T is (10, 10). After softmax, each row sums to 1.

### Q7. [Medium] Explain what self-attention computes for the sentence 'The cat sat on the mat'. What does the word 'sat' attend to?

*Hint:* Think about which words are most relevant to understanding 'sat'.

**Answer:** In self-attention for 'sat': the Query vector for 'sat' is compared against Key vectors for all 6 words. The attention scores (after softmax) determine how much each word contributes to the output representation of 'sat'. In a trained model, 'sat' would strongly attend to 'cat' (the subject -- who is sitting), 'on' (the spatial relationship), and 'mat' (the location). It would attend less to 'The' and 'the' (articles carry less information). The output for 'sat' is a weighted average of all Value vectors, with weights proportional to relevance.

Self-attention allows 'sat' to directly gather information from 'cat' and 'mat' in a single step, regardless of their distance. In an RNN, information from 'cat' would need to flow through 'sat' sequentially, potentially losing information.

### Q8. [Medium] Why does the attention formula divide by sqrt(d_k)?

*Hint:* What happens to dot products when vectors have many dimensions?

**Answer:** As the dimension d_k increases, the dot product of Q and K grows in magnitude (roughly proportional to d_k for random vectors). Large dot products cause softmax to produce extremely sharp distributions (very close to 0 or 1), which kills gradients during backpropagation. Dividing by sqrt(d_k) normalizes the dot products to have unit variance regardless of the dimension, keeping them in a range where softmax produces meaningful, non-saturated distributions. This ensures stable training.

Without scaling, a 512-dimensional dot product might produce values around 500, making softmax output essentially one-hot. With scaling (dividing by sqrt(512) = 22.6), values are around 22, producing a softer distribution that allows gradients to flow.

### Q9. [Medium] What is multi-head attention and why is it better than single-head attention?

*Hint:* Multiple attention heads capture different types of relationships.

**Answer:** Multi-head attention runs N parallel attention operations (heads), each with its own learned Q, K, V projection matrices. If d_model=512 and N=8, each head operates on 64 dimensions. The outputs are concatenated and linearly projected back to 512 dimensions. Benefits: (1) Different heads can specialize in different relationship types (syntax, semantics, position, coreference). (2) Multiple subspaces -- a single head can only represent one type of relationship per layer; multiple heads capture many simultaneously. (3) More stable training -- averaging over multiple heads reduces variance.

Research has shown that in trained models, different attention heads do specialize. Some heads track syntactic dependencies, others track named entities, and others capture positional patterns. Removing specific heads degrades specific capabilities.

### Q10. [Medium] What is the causal attention mask for a sequence of length 4?

```
import numpy as np
mask = np.tril(np.ones((4, 4)))
print(mask)
```

*Hint:* np.tril creates a lower triangular matrix.

**Answer:** `[[1, 0, 0, 0], [1, 1, 0, 0], [1, 1, 1, 0], [1, 1, 1, 1]]`

The causal mask is lower-triangular: token 0 sees only itself, token 1 sees tokens 0-1, token 2 sees tokens 0-2, token 3 sees all tokens 0-3. Zeros block attention to future positions. This is used in GPT-style decoder models to prevent looking ahead.

### Q11. [Medium] What is the difference between self-attention and cross-attention in the Transformer decoder?

*Hint:* Where do Q, K, V come from in each case?

**Answer:** In self-attention (decoder layer 1): Q, K, V all come from the decoder's own input (the previously generated tokens). This allows each decoder token to attend to all previous decoder tokens. In cross-attention (decoder layer 2): Q comes from the decoder, but K and V come from the encoder's output. This is how the decoder reads and uses the encoder's representation of the input. For translation, self-attention helps the decoder maintain coherent output, while cross-attention helps it align with the source language.

Cross-attention is the bridge between encoder and decoder. The decoder's query ('what do I need to generate next?') searches the encoder's keys and values ('what information is in the source?'). This is similar to how RNN encoder-decoder models use attention to align source and target.

### Q12. [Hard] How does BERT's pre-training work (Masked Language Modeling)?

*Hint:* BERT randomly masks some input tokens and learns to predict them.

**Answer:** BERT is pre-trained using Masked Language Modeling (MLM): 15% of input tokens are randomly selected, of which 80% are replaced with [MASK], 10% with a random word, and 10% left unchanged. The model must predict the original token for all selected positions. For 'The [MASK] sat on the mat', BERT uses bidirectional context (both 'The' and 'sat on the mat') to predict 'cat'. This forces BERT to build deep bidirectional representations. The second pre-training task is Next Sentence Prediction: given two sentences, predict if the second follows the first in the original text.

The 80/10/10 split for masking prevents the model from learning to only predict when it sees [MASK]. The random word replacement forces it to maintain representations for all positions. Pre-training on Wikipedia + BookCorpus (3.3 billion words) gives BERT broad language understanding.

### Q13. [Hard] Why can Transformers be trained much faster than RNNs on the same data?

*Hint:* Think about parallelism and GPU utilization.

**Answer:** RNNs process tokens sequentially: to compute h_t, you need h_(t-1), which needs h_(t-2), and so on. This creates a chain of dependencies that cannot be parallelized. For a sequence of 512 tokens, you need 512 sequential steps. Transformers compute all attention scores in parallel: every token's Q, K, V can be computed simultaneously. The matrix multiplication Q * K^T processes all token pairs at once. On a modern GPU with thousands of cores, this parallelism translates to massive speedups. A 512-token sequence that requires 512 sequential RNN steps can be processed in effectively O(1) depth with a Transformer (one parallel matrix multiply).

In practice, training BERT on 3.3 billion words took 4 days on 16 TPUs. Training a comparable LSTM model would take months. This speed advantage is what enabled the scaling of models to billions of parameters (GPT-3, GPT-4) -- something impossible with RNNs.

### Q14. [Hard] How many parameters does the attention mechanism have for one head?

```
# d_model = 512, num_heads = 8, d_k = d_v = d_model / num_heads = 64
# One attention head has:
# W_Q: d_model x d_k
# W_K: d_model x d_k
# W_V: d_model x d_v
# Total per head = ?
```

*Hint:* Three weight matrices, each mapping d_model to d_k.

**Answer:** Each head: W_Q = 512 x 64 = 32,768. W_K = 512 x 64 = 32,768. W_V = 512 x 64 = 32,768. Total per head: `98,304`. For all 8 heads: 786,432. Plus W_O (512 x 512 = 262,144). Grand total for multi-head attention: `1,048,576` (approximately 1M).

Multi-head attention is parameter-efficient because each head operates on d_model/num_heads dimensions. The total parameters across all heads equal what a single full-dimensional attention would need, plus the output projection W_O.

### Q15. [Hard] Why did the Transformer architecture replace RNNs for NLP? Give at least three technical reasons.

*Hint:* Think about parallelization, long-range dependencies, and gradient flow.

**Answer:** Three technical reasons: (1) Parallelization -- RNNs process tokens sequentially (O(n) depth). Transformers process all tokens in parallel (O(1) depth). This makes training on massive datasets practical. (2) Long-range dependencies -- RNN information must flow through O(n) steps to connect distant tokens, losing information. Transformer attention connects any two tokens in O(1) steps. (3) Gradient flow -- RNNs suffer from vanishing/exploding gradients over long sequences, even with LSTM. Transformers use residual connections and direct attention paths that provide O(1) gradient flow. Additionally: (4) Scalability -- Transformers scale better to massive model sizes (billions of parameters) because of efficient matrix operations on GPUs.

These advantages compound: parallelization enables larger datasets, which enable larger models, which learn better representations, which achieve state-of-the-art results. The Transformer created a positive feedback loop that drove the current AI revolution.

## Mixed Questions

### Q1. [Easy] What is the Hugging Face Transformers library?

*Hint:* It provides pre-trained Transformer models.

**Answer:** Hugging Face Transformers is an open-source library that provides a unified API for thousands of pre-trained Transformer models (BERT, GPT-2, T5, DistilBERT, etc.). It offers high-level pipelines for common tasks (sentiment analysis, NER, QA, text generation) and low-level access to tokenizers and models. It supports both PyTorch and TensorFlow. The Model Hub hosts over 500,000 pre-trained models that can be loaded with a single line of code.

Hugging Face democratized access to Transformer models. Before Hugging Face, using BERT required complex setup. Now, pipeline('sentiment-analysis') gives you a working sentiment classifier in one line.

### Q2. [Easy] What does softmax do to these scores?

```
import numpy as np
scores = np.array([2.0, 1.0, 0.5])
weights = np.exp(scores) / np.exp(scores).sum()
print(weights.round(3))
```

*Hint:* Softmax converts scores to probabilities that sum to 1.

**Answer:** `[0.659, 0.242, 0.099]` (approximately)

Softmax exponentiates each score and normalizes by the sum. Higher scores get larger weights. The largest score (2.0) gets the most weight (0.659). The weights sum to 1.0, forming a probability distribution. This is how attention converts raw similarity scores into weighted contributions.

### Q3. [Easy] What is the attention mask in Transformer models?

*Hint:* It tells the model which tokens are real and which are padding.

**Answer:** The attention mask is a binary tensor (0s and 1s) that tells the model which positions contain real tokens (1) and which are padding (0). When sequences are padded to the same length, the padding tokens should be ignored during attention computation. The attention mask ensures that padding positions receive zero attention weight. Without it, the model would compute attention over meaningless padding tokens, degrading performance.

Example: for texts of length [5, 3] padded to length 5, attention masks are [[1,1,1,1,1], [1,1,1,0,0]]. The second text has real tokens at positions 0-2 and padding at 3-4.

### Q4. [Medium] What models does each task require?

```
# Task 1: Classify if an email is spam or not
# Task 2: Generate a product description from keywords
# Task 3: Translate English to Hindi
# Which Transformer variant (BERT/GPT/T5) is best for each?
```

*Hint:* Classification needs understanding; generation needs autoregression; translation needs both.

**Answer:** Task 1 (Spam classification): **BERT** (encoder-only). Classification requires understanding the full email bidirectionally. Task 2 (Generate description): **GPT** (decoder-only). Text generation requires autoregressive generation (producing one token at a time). Task 3 (Translation): **T5** (encoder-decoder). Translation has a distinct input (English) and output (Hindi), fitting the encoder-decoder paradigm.

The rule: understanding tasks -> BERT. Generation tasks -> GPT. Input-to-output transformation tasks -> T5. In practice, modern large language models (GPT-4, Claude) can handle all three types, but for specialized, efficient solutions, the right architecture matters.

### Q5. [Medium] What are residual connections in the Transformer and why are they important?

*Hint:* Similar to skip connections in ResNet.

**Answer:** Residual connections add the input of a sub-layer to its output: output = LayerNorm(x + SubLayer(x)). In the Transformer, each self-attention layer and each feed-forward layer has a residual connection. They are important because: (1) They allow gradients to flow directly through the addition, preventing vanishing gradients in deep networks. (2) They make it easier for the network to learn the identity function (if SubLayer(x) = 0, the output is just x). (3) They stabilize training, especially in very deep models (12+ layers). This is the same principle as ResNet skip connections.

Without residual connections, a 12-layer Transformer would be very difficult to train. Each layer would need to learn a complete transformation. With residual connections, each layer only needs to learn a small modification (residual) to the input, which is much easier to optimize.

### Q6. [Medium] What is wrong with this Hugging Face code?

```
from transformers import pipeline
classifier = pipeline('sentiment-analysis')
texts = ["Great movie", "Bad film", "Okay"]
results = classifier(texts[0], texts[1], texts[2])  # Wrong way to pass multiple texts
```

*Hint:* Pipeline expects a list of texts, not separate arguments.

**Answer:** The pipeline expects a single text or a list of texts, not multiple arguments. The correct way is: `results = classifier(texts)` or `results = classifier(["Great movie", "Bad film", "Okay"])`. Passing texts as separate positional arguments may cause unexpected behavior or an error.

Hugging Face pipeline's __call__ method accepts: a single string, a list of strings, or a list of lists. It does not accept multiple string arguments. Always pass multiple texts as a list.

### Q7. [Medium] What learning rate should be used for fine-tuning a pre-trained Transformer, and why?

*Hint:* Much lower than training from scratch.

**Answer:** The standard fine-tuning learning rate for Transformers is 2e-5 to 5e-5 (0.00002 to 0.00005). This is 10-100x smaller than a typical training-from-scratch learning rate (1e-3). The reason: pre-trained weights encode knowledge from billions of tokens. A high learning rate would cause large weight updates that destroy this knowledge (catastrophic forgetting). The low learning rate makes small adjustments that adapt the model to the new task while preserving its pre-trained understanding.

Some advanced techniques use different learning rates for different layers: lower rates for early layers (which capture general knowledge) and slightly higher rates for later layers (which are more task-specific). This is called discriminative fine-tuning.

### Q8. [Medium] How many attention weights are computed in total for a Transformer with 6 encoder layers, 8 heads each, processing a sequence of 100 tokens?

*Hint:* Each head in each layer computes a full attention matrix.

**Answer:** Each head computes a 100 x 100 attention matrix = 10,000 weights. With 8 heads per layer: 8 x 10,000 = 80,000 per layer. With 6 layers: 6 x 80,000 = `480,000` attention weights total.

The computational cost of attention is O(n^2 * d) per head per layer, where n is sequence length. For 100 tokens, each head computes 10,000 similarity scores. This quadratic scaling is why Transformers become expensive for very long sequences (1000+ tokens).

### Q9. [Hard] What is the computational complexity of self-attention and why does it become a problem for long sequences?

*Hint:* The attention matrix is seq_len x seq_len.

**Answer:** Self-attention has O(n^2 * d) time and O(n^2) memory complexity, where n is sequence length and d is the model dimension. The attention matrix Q * K^T has shape (n, n), requiring n^2 computations. For n=512, this is ~262K entries -- manageable. For n=4096, it is ~16.7M entries. For n=32768, it is ~1 billion entries. This quadratic scaling makes standard Transformers impractical for very long documents, books, or high-resolution images. Solutions include efficient attention variants: Sparse Attention (only attend to nearby tokens), Linear Attention (approximating softmax), Flash Attention (optimized GPU memory access), and Sliding Window Attention (fixed-size local windows).

This is the primary limitation of Transformers. GPT models have context windows (4K, 8K, 32K, 128K tokens) partly because of this quadratic cost. Research on efficient attention is one of the most active areas in AI.

### Q10. [Hard] Vikram wants to build a chatbot for customer support. Should he use BERT, GPT, or T5? Explain your reasoning.

*Hint:* A chatbot needs to both understand questions and generate responses.

**Answer:** Vikram should use a GPT-style (decoder-only) model or a T5-style (encoder-decoder) model. BERT alone is not suitable because it cannot generate text (encoder-only). GPT is the natural choice for chatbots because: (1) it generates text autoregressively (one token at a time), which is exactly what conversation requires, (2) modern GPT-based models (like ChatGPT) are specifically designed for dialogue, and (3) the causal attention pattern naturally handles conversation context. T5 could also work by framing each conversation turn as a text-to-text task (input: conversation history, output: response). In practice, the best approach is to fine-tune a pre-trained conversational model (e.g., DialoGPT, Llama, or Mistral) on Vikram's customer support data.

For production chatbots in 2025-2026, the standard approach is to use a pre-trained large language model (GPT-4, Claude, Gemini, or open-source models like Llama/Mistral) and customize it with system prompts, fine-tuning, or retrieval-augmented generation (RAG) on company-specific knowledge.

### Q11. [Hard] Explain how the Transformer encoder and decoder interact during machine translation.

*Hint:* The encoder processes the source language, the decoder generates the target language using cross-attention.

**Answer:** For translating 'I love coding' to Hindi: (1) The encoder processes the entire English sentence in parallel. Each encoder layer applies self-attention and feed-forward operations. The final encoder output is a rich representation of the source sentence. (2) The decoder generates Hindi tokens one at a time. At each step, it applies: (a) Masked self-attention over previously generated Hindi tokens (cannot see future tokens). (b) Cross-attention where Q comes from the decoder (current Hindi state) and K, V come from the encoder output (English representation). This allows the decoder to 'look at' the relevant English words while generating each Hindi word. (c) Feed-forward network. (3) The decoder predicts 'mujhe', then uses [mujhe] to predict 'coding', then [mujhe, coding] to predict 'pasand', and so on until it generates an end token.

Cross-attention is the key mechanism connecting encoder and decoder. When generating 'mujhe' (Hindi for 'I/me'), the decoder's cross-attention would focus on 'I' in the encoder output. When generating 'coding', it would focus on 'coding' in the encoder output. This alignment happens automatically through learned attention weights.

### Q12. [Hard] What makes BERT's tokenizer different from simple word splitting? What is WordPiece tokenization?

*Hint:* WordPiece splits words into subword units.

**Answer:** BERT uses WordPiece tokenization, which splits words into subword units from a fixed vocabulary (typically 30,000 tokens). Common words remain whole ('the', 'and', 'cat'), but rare or unknown words are split into known subwords. Example: 'preprocessing' might become ['pre', '##process', '##ing'], where ## indicates continuation of a previous token. 'Unbelievable' might become ['un', '##bel', '##ie', '##va', '##ble']. Benefits: (1) Fixed vocabulary handles any input (no out-of-vocabulary problem). (2) Shared subwords capture morphology ('preprocessing', 'postprocessing' both contain 'processing'). (3) Compact vocabulary -- 30K tokens can represent any English text. Limitation: one word may become multiple tokens, so token-level predictions do not align 1-to-1 with words.

GPT uses Byte Pair Encoding (BPE), a similar subword tokenization approach. Both build a vocabulary of common subwords from a large corpus. The key insight: you need a finite vocabulary, but human language has an infinite number of possible words. Subword tokenization solves this elegantly.

## Multiple Choice Questions

### Q1. [Easy] What is the key innovation of the Transformer architecture?

**Answer:** C

**C is correct.** The Transformer replaced recurrence (RNNs) with attention mechanisms, enabling parallel processing and better long-range dependencies. This is the key insight of 'Attention Is All You Need'.

### Q2. [Easy] In the attention mechanism, what does the Query (Q) represent?

**Answer:** B

**B is correct.** The Query represents what the current token is searching for. It is compared against Keys to determine relevance, then the corresponding Values are weighted and summed.

### Q3. [Easy] Which Transformer variant is BERT?

**Answer:** B

**B is correct.** BERT uses only the encoder with bidirectional attention. It processes the full input context simultaneously, making it ideal for understanding tasks (classification, NER, QA).

### Q4. [Easy] What does GPT stand for?

**Answer:** B

**B is correct.** GPT = Generative Pre-trained Transformer. It is pre-trained on next-token prediction and excels at generating text.

### Q5. [Easy] Why is positional encoding needed in Transformers?

**Answer:** B

**B is correct.** Transformers process all tokens in parallel with no recurrence, so they have no inherent sense of word order. Positional encoding adds position information to the input embeddings.

### Q6. [Medium] What is the attention formula?

**Answer:** B

**B is correct.** Scaled dot-product attention: compute Q*K^T (similarity), scale by sqrt(d_k), apply softmax (normalize to probabilities), multiply by V (weighted sum of values).

### Q7. [Medium] What does multi-head attention achieve that single-head attention cannot?

**Answer:** B

**B is correct.** Each attention head can specialize in a different type of relationship (syntax, semantics, position). Single-head attention can only capture one type of relationship per layer.

### Q8. [Medium] What is causal masking in GPT?

**Answer:** B

**B is correct.** Causal masking uses a lower-triangular attention mask so each token can only attend to itself and previous tokens. This prevents 'cheating' during generation -- the model cannot look at tokens it has not generated yet.

### Q9. [Medium] What is the recommended learning rate range for fine-tuning a pre-trained Transformer?

**Answer:** C

**C is correct.** Fine-tuning uses a very low learning rate (1e-5 to 5e-5) to make small adjustments to pre-trained weights without destroying the learned knowledge. Higher rates cause catastrophic forgetting.

### Q10. [Medium] Which component connects the encoder and decoder in the original Transformer?

**Answer:** C

**C is correct.** Cross-attention in the decoder takes Q from the decoder and K, V from the encoder output. This allows the decoder to read and use the encoder's representation of the input.

### Q11. [Hard] What is the computational complexity of self-attention with respect to sequence length n?

**Answer:** C

**C is correct.** Self-attention computes an n x n attention matrix (Q * K^T), which requires O(n^2) operations. This quadratic scaling is the main limitation for processing very long sequences.

### Q12. [Hard] How does BERT's Masked Language Modeling work?

**Answer:** B

**B is correct.** BERT masks 15% of input tokens (80% replaced with [MASK], 10% with random word, 10% unchanged) and predicts the originals. The bidirectional context (both left and right) is used, which is why BERT builds deep bidirectional representations.

### Q13. [Hard] Why does dividing by sqrt(d_k) in attention prevent training instability?

**Answer:** B

**B is correct.** Without scaling, large-dimensional dot products produce very large values. Softmax on large values outputs near-0 or near-1, which has near-zero gradients (saturation). Scaling by sqrt(d_k) keeps values in a range where softmax produces meaningful distributions with healthy gradients.

### Q14. [Hard] What is the main advantage of Transformer over LSTM for NLP tasks?

**Answer:** C

**C is correct.** Transformers process all tokens in parallel (vs sequential for LSTM) and connect any two tokens in O(1) path length through attention (vs O(n) for LSTM). This enables faster training and better modeling of long-range dependencies.

### Q15. [Easy] What year was the original Transformer paper published?

**Answer:** B

**B is correct.** 'Attention Is All You Need' was published in 2017 by Vaswani et al. at Google. It introduced the Transformer architecture that now powers virtually all state-of-the-art AI systems.

### Q16. [Easy] What does the softmax function do in attention?

**Answer:** A

**A is correct.** Softmax converts raw attention scores into probabilities between 0 and 1 that sum to 1. Higher scores get larger probabilities. This determines how much each position contributes to the output.

### Q17. [Medium] What is the role of layer normalization in the Transformer?

**Answer:** B

**B is correct.** Layer normalization normalizes the activations of each layer to have zero mean and unit variance. This stabilizes training, especially in deep models (12+ layers), by preventing activation values from growing or shrinking uncontrollably.

### Q18. [Medium] What is the T5 model's approach to NLP tasks?

**Answer:** B

**B is correct.** T5 (Text-to-Text Transfer Transformer) frames every NLP task as text-to-text. For classification: input 'classify: This movie is great' -> output 'positive'. For translation: input 'translate: I love AI' -> output 'mujhe AI pasand hai'. This unified framework simplifies multi-task learning.

### Q19. [Hard] How does the feed-forward network in each Transformer layer work?

**Answer:** B

**B is correct.** The feed-forward network (FFN) consists of two linear transformations with a ReLU in between: FFN(x) = ReLU(x * W1 + b1) * W2 + b2. Typically W1 expands from d_model to 4*d_model, and W2 projects back to d_model. This provides non-linear transformation capacity.

### Q20. [Easy] Which of these tasks can Hugging Face pipeline() perform?

**Answer:** B

**B is correct.** Hugging Face pipeline supports many tasks: sentiment-analysis, ner, question-answering, text-generation, summarization, translation, zero-shot-classification, fill-mask, and more. Each task uses an appropriate pre-trained model.

### Q21. [Medium] What is zero-shot classification?

**Answer:** A

**A is correct.** Zero-shot classification uses a pre-trained language model to classify text into arbitrary categories without any task-specific training. The model leverages its general language understanding to match text to candidate labels provided at inference time.

### Q22. [Hard] What is the difference between pre-training and fine-tuning a Transformer?

**Answer:** B

**B is correct.** Pre-training (e.g., masked language modeling for BERT, next token prediction for GPT) teaches the model general language understanding from billions of tokens of unlabeled text. Fine-tuning then adapts this general knowledge to a specific downstream task (sentiment analysis, NER) using a relatively small labeled dataset.

### Q23. [Medium] In a Transformer with d_model=512 and 8 attention heads, what is the dimension per head?

**Answer:** B

**B is correct.** Each head operates on d_model / num_heads = 512 / 8 = 64 dimensions. The 8 heads each produce 64-dimensional outputs, which are concatenated back to 512 dimensions.

### Q24. [Hard] Why is WordPiece tokenization used instead of word-level tokenization in BERT?

**Answer:** B

**B is correct.** WordPiece tokenization splits rare or unknown words into known subword units from a fixed vocabulary (e.g., 30K tokens). 'preprocessing' -> ['pre', '##process', '##ing']. This handles any input text, shares morphological information between related words, and eliminates the out-of-vocabulary problem.

### Q25. [Easy] Which AI models are based on the Transformer architecture?

**Answer:** C

**C is correct.** The Transformer architecture underpins virtually every major AI model since 2018: BERT (Google), GPT series (OpenAI), T5 (Google), ChatGPT, Claude (Anthropic), Gemini (Google), Vision Transformer, and many more. It is the foundation of modern AI.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/transformers-and-attention/*
