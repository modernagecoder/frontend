---
title: "Practice: Python for AI - NumPy, Pandas, and Matplotlib"
description: "62 practice problems for Python for AI - NumPy, Pandas, and Matplotlib in AI and Machine Learning"
slug: python-for-ai-essentials-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/python-for-ai-essentials/practice/
category: "AI and Machine Learning"
---
# Practice: Python for AI - NumPy, Pandas, and Matplotlib

**Total questions:** 62

## Topic-Specific Questions

### Q1. [Easy] What is the output?

```
import numpy as np
arr = np.array([1, 2, 3]) * 2
print(arr)
```

*Hint:* NumPy performs element-wise multiplication.

**Answer:** `[2 4 6]`

NumPy multiplies every element by 2 simultaneously (vectorized operation). Unlike Python lists where `[1, 2, 3] * 2` repeats the list, NumPy performs element-wise arithmetic.

### Q2. [Easy] What is the output?

```
import numpy as np
print(np.zeros(3))
print(np.ones((2, 2)))
```

*Hint:* zeros creates an array of zeros, ones creates an array of ones.

**Answer:** `[0. 0. 0.]`
`[[1. 1.]
 [1. 1.]]`

`np.zeros(3)` creates a 1D array of three zeros (as floats by default). `np.ones((2, 2))` creates a 2x2 matrix of ones. The tuple `(2, 2)` specifies the shape.

### Q3. [Easy] What is the output?

```
import numpy as np
arr = np.array([10, 20, 30, 40, 50])
print(arr[1:4])
```

*Hint:* NumPy slicing works like Python list slicing: start (inclusive) to end (exclusive).

**Answer:** `[20 30 40]`

Slicing `[1:4]` returns elements at indices 1, 2, 3 (index 4 is excluded). This is the same as Python list slicing. NumPy slices return views (not copies), so modifying a slice modifies the original array.

### Q4. [Easy] Write code to create a NumPy array of numbers from 0 to 9 and compute the sum, mean, and standard deviation.

*Hint:* Use np.arange(10) to create the array, then np.sum(), np.mean(), np.std().

**Answer:** ```
import numpy as np

arr = np.arange(10)
print(f"Array: {arr}")
print(f"Sum: {np.sum(arr)}")
print(f"Mean: {np.mean(arr)}")
print(f"Std: {np.std(arr):.2f}")
```

Output: Sum: 45, Mean: 4.5, Std: 2.87

`np.arange(10)` creates [0, 1, 2, ..., 9]. The sum of 0 to 9 is 45. The mean is 45/10 = 4.5. The standard deviation measures how spread out the values are from the mean.

### Q5. [Medium] What is the output?

```
import numpy as np
arr = np.array([10, 25, 5, 40, 15])
print(arr[arr > 12])
```

*Hint:* This is boolean indexing -- it returns elements where the condition is True.

**Answer:** `[25 40 15]`

`arr > 12` creates a boolean array `[False, True, False, True, True]`. Using this as an index returns only the elements where the value is True: 25, 40, and 15. Boolean indexing is one of NumPy's most powerful features for data filtering.

### Q6. [Medium] What is the output?

```
import numpy as np
arr = np.arange(6).reshape(2, 3)
print(arr)
print(arr.shape)
```

*Hint:* reshape(2, 3) turns a 1D array of 6 elements into a 2x3 matrix.

**Answer:** `[[0 1 2]
 [3 4 5]]`
`(2, 3)`

`np.arange(6)` creates [0, 1, 2, 3, 4, 5]. `reshape(2, 3)` arranges these into 2 rows and 3 columns. The total elements must match: 2 * 3 = 6. The shape attribute confirms the dimensions.

### Q7. [Medium] Write code to compute the dot product of vectors [1, 2, 3] and [4, 5, 6] using NumPy. What is the mathematical calculation?

*Hint:* Dot product = (1*4) + (2*5) + (3*6). Use np.dot().

**Answer:** ```
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
result = np.dot(a, b)
print(f"Dot product: {result}")
print(f"Calculation: (1*4) + (2*5) + (3*6) = {1*4 + 2*5 + 3*6}")
```

Output: Dot product: 32

The dot product multiplies corresponding elements and sums the results: (1*4) + (2*5) + (3*6) = 4 + 10 + 18 = 32. In ML, the dot product is used in linear regression (`y = X @ w + b`), neural networks, and similarity measures.

### Q8. [Easy] Write Pandas code to create a DataFrame with 3 students (Name, Marks) and print only the student with the highest marks.

