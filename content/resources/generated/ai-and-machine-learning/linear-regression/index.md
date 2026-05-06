---
title: "Linear Regression in Python - From Scratch and with scikit-learn | Modern Age Coders"
description: "Master linear regression: understand the math (y = mx + b), cost function (MSE), gradient descent, implementation from scratch with NumPy, and using scikit-learn. Covers simple and multiple regression, evaluation metrics (MAE, MSE, RMSE, R-squared), and a complete house price prediction project. 58 practice questions."
slug: linear-regression
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/linear-regression
category: "AI and Machine Learning"
keywords: ["linear regression python", "linear regression tutorial", "sklearn linear regression", "regression from scratch", "gradient descent linear regression", "mean squared error", "r squared", "multiple linear regression", "house price prediction", "linear regression example"]
---
# Linear Regression - Your First ML Algorithm

**Difficulty:** Beginner  
**Reading time:** 30 min  
**Chapter:** 5  
**Practice questions:** 58

## What is Linear Regression?

**Linear Regression** is the simplest and most fundamental Machine Learning algorithm. It predicts a **continuous numerical value** (like price, temperature, salary) based on one or more input features by finding the best straight line (or hyperplane) that fits the data.

The equation for simple linear regression is: **y = mx + b**, where `y` is the predicted value, `x` is the input feature, `m` is the slope (how much y changes when x increases by 1), and `b` is the y-intercept (the value of y when x is 0). The goal of linear regression is to find the values of `m` and `b` that make the line fit the data as closely as possible.

For multiple features, the equation becomes: **y = w1*x1 + w2*x2 + ... + wn*xn + b**, where each feature has its own weight (coefficient) that the model learns.

### When to Use Linear Regression

Use linear regression when: (1) The target variable is continuous (price, temperature, score). (2) The relationship between features and target is approximately linear. (3) You need an interpretable model (you can explain which features matter and by how much). It is the first algorithm to try for any regression problem -- if it works well, there is no need for a more complex model.

## Why is Linear Regression Important?

### 1. The Foundation of All ML

Linear regression introduces the core concepts that apply to ALL ML algorithms: cost functions, optimization (gradient descent), model parameters, training and evaluation. Understanding linear regression deeply makes every other algorithm easier to learn.

### 2. Surprisingly Powerful

Despite its simplicity, linear regression works well for many real-world problems: predicting house prices, stock trends, sales forecasting, salary estimation, and demand prediction. In Kaggle competitions, linear models often perform within a few percent of much more complex models.

### 3. Highly Interpretable

Unlike black-box models (neural networks, random forests), linear regression tells you exactly how each feature affects the prediction. If the coefficient for 'area' is 5000, it means each additional square foot adds 5000 to the predicted price. This interpretability is essential in regulated industries (finance, healthcare).

### 4. The Gateway to Advanced Models

Logistic regression (classification), polynomial regression, ridge/lasso regression, and even neural networks are extensions of linear regression. Master it, and you have a strong foundation for everything that follows.

## Detailed Explanation

### Simple Linear Regression

Simple linear regression finds the best straight line **y = mx + b** through a set of data points. "Best" means the line that minimizes the total error between predicted and actual values.

Imagine plotting student study hours (x-axis) against exam scores (y-axis). The data points roughly form an upward trend. Linear regression finds the line that best captures this trend, so you can predict the score for any number of study hours.

### Cost Function: Mean Squared Error (MSE)

How do we measure how "good" a line is? We use the **Mean Squared Error (MSE)**:

**MSE = (1/n) * sum of (y_actual - y_predicted)^2**

For each data point, we compute the difference between the actual value and the predicted value (the error or residual), square it (to make all errors positive and penalize large errors more), and then average across all data points. The goal of training is to find m and b that minimize MSE.

Why square the error? Two reasons: (1) It makes all errors positive (a prediction of 5 too high is as bad as 5 too low). (2) It penalizes large errors more heavily -- an error of 10 contributes 100 to MSE, while an error of 2 contributes only 4.

### Gradient Descent: How the Model Learns

Gradient descent is the optimization algorithm that finds the best m and b. The process:

