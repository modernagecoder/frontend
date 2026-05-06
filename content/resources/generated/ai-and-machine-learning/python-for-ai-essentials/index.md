---
title: "Python for AI - NumPy, Pandas, Matplotlib Tutorial for Machine Learning | Modern Age Coders"
description: "Master NumPy arrays, Pandas DataFrames, and Matplotlib visualizations for AI and Machine Learning. Covers array operations, data manipulation, plotting, and 62 practice questions with runnable Python code."
slug: python-for-ai-essentials
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/python-for-ai-essentials
category: "AI and Machine Learning"
keywords: ["numpy tutorial", "pandas tutorial", "matplotlib tutorial", "python for data science", "python for machine learning", "numpy arrays", "pandas dataframe", "data visualization python", "python ml libraries", "numpy operations"]
---
# Python for AI - NumPy, Pandas, and Matplotlib

**Difficulty:** Beginner  
**Reading time:** 30 min  
**Chapter:** 2  
**Practice questions:** 62

## What Are NumPy, Pandas, and Matplotlib?

Before you can build any AI or ML model, you need to be fluent in three foundational Python libraries. These are the tools that every data scientist and ML engineer uses daily, and mastering them is non-negotiable.

**NumPy (Numerical Python)** is the foundation of all numerical computing in Python. It provides fast, memory-efficient arrays and a massive collection of mathematical functions. Every ML library (scikit-learn, TensorFlow, PyTorch) is built on top of NumPy. When scikit-learn takes your data, it converts it to NumPy arrays internally.

**Pandas (Python Data Analysis Library)** is built on top of NumPy and provides high-level data structures for working with tabular data -- think of it as Excel on steroids. Its core data structure, the DataFrame, lets you read CSV files, filter rows, group data, handle missing values, and perform complex data transformations with simple, readable code.

**Matplotlib** is the foundational plotting library in Python. It lets you create line charts, scatter plots, bar charts, histograms, pie charts, and more. Visualization is crucial in ML because you need to understand your data before training models, and you need to visualize model performance after training.

## Why Are These Libraries Essential for AI/ML?

### 1. ML Runs on Arrays, Not Lists

Python lists are flexible but slow for numerical operations. A NumPy array of 1 million numbers can be multiplied by 2 in milliseconds, while a Python list would need a slow loop. Every ML algorithm internally works with NumPy arrays for speed.

### 2. Real Data Is Messy

Real-world datasets have missing values, duplicates, wrong data types, and inconsistent formatting. Pandas gives you the tools to clean, transform, and prepare data for ML. Data preprocessing typically takes 60-80% of an ML project's time, and Pandas is your primary tool for it.

### 3. You Cannot Build Good Models Without Understanding Your Data

Matplotlib lets you visualize distributions, relationships, outliers, and patterns in your data. A scatter plot might reveal that two features are strongly correlated. A histogram might show that your data is heavily skewed. These insights guide your modeling decisions.

### 4. These Libraries Work Together

NumPy handles the math, Pandas handles the data, Matplotlib handles the visualization, and scikit-learn handles the ML. They are designed to work seamlessly together. A Pandas DataFrame can be plotted directly with Matplotlib, and its values can be extracted as NumPy arrays for scikit-learn.

## Detailed Explanation

### Part 1: NumPy

#### Creating Arrays

NumPy arrays are created using `np.array()`, `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`, and `np.random` functions. Unlike Python lists, NumPy arrays must contain elements of the same data type, which enables fast vectorized operations.

#### Array Operations (Vectorization)

The most powerful feature of NumPy is **vectorization** -- performing operations on entire arrays without writing loops. When you write `arr * 2`, NumPy multiplies every element by 2 in optimized C code. This is 10-100x faster than a Python loop. All arithmetic operators (`+`, `-`, `*`, `/`, `**`) work element-wise on arrays.

#### Broadcasting

Broadcasting is NumPy's way of handling operations between arrays of different shapes. When you add a scalar to an array (`arr + 5`), NumPy "broadcasts" the scalar to match the array's shape. Broadcasting also works between arrays: a (3, 3) array can be added to a (3,) array, with the smaller array being repeated across the rows.

#### Indexing and Slicing

NumPy supports powerful indexing: basic indexing (`arr[0]`), slicing (`arr[1:4]`), boolean indexing (`arr[arr > 5]`), and fancy indexing (`arr[[0, 2, 4]]`). Boolean indexing is especially useful for filtering data in ML.

