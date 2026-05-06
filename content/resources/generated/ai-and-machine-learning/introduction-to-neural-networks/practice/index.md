---
title: "Practice: Introduction to Neural Networks"
description: "56 practice problems for Introduction to Neural Networks in AI and Machine Learning"
slug: introduction-to-neural-networks-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-neural-networks/practice/
category: "AI and Machine Learning"
---
# Practice: Introduction to Neural Networks

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] Calculate the output of a neuron with inputs [2, 3], weights [0.5, -0.5], bias 1, and ReLU activation.

```
z = 2*0.5 + 3*(-0.5) + 1
output = ReLU(z)
```

*Hint:* First compute the weighted sum, then apply ReLU (max(0, z)).

**Answer:** `z = 1.0 + (-1.5) + 1.0 = 0.5`
`output = ReLU(0.5) = 0.5`

Weighted sum: 2*0.5 = 1.0, 3*(-0.5) = -1.5, plus bias 1.0 gives z = 0.5. ReLU of a positive number is the number itself: ReLU(0.5) = 0.5.

### Q2. [Easy] Calculate the output of a neuron with inputs [4, -1], weights [0.3, 0.7], bias -2, and sigmoid activation.

```
z = 4*0.3 + (-1)*0.7 + (-2)
output = sigmoid(z) = 1/(1+e^(-z))
```

*Hint:* Compute z first, then apply sigmoid = 1/(1+e^(-z)).

**Answer:** `z = 1.2 + (-0.7) + (-2.0) = -1.5`
`output = sigmoid(-1.5) = 1/(1+e^1.5) = 1/(1+4.4817) = 0.1824`

Weighted sum: 4*0.3=1.2, (-1)*0.7=-0.7, bias=-2. z=-1.5. Sigmoid(-1.5) = 1/(1+e^1.5) = 1/5.4817 = 0.1824. The negative z produces a value below 0.5 (closer to 0).

### Q3. [Easy] What is the role of the bias term in a neuron?

*Hint:* Think about what happens to the decision boundary without a bias.

**Answer:** The bias allows the neuron to **shift its activation** independently of the inputs. Without bias, the neuron's output is zero when all inputs are zero. With bias, the neuron can fire (produce non-zero output) even with zero inputs. Geometrically, the bias shifts the decision boundary away from the origin, giving the neuron more flexibility to fit the data.

Consider a neuron trying to learn the threshold 'fire when x > 3'. Without bias, the decision boundary must pass through the origin (x=0). With bias, the boundary can be at any position. Bias is like the intercept in linear regression.

### Q4. [Easy] Why can a single perceptron not learn the XOR function?

*Hint:* XOR is not linearly separable. A perceptron creates a linear decision boundary.

**Answer:** XOR outputs: (0,0)->0, (0,1)->1, (1,0)->1, (1,1)->0. If you plot these points, no single straight line can separate the 1s from the 0s. A perceptron creates a **linear decision boundary** (a straight line in 2D). Since XOR is **not linearly separable**, a single perceptron cannot learn it. A multi-layer network with at least one hidden layer can learn XOR because the hidden layer creates non-linear transformations that make the problem linearly separable in a higher-dimensional space.

This was famously demonstrated by Minsky and Papert in 1969, which temporarily halted neural network research. The solution (multi-layer networks with backpropagation) was not widely adopted until the 1980s.

### Q5. [Easy] What activation function would you use for the output layer of a model that predicts house prices?

*Hint:* House prices are continuous positive numbers. What activation allows any positive output?

**Answer:** **No activation function (linear/identity)**. House prices are continuous values that can be any positive number. A linear output layer outputs the raw weighted sum without any transformation, allowing it to predict any value. Sigmoid would limit output to (0,1), ReLU would clip negative values. For this regression task, the output layer should be linear.

The choice of output activation depends on the task: sigmoid for binary classification (output in 0-1), softmax for multi-class (probabilities summing to 1), ReLU if output must be non-negative, and linear (no activation) for general regression.

### Q6. [Easy] What is the output of softmax applied to logits [1.0, 2.0, 3.0]?

```
import numpy as np
z = np.array([1.0, 2.0, 3.0])
exp_z = np.exp(z)
softmax = exp_z / exp_z.sum()
print(softmax.round(4))
```

*Hint:* Compute e^z for each value, then divide by the sum of all e^z values.

**Answer:** `[0.0900 0.2447 0.6652]`

e^1=2.718, e^2=7.389, e^3=20.086. Sum=30.193. Softmax: [2.718/30.193, 7.389/30.193, 20.086/30.193] = [0.0900, 0.2447, 0.6652]. They sum to 1.0. The highest logit (3.0) gets the highest probability (66.5%).

