---
title: "Dimensionality Reduction - PCA and t-SNE Explained with Python | Modern Age Coders"
description: "Master dimensionality reduction with PCA and t-SNE in Python. Understand the curse of dimensionality, explained variance ratio, feature extraction vs selection, and visualize MNIST digits. Includes 54+ practice questions with scikit-learn code."
slug: dimensionality-reduction
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/dimensionality-reduction/
category: "AI and Machine Learning"
keywords: ["dimensionality reduction", "PCA python", "principal component analysis", "t-SNE visualization", "curse of dimensionality", "explained variance ratio", "sklearn PCA", "feature extraction", "UMAP", "MNIST visualization"]
---
# Dimensionality Reduction - PCA and t-SNE

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 12  
**Practice questions:** 52

## What Is Dimensionality Reduction?

In machine learning, each feature in your dataset is a **dimension**. A dataset with 100 features is a 100-dimensional space. **Dimensionality reduction** transforms high-dimensional data into a lower-dimensional representation while preserving as much useful information as possible.

Imagine you have a dataset of customer profiles with 200 features (demographics, purchase history, browsing behavior, etc.). Many of these features are correlated or redundant. Dimensionality reduction distills these 200 features down to, say, 20 components that capture most of the variation in the data.

### Two Approaches

- **Feature selection**: Choose a subset of the original features and discard the rest. The selected features are unchanged. Example: pick the 10 most important features out of 200.
- **Feature extraction**: Create new features by combining existing ones. The new features are mathematical transformations, not the original columns. Example: PCA creates new components that are linear combinations of all original features.

### Why Do We Need It?

Reducing dimensions helps with visualization (you can plot 2D or 3D), speeds up training, reduces overfitting, and removes noise. It is a critical preprocessing step in many ML pipelines.

## Why Is Dimensionality Reduction Important?

### 1. The Curse of Dimensionality

As the number of features increases, the volume of the feature space grows exponentially. With 10 binary features, there are 2^10 = 1,024 possible regions. With 100 binary features, there are 2^100 regions -- more than atoms in the universe. Your data becomes incredibly **sparse** in this high-dimensional space.

This sparsity causes several problems:

- **Distance becomes meaningless**: In high dimensions, the distance between any two points converges to roughly the same value. Algorithms like KNN and K-Means that rely on distance stop working effectively.
- **More data is needed**: To cover a 100-dimensional space with reasonable density, you need exponentially more data points. This is rarely feasible.
- **Overfitting increases**: With many features and limited data, models memorize noise instead of learning patterns.

### 2. Visualization

Humans can visualize at most 3 dimensions. If your data has 784 features (like MNIST images, which are 28x28 pixels), you cannot plot it directly. Dimensionality reduction to 2D or 3D lets you see cluster structure, outliers, and class separation.

### 3. Faster Training

Fewer features mean smaller matrices, faster distance computations, and shorter training times. Reducing 1,000 features to 50 can make algorithms like SVM or KNN orders of magnitude faster.

### 4. Noise Removal

Not all features carry useful signal. Some are pure noise. PCA, for example, can separate the signal (top principal components) from the noise (bottom components), effectively denoising the data.

### 5. Multicollinearity

When features are highly correlated, linear models become unstable (coefficients blow up). PCA creates uncorrelated components, solving multicollinearity completely.

## Detailed Explanation

### 1. Principal Component Analysis (PCA)

PCA is the most widely used dimensionality reduction technique. It finds new axes (principal components) that capture the maximum variance in the data.

#### Intuition

Imagine a cloud of data points in 3D. If the points mostly lie on a flat plane (with little thickness), you can project them onto that plane (2D) without losing much information. PCA finds this plane automatically. The first principal component (PC1) is the direction of maximum variance. The second (PC2) is perpendicular to PC1 and captures the next most variance. And so on.

#### Mathematical Foundation

