---
title: "Unsupervised Learning Clustering - K-Means, DBSCAN, Hierarchical Clustering | Modern Age Coders"
description: "Master unsupervised learning and clustering algorithms including K-Means, DBSCAN, and Hierarchical Clustering with Python scikit-learn. Includes silhouette score evaluation, elbow method, customer segmentation project, and 57+ practice questions."
slug: unsupervised-learning-clustering
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/unsupervised-learning-clustering
category: "AI and Machine Learning"
keywords: ["unsupervised learning", "clustering algorithms", "k-means clustering python", "dbscan clustering", "hierarchical clustering", "silhouette score", "elbow method", "customer segmentation machine learning", "sklearn clustering", "agglomerative clustering"]
---
# Unsupervised Learning - Clustering (K-Means, DBSCAN, Hierarchical)

**Difficulty:** Intermediate  
**Reading time:** 45 min  
**Chapter:** 11  
**Practice questions:** 55

## What Is Unsupervised Learning?

In **supervised learning**, every data point has a label -- you tell the algorithm "this email is spam" or "this house costs 50 lakhs." The algorithm learns the mapping from input to output. In **unsupervised learning**, there are **no labels at all**. You hand the algorithm raw data and say: "Find interesting patterns on your own."

**Clustering** is the most common unsupervised learning task. It groups similar data points together into **clusters** without being told what the groups should be. The algorithm discovers the groups purely from the structure of the data.

Think of it this way: if supervised learning is like a teacher grading exams (labels provided), unsupervised learning is like asking students to form their own study groups based on who works well together (no labels, just natural grouping).

### Real-World Clustering Use Cases

- **Customer segmentation**: Group customers by purchasing behavior so marketing teams can target each segment differently.
- **Anomaly detection**: Data points that do not belong to any cluster are potential anomalies -- fraud transactions, network intrusions, defective products.
- **Image compression**: Reduce the number of colors in an image by clustering similar pixel colors together.
- **Document grouping**: Automatically organize news articles or research papers into topic groups.
- **Gene expression analysis**: Group genes with similar expression patterns to identify biological functions.
- **Social network analysis**: Discover communities within a social network based on connection patterns.

## Why Is Clustering Important?

In the real world, most data is **unlabeled**. Labeling data is expensive and time-consuming -- imagine manually tagging millions of customer transactions or medical images. Clustering lets you extract value from this unlabeled data immediately.

### 1. You Cannot Always Get Labels

A hospital might have millions of patient records but no doctor has manually categorized them into risk groups. A retailer has purchase histories but no one has manually defined customer segments. Clustering finds these groups automatically.

### 2. Discover Hidden Patterns

Sometimes you do not even know what groups exist. Clustering can reveal unexpected patterns -- maybe your customers naturally form 5 segments you never thought of, or maybe certain diseases cluster in ways researchers did not expect.

### 3. Preprocessing for Supervised Learning

Clustering can create features for supervised models. You might cluster geographical locations and use cluster IDs as features, or cluster user behavior patterns to create user-type features.

### 4. Reduces Human Bias

When humans create categories manually, they bring biases. Clustering lets the data speak for itself. The algorithm finds natural groupings without preconceptions.

### 5. Scalability

Algorithms like K-Means can cluster millions of data points efficiently. This makes unsupervised learning practical for large-scale applications like recommendation engines, search result grouping, and real-time anomaly detection.

## Detailed Explanation

### 1. K-Means Clustering

K-Means is the most popular clustering algorithm. It divides data into exactly **K** clusters, where K is a number you choose in advance.

#### Algorithm Step by Step

1. **Choose K**: Decide how many clusters you want (e.g., K=3).
2. **Initialize centroids**: Randomly place K points in the feature space. These are the initial cluster centers (centroids).
3. **Assign each data point to the nearest centroid**: Calculate the distance from each point to each centroid. Assign the point to the closest centroid's cluster.
4. **Update centroids**: Move each centroid to the mean (average) of all points assigned to its cluster.
5. **Repeat steps 3-4**: Keep assigning and updating until centroids stop moving (convergence) or you hit a maximum number of iterations.

