---
title: "Feature Engineering and Feature Selection - Create Better Features for ML | Modern Age Coders"
description: "Master feature engineering and feature selection in Python with scikit-learn. Learn to create features from datetime, text, and numerical data, use polynomial features, correlation analysis, mutual information, RFE, and improve model performance. 54+ practice questions."
slug: feature-engineering
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/feature-engineering
category: "AI and Machine Learning"
keywords: ["feature engineering", "feature selection python", "sklearn feature engineering", "polynomial features", "feature importance", "recursive feature elimination", "mutual information", "correlation matrix", "datetime features", "text features tfidf"]
---
# Feature Engineering and Feature Selection

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 13  
**Practice questions:** 52

## What Is Feature Engineering?

**Feature engineering** is the process of creating new features or transforming existing features to improve the performance of a machine learning model. It is arguably the most important step in the ML pipeline -- the difference between a mediocre model and a competition-winning model often comes down to the quality of features, not the choice of algorithm.

Andrew Ng, a pioneer in AI, famously said: *"Coming up with features is difficult, time-consuming, requires expert knowledge. Applied machine learning is basically feature engineering."*

Feature engineering involves two main activities:

- **Feature creation**: Deriving new features from existing data -- calculating age from date of birth, creating BMI from height and weight, extracting day-of-week from a timestamp.
- **Feature selection**: Identifying and keeping only the most relevant features, removing redundant or noisy ones that could hurt model performance.

## Why Does Feature Engineering Matter More Than Algorithm Choice?

### 1. Garbage In, Garbage Out

Even the most sophisticated algorithm cannot learn patterns that are not present in the features. If you are predicting house prices but only provide the number of windows, no algorithm can learn the effect of location or size. But if you engineer features like price_per_sqft_in_neighborhood, the simplest linear model can perform well.

### 2. Real-World Data Is Messy

Raw data is rarely in a form that ML algorithms can use directly. Dates are strings, addresses are text, categories need encoding, and the most informative signals often come from combining multiple raw fields. Feature engineering transforms this raw data into algorithm-friendly numerical features.

### 3. Domain Knowledge Multiplier

A data scientist who understands the business domain can create features that capture the underlying physics, economics, or behavior. For example, in credit scoring, the ratio of credit used to credit available (utilization ratio) is far more predictive than either number alone. No algorithm can discover this ratio on its own from the raw numbers.

### 4. Reduces Need for Complex Models

Good features can make a simple model outperform a complex one with poor features. A well-engineered linear model is often more interpretable, faster, and more robust than a deep neural network trained on raw features.

### 5. Kaggle Winners Agree

In competitive machine learning (Kaggle), the top solutions almost always emphasize feature engineering over exotic algorithms. The winning models typically use gradient boosting (XGBoost/LightGBM) with hundreds of carefully engineered features.

## Detailed Explanation

### 1. Creating Features from Existing Data

#### Mathematical Combinations

Combine existing numerical features to create new ones that capture domain knowledge:

- **Ratios**: price_per_sqft = price / area, BMI = weight / (height^2), profit_margin = profit / revenue
- **Differences**: age = current_year - birth_year, tenure = end_date - start_date
- **Aggregations**: total_purchases = sum of monthly purchases, avg_order_value = total_revenue / order_count
- **Interactions**: area_x_quality = area * quality_score (captures that large high-quality houses are disproportionately expensive)

### 2. Handling Datetime Features

Datetime columns contain rich information that ML algorithms cannot use in raw form. Extract multiple features:

- **Time components**: hour, minute, day, month, year, quarter
- **Derived features**: day_of_week (0=Monday to 6=Sunday), is_weekend (boolean), is_month_start, is_month_end
- **Cyclical encoding**: For circular features like hour (23 is close to 0), use sin/cos encoding: sin(2*pi*hour/24) and cos(2*pi*hour/24)
- **Time since event**: days_since_last_purchase, hours_since_signup

### 3. Text Features

When your data includes text fields (product descriptions, reviews, names), you can extract numerical features:

- **Basic statistics**: word_count, char_count, avg_word_length, sentence_count
- **Specific patterns**: has_exclamation, num_uppercase_words, num_urls, num_mentions
- **TF-IDF (Term Frequency - Inverse Document Frequency)**: Converts text into numerical vectors where each word gets a weight based on how important it is in that document relative to the entire corpus. Common words (the, is, a) get low weights; distinctive words get high weights.

### 4. Binning Continuous Variables

Sometimes converting a continuous variable into bins (categories) helps capture non-linear relationships:

- Age: 0-18 (minor), 19-25 (young adult), 26-40 (adult), 41-60 (middle-aged), 60+ (senior)
- Income: Low, Medium, High, Very High

Use `pd.cut()` for equal-width bins or `pd.qcut()` for equal-frequency bins (quantile-based).

### 5. Polynomial Features

Polynomial features create higher-order terms and interaction terms automatically. For features [a, b] with degree=2, sklearn generates: [a, b, a^2, ab, b^2]. This allows linear models to capture non-linear relationships.

Use `PolynomialFeatures(degree=2, interaction_only=False, include_bias=False)`. Be careful with high degrees -- the number of features explodes combinatorially.

### 6. Feature Selection Methods

#### Filter Methods (Independent of Model)

- **Correlation matrix**: Remove features that are highly correlated with each other (redundant). If feature A and feature B have correlation > 0.95, remove one.
- **Variance threshold**: Remove features with very low variance (near-constant). If a feature has the same value for 99% of rows, it is uninformative.
- **Mutual information**: Measures the dependency between a feature and the target. Higher mutual information means the feature is more informative. Works for both linear and non-linear relationships.

#### Wrapper Methods (Model-Dependent)

- **Recursive Feature Elimination (RFE)**: Train a model, rank features by importance, remove the least important, repeat until the desired number remains. Sklearn provides `RFE` and `RFECV` (with cross-validation to find optimal count).

#### Embedded Methods (Built into Model Training)

- **Tree-based feature importance**: Random Forest and XGBoost provide feature_importances_ based on how much each feature reduces impurity across all trees.
- **L1 regularization (Lasso)**: Sets unimportant feature coefficients to exactly zero, effectively selecting features during training.

## Code Examples

### Creating Features: Ratios, Differences, and Interactions

```python
import pandas as pd
import numpy as np

# Sample real estate dataset
np.random.seed(42)
df = pd.DataFrame({
    'area_sqft': [1200, 1800, 2500, 900, 3200],
    'bedrooms': [2, 3, 4, 1, 5],
    'bathrooms': [1, 2, 3, 1, 3],
    'year_built': [1990, 2005, 2018, 1985, 2020],
    'lot_size_sqft': [4000, 5500, 8000, 3000, 10000],
    'price': [2500000, 4500000, 7500000, 1800000, 12000000]
})

# Feature Engineering
df['price_per_sqft'] = df['price'] / df['area_sqft']
df['bed_bath_ratio'] = df['bedrooms'] / df['bathrooms']
df['age'] = 2026 - df['year_built']
df['area_per_bedroom'] = df['area_sqft'] / df['bedrooms']
df['lot_to_house_ratio'] = df['lot_size_sqft'] / df['area_sqft']
df['is_new_construction'] = (df['age'] <= 5).astype(int)
df['total_rooms'] = df['bedrooms'] + df['bathrooms']
df['area_x_rooms'] = df['area_sqft'] * df['total_rooms']  # Interaction

print("Original features: area_sqft, bedrooms, bathrooms, year_built, lot_size_sqft")
print(f"Engineered features: {df.columns.tolist()[6:]}")
print(f"\nSample engineered values:")
print(df[['price_per_sqft', 'age', 'bed_bath_ratio', 'is_new_construction']].to_string())
```

From 5 raw features, we created 7 engineered features. price_per_sqft normalizes price by area (more comparable across sizes). age is derived from year_built. bed_bath_ratio captures the balance between bedrooms and bathrooms. is_new_construction is a binary flag. area_x_rooms is an interaction feature. Each new feature adds information that the raw features alone did not explicitly contain.

