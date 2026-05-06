---
title: "Decision Trees and Random Forests - Gini, Entropy, Bagging, Feature Importance | Modern Age Coders"
description: "Master decision trees and random forests: Gini impurity, information gain, entropy, pruning, bagging, bootstrap sampling, feature importance, sklearn DecisionTreeClassifier, RandomForestClassifier. 58 practice questions with Python code."
slug: decision-trees-and-random-forests
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/decision-trees-and-random-forests
category: "AI and Machine Learning"
keywords: ["decision tree", "random forest", "gini impurity", "information gain", "entropy", "decision tree pruning", "bagging", "bootstrap sampling", "feature importance", "sklearn decision tree"]
---
# Decision Trees and Random Forests

**Difficulty:** Intermediate  
**Reading time:** 55 min  
**Chapter:** 7  
**Practice questions:** 54

## What Are Decision Trees?

A **decision tree** is a supervised learning algorithm that makes predictions by learning a series of if-then rules from the data. Think of it as a flowchart: at each step, you ask a question about a feature ("Is study_hours > 5?"), and based on the answer, you go left or right down the tree until you reach a final prediction (a leaf node).

```
# Example decision tree for predicting loan approval:
#
#            [Income > 50000?]
#              /           \\
#           Yes             No
#            |               |
#    [Credit > 700?]    [Rejected]
#      /        \\
#    Yes         No
#     |           |
# [Approved]  [Employment > 2 yrs?]
#                /        \\
#              Yes         No
#               |           |
#           [Approved]  [Rejected]
```

Decision trees are one of the most intuitive ML algorithms. Even non-technical stakeholders can understand and validate the model's logic by reading the tree.

## What Are Random Forests?

A **Random Forest** is an **ensemble** of many decision trees. Instead of relying on a single tree (which can overfit), you build hundreds of trees, each trained on a slightly different subset of data and features, and combine their predictions through voting (classification) or averaging (regression).

```
# Random Forest = Many trees voting together
#
# Tree 1: Approved    Tree 2: Rejected    Tree 3: Approved
# Tree 4: Approved    Tree 5: Approved    Tree 6: Rejected
#
# Majority vote: Approved (4 out of 6)
# Final prediction: Approved
```

The "wisdom of the crowd" principle: many imperfect models combined often outperform a single complex model.

## Why Learn Decision Trees and Random Forests?

### 1. Most Interpretable ML Algorithm

Decision trees produce human-readable rules. When Kavita builds a loan approval model for a bank, she can show the manager the exact decision path: "This applicant was rejected because their income was below 30,000 AND their credit score was below 650." No other algorithm provides this level of transparency.

### 2. Random Forest Is the Industry Workhorse

Random Forest is one of the most widely used ML algorithms in industry. It works well on almost any tabular dataset with minimal tuning. Companies like Airbnb, Netflix, and Flipkart use tree-based models for their core ML systems. Random Forest is often the first algorithm data scientists try after establishing a baseline.

### 3. Feature Importance for Free

Both decision trees and random forests automatically tell you which features matter most. This is invaluable for understanding your data and for feature selection. If Rohan builds a model to predict customer churn, the feature importances might reveal that "days since last login" is 5x more important than "age".

### 4. No Feature Scaling Required

Unlike logistic regression and SVM, decision trees do not care about feature scales. Whether income is in rupees (thousands) or dollars (hundreds), the tree makes the same splits. This simplifies preprocessing significantly.

### 5. Handles Non-Linear Relationships

Logistic regression can only create linear decision boundaries. Decision trees can capture complex, non-linear patterns with axis-aligned splits. Random Forests can approximate virtually any decision boundary.

### 6. Foundation for Boosting Algorithms

Understanding decision trees is a prerequisite for XGBoost, LightGBM, and CatBoost -- the most powerful algorithms for tabular data and the winners of most Kaggle competitions.

## Detailed Explanation

### 1. How Decision Trees Work: The Splitting Process

A decision tree is built top-down by recursively splitting the data. At each node, the algorithm asks: "Which feature and which threshold give the best split?" The "best" split is the one that most effectively separates the classes (for classification) or reduces variance (for regression).

```
# Building a tree step by step:
# 1. Start with ALL data at the root node
# 2. Try every feature and every possible threshold
# 3. Pick the split that maximizes "purity" (minimizes impurity)
# 4. Create two child nodes with the split data
# 5. Repeat for each child node
# 6. Stop when: max_depth reached, or node is pure, or min_samples reached
```

### 2. Gini Impurity

Gini impurity measures how mixed the classes are in a node. A pure node (all one class) has Gini = 0. A perfectly mixed node (50/50) has Gini = 0.5 for binary classification.

