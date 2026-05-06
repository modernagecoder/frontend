---
title: "Practice: Data Preprocessing and Exploratory Data Analysis"
description: "57 practice problems for Data Preprocessing and Exploratory Data Analysis in AI and Machine Learning"
slug: data-preprocessing-and-eda-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/data-preprocessing-and-eda/practice/
category: "AI and Machine Learning"
---
# Practice: Data Preprocessing and Exploratory Data Analysis

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] Write code to detect missing values in a DataFrame with columns Name, Age (2 NaN), and Marks (1 NaN). Print the count of missing values per column.

*Hint:* Use df.isnull().sum().

**Answer:** ```
import pandas as pd
import numpy as np
df = pd.DataFrame({'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya'], 'Age': [20, np.nan, 22, np.nan], 'Marks': [85, 92, np.nan, 88]})
print(df.isnull().sum())
```

Output: Name 0, Age 2, Marks 1

`isnull()` creates a boolean DataFrame (True where values are missing). `sum()` counts True values per column. This is always the first step in handling missing data.

### Q2. [Easy] Write code to fill missing values in the 'Age' column with the median age.

*Hint:* Use df['Age'].fillna(df['Age'].median()).

**Answer:** ```
import pandas as pd, numpy as np
df = pd.DataFrame({'Age': [20, np.nan, 22, np.nan, 25]})
df['Age'] = df['Age'].fillna(df['Age'].median())
print(df)
```

The median of [20, 22, 25] is 22. Both NaN values are replaced with 22. Median is preferred over mean when data has outliers.

### Q3. [Easy] What is the difference between Label Encoding and One-Hot Encoding? When should you use each?

*Hint:* Think about ordinal vs nominal categories.

**Answer:** **Label Encoding** assigns integers (0, 1, 2) to categories. Use for **ordinal** data where order matters (Low < Medium < High). **One-Hot Encoding** creates binary columns for each category. Use for **nominal** data where order does not matter (Delhi, Mumbai, Pune).

Label encoding for nominal data implies false ordering (Delhi=0 < Mumbai=1 < Pune=2), which misleads algorithms that use numerical relationships. One-hot encoding avoids this by creating independent binary features.

### Q4. [Easy] Write code to one-hot encode the 'Color' column in a DataFrame with values ['Red', 'Blue', 'Green', 'Red'].

*Hint:* Use pd.get_dummies(df, columns=['Color']).

**Answer:** ```
import pandas as pd
df = pd.DataFrame({'Color': ['Red', 'Blue', 'Green', 'Red']})
df_encoded = pd.get_dummies(df, columns=['Color'], dtype=int)
print(df_encoded)
```

One-hot encoding creates three columns: Color_Blue, Color_Green, Color_Red. Each row has a 1 in the column matching its color and 0s elsewhere. This correctly represents colors as independent categories.

### Q5. [Medium] Why must you fit the scaler on training data only, not the entire dataset?

*Hint:* Think about what happens if the test data's statistics leak into preprocessing.

**Answer:** Fitting the scaler on the entire dataset causes **data leakage**. The scaler's mean and standard deviation would include test data, meaning the training process indirectly 'sees' test data statistics. This makes evaluation overly optimistic -- the model appears to perform better than it actually would on truly unseen data. Always: `scaler.fit_transform(X_train)`, then `scaler.transform(X_test)`.

Data leakage is one of the most common and subtle mistakes in ML. It leads to models that perform well during evaluation but poorly in production. The golden rule: the test set must simulate completely unseen data.

### Q6. [Medium] Write code to apply StandardScaler to a NumPy array [[1, 100], [2, 200], [3, 300]]. Print the scaled values and verify that each column has mean 0 and std 1.

*Hint:* Use StandardScaler().fit_transform(). Check with np.mean() and np.std().

**Answer:** ```
import numpy as np
from sklearn.preprocessing import StandardScaler
X = np.array([[1, 100], [2, 200], [3, 300]])
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print('Scaled:\n', X_scaled.round(4))
print(f'Means: {X_scaled.mean(axis=0).round(10)}')
print(f'Stds: {X_scaled.std(axis=0).round(4)}')
```

StandardScaler computes z = (x - mean) / std for each column. After scaling, each column has mean=0 and std=1 (within floating-point precision). Column 1 (1,2,3) and column 2 (100,200,300) now have the same scale: [-1.22, 0, 1.22].

### Q7. [Medium] Create a correlation heatmap for a DataFrame with 4 numerical columns using Matplotlib (not seaborn).

*Hint:* Use df.corr() and plt.imshow() with a colormap.