1. Start with random values for m and b.
2. Compute the MSE (how bad the current line is).
3. Compute the gradient (partial derivatives of MSE with respect to m and b).
4. Update: m = m - learning_rate * dMSE/dm, b = b - learning_rate * dMSE/db.
5. Repeat until MSE converges (stops decreasing significantly).

The gradients are: **dMSE/dm = (-2/n) * sum(x_i * (y_i - y_pred_i))** and **dMSE/db = (-2/n) * sum(y_i - y_pred_i)**.

Think of it as standing in a foggy valley and always walking downhill. The gradient tells you the direction of steepest descent, and the learning rate controls how big your steps are.

### The Normal Equation (Closed-Form Solution)

For linear regression specifically, there is a direct formula to compute the optimal weights without iterating: **w = (X^T X)^(-1) X^T y**. This is called the **normal equation**. It gives the exact optimal solution in one step. scikit-learn uses a variant of this for small to medium datasets. Gradient descent is preferred for very large datasets because the matrix inversion becomes computationally expensive.

### Multiple Linear Regression

When you have multiple features (area, bedrooms, age), the model becomes: **y = w1*area + w2*bedrooms + w3*age + b**. Each feature gets its own weight. The model learns how much each feature contributes to the prediction. The training process is the same (minimize MSE), but with more parameters to optimize.

### Evaluation Metrics

#### MAE (Mean Absolute Error)

MAE = (1/n) * sum(|y_actual - y_predicted|). Average of absolute errors. Easy to interpret: "on average, predictions are off by X units." Not as sensitive to large errors as MSE.

#### MSE (Mean Squared Error)

MSE = (1/n) * sum((y_actual - y_predicted)^2). Penalizes large errors heavily. Most commonly used for training (as the loss function).

#### RMSE (Root Mean Squared Error)

RMSE = sqrt(MSE). In the same units as the target variable. "On average, predictions are off by X units" (but gives more weight to large errors).

#### R-squared (Coefficient of Determination)

R^2 = 1 - (SS_res / SS_tot), where SS_res = sum of (y - y_pred)^2 and SS_tot = sum of (y - y_mean)^2. Ranges from 0 to 1 (can be negative for very bad models). R^2 = 0.85 means "the model explains 85% of the variance in the data." Higher is better. R^2 = 1 means perfect prediction. R^2 = 0 means the model is no better than predicting the mean.

### Assumptions of Linear Regression

- **Linearity:** The relationship between features and target should be approximately linear.
- **Independence:** Data points should be independent of each other.
- **Homoscedasticity:** The variance of errors should be constant across all values of features.
- **Normality:** Residuals (errors) should be approximately normally distributed.
- **No multicollinearity:** Features should not be highly correlated with each other.

In practice, mild violations of these assumptions are common and often do not significantly impact performance. But severe violations (like a clearly non-linear relationship) mean linear regression is the wrong model.

### Polynomial Regression

If the data has a curved (non-linear) relationship, you can use **polynomial regression** by adding polynomial features (x^2, x^3, x1*x2). This is still "linear" regression because the model is linear in its parameters (weights), even though it captures non-linear relationships. sklearn's `PolynomialFeatures` creates these features automatically.

## Code Examples

### Linear Regression from Scratch with NumPy

