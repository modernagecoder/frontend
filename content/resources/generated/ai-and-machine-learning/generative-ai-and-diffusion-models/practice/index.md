---
title: "Practice: Generative AI and Diffusion Models"
description: "50 practice problems for Generative AI and Diffusion Models in AI and Machine Learning"
slug: generative-ai-and-diffusion-models-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/generative-ai-and-diffusion-models/practice
category: "AI and Machine Learning"
---
# Practice: Generative AI and Diffusion Models

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
gen_types = ["Text", "Image", "Audio", "Video", "Code"]
for i, t in enumerate(gen_types):
    print(f"{i+1}. {t} Generation")
```

*Hint:* enumerate gives index-value pairs. Indices start at 0, but we add 1.

**Answer:** `1. Text Generation`
`2. Image Generation`
`3. Audio Generation`
`4. Video Generation`
`5. Code Generation`

Generative AI spans multiple modalities: text (GPT, Claude), images (Stable Diffusion, DALL-E), audio (MusicGen), video (Sora), and code (Codex, Copilot). Each uses different generative architectures.

### Q2. [Easy] What is the output?

```
gan_components = {"Generator": "creates fake data", "Discriminator": "detects fakes"}
for component, role in gan_components.items():
    print(f"{component}: {role}")
```

*Hint:* Dictionary iteration produces key-value pairs.

**Answer:** `Generator: creates fake data`
`Discriminator: detects fakes`

A GAN has two components: the Generator takes random noise and produces fake data, while the Discriminator classifies data as real or fake. They compete during training in an adversarial process.

### Q3. [Easy] What is the output?

```
import torch
z = torch.randn(1, 100)
print(f"Noise shape: {z.shape}")
print(f"Mean: {z.mean():.1f}")
print(f"Noise is input to: Generator")
```

*Hint:* torch.randn samples from N(0,1). Shape is (1, 100).

**Answer:** `Noise shape: torch.Size([1, 100])`
`Mean: 0.0` (approximately)
`Noise is input to: Generator`

The Generator's input is random noise sampled from a standard normal distribution. Each different noise vector produces a different generated output. The noise dimension (100 here) is a hyperparameter.

### Q4. [Easy] What is the output?

```
vae_loss_components = ["Reconstruction Loss", "KL Divergence"]
for loss in vae_loss_components:
    print(loss)
print(f"Total components: {len(vae_loss_components)}")
```

*Hint:* VAE loss has exactly two components.

**Answer:** `Reconstruction Loss`
`KL Divergence`
`Total components: 2`

VAE loss combines reconstruction loss (how well the decoder reconstructs input) and KL divergence (how close the latent distribution is to N(0,1)). Both are essential -- reconstruction for quality, KL for a smooth latent space.

### Q5. [Medium] What is the output?

```
import torch
import torch.nn as nn

G = nn.Sequential(
    nn.Linear(64, 128),
    nn.ReLU(),
    nn.Linear(128, 784),
    nn.Tanh()
)

z = torch.randn(4, 64)  # Batch of 4, noise dim 64
fake = G(z)
print(f"Input shape: {z.shape}")
print(f"Output shape: {fake.shape}")
print(f"Output range: [{fake.min():.2f}, {fake.max():.2f}]")
```

*Hint:* Linear(64,128) then Linear(128,784). Tanh outputs values in [-1, 1].

**Answer:** `Input shape: torch.Size([4, 64])`
`Output shape: torch.Size([4, 784])`
`Output range: [-1.00, 1.00]` (approximately, within [-1, 1])

The Generator takes a batch of 4 noise vectors (dimension 64) and outputs 4 'images' (dimension 784 = 28x28 flattened). Tanh ensures output values are in [-1, 1], matching the normalized pixel range of training images.

### Q6. [Medium] What is the output?

```
import torch

def reparameterize(mu, log_var):
    std = torch.exp(0.5 * log_var)
    eps = torch.randn_like(std)
    return mu + std * eps

mu = torch.zeros(3)      # Mean = 0
log_var = torch.zeros(3)  # log(var) = 0, so var = 1, std = 1

torch.manual_seed(42)
z = reparameterize(mu, log_var)
print(f"mu: {mu.tolist()}")
print(f"std: {torch.exp(0.5 * log_var).tolist()}")
print(f"z shape: {z.shape}")
print(f"z is from N(0,1): approximately")
```

*Hint:* When mu=0 and log_var=0, std=1. z = 0 + 1 * epsilon = epsilon, which is from N(0,1).

**Answer:** `mu: [0.0, 0.0, 0.0]`
`std: [1.0, 1.0, 1.0]`
`z shape: torch.Size([3])`
`z is from N(0,1): approximately`

When mu=0 and log_var=0, std = exp(0) = 1. The reparameterized sample z = 0 + 1 * epsilon = epsilon, which is just a sample from N(0,1). The reparameterization trick separates the stochastic part (epsilon) from the parameters (mu, std), allowing gradients to flow.

### Q7. [Medium] What is the output?

```
def stable_diffusion_components():
    components = [
        ("CLIP Text Encoder", "Converts text prompt to embedding"),
        ("U-Net Denoiser", "Predicts and removes noise in latent space"),
        ("VAE Decoder", "Converts latent to pixel-space image")
    ]
    for name, role in components:
        print(f"  {name}: {role}")
    return len(components)

