---
title: "Practice: MLOps and Model Deployment"
description: "50 practice problems for MLOps and Model Deployment in AI and Machine Learning"
slug: ml-ops-and-model-deployment-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ml-ops-and-model-deployment/practice/
category: "AI and Machine Learning"
---
# Practice: MLOps and Model Deployment

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
pipeline_stages = ["Data", "Preprocess", "Train", "Evaluate", "Deploy", "Monitor"]
for i, stage in enumerate(pipeline_stages, 1):
    print(f"{i}. {stage}")
```

*Hint:* enumerate with start=1 provides 1-based indexing.

**Answer:** `1. Data`
`2. Preprocess`
`3. Train`
`4. Evaluate`
`5. Deploy`
`6. Monitor`

The ML pipeline flows from data collection through preprocessing, training, evaluation, deployment, and monitoring. Monitoring may trigger retraining, creating a continuous loop.

### Q2. [Easy] What is the output?

```
save_methods = {
    "pickle": ".pkl",
    "joblib": ".joblib",
    "keras": ".keras",
    "torch": ".pt"
}
for method, ext in save_methods.items():
    print(f"{method}: saves as *{ext}")
```

*Hint:* Dictionary iteration produces key-value pairs.

**Answer:** `pickle: saves as *.pkl`
`joblib: saves as *.joblib`
`keras: saves as *.keras`
`torch: saves as *.pt`

Different ML frameworks use different serialization formats. Pickle and joblib work for scikit-learn models. Keras uses .keras (or .h5 legacy). PyTorch uses .pt or .pth files.

### Q3. [Easy] What is the output?

```
serving_patterns = [
    ("Real-time", "< 100ms", "Chatbots, search"),
    ("Batch", "Minutes-hours", "Reports, emails"),
    ("Streaming", "Seconds", "Fraud detection")
]
for pattern, latency, use_case in serving_patterns:
    print(f"{pattern:12s} | {latency:15s} | {use_case}")
```

*Hint:* Three model serving patterns with different latency requirements.

**Answer:** `Real-time    | < 100ms         | Chatbots, search`
`Batch        | Minutes-hours   | Reports, emails`
`Streaming    | Seconds         | Fraud detection`

Real-time serving handles individual predictions with low latency. Batch serving processes large datasets periodically. Streaming serving processes continuous data flows. Choose based on your latency requirements.

### Q4. [Medium] What is the output?

```
import json

# Simulated API request and response
request_data = {"features": [0.5, -1.2, 3.4, 0.8]}
response_data = {"prediction": 1, "confidence": 0.92}

print(f"Request: {json.dumps(request_data)}")
print(f"Response: {json.dumps(response_data)}")
print(f"Feature count: {len(request_data['features'])}")
print(f"Prediction: {'positive' if response_data['prediction'] == 1 else 'negative'}")
```

*Hint:* json.dumps converts dict to JSON string. prediction=1 means positive.

**Answer:** `Request: {"features": [0.5, -1.2, 3.4, 0.8]}`
`Response: {"prediction": 1, "confidence": 0.92}`
`Feature count: 4`
`Prediction: positive`

ML APIs typically accept features as a JSON array in the request body and return the prediction with a confidence score. This is the standard /predict endpoint pattern used in Flask and FastAPI.

### Q5. [Medium] What is the output?

```
docker_layers = [
    ("FROM python:3.11-slim", "Base image"),
    ("COPY requirements.txt .", "Dependencies spec"),
    ("RUN pip install -r requirements.txt", "Install deps (cached)"),
    ("COPY app.py .", "Application code"),
    ("COPY model.joblib .", "ML model"),
    ("CMD uvicorn app:app", "Start command")
]

print("Docker Layer Order (optimized for caching):")
for i, (cmd, desc) in enumerate(docker_layers, 1):
    print(f"  {i}. {desc:25s} -> {cmd}")

print(f"\nTotal layers: {len(docker_layers)}")
print("Note: Change to app.py rebuilds only layers 4-6 (fast rebuild)")
```

*Hint:* Docker rebuilds from the first changed layer. Putting code after deps means dep install is cached.

**Answer:** `Docker Layer Order (optimized for caching):`
`  1. Base image               -> FROM python:3.11-slim`
`  2. Dependencies spec         -> COPY requirements.txt .`
`  3. Install deps (cached)     -> RUN pip install -r requirements.txt`
`  4. Application code          -> COPY app.py .`
`  5. ML model                  -> COPY model.joblib .`
`  6. Start command             -> CMD uvicorn app:app`

`Total layers: 6`
`Note: Change to app.py rebuilds only layers 4-6 (fast rebuild)`

Docker caches layers and rebuilds from the first changed layer. By copying requirements.txt and installing dependencies before copying application code, dependency installation is cached (the slow step). Changing app.py only rebuilds layers 4-6, making rebuilds fast.

### Q6. [Medium] What is the output?

```
import numpy as np
from scipy import stats

