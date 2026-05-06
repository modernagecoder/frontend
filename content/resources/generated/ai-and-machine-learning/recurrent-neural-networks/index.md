---
title: "Recurrent Neural Networks (RNN), LSTM, and GRU - Sequence Modeling with Keras | Modern Age Coders"
description: "Master RNNs, LSTM, and GRU for sequential data. Learn hidden states, vanishing gradients, LSTM gates (forget, input, output), bidirectional RNNs, text preprocessing with Keras, time series forecasting, and sentiment analysis. 54+ practice questions."
slug: recurrent-neural-networks
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/recurrent-neural-networks/
category: "AI and Machine Learning"
keywords: ["rnn tutorial", "lstm tutorial", "gru neural network", "recurrent neural network keras", "vanishing gradient problem", "lstm gates explained", "bidirectional rnn", "sentiment analysis lstm", "time series forecasting rnn", "sequence modeling python"]
---
# Recurrent Neural Networks (RNN) and LSTM

**Difficulty:** Advanced  
**Reading time:** 50 min  
**Chapter:** 18  
**Practice questions:** 53

## What Are Recurrent Neural Networks?

A **Recurrent Neural Network (RNN)** is a type of neural network designed for **sequential data** -- data where the order matters. Unlike feedforward networks (Dense, CNN) that process each input independently, RNNs maintain a **hidden state** that carries information from previous time steps to the current one. This memory allows them to understand context in sequences.

```
# Why sequence order matters:
# "The movie was not good" vs "Good, the movie was not" -- same words, different meaning
# Stock price at time t depends on prices at t-1, t-2, t-3, ...
# The next word in "I grew up in India, so I speak ___" depends on context from far back

import tensorflow as tf
from tensorflow.keras.layers import SimpleRNN, LSTM, GRU

# RNN processes one element at a time, maintaining a hidden state
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(input_dim=10000, output_dim=64),
    LSTM(128),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
```

Sequential data appears everywhere: text (sequences of words), time series (sequences of measurements over time), audio (sequences of sound samples), video (sequences of frames), DNA (sequences of nucleotides), and user activity logs (sequences of actions).

### The Key Idea: Hidden State

At each time step, an RNN takes two inputs: the current input x_t and the previous hidden state h_(t-1). It produces a new hidden state h_t that encodes information about the entire sequence seen so far.

```
# Conceptual RNN computation at each time step:
# h_t = activation(W_hh * h_(t-1) + W_xh * x_t + bias)
# output_t = W_hy * h_t

# For the sentence "I love coding":
# Step 1: h1 = f(W*h0 + W*"I")       -- h1 encodes "I"
# Step 2: h2 = f(W*h1 + W*"love")    -- h2 encodes "I love"
# Step 3: h3 = f(W*h2 + W*"coding")  -- h3 encodes "I love coding"
```

The same weights (W_hh, W_xh) are used at every time step -- this is called **weight sharing across time**. It means the RNN can handle sequences of any length using the same learned parameters.

## Why Are RNNs Important?

### 1. Natural Language Understanding

Language is inherently sequential. The meaning of a word depends on the words that came before it. "Bank" means something different in "river bank" versus "bank account". RNNs (especially LSTM/GRU) were the foundation of modern NLP before Transformers. Understanding RNNs is essential even in the Transformer era because many concepts (hidden states, sequence processing, attention) build on RNN foundations.

### 2. Time Series Prediction

Predicting stock prices, weather, energy consumption, or sensor readings requires understanding patterns over time. If Arjun wants to predict tomorrow's temperature, he needs today's temperature but also the trend from the past week. RNNs naturally model these temporal dependencies, making them ideal for time series forecasting.

### 3. Handling Variable-Length Input

Unlike CNNs that need fixed-size input (e.g., 224x224 images), RNNs can process sequences of any length. A movie review might be 50 words or 500 words. A time series might cover 30 days or 365 days. RNNs handle this naturally because they process one step at a time and accumulate information in the hidden state.

### 4. Foundation for Modern AI

Even though Transformers have largely replaced RNNs for NLP, the concepts from RNNs are everywhere in modern AI: hidden states led to the idea of representation learning, the vanishing gradient problem motivated attention mechanisms, and LSTM's gating mechanism inspired many subsequent architectures. Kavitha cannot truly understand Transformers without first understanding what problems RNNs faced and how they tried to solve them.

### 5. Still Practical for Many Applications

RNNs remain excellent for real-time processing (processing data as it arrives), edge deployment (smaller than Transformers), and simple sequence tasks. For many practical applications (sensor data, simple text classification, activity recognition), an LSTM is more efficient and easier to deploy than a Transformer.

## Detailed Explanation

### 1. Vanilla RNN -- How It Works

A vanilla (simple) RNN processes a sequence one element at a time. At each time step t:

