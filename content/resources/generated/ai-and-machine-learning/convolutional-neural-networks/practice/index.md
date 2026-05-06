---
title: "Practice: Convolutional Neural Networks (CNN) for Computer Vision"
description: "55 practice problems for Convolutional Neural Networks (CNN) for Computer Vision in AI and Machine Learning"
slug: convolutional-neural-networks-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/convolutional-neural-networks/practice
category: "AI and Machine Learning"
---
# Practice: Convolutional Neural Networks (CNN) for Computer Vision

**Total questions:** 55

## Topic-Specific Questions

### Q1. [Easy] What is the output shape after this Conv2D layer?

```
Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1))
```

*Hint:* With padding='valid' (default): output = input - filter + 1.

**Answer:** `(None, 26, 26, 32)`

Input is 28x28x1. With a 3x3 filter and no padding: (28-3+1) = 26. So height=26, width=26. 32 filters produce 32 feature maps. Output: (None, 26, 26, 32). None is the batch dimension.

### Q2. [Easy] What is the output shape after MaxPooling2D?

```
# Input shape: (None, 26, 26, 32)
MaxPooling2D((2, 2))
```

*Hint:* MaxPooling2D(2,2) halves both spatial dimensions.

**Answer:** `(None, 13, 13, 32)`

MaxPooling2D with pool_size=(2,2) divides height and width by 2: 26/2 = 13. The number of channels (32) remains unchanged. Pooling only reduces spatial dimensions.

### Q3. [Easy] How many parameters does a Conv2D(16, (3, 3), input_shape=(28, 28, 1)) layer have?

*Hint:* Parameters = (filter_height x filter_width x input_channels + 1) x num_filters.

**Answer:** `160` parameters

Each filter has 3x3x1 = 9 weights + 1 bias = 10 parameters. With 16 filters: 10 x 16 = 160. The formula is (kernel_h x kernel_w x input_channels + 1) x filters.

### Q4. [Easy] Why do CNNs use convolution instead of Dense layers for image data?

*Hint:* Think about parameter sharing and spatial structure.

**Answer:** CNNs use convolution because: (1) Parameter sharing -- a 3x3 filter has only 9 weights but detects the same pattern anywhere in the image, while a Dense layer needs a separate weight for every pixel-to-neuron connection. (2) Spatial locality -- nearby pixels are related; convolution exploits this by looking at local neighborhoods. (3) Translation invariance -- the same filter works regardless of where the pattern appears. A Dense network on a 224x224 image would need millions of parameters per layer and could not generalize across positions.

A Dense layer connecting a 224x224x3 image to 1024 neurons would need 150M+ parameters. A Conv2D(32, (3,3)) layer needs only 896 parameters (3x3x3 + 1) x 32 but can detect patterns anywhere in the image.

### Q5. [Easy] What is the output shape with `padding='same'`?

```
Conv2D(64, (3, 3), activation='relu', padding='same', input_shape=(32, 32, 3))
```

*Hint:* 'same' padding preserves the spatial dimensions.

**Answer:** `(None, 32, 32, 64)`

With `padding='same'`, zeros are added around the border so that the output spatial dimensions equal the input. Height and width remain 32. The depth changes to 64 (number of filters).

### Q6. [Easy] What does max pooling do, and why is it useful?

*Hint:* It takes the maximum value in each window, reducing the feature map size.

**Answer:** Max pooling selects the maximum value from each pooling window (typically 2x2). It reduces the spatial dimensions by half, which: (1) decreases computation and memory, (2) provides a degree of translation invariance (the exact position of a feature within the window does not matter, only that it exists), and (3) forces the network to learn more abstract representations. The depth (number of channels) is not changed by pooling.

In a 2x2 max pooling window of [[1, 3], [2, 7]], the output is 7 (the maximum). This is done for every 2x2 block across the feature map, halving the spatial dimensions.

### Q7. [Medium] What is the output shape after Conv2D(32, (3,3)) on a 28x28x1 input?

*Hint:* Default padding is 'valid'. Output = (input - filter + 1).

**Answer:** `(None, 26, 26, 32)`

With padding='valid' (default): output_height = 28 - 3 + 1 = 26. output_width = 28 - 3 + 1 = 26. Number of feature maps = 32 (number of filters). Final shape: (None, 26, 26, 32).

### Q8. [Medium] What is the output shape with stride=2?

```
Conv2D(32, (3, 3), strides=(2, 2), padding='same', input_shape=(28, 28, 1))
```

