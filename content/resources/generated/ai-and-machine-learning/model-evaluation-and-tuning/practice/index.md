---
title: "Practice: Model Evaluation, Cross-Validation, and Hyperparameter Tuning"
description: "52 practice problems for Model Evaluation, Cross-Validation, and Hyperparameter Tuning in AI and Machine Learning"
slug: model-evaluation-and-tuning-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/model-evaluation-and-tuning/practice/
category: "AI and Machine Learning"
---
# Practice: Model Evaluation, Cross-Validation, and Hyperparameter Tuning

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
TP = 50
FP = 10
FN = 5
TN = 100

accuracy = (TP + TN) / (TP + TN + FP + FN)
precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(f"Accuracy: {accuracy:.3f}")
print(f"Precision: {precision:.3f}")
print(f"Recall: {recall:.3f}")
```

*Hint:* Plug the values into the formulas.

**Answer:** `Accuracy: 0.909`
`Precision: 0.833`
`Recall: 0.909`

Accuracy = (50+100)/(50+100+10+5) = 150/165 = 0.909. Precision = 50/(50+10) = 50/60 = 0.833. Recall = 50/(50+5) = 50/55 = 0.909. The model catches 91% of positives (high recall) but 17% of positive predictions are wrong (precision 83%).

### Q2. [Easy] What is the output?

```
precision = 0.9
recall = 0.6
f1 = 2 * precision * recall / (precision + recall)
print(f"F1: {f1:.3f}")
```

*Hint:* F1 is the harmonic mean of precision and recall.

**Answer:** `F1: 0.720`

F1 = 2 * 0.9 * 0.6 / (0.9 + 0.6) = 1.08 / 1.50 = 0.720. The F1 score is pulled toward the lower value (recall=0.6), unlike the arithmetic mean which would be 0.75.

### Q3. [Easy] What is the output?

```
from sklearn.model_selection import train_test_split
import numpy as np

X = np.arange(100).reshape(100, 1)
y = np.array([0]*80 + [1]*20)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Train size: {len(X_train)}")
print(f"Test size: {len(X_test)}")
print(f"Train class 1 ratio: {np.mean(y_train):.2f}")
print(f"Test class 1 ratio: {np.mean(y_test):.2f}")
```

*Hint:* stratify=y preserves class proportions in both splits.

**Answer:** `Train size: 80`
`Test size: 20`
`Train class 1 ratio: 0.20`
`Test class 1 ratio: 0.20`

With stratify=y, both train and test sets maintain the original 20% class 1 ratio. Without stratification, the test set might have 10% or 30% class 1 by chance, leading to unreliable evaluation.

### Q4. [Easy] What is the output?

```
from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 3)
y = (X[:, 0] > 0).astype(int)

scores = cross_val_score(DecisionTreeClassifier(random_state=42),
                         X, y, cv=5)
print(f"CV scores: {np.round(scores, 2)}")
print(f"Mean: {scores.mean():.3f}")
print(f"Std: {scores.std():.3f}")
```

*Hint:* Cross-validation returns 5 scores (one per fold).

**Answer:** `CV scores: [0.9  0.85 0.85 0.95 0.85]`
`Mean: 0.880`
`Std: 0.040`

5-fold cross-validation trains and tests 5 times, giving 5 accuracy scores. The mean (0.880) is the expected performance on unseen data. The standard deviation (0.040) measures stability -- lower is better. This is much more reliable than a single train-test split.

### Q5. [Medium] What is the output?

```
from sklearn.model_selection import KFold
import numpy as np

X = np.arange(10)
kf = KFold(n_splits=5)

for fold, (train_idx, test_idx) in enumerate(kf.split(X), 1):
    print(f"Fold {fold}: Train={train_idx.tolist()}, Test={test_idx.tolist()}")
```

*Hint:* 5-Fold KFold splits 10 items into 5 groups of 2.

**Answer:** `Fold 1: Train=[2, 3, 4, 5, 6, 7, 8, 9], Test=[0, 1]`
`Fold 2: Train=[0, 1, 4, 5, 6, 7, 8, 9], Test=[2, 3]`
`Fold 3: Train=[0, 1, 2, 3, 6, 7, 8, 9], Test=[4, 5]`
`Fold 4: Train=[0, 1, 2, 3, 4, 5, 8, 9], Test=[6, 7]`
`Fold 5: Train=[0, 1, 2, 3, 4, 5, 6, 7], Test=[8, 9]`

KFold with 5 splits divides 10 items into 5 consecutive groups of 2. Each fold uses 8 items for training and 2 for testing. Every item appears in the test set exactly once across all folds.

### Q6. [Medium] What is the output?

```
from sklearn.metrics import confusion_matrix
import numpy as np

y_true = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]
y_pred = [1, 0, 0, 1, 0, 1, 1, 0, 1, 0]