*Hint:* Use df[df['Marks'] == df['Marks'].max()] or df.loc[df['Marks'].idxmax()].

**Answer:** ```
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan'],
    'Marks': [85, 92, 78]
})

top_student = df.loc[df['Marks'].idxmax()]
print(f"Top student: {top_student['Name']} with {top_student['Marks']} marks")
```

Output: Top student: Priya with 92 marks

`df['Marks'].idxmax()` returns the index of the row with the maximum value in the Marks column. `df.loc[]` then selects that entire row. This is a common pattern for finding extremes in data.

### Q9. [Medium] Write Pandas code to filter students with marks greater than 80 from this DataFrame: Name=['Aarav','Priya','Rohan','Ananya'], Marks=[85, 42, 91, 38].

*Hint:* Use df[df['Marks'] > 80].

**Answer:** ```
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya'],
    'Marks': [85, 42, 91, 38]
})

high_scorers = df[df['Marks'] > 80]
print(high_scorers)
```

Output:
    Name  Marks
0  Aarav     85
2  Rohan     91

The expression `df['Marks'] > 80` creates a boolean Series: [True, False, True, False]. Using this to index the DataFrame returns only rows where the condition is True. The original index (0, 2) is preserved.

### Q10. [Medium] Write code to find and fill missing values in a Pandas DataFrame. Create a DataFrame where the 'Salary' column has two NaN values.

*Hint:* Use np.nan to create missing values, isnull().sum() to detect, and fillna() to fill.

**Answer:** ```
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Employee': ['Aarav', 'Priya', 'Rohan', 'Ananya'],
    'Salary': [50000, np.nan, 60000, np.nan]
})

print("Before:")
print(df)
print(f"Missing values: {df['Salary'].isnull().sum()}")

df['Salary'] = df['Salary'].fillna(df['Salary'].median())
print("\nAfter filling with median:")
print(df)
```

NaN (Not a Number) represents missing values in Pandas. `isnull().sum()` counts them. `fillna()` replaces NaN with the specified value. Using the median is preferred over mean because it is robust to outliers. The median of [50000, 60000] is 55000.

### Q11. [Medium] What is the output?

```
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
print(df.iloc[0:2])
```

*Hint:* iloc uses integer position indexing. 0:2 means positions 0 and 1.

**Answer:** `   A  B
0  1  4
1  2  5`

`iloc[0:2]` selects rows at integer positions 0 and 1 (2 is excluded, following Python slicing convention). This returns the first two rows of the DataFrame.

### Q12. [Hard] Write code to group students by their department and calculate the average marks for each department.

*Hint:* Use df.groupby('Department')['Marks'].mean().

**Answer:** ```
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram', 'Meera'],
    'Department': ['CSE', 'ECE', 'CSE', 'IT', 'ECE', 'CSE'],
    'Marks': [85, 92, 78, 88, 65, 95]
})

avg_by_dept = df.groupby('Department')['Marks'].mean().round(1)
print("Average marks by department:")
print(avg_by_dept)
```

Output: CSE 86.0, ECE 78.5, IT 88.0

`groupby('Department')` groups rows by department. `['Marks'].mean()` computes the average marks for each group. CSE has (85+78+95)/3 = 86.0. This is one of the most used operations in data analysis.

### Q13. [Hard] What is the output?

```
import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A @ B)
```

*Hint:* Matrix multiplication: row of A dot column of B.

**Answer:** `[[19 22]
 [43 50]]`

Matrix multiplication (A @ B): Element [0,0] = 1*5 + 2*7 = 19. Element [0,1] = 1*6 + 2*8 = 22. Element [1,0] = 3*5 + 4*7 = 43. Element [1,1] = 3*6 + 4*8 = 50. Matrix multiplication is the core operation in linear regression and neural networks.

### Q14. [Hard] Write NumPy code to generate 1000 random numbers from a normal distribution with mean=50 and std=10, then find what percentage of values fall between 40 and 60.

*Hint:* Use np.random.normal(). Count values between 40 and 60 using boolean indexing.

**Answer:** ```
import numpy as np
np.random.seed(42)

data = np.random.normal(loc=50, scale=10, size=1000)
in_range = np.sum((data >= 40) & (data <= 60))
pct = in_range / len(data) * 100
print(f"Values between 40-60: {in_range} out of 1000")
print(f"Percentage: {pct:.1f}%")
```

For a normal distribution, approximately 68% of values fall within 1 standard deviation of the mean. With mean=50 and std=10, 1 std range is 40-60. The result should be close to 68%. This demonstrates the 68-95-99.7 rule (empirical rule) that is fundamental to statistics and ML.