**Answer:** ```
import numpy as np, pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
np.random.seed(42)
df = pd.DataFrame({'A': np.random.randn(50), 'B': np.random.randn(50)})
df['C'] = df['A'] * 2 + np.random.randn(50)*0.5
df['D'] = np.random.randn(50)
corr = df.corr()
fig, ax = plt.subplots(figsize=(6,5))
im = ax.imshow(corr, cmap='coolwarm', vmin=-1, vmax=1)
ax.set_xticks(range(4)); ax.set_yticks(range(4))
ax.set_xticklabels(corr.columns); ax.set_yticklabels(corr.columns)
for i in range(4):
    for j in range(4):
        ax.text(j, i, f'{corr.values[i,j]:.2f}', ha='center', va='center')
plt.colorbar(im); plt.title('Correlation Heatmap')
plt.tight_layout(); plt.savefig('heatmap.png')
print('Saved heatmap.png')
```

A correlation heatmap visualizes pairwise correlations. Values near 1 (red) indicate strong positive correlation, near -1 (blue) indicate strong negative, and near 0 (white) indicate no linear relationship. Column C was constructed from A, so their correlation should be high.

### Q8. [Medium] Write code to detect outliers in [12, 15, 14, 10, 100, 13, 11, 16, 14, 200] using the IQR method. Print the outlier values.

*Hint:* Calculate Q1, Q3, IQR. Outliers are below Q1-1.5*IQR or above Q3+1.5*IQR.

**Answer:** ```
import numpy as np
data = np.array([12, 15, 14, 10, 100, 13, 11, 16, 14, 200])
Q1 = np.percentile(data, 25)
Q3 = np.percentile(data, 75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
outliers = data[(data < lower) | (data > upper)]
print(f'Q1={Q1}, Q3={Q3}, IQR={IQR}')
print(f'Bounds: [{lower}, {upper}]')
print(f'Outliers: {outliers}')
```

Q1=11.75, Q3=15.75, IQR=4.0. Lower=11.75-6=5.75, Upper=15.75+6=21.75. Values below 5.75 or above 21.75 are outliers: 100 and 200 are clearly flagged.

### Q9. [Hard] Write a complete preprocessing pipeline: create a dataset with missing values and categorical columns, handle missing values, encode categoricals, split 80/20 with stratification, and scale features.

*Hint:* Follow the order: missing values -> encode -> split -> scale.

**Answer:** ```
import pandas as pd, numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
np.random.seed(42)
df = pd.DataFrame({'Age': [25, np.nan, 30, 22, 28], 'Salary': [50000, 60000, np.nan, 40000, 55000], 'City': ['Delhi', 'Mumbai', 'Delhi', 'Pune', 'Mumbai'], 'Bought': [1, 0, 1, 0, 1]})
df['Age'] = df['Age'].fillna(df['Age'].median())
df['Salary'] = df['Salary'].fillna(df['Salary'].median())
df = pd.get_dummies(df, columns=['City'], dtype=int)
X = df.drop('Bought', axis=1); y = df['Bought']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
print(f'Train shape: {X_train.shape}, Test shape: {X_test.shape}')
```

This follows the correct preprocessing order. Missing values are filled first (before encoding, since NaN in categorical columns causes issues). Then categoricals are encoded. Then data is split. Finally, scaling is applied (fit on train only). This pipeline prevents data leakage and handles all common preprocessing tasks.

### Q10. [Medium] When should you use StandardScaler vs MinMaxScaler? Name algorithms that require scaling.

*Hint:* Think about data distribution and algorithm requirements.

**Answer:** **StandardScaler:** Use when data is approximately normally distributed. Transforms to mean=0, std=1. Works well with: SVM, logistic regression, linear regression (with gradient descent). **MinMaxScaler:** Use when data is not normal or you need bounded [0,1] values. Works well with: KNN, neural networks, image data. **Algorithms requiring scaling:** KNN, SVM, neural networks, PCA, K-Means. **Algorithms that don't need scaling:** Decision Trees, Random Forests, XGBoost (tree-based models are scale-invariant).

Tree-based models split on individual feature thresholds, so they do not care about scale. Distance-based (KNN) and gradient-based (neural nets) models are sensitive to scale because features with larger ranges dominate.

### Q11. [Easy] What is the output?

```
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 2, 3, 3, 3]})
print(df['A'].value_counts())
```

*Hint:* value_counts() counts occurrences of each unique value.

**Answer:** `3    3
2    2
1    1
Name: A, dtype: int64`

`value_counts()` counts how many times each value appears: 3 appears 3 times, 2 appears 2 times, 1 appears 1 time. Results are sorted by frequency (descending). This is essential for understanding class distributions.

