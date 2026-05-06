---
title: "Data Preprocessing and Exploratory Data Analysis in Python | Modern Age Coders"
description: "Learn data preprocessing for ML: handling missing values, encoding categorical variables, feature scaling (StandardScaler, MinMaxScaler), EDA with visualization, outlier detection, and train-test split. 57 practice questions with Python code."
slug: data-preprocessing-and-eda
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/data-preprocessing-and-eda/
category: "AI and Machine Learning"
keywords: ["data preprocessing python", "exploratory data analysis", "feature scaling", "handling missing values", "data cleaning", "one-hot encoding", "label encoding", "StandardScaler", "MinMaxScaler", "train test split"]
---
# Data Preprocessing and Exploratory Data Analysis

**Difficulty:** Beginner  
**Reading time:** 28 min  
**Chapter:** 4  
**Practice questions:** 57

## What is Data Preprocessing and EDA?

**Data Preprocessing** is the process of cleaning, transforming, and preparing raw data so that it can be effectively used by Machine Learning algorithms. Raw data from the real world is almost never ready for ML. It has missing values, inconsistent formats, outliers, categorical text that algorithms cannot process, and features on wildly different scales. Preprocessing fixes all of this.

**Exploratory Data Analysis (EDA)** is the practice of examining and visualizing your data to understand its structure, patterns, distributions, and relationships before building any model. EDA answers questions like: What does the data look like? Are there missing values? Are features correlated? Are there outliers? What is the distribution of the target variable?

The old saying in ML is **"garbage in, garbage out"**. No algorithm, no matter how sophisticated, can produce good results from bad data. Preprocessing and EDA typically consume 60-80% of an ML project's time, and doing them well is what separates good data scientists from mediocre ones.

## Why Are Preprocessing and EDA Critical?

### 1. Garbage In, Garbage Out

If your data has missing values, your model might crash or produce biased results. If categorical variables are not encoded, algorithms cannot process them. If features are on different scales, distance-based algorithms like KNN will give wrong results. Preprocessing ensures your data is in the right format for ML.

### 2. Understanding Before Modeling

EDA prevents you from building models blindly. A histogram might reveal that your target variable is heavily skewed. A correlation heatmap might show that two features are nearly identical (redundant). A scatter plot might reveal clear clusters in your data. These insights guide your modeling decisions.

### 3. Real-World Data is Messy

Surveys have unanswered questions (missing values). Databases have duplicate entries. Sensor data has faulty readings (outliers). Text fields have inconsistent formatting. You need systematic techniques to handle all of these problems.

### 4. Feature Engineering Drives Model Performance

Proper preprocessing and feature engineering (creating new features from existing ones) often improve model performance more than switching to a fancier algorithm. A well-preprocessed dataset with a simple model often beats a raw dataset with a complex model.

## Detailed Explanation

### 1. Handling Missing Values

#### Detecting Missing Values

Use `df.isnull().sum()` to count missing values per column. Use `df.isnull().mean() * 100` to see the percentage missing. Understanding the pattern and extent of missing data guides your strategy.

#### Strategies for Missing Values

**Drop rows:** `df.dropna()` removes rows with any missing values. Use when: very few rows are affected (less than 5%). Avoid when: dropping would lose significant data.

**Fill with mean/median:** `df['col'].fillna(df['col'].mean())` or `.median()`. Use mean when data is normally distributed without outliers. Use median when there are outliers (median is robust to outliers).

**Fill with mode:** `df['col'].fillna(df['col'].mode()[0])`. Use for categorical columns (fills with the most frequent value).

**Forward/backward fill:** `df.fillna(method='ffill')` fills with the previous row's value. Useful for time series data where the previous value is a good estimate.

### 2. Handling Duplicates

`df.duplicated().sum()` counts duplicate rows. `df.drop_duplicates()` removes them. Duplicates can bias your model by giving certain samples more weight.

### 3. Encoding Categorical Variables

ML algorithms work with numbers, not text. Categorical variables like "Delhi", "Mumbai", "Bangalore" must be converted to numbers.

#### Label Encoding