### Q15. [Easy] What is the output?

```
import numpy as np
arr = np.array([5, 10, 15, 20])
print(np.sum(arr))
print(np.mean(arr))
```

*Hint:* Sum adds all elements. Mean is sum divided by count.

**Answer:** `50`
`12.5`

Sum: 5 + 10 + 15 + 20 = 50. Mean: 50 / 4 = 12.5. These are basic but essential operations. In ML, you compute means for feature normalization, and sums for loss functions.

### Q16. [Medium] Write Pandas code to add a new column 'Grade' to a DataFrame based on marks: A if marks >= 90, B if >= 75, C if >= 60, else F.

*Hint:* Use df['Marks'].apply(lambda x: ...) with conditional logic.

**Answer:** ```
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya'],
    'Marks': [95, 78, 62, 45]
})

def assign_grade(marks):
    if marks >= 90: return 'A'
    elif marks >= 75: return 'B'
    elif marks >= 60: return 'C'
    else: return 'F'

df['Grade'] = df['Marks'].apply(assign_grade)
print(df)
```

The `apply()` method runs a function on every element of a Series. Here it takes each mark value, passes it through `assign_grade()`, and creates a new column with the results. This is a common pattern for creating derived features in ML.

### Q17. [Hard] What is the output?

```
import numpy as np
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(np.sum(arr, axis=0))
print(np.sum(arr, axis=1))
```

*Hint:* axis=0 sums along columns (down). axis=1 sums along rows (across).

**Answer:** `[5 7 9]`
`[ 6 15]`

`axis=0` sums down each column: [1+4, 2+5, 3+6] = [5, 7, 9]. `axis=1` sums across each row: [1+2+3, 4+5+6] = [6, 15]. Understanding axis is critical for NumPy operations. Think of axis=0 as 'collapse rows' and axis=1 as 'collapse columns'.

### Q18. [Hard] Write code to merge two DataFrames: one with student names and IDs, another with IDs and marks. Join them on the 'ID' column.

*Hint:* Use pd.merge(df1, df2, on='ID').

**Answer:** ```
import pandas as pd

students = pd.DataFrame({
    'ID': [101, 102, 103],
    'Name': ['Aarav', 'Priya', 'Rohan']
})

marks = pd.DataFrame({
    'ID': [101, 102, 103],
    'Marks': [85, 92, 78]
})

result = pd.merge(students, marks, on='ID')
print(result)
```

Output:
    ID   Name  Marks
0  101  Aarav     85
1  102  Priya     92
2  103  Rohan     78

`pd.merge()` combines two DataFrames based on a common column (like SQL JOIN). The 'on' parameter specifies the key column. The default is an inner join (only matching keys). You can also use `how='left'`, `how='right'`, or `how='outer'` for different join types.

### Q19. [Medium] Write Matplotlib code to create a bar chart showing marks of 4 students with student names on x-axis, marks on y-axis, a title, and labels.

*Hint:* Use plt.bar(names, marks), plt.title(), plt.xlabel(), plt.ylabel().

**Answer:** ```
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

names = ['Aarav', 'Priya', 'Rohan', 'Ananya']
marks = [85, 92, 78, 88]

plt.figure(figsize=(8, 5))
plt.bar(names, marks, color=['#a855f7', '#06b6d4', '#f59e0b', '#22c55e'])
plt.title('Student Marks Comparison')
plt.xlabel('Students')
plt.ylabel('Marks')
plt.savefig('bar_chart.png')
print("Bar chart saved")
```

`plt.bar()` creates a vertical bar chart. The first argument is categories (x-axis), the second is values (y-axis). Always add a title and axis labels to make plots self-explanatory. `figsize=(8, 5)` sets the figure to 8 inches wide and 5 inches tall.

### Q20. [Easy] What is the output?

```
import pandas as pd
df = pd.DataFrame({'Name': ['Aarav', 'Priya', 'Rohan'], 'Age': [20, 22, 21]})
print(df.shape)
```

*Hint:* shape returns (rows, columns).

**Answer:** `(3, 2)`

`df.shape` returns a tuple (rows, columns). This DataFrame has 3 rows (students) and 2 columns (Name, Age). Checking shape is always the first thing you do with a new dataset.

## Mixed Questions

### Q1. [Easy] What is the output?

```
import numpy as np
arr = np.array([1, 2, 3, 4])
print(arr + arr)
```

*Hint:* Adding two arrays performs element-wise addition.

**Answer:** `[2 4 6 8]`

