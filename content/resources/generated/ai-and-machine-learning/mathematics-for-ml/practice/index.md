---
title: "Practice: Mathematics for Machine Learning"
description: "58 practice problems for Mathematics for Machine Learning in AI and Machine Learning"
slug: mathematics-for-ml-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/mathematics-for-ml/practice
category: "AI and Machine Learning"
---
# Practice: Mathematics for Machine Learning

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Compute the dot product of [1, 2, 3] and [4, 5, 6] using NumPy. Show the manual calculation in a comment.

*Hint:* np.dot(a, b) or a @ b. Manual: 1*4 + 2*5 + 3*6.

**Answer:** ```
import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
# Manual: 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
print(f"Dot product: {np.dot(a, b)}")
```

Output: Dot product: 32

The dot product multiplies corresponding elements and sums: (1*4) + (2*5) + (3*6) = 32. This single operation is the foundation of linear regression (y = w.x + b), neural network forward passes, and similarity measures.

### Q2. [Easy] Create a 3x3 identity matrix using NumPy and print it.

*Hint:* Use np.eye(3).

**Answer:** ```
import numpy as np
I = np.eye(3)
print(I)
```

Output: [[1. 0. 0.] [0. 1. 0.] [0. 0. 1.]]

The identity matrix has 1s on the diagonal and 0s everywhere else. It is the matrix equivalent of the number 1: multiplying any matrix by the identity gives the same matrix (A @ I = A). `np.eye(n)` creates an n x n identity matrix.

### Q3. [Easy] What is the output?

```
import numpy as np
A = np.array([[1, 2], [3, 4]])
print(A.T)
```

*Hint:* .T transposes the matrix: rows become columns.

**Answer:** `[[1 3]
 [2 4]]`

Transpose swaps rows and columns. Row [1, 2] becomes column [1, 2]. Row [3, 4] becomes column [3, 4]. The original (2, 2) stays (2, 2) since it is square, but in general a (m, n) matrix becomes (n, m).

### Q4. [Easy] What does the gradient tell us in Machine Learning?

*Hint:* Think about direction and steepness.

**Answer:** The gradient is a vector of partial derivatives that points in the **direction of steepest increase** of a function. In ML, we want to minimize the loss function, so we move in the **opposite direction of the gradient**. The magnitude of the gradient tells us how steep the function is at that point.

If you are standing on a hill and want to go downhill as fast as possible, the gradient tells you which direction is the steepest uphill, and you walk in the opposite direction. In gradient descent, the gradient of the loss function with respect to model parameters tells us how to adjust each parameter to reduce the loss.

### Q5. [Medium] Write NumPy code to multiply two matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]. What is element [0][1] of the result?

*Hint:* Use A @ B. Element [0][1] = dot product of row 0 of A and column 1 of B.

**Answer:** ```
import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B
print(f"A @ B:\n{C}")
print(f"\nElement [0][1] = 1*6 + 2*8 = {C[0, 1]}")
```

Output: [[19 22] [43 50]], Element [0][1] = 22

Matrix multiplication: C[0][1] = dot product of row 0 of A ([1, 2]) and column 1 of B ([6, 8]) = 1*6 + 2*8 = 22. C[0][0] = 1*5 + 2*7 = 19. C[1][0] = 3*5 + 4*7 = 43. C[1][1] = 3*6 + 4*8 = 50.

### Q6. [Medium] Write code to compute the mean, median, and standard deviation of the array [10, 20, 30, 40, 50, 1000] and explain why mean and median differ significantly.

*Hint:* Use np.mean(), np.median(), np.std(). The value 1000 is an outlier.

**Answer:** ```
import numpy as np
arr = np.array([10, 20, 30, 40, 50, 1000])
print(f"Mean: {np.mean(arr):.1f}")
print(f"Median: {np.median(arr):.1f}")
print(f"Std: {np.std(arr):.1f}")
print("Mean is 191.7, median is 35.0")
print("The outlier 1000 drags the mean up but does not affect the median")
```

Mean = (10+20+30+40+50+1000)/6 = 191.7. Median = average of 30 and 40 = 35.0. The mean is 5.5x the median because the outlier (1000) pulls it up. This demonstrates why median is preferred when outliers exist. In ML, you use RobustScaler (based on median) instead of StandardScaler (based on mean) when your data has outliers.

### Q7. [Medium] Explain Bayes Theorem with a real-world example. What are prior, likelihood, and posterior?

*Hint:* P(A|B) = P(B|A) * P(A) / P(B). Think of disease testing.