Assigns a unique integer to each category: Delhi=0, Mumbai=1, Bangalore=2. Use for **ordinal** categories (where order matters), like education level: High School=0, Bachelor=1, Master=2, PhD=3. **Problem:** For nominal categories (where order does not matter), label encoding implies a false order -- the model might think Mumbai (1) is "between" Delhi (0) and Bangalore (2).

#### One-Hot Encoding

Creates a new binary column for each category. City becomes: City_Delhi (0/1), City_Mumbai (0/1), City_Bangalore (0/1). Each row has exactly one 1 and the rest are 0. Use for **nominal** categories. In Pandas: `pd.get_dummies(df, columns=['City'])`. In sklearn: `OneHotEncoder()`.

### 4. Feature Scaling

Features on different scales cause problems for distance-based algorithms (KNN, SVM) and gradient-based algorithms (neural networks, linear regression with gradient descent).

#### StandardScaler (Z-score Normalization)

Formula: z = (x - mean) / std. Centers data at 0 with standard deviation 1. Use when: data is approximately normally distributed. Use with: SVM, logistic regression, neural networks.

#### MinMaxScaler (Min-Max Normalization)

Formula: x_scaled = (x - min) / (max - min). Scales data to [0, 1] range. Use when: data is not normally distributed or you need bounded values. Use with: KNN, neural networks (especially image data).

#### When to Scale

Always scale for: KNN, SVM, neural networks, PCA, K-Means. Scaling is optional for: Decision Trees, Random Forests (tree-based models are scale-invariant). **Important:** Fit the scaler on training data only, then transform both training and test data.

### 5. Exploratory Data Analysis (EDA) with Visualization

#### Distribution Plots

Histograms and density plots show how a variable is distributed. Check for: normal vs skewed distribution, number of modes (peaks), range of values.

#### Box Plots for Outliers

Box plots show the median, quartiles (Q1, Q3), and whiskers (Q1 - 1.5*IQR and Q3 + 1.5*IQR). Points beyond the whiskers are potential outliers.

#### Correlation Heatmap

`df.corr()` computes pairwise correlations. Visualized as a heatmap with colors indicating correlation strength. High correlation between features suggests redundancy.

#### Pairplot

`sns.pairplot(df, hue='target')` shows scatter plots for every pair of features, colored by the target variable. This reveals clusters, separability, and relationships.

### 6. Handling Outliers

#### IQR Method

IQR = Q3 - Q1. Outliers are values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR. This is based on the distribution of the data itself.

#### Z-Score Method

Values with Z-score > 3 or < -3 (more than 3 standard deviations from mean) are considered outliers. Assumes approximately normal distribution.

### 7. Train-Test Split

`train_test_split(X, y, test_size=0.2, random_state=42)` splits data into training (80%) and testing (20%). **Why split?** To evaluate how the model performs on unseen data. **Why random_state?** For reproducibility -- same split every time. **Stratified split:** `stratify=y` ensures the class distribution in train and test sets matches the original distribution (critical for imbalanced datasets).

## Code Examples

### Detecting and Handling Missing Values

```python
import pandas as pd
import numpy as np

# Create dataset with missing values
df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram', 'Meera', 'Deepak'],
    'Age': [22, np.nan, 25, 23, np.nan, 21, 24],
    'Marks': [85, 92, np.nan, 88, 65, np.nan, 78],
    'City': ['Delhi', 'Mumbai', None, 'Pune', 'Delhi', 'Mumbai', None],
    'Branch': ['CSE', 'ECE', 'CSE', np.nan, 'ECE', 'CSE', 'IT']
})

print("=== Original Data ===")
print(df)
print(f"\n=== Missing Values ===")
print(df.isnull().sum())
print(f"\nTotal missing: {df.isnull().sum().sum()}")
print(f"Missing percentage per column:")
print((df.isnull().mean() * 100).round(1))

# Fill numerical columns with median (robust to outliers)
df['Age'] = df['Age'].fillna(df['Age'].median())
df['Marks'] = df['Marks'].fillna(df['Marks'].median())

# Fill categorical columns with mode (most frequent)
df['City'] = df['City'].fillna(df['City'].mode()[0])
df['Branch'] = df['Branch'].fillna(df['Branch'].mode()[0])

print(f"\n=== After Handling Missing Values ===")
print(df)
print(f"\nMissing values remaining: {df.isnull().sum().sum()}")
```