NumPy adds corresponding elements: [1+1, 2+2, 3+3, 4+4] = [2, 4, 6, 8]. This is element-wise addition, one of the most basic vectorized operations.

### Q2. [Easy] Write code to create a Pandas Series from a list [10, 20, 30, 40] with custom index ['a', 'b', 'c', 'd'] and print the element at index 'c'.

*Hint:* Use pd.Series(data, index=custom_index).

**Answer:** ```
import pandas as pd

s = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(s)
print(f"\nElement at 'c': {s['c']}")
```

Output: Element at 'c': 30

A Pandas Series is a 1D labeled array. Unlike NumPy arrays which use only integer indices, Series can have custom labels. Accessing by label uses `s['c']`. Each column in a DataFrame is a Series.

### Q3. [Medium] What is the output?

```
import numpy as np
arr = np.array([3, 1, 4, 1, 5, 9])
print(np.max(arr))
print(np.argmax(arr))
```

*Hint:* max returns the maximum value, argmax returns the INDEX of the maximum.

**Answer:** `9`
`5`

`np.max()` returns the largest value: 9. `np.argmax()` returns the INDEX of the largest value: 9 is at index 5. `argmax` is used in classification to convert probability arrays to class predictions.

### Q4. [Medium] What is the output?

```
import pandas as pd
df = pd.DataFrame({'X': [1, 2, 3], 'Y': [4, 5, 6]})
print(df['X'].sum())
print(df.sum())
```

*Hint:* Sum on a column gives a scalar. Sum on a DataFrame gives column-wise sums.

**Answer:** `6`
`X     6
Y    15
dtype: int64`

Summing a single column gives a scalar: 1+2+3 = 6. Summing the entire DataFrame gives the sum of each column: X = 6, Y = 15. Pandas operations default to column-wise (axis=0).

### Q5. [Medium] Write code to create a 3x3 identity matrix using NumPy and verify that multiplying it with any vector gives the same vector.

*Hint:* Use np.eye(3) for the identity matrix. Multiply with np.dot().

**Answer:** ```
import numpy as np

I = np.eye(3)
print("Identity matrix:\n", I)

v = np.array([5, 10, 15])
result = I @ v
print(f"\nI @ {v} = {result}")
print(f"Same as original? {np.array_equal(v, result)}")
```

The identity matrix has 1s on the diagonal and 0s elsewhere. Multiplying any vector by the identity matrix gives the same vector (like multiplying a number by 1). The identity matrix is fundamental in linear algebra and ML: it appears in regularization, matrix inversion, and eigenvalue calculations.

### Q6. [Medium] Write Pandas code to read a DataFrame with some missing values and create a summary showing: total rows, missing values per column, and percentage missing per column.

*Hint:* Use isnull().sum() and divide by len(df) * 100.

**Answer:** ```
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Age': [25, np.nan, 30, np.nan, 28],
    'Salary': [50000, 60000, np.nan, 70000, 55000],
    'City': ['Delhi', None, 'Mumbai', 'Pune', None]
})

print(f"Total rows: {len(df)}")
print(f"\nMissing values:")
for col in df.columns:
    missing = df[col].isnull().sum()
    pct = missing / len(df) * 100
    print(f"  {col}: {missing} ({pct:.0f}%)")
```

Understanding the extent of missing data is crucial before deciding how to handle it. If a column has 5% missing, filling with mean/median is reasonable. If 80% is missing, you might drop that column entirely. This summary is one of the first things you produce in any data analysis.

### Q7. [Hard] What is the output?

```
import numpy as np
arr = np.array([[10, 20, 30], [40, 50, 60]])
print(arr.T)
print(arr.T.shape)
```

*Hint:* T transposes the matrix (swaps rows and columns).

**Answer:** `[[10 40]
 [20 50]
 [30 60]]`
`(3, 2)`

Transpose (`.T`) swaps rows and columns. A (2, 3) matrix becomes (3, 2). Row [10, 20, 30] becomes column [10, 20, 30]. Transpose is used frequently in ML for matrix operations like computing X^T @ X in linear regression.

### Q8. [Hard] Write a complete mini analysis: create a DataFrame with 5 students and their marks in 3 subjects, compute total and average marks, sort by average descending, and display the result.

*Hint:* Use df['Total'] = df[['Math', 'Science', 'English']].sum(axis=1) for row-wise sum.