**Answer:** **Bayes Theorem:** P(A|B) = P(B|A) * P(A) / P(B). **Prior** P(A) = initial belief before seeing evidence. **Likelihood** P(B|A) = probability of evidence given the hypothesis. **Posterior** P(A|B) = updated belief after seeing evidence. Example: P(disease) = 0.01 (prior). P(positive test | disease) = 0.95 (likelihood). P(positive test) = 0.06. P(disease | positive test) = 0.95 * 0.01 / 0.06 = 0.158 (posterior). Even with a positive test, there is only 15.8% chance of disease because the disease is rare.

Bayes theorem is counterintuitive: even with a 95% accurate test, a positive result only means 15.8% chance of disease if the disease is rare (1%). This is because most positive results are false positives from the 99% healthy population. Understanding this is crucial for evaluating ML model predictions, especially with imbalanced datasets.

### Q8. [Medium] Implement one step of gradient descent for the function f(x) = x^2. Starting at x = 5 with learning rate 0.1, what is the new x?

*Hint:* Derivative of x^2 is 2x. New x = old_x - lr * gradient.

**Answer:** ```
x = 5.0
learning_rate = 0.1
gradient = 2 * x  # derivative of x^2
x_new = x - learning_rate * gradient
print(f"Old x: {x}")
print(f"Gradient at x=5: {gradient}")
print(f"New x: {x_new}")
print(f"f(old x) = {x**2}, f(new x) = {x_new**2}")
```

Output: New x: 4.0, f(old x) = 25, f(new x) = 16

At x=5, the gradient of x^2 is 2*5 = 10. New x = 5 - 0.1 * 10 = 4.0. The function value decreased from 25 to 16, showing progress toward the minimum (x=0, f=0). Each gradient descent step reduces the function value when the learning rate is appropriate.

### Q9. [Medium] What is the output?

```
import numpy as np
arr = np.array([2, 4, 4, 4, 5, 5, 7, 9])
print(np.mean(arr))
print(np.var(arr))
```

*Hint:* Mean = sum/count. Variance = average of squared deviations from mean.

**Answer:** `5.0`
`4.0`

Mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5.0. Variance = average of (2-5)^2, (4-5)^2, (4-5)^2, (4-5)^2, (5-5)^2, (5-5)^2, (7-5)^2, (9-5)^2 = (9+1+1+1+0+0+4+16)/8 = 32/8 = 4.0. Note: NumPy uses population variance (divides by n, not n-1).

### Q10. [Hard] Write code to compute the correlation between two arrays using the formula: corr = cov(X,Y) / (std(X) * std(Y)). Verify with np.corrcoef().

*Hint:* Compute covariance manually, then divide by product of standard deviations.

**Answer:** ```
import numpy as np

X = np.array([1, 2, 3, 4, 5])
Y = np.array([2, 4, 5, 4, 5])

# Manual calculation
mean_x, mean_y = np.mean(X), np.mean(Y)
cov_xy = np.mean((X - mean_x) * (Y - mean_y))
std_x, std_y = np.std(X), np.std(Y)
corr_manual = cov_xy / (std_x * std_y)

# NumPy verification
corr_numpy = np.corrcoef(X, Y)[0, 1]

print(f"Manual correlation: {corr_manual:.4f}")
print(f"NumPy correlation: {corr_numpy:.4f}")
```

Correlation = covariance / (std_X * std_Y). Covariance measures how X and Y vary together. Dividing by the product of standard deviations normalizes it to [-1, 1]. Note: np.corrcoef uses sample statistics (n-1 denominator) while our manual calculation uses population statistics (n denominator), so there may be a slight difference.

### Q11. [Hard] What are eigenvalues and eigenvectors? Why are they important in ML (specifically PCA)?

*Hint:* Eigenvectors are directions that do not change when a transformation is applied.

**Answer:** For a matrix A, an eigenvector v satisfies A @ v = lambda * v, where lambda is the eigenvalue. The eigenvector's direction is unchanged by the transformation -- only its magnitude changes by factor lambda. In PCA, the eigenvectors of the covariance matrix represent the principal directions of maximum variance in the data. The eigenvalues indicate how much variance is in each direction. PCA keeps the top-k eigenvectors (those with largest eigenvalues) to reduce dimensionality while preserving the most information.

Imagine stretching a rubber sheet. Most directions change both direction and length. But certain special directions (eigenvectors) only stretch or shrink without rotating. In a dataset, these directions correspond to the axes along which the data varies the most. PCA finds these directions and projects the data onto them, reducing features while keeping the important patterns.

### Q12. [Hard] Implement gradient descent to find the minimum of f(x) = (x - 5)^2 + 3. Start at x = 0, learning rate = 0.2, run for 20 steps.

*Hint:* Derivative: f'(x) = 2(x - 5). Minimum is at x = 5, f(5) = 3.