### Q7. [Medium] Calculate the binary cross-entropy loss for true label y=1 and predicted probability p=0.8.

```
BCE = -(y * log(p) + (1-y) * log(1-p))
```

*Hint:* Plug y=1 and p=0.8 into the formula. log means natural logarithm.

**Answer:** `BCE = -(1 * ln(0.8) + 0 * ln(0.2)) = -ln(0.8) = -(-0.2231) = 0.2231`

With y=1, the second term (1-y)*log(1-p) drops out. Loss = -log(0.8) = 0.2231. This is a small loss because the prediction (0.8) is close to the true label (1). If p were 0.1 (very wrong), loss would be -log(0.1) = 2.3026 (much larger).

### Q8. [Medium] What is the vanishing gradient problem and which activation functions cause it?

*Hint:* Think about what happens when you multiply many small numbers together.

**Answer:** The vanishing gradient problem occurs when gradients become extremely small as they propagate backward through many layers. **Sigmoid** (max derivative = 0.25) and **tanh** (max derivative = 1.0, but often < 1) cause this. After n layers, the gradient is multiplied by the derivative at each layer. With sigmoid, after 10 layers the gradient can shrink by a factor of 0.25^10 = 0.000001. The result: early layers receive negligible gradients and stop learning.

Solutions: (1) Use ReLU (derivative = 1 for positive values). (2) Use proper weight initialization (He initialization for ReLU). (3) Use batch normalization (normalizes activations to prevent saturation). (4) Use skip/residual connections (gradients can bypass layers).

### Q9. [Medium] Explain the difference between batch gradient descent, stochastic gradient descent (SGD), and mini-batch SGD.

*Hint:* They differ in how many samples are used to compute each gradient update.

**Answer:** **Batch GD**: Uses ALL training samples to compute each gradient update. Stable but slow (one update per pass through the entire dataset). **SGD**: Uses ONE random sample per update. Very fast (n updates per pass) but noisy (high variance in gradient direction). **Mini-batch SGD**: Uses a small batch (typically 32-256 samples) per update. Balances speed and stability. Most commonly used in practice because it leverages GPU parallelism and reduces noise while being fast.

Mini-batch SGD is the standard in deep learning. Batch size affects training: smaller batches add noise that can help escape local minima but may be unstable; larger batches give more accurate gradients but may converge to sharper minima that generalize worse.

### Q10. [Medium] Given weights W=[0.5, -0.3] and bias b=0.1, compute the sigmoid derivative at input X=[2, 1].

```
z = 2*0.5 + 1*(-0.3) + 0.1
a = sigmoid(z)
derivative = a * (1 - a)
```

*Hint:* First compute z, then sigmoid(z), then the derivative formula: sigmoid(z) * (1 - sigmoid(z)).

**Answer:** `z = 1.0 - 0.3 + 0.1 = 0.8`
`a = sigmoid(0.8) = 1/(1+e^(-0.8)) = 0.6900`
`derivative = 0.6900 * (1 - 0.6900) = 0.6900 * 0.3100 = 0.2139`

The sigmoid derivative at z=0.8 is 0.2139. This is less than the maximum of 0.25 (at z=0). As z moves further from 0, the derivative gets smaller, illustrating why sigmoid causes vanishing gradients in deep networks.

### Q11. [Medium] Write a Python function that performs forward propagation for a network with one hidden layer. Input: X (n_samples x n_features), W1, b1, W2, b2. Hidden layer uses ReLU, output uses sigmoid.

*Hint:* z1 = X @ W1 + b1, a1 = relu(z1), z2 = a1 @ W2 + b2, output = sigmoid(z2).

**Answer:** ```
import numpy as np

def forward(X, W1, b1, W2, b2):
    z1 = X @ W1 + b1
    a1 = np.maximum(0, z1)  # ReLU
    z2 = a1 @ W2 + b2
    a2 = 1 / (1 + np.exp(-z2))  # Sigmoid
    return z1, a1, z2, a2

# Test
X = np.array([[1.0, 2.0]])
W1 = np.array([[0.1, 0.2], [0.3, 0.4]])
b1 = np.array([0.1, 0.1])
W2 = np.array([[0.5], [0.6]])
b2 = np.array([0.1])

z1, a1, z2, a2 = forward(X, W1, b1, W2, b2)
print(f"Hidden: z1={z1.round(3)}, a1={a1.round(3)}")
print(f"Output: z2={z2.round(3)}, a2={a2.round(3)}")
```