cm = confusion_matrix(y_true, y_pred)
print(cm)
TN, FP, FN, TP = cm.ravel()
print(f"TP={TP}, TN={TN}, FP={FP}, FN={FN}")
```

*Hint:* Count: correct positives (TP), correct negatives (TN), false alarms (FP), missed positives (FN).

**Answer:** `[[4 1]
 [1 4]]`
`TP=4, TN=4, FP=1, FN=1`

True negatives (actual=0, pred=0): indices 1,4,7,9 = 4. False positives (actual=0, pred=1): index 6 = 1. False negatives (actual=1, pred=0): index 2 = 1. True positives (actual=1, pred=1): indices 0,3,5,8 = 4.

### Q7. [Medium] What is the output?

```
from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 2)
y = (X[:, 0] > 0).astype(int)

param_grid = {'n_neighbors': [1, 3, 5, 7, 9, 11]}
grid = GridSearchCV(KNeighborsClassifier(), param_grid, cv=5, scoring='accuracy')
grid.fit(X, y)

print(f"Best K: {grid.best_params_['n_neighbors']}")
print(f"Best CV accuracy: {grid.best_score_:.3f}")
```

*Hint:* GridSearchCV tries all K values and picks the one with highest CV accuracy.

**Answer:** `Best K: 5`
`Best CV accuracy: 0.910`

GridSearchCV evaluates K=1,3,5,7,9,11 using 5-fold cross-validation (30 total model fits). K=5 achieves the highest average CV accuracy. GridSearchCV automatically stores the best parameters and can be used directly for prediction.

### Q8. [Medium] What is the output?

```
from sklearn.metrics import roc_auc_score
import numpy as np

y_true = [0, 0, 0, 0, 1, 1, 1, 1]

# Perfect predictions
y_proba_perfect = [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9]
print(f"Perfect AUC: {roc_auc_score(y_true, y_proba_perfect):.2f}")

# Random predictions
y_proba_random = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
print(f"Random AUC: {roc_auc_score(y_true, y_proba_random):.2f}")

# Reversed predictions (worst case)
y_proba_reversed = [0.9, 0.8, 0.7, 0.6, 0.4, 0.3, 0.2, 0.1]
print(f"Reversed AUC: {roc_auc_score(y_true, y_proba_reversed):.2f}")
```

*Hint:* AUC=1.0 for perfect ranking, 0.5 for random, 0.0 for perfectly wrong.

**Answer:** `Perfect AUC: 1.00`
`Random AUC: 0.50`
`Reversed AUC: 0.00`

AUC measures how well the model ranks positive examples above negative ones. Perfect ranking (all positives have higher scores) gives AUC=1.0. Equal scores (random) gives AUC=0.5. Completely reversed ranking gives AUC=0.0. AUC below 0.5 means the model's predictions are anti-correlated with the truth.

### Q9. [Hard] What is the output?

```
from sklearn.model_selection import cross_validate
from sklearn.tree import DecisionTreeClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 5)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

results = cross_validate(
    DecisionTreeClassifier(max_depth=None, random_state=42),
    X, y, cv=5,
    scoring=['accuracy', 'f1'],
    return_train_score=True
)

print(f"Train accuracy: {results['train_accuracy'].mean():.3f}")
print(f"Test accuracy:  {results['test_accuracy'].mean():.3f}")
print(f"Gap: {results['train_accuracy'].mean() - results['test_accuracy'].mean():.3f}")
print(f"Overfitting: {results['train_accuracy'].mean() - results['test_accuracy'].mean() > 0.1}")
```

*Hint:* Unlimited depth tree memorizes training data. The gap between train and test accuracy reveals overfitting.

**Answer:** `Train accuracy: 1.000`
`Test accuracy:  0.870`
`Gap: 0.130`
`Overfitting: True`

The unlimited tree achieves 100% training accuracy (memorizes data) but only 87% test accuracy. The gap of 13% indicates significant overfitting. return_train_score=True is essential for detecting overfitting -- without it, you only see the test score.

### Q10. [Hard] What is the output?

```
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 5)
y = (X[:, 0]**2 + X[:, 1]**2 > 1.5).astype(int)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('svm', SVC(random_state=42))
])

param_grid = {
    'svm__C': [0.1, 1, 10],
    'svm__gamma': ['scale', 0.1, 1]
}

grid = GridSearchCV(pipe, param_grid, cv=5, scoring='accuracy')
grid.fit(X, y)

print(f"Best params: C={grid.best_params_['svm__C']}, gamma={grid.best_params_['svm__gamma']}")
print(f"Best CV accuracy: {grid.best_score_:.3f}")
```

*Hint:* Pipeline ensures scaling is done inside CV (no data leakage). Prefix parameters with step name.

**Answer:** `Best params: C=10, gamma=1`
`Best CV accuracy: 0.915`

Using Pipeline with GridSearchCV ensures that scaling is performed inside cross-validation (no data leakage). Parameters are prefixed with the pipeline step name: 'svm__C' refers to the C parameter of the 'svm' step. The circular boundary requires C=10 (strict) and gamma=1 (moderate reach) for the RBF kernel.

### Q11. [Hard] What is the output?

```
from sklearn.metrics import precision_recall_curve
import numpy as np

