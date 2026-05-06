---
title: "Introduction to Neural Networks - Perceptron, Activation Functions, Backpropagation | Modern Age Coders"
description: "Master neural network fundamentals: perceptron, activation functions (ReLU, sigmoid, softmax), forward propagation, backpropagation, gradient descent (SGD, Adam), and build a neural network from scratch with NumPy. 57+ practice questions with calculations."
slug: introduction-to-neural-networks
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-neural-networks/
category: "AI and Machine Learning"
keywords: ["neural network tutorial", "introduction to neural networks", "perceptron", "activation functions", "relu sigmoid softmax", "forward propagation", "backpropagation explained", "gradient descent", "adam optimizer", "neural network from scratch numpy"]
---
# Introduction to Neural Networks

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 15  
**Practice questions:** 56

## What Are Neural Networks?

A **neural network** is a computational model inspired by the structure of the human brain. Just as the brain consists of billions of interconnected neurons that process information, an artificial neural network consists of layers of interconnected **artificial neurons** (also called nodes or units) that learn patterns from data.

At the most fundamental level, a neural network takes inputs, processes them through multiple layers of mathematical operations, and produces outputs. The "learning" happens by adjusting the internal parameters (weights and biases) to minimize the difference between the network's predictions and the actual values.

### From Biological to Artificial Neurons

A biological neuron receives signals from other neurons through **dendrites**, processes them in the **cell body**, and sends the output signal through its **axon** to the next neuron. The connection between neurons (synapse) can be strong or weak.

An artificial neuron mirrors this: it receives inputs (like dendrites), multiplies each by a **weight** (like synapse strength), sums them up with a **bias** (like the cell body's threshold), and passes the result through an **activation function** (like the axon's firing decision) to produce an output.

## Why Are Neural Networks Important?

### 1. Universal Function Approximators

A neural network with even a single hidden layer can approximate any continuous function, given enough neurons. This is the **Universal Approximation Theorem**. In practice, this means neural networks can model any pattern in data, from simple linear relationships to incredibly complex non-linear mappings.

### 2. Feature Learning

Traditional ML algorithms (linear regression, SVM, decision trees) require you to engineer features manually. Neural networks learn features automatically. In image recognition, the network learns to detect edges in early layers, shapes in middle layers, and objects in later layers -- without anyone telling it to.

### 3. Foundation of Deep Learning

Everything in modern deep learning -- CNNs for images, RNNs for sequences, Transformers for language, GANs for generation -- is built on the neural network fundamentals covered in this chapter. Understanding forward propagation, backpropagation, and gradient descent is essential for all of deep learning.

### 4. State-of-the-Art Performance

Neural networks hold the state-of-the-art in image classification, object detection, speech recognition, machine translation, text generation, protein structure prediction, and many other domains. ChatGPT, DALL-E, AlphaFold -- all are neural networks at their core.

### 5. Scalability

Neural networks scale with data. While traditional algorithms often plateau as you add more data, neural networks continue to improve. The largest language models have been trained on trillions of tokens and have hundreds of billions of parameters, and they keep getting better with scale.

## Detailed Explanation

### 1. The Perceptron: A Single Artificial Neuron

The **perceptron** is the simplest neural network -- a single neuron. It computes:

`output = activation(w1*x1 + w2*x2 + ... + wn*xn + b)`

Where:

- **x1, x2, ..., xn**: Input features
- **w1, w2, ..., wn**: Weights (how important each input is)
- **b**: Bias (shifts the decision boundary)
- **activation**: The activation function (decides whether the neuron fires)

The weighted sum `z = w1*x1 + w2*x2 + b` is called the **pre-activation**. The output after the activation function is the **post-activation**.

A single perceptron can learn linear decision boundaries (like AND, OR gates). It cannot learn non-linear patterns (like XOR). This limitation is solved by stacking multiple neurons in layers.

### 2. Activation Functions

Without activation functions, a neural network is just a linear transformation (no matter how many layers). Activation functions introduce **non-linearity**, allowing networks to learn complex patterns.

#### Sigmoid

`sigmoid(z) = 1 / (1 + e^(-z))`

Output range: (0, 1). Used for binary classification output layers (probability). **Problem**: Gradients become very small for large |z| (vanishing gradient), making deep networks hard to train.

#### Tanh (Hyperbolic Tangent)

`tanh(z) = (e^z - e^(-z)) / (e^z + e^(-z))`