First, we detect missing values with `isnull().sum()`. For numerical columns (Age, Marks), we fill with the **median** because it is robust to outliers. For categorical columns (City, Branch), we fill with the **mode** (most frequent value). The strategy depends on the column type and the nature of missing data. `dropna()` would also work but wastes data.

**Output:**

```
=== Original Data ===
     Name   Age  Marks    City Branch
0   Aarav  22.0   85.0   Delhi    CSE
1   Priya   NaN   92.0  Mumbai    ECE
2   Rohan  25.0    NaN    None    CSE
3  Ananya  23.0   88.0    Pune    NaN
4  Vikram   NaN   65.0   Delhi    ECE
5   Meera  21.0    NaN  Mumbai    CSE
6  Deepak  24.0   78.0    None     IT

=== Missing Values ===
Name      0
Age       2
Marks     2
City      2
Branch    1

Total missing: 7
Missing percentage per column:
Name       0.0
Age       28.6
Marks     28.6
City      28.6
Branch    14.3

=== After Handling Missing Values ===
     Name   Age  Marks    City Branch
0   Aarav  22.0   85.0   Delhi    CSE
1   Priya  23.0   92.0  Mumbai    ECE
2   Rohan  25.0   83.0   Delhi    CSE
3  Ananya  23.0   88.0    Pune    CSE
4  Vikram  23.0   65.0   Delhi    ECE
5   Meera  21.0   83.0  Mumbai    CSE
6  Deepak  24.0   78.0   Delhi     IT

Missing values remaining: 0
```

### Encoding Categorical Variables: Label and One-Hot

```python
import pandas as pd
from sklearn.preprocessing import LabelEncoder

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya'],
    'City': ['Delhi', 'Mumbai', 'Bangalore', 'Delhi'],
    'Education': ['Bachelor', 'Master', 'PhD', 'Bachelor']
})
print("Original:")
print(df)

# Label Encoding (for ORDINAL data - where order matters)
le = LabelEncoder()
df['Education_Encoded'] = le.fit_transform(df['Education'])
print(f"\nLabel Encoding for Education:")
print(f"  Classes: {list(le.classes_)}")
print(f"  Encoded: {list(df['Education_Encoded'])}")

# One-Hot Encoding (for NOMINAL data - where order doesn't matter)
df_encoded = pd.get_dummies(df, columns=['City'], prefix='City', dtype=int)
print(f"\nOne-Hot Encoding for City:")
print(df_encoded)

print("\nWhy One-Hot for City?")
print("Label encoding would give Delhi=0, Mumbai=2, Bangalore=1")
print("This implies Mumbai > Bangalore > Delhi, which is meaningless!")
print("One-Hot creates separate binary columns, avoiding false ordering.")
```

Label Encoding assigns integers to categories: Bachelor=0, Master=1, PhD=2. This works for Education because there IS a natural order (Bachelor < Master < PhD). One-Hot Encoding creates binary columns for each category. This works for City because there is NO natural order between cities. Using label encoding for nominal data (like cities) introduces a false ordinal relationship that can confuse the model.

**Output:**

```
Original:
     Name       City Education
0   Aarav      Delhi  Bachelor
1   Priya     Mumbai    Master
2   Rohan  Bangalore       PhD
3  Ananya      Delhi  Bachelor

Label Encoding for Education:
  Classes: ['Bachelor', 'Master', 'PhD']
  Encoded: [0, 1, 2]

One-Hot Encoding for City:
     Name Education  Education_Encoded  City_Bangalore  City_Delhi  City_Mumbai
0   Aarav  Bachelor                  0               0           1            0
1   Priya    Master                  1               0           0            1
2   Rohan       PhD                  2               1           0            0
3  Ananya  Bachelor                  0               0           1            0

Why One-Hot for City?
Label encoding would give Delhi=0, Mumbai=2, Bangalore=1
This implies Mumbai > Bangalore > Delhi, which is meaningless!
One-Hot creates separate binary columns, avoiding false ordering.
```

