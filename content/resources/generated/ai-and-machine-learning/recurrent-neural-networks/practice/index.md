---
title: "Practice: Recurrent Neural Networks (RNN) and LSTM"
description: "53 practice problems for Recurrent Neural Networks (RNN) and LSTM in AI and Machine Learning"
slug: recurrent-neural-networks-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/recurrent-neural-networks/practice/
category: "AI and Machine Learning"
---
# Practice: Recurrent Neural Networks (RNN) and LSTM

**Total questions:** 53

## Topic-Specific Questions

### Q1. [Easy] What type of data are RNNs specifically designed to process?

*Hint:* Think about data where order matters.

**Answer:** RNNs are designed for **sequential data** -- data where the order of elements matters. Examples: text (sequences of words), time series (sequences of measurements), audio (sequences of sound samples), video (sequences of frames), DNA (sequences of nucleotides). The key property is that the meaning depends on the order.

A Dense network treats inputs independently. A CNN exploits spatial structure. An RNN exploits temporal/sequential structure. For the sentence 'dog bites man' vs 'man bites dog', the words are the same but the meaning changes based on order -- only an RNN can capture this.

### Q2. [Easy] What is the hidden state in an RNN?

*Hint:* It is the RNN's memory of what it has seen so far.

**Answer:** The hidden state is a vector (e.g., 128 dimensions) that represents the RNN's memory of the sequence seen so far. At each time step, the hidden state is updated based on the current input and the previous hidden state. After processing the full sequence, the final hidden state encodes a compressed summary of the entire sequence. It is the mechanism by which information flows from earlier time steps to later ones.

For the sentence 'I love coding': after processing 'I', h1 encodes 'I'. After 'love', h2 encodes 'I love'. After 'coding', h3 encodes 'I love coding'. The hidden state accumulates context.

### Q3. [Easy] What is the output shape?

```
model = tf.keras.Sequential([
    Embedding(10000, 64, input_length=100),
    LSTM(128),
    Dense(1, activation='sigmoid')
])
print(model.output_shape)
```

*Hint:* The last Dense layer has 1 unit with sigmoid.

**Answer:** `(None, 1)`

The Embedding layer outputs (None, 100, 64). The LSTM with return_sequences=False (default) outputs only the last hidden state: (None, 128). Dense(1) maps to (None, 1). Sigmoid squashes to [0, 1] for binary classification.

### Q4. [Easy] What is the output shape of Bidirectional(LSTM(64))?

```
layer = Bidirectional(LSTM(64))
# Input: (batch, 50, 32)
# Output: ?
```

*Hint:* Bidirectional concatenates forward and backward outputs.

**Answer:** `(None, 128)`

The forward LSTM produces a 64-dimensional output. The backward LSTM produces another 64-dimensional output. Bidirectional concatenates them: 64 + 64 = 128. The output shape is (None, 128).

### Q5. [Easy] What does pad_sequences produce?

```
from tensorflow.keras.preprocessing.sequence import pad_sequences

seqs = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
padded = pad_sequences(seqs, maxlen=4, padding='post')
print(padded)
```

*Hint:* padding='post' adds zeros at the end. maxlen=4 limits the length.

**Answer:** `[[1, 2, 3, 0], [4, 5, 0, 0], [6, 7, 8, 9]]`

Sequences shorter than maxlen get zeros appended (padding='post'). Sequence [1,2,3] becomes [1,2,3,0]. Sequence [4,5] becomes [4,5,0,0]. Sequence [6,7,8,9] already has length 4, so no change.

### Q6. [Easy] What does the Embedding layer do?

*Hint:* It converts integer word indices to dense vectors.

**Answer:** The Embedding layer converts integer word indices into dense floating-point vectors. For example, Embedding(10000, 64) creates a lookup table of 10000 words, each mapped to a 64-dimensional vector. When the input is [42, 315, 18], the layer looks up the 64-dim vector for each index. These vectors are learned during training, so semantically similar words end up with similar vectors. It replaces the need for one-hot encoding, which would be sparse and high-dimensional.

Without Embedding: word 42 would be a 10000-dimensional one-hot vector (all zeros except position 42). With Embedding: word 42 is a compact 64-dimensional vector. Embedding is more memory-efficient, provides richer representations, and captures word relationships.

### Q7. [Medium] What is the output shape at each layer?