**Answer:** ```
x = 0.0
lr = 0.2

for i in range(20):
    grad = 2 * (x - 5)
    x = x - lr * grad

print(f"Final x: {x:.6f} (expected: 5.0)")
print(f"Final f(x): {(x-5)**2 + 3:.6f} (expected: 3.0)")
```

The function (x-5)^2 + 3 has its minimum at x=5 where f=3. Starting at x=0, gradient descent iteratively moves toward x=5. The derivative 2(x-5) is negative when x < 5 (so x increases) and positive when x > 5 (so x decreases), converging to the minimum.

### Q13. [Hard] What is the output?

```
import numpy as np
A = np.array([[1, 0], [0, 1]])
v = np.array([3, 7])
print(A @ v)
```

*Hint:* A is the identity matrix.

**Answer:** `[3 7]`

The identity matrix [[1,0],[0,1]] multiplied by any vector gives the same vector. [1*3 + 0*7, 0*3 + 1*7] = [3, 7]. The identity matrix is to matrices what 1 is to numbers.

### Q14. [Easy] What is the difference between variance and standard deviation? Which one is in the same units as the original data?

*Hint:* One is the square of the other.

**Answer:** Variance is the average of squared deviations from the mean. Standard deviation is the square root of variance. **Standard deviation is in the same units as the original data** (e.g., if data is in cm, std is in cm). Variance is in squared units (cm^2). This is why standard deviation is more commonly used and reported.

If exam marks have a mean of 70 and variance of 100, the standard deviation is sqrt(100) = 10. This means marks typically deviate by about 10 points from the mean. Saying 'variance is 100 marks-squared' is harder to interpret than 'standard deviation is 10 marks'.

### Q15. [Medium] Compute the inverse of matrix A = [[2, 1], [5, 3]] using NumPy and verify that A @ A_inv gives the identity matrix.

*Hint:* Use np.linalg.inv(A) and np.allclose() to verify.

**Answer:** ```
import numpy as np
A = np.array([[2, 1], [5, 3]])
A_inv = np.linalg.inv(A)
print(f"A:\n{A}")
print(f"\nA inverse:\n{A_inv}")
print(f"\nA @ A_inv:\n{np.round(A @ A_inv)}")
print(f"Is identity? {np.allclose(A @ A_inv, np.eye(2))}")
```

The inverse of a 2x2 matrix [[a,b],[c,d]] is (1/(ad-bc)) * [[d,-b],[-c,a]]. For our matrix: determinant = 2*3 - 1*5 = 1, so A_inv = [[3,-1],[-5,2]]. Verifying: A @ A_inv = identity matrix. np.allclose handles floating-point precision issues.

### Q16. [Easy] Write Python code to calculate the probability of rolling a 6 on a fair die, and the probability of NOT rolling a 6.

*Hint:* P(6) = 1/6. P(not 6) = 1 - P(6).

**Answer:** ```
p_six = 1 / 6
p_not_six = 1 - p_six
print(f"P(rolling 6): {p_six:.4f} ({p_six*100:.2f}%)")
print(f"P(not rolling 6): {p_not_six:.4f} ({p_not_six*100:.2f}%)")
```

Basic probability: favorable outcomes / total outcomes = 1/6 = 0.1667. The complement rule: P(not A) = 1 - P(A) = 5/6 = 0.8333. These basic rules apply to all probability calculations in ML.

### Q17. [Hard] Use Bayes theorem to calculate: If 2% of people have a disease, a test is 95% accurate for sick people and 90% accurate for healthy people, what is P(disease | positive test)?

*Hint:* P(disease)=0.02, P(positive|disease)=0.95, P(positive|healthy)=0.10.

**Answer:** ```
p_disease = 0.02
p_healthy = 0.98
p_pos_disease = 0.95
p_pos_healthy = 0.10

p_pos = p_pos_disease * p_disease + p_pos_healthy * p_healthy
p_disease_pos = (p_pos_disease * p_disease) / p_pos

print(f"P(disease | positive test): {p_disease_pos:.4f}")
print(f"That's only {p_disease_pos*100:.1f}%!")
```

P(positive) = 0.95*0.02 + 0.10*0.98 = 0.019 + 0.098 = 0.117. P(disease | positive) = 0.019 / 0.117 = 0.162. Even with a positive test result, there is only a 16.2% chance of actually having the disease. This is because the disease is rare (2%), so most positive results are false positives from the 98% healthy population.

### Q18. [Medium] What is the output?

```
import numpy as np
a = np.array([1, 0, 0])
b = np.array([0, 1, 0])
print(np.dot(a, b))
```

*Hint:* These vectors are perpendicular (orthogonal).

**Answer:** `0`

