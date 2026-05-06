---
title: "Practice: Dimensionality Reduction - PCA and t-SNE"
description: "52 practice problems for Dimensionality Reduction - PCA and t-SNE in AI and Machine Learning"
slug: dimensionality-reduction-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/dimensionality-reduction/practice
category: "AI and Machine Learning"
---
# Practice: Dimensionality Reduction - PCA and t-SNE

**Total questions:** 52

## Topic-Specific Questions

### Q1. [Easy] What is dimensionality reduction? Give a simple analogy.

*Hint:* Think of compressing information from many features to fewer features.

**Answer:** Dimensionality reduction transforms high-dimensional data (many features) into lower-dimensional data (fewer features) while preserving as much useful information as possible. **Analogy**: It is like summarizing a 500-page book into a 10-page summary. You lose some details, but the main ideas are preserved.

The key insight is that most datasets have redundancy -- many features are correlated or carry overlapping information. Dimensionality reduction exploits this redundancy to create a compact representation.

### Q2. [Easy] What is the curse of dimensionality?

*Hint:* Think about what happens to data density as the number of features increases exponentially.

**Answer:** The curse of dimensionality refers to problems that arise when working with high-dimensional data: (1) Data becomes extremely sparse because the volume of space grows exponentially with dimensions. (2) Distance between points converges to roughly the same value, making distance-based algorithms ineffective. (3) More training data is needed to maintain the same density, which is often impractical.

With 10 binary features, there are 1,024 possible regions. With 100 features, there are more regions than atoms in the universe. Your limited data points are scattered so thinly that meaningful patterns are hard to find.

### Q3. [Easy] What is the difference between feature selection and feature extraction?

*Hint:* One keeps original features; the other creates new ones.

**Answer:** **Feature selection** chooses a subset of the original features and discards the rest. The selected features are unchanged and remain interpretable. **Feature extraction** creates new features by combining existing ones (e.g., PCA creates linear combinations). The new features are typically less interpretable but can capture more information in fewer dimensions.

Feature selection: pick columns 3, 7, 12 from your dataset. Feature extraction: create new columns that are weighted averages of all original columns. PCA is feature extraction; correlation-based filtering is feature selection.

### Q4. [Easy] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

X = np.array([[1, 2], [3, 4], [5, 6], [7, 8]])
pca = PCA(n_components=2)
pca.fit(X)
print(pca.explained_variance_ratio_.sum())
```

*Hint:* If you keep all components, how much variance is explained?

**Answer:** `1.0`

With n_components=2 on 2D data, PCA keeps all dimensions. No information is lost, so the total explained variance ratio is exactly 1.0 (100%). Dimensionality reduction only occurs when n_components < n_features.

### Q5. [Easy] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

X = np.array([[1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 1]])
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
print(X_pca.shape)
```

*Hint:* n_components=2 reduces 3D data to 2D.

**Answer:** `(4, 2)`

The original data has shape (4, 3): 4 samples with 3 features. PCA with n_components=2 reduces each sample to 2 dimensions, producing output shape (4, 2).

### Q6. [Easy] Why must you standardize data before applying PCA?

*Hint:* PCA finds directions of maximum variance. What happens if one feature has much larger values?

**Answer:** PCA finds directions of maximum variance. If features have different scales (e.g., income in thousands vs age in years), the high-scale feature dominates the variance and the first principal component essentially becomes that feature alone. Standardizing (zero mean, unit variance) ensures all features contribute equally to the principal components.

Without standardization, a feature with values around 50,000 has variance in billions, while a feature with values around 30 has variance in hundreds. PCA would allocate nearly all components to the large-scale feature. StandardScaler fixes this.