```
model = tf.keras.Sequential([
    Embedding(5000, 32, input_length=50),
    LSTM(64, return_sequences=True),
    LSTM(32),
    Dense(5, activation='softmax')
])
for layer in model.layers:
    print(f"{layer.name}: {layer.output_shape}")
```

*Hint:* return_sequences=True returns 3D output; False returns 2D.

**Answer:** `embedding: (None, 50, 32)`
`lstm: (None, 50, 64)`
`lstm_1: (None, 32)`
`dense: (None, 5)`

Embedding: maps 50 integers to 32-dim vectors -> (None, 50, 32). First LSTM with return_sequences=True: outputs at every step -> (None, 50, 64). Second LSTM with return_sequences=False: outputs only final state -> (None, 32). Dense: 5-class output -> (None, 5).

### Q8. [Medium] Explain the vanishing gradient problem in vanilla RNNs. Why does it happen and what is its practical effect?

*Hint:* Gradients are multiplied by the weight matrix at each time step during backpropagation.

**Answer:** During backpropagation through time, gradients flow backward from the output through each time step. At each step, the gradient is multiplied by the weight matrix W_hh. If the largest eigenvalue of W_hh is less than 1, these repeated multiplications cause the gradient to shrink exponentially -- after N steps, the gradient is roughly proportional to (eigenvalue)^N, which approaches zero. Practical effect: the network cannot learn dependencies between events more than ~10-20 steps apart. In a 500-word review, the network cannot connect information from the beginning to the end.

It is like the telephone game -- information degrades as it passes through many people. Similarly, gradient information degrades as it flows backward through many time steps. LSTM solves this by providing an 'express highway' (the cell state) where gradients flow without repeated multiplication.

### Q9. [Medium] What are the three gates in an LSTM? Briefly explain what each does.

*Hint:* Forget, Input, and Output gates.

**Answer:** **Forget Gate**: Examines the previous hidden state and current input, outputs a value between 0 and 1 for each cell state element. Decides what information to discard from the cell state (0 = forget completely, 1 = keep fully). **Input Gate**: Decides what new information to store in the cell state. A sigmoid determines which values to update. A tanh creates candidate new values. Together they add new information to memory. **Output Gate**: Decides what to output from the cell state. A sigmoid determines which parts of the cell state to expose as the hidden state output. The cell state is the internal memory; the output gate controls what the outside world sees.

Think of LSTM like a notebook: the forget gate erases old notes, the input gate writes new notes, and the output gate decides which notes to share when someone asks a question. The cell state is the notebook itself.

### Q10. [Medium] How many parameters does this LSTM layer have?

```
layer = LSTM(32, input_shape=(10, 16))
layer.build(input_shape=(None, 10, 16))
print(layer.count_params())
```

*Hint:* LSTM has 4 gates, each with weights for input and hidden state, plus biases.

**Answer:** `6272`

LSTM has 4 gates (forget, input, candidate, output). Each gate has: input weights (input_dim x units) + hidden weights (units x units) + biases (units). For input_dim=16, units=32: params per gate = (16*32) + (32*32) + 32 = 512 + 1024 + 32 = 1568. Total: 4 * 1568 = 6272. Formula: 4 * ((input_dim + units) * units + units) = 4 * ((16+32)*32 + 32) = 4 * 1568 = 6272.

### Q11. [Medium] When should you use a Bidirectional RNN vs a unidirectional RNN?

*Hint:* It depends on whether future context is available.

**Answer:** Use **Bidirectional** when the complete sequence is available and future context helps: text classification, sentiment analysis, named entity recognition, question answering. The backward pass provides information from later in the sequence that helps understand earlier tokens. Use **Unidirectional** when future data is not available: real-time prediction (next word prediction), time series forecasting (predicting future values), speech recognition (processing audio as it arrives), any streaming/online application.

For text classification ('The movie was not bad'), the word 'bad' helps understand that 'not' is a negation. A backward RNN sees 'bad' first, so bidirectional captures this. But for predicting tomorrow's stock price, you only have data up to today -- no future information exists.

### Q12. [Hard] What is wrong with this code, and what error will it produce?

```
model = tf.keras.Sequential([
    Embedding(10000, 64),
    LSTM(64),                          # return_sequences=False
    LSTM(32, return_sequences=True),   # Expects 3D input
    Dense(1, activation='sigmoid')
])
```