*Hint:* With same padding and stride 2, the output is input / stride.

**Answer:** `(None, 14, 14, 32)`

With `padding='same'` and `strides=(2, 2)`: output = ceil(input / stride) = ceil(28/2) = 14. The spatial dimensions are halved. This is an alternative to using pooling for downsampling.

### Q9. [Medium] How many parameters does Conv2D(64, (3, 3), input_shape=(32, 32, 3)) have?

*Hint:* Input has 3 channels. Each filter is 3x3x3.

**Answer:** `1,792` parameters

Each filter is 3x3x3 (height x width x input_channels) = 27 weights + 1 bias = 28 parameters per filter. With 64 filters: 28 x 64 = 1,792. The input depth (3 channels for RGB) affects the filter depth.

### Q10. [Medium] What was the key innovation of ResNet that allowed training networks with 100+ layers?

*Hint:* It adds the input to the output of a block.

**Answer:** ResNet introduced **residual connections** (skip connections). Instead of learning the full mapping F(x), each block learns the residual F(x) + x. The input x is added to the block's output via a shortcut path. This solves the vanishing gradient problem in very deep networks because gradients can flow directly through the skip connections, bypassing many layers. Without skip connections, networks deeper than ~20 layers often performed worse than shallower ones.

In a regular network, gradients must flow through every layer during backpropagation. In deep networks, gradients become vanishingly small after many multiplications. Skip connections provide a highway for gradients, ensuring that even the earliest layers receive meaningful gradient updates.

### Q11. [Medium] Explain the two phases of transfer learning: (1) training the classification head, and (2) fine-tuning.

*Hint:* Phase 1 freezes pre-trained layers. Phase 2 unfreezes some and uses a low learning rate.

**Answer:** Phase 1: Load a pre-trained model (e.g., VGG16) without its top classification layers. Freeze all pre-trained layers (trainable=False). Add new Dense layers for your task. Train only the new layers with a normal learning rate. This teaches the new layers to use the pre-trained features. Phase 2 (optional): Unfreeze the top few pre-trained layers. Recompile with a very low learning rate (e.g., 1e-5). Train again. This fine-tunes the pre-trained features to better match your specific dataset while preserving most of the learned representations.

Phase 1 is fast because few parameters are being trained. Phase 2 is delicate -- a high learning rate would destroy the pre-trained features. Only unfreezing the top layers (not all) preserves general low-level features while adapting high-level features.

### Q12. [Medium] What does `include_top=False` do?

```
base = VGG16(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
print(base.output_shape)
```

*Hint:* include_top=False removes the final classification Dense layers.

**Answer:** `(None, 7, 7, 512)`

`include_top=False` removes the top Dense layers (Flatten + Dense(4096) + Dense(4096) + Dense(1000)) and keeps only the convolutional base. The output is a 7x7x512 feature map (for 224x224 input), which you connect to your own classification layers.

### Q13. [Hard] Calculate the total output dimensions through this CNN:

```
model = Sequential([
    Conv2D(32, (5, 5), input_shape=(64, 64, 3)),  # valid padding
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3)),
    MaxPooling2D((2, 2)),
    Flatten()
])
print(model.output_shape)
```

*Hint:* Apply the formula (input - filter + 1) for each Conv2D, then // 2 for each MaxPool.

**Answer:** `(None, 7744)`

Step by step: Input 64x64x3. Conv2D(32, 5x5): (64-5+1) = 60, so 60x60x32. MaxPool(2,2): 60/2 = 30, so 30x30x32. Conv2D(64, 3x3): (30-3+1) = 28, so 28x28x64. MaxPool(2,2): 28/2 = 14, so 14x14x64. Flatten: 14 x 14 x 64 = 12544. (Note: exact calculation depends on integer division.)

### Q14. [Hard] Why do CNNs use multiple stacked 3x3 convolutions instead of a single large filter like 7x7?

*Hint:* VGG16 showed this design principle. Think about receptive field, parameters, and non-linearity.

**Answer:** Two stacked 3x3 convolutions have the same receptive field as one 5x5 convolution (and three 3x3s equal one 7x7), but with fewer parameters and more non-linearity. Parameters: one 7x7 filter on C channels = 49C weights. Three 3x3 filters = 3 x 9C = 27C weights (45% fewer). Non-linearity: each 3x3 conv is followed by ReLU, so three stacked convolutions apply three non-linear transformations, making the feature extraction more expressive. This was VGG16's key design insight.