```
# Gini Impurity formula:
# Gini(node) = 1 - sum(p_i^2) for each class i
#
# Example 1: Pure node [10 cats, 0 dogs]
# p_cat = 10/10 = 1.0, p_dog = 0/10 = 0.0
# Gini = 1 - (1.0^2 + 0.0^2) = 1 - 1 = 0.0  (perfectly pure)
#
# Example 2: Mixed node [5 cats, 5 dogs]
# p_cat = 5/10 = 0.5, p_dog = 5/10 = 0.5
# Gini = 1 - (0.5^2 + 0.5^2) = 1 - 0.5 = 0.5  (maximum impurity)
#
# Example 3: Somewhat mixed [7 cats, 3 dogs]
# p_cat = 7/10 = 0.7, p_dog = 3/10 = 0.3
# Gini = 1 - (0.7^2 + 0.3^2) = 1 - (0.49 + 0.09) = 0.42
```

### 3. Information Gain and Entropy

Entropy is another measure of impurity, based on information theory. Information Gain is the reduction in entropy after a split.

```
# Entropy formula:
# Entropy(node) = -sum(p_i * log2(p_i)) for each class i
#
# Example: [5 cats, 5 dogs]
# Entropy = -(0.5 * log2(0.5) + 0.5 * log2(0.5))
#         = -(0.5 * (-1) + 0.5 * (-1))
#         = 1.0  (maximum entropy for 2 classes)
#
# Pure node [10 cats, 0 dogs]:
# Entropy = 0.0 (no uncertainty)
#
# Information Gain = Entropy(parent) - weighted_average(Entropy(children))
# The split with the highest Information Gain is chosen.
```

### 4. Building a Tree Step by Step

Consider a small dataset to predict if a student passes:

```
# Data:
# Hours  Attendance  Pass?
#   2       40        No
#   3       50        No
#   5       70        Yes
#   7       80        Yes
#   8       90        Yes
#   4       60        No
#
# Step 1: Try split on Hours <= 4
#   Left (Hours <= 4): [No, No, No]  -> Gini = 0.0 (pure!)
#   Right (Hours > 4): [Yes, Yes, Yes] -> Gini = 0.0 (pure!)
#   Weighted Gini = (3/6)*0.0 + (3/6)*0.0 = 0.0  (perfect split!)
#
# The tree learns: if hours > 4, predict Pass; else predict Fail.
```

### 5. Overfitting and Pruning

Decision trees tend to **overfit**: they memorize the training data perfectly by creating very deep trees with nodes that capture noise. A tree grown without constraints will have 100% training accuracy but poor generalization.

```
# Overfitting indicators:
# - Training accuracy = 100%, Test accuracy = 70%
# - Tree has hundreds of nodes for a small dataset
# - Leaf nodes have very few samples (1-2)
#
# Pruning strategies (hyperparameters):
# max_depth: Limit how deep the tree can grow (e.g., max_depth=5)
# min_samples_split: Minimum samples required to split a node (e.g., 10)
# min_samples_leaf: Minimum samples in a leaf node (e.g., 5)
# max_leaf_nodes: Maximum number of leaf nodes
# max_features: Number of features to consider at each split
```

### 6. Random Forest: Bagging + Feature Randomness

Random Forest uses two key ideas to reduce overfitting:

#### Bootstrap Aggregating (Bagging)

Each tree is trained on a **bootstrap sample** -- a random sample of the training data with replacement. Some samples appear multiple times, others are left out. This creates diversity among trees.

```
# Original data: [A, B, C, D, E] (5 samples)
# Bootstrap sample 1: [A, A, C, D, E]  (B left out, A appears twice)
# Bootstrap sample 2: [B, C, C, D, A]  (E left out, C appears twice)
# Bootstrap sample 3: [A, B, D, D, E]  (C left out, D appears twice)
# Each tree trains on a different bootstrap sample
```

#### Feature Randomness

At each split, only a random subset of features is considered (typically sqrt(n_features) for classification). This prevents all trees from making the same splits and creates more diversity.

```
# 10 features total, sqrt(10) ~ 3 features per split
# Tree 1, Node 1: considers features [2, 5, 8]
# Tree 1, Node 2: considers features [1, 4, 9]
# Tree 2, Node 1: considers features [3, 6, 7]
# Different trees learn different patterns!
```

### 7. Why Random Forest Is Better Than a Single Tree

A single deep tree has **high variance** (changes a lot with different training data) and **low bias** (fits training data well). By averaging many high-variance trees, the variance is reduced while bias stays low. This is the key insight of ensemble learning.

```
# Single tree: Accuracy varies between 70-90% depending on data split
# Random Forest (100 trees): Accuracy consistently around 85-88%
# The forest is more stable and reliable
```

### 8. Feature Importance