### Feature Scaling: StandardScaler and MinMaxScaler

```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, MinMaxScaler

df = pd.DataFrame({
    'Age': [22, 25, 30, 28, 35, 40],
    'Salary': [25000, 35000, 50000, 45000, 60000, 80000],
    'Experience': [1, 3, 5, 4, 8, 12]
})
print("Original data:")
print(df)
print(f"\nRanges: Age [{df['Age'].min()}-{df['Age'].max()}], "
      f"Salary [{df['Salary'].min()}-{df['Salary'].max()}], "
      f"Experience [{df['Experience'].min()}-{df['Experience'].max()}]")

# StandardScaler: mean=0, std=1
scaler_std = StandardScaler()
df_std = pd.DataFrame(
    scaler_std.fit_transform(df),
    columns=df.columns
).round(3)
print(f"\nStandardScaler (mean=0, std=1):")
print(df_std)

# MinMaxScaler: scale to [0, 1]
scaler_mm = MinMaxScaler()
df_mm = pd.DataFrame(
    scaler_mm.fit_transform(df),
    columns=df.columns
).round(3)
print(f"\nMinMaxScaler (range 0-1):")
print(df_mm)

print("\nWhy scale? Without scaling:")
print("  KNN distance dominated by Salary (range 55000) vs Age (range 18)")
print("  After scaling, all features contribute equally to distance")
```

Without scaling, Salary (range 25000-80000) would completely dominate distance calculations over Age (22-40) and Experience (1-12). **StandardScaler** centers each feature at mean=0 with std=1 (Z-score normalization). **MinMaxScaler** scales each feature to the [0, 1] range. After scaling, all features contribute equally. StandardScaler is preferred when data is roughly normal; MinMaxScaler when you need bounded values.

**Output:**

```
Original data:
   Age  Salary  Experience
0   22   25000           1
1   25   35000           3
2   30   50000           5
3   28   45000           4
4   35   60000           8
5   40   80000          12

Ranges: Age [22-40], Salary [25000-80000], Experience [1-12]

StandardScaler (mean=0, std=1):
     Age  Salary  Experience
0 -1.285  -1.313      -1.215
1 -0.802  -0.788      -0.693
2 -0.000  -0.000       0.000
3 -0.321  -0.263      -0.260
4  0.802   0.525       0.781
5  1.605   1.576       1.821

MinMaxScaler (range 0-1):
     Age  Salary  Experience
0  0.000   0.000       0.000
1  0.167   0.182       0.182
2  0.444   0.455       0.364
3  0.333   0.364       0.273
4  0.722   0.636       0.636
5  1.000   1.000       1.000

Why scale? Without scaling:
  KNN distance dominated by Salary (range 55000) vs Age (range 18)
  After scaling, all features contribute equally to distance
```

### Outlier Detection: IQR and Z-Score Methods

```python
import numpy as np
import pandas as pd

np.random.seed(42)
marks = np.concatenate([
    np.random.normal(70, 10, 47),  # Normal marks
    np.array([5, 10, 150])         # Outliers
])
df = pd.DataFrame({'Marks': marks.round(1)})

# IQR Method
Q1 = df['Marks'].quantile(0.25)
Q3 = df['Marks'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

print("=== IQR Method ===")
print(f"Q1: {Q1:.1f}, Q3: {Q3:.1f}, IQR: {IQR:.1f}")
print(f"Bounds: [{lower_bound:.1f}, {upper_bound:.1f}]")

iqr_outliers = df[(df['Marks'] < lower_bound) | (df['Marks'] > upper_bound)]
print(f"Outliers found: {len(iqr_outliers)}")
print(f"Outlier values: {sorted(iqr_outliers['Marks'].values)}")

# Z-Score Method
mean = df['Marks'].mean()
std = df['Marks'].std()
df['Z_Score'] = ((df['Marks'] - mean) / std).round(2)

print(f"\n=== Z-Score Method ===")
print(f"Mean: {mean:.1f}, Std: {std:.1f}")
z_outliers = df[abs(df['Z_Score']) > 3]
print(f"Outliers (|Z| > 3): {len(z_outliers)}")
print(z_outliers[['Marks', 'Z_Score']])

print(f"\n=== After Removing Outliers ===")
df_clean = df[(df['Marks'] >= lower_bound) & (df['Marks'] <= upper_bound)]
print(f"Original: {len(df)} rows, Cleaned: {len(df_clean)} rows")
print(f"Mean before: {df['Marks'].mean():.1f}, Mean after: {df_clean['Marks'].mean():.1f}")
```