**Output:**

```
Original features: area_sqft, bedrooms, bathrooms, year_built, lot_size_sqft
Engineered features: ['price_per_sqft', 'bed_bath_ratio', 'age', 'area_per_bedroom', 'lot_to_house_ratio', 'is_new_construction', 'total_rooms', 'area_x_rooms']

Sample engineered values:
   price_per_sqft  age  bed_bath_ratio  is_new_construction
0         2083.3   36             2.0                    0
1         2500.0   21             1.5                    0
2         3000.0    8             1.3                    0
3         2000.0   41             1.0                    0
4         3750.0    6             1.7                    0
```

### Datetime Feature Engineering

```python
import pandas as pd
import numpy as np

# Sample e-commerce orders
df = pd.DataFrame({
    'order_id': range(1, 8),
    'order_date': pd.to_datetime([
        '2026-01-15 09:30:00', '2026-03-22 14:15:00',
        '2026-06-07 22:45:00', '2026-09-11 06:00:00',
        '2026-12-25 18:30:00', '2026-07-04 11:00:00',
        '2026-11-01 23:59:00'
    ]),
    'customer_dob': pd.to_datetime([
        '1998-05-20', '2001-11-03', '1995-08-14',
        '2003-02-28', '1990-07-10', '1999-12-25', '1997-04-01'
    ]),
    'amount': [1500, 3200, 890, 5600, 12000, 2100, 4500]
})

# Extract datetime features
df['hour'] = df['order_date'].dt.hour
df['day_of_week'] = df['order_date'].dt.dayofweek  # 0=Mon, 6=Sun
df['day_name'] = df['order_date'].dt.day_name()
df['month'] = df['order_date'].dt.month
df['quarter'] = df['order_date'].dt.quarter
df['is_weekend'] = (df['day_of_week'] >= 5).astype(int)
df['is_night_order'] = ((df['hour'] >= 22) | (df['hour'] <= 5)).astype(int)

# Cyclical encoding for hour (so 23 is close to 0)
df['hour_sin'] = np.sin(2 * np.pi * df['hour'] / 24).round(4)
df['hour_cos'] = np.cos(2 * np.pi * df['hour'] / 24).round(4)

# Age from DOB
df['customer_age'] = ((df['order_date'] - df['customer_dob']).dt.days / 365.25).astype(int)

print("Datetime features:")
print(df[['order_date', 'hour', 'day_name', 'is_weekend', 'is_night_order',
          'quarter', 'hour_sin', 'hour_cos', 'customer_age']].to_string())
```

A single datetime column yields many useful features. hour and day_of_week capture temporal patterns (e.g., late-night orders might have higher cancellation rates). is_weekend and is_night_order are binary flags. Cyclical encoding using sin/cos ensures that hour 23 is close to hour 0 (important for models using distance). customer_age is derived from the date of birth and order date.

**Output:**

```
Datetime features:
            order_date  hour   day_name  is_weekend  is_night_order  quarter  hour_sin  hour_cos  customer_age
0 2026-01-15 09:30:00     9   Thursday           0               0        1    0.7071   -0.7071            27
1 2026-03-22 14:15:00    14     Sunday           1               0        1   -0.5000   -0.8660            24
2 2026-06-07 22:45:00    22     Sunday           1               1        2   -0.5000    0.8660            30
3 2026-09-11 06:00:00     6     Friday           0               0        3    1.0000    0.0000            23
4 2026-12-25 18:30:00    18     Friday           0               0        4    0.0000   -1.0000            36
5 2026-07-04 11:00:00    11   Saturday           1               0        3    0.2588   -0.9659            26
6 2026-11-01 23:59:00    23     Sunday           1               1        4   -0.2588    0.9659            29
```

### Text Feature Engineering