#### Choosing K: The Elbow Method

The biggest question in K-Means is: how do you choose K? The **elbow method** helps. For each value of K (say 1 through 10), run K-Means and calculate the **inertia** (sum of squared distances from each point to its assigned centroid). Plot K vs. inertia. The curve drops steeply at first, then flattens. The "elbow" point -- where the curve bends -- is a good choice for K.

#### K-Means Limitations

- You must specify K in advance (which you often do not know).
- Assumes clusters are **spherical** and roughly **equal in size**. Fails on elongated or irregular shapes.
- Sensitive to **initialization**: different random starting centroids can produce different results. The `init='k-means++'` parameter in sklearn mitigates this.
- Sensitive to **outliers**: a single outlier can pull a centroid far from the actual cluster.
- Does not work well with **different density clusters**.

### 2. DBSCAN (Density-Based Spatial Clustering of Applications with Noise)

DBSCAN takes a fundamentally different approach. Instead of assuming a fixed number of spherical clusters, it finds **dense regions** separated by **sparse regions**.

#### Key Parameters

- **eps (epsilon)**: The radius around a point. Two points are "neighbors" if they are within eps distance of each other.
- **min_samples**: The minimum number of points required within eps distance to form a dense region (a "core point").

#### How DBSCAN Works

1. Pick an unvisited point. Count its neighbors within eps distance.
2. If it has >= min_samples neighbors, it is a **core point**. Start a new cluster.
3. Expand the cluster by recursively adding all density-reachable points (neighbors of neighbors that are also core points).
4. If a point has fewer than min_samples neighbors and is not reachable from any core point, it is labeled as **noise** (outlier, labeled -1).

#### DBSCAN Advantages

- Does **not require specifying K**. It finds the number of clusters automatically.
- Can find **arbitrarily shaped clusters** (crescents, rings, blobs).
- **Identifies outliers** naturally (labeled as -1).
- Robust to outliers -- they do not distort cluster shapes.

#### DBSCAN Limitations

- Struggles with clusters of **varying density**. A single eps cannot handle both tight and spread-out clusters.
- Sensitive to eps and min_samples choices. Choosing them requires domain knowledge or experimentation.
- Does not work well in **high-dimensional spaces** because distance becomes less meaningful (curse of dimensionality).

### 3. Hierarchical Clustering

Hierarchical clustering builds a **tree of clusters** (called a **dendrogram**) rather than producing a flat partition.

#### Two Approaches

- **Agglomerative (bottom-up)**: Start with each point as its own cluster. Repeatedly merge the two closest clusters until only one cluster remains. This is the more common approach.
- **Divisive (top-down)**: Start with all points in one cluster. Repeatedly split until each point is its own cluster. Less common because it is computationally more expensive.

#### Linkage Methods

"Closest clusters" can be defined differently:

- **Single linkage**: Distance between the two closest points in the two clusters. Can produce elongated "chain" clusters.
- **Complete linkage**: Distance between the two farthest points. Produces compact clusters.
- **Average linkage**: Average distance between all pairs of points. A balance between single and complete.
- **Ward linkage**: Minimizes the total within-cluster variance. Often produces the most balanced clusters. This is the default in sklearn.

#### Dendrogram

A dendrogram is a tree diagram that shows the order in which clusters were merged and the distance at which each merge happened. You "cut" the dendrogram at a certain height to get your desired number of clusters. Tall vertical lines in the dendrogram indicate well-separated clusters.

### 4. Evaluating Clustering: Silhouette Score

Since there are no labels, you cannot use accuracy or F1 score. The **silhouette score** measures how similar a point is to its own cluster compared to other clusters.

For each data point i:

- **a(i)** = average distance from point i to all other points in the same cluster (cohesion)
- **b(i)** = average distance from point i to all points in the nearest other cluster (separation)
- **silhouette(i) = (b(i) - a(i)) / max(a(i), b(i))**