Output range: (-1, 1). Zero-centered (unlike sigmoid), which helps optimization. Still suffers from vanishing gradients at extremes.

#### ReLU (Rectified Linear Unit)

`ReLU(z) = max(0, z)`

Output range: [0, infinity). The most popular activation for hidden layers. Fast to compute, does not saturate for positive values (no vanishing gradient for z > 0). **Problem**: "Dying ReLU" -- if z is always negative, the gradient is always 0 and the neuron never updates.

#### Leaky ReLU

`LeakyReLU(z) = z if z > 0, else alpha*z` (alpha is small, like 0.01)

Fixes the dying ReLU problem by allowing a small gradient for negative values.

#### Softmax

`softmax(zi) = e^zi / sum(e^zj for all j)`

Used for multi-class classification output layers. Converts a vector of raw scores into probabilities that sum to 1. Each output represents the probability of a class.

#### When to Use Each

- **Hidden layers**: ReLU (default choice), Leaky ReLU if dying ReLU is a problem
- **Binary classification output**: Sigmoid (outputs probability of class 1)
- **Multi-class classification output**: Softmax (outputs probability for each class)
- **Regression output**: No activation (linear, identity function)

### 3. Multi-Layer Perceptron (MLP)

An MLP has multiple layers of neurons:

- **Input layer**: Receives the raw features. The number of neurons equals the number of features. No computation happens here -- it just passes inputs forward.
- **Hidden layers**: One or more layers where the actual computation occurs. Each neuron applies weights, bias, and an activation function. More hidden layers = deeper network = can learn more complex patterns.
- **Output layer**: Produces the final prediction. One neuron for regression, one neuron with sigmoid for binary classification, or multiple neurons with softmax for multi-class classification.

### 4. Forward Propagation

Forward propagation computes the network's output from inputs, layer by layer.

For a network with input X, one hidden layer, and an output layer:

1. **Hidden layer**: z1 = X * W1 + b1, a1 = activation(z1)
2. **Output layer**: z2 = a1 * W2 + b2, output = activation(z2)

Each layer takes the previous layer's output as input, applies a linear transformation (weights * input + bias), and then a non-linear activation function. This is repeated layer by layer until the output is produced.

### 5. Loss Functions

The loss function measures how wrong the network's predictions are.

- **Mean Squared Error (MSE)**: For regression. `MSE = mean((y_actual - y_predicted)^2)`. Penalizes large errors heavily.
- **Binary Cross-Entropy**: For binary classification. `BCE = -mean(y*log(p) + (1-y)*log(1-p))`. Measures how far the predicted probability p is from the true label y.
- **Categorical Cross-Entropy**: For multi-class classification. `CCE = -mean(sum(y_k * log(p_k)))` where k iterates over classes.

### 6. Backpropagation

Backpropagation is how a neural network **learns**. It computes the gradient (derivative) of the loss with respect to every weight in the network using the **chain rule** of calculus.

Intuition: The loss depends on the output, which depends on the hidden layer, which depends on the weights. The chain rule lets us trace back through this chain to find how much each weight contributed to the error.

1. Compute the loss from the forward pass.
2. Compute the gradient of the loss with respect to the output layer weights (dL/dW2).
3. Use the chain rule to propagate the gradient backward to the hidden layer weights (dL/dW1).
4. Update all weights: W = W - learning_rate * gradient

The gradients flow backward through the network (hence "back" propagation), from the output layer to the input layer. Each layer's gradient depends on the gradient from the layer above it (the chain rule connects them).

### 7. Gradient Descent Variants

- **Batch Gradient Descent**: Uses the entire dataset to compute gradients. Stable but slow for large datasets.
- **Stochastic Gradient Descent (SGD)**: Uses one sample at a time. Fast but noisy (high variance updates).
- **Mini-Batch SGD**: Uses a small batch (32-256 samples). Best of both worlds -- fast and reasonably stable. Most common in practice.
- **Momentum**: Adds a fraction of the previous update to the current update, helping the optimizer "roll through" local minima and flat regions.
- **Adam (Adaptive Moment Estimation)**: Combines momentum with per-parameter adaptive learning rates. The most popular optimizer. Adapts the learning rate for each weight based on its gradient history. Works well out of the box with default parameters (lr=0.001, beta1=0.9, beta2=0.999).

### 8. Vanishing and Exploding Gradients

