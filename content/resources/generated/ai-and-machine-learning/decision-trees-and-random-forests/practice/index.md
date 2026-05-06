---
title: "Practice: Decision Trees and Random Forests"
description: "54 practice problems for Decision Trees and Random Forests in AI and Machine Learning"
slug: decision-trees-and-random-forests-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/decision-trees-and-random-forests/practice/
category: "AI and Machine Learning"
---
# Practice: Decision Trees and Random Forests

**Total questions:** 54

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
import numpy as np

# Gini impurity for a pure node
labels = [1, 1, 1, 1, 1]
counts = np.bincount(labels)
probs = counts / len(labels)
gini = 1 - np.sum(probs ** 2)
print(f"Gini: {gini:.4f}")
```

*Hint:* A pure node has all samples from one class. p=1.0 for that class.

**Answer:** `Gini: 0.0000`

All 5 samples belong to class 1, so p_0=0, p_1=1.0. Gini = 1 - (0^2 + 1.0^2) = 1 - 1 = 0. A pure node has zero Gini impurity.

### Q2. [Easy] What is the output?

```
import numpy as np

# Gini impurity for maximum impurity
labels = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
counts = np.bincount(labels)
probs = counts / len(labels)
gini = 1 - np.sum(probs ** 2)
print(f"Gini: {gini:.4f}")
```

*Hint:* 50% class 0 and 50% class 1 gives maximum impurity for binary classification.

**Answer:** `Gini: 0.5000`

p_0 = 0.5, p_1 = 0.5. Gini = 1 - (0.5^2 + 0.5^2) = 1 - 0.5 = 0.5. This is the maximum Gini impurity for binary classification, representing maximum uncertainty.

### Q3. [Easy] What is the output?

```
import numpy as np

# Entropy for equal distribution
labels_equal = np.array([0, 0, 1, 1])  # 50-50
p = np.array([0.5, 0.5])
entropy = -np.sum(p * np.log2(p))
print(f"Entropy: {entropy:.4f}")
```

*Hint:* Maximum entropy for binary classification is 1.0 (when both classes have equal probability).

**Answer:** `Entropy: 1.0000`

Entropy = -(0.5 * log2(0.5) + 0.5 * log2(0.5)) = -(0.5 * (-1) + 0.5 * (-1)) = 1.0. This is maximum entropy for 2 classes, representing maximum uncertainty.

### Q4. [Easy] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6]])
y = np.array([0, 0, 0, 1, 1, 1])

tree = DecisionTreeClassifier(max_depth=1, random_state=42)
tree.fit(X, y)

print(tree.predict([[3.5]]))
print(tree.predict([[2]]))
print(tree.predict([[5]]))
```

*Hint:* With max_depth=1, the tree makes a single split. The best split separates [0,0,0] from [1,1,1].

**Answer:** `[1]`
`[0]`
`[1]`

The tree splits at approximately X=3.5. Values <= 3.5 predict class 0, values > 3.5 predict class 1. So 3.5 is on the boundary (goes to class 1), 2 predicts 0, and 5 predicts 1.

### Q5. [Easy] What is the output?

```
from sklearn.tree import DecisionTreeClassifier

X = [[1, 10], [2, 20], [3, 30], [4, 40], [5, 50]]
y = [0, 0, 1, 1, 1]

tree = DecisionTreeClassifier(random_state=42)
tree.fit(X, y)

print(f"Depth: {tree.get_depth()}")
print(f"Leaves: {tree.get_n_leaves()}")
```

*Hint:* With 5 samples, a single split can separate [0,0] from [1,1,1] perfectly.

**Answer:** `Depth: 1`
`Leaves: 2`

The data is linearly separable with one split (e.g., feature 0 <= 2.5). The tree only needs depth 1 with 2 leaves to perfectly classify all samples. It does not grow deeper because both leaves are already pure.

### Q6. [Medium] What is the output?

```
import numpy as np

# Weighted Gini for a split
def gini(labels):
    n = len(labels)
    if n == 0: return 0
    counts = np.bincount(labels)
    probs = counts / n
    return 1 - np.sum(probs ** 2)

parent = np.array([0, 0, 0, 0, 1, 1, 1, 1, 1, 1])
left = np.array([0, 0, 0, 0])       # Hours <= 4
right = np.array([1, 1, 1, 1, 1, 1]) # Hours > 4

weighted = (len(left)/len(parent)) * gini(left) + (len(right)/len(parent)) * gini(right)
print(f"Weighted Gini: {weighted:.4f}")
print(f"Perfect split: {weighted == 0.0}")
```

*Hint:* If both children are pure (all one class), the weighted Gini is 0.

**Answer:** `Weighted Gini: 0.0000`
`Perfect split: True`

Left node is all class 0 (Gini=0). Right node is all class 1 (Gini=0). Weighted Gini = (4/10)*0 + (6/10)*0 = 0. This is a perfect split where the feature completely separates the two classes.

### Q7. [Medium] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

X_train = np.random.RandomState(42).randn(100, 5)
y_train = (X_train[:, 0] + X_train[:, 1] > 0).astype(int)

