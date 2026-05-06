---
title: "Practice: Feature Engineering and Feature Selection"
description: "52 practice problems for Feature Engineering and Feature Selection in AI and Machine Learning"
slug: feature-engineering-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/feature-engineering/practice
category: "AI and Machine Learning"
---
# Practice: Feature Engineering and Feature Selection

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is feature engineering and why is it important?

*Hint:* Think about creating new features from existing data to help models learn better.

**Answer:** Feature engineering is the process of creating new features or transforming existing features to improve ML model performance. It is important because: (1) Models can only learn from the features you provide -- if the right patterns are not in the features, no algorithm can find them. (2) Good features can make simple models outperform complex ones. (3) Raw data is often not in a form algorithms can use directly (dates, text, categories).

The famous ML saying is 'garbage in, garbage out.' Feature engineering transforms raw, messy data into informative features that capture the underlying patterns. It bridges the gap between domain knowledge and algorithmic learning.

### Q2. [Easy] Give three examples of features you could engineer from a 'date_of_birth' column.

*Hint:* Think about age, zodiac sign, and generational cohort.

**Answer:** 1. **age** = current_date - date_of_birth (in years). 2. **birth_month** = month extracted from DOB (captures seasonal patterns). 3. **is_born_in_90s** = binary flag for generational cohort. Other options: birth_day_of_week, birth_quarter, age_group (binned), days_until_next_birthday.

A single date column contains multiple pieces of information. The raw date string is useless to ML algorithms, but extracted numerical features like age, month, and year are highly informative.

### Q3. [Easy] What is the output?

```
import pandas as pd

df = pd.DataFrame({'height_cm': [170, 165, 180], 'weight_kg': [70, 55, 85]})
df['bmi'] = df['weight_kg'] / (df['height_cm']/100)**2
print(df['bmi'].round(1).tolist())
```

*Hint:* BMI = weight / height^2 where height is in meters.

**Answer:** `[24.2, 20.2, 26.2]`

BMI = weight / (height_in_meters)^2. For person 1: 70 / (1.70)^2 = 70 / 2.89 = 24.2. For person 2: 55 / (1.65)^2 = 55 / 2.7225 = 20.2. For person 3: 85 / (1.80)^2 = 85 / 3.24 = 26.2. This is a classic example of creating a medically meaningful feature from two raw measurements.

### Q4. [Easy] What is the output?

```
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.array([[2, 3]])
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)
print(X_poly)
print(poly.get_feature_names_out())
```

*Hint:* Degree 2 creates: original features, squared terms, and interaction terms.

**Answer:** `[[ 2.  3.  4.  6.  9.]]`
`['x0' 'x1' 'x0^2' 'x0 x1' 'x1^2']`

For input [2, 3] with degree=2: x0=2, x1=3, x0^2=4, x0*x1=6, x1^2=9. PolynomialFeatures generates all combinations up to the specified degree. include_bias=False excludes the constant term (1).

### Q5. [Easy] What is the difference between pd.cut() and pd.qcut() in pandas?

*Hint:* One creates equal-width bins, the other creates equal-frequency bins.

**Answer:** `pd.cut()` creates bins of **equal width** -- each bin covers the same range of values (e.g., 0-20, 20-40, 40-60). `pd.qcut()` creates bins of **equal frequency** -- each bin contains approximately the same number of data points (quantile-based). Use cut() when the ranges matter, use qcut() when you want balanced groups.

With incomes [10, 20, 25, 30, 100] and 3 bins: pd.cut gives [10-40, 40-70, 70-100] (4 in first bin, 0 in second, 1 in third). pd.qcut gives roughly equal counts per bin. qcut is better for skewed data.

### Q6. [Easy] What is data leakage in feature engineering? Give one example.

*Hint:* Using information that would not be available at prediction time.

**Answer:** Data leakage occurs when a feature contains information that would not be available at the time you need to make a prediction. **Example**: Predicting whether a customer will churn next month, but using 'total_lifetime_value' which includes future purchases. The model appears accurate during training but fails in production because the future data is not available when making real predictions.

Data leakage inflates training and validation metrics, giving false confidence. The model has not learned generalizable patterns -- it has memorized the leaked information. Always ask: 'At prediction time, would I have access to this feature?'

### Q7. [Medium] What is the output?

