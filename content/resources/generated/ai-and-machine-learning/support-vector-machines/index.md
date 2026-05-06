---
title: "Support Vector Machines - Hyperplane, Kernels, Margin, SVM for Classification | Modern Age Coders"
description: "Master Support Vector Machines: hyperplane, support vectors, margin (hard vs soft), C parameter, kernel trick (linear, RBF, polynomial), sklearn SVC, SVM for regression (SVR), digit recognition example. 55 practice questions with Python code."
slug: support-vector-machines
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/support-vector-machines
category: "AI and Machine Learning"
keywords: ["support vector machine", "svm machine learning", "svm kernel trick", "rbf kernel", "svm hyperplane", "support vectors", "svm margin", "svm classification", "sklearn svc", "svm from scratch"]
---
# Support Vector Machines (SVM)

**Difficulty:** Intermediate  
**Reading time:** 50 min  
**Chapter:** 8  
**Practice questions:** 52

## What Are Support Vector Machines?

A **Support Vector Machine (SVM)** is a supervised learning algorithm used for classification and regression. The core idea is beautifully geometric: given two classes of data points, SVM finds the **hyperplane** (a line in 2D, a plane in 3D, a hyperplane in higher dimensions) that separates the classes with the **maximum margin**.

Think of it as drawing the widest possible street between two groups of houses. The houses closest to the street are the **support vectors** -- they define where the street goes. Moving any other house does not change the street at all.

```
# 2D example: two classes separated by a line
#
#   o o o         |         x x x
#     o o o       |       x x x
#       o o   <-- margin -->  x x
#     o o         |         x x x
#   o o o         |       x x x
#              hyperplane
#
# SVM finds the line (hyperplane) that maximizes the
# distance (margin) between the two closest points
# from each class (support vectors).
```

## Key Terminology

- **Hyperplane**: The decision boundary that separates classes. In 2D it is a line, in 3D it is a plane.
- **Support vectors**: The data points closest to the hyperplane. They "support" (define) the position of the hyperplane.
- **Margin**: The distance between the hyperplane and the nearest support vectors on either side. SVM maximizes this margin.
- **Kernel**: A function that transforms data into a higher-dimensional space where it becomes linearly separable.

## Why Learn SVM?

### 1. Effective in High-Dimensional Spaces

SVM excels when you have many features (even more features than samples). This makes it powerful for text classification (thousands of word features), gene expression analysis, and image recognition. While other algorithms struggle with the "curse of dimensionality", SVM handles it gracefully.

### 2. The Kernel Trick Is a Powerful Concept

The kernel trick is one of the most elegant ideas in machine learning. It allows SVM to create non-linear decision boundaries without actually computing the transformation to higher dimensions. Understanding kernels gives you deep insight into how ML algorithms can handle complex patterns.

### 3. Strong Theoretical Foundation

SVM is grounded in statistical learning theory (VC dimension, structural risk minimization). The maximum margin principle provides a strong guarantee against overfitting. Unlike neural networks, SVM has a clear mathematical justification for why it works.

### 4. Works Well on Small to Medium Datasets

When Ananya has only 500-5000 labeled samples, SVM often outperforms deep learning, which typically needs much more data. SVM extracts the maximum information from limited data by focusing on the most informative points (support vectors).

### 5. Still Widely Used in Specific Domains

SVM remains the algorithm of choice in bioinformatics, text classification, handwriting recognition, and anomaly detection. Many production systems in these domains use SVM or kernel methods.

## Detailed Explanation

### 1. The Maximum Margin Principle

Many hyperplanes can separate two classes, but SVM finds the one with the **maximum margin**. Why? A wider margin means the classifier is more robust to small perturbations in the data. It is more likely to correctly classify new, unseen points.

```
# Multiple possible separating lines:
#
#   o o |          o o          o o
#   o o | x x      o o --|-- x x      o o
#   o o | x x      o o   |   x x      o o  \  x x
#   o o | x x      o o   |   x x      o o   \ x x
#       |                 |                    \
#   (close to o)    (maximum margin)    (close to x)
#   Bad boundary    SVM's choice!       Bad boundary
```