### Q7. [Medium] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 10)
pca = PCA(n_components=5)
pca.fit(X)
print(f"Components: {pca.n_components_}")
print(f"Explained variance: {pca.explained_variance_ratio_.sum():.2f}")
```

*Hint:* Random data has variance spread roughly equally across all dimensions.

**Answer:** `Components: 5`
`Explained variance: 0.50` (approximately, around 0.48-0.55)

With random data (no structure), variance is distributed roughly equally across all 10 dimensions. Each dimension carries about 10% of the variance. Keeping 5 out of 10 components captures approximately 50% of the total variance. This is the worst case for PCA -- it works best when variance is concentrated in few directions.

### Q8. [Medium] Explain what `pca.components_` represents and what `pca.explained_variance_ratio_` represents.

*Hint:* One is about the directions; the other is about how much each direction matters.

**Answer:** `pca.components_` is a matrix of shape (n_components, n_features). Each row is a principal component -- a direction in the original feature space. The values (loadings) indicate how much each original feature contributes to that component. `pca.explained_variance_ratio_` is an array of length n_components. Each value indicates the proportion of total variance captured by that component. They sum to less than 1.0 (unless you keep all components).

If PC1 has loadings [0.5, 0.3, 0.8, 0.1] on 4 features, it means feature 3 (loading 0.8) contributes most to this component. If explained_variance_ratio_[0] = 0.72, it means 72% of the data's variation is along this first direction.

### Q9. [Medium] Write code to determine how many PCA components are needed to explain 90% of the variance in the Wine dataset. Use `load_wine()` and `StandardScaler`.

*Hint:* Fit PCA with all components, then find where cumulative variance reaches 0.90.

**Answer:** ```
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_wine
import numpy as np

wine = load_wine()
X_scaled = StandardScaler().fit_transform(wine.data)

pca = PCA()
pca.fit(X_scaled)

cum_var = pca.explained_variance_ratio_.cumsum()
n_90 = np.argmax(cum_var >= 0.90) + 1
print(f"Components for 90% variance: {n_90}")
print(f"Original features: {wine.data.shape[1]}")
print(f"Variance at {n_90} components: {cum_var[n_90-1]:.4f}")
```

We fit PCA with all components, then use cumulative sum to find the first index where variance exceeds 90%. np.argmax on a boolean array returns the index of the first True value. Adding 1 converts from 0-indexed to the count of components.

### Q10. [Medium] What is the perplexity parameter in t-SNE and how does it affect the visualization?

*Hint:* It controls how many neighbors each point considers, affecting local vs global structure.

**Answer:** Perplexity roughly corresponds to the number of effective nearest neighbors each point considers when computing the high-dimensional probability distribution. **Low perplexity (5-10)**: Focuses on very local structure, producing many small, tight clusters. May miss connections between related clusters. **High perplexity (30-50)**: Considers more neighbors, producing fewer and larger clusters that better reflect global structure. May blur fine local details. Typical range: 5-50. Default is 30.

Perplexity is like the resolution knob: low perplexity zooms in on local neighborhoods, high perplexity zooms out to see the bigger picture. The best value depends on dataset size and structure -- always try multiple values.

### Q11. [Medium] Why does t-SNE not have a `transform()` method, and what should you use instead for new data?

*Hint:* t-SNE optimizes all points simultaneously. New points cannot be added without re-running.

**Answer:** t-SNE jointly optimizes the positions of ALL data points to minimize KL divergence. Adding a new point would change the optimal positions of all existing points, so you cannot project a new point without re-fitting on the entire dataset. For new data projection, use **PCA** (linear, has transform()) or **UMAP** (non-linear, has transform()). Both can be fitted once and then applied to new data.

t-SNE is a transductive method (only works on the data it was trained on). PCA and UMAP are inductive methods (learn a transformation that can be applied to new data). In ML pipelines, you always need inductive methods because test data arrives later.

### Q12. [Hard] What is the output?

```
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

np.random.seed(42)
# Highly correlated features: x2 = 2*x1 + noise
x1 = np.random.randn(100)
x2 = 2 * x1 + np.random.randn(100) * 0.1
X = np.column_stack([x1, x2])
X_scaled = StandardScaler().fit_transform(X)