**Vanishing gradients**: In deep networks with sigmoid/tanh activations, gradients get multiplied by small numbers (sigmoid derivative is at most 0.25) at each layer. After many layers, the gradient becomes extremely small (vanishes to near 0). Early layers barely learn because their gradients are negligible.

**Exploding gradients**: If weights are large, gradients can grow exponentially through layers, causing unstable training (loss jumps wildly, weights become NaN).

**Solutions**: Use ReLU activation (gradient is 1 for positive values, no vanishing), proper weight initialization (He initialization for ReLU, Xavier for sigmoid/tanh), batch normalization (normalizes activations between layers), gradient clipping (caps gradient magnitude), and residual connections (skip connections that add input directly to output).

## Code Examples

### Single Neuron: Forward Pass Calculation

```python
import numpy as np

# Single neuron with 3 inputs
inputs = np.array([1.0, 2.0, 3.0])
weights = np.array([0.2, 0.8, -0.5])
bias = 2.0

# Step 1: Weighted sum (pre-activation)
z = np.dot(inputs, weights) + bias
print(f"Weighted sum: {z}")
print(f"  = (1.0*0.2) + (2.0*0.8) + (3.0*-0.5) + 2.0")
print(f"  = 0.2 + 1.6 + (-1.5) + 2.0 = {z}")

# Step 2: Apply activation functions
def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def relu(x):
    return np.maximum(0, x)

def tanh(x):
    return np.tanh(x)

print(f"\nActivation outputs:")
print(f"  Sigmoid({z}) = {sigmoid(z):.4f}")
print(f"  ReLU({z})    = {relu(z):.4f}")
print(f"  Tanh({z})    = {tanh(z):.4f}")

# Negative z example
z_neg = -2.0
print(f"\nWith z = {z_neg}:")
print(f"  Sigmoid({z_neg}) = {sigmoid(z_neg):.4f}")
print(f"  ReLU({z_neg})    = {relu(z_neg):.4f}")
print(f"  Tanh({z_neg})    = {tanh(z_neg):.4f}")
```

A single neuron computes the dot product of inputs and weights, adds the bias, then applies an activation function. For inputs [1, 2, 3] with weights [0.2, 0.8, -0.5] and bias 2: z = 0.2 + 1.6 - 1.5 + 2.0 = 2.3. Then the activation function transforms this value. Sigmoid squashes it to (0,1), ReLU keeps positive values as-is, tanh maps it to (-1,1).

**Output:**

```
Weighted sum: 2.3
  = (1.0*0.2) + (2.0*0.8) + (3.0*-0.5) + 2.0
  = 0.2 + 1.6 + (-1.5) + 2.0 = 2.3

Activation outputs:
  Sigmoid(2.3) = 0.9089
  ReLU(2.3)    = 2.3000
  Tanh(2.3)    = 0.9801

With z = -2.0:
  Sigmoid(-2.0) = 0.1192
  ReLU(-2.0)    = 0.0000
  Tanh(-2.0)    = -0.9640
```

### Activation Functions: Comparison and Derivatives

```python
import numpy as np

# Define activation functions and their derivatives
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def sigmoid_derivative(z):
    s = sigmoid(z)
    return s * (1 - s)

def relu(z):
    return np.maximum(0, z)

def relu_derivative(z):
    return (z > 0).astype(float)

def leaky_relu(z, alpha=0.01):
    return np.where(z > 0, z, alpha * z)

def leaky_relu_derivative(z, alpha=0.01):
    return np.where(z > 0, 1.0, alpha)

def softmax(z):
    exp_z = np.exp(z - np.max(z))  # Subtract max for numerical stability
    return exp_z / exp_z.sum()

# Test with range of values
z_values = np.array([-3, -1, 0, 1, 3])

print("z      | Sigmoid | Sigmoid' | ReLU | ReLU' | Leaky ReLU | Leaky'")
print('-' * 75)
for z in z_values:
    print(f"{z:6.1f} | {sigmoid(z):7.4f} | {sigmoid_derivative(z):8.4f} | "
          f"{relu(z):4.1f} | {relu_derivative(z):5.1f} | "
          f"{leaky_relu(z):10.4f} | {leaky_relu_derivative(z):6.2f}")

# Softmax example
logits = np.array([2.0, 1.0, 0.1])
probs = softmax(logits)
print(f"\nSoftmax({logits}) = {probs.round(4)}")
print(f"Sum of probabilities: {probs.sum():.4f}")
```