### Q12. [Hard] Write code to handle missing values using a smarter strategy: group-wise median fill. Fill missing 'Salary' values with the median salary of their respective 'Department'.

*Hint:* Use df.groupby('Department')['Salary'].transform(lambda x: x.fillna(x.median())).

**Answer:** ```
import pandas as pd, numpy as np
df = pd.DataFrame({'Department': ['CSE', 'CSE', 'ECE', 'ECE', 'CSE'], 'Salary': [50000, np.nan, 70000, np.nan, 60000]})
df['Salary'] = df.groupby('Department')['Salary'].transform(lambda x: x.fillna(x.median()))
print(df)
```

Instead of filling all missing salaries with the overall median, this fills CSE missing salaries with CSE's median and ECE missing salaries with ECE's median. This is more accurate because salaries vary by department.

### Q13. [Hard] What is data leakage and why is it dangerous? Give two examples.

*Hint:* Think about test data information leaking into the training process.

**Answer:** **Data leakage** occurs when information from outside the training dataset influences the model during training, leading to overly optimistic performance metrics. Examples: (1) **Scaling before splitting:** Fitting StandardScaler on the entire dataset means the scaler's mean/std include test data statistics. (2) **Using future data:** In time series, using tomorrow's stock price as a feature to predict today's is leakage. (3) **Target leakage:** A feature that was computed using the target variable.

Data leakage is dangerous because it makes your model appear much better than it actually is. A model with 99% accuracy during evaluation might only get 60% in production because the leaked information is not available on real new data. Always validate your pipeline to ensure no test information leaks into training.

### Q14. [Medium] Write code to remove duplicate rows from a DataFrame and print how many duplicates were found.

*Hint:* Use df.duplicated().sum() and df.drop_duplicates().

**Answer:** ```
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 2, 3, 3], 'B': [10, 20, 20, 30, 30]})
dupes = df.duplicated().sum()
print(f'Duplicates found: {dupes}')
df_clean = df.drop_duplicates()
print(f'Before: {len(df)} rows, After: {len(df_clean)} rows')
print(df_clean)
```

`duplicated()` marks rows that are exact copies of earlier rows. `drop_duplicates()` keeps the first occurrence and removes subsequent duplicates. Duplicates can bias your model by giving certain samples more weight during training.

### Q15. [Easy] Write code to use train_test_split to split features X and labels y into 80% train and 20% test.

*Hint:* from sklearn.model_selection import train_test_split. Use test_size=0.2.

**Answer:** ```
import numpy as np
from sklearn.model_selection import train_test_split
X = np.array([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]])
y = np.array([0, 1, 0, 1, 0])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(f'Train: {len(X_train)} samples, Test: {len(X_test)} samples')
```

`train_test_split` randomly shuffles and splits the data. test_size=0.2 means 20% goes to test, 80% to train. random_state=42 ensures reproducibility.

### Q16. [Hard] Write code to normalize features using MinMaxScaler, apply it to training data, and transform test data using the same scaler parameters.

*Hint:* scaler.fit_transform(X_train) then scaler.transform(X_test).

**Answer:** ```
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
X = np.array([[10, 1000], [20, 2000], [30, 3000], [40, 4000], [50, 5000]])
y = np.array([0, 0, 1, 1, 1])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
scaler = MinMaxScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
print(f'Train scaled:\n{X_train_scaled.round(3)}')
print(f'Test scaled:\n{X_test_scaled.round(3)}')
```

MinMaxScaler scales to [0, 1] using train data's min/max. Test data uses the SAME min/max from training, so test values might go slightly outside [0, 1]. This is correct -- it simulates real-world deployment where you only know training data's statistics.

### Q17. [Medium] What is a stratified train-test split? When should you use it?

*Hint:* Think about imbalanced datasets where one class is much rarer.

**Answer:** A **stratified split** ensures the class distribution in both train and test sets matches the original dataset. Use `stratify=y` in train_test_split. Use when: the dataset is imbalanced (e.g., 95% class A, 5% class B). Without stratification, the test set might accidentally have 0 samples of class B, making evaluation meaningless.

In a dataset with 1000 samples where only 20 are positive, a random 80/20 split might put all 20 positives in the training set and zero in the test set. Stratified splitting guarantees ~16 positives in train and ~4 in test, preserving the 2% positive ratio.

### Q18. [Hard] Write code to create a box plot that shows the distribution of marks for each department, helping visualize outliers per group.

*Hint:* Use matplotlib's boxplot with grouped data.

