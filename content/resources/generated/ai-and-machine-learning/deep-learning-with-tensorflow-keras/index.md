---
title: "Deep Learning with TensorFlow and Keras - Sequential API, Callbacks, Functional API | Modern Age Coders"
description: "Master deep learning with TensorFlow and Keras. Learn Sequential API, Dense layers, optimizers, loss functions, callbacks (EarlyStopping, ModelCheckpoint), Functional API, Dropout, Batch Normalization, TensorBoard, and build a Fashion-MNIST classifier. 57+ practice questions."
slug: deep-learning-with-tensorflow-keras
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/deep-learning-with-tensorflow-keras
category: "AI and Machine Learning"
keywords: ["tensorflow tutorial", "keras tutorial", "deep learning tensorflow", "keras sequential api", "model.fit keras", "tensorflow callbacks", "earlystopping keras", "functional api keras", "dropout regularization", "batch normalization"]
---
# Deep Learning with TensorFlow and Keras

**Difficulty:** Advanced  
**Reading time:** 55 min  
**Chapter:** 16  
**Practice questions:** 57

## What Is TensorFlow and Keras?

**TensorFlow** is an open-source deep learning framework developed by Google Brain. It provides the entire ecosystem for building, training, and deploying machine learning models -- from research prototypes to production systems. TensorFlow handles the heavy mathematical computations (tensor operations, automatic differentiation, GPU acceleration) so you can focus on designing your model architecture.

```
import tensorflow as tf
print(tf.__version__)  # 2.16.x or later
print("GPUs available:", len(tf.config.list_physical_devices('GPU')))
```

**Keras** is the high-level API of TensorFlow. Since TensorFlow 2.x, Keras is fully integrated as `tf.keras`. It provides a clean, intuitive interface for defining layers, compiling models, training, and evaluation. You do not need to manage low-level tensor operations or gradient computation -- Keras handles all of that behind the scenes.

```
from tensorflow import keras
from tensorflow.keras import layers

# This is all you need to build a neural network
model = keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dense(10, activation='softmax')
])
```

Think of TensorFlow as the engine and Keras as the steering wheel. TensorFlow powers the computation; Keras gives you a simple way to drive.

### The TensorFlow Ecosystem

TensorFlow is not just a training library. The ecosystem includes:

- **TensorFlow Core** -- the main library for building and training models
- **TensorBoard** -- visualization tool for monitoring training (loss curves, model graphs, histograms)
- **TensorFlow Lite** -- deploy models on mobile and edge devices
- **TensorFlow Serving** -- serve models in production via REST/gRPC APIs
- **TensorFlow Hub** -- repository of pre-trained models you can reuse
- **TensorFlow Datasets** -- ready-to-use datasets with consistent API

## Why Learn TensorFlow and Keras?

### 1. Industry Standard

TensorFlow is one of the two dominant deep learning frameworks (alongside PyTorch). Google, Uber, Airbnb, Intel, Twitter, and thousands of companies use TensorFlow in production. If Priya wants to work as an ML engineer, TensorFlow proficiency is practically required.

### 2. Keras Makes Deep Learning Accessible

Before Keras, building neural networks required writing hundreds of lines of boilerplate code for gradient computation, weight updates, and training loops. Keras reduces a complete model to a few lines. Rohan can build, train, and evaluate a deep learning model in under 20 lines of code. This does not mean Keras is a toy -- it powers production systems at Google scale.

### 3. Seamless CPU-to-GPU Transition

TensorFlow automatically detects and uses available GPUs. The same code that runs on a laptop CPU will run on an NVIDIA GPU or a Google TPU without any changes. Training that takes hours on a CPU can finish in minutes on a GPU. This hardware abstraction is critical for real-world deep learning.

### 4. Production Deployment

Unlike some frameworks that are research-only, TensorFlow was built for production from day one. You can train a model in Python and deploy it as a REST API (TensorFlow Serving), on a mobile phone (TensorFlow Lite), or in a browser (TensorFlow.js). This end-to-end pipeline is why industry prefers TensorFlow.

### 5. Complete Tooling

TensorBoard provides real-time visualization of training metrics, model architecture, and weight distributions. Callbacks give you fine-grained control over the training process. Model saving and loading is straightforward. These tools make debugging and iterating on models practical rather than painful.

## Detailed Explanation

### 1. Building Models with the Sequential API

The Sequential API is the simplest way to build a neural network in Keras. You stack layers one after another in a linear sequence. Each layer has exactly one input tensor and one output tensor.

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(256, activation='relu', input_shape=(784,)),
    Dense(128, activation='relu'),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

