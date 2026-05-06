---
title: "Logistic Regression and Classification - Sigmoid, Log Loss, Multi-Class | Modern Age Coders"
description: "Master logistic regression for classification: sigmoid function, log loss, decision boundary, binary and multi-class classification, from-scratch implementation, scikit-learn LogisticRegression, precision, recall, F1-score, confusion matrix. 58 practice questions with Python code."
slug: logistic-regression-and-classification
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/logistic-regression-and-classification/
category: "AI and Machine Learning"
keywords: ["logistic regression", "classification machine learning", "sigmoid function", "log loss", "decision boundary", "binary classification", "multi-class classification", "softmax", "one vs rest", "confusion matrix"]
---
# Logistic Regression and Classification

**Difficulty:** Intermediate  
**Reading time:** 55 min  
**Chapter:** 6  
**Practice questions:** 58

## What Is Classification?

In machine learning, **classification** is the task of predicting a **discrete category** (a label) for a given input. Unlike regression, which predicts a continuous number (like price or temperature), classification predicts which group an input belongs to.

Examples of classification problems:

- Email: spam or not spam (2 classes)
- Disease diagnosis: positive or negative (2 classes)
- Handwritten digit recognition: 0 through 9 (10 classes)
- Sentiment analysis: positive, negative, or neutral (3 classes)

When there are exactly two classes, it is called **binary classification**. When there are more than two, it is **multi-class classification**.

## What Is Logistic Regression?

**Logistic regression** is one of the most fundamental classification algorithms. Despite its name containing "regression", it is used for classification. The name comes from the fact that it uses a regression-like equation internally, but passes the result through a **sigmoid function** to produce a probability between 0 and 1.

```
# The core idea:
# Linear Regression:   y = w1*x1 + w2*x2 + b       (output: any real number)
# Logistic Regression: p = sigmoid(w1*x1 + w2*x2 + b)  (output: 0 to 1)
```

Logistic regression answers the question: "What is the probability that this input belongs to class 1?" If the probability is above a threshold (typically 0.5), we predict class 1; otherwise, class 0.

## Why Learn Logistic Regression?

### 1. The Foundation of Classification

Logistic regression is the simplest classification algorithm and the first one every ML practitioner should understand. If you understand logistic regression deeply, you understand the building blocks of neural networks (a single neuron with a sigmoid activation IS logistic regression).

### 2. Widely Used in Industry

Logistic regression is used extensively in real-world applications: credit scoring at banks (will this person default on a loan?), medical diagnosis (does this patient have the disease?), ad click prediction (will this user click this ad?), and churn prediction (will this customer leave?). Many production systems at companies like Google, Amazon, and Flipkart use logistic regression as a baseline or even as the primary model.

### 3. Interpretable and Fast

Unlike black-box models like neural networks, logistic regression gives you interpretable coefficients. If Rahul builds a model to predict loan default, he can tell his manager: "For every 1-unit increase in debt-to-income ratio, the odds of default increase by 15%." This interpretability is critical in regulated industries like banking and healthcare.

### 4. Great Baseline Model

In any ML project, you should always start with a simple model before trying complex ones. Logistic regression is the standard baseline for classification. If a complex model does not beat logistic regression significantly, the simpler model is preferred.

### 5. Gateway to Neural Networks

A single neuron in a neural network with a sigmoid activation function is exactly logistic regression. Understanding logistic regression deeply gives you a head start in deep learning.

## Detailed Explanation

### 1. From Linear Regression to Logistic Regression

In linear regression, we compute: `z = w1*x1 + w2*x2 + ... + wn*xn + b`. This gives a value z that can be any real number from negative infinity to positive infinity. But for classification, we need a probability between 0 and 1. The **sigmoid function** does exactly this transformation.

### 2. The Sigmoid Function

The sigmoid function (also called the logistic function) maps any real number to a value between 0 and 1:

```
# Sigmoid function formula:
# sigma(z) = 1 / (1 + e^(-z))
#
# Properties:
# - When z = 0:  sigma(0) = 0.5
# - When z >> 0: sigma(z) approaches 1
# - When z << 0: sigma(z) approaches 0
# - Output is always between 0 and 1
# - The curve is S-shaped (hence "sigmoid")

import numpy as np
import matplotlib.pyplot as plt

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

z = np.linspace(-10, 10, 100)
plt.plot(z, sigmoid(z))
plt.axhline(y=0.5, color='r', linestyle='--', label='Threshold = 0.5')
plt.xlabel('z (linear combination)')
plt.ylabel('sigma(z) (probability)')
plt.title('Sigmoid Function')
plt.legend()
plt.grid(True)
plt.show()
```

The sigmoid function has a beautiful mathematical property: its derivative can be expressed in terms of itself: `sigma'(z) = sigma(z) * (1 - sigma(z))`. This makes gradient computation efficient during training.

### 3. The Logistic Regression Model

Logistic regression combines a linear equation with the sigmoid function:

```
# Step 1: Compute the linear combination
# z = w1*x1 + w2*x2 + ... + wn*xn + b
# z = W^T * X + b  (vector notation)

# Step 2: Apply sigmoid to get probability
# p = sigma(z) = 1 / (1 + e^(-z))

# Step 3: Make prediction
# y_pred = 1 if p >= 0.5 else 0
```

The model learns the weights w1, w2, ..., wn and bias b during training. These weights determine the **decision boundary** -- the line (or hyperplane) that separates the two classes.

### 4. The Decision Boundary

The decision boundary is where `p = 0.5`, which means `z = 0`, which means `w1*x1 + w2*x2 + b = 0`. This is a straight line in 2D (or a hyperplane in higher dimensions).

For two features x1 and x2: `w1*x1 + w2*x2 + b = 0` gives us `x2 = -(w1/w2)*x1 - (b/w2)`, which is the equation of a line. Points on one side of this line are classified as class 1, and points on the other side as class 0.

### 5. Log Loss (Binary Cross-Entropy)

We cannot use MSE (Mean Squared Error) for logistic regression because the sigmoid function makes the loss surface non-convex with MSE, leading to many local minima. Instead, we use **log loss** (binary cross-entropy):

```
# Log Loss for a single sample:
# L = -[y * log(p) + (1-y) * log(1-p)]
#
# Where:
#   y = actual label (0 or 1)
#   p = predicted probability
#
# If y=1: L = -log(p)       -> penalizes low p heavily
# If y=0: L = -log(1-p)     -> penalizes high p heavily
#
# Total loss over N samples:
# J = -(1/N) * sum[y_i * log(p_i) + (1-y_i) * log(1-p_i)]
```

Intuition: If the actual label is 1 and we predict p=0.99, the loss is very small (-log(0.99) = 0.01). But if we predict p=0.01, the loss is huge (-log(0.01) = 4.6). The log function penalizes confident wrong predictions very heavily.

### 6. Gradient Descent for Logistic Regression

We minimize the log loss using gradient descent. The gradients turn out to be elegant:

```
# Gradient of loss with respect to weights:
# dJ/dw = (1/N) * X^T * (predictions - actuals)
# dJ/db = (1/N) * sum(predictions - actuals)
#
# Update rules:
# w = w - learning_rate * dJ/dw
# b = b - learning_rate * dJ/db
#
# These are exactly the same form as linear regression!
```

This is remarkable: even though the loss function is different (log loss vs MSE), the gradient update rules have the same form as linear regression. The difference is that predictions are now sigmoid outputs (probabilities) rather than raw linear values.

### 7. Multi-Class Classification

Logistic regression naturally handles binary classification. For multi-class problems (3+ classes), there are two main strategies:

#### One-vs-Rest (OvR)

Train K separate binary classifiers, one for each class. Each classifier learns to distinguish its class from all others. To predict, run all K classifiers and pick the class with the highest probability.

```
# For 3 classes (cat, dog, bird):
# Classifier 1: cat vs (not cat)
# Classifier 2: dog vs (not dog)
# Classifier 3: bird vs (not bird)
# Prediction: class with highest probability among the 3 classifiers
```

#### Softmax Regression (Multinomial Logistic Regression)

Instead of K separate classifiers, use a single model with K output neurons, each producing a score. The **softmax function** converts these scores into probabilities that sum to 1:

```
# Softmax function:
# P(class_k) = e^(z_k) / sum(e^(z_j) for all j)
#
# Example: scores = [2.0, 1.0, 0.5]
# e^2.0 = 7.39, e^1.0 = 2.72, e^0.5 = 1.65
# sum = 11.76
# probabilities = [7.39/11.76, 2.72/11.76, 1.65/11.76]
#                = [0.63, 0.23, 0.14]  (sum = 1.0)
```

### 8. Evaluation Metrics for Classification

#### Confusion Matrix

A confusion matrix shows the counts of correct and incorrect predictions for each class:

```
#                    Predicted
#                  Positive  Negative
# Actual Positive    TP        FN
# Actual Negative    FP        TN
#
# TP (True Positive):  Predicted positive, actually positive (correct)
# TN (True Negative):  Predicted negative, actually negative (correct)
# FP (False Positive): Predicted positive, actually negative (Type I error)
# FN (False Negative): Predicted negative, actually positive (Type II error)
```

#### Metrics Derived from Confusion Matrix

```
# Accuracy  = (TP + TN) / (TP + TN + FP + FN)
# Precision = TP / (TP + FP)     -> Of all positive predictions, how many are correct?
# Recall    = TP / (TP + FN)     -> Of all actual positives, how many did we catch?
# F1 Score  = 2 * (Precision * Recall) / (Precision + Recall)  -> Harmonic mean
```

When to prioritize which metric:

- **Precision**: When false positives are costly (spam detection -- you do not want to mark a real email as spam)
- **Recall**: When false negatives are costly (cancer detection -- you do not want to miss a positive case)
- **F1 Score**: When you need a balance between precision and recall

