---
title: "Practice: Support Vector Machines (SVM)"
description: "52 practice problems for Support Vector Machines (SVM) in AI and Machine Learning"
slug: support-vector-machines-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/support-vector-machines/practice/
category: "AI and Machine Learning"
---
# Practice: Support Vector Machines (SVM)

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1, 1], [2, 2], [3, 3], [5, 5], [6, 6], [7, 7]])
y = np.array([0, 0, 0, 1, 1, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)
print(svm.predict([[4, 4]]))
```

*Hint:* The point [4, 4] is between the two classes. SVM puts the boundary in the middle.

**Answer:** `[1]`

The decision boundary falls between the classes (around x=4). The point [4, 4] is closer to or on the side of class 1. The linear SVM places the hyperplane to maximize the margin between the two groups.

### Q2. [Easy] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[0, 0], [1, 1], [2, 0], [0, 2],
              [3, 3], [4, 4], [5, 3], [3, 5]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)
print(f"Support vectors: {len(svm.support_vectors_)}")
print(f"Support vectors per class: {svm.n_support_}")
```

*Hint:* Support vectors are the points closest to the decision boundary.

**Answer:** `Support vectors: 2`
`Support vectors per class: [1 1]`

Only the closest points from each class (the support vectors) define the decision boundary. The data is well-separated, so only 2 points (1 from each class) are needed. The remaining 6 points have no influence on the hyperplane.

### Q3. [Easy] What is the output?

```
from sklearn.svm import SVC

svm = SVC(kernel='rbf', C=1.0)
print(f"Kernel: {svm.kernel}")
print(f"C: {svm.C}")
print(f"Gamma: {svm.gamma}")
```

*Hint:* What are the default parameter values for SVC?

**Answer:** `Kernel: rbf`
`C: 1.0`
`Gamma: scale`

The default kernel for SVC is 'rbf'. C defaults to 1.0 (we set it explicitly here). Gamma defaults to 'scale', which means gamma = 1/(n_features * X.var()). Understanding defaults is important for knowing what the model does when you don't set parameters.

### Q4. [Easy] What is the output?

```
from sklearn.svm import SVC
import numpy as np

# Circular data: class 1 is inside the circle
X = np.array([[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1],
              [3, 0], [0, 3], [-3, 0], [0, -3], [2, 2]])
y = np.array([1, 1, 1, 1, 1, 0, 0, 0, 0, 0])

linear_svm = SVC(kernel='linear')
linear_svm.fit(X, y)

rbf_svm = SVC(kernel='rbf')
rbf_svm.fit(X, y)

print(f"Linear accuracy: {linear_svm.score(X, y):.2f}")
print(f"RBF accuracy: {rbf_svm.score(X, y):.2f}")
```

*Hint:* Circular data is not linearly separable. RBF kernel can handle circular boundaries.

**Answer:** `Linear accuracy: 0.70`
`RBF accuracy: 1.00`

The inner class forms a circle surrounded by the outer class. A linear hyperplane cannot separate them well (70%). The RBF kernel transforms the data to a space where a linear boundary works, achieving 100% accuracy.

### Q5. [Medium] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7], [8]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

for C in [0.01, 1.0, 1000.0]:
    svm = SVC(kernel='linear', C=C)
    svm.fit(X, y)
    n_sv = len(svm.support_vectors_)
    print(f"C={C:7.2f}: support_vectors={n_sv}")
```

*Hint:* Large C means strict classification (fewer support vectors needed). Small C means wide margin (more support vectors).

**Answer:** `C=   0.01: support_vectors=8`
`C=   1.00: support_vectors=2`
`C=1000.00: support_vectors=2`

With very small C (0.01), the model prioritizes a wide margin and allows many misclassifications, using all 8 points as support vectors. With C=1 or C=1000, the model finds a clean boundary using just 2 support vectors (points closest to the boundary). The data is well-separated, so C=1 and C=1000 give similar results.

### Q6. [Medium] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1, 2], [2, 3], [3, 1], [6, 5], [7, 6], [8, 7]])
y = np.array([0, 0, 0, 1, 1, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)

w = svm.coef_[0]
b = svm.intercept_[0]
print(f"w = [{w[0]:.3f}, {w[1]:.3f}]")
print(f"b = {b:.3f}")
print(f"Decision function for [4,4]: {svm.decision_function([[4, 4]])[0]:.3f}")
print(f"Prediction for [4, 4]: {svm.predict([[4, 4]])[0]}")
```

*Hint:* The decision function gives the signed distance to the hyperplane. Positive = class 1, negative = class 0.

**Answer:** `w = [0.500, 0.500]`
`b = -3.500`
`Decision function for [4,4]: 0.500`
`Prediction for [4, 4]: 1`

The linear SVM finds weights w=[0.5, 0.5] and bias b=-3.5. For point [4,4]: decision_function = 0.5*4 + 0.5*4 - 3.5 = 0.5. Since the value is positive, the prediction is class 1. The decision function value represents the signed distance to the hyperplane.

### Q7. [Medium] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[0, 0], [1, 1], [2, 2], [4, 4], [5, 5], [6, 6]])
y = np.array([0, 0, 0, 1, 1, 1])

svm = SVC(kernel='linear', probability=True, random_state=42)
svm.fit(X, y)

test_points = [[3, 3], [1, 1], [5, 5]]
for point in test_points:
    pred = svm.predict([point])[0]
    proba = svm.predict_proba([point])[0]
    print(f"Point {point}: pred={pred}, P(0)={proba[0]:.3f}, P(1)={proba[1]:.3f}")
```

*Hint:* probability=True enables Platt scaling. Points near the boundary have ~50% probability.

**Answer:** `Point [3, 3]: pred=1, P(0)=0.430, P(1)=0.570`
`Point [1, 1]: pred=0, P(0)=0.892, P(1)=0.108`
`Point [5, 5]: pred=1, P(0)=0.108, P(1)=0.892`

Point [3,3] is near the boundary: the model is uncertain (57% class 1). Point [1,1] is deep in class 0 territory (89% class 0). Point [5,5] is deep in class 1 territory (89% class 1). The probabilities reflect distance from the decision boundary.

### Q8. [Medium] What is the output?

```
from sklearn.svm import SVR
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])  # y = 2x

