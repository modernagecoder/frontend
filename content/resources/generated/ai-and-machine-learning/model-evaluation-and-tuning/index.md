---
title: "Model Evaluation and Hyperparameter Tuning - Cross-Validation, GridSearchCV, ROC-AUC | Modern Age Coders"
description: "Master model evaluation: confusion matrix, precision, recall, F1, ROC curve, AUC, train-test split, K-Fold cross-validation, stratified K-Fold, bias-variance tradeoff, overfitting, underfitting, GridSearchCV, RandomizedSearchCV, learning curves. 58 practice questions with Python code."
slug: model-evaluation-and-tuning
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/model-evaluation-and-tuning/
category: "AI and Machine Learning"
keywords: ["model evaluation", "cross validation", "k fold", "stratified k fold", "grid search cv", "randomized search cv", "roc curve", "auc", "confusion matrix", "precision recall"]
---
# Model Evaluation, Cross-Validation, and Hyperparameter Tuning

**Difficulty:** Intermediate  
**Reading time:** 55 min  
**Chapter:** 10  
**Practice questions:** 52

## What Is Model Evaluation?

**Model evaluation** is the process of measuring how well a machine learning model performs on unseen data. Training a model is only half the job -- if you cannot properly evaluate it, you have no idea whether it will work in the real world.

The fundamental question is: **How will this model perform on data it has never seen before?** A model that achieves 99% accuracy on training data but only 60% on new data is useless. Model evaluation gives us reliable estimates of real-world performance.

```
# The evaluation pipeline:
# 1. Split data into training and testing sets
# 2. Train model on training set only
# 3. Evaluate on test set (never seen during training)
# 4. Use proper metrics (not just accuracy!)
# 5. Use cross-validation for robust estimates
# 6. Tune hyperparameters with GridSearchCV
# 7. Final evaluation on held-out test set
```

## What Is Hyperparameter Tuning?

**Hyperparameters** are settings you choose before training (like K in KNN, max_depth in decision trees, C in SVM). Unlike model parameters (weights, biases) that are learned during training, hyperparameters must be set manually. **Hyperparameter tuning** is the systematic process of finding the best combination of hyperparameters for your model and data.

## Why Is Proper Model Evaluation Critical?

### 1. Prevents Costly Mistakes in Production

When Kavita deploys a fraud detection model at a bank, a poorly evaluated model could either miss actual fraud (losing money) or flag legitimate transactions (losing customers). Proper evaluation catches these issues before deployment.

### 2. Accuracy Alone Is Misleading

If 99% of transactions are legitimate, a model that always predicts "legitimate" gets 99% accuracy but catches zero fraud. Precision, recall, F1-score, and ROC-AUC give the complete picture that accuracy hides.

### 3. Overfitting Is the Silent Killer

A model that memorizes training data looks perfect on training metrics but fails spectacularly on new data. Without proper train-test splitting and cross-validation, you will never know your model is overfitting until it is too late.

### 4. Hyperparameter Tuning Can Make or Break a Model

The same algorithm with different hyperparameters can give 70% accuracy or 95% accuracy. Rohit's Random Forest with max_depth=3 might underfit, while max_depth=50 might overfit. GridSearchCV systematically finds the sweet spot.

### 5. Cross-Validation Gives Reliable Estimates

A single train-test split can give optimistic or pessimistic estimates depending on which points end up in which split. Cross-validation averages over multiple splits, giving a much more reliable performance estimate.

## Detailed Explanation

### 1. Why Accuracy Alone Is Not Enough

Consider an email spam filter with 1000 emails: 950 legitimate, 50 spam.

```
# Dummy model: always predicts "legitimate"
# Accuracy = 950/1000 = 95% (sounds great!)
# But: catches ZERO spam emails (0% recall on spam)
#
# The problem: accuracy treats all errors equally
# Missing spam (FN) and flagging legitimate (FP) have very different costs
#
# We need metrics that distinguish between these error types
```

### 2. Confusion Matrix Deep Dive

```
#                     Predicted
#                  Positive   Negative
# Actual Positive    TP         FN
# Actual Negative    FP         TN
#
# TP (True Positive):  Correctly identified positive
# TN (True Negative):  Correctly identified negative
# FP (False Positive): Incorrectly labeled as positive (Type I error)
# FN (False Negative): Incorrectly labeled as negative (Type II error)
#
# From the confusion matrix, we derive ALL evaluation metrics:
```

### 3. Precision, Recall, F1-Score