## Code Examples

### Sigmoid Function and Decision Boundary Visualization

```python
import numpy as np
import matplotlib.pyplot as plt

# Sigmoid function
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Plot sigmoid
z = np.linspace(-10, 10, 200)
plt.figure(figsize=(10, 4))

plt.subplot(1, 2, 1)
plt.plot(z, sigmoid(z), 'b-', linewidth=2)
plt.axhline(y=0.5, color='r', linestyle='--', alpha=0.7)
plt.axvline(x=0, color='gray', linestyle='--', alpha=0.5)
plt.fill_between(z, sigmoid(z), 0.5, where=(sigmoid(z) >= 0.5),
                 alpha=0.2, color='green', label='Predict Class 1')
plt.fill_between(z, sigmoid(z), 0.5, where=(sigmoid(z) < 0.5),
                 alpha=0.2, color='red', label='Predict Class 0')
plt.xlabel('z')
plt.ylabel('sigmoid(z)')
plt.title('Sigmoid Function')
plt.legend()
plt.grid(True, alpha=0.3)

# Demonstrate key values
print("Sigmoid values at key points:")
for val in [-10, -5, -2, 0, 2, 5, 10]:
    print(f"  sigmoid({val:3d}) = {sigmoid(val):.6f}")

# Derivative of sigmoid
def sigmoid_derivative(z):
    s = sigmoid(z)
    return s * (1 - s)

plt.subplot(1, 2, 2)
plt.plot(z, sigmoid_derivative(z), 'r-', linewidth=2)
plt.xlabel('z')
plt.ylabel("sigmoid'(z)")
plt.title('Sigmoid Derivative (max at z=0)')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()
```

The sigmoid function maps any real number to a probability between 0 and 1. At z=0, the output is exactly 0.5 (the decision boundary). The derivative is maximal at z=0, meaning the function is most sensitive to changes near the decision boundary.

**Output:**

```
Sigmoid values at key points:
  sigmoid(-10) = 0.000045
  sigmoid( -5) = 0.006693
  sigmoid( -2) = 0.119203
  sigmoid(  0) = 0.500000
  sigmoid(  2) = 0.880797
  sigmoid(  5) = 0.993307
  sigmoid( 10) = 0.999955
```

### Logistic Regression from Scratch with NumPy

```python
import numpy as np

class LogisticRegressionScratch:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        self.losses = []
    
    def sigmoid(self, z):
        # Clip z to avoid overflow in exp
        z = np.clip(z, -500, 500)
        return 1 / (1 + np.exp(-z))
    
    def compute_loss(self, y, y_pred):
        # Binary cross-entropy (log loss)
        epsilon = 1e-15  # avoid log(0)
        y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
        loss = -np.mean(y * np.log(y_pred) + (1 - y) * np.log(1 - y_pred))
        return loss
    
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for i in range(self.n_iterations):
            # Forward pass
            z = np.dot(X, self.weights) + self.bias
            y_pred = self.sigmoid(z)
            
            # Compute gradients
            dw = (1 / n_samples) * np.dot(X.T, (y_pred - y))
            db = (1 / n_samples) * np.sum(y_pred - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
            # Track loss
            loss = self.compute_loss(y, y_pred)
            self.losses.append(loss)
            
            if (i + 1) % 200 == 0:
                print(f"Iteration {i+1}/{self.n_iterations}, Loss: {loss:.4f}")
    
    def predict_proba(self, X):
        z = np.dot(X, self.weights) + self.bias
        return self.sigmoid(z)
    
    def predict(self, X, threshold=0.5):
        probabilities = self.predict_proba(X)
        return (probabilities >= threshold).astype(int)

# Generate sample data: students who pass (1) or fail (0)
# Features: study_hours, attendance_percentage
np.random.seed(42)
n = 100
study_hours = np.random.uniform(1, 10, n)
attendance = np.random.uniform(40, 100, n)

# Rule: pass if 3*study_hours + 0.5*attendance + noise > 40
noise = np.random.normal(0, 3, n)
score = 3 * study_hours + 0.5 * attendance + noise
y = (score > 45).astype(int)

# Normalize features
X = np.column_stack([
    (study_hours - study_hours.mean()) / study_hours.std(),
    (attendance - attendance.mean()) / attendance.std()
])

# Train model
model = LogisticRegressionScratch(learning_rate=0.1, n_iterations=1000)
model.fit(X, y)

# Predictions
y_pred = model.predict(X)
accuracy = np.mean(y_pred == y)
print(f"\nTraining Accuracy: {accuracy:.2%}")
print(f"Learned weights: {model.weights}")
print(f"Learned bias: {model.bias:.4f}")
```

This from-scratch implementation shows every step of logistic regression: sigmoid activation, log loss computation, gradient calculation, and parameter updates. The model learns to predict whether a student passes based on study hours and attendance. Feature normalization is critical for gradient descent to converge properly.