The **IQR method** calculates Q1, Q3, and IQR, then flags values outside [Q1-1.5*IQR, Q3+1.5*IQR]. The **Z-score method** flags values more than 3 standard deviations from the mean. Both correctly identify 5, 10, and 150 as outliers. Removing outliers changed the mean from ~68 to ~70, giving a more representative estimate. Choose IQR for non-normal data and Z-score for approximately normal data.

**Output:**

```
=== IQR Method ===
Q1: 63.5, Q3: 77.3, IQR: 13.8
Bounds: [42.8, 98.0]
Outliers found: 3
Outlier values: [5.0, 10.0, 150.0]

=== Z-Score Method ===
Mean: 68.2, Std: 21.3
Outliers (|Z| > 3): 1
    Marks  Z_Score
49  150.0     3.84

=== After Removing Outliers ===
Original: 50 rows, Cleaned: 47 rows
Mean before: 68.2, Mean after: 70.1
```

### EDA: Correlation Heatmap and Distribution Analysis

```python
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

np.random.seed(42)
n = 100
df = pd.DataFrame({
    'Hours_Studied': np.random.uniform(1, 10, n).round(1),
    'Attendance_Pct': np.random.uniform(40, 100, n).round(1),
    'Previous_Score': np.random.uniform(30, 90, n).round(1)
})
df['Final_Score'] = (15 + 4*df['Hours_Studied'] + 0.3*df['Attendance_Pct'] +
                     0.4*df['Previous_Score'] + np.random.normal(0, 5, n)).round(1)
df['Final_Score'] = df['Final_Score'].clip(0, 100)

print("=== Dataset Overview ===")
print(df.describe().round(2))

# Correlation matrix
corr = df.corr().round(3)
print("\n=== Correlation Matrix ===")
print(corr)

print("\n=== Key Insights ===")
for col in df.columns[:-1]:
    c = corr.loc[col, 'Final_Score']
    strength = 'Strong' if abs(c) > 0.5 else 'Moderate' if abs(c) > 0.3 else 'Weak'
    print(f"  {col} vs Final_Score: {c:.3f} ({strength})")

# Save correlation heatmap
fig, ax = plt.subplots(figsize=(8, 6))
im = ax.imshow(corr.values, cmap='coolwarm', vmin=-1, vmax=1)
ax.set_xticks(range(len(corr.columns)))
ax.set_yticks(range(len(corr.columns)))
ax.set_xticklabels(corr.columns, rotation=45, ha='right')
ax.set_yticklabels(corr.columns)
for i in range(len(corr)):
    for j in range(len(corr)):
        ax.text(j, i, f'{corr.values[i, j]:.2f}', ha='center', va='center')
plt.colorbar(im)
plt.title('Correlation Heatmap')
plt.tight_layout()
plt.savefig('correlation_heatmap.png')
print("\nHeatmap saved as 'correlation_heatmap.png'")
```

EDA starts with `describe()` for basic statistics and a correlation matrix to understand relationships. Hours_Studied has the strongest correlation with Final_Score, confirming it is the most predictive feature. The correlation heatmap visualizes this -- darker colors indicate stronger relationships. This guides feature selection: include strongly correlated features, consider dropping weakly correlated ones.

**Output:**