```
import pandas as pd
import numpy as np

dates = pd.to_datetime(['2026-01-05', '2026-07-15', '2026-12-25'])
print(dates.month.tolist())
print(dates.dayofweek.tolist())
print((dates.dayofweek >= 5).astype(int).tolist())
```

*Hint:* month gives 1-12, dayofweek gives 0=Monday to 6=Sunday.

**Answer:** `[1, 7, 12]`
`[0, 2, 4]`
`[0, 0, 0]`

January 5, 2026 is a Monday (0), July 15, 2026 is a Wednesday (2), December 25, 2026 is a Friday (4). None are on the weekend (dayofweek >= 5 means Saturday or Sunday), so the is_weekend values are all 0.

### Q8. [Medium] Why do we use sin/cos cyclical encoding for features like hour of the day?

*Hint:* Think about the distance between hour 23 and hour 0.

**Answer:** Hour 23 and hour 0 are only 1 hour apart in reality, but numerically they are 23 units apart. ML algorithms would treat them as very different, which is wrong. Sin/cos encoding maps cyclical values onto a circle: `sin(2*pi*hour/24)` and `cos(2*pi*hour/24)`. In this encoding, hour 23 and hour 0 are close together (both near sin=0, cos=1), correctly representing their temporal proximity.

Cyclical encoding is needed for any feature that wraps around: hour (0-23), day of week (0-6), month (1-12), angle (0-360). Two features (sin and cos) are needed to uniquely encode each value on the circle. Using one alone creates ambiguity (e.g., sin is the same for hour 3 and hour 21).

### Q9. [Medium] Write code to create a correlation matrix for the Iris dataset features and print all pairs with absolute correlation above 0.8.

*Hint:* Use load_iris(), create a DataFrame, compute .corr(), then loop through the upper triangle.

**Answer:** ```
import pandas as pd
from sklearn.datasets import load_iris

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
corr_matrix = df.corr()

print("Feature pairs with |correlation| > 0.8:")
for i in range(len(corr_matrix.columns)):
    for j in range(i+1, len(corr_matrix.columns)):
        if abs(corr_matrix.iloc[i, j]) > 0.8:
            print(f"  {corr_matrix.columns[i]} <-> {corr_matrix.columns[j]}: {corr_matrix.iloc[i, j]:.4f}")
```

We compute the Pearson correlation between all feature pairs. Pairs with |correlation| > 0.8 are highly correlated (redundant). In the Iris dataset, petal length and petal width are highly correlated (~0.96), and sepal length and petal length are also correlated (~0.87). You might consider removing one feature from each highly correlated pair.

### Q10. [Medium] Explain the difference between filter, wrapper, and embedded feature selection methods. Give one example of each.

*Hint:* They differ in whether they are independent of the model, use a model iteratively, or are built into model training.

**Answer:** **Filter methods**: Evaluate features independently of any model. Fast but may miss feature interactions. Example: correlation with target, mutual information, variance threshold. **Wrapper methods**: Use a model to evaluate feature subsets iteratively. More accurate but slower. Example: Recursive Feature Elimination (RFE), forward/backward selection. **Embedded methods**: Feature selection is built into the model training process. Example: Random Forest feature_importances_, Lasso (L1) regularization setting unimportant coefficients to zero.

Filter methods are fast and good for initial screening. Wrapper methods are thorough but computationally expensive. Embedded methods are a middle ground -- they select features as a byproduct of training, combining accuracy and efficiency.

### Q11. [Medium] Write code to use SelectKBest with mutual_info_regression to select the top 4 features from the California housing dataset.

*Hint:* Use fetch_california_housing, fit SelectKBest(mutual_info_regression, k=4), and print selected feature names.

**Answer:** ```
from sklearn.feature_selection import SelectKBest, mutual_info_regression
from sklearn.datasets import fetch_california_housing
import numpy as np

housing = fetch_california_housing()
X, y = housing.data, housing.target

selector = SelectKBest(mutual_info_regression, k=4)
selector.fit(X, y)

scores = selector.scores_
selected_mask = selector.get_support()
selected_features = [housing.feature_names[i] for i in range(len(selected_mask)) if selected_mask[i]]

print("MI scores per feature:")
for name, score in sorted(zip(housing.feature_names, scores), key=lambda x: -x[1]):
    marker = " <-- selected" if name in selected_features else ""
    print(f"  {name}: {score:.4f}{marker}")
print(f"\nSelected: {selected_features}")
```

