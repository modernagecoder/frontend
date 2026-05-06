---
title: "Practice: Ensemble Methods - Boosting (XGBoost, LightGBM, CatBoost)"
description: "56 practice problems for Ensemble Methods - Boosting (XGBoost, LightGBM, CatBoost) in AI and Machine Learning"
slug: ensemble-methods-and-boosting-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ensemble-methods-and-boosting/practice
category: "AI and Machine Learning"
---
# Practice: Ensemble Methods - Boosting (XGBoost, LightGBM, CatBoost)

**Total questions:** 56

## Topic-Specific Questions

### Q1. [Easy] What is ensemble learning? Give a real-world analogy.

*Hint:* Think about combining opinions from multiple people versus relying on one person.

**Answer:** Ensemble learning combines multiple individual models (weak learners) to produce a single stronger prediction. **Analogy**: It is like asking 100 doctors for a diagnosis instead of just one. Each doctor might make occasional mistakes, but the majority opinion is almost always correct. Similarly, combining many imperfect models produces a more accurate and robust prediction than any single model alone.

The mathematical foundation is the 'wisdom of crowds': when individual errors are somewhat independent, averaging predictions reduces the overall error. This works because different models make different mistakes, and combining them cancels out individual biases.

### Q2. [Easy] What is the difference between bagging and boosting?

*Hint:* One trains models independently, the other trains them sequentially.

**Answer:** **Bagging**: Trains multiple models **independently** on random subsets of data, then averages their predictions. Each model has equal weight. Reduces variance (overfitting). Example: Random Forest. **Boosting**: Trains models **sequentially**, where each new model focuses on correcting the errors of previous models. Later models may have higher weight. Reduces both bias and variance. Examples: XGBoost, LightGBM, CatBoost.

Bagging is parallel (models do not talk to each other). Boosting is sequential (each model learns from the mistakes of the previous one). Boosting is generally more powerful but more prone to overfitting and slower to train.

### Q3. [Easy] What does the learning_rate parameter control in gradient boosting?

*Hint:* It controls how much each tree contributes to the final prediction.

**Answer:** The learning rate (also called eta or shrinkage) controls the **contribution of each tree** to the ensemble. With learning_rate=0.1, each tree's prediction is multiplied by 0.1 before being added. A smaller learning rate means each tree has less impact, requiring more trees for the same performance but typically generalizing better. Common values: 0.01 to 0.3.

Think of it as the step size in gradient descent. Small steps (low learning rate) take longer to reach the optimum but are less likely to overshoot. Large steps (high learning rate) are faster but risk missing the optimum or oscillating.

### Q4. [Easy] Name three advantages of XGBoost over plain decision trees.

*Hint:* Think about regularization, handling missing values, and combining multiple trees.

**Answer:** 1. **Ensemble of trees**: XGBoost combines hundreds of trees, each correcting the errors of the previous ones, producing much more accurate predictions than a single tree. 2. **Regularization**: L1 and L2 regularization on leaf weights prevent overfitting, which single decision trees are prone to. 3. **Missing value handling**: XGBoost learns the optimal direction for missing values at each split, eliminating the need for manual imputation.

Other advantages include parallel processing (faster training), column subsampling (reduces overfitting like Random Forest), and early stopping (automatically finds the optimal number of trees).

### Q5. [Easy] What is the output?

```
from xgboost import XGBClassifier
import numpy as np

X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
y = np.array([0, 0, 1, 1])

xgb = XGBClassifier(n_estimators=10, random_state=42, eval_metric='logloss')
xgb.fit(X, y)
print(xgb.predict(np.array([[2, 3], [6, 7]])))
```

*Hint:* Points near (1,2) and (3,4) should be class 0. Points near (5,6) and (7,8) should be class 1.

**Answer:** `[0 1]`

XGBoost learns that low-value features correspond to class 0 and high-value features correspond to class 1. (2,3) is near the class 0 cluster, so it predicts 0. (6,7) is near the class 1 cluster, so it predicts 1.

### Q6. [Medium] Explain how gradient boosting builds trees sequentially. What does each new tree try to learn?

*Hint:* Each tree learns the errors (residuals) of the current ensemble.

**Answer:** Gradient boosting starts with a simple prediction (e.g., the mean). Then: (1) Compute **residuals** = actual - current prediction. (2) Train a new tree to **predict these residuals** (the errors). (3) Add the new tree's predictions (multiplied by the learning rate) to the running prediction. (4) Repeat. Each new tree does not predict the original target -- it predicts what the current ensemble got wrong. By adding corrections iteratively, the ensemble gradually improves its predictions.

The 'gradient' in gradient boosting refers to the fact that the residuals are the negative gradient of the loss function. The algorithm is doing gradient descent in function space: each tree is a step that reduces the loss.

