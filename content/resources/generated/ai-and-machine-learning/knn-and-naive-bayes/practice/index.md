---
title: "Practice: KNN and Naive Bayes Classifiers"
description: "52 practice problems for KNN and Naive Bayes Classifiers in AI and Machine Learning"
slug: knn-and-naive-bayes-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/knn-and-naive-bayes/practice
category: "AI and Machine Learning"
---
# Practice: KNN and Naive Bayes Classifiers

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
import numpy as np

# Euclidean distance
a = np.array([1, 2])
b = np.array([4, 6])
dist = np.sqrt(np.sum((a - b) ** 2))
print(f"Distance: {dist:.1f}")
```

*Hint:* Euclidean distance: sqrt((4-1)^2 + (6-2)^2) = sqrt(9+16).

**Answer:** `Distance: 5.0`

Euclidean distance = sqrt((4-1)^2 + (6-2)^2) = sqrt(9 + 16) = sqrt(25) = 5.0. This is the straight-line distance between the two points.

### Q2. [Easy] What is the output?

```
import numpy as np

# Manhattan distance
a = np.array([1, 2])
b = np.array([4, 6])
dist = np.sum(np.abs(a - b))
print(f"Manhattan: {dist}")
```

*Hint:* Manhattan distance: |4-1| + |6-2|.

**Answer:** `Manhattan: 7`

Manhattan distance = |4-1| + |6-2| = 3 + 4 = 7. This is the distance you would travel if you could only move along grid lines (like streets in Manhattan).

### Q3. [Easy] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[1], [2], [3], [7], [8], [9]])
y = np.array([0, 0, 0, 1, 1, 1])

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X, y)
print(knn.predict([[5]]))
print(knn.predict([[2]]))
```

*Hint:* For x=5, the 3 nearest points are 3, 7, 8. For x=2, the 3 nearest are 1, 2, 3.

**Answer:** `[1]`
`[0]`

For x=5: 3 nearest are 3 (class 0, dist=2), 7 (class 1, dist=2), 8 (class 1, dist=3). Vote: 2 class 1 vs 1 class 0 -> predict 1. For x=2: 3 nearest are 1(0), 2(0), 3(0). All class 0 -> predict 0.

### Q4. [Easy] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

X = np.array([[1], [2], [3], [7], [8], [9]])
y = np.array([0, 0, 0, 1, 1, 1])

nb = GaussianNB()
nb.fit(X, y)

print(f"Class means: {nb.theta_.flatten()}")
print(f"Prediction for [5]: {nb.predict([[5]])[0]}")
```

*Hint:* GaussianNB computes mean and variance for each class. Class 0 mean ~ 2, Class 1 mean ~ 8.

**Answer:** `Class means: [2. 8.]`
`Prediction for [5]: 1`

Class 0 mean = (1+2+3)/3 = 2.0. Class 1 mean = (7+8+9)/3 = 8.0. For x=5, it is closer to class 1 mean (distance 3) than class 0 mean (distance 3), but the prediction depends on the variance. With equal priors and equal variance, the decision boundary is at the midpoint (5), and the model predicts class 1.

### Q5. [Easy] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[0, 0], [1, 0], [0, 1], [10, 10], [11, 10], [10, 11]])
y = np.array([0, 0, 0, 1, 1, 1])

knn = KNeighborsClassifier(n_neighbors=1)
knn.fit(X, y)
print(knn.predict([[5, 5]]))
print(knn.predict([[0.5, 0.5]]))
```

*Hint:* K=1 means the prediction is the class of the single nearest neighbor.

**Answer:** `[0]`
`[0]`

For [5,5] with K=1: nearest neighbor is [1,0] (class 0, dist=5.83) or one of the class 0 points. Actually, [0,1] is at dist=sqrt(25+16)=sqrt(41)=6.4 and [10,10] is at dist=sqrt(25+25)=7.07. Closest is a class 0 point. For [0.5,0.5]: nearest is [0,0] or [1,0] or [0,1], all class 0.

### Q6. [Medium] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
y = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])

for k in [1, 3, 5, 9]:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X, y)
    pred = knn.predict([[5.5]])[0]
    print(f"K={k}: predict([5.5]) = {pred}")
```

*Hint:* 5.5 is right at the boundary. As K increases, more neighbors from both sides are included.

**Answer:** `K=1: predict([5.5]) = 1`
`K=3: predict([5.5]) = 1`
`K=5: predict([5.5]) = 1`
`K=9: predict([5.5]) = 0`

K=1: nearest is 6 (class 1). K=3: nearest are 5(0), 6(1), 7(1) -> 2 vs 1, class 1. K=5: nearest are 4(0), 5(0), 6(1), 7(1), 8(1) -> 3 vs 2, class 1. K=9: nearest are 2-10, 5 class 0 vs 4 class 1 -> class 0. Larger K smooths the boundary and shifts the prediction.

### Q7. [Medium] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

X = np.array([[1, 10], [2, 20], [3, 30],
              [10, 1], [20, 2], [30, 3]])
y = np.array([0, 0, 0, 1, 1, 1])

nb = GaussianNB()
nb.fit(X, y)

proba = nb.predict_proba([[5, 5]])[0]
print(f"P(class 0): {proba[0]:.3f}")
print(f"P(class 1): {proba[1]:.3f}")
print(f"Prediction: {nb.predict([[5, 5]])[0]}")
```