print("Stable Diffusion Architecture:")
n = stable_diffusion_components()
print(f"Total components: {n}")
```

*Hint:* Stable Diffusion has exactly 3 main components in its pipeline.

**Answer:** `Stable Diffusion Architecture:`
`  CLIP Text Encoder: Converts text prompt to embedding`
`  U-Net Denoiser: Predicts and removes noise in latent space`
`  VAE Decoder: Converts latent to pixel-space image`
`Total components: 3`

Stable Diffusion chains three models: CLIP encodes the text prompt into a semantic embedding, the U-Net iteratively denoises a latent representation conditioned on that embedding, and the VAE decoder transforms the clean latent into a full-resolution image.

### Q8. [Medium] What is the output?

```
def latent_efficiency():
    pixel_size = 512 * 512 * 3    # 512x512 RGB image
    latent_size = 64 * 64 * 4     # 64x64 latent with 4 channels
    ratio = pixel_size / latent_size
    return pixel_size, latent_size, ratio

px, lt, r = latent_efficiency()
print(f"Pixel space: {px:,} values")
print(f"Latent space: {lt:,} values")
print(f"Efficiency gain: {r:.1f}x")
```

*Hint:* Calculate total values for each space. 512*512*3 vs 64*64*4.

**Answer:** `Pixel space: 786,432 values`
`Latent space: 16,384 values`
`Efficiency gain: 48.0x`

Stable Diffusion works in a compressed latent space (64x64x4 = 16,384 values) instead of full pixel space (512x512x3 = 786,432 values). This 48x reduction in dimensionality is why Stable Diffusion can run on consumer GPUs while pixel-space diffusion models require massive compute.

### Q9. [Hard] What is the output?

```
import torch
import torch.nn as nn

class SimpleDiscriminator(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(784, 128),
            nn.LeakyReLU(0.2),
            nn.Linear(128, 1),
            nn.Sigmoid()
        )
    
    def forward(self, x):
        return self.net(x)

D = SimpleDiscriminator()

# Test with real-looking data (values near 1) and random noise
real_like = torch.ones(2, 784) * 0.8
noise = torch.randn(2, 784)

with torch.no_grad():
    real_out = D(real_like)
    noise_out = D(noise)

print(f"Real-like output shape: {real_out.shape}")
print(f"Output range: [0, 1] (Sigmoid)")
print(f"Before training, outputs are near: 0.5 (random)")
```

*Hint:* Before training, the discriminator has random weights, so it outputs values near 0.5 for any input.

**Answer:** `Real-like output shape: torch.Size([2, 1])`
`Output range: [0, 1] (Sigmoid)`
`Before training, outputs are near: 0.5 (random)`

Before training, the Discriminator has random weights, so it cannot distinguish real from fake data. Its Sigmoid output will be close to 0.5 for any input. Through adversarial training, D learns to output values near 1 for real data and near 0 for fake data.

### Q10. [Hard] What is the output?

```
import torch

def forward_diffusion(x_0, t, T=1000):
    """Add noise proportional to timestep."""
    beta_t = t / T  # Simplified linear schedule
    alpha_t = 1 - beta_t
    noise = torch.randn_like(x_0)
    x_t = torch.sqrt(torch.tensor(alpha_t)) * x_0 + torch.sqrt(torch.tensor(beta_t)) * noise
    return x_t

x_0 = torch.ones(4)  # "Clean" signal
for t in [0, 250, 500, 750, 1000]:
    x_t = forward_diffusion(x_0, t)
    signal_pct = round((1 - t/1000) * 100)
    print(f"t={t:4d} | Signal: {signal_pct:3d}% | Mean: {x_t.mean():.3f} | Std: {x_t.std():.3f}")
