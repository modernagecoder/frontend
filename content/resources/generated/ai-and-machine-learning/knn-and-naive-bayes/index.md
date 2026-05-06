---
title: "KNN and Naive Bayes - Distance Metrics, Bayes Theorem, Spam Detection | Modern Age Coders"
description: "Master K-Nearest Neighbors and Naive Bayes classifiers: distance metrics (Euclidean, Manhattan), choosing K, curse of dimensionality, Bayes theorem, Gaussian/Multinomial/Bernoulli NB, KNN from scratch, spam detection. 55 practice questions with Python code."
slug: knn-and-naive-bayes
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/knn-and-naive-bayes
category: "AI and Machine Learning"
keywords: ["knn classifier", "k nearest neighbors", "naive bayes", "bayes theorem", "knn python", "naive bayes spam detection", "euclidean distance", "manhattan distance", "gaussian naive bayes", "multinomial naive bayes"]
---
# KNN and Naive Bayes Classifiers

**Difficulty:** Intermediate  
**Reading time:** 50 min  
**Chapter:** 9  
**Practice questions:** 52

## What Is K-Nearest Neighbors (KNN)?

**K-Nearest Neighbors** is one of the simplest and most intuitive ML algorithms. The idea is: to classify a new point, look at the K closest training points and let them vote. The majority class among those K neighbors is the prediction.

```
# KNN in one sentence:
# "Tell me who your neighbors are, and I will tell you who you are."
#
# How KNN classifies a new point (star):
#
#   x x x     o o
#   x x         o o
#     x  *    o o     (K=3: 2 nearest are 'x', 1 is 'o')
#   x x       o o      -> Prediction: 'x' (majority vote)
#              o o
#
# K=3: look at the 3 closest points, majority class wins
```

KNN is a **lazy learner**: it does not actually learn a model during training. It just stores the training data. All the computation happens at prediction time when it searches for the K nearest neighbors.

## What Is Naive Bayes?

**Naive Bayes** is a probabilistic classifier based on Bayes' theorem. It calculates the probability of each class given the features, and predicts the class with the highest probability. The "naive" part comes from the assumption that all features are **independent** of each other (which is rarely true in practice, yet the algorithm works surprisingly well).

```
# Bayes' Theorem:
# P(Class | Features) = P(Features | Class) * P(Class) / P(Features)
#
# For classification, we compare:
# P(Spam | words) vs P(Not Spam | words)
#
# The class with higher posterior probability wins.
#
# "Naive" assumption: features are independent
# P(word1, word2, word3 | Spam) = P(word1|Spam) * P(word2|Spam) * P(word3|Spam)
# This simplification makes computation tractable.
```

## Why Learn KNN and Naive Bayes?

### 1. KNN: Zero Training, Instant Understanding

KNN requires no training phase at all. Aarav can explain it to anyone in 30 seconds: "Find the K closest points and vote." This makes it perfect for prototyping and baselines. When a new ML project starts, KNN is often the first algorithm tried.

### 2. Naive Bayes: Fast, Scalable, and Surprisingly Effective

Naive Bayes is extremely fast to train (one pass through the data) and predict (just multiply probabilities). Despite its "naive" independence assumption, it works remarkably well for text classification, spam filtering, and sentiment analysis. Gmail's spam filter was originally based on Naive Bayes.

### 3. Different Strengths, Perfect for Comparison

KNN is distance-based (geometric intuition) while Naive Bayes is probability-based (statistical intuition). Understanding both gives you two fundamentally different approaches to classification. Comparing them on the same dataset teaches you when each approach excels.

### 4. Foundation for Advanced Methods

KNN is the foundation for recommendation systems ("users who bought this also bought..."). Naive Bayes is the foundation for more sophisticated probabilistic models like Bayesian networks and topic models (LDA). Understanding these simple versions prepares you for the advanced ones.

### 5. Interview Favorites

Both KNN and Naive Bayes are extremely popular in ML interviews. Interviewers love asking: "Implement KNN from scratch", "Explain Bayes' theorem with an example", "When would KNN fail?", "Why is it called naive?"

## Detailed Explanation

### Part 1: K-Nearest Neighbors (KNN)

#### 1.1 How KNN Works

```
# KNN Algorithm:
# 1. Store all training data (no actual training)
# 2. For a new point:
#    a. Calculate distance from the new point to ALL training points
#    b. Sort by distance
#    c. Pick the K closest points (neighbors)
#    d. For classification: majority vote among K neighbors
#    e. For regression: average of K neighbors' values
```

#### 1.2 Distance Metrics