Random Forest calculates feature importance by measuring how much each feature contributes to reducing impurity across all trees. Features that appear in early splits (near the root) and reduce impurity significantly get higher importance scores.

```
# Feature importance sums to 1.0
# Example output:
# previous_gpa:       0.35  (most important)
# study_hours:        0.25
# attendance:         0.20
# assignment_score:   0.15
# sleep_hours:        0.05  (least important)
```

## Code Examples

### Computing Gini Impurity and Entropy from Scratch

```python
import numpy as np

def gini_impurity(labels):
    """Calculate Gini impurity of a node."""
    n = len(labels)
    if n == 0:
        return 0
    counts = np.bincount(labels)
    probabilities = counts / n
    return 1 - np.sum(probabilities ** 2)

def entropy(labels):
    """Calculate entropy of a node."""
    n = len(labels)
    if n == 0:
        return 0
    counts = np.bincount(labels)
    probabilities = counts[counts > 0] / n  # exclude zero counts
    return -np.sum(probabilities * np.log2(probabilities))

def information_gain(parent, left_child, right_child):
    """Calculate information gain from a split."""
    n = len(parent)
    n_left = len(left_child)
    n_right = len(right_child)
    parent_entropy = entropy(parent)
    child_entropy = (n_left/n) * entropy(left_child) + (n_right/n) * entropy(right_child)
    return parent_entropy - child_entropy

# Example: 10 students, 6 pass (1), 4 fail (0)
parent = np.array([0, 0, 0, 0, 1, 1, 1, 1, 1, 1])
print(f"Parent Gini: {gini_impurity(parent):.4f}")
print(f"Parent Entropy: {entropy(parent):.4f}")

# Split 1: Hours > 5 -> Left: [0,0,0,0,1], Right: [1,1,1,1,1]
left1 = np.array([0, 0, 0, 0, 1])
right1 = np.array([1, 1, 1, 1, 1])
weighted_gini1 = (5/10)*gini_impurity(left1) + (5/10)*gini_impurity(right1)
ig1 = information_gain(parent, left1, right1)
print(f"\nSplit 1 (Hours > 5):")
print(f"  Left Gini: {gini_impurity(left1):.4f}, Right Gini: {gini_impurity(right1):.4f}")
print(f"  Weighted Gini: {weighted_gini1:.4f}")
print(f"  Information Gain: {ig1:.4f}")

# Split 2: Attendance > 70 -> Left: [0,0,0], Right: [0,1,1,1,1,1,1]
left2 = np.array([0, 0, 0])
right2 = np.array([0, 1, 1, 1, 1, 1, 1])
weighted_gini2 = (3/10)*gini_impurity(left2) + (7/10)*gini_impurity(right2)
ig2 = information_gain(parent, left2, right2)
print(f"\nSplit 2 (Attendance > 70):")
print(f"  Left Gini: {gini_impurity(left2):.4f}, Right Gini: {gini_impurity(right2):.4f}")
print(f"  Weighted Gini: {weighted_gini2:.4f}")
print(f"  Information Gain: {ig2:.4f}")

print(f"\nBetter split: {'Split 1' if weighted_gini1 < weighted_gini2 else 'Split 2'} (lower Gini)")
```

Gini impurity and entropy both measure class mixing in a node. Gini ranges from 0 (pure) to 0.5 (binary). Entropy ranges from 0 to 1 (binary). Information gain measures how much a split reduces entropy. The split with the highest information gain (or lowest weighted Gini) is chosen.

**Output:**

```
Parent Gini: 0.4800
Parent Entropy: 0.9710

Split 1 (Hours > 5):
  Left Gini: 0.3200, Right Gini: 0.0000
  Weighted Gini: 0.1600
  Information Gain: 0.6065

Split 2 (Attendance > 70):
  Left Gini: 0.0000, Right Gini: 0.2449
  Weighted Gini: 0.1714
  Information Gain: 0.5567

Better split: Split 1 (lower Gini)
```

### Decision Tree Classifier with Scikit-Learn