y_true = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])
y_scores = np.array([0.1, 0.2, 0.3, 0.4, 0.6, 0.5, 0.7, 0.8, 0.85, 0.9])

precisions, recalls, thresholds = precision_recall_curve(y_true, y_scores)

# Find threshold where precision >= 0.9
for p, r, t in zip(precisions, recalls, thresholds):
    if p >= 0.9:
        print(f"Threshold={t:.2f}: Precision={p:.2f}, Recall={r:.2f}")
        break
```

*Hint:* Higher threshold means fewer positive predictions, higher precision but lower recall.

**Answer:** `Threshold=0.60: Precision=1.00, Recall=0.80`

At threshold 0.60, the model predicts positive for scores >= 0.60. The 5 positives have scores [0.5, 0.7, 0.8, 0.85, 0.9]. At threshold 0.60, it catches 4 out of 5 (recall=0.80) with zero false positives among the negatives (precision=1.00). One positive (score 0.5) is missed.

### Q12. [Easy] What is the output?

```
from sklearn.metrics import accuracy_score

y_true = [0]*95 + [1]*5
y_pred = [0]*100  # Always predict 0

print(f"Accuracy: {accuracy_score(y_true, y_pred):.2%}")
print(f"Is this a good model? No! It catches 0 out of 5 positives.")
```

*Hint:* A model that always predicts the majority class can still get high accuracy on imbalanced data.

**Answer:** `Accuracy: 95.00%`
`Is this a good model? No! It catches 0 out of 5 positives.`

95% accuracy sounds impressive, but the model simply predicts the majority class every time. It catches zero positives (recall=0%). This is the classic example of why accuracy is misleading on imbalanced data.

### Q13. [Medium] What is the output?

```
from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 3)
y = (X[:, 0] > 0).astype(int)

for depth in [1, 3, 5, None]:
    dt = DecisionTreeClassifier(max_depth=depth, random_state=42)
    scores = cross_val_score(dt, X, y, cv=5)
    print(f"depth={str(depth):4s}: CV={scores.mean():.3f} +/- {scores.std():.3f}")
```

*Hint:* Shallow trees underfit, deep trees overfit. CV score peaks at the sweet spot.

**Answer:** `depth=1   : CV=0.880 +/- 0.040`
`depth=3   : CV=0.870 +/- 0.054`
`depth=5   : CV=0.870 +/- 0.049`
`depth=None: CV=0.870 +/- 0.044`

For this simple dataset (y depends only on X[:,0] > 0), even depth=1 works well (single split on X[:,0]). Deeper trees do not improve because the pattern is simple. The CV scores are similar across depths, suggesting the boundary is nearly linear.

### Q14. [Hard] Given this confusion matrix, calculate all metrics:

```
# Predicted:    Positive  Negative
# Actual Pos:     80        20
# Actual Neg:     30        70

TP, FN = 80, 20
FP, TN = 30, 70

accuracy = (TP + TN) / (TP + TN + FP + FN)
precision = TP / (TP + FP)
recall = TP / (TP + FN)
f1 = 2 * precision * recall / (precision + recall)
specificity = TN / (TN + FP)

print(f"Accuracy: {accuracy:.3f}")
print(f"Precision: {precision:.3f}")
print(f"Recall: {recall:.3f}")
print(f"F1: {f1:.3f}")
print(f"Specificity: {specificity:.3f}")
```

*Hint:* Apply each formula using the confusion matrix values.

**Answer:** `Accuracy: 0.750`
`Precision: 0.727`
`Recall: 0.800`
`F1: 0.762`
`Specificity: 0.700`

Accuracy = 150/200 = 0.75. Precision = 80/110 = 0.727. Recall = 80/100 = 0.80. F1 = 2*0.727*0.80/(0.727+0.80) = 0.762. Specificity = 70/100 = 0.70. The model catches 80% of positives (good recall) but 27% of positive predictions are wrong (precision 73%).

### Q15. [Hard] What is the output?

```
from sklearn.model_selection import RandomizedSearchCV
from sklearn.ensemble import RandomForestClassifier
from scipy.stats import randint
import numpy as np

np.random.seed(42)
X = np.random.randn(300, 5)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

param_dist = {
    'n_estimators': randint(10, 200),
    'max_depth': [3, 5, 7, 10, None],
}

rs = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    param_dist, n_iter=10, cv=3, scoring='accuracy', random_state=42
)
rs.fit(X, y)

print(f"Best params: {rs.best_params_}")
print(f"Best CV accuracy: {rs.best_score_:.3f}")
print(f"Combinations tried: {len(rs.cv_results_['mean_test_score'])}")
```

*Hint:* RandomizedSearchCV tries n_iter=10 random combinations from the distributions.

**Answer:** `Best params: {'max_depth': 7, 'n_estimators': 148}`
`Best CV accuracy: 0.907`
`Combinations tried: 10`

RandomizedSearchCV sampled 10 random combinations of n_estimators (from 10-199) and max_depth (from the list). Each was evaluated with 3-fold CV. The best combination uses moderate depth (7) and 148 trees. Only 10 combinations were tried (vs GridSearchCV which would try all 5*190=950).

### Q16. [Easy] What is the output?

```
TP = 20
FP = 5
FN = 10
TN = 65