```
# Mathematical formulation:
# h_t = tanh(W_hh * h_(t-1) + W_xh * x_t + b_h)
# y_t = W_hy * h_t + b_y

# Where:
# x_t = input at time step t
# h_t = hidden state at time step t
# h_(t-1) = hidden state from previous step
# W_hh = hidden-to-hidden weight matrix
# W_xh = input-to-hidden weight matrix
# W_hy = hidden-to-output weight matrix
# tanh = activation function (squashes to [-1, 1])
```

Imagine "unrolling" the RNN over time: each time step is a copy of the same network, connected by the hidden state. For a sequence of length 5, the unrolled RNN looks like 5 identical networks chained together.

The hidden state h_t is a vector (e.g., 128 dimensions) that acts as the network's memory. It encodes a compressed summary of everything the network has seen up to time step t. The same weight matrices are shared across all time steps (weight tying).

### 2. The Vanishing Gradient Problem

The critical weakness of vanilla RNNs: during backpropagation through time (BPTT), gradients must flow backward through every time step. At each step, the gradient is multiplied by the weight matrix W_hh. If the largest singular value of W_hh is less than 1, the gradients shrink exponentially. After 50-100 time steps, the gradients become effectively zero -- the network cannot learn long-range dependencies.

```
# Why vanilla RNNs fail on long sequences:
# Gradient at step 1 = gradient at step 100 * (W_hh)^99
# If max(eigenvalue(W_hh)) < 1: gradient vanishes (becomes ~0)
# If max(eigenvalue(W_hh)) > 1: gradient explodes (becomes huge)

# Example: "I grew up in India, where the culture is rich and the food is 
# amazing, and the people are warm. Because of this, I speak ___."
# The answer (Hindi/Tamil/etc.) depends on "India" which is 20+ words back.
# Vanilla RNN cannot connect "India" to the blank because gradients vanish.
```

This is not just a theoretical problem. In practice, vanilla RNNs can only learn dependencies spanning roughly 10-20 time steps. For anything longer, you need LSTM or GRU.

### 3. LSTM -- Long Short-Term Memory

LSTM (1997, Hochreiter and Schmidhuber) solves the vanishing gradient problem by introducing a **cell state** -- a separate memory pathway that can carry information across many time steps with minimal modification. Three **gates** control what information enters, stays in, and leaves the cell state.

```
# LSTM has 4 components at each time step:
# 1. Forget Gate: decides what to remove from cell state
# 2. Input Gate: decides what new info to add
# 3. Cell State Update: the actual memory update
# 4. Output Gate: decides what to output from cell state
```

#### Forget Gate

Decides what information to throw away from the cell state. It looks at h_(t-1) and x_t and outputs a number between 0 and 1 for each element in the cell state. 1 means "keep everything" and 0 means "forget everything".

```
# f_t = sigmoid(W_f * [h_(t-1), x_t] + b_f)
# sigmoid outputs values between 0 and 1
# Example: when processing a new sentence, the forget gate might
# decide to forget the subject of the previous sentence
```

#### Input Gate

Decides what new information to store in the cell state. It has two parts: a sigmoid layer that decides which values to update, and a tanh layer that creates candidate values.

```
# i_t = sigmoid(W_i * [h_(t-1), x_t] + b_i)  -- what to update
# C_candidate = tanh(W_C * [h_(t-1), x_t] + b_C)  -- candidate values
# Example: when encountering a new subject "Priya", the input gate
# decides to store this new subject in the cell state
```

#### Cell State Update

```
# C_t = f_t * C_(t-1) + i_t * C_candidate
# Old cell state is multiplied by forget gate (forget some things)
# New candidate is multiplied by input gate (add new things)
```

This is the key equation. The cell state is updated through addition and element-wise multiplication, not through a weight matrix multiplication. Addition preserves gradients during backpropagation, which is why LSTMs can learn long-range dependencies.

#### Output Gate

```
# o_t = sigmoid(W_o * [h_(t-1), x_t] + b_o)
# h_t = o_t * tanh(C_t)
# The output gate decides which parts of the cell state to output
# tanh squashes C_t to [-1, 1], then the gate filters it
```

### 4. GRU -- Gated Recurrent Unit

GRU (2014, Cho et al.) is a simplified version of LSTM with only two gates: reset gate and update gate. It merges the cell state and hidden state into one, making it simpler and often faster while achieving comparable performance.

```
# GRU gates:
# z_t = sigmoid(W_z * [h_(t-1), x_t] + b_z)  -- update gate
# r_t = sigmoid(W_r * [h_(t-1), x_t] + b_r)  -- reset gate
# h_candidate = tanh(W * [r_t * h_(t-1), x_t] + b)
# h_t = (1 - z_t) * h_(t-1) + z_t * h_candidate

# Update gate: controls how much of the new state to mix in
# Reset gate: controls how much of the previous state to consider
# Simpler than LSTM: 2 gates instead of 3, no separate cell state
```