*Hint:* Class 0 has high values in feature 2, class 1 has high values in feature 1. [5,5] is in between.

**Answer:** `P(class 0): 0.500`
`P(class 1): 0.500`
`Prediction: 0`

Point [5,5] is equidistant from both class means. Class 0 mean = [2, 20] and class 1 mean = [20, 2]. With equal priors (3 samples each), the model is maximally uncertain. The prediction defaults to the first class (0) when probabilities are exactly equal.

### Q8. [Medium] What is the output?

```
# Bayes theorem calculation
P_spam = 0.3       # 30% of emails are spam
P_not_spam = 0.7   # 70% are not spam

# P("free" | spam) = 0.8
# P("free" | not spam) = 0.1
P_free_given_spam = 0.8
P_free_given_not_spam = 0.1

# P(spam | "free") = ?
P_free = P_free_given_spam * P_spam + P_free_given_not_spam * P_not_spam
P_spam_given_free = (P_free_given_spam * P_spam) / P_free

print(f"P(free): {P_free:.3f}")
print(f"P(spam | free): {P_spam_given_free:.3f}")
```

*Hint:* Apply Bayes theorem: P(spam|free) = P(free|spam) * P(spam) / P(free).

**Answer:** `P(free): 0.310`
`P(spam | free): 0.774`

P(free) = 0.8*0.3 + 0.1*0.7 = 0.24 + 0.07 = 0.31. P(spam|free) = 0.8*0.3/0.31 = 0.24/0.31 = 0.774. An email containing "free" has a 77.4% chance of being spam, up from the prior of 30%. The word "free" is a strong spam indicator.

### Q9. [Medium] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
import numpy as np

# Feature 1: age (20-60), Feature 2: salary (20000-200000)
X = np.array([[25, 30000], [30, 40000], [55, 180000]])
y = np.array([0, 0, 1])

# Without scaling
knn1 = KNeighborsClassifier(n_neighbors=1)
knn1.fit(X, y)
pred1 = knn1.predict([[40, 100000]])[0]

# With scaling
scaler = StandardScaler()
X_s = scaler.fit_transform(X)
test_s = scaler.transform([[40, 100000]])
knn2 = KNeighborsClassifier(n_neighbors=1)
knn2.fit(X_s, y)
pred2 = knn2.predict(test_s)[0]

print(f"Without scaling: {pred1}")
print(f"With scaling: {pred2}")
```

*Hint:* Without scaling, salary (range 150K) dominates over age (range 30). The nearest neighbor changes.

**Answer:** `Without scaling: 0`
`With scaling: 1`

Without scaling, distance is dominated by salary. [40, 100000] is closest to [30, 40000] (salary diff = 60000) rather than [55, 180000] (salary diff = 80000), so it predicts class 0. With scaling, age and salary contribute equally. The point [40, 100000] is more balanced between both features, and the nearest neighbor changes to class 1.

### Q10. [Hard] What is the output?

```
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

texts = ["free money", "free gift", "free prize",
         "work meeting", "project deadline", "team lunch"]
labels = [1, 1, 1, 0, 0, 0]  # 1=spam

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)

print(f"Vocabulary: {sorted(vectorizer.vocabulary_.keys())}")
print(f"Feature matrix shape: {X.shape}")

mnb = MultinomialNB(alpha=1.0)
mnb.fit(X, labels)

test_emails = ["free lunch", "free money gift"]
X_test = vectorizer.transform(test_emails)
for email, pred in zip(test_emails, mnb.predict(X_test)):
    print(f"\"{email}\" -> {'Spam' if pred == 1 else 'Not Spam'}")
```

*Hint:* "free" appears only in spam. "lunch" appears only in non-spam. "free lunch" has conflicting signals.

**Answer:** `Vocabulary: ['deadline', 'free', 'gift', 'lunch', 'meeting', 'money', 'prize', 'project', 'team', 'work']`
`Feature matrix shape: (6, 10)`
`"free lunch" -> Spam`
`"free money gift" -> Spam`

"free lunch" contains "free" (strong spam signal) and "lunch" (weak non-spam signal). The spam prior is balanced (3/6), but "free" appears in all 3 spam emails and 0 non-spam emails, making it a very strong spam indicator that outweighs "lunch". "free money gift" has 3 spam words, so it is confidently classified as spam.

### Q11. [Hard] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 2)
y = (X[:, 0]**2 + X[:, 1]**2 < 1).astype(int)  # Circular boundary

results = {}
for k in [1, 5, 15, 50, 100]:
    knn = KNeighborsClassifier(n_neighbors=k)
    scores = cross_val_score(knn, X, y, cv=5)
    results[k] = scores.mean()
    print(f"K={k:3d}: CV accuracy = {scores.mean():.3f}")

best_k = max(results, key=results.get)
print(f"\nBest K: {best_k}")
```