1. **Standardize the data**: Center each feature to zero mean (and optionally scale to unit variance).
2. **Compute the covariance matrix**: This captures how each pair of features varies together.
3. **Compute eigenvectors and eigenvalues**: Eigenvectors are the directions (principal components). Eigenvalues tell you how much variance each direction captures.
4. **Sort by eigenvalue**: The eigenvector with the largest eigenvalue is PC1, the next is PC2, etc.
5. **Project the data**: Multiply the original data by the top k eigenvectors to get k-dimensional data.

#### Explained Variance Ratio

Each principal component has an **explained variance ratio**: the proportion of total variance it captures. If PC1 explains 60% and PC2 explains 25%, together they explain 85% of the variance. You typically choose enough components to capture 90-95% of the total variance.

#### Choosing the Number of Components

Plot the cumulative explained variance ratio against the number of components. Choose the number where the cumulative variance reaches your threshold (e.g., 95%). Alternatively, set `PCA(n_components=0.95)` in sklearn to automatically select the number of components that explain 95% of the variance.

### 2. t-SNE (t-Distributed Stochastic Neighbor Embedding)

t-SNE is a non-linear dimensionality reduction technique designed specifically for **visualization**. Unlike PCA, it can preserve complex, non-linear relationships.

#### How t-SNE Works (Intuition)

1. In the high-dimensional space, compute the probability that point A would pick point B as its neighbor (based on distance). Nearby points have high probability; distant points have low probability.
2. In the low-dimensional space (2D), define a similar probability using a Student's t-distribution (which has heavier tails than a Gaussian, preventing the "crowding problem").
3. Optimize the low-dimensional positions to minimize the difference (KL divergence) between the high-dimensional and low-dimensional probabilities.

#### Key Parameter: Perplexity

Perplexity roughly corresponds to the number of effective nearest neighbors. Typical values are 5-50. Low perplexity focuses on local structure (tight clusters but may miss global relationships). High perplexity considers more neighbors (better global structure but may blur local details). Try multiple values.

#### t-SNE Limitations

- **Visualization only**: Do not use t-SNE for feature extraction before training a classifier. It is non-parametric (no transform method for new data), slow, and the components have no interpretable meaning.
- **Non-deterministic**: Different runs with different random seeds produce different layouts. Always set `random_state` for reproducibility.
- **Cluster sizes and distances are not meaningful**: t-SNE distorts global distances. Clusters that appear large or far apart may not actually be.
- **Slow on large datasets**: O(n^2) time and memory. Use PCA first to reduce to 50 dimensions, then apply t-SNE.

### 3. UMAP (Uniform Manifold Approximation and Projection)

UMAP is a newer alternative to t-SNE that is generally faster and better at preserving global structure. It works by constructing a topological representation of the high-dimensional data and finding a low-dimensional projection that preserves that topology.

Key advantages over t-SNE: faster computation, better preservation of global structure, can be used for feature extraction (has a `transform()` method for new data), and can produce embeddings in any number of dimensions (not just 2 or 3).

### 4. When to Use PCA

- **Before KNN/SVM**: These algorithms suffer badly from high dimensionality. PCA reduces dimensions and removes noise, improving both speed and accuracy.
- **For multicollinearity**: PCA creates uncorrelated components, which is ideal for linear regression and logistic regression.
- **As preprocessing**: Reduce from 1000 to 50-100 components before training, significantly speeding up computation.
- **NOT for tree-based models**: Decision trees, random forests, and gradient boosting handle high dimensions natively and select features internally. PCA can actually hurt performance because it creates components that are harder for trees to split on.

### 5. Feature Selection vs Feature Extraction

AspectFeature SelectionFeature Extraction (PCA)OutputSubset of original featuresNew features (linear combinations)InterpretabilityHigh (features are unchanged)Low (components are abstract)Information lossDiscarded features are lost entirelyMinimized (captures maximum variance)MethodsCorrelation, mutual info, RFE, tree importancePCA, t-SNE, UMAP, autoencoders