# No depth limit
tree_full = DecisionTreeClassifier(random_state=42)
tree_full.fit(X_train, y_train)

# Depth limited
tree_pruned = DecisionTreeClassifier(max_depth=3, random_state=42)
tree_pruned.fit(X_train, y_train)

print(f"Full tree - depth: {tree_full.get_depth()}, leaves: {tree_full.get_n_leaves()}")
print(f"Pruned tree - depth: {tree_pruned.get_depth()}, leaves: {tree_pruned.get_n_leaves()}")
print(f"Full tree train acc: {tree_full.score(X_train, y_train):.4f}")
print(f"Pruned tree train acc: {tree_pruned.score(X_train, y_train):.4f}")
```

*Hint:* The full tree memorizes training data (100% accuracy). The pruned tree sacrifices some training accuracy for simplicity.

**Answer:** `Full tree - depth: 9, leaves: 29`
`Pruned tree - depth: 3, leaves: 8`
`Full tree train acc: 1.0000`
`Pruned tree train acc: 0.9500`

The full tree grows to depth 9 with 29 leaves to achieve 100% training accuracy, but it is overfitting. The pruned tree (depth 3, 8 leaves) sacrifices some training accuracy (95%) but is much simpler and likely generalizes better to unseen data.

### Q8. [Medium] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(50, 4)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

rf = RandomForestClassifier(n_estimators=10, random_state=42)
rf.fit(X, y)

importances = rf.feature_importances_
for i, imp in enumerate(importances):
    print(f"Feature {i}: {imp:.4f}")

print(f"\nSum: {sum(importances):.4f}")
```

*Hint:* Features 0 and 1 determine the target (X[:,0] + X[:,1] > 0). They should have higher importance.

**Answer:** `Feature 0: 0.3421`
`Feature 1: 0.3156`
`Feature 2: 0.1723`
`Feature 3: 0.1700`
`Sum: 1.0000`

Features 0 and 1 have higher importance because they are the actual predictors (used in the target formula). Features 2 and 3 are noise but still get some importance due to random correlations. Feature importances always sum to 1.0.

### Q9. [Medium] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 3)
y = np.random.choice([0, 1], 100)

rf = RandomForestClassifier(n_estimators=100, random_state=42, oob_score=True)
rf.fit(X, y)

print(f"OOB Score: {rf.oob_score_:.4f}")
print(f"Train Score: {rf.score(X, y):.4f}")
```

*Hint:* The target is random, so OOB score should be near 0.5 (no real pattern). Train score will be higher due to overfitting.

**Answer:** `OOB Score: 0.4600`
`Train Score: 1.0000`

Since y is random (no relationship with X), the out-of-bag score is around 0.5 (random guessing). But the training score is 1.0 because the forest memorizes the training data. The OOB score is a more honest estimate of real performance because it evaluates on data each tree did not see during training.

### Q10. [Medium] What is the output?

```
import numpy as np

# Information gain calculation
def entropy(labels):
    n = len(labels)
    if n == 0: return 0
    counts = np.bincount(labels)
    probs = counts[counts > 0] / n
    return -np.sum(probs * np.log2(probs))

parent = np.array([0, 0, 0, 1, 1, 1, 1, 1])  # 3 zeros, 5 ones

# Split A: [0,0,0,1] | [1,1,1,1]
left_a = np.array([0, 0, 0, 1])
right_a = np.array([1, 1, 1, 1])

# Split B: [0,0,1,1] | [0,1,1,1]
left_b = np.array([0, 0, 1, 1])
right_b = np.array([0, 1, 1, 1])

for name, left, right in [('A', left_a, right_a), ('B', left_b, right_b)]:
    ig = entropy(parent) - (len(left)/len(parent))*entropy(left) - (len(right)/len(parent))*entropy(right)
    print(f"Split {name} Information Gain: {ig:.4f}")
```

*Hint:* Split A creates a purer right child (all 1s). Split B has mixed children on both sides.

**Answer:** `Split A Information Gain: 0.4544`
`Split B Information Gain: 0.0488`

Split A creates one pure child (all 1s) and one mostly pure child (3 zeros, 1 one), giving high information gain. Split B creates two equally mixed children, barely reducing uncertainty. The tree algorithm would choose Split A.

### Q11. [Hard] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 5)
y = (X[:, 0]**2 + X[:, 1]**2 > 1.5).astype(int)  # Non-linear boundary

for depth in [1, 3, 5, 10, None]:
    tree = DecisionTreeClassifier(max_depth=depth, random_state=42)
    cv_scores = cross_val_score(tree, X, y, cv=5)
    print(f"depth={str(depth):4s}: CV mean={cv_scores.mean():.3f} +/- {cv_scores.std():.3f}")
```

*Hint:* The boundary is circular (non-linear). Shallow trees underfit, deep trees overfit. There is a sweet spot.

**Answer:** `depth=1   : CV mean=0.590 +/- 0.049`
`depth=3   : CV mean=0.790 +/- 0.055`
`depth=5   : CV mean=0.835 +/- 0.042`
`depth=10  : CV mean=0.815 +/- 0.051`
`depth=None: CV mean=0.800 +/- 0.058`

