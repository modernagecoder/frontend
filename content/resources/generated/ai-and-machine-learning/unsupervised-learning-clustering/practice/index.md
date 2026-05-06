---
title: "Practice: Unsupervised Learning - Clustering (K-Means, DBSCAN, Hierarchical)"
description: "55 practice problems for Unsupervised Learning - Clustering (K-Means, DBSCAN, Hierarchical) in AI and Machine Learning"
slug: unsupervised-learning-clustering-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/unsupervised-learning-clustering/practice
category: "AI and Machine Learning"
---
# Practice: Unsupervised Learning - Clustering (K-Means, DBSCAN, Hierarchical)

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])
km = KMeans(n_clusters=2, random_state=42, n_init=10)
labels = km.fit_predict(X)
print(labels)
```

*Hint:* K-Means groups points that are close together. The first three points are near x=1, the last three near x=10.

**Answer:** `[1 1 1 0 0 0]` (or `[0 0 0 1 1 1]` -- cluster label numbers may vary but the grouping is the same)

K-Means finds two clusters: one around x=1 and one around x=10. The first three points (near 1) get one label and the last three (near 10) get another. The actual label numbers (0 or 1) can swap between runs, but the grouping is always the same.

### Q2. [Easy] What is the fundamental difference between supervised and unsupervised learning?

*Hint:* Think about whether the training data has labels or not.

**Answer:** In **supervised learning**, the training data has labels (known outputs for each input), and the model learns to predict these labels. In **unsupervised learning**, the training data has **no labels** -- the model must discover patterns, structures, or groupings on its own.

Supervised learning uses labeled data to learn a mapping from inputs to outputs (e.g., email features to spam/not-spam). Unsupervised learning works with unlabeled data and finds hidden structure (e.g., customer segments, anomalies).

### Q3. [Easy] Name three real-world applications of clustering.

*Hint:* Think about grouping customers, detecting fraud, and organizing documents.

**Answer:** 1. **Customer segmentation**: Grouping customers by purchasing behavior for targeted marketing. 2. **Anomaly detection**: Identifying fraud transactions that do not belong to any normal cluster. 3. **Document grouping**: Organizing news articles or emails into topic groups automatically.

Clustering is used wherever you need to discover natural groups in data without predefined labels. Other examples include image compression, gene analysis, social network community detection, and geographic zoning.

### Q4. [Easy] What does the K in K-Means represent?

*Hint:* It is a parameter you must choose before running the algorithm.

**Answer:** K represents the **number of clusters** you want the algorithm to find. You must specify K before running K-Means. The algorithm then partitions the data into exactly K groups.

Choosing K is one of the main challenges with K-Means. If K is too small, distinct groups get merged. If K is too large, natural groups get split. The elbow method and silhouette score help choose the right K.

### Q5. [Easy] What is the output?

```
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[0, 0], [1, 0], [0, 1], [10, 10], [11, 10], [10, 11]])
km = KMeans(n_clusters=2, random_state=0, n_init=10)
km.fit(X)
print(km.cluster_centers_.shape)
print(km.inertia_)
```

*Hint:* cluster_centers_ has shape (K, n_features). Inertia is the sum of squared distances to centroids.

**Answer:** `(2, 2)`
A small inertia value (approximately 2.0 to 4.0) because the clusters are tight.

With 2 clusters and 2 features, `cluster_centers_` has shape (2, 2). Inertia is the total sum of squared distances from each point to its assigned centroid. Since points are clustered tightly around (0,0) and (10,10), the inertia is small.

### Q6. [Easy] What is the elbow method and why is it used?

*Hint:* It helps choose the number of clusters K by looking at how inertia changes.

**Answer:** The elbow method plots the number of clusters (K) on the x-axis versus the **inertia** (within-cluster sum of squared distances) on the y-axis. As K increases, inertia decreases. The **elbow point** is where the rate of decrease sharply changes (the curve bends). This suggests the optimal K beyond which adding more clusters gives diminishing returns.

With K=1, inertia is very high (everything in one cluster). As K increases, inertia drops. But after the true number of clusters, the improvement becomes marginal. The elbow is where additional clusters stop being meaningful.

### Q7. [Medium] What is the output?

```
from sklearn.cluster import DBSCAN
import numpy as np