```
# Precision = TP / (TP + FP)
# "Of everything I predicted positive, what fraction is actually positive?"
# High precision = few false alarms
#
# Recall (Sensitivity) = TP / (TP + FN)
# "Of everything actually positive, what fraction did I detect?"
# High recall = few missed positives
#
# F1 Score = 2 * Precision * Recall / (Precision + Recall)
# Harmonic mean: punishes extreme imbalance between P and R
#
# Specificity = TN / (TN + FP)
# "Of everything actually negative, what fraction did I correctly identify?"
#
# The Precision-Recall Trade-off:
# Lower threshold -> more positive predictions -> higher recall, lower precision
# Higher threshold -> fewer positive predictions -> higher precision, lower recall
```

### 4. ROC Curve and AUC

The **ROC (Receiver Operating Characteristic) curve** plots True Positive Rate (recall) vs False Positive Rate at various thresholds.

```
# TPR (True Positive Rate) = Recall = TP / (TP + FN)
# FPR (False Positive Rate) = FP / (FP + TN)
#
# ROC Curve: plot TPR vs FPR at different thresholds
# - Perfect model: goes straight up to (0,1) then right (AUC = 1.0)
# - Random model: diagonal line from (0,0) to (1,1) (AUC = 0.5)
# - Worse than random: below the diagonal (AUC < 0.5)
#
# AUC (Area Under ROC Curve):
# - 1.0: perfect classifier
# - 0.9-1.0: excellent
# - 0.8-0.9: good
# - 0.7-0.8: fair
# - 0.5: no better than random guessing
#
# AUC is threshold-independent: it measures overall model quality
```

### 5. Train-Test Split

```
# Basic approach: split data into training and test sets
# Typical splits: 80/20, 70/30, or 75/25
#
# Rules:
# 1. NEVER train on test data
# 2. NEVER tune hyperparameters using test data
# 3. Use stratify=y to maintain class proportions
# 4. Set random_state for reproducibility
#
# Problem: a single split may not be representative
# Solution: cross-validation
```

### 6. K-Fold Cross-Validation

```
# K-Fold splits data into K equal parts (folds):
# Fold 1: [TEST] [Train] [Train] [Train] [Train]
# Fold 2: [Train] [TEST] [Train] [Train] [Train]
# Fold 3: [Train] [Train] [TEST] [Train] [Train]
# Fold 4: [Train] [Train] [Train] [TEST] [Train]
# Fold 5: [Train] [Train] [Train] [Train] [TEST]
#
# Each fold serves as test set exactly once
# Final score = average of all K scores
# Typical K: 5 or 10
#
# Stratified K-Fold: preserves class proportions in each fold
# Essential for imbalanced datasets!
#
# Leave-One-Out (LOO): K = N (one sample per fold)
# Most thorough but very slow for large datasets
```

### 7. Overfitting vs Underfitting

```
# Underfitting (High Bias):
# - Model too simple to capture patterns
# - Low training accuracy AND low test accuracy
# - Fix: more complex model, more features, less regularization
#
# Overfitting (High Variance):
# - Model memorizes training data including noise
# - High training accuracy but LOW test accuracy
# - Fix: simpler model, more data, regularization, pruning
#
# The Bias-Variance Tradeoff:
# Total Error = Bias^2 + Variance + Irreducible Noise
# - Bias: error from oversimplified model (misses patterns)
# - Variance: error from sensitivity to training data (captures noise)
# - Sweet spot: balance between bias and variance
```

### 8. Hyperparameter Tuning

```
# GridSearchCV: exhaustive search over a parameter grid
# - Tries EVERY combination of specified parameters
# - Uses cross-validation to evaluate each combination
# - Guaranteed to find the best within the grid
# - Slow for large grids (exponential combinations)
#
# RandomizedSearchCV: random sampling from parameter distributions
# - Samples N random combinations from parameter distributions
# - Much faster than GridSearchCV for large search spaces
# - May not find the absolute best, but often finds near-optimal
# - Better for initial exploration
#
# Typical workflow:
# 1. RandomizedSearchCV to narrow the range
# 2. GridSearchCV to fine-tune within the narrowed range
```

### 9. Learning Curves and Validation Curves

```
# Learning Curve: training/test score vs training set size
# - If both scores are low: underfitting (need more complex model)
# - If training high, test low: overfitting (need more data or simpler model)
# - If both converge high: good model
#
# Validation Curve: training/test score vs hyperparameter value
# - Left side (simple model): both scores low (underfitting)
# - Right side (complex model): training high, test low (overfitting)
# - Sweet spot: where test score peaks
```

## Code Examples

### Complete Confusion Matrix Analysis with All Metrics