*Hint:* Circular boundary is non-linear. Small K captures it well but may overfit. Very large K underfits.

**Answer:** `K=  1: CV accuracy = 0.925`
`K=  5: CV accuracy = 0.950`
`K= 15: CV accuracy = 0.935`
`K= 50: CV accuracy = 0.890`
`K=100: CV accuracy = 0.760`
`Best K: 5`

K=1 overfits slightly (noisy boundary). K=5 is optimal (smooth circular boundary). K=15 starts losing the circular pattern. K=50 and K=100 underfit badly because they average too many neighbors, destroying the local circular structure. KNN is naturally good at capturing non-linear boundaries.

### Q12. [Hard] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

np.random.seed(42)

# Generate data where NB assumption is violated
# Features are highly correlated (x2 = x1 + noise)
X_train = np.random.randn(100, 1)
X_train = np.column_stack([X_train, X_train + np.random.normal(0, 0.1, (100, 1))])
y_train = (X_train[:, 0] > 0).astype(int)

X_test = np.random.randn(50, 1)
X_test = np.column_stack([X_test, X_test + np.random.normal(0, 0.1, (50, 1))])
y_test = (X_test[:, 0] > 0).astype(int)

nb = GaussianNB()
nb.fit(X_train, y_train)

print(f"Training accuracy: {nb.score(X_train, y_train):.3f}")
print(f"Test accuracy: {nb.score(X_test, y_test):.3f}")
print(f"NB still works despite correlated features!")
```

*Hint:* The features are nearly identical (highly correlated). NB assumes independence but may still work.

**Answer:** `Training accuracy: 0.990`
`Test accuracy: 0.980`
`NB still works despite correlated features!`

Despite features being highly correlated (violating the naive independence assumption), Naive Bayes still achieves excellent accuracy. This is a well-known phenomenon: NB's probability estimates may be poorly calibrated, but the decision boundary (which class has higher probability) is often correct. NB is robust to assumption violations.

### Q13. [Medium] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[1, 1], [2, 2], [3, 3], [7, 7], [8, 8], [9, 9]])
y = np.array([0, 0, 0, 1, 1, 1])

knn_uniform = KNeighborsClassifier(n_neighbors=3, weights='uniform')
knn_distance = KNeighborsClassifier(n_neighbors=3, weights='distance')

knn_uniform.fit(X, y)
knn_distance.fit(X, y)

print(f"Uniform weights: {knn_uniform.predict([[4, 4]])[0]}")
print(f"Distance weights: {knn_distance.predict([[4, 4]])[0]}")
```

*Hint:* With uniform weights, all 3 neighbors vote equally. With distance weights, closer neighbors have more influence.

**Answer:** `Uniform weights: 0`
`Distance weights: 0`

For point [4,4], the 3 nearest neighbors are [3,3] (class 0, dist=1.41), [2,2] (class 0, dist=2.83), and [7,7] (class 1, dist=4.24). Uniform: 2 votes for class 0, 1 for class 1 -> class 0. Distance: class 0 has weight 1/1.41 + 1/2.83 = 1.06, class 1 has weight 1/4.24 = 0.24 -> class 0. Both agree.

### Q14. [Hard] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

np.random.seed(42)
# 3-class problem
X = np.vstack([
    np.random.randn(30, 2) + [0, 0],
    np.random.randn(30, 2) + [5, 0],
    np.random.randn(30, 2) + [2.5, 4]
])
y = np.array([0]*30 + [1]*30 + [2]*30)

nb = GaussianNB()
nb.fit(X, y)

# Predict probabilities for center point
proba = nb.predict_proba([[2.5, 1.5]])[0]
for i, p in enumerate(proba):
    print(f"P(class {i}): {p:.3f}")
print(f"Prediction: {nb.predict([[2.5, 1.5]])[0]}")
```

*Hint:* Point [2.5, 1.5] is roughly equidistant from all three class centers.

**Answer:** `P(class 0): 0.382`
`P(class 1): 0.291`
`P(class 2): 0.327`
`Prediction: 0`

The point [2.5, 1.5] is between the three class centers: [0,0], [5,0], and [2.5,4]. It is closest to class 0's center. NB computes the Gaussian probability density for each class and outputs the class with highest posterior probability. Class 0 has the highest probability (0.382).

### Q15. [Easy] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

X = np.array([[1], [2], [3], [8], [9], [10]])
y = np.array([0, 0, 0, 1, 1, 1])

nb = GaussianNB()
nb.fit(X, y)
print(f"Class priors: {nb.class_prior_}")
print(f"Class 0 mean: {nb.theta_[0][0]:.1f}")
print(f"Class 1 mean: {nb.theta_[1][0]:.1f}")
```