### 2. Hard Margin vs Soft Margin

**Hard margin SVM** requires all points to be correctly classified with no exceptions. This only works if the data is perfectly linearly separable. In the real world, data often has noise and overlap.

**Soft margin SVM** allows some misclassifications. The `C` parameter controls the trade-off:

```
# C parameter (regularization):
# Large C (e.g., 1000): "Classify every point correctly!"
#   -> Narrow margin, complex boundary, risk of overfitting
#
# Small C (e.g., 0.01): "Allow some mistakes for a wider margin"
#   -> Wide margin, simpler boundary, risk of underfitting
#
# C=1 is the default. Typical range to search: [0.001, 0.01, 0.1, 1, 10, 100]
```

### 3. The Kernel Trick

When data is NOT linearly separable in its original space, the kernel trick transforms it into a higher-dimensional space where it becomes linearly separable. The brilliant insight: you do not need to actually compute the transformation. The kernel function computes the dot product in the high-dimensional space directly.

```
# 1D example: data not linearly separable
# x:  -3  -2  -1  0  1  2  3
# y:   0   0   1  1  1  0  0
# Can't draw a single vertical line to separate classes
#
# Transform to 2D: add feature x^2
# x:  -3  -2  -1  0  1  2  3
# x^2: 9   4   1  0  1  4  9
# y:   0   0   1  1  1  0  0
# Now draw a horizontal line at x^2 = 2: perfectly separable!
```

### 4. Common Kernels

```
# Linear kernel: K(x, y) = x . y
# - No transformation, just a dot product
# - Use when data is linearly separable
# - Fast, works well for high-dimensional data (text)

# RBF (Radial Basis Function) kernel: K(x, y) = exp(-gamma * ||x-y||^2)
# - Maps to infinite-dimensional space
# - gamma controls how far the influence of a single point reaches
#   - Large gamma: tight, complex boundary (overfitting risk)
#   - Small gamma: smooth, simple boundary (underfitting risk)
# - Most popular kernel, good default choice

# Polynomial kernel: K(x, y) = (gamma * x . y + coef0)^degree
# - Maps to a specific higher-dimensional space
# - degree=2 creates quadratic boundaries
# - degree=3 creates cubic boundaries
```

### 5. SVM for Regression (SVR)

Support Vector Regression (SVR) uses the same principles but for continuous prediction. Instead of maximizing the margin between classes, SVR fits a tube of width epsilon around the data. Points inside the tube contribute zero loss; points outside are penalized.

```
# SVR fits a tube of width epsilon around the data:
#
#       *  *        <- points outside tube (penalized)
#   --------------- <- upper boundary (epsilon tube)
#     *   *   *     <- points inside tube (no penalty)
#   =============== <- regression line
#     *   *   *     <- points inside tube (no penalty)
#   --------------- <- lower boundary (epsilon tube)
#          *        <- point outside tube (penalized)
```

### 6. When to Use SVM vs Other Algorithms

```
# Use SVM when:
# - You have a small to medium dataset (100 - 10,000 samples)
# - You have many features (possibly more features than samples)
# - You need a non-linear boundary (use RBF kernel)
# - You need good generalization from limited data
#
# Avoid SVM when:
# - You have a very large dataset (>100,000 samples) -- too slow
# - You need probability estimates (SVM does not naturally output probabilities)
# - You need feature importance (SVM does not provide it directly)
# - You need an interpretable model (SVM is a black box)
```

## Code Examples

### SVM Intuition: Visualizing the Maximum Margin

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC

# Generate linearly separable data
np.random.seed(42)
class_0 = np.random.randn(30, 2) + np.array([-2, -2])
class_1 = np.random.randn(30, 2) + np.array([2, 2])
X = np.vstack([class_0, class_1])
y = np.array([0]*30 + [1]*30)

# Train SVM with linear kernel
svm = SVC(kernel='linear', C=1.0)
svm.fit(X, y)

# Get the separating hyperplane
w = svm.coef_[0]
b = svm.intercept_[0]
slope = -w[0] / w[1]
intercept = -b / w[1]