KNN needs a way to measure "closeness". The most common distance metrics are:

```
# Euclidean Distance (L2): sqrt(sum((x_i - y_i)^2))
# - Most common, works well for continuous features
# - Sensitive to scale (must normalize features!)
# Example: distance between (1,2) and (4,6)
# = sqrt((4-1)^2 + (6-2)^2) = sqrt(9+16) = sqrt(25) = 5.0

# Manhattan Distance (L1): sum(|x_i - y_i|)
# - Sum of absolute differences
# - Better for high-dimensional data or grid-like movement
# Example: distance between (1,2) and (4,6)
# = |4-1| + |6-2| = 3 + 4 = 7

# Minkowski Distance (Lp): (sum(|x_i - y_i|^p))^(1/p)
# - Generalization: p=2 is Euclidean, p=1 is Manhattan
```

#### 1.3 Choosing K

```
# Small K (e.g., K=1):
# - Very sensitive to noise (one noisy neighbor can flip the prediction)
# - Complex decision boundary (overfitting)
# - Low bias, high variance
#
# Large K (e.g., K=50):
# - Very smooth boundary (may miss local patterns)
# - Less sensitive to noise (underfitting)
# - High bias, low variance
#
# Rule of thumb: start with K = sqrt(N) where N = training set size
# Always use odd K for binary classification (avoids ties)
# Use cross-validation to find the best K
```

#### 1.4 Curse of Dimensionality

KNN struggles in high-dimensional spaces. As the number of features increases, the concept of "distance" becomes meaningless because all points become approximately equidistant. This is the **curse of dimensionality**.

```
# In 1D: 10 points cover the space well
# In 2D: need 10^2 = 100 points
# In 10D: need 10^10 points to cover the space!
#
# Solution: use dimensionality reduction (PCA) before KNN
# or use feature selection to reduce the number of features
```

#### 1.5 Importance of Scaling

Since KNN uses distances, feature scaling is critical. A feature with range [0, 100000] will dominate over a feature with range [0, 1].

### Part 2: Naive Bayes

#### 2.1 Bayes' Theorem Recap

```
# Bayes' Theorem:
# P(A|B) = P(B|A) * P(A) / P(B)
#
# In ML terms:
# P(Class|Features) = P(Features|Class) * P(Class) / P(Features)
#
# posterior = likelihood * prior / evidence
#
# Since P(Features) is the same for all classes, we compare:
# P(Class_k|Features) proportional to P(Features|Class_k) * P(Class_k)
#
# Example: Is this email spam?
# P(Spam|"free money") proportional to P("free money"|Spam) * P(Spam)
# P(Not Spam|"free money") proportional to P("free money"|Not Spam) * P(Not Spam)
```

#### 2.2 The "Naive" Independence Assumption

Computing P(Features|Class) for many features simultaneously is intractable. The naive assumption simplifies this by assuming all features are independent:

```
# Without naive assumption (intractable):
# P(x1, x2, x3, ..., xn | Class) = ??? (need exponential data)
#
# With naive assumption:
# P(x1, x2, x3, ..., xn | Class) = P(x1|Class) * P(x2|Class) * ... * P(xn|Class)
#
# Each P(xi|Class) can be estimated from data easily!
# This is why it is called "Naive" Bayes.
```

#### 2.3 Types of Naive Bayes

```
# 1. Gaussian Naive Bayes (GaussianNB)
#    - Features are continuous and assumed to follow a normal distribution
#    - P(x_i|Class) = (1/sqrt(2*pi*sigma^2)) * exp(-(x_i - mu)^2 / (2*sigma^2))
#    - Use for: continuous features (height, weight, temperature)
#
# 2. Multinomial Naive Bayes (MultinomialNB)
#    - Features are discrete counts (word frequencies, occurrence counts)
#    - P(x_i|Class) = (count of x_i in Class + alpha) / (total words in Class + alpha*vocab_size)
#    - Use for: text classification (bag-of-words, TF-IDF)
#
# 3. Bernoulli Naive Bayes (BernoulliNB)
#    - Features are binary (present/absent, 0/1)
#    - P(x_i=1|Class) = (count of docs with x_i in Class + alpha) / (total docs in Class + 2*alpha)
#    - Use for: binary features, document classification (word present or not)
```

#### 2.4 Laplace Smoothing

If a word never appears in spam emails during training, P(word|Spam) = 0, which would make the entire product 0 (one unseen word kills the entire prediction). **Laplace smoothing** (alpha=1) adds a small count to prevent zero probabilities.