precision = TP / (TP + FP)
recall = TP / (TP + FN)
f1 = 2 * precision * recall / (precision + recall)
print(f"Precision: {precision:.3f}")
print(f"Recall: {recall:.3f}")
print(f"F1: {f1:.3f}")
```

*Hint:* Plug in the values: Precision = 20/(20+5), Recall = 20/(20+10).

**Answer:** `Precision: 0.800`
`Recall: 0.667`
`F1: 0.727`

Precision = 20/25 = 0.800 (80% of positive predictions are correct). Recall = 20/30 = 0.667 (67% of actual positives are detected). F1 = 2*0.8*0.667/(0.8+0.667) = 0.727. The F1 score is pulled toward the lower metric (recall).

### Q17. [Medium] What is the output?

```
from sklearn.model_selection import StratifiedKFold
import numpy as np

y = np.array([0]*80 + [1]*20)  # 80% class 0, 20% class 1

skf = StratifiedKFold(n_splits=5, shuffle=False)
for fold, (train_idx, test_idx) in enumerate(skf.split(np.zeros(100), y), 1):
    test_ratio = np.mean(y[test_idx])
    print(f"Fold {fold}: test size={len(test_idx)}, class 1 ratio={test_ratio:.2f}")
```

*Hint:* Stratified K-Fold preserves the class ratio (20% class 1) in each fold.

**Answer:** `Fold 1: test size=20, class 1 ratio=0.20`
`Fold 2: test size=20, class 1 ratio=0.20`
`Fold 3: test size=20, class 1 ratio=0.20`
`Fold 4: test size=20, class 1 ratio=0.20`
`Fold 5: test size=20, class 1 ratio=0.20`

Each fold has exactly 20 test samples with 20% class 1 ratio (4 class 1, 16 class 0), matching the original dataset distribution. Without stratification, some folds might have 0% or 35% class 1 by chance.

### Q18. [Hard] What is the output?

```
from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 3)
y = (X[:, 0] > 0).astype(int)

param_grid = {'max_depth': [1, 2, 3, 5, 10]}
grid = GridSearchCV(DecisionTreeClassifier(random_state=42),
                     param_grid, cv=5, return_train_score=True)
grid.fit(X, y)

for depth in [1, 3, 10]:
    idx = list(param_grid['max_depth']).index(depth)
    train = grid.cv_results_['mean_train_score'][idx]
    test = grid.cv_results_['mean_test_score'][idx]
    print(f"depth={depth:2d}: train={train:.3f}, test={test:.3f}, gap={train-test:.3f}")
```

*Hint:* The gap between train and test score indicates overfitting. Deeper trees have larger gaps.

**Answer:** `depth= 1: train=0.888, test=0.880, gap=0.008`
`depth= 3: train=0.938, test=0.875, gap=0.063`
`depth=10: train=1.000, test=0.870, gap=0.130`

Depth 1: small gap (0.008), slight underfitting. Depth 3: moderate gap (0.063), good balance. Depth 10: large gap (0.130), clear overfitting (100% train but test drops). The gap size directly measures overfitting severity.

### Q19. [Easy] What is the output?

```
from sklearn.metrics import roc_auc_score
import numpy as np

y_true = [0, 0, 1, 1]

# Model that perfectly separates classes
y_scores_good = [0.1, 0.3, 0.7, 0.9]

# Model with no discrimination
y_scores_bad = [0.5, 0.5, 0.5, 0.5]

print(f"Good model AUC: {roc_auc_score(y_true, y_scores_good):.2f}")
print(f"Bad model AUC: {roc_auc_score(y_true, y_scores_bad):.2f}")
```

*Hint:* Perfect separation gives AUC=1.0. No discrimination gives AUC=0.5.

**Answer:** `Good model AUC: 1.00`
`Bad model AUC: 0.50`

The good model perfectly ranks positives above negatives (all positive scores > all negative scores), giving AUC=1.0. The bad model assigns identical scores to all samples (no ranking ability), giving AUC=0.5 (random).

### Q20. [Medium] What is the output?

```
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 5)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

# Compare different scoring metrics
model = RandomForestClassifier(n_estimators=50, random_state=42)
for metric in ['accuracy', 'f1', 'roc_auc', 'precision']:
    scores = cross_val_score(model, X, y, cv=5, scoring=metric)
    print(f"{metric:10s}: {scores.mean():.3f} +/- {scores.std():.3f}")
```

*Hint:* Different metrics tell different stories about model performance.

**Answer:** `accuracy  : 0.895 +/- 0.027`
`f1        : 0.893 +/- 0.030`
`roc_auc   : 0.952 +/- 0.018`
`precision : 0.893 +/- 0.040`

AUC (0.952) is higher than accuracy/F1/precision (all ~0.89) because AUC evaluates the model's ranking ability across all thresholds, not just at the default 0.5 threshold. A model can have moderate accuracy at threshold 0.5 but excellent overall ranking. AUC is often the best single metric.

### Q21. [Hard] What is the output?

```
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import numpy as np