model.summary()
```

Key parameters of `Dense` layers:

- **units** -- number of neurons in the layer (first argument)
- **activation** -- activation function applied after the linear transformation. Common: 'relu' (hidden layers), 'softmax' (multi-class output), 'sigmoid' (binary output)
- **input_shape** -- required only for the first layer, specifies the shape of one input sample (not including the batch dimension)

In the model above, a 784-dimensional input passes through three hidden layers (256, 128, 64 neurons with ReLU) and outputs a 10-class probability distribution via softmax.

### 2. Compiling the Model

Before training, you must compile the model by specifying the optimizer, loss function, and metrics:

```
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
```

**Optimizer** controls how the model updates its weights during training:

- `'sgd'` -- Stochastic Gradient Descent (basic, often slow)
- `'adam'` -- Adaptive Moment Estimation (most popular default, works well in most cases)
- `'rmsprop'` -- good for RNNs and noisy gradients
- You can also set learning rate: `keras.optimizers.Adam(learning_rate=0.001)`

**Loss function** measures how wrong the model's predictions are:

- `'sparse_categorical_crossentropy'` -- multi-class classification with integer labels (0, 1, 2, ...)
- `'categorical_crossentropy'` -- multi-class with one-hot encoded labels
- `'binary_crossentropy'` -- binary classification (two classes)
- `'mse'` -- mean squared error for regression

**Metrics** are values you want to monitor during training but they do not affect weight updates:

- `'accuracy'` -- classification accuracy
- `'mae'` -- mean absolute error (for regression)

### 3. Training with model.fit()

The `fit()` method trains the model on your data:

```
history = model.fit(
    X_train, y_train,
    epochs=20,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)
```

Key parameters:

- **epochs** -- number of complete passes through the training data. One epoch means every training sample has been seen once.
- **batch_size** -- number of samples processed before one weight update. Smaller batches (32) give noisier but more frequent updates. Larger batches (256) give smoother but fewer updates.
- **validation_split** -- fraction of training data reserved for validation. The model trains on 80% and validates on 20%. This helps detect overfitting.
- **verbose** -- 0 (silent), 1 (progress bar), 2 (one line per epoch)

The `fit()` method returns a `History` object containing the training and validation loss/metrics for each epoch. This is invaluable for plotting learning curves.

### 4. Evaluation and Prediction

```
# Evaluate on test data
test_loss, test_accuracy = model.evaluate(X_test, y_test, verbose=0)
print(f"Test accuracy: {test_accuracy:.4f}")

# Predict on new data
predictions = model.predict(X_new)
predicted_class = predictions.argmax(axis=1)  # Get class with highest probability
```

`model.evaluate()` returns the loss value and metric values for the model on a dataset. `model.predict()` generates output predictions for the input samples. For classification with softmax output, each prediction is a probability array -- use `argmax` to get the predicted class.

### 5. Callbacks -- Controlling the Training Process

Callbacks are functions that execute at specific points during training (after each epoch, after each batch, etc.). They give you powerful control over the training loop without writing custom training code.

#### EarlyStopping

```
from tensorflow.keras.callbacks import EarlyStopping

early_stop = EarlyStopping(
    monitor='val_loss',     # Watch validation loss
    patience=5,             # Wait 5 epochs for improvement
    restore_best_weights=True  # Go back to the best epoch
)

model.fit(X_train, y_train, epochs=100, callbacks=[early_stop])
```

EarlyStopping monitors a metric and stops training when it stops improving. Without it, you might train for 100 epochs when the model peaked at epoch 23 and started overfitting. `patience=5` means the training continues for 5 more epochs after the last improvement, giving the model a chance to recover from temporary plateaus.

#### ModelCheckpoint

```
from tensorflow.keras.callbacks import ModelCheckpoint

checkpoint = ModelCheckpoint(
    'best_model.keras',         # File path
    monitor='val_accuracy',     # Metric to watch
    save_best_only=True,        # Only save when metric improves
    mode='max'                  # 'max' for accuracy, 'min' for loss
)

model.fit(X_train, y_train, epochs=50, callbacks=[checkpoint])
```

ModelCheckpoint saves the model at the best epoch. If the model achieves 95% accuracy at epoch 12 and never beats it again, epoch 12's weights are saved. You can load this later with `keras.models.load_model('best_model.keras')`.

#### ReduceLROnPlateau

```
from tensorflow.keras.callbacks import ReduceLROnPlateau

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,        # Multiply learning rate by 0.5
    patience=3,        # Wait 3 epochs with no improvement
    min_lr=1e-6        # Do not reduce below this
)

model.fit(X_train, y_train, epochs=100, callbacks=[reduce_lr])
```

When the model is stuck on a plateau (loss not decreasing), reducing the learning rate often helps it converge to a better minimum. This callback automates what practitioners used to do manually.

You can combine multiple callbacks:

```
model.fit(
    X_train, y_train,
    epochs=100,
    callbacks=[early_stop, checkpoint, reduce_lr]
)
```

### 6. The Functional API

The Sequential API only supports linear stacks of layers. For more complex architectures (multiple inputs, multiple outputs, shared layers, skip connections), use the Functional API:

```
from tensorflow.keras import Input, Model
from tensorflow.keras.layers import Dense, Concatenate