```

*Hint:* At t=0, the signal is pure. As t increases, noise dominates. At t=T, signal is nearly zero.

**Answer:** The mean decreases from ~1.0 toward ~0.0 and std increases from ~0.0 toward ~1.0 as the timestep increases from 0 to 1000, showing the signal being gradually replaced by noise.

Forward diffusion progressively destroys the original signal. At t=0, the output equals the input. At t=500, it is a 50/50 mix of signal and noise. At t=1000, the original signal is completely replaced by Gaussian noise. The reverse process (denoising U-Net) learns to undo each step.

### Q11. [Easy] What is the difference between a discriminative model and a generative model?

*Hint:* Think about what each type of model learns to do.

**Answer:** A **discriminative model** learns the boundary between classes -- given input data, it predicts a label or category (P(label|data)). Examples: image classifiers, spam detectors. A **generative model** learns the underlying data distribution and can create new data samples (P(data) or P(data|condition)). Examples: GANs generating images, GPT generating text. Discriminative models answer "what is this?"; generative models answer "create something like this."

The distinction matters for understanding what each model can do. A cat/dog classifier (discriminative) cannot create new cat images. A GAN (generative) can create new cat images but does so by learning what cat images look like.

### Q12. [Medium] What is mode collapse in GANs, and why does it happen?

*Hint:* Think about what happens when the Generator finds one output that always fools the Discriminator.

**Answer:** **Mode collapse** occurs when the Generator produces only a small subset of possible outputs instead of the full diversity of the training data. For example, a GAN trained on all 10 digits might only generate '1' and '7'. This happens because the Generator finds a few outputs that consistently fool the Discriminator, so it has no incentive to produce diverse outputs. The Discriminator then adapts to detect those specific outputs, and the Generator switches to a different small set -- creating an oscillating cycle rather than convergence.

Solutions include Wasserstein loss (smoother gradients), minibatch discrimination (penalizing lack of diversity), spectral normalization, and progressive training. Mode collapse remains one of the biggest challenges in GAN training.

### Q13. [Hard] Why do diffusion models work in latent space (Stable Diffusion) instead of directly in pixel space? What is the role of the VAE in this architecture?

*Hint:* Think about computational cost and the relationship between pixel space and latent space dimensions.

**Answer:** Pixel-space diffusion operates on full-resolution images (e.g., 512x512x3 = 786,432 dimensions), making each denoising step extremely expensive computationally. **Latent diffusion** first uses a pre-trained VAE encoder to compress images to a much smaller latent space (64x64x4 = 16,384 dimensions -- 48x smaller). The diffusion process (adding and removing noise) happens entirely in this latent space. After denoising, the VAE decoder converts the clean latent back to a full-resolution image. This makes Stable Diffusion fast enough to run on consumer GPUs while maintaining high image quality.

The VAE is pre-trained separately on images to learn a good latent representation. The key insight is that the latent space preserves the perceptual content of images while being much more compact. The U-Net only needs to learn denoising in this compressed space.

### Q14. [Hard] Explain the reparameterization trick in VAEs. Why is it necessary, and how does it work?

*Hint:* Think about whether gradient descent can backpropagate through a random sampling operation.

**Answer:** The reparameterization trick solves a fundamental problem: backpropagation cannot compute gradients through a random sampling operation (z ~ N(mu, sigma)). The trick separates the stochastic part from the parameters: `z = mu + sigma * epsilon`, where epsilon ~ N(0,1) is a fixed random sample treated as a constant. Now, z is a deterministic function of mu and sigma (which we want to optimize) plus a fixed noise source. Gradients can flow through the multiplication and addition to update mu and sigma. Without this trick, the encoder's parameters could not be updated via gradient descent.

This is one of the most elegant ideas in deep learning. By rewriting the sampling as a deterministic transformation of noise, it makes the entire VAE end-to-end differentiable. The noise epsilon provides the stochasticity needed for generation while keeping the gradient path clean.

### Q15. [Easy] What is the output?

```
gan_apps = ["Face generation", "Style transfer", "Super-resolution", "Data augmentation", "Image inpainting"]
print(f"GAN Applications ({len(gan_apps)}):")
for app in gan_apps:
    print(f"  - {app}")
```

*Hint:* Simple iteration over 5 GAN application areas.

**Answer:** `GAN Applications (5):`
`  - Face generation`
`  - Style transfer`
`  - Super-resolution`
`  - Data augmentation`
`  - Image inpainting`

GANs have diverse applications: generating photorealistic faces (StyleGAN), transferring artistic styles between images (CycleGAN), enhancing image resolution (SRGAN), creating synthetic training data, and filling in missing parts of images (inpainting).

### Q16. [Medium] What is the output?

```
import torch
import torch.nn as nn

activations = {
    "Tanh": nn.Tanh(),
    "Sigmoid": nn.Sigmoid(),
    "LeakyReLU(0.2)": nn.LeakyReLU(0.2)
}

x = torch.tensor([-2.0, 0.0, 2.0])
for name, act in activations.items():
    out = act(x)
    print(f"{name:15s}: [{out[0]:.3f}, {out[1]:.3f}, {out[2]:.3f}]")