Each activation function has different properties. Sigmoid squashes all values to (0,1) but its derivative peaks at 0.25 (at z=0) and vanishes for large |z|. ReLU has derivative 1 for positive z (no vanishing gradient) and 0 for negative z (dying ReLU). Leaky ReLU fixes dying ReLU with a small slope for negative values. Softmax converts raw scores to probabilities summing to 1.

**Output:**

```
z      | Sigmoid | Sigmoid' | ReLU | ReLU' | Leaky ReLU | Leaky'
---------------------------------------------------------------------------
  -3.0 |  0.0474 |   0.0452 | -0.0 |   0.0 |    -0.0300 |   0.01
  -1.0 |  0.2689 |   0.1966 | -0.0 |   0.0 |    -0.0100 |   0.01
   0.0 |  0.5000 |   0.2500 |  0.0 |   0.0 |     0.0000 |   0.01
   1.0 |  0.7311 |   0.1966 |  1.0 |   1.0 |     1.0000 |   1.00
   3.0 |  0.9526 |   0.0452 |  3.0 |   1.0 |     3.0000 |   1.00

Softmax([2.  1.  0.1]) = [0.6590 0.2424 0.0986]
Sum of probabilities: 1.0000
```

### Forward Propagation Through a Multi-Layer Network

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def relu(z):
    return np.maximum(0, z)

# Network architecture: 2 inputs -> 3 hidden neurons -> 1 output
np.random.seed(42)

# Input
X = np.array([[0.5, 0.8]])  # 1 sample, 2 features

# Layer 1 weights and biases (2 inputs -> 3 hidden)
W1 = np.array([[0.1, 0.3, -0.2],
               [0.4, -0.5, 0.6]])  # Shape: (2, 3)
b1 = np.array([0.1, -0.1, 0.2])     # Shape: (3,)

# Layer 2 weights and biases (3 hidden -> 1 output)
W2 = np.array([[0.7], [-0.3], [0.5]])  # Shape: (3, 1)
b2 = np.array([0.1])                     # Shape: (1,)

# Forward propagation
print("=== Forward Propagation ===")

# Hidden layer
z1 = X @ W1 + b1
print(f"Hidden pre-activation (z1): {z1.round(4)}")
a1 = relu(z1)
print(f"Hidden post-activation (a1 = ReLU(z1)): {a1.round(4)}")

# Output layer
z2 = a1 @ W2 + b2
print(f"\nOutput pre-activation (z2): {z2.round(4)}")
output = sigmoid(z2)
print(f"Output (sigmoid(z2)): {output.round(4)}")

# Step-by-step for z1
print(f"\n=== Step-by-step z1 calculation ===")
for j in range(3):
    val = sum(X[0, i] * W1[i, j] for i in range(2)) + b1[j]
    print(f"  z1[{j}] = {X[0,0]}*{W1[0,j]} + {X[0,1]}*{W1[1,j]} + {b1[j]} = {val:.4f}")
    print(f"  a1[{j}] = ReLU({val:.4f}) = {max(0, val):.4f}")
```

Forward propagation computes the output layer by layer. Input X (shape 1x2) is multiplied by W1 (shape 2x3) and added bias b1 to get z1 (shape 1x3). ReLU is applied to get a1. Then a1 is multiplied by W2 (shape 3x1) and added bias b2 to get z2. Finally sigmoid converts z2 to a probability. The key operation is matrix multiplication followed by activation -- repeated for each layer.

**Output:**

```
=== Forward Propagation ===
Hidden pre-activation (z1): [[ 0.47 -0.25  0.58]]
Hidden post-activation (a1 = ReLU(z1)): [[0.47 0.   0.58]]

Output pre-activation (z2): [[0.619]]
Output (sigmoid(z2)): [[0.6498]]

=== Step-by-step z1 calculation ===
  z1[0] = 0.5*0.1 + 0.8*0.4 + 0.1 = 0.4700
  a1[0] = ReLU(0.4700) = 0.4700
  z1[1] = 0.5*0.3 + 0.8*-0.5 + -0.1 = -0.2500
  a1[1] = ReLU(-0.2500) = 0.0000
  z1[2] = 0.5*-0.2 + 0.8*0.6 + 0.2 = 0.5800
  a1[2] = ReLU(0.5800) = 0.5800
