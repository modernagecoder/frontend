---
title: "Practice: Deep Learning with TensorFlow and Keras"
description: "57 practice problems for Deep Learning with TensorFlow and Keras in AI and Machine Learning"
slug: deep-learning-with-tensorflow-keras-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/deep-learning-with-tensorflow-keras/practice/
category: "AI and Machine Learning"
---
# Practice: Deep Learning with TensorFlow and Keras

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What does the following code output for the shape?

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(64, activation='relu', input_shape=(100,)),
    Dense(10, activation='softmax')
])

print(model.output_shape)
```

*Hint:* The last layer has 10 units, so the output has 10 values per sample.

**Answer:** `(None, 10)`

The output shape is `(None, 10)`. `None` represents the batch dimension (any number of samples). The last Dense layer has 10 units, so each sample produces a 10-dimensional output vector.

### Q2. [Easy] What is the total number of trainable parameters in this model?

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(4, input_shape=(3,)),
    Dense(2)
])
model.summary()
```

*Hint:* Parameters = (inputs x units + biases) for each layer.

**Answer:** Layer 1: (3 x 4) + 4 = 16 parameters. Layer 2: (4 x 2) + 2 = 10 parameters. Total: `26` parameters.

Each Dense layer has weights (input_dim x units) and biases (units). Layer 1: 3 inputs, 4 units = 3*4 + 4 = 16. Layer 2: 4 inputs (from previous layer), 2 units = 4*2 + 2 = 10. Total = 26.

### Q3. [Easy] What activation function should be used in the output layer for a binary classification problem?

```
model = Sequential([
    Dense(64, activation='relu', input_shape=(20,)),
    Dense(1, activation='???')
])
```

*Hint:* Binary classification outputs a probability between 0 and 1.

**Answer:** `sigmoid`

For binary classification, the output layer should have 1 unit with `sigmoid` activation, which outputs a probability between 0 and 1. Use `binary_crossentropy` as the loss. For multi-class, use `softmax` with multiple units.

### Q4. [Easy] What happens when this code runs?

```
model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
print("Compiled successfully")
```

*Hint:* compile() configures the model but does not train it.

**Answer:** `Compiled successfully`

`model.compile()` configures the optimizer, loss function, and metrics. It does not train the model or process any data. It prepares the model for training by setting up the computation graph for gradient computation.

### Q5. [Easy] What will `model.predict(X)` return for a model with `Dense(10, activation='softmax')` as the output layer, given one input sample?

```
import numpy as np
X = np.random.rand(1, 784)
predictions = model.predict(X)
print(predictions.shape)
print(f"Sum of probabilities: {predictions.sum():.2f}")
```

*Hint:* Softmax outputs probabilities that sum to 1.

**Answer:** `(1, 10)`
`Sum of probabilities: 1.00`

Softmax converts the output into a probability distribution over 10 classes. The output shape is (1, 10) because we have 1 sample and 10 classes. The probabilities always sum to 1.00 (or very close due to floating point).

### Q6. [Easy] What loss function should be used here?

```
# Labels are: [0, 3, 7, 2, 9, 1, 4, ...] (integers, not one-hot)
model.compile(optimizer='adam', loss='???', metrics=['accuracy'])
```

*Hint:* Integer labels need a specific variant of categorical crossentropy.

**Answer:** `sparse_categorical_crossentropy`

When labels are integers (0, 1, 2, ...), use `sparse_categorical_crossentropy`. When labels are one-hot encoded ([[1,0,0], [0,1,0], ...]), use `categorical_crossentropy`. The 'sparse' variant handles the conversion internally.

### Q7. [Easy] What is the difference between `model.evaluate()` and `model.predict()`?

*Hint:* One needs true labels, the other does not.

**Answer:** `model.evaluate(X, y)` takes both inputs and true labels, computes the loss and metrics, and returns them. `model.predict(X)` takes only inputs and returns the model's output predictions without computing any loss. Use evaluate to measure performance; use predict to get predictions for new data.