**Answer:** ```
import numpy as np, pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
np.random.seed(42)
df = pd.DataFrame({'Dept': np.random.choice(['CSE', 'ECE', 'IT'], 60), 'Marks': np.random.normal(70, 15, 60).round(1)})
df.loc[0, 'Marks'] = 150  # outlier
groups = [group['Marks'].values for name, group in df.groupby('Dept')]
labels = sorted(df['Dept'].unique())
plt.figure(figsize=(8, 5))
plt.boxplot(groups, labels=labels)
plt.title('Marks Distribution by Department')
plt.ylabel('Marks')
plt.savefig('boxplot.png')
print('Boxplot saved')
```

Box plots show median (line), Q1-Q3 (box), whiskers (1.5*IQR), and outliers (dots beyond whiskers). Grouped box plots let you compare distributions across categories and identify department-specific outliers.

### Q19. [Medium] What is the output?

```
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 2, 3]})
print(df.duplicated().sum())
```

*Hint:* duplicated() marks rows that are exact duplicates of earlier rows.

**Answer:** `1`

The row [2] at index 2 is a duplicate of the row [2] at index 1. Only the second occurrence is marked as a duplicate. `sum()` counts the number of True values, giving 1.

### Q20. [Easy] What does 'garbage in, garbage out' mean in the context of Machine Learning?

*Hint:* Think about the quality of data versus the quality of predictions.

**Answer:** It means that if you feed bad data (missing values, errors, outliers, wrong encodings) into an ML model, the model will produce bad predictions, no matter how sophisticated the algorithm is. Good preprocessing ensures good input data, which leads to good model performance.

A state-of-the-art neural network trained on dirty data will underperform a simple logistic regression trained on well-preprocessed data. This is why data scientists spend 60-80% of their time on data cleaning and preprocessing.

## Mixed Questions

### Q1. [Easy] Write code to check the data types of each column in a DataFrame. Why does this matter for preprocessing?

*Hint:* Use df.dtypes. Object type columns need encoding.

**Answer:** ```
import pandas as pd
df = pd.DataFrame({'Name': ['Aarav', 'Priya'], 'Age': [20, 22], 'Salary': [50000.0, 60000.0], 'City': ['Delhi', 'Mumbai']})
print(df.dtypes)
print('\nObject columns need encoding before ML:', list(df.select_dtypes(include='object').columns))
```

Data types tell you which columns are numerical (int64, float64) and which are categorical (object). Categorical columns must be encoded (label or one-hot) before feeding to ML algorithms.

### Q2. [Medium] What is the output?

```
from sklearn.preprocessing import StandardScaler
import numpy as np
X = np.array([[10], [20], [30]])
scaler = StandardScaler()
print(scaler.fit_transform(X).round(4))
```

*Hint:* StandardScaler: z = (x - mean) / std. Mean=20, std=8.165.

**Answer:** `[[-1.2247]
 [ 0.    ]
 [ 1.2247]]`

Mean = (10+20+30)/3 = 20. Std = sqrt(((10-20)^2 + (20-20)^2 + (30-20)^2)/3) = 8.165. Z-scores: (10-20)/8.165 = -1.2247, (20-20)/8.165 = 0, (30-20)/8.165 = 1.2247. After scaling, mean=0 and std=1.

### Q3. [Medium] Priya has a dataset where the 'Income' column ranges from 10000 to 500000 and 'Age' ranges from 18 to 65. Scale both features to [0, 1] range using MinMaxScaler.

*Hint:* MinMaxScaler: x_scaled = (x - min) / (max - min).

**Answer:** ```
import numpy as np
from sklearn.preprocessing import MinMaxScaler
X = np.array([[25, 30000], [40, 200000], [18, 10000], [65, 500000]])
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)
print('Original:\n', X)
print('\nScaled (0-1):\n', X_scaled.round(3))
```

MinMaxScaler transforms: x_new = (x - min) / (max - min). Age 18 maps to 0, Age 65 maps to 1. Income 10000 maps to 0, Income 500000 maps to 1. Both features now have the same scale [0, 1], preventing income from dominating distance calculations.

### Q4. [Hard] Write code to detect outliers using the Z-score method in a dataset. Flag values with |Z| > 2 as outliers.

*Hint:* Z-score = (x - mean) / std. Use numpy operations.

**Answer:** ```
import numpy as np
data = np.array([10, 12, 14, 11, 13, 12, 100, 14, 11, 13])
mean, std = np.mean(data), np.std(data)
z_scores = (data - mean) / std
outliers = data[np.abs(z_scores) > 2]
print(f'Mean: {mean:.1f}, Std: {std:.1f}')
print(f'Z-scores: {z_scores.round(2)}')
print(f'Outliers (|Z| > 2): {outliers}')
```