### Q7. [Medium] What is the difference between depth-wise and leaf-wise tree growth? Which algorithm uses which?

*Hint:* XGBoost grows all leaves at the same level. LightGBM grows the leaf that reduces loss the most.

**Answer:** **Depth-wise (level-wise)**: Grows all leaves at the same depth before moving to the next level. Produces balanced trees. Used by **XGBoost**. **Leaf-wise**: Grows the single leaf that achieves the maximum loss reduction, regardless of depth. Produces unbalanced trees that can be deeper on one side. Used by **LightGBM**. Leaf-wise growth is typically more accurate per tree (larger loss reduction per split) but can overfit more easily, which is why LightGBM uses num_leaves as the primary complexity control.

Depth-wise is simpler and less prone to overfitting but may waste computation by splitting uninformative leaves. Leaf-wise is more efficient (always splits the most informative leaf) but needs careful regularization through num_leaves to prevent overfitting.

### Q8. [Medium] Why is XGBoost's native handling of missing values an advantage? How does it work?

*Hint:* XGBoost learns which direction (left or right) to send missing values at each tree split.

**Answer:** When a feature has missing values at a particular split, XGBoost tries sending all missing values to the **left child** and computes the gain, then tries sending them to the **right child** and computes the gain. It picks the direction that gives the best gain. This means: (1) You do not need to impute missing values manually. (2) The optimal treatment of missing data is learned from the data itself. (3) Different splits can handle missing values differently (left at one split, right at another). This is better than a single imputation strategy because the best treatment of missingness can vary across the feature space.

Traditional approaches like mean imputation apply the same value everywhere. XGBoost's approach is adaptive: at each split point, it learns the best default direction for missing values based on the actual relationship between the feature and the target.

### Q9. [Medium] Write code to train an XGBoost classifier with early stopping on the breast cancer dataset. Print the number of trees used and the test accuracy.

*Hint:* Use XGBClassifier with n_estimators=500, early_stopping_rounds=20, and eval_set.

**Answer:** ```
from xgboost import XGBClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split

data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42)

xgb = XGBClassifier(
    n_estimators=500,
    learning_rate=0.05,
    max_depth=5,
    eval_metric='logloss',
    early_stopping_rounds=20,
    random_state=42
)
xgb.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=False)

print(f"Trees used: {xgb.best_iteration + 1} out of 500")
print(f"Test accuracy: {xgb.score(X_test, y_test):.4f}")
```

Early stopping monitors the eval_set metric. If no improvement occurs for early_stopping_rounds consecutive rounds, training stops. best_iteration gives the optimal tree count. This prevents overfitting and is considered mandatory practice for gradient boosting.

### Q10. [Medium] What are the three main advantages of LightGBM over XGBoost?

*Hint:* Think about speed, tree growth strategy, and handling large datasets.

**Answer:** 1. **Faster training**: Histogram-based splitting is O(n) compared to XGBoost's sort-based splitting which is O(n log n). On large datasets, LightGBM can be 5-10x faster. 2. **Leaf-wise growth**: Produces more accurate trees per iteration because it always splits the most informative leaf, unlike XGBoost which splits all leaves at the same depth. 3. **Memory efficiency**: GOSS (smart sampling) and EFB (feature bundling) reduce the effective dataset size, allowing LightGBM to handle very large datasets that XGBoost might struggle with.

LightGBM was specifically designed to address XGBoost's scalability limitations. For datasets with millions of rows or thousands of features, LightGBM is often the only practical choice among the three. However, on small to medium datasets, the differences are negligible.

### Q11. [Hard] Explain the concept of regularization in XGBoost. What do reg_alpha (L1) and reg_lambda (L2) regularize?

*Hint:* They regularize the leaf weight values, not the feature weights like in linear models.

**Answer:** **reg_lambda (L2)** adds a penalty proportional to the **square of leaf weights** to the objective function. This shrinks leaf values toward zero, preventing any single leaf from having an extreme prediction. It makes the model smoother and more robust. **reg_alpha (L1)** adds a penalty proportional to the **absolute value of leaf weights**. This encourages sparsity -- some leaves may get exactly zero weight, effectively pruning parts of the tree. In XGBoost's objective: `Objective = Loss + gamma*T + 0.5*lambda*sum(w^2) + alpha*sum(|w|)` where T is the number of leaves and w are leaf weights. gamma penalizes tree complexity (more leaves), while lambda and alpha penalize large leaf values.

Unlike linear models where regularization shrinks feature coefficients, in XGBoost, regularization shrinks the predicted values at each leaf. This prevents the model from making extreme predictions for rare data patterns, which is a common cause of overfitting in gradient boosting.

### Q12. [Hard] What is CatBoost's 'ordered boosting' and what problem does it solve?