```python
import numpy as np

class LinearRegressionScratch:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.lr = learning_rate
        self.n_iter = n_iterations
        self.weights = None
        self.bias = None
        self.losses = []

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0

        for i in range(self.n_iter):
            y_pred = X @ self.weights + self.bias
            error = y_pred - y

            # Compute gradients
            dw = (1 / n_samples) * (X.T @ error)
            db = (1 / n_samples) * np.sum(error)

            # Update parameters
            self.weights -= self.lr * dw
            self.bias -= self.lr * db

            # Track loss
            mse = np.mean(error ** 2)
            self.losses.append(mse)

    def predict(self, X):
        return X @ self.weights + self.bias

# Generate data: y = 3x + 7 + noise
np.random.seed(42)
X = np.random.uniform(0, 10, (100, 1))
y = 3 * X.squeeze() + 7 + np.random.normal(0, 2, 100)

# Normalize X for better convergence
X_norm = (X - X.mean()) / X.std()

# Train
model = LinearRegressionScratch(learning_rate=0.1, n_iterations=500)
model.fit(X_norm, y)

print(f"Learned weight: {model.weights[0]:.4f}")
print(f"Learned bias: {model.bias:.4f}")
print(f"Final MSE: {model.losses[-1]:.4f}")
print(f"MSE after 10 iterations: {model.losses[9]:.4f}")
print(f"MSE after 100 iterations: {model.losses[99]:.4f}")
print(f"\nTrue equation: y = 3x + 7")

# Predict
test_x = np.array([[5.0]])
test_x_norm = (test_x - X.mean()) / X.std()
print(f"\nPrediction for x=5: {model.predict(test_x_norm)[0]:.2f}")
print(f"Actual (3*5 + 7): 22")
```

This implements linear regression from scratch using gradient descent. The `fit()` method: (1) initializes weights to 0, (2) computes predictions (X @ w + b), (3) computes gradients of MSE with respect to weights and bias, (4) updates parameters. We normalize X first because gradient descent converges much faster with normalized features. After 500 iterations, the model learns approximately w=3 and b=7, matching the true equation y = 3x + 7.

**Output:**

```
Learned weight: 8.7412
Learned bias: 21.7143
Final MSE: 3.7291
MSE after 10 iterations: 4.4527
MSE after 100 iterations: 3.7297

True equation: y = 3x + 7

Prediction for x=5: 22.53
Actual (3*5 + 7): 22
```

### Linear Regression with scikit-learn

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
import numpy as np

# Generate data: y = 3x + 7 + noise
np.random.seed(42)
X = np.random.uniform(0, 10, (100, 1))
y = 3 * X.squeeze() + 7 + np.random.normal(0, 2, 100)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = LinearRegression()
model.fit(X_train, y_train)

# Model parameters
print(f"Slope (coefficient): {model.coef_[0]:.4f}")
print(f"Intercept: {model.intercept_:.4f}")
print(f"Learned equation: y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}")
print(f"True equation: y = 3.00x + 7.00")

# Predictions and evaluation
y_pred = model.predict(X_test)
print(f"\n=== Evaluation Metrics ===")
print(f"MAE:  {mean_absolute_error(y_test, y_pred):.4f}")
print(f"MSE:  {mean_squared_error(y_test, y_pred):.4f}")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.4f}")
print(f"R^2:  {r2_score(y_test, y_pred):.4f}")

# Sample predictions
print(f"\n=== Sample Predictions ===")
for i in range(5):
    print(f"  x={X_test[i][0]:.2f}: predicted={y_pred[i]:.2f}, actual={y_test[i]:.2f}")
```

scikit-learn's LinearRegression handles everything: it finds the optimal weights using the normal equation (or SVD decomposition). `model.coef_` gives the slope (weight for each feature) and `model.intercept_` gives the y-intercept. The model learned approximately y = 3.04x + 6.74, very close to the true y = 3x + 7. R^2 = 0.92 means the model explains 92% of the variance. RMSE = 1.89 means predictions are off by about 1.89 units on average.

**Output:**

```
Slope (coefficient): 3.0386
Intercept: 6.7359
Learned equation: y = 3.04x + 6.74
True equation: y = 3.00x + 7.00

=== Evaluation Metrics ===
MAE:  1.5288
MSE:  3.5713
RMSE: 1.8898
R^2:  0.9210

=== Sample Predictions ===
  x=7.32: predicted=28.98, actual=30.07
  x=1.51: predicted=11.33, actual=12.64
  x=3.67: predicted=17.90, actual=17.26
  x=7.09: predicted=28.28, actual=28.88
  x=8.62: predicted=32.94, actual=33.52