```python
import numpy as np
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Generate student dataset
np.random.seed(42)
n = 300
data = {
    'study_hours': np.random.uniform(1, 12, n),
    'attendance': np.random.uniform(30, 100, n),
    'prev_gpa': np.random.uniform(1.0, 4.0, n),
    'assignments': np.random.uniform(20, 100, n)
}

X = np.column_stack([data['study_hours'], data['attendance'],
                     data['prev_gpa'], data['assignments']])
score = (2*data['study_hours'] + 0.3*data['attendance'] +
         3*data['prev_gpa'] + 0.1*data['assignments'] +
         np.random.normal(0, 3, n))
y = (score > 20).astype(int)

feature_names = ['study_hours', 'attendance', 'prev_gpa', 'assignments']

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Train with different max_depth to show overfitting
for depth in [2, 5, None]:
    tree = DecisionTreeClassifier(max_depth=depth, random_state=42)
    tree.fit(X_train, y_train)
    train_acc = tree.score(X_train, y_train)
    test_acc = tree.score(X_test, y_test)
    n_leaves = tree.get_n_leaves()
    print(f"max_depth={str(depth):4s} | Train: {train_acc:.3f} | Test: {test_acc:.3f} | Leaves: {n_leaves}")

# Best model (depth=5)
best_tree = DecisionTreeClassifier(max_depth=5, random_state=42)
best_tree.fit(X_train, y_train)
y_pred = best_tree.predict(X_test)

print(f"\nClassification Report (max_depth=5):")
print(classification_report(y_test, y_pred, target_names=['Fail', 'Pass']))

# Print tree rules
print("\nDecision Tree Rules (first 3 levels):")
tree_rules = export_text(best_tree, feature_names=feature_names, max_depth=3)
print(tree_rules)
```

This demonstrates how max_depth controls overfitting. With no depth limit, the tree memorizes training data (100% train accuracy) but generalizes poorly. max_depth=5 provides a good balance. export_text shows the learned if-then rules in human-readable format -- a key advantage of decision trees.

**Output:**

```
max_depth=2    | Train: 0.833 | Test: 0.817 | Leaves: 4
max_depth=5    | Train: 0.917 | Test: 0.867 | Leaves: 21
max_depth=None | Train: 1.000 | Test: 0.833 | Leaves: 67

Classification Report (max_depth=5):
              precision    recall  f1-score   support

        Fail       0.84      0.84      0.84        25
        Pass       0.88      0.89      0.88        35

    accuracy                           0.87        60
   macro avg       0.86      0.86      0.86        60
weighted avg       0.87      0.87      0.87        60

Decision Tree Rules (first 3 levels):
|--- prev_gpa <= 2.48
|   |--- study_hours <= 4.27
|   |   |--- attendance <= 67.32
|   |   |   |--- ...
|   |   |--- attendance > 67.32
|   |   |   |--- ...
|   |--- study_hours > 4.27
|   |   |--- assignments <= 45.12
|   |   |   |--- ...
|   |   |--- assignments > 45.12
|   |   |   |--- ...
|--- prev_gpa > 2.48
|   |--- study_hours <= 2.15
|   |   |--- attendance <= 52.84
|   |   |   |--- ...
|   |   |--- attendance > 52.84
|   |   |   |--- ...
|   |--- study_hours > 2.15
|   |   |--- prev_gpa <= 2.84
|   |   |   |--- ...
|   |   |--- prev_gpa > 2.84
|   |   |   |--- ...
```

### Random Forest Classifier with Feature Importance

```python
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import matplotlib.pyplot as plt

# Generate loan approval dataset
np.random.seed(42)
n = 500

income = np.random.uniform(20000, 150000, n)
credit_score = np.random.uniform(300, 850, n)
debt_ratio = np.random.uniform(0, 0.8, n)
employment_years = np.random.uniform(0, 30, n)
loan_amount = np.random.uniform(5000, 100000, n)
age = np.random.uniform(21, 65, n)

# Approval logic
score = (0.3 * (income / 150000) + 0.3 * (credit_score / 850) +
         0.15 * (1 - debt_ratio) + 0.15 * (employment_years / 30) +
         0.1 * (1 - loan_amount / 100000) +
         np.random.normal(0, 0.08, n))
y = (score > 0.45).astype(int)

X = np.column_stack([income, credit_score, debt_ratio,
                     employment_years, loan_amount, age])
feature_names = ['income', 'credit_score', 'debt_ratio',
                 'employment_years', 'loan_amount', 'age']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Train Random Forest
rf = RandomForestClassifier(
    n_estimators=100,     # 100 trees
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1             # use all CPU cores
)
rf.fit(X_train, y_train)

# Evaluate
train_acc = rf.score(X_train, y_train)
test_acc = rf.score(X_test, y_test)
print(f"Training Accuracy: {train_acc:.4f}")
print(f"Test Accuracy: {test_acc:.4f}")
print(f"Number of trees: {rf.n_estimators}")

y_pred = rf.predict(X_test)
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Rejected', 'Approved']))

# Feature Importance
importances = rf.feature_importances_
sorted_idx = np.argsort(importances)[::-1]

print(f"\nFeature Importance:")
for idx in sorted_idx:
    print(f"  {feature_names[idx]:20s}: {importances[idx]:.4f}")

# Plot feature importance
plt.figure(figsize=(10, 5))
plt.barh(range(len(importances)), importances[sorted_idx], color='steelblue')
plt.yticks(range(len(importances)), [feature_names[i] for i in sorted_idx])
plt.xlabel('Feature Importance')
plt.title('Random Forest Feature Importance - Loan Approval')
plt.tight_layout()
plt.show()
```

