---
title: "Practice: Introduction to AI and Machine Learning"
description: "55 practice problems for Introduction to AI and Machine Learning in AI and Machine Learning"
slug: introduction-to-ai-and-ml-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-ai-and-ml/practice/
category: "AI and Machine Learning"
---
# Practice: Introduction to AI and Machine Learning

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] Write Python code to check if scikit-learn (sklearn) is installed and print its version.

*Hint:* Use import sklearn and then sklearn.__version__.

**Answer:** ```
import sklearn
print(f"scikit-learn version: {sklearn.__version__}")
```

Every ML project starts with ensuring your tools are installed. scikit-learn is the most important library for traditional ML. The `__version__` attribute is available on most Python packages and tells you which version is installed.

### Q2. [Easy] Write Python code to install numpy, pandas, and scikit-learn using pip (as a shell command from Python).

*Hint:* Use the ! prefix in Jupyter or subprocess in a script.

**Answer:** ```
import subprocess
import sys

libraries = ['numpy', 'pandas', 'scikit-learn', 'matplotlib']
for lib in libraries:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', lib])
    print(f"{lib} installed successfully")
```

This is the proper way to install packages from within Python code. Using `sys.executable` ensures you install to the correct Python environment. In Jupyter notebooks, you can simply use `!pip install numpy pandas scikit-learn matplotlib`.

### Q3. [Easy] What is the difference between AI and Machine Learning? Give one example of AI that is NOT Machine Learning.

*Hint:* AI is the broader field. ML is one way to achieve AI. Think of rule-based systems.

**Answer:** AI is the broad goal of creating intelligent machines. ML is a specific subset of AI where machines learn from data. An example of AI that is NOT ML: a rule-based chess engine that uses hardcoded strategies like "if opponent threatens queen, protect it" -- it is intelligent behavior but learns nothing from data.

A thermostat that maintains room temperature using if-else rules is AI (it makes intelligent decisions) but not ML (it does not learn from data). A spam filter that was manually programmed with rules like 'if email contains lottery, mark as spam' is also AI without ML. ML only applies when the system improves through experience with data.

### Q4. [Easy] What type of Machine Learning is spam email detection? Explain why.

*Hint:* Think about whether the training data has labels or not.

**Answer:** Spam detection is **Supervised Learning (Classification)**. The training data has labels: each email is tagged as either 'spam' or 'not spam'. The model learns patterns from these labeled examples to classify new emails.

Since we have labeled data (emails marked as spam or not spam), this is supervised learning. Since the output is a category (spam or not spam) rather than a continuous number, it is specifically a classification problem. If we were predicting the 'spam probability score' as a continuous value, it would still be supervised but regression.

### Q5. [Easy] Name three real-world applications of Machine Learning that you interact with daily.

*Hint:* Think about your phone, social media, and streaming services.

**Answer:** 1. **YouTube/Netflix recommendations** -- ML algorithms analyze your watch history to suggest videos. 2. **Google Search** -- ML ranks search results based on relevance and your past behavior. 3. **Phone keyboard autocorrect/predictive text** -- NLP models predict what word you want to type next.

ML is everywhere in daily life: voice assistants (Alexa, Siri), face unlock on phones, Instagram/Facebook feed ranking, Google Maps traffic prediction, Swiggy/Zomato delivery time estimates, UPI fraud detection, and spam filtering in Gmail. Most people use ML-powered features dozens of times daily without realizing it.

### Q6. [Medium] Explain the difference between Classification and Regression in supervised learning with examples.

*Hint:* One predicts categories, the other predicts numbers.

**Answer:** **Classification** predicts discrete categories (labels): spam/not-spam, cat/dog/bird, disease/healthy. **Regression** predicts continuous numerical values: house price (25.5 lakhs), temperature (32.7 degrees), stock price (1450.25). The key difference is whether the output is a category or a number.

If the output is one of several distinct categories, it is classification. If the output is a number on a continuous scale, it is regression. Sometimes the boundary is blurry: predicting 'A/B/C/D/F' grades is classification, but predicting the actual percentage (85.3%) is regression. Choosing the right type affects which algorithms and evaluation metrics you use.

### Q7. [Medium] Write Python code using scikit-learn to load the Iris dataset and print how many samples and features it has.

*Hint:* Use load_iris() from sklearn.datasets. Check .data.shape.

**Answer:** ```
from sklearn.datasets import load_iris

iris = load_iris()
print(f"Number of samples: {iris.data.shape[0]}")
print(f"Number of features: {iris.data.shape[1]}")
print(f"Feature names: {iris.feature_names}")
print(f"Target classes: {list(iris.target_names)}")
```

Output: Number of samples: 150, Number of features: 4

The Iris dataset is included in scikit-learn and is perfect for learning ML. `iris.data` is a 2D NumPy array where rows are samples and columns are features. `.shape` gives (150, 4) meaning 150 flowers with 4 measurements each. The three species (setosa, versicolor, virginica) are the target classes we want to predict.

### Q8. [Medium] Write code to split the Iris dataset into 80% training and 20% testing sets, then print the size of each set.

*Hint:* Use train_test_split from sklearn.model_selection with test_size=0.2.

**Answer:** ```
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)
print(f"Training set: {X_train.shape[0]} samples")
print(f"Testing set: {X_test.shape[0]} samples")
```