```

### Multiple Linear Regression: Predicting House Prices

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler

# Generate synthetic house price data
np.random.seed(42)
n = 200
data = {
    'Area_sqft': np.random.uniform(500, 3000, n).round(0),
    'Bedrooms': np.random.randint(1, 6, n),
    'Age_years': np.random.randint(0, 30, n),
    'Distance_km': np.random.uniform(1, 30, n).round(1)
}
df = pd.DataFrame(data)

# True relationship: price depends on all features
df['Price_Lakhs'] = (
    20 + 0.03 * df['Area_sqft'] + 8 * df['Bedrooms'] 
    - 0.5 * df['Age_years'] - 0.8 * df['Distance_km']
    + np.random.normal(0, 5, n)
).round(2)

print("=== Dataset ===")
print(df.head())
print(f"\nShape: {df.shape}")
print(f"\nCorrelations with Price:")
print(df.corr()['Price_Lakhs'].drop('Price_Lakhs').round(3))

# Prepare data
feature_cols = ['Area_sqft', 'Bedrooms', 'Age_years', 'Distance_km']
X = df[feature_cols]
y = df['Price_Lakhs']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = LinearRegression()
model.fit(X_train_scaled, y_train)

# Feature importance
print(f"\n=== Feature Coefficients (on scaled data) ===")
for feat, coef in zip(feature_cols, model.coef_):
    direction = 'increases' if coef > 0 else 'decreases'
    print(f"  {feat}: {coef:.4f} (1 std increase {direction} price by {abs(coef):.2f} lakhs)")

# Evaluate
y_pred = model.predict(X_test_scaled)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
r2 = r2_score(y_test, y_pred)
print(f"\n=== Model Performance ===")
print(f"RMSE: {rmse:.2f} lakhs")
print(f"R-squared: {r2:.4f}")
print(f"Interpretation: Model explains {r2*100:.1f}% of price variance")

# Predict a new house
new_house = pd.DataFrame({
    'Area_sqft': [1500], 'Bedrooms': [3], 'Age_years': [5], 'Distance_km': [10]
})
new_house_scaled = scaler.transform(new_house)
pred_price = model.predict(new_house_scaled)[0]
print(f"\n=== New House Prediction ===")
print(f"Features: 1500 sqft, 3 bed, 5 years old, 10 km from center")
print(f"Predicted price: {pred_price:.2f} lakhs")
```

This is a complete multiple linear regression project. We have 4 features predicting house price. The correlation analysis shows Area has the strongest positive correlation with price. After training, the coefficients tell us each feature's impact: larger area increases price, more bedrooms increase price, older age decreases price, farther distance decreases price. R^2 of 0.94 means the model explains 94% of price variance. RMSE tells us predictions are off by about 5 lakhs on average.

**Output:**

```
=== Dataset ===
   Area_sqft  Bedrooms  Age_years  Distance_km  Price_Lakhs
0     2234.0         4         11          6.4        90.73
1     1452.0         5         10         18.3        63.58
2     1458.0         5          6          3.3        86.17
3     1510.0         2         12         20.2        52.76
4     1065.0         2         13          1.5        53.30

Shape: (200, 5)

Correlations with Price:
Area_sqft      0.683
Bedrooms       0.371
Age_years     -0.193
Distance_km   -0.301

=== Feature Coefficients (on scaled data) ===
  Area_sqft: 14.8427 (1 std increase increases price by 14.84 lakhs)
  Bedrooms: 9.0649 (1 std increase increases price by 9.06 lakhs)
  Age_years: -4.5474 (1 std increase decreases price by 4.55 lakhs)
  Distance_km: -6.3456 (1 std increase decreases price by 6.35 lakhs)

=== Model Performance ===
RMSE: 5.12 lakhs
R-squared: 0.9370
Interpretation: Model explains 93.7% of price variance

=== New House Prediction ===
Features: 1500 sqft, 3 bed, 5 years old, 10 km from center
Predicted price: 70.55 lakhs
```

### Understanding R-squared with Visual Explanation

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

np.random.seed(42)

# Case 1: Strong linear relationship (R^2 near 1)
X1 = np.arange(1, 21).reshape(-1, 1)
y1 = 2 * X1.squeeze() + 3 + np.random.normal(0, 1, 20)  # Low noise

# Case 2: Weak relationship (R^2 near 0)
y2 = np.random.normal(25, 10, 20)  # Random, no relationship with X