*Hint:* It addresses target leakage that occurs when computing target statistics for categorical encoding.

**Answer:** In standard gradient boosting with target encoding, the target statistics (e.g., mean target per category) are computed using all training data including the current sample. This creates **prediction shift** -- a form of target leakage where the model's prediction for a sample is partially based on that sample's own target value. CatBoost's ordered boosting solves this by maintaining a **random permutation** of the training data. When computing target statistics for sample i, it only uses samples that come before i in the permutation. This ensures no sample's target value leaks into its own encoding, producing more honest estimates and better generalization.

Prediction shift is subtle but impactful. It causes gradient boosting to appear to perform better on training data than it actually will on new data. Ordered boosting corrects this bias, which is why CatBoost often achieves better generalization with less tuning compared to XGBoost.

### Q13. [Hard] Write code to use GridSearchCV to find the best max_depth and learning_rate for XGBoost on the breast cancer dataset.

*Hint:* Define a param_grid with max_depth (3, 5, 7) and learning_rate (0.01, 0.05, 0.1). Use GridSearchCV with cv=5.

**Answer:** ```
from xgboost import XGBClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, GridSearchCV

data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42)

param_grid = {
    'max_depth': [3, 5, 7],
    'learning_rate': [0.01, 0.05, 0.1]
}

grid = GridSearchCV(
    XGBClassifier(n_estimators=200, random_state=42, eval_metric='logloss'),
    param_grid, cv=5, scoring='accuracy', n_jobs=-1
)
grid.fit(X_train, y_train)

print(f"Best params: {grid.best_params_}")
print(f"Best CV accuracy: {grid.best_score_:.4f}")
print(f"Test accuracy: {grid.score(X_test, y_test):.4f}")
```

GridSearchCV tests all 9 combinations (3 depths x 3 learning rates), each with 5-fold cross-validation (45 model fits total). It finds the combination that maximizes CV accuracy. n_jobs=-1 parallelizes across all CPU cores.

### Q14. [Hard] Vikram is deciding between XGBoost, LightGBM, and CatBoost for his project. His dataset has 5 million rows, 200 features, and 30 of those features are categorical. Which algorithm should he use and why?

*Hint:* Consider dataset size, number of categorical features, and training speed.

**Answer:** **CatBoost** is the best choice because: (1) 30 categorical features is a significant portion. CatBoost handles them natively with ordered target encoding, avoiding the need for one-hot encoding (which would create potentially hundreds of sparse features) or label encoding (which creates false ordinal relationships). (2) While LightGBM is generally faster, CatBoost's native categorical handling avoids the preprocessing overhead. (3) On large datasets with many categoricals, CatBoost typically achieves the best accuracy with minimal tuning. **Alternative**: If training speed is the top priority and categoricals have low cardinality (few unique values), LightGBM with one-hot encoding could be faster.

The choice depends on the data characteristics. Many categoricals = CatBoost. Very large dataset with few categoricals = LightGBM. General purpose = XGBoost. In practice, training all three and comparing on a validation set takes minimal extra effort and ensures the best choice.

### Q15. [Hard] Explain what subsample and colsample_bytree do in XGBoost and why they help prevent overfitting.

*Hint:* They introduce randomness into each tree, similar to Random Forest's approach.

**Answer:** **subsample** (0.5-1.0): Each tree is trained on a random fraction of the training data. With subsample=0.8, each tree sees only 80% of the rows, making each tree slightly different and reducing the chance of memorizing specific training patterns. **colsample_bytree** (0.3-1.0): Each tree only considers a random subset of features. With colsample_bytree=0.8, each tree uses only 80% of the features, forcing the model to learn from different feature combinations. Both introduce **stochasticity** that prevents the model from overfitting to specific patterns in the full training set. This is the same principle as Random Forest's random subspace method. Combined, they significantly reduce overfitting, especially on small or noisy datasets.

Without subsampling, every tree sees the same data and features, making trees more correlated and the ensemble less diverse. By introducing randomness, each tree captures a slightly different view of the data, and their combination is more robust.

### Q16. [Easy] What is the output?

```
from xgboost import XGBClassifier

xgb = XGBClassifier(n_estimators=100, max_depth=3)
print(xgb.get_params()['max_depth'])
print(xgb.get_params()['n_estimators'])
```

*Hint:* get_params() returns all hyperparameters as a dictionary.

**Answer:** `3`
`100`

get_params() returns the hyperparameters we set (and defaults for others). max_depth=3 means each tree is shallow (at most 3 levels deep), and n_estimators=100 means 100 trees in the ensemble.

### Q17. [Medium] Priya has a dataset with 50 numerical features and 10 categorical features (each with 100+ categories). She needs the best accuracy. Which boosting library should she choose and why?