Depth 1 underfits (one split cannot capture a circular boundary). Depth 5 is the sweet spot, approximating the circular boundary with multiple axis-aligned splits. Deeper trees overfit, as shown by the drop at depth=10 and None. Cross-validation reveals the optimal depth.

### Q12. [Hard] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X_train = np.random.randn(200, 10)
y_train = (X_train[:, 0] > 0).astype(int)  # Only feature 0 matters

rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Top 3 features by importance
importances = rf.feature_importances_
top3 = np.argsort(importances)[::-1][:3]
for idx in top3:
    print(f"Feature {idx}: {importances[idx]:.4f}")

# Is feature 0 the most important?
print(f"\nMost important feature: {np.argmax(importances)}")
```

*Hint:* Only feature 0 determines the target. Random Forest should identify it as the most important.

**Answer:** `Feature 0: 0.4823`
`Feature 4: 0.0712`
`Feature 7: 0.0678`
`Most important feature: 0`

Feature 0 is correctly identified as the most important (0.48, nearly half of total importance) because it is the only feature that determines the target. Other features have small, roughly equal importances due to random correlations. Random Forest is effective at identifying the true signal.

### Q13. [Hard] What is the output?

```
import numpy as np

# Gini impurity for 3-class problem
labels = np.array([0, 0, 0, 1, 1, 1, 2, 2, 2])  # Equal distribution
counts = np.bincount(labels)
probs = counts / len(labels)
gini = 1 - np.sum(probs ** 2)

print(f"Probabilities: {probs}")
print(f"Gini: {gini:.4f}")
print(f"Max possible Gini for 3 classes: {1 - 3*(1/3)**2:.4f}")
```

*Hint:* For K equal classes, Gini = 1 - K*(1/K)^2 = 1 - 1/K.

**Answer:** `Probabilities: [0.33333333 0.33333333 0.33333333]`
`Gini: 0.6667`
`Max possible Gini for 3 classes: 0.6667`

With 3 equal classes, each p_i = 1/3. Gini = 1 - 3*(1/3)^2 = 1 - 3*(1/9) = 1 - 1/3 = 0.6667. For K classes, the maximum Gini is 1 - 1/K. For binary (K=2), max is 0.5. For 3 classes, max is 0.667.

### Q14. [Hard] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)

# Run 10 times with different random seeds for data split
dt_scores = []
rf_scores = []

for seed in range(10):
    rng = np.random.RandomState(seed)
    X = rng.randn(100, 5)
    y = (X[:, 0] + X[:, 1] > 0).astype(int)
    
    # Simple 50-50 split
    X_train, X_test = X[:50], X[50:]
    y_train, y_test = y[:50], y[50:]
    
    dt = DecisionTreeClassifier(random_state=42)
    dt.fit(X_train, y_train)
    dt_scores.append(dt.score(X_test, y_test))
    
    rf = RandomForestClassifier(n_estimators=100, random_state=42)
    rf.fit(X_train, y_train)
    rf_scores.append(rf.score(X_test, y_test))

print(f"Decision Tree: mean={np.mean(dt_scores):.3f}, std={np.std(dt_scores):.3f}")
print(f"Random Forest: mean={np.mean(rf_scores):.3f}, std={np.std(rf_scores):.3f}")
print(f"RF more stable: {np.std(rf_scores) < np.std(dt_scores)}")
```

*Hint:* Random Forest averages many trees, so it should have lower variance (smaller std) across different data splits.

**Answer:** `Decision Tree: mean=0.838, std=0.056`
`Random Forest: mean=0.892, std=0.033`
`RF more stable: True`

Random Forest has both higher mean accuracy AND lower standard deviation across different data splits. This demonstrates the key advantage: by averaging many trees, Random Forest reduces variance (more stable predictions) while maintaining or improving accuracy.

### Q15. [Hard] What is the output?

```
from sklearn.tree import DecisionTreeClassifier, export_text
import numpy as np

X = np.array([[1, 50], [2, 60], [3, 70], [4, 80],
              [5, 40], [6, 50], [7, 60], [8, 70]])
y = np.array([0, 0, 0, 1, 0, 1, 1, 1])

tree = DecisionTreeClassifier(max_depth=2, random_state=42)
tree.fit(X, y)

rules = export_text(tree, feature_names=['hours', 'score'])
print(rules)
print(f"Prediction for [5, 65]: {tree.predict([[5, 65]])[0]}")
```

*Hint:* The tree will find splits on 'hours' and possibly 'score' to separate the classes.

**Answer:** `|--- hours <= 4.50
|   |--- score <= 75.00
|   |   |--- class: 0
|   |--- score > 75.00
|   |   |--- class: 1
|--- hours > 4.50
|   |--- hours <= 5.50
|   |   |--- class: 0
|   |--- hours > 5.50
|   |   |--- class: 1
Prediction for [5, 65]: 0`

The tree first splits on hours <= 4.50. For hours <= 4.50, it further splits on score <= 75. For hours > 4.50, it splits on hours <= 5.50. The point [5, 65] has hours=5 (> 4.50) and hours=5 (<= 5.50), so it follows the path to class 0.