SelectKBest selects the k features with the highest scores according to a scoring function. mutual_info_regression measures non-linear dependency with the target. The top 4 features are selected and the rest are dropped. This is a quick and effective way to reduce features before training.

### Q12. [Hard] Shreya is building a credit scoring model. She has features: monthly_income, monthly_expenses, credit_limit, and current_balance. What features should she engineer and why?

*Hint:* Think about ratios and financial metrics that banks use.

**Answer:** Shreya should engineer: (1) **savings_ratio** = (income - expenses) / income -- measures how much income is saved, indicating financial stability. (2) **credit_utilization** = current_balance / credit_limit -- the most important factor in credit scoring; high utilization indicates risk. (3) **debt_to_income** = current_balance / monthly_income -- measures how manageable the debt is relative to earnings. (4) **expense_ratio** = monthly_expenses / monthly_income -- how much of income goes to expenses. (5) **available_credit** = credit_limit - current_balance -- raw available credit amount.

Banks and credit bureaus use ratios, not raw numbers. A person earning 1,00,000 with 80,000 balance is different from someone earning 10,00,000 with 80,000 balance. The ratios capture this context. Credit utilization alone is responsible for about 30% of a credit score.

### Q13. [Hard] What is the output?

```
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.array([[1, 2, 3]])
poly = PolynomialFeatures(degree=2, interaction_only=True, include_bias=False)
X_poly = poly.fit_transform(X)
print(f"Shape: {X_poly.shape}")
print(f"Features: {poly.get_feature_names_out()}")
```

*Hint:* interaction_only=True means no squared terms (x0^2, x1^2, x2^2), only cross-terms.

**Answer:** `Shape: (1, 6)`
`Features: ['x0' 'x1' 'x2' 'x0 x1' 'x0 x2' 'x1 x2']`

With interaction_only=True, PolynomialFeatures skips squared terms and only generates cross-product interactions. For 3 features: the 3 originals plus C(3,2)=3 interactions = 6 total. Without interaction_only, it would also include x0^2, x1^2, x2^2, making 9 features.

### Q14. [Hard] What is mutual information and why is it better than correlation for feature selection?

*Hint:* Correlation only captures linear relationships. Mutual information captures any dependency.