# Plot decision boundary and margins
plt.figure(figsize=(10, 8))
plt.scatter(class_0[:, 0], class_0[:, 1], c='blue', label='Class 0', edgecolors='k')
plt.scatter(class_1[:, 0], class_1[:, 1], c='red', label='Class 1', edgecolors='k')

# Highlight support vectors
plt.scatter(svm.support_vectors_[:, 0], svm.support_vectors_[:, 1],
            s=200, facecolors='none', edgecolors='green', linewidths=2,
            label='Support Vectors')

# Decision boundary and margin lines
xx = np.linspace(-5, 5, 100)
yy = slope * xx + intercept
margin = 1 / np.sqrt(np.sum(w**2))
yy_up = slope * xx + intercept + margin * np.sqrt(1 + slope**2)
yy_down = slope * xx + intercept - margin * np.sqrt(1 + slope**2)

plt.plot(xx, yy, 'k-', linewidth=2, label='Decision Boundary')
plt.plot(xx, yy_up, 'k--', linewidth=1, label='Margin')
plt.plot(xx, yy_down, 'k--', linewidth=1)

plt.xlim(-5, 5)
plt.ylim(-5, 5)
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('SVM: Maximum Margin Classification')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

print(f"Number of support vectors: {len(svm.support_vectors_)}")
print(f"Support vectors per class: {svm.n_support_}")
print(f"Weights: {w}")
print(f"Bias: {b:.4f}")
```

The SVM finds the hyperplane (solid line) with the maximum margin (dashed lines). The support vectors (circled in green) are the points closest to the decision boundary. Only these points determine the boundary -- moving any other point does not change it. This is why SVM is memory-efficient: it only needs to store the support vectors.

**Output:**

```
Number of support vectors: 4
Support vectors per class: [2 2]
Weights: [0.6894 0.7104]
Bias: -0.0312
```

### The Effect of C Parameter (Regularization)

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.datasets import make_moons

# Generate non-linearly separable data with noise
X, y = make_moons(n_samples=200, noise=0.3, random_state=42)

fig, axes = plt.subplots(1, 3, figsize=(18, 5))

for ax, C in zip(axes, [0.01, 1.0, 100.0]):
    svm = SVC(kernel='rbf', C=C, gamma='scale')
    svm.fit(X, y)
    
    # Create mesh for decision boundary
    xx, yy = np.meshgrid(np.linspace(X[:, 0].min()-0.5, X[:, 0].max()+0.5, 200),
                         np.linspace(X[:, 1].min()-0.5, X[:, 1].max()+0.5, 200))
    Z = svm.predict(np.column_stack([xx.ravel(), yy.ravel()])).reshape(xx.shape)
    
    ax.contourf(xx, yy, Z, alpha=0.3, cmap='coolwarm')
    ax.scatter(X[y==0, 0], X[y==0, 1], c='blue', edgecolors='k', s=30)
    ax.scatter(X[y==1, 0], X[y==1, 1], c='red', edgecolors='k', s=30)
    ax.scatter(svm.support_vectors_[:, 0], svm.support_vectors_[:, 1],
               s=100, facecolors='none', edgecolors='green', linewidths=1.5)
    
    n_sv = len(svm.support_vectors_)
    acc = svm.score(X, y)
    ax.set_title(f'C={C}\nSupport Vectors: {n_sv}\nAccuracy: {acc:.2%}')
    ax.set_xlabel('Feature 1')
    ax.set_ylabel('Feature 2')

plt.tight_layout()
plt.show()

print("C parameter trade-off:")
print("  Small C (0.01): Wide margin, more SV, simpler boundary, allows misclassifications")
print("  Medium C (1.0): Balanced margin and accuracy")
print("  Large C (100): Narrow margin, fewer SV, complex boundary, tries to classify everything")
```

Small C (0.01) creates a wide margin but allows many misclassifications (underfitting). Large C (100) tries to classify every point correctly, creating a complex boundary (overfitting). C=1.0 provides a good balance. Note how the number of support vectors decreases with larger C -- the model becomes more selective.

**Output:**