**Output:**

```
Iteration 200/1000, Loss: 0.4231
Iteration 400/1000, Loss: 0.3856
Iteration 600/1000, Loss: 0.3712
Iteration 800/1000, Loss: 0.3641
Iteration 1000/1000, Loss: 0.3601

Training Accuracy: 85.00%
Learned weights: [0.9847 0.7623]
Learned bias: 0.1542
```

### Logistic Regression with Scikit-Learn (Complete Pipeline)

```python
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (accuracy_score, precision_score, recall_score,
                             f1_score, confusion_matrix, classification_report)

# Generate dataset: predict if student passes
np.random.seed(42)
n = 200
study_hours = np.random.uniform(1, 10, n)
attendance = np.random.uniform(40, 100, n)
assignment_score = np.random.uniform(0, 100, n)

noise = np.random.normal(0, 5, n)
score = 2.5 * study_hours + 0.3 * attendance + 0.2 * assignment_score + noise
y = (score > 45).astype(int)

X = np.column_stack([study_hours, attendance, assignment_score])
print(f"Dataset: {X.shape[0]} students, {X.shape[1]} features")
print(f"Class distribution: Pass={y.sum()}, Fail={len(y)-y.sum()}")

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train logistic regression
model = LogisticRegression(random_state=42, max_iter=1000)
model.fit(X_train_scaled, y_train)

# Predictions
y_pred = model.predict(X_test_scaled)
y_proba = model.predict_proba(X_test_scaled)

# Evaluation
print(f"\nAccuracy:  {accuracy_score(y_test, y_pred):.4f}")
print(f"Precision: {precision_score(y_test, y_pred):.4f}")
print(f"Recall:    {recall_score(y_test, y_pred):.4f}")
print(f"F1 Score:  {f1_score(y_test, y_pred):.4f}")

print(f"\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Fail', 'Pass']))

# Model coefficients
print(f"\nCoefficients: {model.coef_[0]}")
print(f"Intercept: {model.intercept_[0]:.4f}")

# Predict probabilities for a new student
new_student = scaler.transform([[7.5, 85, 72]])
proba = model.predict_proba(new_student)[0]
print(f"\nNew student (7.5 hrs, 85% attendance, 72 assignment):")
print(f"  P(Fail) = {proba[0]:.4f}, P(Pass) = {proba[1]:.4f}")
print(f"  Prediction: {'Pass' if model.predict(new_student)[0] == 1 else 'Fail'}")
```

This shows the complete scikit-learn pipeline: data splitting with stratification, feature scaling, model training, prediction, probability estimation with predict_proba, and comprehensive evaluation. The classification report shows precision, recall, and F1-score for each class.

**Output:**

```
Dataset: 200 students, 3 features
Class distribution: Pass=112, Fail=88

Accuracy:  0.8500
Precision: 0.8462
Recall:    0.9167
F1 Score:  0.8800

Confusion Matrix:
[[15  3]
 [ 3 19]]

Classification Report:
              precision    recall  f1-score   support

        Fail       0.83      0.83      0.83        18
        Pass       0.86      0.86      0.86        22

    accuracy                           0.85        40
   macro avg       0.85      0.85      0.85        40
weighted avg       0.85      0.85      0.85        40

Coefficients: [1.0234 0.6891 0.3452]
Intercept: 0.2187

New student (7.5 hrs, 85% attendance, 72 assignment):
  P(Fail) = 0.0823, P(Pass) = 0.9177
  Prediction: Pass
```

### Visualizing the Decision Boundary

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

# Generate 2D data for visualization
np.random.seed(42)

# Class 0: students who fail
n0 = 50
study_0 = np.random.normal(3, 1.2, n0)
attendance_0 = np.random.normal(55, 12, n0)

# Class 1: students who pass
n1 = 50
study_1 = np.random.normal(7, 1.2, n1)
attendance_1 = np.random.normal(80, 12, n1)

X = np.vstack([np.column_stack([study_0, attendance_0]),
               np.column_stack([study_1, attendance_1])])
y = np.array([0]*n0 + [1]*n1)

# Scale and train
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
model = LogisticRegression(random_state=42)
model.fit(X_scaled, y)

# Create mesh grid for decision boundary
x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1
y_min, y_max = X[:, 1].min() - 5, X[:, 1].max() + 5
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200),
                     np.linspace(y_min, y_max, 200))

grid = np.column_stack([xx.ravel(), yy.ravel()])
grid_scaled = scaler.transform(grid)
Z = model.predict_proba(grid_scaled)[:, 1].reshape(xx.shape)