pca = PCA(n_components=2)
pca.fit(X_scaled)
print(f"Variance: {pca.explained_variance_ratio_.round(4)}")
print(f"PC1 captures: {pca.explained_variance_ratio_[0]:.4f}")
```

*Hint:* When two features are nearly perfectly correlated, almost all variance lies along one direction.

**Answer:** `Variance: [0.9975 0.0025]` (approximately)
`PC1 captures: 0.9975`

Since x2 is nearly a linear function of x1 (with very small noise), the two features are highly correlated. Almost all variance lies along the diagonal direction (the correlation axis). PC1 captures ~99.7% of variance, and PC2 captures only ~0.3%. This is exactly when PCA is most effective -- it detects that 2 features can be reduced to 1 with almost no information loss.

### Q13. [Hard] Deepak has a dataset with 500 features for a KNN classifier. Training is slow and accuracy is poor. Explain how PCA can help with both problems.

*Hint:* Think about the curse of dimensionality and how PCA addresses distance computation and noise.

**Answer:** **Speed**: KNN computes distances between the query point and all training points. With 500 features, each distance calculation involves 500 dimensions. PCA reducing to 50 components makes each distance computation 10x faster. **Accuracy**: In 500 dimensions, the curse of dimensionality makes all distances similar (poor discrimination). Many of the 500 features may be noise, which adds random distance that masks the signal. PCA keeps only the components with the most variance (signal) and discards low-variance components (noise), making distances more meaningful and improving KNN's ability to find true neighbors.

PCA provides a double benefit for KNN: computational speedup from fewer dimensions, and accuracy improvement from noise reduction and better distance discrimination. This is why PCA + KNN is one of the most common pipelines in practice.

### Q14. [Easy] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

X = np.array([[1, 0], [0, 1], [1, 1]])
pca = PCA(n_components=1)
X_reduced = pca.fit_transform(X)
print(X_reduced.shape)
print(pca.explained_variance_ratio_.round(4))
```

*Hint:* 3 samples with 2 features reduced to 1 component.

**Answer:** `(3, 1)`
`[0.75]` (approximately)

PCA reduces from 2D to 1D. The first component captures approximately 75% of the total variance. The remaining 25% is lost. Shape changes from (3,2) to (3,1).

### Q15. [Medium] Why is PCA sensitive to outliers? What happens when an outlier is present?

*Hint:* Outliers have extreme values that affect variance calculations.

**Answer:** PCA finds directions of maximum **variance**. Outliers have extreme values that disproportionately inflate the variance along certain directions. A single outlier can dominate the covariance matrix, causing the first principal component to point toward the outlier rather than capturing the true data structure. The resulting components may represent the outlier's influence rather than the underlying patterns. Solutions: remove outliers before PCA, use robust PCA methods, or use algorithms like t-SNE/UMAP that are less sensitive to outliers.

Variance is calculated as the mean of squared deviations. Squaring amplifies extreme values, making outliers have outsized influence. One data point at (1000, 1000) among points clustered around (0, 0) would pull PC1 toward that outlier.

### Q16. [Hard] Write code that applies PCA to the Wine dataset, reconstructs the data using inverse_transform, and computes the reconstruction error for different numbers of components (1, 3, 5, 10, 13).

*Hint:* For each n_components, fit PCA, transform, inverse_transform, and compute MSE between original and reconstructed.

**Answer:** ```
import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_wine

wine = load_wine()
X = StandardScaler().fit_transform(wine.data)

for n in [1, 3, 5, 10, 13]:
    pca = PCA(n_components=n)
    X_pca = pca.fit_transform(X)
    X_recon = pca.inverse_transform(X_pca)
    mse = np.mean((X - X_recon)**2)
    var = pca.explained_variance_ratio_.sum()
    print(f"n={n:2d}: variance={var:.4f}, reconstruction_error={mse:.4f}")
```

As we increase the number of components, more variance is captured and reconstruction error decreases. With all 13 components, reconstruction is perfect (MSE=0). This demonstrates the trade-off: fewer components = faster computation but more information loss.

### Q17. [Hard] Meera applies PCA and finds that 3 components explain 95% of variance in her 100-feature dataset. What does this tell her about the data structure?

*Hint:* The intrinsic dimensionality is much lower than the observed dimensionality.