X = np.array([[1, 2], [2, 2], [2, 3], [8, 7], [8, 8], [25, 80]])
db = DBSCAN(eps=1.5, min_samples=2)
labels = db.fit_predict(X)
print(labels)
print(f"Noise points: {list(labels).count(-1)}")
```

*Hint:* Points within eps=1.5 of each other form clusters. The point at [25, 80] is far from everything else.

**Answer:** `[0 0 0 1 1 -1]`
`Noise points: 1`

The first three points ([1,2], [2,2], [2,3]) are within 1.5 distance of each other and form cluster 0. The two points ([8,7], [8,8]) are within 1.5 of each other and form cluster 1. The point [25,80] is far from all others, has no neighbors within eps=1.5, and is labeled -1 (noise).

### Q8. [Medium] What are the two key parameters of DBSCAN, and what does each control?

*Hint:* One controls the neighborhood radius and the other controls the minimum density.

**Answer:** **eps (epsilon)**: The maximum distance between two points for them to be considered neighbors. **min_samples**: The minimum number of points within eps distance required for a point to be considered a core point (part of a dense region).

eps defines how close points must be to be in the same neighborhood. min_samples defines how many neighbors a point needs to be considered a core point. If a point has fewer than min_samples neighbors, it is either a border point or noise. Together, these parameters define what counts as a dense region.

### Q9. [Medium] What is the difference between a core point, a border point, and a noise point in DBSCAN?

*Hint:* It depends on how many neighbors a point has within eps distance.

**Answer:** **Core point**: Has at least min_samples points within eps distance (including itself). It is in the dense interior of a cluster. **Border point**: Has fewer than min_samples neighbors but is within eps distance of a core point. It sits on the edge of a cluster. **Noise point**: Has fewer than min_samples neighbors and is not within eps of any core point. Labeled -1 by DBSCAN.

Core points form the backbone of clusters. Border points are reachable from core points but are not dense enough on their own. Noise points are isolated -- too far from any dense region. This three-tier classification is what allows DBSCAN to find arbitrarily shaped clusters and identify outliers.

### Q10. [Medium] What is the output?

```
from sklearn.cluster import AgglomerativeClustering
import numpy as np

X = np.array([[1, 1], [1.5, 1.5], [5, 5], [5.5, 5.5], [9, 9], [9.5, 9.5]])
agg = AgglomerativeClustering(n_clusters=3, linkage='ward')
labels = agg.fit_predict(X)
print(labels)
```

*Hint:* Ward linkage minimizes within-cluster variance. Points near each other get grouped together.

**Answer:** `[0 0 1 1 2 2]` (label numbers may vary but pairs are grouped together)

There are three natural pairs: (1,1)+(1.5,1.5), (5,5)+(5.5,5.5), and (9,9)+(9.5,9.5). Agglomerative clustering with ward linkage correctly identifies these three tight pairs as separate clusters.

### Q11. [Medium] What is the silhouette score and what range of values can it take?

*Hint:* It measures how similar a point is to its own cluster compared to other clusters.

**Answer:** The silhouette score measures clustering quality. For each point, it compares the average distance to points in its own cluster (a) versus the average distance to points in the nearest other cluster (b). The formula is: **(b - a) / max(a, b)**. The score ranges from **-1 to +1**. +1 means the point is far from other clusters and close to its own. 0 means it is on the boundary. -1 means it is likely in the wrong cluster.

A high average silhouette score (above 0.5) indicates good clustering. A score near 0 suggests overlapping clusters. Negative scores suggest misassigned points. Use silhouette_score() from sklearn.metrics to compute it.

### Q12. [Medium] What is the output?

```
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1, 1], [1, 2], [2, 1], [10, 10], [10, 11], [11, 10]])
km = KMeans(n_clusters=2, random_state=42, n_init=10)
km.fit(X)
print(km.predict([[1.5, 1.5]]))
print(km.predict([[10.5, 10.5]]))
```

*Hint:* predict() assigns new points to the nearest existing centroid.

**Answer:** `[1]` (or `[0]`) for the point near (1,1)
`[0]` (or `[1]`) for the point near (10,10)
The two predictions will have different labels.

After fitting, `predict()` assigns new data points to the nearest centroid without retraining. [1.5, 1.5] is near the cluster around (1, 1) and [10.5, 10.5] is near the cluster around (10, 10). They get different cluster labels.

### Q13. [Medium] Write code to find the optimal K for K-Means using silhouette score. Use `make_blobs(n_samples=300, centers=4, random_state=42)`. Test K from 2 to 8 and print the best K.

*Hint:* Loop through K values, compute silhouette_score for each, and pick the K with the highest score.

**Answer:** ```
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from sklearn.metrics import silhouette_score