Output: Training set: 120 samples, Testing set: 30 samples

The `train_test_split` function randomly splits data into training and testing portions. `test_size=0.2` means 20% for testing (30 samples) and 80% for training (120 samples). `random_state=42` ensures the same split every time you run the code, which is important for reproducibility.

### Q9. [Medium] What is the difference between Supervised and Unsupervised Learning? Give one example of each.

*Hint:* One uses labeled data, the other uses unlabeled data.

**Answer:** **Supervised Learning:** Uses labeled data (input + correct output). Example: predicting house prices given features like area and location. **Unsupervised Learning:** Uses unlabeled data (input only). Example: grouping customers into segments based on purchasing behavior without predefined categories.

The key difference is the presence of labels. In supervised learning, you tell the model the right answer during training. In unsupervised learning, the model must discover structure on its own. Supervised learning is like studying with an answer key; unsupervised learning is like being given raw data and asked to find patterns.

### Q10. [Medium] What is Reinforcement Learning? How is it different from Supervised Learning?

*Hint:* Think about how a dog learns tricks through treats (rewards).

**Answer:** In **Reinforcement Learning**, an agent learns by interacting with an environment and receiving rewards (positive) or penalties (negative) for its actions. Unlike supervised learning where correct answers are provided upfront, the RL agent discovers the best strategy through trial and error. Example: a robot learning to walk -- no one shows it the 'correct' walking motion; it tries different movements and gets rewarded for staying upright.

Supervised learning needs a dataset of correct input-output pairs. Reinforcement learning has no such dataset; the agent generates its own experience by taking actions. The feedback comes as a reward signal after each action, not as a correct label. RL is used when the correct action depends on the current state and future consequences, like in games and robotics.

### Q11. [Medium] Write a Python dictionary that maps each type of ML to its description and one real-world example. Print it in a readable format.

*Hint:* Create a dictionary with keys 'Supervised', 'Unsupervised', 'Reinforcement'.

**Answer:** ```
ml_types = {
    'Supervised Learning': {
        'description': 'Learns from labeled data (input-output pairs)',
        'example': 'Email spam detection'
    },
    'Unsupervised Learning': {
        'description': 'Finds patterns in unlabeled data',
        'example': 'Customer segmentation'
    },
    'Reinforcement Learning': {
        'description': 'Learns through rewards and penalties',
        'example': 'Game-playing AI (AlphaGo)'
    }
}

for ml_type, info in ml_types.items():
    print(f"{ml_type}:")
    print(f"  Description: {info['description']}")
    print(f"  Example: {info['example']}")
    print()
```

This is a practical exercise combining Python dictionaries with ML concepts. Organizing ML types with their descriptions and examples reinforces both your Python skills and your understanding of ML categories.

### Q12. [Hard] Write Python code to train a KNN classifier on the Iris dataset, make predictions on the test set, and print the accuracy.

*Hint:* Use KNeighborsClassifier from sklearn.neighbors. Follow the train-test-predict-evaluate pipeline.

**Answer:** ```
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)
y_pred = knn.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f"KNN Accuracy: {accuracy * 100:.1f}%")
```

Output: KNN Accuracy: 100.0%

This is a complete ML pipeline: load data, split into train/test, train a KNN classifier with k=5, predict on test data, and evaluate accuracy. KNN classifies a new sample by finding the 5 closest training samples and taking a majority vote of their labels. The Iris dataset is simple enough that KNN achieves near-perfect accuracy.

### Q13. [Hard] What was the significance of AlexNet winning ImageNet in 2012? Why is it considered the start of the modern AI revolution?

*Hint:* Think about the margin of victory and what it proved about deep learning.

**Answer:** AlexNet, a deep convolutional neural network, won the ImageNet Large Scale Visual Recognition Challenge in 2012 with a top-5 error rate of 15.3%, compared to the runner-up's 26.2%. This massive 10.8 percentage point gap proved that deep learning was dramatically superior to traditional computer vision methods. It showed that deep neural networks, trained on GPUs with large datasets, could solve problems that had stumped researchers for decades. This triggered a flood of investment, research, and talent into deep learning.

Before 2012, progress in image recognition was incremental (1-2% improvement per year). AlexNet shattered expectations. The key ingredients were: deep neural networks (8 layers), GPU training (used 2 Nvidia GTX 580s), large dataset (1.2 million images), and techniques like ReLU activation and dropout. After AlexNet, every ImageNet winner used deep learning, and the approach spread to NLP, speech, robotics, and eventually led to the Transformer architecture (2017) and ChatGPT (2022).

### Q14. [Hard] Explain the concept of 'AI Winters'. Why did interest in AI decline twice, and what brought it back?

*Hint:* Think about overpromising and underdelivering, combined with computing limitations.

**Answer:** AI Winters were periods when funding, research interest, and public confidence in AI collapsed. The **First AI Winter (1969-1980)** happened when Minsky and Papert showed that simple perceptrons could not solve basic problems like XOR, killing interest in neural networks. The **Second AI Winter (1987-1993)** happened when expert systems proved too expensive and brittle for real-world use. AI came back because of: (1) faster computers and GPUs, (2) massive datasets from the internet, (3) breakthroughs like backpropagation and deep learning, and (4) proven commercial success (Google Search, recommendation systems).