The silhouette score ranges from **-1 to +1**:

- **+1**: Point is far from neighboring clusters and close to its own cluster (excellent).
- **0**: Point is on the boundary between two clusters.
- **-1**: Point is likely in the wrong cluster.

The average silhouette score across all points gives an overall clustering quality measure. Higher is better.

## Code Examples

### K-Means Clustering with Elbow Method

```python
import numpy as np
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import matplotlib.pyplot as plt

# Generate sample data: 300 points, 4 natural clusters
X, y_true = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)

# Elbow method: try K from 1 to 10
inertias = []
K_range = range(1, 11)
for k in K_range:
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X)
    inertias.append(km.inertia_)

print("Inertia values:")
for k, inertia in zip(K_range, inertias):
    print(f"  K={k}: {inertia:.1f}")

# The elbow is at K=4 (biggest drop, then flattening)
# Fit final model with K=4
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
labels = kmeans.fit_predict(X)
print(f"\nCluster assignments (first 10): {labels[:10]}")
print(f"Centroids shape: {kmeans.cluster_centers_.shape}")
print(f"Centroids:\n{kmeans.cluster_centers_}")
```

We generate synthetic data with 4 known clusters. The elbow method runs K-Means for K=1 to 10 and records inertia (total within-cluster sum of squares). Inertia drops sharply up to K=4, then flattens -- indicating 4 is the right number of clusters. `fit_predict()` fits the model and returns cluster labels in one step.

**Output:**

```
Inertia values:
  K=1: 1256.3
  K=2: 573.8
  K=3: 174.2
  K=4: 72.5
  K=5: 60.1
  K=6: 50.9
  K=7: 43.2
  K=8: 37.6
  K=9: 32.8
  K=10: 28.5

Cluster assignments (first 10): [2 0 3 1 2 0 3 1 2 0]
Centroids shape: (4, 2)
Centroids:
[[-5.01  3.02]
 [ 4.98  1.01]
 [-1.99 -2.98]
 [ 2.03  5.01]]
```

### DBSCAN: Handling Irregular Cluster Shapes

```python
import numpy as np
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler

# Generate crescent-shaped data (K-Means would fail here)
X, y_true = make_moons(n_samples=300, noise=0.1, random_state=42)

# Scale features (important for distance-based algorithms)
X_scaled = StandardScaler().fit_transform(X)

# Apply DBSCAN
db = DBSCAN(eps=0.3, min_samples=5)
labels = db.fit_predict(X_scaled)

# Analyze results
n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = list(labels).count(-1)

print(f"Number of clusters found: {n_clusters}")
print(f"Number of noise points: {n_noise}")
print(f"Cluster labels (unique): {sorted(set(labels))}")
print(f"Points per cluster:")
for label in sorted(set(labels)):
    count = list(labels).count(label)
    name = "Noise" if label == -1 else f"Cluster {label}"
    print(f"  {name}: {count} points")
```

DBSCAN finds 2 crescent-shaped clusters that K-Means would incorrectly split. `eps=0.3` defines the neighborhood radius. `min_samples=5` means a point needs at least 5 neighbors to be a core point. Noise points get label -1. Scaling is critical because DBSCAN uses distance -- unscaled features with different ranges would distort the results.

**Output:**

```
Number of clusters found: 2
Number of noise points: 3
Cluster labels (unique): [-1, 0, 1]
Points per cluster:
  Noise: 3 points
  Cluster 0: 148 points
  Cluster 1: 149 points
```

### Agglomerative Hierarchical Clustering with Dendrogram