X, _ = make_blobs(n_samples=300, centers=4, random_state=42)

best_k = 2
best_score = -1
for k in range(2, 9):
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = km.fit_predict(X)
    score = silhouette_score(X, labels)
    print(f"K={k}: silhouette={score:.4f}")
    if score > best_score:
        best_score = score
        best_k = k

print(f"Best K: {best_k} with silhouette score: {best_score:.4f}")
```

We iterate through K values, fit K-Means for each, and compute the silhouette score. The K with the highest silhouette score is selected as the best. With data generated from 4 centers, K=4 should have the highest score.

### Q14. [Hard] Explain why K-Means fails on crescent-shaped (moon) data but DBSCAN succeeds.

*Hint:* Think about how each algorithm defines cluster membership.

**Answer:** K-Means assigns each point to the **nearest centroid** and creates **Voronoi partitions** (straight-line boundaries). For crescent shapes, the centroid of each crescent is in the space between them, causing K-Means to draw a straight line that splits both crescents incorrectly. DBSCAN follows the **density** of points along each crescent. Since points within each crescent are densely connected, DBSCAN traces the shape correctly regardless of curvature.

K-Means is fundamentally limited to convex, spherical cluster shapes because it uses distance-to-centroid as the only criterion. DBSCAN uses density-reachability (chains of nearby points), which can follow any shape as long as the density remains consistent.

### Q15. [Hard] What is the difference between agglomerative and divisive hierarchical clustering? Which is more commonly used and why?

*Hint:* One starts from individual points and merges; the other starts from one big cluster and splits.

**Answer:** **Agglomerative (bottom-up)**: Starts with each data point as its own cluster. At each step, the two closest clusters are merged. Continues until all points are in one cluster. **Divisive (top-down)**: Starts with all points in one cluster. At each step, the most heterogeneous cluster is split. Continues until each point is its own cluster. Agglomerative is more commonly used because it is computationally cheaper -- O(n^2 log n) for agglomerative vs O(2^n) for optimal divisive splits.

Agglomerative clustering only needs to find the two closest clusters at each step (a local decision). Divisive clustering needs to determine the best way to split a cluster (a global decision), which is much harder. In practice, sklearn only implements AgglomerativeClustering.

### Q16. [Hard] Write code to apply DBSCAN on `make_moons(n_samples=300, noise=0.1, random_state=42)`. Scale the data, find the clusters, and print the number of clusters and noise points.

*Hint:* Use StandardScaler before DBSCAN. Count clusters excluding the -1 label.

**Answer:** ```
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons
from sklearn.preprocessing import StandardScaler

X, _ = make_moons(n_samples=300, noise=0.1, random_state=42)
X_scaled = StandardScaler().fit_transform(X)

db = DBSCAN(eps=0.3, min_samples=5)
labels = db.fit_predict(X_scaled)

n_clusters = len(set(labels)) - (1 if -1 in labels else 0)
n_noise = list(labels).count(-1)

print(f"Clusters: {n_clusters}")
print(f"Noise points: {n_noise}")
print(f"Points per cluster:")
for lbl in sorted(set(labels)):
    name = "Noise" if lbl == -1 else f"Cluster {lbl}"
    print(f"  {name}: {list(labels).count(lbl)}")
```

StandardScaler normalizes features to zero mean and unit variance, which is essential for DBSCAN since it uses distance. With eps=0.3 and min_samples=5 on scaled moon data, DBSCAN typically finds 2 clusters matching the two crescents, with a few noise points.

### Q17. [Hard] Why does K-Means use the `init='k-means++'` initialization strategy by default in sklearn? What problem does it solve?

*Hint:* Random initialization can lead to poor convergence. K-Means++ provides a smarter starting point.

**Answer:** Random initialization can place centroids close together or in suboptimal locations, causing K-Means to converge to a **local minimum** (a solution that is not globally optimal). `k-means++` selects initial centroids that are **far apart from each other**: the first centroid is chosen randomly, and each subsequent centroid is selected with probability proportional to its squared distance from the nearest existing centroid. This ensures centroids start spread across the data, leading to faster convergence and better final clusters.

Without k-means++, you might need many random restarts (high n_init) to find a good solution. K-Means++ dramatically reduces the chance of a poor initialization, often finding near-optimal solutions in a single run. It was proven to provide O(log k) competitive approximation to the optimal clustering.

### Q18. [Medium] Write code to cluster the Iris dataset (without using the labels) using K-Means with K=3, and then compare the cluster assignments to the actual species labels using a crosstab.

*Hint:* Use KMeans(n_clusters=3), fit_predict on iris.data, then pd.crosstab to compare labels.

**Answer:** ```
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.datasets import load_iris