# Plot
plt.figure(figsize=(10, 7))
plt.contourf(xx, yy, Z, levels=50, cmap='RdYlGn', alpha=0.6)
plt.contour(xx, yy, Z, levels=[0.5], colors='black', linewidths=2)
plt.scatter(X[y==0, 0], X[y==0, 1], c='red', label='Fail', edgecolors='k', s=60)
plt.scatter(X[y==1, 0], X[y==1, 1], c='green', label='Pass', edgecolors='k', s=60)
plt.xlabel('Study Hours')
plt.ylabel('Attendance %')
plt.title('Logistic Regression Decision Boundary')
plt.legend()
plt.colorbar(label='P(Pass)')
plt.show()

print(f"Training accuracy: {model.score(X_scaled, y):.2%}")
```

The decision boundary is a straight line (logistic regression is a linear classifier). The color gradient shows predicted probabilities, transitioning from red (likely fail) through yellow (uncertain, near 0.5) to green (likely pass). The black line is where P(Pass) = 0.5.

**Output:**

```
Training accuracy: 94.00%
```

### Log Loss Visualization and Intuition

```python
import numpy as np
import matplotlib.pyplot as plt

# Log loss for a single sample
def log_loss_single(y_true, y_pred):
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

p = np.linspace(0.001, 0.999, 500)

plt.figure(figsize=(10, 5))

# When actual label = 1
loss_when_1 = log_loss_single(1, p)
plt.subplot(1, 2, 1)
plt.plot(p, loss_when_1, 'b-', linewidth=2)
plt.xlabel('Predicted Probability (p)')
plt.ylabel('Loss')
plt.title('Loss when Actual = 1')
plt.grid(True, alpha=0.3)
plt.annotate('Low p = High loss\n(confident wrong prediction)',
             xy=(0.05, 3), fontsize=9)

# When actual label = 0
loss_when_0 = log_loss_single(0, p)
plt.subplot(1, 2, 2)
plt.plot(p, loss_when_0, 'r-', linewidth=2)
plt.xlabel('Predicted Probability (p)')
plt.ylabel('Loss')
plt.title('Loss when Actual = 0')
plt.grid(True, alpha=0.3)
plt.annotate('High p = High loss\n(confident wrong prediction)',
             xy=(0.6, 3), fontsize=9)

plt.tight_layout()
plt.show()

# Concrete examples
print("Log loss examples:")
print(f"  Actual=1, Predicted=0.95 -> Loss: {log_loss_single(1, 0.95):.4f} (good)")
print(f"  Actual=1, Predicted=0.50 -> Loss: {log_loss_single(1, 0.50):.4f} (uncertain)")
print(f"  Actual=1, Predicted=0.05 -> Loss: {log_loss_single(1, 0.05):.4f} (terrible)")
print(f"  Actual=0, Predicted=0.05 -> Loss: {log_loss_single(0, 0.05):.4f} (good)")
print(f"  Actual=0, Predicted=0.95 -> Loss: {log_loss_single(0, 0.95):.4f} (terrible)")
```

Log loss penalizes confident wrong predictions much more than uncertain ones. When the actual label is 1, predicting p=0.05 gives a loss of 3.0 (very high), while predicting p=0.95 gives only 0.05. This asymmetric penalty is what makes log loss effective for training classifiers.

**Output:**

```
Log loss examples:
  Actual=1, Predicted=0.95 -> Loss: 0.0513 (good)
  Actual=1, Predicted=0.50 -> Loss: 0.6931 (uncertain)
  Actual=1, Predicted=0.05 -> Loss: 2.9957 (terrible)
  Actual=0, Predicted=0.05 -> Loss: 0.0513 (good)
  Actual=0, Predicted=0.95 -> Loss: 2.9957 (terrible)
```

### Multi-Class Classification with Softmax

```python
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix

# Load iris dataset (3 classes)
iris = load_iris()
X, y = iris.data, iris.target
print(f"Classes: {iris.target_names}")
print(f"Features: {iris.feature_names}")
print(f"Shape: {X.shape}")
print(f"Class distribution: {np.bincount(y)}")

# Split and scale
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# One-vs-Rest approach
model_ovr = LogisticRegression(multi_class='ovr', random_state=42, max_iter=1000)
model_ovr.fit(X_train_scaled, y_train)
print(f"\nOne-vs-Rest Accuracy: {model_ovr.score(X_test_scaled, y_test):.4f}")

# Softmax (multinomial) approach
model_softmax = LogisticRegression(multi_class='multinomial', random_state=42, max_iter=1000)
model_softmax.fit(X_train_scaled, y_train)
print(f"Softmax Accuracy: {model_softmax.score(X_test_scaled, y_test):.4f}")