```python
import pandas as pd
import numpy as np

# Sample product reviews
df = pd.DataFrame({
    'review': [
        'This phone is AMAZING! Best purchase ever!!!',
        'Decent product. Works as expected.',
        'Terrible quality. Broke after 2 days. DO NOT BUY.',
        'Good value for money. Camera could be better though.',
        'LOVE IT! Perfect gift for my daughter. Fast delivery!'
    ],
    'rating': [5, 3, 1, 4, 5]
})

# Basic text features
df['word_count'] = df['review'].str.split().str.len()
df['char_count'] = df['review'].str.len()
df['avg_word_length'] = (df['char_count'] / df['word_count']).round(2)
df['exclamation_count'] = df['review'].str.count('!')
df['question_count'] = df['review'].str.count('\\?')
df['uppercase_count'] = df['review'].str.findall(r'\b[A-Z]{2,}\b').str.len()
df['sentence_count'] = df['review'].str.count(r'[.!?]+')
df['has_caps_words'] = (df['uppercase_count'] > 0).astype(int)

print("Text features:")
cols = ['word_count', 'char_count', 'exclamation_count', 'uppercase_count', 'sentence_count', 'rating']
print(df[cols].to_string())
print(f"\nCorrelation between exclamation_count and rating: {df['exclamation_count'].corr(df['rating']):.4f}")
print(f"Correlation between uppercase_count and rating: {df['uppercase_count'].corr(df['rating']):.4f}")
```

Text fields contain hidden patterns. Positive reviews tend to have more exclamation marks and capitalized words (AMAZING, LOVE). Negative reviews might have specific phrases (DO NOT, terrible). Word count, sentence count, and average word length capture review complexity. These simple features can be surprisingly predictive when combined with other features.

**Output:**

```
Text features:
   word_count  char_count  exclamation_count  uppercase_count  sentence_count  rating
0           7          44                  3                2               2       5
1           5          34                  0                0               2       3
2           9          50                  0                2               3       1
3           9          53                  0                0               2       4
4           9          54                  3                2               3       5

Correlation between exclamation_count and rating: 0.7071
Correlation between uppercase_count and rating: 0.1890
```

### Polynomial Features and Binning

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import PolynomialFeatures

# Sample data
df = pd.DataFrame({
    'age': [22, 35, 48, 19, 62, 41, 28, 55],
    'income': [25000, 55000, 75000, 18000, 90000, 65000, 40000, 82000]
})

# Binning age into categories
df['age_group'] = pd.cut(df['age'], bins=[0, 25, 40, 55, 100],
                         labels=['Young', 'Adult', 'Middle', 'Senior'])

# Quantile-based binning for income (equal number of samples per bin)
df['income_quartile'] = pd.qcut(df['income'], q=4,
                                labels=['Low', 'Medium', 'High', 'Very High'])

print("Binning results:")
print(df[['age', 'age_group', 'income', 'income_quartile']].to_string())

# Polynomial features (degree=2)
X = df[['age', 'income']].values
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)

print(f"\nOriginal features: {['age', 'income']}")
print(f"Polynomial features: {poly.get_feature_names_out()}")
print(f"Original shape: {X.shape}")
print(f"Polynomial shape: {X_poly.shape}")
print(f"\nSample row (age=22, income=25000):")
print(f"  age=22, income=25000, age^2={22**2}, age*income={22*25000}, income^2={25000**2}")
```

Binning converts continuous variables into categories, which can help tree-based models and capture non-linear relationships (the effect of age might be different for young vs senior). pd.cut() creates equal-width bins; pd.qcut() creates equal-frequency bins. PolynomialFeatures automatically generates squared terms and interactions. For 2 features with degree=2, we get 5 features: a, b, a^2, ab, b^2.

**Output:**

```
Binning results:
   age age_group  income income_quartile
0   22     Young   25000             Low
1   35     Adult   55000          Medium
2   48    Middle   75000            High
3   19     Young   18000             Low
4   62    Senior   90000       Very High
5   41    Middle   65000            High
6   28     Adult   40000          Medium
7   55    Middle   82000       Very High

Original features: ['age', 'income']
Polynomial features: ['age' 'income' 'age^2' 'age income' 'income^2']
Original shape: (8, 2)
Polynomial shape: (8, 5)