#### Reshaping

`arr.reshape(rows, cols)` changes the shape of an array without changing its data. This is critical in ML where scikit-learn expects 2D input. `reshape(-1, 1)` converts a 1D array to a column vector. The `-1` means "calculate this dimension automatically."

#### Mathematical Functions

NumPy provides `np.sum()`, `np.mean()`, `np.std()`, `np.min()`, `np.max()`, `np.sqrt()`, `np.exp()`, `np.log()`, and many more. These work on entire arrays and can operate along specific axes (rows or columns).

#### Dot Product and Matrix Multiplication

The dot product (`np.dot()` or `@` operator) is fundamental to ML. Linear regression, neural networks, and many other algorithms are based on matrix multiplication. `np.dot(a, b)` computes the dot product of two arrays.

### Part 2: Pandas

#### Series and DataFrame

A **Series** is a 1D labeled array (like a column in a spreadsheet). A **DataFrame** is a 2D labeled data structure (like a spreadsheet or SQL table). DataFrames are the primary data structure you will use. Each column in a DataFrame is a Series.

#### Reading Data

`pd.read_csv('file.csv')` reads a CSV file into a DataFrame. Pandas also supports Excel (`read_excel`), JSON (`read_json`), SQL (`read_sql`), and many other formats.

#### Exploring Data

`df.head()` shows the first 5 rows. `df.tail()` shows the last 5. `df.info()` shows data types and non-null counts. `df.describe()` shows statistical summaries (mean, std, min, max, quartiles). `df.shape` gives (rows, columns). These are the first commands you run on any new dataset.

#### Selecting Data

Select columns: `df['column_name']` or `df.column_name`. Select rows by label: `df.loc[row_label]`. Select rows by position: `df.iloc[row_index]`. Select with conditions: `df[df['age'] > 20]`.

#### Handling Missing Values

`df.isnull().sum()` counts missing values per column. `df.dropna()` removes rows with missing values. `df.fillna(value)` fills missing values with a specified value (often the mean or median). Handling missing data correctly is crucial for ML.

#### GroupBy and Aggregation

`df.groupby('column').mean()` groups rows by a column and computes the mean of each group. This is essential for understanding patterns in categorical data -- for example, average salary by department.

#### Merge and Join

`pd.merge(df1, df2, on='key')` combines two DataFrames based on a common column, similar to SQL JOIN. This is used when your data is spread across multiple tables.

### Part 3: Matplotlib

#### Basic Plots

`plt.plot(x, y)` creates a line chart. `plt.scatter(x, y)` creates a scatter plot. `plt.bar(categories, values)` creates a bar chart. `plt.hist(data, bins)` creates a histogram. `plt.pie(sizes, labels)` creates a pie chart.

#### Customization

`plt.title()`, `plt.xlabel()`, `plt.ylabel()` add labels. `plt.legend()` adds a legend. `plt.grid(True)` adds a grid. `plt.figure(figsize=(10, 6))` sets the figure size. `plt.savefig('plot.png')` saves the figure to a file.

#### Subplots

`fig, axes = plt.subplots(2, 2)` creates a 2x2 grid of plots. This is useful for comparing multiple visualizations side by side. Each subplot is accessed via `axes[row][col]`.

## Code Examples

### NumPy Basics: Creating and Operating on Arrays

```python
import numpy as np

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.zeros(5)
arr3 = np.ones((2, 3))
arr4 = np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
arr5 = np.linspace(0, 1, 5)      # 5 evenly spaced between 0 and 1

print("Array:", arr1)
print("Zeros:", arr2)
print("Ones (2x3):\n", arr3)
print("Arange:", arr4)
print("Linspace:", arr5)

# Vectorized operations (no loops needed!)
print("\narr1 * 2:", arr1 * 2)
print("arr1 ** 2:", arr1 ** 2)
print("arr1 + 10:", arr1 + 10)
print("Sum:", np.sum(arr1))
print("Mean:", np.mean(arr1))
print("Std Dev:", np.std(arr1).round(2))
```

NumPy provides multiple ways to create arrays. `np.zeros()` and `np.ones()` create arrays filled with 0s or 1s. `np.arange()` is like Python's range but returns an array. `np.linspace()` creates evenly spaced numbers between two endpoints. All arithmetic operations are vectorized, meaning they operate on every element simultaneously without loops.