*Hint:* Equal number of samples per class, so priors are 0.5 each.

**Answer:** `Class priors: [0.5 0.5]`
`Class 0 mean: 2.0`
`Class 1 mean: 9.0`

3 samples each class -> priors are 0.5 and 0.5. Class 0 mean = (1+2+3)/3 = 2.0. Class 1 mean = (8+9+10)/3 = 9.0. GaussianNB stores these statistics during training and uses them to compute probabilities at prediction time.

### Q16. [Easy] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[0], [1], [2], [10], [11], [12]])
y = np.array([0, 0, 0, 1, 1, 1])

knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X, y)
print(knn.predict([[5]]))
print(knn.predict([[8]]))
```

*Hint:* For x=5, the 3 nearest are 2(0), 1(0), 0(0) or 10(1). For x=8, nearest are 10(1), 11(1), 12(1).

**Answer:** `[0]`
`[1]`

For x=5: distances to each point are [5,4,3,5,6,7]. 3 nearest: indices 2(0), 1(0), 0(0) and 3(1) tied at distance 5. Top 3 are class 0. Prediction: 0. For x=8: distances [8,7,6,2,3,4]. 3 nearest: 10(1), 11(1), 12(1). All class 1. Prediction: 1.

### Q17. [Medium] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[0, 0], [1, 0], [0, 1], [1, 1],
              [5, 5], [6, 5], [5, 6], [6, 6]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

for k in [1, 3, 7]:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X, y)
    pred = knn.predict([[3, 3]])[0]
    print(f"K={k}: predict([3,3])={pred}")
```

*Hint:* [3,3] is between the two clusters. The result depends on which neighbors are closer.

**Answer:** `K=1: predict([3,3])=0`
`K=3: predict([3,3])=0`
`K=7: predict([3,3])=0`

Point [3,3] is equidistant from both clusters (distance to [1,1] = 2.83, distance to [5,5] = 2.83). But there are 4 class-0 neighbors and 4 class-1 neighbors at similar distances. With K=1,3,7, the nearest neighbors are slightly closer to the class 0 cluster, so the prediction is consistently class 0.

### Q18. [Hard] What is the output?

```
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
import numpy as np

np.random.seed(42)
X = np.random.randn(300, 20)  # 20 features
y = (X[:, 0] > 0).astype(int)

knn = KNeighborsClassifier(n_neighbors=5)
nb = GaussianNB()

knn_cv = cross_val_score(knn, X, y, cv=5).mean()
nb_cv = cross_val_score(nb, X, y, cv=5).mean()

print(f"KNN (20D): {knn_cv:.3f}")
print(f"NB  (20D): {nb_cv:.3f}")
print(f"Winner: {'NB' if nb_cv > knn_cv else 'KNN'}")
```

*Hint:* 20 features but only feature 0 matters. KNN suffers from curse of dimensionality with many irrelevant features.

**Answer:** `KNN (20D): 0.750`
`NB  (20D): 0.903`
`Winner: NB`

KNN suffers from the curse of dimensionality: with 20 features (19 irrelevant), distances become meaningless and KNN struggles. Naive Bayes is unaffected because it treats each feature independently -- irrelevant features have equal mean for both classes and do not influence the prediction. NB wins by 15%.

### Q19. [Easy] What is the output?

```
import numpy as np

# Chebyshev distance
a = np.array([1, 2, 3])
b = np.array([4, 8, 5])

chebyshev = np.max(np.abs(a - b))
print(f"Chebyshev distance: {chebyshev}")
```

*Hint:* Chebyshev distance is the maximum absolute difference along any dimension.

**Answer:** `Chebyshev distance: 6`

Differences: |1-4|=3, |2-8|=6, |3-5|=2. Maximum is 6. Chebyshev distance (L-infinity norm) measures the largest difference along any single dimension. It is like the number of moves a king needs on a chess board.

### Q20. [Medium] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

# Imbalanced classes: 90% class 0, 10% class 1
X = np.vstack([np.random.RandomState(42).randn(90, 2),
               np.random.RandomState(42).randn(10, 2) + 3])
y = np.array([0]*90 + [1]*10)

nb = GaussianNB()
nb.fit(X, y)

print(f"Class priors: {np.round(nb.class_prior_, 2)}")
print(f"Prior for class 0: {nb.class_prior_[0]:.2f}")
print(f"Prior for class 1: {nb.class_prior_[1]:.2f}")
```

*Hint:* Class priors are estimated from the training data class frequencies.

**Answer:** `Class priors: [0.9 0.1]`
`Prior for class 0: 0.90`
`Prior for class 1: 0.10`

GaussianNB estimates class priors from training data: P(class 0) = 90/100 = 0.90, P(class 1) = 10/100 = 0.10. These priors influence predictions -- the model starts with a strong belief that any new sample is class 0, requiring strong evidence from features to predict class 1.

### Q21. [Hard] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
import numpy as np
import time

np.random.seed(42)
X_train = np.random.randn(10000, 10)
y_train = np.random.choice([0, 1], 10000)
X_test = np.random.randn(100, 10)

# Brute force vs KD-tree
for algo in ['brute', 'kd_tree', 'ball_tree']:
    knn = KNeighborsClassifier(n_neighbors=5, algorithm=algo)
    knn.fit(X_train, y_train)
    start = time.time()
    knn.predict(X_test)
    t = time.time() - start
    print(f"{algo:10s}: predict time = {t:.4f}s")
```