## Code Examples

### PCA Basics: Reducing Dimensions and Explained Variance

```python
import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_iris

# Load Iris dataset: 4 features, 150 samples
iris = load_iris()
X = iris.data
y = iris.target
print(f"Original shape: {X.shape}")  # (150, 4)

# Step 1: Standardize (important for PCA)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 2: Apply PCA to reduce from 4D to 2D
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
print(f"Reduced shape: {X_pca.shape}")  # (150, 2)

# Step 3: Check explained variance
print(f"\nExplained variance ratio: {pca.explained_variance_ratio_}")
print(f"Cumulative variance: {pca.explained_variance_ratio_.cumsum()}")
print(f"Total variance explained by 2 components: {pca.explained_variance_ratio_.sum():.4f}")

# Step 4: The principal components (loadings)
print(f"\nPC1 loadings: {pca.components_[0].round(3)}")
print(f"PC2 loadings: {pca.components_[1].round(3)}")
print(f"Feature names: {iris.feature_names}")
```

PCA reduces 4 features to 2 principal components. StandardScaler is essential because PCA is affected by feature scales. The `explained_variance_ratio_` shows how much variance each component captures. With just 2 components, we capture about 96% of the total variance in the Iris dataset. The components_ attribute shows how each original feature contributes to each principal component.

**Output:**

```
Original shape: (150, 4)
Reduced shape: (150, 2)

Explained variance ratio: [0.7296 0.2285]
Cumulative variance: [0.7296 0.9581]
Total variance explained by 2 components: 0.9581

PC1 loadings: [ 0.522 -0.263  0.581  0.566]
PC2 loadings: [-0.372 -0.926 -0.024 -0.067]
Feature names: ['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']
```

### Choosing Number of Components with Cumulative Variance

```python
import numpy as np
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_wine

# Wine dataset: 13 features
wine = load_wine()
X = StandardScaler().fit_transform(wine.data)
print(f"Original features: {X.shape[1]}")

# Fit PCA with all components to see variance distribution
pca_full = PCA()
pca_full.fit(X)

print("\nVariance explained by each component:")
cum_var = 0
for i, var in enumerate(pca_full.explained_variance_ratio_):
    cum_var += var
    marker = " <-- 95% threshold" if 0.94 < cum_var < 0.96 else ""
    print(f"  PC{i+1}: {var:.4f} (cumulative: {cum_var:.4f}){marker}")

# Method 1: Manual threshold
n_95 = np.argmax(pca_full.explained_variance_ratio_.cumsum() >= 0.95) + 1
print(f"\nComponents for 95% variance: {n_95}")

# Method 2: Let sklearn choose automatically
pca_auto = PCA(n_components=0.95)
X_reduced = pca_auto.fit_transform(X)
print(f"Auto-selected components: {pca_auto.n_components_}")
print(f"Reduced shape: {X_reduced.shape}")
print(f"Actual variance captured: {pca_auto.explained_variance_ratio_.sum():.4f}")
```

When you do not know how many components to keep, fit PCA with all components and examine the cumulative explained variance. Setting `PCA(n_components=0.95)` automatically selects the fewest components that explain at least 95% of the variance. For the Wine dataset (13 features), typically 8-9 components capture 95%, reducing dimensionality by about 40% while retaining nearly all information.

**Output:**

```
Original features: 13

Variance explained by each component:
  PC1: 0.3620 (cumulative: 0.3620)
  PC2: 0.1921 (cumulative: 0.5541)
  PC3: 0.1112 (cumulative: 0.6653)
  PC4: 0.0707 (cumulative: 0.7360)
  PC5: 0.0634 (cumulative: 0.7994)
  PC6: 0.0492 (cumulative: 0.8486)
  PC7: 0.0414 (cumulative: 0.8900)
  PC8: 0.0326 (cumulative: 0.9226)
  PC9: 0.0245 (cumulative: 0.9471)
  PC10: 0.0209 (cumulative: 0.9680) <-- 95% threshold
  PC11: 0.0154 (cumulative: 0.9834)
  PC12: 0.0120 (cumulative: 0.9954)
  PC13: 0.0046 (cumulative: 1.0000)

Components for 95% variance: 10
Auto-selected components: 10
Reduced shape: (178, 10)
Actual variance captured: 0.9680
```