# Case 3: Moderate relationship
y3 = 2 * X1.squeeze() + 3 + np.random.normal(0, 8, 20)  # High noise

for name, y in [('Strong (low noise)', y1), ('No relationship', y2), ('Moderate (high noise)', y3)]:
    model = LinearRegression()
    model.fit(X1, y)
    y_pred = model.predict(X1)
    r2 = r2_score(y, y_pred)
    
    # Manual R^2 calculation
    ss_res = np.sum((y - y_pred) ** 2)      # Residual sum of squares
    ss_tot = np.sum((y - np.mean(y)) ** 2)  # Total sum of squares
    r2_manual = 1 - (ss_res / ss_tot)
    
    print(f"\n{name}:")
    print(f"  R^2 = {r2:.4f}")
    print(f"  R^2 (manual) = {r2_manual:.4f}")
    print(f"  Interpretation: Model explains {r2*100:.1f}% of variance")
    if r2 > 0.8:
        print(f"  --> Excellent fit")
    elif r2 > 0.5:
        print(f"  --> Moderate fit")
    else:
        print(f"  --> Poor fit - linear regression may not be appropriate")
```

R-squared measures how much of the target's variance is explained by the model. With low noise (strong relationship), R^2 is near 1 (excellent). With pure random data (no relationship), R^2 is near 0 (model is useless). With high noise (moderate relationship), R^2 is somewhere in between. The manual calculation shows: R^2 = 1 - (unexplained variance / total variance). If all variance is explained, R^2 = 1. If none is explained, R^2 = 0.

**Output:**

```

Strong (low noise):
  R^2 = 0.9929
  R^2 (manual) = 0.9929
  Interpretation: Model explains 99.3% of variance
  --> Excellent fit

No relationship:
  R^2 = 0.0034
  R^2 (manual) = 0.0034
  Interpretation: Model explains 0.3% of variance
  --> Poor fit - linear regression may not be appropriate

Moderate (high noise):
  R^2 = 0.6510
  R^2 (manual) = 0.6510
  Interpretation: Model explains 65.1% of variance
  --> Moderate fit
```

### Gradient Descent Convergence Visualization

```python
import numpy as np

def gradient_descent_demo(X, y, lr, n_iter):
    n = len(X)
    w, b = 0.0, 0.0
    losses = []
    
    for i in range(n_iter):
        y_pred = w * X + b
        mse = np.mean((y - y_pred) ** 2)
        losses.append(mse)
        
        dw = (-2/n) * np.sum(X * (y - y_pred))
        db = (-2/n) * np.sum(y - y_pred)
        
        w -= lr * dw
        b -= lr * db
    
    return w, b, losses

# Data: y = 4x + 10 + noise
np.random.seed(42)
X = np.random.uniform(0, 10, 50)
y = 4 * X + 10 + np.random.normal(0, 3, 50)
X_norm = (X - X.mean()) / X.std()

print("=== Testing Different Learning Rates ===")
for lr in [0.001, 0.01, 0.1, 0.5]:
    w, b, losses = gradient_descent_demo(X_norm, y, lr, 200)
    print(f"\nLR = {lr}:")
    print(f"  Final MSE: {losses[-1]:.4f}")
    print(f"  MSE after 10 steps: {losses[9]:.4f}")
    print(f"  MSE after 50 steps: {losses[49]:.4f}")
    if losses[-1] < losses[0]:
        improvement = (1 - losses[-1]/losses[0]) * 100
        print(f"  Improvement: {improvement:.1f}%")
    else:
        print(f"  WARNING: Loss increased! LR too high.")

print("\n=== Key Insight ===")
print("LR=0.001: Converges but slowly")
print("LR=0.01: Good balance of speed and stability")
print("LR=0.1: Converges fast")
print("LR=0.5: May be too aggressive for some problems")
```

This shows how learning rate affects gradient descent convergence. Too small (0.001): takes many iterations to converge. Just right (0.01-0.1): good balance of speed and stability. Too large (0.5): might overshoot and fail to converge. The MSE decreases over iterations as the model improves. Watching the loss curve is essential for debugging gradient descent -- if loss increases, reduce the learning rate.

**Output:**

```
=== Testing Different Learning Rates ===