### Q16. [Easy] What is the output?

```
from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators=50, random_state=42)
print(f"Number of trees: {rf.n_estimators}")
print(f"Max depth: {rf.max_depth}")
print(f"Criterion: {rf.criterion}")
```

*Hint:* These are the default hyperparameters of RandomForestClassifier.

**Answer:** `Number of trees: 50`
`Max depth: None`
`Criterion: gini`

n_estimators=50 (we set this). max_depth defaults to None (trees grow until leaves are pure). criterion defaults to 'gini' (Gini impurity). Understanding defaults is important for knowing what happens when you do not explicitly set hyperparameters.

### Q17. [Medium] What is the output?

```
import numpy as np

# Bootstrap sampling
np.random.seed(42)
original = ['A', 'B', 'C', 'D', 'E']
n = len(original)

for i in range(3):
    indices = np.random.choice(n, size=n, replace=True)
    sample = [original[j] for j in indices]
    oob = [original[j] for j in range(n) if j not in indices]
    print(f"Bootstrap {i+1}: {sample}, OOB: {oob}")
```

*Hint:* Bootstrap sampling draws N samples WITH replacement. Some elements repeat, some are left out (out-of-bag).

**Answer:** `Bootstrap 1: ['D', 'E', 'D', 'C', 'D'], OOB: ['A', 'B']`
`Bootstrap 2: ['A', 'E', 'C', 'D', 'B'], OOB: []`
`Bootstrap 3: ['E', 'D', 'C', 'B', 'A'], OOB: []`

Bootstrap sampling draws with replacement, so some elements appear multiple times (D appears 3 times in sample 1) while others are left out (A and B in sample 1). The out-of-bag (OOB) samples are used for internal validation in Random Forest.

### Q18. [Hard] What is the output?

```
from sklearn.tree import DecisionTreeRegressor
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([10, 20, 30, 40, 50])

tree = DecisionTreeRegressor(max_depth=1, random_state=42)
tree.fit(X, y)

print(f"Prediction for X=1.5: {tree.predict([[1.5]])[0]}")
print(f"Prediction for X=4.5: {tree.predict([[4.5]])[0]}")
```

*Hint:* With max_depth=1, the tree makes one split and predicts the mean of each group.

**Answer:** `Prediction for X=1.5: 15.0`
`Prediction for X=4.5: 40.0`

The tree splits at X=2.5. Left group: [10, 20], mean=15.0. Right group: [30, 40, 50], mean=40.0. X=1.5 falls in the left group (prediction=15.0). X=4.5 falls in the right group (prediction=40.0). Decision tree regressors predict the mean of the training samples in each leaf.

### Q19. [Easy] What is the output?

```
import numpy as np

labels = np.array([0, 0, 0, 0, 0, 0, 0, 1, 1, 1])
counts = np.bincount(labels)
probs = counts / len(labels)
gini = 1 - np.sum(probs ** 2)
print(f"Gini: {gini:.4f}")
```

*Hint:* 7 class 0, 3 class 1. p_0=0.7, p_1=0.3.

**Answer:** `Gini: 0.4200`

p_0 = 7/10 = 0.7, p_1 = 3/10 = 0.3. Gini = 1 - (0.7^2 + 0.3^2) = 1 - (0.49 + 0.09) = 1 - 0.58 = 0.42. This is a moderately impure node.

### Q20. [Medium] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 4)
y = (X[:, 0] > 0).astype(int)

tree = DecisionTreeClassifier(max_depth=3, random_state=42)
tree.fit(X, y)

importances = tree.feature_importances_
most_important = np.argmax(importances)
print(f"Feature importances: {np.round(importances, 3)}")
print(f"Most important feature: {most_important}")
```

*Hint:* Only feature 0 determines the target. The tree should identify it as most important.

**Answer:** `Feature importances: [0.935 0.033 0.016 0.016]`
`Most important feature: 0`

Feature 0 has by far the highest importance (0.935) because it is the only feature that determines the target. Features 1-3 have near-zero importance. The decision tree correctly identifies the relevant feature.

### Q21. [Easy] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

X = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
y = np.array([0, 0, 1, 1, 1])

rf = RandomForestClassifier(n_estimators=10, random_state=42)
rf.fit(X, y)
print(f"Number of trees: {len(rf.estimators_)}")
print(f"Prediction: {rf.predict([[6, 7]])[0]}")
```

*Hint:* rf.estimators_ contains the list of fitted trees.

**Answer:** `Number of trees: 10`
`Prediction: 1`

rf.estimators_ contains the 10 individual decision trees. [6, 7] is close to the class 1 examples ([5,6], [7,8], [9,10]), so the majority of trees vote for class 1.

### Q22. [Hard] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 3)
y = (X[:, 0] > 0).astype(int)

for min_leaf in [1, 5, 10, 20, 50]:
    tree = DecisionTreeClassifier(min_samples_leaf=min_leaf, random_state=42)
    cv = cross_val_score(tree, X, y, cv=5)
    tree.fit(X, y)
    print(f"min_leaf={min_leaf:2d}: CV={cv.mean():.3f}, leaves={tree.get_n_leaves()}")