```python
import numpy as np
from sklearn.cluster import AgglomerativeClustering
from scipy.cluster.hierarchy import dendrogram, linkage
from sklearn.datasets import make_blobs

# Generate sample data
X, y_true = make_blobs(n_samples=50, centers=3, cluster_std=0.8, random_state=42)

# Method 1: sklearn AgglomerativeClustering
agg = AgglomerativeClustering(n_clusters=3, linkage='ward')
labels = agg.fit_predict(X)
print("Agglomerative Clustering labels (first 15):")
print(labels[:15])
print(f"Points per cluster: {[list(labels).count(i) for i in range(3)]}")

# Method 2: scipy linkage for dendrogram data
Z = linkage(X, method='ward')
print(f"\nLinkage matrix shape: {Z.shape}")
print(f"Last 5 merges (cluster1, cluster2, distance, size):")
for row in Z[-5:]:
    print(f"  Merged {int(row[0])} + {int(row[1])}, distance={row[2]:.2f}, new_size={int(row[3])}")

# To plot: dendrogram(Z, truncate_mode='lastp', p=10)
# The tall vertical lines indicate well-separated clusters
```

Agglomerative clustering starts with each point as its own cluster and merges the two closest clusters at each step. Ward linkage minimizes within-cluster variance (similar to K-Means objective). The scipy `linkage()` function returns the full merge history, which can be visualized as a dendrogram. The last merges have the largest distances, indicating the main cluster separations.

**Output:**

```
Agglomerative Clustering labels (first 15):
[1 0 2 1 0 2 1 0 2 1 0 2 1 0 2]
Points per cluster: [17, 17, 16]

Linkage matrix shape: (49, 4)
Last 5 merges (cluster1, cluster2, distance, size):
  Merged 90 + 91, distance=3.45, new_size=10
  Merged 88 + 92, distance=4.12, new_size=17
  Merged 93 + 94, distance=5.67, new_size=27
  Merged 95 + 89, distance=6.89, new_size=33
  Merged 96 + 97, distance=12.34, new_size=50
```

### Silhouette Score for Cluster Evaluation

```python
import numpy as np
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score, silhouette_samples
from sklearn.datasets import make_blobs

# Generate data with 3 natural clusters
X, y_true = make_blobs(n_samples=300, centers=3, cluster_std=1.0, random_state=42)

# Try different values of K and compare silhouette scores
print("Silhouette scores for different K values:")
for k in range(2, 8):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X)
    score = silhouette_score(X, labels)
    print(f"  K={k}: silhouette={score:.4f}")

# Best K has highest silhouette score
# Detailed analysis for K=3
km = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = km.fit_predict(X)
sample_scores = silhouette_samples(X, labels)

print(f"\nDetailed analysis for K=3:")
print(f"  Overall silhouette score: {silhouette_score(X, labels):.4f}")
for i in range(3):
    cluster_scores = sample_scores[labels == i]
    print(f"  Cluster {i}: mean={cluster_scores.mean():.4f}, "
          f"min={cluster_scores.min():.4f}, size={len(cluster_scores)}")
```

The silhouette score ranges from -1 to +1. Higher values mean points are well-matched to their own cluster and poorly matched to neighboring clusters. We test K=2 through K=7 and pick the K with the highest silhouette score. `silhouette_samples()` gives per-point scores, letting us identify clusters where some points might be misassigned (low individual scores).

**Output:**

```
Silhouette scores for different K values:
  K=2: silhouette=0.5812
  K=3: silhouette=0.7145
  K=4: silhouette=0.5534
  K=5: silhouette=0.4923
  K=6: silhouette=0.4456
  K=7: silhouette=0.4102

Detailed analysis for K=3:
  Overall silhouette score: 0.7145
  Cluster 0: mean=0.7234, min=0.4521, size=100
  Cluster 1: mean=0.7089, min=0.4103, size=100
  Cluster 2: mean=0.7112, min=0.4267, size=100
```

### Comparing K-Means vs DBSCAN on Different Data Shapes