np.random.seed(42)

# Reference distribution (training)
ref = np.random.normal(0, 1, 1000)

# Test 1: Same distribution (no drift)
test_same = np.random.normal(0, 1, 1000)
stat1, p1 = stats.ks_2samp(ref, test_same)

# Test 2: Different distribution (drift!)
test_diff = np.random.normal(0.5, 1.5, 1000)
stat2, p2 = stats.ks_2samp(ref, test_diff)

print(f"Same distribution:  KS={stat1:.4f}, p={p1:.4f}, drift={'YES' if p1 < 0.05 else 'No'}")
print(f"Drifted distribution: KS={stat2:.4f}, p={p2:.4f}, drift={'YES' if p2 < 0.05 else 'No'}")
```

*Hint:* KS test detects if two samples come from different distributions. Low p-value = likely different.

**Answer:** `Same distribution:  KS=[small], p=[large, > 0.05], drift=No`
`Drifted distribution: KS=[large], p=[small, < 0.05], drift=YES`

The KS test compares two distributions. When both are N(0,1), the p-value is high (no evidence of drift). When the second is N(0.5, 1.5) -- shifted mean and increased variance -- the p-value is very low, correctly detecting drift. This is how model monitoring catches distribution changes in production data.

### Q7. [Hard] What is the output?

```
class ModelVersionManager:
    def __init__(self):
        self.versions = []
        self.active = None
    
    def register(self, name, accuracy):
        version = {"name": name, "accuracy": accuracy, "version": len(self.versions) + 1}
        self.versions.append(version)
        return version["version"]
    
    def promote(self, version_num):
        for v in self.versions:
            if v["version"] == version_num:
                self.active = v
                return True
        return False
    
    def get_active(self):
        return self.active

mgr = ModelVersionManager()
mgr.register("rf_v1", 0.89)
mgr.register("rf_v2", 0.92)
v3 = mgr.register("gb_v1", 0.95)