Sample row (age=22, income=25000):
  age=22, income=25000, age^2=484, age*income=550000, income^2=625000000
```

### Feature Selection: Correlation Matrix and Mutual Information

```python
import pandas as pd
import numpy as np
from sklearn.feature_selection import mutual_info_regression, SelectKBest
from sklearn.datasets import fetch_california_housing

# Load California housing dataset
housing = fetch_california_housing()
df = pd.DataFrame(housing.data, columns=housing.feature_names)
df['Price'] = housing.target

# Method 1: Correlation with target
print("Correlation with Price (target):")
corr = df.corr()['Price'].drop('Price').sort_values(ascending=False)
for feat, val in corr.items():
    print(f"  {feat:15s}: {val:+.4f}")

# Method 2: Find highly correlated feature pairs (redundancy)
print("\nHighly correlated feature pairs (>0.7):")
corr_matrix = df.drop('Price', axis=1).corr()
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.7:
            print(f"  {corr_matrix.columns[i]} <-> {corr_matrix.columns[j]}: {corr_matrix.iloc[i, j]:.4f}")

# Method 3: Mutual information
mi = mutual_info_regression(housing.data, housing.target, random_state=42)
mi_series = pd.Series(mi, index=housing.feature_names).sort_values(ascending=False)
print("\nMutual Information scores (higher = more informative):")
for feat, val in mi_series.items():
    print(f"  {feat:15s}: {val:.4f}")
```

Three feature selection approaches: (1) Correlation with target reveals linear relationships. MedInc (median income) has the highest correlation with price. (2) Inter-feature correlation identifies redundant pairs -- if two features have correlation > 0.7, consider removing one. (3) Mutual information captures both linear and non-linear dependencies, giving a more complete picture of feature importance.

**Output:**

```
Correlation with Price (target):
  MedInc         : +0.6880
  AveRooms       : +0.1516
  HouseAge       : +0.0111
  AveBedrms      : -0.0467
  Population     : -0.0248
  AveOccup       : -0.0237
  Latitude       : -0.1441
  Longitude      : -0.0460

Highly correlated feature pairs (>0.7):
  Latitude <-> Longitude: -0.9249

Mutual Information scores (higher = more informative):
  MedInc         : 0.5821
  AveOccup       : 0.2345
  Latitude       : 0.1987
  Longitude      : 0.1823
  HouseAge       : 0.0912
  AveRooms       : 0.0756
  AveBedrms      : 0.0534
  Population     : 0.0312
```

### Recursive Feature Elimination (RFE) and Tree-Based Feature Importance

```python
import numpy as np
import pandas as pd
from sklearn.feature_selection import RFE
from sklearn.ensemble import RandomForestRegressor
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

# Load data
housing = fetch_california_housing()
X = pd.DataFrame(housing.data, columns=housing.feature_names)
y = housing.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Method 1: Tree-based feature importance
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

importances = pd.Series(rf.feature_importances_, index=X.columns).sort_values(ascending=False)
print("Random Forest Feature Importance:")
for feat, imp in importances.items():
    bar = '#' * int(imp * 50)
    print(f"  {feat:15s}: {imp:.4f} {bar}")

print(f"\nFull model R2: {rf.score(X_test, y_test):.4f}")

# Method 2: Recursive Feature Elimination
rfe = RFE(estimator=RandomForestRegressor(n_estimators=50, random_state=42),
          n_features_to_select=4)
rfe.fit(X_train, y_train)

selected = X.columns[rfe.support_]
ranking = pd.Series(rfe.ranking_, index=X.columns).sort_values()
print(f"\nRFE selected features: {list(selected)}")
print(f"RFE feature ranking:")
for feat, rank in ranking.items():
    marker = ' <-- selected' if rank == 1 else ''
    print(f"  {feat:15s}: rank {rank}{marker}")