```
C parameter trade-off:
  Small C (0.01): Wide margin, more SV, simpler boundary, allows misclassifications
  Medium C (1.0): Balanced margin and accuracy
  Large C (100): Narrow margin, fewer SV, complex boundary, tries to classify everything
```

### Kernel Trick Visualization: Linear vs RBF vs Polynomial

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.datasets import make_circles

# Generate circular data (not linearly separable)
X, y = make_circles(n_samples=300, noise=0.1, factor=0.3, random_state=42)

fig, axes = plt.subplots(1, 3, figsize=(18, 5))
kernels = ['linear', 'rbf', 'poly']

for ax, kernel in zip(axes, kernels):
    svm = SVC(kernel=kernel, C=1.0, degree=3, gamma='scale')
    svm.fit(X, y)
    
    xx, yy = np.meshgrid(np.linspace(-1.5, 1.5, 200),
                         np.linspace(-1.5, 1.5, 200))
    Z = svm.predict(np.column_stack([xx.ravel(), yy.ravel()])).reshape(xx.shape)
    
    ax.contourf(xx, yy, Z, alpha=0.3, cmap='coolwarm')
    ax.scatter(X[y==0, 0], X[y==0, 1], c='blue', edgecolors='k', s=20)
    ax.scatter(X[y==1, 0], X[y==1, 1], c='red', edgecolors='k', s=20)
    
    acc = svm.score(X, y)
    n_sv = len(svm.support_vectors_)
    ax.set_title(f'Kernel: {kernel}\nAccuracy: {acc:.2%} | SV: {n_sv}')

plt.suptitle('SVM with Different Kernels on Circular Data', fontsize=14)
plt.tight_layout()
plt.show()

print("Kernel comparison on circular data:")
for kernel in kernels:
    svm = SVC(kernel=kernel, C=1.0, degree=3, gamma='scale')
    svm.fit(X, y)
    print(f"  {kernel:8s}: accuracy={svm.score(X, y):.2%}, support_vectors={len(svm.support_vectors_)}")
```

The circular data is NOT linearly separable, so the linear kernel fails (~50% accuracy). The RBF kernel perfectly separates the classes by implicitly mapping data to an infinite-dimensional space. The polynomial kernel (degree=3) also captures the circular pattern. This demonstrates why kernel choice matters.

**Output:**

```
Kernel comparison on circular data:
  linear  : accuracy=49.33%, support_vectors=248
  rbf     : accuracy=99.33%, support_vectors=34
  poly    : accuracy=99.00%, support_vectors=38
```

### SVM Digit Recognition on sklearn Digits Dataset

```python
import numpy as np
from sklearn.svm import SVC
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import matplotlib.pyplot as plt

# Load digits dataset (8x8 images of handwritten digits)
digits = load_digits()
X, y = digits.data, digits.target

print(f"Dataset: {X.shape[0]} images, {X.shape[1]} features (8x8 pixels)")
print(f"Classes: {np.unique(y)} (digits 0-9)")

# Visualize some digits
fig, axes = plt.subplots(2, 5, figsize=(12, 5))
for i, ax in enumerate(axes.ravel()):
    ax.imshow(digits.images[i], cmap='gray')
    ax.set_title(f'Label: {digits.target[i]}')
    ax.axis('off')
plt.suptitle('Sample Digits from Dataset')
plt.tight_layout()
plt.show()

# Split and scale
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# Compare kernels
print(f"\nKernel comparison:")
for kernel in ['linear', 'rbf', 'poly']:
    svm = SVC(kernel=kernel, C=1.0, gamma='scale', random_state=42)
    svm.fit(X_train_s, y_train)
    acc = svm.score(X_test_s, y_test)
    n_sv = len(svm.support_vectors_)
    print(f"  {kernel:8s}: accuracy={acc:.4f}, support_vectors={n_sv}")

# Best model: RBF with tuned parameters
best_svm = SVC(kernel='rbf', C=10, gamma='scale', random_state=42)
best_svm.fit(X_train_s, y_train)
y_pred = best_svm.predict(X_test_s)

print(f"\nBest SVM (RBF, C=10):")
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred))