mgr.promote(v3)
active = mgr.get_active()
print(f"Total versions: {len(mgr.versions)}")
print(f"Active: {active['name']} (v{active['version']}, acc={active['accuracy']})")
```

*Hint:* Three models registered. v3 promoted to active. get_active returns the promoted model.

**Answer:** `Total versions: 3`
`Active: gb_v1 (v3, acc=0.95)`

This simulates model versioning: register multiple model versions, promote the best one to production. v3 (gb_v1, accuracy 0.95) is the best and gets promoted. Tools like MLflow's Model Registry provide this functionality with additional features like staging environments and approval workflows.

### Q8. [Easy] Why should you load the ML model once at startup rather than loading it on every API request?

*Hint:* Think about disk I/O time vs memory access time.

**Answer:** Loading a model from disk involves file I/O, deserialization, and memory allocation -- typically 100-500ms per load. In contrast, a model already in memory can be used for prediction in microseconds. Loading on every request would add this 100-500ms overhead to every API call, making the service unusable for real-time applications. Loading once at startup keeps the model in memory for the entire lifecycle of the application, and all requests share the same fast in-memory model.

This is one of the most common deployment mistakes. Even a small scikit-learn model takes tens of milliseconds to load from disk. Deep learning models can take seconds. Always load at startup and keep in memory.

### Q9. [Medium] What is the difference between data drift and concept drift? Give an example of each.

*Hint:* One is about input distribution changes, the other is about the input-output relationship changing.

**Answer:** **Data drift** occurs when the distribution of input features changes. The model's decision boundary is still correct, but it receives inputs it has not seen before. Example: a loan model trained on ages 25-55 starts receiving applications from 18-year-olds. **Concept drift** occurs when the relationship between features and the target variable changes, even if the input distribution stays the same. Example: a spam classifier where the same words that used to be benign ("cryptocurrency", "NFT") are now associated with spam due to evolving spam tactics. Data drift affects inputs; concept drift affects the mapping from inputs to outputs.

Both types of drift degrade model performance. Data drift is easier to detect (compare input distributions). Concept drift requires ground truth labels to detect (compare predicted vs actual outcomes). Both may require model retraining.

### Q10. [Medium] What advantages does FastAPI have over Flask for ML model serving?

*Hint:* Think about validation, documentation, performance, and developer experience.

**Answer:** FastAPI advantages: (1) **Automatic request validation** via Pydantic models -- incorrect requests return clear error messages without manual validation code. (2) **Auto-generated API docs** at /docs (Swagger UI) and /redoc. (3) **Async support** for handling concurrent requests efficiently. (4) **Type hints** throughout for better IDE support and self-documentation. (5) **Higher performance** than Flask due to Starlette and async I/O. Flask advantages: simpler for small projects, larger ecosystem, more tutorials. For ML APIs, FastAPI is generally preferred because input validation (checking feature counts, types, ranges) is crucial and automatic with Pydantic.

FastAPI's Pydantic integration is particularly valuable for ML APIs where invalid inputs (wrong feature count, NaN values, wrong types) can cause cryptic model errors. Pydantic catches these at the API boundary with clear error messages.

### Q11. [Hard] Rajesh has deployed a model that works perfectly in staging but fails in production with 'module not found' errors. What is likely the problem and how does Docker solve it?

*Hint:* Think about environment differences between machines.

**Answer:** The likely problem is **environment mismatch**: production has different Python/library versions, missing dependencies, or different OS libraries than Rajesh's staging machine. Docker solves this by packaging the application, model, and ALL dependencies into a **container** that includes its own OS libraries, Python installation, and pip packages. This container runs identically on any machine that has Docker installed, eliminating 'works on my machine' problems. The Dockerfile specifies the exact base image (e.g., python:3.11-slim), exact pip packages (from requirements.txt with pinned versions), and the exact startup command. What runs in Docker on Rajesh's laptop will run identically on a production server.

Docker containers are isolated environments that include everything needed to run the application. They share the host OS kernel but have their own filesystem, network, and processes. This isolation ensures reproducibility across development, staging, and production environments.

### Q12. [Hard] Design a monitoring strategy for a production ML model. What metrics would you track and how would you set up alerts?

*Hint:* Think about input data, model performance, and operational health.

**Answer:** Track three categories: (1) **Data quality metrics**: Feature distributions (KS test against training data), null rates, type mismatches, input volume. Alert when drift p-value < 0.05 or null rate exceeds 5%. (2) **Model performance metrics**: Accuracy, F1, precision, recall on labeled samples. Average prediction confidence. Prediction distribution. Alert when accuracy drops below threshold or confidence distribution shifts. (3) **Operational metrics**: API latency (P50, P95, P99), throughput (requests/sec), error rate, memory/CPU usage. Alert when P99 latency exceeds SLA or error rate exceeds 1%. Implementation: log every prediction (input, output, timestamp, latency), run drift checks hourly, collect ground truth labels when available, and send alerts via Slack/email/PagerDuty.

Production monitoring is what separates POC models from reliable production systems. Without it, models silently degrade. A good monitoring system catches problems before users notice them and triggers automated or manual retraining when needed.

### Q13. [Easy] What is the output?

```
checks = ["Data drift", "Concept drift", "Accuracy decay", "Latency spike", "Error rate"]
for c in checks:
    print(f"  Monitor: {c}")
print(f"Total: {len(checks)}")
```

*Hint:* 5 things to monitor for deployed ML models.

**Answer:** `  Monitor: Data drift`
`  Monitor: Concept drift`
`  Monitor: Accuracy decay`
`  Monitor: Latency spike`
`  Monitor: Error rate`
`Total: 5`

Deployed models need continuous monitoring for data distribution changes, target relationship changes, accuracy drops, response time issues, and request failures.

### Q14. [Medium] What is the output?

```
import json

def validate_request(data, n_features=4):
    if data is None: return "Invalid JSON"
    if "features" not in data: return "Missing features"
    if len(data["features"]) != n_features: return f"Expected {n_features}, got {len(data['features'])}"
    return "OK"

requests = [{"features":[1,2,3,4]}, {"data":[1]}, {"features":[1,2]}, None]
for req in requests:
    print(f"{str(req)[:35]:35s} -> {validate_request(req)}")