*Hint:* Consider how each library handles high-cardinality categorical features.

**Answer:** **CatBoost** is the best choice because: (1) 10 categorical features with 100+ categories each would require one-hot encoding for XGBoost/LightGBM, creating 1000+ sparse features. (2) CatBoost handles these natively using ordered target encoding, preserving the information without the sparsity problem. (3) CatBoost's encoding is provably unbiased (no target leakage), unlike manual target encoding. For XGBoost/LightGBM, one-hot encoding high-cardinality categoricals creates very sparse data that can hurt tree-based model performance.

High-cardinality categoricals (100+ unique values per feature) are CatBoost's sweet spot. One-hot encoding would explode the feature space. Label encoding would create false ordinal relationships. CatBoost's internal encoding handles this elegantly.

### Q18. [Hard] Write code to train XGBoost on the breast cancer dataset with 5-fold cross-validation and print the mean and standard deviation of accuracy scores.

*Hint:* Use cross_val_score with XGBClassifier and cv=5.

**Answer:** ```
from xgboost import XGBClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score

data = load_breast_cancer()
xgb = XGBClassifier(n_estimators=100, max_depth=5, learning_rate=0.1,
                    random_state=42, eval_metric='logloss')

scores = cross_val_score(xgb, data.data, data.target, cv=5, scoring='accuracy')
print(f"CV Scores: {scores.round(4)}")
print(f"Mean: {scores.mean():.4f} +/- {scores.std():.4f}")
```

Cross-validation provides a more reliable estimate of model performance than a single train-test split. The standard deviation tells you how stable the model is across different data splits. A small std (< 0.02) indicates consistent performance.

### Q19. [Easy] What does n_estimators mean in XGBoost?

*Hint:* It is the number of boosting rounds.

**Answer:** **n_estimators** is the number of boosting rounds, which equals the number of trees in the ensemble. Each round adds one decision tree that corrects the errors of the previous trees. More trees generally improve performance up to a point, after which they cause overfitting. Use early stopping to find the optimal number automatically.

With n_estimators=100, the ensemble has 100 trees. The final prediction is the sum of all 100 trees' predictions (weighted by the learning rate). Too few trees = underfitting. Too many = overfitting. Early stopping finds the sweet spot.

### Q20. [Easy] What is a boosting "round" or "iteration" in XGBoost?

*Hint:* Each round adds one more tree to the ensemble.

**Answer:** One boosting round trains one additional decision tree and adds its predictions (scaled by the learning rate) to the current ensemble. After n_estimators rounds, the ensemble has n_estimators trees.

Each round reduces the residual error. Early rounds make large corrections, later rounds make fine-tuning adjustments.

## Mixed Questions

### Q1. [Easy] Why is gradient boosting called 'gradient' boosting?

*Hint:* Think about how it uses gradients to find the direction of improvement.

**Answer:** It is called 'gradient' boosting because each new tree is trained on the **negative gradient of the loss function** (i.e., the residuals). This is equivalent to performing gradient descent in function space: each tree is a step that reduces the overall loss. Just as gradient descent finds the minimum of a function by following the negative gradient, gradient boosting finds the best prediction function by adding trees that follow the negative gradient of the loss.

For squared error loss, the negative gradient is simply the residual (actual - predicted). For other loss functions (log loss, huber loss), the negative gradient takes a different form but the principle is the same: each tree corrects the errors of the current ensemble in the direction that reduces loss the most.

### Q2. [Easy] What is the output?

```
from xgboost import XGBClassifier

xgb = XGBClassifier(n_estimators=100, max_depth=5)
print(type(xgb))
print(xgb.get_params()['n_estimators'])
print(xgb.get_params()['max_depth'])
```

*Hint:* XGBClassifier is a class, and get_params() returns the hyperparameters.

**Answer:** ``
`100`
`5`

XGBClassifier is an sklearn-compatible estimator. get_params() returns a dictionary of all hyperparameters, including those not explicitly set (they have default values).

### Q3. [Easy] What is early stopping and why is it important for gradient boosting?

*Hint:* It stops training when the model stops improving on validation data.

**Answer:** Early stopping monitors the model's performance on a **validation set** during training. If the performance does not improve for a specified number of rounds (early_stopping_rounds), training stops. It is important because: (1) It **automatically finds the optimal number of trees**, preventing overfitting. (2) It **saves computation time** by not training unnecessary trees. (3) It acts as a form of **regularization**. Without early stopping, you must guess n_estimators, and too many trees cause overfitting while too few cause underfitting.

Always use early stopping with gradient boosting. Set n_estimators to a large number (e.g., 5000) and let early stopping find the right number. This is more reliable than trying to guess n_estimators manually.

### Q4. [Medium] What is the output?