The Z-score measures how many standard deviations a value is from the mean. Values with |Z| > 2 (or > 3 for a stricter threshold) are considered outliers. The value 100 in this dataset has a Z-score of about 3.16, clearly flagging it as an outlier.

### Q5. [Hard] Rohan is building a fraud detection model. His dataset has 99.5% normal transactions and 0.5% fraudulent. Should he use stratified splitting? What other preprocessing steps should he consider?

*Hint:* Think about class imbalance and its effect on splitting and modeling.

**Answer:** Yes, Rohan **must use stratified splitting** to ensure both train and test sets contain fraudulent transactions. Additional steps: (1) **SMOTE** or oversampling to balance the minority class in training data. (2) Use **precision/recall/F1** instead of accuracy (a model predicting all 'normal' gets 99.5% accuracy but catches zero fraud). (3) **Scale features** if using distance-based algorithms. (4) Consider **anomaly detection** approaches (unsupervised) as an alternative.

With 0.5% fraud rate, a random 80/20 split of 10000 transactions would put only ~10 fraud cases in the test set. Without stratification, some splits might have zero fraud cases in the test set. Class imbalance also means accuracy is misleading -- you need precision (how many flagged were really fraud) and recall (how many actual frauds were caught).

### Q6. [Easy] Write code to check for and display duplicated rows in a DataFrame.

*Hint:* Use df[df.duplicated(keep=False)] to show all duplicates.

**Answer:** ```
import pandas as pd
df = pd.DataFrame({'Name': ['Aarav', 'Priya', 'Aarav', 'Rohan', 'Priya'], 'Age': [20, 22, 20, 21, 22]})
print(f'Total duplicates: {df.duplicated().sum()}')
print('\nDuplicate rows (all occurrences):')
print(df[df.duplicated(keep=False)])
```

`duplicated(keep=False)` marks ALL occurrences of duplicate rows (not just the second). This helps you see which rows are repeated. Remove duplicates with `df.drop_duplicates()`.

### Q7. [Medium] Write code to use pd.get_dummies to one-hot encode the 'Size' column (['S', 'M', 'L', 'XL']) and the 'Color' column (['Red', 'Blue']) in a single DataFrame.

*Hint:* Pass a list of columns to pd.get_dummies.

**Answer:** ```
import pandas as pd
df = pd.DataFrame({'Size': ['S', 'M', 'L', 'XL'], 'Color': ['Red', 'Blue', 'Red', 'Blue'], 'Price': [100, 200, 300, 400]})
df_encoded = pd.get_dummies(df, columns=['Size', 'Color'], dtype=int)
print(df_encoded)
```

`pd.get_dummies` can encode multiple columns at once. It creates binary columns for each unique value in each specified column. The numerical 'Price' column is left unchanged. This is more efficient than encoding columns one at a time.

### Q8. [Hard] What is the output?

```
from sklearn.preprocessing import MinMaxScaler
import numpy as np
X = np.array([[0], [5], [10]])
scaler = MinMaxScaler()
scaler.fit(X)
print(scaler.transform([[15]]))
```

*Hint:* MinMaxScaler: (x - min) / (max - min). Min=0, Max=10. What happens with 15?

**Answer:** `[[1.5]]`

MinMaxScaler scales using training data's min (0) and max (10). For value 15: (15 - 0) / (10 - 0) = 1.5. The value 1.5 is outside the [0, 1] range because 15 is outside the training data's range. This is correct behavior -- the scaler uses parameters learned from training data.

### Q9. [Hard] Write a function preprocess_dataframe(df) that automatically: detects and fills missing values (median for numeric, mode for categorical), encodes categorical columns with one-hot encoding, and returns the cleaned DataFrame.

*Hint:* Use select_dtypes to separate numeric and categorical columns.

**Answer:** ```
import pandas as pd, numpy as np

def preprocess_dataframe(df):
    df = df.copy()
    for col in df.select_dtypes(include='number').columns:
        df[col] = df[col].fillna(df[col].median())
    for col in df.select_dtypes(include='object').columns:
        df[col] = df[col].fillna(df[col].mode()[0])
    cat_cols = df.select_dtypes(include='object').columns.tolist()
    if cat_cols:
        df = pd.get_dummies(df, columns=cat_cols, dtype=int)
    return df

df = pd.DataFrame({'Age': [25, np.nan, 30], 'City': ['Delhi', None, 'Mumbai'], 'Salary': [50000, 60000, np.nan]})
print('Before:')
print(df)
print('\nAfter:')
print(preprocess_dataframe(df))
```