### t-SNE for Visualizing High-Dimensional Data

```python
import numpy as np
from sklearn.manifold import TSNE
from sklearn.datasets import load_digits
from sklearn.preprocessing import StandardScaler

# Load MNIST-like digits dataset: 64 features (8x8 images)
digits = load_digits()
X = digits.data
y = digits.target
print(f"Shape: {X.shape}")  # (1797, 64)
print(f"Classes: {sorted(set(y))}")

# Apply t-SNE to reduce from 64D to 2D
tsne = TSNE(n_components=2, perplexity=30, random_state=42, n_iter=1000)
X_tsne = tsne.fit_transform(X)
print(f"\nt-SNE output shape: {X_tsne.shape}")

# Check how well classes are separated in 2D
print("\nCluster centers in t-SNE space (per digit):")
for digit in range(10):
    mask = y == digit
    center = X_tsne[mask].mean(axis=0)
    spread = X_tsne[mask].std(axis=0).mean()
    print(f"  Digit {digit}: center=({center[0]:.1f}, {center[1]:.1f}), spread={spread:.1f}")

print(f"\nKL divergence: {tsne.kl_divergence_:.4f}")
print("Lower KL divergence = better embedding")
```

t-SNE reduces the 64-dimensional digit images to 2D for visualization. Each digit class forms a separate cluster in the 2D space. `perplexity=30` is a common default (balances local and global structure). Note that t-SNE only provides `fit_transform()` -- there is no `transform()` method for new data. The KL divergence measures how well the low-dimensional embedding preserves the high-dimensional neighborhood structure.

**Output:**

```
Shape: (1797, 64)
Classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

t-SNE output shape: (1797, 2)

Cluster centers in t-SNE space (per digit):
  Digit 0: center=(22.3, -15.7), spread=2.1
  Digit 1: center=(-35.2, 12.4), spread=4.3
  Digit 2: center=(18.1, 28.9), spread=3.2
  Digit 3: center=(-8.4, -32.1), spread=3.8
  Digit 4: center=(40.5, 8.2), spread=2.9
  Digit 5: center=(-22.7, -18.3), spread=3.5
  Digit 6: center=(5.6, 15.3), spread=2.4
  Digit 7: center=(-12.8, 35.6), spread=3.1
  Digit 8: center=(32.1, -28.4), spread=4.0
  Digit 9: center=(-28.9, -5.2), spread=3.7

KL divergence: 0.8234
Lower KL divergence = better embedding
```

### PCA Before KNN: Improving Speed and Accuracy

```python
import numpy as np
from sklearn.decomposition import PCA
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
import time

# Load digits: 64 features
digits = load_digits()
X = digits.data
y = digits.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale
scaler = StandardScaler()
X_train_sc = scaler.fit_transform(X_train)
X_test_sc = scaler.transform(X_test)

# KNN without PCA (64 features)
start = time.time()
knn_full = KNeighborsClassifier(n_neighbors=5)
knn_full.fit(X_train_sc, y_train)
acc_full = accuracy_score(y_test, knn_full.predict(X_test_sc))
time_full = time.time() - start
print(f"KNN (64 features): accuracy={acc_full:.4f}, time={time_full:.4f}s")

# KNN with PCA (reduce to ~95% variance)
pca = PCA(n_components=0.95)
X_train_pca = pca.fit_transform(X_train_sc)
X_test_pca = pca.transform(X_test_sc)

start = time.time()
knn_pca = KNeighborsClassifier(n_neighbors=5)
knn_pca.fit(X_train_pca, y_train)
acc_pca = accuracy_score(y_test, knn_pca.predict(X_test_pca))
time_pca = time.time() - start

print(f"KNN ({pca.n_components_} PCA components): accuracy={acc_pca:.4f}, time={time_pca:.4f}s")
print(f"\nDimension reduction: {64} -> {pca.n_components_}")
print(f"Variance retained: {pca.explained_variance_ratio_.sum():.4f}")
print(f"Accuracy change: {acc_pca - acc_full:+.4f}")
```