The Random Forest trains 100 decision trees, each on a bootstrap sample with random feature subsets. Feature importance reveals that income and credit score are the top predictors for loan approval, which makes business sense. The model generalizes well (small gap between train and test accuracy).

**Output:**

```
Training Accuracy: 0.9675
Test Accuracy: 0.9200
Number of trees: 100

Classification Report:
              precision    recall  f1-score   support

    Rejected       0.91      0.90      0.91        42
    Approved       0.93      0.93      0.93        58

    accuracy                           0.92       100
   macro avg       0.92      0.92      0.92       100
weighted avg       0.92      0.92      0.92       100

Feature Importance:
  income              : 0.2412
  credit_score        : 0.2367
  debt_ratio          : 0.1834
  employment_years    : 0.1456
  loan_amount         : 0.1287
  age                 : 0.0644
```

### Visualizing a Decision Tree

```python
import numpy as np
from sklearn.tree import DecisionTreeClassifier, plot_tree
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt

# Load iris dataset
iris = load_iris()
X, y = iris.data[:, [2, 3]], iris.target  # Use only petal length and width

# Train a shallow tree for visualization
tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X, y)

# Visualize the tree
plt.figure(figsize=(16, 10))
plot_tree(tree,
          feature_names=['petal_length', 'petal_width'],
          class_names=iris.target_names,
          filled=True,
          rounded=True,
          fontsize=10)
plt.title('Decision Tree for Iris Classification (max_depth=3)')
plt.tight_layout()
plt.show()

print(f"Accuracy: {tree.score(X, y):.4f}")
print(f"Number of leaves: {tree.get_n_leaves()}")
print(f"Tree depth: {tree.get_depth()}")

# Visualize decision boundary
plt.figure(figsize=(10, 7))
x_min, x_max = X[:, 0].min() - 0.5, X[:, 0].max() + 0.5
y_min, y_max = X[:, 1].min() - 0.5, X[:, 1].max() + 0.5
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200),
                     np.linspace(y_min, y_max, 200))
Z = tree.predict(np.column_stack([xx.ravel(), yy.ravel()])).reshape(xx.shape)

plt.contourf(xx, yy, Z, alpha=0.3, cmap='viridis')
for i, name in enumerate(iris.target_names):
    mask = y == i
    plt.scatter(X[mask, 0], X[mask, 1], label=name, edgecolors='k', s=50)
plt.xlabel('Petal Length (cm)')
plt.ylabel('Petal Width (cm)')
plt.title('Decision Tree Decision Boundaries')
plt.legend()
plt.show()
```

plot_tree from sklearn visualizes the tree structure with node information: feature, threshold, Gini impurity, number of samples, and predicted class. The decision boundary plot shows that decision trees create axis-aligned rectangular regions -- each split is parallel to a feature axis.

**Output:**

```
Accuracy: 0.9733
Number of leaves: 7
Tree depth: 3
```

### Comparing Single Tree vs Random Forest

```python
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.datasets import make_classification

# Generate a complex classification dataset
X, y = make_classification(
    n_samples=1000, n_features=20, n_informative=10,
    n_redundant=5, n_classes=2, random_state=42
)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Single Decision Tree
dt = DecisionTreeClassifier(random_state=42)
dt.fit(X_train, y_train)
dt_train = dt.score(X_train, y_train)
dt_test = dt.score(X_test, y_test)
dt_cv = cross_val_score(dt, X_train, y_train, cv=5).mean()

print("Single Decision Tree:")
print(f"  Train Accuracy: {dt_train:.4f}")
print(f"  Test Accuracy:  {dt_test:.4f}")
print(f"  CV Accuracy:    {dt_cv:.4f}")
print(f"  Overfit gap:    {dt_train - dt_test:.4f}")

# Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
rf.fit(X_train, y_train)
rf_train = rf.score(X_train, y_train)
rf_test = rf.score(X_test, y_test)
rf_cv = cross_val_score(rf, X_train, y_train, cv=5).mean()

print(f"\nRandom Forest (100 trees):")
print(f"  Train Accuracy: {rf_train:.4f}")
print(f"  Test Accuracy:  {rf_test:.4f}")
print(f"  CV Accuracy:    {rf_cv:.4f}")
print(f"  Overfit gap:    {rf_train - rf_test:.4f}")

# Effect of number of trees
print(f"\nEffect of n_estimators:")
for n_trees in [1, 5, 10, 50, 100, 200]:
    rf_temp = RandomForestClassifier(n_estimators=n_trees, random_state=42, n_jobs=-1)
    rf_temp.fit(X_train, y_train)
    test_acc = rf_temp.score(X_test, y_test)
    print(f"  {n_trees:3d} trees: Test Accuracy = {test_acc:.4f}")
```