The dot product of perpendicular (orthogonal) vectors is always 0: 1*0 + 0*1 + 0*0 = 0. This is a key property used in ML: orthogonal features are independent and carry non-redundant information. PCA finds orthogonal directions of maximum variance.

### Q19. [Hard] Explain the chain rule in calculus and why it is essential for training neural networks (backpropagation).

*Hint:* If y = f(g(x)), then dy/dx = f'(g(x)) * g'(x). Think about layers in a neural network.

**Answer:** The chain rule states that if y = f(g(x)), then dy/dx = f'(g(x)) * g'(x). In neural networks, the output is a composition of many functions (layers): output = f3(f2(f1(x))). To compute how a weight in layer 1 affects the final loss, we need the chain rule: dL/dw1 = dL/df3 * df3/df2 * df2/df1 * df1/dw1. This chaining of derivatives through layers is called **backpropagation**. Without the chain rule, we could not train deep networks.

Backpropagation is just the chain rule applied systematically. Starting from the loss at the output, we multiply derivatives backward through each layer to compute how each weight contributes to the error. This gives us the gradient for every weight in the network, which gradient descent then uses to update them.

### Q20. [Medium] Write code to compute and display the correlation matrix for three variables: hours_studied, attendance, and marks.

*Hint:* Use np.corrcoef() with the three arrays stacked together.

**Answer:** ```
import numpy as np

hours = np.array([2, 4, 6, 8, 3, 7, 5])
attendance = np.array([60, 70, 85, 95, 65, 90, 80])
marks = np.array([50, 65, 80, 92, 55, 85, 72])

corr = np.corrcoef([hours, attendance, marks])
labels = ['Hours', 'Attend', 'Marks']

print('Correlation Matrix:')
print(f"{'':>10}", end='')
for l in labels: print(f"{l:>10}", end='')
print()
for i, l in enumerate(labels):
    print(f"{l:>10}", end='')
    for j in range(3):
        print(f"{corr[i][j]:>10.4f}", end='')
    print()
```

The correlation matrix shows pairwise correlations. The diagonal is always 1.0 (a variable correlates perfectly with itself). Off-diagonal values show how pairs of variables relate. High positive correlation between hours and marks confirms that studying more leads to higher scores. This matrix guides feature selection in ML.

## Mixed Questions

### Q1. [Easy] Create two NumPy vectors a = [3, 4] and b = [1, 2]. Compute and print: a + b, a - b, a * 2, and the dot product.

*Hint:* Use +, -, *, np.dot() for the operations.

**Answer:** ```
import numpy as np
a = np.array([3, 4])
b = np.array([1, 2])
print(f"a + b = {a + b}")
print(f"a - b = {a - b}")
print(f"a * 2 = {a * 2}")
print(f"dot product = {np.dot(a, b)}")
```

Vector addition: [3+1, 4+2] = [4, 6]. Subtraction: [3-1, 4-2] = [2, 2]. Scalar multiplication: [3*2, 4*2] = [6, 8]. Dot product: 3*1 + 4*2 = 11.

### Q2. [Easy] What is the output?

```
import numpy as np
print(np.mean([10, 20, 30, 40, 50]))
```

*Hint:* Mean = sum / count.

**Answer:** `30.0`

Mean = (10+20+30+40+50) / 5 = 150/5 = 30.0. NumPy returns a float for mean calculations.

### Q3. [Medium] Deepak's dataset has two features: temperature (0-50 Celsius) and income (10000-500000 rupees). Why might this cause problems for KNN, and what should he do?

*Hint:* KNN uses distance. Which feature will dominate the distance calculation?

**Answer:** Income (range: 490000) will completely dominate the distance calculation over temperature (range: 50) in KNN, because KNN uses Euclidean distance. A 1-degree temperature difference would be negligible compared to a 1000-rupee income difference. Deepak should apply **feature scaling**: either StandardScaler (z-score normalization) or MinMaxScaler (scale to 0-1) to bring both features to the same scale.

Without scaling, features with larger ranges dominate distance-based algorithms. After Min-Max scaling, both temperature and income would range from 0 to 1, contributing equally to distance. This is why understanding variance and scaling (statistics) is crucial for ML.

### Q4. [Medium] Write NumPy code to compute the magnitude (length) of the vector [3, 4]. Verify that it equals 5 (Pythagorean theorem).

*Hint:* Magnitude = sqrt(x^2 + y^2). Use np.linalg.norm().

**Answer:** ```
import numpy as np
v = np.array([3, 4])
mag = np.linalg.norm(v)
print(f"Vector: {v}")
print(f"Magnitude: {mag}")
print(f"Manual: sqrt(3^2 + 4^2) = sqrt(9+16) = sqrt(25) = {np.sqrt(9+16)}")
```