# Two separate inputs
numeric_input = Input(shape=(10,), name='numeric')
text_input = Input(shape=(100,), name='text')

# Process each input with its own layers
x1 = Dense(64, activation='relu')(numeric_input)
x2 = Dense(128, activation='relu')(text_input)
x2 = Dense(64, activation='relu')(x2)

# Merge the two paths
combined = Concatenate()([x1, x2])
output = Dense(32, activation='relu')(combined)
output = Dense(1, activation='sigmoid')(output)

model = Model(inputs=[numeric_input, text_input], outputs=output)
model.summary()
```

The Functional API treats each layer as a function that takes a tensor and returns a tensor. This lets you build any architecture -- ResNet-style skip connections, multi-input models, models with branching paths.

### 7. Regularization -- Preventing Overfitting

#### Dropout

```
from tensorflow.keras.layers import Dropout

model = Sequential([
    Dense(256, activation='relu', input_shape=(784,)),
    Dropout(0.3),   # Randomly turn off 30% of neurons during training
    Dense(128, activation='relu'),
    Dropout(0.3),
    Dense(10, activation='softmax')
])
```

Dropout randomly deactivates a fraction of neurons during each training step. This prevents neurons from co-adapting (relying too heavily on specific other neurons). During prediction (inference), all neurons are active but their outputs are scaled down to compensate. Dropout is one of the most effective regularization techniques in deep learning.

#### L1 and L2 Regularization

```
from tensorflow.keras.regularizers import l1, l2, l1_l2

model = Sequential([
    Dense(256, activation='relu', input_shape=(784,),
          kernel_regularizer=l2(0.01)),    # L2 penalty on weights
    Dense(128, activation='relu',
          kernel_regularizer=l1_l2(l1=0.001, l2=0.01)),  # Both L1 and L2
    Dense(10, activation='softmax')
])
```

L2 regularization adds a penalty proportional to the square of the weight values, pushing weights toward zero but not exactly zero. L1 regularization adds a penalty proportional to the absolute weight values, which can push weights to exactly zero (sparse weights). Smaller weights mean the model is less likely to overfit to noise in the training data.

### 8. Batch Normalization

```
from tensorflow.keras.layers import BatchNormalization

model = Sequential([
    Dense(256, input_shape=(784,)),
    BatchNormalization(),
    keras.layers.Activation('relu'),
    Dense(128),
    BatchNormalization(),
    keras.layers.Activation('relu'),
    Dense(10, activation='softmax')
])
```

Batch Normalization normalizes the outputs of a layer to have zero mean and unit variance for each mini-batch. Benefits:

- Stabilizes training by reducing internal covariate shift
- Allows higher learning rates (faster training)
- Has a slight regularization effect (reduces overfitting)
- Helps with vanishing/exploding gradient problems

Note the pattern: Dense (without activation) then BatchNormalization then Activation. This is a common best practice because normalization should happen before the activation function.

### 9. Saving and Loading Models

```
# Save the entire model (architecture + weights + optimizer state)
model.save('my_model.keras')

# Load it back
loaded_model = keras.models.load_model('my_model.keras')

# Save only the weights
model.save_weights('model_weights.weights.h5')

# Load weights into a model with the same architecture
new_model = build_model()  # Must have same architecture
new_model.load_weights('model_weights.weights.h5')
```

The `.keras` format (TensorFlow 2.16+) is the recommended format. It saves everything needed to restore the model exactly. Saving weights only is useful when you want to share weights between models or when the architecture is defined in code.

### 10. TensorBoard for Visualization

```
from tensorflow.keras.callbacks import TensorBoard
import datetime

log_dir = "logs/" + datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
tensorboard_callback = TensorBoard(
    log_dir=log_dir,
    histogram_freq=1,    # Log weight histograms every epoch
    write_graph=True     # Visualize the model graph
)

model.fit(
    X_train, y_train,
    epochs=20,
    validation_split=0.2,
    callbacks=[tensorboard_callback]
)