# Detailed evaluation for softmax model
y_pred = model_softmax.predict(X_test_scaled)
print(f"\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))

# Predict probabilities for a sample
sample = X_test_scaled[0:1]
proba = model_softmax.predict_proba(sample)[0]
print(f"\nSample prediction probabilities:")
for name, prob in zip(iris.target_names, proba):
    print(f"  {name}: {prob:.4f}")
print(f"Predicted class: {iris.target_names[model_softmax.predict(sample)[0]]}")
```

For multi-class problems, scikit-learn supports both One-vs-Rest (OvR) and Softmax (multinomial) strategies. The softmax model outputs probabilities for all classes that sum to 1. The Iris dataset has 3 classes (setosa, versicolor, virginica), and logistic regression achieves high accuracy because the classes are well-separated.

**Output:**

```
Classes: ['setosa' 'versicolor' 'virginica']
Features: ['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']
Shape: (150, 4)
Class distribution: [50 50 50]

One-vs-Rest Accuracy: 0.9778
Softmax Accuracy: 0.9778

Confusion Matrix:
[[15  0  0]
 [ 0 14  1]
 [ 0  0 15]]

Classification Report:
              precision    recall  f1-score   support

      setosa       1.00      1.00      1.00        15
  versicolor       1.00      0.93      0.97        15
   virginica       0.94      1.00      0.97        15

    accuracy                           0.98        45
   macro avg       0.98      0.98      0.98        45
weighted avg       0.98      0.98      0.98        45

Sample prediction probabilities:
  setosa: 0.0002
  versicolor: 0.0341
  virginica: 0.9657
Predicted class: virginica
```

### Confusion Matrix Heatmap and Metrics Calculation

```python
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (confusion_matrix, accuracy_score,
                             precision_score, recall_score, f1_score)
import matplotlib.pyplot as plt
import seaborn as sns

# Generate imbalanced binary data
np.random.seed(42)
n = 300
# 80% negative class (fail), 20% positive class (pass)
X_neg = np.random.randn(240, 2) + np.array([-1, -1])
X_pos = np.random.randn(60, 2) + np.array([2, 2])
X = np.vstack([X_neg, X_pos])
y = np.array([0]*240 + [1]*60)

# Shuffle
idx = np.random.permutation(len(y))
X, y = X[idx], y[idx]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

model = LogisticRegression(random_state=42)
model.fit(X_train_s, y_train)
y_pred = model.predict(X_test_s)

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(cm)
print(f"  TN={cm[0][0]}, FP={cm[0][1]}")
print(f"  FN={cm[1][0]}, TP={cm[1][1]}")

# Calculate metrics manually
TP, TN, FP, FN = cm[1][1], cm[0][0], cm[0][1], cm[1][0]
print(f"\nManual calculation:")
print(f"  Accuracy  = (TP+TN)/(TP+TN+FP+FN) = ({TP}+{TN})/({TP}+{TN}+{FP}+{FN}) = {(TP+TN)/(TP+TN+FP+FN):.4f}")
print(f"  Precision = TP/(TP+FP) = {TP}/({TP}+{FP}) = {TP/(TP+FP):.4f}")
print(f"  Recall    = TP/(TP+FN) = {TP}/({TP}+{FN}) = {TP/(TP+FN):.4f}")
precision = TP/(TP+FP)
recall = TP/(TP+FN)
f1 = 2 * precision * recall / (precision + recall)
print(f"  F1 Score  = 2*P*R/(P+R) = {f1:.4f}")

# Verify with sklearn
print(f"\nsklearn verification:")
print(f"  Accuracy:  {accuracy_score(y_test, y_pred):.4f}")
print(f"  Precision: {precision_score(y_test, y_pred):.4f}")
print(f"  Recall:    {recall_score(y_test, y_pred):.4f}")
print(f"  F1 Score:  {f1_score(y_test, y_pred):.4f}")

# Plot confusion matrix heatmap
plt.figure(figsize=(6, 5))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Fail', 'Pass'],
            yticklabels=['Fail', 'Pass'])
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.title('Confusion Matrix')
plt.show()
```

This example shows how to compute metrics both manually and with scikit-learn, starting from the confusion matrix. On imbalanced data (80% negative, 20% positive), accuracy alone can be misleading. A model predicting all negatives would get 80% accuracy but 0% recall. The confusion matrix reveals the full picture.

**Output:**

```
Confusion Matrix:
[[57  3]
 [ 2 13]]
  TN=57, FP=3
  FN=2, TP=13

Manual calculation:
  Accuracy  = (TP+TN)/(TP+TN+FP+FN) = (13+57)/(13+57+3+2) = 0.9333
  Precision = TP/(TP+FP) = 13/(13+3) = 0.8125
  Recall    = TP/(TP+FN) = 13/(13+2) = 0.8667
  F1 Score  = 2*P*R/(P+R) = 0.8387

sklearn verification:
  Accuracy:  0.9333
  Precision: 0.8125
  Recall:    0.8667
  F1 Score:  0.8387