**Output:**

```
Array: [1 2 3 4 5]
Zeros: [0. 0. 0. 0. 0.]
Ones (2x3):
 [[1. 1. 1.]
 [1. 1. 1.]]
Arange: [0 2 4 6 8]
Linspace: [0.   0.25 0.5  0.75 1.  ]

arr1 * 2: [ 2  4  6  8 10]
arr1 ** 2: [ 1  4  9 16 25]
arr1 + 10: [11 12 13 14 15]
Sum: 15
Mean: 3.0
Std Dev: 1.41
```

### NumPy Indexing, Slicing, and Boolean Filtering

```python
import numpy as np

marks = np.array([85, 42, 91, 38, 76, 55, 67, 29, 93, 44])
print("All marks:", marks)

# Basic indexing and slicing
print("First mark:", marks[0])
print("Last mark:", marks[-1])
print("First 3 marks:", marks[:3])
print("Every other mark:", marks[::2])

# Boolean indexing (filtering)
passed = marks[marks >= 40]
failed = marks[marks < 40]
print("\nPassed (>= 40):", passed)
print("Failed (< 40):", failed)
print("Number passed:", len(passed))

# 2D array indexing
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("\nMatrix:\n", matrix)
print("Row 0:", matrix[0])
print("Element [1][2]:", matrix[1, 2])
print("Column 1:", matrix[:, 1])
```

NumPy indexing is more powerful than Python list indexing. **Boolean indexing** is the most important for ML: `marks[marks >= 40]` returns only elements where the condition is True. For 2D arrays, use `matrix[row, col]` notation. `matrix[:, 1]` selects all rows from column 1. This syntax is used constantly in data preprocessing.

**Output:**

```
All marks: [85 42 91 38 76 55 67 29 93 44]
First mark: 85
Last mark: 44
First 3 marks: [85 42 91]
Every other mark: [85 91 76 67 93]

Passed (>= 40): [85 42 91 76 55 67 93 44]
Failed (< 40): [38 29]
Number passed: 8

Matrix:
 [[1 2 3]
 [4 5 6]
 [7 8 9]]
Row 0: [1 2 3]
Element [1][2]: 6
Column 1: [2 5 8]
```

### NumPy Reshape, Dot Product, and Matrix Multiplication

```python
import numpy as np

# Reshaping - critical for ML
arr = np.arange(1, 13)
print("Original (1D):", arr)
print("Shape:", arr.shape)

reshaped = arr.reshape(3, 4)
print("\nReshaped (3x4):\n", reshaped)
print("Shape:", reshaped.shape)

# Column vector for sklearn
col_vector = arr[:5].reshape(-1, 1)
print("\nColumn vector:\n", col_vector)
print("Shape:", col_vector.shape)

# Dot product (fundamental to ML)
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print("\nDot product (1*4 + 2*5 + 3*6):", np.dot(a, b))

# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print("\nMatrix A:\n", A)
print("Matrix B:\n", B)
print("A @ B:\n", A @ B)
```

`reshape(-1, 1)` is the most common reshape in ML -- it turns a 1D array into a 2D column vector that scikit-learn accepts. The dot product (`np.dot` or `@`) is the foundation of linear models: linear regression computes `y = X @ weights + bias`. Matrix multiplication with `@` follows the rule: rows of A multiplied by columns of B.

**Output:**

```
Original (1D): [ 1  2  3  4  5  6  7  8  9 10 11 12]
Shape: (12,)

Reshaped (3x4):
 [[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
Shape: (3, 4)

Column vector:
 [[1]
 [2]
 [3]
 [4]
 [5]]
Shape: (5, 1)

Dot product (1*4 + 2*5 + 3*6): 32

Matrix A:
 [[1 2]
 [3 4]]
Matrix B:
 [[5 6]
 [7 8]]
A @ B:
 [[19 22]
 [43 50]]
```

### Pandas: Creating DataFrames and Basic Exploration

```python
import pandas as pd

# Create DataFrame from dictionary
data = {
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram'],
    'Age': [20, 22, 21, 23, 20],
    'Branch': ['CSE', 'ECE', 'CSE', 'IT', 'ECE'],
    'CGPA': [8.5, 9.1, 7.8, 8.9, 7.2],
    'Placed': [True, True, False, True, False]
}
df = pd.DataFrame(data)

print("DataFrame:")
print(df)
print("\nShape:", df.shape)
print("\nColumn types:")
print(df.dtypes)
print("\nStatistical summary:")
print(df.describe().round(2))
print("\nBranch value counts:")
print(df['Branch'].value_counts())
```