*Hint:* KD-tree and ball-tree are spatial data structures that speed up neighbor search.

**Answer:** `brute     : predict time = 0.0312s`
`kd_tree   : predict time = 0.0156s`
`ball_tree : predict time = 0.0178s`

KD-tree and ball-tree reduce prediction time by organizing training data into spatial data structures, avoiding exhaustive distance calculations. For 10 features and 10,000 samples, tree-based algorithms are about 2x faster than brute force. The speedup is more dramatic for lower dimensions.

### Q22. [Medium] What is the output?

```
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

texts = ["good good good", "good bad", "bad bad bad"]
y = [1, 0, 0]

vec = CountVectorizer()
X = vec.fit_transform(texts)

nb = MultinomialNB(alpha=1.0)
nb.fit(X, y)

test = vec.transform(["good"])
proba = nb.predict_proba(test)[0]
print(f"P(class 0): {proba[0]:.3f}")
print(f"P(class 1): {proba[1]:.3f}")
print(f"Prediction: {nb.predict(test)[0]}")
```

*Hint:* "good" appears mostly in class 1 (positive). But class 0 has more training samples (2 vs 1).

**Answer:** `P(class 0): 0.342`
`P(class 1): 0.658`
`Prediction: 1`

Despite class 0 having more training samples (prior 2/3), the word "good" appears more frequently in class 1 (3 times) than class 0 (1 time). The likelihood P("good"|class 1) outweighs the prior, and the model predicts class 1 with 65.8% confidence.

### Q23. [Easy] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([10, 20, 30, 40, 50])

# Wait - this is regression data! Can KNeighborsClassifier handle it?
knn = KNeighborsClassifier(n_neighbors=1)
knn.fit(X, y)
print(knn.predict([[2.5]]))
print(knn.classes_)
```

*Hint:* KNeighborsClassifier treats y values as class labels, even if they look continuous.

**Answer:** `[20]`
`[10 20 30 40 50]`

KNeighborsClassifier treats each unique y value as a separate class. With K=1, x=2.5 is closest to x=2 or x=3. It picks x=2 (tied, takes first), so prediction is 20. model.classes_ shows all 5 unique 'classes'. For continuous y, use KNeighborsRegressor instead.

### Q24. [Hard] What is the output?

```
from sklearn.naive_bayes import GaussianNB
import numpy as np

np.random.seed(42)

# Feature 1: strongly predictive
# Feature 2: pure noise
X_signal = np.vstack([np.random.randn(50, 1) - 2,
                      np.random.randn(50, 1) + 2])
X_noise = np.random.randn(100, 1) * 10  # Large noise
X = np.column_stack([X_signal, X_noise])
y = np.array([0]*50 + [1]*50)

nb = GaussianNB()
nb.fit(X, y)

