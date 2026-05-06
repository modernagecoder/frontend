---
title: "Practice: Linear Regression - Your First ML Algorithm"
description: "58 practice problems for Linear Regression - Your First ML Algorithm in AI and Machine Learning"
slug: linear-regression-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/linear-regression/practice
category: "AI and Machine Learning"
---
# Practice: Linear Regression - Your First ML Algorithm

**Total questions:** 58

## Topic-Specific Questions

### Q1. [Easy] Write Python code to train a simple linear regression model using scikit-learn on the data: X = [1, 2, 3, 4, 5], y = [3, 5, 7, 9, 11]. Print the slope and intercept.

*Hint:* Use LinearRegression().fit(). Remember to reshape X.

**Answer:** ```
from sklearn.linear_model import LinearRegression
import numpy as np
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([3, 5, 7, 9, 11])
model = LinearRegression()
model.fit(X, y)
print(f'Slope: {model.coef_[0]:.2f}')
print(f'Intercept: {model.intercept_:.2f}')
print(f'Equation: y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}')
```

Output: Slope: 2.00, Intercept: 1.00

The data follows y = 2x + 1 perfectly (no noise). LinearRegression recovers the exact equation. The slope 2 means y increases by 2 for every 1 unit increase in x.

### Q2. [Easy] What does R-squared = 0.85 mean in simple terms?

*Hint:* Think about how much of the variation in y is explained by the model.

**Answer:** R-squared = 0.85 means the model explains 85% of the variance (variation) in the target variable. The remaining 15% is unexplained variance (due to noise, missing features, or non-linear relationships). Higher R-squared is better, with 1.0 being a perfect fit.

Think of it this way: if you just predicted the mean of y for every sample, you would explain 0% of variance. A model with R^2 = 0.85 is 85% better than that naive baseline. The unexplained 15% could be reduced by adding more features or using a non-linear model.

### Q3. [Easy] A linear regression model has equation y = 3x + 5. What is the predicted value for x = 10?

*Hint:* Substitute x = 10 into y = 3x + 5.

**Answer:** `y = 3(10) + 5 = 35`

Simply plug x=10 into the equation: y = 3*10 + 5 = 30 + 5 = 35. The slope 3 means each unit increase in x adds 3 to y, and the intercept 5 is the y-value when x=0.

### Q4. [Easy] Write code to predict the value for x=6 using a trained linear regression model.

*Hint:* After model.fit(), use model.predict([[6]]).

**Answer:** ```
from sklearn.linear_model import LinearRegression
import numpy as np
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([10, 20, 30, 40, 50])
model = LinearRegression()
model.fit(X, y)
prediction = model.predict([[6]])
print(f'Prediction for x=6: {prediction[0]:.2f}')
```

Output: Prediction for x=6: 60.00

The model learns y = 10x + 0 from the training data. For x=6, it predicts 60. Note that [[6]] is 2D (required by sklearn).

### Q5. [Medium] What is the cost function used in linear regression and why do we square the errors?

*Hint:* MSE = mean of (actual - predicted)^2. Think about positive vs negative errors.

**Answer:** The cost function is **Mean Squared Error (MSE)**: MSE = (1/n) * sum((y_actual - y_predicted)^2). We square errors for two reasons: (1) It makes all errors positive (overpredicting by 5 and underpredicting by 5 are equally bad). (2) It penalizes large errors more than small ones (an error of 10 contributes 100, while an error of 2 contributes only 4). This encourages the model to avoid large mistakes.

Without squaring, positive and negative errors would cancel out: errors of +5 and -5 sum to 0, hiding the true error. Squaring also makes the cost function differentiable everywhere, which is necessary for gradient descent to work.

### Q6. [Medium] Write code to calculate MAE, MSE, RMSE, and R-squared for actual values [3, 5, 7, 9] and predicted values [2.8, 5.2, 6.5, 9.1].

*Hint:* Use sklearn.metrics functions or compute manually with numpy.

**Answer:** ```
import numpy as np
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
y_actual = np.array([3, 5, 7, 9])
y_pred = np.array([2.8, 5.2, 6.5, 9.1])
print(f'MAE: {mean_absolute_error(y_actual, y_pred):.4f}')
print(f'MSE: {mean_squared_error(y_actual, y_pred):.4f}')
print(f'RMSE: {np.sqrt(mean_squared_error(y_actual, y_pred)):.4f}')
print(f'R^2: {r2_score(y_actual, y_pred):.4f}')
```

MAE = average of |0.2, 0.2, 0.5, 0.1| = 0.25. MSE = average of (0.04, 0.04, 0.25, 0.01) = 0.085. RMSE = sqrt(0.085) = 0.292. R^2 close to 1 indicates excellent fit. These four metrics together give a complete picture of model performance.

### Q7. [Medium] Implement one step of gradient descent for the model y = wx + b. Given w=0, b=0, X=[1, 2, 3], y=[2, 4, 6], learning_rate=0.1, compute the new w and b after one update.

*Hint:* Compute predictions, errors, gradients, then update.