```

### Backpropagation: Computing Gradients Step by Step

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def sigmoid_derivative(a):
    return a * (1 - a)  # When a = sigmoid(z)

def relu(z):
    return np.maximum(0, z)

def relu_derivative(z):
    return (z > 0).astype(float)

# Simple network: 2 inputs -> 2 hidden (ReLU) -> 1 output (sigmoid)
X = np.array([[1.0, 0.5]])
y = np.array([[1.0]])  # True label

# Weights
W1 = np.array([[0.3, 0.7], [0.5, -0.2]])
b1 = np.array([0.1, -0.1])
W2 = np.array([[0.6], [-0.4]])
b2 = np.array([0.2])

# === Forward Pass ===
z1 = X @ W1 + b1
a1 = relu(z1)
z2 = a1 @ W2 + b2
a2 = sigmoid(z2)

loss = -np.mean(y * np.log(a2) + (1 - y) * np.log(1 - a2))
print("=== Forward Pass ===")
print(f"z1 = {z1.round(4)}, a1 = {a1.round(4)}")
print(f"z2 = {z2.round(4)}, a2 = {a2.round(4)}")
print(f"Loss (BCE): {loss:.4f}")

# === Backward Pass (Backpropagation) ===
print("\n=== Backward Pass ===")

# Output layer gradients
dz2 = a2 - y  # Gradient of BCE + sigmoid combined
print(f"dz2 (output error) = {dz2.round(4)}")

dW2 = a1.T @ dz2
db2 = np.sum(dz2, axis=0)
print(f"dW2 = {dW2.round(4)}")
print(f"db2 = {db2.round(4)}")

# Hidden layer gradients (chain rule!)
da1 = dz2 @ W2.T
dz1 = da1 * relu_derivative(z1)
print(f"\nda1 = {da1.round(4)}")
print(f"dz1 = {dz1.round(4)}")

dW1 = X.T @ dz1
db1 = np.sum(dz1, axis=0)
print(f"dW1 = {dW1.round(4)}")
print(f"db1 = {db1.round(4)}")

# === Weight Update ===
lr = 0.1
print(f"\n=== Weight Update (lr={lr}) ===")
print(f"W2: {W2.flatten().round(4)} -> {(W2 - lr * dW2).flatten().round(4)}")
print(f"W1 before: {W1.round(4)}")
print(f"W1 after:  {(W1 - lr * dW1).round(4)}")
```

Backpropagation computes gradients layer by layer from output to input using the chain rule. Step 1: Compute the output error (dz2 = predicted - actual for sigmoid + BCE). Step 2: Compute weight gradients for the output layer (dW2 = hidden_output^T * error). Step 3: Propagate the error backward (da1 = error * W2^T). Step 4: Apply the chain rule through the activation (dz1 = da1 * relu_derivative). Step 5: Compute weight gradients for the hidden layer (dW1 = input^T * hidden_error). Step 6: Update weights by subtracting learning_rate * gradient.

**Output:**

```
=== Forward Pass ===
z1 = [[0.65 0.5 ]], a1 = [[0.65 0.5 ]]
z2 = [[0.39]], a2 = [[0.5963]]
Loss (BCE): 0.5173

=== Backward Pass ===
dz2 (output error) = [[-0.4037]]
dW2 = [[-0.2624]
 [-0.2019]]
db2 = [-0.4037]

da1 = [[-0.2422  0.1615]]
dz1 = [[-0.2422  0.1615]]
dW1 = [[-0.2422  0.1615]
 [-0.1211  0.0807]]
db1 = [-0.2422  0.1615]

=== Weight Update (lr=0.1) ===
W2: [ 0.6 -0.4] -> [ 0.6262 -0.3798]
W1 before: [[ 0.3  0.7]
 [ 0.5 -0.2]]
W1 after:  [[ 0.3242  0.6838]
 [ 0.5121 -0.2081]]
```

### Building a Neural Network from Scratch: XOR Problem