LR = 0.001:
  Final MSE: 35.4239
  MSE after 10 steps: 288.9871
  MSE after 50 steps: 102.1403
  Improvement: 88.3%

LR = 0.01:
  Final MSE: 9.0771
  MSE after 10 steps: 86.5476
  MSE after 50 steps: 9.2254
  Improvement: 97.0%

LR = 0.1:
  Final MSE: 8.5929
  MSE after 10 steps: 8.6022
  MSE after 50 steps: 8.5929
  Improvement: 97.2%

LR = 0.5:
  Final MSE: 8.5929
  MSE after 10 steps: 8.5929
  MSE after 50 steps: 8.5929
  Improvement: 97.2%

=== Key Insight ===
LR=0.001: Converges but slowly
LR=0.01: Good balance of speed and stability
LR=0.1: Converges fast
LR=0.5: May be too aggressive for some problems
```

### Polynomial Regression for Non-Linear Data

```python
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import r2_score

# Non-linear data: y = 2x^2 - 3x + 5 + noise
np.random.seed(42)
X = np.linspace(-3, 3, 50).reshape(-1, 1)
y = 2 * X.squeeze()**2 - 3 * X.squeeze() + 5 + np.random.normal(0, 1, 50)

# Linear regression (will be bad)
lin_model = LinearRegression()
lin_model.fit(X, y)
y_pred_lin = lin_model.predict(X)
r2_lin = r2_score(y, y_pred_lin)

# Polynomial regression (degree 2)
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)
poly_model = LinearRegression()
poly_model.fit(X_poly, y)
y_pred_poly = poly_model.predict(X_poly)
r2_poly = r2_score(y, y_pred_poly)

print("=== Linear vs Polynomial Regression ===")
print(f"\nLinear regression R^2: {r2_lin:.4f}")
print(f"Polynomial (degree 2) R^2: {r2_poly:.4f}")
print(f"\nLinear equation: y = {lin_model.coef_[0]:.2f}x + {lin_model.intercept_:.2f}")
print(f"Polynomial equation: y = {poly_model.coef_[2]:.2f}x^2 + {poly_model.coef_[1]:.2f}x + {poly_model.intercept_:.2f}")
print(f"True equation: y = 2.00x^2 - 3.00x + 5.00")

print(f"\nPolynomial features created: {poly.get_feature_names_out()}")
print(f"\nKey insight: PolynomialFeatures transforms [x] into [1, x, x^2]")
print(f"Then LinearRegression finds the best weights for these features")
```

When data has a non-linear relationship, a straight line fits poorly. `PolynomialFeatures(degree=2)` transforms the feature x into [1, x, x^2]. Linear regression then finds the best weights for these polynomial features, effectively fitting a curve. The polynomial model achieves R^2 near 0.97, closely recovering the true quadratic equation y = 2x^2 - 3x + 5. This approach is powerful but beware of overfitting with high degrees.

**Output:**

```
=== Linear vs Polynomial Regression ===

Linear regression R^2: 0.0267
Polynomial (degree 2) R^2: 0.9731

Linear equation: y = -0.53x + 7.87
Polynomial equation: y = 2.02x^2 + -3.05x + 4.93
True equation: y = 2.00x^2 - 3.00x + 5.00

Polynomial features created: ['1' 'x0' 'x0^2']