evaluate() requires ground truth labels because it needs to compare predictions against actual values to compute loss and accuracy. predict() just runs the forward pass and returns raw model outputs (probabilities for classification, values for regression).

### Q8. [Medium] What is the output shape after each layer?

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Dropout

model = Sequential([
    Dense(256, activation='relu', input_shape=(784,)),
    Dropout(0.3),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

for layer in model.layers:
    print(f"{layer.name}: {layer.output_shape}")
```

*Hint:* Dropout does not change the shape of the data.

**Answer:** `dense: (None, 256)`
`dropout: (None, 256)`
`dense_1: (None, 128)`
`dense_2: (None, 10)`

Dropout does not change the tensor shape -- it only randomly zeroes out some values during training. The shapes flow as: 784 -> 256 -> 256 (dropout, no shape change) -> 128 -> 10.

### Q9. [Medium] What does `history.history.keys()` return after this training?

```
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

history = model.fit(X_train, y_train, epochs=5, validation_split=0.2)
print(list(history.history.keys()))
```

*Hint:* Training and validation versions of both loss and each metric.

**Answer:** `['loss', 'accuracy', 'val_loss', 'val_accuracy']`

The History object tracks loss and all specified metrics for both training and validation. Since we used `validation_split`, Keras creates validation versions prefixed with 'val_'. Without validation_split, only 'loss' and 'accuracy' would be recorded.

### Q10. [Medium] What happens when EarlyStopping triggers?

```
from tensorflow.keras.callbacks import EarlyStopping

early_stop = EarlyStopping(
    monitor='val_loss',
    patience=3,
    restore_best_weights=True
)

# Suppose val_loss over epochs is:
# Epoch 1: 0.50, Epoch 2: 0.45, Epoch 3: 0.40,
# Epoch 4: 0.42, Epoch 5: 0.43, Epoch 6: 0.44
# At which epoch does training stop?
```

*Hint:* Patience counts epochs without improvement after the best one.

**Answer:** Training stops after `Epoch 6`. The best val_loss was 0.40 at Epoch 3. Patience is 3, meaning it waits 3 more epochs (4, 5, 6) without improvement, then stops. Weights are restored to Epoch 3.

EarlyStopping tracks the best value (0.40 at epoch 3). After epoch 3, the val_loss increases for 3 consecutive epochs (patience=3). At epoch 6, patience is exhausted. With restore_best_weights=True, the model reverts to epoch 3's weights.

### Q11. [Medium] How many parameters does this layer have?

```
from tensorflow.keras.layers import Dense
layer = Dense(64, input_shape=(128,))
layer.build(input_shape=(None, 128))
print(f"Weights shape: {layer.kernel.shape}")
print(f"Bias shape: {layer.bias.shape}")
print(f"Total params: {layer.count_params()}")
```

*Hint:* Weights = input_dim x units, Biases = units.

**Answer:** `Weights shape: (128, 64)`
`Bias shape: (64,)`
`Total params: 8256`

A Dense layer with 128 inputs and 64 outputs has a weight matrix of shape (128, 64) = 8192 parameters, plus 64 bias parameters, totaling 8256. The kernel connects every input to every output neuron.

### Q12. [Medium] What is the purpose of `validation_split` in `model.fit()`? How is it different from using a separate test set?

*Hint:* Validation data is used during training to monitor overfitting but not for weight updates.

**Answer:** validation_split reserves a fraction of the training data (e.g., 20%) as a validation set. The model trains on the remaining 80% and evaluates on the validation set at the end of each epoch. This helps detect overfitting in real-time. It is different from a test set because: (1) validation data is split from training data automatically, (2) it is used to monitor training and trigger callbacks like EarlyStopping, (3) the test set should be completely held out and used only for final evaluation.

The validation set acts as a proxy for unseen data during training. If training accuracy keeps increasing but validation accuracy plateaus or drops, the model is overfitting. The test set must remain untouched until the very end to give an unbiased estimate of real-world performance.

### Q13. [Medium] What does this code print?

```
from tensorflow.keras.layers import Dense, Dropout
import numpy as np

# Dropout behavior check
layer = Dropout(0.5)

# Create input tensor
x = tf.constant([[1.0, 2.0, 3.0, 4.0]])

# During training
out_train = layer(x, training=True)
print(f"Training output has zeros: {(out_train.numpy() == 0).any()}")

# During inference
out_infer = layer(x, training=False)
print(f"Inference output: {out_infer.numpy()}")
```

*Hint:* Dropout zeroes out neurons during training but passes everything through during inference.

**Answer:** `Training output has zeros: True`
`Inference output: [[1. 2. 3. 4.]]`

When `training=True`, Dropout randomly sets some values to 0 and scales the remaining values by 1/(1-rate). When `training=False` (inference/prediction), Dropout does nothing -- all values pass through unchanged.

### Q14. [Medium] Why should you place BatchNormalization between the linear transformation and the activation function (Dense without activation, then BatchNormalization, then Activation)?

*Hint:* Normalization works better on the raw linear output, before the non-linearity is applied.

**Answer:** BatchNormalization normalizes values to zero mean and unit variance. If placed after ReLU, negative values have already been zeroed out, so the normalization operates on a skewed distribution. Placing it before the activation function normalizes the full range of linear outputs, which helps the activation function operate in its most useful range. For ReLU, this means about half the values will be positive (active) and half negative (zeroed), giving better gradient flow.

The pattern Dense(units) -> BatchNormalization() -> Activation('relu') is considered a best practice. Some practitioners argue that post-activation BN works equally well in practice. Both approaches are valid, but pre-activation BN has stronger theoretical justification.

### Q15. [Hard] What is the output?

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, BatchNormalization

model = Sequential([
    Dense(64, input_shape=(100,)),
    BatchNormalization(),
    Dense(10, activation='softmax')
])

total_params = model.count_params()
trainable = sum([layer.count_params() for layer in model.layers
                 if layer.trainable])
non_trainable = 0
for layer in model.layers:
    if isinstance(layer, BatchNormalization):
        non_trainable = sum([
            tf.size(w).numpy() for w in layer.non_trainable_weights
        ])

print(f"BatchNorm has {non_trainable} non-trainable params")
```

*Hint:* BatchNormalization has 4 sets of parameters per feature: gamma, beta (trainable) and moving_mean, moving_variance (non-trainable).

**Answer:** `BatchNorm has 128 non-trainable params`

BatchNormalization with 64 features has: gamma (64, trainable), beta (64, trainable), moving_mean (64, non-trainable), moving_variance (64, non-trainable). The non-trainable parameters (128 total) are running statistics used during inference. They are updated during training via exponential moving average, not by gradient descent.

### Q16. [Hard] Explain the difference between the Sequential API and the Functional API in Keras. When would you be forced to use the Functional API?

*Hint:* Think about model architectures that are not a simple linear stack of layers.

**Answer:** The Sequential API stacks layers in a single linear chain: each layer has exactly one input and one output. The Functional API allows any directed acyclic graph (DAG) of layers. You must use the Functional API when: (1) your model has multiple inputs (e.g., combining numeric data and text), (2) your model has multiple outputs (e.g., predicting both class and bounding box), (3) you need skip/residual connections (like in ResNet), or (4) you need to share layers between different paths. The Functional API creates layers by calling them on tensor objects: `x = Dense(64)(input_tensor)`.

Sequential is simpler to write and read for straightforward architectures. But many real-world models require non-linear topology. ResNet uses skip connections, multi-task models have multiple outputs, and multi-modal models combine different data types. All of these require the Functional API.

### Q17. [Hard] What is the effect of reducing the learning rate here?

```
from tensorflow.keras.callbacks import ReduceLROnPlateau

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=2,
    min_lr=1e-6
)

# Suppose initial learning rate = 0.001
# val_loss: E1=0.5, E2=0.4, E3=0.41, E4=0.42, E5=0.38, E6=0.39, E7=0.40
# What is the learning rate at each epoch?
```

*Hint:* After patience epochs without improvement, LR is multiplied by factor.

**Answer:** E1-E2: lr=0.001 (improving). E3-E4: no improvement for 2 epochs, lr reduced to 0.0005 after E4. E5: lr=0.0005 (improves to 0.38). E6-E7: no improvement for 2 epochs, lr reduced to 0.00025 after E7.

The callback tracks the best val_loss. When no improvement happens for `patience` (2) consecutive epochs, it multiplies the learning rate by `factor` (0.5). At E4, after 2 epochs without beating 0.4, lr becomes 0.001*0.5=0.0005. After E7, after 2 epochs without beating 0.38, lr becomes 0.0005*0.5=0.00025.

### Q18. [Hard] What is internal covariate shift, and how does Batch Normalization address it?

*Hint:* The distribution of inputs to each layer changes as the preceding layers' weights change during training.

**Answer:** Internal covariate shift is the phenomenon where the distribution of inputs to a hidden layer changes during training because the preceding layer's weights are being updated. Layer 3 expects inputs with a certain distribution, but after layer 2's weights change, the distribution shifts. Batch Normalization addresses this by normalizing the inputs to each layer to have zero mean and unit variance (computed per mini-batch). This stabilizes the input distribution, allowing each layer to learn more effectively without constantly adapting to shifting inputs.

Without BatchNorm, a layer must simultaneously learn its task AND adapt to its changing input distribution. BatchNorm decouples these by fixing the input distribution. The learnable parameters gamma and beta allow the layer to shift and scale the normalized values if needed, so expressiveness is not lost.

## Mixed Questions

### Q1. [Easy] What does this code do?

```
model.save('my_model.keras')
loaded = keras.models.load_model('my_model.keras')
print(type(loaded))
```

*Hint:* save() stores the entire model; load_model() restores it.

**Answer:** `` (or similar Keras model class)

model.save() serializes the architecture, weights, and optimizer state. load_model() reconstructs the exact same model. The returned object is a Keras model instance that can be used for prediction, evaluation, or continued training.

### Q2. [Easy] What is the predicted class?

```
import numpy as np
predictions = np.array([[0.05, 0.02, 0.85, 0.03, 0.05]])
predicted_class = predictions.argmax(axis=1)
print(predicted_class)
```

*Hint:* argmax returns the index of the maximum value.

**Answer:** `[2]`

The highest probability is 0.85 at index 2. `argmax(axis=1)` returns the index of the maximum value along each row. The predicted class is 2.

### Q3. [Easy] What normalization does this perform?

```
import numpy as np
X = np.array([0, 51, 102, 153, 204, 255])
X_normalized = X.astype('float32') / 255.0
print(X_normalized)
```

*Hint:* Dividing by 255 maps [0, 255] to [0, 1].

**Answer:** `[0.  0.2  0.4  0.6  0.8  1. ]`

Dividing by 255 maps the range [0, 255] to [0.0, 1.0]. This is the standard normalization for image pixel values before feeding them to a neural network.

### Q4. [Easy] How many epochs will this training run if there is no early stopping?

```
model.fit(X_train, y_train, epochs=50, batch_size=32)
```

*Hint:* epochs controls the number of complete passes through the data.

**Answer:** `50` epochs

Without any callbacks, the model trains for exactly the number of epochs specified. Each epoch is one complete pass through the entire training dataset.

### Q5. [Easy] What is the role of the optimizer in model.compile()?

*Hint:* It determines how weights are updated during training.

**Answer:** The optimizer controls how the model's weights are updated based on the computed gradients during training. It determines the update rule (e.g., SGD uses basic gradient descent, Adam uses adaptive learning rates with momentum). The optimizer adjusts weights to minimize the loss function. Different optimizers converge at different speeds and may reach different solutions.

Common optimizers: SGD (simple, needs tuning), Adam (adaptive, works well by default), RMSprop (good for RNNs). Adam is the most common starting choice because it adapts the learning rate for each parameter individually.

### Q6. [Medium] What will the model output shape be?

```
from tensorflow.keras import Input, Model
from tensorflow.keras.layers import Dense, Concatenate

input_a = Input(shape=(10,))
input_b = Input(shape=(20,))

x = Concatenate()([input_a, input_b])
x = Dense(32, activation='relu')(x)
output = Dense(5, activation='softmax')(x)

model = Model(inputs=[input_a, input_b], outputs=output)
print(model.output_shape)
```

*Hint:* Concatenating (10,) and (20,) gives (30,), then Dense layers transform it.

**Answer:** `(None, 5)`

input_a (10,) and input_b (20,) are concatenated to (30,). Then Dense(32) maps to (None, 32). Finally Dense(5) maps to (None, 5). The output shape is (None, 5), where None is the batch dimension.

### Q7. [Medium] What happens here?

```
callbacks = [
    EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True),
    ModelCheckpoint('best.keras', monitor='val_accuracy', save_best_only=True, mode='max'),
    ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3)
]

model.fit(X_train, y_train, epochs=100, validation_split=0.2, callbacks=callbacks)
```

*Hint:* All three callbacks can work together during training.

**Answer:** Three callbacks work simultaneously: (1) EarlyStopping monitors val_loss and stops training if it does not improve for 5 epochs, restoring the best weights. (2) ModelCheckpoint saves the model to 'best.keras' whenever val_accuracy improves (saves only the best). (3) ReduceLROnPlateau reduces the learning rate by half if val_loss does not improve for 3 epochs. Training runs up to 100 epochs but will likely stop early.

Callbacks are not mutually exclusive. They each monitor their specified metric independently. ReduceLROnPlateau may trigger multiple times before EarlyStopping stops training. ModelCheckpoint saves independently based on val_accuracy, even while EarlyStopping watches val_loss.

### Q8. [Medium] What is the total number of parameters?

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Dropout

model = Sequential([
    Dense(128, activation='relu', input_shape=(50,)),
    Dropout(0.5),
    Dense(64, activation='relu'),
    Dense(1, activation='sigmoid')
])

print(model.count_params())
```

*Hint:* Dropout has zero parameters.

**Answer:** `14785`

Layer 1: (50 * 128) + 128 = 6528. Dropout: 0 parameters. Layer 2: (128 * 64) + 64 = 8256. Layer 3: (64 * 1) + 1 = 65. Total: 6528 + 0 + 8256 + 65 = 14849. (Note: exact total depends on parameter counting which is 6528 + 8256 + 65 = 14849.)

### Q9. [Medium] Why is Adam the most commonly used optimizer? What advantages does it have over plain SGD?

*Hint:* Adam combines momentum and adaptive learning rates.

**Answer:** Adam (Adaptive Moment Estimation) combines two ideas: (1) momentum -- it maintains a running average of past gradients to smooth updates and overcome local minima, and (2) adaptive learning rates -- it maintains per-parameter learning rates that adapt based on the history of gradients. This means parameters that receive large gradients get smaller learning rates, and vice versa. Compared to plain SGD, Adam converges faster, requires less learning rate tuning, and handles sparse gradients well. SGD can outperform Adam with careful tuning but Adam works well out of the box.

Adam tracks the first moment (mean) and second moment (uncentered variance) of gradients for each parameter. The formula: theta = theta - lr * m_hat / (sqrt(v_hat) + epsilon). This adaptive behavior is why Adam works well with default lr=0.001 for most problems.

### Q10. [Medium] What happens if you call model.fit() twice?

```
model.fit(X_train, y_train, epochs=5)
model.fit(X_train, y_train, epochs=5)
print("Done")
```

*Hint:* fit() continues from the current state of the model.

**Answer:** The model trains for 5 epochs, then trains for 5 more epochs starting from where the first fit() ended. The total effect is similar to training for 10 epochs. The optimizer state (momentum, etc.) carries over between calls. Output: `Done`

Calling fit() multiple times does not reset the model. Weights and optimizer state persist. This is useful for training in stages (e.g., with different learning rates or different data subsets). Each fit() call shows epoch numbers starting from 1, but the model state continues from the previous call.

### Q11. [Medium] What is wrong with this code?

```
model = Sequential([
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')
model.fit(X_train, y_train, epochs=5)
```

*Hint:* The first layer is missing something.

**Answer:** The first Dense layer is missing `input_shape`. Without it, Keras does not know the input dimensions. This will raise an error when `fit()` is called if the model has not been built yet. Fix: `Dense(128, activation='relu', input_shape=(784,))` (replace 784 with your actual input dimension).

In modern TensorFlow (2.x), Keras can sometimes infer the input shape from the data when fit() is called, but it is best practice to always specify input_shape in the first layer. This catches shape mismatches early and allows model.summary() to work before training.

### Q12. [Hard] Explain L1 vs L2 regularization. When would you prefer L1 over L2?

*Hint:* L1 drives weights to exactly zero; L2 drives weights toward zero but not exactly.

**Answer:** L1 regularization adds the sum of absolute weight values to the loss. It drives many weights to exactly zero, producing sparse models (feature selection). L2 regularization adds the sum of squared weight values to the loss. It drives weights toward zero but rarely exactly zero, producing small but non-zero weights. Prefer L1 when you suspect many features are irrelevant and want automatic feature selection. Prefer L2 when all features are potentially useful but you want to prevent any single weight from becoming too large. L1_L2 combines both.

Mathematically: L1 penalty = lambda * sum(|w|), L2 penalty = lambda * sum(w^2). The L1 gradient is constant (sign of w), pushing small weights to zero. The L2 gradient is proportional to w, so smaller weights get smaller pushes and never reach exactly zero. In practice, L2 is more commonly used in deep learning.

### Q13. [Hard] How many parameters does this Functional API model have?

```
from tensorflow.keras import Input, Model
from tensorflow.keras.layers import Dense, Concatenate

input_a = Input(shape=(5,))
input_b = Input(shape=(3,))

x1 = Dense(4, activation='relu')(input_a)
x2 = Dense(4, activation='relu')(input_b)

merged = Concatenate()([x1, x2])
output = Dense(1, activation='sigmoid')(merged)

model = Model(inputs=[input_a, input_b], outputs=output)
print(model.count_params())
```

*Hint:* Compute parameters for each Dense layer separately. Concatenate has no parameters.

**Answer:** `45`

Dense layer for input_a: (5*4)+4 = 24. Dense layer for input_b: (3*4)+4 = 16. Concatenate: 0 parameters. Output Dense: (8*1)+1 = 9 (input is 4+4=8 after concatenation). Total: 24 + 16 + 0 + 9 = 49.

### Q14. [Hard] Arjun trained a model with Dropout(0.5) and noticed that training accuracy was 78% but test accuracy was 85%. How is this possible? Is this a problem?

*Hint:* Dropout is active during training but disabled during inference.

**Answer:** This is expected behavior with Dropout, not a bug. During training, 50% of neurons are randomly deactivated, making the model work with only half its capacity. This naturally lowers training accuracy. During testing/prediction, all neurons are active (dropout is disabled), so the model uses its full capacity and achieves higher accuracy. This gap is normal when using high dropout rates. It is not a problem -- it actually shows that dropout is effectively preventing overfitting.

The training accuracy with dropout is measured while neurons are being dropped, so it is an underestimate of the model's true capability. The test accuracy reflects the full model. If training accuracy were much higher than test accuracy, that would indicate overfitting. The reverse (test > train) with dropout is healthy.

### Q15. [Hard] What will happen when this code runs?

```
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

# Model expects 784 inputs
model = Sequential([
    Dense(128, activation='relu', input_shape=(784,)),
    Dense(10, activation='softmax')
])
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')

# But data has shape (1000, 28, 28) -- not flattened
import numpy as np
X = np.random.rand(1000, 28, 28)
y = np.random.randint(0, 10, 1000)

model.fit(X, y, epochs=1)
```

*Hint:* The model expects flat (784,) input but receives (28, 28) shaped data.

**Answer:** This raises a `ValueError`: Input 0 of layer 'dense' is incompatible with the layer: expected axis -1 of input shape to have value 784 but received input with shape (None, 28, 28).

The Dense layer expects input_shape=(784,) but receives (28, 28). The shapes do not match. You must either reshape the data to (1000, 784) or use a Flatten layer as the first layer in the model.

### Q16. [Hard] What is the difference between batch_size=1, batch_size=32, and batch_size=len(X_train) during training? How does batch size affect training?

*Hint:* Think about the frequency of weight updates and the quality of gradient estimates.

**Answer:** batch_size=1 (Stochastic Gradient Descent): updates weights after every single sample. Very noisy gradients, can escape local minima, very slow per epoch (many updates). batch_size=32 (Mini-batch): updates after every 32 samples. Good balance between noise and efficiency. The standard choice. batch_size=len(X_train) (Full Batch): updates once per epoch using the entire dataset. Very accurate gradients but computationally expensive, may get stuck in sharp minima, and requires the entire dataset to fit in memory. Smaller batches generalize better but train slower; larger batches converge faster but may generalize worse.

Mini-batch (32-256) is the practical choice. It provides enough gradient noise to escape poor local minima while being efficient enough for GPU parallelism. Very large batches often require learning rate warmup to avoid divergence in early training.

## Multiple Choice Questions

### Q1. [Easy] Which library is the high-level API built into TensorFlow for building neural networks?

**Answer:** B

**B is correct.** Keras is the high-level API integrated into TensorFlow as `tf.keras`. It provides a simple interface for defining, training, and evaluating neural networks.

### Q2. [Easy] What does model.fit() do in Keras?

**Answer:** C

**C is correct.** `model.fit()` trains the model by performing forward passes, computing loss, calculating gradients, and updating weights for the specified number of epochs.

### Q3. [Easy] Which activation function is most commonly used for the hidden layers of a deep neural network?

**Answer:** C

**C is correct.** ReLU (Rectified Linear Unit) is the standard activation for hidden layers. It is computationally efficient and helps with the vanishing gradient problem. Sigmoid is used for binary output, softmax for multi-class output.

### Q4. [Easy] What does the 'epochs' parameter in model.fit() control?

**Answer:** C

**C is correct.** One epoch means the model has seen every training sample once. Training for 10 epochs means 10 complete passes through the entire training dataset.

### Q5. [Easy] Which loss function is correct for multi-class classification with integer labels?

**Answer:** C

**C is correct.** `sparse_categorical_crossentropy` is used when labels are integers (0, 1, 2, ...). `categorical_crossentropy` requires one-hot encoded labels. `binary_crossentropy` is for two-class problems.

### Q6. [Easy] What does Dropout(0.3) do during training?

**Answer:** B

**B is correct.** Dropout randomly deactivates 30% of the neurons in that layer during each training step. This prevents co-adaptation and reduces overfitting. During prediction, all neurons are active.

### Q7. [Medium] What does EarlyStopping with patience=5 do?

**Answer:** B

**B is correct.** EarlyStopping monitors a metric (e.g., val_loss). If the metric does not improve for 5 consecutive epochs (patience=5), training is stopped. This prevents overfitting by stopping at the right time.

### Q8. [Medium] In model.compile(), what role does the loss function play?

**Answer:** B

**B is correct.** The loss function quantifies the error between predictions and true labels. The optimizer uses the gradient of this loss to update the model's weights. Lower loss means better predictions.

### Q9. [Medium] What is the purpose of validation_split=0.2 in model.fit()?

**Answer:** B

**B is correct.** validation_split=0.2 holds out 20% of the training data as a validation set. The model trains on the remaining 80% and evaluates on the 20% at the end of each epoch. This helps detect overfitting.

### Q10. [Medium] Which of the following is NOT a valid Keras callback?

**Answer:** D

**D is correct.** WeightDecay is not a Keras callback. It is a concept related to regularization (and can be set as an optimizer parameter). EarlyStopping, ModelCheckpoint, and ReduceLROnPlateau are all built-in Keras callbacks.

### Q11. [Medium] What does the Functional API allow that the Sequential API does not?

**Answer:** C

**C is correct.** The Functional API supports models with multiple inputs, multiple outputs, shared layers, and skip connections. The Sequential API only supports a linear stack of layers. Both support Dense layers, backpropagation, and all optimizers.

### Q12. [Medium] What does Batch Normalization do?

**Answer:** B

**B is correct.** Batch Normalization normalizes the output of each layer to have approximately zero mean and unit variance, computed per mini-batch. This stabilizes training, allows higher learning rates, and has a mild regularization effect.

### Q13. [Hard] If a Dense layer has 256 inputs and 128 outputs, how many total parameters does it have (including biases)?

**Answer:** B

**B is correct.** Weights: 256 x 128 = 32768. Biases: 128. Total: 32768 + 128 = 32896. Each input connects to each output (weights), and each output neuron has one bias.

### Q14. [Hard] Which model saving format is recommended in TensorFlow 2.16+?

**Answer:** C

**C is correct.** The `.keras` format is the recommended format in TensorFlow 2.16+. It saves the complete model (architecture, weights, optimizer state) in a single file. The older `.h5` format is still supported but not recommended for new code.

### Q15. [Hard] What happens to Dropout during model.predict()?

**Answer:** B

**B is correct.** Dropout is only active during training (model.fit()). During prediction (model.predict()) and evaluation (model.evaluate()), dropout is automatically disabled. All neurons contribute to the output, and their outputs are scaled appropriately.

### Q16. [Hard] ReduceLROnPlateau with factor=0.5 and patience=3 starts with lr=0.01. After 3 epochs of no improvement, what is the new learning rate?

**Answer:** B

**B is correct.** The learning rate is multiplied by the factor: 0.01 x 0.5 = 0.005. After another 3 epochs without improvement, it would become 0.005 x 0.5 = 0.0025, and so on until it reaches min_lr.

### Q17. [Hard] In the Functional API, what does Concatenate()([x1, x2]) do?

**Answer:** C

**C is correct.** `Concatenate()` joins tensors along the last axis (by default). If x1 has shape (None, 32) and x2 has shape (None, 64), the result has shape (None, 96). Use `Add()` for element-wise addition (requires same shapes).

### Q18. [Easy] What does model.summary() display in Keras?

**Answer:** B

**B is correct.** `model.summary()` prints a table showing each layer's name, output shape, and number of parameters. It also shows the total trainable and non-trainable parameter counts.

### Q19. [Medium] What is the purpose of the learning rate in an optimizer?

**Answer:** B

**B is correct.** The learning rate controls how much the weights are adjusted in response to the computed gradient. Too high = unstable training (divergence). Too low = very slow convergence. Typical default for Adam: 0.001.

### Q20. [Medium] What does verbose=0 mean in model.fit()?

**Answer:** C

**C is correct.** verbose=0 suppresses all output during training. verbose=1 shows a progress bar per epoch. verbose=2 shows one line per epoch. Use verbose=0 when running experiments programmatically or in loops.

### Q21. [Hard] What happens if you compile a model with 'mse' loss but the task is multi-class classification?

**Answer:** C

**C is correct.** MSE (mean squared error) is designed for regression, not classification. Using it for multi-class classification will not crash, but the model will converge slowly and achieve worse accuracy than with the appropriate loss (categorical or sparse categorical crossentropy).

### Q22. [Easy] What activation should the output layer use for a regression task?

**Answer:** D

**D is correct.** Regression outputs can be any real number, so no activation (linear) is used. Softmax constrains output to probabilities (classification). Sigmoid constrains to [0,1] (binary classification). ReLU constrains to non-negative values.

### Q23. [Hard] How does ExponentialDecay learning rate schedule work?

**Answer:** B

**B is correct.** ExponentialDecay reduces the learning rate by multiplying it by `decay_rate` every `decay_steps` training steps. This gradually decreases the learning rate, allowing the model to make large updates initially and fine-grained adjustments later.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/deep-learning-with-tensorflow-keras/*