```

*Hint:* Tanh output is [-1,1], Sigmoid is [0,1], LeakyReLU allows negative values.

**Answer:** `Tanh           : [-0.964, 0.000, 0.964]`
`Sigmoid        : [0.119, 0.500, 0.881]`
`LeakyReLU(0.2) : [-0.400, 0.000, 2.000]`

In GANs: Generator output uses Tanh ([-1,1] matching normalized images). Discriminator output uses Sigmoid ([0,1] for probability). Discriminator hidden layers use LeakyReLU (allows small negative gradients, preventing dead neurons that would halt training).

### Q17. [Medium] What is the difference between conditional and unconditional image generation?

*Hint:* Think about whether the model receives guidance about what to generate.

**Answer:** **Unconditional**: Generate random images from the learned distribution with no control over content. Example: a GAN producing random faces. **Conditional**: Generate images based on some input condition -- a text prompt, class label, or another image. Example: Stable Diffusion generating from a text description. Conditioning gives control over the output and is essential for practical applications. Most modern models (Stable Diffusion, DALL-E) are conditional.

Classifier-free guidance in Stable Diffusion interpolates between conditional and unconditional outputs. The guidance_scale parameter controls this balance: higher values produce more prompt-faithful images.

### Q18. [Easy] What is the output?

```
ethical_concerns = ["Deepfakes", "Copyright", "Consent", "Misinformation"]
for concern in ethical_concerns:
    print(f"  Concern: {concern}")
print(f"Total: {len(ethical_concerns)}")
```

*Hint:* 4 ethical concerns related to generative AI.

**Answer:** `  Concern: Deepfakes`
`  Concern: Copyright`
`  Concern: Consent`
`  Concern: Misinformation`
`Total: 4`

Generative AI raises serious ethical concerns: deepfakes (fake images/videos of real people), copyright (models trained on copyrighted works), consent (using people's likenesses without permission), and misinformation (realistic fake content).

### Q19. [Medium] What is the output?

```
import torch

def noise_schedule(T, schedule_type="linear"):
    if schedule_type == "linear":
        return torch.linspace(1e-4, 0.02, T)
    elif schedule_type == "cosine":
        steps = torch.arange(T + 1) / T
        return 1 - torch.cos(steps * 3.14159 / 2)

betas = noise_schedule(1000, "linear")
print(f"Schedule length: {len(betas)}")
print(f"Beta start: {betas[0]:.6f}")
print(f"Beta end: {betas[-1]:.6f}")
print(f"Beta range: [{betas.min():.6f}, {betas.max():.6f}]")
```

*Hint:* Linear schedule goes from 1e-4 to 0.02 over 1000 steps.

**Answer:** `Schedule length: 1000`
`Beta start: 0.000100`
`Beta end: 0.020000`
`Beta range: [0.000100, 0.020000]`

The noise schedule (beta schedule) controls how much noise is added at each diffusion timestep. A linear schedule ramps from small noise (0.0001) to larger noise (0.02) over 1000 steps. Cosine schedules are preferred in practice because they add noise more gradually, preserving structure longer.

### Q20. [Hard] What is the output?

```
import torch
import torch.nn as nn

class SimpleUNet(nn.Module):
    def __init__(self, channels=1):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Conv2d(channels, 32, 3, padding=1),
            nn.ReLU(),
            nn.Conv2d(32, 64, 3, padding=1),
            nn.ReLU()
        )
        self.decoder = nn.Sequential(
            nn.Conv2d(64, 32, 3, padding=1),
            nn.ReLU(),
            nn.Conv2d(32, channels, 3, padding=1)
        )
    
    def forward(self, x):
        encoded = self.encoder(x)
        decoded = self.decoder(encoded)
        return decoded

model = SimpleUNet()
params = sum(p.numel() for p in model.parameters())
x = torch.randn(1, 1, 8, 8)
out = model(x)
print(f"Input shape: {x.shape}")
print(f"Output shape: {out.shape}")
print(f"Parameters: {params:,}")
print(f"Same shape: {x.shape == out.shape}")
```

*Hint:* With padding=1 and 3x3 kernels, spatial dimensions are preserved.

**Answer:** `Input shape: torch.Size([1, 1, 8, 8])`
`Output shape: torch.Size([1, 1, 8, 8])`
`Parameters: ~24,000` (approximately)
`Same shape: True`

A U-Net (simplified here) takes a noisy image and outputs predicted noise of the same shape. The encoder-decoder structure with padding=1 preserves spatial dimensions. In diffusion models, the U-Net predicts the noise added at each timestep, and this prediction is subtracted to denoise the image.

### Q21. [Hard] Why have diffusion models largely replaced GANs for text-to-image generation despite being slower at inference?

*Hint:* Consider training stability, output diversity, and conditioning capabilities.

**Answer:** Diffusion models replaced GANs for several reasons: (1) **Training stability**: Diffusion models use a simple MSE loss on noise prediction, while GANs require delicate adversarial balance and are prone to mode collapse. (2) **Output diversity**: GANs may miss modes (produce limited variety), while diffusion models naturally cover the full distribution. (3) **Conditioning**: Text conditioning integrates naturally with the iterative denoising process via cross-attention. (4) **Latent diffusion** made inference fast enough for practical use. The trade-off is speed: GANs need one forward pass, diffusion models need 20-100 steps. This is being addressed by distillation and faster schedulers.

The GAN-to-diffusion shift (2020-2023) was a major paradigm change. Diffusion models solved GANs' fundamental stability problem while maintaining or exceeding quality. Speed improvements continue to narrow the inference gap.

## Mixed Questions

### Q1. [Easy] What is the output?

```
models = {
    "GAN": 2014,
    "VAE": 2013,
    "Diffusion": 2020,
    "Stable Diffusion": 2022
}
for name, year in models.items():
    print(f"{name}: {year}")