The pattern in both AI winters was the same: researchers overpromised ("we will solve intelligence in 10 years"), funding poured in, the technology could not deliver on those promises, and disillusionment followed. What changed in the 2010s was the convergence of three factors: computational power (GPUs), data (internet-scale datasets), and algorithmic breakthroughs (deep learning, batch normalization, attention). The current AI boom is different because AI is generating real revenue for companies, not just academic papers.

### Q15. [Hard] Write a Python function that takes a list of (feature, label) tuples and counts how many samples belong to each unique label. This simulates understanding your dataset before training.

*Hint:* Use a dictionary to count occurrences of each label.

**Answer:** ```
def count_labels(data):
    counts = {}
    for feature, label in data:
        counts[label] = counts.get(label, 0) + 1
    return counts

# Simulated dataset
dataset = [
    ([5.1, 3.5], 'setosa'),
    ([7.0, 3.2], 'versicolor'),
    ([4.9, 3.0], 'setosa'),
    ([6.3, 2.8], 'virginica'),
    ([5.8, 2.7], 'virginica'),
    ([6.7, 3.1], 'versicolor'),
]

result = count_labels(dataset)
for label, count in result.items():
    print(f"{label}: {count} samples")
```

Output: setosa: 2 samples, versicolor: 2 samples, virginica: 2 samples

Understanding class distribution is the first thing you do in any ML project. If one class has 95% of samples and another has 5%, your model might just predict the majority class and still get 95% accuracy. This is called class imbalance. This function manually does what Pandas `value_counts()` does automatically.

### Q16. [Easy] Write Python code to create a simple dataset as a list of dictionaries representing 4 students with names, marks, and pass/fail status. Print the dataset.

*Hint:* Each dictionary should have keys like 'name', 'marks', 'result'.

**Answer:** ```
students = [
    {'name': 'Aarav', 'marks': 85, 'result': 'Pass'},
    {'name': 'Priya', 'marks': 42, 'result': 'Fail'},
    {'name': 'Rohan', 'marks': 91, 'result': 'Pass'},
    {'name': 'Ananya', 'marks': 38, 'result': 'Fail'}
]

for s in students:
    print(f"{s['name']}: {s['marks']} marks - {s['result']}")
```

In ML, data is structured as rows (samples) and columns (features). This student dataset has 4 samples with 3 features each. The 'result' column is what we want to predict (the label). 'name' and 'marks' are features. This is the kind of data a supervised classification model would train on.

### Q17. [Hard] What is the Turing Test? Do modern AI systems like ChatGPT pass it? Explain your reasoning.

*Hint:* The Turing Test checks if a machine can fool a human into thinking it is human.

**Answer:** The **Turing Test**, proposed by Alan Turing in 1950, says that a machine is intelligent if a human evaluator cannot reliably distinguish the machine's responses from a human's in a text conversation. Modern LLMs like ChatGPT can often pass casual Turing Tests -- many people cannot tell if they are chatting with AI or a human in short interactions. However, extended conversations or specialized questions can still reveal the AI. The Turing Test is also criticized as a limited measure of intelligence since a machine could fool humans by mimicking human behavior without truly understanding anything.

The Turing Test remains a cultural benchmark for AI, but most AI researchers consider it insufficient. It tests imitation of human behavior, not actual understanding or intelligence. A more useful measure is whether AI can solve real-world problems effectively. By that standard, modern AI clearly demonstrates intelligence in specific domains, even if it lacks general human-like intelligence.

### Q18. [Medium] Write code to load the Iris dataset into a Pandas DataFrame and display the first 5 rows along with the shape of the data.

*Hint:* Use pd.DataFrame(iris.data, columns=iris.feature_names).

**Answer:** ```
from sklearn.datasets import load_iris
import pandas as pd

iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['species'] = iris.target

print("Shape:", df.shape)
print("\nFirst 5 rows:")
print(df.head())
```

Converting sklearn datasets to Pandas DataFrames is a common practice because DataFrames provide a more readable and feature-rich way to explore data. `iris.data` contains the feature values, `iris.feature_names` provides column names, and `iris.target` provides the class labels (0, 1, 2 corresponding to the three species).

### Q19. [Hard] Write a complete Python script that: loads the Iris dataset, splits it 80/20, trains a Decision Tree classifier, predicts on the test set, and prints the accuracy as a percentage.

*Hint:* Use DecisionTreeClassifier from sklearn.tree. Follow load -> split -> train -> predict -> evaluate.

**Answer:** ```
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

dt = DecisionTreeClassifier(random_state=42)
dt.fit(X_train, y_train)
y_pred = dt.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred) * 100:.1f}%")
```

Output: Accuracy: 100.0%

This is the standard ML pipeline you will use hundreds of times: load data, split, train, predict, evaluate. The Decision Tree builds a tree of if-else rules from the training data. For the Iris dataset, it might learn rules like 'if petal length < 2.5, it is setosa'. The 100% accuracy is because Iris is a clean, well-separated dataset.

### Q20. [Easy] Name the four essential Python libraries for AI/ML and briefly describe what each one does.

*Hint:* Think about: numbers, data tables, charts, and ML algorithms.