*Hint:* The first LSTM outputs 2D but the second expects 3D.

**Answer:** The first LSTM has `return_sequences=False` (default), so it outputs 2D shape (batch, 64). The second LSTM expects 3D input (batch, timesteps, features). This raises: `ValueError: Input 0 of layer 'lstm_1' is incompatible with the layer: expected ndim=3, found ndim=2`. Fix: set `return_sequences=True` on the first LSTM.

When stacking LSTM layers, all layers except the last must have return_sequences=True. The sequence length information is lost when return_sequences=False, and subsequent LSTM layers cannot process non-sequential input.

### Q13. [Hard] How does GRU differ from LSTM? What are the trade-offs?

*Hint:* GRU has 2 gates instead of 3 and no separate cell state.

**Answer:** LSTM has 3 gates (forget, input, output) and a separate cell state. GRU has 2 gates (update, reset) and no separate cell state -- it merges cell state and hidden state. The update gate in GRU combines the roles of LSTM's forget and input gates. Trade-offs: GRU has ~25% fewer parameters (faster training, less memory), is simpler to implement and understand, and performs comparably to LSTM on most tasks. LSTM may have an edge on tasks requiring very long-range dependencies because its separate cell state provides a more stable memory pathway. In practice, the performance difference is usually small.

LSTM params per gate unit: 4 * ((input + hidden) * hidden + hidden). GRU: 3 * ((input + hidden) * hidden + hidden). GRU is 3/4 the parameters of LSTM. For most practical applications, try both and pick whichever gives better validation performance.

### Q14. [Hard] What is the total number of trainable parameters?

```
model = tf.keras.Sequential([
    Embedding(5000, 32, input_length=100),
    Bidirectional(LSTM(64)),
    Dense(1, activation='sigmoid')
])
print(model.count_params())
```

*Hint:* Embedding: vocab * dim. Bidirectional LSTM: 2 * LSTM params. Dense: input * output + bias.

**Answer:** Embedding: 5000 * 32 = 160,000. BiLSTM: 2 * 4 * ((32+64)*64 + 64) = 2 * 4 * (6144+64) = 2 * 24,832 = 49,664. Dense: (128*1) + 1 = 129. Total: `209,793`.

The Embedding layer creates a 5000x32 lookup table (160,000 params). Bidirectional wraps two LSTMs (forward and backward), each with input_dim=32, units=64. Each LSTM: 4 * ((32+64)*64 + 64) = 4 * 6208 = 24,832. Two LSTMs: 49,664. Dense receives 128 (64+64 from bidirectional) and outputs 1: 129. Total: 160,000 + 49,664 + 129 = 209,793.

### Q15. [Hard] Why does the cell state update equation C_t = f_t * C_(t-1) + i_t * C_candidate solve the vanishing gradient problem?

*Hint:* Compare multiplication by a weight matrix (vanilla RNN) vs element-wise multiplication and addition (LSTM).

**Answer:** In a vanilla RNN, the hidden state is updated by multiplying by the weight matrix W_hh, which causes gradients to shrink (or explode) exponentially. In LSTM, the cell state is updated through element-wise multiplication (f_t * C_(t-1)) and addition (+ i_t * C_candidate). The forget gate f_t is bounded between 0 and 1 by sigmoid. When f_t is close to 1, the gradient flows through almost unchanged (multiplying by ~1 preserves it). The addition operation has a gradient of 1, meaning it does not cause the gradient to shrink at all. Together, this creates a gradient highway where information (and gradients) can flow across many time steps without vanishing.

Mathematically, dC_t/dC_(t-1) = f_t (from the multiplication). If the forget gate learns to stay close to 1, the gradient passes through with minimal decay. In vanilla RNN, dh_t/dh_(t-1) involves the full weight matrix, which typically has eigenvalues that cause exponential decay.

## Mixed Questions

### Q1. [Easy] What is the shape of the Embedding output?

```
layer = Embedding(10000, 64, input_length=50)
# Input: (batch, 50) -- integer indices
# Output: ?
```

*Hint:* Each integer is replaced by a 64-dimensional vector.

**Answer:** `(None, 50, 64)`

The Embedding layer maps each of the 50 integers to a 64-dimensional vector. Input (batch, 50) becomes output (batch, 50, 64). This is the 3D format that RNN layers expect.