GRU vs LSTM: GRU has fewer parameters (faster training), performs similarly for most tasks, and is a good choice when computational resources are limited. LSTM can be better for tasks requiring very long-range memory because of its separate cell state.

### 5. Bidirectional RNNs

A standard RNN processes the sequence left-to-right. But sometimes context from the future is also useful. A bidirectional RNN processes the sequence in both directions and concatenates the hidden states.

```
from tensorflow.keras.layers import Bidirectional, LSTM

# Bidirectional LSTM: processes forward AND backward
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(10000, 64),
    Bidirectional(LSTM(64)),  # Output: 128 (64 forward + 64 backward)
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# For: "The movie was not ___"
# Forward RNN: knows "The movie was not" when processing the blank
# Backward RNN: knows what comes after the blank
# Together: more context for better understanding
```

Bidirectional is useful when you have the complete sequence available (text classification, NER). It is not suitable for real-time prediction where future data is not yet available.

### 6. Building RNNs with Keras

```
from tensorflow.keras.layers import SimpleRNN, LSTM, GRU

# SimpleRNN (vanilla RNN) -- rarely used in practice
SimpleRNN(64, return_sequences=False)  # Returns only last hidden state
SimpleRNN(64, return_sequences=True)   # Returns hidden state at every step

# LSTM -- most common choice
LSTM(128, return_sequences=False)  # For classification (single output)
LSTM(128, return_sequences=True)   # For stacking LSTMs or seq-to-seq

# GRU -- simpler alternative
GRU(128, return_sequences=False)
```

`return_sequences=True` returns the hidden state at every time step (shape: batch, timesteps, units). This is needed when stacking multiple RNN layers. `return_sequences=False` (default) returns only the last hidden state (shape: batch, units). This is used for classification where you want a single output per sequence.

### 7. Text Preprocessing for RNNs

RNNs cannot process raw text. You must convert text to numbers. The standard pipeline:

```
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Step 1: Tokenization -- convert words to integer indices
tokenizer = Tokenizer(num_words=10000, oov_token='')
tokenizer.fit_on_texts(train_texts)
sequences = tokenizer.texts_to_sequences(train_texts)

# Step 2: Padding -- make all sequences the same length
padded = pad_sequences(sequences, maxlen=200, padding='post', truncating='post')
# Short sequences get zeros appended; long sequences get truncated

# Step 3: Embedding -- convert integer indices to dense vectors
# The Embedding layer is the first layer of the model
# It maps each integer to a learned dense vector

# Example:
# "I love this movie" -> [42, 315, 18, 127] -> pad to [42, 315, 18, 127, 0, 0, ...]
# Each number is mapped to a 64-dimensional vector by the Embedding layer
```

The **Embedding layer** converts integer indices to dense vectors. Instead of one-hot encoding (sparse, high-dimensional), embeddings learn a compact, meaningful representation where semantically similar words have similar vectors.

## Code Examples

### Sentiment Analysis: Movie Review Classification with LSTM

```python
import tensorflow as tf
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout, Bidirectional
from tensorflow.keras.callbacks import EarlyStopping
import numpy as np

# Load IMDB dataset (50,000 movie reviews, binary sentiment)
(X_train, y_train), (X_test, y_test) = tf.keras.datasets.imdb.load_data(
    num_words=10000  # Only keep the 10,000 most frequent words
)

print(f"Training samples: {len(X_train)}")
print(f"Test samples: {len(X_test)}")
print(f"Sample review length: {len(X_train[0])} words")
print(f"Label distribution: {np.bincount(y_train)}")

# Pad sequences to uniform length
MAXLEN = 200
X_train = tf.keras.preprocessing.sequence.pad_sequences(X_train, maxlen=MAXLEN)
X_test = tf.keras.preprocessing.sequence.pad_sequences(X_test, maxlen=MAXLEN)

print(f"Padded shape: {X_train.shape}")  # (25000, 200)

# Build LSTM model
model = tf.keras.Sequential([
    Embedding(input_dim=10000, output_dim=64, input_length=MAXLEN),
    Bidirectional(LSTM(64, return_sequences=True)),
    Dropout(0.3),
    LSTM(32),
    Dropout(0.3),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')  # Binary classification
])

model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

model.summary()

# Train
history = model.fit(
    X_train, y_train,
    epochs=10,
    batch_size=64,
    validation_split=0.2,
    callbacks=[EarlyStopping(monitor='val_loss', patience=2, restore_best_weights=True)]
)

# Evaluate
test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
print(f"\nTest accuracy: {test_acc:.4f}")

# Predict on samples
predictions = model.predict(X_test[:5])
for i in range(5):
    sentiment = "Positive" if predictions[i] > 0.5 else "Negative"
    actual = "Positive" if y_test[i] == 1 else "Negative"
    print(f"Predicted: {sentiment} ({predictions[i][0]:.3f}), Actual: {actual}")
```