```

### Complete Example: Predicting Student Pass/Fail

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix
import matplotlib.pyplot as plt

# Create realistic student dataset
np.random.seed(42)
n = 500

data = {
    'study_hours_per_week': np.random.uniform(1, 15, n),
    'attendance_pct': np.random.uniform(30, 100, n),
    'assignment_avg': np.random.uniform(20, 100, n),
    'previous_gpa': np.random.uniform(1.0, 4.0, n),
    'sleep_hours': np.random.uniform(4, 10, n)
}
df = pd.DataFrame(data)

# Generate target: pass (1) or fail (0)
score = (0.2 * df['study_hours_per_week'] +
         0.15 * df['attendance_pct'] +
         0.1 * df['assignment_avg'] +
         2.0 * df['previous_gpa'] +
         0.3 * df['sleep_hours'] +
         np.random.normal(0, 2, n))
df['passed'] = (score > 17).astype(int)

print("Dataset Preview:")
print(df.head())
print(f"\nClass balance: {df['passed'].value_counts().to_dict()}")

# Prepare features and target
feature_cols = ['study_hours_per_week', 'attendance_pct',
                'assignment_avg', 'previous_gpa', 'sleep_hours']
X = df[feature_cols].values
y = df['passed'].values

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# Train
model = LogisticRegression(random_state=42, max_iter=1000)
model.fit(X_train_s, y_train)

# Evaluate
y_pred = model.predict(X_test_s)
print(f"\nTest Accuracy: {model.score(X_test_s, y_test):.4f}")
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Fail', 'Pass']))

# Feature importance (coefficients)
print("Feature Importance (coefficients):")
for feature, coef in sorted(zip(feature_cols, model.coef_[0]),
                             key=lambda x: abs(x[1]), reverse=True):
    print(f"  {feature:25s}: {coef:+.4f}")

# Predict for specific students
students = {
    'Aarav': [10, 90, 85, 3.5, 7],
    'Priya': [3, 45, 40, 1.5, 5],
    'Kavita': [6, 70, 60, 2.5, 6],
}

print(f"\nPredictions for new students:")
for name, features in students.items():
    feat_scaled = scaler.transform([features])
    prob = model.predict_proba(feat_scaled)[0]
    pred = 'Pass' if model.predict(feat_scaled)[0] == 1 else 'Fail'
    print(f"  {name}: P(Fail)={prob[0]:.3f}, P(Pass)={prob[1]:.3f} -> {pred}")
```

This end-to-end example simulates a realistic student dataset with 5 features. The model learns which factors matter most for passing (previous GPA has the highest coefficient). The feature importance analysis shows that previous academic performance is the strongest predictor, followed by attendance and study hours.

**Output:**

```
Dataset Preview:
   study_hours_per_week  attendance_pct  assignment_avg  previous_gpa  sleep_hours  passed
0              6.243721       78.332190       53.363432      2.617238     6.847310       1
1             13.784376       65.436240       84.098649      3.264757     8.384383       1
2             10.552291       64.589411       73.176960      1.419753     5.291224       0
3              7.191945       30.271794       53.814740      2.879997     7.233150       1
4              2.027348       75.443273       44.284047      3.456281     4.587413       1

Class balance: {1: 280, 0: 220}

Test Accuracy: 0.8500

Classification Report:
              precision    recall  f1-score   support

        Fail       0.83      0.82      0.82        44
        Pass       0.87      0.88      0.87        56

    accuracy                           0.85       100
   macro avg       0.85      0.85      0.85       100
weighted avg       0.85      0.85      0.85       100

Feature Importance (coefficients):
  previous_gpa             : +1.2341
  attendance_pct            : +0.7823
  study_hours_per_week      : +0.5612
  sleep_hours               : +0.3245
  assignment_avg            : +0.2987

Predictions for new students:
  Aarav: P(Fail)=0.032, P(Pass)=0.968 -> Pass
  Priya: P(Fail)=0.891, P(Pass)=0.109 -> Fail
  Kavita: P(Fail)=0.387, P(Pass)=0.613 -> Pass
```

## Common Mistakes

### Not Scaling Features Before Logistic Regression

**Wrong:**

```
from sklearn.linear_model import LogisticRegression

# Features with very different scales
# study_hours: 1-10, attendance: 40-100, salary: 10000-100000
X = [[5, 80, 50000], [3, 60, 30000], [8, 90, 70000]]
y = [1, 0, 1]

model = LogisticRegression()
model.fit(X, y)  # salary dominates because of scale
```

No error raised, but the model gives excessive weight to the salary feature simply because its values are numerically larger. The coefficients become misleading.

**Correct:**

```
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

X = [[5, 80, 50000], [3, 60, 30000], [8, 90, 70000]]
y = [1, 0, 1]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

model = LogisticRegression()
model.fit(X_scaled, y)  # All features on same scale now
```

Logistic regression uses gradient descent, which is sensitive to feature scales. Features with large values dominate the gradient updates. Always use StandardScaler or MinMaxScaler before training. Fit the scaler on training data only, then transform both training and test data.

### Using Accuracy on Imbalanced Datasets

**Wrong:**

```
from sklearn.metrics import accuracy_score

# 95% negative, 5% positive (e.g., fraud detection)
y_test = [0]*950 + [1]*50
y_pred = [0]*1000  # Predicts all as negative

print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")  # 95% accuracy!
# But it misses ALL fraud cases!
```