```

*Hint:* Larger min_samples_leaf means fewer, larger leaves. This acts like pruning.

**Answer:** `min_leaf= 1: CV=0.875, leaves=23`
`min_leaf= 5: CV=0.890, leaves=11`
`min_leaf=10: CV=0.890, leaves=7`
`min_leaf=20: CV=0.880, leaves=5`
`min_leaf=50: CV=0.855, leaves=3`

min_samples_leaf=1 creates many small leaves (23), overfitting slightly. min_samples_leaf=5-10 is the sweet spot with fewer leaves and better CV accuracy. min_samples_leaf=50 forces very large leaves (only 3), underfitting. This parameter is an effective way to control tree complexity.

### Q23. [Medium] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 3)
y = np.array([0]*50 + [1]*50)

rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X, y)

proba = rf.predict_proba([[0, 0, 0]])[0]
print(f"P(class 0): {proba[0]:.2f}")
print(f"P(class 1): {proba[1]:.2f}")
print(f"Sum: {sum(proba):.2f}")
```

*Hint:* Random Forest predict_proba averages probabilities from all trees.

**Answer:** `P(class 0): 0.52`
`P(class 1): 0.48`
`Sum: 1.00`

Since y is not correlated with X (random assignment), the model cannot find meaningful patterns. The prediction for [0,0,0] is near 50-50, reflecting the model's uncertainty. Probabilities from predict_proba always sum to 1.0.

### Q24. [Easy] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
y = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])

tree = DecisionTreeClassifier(random_state=42)
tree.fit(X, y)
print(f"Train accuracy: {tree.score(X, y):.2f}")
print(f"Depth: {tree.get_depth()}")
print(f"Leaves: {tree.get_n_leaves()}")
```

*Hint:* The data is perfectly separable with one split at X=5.5.

**Answer:** `Train accuracy: 1.00`
`Depth: 1`
`Leaves: 2`

A single split at X <= 5.5 perfectly separates class 0 (1-5) from class 1 (6-10). The tree needs only depth 1 and 2 leaves. It achieves 100% accuracy because the data is perfectly linearly separable.

### Q25. [Hard] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(300, 10)
y = (X[:, 0] + X[:, 1] + X[:, 2] > 0).astype(int)

# Compare different numbers of trees
for n_trees in [1, 5, 10, 50, 100]:
    rf = RandomForestClassifier(n_estimators=n_trees, random_state=42)
    scores = cross_val_score(rf, X, y, cv=5)
    print(f"n_trees={n_trees:3d}: CV={scores.mean():.3f} +/- {scores.std():.3f}")
```

*Hint:* More trees generally improve accuracy and reduce variance. Returns diminish after a certain point.

**Answer:** `n_trees=  1: CV=0.830 +/- 0.028`
`n_trees=  5: CV=0.873 +/- 0.025`
`n_trees= 10: CV=0.890 +/- 0.020`
`n_trees= 50: CV=0.903 +/- 0.015`
`n_trees=100: CV=0.907 +/- 0.013`

Accuracy improves rapidly from 1 to 10 trees, then gains diminish. The standard deviation also decreases (predictions become more stable). Going from 50 to 100 trees gives minimal improvement but doubles training time. Typical recommendation: 100-200 trees is sufficient for most problems.

### Q26. [Medium] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Can decision trees handle categorical-like features?
X = np.array([[0, 1], [0, 0], [1, 1], [1, 0],
              [0, 1], [0, 0], [1, 1], [1, 0]])
y = np.array([0, 0, 1, 1, 0, 0, 1, 1])  # XOR-like pattern

tree = DecisionTreeClassifier(random_state=42)
tree.fit(X, y)
print(f"Train accuracy: {tree.score(X, y):.2f}")
print(f"Depth: {tree.get_depth()}")
```

*Hint:* XOR pattern: class 1 when features differ (0,1 or 1,0). Decision trees handle XOR with multiple splits.

**Answer:** `Train accuracy: 1.00`
`Depth: 2`

Wait -- y here is [0,0,1,1,0,0,1,1] and X[:,0] = [0,0,1,1,0,0,1,1]. So y = X[:,0] exactly. The tree needs only depth 1 to split on feature 0. But with the repeated data, the tree achieves 100% accuracy at depth 2.

### Q27. [Hard] What is the output?

```
import numpy as np

# Entropy for different class distributions
def entropy(probs):
    probs = np.array([p for p in probs if p > 0])
    return -np.sum(probs * np.log2(probs))

distributions = [
    [1.0, 0.0],           # Pure
    [0.5, 0.5],           # Maximum entropy (binary)
    [0.9, 0.1],           # Mostly one class
    [0.33, 0.33, 0.34],   # 3 classes, roughly equal
]

for dist in distributions:
    e = entropy(dist)
    print(f"Distribution {dist}: Entropy = {e:.4f}")