iris = load_iris()
km = KMeans(n_clusters=3, random_state=42, n_init=10)
clusters = km.fit_predict(iris.data)

print("Cluster vs Actual Species:")
print(pd.crosstab(clusters, iris.target, rownames=['Cluster'], colnames=['Species']))
```

Even without labels, K-Means often discovers natural groupings that align with the true species. The crosstab shows how well each cluster maps to each species. Iris setosa is usually perfectly separated, while versicolor and virginica may share some points.

### Q19. [Hard] Explain the difference between K-Means inertia and silhouette score. When would they give conflicting recommendations for K?

*Hint:* Inertia always improves with more K. Silhouette can peak at a lower K.

**Answer:** **Inertia** measures within-cluster sum of squared distances. It always decreases as K increases (more clusters = tighter clusters). **Silhouette score** measures how well each point fits its cluster versus neighboring clusters, ranging from -1 to +1, and can decrease when K is too high. They conflict when increasing K reduces inertia slightly but fragments natural clusters, causing silhouette to drop.

Use both metrics together: the elbow method (inertia) gives a rough K, and silhouette confirms or refines it. Neither alone is sufficient -- inertia always favors more clusters, while silhouette can be fooled by very unequal cluster sizes.

### Q20. [Easy] What is the output?

```
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[0, 0], [10, 10]])
km = KMeans(n_clusters=2, random_state=42, n_init=10)
km.fit(X)
print(km.labels_)
print(km.inertia_)
```

*Hint:* With 2 points and 2 clusters, each point is its own centroid.

**Answer:** `[1 0]` (or `[0 1]`)
`0.0`

With exactly 2 data points and K=2, each point becomes the centroid of its own cluster. The distance from each point to its centroid is 0, so inertia = 0.

### Q21. [Medium] What is image compression using K-Means? Explain the process.

*Hint:* Each pixel has an RGB color. K-Means groups similar colors together.

**Answer:** Image compression with K-Means reduces the number of distinct colors in an image. Each pixel is treated as a 3D data point (R, G, B values). K-Means clusters all pixels into K clusters. Each pixel is then replaced by its cluster centroid color. An image with millions of unique colors is reduced to K colors (e.g., 16 or 32), significantly reducing file size while preserving visual quality.

If K=16, the image uses only 16 colors. Instead of storing 3 bytes per pixel (24-bit color), you store a 4-bit cluster index (log2(16)=4 bits) per pixel plus a palette of 16 colors. This achieves roughly 6:1 compression for 24-bit images.

### Q22. [Hard] Write code to apply both K-Means and Agglomerative Clustering on the Iris dataset (K=3 for both) and compare their silhouette scores.

*Hint:* Fit both models, compute silhouette_score for each, and print which is higher.

**Answer:** ```
from sklearn.cluster import KMeans, AgglomerativeClustering
from sklearn.datasets import load_iris
from sklearn.metrics import silhouette_score
from sklearn.preprocessing import StandardScaler

iris = load_iris()
X = StandardScaler().fit_transform(iris.data)

km = KMeans(n_clusters=3, random_state=42, n_init=10)
km_labels = km.fit_predict(X)
km_sil = silhouette_score(X, km_labels)

agg = AgglomerativeClustering(n_clusters=3, linkage='ward')
agg_labels = agg.fit_predict(X)
agg_sil = silhouette_score(X, agg_labels)

print(f"K-Means silhouette: {km_sil:.4f}")
print(f"Agglomerative silhouette: {agg_sil:.4f}")
print(f"Winner: {'K-Means' if km_sil > agg_sil else 'Agglomerative'}")
```

Both algorithms are applied with the same K on scaled data. Ward linkage in agglomerative clustering minimizes within-cluster variance (similar to K-Means' objective), so they often produce very similar results on well-separated clusters like Iris.

## Mixed Questions

### Q1. [Easy] What is the output?

```
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
km = KMeans(n_clusters=1, random_state=42, n_init=10)
km.fit(X)
print(km.cluster_centers_)
print(km.labels_)
```

*Hint:* With K=1, all points belong to one cluster. The centroid is the mean of all points.

**Answer:** `[[0.5 0.5]]`
`[0 0 0 0]`

With K=1, every point is assigned to cluster 0. The single centroid is the mean of all points: ((0+0+1+1)/4, (0+1+0+1)/4) = (0.5, 0.5).

### Q2. [Easy] What is the output?

```
from sklearn.cluster import DBSCAN
import numpy as np

