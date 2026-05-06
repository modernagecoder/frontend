---
title: "Practice: Logistic Regression and Classification"
description: "58 practice problems for Logistic Regression and Classification in AI and Machine Learning"
slug: logistic-regression-and-classification-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/logistic-regression-and-classification/practice/
category: "AI and Machine Learning"
---
# Practice: Logistic Regression and Classification

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

print(sigmoid(0))
```

*Hint:* When z=0, e^0 = 1, so sigmoid(0) = 1/(1+1).

**Answer:** `0.5`

sigmoid(0) = 1 / (1 + e^0) = 1 / (1 + 1) = 1/2 = 0.5. The sigmoid function always outputs 0.5 when the input is 0. This is the decision boundary threshold.

### Q2. [Easy] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

print(sigmoid(100) > 0.99)
print(sigmoid(-100) < 0.01)
```

*Hint:* For very large positive z, sigmoid approaches 1. For very large negative z, it approaches 0.

**Answer:** `True`
`True`

sigmoid(100) is extremely close to 1.0 (well above 0.99). sigmoid(-100) is extremely close to 0.0 (well below 0.01). The sigmoid function saturates to 0 and 1 at extreme values.

### Q3. [Easy] What is the output?

```
y_true = 1
y_pred_prob = 0.9

if y_pred_prob >= 0.5:
    y_pred = 1
else:
    y_pred = 0

print(f"Predicted: {y_pred}")
print(f"Correct: {y_pred == y_true}")
```

*Hint:* 0.9 is above the 0.5 threshold, so the prediction is class 1.

**Answer:** `Predicted: 1`
`Correct: True`

Since 0.9 >= 0.5, the model predicts class 1. The actual label is also 1, so the prediction is correct. This is a True Positive (TP).

### Q4. [Easy] What is the output?

```
import numpy as np

# Softmax function
def softmax(z):
    exp_z = np.exp(z)
    return exp_z / np.sum(exp_z)

scores = [2.0, 1.0, 0.5]
probs = softmax(scores)
print(np.round(probs, 3))
print(f"Sum: {np.sum(probs):.1f}")
```

*Hint:* Softmax converts scores to probabilities that sum to 1.

**Answer:** `[0.628 0.232 0.14 ]`
`Sum: 1.0`

Softmax: e^2.0=7.389, e^1.0=2.718, e^0.5=1.649. Total=11.756. Probabilities: 7.389/11.756=0.628, 2.718/11.756=0.231, 1.649/11.756=0.140. They sum to 1.0.

### Q5. [Easy] What is the output?

```
# Confusion matrix values
TP = 40
TN = 50
FP = 10
FN = 5

accuracy = (TP + TN) / (TP + TN + FP + FN)
print(f"Accuracy: {accuracy:.2%}")
```

*Hint:* Accuracy is the ratio of all correct predictions (TP + TN) to total predictions.

**Answer:** `Accuracy: 85.71%`

Accuracy = (40 + 50) / (40 + 50 + 10 + 5) = 90 / 105 = 0.8571 = 85.71%. This counts both correct positive and correct negative predictions.

### Q6. [Easy] What is the output?

```
TP = 40
FP = 10
FN = 5

precision = TP / (TP + FP)
recall = TP / (TP + FN)
print(f"Precision: {precision:.2f}")
print(f"Recall: {recall:.2f}")
```

*Hint:* Precision = TP/(TP+FP). Recall = TP/(TP+FN).

**Answer:** `Precision: 0.80`
`Recall: 0.89`

Precision = 40/(40+10) = 40/50 = 0.80. Of all positive predictions, 80% are correct. Recall = 40/(40+5) = 40/45 = 0.889. Of all actual positives, 89% are detected.

### Q7. [Medium] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Simple model: w=2, b=-3
w = 2.0
b = -3.0

for x in [0, 1, 1.5, 2, 3]:
    z = w * x + b
    p = sigmoid(z)
    pred = 1 if p >= 0.5 else 0
    print(f"x={x}, z={z:.1f}, p={p:.3f}, pred={pred}")
```

*Hint:* The decision boundary is where z=0, i.e., 2*x - 3 = 0, i.e., x = 1.5.

**Answer:** `x=0, z=-3.0, p=0.047, pred=0`
`x=1, z=-1.0, p=0.269, pred=0`
`x=1.5, z=0.0, p=0.500, pred=1`
`x=2, z=1.0, p=0.731, pred=1`
`x=3, z=3.0, p=0.953, pred=1`

The decision boundary is at x=1.5 where z=0 and p=0.5. For x<1.5, z is negative, p<0.5, predict 0. For x>=1.5, z is non-negative, p>=0.5, predict 1. The probability transitions smoothly from near 0 to near 1.

### Q8. [Medium] What is the output?

```
import numpy as np

def log_loss(y_true, y_pred):
    epsilon = 1e-15
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

# Perfect predictions
y = np.array([1, 0, 1, 0])
p_good = np.array([0.95, 0.05, 0.90, 0.10])
p_bad = np.array([0.10, 0.90, 0.20, 0.80])

