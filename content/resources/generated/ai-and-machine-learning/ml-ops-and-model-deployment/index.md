---
title: "MLOps and Model Deployment - Flask, FastAPI, Docker, MLflow, CI/CD for ML | Modern Age Coders"
description: "Learn MLOps fundamentals including ML pipelines, saving models with pickle and joblib, building APIs with Flask and FastAPI, Docker containerization for ML, model serving patterns, model monitoring for data drift, MLflow for versioning, CI/CD for ML, and cloud deployment. Includes 52+ practice questions with Python code examples."
slug: ml-ops-and-model-deployment
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ml-ops-and-model-deployment
category: "AI and Machine Learning"
keywords: ["MLOps tutorial", "model deployment", "Flask ML API", "FastAPI machine learning", "Docker ML", "MLflow model versioning", "model monitoring data drift", "CI/CD ML pipeline", "deploy ML model", "model serving"]
---
# MLOps and Model Deployment

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 24  
**Practice questions:** 50

## What Is MLOps?

**MLOps (Machine Learning Operations)** is the set of practices, tools, and workflows that bring machine learning models from research notebooks to reliable, scalable production systems. Just as DevOps bridges the gap between software development and operations, MLOps bridges the gap between ML model development and deployment.

```
# The ML lifecycle that MLOps manages:
# 1. Data Collection & Processing
# 2. Feature Engineering
# 3. Model Training & Experimentation
# 4. Model Evaluation & Validation
# 5. Model Packaging & Deployment
# 6. Monitoring & Maintenance
# 7. Retraining (loop back to step 1)
```

The core problem MLOps solves: most ML models never reach production. Studies show that 87% of ML projects never make it past the experimentation phase. Models that do deploy often degrade over time due to data drift, lack of monitoring, and no automated retraining pipeline. MLOps provides the infrastructure and processes to deploy models reliably, monitor their performance, and keep them updated.

Key MLOps components include: model serialization (saving/loading models), API serving (Flask, FastAPI), containerization (Docker), model versioning (MLflow), monitoring (data drift detection), and CI/CD pipelines for automated testing and deployment.

## Why Is MLOps Important?

### 1. Bridging the Gap Between Notebooks and Production

Meera built an excellent sentiment classifier in a Jupyter notebook with 95% accuracy. But without MLOps, that model sits in a notebook that only she can run, on her local machine, with specific library versions. MLOps transforms this into a deployable, reproducible, scalable service that her entire team -- and thousands of users -- can access via an API.

### 2. Reproducibility and Versioning

ML experiments involve many moving parts: training data, feature engineering code, hyperparameters, model architecture, library versions, and random seeds. Without proper versioning, it is impossible to reproduce a result or roll back to a previous model when a new one performs worse. MLflow and similar tools track all these variables.

### 3. Continuous Model Improvement

The real world changes. Customer behavior shifts, language evolves, economic conditions fluctuate. A model trained on 2024 data may perform poorly on 2026 data. MLOps provides monitoring to detect performance degradation and pipelines to automatically retrain and redeploy models.

### 4. Scaling ML Impact

A model serving one prediction at a time in a notebook is very different from serving 10,000 predictions per second in production. MLOps provides the infrastructure (containerization, load balancing, auto-scaling) to handle production workloads.

### 5. Industry Demand

MLOps Engineer is one of the fastest-growing roles in India and globally. Companies that have built ML models are now investing heavily in deploying and maintaining them. Knowledge of Flask/FastAPI, Docker, MLflow, and cloud deployment platforms is increasingly required for ML Engineer roles.

## Detailed Explanation

### 1. The ML Pipeline

An ML pipeline automates the flow from raw data to deployed model:

```
# ML Pipeline stages:
# Data -> Preprocess -> Feature Engineering -> Train -> Evaluate -> Deploy -> Monitor
#   ^                                                                          |
#   |--- Retrain when performance drops (detected by monitoring) <-------------|
```

Each stage should be: **versioned** (track changes), **reproducible** (same input = same output), **automated** (no manual steps), and **monitored** (know when something breaks).

### 2. Saving Models: pickle, joblib, model.save()

Before deploying a model, you need to serialize (save) it to a file:

```
import pickle
import joblib
from sklearn.ensemble import RandomForestClassifier

# Train a model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Method 1: pickle
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)

# Load
with open("model.pkl", "rb") as f:
    loaded_model = pickle.load(f)

# Method 2: joblib (better for large numpy arrays)
joblib.dump(model, "model.joblib")
loaded_model = joblib.load("model.joblib")

# Method 3: Keras/TensorFlow model.save()
# model.save("model.keras")  # Saves architecture + weights + optimizer
# loaded = tf.keras.models.load_model("model.keras")
```

Choose pickle for general Python objects, joblib for scikit-learn models (better with large numpy arrays), and framework-specific methods (.save() for Keras, torch.save() for PyTorch) for deep learning models.

### 3. Building an API with Flask

Flask is the simplest way to serve an ML model as a REST API:

```
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load("model.joblib")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = [data["features"]]  # Expect JSON: {"features": [1.2, 3.4, ...]}
    prediction = model.predict(features)
    return jsonify({"prediction": int(prediction[0])})

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

Flask is synchronous and best for simple, low-to-medium traffic deployments.

### 4. Building with FastAPI

FastAPI is modern, fast, and automatically generates interactive API documentation:

```
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML Prediction API")
model = joblib.load("model.joblib")

class PredictionRequest(BaseModel):
    features: list[float]

class PredictionResponse(BaseModel):
    prediction: int
    confidence: float

@app.post("/predict", response_model=PredictionResponse)
async def predict(req: PredictionRequest):
    features = np.array(req.features).reshape(1, -1)
    prediction = model.predict(features)[0]
    confidence = max(model.predict_proba(features)[0])
    return PredictionResponse(prediction=int(prediction), confidence=float(confidence))

@app.get("/health")
async def health():
    return {"status": "healthy"}
```

Advantages over Flask: automatic request validation (via Pydantic), auto-generated Swagger docs at /docs, async support for higher concurrency, and type hints for better IDE support.

### 5. Docker Basics for ML

Docker packages your application, model, and all dependencies into a portable **container** that runs identically on any machine:

```
# Dockerfile for ML API
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code and model
COPY app.py .
COPY model.joblib .

# Expose port
EXPOSE 8000

# Run the API
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
```

Why containerize? It eliminates "works on my machine" problems, ensures consistent dependencies, and makes deployment to any cloud provider straightforward.

```
# Docker commands:
# docker build -t ml-api .          # Build image
# docker run -p 8000:8000 ml-api    # Run container
# docker push ml-api:latest         # Push to registry
```

### 6. Model Serving Patterns

- **Real-time (Online) Serving**: API endpoint that returns predictions immediately. Best for interactive applications (chatbots, recommendation widgets). Flask, FastAPI, or cloud endpoints.
- **Batch Serving**: Process large datasets periodically (hourly, daily). Best for non-time-critical tasks (daily reports, email personalization). Use cron jobs, Airflow, or cloud batch services.
- **Streaming Serving**: Process data as it arrives in real-time streams (Kafka, Kinesis). Best for continuous monitoring (fraud detection, anomaly detection).

### 7. Model Monitoring

Deployed models degrade over time. Key things to monitor:

- **Data Drift**: The distribution of incoming data changes from what the model was trained on. Example: a loan approval model trained on pre-pandemic data encounters pandemic-era applications with different income patterns.
- **Concept Drift**: The relationship between features and the target changes. Example: what constitutes spam email evolves as spammers change tactics.
- **Performance Decay**: Model accuracy, latency, or throughput degradation over time.

```
# Simple data drift detection using statistical tests
from scipy import stats
import numpy as np

def detect_drift(reference_data, new_data, threshold=0.05):
    """Detect data drift using Kolmogorov-Smirnov test."""
    results = []
    for col in range(reference_data.shape[1]):
        stat, p_value = stats.ks_2samp(reference_data[:, col], new_data[:, col])
        drift_detected = p_value < threshold
        results.append({"feature": col, "p_value": p_value, "drift": drift_detected})
    return results
```

### 8. Model Versioning with MLflow

MLflow tracks experiments, packages models, and manages deployments:

```
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Start an experiment
mlflow.set_experiment("sentiment-classifier")