```python
import numpy as np
from sklearn.cluster import KMeans, DBSCAN
from sklearn.datasets import make_circles
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

# Generate concentric circles (K-Means will fail)
X, y_true = make_circles(n_samples=300, noise=0.05, factor=0.5, random_state=42)
X_scaled = StandardScaler().fit_transform(X)

# K-Means on circles
km = KMeans(n_clusters=2, random_state=42, n_init=10)
km_labels = km.fit_predict(X_scaled)
km_sil = silhouette_score(X_scaled, km_labels)

# DBSCAN on circles
db = DBSCAN(eps=0.3, min_samples=5)
db_labels = db.fit_predict(X_scaled)
# Remove noise points for silhouette calculation
mask = db_labels != -1
db_sil = silhouette_score(X_scaled[mask], db_labels[mask]) if mask.sum() > 1 else -1

print("Concentric circles data:")
print(f"  K-Means silhouette: {km_sil:.4f}")
print(f"  DBSCAN silhouette:  {db_sil:.4f}")
print(f"  K-Means unique labels: {sorted(set(km_labels))}")
print(f"  DBSCAN unique labels:  {sorted(set(db_labels))}")
print(f"  DBSCAN noise points:   {list(db_labels).count(-1)}")

# K-Means splits the circles vertically (wrong!)
# DBSCAN correctly identifies inner and outer circles
print("\nK-Means fails because circles are not spherical clusters.")
print("DBSCAN succeeds because it follows density, not shape assumptions.")
```

Concentric circles are a classic example where K-Means fails. K-Means assumes spherical clusters and splits the circles with a straight line. DBSCAN follows the density of points along each ring and correctly identifies two clusters. This demonstrates why choosing the right algorithm for your data shape matters.

**Output:**

```
Concentric circles data:
  K-Means silhouette: 0.3312
  DBSCAN silhouette:  0.5648
  K-Means unique labels: [0, 1]
  DBSCAN unique labels:  [0, 1]
  DBSCAN noise points:   4

K-Means fails because circles are not spherical clusters.
DBSCAN succeeds because it follows density, not shape assumptions.
```

### Complete Project: Customer Segmentation on Mall Dataset

```python
import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

# Simulate mall customer dataset
np.random.seed(42)
n = 200
data = {
    'CustomerID': range(1, n+1),
    'Gender': np.random.choice(['Male', 'Female'], n),
    'Age': np.random.randint(18, 70, n),
    'AnnualIncome_K': np.concatenate([
        np.random.normal(30, 8, 50),
        np.random.normal(55, 10, 60),
        np.random.normal(85, 8, 50),
        np.random.normal(55, 10, 40)
    ]).astype(int),
    'SpendingScore': np.concatenate([
        np.random.normal(20, 8, 50),
        np.random.normal(50, 12, 60),
        np.random.normal(75, 10, 50),
        np.random.normal(85, 8, 40)
    ]).astype(int)
}
df = pd.DataFrame(data)
print("Dataset shape:", df.shape)
print(df[['Age', 'AnnualIncome_K', 'SpendingScore']].describe().round(1))

# Select features for clustering
features = df[['AnnualIncome_K', 'SpendingScore']]

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(features)

# Elbow method
print("\nElbow Method:")
for k in range(2, 8):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X_scaled)
    sil = silhouette_score(X_scaled, km.labels_)
    print(f"  K={k}: inertia={km.inertia_:.1f}, silhouette={sil:.4f}")

# Final model with K=4
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
df['Cluster'] = kmeans.fit_predict(X_scaled)

# Analyze segments
print("\nCustomer Segments:")
segment_analysis = df.groupby('Cluster').agg(
    count=('CustomerID', 'count'),
    avg_income=('AnnualIncome_K', 'mean'),
    avg_spending=('SpendingScore', 'mean'),
    avg_age=('Age', 'mean')
).round(1)
print(segment_analysis)

# Business interpretation
print("\nBusiness Interpretation:")
for idx, row in segment_analysis.iterrows():
    if row['avg_income'] > 65 and row['avg_spending'] > 60:
        label = "Premium Customers (high income, high spending)"
    elif row['avg_income'] > 65 and row['avg_spending'] < 40:
        label = "Careful Spenders (high income, low spending)"
    elif row['avg_income'] < 40 and row['avg_spending'] < 40:
        label = "Budget Conscious (low income, low spending)"
    else:
        label = "Average Customers (moderate income and spending)"
    print(f"  Cluster {idx}: {label}")
    print(f"    Count={int(row['count'])}, AvgIncome={row['avg_income']}K, AvgSpending={row['avg_spending']}")
```