```
from xgboost import XGBClassifier
import numpy as np

X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
y = np.array([0, 0, 1, 1])

xgb = XGBClassifier(n_estimators=50, random_state=42, eval_metric='logloss')
xgb.fit(X, y)
probs = xgb.predict_proba(np.array([[4, 5]]))
print(f"Shape: {probs.shape}")
print(f"Class probabilities: {probs.round(3)}")
```

*Hint:* predict_proba returns probabilities for each class. Point (4,5) is between the two clusters.

**Answer:** `Shape: (1, 2)`
`Class probabilities: [[0.3xx 0.6xx]]` (approximately, class 1 has higher probability since (4,5) is closer to the class 1 region)

predict_proba returns a 2D array with shape (n_samples, n_classes). For binary classification, column 0 is P(class=0) and column 1 is P(class=1). The point (4,5) is in the middle but slightly closer to the class 1 cluster, so class 1 probability is higher.

### Q5. [Medium] Write code to extract and display the top 5 most important features from a trained XGBoost model on the Iris dataset.

*Hint:* Use xgb.feature_importances_ and sort them.

**Answer:** ```
from xgboost import XGBClassifier
from sklearn.datasets import load_iris
import numpy as np

iris = load_iris()
xgb = XGBClassifier(n_estimators=100, random_state=42, eval_metric='mlogloss')
xgb.fit(iris.data, iris.target)

importances = xgb.feature_importances_
sorted_idx = np.argsort(importances)[::-1]

print("Feature importance ranking:")
for i, idx in enumerate(sorted_idx):
    print(f"  {i+1}. {iris.feature_names[idx]}: {importances[idx]:.4f}")
```

feature_importances_ returns the importance of each feature based on how often it was used in splits and how much it reduced the loss. Sorting by importance shows which features drive predictions. For Iris, petal width and petal length are typically the most important.

### Q6. [Medium] What does scale_pos_weight do in XGBoost and when should you use it?

*Hint:* It handles class imbalance by weighting the minority class.

**Answer:** **scale_pos_weight** controls the balance of positive and negative weights in the loss function. Setting it to the ratio of negative to positive samples (e.g., 950/50 = 19 for a 95%/5% split) tells XGBoost to weight positive (minority) class errors 19x more than negative class errors. Use it when your dataset has **class imbalance** and the minority class is important (e.g., fraud detection where frauds are rare but must be caught). Without it, the model may learn to predict the majority class for everything, achieving high accuracy but zero recall on the minority class.

scale_pos_weight is equivalent to oversampling the minority class by that factor. For LightGBM, use is_unbalance=True for automatic handling. For CatBoost, use auto_class_weights='Balanced'. Other approaches include SMOTE or adjusting the classification threshold.

### Q7. [Medium] Ananya trains XGBoost with learning_rate=0.5 and 50 trees. Her training accuracy is 99% but test accuracy is 72%. What should she change?

*Hint:* The large gap between training and test accuracy indicates overfitting.

**Answer:** The 27% gap between train (99%) and test (72%) accuracy indicates **severe overfitting**. Ananya should: (1) **Reduce learning_rate** to 0.05 and increase n_estimators (with early stopping). (2) **Reduce max_depth** (e.g., from default 6 to 3-4). (3) **Add regularization**: increase reg_lambda (L2) or reg_alpha (L1). (4) **Increase subsampling**: set subsample=0.7 and colsample_bytree=0.7. (5) **Increase min_child_weight**: prevents splits on very small leaf groups. All these changes reduce model complexity and the training accuracy will drop, but the test accuracy should improve.

A learning rate of 0.5 means each tree contributes 50% of its prediction, which is very aggressive. The model quickly memorizes the training data. Lower learning rate with more trees (and early stopping) is almost always better for generalization.

### Q8. [Hard] On tabular/structured data, gradient boosting often outperforms deep learning. Why?

*Hint:* Think about inductive biases, sample efficiency, and the structure of tabular data.

**Answer:** Gradient boosting outperforms deep learning on tabular data because: (1) **Better inductive bias**: Trees naturally handle feature interactions, different scales, and missing values. Neural networks require careful feature engineering, scaling, and architecture design. (2) **Sample efficiency**: Trees learn effectively from thousands of samples. Deep learning typically needs millions. Most real-world tabular datasets have thousands to hundreds of thousands of rows. (3) **No spatial/temporal structure**: Deep learning excels when data has spatial structure (images -- CNNs) or temporal structure (text, time series -- RNNs/Transformers). Tabular data has no such structure for deep learning to exploit. (4) **Regularization**: XGBoost has well-understood regularization. Deep learning regularization is harder to tune. (5) **Training speed**: Boosting trains in minutes vs hours for deep learning.