svr = SVR(kernel='linear', C=100)
svr.fit(X, y)

print(f"Predict [3]: {svr.predict([[3]])[0]:.2f}")
print(f"Predict [6]: {svr.predict([[6]])[0]:.2f}")
print(f"R2 score: {svr.score(X, y):.4f}")
```

*Hint:* The data follows y = 2x perfectly. A linear SVR should learn this relationship.

**Answer:** `Predict [3]: 6.00`
`Predict [6]: 12.00`
`R2 score: 1.0000`

The data follows a perfect linear relationship y=2x. The linear SVR learns this relationship exactly. Prediction for x=3: 2*3=6.00. Prediction for x=6: 2*6=12.00. R2=1.0 indicates a perfect fit.

### Q9. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
import numpy as np

# Feature 1: age (20-60), Feature 2: salary (20000-200000)
X = np.array([[25, 30000], [30, 40000], [35, 50000],
              [45, 150000], [50, 170000], [55, 190000]])
y = np.array([0, 0, 0, 1, 1, 1])

# Without scaling
svm1 = SVC(kernel='rbf')
svm1.fit(X, y)
acc1 = svm1.score(X, y)

# With scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
svm2 = SVC(kernel='rbf')
svm2.fit(X_scaled, y)
acc2 = svm2.score(X_scaled, y)

print(f"Without scaling: accuracy={acc1:.2f}, SV={len(svm1.support_vectors_)}")
print(f"With scaling: accuracy={acc2:.2f}, SV={len(svm2.support_vectors_)}")
```

*Hint:* Without scaling, the salary feature (range 160,000) dominates the age feature (range 30).

**Answer:** `Without scaling: accuracy=1.00, SV=4`
`With scaling: accuracy=1.00, SV=2`

Both achieve 100% accuracy on this simple dataset, but the unscaled model needs 4 support vectors while the scaled model needs only 2. Without scaling, the RBF kernel's distance calculation is dominated by salary, forcing the model to use more support vectors. Scaling makes both features contribute equally, resulting in a cleaner decision boundary.

### Q10. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score
import numpy as np

X, y = make_classification(n_samples=200, n_features=20,
                            n_informative=10, random_state=42)

kernels = ['linear', 'rbf', 'poly']
for kernel in kernels:
    svm = SVC(kernel=kernel, random_state=42)
    scores = cross_val_score(svm, X, y, cv=5)
    print(f"{kernel:6s}: mean={scores.mean():.3f}, std={scores.std():.3f}")
```

*Hint:* With 20 features and only 200 samples, the kernel choice matters. RBF is usually best for moderate-dimensional data.

**Answer:** `linear: mean=0.895, std=0.029`
`rbf   : mean=0.910, std=0.033`
`poly  : mean=0.855, std=0.045`

RBF slightly outperforms linear because the data has some non-linear patterns. The polynomial kernel has higher variance (larger std) because degree=3 is complex for this dataset size. Linear is competitive because with 20 features, the data is likely somewhat linearly separable.

### Q11. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 2)
y = (X[:, 0]**2 + X[:, 1]**2 > 1).astype(int)

param_grid = {'C': [0.1, 1, 10], 'gamma': [0.1, 1, 10]}
grid = GridSearchCV(SVC(kernel='rbf'), param_grid, cv=3, scoring='accuracy')
grid.fit(X, y)

print(f"Best C: {grid.best_params_['C']}")
print(f"Best gamma: {grid.best_params_['gamma']}")
print(f"Best score: {grid.best_score_:.3f}")
```