Receptive field of two 3x3 convolutions: the first sees a 3x3 area, and the second sees 3x3 of those outputs, effectively covering a 5x5 area of the original input. Three 3x3s cover 7x7. The combination of fewer parameters and more non-linearity consistently outperforms single large filters.

### Q15. [Hard] What is the difference between GlobalAveragePooling2D and Flatten? When should you use each?

*Hint:* One averages each feature map to a single value; the other concatenates all values.

**Answer:** Flatten converts a (7, 7, 512) feature map to a (25088,) vector by concatenating all values. GlobalAveragePooling2D averages each feature map to a single value, converting (7, 7, 512) to (512,). Use GlobalAveragePooling2D for transfer learning -- it reduces parameters by ~50x, provides spatial invariance, and acts as a regularizer. Use Flatten when training from scratch on smaller models where you want the Dense layers to learn spatial relationships. For transfer learning, GlobalAveragePooling2D is almost always the better choice.

With Flatten after VGG16: Dense(256) needs 25088 x 256 = 6.4M parameters. With GlobalAveragePooling2D: Dense(256) needs only 512 x 256 = 131K parameters. The massive reduction prevents overfitting, especially when your dataset is small.

### Q16. [Hard] What is the receptive field of the second Conv2D in this stack?

```
Conv2D(32, (3, 3), padding='same')  # Layer 1
Conv2D(32, (3, 3), padding='same')  # Layer 2
```

*Hint:* The second layer sees a 3x3 window of the first layer's output. Each of those was computed from a 3x3 window of the input.

**Answer:** The receptive field of Layer 2 is `5x5` with respect to the original input.

Layer 1 sees a 3x3 area of the input. Layer 2 sees a 3x3 area of Layer 1's output. Each pixel in Layer 1's output corresponds to a 3x3 area of the input. So Layer 2 effectively sees (3-1) + (3-1) + 1 = 5 pixels in each dimension. Two stacked 3x3 filters have the same effective receptive field as a single 5x5 filter.

### Q17. [Hard] Kavitha has only 200 training images for a 10-class classification problem. How should she approach this with CNNs?

*Hint:* Training a CNN from scratch on 200 images will massively overfit.

**Answer:** With only 200 images (20 per class), Kavitha should: (1) Use transfer learning with a pre-trained model like ResNet50 or MobileNetV2. The pre-trained model already knows general visual features. (2) Freeze the entire pre-trained base and only train a small classification head (GlobalAveragePooling2D -> Dense). (3) Apply aggressive data augmentation (rotation, flip, zoom, shift) to artificially increase the effective training set size. (4) Use strong regularization (Dropout 0.5+). (5) If validation accuracy is good enough, optionally fine-tune the top 1-2 layers with a very low learning rate. Training from scratch would hopelessly overfit with so few images.

Transfer learning is specifically designed for this scenario. The pre-trained model provides 90% of the work (general feature extraction). The small classification head can learn from limited data because it has very few parameters. Data augmentation multiplies the effective dataset size.

## Mixed Questions

### Q1. [Easy] Does MaxPooling2D have any trainable parameters?

```
layer = MaxPooling2D((2, 2))
print(layer.count_params())
```

*Hint:* Max pooling applies a fixed operation (taking the max).

**Answer:** `0`

MaxPooling2D has zero trainable parameters. It applies a fixed operation (selecting the maximum value in each window) with no learnable weights. Only Conv2D and Dense layers have trainable parameters.

### Q2. [Easy] What does Flatten do in a CNN?

```
# Input shape: (None, 4, 4, 64)
Flatten()
# Output shape: ?
```

*Hint:* Flatten converts multi-dimensional data into a 1D vector.

**Answer:** `(None, 1024)` because 4 x 4 x 64 = 1024.

Flatten reshapes the 3D feature map (4, 4, 64) into a 1D vector (1024,) by concatenating all values. This is needed before feeding into Dense layers, which expect 1D input.

### Q3. [Easy] What is the channel dimension in a color image?

*Hint:* Color images have Red, Green, and Blue channels.

**Answer:** The channel dimension represents the number of color channels. RGB images have 3 channels (Red, Green, Blue). Grayscale images have 1 channel. In Keras, the input shape is (height, width, channels), so an RGB image of 224x224 has input_shape=(224, 224, 3) and a grayscale 28x28 image has input_shape=(28, 28, 1).