Output: Magnitude: 5.0

The magnitude of [3, 4] is sqrt(3^2 + 4^2) = sqrt(25) = 5. This is the famous 3-4-5 right triangle. Vector magnitude is used to normalize vectors (make them unit length), which is important for cosine similarity and some ML algorithms.

### Q5. [Hard] Implement gradient descent to minimize f(w1, w2) = w1^2 + w2^2. Start at (5, 5), learning rate 0.1, 30 steps. Print every 5th step.

*Hint:* Gradients: df/dw1 = 2*w1, df/dw2 = 2*w2. Update both simultaneously.

**Answer:** ```
import numpy as np

w = np.array([5.0, 5.0])
lr = 0.1

for i in range(30):
    grad = 2 * w
    w = w - lr * grad
    if i % 5 == 0:
        print(f"Step {i:2d}: w = [{w[0]:.4f}, {w[1]:.4f}], f(w) = {np.sum(w**2):.6f}")

print(f"\nFinal: w = [{w[0]:.6f}, {w[1]:.6f}]")
print(f"Expected: [0, 0]")
```

This is multivariate gradient descent with 2 parameters. The gradient [2*w1, 2*w2] points away from the minimum [0, 0]. Each step moves both parameters toward zero simultaneously. This is exactly how linear regression with multiple features trains -- all weights are updated in parallel.

### Q6. [Hard] What is the output?

```
import numpy as np
A = np.array([[2, 0], [0, 3]])
v = np.array([1, 1])
print(A @ v)
```

*Hint:* A is a diagonal matrix. It scales each component independently.

**Answer:** `[2 3]`

A diagonal matrix scales each dimension independently: [2*1 + 0*1, 0*1 + 3*1] = [2, 3]. The x-component is scaled by 2 and the y-component by 3. Diagonal matrices are special: their eigenvalues are the diagonal entries, and the standard basis vectors are their eigenvectors.

### Q7. [Easy] What is the difference between correlation and covariance?

*Hint:* One is bounded [-1, 1], the other is unbounded.

**Answer:** **Covariance** measures how two variables change together but is unbounded (its value depends on the scale of the data). **Correlation** is normalized covariance, bounded between -1 and +1, making it easier to interpret. Correlation = Covariance / (std_X * std_Y). A correlation of 0.9 always means a strong positive relationship, regardless of the data's scale.

Covariance between height (cm) and weight (kg) might be 200, but that number alone does not tell you if the relationship is strong. Correlation normalizes this to, say, 0.85, which clearly indicates a strong positive relationship. Always use correlation for interpretation and comparison.

### Q8. [Hard] Write a Python function that implements the normal equation for linear regression: w = (X^T @ X)^(-1) @ X^T @ y. Test it with simple data.

*Hint:* Use np.linalg.inv() for the inverse, @ for matrix multiplication.

**Answer:** ```
import numpy as np

def normal_equation(X, y):
    return np.linalg.inv(X.T @ X) @ X.T @ y

# Simple data: y = 2*x + 1
X = np.array([[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]])  # Bias column + feature
y = np.array([3, 5, 7, 9, 11])  # y = 2x + 1

w = normal_equation(X, y)
print(f"Weights: bias={w[0]:.2f}, slope={w[1]:.2f}")
print(f"Equation: y = {w[1]:.2f}x + {w[0]:.2f}")
```

Output: Weights: bias=1.00, slope=2.00

The normal equation directly computes the optimal weights for linear regression without iteration. X has a column of 1s for the bias (intercept). The formula (X^T X)^(-1) X^T y gives us [1, 2], meaning y = 2x + 1, which perfectly matches our data. This is faster than gradient descent for small datasets but does not scale well to large ones.

### Q9. [Medium] What is the 68-95-99.7 rule for the normal distribution?

*Hint:* It describes what percentage of data falls within 1, 2, and 3 standard deviations of the mean.

**Answer:** For a normal distribution: approximately **68%** of data falls within 1 standard deviation of the mean, **95%** within 2 standard deviations, and **99.7%** within 3 standard deviations. If marks have mean=70 and std=10, then 68% of students score 60-80, 95% score 50-90, and 99.7% score 40-100.

This rule is the basis for Z-score normalization (StandardScaler in sklearn). After normalization, a Z-score of 2 means the value is 2 standard deviations above the mean, placing it in the top ~2.5% of values. Understanding this helps you detect outliers (Z-score > 3) and interpret normalized data.

### Q10. [Medium] Write code to simulate flipping a coin 10000 times and verify that the probability of heads approaches 0.5.

*Hint:* Use np.random.choice(['H', 'T'], size=10000).