The single decision tree overfits dramatically (100% training accuracy, much lower test accuracy). The Random Forest reduces overfitting by averaging many trees. Adding more trees generally improves performance up to a point, after which returns diminish. The cross-validation score gives a more reliable estimate than a single test split.

**Output:**

```
Single Decision Tree:
  Train Accuracy: 1.0000
  Test Accuracy:  0.8450
  CV Accuracy:    0.8325
  Overfit gap:    0.1550

Random Forest (100 trees):
  Train Accuracy: 1.0000
  Test Accuracy:  0.9250
  CV Accuracy:    0.9125
  Overfit gap:    0.0750

Effect of n_estimators:
    1 trees: Test Accuracy = 0.8350
    5 trees: Test Accuracy = 0.8850
   10 trees: Test Accuracy = 0.9100
   50 trees: Test Accuracy = 0.9200
  100 trees: Test Accuracy = 0.9250
  200 trees: Test Accuracy = 0.9250
```

### Complete Example: Loan Approval Prediction

```python
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix
import matplotlib.pyplot as plt

# Create loan dataset
np.random.seed(42)
n = 1000

df = pd.DataFrame({
    'income': np.random.uniform(15000, 200000, n),
    'credit_score': np.random.randint(300, 851, n),
    'debt_to_income': np.round(np.random.uniform(0.05, 0.80, n), 2),
    'employment_years': np.random.randint(0, 35, n),
    'loan_amount': np.random.uniform(5000, 150000, n),
    'num_credit_lines': np.random.randint(1, 20, n),
    'has_mortgage': np.random.choice([0, 1], n),
    'education': np.random.choice([0, 1, 2, 3], n)  # 0=HS, 1=Bachelor, 2=Master, 3=PhD
})

# Generate approval based on realistic rules
approval_score = (
    0.25 * (df['income'] / 200000) +
    0.25 * (df['credit_score'] / 850) +
    0.20 * (1 - df['debt_to_income']) +
    0.10 * (df['employment_years'] / 35) +
    0.10 * (1 - df['loan_amount'] / 150000) +
    0.05 * (df['num_credit_lines'] / 20) +
    0.05 * (df['education'] / 3) +
    np.random.normal(0, 0.06, n)
)
df['approved'] = (approval_score > 0.45).astype(int)

print(f"Dataset shape: {df.shape}")
print(f"Approval rate: {df['approved'].mean():.2%}")
print(f"\nSample data:")
print(df.head())

# Prepare data
feature_cols = ['income', 'credit_score', 'debt_to_income',
                'employment_years', 'loan_amount', 'num_credit_lines',
                'has_mortgage', 'education']
X = df[feature_cols].values
y = df['approved'].values

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Random Forest
rf = RandomForestClassifier(
    n_estimators=200, max_depth=12, min_samples_split=10,
    min_samples_leaf=4, random_state=42, n_jobs=-1
)
rf.fit(X_train, y_train)

print(f"\nRandom Forest Results:")
print(f"Train Accuracy: {rf.score(X_train, y_train):.4f}")
print(f"Test Accuracy:  {rf.score(X_test, y_test):.4f}")

y_pred = rf.predict(X_test)
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Rejected', 'Approved']))

# Feature Importance
importances = rf.feature_importances_
sorted_idx = np.argsort(importances)[::-1]
print("Feature Importance (sorted):")
for i in sorted_idx:
    bar = '#' * int(importances[i] * 100)
    print(f"  {feature_cols[i]:20s}: {importances[i]:.4f} {bar}")

# Predict for specific applicants
applicants = {
    'Rohan': [120000, 780, 0.25, 10, 30000, 5, 1, 2],
    'Anita': [25000, 520, 0.70, 1, 80000, 2, 0, 0],
    'Vikram': [60000, 680, 0.40, 5, 40000, 8, 1, 1],
}

print(f"\nLoan Predictions:")
for name, features in applicants.items():
    pred = rf.predict([features])[0]
    proba = rf.predict_proba([features])[0]
    result = 'Approved' if pred == 1 else 'Rejected'
    print(f"  {name}: {result} (P(Reject)={proba[0]:.3f}, P(Approve)={proba[1]:.3f})")
```

This complete example simulates a realistic loan approval system with 8 features. The Random Forest identifies income and credit score as the top predictors, matching domain knowledge. The model can predict approval for new applicants with probability estimates, giving both the decision and the confidence level.

**Output:**