Forward propagation is two matrix multiplications with activation functions. We return all intermediate values (z1, a1, z2, a2) because they are needed for backpropagation. The function works with any number of samples (rows in X) due to matrix multiplication broadcasting.

### Q12. [Hard] Explain the chain rule in the context of backpropagation. How does it allow us to compute gradients for weights in early layers?

*Hint:* The chain rule decomposes a complex derivative into a product of simpler derivatives.

**Answer:** The chain rule states that if y = f(g(x)), then dy/dx = f'(g(x)) * g'(x). In a neural network, the loss L depends on the output a2, which depends on z2, which depends on a1, which depends on z1, which depends on W1. To find dL/dW1, we chain: **dL/dW1 = dL/da2 * da2/dz2 * dz2/da1 * da1/dz1 * dz1/dW1**. Each factor is a local derivative that is easy to compute. By multiplying them together, we get the gradient for W1 without needing to compute the overall derivative directly. This is efficient because we compute gradients layer by layer, reusing intermediate results.

Without the chain rule, computing dL/dW1 directly would require differentiating through the entire network at once -- intractable for deep networks. The chain rule decomposes this into simple local derivatives that can be computed and multiplied. This is the mathematical foundation of backpropagation.

### Q13. [Hard] A neuron has weights [0.4, -0.6, 0.2], bias 0.5, and Leaky ReLU activation (alpha=0.01). Compute the output for input [3, 2, -1].

```
z = 3*0.4 + 2*(-0.6) + (-1)*0.2 + 0.5
output = LeakyReLU(z, alpha=0.01)
```

*Hint:* Compute z first. If z > 0, output = z. If z <= 0, output = 0.01 * z.

**Answer:** `z = 1.2 + (-1.2) + (-0.2) + 0.5 = 0.3`
`output = LeakyReLU(0.3) = 0.3` (since z > 0)

Weighted sum: 3*0.4=1.2, 2*(-0.6)=-1.2, (-1)*0.2=-0.2, bias=0.5. z=0.3. Since z is positive, Leaky ReLU outputs z directly: 0.3. If z were -0.3, the output would be 0.01*(-0.3) = -0.003.

### Q14. [Hard] What is the Adam optimizer and why is it preferred over vanilla SGD?

*Hint:* Adam combines momentum with adaptive learning rates for each parameter.

**Answer:** Adam (Adaptive Moment Estimation) maintains two running averages for each weight: (1) **First moment (m)**: Exponential moving average of the gradients (like momentum). Helps maintain direction and accelerate through flat regions. (2) **Second moment (v)**: Exponential moving average of squared gradients. Captures the magnitude of recent gradients for each parameter individually. Adam uses both to compute updates: large gradients get dampened (divided by sqrt(v)), small gradients get amplified. This means each parameter gets its own adaptive learning rate. Adam is preferred because: it converges faster, requires less learning rate tuning, handles sparse gradients well, and works robustly across different architectures.

Vanilla SGD uses the same learning rate for all parameters and can oscillate. Adam adapts: parameters with large gradients get smaller effective learning rates, parameters with small gradients get larger ones. Default hyperparameters (lr=0.001, beta1=0.9, beta2=0.999) work well for most problems.

### Q15. [Hard] Write a complete neural network from scratch that solves XOR using NumPy. Architecture: 2 inputs -> 4 hidden (sigmoid) -> 1 output (sigmoid). Train for 5000 epochs and print predictions.

*Hint:* Initialize weights randomly. Forward pass: z1=X@W1+b1, a1=sigmoid(z1), z2=a1@W2+b2, a2=sigmoid(z2). Backward: dz2=a2-y, dW2=a1.T@dz2/4, da1=dz2@W2.T, dz1=da1*a1*(1-a1), dW1=X.T@dz1/4.

**Answer:** ```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

X = np.array([[0,0],[0,1],[1,0],[1,1]])
y = np.array([[0],[1],[1],[0]])

np.random.seed(42)
W1 = np.random.randn(2, 4) * 0.5
b1 = np.zeros((1, 4))
W2 = np.random.randn(4, 1) * 0.5
b2 = np.zeros((1, 1))
lr = 1.0

for epoch in range(5000):
    z1 = X @ W1 + b1
    a1 = sigmoid(z1)
    z2 = a1 @ W2 + b2
    a2 = sigmoid(z2)

    dz2 = (a2 - y) * a2 * (1 - a2)
    dW2 = a1.T @ dz2 / 4
    db2 = dz2.mean(axis=0, keepdims=True)
    da1 = dz2 @ W2.T
    dz1 = da1 * a1 * (1 - a1)
    dW1 = X.T @ dz1 / 4
    db1 = dz1.mean(axis=0, keepdims=True)

    W2 -= lr * dW2
    b2 -= lr * db2
    W1 -= lr * dW1
    b1 -= lr * db1

print("Predictions:")
for i in range(4):
    print(f"  {X[i]} -> {a2[i,0]:.4f} (expected {y[i,0]})")
```