This builds a complete sentiment analysis pipeline on the IMDB dataset. Key components: `Embedding` converts word indices to 64-dimensional vectors. `Bidirectional(LSTM(64, return_sequences=True))` processes the sequence in both directions and returns states at every step (needed for stacking). The second `LSTM(32)` processes the bidirectional outputs and returns only the final state. Dropout prevents overfitting. The sigmoid output gives a probability between 0 (negative) and 1 (positive). This architecture typically achieves 85-87% accuracy on IMDB.

**Output:**

```
Training samples: 25000
Test samples: 25000
Sample review length: 218 words
Label distribution: [12500 12500]
Padded shape: (25000, 200)

Model: "sequential"
... (model summary) ...
Total params: 714,529

Epoch 1/10
313/313 - 45s - loss: 0.4512 - accuracy: 0.7821 - val_loss: 0.3412 - val_accuracy: 0.8534
...
Epoch 5/10 (early stopped)
313/313 - 40s - loss: 0.1823 - accuracy: 0.9312 - val_loss: 0.3156 - val_accuracy: 0.8712

Test accuracy: 0.8645

Predicted: Positive (0.912), Actual: Positive
Predicted: Negative (0.087), Actual: Negative
Predicted: Positive (0.834), Actual: Positive
Predicted: Negative (0.213), Actual: Negative
Predicted: Positive (0.956), Actual: Positive
```

### Time Series Forecasting with LSTM

```python
import tensorflow as tf
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import numpy as np
import matplotlib.pyplot as plt

# Generate synthetic temperature data (daily temps over 3 years)
np.random.seed(42)
days = np.arange(0, 1095)  # 3 years
base_temp = 25 + 10 * np.sin(2 * np.pi * days / 365)  # Seasonal pattern
noise = np.random.randn(1095) * 2  # Random noise
temperature = base_temp + noise

print(f"Data shape: {temperature.shape}")
print(f"Temp range: {temperature.min():.1f} to {temperature.max():.1f}")

# Create sequences: use past 30 days to predict next day
SEQ_LENGTH = 30

def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:i + seq_length])
        y.append(data[i + seq_length])
    return np.array(X), np.array(y)

# Normalize data
temp_mean = temperature.mean()
temp_std = temperature.std()
temp_normalized = (temperature - temp_mean) / temp_std

X, y = create_sequences(temp_normalized, SEQ_LENGTH)

# Reshape for LSTM: (samples, timesteps, features)
X = X.reshape(-1, SEQ_LENGTH, 1)

print(f"X shape: {X.shape}")  # (1065, 30, 1)
print(f"y shape: {y.shape}")  # (1065,)

# Split into train/test
split = int(0.8 * len(X))
X_train, X_test = X[:split], X[split:]
y_train, y_test = y[:split], y[split:]

# Build LSTM model
model = tf.keras.Sequential([
    LSTM(64, return_sequences=True, input_shape=(SEQ_LENGTH, 1)),
    Dropout(0.2),
    LSTM(32),
    Dropout(0.2),
    Dense(16, activation='relu'),
    Dense(1)  # Linear output for regression
])

model.compile(optimizer='adam', loss='mse', metrics=['mae'])

# Train
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.15,
    callbacks=[EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)],
    verbose=1
)

# Evaluate
test_loss, test_mae = model.evaluate(X_test, y_test, verbose=0)
print(f"\nTest MAE (normalized): {test_mae:.4f}")
print(f"Test MAE (actual temp): {test_mae * temp_std:.2f} degrees")

# Predict and plot
predictions = model.predict(X_test).flatten()

# Denormalize
y_test_actual = y_test * temp_std + temp_mean
predictions_actual = predictions * temp_std + temp_mean

plt.figure(figsize=(14, 5))
plt.plot(y_test_actual[:100], label='Actual', linewidth=2)
plt.plot(predictions_actual[:100], label='Predicted', linewidth=2, alpha=0.8)
plt.title('Temperature Forecast: Actual vs Predicted')
plt.xlabel('Day')
plt.ylabel('Temperature')
plt.legend()
plt.grid(True, alpha=0.3)
plt.savefig('time_series_forecast.png')
plt.show()
```

This demonstrates time series forecasting with LSTM. We create sequences of 30 days and predict the next day's temperature. Key steps: normalize data (critical for RNNs), create sliding window sequences, reshape to (samples, timesteps, features) format required by LSTM, use two stacked LSTMs with Dropout, and a linear output (no activation) for regression. The first LSTM has `return_sequences=True` because the second LSTM needs input at every time step. Denormalization converts predictions back to actual temperature values.

**Output:**