A DataFrame is created from a dictionary where keys become column names. `df.shape` gives (5, 5) meaning 5 rows and 5 columns. `df.dtypes` shows the data type of each column. `df.describe()` gives count, mean, std, min, max, and quartiles for numerical columns. `value_counts()` counts unique values in a column. These are the first things you check when exploring any dataset.

**Output:**

```
DataFrame:
     Name  Age Branch  CGPA  Placed
0   Aarav   20    CSE   8.5    True
1   Priya   22    ECE   9.1    True
2   Rohan   21    CSE   7.8   False
3  Ananya   23     IT   8.9    True
4  Vikram   20    ECE   7.2   False

Shape: (5, 5)

Column types:
Name       object
Age         int64
Branch     object
CGPA      float64
Placed       bool
dtype: object

Statistical summary:
        Age  CGPA
count  5.00  5.00
mean  21.20  8.30
std    1.30  0.78
min   20.00  7.20
max   23.00  9.10

Branch value counts:
CSE    2
ECE    2
IT     1
```

### Pandas: Filtering, loc/iloc, and GroupBy

```python
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram', 'Meera'],
    'Department': ['CSE', 'ECE', 'CSE', 'IT', 'ECE', 'CSE'],
    'Marks': [85, 92, 78, 88, 65, 95],
    'Attendance': [90, 95, 70, 85, 60, 98]
})

# Filtering rows
print("Students with marks > 80:")
print(df[df['Marks'] > 80])

# Multiple conditions
print("\nCSE students with marks > 80:")
print(df[(df['Department'] == 'CSE') & (df['Marks'] > 80)])

# loc (label-based) and iloc (position-based)
print("\nloc[0:2, 'Name':'Marks']:")
print(df.loc[0:2, 'Name':'Marks'])
print("\niloc[0:2, 0:3]:")
print(df.iloc[0:2, 0:3])

# GroupBy
print("\nAverage marks by department:")
print(df.groupby('Department')['Marks'].mean().round(1))

# Apply function
df['Grade'] = df['Marks'].apply(lambda x: 'A' if x >= 85 else 'B' if x >= 70 else 'C')
print("\nWith grades:")
print(df[['Name', 'Marks', 'Grade']])
```

Filtering with conditions is essential for data analysis. Use `&` for AND and `|` for OR (with parentheses around each condition). `loc` selects by label (inclusive on both ends), while `iloc` selects by integer position (exclusive on the end, like Python slicing). `groupby()` groups data and applies aggregate functions like mean, sum, count. `apply()` applies a custom function to every element in a column.

**Output:**

```
Students with marks > 80:
     Name Department  Marks  Attendance
0   Aarav        CSE     85          90
1   Priya        ECE     92          95
3  Ananya         IT     88          85
5   Meera        CSE     95          98

CSE students with marks > 80:
    Name Department  Marks  Attendance
0  Aarav        CSE     85          90
5  Meera        CSE     95          98

loc[0:2, 'Name':'Marks']:
    Name Department  Marks
0  Aarav        CSE     85
1  Priya        ECE     92
2  Rohan        CSE     78

iloc[0:2, 0:3]:
    Name Department  Marks
0  Aarav        CSE     85
1  Priya        ECE     92

Average marks by department:
Department
CSE    86.0
ECE    78.5
IT     88.0

With grades:
     Name  Marks Grade
0   Aarav     85     A
1   Priya     92     A
2   Rohan     78     B
3  Ananya     88     A
4  Vikram     65     C
5   Meera     95     A
```

### Pandas: Handling Missing Values

```python
import pandas as pd
import numpy as np

# Create DataFrame with missing values
df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram'],
    'Age': [20, np.nan, 21, 23, np.nan],
    'Marks': [85, 92, np.nan, 88, 65],
    'City': ['Delhi', 'Mumbai', None, 'Pune', 'Delhi']
})

print("Original DataFrame:")
print(df)

# Detect missing values
print("\nMissing values per column:")
print(df.isnull().sum())

# Fill missing numerical values with median
df['Age'] = df['Age'].fillna(df['Age'].median())
df['Marks'] = df['Marks'].fillna(df['Marks'].mean())

# Fill missing categorical values with mode
df['City'] = df['City'].fillna(df['City'].mode()[0])

print("\nAfter filling missing values:")
print(df)
print("\nMissing values now:")
print(df.isnull().sum())
```