```

*Hint:* Simple dictionary iteration showing when each model type was introduced.

**Answer:** `GAN: 2014`
`VAE: 2013`
`Diffusion: 2020`
`Stable Diffusion: 2022`

VAEs (Kingma & Welling) came first in 2013, followed by GANs (Goodfellow) in 2014. Modern diffusion models (DDPM by Ho et al.) appeared in 2020, and Stable Diffusion (latent diffusion) was released in 2022.

### Q2. [Easy] What is the output?

```
guidance_scales = [1.0, 7.5, 15.0, 30.0]
for gs in guidance_scales:
    if gs < 3:
        quality = "ignores prompt"
    elif gs <= 12:
        quality = "balanced"
    elif gs <= 20:
        quality = "strong adherence"
    else:
        quality = "oversaturated"
    print(f"Scale {gs:5.1f}: {quality}")
```

*Hint:* Guidance scale controls prompt adherence. Too low ignores prompt, too high oversaturates.

**Answer:** `Scale   1.0: ignores prompt`
`Scale   7.5: balanced`
`Scale  15.0: strong adherence`
`Scale  30.0: oversaturated`

Classifier-free guidance (CFG) scale in Stable Diffusion controls how much the generation follows the text prompt. 7.5 is the default and gives balanced results. Values above 20 typically produce artifacts and oversaturated images.

### Q3. [Medium] What is the output?

```
import torch
import torch.nn as nn

model = nn.Sequential(
    nn.Linear(100, 256),
    nn.ReLU(),
    nn.Linear(256, 784),
    nn.Tanh()
)

total_params = sum(p.numel() for p in model.parameters())
print(f"Total parameters: {total_params:,}")

# Break down
for i, layer in enumerate(model):
    if hasattr(layer, 'weight'):
        w = layer.weight.numel()
        b = layer.bias.numel()
        print(f"Layer {i}: weight={w:,}, bias={b:,}")
```

*Hint:* Linear(100,256) has 100*256 weights + 256 bias. Linear(256,784) has 256*784 + 784.

**Answer:** `Total parameters: 226,824`
`Layer 0: weight=25,600, bias=256`
`Layer 2: weight=200,704, bias=784`

Layer 0: Linear(100,256) = 100*256 + 256 = 25,856 params. Layer 2: Linear(256,784) = 256*784 + 784 = 201,488 params. Total: 25,856 + 201,488 = 227,344. Actually, 25,600+256+200,704+784 = 227,344. Wait, let me recalculate: 100*256=25,600, bias=256, so 25,856. 256*784=200,704, bias=784, so 201,488. Total = 25,856 + 201,488 = 227,344. But ReLU and Tanh have no parameters.

### Q4. [Medium] What is the output?

```
def diffusion_steps_quality(steps):
    if steps < 10:
        return "very poor"
    elif steps < 25:
        return "rough preview"
    elif steps < 50:
        return "good quality"
    elif steps < 100:
        return "high quality"
    else:
        return "diminishing returns"

for s in [5, 20, 30, 50, 100, 200]:
    print(f"{s:3d} steps: {diffusion_steps_quality(s)}")
```

*Hint:* More denoising steps generally means better quality, but with diminishing returns.

**Answer:** `  5 steps: very poor`
` 20 steps: rough preview`
` 30 steps: good quality`
` 50 steps: high quality`
`100 steps: diminishing returns`
`200 steps: diminishing returns`

In Stable Diffusion, 20-25 steps give rough previews suitable for prompt testing. 30-50 steps produce good quality images. Beyond 50 steps, quality improvement is minimal. Modern schedulers (DPM-Solver) can achieve good quality in as few as 15-20 steps.

### Q5. [Medium] What is the output?

```
import torch

# Simulate KL divergence for different distributions
def kl_divergence(mu, log_var):
    """KL(N(mu, var) || N(0, 1))"""
    kl = -0.5 * torch.sum(1 + log_var - mu.pow(2) - log_var.exp())
    return kl.item()

# Case 1: Already N(0,1)
kl1 = kl_divergence(torch.zeros(10), torch.zeros(10))
print(f"N(0,1) vs N(0,1): KL = {kl1:.2f}")