```

*Hint:* Validate JSON, key existence, and feature count.

**Answer:** `{"features": [1, 2, 3, 4]}            -> OK`
`{"data": [1]}                          -> Missing features`
`{"features": [1, 2]}                   -> Expected 4, got 2`
`None                                  -> Invalid JSON`

Input validation catches malformed requests before they crash the model. Always check JSON validity, required fields, feature count, and data types. FastAPI with Pydantic handles most of this automatically.

### Q15. [Hard] What is the output?

```
def api_capacity(latency_ms, workers):
    return workers * (1000 / latency_ms)

for latency, workers in [(10, 4), (50, 4), (200, 4), (50, 16)]:
    rps = api_capacity(latency, workers)
    print(f"{latency:3d}ms, {workers:2d} workers -> {rps:.0f} RPS")
```

*Hint:* Each worker handles 1000/latency requests per second.

**Answer:** ` 10ms,  4 workers -> 400 RPS`
` 50ms,  4 workers -> 80 RPS`
`200ms,  4 workers -> 20 RPS`
` 50ms, 16 workers -> 320 RPS`

API capacity = workers * (1000 / latency). Faster models and more workers increase throughput. A 10ms model with 4 workers handles 400 requests per second. Scaling options: add workers, optimize model (quantization), or use batch inference.

### Q16. [Medium] What is the difference between a Docker image and a Docker container?

*Hint:* Think about the difference between a class and an instance.

**Answer:** A Docker **image** is a read-only template containing the application, dependencies, and configuration -- like a class definition. A Docker **container** is a running instance of an image -- like an object instantiated from a class. You can run multiple containers from one image. Images are built from Dockerfiles and stored in registries. Containers are started, stopped, and deleted independently. The image is the blueprint; the container is the running house.

docker build creates an image. docker run creates a container from an image. Multiple containers can run from the same image, each with its own state.

### Q17. [Easy] What is the output?

```
mlops_tools = {"Versioning": "MLflow", "Container": "Docker", "API": "FastAPI", "CI/CD": "GitHub Actions"}
for purpose, tool in mlops_tools.items():
    print(f"{purpose:12s} -> {tool}")
```

*Hint:* 4 MLOps categories and their popular tools.

**Answer:** `Versioning   -> MLflow`
`Container    -> Docker`
`API          -> FastAPI`
`CI/CD        -> GitHub Actions`

MLOps uses specialized tools for each stage: MLflow for experiment tracking and model versioning, Docker for containerization, FastAPI for model serving APIs, and GitHub Actions for automated testing and deployment.

### Q18. [Hard] What is model quantization and when would Deepak use it for deployment?

*Hint:* Think about reducing model precision to make inference faster and cheaper.

**Answer:** **Model quantization** reduces the numerical precision of model weights and activations from 32-bit floats (FP32) to lower precision formats like 16-bit (FP16), 8-bit integers (INT8), or 4-bit (INT4). Benefits: smaller model files (4x smaller at INT8), faster inference (integer operations are cheaper), and lower memory usage (fit larger models on smaller GPUs). Trade-offs: slight accuracy loss (usually < 1% for INT8, 2-5% for INT4). Deepak should use quantization when: deploying on edge devices with limited memory, reducing cloud inference costs, meeting strict latency SLAs, or deploying large language models that do not fit in GPU memory at full precision. Tools: PyTorch quantization, ONNX Runtime, TensorRT, bitsandbytes.

Quantization is essential for production deployment of large models. QLoRA uses 4-bit quantization for fine-tuning LLMs. TensorRT uses INT8 for fast inference on NVIDIA GPUs. The accuracy-efficiency tradeoff is usually favorable.

## Mixed Questions

### Q1. [Easy] What is the output?

```
cloud_options = [
    ("AWS SageMaker", "Amazon"),
    ("Vertex AI", "Google"),
    ("Azure ML", "Microsoft"),
    ("HF Spaces", "Hugging Face")
]
for service, provider in cloud_options:
    print(f"{provider:15s} -> {service}")
```

*Hint:* List of tuples with cloud provider and their ML platform.

**Answer:** `Amazon          -> AWS SageMaker`
`Google          -> Vertex AI`
`Microsoft       -> Azure ML`
`Hugging Face    -> HF Spaces`

Major cloud providers offer managed ML platforms: SageMaker (AWS), Vertex AI (GCP), Azure ML (Microsoft). Hugging Face Spaces provides free hosting for ML demos and is popular for prototyping.

### Q2. [Easy] What is the output?

```
http_codes = {
    200: "OK -- prediction returned",
    400: "Bad Request -- invalid input",
    404: "Not Found -- wrong endpoint",
    500: "Server Error -- model failed"
}
for code, meaning in http_codes.items():
    print(f"HTTP {code}: {meaning}")