### Q2. [Easy] What does `num_words=10000` mean in Tokenizer?

```
tokenizer = Tokenizer(num_words=10000, oov_token='')
tokenizer.fit_on_texts(texts)
```

*Hint:* It limits the vocabulary size.

**Answer:** It keeps only the 10,000 most frequent words in the vocabulary. Words that are not in the top 10,000 are replaced with the OOV (out-of-vocabulary) token. This limits the vocabulary size, which reduces the Embedding layer size and prevents rare words from adding noise.

If your corpus has 50,000 unique words, only the top 10,000 are kept. The rest are replaced with '' (which gets its own integer index). This is a practical trade-off between vocabulary coverage and model size.

### Q3. [Easy] Why do we normalize time series data before feeding it to an LSTM?

*Hint:* Similar to why we normalize images for CNNs.

**Answer:** LSTM gates use sigmoid and tanh activations, which are sensitive to input scale. Large input values cause saturation (sigmoid outputs near 0 or 1, tanh outputs near -1 or 1), leading to vanishing gradients. Normalized data (mean=0, std=1 or range [0,1]) keeps values in a range where activations and gradients are most effective. This leads to faster convergence and better performance. After prediction, denormalize the output to get values in the original scale.

If temperature is 300K and stock price is 0.05, the network would pay all attention to temperature due to its larger magnitude. Normalization ensures all features contribute equally to learning.

### Q4. [Medium] What does `oov_token=''` handle?

```
tokenizer = Tokenizer(num_words=100, oov_token='')
tokenizer.fit_on_texts(["I love coding"])
new_seq = tokenizer.texts_to_sequences(["I love dancing"])
print(new_seq)
```

*Hint:* 'dancing' was not in the training texts.

**Answer:** `[[2, 3, 1]]` where 1 is the OOV token index (replacing 'dancing').

The tokenizer learned 'I'=2, 'love'=3, 'coding'=4 from the training text. '' is assigned index 1. When encountering 'dancing' (not in vocabulary), it is replaced with the OOV index 1. Without oov_token, unknown words would simply be dropped.

### Q5. [Medium] How does the sliding window technique work for time series?

```
import numpy as np
data = np.array([10, 20, 30, 40, 50, 60, 70])
SEQ_LEN = 3

X, y = [], []
for i in range(len(data) - SEQ_LEN):
    X.append(data[i:i+SEQ_LEN])
    y.append(data[i+SEQ_LEN])

print(f"X: {np.array(X)}")
print(f"y: {np.array(y)}")
```

*Hint:* Each window of 3 values predicts the next value.

**Answer:** `X: [[10, 20, 30], [20, 30, 40], [30, 40, 50], [40, 50, 60]]`
`y: [40, 50, 60, 70]`

The sliding window creates input-output pairs: [10,20,30]->40, [20,30,40]->50, [30,40,50]->60, [40,50,60]->70. Each window of SEQ_LEN values is used to predict the next value. This is the standard approach for time series forecasting with RNNs.

### Q6. [Medium] Why does LSTM have approximately 4x the parameters of SimpleRNN with the same number of units?

*Hint:* Count the gates in LSTM.

**Answer:** LSTM has 4 sets of weight matrices (forget gate, input gate, candidate cell, output gate), while SimpleRNN has only 1 set. Each gate in LSTM has its own input-to-hidden weights, hidden-to-hidden weights, and biases -- the same three components as a full SimpleRNN. So LSTM with 64 units is effectively 4 SimpleRNNs with 64 units each, resulting in approximately 4x the parameters.

SimpleRNN: (input_dim * units) + (units * units) + units. LSTM: 4 * ((input_dim * units) + (units * units) + units). The factor of 4 comes from the 4 gate/cell computations: forget gate, input gate, cell candidate, and output gate.

### Q7. [Medium] What does truncating='post' do in pad_sequences?

```
seqs = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
padded = pad_sequences(seqs, maxlen=5, truncating='post')
print(padded)
```

*Hint:* The sequence is too long and must be truncated to maxlen.

**Answer:** `[[1, 2, 3, 4, 5]]`

The sequence has 10 elements but maxlen is 5. truncating='post' removes elements from the end, keeping the first 5. truncating='pre' (default) would remove from the beginning, keeping [6, 7, 8, 9, 10]. For many NLP tasks, keeping the beginning of text is preferred.