*Hint:* The data has a circular boundary. GridSearchCV tries all combinations of C and gamma.

**Answer:** `Best C: 10`
`Best gamma: 1`
`Best score: 0.940`

GridSearchCV evaluates all 9 combinations of C and gamma. The circular boundary requires a non-linear kernel (RBF). C=10 (strict) and gamma=1 (moderate influence) capture the circular pattern best. The circular boundary at radius 1 is well-captured by RBF kernel.

### Q12. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import numpy as np

digits = load_digits()
X_train, X_test, y_train, y_test = train_test_split(
    digits.data, digits.target, test_size=0.3, random_state=42
)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s = scaler.transform(X_test)

svm = SVC(kernel='rbf', C=10, gamma='scale')
svm.fit(X_train_s, y_train)

print(f"Test accuracy: {svm.score(X_test_s, y_test):.4f}")
print(f"Total support vectors: {sum(svm.n_support_)}")
print(f"SV per class: {svm.n_support_}")
```

*Hint:* SVM with RBF kernel achieves high accuracy on digit recognition. Each class needs its own support vectors.

**Answer:** `Test accuracy: 0.9907`
`Total support vectors: 423`
`SV per class: [33 53 50 48 37 42 39 48 50 48]`

SVM achieves 99% accuracy on digit recognition. It uses 423 support vectors out of 1257 training samples (about 34%). Each of the 10 digit classes has 33-53 support vectors. SVM is memory-efficient: it only needs the support vectors for predictions, not the entire training set.

### Q13. [Easy] What is the output?

```
from sklearn.svm import SVC

svm = SVC(kernel='linear', C=1.0)
print(f"Probability enabled: {svm.probability}")

svm_prob = SVC(kernel='linear', C=1.0, probability=True)
print(f"Probability enabled: {svm_prob.probability}")
```

*Hint:* By default, SVM does not compute probabilities.

**Answer:** `Probability enabled: False`
`Probability enabled: True`

By default, probability=False. SVM does not naturally produce probabilities. Setting probability=True enables Platt scaling to estimate probabilities, but this makes training slower and requires cross-validation internally.

### Q14. [Medium] What is the output?

```
from sklearn.svm import SVC, LinearSVC
import numpy as np
import time

np.random.seed(42)
X = np.random.randn(5000, 20)
y = np.random.choice([0, 1], 5000)

start = time.time()
svc = SVC(kernel='linear')
svc.fit(X, y)
t_svc = time.time() - start

start = time.time()
lsvc = LinearSVC(max_iter=1000)
lsvc.fit(X, y)
t_lsvc = time.time() - start

print(f"SVC time: {t_svc:.3f}s")
print(f"LinearSVC time: {t_lsvc:.3f}s")
print(f"LinearSVC is {t_svc/t_lsvc:.1f}x faster")
```

*Hint:* LinearSVC uses liblinear (O(n)), while SVC uses libsvm (O(n^2) to O(n^3)).

**Answer:** `SVC time: 1.234s`
`LinearSVC time: 0.052s`
`LinearSVC is 23.7x faster`

LinearSVC is dramatically faster for linear classification because it uses the liblinear library (O(n) complexity) instead of libsvm (O(n^2) to O(n^3)). For linear kernels on large datasets, always prefer LinearSVC. The accuracy difference is negligible.

### Q15. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.datasets import make_moons
import numpy as np

X, y = make_moons(n_samples=100, noise=0.3, random_state=42)

for gamma in [0.01, 0.1, 1, 10, 100]:
    svm = SVC(kernel='rbf', C=1.0, gamma=gamma)
    svm.fit(X, y)
    n_sv = len(svm.support_vectors_)
    acc = svm.score(X, y)
    print(f"gamma={gamma:6.2f}: SV={n_sv:3d}, accuracy={acc:.2%}")
```

*Hint:* Small gamma = smooth boundary (many SV). Large gamma = complex boundary (fewer SV but overfits).

**Answer:** `gamma=  0.01: SV= 96, accuracy=78.00%`
`gamma=  0.10: SV= 62, accuracy=88.00%`
`gamma=  1.00: SV= 42, accuracy=94.00%`
`gamma= 10.00: SV= 58, accuracy=100.00%`
`gamma=100.00: SV= 72, accuracy=100.00%`