```
# Without smoothing: P("cryptocurrency"|Spam) = 0/100 = 0
# With smoothing (alpha=1): P("cryptocurrency"|Spam) = (0+1)/(100+V) where V = vocab size
# Now the probability is small but not zero.
```

## Code Examples

### KNN from Scratch with NumPy

```python
import numpy as np
from collections import Counter

class KNNClassifier:
    def __init__(self, k=3):
        self.k = k
    
    def fit(self, X, y):
        """Store training data (no actual training)."""
        self.X_train = np.array(X)
        self.y_train = np.array(y)
    
    def euclidean_distance(self, x1, x2):
        return np.sqrt(np.sum((x1 - x2) ** 2))
    
    def predict_single(self, x):
        # Calculate distances to all training points
        distances = [self.euclidean_distance(x, x_train)
                     for x_train in self.X_train]
        
        # Get K nearest neighbor indices
        k_indices = np.argsort(distances)[:self.k]
        k_labels = self.y_train[k_indices]
        
        # Majority vote
        most_common = Counter(k_labels).most_common(1)
        return most_common[0][0]
    
    def predict(self, X):
        return np.array([self.predict_single(x) for x in X])
    
    def score(self, X, y):
        predictions = self.predict(X)
        return np.mean(predictions == y)

# Generate data
np.random.seed(42)
# Class 0: centered around (2, 2)
X0 = np.random.randn(30, 2) + np.array([2, 2])
# Class 1: centered around (6, 6)  
X1 = np.random.randn(30, 2) + np.array([6, 6])
X = np.vstack([X0, X1])
y = np.array([0]*30 + [1]*30)

# Shuffle
idx = np.random.permutation(60)
X, y = X[idx], y[idx]

# Split
X_train, X_test = X[:48], X[48:]
y_train, y_test = y[:48], y[48:]

# Train and evaluate with different K
for k in [1, 3, 5, 7, 11]:
    knn = KNNClassifier(k=k)
    knn.fit(X_train, y_train)
    train_acc = knn.score(X_train, y_train)
    test_acc = knn.score(X_test, y_test)
    print(f"K={k:2d}: Train={train_acc:.3f}, Test={test_acc:.3f}")

# Predict for a specific point
knn = KNNClassifier(k=3)
knn.fit(X_train, y_train)
point = np.array([4, 4])
pred = knn.predict_single(point)
print(f"\nPrediction for point {point}: Class {pred}")
```

This from-scratch implementation shows every step: computing Euclidean distances to all training points, finding the K nearest, and performing majority voting. K=1 overfits (100% train, lower test). Larger K values smooth the decision boundary. The algorithm stores all training data -- no model is learned during fit().

**Output:**

```
K= 1: Train=1.000, Test=0.917
K= 3: Train=0.979, Test=1.000
K= 5: Train=0.979, Test=1.000
K= 7: Train=0.979, Test=1.000
K=11: Train=0.979, Test=1.000

Prediction for point [4, 4]: Class 0
```

### KNN with Scikit-Learn and Finding Optimal K

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris
from sklearn.metrics import classification_report

# Load iris dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split and scale
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# Find optimal K using cross-validation
k_range = range(1, 31)
cv_scores = []
for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X_train_s, y_train, cv=5)
    cv_scores.append(scores.mean())

best_k = k_range[np.argmax(cv_scores)]
print(f"Best K: {best_k} (CV accuracy: {max(cv_scores):.4f})")

# Plot K vs accuracy
plt.figure(figsize=(10, 5))
plt.plot(k_range, cv_scores, 'bo-', markersize=4)
plt.axvline(x=best_k, color='r', linestyle='--', label=f'Best K={best_k}')
plt.xlabel('K (Number of Neighbors)')
plt.ylabel('Cross-Validation Accuracy')
plt.title('KNN: Finding Optimal K')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()

# Train final model with best K
knn_best = KNeighborsClassifier(n_neighbors=best_k)
knn_best.fit(X_train_s, y_train)
y_pred = knn_best.predict(X_test_s)

print(f"\nTest Accuracy: {knn_best.score(X_test_s, y_test):.4f}")
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))
```

Cross-validation is the standard way to choose K. We train KNN with K=1 to 30 and pick the K with the highest CV accuracy. Scaling is critical: iris features have different ranges (sepal length 4-8 cm vs petal width 0-2.5 cm). Without scaling, larger features dominate distance calculations.

**Output:**

```
Best K: 7 (CV accuracy: 0.9667)

Test Accuracy: 0.9667