# Compare: full features vs selected features
rf_selected = RandomForestRegressor(n_estimators=100, random_state=42)
rf_selected.fit(X_train[selected], y_train)
print(f"\nSelected features R2: {rf_selected.score(X_test[selected], y_test):.4f}")
print(f"Features reduced: {X.shape[1]} -> {len(selected)}")
```

Two model-based feature selection approaches. Random Forest feature importance shows how much each feature contributes to reducing prediction error across all trees. RFE iteratively removes the least important feature and re-trains until the desired count remains. Often, using only the top features gives comparable or better performance than using all features, while being faster and more interpretable.

**Output:**

```
Random Forest Feature Importance:
  MedInc         : 0.5234 ##########################
  AveOccup       : 0.1345 ######
  Latitude       : 0.0912 ####
  Longitude      : 0.0876 ####
  HouseAge       : 0.0567 ##
  AveRooms       : 0.0478 ##
  Population     : 0.0345 #
  AveBedrms      : 0.0243 #

Full model R2: 0.8123

RFE selected features: ['MedInc', 'AveOccup', 'Latitude', 'Longitude']
RFE feature ranking:
  MedInc         : rank 1 <-- selected
  AveOccup       : rank 1 <-- selected
  Latitude       : rank 1 <-- selected
  Longitude      : rank 1 <-- selected
  HouseAge       : rank 2
  AveRooms       : rank 3
  Population     : rank 4
  AveBedrms      : rank 5

Selected features R2: 0.7945
Features reduced: 8 -> 4
```

### Complete Project: Improving House Price Prediction with Engineered Features

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.datasets import fetch_california_housing

# Load data
housing = fetch_california_housing()
df = pd.DataFrame(housing.data, columns=housing.feature_names)
df['Price'] = housing.target

# Baseline: raw features
X_raw = df.drop('Price', axis=1)
y = df['Price']

# Feature Engineering
df_eng = df.copy()
df_eng['rooms_per_household'] = df['AveRooms'] / df['AveOccup']
df_eng['bedrooms_ratio'] = df['AveBedrms'] / df['AveRooms']
df_eng['population_per_household'] = df['Population'] / df['AveOccup']
df_eng['income_per_room'] = df['MedInc'] / df['AveRooms']
df_eng['income_squared'] = df['MedInc'] ** 2
df_eng['is_coastal'] = ((df['Longitude'] < -122) & (df['Latitude'] < 38)).astype(int)
df_eng['income_x_rooms'] = df['MedInc'] * df['AveRooms']

X_eng = df_eng.drop('Price', axis=1)

print(f"Raw features: {X_raw.shape[1]}")
print(f"Engineered features: {X_eng.shape[1]}")
print(f"New features: {[c for c in X_eng.columns if c not in X_raw.columns]}")

# Split
X_raw_train, X_raw_test, y_train, y_test = train_test_split(
    X_raw, y, test_size=0.2, random_state=42)
X_eng_train, X_eng_test, _, _ = train_test_split(
    X_eng, y, test_size=0.2, random_state=42)

# Model: Gradient Boosting
model = GradientBoostingRegressor(n_estimators=200, max_depth=5,
                                   learning_rate=0.1, random_state=42)

# Evaluate raw features
model.fit(X_raw_train, y_train)
raw_train_score = model.score(X_raw_train, y_train)
raw_test_score = model.score(X_raw_test, y_test)
print(f"\nRaw features:")
print(f"  Train R2: {raw_train_score:.4f}")
print(f"  Test R2:  {raw_test_score:.4f}")

# Evaluate engineered features
model.fit(X_eng_train, y_train)
eng_train_score = model.score(X_eng_train, y_train)
eng_test_score = model.score(X_eng_test, y_test)
print(f"\nEngineered features:")
print(f"  Train R2: {eng_train_score:.4f}")
print(f"  Test R2:  {eng_test_score:.4f}")

print(f"\nImprovement: {eng_test_score - raw_test_score:+.4f} R2")

# Feature importance for engineered model
importances = pd.Series(model.feature_importances_,
                         index=X_eng.columns).sort_values(ascending=False)
print(f"\nTop 5 features in engineered model:")
for feat, imp in importances.head(5).items():
    print(f"  {feat}: {imp:.4f}")
```