X = np.array([[1, 1], [100, 100], [200, 200]])
db = DBSCAN(eps=5, min_samples=2)
labels = db.fit_predict(X)
print(labels)
```

*Hint:* All three points are far apart. With eps=5 and min_samples=2, no point has a neighbor within distance 5.

**Answer:** `[-1 -1 -1]`

Each point is more than 5 units away from every other point. No point has any neighbor within eps=5, so no core points exist. All points are labeled -1 (noise). DBSCAN correctly identifies that there are no dense clusters in this data.

### Q3. [Easy] Why must you scale features before applying K-Means or DBSCAN?

*Hint:* These algorithms use distance. What happens if one feature has a much larger range than another?

**Answer:** K-Means and DBSCAN both use **Euclidean distance**. If features have different scales (e.g., income in thousands vs age in years), the large-scale feature dominates the distance calculation and the small-scale feature is effectively ignored. Scaling (using StandardScaler or MinMaxScaler) ensures all features contribute equally to the distance.

For example, the distance between (25000, 25) and (30000, 30) is dominated by the 5000 difference in income -- the 5-year age difference contributes almost nothing. After scaling, both features have similar ranges and both influence clustering.

### Q4. [Medium] What is the output?

```
from sklearn.metrics import silhouette_score
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[0, 0], [0.1, 0.1], [10, 10], [10.1, 10.1]])
km = KMeans(n_clusters=2, random_state=42, n_init=10)
labels = km.fit_predict(X)
score = silhouette_score(X, labels)
print(f"Score: {score:.4f}")
print(f"Score > 0.9: {score > 0.9}")
```

*Hint:* Two very tight, well-separated clusters should have a silhouette score close to +1.

**Answer:** `Score: 0.9965` (approximately)
`Score > 0.9: True`

The two clusters are very compact (points within each cluster are 0.1 apart) and very well-separated (clusters are 10 units apart). This produces a silhouette score very close to 1.0, indicating excellent clustering.

### Q5. [Medium] Write code that generates blob data with 3 centers, runs K-Means with K=3, and prints the cluster sizes (number of points per cluster).

*Hint:* Use make_blobs, fit KMeans, then count labels using np.bincount or a loop.

**Answer:** ```
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
import numpy as np

X, _ = make_blobs(n_samples=300, centers=3, random_state=42)
km = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = km.fit_predict(X)

print("Cluster sizes:")
for i in range(3):
    size = np.sum(labels == i)
    print(f"  Cluster {i}: {size} points")
print(f"Total: {len(labels)}")
```

make_blobs generates 300 points distributed across 3 centers (100 each by default). K-Means with K=3 correctly recovers the three clusters. np.sum(labels == i) counts points assigned to cluster i.

### Q6. [Medium] A data scientist runs K-Means with K=5 on customer data. The silhouette score is 0.15. What does this indicate, and what should they try next?

*Hint:* A silhouette score near 0 means clusters are overlapping or poorly defined.

**Answer:** A silhouette score of 0.15 indicates **poor clustering** -- clusters overlap significantly and points are not well-separated. The data scientist should: 1. Try different values of K (the true number of clusters might not be 5). 2. Scale the features if not already done. 3. Try different algorithms (DBSCAN if clusters are non-spherical). 4. Examine whether the features used are actually meaningful for clustering. 5. Visualize the data using PCA or t-SNE to understand its structure.

Good silhouette scores are typically above 0.5. A score of 0.15 suggests the chosen K does not match the natural structure of the data, or the data does not have clear cluster boundaries with the current features.

### Q7. [Medium] What is the output?

```
from sklearn.cluster import DBSCAN
import numpy as np