This complete XOR network demonstrates all neural network fundamentals: weight initialization, forward propagation through two layers, loss computation, backpropagation with chain rule, and weight updates. After training, the network correctly predicts all four XOR outputs, proving that a hidden layer with non-linear activation solves non-linearly separable problems.

### Q16. [Easy] Calculate the output of a neuron with inputs [1, -1], weights [0.5, 0.5], bias 0, and sigmoid activation.

*Hint:* z = 1*0.5 + (-1)*0.5 + 0 = 0. What is sigmoid(0)?

**Answer:** `z = 0.5 + (-0.5) + 0 = 0`
`sigmoid(0) = 0.5`

The positive and negative inputs cancel out, giving z=0. Sigmoid(0) = 1/(1+1) = 0.5. This is the decision boundary -- the neuron is maximally uncertain.

### Q17. [Medium] What is the difference between forward propagation and backpropagation?

*Hint:* One computes predictions, the other computes gradients.

**Answer:** **Forward propagation** computes the network's output from inputs: data flows forward through layers (input -> hidden -> output), applying weights, biases, and activations at each layer to produce a prediction. **Backpropagation** computes gradients of the loss: gradients flow backward (output -> hidden -> input) using the chain rule, telling each weight how much it contributed to the error and how to adjust.

Forward propagation is the 'prediction' step (compute output). Backpropagation is the 'learning' step (compute how to improve). One forward pass + one backward pass + one weight update = one training iteration.

### Q18. [Hard] A 2-layer network has input dimension 3, hidden dimension 4, and output dimension 2. How many total trainable parameters does it have?

*Hint:* Count weights and biases for each layer: W1 (3x4), b1 (4), W2 (4x2), b2 (2).

**Answer:** `W1: 3*4 = 12, b1: 4, W2: 4*2 = 8, b2: 2`
`Total: 12 + 4 + 8 + 2 = 26 parameters`

Layer 1 connects 3 inputs to 4 hidden neurons: 3*4=12 weights + 4 biases = 16 parameters. Layer 2 connects 4 hidden to 2 outputs: 4*2=8 weights + 2 biases = 10 parameters. Total: 26. Counting parameters is important for understanding model complexity.

### Q19. [Easy] What is the purpose of an activation function in a neural network?

*Hint:* Without it, the network is just a linear transformation.

**Answer:** Activation functions introduce **non-linearity** into the network. Without activation functions, a multi-layer network would be equivalent to a single linear transformation (stacking linear layers gives another linear layer). Non-linearity allows the network to learn complex, non-linear patterns like curves, clusters, and decision boundaries that a linear model cannot represent.

If f(x) = Ax + b (linear), then f(f(x)) = A(Ax + b) + b = A^2*x + Ab + b, which is still linear. No matter how many linear layers you stack, the result is linear. Activation functions break this linearity, enabling the network to approximate any function.

### Q20. [Medium] Calculate the binary cross-entropy loss for y=0, p=0.2.

```
BCE = -(y*log(p) + (1-y)*log(1-p))
```

*Hint:* With y=0, only the (1-y)*log(1-p) term contributes.

**Answer:** `BCE = -(0*ln(0.2) + 1*ln(0.8)) = -ln(0.8) = 0.2231`

With y=0, loss = -log(1-0.2) = -log(0.8) = 0.2231. The prediction (0.2 for class 1) is close to the truth (0), so loss is small.

## Mixed Questions

### Q1. [Easy] What is ReLU(-5)? What is ReLU(3)?

*Hint:* ReLU(z) = max(0, z).

**Answer:** `ReLU(-5) = max(0, -5) = 0`
`ReLU(3) = max(0, 3) = 3`

ReLU outputs 0 for any negative input and the input itself for any positive input. This simplicity makes it very fast to compute and its gradient (0 or 1) does not vanish for positive values.

### Q2. [Easy] What are the three types of layers in a neural network?

*Hint:* Input, hidden, and output.