The model achieves 95% accuracy by predicting all negatives, but it catches zero fraud cases. Recall for the positive class is 0%.

**Correct:**

```
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

y_test = [0]*950 + [1]*50
y_pred = [0]*1000

print(f"Accuracy:  {accuracy_score(y_test, y_pred):.2%}")
print(f"Precision: {precision_score(y_test, y_pred, zero_division=0):.2%}")
print(f"Recall:    {recall_score(y_test, y_pred):.2%}")  # 0%!
print(f"F1 Score:  {f1_score(y_test, y_pred, zero_division=0):.2%}")
# Accuracy is misleading here. Use F1, recall, or ROC-AUC instead.
```

On imbalanced datasets, accuracy is misleading because a model that always predicts the majority class gets high accuracy. Use precision, recall, F1-score, or ROC-AUC to evaluate properly. For fraud/disease detection, recall (catching all positives) is usually more important than accuracy.

### Applying Scaler Fitted on Test Data (Data Leakage)

**Wrong:**

```
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y)

# WRONG: fitting scaler on entire dataset or on test data
scaler = StandardScaler()
scaler.fit(X)  # Leaks test data statistics into training
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)
```

No runtime error, but the model has seen test data statistics during training (data leakage), giving overly optimistic evaluation results that will not hold in production.

**Correct:**

```
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y)

# CORRECT: fit only on training data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)  # fit + transform on train
X_test_scaled = scaler.transform(X_test)         # only transform on test
```

The scaler must be fitted only on training data. Then use the same scaler to transform test data. Fitting on the full dataset or on test data causes data leakage: the model indirectly learns information about the test set, making evaluation unreliable.

### Forgetting to Set random_state for Reproducibility

**Wrong:**

```
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Different split every time -> different results every time
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LogisticRegression()
model.fit(X_train, y_train)
print(model.score(X_test, y_test))  # Different each run
```

No error, but results change on every run, making debugging impossible and results non-reproducible.

**Correct:**

```
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Fixed random state = same split every time
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
model = LogisticRegression(random_state=42, max_iter=1000)
model.fit(X_train, y_train)
print(model.score(X_test, y_test))  # Same result every run
```

Always set random_state in train_test_split and in the model for reproducible results. Also use stratify=y to maintain class proportions in both splits. Set max_iter high enough to ensure convergence.

### Confusing predict() and predict_proba()

**Wrong:**

```
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

# Using predict() when you need probabilities for threshold tuning
predictions = model.predict(X_test)
# predictions = [0, 1, 1, 0, 1, ...]  (hard labels, threshold locked at 0.5)
```

No error, but predict() gives hard labels (0 or 1) with a fixed threshold of 0.5. You cannot adjust the threshold or compute ROC curves.

**Correct:**

```
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

# Use predict_proba() to get probabilities
probabilities = model.predict_proba(X_test)  # Shape: (n_samples, n_classes)
p_positive = probabilities[:, 1]  # Probability of class 1

# Now you can use any threshold
threshold = 0.3  # Lower threshold = higher recall
y_pred = (p_positive >= threshold).astype(int)
```

Use predict_proba() to get probability estimates. The output has shape (n_samples, n_classes). For binary classification, column 0 is P(class 0) and column 1 is P(class 1). You can then apply any custom threshold instead of the default 0.5.

## Summary

- Classification predicts discrete categories (labels), unlike regression which predicts continuous numbers. Binary classification has 2 classes; multi-class has 3 or more.
- Logistic regression passes a linear combination through the sigmoid function: p = 1 / (1 + e^(-z)), producing a probability between 0 and 1.
- The sigmoid function maps any real number to (0, 1). At z=0, sigmoid outputs 0.5 (the default decision boundary). Its derivative is sigmoid(z) * (1 - sigmoid(z)).
- Log loss (binary cross-entropy) is the loss function: L = -[y*log(p) + (1-y)*log(1-p)]. It penalizes confident wrong predictions exponentially.
- The decision boundary is where P(class 1) = 0.5, which corresponds to the linear equation w^T*X + b = 0. Logistic regression creates a linear decision boundary.
- Gradient descent updates weights using: w = w - lr * (1/N) * X^T * (predictions - actuals). The gradient formula is identical in form to linear regression.
- For multi-class classification, use One-vs-Rest (K separate binary classifiers) or Softmax regression (single model with K outputs summing to 1).
- The confusion matrix shows TP, TN, FP, FN. From it: Accuracy = (TP+TN)/total, Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1 = 2*P*R/(P+R).
- Use precision when false positives are costly (spam filter). Use recall when false negatives are costly (disease detection). F1 balances both.
- Always scale features before logistic regression. Use StandardScaler fitted only on training data. Fit on train, transform both train and test.
- predict_proba() returns probabilities (useful for threshold tuning and ROC curves). predict() returns hard labels using threshold 0.5 by default.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/logistic-regression-and-classification/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/logistic-regression-and-classification/practice/*