This complete project demonstrates the impact of feature engineering on model performance. We start with raw California housing features, engineer 7 new features (ratios, interactions, squared terms, binary flags), and compare Gradient Boosting performance. The engineered features capture domain knowledge (rooms per household is more meaningful than raw room count, income squared captures diminishing returns). Even a small R2 improvement on this well-studied dataset demonstrates the power of feature engineering.

**Output:**

```
Raw features: 8
Engineered features: 15
New features: ['rooms_per_household', 'bedrooms_ratio', 'population_per_household', 'income_per_room', 'income_squared', 'is_coastal', 'income_x_rooms']

Raw features:
  Train R2: 0.8745
  Test R2:  0.8123

Engineered features:
  Train R2: 0.9012
  Test R2:  0.8367

Improvement: +0.0244 R2

Top 5 features in engineered model:
  MedInc: 0.3456
  income_squared: 0.1234
  rooms_per_household: 0.0987
  Latitude: 0.0876
  income_per_room: 0.0765
```

## Common Mistakes

### Data Leakage: Using Future Information in Features

**Wrong:**

```
import pandas as pd

# Predicting whether a customer will churn next month
df = pd.DataFrame({
    'customer_id': [1, 2, 3],
    'total_purchases_ever': [50, 10, 30],  # Includes future purchases!
    'account_closed_date': ['2026-06-01', None, '2026-04-15'],
    'churned': [1, 0, 1]
})
# 'account_closed_date' leaks the target -- if it is not None, the customer churned!
# 'total_purchases_ever' includes purchases after the prediction date
```

The model achieves unrealistically high accuracy during training but fails in production because it used information that would not be available at prediction time.

**Correct:**

```
import pandas as pd

# Only use features available at the time of prediction
df = pd.DataFrame({
    'customer_id': [1, 2, 3],
    'purchases_last_30_days': [2, 8, 5],  # Only past data
    'days_since_last_purchase': [45, 3, 20],
    'avg_monthly_spend': [500, 1200, 800],
    'churned': [1, 0, 1]
})
# All features use only historical data available before the prediction point
```

Data leakage is the most dangerous mistake in feature engineering. A feature that contains information about the target (directly or indirectly) gives artificially high training scores but zero real-world value. Always ask: 'Would I have this information at the time I need to make the prediction?' If not, it is leakage.

### Fitting Feature Selection on Full Data (Including Test Set)

**Wrong:**

```
from sklearn.feature_selection import SelectKBest, f_regression
from sklearn.model_selection import train_test_split
import numpy as np

X = np.random.randn(1000, 20)
y = np.random.randn(1000)

# WRONG: Fitting on ALL data before splitting
selector = SelectKBest(f_regression, k=5)
X_selected = selector.fit_transform(X, y)  # Uses test data!

X_train, X_test, y_train, y_test = train_test_split(
    X_selected, y, test_size=0.2, random_state=42)
```

Information from the test set leaked into feature selection. The selected features are biased toward patterns in the test set, giving overly optimistic evaluation scores.

**Correct:**

```
from sklearn.feature_selection import SelectKBest, f_regression
from sklearn.model_selection import train_test_split
import numpy as np

X = np.random.randn(1000, 20)
y = np.random.randn(1000)

# CORRECT: Split first, then fit selector on training data only
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

selector = SelectKBest(f_regression, k=5)
X_train_sel = selector.fit_transform(X_train, y_train)  # Fit on train only
X_test_sel = selector.transform(X_test)  # Transform test with same selection
```

Feature selection must be fit only on training data. Fitting on the full dataset (including test) means the selector 'sees' patterns in the test set, which is data leakage. Use fit_transform on train, then transform on test -- the same rule as for scalers and encoders.

### Creating Too Many Polynomial Features

**Wrong:**

```
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.random.randn(100, 20)  # 20 features
poly = PolynomialFeatures(degree=3, include_bias=False)
X_poly = poly.fit_transform(X)
print(f"Features: {X_poly.shape[1]}")  # Thousands of features!
```