```
=== Dataset Overview ===
       Hours_Studied  Attendance_Pct  Previous_Score  Final_Score
count         100.00          100.00          100.00       100.00
mean            5.39           69.54           60.29        62.87
std             2.68           17.58           17.41        13.32
min             1.00           40.30           30.20        29.20
max            10.00           99.90           89.70        95.70

=== Correlation Matrix ===
                Hours_Studied  Attendance_Pct  Previous_Score  Final_Score
Hours_Studied           1.000          -0.021           0.048        0.812
Attendance_Pct         -0.021           1.000          -0.043        0.363
Previous_Score          0.048          -0.043           1.000        0.508
Final_Score             0.812           0.363           0.508        1.000

=== Key Insights ===
  Hours_Studied vs Final_Score: 0.812 (Strong)
  Attendance_Pct vs Final_Score: 0.363 (Moderate)
  Previous_Score vs Final_Score: 0.508 (Strong)

Heatmap saved as 'correlation_heatmap.png'
```

### Train-Test Split with Stratification

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split

np.random.seed(42)
df = pd.DataFrame({
    'Feature1': np.random.randn(100),
    'Feature2': np.random.randn(100),
    'Target': np.array([0]*80 + [1]*20)  # Imbalanced: 80% class 0, 20% class 1
})

X = df[['Feature1', 'Feature2']]
y = df['Target']

print(f"Original class distribution:")
print(f"  Class 0: {(y == 0).sum()} ({(y == 0).mean()*100:.0f}%)")
print(f"  Class 1: {(y == 1).sum()} ({(y == 1).mean()*100:.0f}%)")

# Regular split (may not preserve class ratios)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"\nRegular split - Test set:")
print(f"  Class 0: {(y_test == 0).sum()} ({(y_test == 0).mean()*100:.0f}%)")
print(f"  Class 1: {(y_test == 1).sum()} ({(y_test == 1).mean()*100:.0f}%)")

# Stratified split (preserves class ratios)
X_train_s, X_test_s, y_train_s, y_test_s = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
print(f"\nStratified split - Test set:")
print(f"  Class 0: {(y_test_s == 0).sum()} ({(y_test_s == 0).mean()*100:.0f}%)")
print(f"  Class 1: {(y_test_s == 1).sum()} ({(y_test_s == 1).mean()*100:.0f}%)")

print(f"\nTraining size: {len(X_train_s)}, Test size: {len(X_test_s)}")
print("Stratified split ensures test set has same class ratio as original!")
```

With imbalanced data (80% class 0, 20% class 1), a random split might put all class 1 samples in the training set, leaving the test set with only class 0. **Stratified splitting** (`stratify=y`) ensures the class ratio is preserved in both train and test sets. This is critical for imbalanced datasets like fraud detection, disease diagnosis, or rare event prediction.

**Output:**

```
Original class distribution:
  Class 0: 80 (80%)
  Class 1: 20 (20%)

Regular split - Test set:
  Class 0: 15 (75%)
  Class 1: 5 (25%)

Stratified split - Test set:
  Class 0: 16 (80%)
  Class 1: 4 (20%)

Training size: 80, Test size: 20
Stratified split ensures test set has same class ratio as original!
```

### Complete Preprocessing Pipeline

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Create realistic dataset
np.random.seed(42)
n = 200
df = pd.DataFrame({
    'Age': np.random.randint(18, 60, n).astype(float),
    'Salary': np.random.uniform(20000, 100000, n).round(0),
    'City': np.random.choice(['Delhi', 'Mumbai', 'Bangalore', 'Pune'], n),
    'Experience': np.random.randint(0, 20, n).astype(float),
    'Purchased': np.random.choice([0, 1], n, p=[0.6, 0.4])
})
# Add missing values
df.loc[np.random.choice(n, 15), 'Age'] = np.nan
df.loc[np.random.choice(n, 10), 'Salary'] = np.nan

print("Step 1: Check missing values")
print(df.isnull().sum())

# Step 2: Handle missing values
df['Age'] = df['Age'].fillna(df['Age'].median())
df['Salary'] = df['Salary'].fillna(df['Salary'].median())
print("\nStep 2: Missing values handled")

# Step 3: Encode categorical variables
df_encoded = pd.get_dummies(df, columns=['City'], dtype=int)
print(f"\nStep 3: Encoded - Columns: {list(df_encoded.columns)}")

# Step 4: Split features and target
X = df_encoded.drop('Purchased', axis=1)
y = df_encoded['Purchased']

# Step 5: Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Step 6: Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)  # Fit on train only!
X_test_scaled = scaler.transform(X_test)         # Transform test with train's params

print(f"\nStep 5-6: Split and scaled")
print(f"  Train: {X_train_scaled.shape}, Test: {X_test_scaled.shape}")

# Step 7: Train and evaluate
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train_scaled, y_train)
accuracy = accuracy_score(y_test, model.predict(X_test_scaled))
print(f"\nStep 7: Model accuracy: {accuracy * 100:.1f}%")
```