Each Conv2D filter has the same depth as its input. A 3x3 filter on an RGB image is actually 3x3x3 = 27 weights per filter. On a grayscale image, it is 3x3x1 = 9 weights per filter.

### Q4. [Easy] What is the difference between these two models?

```
# Model A
Conv2D(32, (3, 3), padding='valid', input_shape=(28, 28, 1))  # Output: 26x26

# Model B
Conv2D(32, (3, 3), padding='same', input_shape=(28, 28, 1))   # Output: ?
```

*Hint:* 'same' padding adds zeros so the output matches the input size.

**Answer:** Model A output: (None, 26, 26, 32). Model B output: `(None, 28, 28, 32)`.

padding='valid' does not add any zeros, so the output shrinks by (filter_size - 1). padding='same' adds zeros around the border to keep the spatial dimensions unchanged. The number of filters (32) determines the depth in both cases.

### Q5. [Medium] How many parameters does this entire CNN have?

```
model = Sequential([
    Conv2D(8, (3, 3), input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(10, activation='softmax')
])
print(model.count_params())
```

*Hint:* Calculate Conv2D params, MaxPool params, and Dense params separately.

**Answer:** Conv2D: (3x3x1+1) x 8 = 80. MaxPool: 0. Flatten: 0. Dense: after Conv2D the shape is 26x26x8, after pool 13x13x8=1352, so Dense has (1352+1) x 10 = 13530. Total: `13,610`.

Conv2D(8, 3x3, 1 input channel): (3*3*1 + 1) * 8 = 80 params. MaxPool: 0. Flatten: 0. Dense(10): input is 13*13*8 = 1352, so (1352 * 10) + 10 = 13530 params. Total: 80 + 13530 = 13610.

### Q6. [Medium] Why is VGG16 popular for transfer learning despite being older than ResNet?

*Hint:* Think about simplicity and the quality of learned features.

**Answer:** VGG16 is popular for transfer learning because: (1) Its architecture is very simple (only 3x3 convolutions and 2x2 max pooling), making it easy to understand and modify. (2) Despite its simplicity, its convolutional features are high quality and transfer well to many tasks. (3) Its straightforward block structure makes it easy to identify where to cut the model for transfer learning. (4) It is widely studied and used as a benchmark. ResNet and others may achieve higher accuracy on ImageNet, but VGG16's simplicity makes it an excellent teaching and practical starting point.

In practice, for transfer learning, MobileNetV2 (lighter) or ResNet50 (more accurate) are often better choices. But VGG16 remains the go-to for learning transfer learning concepts because of its simplicity.

### Q7. [Medium] What happens if you train with augmented data but evaluate on the same augmented data?

```
datagen = ImageDataGenerator(rotation_range=30, horizontal_flip=True)
# Using same datagen for both train and validation
train_gen = datagen.flow(X_train, y_train)
val_gen = datagen.flow(X_val, y_val)  # Wrong?
```

*Hint:* Validation should measure performance on clean, unaugmented data.

**Answer:** The validation accuracy becomes unreliable and inconsistent. Each time you evaluate, the validation images are randomly transformed, so the same model gives different validation scores on different runs. You cannot track true progress or make reliable decisions about early stopping.

Validation data must represent the real-world distribution. Augmenting it adds noise to your evaluation metric. Use a separate ImageDataGenerator with only rescale=1./255 for validation and test data.

### Q8. [Medium] What does base_model.trainable = False do?

```
base_model = VGG16(weights='imagenet', include_top=False)
print(f"Before: {len(base_model.trainable_weights)} trainable")

base_model.trainable = False
print(f"After: {len(base_model.trainable_weights)} trainable")
```

*Hint:* Freezing a model makes all its weights non-trainable.

**Answer:** `Before: 26 trainable`
`After: 0 trainable`

Setting `trainable = False` freezes all layers in the model. Their weights will not be updated during training. VGG16 has 13 convolutional layers, each with kernel and bias (26 weight tensors). After freezing, none are trainable.

### Q9. [Medium] What is the difference between stride-based downsampling and pooling-based downsampling?

*Hint:* Both reduce spatial dimensions. How do they differ?

**Answer:** Pooling-based downsampling (MaxPooling2D) applies a fixed operation (max or average) in a window after the convolution. It has no learnable parameters. Stride-based downsampling (Conv2D with strides=2) reduces dimensions during the convolution itself -- the filter skips positions. It does have learnable parameters and combines feature extraction with downsampling in one step. Modern architectures (like ResNet and MobileNet) often prefer strided convolutions over max pooling because they give the network more control over what information is preserved during downsampling.