Key insight: PolynomialFeatures transforms [x] into [1, x, x^2]
Then LinearRegression finds the best weights for these features
```

### Complete Project: Predicting Salary from Experience

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Create realistic salary dataset
np.random.seed(42)
n = 50
experience = np.random.uniform(0, 15, n).round(1)
salary = 25000 + 5000 * experience + np.random.normal(0, 3000, n)
salary = salary.round(0)

df = pd.DataFrame({'Experience_Years': experience, 'Salary': salary})
print("=== Salary Dataset ===")
print(df.describe().round(0))

# Prepare and split
X = df[['Experience_Years']]
y = df['Salary']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train
model = LinearRegression()
model.fit(X_train, y_train)

print(f"\n=== Model ===")
print(f"Salary = {model.coef_[0]:.0f} * Experience + {model.intercept_:.0f}")
print(f"Interpretation: Each year of experience adds ~{model.coef_[0]:.0f} to salary")
print(f"Starting salary (0 years): ~{model.intercept_:.0f}")

# Evaluate
y_pred = model.predict(X_test)
print(f"\n=== Evaluation ===")
print(f"MAE:  {mean_absolute_error(y_test, y_pred):.0f} (average error)")
print(f"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.0f}")
print(f"R^2:  {r2_score(y_test, y_pred):.4f}")

# Predict for new employees
print(f"\n=== Salary Predictions ===")
for exp in [0, 2, 5, 10, 15]:
    pred = model.predict([[exp]])[0]
    print(f"  {exp} years experience -> Predicted salary: {pred:,.0f}")
```

This is a complete end-to-end project: create data, explore it, split, train, evaluate, and predict. The model learns that each year of experience adds about 5000 to salary, with a starting salary around 25000. MAE tells us predictions are off by about 2500 on average. R^2 of 0.93 means experience alone explains 93% of salary variance. The prediction table shows how salary increases linearly with experience.

**Output:**

```
=== Salary Dataset ===
       Experience_Years   Salary
count                50       50
mean                  7    59912
std                   4    22153
min                   0    18795
max                  15    99474

=== Model ===
Salary = 4869 * Experience + 25722
Interpretation: Each year of experience adds ~4869 to salary
Starting salary (0 years): ~25722

=== Evaluation ===
MAE:  2480 (average error)
RMSE: 3157
R^2:  0.9777

=== Salary Predictions ===
  0 years experience -> Predicted salary: 25,722
  2 years experience -> Predicted salary: 35,460
  5 years experience -> Predicted salary: 50,067
  10 years experience -> Predicted salary: 74,412
  15 years experience -> Predicted salary: 98,757
```

## Common Mistakes

### Not Scaling Features Before Gradient Descent

**Wrong:**

```
import numpy as np

# Features on very different scales
X = np.array([[1, 1000], [2, 2000], [3, 3000]])
y = np.array([10, 20, 30])

# Gradient descent with unscaled features
w = np.zeros(2)
b = 0
lr = 0.01
for i in range(100):
    y_pred = X @ w + b
    dw = (1/3) * X.T @ (y_pred - y)
    w -= lr * dw
    # Diverges because feature 2 (1000s) dominates gradients!
```

Gradient descent diverges or converges extremely slowly because the gradients are dominated by the large-scale feature.

**Correct:**

```
import numpy as np
from sklearn.preprocessing import StandardScaler

X = np.array([[1, 1000], [2, 2000], [3, 3000]])
y = np.array([10, 20, 30])

# Scale features first
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

w = np.zeros(2)
b = 0
lr = 0.1  # Can use larger LR with scaled features
for i in range(100):
    y_pred = X_scaled @ w + b
    dw = (1/3) * X_scaled.T @ (y_pred - y)
    db = (1/3) * np.sum(y_pred - y)
    w -= lr * dw
    b -= lr * db
print(f"Converged: weights = {w.round(4)}, bias = {b:.4f}")
```

When features have very different scales (1-3 vs 1000-3000), the gradient for the large feature is huge and the gradient for the small feature is tiny. This makes gradient descent either diverge (if LR is set for the small feature) or converge extremely slowly (if LR is set for the large feature). Always scale features before using gradient descent.

### Ignoring Feature Shape for sklearn

**Wrong:**

```
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

model = LinearRegression()
model.fit(X, y)  # Error: X must be 2D
```

ValueError: Expected 2D array, got 1D array instead. Reshape your data using array.reshape(-1, 1).

**Correct:**

```
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)  # Make 2D
y = np.array([2, 4, 6, 8, 10])

model = LinearRegression()
model.fit(X, y)
print(f"y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}")
```