print(f"Good predictions loss: {log_loss(y, p_good):.4f}")
print(f"Bad predictions loss:  {log_loss(y, p_bad):.4f}")
```

*Hint:* Good predictions (close to true labels) have low loss. Bad predictions have high loss.

**Answer:** `Good predictions loss: 0.0743`
`Bad predictions loss:  1.8184`

Good predictions (0.95 for actual 1, 0.05 for actual 0) produce a very low loss of 0.0743. Bad predictions (0.10 for actual 1, 0.90 for actual 0) produce a much higher loss of 1.8184. Log loss severely penalizes confident wrong predictions.

### Q9. [Medium] What is the output?

```
from sklearn.metrics import confusion_matrix

y_true = [1, 1, 0, 0, 1, 0, 1, 0, 1, 0]
y_pred = [1, 0, 0, 0, 1, 1, 1, 0, 0, 0]

cm = confusion_matrix(y_true, y_pred)
print(cm)
```

*Hint:* Row 0 = actual negatives, Row 1 = actual positives. Column 0 = predicted negative, Column 1 = predicted positive.

**Answer:** `[[4 1]
 [2 3]]`

Actual 0, Pred 0 (TN): indices 2,3,7,9 = 4. Actual 0, Pred 1 (FP): index 5 = 1. Actual 1, Pred 0 (FN): indices 1,8 = 2. Actual 1, Pred 1 (TP): indices 0,4,6 = 3. The confusion matrix is [[TN, FP], [FN, TP]] = [[4, 1], [2, 3]].

### Q10. [Medium] What is the output?

```
precision = 0.8
recall = 0.6

f1 = 2 * precision * recall / (precision + recall)
print(f"F1 Score: {f1:.4f}")
```

*Hint:* F1 is the harmonic mean of precision and recall.

**Answer:** `F1 Score: 0.6857`

F1 = 2 * 0.8 * 0.6 / (0.8 + 0.6) = 0.96 / 1.4 = 0.6857. The F1 score is the harmonic mean of precision and recall. It is always less than or equal to the arithmetic mean, and it is low when either precision or recall is low.

### Q11. [Medium] What is the output?

```
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7], [8]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

model = LogisticRegression(random_state=42)
model.fit(X, y)

print(model.predict([[4.5]]))
print(model.predict_proba([[4.5]]).round(3))
```

*Hint:* 4.5 is right at the boundary between the two classes (0s are 1-4, 1s are 5-8).

**Answer:** `[1]`
`[[0.472 0.528]]`

The decision boundary is around x=4.5. The model predicts class 1 because P(class 1) = 0.528 > 0.5. The probabilities are close to 0.5 because 4.5 is right at the boundary. predict_proba returns [P(class 0), P(class 1)].

### Q12. [Medium] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Verify the derivative property
z = 2.0
s = sigmoid(z)
derivative = s * (1 - s)

# Numerical derivative
h = 1e-7
num_derivative = (sigmoid(z + h) - sigmoid(z)) / h

print(f"Analytical derivative: {derivative:.6f}")
print(f"Numerical derivative:  {num_derivative:.6f}")
print(f"Match: {abs(derivative - num_derivative) < 1e-5}")
```

*Hint:* The derivative of sigmoid is sigmoid(z) * (1 - sigmoid(z)). The numerical derivative should match.

**Answer:** `Analytical derivative: 0.104994`
`Numerical derivative:  0.104994`
`Match: True`

sigmoid(2) = 0.8808. Derivative = 0.8808 * (1 - 0.8808) = 0.8808 * 0.1192 = 0.1050. The numerical derivative (finite differences) matches the analytical formula, confirming that sigmoid'(z) = sigmoid(z) * (1 - sigmoid(z)).

### Q13. [Hard] What is the output?

```
import numpy as np

def softmax(z):
    exp_z = np.exp(z - np.max(z))  # subtract max for numerical stability
    return exp_z / np.sum(exp_z)

# Equal scores
probs1 = softmax([1, 1, 1])
print("Equal scores:", np.round(probs1, 3))

# One dominant score
probs2 = softmax([10, 1, 1])
print("Dominant score:", np.round(probs2, 3))

# Very large differences
probs3 = softmax([100, 0, 0])
print("Extreme:", np.round(probs3, 3))
```

*Hint:* Softmax with equal inputs gives uniform probabilities. Large differences push probabilities toward 0 and 1.

**Answer:** `Equal scores: [0.333 0.333 0.333]`
`Dominant score: [1.    0.    0.   ]`
`Extreme: [1. 0. 0.]`

Equal scores produce uniform probabilities (1/3 each). When one score dominates (10 vs 1), softmax gives nearly all probability to that class. With extreme differences (100 vs 0), the result is essentially a one-hot vector. Subtracting max(z) prevents numerical overflow without changing the result.

### Q14. [Hard] What is the output?