### Q8. [Medium] What output shape does return_sequences produce?

```
import tensorflow as tf

# return_sequences=False (default)
layer_false = tf.keras.layers.LSTM(64)
out_false = layer_false(tf.random.normal((8, 20, 32)))
print(f"False: {out_false.shape}")

# return_sequences=True
layer_true = tf.keras.layers.LSTM(64, return_sequences=True)
out_true = layer_true(tf.random.normal((8, 20, 32)))
print(f"True: {out_true.shape}")
```

*Hint:* False returns the last state only. True returns state at every step.

**Answer:** `False: (8, 64)`
`True: (8, 20, 64)`

With return_sequences=False: only the last hidden state is returned -> (batch=8, units=64). With return_sequences=True: hidden states at all 20 time steps are returned -> (batch=8, timesteps=20, units=64).

### Q9. [Hard] Nikhil built an LSTM for sentiment analysis. Training accuracy is 95% but test accuracy is 72%. What should he do?

*Hint:* Large gap between train and test indicates overfitting.

**Answer:** The model is overfitting. Nikhil should: (1) Add Dropout layers between LSTM and Dense layers (0.3-0.5). (2) Add recurrent_dropout parameter to LSTM (e.g., LSTM(64, dropout=0.3, recurrent_dropout=0.2)) to apply dropout to both input and recurrent connections. (3) Reduce model complexity (fewer units, fewer layers). (4) Add L2 regularization to Dense layers. (5) Use a pre-trained embedding (Word2Vec, GloVe) instead of learning from scratch, which requires less data. (6) Reduce the embedding dimension. (7) Consider using a smaller vocabulary (num_words). (8) Ensure the dataset is large enough and not imbalanced.

Overfitting in NLP often comes from the Embedding layer learning task-specific representations that do not generalize. Using pre-trained embeddings and aggressive dropout are the most effective remedies.

### Q10. [Hard] Why is the cell state update in LSTM based on addition (C_t = f * C_old + i * C_new) rather than concatenation or other operations?

*Hint:* Think about gradient flow during backpropagation.

**Answer:** Addition has a gradient of 1 during backpropagation. When computing dLoss/dC_(t-1), the addition term contributes a gradient that flows through unchanged. This is the key property that prevents vanishing gradients. If concatenation were used, you would need a weight matrix to combine the concatenated values, reintroducing the multiplicative gradient problem. If a different non-linear operation were used, it would compress or distort the gradient. The element-wise multiplication by f_t (forget gate) is bounded [0,1], so it can selectively preserve gradients. Addition plus gated multiplication is the minimal mechanism that provides both selective memory and gradient preservation.

This is the core mathematical insight of LSTM. The cell state acts like a conveyor belt -- information can flow along it with minimal modification. The gates control what gets added to and removed from the belt, but the belt itself (addition) preserves gradient flow.

### Q11. [Hard] How many parameters does GRU(64, input_shape=(20, 32)) have?

*Hint:* GRU has 3 weight matrices (update, reset, candidate) instead of LSTM's 4.

**Answer:** `18,816`

GRU has 3 sets of weights (update gate, reset gate, candidate hidden state). Each set: (input_dim * units) + (units * units) + units = (32*64) + (64*64) + 64 = 2048 + 4096 + 64 = 6208. Total: 3 * 6208 = 18,624. (Note: exact count is 3 * (input_dim + units + 1) * units = 3 * (32 + 64 + 1) * 64 = 3 * 97 * 64 = 18,624 with bias counting; implementations may vary slightly.)

### Q12. [Hard] Ananya has a dataset where each sample is a patient's vital signs recorded every hour for 48 hours. She wants to predict whether the patient will need ICU admission. How should she structure the LSTM input and output?

*Hint:* Think about the input shape: (batch, timesteps, features) and the classification output.

**Answer:** Input shape should be (batch_size, 48, num_features) where 48 is the number of time steps (hours) and num_features is the number of vital signs (e.g., heart rate, blood pressure, temperature = 3 features). She should normalize each feature independently. The model should end with LSTM(units, return_sequences=False) to get one representation per patient, followed by Dense layers with sigmoid output for binary classification (ICU yes/no). Use binary_crossentropy loss. If data is imbalanced (few ICU admissions), use class_weight in model.fit() and evaluate with precision/recall rather than just accuracy.