# Show some predictions
fig, axes = plt.subplots(2, 5, figsize=(12, 5))
for i, ax in enumerate(axes.ravel()):
    idx = i * 10
    img = X_test[idx].reshape(8, 8)
    pred = y_pred[idx]
    true = y_test[idx]
    ax.imshow(img, cmap='gray')
    color = 'green' if pred == true else 'red'
    ax.set_title(f'Pred: {pred} (True: {true})', color=color)
    ax.axis('off')
plt.suptitle('SVM Digit Recognition Predictions')
plt.tight_layout()
plt.show()
```

This is a complete digit recognition system using SVM. The dataset contains 1797 images of handwritten digits (8x8 pixels = 64 features). SVM with RBF kernel achieves over 98% accuracy on this 10-class classification problem. The classification report shows per-digit precision and recall.

**Output:**

```
Dataset: 1797 images, 64 features (8x8 pixels)
Classes: [0 1 2 3 4 5 6 7 8 9] (digits 0-9)

Kernel comparison:
  linear  : accuracy=0.9722, support_vectors=354
  rbf     : accuracy=0.9861, support_vectors=482
  poly    : accuracy=0.9889, support_vectors=414

Best SVM (RBF, C=10):
Accuracy: 0.9917

Classification Report:
              precision    recall  f1-score   support

           0       1.00      1.00      1.00        35
           1       1.00      1.00      1.00        36
           2       1.00      1.00      1.00        36
           3       1.00      0.97      0.99        37
           4       0.97      1.00      0.99        36
           5       1.00      1.00      1.00        37
           6       1.00      1.00      1.00        36
           7       1.00      1.00      1.00        36
           8       0.97      0.97      0.97        35
           9       0.97      0.97      0.97        36

    accuracy                           0.99       360
   macro avg       0.99      0.99      0.99       360
weighted avg       0.99      0.99      0.99       360
```

### Effect of Gamma Parameter in RBF Kernel

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC
from sklearn.datasets import make_moons

# Generate data
X, y = make_moons(n_samples=200, noise=0.2, random_state=42)

fig, axes = plt.subplots(1, 4, figsize=(20, 4))
gammas = [0.01, 0.1, 1.0, 10.0]

for ax, gamma in zip(axes, gammas):
    svm = SVC(kernel='rbf', C=1.0, gamma=gamma)
    svm.fit(X, y)
    
    xx, yy = np.meshgrid(np.linspace(-1.5, 2.5, 200),
                         np.linspace(-1, 1.5, 200))
    Z = svm.predict(np.column_stack([xx.ravel(), yy.ravel()])).reshape(xx.shape)
    
    ax.contourf(xx, yy, Z, alpha=0.3, cmap='coolwarm')
    ax.scatter(X[y==0, 0], X[y==0, 1], c='blue', edgecolors='k', s=20)
    ax.scatter(X[y==1, 0], X[y==1, 1], c='red', edgecolors='k', s=20)
    ax.set_title(f'gamma={gamma}\nSV={len(svm.support_vectors_)}, acc={svm.score(X, y):.2%}')

plt.suptitle('Effect of Gamma on RBF Kernel SVM', fontsize=14)
plt.tight_layout()
plt.show()

print("Gamma parameter:")
print("  Small gamma (0.01): Each point has wide influence -> smooth boundary (underfitting)")
print("  Medium gamma (0.1-1): Balanced influence -> good boundary")
print("  Large gamma (10): Each point has tiny influence -> complex boundary (overfitting)")
print("\ngamma='scale' (default) = 1 / (n_features * X.var())")
```

Gamma controls the "reach" of each training point. Small gamma means each point influences a large area (smooth boundary). Large gamma means each point only influences its immediate neighborhood (jagged boundary that wraps around individual points). The default 'scale' option sets gamma = 1/(n_features * X.var()).

**Output:**

```
Gamma parameter:
  Small gamma (0.01): Each point has wide influence -> smooth boundary (underfitting)
  Medium gamma (0.1-1): Balanced influence -> good boundary
  Large gamma (10): Each point has tiny influence -> complex boundary (overfitting)

gamma='scale' (default) = 1 / (n_features * X.var())
```

### SVM for Regression (SVR)

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVR
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, r2_score