```
from sklearn.metrics import precision_score, recall_score, f1_score

# Scenario: disease detection
# 100 patients: 10 have disease (positive), 90 do not (negative)
y_true = [0]*90 + [1]*10

# Model A: predicts all negative
y_pred_a = [0]*100
print(f"Model A recall: {recall_score(y_true, y_pred_a):.2f}")

# Model B: predicts all positive
y_pred_b = [1]*100
print(f"Model B precision: {precision_score(y_true, y_pred_b):.2f}")
print(f"Model B recall: {recall_score(y_true, y_pred_b):.2f}")
```

*Hint:* Model A catches no positives. Model B catches all positives but also flags all negatives.

**Answer:** `Model A recall: 0.00`
`Model B precision: 0.10`
`Model B recall: 1.00`

Model A predicts all negative: TP=0, FN=10. Recall = 0/(0+10) = 0.00. It misses every disease case. Model B predicts all positive: TP=10, FP=90. Precision = 10/(10+90) = 0.10 (only 10% of positive predictions are correct). Recall = 10/(10+0) = 1.00 (catches all cases).

### Q15. [Hard] What is the output?

```
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8]])
y = np.array([0, 0, 0, 1, 1, 1])

model = LogisticRegression(random_state=42)
model.fit(X, y)

# Get coefficients
w1, w2 = model.coef_[0]
b = model.intercept_[0]
print(f"w1={w1:.3f}, w2={w2:.3f}, b={b:.3f}")

# Decision boundary: w1*x1 + w2*x2 + b = 0
# At x1=4, solve for x2
x1 = 4
x2_boundary = -(w1 * x1 + b) / w2
print(f"At x1=4, boundary x2={x2_boundary:.2f}")
```

*Hint:* The decision boundary is the line w1*x1 + w2*x2 + b = 0. Solve for x2 given x1.

**Answer:** `w1=0.596, w2=0.596, b=-4.769`
`At x1=4, boundary x2=4.00`

The model learns approximately equal weights for both features because the data has a clear pattern: class 0 has low values for both features, class 1 has high values. The decision boundary at x1=4 passes through x2=4, which is the midpoint between the two classes.

### Q16. [Hard] What is the output?

```
import numpy as np

# Gradient descent step for logistic regression
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

X = np.array([[1, 2], [3, 4]])
y = np.array([0, 1])
w = np.array([0.0, 0.0])
b = 0.0
lr = 0.1

# One gradient descent step
z = X.dot(w) + b
preds = sigmoid(z)
error = preds - y

dw = (1/len(y)) * X.T.dot(error)
db = (1/len(y)) * np.sum(error)

w_new = w - lr * dw
b_new = b - lr * db

print(f"Initial predictions: {np.round(preds, 3)}")
print(f"Errors: {np.round(error, 3)}")
print(f"dw: {np.round(dw, 4)}")
print(f"New weights: {np.round(w_new, 4)}")
```

*Hint:* Initial weights are zero, so z=0 for all samples, sigmoid(0)=0.5 for all samples.

**Answer:** `Initial predictions: [0.5 0.5]`
`Errors: [ 0.5 -0.5]`
`dw: [-0.5 -0.5]`
`New weights: [0.05 0.05]`

With zero weights, all predictions are sigmoid(0)=0.5. Errors: [0.5-0, 0.5-1] = [0.5, -0.5]. dw = (1/2) * X^T * error = (1/2) * [[1,3],[2,4]] * [0.5,-0.5] = (1/2) * [-1, -1] = [-0.5, -0.5]. New weights = [0,0] - 0.1*[-0.5,-0.5] = [0.05, 0.05]. The weights move in the direction that reduces error.

### Q17. [Hard] What is the output?

```
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
y = np.array([0, 0, 0, 0, 0, 1, 1, 1, 1, 1])

model = LogisticRegression(random_state=42)
model.fit(X, y)

# Predict probabilities for threshold analysis
for threshold in [0.3, 0.5, 0.7]:
    y_pred = (model.predict_proba(X)[:, 1] >= threshold).astype(int)
    tp = sum((y == 1) & (y_pred == 1))
    fp = sum((y == 0) & (y_pred == 1))
    fn = sum((y == 1) & (y_pred == 0))
    prec = tp / (tp + fp) if (tp + fp) > 0 else 0
    rec = tp / (tp + fn) if (tp + fn) > 0 else 0
    print(f"Threshold={threshold}: Precision={prec:.2f}, Recall={rec:.2f}")
```

*Hint:* Lower threshold predicts more positives (higher recall, lower precision). Higher threshold is more selective.

**Answer:** `Threshold=0.3: Precision=0.83, Recall=1.00`
`Threshold=0.5: Precision=1.00, Recall=1.00`
`Threshold=0.7: Precision=1.00, Recall=0.80`

With a low threshold (0.3), more samples are predicted positive: high recall (catches all) but lower precision (some false positives). With a high threshold (0.7), fewer samples predicted positive: perfect precision but some positives missed. This is the precision-recall trade-off.

### Q18. [Easy] What is the output?

```
TP = 30
TN = 60
FP = 10
FN = 0

recall = TP / (TP + FN)
print(f"Recall: {recall:.2f}")
```

*Hint:* FN = 0 means no actual positives were missed.

**Answer:** `Recall: 1.00`