Both achieve the same goal (reducing spatial dimensions). MaxPooling is simpler and parameter-free. Strided convolution is more flexible but adds parameters. The trend in modern architectures is toward strided convolutions.

### Q10. [Hard] Rohit's model shows: training accuracy 99%, validation accuracy 62%. What is happening and how to fix it?

*Hint:* Huge gap between training and validation accuracy indicates a specific problem.

**Answer:** The model is severely **overfitting** -- it memorized the training data but cannot generalize. Fixes: (1) Add Dropout layers (0.3-0.5) after convolutional and Dense layers. (2) Add data augmentation (rotation, flip, zoom) to increase effective training data. (3) Use transfer learning with a pre-trained model instead of training from scratch. (4) Reduce model complexity (fewer layers, fewer filters). (5) Add L2 regularization. (6) Get more training data if possible. (7) Use EarlyStopping to stop at the point of best validation accuracy.

A 37% gap between train and validation accuracy is a clear sign of overfitting. The model has memorized specific training examples instead of learning general patterns. Regularization and data augmentation are the primary tools to combat this.

### Q11. [Hard] How do the features learned by early CNN layers differ from those learned by deep layers?

*Hint:* Think about the receptive field size at different depths.

**Answer:** Early layers (e.g., block1 in VGG16) have small receptive fields and learn simple, low-level features: edges (horizontal, vertical, diagonal), color blobs, and simple textures. Middle layers combine these into mid-level features: corners, contours, simple shapes, and recurring texture patterns. Deep layers have large receptive fields and detect high-level, semantic features: eyes, wheels, faces, or specific object parts. The deepest layers before the classification head combine these into class-specific representations. This hierarchical feature extraction is analogous to the human visual cortex.

You can visualize this using feature map extraction. Early filters often look like Gabor filters (edge detectors). Deep layer feature maps activate on specific objects or object parts. This hierarchy is why transfer learning works -- low-level features (edges, textures) are universal across visual tasks.

### Q12. [Hard] What are the parameters of this residual block?

```
def residual_block(x, filters=64):
    shortcut = x
    x = Conv2D(filters, (3, 3), padding='same')(x)  # Layer A
    x = BatchNormalization()(x)                       # Layer B
    x = Activation('relu')(x)
    x = Conv2D(filters, (3, 3), padding='same')(x)  # Layer C
    x = BatchNormalization()(x)                       # Layer D
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    return x

# Input shape to block: (None, 16, 16, 64)
# How many trainable parameters in this block?
```

*Hint:* Calculate Conv2D and BatchNorm params separately. Add and Activation have zero params.

**Answer:** Layer A (Conv2D 64 filters, 3x3, 64 input channels): (3x3x64 + 1) x 64 = 36,928. Layer B (BatchNorm, 64 features): 128 trainable (gamma + beta). Layer C (Conv2D same): 36,928. Layer D (BatchNorm): 128. Total trainable: `74,112`.

Each Conv2D: kernel is 3x3x64 = 576 weights + 1 bias per filter = 577, times 64 filters = 36,928. Each BatchNorm: 64 gamma + 64 beta = 128 trainable (plus 128 non-trainable for running stats). Add and Activation have zero parameters. Total: 2*(36,928 + 128) = 74,112 trainable parameters.

### Q13. [Hard] Compare AlexNet (2012) and ResNet (2015). What fundamental problems did each solve?

*Hint:* One proved deep learning works on GPUs. The other proved very deep networks can be trained.

**Answer:** AlexNet (2012) solved the problem of applying deep learning at scale. It was the first CNN to win ImageNet by a large margin. Key innovations: (1) Used GPUs for training (60x speedup), (2) ReLU activation instead of tanh (faster training), (3) Dropout for regularization, (4) Data augmentation. It proved that deep CNNs with large datasets and GPU training dramatically outperform traditional computer vision. ResNet (2015) solved the degradation problem in very deep networks. Before ResNet, networks deeper than ~20 layers performed worse than shallower ones (not due to overfitting, but difficulty in training). Skip connections (F(x) + x) allowed training 152-layer networks effectively by providing gradient highways during backpropagation.

AlexNet started the deep learning revolution. ResNet enabled the construction of truly deep networks. Both represent watershed moments in computer vision history.