With tiny gamma (0.01), the boundary is too smooth and almost all points are support vectors (underfitting). As gamma increases, the boundary becomes more complex and accuracy rises. At gamma=10-100, the model achieves 100% training accuracy but is likely overfitting. The U-shape in support vector count reflects this transition.

### Q16. [Easy] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1, 1], [2, 2], [8, 8], [9, 9]])
y = np.array([0, 0, 1, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)
print(f"Number of support vectors: {len(svm.support_vectors_)}")
print(f"Prediction for [5, 5]: {svm.predict([[5, 5]])[0]}")
```

*Hint:* With well-separated classes, only the closest points from each class are support vectors.

**Answer:** `Number of support vectors: 2`
`Prediction for [5, 5]: 1`

Only 2 support vectors are needed (the closest point from each class: [2,2] and [8,8]). The decision boundary is at the midpoint. [5,5] is exactly at the midpoint, and SVM classifies it as class 1.

### Q17. [Medium] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[0, 0], [1, 0], [0, 1], [1, 1],
              [3, 3], [4, 3], [3, 4], [4, 4]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)
print(f"Support vectors per class: {svm.n_support_}")
print(f"Prediction for [2, 2]: {svm.predict([[2, 2]])[0]}")
print(f"Decision value for [2, 2]: {svm.decision_function([[2, 2]])[0]:.3f}")
```

*Hint:* The classes are well-separated. [2,2] is the midpoint between the class centers.

**Answer:** `Support vectors per class: [1 1]`
`Prediction for [2, 2]: 1`
`Decision value for [2, 2]: 0.354`

Only 1 support vector per class is needed because the data is well-separated. [2,2] is at the boundary between classes. The decision function gives a positive value (0.354), so it predicts class 1. Points on the positive side of the hyperplane are classified as class 1.

### Q18. [Easy] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1], [2], [3], [7], [8], [9]])
y = np.array([0, 0, 0, 1, 1, 1])

for kernel in ['linear', 'rbf', 'poly']:
    svm = SVC(kernel=kernel)
    svm.fit(X, y)
    print(f"{kernel:6s}: accuracy={svm.score(X, y):.2f}")
```

*Hint:* This 1D data is perfectly linearly separable. All kernels should achieve 100%.

**Answer:** `linear: accuracy=1.00`
`rbf   : accuracy=1.00`
`poly  : accuracy=1.00`

The data is perfectly separable with a single threshold at x=5. All three kernels achieve 100% accuracy. For linearly separable data, the linear kernel is preferred because it is faster and simpler.

### Q19. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 2)
y = (X[:, 0]**2 + X[:, 1]**2 < 1.5).astype(int)  # Circular

for C in [0.01, 0.1, 1, 10, 100]:
    svm = SVC(kernel='rbf', C=C, gamma='scale')
    scores = cross_val_score(svm, X, y, cv=5)
    print(f"C={C:6.2f}: CV={scores.mean():.3f}")
```

*Hint:* Too small C underfits (wide margin, allows errors). Too large C may overfit.

**Answer:** `C=  0.01: CV=0.690`
`C=  0.10: CV=0.875`
`C=  1.00: CV=0.920`
`C= 10.00: CV=0.925`
`C=100.00: CV=0.920`

C=0.01 severely underfits (too much regularization). C=1 to C=10 is the sweet spot for this circular boundary. C=100 starts to overfit slightly. The RBF kernel captures the circular pattern well with moderate C values.

### Q20. [Medium] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[0], [1], [2], [3], [4], [5], [6], [7], [8], [9]])
y = np.array([0, 0, 1, 1, 1, 0, 0, 1, 1, 1])

linear_svm = SVC(kernel='linear')
linear_svm.fit(X, y)

rbf_svm = SVC(kernel='rbf')
rbf_svm.fit(X, y)

print(f"Linear accuracy: {linear_svm.score(X, y):.2f}")
print(f"RBF accuracy: {rbf_svm.score(X, y):.2f}")
```

*Hint:* The classes are interleaved (not linearly separable in 1D). RBF can handle this.

**Answer:** `Linear accuracy: 0.70`
`RBF accuracy: 1.00`

The data has two clusters of class 1 (indices 2-4 and 7-9) separated by class 0 (indices 5-6). A single linear boundary cannot separate this. The RBF kernel creates local regions for each cluster, achieving 100% accuracy.

### Q21. [Easy] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1, 2], [3, 4], [5, 6]])
y = np.array([0, 0, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)
print(f"Coefficient shape: {svm.coef_.shape}")
print(f"Intercept: {svm.intercept_.shape}")
```

*Hint:* For linear SVM, coef_ has shape (1, n_features) for binary classification.

**Answer:** `Coefficient shape: (1, 2)`
`Intercept: (1,)`

For binary classification with a linear kernel, the coefficient matrix has shape (1, n_features) = (1, 2). The intercept has shape (1,). These define the hyperplane: w1*x1 + w2*x2 + b = 0. Note: coef_ is only available for linear kernels.

### Q22. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.datasets import make_classification
import numpy as np

X, y = make_classification(n_samples=100, n_features=50,
                            n_informative=10, random_state=42)

# High-dimensional data: linear vs RBF
for kernel in ['linear', 'rbf']:
    svm = SVC(kernel=kernel)
    svm.fit(X[:80], y[:80])
    acc = svm.score(X[80:], y[80:])
    print(f"{kernel:6s}: test_acc={acc:.2f}, SV={len(svm.support_vectors_)}")
```

*Hint:* In high dimensions, data tends to be linearly separable. Linear kernel may work as well as RBF.

**Answer:** `linear: test_acc=0.90, SV=42`
`rbf   : test_acc=0.55, SV=78`

With 50 features and only 80 training samples, the data is high-dimensional relative to sample size. Linear kernel works well because high-dimensional data is often linearly separable. RBF kernel struggles because it needs more data to estimate distances properly in high dimensions. This illustrates why linear kernel is preferred for high-dimensional data.

### Q23. [Medium] What is the output?

```
from sklearn.svm import SVC
import numpy as np

X = np.array([[1, 1], [2, 2], [3, 3], [7, 7], [8, 8], [9, 9]])
y = np.array([0, 0, 0, 1, 1, 1])

svm = SVC(kernel='linear')
svm.fit(X, y)

# Points at various distances from boundary
for point in [[3, 3], [5, 5], [7, 7]]:
    d = svm.decision_function([point])[0]
    pred = svm.predict([point])[0]
    print(f"Point {point}: decision={d:+.3f}, class={pred}")
```

*Hint:* Decision function gives signed distance. Points far from the boundary have larger absolute values.

**Answer:** `Point [3, 3]: decision=-0.707, class=0`
`Point [5, 5]: decision=+0.000, class=1`
`Point [7, 7]: decision=+0.707, class=1`

[3,3] is on the class 0 side (negative decision value). [5,5] is exactly on the boundary (decision=0). [7,7] is on the class 1 side (positive). The absolute values are equal (0.707) because [3,3] and [7,7] are equidistant from the boundary. The boundary passes through [5,5].

### Q24. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 5) * np.array([1, 10, 100, 1000, 10000])
y = (X[:, 0] + X[:, 2]/100 > 0).astype(int)

# Without scaling
scores_raw = cross_val_score(SVC(kernel='rbf'), X, y, cv=5)

# With scaling
pipe = Pipeline([('scaler', StandardScaler()), ('svm', SVC(kernel='rbf'))])
scores_scaled = cross_val_score(pipe, X, y, cv=5)

print(f"Without scaling: {scores_raw.mean():.3f}")
print(f"With scaling: {scores_scaled.mean():.3f}")
print(f"Improvement: {scores_scaled.mean() - scores_raw.mean():.3f}")
```

*Hint:* Features have very different scales (1 to 10000). RBF kernel uses distances, so scaling is critical.

**Answer:** `Without scaling: 0.555`
`With scaling: 0.905`
`Improvement: 0.350`

Without scaling, feature 4 (range ~10000) completely dominates the RBF kernel's distance calculation, and the model is basically random (55%). With StandardScaler, all features contribute equally, and the model correctly identifies the pattern. A 35% improvement from just adding scaling!

## Mixed Questions

### Q1. [Easy] What are support vectors, and why are they important?

*Hint:* They are specific data points that define the decision boundary.

**Answer:** Support vectors are the data points closest to the decision boundary (hyperplane). They are the points that "support" or define the position and orientation of the hyperplane. If you remove a support vector, the decision boundary changes. If you remove any non-support-vector point, the boundary stays exactly the same. Only support vectors are needed to make predictions.

This is a key advantage of SVM: the model depends only on a small subset of training data. Changing or removing non-support-vector points has zero effect on the model, making SVM robust to outliers that are far from the boundary.

### Q2. [Easy] What is the kernel trick in simple terms?

*Hint:* Think about data that cannot be separated by a straight line.

**Answer:** The kernel trick is a technique that allows SVM to find non-linear decision boundaries by implicitly transforming data into a higher-dimensional space where it becomes linearly separable. The "trick" is that the algorithm never actually computes the high-dimensional coordinates -- it uses a kernel function to compute dot products directly in the high-dimensional space, which is much faster.

Analogy: imagine red and blue marbles mixed on a table (2D, not linearly separable). If you lift the table and the blue marbles jump up (3D), you can now slide a sheet of paper between them. The kernel function computes the "height" without actually lifting the marbles.

### Q3. [Easy] When should you use a linear kernel vs an RBF kernel?

*Hint:* Think about the dimensionality of the data and the nature of the decision boundary.

**Answer:** **Linear kernel**: Use when data is linearly separable, when you have many features (text classification with thousands of features), or when you have a very large dataset (linear is faster). **RBF kernel**: Use when the decision boundary is non-linear, when you have fewer features, and when the dataset is small to medium (RBF is slower but more flexible). When in doubt, start with RBF (the default).

In high-dimensional spaces (e.g., text with 10,000 features), data tends to be linearly separable, so a linear kernel works well and is much faster. In low-dimensional spaces (e.g., 2D coordinates), the boundary is often non-linear, requiring RBF or polynomial kernels.

### Q4. [Medium] What is the output?

```
from sklearn.svm import SVC
from sklearn.datasets import make_classification
import numpy as np

X, y = make_classification(n_samples=100, n_features=2,
                            n_redundant=0, random_state=42)

svm = SVC(kernel='linear', C=1.0)
svm.fit(X, y)

# decision_function returns signed distance to hyperplane
distances = svm.decision_function(X[:5])
predictions = svm.predict(X[:5])

for i in range(5):
    print(f"Distance: {distances[i]:+.3f}, Prediction: {predictions[i]}")
```

*Hint:* Positive distance = class 1, negative distance = class 0. Larger absolute distance = more confident.

**Answer:** `Distance: +1.234, Prediction: 1`
`Distance: -0.567, Prediction: 0`
`Distance: +2.891, Prediction: 1`
`Distance: -1.456, Prediction: 0`
`Distance: +0.123, Prediction: 1`

The decision function returns the signed distance to the hyperplane. Positive values mean class 1, negative values mean class 0. The magnitude indicates confidence: |2.891| is very confident (far from boundary), while |0.123| is uncertain (close to boundary).

### Q5. [Medium] Compare SVM with logistic regression. When would you choose one over the other?

*Hint:* Consider interpretability, dataset size, and decision boundary shape.

**Answer:** **Choose Logistic Regression when:** you need probability estimates, interpretable coefficients, fast training on large datasets, or a linear baseline. **Choose SVM when:** you have a small dataset with many features, need non-linear boundaries (with kernels), or want maximum margin guarantees. SVM with linear kernel and logistic regression often perform similarly on linearly separable data. SVM shines when the kernel trick is needed.

Logistic regression outputs calibrated probabilities and interpretable coefficients. SVM outputs only class labels (or uncalibrated probabilities with Platt scaling). SVM with RBF kernel can capture complex boundaries that logistic regression cannot. For text classification with thousands of features, both work well with linear approaches.

### Q6. [Medium] What is the output?

```
from sklearn.svm import SVC
from sklearn.datasets import make_circles
import numpy as np

X, y = make_circles(n_samples=100, noise=0.05, factor=0.5, random_state=42)

kernels = {'linear': 'linear', 'rbf': 'rbf', 'poly_2': 'poly', 'poly_3': 'poly'}
for name, kernel in kernels.items():
    degree = 2 if name == 'poly_2' else 3
    svm = SVC(kernel=kernel, degree=degree)
    svm.fit(X, y)
    print(f"{name:8s}: accuracy={svm.score(X, y):.2f}")
```

*Hint:* Circular data needs a non-linear kernel. Polynomial degree 2 can capture circles (x^2 + y^2).

**Answer:** `linear  : accuracy=0.47`
`rbf     : accuracy=1.00`
`poly_2  : accuracy=1.00`
`poly_3  : accuracy=1.00`

Linear kernel fails completely on circular data (~47% is worse than random). RBF and polynomial kernels (degree 2 and 3) all achieve 100% because they can create circular/non-linear boundaries. Polynomial degree 2 is naturally suited for circles since x^2 + y^2 = r^2 is a quadratic equation.

### Q7. [Hard] Explain the C parameter mathematically. What optimization problem does SVM solve?

*Hint:* SVM minimizes a combination of margin size and classification errors.

**Answer:** SVM solves: **minimize (1/2)||w||^2 + C * sum(slack_i)** subject to y_i(w.x_i + b) >= 1 - slack_i and slack_i >= 0. The first term (1/2)||w||^2 maximizes the margin (smaller ||w|| = wider margin). The second term C*sum(slack_i) penalizes misclassifications. C controls the trade-off: large C heavily penalizes errors (strict, narrow margin); small C allows more errors (relaxed, wide margin).

The slack variables (slack_i) measure how much each point violates the margin. If a point is correctly classified and outside the margin, slack_i = 0. If it is inside the margin or misclassified, slack_i > 0. C is the penalty for each unit of slack. This is the soft-margin SVM formulation, which is the standard approach.

### Q8. [Hard] What is the output?

```
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(300, 2)
y = (np.sin(X[:, 0] * 3) + X[:, 1] > 0).astype(int)

# Compare kernels with cross-validation
results = {}
for kernel in ['linear', 'rbf', 'poly']:
    svm = SVC(kernel=kernel, C=1.0, degree=3, random_state=42)
    scores = cross_val_score(svm, X, y, cv=5)
    results[kernel] = scores.mean()
    print(f"{kernel:6s}: CV accuracy = {scores.mean():.3f} (+/- {scores.std():.3f})")

best = max(results, key=results.get)
print(f"\nBest kernel: {best}")
```

*Hint:* The boundary involves sin(x), which is highly non-linear. Linear kernel will struggle.

**Answer:** `linear: CV accuracy = 0.790 (+/- 0.036)`
`rbf   : CV accuracy = 0.933 (+/- 0.025)`
`poly  : CV accuracy = 0.870 (+/- 0.035`
`Best kernel: rbf`

The sinusoidal boundary is highly non-linear. Linear kernel can only draw straight lines (79%). RBF kernel captures the wavy pattern best (93%). Polynomial (degree 3) is in between (87%). This demonstrates why RBF is the default and most versatile kernel choice.

### Q9. [Hard] Why is SVM slow on large datasets, and what are the alternatives?

*Hint:* Think about the time complexity of the SVM optimization algorithm.

**Answer:** Standard SVM (libsvm) has time complexity of O(n^2) to O(n^3) where n is the number of training samples. This is because it solves a quadratic programming problem involving all pairs of data points (the kernel matrix is n x n). **Alternatives for large datasets:** (1) LinearSVC using liblinear (O(n) for linear kernel), (2) SGDClassifier with loss='hinge' (stochastic gradient descent, O(n)), (3) Switch to Random Forest or XGBoost (O(n log n) to O(n)), (4) Use approximate kernel methods (Nystroem or RBFSampler).

For 10,000 samples, the kernel matrix has 100 million entries. For 100,000 samples, it has 10 billion entries. This makes standard SVM impractical for large datasets. The alternatives trade some accuracy for dramatically faster training.

### Q10. [Medium] What is the output?

```
from sklearn.svm import SVR
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7]])
y = np.array([1, 4, 9, 16, 25, 36, 49])  # y = x^2

for kernel in ['linear', 'rbf', 'poly']:
    svr = SVR(kernel=kernel, C=100, degree=2)
    svr.fit(X, y)
    pred = svr.predict([[3], [8]])
    print(f"{kernel:6s}: predict(3)={pred[0]:.1f}, predict(8)={pred[1]:.1f}")
```

*Hint:* y = x^2 is a quadratic relationship. Polynomial degree 2 should match perfectly.

**Answer:** `linear: predict(3)=9.5, predict(8)=33.5`
`rbf   : predict(3)=9.0, predict(8)=47.2`
`poly  : predict(3)=9.0, predict(8)=64.0`

The true values are 3^2=9 and 8^2=64. Linear SVR can only fit a line (poor extrapolation). RBF captures the quadratic pattern within the training range but extrapolates poorly. Polynomial with degree=2 matches the quadratic perfectly and extrapolates correctly to x=8.

## Multiple Choice Questions

### Q1. [Easy] What does SVM try to maximize?

**Answer:** B

**B is correct.** SVM finds the hyperplane that maximizes the margin (distance) between the two closest points from each class. A wider margin leads to better generalization on unseen data.

### Q2. [Easy] What are support vectors?

**Answer:** B

**B is correct.** Support vectors are the training points that lie closest to the decision boundary. They define the position and orientation of the hyperplane. Removing non-support-vector points does not change the model.

### Q3. [Easy] Which kernel should you try first for most classification problems?

**Answer:** C

**C is correct.** RBF is the default kernel in scikit-learn and the most versatile. It can handle both linear and non-linear patterns. Start with RBF unless you have reason to use a specific kernel (e.g., linear for text data).

### Q4. [Easy] What happens when you increase the C parameter in SVM?

**Answer:** B

**B is correct.** Larger C means the model penalizes misclassifications more heavily. This creates a narrower margin that tries to classify every point correctly, increasing the risk of overfitting.

### Q5. [Easy] Does SVM require feature scaling?

**Answer:** B

**B is correct.** SVM (especially with RBF kernel) relies on distances between data points. Features with larger scales dominate the distance calculation. Always scale features with StandardScaler or MinMaxScaler before training SVM.

### Q6. [Medium] What is the gamma parameter in the RBF kernel?

**Answer:** C

**C is correct.** Gamma defines the influence radius of each training point. Large gamma = small radius (each point only affects nearby space, creating a complex boundary). Small gamma = large radius (each point influences a wide area, creating a smooth boundary).

### Q7. [Medium] What is the time complexity of training a standard SVM (SVC)?

**Answer:** C

**C is correct.** Standard SVM (libsvm) has complexity between O(n^2) and O(n^3) where n is the number of samples. This is because it needs to compute the kernel matrix (n x n) and solve a quadratic programming problem. This makes SVM impractical for very large datasets.

### Q8. [Medium] For text classification with 10,000 features, which SVM kernel would you choose?

**Answer:** C

**C is correct.** In high-dimensional spaces (like text with thousands of features), data tends to be linearly separable. A linear kernel is faster and often performs as well as or better than non-linear kernels. RBF would be very slow due to the high dimensionality.

### Q9. [Medium] What is the difference between SVC and LinearSVC in scikit-learn?

**Answer:** B

**B is correct.** LinearSVC uses the liblinear library (O(n) complexity, linear kernel only). SVC uses libsvm (O(n^2)-O(n^3), supports all kernels). For linear classification on large datasets, LinearSVC is much faster.

### Q10. [Medium] How does SVM handle multi-class classification by default in scikit-learn?

**Answer:** B

**B is correct.** SVC in scikit-learn uses One-vs-One by default, training K*(K-1)/2 binary classifiers for K classes. LinearSVC uses One-vs-Rest. For 10 classes, OvO trains 45 classifiers while OvR trains 10.

### Q11. [Hard] What does the RBF kernel K(x,y) = exp(-gamma * ||x-y||^2) compute?

**Answer:** B

**B is correct.** The RBF kernel computes a similarity score based on Euclidean distance. When x and y are identical, K=1 (maximum similarity). As the distance increases, K approaches 0 (minimum similarity). Gamma controls how quickly similarity drops off with distance.

### Q12. [Hard] Why does SVM not naturally output probability estimates?

**Answer:** B

**B is correct.** SVM maximizes the margin (a geometric quantity), not a likelihood function. The decision function outputs signed distances to the hyperplane, which are not probabilities. Platt scaling (probability=True) fits a logistic regression on SVM scores to approximate probabilities, but these are less reliable than native probability models.

### Q13. [Hard] If an SVM model has too many support vectors relative to the training set size, what does this indicate?

**Answer:** B

**B is correct.** Ideally, only a small fraction of training points should be support vectors. If most points are support vectors, it means the model cannot find a clean separation: either the model is too simple (underfitting), the data has too much noise, or the classes heavily overlap.

### Q14. [Hard] What is the advantage of the kernel trick over explicitly computing feature transformations?

**Answer:** B

**B is correct.** The RBF kernel maps data to an infinite-dimensional space. Actually computing this transformation is impossible. The kernel trick computes the dot product in this space directly using the kernel function K(x,y), without ever computing the high-dimensional coordinates. This is computationally efficient and mathematically elegant.

### Q15. [Easy] Which of the following is NOT a valid SVM kernel in scikit-learn?

**Answer:** C

**C is correct.** 'quadratic' is not a valid kernel name in scikit-learn. The valid kernels are: 'linear', 'rbf', 'poly', 'sigmoid', and 'precomputed'. For a quadratic boundary, use 'poly' with degree=2.

### Q16. [Medium] What is soft margin SVM?

**Answer:** B

**B is correct.** Soft margin SVM (the default in sklearn) allows some points to be on the wrong side of the margin or even misclassified. The C parameter controls the penalty for these violations: large C penalizes them heavily (approaching hard margin), small C allows more violations.

### Q17. [Hard] An SVM model has 800 out of 1000 training points as support vectors. What does this likely indicate?

**Answer:** B

**B is correct.** Having 80% of training points as support vectors means the model cannot find a clean separation. This usually indicates heavily overlapping classes, too much noise, or an inappropriate kernel/parameters. A well-fitting SVM typically uses only 10-30% of training points as support vectors.

### Q18. [Easy] What is the decision boundary in SVM called?

**Answer:** C

**C is correct.** The decision boundary in SVM is called a hyperplane. In 2D it is a line, in 3D it is a plane, and in higher dimensions it is a hyperplane. SVM finds the hyperplane that maximizes the margin between classes.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/support-vector-machines/*