**Answer:** ```
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram'],
    'Math': [85, 92, 78, 88, 65],
    'Science': [90, 88, 72, 95, 70],
    'English': [78, 95, 80, 82, 75]
})

df['Total'] = df[['Math', 'Science', 'English']].sum(axis=1)
df['Average'] = df['Total'] / 3
df = df.sort_values('Average', ascending=False)
print(df.round(1).to_string(index=False))
```

`.sum(axis=1)` sums across columns (row-wise), giving each student's total. `sort_values('Average', ascending=False)` sorts from highest to lowest average. This type of analysis is common in data science: compute derived features, then rank or filter results.

### Q9. [Easy] Write NumPy code to create a random array of 5 integers between 1 and 100 and print the minimum and maximum values.

*Hint:* Use np.random.randint(1, 101, size=5).

**Answer:** ```
import numpy as np
np.random.seed(42)

arr = np.random.randint(1, 101, size=5)
print(f"Array: {arr}")
print(f"Min: {np.min(arr)}")
print(f"Max: {np.max(arr)}")
```

`np.random.randint(low, high, size)` generates random integers from low (inclusive) to high (exclusive). `np.min()` and `np.max()` find the smallest and largest values. Setting `random_state` or `np.random.seed()` ensures reproducible results.

### Q10. [Hard] What is the output?

```
import pandas as pd
df = pd.DataFrame({'A': [1, 1, 2, 2], 'B': [10, 20, 30, 40]})
result = df.groupby('A')['B'].agg(['sum', 'mean', 'count'])
print(result)
```

*Hint:* GroupBy groups rows by column A, then applies sum, mean, and count to column B.

**Answer:** `   sum  mean  count
A                   
1   30  15.0      2
2   70  35.0      2`

Rows with A=1 have B values [10, 20]: sum=30, mean=15, count=2. Rows with A=2 have B values [30, 40]: sum=70, mean=35, count=2. The `.agg()` method applies multiple aggregation functions at once, which is very useful for data analysis.

### Q11. [Hard] Write code to normalize an array of marks to the range [0, 1] using Min-Max scaling: (x - min) / (max - min).

*Hint:* Find min and max of the array, then apply the formula element-wise.

**Answer:** ```
import numpy as np

marks = np.array([30, 45, 78, 92, 55, 67, 88, 41])
min_val = np.min(marks)
max_val = np.max(marks)
normalized = (marks - min_val) / (max_val - min_val)

print(f"Original marks: {marks}")
print(f"Min: {min_val}, Max: {max_val}")
print(f"Normalized (0-1): {np.round(normalized, 3)}")
print(f"Min normalized: {normalized.min():.1f}, Max normalized: {normalized.max():.1f}")
```

Min-Max normalization scales values to [0, 1]. The minimum value maps to 0, the maximum maps to 1, and everything else is proportionally in between. This is a critical preprocessing step in ML because many algorithms (KNN, SVM, neural networks) are sensitive to feature scales. If one feature ranges 0-100 and another 0-1, the first will dominate distance calculations.

### Q12. [Medium] What is the output?

```
import pandas as pd
df = pd.DataFrame({'A': [1, 2, 3], 'B': ['x', 'y', 'z']})
print(df.dtypes)
```

*Hint:* Pandas infers data types automatically. Numbers become int64, strings become object.

**Answer:** `A     int64
B    object
dtype: object`

Pandas automatically infers data types: integers become `int64`, floats become `float64`, and strings become `object`. Checking `dtypes` is important because ML algorithms require numerical input. Columns with `object` type (strings) need to be encoded before feeding to a model.

## Multiple Choice Questions

### Q1. [Easy] What does np.array([1, 2, 3]) * 3 produce?

**B is correct.** NumPy performs element-wise multiplication: each element is multiplied by 3. This is vectorization -- no loops needed. Option A would be the result if this were a Python list (`[1,2,3] * 3` repeats the list).

### Q2. [Easy] What does df.head() do in Pandas?

**B is correct.** `df.head()` returns the first 5 rows by default. You can pass a number like `df.head(10)` to see more. `df.columns` shows column names. `df.dtypes` shows data types. `df.describe()` shows statistics.

### Q3. [Easy] Which NumPy function creates an array of evenly spaced values between two endpoints?

**B is correct.** `np.linspace(0, 1, 5)` creates 5 evenly spaced values between 0 and 1: [0, 0.25, 0.5, 0.75, 1]. `np.arange()` uses a step size (not a count). `np.zeros()` creates an array of zeros. `np.random.rand()` creates random values.

### Q4. [Easy] What is the output of np.arange(0, 10, 2)?