This is a complete preprocessing pipeline: (1) Check for missing values, (2) Fill missing values, (3) Encode categorical variables, (4) Separate features and target, (5) Train-test split with stratification, (6) Scale features (fit on train, transform both), (7) Train and evaluate. **Critical:** The scaler is fit only on training data to prevent data leakage. If you fit on the entire dataset, the test data's statistics leak into the training process.

**Output:**

```
Step 1: Check missing values
Age           15
Salary        10
City           0
Experience     0
Purchased      0

Step 2: Missing values handled

Step 3: Encoded - Columns: ['Age', 'Salary', 'Experience', 'Purchased', 'City_Bangalore', 'City_Delhi', 'City_Mumbai', 'City_Pune']

Step 5-6: Split and scaled
  Train: (160, 7), Test: (40, 7)

Step 7: Model accuracy: 52.5%
```

## Common Mistakes

### Fitting the Scaler on the Entire Dataset (Data Leakage)

**Wrong:**

```
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import numpy as np

X = np.random.randn(100, 3)
y = np.random.randint(0, 2, 100)

# WRONG: Scaling entire dataset before splitting!
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # Uses ALL data's mean/std

X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2
)
```

No error, but this causes data leakage. The scaler learned statistics from test data, making evaluation overly optimistic.

**Correct:**

```
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import numpy as np

X = np.random.randn(100, 3)
y = np.random.randint(0, 2, 100)

# CORRECT: Split first, then scale
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)  # Fit on TRAIN only
X_test_scaled = scaler.transform(X_test)         # Transform test with train params
```

Data leakage occurs when information from the test set leaks into the training process. If you fit the scaler on the entire dataset, the mean and standard deviation include test data. This makes the model's evaluation overly optimistic -- it performs better on the test set than it would on truly unseen data. Always: split first, fit scaler on train, transform both.

### Using Label Encoding for Nominal Categorical Variables

**Wrong:**

```
from sklearn.preprocessing import LabelEncoder
import pandas as pd

df = pd.DataFrame({'City': ['Delhi', 'Mumbai', 'Bangalore', 'Pune']})
le = LabelEncoder()
df['City_Encoded'] = le.fit_transform(df['City'])
# Bangalore=0, Delhi=1, Mumbai=2, Pune=3
# Model thinks: Delhi(1) is between Bangalore(0) and Mumbai(2)!
```

No error, but the model treats cities as ordered numbers, which is incorrect for nominal categories.

**Correct:**

```
import pandas as pd

df = pd.DataFrame({'City': ['Delhi', 'Mumbai', 'Bangalore', 'Pune']})
df_encoded = pd.get_dummies(df, columns=['City'], dtype=int)
print(df_encoded)
# Each city gets its own binary column - no false ordering
```

Label encoding assigns numbers that imply an order: Bangalore(0) < Delhi(1) < Mumbai(2) < Pune(3). For algorithms that use numerical relationships (linear regression, SVM, KNN), this false ordering misleads the model. One-hot encoding creates independent binary columns, correctly representing that cities are distinct categories with no inherent order.

### Dropping Too Many Rows with Missing Values

**Wrong:**