This is a well-established finding in ML research (see Grinsztajn et al. 2022, 'Why do tree-based models still outperform deep learning on tabular data?'). For images, text, and audio, deep learning dominates. For tabular data (CSVs, databases), gradient boosting dominates.

### Q9. [Hard] Write code that trains XGBoost and LightGBM on the same dataset and compares their accuracy and training time.

*Hint:* Use time.time() to measure training duration. Use make_classification for the dataset.

**Answer:** ```
import numpy as np
import time
from xgboost import XGBClassifier
import lightgbm as lgb
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

X, y = make_classification(n_samples=20000, n_features=30, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# XGBoost
start = time.time()
xgb = XGBClassifier(n_estimators=200, max_depth=6, learning_rate=0.1,
                    random_state=42, eval_metric='logloss')
xgb.fit(X_train, y_train)
xgb_time = time.time() - start
xgb_acc = xgb.score(X_test, y_test)

# LightGBM
start = time.time()
lgbm = lgb.LGBMClassifier(n_estimators=200, num_leaves=31, learning_rate=0.1,
                           random_state=42, verbose=-1)
lgbm.fit(X_train, y_train)
lgb_time = time.time() - start
lgb_acc = lgbm.score(X_test, y_test)

print(f"XGBoost:  accuracy={xgb_acc:.4f}, time={xgb_time:.3f}s")
print(f"LightGBM: accuracy={lgb_acc:.4f}, time={lgb_time:.3f}s")
print(f"LightGBM is {xgb_time/lgb_time:.1f}x faster")
```

This comparison shows that LightGBM is typically 2-5x faster than XGBoost on medium-sized datasets, while achieving similar accuracy. On larger datasets, the speed difference increases because LightGBM's histogram-based splitting scales better.

### Q10. [Hard] What is the relationship between max_depth and num_leaves in LightGBM? Why is num_leaves more important?

*Hint:* LightGBM uses leaf-wise growth. The number of leaves directly controls tree complexity.

**Answer:** In LightGBM, **num_leaves** is the primary tree complexity control because LightGBM grows trees **leaf-wise** (always splitting the leaf with the maximum gain), not depth-wise. A tree with num_leaves=31 can have varying depth -- some branches may be deep while others are shallow. max_depth is secondary and acts as a safety limit. The relationship: a balanced binary tree with depth d has 2^d leaves. So num_leaves should generally be **less than 2^max_depth** to avoid overfitting. For example, max_depth=7 supports up to 128 leaves, but setting num_leaves=31 constrains the tree to be much simpler. Setting max_depth=-1 (unlimited) and controlling complexity solely through num_leaves is the recommended approach.

In XGBoost, max_depth is the primary control (depth-wise growth). In LightGBM, num_leaves is the primary control (leaf-wise growth). This is one of the key conceptual differences between the two libraries.

### Q11. [Hard] Write a complete churn prediction pipeline: generate a synthetic dataset with 5 features, engineer 2 new features, train XGBoost with early stopping, and print accuracy, AUC, and top 3 features.

*Hint:* Create features like tenure*monthly_charges and charges_per_tenure. Use classification_report and roc_auc_score.

**Answer:** ```
import numpy as np
import pandas as pd
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, roc_auc_score

np.random.seed(42)
n = 1500
df = pd.DataFrame({
    'tenure': np.random.randint(1, 72, n),
    'monthly_charges': np.random.normal(60, 20, n).round(2),
    'total_charges': np.random.normal(2500, 1200, n).round(2),
    'contract_length': np.random.choice([1, 12, 24], n, p=[0.5, 0.3, 0.2]),
    'support_calls': np.random.poisson(2, n)
})
churn_prob = (0.3*(df['contract_length']==1) + 0.2*(df['tenure']<12) + 0.1*(df['support_calls']>3)).clip(0,1)
df['churned'] = (np.random.random(n) < churn_prob).astype(int)

# Feature engineering
df['charges_per_tenure'] = df['total_charges'] / (df['tenure'] + 1)
df['tenure_x_contract'] = df['tenure'] * df['contract_length']

X = df.drop('churned', axis=1)
y = df['churned']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

xgb = XGBClassifier(n_estimators=500, learning_rate=0.05, max_depth=5,
                    eval_metric='auc', early_stopping_rounds=20, random_state=42)
xgb.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=False)

y_pred = xgb.predict(X_test)
y_prob = xgb.predict_proba(X_test)[:, 1]
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(f"ROC-AUC: {roc_auc_score(y_test, y_prob):.4f}")
print(f"Trees used: {xgb.best_iteration + 1}")
top3 = np.argsort(xgb.feature_importances_)[-3:][::-1]
print("Top 3 features:")
for idx in top3:
    print(f"  {X.columns[idx]}: {xgb.feature_importances_[idx]:.4f}")
```