with mlflow.start_run():
    # Log hyperparameters
    mlflow.log_param("n_estimators", 100)
    mlflow.log_param("max_depth", 10)
    
    # Train model
    model = RandomForestClassifier(n_estimators=100, max_depth=10)
    model.fit(X_train, y_train)
    
    # Log metrics
    accuracy = accuracy_score(y_test, model.predict(X_test))
    mlflow.log_metric("accuracy", accuracy)
    
    # Log model
    mlflow.sklearn.log_model(model, "model")
    
    print(f"Run ID: {mlflow.active_run().info.run_id}")
    print(f"Accuracy: {accuracy:.4f}")
```

### 9. CI/CD for ML

CI/CD (Continuous Integration/Continuous Deployment) automates testing and deployment:

- **CI**: On every code push, automatically run tests (data validation, model performance checks, unit tests).
- **CD**: Automatically deploy the model to staging/production if all tests pass.

```
# GitHub Actions workflow for ML CI/CD (.github/workflows/ml-pipeline.yml)
# name: ML Pipeline
# on: push
# jobs:
#   test:
#     runs-on: ubuntu-latest
#     steps:
#       - uses: actions/checkout@v3
#       - name: Install dependencies
#         run: pip install -r requirements.txt
#       - name: Run data validation
#         run: python tests/test_data.py
#       - name: Run model tests
#         run: python tests/test_model.py
#       - name: Build Docker image
#         run: docker build -t ml-api .
#       - name: Deploy to staging
#         if: github.ref == 'refs/heads/main'
#         run: ./deploy.sh staging
```

### 10. Cloud Deployment Options

- **AWS SageMaker**: End-to-end ML platform with built-in training, deployment, and monitoring. Managed infrastructure.
- **GCP Vertex AI**: Google's unified ML platform. Integrated with BigQuery and TensorFlow.
- **Hugging Face Spaces**: Free hosting for ML demos. Great for prototyping and showcasing models.
- **Azure ML**: Microsoft's ML platform with AutoML and MLOps pipelines.
- **Self-hosted**: Deploy on a VPS (DigitalOcean, EC2) with Docker + nginx. Full control but more operational burden.

## Code Examples

### Complete FastAPI ML Deployment

```python
# app.py -- FastAPI ML prediction service
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import joblib
import numpy as np
from datetime import datetime

app = FastAPI(
    title="Sentiment Classifier API",
    description="Classifies text sentiment as positive or negative",
    version="1.0.0"
)

# Load model and vectorizer at startup
model = joblib.load("sentiment_model.joblib")
vectorizer = joblib.load("tfidf_vectorizer.joblib")

# Request/Response schemas
class TextRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=5000, 
                      description="Text to classify")

class PredictionResponse(BaseModel):
    text: str
    sentiment: str
    confidence: float
    model_version: str
    timestamp: str

class HealthResponse(BaseModel):
    status: str
    model_loaded: bool
    timestamp: str

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: TextRequest):
    try:
        # Vectorize text
        features = vectorizer.transform([request.text])
        
        # Predict
        prediction = model.predict(features)[0]
        proba = model.predict_proba(features)[0]
        confidence = float(max(proba))
        sentiment = "positive" if prediction == 1 else "negative"
        
        return PredictionResponse(
            text=request.text,
            sentiment=sentiment,
            confidence=round(confidence, 4),
            model_version="1.0.0",
            timestamp=datetime.now().isoformat()
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse(
        status="healthy",
        model_loaded=model is not None,
        timestamp=datetime.now().isoformat()
    )

# Run with: uvicorn app:app --host 0.0.0.0 --port 8000
# Docs at: http://localhost:8000/docs
print("FastAPI app defined with /predict and /health endpoints")
print("Run: uvicorn app:app --host 0.0.0.0 --port 8000")
```

This production-ready FastAPI app serves a sentiment classifier. Pydantic models validate incoming requests (min/max length) and define response schemas. The `/predict` endpoint takes text, vectorizes it, runs the model, and returns prediction with confidence. The `/health` endpoint enables load balancers and monitoring systems to check if the service is running. Auto-generated Swagger docs are available at `/docs`.

**Output:**

```
FastAPI app defined with /predict and /health endpoints
Run: uvicorn app:app --host 0.0.0.0 --port 8000
```

### Saving and Loading Models with Different Methods

```python
import pickle
import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification
import os
import time

# Create a model
X, y = make_classification(n_samples=1000, n_features=20, random_state=42)
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)
print(f"Model accuracy: {model.score(X, y):.4f}")