Classification Report:
              precision    recall  f1-score   support

      setosa       1.00      1.00      1.00        10
  versicolor       0.91      1.00      0.95        10
   virginica       1.00      0.90      0.95        10

    accuracy                           0.97        30
   macro avg       0.97      0.97      0.97        30
weighted avg       0.97      0.97      0.97        30
```

### Naive Bayes: Gaussian, Multinomial, and Bernoulli

```python
import numpy as np
from sklearn.naive_bayes import GaussianNB, MultinomialNB, BernoulliNB
from sklearn.datasets import load_iris, fetch_20newsgroups
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.feature_extraction.text import CountVectorizer, TfidfVectorizer
from sklearn.metrics import accuracy_score

# 1. Gaussian Naive Bayes (continuous features)
print("=== Gaussian Naive Bayes ===")
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.3, random_state=42
)

gnb = GaussianNB()
gnb.fit(X_train, y_train)
print(f"Iris accuracy: {gnb.score(X_test, y_test):.4f}")
print(f"Class prior probabilities: {np.round(gnb.class_prior_, 3)}")
print(f"Feature means per class:")
for i, name in enumerate(iris.target_names):
    print(f"  {name}: {np.round(gnb.theta_[i], 2)}")

# 2. Multinomial Naive Bayes (word counts / TF-IDF)
print(f"\n=== Multinomial Naive Bayes ===")
texts = [
    "free money win lottery prize",
    "congratulations you won free gift",
    "claim your free reward now",
    "limited offer free discount sale",
    "meeting scheduled for tomorrow",
    "project deadline next week",
    "team lunch plans for friday",
    "quarterly report due monday",
    "free lunch tomorrow everyone invited",
    "submit your expense report free"
]
labels = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]  # 1=spam, 0=not spam

vectorizer = CountVectorizer()
X_text = vectorizer.fit_transform(texts)

mnb = MultinomialNB(alpha=1.0)  # alpha=1 is Laplace smoothing
mnb.fit(X_text, labels)

# Predict new emails
new_emails = ["free money for you", "meeting tomorrow at office"]
X_new = vectorizer.transform(new_emails)
predictions = mnb.predict(X_new)
for email, pred in zip(new_emails, predictions):
    print(f"  '{email}' -> {'Spam' if pred == 1 else 'Not Spam'}")

# 3. Bernoulli Naive Bayes (binary features)
print(f"\n=== Bernoulli Naive Bayes ===")
# Create binary features (word present or not)
X_binary = (X_text > 0).astype(int)
bnb = BernoulliNB(alpha=1.0)
bnb.fit(X_binary, labels)
print(f"Bernoulli NB accuracy on training: {bnb.score(X_binary, labels):.4f}")
```

GaussianNB assumes continuous features follow normal distributions (good for iris, numerical data). MultinomialNB works with word counts or TF-IDF (good for text classification). BernoulliNB works with binary features (word present/absent). Laplace smoothing (alpha=1) prevents zero probabilities for unseen words.

**Output:**

```
=== Gaussian Naive Bayes ===
Iris accuracy: 0.9778
Class prior probabilities: [0.343 0.324 0.333]
Feature means per class:
  setosa: [4.97 3.38 1.48 0.25]
  versicolor: [5.91 2.78 4.21 1.31]
  virginica: [6.62 2.97 5.57 2.01]

=== Multinomial Naive Bayes ===
  'free money for you' -> Spam
  'meeting tomorrow at office' -> Not Spam

=== Bernoulli Naive Bayes ===
Bernoulli NB accuracy on training: 1.0000
```

### KNN vs Naive Bayes: Head-to-Head Comparison

```python
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import make_classification, make_moons
import time

print("=== Dataset 1: Linear Pattern ===")
X1, y1 = make_classification(n_samples=500, n_features=10,
                              n_informative=5, random_state=42)
scaler = StandardScaler()
X1_s = scaler.fit_transform(X1)

knn = KNeighborsClassifier(n_neighbors=5)
nb = GaussianNB()

knn_scores = cross_val_score(knn, X1_s, y1, cv=5)
nb_scores = cross_val_score(nb, X1, y1, cv=5)  # NB doesn't need scaling

print(f"KNN (K=5): {knn_scores.mean():.3f} +/- {knn_scores.std():.3f}")
print(f"Naive Bayes: {nb_scores.mean():.3f} +/- {nb_scores.std():.3f}")

print(f"\n=== Dataset 2: Non-linear Pattern (Moons) ===")
X2, y2 = make_moons(n_samples=500, noise=0.3, random_state=42)
X2_s = scaler.fit_transform(X2)