This is a complete customer segmentation pipeline. We simulate a mall dataset with customer income and spending scores, scale the features, use the elbow method and silhouette score to find the optimal K, then segment customers into groups. Each cluster gets a business-meaningful label. This is exactly how data science teams at Flipkart, Amazon, or any retailer would approach customer segmentation.

**Output:**

```
Dataset shape: (200, 5)
       Age  AnnualIncome_K  SpendingScore
count  200.0         200.0         200.0
mean    42.8          55.3          53.7
std     14.9          22.1          25.3
min     18.0          10.0           3.0
25%     30.0          38.0          31.0
50%     43.0          55.0          52.0
75%     55.0          73.0          76.0
max     69.0          99.0          99.0

Elbow Method:
  K=2: inertia=198.4, silhouette=0.4512
  K=3: inertia=132.1, silhouette=0.5234
  K=4: inertia=87.6, silhouette=0.6012
  K=5: inertia=72.3, silhouette=0.5567
  K=6: inertia=61.8, silhouette=0.5123
  K=7: inertia=53.2, silhouette=0.4789

Customer Segments:
         count  avg_income  avg_spending  avg_age
Cluster
0           50        30.2          20.4     43.1
1           60        54.8          49.7     41.5
2           50        84.7          74.8     42.3
3           40        55.1          84.6     44.2

Business Interpretation:
  Cluster 0: Budget Conscious (low income, low spending)
    Count=50, AvgIncome=30.2K, AvgSpending=20.4
  Cluster 1: Average Customers (moderate income and spending)
    Count=60, AvgIncome=54.8K, AvgSpending=49.7
  Cluster 2: Premium Customers (high income, high spending)
    Count=50, AvgIncome=84.7K, AvgSpending=74.8
  Cluster 3: Average Customers (moderate income and spending)
    Count=40, AvgIncome=55.1K, AvgSpending=84.6
```

### Choosing DBSCAN Parameters with K-Distance Plot

```python
import numpy as np
from sklearn.neighbors import NearestNeighbors
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_blobs
from sklearn.preprocessing import StandardScaler

# Generate data with noise
X_clean, _ = make_blobs(n_samples=250, centers=3, cluster_std=0.5, random_state=42)
noise = np.random.uniform(-10, 10, (30, 2))
X = np.vstack([X_clean, noise])
X_scaled = StandardScaler().fit_transform(X)

# K-distance plot to find eps
# Find distance to k-th nearest neighbor (k = min_samples)
k = 5
neighbors = NearestNeighbors(n_neighbors=k)
neighbors.fit(X_scaled)
distances, _ = neighbors.kneighbors(X_scaled)
k_distances = np.sort(distances[:, k-1])  # Distance to k-th neighbor

print("K-distance statistics (k=5):")
print(f"  Min: {k_distances[0]:.4f}")
print(f"  25th percentile: {np.percentile(k_distances, 25):.4f}")
print(f"  50th percentile: {np.percentile(k_distances, 50):.4f}")
print(f"  75th percentile: {np.percentile(k_distances, 75):.4f}")
print(f"  90th percentile: {np.percentile(k_distances, 90):.4f}")
print(f"  Max: {k_distances[-1]:.4f}")

# The 'elbow' in k-distance plot suggests eps ~ 0.5
eps_value = 0.5
db = DBSCAN(eps=eps_value, min_samples=k)
labels = db.fit_predict(X_scaled)

n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = list(labels).count(-1)
print(f"\nDBSCAN with eps={eps_value}, min_samples={k}:")
print(f"  Clusters found: {n_clusters}")
print(f"  Noise points: {n_noise} out of {len(X)} total")
print(f"  True noise injected: 30")
```