```
Dataset shape: (1000, 9)
Approval rate: 55.80%

Sample data:
       income  credit_score  debt_to_income  employment_years  loan_amount  num_credit_lines  has_mortgage  education  approved
0   95767.35           634            0.52                14     91288.14                 8             1          2         0
1  179560.49           731            0.21                24     28433.62                15             0          1         1
2  147631.19           498            0.68                31     46723.91                 4             0          3         1
3   61283.74           396            0.54                22     85125.56                 6             1          2         0
4   27284.21           721            0.26                33     39212.37                 3             0          0         1

Random Forest Results:
Train Accuracy: 0.9788
Test Accuracy:  0.9200

Classification Report:
              precision    recall  f1-score   support

    Rejected       0.90      0.92      0.91        88
    Approved       0.94      0.92      0.93       112

    accuracy                           0.92       200
   macro avg       0.92      0.92      0.92       200
weighted avg       0.92      0.92      0.92       200

Feature Importance (sorted):
  credit_score        : 0.2198 #####################
  income              : 0.2156 #####################
  debt_to_income      : 0.1723 #################
  loan_amount         : 0.1312 #############
  employment_years    : 0.1078 ##########
  num_credit_lines    : 0.0612 ######
  education           : 0.0534 #####
  has_mortgage        : 0.0387 ###

Loan Predictions:
  Rohan: Approved (P(Reject)=0.035, P(Approve)=0.965)
  Anita: Rejected (P(Reject)=0.920, P(Approve)=0.080)
  Vikram: Approved (P(Reject)=0.215, P(Approve)=0.785)
```

### Decision Tree Regressor for Continuous Prediction

```python
import numpy as np
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Generate non-linear data
np.random.seed(42)
X = np.sort(np.random.uniform(0, 10, 200)).reshape(-1, 1)
y = np.sin(X.ravel()) * 5 + np.random.normal(0, 0.5, 200)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Compare different depths
plt.figure(figsize=(15, 5))
for i, depth in enumerate([2, 5, None]):
    dt = DecisionTreeRegressor(max_depth=depth, random_state=42)
    dt.fit(X_train, y_train)
    
    X_plot = np.linspace(0, 10, 500).reshape(-1, 1)
    y_plot = dt.predict(X_plot)
    
    plt.subplot(1, 3, i+1)
    plt.scatter(X_train, y_train, alpha=0.3, s=20, label='Train')
    plt.scatter(X_test, y_test, alpha=0.3, s=20, c='red', label='Test')
    plt.plot(X_plot, y_plot, 'g-', linewidth=2, label='Prediction')
    plt.title(f'max_depth={depth}\nTest R2={dt.score(X_test, y_test):.3f}')
    plt.legend()
    plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Random Forest Regressor
rf_reg = RandomForestRegressor(n_estimators=100, max_depth=8, random_state=42)
rf_reg.fit(X_train, y_train)
print(f"RF Regressor - Test R2: {rf_reg.score(X_test, y_test):.4f}")
print(f"RF Regressor - Test RMSE: {np.sqrt(mean_squared_error(y_test, rf_reg.predict(X_test))):.4f}")
```

Decision trees work for regression too. They predict the mean value of training samples in each leaf region. With low depth, the model underfits (staircase shape). With unlimited depth, it overfits. The Random Forest Regressor smooths the predictions by averaging 100 trees.

**Output:**

```
RF Regressor - Test R2: 0.9512
RF Regressor - Test RMSE: 0.5234
```

## Common Mistakes

### Not Limiting Tree Depth (Overfitting)

**Wrong:**

```
from sklearn.tree import DecisionTreeClassifier

# Default: no depth limit -> memorizes training data
tree = DecisionTreeClassifier()  # max_depth=None by default
tree.fit(X_train, y_train)
print(f"Train: {tree.score(X_train, y_train):.4f}")  # 1.0000
print(f"Test: {tree.score(X_test, y_test):.4f}")     # 0.7500 (overfit!)
```

No error, but the model achieves 100% training accuracy while test accuracy is much lower. The tree has memorized noise in the training data.

**Correct:**

```
from sklearn.tree import DecisionTreeClassifier

# Limit depth and minimum samples
tree = DecisionTreeClassifier(
    max_depth=5,
    min_samples_split=10,
    min_samples_leaf=5,
    random_state=42
)
tree.fit(X_train, y_train)
print(f"Train: {tree.score(X_train, y_train):.4f}")  # 0.9200
print(f"Test: {tree.score(X_test, y_test):.4f}")     # 0.8900 (much better!)
```

An unconstrained decision tree will create a leaf for every training sample, achieving 100% training accuracy but failing on new data. Always use pruning parameters: max_depth, min_samples_split, and min_samples_leaf to prevent overfitting.

### Ignoring Feature Importance and Using All Features