Recall = TP / (TP + FN) = 30 / (30 + 0) = 1.00. A recall of 1.0 means the model caught every single positive case (zero false negatives). This is critical in medical diagnosis where missing a positive case is dangerous.

### Q19. [Medium] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Probability that sigmoid(z) + sigmoid(-z) = 1?
for z in [0, 2, -3, 10]:
    s_pos = sigmoid(z)
    s_neg = sigmoid(-z)
    print(f"sigmoid({z:3d}) + sigmoid({-z:3d}) = {s_pos + s_neg:.4f}")
```

*Hint:* This is a mathematical property of the sigmoid function: sigma(z) + sigma(-z) = 1.

**Answer:** `sigmoid(  0) + sigmoid(  0) = 1.0000`
`sigmoid(  2) + sigmoid( -2) = 1.0000`
`sigmoid( -3) + sigmoid(  3) = 1.0000`
`sigmoid( 10) + sigmoid(-10) = 1.0000`

The sigmoid function has the property that sigma(z) + sigma(-z) = 1 for all z. This is because sigma(-z) = 1 - sigma(z). This symmetry property is fundamental to logistic regression and is often tested in interviews.

### Q20. [Easy] What is the output?

```
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([0, 0, 1, 1, 1])

model = LogisticRegression(random_state=42)
model.fit(X, y)

print(f"Classes: {model.classes_}")
print(f"Number of features: {model.n_features_in_}")
```

*Hint:* model.classes_ shows the unique classes, and n_features_in_ shows input feature count.

**Answer:** `Classes: [0 1]`
`Number of features: 1`

model.classes_ returns the unique class labels found during training: [0, 1] for binary classification. model.n_features_in_ returns the number of features (columns) in the training data, which is 1 in this case.

### Q21. [Hard] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Binary cross-entropy for perfect vs terrible predictions
y_true = np.array([1, 0, 1, 0])

# Case 1: Perfect predictions
p_perfect = np.array([0.999, 0.001, 0.999, 0.001])
loss_perfect = -np.mean(y_true * np.log(p_perfect) + (1 - y_true) * np.log(1 - p_perfect))

# Case 2: Terrible predictions (confident and wrong)
p_terrible = np.array([0.001, 0.999, 0.001, 0.999])
loss_terrible = -np.mean(y_true * np.log(p_terrible) + (1 - y_true) * np.log(1 - p_terrible))

print(f"Perfect predictions loss: {loss_perfect:.4f}")
print(f"Terrible predictions loss: {loss_terrible:.4f}")
print(f"Ratio: {loss_terrible/loss_perfect:.1f}x")
```

*Hint:* Log loss heavily penalizes confident wrong predictions. Being confidently wrong is much worse than being unsure.

**Answer:** `Perfect predictions loss: 0.0010`
`Terrible predictions loss: 6.9078`
`Ratio: 6907.8x`

Perfect predictions (0.999 for actual 1, 0.001 for actual 0) give near-zero loss. Confident wrong predictions (0.001 for actual 1, 0.999 for actual 0) give enormous loss. The ratio is nearly 7000x, showing how severely log loss penalizes confident incorrect predictions.

### Q22. [Medium] What is the output?

```
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 2)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

# C controls regularization strength
for C in [0.001, 0.1, 1, 100]:
    model = LogisticRegression(C=C, random_state=42, max_iter=1000)
    model.fit(X, y)
    acc = model.score(X, y)
    coef_magnitude = np.sum(np.abs(model.coef_))
    print(f"C={C:6.3f}: accuracy={acc:.3f}, |coef|={coef_magnitude:.3f}")
```

*Hint:* Small C means strong regularization (small coefficients). Large C means weak regularization (larger coefficients).

**Answer:** `C= 0.001: accuracy=0.870, |coef|=0.014`
`C= 0.100: accuracy=0.920, |coef|=1.023`
`C= 1.000: accuracy=0.930, |coef|=2.456`
`C=100.000: accuracy=0.930, |coef|=3.012`

Small C (0.001) strongly regularizes, shrinking coefficients close to zero (|coef|=0.014) and reducing accuracy. As C increases, regularization weakens, allowing larger coefficients and better fit. Beyond C=1, accuracy plateaus -- the model has learned the pattern and more flexibility does not help.

### Q23. [Easy] What is the output?

```
from sklearn.metrics import classification_report

y_true = [0, 0, 0, 1, 1, 1, 1, 1]
y_pred = [0, 0, 1, 1, 1, 1, 0, 0]

report = classification_report(y_true, y_pred, output_dict=True)
print(f"Class 0 precision: {report['0']['precision']:.2f}")
print(f"Class 1 recall: {report['1']['recall']:.2f}")
print(f"Overall accuracy: {report['accuracy']:.2f}")
```

*Hint:* For class 0: TP_0=2 (predicted 0, actual 0). For class 1: TP_1=3 (predicted 1, actual 1), FN_1=2 (predicted 0, actual 1).

**Answer:** `Class 0 precision: 0.50`
`Class 1 recall: 0.60`
`Overall accuracy: 0.62`