# Method 1: pickle
start = time.time()
with open("model.pkl", "wb") as f:
    pickle.dump(model, f)
pickle_time = time.time() - start
pickle_size = os.path.getsize("model.pkl") / 1024

with open("model.pkl", "rb") as f:
    model_pkl = pickle.load(f)
print(f"\npickle: {pickle_size:.1f} KB, save time: {pickle_time:.4f}s")
print(f"  Predictions match: {np.array_equal(model.predict(X[:5]), model_pkl.predict(X[:5]))}")

# Method 2: joblib
start = time.time()
joblib.dump(model, "model.joblib")
joblib_time = time.time() - start
joblib_size = os.path.getsize("model.joblib") / 1024

model_jl = joblib.load("model.joblib")
print(f"\njoblib: {joblib_size:.1f} KB, save time: {joblib_time:.4f}s")
print(f"  Predictions match: {np.array_equal(model.predict(X[:5]), model_jl.predict(X[:5]))}")

# Method 3: joblib with compression
start = time.time()
joblib.dump(model, "model_compressed.joblib", compress=3)
comp_time = time.time() - start
comp_size = os.path.getsize("model_compressed.joblib") / 1024
print(f"\njoblib (compressed): {comp_size:.1f} KB, save time: {comp_time:.4f}s")
print(f"  Compression ratio: {joblib_size/comp_size:.1f}x")

# Cleanup
for f in ["model.pkl", "model.joblib", "model_compressed.joblib"]:
    os.remove(f)
```

Three methods for saving scikit-learn models: pickle (standard Python serialization), joblib (optimized for numpy arrays, slightly faster for ML models), and joblib with compression (smaller files, slower save/load). All methods produce identical predictions. Joblib with compression is best for deployment where file size matters. For Keras models, use `model.save()`; for PyTorch, use `torch.save(model.state_dict())`.

**Output:**

```
Model accuracy: 1.0000

pickle: 1247.3 KB, save time: 0.0312s
  Predictions match: True

joblib: 1189.5 KB, save time: 0.0287s
  Predictions match: True

joblib (compressed): 312.8 KB, save time: 0.1456s
  Compression ratio: 3.8x
```

### Docker Configuration for ML API

```python
# This example shows the Docker configuration files needed

# === Dockerfile ===
dockerfile_content = """FROM python:3.11-slim

WORKDIR /app

# Install system dependencies (if needed for numpy/scipy)
RUN apt-get update && apt-get install -y --no-install-recommends \\
    build-essential && rm -rf /var/lib/apt/lists/*

# Copy and install Python dependencies first (layer caching)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code and model
COPY app.py .
COPY model.joblib .
COPY vectorizer.joblib .

# Create non-root user for security
RUN useradd -m appuser && chown -R appuser /app
USER appuser

# Expose port and set healthcheck
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=5s \\
    CMD curl -f http://localhost:8000/health || exit 1

# Run with uvicorn
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
"""

# === requirements.txt ===
requirements_content = """fastapi==0.109.0
uvicorn==0.27.0
joblib==1.3.2
scikit-learn==1.4.0
numpy==1.26.3
pydantic==2.5.3
"""

# === docker-compose.yml ===
compose_content = """version: '3.8'
services:
  ml-api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - MODEL_PATH=/app/model.joblib
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 5s
      retries: 3
    restart: unless-stopped
"""