**Answer:** ```
import numpy as np
X = np.array([1, 2, 3])
y = np.array([2, 4, 6])
w, b, lr = 0.0, 0.0, 0.1

y_pred = w * X + b
error = y_pred - y
dw = (2/3) * np.sum(X * error)
db = (2/3) * np.sum(error)
w_new = w - lr * dw
b_new = b - lr * db
print(f'Old: w={w}, b={b}')
print(f'Gradients: dw={dw:.4f}, db={db:.4f}')
print(f'New: w={w_new:.4f}, b={b_new:.4f}')
```

Starting at w=0, b=0: predictions are all 0. Errors are [0-2, 0-4, 0-6] = [-2, -4, -6]. Gradient for w: (2/3) * (1*(-2) + 2*(-4) + 3*(-6)) = (2/3)*(-28) = -18.67. New w = 0 - 0.1*(-18.67) = 1.867. The weights move in the right direction (toward 2).

### Q8. [Medium] What is the difference between simple and multiple linear regression?

*Hint:* Think about the number of input features.

**Answer:** **Simple linear regression** has one input feature: y = mx + b (one slope). **Multiple linear regression** has two or more input features: y = w1*x1 + w2*x2 + ... + b (one weight per feature). Multiple regression captures the combined effect of several features on the target. For example, house price depends on area AND bedrooms AND location, not just one feature.

The training process (minimizing MSE) is the same for both. The difference is that multiple regression fits a hyperplane (flat surface in higher dimensions) instead of a line. Each coefficient tells you the effect of one feature while holding others constant.

### Q9. [Hard] Implement gradient descent for linear regression from scratch. Train on data y = 2x + 3 + noise for 100 iterations and print the learned equation.

*Hint:* Initialize w=0, b=0. Compute gradients of MSE. Update w and b each iteration.

**Answer:** ```
import numpy as np
np.random.seed(42)
X = np.random.uniform(0, 10, 50)
y = 2 * X + 3 + np.random.normal(0, 1, 50)
X_norm = (X - X.mean()) / X.std()
w, b, lr = 0.0, 0.0, 0.1
for i in range(100):
    y_pred = w * X_norm + b
    dw = (2/50) * np.sum(X_norm * (y_pred - y))
    db = (2/50) * np.sum(y_pred - y)
    w -= lr * dw
    b -= lr * db
mse = np.mean((y - (w * X_norm + b))**2)
print(f'Learned w={w:.4f}, b={b:.4f}, MSE={mse:.4f}')
```

Starting from w=0, b=0, gradient descent iteratively adjusts the weights to minimize MSE. After 100 iterations, the model should approximate the true relationship y = 2x + 3. Normalizing X beforehand ensures gradient descent converges efficiently.

### Q10. [Hard] What is the normal equation and when would you use gradient descent instead?

*Hint:* Normal equation: w = (X^T X)^(-1) X^T y. Think about computational cost.

**Answer:** The **normal equation** w = (X^T X)^(-1) X^T y computes the optimal weights directly in one step. Use it when: (1) the number of features is small to moderate (< 10,000), (2) the data fits in memory. Use **gradient descent** when: (1) the dataset is very large, (2) there are many features (matrix inversion is O(n^3) in features), (3) the problem is not purely linear (gradient descent is more general).

The normal equation requires inverting an (n_features x n_features) matrix. For 10 features, this is trivial. For 100,000 features, the inversion takes too much time and memory. Gradient descent scales much better because each iteration processes data in O(n_samples * n_features) time.

### Q11. [Medium] Train a multiple linear regression model with 3 features and print the coefficient for each feature to understand which one matters most.

*Hint:* Use model.coef_ to get weights for each feature.

**Answer:** ```
import numpy as np
from sklearn.linear_model import LinearRegression
np.random.seed(42)
X = np.random.randn(100, 3)
y = 5*X[:, 0] + 2*X[:, 1] + 0.1*X[:, 2] + np.random.normal(0, 0.5, 100)
model = LinearRegression()
model.fit(X, y)
features = ['Feature 1', 'Feature 2', 'Feature 3']
for feat, coef in zip(features, model.coef_):
    print(f'{feat}: coefficient = {coef:.4f}')
print(f'Intercept: {model.intercept_:.4f}')
```

The coefficients approximately recover the true weights: Feature 1 has weight ~5 (most important), Feature 2 ~2 (moderate), Feature 3 ~0.1 (barely matters). In real projects, examining coefficients tells you which features drive the prediction.

### Q12. [Easy] What is MSE if actual values are [10, 20, 30] and predictions are [12, 18, 33]?

*Hint:* MSE = mean of squared differences: ((10-12)^2 + (20-18)^2 + (30-33)^2) / 3.

**Answer:** `MSE = ((-2)^2 + (2)^2 + (-3)^2) / 3 = (4 + 4 + 9) / 3 = 17/3 = 5.667`

Calculate each squared error: (10-12)^2 = 4, (20-18)^2 = 4, (30-33)^2 = 9. Sum = 17. Divide by n=3: MSE = 5.667. RMSE would be sqrt(5.667) = 2.38, meaning predictions are off by about 2.38 units on average.