**Answer:** 1. **NumPy**: Numerical computing with arrays, linear algebra, and mathematical operations. 2. **Pandas**: Data manipulation with DataFrames for reading, cleaning, and analyzing tabular data. 3. **Matplotlib**: Data visualization for creating charts, plots, and graphs. 4. **scikit-learn**: Machine learning library with algorithms for classification, regression, clustering, and model evaluation.

These four libraries form the foundation of any ML project. NumPy handles the math, Pandas handles the data, Matplotlib handles the visualization, and scikit-learn handles the ML algorithms. Master these four, and you can build most traditional ML projects. For deep learning, you would add TensorFlow or PyTorch.

## Mixed Questions

### Q1. [Easy] Write Python code to import NumPy and create an array of numbers [10, 20, 30, 40, 50]. Print the array and its type.

*Hint:* Use np.array() and type() functions.

**Answer:** ```
import numpy as np

arr = np.array([10, 20, 30, 40, 50])
print("Array:", arr)
print("Type:", type(arr))
```

Output: Array: [10 20 30 40 50], Type:

NumPy arrays are the fundamental data structure for ML. Unlike Python lists, NumPy arrays support vectorized operations (you can multiply the entire array by 2 in one operation), are much faster, and are required by scikit-learn for all input data.

### Q2. [Easy] Write code that creates two Python lists representing features and labels for a simple classification problem with 4 animals.

*Hint:* Features could be weight and height, labels could be 'cat' or 'dog'.

**Answer:** ```
features = [[4, 25], [5, 30], [20, 55], [25, 60]]
labels = ['cat', 'cat', 'dog', 'dog']

for feat, label in zip(features, labels):
    print(f"Weight: {feat[0]}kg, Height: {feat[1]}cm -> {label}")
```

ML data consists of features (inputs) and labels (outputs). Here, weight and height are features, and the animal type is the label. In real ML, this data would be converted to NumPy arrays and fed to a classifier like KNN or Decision Tree.

### Q3. [Medium] Kavitha is building a system that groups news articles by topic without any predefined categories. What type of ML should she use and why?

*Hint:* She has no labels (predefined categories). The system must discover groups on its own.

**Answer:** Kavitha should use **Unsupervised Learning**, specifically a clustering algorithm like K-Means or a topic modeling approach like LDA. Since there are no predefined categories, supervised learning cannot be used. The unsupervised algorithm will analyze the text content and automatically group similar articles together, discovering topics like 'sports', 'politics', 'technology' on its own.

The key clue is 'without any predefined categories.' This means there are no labels, so supervised learning is out. Unsupervised learning (specifically clustering or topic modeling) is designed for exactly this scenario -- finding hidden structure in unlabeled data.

### Q4. [Medium] Write Python code to create a dictionary mapping 5 real-world problems to their ML type (supervised, unsupervised, or reinforcement).

*Hint:* Think about whether each problem has labels, needs grouping, or involves reward-based learning.

**Answer:** ```
ml_problems = {
    'Spam detection': 'Supervised (Classification)',
    'House price prediction': 'Supervised (Regression)',
    'Customer segmentation': 'Unsupervised (Clustering)',
    'Game playing AI': 'Reinforcement Learning',
    'Fraud detection': 'Supervised (Classification) or Unsupervised (Anomaly Detection)'
}

for problem, ml_type in ml_problems.items():
    print(f"{problem}: {ml_type}")
```

Identifying the correct ML type for a problem is a crucial skill. The decision depends on: (1) Do you have labels? If yes, supervised. (2) Do you need to find hidden patterns? If yes, unsupervised. (3) Does an agent need to learn through interaction? If yes, reinforcement. Some problems like fraud detection can use either approach.

### Q5. [Medium] Write Python code to check the shapes of training and testing arrays after splitting the Iris dataset. Also print the data type of the arrays.

*Hint:* Use .shape and .dtype attributes on the NumPy arrays.

**Answer:** ```
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

print(f"X_train shape: {X_train.shape}, dtype: {X_train.dtype}")
print(f"X_test shape: {X_test.shape}, dtype: {X_test.dtype}")
print(f"y_train shape: {y_train.shape}, dtype: {y_train.dtype}")
print(f"y_test shape: {y_test.shape}, dtype: {y_test.dtype}")
```

Checking shapes is essential for debugging ML code. X_train should be (120, 4) -- 120 samples with 4 features. X_test should be (30, 4). y_train and y_test are 1D arrays of labels. The dtype is float64 for features and int64 for labels. Shape mismatches are one of the most common errors in ML.

### Q6. [Hard] Write code that trains three different classifiers (KNN, Decision Tree, Logistic Regression) on the Iris dataset and compares their accuracies.

*Hint:* Create a list of models, loop through them, train each, and compare accuracy.

**Answer:** ```
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

models = {
    'KNN (k=5)': KNeighborsClassifier(n_neighbors=5),
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Logistic Regression': LogisticRegression(max_iter=200)
}

for name, model in models.items():
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"{name}: {acc * 100:.1f}% accuracy")
```

Comparing multiple models is a standard ML practice. Different algorithms make different assumptions about the data, so one might outperform others depending on the dataset. This code trains three popular classifiers and compares their accuracy on the same test set. In practice, you would also use cross-validation for a more robust comparison.