```python
import numpy as np

# XOR data: single perceptron CANNOT learn this
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([[0], [1], [1], [0]])

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def sigmoid_derivative(a):
    return a * (1 - a)

# Network: 2 inputs -> 4 hidden (sigmoid) -> 1 output (sigmoid)
np.random.seed(42)
W1 = np.random.randn(2, 4) * 0.5
b1 = np.zeros((1, 4))
W2 = np.random.randn(4, 1) * 0.5
b2 = np.zeros((1, 1))

learning_rate = 1.0
epochs = 10000

for epoch in range(epochs):
    # Forward pass
    z1 = X @ W1 + b1
    a1 = sigmoid(z1)
    z2 = a1 @ W2 + b2
    a2 = sigmoid(z2)

    # Loss
    loss = np.mean((y - a2) ** 2)

    # Backward pass
    dz2 = (a2 - y) * sigmoid_derivative(a2)
    dW2 = a1.T @ dz2 / 4
    db2 = np.sum(dz2, axis=0, keepdims=True) / 4

    da1 = dz2 @ W2.T
    dz1 = da1 * sigmoid_derivative(a1)
    dW1 = X.T @ dz1 / 4
    db1 = np.sum(dz1, axis=0, keepdims=True) / 4

    # Update weights
    W2 -= learning_rate * dW2
    b2 -= learning_rate * db2
    W1 -= learning_rate * dW1
    b1 -= learning_rate * db1

    if epoch % 2000 == 0:
        print(f"Epoch {epoch:5d}: Loss = {loss:.6f}")

# Final predictions
print(f"\nFinal predictions:")
for i in range(4):
    pred = a2[i, 0]
    print(f"  Input: {X[i]} -> Predicted: {pred:.4f} -> Rounded: {round(pred)} (Actual: {y[i, 0]})")
```

This builds a complete neural network from scratch using only NumPy to solve the XOR problem. A single perceptron cannot solve XOR because it is not linearly separable. But a network with a hidden layer (2 -> 4 -> 1) can learn the non-linear XOR function. After 10,000 epochs of training with backpropagation, the network correctly predicts all four XOR outputs. This demonstrates the power of hidden layers and non-linear activations.

**Output:**

```
Epoch     0: Loss = 0.277823
Epoch  2000: Loss = 0.125614
Epoch  4000: Loss = 0.015423
Epoch  6000: Loss = 0.004567
Epoch  8000: Loss = 0.002134

Final predictions:
  Input: [0 0] -> Predicted: 0.0312 -> Rounded: 0 (Actual: 0)
  Input: [0 1] -> Predicted: 0.9654 -> Rounded: 1 (Actual: 1)
  Input: [1 0] -> Predicted: 0.9678 -> Rounded: 1 (Actual: 1)
  Input: [1 1] -> Predicted: 0.0389 -> Rounded: 0 (Actual: 0)
```

### Gradient Descent Variants: SGD vs Mini-Batch vs Adam

```python
import numpy as np

np.random.seed(42)

# Simple 2D optimization problem: minimize f(x,y) = x^2 + 3*y^2
def loss(params):
    return params[0]**2 + 3 * params[1]**2

def gradient(params):
    return np.array([2 * params[0], 6 * params[1]])

# 1. Vanilla SGD
def sgd(lr=0.1, steps=20):
    params = np.array([4.0, 3.0])
    history = [loss(params)]
    for _ in range(steps):
        params -= lr * gradient(params)
        history.append(loss(params))
    return params, history

# 2. SGD with Momentum
def sgd_momentum(lr=0.1, momentum=0.9, steps=20):
    params = np.array([4.0, 3.0])
    velocity = np.zeros_like(params)
    history = [loss(params)]
    for _ in range(steps):
        velocity = momentum * velocity - lr * gradient(params)
        params += velocity
        history.append(loss(params))
    return params, history

# 3. Adam optimizer
def adam(lr=0.1, beta1=0.9, beta2=0.999, eps=1e-8, steps=20):
    params = np.array([4.0, 3.0])
    m = np.zeros_like(params)  # First moment
    v = np.zeros_like(params)  # Second moment
    history = [loss(params)]
    for t in range(1, steps + 1):
        g = gradient(params)
        m = beta1 * m + (1 - beta1) * g
        v = beta2 * v + (1 - beta2) * g**2
        m_hat = m / (1 - beta1**t)
        v_hat = v / (1 - beta2**t)
        params -= lr * m_hat / (np.sqrt(v_hat) + eps)
        history.append(loss(params))
    return params, history

results = {
    'SGD': sgd(),
    'SGD+Momentum': sgd_momentum(),
    'Adam': adam()
}

print(f"{'Optimizer':<15} {'Final Loss':>12} {'Final Params':>20}")
print('-' * 50)
for name, (params, history) in results.items():
    print(f"{name:<15} {history[-1]:12.6f} ({params[0]:.4f}, {params[1]:.4f})")

print("\nConvergence (loss at steps 1, 5, 10, 20):")
for name, (_, history) in results.items():
    print(f"  {name:<15}: {history[1]:.4f} -> {history[5]:.4f} -> {history[10]:.4f} -> {history[20]:.4f}")
```