print("=== Dockerfile ===")
print(dockerfile_content)
print("=== requirements.txt ===")
print(requirements_content)
print("=== Docker Commands ===")
print("docker build -t ml-api .")
print("docker run -p 8000:8000 ml-api")
print("docker-compose up --build")
print("\nKey Docker concepts:")
print("  Image: Blueprint (read-only template)")
print("  Container: Running instance of an image")
print("  Layer caching: Dependencies installed before code for faster rebuilds")
print("  Non-root user: Security best practice")
```

This shows the complete Docker setup for deploying an ML API. Key practices: install dependencies before copying code (leverages Docker layer caching for faster rebuilds), pin exact library versions (reproducibility), run as non-root user (security), include a health check (monitoring), and use docker-compose for easy orchestration. The `--no-cache-dir` flag reduces image size by not caching pip downloads.

**Output:**

```
=== Dockerfile ===
[Dockerfile content printed]
=== requirements.txt ===
[requirements.txt content printed]
=== Docker Commands ===
docker build -t ml-api .
docker run -p 8000:8000 ml-api
docker-compose up --build

Key Docker concepts:
  Image: Blueprint (read-only template)
  Container: Running instance of an image
  Layer caching: Dependencies installed before code for faster rebuilds
  Non-root user: Security best practice
```

### MLflow Experiment Tracking

```python
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score