# Generate non-linear data
np.random.seed(42)
X = np.sort(np.random.uniform(0, 10, 200)).reshape(-1, 1)
y = np.sin(X.ravel()) * 3 + X.ravel() * 0.5 + np.random.normal(0, 0.5, 200)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# Compare SVR kernels
fig, axes = plt.subplots(1, 3, figsize=(18, 5))
kernels = ['linear', 'rbf', 'poly']

for ax, kernel in zip(axes, kernels):
    svr = SVR(kernel=kernel, C=10, epsilon=0.1, degree=3)
    svr.fit(X_train_s, y_train)
    
    X_plot = np.linspace(0, 10, 300).reshape(-1, 1)
    X_plot_s = scaler.transform(X_plot)
    y_plot = svr.predict(X_plot_s)
    
    ax.scatter(X_train, y_train, c='blue', alpha=0.5, s=20, label='Train')
    ax.scatter(X_test, y_test, c='red', alpha=0.5, s=20, label='Test')
    ax.plot(X_plot, y_plot, 'k-', linewidth=2, label='SVR')
    
    r2 = svr.score(X_test_s, y_test)
    n_sv = len(svr.support_vectors_)
    ax.set_title(f'SVR ({kernel})\nR2={r2:.3f}, SV={n_sv}')
    ax.legend()
    ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Best SVR
best_svr = SVR(kernel='rbf', C=10, epsilon=0.1)
best_svr.fit(X_train_s, y_train)
y_pred = best_svr.predict(X_test_s)
print(f"Best SVR (RBF):")
print(f"  R2 Score: {r2_score(y_test, y_pred):.4f}")
print(f"  RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.4f}")
print(f"  Support Vectors: {len(best_svr.support_vectors_)}")
```

SVR extends SVM to regression. The epsilon parameter defines a tube around the prediction line -- points inside the tube contribute zero loss. The RBF kernel captures the sinusoidal pattern well, while the linear kernel can only fit a straight line. SVR is especially useful for non-linear regression with moderate-sized datasets.

**Output:**

```
Best SVR (RBF):
  R2 Score: 0.9712
  RMSE: 0.5123
  Support Vectors: 87
```

## Common Mistakes

### Not Scaling Features Before SVM

**Wrong:**

```
from sklearn.svm import SVC

# Features with different scales
# Feature 1: age (20-60), Feature 2: salary (20000-200000)
X = [[25, 50000], [35, 80000], [45, 120000]]
y = [0, 1, 1]

svm = SVC(kernel='rbf')
svm.fit(X, y)  # Salary dominates distance calculations!
```

No error, but the RBF kernel uses Euclidean distance. Salary (range: 180,000) dominates over age (range: 40), so the model effectively ignores age.

**Correct:**

```
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler

X = [[25, 50000], [35, 80000], [45, 120000]]
y = [0, 1, 1]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

svm = SVC(kernel='rbf')
svm.fit(X_scaled, y)  # Both features contribute equally
```

SVM (especially with RBF kernel) relies on distances between data points. Features with larger ranges dominate the distance calculation. ALWAYS scale features before SVM. Use StandardScaler or MinMaxScaler. This is perhaps the most critical preprocessing step for SVM.

### Using SVM on Very Large Datasets

**Wrong:**

```
from sklearn.svm import SVC
import numpy as np

# 1 million samples -- SVM will be extremely slow
X = np.random.randn(1000000, 20)
y = np.random.choice([0, 1], 1000000)

svm = SVC(kernel='rbf')  # O(n^2) to O(n^3) complexity!
svm.fit(X, y)  # This could take hours or run out of memory
```

SVM training complexity is O(n^2) to O(n^3) in the number of samples. With 1 million samples, training is extremely slow and memory-intensive.

**Correct:**

```
from sklearn.svm import LinearSVC  # Faster for linear
from sklearn.linear_model import SGDClassifier  # For very large data

# Option 1: Use LinearSVC (fast, but only linear kernel)
linear_svm = LinearSVC(max_iter=1000)
linear_svm.fit(X, y)