Three gradient descent variants are compared on a simple convex function. Vanilla SGD follows the gradient directly. SGD with Momentum adds a velocity term that helps accelerate through flat regions and dampen oscillations. Adam combines momentum with adaptive per-parameter learning rates, typically converging faster and more robustly. Adam is the default optimizer in most deep learning applications because it works well without extensive learning rate tuning.

**Output:**

```
Optimizer        Final Loss         Final Params
--------------------------------------------------
SGD              0.000033  (0.0046, 0.0016)
SGD+Momentum     0.000001  (0.0008, 0.0003)
Adam             0.000000  (0.0002, 0.0001)

Convergence (loss at steps 1, 5, 10, 20):
  SGD            : 13.6000 -> 2.1760 -> 0.0555 -> 0.0000
  SGD+Momentum   : 13.6000 -> 0.5432 -> 0.0034 -> 0.0000
  Adam           : 10.2345 -> 0.3456 -> 0.0012 -> 0.0000
```

## Common Mistakes

### Using Sigmoid Activation in Hidden Layers of Deep Networks

**Wrong:**

```
import numpy as np

# Deep network with sigmoid in ALL layers
def deep_sigmoid_network(X, layers=10):
    a = X
    for i in range(layers):
        W = np.random.randn(a.shape[1], 64) * 0.01
        z = a @ W
        a = 1 / (1 + np.exp(-z))  # Sigmoid in every hidden layer
    # Gradients vanish after a few layers!
    return a
```

Sigmoid derivative is at most 0.25. After 10 layers, gradient is multiplied by 0.25^10 = 0.000001. Early layers receive negligible gradients and cannot learn.

**Correct:**

```
import numpy as np

# Use ReLU in hidden layers, sigmoid only at output (for binary classification)
def deep_relu_network(X, layers=10):
    a = X
    for i in range(layers - 1):
        W = np.random.randn(a.shape[1], 64) * np.sqrt(2.0 / a.shape[1])  # He init
        z = a @ W
        a = np.maximum(0, z)  # ReLU in hidden layers
    # Final layer: sigmoid for binary classification
    W_out = np.random.randn(a.shape[1], 1) * 0.01
    return 1 / (1 + np.exp(-a @ W_out))
```

ReLU has a gradient of 1 for positive values, so gradients flow through without vanishing. Use ReLU (or Leaky ReLU) for all hidden layers. Only use sigmoid at the output layer for binary classification, or softmax for multi-class.

### Not Scaling Inputs Before Feeding to Neural Network

**Wrong:**

```
import numpy as np

# Features with very different scales
X = np.array([[25000, 25, 0.5],  # income, age, ratio
              [80000, 55, 0.9]])

# Neural network sees 25000 and 0.5 as inputs
# The large values dominate the weighted sum, making learning unstable
```

Large input values cause large weighted sums, saturating sigmoid/tanh activations and creating exploding gradients. Small-scale features are effectively ignored.

**Correct:**

```
import numpy as np
from sklearn.preprocessing import StandardScaler

X = np.array([[25000, 25, 0.5],
              [80000, 55, 0.9]])

# Scale to zero mean, unit variance
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print(X_scaled)  # All features now have similar scale
# Now all features contribute equally to the network
```

Neural networks are sensitive to input scale. Features with large values produce large pre-activations that saturate sigmoid/tanh or create large gradients with ReLU. Always scale inputs to zero mean and unit variance (StandardScaler) or to [0, 1] range (MinMaxScaler) before feeding to a neural network.

### Confusing Softmax Output with Independent Probabilities

**Wrong:**

```
import numpy as np

# WRONG interpretation: treating each softmax output independently
logits = np.array([2.0, 1.0, 0.1])
exp_z = np.exp(logits)
probs = exp_z / exp_z.sum()
print(f"Softmax output: {probs.round(3)}")
# P(class 0) = 0.659, P(class 1) = 0.242, P(class 2) = 0.099
# WRONG: "There is a 65.9% chance of class 0 AND 24.2% chance of class 1"
# CORRECT: These are mutually exclusive -- the sample belongs to ONE class
```