**Answer:** ```
import numpy as np
np.random.seed(42)

flips = np.random.choice(['H', 'T'], size=10000)
heads = np.sum(flips == 'H')
p_heads = heads / len(flips)

print(f"Total flips: {len(flips)}")
print(f"Heads: {heads}")
print(f"P(Heads): {p_heads:.4f} (expected: 0.5000)")
```

The law of large numbers states that as the number of trials increases, the observed probability approaches the theoretical probability. With 10000 flips, P(Heads) should be very close to 0.5. This principle underlies all of statistics: more data gives more reliable estimates.

## Multiple Choice Questions

### Q1. [Easy] What is the dot product of [1, 2, 3] and [4, 5, 6]?

**B is correct.** Dot product = (1*4) + (2*5) + (3*6) = 4 + 10 + 18 = 32. Option A is element-wise multiplication (not summed). The dot product always returns a single scalar.

### Q2. [Easy] What is the transpose of a 3x2 matrix?

**B is correct.** Transpose swaps rows and columns. A (3 rows x 2 columns) matrix becomes (2 rows x 3 columns). In general, the transpose of an (m x n) matrix is (n x m).

### Q3. [Easy] What is the derivative of f(x) = x^2?

**B is correct.** Using the power rule: the derivative of x^n is n * x^(n-1). So the derivative of x^2 is 2 * x^1 = 2x. At x=3, the derivative is 6, meaning the function is increasing at a rate of 6.

### Q4. [Easy] In gradient descent, the update rule is w = w - lr * gradient. What happens if the learning rate is too large?

**C is correct.** A learning rate that is too large causes gradient descent to take steps that are too big, overshooting the minimum and bouncing back and forth (or diverging to infinity). The loss increases instead of decreasing. Typical good learning rates are 0.01 or 0.001.

### Q5. [Medium] What is the shape of the result when multiplying a (3, 4) matrix with a (4, 2) matrix?

**A is correct.** For matrix multiplication, (m x n) @ (n x p) = (m x p). The inner dimensions (n=4) must match. The result takes the outer dimensions: (3 x 4) @ (4 x 2) = (3 x 2).

### Q6. [Medium] Bayes theorem states P(A|B) = P(B|A) * P(A) / P(B). What is P(A) called?

**C is correct.** P(A) is the **prior** -- our initial belief before seeing evidence. P(B|A) is the **likelihood** -- probability of evidence given our hypothesis. P(A|B) is the **posterior** -- updated belief after seeing evidence. P(B) is the **evidence**.

### Q7. [Medium] If a dataset has mean = 100 and standard deviation = 15, what Z-score does a value of 130 have?

**B is correct.** Z-score = (value - mean) / std = (130 - 100) / 15 = 30 / 15 = 2.0. This means 130 is exactly 2 standard deviations above the mean. According to the 68-95-99.7 rule, about 97.5% of values are below this point.

### Q8. [Medium] What does a correlation of -0.95 between two variables indicate?

**C is correct.** A correlation of -0.95 indicates a very strong negative linear relationship: as one variable increases, the other strongly decreases. The magnitude (0.95) shows the relationship is very strong. Only a correlation near 0 indicates no linear relationship.

### Q9. [Medium] Which measure of central tendency is most robust to outliers?

**B is correct.** The median (middle value when sorted) is robust to outliers because it only depends on the position, not the magnitude of extreme values. The mean is heavily influenced by outliers. Variance is a measure of spread, not central tendency.

### Q10. [Hard] In PCA, eigenvalues of the covariance matrix represent:

**B is correct.** Eigenvalues represent the amount of variance in the direction of their corresponding eigenvectors. Larger eigenvalue = more variance explained. Eigenvectors (not eigenvalues) give the direction. PCA keeps components with the largest eigenvalues.

### Q11. [Hard] What is the partial derivative of f(x, y) = x^2 + 3xy with respect to x?

**A is correct.** To find the partial derivative with respect to x, treat y as a constant. d/dx(x^2) = 2x. d/dx(3xy) = 3y (y is constant). Total: 2x + 3y.

### Q12. [Hard] For matrix multiplication A @ B to be valid, which dimensions must match?

**B is correct.** For (m x n) @ (n x p), the inner dimensions (number of columns of A = number of rows of B) must match. The result has shape (m x p). The matrices do NOT need to be square or have the same shape.

### Q13. [Hard] The gradient of f(w1, w2) = w1^2 + w2^2 at point (3, 4) is:

**B is correct.** The gradient is [df/dw1, df/dw2] = [2*w1, 2*w2]. At (3, 4): gradient = [2*3, 2*4] = [6, 8]. This gradient points in the direction of steepest increase. Gradient descent would move in the opposite direction: [-6, -8] (scaled by learning rate).