**Answer:** 1. **Input layer**: Receives raw features. Number of neurons = number of features. No computation occurs. 2. **Hidden layer(s)**: One or more layers where computation occurs. Each neuron applies weights, bias, and activation function. More layers = deeper network. 3. **Output layer**: Produces the final prediction. Architecture depends on the task (1 neuron for regression, 1 sigmoid neuron for binary classification, n softmax neurons for n-class classification).

The hidden layers are where the network learns representations. Each layer transforms the data into increasingly abstract features. The input layer just passes data, and the output layer formats the final result.

### Q3. [Easy] What is sigmoid(0)?

*Hint:* sigmoid(z) = 1/(1+e^(-z)). What is e^0?

**Answer:** `sigmoid(0) = 1/(1+e^0) = 1/(1+1) = 0.5`

At z=0, the sigmoid function outputs exactly 0.5. This is the midpoint. For large positive z, sigmoid approaches 1. For large negative z, sigmoid approaches 0.

### Q4. [Medium] Kavitha's neural network has a training loss that decreases but validation loss starts increasing after epoch 50. What is happening and how should she fix it?

*Hint:* When training loss improves but validation loss worsens, the model is memorizing the training data.

**Answer:** The model is **overfitting** -- it is memorizing training data patterns that do not generalize. Fixes: (1) **Early stopping**: Stop training at epoch 50 (where validation loss is lowest). (2) **Dropout**: Randomly disable neurons during training to prevent co-adaptation. (3) **Reduce model size**: Fewer layers or fewer neurons per layer. (4) **L2 regularization**: Penalize large weights. (5) **Data augmentation**: Increase effective training set size. (6) **Reduce learning rate**: Smaller updates are less likely to overfit.

The gap between training and validation loss is the hallmark of overfitting. The model has learned patterns specific to the training data (noise) rather than generalizable patterns. Regularization techniques constrain the model to learn simpler, more generalizable patterns.

### Q5. [Medium] A network outputs softmax probabilities [0.7, 0.2, 0.1] for three classes. If the true class is class 0 (one-hot: [1, 0, 0]), what is the categorical cross-entropy loss?

*Hint:* CCE = -sum(y_k * log(p_k)). Only the true class term is non-zero.

**Answer:** `CCE = -(1*ln(0.7) + 0*ln(0.2) + 0*ln(0.1)) = -ln(0.7) = 0.3567`

Since the one-hot label is [1, 0, 0], only the first term survives: -log(0.7) = 0.3567. The loss only depends on the probability assigned to the correct class. If the model predicted 0.99 for class 0, loss would be -log(0.99) = 0.01 (much smaller, better prediction).

### Q6. [Medium] What is the dying ReLU problem and how does Leaky ReLU solve it?

*Hint:* If a ReLU neuron always receives negative inputs, its output and gradient are always 0.

**Answer:** The **dying ReLU problem**: If a neuron's weighted sum is always negative (e.g., due to a large negative bias or bad weight initialization), ReLU outputs 0 and its gradient is 0. Since the gradient is 0, the weights never update, and the neuron is permanently 'dead' -- it never activates again. **Leaky ReLU** fixes this by outputting a small positive slope for negative inputs: LeakyReLU(z) = z if z > 0, else 0.01*z. The gradient for negative z is 0.01 (not 0), so the neuron can still learn and potentially recover.

In practice, dying ReLU is more common with high learning rates (which can push weights into a region where z is always negative). Leaky ReLU, Parametric ReLU (learnable slope), and ELU are all variants designed to solve this. However, standard ReLU still works well in most cases.

### Q7. [Medium] Write a function that computes the softmax of a vector with numerical stability (subtracting the max before exponentiating).

*Hint:* Subtract np.max(z) from z before computing exp. This prevents overflow for large values.

**Answer:** ```
import numpy as np

def stable_softmax(z):
    z_shifted = z - np.max(z)  # Subtract max for numerical stability
    exp_z = np.exp(z_shifted)
    return exp_z / exp_z.sum()

# Test with large values that would overflow without stability
print(stable_softmax(np.array([1000, 1001, 999])))
print(stable_softmax(np.array([2, 1, 0.1])))
print(f"Sum: {stable_softmax(np.array([2, 1, 0.1])).sum():.4f}")
```

Without subtracting the max, np.exp(1000) would overflow to infinity. Subtracting the max shifts all values to be <= 0, so exp values are <= 1, preventing overflow. The subtraction does not change the softmax output because the constant cancels in the numerator and denominator.

### Q8. [Hard] A 2-layer network has W1 shape (5, 10), b1 shape (10,), W2 shape (10, 3), b2 shape (3,). What is the input size, hidden size, output size, and total number of trainable parameters?

*Hint:* W shape is (input, output). Count all weights and biases.