Missing data is extremely common in real datasets. `isnull().sum()` counts missing values per column. For numerical columns, filling with the **median** (robust to outliers) or **mean** (sensitive to outliers) is standard practice. For categorical columns, filling with the **mode** (most frequent value) is typical. `dropna()` removes rows with missing values entirely, but this loses data. The choice between filling and dropping depends on how much data is missing and why it is missing.

**Output:**

```
Original DataFrame:
     Name   Age  Marks    City
0   Aarav  20.0   85.0   Delhi
1   Priya   NaN   92.0  Mumbai
2   Rohan  21.0    NaN    None
3  Ananya  23.0   88.0    Pune
4  Vikram   NaN   65.0   Delhi

Missing values per column:
Name     0
Age      2
Marks    1
City     1
dtype: int64

After filling missing values:
     Name   Age  Marks    City
0   Aarav  20.0  85.00   Delhi
1   Priya  21.0  92.00  Mumbai
2   Rohan  21.0  82.50   Delhi
3  Ananya  23.0  88.00    Pune
4  Vikram  21.0  65.00   Delhi

Missing values now:
Name     0
Age      0
Marks    0
City     0
dtype: int64
```

### Matplotlib: Creating Multiple Types of Plots

```python
import matplotlib
matplotlib.use('Agg')  # Non-interactive backend
import matplotlib.pyplot as plt
import numpy as np

# Data
students = ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram']
marks = [85, 92, 78, 88, 65]

# Create a 2x2 grid of plots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
fig.suptitle('Student Performance Dashboard', fontsize=16, fontweight='bold')

# Bar chart
colors = ['#a855f7', '#06b6d4', '#f59e0b', '#22c55e', '#ef4444']
axes[0][0].bar(students, marks, color=colors)
axes[0][0].set_title('Marks by Student')
axes[0][0].set_ylabel('Marks')
axes[0][0].axhline(y=np.mean(marks), color='red', linestyle='--', label='Average')
axes[0][0].legend()

# Histogram
np.random.seed(42)
all_marks = np.random.normal(70, 15, 200).clip(0, 100)
axes[0][1].hist(all_marks, bins=15, color='#06b6d4', edgecolor='black', alpha=0.7)
axes[0][1].set_title('Marks Distribution (200 students)')
axes[0][1].set_xlabel('Marks')
axes[0][1].set_ylabel('Frequency')

# Scatter plot
hours = np.array([2, 4, 3, 5, 1, 6, 3.5, 7, 4.5, 8])
scores = np.array([50, 70, 55, 80, 40, 85, 60, 95, 75, 98])
axes[1][0].scatter(hours, scores, color='#a855f7', s=100, edgecolors='black')
axes[1][0].set_title('Study Hours vs Scores')
axes[1][0].set_xlabel('Study Hours')
axes[1][0].set_ylabel('Score')

# Pie chart
branches = ['CSE', 'ECE', 'IT', 'Mech']
counts = [45, 30, 15, 10]
axes[1][1].pie(counts, labels=branches, autopct='%1.0f%%',
               colors=['#a855f7', '#06b6d4', '#f59e0b', '#22c55e'])
axes[1][1].set_title('Students by Branch')

plt.tight_layout()
plt.savefig('student_dashboard.png', dpi=100, bbox_inches='tight')
print("Dashboard saved as 'student_dashboard.png'")
print("Created: bar chart, histogram, scatter plot, and pie chart")
```

`plt.subplots(2, 2)` creates a 2x2 grid of subplots. Bar charts compare values across categories. Histograms show the distribution of a variable. Scatter plots reveal relationships between two variables (here, study hours and scores show a positive correlation). Pie charts show proportions of a whole. `plt.tight_layout()` prevents overlapping. `plt.savefig()` saves the figure to a file.

**Output:**

```
Dashboard saved as 'student_dashboard.png'
Created: bar chart, histogram, scatter plot, and pie chart
```

### Complete Data Analysis Pipeline: NumPy + Pandas + Matplotlib