### Q14. [Hard] How does GlobalAveragePooling2D change the shape?

```
from tensorflow.keras.layers import GlobalAveragePooling2D
# Input: (None, 7, 7, 512)
layer = GlobalAveragePooling2D()
# Output: ?
```

*Hint:* It averages each feature map (7x7) into a single value.

**Answer:** `(None, 512)`

GlobalAveragePooling2D takes the average of all spatial positions for each feature map. A 7x7 feature map becomes a single average value. With 512 feature maps, the output is a vector of 512 values. This is much more compact than Flatten, which would produce 7*7*512 = 25088 values.

### Q15. [Hard] Deepa has a dataset of 5,000 Indian road sign images (20 classes). Should she train from scratch or use transfer learning? If transfer learning, which pre-trained model should she choose and why?

*Hint:* 5,000 images is moderate. Consider the trade-off between model size and data availability.

**Answer:** Deepa should use transfer learning. With 5,000 images (250 per class), training a deep CNN from scratch would likely overfit. Recommended approach: Use MobileNetV2 or ResNet50 pre-trained on ImageNet. MobileNetV2 is preferred because (1) it is lightweight (3.4M vs 23.5M params for ResNet50), reducing overfitting risk with limited data, (2) it is fast to train and deploy, (3) its features still transfer well. Steps: freeze the base, add GlobalAveragePooling2D + Dense head, train with aggressive data augmentation (rotation, flip, brightness -- reflecting real-world road sign variations), then fine-tune the top few layers with lr=1e-5. With 5,000 images, this should achieve strong accuracy.

ImageNet features (edges, textures, shapes, colors) transfer well to road sign classification. Road signs have distinct shapes and colors that the pre-trained features can recognize. Data augmentation is especially important here to simulate different lighting, angles, and weather conditions.

## Multiple Choice Questions

### Q1. [Easy] What does CNN stand for?

**Answer:** B

**B is correct.** CNN stands for Convolutional Neural Network. The key operation is convolution, where filters slide across the input to detect spatial patterns.

### Q2. [Easy] What does a convolution filter detect in an image?

**Answer:** B

**B is correct.** Convolution filters detect specific spatial patterns. Early filters detect simple patterns (edges), while deeper filters detect complex patterns (object parts). The filter weights are learned during training.

### Q3. [Easy] What is the output of MaxPooling2D((2,2)) applied to a 10x10 feature map?

**Answer:** A

**A is correct.** MaxPooling2D with pool_size=(2,2) halves both spatial dimensions: 10/2 = 5. The output is 5x5. The number of channels remains unchanged.

### Q4. [Easy] What does 'padding=same' do in a Conv2D layer?

**Answer:** C

**C is correct.** `padding='same'` adds zeros around the border of the input so that the output has the same height and width as the input (when stride=1). Without padding ('valid'), the output shrinks.

### Q5. [Easy] What is the purpose of the Flatten layer in a CNN?

**Answer:** B

**B is correct.** Flatten converts multi-dimensional feature maps (e.g., 4x4x128) into a 1D vector (2048) that can be fed into Dense layers for classification.

### Q6. [Easy] Which CNN architecture introduced residual (skip) connections?

**Answer:** C

**C is correct.** ResNet (2015) introduced residual connections where the input is added to the output of a block (F(x) + x). This allowed training networks with 100+ layers by solving the vanishing gradient problem.

### Q7. [Medium] In transfer learning, why do we freeze the pre-trained layers initially?

**Answer:** B

**B is correct.** Freezing preserves the valuable features learned from millions of images. We only train the new classification layers to adapt those features to our specific task. Without freezing, random gradient updates would destroy the pre-trained representations.

### Q8. [Medium] What is the key advantage of CNNs over Dense networks for image classification?

**Answer:** C

**C is correct.** CNNs share filter weights across all spatial positions (parameter sharing) and each neuron only connects to a local region (local connectivity). This drastically reduces parameters and allows the model to detect patterns regardless of their position in the image.

### Q9. [Medium] What does include_top=False do when loading a pre-trained model?

**Answer:** B