# Create dataset
X, y = make_classification(n_samples=2000, n_features=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Set experiment
mlflow.set_experiment("model-comparison")

# Define experiments
experiments = [
    ("LogisticRegression", LogisticRegression(max_iter=200)),
    ("RandomForest", RandomForestClassifier(n_estimators=100, random_state=42)),
    ("GradientBoosting", GradientBoostingClassifier(n_estimators=100, random_state=42))
]

results = []
for name, model in experiments:
    with mlflow.start_run(run_name=name):
        # Log model type
        mlflow.log_param("model_type", name)
        
        # Train
        model.fit(X_train, y_train)
        predictions = model.predict(X_test)
        
        # Calculate metrics
        accuracy = accuracy_score(y_test, predictions)
        f1 = f1_score(y_test, predictions)
        
        # Log metrics
        mlflow.log_metric("accuracy", accuracy)
        mlflow.log_metric("f1_score", f1)
        
        # Log model artifact
        mlflow.sklearn.log_model(model, "model")
        
        results.append((name, accuracy, f1))
        print(f"{name:25s} | Accuracy: {accuracy:.4f} | F1: {f1:.4f}")

# Summary
print("\n=== Experiment Summary ===")
best = max(results, key=lambda x: x[1])
print(f"Best model: {best[0]} (Accuracy: {best[1]:.4f})")
print("\nAll runs logged in MLflow. View with: mlflow ui")
```

MLflow tracks experiments with parameters, metrics, and model artifacts. Each `mlflow.start_run()` creates a new run. `log_param()` records hyperparameters, `log_metric()` records performance metrics, and `log_model()` saves the trained model. All runs are stored and viewable in the MLflow UI (`mlflow ui`). This enables comparing experiments, reproducing results, and selecting the best model for deployment.

**Output:**

```
LogisticRegression        | Accuracy: 0.9225 | F1: 0.9218
RandomForest              | Accuracy: 0.9650 | F1: 0.9644
GradientBoosting          | Accuracy: 0.9575 | F1: 0.9569

=== Experiment Summary ===
Best model: RandomForest (Accuracy: 0.9650)

All runs logged in MLflow. View with: mlflow ui
```

### Data Drift Detection

```python
import numpy as np
from scipy import stats

def detect_data_drift(reference_data, production_data, feature_names, alpha=0.05):
    """
    Detect data drift using Kolmogorov-Smirnov test.
    Compares the distribution of each feature between reference and production data.
    """
    results = []
    
    for i, name in enumerate(feature_names):
        ref_col = reference_data[:, i]
        prod_col = production_data[:, i]
        
        # KS test: null hypothesis = same distribution
        ks_stat, p_value = stats.ks_2samp(ref_col, prod_col)
        drift = p_value < alpha
        
        results.append({
            "feature": name,
            "ks_statistic": round(ks_stat, 4),
            "p_value": round(p_value, 4),
            "drift_detected": drift
        })
    
    return results

# Simulate training data (reference) and production data
np.random.seed(42)
n_samples = 1000

# Reference data (training distribution)
ref_data = np.column_stack([
    np.random.normal(0, 1, n_samples),      # Feature A: mean=0, std=1
    np.random.normal(5, 2, n_samples),      # Feature B: mean=5, std=2
    np.random.uniform(0, 10, n_samples),    # Feature C: uniform 0-10
])

# Production data (with drift on Feature B)
prod_data = np.column_stack([
    np.random.normal(0, 1, n_samples),      # Feature A: NO drift
    np.random.normal(7, 2.5, n_samples),    # Feature B: DRIFTED (mean 5->7, std 2->2.5)
    np.random.uniform(0, 10, n_samples),    # Feature C: NO drift
])

feature_names = ["Feature A", "Feature B", "Feature C"]
results = detect_data_drift(ref_data, prod_data, feature_names)

print("=== Data Drift Report ===")
print(f"{'Feature':12s} | {'KS Stat':8s} | {'P-Value':8s} | {'Drift?':8s}")
print("-" * 46)
for r in results:
    drift_str = "YES" if r["drift_detected"] else "No"
    print(f"{r['feature']:12s} | {r['ks_statistic']:8.4f} | {r['p_value']:8.4f} | {drift_str:8s}")

drifted = [r for r in results if r["drift_detected"]]
print(f"\nDrifted features: {len(drifted)}/{len(results)}")
if drifted:
    print("Action: Investigate drifted features and consider retraining the model.")
```

Data drift detection compares the statistical distribution of production data against training data. The Kolmogorov-Smirnov test measures the maximum distance between two cumulative distribution functions. A low p-value (below alpha=0.05) indicates statistically significant distribution change. In this example, Feature B drifted (mean shifted from 5 to 7), which the KS test detects. When drift is found, investigate the cause and consider retraining the model.

**Output:**

```
=== Data Drift Report ===
Feature      | KS Stat  | P-Value  | Drift?  
----------------------------------------------
Feature A    |   0.0310 |   0.7123 | No      
Feature B    |   0.2850 |   0.0000 | YES     
Feature C    |   0.0280 |   0.8012 | No      

Drifted features: 1/3
Action: Investigate drifted features and consider retraining the model.
```

### Flask ML API with Request Logging

```python
from flask import Flask, request, jsonify
import joblib
import numpy as np
import json
from datetime import datetime
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Simulated model for demonstration
class SimpleModel:
    def predict(self, X):
        return (np.sum(X, axis=1) > 0).astype(int)
    def predict_proba(self, X):
        scores = 1 / (1 + np.exp(-np.sum(X, axis=1)))
        return np.column_stack([1 - scores, scores])

model = SimpleModel()

# Request logging
prediction_log = []

@app.route("/predict", methods=["POST"])
def predict():
    start_time = datetime.now()
    data = request.get_json()
    
    if "features" not in data:
        return jsonify({"error": "Missing 'features' in request"}), 400
    
    features = np.array(data["features"]).reshape(1, -1)
    prediction = int(model.predict(features)[0])
    proba = model.predict_proba(features)[0]
    confidence = float(max(proba))
    
    # Log the prediction
    latency_ms = (datetime.now() - start_time).total_seconds() * 1000
    log_entry = {
        "timestamp": start_time.isoformat(),
        "features": data["features"],
        "prediction": prediction,
        "confidence": confidence,
        "latency_ms": round(latency_ms, 2)
    }
    prediction_log.append(log_entry)
    logger.info(f"Prediction: {prediction} | Confidence: {confidence:.3f} | Latency: {latency_ms:.2f}ms")
    
    return jsonify({
        "prediction": prediction,
        "confidence": round(confidence, 4),
        "latency_ms": round(latency_ms, 2)
    })

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy", "total_predictions": len(prediction_log)})

@app.route("/metrics", methods=["GET"])
def metrics():
    if not prediction_log:
        return jsonify({"message": "No predictions yet"})
    
    latencies = [log["latency_ms"] for log in prediction_log]
    return jsonify({
        "total_predictions": len(prediction_log),
        "avg_latency_ms": round(np.mean(latencies), 2),
        "p99_latency_ms": round(np.percentile(latencies, 99), 2),
        "avg_confidence": round(np.mean([log["confidence"] for log in prediction_log]), 4)
    })

print("Flask ML API with logging and metrics")
print("Endpoints: /predict (POST), /health (GET), /metrics (GET)")
print("Run: flask run --port 5000")
```

This production-grade Flask API includes request logging (track every prediction), latency measurement (performance monitoring), a health endpoint (for load balancers), and a metrics endpoint (aggregate statistics). In production, logs would go to a centralized system (ELK stack, CloudWatch) and metrics would feed into dashboards (Grafana, Datadog). The `/metrics` endpoint provides average and P99 latency plus average confidence -- key operational metrics.

**Output:**

```
Flask ML API with logging and metrics
Endpoints: /predict (POST), /health (GET), /metrics (GET)
Run: flask run --port 5000
```

## Common Mistakes

### Loading the Model on Every Request

**Wrong:**

```
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    # WRONG: Loading model on every request
    model = joblib.load("model.joblib")  # Disk I/O on every request!
    data = request.get_json()
    prediction = model.predict([data["features"]])
    return jsonify({"prediction": int(prediction[0])})
```

Loading the model from disk on every request adds 100-500ms of latency per request. For a service handling 100 requests per second, this makes the API unusable.

**Correct:**

```
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# CORRECT: Load model once at startup
model = joblib.load("model.joblib")  # Loaded once, stays in memory

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    prediction = model.predict([data["features"]])  # Fast -- model already in memory
    return jsonify({"prediction": int(prediction[0])})
```

Load the model once when the application starts and keep it in memory. All subsequent requests use the in-memory model, which is orders of magnitude faster than reading from disk. If the model is too large for memory, consider model compression, quantization, or batch processing.

### Not Pinning Dependency Versions

**Wrong:**

```
# requirements.txt -- WRONG: no version pinning
scikit-learn
numpy
flask
joblib
```

Without pinned versions, pip install may install different versions on different machines or at different times. A model trained with scikit-learn 1.3 may fail to load with scikit-learn 1.5 due to serialization changes.

**Correct:**

```
# requirements.txt -- CORRECT: exact version pinning
scikit-learn==1.4.0
numpy==1.26.3
flask==3.0.1
joblib==1.3.2
python==3.11

# Even better: use a lock file
# pip freeze > requirements.txt  (captures exact versions)
# Or use poetry/pipenv for dependency management
```

Always pin exact dependency versions for ML deployments. Model serialization (pickle/joblib) depends on the exact library version. A model saved with scikit-learn 1.3 may not deserialize correctly with 1.4. Use `pip freeze` to capture exact versions after verifying everything works.

### Not Validating Input Data in the API

**Wrong:**

```
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    # WRONG: No input validation
    prediction = model.predict([data["features"]])
    return jsonify({"prediction": int(prediction[0])})

# What if:
# - data is None (invalid JSON)?
# - "features" key is missing?
# - features has wrong number of elements?
# - features contains NaN or strings?
# All will cause unhandled 500 errors
```

Without input validation, malformed requests cause cryptic 500 errors. Missing keys, wrong data types, incorrect feature counts, or NaN values all crash the prediction endpoint with unhelpful error messages.

**Correct:**

```
from flask import Flask, request, jsonify
import numpy as np

EXPECTED_FEATURES = 20  # Model expects 20 features

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    
    # Validate request
    if data is None:
        return jsonify({"error": "Invalid JSON"}), 400
    if "features" not in data:
        return jsonify({"error": "Missing 'features' field"}), 400
    
    features = data["features"]
    if not isinstance(features, list):
        return jsonify({"error": "'features' must be a list"}), 400
    if len(features) != EXPECTED_FEATURES:
        return jsonify({"error": f"Expected {EXPECTED_FEATURES} features, got {len(features)}"}), 400
    
    try:
        features_array = np.array(features, dtype=float).reshape(1, -1)
        if np.any(np.isnan(features_array)):
            return jsonify({"error": "Features contain NaN values"}), 400
    except (ValueError, TypeError):
        return jsonify({"error": "Features must be numeric"}), 400
    
    prediction = model.predict(features_array)
    return jsonify({"prediction": int(prediction[0])})
```

Always validate API inputs: check JSON is valid, required fields exist, data types are correct, array lengths match model expectations, and values are not NaN. Return clear 400 error messages for bad requests. FastAPI with Pydantic handles much of this automatically, which is one reason it is preferred for ML APIs.

### Ignoring Model Monitoring After Deployment

**Wrong:**

```
# WRONG: Deploy and forget
# 1. Train model on January 2025 data
# 2. Deploy to production
# 3. Never check if it is still working
# 4. Six months later: model accuracy has dropped from 95% to 72%
#    because customer behavior changed (concept drift)
#    and no one noticed for months
```

Without monitoring, model degradation goes undetected. Data distribution changes, concept drift, and upstream data quality issues silently reduce model accuracy, causing incorrect predictions that hurt users and business metrics.

**Correct:**

```
# CORRECT: Monitor deployed models
import numpy as np
from scipy import stats

class ModelMonitor:
    def __init__(self, reference_data, alert_threshold=0.05):
        self.reference = reference_data
        self.threshold = alert_threshold
        self.predictions = []
    
    def log_prediction(self, features, prediction, ground_truth=None):
        self.predictions.append({
            "features": features,
            "prediction": prediction,
            "ground_truth": ground_truth
        })
    
    def check_data_drift(self, recent_features):
        for col in range(self.reference.shape[1]):
            _, p_val = stats.ks_2samp(self.reference[:, col], recent_features[:, col])
            if p_val < self.threshold:
                print(f"ALERT: Data drift detected in feature {col} (p={p_val:.4f})")
    
    def check_accuracy(self, window=100):
        labeled = [p for p in self.predictions[-window:] if p["ground_truth"] is not None]
        if labeled:
            accuracy = sum(1 for p in labeled if p["prediction"] == p["ground_truth"]) / len(labeled)
            if accuracy < 0.85:
                print(f"ALERT: Accuracy dropped to {accuracy:.2%}")

print("Set up: data drift checks, accuracy monitoring, alerting")
```

Monitor three things after deployment: (1) Data drift -- are incoming features still similar to training data? (2) Performance metrics -- is accuracy/F1 still acceptable? (3) Operational health -- latency, error rates, throughput. Set up automated alerts (email, Slack, PagerDuty) when metrics drop below thresholds. Schedule regular retraining when drift is detected.

## Summary

- MLOps (Machine Learning Operations) bridges the gap between ML model development and production deployment. It addresses the fact that 87% of ML projects never reach production by providing tools and processes for reliable model serving, monitoring, and maintenance.
- Models are serialized (saved) using pickle (general Python objects), joblib (optimized for scikit-learn with large numpy arrays), model.save() for Keras, or torch.save() for PyTorch. Always pin library versions because serialization depends on exact versions.
- Flask provides the simplest way to serve ML models via REST APIs. Define a /predict endpoint that accepts JSON, runs the model, and returns predictions. Load the model once at startup, not on every request.
- FastAPI is preferred over Flask for ML APIs because of automatic request validation (Pydantic), auto-generated Swagger docs, async support for higher concurrency, and built-in type hints. Use Pydantic BaseModel classes for request/response schemas.
- Docker packages your application, model, and all dependencies into a portable container. Key Dockerfile practices: pin base image version, install dependencies before copying code (layer caching), run as non-root user, and include a health check endpoint.
- Model serving patterns include real-time (API endpoints for immediate predictions), batch (periodic processing of large datasets), and streaming (continuous processing of data streams). Choose based on latency requirements and data volume.
- Model monitoring tracks data drift (incoming data distribution changes), concept drift (feature-target relationships change), and performance decay (accuracy/latency degradation). Use statistical tests like Kolmogorov-Smirnov to detect distributional changes.
- MLflow tracks ML experiments by logging parameters, metrics, and model artifacts for each run. It enables reproducibility (exact experiment recreation), comparison (which model is best), and versioning (roll back to any previous model).
- CI/CD for ML automates testing (data validation, model performance checks) and deployment (build Docker image, deploy to staging/production). GitHub Actions, Jenkins, or cloud-specific tools trigger these pipelines on code changes.
- Cloud deployment options: AWS SageMaker (managed end-to-end), GCP Vertex AI (Google ecosystem), Hugging Face Spaces (free demos), Azure ML (Microsoft ecosystem), or self-hosted Docker on VPS (full control). Choose based on scale, budget, and existing infrastructure.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ml-ops-and-model-deployment/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ml-ops-and-model-deployment/practice/*