### Q13. [Hard] What are the assumptions of linear regression? What happens when they are violated?

*Hint:* Think about linearity, independence, constant variance, normal errors, no multicollinearity.

**Answer:** (1) **Linearity:** Relationship must be linear. Violation: curved patterns in residuals, poor predictions. Fix: polynomial features or non-linear model. (2) **Independence:** Observations should be independent. Violation: autocorrelation in time series. (3) **Homoscedasticity:** Error variance should be constant. Violation: fan-shaped residual plot. Fix: log-transform target. (4) **Normal residuals:** Errors should be approximately normal. Mild violation is OK for predictions, affects confidence intervals. (5) **No multicollinearity:** Features should not be highly correlated. Violation: unstable coefficients. Fix: drop one of correlated features or use Ridge regression.

In practice, mild violations are common and often acceptable. The most critical assumption is linearity -- if the relationship is clearly non-linear, the model will perform poorly regardless of other factors. Check assumptions by plotting residuals vs predicted values and checking feature correlations.

### Q14. [Easy] Write code to make predictions for x = [1, 5, 10, 15, 20] using a trained model and display them in a nice format.

*Hint:* Train a model first, then predict an array of values.

**Answer:** ```
from sklearn.linear_model import LinearRegression
import numpy as np
X_train = np.array([2, 4, 6, 8]).reshape(-1, 1)
y_train = np.array([15, 25, 35, 45])
model = LinearRegression()
model.fit(X_train, y_train)
test_values = [1, 5, 10, 15, 20]
for x in test_values:
    pred = model.predict([[x]])[0]
    print(f'x = {x:2d} -> predicted y = {pred:.2f}')
```

After training on [2,4,6,8] -> [15,25,35,45], the model learns y = 5x + 5. It can predict for any x value, even outside the training range (extrapolation). However, extrapolation should be done cautiously as the relationship may not hold for extreme values.

### Q15. [Hard] Compare linear regression and polynomial regression (degree 2 and 3) on non-linear data. Print R-squared for each.

*Hint:* Use PolynomialFeatures(degree=n) with LinearRegression.

**Answer:** ```
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import r2_score
np.random.seed(42)
X = np.linspace(0, 5, 50).reshape(-1, 1)
y = X.squeeze()**2 + np.random.normal(0, 2, 50)
for deg in [1, 2, 3]:
    poly = PolynomialFeatures(degree=deg)
    X_poly = poly.fit_transform(X)
    model = LinearRegression()
    model.fit(X_poly, y)
    r2 = r2_score(y, model.predict(X_poly))
    print(f'Degree {deg}: R^2 = {r2:.4f}')
```

The true relationship is y = x^2. Degree 1 (linear) gives low R^2 because a line cannot capture a curve. Degree 2 (quadratic) gives high R^2 because it matches the true relationship. Degree 3 might give slightly higher R^2 but the extra term is not meaningful -- this is a sign of potential overfitting.

### Q16. [Medium] Write code to train a linear regression model to predict salary from years of experience. Use the data: experience=[1,3,5,7,10,12,15], salary=[30,45,60,75,95,110,130] (in thousands). Print the model equation and predict salary for 8 years experience.

*Hint:* Train with LinearRegression, access coef_ and intercept_.

**Answer:** ```
from sklearn.linear_model import LinearRegression
import numpy as np
exp = np.array([1, 3, 5, 7, 10, 12, 15]).reshape(-1, 1)
sal = np.array([30, 45, 60, 75, 95, 110, 130])
model = LinearRegression()
model.fit(exp, sal)
print(f'Equation: salary = {model.coef_[0]:.2f} * experience + {model.intercept_:.2f}')
pred = model.predict([[8]])[0]
print(f'Predicted salary for 8 years: {pred:.2f}K')
```

The model learns the linear relationship between experience and salary. The coefficient tells us how much salary increases per year of experience. Predicting for 8 years gives an interpolation (within the training range), which is more reliable than extrapolation.

### Q17. [Medium] What is the difference between MAE and RMSE? When would you prefer one over the other?

*Hint:* Think about sensitivity to large errors.

**Answer:** **MAE** (Mean Absolute Error) treats all errors equally: an error of 10 counts as 10. **RMSE** (Root Mean Squared Error) penalizes large errors more: an error of 10 counts as 100 (squared) before averaging and square-rooting. Use MAE when all errors are equally important and you want a straightforward interpretation. Use RMSE when large errors are particularly undesirable (e.g., predicting medical dosages where a large error is dangerous).

For the same predictions, RMSE >= MAE always. If RMSE is much larger than MAE, it means there are some large outlier errors. If they are similar, errors are relatively uniform. Using both gives you a fuller picture of model performance.

### Q18. [Hard] Use the normal equation w = (X^T X)^(-1) X^T y to solve linear regression without sklearn. Compare with sklearn's solution.

*Hint:* Add a column of 1s to X for the bias term. Use np.linalg.inv().