**Answer:** **Input size**: 5 (W1 has 5 rows). **Hidden size**: 10 (W1 has 10 columns). **Output size**: 3 (W2 has 3 columns). **Total parameters**: W1 (5*10=50) + b1 (10) + W2 (10*3=30) + b2 (3) = **93 parameters**.

Weight matrices have shape (input_neurons, output_neurons). Bias vectors have shape (output_neurons,). The total parameter count is the sum of all elements in all weight matrices and bias vectors. Counting parameters is important for understanding model complexity and memory requirements.

### Q9. [Hard] What is He initialization and why is it important for networks with ReLU activations?

*Hint:* ReLU kills half the outputs (negative values become 0). Initialization must compensate for this.

**Answer:** He initialization sets weights from a normal distribution with mean 0 and standard deviation **sqrt(2/n_in)**, where n_in is the number of input connections. For ReLU networks, half the activations are zero (ReLU kills negative values), so the effective variance of the layer output is halved. He initialization compensates by doubling the initial variance (factor of 2 instead of 1). Without proper initialization, activations either vanish (all become 0) or explode (grow extremely large) as they propagate through layers, making training impossible.

Xavier initialization (sqrt(1/n_in)) was designed for sigmoid/tanh. He initialization (sqrt(2/n_in)) was designed for ReLU. Using Xavier with ReLU can cause activations to shrink to zero in deep networks. Using He initialization ensures activations maintain a healthy variance through the entire network depth.

### Q10. [Hard] Rajan builds a neural network for a 10-class classification problem. He uses sigmoid on the output layer instead of softmax. What goes wrong?

*Hint:* Sigmoid outputs are independent. Softmax outputs are mutually exclusive and sum to 1.

**Answer:** With sigmoid on each of 10 output neurons, each outputs an independent probability in (0, 1). These probabilities do **not sum to 1** and are not mutually exclusive. The model might output [0.8, 0.7, 0.9, ...] suggesting the sample belongs to multiple classes simultaneously. For **single-label multi-class classification** (each sample belongs to exactly one class), softmax is required because it produces a probability distribution where all outputs sum to 1 and are mutually exclusive. The loss function should be categorical cross-entropy (with softmax), not binary cross-entropy (with sigmoid).

Use sigmoid for multi-label classification (sample can belong to multiple classes simultaneously, like tags on an image). Use softmax for single-label multi-class classification (sample belongs to exactly one class, like digit recognition).

### Q11. [Hard] Calculate the weight update for a single weight w=0.5 if the gradient dL/dw=-0.3 and learning_rate=0.1.
Then calculate the update using Adam with m=-0.27, v=0.081, t=10, beta1=0.9, beta2=0.999, lr=0.1.

*Hint:* SGD: w_new = w - lr * gradient. Adam: correct bias in m and v, then update.

**Answer:** **SGD**: w_new = 0.5 - 0.1 * (-0.3) = 0.5 + 0.03 = **0.53**

**Adam**:
m_hat = -0.27 / (1 - 0.9^10) = -0.27 / 0.6513 = -0.4145
v_hat = 0.081 / (1 - 0.999^10) = 0.081 / 0.00995 = 8.1407
w_new = 0.5 - 0.1 * (-0.4145) / (sqrt(8.1407) + 1e-8) = 0.5 + 0.0145 = **0.5145**

SGD directly applies the gradient scaled by the learning rate. Adam first corrects for bias in the moment estimates (early in training m and v are biased toward zero), then divides the corrected first moment by the square root of the corrected second moment. This gives each parameter an adaptive learning rate based on its gradient history.

### Q12. [Hard] Explain why batch normalization helps train deep neural networks.

*Hint:* It normalizes the inputs to each layer, addressing internal covariate shift.

**Answer:** Batch normalization normalizes the activations of each layer to have **zero mean and unit variance** within each mini-batch. Benefits: (1) **Reduces internal covariate shift**: As weights update during training, the distribution of inputs to each layer changes. BN stabilizes these distributions, making training smoother. (2) **Allows higher learning rates**: Without BN, large learning rates cause instability. BN keeps activations in a well-conditioned range. (3) **Acts as regularization**: The noise from batch statistics adds a slight regularization effect, reducing overfitting. (4) **Reduces sensitivity to initialization**: Even with poor weight initialization, BN normalizes activations, preventing vanishing or exploding signals. (5) **Faster convergence**: Training typically converges 5-10x faster with BN.