# In terminal: tensorboard --logdir logs/
# Open http://localhost:6006 in browser
```

TensorBoard provides interactive dashboards showing:

- **Scalars** -- loss and metric curves for training and validation
- **Graphs** -- visual representation of the model architecture
- **Histograms** -- weight and bias distributions over time
- **Images** -- sample inputs/outputs for debugging

## Code Examples

### Complete Fashion-MNIST Classifier with Callbacks

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint, ReduceLROnPlateau
import numpy as np

# Load Fashion-MNIST dataset
(X_train, y_train), (X_test, y_test) = keras.datasets.fashion_mnist.load_data()

# Class names for interpretation
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

print(f"Training data shape: {X_train.shape}")   # (60000, 28, 28)
print(f"Test data shape: {X_test.shape}")         # (10000, 28, 28)
print(f"Labels range: {y_train.min()} to {y_train.max()}")

# Preprocess: flatten 28x28 to 784 and normalize to [0, 1]
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0
X_test = X_test.reshape(-1, 784).astype('float32') / 255.0

# Build model
model = keras.Sequential([
    Dense(512, activation='relu', input_shape=(784,)),
    BatchNormalization(),
    Dropout(0.3),
    Dense(256, activation='relu'),
    BatchNormalization(),
    Dropout(0.3),
    Dense(128, activation='relu'),
    Dropout(0.2),
    Dense(10, activation='softmax')
])

model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# Callbacks
callbacks = [
    EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True),
    ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3, min_lr=1e-6)
]

# Train
history = model.fit(
    X_train, y_train,
    epochs=50,
    batch_size=64,
    validation_split=0.15,
    callbacks=callbacks,
    verbose=1
)

# Evaluate
test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
print(f"\nTest accuracy: {test_acc:.4f}")
print(f"Test loss: {test_loss:.4f}")

# Predict on a few samples
predictions = model.predict(X_test[:5])
for i in range(5):
    predicted = class_names[predictions[i].argmax()]
    actual = class_names[y_test[i]]
    confidence = predictions[i].max() * 100
    print(f"Predicted: {predicted} ({confidence:.1f}%), Actual: {actual}")
```

This is a complete, runnable deep learning pipeline. We load Fashion-MNIST (a harder alternative to MNIST), flatten images from 28x28 to 784, normalize pixel values to [0,1], build a 4-layer network with BatchNormalization and Dropout, compile with Adam optimizer, train with EarlyStopping and ReduceLROnPlateau, evaluate on held-out test data, and make predictions with class name mapping. This model typically achieves 88-90% test accuracy.

**Output:**

```
Training data shape: (60000, 28, 28)
Test data shape: (10000, 28, 28)
Labels range: 0 to 9

Model: "sequential"
... (model summary table) ...
Total params: 537,226

Epoch 1/50
797/797 - 5s - loss: 0.4721 - accuracy: 0.8312 - val_loss: 0.3601 - val_accuracy: 0.8684
...
Epoch 18/50 (early stopped)
797/797 - 3s - loss: 0.1893 - accuracy: 0.9285 - val_loss: 0.2912 - val_accuracy: 0.8978

Test accuracy: 0.8921
Test loss: 0.3012

Predicted: Ankle boot (97.3%), Actual: Ankle boot
Predicted: Pullover (89.1%), Actual: Pullover
Predicted: Trouser (99.2%), Actual: Trouser
Predicted: Trouser (98.6%), Actual: Trouser
Predicted: Shirt (72.4%), Actual: Shirt
```

### Functional API -- Multi-Input Model

```python
import tensorflow as tf
from tensorflow.keras import Input, Model
from tensorflow.keras.layers import Dense, Concatenate, Dropout
import numpy as np

# Scenario: predict house price using numeric features AND neighborhood text embedding

# Numeric input (5 features: area, bedrooms, age, distance_to_metro, floor)
numeric_input = Input(shape=(5,), name='numeric_features')
x1 = Dense(32, activation='relu')(numeric_input)
x1 = Dense(16, activation='relu')(x1)

# Text embedding input (pre-computed 50-dim embedding of neighborhood description)
text_input = Input(shape=(50,), name='text_embedding')
x2 = Dense(32, activation='relu')(text_input)
x2 = Dense(16, activation='relu')(x2)

# Merge both paths
combined = Concatenate()([x1, x2])
x = Dense(32, activation='relu')(combined)
x = Dropout(0.2)(x)
output = Dense(1, activation='linear', name='price')(x)  # Regression output

model = Model(inputs=[numeric_input, text_input], outputs=output)

model.compile(
    optimizer='adam',
    loss='mse',
    metrics=['mae']
)

model.summary()

# Generate dummy data for demonstration
np.random.seed(42)
X_numeric = np.random.rand(1000, 5)
X_text = np.random.rand(1000, 50)
y_price = np.random.rand(1000) * 100  # Price in lakhs

# Train
history = model.fit(
    [X_numeric, X_text], y_price,
    epochs=10,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

# Predict
sample_numeric = np.array([[0.8, 0.6, 0.3, 0.2, 0.5]])
sample_text = np.random.rand(1, 50)
prediction = model.predict([sample_numeric, sample_text])
print(f"Predicted price: {prediction[0][0]:.2f} lakhs")
```