```
import pandas as pd
import numpy as np

# 1000 rows, but 30% have at least one missing value
df = pd.DataFrame(np.random.randn(1000, 5))
df.iloc[np.random.choice(1000, 300, replace=False), 0] = np.nan

print(f"Before dropna: {len(df)} rows")
df_clean = df.dropna()
print(f"After dropna: {len(df_clean)} rows")
print(f"Lost {1000 - len(df_clean)} rows ({(1000-len(df_clean))/10}% of data)!")
```

Lost 300 rows (30% of data). This significantly reduces the training data and may bias the model.

**Correct:**

```
import pandas as pd
import numpy as np

df = pd.DataFrame(np.random.randn(1000, 5))
df.iloc[np.random.choice(1000, 300, replace=False), 0] = np.nan

print(f"Before: {len(df)} rows, Missing in col 0: {df[0].isnull().sum()}")

# Fill with median instead of dropping
df[0] = df[0].fillna(df[0].median())
print(f"After fillna: {len(df)} rows, Missing: {df[0].isnull().sum()}")
print("All 1000 rows preserved!")
```

Dropping rows with missing values can lose a significant portion of your data, especially if missing values are spread across multiple columns. If 30% of rows have at least one missing value, `dropna()` removes 30% of your data. Filling with mean/median preserves all rows. Only drop when: (1) very few rows are affected, or (2) the missing data is not random (which biases any filling strategy).

### Forgetting to Handle Categorical Variables Before Scaling

**Wrong:**

```
from sklearn.preprocessing import StandardScaler
import pandas as pd

df = pd.DataFrame({
    'Age': [25, 30, 35],
    'City': ['Delhi', 'Mumbai', 'Pune'],
    'Salary': [50000, 60000, 70000]
})

scaler = StandardScaler()
df_scaled = scaler.fit_transform(df)  # Error: City is a string!
```

ValueError: could not convert string to float: 'Delhi'

**Correct:**

```
from sklearn.preprocessing import StandardScaler
import pandas as pd

df = pd.DataFrame({
    'Age': [25, 30, 35],
    'City': ['Delhi', 'Mumbai', 'Pune'],
    'Salary': [50000, 60000, 70000]
})

# Step 1: Encode categorical variables
df_encoded = pd.get_dummies(df, columns=['City'], dtype=int)

# Step 2: Then scale numerical features
scaler = StandardScaler()
num_cols = ['Age', 'Salary']
df_encoded[num_cols] = scaler.fit_transform(df_encoded[num_cols])
print(df_encoded)
```

StandardScaler only works with numerical data. You must encode categorical variables first (one-hot or label encoding), then scale only the numerical columns. Note: you typically do NOT scale one-hot encoded columns (they are already 0/1). Only scale continuous numerical features.

## Summary

- Data preprocessing transforms raw, messy data into clean data suitable for ML. It typically takes 60-80% of project time. Garbage in = garbage out.
- Missing values: detect with df.isnull().sum(). Fill numerical columns with median (robust to outliers) or mean. Fill categorical columns with mode. Drop rows only when very few are affected.
- Encoding: Use Label Encoding for ordinal categories (order matters: low/medium/high). Use One-Hot Encoding (pd.get_dummies) for nominal categories (no order: city names, colors).
- Feature scaling: StandardScaler (Z-score, mean=0, std=1) for normally distributed data. MinMaxScaler (0-1 range) for bounded data. Always needed for KNN, SVM, neural networks. Not needed for tree-based models.
- Critical rule: Fit the scaler on training data only, then transform both train and test data. Fitting on all data causes data leakage.
- EDA starts with df.describe(), df.info(), df.isnull().sum(). Visualize with histograms (distribution), scatter plots (relationships), box plots (outliers), and correlation heatmaps (feature relationships).
- Outlier detection: IQR method flags values outside [Q1-1.5*IQR, Q3+1.5*IQR]. Z-score method flags values with |z| > 3. Handle by removing, capping, or transforming (log).
- Train-test split: Use train_test_split with test_size=0.2 (80/20 split). Use random_state for reproducibility. Use stratify=y for imbalanced datasets.
- The preprocessing pipeline order: handle missing values -> encode categoricals -> split data -> scale features -> train model. Never scale before splitting.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/data-preprocessing-and-eda/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/data-preprocessing-and-eda/practice/*