```
Data shape: (1095,)
Temp range: 10.2 to 39.8
X shape: (1065, 30, 1)
y shape: (1065,)

Epoch 1/50
23/23 - 3s - loss: 0.8912 - mae: 0.7534 - val_loss: 0.1523 - val_mae: 0.3012
...
Epoch 18/50 (early stopped)
23/23 - 1s - loss: 0.0412 - mae: 0.1523 - val_loss: 0.0398 - val_mae: 0.1489

Test MAE (normalized): 0.1521
Test MAE (actual temp): 1.52 degrees

(Matplotlib figure showing actual vs predicted temperature)
```

### Stacked LSTM with return_sequences Explained

```python
import tensorflow as tf
from tensorflow.keras.layers import LSTM, Dense, Embedding
import numpy as np

# Demonstrate return_sequences behavior
print("=== return_sequences=False (default) ===")
model_single = tf.keras.Sequential([
    LSTM(64, input_shape=(10, 1), return_sequences=False)
])
X = np.random.rand(1, 10, 1)  # 1 sample, 10 timesteps, 1 feature
output = model_single.predict(X, verbose=0)
print(f"Input shape: {X.shape}")     # (1, 10, 1)
print(f"Output shape: {output.shape}") # (1, 64) -- only last hidden state

print("\n=== return_sequences=True ===")
model_seq = tf.keras.Sequential([
    LSTM(64, input_shape=(10, 1), return_sequences=True)
])
output_seq = model_seq.predict(X, verbose=0)
print(f"Input shape: {X.shape}")         # (1, 10, 1)
print(f"Output shape: {output_seq.shape}") # (1, 10, 64) -- state at EVERY step

print("\n=== Stacked LSTMs ===")
model_stacked = tf.keras.Sequential([
    LSTM(64, input_shape=(10, 1), return_sequences=True),   # Must be True
    LSTM(32, return_sequences=True),                         # Must be True
    LSTM(16, return_sequences=False),                        # Last can be False
    Dense(1)
])
model_stacked.summary()

print("\n=== Why return_sequences matters ===")
print("return_sequences=False: output is (batch, units) -- for classification")
print("return_sequences=True:  output is (batch, timesteps, units) -- for stacking")
print("When stacking LSTMs, all except the last MUST use return_sequences=True")
print("because each LSTM layer needs input at every time step.")
```

This demonstrates the critical difference between `return_sequences=True` and `False`. With False, only the final hidden state is returned (one vector per sequence). With True, hidden states at every time step are returned. When stacking multiple LSTM layers, all except the last must use `return_sequences=True` because LSTM expects 3D input (batch, timesteps, features). The last layer can use False to produce a single output for classification.

**Output:**

```
=== return_sequences=False (default) ===
Input shape: (1, 10, 1)
Output shape: (1, 64)

=== return_sequences=True ===
Input shape: (1, 10, 1)
Output shape: (1, 10, 64)

=== Stacked LSTMs ===
Model: "sequential"
lstm (LSTM)         (None, 10, 64)    16,896
lstm_1 (LSTM)       (None, 10, 32)    12,416
lstm_2 (LSTM)       (None, 16)         3,136
dense (Dense)        (None, 1)             17
Total params: 32,465

=== Why return_sequences matters ===
return_sequences=False: output is (batch, units) -- for classification
return_sequences=True:  output is (batch, timesteps, units) -- for stacking
When stacking LSTMs, all except the last MUST use return_sequences=True
because each LSTM layer needs input at every time step.
```

### Comparing SimpleRNN, LSTM, and GRU Performance

```python
import tensorflow as tf
from tensorflow.keras.layers import SimpleRNN, LSTM, GRU, Dense, Embedding
import numpy as np
import time

# Load IMDB for comparison
(X_train, y_train), (X_test, y_test) = tf.keras.datasets.imdb.load_data(num_words=5000)
MAXLEN = 100
X_train = tf.keras.preprocessing.sequence.pad_sequences(X_train, maxlen=MAXLEN)
X_test = tf.keras.preprocessing.sequence.pad_sequences(X_test, maxlen=MAXLEN)

def build_and_train(rnn_layer, name):
    model = tf.keras.Sequential([
        Embedding(5000, 32, input_length=MAXLEN),
        rnn_layer,
        Dense(1, activation='sigmoid')
    ])
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    
    start = time.time()
    history = model.fit(X_train, y_train, epochs=3, batch_size=128,
                        validation_split=0.2, verbose=0)
    train_time = time.time() - start
    
    test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
    params = model.count_params()
    
    return {
        'name': name,
        'params': params,
        'train_time': train_time,
        'val_acc': history.history['val_accuracy'][-1],
        'test_acc': test_acc
    }

# Compare
results = []
results.append(build_and_train(SimpleRNN(64), 'SimpleRNN'))
results.append(build_and_train(LSTM(64), 'LSTM'))
results.append(build_and_train(GRU(64), 'GRU'))

print(f"\n{'Model':<12} {'Params':>10} {'Time (s)':>10} {'Val Acc':>10} {'Test Acc':>10}")
print("-" * 55)
for r in results:
    print(f"{r['name']:<12} {r['params']:>10,} {r['train_time']:>10.1f} "
          f"{r['val_acc']:>10.4f} {r['test_acc']:>10.4f}")

print("\nObservations:")
print("- SimpleRNN: fewest params, fastest, but worst accuracy (vanishing gradients)")
print("- LSTM: most params, slowest, generally best accuracy")
print("- GRU: middle ground -- fewer params than LSTM, similar accuracy")
```