**Answer:** ```
import numpy as np
from sklearn.linear_model import LinearRegression
np.random.seed(42)
x = np.random.uniform(0, 10, 50)
y = 3 * x + 7 + np.random.normal(0, 2, 50)
X = np.column_stack([np.ones(50), x])
w_normal = np.linalg.inv(X.T @ X) @ X.T @ y
model = LinearRegression()
model.fit(x.reshape(-1, 1), y)
print(f'Normal equation: y = {w_normal[1]:.4f}x + {w_normal[0]:.4f}')
print(f'sklearn: y = {model.coef_[0]:.4f}x + {model.intercept_:.4f}')
```

Both methods give identical results (within floating-point precision). The normal equation directly computes the optimal weights in one matrix operation. sklearn internally uses a more numerically stable method (SVD decomposition) but produces the same answer.

### Q19. [Medium] A linear regression model on house prices has coefficients: area=50, bedrooms=100000, intercept=500000. What is the predicted price for a house with area=1200 sqft and 3 bedrooms?

*Hint:* price = 50 * area + 100000 * bedrooms + 500000.

**Answer:** `price = 50 * 1200 + 100000 * 3 + 500000 = 60000 + 300000 + 500000 = 860000`

Multiple linear regression: multiply each feature by its coefficient and add the intercept. The area coefficient of 50 means each additional sqft adds 50 to the price. The bedroom coefficient of 100000 means each additional bedroom adds 1 lakh. The intercept is the base price.

### Q20. [Easy] What is the gradient in gradient descent? What direction does it point?

*Hint:* Think about the direction of steepest change.

**Answer:** The gradient is a vector of partial derivatives of the loss function with respect to each model parameter. It points in the **direction of steepest increase** of the loss function. In gradient descent, we move in the **opposite** direction (steepest decrease) to minimize the loss: w_new = w_old - learning_rate * gradient.

Imagine standing on a hilly landscape where the height represents the loss. The gradient tells you which direction is the steepest uphill. To minimize loss, you walk in the opposite direction (downhill). The learning rate controls how big each step is.

## Mixed Questions

### Q1. [Easy] Write code to compute MSE manually for actual=[10, 20, 30] and predicted=[12, 18, 28] using NumPy.

*Hint:* MSE = np.mean((y_actual - y_predicted) ** 2).

**Answer:** ```
import numpy as np
actual = np.array([10, 20, 30])
predicted = np.array([12, 18, 28])
mse = np.mean((actual - predicted) ** 2)
print(f'MSE: {mse:.4f}')
print(f'RMSE: {np.sqrt(mse):.4f}')
```

Output: MSE: 5.3333, RMSE: 2.3094

Errors: [-2, 2, 2]. Squared: [4, 4, 4]. Mean: 16/3 = 5.333. RMSE = sqrt(5.333) = 2.309. Predictions are off by about 2.3 units on average.

### Q2. [Medium] Kavitha's model has R^2 = 0.95 on training data but R^2 = 0.60 on test data. What is happening and how should she fix it?

*Hint:* Big gap between train and test performance indicates a specific problem.

**Answer:** The model is **overfitting**: it memorized the training data (including noise) instead of learning the general pattern. Fixes: (1) Use more training data. (2) Reduce model complexity (fewer features, lower polynomial degree). (3) Use regularization (Ridge or Lasso regression). (4) Use cross-validation to tune hyperparameters.

Overfitting is when the model fits the training data too closely, capturing noise rather than the true signal. A 35% gap between train R^2 (0.95) and test R^2 (0.60) is a clear indicator. Regularization adds a penalty for large weights, preventing the model from over-relying on any single feature.

### Q3. [Medium] Generate synthetic data y = 5x1 + 2x2 + noise, train a model, and print which feature is more important based on coefficients.

*Hint:* The feature with the larger absolute coefficient is more important (if features are on the same scale).

**Answer:** ```
import numpy as np
from sklearn.linear_model import LinearRegression
np.random.seed(42)
X = np.random.randn(100, 2)
y = 5*X[:, 0] + 2*X[:, 1] + np.random.normal(0, 0.5, 100)
model = LinearRegression()
model.fit(X, y)
for i, coef in enumerate(model.coef_):
    print(f'Feature {i+1}: coefficient = {coef:.4f}')
more_important = 'Feature 1' if abs(model.coef_[0]) > abs(model.coef_[1]) else 'Feature 2'
print(f'More important: {more_important}')
```

Feature 1 has coefficient ~5 and Feature 2 ~2. Since both features are on the same scale (both standard normal), the absolute coefficient size indicates importance. Feature 1 is 2.5x more important. Note: if features have different scales, you must scale them first or use standardized coefficients.

### Q4. [Hard] Write code to plot the learning curve: MSE vs iteration number for gradient descent training. Show how MSE decreases over 200 iterations.

*Hint:* Store MSE at each iteration in a list, then describe the trend.