```python
import numpy as np
from sklearn.metrics import (confusion_matrix, accuracy_score, precision_score,
                             recall_score, f1_score, classification_report)

# Simulate predictions for a disease screening test
np.random.seed(42)
n = 1000
y_true = np.array([1]*50 + [0]*950)  # 5% disease prevalence

# Model predictions (imperfect)
y_pred = y_true.copy()
# Introduce errors
y_pred[45:50] = 0   # 5 false negatives (miss 5 out of 50 sick patients)
y_pred[950:960] = 1  # 10 false positives (flag 10 healthy as sick)

cm = confusion_matrix(y_true, y_pred)
TN, FP, FN, TP = cm.ravel()

print("Confusion Matrix:")
print(f"  TN={TN}  FP={FP}")
print(f"  FN={FN}   TP={TP}")

print(f"\nMetrics (manual calculation):")
print(f"  Accuracy    = (TP+TN)/(Total) = ({TP}+{TN})/{n} = {(TP+TN)/n:.4f}")
print(f"  Precision   = TP/(TP+FP) = {TP}/({TP}+{FP}) = {TP/(TP+FP):.4f}")
print(f"  Recall      = TP/(TP+FN) = {TP}/({TP}+{FN}) = {TP/(TP+FN):.4f}")
print(f"  Specificity = TN/(TN+FP) = {TN}/({TN}+{FP}) = {TN/(TN+FP):.4f}")
f1 = 2*TP/(2*TP+FP+FN)
print(f"  F1 Score    = 2TP/(2TP+FP+FN) = {f1:.4f}")

print(f"\nMetrics (sklearn):")
print(f"  Accuracy:  {accuracy_score(y_true, y_pred):.4f}")
print(f"  Precision: {precision_score(y_true, y_pred):.4f}")
print(f"  Recall:    {recall_score(y_true, y_pred):.4f}")
print(f"  F1:        {f1_score(y_true, y_pred):.4f}")

print(f"\nClassification Report:")
print(classification_report(y_true, y_pred, target_names=['Healthy', 'Sick']))

print("Key Insight: Accuracy is 98.5% but we miss 10% of sick patients!")
print("In medical screening, Recall (90%) is more important than Accuracy.")
```

This example demonstrates why accuracy alone is misleading on imbalanced data. With 5% disease prevalence, accuracy is 98.5% (looks great!), but the model misses 10% of sick patients (recall = 90%). In medical screening, missing a sick patient is far worse than a false alarm. Always look at precision, recall, and F1-score.

**Output:**

```
Confusion Matrix:
  TN=940  FP=10
  FN=5   TP=45

Metrics (manual calculation):
  Accuracy    = (TP+TN)/(Total) = (45+940)/1000 = 0.9850
  Precision   = TP/(TP+FP) = 45/(45+10) = 0.8182
  Recall      = TP/(TP+FN) = 45/(45+5) = 0.9000
  Specificity = TN/(TN+FP) = 940/(940+10) = 0.9895
  F1 Score    = 2TP/(2TP+FP+FN) = 0.8571

Metrics (sklearn):
  Accuracy:  0.9850
  Precision: 0.8182
  Recall:    0.9000
  F1:        0.8571

Classification Report:
              precision    recall  f1-score   support

     Healthy       0.99      0.99      0.99       950
        Sick       0.82      0.90      0.86        50

    accuracy                           0.98      1000
   macro avg       0.91      0.95      0.93      1000
weighted avg       0.99      0.98      0.99      1000

Key Insight: Accuracy is 98.5% but we miss 10% of sick patients!
In medical screening, Recall (90%) is more important than Accuracy.
```

### ROC Curve and AUC Visualization

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import roc_curve, auc, roc_auc_score
from sklearn.datasets import make_classification