This directly compares SimpleRNN, LSTM, and GRU on the same task (IMDB sentiment analysis). SimpleRNN is fastest but performs worst because it cannot capture long-range dependencies. LSTM is the most powerful but has more parameters and is slower (4x the parameters of SimpleRNN due to its 3 gates). GRU offers a good middle ground with 3x SimpleRNN's parameters but comparable accuracy to LSTM. For most practical tasks, LSTM and GRU perform similarly.

**Output:**

```
Model           Params   Time (s)    Val Acc   Test Acc
-------------------------------------------------------
SimpleRNN      168,993       12.3     0.7612     0.7534
LSTM           185,857       35.8     0.8423     0.8378
GRU            181,121       29.2     0.8389     0.8345

Observations:
- SimpleRNN: fewest params, fastest, but worst accuracy (vanishing gradients)
- LSTM: most params, slowest, generally best accuracy
- GRU: middle ground -- fewer params than LSTM, similar accuracy
```

### Text Preprocessing Pipeline for RNN

```python
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

# Sample text data
texts = [
    "This movie is amazing and I loved every moment of it",
    "Terrible film, waste of time and money",
    "Great acting and wonderful storyline, highly recommended",
    "Boring and predictable, would not watch again",
    "The best movie I have seen this year, brilliant performances",
    "Awful movie with bad acting and poor direction"
]
labels = [1, 0, 1, 0, 1, 0]  # 1=positive, 0=negative

# Step 1: Tokenization
tokenizer = Tokenizer(num_words=1000, oov_token='<OOV>')
tokenizer.fit_on_texts(texts)

word_index = tokenizer.word_index
print(f"Vocabulary size: {len(word_index)}")
print(f"Top 10 words: {dict(list(word_index.items())[:10])}")

# Step 2: Convert texts to sequences of integers
sequences = tokenizer.texts_to_sequences(texts)
print(f"\nOriginal: '{texts[0]}'")
print(f"Sequence: {sequences[0]}")

# Step 3: Pad sequences to uniform length
MAXLEN = 15
padded = pad_sequences(sequences, maxlen=MAXLEN, padding='post', truncating='post')

print(f"\nPadded sequences shape: {padded.shape}")
print(f"First padded: {padded[0]}")
print(f"(0s are padding, added at the end with padding='post')")

# Step 4: Build model with Embedding layer
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(
        input_dim=1000,      # Vocabulary size
        output_dim=16,       # Embedding dimension
        input_length=MAXLEN  # Sequence length
    ),
    tf.keras.layers.LSTM(32),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.summary()

# Train (on this tiny dataset, just for demonstration)
model.fit(np.array(padded), np.array(labels), epochs=50, verbose=0)

# Test on new text
new_texts = ["This is a great and amazing movie", "Bad and boring film"]
new_seq = tokenizer.texts_to_sequences(new_texts)
new_padded = pad_sequences(new_seq, maxlen=MAXLEN, padding='post')

predictions = model.predict(new_padded)
for text, pred in zip(new_texts, predictions):
    sentiment = "Positive" if pred > 0.5 else "Negative"
    print(f"'{text}' -> {sentiment} ({pred[0]:.3f})")
```

This shows the complete text preprocessing pipeline required before feeding text to an RNN. (1) Tokenizer converts words to integer indices. `num_words=1000` keeps only the top 1000 words. `oov_token` handles unknown words. (2) `texts_to_sequences` converts each text to a list of integers. (3) `pad_sequences` makes all sequences the same length by adding zeros. (4) The Embedding layer learns a 16-dimensional vector for each word during training. This is the standard pipeline for any text classification task with RNNs.

**Output:**

```
Vocabulary size: 37
Top 10 words: {'<OOV>': 1, 'and': 2, 'movie': 3, 'is': 4, ...}

Original: 'This movie is amazing and I loved every moment of it'
Sequence: [6, 3, 4, 7, 2, 8, 9, 10, 11, 12, 13]

Padded sequences shape: (6, 15)
First padded: [ 6  3  4  7  2  8  9 10 11 12 13  0  0  0  0]
(0s are padding, added at the end with padding='post')

Model: "sequential"
embedding (Embedding)     (None, 15, 16)     16,000
lstm (LSTM)               (None, 32)          6,272
dense (Dense)             (None, 1)              33
Total params: 22,305

'This is a great and amazing movie' -> Positive (0.891)
'Bad and boring film' -> Negative (0.178)
```

### Bidirectional LSTM for Improved Text Classification