**Answer:** ```
import numpy as np
np.random.seed(42)
X = np.random.uniform(0, 10, 50)
y = 2*X + 5 + np.random.normal(0, 1, 50)
X_norm = (X - X.mean()) / X.std()
w, b, lr = 0.0, 0.0, 0.1
losses = []
for i in range(200):
    y_pred = w*X_norm + b
    mse = np.mean((y - y_pred)**2)
    losses.append(mse)
    dw = (2/50)*np.sum(X_norm*(y_pred - y))
    db = (2/50)*np.sum(y_pred - y)
    w -= lr * dw
    b -= lr * db
print(f'MSE at step 0: {losses[0]:.2f}')
print(f'MSE at step 10: {losses[10]:.2f}')
print(f'MSE at step 50: {losses[50]:.2f}')
print(f'MSE at step 200: {losses[-1]:.2f}')
print(f'MSE converged: loss barely changes after ~50 iterations')
```

The learning curve shows how MSE decreases during training. It drops quickly at first (big gradient) and then levels off (small gradient, near minimum). If the curve does not decrease, the learning rate is too high. If it decreases very slowly, the learning rate is too low. Monitoring this curve is essential for debugging gradient descent.

### Q5. [Hard] Explain why polynomial regression with degree 20 on 30 data points is a bad idea, even if it gives R^2 = 0.99 on training data.

*Hint:* Think about the number of parameters vs the number of data points.

**Answer:** With degree 20, the model has 21 parameters (coefficients for x^0 through x^20). With only 30 data points, the model has almost as many parameters as data points. It will perfectly fit the training data (memorizing each point) but generalize terribly to new data. This is **severe overfitting**. The R^2 of 0.99 on training data is misleading -- the test R^2 would likely be much lower or even negative. Use cross-validation to choose the right polynomial degree.