This end-to-end pipeline demonstrates synthetic data creation, feature engineering, XGBoost training with early stopping, and comprehensive evaluation. The engineered features (charges_per_tenure, tenure_x_contract) add domain knowledge. Feature importance reveals which factors drive churn.

### Q12. [Hard] Explain what colsample_bytree, colsample_bylevel, and colsample_bynode do in XGBoost. How do they differ?

*Hint:* Each controls feature subsampling at a different granularity: per tree, per depth level, or per split.

**Answer:** **colsample_bytree**: Randomly samples a fraction of features once per tree. All splits in that tree use the same feature subset. **colsample_bylevel**: Randomly samples features at each depth level within a tree. Different depths may use different features. **colsample_bynode**: Randomly samples features at each individual split. Maximum randomness -- each split considers a different feature subset. They can be combined multiplicatively: if colsample_bytree=0.8 and colsample_bylevel=0.8, each level uses 64% (0.8 * 0.8) of the original features. More aggressive subsampling increases diversity among trees and reduces overfitting, but too much can hurt performance.

colsample_bytree is the most commonly used (similar to Random Forest's max_features). colsample_bynode provides the finest granularity. In practice, setting colsample_bytree=0.8 is usually sufficient. The others are used for advanced tuning.

### Q13. [Easy] Can you use XGBoost for regression problems, or is it only for classification?

*Hint:* Think about XGBRegressor.

**Answer:** XGBoost works for **both classification and regression**. Use `XGBClassifier` for classification (predicting categories) and `XGBRegressor` for regression (predicting continuous values). The only difference is the loss function: log loss for classification, squared error for regression. The tree-building process is the same.

All three boosting libraries (XGBoost, LightGBM, CatBoost) support both classification and regression. They also support ranking tasks (learning to rank search results).

### Q14. [Medium] What is the output?

```
from xgboost import XGBClassifier
import numpy as np

xgb = XGBClassifier(n_estimators=10, random_state=42, eval_metric='logloss')
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([0, 0, 1, 1, 1])
xgb.fit(X, y)
print(xgb.predict(np.array([[2.5]])))
print(xgb.predict_proba(np.array([[2.5]])).round(3))
```

*Hint:* 2.5 is exactly between the 0 and 1 regions. The model should be uncertain.

**Answer:** `[1]` (or `[0]`, borderline case)
Probabilities close to `[[0.45 0.55]]` (near 50/50, reflecting uncertainty)

The value 2.5 is at the decision boundary between class 0 (values 1, 2) and class 1 (values 3, 4, 5). The model is uncertain, producing probabilities near 50%. The predicted class depends on which side of 0.5 the probability falls.

## Multiple Choice Questions

### Q1. [Easy] Which of the following is a boosting algorithm?

**Answer:** C

**C is correct.** XGBoost is a boosting algorithm that trains trees sequentially to correct errors. Random Forest (A) is bagging. K-Means (B) is clustering. PCA (D) is dimensionality reduction.

### Q2. [Easy] What does 'early stopping' prevent in gradient boosting?

**Answer:** B

**B is correct.** Early stopping halts training when validation performance stops improving, preventing the model from training too many trees and overfitting to the training data.

### Q3. [Easy] In gradient boosting, what does each new tree try to predict?

**Answer:** B

**B is correct.** Each new tree is trained on the residuals (actual - current prediction), meaning it learns to correct the errors of all previous trees combined.

### Q4. [Easy] Which library handles categorical features natively without manual encoding?

**Answer:** C

**C is correct.** CatBoost (Categorical Boosting) was specifically designed to handle categorical features natively using ordered target encoding. XGBoost and LightGBM require manual encoding.

### Q5. [Easy] Which parameter should you always pair with a high n_estimators value in XGBoost?

**Answer:** B

**B is correct.** With high n_estimators (e.g., 5000), early_stopping_rounds prevents overfitting by stopping training when validation performance plateaus. Without it, all trees are trained regardless of whether they improve performance.

### Q6. [Medium] What is the primary advantage of LightGBM over XGBoost?

**Answer:** C

**C is correct.** LightGBM's histogram-based splitting is O(n) vs XGBoost's O(n log n), making it much faster on large datasets. CatBoost (B) is the one with native categorical handling. All algorithms benefit from tuning (D is wrong).

### Q7. [Medium] How does XGBoost handle missing values?

**Answer:** C

**C is correct.** At each split, XGBoost tries sending missing values both left and right, picks the direction with the best gain, and saves this decision. Different splits can handle missing values differently, adapting to the data.

### Q8. [Medium] What happens if you set learning_rate=1.0 with many trees?

**Answer:** B

**B is correct.** With learning_rate=1.0, each tree's full prediction is added to the ensemble. This is very aggressive -- the model quickly memorizes training data and overfits. Lower learning rates (0.01-0.1) with early stopping are recommended.

### Q9. [Medium] Meera has 95% class 0 and 5% class 1 in her dataset. Which XGBoost parameter helps with this?

**Answer:** C

**C is correct.** scale_pos_weight handles class imbalance by weighting positive (minority) class samples higher. Setting it to 95/5 = 19 makes the model pay 19x more attention to the minority class, preventing it from always predicting class 0.

### Q10. [Medium] In LightGBM, which parameter is the PRIMARY control for tree complexity?

**Answer:** C

**C is correct.** LightGBM uses leaf-wise tree growth, so num_leaves (default 31) is the primary control for how complex each tree can be. max_depth is secondary (set to -1 by default). This is different from XGBoost where max_depth is primary.

### Q11. [Hard] Why does gradient boosting on tabular data often outperform deep learning?

**Answer:** B

**B is correct.** Deep learning excels on data with spatial structure (images/CNNs) or sequential structure (text/RNNs). Tabular data has no such structure. Trees naturally handle mixed feature types, different scales, missing values, and feature interactions without the extensive preprocessing that neural networks require.

### Q12. [Hard] What is the relationship between learning_rate and n_estimators in gradient boosting?

**Answer:** B

**B is correct.** Lower learning rate means each tree contributes less, so more trees are needed. The total 'model capacity' is approximately learning_rate * n_estimators. A common strategy: set learning_rate=0.05, n_estimators=5000, and use early stopping to find the optimal tree count.

### Q13. [Hard] Rohan runs XGBoost with subsample=0.7, colsample_bytree=0.8, and colsample_bylevel=0.9. What fraction of features does each split see?

**Answer:** B

**B is correct.** subsample controls row sampling (not feature sampling). colsample_bytree and colsample_bylevel are multiplied together for feature sampling: 0.8 * 0.9 = 0.72, meaning each split at each level sees 72% of the original features. Row sampling (subsample=0.7) means each tree trains on 70% of the data, but this is independent of feature sampling.

### Q14. [Hard] What problem does CatBoost's 'ordered boosting' solve?

**Answer:** B

**B is correct.** In standard gradient boosting with target encoding, each sample's encoding uses the target values of all samples, including itself (target leakage). Ordered boosting uses random permutations to ensure that when computing target statistics for a sample, only previous samples in the permutation are used. This produces unbiased estimates and better generalization.

### Q15. [Easy] Which of the following is an example of bagging?

**Answer:** B

**B is correct.** Random Forest is the classic bagging algorithm: it trains many decision trees independently on random bootstrap samples of the data and averages their predictions. XGBoost (A), LightGBM (C), and CatBoost (D) are all boosting algorithms.

### Q16. [Medium] What is the effect of decreasing the learning_rate in gradient boosting from 0.3 to 0.01?

**Answer:** C

**C is correct.** A lower learning rate means each tree's prediction is scaled down more (multiplied by 0.01 instead of 0.3). More trees are needed to reach the same model capacity, but the ensemble is more robust and generalizes better. Training is slower (A is wrong) and more trees are needed (B is wrong).

### Q17. [Hard] What is the purpose of reg_lambda (L2 regularization) in XGBoost?

**Answer:** B

**B is correct.** reg_lambda adds L2 regularization on leaf weights: lambda * sum(w^2). This shrinks leaf values toward zero, preventing any leaf from making extreme predictions. Higher reg_lambda = more regularization = smoother, more conservative model.

### Q18. [Easy] What does the term "weak learner" mean in ensemble methods?

**Answer:** B

**B is correct.** A weak learner performs only marginally better than random chance. Boosting combines many weak learners (shallow trees) to create a strong learner.

### Q19. [Medium] What is the typical maximum depth of individual trees in gradient boosting?

**Answer:** B

**B is correct.** Gradient boosting uses shallow trees (depth 3-10). The ensemble of many shallow trees captures complexity without individual trees overfitting.

### Q20. [Hard] Why does XGBoost use second-order gradients (Hessian) while standard gradient boosting uses only first-order?

**Answer:** B

**B is correct.** XGBoost uses a second-order Taylor expansion. The Hessian provides curvature information for better splits and natural regularization.

### Q21. [Easy] Which of the following is TRUE about gradient boosting?

**Answer:** B

**B is correct.** Gradient boosting trains trees sequentially, each fitting the residuals of the current ensemble.

### Q22. [Medium] Deepa wants to speed up LightGBM training without losing accuracy. Which parameter should she increase?

**Answer:** C

**C is correct.** Increasing min_child_samples prevents very small leaves, reducing complexity and training time while acting as regularization.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ensemble-methods-and-boosting/*