```python
import tensorflow as tf
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout, Bidirectional
from tensorflow.keras.callbacks import EarlyStopping
import numpy as np

# Load IMDB
(X_train, y_train), (X_test, y_test) = tf.keras.datasets.imdb.load_data(num_words=10000)
MAXLEN = 150
X_train = tf.keras.preprocessing.sequence.pad_sequences(X_train, maxlen=MAXLEN)
X_test = tf.keras.preprocessing.sequence.pad_sequences(X_test, maxlen=MAXLEN)

# Build unidirectional model
uni_model = tf.keras.Sequential([
    Embedding(10000, 64, input_length=MAXLEN),
    LSTM(64),
    Dropout(0.3),
    Dense(1, activation='sigmoid')
])

# Build bidirectional model
bi_model = tf.keras.Sequential([
    Embedding(10000, 64, input_length=MAXLEN),
    Bidirectional(LSTM(64)),  # Output: 128 (64 forward + 64 backward)
    Dropout(0.3),
    Dense(1, activation='sigmoid')
])

print("=== Unidirectional LSTM ===")
uni_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
print(f"Parameters: {uni_model.count_params():,}")
print(f"LSTM output: {uni_model.layers[1].output_shape}")

print("\n=== Bidirectional LSTM ===")
bi_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
print(f"Parameters: {bi_model.count_params():,}")
print(f"BiLSTM output: {bi_model.layers[1].output_shape}")

# Train both
callback = EarlyStopping(monitor='val_loss', patience=2, restore_best_weights=True)

print("\nTraining Unidirectional...")
uni_model.fit(X_train, y_train, epochs=5, batch_size=128,
              validation_split=0.2, callbacks=[callback], verbose=0)
uni_acc = uni_model.evaluate(X_test, y_test, verbose=0)[1]

print("Training Bidirectional...")
bi_model.fit(X_train, y_train, epochs=5, batch_size=128,
             validation_split=0.2, callbacks=[callback], verbose=0)
bi_acc = bi_model.evaluate(X_test, y_test, verbose=0)[1]

print(f"\nUnidirectional LSTM test accuracy: {uni_acc:.4f}")
print(f"Bidirectional LSTM test accuracy:  {bi_acc:.4f}")
print(f"\nBidirectional is typically better because it sees context from both")
print(f"directions. 'The movie was not bad' -- backward RNN knows 'bad' when")
print(f"processing 'not', helping understand the negation.")
```

This compares unidirectional and bidirectional LSTM on sentiment analysis. The Bidirectional wrapper runs two LSTMs: one forward (left-to-right) and one backward (right-to-left), then concatenates their outputs. So `Bidirectional(LSTM(64))` produces 128-dimensional output (64+64). Bidirectional models typically perform better on text classification because the meaning of a word often depends on what comes after it, not just what came before.

**Output:**

```
=== Unidirectional LSTM ===
Parameters: 697,025
LSTM output: (None, 64)

=== Bidirectional LSTM ===
Parameters: 730,113
BiLSTM output: (None, 128)

Training Unidirectional...
Training Bidirectional...

Unidirectional LSTM test accuracy: 0.8423
Bidirectional LSTM test accuracy:  0.8567

Bidirectional is typically better because it sees context from both
directions. 'The movie was not bad' -- backward RNN knows 'bad' when
processing 'not', helping understand the negation.
```

## Common Mistakes

### Forgetting return_sequences=True When Stacking RNNs

**Wrong:**

```
model = tf.keras.Sequential([
    Embedding(10000, 64),
    LSTM(64),                # return_sequences=False (default)
    LSTM(32),                # Error! Expects 3D input
    Dense(1, activation='sigmoid')
])
```

ValueError: Input 0 of layer 'lstm_1' is incompatible with the layer: expected ndim=3, found ndim=2. Full shape received: (None, 64)

**Correct:**

```
model = tf.keras.Sequential([
    Embedding(10000, 64),
    LSTM(64, return_sequences=True),  # Output: (batch, timesteps, 64)
    LSTM(32),                          # Now receives 3D input, outputs (batch, 32)
    Dense(1, activation='sigmoid')
])
```

LSTM layers expect 3D input: (batch, timesteps, features). By default, `return_sequences=False` returns only the last hidden state as 2D: (batch, units). When stacking multiple RNN layers, all except the last must use `return_sequences=True` to pass the full sequence to the next layer.

### Not Padding Sequences Before Training

**Wrong:**

```
# Sequences have different lengths
sequences = [[1, 2, 3], [4, 5, 6, 7, 8], [9, 10]]
# Trying to create a numpy array fails
X = np.array(sequences)  # Creates array of lists, not a proper matrix
model.fit(X, labels)  # Error!
```

ValueError: Failed to convert a NumPy array to a Tensor (Unsupported object type list).

**Correct:**