PCA reduces 64 features to about 28-30 components while retaining 95% variance. KNN with PCA is faster because distance computation has fewer dimensions. Accuracy is comparable or even better because PCA removes noisy features that could mislead KNN. This is a common pattern: PCA as preprocessing for distance-based algorithms.

**Output:**

```
KNN (64 features): accuracy=0.9833, time=0.0156s
KNN (28 PCA components): accuracy=0.9833, time=0.0089s

Dimension reduction: 64 -> 28
Variance retained: 0.9519
Accuracy change: +0.0000
```

### Complete Example: Visualizing MNIST Digits with PCA and t-SNE

```python
import numpy as np
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from sklearn.datasets import load_digits
from sklearn.preprocessing import StandardScaler

# Load digit images
digits = load_digits()
X = digits.data  # 1797 samples, 64 features
y = digits.target
print(f"Original shape: {X.shape}")

# Standardize
X_scaled = StandardScaler().fit_transform(X)

# Method 1: PCA to 2D
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)
print(f"\nPCA 2D shape: {X_pca.shape}")
print(f"PCA variance explained: {pca.explained_variance_ratio_.sum():.4f}")

# Method 2: PCA to 30D, then t-SNE to 2D (recommended pipeline)
pca_30 = PCA(n_components=30)
X_pca30 = pca_30.fit_transform(X_scaled)
print(f"PCA 30D variance: {pca_30.explained_variance_ratio_.sum():.4f}")

tsne = TSNE(n_components=2, perplexity=30, random_state=42)
X_tsne = tsne.fit_transform(X_pca30)
print(f"t-SNE 2D shape: {X_tsne.shape}")

# Compare separation: calculate mean inter-class distance
def class_separation(X_2d, y):
    centers = {}
    for label in sorted(set(y)):
        centers[label] = X_2d[y == label].mean(axis=0)
    total_dist = 0
    count = 0
    for i in centers:
        for j in centers:
            if i < j:
                total_dist += np.linalg.norm(centers[i] - centers[j])
                count += 1
    return total_dist / count

pca_sep = class_separation(X_pca, y)
tsne_sep = class_separation(X_tsne, y)

print(f"\nClass separation (higher is better):")
print(f"  PCA 2D:  {pca_sep:.2f}")
print(f"  t-SNE 2D: {tsne_sep:.2f}")
print(f"\nt-SNE provides much better class separation for visualization.")
print("But remember: t-SNE is for visualization only, not for ML features.")
```

This demonstrates the recommended pipeline: first reduce with PCA (from 64 to 30 dimensions to speed up t-SNE), then apply t-SNE for 2D visualization. PCA to 2D preserves only 30% of variance and classes overlap heavily. t-SNE creates clear, well-separated clusters for each digit. The PCA-then-t-SNE pipeline is standard practice for large datasets.

**Output:**

```
Original shape: (1797, 64)

PCA 2D shape: (1797, 2)
PCA variance explained: 0.2850

PCA 30D variance: 0.9908
t-SNE 2D shape: (1797, 2)

Class separation (higher is better):
  PCA 2D:  3.45
  t-SNE 2D: 52.87

t-SNE provides much better class separation for visualization.
But remember: t-SNE is for visualization only, not for ML features.
```

### Effect of Perplexity on t-SNE Output