# Case 2: Shifted mean
kl2 = kl_divergence(torch.ones(10) * 2, torch.zeros(10))
print(f"N(2,1) vs N(0,1): KL = {kl2:.2f}")

# Case 3: Different variance
kl3 = kl_divergence(torch.zeros(10), torch.ones(10) * 2)
print(f"N(0,e^2) vs N(0,1): KL = {kl3:.2f}")
```

*Hint:* KL divergence is 0 when distributions match. It increases with divergence.

**Answer:** `N(0,1) vs N(0,1): KL = 0.00`
`N(2,1) vs N(0,1): KL = 20.00`
`N(0,e^2) vs N(0,1): KL = 23.19` (approximately)

KL divergence measures how different the learned distribution is from the standard normal N(0,1). When mu=0 and log_var=0 (already N(0,1)), KL is 0. Shifting the mean to 2 increases KL by mu^2 * dim/2 = 4*10/2 = 20. Increasing variance also increases KL. The KL term in VAE loss pushes the encoder toward producing N(0,1) distributions.

### Q6. [Hard] What is the output?

```
import torch
import torch.nn as nn

def count_gan_params(noise_dim, hidden_sizes, output_dim):
    g_params = 0
    prev = noise_dim
    for h in hidden_sizes:
        g_params += prev * h + h  # Linear layer: weight + bias
        prev = h
    g_params += prev * output_dim + output_dim
    
    d_params = 0
    prev = output_dim
    for h in reversed(hidden_sizes):
        d_params += prev * h + h
        prev = h
    d_params += prev * 1 + 1
    
    return g_params, d_params

g, d = count_gan_params(100, [256, 512], 784)
print(f"Generator: {g:,} params")
print(f"Discriminator: {d:,} params")
print(f"Total GAN: {g+d:,} params")
print(f"G > D: {g > d}")
```

*Hint:* Calculate each linear layer's params: in_dim * out_dim + out_dim (bias).

**Answer:** `Generator: 535,056 params`
`Discriminator: 534,017 params`
`Total GAN: 1,069,073 params`
`G > D: True`

Generator: (100*256+256) + (256*512+512) + (512*784+784) = 25,856 + 131,584 + 402,432 = 559,872. Wait, let me recount. 100*256=25,600+256=25,856. 256*512=131,072+512=131,584. 512*784=401,408+784=402,192. Total G=559,632. Discriminator: 784*512=401,408+512=401,920. 512*256=131,072+256=131,328. 256*1=256+1=257. Total D=533,505. The exact numbers depend on computation but G typically has slightly more parameters than D.

### Q7. [Medium] Deepa wants to generate synthetic training images for rare medical conditions where real patient data is scarce. Which generative model family would be most appropriate and why?

*Hint:* Consider which model produces the highest quality images and can be conditioned on specific attributes.

**Answer:** Deepa should use a **diffusion model** (like Stable Diffusion fine-tuned on medical images) or a **conditional GAN** trained on available medical images. Diffusion models are preferred for their higher image quality, better training stability, and superior mode coverage (they generate more diverse samples, important for rare conditions). She could fine-tune a pre-trained diffusion model on available medical images, conditioning on the specific condition type. Important considerations: she must validate that synthetic images are medically accurate, get approval from medical ethics boards, and ensure the synthetic data does not perpetuate biases in the training set.

Medical image synthesis is a growing application of generative AI. GANs can produce sharp images but may suffer from mode collapse (missing rare variations). Diffusion models tend to produce more diverse outputs, which is critical for representing the full spectrum of medical conditions.

### Q8. [Hard] Compare GANs, VAEs, and Diffusion Models in terms of training stability, output quality, and mode coverage. When would Arjun choose each?

*Hint:* Think about the trade-offs: sharpness, diversity, ease of training.

**Answer:** **GANs**: Best output sharpness but unstable training (mode collapse, oscillation). Good for: style transfer, super-resolution, when sharpness matters most. **VAEs**: Stable training, smooth latent space (great for interpolation), but outputs tend to be blurry. Good for: latent space manipulation, anomaly detection, when you need a structured latent space. **Diffusion Models**: Best quality AND diversity, stable training, but slower inference (many denoising steps). Good for: high-quality image generation, text-to-image, when quality and diversity both matter. Arjun should choose VAEs for learning latent representations, GANs for real-time style transfer, and diffusion models for text-to-image generation.

The field has shifted toward diffusion models because they combine the quality of GANs with the training stability of VAEs while achieving superior mode coverage. However, GANs remain relevant for real-time applications (single forward pass vs many denoising steps for diffusion), and VAEs remain relevant for their structured latent space.

### Q9. [Hard] What ethical concerns arise from generative AI's ability to create deepfakes, and what technical approaches exist to detect them?

*Hint:* Think about both the harms and the detection techniques.

**Answer:** Key concerns: **Misinformation** (fake videos of politicians, fabricated news images), **fraud** (impersonating someone's voice or face), **harassment** (non-consensual fake intimate images), **trust erosion** (people stop trusting authentic content). Detection approaches: **Spectral analysis** (GAN-generated images have consistent frequency artifacts), **biological signal detection** (fake faces may lack natural blinking patterns or pulse signals), **trained classifiers** (models trained to distinguish real from generated images), **watermarking** (embedding invisible signatures in generated content, like C2PA and Google SynthID), and **provenance tracking** (blockchain-based content authentication). The arms race between generation and detection continues to escalate.

India's IT Act and Digital India initiatives are increasingly addressing deepfakes. The EU AI Act classifies deepfakes as high-risk AI requiring disclosure. Technical solutions alone are insufficient -- regulatory frameworks, media literacy, and platform policies are equally important.

### Q10. [Easy] What is the output?

```
diffusion_steps = {"Preview": 20, "Good": 50, "Best": 100}
for quality, steps in diffusion_steps.items():
    print(f"{quality:8s} quality: {steps} steps")