This is a many-to-one architecture: 48 time steps of input produce a single binary prediction. return_sequences=False on the final LSTM collapses the temporal dimension into a single summary vector that the Dense layer can classify.

### Q13. [Hard] What is the effective vocabulary size of this Embedding layer?

```
tokenizer = Tokenizer(num_words=5000, oov_token='')
tokenizer.fit_on_texts(train_texts)

model = tf.keras.Sequential([
    Embedding(input_dim=5000, output_dim=64),
    ...
])

# Is input_dim=5000 correct?
```

*Hint:* With oov_token, the actual vocabulary includes index 0 (padding) and index 1 (OOV).

**Answer:** This may cause an issue. With `oov_token=''`, the OOV token gets index 1, and word indices start from 2. `num_words=5000` means indices 0-4999 are used. But because index 0 is reserved for padding and index 1 for OOV, there are effectively 4998 real words. The Embedding `input_dim` should be at least 5001 to safely handle all indices. Using 5000 could cause an index-out-of-range error for the 5000th word.

A common subtle bug. Tokenizer with num_words=5000 uses indices 0-4999, but with oov_token, some implementations may produce index 5000 for certain words. Setting input_dim to num_words + 1 or checking the actual max index is safer.

## Multiple Choice Questions

### Q1. [Easy] What type of neural network is specifically designed for sequential data?

**Answer:** B

**B is correct.** RNNs (Recurrent Neural Networks) are designed for sequential data where order matters (text, time series, audio). CNNs are for spatial data (images). Autoencoders and GANs are generative models.

### Q2. [Easy] What does the hidden state in an RNN represent?

**Answer:** B

**B is correct.** The hidden state is a vector that encodes a compressed summary of all elements processed so far in the sequence. It is updated at each time step and serves as the RNN's memory.

### Q3. [Easy] What problem does LSTM solve that vanilla RNNs cannot?

**Answer:** B

**B is correct.** LSTM solves the vanishing gradient problem through its cell state and gating mechanisms. This allows it to learn long-range dependencies that vanilla RNNs cannot capture.

### Q4. [Easy] What does pad_sequences do?

**Answer:** B

**B is correct.** pad_sequences adds zeros to shorter sequences and truncates longer sequences so all sequences have the same length. Neural networks require fixed-size input.

### Q5. [Easy] What does the Embedding layer convert?

**Answer:** C

**C is correct.** The Embedding layer maps each integer index to a dense floating-point vector (e.g., 64 dimensions). This is more efficient and meaningful than one-hot encoding.

### Q6. [Medium] How many gates does an LSTM cell have?

**Answer:** C

**C is correct.** LSTM has 3 gates: forget gate (what to discard), input gate (what to add), and output gate (what to output). There is also a cell candidate computation, but it is not technically a gate.

### Q7. [Medium] What does return_sequences=True do in an LSTM layer?

**Answer:** B

**B is correct.** return_sequences=True returns the hidden state at every time step (3D output: batch, timesteps, units). False returns only the last hidden state (2D: batch, units). True is needed when stacking RNN layers.

### Q8. [Medium] What is the main difference between GRU and LSTM?

**Answer:** B

**B is correct.** GRU has 2 gates (update, reset) and merges cell state with hidden state. LSTM has 3 gates (forget, input, output) and a separate cell state. GRU is simpler with fewer parameters but similar performance.

### Q9. [Medium] What is the input shape required for LSTM layers in Keras?

**Answer:** C

**C is correct.** LSTM requires 3D input: (batch_size, timesteps, features). Even with a single feature, the features dimension must be present. For text, the Embedding layer converts 2D input to 3D.

### Q10. [Medium] What does Bidirectional(LSTM(64)) output?

**Answer:** B

**B is correct.** Bidirectional runs a forward LSTM (64 units) and a backward LSTM (64 units), then concatenates their outputs by default: 64 + 64 = 128. The merge_mode parameter can change this behavior.

### Q11. [Hard] Why does LSTM use addition (not multiplication) to update the cell state?

**Answer:** B

**B is correct.** The gradient of addition is 1, meaning gradients flow through without shrinking. This is the fundamental mechanism that prevents vanishing gradients in LSTM. Multiplication by the weight matrix (as in vanilla RNN) causes exponential gradient decay.