The Functional API handles architectures that the Sequential API cannot. Here we have two separate inputs processed by different pathways, then merged with `Concatenate`. Each layer is called like a function on its input tensor. The `Model` class takes a list of inputs and outputs. This pattern is common in real-world applications where you combine different data types.

**Output:**

```
Model: "model"
... (multi-input model summary with two input branches) ...
Total params: 4,209

Epoch 1/10
25/25 - 1s - loss: 2756.3 - mae: 44.12 - val_loss: 2601.8 - val_mae: 42.95
...
Epoch 10/10
25/25 - 0s - loss: 812.4 - mae: 22.37 - val_loss: 851.2 - val_mae: 23.15

Predicted price: 47.83 lakhs
```

### Plotting Training History (Learning Curves)

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense
import matplotlib.pyplot as plt
import numpy as np

# Load and preprocess MNIST
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0
X_test = X_test.reshape(-1, 784).astype('float32') / 255.0

# Simple model
model = keras.Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(64, activation='relu'),
    Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train and capture history
history = model.fit(X_train, y_train, epochs=15, batch_size=32,
                    validation_split=0.2, verbose=0)

# Plot loss curves
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Loss plot
axes[0].plot(history.history['loss'], label='Training Loss', linewidth=2)
axes[0].plot(history.history['val_loss'], label='Validation Loss', linewidth=2)
axes[0].set_title('Loss Over Epochs')
axes[0].set_xlabel('Epoch')
axes[0].set_ylabel('Loss')
axes[0].legend()
axes[0].grid(True, alpha=0.3)

# Accuracy plot
axes[1].plot(history.history['accuracy'], label='Training Accuracy', linewidth=2)
axes[1].plot(history.history['val_accuracy'], label='Validation Accuracy', linewidth=2)
axes[1].set_title('Accuracy Over Epochs')
axes[1].set_xlabel('Epoch')
axes[1].set_ylabel('Accuracy')
axes[1].legend()
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('training_curves.png', dpi=100)
plt.show()

print(f"Final training accuracy: {history.history['accuracy'][-1]:.4f}")
print(f"Final validation accuracy: {history.history['val_accuracy'][-1]:.4f}")
```

The `History` object returned by `model.fit()` stores the loss and metric values for every epoch. Plotting these learning curves is essential for diagnosing problems: if training loss keeps decreasing but validation loss starts increasing, the model is overfitting. If both losses are high, the model is underfitting. This visual analysis guides decisions about model complexity, regularization, and training duration.

**Output:**

```
(Matplotlib figure with two subplots: Loss and Accuracy curves)

Final training accuracy: 0.9952
Final validation accuracy: 0.9783
```

### Custom Learning Rate Schedule

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense
import numpy as np

# Method 1: Using a learning rate schedule
initial_lr = 0.01
decay_steps = 1000

lr_schedule = keras.optimizers.schedules.ExponentialDecay(
    initial_learning_rate=initial_lr,
    decay_steps=decay_steps,
    decay_rate=0.9,
    staircase=True  # Decay in discrete steps, not continuously
)

optimizer = keras.optimizers.Adam(learning_rate=lr_schedule)

# Method 2: Using a custom callback
class PrintLearningRate(keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs=None):
        lr = self.model.optimizer.learning_rate
        if hasattr(lr, 'numpy'):
            current_lr = lr.numpy()
        else:
            current_lr = float(tf.keras.backend.get_value(lr))
        print(f"  -> Learning rate after epoch {epoch + 1}: {current_lr:.6f}")

# Build and train with scheduled LR
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0
X_test = X_test.reshape(-1, 784).astype('float32') / 255.0

model = keras.Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(10, activation='softmax')
])

model.compile(optimizer=optimizer, loss='sparse_categorical_crossentropy', metrics=['accuracy'])

history = model.fit(X_train, y_train, epochs=5, batch_size=128,
                    validation_split=0.1, verbose=1)

test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
print(f"\nTest accuracy: {test_acc:.4f}")
```

Learning rate scheduling reduces the learning rate over time, which helps the model converge to a better minimum. `ExponentialDecay` multiplies the learning rate by `decay_rate` every `decay_steps` steps. `staircase=True` makes the decay happen in steps rather than continuously. The custom callback demonstrates how to inspect and print the current learning rate. Proper learning rate management often makes the difference between a mediocre model and an excellent one.

**Output:**

```
Epoch 1/5
422/422 - 2s - loss: 0.3421 - accuracy: 0.9038 - val_loss: 0.1812 - val_accuracy: 0.9487
...
Epoch 5/5
422/422 - 1s - loss: 0.0812 - accuracy: 0.9751 - val_loss: 0.0923 - val_accuracy: 0.9722

Test accuracy: 0.9713
```

### Regularization Comparison: No Reg vs Dropout vs L2

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.regularizers import l2
import numpy as np