```

*Hint:* Common HTTP status codes used in ML APIs.

**Answer:** `HTTP 200: OK -- prediction returned`
`HTTP 400: Bad Request -- invalid input`
`HTTP 404: Not Found -- wrong endpoint`
`HTTP 500: Server Error -- model failed`

ML APIs use standard HTTP status codes: 200 for successful predictions, 400 for invalid requests (wrong feature count, bad JSON), 404 for wrong URLs, and 500 for internal errors (model crash). Good APIs always return 400 with a descriptive message for bad input rather than letting the model crash with a 500.

### Q3. [Medium] What is the output?

```
import os

# Simulated file sizes for model artifacts
artifacts = {
    "model.pkl": 5242880,       # 5 MB
    "vectorizer.pkl": 1048576,  # 1 MB
    "config.json": 1024,        # 1 KB
    "requirements.txt": 256     # 256 bytes
}

total = 0
for name, size in artifacts.items():
    mb = size / (1024 * 1024)
    print(f"{name:20s}: {mb:8.2f} MB")
    total += size

print(f"{'Total':20s}: {total/(1024*1024):8.2f} MB")
```

*Hint:* Convert bytes to MB by dividing by 1024*1024.

**Answer:** `model.pkl           :     5.00 MB`
`vectorizer.pkl      :     1.00 MB`
`config.json         :     0.00 MB`
`requirements.txt    :     0.00 MB`
`Total               :     6.00 MB`

ML deployments include the model file, any preprocessors (vectorizers, scalers), configuration, and dependency specifications. The model is typically the largest artifact. Docker images include all of these plus the Python runtime and libraries, often totaling 500MB-2GB.

### Q4. [Medium] What is the output?

```
def api_latency_report(latencies_ms):
    import numpy as np
    p50 = np.percentile(latencies_ms, 50)
    p95 = np.percentile(latencies_ms, 95)
    p99 = np.percentile(latencies_ms, 99)
    avg = np.mean(latencies_ms)
    return {"avg": round(avg, 1), "p50": round(p50, 1), "p95": round(p95, 1), "p99": round(p99, 1)}

import numpy as np
np.random.seed(42)
latencies = np.random.exponential(scale=15, size=1000)  # Exponential distribution
report = api_latency_report(latencies)

for metric, value in report.items():
    sla_ok = value < 100
    print(f"{metric:4s}: {value:6.1f}ms {'OK' if sla_ok else 'BREACH'}")
```

*Hint:* Exponential distribution with scale=15 has most values near 15ms but a long tail.

**Answer:** All metrics show latency values, with p99 being the highest due to the long tail of the exponential distribution. All should be under 100ms for this distribution.

Latency monitoring uses percentiles: P50 (median -- half of requests are faster), P95 (95% of requests), and P99 (99% of requests -- catches tail latency). ML APIs typically target P99 < 100ms for real-time serving. The exponential distribution models real-world latency well: most requests are fast, but some are slow.

### Q5. [Hard] What is the output?

```
import mlflow

class MockMLflowRun:
    def __init__(self, params, metrics, model_name):
        self.params = params
        self.metrics = metrics
        self.model_name = model_name

runs = [
    MockMLflowRun({"n_estimators": "100", "max_depth": "5"}, {"accuracy": 0.89, "f1": 0.87}, "rf_v1"),
    MockMLflowRun({"n_estimators": "200", "max_depth": "10"}, {"accuracy": 0.93, "f1": 0.91}, "rf_v2"),
    MockMLflowRun({"n_estimators": "50", "learning_rate": "0.1"}, {"accuracy": 0.95, "f1": 0.94}, "gb_v1")
]

print("MLflow Experiment Comparison:")
print(f"{'Model':8s} | {'Accuracy':10s} | {'F1':10s} | {'Params':30s}")
print("-" * 65)
for run in runs:
    params_str = ", ".join(f"{k}={v}" for k, v in run.params.items())
    print(f"{run.model_name:8s} | {run.metrics['accuracy']:10.4f} | {run.metrics['f1']:10.4f} | {params_str}")