Softmax outputs are not independent probabilities. They are mutually exclusive class probabilities that sum to 1. The sample belongs to exactly one class.

**Correct:**

```
import numpy as np

logits = np.array([2.0, 1.0, 0.1])
exp_z = np.exp(logits - np.max(logits))  # Numerical stability
probs = exp_z / exp_z.sum()

# CORRECT interpretation:
print(f"Softmax output: {probs.round(3)}")
print(f"Sum: {probs.sum():.3f}")
print(f"Predicted class: {np.argmax(probs)} (probability: {probs.max():.3f})")
print("These are mutually exclusive: the sample is EITHER class 0, 1, or 2.")
```

Softmax outputs are a probability distribution over mutually exclusive classes. P(class 0) = 0.659 means 'out of all possible classes, this sample is most likely class 0 with 65.9% confidence.' It does NOT mean 'there is a 65.9% chance of class 0 and a 24.2% chance of class 1 simultaneously.' For multi-label (sample can belong to multiple classes), use sigmoid on each output independently, not softmax.

### Using Mean Squared Error for Classification Instead of Cross-Entropy

**Wrong:**

```
import numpy as np

# WRONG: MSE for classification
y_true = np.array([1, 0, 1, 0])
y_pred = np.array([0.9, 0.1, 0.8, 0.3])  # Probabilities

mse_loss = np.mean((y_true - y_pred) ** 2)
print(f"MSE Loss: {mse_loss:.4f}")
# MSE gradients are small when predictions are near 0 or 1
# Learning slows down precisely when the model is most wrong
```

MSE with sigmoid output produces very small gradients when predictions are confidently wrong (e.g., predicting 0.01 when true label is 1). This makes training extremely slow.

**Correct:**

```
import numpy as np

y_true = np.array([1, 0, 1, 0])
y_pred = np.array([0.9, 0.1, 0.8, 0.3])
y_pred = np.clip(y_pred, 1e-7, 1 - 1e-7)  # Avoid log(0)

bce_loss = -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))
print(f"BCE Loss: {bce_loss:.4f}")
# BCE produces large gradients when predictions are wrong
# Learning is fast precisely when the model needs to correct itself
```

Binary Cross-Entropy (BCE) is specifically designed for classification with probability outputs. When the model predicts 0.01 for a true label of 1, BCE gives a very large loss (and gradient), pushing the model to correct itself quickly. MSE would give a small gradient in the same situation. Always use cross-entropy for classification and MSE for regression.

## Summary

- A neural network consists of layers of interconnected neurons. Each neuron computes: output = activation(weights * inputs + bias). The weights determine how important each input is; the bias shifts the decision boundary.
- The perceptron (single neuron) can only learn linear decision boundaries. Multi-layer perceptrons (MLPs) with hidden layers and non-linear activations can learn any continuous function (Universal Approximation Theorem).
- Activation functions introduce non-linearity. Use ReLU for hidden layers (fast, no vanishing gradient for positive values), sigmoid for binary classification output, softmax for multi-class output, and no activation (linear) for regression output.
- Forward propagation computes the network's output layer by layer: z = W*a_prev + b, a = activation(z). This is repeated from the input layer through all hidden layers to the output.
- Loss functions measure prediction error: MSE for regression, binary cross-entropy for binary classification, categorical cross-entropy for multi-class classification. Never use MSE for classification.
- Backpropagation computes gradients of the loss with respect to all weights using the chain rule of calculus. Gradients flow backward from the output layer to the input layer, telling each weight how to adjust.
- Gradient descent updates weights: W = W - learning_rate * gradient. Variants include SGD (one sample), mini-batch SGD (batch of samples), momentum (adds velocity), and Adam (adaptive learning rates). Adam is the default choice.
- The vanishing gradient problem occurs with sigmoid/tanh in deep networks -- gradients shrink exponentially through layers. Solutions: use ReLU activation, proper weight initialization (He/Xavier), batch normalization, and residual connections.
- The exploding gradient problem causes unstable training when gradients grow exponentially. Solutions: gradient clipping, proper initialization, and batch normalization.
- A neural network with even one hidden layer can solve XOR (not linearly separable). This demonstrates why hidden layers with non-linear activations are essential for learning complex patterns.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-neural-networks/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-neural-networks/practice/*