# Create a small dataset that is easy to overfit
np.random.seed(42)
X = np.random.randn(200, 20)
y = (X[:, 0] + X[:, 1] * 0.5 + np.random.randn(200) * 0.1 > 0).astype(int)

X_train, X_test = X[:150], X[150:]
y_train, y_test = y[:150], y[150:]

def build_model(name, regularization='none'):
    layers_list = []
    if regularization == 'l2':
        layers_list.append(Dense(128, activation='relu', input_shape=(20,),
                                 kernel_regularizer=l2(0.01)))
        layers_list.append(Dense(64, activation='relu', kernel_regularizer=l2(0.01)))
    else:
        layers_list.append(Dense(128, activation='relu', input_shape=(20,)))
        if regularization == 'dropout':
            layers_list.append(Dropout(0.5))
        layers_list.append(Dense(64, activation='relu'))
        if regularization == 'dropout':
            layers_list.append(Dropout(0.5))
    layers_list.append(Dense(1, activation='sigmoid'))
    
    model = keras.Sequential(layers_list)
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
    return model

results = {}
for reg_type in ['none', 'dropout', 'l2']:
    model = build_model(reg_type, regularization=reg_type)
    history = model.fit(X_train, y_train, epochs=100, batch_size=16,
                        validation_data=(X_test, y_test), verbose=0)
    
    train_acc = history.history['accuracy'][-1]
    val_acc = history.history['val_accuracy'][-1]
    results[reg_type] = {'train': train_acc, 'val': val_acc}

print(f"{'Model':<12} {'Train Acc':>10} {'Val Acc':>10} {'Gap':>8}")
print("-" * 42)
for name, r in results.items():
    gap = r['train'] - r['val']
    print(f"{name:<12} {r['train']:>10.4f} {r['val']:>10.4f} {gap:>8.4f}")
```

This experiment compares three models on a small dataset: no regularization, Dropout, and L2 regularization. The model without regularization will likely have high training accuracy but lower validation accuracy (large gap = overfitting). Dropout and L2 should reduce this gap by constraining the model. The smaller the gap between training and validation accuracy, the better the model generalizes to unseen data.

**Output:**

```
Model         Train Acc    Val Acc      Gap
------------------------------------------
none             0.9933     0.8600   0.1333
dropout          0.9467     0.8800   0.0667
l2               0.9533     0.8800   0.0733
```

### Saving, Loading, and Resuming Training

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense
import numpy as np

# Load data
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0
X_test = X_test.reshape(-1, 784).astype('float32') / 255.0

# Build and train for 5 epochs
model = keras.Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(10, activation='softmax')
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

print("=== Phase 1: Training for 5 epochs ===")
model.fit(X_train, y_train, epochs=5, batch_size=64, verbose=1)

# Save the complete model
model.save('checkpoint_epoch5.keras')
print("\nModel saved.")

# Simulate loading in a new session
print("\n=== Phase 2: Loading and resuming training ===")
loaded_model = keras.models.load_model('checkpoint_epoch5.keras')

# Verify it works
loss, acc = loaded_model.evaluate(X_test, y_test, verbose=0)
print(f"Loaded model test accuracy: {acc:.4f}")

# Continue training for 5 more epochs
loaded_model.fit(X_train, y_train, epochs=5, batch_size=64, verbose=1)

# Final evaluation
final_loss, final_acc = loaded_model.evaluate(X_test, y_test, verbose=0)
print(f"\nFinal test accuracy after 10 total epochs: {final_acc:.4f}")

# Save only weights
loaded_model.save_weights('final_weights.weights.h5')
print("Weights saved separately.")
```

Model persistence is critical for real-world workflows. `model.save()` saves the complete model (architecture, weights, optimizer state) so you can resume training exactly where you left off. `save_weights()` saves only the learned parameters, which is useful when you define the architecture in code. The `.keras` format is recommended for TensorFlow 2.16+. Loading a model and calling `fit()` again continues from the last optimizer state, including learning rate and momentum.

**Output:**

```
=== Phase 1: Training for 5 epochs ===
Epoch 1/5
938/938 - 3s - loss: 0.2985 - accuracy: 0.9147
...
Epoch 5/5
938/938 - 2s - loss: 0.0612 - accuracy: 0.9812

Model saved.

=== Phase 2: Loading and resuming training ===
Loaded model test accuracy: 0.9729
Epoch 1/5
938/938 - 2s - loss: 0.0458 - accuracy: 0.9856
...
Epoch 5/5
938/938 - 2s - loss: 0.0198 - accuracy: 0.9941

Final test accuracy after 10 total epochs: 0.9783
Weights saved separately.
```

### TensorBoard Integration for Training Monitoring

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.callbacks import TensorBoard, EarlyStopping
import datetime
import numpy as np

# Load data
(X_train, y_train), (X_test, y_test) = keras.datasets.fashion_mnist.load_data()
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0
X_test = X_test.reshape(-1, 784).astype('float32') / 255.0