np.random.seed(42)
X = np.random.randn(150, 3)
y = (X[:, 0]**2 + X[:, 1]**2 > 1.5).astype(int)

# Using Pipeline to avoid data leakage
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('svm', SVC())
])

param_grid = {
    'svm__C': [0.1, 1, 10],
    'svm__kernel': ['linear', 'rbf']
}

grid = GridSearchCV(pipe, param_grid, cv=5, scoring='accuracy')
grid.fit(X, y)

print(f"Best: {grid.best_params_}")
print(f"Best CV score: {grid.best_score_:.3f}")
print(f"Total fits: {len(grid.cv_results_['mean_test_score']) * 5}")
```

*Hint:* 3 C values * 2 kernels = 6 combinations * 5 folds = 30 fits.

**Answer:** `Best: {'svm__C': 10, 'svm__kernel': 'rbf'}`
`Best CV score: 0.913`
`Total fits: 30`

6 parameter combinations * 5 CV folds = 30 model fits. RBF kernel with C=10 wins because the boundary is circular (non-linear). The Pipeline ensures StandardScaler is applied inside each CV fold, preventing data leakage.

### Q22. [Medium] What is the output?

```
from sklearn.metrics import precision_score, recall_score
import numpy as np

y_true = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]

# Model that predicts everything as positive
y_pred_all_pos = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

# Model that predicts everything as negative
y_pred_all_neg = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

print(f"All positive - Precision: {precision_score(y_true, y_pred_all_pos):.2f}")
print(f"All positive - Recall: {recall_score(y_true, y_pred_all_pos):.2f}")
print(f"All negative - Recall: {recall_score(y_true, y_pred_all_neg):.2f}")
```

*Hint:* Predicting all positive gives recall=1.0 but low precision. Predicting all negative gives recall=0.0.

**Answer:** `All positive - Precision: 0.50`
`All positive - Recall: 1.00`
`All negative - Recall: 0.00`

All positive: TP=5, FP=5, FN=0. Precision=5/10=0.50, Recall=5/5=1.00. Catches all positives but half the predictions are wrong. All negative: TP=0, FN=5. Recall=0/5=0.00. Misses every positive case.

### Q23. [Easy] What is the output?

```
from sklearn.model_selection import train_test_split
import numpy as np

X = np.arange(20).reshape(20, 1)
y = np.array([0]*10 + [1]*10)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

print(f"Train: {len(X_train)}, Test: {len(X_test)}")
print(f"Total: {len(X_train) + len(X_test)}")
```

*Hint:* test_size=0.25 means 25% test, 75% train.

**Answer:** `Train: 15, Test: 5`
`Total: 20`

25% of 20 = 5 test samples. 75% of 20 = 15 training samples. All 20 samples are used (no data is lost). The split is random but reproducible with random_state=42.

### Q24. [Hard] What is the output?

```
from sklearn.model_selection import cross_val_score, LeaveOneOut
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
y = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])

loo = LeaveOneOut()
scores = cross_val_score(KNeighborsClassifier(n_neighbors=3), X, y, cv=loo)
print(f"LOO scores: {scores.astype(int).tolist()}")
print(f"LOO accuracy: {scores.mean():.2f}")
print(f"Number of folds: {len(scores)}")
```

*Hint:* Leave-One-Out tests on one sample at a time. N samples = N folds.

**Answer:** `LOO scores: [1, 1, 1, 1, 0, 1, 0, 1, 1, 1]`
`LOO accuracy: 0.80`
`Number of folds: 10`

Leave-One-Out creates 10 folds (one per sample). Each fold trains on 9 samples and tests on 1. The boundary samples (4,5,6,7) near the class transition are harder to classify, leading to 2 errors. LOO accuracy is 8/10 = 0.80. LOO is thorough but slow for large datasets.

### Q25. [Medium] What is the output?

```
from sklearn.metrics import f1_score
import numpy as np

y_true = [0, 1, 1, 0, 1, 0, 1, 1]

# Compare macro vs weighted F1
y_pred = [0, 1, 0, 0, 1, 1, 1, 0]

f1_macro = f1_score(y_true, y_pred, average='macro')
f1_weighted = f1_score(y_true, y_pred, average='weighted')
f1_binary = f1_score(y_true, y_pred, average='binary')

print(f"F1 macro: {f1_macro:.3f}")
print(f"F1 weighted: {f1_weighted:.3f}")
print(f"F1 binary: {f1_binary:.3f}")
```

*Hint:* Macro averages F1 across classes equally. Weighted averages by class support. Binary gives F1 for class 1 only.

**Answer:** `F1 macro: 0.571`
`F1 weighted: 0.590`
`F1 binary: 0.600`

Binary F1 focuses only on class 1 performance. Macro F1 averages class 0 and class 1 F1 scores equally. Weighted F1 averages by the number of samples in each class. The difference matters when classes are imbalanced -- macro gives equal weight to each class, weighted gives more weight to larger classes.

### Q26. [Hard] What is the output?

```
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(300, 5)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [3, 5, 10, None]
}

grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=5, scoring='accuracy', n_jobs=-1
)
grid.fit(X, y)

print(f"Total parameter combinations: {len(grid.cv_results_['params'])}")
print(f"Best accuracy: {grid.best_score_:.4f}")
print(f"Best params: {grid.best_params_}")
print(f"All mean CV scores: {np.round(grid.cv_results_['mean_test_score'], 3)}")
```

*Hint:* 3 * 4 = 12 combinations. Each evaluated with 5-fold CV.

**Answer:** `Total parameter combinations: 12`
`Best accuracy: 0.9100`
`Best params: {'max_depth': 5, 'n_estimators': 200}`
`All mean CV scores: [0.887 0.893 0.897 0.903 0.897 0.907 0.91  0.9   0.9   0.903 0.903 0.9  ]`

12 combinations are evaluated (3 n_estimators * 4 max_depth). The best is max_depth=5 with 200 trees (91% accuracy). Scores range from 88.7% to 91% -- a 2.3% spread, showing that hyperparameter tuning matters but the differences are modest for this dataset.

## Mixed Questions

### Q1. [Easy] Why is accuracy not a good metric for imbalanced datasets?

*Hint:* Think about what happens with a majority-class-only classifier.

**Answer:** On imbalanced datasets, a model that always predicts the majority class achieves high accuracy without learning anything useful. For example, if 99% of transactions are legitimate, predicting "legitimate" for everything gives 99% accuracy but catches zero fraud. Accuracy treats all errors equally, but in reality, false negatives (missing fraud) and false positives (flagging legitimate) have very different costs. Use precision, recall, F1-score, or ROC-AUC instead.

Accuracy = (TP+TN)/Total. When TN dominates (many true negatives), accuracy is high even with TP=0. Precision, recall, and F1 focus specifically on the positive class performance, which is usually what we care about in imbalanced settings.

### Q2. [Easy] What is the difference between a training set and a test set?

*Hint:* Think about what each set is used for.

**Answer:** The **training set** is used to train the model (learn parameters/weights). The **test set** is held-out data never seen during training, used to evaluate how well the model generalizes to new, unseen data. The test set simulates real-world deployment. You should never train on test data or use test results to make training decisions.

Training accuracy tells you how well the model memorized the data. Test accuracy tells you how well it will perform in the real world. A large gap between them (high training, low test) indicates overfitting.

### Q3. [Medium] Explain the bias-variance tradeoff. How does model complexity relate to it?

*Hint:* Bias relates to underfitting, variance to overfitting.

**Answer:** **Bias** is error from oversimplified assumptions. High bias means the model misses patterns (underfitting). **Variance** is error from sensitivity to training data fluctuations. High variance means the model captures noise (overfitting). **Total Error = Bias^2 + Variance + Irreducible Noise**. Simple models have high bias, low variance. Complex models have low bias, high variance. The optimal model minimizes total error by balancing both.

Example: A straight line (high bias) cannot capture a curved pattern. A degree-100 polynomial (high variance) fits every point perfectly but oscillates wildly between points. A degree-3 polynomial might capture the curve without the wild oscillations -- the sweet spot.

### Q4. [Medium] What is the output?

```
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
import numpy as np

np.random.seed(42)
X = np.random.randn(300, 5)
y = (X[:, 0] + 0.5*X[:, 1] > 0).astype(int)

models = {
    'Logistic Regression': LogisticRegression(random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'SVM': SVC(random_state=42)
}

for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5)
    print(f"{name:25s}: {scores.mean():.3f} +/- {scores.std():.3f}")
```

*Hint:* The boundary is linear (sum of features > 0). Logistic regression should do well.

**Answer:** `Logistic Regression      : 0.913 +/- 0.020`
`Random Forest            : 0.890 +/- 0.026`
`SVM                      : 0.903 +/- 0.029`

The data has a linear boundary, so Logistic Regression (a linear model) performs best. Random Forest, despite being more complex, does not improve because the pattern is inherently linear. This illustrates that more complex models are not always better -- match the model to the data's complexity.

### Q5. [Medium] What is the advantage of K-Fold cross-validation over a single train-test split?

*Hint:* Think about variability and data utilization.

**Answer:** K-Fold CV has three key advantages: (1) **More reliable estimate**: averaging K scores reduces the variance of the estimate. A single split might give 80% or 90% depending on which points end up in test -- CV gives a stable average. (2) **Every sample is tested**: each sample appears in the test set exactly once, so the entire dataset contributes to the evaluation. (3) **Better use of limited data**: with small datasets, holding out 20% for testing wastes precious training data. CV uses 80% for training in each fold.

The standard deviation of CV scores indicates how sensitive the model is to the data split. High std means the model's performance varies a lot (high variance). Low std means stable, reliable performance.

### Q6. [Hard] What is the output?

```
from sklearn.metrics import precision_score, recall_score, f1_score
import numpy as np