best = max(runs, key=lambda r: r.metrics["accuracy"])
print(f"\nBest model: {best.model_name} (accuracy={best.metrics['accuracy']})")
```

*Hint:* Compare three models logged in MLflow. Find the one with highest accuracy.

**Answer:** `MLflow Experiment Comparison:`
`Model    | Accuracy   | F1         | Params`
`-----------------------------------------------------------------`
`rf_v1    |     0.8900 |     0.8700 | n_estimators=100, max_depth=5`
`rf_v2    |     0.9300 |     0.9100 | n_estimators=200, max_depth=10`
`gb_v1    |     0.9500 |     0.9400 | n_estimators=50, learning_rate=0.1`

`Best model: gb_v1 (accuracy=0.95)`

MLflow enables comparing experiments side by side. Each run logs its hyperparameters and metrics. The best model (gb_v1 with 95% accuracy) can be promoted to production. This comparison workflow is essential for systematic model development.

### Q6. [Medium] Anita trained a model in a Jupyter notebook on her laptop. What steps does she need to take to deploy it as a production API service?

*Hint:* Think about the full path from notebook to production.

**Answer:** Steps: (1) **Save the model** -- serialize with joblib/pickle. (2) **Write API code** -- create a FastAPI or Flask app with /predict and /health endpoints. (3) **Add input validation** -- validate feature count, types, ranges. (4) **Pin dependencies** -- create requirements.txt with exact library versions. (5) **Containerize** -- write a Dockerfile, build and test the Docker image. (6) **Add monitoring** -- log predictions, latency, and feature distributions. (7) **Deploy** -- push Docker image to a registry, deploy to cloud (SageMaker, Vertex AI) or self-hosted server. (8) **Set up CI/CD** -- automate testing and deployment on code changes.

Going from notebook to production requires serialization, API development, containerization, monitoring, and operational infrastructure. Each step addresses a specific production concern: reproducibility, reliability, scalability, and maintainability.

### Q7. [Hard] What is the difference between A/B testing and canary deployment for ML models? When would you use each?

*Hint:* Think about how traffic is split between old and new models.

**Answer:** **A/B testing**: Split traffic evenly (e.g., 50/50) between the old and new model. Measure statistical differences in key metrics (accuracy, revenue, user engagement). Purpose: determine which model is better based on real-world performance. Use when you want to rigorously compare two models. **Canary deployment**: Route a small percentage (e.g., 5%) of traffic to the new model while 95% goes to the old one. Gradually increase the new model's traffic if no issues arise. Purpose: catch problems early with minimal user impact. Use when deploying any model update to production. Canary focuses on safety (catching errors), A/B testing focuses on comparison (which is better).

In practice, combine both: start with a canary deployment (5% traffic to new model) to verify it does not break anything, then run an A/B test (50/50 split) to compare performance. Only fully switch when the new model is statistically better.

### Q8. [Hard] Why is CI/CD important for ML systems, and how does it differ from standard software CI/CD?

*Hint:* Think about what can change in ML beyond just code.

**Answer:** CI/CD for ML is important because ML systems have more failure modes than regular software: code changes, data changes, model performance degradation, and dependency updates can all break the system. ML CI/CD differs from standard CI/CD in several ways: (1) **Data validation tests** -- check that training data meets schema, distribution, and quality expectations. (2) **Model performance tests** -- verify accuracy/F1/latency meet minimum thresholds before deployment. (3) **Model artifact management** -- version and store trained models alongside code. (4) **Training pipeline triggers** -- CI/CD may trigger retraining when data or code changes. (5) **Longer pipeline times** -- model training can take hours, unlike typical code builds. Standard software CI/CD focuses on code correctness. ML CI/CD must also validate data quality, model performance, and reproducibility.

A complete ML CI/CD pipeline: on code push, run unit tests + data validation + model training + performance evaluation + Docker build. If all pass, deploy to staging. After manual or automated approval, deploy to production with canary rollout.

### Q9. [Easy] What is the output?

```
deployment_checklist = [
    "Model serialized (joblib/pickle)",
    "API endpoint created (/predict)",
    "Input validation added",
    "Health check endpoint (/health)",
    "Dependencies pinned (requirements.txt)",
    "Dockerized",
    "Monitoring configured"
]
print(f"Deployment Checklist ({len(deployment_checklist)} items):")
for i, item in enumerate(deployment_checklist, 1):
    print(f"  [{i}] {item}")