This reusable function handles the two most common preprocessing tasks: missing value imputation and categorical encoding. `select_dtypes(include='number')` gets numerical columns, `select_dtypes(include='object')` gets categorical columns. This is the kind of utility function you build in real projects.

### Q10. [Medium] What is EDA (Exploratory Data Analysis)? Name 5 things you should check during EDA.

*Hint:* Think about the questions you need to answer before building a model.

**Answer:** EDA is the process of examining data to understand its characteristics before modeling. Five things to check: (1) **Shape and types** (df.shape, df.dtypes). (2) **Missing values** (df.isnull().sum()). (3) **Distribution of features** (histograms, describe()). (4) **Correlations** between features (df.corr(), heatmaps). (5) **Outliers** (box plots, IQR/Z-score). Bonus: class distribution of target variable, duplicate rows.

EDA prevents building models blindly. It reveals data quality issues (missing values, duplicates), informs preprocessing decisions (scaling, encoding), guides feature selection (drop weakly correlated features), and sometimes reveals that the data cannot support the intended model (not enough signal).

## Multiple Choice Questions

### Q1. [Easy] What does df.isnull().sum() return?

**B is correct.** `df.isnull()` creates a boolean DataFrame. `.sum()` sums each column (True=1, False=0), giving the count of missing values per column.

### Q2. [Easy] Which encoding should be used for the column 'Gender' with values ['Male', 'Female']?

**C is correct.** With only 2 categories, both work. Label encoding (Male=0, Female=1) does not create false ordering with binary features. One-hot encoding also works. For more than 2 nominal categories, one-hot is preferred.

### Q3. [Easy] What is the output range of MinMaxScaler?

**B is correct.** MinMaxScaler scales features to the [0, 1] range using (x - min) / (max - min). The minimum value maps to 0, maximum to 1. Option C describes StandardScaler.

### Q4. [Medium] Why is it important to split data before scaling?

**B is correct.** If you scale before splitting, the scaler learns the test set's statistics (mean, std, min, max). This leaks test information into training, making evaluation overly optimistic. Always: split first, fit scaler on train, transform both.

### Q5. [Medium] Which method is more robust to outliers for filling missing numerical values?

**B is correct.** The median is the middle value when sorted and is not affected by extreme values (outliers). The mean is pulled toward outliers. For example, with salaries [30K, 35K, 32K, 1M], mean = 274K (misleading), median = 33.5K (representative).

### Q6. [Medium] What does pd.get_dummies() do?

**B is correct.** `pd.get_dummies()` performs one-hot encoding: it converts each unique value in a categorical column into a separate binary (0/1) column. Despite the confusing name, 'dummies' refers to 'dummy variables' (indicator variables), a statistical term for binary columns.

### Q7. [Medium] In the IQR method, what defines an outlier?

**B is correct.** IQR = Q3 - Q1 (interquartile range). Outliers are values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR. This is based on the data's own distribution, not assumptions about normality.

### Q8. [Hard] Which of the following algorithms does NOT require feature scaling?

**C is correct.** Random Forest (and all tree-based models) splits data based on feature thresholds, so the scale does not matter. KNN uses distance (scale matters), SVM uses margin (scale matters), and neural networks use gradient descent (scale affects convergence).

### Q9. [Hard] What is the purpose of stratify=y in train_test_split()?

**B is correct.** `stratify=y` ensures the proportion of each class in y is preserved in both train and test sets. If the original has 80% class 0 and 20% class 1, both sets will have approximately the same ratio. Essential for imbalanced datasets.

### Q10. [Hard] What happens if you use one-hot encoding on a column with 1000 unique values?

**B is correct.** One-hot encoding creates one column per unique value. With 1000 unique values, you get 1000 sparse columns, massively increasing dimensionality. This causes: slower training, more memory usage, and potentially worse performance. For high-cardinality features, use target encoding, frequency encoding, or embeddings instead.

### Q11. [Easy] What is the first step when you receive a new dataset for ML?

**B is correct.** Always start with EDA: check shape, dtypes, missing values, distributions, correlations. Understanding your data informs all subsequent preprocessing decisions. Training without exploration leads to avoidable mistakes.

### Q12. [Medium] What does df.describe() show?

**C is correct.** `describe()` provides count, mean, standard deviation, minimum, 25th percentile (Q1), median (50%), 75th percentile (Q3), and maximum for each numerical column. It is a quick way to spot issues: if min is negative for an age column, something is wrong.

### Q13. [Hard] Ananya scales her features before train-test splitting. During evaluation, her model shows 95% accuracy. In production, it only gets 80%. What likely happened?