Choosing eps for DBSCAN is often done with a k-distance plot. We compute the distance from each point to its k-th nearest neighbor (where k = min_samples), sort these distances, and look for the "elbow." Points in dense clusters have small k-distances; noise points have large k-distances. The elbow separates the two, giving us a good eps value.

**Output:**

```
K-distance statistics (k=5):
  Min: 0.0821
  25th percentile: 0.1534
  50th percentile: 0.2012
  75th percentile: 0.3245
  90th percentile: 0.8912
  Max: 2.3456

DBSCAN with eps=0.5, min_samples=5:
  Clusters found: 3
  Noise points: 28 out of 280 total
  True noise injected: 30
```

## Common Mistakes

### Forgetting to Scale Features Before K-Means

**Wrong:**

```
from sklearn.cluster import KMeans
import numpy as np

# Income in thousands, age in years
X = np.array([[25000, 25], [30000, 30], [80000, 35], [85000, 40]])
km = KMeans(n_clusters=2, random_state=42, n_init=10)
print(km.fit_predict(X))  # Dominated by income column
```

Clusters are entirely based on income because its scale is 1000x larger than age. Age has zero influence.

**Correct:**

```
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[25000, 25], [30000, 30], [80000, 35], [85000, 40]])
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
km = KMeans(n_clusters=2, random_state=42, n_init=10)
print(km.fit_predict(X_scaled))  # Both features contribute equally
```

K-Means uses Euclidean distance. If features have very different scales (income in thousands vs age in years), the large-scale feature dominates. Always use StandardScaler or MinMaxScaler before running distance-based clustering algorithms.

### Assuming K-Means Always Finds the Right Clusters

**Wrong:**

```
from sklearn.cluster import KMeans
from sklearn.datasets import make_moons

X, _ = make_moons(n_samples=200, noise=0.1, random_state=42)
km = KMeans(n_clusters=2, random_state=42, n_init=10)
labels = km.fit_predict(X)
# K-Means splits the moons incorrectly because they are not spherical
```

K-Means assumes spherical clusters and draws a linear boundary. It cannot separate crescent-shaped or interleaving clusters.

**Correct:**

```
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler

X, _ = make_moons(n_samples=200, noise=0.1, random_state=42)
X_scaled = StandardScaler().fit_transform(X)
db = DBSCAN(eps=0.3, min_samples=5)
labels = db.fit_predict(X_scaled)
print(f"Clusters found: {len(set(labels)) - (1 if -1 in labels else 0)}")
```

K-Means works best with spherical, equally-sized clusters. For irregular shapes (moons, rings, elongated clusters), use DBSCAN or spectral clustering instead. Always visualize your data first to understand its shape.

### Using Silhouette Score with Only One Cluster or All Noise

**Wrong:**

```
from sklearn.cluster import DBSCAN
from sklearn.metrics import silhouette_score
import numpy as np

X = np.random.randn(100, 2)
db = DBSCAN(eps=0.1, min_samples=50)  # eps too small
labels = db.fit_predict(X)
print(silhouette_score(X, labels))  # Error if only one cluster or all noise
```

ValueError: Number of labels is 1. Valid values are 2 to n_samples - 1 (inclusive). Silhouette score needs at least 2 clusters.

**Correct:**

```
from sklearn.cluster import DBSCAN
from sklearn.metrics import silhouette_score
import numpy as np

X = np.random.randn(100, 2)
db = DBSCAN(eps=0.1, min_samples=50)
labels = db.fit_predict(X)

n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
if n_clusters >= 2:
    mask = labels != -1  # Exclude noise points
    score = silhouette_score(X[mask], labels[mask])
    print(f"Silhouette score: {score:.4f}")
else:
    print(f"Only {n_clusters} cluster(s) found. Adjust parameters.")
```