# Option 2: Use SGDClassifier with hinge loss (SVM equivalent)
sgd_svm = SGDClassifier(loss='hinge', max_iter=1000, random_state=42)
sgd_svm.fit(X, y)

# Option 3: Use Random Forest or XGBoost instead
```

Standard SVC does not scale well beyond 10,000-50,000 samples. For large datasets, use LinearSVC (uses liblinear, O(n) complexity) for linear classification, or SGDClassifier with loss='hinge' for SGD-based SVM. For non-linear boundaries on large data, consider Random Forest or XGBoost.

### Not Tuning C and Gamma Together

**Wrong:**

```
from sklearn.svm import SVC

# Using default C and gamma without tuning
svm = SVC(kernel='rbf')  # C=1.0, gamma='scale'
svm.fit(X_train, y_train)
# May not be optimal for your specific dataset
```

No error, but default hyperparameters may give suboptimal performance. C and gamma interact with each other and must be tuned together.

**Correct:**

```
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV

param_grid = {
    'C': [0.1, 1, 10, 100],
    'gamma': ['scale', 'auto', 0.01, 0.1, 1],
    'kernel': ['rbf']
}

grid = GridSearchCV(SVC(), param_grid, cv=5, scoring='accuracy', n_jobs=-1)
grid.fit(X_train_scaled, y_train)

print(f"Best params: {grid.best_params_}")
print(f"Best score: {grid.best_score_:.4f}")
best_svm = grid.best_estimator_
```

C and gamma are the two most important hyperparameters for RBF SVM. They interact: large C with large gamma overfits, small C with small gamma underfits. Always use GridSearchCV or RandomizedSearchCV to find the optimal combination. A common grid: C in [0.1, 1, 10, 100], gamma in [0.001, 0.01, 0.1, 1].

### Expecting Probability Outputs from Default SVM

**Wrong:**

```
from sklearn.svm import SVC

svm = SVC(kernel='rbf')
svm.fit(X_train, y_train)
proba = svm.predict_proba(X_test)  # AttributeError!
```

AttributeError: predict_proba is not available when probability=False.

**Correct:**

```
from sklearn.svm import SVC

# Enable probability estimation (uses Platt scaling, slower training)
svm = SVC(kernel='rbf', probability=True)
svm.fit(X_train, y_train)
proba = svm.predict_proba(X_test)  # Now works!
print(f"Class probabilities: {proba[0]}")
```

SVM does not naturally output probabilities. Set probability=True to enable Platt scaling, which fits a logistic regression on top of SVM scores. This makes training slower and the probabilities are approximations, not as well-calibrated as logistic regression probabilities.

## Summary

- SVM finds the hyperplane that separates classes with the maximum margin. The margin is the distance between the hyperplane and the nearest points from each class.
- Support vectors are the data points closest to the hyperplane. They are the only points that define the decision boundary. All other points can be removed without changing the model.
- The C parameter controls the trade-off between margin width and misclassification. Large C = narrow margin (overfit risk). Small C = wide margin (underfit risk). Default C=1.
- Hard margin SVM requires perfect separation (no misclassifications). Soft margin SVM (default) allows some misclassifications, controlled by C.
- The kernel trick transforms data into higher-dimensional space where it becomes linearly separable, without actually computing the transformation.
- Common kernels: Linear (K=x.y, fast, for linearly separable data), RBF (K=exp(-gamma*||x-y||^2), most popular, handles non-linear), Polynomial (K=(gamma*x.y+r)^d, specific degree).
- Gamma controls the influence radius of each training point in RBF kernel. Large gamma = tight influence (overfitting). Small gamma = wide influence (underfitting).
- Feature scaling is critical for SVM because it uses distances. Always use StandardScaler before training. Fit on train, transform both train and test.
- SVM works well on small to medium datasets with many features. It struggles with very large datasets (>50K samples) due to O(n^2) to O(n^3) complexity.
- SVR (Support Vector Regression) uses an epsilon-insensitive tube around the prediction line. Points inside the tube have zero loss.
- SVM does not output probabilities by default. Set probability=True in SVC to enable Platt scaling (adds overhead). SVM does not provide feature importance directly.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/support-vector-machines/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/support-vector-machines/practice/*