**Answer:** This tells Meera that her data has **very low intrinsic dimensionality** (approximately 3) despite having 100 features. The 100 features are highly redundant -- they are correlated in ways that confine the data to roughly a 3-dimensional subspace. Most of the 100 features can be expressed as linear combinations of just 3 underlying factors. This is common in datasets where many features measure related aspects of the same underlying phenomenon.

Low intrinsic dimensionality means the data lives on a low-dimensional manifold embedded in the high-dimensional space. This is great news for ML: models can work with 3 features instead of 100, dramatically reducing computation, overfitting risk, and noise.

### Q18. [Hard] Write code to apply PCA to reduce the digits dataset from 64 to 30 features, train a KNN classifier on the reduced data, and compare accuracy with training on the full data.

*Hint:* Use train_test_split, StandardScaler, PCA, and KNeighborsClassifier. Remember to fit scaler and PCA on train only.

**Answer:** ```
from sklearn.decomposition import PCA
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

digits = load_digits()
X, y = digits.data, digits.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_sc = scaler.fit_transform(X_train)
X_test_sc = scaler.transform(X_test)

# Without PCA
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_sc, y_train)
acc_full = knn.score(X_test_sc, y_test)

# With PCA
pca = PCA(n_components=30)
X_train_pca = pca.fit_transform(X_train_sc)
X_test_pca = pca.transform(X_test_sc)
knn_pca = KNeighborsClassifier(n_neighbors=5)
knn_pca.fit(X_train_pca, y_train)
acc_pca = knn_pca.score(X_test_pca, y_test)

print(f"Full features (64): accuracy = {acc_full:.4f}")
print(f"PCA (30 components): accuracy = {acc_pca:.4f}")
print(f"Variance retained: {pca.explained_variance_ratio_.sum():.4f}")
```

The key pattern: fit scaler and PCA on training data only, then transform both train and test. PCA reduces 64 to 30 features while retaining about 95% of variance. Accuracy is comparable or better, and computation is faster.

### Q19. [Hard] Why should you NOT apply PCA before training a Random Forest or XGBoost model?

*Hint:* Think about how tree-based models select features and how PCA transforms the feature space.

**Answer:** Tree-based models (Random Forest, XGBoost) handle high dimensions natively by performing implicit feature selection at each split. They can identify which features matter and ignore the rest. PCA transforms features into linear combinations, which: (1) Makes the feature space harder for trees to split on (axis-aligned splits become less effective). (2) Destroys feature interpretability (you cannot determine feature importance). (3) May mix informative features with noise. Trees do not suffer from the curse of dimensionality or multicollinearity, so PCA provides no benefit for them.

PCA is beneficial for distance-based algorithms (KNN, SVM) and linear models (regression, logistic regression). Tree-based models have built-in feature selection through their splitting mechanism and are not affected by irrelevant features or correlated features.

## Mixed Questions

### Q1. [Easy] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
pca = PCA(n_components=1)
X_reduced = pca.fit_transform(X)
print(X_reduced.shape)
```

*Hint:* 3 samples, 3 features reduced to 1 component.

**Answer:** `(3, 1)`

The original data has 3 samples and 3 features. PCA with n_components=1 reduces each sample to 1 value, giving shape (3, 1).

### Q2. [Easy] Can PCA increase the number of features? Why or why not?

*Hint:* What is the maximum number of components PCA can produce?

**Answer:** No. PCA can produce at most min(n_samples, n_features) components. Setting n_components higher than this raises an error. PCA reduces or maintains dimensionality; it never increases it. The components are derived from the existing feature space.

PCA works by decomposing the covariance matrix, which has rank at most min(n_samples, n_features). There cannot be more independent directions than the smaller of the two dimensions.

### Q3. [Easy] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

X = np.array([[1, 1], [2, 2], [3, 3]])
pca = PCA(n_components=2)
pca.fit(X)
print(pca.explained_variance_ratio_.round(4))
```

*Hint:* All points lie exactly on the line y=x. How many directions have non-zero variance?

**Answer:** `[1. 0.]`

All points lie perfectly on the line y=x. There is only one direction with variance (along y=x). The perpendicular direction has zero variance. PC1 captures 100% of the variance, PC2 captures 0%.