BN applies the transformation: x_hat = (x - batch_mean) / sqrt(batch_var + eps), then scale and shift: y = gamma * x_hat + beta. Gamma and beta are learnable parameters that allow the network to undo the normalization if needed. BN is applied after the linear transformation and before the activation function.

### Q13. [Medium] What is the output?

```
import numpy as np

def leaky_relu(z, alpha=0.01):
    return np.where(z > 0, z, alpha * z)

values = np.array([-2, -1, 0, 1, 2])
print(leaky_relu(values))
```

*Hint:* For positive values, output = value. For negative values, output = 0.01 * value.

**Answer:** `[-0.02 -0.01  0.    1.    2.  ]`

Leaky ReLU: -2 -> 0.01*(-2) = -0.02, -1 -> -0.01, 0 -> 0, 1 -> 1, 2 -> 2. Unlike standard ReLU (which would output 0 for negative values), Leaky ReLU allows a small gradient for negative inputs, preventing the dying ReLU problem.

### Q14. [Hard] What is dropout and how does it prevent overfitting?

*Hint:* It randomly disables neurons during training.

**Answer:** Dropout randomly sets a fraction of neuron outputs to zero during each training step. With dropout rate 0.5, each neuron has a 50% chance of being 'dropped' in each forward pass. This prevents **co-adaptation**: neurons cannot rely on specific other neurons always being present, so they must learn more robust, independent features. At test time, all neurons are active but their outputs are scaled by (1 - dropout_rate). Dropout is equivalent to training an ensemble of many different sub-networks and averaging their predictions.

Dropout was introduced by Srivastava et al. (2014) and is one of the most effective regularization techniques for neural networks. Typical dropout rates: 0.2-0.5. Too much dropout causes underfitting; too little provides insufficient regularization.

## Multiple Choice Questions

### Q1. [Easy] What is the output range of the sigmoid activation function?

**Answer:** C

**C is correct.** Sigmoid(z) = 1/(1+e^(-z)) always outputs between 0 and 1 (exclusive). As z approaches infinity, sigmoid approaches 1. As z approaches negative infinity, sigmoid approaches 0.

### Q2. [Easy] Which activation function is most commonly used in hidden layers?

**Answer:** C

**C is correct.** ReLU (Rectified Linear Unit) is the default activation for hidden layers. It is fast, does not suffer from vanishing gradients for positive inputs, and works well in practice. Sigmoid (A) causes vanishing gradients. Softmax (B) is for output layers. Linear (D) adds no non-linearity.

### Q3. [Easy] What does backpropagation compute?

**Answer:** B

**B is correct.** Backpropagation uses the chain rule to compute the gradient (partial derivative) of the loss function with respect to every weight in the network. These gradients tell each weight how to adjust to reduce the loss.

### Q4. [Easy] For multi-class classification with 5 classes, which output layer configuration is correct?

**Answer:** C

**C is correct.** Softmax on 5 output neurons produces 5 probabilities that sum to 1, one for each class. Sigmoid (A) would give 5 independent probabilities that do not sum to 1. Single neuron (B) cannot represent 5 classes. ReLU (D) does not produce probabilities.

### Q5. [Easy] Which loss function is used for binary classification?

**Answer:** B

**B is correct.** Binary Cross-Entropy (BCE) is designed for binary classification with probability outputs. MSE (A) and MAE (C) are for regression. Hinge Loss (D) is used with SVM, not neural networks with sigmoid output.

### Q6. [Medium] What is ReLU(z) = max(0, z). What is its derivative for z > 0?

**Answer:** C

**C is correct.** For z > 0, ReLU(z) = z, and d(z)/dz = 1. For z < 0, ReLU(z) = 0, and the derivative is 0. At z = 0, the derivative is technically undefined but conventionally set to 0 in implementations.

### Q7. [Medium] Priya's network has 784 input neurons, two hidden layers with 128 and 64 neurons, and 10 output neurons. How many weight parameters does it have (excluding biases)?

**Answer:** A

**A is correct.** Weight count = sum of (input * output) for each layer. Layer 1: 784*128 = 100,352. Layer 2: 128*64 = 8,192. Layer 3: 64*10 = 640. Total: 109,184 weight parameters (excluding biases of 128+64+10=202).

### Q8. [Medium] Which optimizer adapts the learning rate for each parameter individually?

**Answer:** C

**C is correct.** Adam maintains per-parameter running averages of gradients and squared gradients, giving each parameter its own effective learning rate. Batch GD (A), Momentum (B), and Vanilla SGD (D) all use the same learning rate for every parameter.

### Q9. [Medium] The maximum value of the sigmoid derivative is:

**Answer:** B