knn_scores2 = cross_val_score(knn, X2_s, y2, cv=5)
nb_scores2 = cross_val_score(nb, X2, y2, cv=5)

print(f"KNN (K=5): {knn_scores2.mean():.3f} +/- {knn_scores2.std():.3f}")
print(f"Naive Bayes: {nb_scores2.mean():.3f} +/- {nb_scores2.std():.3f}")

print(f"\n=== Speed Comparison (10,000 samples) ===")
X3, y3 = make_classification(n_samples=10000, n_features=20, random_state=42)
X3_s = scaler.fit_transform(X3)

start = time.time()
knn.fit(X3_s[:8000], y3[:8000])
knn.predict(X3_s[8000:])
t_knn = time.time() - start

start = time.time()
nb.fit(X3[:8000], y3[:8000])
nb.predict(X3[8000:])
t_nb = time.time() - start

print(f"KNN: {t_knn:.4f}s")
print(f"NB:  {t_nb:.4f}s")
print(f"NB is {t_knn/t_nb:.1f}x faster")

print(f"\n=== Summary ===")
print("KNN: Better for non-linear patterns, needs scaling, slow at prediction")
print("NB:  Better for high-dimensional/text data, fast, no scaling needed")
```

On linear data, both perform similarly. On non-linear data (moons), KNN significantly outperforms NB because NB assumes Gaussian features and linear boundaries. However, NB is dramatically faster because it learns parameters in one pass while KNN must compute distances for every prediction. The right choice depends on your data and requirements.

**Output:**

```
=== Dataset 1: Linear Pattern ===
KNN (K=5): 0.870 +/- 0.024
Naive Bayes: 0.864 +/- 0.021

=== Dataset 2: Non-linear Pattern (Moons) ===
KNN (K=5): 0.926 +/- 0.018
Naive Bayes: 0.854 +/- 0.030

=== Speed Comparison (10,000 samples) ===
KNN: 0.1523s
NB:  0.0024s
NB is 63.5x faster

=== Summary ===
KNN: Better for non-linear patterns, needs scaling, slow at prediction
NB:  Better for high-dimensional/text data, fast, no scaling needed
```

### Spam Detection with Multinomial Naive Bayes

```python
import numpy as np
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.pipeline import Pipeline

# Simulated email dataset
emails = [
    # Spam emails
    "Congratulations you have won a free iPhone click here",
    "Free money transfer to your account immediately",
    "Win a free vacation package limited time offer",
    "Claim your prize money now free gift card",
    "Earn money from home free registration no experience",
    "Free trial offer click below to claim your reward",
    "You are selected for a free laptop giveaway",
    "Urgent your account will be closed send password",
    "Make money fast guaranteed income work from home",
    "Limited offer discount sale free shipping today only",
    "Free casino bonus play now and win big prizes",
    "Congratulations your email won the lottery jackpot",
    "Double your income with this free investment guide",
    "Free credit score check no obligation required",
    "Get rich quick scheme guaranteed money back",
    # Not spam emails  
    "Meeting scheduled for tomorrow at 3 PM in conference room",
    "Please review the quarterly report and provide feedback",
    "Team lunch at the new restaurant this Friday",
    "Reminder project deadline is next Monday",
    "Can you send me the updated budget spreadsheet",
    "The client meeting has been rescheduled to Thursday",
    "Please find the attached invoice for last month",
    "Happy birthday Priya team celebration at noon",
    "We need to discuss the new feature requirements",
    "The server maintenance is scheduled for this weekend",
    "Updated the documentation please review before release",
    "Great job on the presentation yesterday everyone",
    "Could you help me debug this API endpoint issue",
    "The code review for the payment module is pending",
    "Welcome Rohan to the engineering team orientation Monday",
]
labels = [1]*15 + [0]*15  # 1=spam, 0=not spam

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    emails, labels, test_size=0.3, random_state=42, stratify=labels
)

# Create pipeline: TF-IDF + Multinomial NB
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', max_features=500)),
    ('nb', MultinomialNB(alpha=1.0))
])

pipeline.fit(X_train, y_train)
y_pred = pipeline.predict(X_test)