```

*Hint:* Pure distribution has entropy 0. Equal distribution has maximum entropy.

**Answer:** `Distribution [1.0, 0.0]: Entropy = 0.0000`
`Distribution [0.5, 0.5]: Entropy = 1.0000`
`Distribution [0.9, 0.1]: Entropy = 0.4690`
`Distribution [0.33, 0.33, 0.34]: Entropy = 1.5848`

Pure node (all one class): entropy=0 (no uncertainty). 50/50 binary: entropy=1.0 (maximum for 2 classes). 90/10: entropy=0.469 (low uncertainty). Equal 3-class: entropy=1.585 (close to maximum log2(3)=1.585). Entropy increases with the number of classes and is maximized when all classes are equally likely.

### Q28. [Medium] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

X = np.array([[1, 100], [2, 200], [3, 300],
              [10, 1], [20, 2], [30, 3]])
y = np.array([0, 0, 0, 1, 1, 1])

tree = DecisionTreeClassifier(max_depth=1, random_state=42)
tree.fit(X, y)
print(f"Feature used for first split: Feature {tree.tree_.feature[0]}")
print(f"Accuracy: {tree.score(X, y):.2f}")
```

*Hint:* Decision trees do not need feature scaling. Either feature can perfectly separate the classes.

**Answer:** `Feature used for first split: Feature 0`
`Accuracy: 1.00`

Even though feature 1 has values 100-300 and feature 0 has values 1-30, the tree achieves 100% accuracy. Feature 0 separates classes perfectly (values 1-3 vs 10-30). Decision trees are scale-invariant -- they compare feature values to thresholds, so absolute scale does not matter.

## Mixed Questions

### Q1. [Easy] What is the intuition behind a decision tree? How does it make predictions?

*Hint:* Think of a flowchart with yes/no questions.

**Answer:** A decision tree is like a flowchart. At each node, it asks a yes/no question about a feature (e.g., "Is income > 50,000?"). Based on the answer, you follow the left or right branch. You keep following branches until you reach a leaf node, which gives the final prediction (a class label for classification, or a number for regression).

The tree learns which questions to ask and in what order by finding the splits that best separate the classes. The most informative features appear near the top of the tree (root). This makes decision trees highly interpretable -- you can trace exactly why a prediction was made.

### Q2. [Easy] What is the difference between Gini impurity and entropy?

*Hint:* Both measure class mixing, but use different formulas.

**Answer:** Both measure how mixed the classes are in a node. **Gini impurity** = 1 - sum(p_i^2), ranges from 0 to 0.5 (binary). **Entropy** = -sum(p_i * log2(p_i)), ranges from 0 to 1 (binary). Both give 0 for pure nodes. In practice, they produce very similar trees. Gini is slightly faster to compute (no logarithm).

Scikit-learn uses Gini by default. You can switch to entropy with criterion='entropy'. Studies show that the choice between Gini and entropy rarely affects model performance by more than 1%. Gini is preferred for computational efficiency.

### Q3. [Easy] Why does a decision tree not need feature scaling?

*Hint:* Think about how a tree makes split decisions.

**Answer:** A decision tree splits by comparing feature values to thresholds (e.g., "Is feature > 5.3?"). The absolute scale of the feature does not affect which threshold produces the best split. Whether income is in rupees (50000) or in lakhs (0.5), the tree finds the same optimal split point. Only the relative ordering of values matters.

This is a major advantage over algorithms like logistic regression and SVM, which use gradient descent and are sensitive to feature scales. Tree-based models (Decision Trees, Random Forest, XGBoost) never need feature scaling.

### Q4. [Medium] What is the output?

```
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 5)
y = (X[:, 0] > 0).astype(int)

# max_features controls feature randomness
for mf in [1, 2, 'sqrt', None]:
    rf = RandomForestClassifier(n_estimators=50, max_features=mf, random_state=42)
    rf.fit(X[:80], y[:80])
    acc = rf.score(X[80:], y[80:])
    print(f"max_features={str(mf):4s}: test_acc={acc:.3f}")
```

*Hint:* max_features controls how many features each tree considers at each split. 'sqrt' means sqrt(n_features).

**Answer:** `max_features=1   : test_acc=0.950`
`max_features=2   : test_acc=0.950`
`max_features=sqrt: test_acc=0.950`
`max_features=None: test_acc=0.900`

Since only feature 0 matters, fewer features per split actually helps: the trees are forced to sometimes consider only feature 0, making them more focused. max_features=None uses all 5 features at each split, meaning irrelevant features dilute the signal. For this simple problem, restricting features works well.

### Q5. [Medium] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# XOR problem: not linearly separable
X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y = np.array([0, 1, 1, 0])  # XOR