### Q4. [Medium] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

pca = PCA(n_components=0.95)
X = np.random.RandomState(42).randn(100, 20)
pca.fit(X)
print(f"Components selected: {pca.n_components_}")
```

*Hint:* With random data and 20 features, variance is spread evenly. How many components to reach 95%?

**Answer:** `Components selected: 19` (approximately 18-19)

With random data, each of 20 features carries roughly 5% of variance. To reach 95%, you need about 19 components. PCA(n_components=0.95) automatically selects the minimum number of components to explain 95% of variance. With unstructured data, this is nearly all components.

### Q5. [Medium] Nisha applies t-SNE to her dataset and notices that one cluster appears much larger than the others. She concludes those data points are more spread out in the original space. Is she correct?

*Hint:* t-SNE distorts global properties of the data.

**Answer:** No, Nisha is **incorrect**. t-SNE does not preserve cluster sizes or inter-cluster distances. A cluster that appears large in the t-SNE plot may be tight in the original space, and vice versa. t-SNE only reliably preserves **local neighborhood structure** (which points are near which). Cluster sizes, distances between clusters, and shapes in the t-SNE plot should not be interpreted as properties of the original data.

This is one of the most common misconceptions about t-SNE. The algorithm uses a non-linear optimization that can arbitrarily stretch or compress different regions of the space. Only cluster membership (which points group together) is meaningful.

### Q6. [Medium] Write code to apply PCA on the Iris dataset and print which original features contribute most to PC1.

*Hint:* After fitting PCA, check pca.components_[0] for PC1 loadings. The feature with the highest absolute loading contributes most.

**Answer:** ```
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris
import numpy as np

iris = load_iris()
X_scaled = StandardScaler().fit_transform(iris.data)

pca = PCA(n_components=2)
pca.fit(X_scaled)

print("PC1 loadings:")
for name, loading in zip(iris.feature_names, pca.components_[0]):
    print(f"  {name}: {loading:.4f}")

most_important = iris.feature_names[np.argmax(np.abs(pca.components_[0]))]
print(f"\nMost important feature for PC1: {most_important}")
```

pca.components_[0] contains the loadings (weights) of each original feature in PC1. Features with larger absolute loadings contribute more to that principal component. This helps interpret what each component represents.

### Q7. [Medium] Rohit has 10,000 data points with 500 features. He wants to visualize the data in 2D. Should he run t-SNE directly on the 500-dimensional data?

*Hint:* t-SNE is O(n^2) and slow in high dimensions. What preprocessing step would help?

**Answer:** No. Rohit should first apply **PCA to reduce from 500 to 30-50 dimensions**, then apply t-SNE on the PCA output to get 2D. This two-step approach is standard because: (1) t-SNE is O(n^2) and very slow in 500 dimensions. (2) PCA removes noise and redundancy, giving t-SNE cleaner input. (3) The first 30-50 PCA components typically capture 95%+ of the variance. This PCA-then-t-SNE pipeline is used by the original t-SNE authors and is the recommended approach.

Running t-SNE directly on 500 dimensions would be extremely slow and the results might be worse because t-SNE would try to preserve noisy high-dimensional distances. PCA preprocessing speeds up t-SNE significantly and improves the quality of the visualization.

### Q8. [Hard] What is the output?

```
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

np.random.seed(42)
X = np.random.randn(100, 5)
X_scaled = StandardScaler().fit_transform(X)