X = np.array([[1, 1], [1.1, 1.1], [1.2, 1.2], [1.3, 1.3], [10, 10]])
db = DBSCAN(eps=0.5, min_samples=3)
labels = db.fit_predict(X)
print(labels)
print(f"Clusters: {len(set(labels)) - (1 if -1 in labels else 0)}")
```

*Hint:* The first four points are very close together. The last point is far away and alone.

**Answer:** `[0 0 0 0 -1]`
`Clusters: 1`

The first four points are all within 0.5 distance of each other and each has at least 3 neighbors, making them core points in cluster 0. The point [10, 10] has no neighbors within eps=0.5, so it is labeled -1 (noise). One cluster is found.

### Q8. [Hard] Raghav runs DBSCAN on a dataset and gets 0 clusters (all points labeled as noise). What are two possible reasons and how should he fix each?

*Hint:* Think about what makes points noise in DBSCAN: eps and min_samples.

**Answer:** 1. **eps is too small**: If eps is smaller than the typical distance between neighboring points, no point will have enough neighbors to be a core point. Fix: increase eps. Use the k-distance plot to choose an appropriate eps. 2. **min_samples is too high**: If min_samples is larger than the number of points in any natural cluster, no dense regions can form. Fix: decrease min_samples. A common starting point is min_samples = 2 * n_features. Also check if the data is **not scaled** -- distances between points might be much larger than expected if features have vastly different scales.

DBSCAN is sensitive to both parameters. The k-distance plot helps find the right eps by showing the natural gap between dense regions and sparse regions. min_samples should reflect the expected minimum cluster size. Scaling is critical because DBSCAN uses absolute distances.

### Q9. [Hard] Write code to compare K-Means and DBSCAN on `make_circles(n_samples=300, noise=0.05, factor=0.5, random_state=42)`. Print the silhouette score for each algorithm.

*Hint:* Scale the data. Run KMeans(n_clusters=2) and DBSCAN(eps=0.3, min_samples=5). Handle DBSCAN noise for silhouette.

**Answer:** ```
from sklearn.cluster import KMeans, DBSCAN
from sklearn.datasets import make_circles
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

X, _ = make_circles(n_samples=300, noise=0.05, factor=0.5, random_state=42)
X_scaled = StandardScaler().fit_transform(X)

# K-Means
km = KMeans(n_clusters=2, random_state=42, n_init=10)
km_labels = km.fit_predict(X_scaled)
km_sil = silhouette_score(X_scaled, km_labels)

# DBSCAN
db = DBSCAN(eps=0.3, min_samples=5)
db_labels = db.fit_predict(X_scaled)
mask = db_labels != -1
db_sil = silhouette_score(X_scaled[mask], db_labels[mask]) if len(set(db_labels[mask])) >= 2 else -1

print(f"K-Means silhouette: {km_sil:.4f}")
print(f"DBSCAN silhouette:  {db_sil:.4f}")
print(f"DBSCAN wins: {db_sil > km_sil}")
```

Concentric circles cannot be separated by K-Means (which draws straight-line boundaries), so its silhouette score is low. DBSCAN follows the density along each ring and correctly separates them, achieving a higher silhouette score. This is a classic demonstration of algorithm selection based on data geometry.

### Q10. [Hard] Explain the four linkage methods in hierarchical clustering (single, complete, average, ward). Which is the default in sklearn and why?

*Hint:* Each measures inter-cluster distance differently. Ward minimizes variance.

**Answer:** **Single linkage**: Distance = minimum distance between any two points in the two clusters. Produces elongated chains. **Complete linkage**: Distance = maximum distance between any two points. Produces compact clusters. **Average linkage**: Distance = average of all pairwise distances between points in the two clusters. A balance between single and complete. **Ward linkage**: Merges the pair of clusters that causes the smallest increase in total within-cluster variance. Default in sklearn because it produces the most balanced, compact clusters similar to K-Means output.

Single linkage can create long, chain-like clusters (the chaining effect). Complete linkage prevents this but can split natural clusters that are not perfectly spherical. Average linkage is a compromise. Ward linkage is most popular because it creates compact, equally-sized clusters and is equivalent to minimizing the sum of squared errors (like K-Means).

### Q11. [Hard] Write a function `find_best_eps(X, min_samples)` that returns a suggested eps value for DBSCAN using the k-distance method. Use NearestNeighbors to find the distance to the k-th neighbor, sort them, and return the distance at the 90th percentile as the suggested eps.

*Hint:* Use NearestNeighbors(n_neighbors=min_samples), fit, kneighbors, sort distances, take 90th percentile.

**Answer:** ```
import numpy as np
from sklearn.neighbors import NearestNeighbors

def find_best_eps(X, min_samples):
    nn = NearestNeighbors(n_neighbors=min_samples)
    nn.fit(X)
    distances, _ = nn.kneighbors(X)
    k_distances = np.sort(distances[:, min_samples - 1])
    suggested_eps = np.percentile(k_distances, 90)
    return suggested_eps