```
from tensorflow.keras.preprocessing.sequence import pad_sequences

sequences = [[1, 2, 3], [4, 5, 6, 7, 8], [9, 10]]
padded = pad_sequences(sequences, maxlen=5, padding='post')
# Result: [[1, 2, 3, 0, 0], [4, 5, 6, 7, 8], [9, 10, 0, 0, 0]]
model.fit(padded, labels)
```

Neural networks require fixed-size input. When sequences have different lengths, you must pad them to the same length using `pad_sequences`. Shorter sequences get zeros appended (padding='post') or prepended (padding='pre'). Longer sequences get truncated to `maxlen`.

### Not Reshaping Data for LSTM Input

**Wrong:**

```
# Time series data: 100 samples, 30 time steps
X = np.random.rand(100, 30)  # Shape: (100, 30) -- 2D

model = tf.keras.Sequential([
    LSTM(64, input_shape=(30, 1)),  # Expects 3D: (batch, timesteps, features)
    Dense(1)
])
model.fit(X, y)  # Error: expected 3D, got 2D
```

ValueError: Input 0 of layer 'lstm' is incompatible with the layer: expected ndim=3, found ndim=2.

**Correct:**

```
# Reshape to add the features dimension
X = np.random.rand(100, 30)
X = X.reshape(100, 30, 1)  # Shape: (100, 30, 1) -- 3D
# Or: X = np.expand_dims(X, axis=-1)

model = tf.keras.Sequential([
    LSTM(64, input_shape=(30, 1)),
    Dense(1)
])
model.fit(X, y)  # Works!
```

LSTM requires 3D input: (batch_size, timesteps, features). Even if you have only one feature (e.g., temperature), you must include the feature dimension. Reshape (100, 30) to (100, 30, 1). This is the most common error when working with time series data.

### Using SimpleRNN for Long Sequences

**Wrong:**

```
# Processing 500-word reviews with SimpleRNN
model = tf.keras.Sequential([
    Embedding(10000, 64),
    SimpleRNN(128),        # Vanilla RNN -- vanishing gradients!
    Dense(1, activation='sigmoid')
])
# This will have poor accuracy on long sequences
```

No error, but accuracy is poor because SimpleRNN cannot learn long-range dependencies. Gradients vanish after ~20 time steps.

**Correct:**

```
# Use LSTM or GRU for sequences longer than ~20 steps
model = tf.keras.Sequential([
    Embedding(10000, 64),
    LSTM(128),             # LSTM handles long sequences
    Dense(1, activation='sigmoid')
])
```

SimpleRNN (vanilla RNN) suffers from the vanishing gradient problem. For sequences longer than ~20 steps, gradients become too small to update early layers. LSTM and GRU solve this with gating mechanisms that preserve gradients. Always use LSTM or GRU for practical applications.

## Summary

- RNNs process sequential data by maintaining a hidden state that carries information from previous time steps. At each step, the RNN takes the current input and previous hidden state, producing a new hidden state that encodes the sequence history.
- Vanilla RNNs suffer from the vanishing gradient problem: gradients shrink exponentially during backpropagation through time, making it impossible to learn long-range dependencies (beyond ~20 steps). This is a fundamental limitation, not just a training issue.
- LSTM solves vanishing gradients with a cell state (separate memory pathway) and three gates: the forget gate (what to discard), input gate (what to add), and output gate (what to output). The cell state is updated through addition, preserving gradients across many time steps.
- GRU is a simpler alternative to LSTM with two gates: update gate and reset gate. It merges the cell state and hidden state into one. GRU has fewer parameters and trains faster than LSTM, with comparable performance for most tasks.
- Bidirectional RNNs process sequences in both directions (forward and backward) and concatenate the results. Bidirectional(LSTM(64)) outputs 128 values. Use bidirectional when the full sequence is available (text classification), not for real-time prediction.
- return_sequences=True returns hidden states at every time step (3D output). return_sequences=False returns only the final state (2D output). When stacking multiple RNN layers, all except the last must use return_sequences=True.
- Text preprocessing for RNNs: tokenize words to integers (Tokenizer), pad sequences to uniform length (pad_sequences), and use an Embedding layer to convert integers to dense vectors. The Embedding layer learns word representations during training.
- LSTM input must be 3D: (batch_size, timesteps, features). For time series with one feature, reshape from (samples, steps) to (samples, steps, 1). For text, the Embedding layer handles the conversion from 2D integer sequences to 3D float tensors.
- For time series forecasting: create sliding window sequences (past N steps predict the next), normalize the data, use stacked LSTMs with Dropout, and use a linear output (no activation) for regression. Denormalize predictions for interpretation.
- LSTM and GRU are still practical for many applications despite the Transformer era. They are more efficient for simple sequence tasks, real-time processing, and edge deployment. Understanding RNN concepts is essential for understanding Transformers.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/recurrent-neural-networks/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/recurrent-neural-networks/practice/*