```

*Hint:* 7 items in the deployment checklist.

**Answer:** `Deployment Checklist (7 items):`
Each item listed with its number from 1 to 7.

A complete ML deployment requires serialized model, API endpoint, input validation, health checks, pinned dependencies, containerization, and monitoring. Skipping any step leads to production issues.

### Q10. [Medium] What is the output?

```
def compare_frameworks(name, features):
    return f"{name}: {', '.join(features)}"

flask = compare_frameworks("Flask", ["Simple", "Synchronous", "Manual validation"])
fastapi = compare_frameworks("FastAPI", ["Modern", "Async", "Auto validation", "Auto docs"])

print(flask)
print(fastapi)
print(f"\nFlask features: 3")
print(f"FastAPI features: 4")
print(f"Winner for ML APIs: FastAPI")
```

*Hint:* FastAPI has more built-in features useful for ML APIs.

**Answer:** `Flask: Simple, Synchronous, Manual validation`
`FastAPI: Modern, Async, Auto validation, Auto docs`
`Flask features: 3`
`FastAPI features: 4`
`Winner for ML APIs: FastAPI`

FastAPI is preferred for ML APIs due to automatic Pydantic validation, async request handling, and auto-generated Swagger documentation. Flask is simpler but requires manual setup for these features.

### Q11. [Easy] What is Docker and why is it important for ML deployment?

*Hint:* Think about the 'works on my machine' problem.

**Answer:** Docker is a containerization platform that packages an application along with its dependencies, libraries, and runtime into a portable **container**. For ML deployment, Docker solves the 'works on my machine' problem: a model that runs on a data scientist's laptop (with specific Python/library versions) may fail on a production server with different versions. Docker ensures the exact same environment runs everywhere -- development, staging, and production. The Dockerfile specifies the base image, dependencies, application code, and startup command, making deployments reproducible and portable across any cloud provider.

Docker is essentially a standardized shipping container for software. Just as shipping containers made global trade possible by standardizing packaging, Docker makes deployment reliable by standardizing environments.

### Q12. [Hard] What is model versioning with MLflow and why is it important for production ML systems?

*Hint:* Think about what happens when a new model performs worse than the old one.

**Answer:** Model versioning tracks every model artifact (weights, hyperparameters, metrics, training data version) with a unique identifier. MLflow's Model Registry enables: (1) **Experiment tracking**: compare multiple model versions side by side on metrics. (2) **Reproducibility**: recreate any past model from logged parameters and data. (3) **Rollback**: quickly revert to a previous model version if the new one degrades in production. (4) **Stage management**: move models through stages (Staging -> Production -> Archived) with approval workflows. (5) **Audit trail**: know who trained which model, when, and with what data. Without versioning, teams cannot compare experiments, reproduce results, or recover from bad deployments.

Model versioning is the ML equivalent of git for code. Just as you would never deploy code without version control, you should never deploy models without tracking their lineage. MLflow, Weights & Biases, and Neptune are popular tools for this.

## Multiple Choice Questions

### Q1. [Easy] What does MLOps stand for?

**Answer:** B

**B is correct.** MLOps (Machine Learning Operations) is the set of practices that combine ML development with operations to deploy, monitor, and maintain ML models in production reliably.

### Q2. [Easy] Which Python library is best for serializing scikit-learn models with large numpy arrays?

**Answer:** C

**C is correct.** Joblib is optimized for efficiently serializing objects with large numpy arrays, which is common in scikit-learn models. It is faster than pickle for these use cases and supports compression.

### Q3. [Easy] What is Docker?

**Answer:** B

**B is correct.** Docker packages applications, their dependencies, and runtime into portable containers that run identically on any machine. This eliminates 'works on my machine' problems in ML deployment.

### Q4. [Easy] What HTTP method is typically used for the /predict endpoint in an ML API?

**Answer:** B

**B is correct.** POST is used for /predict because prediction requests send data (features) in the request body. GET is used for /health endpoints that do not require request data.

### Q5. [Easy] What is data drift?

**Answer:** B

**B is correct.** Data drift occurs when production data has different statistical properties than training data. For example, a model trained on ages 25-55 receiving inputs from ages 18-80. This can degrade model performance.

### Q6. [Medium] What advantage does FastAPI have over Flask for ML APIs?

**Answer:** B

**B is correct.** FastAPI provides automatic request validation via Pydantic, native async support for concurrency, and auto-generated Swagger documentation at /docs. These features are particularly valuable for ML APIs that need input validation.

### Q7. [Medium] Why should you copy requirements.txt and install dependencies BEFORE copying application code in a Dockerfile?

**Answer:** B

**B is correct.** Docker rebuilds all layers from the first changed layer onward. By installing dependencies first, changing application code only triggers a rebuild from the COPY app.py step, not the slow pip install step. This dramatically speeds up development iterations.

### Q8. [Medium] What does MLflow track in an ML experiment?

**Answer:** B

**B is correct.** MLflow tracks hyperparameters (log_param), performance metrics (log_metric), model artifacts (log_model), and metadata for each experiment run. This enables experiment comparison, reproducibility, and model versioning.

### Q9. [Medium] What is concept drift?

**Answer:** B

**B is correct.** Concept drift occurs when the underlying patterns the model learned change. For example, spam patterns evolve, customer preferences shift, or economic conditions change. The same inputs now map to different correct outputs than during training.

### Q10. [Medium] When should batch serving be used instead of real-time serving?

**Answer:** B

**B is correct.** Batch serving processes large volumes of data at scheduled intervals (hourly, daily). It is ideal for non-time-critical tasks like generating daily recommendation emails, weekly reports, or overnight data processing. Real-time serving is needed when users expect immediate predictions.

### Q11. [Hard] What statistical test is commonly used to detect data drift between two distributions?

**Answer:** B

**B is correct.** The Kolmogorov-Smirnov (KS) test measures the maximum distance between two cumulative distribution functions. A low p-value indicates the two samples likely come from different distributions. It is non-parametric and works for any continuous distribution.

### Q12. [Hard] What is the purpose of a health check endpoint (/health) in a deployed ML API?

**Answer:** B

**B is correct.** The /health endpoint is a lightweight check that returns 200 OK if the service is running and the model is loaded. Load balancers use it to route traffic only to healthy instances. Monitoring systems use it to trigger alerts when services go down.

### Q13. [Hard] What is canary deployment for ML models?

**Answer:** B

**B is correct.** Canary deployment routes a small fraction (e.g., 5%) of production traffic to the new model. If the new model performs well (no errors, good predictions, acceptable latency), its traffic share is gradually increased. If problems are detected, traffic is immediately reverted to the old model with minimal user impact.

### Q14. [Hard] Why is pinning exact dependency versions critical for ML deployments?

**Answer:** B

**B is correct.** Models serialized with pickle/joblib encode the exact class structures of the library version used during training. Loading a model saved with scikit-learn 1.3 using scikit-learn 1.5 may fail or produce incorrect predictions due to internal API changes. Pinning versions ensures the deployment environment exactly matches the training environment.

### Q15. [Hard] In an ML CI/CD pipeline, what additional tests are needed compared to standard software CI/CD?

**Answer:** B

**B is correct.** ML CI/CD adds: data validation (schema, distribution, quality checks), model performance gates (accuracy/F1 must exceed thresholds), training reproducibility (same data + code = same model), and model artifact versioning. Standard CI/CD focuses on code correctness; ML CI/CD must also validate data and model quality.

### Q16. [Easy] Where should you load the ML model in a Flask/FastAPI application?

**Answer:** B

**B is correct.** Load the model once at startup and keep it in memory. Loading on every request adds 100-500ms of disk I/O overhead per request, making the API unusable for real-time predictions.

### Q17. [Easy] What file specifies the Docker image build instructions?

**Answer:** B

**B is correct.** A Dockerfile contains instructions for building a Docker image: the base image (FROM), dependency installation (RUN), file copying (COPY), and startup command (CMD). Docker reads this file to create the image.

### Q18. [Medium] What is the purpose of the /health endpoint in a deployed ML API?

**Answer:** B

**B is correct.** The /health endpoint returns a simple 200 OK if the service is operational. Load balancers use it to route traffic to healthy instances. Monitoring systems use it to detect and alert on service outages.

### Q19. [Hard] What is A/B testing in the context of ML model deployment?

**Answer:** B

**B is correct.** A/B testing splits production traffic (e.g., 50/50) between the current model and a new version. By measuring real-world metrics (accuracy, CTR, revenue) on both, you can statistically determine which model is better before fully deploying the new one.

### Q20. [Hard] Why is model reproducibility important in MLOps?

**Answer:** B

**B is correct.** Reproducibility means given the same data, code, hyperparameters, and random seeds, you get the same trained model. This is essential for debugging (reproduce a bug), auditing (prove the model was trained correctly), and regulatory compliance (demonstrate model lineage). MLflow and similar tools enable this.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ml-ops-and-model-deployment/*