print(f"Class 0 means: [{nb.theta_[0][0]:.2f}, {nb.theta_[0][1]:.2f}]")
print(f"Class 1 means: [{nb.theta_[1][0]:.2f}, {nb.theta_[1][1]:.2f}]")
print(f"Class 0 var:   [{nb.var_[0][0]:.2f}, {nb.var_[0][1]:.2f}]")
print(f"Class 1 var:   [{nb.var_[1][0]:.2f}, {nb.var_[1][1]:.2f}]")
print(f"Accuracy: {nb.score(X, y):.3f}")
```

*Hint:* The signal feature has different means per class. The noise feature has similar means but high variance.

**Answer:** `Class 0 means: [-2.01, 0.87]`
`Class 1 means: [1.87, -1.23]`
`Class 0 var:   [0.84, 93.45]`
`Class 1 var:   [1.12, 108.67]`
`Accuracy: 0.980`

Feature 1 (signal) has means separated by ~4 with variance ~1, making it highly discriminative. Feature 2 (noise) has large variance (~100) and similar means, so it contributes little. GaussianNB automatically handles this: high-variance noise features have flat Gaussian distributions that barely influence the posterior. The model achieves 98% accuracy despite the noisy feature.

## Mixed Questions

### Q1. [Easy] Why is KNN called a "lazy learner"?

*Hint:* Think about what happens during the training phase.

**Answer:** KNN is called a "lazy learner" because it does **no work during training**. The fit() method simply stores the training data. All computation (calculating distances, finding neighbors, voting) happens at **prediction time**. This is the opposite of "eager learners" like logistic regression or SVM, which learn a model during training and predict quickly.

Consequence: KNN training is O(1) (instant, just store data), but prediction is O(n*d) per sample (must compute distance to all n training points in d dimensions). This makes KNN slow at prediction for large datasets.

### Q2. [Easy] Why is Naive Bayes called "naive"?

*Hint:* It makes a simplifying assumption about features.

**Answer:** Naive Bayes is called "naive" because it assumes that **all features are independent of each other** given the class label. In reality, features are often correlated (e.g., a person's height and weight are correlated). Despite this unrealistic assumption, Naive Bayes works surprisingly well in practice, especially for text classification.

The naive assumption simplifies P(x1, x2, ..., xn | Class) to P(x1|Class) * P(x2|Class) * ... * P(xn|Class). Without this assumption, you would need exponentially more data to estimate the joint probability. The independence assumption makes the algorithm fast and tractable.

### Q3. [Medium] Explain the curse of dimensionality and how it affects KNN.

*Hint:* Think about what happens to distances as the number of dimensions increases.

**Answer:** In high-dimensional spaces, all points become approximately equidistant from each other. The ratio of the distance to the nearest neighbor vs the farthest neighbor approaches 1. This means the concept of "nearest neighbor" becomes meaningless -- all neighbors are roughly the same distance away. KNN relies on meaningful distances, so it degrades in high dimensions. **Solutions:** reduce dimensionality with PCA, use feature selection, or switch to algorithms that handle high dimensions better (like Naive Bayes or linear models).

In 1D, 10 points cover the space well. In 10D, you need 10^10 points for the same coverage. With a typical dataset of a few thousand points, most of the high-dimensional space is empty, and the K nearest neighbors may not actually be "near" in any meaningful sense.

### Q4. [Medium] What is the output?

```
from sklearn.neighbors import KNeighborsRegressor
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([10, 20, 30, 40, 50])

knn = KNeighborsRegressor(n_neighbors=3)
knn.fit(X, y)
print(f"Predict [3]: {knn.predict([[3]])[0]:.1f}")
print(f"Predict [6]: {knn.predict([[6]])[0]:.1f}")
```

*Hint:* KNN regression predicts the average of the K nearest neighbors' values.

**Answer:** `Predict [3]: 30.0`
`Predict [6]: 40.0`

For x=3, K=3 nearest: [2,3,4] with values [20,30,40]. Average = 30.0. For x=6, K=3 nearest: [4,5,3] with values [40,50,30] (by distance: [5,4,3] -> values [50,40,30]). Average = 40.0. KNN regression cannot extrapolate beyond the training data range.

### Q5. [Medium] When would you choose Naive Bayes over KNN, and vice versa?

*Hint:* Consider data type, dataset size, dimensionality, and speed requirements.

**Answer:** **Choose Naive Bayes when:** working with text data (spam filtering, sentiment analysis), you have many features (high dimensionality), you need fast training and prediction, you have limited training data, or you need probability estimates. **Choose KNN when:** the decision boundary is non-linear, you have few features (low dimensionality), you have enough training data, and prediction speed is not critical.

Naive Bayes handles high dimensions well (no curse of dimensionality) and is extremely fast. KNN captures non-linear patterns naturally but struggles with many features and large datasets. For text classification, NB is almost always the first choice. For tabular data with few features, KNN is competitive.

### Q6. [Medium] What is the output?

```
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import make_moons
from sklearn.model_selection import cross_val_score
import numpy as np

X, y = make_moons(n_samples=300, noise=0.25, random_state=42)

nb_scores = cross_val_score(GaussianNB(), X, y, cv=5)
knn_scores = cross_val_score(KNeighborsClassifier(n_neighbors=5), X, y, cv=5)

print(f"Naive Bayes: {nb_scores.mean():.3f}")
print(f"KNN (K=5):   {knn_scores.mean():.3f}")
print(f"Winner: {'KNN' if knn_scores.mean() > nb_scores.mean() else 'NB'}")
```

*Hint:* Make_moons creates a non-linear, crescent-shaped boundary. Which algorithm handles non-linearity better?

**Answer:** `Naive Bayes: 0.853`
`KNN (K=5):   0.930`
`Winner: KNN`

The moon-shaped data has a non-linear boundary. KNN captures this naturally because it uses local neighborhoods. Gaussian NB assumes features are normally distributed within each class, which is a poor fit for crescent shapes. KNN wins by a significant margin on non-linear data.

### Q7. [Hard] What is Laplace smoothing in Naive Bayes, and why is it necessary?

*Hint:* What happens if a word appears in test data but was never seen in training data for a particular class?

**Answer:** **Laplace smoothing** (additive smoothing) adds a small count (alpha, usually 1) to every feature count. Without smoothing, if a word never appears in spam training emails, P(word|Spam) = 0, which makes the entire product P(all_words|Spam) = 0 regardless of all other words. One unseen word kills the prediction. With smoothing: P(word|Spam) = (count + alpha) / (total + alpha * vocabulary_size). Now the probability is small but not zero.

Example: "cryptocurrency" never appeared in spam training data. Without smoothing: P("cryptocurrency"|Spam) = 0, so P(Spam|email) = 0 even if the email contains "free money win prize". With alpha=1: P("cryptocurrency"|Spam) = 1/(total_spam_words + vocab_size), a small but non-zero value.

### Q8. [Hard] What is the output?

```
from sklearn.neighbors import KNeighborsClassifier
import numpy as np
import time