**Answer:** Mutual information (MI) measures the amount of information that knowing one variable provides about another. It captures **any type of statistical dependency** (linear, quadratic, sinusoidal, etc.), not just linear relationships. Correlation (Pearson's r) only measures linear relationships. A feature with a perfect quadratic relationship to the target (y = x^2) has near-zero correlation but high mutual information. MI is always non-negative (0 means independence, higher means more dependent). It is more general but slower to compute and requires more data for reliable estimates.

MI is based on information theory (Shannon entropy). It measures how much the uncertainty about the target decreases when you know the feature value. Correlation can be exactly 0 even when there is a strong non-linear pattern. MI will catch these patterns, making it more reliable for feature selection.

### Q15. [Hard] Write code to apply RFE with cross-validation (RFECV) using a Random Forest on the Wine dataset to find the optimal number of features.

*Hint:* Use RFECV from sklearn.feature_selection with RandomForestClassifier. It automatically finds the best number of features.

**Answer:** ```
from sklearn.feature_selection import RFECV
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_wine
from sklearn.model_selection import StratifiedKFold

wine = load_wine()
X, y = wine.data, wine.target

rfecv = RFECV(
    estimator=RandomForestClassifier(n_estimators=100, random_state=42),
    step=1,
    cv=StratifiedKFold(5),
    scoring='accuracy',
    min_features_to_select=1
)
rfecv.fit(X, y)

print(f"Optimal features: {rfecv.n_features_}")
print(f"Selected features:")
for name, selected in zip(wine.feature_names, rfecv.support_):
    if selected:
        print(f"  {name}")
print(f"\nBest CV accuracy: {rfecv.cv_results_['mean_test_score'].max():.4f}")
```

RFECV combines RFE with cross-validation to automatically determine the optimal number of features. It trains the model, removes the least important feature, re-evaluates with CV, and repeats. The number of features that gives the best CV score is selected. This avoids the need to manually specify how many features to keep.

### Q16. [Easy] What is the output?

```
import pandas as pd

df = pd.DataFrame({'name': ['Aarav Singh', 'Priya Sharma', 'Ravi K']})
df['name_length'] = df['name'].str.len()
df['word_count'] = df['name'].str.split().str.len()
print(df[['name_length', 'word_count']].values.tolist())
```

*Hint:* str.len() counts characters including spaces. str.split().str.len() counts words.

**Answer:** `[[11, 2], [12, 2], [6, 2]]`

'Aarav Singh' has 11 characters and 2 words. 'Priya Sharma' has 12 characters and 2 words. 'Ravi K' has 6 characters and 2 words. These simple text features can be useful for tasks like name entity recognition or form validation.

### Q17. [Medium] What is target encoding and why can it cause data leakage?

*Hint:* Target encoding replaces a category with the mean target value for that category.

**Answer:** Target encoding replaces each categorical value with the **mean of the target variable** for that category. For example, city='Mumbai' might be replaced by the average house price in Mumbai. **Leakage risk**: If computed on the full dataset (including test data), the encoding uses target information from the test set. Even on training data alone, a category with few samples gets an encoding very close to those specific samples' target values, leading to overfitting. Solutions: compute on training data only, use cross-validated target encoding, or add noise/smoothing.

Target encoding is powerful but dangerous. CatBoost uses ordered target encoding internally to avoid this leakage. For manual implementation, use category_encoders.TargetEncoder with cross-validation or smoothing to reduce overfitting on rare categories.

### Q18. [Hard] Write a function that takes a DataFrame with a datetime column and returns 6 extracted features: hour, day_of_week, month, is_weekend, quarter, and cyclical hour encoding (sin and cos).

*Hint:* Use dt accessor for datetime operations. sin/cos encoding: sin(2*pi*hour/24), cos(2*pi*hour/24).

**Answer:** ```
import pandas as pd
import numpy as np

def extract_datetime_features(df, col):
    df = df.copy()
    dt = pd.to_datetime(df[col])
    df['hour'] = dt.dt.hour
    df['day_of_week'] = dt.dt.dayofweek
    df['month'] = dt.dt.month
    df['is_weekend'] = (dt.dt.dayofweek >= 5).astype(int)
    df['quarter'] = dt.dt.quarter
    df['hour_sin'] = np.sin(2 * np.pi * dt.dt.hour / 24).round(4)
    df['hour_cos'] = np.cos(2 * np.pi * dt.dt.hour / 24).round(4)
    return df

df = pd.DataFrame({'timestamp': ['2026-01-15 09:30', '2026-06-20 22:00']})
result = extract_datetime_features(df, 'timestamp')
print(result.drop('timestamp', axis=1).to_string())
```

This reusable function extracts 7 features from a single datetime column. Cyclical encoding ensures hour 23 and hour 0 are close in feature space. is_weekend is a binary flag. These features are standard in e-commerce, ride-sharing, and any time-series application.

## Mixed Questions

### Q1. [Easy] What is the output?

```
import pandas as pd

df = pd.DataFrame({'price': [100, 200, 150], 'quantity': [5, 3, 8]})
df['total'] = df['price'] * df['quantity']
df['avg_price'] = df['total'] / df['quantity']
print(df['total'].tolist())
print(df['avg_price'].tolist())
```

*Hint:* total = price * quantity. avg_price = total / quantity = price.

**Answer:** `[500, 600, 1200]`
`[100.0, 200.0, 150.0]`

total is price * quantity: 500, 600, 1200. avg_price is total / quantity, which simplifies back to price: 100, 200, 150. This shows that not all engineered features are useful -- avg_price is identical to price and adds no information.

### Q2. [Easy] What is TF-IDF and when would you use it?

*Hint:* It converts text into numbers by weighing words based on importance.

**Answer:** TF-IDF (Term Frequency - Inverse Document Frequency) converts text documents into numerical vectors. **TF** measures how often a word appears in a document. **IDF** measures how rare the word is across all documents. TF-IDF = TF * IDF. Common words like 'the' get low scores (high TF but low IDF). Distinctive words like 'algorithm' get high scores if they appear often in one document but rarely in others. Use it when you need to convert text data into features for ML models.

TF-IDF is one of the simplest and most effective text feature engineering techniques. It is used in text classification (spam detection, sentiment analysis), document similarity, and search engines. Sklearn provides TfidfVectorizer for easy implementation.

### Q3. [Easy] What is the output?

```
import pandas as pd

df = pd.DataFrame({'age': [15, 28, 45, 62, 35]})
df['age_group'] = pd.cut(df['age'], bins=[0, 18, 35, 60, 100],
                         labels=['Minor', 'Young', 'Adult', 'Senior'])
print(df['age_group'].tolist())
```

*Hint:* Bins are (0,18], (18,35], (35,60], (60,100].

**Answer:** `['Minor', 'Young', 'Adult', 'Senior', 'Young']`

15 falls in (0,18] = Minor. 28 falls in (18,35] = Young. 45 falls in (35,60] = Adult. 62 falls in (60,100] = Senior. 35 falls in (18,35] = Young (35 is included in the right edge of this bin).

### Q4. [Medium] What is the output?

```
import numpy as np

hour = np.array([0, 6, 12, 18, 23])
hour_sin = np.sin(2 * np.pi * hour / 24).round(4)
hour_cos = np.cos(2 * np.pi * hour / 24).round(4)
print(f"Hour 0:  sin={hour_sin[0]}, cos={hour_cos[0]}")
print(f"Hour 23: sin={hour_sin[4]}, cos={hour_cos[4]}")
```

*Hint:* Hour 0 and hour 23 should have similar sin/cos values.

**Answer:** `Hour 0:  sin=0.0, cos=1.0`
`Hour 23: sin=-0.2588, cos=0.9659`

Hour 0: sin(0) = 0, cos(0) = 1. Hour 23: sin(23/24 * 2*pi) = -0.2588, cos(23/24 * 2*pi) = 0.9659. The values for hour 23 are close to hour 0 (sin close to 0, cos close to 1), confirming that cyclical encoding correctly represents their temporal proximity.

### Q5. [Medium] Write code to engineer 5 features from a DataFrame with columns 'length', 'width', and 'height' of shipping boxes.

*Hint:* Think about area, volume, aspect ratios, and surface area.

**Answer:** ```
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'length': [30, 50, 20, 80],
    'width': [20, 30, 15, 40],
    'height': [15, 25, 10, 35]
})

df['volume'] = df['length'] * df['width'] * df['height']
df['surface_area'] = 2 * (df['length']*df['width'] + df['width']*df['height'] + df['length']*df['height'])
df['aspect_ratio_lw'] = df['length'] / df['width']
df['max_dimension'] = df[['length', 'width', 'height']].max(axis=1)
df['is_cubic'] = ((df['length'] == df['width']) & (df['width'] == df['height'])).astype(int)

print(df[['volume', 'surface_area', 'aspect_ratio_lw', 'max_dimension', 'is_cubic']].to_string())
```

From three raw dimensions, we create five domain-relevant features. Volume determines shipping cost. Surface area determines packaging material needed. Aspect ratio indicates box shape (long vs square). Max dimension may determine which vehicle can carry it. is_cubic is a special case flag. Each feature adds information that helps a shipping cost or logistics model.

### Q6. [Medium] Rahul is building a model to predict exam scores. He has features: study_hours, sleep_hours, and attendance_percentage. His model R2 is 0.65. Suggest three engineered features that might improve it.

*Hint:* Think about interactions, ratios, and non-linear transformations that make domain sense.

**Answer:** 1. **study_to_sleep_ratio** = study_hours / sleep_hours -- captures the balance between studying and rest. Too much of either can hurt scores. 2. **study_x_attendance** = study_hours * attendance_percentage -- interaction: studying is more effective if you also attend class. 3. **sleep_deficit** = max(0, 7 - sleep_hours) -- hours below recommended 7 hours; captures that insufficient sleep hurts performance but extra sleep beyond 7 may not help. Other options: study_hours_squared (diminishing returns), is_high_attendance (binary flag for > 80%).

These features encode domain knowledge about how studying, sleeping, and attendance interact. The study-sleep ratio captures the trade-off. The interaction term captures that studying without attending class (or vice versa) is less effective. The sleep deficit captures a threshold effect.

### Q7. [Medium] What is the output?

```
from sklearn.feature_selection import VarianceThreshold
import numpy as np

X = np.array([
    [1, 0, 100],
    [2, 0, 200],
    [3, 0, 150],
    [4, 0, 300],
    [5, 0, 250]
])

selector = VarianceThreshold(threshold=0.0)
X_selected = selector.fit_transform(X)
print(f"Original shape: {X.shape}")
print(f"Selected shape: {X_selected.shape}")
print(f"Removed feature index: {[i for i, s in enumerate(selector.get_support()) if not s]}")
```

*Hint:* VarianceThreshold(threshold=0.0) removes features with zero variance (constant features).

**Answer:** `Original shape: (5, 3)`
`Selected shape: (5, 2)`
`Removed feature index: [1]`

Feature at index 1 (the middle column) has all values equal to 0, so its variance is 0.0. VarianceThreshold with threshold=0.0 removes all features with zero variance. The other two features have non-zero variance and are kept.

### Q8. [Hard] Why is feature selection (fit) on the full dataset before train-test split considered data leakage?

*Hint:* Think about what information from the test set leaks into the feature selection process.

**Answer:** When you fit feature selection on the full dataset (including test data), the selector uses statistical properties of the test set (correlations, variance, mutual information) to decide which features to keep. The selected features are optimized for the combined data, including the test set. This means the test set is no longer a truly unseen evaluation -- the model benefits from having features pre-selected to work well on test data. This inflates test metrics, making the model appear better than it truly is on genuinely new data.

The correct approach: split first, then fit the selector on training data only. Use selector.transform() on test data. This ensures feature selection decisions are based only on training data, and the test set remains a fair evaluation of generalization.

### Q9. [Hard] Write a function that takes a DataFrame with a 'text' column and adds 4 text-based features: word_count, avg_word_length, has_exclamation (binary), and uppercase_ratio (fraction of uppercase letters).

*Hint:* Use str accessor methods: split, len, count, and a lambda for uppercase ratio.

**Answer:** ```
import pandas as pd

def add_text_features(df):
    df = df.copy()
    df['word_count'] = df['text'].str.split().str.len()
    df['avg_word_length'] = df['text'].apply(
        lambda x: sum(len(w) for w in x.split()) / len(x.split())
    ).round(2)
    df['has_exclamation'] = df['text'].str.contains('!').astype(int)
    df['uppercase_ratio'] = df['text'].apply(
        lambda x: sum(1 for c in x if c.isupper()) / len(x)
    ).round(4)
    return df

# Test
df = pd.DataFrame({'text': ['Hello World!', 'this is a test', 'URGENT: Read NOW']})
result = add_text_features(df)
print(result[['word_count', 'avg_word_length', 'has_exclamation', 'uppercase_ratio']].to_string())
```

This function extracts four useful features from raw text. word_count captures text length. avg_word_length can distinguish formal (longer words) from informal text. has_exclamation indicates emphasis or urgency. uppercase_ratio can signal shouting, urgency, or emphasis. These simple features are often surprisingly predictive in sentiment analysis and spam detection.

### Q10. [Hard] Kavitha has a dataset with 50 features. She wants to select features but is unsure whether relationships are linear or non-linear. What strategy should she use?

*Hint:* Use both linear and non-linear methods, then compare results.

**Answer:** Kavitha should use a **multi-method strategy**: (1) Compute **Pearson correlation** with the target to find linearly related features. (2) Compute **mutual information** to find non-linearly related features that correlation might miss. (3) Train a **Random Forest** and use feature_importances_ which capture both linear and non-linear relationships. (4) Run **RFECV** to find the optimal subset. (5) Keep features that are consistently ranked high across multiple methods. Features that appear in the top 10 of all methods are strong candidates; features that only appear in one method warrant further investigation.

No single feature selection method is perfect. Correlation misses non-linear relationships. Mutual information can be noisy with small datasets. Tree importance can be biased toward high-cardinality features. Using multiple methods and looking for consensus gives the most robust feature set.

### Q11. [Hard] What is the output?

```
from sklearn.preprocessing import PolynomialFeatures
import numpy as np

X = np.array([[1, 2]])
poly3 = PolynomialFeatures(degree=3, include_bias=False)
X_poly = poly3.fit_transform(X)
print(f"Features: {X_poly.shape[1]}")
print(poly3.get_feature_names_out())
```

*Hint:* For 2 features with degree 3: all combinations up to degree 3 minus the bias term.

**Answer:** `Features: 9`
`['x0' 'x1' 'x0^2' 'x0 x1' 'x1^2' 'x0^3' 'x0^2 x1' 'x0 x1^2' 'x1^3']`

With 2 features and degree=3: degree 1 gives x0, x1 (2 terms). Degree 2 adds x0^2, x0*x1, x1^2 (3 terms). Degree 3 adds x0^3, x0^2*x1, x0*x1^2, x1^3 (4 terms). Total: 2+3+4 = 9 features. The formula is C(d+p, p) - 1 where d=features and p=degree.

### Q12. [Hard] In a Kaggle competition for house price prediction, Arjun uses raw features and gets rank 500. After extensive feature engineering, he reaches rank 50. What types of features likely made the biggest impact?

*Hint:* Think about domain-specific ratios, spatial features, and temporal features.

**Answer:** The biggest impact likely came from: (1) **Spatial features**: Distance to city center, proximity to schools/hospitals/metro, neighborhood average price (requires joining external data). (2) **Interaction features**: total_sqft * quality_rating, bedrooms_per_floor, bathroom-to-bedroom ratio. (3) **Temporal features**: age_of_property, years_since_renovation, price_trend_in_neighborhood. (4) **Aggregated features**: median_price_in_zipcode, average_sqft_price_in_area (target encoding of location). (5) **Log/power transformations**: log(price), log(area) for skewed distributions. Top Kaggle solutions in house price competitions consistently show that these domain-driven features matter more than algorithm tuning.

Kaggle competitions prove that feature engineering is the primary differentiator. The top 50 solutions in house price competitions typically share similar algorithms (XGBoost/LightGBM) but differ in feature engineering. Spatial features and target-encoded neighborhood features consistently provide the largest accuracy boosts.

## Multiple Choice Questions

### Q1. [Easy] Which of the following is an example of feature engineering?

**Answer:** B

**B is correct.** Creating BMI from height and weight is feature engineering -- deriving a new, meaningful feature from existing ones. Training (A), splitting data (C), and tuning hyperparameters (D) are other ML pipeline steps, not feature engineering.

### Q2. [Easy] What does pd.qcut() do?

**Answer:** B

**B is correct.** pd.qcut() creates bins where each bin contains approximately the same number of observations (quantile-based). pd.cut() (A) creates equal-width bins. qcut is better for skewed data where equal-width bins would create very unbalanced groups.

### Q3. [Easy] What is data leakage?

**Answer:** B

**B is correct.** Data leakage occurs when features contain future information or target-derived information. The model appears accurate during evaluation but fails in production because the leaked information is not available when making real predictions.

### Q4. [Easy] Which method measures both linear and non-linear feature-target relationships?

**Answer:** C

**C is correct.** Mutual information captures any statistical dependency between a feature and the target, including non-linear relationships. Pearson correlation (A) only captures linear relationships.

### Q5. [Easy] What does PolynomialFeatures(degree=2, include_bias=False) create for input features [a, b]?

**Answer:** B

**B is correct.** With degree=2 and include_bias=False, PolynomialFeatures generates the original features, their squares, and their cross-product: [a, b, a^2, ab, b^2]. Option D would be the result with include_bias=True (includes the constant 1).

### Q6. [Medium] Amit has two features with correlation 0.98. What should he consider doing?

**Answer:** B

**B is correct.** Features with 0.98 correlation are nearly identical (redundant). Keeping both adds noise and can cause multicollinearity in linear models without providing additional information. Remove the one that is less correlated with the target or harder to interpret.

### Q7. [Medium] What is Recursive Feature Elimination (RFE)?

**Answer:** B

**B is correct.** RFE trains a model (e.g., Random Forest), ranks features by importance, removes the least important one, retrains, and repeats until the desired number of features remains. It is a wrapper method that uses model performance to guide selection.

### Q8. [Medium] Which of the following is an embedded feature selection method?

**Answer:** C

**C is correct.** Lasso regularization performs feature selection as part of model training by setting unimportant feature coefficients to exactly zero. This is 'embedded' because selection happens during training. Correlation (A), mutual information (B), and variance threshold (D) are filter methods.

### Q9. [Medium] Why is cyclical encoding (sin/cos) used for hour-of-day instead of raw hour values?

**Answer:** C

**C is correct.** Raw hour values treat 0 and 23 as very different (distance of 23), but they are actually 1 hour apart. Sin/cos encoding maps hours onto a circle where 0 and 23 are close. This is important for algorithms using distance (KNN, SVM).

### Q10. [Medium] When should feature selection be performed relative to train-test split?

**Answer:** B

**B is correct.** Feature selection must be fit on training data only to prevent data leakage. Then use the same selected features (transform) on the test set. Fitting on the full dataset (A) leaks test set information into the selection process.

### Q11. [Hard] Priya creates 200 engineered features from 20 original features using PolynomialFeatures(degree=3). Her model performance drops. What is the most likely cause?

**Answer:** B

**B is correct.** With 200 features (many of which are noise) and potentially limited samples, the model overfits to spurious patterns in the training data. The curse of dimensionality makes the feature space too sparse. She should use feature selection after generating polynomial features, or use a lower degree with interaction_only=True.

### Q12. [Hard] Deepak's Random Forest shows that 'customer_id' is the most important feature for predicting churn. What is happening?

**Answer:** B

**B is correct.** Customer ID is a unique identifier with very high cardinality. Tree-based models can create individual splits for each customer, effectively memorizing the training data. This gives high importance but zero generalization. IDs, names, and other unique identifiers should always be removed before training.

### Q13. [Hard] In a text classification task, which feature engineering approach would likely work best?

**Answer:** B

**B is correct.** TF-IDF captures the importance of individual words relative to the corpus, while text statistics capture structural properties (length, complexity). Together they provide both semantic and structural information. Raw character codes (A) are meaningless. Word count alone (C) is too limited. Converting to uppercase (D) adds no useful information.

### Q14. [Hard] What is the advantage of mutual_info_regression over Pearson correlation for feature selection?

**Answer:** C

**C is correct.** Mutual information captures any type of statistical dependency (linear, quadratic, exponential, etc.), while Pearson correlation only detects linear relationships. A feature with a perfect y=x^2 relationship would have near-zero correlation but high mutual information. MI is slower than correlation (not A) and works for continuous targets (not B).

### Q15. [Easy] What is a 'feature' in machine learning?

**Answer:** B

**B is correct.** A feature (also called attribute, variable, or column) is a measurable property of the data that serves as input to the model. Examples: age, income, height, word_count.

### Q16. [Medium] Which of the following is an interaction feature?

**Answer:** C

**C is correct.** An interaction feature is created by combining (typically multiplying) two or more features: area * quality_score captures how area and quality jointly affect the target. Squared (A) and log (D) are single-feature transformations. BMI (B) is a ratio, which is a different type of engineered feature.

### Q17. [Hard] Ankit creates 500 polynomial features from 10 original features. His validation accuracy drops from 85% to 72%. What happened?

**Answer:** B

**B is correct.** Adding 500 features (mostly noise) to a limited dataset causes overfitting. The model memorizes training data patterns in the high-dimensional space that do not generalize. He should use feature selection after generating polynomial features, use a lower degree, or use regularization.

### Q18. [Easy] Which of the following is feature selection (not feature extraction)?

**Answer:** B

**B is correct.** Feature selection chooses a subset of existing features without transforming them. Selecting top 10 by correlation keeps the original features. PCA (A) and autoencoder (D) are feature extraction. Polynomial features (C) is feature creation.

### Q19. [Medium] Neha has a feature 'date_joined' as a string like '2025-03-15'. What should she do before using it in a model?

**Answer:** B

**B is correct.** ML models cannot use raw date strings. Converting to datetime and extracting numerical features makes temporal information accessible to the model.

### Q20. [Hard] What is the main advantage of tree-based feature importance over correlation for feature selection?

**Answer:** B

**B is correct.** Tree-based importance captures non-linear relationships and interactions between features. Correlation only measures linear pairwise relationships.

### Q21. [Medium] Which sklearn class automatically finds the optimal number of features using cross-validation during RFE?

**Answer:** B

**B is correct.** RFECV (Recursive Feature Elimination with Cross-Validation) automatically finds the optimal number of features. RFE (A) requires you to specify the count manually.

### Q22. [Easy] What is VarianceThreshold used for?

**Answer:** A

**A is correct.** VarianceThreshold removes features whose variance is below a threshold. Features with zero or near-zero variance carry no useful information.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/feature-engineering/*