y_true = np.array([1, 1, 1, 1, 1, 0, 0, 0, 0, 0])
y_proba = np.array([0.9, 0.8, 0.6, 0.4, 0.3, 0.7, 0.2, 0.1, 0.05, 0.01])

for threshold in [0.3, 0.5, 0.7]:
    y_pred = (y_proba >= threshold).astype(int)
    p = precision_score(y_true, y_pred)
    r = recall_score(y_true, y_pred)
    f = f1_score(y_true, y_pred)
    print(f"Threshold={threshold}: P={p:.2f}, R={r:.2f}, F1={f:.2f}")
```

*Hint:* Lower threshold: more positive predictions, higher recall, lower precision.

**Answer:** `Threshold=0.3: P=0.71, R=1.00, F1=0.83`
`Threshold=0.5: P=0.75, R=0.60, F1=0.67`
`Threshold=0.7: P=0.67, R=0.40, F1=0.50`

At threshold 0.3: predicts 7 positive (5 TP, 2 FP). P=5/7=0.71, R=5/5=1.00. At 0.5: predicts 4 positive (3 TP, 1 FP). P=3/4=0.75, R=3/5=0.60. At 0.7: predicts 3 positive (2 TP, 1 FP). P=2/3=0.67, R=2/5=0.40. Clear precision-recall tradeoff as threshold changes.

### Q7. [Hard] What is the difference between GridSearchCV and RandomizedSearchCV? When should you use each?

*Hint:* Think about the search space size and computational budget.

**Answer:** **GridSearchCV** exhaustively tries every combination in the parameter grid. Guaranteed to find the best combination within the grid, but exponentially slow (3 params with 5 values each = 125 combinations). **RandomizedSearchCV** randomly samples N combinations from parameter distributions. Much faster, especially for large search spaces, but may miss the optimal combination. **Use GridSearchCV** when: few hyperparameters, small grid, need guaranteed best. **Use RandomizedSearchCV** when: many hyperparameters, continuous ranges, need fast initial exploration.

Best practice: (1) Use RandomizedSearchCV with n_iter=50-100 to explore the space broadly and identify promising regions. (2) Then use GridSearchCV with a narrow grid around the best region found by RandomizedSearchCV for fine-tuning.

### Q8. [Hard] What is the output?

```
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 5)
y = (X[:, 0] > 0).astype(int)

param_grid = {
    'max_depth': [1, 3, 5],
    'n_estimators': [10, 50]
}

grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid, cv=3, scoring='accuracy',
    return_train_score=True
)
grid.fit(X, y)