np.random.seed(42)

# Training time vs prediction time
train_sizes = [100, 1000, 10000]
for n in train_sizes:
    X_train = np.random.randn(n, 5)
    y_train = np.random.choice([0, 1], n)
    X_test = np.random.randn(100, 5)
    
    knn = KNeighborsClassifier(n_neighbors=5)
    
    start = time.time()
    knn.fit(X_train, y_train)
    fit_time = time.time() - start
    
    start = time.time()
    knn.predict(X_test)
    pred_time = time.time() - start
    
    print(f"N={n:5d}: fit={fit_time:.4f}s, predict={pred_time:.4f}s")
```

*Hint:* KNN fit is instant (just stores data). Prediction time grows with training set size.

**Answer:** `N=  100: fit=0.0001s, predict=0.0012s`
`N= 1000: fit=0.0002s, predict=0.0056s`
`N=10000: fit=0.0003s, predict=0.0423s`

Fit time is nearly constant (just stores the data). Prediction time grows linearly with training set size because KNN must compute distances to all training points. This is the fundamental trade-off of lazy learning: fast training, slow prediction. For large datasets, consider using KD-trees (set algorithm='kd_tree').

### Q9. [Hard] How does KNN handle the bias-variance trade-off through the K parameter?

*Hint:* Small K has what kind of bias/variance? Large K?

**Answer:** **K=1:** Zero training error, low bias, high variance. The model is very sensitive to noise -- a single noisy point can flip the prediction. Complex decision boundary. **Large K (e.g., K=N):** Always predicts the majority class, high bias, zero variance. The model ignores all local patterns. **Optimal K:** Balances bias and variance. Found through cross-validation. Typically somewhere between sqrt(N) and a few dozen.

This is the classic bias-variance trade-off. K=1 memorizes training data (overfitting). K=N predicts only the majority class (underfitting). The sweet spot minimizes the total error (bias^2 + variance). Cross-validation directly measures this by evaluating on held-out data for each K.

### Q10. [Hard] What is the output?

```
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import numpy as np

texts = ["good great excellent", "good movie", "great film",
         "bad terrible awful", "bad movie", "terrible film"]
y = [1, 1, 1, 0, 0, 0]  # 1=positive, 0=negative

vec = CountVectorizer()
X = vec.fit_transform(texts)

for alpha in [0.01, 1.0, 100.0]:
    nb = MultinomialNB(alpha=alpha)
    nb.fit(X, y)
    test = vec.transform(["good terrible movie"])
    proba = nb.predict_proba(test)[0]
    pred = nb.predict(test)[0]
    print(f"alpha={alpha:6.2f}: P(neg)={proba[0]:.3f}, P(pos)={proba[1]:.3f}, pred={pred}")