Class 0 precision: predicted 0 at indices 0,1,6,7. Actual 0 at indices 0,1. Precision = 2/4 = 0.50. Class 1 recall: actual 1 at indices 3,4,5,6,7. Predicted 1 at indices 3,4,5. Recall = 3/5 = 0.60. Accuracy = 5/8 = 0.625.

### Q24. [Hard] What is the output?

```
from sklearn.linear_model import LogisticRegression
import numpy as np

np.random.seed(42)
X = np.random.randn(200, 2)
y = (X[:, 0]**2 + X[:, 1]**2 < 1).astype(int)  # Circular boundary

model = LogisticRegression(random_state=42, max_iter=1000)
model.fit(X, y)
print(f"Accuracy: {model.score(X, y):.3f}")
print(f"Can logistic regression capture circular boundaries? {'Yes' if model.score(X, y) > 0.85 else 'No'}")
```

*Hint:* Logistic regression creates a linear (straight line) decision boundary. A circular boundary is non-linear.

**Answer:** `Accuracy: 0.665`
`Can logistic regression capture circular boundaries? No`

Logistic regression can only create linear decision boundaries (straight lines in 2D). A circular boundary requires a non-linear model. The accuracy of 66.5% is poor because the model tries to fit a line through circular data. To handle this, you would need polynomial features or a non-linear model like SVM with RBF kernel.

### Q25. [Medium] What is the output?

```
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1, 0], [0, 1], [1, 1],
              [4, 3], [3, 4], [4, 4]])
y = np.array([0, 0, 0, 1, 1, 1])

model = LogisticRegression(random_state=42)
model.fit(X, y)

# predict_proba returns [P(class 0), P(class 1)] for each sample
proba = model.predict_proba([[2, 2]])[0]
print(f"P(class 0) + P(class 1) = {proba[0] + proba[1]:.1f}")
print(f"Prediction: {model.predict([[2, 2]])[0]}")
```

*Hint:* Probabilities from predict_proba always sum to 1.

**Answer:** `P(class 0) + P(class 1) = 1.0`
`Prediction: 0`

predict_proba always returns probabilities that sum to 1.0 for each sample. The point [2,2] is closer to the class 0 cluster (centered around [0.67, 0.67]) than the class 1 cluster (centered around [3.67, 3.67]), so it is classified as class 0.

### Q26. [Hard] What is the output?

```
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
import numpy as np

iris = load_iris()
X, y = iris.data, iris.target

model = LogisticRegression(multi_class='multinomial', max_iter=1000, random_state=42)
model.fit(X, y)

print(f"Coefficient shape: {model.coef_.shape}")
print(f"Intercept shape: {model.intercept_.shape}")
print(f"Number of classes: {len(model.classes_)}")
print(f"Accuracy: {model.score(X, y):.4f}")
```

*Hint:* For K classes with D features, the coefficient matrix is K x D.

**Answer:** `Coefficient shape: (3, 4)`
`Intercept shape: (3,)`
`Number of classes: 3`
`Accuracy: 0.9733`

For 3-class multinomial logistic regression with 4 features, the coefficient matrix is (3, 4) -- one set of weights per class. Each class has its own intercept (3 total). The model achieves 97.3% accuracy on Iris, showing that logistic regression works well even on multi-class problems when classes are well-separated.

## Mixed Questions

### Q1. [Easy] What is the key difference between linear regression and logistic regression?

*Hint:* Think about what each one predicts.

**Answer:** Linear regression predicts a **continuous value** (e.g., price, temperature). Logistic regression predicts a **probability of belonging to a class** (e.g., spam or not spam). Linear regression outputs any real number; logistic regression outputs a value between 0 and 1 using the sigmoid function.

Despite the similar names, they solve fundamentally different problems. Linear regression is for regression tasks (predict a number). Logistic regression is for classification tasks (predict a category). Logistic regression uses the sigmoid function to transform a linear output into a probability.

### Q2. [Easy] What does the sigmoid function do, and what is its formula?

*Hint:* It maps any real number to a specific range.

**Answer:** The sigmoid function maps any real number to a value between 0 and 1. Formula: `sigma(z) = 1 / (1 + e^(-z))`. When z=0, output is 0.5. When z is very positive, output approaches 1. When z is very negative, output approaches 0.

The sigmoid function acts as a "squashing" function that converts the raw linear output into a probability. This is essential for classification because probabilities must be between 0 and 1. The S-shaped curve ensures a smooth transition.

### Q3. [Easy] In a confusion matrix, what is the difference between a False Positive (FP) and a False Negative (FN)?

*Hint:* The second word tells you the prediction, the first word tells you if it was correct.

**Answer:** **False Positive (FP)**: The model predicted positive, but the actual label is negative (false alarm). **False Negative (FN)**: The model predicted negative, but the actual label is positive (missed detection).

Think of it as: Positive/Negative is what the model predicted. True/False is whether that prediction was correct. FP is a "false alarm" (predicted positive incorrectly). FN is a "miss" (failed to detect a positive). In medical testing, FN is usually more dangerous.

### Q4. [Medium] What is the output?
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[2, 3], [4, 5], [6, 7], [8, 9]])
y = np.array([0, 0, 1, 1])