### Q7. [Hard] Ravi is building a system where a robot arm learns to pick up objects by trying different gripping positions. Each successful pickup gives +1 reward and each drop gives -1 reward. What type of ML is this? What are the agent, environment, state, action, and reward in this scenario?

*Hint:* This involves an agent learning through trial and error with rewards.

**Answer:** This is **Reinforcement Learning**. **Agent:** The robot arm controller. **Environment:** The physical workspace with objects. **State:** The current position of the arm and the object's location. **Action:** Moving the arm to a position and gripping. **Reward:** +1 for successful pickup, -1 for dropping.

Reinforcement learning is the natural choice when an agent must learn through interaction. There are no labeled examples of 'correct gripping positions' to learn from (ruling out supervised learning). Instead, the robot tries different actions, observes the outcomes, and gradually learns which actions lead to successful pickups. This is exactly how many real robotic systems are trained.

### Q8. [Hard] Write Python code to simulate a simple supervised learning scenario: create a function that takes training data (X, y) and a new data point, finds the closest training point (nearest neighbor), and returns its label.

*Hint:* Calculate distance between the new point and each training point. Use Euclidean distance.

**Answer:** ```
import math

def nearest_neighbor(X_train, y_train, new_point):
    min_dist = float('inf')
    predicted_label = None
    for x, y in zip(X_train, y_train):
        dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(x, new_point)))
        if dist < min_dist:
            min_dist = dist
            predicted_label = y
    return predicted_label

# Training data: [height, weight] -> category
X_train = [[150, 50], [160, 60], [170, 70], [180, 80]]
y_train = ['Short', 'Medium', 'Tall', 'Very Tall']

new_person = [165, 62]
prediction = nearest_neighbor(X_train, y_train, new_person)
print(f"Person with height=165, weight=62: {prediction}")
```

Output: Person with height=165, weight=62: Medium

This implements the KNN algorithm (with k=1) from scratch. It calculates the Euclidean distance between the new point and every training point, then returns the label of the closest one. This is exactly what scikit-learn's KNeighborsClassifier does internally, but it does it much more efficiently using optimized data structures. Understanding the algorithm from scratch helps you understand what the library is doing.

### Q9. [Easy] What is Deep Learning? How is it different from traditional Machine Learning?

*Hint:* Think about neural networks with many layers and automatic feature extraction.

**Answer:** **Deep Learning** uses neural networks with many layers (deep networks) to automatically learn features from raw data. Traditional ML requires humans to manually design features (feature engineering), while deep learning discovers the right features on its own. For example, in image classification, traditional ML needs hand-crafted features (edges, colors), while deep learning learns directly from pixel values.

The 'deep' in deep learning refers to the number of layers in the neural network. A shallow network has 1-2 hidden layers; a deep network has tens or hundreds. Each layer learns increasingly abstract features: early layers learn edges and textures, middle layers learn shapes and patterns, and final layers learn high-level concepts. This automatic feature hierarchy is what makes deep learning so powerful for complex tasks like image recognition and language understanding.

### Q10. [Medium] Write Python code to calculate the Euclidean distance between two points [1, 2, 3] and [4, 5, 6] using both manual calculation and NumPy.

*Hint:* Euclidean distance = sqrt(sum of squared differences). NumPy has np.linalg.norm.

**Answer:** ```
import numpy as np
import math

point1 = [1, 2, 3]
point2 = [4, 5, 6]

# Method 1: Manual calculation
manual_dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(point1, point2)))
print(f"Manual distance: {manual_dist:.4f}")

# Method 2: Using NumPy
p1 = np.array(point1)
p2 = np.array(point2)
numpy_dist = np.linalg.norm(p1 - p2)
print(f"NumPy distance: {numpy_dist:.4f}")
```

Output: Manual distance: 5.1962, NumPy distance: 5.1962

Euclidean distance is the foundation of many ML algorithms, especially KNN. It measures the straight-line distance between two points in n-dimensional space. The manual calculation squares each difference, sums them, and takes the square root. NumPy's `np.linalg.norm` does this in one line and is much faster for large arrays. Both give the same result: sqrt((4-1)^2 + (5-2)^2 + (6-3)^2) = sqrt(27) = 5.196.

### Q11. [Hard] Explain the Transformer architecture at a high level. Why did it revolutionize AI?

*Hint:* Think about the attention mechanism and parallel processing.

**Answer:** The **Transformer** (introduced in 2017, 'Attention Is All You Need') uses a **self-attention mechanism** that allows every part of the input to attend to every other part simultaneously, capturing long-range dependencies. Unlike RNNs which process sequences one token at a time (slow), Transformers process all tokens in parallel (fast). This parallelism enabled training on massive datasets, leading to Large Language Models like GPT and BERT. Transformers revolutionized AI because they: (1) scale efficiently with data and compute, (2) capture complex patterns through attention, and (3) transfer well to new tasks through pre-training and fine-tuning.

Before Transformers, the best language models used RNNs (Recurrent Neural Networks) which processed text sequentially -- making them slow and unable to capture very long-range relationships. The attention mechanism in Transformers allows the model to focus on the most relevant parts of the input regardless of distance. This architectural innovation is the foundation of GPT, BERT, Claude, Gemini, and essentially all modern AI language models.

### Q12. [Easy] Write Python code to create two NumPy arrays representing exam marks and pass/fail labels. Print them together.