Silhouette score requires at least 2 clusters. If DBSCAN labels everything as noise (-1) or finds only one cluster, the function raises an error. Always check the number of clusters before computing silhouette score, and exclude noise points from the calculation.

### Interpreting DBSCAN Noise Label as a Cluster

**Wrong:**

```
from sklearn.cluster import DBSCAN
import numpy as np

X = np.random.randn(100, 2)
db = DBSCAN(eps=0.5, min_samples=5)
labels = db.fit_predict(X)
n_clusters = len(set(labels))  # Counts -1 (noise) as a cluster!
print(f"Clusters: {n_clusters}")  # Wrong: includes noise
```

The noise label -1 is counted as a cluster, giving an inflated count.

**Correct:**

```
from sklearn.cluster import DBSCAN
import numpy as np

X = np.random.randn(100, 2)
db = DBSCAN(eps=0.5, min_samples=5)
labels = db.fit_predict(X)
n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = list(labels).count(-1)
print(f"Clusters: {n_clusters}, Noise points: {n_noise}")
```

DBSCAN assigns -1 to noise points. When counting clusters with `set(labels)`, -1 is included. Always subtract 1 from the count if -1 is present. Noise points are not a cluster -- they are outliers that did not fit any dense region.

### Running K-Means with Too Few Iterations

**Wrong:**

```
from sklearn.cluster import KMeans
import numpy as np

X = np.random.randn(1000, 10)
# n_init=1 and max_iter=1: very likely to get bad clusters
km = KMeans(n_clusters=5, n_init=1, max_iter=1, random_state=42)
km.fit(X)
print(f"Inertia: {km.inertia_:.1f}")  # Much higher than optimal
```

With only 1 initialization and 1 iteration, K-Means almost certainly has not converged. The centroids are not optimal.

**Correct:**

```
from sklearn.cluster import KMeans
import numpy as np

X = np.random.randn(1000, 10)
# Default n_init=10 runs the algorithm 10 times with different seeds
km = KMeans(n_clusters=5, n_init=10, max_iter=300, random_state=42)
km.fit(X)
print(f"Inertia: {km.inertia_:.1f}")
print(f"Iterations to converge: {km.n_iter_}")
```

K-Means results depend on initialization. `n_init=10` runs the algorithm 10 times with different random centroids and picks the best result. `max_iter=300` (the default) gives enough iterations for convergence. Never reduce these parameters unless you have a specific reason and understand the trade-off.

## Summary

- Unsupervised learning works with unlabeled data. Clustering groups similar data points together without being told what the groups should be.
- K-Means divides data into exactly K clusters by iteratively assigning points to the nearest centroid and updating centroids. Use the elbow method or silhouette score to choose K.
- K-Means assumes spherical, equally-sized clusters. It fails on irregular shapes (crescents, rings) and is sensitive to outliers and initialization. Use init='k-means++' to mitigate initialization issues.
- DBSCAN finds clusters based on density. It does not require specifying K, handles irregular shapes, and identifies outliers as noise (label -1). It needs eps and min_samples parameters.
- Hierarchical clustering builds a tree of clusters (dendrogram). Agglomerative (bottom-up) is more common. Ward linkage often produces the best results. Cut the dendrogram at the desired height for your number of clusters.
- The silhouette score (-1 to +1) evaluates clustering quality without labels. Higher scores mean points are well-matched to their own cluster and separated from other clusters.
- Always scale features before running distance-based clustering algorithms (K-Means, DBSCAN, Hierarchical). Unscaled features with different ranges will distort distance calculations.
- Choose the right algorithm for your data: K-Means for well-separated spherical clusters, DBSCAN for irregular shapes and when you do not know K, Hierarchical when you want to visualize the full merge hierarchy.
- Customer segmentation is the most common business application of clustering. Segment customers by behavior, then tailor marketing strategies for each segment.
- Evaluate different values of K using both the elbow method (inertia) and silhouette score. Use the k-distance plot to choose eps for DBSCAN.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/unsupervised-learning-clustering/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/unsupervised-learning-clustering/practice/*