pca = PCA(n_components=3)
X_pca = pca.fit_transform(X_scaled)
X_reconstructed = pca.inverse_transform(X_pca)
print(f"Original shape: {X_scaled.shape}")
print(f"Reconstructed shape: {X_reconstructed.shape}")
print(f"Reconstruction error: {np.mean((X_scaled - X_reconstructed)**2):.4f}")
```

*Hint:* inverse_transform reconstructs the original space from the reduced representation. Information lost by discarding components becomes reconstruction error.

**Answer:** `Original shape: (100, 5)`
`Reconstructed shape: (100, 5)`
`Reconstruction error: 0.3979` (approximately 0.35-0.45)

inverse_transform projects the 3D PCA data back to the original 5D space. Since 2 components were discarded, some information is lost, resulting in a non-zero reconstruction error. The error is the variance in the discarded components. With random data and 3 out of 5 components, about 40% of variance is lost.

### Q9. [Hard] Explain why the eigenvectors of the covariance matrix give the principal components, and why eigenvalues correspond to the variance along each component.

*Hint:* Think about what the covariance matrix represents and what eigenvectors are.

**Answer:** The covariance matrix captures how each pair of features varies together. Eigenvectors of this matrix are directions in which the data varies independently (uncorrelated). The eigenvector with the largest eigenvalue points in the direction of maximum variance because: the eigenvalue equation **Cv = lambda * v** means projecting the data onto direction v produces variance equal to lambda. Sorting eigenvectors by eigenvalue (descending) gives PC1, PC2, etc., ordered by decreasing variance.

Mathematically, finding the direction of maximum variance is equivalent to finding the eigenvector with the largest eigenvalue of the covariance matrix. This is because the variance of the projection onto direction v is v^T * C * v, which is maximized when v is the leading eigenvector (this follows from the Rayleigh quotient).

### Q10. [Hard] Write code that compares PCA and t-SNE on the digits dataset. Compute how well each method separates the 10 digit classes in 2D by calculating the ratio of between-class variance to within-class variance.

*Hint:* Project to 2D with PCA and t-SNE separately. For each, compute the mean per class, overall mean, then between-class variance (sum of squared distances from class means to overall mean) and within-class variance (sum of squared distances from points to their class mean).

**Answer:** ```
import numpy as np
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from sklearn.datasets import load_digits
from sklearn.preprocessing import StandardScaler

def class_var_ratio(X_2d, y):
    overall_mean = X_2d.mean(axis=0)
    between = 0
    within = 0
    for label in np.unique(y):
        points = X_2d[y == label]
        class_mean = points.mean(axis=0)
        between += len(points) * np.sum((class_mean - overall_mean)**2)
        within += np.sum((points - class_mean)**2)
    return between / within

digits = load_digits()
X_scaled = StandardScaler().fit_transform(digits.data)
y = digits.target

X_pca = PCA(n_components=2).fit_transform(X_scaled)
X_tsne = TSNE(n_components=2, perplexity=30, random_state=42).fit_transform(X_scaled)

print(f"PCA variance ratio: {class_var_ratio(X_pca, y):.4f}")
print(f"t-SNE variance ratio: {class_var_ratio(X_tsne, y):.4f}")
print("Higher ratio = better class separation")
```

The between-class to within-class variance ratio (Fisher's criterion) measures how well-separated classes are. t-SNE should produce a much higher ratio because it optimizes for local neighborhood preservation, creating tight clusters for each digit. PCA, being linear, cannot separate non-linearly structured data as effectively in just 2 dimensions.

### Q11. [Hard] What is UMAP and what are its advantages over t-SNE?

*Hint:* UMAP is newer, faster, and preserves more global structure.

**Answer:** UMAP (Uniform Manifold Approximation and Projection) is a non-linear dimensionality reduction technique that: (1) Is **significantly faster** than t-SNE, especially on large datasets. (2) **Better preserves global structure** -- distances between clusters are more meaningful. (3) Has a **transform() method** for projecting new data (unlike t-SNE). (4) Can produce embeddings in **any number of dimensions** (useful for feature extraction, not just visualization). (5) Is based on solid mathematical theory (Riemannian geometry and algebraic topology).

UMAP has largely replaced t-SNE as the preferred non-linear dimensionality reduction technique because it offers the same quality visualization with better speed, scalability, and the ability to handle new data points. It is available in the umap-learn Python package.

### Q12. [Hard] Sanjay has a linear regression model that suffers from multicollinearity (highly correlated features). How does PCA solve this, and what trade-off does he accept?

*Hint:* PCA produces uncorrelated components. But what happens to interpretability?

**Answer:** PCA creates principal components that are **orthogonal (uncorrelated) by definition**. Even if the original features are highly correlated, the PCA components have zero correlation with each other. This completely eliminates multicollinearity, stabilizing the regression coefficients. The **trade-off**: the original feature names are lost. Instead of interpreting the effect of 'age' or 'income', Sanjay would interpret 'PC1' and 'PC2', which are abstract linear combinations. If interpretability is critical (e.g., medical research, regulatory requirements), PCA may not be acceptable.

The regression using PCA components is called Principal Component Regression (PCR). Each component is uncorrelated, so there is no multicollinearity. But the business question 'how does income affect price?' cannot be answered directly with PCA components.

### Q13. [Medium] What is the output?

```
from sklearn.decomposition import PCA
import numpy as np