*Hint:* Use np.array() for both features and labels.

**Answer:** ```
import numpy as np

marks = np.array([85, 42, 91, 38, 76, 55, 67, 29])
labels = np.array(['Pass', 'Fail', 'Pass', 'Fail', 'Pass', 'Pass', 'Pass', 'Fail'])

for mark, label in zip(marks, labels):
    print(f"Marks: {mark} -> {label}")

print(f"\nPass count: {np.sum(labels == 'Pass')}")
print(f"Fail count: {np.sum(labels == 'Fail')}")
```

This creates a simple labeled dataset suitable for binary classification. The marks are features and Pass/Fail are labels. Notice how we can use NumPy's vectorized comparison `labels == 'Pass'` to count occurrences, which is much faster than a Python loop. Understanding class distribution (5 Pass vs 3 Fail) is important before training.

## Multiple Choice Questions

### Q1. [Easy] Which of the following is the correct hierarchy (from broadest to most specific)?

**C is correct.** AI is the broadest field (making machines intelligent). Machine Learning is a subset of AI (learning from data). Deep Learning is a subset of ML (using deep neural networks). So the hierarchy from broadest to most specific is: AI > ML > DL.

### Q2. [Easy] What type of Machine Learning is used when the training data has labeled examples (input-output pairs)?

**C is correct.** Supervised Learning uses labeled data where both inputs and their correct outputs are provided during training. The model learns the mapping from inputs to outputs. Unsupervised learning has no labels. Reinforcement learning uses rewards. Transfer learning is a technique, not a type.

### Q3. [Easy] Which Python library is primarily used for traditional Machine Learning algorithms like Linear Regression and KNN?

**B is correct.** scikit-learn is the standard library for traditional ML algorithms (regression, classification, clustering, model evaluation). TensorFlow and PyTorch are for deep learning. Hugging Face is for NLP and pre-trained language models.

### Q4. [Easy] What is the output of the following code?

```
import numpy as np
arr = np.array([1, 2, 3])
print(type(arr))
```

**B is correct.** NumPy arrays are of type `numpy.ndarray` (n-dimensional array). This is different from Python's built-in `list` type. NumPy arrays are faster and support vectorized operations that lists do not.

### Q5. [Easy] Netflix recommending movies based on your watch history is an example of:

**C is correct.** Netflix recommendations use supervised learning (specifically collaborative filtering). The 'labels' are your ratings and watch history. The system learns what you like based on your past behavior and the behavior of similar users. While some components may use unsupervised learning, the primary recommendation engine is supervised.

### Q6. [Medium] What is the purpose of splitting data into training and testing sets?

**B is correct.** The test set simulates real-world unseen data. If you evaluate on training data, the model might just memorize the answers (overfitting) and give misleadingly high accuracy. The test set gives an honest estimate of how the model will perform on new, unseen data.

### Q7. [Medium] Which event in 2012 is widely considered the start of the modern deep learning revolution?

**C is correct.** AlexNet, a deep convolutional neural network, won ImageNet 2012 with a dramatic 10.8% improvement over the runner-up. This proved deep learning's superiority and triggered the modern AI revolution. ChatGPT launched in 2022, AlphaGo beat Lee Sedol in 2016, and Watson won Jeopardy in 2011.

### Q8. [Medium] A robot learning to walk by trial and error, receiving rewards for staying upright and penalties for falling, is an example of:

**D is correct.** This is classic reinforcement learning: an agent (robot) interacts with an environment (floor), takes actions (move legs), and receives rewards (+1 for staying upright) or penalties (-1 for falling). There are no labeled examples of 'correct walking' -- the robot discovers the optimal strategy through trial and error.

### Q9. [Medium] What does the .fit() method do in scikit-learn?

**C is correct.** The `.fit(X, y)` method trains the model on the provided feature data (X) and labels (y). It is where the model learns patterns from the data. `.predict()` makes predictions, `train_test_split()` splits data, and `.score()` evaluates accuracy.

### Q10. [Medium] Grouping customers into segments based on purchasing behavior without predefined categories is an example of:

**C is correct.** Clustering is an unsupervised learning technique that groups similar data points together without predefined labels. Since there are no predefined categories, this is not classification (which requires labels). Customer segmentation is the textbook example of clustering.

### Q11. [Medium] What is the correct order of steps in a typical ML pipeline?

**B is correct.** The standard ML pipeline is: (1) Collect and prepare data, (2) Split into train and test sets, (3) Train the model on training data, (4) Evaluate on test data. You cannot train without data, and you must split before training to have a fair test set.

### Q12. [Hard] Why did scikit-learn raise a ValueError when fitting a model with a 1D array for features?

**B is correct.** scikit-learn expects feature data (X) to be a 2D array with shape (n_samples, n_features). A 1D array like `[1, 2, 3]` has shape `(3,)` and sklearn cannot determine if these are 3 samples with 1 feature or 1 sample with 3 features. Use `.reshape(-1, 1)` for single-feature data.

### Q13. [Hard] What is the main advantage of Deep Learning over traditional Machine Learning?

**C is correct.** The key advantage of deep learning is automatic feature extraction. Traditional ML requires hand-crafted features (feature engineering), while deep learning discovers the right features automatically from raw data. Deep learning typically requires MORE data (not less), does NOT always achieve 100% accuracy, and is usually slower to train than traditional ML.