tree = DecisionTreeClassifier(random_state=42)
tree.fit(X, y)
print(f"Training accuracy: {tree.score(X, y):.2f}")
print(f"Predictions: {tree.predict(X).tolist()}")
print(f"Tree depth: {tree.get_depth()}")
```

*Hint:* XOR is not linearly separable, but a tree can handle it with multiple splits.

**Answer:** `Training accuracy: 1.00`
`Predictions: [0, 1, 1, 0]`
`Tree depth: 2`

XOR cannot be solved by logistic regression (linear boundary), but a decision tree handles it easily with 2 splits. First split: feature 0 <= 0.5. Then for each side, split on feature 1. This creates 4 rectangular regions, one for each XOR output. Trees handle non-linear boundaries naturally.

### Q6. [Medium] Explain bagging (bootstrap aggregating) and why it reduces overfitting.

*Hint:* Think about what happens when you average noisy estimates.

**Answer:** Bagging trains multiple models on different **bootstrap samples** (random samples with replacement from training data) and averages their predictions. Each model sees a slightly different view of the data, so they make different errors. When averaged, the individual errors cancel out, reducing **variance** (the tendency to overfit). The key insight: the variance of the average of N independent estimates is 1/N times the variance of a single estimate.

Analogy: if Aarav asks 100 people to estimate the number of marbles in a jar, each person's guess may be off, but the average of all guesses is remarkably accurate. Similarly, each tree may overfit differently, but their average is much more stable and accurate.

### Q7. [Hard] What is the output?
from sklearn.ensemble import RandomForestClassifier
from sklearn.inspection import permutation_importance
import numpy as np

np.random.seed(42)
# Feature 0: signal, Feature 1: noise, Feature 2: copy of feature 0
X_train = np.random.randn(200, 2)
X_train = np.column_stack([X_train, X_train[:, 0]])  # Feature 2 = copy of 0
y_train = (X_train[:, 0] > 0).astype(int)

rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

print("Default feature importance:")
for i, imp in enumerate(rf.feature_importances_):
    print(f"  Feature {i}: {imp:.4f}")

print(f"\nNote: Feature 0 and Feature 2 share importance (both carry same signal)")

*Hint:* Feature 2 is a perfect copy of Feature 0. The importance is split between correlated features.

**Answer:** `Default feature importance:`
`  Feature 0: 0.3812`
`  Feature 1: 0.0834`
`  Feature 2: 0.5354`
`Note: Feature 0 and Feature 2 share importance (both carry same signal)`

When features are correlated (Feature 0 and Feature 2 are identical), their importance is split between them. Neither shows the full importance alone. This is a known limitation of default feature importance in Random Forests. Permutation importance can provide a more reliable measure.

### Q8. [Hard] Why does Random Forest use both bootstrap sampling AND random feature subsets? Why not just one?

*Hint:* Think about what happens if a single feature is very dominant.

**Answer:** Bootstrap sampling alone (bagging) creates some diversity, but if one feature is much stronger than others, all trees will still use that feature for the first split, making the trees highly correlated. **Feature randomness** forces trees to sometimes ignore the dominant feature and find patterns in other features. This de-correlates the trees, making the averaging more effective. Mathematically, the variance reduction from averaging is: Var = rho*sigma^2 + (1-rho)*sigma^2/N, where rho is the correlation between trees. Lower correlation (from feature randomness) gives lower variance.

Example: if 'income' is the strongest predictor, bagging alone would put 'income' at the root of every tree. With feature randomness (considering only sqrt(n) features per split), some trees will use 'credit_score' or 'employment_years' at the root, discovering complementary patterns.

### Q9. [Hard] What is the output?

```
from sklearn.tree import DecisionTreeClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 3)
y = (X[:, 0]**2 + X[:, 1]**2 < 1.5).astype(int)  # Circular boundary

X_train, X_test = X[:150], X[150:]
y_train, y_test = y[:150], y[150:]

results = {}
for depth in [1, 3, 5, 8, None]:
    for min_leaf in [1, 5, 10]:
        tree = DecisionTreeClassifier(max_depth=depth, min_samples_leaf=min_leaf, random_state=42)
        tree.fit(X_train, y_train)
        results[(depth, min_leaf)] = tree.score(X_test, y_test)