# Generate data
X, y = make_classification(n_samples=500, n_features=10,
                            n_informative=5, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

# Train multiple models
models = {
    'Logistic Regression': LogisticRegression(random_state=42),
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'SVM': SVC(probability=True, random_state=42)
}

plt.figure(figsize=(10, 8))
colors = ['blue', 'green', 'red']

for (name, model), color in zip(models.items(), colors):
    model.fit(X_train_s, y_train)
    y_proba = model.predict_proba(X_test_s)[:, 1]
    
    fpr, tpr, thresholds = roc_curve(y_test, y_proba)
    roc_auc = auc(fpr, tpr)
    
    plt.plot(fpr, tpr, color=color, linewidth=2,
             label=f'{name} (AUC = {roc_auc:.3f})')

# Random classifier line
plt.plot([0, 1], [0, 1], 'k--', linewidth=1, label='Random (AUC = 0.500)')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curves - Model Comparison')
plt.legend(loc='lower right')
plt.grid(True, alpha=0.3)
plt.show()

# Print AUC scores
print("AUC Scores:")
for name, model in models.items():
    y_proba = model.predict_proba(X_test_s)[:, 1]
    print(f"  {name:25s}: {roc_auc_score(y_test, y_proba):.4f}")
```

The ROC curve plots TPR vs FPR at every possible threshold. A perfect classifier hugs the top-left corner (AUC=1.0). A random classifier follows the diagonal (AUC=0.5). AUC is threshold-independent, making it ideal for comparing models. All three models perform well, with Random Forest slightly ahead.

**Output:**

```
AUC Scores:
  Logistic Regression      : 0.9523
  Random Forest            : 0.9712
  SVM                      : 0.9634
```

### K-Fold and Stratified K-Fold Cross-Validation

```python
import numpy as np
from sklearn.model_selection import (KFold, StratifiedKFold, cross_val_score,
                                     cross_validate)
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# Generate imbalanced data
X, y = make_classification(n_samples=500, n_features=10,
                            n_informative=5, weights=[0.9, 0.1],
                            random_state=42)
print(f"Class distribution: {np.bincount(y)}")
print(f"Class 1 ratio: {np.mean(y):.2%}")

model = RandomForestClassifier(n_estimators=100, random_state=42)

# Regular K-Fold
kf = KFold(n_splits=5, shuffle=True, random_state=42)
kf_scores = cross_val_score(model, X, y, cv=kf, scoring='f1')

# Stratified K-Fold (preserves class proportions)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
skf_scores = cross_val_score(model, X, y, cv=skf, scoring='f1')

print(f"\nRegular K-Fold F1 scores:    {np.round(kf_scores, 3)}")
print(f"  Mean: {kf_scores.mean():.4f} +/- {kf_scores.std():.4f}")
print(f"Stratified K-Fold F1 scores: {np.round(skf_scores, 3)}")
print(f"  Mean: {skf_scores.mean():.4f} +/- {skf_scores.std():.4f}")

# Show class distribution per fold
print(f"\nClass 1 count per fold (Stratified):")
for i, (train_idx, test_idx) in enumerate(skf.split(X, y)):
    n_pos = np.sum(y[test_idx])
    n_total = len(test_idx)
    print(f"  Fold {i+1}: {n_pos}/{n_total} positive ({n_pos/n_total:.2%})")

# cross_validate gives train scores too
results = cross_validate(model, X, y, cv=skf,
                         scoring=['accuracy', 'f1', 'roc_auc'],
                         return_train_score=True)

print(f"\nMultiple metrics (Stratified 5-Fold):")
for metric in ['accuracy', 'f1', 'roc_auc']:
    train = results[f'train_{metric}'].mean()
    test = results[f'test_{metric}'].mean()
    print(f"  {metric:10s}: Train={train:.4f}, Test={test:.4f}, Gap={train-test:.4f}")
```

Stratified K-Fold is essential for imbalanced datasets. It ensures each fold has the same class proportion as the full dataset. Regular K-Fold might create folds with very few or no minority class samples. The cross_validate function evaluates multiple metrics simultaneously and shows train vs test scores to detect overfitting.

**Output:**

```
Class distribution: [450  50]
Class 1 ratio: 10.00%

Regular K-Fold F1 scores:    [0.632 0.696 0.667 0.588 0.737]
  Mean: 0.6640 +/- 0.0519
Stratified K-Fold F1 scores: [0.667 0.706 0.696 0.625 0.727]
  Mean: 0.6842 +/- 0.0360

Class 1 count per fold (Stratified):
  Fold 1: 10/100 positive (10.00%)
  Fold 2: 10/100 positive (10.00%)
  Fold 3: 10/100 positive (10.00%)
  Fold 4: 10/100 positive (10.00%)
  Fold 5: 10/100 positive (10.00%)

Multiple metrics (Stratified 5-Fold):
  accuracy  : Train=1.0000, Test=0.9560, Gap=0.0440
  f1        : Train=1.0000, Test=0.6842, Gap=0.3158
  roc_auc   : Train=1.0000, Test=0.9312, Gap=0.0688
```

### GridSearchCV: Systematic Hyperparameter Tuning

```python
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.datasets import make_classification
from sklearn.metrics import classification_report
import time

# Generate data
X, y = make_classification(n_samples=1000, n_features=15,
                            n_informative=8, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Define parameter grid
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [3, 5, 10, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

total_combinations = 1
for values in param_grid.values():
    total_combinations *= len(values)
print(f"Total combinations to try: {total_combinations}")
print(f"With 5-fold CV: {total_combinations * 5} model fits")

# Run GridSearchCV
start = time.time()
grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=5,
    scoring='f1',
    n_jobs=-1,      # Use all CPU cores
    verbose=0,
    return_train_score=True
)
grid.fit(X_train, y_train)
elapsed = time.time() - start

print(f"\nSearch completed in {elapsed:.1f} seconds")
print(f"\nBest parameters: {grid.best_params_}")
print(f"Best CV F1 score: {grid.best_score_:.4f}")

# Evaluate on test set
best_model = grid.best_estimator_
y_pred = best_model.predict(X_test)
print(f"\nTest set results with best model:")
print(classification_report(y_test, y_pred))

# Compare with default parameters
default_model = RandomForestClassifier(random_state=42)
default_model.fit(X_train, y_train)
print(f"Default model test accuracy: {default_model.score(X_test, y_test):.4f}")
print(f"Tuned model test accuracy:   {best_model.score(X_test, y_test):.4f}")
print(f"Improvement: {(best_model.score(X_test, y_test) - default_model.score(X_test, y_test)):.4f}")
```

GridSearchCV exhaustively tries every combination of hyperparameters and evaluates each with 5-fold cross-validation. With 108 combinations and 5 folds, it fits 540 models. n_jobs=-1 parallelizes across CPU cores. The best parameters are chosen based on cross-validation score, not test set performance. The tuned model typically improves 2-5% over defaults.

**Output:**

```
Total combinations to try: 108
With 5-fold CV: 540 model fits

Search completed in 12.3 seconds

Best parameters: {'max_depth': 10, 'min_samples_leaf': 1, 'min_samples_split': 2, 'n_estimators': 200}
Best CV F1 score: 0.9234

Test set results with best model:
              precision    recall  f1-score   support

           0       0.93      0.94      0.94       102
           1       0.93      0.93      0.93        98

    accuracy                           0.93       200
   macro avg       0.93      0.93      0.93       200
weighted avg       0.93      0.93      0.93       200

Default model test accuracy: 0.9100
Tuned model test accuracy:   0.9350
Improvement: 0.0250
```

### RandomizedSearchCV for Faster Tuning

```python
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import RandomizedSearchCV, train_test_split
from sklearn.datasets import make_classification
from scipy.stats import randint, uniform
import time

# Generate data
X, y = make_classification(n_samples=1000, n_features=15,
                            n_informative=8, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Define parameter distributions (not a grid)
param_distributions = {
    'n_estimators': randint(50, 500),       # Random integer between 50 and 500
    'max_depth': [3, 5, 7, 10, 15, 20, None],
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10),
    'max_features': ['sqrt', 'log2', None],
    'bootstrap': [True, False]
}

# RandomizedSearchCV: sample 50 random combinations
start = time.time()
random_search = RandomizedSearchCV(
    RandomForestClassifier(random_state=42),
    param_distributions,
    n_iter=50,          # Try 50 random combinations
    cv=5,
    scoring='f1',
    n_jobs=-1,
    random_state=42,
    return_train_score=True
)
random_search.fit(X_train, y_train)
elapsed = time.time() - start

print(f"RandomizedSearchCV completed in {elapsed:.1f} seconds")
print(f"Combinations tried: 50")
print(f"\nBest parameters: {random_search.best_params_}")
print(f"Best CV F1 score: {random_search.best_score_:.4f}")
print(f"Test accuracy: {random_search.best_estimator_.score(X_test, y_test):.4f}")

# Show top 5 parameter combinations
import pandas as pd
results = pd.DataFrame(random_search.cv_results_)
top5 = results.nsmallest(5, 'rank_test_score')[[
    'params', 'mean_test_score', 'std_test_score', 'rank_test_score'
]]
print(f"\nTop 5 parameter combinations:")
for _, row in top5.iterrows():
    print(f"  Rank {row['rank_test_score']:.0f}: F1={row['mean_test_score']:.4f} "
          f"+/- {row['std_test_score']:.4f}")
```

RandomizedSearchCV is much faster than GridSearchCV for large parameter spaces. Instead of trying every combination, it randomly samples 50 combinations from probability distributions. It often finds near-optimal parameters in a fraction of the time. Use it for initial exploration, then refine with GridSearchCV.

**Output:**

```
RandomizedSearchCV completed in 8.5 seconds
Combinations tried: 50

Best parameters: {'bootstrap': True, 'max_depth': 15, 'max_features': 'sqrt', 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 312}
Best CV F1 score: 0.9287
Test accuracy: 0.9350

Top 5 parameter combinations:
  Rank 1: F1=0.9287 +/- 0.0198
  Rank 2: F1=0.9262 +/- 0.0178
  Rank 3: F1=0.9250 +/- 0.0156
  Rank 4: F1=0.9237 +/- 0.0213
  Rank 5: F1=0.9225 +/- 0.0189
```

### Learning Curves and Validation Curves

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import learning_curve, validation_curve
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# Generate data
X, y = make_classification(n_samples=1000, n_features=10,
                            n_informative=5, random_state=42)

# 1. Learning Curve: score vs training set size
train_sizes, train_scores, test_scores = learning_curve(
    RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42),
    X, y, cv=5,
    train_sizes=np.linspace(0.1, 1.0, 10),
    scoring='accuracy',
    n_jobs=-1
)

plt.figure(figsize=(14, 5))

plt.subplot(1, 2, 1)
plt.fill_between(train_sizes, train_scores.mean(axis=1) - train_scores.std(axis=1),
                 train_scores.mean(axis=1) + train_scores.std(axis=1), alpha=0.1, color='blue')
plt.fill_between(train_sizes, test_scores.mean(axis=1) - test_scores.std(axis=1),
                 test_scores.mean(axis=1) + test_scores.std(axis=1), alpha=0.1, color='red')
plt.plot(train_sizes, train_scores.mean(axis=1), 'b-o', label='Training Score')
plt.plot(train_sizes, test_scores.mean(axis=1), 'r-o', label='Cross-Validation Score')
plt.xlabel('Training Set Size')
plt.ylabel('Accuracy')
plt.title('Learning Curve')
plt.legend()
plt.grid(True, alpha=0.3)

# 2. Validation Curve: score vs hyperparameter
param_range = [1, 2, 3, 5, 7, 10, 15, 20, None]
train_scores_v, test_scores_v = validation_curve(
    RandomForestClassifier(n_estimators=100, random_state=42),
    X, y,
    param_name='max_depth',
    param_range=param_range[:-1],  # exclude None for plotting
    cv=5,
    scoring='accuracy',
    n_jobs=-1
)

plt.subplot(1, 2, 2)
plt.plot(param_range[:-1], train_scores_v.mean(axis=1), 'b-o', label='Training Score')
plt.plot(param_range[:-1], test_scores_v.mean(axis=1), 'r-o', label='Cross-Validation Score')
plt.xlabel('max_depth')
plt.ylabel('Accuracy')
plt.title('Validation Curve (max_depth)')
plt.legend()
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("Learning Curve Interpretation:")
print("  - If both scores converge high: model is good")
print("  - If gap between train/test is large: overfitting")
print("  - If both scores are low: underfitting")
print("\nValidation Curve Interpretation:")
print("  - Left (low depth): both scores low -> underfitting")
print("  - Right (high depth): train high, test drops -> overfitting")
print("  - Sweet spot: where test score peaks")
```

Learning curves show how performance changes with more training data. If the gap between train and test scores is large, the model is overfitting (more data would help). Validation curves show how performance changes with a hyperparameter. The peak in cross-validation score indicates the optimal hyperparameter value.

**Output:**

```
Learning Curve Interpretation:
  - If both scores converge high: model is good
  - If gap between train/test is large: overfitting
  - If both scores are low: underfitting

Validation Curve Interpretation:
  - Left (low depth): both scores low -> underfitting
  - Right (high depth): train high, test drops -> overfitting
  - Sweet spot: where test score peaks
```

### Complete Example: Tuning Random Forest with GridSearchCV on Real Data

```python
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import (GridSearchCV, train_test_split,
                                     StratifiedKFold)
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (classification_report, roc_auc_score,
                             confusion_matrix)
from sklearn.datasets import make_classification

# Generate realistic dataset
X, y = make_classification(
    n_samples=2000, n_features=20, n_informative=10,
    n_redundant=5, weights=[0.7, 0.3], random_state=42
)

print(f"Dataset: {X.shape[0]} samples, {X.shape[1]} features")
print(f"Class distribution: {np.bincount(y)}")

# Split into train+val and final test
X_trainval, X_test, y_trainval, y_test = train_test_split(
    X, y, test_size=0.15, random_state=42, stratify=y
)

# Step 1: Baseline model
baseline = RandomForestClassifier(random_state=42)
baseline.fit(X_trainval, y_trainval)
print(f"\nBaseline test accuracy: {baseline.score(X_test, y_test):.4f}")
print(f"Baseline test AUC: {roc_auc_score(y_test, baseline.predict_proba(X_test)[:, 1]):.4f}")

# Step 2: GridSearchCV tuning
param_grid = {
    'n_estimators': [100, 200],
    'max_depth': [5, 10, 15],
    'min_samples_split': [2, 5],
    'min_samples_leaf': [1, 2],
    'max_features': ['sqrt', 'log2']
}

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)

grid = GridSearchCV(
    RandomForestClassifier(random_state=42),
    param_grid,
    cv=cv,
    scoring='roc_auc',
    n_jobs=-1,
    return_train_score=True
)
grid.fit(X_trainval, y_trainval)

print(f"\nBest CV AUC: {grid.best_score_:.4f}")
print(f"Best params: {grid.best_params_}")

# Step 3: Final evaluation on test set
best_model = grid.best_estimator_
y_pred = best_model.predict(X_test)
y_proba = best_model.predict_proba(X_test)[:, 1]

print(f"\nFinal Test Results:")
print(f"Accuracy: {best_model.score(X_test, y_test):.4f}")
print(f"AUC: {roc_auc_score(y_test, y_proba):.4f}")
print(f"\nClassification Report:")
print(classification_report(y_test, y_pred))

print(f"\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Step 4: Check for overfitting
cv_train = grid.cv_results_['mean_train_score'][grid.best_index_]
cv_test = grid.cv_results_['mean_test_score'][grid.best_index_]
print(f"\nOverfitting check:")
print(f"  CV Train AUC: {cv_train:.4f}")
print(f"  CV Test AUC:  {cv_test:.4f}")
print(f"  Gap: {cv_train - cv_test:.4f} {'(OK)' if cv_train - cv_test < 0.05 else '(might overfit)'}")
```

This end-to-end workflow follows best practices: (1) separate final test set, (2) baseline model for comparison, (3) GridSearchCV with Stratified K-Fold on train+val, (4) final evaluation on held-out test set, (5) overfitting check (train-test gap). The final test set is NEVER used during tuning. Scoring='roc_auc' is better than 'accuracy' for imbalanced data.

**Output:**

```
Dataset: 2000 samples, 20 features
Class distribution: [1400  600]

Baseline test accuracy: 0.9133
Baseline test AUC: 0.9612

Best CV AUC: 0.9687
Best params: {'max_depth': 15, 'max_features': 'sqrt', 'min_samples_leaf': 1, 'min_samples_split': 2, 'n_estimators': 200}

Final Test Results:
Accuracy: 0.9333
AUC: 0.9734

Classification Report:
              precision    recall  f1-score   support

           0       0.95      0.96      0.95       210
           1       0.90      0.88      0.89        90

    accuracy                           0.93       300
   macro avg       0.92      0.92      0.92       300
weighted avg       0.93      0.93      0.93       300

Confusion Matrix:
[[201   9]
 [ 11  79]]

Overfitting check:
  CV Train AUC: 1.0000
  CV Test AUC:  0.9687
  Gap: 0.0313 (OK)
```

## Common Mistakes

### Tuning Hyperparameters on the Test Set (Data Leakage)

**Wrong:**

```
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(X, y)

# WRONG: using test set to choose hyperparameters
best_acc = 0
for depth in [3, 5, 10, 20]:
    model = RandomForestClassifier(max_depth=depth)
    model.fit(X_train, y_train)
    acc = model.score(X_test, y_test)  # Evaluating on test set!
    if acc > best_acc:
        best_acc = acc
        best_depth = depth
# The test set is now "seen" -- the reported accuracy is optimistic
```

No error, but you have leaked test data into the model selection process. The reported test accuracy is overly optimistic and will not reflect real-world performance.

**Correct:**

```
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(X, y)

# CORRECT: use cross-validation on training set for tuning
param_grid = {'max_depth': [3, 5, 10, 20]}
grid = GridSearchCV(RandomForestClassifier(), param_grid, cv=5)
grid.fit(X_train, y_train)  # Only uses training data!

# Final evaluation on test set (only once!)
final_acc = grid.best_estimator_.score(X_test, y_test)
print(f"Best depth: {grid.best_params_['max_depth']}")
print(f"Final test accuracy: {final_acc:.4f}")
```

The test set must be used ONLY for final evaluation, never for hyperparameter selection. Use cross-validation on the training set to choose hyperparameters. If you evaluate multiple configurations on the test set and pick the best, the test score becomes biased upward.

### Not Using Stratified Splitting for Imbalanced Data

**Wrong:**

```
from sklearn.model_selection import train_test_split

# 5% positive class
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
# The test set might have 0% or 15% positive -- very unreliable
```

No error, but without stratification, the class proportions in train and test sets can vary dramatically, especially with small positive class ratios. The model might not see enough positive examples during training.

**Correct:**

```
from sklearn.model_selection import train_test_split, StratifiedKFold

# Always stratify for classification, especially imbalanced data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y  # Preserves class ratios
)

# For cross-validation, use StratifiedKFold
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
```

stratify=y ensures both train and test sets have the same class proportions as the original data. Without it, a random split might put most positive samples in one set. StratifiedKFold does the same for cross-validation folds.

### Using Cross-Validation Score as Final Test Score

**Wrong:**

```
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5)
print(f"Final model accuracy: {scores.mean():.4f}")  # This is NOT the final test score!

# You used ALL the data for cross-validation
# There is no held-out test set for final evaluation
```

Cross-validation on the full dataset gives an estimate of performance, but there is no truly unseen data left for final validation. If you used CV scores to choose between models, the reported score is biased.

**Correct:**

```
from sklearn.model_selection import cross_val_score, train_test_split

# Hold out a final test set first
X_trainval, X_test, y_trainval, y_test = train_test_split(
    X, y, test_size=0.15, random_state=42, stratify=y
)

# Use CV only on train+val for model selection
scores = cross_val_score(model, X_trainval, y_trainval, cv=5)
print(f"CV estimate: {scores.mean():.4f}")

# Final evaluation on held-out test set
model.fit(X_trainval, y_trainval)
final_score = model.score(X_test, y_test)
print(f"Final test score: {final_score:.4f}")
```

Always hold out a final test set before any cross-validation or model selection. Use CV on the remaining data for hyperparameter tuning and model comparison. Report the final test set score as your model's expected real-world performance.

### Ignoring the Bias-Variance Tradeoff

**Wrong:**

```
from sklearn.tree import DecisionTreeClassifier

# "My training accuracy is 100%, the model is perfect!"
model = DecisionTreeClassifier()  # max_depth=None (default)
model.fit(X_train, y_train)
print(f"Train accuracy: {model.score(X_train, y_train)}")  # 1.0
# But test accuracy might be 0.75 -- severe overfitting!
```

100% training accuracy often means overfitting. The model memorized training data including noise. Test accuracy will be much lower.

**Correct:**

```
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import cross_val_score

# Check both training and cross-validation scores
for depth in [2, 5, 10, None]:
    model = DecisionTreeClassifier(max_depth=depth, random_state=42)
    model.fit(X_train, y_train)
    train_acc = model.score(X_train, y_train)
    cv_acc = cross_val_score(model, X_train, y_train, cv=5).mean()
    gap = train_acc - cv_acc
    print(f"depth={str(depth):4s}: train={train_acc:.3f}, CV={cv_acc:.3f}, gap={gap:.3f}")
# Choose the depth where CV score is highest (not training score)
```

Never judge a model by training accuracy alone. Always compare training and validation/test scores. A large gap indicates overfitting. Use cross-validation to get a reliable estimate. The best model maximizes validation score, not training score.

## Summary

- Accuracy alone is misleading on imbalanced datasets. A model predicting all negatives on 99% negative data gets 99% accuracy but 0% recall. Always use precision, recall, F1, and ROC-AUC.
- The confusion matrix shows TP, TN, FP, FN. Precision = TP/(TP+FP) (how many positive predictions are correct). Recall = TP/(TP+FN) (how many actual positives are detected).
- F1 score is the harmonic mean of precision and recall: F1 = 2*P*R/(P+R). It is low when either P or R is low. Use it when you need a single metric balancing both.
- ROC curve plots TPR vs FPR at all thresholds. AUC (area under ROC) is threshold-independent: 1.0=perfect, 0.5=random. AUC is the best single metric for comparing models.
- K-Fold cross-validation splits data into K parts, trains on K-1 and tests on 1, rotating K times. Stratified K-Fold preserves class proportions. Use K=5 or K=10.
- Overfitting: high training score, low test score (model too complex). Underfitting: both scores low (model too simple). The bias-variance tradeoff governs this.
- GridSearchCV tries every combination of hyperparameters with cross-validation. Exhaustive but slow. RandomizedSearchCV samples random combinations -- faster for large search spaces.
- Always hold out a final test set that is NEVER used during model selection or hyperparameter tuning. Use cross-validation only on the training portion.
- Learning curves (score vs training size) diagnose whether more data would help. Validation curves (score vs hyperparameter) find the optimal complexity.
- The proper workflow: (1) Split data into train+val and test. (2) Use CV on train+val for model selection. (3) Tune with GridSearchCV. (4) Evaluate ONCE on test set.
- For imbalanced datasets, always use stratify=y in train_test_split and StratifiedKFold for cross-validation. Score with F1 or ROC-AUC, not accuracy.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/model-evaluation-and-tuning/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/model-evaluation-and-tuning/practice/*