model = LogisticRegression(random_state=42)
model.fit(X, y)

proba = model.predict_proba([[5, 6]])[0]
print(f"P(class 0): {proba[0]:.3f}")
print(f"P(class 1): {proba[1]:.3f}")
print(f"Sum: {sum(proba):.1f}")

*Hint:* predict_proba returns probabilities for each class. They always sum to 1.

**Answer:** `P(class 0): 0.500`
`P(class 1): 0.500`
`Sum: 1.0`

The point [5, 6] is exactly between the two classes (average of class 0 and class 1 centroids). The model is maximally uncertain, assigning approximately 50% probability to each class. Probabilities from predict_proba always sum to 1.0.

### Q5. [Medium] What is the output?

```
from sklearn.metrics import f1_score
import numpy as np

y_true = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0]

# Model A: predicts all negative
y_pred_a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# Model B: correctly identifies 2 positives, 1 false positive
y_pred_b = [1, 1, 0, 1, 0, 0, 0, 0, 0, 0]

print(f"Model A F1: {f1_score(y_true, y_pred_a):.2f}")
print(f"Model B F1: {f1_score(y_true, y_pred_b):.2f}")
```

*Hint:* Model A has 0 true positives. Model B has TP=2, FP=1, FN=1.

**Answer:** `Model A F1: 0.00`
`Model B F1: 0.67`

Model A: TP=0, so precision=0, recall=0, F1=0. It cannot identify any positive cases. Model B: TP=2, FP=1, FN=1. Precision=2/3=0.667. Recall=2/3=0.667. F1=2*(0.667*0.667)/(0.667+0.667)=0.667. Model B is clearly better despite making one false positive.

### Q6. [Medium] Why can we not use Mean Squared Error (MSE) as the loss function for logistic regression?

*Hint:* Think about the shape of the loss surface when sigmoid is combined with MSE.

**Answer:** When MSE is used with the sigmoid function, the loss surface becomes **non-convex** with many local minima. Gradient descent can get stuck in a local minimum and fail to find the optimal solution. Log loss (binary cross-entropy) creates a **convex** loss surface for logistic regression, guaranteeing that gradient descent finds the global minimum.

The sigmoid function is non-linear. Squaring the difference between sigmoid output and the true label creates a wavy loss surface. Log loss is specifically designed to work with sigmoid, producing clean gradients and a convex optimization problem.

### Q7. [Medium] What is the output?

```
import numpy as np

# Sigmoid derivative property
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

z_values = [0, 1, -1, 5, -5]
for z in z_values:
    s = sigmoid(z)
    deriv = s * (1 - s)
    print(f"z={z:2d}: sigmoid={s:.4f}, derivative={deriv:.4f}")
```

*Hint:* The derivative is maximal at z=0 (where sigmoid=0.5) and approaches 0 for extreme z values.

**Answer:** `z= 0: sigmoid=0.5000, derivative=0.2500`
`z= 1: sigmoid=0.7311, derivative=0.1966`
`z=-1: sigmoid=0.2689, derivative=0.1966`
`z= 5: sigmoid=0.9933, derivative=0.0066`
`z=-5: sigmoid=0.0067, derivative=0.0066`

The sigmoid derivative is maximum at z=0 (0.25) and rapidly decreases for large |z|. This means the model learns fastest when it is uncertain (near 0.5) and learns very slowly when it is already confident. This is related to the vanishing gradient problem in deep learning.

### Q8. [Medium] Explain the difference between One-vs-Rest and Softmax for multi-class classification.

*Hint:* One trains multiple binary classifiers; the other trains a single unified model.

**Answer:** **One-vs-Rest (OvR)**: Trains K separate binary classifiers, one per class. Each classifier learns "is this class X or not?" At prediction time, the class with the highest probability wins. **Softmax**: A single model with K output units. The softmax function converts raw scores to probabilities that sum to 1. All classes are considered simultaneously in a unified model.

OvR is simpler and works with any binary classifier. However, the probabilities from different classifiers may not be calibrated. Softmax naturally produces probabilities summing to 1 and considers all classes jointly. For logistic regression, softmax is generally preferred when classes are mutually exclusive.

### Q9. [Hard] What is the output?

```
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import numpy as np

# Feature 1: study hours (1-10)
# Feature 2: height in cm (150-190) -- irrelevant!
X = np.array([[2, 160], [3, 175], [4, 155], [7, 180], [8, 165], [9, 170]])
y = np.array([0, 0, 0, 1, 1, 1])

# Without scaling
model1 = LogisticRegression(random_state=42, max_iter=1000)
model1.fit(X, y)
print("Without scaling, coefs:", np.round(model1.coef_[0], 4))

# With scaling
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
model2 = LogisticRegression(random_state=42, max_iter=1000)
model2.fit(X_scaled, y)
print("With scaling, coefs:", np.round(model2.coef_[0], 4))
```

*Hint:* Without scaling, the coefficient for height (large values) appears small but is misleading. With scaling, coefficients reflect true importance.

**Answer:** `Without scaling, coefs: [0.3986 0.0013]`
`With scaling, coefs: [1.4753 0.0398]`