X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
pca = PCA(n_components=2)
pca.fit(X)
print(f"Explained variance: {pca.explained_variance_ratio_.round(4)}")
print(f"Total: {pca.explained_variance_ratio_.sum():.4f}")
```

*Hint:* All three features increase together perfectly linearly. How many directions have non-zero variance?

**Answer:** `Explained variance: [1. 0.]`
`Total: 1.0000`

The data lies perfectly on a 1D line (all features increase linearly together). PC1 captures 100% of variance, PC2 captures 0%. This shows that 3 features were perfectly redundant -- 1 component is sufficient.

### Q14. [Easy] What is the difference between PCA and t-SNE in one sentence each?

*Hint:* One is linear for preprocessing, the other is non-linear for visualization.

**Answer:** **PCA**: A linear method that finds directions of maximum variance, used for dimensionality reduction as preprocessing in ML pipelines. **t-SNE**: A non-linear method that preserves local neighborhood structure, used exclusively for 2D/3D visualization of high-dimensional data.

PCA is general-purpose (any number of output dimensions, has transform(), fast). t-SNE is visualization-only (2-3D output, no transform(), slow). They solve different problems and are often used together (PCA first to reduce to 50D, then t-SNE to 2D).

## Multiple Choice Questions

### Q1. [Easy] What does PCA stand for?

**Answer:** B

**B is correct.** PCA stands for Principal Component Analysis. It finds principal components (directions of maximum variance) in the data.

### Q2. [Easy] What is the main purpose of dimensionality reduction?

**Answer:** B

**B is correct.** Dimensionality reduction reduces the number of features while preserving as much useful information as possible. It helps with visualization, speed, and reducing overfitting.

### Q3. [Easy] Which of the following is a consequence of the curse of dimensionality?

**Answer:** B

**B is correct.** In high-dimensional spaces, the ratio of maximum to minimum distance converges to 1 -- all points appear roughly equidistant. This makes distance-based algorithms (KNN, K-Means) ineffective.

### Q4. [Easy] What does the explained variance ratio in PCA tell you?

**Answer:** B

**B is correct.** The explained variance ratio indicates what fraction of the total data variance is captured by each component. If PC1 has ratio 0.72, it captures 72% of the total variance.

### Q5. [Easy] t-SNE is primarily used for:

**Answer:** C

**C is correct.** t-SNE is designed for visualization. It creates 2D or 3D representations that reveal cluster structure. It should not be used for feature extraction (A) because it has no transform() method and distorts global structure.

### Q6. [Medium] Ananya wants to reduce dimensions before training an SVM. Which technique should she use?

**Answer:** B

**B is correct.** PCA is the right choice for SVM preprocessing because: it has transform() for new data, creates uncorrelated features, and reduces dimensions while preserving maximum variance. t-SNE (A) has no transform() method and is for visualization only.

### Q7. [Medium] What does `PCA(n_components=0.95)` do in sklearn?

**Answer:** C

**C is correct.** When n_components is a float between 0 and 1, sklearn interprets it as the target explained variance ratio. It automatically selects the fewest components needed to reach that threshold.

### Q8. [Medium] Which statement about t-SNE is FALSE?

**Answer:** B

**B is FALSE (and therefore the correct answer).** t-SNE does not have a transform() method. It can only produce embeddings for the data it was trained on. All other statements are true.

### Q9. [Medium] Which algorithm should NOT typically be preceded by PCA?

**Answer:** C

**C is correct.** Random Forest handles high dimensions natively through implicit feature selection at each split. PCA can actually hurt tree performance by creating abstract components that are harder to split on. KNN (A), SVM (B), and Logistic Regression (D) all benefit from PCA.

### Q10. [Medium] What is the typical recommended range for the perplexity parameter in t-SNE?

**Answer:** B

**B is correct.** Perplexity typically ranges from 5 to 50. Low values emphasize local structure; high values emphasize global structure. The default in sklearn is 30.

### Q11. [Medium] Vikram applies PCA to a 100-feature dataset and finds that the first 10 components explain 98% of the variance. What does this tell him?

**Answer:** B

**B is correct.** When 10 components capture 98% of 100-dimensional variance, it means the data has low intrinsic dimensionality. The 100 features are highly redundant (correlated), and the data mostly lives in a 10-dimensional subspace. This is an ideal scenario for PCA -- massive dimensionality reduction with minimal information loss.

### Q12. [Hard] Why does t-SNE use a Student's t-distribution in the low-dimensional space instead of a Gaussian?

**Answer:** B

**B is correct.** In high dimensions, a point can have many equidistant neighbors (they spread out in all directions). In 2D, there is not enough room for all these neighbors. The t-distribution's heavier tails allow moderately distant points in 2D to represent large distances in high dimensions, preventing all points from being crushed together (the crowding problem).

### Q13. [Hard] What is the relationship between PCA and the eigendecomposition of the covariance matrix?

**Answer:** B

**B is correct.** PCA decomposes the covariance matrix into eigenvectors (directions of maximum variance = principal components) and eigenvalues (amount of variance in each direction). Sorting eigenvectors by descending eigenvalue gives PC1, PC2, etc. This is the mathematical core of PCA.

### Q14. [Hard] Aisha has 500 samples and 2000 features. She runs PCA. What is the maximum number of non-zero principal components she can get?

**Answer:** C

**C is correct.** The maximum number of non-zero principal components is min(n_samples, n_features) - 1 = min(500, 2000) - 1 = 499. The -1 is because centering the data (subtracting the mean) reduces the rank by 1. In practice, sklearn may return 500 components but the last one will have zero or near-zero variance.

### Q15. [Hard] Which of the following is TRUE about UMAP compared to t-SNE?

**Answer:** C

**C is correct.** UMAP has a transform() method, making it usable in ML pipelines for new data. UMAP is generally faster (A is wrong), can produce any-dimensional embeddings (B is wrong), and preserves both local and global structure (D is wrong).

### Q16. [Medium] What happens if you apply PCA to a dataset where all features are completely uncorrelated?

**Answer:** B

**B is correct.** When features are uncorrelated, the covariance matrix is diagonal. Eigenvectors align with the original axes (possibly rotated). Each component captures roughly equal variance (1/n_features each). PCA provides no dimensionality reduction benefit because there is no redundancy to exploit.

### Q17. [Hard] Arjun uses PCA(n_components=50) on a dataset with 1000 features and 200 samples. What is the maximum number of non-zero components he can get?

**Answer:** A

**A is correct.** He requested 50 components, and n_components caps the output. However, the theoretical maximum for any PCA on this dataset would be min(200, 1000) - 1 = 199 (due to centering). Since 50 < 199, he gets exactly 50 components.

### Q18. [Easy] Which of the following is NOT a benefit of dimensionality reduction?

**Answer:** C

**C is correct.** Dimensionality reduction does NOT guarantee higher accuracy. While it often improves accuracy by removing noise, it can also hurt accuracy if important information is lost. Benefits include faster training (A), better visualization (B), and reduced overfitting (D).

### Q19. [Hard] What is the computational complexity of computing PCA using eigendecomposition of the covariance matrix?

**Answer:** B

**B is correct.** PCA has two main steps: computing the covariance matrix O(n*d^2) and eigendecomposition O(d^3). For large n and small d, the covariance step dominates. For small n and large d, truncated SVD is more efficient.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/dimensionality-reduction/*