### Q14. [Hard] Which architecture, introduced in 2017, is the foundation of modern Large Language Models like GPT and BERT?

**C is correct.** The Transformer architecture, introduced in the 'Attention Is All You Need' paper (2017), uses self-attention to process all tokens in parallel. It is the foundation of GPT, BERT, Claude, Gemini, and virtually all modern language models. CNNs are for images, RNNs process sequences sequentially (slower), and GANs are for generation.

### Q15. [Hard] What does overfitting mean in Machine Learning?

**B is correct.** Overfitting occurs when a model memorizes the training data (including noise) rather than learning the general pattern. It scores high on training data but fails on new, unseen test data. It is like a student who memorizes answers to practice questions but cannot solve new variations. Option C describes underfitting. Option A describes good generalization.

### Q16. [Easy] Which of the following is a supervised learning problem?

**B is correct.** Predicting house prices is supervised learning (regression) because we have labeled data: houses with known features and known prices. Option A is clustering (unsupervised). Option C can be unsupervised (anomaly detection). Option D is reinforcement learning.

### Q17. [Hard] What is the role of the test set in the ML pipeline?

**C is correct.** The test set is data that the model has NEVER seen during training. It provides an unbiased estimate of how the model will perform on new, real-world data. Option B describes a validation set (which is different from the test set). The test set should never be used to make training decisions.

### Q18. [Medium] What does the predict() method do in scikit-learn?

**B is correct.** After a model has been trained with `.fit()`, the `.predict(X)` method takes new feature data and returns the model's predictions (either class labels for classification or numerical values for regression). It does not retrain the model.

### Q19. [Hard] Deepak wants to build a model that detects fraudulent credit card transactions. His dataset has 99.5% legitimate and 0.5% fraudulent transactions. If his model predicts 'legitimate' for every transaction, what will its accuracy be?

**C is correct.** If the model always predicts 'legitimate', it will be correct for 99.5% of transactions (the legitimate ones) and wrong for only 0.5% (the fraudulent ones). This gives 99.5% accuracy but the model is completely useless for detecting fraud. This is why accuracy alone is a misleading metric for imbalanced datasets. You need metrics like precision, recall, and F1-score.

### Q20. [Hard] Which of the following is NOT a valid reason why the current AI boom (2020s) is different from previous AI hype cycles?

**C is the correct answer (it is NOT a valid reason).** AI systems do NOT achieve 100% accuracy on all tasks. They still make mistakes, hallucinate, and have limitations. The current AI boom is sustained by real factors: massive data (A), powerful hardware (B), and genuine commercial value (D). Previous AI winters happened because the technology could not deliver on promises. Today, AI is generating billions in revenue.

## Coding Challenges

### Challenge 1. Build a Simple Nearest Neighbor Classifier

**Difficulty:** Medium

Implement a function called predict_nearest() that takes training features, training labels, and a new data point. It should return the label of the closest training sample using Euclidean distance. Test it with this data: training features = [[1, 2], [3, 4], [5, 6], [7, 8]], labels = ['A', 'A', 'B', 'B'], new point = [4, 5].

**Constraints:**

- Do not use scikit-learn. Use only math or numpy for distance calculation.

**Sample input:**

```
X_train = [[1, 2], [3, 4], [5, 6], [7, 8]], y_train = ['A', 'A', 'B', 'B'], new_point = [4, 5]
```

**Sample output:**

```
Nearest neighbor prediction: A
```

**Solution:**

```ai-and-machine-learning
import math

def predict_nearest(X_train, y_train, new_point):
    min_dist = float('inf')
    prediction = None
    for features, label in zip(X_train, y_train):
        dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(features, new_point)))
        if dist < min_dist:
            min_dist = dist
            prediction = label
    return prediction

X_train = [[1, 2], [3, 4], [5, 6], [7, 8]]
y_train = ['A', 'A', 'B', 'B']
new_point = [4, 5]

result = predict_nearest(X_train, y_train, new_point)
print(f"Nearest neighbor prediction: {result}")
```

### Challenge 2. Dataset Statistics Calculator

**Difficulty:** Easy

Write a Python program that takes a list of student marks and calculates: (1) total students, (2) average marks, (3) highest marks, (4) lowest marks, (5) number of students who passed (marks >= 40). Use the marks: [85, 42, 91, 38, 76, 55, 67, 29, 93, 44].

**Constraints:**

- You may use built-in functions like len(), sum(), max(), min().

**Sample input:**

```
marks = [85, 42, 91, 38, 76, 55, 67, 29, 93, 44]
```

**Sample output:**

```
Total students: 10
Average marks: 62.0
Highest: 93
Lowest: 29
Passed: 8
```

**Solution:**

```ai-and-machine-learning
marks = [85, 42, 91, 38, 76, 55, 67, 29, 93, 44]

total = len(marks)
average = sum(marks) / total
highest = max(marks)
lowest = min(marks)
passed = sum(1 for m in marks if m >= 40)

print(f"Total students: {total}")
print(f"Average marks: {average}")
print(f"Highest: {highest}")
print(f"Lowest: {lowest}")
print(f"Passed: {passed}")
```

### Challenge 3. ML Problem Type Classifier