**B is correct.** `np.arange(start, stop, step)` creates values from 0 to 10 (exclusive) with step 2. The values are [0, 2, 4, 6, 8]. The stop value (10) is excluded, just like Python's range().

### Q5. [Medium] In Pandas, what is the difference between loc and iloc?

**B is correct.** `loc` selects data by label (e.g., `df.loc['row_name', 'col_name']`). `iloc` selects by integer position (e.g., `df.iloc[0, 1]`). Important: `loc` slicing is inclusive on both ends, while `iloc` slicing excludes the end (like Python).

### Q6. [Medium] What does arr.reshape(-1, 1) do to a 1D NumPy array with 5 elements?

**B is correct.** `reshape(-1, 1)` creates a 2D array with 1 column. The `-1` means 'calculate the number of rows automatically' (5 elements / 1 column = 5 rows). This gives shape (5, 1), which is what scikit-learn expects for single-feature input.

### Q7. [Medium] What does df.isnull().sum() return for a Pandas DataFrame?

**B is correct.** `df.isnull()` creates a boolean DataFrame (True where values are missing). `.sum()` sums each column (True counts as 1, False as 0), giving the count of missing values per column. To get the total, use `df.isnull().sum().sum()`.

### Q8. [Medium] What is the correct way to filter a Pandas DataFrame for rows where age > 20 AND marks > 80?

**B is correct.** In Pandas, you must use `&` (not `and`) for element-wise AND, and each condition must be in parentheses. Option A uses Python's `and` which does not work with Series. Option C has incorrect precedence without parentheses.

### Q9. [Medium] What type of plot is best for showing the distribution of a single numerical variable?

**C is correct.** Histograms show the frequency distribution of a single variable by dividing values into bins and counting occurrences. Scatter plots show relationships between two variables. Bar charts compare categories. Pie charts show proportions of a whole.

### Q10. [Hard] What is broadcasting in NumPy?

**B is correct.** Broadcasting is NumPy's mechanism for performing operations between arrays of different shapes. When you write `np.array([1, 2, 3]) + 5`, NumPy broadcasts the scalar 5 to match the array shape, effectively adding [5, 5, 5]. This also works between differently shaped arrays following specific rules.

### Q11. [Hard] What does df.groupby('Department')['Salary'].mean() return?

**B is correct.** `groupby('Department')` groups the rows by unique values in the Department column. `['Salary'].mean()` then computes the average salary within each group. The result is a Series indexed by department names with mean salaries as values.

### Q12. [Hard] What is the shape of np.array([[1, 2, 3], [4, 5, 6]]).T?

**B is correct.** The original array has shape (2, 3) -- 2 rows and 3 columns. Transposing (`.T`) swaps rows and columns, giving shape (3, 2) -- 3 rows and 2 columns. Transpose is essential in ML for operations like computing the normal equation in linear regression: `(X.T @ X)^(-1) @ X.T @ y`.

### Q13. [Easy] What does pd.read_csv('data.csv') do?

**B is correct.** `pd.read_csv()` reads a CSV (Comma Separated Values) file and returns a Pandas DataFrame. This is the most common way to load data in ML projects. Pandas also supports `read_excel()`, `read_json()`, and `read_sql()` for other formats.

### Q14. [Hard] What is the output of np.dot(np.array([1, 2, 3]), np.array([4, 5, 6]))?

**B is correct.** The dot product of two 1D arrays is a scalar: (1*4) + (2*5) + (3*6) = 4 + 10 + 18 = 32. Option A would be element-wise multiplication (`arr1 * arr2`). The dot product is a single number that measures the similarity between two vectors.

### Q15. [Medium] Which Matplotlib function creates a scatter plot?

**C is correct.** `plt.scatter(x, y)` creates a scatter plot showing individual data points. `plt.plot()` creates line charts. `plt.bar()` creates bar charts. `plt.hist()` creates histograms. Scatter plots are essential in ML for visualizing relationships between features.

## Coding Challenges

### Challenge 1. NumPy Statistics Calculator

**Difficulty:** Easy

Create a NumPy array of exam marks: [72, 85, 90, 65, 78, 92, 55, 88, 76, 81]. Calculate and print: count, sum, mean, median, standard deviation, minimum, maximum, and range (max - min).

**Constraints:**

- Use NumPy functions only. Do not use Python built-in functions.

**Sample input:**

```
marks = [72, 85, 90, 65, 78, 92, 55, 88, 76, 81]
```

**Sample output:**

```
Count: 10
Sum: 782
Mean: 78.2
Median: 79.5
Std: 10.79
Min: 55
Max: 92
Range: 37
```

**Solution:**