**B is correct.** Scaling before splitting caused data leakage. The scaler's parameters (mean, std or min, max) included test data statistics, making the model's evaluation unrealistically good. In production, the model encounters truly unseen data and performs worse. The 15% gap is a classic symptom of data leakage.

### Q14. [Medium] What type of plot is best for detecting outliers?

**C is correct.** Box plots show the median, Q1, Q3, whiskers (1.5*IQR), and individual outlier points beyond the whiskers. They are specifically designed to highlight the distribution and outliers of numerical data.

### Q15. [Hard] Why should you NOT scale one-hot encoded columns?

**A is correct.** One-hot encoded columns are already binary (0 or 1). Scaling them with StandardScaler would give them values like -0.7 and 1.4, losing the clear binary meaning. Scale only continuous numerical features, not binary indicator columns.

## Coding Challenges

### Challenge 1. Missing Value Report Generator

**Difficulty:** Easy

Write a function missing_report(df) that prints: column name, missing count, missing percentage, and suggested fill strategy (median for numeric, mode for categorical) for each column with missing values.

**Constraints:**

- Use df.dtypes to determine the strategy.

**Sample input:**

```
DataFrame with mixed missing values
```

**Sample output:**

```
Age: 3 missing (15.0%), Suggested: fill with median
City: 2 missing (10.0%), Suggested: fill with mode
```

**Solution:**

```ai-and-machine-learning
import pandas as pd, numpy as np

def missing_report(df):
    for col in df.columns:
        missing = df[col].isnull().sum()
        if missing > 0:
            pct = missing / len(df) * 100
            strategy = 'median' if df[col].dtype in ['int64', 'float64'] else 'mode'
            print(f"{col}: {missing} missing ({pct:.1f}%), Suggested: fill with {strategy}")

df = pd.DataFrame({'Name': ['A', 'B', None, 'D'], 'Age': [20, np.nan, 22, np.nan], 'City': ['Delhi', None, 'Mumbai', 'Pune']})
missing_report(df)
```

### Challenge 2. Automated Preprocessing Pipeline

**Difficulty:** Medium

Write a function preprocess(df, target_col) that: (1) separates features and target, (2) fills missing numerical values with median, (3) fills missing categorical values with mode, (4) one-hot encodes categorical columns, (5) splits 80/20 with stratification, (6) scales features. Return X_train, X_test, y_train, y_test.

**Constraints:**

- Fit scaler on train only. Use random_state=42.

**Sample input:**

```
DataFrame with mixed types, missing values, target column name
```

**Sample output:**

```
Preprocessed train and test arrays ready for ML
```

**Solution:**

```ai-and-machine-learning
import pandas as pd, numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def preprocess(df, target_col):
    df = df.copy()
    for col in df.select_dtypes(include='number').columns:
        df[col] = df[col].fillna(df[col].median())
    for col in df.select_dtypes(include='object').columns:
        df[col] = df[col].fillna(df[col].mode()[0])
    cat_cols = df.select_dtypes(include='object').columns.tolist()
    if target_col in cat_cols: cat_cols.remove(target_col)
    df = pd.get_dummies(df, columns=cat_cols, dtype=int)
    X = df.drop(target_col, axis=1)
    y = df[target_col]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    return X_train, X_test, y_train.values, y_test.values

np.random.seed(42)
df = pd.DataFrame({'Age': [25, np.nan, 30, 22, 28, 35, np.nan, 40, 27, 33], 'City': ['D', 'M', 'D', None, 'M', 'P', 'D', 'M', 'P', 'D'], 'Bought': [1, 0, 1, 0, 1, 0, 1, 0, 0, 1]})
X_tr, X_te, y_tr, y_te = preprocess(df, 'Bought')
print(f'Train: {X_tr.shape}, Test: {X_te.shape}')
```

### Challenge 3. Outlier Detector and Handler

**Difficulty:** Medium

Write a function that: (1) detects outliers using both IQR and Z-score methods, (2) compares results, (3) removes outliers using IQR method, (4) prints statistics before and after removal. Test on: [10, 12, 11, 13, 14, 12, 11, 100, 13, 12, -50, 14].

**Constraints:**

- Implement both methods. Show the comparison.

**Sample input:**

```
data = [10, 12, 11, 13, 14, 12, 11, 100, 13, 12, -50, 14]
```

**Sample output:**

```
IQR outliers: [-50, 100], Z-score outliers: [-50, 100], After removal: mean changed from X to Y
```

**Solution:**