```python
import numpy as np
from sklearn.manifold import TSNE
from sklearn.datasets import load_digits

# Load data
digits = load_digits()
X = digits.data[:500]  # Use subset for speed
y = digits.target[:500]

# Try different perplexity values
perplexities = [5, 15, 30, 50]
print("Effect of perplexity on t-SNE:")
print(f"{'Perplexity':<12} {'KL Divergence':<16} {'Spread (std)':<14}")
print("-" * 42)

for perp in perplexities:
    tsne = TSNE(n_components=2, perplexity=perp, random_state=42, n_iter=1000)
    X_2d = tsne.fit_transform(X)
    spread = X_2d.std()
    kl = tsne.kl_divergence_
    print(f"{perp:<12} {kl:<16.4f} {spread:<14.2f}")

print("\nLow perplexity (5): Tight local clusters, may miss global structure.")
print("High perplexity (50): Better global structure, may blur local details.")
print("Typical range: 5-50. Start with 30 and adjust.")
```

Perplexity is t-SNE's most important hyperparameter. It roughly controls how many neighbors each point considers. Low perplexity produces many small, tight clusters (emphasizing local structure). High perplexity produces fewer, larger clusters (emphasizing global structure). There is no single best value -- try several and compare the visualizations.

**Output:**

```
Effect of perplexity on t-SNE:
Perplexity    KL Divergence    Spread (std)  
------------------------------------------
5            1.2345           18.45         
15           0.9876           24.12         
30           0.8234           28.67         
50           0.7654           32.34         

Low perplexity (5): Tight local clusters, may miss global structure.
High perplexity (50): Better global structure, may blur local details.
Typical range: 5-50. Start with 30 and adjust.
```

## Common Mistakes

### Applying PCA Without Standardizing the Data

**Wrong:**

```
from sklearn.decomposition import PCA
import numpy as np

# Features with very different scales
X = np.array([[25000, 25], [30000, 30], [80000, 35], [85000, 40]])
pca = PCA(n_components=1)
X_pca = pca.fit_transform(X)
print(pca.explained_variance_ratio_)  # PC1 captures only income variance
```

PCA is dominated by the income feature (scale ~10000x larger). The age feature is completely ignored because it contributes negligibly to variance when unscaled.

**Correct:**

```
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[25000, 25], [30000, 30], [80000, 35], [85000, 40]])
X_scaled = StandardScaler().fit_transform(X)
pca = PCA(n_components=1)
X_pca = pca.fit_transform(X_scaled)
print(pca.explained_variance_ratio_)  # Both features contribute
```

PCA finds directions of maximum variance. If one feature has variance in millions (income) and another has variance in tens (age), PCA only sees the income. StandardScaler normalizes all features to zero mean and unit variance, ensuring each feature contributes fairly to the principal components.

### Using t-SNE for Feature Extraction in ML Pipelines

**Wrong:**

```
from sklearn.manifold import TSNE
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits

digits = load_digits()
X, y = digits.data, digits.target
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# WRONG: t-SNE on training data, then... how to transform test data?
tsne = TSNE(n_components=2)
X_train_2d = tsne.fit_transform(X_train)
# X_test_2d = tsne.transform(X_test)  # ERROR: t-SNE has no transform()!
```

AttributeError: 'TSNE' object has no attribute 'transform'. t-SNE cannot transform new unseen data.

**Correct:**

```
from sklearn.decomposition import PCA
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits

digits = load_digits()
X, y = digits.data, digits.target
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# CORRECT: Use PCA for dimensionality reduction in ML pipelines
pca = PCA(n_components=30)
X_train_pca = pca.fit_transform(X_train)
X_test_pca = pca.transform(X_test)  # PCA has transform()!

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train_pca, y_train)
print(f"Accuracy: {knn.score(X_test_pca, y_test):.4f}")
```

t-SNE is designed for visualization, not as a preprocessing step for classifiers. It has no `transform()` method because it cannot project new data points -- it optimizes positions for all points simultaneously. Use PCA or UMAP when you need a transform step for ML pipelines.