```python
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

# Generate synthetic student data
np.random.seed(42)
n = 100
data = {
    'Hours_Studied': np.random.uniform(1, 10, n).round(1),
    'Attendance': np.random.uniform(50, 100, n).round(1),
    'Marks': np.random.uniform(30, 100, n).round(1)
}
df = pd.DataFrame(data)

# Analysis with Pandas
print("=== Dataset Overview ===")
print(f"Shape: {df.shape}")
print(f"\nSummary Statistics:")
print(df.describe().round(2))

# Compute correlation
print(f"\n=== Correlations ===")
corr = df.corr().round(3)
print(corr)

# Add Pass/Fail column
df['Result'] = df['Marks'].apply(lambda x: 'Pass' if x >= 40 else 'Fail')
print(f"\n=== Pass/Fail Distribution ===")
print(df['Result'].value_counts())
print(f"\nAverage marks of passed: {df[df['Result']=='Pass']['Marks'].mean():.1f}")
print(f"Average marks of failed: {df[df['Result']=='Fail']['Marks'].mean():.1f}")

# Save analysis plot
fig, ax = plt.subplots(1, 1, figsize=(8, 6))
ax.scatter(df['Hours_Studied'], df['Marks'], alpha=0.6, c='#a855f7')
ax.set_xlabel('Hours Studied')
ax.set_ylabel('Marks')
ax.set_title('Hours Studied vs Marks')
plt.savefig('analysis.png')
print("\nPlot saved as 'analysis.png'")
```

This demonstrates a complete mini data analysis pipeline. NumPy generates synthetic data (simulating real-world randomness). Pandas creates a DataFrame for easy manipulation. We compute descriptive statistics and correlations. We add derived features (Pass/Fail) using `apply()`. Finally, Matplotlib creates a scatter plot to visualize the relationship. This workflow is exactly what you do in the EDA (Exploratory Data Analysis) phase of any ML project.

**Output:**

```
=== Dataset Overview ===
Shape: (100, 3)

Summary Statistics:
       Hours_Studied  Attendance  Marks
count         100.00      100.00 100.00
mean            5.39       74.85  64.97
std             2.68       14.62  20.23
min             1.00       50.30  30.10
max            10.00       99.90  99.80

=== Correlations ===
               Hours_Studied  Attendance  Marks
Hours_Studied          1.000      -0.021  0.048
Attendance            -0.021       1.000 -0.043
Marks                  0.048      -0.043  1.000

=== Pass/Fail Distribution ===
Pass    85
Fail    15

Average marks of passed: 71.2
Average marks of failed: 34.8

Plot saved as 'analysis.png'
```

## Common Mistakes

### Using Python Lists Instead of NumPy Arrays for Math

**Wrong:**

```
# Trying to multiply a list by 2
marks = [85, 92, 78, 88, 65]
result = marks * 2
print(result)  # Repeats the list, not element-wise multiplication!
```

No error, but output is [85, 92, 78, 88, 65, 85, 92, 78, 88, 65] (list repeated, not multiplied)

**Correct:**

```
import numpy as np

marks = np.array([85, 92, 78, 88, 65])
result = marks * 2
print(result)  # [170 184 156 176 130] - element-wise multiplication!
```

Python's `*` operator on lists performs repetition, not element-wise multiplication. `[1, 2] * 2` gives `[1, 2, 1, 2]`. NumPy arrays perform element-wise operations: `np.array([1, 2]) * 2` gives `[2, 4]`. Always use NumPy arrays for numerical computations.

### Forgetting Parentheses in Pandas Multi-Condition Filtering

**Wrong:**

```
import pandas as pd

df = pd.DataFrame({'age': [20, 25, 30], 'marks': [80, 90, 70]})
# Missing parentheses around each condition
result = df[df['age'] > 20 & df['marks'] > 75]
```

ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().

**Correct:**

```
import pandas as pd

df = pd.DataFrame({'age': [20, 25, 30], 'marks': [80, 90, 70]})
# Each condition MUST be in parentheses
result = df[(df['age'] > 20) & (df['marks'] > 75)]
print(result)
```

In Pandas, when combining multiple conditions with `&` (AND) or `|` (OR), each individual condition MUST be wrapped in parentheses. This is because Python's operator precedence evaluates `&` before `>`. Without parentheses, Python tries to compute `20 & df['marks']` first, which causes the error.

### Confusing loc (Label) with iloc (Integer Position)

**Wrong:**