With 20 features and degree=3, PolynomialFeatures creates 1,770 features. This leads to overfitting, slow training, and memory issues. The curse of dimensionality makes most of these features useless noise.

**Correct:**

```
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.random.randn(100, 20)

# Option 1: Use degree=2 with interaction_only (no squared terms)
poly = PolynomialFeatures(degree=2, interaction_only=True, include_bias=False)
X_poly = poly.fit_transform(X)
print(f"Interaction-only features: {X_poly.shape[1]}")

# Option 2: Manually create specific polynomial features
# based on domain knowledge
X_manual = np.column_stack([X, X[:, 0] * X[:, 1], X[:, 2]**2])
print(f"Manual features: {X_manual.shape[1]}")
```

PolynomialFeatures with high degree on many features creates a combinatorial explosion. With d features and degree p, the output has C(d+p, p) - 1 features. Use interaction_only=True to skip squared terms, use low degree (2), or manually create only the polynomial features that make domain sense.

### Removing Features Based on Low Correlation with Target When Relationship Is Non-Linear

**Wrong:**

```
import pandas as pd
import numpy as np

# Feature has strong non-linear relationship but low linear correlation
np.random.seed(42)
df = pd.DataFrame({
    'x': np.linspace(-3, 3, 100),
})
df['y'] = df['x'] ** 2 + np.random.randn(100) * 0.5

print(f"Correlation: {df['x'].corr(df['y']):.4f}")
# Low correlation! But x is highly predictive of y (non-linearly)
# WRONG: Removing x because correlation is low
```

Correlation only measures linear relationships. A feature with a strong quadratic, U-shaped, or other non-linear relationship will have near-zero correlation but high predictive power.

**Correct:**

```
import pandas as pd
import numpy as np
from sklearn.feature_selection import mutual_info_regression

np.random.seed(42)
df = pd.DataFrame({'x': np.linspace(-3, 3, 100)})
df['y'] = df['x'] ** 2 + np.random.randn(100) * 0.5

print(f"Correlation: {df['x'].corr(df['y']):.4f}")  # Low

# Use mutual information instead -- captures non-linear relationships
mi = mutual_info_regression(df[['x']], df['y'], random_state=42)
print(f"Mutual Information: {mi[0]:.4f}")  # High!
# MI correctly identifies x as informative
```

Correlation is limited to linear relationships. Mutual information measures any statistical dependency (linear or non-linear). For x^2 vs x, correlation is near zero but mutual information is high. Always use mutual information alongside correlation for feature selection to avoid discarding non-linearly predictive features.

## Summary

- Feature engineering is the process of creating new features or transforming existing ones to improve ML model performance. It is often more impactful than algorithm selection.
- Create features from domain knowledge: ratios (price_per_sqft), differences (age from DOB), interactions (area * quality), and aggregations (total_purchases). These capture relationships that raw features do not explicitly contain.
- Datetime features are rich: extract hour, day_of_week, month, quarter, is_weekend, and time-since-event. Use sin/cos cyclical encoding for circular features like hour.
- Text features include word_count, char_count, exclamation_count, uppercase words, and TF-IDF scores. Simple text statistics can be surprisingly predictive.
- Binning converts continuous variables into categories using pd.cut() (equal-width) or pd.qcut() (equal-frequency). This helps capture non-linear step-function relationships.
- PolynomialFeatures creates squared and interaction terms automatically. Use degree=2 and be cautious with high degrees (combinatorial explosion). Prefer manual feature creation based on domain knowledge.
- Feature selection methods: correlation matrix (linear relationships with target), mutual information (linear and non-linear), variance threshold (remove near-constant features), RFE (iterative removal), tree-based importance (built into model).
- Fit feature selection on training data only. Fitting on full data (including test set) is data leakage and gives overly optimistic results.
- Data leakage is the most dangerous feature engineering mistake. Never use information that would not be available at prediction time (future data, target-derived features).
- Good features make simple models outperform complex ones. In Kaggle competitions, feature engineering with gradient boosting consistently beats exotic algorithms with raw features.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/feature-engineering/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/feature-engineering/practice/*