### Q12. [Hard] For a GRU layer with input_dim=32 and units=64, approximately how many parameters does it have?

**Answer:** C

**C is correct.** GRU has 3 weight matrices. Each: (input_dim + units) * units + units = (32+64)*64 + 64 = 6208. Total: 3 * 6208 = 18,624 (approximately 19,000).

### Q13. [Hard] When stacking 3 LSTM layers, which must have return_sequences=True?

**Answer:** C

**C is correct.** All layers except the last must use return_sequences=True. Each LSTM expects 3D input (batch, timesteps, features). The first two layers must output the full sequence so the next layer receives 3D input. The last layer can use False for classification.

### Q14. [Hard] Which of the following is NOT a suitable use case for Bidirectional RNNs?

**Answer:** C

**C is correct.** Real-time stock price prediction cannot use a bidirectional RNN because future data is not available at prediction time. The backward RNN would need future data. Bidirectional works when the full sequence is available (text classification, NER, sentiment analysis).

### Q15. [Easy] What does LSTM stand for?

**Answer:** B

**B is correct.** LSTM stands for Long Short-Term Memory. The name reflects its ability to remember information over long time spans (long-term) while also handling short-term patterns.

### Q16. [Easy] What is the purpose of padding in sequence preprocessing?

**Answer:** B

**B is correct.** Neural networks require fixed-size input tensors. Padding adds zeros to shorter sequences so all sequences have the same length, enabling efficient batch processing.

### Q17. [Medium] What activation function do LSTM gates use?

**Answer:** C

**C is correct.** LSTM gates (forget, input, output) use sigmoid activation, which outputs values between 0 and 1. This allows gates to act as soft switches: 0 = completely closed, 1 = completely open. The cell candidate uses tanh.

### Q18. [Medium] How many parameters does Embedding(10000, 64) have?

**Answer:** C

**C is correct.** An Embedding layer creates a lookup table of vocab_size x embedding_dim. 10000 words x 64 dimensions = 640,000 trainable parameters.

### Q19. [Hard] What is the cell state in LSTM?

**Answer:** B

**B is correct.** The cell state is a vector that acts as a conveyor belt for information. It flows through time steps with only element-wise multiplication and addition (not matrix multiplication), preserving gradients and enabling long-range memory.

### Q20. [Easy] Which layer in Keras converts word indices to dense vectors?

**Answer:** C

**C is correct.** The Embedding layer maps integer word indices to dense floating-point vectors. Embedding(10000, 64) maps each of 10000 possible word indices to a 64-dimensional vector.

### Q21. [Medium] What is the difference between padding='pre' and padding='post' in pad_sequences?

**Answer:** A

**A is correct.** padding='pre' adds zeros at the beginning of shorter sequences: [0, 0, 1, 2, 3]. padding='post' adds zeros at the end: [1, 2, 3, 0, 0]. The default is 'pre'. For LSTMs, 'pre' often works better because the last elements (real data) are closest to the output.

### Q22. [Hard] Why is dropout applied differently during training and inference in LSTM?

**Answer:** B

**B is correct.** During training, dropout randomly zeroes neurons to prevent co-adaptation and reduce overfitting. During inference (predict/evaluate), all neurons are active and outputs are scaled to compensate. This ensures predictions are deterministic and use the model's full capacity.

### Q23. [Medium] What does recurrent_dropout do in Keras LSTM?

**Answer:** B

**B is correct.** recurrent_dropout applies dropout to the connections between time steps (the recurrent/hidden-to-hidden connections). Regular dropout applies to the input connections. Using both provides better regularization for LSTMs.

### Q24. [Hard] What is the key advantage of GRU over LSTM?

**Answer:** B

**B is correct.** GRU has approximately 75% of LSTM's parameters (2 gates vs 3, no separate cell state). It trains faster and requires less memory while achieving comparable performance on most tasks. LSTM may have a slight edge on tasks requiring very long-range memory.

### Q25. [Easy] Which of the following is NOT a suitable application for RNNs?

**Answer:** B

**B is correct.** Static image classification is best handled by CNNs, not RNNs. RNNs are designed for sequential data where order matters: text, time series, audio, and video. A single static image has no sequential structure.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/recurrent-neural-networks/*