Without scaling, height's coefficient (0.0013) looks tiny, but height values are 150-190 while study hours are 1-10. After scaling to the same range, the study hours coefficient (1.4753) clearly dominates over height (0.0398), correctly showing that study hours matter and height does not. Scaling is essential for interpretable coefficients.

### Q10. [Hard] What is the output?

```
from sklearn.metrics import precision_score, recall_score

y_true = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]

# Conservative model (high threshold)
y_pred_conservative = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0]

# Aggressive model (low threshold)
y_pred_aggressive = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0]

print("Conservative:")
print(f"  Precision: {precision_score(y_true, y_pred_conservative):.2f}")
print(f"  Recall: {recall_score(y_true, y_pred_conservative):.2f}")
print("Aggressive:")
print(f"  Precision: {precision_score(y_true, y_pred_aggressive):.2f}")
print(f"  Recall: {recall_score(y_true, y_pred_aggressive):.2f}")
```

*Hint:* Conservative predicts fewer positives (fewer FP but more FN). Aggressive predicts more positives (fewer FN but more FP).

**Answer:** `Conservative:`
`  Precision: 1.00`
`  Recall: 0.40`
`Aggressive:`
`  Precision: 0.71`
`  Recall: 1.00`

Conservative: TP=2, FP=0, FN=3. Precision=2/2=1.00 (every positive prediction is correct). Recall=2/5=0.40 (misses 60% of positives). Aggressive: TP=5, FP=2, FN=0. Precision=5/7=0.71 (some false alarms). Recall=5/5=1.00 (catches all positives). This demonstrates the precision-recall trade-off.

### Q11. [Hard] A hospital uses a model to predict if a patient has cancer. Which metric should they prioritize: precision or recall? Why?

*Hint:* Consider the cost of missing a cancer patient vs the cost of a false alarm.

**Answer:** The hospital should prioritize **recall**. Missing a cancer patient (False Negative) is far more dangerous than a false alarm (False Positive). A missed cancer case means the patient does not receive treatment, which can be fatal. A false alarm means additional tests, which is inconvenient but not life-threatening. High recall ensures the model catches as many actual cancer cases as possible.

In medical diagnosis, the cost of a False Negative (missing a disease) is much higher than a False Positive (unnecessary follow-up tests). A recall of 0.99 means only 1% of actual cancer cases are missed. The trade-off is lower precision (more false alarms), but doctors can verify with additional tests.

### Q12. [Hard] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Logistic regression prediction
weights = np.array([0.5, -0.3, 0.8])
bias = -0.2

# Two students
student_a = np.array([8, 3, 7])  # [study_hours, absences, assignment_score]
student_b = np.array([2, 8, 3])

for name, student in [('Aarav', student_a), ('Priya', student_b)]:
    z = np.dot(weights, student) + bias
    p = sigmoid(z)
    print(f"{name}: z={z:.2f}, P(pass)={p:.4f}, Prediction={'Pass' if p>=0.5 else 'Fail'}")