```ai-and-machine-learning
import numpy as np

def detect_outliers(data):
    data = np.array(data)
    Q1, Q3 = np.percentile(data, 25), np.percentile(data, 75)
    IQR = Q3 - Q1
    iqr_mask = (data < Q1 - 1.5*IQR) | (data > Q3 + 1.5*IQR)
    z_scores = (data - np.mean(data)) / np.std(data)
    z_mask = np.abs(z_scores) > 2
    print(f'IQR method: {data[iqr_mask]}')
    print(f'Z-score method: {data[z_mask]}')
    clean = data[~iqr_mask]
    print(f'\nBefore: mean={np.mean(data):.1f}, std={np.std(data):.1f}, n={len(data)}')
    print(f'After: mean={np.mean(clean):.1f}, std={np.std(clean):.1f}, n={len(clean)}')
    return clean

clean_data = detect_outliers([10, 12, 11, 13, 14, 12, 11, 100, 13, 12, -50, 14])
```

### Challenge 4. Complete EDA Report

**Difficulty:** Hard

Write a function eda_report(df) that automatically generates a complete EDA report: (1) shape and types, (2) missing value summary, (3) descriptive statistics, (4) value counts for categorical columns, (5) correlation matrix for numerical columns, (6) saves a visualization with histograms for all numerical columns.

**Constraints:**

- Must handle any DataFrame. Save plot as 'eda_report.png'.

**Sample input:**

```
Any DataFrame with mixed types
```

**Sample output:**

```
Comprehensive EDA report printed and visualization saved
```

**Solution:**

```ai-and-machine-learning
import pandas as pd, numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

def eda_report(df):
    print('=== Shape ===' )
    print(f'{df.shape[0]} rows, {df.shape[1]} columns')
    print('\n=== Data Types ===')
    print(df.dtypes)
    print('\n=== Missing Values ===')
    missing = df.isnull().sum()
    print(missing[missing > 0] if missing.sum() > 0 else 'No missing values')
    print('\n=== Numerical Summary ===')
    print(df.describe().round(2))
    cat_cols = df.select_dtypes(include='object').columns
    if len(cat_cols) > 0:
        print('\n=== Categorical Columns ===')
        for col in cat_cols:
            print(f'\n{col}: {df[col].nunique()} unique values')
            print(df[col].value_counts().head())
    num_cols = df.select_dtypes(include='number').columns
    if len(num_cols) > 1:
        print('\n=== Correlations ===')
        print(df[num_cols].corr().round(3))
    if len(num_cols) > 0:
        n = len(num_cols)
        fig, axes = plt.subplots(1, n, figsize=(4*n, 4))
        if n == 1: axes = [axes]
        for i, col in enumerate(num_cols):
            axes[i].hist(df[col].dropna(), bins=15, color='#a855f7', edgecolor='black')
            axes[i].set_title(col)
        plt.tight_layout()
        plt.savefig('eda_report.png')
        print('\nHistograms saved as eda_report.png')

np.random.seed(42)
df = pd.DataFrame({'Age': np.random.randint(18, 60, 50).astype(float), 'Salary': np.random.uniform(20000, 100000, 50).round(0), 'Dept': np.random.choice(['CSE', 'ECE', 'IT'], 50)})
df.loc[5, 'Age'] = np.nan
eda_report(df)
```

### Challenge 5. Feature Engineering: Create Derived Features

**Difficulty:** Hard

Given a student DataFrame with columns [Name, Math, Science, English, Attendance], create the following derived features: (1) Total marks, (2) Average marks, (3) Grade (A/B/C/F), (4) Attendance_Category (Low/Medium/High), (5) Is_Top_Performer (True if avg > 85 and attendance > 90). Print the enhanced DataFrame.

**Constraints:**

- Use Pandas operations. No manual row-by-row computation.

**Sample input:**

```
5 students with marks and attendance data
```

**Sample output:**

```
Enhanced DataFrame with 5 new derived features
```

**Solution:**

```ai-and-machine-learning
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram'],
    'Math': [92, 78, 45, 88, 95],
    'Science': [88, 82, 50, 91, 90],
    'English': [85, 90, 55, 86, 88],
    'Attendance': [95, 75, 60, 92, 98]
})

subjects = ['Math', 'Science', 'English']
df['Total'] = df[subjects].sum(axis=1)
df['Average'] = (df['Total'] / 3).round(1)
df['Grade'] = df['Average'].apply(lambda x: 'A' if x >= 85 else 'B' if x >= 70 else 'C' if x >= 50 else 'F')
df['Att_Category'] = pd.cut(df['Attendance'], bins=[0, 70, 85, 100], labels=['Low', 'Medium', 'High'])
df['Is_Top'] = (df['Average'] > 85) & (df['Attendance'] > 90)

print(df.to_string(index=False))
```

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/data-preprocessing-and-eda/*