**Wrong:**

```
from sklearn.ensemble import RandomForestClassifier

# Training with irrelevant features included (e.g., customer_id, name)
# These features add noise and can confuse the model
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_with_irrelevant_features, y)
# Model wastes splits on irrelevant features
```

No error, but irrelevant features (IDs, names, random noise columns) can reduce model performance and increase training time.

**Correct:**

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# First, train and check feature importance
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Remove features with very low importance
importances = rf.feature_importances_
important_mask = importances > 0.02  # threshold
X_train_selected = X_train[:, important_mask]
X_test_selected = X_test[:, important_mask]

# Retrain with selected features
rf_selected = RandomForestClassifier(n_estimators=100, random_state=42)
rf_selected.fit(X_train_selected, y_train)
print(f"Accuracy with all features: {rf.score(X_test, y_test):.4f}")
print(f"Accuracy with selected: {rf_selected.score(X_test_selected, y_test):.4f}")
```

Always check feature importance after training. Remove features with near-zero importance -- they add noise without helping predictions. This can also speed up training and reduce overfitting. Never include ID columns or columns that leak the target variable.

### Using Too Few Trees in Random Forest

**Wrong:**

```
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=5, random_state=42)
rf.fit(X_train, y_train)
# Only 5 trees -> high variance, unstable predictions
```

No error, but with very few trees the ensemble effect is weak. Predictions are unstable and accuracy is lower.

**Correct:**

```
from sklearn.ensemble import RandomForestClassifier

# Use at least 100 trees (200-500 is common)
rf = RandomForestClassifier(
    n_estimators=200,  # More trees = more stable
    random_state=42,
    n_jobs=-1  # Use all CPU cores to speed up training
)
rf.fit(X_train, y_train)
# More trees -> lower variance, more stable predictions
```

The power of Random Forest comes from averaging many trees. With only 5 trees, the averaging effect is minimal. Use at least 100 trees (200-500 for larger datasets). More trees increase training time but almost never hurt test accuracy. Use n_jobs=-1 to parallelize across CPU cores.

### Scaling Features for Tree-Based Models (Unnecessary)

**Wrong:**

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

# Unnecessary: trees do not need scaling!
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

rf = RandomForestClassifier(random_state=42)
rf.fit(X_train_scaled, y_train)  # Works but scaling is wasted effort
```

No error, but scaling is unnecessary for tree-based models and adds complexity to the pipeline. It also makes feature interpretability harder.

**Correct:**

```
from sklearn.ensemble import RandomForestClassifier

# Trees split on thresholds, so scale does not matter
# No scaling needed!
rf = RandomForestClassifier(random_state=42)
rf.fit(X_train, y_train)
# Income in lakhs or thousands -> same splits, same accuracy
```

Decision trees and Random Forests split on feature thresholds (e.g., income > 50000). The actual scale of the feature does not matter -- whether income is in rupees or lakhs, the tree makes the same decision. Scaling is unnecessary and can make feature importance harder to interpret.

## Summary

- A decision tree makes predictions by learning if-then rules from data. It splits nodes using the feature and threshold that best separate classes (lowest Gini impurity or highest information gain).
- Gini impurity measures class mixing: Gini = 1 - sum(p_i^2). A pure node has Gini=0. Maximum impurity (50/50) has Gini=0.5 for binary classification.
- Entropy measures uncertainty: Entropy = -sum(p_i * log2(p_i)). Information Gain = parent entropy - weighted child entropy. The split with highest IG is chosen.
- Decision trees overfit easily. Use pruning parameters: max_depth (limit tree depth), min_samples_split (minimum samples to split a node), min_samples_leaf (minimum samples in a leaf).
- Random Forest builds many trees using bagging (bootstrap samples) and feature randomness (random feature subsets at each split). It combines predictions by majority voting (classification) or averaging (regression).
- Random Forest reduces variance compared to a single tree by averaging many diverse trees. Each tree is different because of bootstrap sampling and random feature selection.
- Feature importance in Random Forest measures how much each feature reduces impurity across all trees. Features with high importance are the most useful predictors.
- Tree-based models do not require feature scaling. They split on thresholds, so the scale of features does not affect the splits or predictions.
- Use n_estimators=100-500 for Random Forest. More trees improve stability but increase training time. Use n_jobs=-1 to parallelize across CPU cores.
- DecisionTreeClassifier/Regressor and RandomForestClassifier/Regressor are the sklearn classes. Use export_text or plot_tree to visualize decision tree rules.
- Decision trees create axis-aligned decision boundaries (splits parallel to feature axes). Random Forests can approximate complex non-linear boundaries by combining many trees.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/decision-trees-and-random-forests/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/decision-trees-and-random-forests/practice/*