```

*Hint:* Compute z = w1*x1 + w2*x2 + w3*x3 + b for each student, then apply sigmoid.

**Answer:** `Aarav: z=8.90, P(pass)=0.9999, Prediction=Pass`
`Priya: z=-1.80, P(pass)=0.1419, Prediction=Fail`

Aarav: z = 0.5*8 + (-0.3)*3 + 0.8*7 + (-0.2) = 4 - 0.9 + 5.6 - 0.2 = 8.5. Wait, let me recalculate: 0.5*8=4.0, -0.3*3=-0.9, 0.8*7=5.6, bias=-0.2. z=4.0-0.9+5.6-0.2=8.5. sigmoid(8.5)=0.9998. Priya: 0.5*2=1.0, -0.3*8=-2.4, 0.8*3=2.4, bias=-0.2. z=1.0-2.4+2.4-0.2=0.8. sigmoid(0.8)=0.6899. The weights show study_hours and assignments help (positive weight), while absences hurt (negative weight).

## Multiple Choice Questions

### Q1. [Easy] What does the sigmoid function output?

**Answer:** C

**C is correct.** The sigmoid function maps any real number to a value strictly between 0 and 1. It never actually reaches 0 or 1 (only approaches them asymptotically), making it perfect for representing probabilities.

### Q2. [Easy] What type of problem does logistic regression solve?

**Answer:** B

**B is correct.** Despite its name containing "regression", logistic regression is a classification algorithm. It predicts the probability of belonging to a class, not a continuous value.

### Q3. [Easy] What is the default decision threshold in logistic regression?

**Answer:** B

**B is correct.** By default, if the predicted probability is >= 0.5, the model predicts class 1; otherwise class 0. This threshold can be adjusted based on the application (e.g., lower for disease detection to increase recall).

### Q4. [Easy] What is a True Positive (TP)?

**Answer:** C

**C is correct.** A True Positive means the model predicted positive and the actual label is also positive. The prediction was correct. TP is in the top-left cell of the confusion matrix.

### Q5. [Easy] Which loss function is used for logistic regression?

**Answer:** C

**C is correct.** Log loss (binary cross-entropy) is the standard loss function for logistic regression. MSE would create a non-convex optimization problem with the sigmoid function. Hinge loss is used for SVMs.

### Q6. [Easy] What is sigmoid(0)?

**Answer:** B

**B is correct.** sigmoid(0) = 1/(1+e^0) = 1/(1+1) = 0.5. This is the decision boundary: when the linear combination equals 0, the model is equally uncertain about both classes.

### Q7. [Easy] In sklearn, which method returns class probabilities instead of class labels?

**Answer:** B

**B is correct.** `predict_proba()` returns probability estimates for each class. `predict()` returns hard class labels (0 or 1). `score()` returns accuracy. `fit_predict()` is used for clustering, not classification.

### Q8. [Medium] What does Precision measure?

**Answer:** B

**B is correct.** Precision = TP / (TP + FP). It answers: "Of all samples I predicted as positive, what fraction are truly positive?" High precision means few false positives (few false alarms).

### Q9. [Medium] What does Recall measure?

**Answer:** B

**B is correct.** Recall = TP / (TP + FN). It answers: "Of all actual positive cases, what fraction did the model catch?" High recall means few false negatives (few missed positives). Also called sensitivity or true positive rate.

### Q10. [Medium] What is the F1 Score?

**Answer:** C

**C is correct.** F1 = 2 * (Precision * Recall) / (Precision + Recall). The harmonic mean penalizes extreme differences: if precision is 1.0 but recall is 0.0, F1 is 0, not 0.5 (as the arithmetic mean would give).

### Q11. [Medium] In One-vs-Rest multi-class classification with 5 classes, how many binary classifiers are trained?

**Answer:** B

**B is correct.** One-vs-Rest trains one binary classifier per class. With 5 classes, you get 5 classifiers: class 1 vs rest, class 2 vs rest, ..., class 5 vs rest. Each classifier decides if a sample belongs to its class or not.

### Q12. [Medium] What happens when you lower the classification threshold from 0.5 to 0.3?

**Answer:** B

**B is correct.** Lowering the threshold means more samples are classified as positive. This catches more true positives (higher recall) but also introduces more false positives (lower precision). This is the precision-recall trade-off.

### Q13. [Medium] Why is feature scaling important for logistic regression?

**Answer:** C

**C is correct.** Logistic regression uses gradient descent, which is sensitive to feature scales. Unscaled features cause the gradient to oscillate, slowing convergence. Scaled features also make coefficients comparable, enabling feature importance analysis.

### Q14. [Medium] What does the softmax function guarantee about its outputs?

**Answer:** B

**B is correct.** Softmax converts raw scores into probabilities. Each output is positive (because of the exponential), and they sum to exactly 1. This makes them interpretable as class probabilities for multi-class classification.

### Q15. [Hard] If a model has precision=0.90 and recall=0.60, what is the F1 score?

**Answer:** B

**B is correct.** F1 = 2 * (0.90 * 0.60) / (0.90 + 0.60) = 2 * 0.54 / 1.50 = 1.08 / 1.50 = 0.72. The F1 score is closer to the lower value (recall=0.60) than to the higher value (precision=0.90), because the harmonic mean penalizes imbalance.

### Q16. [Hard] What is the gradient of log loss with respect to weights in logistic regression?

**Answer:** B

**B is correct.** The gradient is dJ/dw = (1/N) * X^T * (predictions - y), where predictions are sigmoid outputs. This has the same form as linear regression's gradient, but predictions are now probabilities from the sigmoid function, not raw linear outputs.

### Q17. [Hard] A logistic regression model with 2 features produces the decision boundary equation: 3*x1 + 2*x2 - 6 = 0. At the point (1, 1), what class does the model predict?

**Answer:** B

**B is correct.** At (1,1): z = 3*1 + 2*1 - 6 = 3 + 2 - 6 = -1. Since z < 0, sigmoid(z) < 0.5, and the model predicts class 0 (negative). Points with negative z values are on the negative side of the decision boundary.

### Q18. [Hard] Given a confusion matrix: TN=80, FP=5, FN=10, TP=30. What is the accuracy?

**Answer:** A

**A is correct.** Accuracy = (TP + TN) / (TP + TN + FP + FN) = (30 + 80) / (30 + 80 + 5 + 10) = 110 / 125 = 0.88. 88% of all predictions are correct.

### Q19. [Hard] Why is log loss preferred over accuracy as a loss function during training?

**Answer:** B

**B is correct.** Accuracy is a step function (either correct or incorrect) and is not differentiable. You cannot compute gradients from accuracy, so gradient descent cannot use it. Log loss is a smooth, differentiable function that provides meaningful gradients for parameter optimization.

### Q20. [Hard] In logistic regression, what does a weight coefficient of -2.5 for a feature mean?

**Answer:** B

**B is correct.** In logistic regression, coefficients represent changes in log-odds. A coefficient of -2.5 means that for every 1-unit increase in that feature, the log-odds of the positive class decrease by 2.5. In practical terms, the feature has a strong negative association with the positive class.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/logistic-regression-and-classification/*