**Difficulty:** Medium

Write a function called classify_problem() that takes a description string and returns the type of ML problem. Rules: if the description contains 'predict' and 'price', return 'Supervised - Regression'. If it contains 'classify' or 'spam' or 'detect', return 'Supervised - Classification'. If it contains 'group' or 'segment' or 'cluster', return 'Unsupervised - Clustering'. If it contains 'reward' or 'agent' or 'game', return 'Reinforcement Learning'. Otherwise return 'Unknown'. Test with 3 examples.

**Constraints:**

- Use string methods like 'in' for checking keywords. Make the function case-insensitive.

**Sample input:**

```
classify_problem('predict house price based on features')
```

**Sample output:**

```
Supervised - Regression
```

**Solution:**

```ai-and-machine-learning
def classify_problem(description):
    desc = description.lower()
    if 'predict' in desc and 'price' in desc:
        return 'Supervised - Regression'
    elif any(word in desc for word in ['classify', 'spam', 'detect']):
        return 'Supervised - Classification'
    elif any(word in desc for word in ['group', 'segment', 'cluster']):
        return 'Unsupervised - Clustering'
    elif any(word in desc for word in ['reward', 'agent', 'game']):
        return 'Reinforcement Learning'
    else:
        return 'Unknown'

problems = [
    'predict house price based on features',
    'classify emails as spam or not spam',
    'group customers into segments based on behavior',
    'train an agent to play a game with rewards'
]

for p in problems:
    print(f"'{p}' -> {classify_problem(p)}")
```

### Challenge 4. Compare Models on Custom Dataset

**Difficulty:** Hard

Create a synthetic classification dataset using sklearn's make_classification with 200 samples, 4 features, and 2 classes. Split it 80/20. Train KNN (k=3), Decision Tree, and Logistic Regression. Print each model's accuracy and declare the winner.

**Constraints:**

- Use make_classification with random_state=42 for reproducibility.

**Sample input:**

```
(No input - uses generated data)
```

**Sample output:**

```
KNN: 88.5%
Decision Tree: 85.0%
Logistic Regression: 90.0%
Winner: Logistic Regression
```

**Solution:**

```ai-and-machine-learning
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

X, y = make_classification(n_samples=200, n_features=4, n_classes=2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

models = {
    'KNN (k=3)': KNeighborsClassifier(n_neighbors=3),
    'Decision Tree': DecisionTreeClassifier(random_state=42),
    'Logistic Regression': LogisticRegression(random_state=42)
}

best_name, best_acc = '', 0
for name, model in models.items():
    model.fit(X_train, y_train)
    acc = accuracy_score(y_test, model.predict(X_test))
    print(f"{name}: {acc * 100:.1f}%")
    if acc > best_acc:
        best_name, best_acc = name, acc

print(f"Winner: {best_name}")
```

### Challenge 5. AI Timeline Quiz Game

**Difficulty:** Easy

Create a Python program that stores 5 key AI milestones as a list of tuples (year, event). Ask the user to match years to events (for simplicity, just print all milestones and check if the events are in the correct chronological order). Print the timeline sorted by year.

**Constraints:**

- Use a list of tuples and sort by year.

**Sample input:**

```
(No input required)
```

**Sample output:**

```
AI Timeline:
1950 - Turing proposes the Turing Test
1957 - Perceptron invented
2012 - AlexNet wins ImageNet
2017 - Transformer architecture introduced
2022 - ChatGPT launches
```

**Solution:**

```ai-and-machine-learning
milestones = [
    (2017, 'Transformer architecture introduced'),
    (1950, 'Turing proposes the Turing Test'),
    (2022, 'ChatGPT launches'),
    (1957, 'Perceptron invented'),
    (2012, 'AlexNet wins ImageNet')
]

milestones.sort(key=lambda x: x[0])

print('AI Timeline:')
for year, event in milestones:
    print(f'{year} - {event}')
```

### Challenge 6. Full ML Pipeline with Evaluation Report

**Difficulty:** Hard

Write a complete ML pipeline on the Iris dataset that: (1) Loads the data, (2) Splits 80/20, (3) Trains a Decision Tree, (4) Prints accuracy, (5) Shows predictions vs actual for the first 10 test samples in a formatted table.

**Constraints:**

- Use random_state=42 for reproducibility. Format output neatly.

**Sample input:**

```
(No input required - uses Iris dataset)
```

**Sample output:**

```
Accuracy: 100.0%

Sample | Predicted  | Actual     | Correct?
1      | versicolor | versicolor | Yes
2      | setosa     | setosa     | Yes
...
```

**Solution:**

```ai-and-machine-learning
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

model = DecisionTreeClassifier(random_state=42)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

acc = accuracy_score(y_test, y_pred)
print(f"Accuracy: {acc * 100:.1f}%\n")

print(f"{'Sample':<8}{'Predicted':<14}{'Actual':<14}{'Correct?'}")
for i in range(min(10, len(y_test))):
    pred_name = iris.target_names[y_pred[i]]
    actual_name = iris.target_names[y_test[i]]
    correct = 'Yes' if y_pred[i] == y_test[i] else 'No'
    print(f"{i+1:<8}{pred_name:<14}{actual_name:<14}{correct}")
```

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/introduction-to-ai-and-ml/*