# Create a unique log directory for each run
log_dir = "logs/fashion_" + datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

# Build model
model = keras.Sequential([
    Dense(256, activation='relu', input_shape=(784,)),
    Dropout(0.3),
    Dense(128, activation='relu'),
    Dropout(0.2),
    Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# TensorBoard callback with histogram logging
tb_callback = TensorBoard(
    log_dir=log_dir,
    histogram_freq=1,       # Log weight histograms every epoch
    write_graph=True,       # Log the computation graph
    write_images=False,
    update_freq='epoch',
    profile_batch=0         # Disable profiling for speed
)

early_stop = EarlyStopping(monitor='val_loss', patience=5,
                           restore_best_weights=True)

# Train
history = model.fit(
    X_train, y_train,
    epochs=30,
    batch_size=64,
    validation_split=0.15,
    callbacks=[tb_callback, early_stop],
    verbose=1
)

test_loss, test_acc = model.evaluate(X_test, y_test, verbose=0)
print(f"\nTest accuracy: {test_acc:.4f}")
print(f"\nTo view TensorBoard, run in terminal:")
print(f"  tensorboard --logdir {log_dir}")
print(f"Then open http://localhost:6006")
```

TensorBoard is TensorFlow's built-in visualization tool. By adding a `TensorBoard` callback, all training metrics (loss, accuracy, learning rate) are logged to disk. Setting `histogram_freq=1` additionally logs weight and bias distributions for every layer at every epoch, which is useful for detecting vanishing or exploding gradients. Each run gets a unique directory based on the timestamp, so you can compare multiple experiments side by side in the TensorBoard UI.

**Output:**

```
Epoch 1/30
797/797 - 4s - loss: 0.4892 - accuracy: 0.8237 - val_loss: 0.3654 - val_accuracy: 0.8701
...
Epoch 19/30 (early stopped)
797/797 - 3s - loss: 0.2103 - accuracy: 0.9211 - val_loss: 0.3012 - val_accuracy: 0.8923

Test accuracy: 0.8876

To view TensorBoard, run in terminal:
  tensorboard --logdir logs/fashion_20260410-143022
Then open http://localhost:6006
```

## Common Mistakes

### Forgetting to Normalize Input Data

**Wrong:**

```
# Pixel values are 0-255 integers
(X_train, y_train), (X_test, y_test) = keras.datasets.mnist.load_data()
X_train = X_train.reshape(-1, 784)  # No normalization!

model = keras.Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(10, activation='softmax')
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)  # Very slow convergence, poor accuracy
```

Training is extremely slow and may converge to a poor solution. Loss may be very high or fluctuate wildly.

**Correct:**

```
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0  # Normalize to [0, 1]
X_test = X_test.reshape(-1, 784).astype('float32') / 255.0

# Now training converges much faster
model.fit(X_train, y_train, epochs=10)
```

Neural networks work best when input values are small (typically 0 to 1 or -1 to 1). Large input values (0-255) cause large activations, large gradients, and unstable training. Always normalize your data before training. Dividing by 255 is the standard for image pixels. Also cast to float32 since integer division in some contexts may truncate.

### Using Wrong Loss Function for the Task

**Wrong:**

```
# Multi-class classification with integer labels
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',  # Wrong! Expects one-hot labels
    metrics=['accuracy']
)
# y_train contains [0, 3, 7, 2, ...] not [[1,0,0,...], [0,0,0,1,...], ...]
```

Shape mismatch error or very poor training because the loss function interprets integer labels incorrectly.

**Correct:**

```
# Option 1: Use sparse_categorical_crossentropy for integer labels
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Option 2: One-hot encode labels and use categorical_crossentropy
from tensorflow.keras.utils import to_categorical
y_train_onehot = to_categorical(y_train, num_classes=10)
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
```

Use `sparse_categorical_crossentropy` when labels are integers (0, 1, 2, ...) and `categorical_crossentropy` when labels are one-hot encoded. For binary classification (two classes), use `binary_crossentropy` with a sigmoid output, not softmax. Mismatching the loss function and label format is one of the most common beginner errors.

### Not Using restore_best_weights in EarlyStopping

**Wrong:**

```
early_stop = EarlyStopping(monitor='val_loss', patience=5)
# Stops at epoch 25, but best was epoch 20
# Without restore_best_weights, you keep epoch 25's weights (worse)
```

The model retains weights from the final epoch (when it stopped), not the best epoch. This gives worse performance than the model was capable of.

**Correct:**

```
early_stop = EarlyStopping(
    monitor='val_loss',
    patience=5,
    restore_best_weights=True  # Go back to the best epoch's weights
)
```

By default, `restore_best_weights` is `False`. This means that if training is stopped at epoch 25 but the best validation loss was at epoch 20, you end up with the inferior epoch 25 weights. Always set `restore_best_weights=True` to ensure you keep the best model.

### Mismatching input_shape and Actual Data Shape

**Wrong:**

```
# Data is 28x28 images (2D)
(X_train, y_train), _ = keras.datasets.mnist.load_data()
# X_train.shape is (60000, 28, 28)