**B is correct.** Sigmoid derivative = sigmoid(z) * (1 - sigmoid(z)). At z=0, sigmoid(0)=0.5, so derivative = 0.5*0.5 = 0.25. This maximum of 0.25 is why sigmoid causes vanishing gradients -- multiplying by 0.25 at each layer shrinks the gradient exponentially.

### Q10. [Medium] What does the Universal Approximation Theorem state?

**Answer:** B

**B is correct.** The theorem states that a feedforward network with a single hidden layer containing a finite number of neurons can approximate any continuous function to arbitrary precision. However, it does not say how many neurons are needed or how to train them -- in practice, deeper networks with fewer neurons per layer are often more efficient.

### Q11. [Hard] During training, Arjun notices that his loss jumps to NaN after a few epochs. What is the most likely cause?

**Answer:** B

**B is correct.** NaN loss typically results from exploding gradients: large gradients cause large weight updates, which cause even larger gradients, creating a positive feedback loop that sends weights to infinity. Solutions: reduce learning rate, use gradient clipping, use batch normalization, or use proper weight initialization.

### Q12. [Hard] What weight initialization should Deepa use for a network with ReLU activations?

**Answer:** C

**C is correct.** He initialization (sqrt(2/n_in)) compensates for ReLU killing half the activations (negative values become 0). All zeros (A) means all neurons learn the same thing (symmetry breaking problem). All ones (B) causes exploding activations. Xavier (D) is for sigmoid/tanh, not ReLU.

### Q13. [Hard] In a neural network with 5 hidden layers using sigmoid, approximately what fraction of the original gradient reaches the first hidden layer?

**Answer:** B

**B is correct.** Sigmoid's maximum derivative is 0.25. Through 5 layers, the gradient is multiplied by at most 0.25^5 = 0.00098 (about 0.1%). This is the vanishing gradient problem -- early layers receive gradients a thousand times smaller than the output layer, making them learn extremely slowly.

### Q14. [Hard] Why does subtracting np.max(z) before computing softmax not change the result?

**Answer:** B

**B is correct.** softmax(z - c) = exp(z_i - c) / sum(exp(z_j - c)) = exp(z_i)*exp(-c) / (sum(exp(z_j))*exp(-c)) = exp(z_i) / sum(exp(z_j)) = softmax(z). The constant exp(-c) appears in both numerator and denominator, canceling out. This trick prevents overflow when z values are large.

### Q15. [Easy] What happens if all weights in a neural network are initialized to zero?

**Answer:** B

**B is correct.** With all-zero weights, every neuron in a layer computes the same output. During backpropagation, they all receive the same gradient and update identically. They remain identical forever -- the network has only 1 effective neuron per layer. Random initialization breaks this symmetry.

### Q16. [Medium] Sanya's network outputs [0.3, 0.5, 0.8] from three output neurons with sigmoid activation for a 3-class problem. What is wrong?

**Answer:** B

**B is correct.** For single-label multi-class classification (sample belongs to exactly one class), outputs must be a probability distribution summing to 1. Sigmoid gives independent outputs that do not sum to 1. Softmax normalizes outputs to sum to 1. Sigmoid is correct only for multi-label classification (sample can belong to multiple classes).

### Q17. [Hard] What is gradient clipping and when is it used?

**Answer:** B

**B is correct.** Gradient clipping limits the magnitude of gradients during backpropagation. If a gradient exceeds the threshold, it is scaled down. This prevents exploding gradients (which cause NaN loss and unstable training) while preserving the gradient direction. Common in RNNs and deep networks.

### Q18. [Easy] What is the output of ReLU(0)?

**Answer:** B

**B is correct.** ReLU(z) = max(0, z). When z=0, output is 0.

### Q19. [Medium] Which loss function should Arun use for predicting house prices (regression)?

**Answer:** C

**C is correct.** MSE is standard for regression. Cross-Entropy variants are for classification.

### Q20. [Hard] Network: Input(100)->Hidden(256)->Hidden(128)->Hidden(64)->Output(10). Total weight parameters (excluding biases)?

**Answer:** A

**A is correct.** Weights = sum of (input * output) per layer: 25600 + 32768 + 8192 + 640 = 67,200.

### Q21. [Easy] What does "epoch" mean in neural network training?

**Answer:** B

**B is correct.** One epoch = model sees every training sample once. Training runs for many epochs.

### Q22. [Medium] Why is mini-batch gradient descent preferred over full batch for large datasets?

**Answer:** B

**B is correct.** Mini-batch is faster, GPU-friendly, and the noise from random sampling helps escape shallow local minima.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-neural-networks/*