### Q14. [Easy] P(A) + P(not A) always equals:

**C is correct.** An event either happens or it does not. P(A) + P(not A) = 1 is one of the fundamental axioms of probability. If P(rain) = 0.3, then P(no rain) = 0.7, and 0.3 + 0.7 = 1.

### Q15. [Medium] Which NumPy function computes the inverse of a matrix?

**B is correct.** Matrix operations in NumPy are in the `np.linalg` module. `np.linalg.inv(A)` computes the inverse. Other useful functions: `np.linalg.det(A)` for determinant, `np.linalg.eig(A)` for eigenvalues/eigenvectors, `np.linalg.norm(v)` for vector magnitude.

### Q16. [Hard] Why is the chain rule important in deep learning?

**B is correct.** Neural networks are compositions of functions (layers). To train them, we need to know how each weight affects the final loss. The chain rule allows us to compute these gradients by multiplying derivatives through the chain of layers -- this process is called backpropagation.

## Coding Challenges

### Challenge 1. Linear Algebra Operations Suite

**Difficulty:** Easy

Create two 3D vectors a = [2, 3, 5] and b = [1, 4, 6]. Compute: (1) their dot product, (2) element-wise product, (3) magnitude of each, (4) cosine similarity. Print each result with a label.

**Constraints:**

- Use NumPy for all calculations.

**Sample input:**

```
a = [2, 3, 5], b = [1, 4, 6]
```

**Sample output:**

```
Dot product: 44
Element-wise: [2 12 30]
Mag a: 6.16, Mag b: 7.28
Cosine similarity: 0.9806
```

**Solution:**

```ai-and-machine-learning
import numpy as np

a = np.array([2, 3, 5])
b = np.array([1, 4, 6])

print(f"Dot product: {np.dot(a, b)}")
print(f"Element-wise: {a * b}")
print(f"Mag a: {np.linalg.norm(a):.2f}, Mag b: {np.linalg.norm(b):.2f}")
cosine = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
print(f"Cosine similarity: {cosine:.4f}")
```

### Challenge 2. Gradient Descent Visualizer

**Difficulty:** Medium

Implement gradient descent to minimize f(x) = (x - 7)^2 + 2. Start at x = 0, use learning rate 0.15, run 25 steps. Print the step number, current x, f(x), and gradient every 5 steps. Verify convergence to x = 7.

**Constraints:**

- Print every 5th step. Round to 4 decimal places.

**Sample input:**

```
x_init = 0, lr = 0.15, steps = 25
```

**Sample output:**

```
Step 0: x=0.0000, f(x)=51.0000, grad=-14.0000
Step 5: x=5.4143, f(x)=4.5126, grad=-3.1715
...
Final: x=6.9757, f(x)=2.0006
```

**Solution:**

```ai-and-machine-learning
x = 0.0
lr = 0.15

for i in range(25):
    fx = (x - 7)**2 + 2
    grad = 2 * (x - 7)
    if i % 5 == 0:
        print(f"Step {i:2d}: x={x:.4f}, f(x)={fx:.4f}, grad={grad:.4f}")
    x = x - lr * grad

print(f"\nFinal: x={x:.4f}, f(x)={(x-7)**2 + 2:.4f}")
print(f"Expected: x=7.0000, f(x)=2.0000")
```

### Challenge 3. Bayes Theorem Calculator

**Difficulty:** Medium

Write a function bayes(p_a, p_b_given_a, p_b_given_not_a) that computes P(A|B) using Bayes theorem. Test with: (1) Disease testing (P(disease)=0.01, P(pos|disease)=0.99, P(pos|healthy)=0.05), (2) Spam detection (P(spam)=0.4, P(word|spam)=0.7, P(word|not_spam)=0.1).

**Constraints:**

- Function must handle any valid probabilities.

**Sample input:**

```
bayes(0.01, 0.99, 0.05)
```

**Sample output:**

```
P(disease | positive test) = 0.1667
P(spam | contains word) = 0.8235
```

**Solution:**

```ai-and-machine-learning
def bayes(p_a, p_b_given_a, p_b_given_not_a):
    p_not_a = 1 - p_a
    p_b = p_b_given_a * p_a + p_b_given_not_a * p_not_a
    return (p_b_given_a * p_a) / p_b

# Test 1: Disease testing
result1 = bayes(0.01, 0.99, 0.05)
print(f"P(disease | positive test) = {result1:.4f}")

# Test 2: Spam detection
result2 = bayes(0.4, 0.7, 0.1)
print(f"P(spam | contains word) = {result2:.4f}")
```

### Challenge 4. Statistics Dashboard

**Difficulty:** Medium