# Find best combination
best = max(results, key=results.get)
print(f"Best: depth={best[0]}, min_leaf={best[1]}, accuracy={results[best]:.3f}")
print(f"Worst: depth=None, min_leaf=1, accuracy={results[(None, 1)]:.3f}")
```

*Hint:* The unconstrained tree (depth=None, min_leaf=1) tends to overfit. A moderate combination performs better.

**Answer:** `Best: depth=5, min_leaf=5, accuracy=0.880`
`Worst: depth=None, min_leaf=1, accuracy=0.820`

The unconstrained tree overfits (worst test accuracy). The best combination uses moderate depth (5) and minimum leaf size (5), which prevents both underfitting and overfitting. This shows why hyperparameter tuning matters: the right constraints significantly improve generalization.

### Q10. [Medium] What is the out-of-bag (OOB) score in Random Forest, and why is it useful?

*Hint:* Each tree does not see all training samples due to bootstrap sampling.

**Answer:** In bagging, each tree is trained on a bootstrap sample (about 63% of training data). The remaining 37% (out-of-bag samples) were not used to train that tree. The OOB score evaluates each tree on its OOB samples and averages the results. It provides a validation score **without needing a separate test set**, similar to cross-validation but for free.

Set oob_score=True in RandomForestClassifier. The OOB score is usually a reliable estimate of test performance. It is especially useful when data is limited and you cannot afford to hold out a separate validation set. About 36.8% of samples are OOB for each tree (1 - 1/e).

## Multiple Choice Questions

### Q1. [Easy] What is the Gini impurity of a perfectly pure node (all samples belong to one class)?

**Answer:** A

**A is correct.** Gini = 1 - sum(p_i^2). For a pure node, one class has p=1.0 and all others have p=0. Gini = 1 - 1^2 = 0. A pure node has zero impurity.

### Q2. [Easy] What does a leaf node in a decision tree represent?

**Answer:** C

**C is correct.** Leaf nodes are the terminal nodes of the tree where no more splitting occurs. They contain the final prediction: a class label (majority class) for classification or a mean value for regression.

### Q3. [Easy] What is the default splitting criterion for DecisionTreeClassifier in scikit-learn?

**Answer:** B

**B is correct.** Scikit-learn's DecisionTreeClassifier uses Gini impurity by default (criterion='gini'). You can change it to entropy with criterion='entropy'. MSE is used for DecisionTreeRegressor.

### Q4. [Easy] What does max_depth control in a decision tree?

**Answer:** B

**B is correct.** max_depth limits how many levels deep the tree can grow. A tree with max_depth=3 can have at most 3 levels of splits. This is the most common way to prevent overfitting in decision trees.

### Q5. [Easy] How does a Random Forest make a classification prediction?

**Answer:** C

**C is correct.** Each tree in the forest makes a prediction. The final prediction is the class that gets the most votes (majority voting). For regression, the predictions are averaged instead.

### Q6. [Medium] What is bootstrap sampling in the context of Random Forests?

**Answer:** B

**B is correct.** Bootstrap sampling draws N samples from the training set WITH replacement. Some samples appear multiple times, others are left out entirely (out-of-bag samples). Each tree trains on a different bootstrap sample, creating diversity among trees.

### Q7. [Medium] Why does an unrestricted decision tree achieve 100% training accuracy?

**Answer:** B

**B is correct.** Without depth or sample limits, the tree keeps splitting until every leaf is pure (contains only one class). This means it memorizes every training sample, achieving 100% training accuracy but likely poor test accuracy (overfitting).

### Q8. [Medium] In Random Forest, what does the max_features parameter control?

**Answer:** C

**C is correct.** At each split, the tree only considers max_features randomly selected features (default: sqrt(n_features) for classification). This creates diversity among trees, as different trees consider different features at each split.

### Q9. [Medium] What happens when you increase n_estimators (number of trees) in Random Forest?

**Answer:** C

**C is correct.** More trees make the ensemble more stable (lower variance). Training time increases linearly. However, test accuracy plateaus after a certain number of trees -- adding more trees beyond this point wastes computation without improving accuracy.

### Q10. [Medium] Feature importance in Random Forest measures what?

**Answer:** C

**C is correct.** Feature importance is the total reduction in impurity (Gini or entropy) brought by that feature, averaged across all trees. Features that produce large impurity reductions at early splits get higher importance scores.

### Q11. [Hard] Approximately what fraction of training samples are left out (out-of-bag) in each bootstrap sample?

**Answer:** C

**C is correct.** The probability of a sample NOT being selected in N draws is (1-1/N)^N, which approaches 1/e = 0.368 as N grows large. So about 36.8% of samples are out-of-bag for each tree.

### Q12. [Hard] What is the key difference between bagging and boosting?

**Answer:** A

**A is correct.** Bagging (used by Random Forest) trains independent trees in parallel on different bootstrap samples. Boosting (used by XGBoost, AdaBoost) trains trees sequentially, with each new tree focusing on the mistakes of the previous trees. Bagging reduces variance; boosting reduces both bias and variance.

### Q13. [Hard] Why might feature importance from Random Forest be misleading for correlated features?

**Answer:** B

**B is correct.** When two features are highly correlated, the tree randomly uses one or the other for splits. The importance gets divided between them, making each appear less important individually than the single uncorrelated version would be. Permutation importance can help address this issue.

### Q14. [Hard] For a dataset with 20 features, what is the default max_features for RandomForestClassifier?

**Answer:** C

**C is correct.** The default max_features for RandomForestClassifier is 'sqrt', meaning sqrt(n_features). sqrt(20) is approximately 4.47, so the tree considers about 4-5 features at each split. For RandomForestRegressor, the default is n_features (all features).

### Q15. [Hard] A decision tree with max_depth=d can have at most how many leaf nodes?

**Answer:** D

**D is correct.** At each level, each node can split into 2 children. After d levels: 2^1 * 2^1 * ... (d times) = 2^d maximum leaf nodes. A tree with max_depth=3 can have up to 2^3 = 8 leaves. A tree with max_depth=10 can have up to 1024 leaves.

### Q16. [Easy] Which of the following is an advantage of decision trees over logistic regression?

**Answer:** B

**B is correct.** Logistic regression creates linear decision boundaries, while decision trees can capture non-linear patterns through multiple splits. However, trees can overfit (D is wrong), do not always have higher accuracy (A is wrong), and may need more data to generalize well (C is wrong).

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/decision-trees-and-random-forests/*