print(f"Accuracy: {pipeline.score(X_test, y_test):.4f}")
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Not Spam', 'Spam']))
print(f"Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Predict new emails
new_emails = [
    "Free money waiting for you click now",
    "Can we reschedule tomorrow's meeting to 4 PM",
    "Congratulations you won a free trip to Goa",
    "The deployment was successful no issues found"
]
print(f"\nNew email predictions:")
predictions = pipeline.predict(new_emails)
proba = pipeline.predict_proba(new_emails)
for email, pred, prob in zip(new_emails, predictions, proba):
    label = 'SPAM' if pred == 1 else 'NOT SPAM'
    conf = max(prob) * 100
    print(f"  [{label:8s}] ({conf:.0f}% confident) \"{email}\"")
```

This complete spam detection pipeline uses TF-IDF to convert text into numerical features and Multinomial NB for classification. The pipeline abstraction makes it easy to preprocess and predict in one step. Naive Bayes excels at text classification because the naive independence assumption works reasonably well for word features.

**Output:**

```
Accuracy: 0.8889

Classification Report:
              precision    recall  f1-score   support

    Not Spam       0.83      1.00      0.91         5
        Spam       1.00      0.75      0.86         4

    accuracy                           0.89         9
   macro avg       0.92      0.88      0.89         9
weighted avg       0.91      0.89      0.89         9

Confusion Matrix:
[[5 0]
 [1 3]]

New email predictions:
  [SPAM    ] (92% confident) "Free money waiting for you click now"
  [NOT SPAM] (87% confident) "Can we reschedule tomorrow's meeting to 4 PM"
  [SPAM    ] (88% confident) "Congratulations you won a free trip to Goa"
  [NOT SPAM] (95% confident) "The deployment was successful no issues found"
```

### Distance Metrics Comparison and Visualization

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler

# Custom distance calculation
def euclidean(a, b):
    return np.sqrt(np.sum((a - b) ** 2))

def manhattan(a, b):
    return np.sum(np.abs(a - b))

def chebyshev(a, b):
    return np.max(np.abs(a - b))

# Compare distances for two points
p1 = np.array([1, 2])
p2 = np.array([4, 6])

print("Distance from (1,2) to (4,6):")
print(f"  Euclidean:  {euclidean(p1, p2):.2f}")
print(f"  Manhattan:  {manhattan(p1, p2):.2f}")
print(f"  Chebyshev:  {chebyshev(p1, p2):.2f}")

# Compare metrics on a dataset
X, y = make_classification(n_samples=300, n_features=10,
                            n_informative=5, random_state=42)
scaler = StandardScaler()
X_s = scaler.fit_transform(X)

print(f"\nCross-validation accuracy by distance metric:")
metrics = ['euclidean', 'manhattan', 'chebyshev', 'minkowski']
for metric in metrics:
    knn = KNeighborsClassifier(n_neighbors=5, metric=metric)
    scores = cross_val_score(knn, X_s, y, cv=5)
    print(f"  {metric:12s}: {scores.mean():.3f} +/- {scores.std():.3f}")

# Visualize what K-neighborhoods look like
fig, axes = plt.subplots(1, 3, figsize=(15, 5))
np.random.seed(42)
X_vis = np.random.randn(50, 2)
query = np.array([0, 0])

for ax, metric_name, metric_func in zip(axes,
    ['Euclidean', 'Manhattan', 'Chebyshev'],
    [euclidean, manhattan, chebyshev]):
    
    distances = [metric_func(query, x) for x in X_vis]
    sorted_idx = np.argsort(distances)
    k_nearest = sorted_idx[:5]
    
    ax.scatter(X_vis[:, 0], X_vis[:, 1], c='gray', alpha=0.5, s=30)
    ax.scatter(X_vis[k_nearest, 0], X_vis[k_nearest, 1],
               c='red', s=100, zorder=5, label='5 Nearest')
    ax.scatter(*query, c='blue', s=200, marker='*', zorder=6, label='Query')
    ax.set_title(f'{metric_name} Distance')
    ax.legend()
    ax.grid(True, alpha=0.3)
    ax.set_aspect('equal')

plt.tight_layout()
plt.show()
```

Different distance metrics can produce different neighbors. Euclidean is the straight-line distance (most common). Manhattan sums absolute differences (like navigating a grid). Chebyshev uses the maximum difference along any dimension. For most tabular data, Euclidean performs best. Manhattan can be better for high-dimensional or sparse data.

**Output:**

```
Distance from (1,2) to (4,6):
  Euclidean:  5.00
  Manhattan:  7.00
  Chebyshev:  4.00

Cross-validation accuracy by distance metric:
  euclidean   : 0.870 +/- 0.024
  manhattan   : 0.867 +/- 0.028
  chebyshev   : 0.843 +/- 0.031
  minkowski   : 0.870 +/- 0.024
```

### Bayes Theorem in Action: Medical Diagnosis Example

```python
import numpy as np

def bayes_theorem(prior, likelihood, evidence):
    """Calculate posterior probability using Bayes' theorem."""
    return (likelihood * prior) / evidence

# Example: Medical test for a disease
# - Disease prevalence (prior): 1% of population has the disease
# - Test sensitivity (P(positive|disease)): 99%
# - Test specificity (P(negative|no disease)): 95%

P_disease = 0.01          # Prior: P(Disease)
P_no_disease = 0.99       # Prior: P(No Disease)
P_pos_given_disease = 0.99  # Sensitivity: P(Positive | Disease)
P_neg_given_no_disease = 0.95  # Specificity: P(Negative | No Disease)
P_pos_given_no_disease = 1 - P_neg_given_no_disease  # False positive rate = 0.05

# P(Positive) = P(Pos|Disease)*P(Disease) + P(Pos|No Disease)*P(No Disease)
P_positive = P_pos_given_disease * P_disease + P_pos_given_no_disease * P_no_disease

# Bayes' Theorem: P(Disease | Positive)
P_disease_given_pos = bayes_theorem(P_disease, P_pos_given_disease, P_positive)

print("Medical Diagnosis Example")
print("=" * 50)
print(f"Disease prevalence:     {P_disease:.2%}")
print(f"Test sensitivity:       {P_pos_given_disease:.2%}")
print(f"Test specificity:       {P_neg_given_no_disease:.2%}")
print(f"False positive rate:    {P_pos_given_no_disease:.2%}")
print(f"\nP(Positive test):       {P_positive:.4f} ({P_positive:.2%})")
print(f"P(Disease | Positive):  {P_disease_given_pos:.4f} ({P_disease_given_pos:.2%})")

print(f"\nSurprising result: Even with a 99% accurate test,")
print(f"a positive result only means {P_disease_given_pos:.1%} chance of disease!")
print(f"This is because the disease is rare (1%), so most positives are false positives.")

# What if we test again (independent test)?
P_disease_after_second = bayes_theorem(
    P_disease_given_pos,  # New prior after first test
    P_pos_given_disease,  # Same sensitivity
    P_pos_given_disease * P_disease_given_pos + P_pos_given_no_disease * (1 - P_disease_given_pos)
)
print(f"\nAfter SECOND positive test: {P_disease_after_second:.1%} chance of disease")
```

This illustrates Bayes' theorem with a classic medical example. Despite a 99% accurate test, a positive result only means ~17% chance of disease because the disease is rare. Most positive results are false positives from the healthy 99%. This counter-intuitive result is why understanding Bayes' theorem is essential. After a second independent positive test, the probability jumps to ~80%.

**Output:**

```
Medical Diagnosis Example
==================================================
Disease prevalence:     1.00%
Test sensitivity:       99.00%
Test specificity:       95.00%
False positive rate:    5.00%

P(Positive test):       0.0594 (5.94%)
P(Disease | Positive):  0.1667 (16.67%)

Surprising result: Even with a 99% accurate test,
a positive result only means 16.7% chance of disease!
This is because the disease is rare (1%), so most positives are false positives.

After SECOND positive test: 79.8% chance of disease
```

## Common Mistakes

### Not Scaling Features Before KNN

**Wrong:**

```
from sklearn.neighbors import KNeighborsClassifier

# Feature 1: age (20-60), Feature 2: salary (20000-200000)
X = [[25, 30000], [30, 45000], [50, 150000]]
y = [0, 0, 1]

knn = KNeighborsClassifier(n_neighbors=1)
knn.fit(X, y)
# Distance dominated by salary (range 170,000 vs age range 30)
```

No error, but salary dominates all distance calculations. Two people with different ages but similar salaries will always be considered "close", ignoring the age difference entirely.

**Correct:**

```
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler

X = [[25, 30000], [30, 45000], [50, 150000]]
y = [0, 0, 1]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

knn = KNeighborsClassifier(n_neighbors=1)
knn.fit(X_scaled, y)
# Now both features contribute equally to distance
```

KNN uses distances, so features must be on the same scale. Use StandardScaler (zero mean, unit variance) or MinMaxScaler (0 to 1). Always fit the scaler on training data only, then transform both train and test data.

### Using Even K for Binary Classification

**Wrong:**

```
from sklearn.neighbors import KNeighborsClassifier

# K=4 can cause ties in binary classification
knn = KNeighborsClassifier(n_neighbors=4)  # 2 vs 2 tie possible!
knn.fit(X_train, y_train)
# If 2 neighbors are class 0 and 2 are class 1, the result is ambiguous
```

No error, but with even K, ties are possible. Scikit-learn breaks ties by choosing the class that appears first in the training data, which is arbitrary.

**Correct:**

```
from sklearn.neighbors import KNeighborsClassifier

# Use odd K for binary classification to avoid ties
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
# With K=5, there is always a majority (3 vs 2 or 4 vs 1 or 5 vs 0)
```

For binary classification, always use odd K values (3, 5, 7, ...) to guarantee a majority vote. For multi-class classification, ties can still occur with odd K, but they are less likely. Scikit-learn uses distance-weighted voting to break ties when weights='distance'.

### Applying Naive Bayes to Data with Strong Feature Dependencies

**Wrong:**

```
from sklearn.naive_bayes import GaussianNB

# Features are highly correlated (height in cm AND height in inches)
# NB assumes independence -- this violates the assumption badly
X = [[170, 67], [180, 71], [160, 63], [175, 69]]  # cm, inches
y = [0, 1, 0, 1]

nb = GaussianNB()
nb.fit(X, y)
# The model double-counts the height information
```

No error, but the model effectively counts the same information twice. It treats height_cm and height_inches as independent features, which inflates the importance of height relative to other features.

**Correct:**

```
from sklearn.naive_bayes import GaussianNB

# Remove one of the correlated features
# Keep only height in cm
X = [[170], [180], [160], [175]]
y = [0, 1, 0, 1]

nb = GaussianNB()
nb.fit(X, y)
# Or use feature selection/PCA to remove correlated features
```

Naive Bayes assumes feature independence. Highly correlated features (like height in cm and inches) violate this assumption and lead to overconfident, biased predictions. Remove duplicate or highly correlated features before training, or use PCA to decorrelate features.

### Using MultinomialNB with Negative Feature Values

**Wrong:**

```
from sklearn.naive_bayes import MultinomialNB
from sklearn.preprocessing import StandardScaler

# StandardScaler creates negative values
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # Contains negative values!

mnb = MultinomialNB()
mnb.fit(X_scaled, y)  # ValueError: negative values!
```

ValueError: Negative values in data passed to MultinomialNB (input X).

**Correct:**

```
from sklearn.naive_bayes import MultinomialNB, GaussianNB
from sklearn.preprocessing import MinMaxScaler

# Option 1: Use MinMaxScaler (all values >= 0)
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
mnb = MultinomialNB()
mnb.fit(X_scaled, y)  # Works!

# Option 2: Use GaussianNB (handles negative values)
gnb = GaussianNB()
gnb.fit(X, y)  # Works with any values!
```

MultinomialNB requires non-negative features because it models feature counts (word frequencies). StandardScaler produces negative values. Use MinMaxScaler instead, or switch to GaussianNB for continuous features. For text data, use CountVectorizer or TfidfVectorizer which produce non-negative values.

## Summary

- KNN classifies by finding the K closest training points and taking a majority vote. It is a lazy learner: no model is trained, all computation happens at prediction time.
- Distance metrics: Euclidean (sqrt of sum of squared differences, most common), Manhattan (sum of absolute differences, good for high dimensions), Minkowski (generalization).
- Choosing K: Small K (1-3) overfits (complex boundary, noisy). Large K underfits (smooth boundary, misses patterns). Use cross-validation to find optimal K. Use odd K for binary classification.
- KNN requires feature scaling (distances are scale-dependent). It suffers from the curse of dimensionality in high-dimensional spaces.
- Naive Bayes uses Bayes theorem: P(Class|Features) is proportional to P(Features|Class) * P(Class). It assumes feature independence ("naive").
- Three types: GaussianNB (continuous features, assumes normal distribution), MultinomialNB (word counts/TF-IDF, for text), BernoulliNB (binary features, word present/absent).
- Laplace smoothing (alpha=1) prevents zero probabilities for unseen features. Without it, one unseen word makes the entire probability zero.
- Naive Bayes is extremely fast (training is O(n*d), prediction is O(d)) and works well for text classification, spam filtering, and high-dimensional data.
- KNN vs Naive Bayes: KNN is better for non-linear patterns and small datasets. NB is better for text data, high-dimensional data, and when speed matters.
- KNN prediction is slow (O(n*d) per prediction -- must compute distance to all training points). Consider using KD-tree or Ball-tree for faster lookup.
- Both algorithms are strong baselines and frequently asked about in ML interviews. Know how to implement KNN from scratch and explain Bayes theorem with a real example.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/knn-and-naive-bayes/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/knn-and-naive-bayes/practice/*