# Check for overfitting in best model
best_idx = grid.best_index_
train_score = grid.cv_results_['mean_train_score'][best_idx]
test_score = grid.cv_results_['mean_test_score'][best_idx]
print(f"Best params: {grid.best_params_}")
print(f"Train: {train_score:.3f}, Test: {test_score:.3f}")
print(f"Overfitting gap: {train_score - test_score:.3f}")
```

*Hint:* The gap between train and test scores indicates overfitting. A small gap is good.

**Answer:** `Best params: {'max_depth': 3, 'n_estimators': 50}`
`Train: 0.978, Test: 0.910`
`Overfitting gap: 0.068`

The 6.8% gap between training (97.8%) and test (91%) scores indicates mild overfitting. max_depth=3 limits the trees, and 50 trees provide stable averaging. return_train_score=True is essential for detecting overfitting -- always check the train-test gap.

### Q9. [Hard] Why should you use a Pipeline with GridSearchCV, especially when scaling features?

*Hint:* Think about what happens to the scaler during cross-validation without a pipeline.

**Answer:** Without a Pipeline, if you scale the entire dataset before cross-validation, the scaler has seen the test fold's data during fitting. This is **data leakage**: the mean and variance used for scaling include information from the test fold. With a Pipeline, scaling is done INSIDE each cross-validation fold: the scaler is fit only on the training folds and transforms the test fold. This gives an honest, unbiased evaluation.

Pipeline ensures that ALL preprocessing (scaling, encoding, feature selection) is performed inside the CV loop. Without it, any preprocessing on the full dataset before splitting leaks information. This is subtle but can make your CV scores overly optimistic by 1-5%.

### Q10. [Medium] What does ROC-AUC measure, and why is it useful for comparing models?

*Hint:* Think about what makes AUC different from accuracy or F1.

**Answer:** ROC-AUC measures the probability that the model ranks a random positive example higher than a random negative example. It is **threshold-independent**: it evaluates the model's ranking ability across ALL possible thresholds, not just the default 0.5. AUC=1.0 means perfect ranking, AUC=0.5 means random. It is useful for comparing models because it is not affected by class imbalance or threshold choice.

If Priya's model has AUC=0.95 and Rohan's has AUC=0.85, Priya's model is fundamentally better at separating classes regardless of which threshold is used. This makes AUC the most reliable single metric for model comparison.

## Multiple Choice Questions

### Q1. [Easy] Which metric measures: 'Of all positive predictions, how many are actually positive?'

**Answer:** B

**B is correct.** Precision = TP/(TP+FP). It answers how many of the model's positive predictions are truly positive. High precision means few false alarms.

### Q2. [Easy] Which metric measures: 'Of all actual positives, how many did the model detect?'

**Answer:** C

**C is correct.** Recall = TP/(TP+FN). It answers how many actual positives the model successfully detected. High recall means few missed positives.

### Q3. [Easy] What does an AUC of 0.5 indicate?

**Answer:** B

**B is correct.** AUC=0.5 means the model's positive and negative class predictions are randomly mixed. The ROC curve follows the diagonal line, indicating no discriminative ability.

### Q4. [Easy] In 5-Fold cross-validation with 100 samples, how many samples are in each test fold?

**Answer:** C

**C is correct.** 5-Fold splits 100 samples into 5 equal parts of 20. Each fold uses 80 samples for training and 20 for testing. Every sample is tested exactly once across all 5 folds.

### Q5. [Easy] What is overfitting?

**Answer:** B

**B is correct.** Overfitting occurs when the model learns the training data too well, including noise and random fluctuations. It has high training accuracy but low test accuracy. Signs: 100% training accuracy with much lower test accuracy.

### Q6. [Medium] What does GridSearchCV do?

**Answer:** B

**B is correct.** GridSearchCV exhaustively evaluates every combination in the specified parameter grid using cross-validation. It returns the best combination based on the specified scoring metric.

### Q7. [Medium] Why should you use Stratified K-Fold instead of regular K-Fold for imbalanced data?

**Answer:** B

**B is correct.** Stratified K-Fold ensures each fold has approximately the same class distribution as the full dataset. Without stratification, a fold might have very few or no minority class samples, giving unreliable scores.

### Q8. [Medium] If a model has high training accuracy but low test accuracy, what is the likely problem?

**Answer:** B

**B is correct.** A large gap between training and test accuracy is the hallmark of overfitting. The model has memorized the training data (including noise) but fails to generalize. Fix: simplify the model, add regularization, get more data.

### Q9. [Medium] What is the advantage of RandomizedSearchCV over GridSearchCV?

**Answer:** B

**B is correct.** RandomizedSearchCV samples a fixed number of random combinations (n_iter), making it much faster than GridSearchCV which tries every combination. For a grid with thousands of combinations, RandomizedSearchCV with n_iter=50 is dramatically faster while often finding near-optimal parameters.

### Q10. [Medium] What does a learning curve that shows high training score and low test score indicate?

**Answer:** C

**C is correct.** A large gap between training and test curves indicates overfitting. More training data can help because it gives the model more examples to learn genuine patterns rather than memorizing noise. Alternatively, simplify the model or add regularization.

### Q11. [Hard] For a cancer screening system where missing a positive case is extremely dangerous, which metric should be maximized?

**Answer:** B

**B is correct.** Recall = TP/(TP+FN). Maximizing recall minimizes false negatives (missed cancer cases). In cancer screening, missing a positive (FN) can be fatal, while a false positive (FP) only means additional tests. High recall ensures nearly all cancer cases are detected.

### Q12. [Hard] What is data leakage in the context of model evaluation?

**Answer:** B

**B is correct.** Data leakage occurs when the model has indirect access to test data during training. Examples: scaling the entire dataset before splitting, using future data to predict past events, or including the target variable as a feature. It produces unrealistically good evaluation scores that will not hold in production.

### Q13. [Hard] In the bias-variance tradeoff, which of the following correctly describes Total Error?

**Answer:** B

**B is correct.** The expected prediction error decomposes into: Bias^2 (systematic error from wrong assumptions) + Variance (error from sensitivity to training data) + Irreducible Noise (inherent randomness in the data). We can reduce bias and variance by choosing the right model complexity, but irreducible noise is a fundamental limit.

### Q14. [Hard] If GridSearchCV has param_grid with 3 values for C, 4 values for gamma, and 2 values for kernel, with cv=5, how many models are fitted in total?

**Answer:** C

**C is correct.** Total combinations = 3 * 4 * 2 = 24 parameter combinations. Each is evaluated with 5-fold CV, so 24 * 5 = 120 model fits total. This is why GridSearchCV is computationally expensive for large grids.

### Q15. [Hard] When should you use ROC-AUC instead of F1-score for model evaluation?

**Answer:** A

**A is correct.** ROC-AUC evaluates the model's ability to rank positives above negatives across ALL thresholds, making it threshold-independent. F1-score depends on a specific threshold (default 0.5). Use AUC when: comparing models overall, the threshold will be tuned later, or you want a single comprehensive metric.

### Q16. [Medium] What is the purpose of the scoring parameter in GridSearchCV?

**Answer:** B

**B is correct.** The scoring parameter determines which metric GridSearchCV optimizes. Options include 'accuracy', 'f1', 'roc_auc', 'precision', 'recall', etc. The best parameters are those that maximize this metric in cross-validation. For imbalanced data, use 'f1' or 'roc_auc' instead of 'accuracy'.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/model-evaluation-and-tuning/*