```ai-and-machine-learning
import numpy as np

marks = np.array([72, 85, 90, 65, 78, 92, 55, 88, 76, 81])

print(f"Count: {len(marks)}")
print(f"Sum: {np.sum(marks)}")
print(f"Mean: {np.mean(marks)}")
print(f"Median: {np.median(marks)}")
print(f"Std: {np.std(marks):.2f}")
print(f"Min: {np.min(marks)}")
print(f"Max: {np.max(marks)}")
print(f"Range: {np.max(marks) - np.min(marks)}")
```

### Challenge 2. Pandas Student Report Card Generator

**Difficulty:** Medium

Create a DataFrame with 6 students, their marks in Math, Science, and English. Add columns for Total, Average, and Grade (A: avg >= 85, B: >= 70, C: >= 55, F: below 55). Sort by Average descending and print the report.

**Constraints:**

- Use Pandas operations. No manual calculations.

**Sample input:**

```
Students: Aarav, Priya, Rohan, Ananya, Vikram, Meera
```

**Sample output:**

```
Complete report card sorted by average marks
```

**Solution:**

```ai-and-machine-learning
import pandas as pd

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram', 'Meera'],
    'Math': [85, 92, 55, 88, 45, 95],
    'Science': [90, 88, 60, 95, 50, 91],
    'English': [78, 95, 52, 82, 48, 88]
})

subjects = ['Math', 'Science', 'English']
df['Total'] = df[subjects].sum(axis=1)
df['Average'] = (df['Total'] / 3).round(1)

def grade(avg):
    if avg >= 85: return 'A'
    if avg >= 70: return 'B'
    if avg >= 55: return 'C'
    return 'F'

df['Grade'] = df['Average'].apply(grade)
df = df.sort_values('Average', ascending=False)
print(df.to_string(index=False))
```

### Challenge 3. Missing Data Handler

**Difficulty:** Medium

Create a DataFrame with intentional missing values (use np.nan). Write a function that: (1) reports missing values per column, (2) fills numerical columns with median, (3) fills categorical columns with mode, (4) verifies no missing values remain.

**Constraints:**

- Handle numerical and categorical columns differently.

**Sample input:**

```
DataFrame with Name, Age (2 NaN), Salary (1 NaN), City (1 None)
```

**Sample output:**

```
Missing values report, filled DataFrame, verification
```

**Solution:**

```ai-and-machine-learning
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'Name': ['Aarav', 'Priya', 'Rohan', 'Ananya', 'Vikram'],
    'Age': [25, np.nan, 30, np.nan, 28],
    'Salary': [50000, 60000, np.nan, 70000, 55000],
    'City': ['Delhi', None, 'Mumbai', 'Pune', None]
})

print('Before cleaning:')
print(df)
print(f'\nMissing values:\n{df.isnull().sum()}')

for col in df.select_dtypes(include='number').columns:
    df[col] = df[col].fillna(df[col].median())

for col in df.select_dtypes(include='object').columns:
    df[col] = df[col].fillna(df[col].mode()[0])

print('\nAfter cleaning:')
print(df)
print(f'\nMissing values remaining: {df.isnull().sum().sum()}')
```

### Challenge 4. Data Visualization Dashboard

**Difficulty:** Hard

Generate synthetic data for 200 students with: hours_studied (1-10), attendance_pct (40-100), and marks (correlated with hours). Create a 2x2 dashboard with: (1) histogram of marks, (2) scatter plot of hours vs marks, (3) bar chart of average marks by attendance category (Low/Medium/High), (4) box plot of marks. Save as 'dashboard.png'.

**Constraints:**

- Use NumPy for data generation, Pandas for manipulation, Matplotlib for plotting.

**Sample input:**

```
np.random.seed(42), 200 synthetic student records
```

**Sample output:**

```
dashboard.png saved with 4 subplots
```

**Solution:**