**B is correct.** `include_top=False` removes the top Dense layers used for the original classification task (e.g., ImageNet's 1000 classes). It keeps only the convolutional feature extraction base, which you connect to your own classification layers.

### Q10. [Medium] Which of the following is NOT a data augmentation technique?

**Answer:** C

**C is correct.** Feature normalization (scaling to [0,1] or standardizing) is a preprocessing step, not augmentation. Data augmentation creates modified versions of images (rotation, flip, zoom, shift) to increase training data diversity.

### Q11. [Medium] Why should you use a very low learning rate during fine-tuning?

**Answer:** B

**B is correct.** Pre-trained weights represent features learned from millions of images. A high learning rate causes large gradient updates that destroy these carefully learned features. A low learning rate (e.g., 1e-5) makes small adjustments that adapt the features without destroying them.

### Q12. [Hard] How many parameters does Conv2D(64, (3,3)) have when the input has 32 channels?

**Answer:** C

**C is correct.** Each filter is 3x3x32 = 288 weights + 1 bias = 289 per filter. With 64 filters: 289 x 64 = 18,496. The input channel depth (32) is part of each filter's dimensions.

### Q13. [Hard] What is the receptive field of three stacked 3x3 convolutions (with stride 1)?

**Answer:** C

**C is correct.** One 3x3 conv sees 3x3. Two stacked 3x3 convs see 5x5. Three stacked 3x3 convs see 7x7. The formula is: receptive_field = 1 + n * (kernel_size - 1) = 1 + 3 * 2 = 7.

### Q14. [Hard] GlobalAveragePooling2D converts a (None, 7, 7, 512) tensor to what shape?

**Answer:** B

**B is correct.** GlobalAveragePooling2D averages each of the 512 feature maps (7x7 each) into a single value, producing a vector of length 512. Flatten would give (None, 25088) by concatenating all values.

### Q15. [Hard] Which VGG16 design principle was later adopted by many architectures?

**Answer:** B

**B is correct.** VGG16 showed that stacking small 3x3 filters is better than using large filters (5x5 or 7x7). Two 3x3 filters have the same receptive field as one 5x5 but with fewer parameters and more non-linearity. This principle is now standard in most CNN architectures.

### Q16. [Hard] In what order does a CNN typically process data for image classification?

**Answer:** B

**B is correct.** The standard CNN pipeline: convolutional layers extract features, pooling layers reduce dimensions (this block repeats), Flatten converts to 1D, Dense layers classify, and softmax outputs probabilities. Data flows from spatial feature extraction to classification.

### Q17. [Easy] What does a convolution filter detect in the first layer of a CNN?

**Answer:** B

**B is correct.** The first convolutional layer learns to detect simple, low-level features like horizontal edges, vertical edges, corners, and color blobs. Deeper layers combine these into increasingly complex features.

### Q18. [Medium] What happens to the number of channels after Conv2D(64, (3,3)) on an input with 32 channels?

**Answer:** B

**B is correct.** The number of output channels equals the number of filters specified in Conv2D. Conv2D(64, ...) produces 64 feature maps regardless of the input channel count. The input channels affect the filter depth (each filter is 3x3x32) but not the output depth.

### Q19. [Medium] What is the main purpose of data augmentation?

**Answer:** B

**B is correct.** Data augmentation creates modified versions of training images (rotated, flipped, zoomed) to effectively increase the dataset size. This helps the model learn invariant features and reduces overfitting.

### Q20. [Hard] What is the difference between Max Pooling and Average Pooling?

**Answer:** A

**A is correct.** Max pooling selects the maximum value in each window, preserving the strongest activations. Average pooling computes the mean, providing a smoother representation. Both reduce spatial dimensions. Neither has learnable parameters. Max pooling is more commonly used in classification CNNs.

### Q21. [Easy] What does 'weights=imagenet' mean when loading VGG16?

**Answer:** B

**B is correct.** weights='imagenet' loads weights that were pre-trained on the ImageNet dataset (14 million images, 1000 classes). These weights already understand general visual features and can be transferred to new tasks.

### Q22. [Hard] Why does ResNet use batch normalization after each convolution?

**Answer:** B

**B is correct.** Batch normalization normalizes feature maps to zero mean and unit variance after each convolution. In very deep networks (50-152 layers), this prevents activation values from growing or shrinking uncontrollably, enabling stable gradient flow and faster convergence.

### Q23. [Medium] What is translation invariance in the context of CNNs?

**Answer:** B

**B is correct.** Translation invariance means a CNN can recognize a cat whether it appears in the top-left, center, or bottom-right of the image. This is achieved through parameter sharing (same filter applied everywhere) and pooling (which provides tolerance to small position shifts).

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/convolutional-neural-networks/*