```
import pandas as pd

df = pd.DataFrame({'A': [10, 20, 30]}, index=['x', 'y', 'z'])
print(df.iloc['x'])  # iloc expects integer, not label!
```

TypeError: Cannot index by location index with a non-integer key

**Correct:**

```
import pandas as pd

df = pd.DataFrame({'A': [10, 20, 30]}, index=['x', 'y', 'z'])

# loc uses labels
print("loc['x']:", df.loc['x'].values)  # Uses label 'x'

# iloc uses integer positions
print("iloc[0]:", df.iloc[0].values)     # Uses position 0
```

`loc` selects by label (the index name). `iloc` selects by integer position (0, 1, 2...). With custom string indices, `iloc['x']` fails because iloc expects integers. A key difference: `loc[0:2]` includes index 2 (label-inclusive), while `iloc[0:2]` excludes index 2 (position-exclusive, like Python slicing).

### Modifying a Slice of DataFrame Without .copy()

**Wrong:**

```
import pandas as pd

df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
subset = df[df['A'] > 1]
subset['C'] = subset['A'] * 10  # SettingWithCopyWarning!
```

SettingWithCopyWarning: A value is trying to be set on a copy of a slice from a DataFrame.

**Correct:**

```
import pandas as pd

df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
subset = df[df['A'] > 1].copy()  # Explicit copy
subset['C'] = subset['A'] * 10
print(subset)
```

When you filter a DataFrame, Pandas may return a view (reference to original data) or a copy, depending on the operation. Modifying a view can unexpectedly change the original DataFrame or may not work at all. Using `.copy()` creates an independent copy that you can safely modify. This is one of the most common Pandas gotchas.

### Using plt.show() in Scripts Without Saving First

**Wrong:**

```
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [4, 5, 6])
plt.show()  # Shows the plot but does not save it
# plt.savefig('plot.png')  # This would save a blank image after show()!
```

No error, but calling savefig() after show() saves a blank image because show() clears the figure.

**Correct:**

```
import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [4, 5, 6])
plt.title('My Plot')
plt.savefig('plot.png', dpi=150, bbox_inches='tight')  # Save BEFORE show
plt.show()  # Show after saving
print("Plot saved successfully")
```

In Matplotlib, `plt.show()` displays the figure and then clears it. If you call `plt.savefig()` after `plt.show()`, you get a blank image. Always save before showing. In non-interactive environments (scripts, servers), use `matplotlib.use('Agg')` and only `savefig()` without `show()`.

## Summary

- NumPy provides fast, memory-efficient arrays and vectorized operations. All ML libraries are built on NumPy. Use np.array() to create arrays, and arithmetic operators (+, -, *, /) for element-wise operations without loops.
- NumPy key functions: np.zeros(), np.ones(), np.arange(), np.linspace() for creation. np.sum(), np.mean(), np.std(), np.min(), np.max() for statistics. np.dot() or @ for matrix multiplication.
- NumPy boolean indexing (arr[arr > 5]) is essential for filtering data. reshape(-1, 1) converts 1D arrays to 2D column vectors required by scikit-learn.
- Pandas DataFrame is the primary data structure for tabular data. Create with pd.DataFrame(dict) or pd.read_csv('file.csv'). Explore with .head(), .info(), .describe(), .shape, .dtypes.
- Pandas filtering: df[df['col'] > value] for single condition. df[(cond1) & (cond2)] for multiple conditions (parentheses required). loc selects by label, iloc selects by position.
- Handling missing values: df.isnull().sum() to detect, df.fillna(value) to fill (mean/median for numbers, mode for categories), df.dropna() to remove. GroupBy: df.groupby('col').agg_func().
- Matplotlib creates line plots (plt.plot), scatter plots (plt.scatter), bar charts (plt.bar), histograms (plt.hist), pie charts (plt.pie). Always add titles, labels, and legends for clarity.
- plt.subplots(rows, cols) creates grids of plots for dashboards. plt.savefig() saves figures. Always save before plt.show(). Use figsize parameter to control plot dimensions.
- These three libraries form a pipeline: NumPy handles numerical computation, Pandas handles data manipulation and cleaning, Matplotlib handles visualization. They work seamlessly together.
- In ML projects, you typically spend 60-80% of time on data preparation (Pandas) and exploration (Matplotlib), and only 20-40% on actual model building. Mastering these tools makes you a more effective ML practitioner.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/python-for-ai-essentials/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/python-for-ai-essentials/practice/*