```ai-and-machine-learning
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

np.random.seed(42)
n = 200
hours = np.random.uniform(1, 10, n)
attendance = np.random.uniform(40, 100, n)
marks = 30 + 5 * hours + np.random.normal(0, 8, n)
marks = np.clip(marks, 0, 100)

df = pd.DataFrame({'Hours': hours.round(1), 'Attendance': attendance.round(1), 'Marks': marks.round(1)})
df['Att_Category'] = pd.cut(df['Attendance'], bins=[0, 60, 80, 100], labels=['Low', 'Medium', 'High'])

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle('Student Performance Dashboard', fontsize=16)

axes[0][0].hist(df['Marks'], bins=20, color='#a855f7', edgecolor='black')
axes[0][0].set_title('Marks Distribution')
axes[0][0].set_xlabel('Marks')

axes[0][1].scatter(df['Hours'], df['Marks'], alpha=0.5, c='#06b6d4', s=30)
axes[0][1].set_title('Study Hours vs Marks')
axes[0][1].set_xlabel('Hours Studied')
axes[0][1].set_ylabel('Marks')

avg_by_att = df.groupby('Att_Category')['Marks'].mean()
axes[1][0].bar(avg_by_att.index.astype(str), avg_by_att.values, color=['#ef4444', '#f59e0b', '#22c55e'])
axes[1][0].set_title('Avg Marks by Attendance')

axes[1][1].boxplot(df['Marks'])
axes[1][1].set_title('Marks Box Plot')

plt.tight_layout()
plt.savefig('dashboard.png', dpi=100)
print('Dashboard saved as dashboard.png')
```

### Challenge 5. Matrix Operations for ML

**Difficulty:** Hard

Implement the following using NumPy: (1) Create a 3x3 matrix A and a 3x1 vector b. (2) Compute A transposed. (3) Compute A @ b (matrix-vector multiplication). (4) Compute the inverse of A using np.linalg.inv(). (5) Verify that A @ A_inv equals the identity matrix (use np.allclose).

**Constraints:**

- Use NumPy's linalg module. Round results to 2 decimal places.

**Sample input:**

```
A = [[2, 1, 0], [1, 3, 1], [0, 1, 2]], b = [[1], [2], [3]]
```

**Sample output:**

```
Transpose, product, inverse, and identity verification
```

**Solution:**

```ai-and-machine-learning
import numpy as np

A = np.array([[2, 1, 0], [1, 3, 1], [0, 1, 2]])
b = np.array([[1], [2], [3]])

print('Matrix A:\n', A)
print('\nA transposed:\n', A.T)
print('\nA @ b:\n', A @ b)

A_inv = np.linalg.inv(A)
print('\nA inverse:\n', np.round(A_inv, 2))

identity = A @ A_inv
print('\nA @ A_inv:\n', np.round(identity, 2))
print('\nIs identity matrix?', np.allclose(identity, np.eye(3)))
```

### Challenge 6. Complete Data Analysis: CSV-like Data Pipeline

**Difficulty:** Hard

Simulate reading a dataset: create a DataFrame with 50 employee records (Name, Department, Salary with some NaN, Experience). Perform a complete analysis: (1) show shape and info, (2) handle missing salaries with department-wise median, (3) add 'Salary_Level' column (Low/Medium/High), (4) groupby department and show average salary and count, (5) find the top 3 highest-paid employees.

**Constraints:**

- Use Pandas for all operations. Make the output readable.

**Sample input:**

```
50 synthetic employee records with some missing salaries
```

**Sample output:**

```
Complete analysis report with cleaned data and insights
```

**Solution:**

```ai-and-machine-learning
import pandas as pd
import numpy as np

np.random.seed(42)
n = 50
depts = np.random.choice(['Engineering', 'Marketing', 'Sales', 'HR'], n)
salaries = np.where(depts == 'Engineering', np.random.normal(90000, 15000, n),
           np.where(depts == 'Marketing', np.random.normal(70000, 10000, n),
           np.where(depts == 'Sales', np.random.normal(60000, 12000, n),
           np.random.normal(55000, 8000, n))))

df = pd.DataFrame({
    'Name': [f'Employee_{i}' for i in range(1, n+1)],
    'Department': depts,
    'Salary': salaries.round(0),
    'Experience': np.random.randint(1, 20, n)
})
df.loc[np.random.choice(n, 8, replace=False), 'Salary'] = np.nan

print(f'Shape: {df.shape}')
print(f'Missing salaries: {df["Salary"].isnull().sum()}')

df['Salary'] = df.groupby('Department')['Salary'].transform(lambda x: x.fillna(x.median()))
print(f'Missing after fill: {df["Salary"].isnull().sum()}')

df['Salary_Level'] = pd.cut(df['Salary'], bins=[0, 55000, 80000, float('inf')], labels=['Low', 'Medium', 'High'])

print('\nDepartment Summary:')
print(df.groupby('Department').agg(
    Avg_Salary=('Salary', 'mean'),
    Count=('Salary', 'count')
).round(0))

print('\nTop 3 Highest Paid:')
print(df.nlargest(3, 'Salary')[['Name', 'Department', 'Salary']].to_string(index=False))
```

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/python-for-ai-essentials/*