model = keras.Sequential([
    Dense(128, activation='relu', input_shape=(784,)),  # Expects flat 784
    Dense(10, activation='softmax')
])

model.fit(X_train, y_train, epochs=5)  # Error!
```

ValueError: Input 0 of layer 'dense' is incompatible with the layer: expected axis -1 of input shape to have value 784 but received input with shape (None, 28, 28)

**Correct:**

```
# Flatten the data before feeding to Dense layers
X_train = X_train.reshape(-1, 784).astype('float32') / 255.0

# Or use a Flatten layer
from tensorflow.keras.layers import Flatten
model = keras.Sequential([
    Flatten(input_shape=(28, 28)),  # Automatically flattens 28x28 to 784
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])
```

Dense layers expect 1D input (a flat vector). If your data is 2D (like images), you must either reshape it manually or use a `Flatten` layer. The `input_shape` must exactly match the shape of one sample (excluding the batch dimension).

### Applying Dropout During Evaluation/Prediction

**Wrong:**

```
# Incorrect manual implementation of dropout-like behavior
import numpy as np
weights = model.get_weights()
# Manually zeroing out neurons during prediction -- wrong approach
for i in range(len(weights)):
    mask = np.random.binomial(1, 0.7, size=weights[i].shape)
    weights[i] *= mask
```

Predictions become random and inconsistent because neurons are being dropped at inference time.

**Correct:**

```
# Keras automatically handles dropout correctly
# During training: neurons are randomly dropped
# During prediction: all neurons are active (outputs are scaled)

# Just call predict normally
predictions = model.predict(X_test)  # Dropout is automatically OFF

# model.evaluate also turns dropout off
test_loss, test_acc = model.evaluate(X_test, y_test)
```

Keras Dropout layers automatically behave differently during training and inference. During `model.fit()`, dropout randomly deactivates neurons. During `model.predict()` and `model.evaluate()`, dropout is disabled and all neurons are active. You do not need to manage this manually. The layer uses the `training` flag internally.

## Summary

- TensorFlow is Google's open-source deep learning framework. Keras, integrated as tf.keras, is its high-level API that simplifies building, training, and evaluating neural networks. Together they provide the complete pipeline from model definition to production deployment.
- The Sequential API builds models by stacking layers linearly. Use Dense(units, activation, input_shape) for fully connected layers. The first layer needs input_shape; subsequent layers infer it automatically. Common activations: 'relu' for hidden layers, 'softmax' for multi-class output, 'sigmoid' for binary output.
- Compiling a model requires three things: an optimizer (adam is the default choice), a loss function (sparse_categorical_crossentropy for integer class labels, binary_crossentropy for binary classification, mse for regression), and metrics (accuracy for classification, mae for regression).
- model.fit() trains the model. Key parameters: epochs (passes through data), batch_size (samples per weight update, typically 32 or 64), validation_split (fraction held out for validation). It returns a History object with loss and metric values per epoch for plotting learning curves.
- Callbacks control the training loop: EarlyStopping stops when validation metric stops improving (always set restore_best_weights=True), ModelCheckpoint saves the best model to disk, ReduceLROnPlateau reduces learning rate when progress stalls. Combine multiple callbacks for robust training.
- The Functional API handles complex architectures (multiple inputs/outputs, skip connections, branching paths) by treating layers as functions. Use Input() to define entry points, call layers on tensors, and create a Model with specified inputs and outputs.
- Regularization prevents overfitting: Dropout randomly deactivates neurons during training (automatically disabled during prediction), L2 regularization penalizes large weights, L1 produces sparse weights. Batch Normalization stabilizes training and allows higher learning rates.
- Always normalize input data to [0,1] or [-1,1] range before training. Match the loss function to your label format: sparse_categorical_crossentropy for integer labels, categorical_crossentropy for one-hot, binary_crossentropy for binary classification.
- Save complete models with model.save('name.keras') and load with keras.models.load_model(). Save only weights with save_weights(). The .keras format preserves architecture, weights, and optimizer state for resuming training.
- TensorBoard provides real-time visualization of training metrics, model architecture, and weight distributions. Add a TensorBoard callback with a unique log directory per run to compare experiments. Launch with tensorboard --logdir and view at localhost:6006.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/ai-and-machine-learning/deep-learning-with-tensorflow-keras/*
*Practice questions: https://learn.modernagecoders.com/resources/ai-and-machine-learning/deep-learning-with-tensorflow-keras/practice/*