Given marks of 15 students: [45, 67, 89, 92, 34, 78, 56, 91, 73, 82, 65, 88, 54, 71, 96], compute and display: mean, median, mode (use scipy), variance, std deviation, range, Q1, Q3, IQR. Also identify outliers using the IQR method (below Q1-1.5*IQR or above Q3+1.5*IQR).

**Constraints:**

- Use NumPy. Show clear formatting.

**Sample input:**

```
marks = [45, 67, 89, 92, 34, 78, 56, 91, 73, 82, 65, 88, 54, 71, 96]
```

**Sample output:**

```
Complete statistics dashboard with outlier detection
```

**Solution:**

```ai-and-machine-learning
import numpy as np

marks = np.array([45, 67, 89, 92, 34, 78, 56, 91, 73, 82, 65, 88, 54, 71, 96])

print('=== Statistics Dashboard ===')
print(f'Mean: {np.mean(marks):.2f}')
print(f'Median: {np.median(marks):.2f}')
print(f'Variance: {np.var(marks):.2f}')
print(f'Std Dev: {np.std(marks):.2f}')
print(f'Range: {np.ptp(marks)}')

Q1 = np.percentile(marks, 25)
Q3 = np.percentile(marks, 75)
IQR = Q3 - Q1

print(f'Q1: {Q1}, Q3: {Q3}, IQR: {IQR}')

lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
outliers = marks[(marks < lower) | (marks > upper)]

print(f'Outlier bounds: [{lower:.1f}, {upper:.1f}]')
print(f'Outliers: {outliers if len(outliers) > 0 else "None"}')
```

### Challenge 5. Normal Equation for Linear Regression

**Difficulty:** Hard

Implement the normal equation w = (X^T X)^(-1) X^T y to solve linear regression. Create data for y = 3x + 7 + noise with 50 points. Add a bias column to X. Compute weights and print the learned equation. Compare with sklearn's LinearRegression.

**Constraints:**

- Use np.linalg.inv() for the normal equation. Use random_state=42.

**Sample input:**

```
50 data points from y = 3x + 7 + noise
```

**Sample output:**

```
Normal equation: y = 2.98x + 7.12
sklearn: y = 2.98x + 7.12
```

**Solution:**

```ai-and-machine-learning
import numpy as np
from sklearn.linear_model import LinearRegression

np.random.seed(42)
x = np.random.uniform(0, 10, 50)
y = 3 * x + 7 + np.random.normal(0, 2, 50)

# Normal equation
X = np.column_stack([np.ones(50), x])  # Add bias column
w = np.linalg.inv(X.T @ X) @ X.T @ y
print(f'Normal equation: y = {w[1]:.2f}x + {w[0]:.2f}')

# sklearn comparison
model = LinearRegression()
model.fit(x.reshape(-1, 1), y)
print(f'sklearn: y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}')
print(f'Match: {np.allclose(w[1], model.coef_[0]) and np.allclose(w[0], model.intercept_)}')
```

### Challenge 6. Multivariate Gradient Descent

**Difficulty:** Hard

Implement gradient descent for linear regression with 2 features. Use synthetic data: y = 2*x1 + 3*x2 + 5 + noise. Start weights at [0, 0, 0] (bias, w1, w2). Use MSE as loss function. Run 1000 iterations with lr=0.01. Print the learned weights and compare with the true values.

**Constraints:**

- Normalize features before training. Print loss every 200 steps.

**Sample input:**

```
100 data points, y = 2*x1 + 3*x2 + 5 + noise
```

**Sample output:**

```
Learned: y = 2.01*x1 + 3.02*x2 + 4.98
True: y = 2*x1 + 3*x2 + 5
```

**Solution:**

```ai-and-machine-learning
import numpy as np

np.random.seed(42)
n = 100
x1 = np.random.uniform(0, 10, n)
x2 = np.random.uniform(0, 10, n)
y = 2 * x1 + 3 * x2 + 5 + np.random.normal(0, 1, n)

# Normalize features
x1_norm = (x1 - x1.mean()) / x1.std()
x2_norm = (x2 - x2.mean()) / x2.std()
X = np.column_stack([np.ones(n), x1_norm, x2_norm])

w = np.zeros(3)
lr = 0.01

for i in range(1000):
    y_pred = X @ w
    error = y_pred - y
    loss = np.mean(error ** 2)
    gradient = (2 / n) * X.T @ error
    w = w - lr * gradient
    if i % 200 == 0:
        print(f'Step {i}: Loss = {loss:.4f}')

print(f'\nLearned weights (normalized): bias={w[0]:.2f}, w1={w[1]:.2f}, w2={w[2]:.2f}')
print(f'True equation: y = 2*x1 + 3*x2 + 5')
```

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/mathematics-for-ml/*