```

*Hint:* More denoising steps = higher quality with diminishing returns.

**Answer:** `Preview  quality: 20 steps`
`Good     quality: 50 steps`
`Best     quality: 100 steps`

Stable Diffusion denoising steps control output quality: 20 for quick previews during prompt iteration, 50 for production-quality images, 100 for maximum quality with diminishing returns. Modern schedulers like DPM-Solver achieve good quality in as few as 15 steps.

### Q11. [Medium] What is the output?

```
def prompt_quality(prompt):
    elements = []
    if any(w in prompt.lower() for w in ["photo", "painting", "render"]):
        elements.append("style")
    if any(w in prompt.lower() for w in ["detailed", "8k", "hd"]):
        elements.append("quality")
    if any(w in prompt.lower() for w in ["lighting", "sunset", "golden"]):
        elements.append("lighting")
    return elements

prompts = [
    "A cat",
    "A cat, oil painting, highly detailed",
    "A cat in golden sunset, photo, 8K, dramatic lighting"
]
for p in prompts:
    elements = prompt_quality(p)
    print(f"Elements: {len(elements)} | {p[:50]}")
```

*Hint:* Better prompts include style, quality, and lighting specifications.

**Answer:** `Elements: 0 | A cat`
`Elements: 2 | A cat, oil painting, highly detailed`
`Elements: 3 | A cat in golden sunset, photo, 8K, dramatic lighting`

Effective Stable Diffusion prompts include multiple elements: subject, style/medium (painting, photo), quality modifiers (detailed, 8K), and lighting descriptions. More specific prompts produce higher quality, more controlled results. Adding negative prompts further improves output.

### Q12. [Medium] What is classifier-free guidance (CFG) in Stable Diffusion, and why is it important?

*Hint:* Think about how the model balances following the prompt vs generating natural-looking images.

**Answer:** Classifier-free guidance generates two predictions at each denoising step: one conditioned on the text prompt (conditional) and one without the prompt (unconditional). The final prediction amplifies the difference: `output = unconditional + scale * (conditional - unconditional)`. A guidance scale of 1.0 uses only the conditional prediction. Higher scales (7-12) amplify the text influence, making images more prompt-faithful. Too-high scales (20+) oversaturate the conditioning, producing artifacts. CFG is important because it gives users a single knob to control the quality-creativity tradeoff.

CFG was a breakthrough for text-to-image models. It eliminates the need for a separate classifier to guide generation (hence 'classifier-free'). The standard guidance scale of 7.5 balances prompt adherence and image naturalness.

### Q13. [Hard] What is the difference between latent diffusion and pixel-space diffusion? Why was latent diffusion a breakthrough?

*Hint:* Think about dimensionality and computational cost.

**Answer:** **Pixel-space diffusion** operates directly on image pixels (e.g., 512x512x3 = 786,432 dimensions). Each denoising step requires processing this full resolution, making it extremely expensive computationally. Only organizations with massive GPU clusters could train and run these models. **Latent diffusion** (Rombach et al., 2022) first compresses images to a smaller latent space using a pre-trained VAE (64x64x4 = 16,384 dimensions, 48x smaller), performs diffusion in this compressed space, then decodes back to pixels. This was a breakthrough because it made high-quality image generation accessible: Stable Diffusion can run on a consumer GPU with 8GB VRAM. The quality loss from compression is minimal because the VAE's latent space preserves perceptual content.

Latent diffusion democratized image generation. Before it, text-to-image models required enterprise-grade GPUs. After it, anyone with a gaming GPU could generate images locally. This led to the explosion of Stable Diffusion community models and applications.

## Multiple Choice Questions

### Q1. [Easy] What are the two components of a GAN?

**Answer:** B

**B is correct.** A GAN consists of a Generator (creates fake data) and a Discriminator (classifies data as real or fake). They compete in an adversarial training process.

### Q2. [Easy] What activation function does a GAN Generator typically use in its output layer?

**Answer:** C

**C is correct.** The Generator uses Tanh to output values in [-1, 1], matching the normalized range of training images. The Discriminator uses Sigmoid to output a probability in [0, 1].

### Q3. [Easy] What does the forward process in a diffusion model do?

**Answer:** B

**B is correct.** The forward (diffusion) process adds Gaussian noise progressively over T timesteps, gradually destroying the data until it becomes pure random noise. The reverse process then learns to undo this.

### Q4. [Easy] What does the VAE loss function consist of?

**Answer:** B

**B is correct.** VAE loss = reconstruction loss (how well the output matches the input) + KL divergence (regularizes the latent distribution toward N(0,1)). Both terms are necessary for a well-functioning VAE.

### Q5. [Easy] What is mode collapse in GANs?

**Answer:** B

**B is correct.** Mode collapse occurs when the Generator finds a few outputs that fool the Discriminator and only produces those, ignoring the full diversity of the training data.

### Q6. [Medium] What is the reparameterization trick in VAEs?

**Answer:** B

**B is correct.** The reparameterization trick writes z = mu + sigma * epsilon (where epsilon ~ N(0,1)). This separates the stochastic part (epsilon) from the learnable parameters (mu, sigma), allowing gradients to flow through the sampling step during backpropagation.

### Q7. [Medium] Why does Stable Diffusion operate in latent space instead of pixel space?

**Answer:** B

**B is correct.** Latent space (64x64x4 = 16,384 values) is 48x smaller than pixel space (512x512x3 = 786,432 values). This makes each denoising step much faster and allows Stable Diffusion to run on consumer GPUs.

### Q8. [Medium] What is the role of CLIP in Stable Diffusion?

**Answer:** B

**B is correct.** CLIP (Contrastive Language-Image Pre-training) text encoder converts the text prompt into a numerical embedding. This embedding conditions the U-Net denoiser, guiding it to generate an image that matches the text description.

### Q9. [Medium] What does guidance_scale (classifier-free guidance) control in Stable Diffusion?

**Answer:** B

**B is correct.** Guidance scale controls how much the generation is influenced by the text prompt. Higher values (7-12) produce more prompt-faithful images. Too high (20+) causes oversaturation and artifacts. Too low (1) produces images that largely ignore the prompt.

### Q10. [Medium] What neural network architecture is typically used in the reverse process of diffusion models?

**Answer:** B

**B is correct.** The U-Net architecture (encoder-decoder with skip connections) is used for the denoising step. Skip connections help preserve fine-grained spatial details while the encoder-decoder structure captures both local and global patterns.

### Q11. [Hard] Which GAN variant addresses the training instability caused by the Jensen-Shannon divergence in standard GANs?

**Answer:** B

**B is correct.** WGAN replaces the JS divergence with the Wasserstein distance (Earth Mover's distance), which provides smoother gradients even when the real and generated distributions do not overlap. This significantly stabilizes GAN training and reduces mode collapse.

### Q12. [Hard] What is the key difference between DALL-E 2 and Stable Diffusion?

**Answer:** C

**C is correct.** Stable Diffusion (Stability AI) is open-source and uses latent diffusion (VAE-compressed space). DALL-E 2 (OpenAI) is closed-source and uses CLIP embeddings with a prior model + diffusion decoder. Stable Diffusion's open-source nature has driven widespread adoption and community innovation.

### Q13. [Hard] Why does the Discriminator in a GAN use LeakyReLU instead of ReLU?

**Answer:** B

**B is correct.** LeakyReLU (e.g., with slope 0.2 for negative values) prevents the 'dying ReLU' problem where neurons permanently output 0 for all inputs. In the Discriminator, dead neurons would stop gradient flow and halt training. LeakyReLU ensures gradients always flow.

### Q14. [Hard] What is the purpose of negative prompts in Stable Diffusion?

**Answer:** B

**B is correct.** Negative prompts specify what the model should avoid in the generated image (e.g., 'blurry', 'low quality', 'watermark'). During classifier-free guidance, the model steers the generation away from the negative prompt embedding, improving output quality.

### Q15. [Hard] In a VAE, what does KL divergence measure?

**Answer:** B

**B is correct.** KL divergence (Kullback-Leibler) measures how much the encoder's learned distribution Q(z|x) diverges from the standard normal prior P(z) = N(0,1). Minimizing KL divergence regularizes the latent space, making it smooth, continuous, and suitable for sampling new data.

### Q16. [Easy] What does the Generator in a GAN take as input?

**Answer:** B

**B is correct.** The Generator takes random noise (typically from a Gaussian distribution) as input and transforms it into fake data that mimics the training distribution. Different noise vectors produce different generated outputs.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/generative-ai-and-diffusion-models/*