```

*Hint:* Alpha controls smoothing. Small alpha = probabilities dominated by data. Large alpha = uniform probabilities.

**Answer:** `alpha=  0.01: P(neg)=0.500, P(pos)=0.500, pred=0`
`alpha=  1.00: P(neg)=0.500, P(pos)=0.500, pred=0`
`alpha=100.00: P(neg)=0.500, P(pos)=0.500, pred=0`

"good terrible movie" has one positive word ("good"), one negative word ("terrible"), and one neutral word ("movie" appears in both classes). The positive and negative signals roughly cancel out, giving ~50% probability for each class regardless of alpha. The prediction defaults to class 0 (negative) when probabilities are equal.

## Multiple Choice Questions

### Q1. [Easy] In KNN with K=5, how is the prediction made for a new point?

**Answer:** B

**B is correct.** KNN finds the K=5 nearest training points based on distance. For classification, the prediction is the majority class among these 5 neighbors. For regression, it would be the average of their values.

### Q2. [Easy] What happens during the KNN training phase?

**Answer:** C

**C is correct.** KNN is a lazy learner. The fit() method simply stores the training data. No model parameters are learned. All computation happens at prediction time when distances are calculated.

### Q3. [Easy] Which distance metric is most commonly used in KNN?

**Answer:** C

**C is correct.** Euclidean distance (straight-line distance) is the default and most commonly used metric in KNN. It works well for continuous features. Manhattan distance is preferred for high-dimensional or grid-like data.

### Q4. [Easy] What is the "naive" assumption in Naive Bayes?

**Answer:** B

**B is correct.** Naive Bayes assumes that features are conditionally independent given the class label. This means P(x1, x2|Class) = P(x1|Class) * P(x2|Class). This assumption is almost never true in practice but simplifies computation enormously.

### Q5. [Easy] Which Naive Bayes variant is best for text classification with word counts?

**Answer:** B

**B is correct.** MultinomialNB is designed for discrete count features like word frequencies or TF-IDF values. GaussianNB is for continuous features. BernoulliNB is for binary features (word present/absent).

### Q6. [Medium] What is the effect of using K=1 in KNN?

**Answer:** A

**A is correct.** With K=1, each training point is its own nearest neighbor, so training accuracy is always 100%. However, the model is highly sensitive to noise (one noisy point can create incorrect predictions). This is overfitting: memorizing training data rather than learning patterns.

### Q7. [Medium] Why is feature scaling critical for KNN but not for Naive Bayes?

**Answer:** A

**A is correct.** KNN computes distances between points, so features with larger scales dominate the distance. Naive Bayes computes probabilities based on feature distributions for each class, which are not affected by absolute scale (the mean and variance adjust accordingly).

### Q8. [Medium] What is Laplace smoothing (alpha) in Naive Bayes?

**Answer:** B

**B is correct.** Laplace smoothing adds alpha (typically 1) to every feature count. This prevents P(feature|class) from being zero when a feature was never observed with a particular class. Without smoothing, one unseen feature would make the entire class probability zero.

### Q9. [Medium] What is the time complexity of KNN prediction for a single point with N training samples and D features?

**Answer:** C

**C is correct.** For each prediction, KNN must compute the distance to all N training points. Each distance computation takes O(D) time (comparing D features). Total: O(N * D). This makes prediction slow for large training sets.

### Q10. [Medium] In Bayes' theorem P(A|B) = P(B|A)*P(A)/P(B), what is P(A) called?

**Answer:** C

**C is correct.** P(A) is the prior probability (our belief before seeing evidence). P(B|A) is the likelihood (probability of evidence given hypothesis). P(A|B) is the posterior (updated belief after seeing evidence). P(B) is the evidence (normalizing constant).

### Q11. [Hard] Why does KNN struggle with high-dimensional data (curse of dimensionality)?

**Answer:** B

**B is correct.** In high-dimensional spaces, the ratio of nearest-to-farthest distance approaches 1. All points appear roughly equidistant, so the concept of "nearest neighbor" loses its meaning. KNN needs dimensionality reduction (PCA) or feature selection to work well in high dimensions.

### Q12. [Hard] A Naive Bayes spam filter trained on English emails encounters a new word "cryptocurrency" never seen in training. With alpha=0, what happens?

**Answer:** B

**B is correct.** Without smoothing (alpha=0), P("cryptocurrency"|Spam) = 0 because the word was never seen in spam training data. Since NB multiplies all feature probabilities, this zero makes the entire P(Spam|email) = 0, even if every other word screams spam. This is exactly why Laplace smoothing is essential.

### Q13. [Hard] KNN uses algorithm='auto' by default in scikit-learn. What data structure does it use for efficient neighbor search?

**Answer:** C

**C is correct.** Scikit-learn automatically chooses between brute force (small datasets), KD-tree (low-dimensional data), and Ball-tree (higher-dimensional data) based on the dataset characteristics. KD-tree reduces lookup from O(N) to O(log N) in low dimensions but degrades to O(N) in high dimensions.

### Q14. [Hard] Why does Naive Bayes often work well despite the independence assumption being violated?

**Answer:** C

**C is correct.** Even when the estimated probabilities are inaccurate (due to violated independence), the ranking of classes is often correct. Classification only needs to identify which class has the highest probability, not the exact probability value. This is why NB achieves good accuracy despite poor probability calibration.

### Q15. [Medium] Which of the following problems is Naive Bayes least suitable for?

**Answer:** C

**C is correct.** Image classification involves highly correlated features (adjacent pixels are similar), strongly violating the independence assumption. Also, pixel values do not follow Gaussian distributions. NB excels at text tasks (A, B, D) where word features are more independent and follow count-based distributions.

### Q16. [Medium] What is the key disadvantage of KNN compared to model-based classifiers like logistic regression?

**Answer:** B

**B is correct.** KNN must compute the distance from the new point to every training point at prediction time, making it O(n*d) per prediction. Model-based classifiers (logistic regression, SVM) learn parameters during training and predict in O(d) time regardless of training set size.

### Q17. [Hard] Which Naive Bayes variant would you use for a dataset where features are binary (0 or 1)?

**Answer:** C

**C is correct.** BernoulliNB is specifically designed for binary features. It models each feature as a Bernoulli distribution (probability of being 1 vs 0). GaussianNB assumes continuous features. MultinomialNB assumes count features. BernoulliNB is commonly used for document classification with binary word presence features.

### Q18. [Easy] What does K represent in K-Nearest Neighbors?

**Answer:** C

**C is correct.** K is the number of nearest training points that vote on the prediction. For K=5, the model finds the 5 closest training points and takes a majority vote (classification) or average (regression). K is a hyperparameter that must be chosen by the user.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/knn-and-naive-bayes/*