# Test it
from sklearn.datasets import make_blobs
from sklearn.preprocessing import StandardScaler

X, _ = make_blobs(n_samples=300, centers=3, random_state=42)
X_scaled = StandardScaler().fit_transform(X)
eps = find_best_eps(X_scaled, min_samples=5)
print(f"Suggested eps: {eps:.4f}")
```

The k-distance method sorts the distance from each point to its k-th nearest neighbor. Points in clusters have small k-distances; noise points have large ones. The 90th percentile captures the transition point, giving an eps that includes most cluster points while excluding noise.

### Q12. [Hard] Meera has a dataset with clusters of very different densities -- one tight cluster with 50 points and one sparse cluster with 200 points. Which algorithm would struggle and which would work? Explain.

*Hint:* DBSCAN uses a single eps. Can one eps value capture both tight and sparse clusters?

**Answer:** **DBSCAN struggles** with varying density clusters. A single eps value cannot capture both a tight cluster (needing small eps) and a sparse cluster (needing large eps). A small eps would fragment the sparse cluster; a large eps would merge the tight cluster with noise. **K-Means** would handle this better because it does not depend on density -- it assigns points to the nearest centroid regardless of cluster compactness. Alternatively, **HDBSCAN** (Hierarchical DBSCAN) handles varying densities by building a hierarchy of DBSCAN solutions at different eps values.

This is a well-known limitation of DBSCAN. Real-world data often has clusters of different densities. HDBSCAN (available in the hdbscan library) automatically adapts to varying densities and is the go-to solution when DBSCAN fails for this reason.

## Multiple Choice Questions

### Q1. [Easy] Which of the following is NOT a clustering algorithm?

**Answer:** C

**C is correct.** Logistic Regression is a supervised classification algorithm, not a clustering algorithm. K-Means, DBSCAN, and Agglomerative Clustering are all unsupervised clustering algorithms.

### Q2. [Easy] What does DBSCAN label a point that does not belong to any cluster?

**Answer:** B

**B is correct.** DBSCAN labels noise points (outliers) as -1. These are points that do not have enough neighbors within eps distance to be core points and are not reachable from any core point.

### Q3. [Easy] What does the elbow method help determine in K-Means?

**Answer:** B

**B is correct.** The elbow method plots K versus inertia (within-cluster sum of squares). The 'elbow' point -- where the curve bends and starts to flatten -- suggests the optimal number of clusters.

### Q4. [Easy] What is the range of the silhouette score?

**Answer:** B

**B is correct.** The silhouette score ranges from -1 (worst, point is in the wrong cluster) to +1 (best, point is well-matched to its own cluster and separated from others). 0 indicates the point is on the boundary between clusters.

### Q5. [Easy] Which of the following statements about K-Means is TRUE?

**Answer:** C

**C is correct.** K-Means requires K as input. It cannot determine the number of clusters automatically (A is wrong -- it assumes spherical clusters, B is wrong -- K must be specified, D is wrong -- outliers can pull centroids).

### Q6. [Easy] What does `KMeans.inertia_` measure?

**Answer:** B

**B is correct.** Inertia (also called within-cluster sum of squares or WCSS) is the sum of squared distances from each point to its assigned centroid. Lower inertia means tighter clusters. It always decreases as K increases.

### Q7. [Medium] Priya has data with crescent-shaped clusters. Which algorithm should she use?

**Answer:** C

**C is correct.** DBSCAN can find arbitrarily shaped clusters because it follows density, not distance to centroids. K-Means (A) assumes spherical clusters and would fail. Linear Regression (B) and Naive Bayes (D) are supervised algorithms, not clustering algorithms.

### Q8. [Medium] In DBSCAN, what is a 'core point'?

**Answer:** B

**B is correct.** A core point has at least min_samples points (including itself) within a radius of eps. Core points form the dense interior of clusters. Points near core points but without enough neighbors themselves are border points.

### Q9. [Medium] Which hierarchical clustering linkage method minimizes within-cluster variance?

**Answer:** D

**D is correct.** Ward linkage merges clusters that result in the minimum increase in total within-cluster variance. It produces compact, balanced clusters similar to K-Means. Single linkage (A) uses minimum distance and can create chains.

### Q10. [Medium] What is a dendrogram?

**Answer:** B

**B is correct.** A dendrogram is a tree-shaped diagram that shows how hierarchical clustering progressively merges (or splits) clusters. The height at which branches merge indicates the distance between clusters. Cutting the dendrogram at a specific height gives a flat clustering.

### Q11. [Medium] Arjun scales his data with StandardScaler before DBSCAN. Why is this important?

**Answer:** C

**C is correct.** DBSCAN uses Euclidean distance. If income is in thousands and age is in years, the income feature dominates the distance. A single eps value cannot meaningfully capture neighborhood proximity when features have vastly different scales. Scaling ensures all features contribute equally.

### Q12. [Medium] What happens if you increase eps in DBSCAN while keeping min_samples constant?

**Answer:** B

**B is correct.** A larger eps means a wider neighborhood radius. More points become neighbors, more core points form, and previously separate clusters may merge. Fewer points are classified as noise because they now fall within eps of some core point.

### Q13. [Medium] Which of the following is an advantage of DBSCAN over K-Means?

**Answer:** B

**B is correct.** DBSCAN automatically determines the number of clusters based on density. K-Means requires K as input. DBSCAN is not always faster (A), does not always produce better silhouette scores (C), and actually struggles in high dimensions (D) due to the curse of dimensionality.

### Q14. [Hard] Kavitha runs K-Means 10 times with different random seeds on the same data with the same K. She gets different cluster assignments each time. What causes this?

**Answer:** B

**B is correct.** K-Means is sensitive to initialization. Different random starting centroids can lead the algorithm to converge to different local optima. This is why sklearn's KMeans uses n_init=10 by default (runs 10 times, keeps the best result) and init='k-means++' for smarter initialization.

### Q15. [Hard] A dataset has varying density clusters -- one very tight and one very spread out. Which algorithm handles this BEST?

**Answer:** C

**C is correct.** HDBSCAN (Hierarchical DBSCAN) handles varying density by building a hierarchy of DBSCAN solutions at different eps values. Standard DBSCAN (B) uses a single eps and struggles with varying densities. K-Means (A) does not consider density at all. Single linkage (D) can create chaining artifacts.

### Q16. [Hard] What is the time complexity of K-Means clustering?

**Answer:** B

**B is correct.** In each iteration, K-Means computes the distance from each of n points to each of k centroids in d dimensions, then updates centroids. This gives O(n * k * d) per iteration, and with i iterations total: O(n * k * i * d). This is efficient for large datasets, which is why K-Means is so popular.

### Q17. [Hard] Suresh uses silhouette_score() to compare K=2 (score=0.65) and K=5 (score=0.42) on the same dataset. What should he conclude?

**Answer:** C

**C is correct.** While K=2 has a higher silhouette score, the best K depends on multiple factors. The silhouette score favors fewer, well-separated clusters. The elbow method might suggest a different K, and domain knowledge (e.g., the business needs 5 customer segments) should also be considered. No single metric should be the sole decision-maker.

### Q18. [Hard] In agglomerative hierarchical clustering, what is the 'chaining effect'?

**Answer:** B

**B is correct.** The chaining effect is a known problem with single linkage. If a chain of points connects two distinct clusters (each pair close enough), single linkage merges them because it only considers the minimum distance between any two points. Complete or Ward linkage avoids this by considering all or variance-based distances.

### Q19. [Easy] What is the main goal of clustering?

**Answer:** B

**B is correct.** Clustering groups similar data points together based on their features, without any predefined labels. Prediction (A) is supervised learning. Dimensionality reduction (C) is a separate task. While DBSCAN can detect outliers (D), that is a side effect, not the main goal of clustering.

### Q20. [Medium] Rohit runs K-Means with K=3 and gets inertia=500. He runs it again with K=4 and gets inertia=480. Should he use K=4?

**Answer:** B

**B is correct.** Inertia always decreases as K increases (trivially, K=n gives inertia=0). The elbow method looks for where the decrease becomes marginal. A drop from 500 to 480 (4% improvement) after the curve has flattened suggests K=3 is at or past the elbow. Adding more clusters gives diminishing returns.

### Q21. [Hard] Which statement about the silhouette score is TRUE?

**Answer:** C

**C is correct.** A negative silhouette score means b(i) < a(i), meaning the point is closer to the nearest other cluster than to its own cluster -- it is likely misassigned. Silhouette works for any clustering algorithm (A is wrong), does not need labels (B is wrong), and can be negative (D is wrong).

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/unsupervised-learning-clustering/*