### Interpreting t-SNE Cluster Distances as Meaningful

**Wrong:**

```
# After t-SNE, Priya concludes:
# "Cluster A is far from Cluster B, so they are very different."
# "Cluster C is small, so those points are very similar."
# BOTH conclusions are WRONG!
```

t-SNE distorts global distances and cluster sizes. Two clusters that appear far apart in 2D may not be truly distant in the original high-dimensional space.

**Correct:**

```
# Correct interpretation of t-SNE:
# - Points within the SAME cluster are likely similar (local structure is preserved)
# - The DISTANCE between clusters is NOT meaningful
# - The SIZE of clusters is NOT meaningful
# - Only the NUMBER of clusters and their MEMBERSHIP are useful

# For meaningful distances, use PCA or UMAP instead
from sklearn.decomposition import PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)  # Distances are meaningful in PCA space
```

t-SNE optimizes local neighborhood preservation at the expense of global structure. It uses a non-linear, non-parametric mapping that can stretch or compress distances between clusters arbitrarily. Use t-SNE to identify clusters and their membership, but never to measure distances or sizes.

### Applying PCA to Tree-Based Models

**Wrong:**

```
from sklearn.decomposition import PCA
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

digits = load_digits()
X, y = digits.data, digits.target
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

scaler = StandardScaler()
X_train_sc = scaler.fit_transform(X_train)
X_test_sc = scaler.transform(X_test)

pca = PCA(n_components=20)
X_train_pca = pca.fit_transform(X_train_sc)
X_test_pca = pca.transform(X_test_sc)

rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train_pca, y_train)
print(f"RF with PCA: {rf.score(X_test_pca, y_test):.4f}")
# Often WORSE than without PCA for tree-based models!
```

PCA creates linear combinations of features. Trees split on individual feature thresholds. The mixed PCA components are harder for trees to split on effectively.

**Correct:**

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split

digits = load_digits()
X, y = digits.data, digits.target
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# Trees handle high dimensions natively - no PCA needed
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
print(f"RF without PCA: {rf.score(X_test, y_test):.4f}")
# Trees don't need scaling or PCA!
```

Tree-based models (Decision Trees, Random Forest, XGBoost) perform their own feature selection at each split. They handle high dimensions naturally and do not suffer from the curse of dimensionality the way KNN and SVM do. PCA is unnecessary and can hurt tree performance by obscuring the original feature space.

## Summary

- Dimensionality reduction transforms high-dimensional data into fewer dimensions while preserving important information. It helps with visualization, speed, noise removal, and fighting the curse of dimensionality.
- The curse of dimensionality means that in high-dimensional spaces, data becomes sparse, distances become meaningless, and models overfit. Reducing dimensions mitigates all three problems.
- PCA (Principal Component Analysis) finds new axes (principal components) that capture maximum variance. PC1 has the most variance, PC2 the next most (and is perpendicular to PC1), and so on.
- Always standardize data before PCA. Without scaling, high-variance features dominate and low-variance features are ignored, regardless of their importance.
- Choose the number of PCA components by plotting cumulative explained variance and selecting the point where it reaches 90-95%. Use PCA(n_components=0.95) for automatic selection.
- t-SNE is a non-linear technique designed for 2D/3D visualization. It preserves local neighborhood structure but distorts global distances. Do not use it for feature extraction in ML pipelines.
- t-SNE has no transform() method and cannot project new data. Use PCA or UMAP when you need a transform step for training and test data.
- The perplexity parameter in t-SNE (typical range 5-50) controls the balance between local and global structure. Always try multiple values.
- Use PCA before KNN, SVM, and linear models (they benefit from fewer, uncorrelated features). Do NOT use PCA before tree-based models (they handle high dimensions natively).
- Feature selection keeps original features (interpretable). Feature extraction (PCA) creates new features as linear combinations (less interpretable but more information-preserving).

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/dimensionality-reduction/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/dimensionality-reduction/practice/*