A rule of thumb is to have at least 10x more data points than parameters. With 30 data points, a polynomial of degree 2-3 is reasonable (3-4 parameters). Degree 20 is absurd. The model would create wild oscillations between data points (Runge's phenomenon), giving terrible predictions for any new data.

### Q6. [Easy] Write code to access and print the coefficient and intercept of a trained sklearn LinearRegression model.

*Hint:* model.coef_ for weights, model.intercept_ for bias.

**Answer:** ```
from sklearn.linear_model import LinearRegression
import numpy as np
X = np.array([[1], [2], [3], [4]])
y = np.array([10, 20, 30, 40])
model = LinearRegression()
model.fit(X, y)
print(f'Coefficient (slope): {model.coef_[0]}')
print(f'Intercept: {model.intercept_}')
print(f'Equation: y = {model.coef_[0]}x + {model.intercept_}')
```

`coef_` is an array of coefficients (one per feature). For single-feature regression, `coef_[0]` is the slope. `intercept_` is the y-intercept. The equation y = 10x + 0 perfectly captures the relationship in this data.

### Q7. [Medium] Write code to evaluate a linear regression model on test data and print all four metrics: MAE, MSE, RMSE, R-squared.

*Hint:* Use sklearn.metrics functions on y_test and y_pred.

**Answer:** ```
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
np.random.seed(42)
X = np.random.uniform(0, 10, (100, 1))
y = 3*X.squeeze() + 5 + np.random.normal(0, 2, 100)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression().fit(X_tr, y_tr)
y_pred = model.predict(X_te)
print(f'MAE:  {mean_absolute_error(y_te, y_pred):.4f}')
print(f'MSE:  {mean_squared_error(y_te, y_pred):.4f}')
print(f'RMSE: {np.sqrt(mean_squared_error(y_te, y_pred)):.4f}')
print(f'R^2:  {r2_score(y_te, y_pred):.4f}')
```

Always evaluate on test data, not training data. MAE gives the average absolute error (easy to interpret). MSE penalizes large errors. RMSE is in the same units as the target. R-squared tells you the proportion of variance explained. Together, they provide a complete evaluation.

### Q8. [Easy] What does the intercept (b) represent in the equation y = mx + b?

*Hint:* What is y when x = 0?

**Answer:** The intercept **b** is the predicted value of y when all features are 0. In the equation y = 3*experience + 25000, the intercept 25000 represents the predicted salary for someone with 0 years of experience (the starting salary). In some contexts, the intercept may not have a meaningful interpretation (e.g., if x=0 is not realistic).

The intercept shifts the entire line up or down. Without it, the line would always pass through the origin (0, 0), which is usually not correct. For example, house price with 0 sqft area should not be 0 -- the intercept captures the base land value.

## Multiple Choice Questions

### Q1. [Easy] Linear regression is used to predict:

**B is correct.** Linear regression is a regression algorithm that predicts continuous numerical values. For categorical predictions, use classification algorithms like logistic regression or decision trees.

### Q2. [Easy] What is the equation for simple linear regression?

**B is correct.** Simple linear regression fits a straight line y = mx + b, where m is the slope and b is the y-intercept. Option A is quadratic (polynomial), C is exponential, and D is logarithmic.

### Q3. [Easy] What does the slope (m) in y = mx + b represent?

**B is correct.** The slope m represents the rate of change: for every 1 unit increase in x, y changes by m units. If m = 3, each unit of x adds 3 to y. Option A describes the intercept b.

### Q4. [Medium] Which cost function does linear regression minimize?

**C is correct.** Linear regression minimizes MSE (Mean Squared Error). Cross-entropy is for classification. MAE could be used but MSE is standard because it is differentiable everywhere and has a unique minimum. Accuracy is a classification metric.

### Q5. [Medium] What does R-squared = 0 mean?

**B is correct.** R^2 = 0 means the model explains none of the variance in y -- it performs equally to simply predicting the mean for every sample. R^2 = 1 means perfect. R^2 can be negative for very bad models (worse than predicting the mean).

### Q6. [Medium] In gradient descent, what happens if the learning rate is too small?

**B is correct.** A very small learning rate means tiny steps toward the minimum. The model will eventually converge to the correct answer but may take thousands or millions of iterations. Too large a learning rate causes divergence (option A).

### Q7. [Medium] What is the purpose of the .reshape(-1, 1) operation before fitting sklearn models?

**B is correct.** sklearn requires feature data (X) to be 2D: (n_samples, n_features). A 1D array has shape (n,) which sklearn cannot interpret. reshape(-1, 1) converts it to (n, 1), meaning n samples with 1 feature.

### Q8. [Hard] What is multicollinearity and why is it a problem for linear regression?

**B is correct.** Multicollinearity occurs when features are highly correlated (e.g., area_sqft and area_sqm). This makes individual coefficients unreliable (they can flip signs or have huge values) because the model cannot determine each feature's individual contribution. Fix: remove one of the correlated features or use Ridge regression.

### Q9. [Hard] A model has MAE = 5 and RMSE = 10. What does the large gap between them suggest?

**B is correct.** RMSE penalizes large errors more (squaring). If RMSE >> MAE, some predictions have very large errors that inflate RMSE but barely affect MAE. For example, most errors might be 3-5, but a few are 20-30. Those outlier errors contribute 400-900 to MSE (before averaging) but only 20-30 to MAE.

### Q10. [Hard] What is the normal equation in linear regression?

**B is correct.** The normal equation w = (X^T X)^(-1) X^T y directly computes the optimal weights without iteration. It gives the exact solution to the least squares problem. Option D is the gradient descent update rule (iterative). Option C is the MSE formula.

### Q11. [Easy] What does model.predict(X) return in sklearn?

**B is correct.** `predict(X)` takes feature data and returns the model's predictions. For linear regression, it computes X @ coef_ + intercept_ for each sample.

### Q12. [Medium] PolynomialFeatures(degree=3) transforms the feature x into:

**B is correct.** PolynomialFeatures(degree=3) creates [1, x, x^2, x^3] (including the bias term 1 and all powers up to 3). This allows linear regression to fit cubic curves while remaining linear in its parameters.

### Q13. [Hard] Which of the following is NOT an assumption of linear regression?

**C is correct (it is NOT an assumption).** Linear regression does not require features to be on the same scale -- the normal equation and sklearn handle different scales fine. However, scaling IS needed if you use gradient descent. The actual assumptions are: linearity (A), normal residuals (B), and no multicollinearity (D).

### Q14. [Medium] If the coefficient for 'bedrooms' in a house price model is 150000, what does it mean?

**B is correct.** In multiple regression, each coefficient represents the change in the predicted target for a one-unit increase in that feature, **while holding all other features constant**. So each additional bedroom adds 150000 to the predicted price, assuming area, location, etc. remain the same.

### Q15. [Hard] What is the gradient of MSE with respect to weight w for simple linear regression y = wx + b?

**A is correct.** The partial derivative of MSE with respect to w is (2/n) * sum(x_i * (y_pred_i - y_i)). This tells us how the loss changes when we adjust w. Option B is the gradient with respect to b (the bias). These gradients are used in gradient descent to update w and b.

## Coding Challenges

### Challenge 1. Linear Regression from Scratch

**Difficulty:** Hard

Implement a LinearRegressionGD class with fit(X, y) and predict(X) methods using gradient descent. It should store the loss history. Train it on y = 4x + 10 + noise data (100 points). Print the learned equation and final MSE. Compare with sklearn.

**Constraints:**

- Normalize X before training. Use learning_rate=0.1, iterations=500.

**Sample input:**

```
100 data points from y = 4x + 10 + noise
```

**Sample output:**

```
Scratch: y = 3.98x + 10.12, MSE = 4.23
sklearn: y = 3.98x + 10.12
```

**Solution:**

```ai-and-machine-learning
import numpy as np
from sklearn.linear_model import LinearRegression

class LinearRegressionGD:
    def __init__(self, lr=0.1, n_iter=500):
        self.lr = lr
        self.n_iter = n_iter
        self.losses = []
    def fit(self, X, y):
        n = len(X)
        self.w = np.zeros(X.shape[1])
        self.b = 0.0
        for _ in range(self.n_iter):
            y_pred = X @ self.w + self.b
            self.losses.append(np.mean((y - y_pred)**2))
            self.w -= self.lr * (1/n) * X.T @ (y_pred - y)
            self.b -= self.lr * (1/n) * np.sum(y_pred - y)
    def predict(self, X): return X @ self.w + self.b

np.random.seed(42)
x = np.random.uniform(0, 10, 100)
y = 4*x + 10 + np.random.normal(0, 2, 100)
X = ((x - x.mean()) / x.std()).reshape(-1, 1)

my_model = LinearRegressionGD()
my_model.fit(X, y)
print(f'Scratch: w={my_model.w[0]:.4f}, b={my_model.b:.4f}, MSE={my_model.losses[-1]:.4f}')

sk_model = LinearRegression().fit(X, y)
print(f'sklearn: w={sk_model.coef_[0]:.4f}, b={sk_model.intercept_:.4f}')
```

### Challenge 2. House Price Predictor

**Difficulty:** Medium

Create a synthetic house price dataset with features: area (500-3000), bedrooms (1-5), age (0-30), distance_to_city (1-25). Price = 20 + 0.03*area + 8*bedrooms - 0.5*age + noise. Train a model, evaluate it, and predict price for a specific house.

**Constraints:**

- Use StandardScaler. Print feature coefficients.

**Sample input:**

```
200 synthetic houses
```

**Sample output:**

```
Model equation, R-squared, RMSE, and prediction for [1500, 3, 5, 10]
```

**Solution:**

```ai-and-machine-learning
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import r2_score, mean_squared_error

np.random.seed(42)
n = 200
df = pd.DataFrame({'Area': np.random.uniform(500, 3000, n).round(0), 'Beds': np.random.randint(1, 6, n), 'Age': np.random.randint(0, 30, n), 'Distance': np.random.uniform(1, 25, n).round(1)})
df['Price'] = (20 + 0.03*df['Area'] + 8*df['Beds'] - 0.5*df['Age'] + np.random.normal(0, 5, n)).round(2)

X = df.drop('Price', axis=1)
y = df['Price']
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_tr_s = scaler.fit_transform(X_tr)
X_te_s = scaler.transform(X_te)

model = LinearRegression().fit(X_tr_s, y_tr)
y_pred = model.predict(X_te_s)
print(f'R^2: {r2_score(y_te, y_pred):.4f}')
print(f'RMSE: {np.sqrt(mean_squared_error(y_te, y_pred)):.2f}')
for feat, coef in zip(X.columns, model.coef_):
    print(f'{feat}: {coef:.4f}')
new = scaler.transform([[1500, 3, 5, 10]])
print(f'Prediction for [1500, 3, 5, 10]: {model.predict(new)[0]:.2f}')
```

### Challenge 3. Model Comparison: Linear vs Polynomial

**Difficulty:** Medium

Generate non-linear data: y = 0.5*x^2 - 2*x + 10 + noise. Train linear (degree 1), quadratic (degree 2), and cubic (degree 3) models. Print R-squared for each on test data. Determine the best degree.

**Constraints:**

- Split 80/20. Use random_state=42.

**Sample input:**

```
80 data points from y = 0.5x^2 - 2x + 10 + noise
```

**Sample output:**

```
Degree 1 R^2: 0.35, Degree 2 R^2: 0.95, Degree 3 R^2: 0.95
```

**Solution:**

```ai-and-machine-learning
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

np.random.seed(42)
X = np.random.uniform(-5, 5, 80).reshape(-1, 1)
y = 0.5*X.squeeze()**2 - 2*X.squeeze() + 10 + np.random.normal(0, 2, 80)
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)

best_r2, best_deg = -1, 0
for deg in [1, 2, 3]:
    poly = PolynomialFeatures(degree=deg)
    X_tr_p = poly.fit_transform(X_tr)
    X_te_p = poly.transform(X_te)
    model = LinearRegression().fit(X_tr_p, y_tr)
    r2 = r2_score(y_te, model.predict(X_te_p))
    print(f'Degree {deg}: R^2 = {r2:.4f}')
    if r2 > best_r2: best_r2, best_deg = r2, deg
print(f'Best: degree {best_deg} (R^2 = {best_r2:.4f}')
```

### Challenge 4. Salary Prediction with Feature Analysis

**Difficulty:** Easy

Create a dataset mapping years of experience to salary. Train a linear regression model. Print the equation, evaluate with all 4 metrics, and predict salaries for 0, 5, 10, 15, and 20 years experience.

**Constraints:**

- Use meaningful salary values (e.g., 25-130K range).

**Sample input:**

```
experience = [1,2,3,4,5,6,8,10,12,15], salary in thousands
```

**Sample output:**

```
Equation, metrics, prediction table
```

**Solution:**

```ai-and-machine-learning
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

np.random.seed(42)
exp = np.array([1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 1.5, 3.5, 7, 9, 11, 14, 4.5, 6.5, 8.5, 13]).reshape(-1, 1)
sal = 25 + 7*exp.squeeze() + np.random.normal(0, 3, 20)

X_tr, X_te, y_tr, y_te = train_test_split(exp, sal, test_size=0.2, random_state=42)
model = LinearRegression().fit(X_tr, y_tr)
y_pred = model.predict(X_te)

print(f'Equation: salary = {model.coef_[0]:.2f} * experience + {model.intercept_:.2f}')
print(f'MAE: {mean_absolute_error(y_te, y_pred):.2f}K')
print(f'RMSE: {np.sqrt(mean_squared_error(y_te, y_pred)):.2f}K')
print(f'R^2: {r2_score(y_te, y_pred):.4f}')
print('\nPredictions:')
for yr in [0, 5, 10, 15, 20]:
    print(f'  {yr} years -> {model.predict([[yr]])[0]:.1f}K')
```

### Challenge 5. Learning Rate Experiment

**Difficulty:** Hard

Implement gradient descent for linear regression and test 5 different learning rates: 0.001, 0.01, 0.05, 0.1, 0.5. For each, run 200 iterations and report: final MSE, whether it converged, and the number of iterations to reach MSE < 5.

**Constraints:**

- Normalize features. Use random_state=42.

**Sample input:**

```
50 data points from y = 3x + 10 + noise
```

**Sample output:**

```
Table comparing all 5 learning rates
```

**Solution:**

```ai-and-machine-learning
import numpy as np

np.random.seed(42)
X = np.random.uniform(0, 10, 50)
y = 3*X + 10 + np.random.normal(0, 2, 50)
X_norm = (X - X.mean()) / X.std()

print(f'{"LR":<8}{"Final MSE":<12}{"Converged":<12}{"Steps to MSE<5"}')
print('-' * 44)
for lr in [0.001, 0.01, 0.05, 0.1, 0.5]:
    w, b = 0.0, 0.0
    steps_to_5 = 'N/A'
    for i in range(200):
        y_pred = w*X_norm + b
        mse = np.mean((y - y_pred)**2)
        if mse < 5 and steps_to_5 == 'N/A':
            steps_to_5 = str(i)
        dw = (2/50)*np.sum(X_norm*(y_pred-y))
        db = (2/50)*np.sum(y_pred-y)
        w -= lr*dw
        b -= lr*db
    final_mse = np.mean((y-(w*X_norm+b))**2)
    converged = 'Yes' if final_mse < 10 else 'No'
    print(f'{lr:<8}{final_mse:<12.4f}{converged:<12}{steps_to_5}')
```

### Challenge 6. End-to-End ML Pipeline: Student Score Predictor

**Difficulty:** Hard

Build a complete ML pipeline: (1) Generate data with 3 features (hours_studied, attendance, previous_score) and target (final_score). (2) Perform EDA (describe, correlations). (3) Preprocess (handle missing values, scale). (4) Train-test split. (5) Train LinearRegression. (6) Evaluate with all metrics. (7) Predict for a new student.

**Constraints:**

- Include missing value handling and feature scaling.

**Sample input:**

```
150 synthetic student records with some missing values
```

**Sample output:**

```
Complete pipeline output: EDA, training, evaluation, prediction
```

**Solution:**

```ai-and-machine-learning
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

np.random.seed(42)
n = 150
df = pd.DataFrame({
    'Hours': np.random.uniform(1, 10, n).round(1),
    'Attendance': np.random.uniform(40, 100, n).round(1),
    'Prev_Score': np.random.uniform(30, 90, n).round(1)
})
df['Final'] = (10 + 5*df['Hours'] + 0.3*df['Attendance'] + 0.4*df['Prev_Score'] + np.random.normal(0, 5, n)).round(1).clip(0, 100)
df.loc[np.random.choice(n, 10), 'Hours'] = np.nan
df.loc[np.random.choice(n, 5), 'Attendance'] = np.nan

print('=== EDA ===')
print(f'Shape: {df.shape}')
print(f'Missing: {df.isnull().sum().to_dict()}')
print(f'Correlations with Final:')
print(df.corr()['Final'].drop('Final').round(3))

df['Hours'] = df['Hours'].fillna(df['Hours'].median())
df['Attendance'] = df['Attendance'].fillna(df['Attendance'].median())

X = df.drop('Final', axis=1)
y = df['Final']
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_tr_s = scaler.fit_transform(X_tr)
X_te_s = scaler.transform(X_te)

model = LinearRegression().fit(X_tr_s, y_tr)
y_pred = model.predict(X_te_s)

print(f'\n=== Evaluation ===')
print(f'MAE: {mean_absolute_error(y_te, y_pred):.2f}')
print(f'RMSE: {np.sqrt(mean_squared_error(y_te, y_pred)):.2f}')
print(f'R^2: {r2_score(y_te, y_pred):.4f}')

for feat, coef in zip(X.columns, model.coef_):
    print(f'{feat}: {coef:.4f}')

new_student = scaler.transform([[6, 85, 70]])
print(f'\nNew student (6hrs, 85% att, 70 prev): {model.predict(new_student)[0]:.1f}')
```

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/linear-regression/*