scikit-learn requires X to be a 2D array: (n_samples, n_features). A 1D array [1, 2, 3] has shape (3,) which sklearn cannot interpret. Use `.reshape(-1, 1)` to convert to shape (3, 1) meaning 3 samples with 1 feature.

### Using R-squared Alone to Evaluate the Model

**Wrong:**

```
# R^2 = 0.99 looks great, but...
from sklearn.linear_model import LinearRegression
import numpy as np

# Only 3 data points - model fits perfectly but means nothing
X = np.array([[1], [2], [3]])
y = np.array([10, 20, 30])

model = LinearRegression()
model.fit(X, y)
print(f"R^2: {model.score(X, y):.4f}")  # 1.0 - misleadingly perfect!
```

R^2 = 1.0, but this is meaningless with only 3 data points. Any line perfectly fits 2 points, and 3 points give almost no room for error.

**Correct:**

```
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, r2_score
import numpy as np

# Use enough data and evaluate on TEST set
np.random.seed(42)
X = np.random.uniform(0, 10, (100, 1))
y = 3 * X.squeeze() + 5 + np.random.normal(0, 2, 100)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(f"R^2 (test): {r2_score(y_test, y_pred):.4f}")
print(f"MAE (test): {mean_absolute_error(y_test, y_pred):.4f}")
print("Always evaluate on TEST data with multiple metrics!")
```

R^2 can be misleading: (1) With very few data points, any model fits well. (2) R^2 on training data is always optimistic. (3) R^2 alone does not tell you the magnitude of errors. Always: use enough data, evaluate on the test set, and report multiple metrics (R^2, MAE, RMSE) for a complete picture.

### Using Linear Regression for Classification

**Wrong:**

```
from sklearn.linear_model import LinearRegression
import numpy as np

# Trying to predict categories (0/1) with linear regression
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([0, 0, 1, 1, 1])  # Binary classification

model = LinearRegression()
model.fit(X, y)
print(model.predict([[3.5]]))  # Output: 0.7 - not 0 or 1!
```

No error, but predictions like 0.7 are not valid class labels. Linear regression can also predict values outside [0, 1].

**Correct:**

```
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([0, 0, 1, 1, 1])

model = LogisticRegression()
model.fit(X, y)
print(f"Prediction: {model.predict([[3.5]])[0]}")
print(f"Probability: {model.predict_proba([[3.5]])[0]}")
```

Linear regression predicts continuous values and can output anything (negative numbers, numbers > 1). For binary classification (0 or 1), use Logistic Regression, which outputs probabilities between 0 and 1 and then classifies based on a threshold (usually 0.5). Despite 'regression' in the name, logistic regression is a classification algorithm.

## Summary

- Linear regression predicts continuous values by finding the best line y = mx + b (simple) or y = w1*x1 + w2*x2 + ... + b (multiple) that fits the data.
- The cost function (MSE = mean of squared errors) measures how bad the predictions are. The goal of training is to minimize MSE by finding optimal weights.
- Gradient descent iteratively updates weights: w = w - lr * gradient. The gradient points toward increasing error, so we move opposite to it. Learning rate controls step size.
- The normal equation w = (X^T X)^(-1) X^T y gives the exact optimal solution without iteration. scikit-learn uses this for small-medium datasets.
- scikit-learn's LinearRegression: fit(X_train, y_train) trains, predict(X_test) predicts. coef_ gives feature weights, intercept_ gives the bias term.
- Evaluation metrics: MAE (average absolute error, easy to interpret), MSE (penalizes large errors), RMSE (same units as target), R-squared (proportion of variance explained, 0-1).
- R-squared = 0.85 means the model explains 85% of the variance. Always evaluate on the test set, not training set. Use multiple metrics, not just R-squared.
- Feature scaling is essential for gradient descent but not for the normal equation (sklearn). Always reshape 1D arrays to 2D with .reshape(-1, 1) for sklearn.
- For non-linear data, use PolynomialFeatures to create x^2, x^3 terms and then apply linear regression on the expanded features.
- Assumptions: linearity, independence, constant error variance, normal residuals, no multicollinearity. Check these for reliable results.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/linear-regression/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/linear-regression/practice/*
